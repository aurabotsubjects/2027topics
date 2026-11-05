/* ==========================================================
   PROCEDURAL CUT-PAPER ART
   Every scene is built in code so the app looks finished with
   zero image files. ChatGPT images (assets/img) layer on top.
   ========================================================== */
(function(FC){
  "use strict";
  const s = FC.s, svg = FC.svg;
  const A = FC.art = {};

  /* ---------- shared SVG defs (filters) ---------- */
  A.installDefs = function(){
    if (document.getElementById("fc-defs")) return;
    const d = svg(10,10,{ id:"fc-defs", width:0, height:0, style:"position:absolute;width:0;height:0;overflow:hidden", "aria-hidden":"true" });
    d.innerHTML = `
    <defs>
      <filter id="fx-rough" x="-5%" y="-5%" width="110%" height="110%">
        <feTurbulence type="fractalNoise" baseFrequency=".035" numOctaves="2" seed="3" result="t"/>
        <feDisplacementMap in="SourceGraphic" in2="t" scale="5" xChannelSelector="R" yChannelSelector="G"/>
      </filter>
      <filter id="fx-paper" x="-20%" y="-20%" width="140%" height="150%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="b1"/>
        <feOffset in="b1" dy="2" result="o1"/>
        <feGaussianBlur in="SourceAlpha" stdDeviation="9" result="b2"/>
        <feOffset in="b2" dy="10" result="o2"/>
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
      <filter id="fx-grain"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2"/><feColorMatrix values="0 0 0 0 .3 0 0 0 0 .2 0 0 0 0 .1 0 0 0 .22 0"/><feComposite in2="SourceGraphic" operator="in"/></filter>
      <filter id="fx-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      <filter id="fx-softglow" x="-80%" y="-80%" width="260%" height="260%"><feGaussianBlur stdDeviation="22"/></filter>
      <radialGradient id="g-lamp" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#F0C25E" stop-opacity=".9"/><stop offset="1" stop-color="#F0C25E" stop-opacity="0"/></radialGradient>
      <radialGradient id="g-spark" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#7FF3FF" stop-opacity=".9"/><stop offset="1" stop-color="#7FF3FF" stop-opacity="0"/></radialGradient>
      <pattern id="p-fret" width="48" height="24" patternUnits="userSpaceOnUse"><path d="M0 24V12h6V6h6V0h12v6h-6v6h6v12h-6v-6h-6v6z" fill="#D9A23A"/></pattern>
      <pattern id="p-weave" width="16" height="16" patternUnits="userSpaceOnUse"><path d="M0 4h8M8 12h8M4 0v8M12 8v8" stroke="#000" stroke-opacity=".18" stroke-width="3"/></pattern>
      <pattern id="p-dots" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="11" cy="11" r="2.2" fill="#000" fill-opacity=".16"/></pattern>
    </defs>`;
    document.body.appendChild(d);
  };

  /* ---------- primitives ---------- */
  A.leaf = function(x, y, len, ang, wid, fill, opt){
    opt = opt || {};
    const r = ang * Math.PI/180, c = Math.cos(r), sn = Math.sin(r);
    const P = (u, v) => `${(x + u*c - v*sn).toFixed(1)} ${(y + u*sn + v*c).toFixed(1)}`;
    const w = wid;
    const d = `M${P(0,0)} C${P(len*.25,-w)} ${P(len*.7,-w*.9)} ${P(len,0)} C${P(len*.7,w*.9)} ${P(len*.25,w)} ${P(0,0)}Z`;
    const g = s("g");
    g.appendChild(s("path", { d, fill }));
    if (opt.rib !== false) g.appendChild(s("path", { d:`M${P(len*.04,0)} Q${P(len*.5,w*.08)} ${P(len*.95,0)}`, fill:"none", stroke:opt.ribColor || "rgba(0,0,0,.22)", "stroke-width":Math.max(1.2, w*.06) }));
    if (opt.slits){
      for (let i=1;i<=opt.slits;i++){
        const u = len*(i/(opt.slits+1));
        g.appendChild(s("path", { d:`M${P(u, w*.08)} L${P(u+len*.12, w*.95)}`, stroke:opt.slitColor||"rgba(0,0,0,.35)", "stroke-width":w*.07, "stroke-linecap":"round" }));
        g.appendChild(s("path", { d:`M${P(u, -w*.08)} L${P(u+len*.12, -w*.95)}`, stroke:opt.slitColor||"rgba(0,0,0,.35)", "stroke-width":w*.07, "stroke-linecap":"round" }));
      }
    }
    return g;
  };
  A.frond = function(x, y, len, ang, fill, rnd){
    const g = s("g");
    const r = ang*Math.PI/180;
    const ex = x + Math.cos(r)*len, ey = y + Math.sin(r)*len;
    const cx = x + Math.cos(r)*len*.5 - Math.sin(r)*len*.18, cy = y + Math.sin(r)*len*.5 + Math.cos(r)*len*.18;
    g.appendChild(s("path", { d:`M${x} ${y} Q${cx} ${cy} ${ex} ${ey}`, stroke:fill, "stroke-width":Math.max(3,len*.016), fill:"none" }));
    const n = 16;
    for (let i=2;i<n;i++){
      const t = i/n;
      const px = (1-t)*(1-t)*x + 2*(1-t)*t*cx + t*t*ex, py = (1-t)*(1-t)*y + 2*(1-t)*t*cy + t*t*ey;
      const l = len*.28*Math.sin(Math.PI*t)*(0.8+rnd()*.4);
      g.appendChild(A.leaf(px, py, l, ang - 60 + rnd()*10, l*.13, fill, { rib:false }));
      g.appendChild(A.leaf(px, py, l, ang + 60 + rnd()*10, l*.13, fill, { rib:false }));
    }
    return g;
  };
  A.jungle = function(W, H, seed, colors, opt){
    opt = opt || {};
    const rnd = FC.rng(seed), g = s("g");
    const count = opt.count || 26;
    for (let i=0;i<count;i++){
      const side = rnd();
      let x, y, ang;
      if (side < .55){ x = rnd()*W; y = H + 20; ang = -90 + (rnd()-.5)*120; }
      else if (side < .78){ x = -20; y = H*.35 + rnd()*H*.7; ang = -40 + (rnd()-.5)*60; }
      else { x = W + 20; y = H*.35 + rnd()*H*.7; ang = -140 + (rnd()-.5)*60; }
      const len = (opt.size||1)*(160 + rnd()*260);
      const col = colors[Math.floor(rnd()*colors.length)];
      const kind = rnd();
      if (kind < .35) g.appendChild(A.frond(x, y, len*1.3, ang, col, rnd));
      else g.appendChild(A.leaf(x, y, len, ang, len*(.22+rnd()*.14), col, { slits: kind > .75 ? 3 : 0 }));
    }
    return g;
  };
  A.pyramid = function(x, base, w, h, steps, fill, dark, opt){
    opt = opt || {};
    const g = s("g");
    const sh = h/(steps+1.2);
    for (let i=0;i<steps;i++){
      const ww = w*(1 - i*(.62/steps));
      g.appendChild(s("rect", { x:x - ww/2, y:base - (i+1)*sh, width:ww, height:sh+1, fill: i%2 ? fill : (opt.alt || fill) }));
      g.appendChild(s("rect", { x:x - ww/2, y:base - (i+1)*sh, width:ww, height:3, fill:dark, opacity:.35 }));
    }
    const top = base - steps*sh;
    g.appendChild(s("path", { d:`M${x-w*.12} ${base} L${x-w*.08} ${top} L${x+w*.08} ${top} L${x+w*.12} ${base}Z`, fill:dark, opacity:.55 }));
    for (let i=0;i<steps*3;i++){ const yy = base - i*(steps*sh)/(steps*3); g.appendChild(s("line", { x1:x-w*.1+i*(w*.02/(steps*3)), x2:x+w*.1-i*(w*.02/(steps*3)), y1:yy, y2:yy, stroke:fill, "stroke-width":2, opacity:.5 })); }
    const tw = w*.24, th = sh*1.35;
    g.appendChild(s("rect", { x:x-tw/2, y:top-th, width:tw, height:th, fill }));
    g.appendChild(s("rect", { x:x-tw*.18, y:top-th*.7, width:tw*.36, height:th*.7, fill:dark, opacity:.8 }));
    if (opt.comb !== false){
      g.appendChild(s("path", { d:`M${x-tw*.38} ${top-th} L${x-tw*.25} ${top-th-sh*1.4} L${x+tw*.25} ${top-th-sh*1.4} L${x+tw*.38} ${top-th}Z`, fill }));
      for (let i=0;i<3;i++) g.appendChild(s("rect", { x:x-tw*.18+i*tw*.13, y:top-th-sh*1.15, width:tw*.07, height:sh*.5, fill:dark, opacity:.6 }));
    }
    return g;
  };
  A.traces = function(W, H, seed, opt){
    opt = opt || {};
    const rnd = FC.rng(seed), g = s("g", { fill:"none", "stroke-linecap":"round", "stroke-linejoin":"round" });
    const step = opt.step || 60, n = opt.count || 22;
    const col = opt.color || "#C46A3A", glow = opt.glow || "#7FF3FF";
    for (let i=0;i<n;i++){
      let x = Math.round(rnd()*W/step)*step, y = Math.round(rnd()*H/step)*step;
      let d = `M${x} ${y}`; const pts = [[x,y]];
      let dir = Math.floor(rnd()*4);
      const segs = 3 + Math.floor(rnd()*6);
      for (let k=0;k<segs;k++){
        const L = step*(1+Math.floor(rnd()*4));
        if (rnd() < .5) dir = (dir + (rnd()<.5?1:3)) % 4;
        const diag = rnd() < .3;
        const dx = [1,0,-1,0][dir]*L, dy = [0,1,0,-1][dir]*L;
        if (diag){ x += dx*.5 + (dy? (rnd()<.5?1:-1)*L*.5:0); y += dy*.5 + (dx? (rnd()<.5?1:-1)*L*.5:0); }
        else { x += dx; y += dy; }
        d += ` L${x} ${y}`; pts.push([x,y]);
      }
      const w = opt.width || 5;
      g.appendChild(s("path", { d, stroke:col, "stroke-width":w, opacity:opt.opacity||.75 }));
      if (rnd() < (opt.pulse ?? .45)){
        const p = s("path", { d, stroke:glow, "stroke-width":w*.8, class:"trace-pulse", opacity:.7, style:`animation-delay:${(-rnd()*4.5).toFixed(2)}s;filter:drop-shadow(0 0 6px ${glow})` });
        g.appendChild(p);
      }
      [pts[0], pts[pts.length-1]].forEach(([px,py]) => {
        g.appendChild(s("circle", { cx:px, cy:py, r:w*2.1, fill:opt.bg||"#2A2420", stroke:col, "stroke-width":w*.9 }));
        g.appendChild(s("circle", { cx:px, cy:py, r:w*.7, fill:col }));
      });
    }
    return g;
  };
  A.contours = function(W, H, seed, color, count){
    const rnd = FC.rng(seed), g = s("g", { fill:"none", stroke:color, "stroke-width":2 });
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

  /* ---------- slide backdrops (parallax layers) ---------- */
  function layer(depth, node, cls){ const wrap = svg(2000,1160,{ class:"layer " + (cls||""), preserveAspectRatio:"xMidYMid slice", "data-depth":depth }); wrap.appendChild(node); return wrap; }
  A.backdrop = function(subject, variant, seed){
    const root = FC.h("div", { class:"backdrop" });
    seed = seed || 7;
    const W = 2000, H = 1160;
    if (subject === "history"){
      root.style.background = "radial-gradient(120% 90% at 70% 20%, #2c5b47 0%, #183a2e 38%, #14110F 80%)";
      const sky = s("g");
      sky.appendChild(s("circle", { cx:1500, cy:260, r:180, fill:"#D9A23A", opacity:.18 }));
      sky.appendChild(s("circle", { cx:1500, cy:260, r:110, fill:"#F0C25E", opacity:.22 }));
      root.appendChild(layer(.15, sky));
      const far = s("g", { filter:"url(#fx-paper)" });
      far.appendChild(A.pyramid(1480, 900, 560, 520, 8, "#2b4a3c", "#14221c"));
      far.appendChild(A.pyramid(1000, 960, 360, 300, 6, "#24402f", "#14221c", { comb:false }));
      far.appendChild(s("rect", { x:0, y:900, width:W, height:300, fill:"#1d3328" }));
      root.appendChild(layer(.3, far));
      const mid = s("g", { filter:"url(#fx-paper)" }); mid.appendChild(A.jungle(W, H, seed+1, ["#1a4635","#1f513c","#173d2f"], { count:18, size:1.1 }));
      root.appendChild(layer(.6, mid));
      const near = s("g", { filter:"url(#fx-paper)" }); near.appendChild(A.jungle(W, H, seed+2, ["#0f2a20","#123326","#0c241b"], { count:14, size:1.5 }));
      root.appendChild(layer(1, near));
    } else if (subject === "geography"){
      root.style.background = "radial-gradient(130% 100% at 30% 10%, #1f6f7c 0%, #164a56 40%, #102b33 85%)";
      const topo = s("g"); topo.appendChild(A.contours(W, H, seed, "rgba(127,220,235,.22)", 6));
      root.appendChild(layer(.2, topo));
      const grid = s("g", { stroke:"rgba(233,220,192,.08)", "stroke-width":2 });
      for (let x=0;x<=W;x+=125) grid.appendChild(s("line", { x1:x, x2:x, y1:0, y2:H }));
      for (let y=0;y<=H;y+=125) grid.appendChild(s("line", { x1:0, x2:W, y1:y, y2:y }));
      root.appendChild(layer(.35, grid));
      const pieces = s("g", { filter:"url(#fx-paper-rough)" });
      const rnd = FC.rng(seed);
      for (let i=0;i<5;i++){ const x = rnd()*W, y = rnd()*H; pieces.appendChild(s("path", { d:`M${x} ${y} l${180+rnd()*120} ${-30+rnd()*60} l${-20+rnd()*60} ${120+rnd()*80} l${-200-rnd()*80} ${20+rnd()*40}z`, fill: i%2 ? "#C9A97A" : "#E9DCC0", opacity:.10 })); }
      root.appendChild(layer(.7, pieces));
    } else if (subject === "science"){
      root.style.background = "radial-gradient(90% 80% at 50% 40%, #1d2a2e 0%, #121416 55%, #0b0908 100%)";
      const tr = s("g", { opacity:.85 }); tr.appendChild(A.traces(W, H, seed, { color:"#5a3420", glow:"#7FF3FF", count:16, width:4, opacity:.45, bg:"#121416", pulse:.35 }));
      root.appendChild(layer(.25, tr));
      const glow = s("g"); glow.appendChild(s("circle", { cx:1600, cy:180, r:420, fill:"url(#g-spark)", opacity:.18 }));
      root.appendChild(layer(.45, glow));
      const stone = s("g", { filter:"url(#fx-paper)" });
      stone.appendChild(s("path", { d:`M0 0 H260 V140 H200 V300 H120 V1160 H0Z`, fill:"#1b1a19" }));
      stone.appendChild(s("path", { d:`M2000 0 H1740 V120 H1820 V280 H1880 V1160 H2000Z`, fill:"#1b1a19" }));
      root.appendChild(layer(.9, stone));
    } else if (subject === "technology"){
      root.style.background = "radial-gradient(110% 90% at 60% 30%, #3a2a20 0%, #2A2420 45%, #14110F 100%)";
      const grid = s("g", { fill:"rgba(233,220,192,.06)" });
      for (let x=30;x<W;x+=60) for (let y=30;y<H;y+=60) grid.appendChild(s("circle", { cx:x, cy:y, r:2.4 }));
      root.appendChild(layer(.15, grid));
      const tr = s("g"); tr.appendChild(A.traces(W, H, seed, { color:"#9a5530", glow:"#F0C25E", count:18, width:5, opacity:.38, bg:"#2A2420", pulse:.3, step:60 }));
      root.appendChild(layer(.4, tr));
      const amate = s("g", { filter:"url(#fx-paper-rough)", opacity:.09 });
      amate.appendChild(s("rect", { x:1380, y:600, width:700, height:560, fill:"#E9DCC0", transform:"rotate(-8 1700 900)" }));
      root.appendChild(layer(.8, amate));
    } else if (subject === "art"){
      root.style.background = "linear-gradient(160deg, #EFE4CC 0%, #E9DCC0 45%, #DCC8A2 100%)";
      const fib = s("g"); fib.appendChild(s("rect", { width:W, height:H, filter:"url(#fx-grain)", fill:"#fff" }));
      root.appendChild(layer(.05, fib));
      const rnd = FC.rng(seed), sp = s("g", { opacity:.55 });
      const cols = ["#B3262E","#2FB3A6","#D9A23A","#2E9FB0"];
      for (let i=0;i<6;i++){
        const x = rnd()*W, y = rnd()*H, r = 60 + rnd()*160, c = cols[i%cols.length];
        const pts = []; for (let a=0;a<24;a++){ const t = a/24*6.283; const k = r*(.75 + rnd()*.45); pts.push(`${(x+Math.cos(t)*k).toFixed(0)} ${(y+Math.sin(t)*k).toFixed(0)}`); }
        sp.appendChild(s("path", { d:"M"+pts.join(" L")+"Z", fill:c, opacity:.13 + rnd()*.1 }));
      }
      root.appendChild(layer(.25, sp));
      const strokes = s("g", { fill:"none", "stroke-linecap":"round" });
      strokes.appendChild(s("path", { d:"M-40 1040 C 420 960, 820 1110, 1300 1010 S 1900 980 2060 1040", stroke:"#B3262E", "stroke-width":46, opacity:.16 }));
      strokes.appendChild(s("path", { d:"M-40 120 C 300 160, 700 60, 1100 110", stroke:"#2FB3A6", "stroke-width":30, opacity:.14 }));
      root.appendChild(layer(.5, strokes));
      const fret = s("g"); fret.appendChild(s("rect", { x:0, y:1100, width:W, height:24, fill:"url(#p-fret)", opacity:.4 }));
      root.appendChild(layer(.7, fret));
    } else if (subject === "storm"){
      root.style.background = "linear-gradient(#0c1416, #121a1a 50%, #0b0908)";
    } else if (subject === "collector"){
      root.style.background = "radial-gradient(80% 70% at 50% 50%, #2a1012 0%, #120a0a 60%, #050404 100%)";
      const scan = s("g", { opacity:.25 });
      for (let y=0;y<H;y+=6) scan.appendChild(s("rect", { x:0, y, width:W, height:2, fill:"#000" }));
      root.appendChild(layer(0, scan));
      const seal = s("g", { opacity:.08, transform:"translate(1550 560) scale(5)" }); seal.appendChild(A.beetle("#C0C4C8"));
      root.appendChild(layer(.3, seal));
    } else if (subject === "nz"){
      root.style.background = "radial-gradient(110% 90% at 30% 20%, #1f5a46 0%, #143529 50%, #0d1f19 100%)";
      const topo = s("g"); topo.appendChild(A.contours(W, H, seed+3, "rgba(127,200,160,.16)", 4));
      root.appendChild(layer(.25, topo));
    }
    return root;
  };

  /* ---------- the Collector's seal: silver beetle ---------- */
  A.beetle = function(c){
    const g = s("g", { fill:c });
    g.appendChild(s("ellipse", { cx:0, cy:6, rx:22, ry:28 }));
    g.appendChild(s("ellipse", { cx:0, cy:-26, rx:12, ry:9 }));
    g.appendChild(s("path", { d:"M0 -22 V34", stroke:"#000", "stroke-opacity":.4, "stroke-width":2 }));
    [-1,1].forEach(sg => { for (let i=0;i<3;i++) g.appendChild(s("path", { d:`M${sg*18} ${-6+i*14} l${sg*16} ${-8+i*6}`, stroke:c, "stroke-width":3, "stroke-linecap":"round" })); });
    g.appendChild(s("path", { d:"M-6 -33 q-8 -10 -14 -8 M6 -33 q8 -10 14 -8", stroke:c, "stroke-width":2.5, fill:"none" }));
    return g;
  };

  /* ---------- guide portraits (faceless editorial cut-paper busts) ---------- */
  const GUIDES = {
    itzel:  { name:"Dr Itzel Canul", role:"Epigrapher · Expedition Leader", bg:["#1F7A5A","#123f30"], skin:"#8a5a3c", hair:"#1c1410", shirt:"#b59a6a", accent:"#D9A23A" },
    sofia:  { name:"Capt. Sofía Quispe", role:"Bush Pilot · Navigator", bg:["#2E9FB0","#17505a"], skin:"#9a6644", hair:"#1a120e", shirt:"#5a4636", accent:"#B3262E" },
    mateo:  { name:"Mateo Ríos", role:"Camp Engineer", bg:["#C46A3A","#5a2e18"], skin:"#a8734d", hair:"#23170f", shirt:"#2f3b3a", accent:"#7FF3FF" },
    rosa:   { name:"Doña Rosa Ajpop", role:"Weaver · Restorer", bg:["#B3262E","#5a1216"], skin:"#7d4f33", hair:"#2a2a2a", shirt:"#2E9FB0", accent:"#D9A23A" },
    collector:{ name:"The Collector", role:"Identity unknown", bg:["#3a1416","#0b0606"], skin:"#0b0808", hair:"#0b0808", shirt:"#111", accent:"#C0C4C8" }
  };
  A.GUIDES = GUIDES;
  A.portrait = function(id){
    const G = GUIDES[id] || GUIDES.itzel;
    const v = svg(600, 780, { preserveAspectRatio:"xMidYMid slice" });
    const gid = "pg-" + id + Math.floor(Math.random()*1e6);
    v.appendChild(s("defs", null, s("radialGradient", { id:gid, cx:".5", cy:".35", r:".75" }, s("stop", { offset:"0", "stop-color":G.bg[0] }), s("stop", { offset:"1", "stop-color":G.bg[1] }))));
    v.appendChild(s("rect", { width:600, height:780, fill:`url(#${gid})` }));
    // sunburst rays behind (subtle)
    const rays = s("g", { opacity:.12, transform:"translate(300 330)" });
    for (let i=0;i<24;i++) rays.appendChild(s("path", { d:"M0 0 L-28 -520 L28 -520Z", fill:"#fff", transform:`rotate(${i*15})` }));
    v.appendChild(rays);
    v.appendChild(s("circle", { cx:300, cy:330, r:205, fill:"none", stroke:G.accent, "stroke-width":3, opacity:.5, "stroke-dasharray":"2 12" }));
    const body = s("g", { filter:"url(#fx-paper-rough)" });
    // shoulders
    body.appendChild(s("path", { d:"M40 780 C 60 600, 170 540, 300 540 C 430 540, 540 600, 560 780Z", fill:G.shirt }));
    // neck
    body.appendChild(s("path", { d:"M255 470 L345 470 L352 560 Q300 590 248 560Z", fill:G.skin }));
    body.appendChild(s("path", { d:"M255 520 Q300 548 345 520 L346 540 Q300 566 254 540Z", fill:"#000", opacity:.18 }));
    // head
    if (id !== "collector") body.appendChild(s("ellipse", { cx:300, cy:370, rx:100, ry:124, fill:G.skin }));
    // face shading (cut-paper planes: one side shadow, nose plane)
    if (id !== "collector"){
      body.appendChild(s("path", { d:"M300 246 C 360 250, 400 300, 400 370 C 400 440, 360 492, 300 494 C 330 440, 336 300, 300 246Z", fill:"#000", opacity:.16 }));
      body.appendChild(s("path", { d:"M300 340 L318 412 L296 418Z", fill:"#000", opacity:.18 }));
      body.appendChild(s("path", { d:"M268 446 Q296 458 326 446", stroke:"#000", "stroke-opacity":.25, "stroke-width":5, fill:"none", "stroke-linecap":"round" }));
    }
    // character specifics
    if (id === "itzel"){
      body.appendChild(s("path", { d:"M196 380 C 186 250, 250 226, 300 226 C 370 226, 414 270, 404 370 C 392 300, 350 274, 300 280 C 250 282, 214 310, 196 380Z", fill:G.hair }));
      body.appendChild(s("circle", { cx:300, cy:236, r:46, fill:G.hair }));
      body.appendChild(s("path", { d:"M282 202 q18 -10 36 0", stroke:"#D9A23A", "stroke-width":6, fill:"none" }));
      // collar + woven strap
      body.appendChild(s("path", { d:"M232 560 L300 640 L368 560 L340 548 L300 600 L260 548Z", fill:"#d6c08f" }));
      const strap = s("path", { d:"M150 600 L470 780 L430 780 L130 640Z", fill:"#B3262E" }); body.appendChild(strap);
      body.appendChild(s("path", { d:"M150 600 L470 780 L430 780 L130 640Z", fill:"url(#p-weave)" }));
      // loupe
      body.appendChild(s("circle", { cx:470, cy:640, r:42, fill:"#cfe8e4", opacity:.55, stroke:"#2a2420", "stroke-width":12 }));
      body.appendChild(s("rect", { x:448, y:672, width:18, height:90, rx:6, fill:"#2a2420", transform:"rotate(-25 457 700)" }));
    } else if (id === "sofia"){
      body.appendChild(s("path", { d:"M190 400 C 180 250, 240 220, 300 220 C 360 220, 420 250, 410 400 C 400 320, 380 300, 300 300 C 220 300, 200 320, 190 400Z", fill:"#5a3825" })); // leather cap
      body.appendChild(s("path", { d:"M200 300 Q300 250 400 300 L404 330 Q300 286 196 330Z", fill:"#3b2418" }));
      body.appendChild(s("rect", { x:206, y:300, width:188, height:46, rx:23, fill:"#2a2420" }));
      body.appendChild(s("circle", { cx:254, cy:323, r:28, fill:"#7FDCEB", opacity:.75, stroke:"#C9A97A", "stroke-width":7 }));
      body.appendChild(s("circle", { cx:346, cy:323, r:28, fill:"#7FDCEB", opacity:.75, stroke:"#C9A97A", "stroke-width":7 }));
      body.appendChild(s("path", { d:"M196 380 q-10 50 10 90 l20 -70z M404 380 q10 50 -10 90 l-20 -70z", fill:"#5a3825" }));
      body.appendChild(s("path", { d:"M160 640 Q300 600 440 640 L452 700 Q300 650 148 700Z", fill:"#B3262E" })); // scarf
      body.appendChild(s("path", { d:"M180 650 L170 780 M420 650 L430 780", stroke:"#3b2418", "stroke-width":10 }));
    } else if (id === "mateo"){
      body.appendChild(s("path", { d:"M198 360 C 190 260, 240 236, 300 236 C 370 236, 410 270, 402 360 C 380 300, 340 286, 300 286 C 250 288, 220 300, 198 360Z", fill:G.hair }));
      for (let i=0;i<7;i++) body.appendChild(s("path", { d:`M${220+i*26} 262 l12 -34 l12 30`, fill:G.hair }));
      // headlamp
      body.appendChild(s("rect", { x:200, y:296, width:200, height:22, rx:10, fill:"#C46A3A" }));
      body.appendChild(s("rect", { x:270, y:280, width:60, height:46, rx:12, fill:"#2a2420" }));
      body.appendChild(s("circle", { cx:300, cy:303, r:16, fill:"#7FF3FF" }));
      body.appendChild(s("circle", { cx:300, cy:303, r:60, fill:"url(#g-spark)", opacity:.8 }));
      // vest with copper trace stitching
      body.appendChild(s("path", { d:"M90 780 C 110 640, 190 584, 250 572 L300 680 L350 572 C 410 584, 490 640, 510 780Z", fill:"#D9A23A" }));
      body.appendChild(s("path", { d:"M140 700 h60 v40 h50 M460 690 h-50 v50 h-40", stroke:"#2a2420", "stroke-width":6, fill:"none" }));
      body.appendChild(s("circle", { cx:250, cy:740, r:8, fill:"#2a2420" })); body.appendChild(s("circle", { cx:370, cy:740, r:8, fill:"#2a2420" }));
    } else if (id === "rosa"){
      body.appendChild(s("path", { d:"M186 380 C 170 240, 240 210, 300 210 C 370 210, 430 240, 414 380 C 400 300, 360 270, 300 270 C 240 270, 200 300, 186 380Z", fill:G.hair }));
      // tocoyal headwrap
      body.appendChild(s("path", { d:"M180 290 Q300 180 420 290 Q300 236 180 290Z", fill:"#B3262E" }));
      body.appendChild(s("path", { d:"M180 290 Q300 180 420 290 Q300 236 180 290Z", fill:"url(#p-weave)" }));
      for (let i=0;i<5;i++) body.appendChild(s("circle", { cx:210+i*45, cy:262-Math.sin(i/4*Math.PI)*36, r:9, fill:"#D9A23A" }));
      // huipil with woven bands
      body.appendChild(s("path", { d:"M40 780 C 60 600, 170 548, 300 548 C 430 548, 540 600, 560 780Z", fill:"#E9DCC0" }));
      const band = s("g");
      for (let r=0;r<3;r++){
        const y = 620 + r*48, col = ["#B3262E","#2E9FB0","#1F7A5A"][r];
        band.appendChild(s("rect", { x:60, y, width:480, height:30, fill:col }));
        for (let i=0;i<12;i++) band.appendChild(s("path", { d:`M${70+i*40} ${y+28} l15 -24 l15 24z`, fill:"#D9A23A", opacity:.9 }));
      }
      body.appendChild(band);
      body.appendChild(s("path", { d:"M250 552 Q300 600 350 552", fill:"none", stroke:"#D9A23A", "stroke-width":10 }));
    } else if (id === "collector"){
      body.appendChild(s("ellipse", { cx:300, cy:380, rx:100, ry:124, fill:"#0b0808" }));
      body.appendChild(s("path", { d:"M140 300 L460 300 L440 320 L160 320Z", fill:"#0b0808" }));
      body.appendChild(s("path", { d:"M200 300 Q210 190 300 186 Q390 190 400 300Z", fill:"#0b0808" }));
      body.appendChild(s("rect", { x:200, y:276, width:200, height:20, fill:"#3a1416" }));
      body.appendChild(s("path", { d:"M40 780 C 60 600, 170 540, 300 540 C 430 540, 540 600, 560 780Z", fill:"#0b0808" }));
      body.appendChild(s("path", { d:"M300 560 L250 780 L350 780Z", fill:"#1c1c1c" }));
      const b = s("g", { transform:"translate(300 650) scale(1.4)" }); b.appendChild(A.beetle("#C0C4C8")); body.appendChild(b);
    }
    v.appendChild(body);
    // foreground leaf corner
    const fl = s("g", { filter:"url(#fx-paper)" });
    fl.appendChild(A.leaf(-40, 820, 330, -55, 70, "rgba(0,0,0,.35)", { rib:false }));
    fl.appendChild(A.leaf(640, 840, 300, -125, 60, "rgba(0,0,0,.3)", { rib:false }));
    v.appendChild(fl);
    return v;
  };

  /* ---------- level badges: seed / maize / eagle ---------- */
  A.levelIcon = function(lvl, size){
    const v = svg(200, 200, { width:size||200, height:size||200 });
    const g = s("g", { filter:"url(#fx-paper)" });
    if (lvl === "d"){ // seed sprouting
      g.appendChild(s("circle", { cx:100, cy:100, r:92, fill:"#C9822F" }));
      g.appendChild(s("path", { d:"M40 150 Q100 132 160 150 L160 170 Q100 190 40 170Z", fill:"#5a3825" }));
      g.appendChild(s("ellipse", { cx:100, cy:146, rx:26, ry:16, fill:"#E9DCC0" }));
      g.appendChild(s("path", { d:"M100 140 C 100 110, 96 92, 100 70", stroke:"#1F7A5A", "stroke-width":9, fill:"none", "stroke-linecap":"round" }));
      g.appendChild(A.leaf(100, 92, 46, -150, 16, "#3FA37C"));
      g.appendChild(A.leaf(100, 80, 50, -30, 17, "#3FA37C"));
    } else if (lvl === "a"){ // maize
      g.appendChild(s("circle", { cx:100, cy:100, r:92, fill:"#1F7A5A" }));
      g.appendChild(A.leaf(100, 176, 120, -118, 26, "#3FA37C", { rib:false }));
      g.appendChild(A.leaf(100, 176, 120, -62, 26, "#3FA37C", { rib:false }));
      g.appendChild(s("ellipse", { cx:100, cy:92, rx:26, ry:60, fill:"#F0C25E" }));
      for (let r=0;r<7;r++) for (let c=0;c<3;c++) g.appendChild(s("circle", { cx:86+c*14, cy:48+r*14, r:5.5, fill:"#D9A23A" }));
      g.appendChild(s("path", { d:"M74 110 Q80 160 100 172 Q120 160 126 110 Q112 140 100 140 Q88 140 74 110Z", fill:"#3FA37C" }));
    } else { // eagle in flight
      g.appendChild(s("circle", { cx:100, cy:100, r:92, fill:"#2E9FB0" }));
      g.appendChild(s("path", { d:"M100 96 C 70 70, 40 62, 14 74 C 40 80, 56 96, 70 112 C 54 108, 40 112, 30 122 C 52 120, 72 124, 92 130Z", fill:"#E9DCC0" }));
      g.appendChild(s("path", { d:"M100 96 C 130 70, 160 62, 186 74 C 160 80, 144 96, 130 112 C 146 108, 160 112, 170 122 C 148 120, 128 124, 108 130Z", fill:"#E9DCC0" }));
      g.appendChild(s("path", { d:"M92 96 Q100 80 108 96 L112 140 L100 156 L88 140Z", fill:"#5a3825" }));
      g.appendChild(s("circle", { cx:100, cy:84, r:11, fill:"#F4EBD8" }));
      g.appendChild(s("path", { d:"M100 80 l12 6 l-10 4z", fill:"#D9A23A" }));
    }
    v.appendChild(g);
    return v;
  };
  A.LEVELS = { d:{ name:"Developing", color:"#B9772D" }, a:{ name:"Achieved", color:"#1F7A5A" }, f:{ name:"Flying", color:"#2A8C9C" } };

  /* ---------- artefacts (stylised "artistic reconstructions") ---------- */
  /* artefact with optional ChatGPT image on top (falls back to the drawn SVG) */
  const ART_IMG = { olmec:"art-olmec-head", stela:"art-stela", sunstone:"art-sun-stone", codexpage:"art-codex-page", cacao:"art-cacao", ball:"art-rubber-ball", mirror:"art-obsidian-mirror", chinampa:"art-chinampa", quipu:"art-quipu", teponaztli:"art-teponaztli", huipil:"art-huipil", papelpicado:"art-papel-picado", axolotl:"art-axolotl", eel:"art-electric-eel", potatoes:"art-andes-potatoes" };
  A.artefactBox = function(kind, style){
    const box = FC.h("div", { class:"artefact-box", style:"position:relative;overflow:hidden;border-radius:10px;" + (style || "") });
    const v = A.artefact(kind); v.setAttribute("style", "position:absolute;inset:0;width:100%;height:100%"); box.appendChild(v);
    if (ART_IMG[kind]){
      const im = FC.imgSlot(ART_IMG[kind], "artefact-img"); im.style.cssText += ";position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:10px";
      im.addEventListener("load", () => { v.style.opacity = "0"; }); box.appendChild(im);
    }
    return box;
  };
  A.artefact = function(kind){
    const v = svg(600, 600);
    const g = s("g", { filter:"url(#fx-paper-rough)" });
    if (kind === "olmec"){
      g.appendChild(s("path", { d:"M140 540 C 110 420, 110 250, 160 170 C 200 110, 400 110, 440 170 C 490 250, 490 420, 460 540Z", fill:"#7a7064" }));
      g.appendChild(s("path", { d:"M150 210 C 170 120, 430 120, 450 210 C 400 176, 200 176, 150 210Z", fill:"#5e554b" })); // helmet
      g.appendChild(s("path", { d:"M150 210 C 200 190, 400 190, 450 210 L452 236 C 400 216, 200 216, 148 236Z", fill:"#8c8276" }));
      for (let i=0;i<7;i++) g.appendChild(s("rect", { x:170+i*38, y:218, width:20, height:20, rx:4, fill:"#5e554b" }));
      g.appendChild(s("path", { d:"M206 300 Q244 276 284 300 Q244 314 206 300Z M316 300 Q356 276 394 300 Q356 314 316 300Z", fill:"#4a433b" }));
      g.appendChild(s("path", { d:"M200 282 Q244 262 288 284 M312 284 Q356 262 400 282", stroke:"#5e554b", "stroke-width":9, fill:"none", "stroke-linecap":"round" }));
      g.appendChild(s("path", { d:"M300 310 C 290 360, 262 386, 268 402 C 290 414, 310 414, 332 402 C 338 386, 310 360, 300 310Z", fill:"#6a6157" }));
      g.appendChild(s("path", { d:"M232 444 Q266 426 300 436 Q334 426 368 444 Q334 462 300 458 Q266 462 232 444Z", fill:"#5e554b" }));
      g.appendChild(s("path", { d:"M234 445 Q300 452 366 445", stroke:"#3e3730", "stroke-width":5, fill:"none" }));
      g.appendChild(s("path", { d:"M238 450 Q300 492 362 450 Q300 478 238 450Z", fill:"#6a6157" }));
      g.appendChild(s("path", { d:"M140 540 C 125 470, 120 420, 128 330 L104 360 C 96 430, 110 490, 140 540Z M460 540 C 475 470, 480 420, 472 330 L496 360 C 504 430, 490 490, 460 540Z", fill:"#5e554b" }));
      g.appendChild(s("rect", { x:80, y:530, width:440, height:30, rx:4, fill:"#4a433b" }));
    } else if (kind === "stela"){
      g.appendChild(s("path", { d:"M150 570 L160 70 Q300 30 440 70 L450 570Z", fill:"#9a8f7f" }));
      g.appendChild(s("rect", { x:120, y:560, width:360, height:26, fill:"#6e655a" }));
      // carved standing ruler figure in profile (simplified)
      const f = s("g", { fill:"#6e655a" });
      f.appendChild(s("path", { d:"M270 150 q40 -40 80 0 q10 30 -10 60 l-20 0 q-30 -20 -50 -60z" }));
      f.appendChild(s("path", { d:"M240 130 q60 -80 140 -30 q-20 20 -60 10 q-40 -10 -80 20z" }));
      for (let i=0;i<5;i++) f.appendChild(s("path", { d:`M${300+i*16} 104 q${-10+i*8} -50 ${20+i*6} -70`, stroke:"#6e655a", "stroke-width":7, fill:"none" }));
      f.appendChild(s("rect", { x:268, y:210, width:96, height:160, rx:10 }));
      f.appendChild(s("rect", { x:230, y:230, width:30, height:120, rx:12, transform:"rotate(-15 245 290)" }));
      f.appendChild(s("rect", { x:270, y:370, width:36, height:150, rx:8 }));
      f.appendChild(s("rect", { x:326, y:370, width:36, height:150, rx:8 }));
      f.appendChild(s("path", { d:"M250 520 h70 v20 h-80z M316 520 h70 v20 h-80z" }));
      g.appendChild(f);
      // glyph column
      for (let i=0;i<6;i++){ g.appendChild(s("rect", { x:178, y:120+i*70, width:52, height:56, rx:12, fill:"none", stroke:"#6e655a", "stroke-width":6 })); g.appendChild(s("circle", { cx:204, cy:148+i*70, r:10, fill:"#6e655a" })); }
      for (let i=0;i<6;i++){ g.appendChild(s("rect", { x:384, y:120+i*70, width:44, height:56, rx:12, fill:"none", stroke:"#6e655a", "stroke-width":6 })); g.appendChild(s("path", { d:`M392 ${140+i*70} h28 M392 ${156+i*70} h20`, stroke:"#6e655a", "stroke-width":5 })); }
    } else if (kind === "sunstone"){
      g.appendChild(s("circle", { cx:300, cy:300, r:270, fill:"#8f8577" }));
      g.appendChild(s("circle", { cx:300, cy:300, r:250, fill:"none", stroke:"#6b6256", "stroke-width":10 }));
      for (let i=0;i<20;i++) g.appendChild(s("rect", { x:290, y:58, width:20, height:24, rx:4, fill:"#6b6256", transform:`rotate(${i*18} 300 300)` }));
      g.appendChild(s("circle", { cx:300, cy:300, r:190, fill:"none", stroke:"#6b6256", "stroke-width":8 }));
      for (let i=0;i<8;i++) g.appendChild(s("path", { d:"M300 110 L320 160 L280 160Z", fill:"#6b6256", transform:`rotate(${i*45} 300 300)` }));
      for (let i=0;i<20;i++) g.appendChild(s("rect", { x:292, y:168, width:16, height:16, rx:3, fill:"none", stroke:"#6b6256", "stroke-width":4, transform:`rotate(${i*18+9} 300 300)` }));
      g.appendChild(s("circle", { cx:300, cy:300, r:110, fill:"#a0968a" }));
      // four squares of the Nahui Ollin (movement) sign — abstracted
      [[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([a,b]) => g.appendChild(s("rect", { x:300+a*58-28, y:300+b*58-28, width:56, height:56, rx:8, fill:"#7a7064" })));
      g.appendChild(s("circle", { cx:300, cy:300, r:46, fill:"#8f8577", stroke:"#6b6256", "stroke-width":6 }));
      g.appendChild(s("circle", { cx:300, cy:300, r:14, fill:"#6b6256" }));
    } else if (kind === "codexpage"){
      g.appendChild(s("rect", { x:120, y:60, width:360, height:480, rx:6, fill:"#efe3c6" }));
      g.appendChild(s("rect", { x:140, y:80, width:320, height:8, fill:"#B3262E" }));
      g.appendChild(s("rect", { x:140, y:512, width:320, height:8, fill:"#B3262E" }));
      for (let r=0;r<2;r++) for (let c=0;c<3;c++){
        const x = 160 + c*100, y = 120 + r*90;
        g.appendChild(s("rect", { x, y, width:80, height:70, rx:16, fill:"none", stroke:"#3b2418", "stroke-width":5 }));
        g.appendChild(s("circle", { cx:x+28, cy:y+30, r:9, fill:"#3b2418" })); g.appendChild(s("circle", { cx:x+54, cy:y+38, r:7, fill:"#2E9FB0" }));
      }
      // figure
      g.appendChild(s("path", { d:"M210 470 l20 -110 q30 -40 70 0 l20 110z", fill:"#2E9FB0" }));
      g.appendChild(s("circle", { cx:265, cy:330, r:30, fill:"#B3262E" }));
      g.appendChild(s("path", { d:"M330 360 q60 -20 90 30 q-40 0 -60 30z", fill:"#D9A23A" }));
      // dots & bars
      for (let i=0;i<3;i++) g.appendChild(s("circle", { cx:380+i*22, cy:460, r:8, fill:"#B3262E" }));
      g.appendChild(s("rect", { x:372, y:478, width:66, height:12, rx:6, fill:"#B3262E" }));
    } else if (kind === "letter"){
      g.appendChild(s("path", { d:"M130 70 H460 V520 Q300 560 140 520Z", fill:"#efe6d3" }));
      for (let i=0;i<14;i++) g.appendChild(s("path", { d:`M170 ${120+i*27} q${60+Math.random()*40} -6 ${120+Math.random()*120} 0`, stroke:"#3b2418", "stroke-width":3, fill:"none", opacity:.75 }));
      g.appendChild(s("circle", { cx:390, cy:470, r:34, fill:"#B3262E" }));
      g.appendChild(s("path", { d:"M376 470 l14 -14 l14 14 l-14 14z", fill:"#7a1418" }));
    } else if (kind === "textbook"){
      g.appendChild(s("rect", { x:150, y:80, width:300, height:420, rx:10, fill:"#1F7A5A" }));
      g.appendChild(s("rect", { x:150, y:80, width:40, height:420, fill:"#155c43" }));
      g.appendChild(s("rect", { x:220, y:140, width:200, height:130, rx:8, fill:"#E9DCC0" }));
      g.appendChild(A.pyramid(320, 260, 150, 110, 5, "#5a3825", "#3b2418"));
      g.appendChild(s("rect", { x:220, y:300, width:200, height:16, rx:4, fill:"#D9A23A" }));
      g.appendChild(s("rect", { x:220, y:330, width:150, height:12, rx:4, fill:"#E9DCC0", opacity:.6 }));
      g.appendChild(s("rect", { x:150, y:490, width:300, height:20, fill:"#efe6d3" }));
    } else if (kind === "web"){
      g.appendChild(s("rect", { x:90, y:110, width:420, height:330, rx:20, fill:"#2A2420" }));
      g.appendChild(s("rect", { x:110, y:130, width:380, height:270, rx:6, fill:"#E9DCC0" }));
      g.appendChild(s("rect", { x:110, y:130, width:380, height:30, fill:"#2E9FB0" }));
      [0,1,2].forEach(i => g.appendChild(s("circle", { cx:128+i*18, cy:145, r:5, fill:"#E9DCC0" })));
      g.appendChild(s("rect", { x:130, y:180, width:150, height:110, rx:4, fill:"#C9A97A" }));
      for (let i=0;i<5;i++) g.appendChild(s("rect", { x:300, y:184+i*22, width:170 - (i%2)*40, height:10, rx:4, fill:"#5a3825", opacity:.6 }));
      g.appendChild(s("path", { d:"M250 440 l-40 70 h180 l-40 -70z", fill:"#2A2420" }));
    } else if (kind === "dig"){
      g.appendChild(s("rect", { x:110, y:90, width:380, height:420, rx:6, fill:"#efe6d3" }));
      g.appendChild(s("rect", { x:135, y:115, width:330, height:300, fill:"#8a6a52" }));
      for (let x=135;x<=465;x+=55) g.appendChild(s("line", { x1:x, x2:x, y1:115, y2:415, stroke:"#E9DCC0", "stroke-width":2, opacity:.6 }));
      for (let y=115;y<=415;y+=50) g.appendChild(s("line", { x1:135, x2:465, y1:y, y2:y, stroke:"#E9DCC0", "stroke-width":2, opacity:.6 }));
      g.appendChild(s("path", { d:"M200 300 q40 -50 90 -20 q30 30 0 60 q-60 20 -90 -40z", fill:"#c9b48f" }));
      g.appendChild(s("rect", { x:330, y:200, width:80, height:40, rx:8, fill:"#b6a37f", transform:"rotate(20 370 220)" }));
      g.appendChild(s("rect", { x:150, y:440, width:200, height:14, rx:4, fill:"#3b2418", opacity:.7 }));
    } else if (kind === "pot"){
      g.appendChild(s("path", { d:"M200 120 h200 l-10 40 q90 90 60 230 q-30 120 -150 130 q-120 -10 -150 -130 q-30 -140 60 -230z", fill:"#b86a3e" }));
      g.appendChild(s("path", { d:"M160 300 h280", stroke:"#3b2418", "stroke-width":24 }));
      for (let i=0;i<7;i++) g.appendChild(s("path", { d:`M${175+i*38} 300 l18 -18 l18 18`, stroke:"#E9DCC0", "stroke-width":5, fill:"none" }));
      g.appendChild(s("path", { d:"M175 380 q125 40 250 0", stroke:"#3b2418", "stroke-width":8, fill:"none" }));
    }
    v.appendChild(g);
    return v;
  };

  /* ---------- Maya day-sign glyphs (simplified teaching drawings) ----------
     Each glyph: list of stroke steps (SVG path d, in a 400×400 box).
     Step order teaches: big outline → main inner shape → details.     */
  A.GLYPHS = {
    kin:{ name:"K'in", meaning:"sun · day", say:"KEEN",
      steps:[
        { t:"Draw the cartouche — a big rounded square frame.", d:"M70 90 Q70 60 100 60 H300 Q330 60 330 90 V300 Q330 330 300 330 H100 Q70 330 70 300Z" },
        { t:"Add the base — the cartouche sits on a small stand.", d:"M120 330 V360 H280 V330 M150 345 H250" },
        { t:"Draw the four petals of the sun flower, top and bottom first.", d:"M200 195 Q170 140 200 105 Q230 140 200 195 M200 195 Q170 250 200 285 Q230 250 200 195" },
        { t:"Now the left and right petals.", d:"M200 195 Q145 165 110 195 Q145 225 200 195 M200 195 Q255 165 290 195 Q255 225 200 195" },
        { t:"A small circle in the very centre.", d:"M200 180 A15 15 0 1 1 199.9 180Z" },
        { t:"Detail: little dots between the petals.", d:"M145 140 A6 6 0 1 1 144.9 140Z M255 140 A6 6 0 1 1 254.9 140Z M145 250 A6 6 0 1 1 144.9 250Z M255 250 A6 6 0 1 1 254.9 250Z" }
      ]},
    ik:{ name:"Ik'", meaning:"wind · breath", say:"EEK",
      steps:[
        { t:"Draw the cartouche frame.", d:"M70 90 Q70 60 100 60 H300 Q330 60 330 90 V300 Q330 330 300 330 H100 Q70 330 70 300Z" },
        { t:"Add the base stand.", d:"M120 330 V360 H280 V330 M150 345 H250" },
        { t:"Draw the top bar of the T shape — thick and bold.", d:"M130 120 H270 V160 H130Z" },
        { t:"Now the stem of the T, down the middle.", d:"M180 160 H220 V275 H180Z" },
        { t:"Detail: two small curls at the bottom corners.", d:"M110 290 Q110 250 145 260 M290 290 Q290 250 255 260" }
      ]},
    ajaw:{ name:"Ajaw", meaning:"lord · ruler", say:"ah-HOW",
      steps:[
        { t:"Draw the cartouche frame.", d:"M70 90 Q70 60 100 60 H300 Q330 60 330 90 V300 Q330 330 300 330 H100 Q70 330 70 300Z" },
        { t:"Add the base stand.", d:"M120 330 V360 H280 V330 M150 345 H250" },
        { t:"Draw the face shape — a tall rounded oval.", d:"M200 95 C 265 95, 280 160, 280 205 C 280 265, 245 300, 200 300 C 155 300, 120 265, 120 205 C 120 160, 135 95, 200 95Z" },
        { t:"Two eyes — circles side by side.", d:"M165 180 A20 20 0 1 1 164.9 180Z M235 180 A20 20 0 1 1 234.9 180Z" },
        { t:"The mouth — a round circle below.", d:"M200 240 A22 22 0 1 1 199.9 240Z" },
        { t:"Detail: small dots on the forehead.", d:"M180 125 A5 5 0 1 1 179.9 125Z M200 120 A5 5 0 1 1 199.9 120Z M220 125 A5 5 0 1 1 219.9 125Z" }
      ]},
    bahlam:{ name:"B'ahlam", meaning:"jaguar", say:"BAH-lahm",
      steps:[
        { t:"Draw the head outline in profile, facing left.", d:"M95 220 C 95 140, 160 90, 240 90 C 310 90, 340 150, 330 220 C 322 280, 280 320, 210 320 C 160 320, 120 300, 105 270 C 96 255, 95 240, 95 220Z" },
        { t:"Add the rounded ear on top.", d:"M250 95 C 255 50, 310 50, 312 105" },
        { t:"Draw the eye and the brow above it.", d:"M190 165 A24 18 0 1 1 189.9 165Z M160 140 Q200 118 240 140" },
        { t:"The snout and nose at the front.", d:"M95 220 Q70 222 72 245 Q76 262 100 262 M85 232 A6 6 0 1 1 84.9 232Z" },
        { t:"The mouth with a fang.", d:"M100 268 Q150 284 200 270 M140 278 L148 302 L156 280" },
        { t:"Detail: jaguar spots — little rings.", d:"M260 180 A12 12 0 1 1 259.9 180Z M290 240 A12 12 0 1 1 289.9 240Z M230 260 A10 10 0 1 1 229.9 260Z M280 135 A9 9 0 1 1 279.9 135Z" }
      ]}
  };

  /* ---------- ceiba folio painting (Folio I reveal) ---------- */
  A.ceibaFolio = function(){
    const v = svg(800, 1000);
    v.appendChild(s("rect", { width:800, height:1000, fill:"#efe3c6" }));
    v.appendChild(s("rect", { width:800, height:1000, filter:"url(#fx-grain)", fill:"#fff" }));
    v.appendChild(s("rect", { x:30, y:30, width:740, height:940, fill:"none", stroke:"#B3262E", "stroke-width":10 }));
    v.appendChild(s("rect", { x:50, y:50, width:700, height:900, fill:"none", stroke:"#B3262E", "stroke-width":3 }));
    const g = s("g", { filter:"url(#fx-rough)" });
    // underworld roots / water band
    g.appendChild(s("path", { d:"M60 800 Q400 760 740 800 V930 H60Z", fill:"#2E9FB0", opacity:.85 }));
    for (let i=0;i<9;i++) g.appendChild(s("path", { d:`M${90+i*75} 870 q18 -18 36 0 q18 18 36 0`, stroke:"#efe3c6", "stroke-width":5, fill:"none" }));
    // trunk with spines (ceiba)
    g.appendChild(s("path", { d:"M360 800 C 350 650, 370 480, 380 330 L420 330 C 430 480, 450 650, 440 800Z", fill:"#1F7A5A" }));
    for (let i=0;i<10;i++) g.appendChild(s("path", { d:`M${372+(i%2)*40} ${360+i*42} l${i%2?14:-14} -8 l0 16z`, fill:"#0F5E47" }));
    // roots
    g.appendChild(s("path", { d:"M360 790 C 300 820, 220 820, 160 860 M440 790 C 500 820, 580 820, 640 860 M380 800 C 360 840, 340 870, 320 900 M420 800 C 440 840, 460 870, 480 900", stroke:"#1F7A5A", "stroke-width":18, fill:"none", "stroke-linecap":"round" }));
    // branches
    g.appendChild(s("path", { d:"M390 340 C 330 260, 230 250, 150 200 M410 340 C 470 260, 570 250, 650 200 M400 330 V150", stroke:"#1F7A5A", "stroke-width":22, fill:"none", "stroke-linecap":"round" }));
    // canopy blossoms
    [[150,200],[650,200],[400,150],[260,240],[540,240]].forEach(([x,y],i) => {
      g.appendChild(s("circle", { cx:x, cy:y, r:58, fill: i%2 ? "#D9A23A" : "#B3262E" }));
      for (let k=0;k<6;k++) g.appendChild(s("path", { d:"M0 0 Q-14 -36 0 -56 Q14 -36 0 0", fill:"#efe3c6", opacity:.75, transform:`translate(${x} ${y}) rotate(${k*60})` }));
    });
    // bird on top (quetzal-like, generic)
    g.appendChild(s("path", { d:"M400 70 q30 -10 40 20 q-10 20 -40 10 q-10 50 -50 80 q20 -50 10 -80z", fill:"#0F5E47" }));
    g.appendChild(s("circle", { cx:420, cy:80, r:6, fill:"#efe3c6" }));
    // glyph strip left
    for (let i=0;i<4;i++){ g.appendChild(s("rect", { x:80, y:380+i*90, width:70, height:70, rx:16, fill:"none", stroke:"#3b2418", "stroke-width":5 })); }
    // maize glyph hint (next week) bottom-right
    g.appendChild(s("ellipse", { cx:680, cy:690, rx:20, ry:44, fill:"#D9A23A" }));
    g.appendChild(A.leaf(680, 740, 60, -120, 14, "#1F7A5A", { rib:false })); g.appendChild(A.leaf(680, 740, 60, -60, 14, "#1F7A5A", { rib:false }));
    v.appendChild(g);
    return v;
  };

  /* ---------- small subject icons for protocol & bands ---------- */
  A.protoIcon = function(k){
    const v = svg(200,200); const g = s("g", { filter:"url(#fx-paper)" });
    if (k === "respect"){ g.appendChild(s("path", { d:"M100 170 C 40 130, 20 90, 40 60 C 60 30, 95 40, 100 70 C 105 40, 140 30, 160 60 C 180 90, 160 130, 100 170Z", fill:"#B3262E" })); }
    else if (k === "evidence"){ g.appendChild(s("circle", { cx:86, cy:86, r:52, fill:"#E9DCC0", stroke:"#2A2420", "stroke-width":14 })); g.appendChild(s("rect", { x:120, y:120, width:24, height:64, rx:8, fill:"#2A2420", transform:"rotate(-45 132 152)" })); g.appendChild(s("path", { d:"M60 92 l18 18 l30 -40", stroke:"#1F7A5A", "stroke-width":12, fill:"none", "stroke-linecap":"round" })); }
    else if (k === "voice"){ g.appendChild(s("path", { d:"M30 50 h110 a20 20 0 0 1 20 20 v50 a20 20 0 0 1 -20 20 h-60 l-30 26 v-26 h-20 a20 20 0 0 1 -20 -20 v-50 a20 20 0 0 1 20 -20z", fill:"#2E9FB0" })); [0,1,2].forEach(i => g.appendChild(s("circle", { cx:62+i*28, cy:95, r:9, fill:"#E9DCC0" }))); }
    else if (k === "better"){ g.appendChild(s("path", { d:"M100 180 V80", stroke:"#5a3825", "stroke-width":12 })); g.appendChild(A.leaf(100, 110, 70, -150, 24, "#1F7A5A")); g.appendChild(A.leaf(100, 90, 74, -30, 25, "#3FA37C")); g.appendChild(s("path", { d:"M40 180 h120", stroke:"#5a3825", "stroke-width":14, "stroke-linecap":"round" })); }
    v.appendChild(g); return v;
  };

  /* band art for day cards / lesson hero */
  A.band = function(subject, seed){
    const v = svg(600, 300, { preserveAspectRatio:"xMidYMid slice" });
    const bd = { history:"#1F7A5A", geography:"#2E9FB0", science:"#14191b", technology:"#3a2a20", art:"#E9DCC0" }[subject];
    v.appendChild(s("rect", { width:600, height:300, fill:bd }));
    if (subject === "history"){ v.appendChild(s("circle", { cx:440, cy:90, r:60, fill:"#D9A23A", opacity:.4 })); const g = s("g", { filter:"url(#fx-paper)" }); g.appendChild(A.pyramid(420, 300, 300, 240, 6, "#155c43", "#0b2a20")); g.appendChild(A.jungle(600, 300, seed||3, ["#0f3b2c","#0c3024"], { count:10, size:.5 })); v.appendChild(g); }
    else if (subject === "geography"){ v.appendChild(A.contours(600, 300, seed||5, "rgba(233,220,192,.3)", 3)); }
    else if (subject === "science"){ v.appendChild(A.traces(600, 300, seed||4, { color:"#5a3a22", glow:"#7FF3FF", count:10, width:4, bg:"#14191b", step:40, pulse:.7 })); v.appendChild(s("path", { d:"M330 20 L290 140 L330 140 L280 280 L380 120 L340 120 L380 20Z", fill:"#7FF3FF", filter:"url(#fx-glow)" })); }
    else if (subject === "technology"){ v.appendChild(A.traces(600, 300, seed||8, { color:"#C46A3A", glow:"#F0C25E", count:12, width:5, bg:"#3a2a20", step:40, pulse:.6 })); }
    else if (subject === "art"){ v.appendChild(s("path", { d:"M-20 220 C 150 160, 300 260, 620 180", stroke:"#B3262E", "stroke-width":50, fill:"none", opacity:.6 })); v.appendChild(s("path", { d:"M-20 90 C 200 140, 380 40, 620 100", stroke:"#2FB3A6", "stroke-width":30, fill:"none", opacity:.5 })); v.appendChild(s("rect", { y:276, width:600, height:24, fill:"url(#p-fret)" })); }
    return v;
  };

  /* globe with latitude / longitude lines */
  A.globe = function(){
    const v = svg(620, 620, { style:"width:620px;height:620px" });
    const g = s("g", { filter:"url(#fx-paper)" });
    g.appendChild(s("circle", { cx:310, cy:310, r:270, fill:"#17505a" }));
    g.appendChild(s("path", { d:"M200 120 q60 -30 110 10 q30 40 -10 80 q-40 30 -20 80 q30 50 -10 90 q-50 20 -80 -30 q-30 -60 -60 -90 q-20 -60 70 -140z", fill:"#E9DCC0" }));
    g.appendChild(s("path", { d:"M360 330 q50 -10 70 30 q20 50 -10 100 q-30 50 -60 40 q-20 -60 -10 -100z", fill:"#E9DCC0" }));
    v.appendChild(g);
    const lat = s("g", { fill:"none", stroke:"#F0C25E", "stroke-width":3 });
    [-60,-30,30,60].forEach(a => { const y = 310 - Math.sin(a*Math.PI/180)*270, rx = Math.cos(a*Math.PI/180)*270; lat.appendChild(s("ellipse", { cx:310, cy:y, rx, ry:rx*.18, opacity:.8 })); });
    lat.appendChild(s("ellipse", { cx:310, cy:310, rx:270, ry:48, stroke:"#F0C25E", "stroke-width":6 }));
    v.appendChild(lat);
    const lon = s("g", { fill:"none", stroke:"#7FF3FF", "stroke-width":3, opacity:.85 });
    [40,110,170,230].forEach(rx => lon.appendChild(s("ellipse", { cx:310, cy:310, rx:Math.abs(270 - rx*1.1)+10, ry:270 })));
    lon.appendChild(s("line", { x1:310, x2:310, y1:40, y2:580 }));
    v.appendChild(lon);
    const lab = (x, y, t, c) => v.appendChild(s("text", { x, y, "font-family":"Big Shoulders Display", "font-weight":900, "font-size":30, fill:c, stroke:"#14110F", "stroke-width":6, "paint-order":"stroke" }, t));
    lab(470, 302, "EQUATOR 0°", "#F0C25E"); lab(470, 180, "LATITUDE ↕", "#F0C25E"); lab(330, 34, "LONGITUDE ↔", "#7FF3FF");
    return v;
  };
  /* comb + bending water demo */
  A.waterDemo = function(){
    const v = svg(620, 620, { style:"width:620px;height:620px" });
    const g = s("g", { filter:"url(#fx-paper)" });
    g.appendChild(s("rect", { x:200, y:40, width:200, height:60, rx:10, fill:"#8f8577" }));
    g.appendChild(s("rect", { x:270, y:96, width:60, height:40, fill:"#6b6256" }));
    g.appendChild(s("path", { d:"M300 136 C 300 260, 320 340, 380 460 C 400 500, 410 540, 412 600", stroke:"#5CC3D2", "stroke-width":18, fill:"none", "stroke-linecap":"round", opacity:.9 }));
    g.appendChild(s("path", { d:"M300 136 V600", stroke:"#5CC3D2", "stroke-width":6, fill:"none", "stroke-dasharray":"8 12", opacity:.4 }));
    g.appendChild(s("rect", { x:420, y:300, width:180, height:44, rx:8, fill:"#B3262E", transform:"rotate(-12 510 322)" }));
    for (let i=0;i<14;i++) g.appendChild(s("rect", { x:426 + i*12, y:338, width:6, height:36, fill:"#B3262E", transform:"rotate(-12 510 322)" }));
    v.appendChild(g);
    ["−","−","−"].forEach((t, i) => v.appendChild(s("text", { x:448 + i*46, y:290 - i*10, "font-size":40, "font-weight":900, fill:"#7FF3FF" }, t)));
    v.appendChild(s("text", { x:40, y:580, "font-family":"Big Shoulders Display", "font-weight":900, "font-size":30, fill:"#F0C25E" }, "PREDICT FIRST!"));
    return v;
  };
  /* finished glyph drawing */
  A.glyphSVG = function(key, color){
    const G = A.GLYPHS[key];
    const v = svg(400, 400, { style:"width:560px;height:560px;background:#efe3c6;border-radius:12px;box-shadow:var(--sh-3)" });
    G.steps.forEach(st => v.appendChild(s("path", { d:st.d, fill:"none", stroke:color || "#3b2418", "stroke-width":12, "stroke-linecap":"round", "stroke-linejoin":"round" })));
    return v;
  };

  A.brandMark = function(){
    const v = svg(64,64);
    v.innerHTML = `<rect width="64" height="64" rx="14" fill="#2A2420"/><path d="M10 50h44v-6h-6v-6h-6v-6h-4v-6h-12v6h-4v6h-6v6h-6z" fill="#D9A23A"/><circle cx="32" cy="14" r="5" fill="#7FF3FF"/><path d="M32 19v7" stroke="#7FF3FF" stroke-width="2"/>`;
    return v;
  };
})(window.FC);
