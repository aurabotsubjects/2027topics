/* ==========================================================
   INTERACTIVES — Week 8 · Fire on the Mountain
   whyburn · shaketable · cheetahsave · binarylamps · miniaturezoom
   ========================================================== */
(function(BM){
  "use strict";
  const h = BM.h, s = BM.s, svg = BM.svg, A = BM.art, IX = BM.IX;
  const { btn, controls, panel, setMD } = IX._h;

  /* =======================================================
     9b. WHY DID IT BURN? — weigh three explanations (Mon W8)
     ======================================================= */
  IX.whyburn = function(host){
    const R = [
      { k:"rev", icon:"⚔️", t:"Revenge", d:"Payback for the Persians burning **Athens** under Xerxes, 150 years earlier.", src:"Some ancient writers" },
      { k:"feast", icon:"🍷", t:"A drunken feast", d:"At a wild party, a guest urged Alexander to set the palace alight, and he did.", src:"Other ancient writers" },
      { k:"host", icon:"🛡️", t:"A message to Persia", d:"To show the Persians their old empire was finished, and Alexander was in charge.", src:"Some historians" },
      { k:"unk", icon:"❓", t:"We may never know", d:"The writer **Arrian** admits the true motive may **never be known**.", src:"Arrian" }
    ];
    const votes = {};
    const cards = R.map((r, i) => {
      const bar = h("div", { style:{ height:"18px", borderRadius:"9px", background:"rgba(0,0,0,.12)", overflow:"hidden", marginTop:"10px" } }, h("div", { style:{ height:"100%", width:"0%", background:"#B0213B", transition:"width .4s" } }));
      const cnt = h("span", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"22px" } }, "0");
      const c = h("div", { class:"pcard hov", style:{ position:"absolute", left:(i*440)+"px", top:"-10px", width:"420px", height:"430px", padding:"18px 20px", cursor:"pointer", opacity:"0", transform:"translateY(20px)", transition:"opacity .5s, transform .5s" } },
        h("div", { style:{ fontSize:"70px", lineHeight:"1" } }, r.icon), h("div", { style:{ fontFamily:"var(--f-royal)", fontWeight:"800", fontSize:"34px", margin:"8px 0" } }, r.t), setMD(h("div", { style:{ fontSize:"24px", lineHeight:"1.3" } }), r.d),
        h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"17px", letterSpacing:".12em", color:"#8A5A0A", marginTop:"10px" } }, "SOURCE: " + r.src.toUpperCase()), bar, h("div", { style:{ marginTop:"6px" } }, "Votes: ", cnt));
      c.addEventListener("click", e => { e.stopPropagation(); votes[r.k] = (votes[r.k] || 0) + 1; paint(); BM.sfx("tok"); });
      r.el = c; r.bar = bar.firstChild; r.cnt = cnt; host.appendChild(c); return c;
    });
    function paint(){ const tot = Object.values(votes).reduce((a, b) => a + b, 0) || 1; R.forEach(r => { r.cnt.textContent = votes[r.k] || 0; r.bar.style.width = ((votes[r.k] || 0)/tot*100) + "%"; }); }
    const tip = h("div", { class:"pcard ix-tip", style:{ left:"0", right:"0", top:"450px", minHeight:"80px" } });
    host.appendChild(tip);
    const T = ["**330 BC:** Persepolis burned. Why? Ancient writers disagree. Press → to reveal each explanation.", "Explanation 1: **revenge**.", "Explanation 2: **a drunken feast**.", "Explanation 3: **a message** of power.", "And one honest historian says: **we may never know**. Now **vote**: tap the card you find most convincing. Which source would you trust most, and why?"];
    function step(i){ R.forEach((r, k) => { const on = k < i; r.el.style.opacity = on ? "1" : "0"; r.el.style.transform = on ? "none" : "translateY(20px)"; }); setMD(tip, T[i]); if (i) BM.sfx("paper"); }
    controls(host, [btn("Clear votes", () => { Object.keys(votes).forEach(k => delete votes[k]); paint(); })]);
    step(0);
    return { steps:R.length, step };
  };

  /* =======================================================
     18. SHAKE TABLE — mud brick vs reinforced (Tue W8)
     ======================================================= */
  IX.shaketable = function(host){
    const W = 1100, H = 680;
    const v = svg(W, H, { style:"position:absolute;left:0;top:-10px;width:1100px;height:680px;border-radius:12px;box-shadow:var(--sh-3);background:linear-gradient(#cfe6f0,#f3e3c3 80%)" });
    host.appendChild(v);
    const table = s("g"); v.appendChild(table);
    table.appendChild(s("rect", { x:60, y:560, width:980, height:40, rx:8, fill:"#5a5a60" }));
    const mk = (x, kind) => { const g = s("g", { transform:`translate(${x} 0)` });
      if (kind === "mud"){ for (let r=0;r<6;r++) for (let c=0;c<4;c++) g.appendChild(s("rect", { x:c*70 + (r%2)*35 - (r%2 && c === 3 ? 35 : 0), y:500 - r*50, width:(r%2 && c === 3) ? 35 : 68, height:48, fill:"#c9a06a", stroke:"#8a6a42", "stroke-width":2 })); g.appendChild(s("rect", { x:-10, y:180, width:300, height:30, fill:"#6b4f33" })); g.appendChild(s("text", { x:140, y:160, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":26, fill:"#2B1B10" }, "MUD BRICK + HEAVY ROOF")); }
      else { g.appendChild(s("rect", { x:0, y:210, width:280, height:350, fill:"#d8d4cc", stroke:"#5a5a60", "stroke-width":4 })); [0, 140, 280].forEach(xx => g.appendChild(s("rect", { x:xx - 6, y:210, width:12, height:350, fill:"#B0213B" }))); [210, 385, 554].forEach(yy => g.appendChild(s("rect", { x:0, y:yy - 6, width:280, height:12, fill:"#B0213B" }))); g.appendChild(s("path", { d:"M0 210 L280 560 M280 210 L0 560", stroke:"#B0213B", "stroke-width":6 })); g.appendChild(s("rect", { x:-10, y:196, width:300, height:16, fill:"#8a8a90" })); g.appendChild(s("text", { x:140, y:180, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":26, fill:"#2B1B10" }, "REINFORCED + LIGHT ROOF")); }
      v.appendChild(g); return g; };
    const mud = mk(150, "mud"), rf = mk(670, "rf");
    const info = panel({ left:"1130px", right:"0", top:"-10px" }, [h("h4"), h("p")]);
    host.appendChild(info);
    let tm;
    function shake(collapse){ clearInterval(tm); let t = 0;
      if (!BM.motionOK()){ end(collapse); return; }
      tm = setInterval(() => { t++; const dx = Math.sin(t*1.6)*14*(t < 30 ? 1 : 0); table.setAttribute("transform", `translate(${dx} 0)`); mud.setAttribute("transform", `translate(${150 + dx*1.4} 0) rotate(${dx*.3} 290 560)`); rf.setAttribute("transform", `translate(${670 + dx} 0)`); if (t >= 30){ clearInterval(tm); end(collapse); } }, 40); BM.sfx("thunder"); }
    function end(collapse){ table.setAttribute("transform", ""); rf.setAttribute("transform", "translate(670 0)"); if (collapse){ mud.setAttribute("transform", "translate(150 0)"); [...mud.children].forEach((b, i) => { if (b.tagName === "text") return; b.style.transition = "transform 1s"; b.style.transform = `translate(${(i%5 - 2)*14}px, ${Math.max(0, 300 - (i%6)*30)}px) rotate(${(i%7 - 3)*12}deg)`; b.style.transformBox = "fill-box"; b.style.transformOrigin = "center"; }); } }
    function rebuild(){ [...mud.children].forEach(b => { b.style.transform = "none"; }); mud.setAttribute("transform", "translate(150 0)"); }
    const T = [
      ["Two buildings","Two model houses on a **shake table**. One is **mud brick** with a heavy roof; one is **reinforced** (a steel frame and braces) with a light roof. Predict: which will survive?"],
      ["Shake!","The ground shakes sideways. Heavy, unreinforced walls **crack and fall**. The reinforced frame **bends a little and holds**."],
      ["Bam, 26 December 2003","A **magnitude 6.6** earthquake struck **Bam**. The US Geological Survey reported about **85%** of buildings in the area damaged or destroyed. Many were **mud brick**."],
      ["Building back safer","After a disaster, cities can **rebuild safer**: stronger frames, lighter roofs, better building rules. Christchurch did this after the **Canterbury earthquakes**."]
    ];
    function step(i){ info.querySelector("h4").textContent = T[i][0]; setMD(info.querySelector("p"), T[i][1]); if (i === 0) rebuild(); if (i === 1) { rebuild(); shake(true); } }
    controls(host, [btn("🧱 Rebuild", rebuild), btn("〰️ Shake", () => { rebuild(); shake(true); }, "on")]);
    step(0);
    return { steps:3, step, destroy(){ clearInterval(tm); } };
  };

  /* =======================================================
     27. CHEETAH SURVIVAL — threats and helpers (Wed W8)
     ======================================================= */
  IX.cheetahsave = function(host){
    const TH = [
      { k:"road", icon:"🛣️", t:"Highways", d:"Cheetahs have been **killed on roads** in Semnan province, around the **Turan** sanctuary.", v:-25 },
      { k:"prey", icon:"🦌", t:"Less prey", d:"People hunt the **gazelles and wild sheep** cheetahs need to eat.", v:-20 },
      { k:"herd", icon:"🐑", t:"Conflict with herders", d:"Some cheetahs are **killed to protect livestock**.", v:-15 }
    ];
    const HE = [
      { k:"cross", icon:"🌉", t:"Safe crossings & slow zones", d:"Warning signs, lower speed limits and **wildlife crossings** on roads.", v:15 },
      { k:"guard", icon:"🛡️", t:"Protect the prey", d:"Stop poaching so **gazelles and wild sheep** recover.", v:20 },
      { k:"herd2", icon:"🤝", t:"Work with herders", d:"Help herders guard flocks so they **don't need to kill** cheetahs.", v:15 }
    ];
    let level = 50; const on = {};
    const meterW = 1760;
    const meter = h("div", { style:{ position:"absolute", left:"0", right:"0", top:"-10px", height:"64px", borderRadius:"14px", background:"rgba(0,0,0,.25)", overflow:"hidden" } }, h("div", { style:{ height:"100%", width:"50%", background:"linear-gradient(90deg,#B0213B,#E8B84A,#0B7A55)", transition:"width .6s" } }));
    const mLab = h("div", { style:{ position:"absolute", left:"20px", top:"2px", fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"30px", color:"#fff", textShadow:"0 2px 6px rgba(0,0,0,.6)" } });
    meter.appendChild(mLab); host.appendChild(meter);
    const big = h("div", { class:"pcard", style:{ position:"absolute", left:"0", top:"70px", width:"420px", height:"420px", padding:"20px", textAlign:"center" } }, h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"150px", color:"#B0213B", lineHeight:"1" } }, "17"), setMD(h("div", { style:{ fontSize:"26px", lineHeight:"1.3" } }), "In **March 2025**, Iran's environment chief said only **17 Asiatic cheetahs** were left."), h("div", { style:{ fontSize:"60px", marginTop:"10px" } }, "🐆"));
    host.appendChild(big);
    const col = (arr, x, head, color) => { host.appendChild(h("div", { style:{ position:"absolute", left:x+"px", top:"70px", width:"640px", fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"24px", letterSpacing:".12em", color } }, head));
      return arr.map((it, i) => { const c = h("div", { class:"pcard hov", style:{ position:"absolute", left:x+"px", top:(110 + i*125)+"px", width:"640px", height:"112px", padding:"10px 16px", display:"flex", gap:"14px", alignItems:"center", cursor:"pointer", transition:"box-shadow .3s, opacity .3s" } }, h("div", { style:{ fontSize:"54px" } }, it.icon), h("div", null, h("div", { style:{ fontFamily:"var(--f-royal)", fontWeight:"800", fontSize:"26px" } }, it.t), setMD(h("div", { style:{ fontSize:"20px", lineHeight:"1.25" } }), it.d)));
        c.addEventListener("click", e => { e.stopPropagation(); toggle(it, c); }); it.el = c; host.appendChild(c); return c; }); };
    col(TH, 450, "THREATS", "#E0566F"); col(HE, 1110, "WHAT HELPS", "#3FBF86");
    function paint(){ level = 50 + Object.keys(on).reduce((a, k) => a + on[k], 0); level = Math.max(3, Math.min(100, level)); meter.firstChild.style.width = level + "%"; mLab.textContent = level < 30 ? "SURVIVAL CHANCES: VERY LOW" : level < 60 ? "SURVIVAL CHANCES: AT RISK" : "SURVIVAL CHANCES: IMPROVING"; }
    function toggle(it, c){ if (on[it.k] != null){ delete on[it.k]; c.style.boxShadow = ""; } else { on[it.k] = it.v; c.style.boxShadow = `0 0 0 6px ${it.v < 0 ? "#E0566F" : "#3FBF86"}, var(--sh-2)`; } paint(); BM.sfx(it.v < 0 ? "no" : "ok"); }
    function step(i){ Object.keys(on).forEach(k => delete on[k]); [...TH, ...HE].forEach(it => it.el.style.boxShadow = "");
      const list = [...TH, ...HE].slice(0, i); list.forEach(it => { on[it.k] = it.v; it.el.style.boxShadow = `0 0 0 6px ${it.v < 0 ? "#E0566F" : "#3FBF86"}, var(--sh-2)`; }); paint(); if (i) BM.sfx(i <= 3 ? "no" : "ok"); }
    step(0);
    return { steps:6, step };
  };

  /* =======================================================
     36. BINARY LAMPS — 8 · 4 · 2 · 1 (Thu W8)
     ======================================================= */
  IX.binarylamps = function(host){
    const V = [8, 4, 2, 1], st = [0, 0, 0, 0];
    const lamps = V.map((val, i) => {
      const bulb = h("div", { style:{ width:"240px", height:"240px", borderRadius:"50%", margin:"0 auto", background:"#2B2A3E", boxShadow:"inset 0 -10px 30px rgba(0,0,0,.4)", transition:"background .3s, box-shadow .3s", display:"grid", placeItems:"center", fontSize:"110px" } }, "🪔");
      const bit = h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"90px", textAlign:"center", color:"#FBF3E0" } }, "0");
      const lab = h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"40px", textAlign:"center", color:"#F6D27A" } }, String(val));
      const c = h("div", { style:{ position:"absolute", left:(i*290)+"px", top:"-10px", width:"270px", cursor:"pointer" } }, lab, bulb, bit);
      c.addEventListener("click", e => { e.stopPropagation(); st[i] = 1 - st[i]; paint(); BM.sfx("tok"); });
      host.appendChild(c); return { bulb, bit }; });
    const total = h("div", { style:{ position:"absolute", left:"1180px", right:"0", top:"-10px", fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"120px", color:"#F6D27A", textAlign:"center" } });
    const sum = h("div", { class:"pcard", style:{ position:"absolute", left:"1180px", right:"0", top:"170px", padding:"16px 20px", fontSize:"28px", lineHeight:"1.35" } });
    const tip = h("div", { class:"pcard ix-tip", style:{ left:"0", right:"0", top:"480px", minHeight:"80px" } });
    host.append(total, sum, tip);
    function paint(){ st.forEach((b, i) => { lamps[i].bulb.style.background = b ? "radial-gradient(circle,#FFF4C2,#F6D27A 60%,#B9770A)" : "#2B2A3E"; lamps[i].bulb.style.boxShadow = b ? "0 0 60px #F6D27A" : "inset 0 -10px 30px rgba(0,0,0,.4)"; lamps[i].bit.textContent = String(b); });
      const n = st.reduce((a, b, i) => a + b*V[i], 0); total.textContent = String(n); setMD(sum, `**Binary:** ${st.join("")}\n**Sum:** ${st.map((b, i) => b ? V[i] : null).filter(x => x).join(" + ") || "0"} = **${n}**`); }
    const SET = [[0,0,0,0],[0,0,0,1],[0,1,0,1],[1,0,1,1],[1,1,1,1]];
    const T = ["Four signal lamps on a hilltop: each is **on (1)** or **off (0)**. Computers store everything with just these **two states**: **bits**.", "Only the **1** lamp is on: **0001 = 1**.", "**0101** = 4 + 1 = **5**.", "**1011** = 8 + 2 + 1 = **11**. (This week's clue!)", "All on: **1111** = 8 + 4 + 2 + 1 = **15**, the biggest number four lamps can show. Tap the lamps to make your own numbers."];
    function step(i){ SET[i].forEach((b, k) => st[k] = b); paint(); setMD(tip, T[i]); if (i) BM.sfx("tok"); }
    step(0);
    return { steps:4, step };
  };

  /* =======================================================
     47. MINIATURE ZOOM — find the tiny details (Fri W8)
     ======================================================= */
  IX.miniaturezoom = function(host){
    const W = 900, H = 660;
    const v = svg(W, H, { style:"position:absolute;left:0;top:-10px;width:900px;height:660px;border-radius:8px;box-shadow:var(--sh-3);background:#efe3c8" });
    host.appendChild(v);
    const page = s("g", { style:"transition:transform 1s cubic-bezier(.3,.7,.2,1)" }); v.appendChild(page);
    page.appendChild(s("rect", { x:20, y:20, width:860, height:620, fill:"#1E3A8A" }));
    page.appendChild(s("rect", { x:40, y:40, width:820, height:580, fill:"#E8B84A" }));
    page.appendChild(s("rect", { x:56, y:56, width:788, height:548, fill:"#9fc4a0" }));
    page.appendChild(s("path", { d:"M56 300 Q200 200 330 260 T600 230 T844 260 V56 H56Z", fill:"#c9a3d8" }));
    page.appendChild(s("path", { d:"M200 300 L300 120 L420 300Z M460 300 L600 90 L740 300Z", fill:"#d9a06a", stroke:"#8a6a42", "stroke-width":3 }));
    page.appendChild(s("path", { d:"M600 90 l-30 60 h60z", fill:"#fff" }));
    // the Simurgh's nest on the peak, with a baby
    const nest = s("g"); nest.appendChild(s("ellipse", { cx:600, cy:100, rx:46, ry:16, fill:"#8a5a34" })); nest.appendChild(s("circle", { cx:600, cy:88, r:9, fill:"#f4d9c0" })); page.appendChild(nest);
    const bird = s("g"); bird.appendChild(s("path", { d:"M650 70 q60 -60 140 -30 q-50 10 -70 40 q40 0 80 30 q-70 0 -110 -10 q-20 30 -40 20z", fill:"#0B7A55", stroke:"#E8B84A", "stroke-width":3 })); bird.appendChild(s("circle", { cx:660, cy:64, r:4, fill:"#2B1B10" })); page.appendChild(bird);
    // trees, flowers, a river, a rider
    for (let i=0;i<14;i++){ const x = 80 + i*55, y = 420 + (i%3)*40; page.appendChild(s("path", { d:`M${x} ${y} q8 -40 16 0z`, fill:"#2f6e3a" })); page.appendChild(s("circle", { cx:x + 8 + (i%2)*20, cy:y + 30, r:5, fill: i % 3 ? "#E0566F" : "#fff" })); }
    page.appendChild(s("path", { d:"M56 520 Q300 480 500 540 T844 520", stroke:"#4f9cc4", "stroke-width":24, fill:"none" }));
    const rider = s("g"); rider.appendChild(s("path", { d:"M180 360 h50 l10 30 h-70z", fill:"#fff" })); rider.appendChild(s("circle", { cx:205, cy:345, r:10, fill:"#f4d9c0" })); rider.appendChild(s("path", { d:"M195 335 h20 v-8 h-20z", fill:"#B0213B" })); page.appendChild(rider);
    for (let i=0;i<30;i++) page.appendChild(s("circle", { cx:56 + (i*53)%788, cy:60 + (i*37)%180, r:1.8, fill:"#fff", opacity:.7 }));
    const SPOTS = [
      { cx:450, cy:330, z:1, t:"The whole page", d:"A Persian **miniature**: a small, detailed painting that tells a story, with a **border**, bright colours and a high viewpoint." },
      { cx:620, cy:90, z:3.2, t:"Zoom: the nest", d:"High on a mountain, a **baby** in a nest… and a great green-and-gold bird. This is **Zal**, from the **Shahnameh**, rescued and raised by the **Simurgh**." },
      { cx:205, cy:360, z:3.4, t:"Zoom: a rider", d:"A tiny **rider** with a red hat. Miniature painters used brushes with just a **few hairs** for details like this." },
      { cx:300, cy:450, z:2.6, t:"Zoom: flowers", d:"Every flower is painted **one by one**. Patterns of plants fill the ground like a **carpet**." },
      { cx:450, cy:330, z:1, t:"Layers and borders", d:"Look how the picture is built in **layers**: sky at the top, mountains, then the ground at the bottom, all inside a **gold border**." }
    ];
    const ring = s("circle", { r:0, fill:"none", stroke:"#fff", "stroke-width":4, opacity:0 }); page.appendChild(ring);
    const info = panel({ left:"930px", right:"0", top:"-10px" }, [h("h4"), h("p")]);
    host.appendChild(info);
    host.appendChild(h("div", { class:"ix-chip", style:{ position:"absolute", left:"14px", top:"600px", background:"rgba(0,0,0,.45)" } }, "Our simplified drawing, not a real manuscript page"));
    function step(i){ const S = SPOTS[i]; info.querySelector("h4").textContent = S.t; setMD(info.querySelector("p"), S.d);
      page.style.transformOrigin = "0 0"; page.style.transform = S.z === 1 ? "none" : `translate(${450 - S.cx*S.z}px, ${330 - S.cy*S.z}px) scale(${S.z})`; if (i) BM.sfx("tok"); }
    step(0);
    return { steps:SPOTS.length - 1, step };
  };
})(window.BM);
