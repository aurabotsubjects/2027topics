/* ==========================================================
   WEEK 8 INTERACTIVES — The Fifth Sun
   ========================================================== */
(function(FC){
  "use strict";
  const h = FC.h, s = FC.s, svg = FC.svg, A = FC.art, IX = FC.IX, M = FC.map;
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

  /* =======================================================
     MON · Templo Mayor layers (7 building stages)
     ======================================================= */
  IX.templolayers = function(host){
    const W = 1100, H = 690, cx = 550, base = 640;
    const v = svg(W, H, { style:`position:absolute;left:0;top:0;width:${W}px;height:${H}px;border-radius:16px` });
    host.appendChild(v);
    v.appendChild(s("rect", { width:W, height:H, fill:"#2a211a" }));
    v.appendChild(s("rect", { y:base, width:W, height:H - base, fill:"#3b2a1e" }));
    const COL = ["#efe3c6","#e2cfa6","#d6bb88","#c9a76c","#b99256","#a77d45","#946a37"];
    const layers = [];
    // stage 7 is biggest (outermost); stage 1 smallest (innermost)
    for (let k=6;k>=0;k--){
      const w = 260 + k*90, hh = 150 + k*40, g = s("g", { style:"transition:opacity .6s, transform .6s" });
      const steps = 4;
      for (let i=0;i<steps;i++){ const ww = w - i*(w*.16), y = base - (i+1)*hh/steps; g.appendChild(s("rect", { x:cx - ww/2, y, width:ww, height:hh/steps + 1, fill:COL[k], stroke:"#3b2418", "stroke-width":3 })); }
      const top = base - hh, tw = w - steps*(w*.16) + w*.16;
      g.appendChild(s("rect", { x:cx - tw/2 + 6, y:top - 46, width:tw/2 - 18, height:46, fill:"#B3262E", stroke:"#3b2418", "stroke-width":3 }));
      g.appendChild(s("rect", { x:cx + 12, y:top - 46, width:tw/2 - 18, height:46, fill:"#2E9FB0", stroke:"#3b2418", "stroke-width":3 }));
      g.appendChild(s("path", { d:`M${cx - w*.08} ${base} L${cx - w*.05} ${top} H${cx + w*.05} L${cx + w*.08} ${base}Z`, fill:"rgba(0,0,0,.18)" }));
      g.appendChild(lbl(cx + w/2 - 30, base - 12, `STAGE ${k+1}`, "#3b2418", 20, "end"));
      v.appendChild(g); layers[k] = g;
    }
    // Coyolxauhqui disc at base of stage 7 (simple geometric marker — no figure)
    const disc = s("g", { opacity:0, style:"transition:opacity .6s" });
    disc.appendChild(s("circle", { cx:cx, cy:base + 24, r:22, fill:"#c9b48a", stroke:"#3b2418", "stroke-width":3 }));
    disc.appendChild(lbl(cx + 34, base + 32, "1978: THE CARVED DISC", "#F0C25E", 20, "start"));
    v.appendChild(disc);
    const TXT = [
      ["1978 · A lucky dig", "On **21 February 1978**, electricity workers digging under a Mexico City street struck a huge carved stone disc. Archaeologists began to dig — and found the **Templo Mayor**, the great temple of Tenochtitlan."],
      ["Stage 7 · 1519", "The temple the Spanish saw: about 45 m high, with **two shrines** on top — one for the rain god Tlaloc (blue) and one for Huitzilopochtli, god of sun and war (red)."],
      ["Peeling the layers", "Like a **Russian doll** (or an onion!), each ruler built a **bigger** temple right over the old one."],
      ["…deeper…", "Archaeologists found **seven building stages** in total, the first after the city was founded around 1325."],
      ["Stage 1", "The oldest, smallest temple is still there, deep inside. The excavation (1978–1982) was led by **Eduardo Matos Moctezuma**. Today you can visit the ruins and museum in Mexico City."]
    ];
    const P = panel(560); host.appendChild(P);
    const tt = ptitle(TXT[0][0]), msg = pmsg(TXT[0][1]);
    P.append(h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"800", letterSpacing:".14em", color:"#B9772D", fontSize:"20px" } }, "PRESS → TO PEEL THE LAYERS"), tt, msg);
    function step(k){
      const hide = [0, 0, 3, 5, 6][k]; // number of outer stages removed
      layers.forEach((g, i) => { const gone = i >= 7 - hide; g.style.opacity = gone ? .08 : 1; });
      disc.setAttribute("opacity", k === 0 ? 1 : 0);
      tt.textContent = TXT[k][0]; msg.innerHTML = FC.md(TXT[k][1]); FC.sfx(k ? "stone" : "paper");
    }
    step(0);
    return { steps:4, step };
  };

  /* MON · Sun Stone explorer (rings) */
  IX.sunstone = function(host){
    const W = 690, cx = 345, cy = 345;
    const wrap = h("div", { style:{ position:"absolute", left:"0", top:"0", width:"690px", height:"690px", borderRadius:"50%", overflow:"hidden", boxShadow:"var(--sh-3)" } });
    wrap.appendChild(A.artefactBox("sunstone", "width:100%;height:100%;border-radius:50%"));
    host.appendChild(wrap);
    const v = svg(W, W, { style:"position:absolute;left:0;top:0;width:690px;height:690px" });
    host.appendChild(v);
    const RINGS = [
      { r:[0, 80], t:"The centre face", d:"A face at the centre — often identified as the **sun** (or the earth). Scholars still debate who it shows." },
      { r:[80, 150], t:"Four past suns", d:"Four square panels show the **four earlier worlds** that, in Aztec belief, were each destroyed. Together with the centre they make the sign of the **Fifth Sun**." },
      { r:[150, 210], t:"20 day-signs", d:"A ring of the **20 day-signs** — the same idea as the Maya day count, with Aztec names (Crocodile, Wind, House…)." },
      { r:[210, 270], t:"Rays & decoration", d:"Sun **rays** and repeated symbols — jade, turquoise and precious things." },
      { r:[270, 345], t:"Fire serpents", d:"Two **fire serpents** circle the edge. Their tails meet at the top beside a date glyph." }
    ];
    const P = h("div", { class:"pcard", style:{ position:"absolute", right:"0", top:"0", width:"1040px", height:"690px", display:"flex", flexDirection:"column", gap:"14px", paddingLeft:"30px" } });
    host.appendChild(P);
    const tt = ptitle("The Sun Stone"), msg = pmsg("Found buried in Mexico City's main square in **1790**, it's about **3.6 m** across and weighs around **24 tonnes**. It's often called the ‘Aztec Calendar’ — but most experts think it was a **ceremonial stone** about the Aztec idea of the Sun and the ages of the world. Tap a ring.");
    P.append(tt, msg, h("div", { style:{ marginTop:"auto", fontSize:"19px", opacity:".75" } }, "Image: artistic reconstruction, not a photograph."));
    P.style.left = "720px"; P.style.width = "1040px";
    RINGS.forEach((R, i) => {
      const ring = s("path", { d:`M${cx - R.r[1]} ${cy} a${R.r[1]} ${R.r[1]} 0 1 0 ${R.r[1]*2} 0 a${R.r[1]} ${R.r[1]} 0 1 0 ${-R.r[1]*2} 0 ` + (R.r[0] ? `M${cx - R.r[0]} ${cy} a${R.r[0]} ${R.r[0]} 0 1 1 ${R.r[0]*2} 0 a${R.r[0]} ${R.r[0]} 0 1 1 ${-R.r[0]*2} 0` : ""), fill:"rgba(127,243,255,0)", "fill-rule":"evenodd", stroke:"rgba(255,255,255,.0)", "stroke-width":3, style:"cursor:pointer;transition:fill .25s" });
      ring.addEventListener("mouseenter", () => ring.setAttribute("fill", "rgba(127,243,255,.18)"));
      ring.addEventListener("mouseleave", () => { if (!ring.dataset.on) ring.setAttribute("fill", "rgba(127,243,255,0)"); });
      ring.addEventListener("click", e => { e.stopPropagation(); v.querySelectorAll("path").forEach(p => { p.dataset.on = ""; p.setAttribute("fill", "rgba(127,243,255,0)"); p.setAttribute("stroke", "rgba(255,255,255,0)"); }); ring.dataset.on = "1"; ring.setAttribute("fill", "rgba(127,243,255,.28)"); ring.setAttribute("stroke", "#7FF3FF"); tt.textContent = R.t; msg.innerHTML = FC.md(R.d); FC.sfx("paper"); });
      v.appendChild(ring);
    });
    return {};
  };

  /* =======================================================
     TUE · Altitude climber
     ======================================================= */
  IX.altitude = function(host){
    const W = 1100, H = 690;
    const v = svg(W, H, { style:`position:absolute;left:0;top:0;width:${W}px;height:${H}px;border-radius:16px` });
    host.appendChild(v);
    const ZONES = [
      { a:0, b:1000, n:"Hot lowlands (yunga & jungle)", crops:"cacao, coca, fruit, cassava", col:"#3d8a4a" },
      { a:1000, b:3500, n:"Warm valleys (quechua)", crops:"**maize**, beans, squash", col:"#9bb04a" },
      { a:3500, b:4100, n:"Cold high slopes (suni)", crops:"**potatoes**, **quinoa**, oca", col:"#b8a35a" },
      { a:4100, b:4800, n:"High grassland (puna)", crops:"**llama** & **alpaca** grazing", col:"#a89a7a" },
      { a:4800, b:6800, n:"Ice & rock (janca)", crops:"nothing grows — glaciers", col:"#e9eef2" }
    ];
    const Y = a => 640 - a / 6800 * 600;
    v.appendChild(s("rect", { width:W, height:H, fill:"#9fc0d8" }));
    // mountain profile coloured by zone
    const prof = x => { const t = x / W; return 6600 * Math.exp(-Math.pow((t - .62)/.2, 2)) + 200; };
    ZONES.forEach(z => {
      let d = "";
      for (let x=0;x<=W;x+=10){ const top = Math.min(prof(x), z.b); const bot = z.a; if (top <= bot) continue; d += `M${x} ${Y(bot)} L${x} ${Y(top)} L${x + 10} ${Y(top)} L${x + 10} ${Y(bot)}Z`; }
      v.appendChild(s("path", { d, fill:z.col, stroke:"none" }));
    });
    // terraces on the valley slope
    for (let i=0;i<9;i++){ const a = 2400 + i*180, x = 300 + i*24; v.appendChild(s("path", { d:`M${x} ${Y(a)} h70`, stroke:"#5a6a2a", "stroke-width":4 })); }
    v.appendChild(lbl(395, Y(2200), "TERRACES", "#2a3a10", 20));
    const climber = s("g"); climber.appendChild(s("circle", { r:16, fill:"#B3262E", stroke:"#14110F", "stroke-width":3 })); climber.appendChild(s("path", { d:"M0 16 v26 M-12 30 h24", stroke:"#14110F", "stroke-width":4 }));
    v.appendChild(climber);
    for (let a=0;a<=6000;a+=1000){ v.appendChild(s("line", { x1:0, x2:24, y1:Y(a), y2:Y(a), stroke:"#14110F", "stroke-width":2 })); v.appendChild(lbl(30, Y(a) + 7, `${a} m`, "#14110F", 18, "start")); }
    const P = panel(600); host.appendChild(P);
    const alt = big("0 m", "#2E6FB0"), temp = h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"34px" } }), zone = h("div", { style:{ fontFamily:"var(--f-display)", fontWeight:"900", fontSize:"30px" } }), msg = pmsg("");
    const sl = stop(h("input", { type:"range", min:0, max:6500, step:100, value:300, style:{ width:"100%", accentColor:"#2E6FB0" } }));
    P.append(ptitle("Climb the Andes"), alt, temp, zone, msg, h("div", { style:{ marginTop:"auto", fontFamily:"var(--f-label)", fontWeight:"800", letterSpacing:".12em", fontSize:"18px" } }, "DRAG TO CLIMB"), sl);
    function draw(){
      const a = +sl.value, t = 27 - a * 0.0065;
      const x = (() => { let best = 0, bd = 1e9; for (let xx=0; xx<W*.62; xx+=4){ const d = Math.abs(prof(xx) - a); if (d < bd){ bd = d; best = xx; } } return best; })();
      climber.setAttribute("transform", `translate(${x} ${Y(Math.max(a, 200)) - 44})`);
      const z = ZONES.find(z => a >= z.a && a < z.b) || ZONES[4];
      alt.textContent = `${a.toLocaleString()} m`; temp.textContent = `🌡 about ${t.toFixed(0)} °C`; zone.textContent = z.n;
      msg.innerHTML = FC.md(`Grows here: ${z.crops}. The air gets about **6.5 °C cooler** for every 1,000 m you climb. Inca farmers used every zone — and swapped food between them.`);
    }
    sl.addEventListener("input", draw); draw();
    return {};
  };

  /* TUE · Quipu knotter */
  IX.quipu = function(host){
    const CORDS = [{ c:"#B3262E", v:7 }, { c:"#D9A23A", v:23 }, { c:"#1F7A5A", v:105 }, { c:"#2E9FB0", v:0 }];
    const W = 1100, H = 690;
    const v = svg(W, H, { style:`position:absolute;left:0;top:0;width:${W}px;height:${H}px;border-radius:16px` });
    host.appendChild(v);
    const P = panel(600); host.appendChild(P);
    const msg = pmsg("A **quipu** (khipu) is a set of knotted cords. The Inca used them to record numbers — taxes, people, llamas — in **base 10**. Knots near the **bottom** are ones, higher up are tens, then hundreds. Tap a cord to add knots.");
    const out = big("", "#3b2418");
    const ctr = h("div", { style:{ marginTop:"auto", display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"8px" } });
    let sel = 3, place = 0;
    const pb = ["1s","10s","100s"].map((t, i) => small(btn(`+ knot (${t})`, () => { CORDS[sel].v = Math.min(999, CORDS[sel].v + Math.pow(10, i)); draw(); }, "")));
    pb.forEach(b => ctr.appendChild(b));
    ctr.append(small(darkB(btn("Clear cord", () => { CORDS[sel].v = 0; draw(); }, "dark"))));
    P.append(ptitle("Quipu knotter"), msg, out, ctr);
    function draw(){
      FC.clear(v);
      v.appendChild(s("rect", { width:W, height:H, fill:"#e9dcc0" }));
      v.appendChild(s("path", { d:"M80 70 Q550 40 1020 70", stroke:"#5a3825", "stroke-width":14, fill:"none", "stroke-linecap":"round" }));
      CORDS.forEach((c, i) => {
        const x = 200 + i*230, on = i === sel;
        const g = s("g", { style:"cursor:pointer" });
        g.appendChild(s("path", { d:`M${x} 64 C ${x - 8} 250, ${x + 8} 450, ${x} 640`, stroke:c.c, "stroke-width": on ? 14 : 10, fill:"none", "stroke-linecap":"round" }));
        g.appendChild(s("rect", { x:x - 60, y:60, width:120, height:600, fill:"transparent" }));
        const digits = [c.v % 10, Math.floor(c.v / 10) % 10, Math.floor(c.v / 100) % 10]; // ones, tens, hundreds
        const bandY = [560, 400, 240];
        digits.forEach((d, k) => { for (let j=0;j<d;j++) g.appendChild(s("ellipse", { cx:x, cy:bandY[k] - j*15, rx:15, ry:8, fill:c.c, stroke:"#14110F", "stroke-width":2 })); });
        g.appendChild(lbl(x, 680, String(c.v), on ? "#14110F" : "#5a3825", on ? 30 : 24));
        g.addEventListener("click", e => { e.stopPropagation(); sel = i; FC.sfx("paper"); draw(); });
        v.appendChild(g);
      });
      ["100s", "10s", "1s"].forEach((t, k) => { const y = [240, 400, 560][k]; v.appendChild(s("line", { x1:60, x2:1040, y1:y + 14, y2:y + 14, stroke:"rgba(90,56,37,.25)", "stroke-width":2, "stroke-dasharray":"8 8" })); v.appendChild(lbl(60, y, t, "#5a3825", 22, "start")); });
      out.textContent = `Cord ${sel + 1}: ${CORDS[sel].v}`;
    }
    draw();
    return {};
  };

  /* TUE · Voyage map (Polynesia ↔ South America) */
  IX.voyage = function(host){
    const v = M.build({ view:M.VIEWS.pacific });
    v.setAttribute("style", "position:absolute;left:0;top:0;width:1100px;height:690px;border-radius:16px");
    host.appendChild(v);
    const P = panel(600); host.appendChild(P);
    const tt = ptitle("The kūmara voyage"), msg = pmsg("");
    P.append(tt, msg);
    const steps = [
      ["Kūmara is South American", "The **kūmara** (sweet potato) was first farmed in **South and Central America**. Yet Polynesians were growing it **before** Europeans arrived in the Pacific. How did it get there?"],
      ["A voyage east", "Polynesian navigators were the greatest ocean voyagers of their time. Many scientists think some sailed all the way to **South America** — and brought kūmara home."],
      ["DNA evidence", "A **2020** genetic study found Native American DNA in people from several Polynesian islands, from contact **around 1200 CE** — traced to people from today's **Colombia** region."],
      ["To Aotearoa", "Kūmara travelled with voyagers to **Aotearoa**, where Māori developed clever ways to grow it in a cooler climate, such as adding gravel and sand to warm the soil."]
    ];
    const route = v.querySelector(".m-route");
    const mk = (a, b, c, lift) => { const p = s("path", { d:M.arc(a, b, lift), fill:"none", stroke:c, "stroke-width":6, "stroke-dasharray":"18 12", "vector-effect":"non-scaling-stroke", opacity:0, style:"transition:opacity .6s" }); route.appendChild(p); return p; };
    const arc1 = mk([-150, -17], [-77, 4], "#F0C25E", 160), arc2 = mk([-77, 4], [-150, -17], "#7FF3FF", -120), arc3 = mk([-150, -17], [174, -41], "#B3262E", 120);
    M.mark(v, [-77, 4], "Colombia", { color:"#F0C25E" });
    M.mark(v, [-150, -17], "Eastern Polynesia", { color:"#7FF3FF", side:"left" });
    M.mark(v, [174, -41], "Aotearoa", { color:"#B3262E", side:"left" });
    function step(k){ tt.textContent = steps[k][0]; msg.innerHTML = FC.md(steps[k][1]); arc1.setAttribute("opacity", k >= 1 ? 1 : 0); arc2.setAttribute("opacity", k >= 1 ? 1 : 0); arc3.setAttribute("opacity", k >= 3 ? 1 : 0); FC.sfx("paper"); }
    step(0);
    return { steps:3, step };
  };

  /* =======================================================
     WED · Generator crank
     ======================================================= */
  IX.generator = function(host){
    const W = 1100, H = 690;
    const v = svg(W, H, { style:`position:absolute;left:0;top:0;width:${W}px;height:${H}px;border-radius:16px;touch-action:none` });
    host.appendChild(v);
    v.appendChild(s("rect", { width:W, height:H, fill:"#1b2124" }));
    // coil (two halves around the magnet)
    const cx = 380, cy = 330;
    v.appendChild(s("rect", { x:cx - 200, y:cy - 160, width:400, height:320, rx:24, fill:"none", stroke:"#5a6a70", "stroke-width":4, "stroke-dasharray":"10 8" }));
    for (let i=0;i<14;i++){ v.appendChild(s("ellipse", { cx:cx - 180 + i*4, cy, rx:16, ry:120, fill:"none", stroke:"#C46A3A", "stroke-width":5 })); v.appendChild(s("ellipse", { cx:cx + 128 + i*4, cy, rx:16, ry:120, fill:"none", stroke:"#C46A3A", "stroke-width":5 })); }
    v.appendChild(lbl(cx - 150, cy + 160, "COIL", "#E08A55", 22)); v.appendChild(lbl(cx + 156, cy + 160, "COIL", "#E08A55", 22));
    const mag = s("g"); mag.appendChild(s("rect", { x:-110, y:-28, width:110, height:56, fill:"#B3262E" })); mag.appendChild(s("rect", { x:0, y:-28, width:110, height:56, fill:"#2E6FB0" }));
    mag.appendChild(lbl(-55, 10, "N", "#fff", 30)); mag.appendChild(lbl(55, 10, "S", "#fff", 30)); mag.appendChild(s("circle", { r:10, fill:"#d8d8d8" }));
    v.appendChild(mag);
    // crank
    const crank = s("g", { style:"cursor:grab" }); crank.appendChild(s("circle", { r:70, fill:"#2A2420", stroke:"#D9A23A", "stroke-width":5 })); crank.appendChild(s("line", { x1:0, y1:0, x2:0, y2:-60, stroke:"#D9A23A", "stroke-width":10, "stroke-linecap":"round" })); crank.appendChild(s("circle", { cy:-60, r:16, fill:"#F0C25E" }));
    const crankG = s("g", { transform:"translate(380 600)" }); crankG.appendChild(crank); v.appendChild(crankG);
    v.appendChild(lbl(380, 560, "↻ DRAG TO SPIN", "#F0C25E", 20));
    // wires to bulb + meter
    v.appendChild(s("path", { d:`M${cx + 190} ${cy - 100} H760 V160 M${cx + 190} ${cy + 100} H760 V500`, stroke:"#C46A3A", "stroke-width":5, fill:"none" }));
    const glow = s("circle", { cx:760, cy:120, r:150, fill:"url(#g-lamp)", opacity:0 }); v.appendChild(glow);
    const bulb = s("circle", { cx:760, cy:120, r:44, fill:"#5a5a50", stroke:"#E9DCC0", "stroke-width":4 }); v.appendChild(bulb);
    v.appendChild(s("rect", { x:680, y:460, width:160, height:110, rx:12, fill:"#efe3c6", stroke:"#3b2418", "stroke-width":3 }));
    v.appendChild(s("path", { d:"M700 550 A60 60 0 0 1 820 550", stroke:"#3b2418", "stroke-width":3, fill:"none" }));
    const needle = s("line", { x1:760, y1:550, x2:760, y2:494, stroke:"#B3262E", "stroke-width":4, "stroke-linecap":"round" }); v.appendChild(needle);
    v.appendChild(lbl(760, 590, "VOLTMETER", "#3b2418", 18));
    const P = panel(600); host.appendChild(P);
    const rpm = big("0", "#D9A23A"), msg = pmsg("Spin the crank. The **magnet** turns inside the **coil** of wire — and that **moving magnetic field** pushes electrons round the circuit.");
    const auto = stop(h("input", { type:"range", min:0, max:100, value:0, style:{ width:"100%", accentColor:"#D9A23A" } }));
    P.append(ptitle("Generator"), h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"800", letterSpacing:".12em", fontSize:"18px", opacity:".7" } }, "SPIN SPEED"), rpm, msg, h("div", { style:{ marginTop:"auto", fontFamily:"var(--f-label)", fontWeight:"800", letterSpacing:".12em", fontSize:"18px" } }, "OR SET A STEADY SPEED"), auto);
    let ang = 0, speed = 0, drag = null, raf, last = performance.now();
    function frame(t){
      const dt = Math.min(.05, (t - last) / 1000); last = t;
      const target = +auto.value / 100 * 12;
      if (!drag) speed += (target - speed) * Math.min(1, dt * 3);
      ang += speed * dt;
      mag.setAttribute("transform", `translate(${cx} ${cy}) rotate(${ang * 57.3})`);
      crank.setAttribute("transform", `rotate(${ang * 57.3})`);
      const emf = speed * Math.sin(ang * 2) ;
      const bright = FC.clamp(Math.abs(speed) / 12, 0, 1) * (.7 + .3 * Math.abs(Math.sin(ang * 2)));
      glow.setAttribute("opacity", bright); bulb.setAttribute("fill", bright > .08 ? `rgb(255,${Math.round(200 + 55*bright)},${Math.round(120 + 100*bright)})` : "#5a5a50");
      needle.setAttribute("transform", `rotate(${FC.clamp(emf * 6, -60, 60)} 760 550)`);
      rpm.textContent = `${Math.round(Math.abs(speed) * 60 / (2*Math.PI))} rpm`;
      if (Math.abs(speed) > 9) msg.innerHTML = FC.md("**Faster spinning → more electricity → brighter bulb.** Notice the needle swings both ways: this makes **alternating current (AC)** — like the power in your house.");
      raf = requestAnimationFrame(frame);
    }
    const angOf = e => { const [x, y] = FC.toLocal(v, e); return Math.atan2(y - 600, x - 380); };
    crank.addEventListener("pointerdown", e => { e.stopPropagation(); v.setPointerCapture(e.pointerId); drag = { a:angOf(e), t:performance.now() }; });
    v.addEventListener("pointermove", e => { if (!drag) return; const a = angOf(e), now = performance.now(); let d = a - drag.a; if (d > Math.PI) d -= 2*Math.PI; if (d < -Math.PI) d += 2*Math.PI; const dt = Math.max(.008, (now - drag.t) / 1000); speed = FC.clamp(speed * .6 + (d / dt) * .4, -14, 14); ang += d; drag = { a, t:now }; });
    v.addEventListener("pointerup", () => { drag = null; });
    v.addEventListener("click", e => e.stopPropagation());
    raf = requestAnimationFrame(frame);
    return { destroy(){ cancelAnimationFrame(raf); } };
  };

  /* WED · Dam cross-section (step) */
  IX.dam = function(host){
    const W = 1100, H = 690;
    const v = svg(W, H, { style:`position:absolute;left:0;top:0;width:${W}px;height:${H}px;border-radius:16px` });
    host.appendChild(v);
    v.appendChild(s("rect", { width:W, height:H, fill:"#cfe3ea" }));
    v.appendChild(s("path", { d:"M0 640 L0 220 L420 220 L420 640Z", fill:"#2E9FB0" }));
    v.appendChild(lbl(160, 200, "RESERVOIR", "#1F4F8A", 28));
    v.appendChild(s("path", { d:"M420 120 L520 120 L600 640 L420 640Z", fill:"#9a958c", stroke:"#5a5650", "stroke-width":4 }));
    v.appendChild(lbl(500, 100, "DAM", "#3b3b3b", 28));
    v.appendChild(s("path", { d:"M600 600 L1100 600 L1100 690 L600 690Z", fill:"#5fb6c6" }));
    v.appendChild(s("rect", { y:640, width:W, height:50, fill:"#6a5a48" }));
    const L = Array.from({ length:5 }, () => { const g = s("g", { opacity:.15, style:"transition:opacity .5s" }); v.appendChild(g); return g; });
    L[0].appendChild(s("path", { d:"M420 420 L560 560", stroke:"#1F4F8A", "stroke-width":26, "stroke-linecap":"round" })); L[0].appendChild(lbl(430, 520, "PENSTOCK", "#14110F", 20, "start"));
    const tur = s("g", { transform:"translate(600 580)" }); for (let i=0;i<6;i++) tur.appendChild(s("path", { d:"M0 0 L40 -10 L36 10Z", fill:"#D9A23A", transform:`rotate(${i*60})` })); tur.appendChild(s("circle", { r:10, fill:"#3b2418" }));
    L[1].appendChild(tur); L[1].appendChild(lbl(660, 560, "TURBINE", "#14110F", 20, "start"));
    L[2].appendChild(s("rect", { x:570, y:420, width:120, height:90, rx:10, fill:"#5a6a70", stroke:"#14110F", "stroke-width":3 })); L[2].appendChild(s("line", { x1:600, y1:510, x2:600, y2:575, stroke:"#14110F", "stroke-width":8 })); L[2].appendChild(lbl(630, 470, "GENERATOR", "#F4EBD8", 18));
    L[3].appendChild(s("rect", { x:760, y:380, width:70, height:80, fill:"#8a7a62", stroke:"#14110F", "stroke-width":3 })); L[3].appendChild(s("path", { d:"M690 450 H760", stroke:"#C46A3A", "stroke-width":5 })); L[3].appendChild(lbl(795, 370, "TRANSFORMER", "#14110F", 18));
    L[4].appendChild(s("path", { d:"M830 400 L900 300 L1000 160 L1080 120", stroke:"#3b3b3b", "stroke-width":3, fill:"none" })); L[4].appendChild(s("path", { d:"M900 300 l-20 40 h40z M1000 160 l-20 40 h40z", fill:"none", stroke:"#3b3b3b", "stroke-width":4 })); L[4].appendChild(lbl(980, 110, "TO THE GRID 🏠", "#14110F", 22));
    const TXT = [
      ["Stored energy", "A dam holds back a huge **reservoir**. High water has stored (gravitational) energy."],
      ["Penstock", "Water rushes down a big pipe called a **penstock**, speeding up as it falls."],
      ["Turbine", "The rushing water spins a **turbine** — like a giant waterwheel."],
      ["Generator", "The turbine turns a **generator**: magnets spinning past coils make electricity — just like our crank!"],
      ["Transformer", "A **transformer** raises the voltage so electricity can travel a long way with less energy lost."],
      ["To your home", "Power lines carry it across the country. In Aotearoa, **hydro stations** like Manapōuri and the Waitaki schemes make a big share of our electricity."]
    ];
    const P = panel(560); host.appendChild(P);
    const tt = ptitle(TXT[0][0]), msg = pmsg(TXT[0][1]);
    P.append(h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"800", letterSpacing:".14em", color:"#2E9FB0", fontSize:"20px" } }, "PRESS → TO FOLLOW THE WATER"), tt, msg);
    let raf; const t0 = performance.now();
    (function spin(t){ tur.setAttribute("transform", `translate(600 580) rotate(${((t - t0)/4) % 360})`); raf = requestAnimationFrame(spin); })(t0);
    function step(k){ L.forEach((g, i) => g.setAttribute("opacity", i < k ? 1 : .15)); tt.textContent = TXT[k][0]; msg.innerHTML = FC.md(TXT[k][1]); FC.sfx("paper"); }
    step(0);
    return { steps:5, step, destroy(){ cancelAnimationFrame(raf); } };
  };

  /* =======================================================
     THU · Equinox serpent simulator (El Castillo)
     ======================================================= */
  IX.equinox = function(host){
    const W = 1100, H = 690;
    const v = svg(W, H, { style:`position:absolute;left:0;top:0;width:${W}px;height:${H}px;border-radius:16px` });
    host.appendChild(v);
    const P = panel(600); host.appendChild(P);
    const dayT = big("", "#D9A23A"), msg = pmsg("");
    const sl = stop(h("input", { type:"range", min:0, max:365, value:40, style:{ width:"100%", accentColor:"#D9A23A" } }));
    const tm = stop(h("input", { type:"range", min:14, max:18.5, step:.1, value:17, style:{ width:"100%", accentColor:"#B3262E" } }));
    const tl = h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"22px" } });
    const b = small(btn("Jump to the equinox, late afternoon", () => { sl.value = 79; tm.value = 17; draw(); FC.sfx("chime"); }, "on"));
    P.append(ptitle("The equinox serpent"), dayT, msg, h("div", { style:{ marginTop:"auto", fontFamily:"var(--f-label)", fontWeight:"800", letterSpacing:".12em", fontSize:"18px" } }, "DAY OF THE YEAR"), sl, tl, tm, b);
    const MON = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    function draw(){
      const d = +sl.value, hr = +tm.value;
      FC.clear(v);
      const sunAlt = Math.max(0, 1 - Math.abs(hr - 12) / 6.3);
      v.appendChild(s("rect", { width:W, height:H, fill: sunAlt > .25 ? "#e8b86a" : "#d88a4a" }));
      v.appendChild(s("rect", { y:560, width:W, height:130, fill:"#b89a6a" }));
      // pyramid, west face (left) shadowed, north stair facing us
      const bx = 550, by = 560;
      for (let i=0;i<9;i++){ const w = 640 - i*58, hh = 44; v.appendChild(s("rect", { x:bx - w/2, y:by - (i+1)*hh, width:w, height:hh, fill:"#d9c49a", stroke:"#8a7a5a", "stroke-width":2 })); }
      v.appendChild(s("rect", { x:bx - 80, y:by - 9*44 - 70, width:160, height:70, fill:"#c9b48a", stroke:"#8a7a5a", "stroke-width":2 }));
      // stairs
      v.appendChild(s("path", { d:`M${bx - 40} ${by} L${bx - 26} ${by - 396} H${bx + 26} L${bx + 40} ${by}Z`, fill:"#e9dcc0", stroke:"#8a7a5a", "stroke-width":2 }));
      for (let i=0;i<30;i++) v.appendChild(s("line", { x1:bx - 40 + i*.47, x2:bx + 40 - i*.47, y1:by - i*13.2, y2:by - i*13.2, stroke:"#b8a682", "stroke-width":1.5 }));
      // serpent head at base
      v.appendChild(s("path", { d:`M${bx + 40} ${by} l40 -10 l20 14 l-20 14 l-40 -6z`, fill:"#8a7a5a" }));
      // shadow triangles: strongest near equinoxes (day 79 / 265) and late afternoon (16.5–17.5)
      const eq = Math.max(0, 1 - Math.min(Math.abs(d - 79), Math.abs(d - 265)) / 12);
      const tf = Math.max(0, 1 - Math.abs(hr - 17) / .9);
      const k = eq * tf;
      for (let i=0;i<7;i++){ const y = by - 30 - i*54; v.appendChild(s("path", { d:`M${bx + 42 - i*2} ${y} l26 -22 l0 44z`, fill:"#F0D27A", opacity:.15 + .85*k })); }
      if (k > .5) v.appendChild(lbl(bx + 160, by - 220, "🐍 ‘the serpent’", "#3b2418", 30, "start"));
      // sun
      const sx = 100 + (hr - 6) / 13 * 900, sy = 520 - sunAlt * 420;
      v.appendChild(s("circle", { cx:sx, cy:sy, r:40, fill:"#FFF2B0", filter:"url(#fx-glow)" }));
      const date = new Date(Date.UTC(2027, 0, 1) + d * 86400000);
      dayT.textContent = `${date.getUTCDate()} ${MON[date.getUTCMonth()]}`;
      tl.textContent = `TIME OF DAY: ${Math.floor(hr)}:${String(Math.round((hr % 1) * 60)).padStart(2, "0")}`;
      msg.innerHTML = FC.md(k > .5 ? "**At the equinox, late in the afternoon**, the corner steps cast **triangles of light** down the stair — joining the serpent head at the bottom. It looks like a serpent sliding down! Thousands gather to watch it today." :
        "Move the date and time. Look at the edge of the north stairway. **Equinoxes** are around **20 March** and **22 September**, when day and night are about equal. *(Whether the builders designed this on purpose is still debated.)*");
    }
    sl.addEventListener("input", draw); tm.addEventListener("input", draw);
    draw();
    return {};
  };

  /* =======================================================
     FRI · Papel picado simulator (fold, cut, unfold)
     ======================================================= */
  IX.papel = function(host){
    const W = 1000, H = 690, PW = 560, PH = 420;
    const cv = stop(h("canvas", { width:W*2, height:H*2, style:{ position:"absolute", left:"0", top:"0", width:W+"px", height:H+"px", borderRadius:"16px", cursor:"crosshair" } }));
    host.appendChild(cv);
    const ctx = cv.getContext("2d"); ctx.scale(2, 2);
    const COLS = ["#E8457A","#F0A830","#2EB0A0","#8B5BA8","#3D9BE0","#E4572E"];
    let col = 0, folds = 2, shape = "flower", open = false, scallop = true;
    const cuts = []; // in folded (normalised 0..1) coords of the top-left fold section
    const P = h("div", { class:"pcard", style:{ position:"absolute", right:"0", top:"0", width:"740px", height:"690px", display:"flex", flexDirection:"column", gap:"12px" } });
    host.appendChild(P);
    const msg = pmsg("**1.** Choose a fold. **2.** Click on the folded paper to cut shapes. **3.** Press **Unfold** to see the symmetry!");
    const row = (lab, items) => { const d = h("div", { style:{ display:"grid", gridTemplateColumns:`130px repeat(${items.length},1fr)`, gap:"8px", alignItems:"center" } }, h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", letterSpacing:".12em", fontSize:"18px" } }, lab)); items.forEach(b => d.appendChild(b)); return d; };
    const grp = (list, cur, set) => { const bs = list.map(([k, t]) => { const b = small(btn(t, () => { set(k); bs.forEach(x => x.classList.toggle("on", x === b)); draw(); }, k === cur ? "on" : "")); b.style.fontSize = "17px"; return b; }); return bs; };
    const ub = small(btn("✂️ → 🎉 Unfold", () => { open = !open; ub.textContent = open ? "↩ Fold again" : "✂️ → 🎉 Unfold"; FC.sfx(open ? "chime" : "paper"); draw(); }, "on"));
    P.append(ptitle("Papel picado"), msg,
      row("FOLD", grp([[2,"In half"],[4,"In quarters"]], folds, k => { folds = k; })),
      row("CUTTER", grp([["flower","Flower"],["diamond","Diamond"],["drop","Teardrop"],["tri","Triangle"],["circle","Circle"]], shape, k => { shape = k; })),
      row("PAPER", grp(COLS.map((c, i) => [i, "■"]), col, k => { col = k; })),
      h("div", { style:{ marginTop:"auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px" } }, ub, small(darkB(btn("Start again", () => { cuts.length = 0; open = false; ub.textContent = "✂️ → 🎉 Unfold"; draw(); }, "dark")))));
    P.querySelectorAll("button").forEach(b => { if (b.textContent === "■"){ const i = [...b.parentNode.children].indexOf(b) - 1; b.style.color = COLS[i]; b.style.fontSize = "30px"; } });
    const ox = (W - PW)/2, oy = 160;
    function shapePath(c, x, y, r, kind){
      c.beginPath();
      if (kind === "circle") c.arc(x, y, r, 0, Math.PI*2);
      else if (kind === "diamond"){ c.moveTo(x, y - r); c.lineTo(x + r*.7, y); c.lineTo(x, y + r); c.lineTo(x - r*.7, y); c.closePath(); }
      else if (kind === "tri"){ c.moveTo(x, y - r); c.lineTo(x + r*.9, y + r*.7); c.lineTo(x - r*.9, y + r*.7); c.closePath(); }
      else if (kind === "drop"){ c.moveTo(x, y - r); c.quadraticCurveTo(x + r, y + r*.3, x, y + r); c.quadraticCurveTo(x - r, y + r*.3, x, y - r); }
      else { for (let i=0;i<6;i++){ const a = i*Math.PI/3; c.moveTo(x + Math.cos(a)*r*.55 + r*.3*Math.cos(a), y + Math.sin(a)*r*.55); c.arc(x + Math.cos(a)*r*.55, y + Math.sin(a)*r*.55, r*.38, 0, Math.PI*2); } c.moveTo(x + r*.3, y); c.arc(x, y, r*.3, 0, Math.PI*2); }
    }
    function draw(){
      ctx.clearRect(0, 0, W, H);
      const g = ctx.createLinearGradient(0, 0, 0, H); g.addColorStop(0, "#f6d39a"); g.addColorStop(1, "#e0a868"); ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      // string
      ctx.strokeStyle = "#5a3825"; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(0, oy - 6); ctx.lineTo(W, oy - 6); ctx.stroke();
      const fw = open ? PW : PW / 2, fh = open ? PH : (folds === 4 ? PH / 2 : PH);
      const x0 = open ? ox : ox + PW/4, y0 = oy;
      // paper with cuts (use offscreen for holes)
      const off = document.createElement("canvas"); off.width = W*2; off.height = H*2; const o = off.getContext("2d"); o.scale(2, 2);
      o.fillStyle = COLS[col]; o.fillRect(x0, y0, fw, fh);
      if (scallop){ o.globalCompositeOperation = "destination-out"; const n = Math.round(fw / 28); for (let i=0;i<n;i++){ o.beginPath(); o.arc(x0 + (i + .5) * fw / n, y0 + fh + 2, fw / n / 2, Math.PI, 0); o.fill(); } o.globalCompositeOperation = "source-over"; }
      o.globalCompositeOperation = "destination-out";
      const sec = { w:PW/2, h: folds === 4 ? PH/2 : PH };
      cuts.forEach(c => {
        const pts = [];
        if (!open) pts.push([x0 + c.x*sec.w, y0 + c.y*sec.h]);
        else {
          const X = [ox + PW/2 + c.x*sec.w, ox + PW/2 - c.x*sec.w];
          const Yy = folds === 4 ? [oy + c.y*sec.h, oy + PH - c.y*sec.h] : [oy + c.y*sec.h];
          X.forEach(xx => Yy.forEach(yy => pts.push([xx, yy])));
        }
        pts.forEach(([x, y]) => { shapePath(o, x, y, c.r, c.k); o.fill(); });
      });
      o.globalCompositeOperation = "source-over";
      ctx.save(); ctx.shadowColor = "rgba(0,0,0,.25)"; ctx.shadowBlur = 12; ctx.shadowOffsetY = 6; ctx.drawImage(off, 0, 0, W, H); ctx.restore();
      // fold lines
      ctx.setLineDash([10, 8]); ctx.strokeStyle = "rgba(255,255,255,.7)"; ctx.lineWidth = 2;
      if (open){ ctx.beginPath(); ctx.moveTo(ox + PW/2, oy); ctx.lineTo(ox + PW/2, oy + PH); if (folds === 4){ ctx.moveTo(ox, oy + PH/2); ctx.lineTo(ox + PW, oy + PH/2); } ctx.stroke(); }
      else { ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x0, y0 + fh); if (folds === 4){ ctx.moveTo(x0, y0 + fh); ctx.lineTo(x0 + fw, y0 + fh); } ctx.stroke(); ctx.setLineDash([]); ctx.fillStyle = "#3b2418"; ctx.font = "900 18px 'Big Shoulders Display'"; ctx.fillText("FOLD", x0 + 6, y0 + 22); if (folds === 4) ctx.fillText("FOLD", x0 + fw - 50, y0 + fh - 8); }
      ctx.setLineDash([]);
      ctx.fillStyle = "#3b2418"; ctx.font = "900 26px 'Big Shoulders Display'"; ctx.textAlign = "center";
      ctx.fillText(open ? "UNFOLDED — symmetry!" : `FOLDED IN ${folds === 4 ? "QUARTERS" : "HALF"} · CLICK TO CUT`, W/2, 80); ctx.textAlign = "left";
    }
    cv.addEventListener("click", e => {
      if (open) return;
      const [x, y] = FC.toLocal(cv, e);
      const sec = { w:PW/2, h: folds === 4 ? PH/2 : PH };
      const x0 = ox + PW/4;
      const nx = (x - x0) / sec.w, ny = (y - oy) / sec.h;
      if (nx < 0 || nx > 1 || ny < 0 || ny > 1) return;
      cuts.push({ x:nx, y:ny, r:26, k:shape });
      FC.sfx("paper"); draw();
    });
    draw();
    return {};
  };

  /* Folio VIII seal art — two figures meet (abstract) */
  A.meetFolio = function(){
    const v = svg(800, 1000);
    v.appendChild(s("rect", { width:800, height:1000, fill:"#efe3c6" }));
    v.appendChild(s("rect", { x:30, y:30, width:740, height:940, fill:"none", stroke:"#B3262E", "stroke-width":10 }));
    v.appendChild(s("rect", { x:50, y:50, width:700, height:900, fill:"none", stroke:"#B3262E", "stroke-width":3 }));
    const g = s("g", { filter:"url(#fx-rough)" });
    // left figure: feathered cloak
    g.appendChild(s("path", { d:"M170 820 L230 470 L330 470 L380 820Z", fill:"#1F7A5A", stroke:"#3b2418", "stroke-width":5 }));
    for (let i=0;i<7;i++) g.appendChild(s("path", { d:`M${210 + i*18} 470 q-10 -120 ${-20 + i*10} -200`, stroke:["#2E9FB0","#1F7A5A","#D9A23A"][i%3], "stroke-width":14, fill:"none", "stroke-linecap":"round" }));
    g.appendChild(s("circle", { cx:280, cy:430, r:46, fill:"#b86a3e", stroke:"#3b2418", "stroke-width":5 }));
    // right figure: armour and helmet (simple shapes)
    g.appendChild(s("path", { d:"M440 820 L470 470 L590 470 L640 820Z", fill:"#9aa4a8", stroke:"#3b2418", "stroke-width":5 }));
    g.appendChild(s("circle", { cx:530, cy:430, r:46, fill:"#e8c8a0", stroke:"#3b2418", "stroke-width":5 }));
    g.appendChild(s("path", { d:"M470 420 Q530 330 590 420 Z M520 360 l10 -40 l10 40", fill:"#cfd6d8", stroke:"#3b2418", "stroke-width":5 }));
    // speech scrolls between them
    g.appendChild(s("path", { d:"M330 380 q40 -30 20 -60 q30 -10 20 -40", stroke:"#3b2418", "stroke-width":6, fill:"none" }));
    g.appendChild(s("path", { d:"M470 380 q-40 -30 -20 -60 q-30 -10 -20 -40", stroke:"#3b2418", "stroke-width":6, fill:"none" }));
    v.appendChild(g);
    v.appendChild(lbl(400, 900, "1519", "#B3262E", 48));
    return v;
  };
})(window.FC);
