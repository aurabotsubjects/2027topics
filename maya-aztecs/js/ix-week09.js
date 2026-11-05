/* ==========================================================
   WEEK 9 INTERACTIVES — Meeting of Worlds
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

  /* =======================================================
     MON · Conquest timeline (step) + two-lens viewer
     ======================================================= */
  IX.conquest = function(host){
    const EV = [
      { y:"Apr 1519", t:"Arrival", d:"Hernán Cortés lands on the Gulf coast with about **500 soldiers**. **Malintzin** (La Malinche), a Nahua woman who spoke Nahuatl and Maya, becomes his interpreter." },
      { y:"Sep 1519", t:"Tlaxcala", d:"After fighting, the **Tlaxcalans** — long-time enemies of the Mexica — join the Spanish. Tens of thousands of **Indigenous allies** will fight alongside them." },
      { y:"Nov 1519", t:"The meeting", d:"**Moctezuma II** welcomes Cortés into Tenochtitlan. Soon after, the Spanish take him prisoner in his own city." },
      { y:"Jun 1520", t:"La Noche Triste", d:"Moctezuma dies. The Mexica rise up and drive the Spanish out in a terrible night of fighting — the ‘Sad Night’." },
      { y:"Late 1520", t:"Smallpox", d:"A **smallpox** epidemic sweeps the city. The Mexica had no immunity; huge numbers died, including the new ruler Cuitláhuac." },
      { y:"13 Aug 1521", t:"The fall", d:"After a long siege, Tenochtitlan falls. The last ruler, **Cuauhtémoc**, is captured. The Spanish begin building Mexico City on the ruins." }
    ];
    const W = 1100;
    const v = svg(W, 690, { style:"position:absolute;left:0;top:0;width:1100px;height:690px;border-radius:16px" });
    host.appendChild(v);
    v.appendChild(s("rect", { width:W, height:690, fill:"#efe3c6" }));
    v.appendChild(s("line", { x1:60, x2:1040, y1:340, y2:340, stroke:"#3b2418", "stroke-width":6 }));
    const dots = EV.map((e, i) => {
      const x = 90 + i*184, g = s("g", { opacity:.25, style:"transition:opacity .4s" });
      g.appendChild(s("circle", { cx:x, cy:340, r:22, fill:["#2E9FB0","#1F7A5A","#D9A23A","#B3262E","#5a3825","#14110F"][i], stroke:"#3b2418", "stroke-width":3 }));
      g.appendChild(lbl(x, i % 2 ? 410 : 290, e.y, "#3b2418", 26)); g.appendChild(lbl(x, i % 2 ? 444 : 256, e.t.toUpperCase(), "#B3262E", 22));
      v.appendChild(g); return g;
    });
    const P = panel(600); host.appendChild(P);
    const tt = ptitle(EV[0].t), msg = pmsg(EV[0].d);
    P.append(h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"800", letterSpacing:".14em", color:"#B3262E", fontSize:"20px" } }, "1519–1521 · PRESS → FOR THE NEXT EVENT"), tt, msg);
    function step(k){ dots.forEach((g, i) => g.setAttribute("opacity", i <= k ? 1 : .25)); tt.textContent = `${EV[k].y} · ${EV[k].t}`; msg.innerHTML = FC.md(EV[k].d); FC.sfx("paper"); }
    step(0);
    return { steps:EV.length - 1, step };
  };

  IX.twolens = function(host){
    const MOM = [
      { t:"The meeting, Nov 1519", sp:"Cortés wrote to the King of Spain that Moctezuma welcomed him with gifts and a long speech, and that he (Cortés) was treated with honour. He presents himself as calm, clever and in control.", na:"The Nahua account in the Florentine Codex describes Moctezuma going out with flowers and gifts, and the Spanish seizing him soon after. It remembers fear, confusion and a city that ‘felt as if it had died’." },
      { t:"The Sad Night, Jun 1520", sp:"Spanish writers called it **La Noche Triste** — the Sad Night — mourning their losses as they fled the city in the dark, carrying gold.", na:"For the Mexica, it was a **victory**: the invaders were driven out of the city. Nahua accounts describe warriors fighting from canoes on the canals." },
      { t:"Smallpox, 1520", sp:"Spanish accounts mention the sickness briefly — some writers even saw it as a sign that God was on their side.", na:"The Nahua account describes the sickness in detail: sores covering bodies, people unable to move, and many dying of hunger because no one could care for them." }
    ];
    let k = 0, lens = "sp";
    const card = h("div", { class:"pcard", style:{ position:"absolute", left:"0", top:"0", width:"1100px", height:"690px", padding:"30px 36px", display:"flex", flexDirection:"column", gap:"18px", transition:"background .4s" } });
    host.appendChild(card);
    const tag = h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", letterSpacing:".16em", fontSize:"26px" } });
    const tt = h("div", { style:{ fontFamily:"var(--f-display)", fontWeight:"900", fontSize:"54px", lineHeight:"1" } });
    const body = h("div", { style:{ fontSize:"32px", lineHeight:"1.35" } });
    card.append(tag, tt, body, h("div", { style:{ marginTop:"auto", fontSize:"19px", opacity:".75" } }, "Paraphrased summaries for Years 5–6 — not exact quotes."));
    const P = panel(600); host.appendChild(P);
    const msg = pmsg("Two sources describe the **same moment**. Switch lenses. What's **different**? Why might each writer tell it that way?");
    const g = h("div", { style:{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px" } });
    const bS = small(btn("🇪🇸 Spanish account", () => { lens = "sp"; draw(); }, "on")), bN = small(btn("🪶 Nahua account", () => { lens = "na"; draw(); }, ""));
    g.append(bS, bN);
    const mg = h("div", { style:{ marginTop:"auto", display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"8px" } });
    MOM.forEach((m, i) => mg.appendChild(small(darkB(btn(["Meeting","Sad Night","Smallpox"][i], () => { k = i; draw(); }, "dark")))));
    P.append(ptitle("Two lenses"), msg, g, mg);
    function draw(){
      const m = MOM[k], sp = lens === "sp";
      bS.classList.toggle("on", sp); bN.classList.toggle("on", !sp);
      card.style.background = sp ? "#e8e2d4" : "#efe3c6";
      tag.textContent = sp ? "SPANISH ACCOUNT · e.g. Cortés' letters, Bernal Díaz" : "NAHUA ACCOUNT · Florentine Codex (Book 12), gathered with Sahagún";
      tag.style.color = sp ? "#5a6a70" : "#1F7A5A";
      tt.textContent = m.t; body.innerHTML = FC.md(sp ? m.sp : m.na);
      FC.sfx("paper");
    }
    draw();
    return {};
  };

  /* MON/generic · weighted factors board */
  IX.factors = function(host, cfg){
    const F = cfg.factors || [];
    const bars = [];
    const box = h("div", { class:"pcard", style:{ position:"absolute", left:"0", top:"0", width:"1100px", height:"690px", padding:"24px 30px", display:"flex", flexDirection:"column", gap:"14px" } });
    host.appendChild(box);
    F.forEach((f, i) => {
      const bar = h("i", { style:{ display:"block", height:"100%", width:"0%", background:f.c, transition:"width .6s cubic-bezier(.3,1.3,.5,1)" } });
      const row = h("div", { class:"hov", style:{ display:"grid", gridTemplateColumns:"70px 330px 1fr", gap:"16px", alignItems:"center", cursor:"pointer", padding:"8px 10px", borderRadius:"12px" } },
        h("div", { style:{ fontSize:"52px", textAlign:"center" } }, f.e), h("div", { style:{ fontFamily:"var(--f-display)", fontWeight:"900", fontSize:"32px", lineHeight:"1.05" } }, f.t),
        h("div", { style:{ height:"34px", borderRadius:"17px", background:"rgba(90,56,37,.12)", overflow:"hidden" } }, bar));
      row.addEventListener("click", e => { e.stopPropagation(); bar.style.width = f.w + "%"; msg.innerHTML = FC.md(f.d); tt.textContent = `${f.e} ${f.t}`; FC.sfx("paper"); });
      box.appendChild(row); bars.push(bar);
    });
    const P = panel(600); host.appendChild(P);
    const tt = ptitle(cfg.title || "Weigh the factors"), msg = pmsg(cfg.intro || "Tap each factor.");
    P.append(tt, msg, h("div", { style:{ marginTop:"auto", fontSize:"19px", opacity:".75" } }, cfg.note || "Bar length = how important many historians think it was. Historians still debate the balance."));
    return {};
  };

  /* =======================================================
     TUE · El Niño toggle
     ======================================================= */
  IX.elnino = function(host){
    const W = 1100, H = 690;
    const v = svg(W, H, { style:`position:absolute;left:0;top:0;width:${W}px;height:${H}px;border-radius:16px` });
    host.appendChild(v);
    const P = panel(600); host.appendChild(P);
    const tt = ptitle("Normal year"), msg = pmsg("");
    const g = h("div", { style:{ marginTop:"auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px" } });
    let el = false;
    const bN = small(btn("Normal year", () => { el = false; draw(); }, "on")), bE = small(btn("🌡️ El Niño year", () => { el = true; draw(); }, ""));
    g.append(bN, bE);
    P.append(tt, msg, g);
    function draw(){
      bN.classList.toggle("on", !el); bE.classList.toggle("on", el);
      FC.clear(v);
      v.appendChild(s("rect", { width:W, height:H, fill:"#1d4f73" }));
      // land: Australia/Asia left, NZ, South America right
      v.appendChild(s("path", { d:"M0 360 L120 330 L170 400 L130 520 L40 540 L0 520Z", fill:"#8a7a5a" }));
      v.appendChild(lbl(70, 450, "AUSTRALIA", "#F4EBD8", 20));
      v.appendChild(s("path", { d:"M210 560 l20 -40 l14 30 l-10 40z M190 620 l24 -30 l8 30 l-26 30z", fill:"#8a7a5a" }));
      v.appendChild(lbl(250, 660, "AOTEAROA", "#F4EBD8", 20));
      v.appendChild(s("path", { d:"M1100 120 L960 160 L930 260 L980 380 L1010 520 L1100 640Z", fill:"#8a7a5a" }));
      v.appendChild(lbl(1040, 330, "PERU", "#F4EBD8", 20));
      v.appendChild(s("line", { x1:0, x2:930, y1:280, y2:280, stroke:"rgba(255,255,255,.4)", "stroke-width":2, "stroke-dasharray":"10 8" })); v.appendChild(lbl(500, 270, "EQUATOR", "rgba(255,255,255,.7)", 18));
      // warm pool
      const wx = el ? 640 : 280;
      const wp = s("ellipse", { cx:wx, cy:280, rx:el ? 300 : 230, ry:90, fill:"#E4572E", opacity:.55, filter:"url(#fx-glow)" }); v.appendChild(wp);
      v.appendChild(lbl(wx, 290, "WARM WATER", "#fff", 24));
      if (!el){ v.appendChild(s("ellipse", { cx:880, cy:300, rx:70, ry:60, fill:"#7FB8F0", opacity:.6 })); v.appendChild(lbl(880, 310, "COOL", "#14110F", 20)); }
      // clouds
      const cx0 = el ? 700 : 250;
      for (let i=0;i<4;i++) v.appendChild(s("ellipse", { cx:cx0 + i*55, cy:150 + (i%2)*20, rx:60, ry:30, fill:"#e9eef2", opacity:.9 }));
      for (let i=0;i<10;i++) v.appendChild(s("line", { x1:cx0 - 30 + i*22, y1:190, x2:cx0 - 40 + i*22, y2:220, stroke:"#7FB8F0", "stroke-width":3 }));
      v.appendChild(lbl(cx0 + 80, 110, "RAIN CLOUDS", "#e9eef2", 22));
      // trade winds
      const ar = (x1, x2, y) => { v.appendChild(s("path", { d:`M${x1} ${y} L${x2} ${y}`, stroke:"#F0C25E", "stroke-width":5 })); v.appendChild(s("path", { d:`M${x2} ${y} l14 -8 v16z`, fill:"#F0C25E", transform: x2 < x1 ? `rotate(180 ${x2} ${y})` : "" })); };
      if (!el){ ar(860, 560, 400); ar(760, 460, 430); v.appendChild(lbl(660, 470, "STRONG TRADE WINDS →", "#F0C25E", 20)); }
      else { ar(780, 680, 400); v.appendChild(lbl(730, 450, "WEAK WINDS", "#F0C25E", 20)); }
      tt.textContent = el ? "El Niño year" : "Normal year";
      msg.innerHTML = FC.md(el ? "The trade winds **weaken**. Warm water spreads **east** towards South America. Peru's coast gets **heavy rain and floods**, and fish become scarce. Peruvian fishermen named it **El Niño** (‘the Christ child’) because the warm water often arrived around **Christmas**. In **Aotearoa**, El Niño often brings more **westerly winds**: wetter in the west, **drier in the east** (like Canterbury)." :
        "Strong **trade winds** blow west across the Pacific, piling **warm water** near Australia and Asia. Cold, nutrient-rich water rises off **Peru** — great for fish.");
      FC.sfx("paper");
    }
    draw();
    return {};
  };

  /* TUE · Glacier retreat (illustrative) */
  IX.glacier = function(host){
    const W = 1100, H = 690;
    const v = svg(W, H, { style:`position:absolute;left:0;top:0;width:${W}px;height:${H}px;border-radius:16px` });
    host.appendChild(v);
    const P = panel(600); host.appendChild(P);
    const yr = big("1980", "#2E6FB0"), msg = pmsg("");
    const sl = stop(h("input", { type:"range", min:1980, max:2025, step:1, value:1980, style:{ position:"absolute", left:"40px", top:"640px", width:"1020px", accentColor:"#2E6FB0" } }));
    host.appendChild(sl);
    P.append(ptitle("Shrinking glaciers"), yr, msg, h("div", { style:{ marginTop:"auto", fontSize:"19px", opacity:".75" } }, "An illustration of the trend — not measurements of one real glacier."));
    function draw(){
      const y = +sl.value, t = (y - 1980) / 45;
      FC.clear(v);
      v.appendChild(s("rect", { width:W, height:H, fill:"#bcd6e8" }));
      v.appendChild(s("path", { d:"M0 620 L260 300 L420 140 L560 90 L700 160 L860 320 L1100 600 V690 H0Z", fill:"#7d6a5a" }));
      const snow = 1 - t*.75, line = 90 + 270*snow;
      const cid = "glc" + Math.random().toString(36).slice(2,7);
      const defs = s("defs"); const cp = s("clipPath", { id:cid }); cp.appendChild(s("path", { d:"M0 620 L260 300 L420 140 L560 90 L700 160 L860 320 L1100 600 V690 H0Z" })); defs.appendChild(cp); v.appendChild(defs);
      v.appendChild(s("rect", { x:0, y:0, width:W, height:line, fill:"#f4f8fb", "clip-path":`url(#${cid})` }));
      v.appendChild(s("path", { d:`M560 ${line} C 600 470, 500 520, 520 560`, stroke:"#2E9FB0", "stroke-width": 3 + 12*snow, fill:"none", "stroke-linecap":"round" }));
      for (let i=0;i<8;i++) v.appendChild(s("rect", { x:400 + i*30, y:556, width:22, height:20, fill:"#efe3c6", stroke:"#5a3825" }));
      v.appendChild(lbl(520, 610, "CITY THAT USES MELTWATER", "#14110F", 20));
      v.appendChild(lbl(60, 632, "1980", "#14110F", 18)); v.appendChild(lbl(1040, 632, "2025", "#14110F", 18));
      yr.textContent = String(y);
      msg.innerHTML = FC.md("Many **Andes glaciers** have shrunk a lot since the 1970s as the climate warms. Cities like **La Paz** and **Lima** rely partly on glacier **meltwater**, especially in the dry season. Bolivia's **Chacaltaya** glacier — once a ski slope — had melted away by about **2009**.");
    }
    sl.addEventListener("input", draw); draw();
    return {};
  };

  /* =======================================================
     WED · Angle of reflection demo
     ======================================================= */
  IX.reflect = function(host){
    const W = 1100, H = 690, mx = 550, my = 560;
    const v = svg(W, H, { style:`position:absolute;left:0;top:0;width:${W}px;height:${H}px;border-radius:16px;touch-action:none` });
    host.appendChild(v);
    const P = panel(600); host.appendChild(P);
    const ang = big("40°", "#D9A23A"), msg = pmsg("**Drag the torch.** The light hits the **obsidian mirror** and bounces off. Compare the angle **in** with the angle **out**.");
    P.append(ptitle("Angle in = angle out"), ang, msg);
    let a = 40, drag = false;
    function draw(){
      FC.clear(v);
      v.appendChild(s("rect", { width:W, height:H, fill:"#1b2124" }));
      v.appendChild(s("rect", { x:mx - 300, y:my, width:600, height:22, rx:6, fill:"#14110F", stroke:"#5a6a70", "stroke-width":3 }));
      v.appendChild(lbl(mx, my + 56, "OBSIDIAN MIRROR", "#9aa4a8", 22));
      v.appendChild(s("line", { x1:mx, x2:mx, y1:my, y2:my - 420, stroke:"rgba(255,255,255,.4)", "stroke-width":2, "stroke-dasharray":"10 8" }));
      v.appendChild(lbl(mx, my - 430, "NORMAL (90° to the mirror)", "rgba(255,255,255,.6)", 18));
      const r = a * Math.PI / 180, L = 420;
      const sx = mx - Math.sin(r)*L, sy = my - Math.cos(r)*L, ex = mx + Math.sin(r)*L, ey = my - Math.cos(r)*L;
      v.appendChild(s("line", { x1:sx, y1:sy, x2:mx, y2:my, stroke:"#F0C25E", "stroke-width":6, filter:"url(#fx-glow)" }));
      v.appendChild(s("line", { x1:mx, y1:my, x2:ex, y2:ey, stroke:"#F0C25E", "stroke-width":6, filter:"url(#fx-glow)" }));
      const arc = (dir) => { const rr = 110; const x1 = mx, y1 = my - rr, x2 = mx + dir*Math.sin(r)*rr, y2 = my - Math.cos(r)*rr; v.appendChild(s("path", { d:`M${x1} ${y1} A${rr} ${rr} 0 0 ${dir > 0 ? 1 : 0} ${x2} ${y2}`, stroke:"#7FF3FF", "stroke-width":4, fill:"none" })); };
      arc(-1); arc(1);
      v.appendChild(lbl(mx - 70, my - 140, `${a}°`, "#7FF3FF", 30)); v.appendChild(lbl(mx + 70, my - 140, `${a}°`, "#7FF3FF", 30));
      const torch = s("g", { transform:`translate(${sx} ${sy}) rotate(${-a + 180})`, style:"cursor:grab" });
      torch.appendChild(s("rect", { x:-18, y:-60, width:36, height:70, rx:8, fill:"#B3262E", stroke:"#14110F", "stroke-width":3 }));
      torch.appendChild(s("rect", { x:-24, y:6, width:48, height:16, rx:4, fill:"#D9A23A" }));
      torch.addEventListener("pointerdown", e => { e.stopPropagation(); drag = true; v.setPointerCapture(e.pointerId); });
      v.appendChild(torch);
      ang.textContent = `in ${a}° · out ${a}°`;
    }
    v.addEventListener("pointermove", e => { if (!drag) return; const [x, y] = FC.toLocal(v, e); a = Math.round(FC.clamp(Math.atan2(mx - x, my - y) * 180 / Math.PI, 5, 80)); draw(); });
    v.addEventListener("pointerup", () => { drag = false; });
    v.addEventListener("click", e => e.stopPropagation());
    draw();
    return {};
  };

  /* WED · Mirror maze — light the codex */
  IX.mirrormaze = function(host, cfg){
    cfg = cfg || {};
    const G = 7, C = 90, ox = 30, oy = 30;
    const W = 1100, H = 690;
    const v = svg(W, H, { style:`position:absolute;left:0;top:0;width:${W}px;height:${H}px;border-radius:16px` });
    host.appendChild(v);
    // grid of cells; mirrors at fixed cells with orientation "/" or "\"
    const LEVELS = [
      { src:[0, 1, "E"], tgt:[5, 5], mirrors:[[3,1,"/"],[3,4,"\\"],[5,4,"/"],[1,3,"/"]], walls:[[4,2],[2,4],[5,2]] },
      { src:[0, 5, "E"], tgt:[6, 0], mirrors:[[2,5,"/"],[2,2,"\\"],[4,2,"/"],[4,0,"\\"],[6,3,"/"]], walls:[[3,3],[1,1],[5,5]] }
    ];
    let L = 0, M = [];
    const P = panel(600); host.appendChild(P);
    const msg = pmsg("**Tap a mirror** to turn it. Bounce the beam from the torch to the **codex** in the dark chamber!");
    const ctr = h("div", { style:{ marginTop:"auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px" } });
    ctr.append(small(btn("Chamber 1", () => load(0), "on")), small(btn("Chamber 2 (harder)", () => load(1), "")));
    P.append(ptitle("Mirror maze"), msg, ctr);
    function load(i){ L = i; M = LEVELS[i].mirrors.map(m => ({ x:m[0], y:m[1], o:m[2] })); [...ctr.children].forEach((b, k) => b.classList.toggle("on", k === i)); draw(); }
    const D = { E:[1,0], W:[-1,0], N:[0,-1], S:[0,1] };
    const bounce = (dir, o) => o === "/" ? ({ E:"N", N:"E", W:"S", S:"W" })[dir] : ({ E:"S", S:"E", W:"N", N:"W" })[dir];
    function draw(){
      FC.clear(v);
      const Lv = LEVELS[L];
      v.appendChild(s("rect", { width:W, height:H, fill:"#120e0b" }));
      for (let x=0;x<G;x++) for (let y=0;y<G;y++) v.appendChild(s("rect", { x:ox + x*C, y:oy + y*C, width:C - 4, height:C - 4, rx:6, fill:"#1e1813" }));
      Lv.walls.forEach(([x, y]) => v.appendChild(s("rect", { x:ox + x*C, y:oy + y*C, width:C - 4, height:C - 4, rx:6, fill:"#5a4a3a", stroke:"#3b2a1e", "stroke-width":3 })));
      // trace
      let [x, y, dir] = Lv.src, pts = [[ox + x*C + C/2, oy + y*C + C/2]], hit = false, guard = 0;
      while (guard++ < 60){
        x += D[dir][0]; y += D[dir][1];
        if (x < 0 || y < 0 || x >= G || y >= G){ pts.push([ox + (x + .5)*C - D[dir][0]*C/2, oy + (y + .5)*C - D[dir][1]*C/2]); break; }
        const cxp = ox + x*C + C/2, cyp = oy + y*C + C/2;
        if (Lv.walls.some(w => w[0] === x && w[1] === y)){ pts.push([cxp - D[dir][0]*C/2, cyp - D[dir][1]*C/2]); break; }
        if (x === Lv.tgt[0] && y === Lv.tgt[1]){ pts.push([cxp, cyp]); hit = true; break; }
        const m = M.find(m => m.x === x && m.y === y);
        if (m){ pts.push([cxp, cyp]); dir = bounce(dir, m.o); }
      }
      v.appendChild(s("polyline", { points:pts.map(p => p.join(",")).join(" "), fill:"none", stroke:"#F0C25E", "stroke-width":8, filter:"url(#fx-glow)", "stroke-linejoin":"round" }));
      // torch
      const [sx, sy] = Lv.src; v.appendChild(s("rect", { x:ox + sx*C + 16, y:oy + sy*C + 26, width:50, height:34, rx:6, fill:"#B3262E" })); v.appendChild(lbl(ox + sx*C + 42, oy + sy*C + 20, "TORCH", "#F0C25E", 16));
      // target codex
      const [tx, ty] = Lv.tgt;
      if (hit) v.appendChild(s("circle", { cx:ox + tx*C + C/2, cy:oy + ty*C + C/2, r:90, fill:"url(#g-lamp)" }));
      v.appendChild(s("rect", { x:ox + tx*C + 18, y:oy + ty*C + 22, width:52, height:42, fill: hit ? "#F0C25E" : "#5a4a3a", stroke:"#14110F", "stroke-width":3 }));
      v.appendChild(lbl(ox + tx*C + 44, oy + ty*C + 82, "CODEX", hit ? "#F0C25E" : "#8a7a62", 16));
      // mirrors
      M.forEach(m => {
        const cx = ox + m.x*C + C/2, cy = oy + m.y*C + C/2, d = 30;
        const g = s("g", { style:"cursor:pointer" });
        g.appendChild(s("rect", { x:cx - C/2 + 2, y:cy - C/2 + 2, width:C - 8, height:C - 8, fill:"rgba(127,243,255,.06)", rx:6 }));
        g.appendChild(s("line", { x1:cx - d, y1: m.o === "/" ? cy + d : cy - d, x2:cx + d, y2: m.o === "/" ? cy - d : cy + d, stroke:"#cfe8ee", "stroke-width":10, "stroke-linecap":"round" }));
        g.addEventListener("click", e => { e.stopPropagation(); m.o = m.o === "/" ? "\\" : "/"; FC.sfx("tok"); draw(); });
        v.appendChild(g);
      });
      msg.innerHTML = FC.md(hit ? "**The codex is lit!** Each mirror turns the beam by reflecting it — angle in = angle out. The Aztecs polished **obsidian** to make dark mirrors like these." : "**Tap a mirror** to turn it. Bounce the beam from the torch to the **codex** in the dark chamber!");
      if (hit) FC.sfx("ok");
    }
    load(0);
    return {};
  };

  /* =======================================================
     THU · Temple of Light build steps (art)
     ======================================================= */
  FC.art.templeStep = function(n){
    const v = svg(800, 600);
    v.appendChild(s("rect", { width:800, height:600, rx:20, fill:"#efe3c6" }));
    const g = s("g", { filter:"url(#fx-paper)" });
    const box = () => { g.appendChild(s("path", { d:"M160 460 L160 220 L560 220 L560 460Z", fill:"#c9a06a", stroke:"#3b2418", "stroke-width":4 })); g.appendChild(s("path", { d:"M160 220 L240 160 L640 160 L560 220Z", fill:"#d9b88a", stroke:"#3b2418", "stroke-width":4 })); g.appendChild(s("path", { d:"M560 460 L640 400 L640 160 L560 220Z", fill:"#a8804e", stroke:"#3b2418", "stroke-width":4 })); };
    if (n === 0){
      g.appendChild(s("rect", { x:180, y:110, width:440, height:380, fill:"#fff8e8", stroke:"#3b2418", "stroke-width":4 }));
      ["STAKEHOLDER:", "NEED:", "SPEC 1 ✓", "SPEC 2 ✓", "SPEC 3 ✓"].forEach((t, i) => g.appendChild(lbl(210, 170 + i*62, t, "#3b2418", 28, "start")));
    } else if (n === 1){
      box(); g.appendChild(lbl(360, 540, "A SHOE BOX = YOUR TEMPLE", "#3b2418", 26));
    } else if (n === 2){
      box();
      g.appendChild(s("path", { d:"M260 460 h200 l-30 -60 h-140z M300 400 l20 -50 h80 l20 50z", fill:"#efe3c6", stroke:"#3b2418", "stroke-width":3 }));
      g.appendChild(lbl(360, 540, "BUILD SCENERY FROM CARD", "#3b2418", 26));
    } else if (n === 3){
      box();
      g.appendChild(s("path", { d:"M600 300 H700 V420 H620", stroke:"#C46A3A", "stroke-width":6, fill:"none" }));
      g.appendChild(s("rect", { x:680, y:420, width:60, height:80, rx:8, fill:"#2A2420", stroke:"#D9A23A", "stroke-width":3 }));
      g.appendChild(s("circle", { cx:360, cy:280, r:18, fill:"#FFE28A" })); g.appendChild(s("circle", { cx:360, cy:280, r:60, fill:"url(#g-lamp)" }));
      g.appendChild(lbl(400, 560, "WIRE THE CIRCUIT (SWITCH / PLATE / ARDUINO)", "#3b2418", 22));
    } else {
      box();
      g.appendChild(s("circle", { cx:360, cy:280, r:18, fill:"#FFE28A" })); g.appendChild(s("circle", { cx:360, cy:280, r:90, fill:"url(#g-lamp)" }));
      g.appendChild(lbl(400, 560, "TEST AGAINST EVERY SPEC · IMPROVE", "#3b2418", 24));
    }
    v.appendChild(g);
    return v;
  };

  /* =======================================================
     FRI · Weave simulator
     ======================================================= */
  IX.weave = function(host){
    const W = 1000, H = 690, N = 24, cell = 24;
    const v = svg(W, H, { style:`position:absolute;left:0;top:0;width:${W}px;height:${H}px;border-radius:16px` });
    host.appendChild(v);
    const PALS = [["#B3262E","#1F4F8A","#D9A23A","#1F7A5A"],["#8B5BA8","#E4572E","#F0C25E","#2EB0A0"],["#14110F","#B3262E","#efe3c6","#D9A23A"]];
    let pat = "plain", pal = 0;
    const P = h("div", { class:"pcard", style:{ position:"absolute", right:"0", top:"0", width:"740px", height:"690px", display:"flex", flexDirection:"column", gap:"12px" } });
    host.appendChild(P);
    const msg = pmsg("");
    const g = h("div", { style:{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"8px" } });
    [["plain","Over-under"],["twill","Twill (diagonal)"],["diamond","Diamond"],["zigzag","Zigzag"]].forEach(([k, t]) => { const b = small(btn(t, () => { pat = k; [...g.children].forEach(x => x.classList.toggle("on", x === b)); draw(); }, k === pat ? "on" : "")); b.style.fontSize = "17px"; g.appendChild(b); });
    P.append(ptitle("Weaving studio"), msg, g, h("div", { style:{ marginTop:"auto" } }, small(btn("🎨 Colours", () => { pal = (pal + 1) % PALS.length; draw(); }, ""))));
    const over = (x, y) => {
      if (pat === "plain") return (x + y) % 2 === 0;
      if (pat === "twill") return ((x + y) % 4) < 2;
      if (pat === "diamond"){ const a = Math.abs((x % 12) - 6), b = Math.abs((y % 12) - 6); return ((a + b) % 6) < 3; }
      return ((x + Math.abs((y % 8) - 4)) % 4) < 2;
    };
    function draw(){
      FC.clear(v);
      const [c1, c2, c3, c4] = PALS[pal];
      v.appendChild(s("rect", { width:W, height:H, fill:"#2a211a" }));
      const x0 = (W - N*cell)/2, y0 = (H - N*cell)/2;
      for (let y=0;y<N;y++) for (let x=0;x<N;x++){
        const o = over(x, y);
        const warp = x % 6 < 3 ? c1 : c3, weft = y % 8 < 4 ? c2 : c4;
        v.appendChild(s("rect", { x:x0 + x*cell + (o ? 4 : 0), y:y0 + y*cell + (o ? 0 : 4), width: o ? cell - 8 : cell, height: o ? cell : cell - 8, rx:3, fill: o ? warp : weft, stroke:"rgba(0,0,0,.25)", "stroke-width":1 }));
      }
      msg.innerHTML = FC.md({ plain:"**Over one, under one** — the simplest weave. The **warp** threads go up and down; the **weft** goes across.", twill:"**Twill**: over two, under two, shifting one each row — it makes **diagonal lines**, like in denim.", diamond:"Changing the over-under pattern makes **diamonds** — a motif found in many Maya textiles, sometimes showing the universe or a town's identity.", zigzag:"**Zigzags** appear on many huipiles. Each weaver's choices can show her **town, family and story**." }[pat]);
    }
    draw();
    return {};
  };

  /* Folio IX seal art — people of many nations in a circle */
  A.nationsFolio = function(){
    const v = svg(800, 1000);
    v.appendChild(s("rect", { width:800, height:1000, fill:"#efe3c6" }));
    v.appendChild(s("rect", { x:30, y:30, width:740, height:940, fill:"none", stroke:"#B3262E", "stroke-width":10 }));
    v.appendChild(s("rect", { x:50, y:50, width:700, height:900, fill:"none", stroke:"#B3262E", "stroke-width":3 }));
    const g = s("g", { filter:"url(#fx-rough)", transform:"translate(400 500)" });
    const COL = ["#B3262E","#1F7A5A","#2E9FB0","#D9A23A","#8B5BA8","#C46A3A","#5a3825","#1F4F8A","#E4572E","#2EB0A0"];
    for (let i=0;i<10;i++){
      const a = i*36*Math.PI/180, x = Math.cos(a)*250, y = Math.sin(a)*250;
      g.appendChild(s("circle", { cx:x, cy:y - 40, r:34, fill:["#7a4a2a","#c08a5a","#e8c8a0","#5a3a22","#a87a4a"][i%5], stroke:"#3b2418", "stroke-width":4 }));
      g.appendChild(s("path", { d:`M${x - 40} ${y + 70} Q${x} ${y - 20} ${x + 40} ${y + 70}Z`, fill:COL[i], stroke:"#3b2418", "stroke-width":4 }));
    }
    g.appendChild(s("circle", { r:120, fill:"none", stroke:"#D9A23A", "stroke-width":8, "stroke-dasharray":"18 12" }));
    v.appendChild(g);
    return v;
  };
})(window.FC);
