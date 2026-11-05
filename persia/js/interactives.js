/* ==========================================================
   INTERACTIVES — teacher-run animations (The Royal Road · Week 1 set)
   Each: BM.IX[name](host, cfg, api) → { step?, steps?, destroy? }
   host = absolutely positioned div inside the 1920×1080 stage
   (the .ix-area is 1760 × 690).
   ========================================================== */
(function(BM){
  "use strict";
  const h = BM.h, s = BM.s, svg = BM.svg, A = BM.art, M = BM.map;
  const IX = BM.IX = {};

  /* ---------- helpers ---------- */
  const btn = (label, onclick, cls) => h("button", { class:"ixbtn " + (cls||""), onclick:(e) => { e.stopPropagation(); BM.sfx("tok"); onclick(e); } }, label);
  const toLocal = (el, e) => { const r = el.getBoundingClientRect(); const vb = el.viewBox && el.viewBox.baseVal; const base = el.offsetWidth || (vb && vb.width) || el.clientWidth || r.width; const k = r.width / base || 1; return [(e.clientX - r.left)/k, (e.clientY - r.top)/k]; };
  BM.toLocal = toLocal;
  BM.ixbtn = btn;
  function typeInto(el, text, speed){
    el.textContent = "";
    if (!BM.motionOK()){ el.textContent = text; return () => {}; }
    let i = 0; const t = setInterval(() => { el.textContent = text.slice(0, ++i); if (i >= text.length) clearInterval(t); }, speed || 22);
    return () => clearInterval(t);
  }
  const controls = (host, kids) => { const c = h("div", { class:"ix-controls", style:{ position:"absolute", right:"0", top:"-118px" } }, kids); host.appendChild(c); return c; };
  const panel = (style, kids) => h("div", { class:"ix-panel", style }, kids);
  const setMD = (el, t) => { el.innerHTML = BM.md(t).replace(/\n/g, "<br>"); return el; };
  /* make an element draggable inside host; onDrop(x, y) returns true to keep, false to snap home */
  function draggable(el, host, home, onDrop){
    let d = null;
    el.classList.add("dragcard");
    el.style.left = home.x + "px"; el.style.top = home.y + "px";
    el.addEventListener("pointerdown", e => { e.stopPropagation(); el.setPointerCapture(e.pointerId); const [x,y] = toLocal(host, e); d = { dx:x - el.offsetLeft, dy:y - el.offsetTop }; el.classList.add("dragging"); });
    el.addEventListener("pointermove", e => { if (!d) return; const [x,y] = toLocal(host, e); el.style.left = (x - d.dx) + "px"; el.style.top = (y - d.dy) + "px"; });
    el.addEventListener("pointerup", () => { if (!d) return; d = null; el.classList.remove("dragging"); el.style.transition = "left .45s var(--ease-lift), top .45s var(--ease-lift), transform .3s, box-shadow .3s";
      const cx = el.offsetLeft + el.offsetWidth/2, cy = el.offsetTop + el.offsetHeight/2;
      if (!onDrop(cx, cy)){ el.style.left = home.x + "px"; el.style.top = home.y + "px"; } });
    return { home(){ el.style.left = home.x + "px"; el.style.top = home.y + "px"; }, move(x, y){ el.style.transition = "left .6s var(--ease-lift), top .6s var(--ease-lift)"; el.style.left = x + "px"; el.style.top = y + "px"; } };
  }

  /* generic two- or three-bin sorter with emoji / artefact cards
     cfg: { bins:[{id,t,d,c}], cards:[{t, bin, why, icon?, art?}], tip, cardW, cardH } */
  function sorter(host, cfg){
    const BW = (1760 - (cfg.bins.length - 1)*20)/cfg.bins.length;
    cfg.bins.forEach((b, i) => { b.x = i*(BW + 20); b.w = BW; host.appendChild(h("div", { style:{ position:"absolute", left:b.x+"px", top:"0", width:b.w+"px", height:(cfg.binH || 300)+"px", borderRadius:"16px", border:`4px dashed ${b.c}`, background:"rgba(0,0,0,.25)", padding:"14px 20px" } },
      h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"40px", letterSpacing:".14em", color:b.c, lineHeight:"1" } }, b.t), h("div", { style:{ fontSize:"22px", opacity:".85" } }, b.d))); });
    const binH = cfg.binH || 300;
    const tip = h("div", { class:"pcard ix-tip", style:{ left:"0", right:"0", top:(binH + 14)+"px", minHeight:"64px" } }, cfg.tip || "Drag each card into a box. Ask the class first, then drop it!");
    host.appendChild(tip);
    const placed = {}, n = cfg.cards.length, W = cfg.cardW || Math.min(280, (1760 - (n-1)*14)/n), CH = cfg.cardH || 250;
    const sc = cfg.scale || .58, per = b => Math.max(1, Math.floor(b.w/(W*sc + 12)));
    const slotPos = (b, slot) => ({ x: b.x + 14 + (slot % per(b))*(W*sc + 12), y: 64 + Math.floor(slot/per(b))*(CH*sc + 10) });
    cfg.cards.forEach((c, i) => {
      c.id = c.id || "c" + i;
      const home = { x: i*(W + 14) + 2, y: binH + 100 + (cfg.homeDy || 0) };
      const inner = c.art ? A.artefactBox(c.art, `width:100%;height:${CH - 100}px;pointer-events:none`) : h("div", { style:{ fontSize:(CH*.42)+"px", lineHeight:"1", textAlign:"center", marginTop:"6px" } }, c.icon || "•");
      const card = h("div", { class:"pcard hov", style:{ width:W+"px", height:CH+"px", padding:"10px 12px", zIndex:"2" } }, inner, h("div", { style:{ fontSize:(c.art ? 21 : W < 200 ? 21 : 26)+"px", fontWeight:"700", lineHeight:"1.12", textAlign:"center", marginTop:"6px" } }, c.t));
      host.appendChild(card);
      const dr = draggable(card, host, home, (x, y) => {
        const b = cfg.bins.find(bb => x > bb.x && x < bb.x + bb.w && y < binH + 30);
        if (!b){ delete placed[c.id]; card.style.transform = ""; return false; }
        placed[c.id] = b.id; const slot = Object.keys(placed).filter(k => placed[k] === b.id).indexOf(c.id); const p = slotPos(b, slot);
        card.style.transform = `scale(${sc})`; card.style.transformOrigin = "top left"; card.style.left = p.x + "px"; card.style.top = p.y + "px";
        const ok = b.id === c.bin || c.bin === "*";
        card.style.boxShadow = `0 0 0 6px ${ok ? "#3FBF86" : "#E0566F"}, var(--sh-2)`;
        tip.innerHTML = (ok ? '<b style="color:#0B7A55">✓ </b>' : '<b style="color:#B0213B">✗ Not quite. </b>') + BM.md(c.why);
        BM.sfx(ok ? "ok" : "no"); return true;
      });
      c.el = card; c.dr = dr;
    });
    controls(host, [
      btn("Reset", () => { Object.keys(placed).forEach(k => delete placed[k]); cfg.cards.forEach(c => { c.dr.home(); c.el.style.transform = ""; c.el.style.boxShadow = ""; }); tip.textContent = cfg.tip || "Drag each card into a box."; }, "dark"),
      btn("Show answers", () => { Object.keys(placed).forEach(k => delete placed[k]); cfg.cards.forEach(c => { const b = cfg.bins.find(bb => bb.id === (c.bin === "*" ? cfg.bins[0].id : c.bin)); placed[c.id] = b.id; const slot = Object.keys(placed).filter(k => placed[k] === b.id).indexOf(c.id); const p = slotPos(b, slot); c.el.style.transform = `scale(${sc})`; c.el.style.transformOrigin = "top left"; c.dr.move(p.x, p.y); c.el.style.boxShadow = "0 0 0 6px #3FBF86, var(--sh-2)"; });
        tip.innerHTML = BM.md(cfg.done || "All sorted!"); }, "on")
    ]);
    return {};
  }
  IX._sorter = sorter;
  IX._h = { btn, controls, panel, setMD, draggable, typeInto, sorter };

  /* =======================================================
     1. THE SHATTERING SEAL — opening cinematic (Mon W1)
     ======================================================= */
  IX.opening = function(host){
    host.style.cssText += ";position:absolute;inset:0;overflow:hidden;background:#0B1024;";
    const W = 1920, H = 1080;
    const scene = svg(W, H, { style:"position:absolute;inset:0;width:100%;height:100%" });
    scene.innerHTML = `<defs><linearGradient id="op-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0B1024"/><stop offset=".55" stop-color="#1B2C66"/><stop offset="1" stop-color="#3a2a1c"/></linearGradient></defs><rect width="${W}" height="${H}" fill="url(#op-sky)"/>`;
    scene.appendChild(A.stars(W, H*.6, 21, 220));
    scene.appendChild(A.mountains(W, H, 31, ["#2e2747","#221c3a"], { top:640, bottom:700, amp:200, snowLayers:0, peaks:6 }));
    const palace = s("g", { opacity:.9 });
    [1380,1450,1520,1590,1660,1730].forEach((x, i) => palace.appendChild(A.column(x, 760, 230 + (i%2)*20, "#2c2648")));
    palace.appendChild(s("rect", { x:1340, y:756, width:430, height:24, fill:"#2c2648" }));
    scene.appendChild(palace);
    scene.appendChild(A.dunes(W, H, 9, ["#5a4024","#46311b"], { top:820, step:90, amp:70 }));
    const road = s("path", { d:"M-20 1020 C 400 960, 800 900, 1100 860 S 1450 790, 1560 780", fill:"none", stroke:"#E8B84A", "stroke-width":8, "stroke-dasharray":"18 14", opacity:.8 });
    scene.appendChild(road);
    // stations along the road
    [[240,985],[560,935],[860,895],[1150,850],[1400,800]].forEach(([x, y]) => scene.appendChild(s("circle", { cx:x, cy:y, r:9, fill:"#F6D27A" })));
    const cara = A.caravan(120, 905, .7, "#1a1209", 4); scene.appendChild(cara);
    const rider = s("g", { opacity:0, style:"transition:opacity .6s" });
    const horse = s("g", { fill:"#120c06" });
    horse.appendChild(s("ellipse", { cx:0, cy:0, rx:40, ry:16 })); horse.appendChild(s("path", { d:"M30 -6 L58 -34 L66 -28 L44 2Z" })); horse.appendChild(s("path", { d:"M-30 6 L-44 40 M-20 8 L-14 42 M22 8 L34 40 M30 6 L16 42", stroke:"#120c06", "stroke-width":7 })); horse.appendChild(s("path", { d:"M-6 -16 q6 -30 18 -26 q6 4 0 26z" })); horse.appendChild(s("circle", { cx:6, cy:-48, r:8 })); horse.appendChild(s("path", { d:"M-40 -4 q-20 -10 -30 6", stroke:"#120c06", "stroke-width":6, fill:"none" }));
    rider.appendChild(horse); scene.appendChild(rider);
    // the Seal, high above the palace
    const sealG = h("div", { style:{ position:"absolute", left:"1260px", top:"110px", width:"420px", height:"420px", opacity:"0", transition:"opacity 1.4s, transform 1.4s", transform:"scale(.8)" } });
    const seal = A.sealArt([1,2,3,4,5,6,7,8,9,10]); seal.setAttribute("style", "width:100%;height:100%;filter:drop-shadow(0 0 40px rgba(246,210,122,.55))");
    sealG.appendChild(seal);
    host.appendChild(scene); host.appendChild(sealG);
    // fragments that fly away
    const fragHost = svg(600, 600, { style:"position:absolute;left:1260px;top:110px;width:420px;height:420px;overflow:visible;pointer-events:none" });
    const frags = Array.from({ length:10 }, (_, k) => { const p = s("path", { d:seal.fragPath(k), fill:"#E8B84A", stroke:"#FBE7B0", "stroke-width":3, opacity:0, style:"transform-box:fill-box;transform-origin:center" }); fragHost.appendChild(p); return p; });
    host.appendChild(fragHost);
    // sandstorm (canvas)
    const cv = h("canvas", { width:W, height:H, style:{ position:"absolute", inset:"0", width:"100%", height:"100%", pointerEvents:"none" } });
    host.appendChild(cv);
    const ctx = cv.getContext("2d");
    const grains = Array.from({ length:900 }, () => ({ x:Math.random()*W, y:Math.random()*H, v:6 + Math.random()*16, r:.6 + Math.random()*2.2 }));
    let storm = 0, target = 0, raf;
    function draw(){
      storm += (target - storm)*.04;
      ctx.clearRect(0,0,W,H);
      if (storm > .01){
        ctx.fillStyle = `rgba(150,105,55,${storm*.35})`; ctx.fillRect(0,0,W,H);
        ctx.fillStyle = `rgba(232,190,120,${storm*.8})`;
        grains.forEach(g => { g.x -= g.v*(.5 + storm); g.y += Math.sin(g.x*.01)*1.4; if (g.x < -10){ g.x = W + 10; g.y = Math.random()*H; } ctx.beginPath(); ctx.arc(g.x, g.y, g.r, 0, 6.283); ctx.fill(); });
      }
      raf = requestAnimationFrame(draw);
    }
    if (BM.motionOK()) draw();
    // title & caption
    const cap = h("div", { style:{ position:"absolute", left:"120px", bottom:"110px", maxWidth:"1180px", fontFamily:"var(--f-display)", fontWeight:"600", fontSize:"50px", lineHeight:"1.18", color:"#FBF3E0", textShadow:"0 4px 30px rgba(0,0,0,.9)" } });
    const kick = h("div", { class:"s-kicker", style:{ position:"absolute", left:"120px", top:"130px", color:"var(--gold-hi)" } }, "Long ago · the Royal Road");
    host.append(kick, cap);
    const shadow = h("div", { style:{ position:"absolute", left:"880px", top:"470px", width:"120px", height:"120px", opacity:"0", transition:"opacity 1.5s" } });
    const sh = svg(120, 120); sh.appendChild(s("path", { d:"M20 110 L30 70 Q34 50 52 46 L70 30 L80 34 L72 52 Q90 60 92 80 L100 110 L88 110 L80 86 L48 88 L36 110Z", fill:"#07040a" })); sh.appendChild(s("path", { d:"M56 44 q4 -24 14 -22 q8 4 2 22z", fill:"#07040a" })); sh.appendChild(s("path", { d:"M60 30 h10", stroke:"#c9ced6", "stroke-width":4 }));
    shadow.appendChild(sh); host.appendChild(shadow);
    const title = h("div", { style:{ position:"absolute", inset:"0", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"flex-end", paddingBottom:"100px", opacity:"0", transition:"opacity 1.2s", pointerEvents:"none", textAlign:"center", background:"radial-gradient(60% 50% at 50% 70%, rgba(11,16,36,.75), transparent)" } },
      h("div", { class:"s-kicker", style:{ justifyContent:"center", color:"var(--gold-hi)" } }, "Persia: empire, cities, creatures and the God of all nations"),
      h("div", { class:"s-title", style:{ fontSize:"150px", margin:"0", color:"#FBF3E0", textShadow:"0 10px 60px rgba(0,0,0,.7)" } }, "The Royal Road"),
      h("div", { style:{ fontSize:"36px", opacity:".92", marginTop:"10px", color:"#FBF3E0" } }, "Quest for the Seal of the Kings · ten fragments · one big question: what makes a kingdom last?"));
    host.appendChild(title);
    const lines = [
      "Long ago, the greatest road in the world ran from the sea in the west to the palaces of the east.",
      "Kings sent messages along it faster than any single horse could gallop.",
      "At the end of the road was a treasure: the Seal of the Kings, which could open any gate in the empire.",
      "But one night a terrible sandstorm swept down from the desert and shattered the Seal into ten fragments, scattering them along the road and across the centuries.",
      "Shirin, the youngest scribe of the royal archive, has found an old Road Scroll that opens a different century every week. She needs a caravan… and she has chosen you. But be careful. Someone else is looking for the fragments too…",
      ""
    ];
    const SCAT = [[-1150,-60],[-980,260],[-760,-120],[-620,330],[-420,40],[-250,380],[-60,-80],[120,260],[260,-60],[-860,120]];
    let cancel, riderAnim;
    function go(i){
      if (cancel) cancel();
      cancel = typeInto(cap, lines[i] || "", 24);
      cap.style.opacity = i >= 5 ? "0" : "1";
      kick.textContent = ["Long ago · the Royal Road","The king's couriers","The Seal of the Kings","One terrible night…","Shirin's Road Scroll",""][i] || "";
      rider.style.opacity = i === 1 ? "1" : "0";
      if (riderAnim) riderAnim.cancel();
      if (i === 1 && BM.motionOK()){ const len = road.getTotalLength(); riderAnim = { t0:performance.now(), cancel(){ this.dead = true; } }; const ra = riderAnim; const tick = now => { if (ra.dead) return; const t = Math.min(1, (now - ra.t0)/4200), p = road.getPointAtLength(len*t); horse.setAttribute("transform", `translate(${p.x} ${p.y - 40}) scale(.9)`); if (t < 1) requestAnimationFrame(tick); }; requestAnimationFrame(tick); }
      else horse.setAttribute("transform", "translate(900 860) scale(.9)");
      sealG.style.opacity = i === 2 ? "1" : "0"; sealG.style.transform = i === 2 ? "scale(1)" : "scale(.8)";
      target = i === 3 ? 1 : i === 4 ? .25 : 0;
      frags.forEach((p, k) => {
        if (i === 3){ p.style.transition = `transform 2.6s cubic-bezier(.2,.7,.2,1) ${k*.08}s, opacity .4s`; p.setAttribute("opacity", 1); requestAnimationFrame(() => { p.style.transform = `translate(${SCAT[k][0]}px, ${SCAT[k][1]}px) rotate(${(k*67)%360 - 180}deg) scale(.35)`; }); }
        else if (i === 4){ p.setAttribute("opacity", .9); p.style.transition = "opacity 1s"; }
        else { p.style.transition = "none"; p.style.transform = "none"; p.setAttribute("opacity", 0); }
      });
      if (i === 3) BM.sfx("zap");
      shadow.style.opacity = i === 4 ? "1" : "0";
      title.style.opacity = i >= 5 ? "1" : "0";
      if (i >= 5){ frags.forEach(p => p.setAttribute("opacity", .55)); BM.sfx("chime"); }
    }
    go(0);
    return { steps:5, step:go, destroy(){ cancelAnimationFrame(raf); if (cancel) cancel(); if (riderAnim) riderAnim.cancel(); } };
  };

  /* =======================================================
     2. ZOOM TO PERSIA — from Aotearoa to Iran (Mon W1)
     ======================================================= */
  IX.zoompersia = function(host){
    const G = M.globe(330);
    G.setAttribute("style", "position:absolute;left:30px;top:-20px;width:700px;height:700px;overflow:visible;transition:opacity 1s");
    const NZ = { lon:172.6, lat:-43.5, t:"Aotearoa New Zealand · us", col:"#62D39F" }, IR = { lon:53.7, lat:32.4, t:"Iran (ancient Persia)", col:"#E8B84A" };
    let cur = [172.6, -30];
    G.draw(cur[0], cur[1], [NZ, IR]);
    const map = M.persia({ theme:"paper", labels:true, regions:["elam","media","pars"], iran:true, ranges:true, cities:["susa","ecbatana","pasargadae","persepolis","babylon"] });
    map.setAttribute("style", "position:absolute;left:0;top:-20px;width:1100px;height:auto;border-radius:12px;box-shadow:var(--sh-3);opacity:0;transition:opacity 1s");
    const regions = map.groups.regions; regions.style.transition = "opacity .8s"; regions.style.opacity = "0";
    host.append(G, map);
    const info = panel({ left:"1130px", right:"0", top:"-20px", bottom:"0" }, [h("h4", null, "Where is Persia?"), setMD(h("p"), "Start at home: **Aotearoa New Zealand**. Persia is a long way north-west, across Australia and Asia.")]);
    host.appendChild(info);
    const REG = {
      elam:["Elam · the Elamites","The **Elamites** lived in the **south-western lowlands**. Their capital, **Susa**, is one of the oldest cities in the world. Genesis 10:22 names **Elam**."],
      media:["Media · the Medes","The **Medes** lived in the **north-west**, in and around the Zagros Mountains. Their capital was **Ecbatana** (modern Hamadan)."],
      pars:["Pars · the Persians","The **Persians** came from **Pars** in the **south-west**. Later, the kings built **Pasargadae** and **Persepolis** here. ‘Persia’ comes from ‘Pars’."]
    };
    const regBtns = h("div", { style:{ display:"flex", gap:"10px", marginTop:"16px", flexWrap:"wrap" } }, Object.keys(REG).map(k => btn(REG[k][0].split(" · ")[1], () => showReg(k), "dark")));
    info.appendChild(regBtns); regBtns.style.display = "none";
    function showReg(k){ info.querySelector("h4").textContent = REG[k][0]; setMD(info.querySelector("p"), REG[k][1]); map.querySelectorAll(".pm-region").forEach(g => g.style.opacity = g.dataset.id === k ? "1" : ".25"); BM.sfx("paper"); }
    let anim;
    function spin(to, ms){ if (anim) cancelAnimationFrame(anim); const from = cur.slice(), t0 = performance.now(), dur = BM.motionOK() ? ms : 1; const tick = now => { const t = Math.min(1, (now - t0)/dur), e = t < .5 ? 2*t*t : 1 - Math.pow(-2*t + 2, 2)/2; cur = [from[0] + (to[0] - from[0])*e, from[1] + (to[1] - from[1])*e]; G.draw(cur[0], cur[1], [NZ, IR]); if (t < 1) anim = requestAnimationFrame(tick); }; anim = requestAnimationFrame(tick); }
    function step(i){
      G.style.opacity = i <= 1 ? "1" : "0"; map.style.opacity = i >= 2 ? "1" : "0";
      regions.style.opacity = i >= 3 ? "1" : "0"; regBtns.style.display = i >= 3 ? "flex" : "none";
      map.querySelectorAll(".pm-region").forEach(g => g.style.opacity = "1");
      if (i === 0){ spin([172.6, -30], 600); info.querySelector("h4").textContent = "Where is Persia?"; setMD(info.querySelector("p"), "Start at home: **Aotearoa New Zealand**. Persia is a long way north-west, across Australia and Asia."); }
      if (i === 1){ spin([53.7, 28], 3200); info.querySelector("h4").textContent = "Across the world"; setMD(info.querySelector("p"), "Ancient **Persia** was centred on what is now **Iran**, on a high **plateau** between the **Persian Gulf** and the **Caspian Sea**."); }
      if (i === 2){ info.querySelector("h4").textContent = "The land of Iran"; setMD(info.querySelector("p"), "Mountains ring the plateau: the **Zagros** in the west and the **Alborz** in the north. The dashed line shows **Iran today**."); }
      if (i === 3){ info.querySelector("h4").textContent = "Three peoples"; setMD(info.querySelector("p"), "Before the empire, three peoples lived here: the **Elamites**, the **Medes** and the **Persians**. Tap a name to find out where."); BM.sfx("paper"); }
    }
    step(0);
    controls(host, [btn("Spin to Persia", () => step(1), "dark"), btn("Show the land", () => step(2), "dark"), btn("Three peoples", () => step(3), "on")]);
    return { steps:3, step, destroy(){ if (anim) cancelAnimationFrame(anim); } };
  };

  /* =======================================================
     3. TIMELINE RIBBON — BC counts down (Mon W1)
     ======================================================= */
  IX.timeline = function(host){
    const EV = [
      { y:"very early", t:"Susa, the Elamite capital", c:"#C2593A" },
      { y:"559 BC", t:"Cyrus the Great begins to rule", c:"#1E3A8A" },
      { y:"539 BC", t:"Cyrus takes Babylon", c:"#1E3A8A" },
      { y:"c. 518 BC", t:"Darius begins Persepolis", c:"#0F7F74" },
      { y:"330 BC", t:"Alexander burns Persepolis", c:"#B0213B" },
      { y:"BC | AD", t:"Jesus is born", c:"#B9770A" },
      { y:"AD 2027", t:"Today: us!", c:"#0B7A55" }
    ];
    const RY = 120, L = 40, R = 1720, N = EV.length;
    const slotX = i => L + (R - L)*(i + .5)/N;
    const rib = svg(1760, 300, { style:"position:absolute;left:0;top:-30px;width:1760px;height:300px;overflow:visible" });
    rib.appendChild(s("rect", { x:L, y:RY - 26, width:R - L, height:52, rx:26, fill:"#F4E3C1", opacity:.95 }));
    const zero = slotX(5) - (R - L)/N/2;
    rib.appendChild(s("rect", { x:L, y:RY - 26, width:zero - L, height:52, rx:26, fill:"#1E3A8A", opacity:.35 }));
    rib.appendChild(s("line", { x1:zero, x2:zero, y1:RY - 60, y2:RY + 60, stroke:"#B9770A", "stroke-width":6 }));
    rib.appendChild(s("text", { x:(L + zero)/2, y:RY + 92, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":32, "letter-spacing":"3", fill:"#F6D27A" }, "BC · years count DOWN  →  539 comes before 518"));
    rib.appendChild(s("text", { x:(zero + R)/2 + 60, y:RY + 92, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":32, "letter-spacing":"3", fill:"#62D39F" }, "AD · count UP →"));
    for (let i=0;i<N;i++){ rib.appendChild(s("circle", { cx:slotX(i), cy:RY, r:13, fill:"#fff", stroke:"#2B1B10", "stroke-width":3 })); rib.appendChild(s("text", { x:slotX(i), y:RY + 8, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":18, fill:"#2B1B10" }, String(i+1))); }
    host.appendChild(rib);
    const order = [3,6,0,5,2,4,1]; // shuffled
    const CW = 228, slots = new Array(N).fill(null);
    const tip = h("div", { class:"pcard ix-tip", style:{ left:"0", right:"0", top:"590px" } }, "Drag each card to a dot on the ribbon. Earliest on the left!");
    host.appendChild(tip);
    const cards = order.map((ei, k) => {
      const e = EV[ei];
      const c = h("div", { class:"pcard hov", style:{ width:CW+"px", height:"200px", padding:"14px 16px", zIndex:"2", boxShadow:`inset 0 8px 0 ${e.c}, var(--sh-3)` } },
        h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"36px", color:e.c, lineHeight:"1" } }, e.y),
        h("div", { style:{ fontSize:"25px", fontWeight:"700", lineHeight:"1.15", marginTop:"10px" } }, e.t));
      const home = { x: k*(CW + 22) + 40, y:360 };
      c.ei = ei;
      c.dr = draggable(c, host, home, (x, y) => {
        if (y > 330){ const was = slots.indexOf(c); if (was >= 0) slots[was] = null; c.style.boxShadow = `inset 0 8px 0 ${e.c}, var(--sh-3)`; return false; }
        let best = 0; for (let i=1;i<N;i++) if (Math.abs(slotX(i) - x) < Math.abs(slotX(best) - x)) best = i;
        const was = slots.indexOf(c); if (was >= 0) slots[was] = null;
        if (slots[best]){ const other = slots[best]; other.dr.home(); other.style.boxShadow = `inset 0 8px 0 ${EV[other.ei].c}, var(--sh-3)`; }
        slots[best] = c; c.dr.move(slotX(best) - CW/2, RY + 90); BM.sfx("tok"); return true;
      });
      host.appendChild(c); return c;
    });
    const check = () => { let right = 0; slots.forEach((c, i) => { if (!c) return; const ok = c.ei === i; if (ok) right++; c.style.boxShadow = `0 0 0 6px ${ok ? "#3FBF86" : "#E0566F"}, var(--sh-2)`; }); tip.innerHTML = BM.md(right === N ? "**✓ All in order!** BC dates count *down* to the line, then AD dates count *up*." : `**${right} of ${N}** in the right place. Remember: a *bigger* BC number is *earlier*.`); BM.sfx(right === N ? "ok" : "no"); };
    controls(host, [
      btn("Check order", check, "dark"),
      btn("Show answers", () => { cards.forEach(c => { const i = c.ei; slots[i] = c; c.dr.move(slotX(i) - CW/2, RY + 90); }); setTimeout(check, 650); }, "on"),
      btn("Reset", () => { slots.fill(null); cards.forEach(c => { c.dr.home(); c.style.boxShadow = `inset 0 8px 0 ${EV[c.ei].c}, var(--sh-3)`; }); tip.textContent = "Drag each card to a dot on the ribbon. Earliest on the left!"; }, "dark")
    ]);
    return {};
  };

  /* =======================================================
     4. SOURCE SORTER — primary or secondary? (Mon W1)
     ======================================================= */
  IX.sourcesorter = function(host){
    return sorter(host, {
      bins:[{ id:"P", t:"PRIMARY", d:"made at the time, by people who were there (or lived then)", c:"#62D39F" }, { id:"S", t:"SECONDARY", d:"made later, about the past, using other sources", c:"#8FA8F0" }],
      cards:[
        { art:"cylinder", t:"The Cyrus Cylinder (539 BC)", bin:"P", why:"**Primary.** A clay cylinder written in Babylonian cuneiform soon after Cyrus took Babylon. It was made *for Cyrus*, so ask: who wrote it, and why?" },
        { art:"behistun", t:"The Behistun inscription", bin:"P", why:"**Primary.** Carved on a cliff for Darius I in **three languages**. A king's own words about himself: useful, but one-sided." },
        { art:"herodotus", t:"Herodotus, a Greek writer (400s BC)", bin:"P", why:"**Primary for his time, but an outsider.** Herodotus was Greek, writing about the wars of Greece's enemy. Would a Persian tell it the same way? Historians compare." },
        { art:"webpage", t:"A museum web page today", bin:"S", why:"**Secondary.** Written recently by experts, using other sources." },
        { art:"app", t:"This app!", bin:"S", why:"**Secondary!** We made it recently, using other sources. That's why every fact has a source link." },
        { art:"ezra", t:"Ezra, Nehemiah & Esther", bin:"P", why:"**Ancient sources** written by people living under Persian rule. Historians of every belief use them for this period; as Christians we also trust them as God's Word." }
      ],
      tip:"Hold up each card. Class votes: PRIMARY or SECONDARY? Then drag it.",
      done:"**A historian's two questions:** *Who made this, and why?* and *How can I check it against another source?*"
    });
  };

  /* =======================================================
     10. PLATEAU FLYOVER — a cut-paper relief map tilts (Tue W1)
     ======================================================= */
  IX.plateau = function(host){
    const full = M.persia({ theme:"paper", labels:true, ranges:true, deserts:true, cities:["tehran","yazd","susa","persepolis","ecbatana","damavand"], rivers:true });
    const mk = () => BM.svg(M.W, M.H, { style:"position:absolute;inset:0;width:100%;height:100%;overflow:visible" });
    const base = full, relief = mk(), top = mk();
    relief.appendChild(full.groups.ranges); top.appendChild(full.groups.cities);
    // Lut thermometer call-out
    const [lx, ly] = M.proj(58.6, 30.4);
    const hot = s("g", { opacity:0, style:"transition:opacity .8s" });
    hot.appendChild(s("circle", { cx:lx, cy:ly, r:70, fill:"#C2593A", opacity:.35 }));
    hot.appendChild(s("rect", { x:lx + 70, y:ly - 120, width:210, height:96, rx:14, fill:"#B0213B" }));
    hot.appendChild(s("text", { x:lx + 175, y:ly - 60, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":52, fill:"#fff" }, "70.7 °C"));
    hot.appendChild(s("text", { x:lx + 175, y:ly - 30, "text-anchor":"middle", "font-family":"Atkinson Hyperlegible", "font-size":17, fill:"#fff" }, "ground temperature, 2005 (NASA)"));
    top.appendChild(hot);
    const stage = h("div", { style:{ position:"absolute", left:"0", top:"-10px", width:"1086px", height:"675px", perspective:"1800px" } });
    const rig = h("div", { style:{ position:"absolute", inset:"0", transformStyle:"preserve-3d", transition:"transform 2.2s cubic-bezier(.3,.7,.2,1)" } });
    const L = (el, z) => { const w = h("div", { style:{ position:"absolute", inset:"0", transformStyle:"preserve-3d", transition:"transform 2.2s cubic-bezier(.3,.7,.2,1)" } }, el); w.dataset.z = z; rig.appendChild(w); return w; };
    base.setAttribute("style", "position:absolute;inset:0;width:100%;height:100%;border-radius:12px;box-shadow:var(--sh-3)");
    const lb = L(base, 0), lr = L(relief, 60), lt = L(top, 110);
    stage.appendChild(rig); host.appendChild(stage);
    const info = panel({ left:"1120px", right:"0", top:"-10px", bottom:"0" }, [h("h4"), h("p")]);
    host.appendChild(info);
    const TXT = [
      ["A map from above","This is the land of **Iran**, where ancient Persia was centred. Seas lie to the north (**Caspian**) and south (**Persian Gulf**)."],
      ["Lift the mountains","Tilt the map. High **mountains** run around much of the edge: the **Zagros** in the west (about **1,600 km** long) and the **Alborz** in the north."],
      ["A bowl of high desert","In the middle is a high **plateau** with deserts: the salt desert **Dasht-e Kavir** and the **Dasht-e Lut**. Towns grew in the mountains around them, not in the middle."],
      ["One of the hottest places on Earth","NASA satellites measured a ground temperature of **70.7 °C** in the **Lut Desert** in 2005. ❓ *Where would you NOT build a town? Why?*"],
      ["Back to flat","Back to the paper map. Where do you think most towns are? (Near the mountains, where there is water.)"]
    ];
    function step(i){
      const tilt = i >= 1 && i <= 3;
      rig.style.transform = tilt ? `rotateX(52deg) rotateZ(${i === 3 ? -14 : -6}deg) translateY(${i === 3 ? 40 : 10}px) scale(.92)` : "none";
      [lb, lr, lt].forEach(l => l.style.transform = tilt ? `translateZ(${l.dataset.z}px)` : "none");
      full.groups.deserts.style.transition = "opacity .8s"; full.groups.deserts.style.opacity = i === 1 ? ".35" : "1";
      relief.style.filter = i === 2 ? "saturate(.4) opacity(.6)" : "none";
      hot.setAttribute("opacity", i === 3 ? 1 : 0);
      info.querySelector("h4").textContent = TXT[i][0]; setMD(info.querySelector("p"), TXT[i][1]);
      if (i > 0) BM.sfx("paper");
    }
    step(0);
    return { steps:4, step };
  };

  /* =======================================================
     11. WHY SETTLE HERE? — six reasons on one good site (Tue W1)
     ======================================================= */
  IX.settlesix = function(host){
    const W = 1100, H = 660;
    const v = svg(W, H, { style:"position:absolute;left:0;top:-10px;width:1100px;height:660px;border-radius:12px;box-shadow:var(--sh-3)" });
    v.appendChild(s("rect", { width:W, height:H, fill:"#cfe4dd" }));
    v.appendChild(A.mountains(W, H, 14, ["#9c8a6c","#8a775a"], { top:200, bottom:260, amp:200, snowLayers:1, snowColor:"#f4f1ea", peaks:5 }));
    v.appendChild(s("path", { d:`M0 330 Q 550 290 1100 320 V660 H0Z`, fill:"#EAD6AE" }));
    v.appendChild(s("rect", { y:300, width:W, height:360, fill:"url(#p-sand)" }));
    // spring + stream from the mountains
    v.appendChild(s("path", { d:"M520 300 C 540 360, 500 420, 560 480 S 620 600, 600 660", stroke:"#2b8fb3", "stroke-width":12, fill:"none", "stroke-linecap":"round" }));
    v.appendChild(s("circle", { cx:520, cy:300, r:18, fill:"#2b8fb3" }));
    // fields
    for (let i=0;i<6;i++) v.appendChild(s("rect", { x:620 + (i%3)*90, y:420 + Math.floor(i/3)*70, width:80, height:60, fill: i % 2 ? "#8fbf6a" : "#a6c97c", transform:"skewX(-10)" }));
    // hill with walls
    v.appendChild(s("path", { d:"M300 470 Q 380 360 470 470Z", fill:"#b89a6a" }));
    v.appendChild(s("path", { d:"M330 440 h110 v-26 h-20 v10 h-20 v-10 h-30 v10 h-20 v-10 h-20z", fill:"#8a6a3c" }));
    // road crossing
    v.appendChild(s("path", { d:"M0 560 C 300 520, 600 560, 1100 500", stroke:"#B0213B", "stroke-width":8, "stroke-dasharray":"16 10", fill:"none" }));
    v.appendChild(A.caravan(80, 470, .45, "#3a2614", 3));
    // clay pit & quarry
    v.appendChild(s("ellipse", { cx:200, cy:610, rx:70, ry:22, fill:"#a9774b" }));
    v.appendChild(s("path", { d:"M860 300 l40 -50 l60 10 l30 40z", fill:"#9c8a6c" }));
    // shade trees
    [[700,350],[760,340],[820,355]].forEach(([x, y]) => v.appendChild(A.oak(x, y, 70, "#4a7a4a")));
    // houses (the town)
    [[430,520],[470,540],[510,515],[450,575],[500,580]].forEach(([x, y]) => { v.appendChild(s("rect", { x, y, width:34, height:26, fill:"#d4a96a" })); v.appendChild(s("rect", { x:x+12, y:y-14, width:10, height:14, fill:"#b0844a" })); });
    host.appendChild(v);
    const R = [
      { k:"water", icon:"💧", t:"Water", x:520, y:300, d:"A **spring** at the foot of the mountains, and a stream. Without water, nobody can live here." },
      { k:"food", icon:"🌾", t:"Food & farmland", x:710, y:470, d:"Flat, **fertile** ground near water for crops and animals." },
      { k:"defence", icon:"🛡️", t:"Defence", x:385, y:420, d:"A **hill** to see enemies coming, and walls on top." },
      { k:"trade", icon:"🐪", t:"Trade route", x:200, y:540, d:"A **road** where caravans pass: traders bring goods, news and money." },
      { k:"materials", icon:"🧱", t:"Building materials", x:200, y:610, d:"**Clay** for mud bricks, **stone** from the hills, a little timber." },
      { k:"climate", icon:"🌤️", t:"Climate", x:760, y:330, d:"Not too hot, cold or dry: the foothills are cooler than the desert plain, with some shade." }
    ];
    const pins = s("g"); v.appendChild(pins);
    const info = panel({ left:"1130px", right:"0", top:"370px", bottom:"0" }, [h("h4", null, "Why settle here?"), setMD(h("p"), "Tap a reason. Where on the picture does this site have it?")]);
    const chips = h("div", { style:{ position:"absolute", left:"1130px", right:"0", top:"-10px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"12px" } }, R.map(r => {
      const c = h("div", { class:"pcard hov", style:{ padding:"12px 14px", cursor:"pointer", display:"flex", gap:"12px", alignItems:"center" } }, h("span", { style:{ fontSize:"44px" } }, r.icon), h("b", { style:{ fontSize:"25px", lineHeight:"1.1" } }, r.t));
      c.addEventListener("click", e => { e.stopPropagation(); place(r); c.style.boxShadow = "0 0 0 5px #3FBF86, var(--sh-2)"; });
      return c;
    }));
    host.append(chips, info);
    const placedK = {};
    function place(r){
      info.querySelector("h4").textContent = r.icon + " " + r.t; setMD(info.querySelector("p"), r.d); BM.sfx("ok");
      if (placedK[r.k]) return; placedK[r.k] = 1;
      const g = s("g", { transform:`translate(${r.x} ${r.y})` });
      g.appendChild(s("circle", { r:34, fill:"#FBF3E0", stroke:"#0F7F74", "stroke-width":5 }));
      g.appendChild(s("text", { y:13, "text-anchor":"middle", "font-size":36 }, r.icon));
      pins.appendChild(g);
      BM.anim(g, [{ transform:`translate(${r.x}px, ${r.y - 60}px) scale(.3)`, opacity:0 }, { transform:`translate(${r.x}px, ${r.y}px) scale(1)`, opacity:1 }], { duration:600, easing:"cubic-bezier(.34,1.4,.64,1)" });
    }
    controls(host, [btn("Show all six", () => R.forEach((r, i) => setTimeout(() => place(r), i*250)), "on"), btn("Reset", () => { BM.clear(pins); Object.keys(placedK).forEach(k => delete placedK[k]); chips.querySelectorAll(".pcard").forEach(c => c.style.boxShadow = ""); }, "dark")]);
    return {};
  };

  /* =======================================================
     12. SETTLEMENT PICKER — four sites, 100 years later (Tue W1)
     ======================================================= */
  IX.settlepick = function(host){
    const W = 1100, H = 660;
    const v = svg(W, H, { style:"position:absolute;left:0;top:-10px;width:1100px;height:660px;border-radius:12px;box-shadow:var(--sh-3)" });
    v.appendChild(s("rect", { width:W, height:H, fill:"#EAD6AE" }));
    v.appendChild(s("rect", { width:W, height:H, fill:"url(#p-sand)" }));
    v.appendChild(A.mountains(W, H, 22, ["#a08a64"], { top:150, amp:150, snowLayers:1, snowColor:"#f4f1ea", peaks:5 }));
    v.appendChild(s("path", { d:"M0 250 Q 300 225 550 245 T 1100 235 V660 H0Z", fill:"#EAD6AE" })); v.appendChild(s("path", { d:"M0 250 Q 300 225 550 245 T 1100 235 V660 H0Z", fill:"url(#p-sand)" }));
    // river across the valley floor (floods near A)
    v.appendChild(s("path", { d:"M-10 600 C 200 560, 300 620, 420 590 S 700 560, 1110 610", stroke:"#2b8fb3", "stroke-width":18, fill:"none" }));
    // spring at the foot of the mountains near C
    v.appendChild(s("circle", { cx:640, cy:250, r:14, fill:"#2b8fb3" }));
    v.appendChild(s("path", { d:"M640 250 C 650 300, 630 340, 660 380", stroke:"#2b8fb3", "stroke-width":7, fill:"none" }));
    // road
    v.appendChild(s("path", { d:"M-10 420 C 300 400, 500 380, 700 380 S 1000 360, 1110 340", stroke:"#B0213B", "stroke-width":7, "stroke-dasharray":"14 10", fill:"none" }));
    const SITES = [
      { id:"A", x:300, y:590, t:"By the river, on the flat valley floor", r:"🌊 **Flooded!** Plenty of water and flat land, but the river burst its banks after the spring snowmelt. The town was washed away more than once and abandoned." },
      { id:"B", x:180, y:300, t:"High on the dry hillside", r:"🏜️ **No water.** Safe from floods and easy to defend, but there was no spring and no way to bring water up. People drifted away." },
      { id:"C", x:640, y:360, t:"At the foot of the mountains, by a spring, on the road", r:"🏙️ **A city!** Water from the spring (later brought by qanats), farmland below, hills for defence and a road for trade. Many Persian towns grew in places like this." },
      { id:"D", x:960, y:520, t:"Far out on the plain, away from everything", r:"🏚️ **A tiny hamlet.** Safe and quiet, but too far from water, farmland and the road. It never grew." }
    ];
    const lay = s("g"); v.appendChild(lay);
    SITES.forEach(st => { const g = s("g", { transform:`translate(${st.x} ${st.y})`, style:"cursor:pointer" }); g.appendChild(s("circle", { r:38, fill:"#1E3A8A", stroke:"#FBF3E0", "stroke-width":5 })); g.appendChild(s("text", { y:15, "text-anchor":"middle", "font-family":"Cinzel, serif", "font-weight":800, "font-size":42, fill:"#FBF3E0" }, st.id)); g.addEventListener("click", e => { e.stopPropagation(); show(st); }); lay.appendChild(g); st.g = g; });
    const after = s("g", { opacity:0, style:"transition:opacity 1.2s" }); v.insertBefore(after, lay);
    // A: flood water; B: cracked dry; C: city; D: one hut
    after.appendChild(s("ellipse", { cx:300, cy:590, rx:200, ry:60, fill:"#2b8fb3", opacity:.55 }));
    for (let i=0;i<5;i++) after.appendChild(s("path", { d:`M${130 + i*60} ${300 + (i%2)*20} l20 14 l-14 10`, stroke:"#8a6a3c", "stroke-width":3, fill:"none" }));
    for (let i=0;i<16;i++){ const x = 560 + (i%6)*32, y = 300 + Math.floor(i/6)*36; after.appendChild(s("rect", { x, y, width:26, height:22, fill:"#d4a96a", stroke:"#8a6a3c", "stroke-width":2 })); if (i % 4 === 0) after.appendChild(s("rect", { x:x+8, y:y-16, width:9, height:16, fill:"#b0844a" })); }
    after.appendChild(s("path", { d:"M550 290 h200 v120 h-200z", fill:"none", stroke:"#8a6a3c", "stroke-width":5 }));
    after.appendChild(s("rect", { x:948, y:500, width:22, height:18, fill:"#d4a96a" }));
    host.appendChild(v);
    const info = panel({ left:"1130px", right:"0", top:"-10px", bottom:"0" }, [h("h4", null, "Choose the site"), setMD(h("p"), "A king wants a new town in this valley. Teams: talk it through, then **vote A, B, C or D** on your whiteboards. Use the six reasons!")]);
    host.appendChild(info);
    let revealed = false;
    function show(st){ info.querySelector("h4").textContent = `Site ${st.id}`; setMD(info.querySelector("p"), revealed ? `${st.t}.\n\n${st.r}` : `${st.t}. What does this site have? What is it missing?`); info.querySelector("p").innerHTML = info.querySelector("p").innerHTML.replace(/\n\n/g, "<br><br>"); BM.sfx("tok"); }
    function step(i){ revealed = i >= 1; after.setAttribute("opacity", revealed ? 1 : 0); if (revealed){ info.querySelector("h4").textContent = "100 years later…"; setMD(info.querySelector("p"), "Tap each site to find out what happened. Which site became a city, and why?"); BM.sfx("chime"); } else { info.querySelector("h4").textContent = "Choose the site"; setMD(info.querySelector("p"), "A king wants a new town in this valley. Teams: talk it through, then **vote A, B, C or D** on your whiteboards. Use the six reasons!"); } }
    controls(host, [btn("Reveal: 100 years later", () => step(1), "on"), btn("Back to the vote", () => step(0), "dark")]);
    return { steps:1, step };
  };

  /* little animal silhouettes (cut paper) */
  const SIL = {
    leopard(x, y, k, col){ const g = s("g", { transform:`translate(${x} ${y}) scale(${k})`, fill:col || "#C9822B" });
      g.appendChild(s("path", { d:"M-60 -6 C -40 -26, 30 -26, 50 -10 L66 -18 L76 -10 L70 4 L50 6 L46 30 L38 30 L36 10 L-30 10 L-34 30 L-42 30 L-44 6 C -60 6, -80 14, -96 -4 C -82 2, -70 0, -60 -6Z" }));
      for (let i=0;i<9;i++) g.appendChild(s("circle", { cx:-40 + i*10, cy:-8 + (i%3)*5, r:2.6, fill:"#4a2c10" })); return g; },
    goat(x, y, k, col){ const g = s("g", { transform:`translate(${x} ${y}) scale(${k})`, fill:col || "#8a6a4a" });
      g.appendChild(s("path", { d:"M-36 -10 C -20 -22, 20 -22, 34 -12 L44 -26 L54 -22 L48 -6 L36 0 L34 26 L28 26 L26 6 L-24 6 L-26 26 L-32 26 L-34 4 C -40 2, -42 -6, -36 -10Z" }));
      g.appendChild(s("path", { d:"M46 -24 C 30 -50, 6 -56, -6 -50 C 14 -48, 30 -40, 42 -22Z" })); return g; },
    sheep(x, y, k, col){ const g = s("g", { transform:`translate(${x} ${y}) scale(${k})`, fill:col || "#a68b6a" });
      g.appendChild(s("ellipse", { cx:0, cy:-8, rx:34, ry:18 })); g.appendChild(s("path", { d:"M28 -16 L44 -22 L50 -10 L34 -2Z M-22 4 L-24 24 L-18 24 L-16 6Z M18 4 L16 24 L22 24 L24 6Z" }));
      g.appendChild(s("path", { d:"M40 -22 a12 12 0 1 1 -4 18", stroke:col || "#a68b6a", "stroke-width":5, fill:"none" })); return g; },
    eagle(x, y, k, col){ const g = s("g", { transform:`translate(${x} ${y}) scale(${k})`, fill:col || "#3a2614" });
      g.appendChild(s("path", { d:"M0 0 C -30 -16, -70 -14, -96 -2 C -70 -4, -40 2, -12 10 L-6 20 L6 20 L12 10 C 40 2, 70 -4, 96 -2 C 70 -14, 30 -16, 0 0Z" })); g.appendChild(s("circle", { cx:0, cy:-4, r:6 })); return g; },
    beetle(x, y, k){ const g = s("g", { transform:`translate(${x} ${y}) scale(${k})`, fill:"#2b2b2b" }); g.appendChild(s("ellipse", { rx:10, ry:7 })); g.appendChild(s("circle", { cx:11, cy:0, r:4 })); g.appendChild(s("path", { d:"M-6 -6 l-6 -6 M0 -7 l0 -8 M6 -6 l6 -6 M-6 6 l-6 6 M0 7 l0 8 M6 6 l6 6", stroke:"#2b2b2b", "stroke-width":2 })); return g; }
  };
  IX.SIL = SIL;

  /* =======================================================
     20. HABITAT ZOOM — organism → population → community → ecosystem (Wed W1)
     ======================================================= */
  IX.habitatzoom = function(host){
    const W = 1100, H = 660;
    const v = svg(W, H, { style:"position:absolute;left:0;top:-10px;width:1100px;height:660px;border-radius:12px;box-shadow:var(--sh-3);background:#9fc9d8" });
    const non = s("g", { class:"non" }), liv = s("g", { class:"liv" });
    // non-living: sky, sun, snow, rock, stream, soil
    non.appendChild(s("rect", { width:W, height:H, fill:"#bfe0ea" }));
    const sun = A.sun(940, 90, 46, .95); non.appendChild(sun);
    non.appendChild(A.mountains(W, H, 41, ["#8d8270","#776b5a"], { top:250, bottom:330, amp:230, snowLayers:1, snowColor:"#fbfbf8", peaks:5 }));
    non.appendChild(s("path", { d:"M0 420 Q 300 380 600 420 T 1100 400 V660 H0Z", fill:"#7a6a52" }));
    non.appendChild(s("path", { d:"M0 560 Q 400 520 1100 560 V660 H0Z", fill:"#5a4632" }));
    non.appendChild(s("path", { d:"M760 300 C 740 380, 800 440, 760 520 S 700 620, 740 660", stroke:"#3b9ec2", "stroke-width":14, fill:"none", "stroke-linecap":"round" }));
    [[180,470,44],[420,500,30],[980,470,40],[600,600,26]].forEach(([x, y, r]) => non.appendChild(s("ellipse", { cx:x, cy:y, rx:r*1.4, ry:r*.8, fill:"#9a8e7a" })));
    v.appendChild(non);
    // living: oaks, grass, goats, sheep, leopards, eagle, beetles
    [[90,440],[300,420],[520,430],[880,420],[1040,440]].forEach(([x, y], i) => liv.appendChild(A.oak(x, y, 110 + (i%2)*20, "#3f6b3a")));
    for (let i=0;i<40;i++) liv.appendChild(s("path", { d:`M${i*28 + 6} 560 q4 -18 8 0 q4 -14 8 0`, stroke:"#6b8f3a", "stroke-width":3, fill:"none" }));
    [[250,370,.9],[340,385,.8],[600,350,.85],[690,365,.75],[950,350,.8]].forEach(([x, y, k]) => liv.appendChild(SIL.goat(x, y, k)));
    [[460,470,.8],[520,480,.7]].forEach(([x, y, k]) => liv.appendChild(SIL.sheep(x, y, k)));
    const leos = [[620,250,.9],[170,330,.7],[1000,300,.7]].map(([x, y, k]) => { const g = SIL.leopard(x, y, k); liv.appendChild(g); return g; });
    liv.appendChild(SIL.eagle(820, 120, .8));
    [[300,600],[640,630],[900,610]].forEach(([x, y]) => liv.appendChild(SIL.beetle(x, y, 1.2)));
    v.appendChild(liv);
    // labels for the ecosystem view
    const labs = s("g", { opacity:0, style:"transition:opacity .8s" });
    const lab = (x, y, t) => { labs.appendChild(s("rect", { x:x - 6, y:y - 30, width:t.length*15 + 18, height:40, rx:8, fill:"#0F1D4A", opacity:.85 })); labs.appendChild(s("text", { x:x + 3, y, "font-family":"Big Shoulders Display", "font-weight":900, "font-size":26, "letter-spacing":"2", fill:"#F6D27A" }, t)); };
    lab(880, 170, "SUNLIGHT"); lab(260, 150, "SNOW"); lab(780, 470, "WATER"); lab(120, 520, "ROCK"); lab(500, 650, "SOIL");
    v.appendChild(labs);
    const ring = s("g", { opacity:0, style:"transition:opacity .6s" }); v.appendChild(ring);
    leos.forEach(g => { const m = g.getAttribute("transform").match(/translate\(([\d.]+) ([\d.]+)\)/); ring.appendChild(s("ellipse", { cx:+m[1] - 10, cy:+m[2], rx:110, ry:50, fill:"none", stroke:"#F6D27A", "stroke-width":6, "stroke-dasharray":"12 8" })); });
    host.appendChild(v);
    const info = panel({ left:"1130px", right:"0", top:"-10px", bottom:"0" }, [h("div", { class:"ix-chip", style:{ background:"#0B7A55", color:"#fff" } }), h("h4"), h("p")]);
    host.appendChild(info);
    const T = [
      ["1 · ORGANISM","One living thing","One **Persian leopard**: a single living thing (an **organism**). It needs food, water, shelter and space.", [520,190,300,182]],
      ["2 · POPULATION","All of one kind","All the **leopards** living in these mountains make a **population**. Iran may have about **550–850** Persian leopards; they are **Endangered**.", [0,0,1100,660]],
      ["3 · COMMUNITY","All the living things","Leopards + wild goats + wild sheep + oak trees + grass + eagles + beetles… all the populations living together are a **community**.", [0,0,1100,660]],
      ["4 · ECOSYSTEM","Living + non-living","The community **plus** the non-living parts (rock, soil, water, sunlight, snow) make an **ecosystem**. Everything is connected!", [0,0,1100,660]]
    ];
    let vb = [0,0,1100,660], anim;
    function zoom(to){ if (anim) cancelAnimationFrame(anim); const from = vb.slice(), t0 = performance.now(), dur = BM.motionOK() ? 1400 : 1; const tick = now => { const t = Math.min(1, (now - t0)/dur), e = 1 - Math.pow(1 - t, 3); vb = from.map((f, i) => f + (to[i] - f)*e); v.setAttribute("viewBox", vb.map(n => n.toFixed(1)).join(" ")); if (t < 1) anim = requestAnimationFrame(tick); }; anim = requestAnimationFrame(tick); }
    function step(i){
      const tt = T[i]; info.querySelector(".ix-chip").textContent = tt[0]; info.querySelector("h4").textContent = tt[1]; setMD(info.querySelector("p"), tt[2]);
      zoom(tt[3]);
      ring.setAttribute("opacity", i === 1 ? 1 : 0);
      Array.from(liv.children).forEach(c => c.style.opacity = (i === 1 && leos.indexOf(c) < 0) ? ".25" : "1");
      non.style.transition = "opacity .8s"; non.style.opacity = i === 2 || i === 1 ? ".45" : "1";
      labs.setAttribute("opacity", i === 3 ? 1 : 0);
      if (i > 0) BM.sfx("paper");
    }
    step(0);
    return { steps:3, step, destroy(){ if (anim) cancelAnimationFrame(anim); } };
  };

  /* =======================================================
     21. LIVING OR NON-LIVING? (Wed W1)
     ======================================================= */
  IX.biotic = function(host){
    return sorter(host, {
      bins:[{ id:"L", t:"LIVING (biotic)", d:"grows, feeds, breathes, reproduces", c:"#62D39F" }, { id:"N", t:"NON-LIVING (abiotic)", d:"never alive, but living things need it", c:"#F6D27A" }],
      binH:250, cardW:160, cardH:170, scale:.62, homeDy:-20,
      cards:[
        { icon:"🌳", t:"Oak tree", bin:"L", why:"**Living.** Zagros oaks are producers: they make food from sunlight." },
        { icon:"🐐", t:"Wild goat", bin:"L", why:"**Living.** The leopard's main prey." },
        { icon:"❄️", t:"Snow", bin:"N", why:"**Non-living.** But its meltwater feeds the streams in spring." },
        { icon:"🪨", t:"Rock", bin:"N", why:"**Non-living.** Cliffs give wild goats a place to escape predators." },
        { icon:"🦠", t:"Soil bacteria", bin:"L", why:"**Living!** Too small to see, but alive: they break down dead leaves." },
        { icon:"💧", t:"Spring water", bin:"N", why:"**Non-living.** Every animal needs it." },
        { icon:"☀️", t:"Sunlight", bin:"N", why:"**Non-living.** The energy for plants to grow." },
        { icon:"🦅", t:"Golden eagle", bin:"L", why:"**Living.** A predator of the high mountains." },
        { icon:"🌾", t:"Grass", bin:"L", why:"**Living.** A producer: food for goats and sheep." },
        { icon:"🌡️", t:"Temperature", bin:"N", why:"**Non-living.** Cold winters, hot summers: animals must cope with both." }
      ],
      tip:"Living or non-living? Class votes, then drag the card.",
      done:"**An ecosystem needs both.** The living community depends on the non-living parts: water, rock, soil, sunlight."
    });
  };

  /* =======================================================
     30. PROBLEM → SOLUTION MATCHER (Thu W1)
     ======================================================= */
  IX.problemsolution = function(host){
    const P = [
      { k:"water", icon:"💧", t:"Water hides underground", d:"Rain and snow fall on the mountains, but out on the plain the water is deep under the ground.", art:"jug" },
      { k:"heat", icon:"☀️", t:"The sun will cook you", d:"Summer days on the plateau are scorching, and there's no electricity for fans.", art:"sun" },
      { k:"cold", icon:"🧊", t:"Food goes bad by lunch", d:"How do you keep food and water cool, or have ice, in a desert summer?", art:"ice" }
    ];
    const S = [
      { k:"heat", t:"The windcatcher (badgir)", art:"badgir", d:"A tall tower catches breezes and sends them down into the house, while hot air escapes. No electricity! The desert city of **Yazd** has about **700**." },
      { k:"water", t:"The qanat", art:"qanat", d:"An underground tunnel with a **gentle slope** carries water by **gravity** from a deep ‘**mother well**’ near the mountains. Vertical shafts reach down to the tunnel." },
      { k:"cold", t:"The yakhchāl (ice house)", art:"yakhchal", d:"Water froze in shallow pits on winter nights, shaded by a tall wall. The ice was stored in a deep pit under a thick **dome** and lasted into summer." }
    ];
    const lines = svg(1760, 690, { style:"position:absolute;left:0;top:-10px;width:1760px;height:690px;pointer-events:none;overflow:visible" });
    host.appendChild(lines);
    const pc = P.map((p, i) => { const c = h("div", { class:"pcard hov", style:{ position:"absolute", left:"0", top:(i*226 - 10)+"px", width:"560px", height:"206px", padding:"16px 20px", cursor:"pointer", display:"grid", gridTemplateColumns:"150px 1fr", gap:"16px", alignItems:"center" } }, A.artefactBox(p.art, "width:150px;height:150px"), h("div", null, h("div", { style:{ fontFamily:"var(--f-royal)", fontWeight:"800", fontSize:"30px", lineHeight:"1.05" } }, p.icon + " " + p.t), h("div", { style:{ fontSize:"22px", lineHeight:"1.25", marginTop:"8px" } }, p.d))); c.p = p; host.appendChild(c); return c; });
    const sc = S.map((x, i) => { const c = h("div", { class:"pcard hov", style:{ position:"absolute", left:"1200px", top:(i*226 - 10)+"px", width:"560px", height:"206px", padding:"16px 20px", cursor:"pointer", display:"grid", gridTemplateColumns:"170px 1fr", gap:"16px", alignItems:"center" } }, A.artefactBox(x.art, "width:170px;height:170px"), h("div", null, h("div", { style:{ fontFamily:"var(--f-royal)", fontWeight:"800", fontSize:"30px", lineHeight:"1.05" } }, x.t), h("div", { class:"sd", style:{ fontSize:"20px", lineHeight:"1.25", marginTop:"8px", display:"none" } }))); c.s = x; host.appendChild(c); return c; });
    const tip = h("div", { class:"pcard ix-tip", style:{ left:"600px", width:"560px", top:"230px", textAlign:"center" } }, "Tap a PROBLEM, then the Persian SOLUTION that fixes it.");
    host.appendChild(tip);
    let sel = null; const done = {};
    const link = (pi, si, ok) => { const y1 = pi*226 + 93, y2 = si*226 + 93; lines.appendChild(s("path", { d:`M560 ${y1} C 880 ${y1}, 880 ${y2}, 1200 ${y2}`, stroke: ok ? "#3FBF86" : "#E0566F", "stroke-width":8, fill:"none", "stroke-linecap":"round", opacity: ok ? 1 : .8, class: ok ? "" : "bad" })); };
    pc.forEach((c, pi) => c.addEventListener("click", e => { e.stopPropagation(); if (done[c.p.k]) return; pc.forEach(x => x.style.outline = ""); sel = pi; c.style.outline = "6px solid #F6D27A"; BM.sfx("tok"); }));
    sc.forEach((c, si) => c.addEventListener("click", e => { e.stopPropagation(); if (sel == null) { tip.textContent = "First tap a problem on the left."; return; } const p = P[sel]; lines.querySelectorAll(".bad").forEach(b => b.remove());
      if (c.s.k === p.k){ done[p.k] = 1; link(sel, si, true); setMD(c.querySelector(".sd"), c.s.d); c.querySelector(".sd").style.display = "block"; c.style.boxShadow = "0 0 0 6px #3FBF86, var(--sh-2)"; pc[sel].style.outline = ""; pc[sel].style.boxShadow = "0 0 0 6px #3FBF86, var(--sh-2)"; tip.innerHTML = BM.md(`✓ **${c.s.t}** solves “${p.t}”.`); BM.sfx("ok"); sel = null; }
      else { link(sel, si, false); tip.innerHTML = BM.md("✗ Not that one. Which invention deals with **" + p.t.toLowerCase() + "**?"); BM.sfx("no"); } }));
    controls(host, [btn("Show answers", () => { BM.clear(lines); P.forEach((p, pi) => { const si = S.findIndex(x => x.k === p.k); done[p.k] = 1; link(pi, si, true); const c = sc[si]; setMD(c.querySelector(".sd"), c.s.d); c.querySelector(".sd").style.display = "block"; c.style.boxShadow = "0 0 0 6px #3FBF86, var(--sh-2)"; pc[pi].style.boxShadow = "0 0 0 6px #3FBF86, var(--sh-2)"; }); tip.innerHTML = BM.md("Three problems, three clever solutions, **no electricity**."); }, "on"),
      btn("Reset", () => { BM.clear(lines); Object.keys(done).forEach(k => delete done[k]); sel = null; pc.forEach(c => { c.style.outline = ""; c.style.boxShadow = ""; }); sc.forEach(c => { c.style.boxShadow = ""; c.querySelector(".sd").style.display = "none"; }); tip.textContent = "Tap a PROBLEM, then the Persian SOLUTION that fixes it."; }, "dark")]);
    return {};
  };

  /* =======================================================
     31. INPUT → PROCESS → OUTPUT builder (Thu W1)
     ======================================================= */
  IX.ipo = function(host){
    const MACH = {
      qanat:{ n:"Qanat", art:"qanat", parts:[["I","Groundwater near the mountains"],["P","Gravity pulls the water along a gently sloping tunnel"],["P","Workers clean the tunnel through the shafts"],["O","Water at the surface for a town and farms"]] },
      badgir:{ n:"Windcatcher", art:"badgir", parts:[["I","Breezes blowing above the rooftops"],["P","The tower catches the wind and sends it down into the house"],["P","Hot air rises and escapes up the tower"],["O","A cooler room in summer"]] },
      yakhchal:{ n:"Yakhchāl", art:"yakhchal", parts:[["I","Water and freezing winter nights"],["P","Water freezes in shaded pits; the ice is stacked in a deep domed pit"],["P","Thick walls and the dome keep the heat out"],["O","Ice and cold food in summer"]] }
    };
    const BOX = { I:{ t:"INPUT", c:"#8FA8F0", x:0 }, P:{ t:"PROCESS", c:"#F6D27A", x:600 }, O:{ t:"OUTPUT", c:"#62D39F", x:1200 } };
    Object.values(BOX).forEach(b => { host.appendChild(h("div", { style:{ position:"absolute", left:b.x+"px", top:"0", width:"560px", height:"330px", borderRadius:"14px", border:`4px dashed ${b.c}`, background:"rgba(0,0,0,.25)", padding:"12px 18px" } }, h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"40px", letterSpacing:".14em", color:b.c } }, b.t))); });
    [572, 1172].forEach(x => host.appendChild(h("div", { style:{ position:"absolute", left:x + "px", top:"140px", fontSize:"40px", color:"#FBF3E0" } }, "→")));
    const pic = h("div", { style:{ position:"absolute", left:"0", top:"360px", width:"300px", height:"300px" } });
    const name = h("div", { style:{ position:"absolute", left:"0", top:"640px", width:"300px", textAlign:"center", fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"26px", letterSpacing:".08em" } });
    host.append(pic, name);
    let cards = [];
    function load(key){
      cards.forEach(c => c.remove()); cards = [];
      const m = MACH[key]; BM.clear(pic).appendChild(A.artefactBox(m.art, "width:300px;height:280px;box-shadow:var(--sh-3)")); name.textContent = m.n;
      const shuffled = m.parts.map((p, i) => ({ p, i })).sort((a, b) => ((a.i*7 + 3) % 5) - ((b.i*7 + 3) % 5));
      const cnt = { I:0, P:0, O:0 };
      shuffled.forEach((x, k) => {
        const c = h("div", { class:"pcard hov", style:{ width:"440px", minHeight:"64px", padding:"10px 16px", fontSize:"23px", lineHeight:"1.15", zIndex:"2" } }, x.p[1]);
        const home = { x:340 + (k % 3)*470, y:370 + Math.floor(k/3)*130 };
        const dr = draggable(c, host, home, (cx, cy) => {
          if (cy > 340) return false;
          const key2 = cx < 580 ? "I" : cx < 1180 ? "P" : "O";
          const b = BOX[key2]; const slot = cnt[key2]++; dr.move(b.x + 60, 70 + slot*84);
          const ok = key2 === x.p[0]; c.style.boxShadow = `0 0 0 5px ${ok ? "#3FBF86" : "#E0566F"}, var(--sh-2)`; BM.sfx(ok ? "ok" : "no"); return true;
        });
        c.dr = dr; c.ans = x.p[0]; host.appendChild(c); cards.push(c);
      });
      sel.forEach(b => b.classList.toggle("on", b.dataset.k === key));
    }
    const sel = Object.keys(MACH).map(k => { const b = btn(MACH[k].n, () => load(k), "dark"); b.dataset.k = k; b.style.minHeight = "52px"; b.style.fontSize = "18px"; return b; });
    controls(host, [...sel, btn("Show answer", () => { const cnt = { I:0, P:0, O:0 }; cards.forEach(c => { const b = BOX[c.ans]; c.dr.move(b.x + 60, 70 + (cnt[c.ans]++)*84); c.style.boxShadow = "0 0 0 5px #3FBF86, var(--sh-2)"; }); }, "on")]);
    load("qanat");
    return {};
  };

  /* =======================================================
     40. SYMMETRY MIRROR — draw one petal, watch it repeat (Fri W1)
     ======================================================= */
  IX.symmetry = function(host){
    const S = 660, C = S/2;
    const wrap = h("div", { style:{ position:"absolute", left:"40px", top:"-10px", width:S+"px", height:S+"px", borderRadius:"50%", background:"#FBF3E0", boxShadow:"var(--sh-3)", overflow:"hidden" } });
    const cv = h("canvas", { width:S*2, height:S*2, style:{ width:S+"px", height:S+"px", touchAction:"none", cursor:"crosshair", position:"absolute", inset:"0" } });
    const guide = svg(S, S, { style:"position:absolute;inset:0;width:100%;height:100%;pointer-events:none" });
    wrap.append(guide, cv); host.appendChild(wrap);
    const ctx = cv.getContext("2d"); ctx.scale(2, 2); ctx.lineCap = "round"; ctx.lineJoin = "round";
    let N = 12, mirror = true, col = "#1E3A8A", strokes = [];
    const COLS = ["#1E3A8A","#B9770A","#B0213B","#0F7F74","#2B1B10"];
    function drawGuides(){ BM.clear(guide); guide.appendChild(s("circle", { cx:C, cy:C, r:C - 8, fill:"none", stroke:"#B98A5E", "stroke-width":2 })); for (let i=0;i<N;i++){ const a = i*2*Math.PI/N - Math.PI/2; guide.appendChild(s("line", { x1:C, y1:C, x2:C + Math.cos(a)*(C - 8), y2:C + Math.sin(a)*(C - 8), stroke:"#B98A5E", "stroke-width":1.5, "stroke-dasharray":"6 6", opacity:.7 })); } const a0 = -Math.PI/2, a1 = a0 + 2*Math.PI/N; guide.appendChild(s("path", { d:`M${C} ${C} L${C + Math.cos(a0)*(C-8)} ${C + Math.sin(a0)*(C-8)} A${C-8} ${C-8} 0 0 1 ${C + Math.cos(a1)*(C-8)} ${C + Math.sin(a1)*(C-8)}Z`, fill:"#F6D27A", opacity:.25 })); }
    function render(){
      ctx.clearRect(0, 0, S, S);
      strokes.forEach(st => { ctx.strokeStyle = st.col; ctx.lineWidth = st.w;
        for (let i=0;i<N;i++){ [1, -1].forEach(m => { if (m < 0 && !mirror) return; ctx.save(); ctx.translate(C, C); ctx.rotate(i*2*Math.PI/N); if (m < 0){ ctx.rotate(Math.PI/N); ctx.scale(-1, 1); ctx.rotate(-Math.PI/N); } ctx.beginPath(); st.pts.forEach(([x, y], k) => k ? ctx.lineTo(x, y) : ctx.moveTo(x, y)); ctx.stroke(); ctx.restore(); }); } });
    }
    let cur = null;
    const local = e => { const r = cv.getBoundingClientRect(), k = r.width/S; return [(e.clientX - r.left)/k - C, (e.clientY - r.top)/k - C]; };
    cv.addEventListener("pointerdown", e => { e.stopPropagation(); cv.setPointerCapture(e.pointerId); cur = { col, w:6, pts:[local(e)] }; strokes.push(cur); render(); });
    cv.addEventListener("pointermove", e => { if (!cur) return; cur.pts.push(local(e)); render(); });
    cv.addEventListener("pointerup", () => { cur = null; });
    function demo(){ // one teardrop petal in the first segment
      const pts = []; for (let t=0;t<=1.0001;t+=.04){ const a = t*Math.PI; pts.push([Math.sin(a)*38*(1 - t*.2), -60 - t*230]); }
      for (let t=1;t>=0;t-=.04){ const a = t*Math.PI; pts.push([-Math.sin(a)*38*(1 - t*.2)*.0 + Math.sin(a)*10, -60 - t*230]); }
      const rot = Math.PI/N, petal = pts.map(([x, y]) => [x*Math.cos(rot) - y*Math.sin(rot), x*Math.sin(rot) + y*Math.cos(rot)]);
      strokes.push({ col:"#1E3A8A", w:7, pts:petal });
      const ring = []; for (let a=0;a<=Math.PI*2/N + .001;a+=.05) ring.push([Math.cos(a - Math.PI/2)*300, Math.sin(a - Math.PI/2)*300]);
      strokes.push({ col:"#B9770A", w:8, pts:ring });
      const dot = []; for (let a=0;a<=6.3;a+=.3) dot.push([Math.cos(a)*14, Math.sin(a)*14 - 320 + 14]); strokes.push({ col:"#B0213B", w:6, pts:dot.map(([x, y]) => { const r2 = Math.PI/N; return [x*Math.cos(r2) - (y)*Math.sin(r2), x*Math.sin(r2) + (y)*Math.cos(r2)]; }) });
      render(); BM.sfx("ok");
    }
    const info = panel({ left:"760px", right:"0", top:"170px", bottom:"0" }, [h("h4", null, "Radial symmetry"), setMD(h("p"), "Draw in the **gold segment** (or anywhere). Your line repeats evenly **around the centre**. That's **radial symmetry**: the same shape turning around a point, like the petals of a rosette.\n\nA **mirror line** reflects one way; radial symmetry turns around a point.")]);
    info.querySelector("p").innerHTML = info.querySelector("p").innerHTML.replace(/\n\n/g, "<br><br>");
    host.appendChild(info);
    const segBtns = [6,8,12,16].map(n => { const b = btn(n + " parts", () => { N = n; segBtns.forEach(x => x.classList.toggle("on", x === b)); drawGuides(); render(); }, n === 12 ? "on" : "dark"); b.style.minWidth = "120px"; return b; });
    const colBtns = COLS.map(c2 => { const b = h("button", { class:"ixbtn", style:{ width:"56px", minWidth:"56px", background:c2, boxShadow: c2 === col ? "0 0 0 4px #F6D27A" : "none" }, onclick:(e) => { e.stopPropagation(); col = c2; colBtns.forEach(x => x.style.boxShadow = "none"); b.style.boxShadow = "0 0 0 4px #F6D27A"; } }); return b; });
    host.appendChild(h("div", { style:{ position:"absolute", left:"760px", right:"0", top:"-10px", display:"flex", flexWrap:"wrap", gap:"10px" } }, ...segBtns, h("div", { style:{ width:"100%" } }), ...colBtns,
      btn("Mirror: on", (e) => { mirror = !mirror; e.target.textContent = "Mirror: " + (mirror ? "on" : "off"); render(); }, "dark")));
    controls(host, [btn("Show a petal", demo, "on"), btn("Undo", () => { strokes.pop(); render(); }, "dark"), btn("Clear", () => { strokes = []; render(); }, "dark")]);
    drawGuides();
    return {};
  };

  /* =======================================================
     41. BUILD A ROSETTE — compass & equal angles, step by step (Fri W1)
     ======================================================= */
  IX.rosettebuild = function(host){
    const S = 660, C = S/2, R = 280, N = 12;
    const v = svg(S, S, { style:"position:absolute;left:40px;top:-10px;width:660px;height:660px;border-radius:12px;background:#FBF3E0;box-shadow:var(--sh-3)" });
    host.appendChild(v);
    v.appendChild(s("rect", { width:S, height:S, fill:"url(#p-dots)", opacity:.12 }));
    const L = {}; const lay = k => { const g = s("g", { opacity:0, style:"transition:opacity .7s" }); v.appendChild(g); L[k] = g; return g; };
    const circ = lay("circle");
    const cp = s("circle", { cx:C, cy:C, r:R, fill:"none", stroke:"#2B1B10", "stroke-width":4, "stroke-dasharray":2*Math.PI*R, "stroke-dashoffset":2*Math.PI*R, style:"transition:stroke-dashoffset 2s ease" });
    circ.appendChild(cp); circ.appendChild(s("circle", { cx:C, cy:C, r:6, fill:"#B0213B" }));
    const compass = s("g", { style:`transform-origin:${C}px ${C}px; transition:transform 2s ease` }); compass.appendChild(s("path", { d:`M${C} ${C} L${C + 40} ${C - 220} L${C + R} ${C}`, stroke:"#5a6470", "stroke-width":8, fill:"none", "stroke-linejoin":"round" })); compass.appendChild(s("circle", { cx:C + 40, cy:C - 220, r:12, fill:"#5a6470" })); circ.appendChild(compass);
    const marks = lay("marks");
    for (let i=0;i<N;i++){ const a = i*2*Math.PI/N - Math.PI/2; marks.appendChild(s("circle", { cx:C + Math.cos(a)*R, cy:C + Math.sin(a)*R, r:9, fill:"#B0213B" })); marks.appendChild(s("text", { x:C + Math.cos(a)*(R + 30), y:C + Math.sin(a)*(R + 30) + 8, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":22, fill:"#2B1B10" }, (i*30) + "°")); }
    const spokes = lay("spokes");
    for (let i=0;i<N;i++){ const a = i*2*Math.PI/N - Math.PI/2; spokes.appendChild(s("line", { x1:C, y1:C, x2:C + Math.cos(a)*R, y2:C + Math.sin(a)*R, stroke:"#8a7c5c", "stroke-width":2, "stroke-dasharray":"8 6" })); }
    const petalD = `M${C} ${C - 50} C ${C + 48} ${C - 110}, ${C + 40} ${C - 220}, ${C} ${C - 262} C ${C - 40} ${C - 220}, ${C - 48} ${C - 110}, ${C} ${C - 50}Z`;
    const one = lay("one"); one.appendChild(s("path", { d:petalD, fill:"#1E3A8A", transform:`rotate(15 ${C} ${C})` }));
    const all = lay("all");
    const petals = Array.from({ length:N }, (_, i) => { const p = s("path", { d:petalD, fill: i % 2 ? "#B9770A" : "#1E3A8A", transform:`rotate(${15 + i*30} ${C} ${C})`, opacity:0, style:"transition:opacity .4s" }); all.appendChild(p); return p; });
    const fin = lay("fin");
    fin.appendChild(s("circle", { cx:C, cy:C, r:56, fill:"#B0213B" })); fin.appendChild(s("circle", { cx:C, cy:C, r:24, fill:"#F6D27A" }));
    fin.appendChild(s("circle", { cx:C, cy:C, r:R + 2, fill:"none", stroke:"#B9770A", "stroke-width":12 }));
    for (let i=0;i<24;i++){ const a = i*Math.PI/12; fin.appendChild(s("circle", { cx:C + Math.cos(a)*(R + 2), cy:C + Math.sin(a)*(R + 2), r:6, fill:"#FBF3E0" })); }
    const info = panel({ left:"760px", right:"0", top:"-10px", bottom:"0" }, [h("div", { class:"ix-chip", style:{ background:"#B9770A", color:"#fff" } }), h("h4"), h("p")]);
    host.appendChild(info);
    const T = [
      ["Step 1","Draw a circle","Put the compass point in the centre and turn it all the way round. ⚠️ Compass points stay flat on the desk."],
      ["Step 2","Mark 12 equal points","360° ÷ 12 = **30°**. Use a protractor (or the printed template) to mark a point every **30°** around the circle."],
      ["Step 3","Join to the centre","Rule a light line from each point to the centre. Now you have **12 equal segments**."],
      ["Step 4","Design ONE petal","Draw one petal shape inside one segment. Keep it simple: a teardrop or a leaf."],
      ["Step 5","Repeat it in every segment","Copy the **same petal** into every segment, the same size each time. That's **radial symmetry**."],
      ["Step 6","Centre, ring & colour","Add a centre and an outer ring. Repeat your colours **in order** (blue, gold, blue, gold…). Persepolis carvers used rosettes with **12 petals** too!"]
    ];
    let tmr = [];
    function step(i){
      tmr.forEach(clearTimeout); tmr = [];
      const t = T[i]; info.querySelector(".ix-chip").textContent = t[0]; info.querySelector("h4").textContent = t[1]; setMD(info.querySelector("p"), t[2]);
      L.circle.setAttribute("opacity", 1); cp.style.strokeDashoffset = i >= 0 ? "0" : String(2*Math.PI*R); compass.style.transform = i === 0 ? "rotate(360deg)" : "rotate(0deg)"; compass.style.opacity = i === 0 ? "1" : "0";
      L.marks.setAttribute("opacity", i >= 1 && i < 5 ? 1 : 0);
      L.spokes.setAttribute("opacity", i >= 2 && i < 5 ? 1 : 0);
      L.one.setAttribute("opacity", i === 3 ? 1 : 0);
      L.all.setAttribute("opacity", i >= 4 ? 1 : 0);
      petals.forEach((p, k) => { if (i >= 4){ if (i === 4 && BM.motionOK()){ p.setAttribute("opacity", 0); tmr.push(setTimeout(() => { p.setAttribute("opacity", 1); BM.sfx("tok"); }, 200 + k*180)); } else p.setAttribute("opacity", 1); } else p.setAttribute("opacity", 0); });
      L.fin.setAttribute("opacity", i >= 5 ? 1 : 0);
      if (i === 5) BM.sfx("chime");
    }
    step(0);
    return { steps:5, step, destroy(){ tmr.forEach(clearTimeout); } };
  };
})(window.BM);
