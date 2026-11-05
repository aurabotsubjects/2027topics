/* ==========================================================
   INTERACTIVES — Week 4 · Pride Before the Fall
   twotellings · oasis · survivelut · heatflow · printstudio
   ========================================================== */
(function(BM){
  "use strict";
  const h = BM.h, s = BM.s, svg = BM.svg, A = BM.art, IX = BM.IX;
  const { btn, controls, panel, setMD } = IX._h;

  /* =======================================================
     6. TWO TELLINGS — one war, two narrators (Mon W4)
     ======================================================= */
  IX.twotellings = function(host){
    const G = { t:"A Greek telling", by:"Based on Herodotus, a Greek writer of the 400s BC", col:"#1E3A8A", icon:"🏛️" };
    const P = { t:"A Persian telling", by:"🟡 Imagined: no Persian account of these battles survives", col:"#B0213B", icon:"👑" };
    const ROWS = [
      ["Why the war?","A huge Persian army marched to conquer free Greece.","The King came to punish Athens, which had helped rebels burn the city of Sardis."],
      ["Thermopylae, 480 BC","King Leonidas, about 300 Spartans and other Greeks held the narrow pass.","A small Greek force blocked the road at a narrow pass."],
      ["The mountain path","A traitor showed the Persians a secret path over the mountain.","Our Immortals found a path over the mountain and surrounded the enemy."],
      ["Who won?","The Spartans fought bravely to the end: a glorious defeat.","The pass was taken and the road to Athens lay open: a victory."],
      ["Salamis, later that year","The Greek fleet trapped the Persian ships and won a great sea battle.","At Salamis our ships were caught in narrow waters. The King went home."]
    ];
    const head = (X, x) => h("div", { class:"pcard", style:{ position:"absolute", left:x+"px", top:"-10px", width:"760px", padding:"10px 20px", boxShadow:`inset 0 8px 0 ${X.col}, var(--sh-3)` } }, h("div", { style:{ fontFamily:"var(--f-royal)", fontWeight:"800", fontSize:"32px" } }, X.icon + " " + X.t), h("div", { style:{ fontSize:"19px", opacity:".8" } }, X.by));
    host.append(head(G, 0), head(P, 1000));
    const rows = ROWS.map((r, i) => {
      const y = 92 + i*118;
      const mid = h("div", { style:{ position:"absolute", left:"770px", top:(y + 18)+"px", width:"220px", textAlign:"center", fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"22px", letterSpacing:".06em", textTransform:"uppercase", color:"#F6D27A", lineHeight:"1.1" } }, r[0]);
      const a = h("div", { class:"pcard", style:{ position:"absolute", left:"0", top:y+"px", width:"760px", height:"104px", padding:"12px 18px", fontSize:"24px", lineHeight:"1.25", boxShadow:"inset 6px 0 0 #1E3A8A, var(--sh-2)" } }, r[1]);
      const b = h("div", { class:"pcard", style:{ position:"absolute", left:"1000px", top:y+"px", width:"760px", height:"104px", padding:"12px 18px", fontSize:"24px", lineHeight:"1.25", boxShadow:"inset 6px 0 0 #B0213B, var(--sh-2)" } }, r[2]);
      const all = [mid, a, b]; all.forEach(e => { e.style.transition = "opacity .6s, transform .6s"; host.appendChild(e); });
      return all;
    });
    function step(n){ rows.forEach((r, i) => r.forEach(e => { const on = i < n; e.style.opacity = on ? "1" : "0"; e.style.transform = on ? "none" : "translateY(18px)"; })); if (n) BM.sfx("paper"); }
    step(0);
    return { steps:ROWS.length, step };
  };

  /* =======================================================
     14. OASIS BUILDER — water appears, a town grows (Tue W4)
     ======================================================= */
  IX.oasis = function(host){
    const W = 1100, H = 680;
    const v = svg(W, H, { style:"position:absolute;left:0;top:-10px;width:1100px;height:680px;border-radius:12px;box-shadow:var(--sh-3);background:linear-gradient(#f4d9a6,#e8c27f)" });
    host.appendChild(v);
    v.appendChild(A.sun(980, 90, 40));
    v.appendChild(s("path", { d:"M0 260 L90 140 L170 210 L260 110 L360 230 L420 200 L470 260Z", fill:"#9a7b5c" }));
    v.appendChild(s("path", { d:"M0 260 L470 260 L1100 300 L1100 680 L0 680Z", fill:"#e1b874" }));
    v.appendChild(s("rect", { x:0, y:260, width:W, height:420, fill:"url(#p-sand)", opacity:.4 }));
    v.appendChild(s("path", { d:"M0 420 Q550 470 1100 440", stroke:"#4a87a8", "stroke-width":3, "stroke-dasharray":"6 8", fill:"none", opacity:.6 }));
    v.appendChild(s("text", { x:20, y:452, "font-family":"Big Shoulders Display", "font-weight":900, "font-size":20, "letter-spacing":"2", fill:"#2b5f7a" }, "GROUNDWATER"));
    const L = n => s("g", { opacity:0, style:"transition:opacity .9s" });
    const qanat = L(), garden = L(), houses = L(), winds = L();
    // qanat: mother well + tunnel + shafts + outlet
    qanat.appendChild(s("path", { d:"M200 270 V430", stroke:"#3a2614", "stroke-width":12 }));
    qanat.appendChild(s("path", { d:"M200 430 L640 330", stroke:"#2b8fb3", "stroke-width":14, "stroke-linecap":"round", "stroke-dasharray":"24 14", style:"animation:flow 2s linear infinite" }));
    [290, 380, 470, 560].forEach(x => { const y = 430 - (x - 200)*100/440; qanat.appendChild(s("path", { d:`M${x} 285 V${y}`, stroke:"#5a3a1c", "stroke-width":8 })); qanat.appendChild(s("ellipse", { cx:x, cy:285, rx:16, ry:6, fill:"#8a6a42" })); });
    qanat.appendChild(s("ellipse", { cx:680, cy:330, rx:60, ry:16, fill:"#2b8fb3" }));
    qanat.appendChild(s("text", { x:150, y:262, "font-family":"Atkinson Hyperlegible", "font-weight":700, "font-size":20, fill:"#2B1B10" }, "mother well"));
    // gardens
    for (let i=0;i<9;i++){ const x = 640 + (i%3)*110, y = 380 + Math.floor(i/3)*70; garden.appendChild(s("rect", { x:x - 40, y, width:90, height:50, rx:6, fill:"#6e9a3c" })); garden.appendChild(A.oak(x + 5, y + 20, 50, "#3f6e2a")); }
    garden.appendChild(s("path", { d:"M680 345 V600 M680 450 H940 M680 520 H940", stroke:"#2b8fb3", "stroke-width":6 }));
    // houses
    for (let i=0;i<7;i++){ const x = 450 + i*70 + (i%2)*10, y = 300 - (i%3)*14; houses.appendChild(s("rect", { x, y, width:56, height:44, fill:"#d9b17a", stroke:"#8a6a42", "stroke-width":3 })); houses.appendChild(s("path", { d:`M${x} ${y} q28 -24 56 0`, fill:"#c9a06a" })); }
    // windcatchers
    [480, 620, 760, 900].forEach(x => { winds.appendChild(s("rect", { x, y:230, width:24, height:70, fill:"#c9a06a", stroke:"#8a6a42", "stroke-width":3 })); winds.appendChild(s("path", { d:`M${x + 6} 240 v20 M${x + 12} 240 v20 M${x + 18} 240 v20`, stroke:"#5a3a1c", "stroke-width":3 })); });
    v.append(qanat, garden, houses, winds);
    const info = panel({ left:"1130px", right:"0", top:"-10px" }, [h("h4"), h("p")]);
    const facts = h("div", { class:"pcard", style:{ position:"absolute", left:"1130px", right:"0", top:"370px", padding:"14px 18px", fontSize:"21px", lineHeight:"1.3" } });
    setMD(facts, "**The Persian Qanat** (World Heritage, 2016) lists **11 qanats**. The **Gonabad** qanat dates from about the 3rd–4th century BC; **Hasan-e Mashir** near Yazd from about AD 1400.");
    host.append(info, facts);
    const T = [
      ["A dry plain","Mountains on one side, desert on the other. Rain is rare. **Where could a town possibly grow here?**"],
      ["1 · Dig a qanat","Water lies **underground** near the mountains. A **mother well** reaches it, and a gently sloping tunnel carries it out onto the plain."],
      ["2 · Gardens and fields","Where the water comes out, **gardens, orchards and fields** can grow, even in the desert."],
      ["3 · People settle","Food and water bring **people**. Houses cluster around the water: an **oasis town** is born."],
      ["4 · A desert city","Towns like **Yazd** grew this way. Summer days go above **40 °C**, so **windcatchers** keep homes liveable."]
    ];
    function step(i){ info.querySelector("h4").textContent = T[i][0]; setMD(info.querySelector("p"), T[i][1]);
      [qanat, garden, houses, winds].forEach((g, k) => g.setAttribute("opacity", i > k ? 1 : 0)); if (i) BM.sfx("tok"); }
    step(0);
    controls(host, [btn("💧 Block the qanat", () => { garden.setAttribute("opacity", garden.getAttribute("opacity") === "1" ? .15 : 1); })]);
    return { steps:4, step };
  };

  /* =======================================================
     23. SURVIVE THE LUT — choose adaptations, test day & night (Wed W4)
     ======================================================= */
  IX.survivelut = function(host){
    const W = 1000, H = 680;
    const v = svg(W, H, { style:"position:absolute;left:0;top:-10px;width:1000px;height:680px;border-radius:12px;box-shadow:var(--sh-3)" });
    host.appendChild(v);
    const sky = s("rect", { width:W, height:H, fill:"#f2c879", style:"transition:fill 1.2s" }); v.appendChild(sky);
    const sun = A.sun(780, 130, 60); const moon = s("g", { opacity:0, style:"transition:opacity 1s" }); moon.appendChild(s("circle", { cx:200, cy:120, r:46, fill:"#f4ecd0" })); moon.appendChild(s("circle", { cx:220, cy:108, r:42, fill:"#1d2340", class:"moonbite" }));
    for (let i=0;i<30;i++) moon.appendChild(s("circle", { cx:(i*137)%W, cy:20 + (i*71)%260, r:2, fill:"#fff" }));
    v.append(sun, moon);
    v.appendChild(A.dunes(W, H, 4, ["#d9a65a","#c98f45","#b87a36"], { top:420 }));
    const temp = s("text", { x:40, y:80, "font-family":"Big Shoulders Display", "font-weight":900, "font-size":54, fill:"#B0213B" }, ""); v.appendChild(temp);
    // the critter
    const cr = s("g", { transform:"translate(500 520)" }); v.appendChild(cr);
    const body = s("ellipse", { rx:80, ry:50, fill:"#c9a06a" }); cr.appendChild(body);
    cr.appendChild(s("circle", { cx:70, cy:-40, r:34, fill:"#c9a06a" })); cr.appendChild(s("circle", { cx:82, cy:-46, r:5, fill:"#2B1B10" }));
    const ears = s("g", { opacity:0 }); ears.appendChild(s("path", { d:"M54 -66 l-14 -60 l34 40z M84 -70 l10 -62 l20 52z", fill:"#c9a06a", stroke:"#8a6a42", "stroke-width":3 })); cr.appendChild(ears);
    const paws = s("g", { opacity:0 }); [-50, -15, 20, 55].forEach(x => paws.appendChild(s("ellipse", { cx:x, cy:52, rx:16, ry:9, fill:"#f4ecd0" }))); cr.appendChild(paws);
    const fur = s("ellipse", { rx:88, ry:58, fill:"#3a2614", opacity:0 }); cr.insertBefore(fur, body);
    const burrow = s("path", { d:"M380 600 q120 -60 240 0", fill:"#5a3a1c", opacity:0 }); v.appendChild(burrow);
    const OPT = [
      { k:"ears", t:"Big ears", good:true, why:"Big thin ears let **heat escape** from the body." },
      { k:"paws", t:"Furry paws", good:true, why:"Fur on the feet protects them from **burning sand** (like the sand cat)." },
      { k:"night", t:"Active at night", good:true, why:"Hunting or feeding at **night** avoids the worst heat." },
      { k:"burrow", t:"Digs a burrow", good:true, why:"Underground it is much **cooler** by day." },
      { k:"food", t:"Gets water from food", good:true, why:"Some desert animals **hardly ever drink**: their food has enough water." },
      { k:"dark", t:"Thick dark fur", good:false, why:"Thick dark fur soaks up heat: **not** a good desert choice." },
      { k:"noon", t:"Active at noon", good:false, why:"Out at noon, the ground can be hot enough to **burn**." }
    ];
    const chosen = new Set();
    const tip = h("div", { class:"pcard ix-tip", style:{ left:"1030px", right:"0", top:"420px", minHeight:"80px" } }, "Choose adaptations for your desert animal, then press → to test it through a day and a night.");
    const chips = h("div", { style:{ position:"absolute", left:"1030px", right:"0", top:"-10px", display:"flex", flexWrap:"wrap", gap:"10px" } }, OPT.map(o => {
      const c = h("button", { class:"ixbtn", style:{ fontSize:"22px" }, onclick:(e) => { e.stopPropagation(); if (chosen.has(o.k)) chosen.delete(o.k); else chosen.add(o.k); c.classList.toggle("on", chosen.has(o.k)); setMD(tip, (o.good ? "✓ " : "⚠ ") + o.why); paint(); BM.sfx("tok"); } }, o.t); o.el = c; return c; }));
    host.append(chips, tip);
    function paint(){ ears.setAttribute("opacity", chosen.has("ears") ? 1 : 0); paws.setAttribute("opacity", chosen.has("paws") ? 1 : 0); fur.setAttribute("opacity", chosen.has("dark") ? 1 : 0); body.setAttribute("fill", chosen.has("dark") ? "#3a2614" : "#c9a06a"); }
    function scene(mode){
      const night = mode === "night";
      sky.setAttribute("fill", night ? "#1d2340" : "#f2c879"); sun.setAttribute("opacity", night ? 0 : 1); moon.setAttribute("opacity", night ? 1 : 0);
      temp.textContent = mode === "noon" ? "Ground up to 70 °C+" : night ? "Night: much cooler" : ""; temp.setAttribute("fill", night ? "#9fd6e6" : "#B0213B");
      const hide = (mode === "noon" && chosen.has("burrow") && !chosen.has("noon"));
      cr.setAttribute("opacity", hide ? .25 : 1); burrow.setAttribute("opacity", hide ? 1 : 0);
    }
    function result(){
      const good = OPT.filter(o => o.good && chosen.has(o.k)).length, bad = OPT.filter(o => !o.good && chosen.has(o.k)).length;
      const score = good - bad*2;
      return score >= 3 ? `🏆 **It survives!** ${good} good adaptations${bad ? `, but ${bad} risky one(s)` : ""}. Real Lut animals like the **sand cat** and **jerboa** do many of these.` : score >= 1 ? `😅 **Only just!** Add more adaptations, or remove the risky ones.` : `🥵 **Too hot!** This animal would struggle. Try body *and* behaviour adaptations.`;
    }
    const T = [() => "Choose adaptations for your desert animal, then press → to test it through a day and a night.", () => chosen.has("burrow") ? "**Noon.** Your animal hides in its burrow, where it's much cooler." : chosen.has("noon") ? "**Noon.** Your animal is out on the scorching ground. Ouch!" : "**Noon.** The sand is scorching. Where can your animal go?", () => chosen.has("night") ? "**Night.** Cooler air: time to come out and find food." : "**Night.** Cooler air. Is your animal awake to make the most of it?", result];
    function step(i){ scene(i === 1 ? "noon" : i === 2 ? "night" : "day"); setMD(tip, T[i]()); if (i === 3) BM.sfx(result().startsWith("🏆") ? "ok" : "no"); }
    controls(host, [btn("Reset", () => { chosen.clear(); OPT.forEach(o => o.el.classList.remove("on")); paint(); step(0); })]);
    step(0);
    return { steps:3, step };
  };

  /* =======================================================
     33. HEAT FLOW — thin walls, thick walls, the yakhchāl (Thu W4)
     ======================================================= */
  IX.heatflow = function(host){
    const W = 1100, H = 680;
    const v = svg(W, H, { style:"position:absolute;left:0;top:-10px;width:1100px;height:680px;border-radius:12px;box-shadow:var(--sh-3);background:linear-gradient(#ffcf8a,#f2a86a)" });
    host.appendChild(v);
    v.appendChild(A.sun(120, 110, 50));
    v.appendChild(s("rect", { x:0, y:560, width:W, height:120, fill:"#c9a46a" }));
    const wall = s("path", { fill:"#b98a58", stroke:"#6b4f33", "stroke-width":4 }); v.appendChild(wall);
    const shade = s("rect", { x:300, y:150, width:40, height:410, fill:"#8a6a42", opacity:0, style:"transition:opacity .6s" }); v.appendChild(shade);
    const pit = s("rect", { x:560, y:560, width:300, height:100, fill:"#5a3a1c", opacity:0 }); v.appendChild(pit);
    const ice = s("rect", { x:650, y:470, width:120, height:80, rx:8, fill:"#bfe9f6", stroke:"#5aa9c8", "stroke-width":3 }); v.appendChild(ice);
    const arrows = s("g"); v.appendChild(arrows);
    const meter = h("div", { style:{ position:"absolute", left:"1130px", right:"0", top:"-10px" } });
    const bar = h("div", { style:{ height:"34px", borderRadius:"10px", background:"rgba(255,255,255,.15)", overflow:"hidden" } }, h("div", { style:{ height:"100%", width:"100%", background:"linear-gradient(90deg,#5aa9c8,#bfe9f6)", transition:"width 1.4s" } }));
    meter.append(h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"22px", letterSpacing:".1em", color:"#F6D27A", marginBottom:"6px" } }, "ICE LEFT AFTER A HOT AFTERNOON (illustration)"), bar);
    const info = panel({ left:"1130px", right:"0", top:"100px" }, [h("h4"), h("p")]);
    host.append(meter, info);
    function draw(th, n, left){
      wall.setAttribute("d", `M560 560 V${300} Q710 ${190 - th} 860 300 V560 h-${th} V${300 + th*.3} Q710 ${190 + th*.6} ${560 + th} ${300 + th*.3} V560Z`);
      BM.clear(arrows);
      for (let i=0;i<6;i++){ const y = 260 + i*48, pass = i < n;
        arrows.appendChild(s("path", { d:`M380 ${y} H${pass ? 640 : 540}`, stroke:"#d6402a", "stroke-width":pass ? 10 : 6, "stroke-linecap":"round", "stroke-dasharray":"20 14", fill:"none", opacity:pass ? .95 : .45, style:"animation:flow 1.4s linear infinite" })); }
      ice.setAttribute("height", 20 + left*.6); ice.setAttribute("y", 550 - (20 + left*.6)); bar.firstChild.style.width = left + "%";
    }
    const T = [
      ["Heat moves in","Heat always flows from **hot to cold**. On a desert day, heat flows from outside **into** anything cooler, like a block of ice.", 6, 6, 100],
      ["A thin wall","A thin wall lets heat **flow through quickly**. The ice melts fast.", 6, 6, 15],
      ["A thick mud-brick wall","A **thick** wall slows the heat down: it's an **insulator**. Less heat gets through, so the ice lasts longer.", 34, 2, 55],
      ["The yakhchāl","The yakhchāl added a **tall shade wall**, a **thick mud-brick dome** and a **deep pit** below ground. Ice made in winter could last into **summer**.", 40, 1, 85]
    ];
    function step(i){ const t = T[i]; info.querySelector("h4").textContent = t[0]; setMD(info.querySelector("p"), t[1]); draw(t[2], t[3], t[4]); shade.setAttribute("opacity", i === 3 ? 1 : 0); pit.setAttribute("opacity", i === 3 ? 1 : 0); if (i) BM.sfx("tok"); }
    step(0);
    return { steps:3, step };
  };

  /* =======================================================
     43. PRINT STUDIO — positive & negative, then repeat (Fri W4)
     ======================================================= */
  IX.printstudio = function(host){
    const W = 1100, H = 680;
    const v = svg(W, H, { style:"position:absolute;left:0;top:-10px;width:1100px;height:680px;border-radius:12px;box-shadow:var(--sh-3);background:#efe3c8" });
    host.appendChild(v);
    // an archer in profile (simplified), facing LEFT on the block so the print faces right
    const archer = (col, sw) => { const g = s("g", { fill:"none", stroke:col, "stroke-width":sw, "stroke-linecap":"round", "stroke-linejoin":"round" });
      g.appendChild(s("circle", { cx:100, cy:50, r:20 })); g.appendChild(s("path", { d:"M100 70 V170 M100 170 L80 250 M100 170 L120 250 M100 95 L60 120 M100 95 L140 110 M150 30 V220 M70 70 Q55 120 70 170" })); g.appendChild(s("path", { d:"M86 30 q14 -16 28 0" })); return g; };
    const blockG = s("g", { transform:"translate(70 120)" }); v.appendChild(blockG);
    const block = s("rect", { width:260, height:320, rx:8, fill:"#f6f0e4", stroke:"#bdb3a0", "stroke-width":3 }); blockG.appendChild(block);
    const ink = s("rect", { width:260, height:320, rx:8, fill:"#1E3A8A", opacity:0, style:"transition:opacity .8s" }); blockG.appendChild(ink);
    const draw = s("g", { transform:"translate(260 20) scale(-1 1) translate(0 0)", opacity:0, style:"transition:opacity .6s" }); draw.appendChild(archer("#9aa3b5", 10)); blockG.appendChild(draw);
    const carved = s("g", { transform:"translate(260 20) scale(-1 1)", opacity:0 }); carved.appendChild(archer("#f6f0e4", 10)); blockG.appendChild(carved);
    v.appendChild(s("text", { x:200, y:470, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":24, "letter-spacing":"2", fill:"#2B1B10" }, "THE BLOCK"));
    // prints
    const prints = s("g"); v.appendChild(prints);
    const print = (x, k) => { const g = s("g", { transform:`translate(${x} 120)`, opacity:0, style:"transition:opacity .6s" });
      g.appendChild(s("rect", { width:200, height:250, fill:k % 2 ? "#0B7A55" : "#1E3A8A" })); const a = archer("#efe3c8", 8); a.setAttribute("transform", "translate(0 0) scale(.8)"); g.appendChild(a); prints.appendChild(g); return g; };
    const P = [print(400, 0), print(620, 1), print(840, 0)];
    const lab = s("text", { x:740, y:470, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":24, "letter-spacing":"2", fill:"#2B1B10", opacity:0 }, "THE PRINTS · A REPEATING BORDER"); v.appendChild(lab);
    const brick = s("rect", { x:400, y:400, width:640, height:30, fill:"url(#p-brick)", opacity:0 }); v.appendChild(brick);
    const info = panel({ left:"1130px", right:"0", top:"-10px" }, [h("h4"), h("p")]);
    host.appendChild(info);
    const T = [
      ["1 · A smooth block","A smooth sheet of **foam** (or lino) is our printing block, like a blank glazed brick."],
      ["2 · Draw it backwards","Draw the archer **facing the other way**: the print will flip it, just like a seal."],
      ["3 · Press the lines in","Press the lines **deep** with a blunt pencil. The pressed-in lines are the **negative** areas: ink won't reach them."],
      ["4 · Roll the ink","Roll ink over the block. Only the **raised (positive)** surface takes the ink."],
      ["5 · Print and repeat","Press paper on top. The lines come out **paper-coloured** and the archer now faces **right**. Print again and again for a **repeating border**, like the Frieze of Archers."]
    ];
    function step(i){ info.querySelector("h4").textContent = T[i][0]; setMD(info.querySelector("p"), T[i][1]);
      draw.setAttribute("opacity", i === 1 ? 1 : 0); carved.setAttribute("opacity", i >= 2 ? 1 : 0);
      block.setAttribute("fill", i >= 2 ? "#e8dfcc" : "#f6f0e4"); carved.querySelector("g").setAttribute("stroke", i >= 3 ? "#e8dfcc" : "#b7ab93");
      ink.setAttribute("opacity", i >= 3 ? .95 : 0); blockG.appendChild(carved);
      P.forEach((p, k) => p.setAttribute("opacity", i >= 4 ? 1 : 0)); lab.setAttribute("opacity", i >= 4 ? 1 : 0); brick.setAttribute("opacity", i >= 4 ? .8 : 0);
      if (i) BM.sfx(i === 4 ? "ok" : "tok"); }
    step(0);
    return { steps:4, step };
  };
})(window.BM);
