/* ==========================================================
   INTERACTIVES — Week 3 · The Royal Road
   empire · behistun · relay · foodweb · airflow · relief
   ========================================================== */
(function(BM){
  "use strict";
  const h = BM.h, s = BM.s, svg = BM.svg, A = BM.art, M = BM.map, IX = BM.IX;
  const { btn, controls, panel, setMD } = IX._h;

  /* =======================================================
     5. RUN THE EMPIRE — satrapies, taxes, the road (Mon W3)
     ======================================================= */
  IX.empire = function(host){
    const map = M.persia({ theme:"paper", labels:false, ranges:false, deserts:false, cities:["sardis","babylon","susa","persepolis","ecbatana"], road:true });
    map.setAttribute("style", "position:absolute;left:0;top:-10px;width:1100px;height:auto;border-radius:12px;box-shadow:var(--sh-3)");
    host.appendChild(map);
    const road = map.roadPath; const roadLen = road.getTotalLength ? road.getTotalLength() : 2000;
    road.style.strokeDasharray = roadLen; road.style.strokeDashoffset = roadLen; road.style.transition = "stroke-dashoffset 2.6s ease-in-out";
    const P = (lon, lat) => M.proj(lon, lat);
    const SAT = [["Lydia",28.6,38.6],["Cappadocia",35.2,39.1],["Armenia",43.2,39.6],["Egypt",30.8,27.2],["Babylonia",44.2,32.6],["Media",48.8,35.4],["Elam",48.6,31.2],["Pars",53.2,29.4],["Parthia",57.4,36.6],["Aria",61.8,34.2],["Arabia",38.5,29.5],["Carmania",57.5,28.5]];
    const COLS = ["#C2593A","#1E3A8A","#0B7A55","#B9770A","#7A3E9D","#0F7F74"];
    const satG = s("g", { opacity:0, style:"transition:opacity .8s" }), crowns = s("g", { opacity:0, style:"transition:opacity .8s" }), coins = s("g");
    SAT.forEach(([n, lon, lat], i) => { const [x, y] = P(lon, lat);
      satG.appendChild(s("circle", { cx:x, cy:y, r:86, fill:COLS[i % COLS.length], opacity:.22, stroke:COLS[i % COLS.length], "stroke-width":3, "stroke-dasharray":"8 6" }));
      satG.appendChild(s("text", { x, y:y + 36, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":26, "letter-spacing":"2", fill:"#2B1B10", stroke:"#EAD6AE", "stroke-width":5, "paint-order":"stroke" }, n.toUpperCase()));
      crowns.appendChild(s("text", { x, y:y - 6, "text-anchor":"middle", "font-size":40 }, "👤"));
    });
    map.append(satG, crowns, coins);
    const [sx, sy] = P(48.25, 32.19);
    const head = h("div", { style:{ position:"absolute", left:"1130px", right:"0", top:"-10px", fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"30px", letterSpacing:".1em", color:"#F6D27A" } });
    const info = panel({ left:"1130px", right:"0", top:"60px", bottom:"0" }, [h("h4"), h("p")]);
    host.append(head, info);
    let tmr = [];
    function flyCoins(){
      BM.clear(coins); tmr.forEach(clearTimeout); tmr = [];
      SAT.forEach(([n, lon, lat], i) => { const [x, y] = P(lon, lat); if (n === "Pars") return;
        const c = s("g"); c.appendChild(s("circle", { r:18, fill:"#F6D27A", stroke:"#8A5A0A", "stroke-width":3 })); c.appendChild(s("text", { y:7, "text-anchor":"middle", "font-size":20, "font-weight":900, fill:"#8A5A0A" }, "D"));
        c.setAttribute("transform", `translate(${x} ${y})`); coins.appendChild(c);
        if (BM.motionOK()) tmr.push(setTimeout(() => BM.anim(c, [{ transform:`translate(${x}px, ${y}px)` }, { transform:`translate(${sx}px, ${sy}px)` }], { duration:1400, easing:"cubic-bezier(.5,0,.3,1)", fill:"forwards" }), i*140));
        else c.setAttribute("transform", `translate(${sx} ${sy})`);
      });
      BM.sfx("ok");
    }
    const T = [
      ["The problem","One king, a huge empire","The empire stretched from **Egypt and Lydia** in the west to **India** in the east: millions of people, dozens of languages. **How could one king run it all?**"],
      ["Step 1 · Divide","Provinces called satrapies","Darius divided the empire into **20 provinces called satrapies** (Britannica). This map shows some of them."],
      ["Step 2 · Appoint","A satrap for each","Each satrapy was run by a **satrap**: a governor chosen by the king, usually from the royal family or the Persian nobles. Darius set up **checks** on the satraps so they couldn't misuse their power."],
      ["Step 3 · Tax","Every satrapy paid tribute","Each satrapy sent a **yearly tax (tribute)** to the king. Darius brought in a gold coin, the **daric**, used across the empire."],
      ["Step 4 · Connect","Build the Royal Road","Roads joined the empire together. The **Royal Road** ran about **2,500 km** from **Sardis** to **Susa**, with stations for messengers to change horses."]
    ];
    function step(i){
      head.textContent = T[i][0].toUpperCase(); info.querySelector("h4").textContent = T[i][1]; setMD(info.querySelector("p"), T[i][2]);
      satG.setAttribute("opacity", i >= 1 ? 1 : 0); crowns.setAttribute("opacity", i >= 2 ? 1 : 0);
      if (i === 3) flyCoins(); else if (i < 3){ BM.clear(coins); }
      road.style.strokeDashoffset = i >= 4 ? 0 : roadLen;
      if (i) BM.sfx("paper");
    }
    step(0);
    return { steps:4, step, destroy(){ tmr.forEach(clearTimeout); } };
  };

  /* =======================================================
     6. THE BEHISTUN CLIFF — one message, three languages (Mon W3)
     ======================================================= */
  IX.behistun = function(host){
    const W = 1100, H = 680;
    const v = svg(W, H, { style:"position:absolute;left:0;top:-10px;width:1100px;height:680px;border-radius:12px;box-shadow:var(--sh-3);background:linear-gradient(#9ec3d6,#e7d3ad 70%)" });
    host.appendChild(v);
    v.appendChild(s("path", { d:"M180 680 L240 420 L300 260 L380 120 L470 40 L620 20 L760 60 L880 180 L960 380 L1040 680Z", fill:"#9a7b5c" }));
    v.appendChild(s("path", { d:"M180 680 L240 420 L300 260 L380 120 L470 40 L620 20 L760 60 L880 180 L960 380 L1040 680Z", fill:"url(#p-dots)", opacity:.2 }));
    v.appendChild(s("path", { d:"M0 640 Q300 600 560 630 T1100 620 L1100 680 L0 680Z", fill:"#b9a070" }));
    v.appendChild(s("text", { x:24, y:668, "font-family":"Big Shoulders Display", "font-weight":900, "font-size":22, "letter-spacing":"3", fill:"#2B1B10" }, "THE ROAD: BABYLON ↔ ECBATANA"));
    // the carved panel
    const panelG = s("g", { transform:"translate(470 160)" }); v.appendChild(panelG);
    panelG.appendChild(s("rect", { x:0, y:0, width:300, height:200, rx:6, fill:"#c9ab86", stroke:"#6b4f33", "stroke-width":3 }));
    // relief strip: figures
    for (let i=0;i<9;i++) panelG.appendChild(s("path", { d:`M${40 + i*26} 70 v-26 a8 8 0 1 1 0 -1`, stroke:"#6b4f33", "stroke-width":6, fill:"none" }));
    panelG.appendChild(s("path", { d:"M140 18 l20 -8 l20 8 l-20 6z", fill:"#6b4f33" }));
    const cols = [{ x:10, t:"Old Persian", c:"#1E3A8A" }, { x:108, t:"Elamite", c:"#C2593A" }, { x:206, t:"Babylonian", c:"#0B7A55" }].map(cc => {
      const g = s("g"); const r = s("rect", { x:cc.x, y:84, width:86, height:108, fill:cc.c, opacity:0, style:"transition:opacity .5s" }); g.appendChild(r);
      for (let row=0; row<7; row++) for (let k=0;k<5;k++) g.appendChild(s("path", { d:`M${cc.x + 8 + k*16} ${92 + row*14} l8 3 l-8 3z`, fill:"#4a3420" }));
      panelG.appendChild(g); return { r, cc };
    });
    // scale: a person at the bottom, the panel ~100 m up
    const scale = s("g", { opacity:0, style:"transition:opacity .6s" }); v.appendChild(scale);
    scale.appendChild(s("path", { d:"M440 360 V620", stroke:"#F6D27A", "stroke-width":5, "stroke-dasharray":"10 8" }));
    scale.appendChild(s("text", { x:430, y:500, "text-anchor":"end", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":44, fill:"#2B1B10", stroke:"#e7d3ad", "stroke-width":6, "paint-order":"stroke" }, "≈ 100 m"));
    scale.appendChild(s("circle", { cx:470, cy:604, r:5, fill:"#2B1B10" })); scale.appendChild(s("path", { d:"M470 609 v18 m0 -12 l-7 8 m7 -8 l7 8 m-7 4 l-6 10 m6 -10 l6 10", stroke:"#2B1B10", "stroke-width":3 }));
    // Rawlinson on ropes
    const raw = s("g", { opacity:0, style:"transition:opacity .6s" }); v.appendChild(raw);
    raw.appendChild(s("path", { d:"M800 40 L760 300", stroke:"#5a3a1c", "stroke-width":3 }));
    raw.appendChild(s("circle", { cx:758, cy:306, r:9, fill:"#2B1B10" })); raw.appendChild(s("path", { d:"M758 315 v28 m0 -18 l-12 -10 m12 10 l14 -6 m-14 24 l-8 16 m8 -16 l10 14", stroke:"#2B1B10", "stroke-width":5, "stroke-linecap":"round" }));
    raw.appendChild(s("text", { x:745, y:420, "text-anchor":"end", "font-family":"Atkinson Hyperlegible", "font-weight":700, "font-size":24, fill:"#2B1B10", stroke:"#e7d3ad", "stroke-width":5, "paint-order":"stroke" }, "Henry Rawlinson, 1835 & 1843"));
    host.appendChild(h("div", { class:"ix-chip", style:{ position:"absolute", left:"14px", top:"6px", background:"rgba(0,0,0,.45)" } }, "Simplified drawing, not to scale"));
    const info = panel({ left:"1130px", right:"0", top:"-10px", bottom:"0" }, [h("h4"), h("p")]);
    host.appendChild(info);
    const T = [
      ["A message on a cliff","Darius I had a huge message carved into the cliff at **Behistun** (Bisitun), above the road between **Babylon** and **Ecbatana**. It tells how he became king."],
      ["About 100 m up","The carving is about **100 m above the ground**: as high as a 30-storey building! Everyone travelling the road could see it… but nobody could reach it to damage it."],
      ["One message, three languages","The same message is carved in **three languages**: **Old Persian**, **Elamite** and **Babylonian**. Why? So the different peoples of the empire could read it."],
      ["The key to cuneiform","**Henry Rawlinson** climbed the cliff and copied the writing in **1835** and **1843**. Because the message was the same in three languages, scholars could work out cuneiform, like the **Rosetta Stone** for Egyptian hieroglyphs."]
    ];
    function step(i){
      info.querySelector("h4").textContent = T[i][0]; setMD(info.querySelector("p"), T[i][1]);
      scale.setAttribute("opacity", i === 1 ? 1 : 0);
      cols.forEach(c => c.r.setAttribute("opacity", i >= 2 ? .45 : 0));
      raw.setAttribute("opacity", i >= 3 ? 1 : 0);
      if (i) BM.sfx("stone");
    }
    step(0);
    const legend = h("div", { style:{ position:"absolute", left:"14px", top:"600px", display:"flex", gap:"10px" } }, cols.map(c => h("span", { class:"ix-chip", style:{ background:c.cc.c, color:"#fff" } }, c.cc.t)));
    host.appendChild(legend);
    return { steps:3, step };
  };

  /* =======================================================
     13. ROYAL ROAD RELAY — one traveller vs a relay of riders (Tue W3)
     ======================================================= */
  IX.relay = function(host){
    const map = M.persia({ theme:"paper", labels:true, ranges:false, deserts:false, cities:["sardis","susa","babylon","nineveh"], road:true });
    map.setAttribute("style", "position:absolute;left:0;top:-10px;width:1100px;height:auto;border-radius:12px;box-shadow:var(--sh-3)");
    host.appendChild(map);
    const road = map.roadPath, L = road.getTotalLength();
    // 111 stations
    const st = s("g", { opacity:0, style:"transition:opacity .8s" }); map.appendChild(st);
    for (let i=0;i<111;i++){ const p = road.getPointAtLength(L*i/110); st.appendChild(s("circle", { cx:p.x, cy:p.y, r:5, fill:"#8A5A0A", stroke:"#FBF3E0", "stroke-width":2 })); }
    const trav = s("text", { "font-size":40, "text-anchor":"middle" }, "🚶"); const rider = s("text", { "font-size":44, "text-anchor":"middle" }, "🏇");
    map.append(trav, rider);
    const put = (el, f, dy) => { const p = road.getPointAtLength(L*f); el.setAttribute("x", p.x); el.setAttribute("y", p.y + (dy || 0)); };
    put(trav, 0, -12); put(rider, 0, 36); rider.setAttribute("opacity", 0);
    const big = h("div", { style:{ position:"absolute", left:"1130px", right:"0", top:"-10px", fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"40px", color:"#F6D27A", lineHeight:"1.05" } });
    const info = panel({ left:"1130px", right:"0", top:"110px", bottom:"0" }, [h("h4"), h("p")]);
    host.append(big, info);
    let raf;
    function run(who){
      cancelAnimationFrame(raf); const dur = BM.motionOK() ? (who === "t" ? 9000 : 2600) : 1, t0 = performance.now();
      const el = who === "t" ? trav : rider; el.setAttribute("opacity", 1);
      const tick = now => { const f = Math.min(1, (now - t0)/dur); put(el, f, who === "t" ? -12 : 36);
        if (who === "t") big.textContent = `Traveller · day ${Math.round(f*90)} of about 90`;
        else { const n = Math.min(111, 1 + Math.floor(f*110)); big.textContent = `Relay · station ${n} of 111`; if (n % 10 === 0) rider.textContent = n % 20 ? "🏇" : "🐎"; }
        if (f < 1) raf = requestAnimationFrame(tick); else { if (who === "r") big.textContent = "Relay · arrived in days, not months!"; BM.sfx("chime"); } };
      raf = requestAnimationFrame(tick);
    }
    const T = [
      ["Sardis → Susa","The Greek writer **Herodotus** described the **Royal Road** from **Sardis** to **Susa**: about **2,500 km** long."],
      ["111 stations","Along the road were **111 stations**: places to rest, eat and **change horses**."],
      ["One traveller: about 90 days","An ordinary traveller, walking with a caravan, took about **90 days**: three months!"],
      ["The relay riders","Royal messages went by **relay**: one rider and horse for each day's stage. At each station a **fresh rider and horse** took the message on, so it never stopped. A message arrived in **days instead of months**."],
      ["“Neither snow nor rain…”","Herodotus praised the couriers: nothing stopped them, **“neither snow nor rain nor heat nor darkness of night.”**"]
    ];
    function step(i){
      info.querySelector("h4").textContent = T[i][0]; setMD(info.querySelector("p"), T[i][1]);
      st.setAttribute("opacity", i >= 1 ? 1 : 0);
      if (i === 0){ cancelAnimationFrame(raf); put(trav, 0, -12); rider.setAttribute("opacity", 0); big.textContent = "About 2,500 km"; }
      if (i === 1){ cancelAnimationFrame(raf); big.textContent = "111 stations"; }
      if (i === 2) run("t");
      if (i === 3) run("r");
      if (i === 4){ cancelAnimationFrame(raf); put(trav, 1, -12); put(rider, 1, 36); rider.setAttribute("opacity", 1); big.textContent = "Neither snow nor rain…"; }
    }
    step(0);
    controls(host, [btn("🚶 Traveller", () => run("t")), btn("🏇 Relay", () => run("r"), "on")]);
    return { steps:4, step, destroy(){ cancelAnimationFrame(raf); } };
  };

  /* =======================================================
     22. FOOD WEB WEAVER — the Persian leopard's web (Wed W3)
     ======================================================= */
  IX.foodweb = function(host){
    const W = 1100, H = 680;
    const v = svg(W, H, { style:"position:absolute;left:0;top:-10px;width:1100px;height:680px;border-radius:12px;box-shadow:var(--sh-3);background:linear-gradient(#e9dcc0,#d8c39a)" });
    host.appendChild(v);
    const N = {
      leopard:{ x:550, y:90, icon:"🐆", t:"Persian leopard", c:"#B0213B" },
      goat:{ x:150, y:330, icon:"🐐", t:"Wild goat", c:"#8A5A0A" }, sheep:{ x:410, y:330, icon:"🐑", t:"Wild sheep", c:"#8A5A0A" },
      boar:{ x:690, y:330, icon:"🐗", t:"Wild boar", c:"#8A5A0A" }, porc:{ x:950, y:330, icon:"🦔", t:"Porcupine", c:"#8A5A0A" },
      grass:{ x:280, y:580, icon:"🌾", t:"Grasses & shrubs", c:"#0B7A55" }, oak:{ x:820, y:580, icon:"🌳", t:"Oak (acorns) & roots", c:"#0B7A55" }
    };
    const LINKS = [["grass","goat"],["grass","sheep"],["oak","goat"],["oak","boar"],["oak","porc"],["grass","boar"],["goat","leopard"],["sheep","leopard"],["boar","leopard"],["porc","leopard"]];
    v.appendChild(s("defs", null, s("marker", { id:"fw-arrow", viewBox:"0 0 10 10", refX:8, refY:5, markerWidth:4, markerHeight:4, orient:"auto" }, s("path", { d:"M0 0 L10 5 L0 10z", fill:"#2B1B10" }))));
    const lines = LINKS.map(([a, b]) => { const A1 = N[a], B1 = N[b], dx = B1.x - A1.x, dy = B1.y - A1.y, l = Math.hypot(dx, dy), ux = dx/l, uy = dy/l;
      const p = s("path", { d:`M${A1.x + ux*62} ${A1.y + uy*62} L${B1.x - ux*66} ${B1.y - uy*66}`, stroke:"#2B1B10", "stroke-width":5, "marker-end":"url(#fw-arrow)", opacity:0, style:"transition:opacity .5s, stroke .5s" });
      v.appendChild(p); return { a, b, p }; });
    Object.entries(N).forEach(([k, n]) => { const g = s("g", { transform:`translate(${n.x} ${n.y})`, style:"transition:opacity .6s" });
      const inner = s("g"); inner.appendChild(s("circle", { r:60, fill:"#FBF3E0", stroke:n.c, "stroke-width":6 })); inner.appendChild(s("text", { y:20, "text-anchor":"middle", "font-size":60 }, n.icon));
      inner.appendChild(s("text", { y:92, "text-anchor":"middle", "font-family":"Atkinson Hyperlegible", "font-weight":700, "font-size":24, fill:"#2B1B10", stroke:"#e9dcc0", "stroke-width":5, "paint-order":"stroke" }, n.t));
      g.appendChild(inner); v.appendChild(g); n.g = g; n.inner = inner; });
    const cross = s("path", { d:`M${N.goat.x - 60} ${N.goat.y - 60} l120 120 M${N.goat.x + 60} ${N.goat.y - 60} l-120 120`, stroke:"#B0213B", "stroke-width":12, "stroke-linecap":"round", opacity:0, style:"transition:opacity .4s" }); v.appendChild(cross);
    const info = panel({ left:"1130px", right:"0", top:"-10px", bottom:"0" }, [h("h4"), h("p")]);
    host.appendChild(info);
    let removed = false;
    function setRemoved(on){ removed = on; N.goat.g.style.opacity = on ? ".25" : "1"; cross.setAttribute("opacity", on ? 1 : 0);
      lines.forEach(l => { const gone = on && (l.a === "goat" || l.b === "goat"); l.p.setAttribute("stroke", gone ? "#B0213B" : "#2B1B10"); l.p.setAttribute("stroke-dasharray", gone ? "8 10" : "none"); });
      N.leopard.inner.style.animation = on && BM.motionOK() ? "wobble 1.2s ease-in-out infinite" : "none"; N.leopard.inner.style.transformBox = "fill-box"; N.leopard.inner.style.transformOrigin = "center"; }
    const T = [
      ["A food web","A **food web** joins many food chains together. It shows **who eats whom** in a community. The arrows mean **“is eaten by”**."],
      ["Plants first","**Producers** (grasses, shrubs, oak trees and their acorns) feed the plant-eaters: wild goat, wild sheep, wild boar and porcupine."],
      ["The top predator","The **Persian leopard** hunts **four staple prey**: **wild goat, wild sheep, wild boar** and **Indian crested porcupine**."],
      ["What if the wild goats disappear?","Scientists found that **wild-goat numbers** were the **main thing linked to leopards being present**. Lose the goats and the whole web wobbles: leopards go hungry, other prey are hunted harder, and plants may grow back thicker."],
      ["Threats to the web","Leopards face **habitat loss**, **poaching** (sometimes with **poisoned bait**) and **livestock grazing**. About **70%** of recorded leopard deaths in 2007–2011 were **deliberate killing or poisoning** (IUCN report)."]
    ];
    function step(i){
      info.querySelector("h4").textContent = T[i][0]; setMD(info.querySelector("p"), T[i][1]);
      lines.forEach(l => { const herbLink = l.b !== "leopard"; l.p.setAttribute("opacity", (herbLink && i >= 1) || (!herbLink && i >= 2) ? 1 : 0); });
      setRemoved(i === 3);
      if (i) BM.sfx(i === 3 ? "no" : "tok");
    }
    step(0);
    controls(host, [btn("Remove / restore the wild goat", () => setRemoved(!removed), "on")]);
    return { steps:4, step };
  };

  /* =======================================================
     32. AIRFLOW SIMULATOR — how a windcatcher moves air (Thu W3)
     ======================================================= */
  IX.airflow = function(host){
    const W = 1100, H = 680;
    const v = svg(W, H, { style:"position:absolute;left:0;top:-10px;width:1100px;height:680px;border-radius:12px;box-shadow:var(--sh-3);background:linear-gradient(#bfe0ef,#f3e3c3 75%)" });
    host.appendChild(v);
    v.appendChild(s("rect", { x:0, y:610, width:W, height:70, fill:"#c9a46a" }));
    // house
    v.appendChild(s("rect", { x:300, y:330, width:560, height:280, fill:"#e2c294", stroke:"#8a6a42", "stroke-width":6 }));
    const heat = s("rect", { x:306, y:336, width:548, height:268, fill:"#E0566F", opacity:.35, style:"transition:opacity 1s" }); v.appendChild(heat);
    // tower
    v.appendChild(s("rect", { x:360, y:90, width:130, height:246, fill:"#e2c294", stroke:"#8a6a42", "stroke-width":6 }));
    v.appendChild(s("rect", { x:380, y:110, width:90, height:20, fill:"#8a6a42" }));
    const vents = s("g"); v.appendChild(vents);
    // window (outlet) on the far wall
    v.appendChild(s("rect", { x:790, y:380, width:50, height:90, fill:"#5a7f95", stroke:"#8a6a42", "stroke-width":4 }));
    // people
    v.appendChild(s("text", { x:560, y:590, "font-size":64 }, "🧑‍🤝‍🧑"));
    const thermo = s("text", { x:560, y:420, "font-family":"Big Shoulders Display", "font-weight":900, "font-size":56, fill:"#B0213B" }, "40 °C"); v.appendChild(thermo);
    // arrows
    const mk = (d, col, w) => s("path", { d, fill:"none", stroke:col, "stroke-width":w || 12, "stroke-linecap":"round", "stroke-dasharray":"30 22", opacity:0, style:"animation:flow 1.2s linear infinite;transition:opacity .6s" });
    const wind = s("g"); v.appendChild(wind);
    const down = mk("M425 140 V560", "#1E7FB0"); const across = mk("M440 560 H760 Q800 560 815 470", "#1E7FB0");
    const up = mk("M700 380 Q720 300 820 260 T1000 200", "#E0566F", 10);
    v.append(down, across, up);
    v.appendChild(s("defs", null, s("marker", { id:"af-arrow", viewBox:"0 0 10 10", refX:5, refY:5, markerWidth:3, markerHeight:3, orient:"auto" }, s("path", { d:"M0 0 L10 5 L0 10z", fill:"#1E7FB0" }))));
    let openings = 1;
    function drawWind(){
      BM.clear(wind); BM.clear(vents);
      const sides = openings === 1 ? ["w"] : openings === 2 ? ["w","e"] : ["w","e","n","s"];
      sides.forEach((sd, k) => { if (sd === "w" || sd === "e") vents.appendChild(s("rect", { x: sd === "w" ? 356 : 484, y:140, width:10, height:70, fill:"#3a2614" })); else vents.appendChild(s("rect", { x:395 + (sd === "n" ? 0 : 40), y:140, width:20, height:70, fill:"#5a3a1c", opacity:.7 })); });
      const n = openings === 4 ? 3 : openings === 2 ? 2 : 1;
      for (let i=0;i<n;i++){ const y = 150 + i*24; wind.appendChild(s("path", { d: i === 1 && openings >= 2 ? `M600 ${y} H500` : `M40 ${y} H340`, stroke:"#1E7FB0", "stroke-width":10, fill:"none", "stroke-linecap":"round", "marker-end":"url(#af-arrow)", "stroke-dasharray":"30 22", style:"animation:flow 1.2s linear infinite" })); }
    }
    const info = panel({ left:"1130px", right:"0", top:"70px", bottom:"0" }, [h("h4"), h("p")]);
    const lab = h("div", { style:{ position:"absolute", left:"1130px", right:"0", top:"-10px", display:"flex", gap:"10px", alignItems:"center", fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"22px", color:"#F6D27A", letterSpacing:".1em" } }, "OPENINGS:",
      ...[1,2,4].map(n => { const b = btn(String(n), () => { openings = n; drawWind(); [...lab.querySelectorAll("button")].forEach(x => x.classList.toggle("on", x.textContent === String(n))); }); if (n === 1) b.classList.add("on"); return b; }));
    host.append(lab, info);
    const T = [
      ["A hot house","Summer in the desert: **40 °C** outside, and the house is baking. No electricity, no fans, no air-con. What can we do?"],
      ["Catch the breeze","A **windcatcher** is a tall tower with openings at the top. High up, the breeze is stronger. The tower **catches it**."],
      ["Down and across","The tower sends the moving air **down into the house** and across the rooms. **Moving air cools us** as it passes over our skin."],
      ["Out goes the hot air","**Hot air rises**. The fresh air pushes warm air **out** through windows and slots, so the house keeps changing its air. Yazd has about **700** windcatchers!"]
    ];
    function step(i){
      info.querySelector("h4").textContent = T[i][0]; setMD(info.querySelector("p"), T[i][1]);
      wind.setAttribute("opacity", i >= 1 ? 1 : 0); down.setAttribute("opacity", i >= 2 ? 1 : 0); across.setAttribute("opacity", i >= 2 ? 1 : 0); up.setAttribute("opacity", i >= 3 ? 1 : 0);
      heat.setAttribute("opacity", i >= 3 ? .08 : i >= 2 ? .2 : .35); thermo.textContent = i >= 3 ? "Cooler!" : "40 °C"; thermo.setAttribute("fill", i >= 3 ? "#1E7FB0" : "#B0213B");
      if (i) BM.sfx("zap");
    }
    drawWind(); step(0);
    host.appendChild(h("div", { class:"ix-chip", style:{ position:"absolute", left:"14px", top:"620px", background:"rgba(0,0,0,.45)" } }, "Simplified diagram · real windcatchers vary"));
    return { steps:3, step };
  };

  /* =======================================================
     42. RELIEF LAYERS — a flat drawing becomes low relief (Fri W3)
     ======================================================= */
  IX.relief = function(host){
    const W = 1100, H = 680;
    const v = svg(W, H, { style:"position:absolute;left:0;top:-10px;width:1100px;height:680px;border-radius:12px;box-shadow:var(--sh-3);background:#d9c7a6" });
    host.appendChild(v);
    v.appendChild(s("defs", null,
      s("filter", { id:"rl-1", x:"-20%", y:"-20%", width:"140%", height:"140%" }, s("feDropShadow", { dx:4, dy:4, stdDeviation:2, "flood-color":"#3a2614", "flood-opacity":.55 })),
      s("filter", { id:"rl-2", x:"-20%", y:"-20%", width:"140%", height:"140%" }, s("feDropShadow", { dx:9, dy:9, stdDeviation:3, "flood-color":"#3a2614", "flood-opacity":.6 })),
      s("filter", { id:"rl-3", x:"-20%", y:"-20%", width:"140%", height:"140%" }, s("feDropShadow", { dx:14, dy:14, stdDeviation:4, "flood-color":"#3a2614", "flood-opacity":.6 }))));
    const stone = s("rect", { x:40, y:40, width:1020, height:600, rx:10, fill:"#cdb68e" }); v.appendChild(stone);
    v.appendChild(s("rect", { x:40, y:40, width:1020, height:600, rx:10, fill:"url(#p-dots)", opacity:.2 }));
    // one gift-bearer leading a camel, walking right (profile)
    const L1 = s("g"), L2 = s("g"), L3 = s("g");
    const camel = A.camel(560, 250, 2.9, "#c4a77c"); L1.appendChild(camel);
    // figure
    L2.appendChild(s("path", { d:"M300 250 h70 l30 340 h-130z", fill:"#c9ae84" }));                 // robe
    L2.appendChild(s("circle", { cx:340, cy:210, r:38, fill:"#c9ae84" }));                           // head
    L2.appendChild(s("path", { d:"M302 190 q38 -60 76 0 v-26 q-38 -36 -76 0z", fill:"#b89c70" }));    // hat
    L2.appendChild(s("path", { d:"M370 290 q70 10 130 -10", stroke:"#c9ae84", "stroke-width":30, fill:"none", "stroke-linecap":"round" })); // arm reaching to the camel
    L3.appendChild(s("path", { d:"M360 222 q24 30 6 66 q-18 -18 -26 -40z", fill:"#a98c60" }));       // beard
    L3.appendChild(s("path", { d:"M240 330 q50 -20 70 10 q-35 35 -70 -10z", fill:"#d8c08f", stroke:"#8a6a42", "stroke-width":3 })); // bowl (gift)
    for (let i=0;i<7;i++) L3.appendChild(s("path", { d:`M${290 + i*14} 320 q8 140 -6 260`, stroke:"#a98c60", "stroke-width":3, fill:"none" })); // robe folds
    L3.appendChild(s("circle", { cx:350, cy:206, r:4, fill:"#5a3a1c" }));
    // outline-only version (flat drawing)
    const outline = s("g", { fill:"none", stroke:"#3a2614", "stroke-width":4 });
    [L1, L2, L3].forEach(g => { const c = g.cloneNode(true); c.querySelectorAll("*").forEach(e => { e.setAttribute("fill", "none"); e.setAttribute("stroke", "#3a2614"); if (!e.getAttribute("stroke-width") || +e.getAttribute("stroke-width") > 6) e.setAttribute("stroke-width", 4); }); outline.appendChild(c); });
    v.append(L1, L2, L3, outline);
    const light = s("rect", { x:40, y:40, width:1020, height:600, rx:10, fill:"url(#rl-light)", opacity:0, style:"pointer-events:none;transition:opacity .8s" });
    v.querySelector("defs").appendChild(s("linearGradient", { id:"rl-light", x1:0, y1:0, x2:1, y2:1 }, s("stop", { offset:0, "stop-color":"#fff6dc", "stop-opacity":.45 }), s("stop", { offset:1, "stop-color":"#000", "stop-opacity":.25 })));
    v.appendChild(light);
    // side view (cross-section) of the layers
    const side = h("div", { class:"pcard", style:{ position:"absolute", left:"1130px", right:"0", top:"440px", height:"240px", padding:"12px 16px" } });
    const sv = svg(600, 160, { style:"width:100%;height:160px" });
    const bars = [["Stone (background)","#cdb68e",0],["Layer 1 · far away","#c4a77c",1],["Layer 2 · the person","#c9ae84",2],["Layer 3 · details","#a98c60",3]].map(([t, c, k]) => {
      const g = s("g", { opacity:0, style:"transition:opacity .5s" }); g.appendChild(s("rect", { x:20 + k*24, y:20 + k*30, width:560 - k*48, height:26, rx:4, fill:c, stroke:"#3a2614", "stroke-width":2 })); g.appendChild(s("text", { x:30 + k*24, y:39 + k*30, "font-family":"Atkinson Hyperlegible", "font-size":17, "font-weight":700, fill:"#2B1B10" }, t)); sv.appendChild(g); return g; });
    sv.setAttribute("viewBox", "0 0 600 160"); sv.setAttribute("transform", "scale(1,-1)"); [...sv.querySelectorAll("text")].forEach(t => t.setAttribute("transform", `scale(1,-1) translate(0 ${-2*(+t.getAttribute("y")) + 8})`));
    side.append(h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", letterSpacing:".12em", fontSize:"18px", color:"#8A5A0A" } }, "SIDE VIEW · HOW THE LAYERS STACK"), sv);
    const info = panel({ left:"1130px", right:"0", top:"-10px", height:"430px" }, [h("h4"), h("p")]);
    host.append(info, side);
    const T = [
      ["1 · A flat drawing","Start with a **drawing in profile** (from the side): a gift-bearer leading a camel, just like the nations on the **Apadana** stairs at Persepolis."],
      ["2 · The far layer","In a **low relief**, things further away are raised **only a little** from the background. The camel is behind, so it's the lowest layer."],
      ["3 · The near layer","Things closer to us stand **higher**. The person is in front, so they're the next layer up."],
      ["4 · Details on top","Beard, bowl and the **folds of the robe** sit on the very top. Each layer casts a **shadow**: that's what makes it look carved."],
      ["5 · Light it from the side","Carvers knew the sun would shine **across** the wall. Light from one side makes the edges glow and the shadows deepen: the figures seem to **step out of the stone**."]
    ];
    function step(i){
      info.querySelector("h4").textContent = T[i][0]; setMD(info.querySelector("p"), T[i][1]);
      L1.setAttribute("opacity", i >= 1 ? 1 : 0); L2.setAttribute("opacity", i >= 2 ? 1 : 0); L3.setAttribute("opacity", i >= 3 ? 1 : 0);
      L1.setAttribute("filter", i >= 1 ? "url(#rl-1)" : ""); L2.setAttribute("filter", i >= 2 ? "url(#rl-2)" : ""); L3.setAttribute("filter", i >= 3 ? "url(#rl-3)" : "");
      outline.setAttribute("opacity", i === 0 ? 1 : i === 1 ? .5 : 0);
      light.setAttribute("opacity", i >= 4 ? 1 : 0);
      bars.forEach((b, k) => b.setAttribute("opacity", k <= Math.min(i, 3) ? 1 : 0));
      if (i) BM.sfx("stone");
    }
    step(0);
    return { steps:4, step };
  };
})(window.BM);
