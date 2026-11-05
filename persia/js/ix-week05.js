/* ==========================================================
   INTERACTIVES — Week 5 · For Such a Time as This
   turningpoints · tell · saltlake · archforce · raisegold
   ========================================================== */
(function(BM){
  "use strict";
  const h = BM.h, s = BM.s, svg = BM.svg, A = BM.art, IX = BM.IX;
  const { btn, controls, panel, setMD } = IX._h;

  /* =======================================================
     7. TURNING POINTS — order Esther's story, flip for the hidden hand (Mon W5)
     ======================================================= */
  IX.turningpoints = function(host){
    const EV = [
      { t:"Esther becomes queen", ref:"Esther 2", d:"Of all the young women brought to the palace, **Esther** is chosen as queen.", hand:"A Jewish orphan is placed in the palace, right where she'll be needed." },
      { t:"Mordecai saves the king", ref:"Esther 2:21–23", d:"Mordecai overhears a plot to kill the king. It's written in the royal records… and forgotten.", hand:"A good deed is recorded, waiting for the right moment." },
      { t:"Haman's plan", ref:"Esther 3", d:"Proud **Haman** plots to destroy all the Jews. He casts lots (**pur**) to choose the day.", hand:"The day is set almost a year away: time for rescue." },
      { t:"“For such a time as this”", ref:"Esther 4:14", d:"Mordecai tells Esther she may be queen **for such a time as this**. She asks everyone to fast.", hand:"Esther sees that her position has a purpose." },
      { t:"Esther goes to the king", ref:"Esther 5:1–2", d:"Going uninvited could mean death. The king **holds out his golden sceptre**.", hand:"The king's heart is turned to welcome her." },
      { t:"A sleepless night", ref:"Esther 6:1–3", d:"The king can't sleep, so the records are read to him… including **Mordecai's good deed**.", hand:"Of all nights, the king can't sleep on this one." },
      { t:"Haman honours Mordecai", ref:"Esther 6:10–11", d:"Haman is made to lead **Mordecai** through the city in royal honour.", hand:"The proud man must honour the one he hated." },
      { t:"Rescue and Purim", ref:"Esther 7–9", d:"Esther reveals Haman's plot. The Jews are allowed to defend themselves, and the feast of **Purim** remembers the rescue.", hand:"Sorrow is turned into joy." }
    ];
    const order = [3, 0, 6, 2, 7, 1, 5, 4]; // shuffled display order (indexes into EV)
    const CW = 420, CH = 300, GAP = 26;
    let next = 0;
    const tip = h("div", { class:"pcard ix-tip", style:{ left:"0", right:"0", top:"640px", minHeight:"50px" } }, "Tap the events in story order. Each one turns over to show God's hidden hand.");
    const cards = order.map((k, pos) => {
      const E = EV[k];
      const front = h("div", { class:"face front", style:{ padding:"16px 18px", textAlign:"left" } }, h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"18px", letterSpacing:".12em", color:"#8A5A0A" } }, E.ref.toUpperCase()), h("div", { style:{ fontFamily:"var(--f-royal)", fontWeight:"800", fontSize:"28px", lineHeight:"1.05", margin:"6px 0" } }, E.t), setMD(h("div", { style:{ fontSize:"21px", lineHeight:"1.25" } }), E.d));
      const num = h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"44px", color:"#F6D27A" } });
      const back = h("div", { class:"face back", style:{ padding:"16px 18px", textAlign:"left", background:"#1E3A8A", color:"#FBF3E0" } }, num, h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"18px", letterSpacing:".12em", color:"#F6D27A" } }, "THE HIDDEN HAND"), h("div", { style:{ fontSize:"23px", lineHeight:"1.25", marginTop:"6px" } }, E.hand), h("div", { style:{ fontSize:"17px", opacity:".75", marginTop:"8px" } }, E.t));
      const c = h("div", { class:"flip", style:{ position:"absolute", left:((pos % 4)*(CW + GAP))+"px", top:(Math.floor(pos/4)*(CH + GAP) - 10)+"px", width:CW+"px", height:CH+"px", minHeight:"0" } }, h("div", { class:"in" }, front, back));
      c.addEventListener("click", e => { e.stopPropagation(); if (c.classList.contains("on")) return; if (k === next){ place(k); BM.sfx("ok"); } else { BM.sfx("no"); BM.anim(c, [{ transform:"translateX(0)" }, { transform:"translateX(-10px)" }, { transform:"translateX(10px)" }, { transform:"translateX(0)" }], { duration:300 }); setMD(tip, "Not yet: what happens **before** that?"); } });
      host.appendChild(c); E.c = c; E.num = num; return c;
    });
    host.appendChild(tip);
    function place(k){ const E = EV[k]; E.num.textContent = String(k + 1); E.c.classList.add("on"); next = k + 1; setMD(tip, `**${k + 1}. ${E.t}** · ${E.hand}` + (next === EV.length ? "  God is never named in Esther, yet His care is seen everywhere." : "")); }
    function step(i){ next = 0; EV.forEach(E => E.c.classList.remove("on")); for (let k=0;k<i;k++) place(k); if (!i) setMD(tip, "Tap the events in story order. Each one turns over to show God's hidden hand."); }
    controls(host, [btn("Reset", () => step(0))]);
    return { steps:EV.length, step };
  };

  /* =======================================================
     15. DIG THE TELL — Susa's layers (Tue W5)
     ======================================================= */
  IX.tell = function(host){
    const W = 1100, H = 680;
    const v = svg(W, H, { style:"position:absolute;left:0;top:-10px;width:1100px;height:680px;border-radius:12px;box-shadow:var(--sh-3);background:linear-gradient(#bfe0ef,#f3e3c3 40%)" });
    host.appendChild(v);
    const LAY = [
      { c:"#d8b98a", t:"Top: a later town", d:"The top layers were lived in until about the **13th century AD**. Pottery, coins, house walls.", obj:"🏺" },
      { c:"#c9a06a", t:"Greek & Parthian rulers", d:"After Alexander, new rulers built on top of the Persian city.", obj:"🪙" },
      { c:"#b98a58", t:"Darius's palace", d:"The **Achaemenid** capital: Darius I built a palace and great hall here, decorated with **glazed bricks**.", obj:"🏛️" },
      { c:"#a97848", t:"The Elamite city", d:"Long before the Persians, Susa was the capital of **Elam**.", obj:"🧱" },
      { c:"#8a6a42", t:"The first settlers", d:"At the very bottom: the oldest village, among the first towns in the world.", obj:"🪨" }
    ];
    const top = 140, bandH = 90;
    const mound = s("g"); v.appendChild(mound);
    const bands = LAY.map((L, i) => { const y = top + i*bandH, inset = 40 + (LAY.length - i)*16;
      const r = s("path", { d:`M${inset + (4 - i)*20} ${y} H${W - inset - (4 - i)*20} L${W - inset - (4 - i)*20 + 30} ${y + bandH} H${inset + (4 - i)*20 - 30}Z`, fill:L.c, stroke:"#6b4f33", "stroke-width":2 });
      mound.appendChild(r); return r; });
    v.appendChild(s("text", { x:W/2, y:top - 12, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":26, "letter-spacing":"3", fill:"#2B1B10" }, "THE TELL OF SUSA (simplified: the real one has 27 layers)"));
    const trench = s("rect", { x:480, y:top, width:140, height:0, fill:"#3a2614", opacity:.85, style:"transition:height .8s" }); v.appendChild(trench);
    const finds = s("g"); v.appendChild(finds);
    const digger = s("text", { x:550, y:top - 30, "text-anchor":"middle", "font-size":44 }, "⛏️"); v.appendChild(digger);
    const info = panel({ left:"1130px", right:"0", top:"-10px" }, [h("h4"), h("p")]);
    host.appendChild(info);
    function step(i){
      trench.setAttribute("height", i*bandH); digger.setAttribute("y", top - 30 + i*bandH);
      BM.clear(finds); for (let k=0;k<i;k++){ finds.appendChild(s("text", { x:550, y:top + k*bandH + 60, "text-anchor":"middle", "font-size":44 }, LAY[k].obj)); }
      bands.forEach((b, k) => b.setAttribute("opacity", k < i ? .55 : 1));
      if (i === 0){ info.querySelector("h4").textContent = "A hill made by people"; setMD(info.querySelector("p"), "A **tell** is a hill built up by people living in the same place for a very long time. Each new town is built **on top of** the ruins of the last. **The deeper you dig, the older it gets.**"); }
      else { const L = LAY[i-1]; info.querySelector("h4").textContent = `Layer ${i} · ${L.t}`; setMD(info.querySelector("p"), L.d); BM.sfx("stone"); }
    }
    step(0);
    return { steps:LAY.length, step };
  };

  /* =======================================================
     24. SALT LAKE SLIDER — Lake Urmia shrinks (Wed W5)
     ======================================================= */
  IX.saltlake = function(host){
    const W = 1100, H = 680;
    const v = svg(W, H, { style:"position:absolute;left:0;top:-10px;width:1100px;height:680px;border-radius:12px;box-shadow:var(--sh-3);background:#e8d6b0" });
    host.appendChild(v);
    v.appendChild(s("ellipse", { cx:500, cy:350, rx:400, ry:250, fill:"#f4f1ea", stroke:"#cfc6b2", "stroke-width":3 })); // salt flat
    const lake = s("ellipse", { cx:500, cy:350, rx:380, ry:235, fill:"#4f9cc4", style:"transition:all .6s" }); v.appendChild(lake);
    const shrimpG = s("g"); v.appendChild(shrimpG);
    const birds = s("g"); v.appendChild(birds);
    const rivers = s("path", { d:"M60 120 Q160 200 200 260 M940 600 Q860 520 820 480", stroke:"#4f9cc4", "stroke-width":10, fill:"none" }); v.appendChild(rivers);
    const dam = s("g", { opacity:0 }); dam.appendChild(s("rect", { x:110, y:150, width:60, height:22, fill:"#5a5a60", transform:"rotate(40 140 160)" })); dam.appendChild(s("text", { x:40, y:110, "font-family":"Atkinson Hyperlegible", "font-weight":700, "font-size":20, fill:"#2B1B10" }, "dams & farms take water")); v.appendChild(dam);
    const meters = h("div", { style:{ position:"absolute", left:"1130px", right:"0", top:"-10px", display:"grid", gap:"8px" } });
    const mk = (lab, col) => { const b = h("div", { style:{ height:"100%", width:"50%", background:col, transition:"width .6s" } }); meters.appendChild(h("div", null, h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"19px", letterSpacing:".1em", color:"#F6D27A" } }, lab), h("div", { style:{ height:"22px", borderRadius:"8px", background:"rgba(255,255,255,.15)", overflow:"hidden" } }, b))); return b; };
    const mWater = mk("WATER", "#4f9cc4"), mSalt = mk("SALTINESS", "#f4f1ea"), mShrimp = mk("BRINE SHRIMP", "#E0566F"), mBirds = mk("FLAMINGOS", "#f29bb0");
    const slider = h("input", { type:"range", min:"0", max:"100", value:"100", style:{ width:"100%", accentColor:"#4f9cc4" }, oninput:() => draw(+slider.value) });
    slider.addEventListener("pointerdown", e => e.stopPropagation());
    meters.appendChild(h("div", null, h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"19px", letterSpacing:".1em", color:"#FBF3E0" } }, "DRAG: HOW MUCH WATER IS LEFT?"), slider));
    const info = panel({ left:"1130px", right:"0", top:"330px" }, [h("h4"), h("p")]);
    host.append(meters, info);
    function draw(w){
      const k = .35 + .65*w/100; lake.setAttribute("rx", 380*Math.sqrt(k)); lake.setAttribute("ry", 235*Math.sqrt(k)); lake.setAttribute("fill", w > 60 ? "#4f9cc4" : w > 30 ? "#6aa7b4" : "#b9a04a");
      const salt = 100 - w*.7, shrimp = w > 40 ? 90 : Math.max(5, w*2), fl = w > 50 ? 85 : Math.max(0, (w - 15)*2.4);
      mWater.style.width = w + "%"; mSalt.style.width = salt + "%"; mShrimp.style.width = shrimp + "%"; mBirds.style.width = fl + "%";
      BM.clear(shrimpG); const ns = Math.round(shrimp/6); for (let i=0;i<ns;i++){ const a = i*2.4, r = 40 + (i*37)%140; shrimpG.appendChild(s("text", { x:500 + Math.cos(a)*r*1.4, y:350 + Math.sin(a)*r*.7, "font-size":22, "text-anchor":"middle" }, "🦐")); }
      BM.clear(birds); const nb = Math.round(fl/14); for (let i=0;i<nb;i++) birds.appendChild(s("text", { x:200 + i*95, y:150 + (i%2)*30, "font-size":40 }, "🦩"));
      dam.setAttribute("opacity", w < 100 ? 1 : 0);
    }
    const T = [
      ["A salt lake","**Lake Urmia** in north-west Iran is a **salt lake**. Tiny **brine shrimp (Artemia)** live in its salty water, and **flamingos** come to eat them.", 100],
      ["Water taken upstream","Rivers feed the lake. But **dams** and **farms** upstream take much of the water before it arrives.", 70],
      ["By July 2020","The lake had lost **45% of its area** and **85% of its volume**. Less water means **saltier** water: too salty for the shrimp, so the flamingos lose their food.", 15],
      ["Hope: restoration","Iran began a **restoration programme in 2013** to send more water back to the lake. Caring for a lake means sharing water fairly.", 45]
    ];
    function step(i){ const t = T[i]; info.querySelector("h4").textContent = t[0]; setMD(info.querySelector("p"), t[1]); slider.value = t[2]; draw(t[2]); if (i) BM.sfx("tok"); }
    step(0);
    return { steps:3, step };
  };

  /* =======================================================
     34. ARCH FORCE — compression flows to the feet (Thu W5)
     ======================================================= */
  IX.archforce = function(host){
    const W = 1100, H = 680;
    const v = svg(W, H, { style:"position:absolute;left:0;top:-10px;width:1100px;height:680px;border-radius:12px;box-shadow:var(--sh-3);background:linear-gradient(#cfe6f0,#f3e3c3 80%)" });
    host.appendChild(v);
    v.appendChild(s("rect", { x:0, y:600, width:W, height:80, fill:"#c9a46a" }));
    // beam
    const beamG = s("g", { style:"transition:opacity .5s" }); v.appendChild(beamG);
    const beam = s("path", { fill:"#b98a58", stroke:"#6b4f33", "stroke-width":3 }); beamG.appendChild(beam);
    beamG.appendChild(s("rect", { x:220, y:430, width:60, height:170, fill:"#a97848" })); beamG.appendChild(s("rect", { x:820, y:430, width:60, height:170, fill:"#a97848" }));
    // arch voussoirs
    const archG = s("g", { opacity:0, style:"transition:opacity .5s" }); v.appendChild(archG);
    const cx = 550, cy = 560, R1 = 230, R2 = 300, N = 9, stones = [];
    for (let i=0;i<N;i++){ const a0 = Math.PI - i*Math.PI/N, a1 = Math.PI - (i+1)*Math.PI/N;
      const p = (r, a) => `${cx + r*Math.cos(a)} ${cy - r*Math.sin(a)}`;
      const g = s("g"); g.appendChild(s("path", { d:`M${p(R1, a0)} L${p(R2, a0)} A${R2} ${R2} 0 0 1 ${p(R2, a1)} L${p(R1, a1)} A${R1} ${R1} 0 0 0 ${p(R1, a0)}Z`, fill: i === 4 ? "#d8a24a" : "#c9a06a", stroke:"#6b4f33", "stroke-width":3 }));
      archG.appendChild(g); stones.push(g); }
    archG.appendChild(s("rect", { x:cx - R2 - 10, y:cy, width:R2 - R1 + 20, height:40, fill:"#a97848" })); archG.appendChild(s("rect", { x:cx + R1 - 10, y:cy, width:R2 - R1 + 20, height:40, fill:"#a97848" }));
    const flow = s("g", { opacity:0, style:"transition:opacity .5s" }); v.appendChild(flow);
    [-1, 1].forEach(sg => flow.appendChild(s("path", { d:`M${cx + sg*20} ${cy - 265} A265 265 0 0 ${sg > 0 ? 1 : 0} ${cx + sg*265} ${cy}`, stroke:"#d6402a", "stroke-width":12, fill:"none", "stroke-dasharray":"26 16", "stroke-linecap":"round", style:"animation:flow 1.4s linear infinite" })));
    const push = s("g", { opacity:0, style:"transition:opacity .5s" }); v.appendChild(push);
    [-1, 1].forEach(sg => push.appendChild(s("path", { d:`M${cx + sg*265} ${cy + 20} h${sg*90}`, stroke:"#1E3A8A", "stroke-width":14, "stroke-linecap":"round", "marker-end":"url(#af2)" })));
    v.appendChild(s("defs", null, s("marker", { id:"af2", viewBox:"0 0 10 10", refX:5, refY:5, markerWidth:3, markerHeight:3, orient:"auto" }, s("path", { d:"M0 0 L10 5 L0 10z", fill:"#1E3A8A" }))));
    const load = s("g"); v.appendChild(load);
    load.appendChild(s("rect", { x:500, y:180, width:100, height:60, fill:"#5a5a60", rx:6 })); load.appendChild(s("text", { x:550, y:220, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":26, fill:"#fff" }, "LOAD"));
    const info = panel({ left:"1130px", right:"0", top:"-10px" }, [h("h4"), h("p")]);
    host.appendChild(info);
    const setBeam = sag => beam.setAttribute("d", `M200 ${400} Q550 ${400 + sag} 900 400 V430 Q550 ${430 + sag} 200 430Z`);
    const T = [
      ["A flat beam","Put a heavy load on a flat beam and it **bends** in the middle. Stone and mud brick crack when they bend."],
      ["An arch","An **arch** is made of wedge-shaped stones (or bricks). The top one is the **keystone**."],
      ["Squeezed together","The load pushes the stones **together** (compression) and the force travels **around the curve**, down to the two **feet**. Stone and brick are very strong when squeezed."],
      ["Push at the feet","The feet are also pushed **outwards**, so arches need strong, heavy supports at their sides."],
      ["Remove the keystone!","Take out the keystone and nothing holds the two halves together: the arch **collapses**."]
    ];
    function step(i){
      info.querySelector("h4").textContent = T[i][0]; setMD(info.querySelector("p"), T[i][1]);
      beamG.setAttribute("opacity", i === 0 ? 1 : 0); setBeam(i === 0 ? 70 : 0); archG.setAttribute("opacity", i >= 1 ? 1 : 0);
      load.setAttribute("transform", i >= 1 ? "translate(0 20)" : "translate(0 105)");
      if (i === 0) load.setAttribute("transform", "translate(0 105)");
      flow.setAttribute("opacity", i === 2 || i === 3 ? 1 : 0); push.setAttribute("opacity", i === 3 ? 1 : 0);
      stones.forEach((st, k) => { st.style.transition = "transform 1.2s cubic-bezier(.5,0,.8,.4), opacity 1s"; st.style.transform = i === 4 ? `translate(${(k - 4)*14}px, ${k === 4 ? 500 : 260 + Math.abs(k - 4)*10}px) rotate(${(k - 4)*9}deg)` : "none"; st.style.transformBox = "fill-box"; st.style.transformOrigin = "center"; });
      load.style.transition = "transform 1.2s"; if (i === 4) load.setAttribute("transform", "translate(0 330)");
      if (i) BM.sfx(i === 4 ? "thunder" : "tok");
    }
    step(0);
    return { steps:4, step };
  };

  /* =======================================================
     44. RAISE THE GOLD — repoussé & chasing (Fri W5)
     ======================================================= */
  IX.raisegold = function(host){
    const W = 1100, H = 680;
    const v = svg(W, H, { style:"position:absolute;left:0;top:-10px;width:1100px;height:680px;border-radius:12px;box-shadow:var(--sh-3);background:#2B1B10" });
    host.appendChild(v);
    v.appendChild(s("defs", null,
      s("filter", { id:"rg-emb", x:"-10%", y:"-10%", width:"120%", height:"120%" }, s("feDropShadow", { dx:-3, dy:-3, stdDeviation:1.5, "flood-color":"#fff6c8", "flood-opacity":.9 }), s("feDropShadow", { dx:4, dy:4, stdDeviation:2, "flood-color":"#5a3a0a", "flood-opacity":.9 }))));
    const foil = s("rect", { x:80, y:60, width:940, height:420, rx:10, fill:"url(#g-gold)" }); v.appendChild(foil);
    // horse + chariot shapes (simplified)
    const shapes = s("g", { fill:"#e8b84a", opacity:0 });
    for (let i=0;i<2;i++){ const x = 220 + i*150; shapes.appendChild(s("path", { d:`M${x} 300 q20 -60 80 -60 q30 -40 50 -20 q-10 20 -20 30 q30 30 10 60 l0 80 h-14 l-6 -60 h-60 l-10 60 h-14 l2 -80 q-20 0 -18 -10z` })); }
    shapes.appendChild(s("path", { d:"M560 230 h260 v120 h-260z" })); shapes.appendChild(s("circle", { cx:640, cy:390, r:50 })); shapes.appendChild(s("path", { d:"M600 230 v-60 h40 v60 M720 230 v-80 h40 v80" }));
    v.appendChild(shapes);
    const lines = s("g", { fill:"none", stroke:"#7a5310", "stroke-width":4, opacity:0 });
    for (let i=0;i<2;i++){ const x = 220 + i*150; lines.appendChild(s("path", { d:`M${x + 70} 260 q8 30 0 60 M${x + 40} 280 l10 20 M${x + 120} 230 l6 10` })); }
    for (let k=0;k<8;k++) lines.appendChild(s("path", { d:`M640 390 l${Math.cos(k*Math.PI/4)*46} ${Math.sin(k*Math.PI/4)*46}` }));
    for (let k=0;k<6;k++) lines.appendChild(s("path", { d:`M${580 + k*40} 250 v80` }));
    lines.appendChild(s("path", { d:"M90 80 h920 M90 460 h920", "stroke-dasharray":"6 10" }));
    v.appendChild(lines);
    // cross-section diagram
    const cs = s("g", { transform:"translate(80 540)" }); v.appendChild(cs);
    const csPath = s("path", { fill:"none", stroke:"#E8B84A", "stroke-width":8 }); cs.appendChild(csPath);
    const tool = s("g"); cs.appendChild(tool); tool.appendChild(s("path", { d:"M0 0 v-60", stroke:"#c9ced6", "stroke-width":12, "stroke-linecap":"round" }));
    const csLab = s("text", { x:0, y:110, "font-family":"Atkinson Hyperlegible", "font-weight":700, "font-size":22, fill:"#FBF3E0" }); cs.appendChild(csLab);
    v.appendChild(s("text", { x:80, y:530, "font-family":"Big Shoulders Display", "font-weight":900, "font-size":20, "letter-spacing":"2", fill:"#F6D27A" }, "SIDE VIEW OF THE FOIL"));
    const info = panel({ left:"1130px", right:"0", top:"-10px" }, [h("h4"), h("p")]);
    host.appendChild(info);
    const T = [
      ["Flat gold foil","Persian goldsmiths worked **thin sheets of gold**. We'll use craft foil on a soft felt pad.", "M0 40 H940", 470, "flat foil"],
      ["Repoussé: push from behind","Turn the foil over and **push from the back** with a blunt tool. The shape bulges out on the front: **repoussé** (re-poo-SAY).", "M0 40 H300 Q420 -20 540 40 H940", 420, "tool pushes from behind → a bump on the front"],
      ["Turn it over","Now the horses and chariot stand **raised** above the background. Light catches the edges.", "M0 40 H300 Q420 -20 540 40 H940", -999, "the raised side faces you"],
      ["Chasing: lines from the front","Work from the **front** to press in fine **lines**: manes, wheel spokes, borders. This is called **chasing**.", "M0 40 H300 Q420 -20 540 40 H940", 700, "fine lines pressed from the front"],
      ["Inspired by the Oxus treasure","The **Oxus chariot model** is solid **gold**, made in the 5th–4th century BC: four small horses pull a chariot with a seated figure and a driver. It's in the **British Museum**.", "M0 40 H300 Q420 -20 540 40 H940", -999, "your design: raised shapes + chased lines"]
    ];
    function step(i){ const t = T[i]; info.querySelector("h4").textContent = t[0]; setMD(info.querySelector("p"), t[1]);
      csPath.setAttribute("d", t[2]); tool.setAttribute("opacity", t[3] < 0 ? 0 : 1); tool.setAttribute("transform", i === 1 ? `translate(${t[3]} 70) rotate(180)` : `translate(${t[3]} 0)`); csLab.textContent = t[4];
      shapes.setAttribute("opacity", i >= 1 ? 1 : 0); shapes.setAttribute("filter", i >= 2 ? "url(#rg-emb)" : ""); shapes.setAttribute("fill", i === 1 ? "#d9a63a" : "#e8b84a");
      lines.setAttribute("opacity", i >= 3 ? 1 : 0); if (i) BM.sfx("tok"); }
    step(0);
    host.appendChild(h("div", { class:"ix-chip", style:{ position:"absolute", left:"90px", top:"60px", background:"rgba(0,0,0,.45)" } }, "Simplified design, not the real chariot"));
    return { steps:4, step };
  };
})(window.BM);
