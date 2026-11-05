/* ==========================================================
   INTERACTIVES — Week 7 · The Marketplace of the World
   rationreader · bazaartrader · cameldesign · cipher · knotcounter
   ========================================================== */
(function(BM){
  "use strict";
  const h = BM.h, s = BM.s, svg = BM.svg, A = BM.art, IX = BM.IX;
  const { btn, controls, panel, setMD } = IX._h;

  /* =======================================================
     9. RATION TABLET READER — who got what? (Mon W7)
     ======================================================= */
  IX.rationreader = function(host){
    const TAB = [
      { who:"12 workers at the stone quarry", what:"grain", each:3, unit:"measures", q:"How much grain altogether?", a:"12 × 3 = **36 measures**." },
      { who:"A group of 8 women workers", what:"grain", each:3, unit:"measures", q:"How much grain altogether?", a:"8 × 3 = **24 measures**. Women workers appear in the records too." },
      { who:"A royal messenger on the road", what:"flour", each:2, unit:"measures a day for 5 days", q:"How much flour for his journey?", a:"2 × 5 = **10 measures**." },
      { who:"The official in charge (and his seal)", what:"wine", each:1, unit:"jar", q:"Why does this tablet have a seal on it?", a:"The **seal** shows who **approved** the payment: a signature in clay." }
    ];
    const cards = TAB.map((t, i) => {
      const back = h("div", { class:"face back", style:{ padding:"16px 18px", textAlign:"left", background:"#0B7A55", color:"#FBF3E0" } }, h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"18px", letterSpacing:".12em", color:"#F6D27A" } }, "ANSWER"), setMD(h("div", { style:{ fontSize:"26px", lineHeight:"1.3", marginTop:"8px" } }), t.a));
      const wedges = BM.svg(300, 40); for (let k=0;k<14;k++) wedges.appendChild(BM.s("path", { d:`M${10 + k*20} 10 l10 4 l-10 4z M${10 + k*20} 26 l10 4 l-10 4z`, fill:"#6E4423" }));
      const front = h("div", { class:"face front", style:{ padding:"16px 18px", textAlign:"left", background:"linear-gradient(160deg,#d9b07a,#b98a58)", color:"#2B1B10" } }, wedges, h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"18px", letterSpacing:".12em", marginTop:"6px" } }, `TABLET ${i + 1}`),
        setMD(h("div", { style:{ fontSize:"24px", lineHeight:"1.3", marginTop:"6px" } }), `**To:** ${t.who}\n**Given:** ${t.each} ${t.unit} of ${t.what}${i < 2 ? " each" : ""}`), setMD(h("div", { style:{ fontSize:"22px", marginTop:"10px", fontStyle:"italic" } }), "❓ " + t.q));
      const c = h("div", { class:"flip", style:{ position:"absolute", left:(i*440)+"px", top:"-10px", width:"420px", height:"420px", minHeight:"0" } }, h("div", { class:"in" }, front, back));
      c.addEventListener("click", e => { e.stopPropagation(); c.classList.toggle("on"); BM.sfx("paper"); });
      host.appendChild(c); return c;
    });
    const tip = h("div", { class:"pcard ix-tip", style:{ left:"0", right:"0", top:"440px", minHeight:"80px" } });
    setMD(tip, "🟡 **Simplified tablets, made up for class** in the style of the real ones. The real Persepolis tablets (about **500 BC**, mostly in **Elamite**) record food stored and handed out, to everyone from **the lowliest workers to the king's own family**.");
    host.appendChild(tip);
    return { steps:TAB.length, step(i){ cards.forEach((c, k) => c.classList.toggle("on", k < i)); if (i) BM.sfx("paper"); } };
  };

  /* =======================================================
     17. BAZAAR TRADER — specialise and swap (Tue W7)
     ======================================================= */
  IX.bazaartrader = function(host){
    const P = [ { k:"potter", icon:"🏺", t:"Potter", good:"bowls", gi:"🥣" }, { k:"weaver", icon:"🧶", t:"Weaver", good:"cloth", gi:"🧣" }, { k:"farmer", icon:"🌾", t:"Farmer", good:"bread", gi:"🍞" } ];
    const cols = P.map((p, i) => {
      const inv = h("div", { style:{ display:"flex", flexWrap:"wrap", gap:"4px", fontSize:"40px", minHeight:"110px", marginTop:"10px" } });
      const card = h("div", { class:"pcard", style:{ position:"absolute", left:(i*370)+"px", top:"-10px", width:"350px", height:"420px", padding:"16px 18px" } }, h("div", { style:{ fontSize:"70px" } }, p.icon), h("div", { style:{ fontFamily:"var(--f-royal)", fontWeight:"800", fontSize:"32px" } }, p.t), h("div", { style:{ fontSize:"20px", opacity:".8" } }, "makes " + p.good), inv, h("div", { class:"need", style:{ fontSize:"20px", marginTop:"8px" } }));
      host.appendChild(card); p.inv = inv; p.need = card.querySelector(".need"); return card; });
    const scale = svg(500, 420, { style:"position:absolute;left:1120px;top:-10px;width:500px;height:420px" });
    host.appendChild(scale);
    const beam = s("g", { style:"transition:transform .8s", transform:"rotate(0 250 120)" }); scale.appendChild(s("path", { d:"M250 120 V380 M180 380 H320", stroke:"#8A5A0A", "stroke-width":10, "stroke-linecap":"round" }));
    beam.appendChild(s("path", { d:"M90 120 H410", stroke:"#B9770A", "stroke-width":10, "stroke-linecap":"round" })); [90, 410].forEach(x => { beam.appendChild(s("path", { d:`M${x} 120 L${x - 50} 220 M${x} 120 L${x + 50} 220`, stroke:"#8A5A0A", "stroke-width":3 })); beam.appendChild(s("path", { d:`M${x - 60} 220 Q${x} 260 ${x + 60} 220Z`, fill:"#E8B84A" })); });
    scale.appendChild(beam); scale.appendChild(s("circle", { cx:250, cy:120, r:12, fill:"#8A5A0A" }));
    const scLab = s("text", { x:250, y:410, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":24, fill:"#F6D27A" }, "HONEST SCALES"); scale.appendChild(scLab);
    const tip = h("div", { class:"pcard ix-tip", style:{ left:"0", right:"0", top:"440px", minHeight:"80px" } });
    host.appendChild(tip);
    const show = (map, needs) => P.forEach((p, i) => { p.inv.textContent = map[i]; p.need.textContent = needs ? needs[i] : ""; });
    const T = [
      () => { show(["🥣","🧣","🍞"], ["Has: a bowl. Needs: clothes and food.","Has: some cloth. Needs: a bowl and food.","Has: some bread. Needs: a bowl and clothes."]); setMD(tip, "Everyone tries to make **everything** themselves. It's slow, and nobody is very good at all three jobs."); },
      () => { show(["🥣🥣🥣🥣🥣🥣","🧣🧣🧣🧣🧣🧣","🍞🍞🍞🍞🍞🍞"], ["Expert potter!","Expert weaver!","Expert farmer!"]); setMD(tip, "**Specialisation:** each person does **one job** well and makes **lots**."); },
      () => { show(["🥣🥣🧣🧣🍞🍞","🥣🥣🧣🧣🍞🍞","🥣🥣🧣🧣🍞🍞"], ["Has it all!","Has it all!","Has it all!"]); setMD(tip, "**Exchange:** they meet at the **bazaar** and trade. Now **everyone** has bowls, cloth and bread. Trade helps everyone, and markets grow into cities."); },
      () => { beam.setAttribute("transform", "rotate(-12 250 120)"); scLab.textContent = "DISHONEST SCALES!"; setMD(tip, "But trade only works if it's **fair**. A cheat's scales tip the wrong way. **Proverbs 11:1:** the LORD detests dishonest scales, but accurate weights find favour with Him."); }
    ];
    function step(i){ beam.setAttribute("transform", "rotate(0 250 120)"); scLab.textContent = "HONEST SCALES"; T[i](); if (i) BM.sfx(i === 3 ? "no" : "tok"); }
    step(0);
    return { steps:3, step };
  };

  /* =======================================================
     26. CAMEL DESIGN — tap each body part (Wed W7)
     ======================================================= */
  IX.cameldesign = function(host){
    const W = 1100, H = 680;
    const v = svg(W, H, { style:"position:absolute;left:0;top:-10px;width:1100px;height:680px;border-radius:12px;box-shadow:var(--sh-3);background:linear-gradient(#f4d9a6,#e8c27f)" });
    host.appendChild(v);
    v.appendChild(s("rect", { x:0, y:560, width:W, height:120, fill:"#d9a65a" }));
    const cam = A.camel(200, 26, 5.8, "#a87a4a"); v.appendChild(cam);
    const PARTS = [
      { fx:0.48, fy:0.29, t:"Two humps (Bactrian)", d:"The humps store **fat**, not water! The camel uses the fat for energy when food is scarce. **Bactrian** camels have **two** humps; **dromedaries** have **one**." },
      { fx:0.1, fy:0.1, t:"Long eyelashes", d:"Two rows of long **eyelashes** help keep **sand** out of the eyes in a sandstorm." },
      { fx:0.02, fy:0.24, t:"Nostrils that close", d:"Camels can **close their nostrils** to keep out blowing sand." },
      { fx:0.45, fy:0.97, t:"Wide, padded feet", d:"Broad, tough **foot pads** spread out so the camel doesn't **sink** into soft sand." },
      { fx:0.6, fy:0.55, t:"Thick coat", d:"Bactrian camels grow a **thick winter coat** for cold desert nights and winters, and shed it in the hot summer." }
    ];
    const bb = { x:200, y:26, width:120*5.8, height:92*5.8 }; PARTS.forEach(p => { p.x = bb.x + p.fx*bb.width; p.y = bb.y + p.fy*bb.height; });
    const dots = PARTS.map(p => { const g = s("g", { style:"cursor:pointer" }); g.appendChild(s("circle", { cx:p.x, cy:p.y, r:24, fill:"#F6D27A", stroke:"#8A5A0A", "stroke-width":4 })); g.appendChild(s("text", { x:p.x, y:p.y + 8, "text-anchor":"middle", "font-size":22, "font-weight":900, fill:"#2B1B10" }, "+")); g.addEventListener("click", e => { e.stopPropagation(); show(p); }); v.appendChild(g); return g; });
    const info = panel({ left:"1130px", right:"0", top:"-10px" }, [h("h4", null, "Tap a + to explore"), setMD(h("p"), "Gandom says he's **perfectly designed** for the desert. Let's check.")]);
    host.appendChild(info);
    host.appendChild(h("div", { class:"ix-chip", style:{ position:"absolute", left:"14px", top:"620px", background:"rgba(0,0,0,.45)" } }, "Simplified drawing"));
    function show(p){ info.querySelector("h4").textContent = p.t; setMD(info.querySelector("p"), p.d); BM.sfx("tok"); }
    return { steps:PARTS.length, step(i){ if (i) show(PARTS[i-1]); } };
  };

  /* =======================================================
     36. CIPHER WHEEL — shift, loop, crack the Shadow's code (Thu W7)
     ======================================================= */
  IX.cipher = function(host){
    const AB = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const W = 700;
    const v = svg(W, W, { style:"position:absolute;left:0;top:-10px;width:660px;height:660px" });
    host.appendChild(v);
    const cx = 350, cy = 350;
    v.appendChild(s("circle", { cx, cy, r:330, fill:"#1E3A8A" })); v.appendChild(s("circle", { cx, cy, r:240, fill:"#F6D27A" })); v.appendChild(s("circle", { cx, cy, r:150, fill:"#FBF3E0" }));
    const outer = s("g"), inner = s("g", { style:"transition:transform .6s" });
    AB.split("").forEach((ch, i) => { const a = i/26*Math.PI*2 - Math.PI/2;
      outer.appendChild(s("text", { x:cx + Math.cos(a)*285, y:cy + Math.sin(a)*285 + 12, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":34, fill:"#FBF3E0" }, ch));
      inner.appendChild(s("text", { x:cx + Math.cos(a)*195, y:cy + Math.sin(a)*195 + 12, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":32, fill:"#2B1B10" }, ch)); });
    v.append(outer, inner);
    v.appendChild(s("path", { d:`M${cx} 10 l-14 -2 l14 26 l14 -26z`, fill:"#E0566F" }));
    const mid = s("text", { x:cx, y:cy + 24, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":72, fill:"#1E3A8A" }, "+3"); v.appendChild(mid);
    let shift = 3;
    const setShift = k => { shift = (k + 26) % 26; inner.style.transformOrigin = `${cx}px ${cy}px`; inner.style.transform = `rotate(${-shift*360/26}deg)`; mid.textContent = "+" + shift; };
    const enc = (t, k) => t.toUpperCase().replace(/[A-Z]/g, c => AB[(AB.indexOf(c) + k + 26) % 26]);
    const out = h("div", { style:{ position:"absolute", left:"700px", right:"0", top:"-10px" } });
    const plain = h("div", { class:"pcard", style:{ padding:"14px 18px", fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"44px", letterSpacing:".12em", minHeight:"84px" } });
    const coded = h("div", { class:"pcard", style:{ padding:"14px 18px", fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"44px", letterSpacing:".12em", minHeight:"84px", marginTop:"10px", background:"#1d1420", color:"#E0566F" } });
    const loop = h("pre", { style:{ margin:"12px 0 0", padding:"14px 18px", borderRadius:"12px", background:"#0F1D4A", color:"#cfe0ff", fontSize:"24px", lineHeight:"1.4", whiteSpace:"pre-wrap" } });
    const tip = h("div", { class:"pcard", style:{ marginTop:"12px", padding:"12px 16px", fontSize:"22px", lineHeight:"1.3" } });
    out.append(h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", color:"#F6D27A", letterSpacing:".12em", fontSize:"18px" } }, "PLAIN MESSAGE"), plain, h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", color:"#E0566F", letterSpacing:".12em", fontSize:"18px", marginTop:"10px" } }, "CODED MESSAGE"), coded, loop, tip);
    host.appendChild(out);
    let tm;
    function typeOut(code, k){ clearInterval(tm); coded.textContent = code; plain.textContent = ""; let i = 0; const res = enc(code, -k);
      if (!BM.motionOK()){ plain.textContent = res; return; }
      tm = setInterval(() => { i++; plain.textContent = res.slice(0, i); if (i >= res.length) clearInterval(tm); }, 220); }
    const T = [
      () => { setShift(0); plain.textContent = "HIDE THE MESSAGE"; coded.textContent = "?"; loop.textContent = ""; setMD(tip, "Herodotus tells how **Histiaeus** shaved a servant's head, **tattooed a message** on it, waited for the hair to grow back, then sent him off. Hidden in plain sight!"); },
      () => { setShift(3); plain.textContent = "ABC"; coded.textContent = "DEF"; loop.textContent = ""; setMD(tip, "A **shift cipher** moves every letter along the alphabet by the **same number**. With a shift of **3**: A → D, B → E, C → F."); },
      () => { setShift(3); plain.textContent = "HELLO"; coded.textContent = enc("HELLO", 3); loop.textContent = "repeat for each letter:\n    move it 3 places forward"; setMD(tip, "To **encode**, we do the same step for **every letter**. That's a **loop**: one instruction, repeated."); },
      () => { setShift(3); typeOut("WKH URDG LV ORQJ", 3); loop.textContent = "repeat for each letter:\n    move it 3 places BACK"; setMD(tip, "The **Shadow's Week 3 note!** To **decode**, run the loop the other way: move each letter **3 places back**."); },
      () => { setShift(3); plain.textContent = "THE ROAD IS LONG"; coded.textContent = "WKH URDG LV ORQJ"; loop.textContent = "repeat for each letter:\n    move it 3 places BACK"; setMD(tip, "**“THE ROAD IS LONG.”** Is the Shadow tired? Lonely? Hold on to that thought…"); }
    ];
    function step(i){ clearInterval(tm); T[i](); if (i) BM.sfx(i === 4 ? "ok" : "tok"); }
    controls(host, [btn("Shift −", () => setShift(shift - 1)), btn("Shift +", () => setShift(shift + 1), "on")]);
    step(0);
    return { steps:4, step, destroy(){ clearInterval(tm); } };
  };

  /* =======================================================
     46. KNOT COUNTER — zoom into the Pazyryk carpet (Fri W7)
     ======================================================= */
  IX.knotcounter = function(host){
    const N = 40, CS = 15;
    const v = svg(N*CS, N*CS, { style:`position:absolute;left:0;top:-10px;width:${N*CS}px;height:${N*CS}px;border-radius:8px;box-shadow:var(--sh-3)` });
    host.appendChild(v);
    const col = (r, c) => {
      const d = Math.min(r, c, N-1-r, N-1-c);
      if (d === 0 || d === 5) return "#2B1B10";
      if (d < 5) return ((r + c) % 6 < 3) ? "#B0213B" : "#E8B84A";
      if (d === 6 || d === 9) return "#0B7A55";
      if (d < 9) return (Math.floor(r/3) + Math.floor(c/3)) % 2 ? "#E8B84A" : "#1E3A8A";
      const rr = r - N/2 + .5, cc = c - N/2 + .5; return (Math.abs(rr) + Math.abs(cc) < 8) ? ((Math.abs(rr) + Math.abs(cc)) % 4 < 2 ? "#E8B84A" : "#B0213B") : "#7a1530";
    };
    for (let r=0;r<N;r++) for (let c=0;c<N;c++) v.appendChild(s("rect", { x:c*CS, y:r*CS, width:CS, height:CS, fill:col(r, c), stroke:"rgba(0,0,0,.12)", "stroke-width":.5 }));
    const zoomBox = s("rect", { x:0, y:0, width:6*CS, height:6*CS, fill:"none", stroke:"#fff", "stroke-width":4, opacity:0 }); v.appendChild(zoomBox);
    // zoom view
    const zv = svg(6*70, 6*70, { style:"position:absolute;left:640px;top:-10px;width:420px;height:420px;border-radius:8px;box-shadow:var(--sh-3);opacity:0;transition:opacity .6s" });
    host.appendChild(zv);
    for (let r=0;r<6;r++) for (let c=0;c<6;c++){ zv.appendChild(s("rect", { x:c*70, y:r*70, width:70, height:70, fill:col(r, c) })); zv.appendChild(s("path", { d:`M${c*70 + 10} ${r*70 + 60} Q${c*70 + 35} ${r*70 + 10} ${c*70 + 60} ${r*70 + 60}`, stroke:"rgba(0,0,0,.25)", "stroke-width":6, fill:"none" })); }
    const info = panel({ left:"1090px", right:"0", top:"-10px" }, [h("h4"), h("p")]);
    const calc = h("div", { class:"pcard", style:{ position:"absolute", left:"640px", width:"420px", top:"430px", padding:"12px 16px", fontSize:"24px", lineHeight:"1.35", opacity:"0", transition:"opacity .6s" } });
    host.append(info, calc);
    const T = [
      ["The Pazyryk carpet","The **oldest known knotted carpet**, about **2,400–2,500 years old** (5th–4th century BC). Found frozen in a burial mound in the **Altai Mountains** of Siberia; now in the **Hermitage Museum**. *(This is a simplified pattern, not the real design.)*"],
      ["Border and centre","Like many Persian carpets: **borders** around the edge, a **centre field** with repeating motifs."],
      ["Zoom in: one square = one knot","Every tiny square of colour is **one knot** of wool, tied by hand."],
      ["How many knots?","The real carpet has about **360,000 knots per square metre**: that's **36 knots in every square centimetre**!"],
      ["The whole carpet","It's about **1.83 m × 2 m**. Work it out: 1.83 × 2 = 3.66 m², and 3.66 × 360,000 ≈ **1.3 million knots** *(our calculation)*. Every one tied by hand."]
    ];
    function step(i){ info.querySelector("h4").textContent = T[i][0]; setMD(info.querySelector("p"), T[i][1]);
      zoomBox.setAttribute("opacity", i >= 2 ? 1 : 0); zv.style.opacity = i >= 2 ? "1" : "0";
      calc.style.opacity = i >= 3 ? "1" : "0"; setMD(calc, i >= 4 ? "**1.83 × 2 = 3.66 m²**\n**3.66 × 360,000 ≈ 1,317,600 knots**" : "**360,000 ÷ 10,000 = 36** knots per cm²\n(there are 10,000 cm² in 1 m²)");
      if (i) BM.sfx("tok"); }
    step(0);
    return { steps:4, step };
  };
})(window.BM);
