/* ==========================================================
   INTERACTIVES — teacher-run animations (Week 1 set)
   Each: FC.IX[name](host, cfg, api) → { step?, steps?, destroy? }
   host = absolutely positioned div inside the 1920×1080 stage.
   ========================================================== */
(function(FC){
  "use strict";
  const h = FC.h, s = FC.s, svg = FC.svg, A = FC.art, M = FC.map;
  const IX = FC.IX = {};

  /* ---------- helpers ---------- */
  const btn = (label, onclick, cls) => h("button", { class:"ixbtn " + (cls||""), onclick:(e) => { e.stopPropagation(); FC.sfx("tok"); onclick(e); } }, label);
  const toLocal = (el, e) => { const r = el.getBoundingClientRect(); const vb = el.viewBox && el.viewBox.baseVal; const base = el.offsetWidth || (vb && vb.width) || el.clientWidth || r.width; const k = r.width / base || 1; return [(e.clientX - r.left)/k, (e.clientY - r.top)/k]; };
  FC.toLocal = toLocal;
  const infoPanel = (cls) => h("div", { class:"pcard " + (cls||""), style:{ position:"absolute" } });
  function typeInto(el, text, speed){
    el.textContent = "";
    if (!FC.motionOK()){ el.textContent = text; return; }
    let i = 0; const t = setInterval(() => { el.textContent = text.slice(0, ++i); if (i >= text.length) clearInterval(t); }, speed || 22);
    return () => clearInterval(t);
  }

  /* =======================================================
     CODEX 3D — screenfold book, nested hinged panels
     ======================================================= */
  FC.codex3d = function(opt){
    opt = Object.assign({ n:10, pw:150, ph:250, cover:true }, opt);
    const root = h("div", { class:"codex3d", style:{ position:"relative", width:opt.pw+"px", height:opt.ph+"px", transformStyle:"preserve-3d", transition:"transform 1.8s cubic-bezier(.2,.8,.2,1)" } });
    let parent = root; const panels = [];
    for (let i=0;i<opt.n;i++){
      const p = h("div", { class:"cx-panel", style:{
        position:"absolute", left: i === 0 ? "0" : "100%", top:"0", width:opt.pw+"px", height:opt.ph+"px",
        transformOrigin:"left center", transformStyle:"preserve-3d",
        transition:`transform 1.4s cubic-bezier(.3,.7,.2,1) ${i*0.11}s`
      }});
      const front = h("div", { style:{ position:"absolute", inset:"0", backfaceVisibility:"hidden", borderRadius:"2px", overflow:"hidden", boxShadow:"inset 0 0 0 1px rgba(90,56,37,.25), inset -14px 0 20px -12px rgba(0,0,0,.25)" } });
      front.appendChild(panelArt(i, opt));
      const back = h("div", { style:{ position:"absolute", inset:"0", backfaceVisibility:"hidden", transform:"rotateY(180deg)", background:"#d9c7a2", borderRadius:"2px", boxShadow:"inset 0 0 0 1px rgba(90,56,37,.3)" } });
      back.appendChild(panelArt(-1, opt));
      p.appendChild(front); p.appendChild(back);
      parent.appendChild(p); panels.push(p); parent = p;
    }
    function set(open){
      panels.forEach((p, i) => {
        if (i === 0){ p.style.transform = "none"; return; }
        p.style.transform = open ? `rotateY(${i%2 ? -10 : 10}deg)` : `rotateY(${i%2 ? -179.4 : 179.4}deg)`;
      });
      root.style.transform = open ? `translateX(${-(opt.n-1)*opt.pw/2}px) rotateX(16deg)` : "translateX(0) rotateX(16deg) rotateY(-14deg)";
      root.classList.toggle("open", open);
    }
    set(false);
    root.unfold = () => { set(true); FC.sfx("paper"); };
    root.fold = () => { set(false); FC.sfx("paper"); };
    return root;
  };
  function panelArt(i, opt){
    const v = svg(150, 250, { width:"100%", height:"100%", preserveAspectRatio:"none" });
    v.appendChild(s("rect", { width:150, height:250, fill: i < 0 ? "#d9c7a2" : "#efe3c6" }));
    v.appendChild(s("rect", { width:150, height:250, filter:"url(#fx-grain)", fill:"#fff" }));
    if (i < 0) return v;
    if (i === 0 && opt.cover){
      v.appendChild(s("rect", { x:10, y:10, width:130, height:230, fill:"none", stroke:"#B3262E", "stroke-width":4 }));
      v.appendChild(s("rect", { x:28, y:60, width:94, height:94, rx:22, fill:"none", stroke:"#3b2418", "stroke-width":5 }));
      const k = A.GLYPHS.kin; k.steps.slice(2).forEach(st => v.appendChild(s("path", { d:st.d, fill:"none", stroke:"#3b2418", "stroke-width":14, transform:"translate(25 57) scale(.25)" })));
      // jade seal
      v.appendChild(s("circle", { class:"cx-seal", cx:75, cy:200, r:20, fill:"#1F7A5A", stroke:"#0F5E47", "stroke-width":4 }));
      v.appendChild(s("path", { class:"cx-seal", d:"M65 200 h20 M75 190 v20", stroke:"#3FA37C", "stroke-width":4 }));
      return v;
    }
    const rnd = FC.rng(i*97+13);
    v.appendChild(s("rect", { x:6, y:8, width:138, height:4, fill:"#B3262E" }));
    v.appendChild(s("rect", { x:6, y:238, width:138, height:4, fill:"#B3262E" }));
    // glyph blocks
    const rows = 2 + Math.floor(rnd()*2);
    for (let r=0;r<rows;r++) for (let c=0;c<2;c++){
      const x = 16 + c*62, y = 22 + r*44;
      v.appendChild(s("rect", { x, y, width:52, height:36, rx:10, fill:"none", stroke:"#3b2418", "stroke-width":3 }));
      v.appendChild(s("circle", { cx:x+18, cy:y+18, r:6, fill: rnd() < .5 ? "#3b2418" : "#2E9FB0" }));
      v.appendChild(s("rect", { x:x+28, y:y+12, width:14, height:12, rx:3, fill: rnd() < .5 ? "#B3262E" : "#3b2418" }));
    }
    // figure or numbers
    const y0 = 30 + rows*44;
    if (rnd() < .55){
      v.appendChild(s("path", { d:`M50 ${y0+120} l12 -66 q14 -18 30 0 l12 66z`, fill: ["#2E9FB0","#B3262E","#1F7A5A","#D9A23A"][i%4] }));
      v.appendChild(s("circle", { cx:76, cy:y0+40, r:16, fill:"#C46A3A" }));
      v.appendChild(s("path", { d:`M60 ${y0+28} q16 -30 40 -6`, stroke:"#1F7A5A", "stroke-width":6, fill:"none" }));
    } else {
      const n = 1 + Math.floor(rnd()*19), g = FC.maya(n, { color:"#B3262E" });
      g.setAttribute("x", 35); g.setAttribute("y", y0 + 6); g.setAttribute("width", 80); g.setAttribute("height", 80);
      v.appendChild(g);
      v.appendChild(s("path", { d:`M20 ${y0+110} q55 -30 110 0`, stroke:"#2E9FB0", "stroke-width":8, fill:"none" }));
    }
    return v;
  }

  /* =======================================================
     1. OPENING CINEMATIC (Mon W1)
     ======================================================= */
  IX.opening = function(host, cfg, api){
    host.style.cssText += ";position:absolute;inset:0;overflow:hidden;background:#0a1012;";
    const W = 1920, H = 1080;
    const scene = svg(W, H, { style:"position:absolute;inset:0;width:100%;height:100%" });
    const gsky = s("g"); gsky.innerHTML = `<defs><linearGradient id="op-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0d1a1d"/><stop offset=".6" stop-color="#17302b"/><stop offset="1" stop-color="#0b1412"/></linearGradient></defs><rect width="${W}" height="${H}" fill="url(#op-sky)"/>`;
    scene.appendChild(gsky);
    const far = s("g", { filter:"url(#fx-paper)", class:"op-far" });
    far.appendChild(A.pyramid(1500, 820, 420, 380, 7, "#1c3a31", "#0d1d18"));
    far.appendChild(A.jungle(W, H, 21, ["#122a23","#163129"], { count:16, size:1 }));
    scene.appendChild(far);
    // ground
    scene.appendChild(s("path", { d:`M0 820 Q480 780 960 810 T1920 800 V1080 H0Z`, fill:"#0e1d18", filter:"url(#fx-paper)" }));
    // chamber hole (revealed when tree falls)
    const hole = s("g", { opacity:0, class:"op-hole" });
    hole.appendChild(s("path", { d:"M820 840 Q960 790 1100 840 Q1080 900 960 910 Q840 900 820 840Z", fill:"#030303" }));
    hole.appendChild(s("ellipse", { cx:960, cy:860, rx:140, ry:40, fill:"url(#g-lamp)", opacity:.4 }));
    scene.appendChild(hole);
    // ceiba tree
    const tree = s("g", { class:"op-tree", filter:"url(#fx-paper)", style:"transform-origin:960px 840px; transform-box:view-box; transition:transform 2.2s cubic-bezier(.55,0,.75,.3)" });
    tree.appendChild(s("path", { d:"M920 840 C 900 650, 930 420, 940 230 L 980 230 C 990 420, 1020 650, 1000 840Z", fill:"#24453a" }));
    tree.appendChild(s("path", { d:"M920 840 C 860 830, 800 850, 760 880 L 940 860Z M1000 840 C 1060 830, 1120 850, 1160 880 L 980 860Z", fill:"#24453a" }));
    tree.appendChild(s("path", { d:"M950 260 C 860 170, 700 170, 600 120 M970 260 C 1060 170, 1220 170, 1320 120 M960 240 V 80", stroke:"#24453a", "stroke-width":26, fill:"none", "stroke-linecap":"round" }));
    [[600,120,170],[1320,120,170],[960,70,190],[760,180,150],[1160,180,150]].forEach(([x,y,r]) => tree.appendChild(s("ellipse", { cx:x, cy:y, rx:r, ry:r*.6, fill:"#1d3a30" })));
    scene.appendChild(tree);
    const near = s("g", { filter:"url(#fx-paper)" }); near.appendChild(A.jungle(W, H, 33, ["#08130f","#0b1814"], { count:12, size:1.6 }));
    scene.appendChild(near);
    host.appendChild(scene);
    // chamber interior (step 2)
    const chamber = h("div", { style:{ position:"absolute", inset:"0", opacity:"0", transition:"opacity 1.4s", background:"radial-gradient(60% 55% at 50% 55%, #3a2a1c 0%, #1b130d 55%, #070504 100%)" } });
    const cs = svg(W, H, { style:"position:absolute;inset:0;width:100%;height:100%" });
    const wall = s("g", { opacity:.55 });
    for (let r=0;r<7;r++) for (let c=0;c<12;c++){ const x = c*170 + (r%2)*85 - 40, y = r*160 - 30; wall.appendChild(s("rect", { x, y, width:160, height:150, rx:8, fill:"#2a1f16", stroke:"#120c08", "stroke-width":6 })); if ((r*c)%5===1){ wall.appendChild(s("rect", { x:x+40, y:y+35, width:80, height:80, rx:18, fill:"none", stroke:"#5a4330", "stroke-width":5 })); wall.appendChild(s("circle", { cx:x+80, cy:y+75, r:12, fill:"#5a4330" })); } }
    cs.appendChild(wall);
    cs.appendChild(s("ellipse", { cx:960, cy:620, rx:700, ry:420, fill:"url(#g-lamp)", opacity:.35 }));
    cs.appendChild(s("path", { d:"M640 900 L 760 760 H 1160 L 1280 900Z", fill:"#20170f", filter:"url(#fx-paper)" }));
    chamber.appendChild(cs);
    host.appendChild(chamber);
    // codex
    const cxWrap = h("div", { style:{ position:"absolute", left:"50%", top:"52%", transform:"translate(-50%,-50%) scale(1.25)", perspective:"1800px", opacity:"0", transition:"opacity 1s" } });
    const cx = FC.codex3d({ n:10, pw:150, ph:250 });
    cxWrap.appendChild(cx); host.appendChild(cxWrap);
    // rain canvas
    const cv = h("canvas", { width:W, height:H, style:{ position:"absolute", inset:"0", width:"100%", height:"100%", pointerEvents:"none" } });
    host.appendChild(cv);
    const ctx = cv.getContext("2d");
    const drops = Array.from({ length:420 }, () => ({ x:Math.random()*W, y:Math.random()*H, l:18+Math.random()*30, v:22+Math.random()*18 }));
    let raining = true, rainAlpha = .55, raf;
    function rain(){
      ctx.clearRect(0,0,W,H);
      if (rainAlpha > 0.01){
        ctx.strokeStyle = `rgba(180,210,215,${rainAlpha})`; ctx.lineWidth = 2; ctx.beginPath();
        drops.forEach(d => { ctx.moveTo(d.x, d.y); ctx.lineTo(d.x - 6, d.y + d.l); d.y += d.v; d.x -= 3; if (d.y > H){ d.y = -40; d.x = Math.random()*(W+200); } });
        ctx.stroke();
      }
      if (!raining) rainAlpha *= .94;
      raf = requestAnimationFrame(rain);
    }
    if (FC.motionOK()) rain();
    const flash = h("div", { style:{ position:"absolute", inset:"0", background:"#dff8ff", opacity:"0", pointerEvents:"none" } });
    host.appendChild(flash);
    // caption
    const cap = h("div", { style:{ position:"absolute", left:"120px", bottom:"110px", maxWidth:"1180px", fontFamily:"var(--f-display)", fontWeight:"600", fontSize:"54px", lineHeight:"1.15", color:"#F4EBD8", textShadow:"0 4px 30px rgba(0,0,0,.8)", fontVariationSettings:'"opsz" 72' } });
    const kick = h("div", { class:"s-kicker", style:{ position:"absolute", left:"120px", top:"130px", color:"var(--gold)" } }, "Petén rainforest · Guatemala · 3 nights ago");
    host.appendChild(kick); host.appendChild(cap);
    const title = h("div", { style:{ position:"absolute", inset:"0", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"flex-end", paddingBottom:"110px", opacity:"0", transition:"opacity 1.2s", pointerEvents:"none", textAlign:"center" } },
      h("div", { class:"s-kicker", style:{ justifyContent:"center", color:"var(--gold)" } }, "An Expedition into the Maya & Aztec World"),
      h("div", { class:"s-title", style:{ fontSize:"190px", margin:"0", color:"#F4EBD8", textShadow:"0 10px 60px rgba(0,0,0,.7)" } }, "The Fifth Codex"),
      h("div", { style:{ fontSize:"36px", opacity:".85", marginTop:"10px" } }, "Only four Maya books survived. This may be the fifth."));
    host.appendChild(title);
    const lines = [
      "Three nights ago, a tropical storm tore through the rainforest of northern Guatemala…",
      "Lightning struck a giant ceiba tree. As it fell, its roots ripped open the ground — revealing a hidden stone chamber.",
      "Inside, wrapped in rotted cloth, was something no one had seen for centuries…",
      "A book — folded like a fan, painted on bark paper, sealed with jade.",
      ""
    ];
    let cancelType;
    function go(i){
      if (cancelType) cancelType();
      cancelType = typeInto(cap, lines[i] || "", 26);
      if (i >= 1){
        raining = i < 2;
        if (i === 1){
          flash.animate([{ opacity:0 },{ opacity:.95, offset:.08 },{ opacity:.1, offset:.2 },{ opacity:.8, offset:.28 },{ opacity:0 }], { duration:1300 });
          FC.sfx("thunder");
          setTimeout(() => { tree.style.transform = "rotate(68deg)"; }, 600);
          setTimeout(() => hole.animate([{ opacity:0 },{ opacity:1 }], { duration:1400, fill:"forwards" }), 1900);
        }
      }
      if (i === 0){ tree.style.transform = "none"; hole.getAnimations().forEach(a => a.cancel()); raining = true; rainAlpha = .55; }
      chamber.style.opacity = i >= 2 ? "1" : "0";
      kick.textContent = i >= 2 ? "Inside the chamber" : "Petén rainforest · Guatemala · 3 nights ago";
      cxWrap.style.opacity = i >= 3 ? "1" : "0";
      if (i === 3) setTimeout(() => cx.unfold(), 900);
      if (i < 3) cx.fold();
      title.style.opacity = i >= 4 ? "1" : "0";
      cap.style.opacity = i >= 4 ? "0" : "1";
      if (i >= 4){ cxWrap.style.transform = "translate(-50%,-78%) scale(1.05)"; FC.sfx("chime"); } else cxWrap.style.transform = "translate(-50%,-50%) scale(1.25)";
    }
    go(0);
    return { steps:4, step:go, destroy(){ cancelAnimationFrame(raf); if (cancelType) cancelType(); } };
  };

  /* =======================================================
     2. DEEP TIMELINE (Mon W1)
     ======================================================= */
  IX.timeline = function(host){
    const W = 1760, H = 690, x0 = 60, x1 = 1700, Y0 = -2000, Y1 = 2030;
    const X = y => x0 + (y - Y0)/(Y1 - Y0)*(x1 - x0);
    const v = svg(W, H, { style:"position:absolute;inset:0;width:100%;height:100%;overflow:visible" });
    // axis
    v.appendChild(s("rect", { x:x0, y:470, width:x1-x0, height:10, rx:5, fill:"#E9DCC0", opacity:.9 }));
    for (let y=-2000; y<=2000; y+=500){
      v.appendChild(s("rect", { x:X(y)-2, y:462, width:4, height:26, fill:"#E9DCC0" }));
      v.appendChild(s("text", { x:X(y), y:520, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":30, fill:"#E9DCC0", opacity:.85 }, y < 0 ? `${-y} BCE` : y === 0 ? "1 CE" : `${y} CE`));
    }
    v.appendChild(s("text", { x:x0, y:440, "font-family":"Big Shoulders Display", "font-weight":800, "font-size":22, fill:"#E9DCC0", opacity:.5, "letter-spacing":3 }, "← LONGER AGO"));
    v.appendChild(s("text", { x:x1, y:440, "text-anchor":"end", "font-family":"Big Shoulders Display", "font-weight":800, "font-size":22, fill:"#E9DCC0", opacity:.5, "letter-spacing":3 }, "TODAY →"));
    const ERAS = [
      { a:-1200, b:-400, lane:0, c:"#8f8577", t:"OLMEC", d:"c. 1200–400 BCE · the ‘mother culture’ of Mesoamerica — giant stone heads, the first big ceremonial centres." },
      { a:-2000, b:250, lane:1, c:"#2b6e55", t:"MAYA · PRECLASSIC", d:"from c. 2000 BCE · farming villages grow into the first Maya cities, like El Mirador." },
      { a:250, b:900, lane:1, c:"#1F7A5A", t:"CLASSIC", d:"c. 250–900 CE · dozens of rival city-states — Tikal, Calakmul, Palenque, Copán — with kings, stelae and writing." },
      { a:900, b:1697, lane:1, c:"#3FA37C", t:"POSTCLASSIC", d:"900–1697 · Chichén Itzá and Mayapán. The last independent Maya kingdom, Nojpetén, falls in 1697." },
      { a:1325, b:1521, lane:2, c:"#D9A23A", t:"AZTEC", d:"1325–1521 · the Mexica found Tenochtitlan (c. 1325); their empire rules central Mexico from 1428." },
      { a:1521, b:1821, lane:3, c:"#B3262E", t:"SPAIN", d:"1521–1821 · after the conquest, Spain rules ‘New Spain’ for 300 years." },
      { a:1821, b:2030, lane:3, c:"#2E9FB0", t:"TODAY", d:"Mexico & Guatemala become independent (1821). Millions of Maya people and Nahuatl speakers still live there today!" }
    ];
    const lanes = [110, 200, 290, 380];
    const els = ERAS.map(e => {
      const g = s("g", { opacity:0, style:"transition:opacity .8s" });
      const w = Math.max(8, X(e.b) - X(e.a));
      const r = s("rect", { x:X(e.a), y:lanes[e.lane], width:w, height:70, rx:6, fill:e.c, filter:"url(#fx-paper)" });
      g.appendChild(r);
      const labelX = X(e.a) + 14;
      g.appendChild(s("text", { x: w < 200 ? X(e.a) + w/2 : labelX, y:lanes[e.lane]+47, "text-anchor": w < 200 ? "middle" : "start", "font-family":"Big Shoulders Display", "font-weight":900, "font-size": w < 120 ? 24 : 32, fill:"#F4EBD8", "letter-spacing":2 }, e.t));
      v.appendChild(g); return g;
    });
    // events
    const EVENTS = [
      { y:1325, t:"Tenochtitlan founded", c:"#D9A23A" },
      { y:1519, t:"Spanish arrive", c:"#B3262E" },
      { y:2026, t:"Fifth Codex found 🟡", c:"#F0C25E", story:true }
    ];
    const evEls = EVENTS.map((e, i) => {
      const g = s("g", { opacity:0, style:"transition:opacity .8s" });
      g.appendChild(s("line", { x1:X(e.y), x2:X(e.y), y1:470, y2:560 + i*36, stroke:e.c, "stroke-width":4 }));
      g.appendChild(s("circle", { cx:X(e.y), cy:475, r:12, fill:e.c, stroke:"#14110F", "stroke-width":4 }));
      g.appendChild(s("text", { x:X(e.y) - 10, y:590 + i*36, "text-anchor":"end", "font-family":"Atkinson Hyperlegible", "font-weight":700, "font-size":26, fill:e.c }, `${e.y} · ${e.t}`));
      v.appendChild(g); return g;
    });
    // NZ comparison
    const nz = s("g", { opacity:0, style:"transition:opacity .8s" });
    nz.appendChild(s("rect", { x:X(1250), y:30, width:X(2030)-X(1250), height:56, rx:6, fill:"#0F5E47", stroke:"#3FA37C", "stroke-width":3, "stroke-dasharray":"10 6" }));
    nz.appendChild(s("text", { x:X(1250)+14, y:68, "font-family":"Big Shoulders Display", "font-weight":900, "font-size":28, fill:"#F4EBD8", "letter-spacing":2 }, "AOTEAROA · Polynesian voyagers settle c. 1250–1300"));
    v.appendChild(nz);
    host.appendChild(v);
    const info = h("div", { class:"pcard", style:{ position:"absolute", left:"0", right:"0", bottom:"-60px", padding:"18px 26px", fontSize:"30px", lineHeight:"1.25", display:"none" } });
    host.appendChild(info);
    const ctrl = h("div", { class:"ix-controls", style:{ position:"absolute", right:"0", top:"-118px" } });
    let k = 0; const total = ERAS.length + 2;
    const nextB = btn("Reveal next ▸", () => reveal(k+1), "on");
    ctrl.appendChild(btn("Reset", () => reveal(0), "dark")); ctrl.appendChild(nextB);
    host.appendChild(ctrl);
    function reveal(n){
      k = FC.clamp(n, 0, total);
      els.forEach((g, i) => g.setAttribute("opacity", i < k ? 1 : 0));
      evEls[0].setAttribute("opacity", k >= 5 ? 1 : 0);
      evEls[1].setAttribute("opacity", k >= 6 ? 1 : 0);
      evEls[2].setAttribute("opacity", k >= 7 ? 1 : 0);
      nz.setAttribute("opacity", k >= total ? 1 : 0);
      const e = k > 0 && k <= ERAS.length ? ERAS[k-1] : null;
      info.style.display = (e || k === total) ? "block" : "none";
      if (e) info.innerHTML = `<b style="font-family:var(--f-label);letter-spacing:.1em;color:${e.c}">${e.t}</b> — ${FC.esc(e.d)}`;
      else if (k === total) info.innerHTML = `<b style="font-family:var(--f-label);letter-spacing:.1em;color:#1F7A5A">AOTEAROA</b> — Tenochtitlan was founded at about the same time Polynesian voyagers — the ancestors of Māori — were settling Aotearoa.`;
      nextB.disabled = k >= total;
      if (n) FC.sfx("paper");
    }
    reveal(0);
    return {};
  };

  /* =======================================================
     3. MAP ZOOM: Aotearoa → the Americas → Mesoamerica
     ======================================================= */
  IX.mapzoom = function(host){
    const map = M.build({ view:M.VIEWS.pacific });
    map.setAttribute("style", "position:absolute;left:0;top:0;width:1180px;height:690px;border-radius:12px;box-shadow:var(--sh-3)");
    host.appendChild(map);
    const panel = h("div", { class:"pcard", style:{ position:"absolute", right:"0", top:"0", width:"540px", height:"690px", display:"flex", flexDirection:"column", gap:"18px" } });
    const title = h("div", { style:{ fontFamily:"var(--f-display)", fontWeight:"900", fontSize:"54px", lineHeight:"1" } });
    const body = h("div", { style:{ fontSize:"30px", lineHeight:"1.3" } });
    const ctrls = h("div", { style:{ marginTop:"auto", display:"flex", flexDirection:"column", gap:"12px" } });
    panel.append(title, body, ctrls); host.appendChild(panel);
    const STEPS = [
      { b:"1 · Aotearoa", view:M.VIEWS.pacific, t:"Start at home", d:"Here's Aotearoa New Zealand, in the South Pacific. The Maya and Aztec lands are across the ocean — about 11,000 km away.", marks:[["christchurch"]] },
      { b:"2 · The Americas", view:M.VIEWS.americas, t:"The Americas", d:"North America and South America are joined by a thin bridge of land — Central America.", marks:[] },
      { b:"3 · Mesoamerica", view:M.VIEWS.meso, t:"Mesoamerica", d:"<b>Meso</b> means ‘middle’. Mesoamerica is a <b>cultural region</b>: southern Mexico, Guatemala, Belize and parts of Honduras & El Salvador. This is where the Olmec, Maya and Aztecs lived — <b>not</b> South America!", marks:[["tikal"],["chichen"],["mexicoCity"],["laVenta","left"]], meso:true }
    ];
    const bs = STEPS.map((st, i) => { const b = btn(st.b, () => go(i), "dark"); b.style.color = "var(--cacao-ink)"; b.style.boxShadow = "inset 0 0 0 2px rgba(90,56,37,.35)"; ctrls.appendChild(b); return b; });
    async function go(i){
      const st = STEPS[i];
      bs.forEach((b, j) => b.classList.toggle("on", j === i));
      title.textContent = st.t; body.innerHTML = st.d;
      FC.clear(map.querySelector(".m-marks"));
      map.querySelector(".m-r-meso").setAttribute("opacity", 0);
      await M.animateView(map, st.view, 1700);
      if (st.meso) map.querySelector(".m-r-meso").animate([{ opacity:0 },{ opacity:.55 }], { duration:900, fill:"forwards" });
      st.marks.forEach(([id, side]) => M.mark(map, M.PLACES[id].ll, M.PLACES[id].n, { color: id === "christchurch" ? "#1F7A5A" : "#B3262E", side }));
    }
    go(0);
    return {};
  };

  /* =======================================================
     4. SOURCE SORTER — primary or secondary?
     ======================================================= */
  IX.sources = function(host){
    const CARDS = [
      { id:"stela", art:"stela", t:"Maya stela (carved stone)", p:true, why:"Primary — made by the Maya at the time, recording a king's deeds and dates." },
      { id:"codex", art:"codexpage", t:"Page of a Maya codex", p:true, why:"Primary — a book painted by Maya scribes." },
      { id:"letter", art:"letter", t:"Letter by Hernán Cortés (1520)", p:true, why:"Primary — written at the time… but by an invader who wanted to look like a hero. Primary doesn't mean unbiased!" },
      { id:"book", art:"textbook", t:"Modern school textbook", p:false, why:"Secondary — written much later, using other sources." },
      { id:"web", art:"web", t:"Museum website", p:false, why:"Secondary — experts explaining the evidence." },
      { id:"dig", art:"dig", t:"Photo of an archaeological dig", p:true, why:"Primary evidence — the objects found in the ground (the report about them is secondary)." }
    ];
    const bins = [
      { id:true, t:"PRIMARY", d:"made at the time, by people who were there", x:0, c:"#1F7A5A" },
      { id:false, t:"SECONDARY", d:"made later, about the past", x:900, c:"#2E9FB0" }
    ];
    bins.forEach(b => {
      const el = h("div", { class:"bin", style:{ position:"absolute", left:b.x+"px", top:"0", width:"860px", height:"300px", borderRadius:"16px", border:`4px dashed ${b.c}`, background:"rgba(0,0,0,.25)", padding:"18px 24px" } },
        h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"44px", letterSpacing:".14em", color:b.c } }, b.t),
        h("div", { style:{ fontSize:"26px", opacity:".8" } }, b.d));
      b.el = el; host.appendChild(el);
    });
    const tip = h("div", { class:"pcard", style:{ position:"absolute", left:"0", right:"0", top:"318px", padding:"14px 22px", fontSize:"28px", minHeight:"66px", lineHeight:"1.25" } }, "Drag each source into a box. Ask the class first — then drop it!");
    host.appendChild(tip);
    const placed = {};
    CARDS.forEach((c, i) => {
      const home = { x: 20 + i*292, y: 420 };
      const card = h("div", { class:"pcard hov", style:{ position:"absolute", left:home.x+"px", top:home.y+"px", width:"260px", height:"250px", padding:"10px 12px", cursor:"grab", touchAction:"none", transition:"box-shadow .3s, transform .3s", zIndex:"2" } });
      const a = A.artefactBox(c.art, "width:100%;height:170px;pointer-events:none");
      card.append(a, h("div", { style:{ fontSize:"22px", fontWeight:"700", lineHeight:"1.1", textAlign:"center" } }, c.t));
      host.appendChild(card);
      let drag = null;
      card.addEventListener("pointerdown", e => { e.stopPropagation(); card.setPointerCapture(e.pointerId); const [x,y] = toLocal(host, e); drag = { dx:x - card.offsetLeft, dy:y - card.offsetTop }; card.style.transition = "none"; card.style.zIndex = "5"; card.style.cursor = "grabbing"; });
      card.addEventListener("pointermove", e => { if (!drag) return; const [x,y] = toLocal(host, e); card.style.left = (x - drag.dx)+"px"; card.style.top = (y - drag.dy)+"px"; });
      card.addEventListener("pointerup", e => {
        if (!drag) return; drag = null; card.style.cursor = "grab"; card.style.zIndex = "2"; card.style.transition = "left .4s var(--ease-lift), top .4s var(--ease-lift)";
        const cx = card.offsetLeft + 130, cy = card.offsetTop + 125;
        const bin = bins.find(b => cx > b.x && cx < b.x + 860 && cy < 300);
        if (!bin){ card.style.left = home.x+"px"; card.style.top = home.y+"px"; return; }
        const n = Object.values(placed).filter(v => v === bin.id).length;
        placed[c.id] = bin.id;
        const slot = Object.keys(placed).filter(k => placed[k] === bin.id).indexOf(c.id);
        card.style.left = (bin.x + 20 + (slot % 4)*205) + "px"; card.style.top = (112 + Math.floor(slot/4)*10) + "px";
        card.style.transform = "scale(.72)"; card.style.transformOrigin = "top left";
        const ok = bin.id === c.p;
        card.style.boxShadow = `0 0 0 6px ${ok ? "#3FA37C" : "#D8434B"}, var(--sh-2)`;
        tip.innerHTML = `<b style="color:${ok ? "#1F7A5A" : "#B3262E"}">${ok ? "✓ Yes!" : "✗ Not quite."}</b> ${FC.esc(c.why)}`;
        FC.sfx(ok ? "ok" : "no"); void n;
      });
      c.el = card; c.home = home;
    });
    const ctrl = h("div", { class:"ix-controls", style:{ position:"absolute", right:"0", top:"-118px" } });
    ctrl.appendChild(btn("Reset", () => { Object.keys(placed).forEach(k => delete placed[k]); CARDS.forEach(c => { c.el.style.left = c.home.x+"px"; c.el.style.top = c.home.y+"px"; c.el.style.transform = ""; c.el.style.boxShadow = ""; }); tip.textContent = "Drag each source into a box. Ask the class first — then drop it!"; }, "dark"));
    ctrl.appendChild(btn("Show answers", () => {
      const cnt = { true:0, false:0 };
      CARDS.forEach(c => { const b = bins.find(bb => bb.id === c.p); const slot = cnt[c.p]++; placed[c.id] = c.p; c.el.style.transition = "left .6s var(--ease-lift), top .6s var(--ease-lift)"; c.el.style.left = (b.x + 20 + slot*205)+"px"; c.el.style.top = "112px"; c.el.style.transform = "scale(.72)"; c.el.style.transformOrigin = "top left"; c.el.style.boxShadow = "0 0 0 6px #3FA37C, var(--sh-2)"; });
      tip.innerHTML = "<b>Watch out:</b> Cortés' letter is primary — but he wanted the king of Spain to see him as a hero. Historians always ask: <b>who made this, and why?</b>";
    }, "on"));
    host.appendChild(ctrl);
    return {};
  };

  /* =======================================================
     5. ARTEFACT VIEWER (Path A)
     ======================================================= */
  IX.artefacts = function(host){
    const ITEMS = [
      { art:"olmec", t:"Olmec colossal head", f:["Carved from basalt boulders, c. 1200–400 BCE.","17 have been found — some about 3 m tall and weighing many tonnes.","Many archaeologists think they are portraits of rulers."] },
      { art:"stela", t:"Maya stela", f:["A tall carved stone monument.","Shows a king or queen, with glyphs recording dates and events.","Hundreds survive at cities like Copán and Tikal."] },
      { art:"sunstone", t:"Aztec Sun Stone", f:["Found buried in Mexico City's main square in 1790.","About 3.6 m wide and around 24 tonnes.","Often called a ‘calendar’, but it was probably a ceremonial stone about the Aztec idea of the Sun."] },
      { art:"cacao", t:"Cacao pods & beans", f:["Cacao beans were so valuable that they were used as money.","The Maya and Aztecs drank chocolate as a frothy, bitter drink — often with chilli, not sugar.","Traces of cacao have been found in Maya pots more than 2,500 years old."] },
      { art:"ball", t:"Rubber ball", f:["Mesoamericans made rubber from latex tree sap over 3,000 years ago.","Solid rubber balls could weigh several kilograms.","In the ballgame, players struck the ball with their hips, not their hands."] },
      { art:"mirror", t:"Obsidian mirror", f:["Obsidian is volcanic glass. Polished, it makes a dark mirror.","Aztec rulers and priests used obsidian mirrors in ceremonies.","One Aztec obsidian mirror ended up in England in the 1500s — it is now in the British Museum."] }
    ];
    const cards = ITEMS.map((it, i) => {
      const c = h("div", { class:"pcard hov", style:{ position:"absolute", left:((i%3)*600)+"px", top:"0", width:"540px", height:"690px", cursor:"pointer", display: i < 3 ? "flex" : "none", flexDirection:"column", padding:"24px 28px" } });
      const a = A.artefactBox(it.art, "width:100%;height:400px;flex:none;transition:height .3s");
      const facts = h("ul", { class:"bul", style:{ fontSize:"25px", lineHeight:"1.22", marginTop:"10px", display:"none" } }, it.f.map(f => h("li", { style:{ paddingLeft:"44px", marginBottom:"10px" } }, f)));
      c.append(a, h("div", { style:{ fontFamily:"var(--f-display)", fontWeight:"900", fontSize:"40px", lineHeight:"1", marginTop:"14px" } }, it.t), facts,
        h("div", { style:{ marginTop:"auto", fontFamily:"var(--f-label)", fontWeight:"800", letterSpacing:".14em", textTransform:"uppercase", fontSize:"18px", color:"#B3262E" } }, "Tap for facts · artistic reconstruction"));
      c.addEventListener("click", e => { e.stopPropagation(); const on = facts.style.display === "none"; facts.style.display = on ? "block" : "none"; a.style.height = on ? "220px" : "400px"; FC.sfx("paper"); });
      host.appendChild(c); return c;
    });
    const show = p => { cards.forEach((c, i) => { c.style.display = Math.floor(i/3) === p ? "flex" : "none"; }); FC.sfx("paper"); };
    return { steps:1, step:k => show(k ? 1 : 0) };
  };

  /* =======================================================
     6. FLIGHT PATH (Tue W1) — Aotearoa → Mexico; equator & hemispheres
     ======================================================= */
  function hav(a, b){ const R = 6371, r = Math.PI/180; const dLa = (b[1]-a[1])*r, dLo = (b[0]-a[0])*r; const x = Math.sin(dLa/2)**2 + Math.cos(a[1]*r)*Math.cos(b[1]*r)*Math.sin(dLo/2)**2; return 2*R*Math.asin(Math.sqrt(x)); }
  IX.flight = function(host){
    const map = M.build({ view:M.VIEWS.nzToMexico });
    map.setAttribute("style", "position:absolute;left:0;top:0;width:1180px;height:690px;border-radius:12px;box-shadow:var(--sh-3)");
    host.appendChild(map);
    const a = M.PLACES.christchurch.ll, b = M.PLACES.mexicoCity.ll;
    M.mark(map, a, "Ōtautahi", { color:"#1F7A5A" }); M.mark(map, b, "Mexico City", { color:"#B3262E" });
    const d = M.arc(a, b, 260);
    const route = map.querySelector(".m-route");
    const path = s("path", { d, fill:"none", stroke:"#F0C25E", "stroke-width":6, "stroke-dasharray":"18 12", "vector-effect":"non-scaling-stroke", opacity:.9 });
    route.appendChild(path);
    const plane = s("g", { class:"plane" });
    plane.innerHTML = `<g transform="scale(1.6)"><path d="M0 -14 L4 -4 L18 2 L18 6 L4 3 L3 12 L8 16 L8 18 L0 16 L-8 18 L-8 16 L-3 12 L-4 3 L-18 6 L-18 2 L-4 -4Z" fill="#F4EBD8" stroke="#14110F" stroke-width="2"/></g>`;
    route.appendChild(plane);
    const L = path.getTotalLength();
    function placePlane(t){ const p = path.getPointAtLength(t*L), p2 = path.getPointAtLength(Math.min(L, t*L+2)); const ang = Math.atan2(p2.y-p.y, p2.x-p.x)*180/Math.PI + 90; plane.setAttribute("transform", `translate(${p.x} ${p.y}) rotate(${ang})`); }
    placePlane(0);
    path.style.strokeDashoffset = 0;
    const panel = h("div", { class:"pcard", style:{ position:"absolute", right:"0", top:"0", width:"540px", height:"690px", display:"flex", flexDirection:"column", gap:"14px" } });
    const msg = h("div", { style:{ fontSize:"29px", lineHeight:"1.28" } }, "Capt. Quispe's floatplane is ready. Press FLY to cross the Pacific!");
    const dist = h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"64px", lineHeight:"1", color:"#B3262E" } }, "—");
    const ctrls = h("div", { style:{ marginTop:"auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"12px" } });
    panel.append(h("div", { style:{ fontFamily:"var(--f-display)", fontWeight:"900", fontSize:"48px", lineHeight:"1" } }, "Flight Path"), dist, msg, ctrls);
    host.appendChild(panel);
    const km = Math.round(hav(a, b)/100)*100;
    let raf;
    const fly = btn("✈ Fly", () => {
      cancelAnimationFrame(raf); const t0 = performance.now(), dur = FC.motionOK() ? 4200 : 1;
      (function st(t){ const k = Math.min(1, (t-t0)/dur); placePlane(k); dist.textContent = `${Math.round(km*k).toLocaleString("en-NZ")} km`; if (k < 1) raf = requestAnimationFrame(st); else { msg.innerHTML = `About <b>${km.toLocaleString("en-NZ")} km</b> in a straight line — roughly a 13-hour flight in a jet. We crossed the <b>equator</b> and the <b>Tropic of Capricorn</b>… and flew from the <b>Southern</b> into the <b>Northern Hemisphere</b>.`; FC.sfx("ok"); } })(t0);
    }, "on");
    const tg = (label, fn) => { const b2 = btn(label, () => { b2.classList.toggle("on"); fn(b2.classList.contains("on")); }, ""); return b2; };
    const eqB = tg("Equator", on => { map.querySelector(".m-equator").setAttribute("opacity", on ? 1 : 0); if (on) msg.innerHTML = "The <b>equator</b> (0° latitude) is an imaginary line around the middle of the Earth. It splits the world into the Northern and Southern Hemispheres."; });
    const trB = tg("Tropics", on => { map.querySelectorAll(".m-tropic").forEach(t => t.setAttribute("opacity", on ? 1 : 0)); if (on) msg.innerHTML = "Between the two <b>Tropics</b> (about 23°N and 23°S) the sun is high all year — it's always warm. The Maya lived in the tropics!"; });
    const hmB = tg("Hemispheres", on => { map.querySelector(".m-southhemi").setAttribute("opacity", on ? .14 : 0); if (on) msg.innerHTML = "We live in the <b>Southern Hemisphere</b> (shaded). Mexico & Guatemala are in the <b>Northern Hemisphere</b> — so their seasons are opposite to ours. When it's summer in NZ, it's winter in Mexico!"; });
    const rs = btn("Reset", () => { cancelAnimationFrame(raf); placePlane(0); dist.textContent = "—"; msg.textContent = "Capt. Quispe's floatplane is ready. Press FLY to cross the Pacific!"; [eqB,trB,hmB].forEach(x => { if (x.classList.contains("on")) x.click(); }); }, "dark");
    rs.style.color = "var(--cacao-ink)";
    [fly, eqB, trB, hmB].forEach(x => ctrls.appendChild(x)); ctrls.appendChild(rs);
    return { destroy(){ cancelAnimationFrame(raf); } };
  };

  /* =======================================================
     7. REGIONS — Mesoamerica vs Central vs South America
     ======================================================= */
  IX.regions = function(host){
    const map = M.build({ view:M.VIEWS.americas });
    map.setAttribute("style", "position:absolute;left:0;top:0;width:1060px;height:690px;border-radius:12px;box-shadow:var(--sh-3)");
    host.appendChild(map);
    const panel = h("div", { class:"pcard", style:{ position:"absolute", right:"0", top:"0", width:"660px", height:"690px", display:"flex", flexDirection:"column", gap:"14px" } });
    const msg = h("div", { style:{ fontSize:"29px", lineHeight:"1.28", minHeight:"230px" } }, "Tap a region to light it up. Before each tap, ask: ‘Where do you think it is?’");
    const grid = h("div", { style:{ marginTop:"auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"12px" } });
    panel.append(h("div", { style:{ fontFamily:"var(--f-display)", fontWeight:"900", fontSize:"48px", lineHeight:"1" } }, "Regions of the Americas"), msg, grid);
    host.appendChild(panel);
    const R = [
      { k:"na", b:"North America", op:.5, d:"<b>North America</b> — Canada, the USA and <b>Mexico</b>. Yes: Mexico is part of North America!" },
      { k:"ca", b:"Central America", op:.85, d:"<b>Central America</b> — the narrow land bridge: Guatemala, Belize, Honduras, El Salvador, Nicaragua, Costa Rica and Panama." },
      { k:"carib", b:"Caribbean", op:.85, d:"The <b>Caribbean</b> islands, like Cuba and Hispaniola." },
      { k:"sa", b:"South America", op:.6, d:"<b>South America</b> — a whole continent: Brazil, Peru, Chile, Argentina and more. Capt. Quispe's home, Peru, is here. We'll fly here later in the term!" },
      { k:"meso", b:"Mesoamerica", op:.62, d:"<b>Mesoamerica</b> (dashed) isn't a continent — it's a <b>cultural region</b> where peoples shared foods (maize!), calendars, ball games and pyramid-temples. It crosses from North America into Central America." },
      { k:"latin", b:"Latin America", d:"<b>Latin America</b> = Mexico, Central & South America and parts of the Caribbean — places where Spanish or Portuguese (languages that grew from Latin) are spoken." }
    ];
    const labels = s("g"); map.querySelector(".m-labels").appendChild(labels);
    R.forEach(r => {
      const b2 = btn(r.b, () => {
        const on = !b2.classList.contains("on"); b2.classList.toggle("on", on);
        if (r.k === "latin"){ ["ca","sa","carib"].forEach(k => map.querySelector(".m-r-"+k).setAttribute("opacity", on ? .8 : 0)); }
        else map.querySelector(".m-r-"+r.k).setAttribute("opacity", on ? r.op : 0);
        if (on){ msg.innerHTML = r.d; FC.sfx("paper"); }
      }, "");
      grid.appendChild(b2);
    });
    M.label(map, [-98,36], "NORTH AMERICA", 40, "rgba(90,56,37,.6)");
    M.label(map, [-60,-12], "SOUTH AMERICA", 40, "rgba(90,56,37,.6)");
    M.label(map, [-118,5], "PACIFIC OCEAN", 30, "rgba(233,220,192,.55)");
    M.label(map, [-42,22], "ATLANTIC OCEAN", 30, "rgba(233,220,192,.55)");
    return {};
  };

  /* =======================================================
     8. LATITUDE & LONGITUDE GAME
     ======================================================= */
  IX.latlong = function(host){
    const map = M.build({ view:M.VIEWS.americas });
    map.setAttribute("style", "position:absolute;left:0;top:0;width:1060px;height:690px;border-radius:12px;box-shadow:var(--sh-3)");
    host.appendChild(map);
    // graticule labels
    const lab = map.querySelector(".m-labels");
    for (let lat=-50; lat<=30; lat+=10){ const [x,y] = M.proj(-128, lat); lab.appendChild(s("text", { x, y:y+8, "font-family":"Big Shoulders Display", "font-weight":900, "font-size":22, fill:"#F0C25E" }, lat === 0 ? "0°" : `${Math.abs(lat)}°${lat>0?"N":"S"}`)); }
    for (let lon=-120; lon<=-40; lon+=10){ const [x,y] = M.proj(lon, 34); lab.appendChild(s("text", { x:x-14, y, "font-family":"Big Shoulders Display", "font-weight":900, "font-size":22, fill:"#F0C25E" }, `${-lon}°W`)); }
    const CH = [
      ["tikal","17°N","90°W"],["mexicoCity","19°N","99°W"],["panama","9°N","80°W"],["lima","12°S","77°W"],["manaus","3°S","60°W"],["rio","23°S","43°W"],["buenosAires","35°S","58°W"],["patagonia","50°S","71°W"]
    ];
    const panel = h("div", { class:"pcard", style:{ position:"absolute", right:"0", top:"0", width:"660px", height:"690px", display:"flex", flexDirection:"column", gap:"10px" } });
    const coord = h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"96px", lineHeight:"1", color:"#B3262E", letterSpacing:".02em" } }, "?");
    const msg = h("div", { style:{ fontSize:"28px", lineHeight:"1.28" } }, "Latitude = how far north or south (lines across). Longitude = how far east or west (lines up and down). Say latitude first!");
    const nm = h("div", { style:{ fontFamily:"var(--f-display)", fontWeight:"900", fontSize:"46px", lineHeight:"1", minHeight:"50px" } });
    const ctr = h("div", { style:{ marginTop:"auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"12px" } });
    panel.append(h("div", { class:"s-kicker", style:{ fontSize:"20px", color:"#B3262E" } }, "Navigator's Challenge"), coord, nm, msg, ctr);
    host.appendChild(panel);
    const lines = s("g"); map.querySelector(".m-route").appendChild(lines);
    let i = -1;
    function show(n){
      i = (n + CH.length) % CH.length; FC.clear(lines); FC.clear(map.querySelector(".m-marks")); nm.textContent = "";
      const [, la, lo] = CH[i]; coord.innerHTML = `${la}<br>${lo}`;
      msg.textContent = `Challenge ${i+1} of ${CH.length}: everyone point to where you think this is. Then press REVEAL.`;
    }
    function reveal(){
      if (i < 0) return;
      const p = M.PLACES[CH[i][0]]; const [x,y] = M.proj(p.ll[0], p.ll[1]);
      const h1 = s("line", { x1:1280, x2:x, y1:y, y2:y, stroke:"#F0C25E", "stroke-width":4, "vector-effect":"non-scaling-stroke", "stroke-dasharray":"12 8" });
      const v1 = s("line", { x1:x, x2:x, y1:400, y2:y, stroke:"#F0C25E", "stroke-width":4, "vector-effect":"non-scaling-stroke", "stroke-dasharray":"12 8" });
      lines.append(h1, v1);
      [h1, v1].forEach(l => l.animate([{ opacity:0 },{ opacity:1 }], { duration:700 }));
      setTimeout(() => { M.mark(map, p.ll, p.n); nm.textContent = p.n; msg.textContent = "Follow the latitude line across and the longitude line down — where they cross is the place!"; FC.sfx("ok"); }, 600);
    }
    ctr.append(btn("Next place ▸", () => show(i+1), "on"), btn("Reveal", reveal, ""));
    return {};
  };

  /* =======================================================
     SCIENCE (Wed W1)
     ======================================================= */
  IX.atom = function(host){
    const v = svg(1100, 690, { style:"position:absolute;left:0;top:0;width:1100px;height:690px" });
    const cx = 550, cy = 345;
    v.appendChild(s("circle", { cx, cy, r:300, fill:"url(#g-spark)", opacity:.12 }));
    const orbits = [[260,110,0],[260,110,60],[260,110,-60]];
    orbits.forEach(([rx,ry,rot]) => v.appendChild(s("ellipse", { cx, cy, rx, ry, fill:"none", stroke:"rgba(127,243,255,.35)", "stroke-width":3, transform:`rotate(${rot} ${cx} ${cy})` })));
    const nuc = s("g", { filter:"url(#fx-paper)" });
    [[-22,-14,"p"],[18,-20,"n"],[-6,16,"n"],[24,14,"p"],[-30,22,"n"],[4,-2,"p"]].forEach(([x,y,t]) => {
      nuc.appendChild(s("circle", { cx:cx+x, cy:cy+y, r:30, fill: t === "p" ? "#B3262E" : "#8f8577", class:"part part-"+t, style:"cursor:pointer" }));
      if (t === "p") nuc.appendChild(s("text", { x:cx+x, y:cy+y+12, "text-anchor":"middle", "font-size":34, "font-weight":900, fill:"#F4EBD8", class:"sign", "pointer-events":"none" }, "+"));
    });
    v.appendChild(nuc);
    const els = orbits.map(([rx,ry,rot], i) => {
      const g = s("g", { transform:`rotate(${rot} ${cx} ${cy})` });
      const e = s("g", { class:"part part-e", style:"cursor:pointer" });
      e.appendChild(s("circle", { r:24, fill:"#7FF3FF", filter:"url(#fx-glow)" }));
      e.appendChild(s("text", { y:11, "text-anchor":"middle", "font-size":34, "font-weight":900, fill:"#14110F", class:"sign", "pointer-events":"none" }, "−"));
      g.appendChild(e); v.appendChild(g);
      return { e, rx, ry, ph:i*2.1 };
    });
    host.appendChild(v);
    const panel = h("div", { class:"pcard", style:{ position:"absolute", right:"0", top:"0", width:"620px", height:"690px", display:"flex", flexDirection:"column", gap:"16px" } });
    const msg = h("div", { style:{ fontSize:"30px", lineHeight:"1.3" } }, "Everything is made of tiny atoms. Tap a particle to learn what it is.");
    panel.append(h("div", { style:{ fontFamily:"var(--f-display)", fontWeight:"900", fontSize:"50px", lineHeight:"1" } }, "Inside an Atom"), msg,
      h("div", { style:{ marginTop:"auto", display:"grid", gap:"10px", fontSize:"26px" } },
        h("div", null, h("b", { style:{ color:"#B3262E" } }, "● Proton "), "positive (+), in the middle"),
        h("div", null, h("b", { style:{ color:"#8f8577" } }, "● Neutron "), "no charge, in the middle"),
        h("div", null, h("b", { style:{ color:"#1E7E95" } }, "● Electron "), "negative (−), zooming around the outside")));
    host.appendChild(panel);
    v.addEventListener("click", e => {
      const t = e.target.closest(".part"); if (!t) return; e.stopPropagation(); FC.sfx("tok");
      if (t.classList.contains("part-p")) msg.innerHTML = "<b>Proton</b> — has a <b>positive (+)</b> charge. Protons stay locked in the nucleus (the centre).";
      else if (t.classList.contains("part-n")) msg.innerHTML = "<b>Neutron</b> — <b>no charge</b>. It sits in the nucleus with the protons.";
      else msg.innerHTML = "<b>Electron</b> — has a <b>negative (−)</b> charge. Electrons are on the outside, so they can be <b>rubbed off</b> and moved to other things. Moving electrons = <b>electricity</b>!";
    });
    let raf; const t0 = performance.now();
    (function loop(t){ const k = (t - t0)/1000; els.forEach(o => { const a = k*1.4 + o.ph; o.e.setAttribute("transform", `translate(${cx + Math.cos(a)*o.rx} ${cy + Math.sin(a)*o.ry})`); }); raf = requestAnimationFrame(loop); })(t0);
    return { destroy(){ cancelAnimationFrame(raf); } };
  };

  IX.chargelab = function(host){
    const W = 1760, H = 690;
    const v = svg(W, H, { style:"position:absolute;inset:0;width:100%;height:100%" });
    // jumper
    const jumper = s("g", { filter:"url(#fx-paper)" });
    jumper.appendChild(s("path", { d:"M60 120 L200 60 L330 60 L470 120 L520 300 L430 330 L420 640 L110 640 L100 330 L10 300Z", fill:"#2E9FB0" }));
    jumper.appendChild(s("path", { d:"M60 120 L200 60 L330 60 L470 120 L520 300 L430 330 L420 640 L110 640 L100 330 L10 300Z", fill:"url(#p-weave)" }));
    jumper.appendChild(s("path", { d:"M200 60 Q265 120 330 60", fill:"none", stroke:"#17505a", "stroke-width":14 }));
    v.appendChild(jumper);
    v.appendChild(s("text", { x:265, y:680, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":32, fill:"#E9DCC0", "letter-spacing":3 }, "WOOL JUMPER"));
    // paper bits
    const bits = [];
    const bitsG = s("g");
    for (let i=0;i<14;i++){ const x = 1300 + (i%7)*60 + Math.random()*20, y = 620 + Math.floor(i/7)*28; const r = s("rect", { x:-14, y:-9, width:28, height:18, rx:3, fill: ["#E9DCC0","#D9A23A","#F4EBD8"][i%3], transform:`translate(${x} ${y}) rotate(${Math.random()*60-30})` }); bitsG.appendChild(r); bits.push({ r, x, y }); }
    v.appendChild(bitsG);
    v.appendChild(s("rect", { x:1250, y:650, width:480, height:14, rx:4, fill:"#5a3825" }));
    v.appendChild(s("text", { x:1490, y:690, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":28, fill:"#E9DCC0", "letter-spacing":3 }, "TISSUE-PAPER GLYPHS"));
    // balloon
    const balloon = s("g", { style:"transition:transform 1s cubic-bezier(.3,.7,.2,1)" });
    balloon.appendChild(s("ellipse", { cx:0, cy:0, rx:140, ry:170, fill:"#B3262E", filter:"url(#fx-paper)" }));
    balloon.appendChild(s("ellipse", { cx:-50, cy:-70, rx:30, ry:50, fill:"#fff", opacity:.18 }));
    balloon.appendChild(s("path", { d:"M-12 168 L12 168 L0 186Z", fill:"#8a1d23" }));
    balloon.appendChild(s("path", { d:"M0 186 Q30 260 -10 340", stroke:"#E9DCC0", "stroke-width":3, fill:"none" }));
    v.appendChild(balloon);
    const BX = 900, BY = 300;
    const setB = (x, y) => { balloon.style.transform = `translate(${x}px, ${y}px)`; };
    setB(BX, BY);
    // charges
    const jC = [], bC = [];
    const tok = (sign) => { const g = s("g"); g.appendChild(s("circle", { r:19, fill: sign > 0 ? "#F4EBD8" : "#7FF3FF", stroke:"#14110F", "stroke-width":3 })); g.appendChild(s("text", { y:9, "text-anchor":"middle", "font-size":28, "font-weight":900, fill:"#14110F" }, sign > 0 ? "+" : "−")); return g; };
    const jPos = []; for (let r=0;r<4;r++) for (let c=0;c<4;c++) jPos.push([170 + c*64 + (r%2)*20, 200 + r*95]);
    jPos.slice(0, 8).forEach(([x,y]) => { const p = tok(1); p.setAttribute("transform", `translate(${x} ${y})`); v.appendChild(p); });
    const eLayer = s("g"); v.appendChild(eLayer);
    jPos.slice(0, 8).forEach(([x,y], i) => { const e = tok(-1); const pos = [x+30, y+40]; e.setAttribute("transform", `translate(${pos[0]} ${pos[1]})`); eLayer.appendChild(e); jC.push({ e, pos }); });
    const bOff = [[-60,-60],[40,-80],[-20,10],[60,0],[-50,80],[30,90]];
    bOff.forEach(([x,y]) => { const p = tok(1); p.setAttribute("transform", `translate(${x} ${y})`); balloon.appendChild(p); const e = tok(-1); e.setAttribute("transform", `translate(${x+26} ${y+26})`); balloon.appendChild(e); });
    host.appendChild(v);
    const read = h("div", { class:"pcard", style:{ position:"absolute", left:"560px", top:"0", width:"640px", padding:"18px 24px", fontSize:"28px", lineHeight:"1.25" } }, "Both start NEUTRAL: the same number of + and − charges. Press RUB.");
    host.appendChild(read);
    const ctrl = h("div", { class:"ix-controls", style:{ position:"absolute", right:"0", top:"-118px" } });
    let rubbed = false, busy = false;
    const rub = btn("1 · Rub balloon on jumper", async () => {
      if (busy || rubbed) return; busy = true;
      for (let k=0;k<3;k++){ setB(560, 280); await FC.wait(420); setB(520, 360); await FC.wait(420); }
      // move 5 electrons from jumper onto balloon (they become balloon children visually: animate in svg coords)
      for (let k=0;k<5;k++){
        const o = jC[k]; const tx = 520 + (k-2)*44, ty = 360 + 150;
        o.e.animate([{ transform:`translate(${o.pos[0]}px, ${o.pos[1]}px)` }, { transform:`translate(${tx}px, ${ty}px)` }], { duration:500, fill:"forwards", easing:"cubic-bezier(.3,.7,.2,1)" });
        o.dst = [tx - 520, ty - 360];
        FC.sfx("tok"); await FC.wait(160);
      }
      await FC.wait(500);
      // re-parent onto balloon so they travel with it
      jC.slice(0,5).forEach(o => { o.e.getAnimations().forEach(a => a.cancel()); o.e.setAttribute("transform", `translate(${o.dst[0]} ${o.dst[1]})`); balloon.appendChild(o.e); });
      setB(BX, BY);
      rubbed = true; busy = false;
      read.innerHTML = "Rubbing moved <b>5 electrons</b> from the jumper to the balloon. Balloon: <b>extra −</b> (negative). Jumper: <b>missing −</b>, so it's <b>positive</b>. That's <b>static electricity</b>!";
      FC.sfx("zap");
    }, "on");
    const near = btn("2 · Hold near paper", async () => {
      if (!rubbed){ read.innerHTML = "The balloon isn't charged yet — nothing happens. (Try it! That's a fair test.)"; setB(1490, 330); await FC.wait(1200); setB(BX, BY); return; }
      setB(1490, 300); await FC.wait(900);
      bits.forEach((b, i) => { const tx = 1490 + (Math.random()-.5)*160, ty = 300 + 150 + Math.random()*30; b.r.animate([{ transform:`translate(${b.x}px, ${b.y}px)` }, { transform:`translate(${tx}px, ${ty}px) rotate(${Math.random()*80-40}deg)` }], { duration:380 + i*30, fill:"forwards", easing:"cubic-bezier(.5,0,.3,1.4)", delay:i*30 }); });
      read.innerHTML = "The negative balloon <b>attracts</b> the paper — opposite charges pull together. It works without even touching: it's a <b>non-contact force</b>!";
      FC.sfx("ok");
    });
    const reset = btn("Reset", () => {
      rubbed = false; setB(BX, BY);
      jC.forEach(o => { o.e.getAnimations().forEach(a => a.cancel()); o.e.setAttribute("transform", `translate(${o.pos[0]} ${o.pos[1]})`); eLayer.appendChild(o.e); });
      bits.forEach(b => { b.r.getAnimations().forEach(a => a.cancel()); });
      read.textContent = "Both start NEUTRAL: the same number of + and − charges. Press RUB.";
    }, "dark");
    ctrl.append(reset, rub, near); host.appendChild(ctrl);
    return {};
  };

  IX.charges = function(host){
    const W = 1760, H = 690;
    const box = h("div", { style:{ position:"absolute", left:"0", top:"0", width:"1160px", height:"690px", borderRadius:"16px", background:"rgba(0,0,0,.35)", boxShadow:"inset 0 0 0 2px rgba(127,243,255,.25)", overflow:"hidden", touchAction:"none" } });
    host.appendChild(box);
    const v = svg(1160, 690, { style:"position:absolute;inset:0;width:100%;height:100%" });
    box.appendChild(v);
    const arrows = s("g"); v.appendChild(arrows);
    const P = [ { x:380, y:345, q:1, vx:0 }, { x:780, y:345, q:-1, vx:0 } ];
    P.forEach((p, i) => {
      const g = s("g", { style:"cursor:grab" });
      g.appendChild(s("circle", { r:80, fill:"url(#g-spark)", opacity:.5, class:"halo" }));
      g.appendChild(s("circle", { r:62, class:"body", filter:"url(#fx-paper)" }));
      g.appendChild(s("text", { y:30, "text-anchor":"middle", "font-size":96, "font-weight":900, class:"sg" }));
      v.appendChild(g); p.g = g;
      let drag = false;
      g.addEventListener("pointerdown", e => { e.stopPropagation(); drag = true; p.moved = false; g.setPointerCapture(e.pointerId); stop(); });
      g.addEventListener("pointermove", e => { if (!drag) return; const [x] = toLocal(box, e); p.x = FC.clamp(x, 70, 1090); p.moved = true; draw(); });
      g.addEventListener("pointerup", () => { drag = false; if (!p.moved){ p.q *= -1; FC.sfx("tok"); draw(); } });
      void i;
    });
    function draw(){
      P.forEach(p => {
        p.g.setAttribute("transform", `translate(${p.x} ${p.y})`);
        p.g.querySelector(".body").setAttribute("fill", p.q > 0 ? "#B3262E" : "#1E7E95");
        p.g.querySelector(".sg").textContent = p.q > 0 ? "+" : "−";
        p.g.querySelector(".sg").setAttribute("fill", "#F4EBD8");
      });
      FC.clear(arrows);
      const like = P[0].q === P[1].q, dir = P[1].x > P[0].x ? 1 : -1;
      const L = 90, col = like ? "#F0C25E" : "#7FF3FF";
      P.forEach((p, i) => {
        const sign = (i === 0 ? 1 : -1) * dir * (like ? -1 : 1);
        const x1 = p.x + sign*80, x2 = p.x + sign*(80+L);
        arrows.appendChild(s("path", { d:`M${x1} ${p.y} L${x2} ${p.y} M${x2 - sign*24} ${p.y-20} L${x2} ${p.y} L${x2 - sign*24} ${p.y+20}`, stroke:col, "stroke-width":12, fill:"none", "stroke-linecap":"round", "stroke-linejoin":"round" }));
      });
      verdict.innerHTML = like ? "<b>LIKE charges REPEL</b> — they push each other away." : "<b>OPPOSITE charges ATTRACT</b> — they pull together.";
      verdict.style.color = like ? "#B26A12" : "#1E7E95";
    }
    const panel = h("div", { class:"pcard", style:{ position:"absolute", right:"0", top:"0", width:"560px", height:"690px", display:"flex", flexDirection:"column", gap:"16px" } });
    const verdict = h("div", { style:{ fontFamily:"var(--f-display)", fontWeight:"800", fontSize:"44px", lineHeight:"1.08" } });
    panel.append(h("div", { style:{ fontSize:"28px", lineHeight:"1.3" } }, "Tap a charge to flip it between + and −. Drag to move. Before you press LET GO, ask: will they push or pull?"), verdict);
    const ctr = h("div", { style:{ marginTop:"auto", display:"grid", gap:"12px" } });
    let raf;
    function stop(){ cancelAnimationFrame(raf); }
    ctr.append(btn("Let go!", () => {
      stop(); P.forEach(p => p.vx = 0);
      const like = P[0].q === P[1].q;
      (function step(){
        const dx = P[1].x - P[0].x, d = Math.max(130, Math.abs(dx)), f = 900000/(d*d) * (like ? -1 : 1) * Math.sign(dx);
        P[0].vx += f*.004; P[1].vx -= f*.004;
        let done = false;
        P.forEach(p => { p.vx *= .985; p.x += p.vx; if (p.x < 70 || p.x > 1090){ p.x = FC.clamp(p.x, 70, 1090); p.vx = 0; done = done || like; } });
        if (!like && Math.abs(P[1].x - P[0].x) <= 126){ const m = (P[0].x + P[1].x)/2, sg = Math.sign(P[1].x - P[0].x) || 1; P[0].x = m - 63*sg; P[1].x = m + 63*sg; done = true; FC.sfx("tok"); }
        draw();
        if (!done && (Math.abs(P[0].vx) + Math.abs(P[1].vx) > .02 || true)) raf = requestAnimationFrame(step);
        if (like && P[0].x <= 70 && P[1].x >= 1090) stop();
      })();
    }, "on"), btn("Reset", () => { stop(); P[0].x = 380; P[1].x = 780; P[0].q = 1; P[1].q = -1; draw(); }, "dark"));
    ctr.lastChild.style.color = "var(--cacao-ink)";
    panel.appendChild(ctr); host.appendChild(panel);
    draw();
    return { destroy: stop };
  };

  IX.lightning = function(host){
    const W = 1760, H = 690;
    const wrap = h("div", { style:{ position:"absolute", left:"0", top:"0", width:"1160px", height:"690px", borderRadius:"16px", overflow:"hidden", background:"linear-gradient(#0d1416, #182326 60%, #0f1a14)" } });
    host.appendChild(wrap);
    const v = svg(1160, 690, { style:"position:absolute;inset:0;width:100%;height:100%" });
    // lake & ground
    v.appendChild(s("path", { d:"M0 560 Q300 540 580 556 T1160 548 V690 H0Z", fill:"#1b3a42" }));
    v.appendChild(s("path", { d:"M0 600 Q200 590 380 604 L380 690 H0Z M820 600 Q980 586 1160 598 V690 H820Z", fill:"#0f2219" }));
    const stilt = s("g", { fill:"#3a2a1c" }); // stilt house (palafito) on lake
    stilt.appendChild(s("rect", { x:600, y:500, width:150, height:50 })); stilt.appendChild(s("path", { d:"M590 500 L675 450 L760 500Z" }));
    for (let i=0;i<5;i++) stilt.appendChild(s("rect", { x:606+i*34, y:548, width:8, height:40 }));
    v.appendChild(stilt);
    // cloud
    const cloud = s("g", { filter:"url(#fx-paper)" });
    [[300,140,180],[520,110,210],[760,140,190],[920,170,140],[180,180,120]].forEach(([x,y,r]) => cloud.appendChild(s("ellipse", { cx:x, cy:y, rx:r, ry:r*.55, fill:"#2b3438" })));
    cloud.appendChild(s("rect", { x:120, y:150, width:880, height:110, rx:50, fill:"#262e31" }));
    v.appendChild(cloud);
    const top = s("g"), bot = s("g"), gnd = s("g"); v.append(top, bot, gnd);
    const bolt = s("g"); v.appendChild(bolt);
    wrap.appendChild(v);
    const flash = h("div", { style:{ position:"absolute", inset:"0", background:"#dff8ff", opacity:"0", pointerEvents:"none" } }); wrap.appendChild(flash);
    const panel = h("div", { class:"pcard", style:{ position:"absolute", right:"0", top:"0", width:"560px", height:"690px", display:"flex", flexDirection:"column", gap:"14px" } });
    const meter = h("div", { style:{ height:"34px", borderRadius:"17px", background:"rgba(90,56,37,.15)", overflow:"hidden" } }, h("div", { class:"fill", style:{ height:"100%", width:"0%", background:"linear-gradient(90deg,#2E9FB0,#7FF3FF)", transition:"width .5s" } }));
    const msg = h("div", { style:{ fontSize:"27px", lineHeight:"1.3" } }, "Inside a storm cloud, ice and water crash together — just like rubbing a balloon. Press BUILD to separate the charges.");
    const count = h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"28px", letterSpacing:".1em", color:"#B3262E" } }, "STRIKES: 0");
    panel.append(h("div", { style:{ fontFamily:"var(--f-display)", fontWeight:"900", fontSize:"46px", lineHeight:"1" } }, "Catatumbo Lightning"), h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"800", letterSpacing:".12em", textTransform:"uppercase", fontSize:"20px" } }, "Lake Maracaibo · Venezuela · 🟢 real"), meter, msg, count);
    const ctr = h("div", { style:{ marginTop:"auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"12px" } });
    panel.appendChild(ctr); host.appendChild(panel);
    let level = 0, strikes = 0;
    const tk = (sign, x, y, g) => { const t = s("g", { transform:`translate(${x} ${y})` }); t.appendChild(s("circle", { r:16, fill: sign > 0 ? "#F4EBD8" : "#7FF3FF" })); t.appendChild(s("text", { y:8, "text-anchor":"middle", "font-size":24, "font-weight":900, fill:"#14110F" }, sign > 0 ? "+" : "−")); g.appendChild(t); t.animate([{ opacity:0, transform:`translate(${x}px, ${y+10}px)` }, { opacity:1, transform:`translate(${x}px, ${y}px)` }], { duration:400, fill:"forwards" }); };
    function drawLevel(){
      FC.clear(top); FC.clear(bot); FC.clear(gnd);
      for (let i=0;i<level*3;i++){ tk(1, 220 + (i*67)%720, 100 + (i%2)*22, top); tk(-1, 200 + (i*71)%760, 240 + (i%2)*16, bot); }
      for (let i=0;i<level*2;i++) tk(1, 80 + (i*101)%1000, 630, gnd);
      meter.querySelector(".fill").style.width = (level/5*100) + "%";
      strikeB.disabled = level < 3;
    }
    function boltPath(x0, y0, x1, y1, disp){
      let pts = [[x0,y0],[x1,y1]];
      for (let k=0;k<6;k++){ const np = [pts[0]]; for (let i=0;i<pts.length-1;i++){ const [ax,ay] = pts[i], [bx,by] = pts[i+1]; np.push([(ax+bx)/2 + (Math.random()-.5)*disp, (ay+by)/2 + (Math.random()-.5)*disp*.3]); np.push([bx,by]); } pts = np; disp *= .55; }
      return "M" + pts.map(p => p.map(n => n.toFixed(1)).join(" ")).join(" L");
    }
    const build = btn("⛈ Build charge", () => { if (level < 5){ level++; drawLevel(); msg.innerHTML = level < 3 ? "Light ice crystals carry <b>+</b> to the top; heavy hail carries <b>−</b> to the bottom. The ground underneath turns <b>+</b>…" : "Huge charge difference! The air can't hold it back much longer… Ready to <b>STRIKE</b>."; FC.sfx("tok"); } }, "on");
    const strikeB = btn("⚡ Strike!", () => {
      const tx = 80 + Math.random()*1000, sx = tx + (Math.random()-.5)*200;
      FC.clear(bolt);
      const d = boltPath(sx, 250, tx, 600, 260);
      bolt.appendChild(s("path", { d, stroke:"#7FF3FF", "stroke-width":18, fill:"none", opacity:.5, filter:"url(#fx-softglow)" }));
      bolt.appendChild(s("path", { d, stroke:"#F4FFFF", "stroke-width":6, fill:"none", "stroke-linejoin":"round" }));
      for (let b=0;b<3;b++) bolt.appendChild(s("path", { d:boltPath(sx + (Math.random()-.5)*80, 280 + Math.random()*120, sx + (Math.random()-.5)*300, 420 + Math.random()*140, 90), stroke:"#CFFBFF", "stroke-width":3, fill:"none" }));
      bolt.animate([{ opacity:1 },{ opacity:.2, offset:.3 },{ opacity:1, offset:.45 },{ opacity:0 }], { duration:900, fill:"forwards" });
      flash.animate([{ opacity:0 },{ opacity:.85, offset:.1 },{ opacity:.05, offset:.35 },{ opacity:.5, offset:.45 },{ opacity:0 }], { duration:900 });
      FC.sfx("zap"); setTimeout(() => FC.sfx("thunder"), 450);
      strikes++; count.textContent = `STRIKES: ${strikes}`;
      level = 0; drawLevel();
      msg.innerHTML = "<b>CRACK!</b> A giant spark jumps between the − charges and the + ground: a <b>discharge</b>. Over Lake Maracaibo this happens on up to about <b>260 nights a year</b> — one of the most lightning-struck places on Earth.";
    }, "");
    ctr.append(build, strikeB);
    drawLevel();
    return {};
  };

  /* =======================================================
     TECHNOLOGY (Thu W1)
     ======================================================= */
  IX.designwheel = function(host){
    const ST = [
      ["Need","What problem are we solving — and for whom?","The camp is dark. Mateo's team needs light inside the chamber."],
      ["Brief","Write the goal and the specifications (must-haves).","A hands-free torch: fits on a finger, has a switch, uses safe parts."],
      ["Ideas","Sketch lots of possible designs. Quantity first!","Finger ring? Headband? Clip-on? Sketch three."],
      ["Plan","Choose the best idea. Draw it with labels and a parts list.","Ring design: card band, LED, coin cell, tape."],
      ["Build","Make a prototype — a first working version.","Tape the LED legs around the coin cell."],
      ["Test","Does it meet every specification? Ask the stakeholder.","Does it fit? Does the switch work? Is it hands-free?"],
      ["Improve","Fix problems and make version 2.","Add a stronger band; make the switch easier to press."]
    ];
    const v = svg(690, 690, { style:"position:absolute;left:0;top:0;width:690px;height:690px" });
    const cx = 345, cy = 345, R1 = 330, R0 = 150, n = ST.length;
    const segs = ST.map((st, i) => {
      const a0 = (i/n)*Math.PI*2 - Math.PI/2 + .02, a1 = ((i+1)/n)*Math.PI*2 - Math.PI/2 - .02;
      const P = (r, a) => `${cx + Math.cos(a)*r} ${cy + Math.sin(a)*r}`;
      const g = s("g", { style:"cursor:pointer" });
      const path = s("path", { d:`M${P(R0,a0)} L${P(R1,a0)} A${R1} ${R1} 0 0 1 ${P(R1,a1)} L${P(R0,a1)} A${R0} ${R0} 0 0 0 ${P(R0,a0)}Z`, fill:"#3a2a20", stroke:"#C46A3A", "stroke-width":3, filter:"url(#fx-paper)", style:"transition:fill .4s" });
      const am = (a0+a1)/2;
      const t = s("text", { x:cx + Math.cos(am)*240, y:cy + Math.sin(am)*240 + 12, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":36, fill:"#E9DCC0", "letter-spacing":2, "pointer-events":"none" }, st[0].toUpperCase());
      const nn = s("text", { x:cx + Math.cos(am)*175, y:cy + Math.sin(am)*175 + 10, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":28, fill:"#C46A3A", "pointer-events":"none" }, i+1);
      g.append(path, t, nn); v.appendChild(g);
      g.addEventListener("click", e => { e.stopPropagation(); sel(i); });
      return path;
    });
    v.appendChild(s("circle", { cx, cy, r:130, fill:"#2A2420", stroke:"#C46A3A", "stroke-width":4 }));
    const arrow = s("path", { d:`M${cx-60} ${cy-20} A70 70 0 1 1 ${cx-40} ${cy+50}`, fill:"none", stroke:"#F0C25E", "stroke-width":10, "stroke-linecap":"round", class:"spin-slow", style:"transform-origin:345px 345px" });
    v.appendChild(arrow);
    v.appendChild(s("path", { d:`M${cx-58} ${cy+38} l-4 30 l28 -12z`, fill:"#F0C25E", class:"spin-slow", style:"transform-origin:345px 345px" }));
    host.appendChild(v);
    const panel = h("div", { class:"pcard", style:{ position:"absolute", left:"760px", right:"0", top:"0", height:"690px", display:"flex", flexDirection:"column", gap:"16px" } });
    const num = h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"120px", lineHeight:".8", color:"#C46A3A" } });
    const tt = h("div", { style:{ fontFamily:"var(--f-display)", fontWeight:"900", fontSize:"70px", lineHeight:"1" } });
    const dd = h("div", { style:{ fontSize:"36px", lineHeight:"1.25" } });
    const ex = h("div", { style:{ fontSize:"30px", lineHeight:"1.25", padding:"16px 20px", borderLeft:"8px solid #C46A3A", background:"rgba(196,106,58,.1)", borderRadius:"0 10px 10px 0" } });
    const ctr = h("div", { style:{ marginTop:"auto", display:"flex", gap:"12px" } });
    panel.append(num, tt, dd, ex, ctr); host.appendChild(panel);
    let cur = 0;
    function sel(i){ cur = (i + n) % n; segs.forEach((p, j) => p.setAttribute("fill", j === cur ? "#C46A3A" : "#3a2a20")); num.textContent = cur+1; tt.textContent = ST[cur][0]; dd.textContent = ST[cur][1]; ex.innerHTML = `<b style="font-family:var(--f-label);letter-spacing:.1em;color:#C46A3A">MATEO'S TORCH:</b> ${FC.esc(ST[cur][2])}`; FC.sfx("paper"); }
    const pb = btn("◂ Back", () => sel(cur-1), "dark"); pb.style.color = "var(--cacao-ink)";
    ctr.append(pb, btn("Next stage ▸", () => sel(cur+1), "on"));
    sel(0);
    return {};
  };

  IX.ledsim = function(host){
    const v = svg(1100, 690, { style:"position:absolute;left:0;top:0;width:1100px;height:690px" });
    v.appendChild(s("rect", { x:0, y:0, width:1100, height:690, rx:16, fill:"rgba(0,0,0,.3)" }));
    // circuit path for electron flow (loop): battery + → long leg → LED → short leg → battery −
    const loopD = "M640 470 L640 400 L560 330 L560 210 L500 160 L440 210 L440 330 L360 400 L360 470 Q500 560 640 470Z";
    const loop = s("path", { d:loopD, fill:"none", stroke:"none" }); v.appendChild(loop);
    // battery (coin cell)
    const bat = s("g", { filter:"url(#fx-paper)" });
    bat.appendChild(s("ellipse", { cx:500, cy:520, rx:200, ry:70, fill:"#8a8f94" }));
    bat.appendChild(s("rect", { x:300, y:470, width:400, height:50, fill:"#9da3a8" }));
    bat.appendChild(s("ellipse", { cx:500, cy:470, rx:200, ry:70, fill:"#c7ccd0" }));
    bat.appendChild(s("text", { x:500, y:482, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":40, fill:"#5b6166" }, "+ CR2032 3V"));
    v.appendChild(bat);
    v.appendChild(s("text", { x:500, y:640, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":26, fill:"#E9DCC0", "letter-spacing":2 }, "TOP = +   ·   UNDERNEATH = −"));
    // legs
    const legs = s("g", { class:"legs", style:"transition:transform .8s cubic-bezier(.3,.7,.2,1); transform-origin:500px 200px; transform-box:view-box" });
    const legL = s("path", { d:"M560 230 L560 330 L640 400 L640 455", stroke:"#c0c4c8", "stroke-width":10, fill:"none", "stroke-linejoin":"round" });
    const legS = s("path", { d:"M440 230 L440 330 L360 400 L360 560", stroke:"#c0c4c8", "stroke-width":10, fill:"none", "stroke-linejoin":"round" });
    legs.append(legL, legS);
    // LED body
    legs.appendChild(s("path", { d:"M430 240 L430 150 Q430 80 500 80 Q570 80 570 150 L570 240Z", fill:"#B3262E", opacity:.9 }));
    legs.appendChild(s("rect", { x:420, y:232, width:160, height:20, rx:4, fill:"#8a1d23" }));
    legs.appendChild(s("path", { d:"M455 200 L455 150 Q455 110 490 104", stroke:"#fff", "stroke-width":8, opacity:.35, fill:"none", "stroke-linecap":"round" }));
    v.appendChild(legs);
    const labR = s("text", { x:600, y:300, "font-family":"Big Shoulders Display", "font-weight":900, "font-size":28, fill:"#F0C25E" }, "LONG LEG (+)");
    const labL = s("text", { x:250, y:300, "font-family":"Big Shoulders Display", "font-weight":900, "font-size":28, fill:"#7FF3FF" }, "SHORT LEG (−)");
    v.append(labR, labL);
    // switch flap: a card flap that lifts the long leg off the + face
    const flap = s("path", { d:"M600 420 L720 380 L730 400 L612 446Z", fill:"#E9DCC0", filter:"url(#fx-paper)", style:"transition:transform .4s; transform-origin:600px 430px; transform-box:view-box" });
    v.appendChild(flap);
    const glow = s("circle", { cx:500, cy:150, r:230, fill:"url(#g-lamp)", opacity:0, style:"transition:opacity .3s" });
    v.insertBefore(glow, legs);
    const dots = s("g"); v.appendChild(dots);
    host.appendChild(v);
    const panel = h("div", { class:"pcard", style:{ position:"absolute", right:"0", top:"0", width:"620px", height:"690px", display:"flex", flexDirection:"column", gap:"16px" } });
    const status = h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"58px", lineHeight:"1", letterSpacing:".04em" } });
    const msg = h("div", { style:{ fontSize:"29px", lineHeight:"1.3" } });
    const ctr = h("div", { style:{ marginTop:"auto", display:"grid", gap:"12px" } });
    panel.append(h("div", { style:{ fontFamily:"var(--f-display)", fontWeight:"900", fontSize:"48px", lineHeight:"1" } }, "LED Lab"), status, msg, ctr); host.appendChild(panel);
    let flipped = false, pressed = false, raf;
    function upd(){
      legs.style.transform = flipped ? "scaleX(-1)" : "none";
      labR.textContent = flipped ? "SHORT LEG (−)" : "LONG LEG (+)"; labL.textContent = flipped ? "LONG LEG (+)" : "SHORT LEG (−)";
      labR.setAttribute("fill", flipped ? "#7FF3FF" : "#F0C25E"); labL.setAttribute("fill", flipped ? "#F0C25E" : "#7FF3FF");
      flap.style.transform = pressed ? "rotate(14deg)" : "none";
      const on = !flipped && pressed;
      glow.setAttribute("opacity", on ? .95 : 0);
      legs.querySelector("path:nth-of-type(3)").setAttribute("fill", on ? "#FF5A5F" : "#B3262E");
      status.textContent = on ? "💡 LIGHT!" : "· OFF ·"; status.style.color = on ? "#B3262E" : "#8a6f5c";
      if (on) msg.innerHTML = "The circuit is a <b>closed loop</b>: current flows from the battery, through the LED and back. <b>Input</b> = pressing; <b>process</b> = current flows; <b>output</b> = light.";
      else if (flipped) msg.innerHTML = "The LED is <b>backwards</b>! An LED is a one-way gate: the <b>long leg must go to +</b>. Flip it back.";
      else msg.innerHTML = "The switch is <b>open</b>: there's a gap, so the loop isn't complete. Press the switch flap to close the circuit.";
      FC.clear(dots); cancelAnimationFrame(raf);
      if (on){
        const L = loop.getTotalLength(), N = 14, ds = Array.from({ length:N }, () => { const d = s("circle", { r:9, fill:"#7FF3FF", filter:"url(#fx-glow)" }); dots.appendChild(d); return d; });
        const t0 = performance.now();
        (function go(t){ const k = ((t - t0)/4000) % 1; ds.forEach((d, i) => { const p = loop.getPointAtLength(((k + i/N) % 1) * L); d.setAttribute("cx", p.x); d.setAttribute("cy", p.y); }); raf = requestAnimationFrame(go); })(t0);
      }
    }
    ctr.append(btn("Press the switch", () => { pressed = !pressed; upd(); }, "on"), btn("Flip the LED ↔", () => { flipped = !flipped; upd(); }, ""));
    upd();
    return { destroy(){ cancelAnimationFrame(raf); } };
  };

  IX.torchbuild = function(host){
    const STEPS = [
      { t:"Collect your parts", d:"1 LED · 1 coin cell (CR2032) · a card strip about 2 × 10 cm · sticky tape. Your teacher counts the coin cells out — and back in!", art:"parts" },
      { t:"Test the light", d:"Slide the coin cell between the LED's legs: <b>long leg on the + side</b> (the side with writing). It lights! If not — flip the cell.", art:"test" },
      { t:"Make the switch", d:"Tape the <b>short leg</b> firmly to the − side. Bend the long leg slightly <b>away</b> from the + side. Now squeezing it closes the circuit = a <b>push switch</b>.", art:"switch" },
      { t:"Make it hands-free", d:"Wrap the card strip into a ring that fits your finger. Tape the torch on top, LED pointing forward.", art:"ring" },
      { t:"Jaguar-Eye finish & test", d:"Decorate the ring as a jaguar (spots, ears) with the LED as its glowing eye. Test it against our 3 specifications.", art:"jaguar" }
    ];
    const v = svg(900, 690, { style:"position:absolute;left:0;top:0;width:900px;height:690px" });
    const stage = s("g"); v.appendChild(s("rect", { width:900, height:690, rx:16, fill:"rgba(0,0,0,.3)" })); v.appendChild(stage);
    host.appendChild(v);
    const cell = (x, y, r) => { const g = s("g"); g.appendChild(s("circle", { cx:x, cy:y, r, fill:"#c7ccd0", stroke:"#8a8f94", "stroke-width":8 })); g.appendChild(s("text", { x, y:y+14, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":r*.4, fill:"#5b6166" }, "+ 3V")); return g; };
    const led = (x, y, sc, lit) => { const g = s("g", { transform:`translate(${x} ${y}) scale(${sc})` }); if (lit) g.appendChild(s("circle", { cy:-40, r:120, fill:"url(#g-lamp)" })); g.appendChild(s("path", { d:"M-40 0 V-60 Q-40 -110 0 -110 Q40 -110 40 -60 V0Z", fill: lit ? "#FF5A5F" : "#B3262E" })); g.appendChild(s("rect", { x:-50, y:-6, width:100, height:14, rx:3, fill:"#8a1d23" })); g.appendChild(s("path", { d:"M-20 8 V90 M20 8 V130", stroke:"#c0c4c8", "stroke-width":8 })); return g; };
    const ART = {
      parts:() => { const g = s("g"); g.appendChild(led(220, 300, 1.4)); g.appendChild(cell(470, 330, 110)); g.appendChild(s("rect", { x:620, y:260, width:200, height:60, rx:6, fill:"#E9DCC0", filter:"url(#fx-paper)" })); g.appendChild(s("circle", { cx:720, cy:470, r:60, fill:"none", stroke:"#C9A97A", "stroke-width":26, opacity:.8 })); return g; },
      test:() => { const g = s("g"); g.appendChild(cell(450, 420, 130)); g.appendChild(led(450, 230, 1.6, true)); return g; },
      switch:() => { const g = s("g"); g.appendChild(cell(450, 420, 130)); g.appendChild(led(450, 230, 1.6, false)); g.appendChild(s("rect", { x:300, y:430, width:120, height:40, fill:"#F4EBD8", opacity:.85, transform:"rotate(-8 360 450)" })); g.appendChild(s("path", { d:"M600 330 q60 -20 90 30", stroke:"#F0C25E", "stroke-width":8, fill:"none", "marker-end":"" })); g.appendChild(s("text", { x:620, y:300, "font-family":"Big Shoulders Display", "font-weight":900, "font-size":34, fill:"#F0C25E" }, "SQUEEZE")); return g; },
      ring:() => { const g = s("g"); g.appendChild(s("ellipse", { cx:450, cy:470, rx:170, ry:70, fill:"none", stroke:"#E9DCC0", "stroke-width":40, filter:"url(#fx-paper)" })); g.appendChild(cell(450, 360, 90)); g.appendChild(led(450, 230, 1.2, false)); return g; },
      jaguar:() => { const g = s("g", { filter:"url(#fx-paper)" }); g.appendChild(s("ellipse", { cx:450, cy:400, rx:220, ry:170, fill:"#D9A23A" })); g.appendChild(s("path", { d:"M280 280 l-20 -110 l100 70z M620 280 l20 -110 l-100 70z", fill:"#D9A23A" })); [[360,330],[540,330],[330,450],[570,450],[450,520],[400,420],[500,420]].forEach(([x,y]) => g.appendChild(s("circle", { cx:x, cy:y, r:22, fill:"none", stroke:"#3b2418", "stroke-width":10 }))); g.appendChild(s("circle", { cx:450, cy:340, r:150, fill:"url(#g-lamp)" })); g.appendChild(s("circle", { cx:450, cy:340, r:34, fill:"#FF5A5F" })); g.appendChild(s("path", { d:"M420 460 q30 20 60 0", stroke:"#3b2418", "stroke-width":10, fill:"none" })); return g; }
    };
    const panel = h("div", { class:"pcard", style:{ position:"absolute", right:"0", top:"0", width:"820px", height:"690px", display:"flex", flexDirection:"column", gap:"18px" } });
    const num = h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"30px", letterSpacing:".14em", color:"#C46A3A" } });
    const tt = h("div", { style:{ fontFamily:"var(--f-display)", fontWeight:"900", fontSize:"64px", lineHeight:"1" } });
    const dd = h("div", { style:{ fontSize:"34px", lineHeight:"1.3" } });
    const safety = h("div", { style:{ fontSize:"24px", padding:"12px 16px", background:"rgba(179,38,46,.1)", borderLeft:"6px solid #B3262E", borderRadius:"0 8px 8px 0" } }, "⚠️ Coin cells are dangerous if swallowed. Never put them in your mouth; they stay at school.");
    const ctr = h("div", { style:{ marginTop:"auto", display:"flex", gap:"12px" } });
    panel.append(num, tt, dd, safety, ctr); host.appendChild(panel);
    let i = 0;
    function go(n){ i = FC.clamp(n, 0, STEPS.length-1); num.textContent = `STEP ${i+1} OF ${STEPS.length}`; tt.textContent = STEPS[i].t; dd.innerHTML = STEPS[i].d; FC.clear(stage); const a = ART[STEPS[i].art](); stage.appendChild(a); a.animate([{ opacity:0, transform:"translateY(20px)" },{ opacity:1, transform:"none" }], { duration:600 }); FC.sfx("paper"); }
    const pb = btn("◂ Back", () => go(i-1), "dark"); pb.style.color = "var(--cacao-ink)";
    ctr.append(pb, btn("Next step ▸", () => go(i+1), "on"));
    go(0);
    return {};
  };

  /* =======================================================
     ART (Fri W1)
     ======================================================= */
  IX.codexobject = function(host){
    const wrap = h("div", { style:{ position:"absolute", left:"0", right:"0", top:"60px", height:"520px", display:"grid", placeItems:"center", perspective:"2000px" } });
    const cx = FC.codex3d({ n:10, pw:150, ph:260 });
    const inner = h("div", { style:{ transform:"scale(1.1)" } }, cx);
    wrap.appendChild(inner); host.appendChild(wrap);
    const cap = h("div", { class:"pcard", style:{ position:"absolute", left:"0", right:"0", bottom:"0", padding:"16px 24px", fontSize:"30px", lineHeight:"1.25" } }, "A codex is folded like a fan (a ‘screenfold’). Bark paper (amate) was coated with white lime plaster, then painted. Press UNFOLD.");
    host.appendChild(cap);
    const ctrl = h("div", { class:"ix-controls", style:{ position:"absolute", right:"0", top:"-118px" } });
    ctrl.append(btn("Fold", () => cx.fold(), "dark"), btn("Unfold", () => { cx.unfold(); cap.innerHTML = "Unfolded, the Dresden Codex is about <b>3.5 metres</b> long — 39 leaves painted on both sides!"; }, "on"));
    host.appendChild(ctrl);
    return {};
  };

  IX.foldguide = function(host){
    const v = svg(1760, 560, { style:"position:absolute;left:0;top:0;width:1760px;height:560px" });
    host.appendChild(v);
    const panel = h("div", { class:"pcard", style:{ position:"absolute", left:"0", right:"0", bottom:"0", height:"118px", padding:"14px 24px", display:"flex", alignItems:"center", gap:"24px" } });
    const num = h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"64px", color:"#B3262E", lineHeight:"1" } });
    const dd = h("div", { style:{ fontSize:"30px", lineHeight:"1.22", flex:"1" } });
    panel.append(num, dd); host.appendChild(panel);
    const g = s("g"); v.appendChild(g);
    const STEPS = [
      "Cut an A3 sheet in half the long way → two long strips (about 15 × 42 cm each).",
      "Overlap the ends by 1 cm and glue them into one long strip.",
      "Make a pencil mark every 8.3 cm along the top → 10 equal panels.",
      "Fold back and forth on the marks, like a fan (a concertina / screenfold).",
      "Press every crease flat. Panel 1 is your COVER — and each Friday you'll fill one new page!"
    ];
    let i = 0;
    function draw(){
      FC.clear(g);
      const strip = (x, y, w, col) => s("rect", { x, y, width:w, height:150, fill:col || "#E9DCC0", filter:"url(#fx-paper)" });
      if (i === 0){ g.appendChild(s("rect", { x:530, y:80, width:700, height:400, fill:"#E9DCC0", filter:"url(#fx-paper)" })); const cut = s("line", { x1:500, x2:1260, y1:280, y2:280, stroke:"#B3262E", "stroke-width":6, "stroke-dasharray":"20 14" }); g.appendChild(cut); g.appendChild(s("text", { x:1270, y:290, "font-family":"Big Shoulders Display", "font-weight":900, "font-size":36, fill:"#B3262E" }, "✂ CUT")); }
      else if (i === 1){ g.appendChild(strip(80, 200, 820)); g.appendChild(strip(880, 200, 820, "#e2d3b3")); g.appendChild(s("rect", { x:880, y:200, width:20, height:150, fill:"#2E9FB0", opacity:.6 })); g.appendChild(s("text", { x:890, y:180, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":32, fill:"#2E9FB0" }, "GLUE 1 cm")); }
      else if (i === 2){ g.appendChild(strip(60, 200, 1640)); for (let k=1;k<10;k++){ g.appendChild(s("line", { x1:60+k*164, x2:60+k*164, y1:190, y2:360, stroke:"#3b2418", "stroke-width":3, "stroke-dasharray":"8 8" })); } for (let k=0;k<10;k++) g.appendChild(s("text", { x:60+k*164+82, y:300, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":44, fill:"#C9A97A" }, k+1)); }
      else {
        const folded = i >= 3; const amp = i === 3 ? 60 : 18; const pw = i === 3 ? 120 : 60;
        const x0 = 880 - pw*5;
        for (let k=0;k<10;k++){
          const xa = x0 + k*pw, xb = xa + pw, ya = 200 + (k%2 ? amp : 0), yb = 200 + ((k+1)%2 ? amp : 0);
          g.appendChild(s("path", { d:`M${xa} ${ya} L${xb} ${yb} L${xb} ${yb+200} L${xa} ${ya+200}Z`, fill: k%2 ? "#d9c7a2" : "#efe3c6", stroke:"#C9A97A", "stroke-width":2, filter:"url(#fx-paper)" }));
          if (k === 0 && i === 4){ g.appendChild(s("text", { x:xa+pw/2, y:ya+120, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":24, fill:"#B3262E" }, "COVER")); }
        }
        void folded;
      }
      num.textContent = i+1; dd.textContent = STEPS[i];
      g.animate([{ opacity:0 },{ opacity:1 }], { duration:500 });
    }
    const ctrl = h("div", { class:"ix-controls", style:{ position:"absolute", right:"0", top:"-118px" } });
    ctrl.append(btn("◂ Back", () => { i = Math.max(0, i-1); draw(); }, "dark"), btn("Next fold ▸", () => { i = Math.min(STEPS.length-1, i+1); draw(); FC.sfx("paper"); }, "on"));
    host.appendChild(ctrl);
    draw();
    return {};
  };

  IX.glyphanatomy = function(host){
    const v = svg(800, 690, { style:"position:absolute;left:0;top:0;width:800px;height:690px" });
    v.appendChild(s("rect", { width:800, height:690, rx:16, fill:"rgba(90,56,37,.08)" }));
    const parts = [
      { k:"main", x:250, y:200, w:330, h:330, t:"MAIN SIGN", d:"The biggest part — often a word sign (a <b>logogram</b>) like <i>b'ahlam</i>, jaguar.", c:"#B3262E" },
      { k:"pre", x:120, y:200, w:110, h:330, t:"PREFIX", d:"Smaller signs attach to the <b>left</b>… usually read <b>first</b>.", c:"#2E9FB0" },
      { k:"super", x:250, y:70, w:330, h:110, t:"SUPERFIX", d:"…or on <b>top</b> — also read early.", c:"#1F7A5A" },
      { k:"post", x:600, y:200, w:110, h:330, t:"POSTFIX", d:"Signs on the <b>right</b> or below (subfix) are read <b>last</b>. Often they're <b>syllables</b> that help spell the word.", c:"#D9A23A" }
    ];
    const els = parts.map(p => {
      const g = s("g", { style:"cursor:pointer" });
      const r = s("rect", { x:p.x, y:p.y, width:p.w, height:p.h, rx:30, fill:"#efe3c6", stroke:"#3b2418", "stroke-width":7, filter:"url(#fx-paper)", style:"transition:fill .3s" });
      g.appendChild(r);
      if (p.k === "main"){ const art = A.GLYPHS.bahlam; art.steps.forEach(st => g.appendChild(s("path", { d:st.d, fill:"none", stroke:"#3b2418", "stroke-width":12, "stroke-linecap":"round", "stroke-linejoin":"round", transform:`translate(${p.x+12} ${p.y+20}) scale(.78)` }))); }
      else if (p.k === "pre"){ [0,1,2].forEach(i => g.appendChild(s("circle", { cx:p.x+55, cy:p.y+80+i*85, r:22, fill:"none", stroke:"#3b2418", "stroke-width":7 }))); }
      else if (p.k === "super"){ g.appendChild(s("path", { d:`M${p.x+40} ${p.y+60} q125 -60 250 0`, fill:"none", stroke:"#3b2418", "stroke-width":9 })); g.appendChild(s("circle", { cx:p.x+165, cy:p.y+66, r:16, fill:"#3b2418" })); }
      else { g.appendChild(s("path", { d:`M${p.x+30} ${p.y+120} h50 v90 h-50z M${p.x+40} ${p.y+250} q15 -24 30 0`, fill:"none", stroke:"#3b2418", "stroke-width":7 })); }
      g.addEventListener("click", e => { e.stopPropagation(); pick(p); });
      g.addEventListener("pointerenter", () => pick(p));
      v.appendChild(g); p.r = r; return p;
    });
    host.appendChild(v);
    const panel = h("div", { class:"pcard", style:{ position:"absolute", right:"0", top:"0", width:"880px", height:"690px", display:"flex", flexDirection:"column", gap:"16px" } });
    const tt = h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"64px", letterSpacing:".06em", lineHeight:"1" } }, "A GLYPH BLOCK");
    const dd = h("div", { style:{ fontSize:"34px", lineHeight:"1.3" } }, "Maya writing is built from blocks. Hover over each part to see how a block fits together.");
    panel.append(tt, dd, h("div", { style:{ marginTop:"auto", fontSize:"28px", lineHeight:"1.3", padding:"16px 20px", background:"rgba(46,159,176,.12)", borderRadius:"10px" } }, "📜 Blocks were read in ", h("b", null, "pairs of columns"), " — left to right, top to bottom, then on to the next pair."));
    host.appendChild(panel);
    function pick(p){ els.forEach(o => o.r.setAttribute("fill", o === p ? "#F4EBD8" : "#efe3c6")); p.r.setAttribute("fill", "#fff"); tt.textContent = p.t; tt.style.color = p.c; dd.innerHTML = p.d; }
    return {};
  };

  IX.drawalong = function(host){
    const keys = Object.keys(A.GLYPHS);
    const v = svg(400, 400, { style:"position:absolute;left:0;top:0;width:690px;height:690px;border-radius:16px;background:#efe3c6;box-shadow:var(--sh-3)" });
    const grid = s("g", { stroke:"rgba(90,56,37,.12)", "stroke-width":1 });
    for (let k=0;k<=400;k+=40){ grid.appendChild(s("line", { x1:k, x2:k, y1:0, y2:400 })); grid.appendChild(s("line", { x1:0, x2:400, y1:k, y2:k })); }
    v.appendChild(grid);
    const ghost = s("g", { opacity:.13 }), ink = s("g"); v.append(ghost, ink);
    host.appendChild(v);
    const panel = h("div", { class:"pcard", style:{ position:"absolute", right:"0", top:"0", width:"1010px", height:"690px", display:"flex", flexDirection:"column", gap:"16px" } });
    const pick = h("div", { style:{ display:"flex", gap:"10px", flexWrap:"wrap" } });
    const nm = h("div", { style:{ fontFamily:"var(--f-display)", fontWeight:"900", fontSize:"64px", lineHeight:"1" } });
    const mean = h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"800", fontSize:"26px", letterSpacing:".12em", textTransform:"uppercase", color:"#B3262E" } });
    const stepT = h("div", { style:{ fontSize:"36px", lineHeight:"1.25", minHeight:"140px" } });
    const prog = h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"24px", letterSpacing:".14em" } });
    const ctr = h("div", { style:{ marginTop:"auto", display:"flex", gap:"12px", flexWrap:"wrap" } });
    panel.append(pick, nm, mean, stepT, prog, ctr); host.appendChild(panel);
    let G, k = 0;
    const pbs = keys.map(key => { const b = btn(A.GLYPHS[key].name, () => load(key), "dark"); b.style.color = "var(--cacao-ink)"; b.style.boxShadow = "inset 0 0 0 2px rgba(90,56,37,.35)"; pick.appendChild(b); return b; });
    function load(key){
      G = A.GLYPHS[key]; k = 0; pbs.forEach((b, i) => b.classList.toggle("on", keys[i] === key));
      nm.textContent = G.name; mean.textContent = `${G.meaning} · say “${G.say}”`;
      FC.clear(ghost); FC.clear(ink);
      G.steps.forEach(st => ghost.appendChild(s("path", { d:st.d, fill:"none", stroke:"#3b2418", "stroke-width":12, "stroke-linecap":"round", "stroke-linejoin":"round" })));
      stepT.textContent = "Press DRAW STEP to see the first line. Students draw each step with you.";
      prog.textContent = `0 / ${G.steps.length}`;
    }
    function draw(){
      if (!G || k >= G.steps.length) return;
      ink.querySelectorAll("path").forEach(p => p.setAttribute("stroke", "#3b2418"));
      const st = G.steps[k];
      const p = s("path", { d:st.d, fill:"none", stroke:"#B3262E", "stroke-width":12, "stroke-linecap":"round", "stroke-linejoin":"round" });
      ink.appendChild(p);
      const L = p.getTotalLength ? p.getTotalLength() : 1000;
      p.style.strokeDasharray = L; p.style.strokeDashoffset = L;
      p.animate([{ strokeDashoffset:L },{ strokeDashoffset:0 }], { duration: FC.motionOK() ? Math.min(3200, 900 + L*2.2) : 1, fill:"forwards", easing:"ease-in-out" });
      stepT.textContent = st.t; k++; prog.textContent = `${k} / ${G.steps.length}`; FC.sfx("paper");
    }
    ctr.append(btn("✎ Draw step", draw, "on"), (() => { const b = btn("Start again", () => load(Object.keys(A.GLYPHS).find(x => A.GLYPHS[x] === G)), "dark"); b.style.color = "var(--cacao-ink)"; return b; })(),
      (() => { const b = btn("Show all", () => { while (G && k < G.steps.length) draw(); }, "dark"); b.style.color = "var(--cacao-ink)"; return b; })());
    load("kin");
    return {};
  };
})(window.FC);
