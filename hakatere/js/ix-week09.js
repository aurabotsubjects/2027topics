/* ==========================================================
   INTERACTIVES — Week 9 (Map Sheet IX · Making It Right)
   claimtimeline · snowmelt · findsouth · harvestcounter · triptych
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
     A CLAIM THROUGH TIME — 1848 to 1998 (Mon W9)
     ======================================================= */
  IX.claimtimeline = function(host){
    const W = 1100, H = 640, X0 = 60, X1 = 1040, YR0 = 1840, YR1 = 2000;
    const v = svg(W, H, { style:"position:absolute;left:0;top:0;width:1100px;height:640px;border-radius:12px" });
    v.appendChild(s("rect", { width:W, height:H, rx:12, fill:"#f6f1e4" }));
    v.appendChild(s("rect", { width:W, height:H, fill:"url(#p-grid)", opacity:.4 }));
    const fx = y => X0 + (y - YR0)/(YR1 - YR0)*(X1 - X0);
    v.appendChild(s("line", { x1:X0, y1:330, x2:X1, y2:330, stroke:"#1F2A30", "stroke-width":5 }));
    for (let y=1850;y<=2000;y+=25){ v.appendChild(s("line", { x1:fx(y), y1:320, x2:fx(y), y2:340, stroke:"#1F2A30", "stroke-width":3 })); v.appendChild(T(fx(y), 370, String(y), { "text-anchor":"middle", "font-size":17 })); }
    const gens = s("g"); for (let k=0;k<7;k++){ const x = fx(1848 + k*21.4); gens.appendChild(s("text", { x:x + 40, y:440, "text-anchor":"middle", "font-size":34 }, "👤")); }
    gens.appendChild(T(fx(1848), 480, "About seven generations kept the claim alive", { "font-size":19, "font-style":"italic" }));
    v.appendChild(gens);
    const EV = [
      [1848, "Kemp's Deed", "16 Ngāi Tahu chiefs sign at Akaroa. Promises are made about reserves and mahika kai (Week 4)."],
      [1849, "Tiramōrehu's letter", "On **22 October 1849**, the rangatira **Matiaha Tiramōrehu** writes to Lieutenant-Governor Eyre: the reserves are **too small**, and the promised land, payments, **schools, hospitals** and **mahinga kai** must be provided. Ngāi Tahu call it the **first formal statement** of their grievances."],
      [1877, "Local reserves", "The **Rakaia and Ashburton Māori Reserves** are allocated to Kaiapoi Kāi Tahu (Arowhenua narrative): nearly 30 years after the promise."],
      [1944, "A first ‘settlement’", "The **Ngaitahu Claim Settlement Act** gives yearly payments. Ngāi Tahu were **not consulted**, and they keep pressing the claim."],
      [1970, "Hakatere Marae", "**Hakatere Marae** is set up in Ashburton, in the former **Fairton school** building (Arowhenua narrative)."],
      [1986, "To the Tribunal", "**Rakiihia Tau** files the claim with the **Waitangi Tribunal** in nine parts, the **‘Nine Tall Trees’**."],
      [1991, "The Tribunal reports", "The Tribunal finds the Crown acted **‘unconscionably’** and in repeated breach of the Treaty, and recommends compensation."],
      [1998, "Settlement & apology", "A **Deed of Settlement** and the **Ngāi Tahu Claims Settlement Act 1998**. The Crown **apologises**, at **Ōnuku Marae** on 29 November 1998. Compensation is valued at **$170 million**; ownership of **pounamu** is confirmed; **Aoraki** is symbolically returned."]
    ];
    const marks = EV.map(([y, t], i) => { const g = s("g", { style:"cursor:pointer" }); const x = fx(y); g.appendChild(s("line", { x1:x, y1:330, x2:x, y2:i === 1 ? 180 : (i % 2 ? 250 : 210), stroke:"#B4412F", "stroke-width":3 })); g.appendChild(s("circle", { cx:x, cy:330, r:11, fill:"#B4412F" })); g.appendChild(T(x + (i === 1 ? 14 : i === 0 ? -14 : 0), i === 1 ? 170 : (i % 2 ? 240 : 200), String(y), { "text-anchor":"middle", "font-size":20, "font-weight":700 })); g.addEventListener("click", e => { stop(e); go(i); }); v.appendChild(g); return g; });
    const bar = s("line", { x1:fx(1848), y1:330, x2:fx(1848), y2:330, stroke:"#2C6F92", "stroke-width":9, "stroke-linecap":"round", style:"transition:all .6s" });
    v.insertBefore(bar, marks[0]);
    host.appendChild(v);
    let i = 0;
    const read = panel({ left:"1130px", right:"0", top:"0", bottom:"0" }, [h("h4", { class:"ct", style:{ fontSize:"32px" } }), h("p", { style:{ fontSize:"22px" } }), h("p", { class:"cy", style:{ fontSize:"19px", marginTop:"14px", color:"#2C6F92" } })]);
    host.appendChild(read);
    function go(k){
      i = k; BM.sfx("paper");
      const [y, t, d] = EV[i];
      bar.setAttribute("x2", fx(y));
      marks.forEach((m, j) => m.setAttribute("opacity", j <= i ? 1 : .35));
      read.querySelector(".ct").textContent = `${y} · ${t}`;
      setMD(read.querySelector("p"), d);
      setMD(read.querySelector(".cy"), `**${y - 1848} years** since Kemp's Deed.`);
    }
    controls(host, [btn("◂ Back", () => go(Math.max(0, i - 1)), "dark"), btn("Next ▸", () => go(Math.min(EV.length - 1, i + 1)), "on")]);
    go(0);
    return { steps:EV.length - 1, step(k){ go(k); } };
  };

  /* =======================================================
     SNOWMELT — mountain snow and ice feed the river (Tue W9)
     A simple model: warming shrinks the snowpack and moves the melt earlier.
     ======================================================= */
  IX.snowmelt = function(host){
    const W = 1100, H = 640;
    const v = svg(W, H, { style:"position:absolute;left:0;top:0;width:1100px;height:640px;border-radius:12px" });
    v.appendChild(s("rect", { width:W, height:H, rx:12, fill:"#cfe1e8" }));
    const mtn = A.range(W, 340, 250, 160, 91, "#8a958f", {}); v.appendChild(mtn);
    const snow = s("path", { fill:"#f4f6f4" }); v.appendChild(snow);
    const glacier = s("path", { fill:"#BFE0EA", stroke:"#8fb8c8", "stroke-width":2 }); v.appendChild(glacier);
    // the flow graph
    const GX = 80, GY = 600, GW = 940, GH = 220;
    v.appendChild(s("rect", { x:GX - 20, y:GY - GH - 30, width:GW + 40, height:GH + 60, rx:10, fill:"#F3ECDD" }));
    const M = ["J","F","M","A","M","J","J","A","S","O","N","D"];
    M.forEach((m, i) => v.appendChild(T(GX + i*GW/11, GY + 24, m, { "text-anchor":"middle", "font-size":16 })));
    v.appendChild(T(GX, GY - GH - 8, "Snowmelt in the river through the year (model)", { "font-size":17, "font-weight":700 }));
    const now = s("polyline", { fill:"none", stroke:"#2C6F92", "stroke-width":5 }), base = s("polyline", { fill:"none", stroke:"#a7a59c", "stroke-width":3, "stroke-dasharray":"6 6" });
    v.append(base, now);
    host.appendChild(v);
    let warm = 0;
    const wR = range(0, 3, 0, "#B4412F", n => { warm = n; draw(); });
    const ctl = panel({ left:"1130px", right:"0", top:"0" }, [lab("Warming (°C)"), wR, h("h4", { class:"wv", style:{ fontSize:"30px", marginTop:"4px" } })]);
    const read = panel({ left:"1130px", right:"0", top:"180px", bottom:"0" }, [h("p", { style:{ fontSize:"21px" } })]);
    host.append(ctl, read);
    const melt = (mo, w) => { const peak = 10.5 - w*.8, size = 1 - w*.22; const d = Math.min(Math.abs(mo - peak), 12 - Math.abs(mo - peak)); return size*Math.exp(-d*d/3.5); };
    const line = w => { const p = []; for (let k=0;k<=110;k++){ const mo = k/10; p.push(`${GX + mo*GW/11},${GY - melt(mo, w)*GH*.9}`); } return p.join(" "); };
    function draw(){
      const line0 = 250 + warm*28;
      snow.setAttribute("d", `M${120 + warm*40} ${line0} L550 ${150 + warm*10} L${980 - warm*40} ${line0} Z`);
      glacier.setAttribute("d", `M520 ${200 + warm*10} C 540 ${260 + warm*15}, 560 ${300 - warm*10}, 590 ${320 - warm*30} L620 ${320 - warm*30} C 600 ${280 + warm*5}, 580 ${240 + warm*8}, 580 ${200 + warm*10}Z`);
      base.setAttribute("points", line(0)); now.setAttribute("points", line(warm));
      ctl.querySelector(".wv").textContent = warm ? `+${warm}°C` : "Today";
      setMD(read.querySelector("p"), warm === 0
        ? "Winter **snow** and **glacier ice** store water in the mountains. In spring and summer they **melt** and feed rivers like the Hakatere, whose branches drain the foothills and the **Arrowsmith Range**.\n\nNIWA has photographed our glaciers every year since **1977**."
        : `In this **model**, a warmer climate means **less snow**, **earlier melt**, and a **shrinking glacier**, so **less water** in late summer, when farms need it most.\n\nNIWA estimates New Zealand's glaciers have lost at least **13 trillion litres** of water since the late 1970s.`);
    }
    controls(host, [btn("Today", () => { warm = 0; wR.value = 0; draw(); }, "dark"), btn("Warmer +1", () => { warm = Math.min(3, warm + 1); wR.value = warm; BM.sfx("tok"); draw(); }, "on")]);
    draw();
    return { steps:3, step(k){ warm = k; wR.value = k; draw(); } };
  };

  /* =======================================================
     FIND SOUTH — use the Southern Cross and Pointers (Wed W9)
     ======================================================= */
  IX.findsouth = function(host){
    const W = 1100, H = 640, HZ = 560;
    const v = svg(W, H, { style:"position:absolute;left:0;top:0;width:1100px;height:640px;border-radius:12px;cursor:crosshair" });
    v.appendChild(s("rect", { width:W, height:H, rx:12, fill:"#0f1822" }));
    v.appendChild(A.stars(W, HZ, 61, 160));
    v.appendChild(A.range(W, H, 590, 40, 5, "#05090d", {}));
    v.appendChild(T(530, 625, "S", { fill:"#E6C873", "font-size":22, "font-weight":700, "text-anchor":"middle" }));
    const sky = s("g"), guide = s("g"), mark = s("g");
    v.append(sky, guide, mark);
    host.appendChild(v);
    let round = 0, ang = 0, pole = [530, 300], show = 0;
    const read = panel({ left:"1130px", right:"0", top:"0", bottom:"0" }, [h("h4", { class:"ft", style:{ fontSize:"30px" } }), h("p", { style:{ fontSize:"21px" } })]);
    host.appendChild(read);
    function layout(){
      const r = BM.rng(11 + round); ang = round === 0 ? -20 : (r() - .5)*160; pole = [450 + r()*160, 260 + r()*60];
      const rot = p => { const a = ang*Math.PI/180, dx = p[0], dy = p[1]; return [pole[0] + dx*Math.cos(a) - dy*Math.sin(a), pole[1] + dx*Math.sin(a) + dy*Math.cos(a)]; };
      // cross: long axis points to the pole; head (top) is far end
      const cross = { top:rot([0,-330]), foot:rot([0,-270]), l:rot([-24,-302]), rr:rot([24,-302]), eps:rot([9,-284]) };
      const ptrs = [rot([-119.5,-214.3]), rot([-160.5,-185.7])];   // their perpendicular bisector passes through the pole
      return { cross, ptrs, rot };
    }
    let G = layout();
    function draw(){
      BM.clear(sky); BM.clear(guide); BM.clear(mark);
      const c = G.cross;
      [c.top, c.foot, c.l, c.rr].forEach(p => sky.appendChild(s("circle", { cx:p[0], cy:p[1], r:7, fill:"#e8eeff" })));
      sky.appendChild(s("circle", { cx:c.eps[0], cy:c.eps[1], r:3.5, fill:"#e8eeff" }));
      G.ptrs.forEach(p => sky.appendChild(s("circle", { cx:p[0], cy:p[1], r:7, fill:"#ffe9c8" })));
      if (show >= 1){ sky.appendChild(s("line", { x1:c.top[0], y1:c.top[1], x2:c.foot[0], y2:c.foot[1], stroke:"#E6C873", "stroke-width":2 })); sky.appendChild(s("line", { x1:c.l[0], y1:c.l[1], x2:c.rr[0], y2:c.rr[1], stroke:"#E6C873", "stroke-width":2 })); sky.appendChild(T(c.top[0] + 14, c.top[1], "Southern Cross", { fill:"#E6C873", "font-size":18 })); sky.appendChild(T(G.ptrs[0][0] - 10, G.ptrs[0][1] + 28, "Pointers", { fill:"#ffe9c8", "font-size":18 })); }
      if (show >= 2){ const L = [c.top[0] + (c.foot[0] - c.top[0])*5.5, c.top[1] + (c.foot[1] - c.top[1])*5.5]; guide.appendChild(s("line", { x1:c.foot[0], y1:c.foot[1], x2:L[0], y2:L[1], stroke:"#E6C873", "stroke-width":2, "stroke-dasharray":"8 8" })); }
      if (show >= 3){ const m = [(G.ptrs[0][0] + G.ptrs[1][0])/2, (G.ptrs[0][1] + G.ptrs[1][1])/2]; guide.appendChild(s("line", { x1:G.ptrs[0][0], y1:G.ptrs[0][1], x2:G.ptrs[1][0], y2:G.ptrs[1][1], stroke:"#ffe9c8", "stroke-width":2 })); guide.appendChild(s("line", { x1:m[0], y1:m[1], x2:m[0] + (pole[0] - m[0])*1.15, y2:m[1] + (pole[1] - m[1])*1.15, stroke:"#ffe9c8", "stroke-width":2, "stroke-dasharray":"8 8" })); }
      if (show >= 4){ guide.appendChild(s("circle", { cx:pole[0], cy:pole[1], r:14, fill:"none", stroke:"#B4412F", "stroke-width":4 })); guide.appendChild(s("line", { x1:pole[0], y1:pole[1], x2:pole[0], y2:HZ, stroke:"#B4412F", "stroke-width":3, "stroke-dasharray":"6 6" })); guide.appendChild(T(pole[0] + 16, pole[1] + 6, "south celestial pole", { fill:"#ffb3a3", "font-size":18 })); guide.appendChild(T(pole[0] + 10, HZ - 10, "↓ SOUTH", { fill:"#ffb3a3", "font-size":22, "font-weight":700 })); }
      const STEP = [
        "**Find the Southern Cross**: **four bright stars** in a kite-shaped cross, with a fainter **fifth** star. Nearby are two bright **Pointers**.",
        "Here they are. The Cross is visible **all year** from Aotearoa, which is why navigators used it.",
        "**Step 1:** follow the **long arm** of the Cross out from its foot, about **four and a half** times its length.",
        "**Step 2:** draw a line **between the Pointers**, then go out from its middle at right angles. Where the two lines meet is the **south celestial pole**.",
        "**Step 3:** drop **straight down** to the horizon. That's **south**! Tap **New sky** to practise: the Cross is in a different place every hour and every season."
      ];
      read.querySelector(".ft").textContent = round ? `Practice sky ${round}` : "Find south";
      setMD(read.querySelector("p"), STEP[show]);
    }
    v.addEventListener("click", e => { stop(e); const r = v.getBoundingClientRect(), x = (e.clientX - r.left)/r.width*W, y = (e.clientY - r.top)/r.height*H; const d = Math.hypot(x - pole[0], y - pole[1]); BM.clear(mark); mark.appendChild(s("circle", { cx:x, cy:y, r:10, fill:"#3D8DB3" })); BM.sfx(d < 60 ? "ok" : "no"); if (d < 60){ show = 4; draw(); mark.appendChild(s("circle", { cx:x, cy:y, r:10, fill:"#3D8DB3" })); } else mark.appendChild(T(x + 14, y, "Not quite. Try the steps!", { fill:"#cfe0ff", "font-size":18 })); });
    controls(host, [btn("New sky", () => { round++; show = 1; G = layout(); BM.sfx("chime"); draw(); }, "dark"), btn("Next step ▸", () => { show = Math.min(4, show + 1); draw(); }, "on")]);
    draw();
    return { steps:4, step(k){ show = k; draw(); } };
  };

  /* =======================================================
     HARVEST COUNTER — variables and a test table (Thu W9)
     ======================================================= */
  IX.harvestcounter = function(host){
    const W = 700, H = 640;
    const v = svg(W, H, { style:"position:absolute;left:0;top:0;width:700px;height:640px;border-radius:12px" });
    v.appendChild(s("rect", { width:W, height:H, rx:12, fill:"#e6c873" }));
    v.appendChild(s("rect", { x:0, y:400, width:W, height:60, fill:"#4B5357" }));
    v.appendChild(s("rect", { x:330, y:300, width:40, height:100, fill:"#B4412F" })); v.appendChild(T(350, 290, "sensor", { "text-anchor":"middle", "font-size":18 }));
    const bales = s("g"); v.appendChild(bales);
    const disp = s("g", { transform:"translate(40 40)" });
    disp.appendChild(s("rect", { width:260, height:90, rx:14, fill:"#F3ECDD", stroke:"#1F2A30", "stroke-width":3 }));
    disp.appendChild(T(20, 34, "bales", { "font-size":22, "font-weight":700 }));
    const val = T(20, 76, "0", { "font-size":40, "font-weight":700 }); disp.appendChild(val);
    v.appendChild(disp);
    host.appendChild(v);
    let count = 0, buggy = false, rows = [], timer = 0;
    const code = h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", letterSpacing:".04em", textTransform:"uppercase", fontSize:"19px" } });
    const tbl = h("div", { style:{ fontSize:"18px", marginTop:"8px" } });
    const p = panel({ left:"730px", right:"0", top:"0", bottom:"0" }, [h("h4", { style:{ fontSize:"26px" } }, "Program"), code, h("h4", { style:{ fontSize:"24px", marginTop:"12px" } }, "Test table"), tbl]);
    host.appendChild(p);
    const blk = (t, col, ind) => `<div style="background:${col};color:#fff;border-radius:10px;padding:6px 12px;margin:4px 0 4px ${ind*26}px">${t}</div>`;
    function renderCode(){ code.innerHTML = blk("when ▶ clicked", "#c9842a", 0) + blk("set bales to 0", "#d9822a", 1) + blk("when sensor sees a bale", "#c9842a", 0) + (buggy ? blk("set bales to 0", "#d9822a", 1) : "") + blk("change bales by 1", "#d9822a", 1); }
    function bale(){ count = buggy ? 1 : count + 1; val.textContent = count; const b = s("rect", { x:-80, y:350, width:70, height:50, rx:6, fill:"#d9b65a", stroke:"#8a6a2a", "stroke-width":3 }); bales.appendChild(b); b.animate && b.animate([{ transform:"translateX(0)" }, { transform:"translateX(860px)" }], { duration:900, fill:"forwards" }); setTimeout(() => b.remove(), 950); BM.sfx("tok"); }
    function test(n){ clearInterval(timer); count = 0; val.textContent = 0; let k = 0; timer = setInterval(() => { if (k >= n){ clearInterval(timer); rows.unshift([n, n, count]); rows = rows.slice(0, 5); renderRows(); BM.sfx(count === n ? "ok" : "no"); return; } bale(); k++; }, 260); }
    function renderRows(){ BM.clear(tbl); tbl.appendChild(h("div", { style:{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr 40px", fontWeight:"700" } }, ...["Bales in", "Expect", "Got", ""].map(x => h("span", null, x)))); rows.forEach(([a, b, c]) => tbl.appendChild(h("div", { style:{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr 40px" } }, ...[String(a), String(b), String(c), b === c ? "✅" : "❌"].map(x => h("span", null, x))))); }
    controls(host, [btn("Reset", () => { clearInterval(timer); count = 0; val.textContent = 0; }, "dark"), btn("+ 1 bale", bale, "dark"), btn("🐞 Buggy", () => { buggy = !buggy; renderCode(); }, "dark"), btn("Test 3", () => test(3), "dark"), btn("Test 12", () => test(12), "on")]);
    renderCode(); renderRows();
    return { steps:3, step(k){ if (k === 1) test(3); if (k === 2) test(12); if (k === 3){ buggy = true; renderCode(); test(3); } if (k === 0){ buggy = false; renderCode(); rows = []; renderRows(); count = 0; val.textContent = 0; } }, destroy(){ clearInterval(timer); } };
  };

  /* =======================================================
     TRIPTYCH PLANNER — Land · River · Sky (Fri W9)
     ======================================================= */
  IX.triptych = function(host){
    const PW = 340, PH = 520;
    const TECH = {
      land:[["Layered paper", "Week 3"], ["Flat colour", "Week 2"], ["Patchwork collage", "Week 8"], ["Sketch & tone", "Week 1"]],
      river:[["Line & pattern", "Week 4"], ["Earth pigments", "Week 6"], ["Collage", "Week 8"], ["Sketch & tone", "Week 1"]],
      sky:[["Wet-on-wet", "Week 5"], ["Relief print", "Week 7"], ["Flat colour", "Week 2"], ["Layered paper", "Week 3"]]
    };
    const pick = { land:0, river:0, sky:0 };
    const panels = ["land","river","sky"].map((k, i) => { const v = svg(PW, PH, { style:`position:absolute;left:${i*(PW + 20)}px;top:0;width:${PW}px;height:${PH}px;border-radius:8px;box-shadow:var(--sh-3);cursor:pointer` }); v.addEventListener("click", e => { stop(e); pick[k] = (pick[k] + 1) % 4; BM.sfx("tok"); draw(); }); host.appendChild(v); return v; });
    const labels = ["LAND","RIVER","SKY"].map((t, i) => { const d = h("div", { style:{ position:"absolute", left:i*(PW + 20) + "px", top:(PH + 10) + "px", width:PW + "px", textAlign:"center", fontFamily:"var(--f-label)", fontWeight:"900", letterSpacing:".12em", fontSize:"20px", color:"var(--cacao-ink, #1F2A30)" } }); host.appendChild(d); return d; });
    function paint(v, k, t){
      BM.clear(v); const add = n => v.appendChild(n);
      add(s("rect", { width:PW, height:PH, fill:"#f6f1e4" }));
      if (k === "land"){
        if (t === 0) add(A.mountains(PW, PH, 4, ["#dfe6e8","#b9c4c8","#8a958f","#5b666b","#2f3a3e"], { top:180, bottom:460 }));
        if (t === 1){ add(s("rect", { y:260, width:PW, height:260, fill:"#c9a04a" })); add(A.range(PW, PH, 260, 120, 2, "#2C6F92", {})); add(s("rect", { y:400, width:PW, height:120, fill:"#7FA55A" })); }
        if (t === 2){ const r = BM.rng(5); for (let y=0;y<PH;y+=70) for (let x=0;x<PW;x+=85) add(s("rect", { x:x + r()*8, y:y + r()*8, width:80, height:66, fill:["#c9a04a","#7FA55A","#e6c873","#5E7F3A"][Math.floor(r()*4)] })); }
        if (t === 3){ add(A.range(PW, PH, 300, 140, 7, "#9aa3a3", {})); for (let i=0;i<40;i++) add(s("line", { x1:i*9, y1:300, x2:i*9 - 20, y2:520, stroke:"#4B5357", "stroke-width":1, opacity:.5 })); }
      } else if (k === "river"){
        if (t === 0){ add(s("rect", { width:PW, height:PH, fill:"#efe6cf" })); add(A.braids([[170,-20],[120,200],[220,380],[160,540]], { seed:3, w0:40, w1:60, threads:5, color:"#1F4E6B", sw:4, bedOpacity:.5 })); }
        if (t === 1){ add(s("rect", { width:PW, height:PH, fill:"#d9c9a6" })); [[80,120],[220,200],[120,330],[240,420]].forEach(([x,y]) => add(s("circle", { cx:x, cy:y, r:30, fill:"none", stroke:"#8a2f22", "stroke-width":8 }))); add(s("path", { d:"M20 480 q80 -40 160 0 t160 0", stroke:"#1F2A30", "stroke-width":10, fill:"none" })); }
        if (t === 2){ add(s("rect", { width:PW, height:PH, fill:"#a7a59c" })); for (let i=0;i<6;i++) add(s("path", { d:`M${40 + i*50} 0 C ${i*60} 200, ${80 + i*40} 320, ${30 + i*55} 520`, stroke:"#3D8DB3", "stroke-width":14 - i, fill:"none" })); }
        if (t === 3){ add(A.braids([[170,-20],[150,260],[180,540]], { seed:8, w0:30, w1:50, threads:3, color:"#4B5357", sw:2, bedColor:"#c9c2b0", bedOpacity:.6 })); }
      } else {
        if (t === 0){ for (let y=0;y<PH;y+=4) add(s("rect", { y, width:PW, height:4, fill:`rgba(47,79,162,${.75 - y/PH*.7})` })); add(s("path", { d:`M0 260 C 100 170, 240 170, 340 260`, stroke:"#f6f1e4", "stroke-width":30, fill:"none", opacity:.8 })); }
        if (t === 1){ add(s("rect", { width:PW, height:PH, fill:"#1d2a4a" })); const r = BM.rng(9); for (let i=0;i<30;i++){ const x = 20 + r()*300, y = 20 + r()*360; add(s("path", { d:`M${x - 6} ${y} h12 M${x} ${y - 6} v12`, stroke:"#f6f1e4", "stroke-width":3 })); } add(s("path", { d:"M0 440 L80 400 L170 430 L260 390 L340 420 L340 520 L0 520Z", fill:"#f6f1e4" })); }
        if (t === 2){ add(s("rect", { width:PW, height:PH, fill:"#2C6F92" })); add(s("circle", { cx:240, cy:140, r:50, fill:"#E6C873" })); add(s("rect", { y:430, width:PW, height:90, fill:"#c9a04a" })); }
        if (t === 3){ add(A.mountains(PW, PH, 2, ["#1d2a4a","#2c3e66","#3d5585"], { top:300, bottom:460, snowLayers:0 })); add(A.stars(PW, 280, 4, 60)); }
      }
    }
    function draw(){
      ["land","river","sky"].forEach((k, i) => { paint(panels[i], k, pick[k]); labels[i].textContent = `${k.toUpperCase()} · ${TECH[k][pick[k]][0]} (${TECH[k][pick[k]][1]})`; });
      setMD(note.querySelector("p"), `**My Place triptych.** Tap a panel to try another technique.\n\n**Artist statement starters:**\n\n*My triptych shows… In the Land panel I used ${TECH.land[pick.land][0].toLowerCase()} to… The River panel shows… because… The Sky panel… I want viewers to feel…*`);
    }
    const note = panel({ left:"1100px", right:"0", top:"0", bottom:"0" }, [h("p", { style:{ fontSize:"20px" } })]);
    host.appendChild(note);
    draw();
    return { steps:3, step(k){ if (k) { pick.land = k % 4; pick.river = (k + 1) % 4; pick.sky = (k + 2) % 4; } else { pick.land = pick.river = pick.sky = 0; } draw(); } };
  };
})(window.BM);
