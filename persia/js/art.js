/* ==========================================================
   PROCEDURAL ART — "Lapis, Gold & Clay"
   Plateau mountains, dunes, glazed brick, carved columns,
   rosettes, the guides, badges, artefacts and the Seal of the
   Kings are drawn in code, so the app looks finished with zero
   image files. ChatGPT images (assets/img) fade in on top when
   they exist.
   ========================================================== */
(function(BM){
  "use strict";
  const s = BM.s, svg = BM.svg;
  const A = BM.art = {};

  /* ---------- shared SVG defs (filters, gradients, patterns) ---------- */
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
      <filter id="fx-grain"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2"/><feColorMatrix values="0 0 0 0 .32 0 0 0 0 .24 0 0 0 0 .14 0 0 0 .2 0"/><feComposite in2="SourceGraphic" operator="in"/></filter>
      <filter id="fx-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      <filter id="fx-softglow" x="-80%" y="-80%" width="260%" height="260%"><feGaussianBlur stdDeviation="22"/></filter>
      <filter id="fx-blur8" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="8"/></filter>
      <filter id="fx-carve" x="-10%" y="-10%" width="120%" height="120%"><feOffset dx="-2" dy="-2" in="SourceAlpha" result="hi"/><feFlood flood-color="#fff6e0" flood-opacity=".55"/><feComposite in2="hi" operator="in" result="h2"/><feOffset dx="3" dy="3" in="SourceAlpha" result="lo"/><feFlood flood-color="#2a1a0c" flood-opacity=".55"/><feComposite in2="lo" operator="in" result="l2"/><feMerge><feMergeNode in="l2"/><feMergeNode in="h2"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      <radialGradient id="g-lamp" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#F6D27A" stop-opacity=".9"/><stop offset="1" stop-color="#F6D27A" stop-opacity="0"/></radialGradient>
      <radialGradient id="g-spark" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#FBE7B0" stop-opacity=".95"/><stop offset="1" stop-color="#FBE7B0" stop-opacity="0"/></radialGradient>
      <radialGradient id="g-star" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#fffaf0" stop-opacity="1"/><stop offset=".35" stop-color="#F6EBC8" stop-opacity=".55"/><stop offset="1" stop-color="#F6EBC8" stop-opacity="0"/></radialGradient>
      <radialGradient id="g-gold" cx=".38" cy=".32" r=".75"><stop offset="0" stop-color="#FBE7B0"/><stop offset=".45" stop-color="#E8B84A"/><stop offset="1" stop-color="#8A5A12"/></radialGradient>
      <radialGradient id="g-clay" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#D6A97A"/><stop offset=".6" stop-color="#A9774B"/><stop offset="1" stop-color="#6E4423"/></radialGradient>
      <linearGradient id="g-water" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#9FE7DD"/><stop offset="1" stop-color="#14B8A6"/></linearGradient>
      <linearGradient id="g-lapis" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2B4BA8"/><stop offset="1" stop-color="#14286B"/></linearGradient>
      <pattern id="p-fret" width="72" height="24" patternUnits="userSpaceOnUse"><path d="M0 14h72" stroke="#B98A5E" stroke-width="2.4" stroke-dasharray="5 5"/><circle cx="36" cy="14" r="7" fill="#E8B84A"/><circle cx="36" cy="14" r="2.6" fill="#1E3A8A"/></pattern>
      <pattern id="p-grid" width="48" height="24" patternUnits="userSpaceOnUse"><path d="M48 0H0V24" fill="none" stroke="#E8B84A" stroke-opacity=".14" stroke-width="1.5"/><path d="M24 0V24" stroke="#E8B84A" stroke-opacity=".0" /></pattern>
      <pattern id="p-brick" width="96" height="48" patternUnits="userSpaceOnUse"><rect width="96" height="48" fill="#1E3A8A"/><rect x="2" y="2" width="44" height="20" rx="3" fill="#2747A0"/><rect x="50" y="2" width="44" height="20" rx="3" fill="#22409A"/><rect x="-22" y="26" width="44" height="20" rx="3" fill="#24439C"/><rect x="26" y="26" width="44" height="20" rx="3" fill="#2A4CA6"/><rect x="74" y="26" width="44" height="20" rx="3" fill="#24439C"/></pattern>
      <pattern id="p-dots" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="11" cy="11" r="2.2" fill="#000" fill-opacity=".16"/></pattern>
      <pattern id="p-sand" width="30" height="20" patternUnits="userSpaceOnUse"><path d="M0 12 q7 -5 15 0 t15 0" stroke="#000" stroke-opacity=".08" fill="none" stroke-width="1.5"/></pattern>
      <pattern id="p-blueprint" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#FBEFDC" stroke-opacity=".13" stroke-width="1.5"/></pattern>
      <pattern id="p-wedges" width="60" height="40" patternUnits="userSpaceOnUse"><path d="M6 6 l8 4 l-8 4z M24 8 l4 10 l4 -10z M44 22 l8 4 l-8 4z M14 26 l4 9 l4 -9z" fill="#000" fill-opacity=".14"/></pattern>
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

  /* rosette: petals radiating from a centre (Persepolis borders) */
  A.rosette = function(cx, cy, r, opt){
    opt = opt || {};
    const n = opt.petals || 12, g = s("g", { transform:`translate(${cx} ${cy})` });
    const cols = opt.cols || ["#E8B84A","#1E3A8A","#F6D27A"];
    if (opt.ring !== false) g.appendChild(s("circle", { r:r, fill:"none", stroke:cols[0], "stroke-width":Math.max(1.5, r*.06), opacity:.9 }));
    for (let i=0;i<n;i++){
      const a = i*360/n;
      g.appendChild(s("path", { d:`M0 ${-r*.18} C ${r*.2} ${-r*.35}, ${r*.16} ${-r*.78}, 0 ${-r*.9} C ${-r*.16} ${-r*.78}, ${-r*.2} ${-r*.35}, 0 ${-r*.18}Z`, fill:cols[i % 2 && opt.alt ? 2 : 0], transform:`rotate(${a})` }));
      if (opt.dots !== false) g.appendChild(s("circle", { cx:0, cy:-r*.97, r:r*.045, fill:cols[0], transform:`rotate(${a + 180/n})` }));
    }
    g.appendChild(s("circle", { r:r*.2, fill:cols[1] }));
    g.appendChild(s("circle", { r:r*.09, fill:cols[0] }));
    return g;
  };
  /* a row of rosettes (carved border) */
  A.rosetteRow = function(x, y, w, r, opt){
    const g = s("g"), n = Math.floor(w/(r*2.6));
    for (let i=0;i<n;i++) g.appendChild(A.rosette(x + r*1.3 + i*r*2.6, y, r, opt));
    return g;
  };
  /* Persepolis-style column: bell base, fluted shaft, double-bull capital (simplified) */
  A.column = function(x, baseY, hgt, col, opt){
    opt = opt || {};
    const g = s("g", { fill:col }), w = hgt*.075;
    g.appendChild(s("path", { d:`M${x-w*1.6} ${baseY} Q${x-w*1.5} ${baseY-w*1.2} ${x-w*.7} ${baseY-w*1.5} L${x+w*.7} ${baseY-w*1.5} Q${x+w*1.5} ${baseY-w*1.2} ${x+w*1.6} ${baseY}Z` }));
    const top = baseY - hgt*(opt.broken ? .55 + (opt.broken*.2) : .86);
    g.appendChild(s("rect", { x:x-w*.6, y:top, width:w*1.2, height:baseY-w*1.5-top }));
    for (let i=-2;i<=2;i++) g.appendChild(s("rect", { x:x + i*w*.24 - 1, y:top, width:2, height:baseY-w*1.5-top, fill:"#000", opacity:.18 }));
    if (!opt.broken){
      const cy = baseY - hgt;
      g.appendChild(s("rect", { x:x-w*.8, y:cy+hgt*.06, width:w*1.6, height:hgt*.08 }));
      g.appendChild(s("path", { d:`M${x-w*2.6} ${cy+hgt*.02} q${w*.2} ${-w*.9} ${w*1.4} ${-w*.7} l${w*1.2} ${w*.5} l${w*1.2} ${-w*.5} q${w*1.2} ${-w*.2} ${w*1.4} ${w*.7} l0 ${w*1.1} l${-w*5.2} 0Z` }));
    } else {
      g.appendChild(s("path", { d:`M${x-w*.6} ${top} l${w*.3} ${-w*.5} l${w*.4} ${w*.3} l${w*.5} ${-w*.6} V${top}Z` }));
    }
    return g;
  };
  /* camel (Bactrian, two humps) in a 120×92 box, feet on y=92 */
  A.camel = function(x, y, sc, col, opt){
    opt = opt || {};
    const g = s("g", { fill:col, transform:`translate(${x} ${y}) scale(${sc}${opt.flip ? "," + sc : ""})${opt.flip ? " scale(-1 1)" : ""}` });
    g.appendChild(s("ellipse", { cx:62, cy:50, rx:34, ry:15 }));
    g.appendChild(s("ellipse", { cx:52, cy:37, rx:11, ry:12 }));
    g.appendChild(s("ellipse", { cx:74, cy:37, rx:11, ry:12 }));
    g.appendChild(s("path", { d:"M34 50 Q20 44 17 24 L26 21 Q29 36 40 43Z" }));
    g.appendChild(s("ellipse", { cx:15, cy:22, rx:11, ry:6.5, transform:"rotate(-12 15 22)" }));
    g.appendChild(s("path", { d:"M20 16 l3 -5 l2 6z" }));
    [[38,0],[47,3],[76,0],[85,3]].forEach(([lx, k]) => g.appendChild(s("path", { d:`M${lx} 58 L${lx+6} 58 L${lx+5+k*.4} 90 L${lx+1+k*.4} 90Z` })));
    g.appendChild(s("path", { d:"M95 48 q7 6 4 18 l-2 0 q2 -10 -4 -16z" }));
    if (opt.rider){ g.appendChild(s("path", { d:"M58 24 q4 -16 12 -14 q6 2 4 14z" })); g.appendChild(s("circle", { cx:66, cy:6, r:5.5 })); }
    if (opt.load){ g.appendChild(s("rect", { x:44, y:30, width:40, height:12, rx:4 })); }
    return g;
  };
  A.caravan = function(x, y, sc, col, n, opt){
    const g = s("g");
    for (let i=0;i<(n||4);i++) g.appendChild(A.camel(x + i*115*sc, y + (i%2)*3*sc, sc*(1 - i*.04), col, { rider: i === 0, load: i > 0, flip: opt && opt.flip }));
    return g;
  };
  /* smooth sand dunes */
  A.dunes = function(W, H, seed, cols, opt){
    opt = opt || {};
    const rnd = BM.rng(seed), g = s("g");
    const top = opt.top != null ? opt.top : H*.7, step = opt.step || 60;
    cols.forEach((c, i) => {
      const base = top + i*step, amp = (opt.amp || 70)*(1 - i*.12);
      let d = `M-60 ${base}`; const k = 3 + Math.floor(rnd()*2);
      for (let j=0;j<k;j++){ const x1 = -60 + (W+120)*(j+.5)/k, x2 = -60 + (W+120)*(j+1)/k; d += ` Q ${x1.toFixed(0)} ${(base - amp*(.5 + rnd()*.8)).toFixed(0)} ${x2.toFixed(0)} ${(base + (rnd()-.5)*amp*.5).toFixed(0)}`; }
      d += ` L${W+60} ${H+20} L-60 ${H+20}Z`;
      g.appendChild(s("path", { d, fill:c, filter: opt.paper === false ? null : "url(#fx-paper)" }));
    });
    return g;
  };
  /* oak tree silhouette (Zagros oak woodland) */
  A.oak = function(x, y, sz, col){
    const g = s("g", { fill:col });
    g.appendChild(s("rect", { x:x - sz*.05, y:y - sz*.45, width:sz*.1, height:sz*.45 }));
    [[0,-.62,.34],[-.24,-.5,.24],[.24,-.5,.24],[-.12,-.78,.22],[.14,-.8,.22]].forEach(([dx, dy, r]) => g.appendChild(s("circle", { cx:x + dx*sz, cy:y + dy*sz, r:r*sz })));
    return g;
  };
  /* glazed-brick band with rosettes */
  A.brickBand = function(x, y, w, hh, opt){
    const g = s("g");
    g.appendChild(s("rect", { x, y, width:w, height:hh, fill:"url(#p-brick)" }));
    g.appendChild(s("rect", { x, y, width:w, height:6, fill:"#E8B84A" }));
    g.appendChild(s("rect", { x, y:y+hh-6, width:w, height:6, fill:"#E8B84A" }));
    if (!opt || opt.rosettes !== false) g.appendChild(A.rosetteRow(x, y + hh/2, w, hh*.32, { cols:["#F6D27A","#C2593A","#FBE7B0"] }));
    return g;
  };
  /* sun disc with soft rays */
  A.sun = function(cx, cy, r, op){
    const g = s("g", { opacity: op == null ? 1 : op });
    g.appendChild(s("circle", { cx, cy, r:r*2.4, fill:"url(#g-lamp)", opacity:.5 }));
    g.appendChild(s("circle", { cx, cy, r, fill:"#F6D27A", opacity:.9 }));
    return g;
  };

  /* ---------- slide backdrops (parallax layers) ---------- */
  function layer(depth, node, cls){ const wrap = svg(2000,1160,{ class:"layer " + (cls||""), preserveAspectRatio:"xMidYMid slice", "data-depth":depth }); wrap.appendChild(node); return wrap; }
  A.backdrop = function(subject, variant, seed){
    const root = BM.h("div", { class:"backdrop" });
    seed = seed || 7;
    const W = 2000, H = 1160;
    if (subject === "history"){
      root.style.background = "linear-gradient(180deg, #0F1D4A 0%, #1B2C66 38%, #2a2a4a 70%, #120f1c 100%)";
      const sky = s("g"); sky.appendChild(A.sun(1560, 300, 90, .28));
      sky.appendChild(s("rect", { width:W, height:H, fill:"url(#p-wedges)", opacity:.25 }));
      root.appendChild(layer(.12, sky));
      root.appendChild(layer(.3, A.mountains(W, H, seed, ["#2c3770"], { top:760, amp:300, snowLayers:1, snowColor:"#56619a", peaks:6 })));
      const cols = s("g", { filter:"url(#fx-paper)" });
      [[180,0],[420,1],[660,0],[900,2],[1380,0],[1620,1],[1860,0]].forEach(([x, b]) => cols.appendChild(A.column(x, 980, 560, "#3a3358", { broken: b })));
      root.appendChild(layer(.55, cols));
      const terrace = s("g", { filter:"url(#fx-paper)" });
      terrace.appendChild(s("rect", { x:-40, y:960, width:W+80, height:220, fill:"#221c33" }));
      terrace.appendChild(s("rect", { x:-40, y:960, width:W+80, height:10, fill:"#E8B84A", opacity:.5 }));
      terrace.appendChild(A.rosetteRow(-20, 1010, W+40, 22, { cols:["#8f7a3c","#221c33","#8f7a3c"], dots:false }));
      root.appendChild(layer(.85, terrace));
    } else if (subject === "geography"){
      root.style.background = "linear-gradient(180deg, #0b4b48 0%, #0a3a3a 40%, #08292b 75%, #061b1d 100%)";
      const topo = s("g"); topo.appendChild(A.contours(W, H, seed, "rgba(246,210,122,.10)", 6));
      root.appendChild(layer(.15, topo));
      root.appendChild(layer(.3, A.mountains(W, H, seed, ["#3d6b66","#2c5450"], { top:700, bottom:800, amp:320, snowLayers:1, snowColor:"#a9c9c2", peaks:6 })));
      const near = s("g");
      near.appendChild(A.dunes(W, H, seed+4, ["#8a6a3c","#6e5230"], { top:900, step:90, amp:80 }));
      near.appendChild(s("path", { d:"M-40 1120 C 400 1040, 700 1080, 1000 1000 S 1600 930, 2040 900", stroke:"#E8B84A", "stroke-width":7, "stroke-dasharray":"16 14", fill:"none", opacity:.75 }));
      near.appendChild(A.caravan(1240, 868, .55, "#3a2614", 4));
      root.appendChild(layer(.8, near));
    } else if (subject === "science"){
      root.style.background = "linear-gradient(180deg, #1c4a3a 0%, #163b2f 40%, #0f2a22 75%, #0a1c17 100%)";
      root.appendChild(layer(.1, A.sun(300, 220, 60, .18)));
      root.appendChild(layer(.3, A.mountains(W, H, seed+3, ["#3c5f50","#2d4c40"], { top:720, bottom:820, amp:330, snowLayers:1, snowColor:"#c9d9cf", peaks:6 })));
      const wood = s("g", { filter:"url(#fx-paper)" });
      wood.appendChild(A.mountains(W, H, seed+8, ["#1f3a2e"], { top:930, amp:160, snowLayers:0, peaks:4, paper:false }));
      for (let i=0;i<10;i++) wood.appendChild(A.oak(80 + i*210 + (i%3)*30, 1000 + (i%2)*40, 150 + (i%3)*30, "#15291f"));
      root.appendChild(layer(.75, wood));
    } else if (subject === "technology"){
      root.style.background = "linear-gradient(160deg, #7a3420 0%, #5a2615 55%, #3c180c 100%)";
      const grid = s("g"); grid.appendChild(s("rect", { width:W, height:H, fill:"url(#p-blueprint)" }));
      root.appendChild(layer(.15, grid));
      const bp = s("g", { stroke:"#FBEFDC", "stroke-width":3, fill:"none", opacity:.22 });
      bp.appendChild(s("path", { d:"M-40 760 Q 400 700 800 760 T 1500 820 T 2040 860" }));
      bp.appendChild(s("path", { d:"M200 900 L1800 980" , "stroke-dasharray":"18 10" }));
      for (let i=0;i<7;i++){ const x = 300 + i*220; bp.appendChild(s("path", { d:`M${x} ${760 - (i%2)*20 + i*8} V${905 + i*11}` })); }
      bp.appendChild(s("path", { d:"M1500 380 V720 M1620 380 V720 M1500 380 H1620 M1500 420 H1620 M1520 380 V340 H1600 V380" }));
      bp.appendChild(s("path", { d:"M1430 300 q60 -30 120 0 M1530 260 q60 -30 120 0", "stroke-dasharray":"10 8" }));
      root.appendChild(layer(.4, bp));
      root.appendChild(layer(.8, A.dunes(W, H, seed, ["#4a1e10"], { top:1050, amp:60 })));
    } else if (subject === "art"){
      root.style.background = "linear-gradient(170deg, #FBF1DA 0%, #F4E3C1 50%, #E9D3A6 100%)";
      const fib = s("g"); fib.appendChild(s("rect", { width:W, height:H, filter:"url(#fx-grain)", fill:"#fff" }));
      root.appendChild(layer(.05, fib));
      const ros = s("g", { opacity:.08 });
      ros.appendChild(A.rosette(1720, 300, 230, { petals:16, cols:["#B9770A","#1E3A8A","#E8B84A"] }));
      ros.appendChild(A.rosette(260, 720, 160, { petals:12, cols:["#B9770A","#1E3A8A","#E8B84A"] }));
      root.appendChild(layer(.15, ros));
      root.appendChild(layer(.8, A.brickBand(-40, 1080, W+80, 80)));
    } else if (subject === "storm"){
      root.style.background = "radial-gradient(120% 90% at 50% 30%, #4a361e 0%, #2a1d10 55%, #120c06 100%)";
    } else if (subject === "shadow" || subject === "dealer" || subject === "collector"){
      root.style.background = "radial-gradient(80% 70% at 40% 50%, #3a0f1c 0%, #1a0710 60%, #07030a 100%)";
      root.appendChild(layer(.1, A.stars(W, H, seed, 120, { maxY:.6 })));
      root.appendChild(layer(.4, A.dunes(W, H, seed, ["#1f0a12","#14060c"], { top:900, step:80, amp:90, paper:false })));
    } else if (subject === "land"){
      root.style.background = "#0F1D4A";
      const wall = s("g", { opacity:.35 }); wall.appendChild(s("rect", { width:W, height:H, fill:"url(#p-brick)" }));
      root.appendChild(layer(.1, wall));
      root.appendChild(layer(.6, A.brickBand(-40, 1060, W+80, 100)));
    } else { // "nz" — Hononga Aotearoa panels
      root.style.background = "linear-gradient(180deg, #1d3d4a 0%, #16303a 50%, #0e1f26 100%)";
      root.appendChild(layer(.2, A.contours(W, H, seed+3, "rgba(159,231,221,.12)", 4)));
      root.appendChild(layer(.5, A.mountains(W, H, seed+1, ["#2c4a52"], { top:900, amp:300, snowLayers:1, snowColor:"#8fb0b5", peaks:6 })));
    }
    return root;
  };

  /* ---------- guide portraits (faceless cut-paper busts) ---------- */
  const GUIDES = {
    shirin:{ name:"Shirin the Scribe", role:"History · youngest scribe of the royal archive", bg:["#2B4BA8","#0B1024"], skin:"#c08a62", hair:"#1a120c", shirt:"#24408F", accent:"#E8B84A", acc:"tablet", hairStyle:"braid", band:true },
    farhad:{ name:"Farhad", role:"Geography · Caravan Master", bg:["#14968a","#06302c"], skin:"#b07a52", hair:"#d4cdc0", shirt:"#C9822B", accent:"#1E3A8A", acc:"staff", hairStyle:"short", beard:true, cap:"median" },
    gandom:{ name:"Gandom the Camel", role:"Science · the animal's-eye view", bg:["#1f8a5e","#0a2a1d"], camel:true },
    nasrin:{ name:"Nasrin", role:"Technology · young water engineer", bg:["#C2593A","#3a140a"], skin:"#a8734d", hair:"#1a120c", shirt:"#2d5873", accent:"#F6D27A", acc:"lamp", scarf:"#14B8A6" },
    hamid:{ name:"Master Hamid", role:"Art · palace craftsman", bg:["#D08A12","#3d2604"], skin:"#b98a62", hair:"#efe9de", shirt:"#6b3f2a", accent:"#1E3A8A", acc:"chisel", beard:true, cap:"wrap" },
    shadow:{ name:"The Shadow Courier", role:"Rider in a silver half-mask · identity unknown", bg:["#3a0f1c","#07030a"], shadow:true }
  };
  A.GUIDES = GUIDES;
  A.portrait = function(id){
    const G = GUIDES[id] || GUIDES.shirin;
    const v = svg(600, 780, { preserveAspectRatio:"xMidYMid slice" });
    const gid = "pg-" + id + Math.floor(Math.random()*1e6);
    v.appendChild(s("defs", null, s("radialGradient", { id:gid, cx:".5", cy:".35", r:".8" }, s("stop", { offset:"0", "stop-color":G.bg[0] }), s("stop", { offset:"1", "stop-color":G.bg[1] }))));
    v.appendChild(s("rect", { width:600, height:780, fill:`url(#${gid})` }));
    const ros = s("g", { opacity:.13 }); ros.appendChild(A.rosette(300, 330, 290, { petals:16, cols:["#FBE7B0","#000","#FBE7B0"] })); v.appendChild(ros);
    v.appendChild(A.range(600, 780, 640, 260, id.length*7 + 3, "rgba(0,0,0,.25)", { peaks:3 }));
    if (G.camel){ // Gandom: a woolly Bactrian camel in profile, with a tasselled halter
      const g = s("g", { filter:"url(#fx-paper-rough)" });
      g.appendChild(s("path", { d:"M600 780 L600 470 C 560 440, 520 470, 500 520 C 470 600, 420 640, 330 640 C 300 640, 280 600, 285 520 C 290 430, 300 360, 280 300 L 230 300 C 240 380, 230 470, 220 560 C 210 680, 300 780, 420 780Z", fill:"#b98a56" }));
      g.appendChild(s("path", { d:"M600 470 C 590 380, 520 360, 480 410 C 470 440, 490 470, 500 520 C 520 470, 560 440, 600 470Z", fill:"#a07444" }));
      g.appendChild(s("path", { d:"M300 320 C 300 230, 230 170, 150 180 C 90 186, 60 220, 64 262 C 68 300, 110 316, 160 318 C 200 320, 230 330, 240 360Z", fill:"#c79a64" }));
      g.appendChild(s("path", { d:"M66 258 C 80 280, 110 290, 140 288", stroke:"#5a3a1c", "stroke-width":5, fill:"none", "stroke-linecap":"round" }));
      g.appendChild(s("ellipse", { cx:86, cy:238, rx:10, ry:6, fill:"#3a2410" }));
      g.appendChild(s("path", { d:"M178 216 q20 -14 40 2", stroke:"#3a2410", "stroke-width":7, fill:"none", "stroke-linecap":"round" }));
      g.appendChild(s("path", { d:"M232 186 l14 -34 l14 38z", fill:"#a07444" }));
      for (let i=0;i<9;i++) g.appendChild(s("path", { d:`M${236 + i*8} ${200 + i*14} q14 6 6 18`, stroke:"#8a6038", "stroke-width":5, fill:"none" }));
      g.appendChild(s("path", { d:"M118 196 C 150 250, 220 260, 260 250 M150 300 L170 210", stroke:"#B0213B", "stroke-width":9, fill:"none" }));
      [[160,318],[200,300],[240,300]].forEach(([x,y]) => { g.appendChild(s("circle", { cx:x, cy:y, r:8, fill:"#E8B84A" })); g.appendChild(s("path", { d:`M${x-7} ${y+6} l-4 34 h22 l-4 -34z`, fill:"#B0213B" })); });
      g.appendChild(s("path", { d:"M330 640 C 360 700, 470 720, 560 700 L600 700 L600 780 L330 780Z", fill:"#B0213B" }));
      for (let i=0;i<6;i++) g.appendChild(s("rect", { x:350 + i*42, y:712, width:26, height:16, fill:"#E8B84A", opacity:.85 }));
      v.appendChild(g);
      return v;
    }
    if (G.shadow){ // never a clear face: a hood, a silver half-mask, a black horse's head
      const g = s("g", { filter:"url(#fx-paper-rough)" });
      g.appendChild(s("path", { d:"M60 780 C 80 600, 180 520, 300 520 C 420 520, 520 600, 540 780Z", fill:"#16090d" }));
      g.appendChild(s("path", { d:"M180 560 C 150 400, 190 230, 300 210 C 410 230, 450 400, 420 560 C 380 600, 220 600, 180 560Z", fill:"#24101a" }));
      g.appendChild(s("path", { d:"M232 420 C 230 330, 260 290, 300 290 C 340 290, 370 330, 368 420 C 340 470, 260 470, 232 420Z", fill:"#0c0508" }));
      g.appendChild(s("path", { d:"M236 360 C 250 330, 350 330, 364 360 L 360 392 C 340 384, 320 386, 300 400 C 280 386, 260 384, 240 392Z", fill:"#c9ced6" }));
      g.appendChild(s("path", { d:"M262 366 q14 -8 26 2 M312 368 q14 -10 26 -2", stroke:"#0c0508", "stroke-width":7, fill:"none", "stroke-linecap":"round" }));
      g.appendChild(s("path", { d:"M440 560 C 470 470, 520 420, 560 430 L600 470 L600 640 C 560 620, 520 640, 480 680Z", fill:"#0b0507" }));
      g.appendChild(s("path", { d:"M530 430 l10 -40 l20 44z", fill:"#0b0507" }));
      g.appendChild(s("path", { d:"M180 640 C 260 610, 340 610, 420 640", stroke:"#B0213B", "stroke-width":10, fill:"none" }));
      v.appendChild(g);
      return v;
    }
    const body = s("g", { filter:"url(#fx-paper-rough)" });
    if (G.hairStyle === "braid"){ body.appendChild(s("path", { d:"M392 330 C 430 420, 420 520, 440 640", stroke:G.hair, "stroke-width":34, fill:"none", "stroke-linecap":"round" })); for (let i=0;i<6;i++) body.appendChild(s("path", { d:`M${404 + i*5} ${400 + i*42} l18 -10`, stroke:"#000", "stroke-width":4, opacity:.3 })); body.appendChild(s("circle", { cx:440, cy:648, r:12, fill:"#E8B84A" })); }
    body.appendChild(s("path", { d:"M40 780 C 60 600, 170 540, 300 540 C 430 540, 540 600, 560 780Z", fill:G.shirt }));
    body.appendChild(s("path", { d:"M250 545 L300 620 L350 545", fill:"none", stroke:G.accent, "stroke-width":12 }));
    if (G.scarf){ body.appendChild(s("path", { d:"M170 560 C 200 520, 400 520, 430 560 L 450 640 C 360 600, 240 600, 150 640Z", fill:G.scarf })); }
    body.appendChild(s("path", { d:"M255 470 L345 470 L352 560 Q300 590 248 560Z", fill:G.skin }));
    body.appendChild(s("path", { d:"M255 520 Q300 548 345 520 L346 540 Q300 566 254 540Z", fill:"#000", opacity:.18 }));
    if (G.scarf) body.appendChild(s("path", { d:"M180 360 C 170 210, 430 210, 420 360 L 430 520 Q 300 560 170 520Z", fill:G.scarf }));
    body.appendChild(s("ellipse", { cx:300, cy:360, rx:108, ry:130, fill:G.skin }));
    body.appendChild(s("path", { d:"M300 230 C 360 236, 404 300, 406 360 C 406 430, 370 480, 300 490 C 340 470, 372 420, 372 360 C 370 300, 344 250, 300 230Z", fill:"#000", opacity:.12 }));
    if (G.hairStyle === "short") body.appendChild(s("path", { d:"M192 340 C 180 240, 250 205, 300 206 C 370 206, 420 250, 410 340 C 390 290, 340 268, 300 270 C 250 272, 210 290, 192 340Z", fill:G.hair }));
    if (G.hairStyle === "braid") body.appendChild(s("path", { d:"M190 360 C 180 240, 260 205, 310 208 C 380 214, 424 270, 412 360 C 396 300, 330 262, 290 300 C 260 280, 220 300, 190 360Z", fill:G.hair }));
    if (G.band) body.appendChild(s("path", { d:"M196 300 C 240 250, 360 250, 404 300", stroke:"#E8B84A", "stroke-width":10, fill:"none" }));
    if (G.scarf) body.appendChild(s("path", { d:"M192 330 C 196 250, 404 250, 408 330 C 380 290, 220 290, 192 330Z", fill:"#0f8f82" }));
    if (G.beard) body.appendChild(s("path", { d:"M214 400 C 220 480, 260 520, 300 524 C 340 520, 380 480, 386 400 C 360 440, 330 452, 300 452 C 270 452, 240 440, 214 400Z", fill:G.hair }));
    if (G.cap === "median"){ body.appendChild(s("path", { d:"M196 300 C 190 200, 300 150, 380 196 C 410 214, 412 270, 404 300 C 360 280, 240 280, 196 300Z", fill:"#7a4a2a" })); body.appendChild(s("path", { d:"M196 296 C 240 276, 360 276, 404 296", stroke:"#E8B84A", "stroke-width":8, fill:"none" })); body.appendChild(s("path", { d:"M196 300 C 180 360, 190 420, 200 440 L214 400 C 206 360, 206 330, 214 312Z", fill:"#7a4a2a" })); }
    if (G.cap === "wrap"){ body.appendChild(s("path", { d:"M190 310 C 186 220, 260 196, 300 196 C 350 196, 418 220, 410 310 C 360 290, 240 290, 190 310Z", fill:"#EFE6D2" })); for (let i=0;i<3;i++) body.appendChild(s("path", { d:`M${196 + i*6} ${296 - i*26} C 260 ${270 - i*26}, 340 ${270 - i*26}, ${404 - i*6} ${296 - i*26}`, stroke:"#cbbf9f", "stroke-width":5, fill:"none" })); }
    v.appendChild(body);
    const acc = s("g", { filter:"url(#fx-paper)" });
    if (G.acc === "tablet"){ acc.appendChild(s("rect", { x:60, y:600, width:170, height:150, rx:22, fill:"url(#g-clay)", transform:"rotate(-8 145 675)" })); for (let i=0;i<4;i++) for (let j=0;j<5;j++) acc.appendChild(s("path", { d:`M${82 + j*28} ${628 + i*30} l10 5 l-10 5z`, fill:"#6E4423", transform:"rotate(-8 145 675)" })); acc.appendChild(s("rect", { x:470, y:470, width:14, height:200, rx:5, fill:"#6b4a2a", transform:"rotate(22 477 570)" })); }
    if (G.acc === "staff"){ acc.appendChild(s("rect", { x:470, y:300, width:18, height:480, rx:8, fill:"#6b4a2a" })); acc.appendChild(s("circle", { cx:479, cy:296, r:22, fill:"#E8B84A" })); acc.appendChild(s("path", { d:"M450 330 q30 30 58 0", stroke:"#B0213B", "stroke-width":8, fill:"none" })); }
    if (G.acc === "lamp"){ acc.appendChild(s("circle", { cx:470, cy:640, r:110, fill:"url(#g-lamp)", opacity:.7 })); acc.appendChild(s("path", { d:"M420 650 q50 -40 110 -10 q-10 40 -60 40 q-36 0 -50 -30z", fill:"#A9774B" })); acc.appendChild(s("path", { d:"M528 640 q22 -10 26 -34 q-4 24 -14 40z", fill:"#F6D27A" })); acc.appendChild(s("path", { d:"M90 520 V780", stroke:"#E8B84A", "stroke-width":4 })); acc.appendChild(s("path", { d:"M78 760 l12 -40 l12 40z", fill:"#E8B84A" })); }
    if (G.acc === "chisel"){ acc.appendChild(s("rect", { x:470, y:500, width:20, height:200, rx:6, fill:"#6b4a2a", transform:"rotate(-24 480 600)" })); acc.appendChild(s("path", { d:"M432 470 l24 -6 l10 40 l-24 6z", fill:"#c9ced6", transform:"rotate(-24 480 600)" })); acc.appendChild(s("rect", { x:60, y:610, width:180, height:150, rx:8, fill:"#d9cdb4" })); acc.appendChild(A.rosette(150, 685, 54, { petals:12, cols:["#8a7c5c","#d9cdb4","#8a7c5c"], dots:false })); }
    v.appendChild(acc);
    return v;
  };

  /* ---------- level badges: seedling / daric / Simurgh feather ---------- */
  A.levelIcon = function(lvl, size){
    const v = svg(200, 200, { width:size||200, height:size||200 });
    const g = s("g", { filter:"url(#fx-paper)" });
    if (lvl === "d"){
      g.appendChild(s("circle", { cx:100, cy:100, r:92, fill:"#A9774B" }));
      g.appendChild(s("path", { d:"M40 152 Q100 134 160 152 L160 172 Q100 192 40 172Z", fill:"#5a3a1c" }));
      g.appendChild(s("path", { d:"M100 150 C 100 120, 96 100, 100 76", stroke:"#62D39F", "stroke-width":9, fill:"none", "stroke-linecap":"round" }));
      g.appendChild(s("path", { d:"M100 96 C 76 70, 52 74, 46 90 C 66 100, 86 100, 100 96Z", fill:"#8fe0b4" }));
      g.appendChild(s("path", { d:"M100 84 C 120 54, 148 56, 156 72 C 138 86, 116 90, 100 84Z", fill:"#8fe0b4" }));
    } else if (lvl === "a"){
      g.appendChild(s("circle", { cx:100, cy:100, r:92, fill:"url(#g-gold)" }));
      g.appendChild(s("circle", { cx:100, cy:100, r:76, fill:"none", stroke:"#8A5A12", "stroke-width":3, "stroke-dasharray":"3 5" }));
      // the king as a running archer (as on real darics), simplified
      const k = s("g", { fill:"#7a4c0e" });
      k.appendChild(s("circle", { cx:92, cy:60, r:10 }));
      k.appendChild(s("path", { d:"M86 68 L104 70 L112 104 L128 130 L118 134 L102 112 L94 136 L80 136 L88 104 Z" }));
      k.appendChild(s("path", { d:"M70 56 Q52 92 74 128", stroke:"#7a4c0e", "stroke-width":5, fill:"none" }));
      k.appendChild(s("path", { d:"M72 58 L72 126", stroke:"#7a4c0e", "stroke-width":1.5 }));
      k.appendChild(s("path", { d:"M74 92 L106 84", stroke:"#7a4c0e", "stroke-width":4 }));
      k.appendChild(s("path", { d:"M98 74 L84 70 L82 66 L100 66Z" }));
      g.appendChild(k);
    } else {
      g.appendChild(s("circle", { cx:100, cy:100, r:92, fill:"url(#g-lapis)" }));
      g.appendChild(s("path", { d:"M60 162 C 66 110, 104 62, 158 38 C 146 92, 112 136, 60 162Z", fill:"#14B8A6" }));
      g.appendChild(s("path", { d:"M74 146 C 84 116, 112 82, 150 52 C 136 94, 110 124, 74 146Z", fill:"#E8B84A" }));
      g.appendChild(s("path", { d:"M58 166 L152 48", stroke:"#FBE7B0", "stroke-width":3 }));
      g.appendChild(s("circle", { cx:120, cy:92, r:9, fill:"#0F1D4A" }));
      g.appendChild(s("circle", { cx:120, cy:92, r:4, fill:"#F6D27A" }));
    }
    v.appendChild(g);
    return v;
  };
  A.LEVELS = { d:{ name:"Developing", color:"#A9774B" }, a:{ name:"Achieved", color:"#B9770A" }, f:{ name:"Flying", color:"#1E3A8A" } };

  /* ---------- artefacts ----------
     Real museum objects are DRAWN (simplified), never faked as photos (§15).
     ART_IMG lists only our own designs that may be replaced by a generated image. */
  const ART_IMG = { seal:"seal-kings", lock:"art-seal-lock", cylseal:"art-cylinder-seal", foil:"art-foil-study", garden:"art-garden-plan" };
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
    const bgc = { cylinder:"#2a3550", behistun:"#7d6a52", herodotus:"#c9b48a", webpage:"#dfe6ea", app:"#0F1D4A", ezra:"#d8c49a", qanat:"#e9d6b0", badgir:"#e9c98f", yakhchal:"#cfa978", sun:"#C2593A", jug:"#e9d6b0", ice:"#9fd6e6", journal:"#5a3a24", tablet:"#3a2a1c", rosette:"#d9cdb4", seal:"#0F1D4A", lock:"#3a2617", cylseal:"#d8c49a", foil:"#2a2a2a", garden:"#e9d6b0" }[kind] || "#d8cfc0";
    v.appendChild(s("rect", { width:600, height:600, fill:bgc }));
    v.appendChild(s("rect", { width:600, height:600, fill:"url(#p-dots)", opacity:.2 }));
    const g = s("g", { filter:"url(#fx-paper-rough)" });
    const P = (d, f, extra) => g.appendChild(s("path", Object.assign({ d, fill:f }, extra || {})));
    const R = (x, y, w, hh, f, extra) => g.appendChild(s("rect", Object.assign({ x, y, width:w, height:hh, fill:f }, extra || {})));
    const C = (x, y, r, f, extra) => g.appendChild(s("circle", Object.assign({ cx:x, cy:y, r, fill:f }, extra || {})));
    const lines = (x, y, w, n, gap, col, sw) => { for (let i=0;i<n;i++) g.appendChild(s("path", { d:`M${x} ${y + i*gap} h${w*(.7 + ((i*37)%30)/100)}`, stroke:col, "stroke-width":sw || 4, "stroke-linecap":"round" })); };
    const wedgeRows = (x, y, cols, rows, col, sz) => { for (let i=0;i<rows;i++) for (let j=0;j<cols;j++){ const k = (i*7 + j*3) % 4, xx = x + j*sz*1.5, yy = y + i*sz*1.7; g.appendChild(s("path", { d: k ? `M${xx} ${yy} l${sz} ${sz*.4} l${-sz} ${sz*.4}z` : `M${xx} ${yy} l${sz*.4} ${sz} l${sz*.4} ${-sz}z`, fill:col })); } };
    switch (kind){
      case "cylinder": // a barrel-shaped clay cylinder covered in cuneiform (drawing)
        P("M120 230 Q300 170 480 230 L480 370 Q300 430 120 370Z", "url(#g-clay)");
        P("M120 230 Q300 290 480 230", "none", { stroke:"#6E4423", "stroke-width":4 });
        for (let i=0;i<6;i++) wedgeRows(150, 262 + i*0, 0, 0, "#6E4423", 10);
        wedgeRows(150, 262, 20, 5, "#7a4c28", 10);
        P("M380 300 l40 30 l-20 40 l-50 -10z", "#8a5a34", { opacity:.7 });
        break;
      case "behistun": // a cliff with a carved panel and three columns of text
        P("M0 600 L0 120 L120 60 L260 110 L420 40 L600 120 L600 600Z", "#8c7759");
        R(150, 170, 300, 120, "#a8977a", { rx:6 });
        [190,230,270,330,370,410].forEach((x, i) => P(`M${x} 280 v-60 a10 10 0 1 1 0.1 0`, "none", { stroke:"#5c4c36", "stroke-width":10, "stroke-linecap":"round" }));
        C(300, 196, 14, "#5c4c36");
        [[130,320],[260,320],[390,320]].forEach(([x, y]) => { R(x, y, 110, 200, "#9c8a6c", { rx:4 }); for (let i=0;i<9;i++) g.appendChild(s("path", { d:`M${x+12} ${y + 18 + i*20} h86`, stroke:"#5c4c36", "stroke-width":4, "stroke-dasharray":"6 5" })); });
        break;
      case "herodotus": // a papyrus scroll in Greek-style lines
        R(140, 120, 320, 360, "#e8d9b0", { rx:6 });
        C(140, 300, 0, "#000");
        P("M120 110 h40 v380 h-40z", "#b89a66", { rx:20 }); P("M440 110 h40 v380 h-40z", "#b89a66");
        lines(180, 170, 240, 12, 26, "#5a4630", 5);
        break;
      case "webpage":
        R(70, 100, 460, 400, "#fff", { rx:14 }); R(70, 100, 460, 46, "#1E3A8A", { rx:14 }); R(70, 130, 460, 16, "#1E3A8A");
        [100,124,148].forEach(x => C(x, 123, 8, "#F6D27A"));
        R(100, 170, 170, 150, "#d9cdb4", { rx:6 }); P("M140 290 Q185 200 230 290Z", "url(#g-clay)");
        lines(290, 186, 200, 5, 26, "#8b95a0", 7); lines(100, 350, 400, 4, 28, "#8b95a0", 7);
        break;
      case "app":
        R(80, 120, 440, 300, "#14286B", { rx:16 }); R(100, 140, 400, 250, "#0B1024", { rx:8 });
        g.appendChild(A.rosette(300, 265, 80, { petals:12 }));
        R(250, 420, 100, 40, "#26305A"); R(190, 460, 220, 18, "#26305A", { rx:8 });
        break;
      case "ezra": // scrolls and writings (ancient Jewish writings from the Persian period)
        [[150,180,-8],[300,160,6],[420,230,-4]].forEach(([x, y, a]) => { const gg = s("g", { transform:`rotate(${a} ${x} ${y+120})` }); gg.appendChild(s("rect", { x:x-60, y, width:120, height:260, fill:"#efe0b8", rx:4 })); gg.appendChild(s("rect", { x:x-74, y:y-10, width:20, height:280, rx:10, fill:"#8a5a34" })); gg.appendChild(s("rect", { x:x+54, y:y-10, width:20, height:280, rx:10, fill:"#8a5a34" })); for (let i=0;i<9;i++) gg.appendChild(s("path", { d:`M${x-46} ${y + 24 + i*24} h${70 + (i*13)%22}`, stroke:"#4a3a28", "stroke-width":5, "stroke-linecap":"round" })); g.appendChild(gg); });
        break;
      case "qanat": // cross-section: mountains, mother well, shafts, sloping tunnel, outlet
        P("M0 260 L120 120 L220 200 L300 250 L600 290 L600 600 L0 600Z", "#c49a62");
        P("M0 330 L600 380 L600 600 L0 600Z", "#7fb8c6", { opacity:.45 });
        P("M0 340 C 200 350, 400 372, 600 384", "none", { stroke:"#14B8A6", "stroke-width":8, "stroke-dasharray":"16 10" });
        [[150,175,330],[260,232,350],[360,262,360],[460,274,370]].forEach(([x, top, bot]) => R(x-7, top, 14, bot - top, "#5a3a1c"));
        P("M143 338 L560 372", "none", { stroke:"#2b6f9e", "stroke-width":14, "stroke-linecap":"round" });
        P("M560 372 L600 372 L600 300 L560 290Z", "#7fbf6a");
        C(150, 175, 10, "#5a3a1c");
        break;
      case "badgir": // windcatcher tower on a mud-brick house
        R(120, 330, 360, 220, "#d4a96a"); R(210, 120, 120, 220, "#c69a5c");
        for (let i=0;i<5;i++) R(222 + i*22, 140, 10, 90, "#7a5230");
        P("M120 330 L480 330 L480 344 L120 344Z", "#b0844a");
        R(230, 420, 80, 130, "#7a5230", { rx:40 });
        P("M40 150 h150 M60 190 h140", "none", { stroke:"#2b6f9e", "stroke-width":8, "stroke-linecap":"round" });
        P("M190 150 l-18 -12 M190 150 l-18 12", "none", { stroke:"#2b6f9e", "stroke-width":8, "stroke-linecap":"round" });
        P("M270 240 V480", "none", { stroke:"#2b6f9e", "stroke-width":7, "stroke-dasharray":"14 10" });
        P("M420 420 C 440 380, 400 360, 420 320 M450 430 C 470 390, 430 370, 450 330", "none", { stroke:"#C2593A", "stroke-width":6 });
        break;
      case "yakhchal": // domed ice house with a shade wall
        R(0, 470, 600, 130, "#b98a5e");
        P("M150 470 Q300 70 450 470Z", "#c49a62"); P("M300 92 l10 -20 l10 20z", "#a9774b");
        for (let i=1;i<6;i++) P(`M${150 + i*12} ${470 - i*50} Q300 ${70 + i*30} ${450 - i*12} ${470 - i*50}`, "none", { stroke:"#a9774b", "stroke-width":3 });
        R(0, 300, 120, 170, "#a9774b"); R(480, 300, 120, 170, "#a9774b");
        P("M200 470 L400 470 L380 560 L220 560Z", "#9fd6e6"); P("M240 500 l40 0 l-10 30 l-40 0z M310 510 l40 0 l-6 28 l-40 0z", "#e8f7fb");
        break;
      case "sun":
        C(300, 260, 120, "#F6D27A"); for (let i=0;i<12;i++) P(`M300 90 l14 40 l-28 0z`, "#F6D27A", { transform:`rotate(${i*30} 300 260)` });
        P("M0 470 Q150 430 300 470 T600 460 L600 600 L0 600Z", "#e1b06a");
        break;
      case "jug":
        P("M220 160 h160 l-10 40 q80 60 60 200 q-20 120 -130 120 q-110 0 -130 -120 q-20 -140 60 -200z", "#c2593a");
        P("M380 230 q70 10 60 90 q-8 60 -60 60", "none", { stroke:"#a9472c", "stroke-width":18 });
        P("M250 420 q50 30 100 0", "none", { stroke:"#8a3420", "stroke-width":6 });
        P("M230 170 q70 20 140 0", "none", { stroke:"#2b1b10", "stroke-width":6, opacity:.3 });
        break;
      case "ice":
        R(160, 230, 200, 160, "#e8f7fb", { rx:16, transform:"rotate(-8 260 310)" }); R(300, 300, 150, 120, "#d4eef5", { rx:14, transform:"rotate(12 375 360)" });
        P("M120 470 Q300 430 480 470 L460 500 L140 500Z", "#7fbfd0", { opacity:.7 });
        [[220,440],[360,452],[300,470]].forEach(([x, y]) => P(`M${x} ${y} q8 -18 0 -30 q-8 12 0 30z`, "#7fbfd0"));
        break;
      case "journal":
        R(130, 90, 340, 420, "#6b3f24", { rx:12 }); R(150, 110, 300, 380, "#7a4a2c", { rx:8 });
        g.appendChild(A.rosette(300, 260, 80, { petals:12, cols:["#E8B84A","#6b3f24","#F6D27A"] }));
        R(190, 390, 220, 40, "#E8B84A", { rx:6 }); R(438, 140, 18, 320, "#B0213B");
        break;
      case "tablet":
        P("M140 120 Q300 90 460 120 L470 480 Q300 510 130 480Z", "url(#g-clay)");
        wedgeRows(170, 160, 15, 9, "#6E4423", 12);
        break;
      case "rosette":
        R(40, 160, 520, 280, "#cbbd9e", { rx:6 });
        g.appendChild(A.rosette(170, 300, 100, { petals:12, cols:["#8a7c5c","#cbbd9e","#8a7c5c"], dots:false }));
        g.appendChild(A.rosette(430, 300, 100, { petals:12, cols:["#8a7c5c","#cbbd9e","#8a7c5c"], dots:false }));
        break;
      case "lock":
        P("M100 150 Q300 100 500 150 L520 450 Q300 500 80 450Z", "url(#g-clay)");
        g.appendChild(A.rosette(300, 300, 90, { petals:10, cols:["#6E4423","#a9774b","#6E4423"], dots:false }));
        break;
      case "seal":
        g.appendChild(A.sealArt([1,2,3,4,5,6,7,8,9,10], { noImg:true, size:600 }));
        break;
      default:
        C(300, 300, 160, "#b98a5e");
    }
    v.appendChild(g);
    return v;
  };

  /* ---------- Caravan Code icons ---------- */
  A.protoIcon = function(k){
    const v = svg(200,200); const g = s("g", { filter:"url(#fx-paper)" });
    if (k === "respect"){ g.appendChild(A.rosette(100, 100, 70, { petals:12, cols:["#E8B84A","#1E3A8A","#F6D27A"] })); g.appendChild(s("path", { d:"M100 132 C 76 116, 64 100, 70 88 C 76 76, 92 80, 100 92 C 108 80, 124 76, 130 88 C 136 100, 124 116, 100 132Z", fill:"#B0213B" })); }
    else if (k === "evidence"){ g.appendChild(s("path", { d:"M40 50 Q100 40 150 50 L154 160 Q100 170 36 160Z", fill:"url(#g-clay)" })); g.appendChild(s("circle", { cx:110, cy:96, r:40, fill:"rgba(255,255,255,.35)", stroke:"#2B1B10", "stroke-width":12 })); g.appendChild(s("rect", { x:136, y:124, width:20, height:56, rx:7, fill:"#2B1B10", transform:"rotate(-45 146 152)" })); }
    else if (k === "voice"){ g.appendChild(s("path", { d:"M30 50 h110 a20 20 0 0 1 20 20 v50 a20 20 0 0 1 -20 20 h-60 l-30 26 v-26 h-20 a20 20 0 0 1 -20 -20 v-50 a20 20 0 0 1 20 -20z", fill:"#0F7F74" })); [0,1,2].forEach(i => g.appendChild(s("circle", { cx:62+i*28, cy:95, r:9, fill:"#F4E3C1" }))); }
    else if (k === "better"){ g.appendChild(s("path", { d:"M10 160 C 60 130, 120 170, 190 130", stroke:"#E8B84A", "stroke-width":10, "stroke-dasharray":"14 10", fill:"none" })); g.appendChild(s("path", { d:"M100 140 C 100 110, 98 96, 100 70", stroke:"#0E9F6E", "stroke-width":8, fill:"none", "stroke-linecap":"round" })); g.appendChild(s("path", { d:"M100 96 C 78 72, 56 76, 50 92 C 70 102, 88 102, 100 96Z M100 84 C 120 56, 146 58, 154 74 C 136 88, 116 90, 100 84Z", fill:"#62D39F" })); }
    v.appendChild(g); return v;
  };

  /* band art for day cards / lesson hero */
  A.band = function(subject, seed){
    const v = svg(600, 300, { preserveAspectRatio:"xMidYMid slice" });
    seed = seed || 3;
    if (subject === "history"){
      v.appendChild(s("rect", { width:600, height:300, fill:"#1B2C66" }));
      v.appendChild(A.sun(460, 110, 40, .6));
      [60,170,280,390,500].forEach((x, i) => v.appendChild(A.column(x, 300, 250, "#2e2a52", { broken: i === 3 ? 1 : 0 })));
    } else if (subject === "geography"){
      v.appendChild(s("rect", { width:600, height:300, fill:"#0a3a3a" }));
      v.appendChild(A.contours(600, 300, seed, "rgba(246,210,122,.22)", 3));
      v.appendChild(A.mountains(600, 300, seed+2, ["#3d6b66"], { top:150, amp:130, snowLayers:1, snowColor:"#a9c9c2", peaks:4 }));
      v.appendChild(A.dunes(600, 300, seed, ["#8a6a3c"], { top:250, amp:40, paper:false }));
      v.appendChild(A.caravan(330, 196, .4, "#3a2614", 4));
    } else if (subject === "science"){
      v.appendChild(s("rect", { width:600, height:300, fill:"#163b2f" }));
      v.appendChild(A.mountains(600, 300, seed+5, ["#3c5f50","#2d4c40"], { top:140, bottom:200, amp:120, snowLayers:1, snowColor:"#c9d9cf", peaks:4 }));
      for (let i=0;i<6;i++) v.appendChild(A.oak(40 + i*110, 300, 90, "#15291f"));
    } else if (subject === "technology"){
      v.appendChild(s("rect", { width:600, height:300, fill:"#6a2c18" }));
      v.appendChild(s("rect", { width:600, height:300, fill:"url(#p-blueprint)" }));
      const bp = s("g", { stroke:"#FBEFDC", "stroke-width":3, fill:"none", opacity:.6 });
      bp.appendChild(s("path", { d:"M0 120 L120 60 L220 110 L600 130" })); bp.appendChild(s("path", { d:"M40 200 L600 240", "stroke-dasharray":"10 6" }));
      [140,240,340,440].forEach((x, i) => bp.appendChild(s("path", { d:`M${x} ${100 + i*6} V${204 + i*9}` })));
      v.appendChild(bp);
    } else if (subject === "art"){
      v.appendChild(s("rect", { width:600, height:300, fill:"#F4E3C1" }));
      v.appendChild(A.brickBand(0, 190, 600, 110));
      v.appendChild(A.rosette(300, 96, 70, { petals:16, cols:["#B9770A","#1E3A8A","#E8B84A"] }));
    }
    return v;
  };

  /* ---------- the Seal of the Kings: ten fragments ----------
     collected = list of week numbers (1–10) whose fragment is in place.
     Uses assets/img/seal-kings.webp when present (old CORE-07); otherwise a drawn seal. */
  A.sealArt = function(collected, opt){
    opt = opt || {};
    const S = 600, R = 280, c = S/2;
    const v = svg(S, S, { class:"sealart" });
    const uid = "sl" + Math.floor(Math.random()*1e7);
    const have = new Set((collected || []).map(Number));
    // jagged radial edges shared by neighbouring fragments
    const edge = i => { const a = (i*36 - 90)*Math.PI/180, rnd = BM.rng(100 + i), pts = []; for (let k=0;k<=6;k++){ const r = R*k/6, j = k === 0 || k === 6 ? 0 : (rnd() - .5)*28; pts.push([c + Math.cos(a)*r - Math.sin(a)*j, c + Math.sin(a)*r + Math.cos(a)*j]); } return pts; };
    const E = Array.from({ length:10 }, (_, i) => edge(i));
    const fragPath = k => { const a = E[k], b = E[(k+1) % 10]; const end = b[b.length-1]; return "M" + a.map(p => p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" L") + ` A${R} ${R} 0 0 1 ${end[0].toFixed(1)} ${end[1].toFixed(1)} L` + b.slice().reverse().map(p => p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" L") + "Z"; };
    const defs = s("defs");
    defs.appendChild(s("clipPath", { id:uid + "c" }, s("circle", { cx:c, cy:c, r:R })));
    v.appendChild(defs);
    // base seal (drawn)
    const base = s("g", { "clip-path":`url(#${uid}c)` });
    base.appendChild(s("circle", { cx:c, cy:c, r:R, fill:"url(#g-gold)" }));
    base.appendChild(s("circle", { cx:c, cy:c, r:R*.82, fill:"url(#g-lapis)" }));
    for (let i=0;i<24;i++){ const a = i*15*Math.PI/180; base.appendChild(s("circle", { cx:c + Math.cos(a)*R*.91, cy:c + Math.sin(a)*R*.91, r:9, fill: i % 2 ? "#14B8A6" : "#1E3A8A", stroke:"#8A5A12", "stroke-width":2 })); }
    base.appendChild(A.rosette(c, c - 10, R*.42, { petals:16, cols:["#E8B84A","#0F1D4A","#F6D27A"] }));
    // winged-lion hint: wings either side
    [-1, 1].forEach(sg => base.appendChild(s("path", { d:`M${c + sg*40} ${c + 90} C ${c + sg*120} ${c + 60}, ${c + sg*170} ${c + 20}, ${c + sg*190} ${c - 40} C ${c + sg*150} ${c + 10}, ${c + sg*110} ${c + 40}, ${c + sg*40} ${c + 60}Z`, fill:"#E8B84A", opacity:.9 })));
    base.appendChild(s("path", { d:`M${c-90} ${c+150} h180`, stroke:"#E8B84A", "stroke-width":8 }));
    v.appendChild(base);
    if (!opt.noImg){
      const im = s("image", { href:"assets/img/seal-kings.webp", x:c - R*1.07, y:c - R*1.07, width:R*2.14, height:R*2.14, preserveAspectRatio:"xMidYMid slice", "clip-path":`url(#${uid}c)` });
      im.addEventListener("error", () => im.remove());
      v.appendChild(im);
    }
    // fragments: missing = dull clay with cracks; in place = clear, outlined in gold
    const frags = [];
    for (let k=0;k<10;k++){
      const on = have.has(k+1);
      const p = s("path", { d:fragPath(k), class:"frag", fill: on ? "rgba(0,0,0,0)" : "#5a3d26", "fill-opacity": on ? 0 : .9, stroke: on ? "#F6D27A" : "#2a1a0c", "stroke-width": on ? 3 : 4, style:"transition:fill-opacity 1.2s, stroke 1s" });
      v.appendChild(p); frags.push(p);
      const mid = (k*36 + 18 - 90)*Math.PI/180;
      const t = s("text", { x:c + Math.cos(mid)*R*.7, y:c + Math.sin(mid)*R*.7 + 12, "text-anchor":"middle", "font-family":"Cinzel, serif", "font-weight":800, "font-size":34, fill: on ? "rgba(0,0,0,0)" : "#c99a6c", style:"transition:fill 1s" }, ["I","II","III","IV","V","VI","VII","VIII","IX","X"][k]);
      v.appendChild(t); frags[k].label = t;
    }
    v.appendChild(s("circle", { cx:c, cy:c, r:R, fill:"none", stroke:"#8A5A12", "stroke-width":6 }));
    v.light = n => { const p = frags[n-1]; if (!p) return; p.setAttribute("fill-opacity", 0); p.setAttribute("stroke", "#F6D27A"); p.setAttribute("stroke-width", 3); p.label.setAttribute("fill", "rgba(0,0,0,0)"); };
    v.fragPath = fragPath; v.centre = c;
    return v;
  };

  /* team crest: generated image if present, otherwise a drawn rosette crest in the team colour */
  A.teamCrest = function(team){
    const box = BM.h("div", { class:"crest" });
    const v = svg(200, 200); v.appendChild(s("circle", { cx:100, cy:100, r:100, fill:team.color }));
    v.appendChild(A.rosette(100, 100, 70, { petals:12, cols:["#F6D27A", team.color, "#FBE7B0"] }));
    box.appendChild(v);
    const im = BM.imgSlot(team.img, "crest-img"); box.appendChild(im);
    return box;
  };

  A.brandMark = function(){
    const v = svg(64,64);
    v.innerHTML = `<rect width="64" height="64" rx="14" fill="#0F1D4A"/><circle cx="32" cy="26" r="15" fill="none" stroke="#E8B84A" stroke-width="2"/>` + Array.from({ length:12 }, (_, i) => `<path d="M32 13 C 35 17, 34 21, 32 23 C 30 21, 29 17, 32 13Z" fill="#E8B84A" transform="rotate(${i*30} 32 26)"/>`).join("") + `<circle cx="32" cy="26" r="4" fill="#14B8A6"/><path d="M4 54 C 18 46, 34 58, 60 48" stroke="#F6D27A" stroke-width="3" stroke-dasharray="4 3" fill="none"/>`;
    return v;
  };
})(window.BM);
