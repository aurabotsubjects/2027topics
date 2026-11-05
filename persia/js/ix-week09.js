/* ==========================================================
   INTERACTIVES — Week 9 · Star-Watchers & Silk
   persiarises · silkroad · icenursery · couriergame · nightsky
   ========================================================== */
(function(BM){
  "use strict";
  const h = BM.h, s = BM.s, svg = BM.svg, A = BM.art, IX = BM.IX;
  const { btn, controls, panel, setMD } = IX._h;

  /* =======================================================
     3b. PERSIA RISES AGAIN — the timeline continues (Mon W9)
     ======================================================= */
  IX.persiarises = function(host){
    const EV = [
      { x:140, t:"559 BC", d:"Cyrus begins to rule", c:"#1E3A8A" },
      { x:330, t:"539 BC", d:"Cyrus takes Babylon", c:"#1E3A8A" },
      { x:520, t:"330 BC", d:"Alexander burns Persepolis", c:"#B0213B" },
      { x:720, t:"After Alexander", d:"The Parthians rule Persia", c:"#0B7A55" },
      { x:960, t:"Jesus's birth", d:"Magi from the east come to worship", c:"#B9770A", star:true },
      { x:1180, t:"Pentecost", d:"Parthians, Medes and Elamites hear the gospel (Acts 2:9)", c:"#B9770A", star:true },
      { x:1560, t:"AD 224–651", d:"The Sasanian dynasty rules Persia", c:"#0F7F74" }
    ];
    const v = svg(1760, 660, { style:"position:absolute;left:0;top:-10px;width:1760px;height:660px" });
    host.appendChild(v);
    v.appendChild(s("path", { d:"M20 330 H1740", stroke:"#F6D27A", "stroke-width":10, "stroke-linecap":"round" }));
    v.appendChild(s("path", { d:"M860 300 V360", stroke:"#FBF3E0", "stroke-width":6 }));
    v.appendChild(s("text", { x:860, y:400, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":28, fill:"#FBF3E0" }, "BC | AD"));
    const items = EV.map((e, i) => { const up = i % 2 === 0; const g = s("g", { opacity:0, style:"transition:opacity .6s" });
      g.appendChild(s("circle", { cx:e.x, cy:330, r:16, fill:e.c, stroke:"#FBF3E0", "stroke-width":4 }));
      g.appendChild(s("path", { d:`M${e.x} ${up ? 314 : 346} V${up ? 230 : 430}`, stroke:e.c, "stroke-width":4 }));
      const fo = s("foreignObject", { x:e.x - 130, y: up ? 40 : 430, width:260, height:190 });
      fo.appendChild(h("div", { class:"pcard", style:{ padding:"10px 12px", fontSize:"22px", lineHeight:"1.25", boxShadow:`inset 0 6px 0 ${e.c}, var(--sh-2)` } }, h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"24px", color:e.c } }, (e.star ? "⭐ " : "") + e.t), e.d));
      g.appendChild(fo); v.appendChild(g); return g; });
    const tip = h("div", { class:"pcard ix-tip", style:{ left:"0", right:"0", top:"620px", minHeight:"50px" } });
    host.appendChild(tip);
    const T = ["Our Week 1 timeline, continued. Press → to add each event.", "Cyrus begins to rule.", "Babylon is taken.", "Persepolis burns. Is Persia finished?", "No! Persia rises again under the **Parthians**.", "**Magi from the east** follow a star to worship the child Jesus (Matthew 2).", "At **Pentecost**, Parthians, Medes and Elamites hear the gospel in their own languages: the same peoples we met in Week 1!", "Later the **Sasanians** rule Persia (AD 224–651). Kingdoms rise and fall… God's kingdom lasts."];
    function step(i){ items.forEach((g, k) => g.setAttribute("opacity", k < i ? 1 : 0)); setMD(tip, T[i]); if (i) BM.sfx("paper"); }
    step(0);
    return { steps:EV.length, step };
  };

  /* =======================================================
     19. SILK ROAD JOURNEY — goods change hands (Tue W9)
     ======================================================= */
  IX.silkroad = function(host){
    const W = 1760, H = 600;
    const v = svg(W, H, { style:"position:absolute;left:0;top:-10px;width:1760px;height:600px;border-radius:12px;box-shadow:var(--sh-3);background:#e9d6b0" });
    host.appendChild(v);
    v.appendChild(s("path", { d:"M0 0 H260 Q230 200 300 420 Q200 520 0 560Z", fill:"#9fc4dc" })); // Mediterranean-ish
    v.appendChild(s("text", { x:40, y:260, "font-family":"Fraunces, serif", "font-style":"italic", "font-size":24, fill:"#2b5f7a" }, "Mediterranean"));
    const C = [
      { x:320, y:330, t:"Mediterranean ports", g:"glass, silver" },
      { x:640, y:260, t:"Tabriz (Persia)", g:"carpets, horses" },
      { x:900, y:300, t:"Nishapur (Persia)", g:"pottery, turquoise" },
      { x:1160, y:250, t:"Samarkand", g:"paper, fruit" },
      { x:1640, y:330, t:"Chang'an (China)", g:"silk, porcelain" }
    ];
    const path = s("path", { d:"M" + C.map(c => `${c.x} ${c.y}`).join(" L"), stroke:"#8A5A0A", "stroke-width":10, "stroke-dasharray":"18 12", fill:"none" }); v.appendChild(path);
    C.forEach(c => { v.appendChild(s("circle", { cx:c.x, cy:c.y, r:18, fill:"#B0213B", stroke:"#FBF3E0", "stroke-width":4 })); v.appendChild(s("text", { x:c.x, y:c.y - 30, "text-anchor":"middle", "font-family":"Atkinson Hyperlegible", "font-weight":700, "font-size":24, fill:"#2B1B10" }, c.t)); v.appendChild(s("text", { x:c.x, y:c.y + 50, "text-anchor":"middle", "font-family":"Atkinson Hyperlegible", "font-size":20, fill:"#5a3a1c" }, c.g)); });
    const silk = s("text", { "font-size":54, "text-anchor":"middle" }, "🧵"); const silver = s("text", { "font-size":54, "text-anchor":"middle" }, "🥈"); v.append(silk, silver);
    const at = (el, c, dy) => { el.setAttribute("x", c.x); el.setAttribute("y", c.y + dy); };
    const tip = h("div", { class:"pcard ix-tip", style:{ left:"0", right:"0", top:"610px", minHeight:"60px" } });
    host.appendChild(tip);
    const T = [
      ["Silk travels **west** from China; silver and glass travel **east**. But almost **no one** travelled the whole way!", 4, 0],
      ["At **Samarkand**, the silk changes hands: a new merchant takes it on.", 3, 1],
      ["At **Nishapur** in Persia, it changes hands again.", 2, 2],
      ["At **Tabriz**, one of the great Silk Road bazaars, a Persian merchant buys it…", 1, 3],
      ["…and it finally reaches the **Mediterranean**. Like the Royal Road relay, goods moved **city to city**. And so did **ideas, languages and faith**.", 0, 4]
    ];
    function step(i){ const t = T[i]; at(silk, C[t[1]], -70); at(silver, C[t[2]], 100); setMD(tip, t[0]); if (i) BM.sfx("tok"); }
    host.appendChild(h("div", { class:"ix-chip", style:{ position:"absolute", left:"14px", top:"540px", background:"rgba(0,0,0,.45)" } }, "Simplified route, not to scale"));
    step(0);
    return { steps:4, step };
  };

  /* =======================================================
     28. ICE NURSERY — warmer winters, less ice (Wed W9)
     ======================================================= */
  IX.icenursery = function(host){
    const W = 1100, H = 660;
    const v = svg(W, H, { style:"position:absolute;left:0;top:-10px;width:1100px;height:660px;border-radius:12px;box-shadow:var(--sh-3);background:#4f86a8" });
    host.appendChild(v);
    v.appendChild(s("rect", { x:0, y:0, width:W, height:120, fill:"#cfe6f0" }));
    const ice = s("path", { fill:"#f4fbff", stroke:"#bcd8e6", "stroke-width":4, style:"transition:d .6s" }); v.appendChild(ice);
    const pups = s("g"); v.appendChild(pups);
    const shore = s("path", { d:"M0 560 Q300 520 600 580 T1100 560 V660 H0Z", fill:"#c9a46a" }); v.appendChild(shore);
    const wolf = s("text", { x:880, y:600, "font-size":60, opacity:0, style:"transition:opacity .6s" }, "🐺"); v.appendChild(wolf);
    const lab = s("text", { x:40, y:80, "font-family":"Big Shoulders Display", "font-weight":900, "font-size":40, fill:"#1E3A8A" }); v.appendChild(lab);
    const slider = h("input", { type:"range", min:"0", max:"100", value:"0", style:{ position:"absolute", left:"1130px", width:"600px", top:"30px", accentColor:"#E0566F" }, oninput:() => draw(+slider.value) });
    slider.addEventListener("pointerdown", e => e.stopPropagation());
    host.appendChild(h("div", { style:{ position:"absolute", left:"1130px", top:"-10px", fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"22px", letterSpacing:".1em", color:"#F6D27A" } }, "DRAG: HOW WARM IS THE WINTER?"));
    const info = panel({ left:"1130px", right:"0", top:"90px" }, [h("h4"), h("p")]);
    host.append(slider, info);
    function draw(w){ const k = 1 - w/120; const rx = 480*k, ry = 200*k;
      ice.setAttribute("d", `M${550 - rx} 300 Q${550 - rx*.6} ${300 - ry} 550 ${300 - ry} T${550 + rx} 300 Q${550 + rx*.5} ${300 + ry} 550 ${300 + ry} T${550 - rx} 300Z`);
      BM.clear(pups); const n = Math.round(10*k*k); for (let i=0;i<n;i++) pups.appendChild(s("text", { x:550 + Math.cos(i*2.2)*rx*.55, y:310 + Math.sin(i*2.2)*ry*.5, "font-size":40, "text-anchor":"middle" }, "🦭"));
      lab.textContent = w < 30 ? "Cold winter: plenty of ice" : w < 70 ? "Milder winter: less ice" : "Warm winter: ice melts early";
      wolf.setAttribute("opacity", w >= 60 ? 1 : 0);
      if (w >= 60) for (let i=0;i<3;i++) pups.appendChild(s("text", { x:660 + i*60, y:590, "font-size":34, "text-anchor":"middle" }, "🦭"));
    }
    const T = [
      ["The Caspian seal","It lives **only in the Caspian Sea**, and its pups are born on **sea ice** in the north-east of the sea. It is **Endangered**.", 0],
      ["A shrinking population","Caspian seal numbers have fallen by about **90%** over the past 100 years. **Fishing bycatch** (getting caught in nets) is a major cause.", 20],
      ["Warmer winters","Climate change makes the ice **melt and break up earlier**. Pups lose their safe nursery.", 60],
      ["Pushed ashore","With less ice, more seals end up on **land**, where **wolves** can hunt them more easily.", 85]
    ];
    function step(i){ const t = T[i]; info.querySelector("h4").textContent = t[0]; setMD(info.querySelector("p"), t[1]); slider.value = t[2]; draw(t[2]); if (i) BM.sfx("tok"); }
    step(0);
    return { steps:3, step };
  };

  /* =======================================================
     35b. THE COURIER GAME — events, if/else, a score (Thu W9)
     ======================================================= */
  IX.couriergame = function(host){
    const N = 12, CS = 80, ox = 20, oy = 200;
    const STORM = { 2:1, 5:1, 7:1, 10:1 }, STATION = { 3:1, 6:1, 9:1, 11:1 };
    const v = svg(N*CS + 40, 420, { style:`position:absolute;left:0;top:-10px;width:${N*CS + 40}px;height:420px;border-radius:12px;box-shadow:var(--sh-3);background:#e9d6b0` });
    host.appendChild(v);
    for (let i=0;i<N;i++){ const x = ox + i*CS; v.appendChild(s("rect", { x:x + 2, y:oy, width:CS - 4, height:CS, rx:8, fill: STORM[i] ? "#c9a46a" : "#f4e6c6", stroke:"#c9b48a" })); if (STORM[i]) v.appendChild(s("text", { x:x + CS/2, y:oy + 55, "text-anchor":"middle", "font-size":44 }, "🌪️")); if (STATION[i]) v.appendChild(s("text", { x:x + CS/2, y:oy - 20, "text-anchor":"middle", "font-size":44 }, "🏠")); }
    const courier = s("text", { "text-anchor":"middle", "font-size":56, style:"transition:transform .35s" }, "🏇"); v.appendChild(courier);
    const put = i => courier.setAttribute("transform", `translate(${ox + i*CS + CS/2} ${oy + 58})`);
    const score = s("text", { x:20, y:60, "font-family":"Big Shoulders Display", "font-weight":900, "font-size":44, fill:"#1E3A8A" }); v.appendChild(score);
    const logT = s("text", { x:20, y:110, "font-family":"Atkinson Hyperlegible", "font-weight":700, "font-size":24, fill:"#2B1B10" }); v.appendChild(logT);
    const code = h("pre", { style:{ position:"absolute", left:"1030px", right:"0", top:"-10px", margin:"0", padding:"16px 18px", borderRadius:"12px", background:"#0F1D4A", color:"#cfe0ff", fontSize:"24px", lineHeight:"1.45", whiteSpace:"pre-wrap" } });
    const tip = h("div", { class:"pcard ix-tip", style:{ left:"0", right:"0", top:"440px", minHeight:"70px" } });
    host.append(code, tip);
    const GOOD = "when ➡️ key pressed:\n  move 1 square\n  if touching 🌪️ then\n     wait 2 seconds\n  if touching 🏠 then\n     change score by 1";
    const BUG = "when ➡️ key pressed:\n  move 1 square\n  wait 2 seconds\n  if touching 🏠 then\n     change score by 1";
    let pos = 0, sc = 0, waits = 0, timer, mode = "good";
    function reset(){ clearTimeout(timer); pos = 0; sc = 0; waits = 0; put(0); score.textContent = "Score: 0"; logT.textContent = ""; }
    function press(){ if (pos >= N - 1) return; pos++; put(pos);
      const storm = !!STORM[pos], wait = mode === "good" ? storm : true;
      if (wait){ waits++; logT.textContent = storm ? "🌪️ Sandstorm! Waiting 2 seconds…" : "⏳ Waiting 2 seconds… (but there's no storm here!)"; }
      else logT.textContent = "";
      if (STATION[pos]){ sc++; score.textContent = "Score: " + sc; BM.sfx("ok"); } else BM.sfx("tok"); }
    function auto(){ reset(); const go = () => { press(); if (pos < N - 1) timer = setTimeout(go, BM.motionOK() ? 520 : 0); else logT.textContent = `Finished! Waited ${waits} times.` + (mode === "good" ? " Sandstorms handled: 4." : " Too many waits: a bug!"); }; go(); }
    const T = [
      () => { mode = "good"; reset(); code.textContent = GOOD; setMD(tip, "An **event** starts code (**when ➡️ key pressed**). A **decision** (**if… then**) only runs when something is true. Press ➡️ to move the courier."); },
      () => { mode = "good"; code.textContent = GOOD; setMD(tip, "Watch: the courier **waits only at sandstorms** and **scores** at each station."); auto(); },
      () => { mode = "bug"; code.textContent = BUG; setMD(tip, "A tester reports: **the courier is really slow**. Run the buggy code. What's wrong?"); auto(); },
      () => { mode = "good"; code.textContent = GOOD; setMD(tip, "**Debugged:** the **wait** must be **inside the if**, so it only happens when touching a sandstorm. The storm appears **4 times**, so the code handles it 4 times. Fix the code, not the coder!"); auto(); }
    ];
    function step(i){ T[i](); }
    controls(host, [btn("➡️ Key", () => press(), "on"), btn("Reset", reset)]);
    step(0);
    return { steps:3, step, destroy(){ clearTimeout(timer); } };
  };

  /* =======================================================
     48. NIGHT SKY BLEND — dark to light, star and silhouette (Fri W9)
     ======================================================= */
  IX.nightsky = function(host){
    const W = 1100, H = 660;
    const v = svg(W, H, { style:"position:absolute;left:0;top:-10px;width:1100px;height:660px;border-radius:12px;box-shadow:var(--sh-3)" });
    host.appendChild(v);
    v.appendChild(s("defs", null,
      s("linearGradient", { id:"ns-sky", x1:0, y1:0, x2:0, y2:1 }, s("stop", { offset:0, "stop-color":"#0b0f2e" }), s("stop", { offset:.55, "stop-color":"#2a2f7a" }), s("stop", { offset:.85, "stop-color":"#b0508a" }), s("stop", { offset:1, "stop-color":"#f2a86a" })),
      s("radialGradient", { id:"ns-glow" }, s("stop", { offset:0, "stop-color":"#fff8d0", "stop-opacity":1 }), s("stop", { offset:1, "stop-color":"#fff8d0", "stop-opacity":0 }))));
    const bands = s("g"); const cols = ["#0b0f2e","#16195a","#2a2f7a","#5a3a8a","#b0508a","#f2a86a"];
    cols.forEach((c, i) => bands.appendChild(s("rect", { x:0, y:i*110, width:W, height:110, fill:c }))); v.appendChild(bands);
    const blend = s("rect", { width:W, height:H, fill:"url(#ns-sky)", opacity:0, style:"transition:opacity 1s" }); v.appendChild(blend);
    const stars = s("g", { opacity:0, style:"transition:opacity 1s" }); for (let i=0;i<60;i++) stars.appendChild(s("circle", { cx:(i*173)%W, cy:(i*97)%360, r:1 + (i%3)*.7, fill:"#fff", opacity:.8 })); v.appendChild(stars);
    const star = s("g", { opacity:0, style:"transition:opacity 1s" }); star.appendChild(s("circle", { cx:780, cy:120, r:120, fill:"url(#ns-glow)" })); for (let k=0;k<8;k++){ const a = k*Math.PI/4, L = k % 2 ? 60 : 130; star.appendChild(s("path", { d:`M780 120 L${780 + Math.cos(a)*L} ${120 + Math.sin(a)*L}`, stroke:"#fff8d0", "stroke-width":k % 2 ? 3 : 5 })); } star.appendChild(s("circle", { cx:780, cy:120, r:14, fill:"#fff" })); v.appendChild(star);
    const beam = s("path", { d:"M780 120 L560 520 L700 520Z", fill:"#fff8d0", opacity:0, style:"transition:opacity 1s" }); v.appendChild(beam);
    const sil = s("g", { opacity:0, style:"transition:opacity 1s" }); sil.appendChild(A.dunes(W, H, 9, ["#120d1a","#0a0710","#050308"], { top:470 })); sil.appendChild(A.caravan(120, 430, 1.4, "#050308", 3)); v.appendChild(sil);
    const info = panel({ left:"1130px", right:"0", top:"-10px" }, [h("h4"), h("p")]);
    host.appendChild(info);
    const T = [
      ["1 · Bands of colour","Start with **bands** of colour from **dark** at the top to **light** near the horizon."],
      ["2 · Blend them","**Blend** the edges while the paint is wet, so each colour melts into the next: a smooth **gradient**."],
      ["3 · Add stars and one bright star","Flick or dot **tiny stars**. Then paint **one bright star** with a glow: light the colour around it."],
      ["4 · Silhouettes","Paint the **dunes and the caravan** in solid **black** against the sky: a **silhouette** tells the story without any detail."],
      ["5 · Light that leads","Matthew 2:9: **the star went ahead of them** until it stopped over the place where the child was. Add a soft path of light."]
    ];
    function step(i){ info.querySelector("h4").textContent = T[i][0]; setMD(info.querySelector("p"), T[i][1]); blend.setAttribute("opacity", i >= 1 ? 1 : 0); stars.setAttribute("opacity", i >= 2 ? 1 : 0); star.setAttribute("opacity", i >= 2 ? 1 : 0); sil.setAttribute("opacity", i >= 3 ? 1 : 0); beam.setAttribute("opacity", i >= 4 ? .25 : 0); if (i) BM.sfx("tok"); }
    step(0);
    return { steps:4, step };
  };
})(window.BM);
