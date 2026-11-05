/* ==========================================================
   WEEK 5 INTERACTIVES — The Silent Cities
   ========================================================== */
(function(FC){
  "use strict";
  const h = FC.h, s = FC.s, svg = FC.svg, A = FC.art, IX = FC.IX;
  const btn = (label, onclick, cls) => h("button", { class:"ixbtn " + (cls||""), onclick:(e) => { e.stopPropagation(); FC.sfx("tok"); onclick(e); } }, label);
  const panel = (w) => h("div", { class:"pcard", style:{ position:"absolute", right:"0", top:"0", width:(w||560)+"px", height:"690px", display:"flex", flexDirection:"column", gap:"14px" } });
  const ptitle = t => h("div", { style:{ fontFamily:"var(--f-display)", fontWeight:"900", fontSize:"44px", lineHeight:"1" } }, t);
  const pmsg = t => { const d = h("div", { style:{ fontSize:"25px", lineHeight:"1.3" } }); d.innerHTML = FC.md(t || ""); return d; };
  const big = (t, c) => h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"64px", lineHeight:".9", color:c || "#B3262E" } }, t);
  const darkB = b => { b.style.color = "var(--cacao-ink)"; b.style.boxShadow = "inset 0 0 0 2px rgba(90,56,37,.35)"; return b; };
  const small = b => { b.style.fontSize = "19px"; b.style.minHeight = "52px"; b.style.padding = "8px 10px"; return b; };
  const stop = el => { ["pointerdown","click","keydown","input"].forEach(ev => el.addEventListener(ev, e => e.stopPropagation())); return el; };
  const lbl = (x, y, t, c, size, anchor) => s("text", { x, y, "text-anchor":anchor || "middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":size || 26, fill:c || "#3b2418", "letter-spacing":1.5 }, t);
  let UID = 0;

  /* =======================================================
     MON · LiDAR reveal — drag the laser over the canopy
     ======================================================= */
  IX.lidar = function(host){
    const W = 1100, H = 690, id = "lid" + (++UID);
    const v = svg(W, H, { style:`position:absolute;left:0;top:0;width:${W}px;height:${H}px;cursor:ew-resize;touch-action:none;border-radius:16px` });
    v.innerHTML = `<defs><mask id="${id}"><rect width="${W}" height="${H}" fill="#fff"/><g id="${id}g"></g></mask>
      <linearGradient id="${id}b" x1="0" x2="1"><stop offset="0" stop-color="#7FF3FF" stop-opacity="0"/><stop offset=".5" stop-color="#7FF3FF" stop-opacity=".9"/><stop offset="1" stop-color="#7FF3FF" stop-opacity="0"/></linearGradient></defs>`;
    host.appendChild(v);
    const scanned = v.querySelector("#" + id + "g");
    // ground (hillshade city) — what LiDAR "sees"
    const city = s("g");
    city.appendChild(s("rect", { width:W, height:H, fill:"#c9c4b8" }));
    const rnd = FC.rng(55);
    for (let i=0;i<70;i++) city.appendChild(s("ellipse", { cx:rnd()*W, cy:rnd()*H, rx:20 + rnd()*60, ry:10 + rnd()*30, fill:"#b8b2a4", opacity:.6 }));
    const hill = (x, y, w, hh, levels) => { const g = s("g"); for (let l=0;l<levels;l++){ const k = 1 - l/levels; g.appendChild(s("rect", { x:x - w*k/2, y:y - hh*k/2, width:w*k, height:hh*k, rx:4, fill: l % 2 ? "#e9e4d8" : "#8f8878", stroke:"#5f5a50", "stroke-width":1.5 })); } return g; };
    const STRUCT = [];
    const add = (x, y, w, hh, lv, name) => { city.appendChild(hill(x, y, w, hh, lv)); STRUCT.push({ x, name }); };
    // causeways (sacbeob)
    city.appendChild(s("path", { d:"M60 360 L1040 330", stroke:"#e9e4d8", "stroke-width":22, opacity:.9 }));
    city.appendChild(s("path", { d:"M520 40 L540 650", stroke:"#e9e4d8", "stroke-width":18, opacity:.9 }));
    add(530, 340, 150, 150, 6, "Great pyramid"); add(330, 250, 110, 90, 5, "Temple"); add(760, 270, 120, 100, 5, "Temple");
    add(400, 470, 200, 80, 3, "Palace"); add(700, 470, 90, 90, 4, "Temple"); add(170, 380, 120, 60, 3, "Ballcourt");
    add(900, 400, 140, 70, 3, "Plaza"); add(250, 120, 80, 60, 3, "Platform"); add(860, 130, 90, 70, 4, "Temple"); add(980, 560, 80, 60, 3, "Platform");
    for (let i=0;i<46;i++){ const x = 40 + rnd()*1020, y = 40 + rnd()*610; city.appendChild(s("rect", { x, y, width:18 + rnd()*14, height:12 + rnd()*10, fill:"#a59e8e", stroke:"#5f5a50" })); STRUCT.push({ x, name:"House" }); }
    // terraces & defensive wall
    city.appendChild(s("path", { d:"M40 620 C 300 560, 600 640, 1060 590", stroke:"#5f5a50", "stroke-width":7, fill:"none", "stroke-dasharray":"18 8" }));
    v.appendChild(city);
    // canopy over the top, masked
    const can = s("g", { mask:`url(#${id})` });
    can.appendChild(s("rect", { width:W, height:H, fill:"#123a26" }));
    const r2 = FC.rng(9);
    for (let i=0;i<260;i++) can.appendChild(s("circle", { cx:r2()*W, cy:r2()*H, r:18 + r2()*40, fill:["#1b5534","#236b3f","#174a2d","#2c7a45"][i%4] }));
    v.appendChild(can);
    v.appendChild(lbl(30, 50, "LIDAR SURVEY · PETÉN", "#F4EBD8", 28, "start"));
    const beam = s("g", { opacity:0 });
    beam.appendChild(s("rect", { x:-40, y:0, width:80, height:H, fill:`url(#${id}b)` }));
    beam.appendChild(s("line", { x1:0, x2:0, y1:0, y2:H, stroke:"#E6FFFF", "stroke-width":3 }));
    v.appendChild(beam);
    const P = panel(600); host.appendChild(P);
    const found = big("0", "#2E9FB0"), msg = pmsg("**Drag** across the jungle to fire the laser scanner. Pulses of light slip through gaps in the leaves and bounce off the **ground**.");
    const ctr = h("div", { style:{ marginTop:"auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px" } });
    P.append(ptitle("LiDAR reveal"), h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"800", letterSpacing:".12em", fontSize:"18px", opacity:".7" } }, "STRUCTURES FOUND"), found, msg, ctr);
    let maxX = 0; const done = [];
    function scanTo(x){
      beam.setAttribute("opacity", 1); beam.setAttribute("transform", `translate(${x} 0)`);
      const r = s("rect", { x:x - 40, y:0, width:80, height:H, fill:"#000" }); scanned.appendChild(r);
      done.push([x - 40, x + 40]);
      const n = STRUCT.filter(st => done.some(([a, b]) => st.x >= a && st.x <= b)).length;
      found.textContent = String(n);
      if (n >= STRUCT.length * .95) msg.innerHTML = FC.md("**A whole city!** Pyramids, palaces, a ballcourt, causeways, houses and a defensive wall — hidden under the trees. In 2018 LiDAR found more than **60,000** structures in northern Guatemala.");
      else if (n > 12) msg.innerHTML = FC.md("Look — straight **causeways** (sacbeob) and stepped **platforms**. Trees don't grow in straight lines. These are human-made!");
      maxX = Math.max(maxX, x);
    }
    let drag = false;
    v.addEventListener("pointerdown", e => { e.stopPropagation(); drag = true; v.setPointerCapture(e.pointerId); scanTo(FC.toLocal(v, e)[0]); FC.sfx("zap"); });
    v.addEventListener("pointermove", e => { if (drag) scanTo(FC.toLocal(v, e)[0]); });
    v.addEventListener("pointerup", () => { drag = false; beam.setAttribute("opacity", 0); });
    v.addEventListener("click", e => e.stopPropagation());
    let raf;
    ctr.append(small(btn("✈ Auto-scan", () => { cancelAnimationFrame(raf); const t0 = performance.now(); FC.sfx("zap"); (function an(t){ const x = Math.min(W, (t - t0) / 3000 * W); scanTo(x); if (x < W) raf = requestAnimationFrame(an); else beam.setAttribute("opacity", 0); })(t0); }, "on")),
      small(darkB(btn("🌳 Regrow jungle", () => { cancelAnimationFrame(raf); FC.clear(scanned); done.length = 0; found.textContent = "0"; msg.innerHTML = FC.md("The jungle is back. From a plane it looks like **nothing is there**…"); }, "dark"))));
    return { destroy(){ cancelAnimationFrame(raf); } };
  };

  /* MON · Collapse evidence board */
  IX.collapse = function(host){
    const HYP = [{ k:"drought", t:"Drought", c:"#D9A23A", e:"☀️" }, { k:"war", t:"War", c:"#B3262E", e:"⚔️" }, { k:"forest", t:"Deforestation", c:"#1F7A5A", e:"🌳" }];
    const EV = [
      { t:"Lake mud", d:"Layers of mud in Yucatán lakes show the **worst droughts in centuries** around 800–1000 CE.", add:{ drought:3 } },
      { t:"More wars", d:"After about 750 CE, carvings mention **more battles and captured kings**. Some cities built walls in a hurry.", add:{ war:3 } },
      { t:"Pollen", d:"Pollen in lake mud shows **forests were cut down** for fields — and to burn for lime plaster.", add:{ forest:3 } },
      { t:"Skeletons", d:"Late-Classic skeletons show people were **less well fed**.", add:{ drought:1, forest:1 } },
      { t:"Not everywhere", d:"Cities in the **north**, like Chichén Itzá, kept growing after the southern cities emptied.", add:{ war:1 } },
      { t:"Fewer farms", d:"Cleared hillsides lost their soil in heavy rain, so **harvests shrank**.", add:{ forest:2, drought:1 } }
    ];
    const score = { drought:0, war:0, forest:0 }, MAX = 6;
    const cols = HYP.map((hy, i) => {
      const box = h("div", { class:"pcard", style:{ position:"absolute", left:(i*400)+"px", top:"0", width:"380px", height:"300px", padding:"18px 20px", display:"flex", flexDirection:"column", gap:"10px" } });
      const bar = h("i", { style:{ display:"block", height:"100%", width:"0%", background:hy.c, transition:"width .6s cubic-bezier(.3,1.3,.5,1)" } });
      const pct = h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"30px", color:hy.c } }, "0%");
      const list = h("div", { style:{ fontSize:"19px", lineHeight:"1.2", opacity:".85" } });
      box.append(h("div", { style:{ fontFamily:"var(--f-display)", fontWeight:"900", fontSize:"40px" } }, `${hy.e} ${hy.t}`), h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"800", letterSpacing:".12em", fontSize:"16px", opacity:".7" } }, "HOW CONFIDENT ARE WE?"),
        h("div", { style:{ height:"24px", borderRadius:"12px", background:"rgba(90,56,37,.15)", overflow:"hidden" } }, bar), pct, list);
      host.appendChild(box); return { bar, pct, list };
    });
    const P = h("div", { class:"pcard", style:{ position:"absolute", left:"1200px", top:"0", width:"560px", height:"300px", padding:"18px 22px" } });
    const msg = pmsg("Tap an **evidence card**. Which theory does it support? Discuss first — then tap to place it.");
    P.append(ptitle("Why did the cities empty?"), msg); host.appendChild(P);
    let used = 0;
    EV.forEach((e, i) => {
      const c = h("div", { class:"pcard hov", style:{ position:"absolute", left:((i%3)*590)+"px", top:(330 + Math.floor(i/3)*184)+"px", width:"570px", height:"168px", padding:"14px 18px", cursor:"pointer" } });
      const d = h("div", { style:{ fontSize:"22px", lineHeight:"1.25", marginTop:"6px" } }); d.innerHTML = FC.md(e.d);
      c.append(h("div", { style:{ fontFamily:"var(--f-display)", fontWeight:"900", fontSize:"30px" } }, `🔎 ${e.t}`), d);
      c.addEventListener("click", ev => { ev.stopPropagation(); if (c.dataset.used) return; c.dataset.used = "1"; used++; FC.sfx("paper");
        c.style.opacity = ".45"; c.style.transform = "scale(.97)";
        Object.entries(e.add).forEach(([k, n]) => { score[k] += n; const hi = HYP.findIndex(x => x.k === k); const p = Math.min(100, Math.round(score[k] / MAX * 100)); cols[hi].bar.style.width = p + "%"; cols[hi].pct.textContent = p + "%"; cols[hi].list.appendChild(h("div", null, "• " + e.t)); });
        msg.innerHTML = FC.md(used === EV.length ? "**All the evidence is in.** Most experts now think it was a **mix**: drought was the trigger, and war and deforestation made it much worse. That's why historians weigh *several* causes." : `**${e.t}** placed. ${EV.length - used} cards left.`);
        if (used === EV.length) FC.sfx("ok"); });
      host.appendChild(c);
    });
    return {};
  };

  /* =======================================================
     TUE · Deforestation time-lapse (fishbone pattern)
     ======================================================= */
  IX.deforest = function(host){
    const W = 1100, H = 610;
    const v = svg(W, H, { style:`position:absolute;left:0;top:0;width:${W}px;height:${H}px;border-radius:16px` });
    host.appendChild(v);
    const P = panel(600); host.appendChild(P);
    const yr = big("1975", "#1F7A5A"), pct = h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"32px" } }), msg = pmsg("");
    const slider = stop(h("input", { type:"range", min:1975, max:2020, step:1, value:1975, style:{ position:"absolute", left:"40px", top:"630px", width:"1020px", accentColor:"#B3262E" } }));
    host.appendChild(slider);
    const tg = h("div", { style:{ marginTop:"auto", display:"grid", gridTemplateColumns:"1fr", gap:"10px" } });
    let showT = true;
    const tb = small(btn("Show Indigenous territory", () => { showT = !showT; tb.classList.toggle("on", showT); draw(+slider.value); }, "on"));
    tg.append(tb);
    P.append(ptitle("Satellite time-lapse"), yr, pct, msg, tg);
    const rnd = FC.rng(21);
    const SIDES = Array.from({ length:22 }, (_, i) => ({ x:40 + i*46 + rnd()*10, start:1976 + rnd()*40, len:120 + rnd()*120, up: i % 2 === 0 }));
    const TX0 = 700; // territory starts at x
    function draw(y){
      FC.clear(v);
      v.appendChild(s("rect", { width:W, height:H, fill:"#1f5e36" }));
      const r3 = FC.rng(4); for (let i=0;i<160;i++) v.appendChild(s("circle", { cx:r3()*W, cy:r3()*H, r:10 + r3()*16, fill:i%2 ? "#236b3f" : "#1b5534" }));
      const t = (y - 1975) / 45;
      // main highway grows from the left
      const roadEnd = 40 + Math.min(1, t*1.6) * 1020;
      let cleared = 0, total = 0;
      SIDES.forEach(sd => {
        if (sd.x > roadEnd) return;
        const inT = sd.x > TX0 && showT;
        const age = Math.max(0, y - sd.start);
        const L = Math.min(sd.len, age * 9) * (inT ? .15 : 1);
        const wid = Math.min(40, age * 1.6) * (inT ? .2 : 1);
        if (L <= 0) return;
        const y0 = 300, y1 = sd.up ? y0 - L : y0 + L;
        v.appendChild(s("rect", { x:sd.x - wid/2 - 6, y:Math.min(y0, y1), width:wid + 12, height:Math.abs(y1 - y0), fill:"#c9a26a" }));
        v.appendChild(s("line", { x1:sd.x, x2:sd.x, y1:y0, y2:y1, stroke:"#e9dcc0", "stroke-width":3 }));
        cleared += (wid + 12) * L;
      });
      v.appendChild(s("rect", { x:40, y:300 - Math.min(26, t*40), width:Math.max(0, roadEnd - 40), height:Math.min(52, t*80), fill:"#c9a26a" }));
      v.appendChild(s("line", { x1:40, x2:roadEnd, y1:300, y2:300, stroke:"#F4EBD8", "stroke-width":6 }));
      if (showT){
        v.appendChild(s("rect", { x:TX0, y:20, width:W - TX0 - 20, height:H - 40, fill:"none", stroke:"#F0C25E", "stroke-width":5, "stroke-dasharray":"16 10", rx:20 }));
        v.appendChild(lbl(TX0 + 20, 58, "INDIGENOUS TERRITORY", "#F0C25E", 28, "start"));
      }
      v.appendChild(lbl(60, H - 24, "SIMPLIFIED MODEL OF A SATELLITE VIEW", "#F4EBD8", 20, "start"));
      total = W * H;
      const p = Math.min(60, Math.round(cleared / total * 100 * 1.6));
      yr.textContent = String(y); pct.textContent = `≈ ${p}% cleared`;
      msg.innerHTML = FC.md(y < 1985 ? "A new **highway** is cut into the forest. Drag the slider to move through time." :
        y < 2005 ? "Side roads branch off like the bones of a fish — the **fishbone pattern** seen from space. Land is cleared for **cattle**, farms and logging." :
        showT ? "Look at the **Indigenous territory**: far less forest has been cleared. Studies show forests guarded by Indigenous peoples are often **better protected**." :
        "Without protection the clearing keeps spreading across the whole forest.");
    }
    slider.addEventListener("input", () => draw(+slider.value));
    draw(1975);
    return {};
  };

  /* TUE · Perspectives wheel */
  IX.perspectives = function(host){
    const PEOPLE = [
      { n:"Farmer", e:"🧑‍🌾", c:"#D9A23A", view:"“I need land to feed my family and earn money. Clearing a little forest for cattle or soy helps us survive.”", ask:"What could help farmers earn a living **without** clearing more forest?" },
      { n:"Indigenous elder", e:"👵🏽", c:"#1F7A5A", view:"“This forest is our home, our food, our medicine and our ancestors' land. When it's gone, our way of life is gone.”", ask:"Why should Indigenous peoples have a strong say over their land?" },
      { n:"Government", e:"🏛️", c:"#2E9FB0", view:"“We need jobs, roads and money for schools and hospitals — and we must also protect the forest for the future.”", ask:"What rules or protected areas could balance jobs and forests?" },
      { n:"Consumer (us!)", e:"🛒", c:"#B3262E", view:"“I buy beef, chocolate, paper and furniture. I didn't know where they came from.”", ask:"How can shoppers in Aotearoa choose products that don't destroy forests?" },
      { n:"Scientist", e:"🔬", c:"#8B5BA8", view:"“The Amazon makes its own rain and stores huge amounts of carbon. Too much clearing could change the climate.”", ask:"What evidence would convince people to protect the forest?" }
    ];
    const W = 1100, H = 690, cx = 450, cy = 345, R = 300;
    const v = svg(W, H, { style:`position:absolute;left:0;top:0;width:${W}px;height:${H}px` });
    host.appendChild(v);
    const P = panel(640); host.appendChild(P);
    const who = h("div", { style:{ fontFamily:"var(--f-display)", fontWeight:"900", fontSize:"48px", lineHeight:"1" } }, "Perspectives wheel");
    const view = pmsg("Tap a person on the wheel. Every perspective is a **real** concern. Good decisions listen to all of them."), ask = h("div", { style:{ fontSize:"24px", lineHeight:"1.3", padding:"14px 18px", borderRadius:"10px", background:"rgba(31,122,90,.12)", display:"none" } });
    P.append(who, view, ask);
    let sel = -1;
    function draw(){
      FC.clear(v);
      PEOPLE.forEach((p, i) => {
        const a0 = (i/5)*Math.PI*2 - Math.PI/2, a1 = ((i+1)/5)*Math.PI*2 - Math.PI/2, on = i === sel, rr = on ? R + 16 : R;
        const d = `M${cx} ${cy} L${cx + rr*Math.cos(a0)} ${cy + rr*Math.sin(a0)} A${rr} ${rr} 0 0 1 ${cx + rr*Math.cos(a1)} ${cy + rr*Math.sin(a1)}Z`;
        const seg = s("path", { d, fill:p.c, stroke:"#14110F", "stroke-width":4, opacity: sel < 0 || on ? 1 : .55, style:"cursor:pointer;transition:opacity .3s", filter:"url(#fx-paper)" });
        seg.addEventListener("click", e => { e.stopPropagation(); sel = i; draw(); show(); FC.sfx("paper"); });
        v.appendChild(seg);
        const am = (a0 + a1)/2, tx = cx + R*.62*Math.cos(am), ty = cy + R*.62*Math.sin(am);
        const t = s("text", { x:tx, y:ty - 6, "text-anchor":"middle", "font-size":64, style:"pointer-events:none" }, p.e); v.appendChild(t);
        v.appendChild(Object.assign(lbl(tx, ty + 46, p.n.toUpperCase(), "#14110F", 24), { style:"pointer-events:none" }));
      });
      v.appendChild(s("circle", { cx, cy, r:60, fill:"#efe3c6", stroke:"#14110F", "stroke-width":4 }));
      v.appendChild(lbl(cx, cy + 10, "🌳 FOREST", "#1F7A5A", 26));
    }
    function show(){ const p = PEOPLE[sel]; who.textContent = `${p.e} ${p.n}`; view.innerHTML = FC.md(p.view); ask.style.display = "block"; ask.innerHTML = FC.md("**Ask:** " + p.ask); }
    draw();
    return {};
  };

  /* =======================================================
     FRI · Tone ladder + light on a sphere
     ======================================================= */
  IX.toneladder = function(host){
    const id = "tl" + (++UID);
    const W = 1100, H = 690;
    const v = svg(W, H, { style:`position:absolute;left:0;top:0;width:${W}px;height:${H}px;border-radius:16px;touch-action:none` });
    host.appendChild(v);
    v.innerHTML = `<defs><radialGradient id="${id}" cx=".35" cy=".35" r=".75"><stop offset="0" stop-color="#fbf7ee"/><stop offset=".35" stop-color="#cfc6b6"/><stop offset=".7" stop-color="#7d7466"/><stop offset="1" stop-color="#2e2a24"/></radialGradient>
      <pattern id="${id}h" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="10" stroke="#3b2418" stroke-width="2"/></pattern>
      <pattern id="${id}x" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0 V10 M0 0 H10" stroke="#3b2418" stroke-width="2"/></pattern></defs>`;
    v.appendChild(s("rect", { width:W, height:H, fill:"#efe3c6" }));
    const shadow = s("ellipse", { cx:420, cy:430, rx:170, ry:40, fill:"#2e2a24", opacity:.35 });
    const ball = s("circle", { cx:320, cy:300, r:170, fill:`url(#${id})`, stroke:"#3b2418", "stroke-width":3 });
    const sun = s("g", { style:"cursor:grab" }); sun.appendChild(s("circle", { r:34, fill:"#F0C25E", stroke:"#B9772D", "stroke-width":4 })); sun.appendChild(lbl(0, 64, "LIGHT", "#B9772D", 22));
    v.append(shadow, ball, sun);
    v.appendChild(lbl(320, 520, "DRAG THE LIGHT", "#5a3825", 22));
    // ladder
    const T = [
      { g:"2H", t:"Highlight", f:"#fbf7ee", how:"Leave the paper almost **white** where the light hits." },
      { g:"HB", t:"Light tone", f:"#d6cdbd", how:"Light, even **pressure** — small circles or soft strokes." },
      { g:"2B", t:"Mid tone", f:"#9d9384", how:"**Hatching**: parallel lines close together." },
      { g:"4B", t:"Dark tone", f:"#5e564a", how:"**Cross-hatching**: lines crossing in two directions." },
      { g:"6B", t:"Shadow", f:"#2e2a24", how:"Heavy pressure, layered — the **darkest** part, away from the light." }
    ];
    const P = panel(560); host.appendChild(P);
    const tt = ptitle("Tone ladder"), msg = pmsg("Tone = how **light or dark** something is. Tap a step on the ladder.");
    P.append(tt, msg);
    T.forEach((t, i) => {
      const y = 70 + i*112;
      const g = s("g", { style:"cursor:pointer" });
      g.appendChild(s("rect", { x:640, y, width:140, height:96, fill:t.f, stroke:"#3b2418", "stroke-width":3 }));
      if (i === 2) g.appendChild(s("rect", { x:640, y, width:140, height:96, fill:`url(#${id}h)`, opacity:.35 }));
      if (i === 3) g.appendChild(s("rect", { x:640, y, width:140, height:96, fill:`url(#${id}x)`, opacity:.45 }));
      g.appendChild(lbl(800, y + 44, t.g, "#3b2418", 34, "start")); g.appendChild(lbl(800, y + 76, t.t.toUpperCase(), "#5a3825", 20, "start"));
      g.addEventListener("click", e => { e.stopPropagation(); FC.sfx("paper"); tt.textContent = `${t.t} · ${t.g}`; msg.innerHTML = FC.md(t.how + " Use **3–5 tones** to make a flat shape look like rounded stone."); });
      v.appendChild(g);
    });
    let lx = 120, ly = 90, drag = false;
    function place(){
      sun.setAttribute("transform", `translate(${lx} ${ly})`);
      const dx = (lx - 320) / 400, dy = (ly - 300) / 400;
      const gr = v.querySelector("#" + id); gr.setAttribute("cx", (.5 + dx*.6).toFixed(2)); gr.setAttribute("cy", (.5 + dy*.6).toFixed(2));
      shadow.setAttribute("cx", 320 - dx*260); shadow.setAttribute("cy", 460);
    }
    sun.addEventListener("pointerdown", e => { e.stopPropagation(); drag = true; v.setPointerCapture(e.pointerId); });
    v.addEventListener("pointermove", e => { if (!drag) return; const [x, y] = FC.toLocal(v, e); lx = FC.clamp(x, 40, 600); ly = FC.clamp(y, 40, 300); place(); });
    v.addEventListener("pointerup", () => { drag = false; });
    v.addEventListener("click", e => e.stopPropagation());
    place();
    return {};
  };

  /* FRI · Profile portrait builder (step reveal) */
  IX.profile = function(host){
    const W = 900, H = 690;
    const v = svg(W, H, { style:`position:absolute;left:0;top:0;width:${W}px;height:${H}px;border-radius:16px` });
    host.appendChild(v);
    v.appendChild(s("rect", { width:W, height:H, fill:"#efe3c6" }));
    const L = [s("g"), s("g"), s("g"), s("g"), s("g")];
    // 0 head outline (sloping forehead, Maya profile)
    L[0].appendChild(s("path", { d:"M520 190 C 440 170, 380 200, 360 250 C 352 280, 330 300, 318 330 L 300 370 C 296 382, 312 384, 322 386 L 316 410 C 330 414, 334 420, 326 432 C 336 440, 336 452, 328 462 C 336 470, 352 474, 370 474 C 380 500, 400 520, 440 524 L 470 600 L 600 600 L 590 460 C 640 420, 640 300, 600 240 C 580 210, 550 196, 520 190Z", fill:"#d9b48a", stroke:"#3b2418", "stroke-width":5 }));
    // 1 guides
    [[330, "EYE LINE — halfway down the head"], [410, "NOSE LINE"], [462, "MOUTH LINE"]].forEach(([y, t]) => { L[1].appendChild(s("line", { x1:220, x2:700, y1:y, y2:y, stroke:"#2E9FB0", "stroke-width":3, "stroke-dasharray":"12 8" })); L[1].appendChild(lbl(706, y + 8, t, "#2E6FB0", 18, "start")); });
    L[1].appendChild(s("rect", { x:500, y:330, width:44, height:80, fill:"none", stroke:"#2E9FB0", "stroke-width":3 })); L[1].appendChild(lbl(522, 432, "EAR", "#2E6FB0", 18));
    // 2 features
    L[2].appendChild(s("path", { d:"M348 326 q16 -10 32 0 q-16 8 -32 0z", fill:"#fff", stroke:"#3b2418", "stroke-width":3 })); L[2].appendChild(s("circle", { cx:366, cy:326, r:5, fill:"#3b2418" }));
    L[2].appendChild(s("path", { d:"M332 446 q16 4 30 -2", stroke:"#3b2418", "stroke-width":4, fill:"none" }));
    L[2].appendChild(s("circle", { cx:522, cy:372, r:30, fill:"#1F7A5A", stroke:"#3b2418", "stroke-width":4 })); L[2].appendChild(s("circle", { cx:522, cy:372, r:11, fill:"#efe3c6" }));
    // 3 headdress (own symbols: a bird + flowers — not deity imagery)
    L[3].appendChild(s("path", { d:"M360 250 C 380 160, 520 120, 620 170 L 640 230 C 560 200, 440 210, 360 250Z", fill:"#B3262E", stroke:"#3b2418", "stroke-width":4 }));
    for (let i=0;i<6;i++) L[3].appendChild(s("path", { d:`M${560 + i*14} 170 q${30 + i*8} -90 ${80 + i*14} -120`, stroke:["#1F7A5A","#2E9FB0","#D9A23A"][i%3], "stroke-width":14, fill:"none", "stroke-linecap":"round" }));
    L[3].appendChild(s("path", { d:"M420 190 l20 -30 l20 30z", fill:"#D9A23A", stroke:"#3b2418", "stroke-width":3 }));
    // 4 tone
    L[4].appendChild(s("path", { d:"M590 460 C 640 420, 640 300, 600 240 C 620 320, 610 400, 560 470 L 600 600 L 590 460Z", fill:"#5e564a", opacity:.45 }));
    L[4].appendChild(s("path", { d:"M440 524 L470 600 L520 600 C 500 560, 480 540, 440 524Z", fill:"#5e564a", opacity:.45 }));
    L.forEach((g, i) => { g.style.transition = "opacity .5s"; g.setAttribute("opacity", i === 0 ? 1 : 0); v.appendChild(g); });
    const TXT = [
      ["1 · Profile outline", "Maya carvings show people **side-on** (in profile). Notice the **sloping forehead** — a sign of beauty for the Classic Maya."],
      ["2 · Proportion guides", "The **eye** sits about **halfway** down the head. The ear sits between the eye line and the nose line."],
      ["3 · Features", "Add the eye (almond-shaped, seen from the side), mouth and an **ear spool** (a round earring)."],
      ["4 · Headdress", "Kings wore tall **headdresses** with feathers and symbols. Design **your own** symbols — things that matter to you."],
      ["5 · Tone", "Add **3–5 tones**: dark on the side away from the light, so the carving looks like raised stone."]
    ];
    const P = h("div", { class:"pcard", style:{ position:"absolute", right:"0", top:"0", width:"820px", height:"690px", display:"flex", flexDirection:"column", gap:"14px" } });
    const tt = ptitle(TXT[0][0]), msg = pmsg(TXT[0][1]);
    P.append(tt, msg, h("div", { style:{ marginTop:"auto", fontFamily:"var(--f-label)", fontWeight:"800", letterSpacing:".12em", fontSize:"18px", color:"#B3262E" } }, "PRESS → TO ADD THE NEXT STEP"));
    host.appendChild(P);
    return { steps:4, step(k){ L.forEach((g, i) => g.setAttribute("opacity", i <= k ? 1 : 0)); tt.textContent = TXT[k][0]; msg.innerHTML = FC.md(TXT[k][1]); FC.sfx("paper"); } };
  };

  /* Folio V seal art — a map glyph pointing north and an eagle */
  A.mapFolio = function(){
    const v = svg(800, 1000);
    v.appendChild(s("rect", { width:800, height:1000, fill:"#efe3c6" }));
    v.appendChild(s("rect", { x:30, y:30, width:740, height:940, fill:"none", stroke:"#B3262E", "stroke-width":10 }));
    v.appendChild(s("rect", { x:50, y:50, width:700, height:900, fill:"none", stroke:"#B3262E", "stroke-width":3 }));
    const g = s("g", { filter:"url(#fx-rough)" });
    // footprints path (Mesoamerican map convention) heading north
    for (let i=0;i<9;i++){ const x = 300 + Math.sin(i*.7)*60, y = 880 - i*80; g.appendChild(s("ellipse", { cx:x - 14, cy:y, rx:12, ry:20, fill:"#3b2418" })); g.appendChild(s("ellipse", { cx:x + 16, cy:y - 34, rx:12, ry:20, fill:"#3b2418" })); }
    g.appendChild(s("path", { d:"M240 900 C 320 700, 220 500, 330 260", stroke:"#B3262E", "stroke-width":6, fill:"none", "stroke-dasharray":"16 12" }));
    // lake + island
    g.appendChild(s("ellipse", { cx:470, cy:260, rx:220, ry:120, fill:"#2E9FB0" }));
    g.appendChild(s("ellipse", { cx:470, cy:260, rx:60, ry:36, fill:"#c9a06a" }));
    // cactus + eagle
    g.appendChild(s("path", { d:"M470 250 v-80 M470 210 h-30 v-30 M470 195 h28 v-26", stroke:"#1F7A5A", "stroke-width":18, "stroke-linecap":"round", fill:"none" }));
    g.appendChild(s("path", { d:"M470 150 l-70 -40 l40 -6 l-30 -30 l60 22 l10 -40 l20 44 l58 -24 l-30 34 l40 6 l-70 40z", fill:"#5a3825" }));
    g.appendChild(s("circle", { cx:470, cy:110, r:14, fill:"#5a3825" }));
    v.appendChild(g);
    v.appendChild(lbl(560, 860, "↑ NORTH", "#B3262E", 44));
    return v;
  };
})(window.FC);
