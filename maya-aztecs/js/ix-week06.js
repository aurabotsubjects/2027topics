/* ==========================================================
   WEEK 6 INTERACTIVES — The Eagle on the Cactus
   ========================================================== */
(function(FC){
  "use strict";
  const h = FC.h, s = FC.s, svg = FC.svg, A = FC.art, IX = FC.IX;
  const btn = (label, onclick, cls) => h("button", { class:"ixbtn " + (cls||""), onclick:(e) => { e.stopPropagation(); FC.sfx("tok"); onclick(e); } }, label);
  const panel = (w) => h("div", { class:"pcard", style:{ position:"absolute", right:"0", top:"0", width:(w||560)+"px", height:"690px", display:"flex", flexDirection:"column", gap:"14px" } });
  const ptitle = t => h("div", { style:{ fontFamily:"var(--f-display)", fontWeight:"900", fontSize:"44px", lineHeight:"1" } }, t);
  const pmsg = t => { const d = h("div", { style:{ fontSize:"25px", lineHeight:"1.3" } }); d.innerHTML = FC.md(t || ""); return d; };
  const big = (t, c) => h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"64px", lineHeight:".9", color:c || "#B3262E" } }, t);
  const darkB = b => { b.style.color = "var(--cacao-ink)"; b.style.boxShadow = "inset 0 0 0 2px rgba(90,56,37,.35)"; return b; };
  const small = b => { b.style.fontSize = "19px"; b.style.minHeight = "52px"; b.style.padding = "8px 10px"; return b; };
  const stop = el => { ["pointerdown","click","keydown","input"].forEach(ev => el.addEventListener(ev, e => e.stopPropagation())); return el; };
  const lbl = (x, y, t, c, size, anchor) => s("text", { x, y, "text-anchor":anchor || "middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":size || 26, fill:c || "#3b2418", "letter-spacing":1.5 }, t);
  let UID = 0;

  /* shared drawing of the basin of Mexico (1519) */
  function drawLake(g, opt){
    opt = opt || {};
    g.appendChild(s("rect", { width:1100, height:690, fill:"#b9a27a" }));
    g.appendChild(s("path", { d:"M0 0 H1100 V120 Q900 60 700 100 Q500 40 300 90 Q150 60 0 110Z", fill:"#7d6a4d", opacity:.7 }));
    g.appendChild(s("path", { d:"M180 120 C 420 60, 820 80, 960 200 C 1040 300, 980 470, 860 560 C 700 660, 420 650, 260 560 C 120 470, 80 260, 180 120Z", fill:"#2E9FB0" }));
    g.appendChild(s("path", { d:"M260 560 C 340 620, 480 660, 600 640 L 640 690 L 230 690Z", fill:"#3fb2c2" }));
  }
  const TX = 520, TY = 360; // island centre

  /* =======================================================
     MON · Tenochtitlan builder (step reveal)
     ======================================================= */
  IX.tenochtitlan = function(host){
    const W = 1100, H = 690;
    const v = svg(W, H, { style:`position:absolute;left:0;top:0;width:${W}px;height:${H}px;border-radius:16px` });
    host.appendChild(v);
    const base = s("g"); drawLake(base); v.appendChild(base);
    const L = Array.from({ length:6 }, () => { const g = s("g", { style:"transition:opacity .7s", opacity:0 }); v.appendChild(g); return g; });
    // 0 island + eagle on cactus
    L[0].appendChild(s("ellipse", { cx:TX, cy:TY, rx:70, ry:46, fill:"#c9a06a", stroke:"#5a3825", "stroke-width":3 }));
    L[0].appendChild(s("path", { d:`M${TX} ${TY} v-40 M${TX} ${TY-20} h-16 v-16 M${TX} ${TY-28} h14 v-12`, stroke:"#1F7A5A", "stroke-width":9, "stroke-linecap":"round", fill:"none" }));
    L[0].appendChild(s("path", { d:`M${TX} ${TY-56} l-30 -16 l18 -2 l-12 -14 l24 10 l6 -16 l8 18 l24 -10 l-12 14 l18 2 l-30 16z`, fill:"#5a3825" }));
    // 1 chinampas
    const rnd = FC.rng(8);
    for (let i=0;i<70;i++){ const a = rnd()*Math.PI*2, r = 90 + rnd()*120; const x = TX + Math.cos(a)*r*1.4, y = TY + Math.sin(a)*r*.8;
      L[1].appendChild(s("rect", { x, y, width:34, height:14, fill:["#4f9a52","#6bb35c","#3d7f45"][i%3], stroke:"#2a5a30", "stroke-width":1.5, transform:`rotate(${(a*57)%20 - 10} ${x} ${y})` })); }
    // 2 city grows
    for (let i=0;i<120;i++){ const a = rnd()*Math.PI*2, r = rnd()*95; L[2].appendChild(s("rect", { x:TX + Math.cos(a)*r*1.45 - 6, y:TY + Math.sin(a)*r*.85 - 6, width:12, height:12, fill:"#efe3c6", stroke:"#8a7a62" })); }
    L[2].appendChild(s("path", { d:`M${TX-160} ${TY} h320 M${TX} ${TY-90} v180`, stroke:"#2E9FB0", "stroke-width":6 }));
    // 3 causeways (north Tepeyac, south Iztapalapa, west Tlacopan)
    const cw = d => L[3].appendChild(s("path", { d, stroke:"#d8c8a0", "stroke-width":12, fill:"none", "stroke-linecap":"round" }));
    cw(`M${TX} ${TY-80} L${TX+10} 120`); cw(`M${TX} ${TY+80} L${TX-20} 600`); cw(`M${TX-150} ${TY} L180 ${TY-10}`);
    L[3].appendChild(lbl(TX+10, 106, "TO TEPEYAC", "#14110F", 20)); L[3].appendChild(lbl(TX-20, 628, "TO IZTAPALAPA", "#14110F", 20)); L[3].appendChild(lbl(150, TY-24, "TO TLACOPAN", "#14110F", 20));
    // 4 aqueduct from Chapultepec
    L[4].appendChild(s("path", { d:`M120 ${TY+90} C 220 ${TY+60}, 320 ${TY+20}, ${TX-120} ${TY+14}`, stroke:"#7FF3FF", "stroke-width":8, "stroke-dasharray":"14 8", fill:"none" }));
    L[4].appendChild(s("circle", { cx:110, cy:TY+94, r:22, fill:"#4f7a3a" })); L[4].appendChild(lbl(110, TY+140, "CHAPULTEPEC SPRINGS", "#14110F", 20));
    // 5 Templo Mayor twin shrines
    const tg = s("g", { transform:`translate(${TX} ${TY-6})` });
    tg.appendChild(s("path", { d:"M-44 22 h88 l-10 -14 h-68z M-34 8 h68 l-8 -12 h-52z M-26 -4 h52 l-6 -10 h-40z", fill:"#efe3c6", stroke:"#5a3825", "stroke-width":2 }));
    tg.appendChild(s("rect", { x:-20, y:-30, width:16, height:16, fill:"#B3262E" })); tg.appendChild(s("rect", { x:4, y:-30, width:16, height:16, fill:"#2E9FB0" }));
    L[5].appendChild(tg);
    L[5].appendChild(lbl(TX, TY + 64, "TEMPLO MAYOR", "#14110F", 22));
    const TXT = [
      ["c. 1325 · The island", "The Mexica had wandered for years from a homeland they called **Aztlan**. Their tradition says they were told to settle where they saw an **eagle on a cactus** — on a swampy island in **Lake Texcoco**."],
      ["Chinampas", "No farmland? Make it! **Chinampas** were fields built in the shallow lake from mud and plants, held by stakes and willow trees. They gave several harvests a year."],
      ["The city grows", "Canals worked like streets — people travelled by **canoe**. The city was laid out in neat quarters."],
      ["Causeways", "Three great **causeways** joined the island to the shore, with bridges that could be lifted for defence."],
      ["Fresh water", "Lake Texcoco was salty, so an **aqueduct** carried fresh water from the springs of **Chapultepec**."],
      ["Tenochtitlan, 1519", "At its centre stood the **Templo Mayor** with twin shrines. By 1519, perhaps **200,000** people lived here — one of the largest cities in the world."]
    ];
    const P = panel(560); host.appendChild(P);
    const tt = ptitle(TXT[0][0]), msg = pmsg(TXT[0][1]);
    P.append(h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"800", letterSpacing:".14em", color:"#2E9FB0", fontSize:"20px" } }, "BUILD TENOCHTITLAN · PRESS →"), tt, msg);
    const step = k => { L.forEach((g, i) => g.setAttribute("opacity", i <= k ? 1 : 0)); tt.textContent = TXT[k][0]; msg.innerHTML = FC.md(TXT[k][1]); FC.sfx("paper"); };
    step(0);
    return { steps:5, step };
  };

  /* =======================================================
     TUE · Then & now slider
     ======================================================= */
  IX.thennow = function(host){
    const W = 1100, H = 690, id = "tn" + (++UID);
    const v = svg(W, H, { style:`position:absolute;left:0;top:0;width:${W}px;height:${H}px;border-radius:16px;touch-action:none` });
    v.innerHTML = `<defs><clipPath id="${id}"><rect id="${id}r" x="0" y="0" width="550" height="${H}"/></clipPath></defs>`;
    host.appendChild(v);
    // NOW (full)
    const now = s("g");
    now.appendChild(s("rect", { width:W, height:H, fill:"#9a958c" }));
    const r = FC.rng(3);
    for (let i=0;i<900;i++){ const x = r()*W, y = r()*H; now.appendChild(s("rect", { x, y, width:14 + r()*16, height:10 + r()*12, fill:["#b8b2a6","#cfc9bd","#a39d91","#8a857c"][i%4] })); }
    for (let i=0;i<10;i++) now.appendChild(s("path", { d:`M0 ${60 + i*66} Q 550 ${40 + i*66 + (i%3)*20} 1100 ${70 + i*66}`, stroke:"#6a665e", "stroke-width":5, fill:"none" }));
    for (let i=0;i<9;i++) now.appendChild(s("path", { d:`M${80 + i*120} 0 L${60 + i*125} 690`, stroke:"#6a665e", "stroke-width":5 }));
    now.appendChild(s("path", { d:"M760 150 C 860 140, 940 200, 930 260 C 900 300, 820 280, 780 240Z", fill:"#2E9FB0" })); now.appendChild(lbl(860, 210, "TEXCOCO (remnant)", "#F4EBD8", 18));
    now.appendChild(s("path", { d:"M300 600 c 40 -20 80 10 120 -6 c 30 -12 60 4 90 -4", stroke:"#2E9FB0", "stroke-width":8, fill:"none" })); now.appendChild(lbl(420, 640, "XOCHIMILCO CANALS", "#14110F", 20));
    now.appendChild(s("circle", { cx:TX, cy:TY, r:16, fill:"#B3262E", stroke:"#F4EBD8", "stroke-width":4 })); now.appendChild(lbl(TX, TY - 26, "ZÓCALO", "#14110F", 22));
    now.appendChild(lbl(W - 30, H - 30, "MEXICO CITY · TODAY", "#14110F", 30, "end"));
    v.appendChild(now);
    // THEN (clipped)
    const then = s("g", { "clip-path":`url(#${id})` });
    drawLake(then);
    then.appendChild(s("ellipse", { cx:TX, cy:TY, rx:150, ry:96, fill:"#c9a06a" }));
    const r2 = FC.rng(8); for (let i=0;i<100;i++){ const a = r2()*Math.PI*2, rr = r2()*90; then.appendChild(s("rect", { x:TX + Math.cos(a)*rr*1.45 - 6, y:TY + Math.sin(a)*rr*.9 - 6, width:12, height:12, fill:"#efe3c6", stroke:"#8a7a62" })); }
    then.appendChild(s("path", { d:`M${TX} ${TY-80} L${TX+10} 120 M${TX} ${TY+80} L${TX-20} 600 M${TX-150} ${TY} L180 ${TY-10}`, stroke:"#d8c8a0", "stroke-width":12, fill:"none" }));
    then.appendChild(lbl(30, 50, "TENOCHTITLAN · 1519", "#F4EBD8", 30, "start"));
    v.appendChild(then);
    const bar = s("g"); bar.appendChild(s("line", { x1:0, x2:0, y1:0, y2:H, stroke:"#F4EBD8", "stroke-width":5 })); bar.appendChild(s("circle", { cx:0, cy:H/2, r:28, fill:"#F4EBD8", stroke:"#14110F", "stroke-width":3 })); bar.appendChild(lbl(0, H/2 + 9, "⇔", "#14110F", 28));
    v.appendChild(bar);
    const P = panel(600); host.appendChild(P);
    const msg = pmsg("Drag the line. **Left:** Tenochtitlan in 1519. **Right:** the same place today.");
    P.append(ptitle("Then & now"), msg,
      h("div", { style:{ display:"grid", gap:"10px", fontSize:"23px" } },
        h("div", null, "🏙️ ", h("b", null, "~22 million"), " people in greater Mexico City today"),
        h("div", null, "🌊 The lake was ", h("b", null, "drained"), " over centuries for farms and the growing city"),
        h("div", null, "📍 The Zócalo (main square) sits right beside the ruins of the ", h("b", null, "Templo Mayor"))));
    const rect = v.querySelector("#" + id + "r");
    let x = 550, drag = false;
    const place = () => { rect.setAttribute("width", x); bar.setAttribute("transform", `translate(${x} 0)`); };
    v.addEventListener("pointerdown", e => { e.stopPropagation(); drag = true; v.setPointerCapture(e.pointerId); x = FC.clamp(FC.toLocal(v, e)[0], 0, W); place(); });
    v.addEventListener("pointermove", e => { if (!drag) return; x = FC.clamp(FC.toLocal(v, e)[0], 0, W); place(); });
    v.addEventListener("pointerup", () => { drag = false; });
    v.addEventListener("click", e => e.stopPropagation());
    place();
    return { steps:2, step(k){ x = [550, 1100, 0][k]; place(); msg.innerHTML = FC.md(["Drag the line. **Left:** Tenochtitlan in 1519. **Right:** the same place today.", "**1519:** a city of canals, causeways and chinampas floating on a lake.", "**Today:** the lake is almost gone. The city covers the whole basin — built on soft, wet **clay**."][k]); } };
  };

  /* TUE · Sinking city */
  IX.sinking = function(host){
    const W = 1100, H = 690;
    const v = svg(W, H, { style:`position:absolute;left:0;top:0;width:${W}px;height:${H}px;border-radius:16px` });
    host.appendChild(v);
    const P = panel(600); host.appendChild(P);
    const yrs = big("0 years", "#B3262E"), msg = pmsg("");
    const slider = stop(h("input", { type:"range", min:0, max:30, step:1, value:0, style:{ position:"absolute", left:"40px", top:"640px", width:"1020px", accentColor:"#B3262E" } }));
    host.appendChild(slider);
    P.append(ptitle("The sinking city"), yrs, msg);
    const RATE = 30; // cm per year (some areas sink faster)
    function draw(y){
      FC.clear(v);
      const drop = y * RATE; // cm
      const px = Math.min(220, drop * .25);
      v.appendChild(s("rect", { width:W, height:H, fill:"#cfe3ea" }));
      // layers
      const gy = 260 + px;
      v.appendChild(s("rect", { x:0, y:gy, width:W, height:H - gy, fill:"#8a6a4a" }));
      v.appendChild(s("rect", { x:0, y:gy + 60, width:W, height:200 - px*.6, fill:"#6d5a48" }));
      v.appendChild(lbl(30, gy + 110, "SOFT LAKE-BED CLAY (full of water)", "#F4EBD8", 22, "start"));
      v.appendChild(s("rect", { x:0, y:540, width:W, height:150, fill:"#4a5a6a" })); v.appendChild(lbl(30, 600, "AQUIFER (underground water)", "#F4EBD8", 22, "start"));
      // water table
      const wt = 330 + Math.min(180, y*6);
      v.appendChild(s("line", { x1:0, x2:W, y1:wt, y2:wt, stroke:"#7FF3FF", "stroke-width":4, "stroke-dasharray":"14 8" }));
      v.appendChild(lbl(W - 30, wt - 10, "WATER LEVEL", "#2E6FB0", 20, "end"));
      // wells pumping
      [220, 860].forEach(x => { v.appendChild(s("rect", { x:x - 6, y:gy - 40, width:12, height:600 - gy + 40, fill:"#3b3b3b" })); v.appendChild(s("rect", { x:x - 24, y:gy - 70, width:48, height:34, fill:"#5a5a5a" })); v.appendChild(lbl(x, gy - 80, "PUMP", "#14110F", 18)); });
      // cathedral, tilting
      const tilt = Math.min(6, y * .2);
      const c = s("g", { transform:`translate(540 ${gy}) rotate(${tilt})` });
      c.appendChild(s("rect", { x:-140, y:-140, width:280, height:140, fill:"#e9dcc0", stroke:"#5a3825", "stroke-width":4 }));
      c.appendChild(s("rect", { x:-160, y:-230, width:60, height:230, fill:"#e9dcc0", stroke:"#5a3825", "stroke-width":4 }));
      c.appendChild(s("rect", { x:100, y:-230, width:60, height:230, fill:"#e9dcc0", stroke:"#5a3825", "stroke-width":4 }));
      c.appendChild(s("path", { d:"M-40 -140 a40 40 0 0 1 80 0z", fill:"#D9A23A" }));
      c.appendChild(s("rect", { x:-24, y:-70, width:48, height:70, fill:"#5a3825" }));
      v.appendChild(c);
      // original ground line + ruler
      v.appendChild(s("line", { x1:0, x2:W, y1:260, y2:260, stroke:"#B3262E", "stroke-width":3, "stroke-dasharray":"10 8" }));
      v.appendChild(lbl(30, 250, "GROUND LEVEL AT YEAR 0", "#B3262E", 20, "start"));
      v.appendChild(s("path", { d:`M980 260 V ${gy}`, stroke:"#B3262E", "stroke-width":6 }));
      v.appendChild(lbl(990, 250 + px/2, px > 10 ? `${(drop/100).toFixed(1)} m` : "", "#B3262E", 30, "start"));
      yrs.textContent = `${y} years`;
      msg.innerHTML = FC.md(y === 0 ? "Drag the slider to move through time. Watch the **water level** and the **ground**." :
        `**Pumps** pull water out of the ground faster than rain can refill it. The wet **clay** dries and squashes down, so the ground sinks — in some areas by up to about **30–40 cm a year**. After ${y} years: about **${(drop/100).toFixed(1)} m**!` + (y > 10 ? " Buildings tilt, pipes crack, and floods get worse." : ""));
    }
    slider.addEventListener("input", () => draw(+slider.value));
    draw(0);
    return {};
  };

  /* =======================================================
     WED · Magnetic field visualiser (iron filings)
     ======================================================= */
  IX.magfield = function(host){
    const W = 1100, H = 690;
    const cv = stop(h("canvas", { width:W*2, height:H*2, style:{ position:"absolute", left:"0", top:"0", width:W+"px", height:H+"px", borderRadius:"16px", background:"#efe3c6", cursor:"crosshair" } }));
    host.appendChild(cv);
    const ctx = cv.getContext("2d"); ctx.scale(2, 2);
    const P = panel(600); host.appendChild(P);
    const msg = pmsg("**Sprinkle iron filings** around a bar magnet. Each tiny piece of iron lines up with the invisible **magnetic field**.");
    const grid = h("div", { style:{ marginTop:"auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px" } });
    P.append(ptitle("Magnetic field"), msg, grid);
    let mode = "one", sprinkled = 0, mouse = null, raf;
    const mags = () => mode === "one" ? [{ x:550, y:345, flip:false }] : mode === "attract" ? [{ x:330, y:345, flip:false }, { x:770, y:345, flip:false }] : [{ x:330, y:345, flip:false }, { x:770, y:345, flip:true }];
    function poles(){ const out = []; mags().forEach(m => { const nX = m.x + (m.flip ? -90 : 90), sX = m.x + (m.flip ? 90 : -90); out.push({ x:nX, y:m.y, q:1 }, { x:sX, y:m.y, q:-1 }); }); return out; }
    function field(x, y){ let bx = 0, by = 0; poles().forEach(p => { const dx = x - p.x, dy = y - p.y, r2 = dx*dx + dy*dy + 40, r3 = r2 * Math.sqrt(r2); bx += p.q*dx/r3; by += p.q*dy/r3; }); return [bx, by]; }
    const rnd = FC.rng(12); const pts = Array.from({ length:2600 }, () => [rnd()*W, rnd()*H]);
    function draw(){
      ctx.clearRect(0, 0, W, H);
      const n = Math.min(pts.length, sprinkled);
      ctx.strokeStyle = "rgba(40,30,25,.75)"; ctx.lineWidth = 1.6;
      for (let i=0;i<n;i++){ const [x, y] = pts[i]; const [bx, by] = field(x, y); const m = Math.hypot(bx, by) || 1; const l = 7; ctx.beginPath(); ctx.moveTo(x - bx/m*l, y - by/m*l); ctx.lineTo(x + bx/m*l, y + by/m*l); ctx.stroke(); }
      mags().forEach(m => { const nLeft = m.flip; ctx.fillStyle = nLeft ? "#B3262E" : "#2E6FB0"; ctx.fillRect(m.x - 110, m.y - 30, 110, 60); ctx.fillStyle = nLeft ? "#2E6FB0" : "#B3262E"; ctx.fillRect(m.x, m.y - 30, 110, 60);
        ctx.fillStyle = "#fff"; ctx.font = "900 34px 'Big Shoulders Display'"; ctx.textAlign = "center"; ctx.fillText(nLeft ? "N" : "S", m.x - 55, m.y + 12); ctx.fillText(nLeft ? "S" : "N", m.x + 55, m.y + 12); });
      if (mouse){ const [bx, by] = field(mouse[0], mouse[1]); const a = Math.atan2(by, bx); ctx.save(); ctx.translate(mouse[0], mouse[1]); ctx.beginPath(); ctx.arc(0, 0, 34, 0, Math.PI*2); ctx.fillStyle = "#fff8e8"; ctx.fill(); ctx.strokeStyle = "#3b2418"; ctx.lineWidth = 3; ctx.stroke(); ctx.rotate(a);
        ctx.fillStyle = "#B3262E"; ctx.beginPath(); ctx.moveTo(28, 0); ctx.lineTo(0, -7); ctx.lineTo(0, 7); ctx.fill(); ctx.fillStyle = "#2E6FB0"; ctx.beginPath(); ctx.moveTo(-28, 0); ctx.lineTo(0, -7); ctx.lineTo(0, 7); ctx.fill(); ctx.restore(); }
    }
    function sprinkle(){ cancelAnimationFrame(raf); sprinkled = 0; FC.sfx("paper"); (function an(){ sprinkled += 90; draw(); if (sprinkled < pts.length) raf = requestAnimationFrame(an); })(); }
    cv.addEventListener("pointermove", e => { const [x, y] = FC.toLocal(cv, e); mouse = [x, y]; draw(); });
    cv.addEventListener("pointerleave", () => { mouse = null; draw(); });
    const set = (m, t) => { mode = m; msg.innerHTML = FC.md(t); sprinkle(); };
    grid.append(small(btn("✨ Sprinkle filings", () => sprinkle(), "on")),
      small(darkB(btn("One magnet", () => set("one", "Field lines loop from the **N pole** round to the **S pole**. They're closest together — strongest — at the **poles**."), "dark"))),
      small(darkB(btn("N → S: attract", () => set("attract", "**Opposite poles attract.** Field lines join up between the magnets."), "dark"))),
      small(darkB(btn("N ↔ N: repel", () => set("repel", "**Like poles repel.** The field lines push away from each other — see the empty gap in the middle?"), "dark"))));
    grid.appendChild(h("div", { style:{ gridColumn:"1 / -1", fontSize:"20px", opacity:".8" } }, "🧭 Move the mouse over the paper — a compass needle points along the field."));
    sprinkle();
    return { destroy(){ cancelAnimationFrame(raf); } };
  };

  /* WED · What's magnetic? (8 materials → 3 magnetic) */
  IX.magtest = function(host){
    const M = [
      { n:"Iron nail", m:true, e:"🔩", why:"**Iron** is magnetic." },
      { n:"Steel paperclip", m:true, e:"📎", why:"**Steel** is mostly iron — magnetic!" },
      { n:"Steel scissors", m:true, e:"✂️", why:"Steel blades contain iron — magnetic." },
      { n:"Aluminium can", m:false, e:"🥫", why:"Aluminium is a **metal**, but it's **not** magnetic. Surprise!" },
      { n:"Copper wire", m:false, e:"🟠", why:"Copper conducts electricity but is **not** magnetic." },
      { n:"Gold ring", m:false, e:"💍", why:"Gold is not magnetic." },
      { n:"Plastic spoon", m:false, e:"🥄", why:"Plastic is not magnetic." },
      { n:"Wooden block", m:false, e:"🪵", why:"Wood is not magnetic." }
    ];
    const W = 1100;
    const v = svg(W, 470, { style:`position:absolute;left:0;top:0;width:${W}px;height:470px;border-radius:16px` });
    host.appendChild(v);
    v.appendChild(s("rect", { width:W, height:470, rx:16, fill:"#1b2124" }));
    const mg = s("g", { transform:"translate(550 90)" });
    mg.appendChild(s("path", { d:"M-120 0 v120 a120 120 0 0 0 240 0 v-120 h-70 v120 a50 50 0 0 1 -100 0 v-120z", fill:"#B3262E", stroke:"#14110F", "stroke-width":4 }));
    mg.appendChild(s("rect", { x:-120, y:0, width:70, height:40, fill:"#d8d8d8" })); mg.appendChild(s("rect", { x:50, y:0, width:70, height:40, fill:"#d8d8d8" }));
    mg.appendChild(lbl(-85, 30, "N", "#14110F", 30)); mg.appendChild(lbl(85, 30, "S", "#14110F", 30));
    v.appendChild(mg);
    const item = s("g"); v.appendChild(item);
    const res = lbl(550, 440, "", "#F4EBD8", 40); v.appendChild(res);
    const tray = h("div", { style:{ position:"absolute", left:"20px", top:"500px", width:"1060px", display:"grid", gridTemplateColumns:"repeat(8,1fr)", gap:"8px" } });
    host.appendChild(tray);
    const P = panel(600); host.appendChild(P);
    const count = big("0 / 0", "#B3262E"), msg = pmsg("Tap a material. **Predict first:** will the magnet pull it up?");
    const table = h("div", { style:{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"6px 14px", fontSize:"21px" } });
    const rows = M.map(m => { const r = h("div", { style:{ opacity:".45" } }, `${m.e} ${m.n} · ?`); table.appendChild(r); return r; });
    P.append(ptitle("What's magnetic?"), h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"800", letterSpacing:".12em", fontSize:"18px", opacity:".7" } }, "MAGNETIC FOUND"), count, table, msg);
    const tested = new Set();
    M.forEach((m, i) => {
      const b = h("button", { class:"pcard hov", style:{ border:"0", cursor:"pointer", padding:"10px 4px", display:"flex", flexDirection:"column", alignItems:"center", gap:"6px", font:"inherit" } }, h("span", { style:{ fontSize:"50px", lineHeight:"1" } }, m.e), h("span", { style:{ fontSize:"18px", fontWeight:"700", lineHeight:"1.05", textAlign:"center" } }, m.n));
      b.addEventListener("click", e => { e.stopPropagation(); test(i); });
      tray.appendChild(b);
    });
    function test(i){
      const m = M[i];
      FC.clear(item);
      const g = s("g"); g.appendChild(s("rect", { x:-110, y:-24, width:220, height:48, rx:10, fill: m.m ? "#9aa4a8" : "#6a5a4a", stroke:"#14110F", "stroke-width":3 })); g.appendChild(lbl(0, 9, m.n.toUpperCase(), "#F4EBD8", 22));
      item.appendChild(g);
      g.animate([{ transform:"translate(550px, 380px)" }, { transform: m.m ? "translate(550px, 238px)" : "translate(550px, 380px)" }], { duration: m.m ? 450 : 300, fill:"forwards", easing:"cubic-bezier(.5,0,.7,1.4)" });
      FC.sfx(m.m ? "ok" : "no");
      res.textContent = m.m ? "MAGNETIC — CLICK!" : "NOT MAGNETIC"; res.setAttribute("fill", m.m ? "#7FF3FF" : "#F08A8A");
      tested.add(i); rows[i].textContent = `${m.e} ${m.n} · ${m.m ? "🧲 yes" : "✗ no"}`; rows[i].style.opacity = "1"; rows[i].style.fontWeight = m.m ? "800" : "";
      count.textContent = `${[...tested].filter(k => M[k].m).length} / ${tested.size}`;
      msg.innerHTML = FC.md(m.why + (tested.size === 8 ? " — **All tested!** Only things containing **iron** (like steel) were magnetic. Not all metals are magnetic!" : ""));
    }
    return {};
  };

  /* WED · Weigh the evidence (balance scale) — generic */
  IX.weighup = function(host, cfg){
    const ITEMS = cfg.items || [];
    const W = 1100;
    const v = svg(W, 330, { style:`position:absolute;left:0;top:0;width:${W}px;height:330px` });
    host.appendChild(v);
    const beam = s("g", { style:"transition:transform .7s cubic-bezier(.3,1.4,.5,1)" });
    v.appendChild(s("path", { d:"M550 300 L520 330 H580Z M546 80 h8 v220 h-8z", fill:"#5a3825" }));
    beam.appendChild(s("rect", { x:180, y:76, width:740, height:12, rx:6, fill:"#3b2418" }));
    const pan = (x, t, c) => { const g = s("g"); g.appendChild(s("path", { d:`M${x} 88 L${x - 90} 190 M${x} 88 L${x + 90} 190`, stroke:"#3b2418", "stroke-width":3 })); g.appendChild(s("path", { d:`M${x - 110} 190 h220 a110 30 0 0 1 -220 0z`, fill:c, stroke:"#3b2418", "stroke-width":3 })); g.appendChild(lbl(x, 270, t, c, 30)); return g; };
    beam.append(pan(250, cfg.forLabel || "FOR", "#1F7A5A"), pan(850, cfg.againstLabel || "AGAINST", "#B3262E"));
    v.appendChild(beam);
    v.appendChild(s("circle", { cx:550, cy:82, r:12, fill:"#D9A23A" }));
    const claim = h("div", { class:"pcard", style:{ position:"absolute", right:"0", top:"0", width:"640px", height:"330px", padding:"20px 24px" } });
    const msg = pmsg(cfg.intro || "Tap each card. Decide: does it support the claim, or not?");
    claim.append(h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", letterSpacing:".14em", color:"#B3262E", fontSize:"20px" } }, "THE CLAIM"), h("div", { style:{ fontFamily:"var(--f-display)", fontWeight:"900", fontSize:"36px", lineHeight:"1.08", margin:"6px 0 12px" } }, cfg.claim || ""), msg);
    host.appendChild(claim);
    let fw = 0, ag = 0, n = 0;
    ITEMS.forEach((it, i) => {
      const c = h("div", { class:"pcard hov", style:{ position:"absolute", left:((i%3)*590)+"px", top:(356 + Math.floor(i/3)*170)+"px", width:"570px", height:"154px", padding:"14px 18px", cursor:"pointer" } });
      const d = h("div", { style:{ fontSize:"21px", lineHeight:"1.24", marginTop:"6px" } }); d.innerHTML = FC.md(it.d);
      const tag = h("span", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"18px", letterSpacing:".1em", marginLeft:"10px", color: it.side === "for" ? "#1F7A5A" : "#B3262E", opacity:"0" } }, it.side === "for" ? "SUPPORTS ✓" : "AGAINST ✗");
      c.append(h("div", { style:{ fontFamily:"var(--f-display)", fontWeight:"900", fontSize:"28px" } }, it.t, tag), d);
      c.addEventListener("click", e => { e.stopPropagation(); if (c.dataset.u) return; c.dataset.u = "1"; n++; tag.style.opacity = "1"; FC.sfx("paper");
        if (it.side === "for") fw++; else ag++;
        beam.style.transformOrigin = "550px 82px"; beam.style.transform = `rotate(${FC.clamp((ag - fw) * 5, -18, 18)}deg)`;
        if (n === ITEMS.length) msg.innerHTML = FC.md(cfg.outro || "All the evidence is in. What's your verdict — and how sure are you?"); });
      host.appendChild(c);
    });
    return {};
  };

  /* =======================================================
     FRI · Aztec motif stamp & pattern repeater
     ======================================================= */
  const MOTIFS = {
    fret:(g, c) => g.appendChild(s("path", { d:"M8 92 V40 H60 V70 H38 V56 M92 8 V60 H40 V30 H62 V44", stroke:c, "stroke-width":12, fill:"none", "stroke-linecap":"square" })),
    zigzag:(g, c) => g.appendChild(s("path", { d:"M4 70 L20 30 L36 70 L52 30 L68 70 L84 30 L96 60", stroke:c, "stroke-width":12, fill:"none", "stroke-linejoin":"miter" })),
    spiral:(g, c) => g.appendChild(s("path", { d:"M50 50 m-4 0 a4 4 0 1 1 8 0 a12 12 0 1 1 -20 -6 a22 22 0 1 1 34 26 a32 32 0 0 1 -50 -10", stroke:c, "stroke-width":9, fill:"none", "stroke-linecap":"round" })),
    diamond:(g, c) => { g.appendChild(s("path", { d:"M50 6 L94 50 L50 94 L6 50Z", fill:"none", stroke:c, "stroke-width":10 })); g.appendChild(s("path", { d:"M50 30 L70 50 L50 70 L30 50Z", fill:c })); },
    flower:(g, c) => { for (let i=0;i<8;i++){ const a = i*Math.PI/4; g.appendChild(s("circle", { cx:50 + Math.cos(a)*28, cy:50 + Math.sin(a)*28, r:12, fill:c })); } g.appendChild(s("circle", { cx:50, cy:50, r:14, fill:"none", stroke:c, "stroke-width":7 })); }
  };
  IX.stamp = function(host){
    let motif = "fret", mode = "block", pal = 0;
    const PALS = [["#B3262E", "#efe3c6"], ["#14110F", "#D9A23A"], ["#1F7A5A", "#efe3c6"], ["#2E9FB0", "#14110F"]];
    const v = svg(1100, 690, { style:"position:absolute;left:0;top:0;width:1100px;height:690px;border-radius:14px;box-shadow:var(--sh-3)" });
    host.appendChild(v);
    const P = panel(600); host.appendChild(P);
    const msg = pmsg("");
    const mg = h("div", { style:{ display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:"8px" } });
    Object.keys(MOTIFS).forEach(k => { const b = small(btn(k === "fret" ? "Step-fret" : k[0].toUpperCase() + k.slice(1), () => { motif = k; [...mg.children].forEach(x => x.classList.toggle("on", x === b)); draw(); }, k === motif ? "on" : "")); b.style.fontSize = "16px"; mg.appendChild(b); });
    const md = h("div", { style:{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"8px" } });
    [["block","Block"],["halfdrop","Half-drop"],["mirror","Mirror"],["rotate","Rotate"]].forEach(([k, t]) => { const b = small(darkB(btn(t, () => { mode = k; [...md.children].forEach(x => x.classList.toggle("on", x === b)); draw(); }, "dark" + (k === mode ? " on" : "")))); md.appendChild(b); });
    const pb = small(btn("🎨 Ink colour", () => { pal = (pal + 1) % PALS.length; draw(); }, ""));
    P.append(ptitle("Stamp studio"), msg, h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"800", letterSpacing:".12em", fontSize:"17px", opacity:".7" } }, "MOTIF"), mg, h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"800", letterSpacing:".12em", fontSize:"17px", opacity:".7" } }, "REPEAT"), md, h("div", { style:{ marginTop:"auto" } }, pb));
    function draw(){
      FC.clear(v);
      const [ink, paper] = PALS[pal];
      v.appendChild(s("rect", { width:1100, height:690, fill:paper }));
      const cols = 10, rows = 6, w = 110, hh = 115;
      for (let r=0;r<rows + 1;r++) for (let c=0;c<cols;c++){
        let x = c*w, y = r*hh, sx = 1, sy = 1, rot = 0;
        if (mode === "halfdrop" && c % 2) y -= hh/2;
        if (mode === "mirror"){ sx = c % 2 ? -1 : 1; sy = r % 2 ? -1 : 1; }
        if (mode === "rotate") rot = ((r + c) % 4) * 90;
        const g = s("g", { transform:`translate(${x + w/2} ${y + hh/2}) rotate(${rot}) scale(${sx} ${sy}) translate(-45 -45) scale(.9)`, opacity:.92 });
        MOTIFS[motif](g, ink);
        v.appendChild(g);
      }
      v.appendChild(s("rect", { width:1100, height:690, filter:"url(#fx-grain)", fill:"#fff", opacity:.15 }));
      msg.innerHTML = FC.md({ block:"**Block repeat:** the stamp is printed in straight rows and columns.", halfdrop:"**Half-drop:** every second column drops by half a stamp — the pattern seems to **step** like a pyramid.", mirror:"**Mirror:** the stamp is flipped each time — making new shapes where prints meet.", rotate:"**Rotate:** the stamp is turned a quarter-turn each time." }[mode] + " Aztec clay stamps (*sellos*) printed patterns like these onto cloth and paper.");
    }
    draw();
    return {};
  };

  FC.art.stampStep = function(n){
    const v = svg(800, 600);
    v.appendChild(s("rect", { width:800, height:600, rx:20, fill:"#efe3c6" }));
    const g = s("g", { filter:"url(#fx-paper)" });
    if (n === 0){
      g.appendChild(s("rect", { x:120, y:140, width:240, height:240, fill:"#c9a06a", stroke:"#3b2418", "stroke-width":4 }));
      g.appendChild(lbl(240, 420, "THICK CARD BASE", "#3b2418", 24));
      [[460,160],[560,220],[480,300],[600,320]].forEach(([x, y], i) => g.appendChild(s("rect", { x, y, width:[90,60,120,70][i], height:[30,90,24,50][i], fill:"#e2c79a", stroke:"#3b2418", "stroke-width":3 })));
      g.appendChild(lbl(560, 420, "SCRAP CARD SHAPES", "#3b2418", 24));
    } else if (n === 1){
      g.appendChild(s("rect", { x:200, y:100, width:400, height:400, fill:"#efe3c6", stroke:"#3b2418", "stroke-width":4 }));
      const m = s("g", { transform:"translate(220 120) scale(3.6)" }); MOTIFS.fret(m, "#3b2418"); m.setAttribute("opacity", .7); g.appendChild(m);
      g.appendChild(lbl(400, 550, "SKETCH A BOLD, SIMPLE MOTIF", "#3b2418", 26));
    } else if (n === 2){
      g.appendChild(s("rect", { x:200, y:100, width:400, height:400, fill:"#c9a06a", stroke:"#3b2418", "stroke-width":4 }));
      const m = s("g", { transform:"translate(220 120) scale(3.6)" }); MOTIFS.fret(m, "#e2c79a"); g.appendChild(m);
      g.appendChild(lbl(400, 550, "GLUE CARD STRIPS ON THE LINES (RAISED = PRINTS)", "#3b2418", 24));
    } else if (n === 3){
      g.appendChild(s("rect", { x:200, y:180, width:400, height:300, fill:"#c9a06a", stroke:"#3b2418", "stroke-width":4 }));
      g.appendChild(s("rect", { x:180, y:110, width:440, height:50, rx:25, fill:"#B3262E", stroke:"#3b2418", "stroke-width":4 }));
      g.appendChild(s("path", { d:"M400 110 v-60", stroke:"#5a3825", "stroke-width":14 }));
      g.appendChild(lbl(400, 540, "ROLL OR DAB PAINT THINLY ON THE RAISED PARTS", "#3b2418", 24));
    } else {
      for (let r=0;r<2;r++) for (let c=0;c<4;c++){ const m = s("g", { transform:`translate(${90 + c*160 + (c%2 ? 0 : 0)} ${120 + r*180 + (c%2 ? 90 : 0)}) scale(1.4)` }); MOTIFS.fret(m, "#B3262E"); g.appendChild(m); }
      g.appendChild(lbl(400, 560, "PRESS FIRMLY · LIFT · REPEAT (HALF-DROP!)", "#3b2418", 26));
    }
    v.appendChild(g);
    return v;
  };

  /* Folio VI seal art — a marketplace */
  A.marketFolio = function(){
    const v = svg(800, 1000);
    v.appendChild(s("rect", { width:800, height:1000, fill:"#efe3c6" }));
    v.appendChild(s("rect", { x:30, y:30, width:740, height:940, fill:"none", stroke:"#B3262E", "stroke-width":10 }));
    v.appendChild(s("rect", { x:50, y:50, width:700, height:900, fill:"none", stroke:"#B3262E", "stroke-width":3 }));
    const g = s("g", { filter:"url(#fx-rough)" });
    for (let r=0;r<3;r++) for (let c=0;c<3;c++){
      const x = 110 + c*200, y = 140 + r*260;
      g.appendChild(s("path", { d:`M${x} ${y+60} l80 -50 l80 50z`, fill:["#B3262E","#D9A23A","#2E9FB0"][(r+c)%3], stroke:"#3b2418", "stroke-width":4 }));
      g.appendChild(s("rect", { x:x + 10, y:y + 60, width:140, height:110, fill:"#c9a06a", stroke:"#3b2418", "stroke-width":4 }));
      const k = (r*3 + c) % 4;
      if (k === 0) for (let i=0;i<9;i++) g.appendChild(s("ellipse", { cx:x + 34 + (i%3)*40, cy:y + 90 + Math.floor(i/3)*26, rx:14, ry:9, fill:"#5a3825" }));
      if (k === 1) for (let i=0;i<4;i++) g.appendChild(s("path", { d:`M${x + 30 + i*30} ${y + 160} q-10 -60 10 -90`, stroke:["#1F7A5A","#2E9FB0","#B3262E","#D9A23A"][i], "stroke-width":12, fill:"none", "stroke-linecap":"round" }));
      if (k === 2) for (let i=0;i<3;i++) g.appendChild(s("circle", { cx:x + 40 + i*40, cy:y + 120, r:18, fill:"#b86a3e", stroke:"#3b2418", "stroke-width":3 }));
      if (k === 3) for (let i=0;i<3;i++) g.appendChild(s("rect", { x:x + 24 + i*40, y:y + 80, width:32, height:70, fill:["#B3262E","#efe3c6","#1F7A5A"][i], stroke:"#3b2418", "stroke-width":3 }));
    }
    v.appendChild(g);
    return v;
  };
})(window.FC);
