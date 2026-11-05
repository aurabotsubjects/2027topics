/* ==========================================================
   INTERACTIVES — Week 3 (Map Sheet III · The Old Trails)
   trailplanner · slope · spinearth · startrails · geartrain · layermixer
   ========================================================== */
(function(BM){
  "use strict";
  const h = BM.h, s = BM.s, svg = BM.svg, A = BM.art, IX = BM.IX;
  const btn = BM.ixbtn;
  const setMD = (el, t) => { el.innerHTML = BM.md(t); return el; };
  const controls = (host, kids) => { const c = h("div", { class:"ix-controls", style:{ position:"absolute", right:"0", top:"-118px" } }, kids); host.appendChild(c); return c; };
  const panel = (style, kids) => h("div", { class:"ix-panel", style }, kids);
  const stop = e => e.stopPropagation();

  /* =======================================================
     TRAIL PLANNER — coast to the inland lakes (Mon W3)
     Choose cells; good routes pass water, food and shelter and avoid swamp.
     ======================================================= */
  IX.trailplanner = function(host){
    const C = 12, R = 7, S = 92, OX = 0, OY = 10;
    // terrain codes: . plain, w swamp, r river, f food, s shelter, m mountain, L lakes (goal), K kāika (start)
    const MAP = [
      "mmmL.mmmmmmm",
      "mmm.rmm..mmm",
      "m..sr..f....",
      "...frs...w..",
      "..w..rf.ww..",
      ".www.r.fwww.",
      "wwwww.r..wwK"
    ];
    const at = (x, y) => MAP[y][x];
    const COL = { ".":"#d8c58e", w:"#7f9a7a", r:"#6FB6D6", f:"#c9a04a", s:"#a7a59c", m:"#7d8a8e", L:"#3D8DB3", K:"#B4412F" };
    const v = svg(C*S, R*S + 20, { style:`position:absolute;left:${OX}px;top:${OY}px;width:${C*S}px;height:${R*S + 20}px;border-radius:10px;touch-action:none` });
    const cells = [];
    for (let y=0;y<R;y++) for (let x=0;x<C;x++){
      const c = at(x, y);
      const g = s("g", { style:"cursor:pointer" });
      g.appendChild(s("rect", { x:x*S, y:y*S, width:S - 2, height:S - 2, rx:6, fill:COL[c] }));
      const ic = { w:"〰", r:"💧", f:"🍃", s:"⛺", m:"▲", L:"💧", K:"⌂" }[c];
      if (c === "w") for (let i=0;i<3;i++) g.appendChild(s("path", { d:`M${x*S + 14} ${y*S + 26 + i*20} q10 -8 20 0 q10 8 20 0 q10 -8 20 0`, stroke:"#4f6b4a", "stroke-width":3, fill:"none" }));
      else if (c === "m") g.appendChild(s("path", { d:`M${x*S + 16} ${y*S + 74} L${x*S + 46} ${y*S + 18} L${x*S + 76} ${y*S + 74}Z`, fill:"#5b666b" }));
      else if (ic) g.appendChild(s("text", { x:x*S + S/2, y:y*S + S/2 + 14, "text-anchor":"middle", "font-size":38 }, ic));
      if (c === "L") g.appendChild(s("text", { x:x*S + S/2, y:y*S + 18, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":15, fill:"#fff" }, "Ō TŪ WHAREKAI"));
      if (c === "K") g.appendChild(s("text", { x:x*S + S/2, y:y*S + 18, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":16, fill:"#fff" }, "COAST KĀIKA"));
      const mark = s("circle", { cx:x*S + S/2, cy:y*S + S/2, r:0, fill:"#1F2A30", opacity:.75 });
      g.appendChild(mark);
      g.addEventListener("click", e => { stop(e); tap(x, y); });
      v.appendChild(g); cells.push({ x, y, c, mark });
    }
    const line = s("polyline", { fill:"none", stroke:"#1F2A30", "stroke-width":6, "stroke-dasharray":"2 12", "stroke-linecap":"round", points:"" });
    v.appendChild(line); host.appendChild(v);
    const info = panel({ left:(C*S + 30) + "px", right:"0", top:"0", minHeight:"300px" }, [h("h4", null, "Plan a trail inland"), setMD(h("p"), "Start at the **coast kāika** (bottom right). Click squares next to your route to reach **Ō Tū Wharekai** (top left). A good trail passes **water 💧, food 🍃 and shelter ⛺**, and goes **around swamps 〰**.")]);
    const score = panel({ left:(C*S + 30) + "px", right:"0", bottom:"0", minHeight:"230px" }, [h("h4", { style:{ fontSize:"32px" } }, "Your trail"), h("p")]);
    host.append(info, score);
    let path = [];
    const startCell = cells.find(c => c.c === "K");
    function key(x, y){ return x + "," + y; }
    function draw(){
      cells.forEach(c => c.mark.setAttribute("r", path.some(p => p.x === c.x && p.y === c.y) ? 12 : 0));
      line.setAttribute("points", path.map(p => `${p.x*S + S/2},${p.y*S + S/2}`).join(" "));
      const t = path.map(p => at(p.x, p.y));
      const n = { water:t.filter(c => c === "r" || c === "L").length, food:t.filter(c => c === "f").length, shelter:t.filter(c => c === "s").length, swamp:t.filter(c => c === "w").length, steps:path.length - 1 };
      const done = t[t.length - 1] === "L";
      score.querySelector("p").innerHTML = BM.md(`**Steps:** ${n.steps} · **Water:** ${n.water} · **Food:** ${n.food} · **Shelter:** ${n.shelter} · **Swamp:** ${n.swamp}` + (done ? (n.swamp === 0 && n.water >= 3 && n.food >= 1 ? "\n\n✅ **A strong trail!** Like the real ara tawhito, it follows the river for water and avoids the swamps." : `\n\n⚠️ You made it, but ${n.swamp ? "you crossed **swamp**. " : ""}${n.water < 3 ? "you were short of **water**. " : ""}${n.food < 1 ? "you found no **food**. " : ""}Could the river help?`) : ""));
    }
    function tap(x, y){
      if (at(x, y) === "m") { BM.sfx("no"); return; }
      const last = path[path.length - 1];
      const i = path.findIndex(p => p.x === x && p.y === y);
      if (i >= 0){ path = path.slice(0, i + 1); draw(); return; }
      if (Math.abs(last.x - x) + Math.abs(last.y - y) !== 1) { BM.sfx("no"); return; }
      path.push({ x, y }); BM.sfx("tok"); draw();
    }
    function reset(){ path = [{ x:startCell.x, y:startCell.y }]; draw(); }
    const MODEL = [[11,6],[10,6],[9,6],[8,6],[7,6],[6,6],[6,5],[5,5],[5,4],[5,3],[4,3],[4,2],[4,1],[3,1],[3,0]];
    controls(host, [btn("Reset", reset, "dark"), btn("Follow the river", () => { path = MODEL.map(([x,y]) => ({ x, y })); draw(); }, "on")]);
    reset();
    return {};
  };

  /* =======================================================
     SLOPE STABILITY — angle + water + broken rock → slip? (Tue W3)
     ======================================================= */
  IX.slope = function(host){
    const W = 1100, H = 640;
    const v = svg(W, H, { style:"position:absolute;left:0;top:0;width:1100px;height:640px;border-radius:12px" });
    v.appendChild(s("rect", { width:W, height:H, rx:12, fill:"#cfe1e8" }));
    const hill = s("path", { fill:"#7d8a8e" }), soil = s("path", { fill:"#a8875a" }), cracks = s("g", { stroke:"#3b4950", "stroke-width":3, fill:"none" });
    const rocks = s("g"), rain = s("g", { opacity:0 });
    for (let i=0;i<50;i++) rain.appendChild(s("line", { x1:(i*47)%1100, y1:(i*31)%300, x2:(i*47)%1100 - 6, y2:(i*31)%300 + 24, stroke:"#3D8DB3", "stroke-width":3 }));
    const road = s("path", { d:"M0 600 H1100", stroke:"#4B5357", "stroke-width":20 });
    v.append(rain, hill, soil, cracks, rocks, road);
    host.appendChild(v);
    let ang = 30, wet = 20, broken = false, quake = false;
    const lab = (t) => h("b", { style:{ fontFamily:"var(--f-label)", letterSpacing:".08em", textTransform:"uppercase", fontSize:"20px", display:"block", marginTop:"8px" } }, t);
    const aR = h("input", { type:"range", min:10, max:60, value:30, style:{ width:"100%", accentColor:"#B4412F" }, oninput:() => { ang = +aR.value; draw(); }, onclick:stop, onpointerdown:stop });
    const wR = h("input", { type:"range", min:0, max:100, value:20, style:{ width:"100%", accentColor:"#3D8DB3" }, oninput:() => { wet = +wR.value; draw(); }, onclick:stop, onpointerdown:stop });
    const ctl = panel({ left:"1130px", right:"0", top:"0" }, [lab("Slope angle"), aR, lab("Rain (water in the ground)"), wR]);
    const meterBox = panel({ left:"1130px", right:"0", top:"230px", minHeight:"140px" }, [h("h4", { style:{ fontSize:"30px" } }, "Slip risk"), h("div", { style:{ height:"28px", borderRadius:"14px", background:"linear-gradient(90deg,#7FA55A,#E6C873,#B4412F)", position:"relative" } }, h("div", { class:"nd", style:{ position:"absolute", top:"-6px", width:"8px", height:"40px", background:"#1F2A30", borderRadius:"4px", transition:"left .4s" } })), h("p", { style:{ marginTop:"8px" } })]);
    const tip = panel({ left:"1130px", right:"0", bottom:"0", minHeight:"150px" }, [setMD(h("p", { style:{ fontSize:"22px" } }), "Our mountains are **steep**, made of **broken (fractured) rock**, and get lots of **rain**. Shaking from an **earthquake** can set off slips too.")]);
    host.append(ctl, meterBox, tip);
    const risk = () => Math.min(100, (ang - 10)*1.25 + wet*.35 + (broken ? 20 : 0) + (quake ? 30 : 0));
    function draw(){
      const t = Math.tan(ang*Math.PI/180), x0 = 120, y0 = 590, top = Math.max(80, y0 - t*700);
      const x1 = x0 + (y0 - top)/t;
      hill.setAttribute("d", `M0 ${y0} L${x0} ${y0} L${x1} ${top} L${W} ${top} L${W} ${H} L0 ${H}Z`);
      soil.setAttribute("d", `M${x0 + 20} ${y0 - 6} L${x1} ${top} L${x1 + 30} ${top} L${x0 + 60} ${y0 - 6}Z`);
      soil.setAttribute("fill", wet > 60 ? "#7a5c3a" : "#a8875a");
      BM.clear(cracks); if (broken) for (let i=1;i<6;i++){ const px = x0 + (x1 - x0)*i/6, py = y0 - (y0 - top)*i/6; cracks.appendChild(s("path", { d:`M${px + 20} ${py} l40 18 l-14 16 l34 14` })); }
      rain.style.transition = "opacity .5s"; rain.setAttribute("opacity", wet/120);
      const r = risk();
      meterBox.querySelector(".nd").style.left = `calc(${r}% - 4px)`;
      setMD(meterBox.querySelector("p"), r < 35 ? "**Low.** Gentle slope, not too wet." : r < 70 ? "**Medium.** Watch for cracks and falling stones." : "**High!** Steep, wet, broken rock: a slip could happen.");
      v.dataset.hill = JSON.stringify([x0, y0, x1, top]);
    }
    function slip(){
      if (risk() < 70){ BM.sfx("no"); setMD(tip.querySelector("p"), "**Nothing happened.** Make the slope steeper, add rain, break the rock, or add an earthquake."); return; }
      const [x0, y0, x1, top] = JSON.parse(v.dataset.hill);
      BM.sfx("stone");
      for (let i=0;i<26;i++){ const f = Math.random(), px = x1 - (x1 - x0)*f*.4, py = top + (y0 - top)*f*.4; const c = s("circle", { cx:px, cy:py, r:6 + Math.random()*10, fill:i%2 ? "#5b666b" : "#a8875a" }); rocks.appendChild(c); c.animate([{ transform:"translate(0,0)" }, { transform:`translate(${x0 - px + 80 + Math.random()*240}px, ${y0 - py - 10}px)` }], { duration:1300 + Math.random()*700, easing:"cubic-bezier(.5,0,.8,1)", fill:"forwards" }); }
      setMD(tip.querySelector("p"), "**Slip!** Rock and soil slide down and can block roads and rivers. That's why people watch slopes after heavy rain and earthquakes.");
    }
    function shake(){ quake = true; v.animate([{ transform:"translate(0,0)" }, { transform:"translate(-10px,4px)" }, { transform:"translate(10px,-4px)" }, { transform:"translate(-6px,2px)" }, { transform:"translate(0,0)" }], { duration:600, iterations:2 }); draw(); setTimeout(() => { quake = false; draw(); }, 2400); }
    const bB = btn("Broken rock", () => { broken = !broken; bB.classList.toggle("on", broken); draw(); }, "dark");
    controls(host, [bB, btn("🌏 Earthquake", shake, "dark"), btn("Will it slip?", slip, "on"), btn("Reset", () => { BM.clear(rocks); ang = 30; wet = 20; broken = false; aR.value = 30; wR.value = 20; bB.classList.remove("on"); draw(); }, "dark")]);
    draw();
    return {};
  };

  /* =======================================================
     SPIN THE EARTH — looking down on the South Pole (Wed W3)
     ======================================================= */
  IX.spinearth = function(host){
    const W = 1100, H = 640, cx = 620, cy = 330, R = 230;
    const v = svg(W, H, { style:"position:absolute;left:0;top:0;width:1100px;height:640px;border-radius:12px" });
    v.appendChild(s("rect", { width:W, height:H, rx:12, fill:"#0b1024" }));
    v.appendChild(A.stars(W, H, 3, 120));
    // sunlight from the left
    for (let i=0;i<7;i++) v.appendChild(s("line", { x1:20, x2:300, y1:150 + i*55, y2:150 + i*55, stroke:"#E6C873", "stroke-width":4, "stroke-dasharray":"18 12", opacity:.7 }));
    v.appendChild(s("circle", { cx:-120, cy:cy, r:200, fill:"#ffd76a" }));
    v.appendChild(s("text", { x:30, y:120, "font-family":"Big Shoulders Display", "font-weight":900, "font-size":30, fill:"#E6C873" }, "SUNLIGHT →"));
    const earth = s("g");
    earth.appendChild(s("circle", { cx, cy, r:R, fill:"#2f6f96" }));
    // rough continents (stylised)
    earth.appendChild(s("path", { d:`M${cx-60} ${cy-40} q40 -30 80 0 q30 30 -10 60 q-40 20 -70 -10 q-20 -30 0 -50z`, fill:"#eef3f4" })); // Antarctica-ish centre
    earth.appendChild(s("path", { d:`M${cx+90} ${cy+130} q40 -10 60 20 q10 40 -30 50 q-40 -10 -30 -70z`, fill:"#7FA55A" }));
    earth.appendChild(s("path", { d:`M${cx-190} ${cy+40} q40 -20 50 20 q-10 40 -50 30z`, fill:"#7FA55A" }));
    // NZ marker
    const nz = s("g");
    nz.appendChild(s("circle", { cx:cx + R*.72, cy, r:14, fill:"#B4412F", stroke:"#fff", "stroke-width":4 }));
    nz.appendChild(s("text", { x:cx + R*.72 - 4, y:cy - 22, "font-family":"Big Shoulders Display", "font-weight":900, "font-size":24, fill:"#fff" }, "US"));
    earth.appendChild(nz);
    const spin = s("g", { style:`transform-origin:${cx}px ${cy}px` }); spin.appendChild(earth);
    const night = s("path", { d:`M${cx} ${cy - R} A${R} ${R} 0 0 1 ${cx} ${cy + R}Z`, fill:"#000", opacity:.55 });
    v.append(spin, night);
    v.appendChild(s("text", { x:cx - 90, y:cy + R + 40, "font-family":"Big Shoulders Display", "font-weight":900, "font-size":26, fill:"#F6EBC8" }, "DAY SIDE"));
    v.appendChild(s("text", { x:cx + 40, y:cy + R + 40, "font-family":"Big Shoulders Display", "font-weight":900, "font-size":26, fill:"#9fb0e8" }, "NIGHT SIDE"));
    v.appendChild(s("path", { d:`M${cx + R + 30} ${cy - 80} A${R + 30} ${R + 30} 0 0 1 ${cx + R + 30} ${cy + 80}`, stroke:"#E6C873", "stroke-width":4, fill:"none" }));
    v.appendChild(s("path", { d:`M${cx + R + 20} ${cy + 64} l12 22 l12 -22`, fill:"#E6C873" }));
    host.appendChild(v);
    const info = panel({ left:"1130px", right:"0", top:"0", minHeight:"260px" }, [h("h4"), h("p")]);
    const clock = h("div", { class:"pcard", style:{ position:"absolute", left:"1130px", right:"0", top:"290px", padding:"14px 20px", fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"54px", textAlign:"center" } });
    const note = panel({ left:"1130px", right:"0", bottom:"0", minHeight:"160px" }, [setMD(h("p", { style:{ fontSize:"21px" } }), "We're looking **down on the South Pole**. From here Earth spins **clockwise**. One full spin takes about **24 hours**.")]);
    host.append(info, clock, note);
    let hours = 12, play = false, raf, last = 0;
    function set(hr){
      hours = ((hr % 24) + 24) % 24;
      // our marker starts on the right (night, midnight). Clockwise rotation: angle = hours*15 deg; noon when on left facing Sun
      spin.style.transform = `rotate(${(hours*15)%360}deg)`;
      const hh = Math.floor(hours), mm = Math.floor((hours - hh)*60);
      clock.textContent = `${String(hh).padStart(2,"0")}:${String(mm).padStart(2,"0")} ${hours >= 6 && hours < 18 ? "☀️" : "🌙"}`;
      const t = hours < 5 || hours >= 19 ? ["Night", "We're on the side **facing away** from the Sun. It's night."] : hours < 7 ? ["Sunrise", "We're spinning **into** the sunlight. The Sun seems to **rise in the east**."] : hours < 17 ? ["Day", "We're on the side **facing the Sun**. It's day."] : ["Sunset", "We're spinning **out of** the sunlight. The Sun seems to **set in the west**."];
      info.querySelector("h4").textContent = t[0]; setMD(info.querySelector("p"), t[1] + " The Sun isn't moving round us: **we are spinning**.");
    }
    function tick(t){ const dt = Math.min(.05, (t - (last || t))/1000); last = t; if (play) set(hours + dt*3); raf = requestAnimationFrame(tick); }
    const pB = btn("▶ Spin", () => { play = !play; pB.textContent = play ? "❚❚ Pause" : "▶ Spin"; pB.classList.toggle("on", play); }, "on");
    controls(host, [pB, btn("Midnight", () => set(0), "dark"), btn("Sunrise", () => set(6), "dark"), btn("Noon", () => set(12), "dark"), btn("Sunset", () => set(18), "dark")]);
    set(0); raf = requestAnimationFrame(tick);
    return { steps:4, step(i){ set([0, 6, 12, 18, 0][i]); }, destroy(){ cancelAnimationFrame(raf); } };
  };

  /* =======================================================
     STAR TRAILS — the southern sky wheels around the pole (Wed W3)
     ======================================================= */
  IX.startrails = function(host){
    const W = 1760, H = 560;
    const cv = h("canvas", { width:W, height:H, style:{ position:"absolute", left:"0", top:"0", width:W + "px", height:H + "px", borderRadius:"14px" } });
    const over = svg(W, H, { style:`position:absolute;left:0;top:0;width:${W}px;height:${H}px;pointer-events:none` });
    host.append(cv, over);
    const ctx = cv.getContext("2d");
    const PX = 880, PY = 250; // south celestial pole (above due south)
    const rnd = BM.rng(17);
    const stars = Array.from({ length:1100 }, () => { const r = 20 + Math.sqrt(rnd())*1050, a = rnd()*Math.PI*2; return { r, a, m: rnd() < .07 ? 2.8 : 1 + rnd()*1.4, c: rnd() < .15 ? "#cfe0ff" : rnd() < .2 ? "#ffe2b8" : "#F6EBC8" }; });
    // Southern Cross + Pointers, placed relative to the pole (angles chosen so the Cross "points" to the pole)
    const cross = [[190, 3.55, 4],[260, 3.55, 3.6],[225, 3.47, 3.2],[225, 3.63, 3.2],[208, 3.51, 2.2]];
    const pointers = [[300, 3.9, 4.2],[320, 3.82, 3.8]];
    const named = cross.concat(pointers).map(([r,a,m]) => ({ r, a, m, c:"#ffffff", big:true }));
    const all = stars.concat(named);
    const hills = A.range(W, H, H - 20, 170, 23, "#060914", { peaks:5 });
    over.appendChild(hills);
    const southLab = s("text", { x:PX, y:H - 30, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":26, fill:"#E6C873", opacity:0 }, "▼ DUE SOUTH");
    const guide = s("g", { opacity:0 });
    over.append(guide, southLab);
    let hours = 0, play = false, trails = false, raf, last = 0;
    function pos(st, hr){ const a = st.a + hr*(Math.PI*2/24)*1; return [PX + Math.cos(a)*st.r, PY + Math.sin(a)*st.r]; } // clockwise on screen (y down)
    function render(){
      ctx.fillStyle = "#070a18"; ctx.fillRect(0, 0, W, H);
      if (trails){ all.forEach(st => { ctx.beginPath(); ctx.strokeStyle = st.c; ctx.globalAlpha = st.big ? .8 : .45; ctx.lineWidth = st.big ? 2.2 : st.m*.7; ctx.arc(PX, PY, st.r, st.a, st.a + hours*(Math.PI*2/24)); ctx.stroke(); }); ctx.globalAlpha = 1; }
      all.forEach(st => { const [x, y] = pos(st, hours); ctx.beginPath(); ctx.fillStyle = st.c; ctx.arc(x, y, st.big ? st.m : st.m, 0, Math.PI*2); ctx.fill(); });
      // highlight the Cross and Pointers
      ctx.strokeStyle = "rgba(230,200,115,.75)"; ctx.lineWidth = 2;
      const p = cross.map(([r,a]) => pos({ r, a }, hours));
      ctx.beginPath(); ctx.moveTo(...p[0]); ctx.lineTo(...p[1]); ctx.moveTo(...p[2]); ctx.lineTo(...p[3]); ctx.stroke();
      ctx.fillStyle = "#E6C873"; ctx.font = "900 22px 'Big Shoulders Display'";
      ctx.font = "900 26px 'Big Shoulders Display'"; const pc = p[1]; ctx.fillText("SOUTHERN CROSS", pc[0] - 90, pc[1] - 24);
      const pp = pointers.map(([r,a]) => pos({ r, a }, hours)); ctx.fillText("POINTERS", pp[0][0] + 12, pp[0][1] + 26);
      ctx.beginPath(); ctx.fillStyle = "#B4412F"; ctx.arc(PX, PY, 5, 0, Math.PI*2); ctx.fill();
      read.textContent = `${hours.toFixed(1)} hours`;
    }
    function tick(t){ const dt = Math.min(.05, (t - (last || t))/1000); last = t; if (play && hours < 12){ hours = Math.min(12, hours + dt*1.2); render(); } raf = requestAnimationFrame(tick); }
    const read = h("div", { class:"pcard", style:{ position:"absolute", left:"0", top:"580px", padding:"12px 20px", fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"40px" } });
    const info = h("div", { class:"pcard", style:{ position:"absolute", left:"240px", right:"0", top:"580px", padding:"12px 20px", fontSize:"24px", lineHeight:"1.25" } });
    host.append(read, info);
    setMD(info, "Looking **south** from the plains. As Earth spins, the stars seem to **wheel around one point** in the sky: the **south celestial pole**. Press **Play**.");
    const pB = btn("▶ Play the night", () => { play = !play; pB.textContent = play ? "❚❚ Pause" : "▶ Play the night"; }, "on");
    const tB = btn("Show trails", () => { trails = !trails; tB.classList.toggle("on", trails); render(); setMD(info, "A camera left open all night records **star trails**: circles around the pole. The stars aren't moving round us; **Earth is spinning**."); }, "dark");
    const fB = btn("Find south", () => {
      BM.clear(guide);
      const p = cross.map(([r,a]) => pos({ r, a }, hours));
      guide.appendChild(s("line", { x1:p[0][0], y1:p[0][1], x2:PX, y2:PY, stroke:"#E6C873", "stroke-width":3, "stroke-dasharray":"8 8" }));
      guide.appendChild(s("line", { x1:PX, y1:PY, x2:PX, y2:H - 60, stroke:"#B4412F", "stroke-width":4, "stroke-dasharray":"10 8" }));
      guide.setAttribute("opacity", 1); southLab.setAttribute("opacity", 1);
      setMD(info, "Follow the **long arm of the Southern Cross** (about 4½ times its length) to the **south celestial pole**. Drop straight down to the horizon: that's **due south**. The **Pointers** help you find the Cross.");
    }, "dark");
    controls(host, [pB, tB, fB, btn("Reset", () => { hours = 0; play = false; pB.textContent = "▶ Play the night"; guide.setAttribute("opacity", 0); southLab.setAttribute("opacity", 0); render(); }, "dark")]);
    render(); raf = requestAnimationFrame(tick);
    return { destroy(){ cancelAnimationFrame(raf); } };
  };

  /* =======================================================
     GEAR TRAIN — teeth, turns and ratio (Thu W3)
     ======================================================= */
  IX.geartrain = function(host){
    const W = 1100, H = 640, M = 12; // tooth size (module-ish): radius = teeth*M/2
    const v = svg(W, H, { style:"position:absolute;left:0;top:0;width:1100px;height:640px;border-radius:12px" });
    v.appendChild(s("rect", { width:W, height:H, rx:12, fill:"#efe6cf" }));
    host.appendChild(v);
    const gearPath = (n, r) => { let d = ""; const ro = r + M*.9, ri = r - M*.9; for (let i=0;i<n;i++){ const a0 = i/n*Math.PI*2, a1 = (i + .25)/n*Math.PI*2, a2 = (i + .5)/n*Math.PI*2, a3 = (i + .75)/n*Math.PI*2; const P = (a, rr) => `${(Math.cos(a)*rr).toFixed(1)} ${(Math.sin(a)*rr).toFixed(1)}`; d += (i ? "L" : "M") + P(a0, ri) + " L" + P(a1, ro) + " L" + P(a2, ro) + " L" + P(a3, ri); } return d + "Z"; };
    const mkGear = (col) => { const g = s("g"); const body = s("path", { fill:col, stroke:"rgba(0,0,0,.25)", "stroke-width":2 }); const hub = s("circle", { r:16, fill:"#C9A04A" }); const mark = s("circle", { r:10, fill:"#B4412F" }); g.append(body, hub, mark); g.body = body; g.mark = mark; return g; };
    const gA = mkGear("#A7A59C"), gB = mkGear("#d8cfc0");
    v.append(gA, gB);
    const labA = s("text", { "font-family":"Big Shoulders Display", "font-weight":900, "font-size":28, fill:"#2F3E46", "text-anchor":"middle" }), labB = s("text", { "font-family":"Big Shoulders Display", "font-weight":900, "font-size":28, fill:"#2F3E46", "text-anchor":"middle" });
    v.append(labA, labB);
    let tA = 30, tB = 10, ang = 0, play = false, raf, last = 0, turnsA = 0;
    let cfg;
    function layout(){
      const rA = tA*M/2, rB = tB*M/2, cy = 330, cxA = 50 + rA, cxB = cxA + rA + rB + 2;
      gA.body.setAttribute("d", gearPath(tA, rA)); gB.body.setAttribute("d", gearPath(tB, rB));
      gA.mark.setAttribute("cx", rA*.6); gB.mark.setAttribute("cx", rB*.55);
      labA.setAttribute("x", cxA); labA.setAttribute("y", Math.min(H - 14, cy + rA + 44)); labA.textContent = `DRIVER · ${tA} teeth`;
      labB.setAttribute("x", cxB); labB.setAttribute("y", cy - rB - 30); labB.textContent = `DRIVEN · ${tB} teeth`;
      cfg = { cxA, cxB, cy, offB: Math.PI/tB };
      ang = 0; turnsA = 0; place();
    }
    function place(){
      gA.setAttribute("transform", `translate(${cfg.cxA} ${cfg.cy}) rotate(${ang*180/Math.PI})`);
      const angB = -ang*tA/tB + cfg.offB + Math.PI;
      gB.setAttribute("transform", `translate(${cfg.cxB} ${cfg.cy}) rotate(${angB*180/Math.PI})`);
      const ratio = tA/tB;
      read.innerHTML = BM.md(`**Driver turns:** ${turnsA.toFixed(2)} · **Driven turns:** ${(turnsA*ratio).toFixed(2)}\n\nEvery turn of the ${tA}-tooth gear turns the ${tB}-tooth gear **${ratio % 1 ? ratio.toFixed(2) : ratio} times**. ` + (ratio > 1 ? "Small gear: **faster**, but **less force**." : ratio < 1 ? "Big gear driven: **slower**, but **more force** — like a tractor's low gear for pulling." : "Same size: **same speed**."));
    }
    function tick(t){ const dt = Math.min(.05, (t - (last || t))/1000); last = t; if (play){ const da = dt*Math.PI*2*.25; ang += da; turnsA += da/(Math.PI*2); place(); } raf = requestAnimationFrame(tick); }
    const read = h("div", { class:"pcard", style:{ position:"absolute", left:"1130px", right:"0", top:"0", padding:"16px 20px", fontSize:"24px", lineHeight:"1.3", minHeight:"230px" } });
    host.appendChild(read);
    const pick = (lab, cur, onset) => { const box = h("div", { class:"ix-panel", style:{ position:"relative" } }, h("h4", { style:{ fontSize:"26px" } }, lab)); const row = h("div", { style:{ display:"flex", gap:"8px", flexWrap:"wrap" } }); [10,15,20,30,40].forEach(n => { const b = btn(String(n), () => { onset(n); row.querySelectorAll("button").forEach(x => x.classList.toggle("on", x === b)); layout(); }, n === cur ? "on" : "dark"); b.style.minHeight = "50px"; b.style.padding = "6px 14px"; row.appendChild(b); }); box.appendChild(row); return box; };
    const picks = h("div", { style:{ position:"absolute", left:"1130px", right:"0", bottom:"0", display:"flex", flexDirection:"column", gap:"14px" } }, pick("Driver teeth", tA, n => tA = n), pick("Driven teeth", tB, n => tB = n));
    host.appendChild(picks);
    const pB = btn("▶ Turn", () => { play = !play; pB.textContent = play ? "❚❚ Stop" : "▶ Turn"; }, "on");
    controls(host, [pB, btn("One turn", () => { const start = turnsA; play = false; pB.textContent = "▶ Turn"; const t0 = performance.now(); const go = (t) => { const k = Math.min(1, (t - t0)/1600); ang = (start + k)*Math.PI*2; turnsA = start + k; place(); if (k < 1) requestAnimationFrame(go); }; requestAnimationFrame(go); }, "dark"), btn("Reset", layout, "dark")]);
    layout(); raf = requestAnimationFrame(tick);
    return { destroy(){ cancelAnimationFrame(raf); } };
  };

  /* =======================================================
     LAYER MIXER — five tints, near dark → far pale (Fri W3)
     ======================================================= */
  IX.layermixer = function(host){
    const W = 1100, H = 660;
    const v = svg(W, H, { style:"position:absolute;left:0;top:0;width:1100px;height:660px;border-radius:12px" });
    host.appendChild(v);
    const HUES = { "River blue":[61,141,179], "Greywacke":[75,83,87], "Tussock gold":[201,160,74], "Paddock green":[94,127,58], "Night indigo":[47,61,122] };
    let hue = "River blue", n = 5, reversed = false;
    const mix = (c, k) => c.map(x => Math.round(x + (255 - x)*k));
    const hex = c => "#" + c.map(x => x.toString(16).padStart(2, "0")).join("");
    const swatches = h("div", { style:{ position:"absolute", left:"1130px", right:"0", top:"120px", display:"flex", gap:"6px", height:"90px" } });
    const info = panel({ left:"1130px", right:"0", top:"0", minHeight:"100px" }, [h("h4", { style:{ fontSize:"30px" } }, "Your 5 tints")]);
    host.append(info, swatches);
    function draw(){
      BM.clear(v); BM.clear(swatches);
      const base = HUES[hue];
      v.appendChild(s("rect", { width:W, height:H, rx:12, fill:hex(mix(base, .9)) }));
      for (let i=0;i<n;i++){
        const far = (n - 1 - i)/(n - 1); // 1 = farthest
        const k = reversed ? (1 - far)*.75 : far*.75;
        const col = hex(mix(base, k));
        const g = A.range(W, H, 230 + i*(380/(n - 1)), 260 - i*25, 11 + i*7, col, { peaks:4 + i, snow: i === 0 && !reversed ? hex(mix(base, .92)) : null });
        v.appendChild(g);
        swatches.appendChild(h("div", { style:{ flex:"1", background:col, borderRadius:"8px", boxShadow:"var(--sh-1)" } }));
      }
      setMD(tip.querySelector("p"), reversed ? "**Something's wrong!** The far mountains are dark and the near hills are pale. Does it still look deep?" : "**Far = pale.** Each layer nearer to you is a little **darker**. Air between us and far mountains makes them paler (atmospheric perspective).");
    }
    const tip = panel({ left:"1130px", right:"0", top:"240px", minHeight:"180px" }, [h("p", { style:{ fontSize:"22px" } })]);
    host.appendChild(tip);
    const hb = h("div", { style:{ position:"absolute", left:"1130px", right:"0", bottom:"0", display:"flex", flexWrap:"wrap", gap:"8px" } });
    Object.keys(HUES).forEach(k => { const b = btn(k, () => { hue = k; hb.querySelectorAll("button").forEach(x => x.classList.toggle("on", x === b)); draw(); }, k === hue ? "on" : "dark"); b.style.minHeight = "50px"; b.style.fontSize = "18px"; b.style.padding = "6px 12px"; hb.appendChild(b); });
    host.appendChild(hb);
    const rB = btn("Wrong way round", () => { reversed = !reversed; rB.classList.toggle("on", reversed); draw(); }, "dark");
    controls(host, [btn("3 layers", () => { n = 3; draw(); }, "dark"), btn("5 layers", () => { n = 5; draw(); }, "dark"), rB]);
    draw();
    return { steps:1, step(i){ reversed = i === 1; rB.classList.toggle("on", reversed); draw(); } };
  };
})(window.BM);
