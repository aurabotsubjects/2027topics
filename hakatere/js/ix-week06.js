/* ==========================================================
   INTERACTIVES — Week 6 (Map Sheet VI · The Town)
   towngrows · altitudezones · matarikifinder · blocksim · rockart
   ========================================================== */
(function(BM){
  "use strict";
  const h = BM.h, s = BM.s, svg = BM.svg, A = BM.art, IX = BM.IX;
  const btn = BM.ixbtn;
  const setMD = (el, t) => { el.innerHTML = String(t).split("\n\n").map(BM.md).join('<span style="display:block;height:12px"></span>'); return el; };
  const controls = (host, kids) => { const c = h("div", { class:"ix-controls", style:{ position:"absolute", right:"0", top:"-118px" } }, kids); host.appendChild(c); return c; };
  const panel = (style, kids) => h("div", { class:"ix-panel", style }, kids);
  const stop = e => e.stopPropagation();
  const lab = t => h("b", { style:{ fontFamily:"var(--f-label)", letterSpacing:".08em", textTransform:"uppercase", fontSize:"20px", display:"block", marginTop:"8px" } }, t);
  const range = (min, max, val, col, on) => { const r = h("input", { type:"range", min, max, value:val, style:{ width:"100%", accentColor:col }, onclick:stop, onpointerdown:stop }); r.addEventListener("input", () => on(+r.value)); return r; };
  const T = (x, y, t, o) => s("text", Object.assign({ x, y, "font-family":"Atkinson Hyperlegible", "font-size":20, fill:"#1F2A30" }, o || {}), t);

  /* =======================================================
     TOWN GROWS — a treeless plain becomes Ashburton (Mon W6)
     ======================================================= */
  IX.towngrows = function(host){
    const W = 1100, H = 640;
    const v = svg(W, H, { style:"position:absolute;left:0;top:0;width:1100px;height:640px;border-radius:12px" });
    v.appendChild(s("rect", { width:W, height:H, rx:12, fill:"#d8c58e" }));
    v.appendChild(s("rect", { width:W, height:H, fill:"url(#p-grid)", opacity:.35 }));
    // the river, running from the mountains (top left) to the sea (bottom right)
    v.appendChild(A.braids([[-40,560],[300,530],[600,515],[900,560],[1160,600]], { seed:61, w0:26, w1:30, threads:3, color:"#3D8DB3", sw:3, bedColor:"#a7a59c", bedOpacity:.85 }));
    v.appendChild(T(40, 600, "Hakatere / Ashburton River", { "font-style":"italic", fill:"#2C6F92", "font-size":22 }));
    const layers = {};
    const L = k => (layers[k] = s("g", { opacity:0, style:"transition:opacity .6s" }), v.appendChild(layers[k]), layers[k]);
    // 1858: accommodation house and ferry
    const g1 = L(1858);
    g1.appendChild(s("rect", { x:470, y:440, width:56, height:36, fill:"#8a6a3a" })); g1.appendChild(s("path", { d:"M462 442 L498 416 L534 442Z", fill:"#5b4a3a" }));
    g1.appendChild(s("path", { d:"M520 486 L540 560", stroke:"#4B5357", "stroke-width":4, "stroke-dasharray":"6 6" }));
    g1.appendChild(s("rect", { x:526, y:520, width:30, height:14, fill:"#6b4e2e" }));
    g1.appendChild(T(560, 470, "accommodation house + ferry", { "font-size":18 }));
    // 1863–64: the survey grid
    const g2 = L(1864);
    for (let i=0;i<9;i++) g2.appendChild(s("line", { x1:300 + i*50, y1:120, x2:300 + i*50, y2:420, stroke:"#6b7a80", "stroke-width":2, "stroke-dasharray":"8 6" }));
    for (let j=0;j<7;j++) g2.appendChild(s("line", { x1:300, y1:120 + j*50, x2:700, y2:120 + j*50, stroke:"#6b7a80", "stroke-width":2, "stroke-dasharray":"8 6" }));
    g2.appendChild(T(300, 108, "town surveyed (grid of streets)", { "font-size":18 }));
    // 1870s: buildings on the main road, railway
    const g3 = L(1875);
    const rnd = BM.rng(9);
    for (let i=0;i<34;i++){ const x = 305 + (i % 8)*50 + rnd()*12, y = 128 + Math.floor(i/8)*50 + rnd()*10; g3.appendChild(s("rect", { x, y, width:20 + rnd()*14, height:16 + rnd()*10, fill:["#a0522d","#8a6a3a","#7d8a8e"][i % 3] })); }
    g3.appendChild(s("path", { d:"M0 300 L1100 260", stroke:"#3b3b3b", "stroke-width":6 }));
    for (let x=0;x<1100;x+=22) g3.appendChild(s("line", { x1:x, y1:300 - x*40/1100 - 7, x2:x, y2:300 - x*40/1100 + 7, stroke:"#3b3b3b", "stroke-width":2 }));
    g3.appendChild(T(760, 250, "railway", { "font-size":18 }));
    // 1878–1880: Rakaia bridge, Methven branch line (off-map arrows)
    const g4 = L(1880);
    g4.appendChild(s("path", { d:"M1000 20 L1080 80", stroke:"#1F2A30", "stroke-width":4, "marker-end":"" })); g4.appendChild(T(860, 40, "→ Rakaia bridged 1878", { "font-size":18 }));
    g4.appendChild(s("path", { d:"M200 285 L40 120", stroke:"#3b3b3b", "stroke-width":5 })); g4.appendChild(T(40, 100, "branch line to Methven (1880)", { "font-size":18 }));
    // industries
    const g5 = L(1900);
    [[760,380,"🏭","freezing works"],[160,380,"🌾","flour mill"],[820,170,"🧱","brickworks"],[200,200,"🧀","dairy factory"]].forEach(([x,y,e,n]) => { g5.appendChild(s("text", { x, y, "font-size":44, "text-anchor":"middle" }, e)); g5.appendChild(T(x, y + 28, n, { "font-size":17, "text-anchor":"middle" })); });
    // trees planted on the treeless plain
    const g6 = L(1950);
    const r2 = BM.rng(4); for (let i=0;i<40;i++){ const x = 260 + r2()*480, y = 110 + r2()*320; g6.appendChild(s("circle", { cx:x, cy:y, r:7 + r2()*6, fill:"#4f6b3a", opacity:.85 })); }
    for (let i=0;i<10;i++) g6.appendChild(s("line", { x1:60 + i*100, y1:40, x2:60 + i*100, y2:230, stroke:"#4f6b3a", "stroke-width":6, opacity:.55 }));
    host.appendChild(v);
    const STEPS = [
      [1850, "**About 1850:** a **treeless plain** beside a braided river. Tākata whenua travelled and gathered food here (Weeks 2–3)."],
      [1858, "**1858:** an **accommodation house** is built on a **ferry reserve** on the riverbank, where travellers cross the river."],
      [1864, "**1863–64:** the town is **surveyed**: streets are pegged out in a grid on the plain."],
      [1875, "**1870s:** shops, grain stores and stock agents line the main road and the **railway**."],
      [1880, "**1878–1880:** the **Rakaia River is bridged** (1878), and a **branch railway** reaches **Methven** (1880)."],
      [1900, "**Industries grow:** flour mills, dairy factories, freezing works and brickworks. **John Grigg** of Longbeach helped start Canterbury's **meat-freezing** industry."],
      [1950, "**The 1900s:** the treeless plain gets **shelter belts and parks**. The Tinwald–Mt Somers line closes in **1967**; the Methven line in **1976**."]
    ];
    let i = 0;
    const sR = range(0, STEPS.length - 1, 0, "#B4412F", n => { i = n; draw(); });
    const ctl = panel({ left:"1130px", right:"0", top:"0" }, [h("h4", { class:"yr", style:{ fontSize:"46px" } }), sR]);
    const read = panel({ left:"1130px", right:"0", top:"190px", bottom:"0" }, [h("p", { style:{ fontSize:"24px" } })]);
    host.append(ctl, read);
    function draw(){
      const y = STEPS[i][0];
      Object.keys(layers).forEach(k => layers[k].setAttribute("opacity", +k <= y ? 1 : 0));
      ctl.querySelector(".yr").textContent = i === 0 ? "c. 1850" : i === STEPS.length - 1 ? "1900s" : String(y === 1864 ? "1863–64" : y === 1875 ? "1870s" : y === 1900 ? "Industry" : y);
      setMD(read.querySelector("p"), STEPS[i][1]);
      sR.value = i;
    }
    controls(host, [btn("◂ Back", () => { i = Math.max(0, i - 1); draw(); }, "dark"), btn("Grow ▸", () => { i = Math.min(STEPS.length - 1, i + 1); BM.sfx("paper"); draw(); }, "on")]);
    draw();
    return { steps:STEPS.length - 1, step(k){ i = k; draw(); } };
  };

  /* =======================================================
     ALTITUDE ZONES — climb from the plains to the peaks (Tue W6)
     ======================================================= */
  IX.altitudezones = function(host){
    const W = 1100, H = 640;
    const v = svg(W, H, { style:"position:absolute;left:0;top:0;width:1100px;height:640px;border-radius:12px" });
    const ZONES = [
      { n:"Plains & braided rivers", top:400, col:"#c9b47a", e:"🐦 🌾 🐑", d:"Farms, shelter belts and **braided rivers**. Six braided-river birds nest on the open gravel from about **September to January**: wrybill, banded dotterel, black stilt, black-billed gull, pied oystercatcher and black-fronted tern." },
      { n:"Foothills & beech forest", top:900, col:"#4f6b3a", e:"🌳 🐦", d:"Patches of **beech forest** in the valleys and on shady slopes. Forest gives shelter from wind and frost." },
      { n:"Tussock grassland", top:1400, col:"#b5a46e", e:"🌾 🦎", d:"Above the **bushline** trees can't grow. **Tussocks** grow in tough clumps that shed snow and keep their roots warm. Hakatere Conservation Park protects tussocklands, wetlands and lakes." },
      { n:"Alpine herbfield & rock", top:2000, col:"#8a958f", e:"🌼 🦜", d:"Cold, windy, snowy, short summers. Plants stay **low and small**, many with **hairy or waxy leaves** or **cushion** shapes. **Kea**, the world's only alpine parrot, lives here." },
      { n:"Snow, ice & bare rock", top:2600, col:"#eef2f2", e:"❄️", d:"Too cold and exposed for most life. Snow lasts much of the year." }
    ];
    const ky = m => 620 - m/2700*580;
    let z = 0, m = 300;
    // mountain profile
    v.appendChild(s("rect", { width:W, height:H, rx:12, fill:"#bfd9e6" }));
    const prof = `M0 ${ky(200)} L250 ${ky(350)} L420 ${ky(900)} L560 ${ky(1500)} L700 ${ky(2100)} L820 ${ky(2600)} L900 ${ky(2300)} L1100 ${ky(1600)} L1100 640 L0 640Z`;
    const defs = s("defs"); const cp = s("clipPath", { id:"altclip" }); cp.appendChild(s("path", { d:prof })); defs.appendChild(cp); v.appendChild(defs);
    const bands = s("g", { "clip-path":"url(#altclip)" });
    let prev = 0; ZONES.forEach(Z => { bands.appendChild(s("rect", { x:0, y:ky(Z.top), width:W, height:ky(prev) - ky(Z.top), fill:Z.col })); prev = Z.top; });
    v.appendChild(bands);
    v.appendChild(s("path", { d:prof, fill:"none", stroke:"#1F2A30", "stroke-width":3 }));
    v.appendChild(s("line", { x1:0, y1:ky(1100), x2:W, y2:ky(1100), stroke:"#1F2A30", "stroke-dasharray":"8 8", opacity:.5 }));
    v.appendChild(T(20, ky(1100) - 8, "bushline (approximate)", { "font-size":17 }));
    const climber = s("g"); climber.appendChild(s("circle", { r:16, fill:"#B4412F", stroke:"#fff", "stroke-width":3 })); climber.appendChild(s("text", { y:-24, "text-anchor":"middle", "font-size":28 }, "🥾"));
    v.appendChild(climber);
    host.appendChild(v);
    const xAt = mm => { const pts = [[0,200],[250,350],[420,900],[560,1500],[700,2100],[820,2600]]; for (let k=1;k<pts.length;k++) if (mm <= pts[k][1]) { const [x0,m0] = pts[k-1], [x1,m1] = pts[k]; return x0 + (x1 - x0)*Math.max(0, (mm - m0))/(m1 - m0); } return 820; };
    const mR = range(200, 2600, 300, "#2C6F92", n => { m = n; draw(); });
    const ctl = panel({ left:"1130px", right:"0", top:"0" }, [lab("Height above sea level"), mR, h("h4", { class:"mv", style:{ fontSize:"34px", marginTop:"6px" } })]);
    const read = panel({ left:"1130px", right:"0", top:"190px", bottom:"0" }, [h("h4", { class:"zn", style:{ fontSize:"30px" } }), h("p", { style:{ fontSize:"22px" } })]);
    host.append(ctl, read);
    function draw(){
      const x = xAt(m); climber.setAttribute("transform", `translate(${x} ${ky(m) - 14})`);
      z = ZONES.findIndex(Z => m <= Z.top); if (z < 0) z = ZONES.length - 1;
      const t = Math.round(15 - 6*(m - 200)/1000);
      ctl.querySelector(".mv").textContent = `${m} m · about ${t}°C`;
      read.querySelector(".zn").textContent = ZONES[z].e + "  " + ZONES[z].n;
      setMD(read.querySelector("p"), ZONES[z].d + "\n\nAir gets about **6°C cooler** for every 1,000 m you climb (on a 15°C day on the plains). Heights are approximate.");
      mR.value = m;
    }
    const go = mm => { m = mm; BM.sfx("tok"); draw(); };
    controls(host, [btn("Plains", () => go(300), "dark"), btn("Forest", () => go(800), "dark"), btn("Tussock", () => go(1300), "dark"), btn("Alpine", () => go(1900), "dark"), btn("Peak", () => go(2550), "on")]);
    draw();
    return { steps:4, step(k){ go([300, 800, 1300, 1900, 2550][k]); } };
  };

  /* =======================================================
     MATARIKI & PUAKA FINDER — a winter dawn sky (Wed W6)
     ======================================================= */
  IX.matarikifinder = function(host){
    const W = 1100, H = 640;
    const v = svg(W, H, { style:"position:absolute;left:0;top:0;width:1100px;height:640px;border-radius:12px" });
    const defs = s("defs"); const lg = s("linearGradient", { id:"dawn", x1:0, y1:0, x2:0, y2:1 });
    [["0","#0b1424"],[".65","#1d2f4f"],[".9","#6b5a7a"],["1","#d8936a"]].forEach(([o,c]) => lg.appendChild(s("stop", { offset:o, "stop-color":c })));
    defs.appendChild(lg); v.appendChild(defs);
    v.appendChild(s("rect", { width:W, height:H, rx:12, fill:"url(#dawn)" }));
    v.appendChild(A.stars(W, 520, 77, 180));
    // Orion's belt (Tautoru) and Puaka (Rigel), Matariki to the left (north-east)
    const belt = [[640,300],[672,286],[704,272]], puaka = [600,200], bet = [770,400];
    const orion = s("g");
    belt.forEach(([x,y]) => orion.appendChild(s("circle", { cx:x, cy:y, r:5, fill:"#e8eeff" })));
    orion.appendChild(s("circle", { cx:puaka[0], cy:puaka[1], r:8, fill:"#b9d0ff" }));
    orion.appendChild(s("circle", { cx:bet[0], cy:bet[1], r:7, fill:"#ffb38a" }));
    [[560,330],[760,250]].forEach(([x,y]) => orion.appendChild(s("circle", { cx:x, cy:y, r:4, fill:"#e8eeff" })));
    v.appendChild(orion);
    const M = [330,260], MS = [[0,0],[14,-9],[24,4],[-12,10],[8,16],[-6,-14],[30,-10],[-20,-4],[18,24]];
    const mat = s("g"); MS.forEach(([x,y], i) => mat.appendChild(s("circle", { cx:M[0] + x, cy:M[1] + y, r:i === 0 ? 4.5 : 3.2, fill:"#dbe6ff" })));
    v.appendChild(mat);
    // Mt Hutt range on the horizon
    v.appendChild(A.range(W, H, 560, 90, 33, "#0d141c", {}));
    v.appendChild(T(40, 625, "Looking north-east, about 6 am in late June", { fill:"#F3ECDD", "font-size":18 }));
    const ring = s("circle", { r:0, fill:"none", stroke:"#E6C873", "stroke-width":4, style:"transition:all .6s" });
    const tag = s("text", { "font-family":"Big Shoulders Display", "font-weight":900, "font-size":26, fill:"#E6C873", "letter-spacing":"2" });
    const lines = s("g", { opacity:0, style:"transition:opacity .6s" });
    lines.appendChild(s("path", { d:`M${belt[0][0]} ${belt[0][1]} L${puaka[0]} ${puaka[1]}`, stroke:"#E6C873", "stroke-width":2, "stroke-dasharray":"6 6" }));
    lines.appendChild(s("path", { d:`M${belt[0][0]} ${belt[0][1]} L${M[0] + 40} ${M[1] + 6}`, stroke:"#E6C873", "stroke-width":2, "stroke-dasharray":"6 6" }));
    v.append(lines, ring, tag);
    host.appendChild(v);
    const NINE = [["Matariki","health and wellbeing; the mother of the cluster"],["Pōhutukawa","people who have died in the past year"],["Tupuānuku","food grown in the ground"],["Tupuārangi","food from the sky: birds, berries and fruit"],["Waitī","fresh water and its creatures"],["Waitā","the ocean and food from the sea"],["Waipuna-ā-rangi","rain"],["Ururangi","the winds"],["Hiwa-i-te-rangi","the wishing star: hopes for the year"]];
    const read = panel({ left:"1130px", right:"0", top:"0", bottom:"0" }, [h("h4", { class:"st", style:{ fontSize:"32px" } }), h("p", { class:"sp", style:{ fontSize:"22px" } }), h("div", { class:"nine", style:{ display:"flex", flexWrap:"wrap", gap:"6px", marginTop:"10px" } }), h("p", { class:"nm", style:{ fontSize:"21px", marginTop:"10px" } })]);
    host.appendChild(read);
    const nb = NINE.map(([n, d], k) => { const b = btn(n, () => { setMD(read.querySelector(".nm"), `**${n}:** ${d}.`); nb.forEach((x, j) => x.classList.toggle("on", j === k)); }, "dark sm"); return b; });
    read.querySelector(".nine").append(...nb);
    let step = 0;
    const STEPS = [
      { t:"Find the sky", d:"It's a winter morning before sunrise. Look **north-east**, above the mountains.", c:null },
      { t:"Tautoru", d:"First find **three stars in a short line**: **Orion's belt**, called **Tautoru** in te reo (check local names).", c:[672,286,60] },
      { t:"Puaka", d:"Near the belt is a bright **blue-white** star: **Puaka** (Rigel). Many **Kāi Tahu** look to **Puaka** to mark the new year, because it's **bright and easy to see** from the south.", c:[puaka[0], puaka[1], 34] },
      { t:"Matariki", d:"Follow the belt away from Puaka, low in the north-east, to a small, fuzzy **cluster**: **Matariki** (the Pleiades). Accounts vary: some count **seven** stars, others **nine**. Tap the names below.", c:[M[0] + 8, M[1] + 4, 52] }
    ];
    function draw(){
      const S = STEPS[step];
      read.querySelector(".st").textContent = (step + 1) + ". " + S.t;
      setMD(read.querySelector(".sp"), S.d);
      if (S.c){ ring.setAttribute("cx", S.c[0]); ring.setAttribute("cy", S.c[1]); ring.setAttribute("r", S.c[2]); tag.textContent = S.t.toUpperCase(); tag.setAttribute("x", S.c[0] + S.c[2] + 10); tag.setAttribute("y", S.c[1] - S.c[2]); }
      else { ring.setAttribute("r", 0); tag.textContent = ""; }
      lines.setAttribute("opacity", step >= 2 ? .8 : 0);
      read.querySelector(".nine").style.display = step === 3 ? "flex" : "none";
      if (step < 3) setMD(read.querySelector(".nm"), "");
      else if (!read.querySelector(".nm").textContent) setMD(read.querySelector(".nm"), "The nine names follow Prof. Rangi Matamua's account (AUT).");
    }
    controls(host, [btn("◂ Back", () => { step = Math.max(0, step - 1); draw(); }, "dark"), btn("Next star ▸", () => { step = Math.min(3, step + 1); BM.sfx("chime"); draw(); }, "on")]);
    draw();
    return { steps:3, step(k){ step = k; draw(); } };
  };

  /* =======================================================
     BLOCK SIM — drive the tractor with a sequence of blocks (Thu W6)
     Our own tractor sprite (no Scratch mascot).
     ======================================================= */
  IX.blocksim = function(host){
    const C = 9, R = 6, S = 80, OX = 20, OY = 20;
    const v = svg(C*S + 40, R*S + 40, { style:`position:absolute;left:0;top:0;width:${C*S + 40}px;height:${R*S + 40}px;border-radius:12px` });
    v.appendChild(s("rect", { width:C*S + 40, height:R*S + 40, rx:12, fill:"#7FA55A" }));
    for (let y=0;y<R;y++) for (let x=0;x<C;x++) v.appendChild(s("rect", { x:OX + x*S, y:OY + y*S, width:S - 2, height:S - 2, fill:(x + y) % 2 ? "#86ad60" : "#79a052" }));
    const FENCE = [[4,1],[4,2],[4,3],[2,4],[6,4]], BALE = [8,0], GATE = [0,5];
    FENCE.forEach(([x,y]) => v.appendChild(s("text", { x:OX + x*S + S/2, y:OY + y*S + S/2 + 14, "text-anchor":"middle", "font-size":40 }, "🚧")));
    v.appendChild(s("text", { x:OX + BALE[0]*S + S/2, y:OY + BALE[1]*S + S/2 + 14, "text-anchor":"middle", "font-size":44 }, "🌾"));
    const trail = s("polyline", { fill:"none", stroke:"#F3ECDD", "stroke-width":5, "stroke-dasharray":"2 10", "stroke-linecap":"round" });
    const trac = s("g");
    trac.appendChild(s("rect", { x:-22, y:-16, width:40, height:32, rx:6, fill:"#B4412F" }));
    trac.appendChild(s("rect", { x:-2, y:-12, width:16, height:24, rx:3, fill:"#e9dcc0" }));
    trac.appendChild(s("circle", { cx:-14, cy:-18, r:9, fill:"#1F2A30" })); trac.appendChild(s("circle", { cx:-14, cy:18, r:9, fill:"#1F2A30" }));
    trac.appendChild(s("circle", { cx:14, cy:-17, r:6, fill:"#1F2A30" })); trac.appendChild(s("circle", { cx:14, cy:17, r:6, fill:"#1F2A30" }));
    trac.appendChild(s("path", { d:"M22 -6 L32 0 L22 6Z", fill:"#E6C873" }));
    v.append(trail, trac);
    host.appendChild(v);
    const BLOCKS = { move:"move 1 square", left:"turn left 90°", right:"turn right 90°" };
    let prog = [], st = null, timer = 0;
    const list = h("div", { style:{ display:"flex", flexDirection:"column", gap:"6px", maxHeight:"300px", overflowY:"auto", marginTop:"8px" } });
    const msg = h("p", { style:{ fontSize:"21px", marginTop:"10px" } });
    const pal = h("div", { style:{ display:"flex", flexWrap:"wrap", gap:"8px" } }, Object.keys(BLOCKS).map(k => btn("+ " + BLOCKS[k], () => { prog.push(k); renderList(); }, "dark sm")));
    const p1 = panel({ left:"800px", right:"0", top:"0", bottom:"0" }, [h("h4", { style:{ fontSize:"28px" } }, "Program"), pal, list, msg]);
    host.appendChild(p1);
    const blockEl = (k, i) => h("div", { style:{ background:k === "move" ? "#3D8DB3" : "#7d5fb0", color:"#fff", borderRadius:"10px", padding:"6px 12px", fontFamily:"var(--f-label)", fontWeight:"900", letterSpacing:".06em", textTransform:"uppercase", fontSize:"18px", display:"flex", justifyContent:"space-between", alignItems:"center" } }, (i + 1) + ". " + BLOCKS[k], h("button", { style:{ background:"none", border:"0", color:"#fff", fontSize:"20px", cursor:"pointer" }, onclick:e => { stop(e); prog.splice(i, 1); renderList(); } }, "✕"));
    function renderList(hi){ BM.clear(list); prog.forEach((k, i) => { const b = blockEl(k, i); if (i === hi) b.style.outline = "4px solid #E6C873"; list.appendChild(b); }); if (!prog.length) list.appendChild(h("i", { style:{ fontSize:"19px", opacity:.7 } }, "Add blocks to drive the tractor to the hay 🌾.")); }
    const place = () => { trac.setAttribute("transform", `translate(${OX + st.x*S + S/2} ${OY + st.y*S + S/2}) rotate(${st.d*90})`); trail.setAttribute("points", st.path.map(([x,y]) => `${OX + x*S + S/2},${OY + y*S + S/2}`).join(" ")); };
    function reset(){ clearTimeout(timer); st = { x:GATE[0], y:GATE[1], d:0, path:[[GATE[0], GATE[1]]] }; place(); setMD(msg, "The tractor starts at the **gate**, facing **right** →. Avoid the **fences** 🚧."); renderList(); }
    function run(){
      reset(); let i = 0;
      const tick = () => {
        if (i >= prog.length){ const ok = st.x === BALE[0] && st.y === BALE[1]; BM.sfx(ok ? "ok" : "no"); setMD(msg, ok ? "✅ **Made it to the hay!** Your algorithm works." : "🐞 **Not there yet.** Find the bug: which step went wrong?"); renderList(); return; }
        const k = prog[i]; renderList(i);
        if (k === "left") st.d = (st.d + 3) % 4; else if (k === "right") st.d = (st.d + 1) % 4;
        else { const dx = [1,0,-1,0][st.d], dy = [0,1,0,-1][st.d], nx = st.x + dx, ny = st.y + dy;
          if (nx < 0 || ny < 0 || nx >= C || ny >= R || FENCE.some(([fx,fy]) => fx === nx && fy === ny)){ BM.sfx("no"); setMD(msg, `💥 **Bump!** Step ${i + 1} drives into a ${nx < 0 || ny < 0 || nx >= C || ny >= R ? "boundary" : "fence"}. Fix that step and run again.`); return; }
          st.x = nx; st.y = ny; st.path.push([nx, ny]); BM.sfx("tok"); }
        place(); i++; timer = setTimeout(tick, 450);
      };
      tick();
    }
    const BUGGY = ["move","move","move","left","move","move","move","move","right","move","move","move","move","move"];
    const GOOD = ["move","move","move","left","move","move","move","move","move","right","move","move","move","move","move"];
    controls(host, [btn("Clear", () => { prog = []; reset(); }, "dark"), btn("🐞 Buggy program", () => { prog = BUGGY.slice(); reset(); setMD(msg, "This program has **a bug**. Run it, find the wrong step, and fix it."); }, "dark"), btn("Reset", reset, "dark"), btn("▶ Run", run, "on")]);
    reset();
    return { steps:2, step(k){ if (k === 0){ prog = []; reset(); } if (k === 1){ prog = BUGGY.slice(); run(); } if (k === 2){ prog = GOOD.slice(); run(); } }, destroy(){ clearTimeout(timer); } };
  };

  /* =======================================================
     ROCK ART CONTEXT — learning about, not copying (Fri W6)
     No rock-art figures are drawn. A visit by stops, then a respect check.
     ======================================================= */
  IX.rockart = function(host){
    const W = 1100, H = 640;
    const v = svg(W, H, { style:"position:absolute;left:0;top:0;width:1100px;height:640px;border-radius:12px" });
    v.appendChild(s("rect", { width:W, height:H, rx:12, fill:"#cfe1e8" }));
    v.appendChild(A.range(W, H, 300, 80, 12, "#9aa7ab", {}));
    // a limestone overhang (shelter), pale and smooth — deliberately left without any figures
    v.appendChild(s("path", { d:"M0 640 L0 330 C 180 260, 420 250, 620 300 C 760 330, 820 380, 760 420 C 700 450, 560 430, 520 470 L500 640Z", fill:"#e9e2cf" }));
    v.appendChild(s("path", { d:"M60 360 C 220 300, 420 300, 600 330", stroke:"#cfc6ad", "stroke-width":6, fill:"none" }));
    v.appendChild(s("rect", { x:0, y:560, width:W, height:80, fill:"#b5a46e" }));
    v.appendChild(s("rect", { x:120, y:380, width:260, height:120, rx:10, fill:"none", stroke:"#B4412F", "stroke-width":4, "stroke-dasharray":"10 8" }));
    v.appendChild(T(130, 445, "Art is here, protected.", { "font-size":22, fill:"#B4412F", "font-weight":700 }));
    v.appendChild(T(130, 472, "We learn about it; we don't copy it.", { "font-size":19, fill:"#B4412F" }));
    v.appendChild(s("path", { d:"M560 560 L560 520 M540 520 L580 520", stroke:"#4B5357", "stroke-width":4 }));
    v.appendChild(T(600, 530, "fence & viewing platform", { "font-size":18 }));
    host.appendChild(v);
    const STOPS = [
      ["Where", "Ngāi Tahu rock art is found throughout Te Waipounamu, mostly in **limestone** shelters in **South Canterbury and North Otago**. Te Ana's guided tours visit the Ōpihi Valley."],
      ["How it was made", "Paint was made from **animal or bird fat** mixed with **plant gum** and either **soot** (black) or **kōkōwai** (red ochre). The Arowhenua narrative notes **weka oil** was used. Some art was drawn, scratched or carved."],
      ["What it records", "It records **tribal history**, from early moa-hunting times to contact with Europeans, and marks **ara tawhito** (trails) and **mahinga kai**."],
      ["Why it's fragile", "Weather, wind-blown dust, animals rubbing and time all damage it. The limestone is **unstable and easily eroded**."],
      ["Who cares for it", "**Te Ana Ngāi Tahu Māori Rock Art Centre** in Timaru cares for it **on behalf of Ngāi Tahu**. Its guides are Ngāi Tahu, and its income helps protect the art."]
    ];
    const SORT = [["Visit a site with a Ngāi Tahu guide", true],["Copy a rock-art figure onto my T-shirt", false],["Make my own symbols about my own family and place", true],["Touch the art to feel the paint", false],["Learn the stories from Ngāi Tahu sources", true],["Take some ochre home from the shelter", false]];
    let i = 0, mode = "visit", si = 0, score = 0;
    const read = panel({ left:"1130px", right:"0", top:"0", bottom:"0" }, [h("h4", { class:"rt", style:{ fontSize:"32px" } }), h("p", { class:"rp", style:{ fontSize:"23px" } }), h("div", { class:"rb", style:{ display:"flex", gap:"10px", marginTop:"14px" } })]);
    host.appendChild(read);
    function draw(){
      const rb = read.querySelector(".rb"); BM.clear(rb);
      if (mode === "visit"){
        read.querySelector(".rt").textContent = `${i + 1} / ${STOPS.length} · ${STOPS[i][0]}`;
        setMD(read.querySelector(".rp"), STOPS[i][1]);
      } else if (si < SORT.length){
        read.querySelector(".rt").textContent = `Respect check ${si + 1} / ${SORT.length}`;
        setMD(read.querySelector(".rp"), `**${SORT[si][0]}**\n\nIs this respectful?`);
        const ans = yes => { const ok = yes === SORT[si][1]; if (ok) score++; BM.sfx(ok ? "ok" : "no"); si++; draw(); };
        rb.append(btn("👍 Yes", () => ans(true), "dark sm"), btn("✋ No", () => ans(false), "dark sm"));
      } else {
        read.querySelector(".rt").textContent = `Respect check: ${score} / ${SORT.length}`;
        setMD(read.querySelector(".rp"), "Rock art is **taonga**: it belongs to Ngāi Tahu and their stories. We **learn about it** and **care for it**; we **don't copy** the figures. Then we make **our own symbols** for **our own** families and places.");
      }
    }
    controls(host, [btn("◂ Back", () => { mode = "visit"; i = Math.max(0, i - 1); draw(); }, "dark"), btn("Next stop ▸", () => { mode = "visit"; i = Math.min(STOPS.length - 1, i + 1); BM.sfx("tok"); draw(); }, "dark"), btn("Respect check", () => { mode = "sort"; si = 0; score = 0; draw(); }, "on")]);
    draw();
    return { steps:5, step(k){ if (k < STOPS.length){ mode = "visit"; i = k; } else { mode = "sort"; si = 0; score = 0; } draw(); } };
  };
})(window.BM);
