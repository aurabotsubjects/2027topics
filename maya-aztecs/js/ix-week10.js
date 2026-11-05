/* ==========================================================
   WEEK 10 INTERACTIVES — The Codex Comes Home
   ========================================================== */
(function(FC){
  "use strict";
  const h = FC.h, s = FC.s, svg = FC.svg, A = FC.art, IX = FC.IX, M = FC.map;
  const btn = (label, onclick, cls) => h("button", { class:"ixbtn " + (cls||""), onclick:(e) => { e.stopPropagation(); FC.sfx("tok"); onclick(e); } }, label);
  const panel = (w) => h("div", { class:"pcard", style:{ position:"absolute", right:"0", top:"0", width:(w||560)+"px", height:"690px", display:"flex", flexDirection:"column", gap:"14px" } });
  const ptitle = t => h("div", { style:{ fontFamily:"var(--f-display)", fontWeight:"900", fontSize:"44px", lineHeight:"1" } }, t);
  const pmsg = t => { const d = h("div", { style:{ fontSize:"25px", lineHeight:"1.3" } }); d.innerHTML = FC.md(t || ""); return d; };
  const big = (t, c) => h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"64px", lineHeight:".9", color:c || "#B3262E" } }, t);
  const darkB = b => { b.style.color = "var(--cacao-ink)"; b.style.boxShadow = "inset 0 0 0 2px rgba(90,56,37,.35)"; return b; };
  const small = b => { b.style.fontSize = "19px"; b.style.minHeight = "52px"; b.style.padding = "8px 10px"; return b; };
  const pm = b => { b.style.fontSize = "38px"; b.style.minHeight = "64px"; b.style.minWidth = "72px"; b.style.padding = "0 10px"; return b; };
  const stop = el => { ["pointerdown","click","keydown","input"].forEach(ev => el.addEventListener(ev, e => e.stopPropagation())); return el; };
  const lbl = (x, y, t, c, size, anchor) => s("text", { x, y, "text-anchor":anchor || "middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":size || 26, fill:c || "#3b2418", "letter-spacing":1.5 }, t);
  const card = (x, y, w, hgt) => h("div", { class:"pcard hov", style:{ position:"absolute", left:x+"px", top:y+"px", width:w+"px", height:hgt+"px", padding:"14px 16px", cursor:"pointer", overflow:"hidden" } });

  /* =======================================================
     MON · Gifts to the World — what's on your plate?
     ======================================================= */
  IX.gifts = function(host){
    const DISHES = [
      { e:"🍕", t:"Pizza", g:"tomato", d:"**Tomatoes** came from the Americas. Italy had no tomatoes before the 1500s!" },
      { e:"🍟", t:"Hot chips", g:"potato", d:"**Potatoes** were first farmed in the **Andes** of South America (remember Week 8?)." },
      { e:"🍫", t:"Chocolate", g:"cacao", d:"**Cacao** came from Mesoamerica. Cortés brought it to **Spain in 1528**." },
      { e:"🍿", t:"Popcorn", g:"maize", d:"**Maize** (corn) was domesticated in Mexico — the ‘children of maize’ from Week 2." },
      { e:"🍛", t:"Curry", g:"chilli", d:"**Chilli peppers** came from the Americas and spread through **South and East Asia** after 1493." },
      { e:"🥜", t:"Satay sauce", g:"peanut", d:"**Peanuts** are an American crop that travelled the world." }
    ];
    const P = panel(560); host.appendChild(P);
    const tt = ptitle("What's on your plate?"), msg = pmsg("Tap a meal. Which ingredient came from the **Americas**?"), count = big("0 / 6", "#1F7A5A");
    P.append(tt, msg, count, h("div", { style:{ marginTop:"auto", fontSize:"19px", opacity:".75" } }, "The swap of plants, animals and ideas after 1492 is called the Columbian Exchange."));
    let n = 0;
    DISHES.forEach((d, i) => {
      const c = card((i % 3) * 366, Math.floor(i / 3) * 346, 350, 330);
      const face = h("div", { style:{ textAlign:"center" } }, h("div", { style:{ fontSize:"120px", lineHeight:"1.2" } }, d.e), h("div", { style:{ fontFamily:"var(--f-display)", fontWeight:"900", fontSize:"40px" } }, d.t));
      const back = h("div", { style:{ display:"none", fontSize:"24px", lineHeight:"1.3" } }); back.innerHTML = FC.md(d.d);
      c.append(face, back);
      c.addEventListener("click", e => { e.stopPropagation(); if (c.dataset.on) return; c.dataset.on = "1"; FC.sfx("paper"); n++; count.textContent = `${n} / 6`;
        face.style.cssText = "text-align:left;display:flex;align-items:center;gap:12px"; face.firstChild.style.fontSize = "64px"; back.style.display = "block"; c.style.boxShadow = "inset 0 0 0 4px #1F7A5A, var(--sh-2)";
        if (n === 6) msg.innerHTML = FC.md("Every one of these meals uses a **gift from the Americas**. Maya, Aztec and Andean farmers changed what the whole world eats — including us in Aotearoa."); });
      host.appendChild(c);
    });
    return {};
  };

  /* =======================================================
     MON · Word Origins — Nahuatl or te reo Māori?
     ======================================================= */
  IX.wordorigins = function(host){
    const WORDS = [
      { w:"tomato", o:"N", from:"tomatl" }, { w:"kiwi", o:"M", from:"kiwi (the bird)" }, { w:"chocolate", o:"N", from:"a bitter drink (xocolatl)" },
      { w:"avocado", o:"N", from:"ahuacatl" }, { w:"haka", o:"M", from:"haka" }, { w:"coyote", o:"N", from:"coyōtl" },
      { w:"chilli", o:"N", from:"chīlli" }, { w:"kai", o:"M", from:"kai (food)" }, { w:"axolotl", o:"N", from:"atl ‘water’ + Xolotl" }
    ];
    const P = panel(560); host.appendChild(P);
    const msg = pmsg("Tap a word to flip it. Did it come into English from **Nahuatl** (the Aztec language) or from **te reo Māori**?");
    const tally = big("Nahuatl: 0", "#B3262E");
    P.append(ptitle("Word origins"), msg, tally, h("div", { style:{ marginTop:"auto", fontSize:"19px", opacity:".75" } }, "Nahuatl is still spoken by over 1.6 million people in Mexico (2020 census)."));
    let nN = 0, flipped = 0;
    WORDS.forEach((it, i) => {
      const c = card((i % 3) * 366, Math.floor(i / 3) * 232, 350, 214);
      const w = h("div", { style:{ fontFamily:"var(--f-display)", fontWeight:"900", fontSize:"50px", textAlign:"center", marginTop:"34px" } }, it.w);
      const o = h("div", { style:{ display:"none", textAlign:"center", fontSize:"22px", marginTop:"6px" } });
      c.append(w, o);
      c.addEventListener("click", e => { e.stopPropagation(); if (c.dataset.on) return; c.dataset.on = "1"; flipped++; FC.sfx("tok");
        const isN = it.o === "N"; if (isN) nN++;
        w.style.marginTop = "14px";
        o.style.display = "block";
        o.innerHTML = `<b style="font-family:var(--f-label);letter-spacing:.12em;color:${isN ? "#B3262E" : "#1F7A5A"}">${isN ? "NAHUATL" : "TE REO MĀORI"}</b><br>from <i>${it.from}</i>`;
        c.style.boxShadow = `inset 0 0 0 4px ${isN ? "#B3262E" : "#1F7A5A"}, var(--sh-2)`;
        tally.textContent = "Nahuatl: " + nN;
        if (flipped === WORDS.length) msg.innerHTML = FC.md("Languages are alive! Words from Nahuatl and te reo Māori are part of the English we speak every day.");
      });
      host.appendChild(c);
    });
    return {};
  };

  /* =======================================================
     TUE · The Codex Decision — class vote with reasons
     ======================================================= */
  IX.codexvote = function(host){
    const OPTS = [
      { id:"sell", e:"💰", t:"Sell it", d:"Sell the codex to the highest bidder. The money could pay for the expedition." },
      { id:"abroad", e:"🏛️", t:"A big museum overseas", d:"Give it to a famous museum in Europe or the USA, where millions of visitors would see it." },
      { id:"home", e:"🏡", t:"A community museum in Petén", d:"Return it to a Maya community museum near where it was found, cared for by Maya people." },
      { id:"share", e:"📷", t:"Return it + share copies", d:"Return it home, AND make high-quality digital copies so the whole world can study it." }
    ];
    const saved = FC.store.get("codexVotes", { sell:0, abroad:0, home:0, share:0 });
    const P = panel(520); host.appendChild(P);
    const msg = pmsg("Teams discuss, then vote. Tap **+** for each vote. Every vote needs a **reason**!");
    const result = h("div", { style:{ fontSize:"24px", lineHeight:"1.3", marginTop:"auto" } });
    P.append(ptitle("The Codex Decision"), msg, result,
      h("div", { style:{ display:"flex", gap:"10px" } },
        darkB(small(btn("Clear votes", () => { OPTS.forEach(o => saved[o.id] = 0); FC.store.set("codexVotes", saved); FC.store.del && FC.store.del("codexDecision"); draw(); }, "ghost"))),
        small(btn("Lock in decision", () => { const win = winner(); if (!win) return; FC.store.set("codexDecision", win.id); FC.sfx("chime"); draw(); }))));
    const bars = {};
    OPTS.forEach((o, i) => {
      const c = h("div", { class:"pcard", style:{ position:"absolute", left:"0", top:(i * 174)+"px", width:"1140px", height:"160px", padding:"14px 18px", display:"grid", gridTemplateColumns:"80px 1fr 260px", gap:"16px", alignItems:"center" } });
      const bar = h("div", { style:{ height:"26px", borderRadius:"13px", background:"#D9A23A", width:"0%", transition:"width .4s" } });
      const num = h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"46px", textAlign:"center" } }, "0");
      bars[o.id] = { bar, num, c };
      const d = h("div", { style:{ fontSize:"21px", lineHeight:"1.25" } }); d.innerHTML = FC.md(o.d);
      c.append(h("div", { style:{ fontSize:"64px", textAlign:"center" } }, o.e),
        h("div", null, h("div", { style:{ fontFamily:"var(--f-display)", fontWeight:"900", fontSize:"32px" } }, o.t), d, h("div", { style:{ marginTop:"8px", background:"rgba(90,56,37,.12)", borderRadius:"13px" } }, bar)),
        h("div", { style:{ display:"flex", alignItems:"center", gap:"10px", justifyContent:"flex-end" } },
          darkB(pm(btn("−", () => { saved[o.id] = Math.max(0, saved[o.id] - 1); FC.store.set("codexVotes", saved); draw(); }, "ghost"))), num,
          pm(btn("+", () => { saved[o.id]++; FC.store.set("codexVotes", saved); draw(); }))));
      host.appendChild(c);
    });
    // panel sits to the right of the option cards
    P.style.left = "1160px"; P.style.right = "auto"; P.style.width = "600px";
    const winner = () => { const tot = OPTS.reduce((a, o) => a + saved[o.id], 0); if (!tot) return null; return OPTS.slice().sort((a, b) => saved[b.id] - saved[a.id])[0]; };
    function draw(){
      const tot = OPTS.reduce((a, o) => a + saved[o.id], 0);
      OPTS.forEach(o => { bars[o.id].num.textContent = saved[o.id]; bars[o.id].bar.style.width = (tot ? saved[o.id] / tot * 100 : 0) + "%"; });
      const locked = FC.store.get("codexDecision", null), w = winner();
      result.innerHTML = FC.md(locked ? `✅ **Locked in:** ${OPTS.find(o => o.id === locked).t}. This decision will appear in Friday's finale.` : w ? `Leading: **${w.t}** (${saved[w.id]} of ${tot} votes).` : "No votes yet.");
    }
    draw();
    return {};
  };

  /* =======================================================
     WED · Energy Mix Builder for the museum camp
     ======================================================= */
  IX.energymix = function(host){
    const SRC = [
      { id:"solar", e:"☀️", t:"Solar panels", c:"#D9A23A", em:0, rel:.4, note:"Free sunshine, but **nothing at night**." },
      { id:"hydro", e:"💧", t:"River turbine", c:"#2E9FB0", em:0, rel:.9, note:"Steady, but **low in a dry season**." },
      { id:"wind", e:"🌬️", t:"Wind turbine", c:"#9aa4a8", em:0, rel:.5, note:"Clean, but only when the **wind blows**." },
      { id:"diesel", e:"🛢️", t:"Diesel generator", c:"#5a3825", em:1, rel:1, note:"Always works, but **burns fossil fuel** and costs money." }
    ];
    const NEED = 6;
    const amt = { solar:0, hydro:0, wind:0, diesel:0 }; let battery = false;
    const v = svg(1100, 690, { style:"position:absolute;left:0;top:0;width:1100px;height:690px;border-radius:16px" });
    host.appendChild(v);
    const P = panel(600); host.appendChild(P);
    const msg = pmsg("The museum needs **6 units** of power. Build a mix that is **clean**, **reliable** and **fair**.");
    const meters = h("div", { style:{ display:"flex", flexDirection:"column", gap:"12px" } });
    const mkMeter = (label, col) => { const fill = h("div", { style:{ height:"100%", width:"0%", background:col, borderRadius:"10px", transition:"width .4s" } }); const val = h("span", { style:{ float:"right" } }); meters.appendChild(h("div", null, h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"22px", letterSpacing:".1em" } }, label, val), h("div", { style:{ height:"22px", background:"rgba(90,56,37,.15)", borderRadius:"10px" } }, fill))); return { fill, val }; };
    const mPow = mkMeter("POWER", "#1F7A5A"), mRel = mkMeter("RELIABILITY", "#2E9FB0"), mEm = mkMeter("EMISSIONS", "#B3262E");
    const batBtn = small(btn("🔋 Add battery: OFF", () => { battery = !battery; batBtn.textContent = "🔋 Add battery: " + (battery ? "ON" : "OFF"); draw(); }));
    const verdict = h("div", { style:{ fontSize:"22px", lineHeight:"1.3", marginTop:"auto" } });
    P.append(ptitle("Power the museum"), msg, meters, batBtn, verdict);
    const rows = SRC.map((src, i) => {
      const y = 40 + i * 160;
      const g = s("g"); v.appendChild(g);
      v.appendChild(s("rect", { x:20, y:y - 20, width:1060, height:140, rx:16, fill:"rgba(244,235,216,.92)" }));
      const t = s("text", { x:150, y:y + 28, "font-family":"Fraunces", "font-weight":900, "font-size":36, fill:"#2a1c12" }, src.t); v.appendChild(t);
      v.appendChild(s("text", { x:60, y:y + 60, "font-size":70, "text-anchor":"middle" }, src.e));
      const blocks = []; for (let k = 0; k < 4; k++){ const r = s("rect", { x:560 + k*70, y:y + 10, width:60, height:60, rx:10, fill:"rgba(90,56,37,.15)", stroke:src.c, "stroke-width":3 }); v.appendChild(r); blocks.push(r); }
      const nt = h("div", { style:{ position:"absolute", left:"150px", top:(y + 40)+"px", width:"400px", fontSize:"20px", lineHeight:"1.25" } }); nt.innerHTML = FC.md(src.note); host.appendChild(nt);
      const minus = pm(darkB(btn("−", () => { amt[src.id] = Math.max(0, amt[src.id] - 1); draw(); }, "ghost"))), plus = pm(btn("+", () => { amt[src.id] = Math.min(4, amt[src.id] + 1); draw(); }));
      [minus, plus].forEach((b, j) => { b.style.position = "absolute"; b.style.left = (870 + j*90)+"px"; b.style.top = (y + 14)+"px"; b.style.width = "80px"; host.appendChild(b); });
      return { src, blocks };
    });
    function draw(){
      let pow = 0, rel = 0, em = 0;
      rows.forEach(r => { const n = amt[r.src.id]; r.blocks.forEach((b, k) => b.setAttribute("fill", k < n ? r.src.c : "rgba(90,56,37,.15)")); pow += n; rel += n * (battery && r.src.id !== "diesel" ? Math.min(1, r.src.rel + .35) : r.src.rel); em += n * r.src.em; });
      const relPct = pow ? Math.min(100, Math.round(rel / NEED * 100)) : 0, emPct = Math.round(em / NEED * 100);
      mPow.fill.style.width = Math.min(100, pow / NEED * 100) + "%"; mPow.val.textContent = `${pow} / ${NEED}`;
      mRel.fill.style.width = relPct + "%"; mRel.val.textContent = relPct + "%";
      mEm.fill.style.width = Math.min(100, emPct) + "%"; mEm.val.textContent = em ? "HIGH" : "NONE";
      let t;
      if (pow < NEED) t = `Not enough yet: add **${NEED - pow}** more unit${NEED - pow > 1 ? "s" : ""}.`;
      else if (em > 2) t = "Lots of power, but a lot of **emissions**. Can you swap some diesel for renewables?";
      else if (relPct < 80) t = "Clean, but **unreliable** at night or on calm, dry days. Try a mix — or add a **battery**.";
      else t = "A strong mix! ✅ " + (battery ? "Remember: battery **lithium** comes from somewhere. Who lives there?" : "Clean and reliable.");
      verdict.innerHTML = FC.md(t);
    }
    draw();
    return {};
  };

  /* =======================================================
     THU · Evaluation Matrix — test each specification
     ======================================================= */
  IX.evalmatrix = function(host, cfg){
    const SPECS = [...((cfg && cfg.specs) || ["Has a hidden input", "Responds reliably (9 out of 10)", "Easy to see or hear in a bright, busy room"])];
    const state = SPECS.map(() => null);
    let ok = 0, fail = 0;
    const P = panel(560); host.appendChild(P);
    const score = big("0 / " + SPECS.length, "#1F7A5A"), msg = pmsg("Test each specification. Tap **Met**, **Partly** or **Not yet**.");
    const trials = h("div", { style:{ fontSize:"24px" } });
    const trialBox = h("div", { class:"pcard", style:{ padding:"12px 14px", background:"rgba(90,56,37,.06)" } }, h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", letterSpacing:".1em", fontSize:"20px" } }, "RELIABILITY TEST (10 TRIALS)"), trials,
      h("div", { style:{ display:"flex", gap:"8px", marginTop:"8px" } }, small(btn("✓ Worked", () => { if (ok + fail < 10){ ok++; drawT(); } })), darkB(small(btn("✗ Failed", () => { if (ok + fail < 10){ fail++; drawT(); } }, "ghost"))), darkB(small(btn("Reset", () => { ok = 0; fail = 0; drawT(); }, "ghost")))));
    const next = h("div", { style:{ fontSize:"22px", lineHeight:"1.3", marginTop:"auto" } });
    P.append(ptitle("Evaluate it"), score, msg, trialBox, next);
    const LV = [["met","✓ Met","#1F7A5A"],["part","~ Partly","#D9A23A"],["no","✗ Not yet","#B3262E"]];
    SPECS.forEach((sp, i) => {
      const c = h("div", { class:"pcard", style:{ position:"absolute", left:"0", top:(i * 230)+"px", width:"1100px", height:"212px", padding:"18px 22px" } });
      const btns = LV.map(([k, lab, col]) => { const b = small(btn(lab, () => { state[i] = k; draw(); }, "ghost")); b.dataset.k = k; b.dataset.col = col; b.style.flex = "1"; return b; });
      c.append(h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", letterSpacing:".14em", color:"#B3262E", fontSize:"20px" } }, "SPECIFICATION " + (i + 1)),
        h("div", { style:{ fontFamily:"var(--f-display)", fontWeight:"900", fontSize:"34px", margin:"4px 0 14px" } }, sp),
        h("div", { style:{ display:"flex", gap:"12px" } }, ...btns));
      c._btns = btns; host.appendChild(c); SPECS[i] = { t:sp, c };
    });
    function drawT(){ trials.innerHTML = FC.md(`**${ok}** worked · **${fail}** failed · ${10 - ok - fail} to go`); draw(); }
    function draw(){
      SPECS.forEach((sp, i) => sp.c._btns.forEach(b => { const on = state[i] === b.dataset.k; b.style.background = on ? b.dataset.col : ""; b.style.color = on ? "#fff" : "var(--cacao-ink)"; b.style.boxShadow = on ? "" : "inset 0 0 0 2px rgba(90,56,37,.35)"; }));
      const met = state.filter(x => x === "met").length;
      score.textContent = `${met} / ${SPECS.length}`;
      const todo = SPECS.map((sp, i) => state[i] && state[i] !== "met" ? sp.t : null).filter(Boolean);
      next.innerHTML = FC.md(state.some(x => !x) ? "Keep testing…" : todo.length ? `**Plan one improvement for:** ${todo[0]}. Then test again!` : "All specifications met! 🎉 Now ask a **stakeholder** (another team) for feedback.");
    }
    drawT();
    return {};
  };

  /* =======================================================
     FOLIO X art — the codex home in a community museum
     ======================================================= */
  A.homeFolio = function(){
    const v = svg(560, 700, { viewBox:"0 0 560 700" });
    v.appendChild(s("rect", { width:560, height:700, fill:"#efe3c6" }));
    v.appendChild(s("circle", { cx:280, cy:150, r:70, fill:"#F0C25E", opacity:.9 }));
    // museum with stepped roof
    v.appendChild(s("path", { d:"M90 330 L280 220 L470 330 Z", fill:"#B3262E" }));
    v.appendChild(s("rect", { x:110, y:330, width:340, height:220, fill:"#cdb68c", stroke:"#5a3825", "stroke-width":4 }));
    [0,1,2,3].forEach(i => v.appendChild(s("rect", { x:130 + i*80, y:350, width:22, height:200, fill:"#b49a6c" })));
    // display case with codex
    v.appendChild(s("rect", { x:200, y:420, width:160, height:110, fill:"rgba(190,230,240,.5)", stroke:"#3b2418", "stroke-width":4 }));
    for (let k = 0; k < 5; k++) v.appendChild(s("rect", { x:212 + k*28, y:445, width:26, height:60, fill:k % 2 ? "#f4ebd8" : "#e9dcc0", stroke:"#B3262E", "stroke-width":2 }));
    // people (many nations) walking in
    const cols = ["#5a3825","#8a5a3c","#c48a5a","#3b2418","#d9b38c","#6b4a32"];
    cols.forEach((c, i) => { const x = 70 + i * 84; v.appendChild(s("circle", { cx:x, cy:600, r:16, fill:c })); v.appendChild(s("path", { d:`M${x-22} 660 Q${x} 612 ${x+22} 660 Z`, fill:["#1F7A5A","#2E9FB0","#D9A23A","#B3262E","#1F7A5A","#2E9FB0"][i] })); });
    v.appendChild(lbl(280, 690, "THE CODEX COMES HOME", "#3b2418", 26));
    return v;
  };

  /* =======================================================
     FINALE — the codex comes home (steps → credits)
     ======================================================= */
  FC.slideExtras = FC.slideExtras || {};
  FC.slideExtras.finale = function(slide, ctx){
    const el = h("div", { class:"slide finale", style:{ background:"#0e0a08", color:"#F4EBD8", overflow:"hidden" } });
    const pic = FC.imgSlot("hero-w10", "finale-img");
    pic.style.cssText += ";position:absolute;inset:0;width:100%;height:100%;object-fit:cover";
    const img = h("div", { style:{ position:"absolute", inset:"0", opacity:"0", transition:"opacity 2s" } }, pic);
    el.appendChild(img);
    el.appendChild(h("div", { style:{ position:"absolute", inset:"0", background:"linear-gradient(90deg, rgba(14,10,8,.92) 0%, rgba(14,10,8,.65) 60%, rgba(14,10,8,.35) 100%)" } }));
    const stage = h("div", { style:{ position:"absolute", left:"140px", top:"130px", width:"1100px" } });
    el.appendChild(stage);
    const kick = t => h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", letterSpacing:".22em", fontSize:"26px", color:"#F0C25E", marginBottom:"18px" } }, t);
    const head = t => h("div", { style:{ fontFamily:"var(--f-display)", fontWeight:"900", fontSize:"96px", lineHeight:".98", marginBottom:"28px" } }, t);
    const body = t => { const d = h("div", { style:{ fontFamily:"var(--f-display)", fontSize:"40px", lineHeight:"1.3", maxWidth:"1050px" } }); d.innerHTML = FC.md(t); return d; };
    const NAMES = { sell:"sell it to the highest bidder", abroad:"give it to a big museum overseas", home:"return it to a Maya community museum in Petén", share:"return it home — and share digital copies with the world" };
    const dec = FC.store.get("codexDecision", null);
    const decText = dec ? NAMES[dec] : "return it to the people it belongs to";
    let rollT = null, roll = null;
    const SCENES = [
      () => [kick("THE DECISION"), head("You decided."), body(`After hearing every side, the class chose to **${decText}**.`), body(dec === "sell" || dec === "abroad" ? "Dr Canul listened carefully… then asked the Maya community what *they* wanted. They asked for it to come home. 🟡" : "Dr Canul smiled. “That is what the Maya community asked for, too.” 🟡")],
      () => { img.style.opacity = ".55"; return [kick("PETÉN, GUATEMALA · 🟡 EXPEDITION STORY"), head("The codex comes home."), body("Children from the village carry the codex into their new community museum. Doña Rosa has woven the cloth it rests on. Mateo has wired a gentle light above the case.")]; },
      () => [kick("THE LAST FOLIO · 🟡"), head("“May the maize grow.”"), body("Dr Canul reads the final page aloud: *“May the maize grow. May the rain come. May the days be counted well, and the people remember.”* Then she turns to you: “Thank you, historians.”")],
      () => {
        img.style.opacity = ".15";
        const map = M.build({ view:M.VIEWS.pacific });
        map.setAttribute("style", "position:absolute;left:700px;top:190px;width:900px;height:540px;border-radius:18px;box-shadow:0 20px 60px rgba(0,0,0,.6)");
        const route = map.querySelector(".m-route");
        const path = s("path", { d:M.arc([-89.9, 16.9], [172.6, -43.5], 260), fill:"none", stroke:"#F0C25E", "stroke-width":6, "stroke-dasharray":"18 12", "vector-effect":"non-scaling-stroke" });
        route.appendChild(path);
        M.mark(map, [-89.9, 16.9], "Petén"); M.mark(map, [172.6, -43.5], "Ōtautahi", { color:"#1F7A5A", side:"left" });
        const plane = s("text", { "font-size":70, "text-anchor":"middle", "dominant-baseline":"middle" }, "🛩️"); route.appendChild(plane);
        let t0 = null;
        const fly = (ts) => { if (!plane.isConnected) return; if (t0 === null) t0 = ts; const k = Math.min(1, (ts - t0) / 6000), len = path.getTotalLength(), pt = path.getPointAtLength(len * k); plane.setAttribute("x", pt.x); plane.setAttribute("y", pt.y); if (k < 1) requestAnimationFrame(fly); };
        setTimeout(() => FC.motionOK() ? requestAnimationFrame(fly) : (() => { const len = path.getTotalLength(), pt = path.getPointAtLength(len); plane.setAttribute("x", pt.x); plane.setAttribute("y", pt.y); })(), 300);
        const b = body("Capt. Sofía points the old floatplane south-west, across the Pacific, past the islands where the kūmara once travelled… all the way home to Aotearoa.");
        b.style.maxWidth = "640px";
        return [kick("HOME TO AOTEAROA"), head("La Golondrina flies home."), b, map];
      },
      () => {
        const teams = FC.teams().map(t => t.name), studs = FC.students();
        roll = h("div", { style:{ position:"absolute", left:"0", right:"0", top:"1080px", textAlign:"center", fontFamily:"var(--f-display)" } },
          h("div", { style:{ fontFamily:"var(--f-label)", letterSpacing:".22em", color:"#F0C25E", fontSize:"30px" } }, "THE FIFTH CODEX · AN EXPEDITION BY"),
          h("div", { style:{ fontSize:"64px", fontWeight:"900", margin:"20px 0 50px" } }, (FC.settings().className || "Our Class")),
          ...(studs.length ? [h("div", { style:{ fontFamily:"var(--f-label)", letterSpacing:".2em", color:"#F0C25E", fontSize:"26px", marginBottom:"12px" } }, "HISTORIANS · GEOGRAPHERS · SCIENTISTS · ENGINEERS · ARTISTS"), ...studs.map(n => h("div", { style:{ fontSize:"46px", lineHeight:"1.5" } }, n))] : []),
          h("div", { style:{ fontFamily:"var(--f-label)", letterSpacing:".2em", color:"#F0C25E", fontSize:"26px", margin:"60px 0 12px" } }, "EXPEDITION TEAMS"),
          ...teams.map(n => h("div", { style:{ fontSize:"42px", lineHeight:"1.5" } }, n)),
          h("div", { style:{ fontFamily:"var(--f-label)", letterSpacing:".2em", color:"#F0C25E", fontSize:"26px", margin:"60px 0 12px" } }, "WITH THANKS TO"),
          h("div", { style:{ fontSize:"38px", lineHeight:"1.5" } }, "Dr Itzel Canul · Capt. Sofía Quispe · Mateo Ríos · Doña Rosa Ajpop 🟡"),
          h("div", { style:{ fontSize:"38px", lineHeight:"1.5" } }, "and the Maya and Nahua peoples, whose story this is"),
          h("div", { style:{ fontSize:"120px", fontWeight:"900", marginTop:"120px", color:"#F0C25E" } }, "Soli Deo Gloria"),
          h("div", { style:{ fontSize:"36px", opacity:".85" } }, "To God alone the glory"));
        el.appendChild(roll);
        stage.style.opacity = "0"; img.style.opacity = ".25";
        const H = () => roll.offsetHeight + 1180;
        if (FC.motionOK()){ let y = 0; rollT = setInterval(() => { y += 1.6; roll.style.transform = `translateY(${-y}px)`; if (y > H() - 300){ clearInterval(rollT); } }, 16); }
        else roll.style.transform = `translateY(${-H() + 900}px)`;
        return [];
      }
    ];
    function step(k){
      clearInterval(rollT); if (roll){ roll.remove(); roll = null; }
      stage.style.opacity = "1";
      FC.clear(stage); SCENES[k]().forEach(n => stage.appendChild(n));
      if (FC.motionOK()) stage.animate([{ opacity:0, transform:"translateY(30px)" }, { opacity:1, transform:"none" }], { duration:1100, easing:"cubic-bezier(.2,.8,.2,1)" });
      FC.sfx(k === SCENES.length - 1 ? "chime" : "paper");
    }
    return { el, steps:SCENES.length - 1, step, destroy(){ clearInterval(rollT); } };
  };
})(window.FC);
