/* ==========================================================
   INTERACTIVES — Week 5 (Map Sheet V · The Run)
   dayontherun · rainshadow · moonphase · pivotplanner · wetonwet
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

  /* =======================================================
     A DAY ON THE RUN — choose a role, live through a day (Mon W5)
     🟡 Historical fiction based on DOC / Tohu Whenua accounts.
     ======================================================= */
  IX.dayontherun = function(host){
    const TIMES = ["Before dawn", "Morning", "Midday", "Afternoon", "Evening"];
    const ROLES = {
      shepherd:{ n:"Head shepherd", e:"🧑‍🌾", today:"Today's farm managers still check the weather first, but use **phones, quad bikes and computers** to plan the day.",
        d:["Up before light in the **stone cottage**. Look west: a **nor'west sky** means a windy day.","Ride out to check the **merino** flocks and give the shepherds their jobs.","Count the sheep through a gate. A good count matters: the sheep **are** the station's income.","Check the dogs, mend a fence, and write the numbers in the station book.","Home to the cottage. Mail comes rarely, and the nearest neighbour is **hours away**."] },
      musterer:{ n:"Musterer", e:"🐕", today:"Musterers still work with dogs, but helicopters and quad bikes now do some of the work.",
        d:["Breakfast of **mutton and bread** in the dark, then climb to the tops with your **dogs**.","Spread out along the ridges. Whistle and call so the dogs bring the sheep down.","Lunch in a tussock hollow. Up high, **snow** can come in almost any month.","Push the mob down to the yards. Some sheep are always missing.","Sleep in the **men's quarters** or a musterers' hut. Swap stories by the fire."] },
      cook:{ n:"Station cook", e:"🍞", today:"Big stations still have cooks, with **gas or electric ovens**, fridges and food delivered by truck.",
        d:["Light the wood range in the dark and **bake bread** for everyone.","Carry water, chop wood, and cook **mutton**, lots of it.","Feed the hungry men when they come in for their meal.","Pack food for the musterers who leave tomorrow.","Last to bed, after the dishes are done."] },
      wife:{ n:"Station wife", e:"🧺", today:"High-country families today have **phones, internet and roads**, though many children still learn by distance school.",
        d:["Light the fire, make breakfast and care for the **children**.","**Washing by hand**, the vegetable garden, the hens, making butter.","Teach the children their letters: there is **no school** close by.","A special day: walk about **20 km** with the children to the **Trysting Stone** by Lake Clearwater, for tea with your nearest woman neighbour.","Write letters home to Britain. Women were **scarce**: some went months, even years, without seeing another woman."] }
    };
    let role = "wife", t = 0, today = false;
    const scene = svg(1100, 640, { style:"position:absolute;left:0;top:0;width:1100px;height:640px;border-radius:12px" });
    host.appendChild(scene);
    const sky = s("rect", { width:1100, height:640, rx:12 });
    const sun = s("circle", { r:44, fill:"#E6C873" });
    scene.append(sky, sun);
    scene.appendChild(A.range(1100, 640, 330, 160, 51, "#9aa7ab", { snow:"#f4f6f4", peaks:6 }));
    scene.appendChild(A.range(1100, 640, 420, 70, 52, "#b5a46e", {}));
    for (let i=0;i<14;i++) scene.appendChild(A.tussock(30 + i*80, 630, 50, "#a8875a", i + 2));
    // the stone cottage
    const cot = s("g", { transform:"translate(170 470)" });
    cot.appendChild(s("rect", { x:0, y:0, width:230, height:110, fill:"#9a9486", stroke:"#5b564a", "stroke-width":3 }));
    for (let r=0;r<5;r++) for (let c=0;c<7;c++) cot.appendChild(s("rect", { x:4 + c*32 + (r%2)*12, y:6 + r*21, width:26, height:15, rx:3, fill:"#b1aa98", opacity:.8 }));
    cot.appendChild(s("path", { d:"M-14 4 L115 -60 L244 4Z", fill:"#7d8a8e" }));
    cot.appendChild(s("rect", { x:96, y:46, width:38, height:64, fill:"#5b4a3a" }));
    cot.appendChild(s("rect", { x:26, y:40, width:40, height:34, fill:"#e9dcc0" })); cot.appendChild(s("rect", { x:164, y:40, width:40, height:34, fill:"#e9dcc0" }));
    scene.appendChild(cot);
    const who = s("text", { x:560, y:560, "font-size":110, "text-anchor":"middle" });
    scene.appendChild(who);
    const card = panel({ left:"1130px", right:"0", top:"0", bottom:"0" }, [h("div", { class:"rb", style:{ display:"flex", flexWrap:"wrap", gap:"8px", marginBottom:"14px" } }), h("h4", { class:"dr-tm", style:{ fontSize:"32px" } }), h("p", { class:"dr-tx", style:{ fontSize:"25px" } }), h("p", { class:"dr-td", style:{ fontSize:"21px", marginTop:"12px", color:"#2C6F92" } }), h("div", { class:"dots", style:{ display:"flex", gap:"8px", marginTop:"16px", alignItems:"center" } })]);
    host.appendChild(card);
    const rbs = Object.keys(ROLES).map(k => { const b = btn(ROLES[k].e + " " + ROLES[k].n, () => { role = k; t = 0; draw(); }, "dark sm"); b.dataset.k = k; return b; });
    card.querySelector(".rb").append(...rbs);
    const dots = TIMES.map((x, i) => h("button", { class:"ixbtn dark sm", onclick:e => { stop(e); t = i; draw(); } }, String(i + 1)));
    card.querySelector(".dots").append(h("b", { style:{ fontFamily:"var(--f-label)", letterSpacing:".08em", textTransform:"uppercase", fontSize:"18px", marginRight:"4px" } }, "Time"), ...dots);
    const SKY = ["#2b3a4a","#a9cfe0","#bfe0ea","#e9c99a","#40506a"];
    function draw(){
      const R = ROLES[role];
      rbs.forEach(b => b.classList.toggle("on", b.dataset.k === role));
      dots.forEach((b, i) => b.classList.toggle("on", i === t));
      sky.setAttribute("fill", SKY[t]);
      const ang = Math.PI*(t/4);
      sun.setAttribute("cx", 100 + 900*(t/4)); sun.setAttribute("cy", 300 - Math.sin(ang)*240); sun.setAttribute("fill", t === 0 || t === 4 ? "#f6ebc8" : "#E6C873"); sun.setAttribute("r", t === 0 || t === 4 ? 30 : 44);
      who.textContent = R.e;
      card.querySelector(".dr-tm").textContent = TIMES[t] + " · " + R.n;
      setMD(card.querySelector(".dr-tx"), R.d[t]);
      setMD(card.querySelector(".dr-td"), today ? "**Today:** " + R.today : "");
    }
    controls(host, [btn("Then / Today", () => { today = !today; draw(); }, "dark"), btn("Next ▸", () => { t = (t + 1) % 5; BM.sfx("tok"); draw(); }, "on")]);
    draw();
    return { steps:4, step(i){ t = i; draw(); } };
  };

  /* =======================================================
     RAIN SHADOW — moist westerly over the Alps → nor'wester (Tue W5)
     Simplified lapse rates: 10 °C/km dry, 6 °C/km in cloud.
     ======================================================= */
  IX.rainshadow = function(host){
    const W = 1100, H = 640, SEA = 560, PEAK_X = 430;
    const v = svg(W, H, { style:"position:absolute;left:0;top:0;width:1100px;height:640px;border-radius:12px" });
    v.appendChild(s("rect", { width:W, height:H, rx:12, fill:"#bfd9e6" }));
    v.appendChild(s("rect", { y:SEA, width:200, height:H - SEA, fill:"#2C6F92" }));
    v.appendChild(s("text", { x:20, y:610, "font-family":"Big Shoulders Display", "font-weight":900, "font-size":22, fill:"#F3ECDD", "letter-spacing":"2" }, "TASMAN SEA"));
    const mtn = s("path", { fill:"#7d8a8e" }), snow = s("path", { fill:"#f4f6f4" });
    const plains = s("rect", { x:600, y:SEA - 20, width:500, height:H - SEA + 20, fill:"#c9b47a" });
    const cloudW = s("g"), rainW = s("g"), arch = s("g"), track = s("polyline", { fill:"none", stroke:"#1F2A30", "stroke-width":3, "stroke-dasharray":"8 8", opacity:.6 });
    const parcel = s("g"), pT = s("text", { "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":26, fill:"#1F2A30" });
    parcel.appendChild(s("circle", { r:26, fill:"#F3ECDD", stroke:"#1F2A30", "stroke-width":3 }));
    v.append(cloudW, rainW, mtn, snow, plains, arch, track, parcel, pT);
    v.appendChild(s("text", { x:640, y:610, "font-family":"Big Shoulders Display", "font-weight":900, "font-size":22, fill:"#1F2A30", "letter-spacing":"2" }, "CANTERBURY PLAINS →"));
    v.appendChild(s("text", { x:40, y:520, "font-family":"Big Shoulders Display", "font-weight":900, "font-size":22, fill:"#1F2A30", "letter-spacing":"2" }, "WEST COAST"));
    host.appendChild(v);
    let km = 2.5, wind = 2, x = 40, raf = 0, run = false;
    const ky = k => SEA - k*170;      // height scale: 170 px per km
    const kR = range(5, 30, 25, "#7d8a8e", n => { km = n/10; reset(); });
    const wR = range(1, 3, 2, "#2C6F92", n => { wind = n; draw(); });
    const ctl = panel({ left:"1130px", right:"0", top:"0" }, [lab("Height of the Alps"), kR, lab("Westerly wind strength"), wR]);
    const read = panel({ left:"1130px", right:"0", top:"230px", bottom:"0" }, [h("p", { style:{ fontSize:"22px" } })]);
    host.append(ctl, read);
    const BASE = 1;                  // cloud forms at about 1 km
    const T0 = 16;
    function prof(px){                // ground height (km) under x
      if (px < 200) return 0;
      if (px < PEAK_X) return (px - 200)/(PEAK_X - 200)*km;
      if (px < 600) return km - (px - PEAK_X)/(600 - PEAK_X)*(km - .2);
      return .2;
    }
    function state(px){               // parcel height and temperature
      const g = prof(px), hgt = Math.max(g + .15, px < PEAK_X ? g + .15 : g + .15);
      let T;
      if (px <= PEAK_X){ T = hgt <= BASE ? T0 - 10*hgt : T0 - 10*BASE - 6*(hgt - BASE); }
      else { const top = km + .15, Ttop = top <= BASE ? T0 - 10*top : T0 - 10*BASE - 6*(top - BASE); T = Ttop + 10*(top - hgt); }
      return { hgt, T, cloud: px <= PEAK_X && hgt > BASE };
    }
    function draw(){
      mtn.setAttribute("d", `M200 ${SEA} L${PEAK_X} ${ky(km)} L600 ${ky(.2)} L600 ${H} L200 ${H}Z`);
      const sl = Math.max(1.8, km - .5);
      snow.setAttribute("d", km > 1.8 ? `M${PEAK_X - (km - sl)/km*(PEAK_X - 200)} ${ky(sl)} L${PEAK_X} ${ky(km)} L${PEAK_X + (km - sl)/(km - .2)*170} ${ky(sl)}Z` : "M0 0");
      BM.clear(cloudW); BM.clear(rainW); BM.clear(arch);
      if (km > BASE){
        for (let i=0;i<7;i++){ const cx = 230 + i*30, cy = ky(Math.min(km, BASE + .2 + i*.18)) - 40; cloudW.appendChild(s("ellipse", { cx, cy, rx:70, ry:34, fill:"#e7ecee", opacity:.95 })); }
        for (let i=0;i<22;i++){ const rx = 210 + (i*37) % 220, ry = ky(prof(rx)) - 30 - (i*29) % 90; rainW.appendChild(s("line", { x1:rx, y1:ry - 50, x2:rx - 6, y2:ry - 20, stroke:"#2C6F92", "stroke-width":3 })); }
      }
      if (km >= 1.5 && wind >= 2){
        arch.appendChild(s("path", { d:`M560 140 C 720 100, 920 110, 1110 150 L1110 190 C 920 150, 720 140, 560 180Z`, fill:"#F3ECDD", opacity:wind === 3 ? .95 : .75 }));
        arch.appendChild(s("text", { x:820, y:95, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":24, fill:"#1F2A30", "letter-spacing":"2" }, "NOR'WEST ARCH"));
      }
      const pts = []; for (let px=10;px<=1080;px+=20){ const st = state(px); pts.push(`${px},${ky(st.hgt)}`); }
      track.setAttribute("points", pts.join(" "));
      const st = state(x), py = ky(st.hgt);
      parcel.setAttribute("transform", `translate(${x} ${py})`);
      parcel.firstChild.setAttribute("fill", st.cloud ? "#cfd8dc" : x > PEAK_X ? "#f2c48a" : "#F3ECDD");
      pT.setAttribute("x", x); pT.setAttribute("y", py - 40); pT.textContent = Math.round(st.T) + "°C";
      const end = state(1060).T;
      setMD(read.querySelector("p"),
        x < 200 ? "**Moist air** from the Tasman Sea, about **" + T0 + "°C**. Press **Blow**." :
        x <= PEAK_X ? (st.cloud ? "Rising air **cools**. Its water vapour forms **cloud** and falls as **rain** on the **West Coast** side." : "The air is pushed **up** the mountains and starts to **cool**.") :
        x < 600 ? "Over the top, the air **sinks** and **warms quickly**. It has already lost its rain, so it's **dry**." :
        `**Nor'wester!** The air reaches the plains **warm, dry and gusty**: about **${Math.round(end)}°C**. At the same height on the West Coast side it was only about **${Math.round(T0 - 3.5)}°C**.\n\nThe plains are in the Alps' **rain shadow**. Christchurch gets about **648 mm** of rain a year, about **half** of Auckland's or Wellington's.`);
    }
    function reset(){ x = 40; run = false; cancelAnimationFrame(raf); draw(); }
    function blow(){ cancelAnimationFrame(raf); x = 40; run = true; let last = performance.now(); const tick = t => { x = Math.min(1060, x + (t - last)*.18*wind); last = t; draw(); if (x < 1060) raf = requestAnimationFrame(tick); }; raf = requestAnimationFrame(tick); BM.sfx("tok"); }
    controls(host, [btn("Reset", reset, "dark"), btn("Blow", blow, "on")]);
    read.appendChild(h("p", { style:{ fontSize:"17px", marginTop:"14px", color:"#4B5357" } }, "Simplified teaching model: real temperatures and cloud heights vary."));
    draw();
    return { steps:4, step(i){ cancelAnimationFrame(raf); x = [40, 300, 430, 520, 1060][i]; draw(); }, destroy(){ cancelAnimationFrame(raf); } };
  };

  /* =======================================================
     MOON PHASE MACHINE — Sun, Earth, Moon positions → what
     we see from Aotearoa; nights of the maramataka (Wed W5)
     ======================================================= */
  IX.moonphase = function(host){
    const W = 1100, H = 640, EX = 360, EY = 320, OR = 230, MONTH = 29.5;
    const v = svg(W, H, { style:"position:absolute;left:0;top:0;width:1100px;height:640px;border-radius:12px" });
    v.appendChild(s("rect", { width:W, height:H, rx:12, fill:"#14202a" }));
    v.appendChild(A.stars(W, H, 33, 120));
    for (let i=0;i<6;i++) v.appendChild(s("path", { d:`M10 ${80 + i*96} h70 l-14 -10 m14 10 l-14 10`, stroke:"#E6C873", "stroke-width":4, fill:"none", opacity:.8 }));
    v.appendChild(s("text", { x:16, y:40, "font-family":"Big Shoulders Display", "font-weight":900, "font-size":22, fill:"#E6C873", "letter-spacing":"2" }, "SUNLIGHT →"));
    v.appendChild(s("circle", { cx:EX, cy:EY, r:OR, fill:"none", stroke:"#F3ECDD", "stroke-opacity":.3, "stroke-dasharray":"6 8", "stroke-width":2 }));
    v.appendChild(s("circle", { cx:EX, cy:EY, r:46, fill:"#3D8DB3" }));
    v.appendChild(s("path", { d:`M${EX} ${EY - 46} A46 46 0 0 1 ${EX} ${EY + 46}Z`, fill:"#0b1218", opacity:.7 }));
    v.appendChild(s("text", { x:EX, y:EY + 80, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":22, fill:"#F3ECDD" }, "EARTH"));
    const moon = s("g");
    moon.appendChild(s("circle", { r:24, fill:"#d8d4c8" }));
    moon.appendChild(s("path", { d:"M0 -24 A24 24 0 0 1 0 24Z", fill:"#0b1218", opacity:.8 }));   // far half from Sun is dark
    v.appendChild(moon);
    // what we see
    const VX = 860, VY = 250, VR = 150;
    v.appendChild(s("text", { x:VX, y:56, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":26, fill:"#F3ECDD", "letter-spacing":"2" }, "WHAT WE SEE FROM AOTEAROA"));
    v.appendChild(s("circle", { cx:VX, cy:VY, r:VR, fill:"#262f36" }));
    const lit = s("path", { fill:"#efeadc", transform:`translate(${VX} ${VY}) scale(-1 1)` });
    v.appendChild(lit);
    const nameT = s("text", { x:VX, y:460, "text-anchor":"middle", "font-family":"Fraunces", "font-size":40, fill:"#F3ECDD" });
    const riseT = s("text", { x:VX - 20, y:505, "text-anchor":"middle", "font-family":"Atkinson Hyperlegible", "font-size":20, fill:"#cfe0ff" });
    v.append(nameT, riseT);
    host.appendChild(v);
    let d = 0;
    const dR = range(0, 295, 0, "#E6C873", n => { d = n/10; draw(); });
    const ctl = panel({ left:"1130px", right:"0", top:"0" }, [h("h4", { class:"dn", style:{ fontSize:"34px" } }), dR]);
    const read = panel({ left:"1130px", right:"0", top:"170px", bottom:"0" }, [h("p", { style:{ fontSize:"22px" } })]);
    host.append(ctl, read);
    const NAMES = [[1,"New moon"],[6.4,"Waxing crescent"],[8.4,"First quarter"],[13.8,"Waxing gibbous"],[15.8,"Full moon"],[21.1,"Waning gibbous"],[23.1,"Last quarter"],[28.5,"Waning crescent"],[30,"New moon"]];
    function draw(){
      const f = d/MONTH, a = Math.PI - f*2*Math.PI;   // new moon: Moon on the Sun's side
      moon.setAttribute("transform", `translate(${EX + OR*Math.cos(a)} ${EY - OR*Math.sin(a)})`);
      // lit shape (drawn as seen from the north, then mirrored for the south)
      const ph = f*2*Math.PI, rx = Math.abs(Math.cos(ph))*VR, wax = f < .5;
      const sweep = wax ? (Math.cos(ph) > 0 ? 0 : 1) : (Math.cos(ph) > 0 ? 1 : 0);
      lit.setAttribute("d", wax ? `M0 ${-VR} A${VR} ${VR} 0 0 1 0 ${VR} A${rx} ${VR} 0 0 ${sweep} 0 ${-VR}Z` : `M0 ${-VR} A${VR} ${VR} 0 0 0 0 ${VR} A${rx} ${VR} 0 0 ${sweep} 0 ${-VR}Z`);
      const nm = NAMES.find(n => d < n[0])[1];
      nameT.textContent = nm;
      const rise = (6 + d/MONTH*24) % 24, hh = Math.floor(rise), mm = Math.round((rise - hh)*60/10)*10 % 60;
      riseT.textContent = `Rises about ${String(hh).padStart(2,"0")}:${String(mm).padStart(2,"0")} · about 50 min later each day`;
      const night = Math.min(30, Math.floor(d) + 1);
      ctl.querySelector(".dn").textContent = "Day " + night + " of about 29½";
      setMD(read.querySelector("p"), `The Moon makes **no light** of its own. The **Sun always lights half** of it. As the Moon goes around Earth, we see **more or less** of that lit half.\n\n**Maramataka:** every night of the month has its **own name**. In many maramataka the first night is **Whiro** (around the new moon) and the last is **Mutuwhenua**. Names and nights **differ between iwi**, so ask locally.` + (night === 1 ? "\n\n🌑 Night 1: **Whiro**." : night >= 29 ? "\n\n🌑 Last night: **Mutuwhenua**." : ""));
    }
    const goD = x => { d = x; dR.value = Math.round(x*10); BM.sfx("tok"); draw(); };
    controls(host, [btn("New", () => goD(0), "dark"), btn("First ¼", () => goD(7.4), "dark"), btn("Full", () => goD(14.8), "dark"), btn("Last ¼", () => goD(22.1), "dark"), btn("+1 day", () => goD((d + 1) % MONTH), "on")]);
    draw();
    return { steps:4, step(i){ goD([0, 7.4, 14.8, 22.1, 0][i]); } };
  };

  /* =======================================================
     PIVOT PLANNER — arm length → watered circle and missed corners (Thu W5)
     ======================================================= */
  IX.pivotplanner = function(host){
    const W = 1100, H = 640, CX = 550, CY = 320, PX = 280;  // 280 px = the arm at full size
    const v = svg(W, H, { style:"position:absolute;left:0;top:0;width:1100px;height:640px;border-radius:12px" });
    v.appendChild(s("rect", { width:W, height:H, rx:12, fill:"#e9e0c8" }));
    const sq = s("rect", { fill:"#c9a04a", stroke:"#6b4e2e", "stroke-width":4 });
    const circ = s("circle", { cx:CX, cy:CY, fill:"#7FA55A", stroke:"#4f6b3a", "stroke-width":3 });
    const swept = s("path", { fill:"#3D8DB3", opacity:.35 });
    const arm = s("g");
    const corners = s("g", { opacity:0, style:"transition:opacity .5s" });
    v.append(sq, circ, swept, corners, arm);
    v.appendChild(s("circle", { cx:CX, cy:CY, r:12, fill:"#1F2A30" }));
    host.appendChild(v);
    let r = 400, ang = 0, raf = 0, showC = false;   // r in metres
    const rR = range(100, 600, 400, "#2C6F92", n => { r = n; draw(); });
    const ctl = panel({ left:"1130px", right:"0", top:"0" }, [lab("Arm length (radius)"), rR, h("h4", { class:"rv", style:{ fontSize:"34px", marginTop:"6px" } })]);
    const read = panel({ left:"1130px", right:"0", top:"200px", bottom:"0" }, [h("p", { style:{ fontSize:"22px" } })]);
    host.append(ctl, read);
    const SPAN = 50;  // metres between towers (typical span, simplified)
    function draw(){
      const k = PX/600*r/1, R = k;   // pixels for this radius
      sq.setAttribute("x", CX - R); sq.setAttribute("y", CY - R); sq.setAttribute("width", 2*R); sq.setAttribute("height", 2*R);
      circ.setAttribute("r", R);
      BM.clear(arm); BM.clear(corners);
      const ex = CX + R*Math.cos(ang), ey = CY + R*Math.sin(ang);
      arm.appendChild(s("line", { x1:CX, y1:CY, x2:ex, y2:ey, stroke:"#4B5357", "stroke-width":6 }));
      const towers = Math.max(1, Math.round(r/SPAN));
      for (let i=1;i<=towers;i++){ const t = i/towers; arm.appendChild(s("circle", { cx:CX + R*t*Math.cos(ang), cy:CY + R*t*Math.sin(ang), r:7, fill:"#B4412F" })); }
      const big = (ang % (2*Math.PI)) > Math.PI ? 1 : 0;
      swept.setAttribute("d", ang > .01 ? `M${CX} ${CY} L${CX + R} ${CY} A${R} ${R} 0 ${big} 1 ${ex} ${ey}Z` : "M0 0");
      [[-1,-1],[1,-1],[1,1],[-1,1]].forEach(([sx, sy]) => corners.appendChild(s("text", { x:CX + sx*R*.86, y:CY + sy*R*.86 + 12, "text-anchor":"middle", "font-size":Math.max(18, R*.16) }, "🌵")));
      corners.setAttribute("opacity", showC ? 1 : 0);
      const circHa = Math.PI*r*r/10000, sqHa = 4*r*r/10000, miss = sqHa - circHa;
      ctl.querySelector(".rv").textContent = r + " m";
      setMD(read.querySelector("p"), `**Watered circle:** π × ${r} × ${r} ≈ **${circHa.toFixed(1)} ha**\n\n**Square paddock** (${2*r} m each side): **${sqHa.toFixed(1)} ha**\n\n**Missed corners:** **${miss.toFixed(1)} ha** (about **21%**, whatever the size!)\n\n**Towers:** about ${towers}, one every ~${SPAN} m.\n\n` + (showC ? "The dry corners can be used for **shelter trees, a corner arm, or sprinklers**." : "Press **Show corners**."));
    }
    function spin(){ cancelAnimationFrame(raf); let last = performance.now(); ang = 0; const tick = t => { ang += (t - last)*.0016; last = t; if (ang >= 2*Math.PI){ ang = 2*Math.PI - .001; draw(); return; } draw(); raf = requestAnimationFrame(tick); }; raf = requestAnimationFrame(tick); BM.sfx("tok"); }
    controls(host, [btn("Show corners", () => { showC = !showC; draw(); }, "dark"), btn("Spin", spin, "on")]);
    draw();
    return { steps:3, step(i){ if (i === 1) spin(); if (i === 2){ showC = true; draw(); } if (i === 3){ r = 200; rR.value = 200; draw(); } if (i === 0){ r = 400; rR.value = 400; showC = false; ang = 0; draw(); } }, destroy(){ cancelAnimationFrame(raf); } };
  };

  /* =======================================================
     WET-ON-WET — paint on wet or dry paper; colours bloom and
     spread on wet paper; lift out the nor'west arch (Fri W5)
     ======================================================= */
  IX.wetonwet = function(host){
    const W = 1100, H = 640;
    const c = h("canvas", { width:W, height:H, style:{ position:"absolute", left:"0", top:"0", width:W + "px", height:H + "px", borderRadius:"12px", touchAction:"none", cursor:"crosshair", boxShadow:"var(--sh-3)" } });
    host.appendChild(c);
    const g = c.getContext("2d");
    const PAPER = "#f6f1e4";
    const COLS = [{ n:"Ultramarine", c:"#2f4fa2" }, { n:"Cerulean", c:"#3d8db3" }, { n:"Payne's grey", c:"#3b4950" }, { n:"Burnt sienna", c:"#a0522d" }, { n:"Yellow ochre", c:"#c9a04a" }];
    let col = 0, wet = false, blooms = [], raf = 0, down = false, wetT = 0;
    function clear(){ g.globalCompositeOperation = "source-over"; g.fillStyle = PAPER; g.fillRect(0, 0, W, H); }
    function blob(x, y, rad, alpha, colour){
      const gr = g.createRadialGradient(x, y, 0, x, y, rad);
      gr.addColorStop(0, hexA(colour, alpha)); gr.addColorStop(.7, hexA(colour, alpha*.5)); gr.addColorStop(1, hexA(colour, 0));
      g.fillStyle = gr; g.beginPath(); g.arc(x, y, rad, 0, Math.PI*2); g.fill();
    }
    function hexA(hx, a){ const n = parseInt(hx.slice(1), 16); return `rgba(${n >> 16},${(n >> 8) & 255},${n & 255},${a})`; }
    const toPt = e => { const r = c.getBoundingClientRect(); return [(e.clientX - r.left)/r.width*W, (e.clientY - r.top)/r.height*H]; };
    function paint(x, y){
      if (wet){ blob(x, y, 46, .10, COLS[col].c); if (Math.random() < .35) blooms.push({ x:x + (Math.random() - .5)*30, y:y + (Math.random() - .5)*30, r:30, a:.05, c:COLS[col].c, life:60 }); }
      else blob(x, y, 14, .35, COLS[col].c);
    }
    c.addEventListener("pointerdown", e => { stop(e); down = true; c.setPointerCapture(e.pointerId); const [x, y] = toPt(e); paint(x, y); });
    c.addEventListener("pointermove", e => { if (!down) return; const [x, y] = toPt(e); paint(x, y); });
    c.addEventListener("pointerup", e => { stop(e); down = false; });
    c.addEventListener("click", stop);
    function loop(){
      blooms = blooms.filter(b => b.life > 0);
      blooms.forEach(b => { b.r += 1.4; b.life--; blob(b.x, b.y, b.r, b.a*(b.life/60), b.c); });
      if (wet && performance.now() - wetT > 45000) setWet(false);
      raf = requestAnimationFrame(loop);
    }
    function setWet(on){
      wet = on; if (on){ wetT = performance.now(); g.fillStyle = "rgba(200,220,235,.12)"; g.fillRect(0, 0, W, H); }
      wB.classList.toggle("on", wet); wB.textContent = wet ? "💧 Paper is wet" : "Wet the paper";
      setMD(tip.querySelector("p"), wet ? "**Wet paper:** colours **spread and bloom** with soft edges. Perfect for skies. It dries in about 45 seconds." : "**Dry paper:** marks stay **crisp** with hard edges. Good for mountains and fences.");
    }
    function wash(){
      setWet(true);
      for (let y=0;y<H*.75;y+=12){ const a = .16*(1 - y/(H*.75)); for (let x=0;x<=W;x+=40) blob(x, y, 50, a, COLS[col].c); }
      BM.sfx("paper");
    }
    function liftArch(){
      g.save(); g.globalCompositeOperation = "source-over";
      for (let i=0;i<=60;i++){ const t = i/60, x = t*W, y = 300 - Math.sin(t*Math.PI)*120; const gr = g.createRadialGradient(x, y, 0, x, y, 60); gr.addColorStop(0, "rgba(246,241,228,.55)"); gr.addColorStop(1, "rgba(246,241,228,0)"); g.fillStyle = gr; g.beginPath(); g.arc(x, y, 60, 0, Math.PI*2); g.fill(); }
      g.restore(); BM.sfx("paper");
    }
    function mountains(){
      const was = wet; wet = false;
      g.fillStyle = hexA("#3b4950", .85); g.beginPath(); g.moveTo(0, H);
      const rnd = BM.rng(17); for (let x=0;x<=W + 29;x+=30) g.lineTo(x, 470 - Math.abs(Math.sin(x/120))*90 - rnd()*30); g.lineTo(W, H); g.closePath(); g.fill();
      wet = was;
    }
    const sw = COLS.map((k, i) => { const b = h("button", { class:"ixbtn dark", style:{ minHeight:"44px", padding:"6px 10px", fontSize:"17px", borderLeft:`18px solid ${k.c}` }, onclick:e => { stop(e); col = i; sw.forEach((x, j) => x.classList.toggle("on", j === i)); } }, k.n); return b; });
    sw[0].classList.add("on");
    const wB = btn("Wet the paper", () => setWet(!wet), "dark");
    const tip = panel({ left:"1130px", right:"0", top:"0", bottom:"0" }, [h("h4", { style:{ fontSize:"30px" } }, "Colours"), h("div", { style:{ display:"flex", flexDirection:"column", gap:"6px", margin:"6px 0 14px" } }, sw), h("p", { style:{ fontSize:"21px" } })]);
    host.appendChild(tip);
    controls(host, [btn("Clear", () => { clear(); blooms = []; }, "dark"), wB, btn("Graded wash", wash, "dark"), btn("Lift the arch", liftArch, "dark"), btn("Mountains", mountains, "on")]);
    clear(); setWet(false); loop();
    return { steps:3, step(i){ if (i === 0){ clear(); setWet(false); } if (i === 1){ col = 0; wash(); } if (i === 2) liftArch(); if (i === 3) mountains(); }, destroy(){ cancelAnimationFrame(raf); } };
  };
})(window.BM);
