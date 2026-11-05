/* ==========================================================
   INTERACTIVES — Week 2 · The King Who Opened the Gates
   cylinder · twosources · capitals · foodchain · slope · rollseal
   ========================================================== */
(function(BM){
  "use strict";
  const h = BM.h, s = BM.s, svg = BM.svg, A = BM.art, M = BM.map, IX = BM.IX;
  const { btn, controls, panel, setMD } = IX._h;

  /* =======================================================
     4. CYLINDER READER — tap the bands of the Cyrus Cylinder (Mon W2)
     ======================================================= */
  IX.cylinder = function(host){
    const W = 1000, H = 560;
    const v = svg(W, H, { style:"position:absolute;left:0;top:0;width:1000px;height:560px" });
    v.appendChild(s("ellipse", { cx:500, cy:470, rx:430, ry:40, fill:"#000", opacity:.35, filter:"url(#fx-blur8)" }));
    v.appendChild(s("path", { d:"M90 150 Q500 60 910 150 L910 410 Q500 500 90 410Z", fill:"url(#g-clay)" }));
    v.appendChild(s("ellipse", { cx:90, cy:280, rx:40, ry:130, fill:"#8a5a34" }));
    v.appendChild(s("ellipse", { cx:910, cy:280, rx:40, ry:130, fill:"#a9774b" }));
    v.appendChild(s("path", { d:"M640 200 l70 40 l-30 70 l-80 -16z", fill:"#6E4423", opacity:.55 }));
    const SECT = [
      { t:"Marduk chose Cyrus", d:"The Cylinder says **Marduk**, the god the Babylonians worshipped, looked for a good king and **chose Cyrus**. (It was written to make Cyrus look good to the people of Babylon.)" },
      { t:"Babylon taken without a battle", d:"Cyrus's army **entered Babylon without a battle** in **539 BC**, and the people welcomed him." },
      { t:"Temples restored, peoples sent home", d:"Cyrus **restored temples** and **returned deported peoples** to their homelands: people the Babylonians had forced to move." },
      { t:"Forced labour ended", d:"He says he **ended forced labour** for the people of Babylon and brought peace." },
      { t:"Buried in the wall", d:"The Cylinder was **buried in the foundations of Babylon's city wall**, a custom for building work. It was found in 1879 and is now in the **British Museum**." }
    ];
    const bands = SECT.map((S, i) => {
      const y = 170 + i*50;
      const g = s("g", { style:"cursor:pointer" });
      const r = s("path", { d:`M110 ${y} Q500 ${y - 70 + i*6} 890 ${y} L890 ${y + 44} Q500 ${y - 26 + i*6} 110 ${y + 44}Z`, fill:"#F6D27A", opacity:0, style:"transition:opacity .4s" });
      g.appendChild(r);
      for (let k=0;k<26;k++){ const x = 140 + k*28, yy = y + 14 - (Math.sin((x - 110)/780*Math.PI))*((70 - i*6)*.5); g.appendChild(s("path", { d: k % 3 ? `M${x} ${yy} l10 4 l-10 4z` : `M${x} ${yy - 2} l4 10 l4 -10z`, fill:"#5a3418" })); }
      g.addEventListener("click", e => { e.stopPropagation(); show(i); });
      v.appendChild(g); return r;
    });
    host.appendChild(v);
    host.appendChild(h("div", { class:"ix-chip", style:{ position:"absolute", left:"20px", top:"520px", background:"rgba(0,0,0,.35)" } }, "Drawing, not a photo · the real Cylinder is in the British Museum"));
    const info = panel({ left:"1040px", right:"0", top:"60px" }, [h("div", { class:"ix-chip", style:{ background:"#1E3A8A", color:"#fff" } }, "THE CYRUS CYLINDER · 539 BC"), h("h4", null, "Tap a line of writing"), setMD(h("p"), "Written in **Babylonian cuneiform** soon after Cyrus took Babylon. Each band holds part of the message. Tap one to read a simple version.")]);
    host.appendChild(info);
    function show(i){ bands.forEach((b, k) => b.setAttribute("opacity", k === i ? .45 : 0)); info.querySelector("h4").textContent = `${i+1} · ${SECT[i].t}`; setMD(info.querySelector("p"), SECT[i].d); BM.sfx("paper"); }
    return { steps:SECT.length, step(i){ if (i === 0){ bands.forEach(b => b.setAttribute("opacity", 0)); info.querySelector("h4").textContent = "Tap a line of writing"; setMD(info.querySelector("p"), "Written in **Babylonian cuneiform** soon after Cyrus took Babylon. Each band holds part of the message. Tap one to read a simple version."); } else show(i - 1); } };
  };

  /* =======================================================
     4b. TWO SOURCES SIDE BY SIDE — the Cylinder and Ezra 1 (Mon W2)
     ======================================================= */
  IX.twosources = function(host){
    const L = { t:"The Cyrus Cylinder", by:"A clay cylinder, written for Cyrus · Babylon, soon after 539 BC", col:"#C2593A" };
    const R = { t:"Ezra 1:1–4", by:"Written by the Jewish people, under Persian rule", col:"#1E3A8A" };
    const ROWS = [
      ["Who chose Cyrus?","Marduk, the god Babylon worshipped","The LORD, the God of heaven, stirred Cyrus's heart","different"],
      ["What did Cyrus do?","Returned deported peoples to their homelands and restored temples","Let the Jewish exiles go home to Jerusalem to rebuild the temple","same"],
      ["Does it mention Jerusalem or the Jews?","No","Yes","different"],
      ["What does it show?","Cyrus's policy of sending peoples home","The same policy, from the Jews' side","same"]
    ];
    const head = (X, x) => h("div", { class:"pcard", style:{ position:"absolute", left:x+"px", top:"0", width:"700px", padding:"14px 22px", boxShadow:`inset 0 8px 0 ${X.col}, var(--sh-3)` } }, h("div", { style:{ fontFamily:"var(--f-royal)", fontWeight:"800", fontSize:"34px" } }, X.t), h("div", { style:{ fontSize:"20px", opacity:".8" } }, X.by));
    host.append(head(L, 160), head(R, 1060 - 160 + 160));
    const rows = ROWS.map((r, i) => {
      const y = 120 + i*130;
      const lab = h("div", { style:{ position:"absolute", left:"0", top:(y + 20)+"px", width:"150px", fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"21px", letterSpacing:".06em", textTransform:"uppercase", color:"#F6D27A", lineHeight:"1.1" } }, r[0]);
      const a = h("div", { class:"pcard", style:{ position:"absolute", left:"160px", top:y+"px", width:"700px", height:"110px", padding:"14px 20px", fontSize:"25px", lineHeight:"1.25" } }, r[1]);
      const b = h("div", { class:"pcard", style:{ position:"absolute", left:"1060px", top:y+"px", width:"700px", height:"110px", padding:"14px 20px", fontSize:"25px", lineHeight:"1.25" } }, r[2]);
      const tag = h("div", { style:{ position:"absolute", left:"880px", top:(y + 30)+"px", width:"160px", textAlign:"center", fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"26px", letterSpacing:".1em", padding:"6px 0", borderRadius:"10px", background: r[3] === "same" ? "#0B7A55" : "#B0213B", color:"#fff" } }, r[3] === "same" ? "= SAME" : "≠ DIFFERENT");
      const all = [lab, a, b, tag]; all.forEach(e => { e.style.transition = "opacity .6s, transform .6s"; host.appendChild(e); });
      return all;
    });
    function step(n){ rows.forEach((r, i) => r.forEach(e => { const on = i < n; e.style.opacity = on ? "1" : "0"; e.style.transform = on ? "none" : "translateY(20px)"; })); if (n) BM.sfx("paper"); }
    step(0);
    return { steps:ROWS.length, step };
  };

  /* =======================================================
     12. CAPITAL CITIES MAP — four cities, four jobs (Tue W2)
     ======================================================= */
  IX.capitals = function(host){
    const map = M.persia({ theme:"paper", labels:true, ranges:true, deserts:false, cities:["babylon","susa","pasargadae","persepolis","ecbatana"], road:false });
    map.setAttribute("style", "position:absolute;left:0;top:-10px;width:1100px;height:auto;border-radius:12px;box-shadow:var(--sh-3)");
    host.appendChild(map);
    const C = [
      { id:"pasargadae", t:"Pasargadae", job:"🌳 The garden capital", col:"#0B7A55", d:"Cyrus's capital in Pars (he ruled about **559–530 BC**). Its garden had stone water channels about **25 cm wide**, with a basin every **13–14 m**, fed from the nearby river." },
      { id:"babylon", t:"Babylon", job:"🏛️ The great conquered city", col:"#B9770A", d:"The huge, rich city on the Euphrates that Cyrus took in **539 BC**. It became one of the empire's most important cities." },
      { id:"susa", t:"Susa", job:"⚖️ The old capital of government", col:"#C2593A", d:"The ancient capital of **Elam**. Darius built a palace and a great hall here, and ran much of the empire from it." },
      { id:"persepolis", t:"Persepolis", job:"👑 The ceremonial capital", col:"#1E3A8A", d:"Begun about **518 BC** by Darius: a city of grand halls and staircases for great ceremonies, built in Pars." }
    ];
    const rings = s("g"); map.appendChild(rings);
    const info = panel({ left:"1130px", right:"0", top:"300px", bottom:"0" }, [h("h4", null, "Four capitals"), setMD(h("p"), "A huge empire needed more than one capital. Tap a city: what was its **job**?")]);
    const cards = h("div", { style:{ position:"absolute", left:"1130px", right:"0", top:"-10px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px" } }, C.map(c => {
      const k = h("div", { class:"pcard hov", style:{ padding:"10px 14px", cursor:"pointer", boxShadow:`inset 6px 0 0 ${c.col}, var(--sh-2)` } }, h("div", { style:{ fontFamily:"var(--f-royal)", fontWeight:"800", fontSize:"26px" } }, c.t), h("div", { class:"job", style:{ fontSize:"19px", opacity:"0", transition:"opacity .5s" } }, c.job));
      k.addEventListener("click", e => { e.stopPropagation(); show(c, k); }); c.k = k; return k;
    }));
    host.append(cards, info);
    function show(c, k){
      BM.clear(rings); const [x, y] = map.place(c.id);
      const r = s("circle", { cx:x, cy:y, r:30, fill:"none", stroke:c.col, "stroke-width":8 }); rings.appendChild(r);
      BM.anim(r, [{ opacity:0, transform:"scale(2)" }, { opacity:1, transform:"scale(1)" }], { duration:600 }); r.style.transformOrigin = `${x}px ${y}px`; r.style.transformBox = "view-box";
      k.querySelector(".job").style.opacity = "1"; info.querySelector("h4").textContent = c.t + " · " + c.job.replace(/^\S+\s/, ""); setMD(info.querySelector("p"), c.d); BM.sfx("paper");
    }
    controls(host, [btn("Show all jobs", () => C.forEach(c => c.k.querySelector(".job").style.opacity = "1"), "on")]);
    return { steps:C.length, step(i){ if (i > 0) show(C[i-1], C[i-1].k); } };
  };

  /* =======================================================
     21. FOOD CHAIN BUILDER — grass → gazelle → cheetah (+ decomposers) (Wed W2)
     ======================================================= */
  IX.foodchain = function(host){
    const W = 1760, H = 680;
    const v = svg(W, H, { style:"position:absolute;left:0;top:-10px;width:1760px;height:680px;overflow:visible" });
    host.appendChild(v);
    v.appendChild(s("rect", { x:0, y:470, width:W, height:210, rx:18, fill:"#5a3d26", opacity:.85 }));
    v.appendChild(s("text", { x:24, y:510, "font-family":"Big Shoulders Display", "font-weight":900, "font-size":28, "letter-spacing":"3", fill:"#F6D27A" }, "THE SOIL"));
    const N = [
      { k:"sun", x:150, y:150, icon:"☀️", t:"The Sun", sub:"energy" },
      { k:"grass", x:520, y:210, icon:"🌾", t:"Grass & shrubs", sub:"PRODUCER" },
      { k:"gazelle", x:900, y:210, icon:"🦌", t:"Goitered gazelle", sub:"CONSUMER (eats plants)", img:"animal-06" },
      { k:"cheetah", x:1280, y:210, icon:"🐆", t:"Asiatic cheetah", sub:"CONSUMER (predator)", img:"animal-07" },
      { k:"beetle", x:1000, y:580, icon:"🪲", t:"Dung beetles", sub:"DECOMPOSER" },
      { k:"fungi", x:620, y:580, icon:"🍄", t:"Fungi & bacteria", sub:"DECOMPOSER" }
    ];
    const ARR = [["sun","grass"],["grass","gazelle"],["gazelle","cheetah"],["cheetah","beetle"],["beetle","fungi"],["fungi","grass"]];
    const nodes = {};
    N.forEach(n => {
      const g = h("div", { class:"pcard", style:{ position:"absolute", left:(n.x - 140)+"px", top:(n.y - 120)+"px", width:"280px", height:"230px", padding:"10px 12px", textAlign:"center", opacity:"0", transition:"opacity .6s, transform .6s var(--ease-lift)", transform:"scale(.8)" } });
      const pic = h("div", { style:{ position:"relative", height:"120px", borderRadius:"8px", overflow:"hidden", display:"grid", placeItems:"center", fontSize:"84px", background:"rgba(0,0,0,.06)" } }, n.icon);
      if (n.img){ const im = BM.imgSlot(n.img); im.style.cssText += ";position:absolute;inset:0;width:100%;height:100%;object-fit:cover"; pic.appendChild(im); }
      g.append(pic, h("div", { style:{ fontFamily:"var(--f-royal)", fontWeight:"800", fontSize:"24px", marginTop:"6px" } }, n.t), h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"17px", letterSpacing:".1em", color: /DECOMP/.test(n.sub) ? "#8A5A0A" : /PRODUCER/.test(n.sub) ? "#0B7A55" : "#B0213B" } }, n.sub));
      host.appendChild(g); nodes[n.k] = { el:g, n };
    });
    const arrows = ARR.map(([a, b]) => {
      const A1 = nodes[a].n, B1 = nodes[b].n, dx = B1.x - A1.x, dy = B1.y - A1.y, L = Math.hypot(dx, dy), ux = dx/L, uy = dy/L;
      const x1 = A1.x + ux*150, y1 = A1.y + uy*130, x2 = B1.x - ux*150, y2 = B1.y - uy*130;
      const p = s("path", { d:`M${x1} ${y1} L${x2} ${y2}`, stroke:"#F6D27A", "stroke-width":8, fill:"none", "stroke-linecap":"round", "marker-end":"url(#fc-arrow)", opacity:0, style:"transition:opacity .5s" });
      v.appendChild(p); return p;
    });
    v.insertBefore(s("defs", null, s("marker", { id:"fc-arrow", viewBox:"0 0 10 10", refX:7, refY:5, markerWidth:4, markerHeight:4, orient:"auto" }, s("path", { d:"M0 0 L10 5 L0 10z", fill:"#F6D27A" }))), v.firstChild);
    const tip = h("div", { class:"pcard ix-tip", style:{ left:"1450px", right:"0", top:"360px" } });
    host.appendChild(tip);
    const T = [
      "Every food chain starts with **energy from the Sun**.",
      "**Producers** (plants) make their own food from sunlight.",
      "The **gazelle** eats the grass: it is a **consumer**. The arrow means *“is eaten by”*: energy moves along it.",
      "The **cheetah** eats the gazelle: a **predator**. The gazelle is its **prey**.",
      "When animals die (or leave dung), **decomposers** break them down…",
      "…into **nutrients** in the soil. Fungi and bacteria are decomposers too.",
      "The nutrients feed the grass again. **Nothing is wasted!**"
    ];
    const order = ["sun","grass","gazelle","cheetah","beetle","fungi"];
    function step(i){
      order.forEach((k, j) => { const on = j <= Math.min(i, 5); nodes[k].el.style.opacity = on ? "1" : "0"; nodes[k].el.style.transform = on ? "none" : "scale(.8)"; });
      arrows.forEach((a, j) => a.setAttribute("opacity", j < i ? 1 : 0));
      setMD(tip, T[i]); if (i) BM.sfx("tok");
    }
    step(0);
    return { steps:6, step };
  };

  /* =======================================================
     21b. PRODUCER, CONSUMER OR DECOMPOSER? (Wed W2)
     ======================================================= */
  IX.pcdsort = function(host){
    return IX._sorter(host, {
      bins:[ { id:"p", t:"PRODUCER", d:"makes its own food from sunlight", c:"#0B7A55" }, { id:"c", t:"CONSUMER", d:"eats other living things", c:"#B0213B" }, { id:"d", t:"DECOMPOSER", d:"breaks down dead things", c:"#8A5A0A" } ],
      cards:[
        { t:"Feather grass", icon:"🌾", bin:"p", why:"Grass makes its own food from **sunlight**: a **producer**." },
        { t:"Goitered gazelle", icon:"🦌", bin:"c", why:"The gazelle **eats plants**: a **consumer** (a herbivore)." },
        { t:"Dung beetle", icon:"🪲", bin:"d", why:"Dung beetles break down **animal dung** and return it to the soil: a **decomposer**." },
        { t:"Asiatic cheetah", icon:"🐆", bin:"c", why:"The cheetah **eats other animals**: a **consumer** (a predator)." },
        { t:"Desert shrub", icon:"🌿", bin:"p", why:"Shrubs make food from sunlight: **producers**." },
        { t:"Mushroom (fungi)", icon:"🍄", bin:"d", why:"Fungi are **not plants**! They can't use sunlight; they break down dead things: **decomposers**." },
        { t:"Persian onager", icon:"🫏", bin:"c", why:"The onager (a wild ass) **grazes on plants**: a **consumer**." }
      ],
      tip:"Hold up each card. Class votes: producer, consumer or decomposer? Then drag it.",
      done:"Producers make food · consumers eat · decomposers recycle. Every community needs all three!",
      binH:300, cardW:230, cardH:240, scale:.5
    });
  };

  /* =======================================================
     31. SLOPE TESTER — how steep should a qanat tunnel be? (Thu W2)
     ======================================================= */
  IX.slope = function(host){
    const W = 1100, H = 660;
    const v = svg(W, H, { style:"position:absolute;left:0;top:-10px;width:1100px;height:660px;border-radius:12px;box-shadow:var(--sh-3);background:#e9d6b0" });
    host.appendChild(v);
    v.appendChild(s("path", { d:"M0 120 L180 40 L300 110 L1100 150 L1100 660 L0 660Z", fill:"#c49a62" }));
    v.appendChild(s("rect", { x:0, y:120, width:W, height:540, fill:"url(#p-sand)", opacity:.5 }));
    const tunnel = s("path", { fill:"none", stroke:"#3a2614", "stroke-width":46, "stroke-linecap":"round" });
    const water = s("path", { fill:"none", stroke:"#2b8fb3", "stroke-width":20, "stroke-linecap":"round", "stroke-dasharray":"26 18", style:"animation:flow 2s linear infinite" });
    const shafts = s("g", { fill:"#5a3a1c" });
    const erosion = s("g", { opacity:0 });
    v.append(tunnel, water, shafts, erosion);
    v.appendChild(s("text", { x:40, y:640, "font-family":"Atkinson Hyperlegible", "font-size":20, fill:"#2B1B10", opacity:.7 }, "Mother well (near the mountains)  →  tunnel  →  outlet (town and fields)"));
    const outlet = s("g"); v.appendChild(outlet);
    const info = panel({ left:"1130px", right:"0", top:"230px", bottom:"0" }, [h("h4"), h("p")]);
    const read = h("div", { style:{ position:"absolute", left:"1130px", right:"0", top:"-10px", fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"40px", color:"#F6D27A" } });
    const slider = h("input", { type:"range", min:"0", max:"12", value:"3", style:{ position:"absolute", left:"1130px", width:"600px", top:"70px", accentColor:"#C2593A" }, oninput:() => draw(+slider.value) });
    slider.addEventListener("pointerdown", e => e.stopPropagation());
    host.append(read, slider, info);
    host.appendChild(h("div", { style:{ position:"absolute", left:"1130px", top:"110px", width:"600px", display:"flex", justifyContent:"space-between", fontFamily:"var(--f-label)", fontWeight:"800", fontSize:"20px", letterSpacing:".1em", color:"#FBF3E0" } }, h("span", null, "FLAT"), h("span", null, "GENTLE"), h("span", null, "STEEP")));
    function draw(sl){
      const x0 = 160, x1 = 1000, y0 = 330, drop = sl*24, y1 = y0 + drop;
      tunnel.setAttribute("d", `M${x0} ${y0} L${x1} ${y1}`); water.setAttribute("d", `M${x0} ${y0} L${x1} ${y1}`);
      BM.clear(shafts); [160, 330, 500, 670, 840].forEach(x => { const yy = y0 + (x - x0)/(x1 - x0)*drop; shafts.appendChild(s("rect", { x:x - 8, y:130 + (x/1100)*30, width:16, height:yy - 130 - (x/1100)*30 })); });
      BM.clear(erosion); for (let i=0;i<10;i++){ const x = 300 + i*70, yy = y0 + (x - x0)/(x1 - x0)*drop; erosion.appendChild(s("path", { d:`M${x} ${yy + 24} l12 18 l-20 6z`, fill:"#7a5230" })); }
      BM.clear(outlet); outlet.appendChild(s("ellipse", { cx:1040, cy:y1 + 10, rx:sl === 0 ? 0 : 50, ry:16, fill:"#2b8fb3", opacity:.7 }));
      let k, t, d;
      if (sl === 0){ k = "none"; t = "Too flat: the water stops"; d = "With **no slope**, gravity can't pull the water along. It sits still, goes stale and seeps away. No water reaches the town."; }
      else if (sl <= 4){ k = "ok"; t = "Just right: a gentle slope"; d = "A **gentle slope** lets **gravity** pull the water along slowly and steadily, all year. That's how qanats were built. Fair shares were measured with **water clocks**."; }
      else { k = "fast"; t = "Too steep: the water rushes"; d = "With a **steep slope** the water rushes too fast. It **wears away the tunnel walls** (erosion) and the tunnel can collapse."; }
      water.style.animationDuration = sl === 0 ? "0s" : (3.2 - sl*.22).toFixed(2) + "s";
      water.setAttribute("opacity", sl === 0 ? .4 : 1);
      erosion.setAttribute("opacity", k === "fast" ? 1 : 0);
      read.textContent = `Drop: ${sl === 0 ? "0" : sl} · ${k === "ok" ? "✓ GENTLE" : k === "fast" ? "⚠ TOO STEEP" : "✗ TOO FLAT"}`;
      info.querySelector("h4").textContent = t; setMD(info.querySelector("p"), d);
    }
    draw(3);
    const presets = [3, 0, 11, 3];
    return { steps:3, step(i){ slider.value = presets[i]; draw(presets[i]); if (i) BM.sfx("tok"); } };
  };

  /* =======================================================
     41. ROLL THE SEAL — a cylinder seal leaves its picture in clay (Fri W2)
     ======================================================= */
  IX.rollseal = function(host){
    const W = 1100, H = 660;
    const v = svg(W, H, { style:"position:absolute;left:0;top:-10px;width:1100px;height:660px;border-radius:12px;box-shadow:var(--sh-3);background:#2B1B10" });
    host.appendChild(v);
    // the clay strip
    v.appendChild(s("rect", { x:60, y:330, width:980, height:230, rx:20, fill:"url(#g-clay)" }));
    v.appendChild(s("rect", { x:60, y:330, width:980, height:230, rx:20, fill:"url(#p-dots)", opacity:.15 }));
    // a motif (camel + palm + star), facing right in the IMPRESSION; carved mirrored on the seal
    const motif = (col, flip) => { const g = s("g", { transform: flip ? "scale(-1 1) translate(-200 0)" : null });
      g.appendChild(A.camel(20, 40, .95, col)); g.appendChild(s("path", { d:"M160 140 V60 M160 60 q-30 -10 -44 6 M160 60 q30 -12 44 4 M160 60 q-16 -26 -40 -24 M160 60 q16 -26 40 -22", stroke:col, "stroke-width":7, fill:"none", "stroke-linecap":"round" })); g.appendChild(s("path", { d:"M60 14 l5 10 l11 2 l-8 7 l2 11 l-10 -5 l-10 5 l2 -11 l-8 -7 l11 -2z", fill:col })); return g; };
    const imprint = s("g"); v.appendChild(imprint);
    const strip = s("clipPath", { id:"rs-clip" }); const cr = s("rect", { x:60, y:330, width:0, height:230 }); strip.appendChild(cr); v.appendChild(s("defs", null, strip));
    imprint.setAttribute("clip-path", "url(#rs-clip)");
    for (let i=0;i<5;i++){ const g = s("g", { transform:`translate(${90 + i*200} 360)`, filter:"url(#fx-carve)" }); g.appendChild(motif("#8a5a34", false)); imprint.appendChild(g); }
    // the seal (a rolling cylinder)
    const seal = s("g"); v.appendChild(seal);
    seal.appendChild(s("rect", { x:-90, y:-120, width:180, height:240, rx:30, fill:"#3a3a40" }));
    seal.appendChild(s("rect", { x:-90, y:-120, width:180, height:240, rx:30, fill:"url(#p-dots)", opacity:.25 }));
    const sm = s("g", { transform:"translate(-82 -80) scale(.82)" }); sm.appendChild(motif("#c9ced6", true)); seal.appendChild(sm);
    seal.appendChild(s("ellipse", { cx:0, cy:-120, rx:90, ry:16, fill:"#55555c" }));
    let x = 150;
    const place = () => seal.setAttribute("transform", `translate(${x} 200)`);
    place();
    const info = panel({ left:"1130px", right:"0", top:"-10px", bottom:"0" }, [h("h4"), h("p")]);
    host.appendChild(info);
    const T = [
      ["A cylinder seal","A small stone **cylinder** carved with a picture. Officials rolled it across wet clay to **sign** a document: their picture was their signature."],
      ["Roll it!","As the seal rolls, it presses its picture into the clay **again and again**: a long, repeating band."],
      ["Look closely: it's backwards!","The picture on the seal faces **the other way**. The carver cut it **in reverse (a mirror image)**, so the print comes out the right way round."],
      ["Signed and sealed","The Persepolis archive has **5,000–6,000 tablets with seal impressions but no writing**: the seal itself was the message."]
    ];
    let anim;
    function roll(){ if (anim) cancelAnimationFrame(anim); const t0 = performance.now(), dur = BM.motionOK() ? 3200 : 1; const tick = now => { const t = Math.min(1, (now - t0)/dur); x = 150 + t*820; place(); cr.setAttribute("width", Math.max(0, x - 60 + 40)); sm.setAttribute("transform", `translate(${-82 + ((t*820) % 200) * 0} -80) scale(.82)`); if (t < 1) anim = requestAnimationFrame(tick); }; anim = requestAnimationFrame(tick); BM.sfx("stone"); }
    function step(i){
      info.querySelector("h4").textContent = T[i][0]; setMD(info.querySelector("p"), T[i][1]);
      if (i === 0){ if (anim) cancelAnimationFrame(anim); x = 150; place(); cr.setAttribute("width", 0); }
      if (i === 1) roll();
      if (i >= 2){ if (anim) cancelAnimationFrame(anim); x = 970; place(); cr.setAttribute("width", 980); }
      sm.style.transition = "filter .5s"; sm.style.filter = i === 2 ? "drop-shadow(0 0 10px #F6D27A)" : "none";
    }
    step(0);
    controls(host, [btn("Roll it again", () => step(1), "on")]);
    return { steps:3, step, destroy(){ if (anim) cancelAnimationFrame(anim); } };
  };
})(window.BM);
