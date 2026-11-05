/* ==========================================================
   PROCEDURAL CUT-PAPER ART — "Braided Land, Starlit Sky"
   Mountains, braided rivers, star fields, paddocks, guides,
   badges and artefacts are drawn in code, so the app looks
   finished with zero image files. ChatGPT images (assets/img)
   fade in on top when they exist.
   ========================================================== */
(function(BM){
  "use strict";
  const s = BM.s, svg = BM.svg;
  const A = BM.art = {};

  /* ---------- shared SVG defs (filters, gradients) ---------- */
  A.installDefs = function(){
    if (document.getElementById("bm-defs")) return;
    const d = svg(10,10,{ id:"bm-defs", width:0, height:0, style:"position:absolute;width:0;height:0;overflow:hidden", "aria-hidden":"true" });
    d.innerHTML = `
    <defs>
      <filter id="fx-rough" x="-5%" y="-5%" width="110%" height="110%">
        <feTurbulence type="fractalNoise" baseFrequency=".035" numOctaves="2" seed="3" result="t"/>
        <feDisplacementMap in="SourceGraphic" in2="t" scale="5" xChannelSelector="R" yChannelSelector="G"/>
      </filter>
      <filter id="fx-paper" x="-20%" y="-20%" width="140%" height="150%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="b1"/><feOffset in="b1" dy="2" result="o1"/>
        <feGaussianBlur in="SourceAlpha" stdDeviation="9" result="b2"/><feOffset in="b2" dy="10" result="o2"/>
        <feComponentTransfer in="o1" result="s1"><feFuncA type="linear" slope=".35"/></feComponentTransfer>
        <feComponentTransfer in="o2" result="s2"><feFuncA type="linear" slope=".38"/></feComponentTransfer>
        <feMerge><feMergeNode in="s2"/><feMergeNode in="s1"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
      <filter id="fx-paper-rough" x="-20%" y="-20%" width="140%" height="150%">
        <feTurbulence type="fractalNoise" baseFrequency=".04" numOctaves="2" seed="7" result="t"/>
        <feDisplacementMap in="SourceGraphic" in2="t" scale="4" xChannelSelector="R" yChannelSelector="G" result="r"/>
        <feGaussianBlur in="r" stdDeviation="2" result="b1"/><feOffset in="b1" dy="3" result="o1"/>
        <feGaussianBlur in="r" stdDeviation="10" result="b2"/><feOffset in="b2" dy="12" result="o2"/>
        <feColorMatrix in="o1" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 .35 0" result="s1"/>
        <feColorMatrix in="o2" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 .4 0" result="s2"/>
        <feMerge><feMergeNode in="s2"/><feMergeNode in="s1"/><feMergeNode in="r"/></feMerge>
      </filter>
      <filter id="fx-grain"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2"/><feColorMatrix values="0 0 0 0 .28 0 0 0 0 .26 0 0 0 0 .22 0 0 0 .2 0"/><feComposite in2="SourceGraphic" operator="in"/></filter>
      <filter id="fx-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      <filter id="fx-softglow" x="-80%" y="-80%" width="260%" height="260%"><feGaussianBlur stdDeviation="22"/></filter>
      <filter id="fx-blur8" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="8"/></filter>
      <radialGradient id="g-lamp" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#E6C873" stop-opacity=".9"/><stop offset="1" stop-color="#E6C873" stop-opacity="0"/></radialGradient>
      <radialGradient id="g-spark" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#F6EBC8" stop-opacity=".9"/><stop offset="1" stop-color="#F6EBC8" stop-opacity="0"/></radialGradient>
      <radialGradient id="g-star" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#fffaf0" stop-opacity="1"/><stop offset=".35" stop-color="#F6EBC8" stop-opacity=".55"/><stop offset="1" stop-color="#F6EBC8" stop-opacity="0"/></radialGradient>
      <linearGradient id="g-water" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#BFE0EA"/><stop offset="1" stop-color="#6FB6D6"/></linearGradient>
      <pattern id="p-fret" width="64" height="24" patternUnits="userSpaceOnUse"><path d="M0 20h64" stroke="#A7A59C" stroke-width="2"/><path d="M26 20 L32 8 L38 20Z" fill="#B4412F"/></pattern>
      <pattern id="p-grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#3D8DB3" stroke-opacity=".16" stroke-width="1.5"/></pattern>
      <pattern id="p-dots" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="11" cy="11" r="2.2" fill="#000" fill-opacity=".16"/></pattern>
      <pattern id="p-stones" width="26" height="18" patternUnits="userSpaceOnUse"><ellipse cx="7" cy="6" rx="5" ry="3" fill="#cfccc2"/><ellipse cx="19" cy="13" rx="6" ry="3.4" fill="#b9b6ab"/><ellipse cx="4" cy="15" rx="3" ry="2" fill="#d9d6cc"/></pattern>
    </defs>`;
    document.body.appendChild(d);
  };

  /* ---------- primitives ---------- */
  A.contours = function(W, H, seed, color, count){
    const rnd = BM.rng(seed), g = s("g", { fill:"none", stroke:color, "stroke-width":2 });
    const centres = Array.from({ length: count||4 }, () => [rnd()*W, rnd()*H, 6 + Math.floor(rnd()*7)]);
    centres.forEach(([cx,cy,rings]) => {
      const ph = Array.from({ length:5 }, () => rnd()*6.28), am = Array.from({ length:5 }, () => .05 + rnd()*.16);
      for (let r=1;r<=rings;r++){
        const R = r*46, pts = [];
        for (let a=0;a<=64;a++){
          const t = a/64*Math.PI*2;
          let k = 1; for (let j=0;j<5;j++) k += am[j]*Math.sin(t*(j+1) + ph[j]);
          pts.push(`${(cx + Math.cos(t)*R*k).toFixed(1)} ${(cy + Math.sin(t)*R*k*.8).toFixed(1)}`);
        }
        g.appendChild(s("path", { d:"M" + pts.join(" L") + "Z", opacity: r === rings ? .9 : .5 }));
      }
    });
    return g;
  };

  /* jagged ridge points by midpoint displacement */
  A.ridgePts = function(W, base, amp, seed, opt){
    opt = opt || {};
    const rnd = BM.rng(seed);
    let pts = [[-60, base - amp*(.25 + rnd()*.3)], [W+60, base - amp*(.25 + rnd()*.3)]];
    const peaks = opt.peaks || 4;
    // seed peaks
    const seedPts = [pts[0]];
    for (let i=1;i<peaks;i++){ const x = -60 + (W+120)*i/peaks + (rnd()-.5)*(W/peaks)*.5; seedPts.push([x, base - amp*(.45 + rnd()*.55)]); }
    seedPts.push(pts[1]); pts = seedPts;
    let disp = amp*(opt.rough || .32);
    for (let it=0; it<(opt.iter || 6); it++){
      const np = [];
      for (let i=0;i<pts.length-1;i++){
        const [x1,y1] = pts[i], [x2,y2] = pts[i+1];
        np.push(pts[i]); np.push([(x1+x2)/2 + (rnd()-.5)*(x2-x1)*.2, (y1+y2)/2 + (rnd()-.5)*disp]);
      }
      np.push(pts[pts.length-1]); pts = np; disp *= .55;
    }
    return pts;
  };
  const ptsD = pts => "M" + pts.map(p => p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" L");
  /* a filled mountain range with optional snow */
  A.range = function(W, H, base, amp, seed, fill, opt){
    opt = opt || {};
    const pts = A.ridgePts(W, base, amp, seed, opt);
    const g = s("g");
    g.appendChild(s("path", { d: ptsD(pts) + ` L${W+60} ${H+20} L-60 ${H+20}Z`, fill }));
    if (opt.snow){
      const rnd = BM.rng(seed + 99), line = opt.snowline || (base - amp*.5);
      // a cap that follows the ridge and tapers to the snowline (no streaks)
      let run = [];
      const flush = () => { if (run.length > 2){ const bot = run.map(([x,y]) => [x, y + Math.max(4, (line - y)*(.45 + rnd()*.3))]); g.appendChild(s("path", { d: ptsD(run) + " L" + bot.reverse().map(p => p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" L") + "Z", fill: opt.snow, opacity: opt.snowOpacity || .9 })); } run = []; };
      pts.forEach(p => { if (p[1] < line) run.push(p); else flush(); }); flush();
    }
    return g;
  };
  /* several ranges with atmospheric depth */
  A.mountains = function(W, H, seed, cols, opt){
    opt = opt || {};
    const g = s("g");
    const n = cols.length, top = opt.top != null ? opt.top : H*.35, bottom = opt.bottom != null ? opt.bottom : H*.8;
    cols.forEach((c, i) => {
      const base = top + (bottom - top)*(i/(Math.max(1, n-1))) + (opt.drop || 0);
      const amp = (opt.amp || H*.32) * (1 - i*.16);
      const lay = A.range(W, H, base, amp, seed + i*17, c, { snow: i < (opt.snowLayers == null ? 1 : opt.snowLayers) ? (opt.snowColor || "#F3F6F4") : null, peaks: (opt.peaks || 5) + i, shade: true });
      if (opt.paper !== false) lay.setAttribute("filter", "url(#fx-paper)");
      g.appendChild(lay);
    });
    return g;
  };

  /* braided river: threads that split and re-join over a shingle bed */
  A.braids = function(path, opt){
    opt = opt || {};
    const rnd = BM.rng(opt.seed || 5);
    const N = 160, P = [];
    // Catmull-Rom through path points
    const cr = (p0,p1,p2,p3,t) => { const t2 = t*t, t3 = t2*t; return [.5*((2*p1[0]) + (-p0[0]+p2[0])*t + (2*p0[0]-5*p1[0]+4*p2[0]-p3[0])*t2 + (-p0[0]+3*p1[0]-3*p2[0]+p3[0])*t3), .5*((2*p1[1]) + (-p0[1]+p2[1])*t + (2*p0[1]-5*p1[1]+4*p2[1]-p3[1])*t2 + (-p0[1]+3*p1[1]-3*p2[1]+p3[1])*t3)]; };
    const pp = [path[0], ...path, path[path.length-1]];
    for (let i=0;i<=N;i++){
      const u = i/N*(path.length-1), k = Math.min(path.length-2, Math.floor(u)), t = u - k;
      P.push(cr(pp[k], pp[k+1], pp[k+2], pp[k+3], t));
    }
    const nrm = P.map((p, i) => { const a = P[Math.max(0,i-1)], b = P[Math.min(N,i+1)]; const dx = b[0]-a[0], dy = b[1]-a[1], l = Math.hypot(dx,dy) || 1; return [-dy/l, dx/l]; });
    const w0 = opt.w0 != null ? opt.w0 : 10, w1 = opt.w1 != null ? opt.w1 : 60;
    const wid = i => w0 + (w1 - w0)*Math.pow(i/N, .8);
    const g = s("g", { class:"braids" });
    if (opt.bed !== false){
      const L = [], R = [];
      P.forEach((p, i) => { const w = wid(i)*1.25 + 4; L.push([p[0] + nrm[i][0]*w, p[1] + nrm[i][1]*w]); R.push([p[0] - nrm[i][0]*w, p[1] - nrm[i][1]*w]); });
      g.appendChild(s("path", { d: ptsD(L) + " L" + R.reverse().map(p => p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" L") + "Z", fill: opt.bedColor || "#A7A59C", opacity: opt.bedOpacity != null ? opt.bedOpacity : .55 }));
    }
    const threads = opt.threads || 5;
    for (let k=0;k<threads;k++){
      const ph = rnd()*6.28, fr = 3 + rnd()*5, ph2 = rnd()*6.28, fr2 = 7 + rnd()*6;
      const pts = P.map((p, i) => { const t = i/N, w = wid(i); const o = w*(.62*Math.sin(t*fr*6.283 + ph) + .38*Math.sin(t*fr2*6.283 + ph2)); return [p[0] + nrm[i][0]*o, p[1] + nrm[i][1]*o]; });
      g.appendChild(s("path", { d: ptsD(pts), fill:"none", stroke: opt.color || "#BFE0EA", "stroke-width": (opt.sw || 3) * (k === 0 ? 1.6 : 1), "stroke-linecap":"round", "stroke-linejoin":"round", opacity: opt.opacity != null ? opt.opacity : .85, class: opt.flow ? "braid-flow" : null }));
    }
    g.centre = P;
    return g;
  };

  /* star field — punched holes in paper, gently breathing */
  A.stars = function(W, H, seed, count, opt){
    opt = opt || {};
    const rnd = BM.rng(seed), g = s("g", { class:"stars" });
    for (let i=0;i<count;i++){
      const x = rnd()*W, y = rnd()*H*(opt.maxY || 1), r = rnd() < .06 ? 2.6 + rnd()*2 : .8 + rnd()*1.5;
      const c = s("circle", { cx:x.toFixed(1), cy:y.toFixed(1), r:r.toFixed(2), fill: rnd() < .12 ? "#cfe0ff" : rnd() < .2 ? "#ffe2b8" : "#F6EBC8", opacity:(.45 + rnd()*.55).toFixed(2) });
      if (r > 2.4){ c.setAttribute("class", "tw"); c.style.animationDelay = (-rnd()*6).toFixed(2) + "s"; g.appendChild(s("circle", { cx:x.toFixed(1), cy:y.toFixed(1), r:(r*4).toFixed(1), fill:"url(#g-star)", opacity:.5 })); }
      g.appendChild(c);
    }
    return g;
  };
  /* Milky Way band */
  A.milkyway = function(W, H, seed, opacity){
    const rnd = BM.rng(seed), g = s("g", { opacity: opacity == null ? .5 : opacity });
    g.appendChild(s("path", { d:`M-100 ${H*.95} C ${W*.3} ${H*.55}, ${W*.6} ${H*.35}, ${W+100} ${-H*.05}`, stroke:"#9fb0e8", "stroke-width":H*.2, fill:"none", opacity:.18, filter:"url(#fx-softglow)" }));
    for (let i=0;i<700;i++){ const t = rnd(), x = -100 + (W+200)*t, y = H*.95 - (H)*t + (rnd()-.5)*H*.22 + Math.sin(t*9)*30; g.appendChild(s("circle", { cx:x.toFixed(0), cy:y.toFixed(0), r:(.4 + rnd()*.9).toFixed(2), fill:"#e8ecff", opacity:(.2 + rnd()*.5).toFixed(2) })); }
    return g;
  };

  /* tussock clump */
  A.tussock = function(x, y, size, fill, seed){
    const rnd = BM.rng(seed || (x*7 + y)), g = s("g", { fill:"none", stroke:fill, "stroke-linecap":"round" });
    const n = 14;
    for (let i=0;i<n;i++){
      const a = -Math.PI/2 + (i/(n-1) - .5)*2.2 + (rnd()-.5)*.2, L = size*(.6 + rnd()*.5);
      const bx = x + (rnd()-.5)*size*.25, ex = bx + Math.cos(a)*L, ey = y + Math.sin(a)*L*.95;
      g.appendChild(s("path", { d:`M${bx.toFixed(1)} ${y} Q ${(bx + Math.cos(a)*L*.4).toFixed(1)} ${(y + Math.sin(a)*L*.7).toFixed(1)} ${ex.toFixed(1)} ${(ey + L*.15*Math.sign(Math.cos(a))).toFixed(1)}`, "stroke-width": (size*.05).toFixed(1) }));
    }
    return g;
  };

  /* aerial paddocks with centre-pivot circles and shelterbelts */
  A.paddocks = function(W, H, seed, opt){
    opt = opt || {};
    const rnd = BM.rng(seed), g = s("g");
    const cols = opt.cols || ["#4f6b31","#5E7F3A","#6f8f45","#8a9a4e","#b39a52","#C9A04A","#7a8a42","#a88f4a"];
    const cw = opt.cell || 260;
    for (let y=-cw; y<H+cw; y+=cw*.8){
      let x = -cw*.5 + rnd()*cw*.3;
      while (x < W + cw){
        const w = cw*(.6 + rnd()*.9), hh = cw*.8;
        const sk = (rnd()-.5)*18;
        g.appendChild(s("path", { d:`M${x} ${y} L${x+w} ${y+sk} L${x+w+sk} ${y+hh} L${x+sk} ${y+hh-sk}Z`, fill:cols[Math.floor(rnd()*cols.length)], opacity: opt.opacity || 1, stroke: opt.edge || "rgba(20,30,15,.35)", "stroke-width":3 }));
        if (rnd() < (opt.pivots == null ? .35 : opt.pivots)){
          const r = hh*.46;
          g.appendChild(s("circle", { cx:x + w/2, cy:y + hh/2, r, fill:"#7FA55A", opacity:(opt.opacity || 1)*.9 }));
          g.appendChild(s("circle", { cx:x + w/2, cy:y + hh/2, r, fill:"none", stroke:"rgba(255,255,255,.18)", "stroke-width":2, "stroke-dasharray":"2 9" }));
          const a = rnd()*6.28; g.appendChild(s("line", { x1:x + w/2, y1:y + hh/2, x2:x + w/2 + Math.cos(a)*r, y2:y + hh/2 + Math.sin(a)*r, stroke:"#dfe6e8", "stroke-width":3, opacity:.8 }));
        }
        x += w;
      }
      if (rnd() < .5) g.appendChild(s("path", { d:`M-20 ${y + rnd()*20} L${W+20} ${y + 10 + rnd()*20}`, stroke: opt.belt || "#2c3f20", "stroke-width":10, opacity:.7 }));
    }
    return g;
  };

  /* red trig triangle */
  A.trig = function(x, y, size, col){
    const g = s("g", { transform:`translate(${x} ${y})` });
    g.appendChild(s("path", { d:`M0 ${-size} L${size*.9} ${size*.6} L${-size*.9} ${size*.6}Z`, fill: col || "#B4412F" }));
    g.appendChild(s("circle", { cx:0, cy:size*.05, r:size*.16, fill:"#F3ECDD" }));
    return g;
  };

  /* nor'west arch cloud band */
  A.arch = function(W, y, opacity){
    const g = s("g", { opacity: opacity == null ? .5 : opacity });
    g.appendChild(s("path", { d:`M-40 ${y} C ${W*.3} ${y-50}, ${W*.7} ${y-40}, ${W+40} ${y-10} L${W+40} ${y-180} C ${W*.6} ${y-230}, ${W*.3} ${y-220}, -40 ${y-170}Z`, fill:"#EADBB8", filter:"url(#fx-blur8)" }));
    return g;
  };

  /* ---------- slide backdrops (parallax layers) ---------- */
  function layer(depth, node, cls){ const wrap = svg(2000,1160,{ class:"layer " + (cls||""), preserveAspectRatio:"xMidYMid slice", "data-depth":depth }); wrap.appendChild(node); return wrap; }
  A.backdrop = function(subject, variant, seed){
    const root = BM.h("div", { class:"backdrop" });
    seed = seed || 7;
    const W = 2000, H = 1160;
    if (subject === "history"){
      root.style.background = "linear-gradient(180deg, #3a2420 0%, #5a2e25 34%, #2a2a2c 70%, #171d22 100%)";
      const sky = s("g");
      sky.appendChild(s("circle", { cx:1480, cy:430, r:230, fill:"#E6C873", opacity:.10 }));
      sky.appendChild(s("circle", { cx:1480, cy:430, r:120, fill:"#E6C873", opacity:.16 }));
      sky.appendChild(A.arch(W, 360, .14));
      root.appendChild(layer(.12, sky));
      const grid = s("g"); grid.appendChild(s("rect", { width:W, height:H, fill:"url(#p-grid)", opacity:.35 }));
      grid.appendChild(A.contours(W, H, seed, "rgba(230,200,115,.10)", 4));
      root.appendChild(layer(.2, grid));
      root.appendChild(layer(.35, A.mountains(W, H, seed, ["#5a3730"], { top:720, amp:360, snowLayers:1, snowColor:"#94786e", peaks:6 })));
      root.appendChild(layer(.6, A.mountains(W, H, seed+5, ["#3f2a28"], { top:790, amp:260, snowLayers:0, peaks:4 })));
      const plain = s("g", { filter:"url(#fx-paper)" });
      plain.appendChild(s("path", { d:`M-40 960 Q 700 900 1300 940 T 2040 920 V1200 H-40Z`, fill:"#22262a" }));
      plain.appendChild(A.braids([[2100,930],[1500,990],[900,1030],[300,1080],[-100,1140]], { seed, w0:30, w1:70, color:"#9fc6d4", opacity:.45, bedColor:"#4b4f52", bedOpacity:.6 }));
      root.appendChild(layer(.9, plain));
    } else if (subject === "geography"){
      root.style.background = "linear-gradient(180deg, #2a5f7a 0%, #1f4b62 40%, #173646 75%, #10242f 100%)";
      const topo = s("g"); topo.appendChild(A.contours(W, H, seed, "rgba(191,224,234,.13)", 6));
      root.appendChild(layer(.15, topo));
      root.appendChild(layer(.3, A.mountains(W, H, seed, ["#4a6c80","#355a6f"], { top:760, bottom:860, amp:330, snowLayers:1, snowColor:"#9fbccb", peaks:6 })));
      const near = s("g");
      near.appendChild(A.mountains(W, H, seed+9, ["#24485a"], { top:860, amp:200, snowLayers:0, peaks:3 }));
      near.appendChild(A.braids([[-80,1150],[500,1080],[1100,1060],[1700,1000],[2100,980]], { seed:seed+2, w0:60, w1:30, color:"#BFE0EA", opacity:.5, bedColor:"#7c8a8e", bedOpacity:.35 }));
      root.appendChild(layer(.8, near));
    } else if (subject === "science"){
      root.style.background = "radial-gradient(120% 90% at 60% 0%, #22306a 0%, #182252 35%, #121A36 70%, #0b1024 100%)";
      root.appendChild(layer(.06, A.milkyway(W, H, seed, .55)));
      root.appendChild(layer(.12, A.stars(W, H, seed, 420, { maxY:.9 })));
      root.appendChild(layer(.7, A.mountains(W, H, seed+3, ["#1a2148","#10152f"], { top:880, bottom:980, amp:260, snowLayers:1, snowColor:"#3b4677", peaks:6 })));
    } else if (subject === "technology"){
      root.style.background = "linear-gradient(160deg, #2c3a22 0%, #1f2b1a 55%, #151d13 100%)";
      const fields = s("g", { opacity:.42, transform:"rotate(-8 1000 580)" }); fields.appendChild(A.paddocks(W, H, seed, { opacity:1, pivots:.45, cols:["#34472a","#3d5230","#465c34","#55623a","#5f5a36","#4a5631"] }));
      root.appendChild(layer(.2, fields));
      const grid = s("g", { stroke:"rgba(243,236,221,.05)", "stroke-width":2 });
      for (let x=0;x<=W;x+=80) grid.appendChild(s("line", { x1:x, x2:x, y1:0, y2:H }));
      root.appendChild(layer(.35, grid));
      root.appendChild(layer(.75, A.mountains(W, H, seed+4, ["#1a2416"], { top:1020, amp:120, snowLayers:0, peaks:6, paper:true })));
    } else if (subject === "art"){
      root.style.background = "linear-gradient(170deg, #F6F0E2 0%, #F3ECDD 45%, #E7DBC2 100%)";
      const fib = s("g"); fib.appendChild(s("rect", { width:W, height:H, filter:"url(#fx-grain)", fill:"#fff" }));
      root.appendChild(layer(.05, fib));
      const wash = s("g", { opacity:.32 });
      wash.appendChild(A.arch(W, 300, .9));
      root.appendChild(layer(.15, wash));
      const far = A.mountains(W, H, seed, ["#c7d6dc","#b2c3c5"], { top:860, bottom:930, amp:320, snowLayers:1, snowColor:"#f4f7f6", peaks:6, paper:false });
      far.setAttribute("opacity", ".55");
      root.appendChild(layer(.3, far));
      const near = s("g", { opacity:.55 });
      for (let i=0;i<9;i++) near.appendChild(A.tussock(80 + i*240 + (i%2)*40, 1150, 120 + (i%3)*30, "#C9A04A", seed + i));
      root.appendChild(layer(.7, near));
      const fret = s("g"); fret.appendChild(s("rect", { x:0, y:1110, width:W, height:24, fill:"url(#p-fret)", opacity:.45 }));
      root.appendChild(layer(.8, fret));
    } else if (subject === "storm" || subject === "flood"){
      root.style.background = "linear-gradient(#20292e, #161c20 55%, #0c1013)";
    } else if (subject === "collector" || subject === "dealer"){
      root.style.background = "radial-gradient(80% 70% at 40% 50%, #2b2219 0%, #15100c 60%, #070504 100%)";
      const scan = s("g", { opacity:.18 });
      for (let y=0;y<H;y+=6) scan.appendChild(s("rect", { x:0, y, width:W, height:2, fill:"#000" }));
      root.appendChild(layer(0, scan));
      const maps = s("g", { opacity:.07, transform:"rotate(-12 1500 600)" });
      maps.appendChild(s("rect", { x:1100, y:200, width:800, height:560, fill:"#F3ECDD" }));
      maps.appendChild(A.contours(800, 560, 4, "#000", 3));
      root.appendChild(layer(.3, maps));
    } else { // "nz" / "land" — tākata whenua & tikanga panels
      root.style.background = "linear-gradient(180deg, #23403a 0%, #1a302c 50%, #111f1d 100%)";
      const topo = s("g"); topo.appendChild(A.contours(W, H, seed+3, "rgba(191,224,234,.12)", 4));
      root.appendChild(layer(.2, topo));
      root.appendChild(layer(.5, A.mountains(W, H, seed+1, ["#2c4a43"], { top:900, amp:260, snowLayers:1, snowColor:"#567069", peaks:5 })));
    }
    return root;
  };

  /* ---------- guide portraits (faceless editorial cut-paper busts) ---------- */
  const GUIDES = {
    nell:  { name:"Nell Baird", role:"Archivist · Conservator", bg:["#B4412F","#4a1a12"], skin:"#e2b694", hair:"#7a4a2c", shirt:"#2F3E46", accent:"#E6C873", acc:"loupe", hairStyle:"bob" },
    sam:   { name:"Sam Rāwiri-McKay", role:"DOC Ranger · ex-Musterer", bg:["#3D8DB3","#123447"], skin:"#a8734d", hair:"#1f1a16", shirt:"#8b2f2a", accent:"#BFE0EA", acc:"dog", hairStyle:"short", hat:true },
    priya: { name:"Dr Priya Nair", role:"Astronomer", bg:["#2F3D7A","#0d1230"], skin:"#9a6644", hair:"#141010", shirt:"#3a3f5c", accent:"#F6EBC8", acc:"telescope", hairStyle:"long" },
    liv:   { name:"Liv Bennett", role:"Agricultural Engineer", bg:["#5E7F3A","#22331a"], skin:"#f0c9a5", hair:"#b88a3e", shirt:"#2b4a6a", accent:"#E6C873", acc:"tablet", hairStyle:"pony" },
    tom:   { name:"Tom Whitaker", role:"Landscape Painter", bg:["#C08A2E","#4d3510"], skin:"#d9a682", hair:"#d8d4cc", shirt:"#5a6b5a", accent:"#F3ECDD", acc:"brush", hairStyle:"short", beard:true },
    dealer:{ name:"The Dealer", role:"Antique maps · identity unknown", bg:["#2b2219","#070504"], skin:"#000", hair:"#000", shirt:"#000", accent:"#C9A04A", acc:"none" }
  };
  A.GUIDES = GUIDES;
  A.portrait = function(id){
    const G = GUIDES[id] || GUIDES.nell;
    const v = svg(600, 780, { preserveAspectRatio:"xMidYMid slice" });
    const gid = "pg-" + id + Math.floor(Math.random()*1e6);
    v.appendChild(s("defs", null, s("radialGradient", { id:gid, cx:".5", cy:".35", r:".8" }, s("stop", { offset:"0", "stop-color":G.bg[0] }), s("stop", { offset:"1", "stop-color":G.bg[1] }))));
    v.appendChild(s("rect", { width:600, height:780, fill:`url(#${gid})` }));
    if (id === "priya") v.appendChild(A.stars(600, 500, 12, 90));
    const ring = s("g", { opacity:.16 }); ring.appendChild(A.contours(600, 780, id.length*13, "#fff", 2)); v.appendChild(ring);
    const bgm = A.range(600, 780, 600, 300, id.length*7 + 3, "rgba(0,0,0,.22)", { snow: id === "priya" ? null : "rgba(255,255,255,.18)", peaks:3 });
    v.appendChild(bgm);
    if (id === "dealer"){ // never a face: a gloved hand, a loupe and a stack of maps
      const g = s("g", { filter:"url(#fx-paper-rough)" });
      [0,1,2].forEach(i => g.appendChild(s("rect", { x:90 + i*14, y:470 - i*26, width:420, height:260, rx:6, fill:["#cbb98f","#d9c9a2","#e8dcc0"][i], transform:`rotate(${-8 + i*5} 300 600)` })));
      g.appendChild(s("path", { d:"M140 600 q90 -40 160 -20 q40 10 60 -10 q20 -30 60 -26", stroke:"#8a6f4a", "stroke-width":4, fill:"none", opacity:.6 }));
      g.appendChild(s("path", { d:"M330 300 C 300 330, 300 380, 330 410 L 420 470 C 450 490, 500 470, 500 430 L 470 330 C 460 290, 400 270, 370 280Z", fill:"#1b1714" }));
      g.appendChild(s("path", { d:"M470 330 L 560 300 L 600 360 L 500 430Z", fill:"#2a231d" }));
      g.appendChild(s("circle", { cx:300, cy:300, r:70, fill:"none", stroke:"#C9A04A", "stroke-width":14 }));
      g.appendChild(s("circle", { cx:300, cy:300, r:58, fill:"rgba(191,224,234,.25)" }));
      g.appendChild(s("path", { d:"M268 270 q20 -18 46 -10", stroke:"#fff", "stroke-width":6, fill:"none", opacity:.5, "stroke-linecap":"round" }));
      v.appendChild(g);
      return v;
    }
    const body = s("g", { filter:"url(#fx-paper-rough)" });
    body.appendChild(s("path", { d:"M40 780 C 60 600, 170 540, 300 540 C 430 540, 540 600, 560 780Z", fill:G.shirt }));
    if (id === "sam"){ for (let i=0;i<7;i++) body.appendChild(s("path", { d:`M${80 + i*70} 600 V780`, stroke:"#5c1d1a", "stroke-width":14, opacity:.6 })); for (let i=0;i<3;i++) body.appendChild(s("path", { d:`M40 ${640 + i*50} H560`, stroke:"#5c1d1a", "stroke-width":12, opacity:.5 })); }
    if (id === "liv"){ body.appendChild(s("path", { d:"M210 560 L230 780 M390 560 L370 780", stroke:"#E6C873", "stroke-width":16 })); }
    if (id === "nell"){ body.appendChild(s("path", { d:"M250 545 L300 640 L350 545", fill:"#F3ECDD" })); }
    body.appendChild(s("path", { d:"M255 470 L345 470 L352 560 Q300 590 248 560Z", fill:G.skin }));
    body.appendChild(s("path", { d:"M255 520 Q300 548 345 520 L346 540 Q300 566 254 540Z", fill:"#000", opacity:.18 }));
    // hair behind
    if (G.hairStyle === "long") body.appendChild(s("path", { d:"M180 330 C 170 200, 430 200, 420 330 L 440 560 Q 300 600 160 560Z", fill:G.hair }));
    if (G.hairStyle === "bob") body.appendChild(s("path", { d:"M190 320 C 180 190, 420 190, 410 320 L 418 470 Q 300 500 182 470Z", fill:G.hair }));
    // head
    body.appendChild(s("ellipse", { cx:300, cy:360, rx:108, ry:130, fill:G.skin }));
    body.appendChild(s("path", { d:"M300 230 C 360 236, 404 300, 406 360 C 406 430, 370 480, 300 490 C 340 470, 372 420, 372 360 C 370 300, 344 250, 300 230Z", fill:"#000", opacity:.12 }));
    // hair front
    if (G.hairStyle === "short") body.appendChild(s("path", { d:"M192 340 C 180 240, 250 205, 300 206 C 370 206, 420 250, 410 340 C 390 290, 340 268, 300 270 C 250 272, 210 290, 192 340Z", fill:G.hair }));
    if (G.hairStyle === "bob" || G.hairStyle === "long") body.appendChild(s("path", { d:"M190 360 C 180 240, 260 205, 310 208 C 380 214, 424 270, 412 360 C 396 300, 330 262, 290 300 C 260 280, 220 300, 190 360Z", fill:G.hair }));
    if (G.hairStyle === "pony"){ body.appendChild(s("path", { d:"M195 340 C 186 240, 256 208, 304 208 C 372 210, 420 256, 408 340 C 390 290, 340 262, 300 266 C 252 268, 214 292, 195 340Z", fill:G.hair })); body.appendChild(s("path", { d:"M400 300 C 470 320, 480 420, 440 500 C 450 420, 430 360, 392 330Z", fill:G.hair })); }
    if (G.beard) body.appendChild(s("path", { d:"M214 400 C 220 470, 260 500, 300 502 C 340 500, 380 470, 386 400 C 360 440, 330 452, 300 452 C 270 452, 240 440, 214 400Z", fill:G.hair }));
    if (G.hat){ body.appendChild(s("ellipse", { cx:300, cy:268, rx:170, ry:30, fill:"#4b3a2a" })); body.appendChild(s("path", { d:"M210 268 C 214 190, 386 190, 390 268Z", fill:"#5c4733" })); body.appendChild(s("path", { d:"M212 252 H388", stroke:"#2a1f16", "stroke-width":10 })); }
    v.appendChild(body);
    // accessory
    const acc = s("g", { filter:"url(#fx-paper)" });
    if (G.acc === "loupe"){ acc.appendChild(s("circle", { cx:470, cy:640, r:58, fill:"rgba(191,224,234,.3)", stroke:G.accent, "stroke-width":12 })); acc.appendChild(s("rect", { x:500, y:680, width:26, height:110, rx:10, fill:"#2a1f16", transform:"rotate(-35 513 735)" })); acc.appendChild(s("path", { d:"M60 700 h170 v80 h-170z", fill:"#E8DCC0" })); acc.appendChild(s("path", { d:"M80 720 h120 M80 740 h90", stroke:"#6b7a80", "stroke-width":4 })); }
    if (G.acc === "dog"){ const d = s("g", { transform:"translate(430 600)" }); d.appendChild(s("path", { d:"M-40 180 C -50 100, -10 60, 30 60 C 70 60, 100 100, 90 180Z", fill:"#1d1a17" })); d.appendChild(s("ellipse", { cx:30, cy:40, rx:46, ry:40, fill:"#1d1a17" })); d.appendChild(s("path", { d:"M2 14 L-8 -24 L22 6Z M58 14 L70 -24 L40 6Z", fill:"#1d1a17" })); d.appendChild(s("path", { d:"M10 50 Q30 76 52 50 Q30 92 10 50Z", fill:"#f3ecdd" })); d.appendChild(s("ellipse", { cx:30, cy:62, rx:9, ry:6, fill:"#000" })); acc.appendChild(d); }
    if (G.acc === "telescope"){ acc.appendChild(s("rect", { x:420, y:520, width:200, height:46, rx:10, fill:"#d9d4c4", transform:"rotate(-32 520 543)" })); acc.appendChild(s("rect", { x:556, y:470, width:40, height:66, rx:6, fill:"#9aa0b4", transform:"rotate(-32 576 503)" })); acc.appendChild(s("path", { d:"M500 590 L460 780 M520 590 L560 780 M510 590 L510 780", stroke:"#cfc8b6", "stroke-width":8 })); }
    if (G.acc === "tablet"){ acc.appendChild(s("rect", { x:70, y:620, width:170, height:130, rx:14, fill:"#1b2328", transform:"rotate(-8 155 685)" })); acc.appendChild(s("circle", { cx:155, cy:684, r:42, fill:"none", stroke:"#7FA55A", "stroke-width":6, transform:"rotate(-8 155 685)" })); acc.appendChild(s("line", { x1:155, y1:684, x2:190, y2:664, stroke:"#BFE0EA", "stroke-width":5 })); }
    if (G.acc === "brush"){ acc.appendChild(s("rect", { x:470, y:430, width:16, height:240, rx:6, fill:"#6b4a2a", transform:"rotate(18 478 550)" })); acc.appendChild(s("path", { d:"M500 410 q14 -40 0 -60 q-16 20 -16 60z", fill:"#3D8DB3", transform:"rotate(18 478 550)" })); acc.appendChild(s("ellipse", { cx:120, cy:700, rx:90, ry:56, fill:"#efe6d2" })); [["#3D8DB3",80,690],["#C9A04A",116,672],["#B4412F",152,690],["#5E7F3A",120,716]].forEach(([c,x,y]) => acc.appendChild(s("circle", { cx:x, cy:y, r:13, fill:c }))); }
    v.appendChild(acc);
    return v;
  };

  /* ---------- level badges: seedling / wheat sheaf / feather & star ---------- */
  A.levelIcon = function(lvl, size){
    const v = svg(200, 200, { width:size||200, height:size||200 });
    const g = s("g", { filter:"url(#fx-paper)" });
    if (lvl === "d"){
      g.appendChild(s("circle", { cx:100, cy:100, r:92, fill:"#A8692E" }));
      g.appendChild(s("path", { d:"M40 152 Q100 134 160 152 L160 172 Q100 192 40 172Z", fill:"#4b3a2a" }));
      g.appendChild(s("path", { d:"M100 150 C 100 120, 96 100, 100 76", stroke:"#7FA55A", "stroke-width":9, fill:"none", "stroke-linecap":"round" }));
      g.appendChild(s("path", { d:"M100 96 C 76 70, 52 74, 46 90 C 66 100, 86 100, 100 96Z", fill:"#9CC26A" }));
      g.appendChild(s("path", { d:"M100 84 C 120 54, 148 56, 156 72 C 138 86, 116 90, 100 84Z", fill:"#9CC26A" }));
    } else if (lvl === "a"){
      g.appendChild(s("circle", { cx:100, cy:100, r:92, fill:"#4F7A35" }));
      for (let i=-3;i<=3;i++){ g.appendChild(s("path", { d:`M100 172 Q ${100 + i*6} 120 ${100 + i*14} 70`, stroke:"#E6C873", "stroke-width":5, fill:"none" })); g.appendChild(s("ellipse", { cx:100 + i*14, cy:60, rx:9, ry:22, fill:"#E6C873", transform:`rotate(${i*10} ${100 + i*14} 60)` })); }
      g.appendChild(s("rect", { x:80, y:118, width:40, height:14, rx:4, fill:"#A8692E" }));
    } else {
      g.appendChild(s("circle", { cx:100, cy:100, r:92, fill:"#3D8DB3" }));
      g.appendChild(s("path", { d:"M58 160 C 70 110, 110 66, 160 44 C 140 90, 110 130, 58 160Z", fill:"#F3ECDD" }));
      g.appendChild(s("path", { d:"M60 158 L150 54", stroke:"#3D8DB3", "stroke-width":3 }));
      g.appendChild(s("path", { d:"M70 60 l6 14 l15 1 l-11 10 l4 15 l-14 -8 l-14 8 l4 -15 l-11 -10 l15 -1z", fill:"#E6C873" }));
    }
    v.appendChild(g);
    return v;
  };
  A.LEVELS = { d:{ name:"Developing", color:"#A8692E" }, a:{ name:"Achieved", color:"#4F7A35" }, f:{ name:"Flying", color:"#3D8DB3" } };

  /* ---------- artefacts ---------- */
  const ART_IMG = { chest:"art-tin-chest", fieldbook:"art-field-book", theodolite:"art-theodolite", cottage:"art-stone-cottage", stones:"art-greywacke-stones", fleece:"art-merino-fleece", haybale:"art-hay-bale", gears:"art-gear-set", pivot:"art-pivot-span", starchart:"art-star-chart", printblock:"art-print-block", palette:"art-watercolour-palette", volcanic:"art-volcanic-rock", sketch:"art-field-sketch", tractor:"art-tractor", reaper:"art-reaper", steam:"art-steam-engine", header:"art-header-harvester", milking:"art-milking-shed", horse:"art-horse-plough", bullock:"art-bullock-dray", baler:"art-hay-baler" };
  A.artefactBox = function(kind, style){
    const box = BM.h("div", { class:"artefact-box", style:"position:relative;overflow:hidden;border-radius:10px;" + (style || "") });
    const v = A.artefact(kind); v.setAttribute("style", "position:absolute;inset:0;width:100%;height:100%"); box.appendChild(v);
    if (ART_IMG[kind]){
      const im = BM.imgSlot(ART_IMG[kind], "artefact-img"); im.style.cssText += ";position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:10px";
      im.addEventListener("load", () => { v.style.opacity = "0"; }); box.appendChild(im);
    }
    return box;
  };
  A.artefact = function(kind){
    const v = svg(600, 600);
    const bgc = { chest:"#3a4246", fieldbook:"#cdbf9c", theodolite:"#28343a", cottage:"#6f8fa0", sketch:"#e9e0c8", panel:"#2F3E46", oral:"#4F7A35", news:"#dcd8cf", app:"#1F2A30", reaper:"#d9cba6", steam:"#b8ab8c", tractor:"#c9b98f", header:"#E6C873", milking:"#bcc6c8", pivot:"#8fb36a", horse:"#d9cba6", bullock:"#d9cba6", baler:"#c9a04a", stones:"#7d8a8e", volcanic:"#c9b6a2", starchart:"#121A36", fleece:"#8fa86a", gears:"#3a4246", haybale:"#7fa55a", printblock:"#d8cfc0", palette:"#efe6d2", photo:"#cfc6b2" }[kind] || "#d8cfc0";
    v.appendChild(s("rect", { width:600, height:600, fill:bgc }));
    v.appendChild(s("rect", { width:600, height:600, fill:"url(#p-dots)", opacity:.25 }));
    const g = s("g", { filter:"url(#fx-paper-rough)" });
    const P = (d, f, extra) => g.appendChild(s("path", Object.assign({ d, fill:f }, extra || {})));
    const R = (x, y, w, hh, f, extra) => g.appendChild(s("rect", Object.assign({ x, y, width:w, height:hh, fill:f }, extra || {})));
    const C = (x, y, r, f, extra) => g.appendChild(s("circle", Object.assign({ cx:x, cy:y, r, fill:f }, extra || {})));
    switch (kind){
      case "chest":
        R(110, 250, 380, 220, "#7d5a3a", { rx:10 }); P("M110 250 Q300 150 490 250Z", "#8a6544"); R(110, 240, 380, 26, "#5a3f28");
        for (let i=0;i<12;i++) C(140 + i*30, 330 + (i%3)*40, 10 + (i%4)*4, "#a0522d", { opacity:.55 });
        R(280, 290, 40, 54, "#C9A04A", { rx:6 }); C(300, 316, 8, "#3a2a1a");
        P("M60 520 Q300 470 540 520 L560 600 H40Z", "#9b988e"); for (let i=0;i<14;i++) C(60 + i*36, 540 + (i%3)*14, 12, "#b9b6ab");
        break;
      case "fieldbook":
        P("M80 140 L300 170 L300 500 L80 470Z", "#efe6cf"); P("M300 170 L520 140 L520 470 L300 500Z", "#f6efdc");
        for (let i=0;i<10;i++){ g.appendChild(s("path", { d:`M110 ${200 + i*26} L280 ${222 + i*26}`, stroke:"#9aa9b0", "stroke-width":2, opacity:.6 })); }
        g.appendChild(s("path", { d:"M330 300 C 380 250, 430 330, 490 270", stroke:"#3D8DB3", "stroke-width":5, fill:"none" }));
        g.appendChild(s("path", { d:"M330 420 L380 350 L420 390 L470 320", stroke:"#4B5357", "stroke-width":5, fill:"none" }));
        g.appendChild(A.trig(450, 220, 18)); P("M300 170 L300 500", "none", { stroke:"#8a7a5a", "stroke-width":4 });
        R(250, 120, 14, 60, "#B4412F");
        break;
      case "theodolite":
        P("M300 330 L170 560 M300 330 L300 570 M300 330 L430 560", "none", { stroke:"#8a6544", "stroke-width":18, "stroke-linecap":"round" });
        R(240, 300, 120, 40, "#C9A04A", { rx:8 }); R(270, 200, 60, 110, "#B08A3A", { rx:10 });
        R(170, 170, 260, 60, "#C9A04A", { rx:28 }); C(170, 200, 30, "#BFE0EA", { stroke:"#8a6a2a", "stroke-width":10 });
        C(300, 260, 46, "none", { stroke:"#F3ECDD", "stroke-width":6, "stroke-dasharray":"3 6" });
        break;
      case "cottage":
        P("M0 420 Q300 380 600 420 V600 H0Z", "#b39a52");
        g.appendChild(A.range(600, 600, 300, 160, 4, "#4b6a7a", { snow:"#eef3f4" }));
        R(140, 300, 320, 180, "#9c968a"); P("M120 304 L300 210 L480 304Z", "#4B5357");
        R(270, 380, 60, 100, "#3a2a1a"); R(170, 340, 60, 50, "#2F3E46"); R(370, 340, 60, 50, "#2F3E46");
        for (let r=0;r<5;r++) for (let c=0;c<8;c++) g.appendChild(s("rect", { x:140 + c*40 + (r%2)*20, y:304 + r*36, width:38, height:34, fill:"none", stroke:"#7d786d", "stroke-width":2, opacity:.6 }));
        break;
      case "sketch":
        g.appendChild(s("path", { d:"M60 380 L160 250 L230 330 L330 190 L420 300 L540 220", stroke:"#4B5357", "stroke-width":4, fill:"none" }));
        g.appendChild(s("path", { d:"M60 460 C 200 430, 380 470, 540 440", stroke:"#4B5357", "stroke-width":3, fill:"none" }));
        for (let i=0;i<14;i++) g.appendChild(s("path", { d:`M${80 + i*32} 470 l10 -26`, stroke:"#4B5357", "stroke-width":2, opacity:.6 }));
        g.appendChild(s("text", { x:300, y:550, "text-anchor":"middle", "font-family":"Fraunces", "font-style":"italic", "font-size":34, fill:"#4B5357" }, "pencil sketch, 1848"));
        break;
      case "panel":
        R(120, 90, 360, 420, "#F3ECDD", { rx:6 }); R(150, 120, 300, 170, "#3D8DB3"); g.appendChild(A.range(300, 170, 150, 90, 3, "#2F3E46"));
        for (let i=0;i<6;i++) R(150, 320 + i*28, i === 5 ? 180 : 300, 10, "#4B5357", { opacity:.5 });
        R(270, 510, 60, 60, "#2F3E46");
        break;
      case "oral":
        for (let i=0;i<3;i++) g.appendChild(s("path", { d:`M${380 + i*44} ${200 + i*0} q40 100 0 200`, stroke:"#F3ECDD", "stroke-width":14, fill:"none", opacity:1 - i*.25, "stroke-linecap":"round" }));
        P("M120 160 h220 a40 40 0 0 1 40 40 v130 a40 40 0 0 1 -40 40 h-120 l-60 50 v-50 h-40 a40 40 0 0 1 -40 -40 v-130 a40 40 0 0 1 40 -40z", "#F3ECDD");
        [0,1,2].forEach(i => C(180 + i*60, 265, 16, "#4F7A35"));
        break;
      case "news":
        R(110, 80, 380, 460, "#f7f4ee"); R(140, 110, 320, 40, "#1F2A30"); R(140, 170, 320, 150, "#6f8fa0");
        g.appendChild(A.braids([[140,320],[300,250],[460,180]], { seed:3, w0:20, w1:40, color:"#e9f2f4", opacity:.9, bedColor:"#8c8a82", bedOpacity:.9 }));
        for (let i=0;i<7;i++) R(140, 345 + i*24, i % 3 === 2 ? 200 : 320, 9, "#4B5357", { opacity:.55 });
        break;
      case "app":
        R(130, 110, 340, 400, "#0f1519", { rx:30 }); R(150, 140, 300, 330, "#F3ECDD", { rx:8 });
        g.appendChild(A.braids([[160,440],[300,300],[440,160]], { seed:2, w0:10, w1:30, color:"#3D8DB3", opacity:.9, bedOpacity:.4 }));
        g.appendChild(A.trig(400, 400, 22));
        break;
      case "horse": case "reaper":
        P("M140 380 q10 -90 90 -96 q60 -6 110 4 q40 -40 70 -10 l-20 30 q10 40 -20 70 z", "#5a4030");
        R(180, 370, 18, 110, "#5a4030"); R(330, 370, 18, 110, "#5a4030"); R(220, 370, 16, 110, "#4a3426"); R(300, 370, 16, 110, "#4a3426");
        if (kind === "reaper"){ C(470, 430, 60, "none", { stroke:"#4B5357", "stroke-width":10 }); g.appendChild(s("path", { d:"M410 430 h120 M470 370 v120", stroke:"#4B5357", "stroke-width":6 })); g.appendChild(s("path", { d:"M400 420 L360 380", stroke:"#4B5357", "stroke-width":8 })); }
        P("M0 480 H600 V600 H0Z", "#C9A04A");
        break;
      case "steam":
        R(150, 280, 260, 120, "#2F3E46", { rx:20 }); R(170, 200, 40, 90, "#1F2A30"); C(190, 180, 40, "#e8e4da", { opacity:.8 }); C(230, 140, 54, "#e8e4da", { opacity:.6 });
        C(200, 440, 70, "none", { stroke:"#1F2A30", "stroke-width":18 }); C(400, 420, 90, "none", { stroke:"#1F2A30", "stroke-width":20 }); R(380, 250, 90, 130, "#4B5357");
        break;
      case "tractor":
        R(180, 290, 220, 110, "#B4412F", { rx:12 }); R(340, 220, 90, 110, "#8a2f22"); R(360, 236, 52, 50, "#BFE0EA");
        C(380, 420, 90, "#1F2A30"); C(380, 420, 40, "#C9A04A"); C(190, 440, 54, "#1F2A30"); C(190, 440, 22, "#C9A04A"); R(200, 240, 18, 60, "#1F2A30");
        break;
      case "header":
        R(140, 260, 300, 150, "#2F3E46", { rx:14 }); R(360, 190, 90, 90, "#4B5357"); R(370, 200, 70, 40, "#BFE0EA");
        R(60, 380, 260, 50, "#C9A04A"); for (let i=0;i<9;i++) P(`M${70 + i*28} 430 l12 30 l12 -30z`, "#8a6a2a");
        C(400, 440, 60, "#1F2A30"); C(200, 450, 40, "#1F2A30");
        break;
      case "milking":
        g.appendChild(s("ellipse", { cx:300, cy:340, rx:240, ry:120, fill:"#9aa6a8" })); g.appendChild(s("ellipse", { cx:300, cy:340, rx:110, ry:56, fill:"#bcc6c8" }));
        for (let i=0;i<12;i++){ const a = i/12*6.283; g.appendChild(s("line", { x1:300 + Math.cos(a)*112, y1:340 + Math.sin(a)*58, x2:300 + Math.cos(a)*236, y2:340 + Math.sin(a)*118, stroke:"#6b7a80", "stroke-width":4 })); }
        for (let i=0;i<6;i++){ const a = i/6*6.283 + .3; g.appendChild(s("ellipse", { cx:300 + Math.cos(a)*180, cy:330 + Math.sin(a)*92, rx:34, ry:18, fill: i%2 ? "#1F2A30" : "#f3ecdd" })); }
        P("M280 340 a20 20 0 1 1 40 0", "none", { stroke:"#3D8DB3", "stroke-width":6 });
        break;
      case "pivot":
        P("M0 330 H600 V600 H0Z", "#7FA55A"); g.appendChild(s("path", { d:"M40 260 L560 260", stroke:"#dfe6e8", "stroke-width":12 }));
        for (let i=0;i<5;i++){ const x = 60 + i*120; g.appendChild(s("path", { d:`M${x} 260 L${x+60} 200 L${x+120} 260`, stroke:"#c9d2d4", "stroke-width":6, fill:"none" })); P(`M${x+60} 260 L${x+40} 380 L${x+80} 380Z`, "#9aa6a8"); C(x+40, 392, 18, "#1F2A30"); C(x+80, 392, 18, "#1F2A30"); }
        for (let i=0;i<20;i++) g.appendChild(s("path", { d:`M${50 + i*26} 270 q-6 30 -12 50`, stroke:"#BFE0EA", "stroke-width":3, fill:"none", opacity:.7 }));
        break;
      case "baler": case "haybale":
        P("M0 400 H600 V600 H0Z", "#C9A04A"); R(150, 260, 300, 170, "#e2c46e", { rx:16 });
        for (let i=0;i<9;i++) g.appendChild(s("path", { d:`M${165 + i*33} 270 v150`, stroke:"#b8963e", "stroke-width":4 }));
        g.appendChild(s("path", { d:"M230 260 v170 M370 260 v170", stroke:"#B4412F", "stroke-width":6 }));
        break;
      case "stones":
        [[180,300,110,70,"#5b666b"],[360,260,90,60,"#7d8a8e"],[290,400,130,80,"#4B5357"],[450,400,80,54,"#6b777b"],[160,440,70,46,"#8a9599"]].forEach(([x,y,rx,ry,f]) => g.appendChild(s("ellipse", { cx:x, cy:y, rx, ry, fill:f })));
        g.appendChild(s("path", { d:"M250 380 q40 20 80 0 M340 240 l30 30", stroke:"#d9dcd6", "stroke-width":3, fill:"none", opacity:.6 }));
        break;
      case "starchart":
        g.appendChild(A.stars(600, 600, 9, 140));
        C(300, 300, 240, "none", { stroke:"#F6EBC8", "stroke-width":3, opacity:.6 });
        [[250,220],[275,212],[262,240],[290,232],[300,250],[240,250]].forEach(([x,y]) => C(x, y, 7, "#F6EBC8"));
        break;
      case "volcanic":
        P("M120 420 C 110 300, 200 230, 300 240 C 420 250, 500 320, 480 430 C 460 500, 160 510, 120 420Z", "#6b4c3e");
        P("M330 250 C 400 210, 500 240, 520 320 C 500 340, 420 330, 330 250Z", "#8f6d5a");
        for (let i=0;i<70;i++){ const a2 = i*2.4, r2 = 10 + (i*13 % 150); C(310 + Math.cos(a2)*r2*1.2, 370 + Math.sin(a2)*r2*.55, 3 + (i%4), i%3 ? "#d9c3b0" : "#2a1e18", { opacity:.75 }); }
        P("M180 360 q60 -30 120 0 q60 30 120 -6", "none", { stroke:"#c9a07a", "stroke-width":6, opacity:.6 });
        break;
      case "fleece":
        for (let i=0;i<40;i++) C(150 + (i%8)*42 + (Math.floor(i/8)%2)*20, 220 + Math.floor(i/8)*42, 34, "#efe9da");
        break;
      case "gears":
        [[230,300,110,12,"#C9A04A"],[400,340,70,8,"#A7A59C"]].forEach(([x,y,r,n,f]) => { let d = ""; for (let i=0;i<n*2;i++){ const a = i/(n*2)*6.283, rr = i%2 ? r : r*1.18; d += (i ? "L" : "M") + (x + Math.cos(a)*rr).toFixed(1) + " " + (y + Math.sin(a)*rr).toFixed(1); } P(d + "Z", f); C(x, y, r*.25, "#3a4246"); });
        break;
      case "printblock":
        R(140, 140, 320, 320, "#c9c2b2", { rx:10 }); g.appendChild(s("path", { d:"M180 360 L250 260 L300 320 L360 230 L420 360", stroke:"#8a8270", "stroke-width":14, fill:"none" })); C(380, 190, 26, "#8a8270");
        break;
      case "palette":
        g.appendChild(s("ellipse", { cx:300, cy:310, rx:220, ry:150, fill:"#fbf7ee" }));
        [["#3D8DB3",200,250],["#BFE0EA",280,220],["#C9A04A",360,240],["#5E7F3A",420,300],["#4B5357",220,350],["#B4412F",320,380]].forEach(([c,x,y]) => C(x, y, 30, c));
        break;
      case "photo":
        R(130, 130, 340, 300, "#f3efe6"); R(150, 150, 300, 220, "#8a8a7c"); g.appendChild(A.range(300, 220, 180, 100, 6, "#5b5b52")); R(150, 370, 300, 60, "#f3efe6");
        break;
      default:
        C(300, 300, 160, "#A7A59C");
    }
    v.appendChild(g);
    return v;
  };

  /* ---------- Field Protocol icons ---------- */
  A.protoIcon = function(k){
    const v = svg(200,200); const g = s("g", { filter:"url(#fx-paper)" });
    if (k === "respect"){ g.appendChild(A.range(200, 200, 150, 90, 4, "#3D8DB3", { snow:"#F3ECDD" })); g.appendChild(s("path", { d:"M100 150 C 70 130, 56 112, 64 98 C 72 84, 92 88, 100 102 C 108 88, 128 84, 136 98 C 144 112, 130 130, 100 150Z", fill:"#B4412F" })); }
    else if (k === "evidence"){ g.appendChild(s("circle", { cx:86, cy:86, r:52, fill:"#F3ECDD", stroke:"#263036", "stroke-width":14 })); g.appendChild(s("rect", { x:120, y:120, width:24, height:64, rx:8, fill:"#263036", transform:"rotate(-45 132 152)" })); g.appendChild(A.trig(86, 92, 22)); }
    else if (k === "voice"){ g.appendChild(s("path", { d:"M30 50 h110 a20 20 0 0 1 20 20 v50 a20 20 0 0 1 -20 20 h-60 l-30 26 v-26 h-20 a20 20 0 0 1 -20 -20 v-50 a20 20 0 0 1 20 -20z", fill:"#3D8DB3" })); [0,1,2].forEach(i => g.appendChild(s("circle", { cx:62+i*28, cy:95, r:9, fill:"#F3ECDD" }))); }
    else if (k === "better"){ g.appendChild(s("path", { d:"M20 170 Q100 150 180 170 V190 H20Z", fill:"#A7A59C" })); g.appendChild(A.tussock(100, 172, 120, "#C9A04A", 4)); }
    v.appendChild(g); return v;
  };

  /* band art for day cards / lesson hero */
  A.band = function(subject, seed){
    const v = svg(600, 300, { preserveAspectRatio:"xMidYMid slice" });
    seed = seed || 3;
    if (subject === "history"){
      v.appendChild(s("rect", { width:600, height:300, fill:"#5a2e25" }));
      v.appendChild(s("rect", { width:600, height:300, fill:"url(#p-grid)", opacity:.4 }));
      v.appendChild(s("circle", { cx:440, cy:110, r:56, fill:"#E6C873", opacity:.35 }));
      v.appendChild(A.mountains(600, 300, seed, ["#7a4a3e","#3f2a28"], { top:150, bottom:220, amp:130, snowLayers:1, snowColor:"#d9b9a8", peaks:4 }));
      v.appendChild(A.trig(120, 120, 22));
    } else if (subject === "geography"){
      v.appendChild(s("rect", { width:600, height:300, fill:"#1f4b62" }));
      v.appendChild(A.contours(600, 300, seed, "rgba(243,236,221,.25)", 3));
      v.appendChild(A.mountains(600, 300, seed+2, ["#6d93a6","#3d6278"], { top:140, bottom:210, amp:140, snowLayers:2, peaks:4 }));
      v.appendChild(A.braids([[-20,300],[200,270],[420,280],[620,250]], { seed, w0:24, w1:14, color:"#BFE0EA", opacity:.8, bedOpacity:.3 }));
    } else if (subject === "science"){
      v.appendChild(s("rect", { width:600, height:300, fill:"#121A36" }));
      v.appendChild(A.milkyway(600, 300, seed, .6)); v.appendChild(A.stars(600, 300, seed, 120));
      [[352,92],[364,86],[358,104],[372,98],[378,110],[346,106]].forEach(([x,y]) => v.appendChild(s("circle", { cx:x, cy:y, r:3.2, fill:"#fffaf0", filter:"url(#fx-glow)" })));
      v.appendChild(A.mountains(600, 300, seed+5, ["#1a2148"], { top:250, amp:90, snowLayers:1, snowColor:"#3b4677", peaks:4, paper:false }));
    } else if (subject === "technology"){
      v.appendChild(s("rect", { width:600, height:300, fill:"#3d5230" }));
      const p = s("g", { transform:"rotate(-10 300 150)" }); p.appendChild(A.paddocks(600, 300, seed, { cell:150, pivots:.5 })); v.appendChild(p);
    } else if (subject === "art"){
      v.appendChild(s("rect", { width:600, height:300, fill:"#F3ECDD" }));
      v.appendChild(A.arch(600, 110, .5));
      const m = A.mountains(600, 300, seed, ["#b8c9cf","#93a9ad"], { top:190, bottom:220, amp:130, snowLayers:1, peaks:4, paper:false }); m.setAttribute("opacity", ".8"); v.appendChild(m);
      for (let i=0;i<5;i++) v.appendChild(A.tussock(60 + i*125, 300, 70, "#C9A04A", seed + i));
    }
    return v;
  };

  /* Map Sheet art for the Survey Seal reveal (Sheet I: the river mouth) */
  /* Map Sheet art for the Survey Seal reveal: one design per sheet */
  A.sheetArt = function(n, o){
    n = n || 1; o = o || {};
    const v = svg(560, 700);
    v.appendChild(s("rect", { width:560, height:700, fill:"#efe6cf" }));
    v.appendChild(s("rect", { width:560, height:700, fill:"url(#p-grid)", opacity:.7 }));
    v.appendChild(s("rect", { x:0, y:0, width:560, height:700, fill:"url(#p-dots)", opacity:.12 }));
    const ink = (x, y, t, sz, ang) => v.appendChild(s("text", { x, y, "font-family":"Fraunces", "font-size":sz, "font-style":"italic", fill:"#1F2A30", transform:`rotate(${ang||0} ${x} ${y})` }, t));
    const pencil = (x, y, t, sz, ang) => v.appendChild(s("text", { x, y, "font-family":"Fraunces", "font-size":sz, fill:"#6b7a80", opacity:.9, transform:`rotate(${ang||0} ${x} ${y})`, "letter-spacing":"1" }, t));
    const pen = { stroke:"#6b7a80", "stroke-width":2.5, fill:"none", "stroke-linecap":"round" };
    if (n === 1){
      v.appendChild(s("path", { d:"M560 300 L560 700 L180 700 C 260 600, 360 520, 560 300Z", fill:"#9fc6d4", opacity:.6 }));
      for (let i=0;i<6;i++) v.appendChild(s("path", { d:`M${300 + i*40} ${640 - i*55} q20 -10 40 0 q20 10 40 0`, stroke:"#3D8DB3", "stroke-width":2, fill:"none", opacity:.6 }));
      v.appendChild(A.braids([[40,40],[140,170],[230,300],[300,420],[360,500]], { seed:11, w0:18, w1:44, color:"#3D8DB3", opacity:.8, sw:3, bedColor:"#b3ad9c", bedOpacity:.6 }));
      v.appendChild(s("ellipse", { cx:380, cy:520, rx:70, ry:30, fill:"#6fb6d6", opacity:.7, transform:"rotate(-35 380 520)" }));
      ink(70, 230, "Ashburton R.", 30, 52); pencil(180, 180, "Hakatere", 28, 52); pencil(400, 470, "hāpua", 22, -30);
      [[110,110],[150,300],[230,380]].forEach(([x,y]) => v.appendChild(s("path", Object.assign({ d:`M${x} ${y} q20 -6 40 0 q20 6 40 -2` }, pen))));
      v.appendChild(A.trig(470, 120, 16));
    } else if (n === 2){
      // the river through the plains, with pencilled camp and food marks along its banks
      v.appendChild(A.braids([[-20,80],[140,210],[250,350],[330,500],[420,720]], { seed:12, w0:34, w1:40, color:"#3D8DB3", opacity:.8, sw:3, bedColor:"#b3ad9c", bedOpacity:.6 }));
      ink(300, 470, "Ashburton R.", 26, 60);
      const camps = [[90,190],[300,300],[150,400],[380,600],[230,560]];
      camps.forEach(([x,y], i) => {
        v.appendChild(s("circle", Object.assign({ cx:x, cy:y, r:16 }, pen)));
        v.appendChild(s("path", Object.assign({ d:`M${x-8} ${y+4} L${x} ${y-8} L${x+8} ${y+4}` }, pen)));
        if (i % 2 === 0) v.appendChild(s("path", Object.assign({ d:`M${x+26} ${y+14} q12 -10 24 0 q12 10 24 0` }, pen)));
      });
      pencil(60, 160, "kāika", 22, -8); pencil(320, 270, "kai", 22, -8); pencil(400, 640, "summer camp", 20, -8);
      v.appendChild(s("path", Object.assign({ d:"M470 90 q-30 40 -10 80" }, pen, { "stroke-dasharray":"6 7" })));
      v.appendChild(A.trig(470, 70, 14));
    } else if (n === 3){
      // a dotted trail inland toward the mountains, and a lone tree on the plain
      v.appendChild(A.range(560, 700, 210, 150, 31, "#b9c2c4", { snow:"#f4f6f4", peaks:5 }));
      v.appendChild(s("rect", { x:0, y:210, width:560, height:490, fill:"#efe6cf" }));
      v.appendChild(s("rect", { x:0, y:210, width:560, height:490, fill:"url(#p-grid)", opacity:.7 }));
      v.appendChild(A.braids([[560,330],[430,420],[330,540],[260,720]], { seed:13, w0:22, w1:36, color:"#3D8DB3", opacity:.75, sw:3, bedColor:"#b3ad9c", bedOpacity:.55 }));
      v.appendChild(s("path", { d:"M60 680 C 120 560, 170 470, 240 410 S 380 300, 460 230", stroke:"#4B5357", "stroke-width":4, fill:"none", "stroke-dasharray":"2 12", "stroke-linecap":"round" }));
      v.appendChild(A.loneTree(250, 420, .55, "#4B5357"));
      pencil(276, 404, "Single Tree", 22, -8);
      ink(380, 640, "Ashburton R.", 24, -55);
      v.appendChild(A.trig(150, 150, 14));
    } else if (n === 4){
      // a torn copy of a deed, with a promise underlined twice
      v.appendChild(A.braids([[560,120],[420,260],[300,420],[200,720]], { seed:14, w0:24, w1:38, color:"#3D8DB3", opacity:.35, sw:3, bedColor:"#b3ad9c", bedOpacity:.3 }));
      const tear = "M70 90 L480 70 L470 160 L490 200 L462 250 L486 300 L470 360 L494 420 L468 470 L480 560 L90 590 L100 520 L76 470 L96 400 L72 330 L94 260 L70 200Z";
      v.appendChild(s("path", { d:tear, fill:"#f6efd9", stroke:"#a7957a", "stroke-width":2, transform:"rotate(-3 280 330)" }));
      const g = s("g", { transform:"rotate(-3 280 330)" });
      g.appendChild(s("text", { x:280, y:138, "text-anchor":"middle", "font-family":"Fraunces", "font-size":34, "font-weight":700, fill:"#1F2A30" }, "DEED"));
      g.appendChild(s("text", { x:280, y:166, "text-anchor":"middle", "font-family":"Fraunces", "font-size":16, "font-style":"italic", fill:"#4B5357" }, "Akaroa · 12 June 1848 (copy)"));
      for (let i=0;i<11;i++){ const y = 200 + i*30, w = 300 - (i % 3)*30; g.appendChild(s("path", { d:`M110 ${y} q${w/4} -5 ${w/2} 0 t${w/2} 0`, stroke:"#6b7a80", "stroke-width":2, fill:"none", opacity:.7 })); }
      g.appendChild(s("text", { x:116, y:388, "font-family":"Fraunces", "font-size":21, "font-style":"italic", fill:"#1F2A30" }, "…places for food… to be kept"));
      g.appendChild(s("path", { d:"M112 398 L420 394 M112 408 L420 404", stroke:"#B4412F", "stroke-width":3, "stroke-linecap":"round" }));
      [[150,470],[200,480],[260,468],[330,478],[390,470]].forEach(([x,y]) => g.appendChild(s("path", Object.assign({ d:`M${x} ${y} q8 -14 16 0 q8 14 16 0` }, pen))));
      g.appendChild(s("circle", { cx:420, cy:520, r:26, fill:"#8a2f22", opacity:.85 }));
      v.appendChild(g);
      pencil(300, 640, "promised ≠ surveyed?", 22, -4);
      v.appendChild(A.trig(500, 600, 12));
    } else if (n === 5){
      // the run, with its stone cottage
      v.appendChild(A.range(560, 700, 200, 140, 55, "#b9c2c4", { snow:"#f4f6f4", peaks:5 }));
      v.appendChild(s("rect", { x:0, y:200, width:560, height:500, fill:"#efe6cf" }));
      v.appendChild(s("rect", { x:0, y:200, width:560, height:500, fill:"url(#p-grid)", opacity:.7 }));
      v.appendChild(s("ellipse", { cx:420, cy:260, rx:90, ry:26, fill:"#6fb6d6", opacity:.7 }));
      pencil(360, 306, "L. Clearwater", 20, -4);
      [[60,330,250,330,250,470,60,470],[270,360,500,360,500,520,270,520],[60,490,240,490,240,620,60,620]].forEach(p => v.appendChild(s("path", Object.assign({ d:`M${p[0]} ${p[1]} L${p[2]} ${p[3]} L${p[4]} ${p[5]} L${p[6]} ${p[7]}Z` }, pen, { "stroke-dasharray":"10 6" }))));
      const rnd = BM.rng(55); for (let i=0;i<40;i++) v.appendChild(s("circle", { cx:70 + rnd()*420, cy:340 + rnd()*270, r:3, fill:"#6b7a80", opacity:.7 }));
      const c = s("g", { transform:"translate(300 420)" });
      c.appendChild(s("rect", { x:0, y:0, width:90, height:46, fill:"#efe6cf", stroke:"#1F2A30", "stroke-width":2.5 }));
      c.appendChild(s("path", { d:"M-8 2 L45 -26 L98 2", fill:"none", stroke:"#1F2A30", "stroke-width":2.5 }));
      c.appendChild(s("rect", { x:38, y:18, width:14, height:28, fill:"none", stroke:"#1F2A30", "stroke-width":2 }));
      v.appendChild(c);
      ink(260, 500, "Hakatere Stn", 24, 0); pencil(150, 398, "stone cottage 1862 →", 18, -4);
      v.appendChild(s("path", { d:"M440 240 C 380 340, 260 390, 200 300", stroke:"#4B5357", "stroke-width":3, fill:"none", "stroke-dasharray":"2 9", "stroke-linecap":"round" }));
      v.appendChild(A.trig(120, 160, 14));
    } else if (n === 6){
      // the town grid on a treeless plain, with a ferry on the river
      v.appendChild(A.braids([[-20,560],[200,540],[380,600],[600,720]], { seed:16, w0:40, w1:50, color:"#3D8DB3", opacity:.8, sw:3, bedColor:"#b3ad9c", bedOpacity:.6 }));
      for (let i=0;i<7;i++) v.appendChild(s("line", Object.assign({ x1:140 + i*50, y1:150, x2:140 + i*50, y2:450 }, pen)));
      for (let j=0;j<7;j++) v.appendChild(s("line", Object.assign({ x1:140, y1:150 + j*50, x2:440, y2:150 + j*50 }, pen)));
      v.appendChild(s("rect", { x:240, y:250, width:100, height:100, fill:"none", stroke:"#1F2A30", "stroke-width":2.5 }));
      pencil(248, 306, "Domain?", 18, 0);
      v.appendChild(s("path", { d:"M200 520 L230 590", stroke:"#1F2A30", "stroke-width":2.5, "stroke-dasharray":"5 5" }));
      v.appendChild(s("rect", { x:214, y:560, width:24, height:10, fill:"#1F2A30" }));
      pencil(250, 585, "ferry", 20, -6);
      ink(150, 130, "Ashburton (town reserve)", 24, 0);
      pencil(330, 495, "treeless — plant shelter!", 18, -4);
      v.appendChild(A.trig(470, 110, 14));
    } else if (n === 7 && o.found){
      // Sheet VII returned: the race carries water across the plains from the Rangitata
      v.appendChild(A.braids([[-20,90],[120,140],[260,170],[420,200],[600,230]], { seed:27, w0:26, w1:40, color:"#3D8DB3", opacity:.8, sw:3, bedColor:"#b3ad9c", bedOpacity:.55 }));
      ink(300, 150, "Rangitata", 22, 6);
      [[90,330,150,110],[300,300,170,120],[120,480,160,120],[330,470,150,130]].forEach(([x,y,w,hh]) => v.appendChild(s("rect", Object.assign({ x, y, width:w, height:hh }, pen, { "stroke-dasharray":"6 6" }))));
      const race = "M120 175 L150 260 L270 290 L280 440 L480 450 L520 640";
      v.appendChild(s("path", { d:race, stroke:"#3D8DB3", "stroke-width":12, fill:"none", "stroke-linejoin":"round", opacity:.35 }));
      v.appendChild(s("path", { d:race, stroke:"#2c6f91", "stroke-width":3.5, fill:"none", "stroke-linejoin":"round" }));
      [["M150 260 L80 300 L60 420"],["M280 440 L240 560 L250 640"]].forEach(([d]) => v.appendChild(s("path", { d, stroke:"#3D8DB3", "stroke-width":2.5, fill:"none", "stroke-dasharray":"6 4" })));
      pencil(300, 410, "VII — the race", 22, 0);
      pencil(300, 600, "water across the plains", 20, -3);
      v.appendChild(A.trig(470, 330, 13));
    } else if (n === 7){
      // Sheet VII is missing: an empty sleeve with a pencil note
      v.appendChild(s("rect", { x:60, y:80, width:440, height:520, fill:"none", stroke:"#6b7a80", "stroke-width":3, "stroke-dasharray":"14 10" }));
      v.appendChild(s("text", { x:280, y:330, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":72, fill:"#B4412F", transform:"rotate(-12 280 330)", opacity:.85, "letter-spacing":"6" }, "MISSING"));
      pencil(110, 450, "VII — the race. Taken?", 24, -4);
      v.appendChild(s("path", Object.assign({ d:"M100 520 C 200 480, 320 560, 460 500" }, pen, { stroke:"#3D8DB3", "stroke-dasharray":"8 8" })));
    } else if (n === 8){
      // a great flood: the river spread wide, water stains, and a line marked "stopbank?"
      v.appendChild(s("path", { d:"M-20 140 C 120 220, 200 300, 300 420 C 360 500, 420 600, 560 720 L560 520 C 470 430, 420 330, 360 240 C 290 150, 160 90, -20 60Z", fill:"#9fc6d4", opacity:.55 }));
      v.appendChild(A.braids([[-20,100],[150,220],[300,380],[420,560],[560,720]], { seed:18, w0:30, w1:46, color:"#3D8DB3", opacity:.8, sw:3, bedColor:"#b3ad9c", bedOpacity:.5 }));
      v.appendChild(s("path", Object.assign({ d:"M60 300 C 160 360, 230 440, 290 560" }, pen, { stroke:"#B4412F", "stroke-width":3, "stroke-dasharray":"10 7" })));
      pencil(70, 380, "stopbank?", 24, 50);
      pencil(300, 200, "great flood — water to here", 20, 28);
      [[420,140,60],[120,560,46],[470,420,38]].forEach(([x,y,r]) => v.appendChild(s("circle", { cx:x, cy:y, r, fill:"#8a7a5a", opacity:.14 })));
      v.appendChild(s("rect", { x:400, y:90, width:24, height:16, fill:"#4B5357" })); pencil(380, 80, "town", 18, 0);
      v.appendChild(A.trig(500, 620, 12));
    } else if (n === 9){
      // the names restored, and the field book's last entry
      v.appendChild(A.range(560, 700, 170, 110, 9, "#b9c2c4", { snow:"#f4f6f4", peaks:5 }));
      v.appendChild(s("rect", { x:0, y:170, width:560, height:530, fill:"#efe6cf" }));
      v.appendChild(s("rect", { x:0, y:170, width:560, height:530, fill:"url(#p-grid)", opacity:.7 }));
      v.appendChild(A.braids([[60,180],[160,300],[260,420],[360,560],[460,720]], { seed:19, w0:22, w1:40, color:"#3D8DB3", opacity:.8, sw:3, bedColor:"#b3ad9c", bedOpacity:.55 }));
      ink(180, 330, "Hakatere", 30, 50); ink(300, 470, "Ashburton R.", 22, 50);
      ink(380, 230, "Ō Tū Wharekai", 22, 0); ink(60, 160, "Te Kiekie", 22, 0);
      const note = s("g", { transform:"rotate(-4 280 600)" });
      note.appendChild(s("rect", { x:60, y:560, width:440, height:100, fill:"#f6efd9", stroke:"#a7957a", "stroke-width":2 }));
      note.appendChild(s("text", { x:80, y:596, "font-family":"Fraunces", "font-style":"italic", "font-size":19, fill:"#1F2A30" }, "I wrote their names in pencil, and let"));
      note.appendChild(s("text", { x:80, y:624, "font-family":"Fraunces", "font-style":"italic", "font-size":19, fill:"#1F2A30" }, "others ink over them. I am sorry."));
      note.appendChild(s("text", { x:380, y:650, "font-family":"Fraunces", "font-style":"italic", "font-size":16, fill:"#6b7a80" }, "— last entry"));
      v.appendChild(note);
      v.appendChild(A.trig(480, 140, 14));
    } else if (n === 10){
      // our place: the whole map, mountains to sea, with both names
      v.appendChild(s("rect", { width:560, height:140, fill:"#1d2a4a" }));
      v.appendChild(A.stars(560, 120, 10, 60));
      [[420,40],[430,46],[436,38],[425,52],[442,48]].forEach(([x,y]) => v.appendChild(s("circle", { cx:x, cy:y, r:2.4, fill:"#dbe6ff" })));
      v.appendChild(A.range(560, 700, 190, 90, 10, "#b9c2c4", { snow:"#f4f6f4", peaks:6 }));
      v.appendChild(s("rect", { x:0, y:190, width:560, height:510, fill:"#efe6cf" }));
      v.appendChild(s("rect", { x:0, y:190, width:560, height:510, fill:"url(#p-grid)", opacity:.7 }));
      v.appendChild(s("path", { d:"M400 700 C 470 640, 520 610, 560 600 L560 700Z", fill:"#9fc6d4", opacity:.7 }));
      v.appendChild(A.braids([[60,200],[150,320],[250,440],[350,560],[440,690]], { seed:20, w0:18, w1:40, color:"#3D8DB3", opacity:.8, sw:3, bedColor:"#b3ad9c", bedOpacity:.55 }));
      v.appendChild(s("ellipse", { cx:470, cy:240, rx:44, ry:14, fill:"#6fb6d6", opacity:.7 }));
      for (let i=0;i<5;i++) for (let j=0;j<4;j++) v.appendChild(s("rect", { x:300 + i*14, y:470 + j*14, width:12, height:12, fill:"none", stroke:"#1F2A30", "stroke-width":1.5 }));
      v.appendChild(s("path", { d:"M90 340 L110 326 L130 340Z M94 340 h32 v14 h-32Z", fill:"none", stroke:"#1F2A30", "stroke-width":2 }));
      v.appendChild(s("path", { d:"M0 400 L560 360", stroke:"#2C6F92", "stroke-width":3, "stroke-dasharray":"8 6" }));
      ink(120, 300, "Hakatere", 26, 50); pencil(250, 420, "Ashburton R.", 20, 50);
      ink(410, 220, "Ō Tū Wharekai", 18, 0); ink(290, 535, "Hakatere / Ashburton", 18, 0);
      pencil(380, 30, "Matariki", 16, 0);
      v.appendChild(s("text", { x:280, y:630, "text-anchor":"middle", "font-family":"Fraunces", "font-style":"italic", "font-size":24, fill:"#B4412F" }, "Our Place"));
      v.appendChild(A.trig(500, 330, 12));
    } else {
      v.appendChild(A.braids([[40,40],[200,300],[360,520]], { seed:n, w0:20, w1:40, color:"#3D8DB3", opacity:.8 }));
    }
    v.appendChild(s("text", { x:30, y:670, "font-family":"Big Shoulders Display", "font-weight":900, "font-size":28, fill:"#B4412F", "letter-spacing":"3" }, "SHEET " + (["I","II","III","IV","V","VI","VII","VIII","IX","X"][n-1]) + " · 1864"));
    v.appendChild(s("path", { d:"M280 0 V700 M0 350 H560", stroke:"#000", "stroke-opacity":.12, "stroke-width":3 }));
    return v;
  };

  /* a lone tree (silhouette) — for Hine-Paaka / "Single Tree" */
  A.loneTree = function(x, y, k, col){
    k = k || 1; col = col || "#2F3E46";
    const g = s("g", { transform:`translate(${x} ${y}) scale(${k})` });
    g.appendChild(s("path", { d:"M-10 0 C -8 -60, -14 -120, -6 -170 L 6 -170 C 12 -120, 10 -60, 12 0Z", fill:col }));
    g.appendChild(s("path", { d:"M0 -150 C -40 -170, -70 -190, -90 -220 M2 -160 C 40 -190, 70 -200, 96 -232 M0 -170 V -250", stroke:col, "stroke-width":10, fill:"none", "stroke-linecap":"round" }));
    [[-90,-232,60],[96,-244,64],[0,-262,72],[-46,-210,56],[50,-214,58]].forEach(([cx,cy,r]) => g.appendChild(s("ellipse", { cx, cy, rx:r, ry:r*.62, fill:col })));
    return g;
  };

  A.brandMark = function(){
    const v = svg(64,64);
    v.innerHTML = `<rect width="64" height="64" rx="14" fill="#1F2A30"/><path d="M6 44 L20 22 L28 32 L38 14 L58 44Z" fill="#F3ECDD"/><path d="M20 22 L24 28 L28 26 L32 22 L38 14 L44 23 L40 24 L36 21 L30 28 L26 30Z" fill="#BFE0EA"/><path d="M6 52 C 20 46, 30 56, 44 50 S 58 48, 60 50" stroke="#3D8DB3" stroke-width="2.5" fill="none"/><path d="M8 56 C 22 52, 32 58, 46 54" stroke="#6FB6D6" stroke-width="1.6" fill="none"/><path d="M48 8 L52 15 L44 15Z" fill="#B4412F"/>`;
    return v;
  };
})(window.BM);
