/* ==========================================================
   INTERACTIVES — Week 7 (Map Sheet VII · The Race)
   waterrace · mountainuses · starlife · loopsim · printplate
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
     WATER RACE ENGINEER — slope, then a siphon under a valley (Mon W7)
     ======================================================= */
  IX.waterrace = function(host){
    const W = 1100, H = 640;
    const v = svg(W, H, { style:"position:absolute;left:0;top:0;width:1100px;height:640px;border-radius:12px" });
    v.appendChild(s("rect", { width:W, height:H, rx:12, fill:"#cfe1e8" }));
    const scene = s("g"), flow = s("g");
    v.append(scene, flow);
    host.appendChild(v);
    let mode = "slope", slope = 2, outH = 330, raf = 0, ph = 0;
    const sR = range(-3, 12, 2, "#2C6F92", n => { slope = n; draw(); });
    const oR = range(200, 420, 330, "#2C6F92", n => { outH = n; draw(); });
    const ctl = panel({ left:"1130px", right:"0", top:"0" }, [h("div", { class:"c1" }, lab("Slope of the race (drop per km)"), sR), h("div", { class:"c2" }, lab("Height of the far channel"), oR)]);
    const read = panel({ left:"1130px", right:"0", top:"200px", bottom:"0" }, [h("p", { style:{ fontSize:"22px" } })]);
    host.append(ctl, read);
    function draw(){
      BM.clear(scene);
      ctl.querySelector(".c1").style.display = mode === "slope" ? "block" : "none";
      ctl.querySelector(".c2").style.display = mode === "siphon" ? "block" : "none";
      if (mode === "slope"){
        const y0 = 260, y1 = y0 + slope*18;
        scene.appendChild(s("path", { d:`M0 ${y0 - 30} L1100 ${y1 - 30} L1100 640 L0 640Z`, fill:"#c9b47a" }));
        scene.appendChild(s("path", { d:`M0 ${y0} L1100 ${y1}`, stroke:"#2C6F92", "stroke-width":slope > 0 ? 18 : 10, opacity:slope > 0 ? 1 : .4 }));
        scene.appendChild(T(20, y0 - 50, "From the Rangitata River intake →", { "font-size":22 }));
        scene.appendChild(T(760, y1 - 50, "→ to farms on the plains", { "font-size":22 }));
        if (slope > 7) for (let i=0;i<8;i++) scene.appendChild(s("path", { d:`M${300 + i*90} ${y0 + (300 + i*90)*(y1 - y0)/1100 + 14} l14 26 l-10 16`, stroke:"#8a5a2a", "stroke-width":4, fill:"none" }));
        setMD(read.querySelector("p"), slope <= 0 ? "**No flow!** Water only flows **downhill**. A race that's flat or slopes up will just sit there or flow back." : slope > 7 ? "**Too steep!** Fast water **scours** the banks and carries away the soil. Engineers keep races **gently sloping**." : "**Just right.** A **gentle, steady slope** keeps the water moving without wearing away the channel. Surveyors had to measure the land very carefully to keep the slope right for **67 km**.");
      } else {
        const inH = 340;
        scene.appendChild(s("path", { d:`M0 ${inH + 40} L360 ${inH + 40} C 430 ${inH + 60}, 440 560, 550 580 C 660 560, 670 ${outH + 60}, 740 ${outH + 40} L1100 ${outH + 40} L1100 640 L0 640Z`, fill:"#c9b47a" }));
        scene.appendChild(s("path", { d:"M500 600 q50 -14 100 0", stroke:"#3D8DB3", "stroke-width":10, fill:"none" }));
        scene.appendChild(T(470, 630, "river in the valley", { "font-size":18 }));
        scene.appendChild(s("path", { d:`M0 ${inH} L360 ${inH}`, stroke:"#2C6F92", "stroke-width":24 }));
        scene.appendChild(s("path", { d:`M740 ${outH} L1100 ${outH}`, stroke:"#2C6F92", "stroke-width":24, opacity:outH < inH ? 1 : .35 }));
        scene.appendChild(s("path", { id:"sipath", d:`M360 ${inH} C 420 ${inH}, 430 555, 550 555 C 670 555, 680 ${outH}, 740 ${outH}`, stroke:"#4B5357", "stroke-width":30, fill:"none", "stroke-linecap":"round" }));
        scene.appendChild(s("path", { d:`M360 ${inH} C 420 ${inH}, 430 555, 550 555 C 670 555, 680 ${outH}, 740 ${outH}`, stroke:"#9fc6d4", "stroke-width":18, fill:"none" }));
        scene.appendChild(s("line", { x1:0, y1:inH - 12, x2:1100, y2:inH - 12, stroke:"#B4412F", "stroke-width":2, "stroke-dasharray":"8 8" }));
        scene.appendChild(T(820, inH - 22, "inlet level", { "font-size":18, fill:"#B4412F" }));
        const ok = outH > inH + 4;
        setMD(read.querySelector("p"), ok ? "**It flows!** In an **inverted siphon**, the water goes **down a pipe under the valley** and **up the other side**. It works because the far end is **lower than the inlet**.\n\nThe RDR has **nine** inverted siphons. The **Surrey Hills** siphon is **2.7 km** long." : "**Stuck!** The far channel is **as high as or higher than** the inlet, so the water can't push up and out. Lower the far channel.");
      }
    }
    function anim(){ BM.clear(flow); ph = (ph + 4) % 60;
      const p = v.querySelector("#sipath");
      if (mode === "siphon" && p && outH > 344){ const L = p.getTotalLength(); for (let d=ph; d<L; d+=60){ const q = p.getPointAtLength(d); flow.appendChild(s("circle", { cx:q.x, cy:q.y, r:5, fill:"#fff" })); } }
      if (mode === "slope" && slope > 0){ for (let x=(ph*slope/3) % 60; x<1100; x+=60) flow.appendChild(s("circle", { cx:x, cy:260 + slope*18*x/1100, r:4, fill:"#fff" })); }
      raf = requestAnimationFrame(anim); }
    const set = m => { mode = m; BM.sfx("tok"); draw(); };
    controls(host, [btn("1 · Slope", () => set("slope"), "dark"), btn("2 · Siphon", () => set("siphon"), "on")]);
    draw(); anim();
    return { steps:3, step(k){ if (k === 0){ mode = "slope"; slope = 2; sR.value = 2; } if (k === 1){ mode = "slope"; slope = 10; sR.value = 10; } if (k === 2){ mode = "siphon"; outH = 300; oR.value = 300; } if (k === 3){ mode = "siphon"; outH = 380; oR.value = 380; } draw(); }, destroy(){ cancelAnimationFrame(raf); } };
  };

  /* =======================================================
     MOUNTAIN USES — farming, tourism, conservation, water & power (Tue W7)
     ======================================================= */
  IX.mountainuses = function(host){
    const W = 1100, H = 640;
    const v = svg(W, H, { style:"position:absolute;left:0;top:0;width:1100px;height:640px;border-radius:12px" });
    v.appendChild(s("rect", { width:W, height:H, rx:12, fill:"#bfd9e6" }));
    v.appendChild(A.range(W, H, 260, 160, 71, "#8a958f", { snow:"#f4f6f4", peaks:7 }));
    v.appendChild(A.range(W, H, 380, 70, 72, "#b5a46e", {}));
    v.appendChild(s("rect", { y:470, width:W, height:170, fill:"#c9b47a" }));
    v.appendChild(A.braids([[300,300],[420,420],[560,520],[720,660]], { seed:7, w0:16, w1:50, threads:3, color:"#3D8DB3", sw:3, bedOpacity:.6 }));
    const USES = [
      { k:"farm", x:240, y:420, e:"🐑", n:"High-country farming", d:"**Sheep stations** like Hakatere graze the tussock hills.", plus:"Wool and meat; jobs; families living in the high country.", minus:"Grazing and burning changed the native plants; fences and roads.", bal:"Farmers protect wetlands and native bush on parts of their land." },
      { k:"ski", x:770, y:250, e:"⛷️", n:"Mt Hutt ski field", d:"Opened in **1973** by **Willie Huber**. Employs about **300 people** over a four-month season.", plus:"Jobs and visitors; it helped turn around **Methven**, which had been shrinking.", minus:"Roads and buildings on the mountain; crowds and cars.", bal:"Careful planning of roads, buildings and waste on the slopes." },
      { k:"park", x:430, y:300, e:"🏞️", n:"Hakatere Conservation Park", d:"Protects nearly **60,000 ha** of mountains, tussock, beech forest, wetlands and lakes.", plus:"Rare plants and animals protected; tramping, huts and recreation.", minus:"Some land is no longer farmed; visitors need tracks, huts and toilets.", bal:"DOC works with the community and Ngāi Tahu to look after it." },
      { k:"water", x:620, y:520, e:"⚡", n:"Water & power", d:"The **Rangitata Diversion Race** takes river water across the plains for irrigation, and to **Highbank Power Station**.", plus:"Water for about **66,000 ha** of farms; electricity.", minus:"Less water left in the rivers for fish and birds.", bal:"Rules about how much water can be taken, and when." },
      { k:"heritage", x:330, y:470, e:"🏚️", n:"Heritage & stories", d:"The **Hakatere station buildings** are a **Tohu Whenua** site. The area was part of a Kāi Tahu **mahika kai** trail.", plus:"We remember and learn from the past.", minus:"Old buildings need money and volunteers to keep them standing.", bal:"Volunteers and DOC care for them together." }
    ];
    const marks = USES.map((U, i) => { const g = s("g", { style:"cursor:pointer" }); g.appendChild(s("circle", { cx:U.x, cy:U.y, r:34, fill:"#F3ECDD", stroke:"#1F2A30", "stroke-width":3 })); g.appendChild(s("text", { x:U.x, y:U.y + 13, "text-anchor":"middle", "font-size":36 }, U.e)); g.addEventListener("click", e => { stop(e); pick(i); }); v.appendChild(g); return g; });
    host.appendChild(v);
    const read = panel({ left:"1130px", right:"0", top:"0", bottom:"0" }, [h("h4", { class:"un", style:{ fontSize:"30px" } }), h("p", { class:"ud", style:{ fontSize:"22px" } })]);
    host.appendChild(read);
    let cur = -1;
    function pick(i){
      cur = i; BM.sfx("tok");
      marks.forEach((m, j) => m.firstChild.setAttribute("stroke", j === i ? "#B4412F" : "#1F2A30"));
      const U = USES[i];
      read.querySelector(".un").textContent = U.e + " " + U.n;
      setMD(read.querySelector(".ud"), `${U.d}\n\n**➕ Good effects:** ${U.plus}\n\n**➖ Costs:** ${U.minus}\n\n**⚖️ Balancing:** ${U.bal}`);
    }
    read.querySelector(".un").textContent = "Who uses the mountains?";
    setMD(read.querySelector(".ud"), "Tap each symbol on the map to see how people **use** the mountains, the **good effects**, the **costs**, and how people try to **balance** them.");
    controls(host, [btn("Next use ▸", () => pick((cur + 1) % USES.length), "on")]);
    return { steps:5, step(k){ if (k === 0){ cur = -1; } else pick(k - 1); } };
  };

  /* =======================================================
     STAR LIFE — colour & temperature, and a model of a star's life (Wed W7)
     ======================================================= */
  IX.starlife = function(host){
    const W = 1100, H = 640;
    const v = svg(W, H, { style:"position:absolute;left:0;top:0;width:1100px;height:640px;border-radius:12px" });
    v.appendChild(s("rect", { width:W, height:H, rx:12, fill:"#0f1822" }));
    v.appendChild(A.stars(W, H, 51, 120));
    const g = s("g"); v.appendChild(g);
    host.appendChild(v);
    let mode = "colour", temp = 6000, path = "sun", stage = 0;
    const tR = range(3000, 30000, 6000, "#E6C873", n => { temp = n; draw(); });
    const stR = range(0, 4, 0, "#E6C873", n => { stage = n; draw(); });
    const ctl = panel({ left:"1130px", right:"0", top:"0" }, [h("div", { class:"m1" }, lab("Surface temperature"), tR), h("div", { class:"m2" }, lab("Stage"), stR, h("div", { style:{ display:"flex", gap:"8px", marginTop:"8px" } }, btn("Sun-like star", () => { path = "sun"; draw(); }, "dark sm"), btn("Very big star", () => { path = "big"; draw(); }, "dark sm")))]);
    const read = panel({ left:"1130px", right:"0", top:"230px", bottom:"0" }, [h("p", { style:{ fontSize:"22px" } })]);
    host.append(ctl, read);
    const colOf = t => { const k = (t - 3000)/27000; const c = [[255,120,70],[255,190,120],[255,245,220],[220,230,255],[160,190,255]]; const f = Math.min(3.999, k*4), i = Math.floor(f), r = f - i; return `rgb(${c[i].map((x, j) => Math.round(x + (c[i+1][j] - x)*r)).join(",")})`; };
    const STAGES = {
      sun:[["Nebula", 0, "#8a6fb0", "A huge cloud of **gas and dust**. Gravity pulls some of it together."],["Shining star", 60, "#fff2c8", "A **star like our Sun**, shining steadily."],["Red giant", 150, "#ff8a5a", "It **swells up** into a big, cooler, **red** giant."],["Planetary nebula", 120, "#7fc8c0", "It **puffs off** its outer layers into a glowing shell of gas."],["White dwarf", 22, "#e6f0ff", "A small, hot **leftover core** that slowly cools."]],
      big:[["Nebula", 0, "#8a6fb0", "A huge cloud of **gas and dust**."],["Blue supergiant", 110, "#b0c8ff", "A **huge, hot, blue** star, like **Puaka (Rigel)**."],["Red supergiant", 200, "#ff7a50", "It swells into a **red supergiant**, like **Betelgeuse** in Orion."],["Supernova", 240, "#fff6d0", "Its core collapses and it **explodes**: a **supernova**."],["Neutron star or black hole", 14, "#9fb0ff", "What's left is a tiny, very heavy **neutron star**, or a **black hole**."]]
    };
    function draw(){
      BM.clear(g);
      ctl.querySelector(".m1").style.display = mode === "colour" ? "block" : "none";
      ctl.querySelector(".m2").style.display = mode === "life" ? "block" : "none";
      ctl.querySelectorAll(".m2 .ixbtn").forEach((b, i) => b.classList.toggle("on", (i === 0) === (path === "sun")));
      if (mode === "colour"){
        const c = colOf(temp);
        g.appendChild(s("circle", { cx:420, cy:320, r:200, fill:c, opacity:.25 }));
        g.appendChild(s("circle", { cx:420, cy:320, r:150, fill:c }));
        // a colour bar with three known stars
        const bar = s("g");
        for (let i=0;i<=100;i++) bar.appendChild(s("rect", { x:80 + i*9.4, y:560, width:10, height:30, fill:colOf(3000 + i*270) }));
        g.appendChild(bar);
        [["Betelgeuse (red)", 3000, 540],["Sun (yellow-white)", 6000, 515],["Puaka / Rigel (blue-white)", 26000, 540]].forEach(([n, t, ly]) => { const x = 80 + (t - 3000)/270*9.4; g.appendChild(s("line", { x1:x, y1:ly + 6, x2:x, y2:598, stroke:"#fff", "stroke-width":2 })); g.appendChild(T(Math.min(x, 860), ly, n, { fill:"#F3ECDD", "font-size":17 })); });
        g.appendChild(T(80, 620, "cooler ←", { fill:"#F3ECDD", "font-size":18 })); g.appendChild(T(960, 620, "→ hotter", { fill:"#F3ECDD", "font-size":18 }));
        setMD(read.querySelector("p"), `**${temp.toLocaleString()} °C (about)** → this star looks **${temp < 4500 ? "red-orange" : temp < 7500 ? "yellow-white" : temp < 12000 ? "white" : "blue-white"}**.\n\n**Red stars are the coolest** (about 3,000 °C). **Blue stars are the hottest**: some are over **30,000 °C**. Our **Sun** is about 6,000 °C.\n\nThis is an **observation** astronomers make by measuring starlight.`);
      } else {
        const S = STAGES[path][stage];
        g.appendChild(T(30, 50, "🔬 A model many astronomers use", { fill:"#E6C873", "font-size":22, "font-weight":700 }));
        if (stage === 0 || (path === "sun" && stage === 3)){ const r = BM.rng(3 + stage); for (let i=0;i<60;i++) g.appendChild(s("circle", { cx:420 + (r() - .5)*480, cy:320 + (r() - .5)*320, r:20 + r()*50, fill:S[2], opacity:.12 })); if (stage === 3) g.appendChild(s("circle", { cx:420, cy:320, r:10, fill:"#fff" })); }
        else if (path === "big" && stage === 3){ for (let i=0;i<36;i++){ const a = i/36*2*Math.PI; g.appendChild(s("line", { x1:420, y1:320, x2:420 + Math.cos(a)*260, y2:320 + Math.sin(a)*200, stroke:"#ffd88a", "stroke-width":4, opacity:.7 })); } g.appendChild(s("circle", { cx:420, cy:320, r:90, fill:S[2] })); }
        else { g.appendChild(s("circle", { cx:420, cy:320, r:S[1]*1.25, fill:S[2], opacity:.25 })); g.appendChild(s("circle", { cx:420, cy:320, r:S[1], fill:S[2] })); }
        // stage strip
        STAGES[path].forEach((st, i) => { g.appendChild(s("circle", { cx:120 + i*170, cy:580, r:i === stage ? 16 : 10, fill:i === stage ? "#E6C873" : "#4B5357" })); g.appendChild(T(120 + i*170, 615, st[0], { fill:"#F3ECDD", "font-size":15, "text-anchor":"middle" })); });
        setMD(read.querySelector("p"), `**${stage + 1}. ${S[0]}**\n\n${S[3]}\n\nIn this model, **how big a star is** decides how its life goes. The ages scientists give are on the next slide's 🔬 side note.`);
      }
    }
    const set = m => { mode = m; BM.sfx("tok"); draw(); };
    controls(host, [btn("Colour & heat", () => set("colour"), "dark"), btn("Life of a star", () => set("life"), "on")]);
    draw();
    return { steps:4, step(k){ if (k === 0){ mode = "colour"; temp = 6000; } if (k === 1){ mode = "colour"; temp = 3000; } if (k === 2){ mode = "colour"; temp = 26000; } if (k === 3){ mode = "life"; path = "sun"; stage = 1; } if (k === 4){ mode = "life"; path = "big"; stage = 1; } tR.value = temp; stR.value = stage; draw(); } };
  };

  /* =======================================================
     LOOP SIM — repeat [move, turn] draws the irrigator circle (Thu W7)
     ======================================================= */
  IX.loopsim = function(host){
    const W = 760, H = 640;
    const c = h("canvas", { width:W, height:H, style:{ position:"absolute", left:"0", top:"0", width:W + "px", height:H + "px", borderRadius:"12px", background:"#c9a04a" } });
    host.appendChild(c);
    const g = c.getContext("2d");
    let reps = 36, steps = 10, turn = 10, raf = 0;
    const rR = range(1, 72, 36, "#2C6F92", n => { reps = n; run(); });
    const mR = range(2, 40, 10, "#2C6F92", n => { steps = n; run(); });
    const tR = range(5, 120, 10, "#7d5fb0", n => { turn = n; run(); });
    const code = h("div", { style:{ marginTop:"10px", fontFamily:"var(--f-label)", fontWeight:"900", letterSpacing:".05em", textTransform:"uppercase", fontSize:"20px" } });
    const msg = h("p", { style:{ fontSize:"21px", marginTop:"10px" } });
    const p = panel({ left:"790px", right:"0", top:"0", bottom:"0" }, [lab("Repeat"), rR, lab("Move (steps)"), mR, lab("Turn (degrees)"), tR, code, msg]);
    host.appendChild(p);
    const blk = (t, col, ind) => `<div style="background:${col};color:#fff;border-radius:10px;padding:6px 12px;margin:4px 0 4px ${ind ? 28 : 0}px">${t}</div>`;
    function run(){
      cancelAnimationFrame(raf);
      code.innerHTML = blk(`repeat ${reps}`, "#c9842a", 0) + blk(`move ${steps} steps`, "#3D8DB3", 1) + blk(`turn ↻ ${turn}°`, "#7d5fb0", 1);
      const total = reps*turn, closed = total % 360 === 0;
      setMD(msg, `**3 blocks** do the work of **${reps*2} blocks** written out.\n\nTotal turn: ${reps} × ${turn}° = **${total}°**. ` + (closed ? "✅ It comes back to the start." : "It doesn't close the shape. For a full circle, the total turn must be **360°**."));
      g.fillStyle = "#c9a04a"; g.fillRect(0, 0, W, H);
      const scale = Math.min(5, 1600/(reps*steps + 1));
      let x = W/2, y = H/2 + (360/turn >= reps ? 0 : 0), a = 0, i = 0;
      // start so a full circle is centred
      const rad = steps*scale/(2*Math.sin(Math.PI*turn/360 || .01));
      if (closed && total === 360){ x = W/2 - rad; y = H/2; a = -90; }
      g.fillStyle = "#7FA55A"; g.strokeStyle = "#2C6F92"; g.lineWidth = 5; g.lineCap = "round";
      const pts = [[x, y]];
      const tick = () => {
        for (let k=0;k<2 && i<reps;k++, i++){ x += Math.cos(a*Math.PI/180)*steps*scale; y += Math.sin(a*Math.PI/180)*steps*scale; a += turn; pts.push([x, y]); }
        g.fillStyle = "#c9a04a"; g.fillRect(0, 0, W, H);
        if (i >= reps && closed && total === 360){ g.fillStyle = "rgba(127,165,90,.85)"; g.beginPath(); pts.forEach(([px,py], j) => j ? g.lineTo(px, py) : g.moveTo(px, py)); g.fill(); }
        g.beginPath(); pts.forEach(([px,py], j) => j ? g.lineTo(px, py) : g.moveTo(px, py)); g.stroke();
        g.fillStyle = "#B4412F"; g.beginPath(); g.arc(x, y, 9, 0, Math.PI*2); g.fill();
        if (i < reps) raf = requestAnimationFrame(tick);
      };
      tick();
    }
    const preset = (r, m, t) => { reps = r; steps = m; turn = t; rR.value = r; mR.value = m; tR.value = t; BM.sfx("tok"); run(); };
    controls(host, [btn("Square", () => preset(4, 40, 90), "dark"), btn("Triangle", () => preset(3, 40, 120), "dark"), btn("Pivot circle", () => preset(36, 10, 10), "on")]);
    run();
    return { steps:3, step(k){ [[4,40,90],[3,40,120],[18,10,10],[36,10,10]].slice(k, k + 1).forEach(([r,m,t]) => preset(r, m, t)); }, destroy(){ cancelAnimationFrame(raf); } };
  };

  /* =======================================================
     PRINT PLATE — draw into a foam plate, ink it, print it (Fri W7)
     The print comes out mirrored!
     ======================================================= */
  IX.printplate = function(host){
    const PW = 520, PH = 600;
    const mk = (left, title) => { const wrap = h("div", { style:{ position:"absolute", left:left + "px", top:"0", width:PW + "px" } }, h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", letterSpacing:".12em", textTransform:"uppercase", fontSize:"20px", marginBottom:"6px", color:"var(--cacao-ink)" } }, title)); const c = h("canvas", { width:PW, height:PH, style:{ width:PW + "px", height:(PH - 40) + "px", borderRadius:"10px", boxShadow:"var(--sh-3)", touchAction:"none" } }); wrap.appendChild(c); host.appendChild(wrap); return c; };
    const plate = mk(0, "Foam plate (draw here)"), print = mk(560, "Your print");
    const pg = plate.getContext("2d"), qg = print.getContext("2d");
    const INKS = [["Midnight", "#1d2a4a"], ["Ink black", "#1F2A30"], ["Kōwhai gold", "#c9a04a"], ["Deep red", "#8a2f22"]];
    let ink = 0, lines = [], cur = null, printed = false;
    const toPt = e => { const r = plate.getBoundingClientRect(); return [(e.clientX - r.left)/r.width*PW, (e.clientY - r.top)/r.height*PH]; };
    plate.addEventListener("pointerdown", e => { stop(e); cur = [toPt(e)]; lines.push(cur); plate.setPointerCapture(e.pointerId); });
    plate.addEventListener("pointermove", e => { if (!cur) return; cur.push(toPt(e)); drawPlate(); });
    plate.addEventListener("pointerup", e => { stop(e); cur = null; });
    plate.addEventListener("click", stop);
    const stroke = (g, L, col, w) => { g.strokeStyle = col; g.lineWidth = w; g.lineCap = "round"; g.lineJoin = "round"; L.forEach(l => { g.beginPath(); l.forEach(([x,y], i) => i ? g.lineTo(x, y) : g.moveTo(x, y)); if (l.length === 1) g.lineTo(l[0][0] + .1, l[0][1]); g.stroke(); }); };
    function drawPlate(){ pg.fillStyle = "#e8e2d6"; pg.fillRect(0, 0, PW, PH); stroke(pg, lines, "#b9b0a0", 9); stroke(pg, lines, "#9a907e", 3); }
    function doPrint(){
      printed = true;
      qg.fillStyle = "#f6f1e4"; qg.fillRect(0, 0, PW, PH);
      qg.save(); qg.translate(PW, 0); qg.scale(-1, 1);          // the print is a mirror image of the plate
      qg.fillStyle = INKS[ink][1]; qg.fillRect(20, 20, PW - 40, PH - 40);
      const r = BM.rng(5); qg.globalAlpha = .12; for (let i=0;i<300;i++){ qg.fillStyle = "#fff"; qg.fillRect(20 + r()*(PW - 40), 20 + r()*(PH - 40), 2, 2); } qg.globalAlpha = 1;
      stroke(qg, lines, "#f6f1e4", 9);
      qg.restore(); BM.sfx("paper");
    }
    function sample(text){
      lines = [];
      const rnd = BM.rng(8);
      for (let i=0;i<14;i++){ const x = 60 + rnd()*400, y = 60 + rnd()*220; lines.push([[x - 8, y], [x + 8, y]], [[x, y - 8], [x, y + 8]]); }
      const ridge = []; for (let x=30;x<=490;x+=20) ridge.push([x, 420 - Math.abs(Math.sin(x/70))*90]); lines.push(ridge);
      if (text){ const L = [[ [60,520],[60,570] ],[ [60,545],[90,545] ],[ [90,520],[90,570] ],[ [110,570],[125,520],[140,570] ],[ [116,550],[134,550] ],[ [160,520],[160,570] ],[ [160,548],[188,520] ],[ [168,540],[188,570] ]]; lines.push(...L); }
      drawPlate();
    }
    const tip = h("div", { style:{ position:"absolute", left:"1110px", right:"0", top:"40px" } });
    host.appendChild(panel({ left:"1110px", right:"0", top:"40px", bottom:"0" }, [h("h4", { style:{ fontSize:"28px" } }, "Ink"), h("div", { style:{ display:"flex", flexDirection:"column", gap:"6px" } }, INKS.map(([n, c], i) => { const b = btn(n, () => { ink = i; if (printed) doPrint(); }, "dark sm"); b.style.borderLeft = `18px solid ${c}`; return b; })), setMD(h("p", { style:{ fontSize:"20px", marginTop:"12px" } }), "**Draw** into the plate. Every line you press in stays **paper-coloured** in the print.\n\nPress **Print** and look closely: the print is a **mirror image**! Try **Letters**.")]));
    controls(host, [btn("Clear", () => { lines = []; drawPlate(); qg.clearRect(0, 0, PW, PH); printed = false; }, "dark"), btn("Example", () => sample(false), "dark"), btn("Letters", () => sample(true), "dark"), btn("🖨 Print", doPrint, "on")]);
    drawPlate(); qg.fillStyle = "#f6f1e4"; qg.fillRect(0, 0, PW, PH);
    return { steps:2, step(k){ if (k === 0){ lines = []; drawPlate(); } if (k === 1) sample(true); if (k === 2) doPrint(); } };
  };
})(window.BM);
