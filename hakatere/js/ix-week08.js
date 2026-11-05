/* ==========================================================
   INTERACTIVES — Week 8 (Map Sheet VIII · The Flood)
   hydrograph · mountaincompare · zoomout · smartirrigator · patchwork
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
     FLOOD HYDROGRAPH — the river rises, peaks and falls (Mon W8)
     Shape is illustrative; the peak (about 1,450 m³/s) is from 1News.
     ======================================================= */
  IX.hydrograph = function(host){
    const W = 1100, H = 640, X0 = 90, X1 = 1060, Y0 = 560, Y1 = 60, PEAK = 1450;
    const v = svg(W, H, { style:"position:absolute;left:0;top:0;width:1100px;height:640px;border-radius:12px" });
    v.appendChild(s("rect", { width:W, height:H, rx:12, fill:"#f6f1e4" }));
    const fy = q => Y0 - q/1600*(Y0 - Y1), fx = t => X0 + t/100*(X1 - X0);
    for (let q=0;q<=1600;q+=400){ v.appendChild(s("line", { x1:X0, y1:fy(q), x2:X1, y2:fy(q), stroke:"#d6cdb8", "stroke-width":1.5 })); v.appendChild(T(X0 - 12, fy(q) + 6, String(q), { "text-anchor":"end", "font-size":17 })); }
    v.appendChild(T(20, 40, "River flow (m³ per second)", { "font-size":18, "font-weight":700 }));
    v.appendChild(s("line", { x1:X0, y1:Y0, x2:X1, y2:Y0, stroke:"#1F2A30", "stroke-width":3 }));
    ["29 May","30 May","31 May","1 June"].forEach((d, i) => v.appendChild(T(fx(i*33), Y0 + 30, d, { "font-size":17 })));
    // a smooth flood curve: low base, fast rise, peak, slower fall
    const Q = t => { const r = t < 45 ? Math.pow(t/45, 2.4) : Math.exp(-Math.pow((t - 45)/30, 1.4)); return 20 + (PEAK - 20)*r; };
    const pts = []; for (let t=0;t<=100;t+=1) pts.push(`${fx(t)},${fy(Q(t))}`);
    const full = s("polyline", { points:pts.join(" "), fill:"none", stroke:"#d6cdb8", "stroke-width":4, "stroke-dasharray":"6 8" });
    const area = s("path", { fill:"#3D8DB3", opacity:.35 }), line = s("polyline", { fill:"none", stroke:"#2C6F92", "stroke-width":6 });
    const dot = s("circle", { r:10, fill:"#B4412F" });
    v.append(full, area, line, dot);
    // stopbank stress meter
    const meter = s("g", { transform:"translate(140 90)" });
    meter.appendChild(s("rect", { width:260, height:24, rx:12, fill:"#d6cdb8" }));
    const mfill = s("rect", { height:24, rx:12, fill:"#7FA55A" }); meter.appendChild(mfill);
    meter.appendChild(T(0, -10, "Stopbank stress", { "font-size":17, "font-weight":700 }));
    v.appendChild(meter);
    host.appendChild(v);
    const EV = [
      [5, "**29 May:** heavy rain begins in the foothills and mountains. About **540 mm** eventually falls at **Mount Somers**."],
      [30, "**30 May:** a **state of local emergency** is declared in Ashburton, and a region-wide emergency for Canterbury. People near rivers prepare to leave."],
      [42, "The river **rises fast**. About **1,500 people** in **Allenton and Netherby** are warned they may need to evacuate; plans are drawn up for up to **4,000 homes**."],
      [45, "**Peak:** about **1,450 m³ of water every second**. Upstream, the river **breaks out** of its banks, which **eases the pressure** near town."],
      [60, "**31 May:** drivers report the **State Highway 1 bridge** slumping. Engineers find a crack in a pile **big enough to fit a hand in**. The bridge closes."],
      [90, "**Afterwards:** nearly **280 properties** affected. Emergency services, iwi, Rural Support, farmers and neighbours help. Fixing roads takes **over six months** and **$4 million**."]
    ];
    let t = 0, raf = 0;
    const tR = range(0, 100, 0, "#2C6F92", n => { t = n; draw(); });
    const ctl = panel({ left:"1130px", right:"0", top:"0" }, [lab("Time"), tR, h("h4", { class:"fq", style:{ fontSize:"32px", marginTop:"6px" } })]);
    const read = panel({ left:"1130px", right:"0", top:"190px", bottom:"0" }, [h("p", { style:{ fontSize:"22px" } }), h("p", { style:{ fontSize:"16px", marginTop:"14px", color:"#4B5357" } }, "The curve's shape is a teaching sketch; the peak flow is from 1News (31 May 2021).")]);
    host.append(ctl, read);
    function draw(){
      const p = []; for (let k=0;k<=t;k++) p.push(`${fx(k)},${fy(Q(k))}`);
      line.setAttribute("points", p.join(" "));
      area.setAttribute("d", t > 0 ? `M${fx(0)} ${Y0} L${p.join(" L")} L${fx(t)} ${Y0}Z` : "M0 0");
      const q = Q(t); dot.setAttribute("cx", fx(t)); dot.setAttribute("cy", fy(q));
      const st = Math.min(1, q/1300);
      mfill.setAttribute("width", 260*st); mfill.setAttribute("fill", st < .5 ? "#7FA55A" : st < .85 ? "#E6C873" : "#B4412F");
      ctl.querySelector(".fq").textContent = `≈ ${Math.round(q/10)*10} m³/s`;
      const e = EV.filter(x => x[0] <= t).pop();
      setMD(read.querySelector("p"), e ? e[1] : "Press **Play** to watch the river during the May 2021 flood.");
      tR.value = t;
    }
    function play(){ cancelAnimationFrame(raf); t = 0; let last = performance.now(); const tick = n => { t = Math.min(100, t + (n - last)*.012); last = n; t = Math.round(t*10)/10; draw(); if (t < 100) raf = requestAnimationFrame(tick); }; raf = requestAnimationFrame(tick); }
    controls(host, [btn("Reset", () => { cancelAnimationFrame(raf); t = 0; draw(); }, "dark"), btn("▶ Play", play, "on")]);
    draw();
    return { steps:EV.length, step(i){ cancelAnimationFrame(raf); t = i === 0 ? 0 : EV[i - 1][0]; draw(); }, destroy(){ cancelAnimationFrame(raf); } };
  };

  /* =======================================================
     MOUNTAIN COMPARE — Kinabalu and Aoraki side by side (Tue W8)
     ======================================================= */
  IX.mountaincompare = function(host){
    const W = 1100, H = 640, BASE = 590, K = 520/4200;
    const v = svg(W, H, { style:"position:absolute;left:0;top:0;width:1100px;height:640px;border-radius:12px" });
    v.appendChild(s("rect", { width:W, height:H, rx:12, fill:"#cfe1e8" }));
    for (let m=0;m<=4000;m+=1000){ v.appendChild(s("line", { x1:60, y1:BASE - m*K, x2:1080, y2:BASE - m*K, stroke:"#fff", "stroke-width":1.5, opacity:.8 })); v.appendChild(T(50, BASE - m*K + 6, m + " m", { "text-anchor":"end", "font-size":16 })); }
    const ZK = [["Lowland rainforest","#2f6b3a",1200],["Mountain forest","#4f8a4a",2350],["Cloud & mossy forest","#7fa57a",2800],["Alpine scrub","#b5a46e",3400],["Bare granite","#9aa3a3",4095]];
    const ZA = [["Plains & foothills","#c9b47a",900],["Beech forest","#4f6b3a",1300],["Tussock","#b5a46e",1900],["Alpine herbfield","#8a958f",2500],["Snow & ice","#eef2f2",3724]];
    const peak = (cx, top, zones, name, sub) => {
      const g = s("g"); const w = 380, path = `M${cx - w} ${BASE} L${cx} ${BASE - top*K} L${cx + w} ${BASE}Z`;
      const id = "mc" + cx; const cp = s("clipPath", { id }); cp.appendChild(s("path", { d:path })); g.appendChild(cp);
      const bands = s("g", { "clip-path":`url(#${id})` }); let prev = 0; zones.forEach(([n, c, m]) => { bands.appendChild(s("rect", { x:cx - w, y:BASE - m*K, width:2*w, height:(m - prev)*K, fill:c })); prev = m; }); g.appendChild(bands);
      g.appendChild(s("path", { d:path, fill:"none", stroke:"#1F2A30", "stroke-width":3 }));
      g.appendChild(T(cx, BASE - top*K - 34, name, { "text-anchor":"middle", "font-size":26, "font-weight":700 }));
      g.appendChild(T(cx, BASE - top*K - 10, sub, { "text-anchor":"middle", "font-size":18 }));
      return g;
    };
    v.appendChild(peak(310, 4095, ZK, "Mt Kinabalu", "4,095 m · Malaysia"));
    v.appendChild(peak(800, 3724, ZA, "Aoraki / Mt Cook", "3,724 m · Aotearoa"));
    v.appendChild(s("rect", { x:0, y:BASE, width:W, height:H - BASE, fill:"#8a7a5a" }));
    host.appendChild(v);
    const COUNTRIES = ["Brunei","Cambodia","Indonesia","Laos","Malaysia","Myanmar","Philippines","Singapore","Thailand","Timor-Leste","Vietnam"];
    const VIEWS = [
      ["Two mountains", "**Mt Kinabalu** (4,095 m) in **Sabah, Malaysia**, on the island of **Borneo**, is the highest mountain between the Himalayas and New Guinea.\n\n**Aoraki / Mt Cook** (3,724 m) is the highest in Aotearoa."],
      ["Climate", "Kinabalu is **near the equator**: hot, wet rainforest at the bottom, cold and windy at the top. Our Alps are **far south**: cooler at every height, with snow and glaciers."],
      ["Living things", "Kinabalu Park has an estimated **5,000–6,000 plant species**, about **1,000 orchids** and **326 bird species**, including giant pitcher plants. It was Malaysia's first **UNESCO World Heritage** site (2000)."],
      ["Southeast Asia", "Southeast Asia has **11 countries**: " + COUNTRIES.join(", ") + "."]
    ];
    let i = 0;
    const read = panel({ left:"1130px", right:"0", top:"0", bottom:"0" }, [h("h4", { class:"vt", style:{ fontSize:"32px" } }), h("p", { style:{ fontSize:"22px" } })]);
    host.appendChild(read);
    const draw = () => { read.querySelector(".vt").textContent = VIEWS[i][0]; setMD(read.querySelector("p"), VIEWS[i][1]); };
    controls(host, [btn("◂ Back", () => { i = Math.max(0, i - 1); draw(); }, "dark"), btn("Compare ▸", () => { i = (i + 1) % VIEWS.length; BM.sfx("tok"); draw(); }, "on")]);
    draw();
    return { steps:3, step(k){ i = k; draw(); } };
  };

  /* =======================================================
     ZOOM OUT — from our school to the galaxies (Wed W8)
     ======================================================= */
  IX.zoomout = function(host){
    const W = 1100, H = 640;
    const v = svg(W, H, { style:"position:absolute;left:0;top:0;width:1100px;height:640px;border-radius:12px" });
    const g = s("g"); v.appendChild(g);
    host.appendChild(v);
    const L = [
      ["Our school", "Hakatere / Ashburton, Mid Canterbury", z => { g.appendChild(s("rect", { width:W, height:H, fill:"#7FA55A" })); for (let i=0;i<6;i++) g.appendChild(s("rect", { x:200 + i*120, y:220 + (i%2)*60, width:90, height:70, fill:"#e9dcc0", stroke:"#1F2A30", "stroke-width":3 })); g.appendChild(s("rect", { x:150, y:420, width:800, height:120, fill:"#c9a04a" })); g.appendChild(T(550, 490, "the field", { "text-anchor":"middle", "font-size":28 })); }],
      ["Aotearoa", "Te Waipounamu, in the South Pacific", z => { g.appendChild(s("rect", { width:W, height:H, fill:"#2C6F92" })); g.appendChild(s("path", { d:"M420 120 C 520 160, 600 220, 640 300 C 660 380, 560 470, 440 540 C 400 520, 380 470, 420 420 C 460 360, 420 300, 360 260 C 330 220, 360 150, 420 120Z", fill:"#7FA55A" })); g.appendChild(s("path", { d:"M640 40 C 700 60, 760 120, 720 200 C 690 240, 660 200, 650 150Z", fill:"#7FA55A" })); g.appendChild(s("circle", { cx:560, cy:330, r:9, fill:"#B4412F" })); g.appendChild(T(575, 336, "we are here", { fill:"#fff", "font-size":22 })); }],
      ["Planet Earth", "One planet, spinning and orbiting the Sun", z => { g.appendChild(s("rect", { width:W, height:H, fill:"#0f1822" })); g.appendChild(A.stars(W, H, 3, 120)); g.appendChild(s("circle", { cx:550, cy:320, r:220, fill:"#3D8DB3" })); g.appendChild(s("path", { d:"M480 200 C 560 220, 600 280, 580 350 C 560 420, 500 460, 460 470 C 520 400, 500 300, 480 200Z", fill:"#7FA55A" })); }],
      ["The solar system", "The Sun and its eight planets", z => { g.appendChild(s("rect", { width:W, height:H, fill:"#0f1822" })); g.appendChild(A.stars(W, H, 4, 160)); g.appendChild(s("circle", { cx:120, cy:320, r:70, fill:"#E6C873" })); [[230,6],[290,9],[360,10],[430,7],[560,30],[700,26],[840,16],[980,15]].forEach(([x, r], i) => { g.appendChild(s("circle", { cx:x, cy:320, r, fill:["#a7a59c","#e6c07a","#3D8DB3","#c0603a","#d9b38a","#e9d29a","#9fd0e0","#5f7fd0"][i] })); }); g.appendChild(T(360, 300, "Earth", { fill:"#F3ECDD", "text-anchor":"middle", "font-size":18 })); }],
      ["The Milky Way · Te Ikaroa", "A barred spiral galaxy about 100,000 light-years across", z => { g.appendChild(s("rect", { width:W, height:H, fill:"#0b1218" })); const r = BM.rng(8); for (let a=0;a<2;a++) for (let i=0;i<500;i++){ const t = i/500*3.2*Math.PI, rr = 30 + t*45, ang = t + a*Math.PI; g.appendChild(s("circle", { cx:550 + Math.cos(ang)*rr + (r() - .5)*30, cy:320 + Math.sin(ang)*rr*.62 + (r() - .5)*20, r:1 + r()*2, fill:r() < .2 ? "#cfe0ff" : "#F6EBC8", opacity:.8 })); } g.appendChild(s("ellipse", { cx:550, cy:320, rx:70, ry:40, fill:"#fff2c8", opacity:.85 })); g.appendChild(s("circle", { cx:770, cy:250, r:8, fill:"#E6C873" })); g.appendChild(T(790, 245, "the Sun is about here", { fill:"#E6C873", "font-size":20 })); }],
      ["Our galaxy neighbours", "The Large and Small Magellanic Clouds", z => { g.appendChild(s("rect", { width:W, height:H, fill:"#0b1218" })); g.appendChild(A.stars(W, H, 9, 200)); g.appendChild(s("ellipse", { cx:360, cy:320, rx:120, ry:60, fill:"#F6EBC8", opacity:.4 })); g.appendChild(T(360, 420, "the Milky Way", { fill:"#F3ECDD", "text-anchor":"middle", "font-size":20 })); g.appendChild(s("ellipse", { cx:720, cy:220, rx:60, ry:36, fill:"#cfe0ff", opacity:.5 })); g.appendChild(T(720, 290, "Large Magellanic Cloud", { fill:"#cfe0ff", "text-anchor":"middle", "font-size":18 })); g.appendChild(s("ellipse", { cx:850, cy:420, rx:36, ry:22, fill:"#cfe0ff", opacity:.5 })); g.appendChild(T(850, 470, "Small Magellanic Cloud", { fill:"#cfe0ff", "text-anchor":"middle", "font-size":18 })); }]
    ];
    const NOTES = [
      "Start here: our **school**, on the plains beside the Hakatere.",
      "Zoom out: **Aotearoa New Zealand**, in the South Pacific.",
      "Zoom out: **Earth**, one planet among many.",
      "Zoom out: the **solar system**: the Sun, eight planets and their moons. Not to scale!",
      "Zoom out: our galaxy, the **Milky Way**, called **Te Ikaroa**. Our solar system is just one part of it, along with about **250 billion** other stars. The Sun sits near the **Orion arm**, about 28,000 light-years from the centre.",
      "Zoom out: beyond the Milky Way are other **galaxies**. From Aotearoa we can see the **Magellanic Clouds** as hazy patches near the south celestial pole. The Small Magellanic Cloud is about **190,000 light-years** away."
    ];
    let i = 0;
    const read = panel({ left:"1130px", right:"0", top:"0", bottom:"0" }, [h("h4", { class:"zt", style:{ fontSize:"30px" } }), h("p", { class:"zs", style:{ fontSize:"19px", color:"#4B5357", margin:"4px 0 10px" } }), h("p", { class:"zn", style:{ fontSize:"22px" } }), h("p", { class:"za", style:{ fontSize:"19px", marginTop:"14px", color:"#2C6F92" } })]);
    host.appendChild(read);
    function draw(){
      BM.clear(g); L[i][2](); read.querySelector(".zt").textContent = `${i + 1}. ${L[i][0]}`;
      read.querySelector(".zs").textContent = L[i][1]; setMD(read.querySelector(".zn"), NOTES[i]);
      setMD(read.querySelector(".za"), "**My cosmic address:** " + ["Our school", "Aotearoa", "Earth", "Solar system", "Milky Way", "the universe"].slice(0, i + 1).join(" → "));
      g.animate && BM.motionOK() && g.animate([{ transform:"scale(1.25)", opacity:.3, transformOrigin:"550px 320px" }, { transform:"scale(1)", opacity:1, transformOrigin:"550px 320px" }], { duration:600, easing:"ease-out" });
    }
    controls(host, [btn("◂ Zoom in", () => { i = Math.max(0, i - 1); draw(); }, "dark"), btn("Zoom out ▸", () => { i = Math.min(L.length - 1, i + 1); BM.sfx("chime"); draw(); }, "on")]);
    draw();
    return { steps:L.length - 1, step(k){ i = k; draw(); } };
  };

  /* =======================================================
     SMART IRRIGATOR — event + if/else on a soil sensor (Thu W8)
     ======================================================= */
  IX.smartirrigator = function(host){
    const W = 700, H = 640;
    const v = svg(W, H, { style:"position:absolute;left:0;top:0;width:700px;height:640px;border-radius:12px" });
    v.appendChild(s("rect", { width:W, height:H, rx:12, fill:"#bfd9e6" }));
    const soil = s("rect", { x:0, y:380, width:W, height:260 }); v.appendChild(soil);
    const grass = s("g"); v.appendChild(grass);
    const pivot = s("g"); v.appendChild(pivot);
    pivot.appendChild(s("line", { x1:60, y1:330, x2:640, y2:330, stroke:"#4B5357", "stroke-width":8 }));
    [160, 320, 480, 620].forEach(x => { pivot.appendChild(s("path", { d:`M${x - 30} 380 L${x} 330 L${x + 30} 380`, stroke:"#4B5357", "stroke-width":5, fill:"none" })); pivot.appendChild(s("circle", { cx:x, cy:385, r:14, fill:"#1F2A30" })); });
    const spray = s("g"); v.appendChild(spray);
    for (let i=0;i<40;i++) spray.appendChild(s("line", { x1:70 + i*14, y1:340, x2:66 + i*14, y2:372, stroke:"#3D8DB3", "stroke-width":3 }));
    const sensor = s("g", { transform:"translate(100 470)" }); sensor.appendChild(s("rect", { x:-8, y:-60, width:16, height:90, fill:"#E6C873", stroke:"#1F2A30", "stroke-width":2 })); sensor.appendChild(T(20, -40, "soil sensor", { "font-size":17 })); v.appendChild(sensor);
    const gauge = T(350, 600, "", { "text-anchor":"middle", "font-size":30, "font-weight":700 }); v.appendChild(gauge);
    host.appendChild(v);
    let moist = 55, buggy = false, log = [], raf = 0, running = false, weather = "sun";
    const code = h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", letterSpacing:".04em", textTransform:"uppercase", fontSize:"19px" } });
    const mR = range(0, 100, 55, "#8a6a3a", n => { moist = n; check(); });
    const tbl = h("div", { style:{ fontSize:"18px", marginTop:"8px" } });
    const p = panel({ left:"730px", right:"0", top:"0", bottom:"0" }, [h("h4", { style:{ fontSize:"26px" } }, "Program"), code, lab("Soil moisture (sensor)"), mR, h("h4", { style:{ fontSize:"24px", marginTop:"10px" } }, "Test table"), tbl]);
    host.appendChild(p);
    const blk = (t, col, ind) => `<div style="background:${col};color:#fff;border-radius:10px;padding:6px 12px;margin:4px 0 4px ${ind*26}px">${t}</div>`;
    function renderCode(){ code.innerHTML = blk("when sensor reading changes", "#c9842a", 0) + blk(`if moisture ${buggy ? "&gt;" : "&lt;"} 30 then`, "#d9a23a", 1) + blk("turn water ON 💧", "#3D8DB3", 2) + blk("else", "#d9a23a", 1) + blk("turn water OFF ⏸", "#7d5fb0", 2); }
    const decide = m => buggy ? m > 30 : m < 30;
    function check(){
      const on = decide(moist);
      spray.setAttribute("opacity", on ? 1 : 0);
      soil.setAttribute("fill", `rgb(${Math.round(200 - moist*1.1)},${Math.round(160 - moist*.8)},${Math.round(100 - moist*.5)})`);
      BM.clear(grass); for (let i=0;i<30;i++) grass.appendChild(s("path", { d:`M${20 + i*23} 380 l${moist > 25 ? -4 : -10} ${moist > 25 ? -26 : -12}`, stroke:moist > 25 ? "#4f8a3a" : "#b5a46e", "stroke-width":4 }));
      gauge.textContent = `Moisture: ${Math.round(moist)}% · Water ${on ? "ON 💧" : "OFF"}`;
      mR.value = Math.round(moist);
    }
    function addTest(m){ const expect = m < 30 ? "ON" : "OFF", got = decide(m) ? "ON" : "OFF"; log.unshift([m, expect, got]); log = log.slice(0, 5); BM.clear(tbl); tbl.appendChild(h("div", { style:{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr 40px", fontWeight:"700" } }, ...["Moisture", "Expect", "Got", ""].map(x => h("span", null, x)))); log.forEach(([a, b, c]) => tbl.appendChild(h("div", { style:{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr 40px" } }, ...[a + "%", b, c, b === c ? "✅" : "❌"].map(x => h("span", null, x))))); BM.sfx(expect === got ? "ok" : "no"); }
    function day(){
      cancelAnimationFrame(raf); running = true; let last = performance.now(), t = 0;
      const tick = n => { const dt = (n - last)/1000; last = n; t += dt;
        const on = decide(moist);
        moist = Math.max(0, Math.min(100, moist + (on ? 18 : -(weather === "nw" ? 16 : 8))*dt));
        check(); if (t < 10 && running) raf = requestAnimationFrame(tick); else running = false; };
      raf = requestAnimationFrame(tick);
    }
    controls(host, [btn("Test 20%", () => { moist = 20; check(); addTest(20); }, "dark"), btn("Test 60%", () => { moist = 60; check(); addTest(60); }, "dark"), btn("🐞 Buggy", () => { buggy = !buggy; renderCode(); check(); }, "dark"), btn("Nor'wester", () => { weather = weather === "nw" ? "sun" : "nw"; }, "dark"), btn("▶ Run a day", day, "on")]);
    renderCode(); check();
    return { steps:3, step(k){ if (k === 1){ moist = 20; check(); addTest(20); } if (k === 2){ moist = 60; check(); addTest(60); } if (k === 3){ buggy = true; renderCode(); moist = 20; check(); addTest(20); } if (k === 0){ buggy = false; renderCode(); log = []; BM.clear(tbl); moist = 55; check(); } }, destroy(){ cancelAnimationFrame(raf); } };
  };

  /* =======================================================
     PATCHWORK PLAINS — design an aerial paddock collage (Fri W8)
     ======================================================= */
  IX.patchwork = function(host){
    const W = 1100, H = 640;
    const v = svg(W, H, { style:"position:absolute;left:0;top:0;width:1100px;height:640px;border-radius:12px" });
    const bg = s("rect", { width:W, height:H, rx:12, fill:"#e9dcc0" }); v.appendChild(bg);
    const g = s("g"); v.appendChild(g);
    host.appendChild(v);
    const PALS = [
      { n:"Summer", c:["#c9a04a","#e6c873","#7FA55A","#5E7F3A","#b5a46e","#a8875a"] },
      { n:"Spring", c:["#7FA55A","#9cc06a","#5E7F3A","#c9d98a","#e6c873","#4f6b3a"] },
      { n:"Autumn", c:["#a0522d","#c9a04a","#8a6a3a","#b5a46e","#6b4e2e","#e6c873"] },
      { n:"Rita Angus flat", c:["#2C6F92","#E6C873","#B4412F","#7FA55A","#F3ECDD","#4B5357"] }
    ];
    let pal = 0, seed = 3, pivots = true, belts = true, cells = [];
    function build(){
      const r = BM.rng(seed); cells = [];
      const cols = 7, rows = 5, cw = W/cols, ch = H/rows;
      const jx = [], jy = []; for (let y=0;y<=rows;y++){ jx[y] = []; jy[y] = []; for (let x=0;x<=cols;x++){ jx[y][x] = x*cw + ((x > 0 && x < cols) ? (r() - .5)*cw*.35 : 0); jy[y][x] = y*ch + ((y > 0 && y < rows) ? (r() - .5)*ch*.35 : 0); } }
      for (let y=0;y<rows;y++) for (let x=0;x<cols;x++) cells.push({ pts:[[jx[y][x], jy[y][x]],[jx[y][x+1], jy[y][x+1]],[jx[y+1][x+1], jy[y+1][x+1]],[jx[y+1][x], jy[y+1][x]]], c:Math.floor(r()*6), pat:Math.floor(r()*4), piv:r() < .3 });
    }
    function draw(){
      BM.clear(g); const P = PALS[pal].c;
      cells.forEach((cell, i) => {
        const d = "M" + cell.pts.map(p => p.join(" ")).join(" L") + "Z";
        const p = s("path", { d, fill:P[cell.c], stroke:"#F3ECDD", "stroke-width":4, style:"cursor:pointer" });
        p.addEventListener("click", e => { stop(e); cell.c = (cell.c + 1) % 6; BM.sfx("tok"); draw(); });
        g.appendChild(p);
        const cx = cell.pts.reduce((a, q) => a + q[0], 0)/4, cy = cell.pts.reduce((a, q) => a + q[1], 0)/4;
        if (cell.pat === 1) for (let k=-3;k<=3;k++) g.appendChild(s("line", { x1:cx - 60, y1:cy + k*12, x2:cx + 60, y2:cy + k*12, stroke:"#1F2A30", "stroke-width":1.5, opacity:.25, "pointer-events":"none" }));
        if (cell.pat === 2) for (let k=0;k<12;k++) g.appendChild(s("circle", { cx:cx - 50 + (k % 4)*33, cy:cy - 25 + Math.floor(k/4)*25, r:3, fill:"#1F2A30", opacity:.25, "pointer-events":"none" }));
        if (pivots && cell.piv) g.appendChild(s("circle", { cx, cy, r:48, fill:"#5E7F3A", stroke:"#F3ECDD", "stroke-width":3, opacity:.9, "pointer-events":"none" }));
      });
      if (belts) for (let i=1;i<7;i++) g.appendChild(s("line", { x1:i*W/7, y1:0, x2:i*W/7 + 20, y2:H, stroke:"#2f4a2a", "stroke-width":9, opacity:.7, "stroke-dasharray":"14 6", "pointer-events":"none" }));
      g.appendChild(A.braids([[-20,560],[300,500],[700,560],[1120,520]], { seed:seed, w0:30, w1:40, threads:3, color:"#3D8DB3", sw:3, bedColor:"#a7a59c", bedOpacity:.9 }));
      tip.querySelector(".pn").textContent = "Palette: " + PALS[pal].n;
    }
    const tip = panel({ left:"1130px", right:"0", top:"0", bottom:"0" }, [h("h4", { style:{ fontSize:"30px" } }, "From the air"), h("p", { class:"pn", style:{ fontSize:"20px", fontWeight:"700" } }), setMD(h("p", { style:{ fontSize:"21px", marginTop:"8px" } }), "**Tap a paddock** to change its colour.\n\nFrom a plane, the plains look like a **patchwork quilt**: **shapes** of paddocks, **colours** of crops and grass, **lines** of shelter belts, **circles** of pivots.\n\nIn your collage, **tear or cut** paper shapes and **overlap** them. Use **texture** (lines, dots) for crops.")]);
    host.appendChild(tip);
    controls(host, [btn("New paddocks", () => { seed++; build(); draw(); }, "dark"), btn("Palette", () => { pal = (pal + 1) % PALS.length; draw(); }, "dark"), btn("Pivots", () => { pivots = !pivots; draw(); }, "dark"), btn("Shelter belts", () => { belts = !belts; draw(); }, "on")]);
    build(); draw();
    return { steps:3, step(k){ pal = k; draw(); } };
  };
})(window.BM);
