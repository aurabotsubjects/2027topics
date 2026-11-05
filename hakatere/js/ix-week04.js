/* ==========================================================
   INTERACTIVES — Week 4 (Map Sheet IV · The Deed)
   promises · braidmaker · orbittilt · pulleylab · aerialbraid
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
     PROMISES vs REALITY — Kemp's Deed reserves (Mon W4)
     Left: what was promised (about 10 acres a person).
     Right: what Mantell surveyed (under 4 acres a person).
     Step 3: Hakatere — no reserves surveyed; mahika kai not protected.
     ======================================================= */
  IX.promises = function(host){
    const W = 1100, H = 640, MW = 530;
    const v = svg(W, H, { style:"position:absolute;left:0;top:0;width:1100px;height:640px" });
    host.appendChild(v);
    let people = 60, stage = 0;
    const sides = [0, 1].map(k => {
      const g = s("g", { transform:`translate(${k*(MW + 40)} 0)` });
      g.appendChild(s("rect", { width:MW, height:H, rx:12, fill: k ? "#e4dccb" : "#efe6cf" }));
      g.appendChild(s("rect", { width:MW, height:H, rx:12, fill:"url(#p-grid)", opacity:.6 }));
      g.appendChild(A.range(MW, H, 120, 70, 41, "#b9c2c4", { snow:"#f4f6f4", peaks:4 }));
      g.appendChild(s("rect", { y:118, width:MW, height:H - 118, fill: k ? "#e4dccb" : "#efe6cf" }));
      g.appendChild(A.braids([[90,110],[170,260],[250,420],[300,660]], { seed:44, w0:16, w1:34, color:"#3D8DB3", opacity:.75, sw:3, bedColor:"#b3ad9c", bedOpacity:.5 }));
      g.appendChild(s("text", { x:MW/2, y:48, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":34, "letter-spacing":"3", fill: k ? "#B4412F" : "#2C6F92" }, k ? "WHAT WAS SURVEYED" : "WHAT WAS PROMISED"));
      v.appendChild(g);
      return g;
    });
    // kāika with reserves (square area ∝ acres)
    const KA = [{ x:120, y:560, n:"Coast kāika" }, { x:400, y:470, n:"River kāika" }, { x:330, y:250, n:"Hakatere (inland)", inland:true }];
    const blocks = sides.map((g, k) => KA.map(kk => {
      const r = s("rect", { fill: k ? "#B4412F" : "#2C6F92", opacity:.55, stroke:"#1F2A30", "stroke-width":2, style:"transition:all .9s cubic-bezier(.2,.8,.2,1)" });
      const t = s("text", { x:kk.x, y:kk.y + 6, "text-anchor":"middle", "font-family":"Atkinson Hyperlegible", "font-weight":700, "font-size":20, fill:"#1F2A30" }, kk.n);
      g.append(r, t);
      return { r, t, kk };
    }));
    // mahika kai marks (eel and bird) near Hakatere
    const kaiMarks = sides.map((g, k) => {
      const m = s("g", { opacity:0, style:"transition:opacity .6s" });
      [[220,200,"🐟"],[430,210,"🪶"],[260,330,"🐟"]].forEach(([x,y,e]) => m.appendChild(s("text", { x, y, "font-size":34, "text-anchor":"middle" }, e)));
      if (k){ [[220,200],[430,210],[260,330]].forEach(([x,y]) => m.appendChild(s("path", { d:`M${x-22} ${y-30} l44 40 M${x+22} ${y-30} l-44 40`, stroke:"#B4412F", "stroke-width":5, "stroke-linecap":"round" }))); }
      m.appendChild(s("rect", { x:20, y:72, width:MW - 40, height:38, rx:6, fill:"#F3ECDD", opacity:.92 }));
      m.appendChild(s("text", { x:MW/2, y:99, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":22, fill: k ? "#B4412F" : "#2C6F92", "letter-spacing":"2" }, k ? "NO RESERVE · MAHIKA KAI NOT PROTECTED" : "RESERVES + MAHIKA KAI KEPT"));
      g.appendChild(m);
      return m;
    });
    const cover = s("g", { style:"transition:opacity .6s" });
    cover.appendChild(s("rect", { x:MW + 40, width:MW, height:H, rx:12, fill:"#1F2A30", opacity:.88 }));
    cover.appendChild(s("text", { x:MW + 40 + MW/2, y:H/2, "text-anchor":"middle", "font-family":"Fraunces", "font-size":120, fill:"#F3ECDD" }, "?"));
    v.appendChild(cover);
    const info = panel({ left:"1130px", right:"0", top:"0" }, [h("h4", { style:{ fontSize:"32px" } }, "People in each kāika"), range(20, 150, 60, "#B4412F", n => { people = n; draw(); }), h("p", { class:"pv", style:{ fontSize:"26px", marginTop:"6px" } })]);
    const read = panel({ left:"1130px", right:"0", top:"230px", bottom:"0" }, [h("p")]);
    host.append(info, read);
    const side = a => Math.sqrt(a)*5.2;
    function draw(){
      info.querySelector(".pv").textContent = people + " people";
      blocks.forEach((row, k) => row.forEach(b => {
        let acres = people*(k ? 3.8 : 10);
        if (k && b.kk.inland && stage >= 2) acres = 0;
        const d = side(acres);
        b.r.setAttribute("x", b.kk.x - d/2); b.r.setAttribute("y", b.kk.y - d/2 - 50);
        b.r.setAttribute("width", d); b.r.setAttribute("height", d);
        b.t.setAttribute("y", b.kk.y + d/2 - 26);
      }));
      cover.setAttribute("opacity", stage >= 1 ? 0 : 1);
      kaiMarks.forEach(m => m.setAttribute("opacity", stage >= 2 ? 1 : 0));
      const p = people*10, q = Math.round(people*4);
      setMD(read.querySelector("p"), [
        `**Promised:** about **10 acres** a person → **${p} acres** for ${people} people.`,
        stage >= 1 ? `**Surveyed by Mantell:** **under 4 acres** a person → **under ${q} acres**.` : "**Surveyed:** press → to see.",
        stage >= 2 ? "**Hakatere:** the Arowhenua narrative says **no reserves were surveyed** here, and mahika kai were **not protected** as promised." : ""
      ].filter(Boolean).join("\n\n"));
    }
    const go = i => { stage = i; BM.sfx(i ? "paper" : "tok"); draw(); };
    controls(host, [btn("Promised", () => go(0), "dark"), btn("Surveyed", () => go(1), "dark"), btn("Hakatere", () => go(2), "on")]);
    draw();
    return { steps:2, step(i){ go(i); } };
  };

  /* =======================================================
     BRAID MAKER — gravel + water → channels that split and rejoin (Tue W4)
     ======================================================= */
  IX.braidmaker = function(host){
    const W = 1100, H = 640;
    const v = svg(W, H, { style:"position:absolute;left:0;top:0;width:1100px;height:640px;border-radius:12px" });
    v.appendChild(s("rect", { width:W, height:H, rx:12, fill:"#c9b47a" }));
    const bedG = s("g"), birds = s("g"), lbl = s("g");
    v.append(bedG, birds, lbl);
    host.appendChild(v);
    let gravel = 3, flow = 1, year = 1;
    const FLOW = ["Low flow", "Normal", "Flood"];
    const g1 = range(1, 6, 3, "#a7a59c", n => { gravel = n; draw(); });
    const fb = FLOW.map((f, i) => btn(f, () => { flow = i; draw(); }, i === 1 ? "on" : "dark"));
    const ctl = panel({ left:"1130px", right:"0", top:"0" }, [lab("Gravel from the mountains"), g1, lab("Water"), h("div", { style:{ display:"flex", gap:"8px", flexWrap:"wrap", marginTop:"6px" } }, fb)]);
    const read = panel({ left:"1130px", right:"0", top:"250px", bottom:"0" }, [h("p", { style:{ fontSize:"23px" } })]);
    host.append(ctl, read);
    const CX = y => 560 + 40*Math.sin(y/210);
    const strip = (half, fill, op) => { const L = [], R = []; for (let y=-20;y<=H + 20;y+=10){ const c = CX(y), w = half(y); L.push(`${(c - w).toFixed(1)},${y}`); R.unshift(`${(c + w).toFixed(1)},${y}`); } return s("polygon", { points:L.concat(R).join(" "), fill, opacity:op }); };
    function draw(){
      fb.forEach((b, i) => b.classList.toggle("on", i === flow));
      BM.clear(bedG); BM.clear(birds); BM.clear(lbl);
      const wide = 90 + gravel*40;
      const rb = BM.rng(year*7 + 3);
      const edge = y => wide*(1 + .12*Math.sin(y/90 + rb()*0) + .08*Math.sin(y/37 + year));
      bedG.appendChild(strip(edge, "#a7a59c", .95));
      if (flow === 2){
        bedG.appendChild(strip(y => edge(y)*.96, "#6FB6D6", .9));
        for (let i=0;i<14;i++){ const y = 30 + i*44; bedG.appendChild(s("path", { d:`M${CX(y) - 60} ${y} q30 -10 60 0 t60 0`, stroke:"#F3ECDD", "stroke-width":3, fill:"none", opacity:.6 })); }
      } else {
        const n = flow === 0 ? Math.max(1, gravel - 1) : gravel + 1;
        const rnd = BM.rng(year*13 + gravel*3);
        for (let k=0;k<n;k++){
          const f = .9 + rnd()*1.4, ph = rnd()*6.28, amp = .55 + rnd()*.35, sw = k === 0 ? (flow === 0 ? 10 : 16) : (flow === 0 ? 4 : 5 + rnd()*7);
          let d = "";
          for (let y=-20;y<=H + 20;y+=8){ const x = CX(y) + edge(y)*amp*Math.sin(2*Math.PI*f*y/H + ph); d += (d ? " L" : "M") + x.toFixed(1) + " " + y; }
          bedG.appendChild(s("path", { d, fill:"none", stroke:"#3D8DB3", "stroke-width":sw, "stroke-linecap":"round", "stroke-linejoin":"round", opacity:.95 }));
        }
        for (let i=0;i<Math.min(5, gravel + 1);i++){ const y = 80 + i*110 + rnd()*40, x = CX(y) + (rnd() - .5)*wide; birds.appendChild(s("text", { x, y, "font-size":30, "text-anchor":"middle" }, "🐦")); }
      }
      lbl.appendChild(s("text", { x:30, y:50, "font-family":"Big Shoulders Display", "font-weight":900, "font-size":28, fill:"#1F2A30", "letter-spacing":"2" }, `YEAR ${year} · ${FLOW[flow].toUpperCase()}`));
      lbl.appendChild(s("text", { x:30, y:600, "font-family":"Atkinson Hyperlegible", "font-size":22, fill:"#1F2A30" }, "↑ to the mountains"));
      lbl.appendChild(s("text", { x:30, y:628, "font-family":"Atkinson Hyperlegible", "font-size":22, fill:"#1F2A30" }, "↓ to the sea"));
      setMD(read.querySelector("p"), flow === 2
        ? "**Flood!** Water fills the bed **bank to bank** and moves gravel. When it drops, the channels will be in **new places**. Press **Next year**."
        : `**${flow === 0 ? "Low flow" : "Normal flow"}:** the water can't carry all that gravel, so it drops it and **splits around the gravel banks** into ${flow === 0 ? "a few" : "many"} channels that **rejoin** further down.\n\nMore gravel → a **wider bed** and **more braids**.\n\n🐦 Birds such as the **wrybill / ngutu pare** nest on the bare gravel islands.`);
    }
    controls(host, [btn("Next year", () => { year++; BM.sfx("paper"); draw(); }, "on")]);
    draw();
    return { steps:3, step(i){ if (i === 1){ gravel = 5; g1.value = 5; } if (i === 2) flow = 2; if (i === 3){ flow = 1; year++; } if (i === 0){ gravel = 3; g1.value = 3; flow = 1; } draw(); } };
  };

  /* =======================================================
     ORBIT & TILT — seasons, day length, and why Matariki
     rises before dawn in midwinter (Wed W4)
     ======================================================= */
  IX.orbittilt = function(host){
    const W = 1100, H = 660, CX = 520, CY = 330, RX = 400, RY = 230;
    const v = svg(W, H, { style:"position:absolute;left:0;top:-10px;width:1100px;height:660px;border-radius:12px" });
    v.appendChild(s("rect", { width:W, height:H, rx:12, fill:"#14202a" }));
    v.appendChild(A.stars(W, H, 21, 160));
    v.appendChild(s("ellipse", { cx:CX, cy:CY, rx:RX, ry:RY, fill:"none", stroke:"#F3ECDD", "stroke-opacity":.3, "stroke-width":2, "stroke-dasharray":"6 8" }));
    // Matariki lies far away in one direction (top-right of the picture)
    const MX = 1020, MY = 70;
    const mat = s("g");
    [[0,0],[14,8],[-10,12],[6,-12],[22,-4],[-4,24],[18,20]].forEach(([x,y]) => mat.appendChild(s("circle", { cx:MX + x, cy:MY + y, r:4, fill:"#cfe0ff" })));
    mat.appendChild(s("text", { x:MX - 30, y:MY + 52, "font-family":"Big Shoulders Display", "font-weight":900, "font-size":22, fill:"#cfe0ff", "letter-spacing":"2", "text-anchor":"middle" }, "MATARIKI →"));
    v.appendChild(mat);
    const glare = s("circle", { cx:CX, cy:CY, r:90, fill:"url(#g-star)", opacity:.9 });
    v.appendChild(glare);
    v.appendChild(s("circle", { cx:CX, cy:CY, r:52, fill:"#E6C873" }));
    v.appendChild(s("text", { x:CX, y:CY + 9, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":24, fill:"#7a4a10" }, "SUN"));
    const sight = s("line", { stroke:"#cfe0ff", "stroke-width":2, "stroke-dasharray":"4 8", opacity:.6 });
    v.appendChild(s("text", { x:20, y:640, "font-family":"Atkinson Hyperlegible", "font-size":17, fill:"#cfe0ff", opacity:.8 }, "Not to scale. The dotted line points towards Matariki, far beyond the Sun."));
    const earth = s("g");
    earth.appendChild(s("circle", { r:34, fill:"#3D8DB3" }));
    const night = s("path", { fill:"#0b1218", opacity:.75 });
    earth.appendChild(night);
    // tilted axis: always points the same way in space
    earth.appendChild(s("line", { x1:-16, y1:-50, x2:16, y2:50, stroke:"#F3ECDD", "stroke-width":4 }));
    earth.appendChild(s("text", { x:22, y:60, "font-family":"Atkinson Hyperlegible", "font-weight":700, "font-size":18, fill:"#F3ECDD" }, "S"));
    v.append(sight, earth);
    host.appendChild(v);
    const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    // angle: Earth's position. The Sun lines up with Matariki around late May.
    const dirM = Math.atan2(MY - CY, MX - CX), t0 = Math.atan2(Math.sin(dirM)/RY, Math.cos(dirM)/RX) + Math.PI;
    const angOf = m => t0 + (m - 4.7)/12*2*Math.PI;
    let m = 5.7;
    const mR = range(0, 119, Math.round(m*10), "#E6C873", n => { m = n/10; draw(); });
    const ctl = panel({ left:"1130px", right:"0", top:"0" }, [h("h4", { class:"mo", style:{ fontSize:"40px" } }, ""), mR]);
    const read = panel({ left:"1130px", right:"0", top:"170px", bottom:"0" }, [h("p", { style:{ fontSize:"22px" } })]);
    host.append(ctl, read);
    function draw(){
      const a = angOf(m), ex = CX + RX*Math.cos(a), ey = CY + RY*Math.sin(a);
      earth.setAttribute("transform", `translate(${ex} ${ey})`);
      // night side faces away from the Sun
      const na = Math.atan2(ey - CY, ex - CX);
      const p1 = [34*Math.cos(na - Math.PI/2), 34*Math.sin(na - Math.PI/2)], p2 = [34*Math.cos(na + Math.PI/2), 34*Math.sin(na + Math.PI/2)];
      night.setAttribute("d", `M${p1[0]} ${p1[1]} A34 34 0 0 1 ${p2[0]} ${p2[1]}Z`);
      // the stars are so far away that the direction to Matariki is the same from anywhere in the orbit
      sight.setAttribute("x1", ex); sight.setAttribute("y1", ey); sight.setAttribute("x2", ex + 900*Math.cos(dirM)); sight.setAttribute("y2", ey + 900*Math.sin(dirM));
      const toSun = Math.atan2(CY - ey, CX - ex), toM = dirM;
      let d = Math.abs(toSun - toM); if (d > Math.PI) d = 2*Math.PI - d;
      const deg = d*180/Math.PI;
      const mi = Math.floor(m) % 12;
      ctl.querySelector(".mo").textContent = MONTHS[mi];
      // Southern Hemisphere season (simple)
      const season = [11,0,1].includes(mi) ? "Summer ☀️" : [2,3,4].includes(mi) ? "Autumn 🍂" : [5,6,7].includes(mi) ? "Winter ❄️" : "Spring 🌱";
      // day length + noon sun height for Mid Canterbury (about 43.5°S): approximate model
      const decl = -23.44*Math.cos(2*Math.PI*(m*30.4 + 10)/365);
      const noon = Math.round(90 - 43.5 - decl);
      const lat = -43.5*Math.PI/180, dr = decl*Math.PI/180;
      const h0 = -0.833*Math.PI/180, day = 24/Math.PI*Math.acos((Math.sin(h0) - Math.sin(lat)*Math.sin(dr))/(Math.cos(lat)*Math.cos(dr)));
      const vis = deg < 25 ? "**Hidden** in the Sun's glare: it's in the sky during the day." : (deg < 45 && ((m > 5.3 && m < 7) )) ? "**Rising just before dawn** in the north-east: this is the **Matariki rising** of midwinter!" : deg > 140 ? "**Up all night**: our night side faces it." : "Seen for part of the night.";
      setMD(read.querySelector("p"), `**Season in Aotearoa:** ${season}\n\n**Noon Sun height:** about ${noon}°\n\n**Daylight:** about ${Math.floor(day)} h ${String(Math.round((day % 1)*60)).padStart(2,"0")} min\n\n**Matariki:** ${vis}\n\nThe axis **always tilts the same way**. When our half leans **towards** the Sun, sunlight is **more direct** and days are **longer**: summer.`);
      glare.setAttribute("opacity", deg < 25 ? 1 : .7);
      if (typeof hl === "function") hl();
    }
    const MB = [["Dec", 11.7], ["Mar", 2.7], ["May", 4.7], ["Late Jun", 5.8], ["Sep", 8.7]];
    const mbs = MB.map(([l, x]) => btn(l, () => goM(x), "dark"));
    const goM = x => { m = x; mR.value = Math.round(x*10); BM.sfx("tok"); draw(); };
    controls(host, mbs);
    const hl = () => mbs.forEach((b, i) => b.classList.toggle("on", Math.abs(MB[i][1] - m) < .05));
    mR.addEventListener("input", hl);
    draw();
    return { steps:4, step(i){ goM([5.8, 11.7, 2.7, 4.7, 5.8][i]); } };
  };

  /* =======================================================
     PULLEY LAB — supporting ropes → effort and rope pulled (Thu W4)
     ======================================================= */
  IX.pulleylab = function(host){
    const W = 1100, H = 640;
    const v = svg(W, H, { style:"position:absolute;left:0;top:0;width:1100px;height:640px;border-radius:12px" });
    v.appendChild(s("rect", { width:W, height:H, rx:12, fill:"#e9e0c8" }));
    // the hay loft
    v.appendChild(s("path", { d:"M60 70 L520 70 L520 640 L60 640Z", fill:"#b88a52", opacity:.35 }));
    v.appendChild(s("rect", { x:40, y:40, width:1020, height:34, rx:6, fill:"#6b4e2e" }));
    v.appendChild(s("text", { x:80, y:64, "font-family":"Big Shoulders Display", "font-weight":900, "font-size":22, fill:"#F3ECDD", "letter-spacing":"3" }, "HAY LOFT BEAM"));
    v.appendChild(s("rect", { x:0, y:610, width:W, height:30, fill:"#8a7a5a" }));
    const rig = s("g");
    v.appendChild(rig);
    host.appendChild(v);
    let n = 1, lifted = 0, anim = 0;
    const LOAD = 200; // newtons: a small hay bale of about 20 kg
    const CFG = [
      null,
      { name:"Single fixed pulley", t:"Changes the **direction** of the force: pull **down** to lift **up**. Effort = load." },
      { name:"One moving pulley", t:"The load hangs on **2 ropes**, so each rope holds half. Half the effort, but you pull **twice as much rope**." },
      { name:"Block and tackle (3 ropes)", t:"**3 supporting ropes**: about a third of the effort, but **3 m of rope** for every 1 m of lift." },
      { name:"Block and tackle (4 ropes)", t:"**4 supporting ropes**: about a quarter of the effort, but **4 m of rope** for every 1 m of lift." }
    ];
    const bR = range(1, 4, 1, "#B4412F", x => { n = x; lifted = 0; draw(); });
    const ctl = panel({ left:"1130px", right:"0", top:"0" }, [lab("Supporting ropes"), bR, h("h4", { class:"nm", style:{ fontSize:"28px", marginTop:"10px" } })]);
    const read = panel({ left:"1130px", right:"0", top:"220px", bottom:"0" }, [h("p", { style:{ fontSize:"23px" } })]);
    host.append(ctl, read);
    function wheel(x, y, r){ const g = s("g"); g.appendChild(s("circle", { cx:x, cy:y, r, fill:"#4B5357" })); g.appendChild(s("circle", { cx:x, cy:y, r:r*.3, fill:"#c9c2b0" })); return g; }
    function draw(){
      BM.clear(rig);
      const top = 120, baleH = 110, lift = lifted*180;
      const by = 600 - baleH - lift;   // bale top
      const fx = 300;                  // fixed block x
      const rope = { stroke:"#8a5a2a", "stroke-width":5, fill:"none" };
      if (n === 1){
        const R0 = 50, L = fx - R0, Rr = fx + R0;
        rig.appendChild(s("line", { x1:fx, y1:74, x2:fx, y2:top - 30, stroke:"#4B5357", "stroke-width":6 }));
        rig.appendChild(s("path", Object.assign({ d:`M${L} ${by} V${top} A${R0} ${R0} 0 0 1 ${Rr} ${top} V${430 + lift}` }, rope)));
        rig.appendChild(wheel(fx, top, R0 + 2));
        rig.appendChild(s("circle", { cx:Rr, cy:440 + lift, r:14, fill:"#B4412F" }));
        rig.appendChild(s("text", { x:Rr + 20, y:452 + lift, "font-size":34 }, "✋ ↓"));
        rig.appendChild(s("rect", { x:L - 55, y:by, width:110, height:baleH, rx:8, fill:"#d9b65a", stroke:"#8a6a2a", "stroke-width":3 }));
      } else {
        const ropes = n, my = by - 50;                        // moving block above the bale
        const xs = Array.from({ length:ropes }, (_, i) => fx - 70 + i*(140/(ropes - 1 || 1)));
        rig.appendChild(s("line", { x1:fx, y1:74, x2:fx, y2:top - 30, stroke:"#4B5357", "stroke-width":6 }));
        xs.forEach((x, i) => rig.appendChild(s("line", Object.assign({ x1:x, y1:i % 2 ? my : top, x2:x, y2:i % 2 ? top : my }, rope, { y1:top, y2:my }))));
        rig.appendChild(s("rect", { x:fx - 90, y:top - 26, width:180, height:52, rx:26, fill:"#4B5357" }));
        rig.appendChild(s("rect", { x:fx - 90, y:my - 22, width:180, height:44, rx:22, fill:"#6b7a80" }));
        rig.appendChild(s("line", { x1:fx, y1:my + 22, x2:fx, y2:by, stroke:"#4B5357", "stroke-width":6 }));
        // the pulling rope comes off the fixed block to the hand
        const hx = fx + 150, hy = 400 + lift*(n - 0)*.35;
        rig.appendChild(s("path", Object.assign({ d:`M${fx + 90} ${top} Q${hx} ${top} ${hx} ${Math.min(590, hy)}` }, rope)));
        rig.appendChild(s("circle", { cx:hx, cy:Math.min(590, hy), r:14, fill:"#B4412F" }));
        rig.appendChild(s("text", { x:hx + 20, y:Math.min(600, hy + 10), "font-size":34 }, "✋ ↓"));
        rig.appendChild(s("rect", { x:fx - 70, y:by, width:140, height:baleH, rx:8, fill:"#d9b65a", stroke:"#8a6a2a", "stroke-width":3 }));
      }
      for (let i=0;i<5;i++) rig.appendChild(s("path", { d:`M${(n === 1 ? fx - 95 : 250) + i*20} ${by + 10} v${baleH - 20}`, stroke:"#a8873a", "stroke-width":3 }));
      // effort meter
      const eff = LOAD/n;
      rig.appendChild(s("text", { x:640, y:150, "font-family":"Big Shoulders Display", "font-weight":900, "font-size":30, fill:"#1F2A30", "letter-spacing":"2" }, "EFFORT NEEDED"));
      rig.appendChild(s("rect", { x:640, y:170, width:400, height:40, rx:20, fill:"#d6cdb8" }));
      rig.appendChild(s("rect", { x:640, y:170, width:400*eff/LOAD, height:40, rx:20, fill:"#B4412F" }));
      rig.appendChild(s("text", { x:640, y:270, "font-family":"Big Shoulders Display", "font-weight":900, "font-size":30, fill:"#1F2A30", "letter-spacing":"2" }, "ROPE PULLED FOR A 1 m LIFT"));
      rig.appendChild(s("rect", { x:640, y:290, width:400, height:40, rx:20, fill:"#d6cdb8" }));
      rig.appendChild(s("rect", { x:640, y:290, width:100*n, height:40, rx:20, fill:"#2C6F92" }));
      rig.appendChild(s("text", { x:640, y:390, "font-family":"Atkinson Hyperlegible", "font-weight":700, "font-size":30, fill:"#1F2A30" }, `${Math.round(eff)} N effort · ${n} m of rope`));
      rig.appendChild(s("text", { x:640, y:430, "font-family":"Atkinson Hyperlegible", "font-size":22, fill:"#4B5357" }, "Hay bale: about 20 kg (200 N)."));
      rig.appendChild(s("text", { x:640, y:460, "font-family":"Atkinson Hyperlegible", "font-size":22, fill:"#4B5357" }, "Friction is ignored."));
      ctl.querySelector(".nm").textContent = CFG[n].name;
      setMD(read.querySelector("p"), CFG[n].t + "\n\nThe **trade-off**: less effort means **more rope to pull**. The work done is the same.");
    }
    function lift(){
      cancelAnimationFrame(anim); const t0 = performance.now();
      const tick = t => { lifted = Math.min(1, (t - t0)/1600); draw(); if (lifted < 1) anim = requestAnimationFrame(tick); };
      BM.sfx("tok"); anim = requestAnimationFrame(tick);
    }
    const setN = x => { n = x; bR.value = x; lifted = 0; draw(); };
    controls(host, [btn("Lower", () => { lifted = 0; draw(); }, "dark"), btn("Lift 1 m", lift, "on")]);
    draw();
    return { steps:3, step(i){ setN(i + 1); }, destroy(){ cancelAnimationFrame(anim); } };
  };

  /* =======================================================
     AERIAL BRAID — draw river channels; the "flood" rearranges
     them into an abstract line-and-pattern composition (Fri W4)
     ======================================================= */
  IX.aerialbraid = function(host){
    const W = 1100, H = 640;
    const v = svg(W, H, { style:"position:absolute;left:0;top:0;width:1100px;height:640px;border-radius:12px;touch-action:none;cursor:crosshair" });
    const bg = s("rect", { width:W, height:H, rx:12 });
    const art = s("g"), live = s("polyline", { fill:"none", stroke:"#1F2A30", "stroke-width":6, "stroke-linecap":"round", "stroke-linejoin":"round", opacity:.6 });
    v.append(bg, art, live);
    host.appendChild(v);
    const PAL = [
      { n:"River blues", bg:"#efe6cf", c:["#1F4E6B","#2C6F92","#6FB6D6","#a7a59c"] },
      { n:"Ink", bg:"#f4f1ea", c:["#111","#333","#666","#999"] },
      { n:"Ochre & slate", bg:"#e9dcc0", c:["#4B5357","#B4412F","#c9a04a","#7d8a8e"] }
    ];
    let pal = 0, strokes = [], cur = null, flood = 0, pattern = true;
    const toPt = e => { const r = v.getBoundingClientRect(); return [(e.clientX - r.left)/r.width*W, (e.clientY - r.top)/r.height*H]; };
    v.addEventListener("pointerdown", e => { stop(e); cur = [toPt(e)]; v.setPointerCapture(e.pointerId); });
    v.addEventListener("pointermove", e => { if (!cur) return; const p = toPt(e), l = cur[cur.length - 1]; if (Math.hypot(p[0] - l[0], p[1] - l[1]) > 8){ cur.push(p); live.setAttribute("points", cur.map(q => q.join(",")).join(" ")); } });
    v.addEventListener("pointerup", e => { stop(e); if (cur && cur.length > 2){ strokes.push({ pts:cur, w:2 + Math.random()*14, k:strokes.length }); } cur = null; live.setAttribute("points", ""); draw(); });
    v.addEventListener("click", stop);
    function smooth(pts){ let d = `M${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`; for (let i=1;i<pts.length - 1;i++){ const mx = (pts[i][0] + pts[i+1][0])/2, my = (pts[i][1] + pts[i+1][1])/2; d += ` Q${pts[i][0].toFixed(1)} ${pts[i][1].toFixed(1)} ${mx.toFixed(1)} ${my.toFixed(1)}`; } return d; }
    function draw(){
      const P = PAL[pal];
      bg.setAttribute("fill", P.bg);
      BM.clear(art);
      if (pattern){ const rnd = BM.rng(9 + flood); for (let i=0;i<70;i++) art.appendChild(s("circle", { cx:rnd()*W, cy:rnd()*H, r:2 + rnd()*5, fill:P.c[3], opacity:.45 })); }
      strokes.forEach((st, i) => {
        const rnd = BM.rng(st.k*17 + flood*101);
        const ph = rnd()*6.28, amp = flood ? 16 + rnd()*40 : 0, fr = 1 + rnd()*3;
        const pts = st.pts.map((p, j) => { const t = j/st.pts.length; return [p[0] + Math.sin(t*fr*6.28 + ph)*amp, p[1] + Math.cos(t*fr*5 + ph)*amp*.4]; });
        art.appendChild(s("path", { d:smooth(pts), fill:"none", stroke:P.c[i % 3], "stroke-width":st.w, "stroke-linecap":"round", opacity:.9 }));
        if (pattern && st.w > 8) art.appendChild(s("path", { d:smooth(pts), fill:"none", stroke:P.bg, "stroke-width":2, "stroke-dasharray":"3 9", "stroke-linecap":"round" }));
      });
      if (!strokes.length) art.appendChild(s("text", { x:W/2, y:H/2, "text-anchor":"middle", "font-family":"Fraunces", "font-style":"italic", "font-size":36, fill:"#6b7a80" }, "Draw river channels from top to bottom…"));
    }
    function example(){
      strokes = []; const rnd = BM.rng(5 + flood*3);
      for (let k=0;k<9;k++){ const x0 = 300 + rnd()*500, pts = []; for (let y=-20;y<=H + 20;y+=30) pts.push([x0 + Math.sin(y/90 + k)*110*rnd() + (y/H)*(rnd() - .5)*300, y]); strokes.push({ pts, w:[3,6,12,18][k % 4], k }); }
      draw();
    }
    controls(host, [btn("Clear", () => { strokes = []; draw(); }, "dark"), btn("Example", () => { BM.sfx("paper"); example(); }, "dark"), btn("Colours", () => { pal = (pal + 1) % PAL.length; draw(); }, "dark"), btn("Pattern", () => { pattern = !pattern; draw(); }, "dark"), btn("Flood!", () => { flood++; BM.sfx("paper"); draw(); }, "on")]);
    const tip = panel({ left:"1130px", right:"0", top:"0", bottom:"0" }, [h("h4", { style:{ fontSize:"32px" } }, "From above"), setMD(h("p", { style:{ fontSize:"23px" } }), "**Draw** channels with your finger or mouse. Vary the **line weight**: thick main channels, thin side threads.\n\nPress **Flood!** to rearrange them, just as a real flood moves the channels.\n\n**Pattern** adds dots of gravel and broken lines. **Colours** changes the palette.\n\nThe aim is an **abstract** artwork: we keep the *feeling* of the river, not a map.")]);
    host.appendChild(tip);
    example();
    return { steps:2, step(i){ if (i === 0){ flood = 0; example(); } else { flood = i; draw(); } } };
  };
})(window.BM);
