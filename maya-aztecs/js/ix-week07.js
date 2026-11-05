/* ==========================================================
   WEEK 7 INTERACTIVES — The Great Market
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
     MON · Society pyramid
     ======================================================= */
  IX.society = function(host){
    const LV = [
      { t:"Huey tlatoani", e:"👑", c:"#D9A23A", d:"The **ruler** (‘great speaker’) of Tenochtitlan — chosen from the royal family by a council of nobles. Moctezuma II was huey tlatoani in 1519." },
      { t:"Pipiltin (nobles)", e:"🪶", c:"#B3262E", d:"**Nobles**: officials, judges, priests and army leaders. Their children went to the **calmecac**, a school that taught reading glyphs, history, law and astronomy." },
      { t:"Pochteca & artisans", e:"🎒", c:"#2E9FB0", d:"Long-distance **merchants** (pochteca) travelled for months to trade — and sometimes spied for the ruler. Skilled **artisans** made featherwork, jewellery and mosaics." },
      { t:"Macehualtin (commoners)", e:"🌽", c:"#1F7A5A", d:"Most people: **farmers, fishers, builders**. Families belonged to a **calpulli** (neighbourhood group) that shared land. Their sons went to the **telpochcalli** — school for everyone, with lessons in work, citizenship and fighting." },
      { t:"Tlacotin (enslaved people)", e:"⛓️", c:"#5a3825", d:"Some people were **enslaved** — often because of debt or as punishment. Unlike many slave systems, their children were born **free**, and some could buy their freedom." }
    ];
    const W = 1100, H = 690;
    const v = svg(W, H, { style:`position:absolute;left:0;top:0;width:${W}px;height:${H}px` });
    host.appendChild(v);
    const P = panel(600); host.appendChild(P);
    const tt = ptitle("Aztec society"), msg = pmsg("Tap a level of the pyramid. Who was at the top? Who did most of the work?");
    P.append(tt, msg);
    let sel = -1;
    function draw(){
      FC.clear(v);
      const n = LV.length, hh = 120, top = 40;
      LV.forEach((l, i) => {
        const y = top + i*hh, w0 = 160 + i*170, w1 = 160 + (i+1)*170, cx = 520;
        const on = i === sel;
        const p = s("path", { d:`M${cx - w0/2} ${y} H${cx + w0/2} L${cx + w1/2} ${y + hh - 8} H${cx - w1/2}Z`, fill:l.c, stroke:"#14110F", "stroke-width": on ? 6 : 3, opacity: sel < 0 || on ? 1 : .5, style:"cursor:pointer;transition:opacity .3s", filter:"url(#fx-paper)" });
        p.addEventListener("click", e => { e.stopPropagation(); sel = i; draw(); tt.textContent = `${l.e} ${l.t}`; msg.innerHTML = FC.md(l.d); FC.sfx("paper"); });
        v.appendChild(p);
        const t = lbl(cx, y + hh/2 + 10, `${l.e} ${l.t.toUpperCase()}`, "#F4EBD8", i === 0 ? 24 : 28); t.setAttribute("style", "pointer-events:none"); v.appendChild(t);
      });
      v.appendChild(lbl(20, 670, "Simplified — real life was more complicated, and people could rise (e.g. brave warriors).", "#E9DCC0", 20, "start"));
    }
    draw();
    return {};
  };

  /* =======================================================
     MON · Market walk (cut-paper stalls)
     ======================================================= */
  const STALLS = [
    { n:"Cacao", e:"🫘", c:"#5a3825", art:"cacao", d:"Cacao beans were used as **money** for small buys — and ground into a frothy, bitter drink for the rich." },
    { n:"Feathers", e:"🪶", c:"#1F7A5A", d:"Brilliant **quetzal** and parrot feathers came from far away and were worth a fortune. Featherworkers made shields and headdresses." },
    { n:"Cloth", e:"🧵", c:"#B3262E", d:"**Quachtli** — cotton cloaks — were used for bigger payments. Cheaper cloth was made from **maguey** fibre." },
    { n:"Food", e:"🌽", c:"#D9A23A", d:"Maize, beans, chillies, tomatoes, turkeys, fish from the lake — even **algae cakes** scooped from the water!" },
    { n:"Pottery", e:"🏺", c:"#C46A3A", d:"Painted bowls, cooking pots and **comales** (griddles) for tortillas." },
    { n:"Obsidian", e:"🔪", c:"#2A2420", art:"mirror", d:"Volcanic glass for razor-sharp **blades** — and polished **mirrors**." },
    { n:"Judges", e:"⚖️", c:"#2E9FB0", d:"**Market judges** sat in a special building, checking measures and punishing cheats — including people who sold **fake cacao beans** made of wax or dough!" },
    { n:"Herbs", e:"🌿", c:"#4f7a3a", d:"Healers sold **medicinal plants**. Aztec herb knowledge was recorded in a book called the Badianus Manuscript (1552)." }
  ];
  IX.market = function(host){
    const W = 1100, H = 690;
    const v = svg(W, H, { style:`position:absolute;left:0;top:0;width:${W}px;height:${H}px;border-radius:16px` });
    host.appendChild(v);
    v.appendChild(s("rect", { width:W, height:H, fill:"#c9a06a" }));
    for (let i=0;i<14;i++) v.appendChild(s("rect", { x:0, y:i*50, width:W, height:2, fill:"#b8905e" }));
    v.appendChild(s("path", { d:"M0 120 L180 30 L360 120Z M760 120 L940 20 L1100 110 V120Z", fill:"#8a7a62", opacity:.6 }));
    const P = panel(600); host.appendChild(P);
    const tt = ptitle("Tlatelolco market"), img = h("div", { style:{ height:"0", overflow:"hidden", borderRadius:"10px", transition:"height .4s" } }), msg = pmsg("**60,000 people** a day — that's what one Spanish soldier guessed. Tap a stall to explore.");
    const seen = h("div", { style:{ marginTop:"auto", fontFamily:"var(--f-label)", fontWeight:"800", letterSpacing:".12em", fontSize:"18px", color:"#1F7A5A" } }, "STALLS VISITED: 0 / 8");
    P.append(tt, img, msg, seen);
    const visited = new Set();
    STALLS.forEach((st, i) => {
      const x = 40 + (i%4)*262, y = 150 + Math.floor(i/4)*270;
      const g = s("g", { style:"cursor:pointer", filter:"url(#fx-paper)" });
      g.appendChild(s("path", { d:`M${x} ${y + 60} L${x + 110} ${y} L${x + 220} ${y + 60}Z`, fill:st.c, stroke:"#3b2418", "stroke-width":4 }));
      for (let k=0;k<4;k++) g.appendChild(s("path", { d:`M${x + k*55} ${y + 60} l27 18 l28 -18`, fill:"#efe3c6", stroke:"#3b2418", "stroke-width":2 }));
      g.appendChild(s("rect", { x:x + 14, y:y + 78, width:192, height:130, fill:"#e2c79a", stroke:"#3b2418", "stroke-width":4 }));
      g.appendChild(s("text", { x:x + 110, y:y + 160, "text-anchor":"middle", "font-size":64 }, st.e));
      g.appendChild(lbl(x + 110, y + 200, st.n.toUpperCase(), "#3b2418", 24));
      g.addEventListener("click", e => { e.stopPropagation(); FC.sfx("paper"); visited.add(i);
        tt.textContent = `${st.e} ${st.n}`; msg.innerHTML = FC.md(st.d); seen.textContent = `STALLS VISITED: ${visited.size} / 8`;
        FC.clear(img); if (st.art){ img.appendChild(A.artefactBox(st.art, "width:100%;height:220px")); img.style.height = "220px"; } else img.style.height = "0";
        g.animate([{ transform:"translateY(0)" }, { transform:"translateY(-8px)" }, { transform:"translateY(0)" }], { duration:300 }); });
      v.appendChild(g);
    });
    v.appendChild(lbl(W/2, 60, "TLATELOLCO · 1519", "#3b2418", 34));
    return {};
  };

  /* =======================================================
     TUE · Barter vs cacao trading game
     ======================================================= */
  const PRICES = [
    { n:"Large tomato", e:"🍅", p:1 },
    { n:"Ripe avocado", e:"🥑", p:1 },
    { n:"Fresh-picked avocado", e:"🥑", p:3 },
    { n:"Turkey egg", e:"🥚", p:3 },
    { n:"Small rabbit", e:"🐇", p:30 },
    { n:"Turkey hen", e:"🦃", p:100 }
  ];
  IX.barter = function(host){
    // barter chain puzzle
    const TR = [
      { who:"Potter", e:"🏺", has:"pot", wants:"fish" },
      { who:"Fisher", e:"🐟", has:"fish", wants:"chillies" },
      { who:"Farmer", e:"🌶️", has:"chillies", wants:"cloth" },
      { who:"Weaver", e:"🧵", has:"cloth", wants:"sandals" }
    ];
    const W = 1100;
    const box = h("div", { class:"pcard", style:{ position:"absolute", left:"0", top:"0", width:"1100px", height:"690px", padding:"24px 28px", display:"flex", flexDirection:"column", gap:"14px" } });
    host.appendChild(box);
    let holding = "sandals", steps = 0, mode = "barter", basket = [];
    const status = h("div", { style:{ fontFamily:"var(--f-display)", fontWeight:"900", fontSize:"40px" } });
    const row = h("div", { style:{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"14px" } });
    const shop = h("div", { style:{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"12px" } });
    box.append(status, row, shop);
    const P = panel(600); host.appendChild(P);
    const msg = pmsg(""), tot = big("", "#5a3825"), numWin = h("div", { style:{ width:"150px", height:"150px", borderRadius:"16px", background:"var(--basalt)", display:"grid", placeItems:"center" } });
    const ctr = h("div", { style:{ marginTop:"auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px" } });
    const bB = small(btn("1 · Barter", () => setMode("barter"), "on")), bC = small(btn("2 · Cacao money", () => setMode("cacao"), ""));
    const rs = small(darkB(btn("↺ Reset", () => { holding = "sandals"; steps = 0; basket = []; draw(); }, "dark"))); rs.style.gridColumn = "1 / -1";
    ctr.append(bB, bC, rs);
    P.append(ptitle("Trading game"), msg, h("div", { style:{ display:"flex", gap:"16px", alignItems:"center" } }, numWin, tot), ctr);
    function setMode(m){ mode = m; bB.classList.toggle("on", m === "barter"); bC.classList.toggle("on", m === "cacao"); basket = []; draw(); }
    function draw(){
      FC.clear(row); FC.clear(shop); FC.clear(numWin);
      if (mode === "barter"){
        status.textContent = holding === "pot" ? "🎉 You got the pot!" : `You have: ${{ sandals:"👡 sandals", cloth:"🧵 cloth", chillies:"🌶️ chillies", fish:"🐟 fish", pot:"🏺 pot" }[holding]} · You want: 🏺 a pot`;
        TR.forEach(t => {
          const can = t.wants === holding;
          const c = h("div", { class:"pcard hov", style:{ padding:"14px 16px", cursor:"pointer", textAlign:"center", outline: can ? "4px solid #1F7A5A" : "none" } },
            h("div", { style:{ fontSize:"64px" } }, t.e), h("div", { style:{ fontFamily:"var(--f-display)", fontWeight:"900", fontSize:"30px" } }, t.who),
            h("div", { style:{ fontSize:"21px" } }, `Has: ${t.has} · Wants: ${t.wants}`));
          c.addEventListener("click", e => { e.stopPropagation(); if (holding === "pot") return; if (can){ holding = t.has; steps++; FC.sfx(holding === "pot" ? "ok" : "paper"); } else { FC.sfx("no"); msg.innerHTML = FC.md(`The ${t.who.toLowerCase()} doesn't want **${holding}**! That's the problem with barter: you need someone who has what **you** want **and** wants what **you** have.`); return; } draw(); });
          row.appendChild(c);
        });
        tot.textContent = `${steps} trades`;
        if (holding === "pot") msg.innerHTML = FC.md(`It took **${steps} trades** to get one pot! Barter is slow because you need a **double match**. What if everyone accepted one thing that's easy to carry and count…?`);
        else if (!steps) msg.innerHTML = FC.md("You make sandals. You want a **pot**. But the potter doesn't want sandals… Tap a trader to swap. Who will take what you have?");
      } else {
        status.textContent = "🫘 Shopping with cacao (prices from a 1545 Nahuatl price list)";
        PRICES.forEach((it, i) => {
          const c = h("div", { class:"pcard hov", style:{ padding:"12px 14px", cursor:"pointer", display:"flex", alignItems:"center", gap:"14px" } },
            h("div", { style:{ fontSize:"54px" } }, it.e), h("div", null, h("div", { style:{ fontFamily:"var(--f-display)", fontWeight:"900", fontSize:"26px", lineHeight:"1.05" } }, it.n), h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"26px", color:"#5a3825" } }, `${it.p} bean${it.p > 1 ? "s" : ""}`)));
          c.addEventListener("click", e => { e.stopPropagation(); basket.push(i); FC.sfx("tok"); draw(); });
          shop.appendChild(c);
        });
        const total = basket.reduce((a, i) => a + PRICES[i].p, 0);
        const m = FC.maya(total, { color:"#F0C25E" }); m.setAttribute("style", "width:130px;height:130px"); numWin.appendChild(m);
        tot.textContent = `${total} beans`;
        msg.innerHTML = FC.md(basket.length ? `Basket: ${basket.map(i => PRICES[i].e).join(" ")}. One price for everything — no need to find a double match!` : "Tap items to buy them. Cacao beans were a **currency**: small, countable and accepted by everyone. (For bigger buys, people used **quachtli** — cotton cloaks.)");
      }
    }
    draw();
    return {};
  };

  /* =======================================================
     WED · Electromagnet coil lab (with graph)
     ======================================================= */
  IX.electromag = function(host){
    const W = 1100, H = 690;
    const v = svg(W, H, { style:`position:absolute;left:0;top:0;width:${W}px;height:${H}px;border-radius:16px` });
    host.appendChild(v);
    const P = panel(600); host.appendChild(P);
    const clipsT = big("0 clips", "#2E9FB0"), msg = pmsg("");
    const coilIn = stop(h("input", { type:"range", min:0, max:40, step:5, value:20, style:{ width:"100%", accentColor:"#C46A3A" } }));
    const coilL = h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"24px" } });
    const cells = h("div", { style:{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"8px" } });
    let nCells = 1, on = true; const results = {};
    [1,2,3].forEach(n => { const b = small(btn(`${n} cell${n > 1 ? "s" : ""} (${(n*1.5).toFixed(1)} V)`, () => { nCells = n; [...cells.children].forEach((x, k) => x.classList.toggle("on", k === n-1)); draw(); }, n === 1 ? "on" : "")); b.style.fontSize = "17px"; cells.appendChild(b); });
    const ctr = h("div", { style:{ marginTop:"auto", display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"8px" } });
    const swB = small(btn("⏻ Switch", () => { on = !on; swB.classList.toggle("on", on); draw(); }, "on"));
    ctr.append(swB, small(darkB(btn("📈 Record", () => { if (on){ results[`${coilIn.value}|${nCells}`] = clips(); FC.sfx("ok"); draw(); } }, "dark"))), small(darkB(btn("Clear graph", () => { for (const k in results) delete results[k]; draw(); }, "dark"))));
    P.append(ptitle("Electromagnet lab"), clipsT, coilL, coilIn, cells, msg, ctr);
    const clips = () => on ? Math.min(30, Math.round(+coilIn.value * nCells / 2)) : 0;
    coilIn.addEventListener("input", draw);
    function draw(){
      FC.clear(v);
      v.appendChild(s("rect", { width:W, height:H, fill:"#1b2124" }));
      const nC = +coilIn.value, k = clips();
      // battery pack
      for (let i=0;i<nCells;i++){ v.appendChild(s("rect", { x:60, y:100 + i*70, width:120, height:56, rx:8, fill:"#2A2420", stroke:"#D9A23A", "stroke-width":3 })); v.appendChild(lbl(120, 136 + i*70, "1.5 V", "#F0C25E", 22)); }
      // nail
      v.appendChild(s("rect", { x:300, y:150, width:300, height:30, fill:"#9aa4a8", stroke:"#5a6a70", "stroke-width":3 }));
      v.appendChild(s("path", { d:"M600 150 l40 15 l-40 15z", fill:"#9aa4a8" })); v.appendChild(s("rect", { x:286, y:140, width:16, height:50, fill:"#9aa4a8" }));
      // coils
      for (let i=0;i<nC;i++){ const x = 312 + i*(280/Math.max(1, 40)); v.appendChild(s("ellipse", { cx:x, cy:165, rx:4, ry:26, fill:"none", stroke:"#C46A3A", "stroke-width":4 })); }
      // wires
      v.appendChild(s("path", { d:`M180 ${110} H250 V140 H312`, stroke:"#C46A3A", "stroke-width":5, fill:"none" }));
      v.appendChild(s("path", { d:`M180 ${86 + nCells*70} H260 V190 H${312 + Math.max(0, nC - 1)*7}`, stroke:"#C46A3A", "stroke-width":5, fill:"none" }));
      // field glow
      if (on && nC) v.appendChild(s("ellipse", { cx:470, cy:165, rx:120 + k*6, ry:40 + k*3, fill:"none", stroke:"#7FF3FF", "stroke-width":3, opacity:Math.min(.9, .2 + k/30), "stroke-dasharray":"10 8" }));
      // clips hanging from tip
      for (let i=0;i<k;i++){ const col = i % 6, r = Math.floor(i/6); v.appendChild(s("rect", { x:610 + col*14 - r*4, y:190 + r*30, width:10, height:26, rx:5, fill:"none", stroke:"#cfd6d8", "stroke-width":3 })); }
      // pile
      for (let i=0;i<30 - k;i++) v.appendChild(s("rect", { x:560 + (i*37 % 220), y:330 + (i*13 % 30), width:10, height:24, rx:5, fill:"none", stroke:"#8a9496", "stroke-width":3, transform:`rotate(${i*41 % 90} ${565 + (i*37 % 220)} ${342 + (i*13 % 30)})` }));
      // graph
      const gx = 80, gy = 640, gw = 520, gh = 220;
      v.appendChild(s("rect", { x:gx - 20, y:gy - gh - 30, width:gw + 60, height:gh + 70, rx:12, fill:"#efe3c6" }));
      v.appendChild(s("path", { d:`M${gx} ${gy - gh} V${gy} H${gx + gw}`, stroke:"#3b2418", "stroke-width":3, fill:"none" }));
      v.appendChild(lbl(gx + gw/2, gy + 30, "COILS →", "#3b2418", 18)); v.appendChild(lbl(gx - 6, gy - gh - 8, "CLIPS", "#3b2418", 18, "start"));
      [0,10,20,30,40].forEach(c => v.appendChild(lbl(gx + c/40*gw, gy + 16, String(c), "#5a3825", 14)));
      const COL = { 1:"#2E9FB0", 2:"#D9A23A", 3:"#B3262E" };
      Object.entries(results).forEach(([key, val]) => { const [c, n] = key.split("|").map(Number); v.appendChild(s("circle", { cx:gx + c/40*gw, cy:gy - val/30*gh, r:9, fill:COL[n], stroke:"#14110F", "stroke-width":2 })); });
      [1,2,3].forEach(n => { v.appendChild(s("circle", { cx:gx + 30, cy:gy - gh + 10 + (n-1)*24, r:7, fill:COL[n] })); v.appendChild(lbl(gx + 44, gy - gh + 16 + (n-1)*24, `${n} cell${n>1?"s":""}`, "#3b2418", 16, "start")); });
      clipsT.textContent = `${k} clip${k === 1 ? "" : "s"}`;
      coilL.textContent = `COILS OF WIRE: ${nC}`;
      msg.innerHTML = FC.md(!on ? "**Switch off:** no current → no magnetic field → the clips drop. That's why scrapyard cranes use electromagnets!" :
        nC === 0 ? "No coils — a straight wire makes only a **very weak** field." :
        `Current flowing through the coil makes a **magnetic field**; the iron nail makes it stronger. **More coils** or **more cells** → stronger magnet. Press **Record** to plot a result.`);
    }
    draw();
    return {};
  };

  /* =======================================================
     THU · Teponaztli rhythm grid (two tones, 8 beats)
     ======================================================= */
  IX.rhythm = function(host){
    const BEATS = 8;
    const grid = [[1,0,0,1,0,0,1,0],[0,0,1,0,1,0,0,1]];
    const W = 1100;
    const top = h("div", { style:{ position:"absolute", left:"0", top:"0", width:"1100px", height:"260px", borderRadius:"16px", overflow:"hidden" } });
    top.appendChild(A.artefactBox("teponaztli", "width:100%;height:100%"));
    host.appendChild(top);
    const g = h("div", { class:"pcard", style:{ position:"absolute", left:"0", top:"280px", width:"1100px", height:"410px", padding:"20px 24px", display:"grid", gridTemplateColumns:"150px repeat(8,1fr)", gridTemplateRows:"40px 1fr 1fr", gap:"10px" } });
    host.appendChild(g);
    g.appendChild(h("div"));
    const heads = []; for (let b=0;b<BEATS;b++){ const d = h("div", { style:{ textAlign:"center", fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"24px", borderRadius:"8px" } }, String(b+1)); heads.push(d); g.appendChild(d); }
    const cells = [[], []];
    ["HIGH", "LOW"].forEach((nm, r) => {
      g.appendChild(h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"26px", display:"flex", alignItems:"center", color: r ? "#5a3825" : "#B3262E" } }, `${nm} TONE`));
      for (let b=0;b<BEATS;b++){
        const c = h("button", { style:{ border:"0", borderRadius:"14px", cursor:"pointer", transition:"transform .1s, background .2s" } });
        const paint = () => { c.style.background = grid[r][b] ? (r ? "#5a3825" : "#B3262E") : "rgba(90,56,37,.12)"; };
        c.addEventListener("click", e => { e.stopPropagation(); grid[r][b] = grid[r][b] ? 0 : 1; paint(); if (grid[r][b]) hit(r); });
        paint(); cells[r].push(c); g.appendChild(c);
      }
    });
    const P = panel(600); host.appendChild(P);
    const msg = pmsg("The **teponaztli** is a slit drum carved from a hollow log. The two ‘tongues’ make **two different tones**. Tap squares to build a rhythm, then press Play.");
    const bpmL = h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"24px" } });
    const bpm = stop(h("input", { type:"range", min:60, max:180, step:10, value:100, style:{ width:"100%", accentColor:"#B3262E" } }));
    const ctr = h("div", { style:{ marginTop:"auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px" } });
    let timer = null, beat = 0;
    const hit = r => FC.tone(r ? 110 : 165, 200, { force:true, drum:true });
    function tick(){
      heads.forEach((d, i) => d.style.background = i === beat ? "#2E9FB0" : "transparent");
      [0, 1].forEach(r => { if (grid[r][beat]){ hit(r); cells[r][beat].animate([{ transform:"scale(1)" }, { transform:"scale(.85)" }, { transform:"scale(1)" }], { duration:160 }); } });
      beat = (beat + 1) % BEATS;
      timer = setTimeout(tick, 60000 / +bpm.value / 2);
    }
    const play = small(btn("▶ Play loop", () => { if (timer) return; beat = 0; tick(); }, "on"));
    const stopB = small(darkB(btn("■ Stop", () => { clearTimeout(timer); timer = null; heads.forEach(d => d.style.background = "transparent"); }, "dark")));
    const clr = small(darkB(btn("Clear", () => { grid.forEach(r => r.fill(0)); cells.forEach((row, r) => row.forEach((c) => c.style.background = "rgba(90,56,37,.12)")); }, "dark")));
    const cnt = small(darkB(btn("Count beats", () => { const n = grid[0].filter(Boolean).length + grid[1].filter(Boolean).length; msg.innerHTML = FC.md(`This pattern has **${n} drum hits** in **8 beats**. Played twice (2 bars) = **${n*2} hits**, over **16 beats**.`); }, "dark")));
    ctr.append(play, stopB, clr, cnt);
    bpm.addEventListener("input", () => bpmL.textContent = `TEMPO: ${bpm.value} beats per minute`);
    bpmL.textContent = `TEMPO: ${bpm.value} beats per minute`;
    P.append(ptitle("Rhythm grid"), msg, bpmL, bpm, ctr);
    return { destroy(){ clearTimeout(timer); } };
  };

  /* =======================================================
     FRI · Mosaic canvas (tesserae in a team-animal outline)
     ======================================================= */
  const SHAPES = {
    hummingbird:"M140 360 C 200 300, 320 280, 400 300 L 600 200 L 560 290 C 640 300, 700 340, 720 380 L 900 380 L 720 410 C 690 470, 600 500, 500 490 L 420 600 L 430 490 C 330 480, 220 450, 140 360Z",
    jaguar:"M180 420 C 180 330, 260 260, 380 250 C 420 190, 470 180, 500 230 C 540 180, 600 190, 610 250 C 720 260, 800 320, 820 400 C 840 480, 780 560, 640 580 L 360 580 C 240 570, 180 500, 180 420Z",
    fish:"M140 380 C 260 230, 520 220, 700 330 L 900 230 L 860 380 L 900 530 L 700 430 C 520 540, 260 530, 140 380Z"
  };
  IX.mosaic = function(host){
    const W = 1000, H = 690, T = 26;
    const cv = stop(h("canvas", { width:W*2, height:H*2, style:{ position:"absolute", left:"0", top:"0", width:W+"px", height:H+"px", borderRadius:"16px", cursor:"pointer", boxShadow:"var(--sh-3)" } }));
    host.appendChild(cv);
    const ctx = cv.getContext("2d"); ctx.scale(2, 2);
    const PAL = { turquoise:["#1f8a8a","#2EA6A6","#46c1b8","#7fd8cf","#b6eee6"], jade:["#145a3a","#1F7A5A","#3a9a6a","#6fbf8a","#a9dfb5"], coral:["#7a1a1e","#B3262E","#d8504a","#ef8a6a","#f6c0a0"], gold:["#6a4510","#9a6a1a","#D9A23A","#F0C25E","#f8e2a0"] };
    let shape = "hummingbird", pal = "turquoise", light = "left", gap = 3, seed = 3;
    const tiles = [];
    const P = h("div", { class:"pcard", style:{ position:"absolute", right:"0", top:"0", width:"740px", height:"690px", display:"flex", flexDirection:"column", gap:"12px" } });
    host.appendChild(P);
    const msg = pmsg("**Tesserae** are the small pieces in a mosaic. Notice the **gaps** between them, and how **lighter** pieces make one side look lit. Tap a tile to change its tone.");
    const row = (lab, items) => { const d = h("div", { style:{ display:"grid", gridTemplateColumns:`150px repeat(${items.length},1fr)`, gap:"8px", alignItems:"center" } }, h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", letterSpacing:".12em", fontSize:"18px" } }, lab)); items.forEach(b => d.appendChild(b)); return d; };
    const grp = (list, cur, set) => { const bs = list.map(([k, t]) => small(btn(t, () => { set(k); bs.forEach(x => x.classList.toggle("on", x.textContent === t)); build(); }, k === cur ? "on" : ""))); bs.forEach(b => b.style.fontSize = "17px"); return bs; };
    P.append(ptitle("Mosaic studio"), msg,
      row("ANIMAL", grp([["hummingbird","Hummingbird"],["jaguar","Jaguar"],["fish","Fish"]], shape, k => shape = k)),
      row("COLOURS", grp([["turquoise","Turquoise"],["jade","Jade"],["coral","Coral"],["gold","Gold"]], pal, k => pal = k)),
      row("LIGHT FROM", grp([["left","Left"],["top","Top"],["none","No tone"]], light, k => light = k)),
      row("GAPS", grp([[1,"Tiny"],[3,"Medium"],[6,"Wide"]], gap, k => gap = k)));
    const rr = small(darkB(btn("🎲 New tile layout", () => { seed++; build(); }, "dark"))); rr.style.marginTop = "auto"; P.appendChild(rr);
    function build(){
      tiles.length = 0;
      const path = new Path2D(SHAPES[shape]);
      const rnd = FC.rng(seed);
      for (let y=0;y<H;y+=T) for (let x=0;x<W;x+=T){
        const jx = x + (rnd()-.5)*6, jy = y + (rnd()-.5)*6;
        const cx = jx + T/2, cy = jy + T/2;
        const inside = ctx.isPointInPath(path, cx*2, cy*2);
        tiles.push({ x:jx, y:jy, w:T + (rnd()-.5)*5, h:T + (rnd()-.5)*5, rot:(rnd()-.5)*.25, inside, t:0 });
      }
      // tone by light direction
      const ins = tiles.filter(t => t.inside); if (!ins.length) return draw();
      const minX = Math.min(...ins.map(t => t.x)), maxX = Math.max(...ins.map(t => t.x)), minY = Math.min(...ins.map(t => t.y)), maxY = Math.max(...ins.map(t => t.y));
      ins.forEach(t => { const f = light === "left" ? (t.x - minX)/(maxX - minX || 1) : light === "top" ? (t.y - minY)/(maxY - minY || 1) : .5; t.t = FC.clamp(Math.round(4 - f*4 + (rnd()-.5)*1.2), 0, 4); });
      draw();
    }
    function draw(){
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "#e9dcc0"; ctx.fillRect(0, 0, W, H);
      const P5 = PAL[pal];
      tiles.forEach(t => {
        ctx.save(); ctx.translate(t.x + t.w/2, t.y + t.h/2); ctx.rotate(t.rot);
        ctx.fillStyle = t.inside ? P5[t.t] : ["#3b2a20","#4a3428","#2e221a"][Math.floor((t.x + t.y) / T) % 3];
        ctx.fillRect(-t.w/2 + gap/2, -t.h/2 + gap/2, t.w - gap, t.h - gap);
        ctx.restore();
      });
    }
    cv.addEventListener("click", e => { const [x, y] = FC.toLocal(cv, e); const t = tiles.find(t => x >= t.x && x <= t.x + t.w && y >= t.y && y <= t.y + t.h && t.inside); if (t){ t.t = (t.t + 1) % 5; FC.sfx("tok"); draw(); } });
    build();
    return {};
  };

  /* Folio VII seal art — a sun with five rays */
  A.sunFolio = function(){
    const v = svg(800, 1000);
    v.appendChild(s("rect", { width:800, height:1000, fill:"#efe3c6" }));
    v.appendChild(s("rect", { x:30, y:30, width:740, height:940, fill:"none", stroke:"#B3262E", "stroke-width":10 }));
    v.appendChild(s("rect", { x:50, y:50, width:700, height:900, fill:"none", stroke:"#B3262E", "stroke-width":3 }));
    const g = s("g", { filter:"url(#fx-rough)", transform:"translate(400 480)" });
    for (let i=0;i<5;i++){ const a = i*72 - 90; g.appendChild(s("path", { d:"M-50 -150 L0 -320 L50 -150Z", fill:"#D9A23A", stroke:"#3b2418", "stroke-width":5, transform:`rotate(${a + 90})` })); }
    g.appendChild(s("circle", { r:160, fill:"#F0C25E", stroke:"#3b2418", "stroke-width":6 }));
    g.appendChild(s("circle", { r:110, fill:"none", stroke:"#B3262E", "stroke-width":10 }));
    for (let i=0;i<5;i++){ const a = (i*72 - 90)*Math.PI/180; g.appendChild(s("circle", { cx:Math.cos(a)*70, cy:Math.sin(a)*70, r:18, fill:"#B3262E" })); }
    g.appendChild(s("circle", { r:30, fill:"#3b2418" }));
    v.appendChild(g);
    return v;
  };
})(window.FC);
