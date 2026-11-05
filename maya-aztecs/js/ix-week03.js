/* ==========================================================
   WEEK 3 INTERACTIVES — The Scribe's Secret
   (also: the reusable Circuit Sandbox used in later weeks)
   ========================================================== */
(function(FC){
  "use strict";
  const h = FC.h, s = FC.s, svg = FC.svg, A = FC.art, IX = FC.IX;
  const btn = (label, onclick, cls) => h("button", { class:"ixbtn " + (cls||""), onclick:(e) => { e.stopPropagation(); FC.sfx("tok"); onclick(e); } }, label);
  const panel = (w) => h("div", { class:"pcard", style:{ position:"absolute", right:"0", top:"0", width:(w||560)+"px", height:"690px", display:"flex", flexDirection:"column", gap:"14px" } });
  const ptitle = t => h("div", { style:{ fontFamily:"var(--f-display)", fontWeight:"900", fontSize:"44px", lineHeight:"1" } }, t);
  const pmsg = t => { const d = h("div", { style:{ fontSize:"27px", lineHeight:"1.3" } }); d.innerHTML = FC.md(t || ""); return d; };
  const big = (t, c) => h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"72px", lineHeight:".9", color:c || "#B3262E" } }, t);
  const darkB = b => { b.style.color = "var(--cacao-ink)"; b.style.boxShadow = "inset 0 0 0 2px rgba(90,56,37,.35)"; return b; };
  const stop = el => { ["pointerdown","click","keydown"].forEach(ev => el.addEventListener(ev, e => e.stopPropagation())); return el; };
  const lbl = (x, y, t, c, size, anchor) => s("text", { x, y, "text-anchor":anchor || "middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":size || 26, fill:c || "#3b2418", "letter-spacing":1.5 }, t);

  /* =======================================================
     MON · Maya Number Machine (base 20)
     ======================================================= */
  IX.numbers = function(host){
    const lv = [0, 0, 0]; // [400s, 20s, 1s]
    const NAMES = ["400s", "20s", "1s"];
    const box = h("div", { class:"pcard", style:{ position:"absolute", left:"0", top:"0", width:"1100px", height:"690px", display:"grid", gridTemplateRows:"repeat(3,1fr)", gap:"10px", padding:"20px 24px" } });
    host.appendChild(box);
    const rows = NAMES.map((n, i) => {
      const win = h("div", { style:{ width:"190px", height:"190px", borderRadius:"16px", background:"var(--basalt)", display:"grid", placeItems:"center", boxShadow:"inset 0 6px 18px rgba(0,0,0,.5)" } });
      const val = h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"38px", minWidth:"260px" } });
      const k = (t, f) => { const b = btn(t, () => { f(); draw(); }, ""); b.style.fontSize = "22px"; b.style.minHeight = "56px"; b.style.padding = "8px 14px"; return b; };
      const row = h("div", { style:{ display:"grid", gridTemplateColumns:"110px 190px 1fr", gap:"22px", alignItems:"center", borderBottom: i < 2 ? "2px dashed rgba(90,56,37,.25)" : "none" } },
        h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"40px", color:"#B3262E", textAlign:"right" } }, n),
        win,
        h("div", { style:{ display:"flex", flexDirection:"column", gap:"10px" } }, val, h("div", { style:{ display:"flex", gap:"8px", flexWrap:"wrap" } }, k("● +1", () => lv[i] = Math.min(19, lv[i]+1)), k("▬ +5", () => lv[i] = Math.min(19, lv[i]+5)), k("Clear", () => lv[i] = 0))));
      box.appendChild(row);
      return { win, val };
    });
    const P = panel(600); host.appendChild(P);
    const total = big("0", "#1F7A5A"), msg = pmsg("");
    const inp = stop(h("input", { type:"number", min:0, max:7999, placeholder:"Type a number…", style:{ font:"inherit", fontSize:"30px", padding:"12px 16px", borderRadius:"12px", border:"2px solid rgba(90,56,37,.3)", width:"100%", background:"#F4EBD8" } }));
    inp.addEventListener("input", () => { let n = FC.clamp(Math.floor(+inp.value || 0), 0, 7999); lv[0] = Math.floor(n/400); lv[1] = Math.floor(n%400/20); lv[2] = n%20; draw(); });
    const ctr = h("div", { style:{ marginTop:"auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"12px" } });
    let quiz = null;
    const qb = btn("🎲 Quiz the class", () => { quiz = 1 + Math.floor(Math.random()*120); lv[0] = Math.floor(quiz/400); lv[1] = Math.floor(quiz%400/20); lv[2] = quiz%20; draw(true); }, "on");
    const rb = darkB(btn("Reveal", () => { quiz = null; draw(); }, "dark"));
    ctr.append(qb, rb);
    P.append(ptitle("Maya Number Machine"), total, msg, inp, ctr);
    function draw(hide){
      lv.forEach((v, i) => { FC.clear(rows[i].win); const m = FC.maya(v, { color:"#F0C25E" }); m.setAttribute("style", "width:150px;height:150px"); rows[i].win.appendChild(m); rows[i].val.textContent = hide ? "?" : `${v} × ${[400,20,1][i]} = ${v*[400,20,1][i]}`; });
      const n = lv[0]*400 + lv[1]*20 + lv[2];
      total.textContent = hide ? "?" : String(n);
      msg.innerHTML = FC.md(hide ? "Read the numeral **bottom to top**: work out each level, then add them up. Whiteboards!" : "● = 1 · ▬ = 5 · 🐚 shell = **zero**. The Maya counted in **twenties**, stacking levels from the bottom up — and they used **zero** over 1,600 years ago.");
    }
    draw();
    return {};
  };

  /* =======================================================
     MON · Decipherment detective (syllables)
     ======================================================= */
  IX.decipher = function(host){
    const SYL = { ba:"#B3262E", la:"#2E9FB0", ma:"#1F7A5A", ka:"#C46A3A", wa:"#D9A23A", pa:"#5a3825", ja:"#8B5BA8", ki:"#2A8C9C" };
    const shape = (k) => {
      const v = svg(120, 120, { style:"width:96px;height:96px" });
      v.appendChild(s("rect", { x:8, y:8, width:104, height:104, rx:26, fill:"#efe3c6", stroke:"#3b2418", "stroke-width":6 }));
      const seed = [...k].reduce((a, c) => a + c.charCodeAt(0), 0), r = FC.rng(seed);
      for (let i=0;i<3;i++){ const kind = Math.floor(r()*3), x = 28 + r()*50, y = 28 + r()*50; if (kind === 0) v.appendChild(s("circle", { cx:x, cy:y, r:9 + r()*8, fill:"none", stroke:SYL[k], "stroke-width":6 })); else if (kind === 1) v.appendChild(s("path", { d:`M${x-16} ${y} q16 -22 32 0`, fill:"none", stroke:SYL[k], "stroke-width":6 })); else v.appendChild(s("rect", { x:x-10, y:y-8, width:20, height:16, rx:4, fill:SYL[k] })); }
      return v;
    };
    const WORDS = [
      { syl:["ba","la","ma"], word:"b'ahlam", mean:"jaguar 🐆", note:"The last vowel isn't spoken: ba-la-m(a) → **b'ahlam**." },
      { syl:["ka","ka","wa"], word:"kakaw", mean:"cacao 🫘", note:"Painted on a real Maya drinking vessel! ka-ka-w(a) → **kakaw** — our word ‘cacao’ comes from it." },
      { syl:["pa","ka","la"], word:"Pakal", mean:"shield 🛡️ — and the name of a famous king", note:"pa-ka-l(a) → **Pakal**, king of Palenque. Decoding names let scholars read the history of real rulers!" }
    ];
    let w = 0, picked = [];
    const top = h("div", { class:"pcard", style:{ position:"absolute", left:"0", top:"0", width:"1100px", height:"690px", display:"flex", flexDirection:"column", gap:"18px", padding:"24px 30px" } });
    host.appendChild(top);
    const slots = h("div", { style:{ display:"flex", gap:"20px", justifyContent:"center", minHeight:"170px" } });
    const tray = h("div", { style:{ display:"flex", gap:"10px", justifyContent:"center", flexWrap:"wrap" } });
    const result = h("div", { style:{ fontSize:"30px", lineHeight:"1.3", textAlign:"center", minHeight:"120px" } });
    top.append(h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"26px", letterSpacing:".14em", color:"#B3262E", textAlign:"center" } }, "BUILD THE WORD · TAP SYLLABLES IN ORDER"), slots, result, h("div", { style:{ marginTop:"auto", fontFamily:"var(--f-label)", fontWeight:"800", fontSize:"20px", letterSpacing:".1em", textAlign:"center", opacity:".7" } }, "SYLLABLE SIGNS · simplified teaching shapes, not real glyph drawings"), tray);
    const P = panel(600); host.appendChild(P);
    const clue = big("", "#2E9FB0"), msg = pmsg("");
    const ctr = h("div", { style:{ marginTop:"auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"12px" } });
    P.append(ptitle("Decipherment detective"), clue, msg, ctr);
    function draw(){
      const W = WORDS[w];
      clue.textContent = `Word ${w+1}: “${W.mean.split(" ")[0]}”`;
      msg.innerHTML = FC.md(`Maya scribes could spell a word with **syllable signs** (consonant + vowel). Build **${W.mean}** from the syllables below. Clue: it has **${W.syl.length}** syllables.`);
      FC.clear(slots); FC.clear(tray); result.textContent = "";
      for (let i=0;i<W.syl.length;i++){ const p = picked[i]; slots.appendChild(h("div", { style:{ width:"130px", height:"165px", borderRadius:"14px", border:"3px dashed rgba(90,56,37,.4)", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:"6px", background: p ? "#F4EBD8" : "transparent" } }, p ? shape(p) : "", p ? h("b", { style:{ fontFamily:"var(--f-label)", fontSize:"30px" } }, p) : "")); }
      Object.keys(SYL).forEach(k => { const t = h("button", { style:{ border:"0", background:"transparent", display:"flex", flexDirection:"column", alignItems:"center", cursor:"pointer", padding:"4px" }, onclick:(e) => { e.stopPropagation(); if (picked.length >= W.syl.length) return; picked.push(k); FC.sfx("tok"); draw(); check(); } }, shape(k), h("b", { style:{ fontFamily:"var(--f-label)", fontSize:"28px", color:"#3b2418" } }, k)); tray.appendChild(t); });
    }
    function check(){
      const W = WORDS[w];
      if (picked.length < W.syl.length) return;
      if (picked.join() === W.syl.join()){ result.innerHTML = `<b style="font-size:44px;color:#1F7A5A">✓ ${W.word}</b> = ${FC.esc(W.mean)}<br>${FC.md(W.note)}`; FC.sfx("ok"); }
      else { result.innerHTML = `<b style="color:#B3262E">✗ Not quite</b> — clear and try again.`; FC.sfx("no"); }
    }
    ctr.append(darkB(btn("Clear", () => { picked = []; draw(); }, "dark")), darkB(btn("Show answer", () => { picked = WORDS[w].syl.slice(); draw(); check(); }, "dark")));
    const nb = btn("Next word ▸", () => { w = (w+1) % WORDS.length; picked = []; draw(); }, "on"); nb.style.gridColumn = "1 / -1"; ctr.appendChild(nb);
    draw();
    return {};
  };

  /* =======================================================
     TUE · Karst cross-section → cenote
     ======================================================= */
  IX.karst = function(host){
    const v = svg(1100, 690, { style:"position:absolute;left:0;top:0;width:1100px;height:690px;border-radius:16px" });
    v.innerHTML = `<defs><clipPath id="ks-c"><rect width="1100" height="690" rx="16"/></clipPath><pattern id="ks-lime" width="80" height="40" patternUnits="userSpaceOnUse"><rect width="80" height="40" fill="#d9cba8"/><path d="M0 40h80M40 0v20M0 20h80M20 20v20M60 20v20" stroke="#bfae86" stroke-width="2"/></pattern></defs>`;
    const g = s("g", { "clip-path":"url(#ks-c)" }); v.appendChild(g);
    g.appendChild(s("rect", { width:1100, height:690, fill:"#9ccfd8" }));
    g.appendChild(s("rect", { y:200, width:1100, height:490, fill:"url(#ks-lime)" }));
    g.appendChild(s("rect", { y:180, width:1100, height:26, fill:"#3a6b3a" }));
    for (let i=0;i<16;i++) g.appendChild(A.leaf(30 + i*72, 186, 70 + (i%3)*20, -90 + (i%2 ? 15 : -15), 18, "#2f5d2f", { rib:false }));
    const water = s("path", { d:"M0 560 H1100 V690 H0Z", fill:"#2E9FB0", opacity:.85 }); g.appendChild(water);
    const cave = s("ellipse", { cx:560, cy:470, rx:10, ry:6, fill:"#1b3a42", style:"transition:all 1.4s cubic-bezier(.3,.7,.2,1)" }); g.appendChild(cave);
    const pool = s("ellipse", { cx:560, cy:520, rx:0, ry:0, fill:"#2E9FB0", style:"transition:all 1.4s" }); g.appendChild(pool);
    const hole = s("path", { d:"M440 206 Q560 230 680 206 L640 440 Q560 470 480 440Z", fill:"#1b3a42", opacity:0, style:"transition:opacity 1.2s" }); g.appendChild(hole);
    const holeWater = s("path", { d:"M470 420 Q560 450 650 420 L640 520 Q560 540 480 520Z", fill:"#2E9FB0", opacity:0, style:"transition:opacity 1.2s" }); g.appendChild(holeWater);
    const rubble = s("g", { opacity:0, style:"transition:opacity 1s" }); for (let i=0;i<9;i++) rubble.appendChild(s("rect", { x:480 + i*18, y:500 + (i%3)*8, width:22, height:16, rx:3, fill:"#bfae86", transform:`rotate(${i*23} ${490+i*18} ${508})` })); g.appendChild(rubble);
    const rain = s("g", { opacity:0, style:"transition:opacity .6s" }); for (let i=0;i<50;i++) rain.appendChild(s("line", { x1:(i*47)%1100, x2:(i*47)%1100 - 8, y1:(i*31)%170, y2:(i*31)%170 + 24, stroke:"#2E9FB0", "stroke-width":3 })); g.appendChild(rain);
    const seep = s("g", { opacity:0, style:"transition:opacity .8s" }); for (let i=0;i<12;i++) seep.appendChild(s("path", { d:`M${380 + i*30} 220 q${(i%2?8:-8)} 80 0 ${160 + (i%3)*40}`, stroke:"#2E9FB0", "stroke-width":4, fill:"none", "stroke-dasharray":"6 8" })); g.appendChild(seep);
    const people = s("g", { opacity:0, style:"transition:opacity 1s" }); [[400,170],[720,170],[760,170]].forEach(([x,y]) => { people.appendChild(s("circle", { cx:x, cy:y-50, r:12, fill:"#5a3825" })); people.appendChild(s("path", { d:`M${x-14} ${y} l6 -36 h16 l6 36z`, fill:"#B3262E" })); }); people.appendChild(s("path", { d:"M690 150 q20 -30 40 0 v20 h-40z", fill:"#b86a3e" })); g.appendChild(people);
    g.appendChild(lbl(80, 260, "LIMESTONE", "#5a3825", 30, "start"));
    g.appendChild(lbl(80, 620, "GROUNDWATER", "#F4EBD8", 30, "start"));
    host.appendChild(v);
    const P = panel(600); host.appendChild(P);
    const num = big("1", "#2E9FB0"), msg = pmsg("");
    const ctr = h("div", { style:{ marginTop:"auto", display:"flex", gap:"12px" } });
    P.append(ptitle("How a cenote forms"), num, msg, ctr);
    const ST = [
      "The Yucatán is a huge flat slab of **limestone** — rock made from ancient sea shells. There are almost **no rivers** on the surface. So where does the water go?",
      "**Rain** soaks up a little carbon dioxide from the air and soil, making it very slightly **acidic** (like weak fizzy water).",
      "The rainwater **seeps down** through cracks and slowly **dissolves** the limestone…",
      "…over thousands of years, hollowing out **caves** and **underground rivers**.",
      "When a cave roof gets too thin it **collapses** — opening a deep natural well: a **cenote** (say-NOH-tay). Fresh water at last!",
      "People settled beside cenotes. **Chichén Itzá** means ‘at the mouth of the well of the Itzá’. Cenotes were also seen as sacred — offerings were placed in them."
    ];
    let k = 0;
    function go(n){
      k = FC.clamp(n, 0, ST.length-1); num.textContent = `${k+1} / ${ST.length}`; msg.innerHTML = FC.md(ST[k]);
      rain.setAttribute("opacity", k >= 1 && k <= 3 ? 1 : 0);
      seep.setAttribute("opacity", k >= 2 && k <= 3 ? 1 : 0);
      const big2 = k >= 3;
      cave.setAttribute("rx", big2 ? 170 : k >= 2 ? 60 : 10); cave.setAttribute("ry", big2 ? 90 : k >= 2 ? 30 : 6);
      pool.setAttribute("rx", big2 ? 150 : 0); pool.setAttribute("ry", big2 ? 30 : 0);
      hole.setAttribute("opacity", k >= 4 ? 1 : 0); holeWater.setAttribute("opacity", k >= 4 ? 1 : 0); rubble.setAttribute("opacity", k >= 4 ? 1 : 0);
      people.setAttribute("opacity", k >= 5 ? 1 : 0);
      if (k === 4) v.animate([{ transform:"translate(0,0)" },{ transform:"translate(-6px,3px)" },{ transform:"translate(5px,-2px)" },{ transform:"translate(0,0)" }], { duration:400, iterations:2 });
    }
    ctr.append(darkB(btn("◂ Back", () => go(k-1), "dark")), btn("Next ▸", () => { go(k+1); FC.sfx("paper"); }, "on"));
    go(0);
    return {};
  };

  /* =======================================================
     TUE · Ring of cenotes → the Chicxulub crater
     ======================================================= */
  IX.cenotering = function(host){
    const L0 = -92.5, L1 = -86.3, T = 22.3, B = 17.6, kx = 104, ky = 111, sc = 1100/((L1-L0)*kx);
    const P_ = (lon, lat) => [(lon - L0)*kx*sc, (T - lat)*ky*sc];
    const H = (T - B)*ky*sc;
    const v = svg(1100, H, { style:`position:absolute;left:0;top:0;width:1100px;height:690px;border-radius:14px;box-shadow:var(--sh-3)`, preserveAspectRatio:"xMidYMid slice" });
    v.appendChild(s("rect", { width:1100, height:H, fill:"#17505a" }));
    v.appendChild(s("rect", { width:1100, height:H, fill:"url(#p-dots)", opacity:.35 }));
    const coast = [[-91.9,18.6],[-91.3,18.7],[-90.75,19.35],[-90.45,19.85],[-90.45,20.6],[-90.35,20.95],[-90.1,21.15],[-89.65,21.3],[-89.0,21.35],[-88.6,21.45],[-88.1,21.6],[-87.55,21.55],[-87.08,21.6],[-86.85,21.2],[-86.95,20.85],[-87.45,20.25],[-87.6,19.8],[-87.5,19.3],[-87.75,18.75],[-88.05,18.4],[-88.3,18.5],[-88.3,17.6],[-91.4,17.6],[-91.4,18.1]];
    const pth = "M" + coast.map(c => P_(...c).map(n => n.toFixed(0)).join(" ")).join(" L") + " L1100 " + H + " L0 " + H + "Z";
    v.appendChild(s("path", { d:"M" + coast.map(c => P_(...c).map(n => n.toFixed(0)).join(" ")).join(" L") + " L" + P_(-86.3,17.6).join(" ") + " L" + P_(-92.5,17.6).join(" ") + " L" + P_(-92.5,18.6).join(" ") + "Z", fill:"#E9DCC0", filter:"url(#fx-paper-rough)" }));
    void pth;
    v.appendChild(lbl(...P_(-91.3, 21.9), "GULF OF MEXICO", "rgba(233,220,192,.6)", 34));
    v.appendChild(lbl(...P_(-86.9, 18.6), "CARIBBEAN", "rgba(233,220,192,.6)", 28));
    const C = [-89.55, 21.3], Rkm = 90;
    const [cx, cy] = P_(...C);
    const rnd = FC.rng(7);
    const dots = s("g", { opacity:0, style:"transition:opacity .8s" }), ringDots = s("g", { opacity:0, style:"transition:opacity .8s" });
    const inLand = (x, y) => { const pt = v.createSVGPoint ? null : null; void pt; return true; };
    for (let i=0;i<60;i++){ const lon = -90.3 + rnd()*3.2, lat = 18.6 + rnd()*2.4; const [x,y] = P_(lon, lat); if (inLand(x,y)) dots.appendChild(s("circle", { cx:x, cy:y, r:5, fill:"#2E9FB0", stroke:"#14110F", "stroke-width":1.5 })); }
    for (let a=170; a<=370; a+=5){ const rr = Rkm*(0.93 + rnd()*.12), t = a*Math.PI/180; const x = cx + Math.cos(t)*rr*sc*kx/104, y = cy - Math.sin(t)*rr*sc; if (y > cy - 10) ringDots.appendChild(s("circle", { cx:x, cy:y, r:7, fill:"#2E9FB0", stroke:"#14110F", "stroke-width":1.5 })); }
    v.append(dots, ringDots);
    const crater = s("circle", { cx, cy, r:Rkm*sc, fill:"rgba(179,38,46,.12)", stroke:"#B3262E", "stroke-width":5, "stroke-dasharray":"16 10", opacity:0, style:"transition:opacity 1s" });
    v.appendChild(crater);
    const impact = s("g", { opacity:0, style:"transition:opacity .6s" }); impact.appendChild(s("circle", { cx, cy, r:16, fill:"#F0C25E", filter:"url(#fx-glow)" })); { const L = lbl(cx, cy - 26, "CHICXULUB", "#F4EBD8", 30); L.setAttribute("stroke", "#3b2418"); L.setAttribute("stroke-width", "6"); L.setAttribute("paint-order", "stroke"); impact.appendChild(L); } v.appendChild(impact);
    const cities = s("g", { opacity:0, style:"transition:opacity .8s" });
    [["Mérida", -89.62, 20.97],["Chichén Itzá", -88.57, 20.68],["Uxmal", -89.77, 20.36],["Tulum", -87.46, 20.21]].forEach(([n, lo, la]) => { const [x,y] = P_(lo, la); cities.appendChild(s("rect", { x:x-9, y:y-9, width:18, height:18, fill:"#5a3825", transform:`rotate(45 ${x} ${y})` })); cities.appendChild(lbl(x + 14, y + 9, n.toUpperCase(), "#3b2418", 26, "start")); });
    v.appendChild(cities);
    host.appendChild(v);
    const P = panel(600); host.appendChild(P);
    const msg = pmsg("Satellite maps of the Yucatán show thousands of **cenotes**. Scientists noticed something strange about where some of them are…");
    const grid = h("div", { style:{ marginTop:"auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"12px" } });
    P.append(ptitle("The cenote mystery"), msg, grid);
    const t = (label, fn) => { const b = btn(label, () => { b.classList.toggle("on"); fn(b.classList.contains("on")); }, ""); b.style.fontSize = "22px"; grid.appendChild(b); return b; };
    t("Cenotes", on => { dots.setAttribute("opacity", on ? 1 : 0); if (on) msg.innerHTML = FC.md("Most cenotes are scattered across the peninsula…"); });
    t("Look closer", on => { ringDots.setAttribute("opacity", on ? 1 : 0); if (on) msg.innerHTML = FC.md("…but many line up in a **giant arc**! What could make a half-circle of wells nearly **180 km** across? Discuss!"); });
    t("Reveal the crater", on => { crater.setAttribute("opacity", on ? 1 : 0); impact.setAttribute("opacity", on ? 1 : 0); if (on){ msg.innerHTML = FC.md("**The Chicxulub crater!** About **66 million years ago** an asteroid around 10 km wide smashed in here. The buried crater rim cracked the limestone, so water dissolved caves along it — making the **ring of cenotes**. Most scientists link this impact to the end of the dinosaurs."); FC.sfx("thunder"); } });
    t("Maya cities", on => { cities.setAttribute("opacity", on ? 1 : 0); if (on) msg.innerHTML = FC.md("Maya cities like **Mérida** (once T'Hó), **Uxmal** and **Chichén Itzá** grew where people could reach **water**. Geography shapes where people live!"); });
    return {};
  };

  /* =======================================================
     CIRCUIT SANDBOX (Wed W3, reused W4–W5) — real nodal analysis
     ======================================================= */
  function solve(nodes, edges, bat){
    // nodes: array of keys; edges: [{a,b,g}] ; bat: {p,n,V,r}
    const idx = {}; let n = 0;
    nodes.forEach(k => { if (k !== bat.n) idx[k] = n++; });
    const G = Array.from({ length:n }, () => new Float64Array(n + 1));
    const add = (a, b, g) => { const ia = idx[a], ib = idx[b]; if (ia !== undefined) G[ia][ia] += g; if (ib !== undefined) G[ib][ib] += g; if (ia !== undefined && ib !== undefined){ G[ia][ib] -= g; G[ib][ia] -= g; } };
    edges.forEach(e => add(e.a, e.b, e.g));
    for (let i=0;i<n;i++) G[i][i] += 1e-7;
    const gb = 1/bat.r; add(bat.p, bat.n, gb); if (idx[bat.p] !== undefined) G[idx[bat.p]][n] += bat.V*gb;
    for (let c=0;c<n;c++){ let p = c; for (let r=c+1;r<n;r++) if (Math.abs(G[r][c]) > Math.abs(G[p][c])) p = r; [G[c], G[p]] = [G[p], G[c]]; const d = G[c][c] || 1e-12; for (let r=0;r<n;r++){ if (r === c) continue; const f = G[r][c]/d; if (f) for (let k=c;k<=n;k++) G[r][k] -= f*G[c][k]; } }
    const V = {}; nodes.forEach(k => { V[k] = k === bat.n ? 0 : G[idx[k]][n] / (G[idx[k]][idx[k]] || 1e-12); });
    return V;
  }
  IX.sandbox = function(host, cfg){
    cfg = cfg || {};
    const GX = 7, GY = 5, W = 1100, H = 690, pad = 80, cw = (W - pad*2)/(GX-1), chh = (H - pad*2)/(GY-1);
    const P_ = (i, j) => [pad + i*cw, pad + j*chh];
    const key = (i, j) => i + "," + j;
    const ek = (a, b) => [a, b].sort().join("|");
    const BAT = ek(key(0,1), key(0,2)); // + at (0,1), − at (0,2)
    let comps = {}; // edgeKey -> {t:'wire'|'bulb'|'switch', on:bool}
    let tool = "wire", symbols = !!cfg.symbols;
    const PRESETS = {
      loop: { "0,0|0,1":"wire", "0,0|1,0":"wire", "1,0|2,0":"wire", "2,0|3,0":"bulb", "3,0|4,0":"wire", "4,0|4,1":"wire", "4,1|4,2":"wire", "4,2|4,3":"wire", "3,3|4,3":"switch", "2,3|3,3":"wire", "1,3|2,3":"wire", "0,3|1,3":"wire", "0,2|0,3":"wire" },
      series: { "0,0|0,1":"wire", "0,0|1,0":"wire", "1,0|2,0":"bulb", "2,0|3,0":"wire", "3,0|4,0":"bulb", "4,0|4,1":"wire", "4,1|4,2":"wire", "4,2|4,3":"wire", "3,3|4,3":"wire", "2,3|3,3":"wire", "1,3|2,3":"wire", "0,3|1,3":"wire", "0,2|0,3":"wire" },
      parallel: { "0,0|0,1":"wire", "0,0|1,0":"wire", "1,0|2,0":"wire", "2,0|3,0":"bulb", "3,0|4,0":"wire", "4,0|4,1":"wire", "4,1|4,2":"wire", "4,2|4,3":"wire", "3,3|4,3":"wire", "2,3|3,3":"wire", "1,3|2,3":"wire", "0,3|1,3":"wire", "0,2|0,3":"wire", "1,0|1,1":"wire", "1,1|2,1":"wire", "2,1|3,1":"bulb", "3,1|4,1":"wire" }
    };
    const load = name => { comps = {}; Object.entries(PRESETS[name] || {}).forEach(([k, t]) => { comps[k.split("|").sort().join("|")] = { t, on: t === "switch" ? true : undefined }; }); };
    if (cfg.preset) load(cfg.preset);
    const v = svg(W, H, { style:`position:absolute;left:0;top:0;width:${W}px;height:${H}px;cursor:crosshair` });
    v.appendChild(s("rect", { x:6, y:6, width:W-12, height:H-12, rx:14, fill:"#1b2124", stroke:"rgba(127,243,255,.25)", "stroke-width":2 }));
    const layer = s("g"), flow = s("g"), dotsL = s("g"); v.append(layer, flow, dotsL);
    for (let i=0;i<GX;i++) for (let j=0;j<GY;j++){ const [x,y] = P_(i,j); dotsL.appendChild(s("circle", { cx:x, cy:y, r:6, fill:"#5a6a70" })); }
    host.appendChild(v);
    const Pn = panel(600); host.appendChild(Pn);
    const status = h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"50px", lineHeight:"1" } });
    const msg = pmsg("");
    const tools = h("div", { style:{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"8px" } });
    const TOOLS = [["wire","〰 Wire"],["bulb","💡 Bulb"],["switch","⏻ Switch"],["hand","✋ Flip switch"],["erase","⌫ Erase"]];
    const tbs = TOOLS.map(([k, l]) => { const b = btn(l, () => { tool = k; tbs.forEach(x => x.classList.toggle("on", x === b)); }, ""); b.style.fontSize = "19px"; b.style.minHeight = "54px"; b.style.padding = "8px"; tools.appendChild(b); return b; });
    tbs[0].classList.add("on");
    const symB = btn("Symbols", () => { symbols = !symbols; symB.classList.toggle("on", symbols); draw(); }, ""); symB.style.fontSize = "19px"; symB.style.minHeight = "54px"; if (symbols) symB.classList.add("on"); tools.appendChild(symB);
    const pres = h("div", { style:{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"8px", marginTop:"auto" } });
    (cfg.presets || ["loop","empty"]).forEach(p => { const b = darkB(btn({ loop:"Simple loop", series:"Series", parallel:"Parallel", empty:"Clear" }[p], () => { if (p === "empty") comps = {}; else load(p); draw(); }, "dark")); b.style.fontSize = "19px"; b.style.minHeight = "52px"; pres.appendChild(b); });
    Pn.append(ptitle(cfg.title || "Circuit sandbox"), status, msg, tools, h("div", { style:{ fontSize:"19px", opacity:".75" } }, "Choose a tool, then click between two dots. The battery is fixed on the left."), pres);
    v.addEventListener("click", e => {
      e.stopPropagation();
      const [x, y] = FC.toLocal(v, e); let best = null, bd = 1e9;
      for (let i=0;i<GX;i++) for (let j=0;j<GY;j++) [[i+1,j],[i,j+1]].forEach(([i2,j2]) => { if (i2 >= GX || j2 >= GY) return; const [x1,y1] = P_(i,j), [x2,y2] = P_(i2,j2); const d = Math.hypot(x-(x1+x2)/2, y-(y1+y2)/2); if (d < bd){ bd = d; best = ek(key(i,j), key(i2,j2)); } });
      if (!best || bd > Math.min(cw, chh)*.5 || best === BAT) return;
      if (tool === "erase") delete comps[best];
      else if (tool === "hand"){ if (comps[best] && comps[best].t === "switch") comps[best].on = !comps[best].on; else return; }
      else comps[best] = { t:tool, on: tool === "switch" ? false : undefined };
      FC.sfx(tool === "hand" ? "tok" : "paper"); draw();
    });
    let raf;
    function draw(){
      FC.clear(layer); FC.clear(flow); cancelAnimationFrame(raf);
      // solve
      const nodes = new Set([key(0,1), key(0,2)]); const E = [];
      Object.entries(comps).forEach(([k, c]) => { const [a, b] = k.split("|"); nodes.add(a); nodes.add(b); if (c.t === "wire") E.push({ k, a, b, g:100 }); else if (c.t === "bulb") E.push({ k, a, b, g:1 }); else if (c.t === "switch" && c.on) E.push({ k, a, b, g:100 }); });
      const V = solve([...nodes], E, { p:key(0,1), n:key(0,2), V:3, r:0.05 });
      const Ibat = (3 - V[key(0,1)]) / 0.05;
      const short = Ibat > 20;
      const cur = {}; E.forEach(e => { cur[e.k] = (V[e.a] - V[e.b]) * e.g; });
      // draw battery
      const [bx, by1] = P_(0,1), [, by2] = P_(0,2), bmid = (by1+by2)/2;
      layer.appendChild(s("line", { x1:bx, x2:bx, y1:by1, y2:bmid-24, stroke:"#C46A3A", "stroke-width":8 }));
      layer.appendChild(s("line", { x1:bx, x2:bx, y1:bmid+24, y2:by2, stroke:"#C46A3A", "stroke-width":8 }));
      if (symbols){ layer.appendChild(s("line", { x1:bx-40, x2:bx+40, y1:bmid-12, y2:bmid-12, stroke:"#E9DCC0", "stroke-width":6 })); layer.appendChild(s("line", { x1:bx-22, x2:bx+22, y1:bmid+12, y2:bmid+12, stroke:"#E9DCC0", "stroke-width":12 })); }
      else { layer.appendChild(s("rect", { x:bx-34, y:bmid-44, width:68, height:88, rx:10, fill: short ? "#B3262E" : "#2A2420", stroke:"#D9A23A", "stroke-width":4 })); layer.appendChild(s("rect", { x:bx-12, y:bmid-54, width:24, height:12, fill:"#D9A23A" })); }
      layer.appendChild(lbl(bx-50, by1+10, "+", "#F0C25E", 34, "end")); layer.appendChild(lbl(bx-50, by2+10, "−", "#7FF3FF", 34, "end"));
      layer.appendChild(lbl(bx + 50, bmid + 10, "3 V", "#E9DCC0", 28, "start"));
      let lit = 0;
      Object.entries(comps).forEach(([k, c]) => {
        const [a, b] = k.split("|").map(p => p.split(",").map(Number)); const [x1,y1] = P_(...a), [x2,y2] = P_(...b);
        const mx = (x1+x2)/2, my = (y1+y2)/2, ang = Math.atan2(y2-y1, x2-x1)*180/Math.PI;
        const I = Math.abs(cur[k] || 0);
        if (c.t === "wire"){ layer.appendChild(s("line", { x1, y1, x2, y2, stroke: symbols ? "#E9DCC0" : "#C46A3A", "stroke-width": symbols ? 5 : 9, "stroke-linecap":"round" })); }
        else {
          const half = Math.hypot(x2-x1, y2-y1)/2, gap = 42;
          const g = s("g", { transform:`translate(${mx} ${my}) rotate(${ang})` });
          g.appendChild(s("line", { x1:-half, x2:-gap, y1:0, y2:0, stroke: symbols ? "#E9DCC0" : "#C46A3A", "stroke-width": symbols ? 5 : 9 }));
          g.appendChild(s("line", { x1:gap, x2:half, y1:0, y2:0, stroke: symbols ? "#E9DCC0" : "#C46A3A", "stroke-width": symbols ? 5 : 9 }));
          if (c.t === "bulb"){
            const P = short ? 0 : I*I; const br = FC.clamp(P/8, 0, 1); if (br > .03) lit++;
            if (br > .03) layer.appendChild(s("circle", { cx:mx, cy:my, r:60 + 70*br, fill:"url(#g-lamp)", opacity:.25 + .75*br }));
            if (symbols){ g.appendChild(s("circle", { r:gap-4, fill:"none", stroke:"#E9DCC0", "stroke-width":5 })); g.appendChild(s("path", { d:`M${-(gap-4)*.7} ${-(gap-4)*.7} L${(gap-4)*.7} ${(gap-4)*.7} M${-(gap-4)*.7} ${(gap-4)*.7} L${(gap-4)*.7} ${-(gap-4)*.7}`, stroke:"#E9DCC0", "stroke-width":5 })); }
            else { g.appendChild(s("circle", { r:gap-2, fill: br > .03 ? `rgb(255,${Math.round(200+55*br)},${Math.round(120+100*br)})` : "#5a5a50", stroke:"#E9DCC0", "stroke-width":4 })); g.appendChild(s("path", { d:"M-12 6 q6 -18 12 0 q6 18 12 0", stroke: br > .03 ? "#B3262E" : "#2a2a24", "stroke-width":4, fill:"none" })); }
          } else if (c.t === "switch"){
            if (!symbols) g.appendChild(s("rect", { x:-gap-16, y:-50, width:gap*2+32, height:66, rx:10, fill:"#2A2420", stroke:"#D9A23A", "stroke-width":3 }));
            g.appendChild(s("circle", { cx:-gap, r:7, fill:"#E9DCC0" })); g.appendChild(s("circle", { cx:gap, r:7, fill:"#E9DCC0" }));
            g.appendChild(s("line", { x1:-gap, y1:0, x2: c.on ? gap : gap*.6, y2: c.on ? 0 : -gap*.9, stroke: c.on ? "#7FF3FF" : "#F0C25E", "stroke-width":7, "stroke-linecap":"round" }));
          }
          layer.appendChild(g);
        }
      });
      // current dots
      const segs = E.map(e => ({ e, I:cur[e.k] })).filter(o => Math.abs(o.I) > .05 && !short);
      const batOn = Ibat > .05 && !short;
      if (FC.motionOK() && (segs.length || batOn)){
        const t0 = performance.now();
        const ds = [];
        segs.forEach(o => { const [a, b] = o.e.k.split("|"); const from = o.I > 0 ? a : b, to = o.I > 0 ? b : a; const [x1,y1] = P_(...from.split(",").map(Number)), [x2,y2] = P_(...to.split(",").map(Number)); for (let q=0;q<2;q++){ const d = s("circle", { r:6, fill:"#7FF3FF" }); flow.appendChild(d); ds.push({ d, x1, y1, x2, y2, sp:Math.min(1.2, Math.abs(o.I)/2.5), off:q/2 }); } });
        if (batOn){ for (let q=0;q<2;q++){ const d = s("circle", { r:6, fill:"#7FF3FF" }); flow.appendChild(d); ds.push({ d, x1:bx, y1:by2, x2:bx, y2:by1, sp:Math.min(1.2, Ibat/2.5), off:q/2 }); } }
        (function an(t){ const k = (t - t0)/1000; ds.forEach(o => { const f = (k*o.sp + o.off) % 1; o.d.setAttribute("cx", o.x1 + (o.x2-o.x1)*f); o.d.setAttribute("cy", o.y1 + (o.y2-o.y1)*f); }); raf = requestAnimationFrame(an); })(t0);
      }
      // status text
      const nb = Object.values(comps).filter(c => c.t === "bulb").length;
      if (short){ status.textContent = "⚠️ SHORT CIRCUIT"; status.style.color = "#B3262E"; msg.innerHTML = FC.md("The current found a **shortcut** from + to − through wire only, skipping the bulbs. A huge current flows: the battery drains fast and wires get **hot**. Never do this with real batteries!"); }
      else if (!nb){ status.textContent = "No output yet"; status.style.color = "#8a6f5c"; msg.innerHTML = FC.md("Add a **bulb** (the output) and connect it to both ends of the battery with **wires**."); }
      else if (lit === 0){ status.textContent = "· OPEN ·"; status.style.color = "#B9772D"; msg.innerHTML = FC.md("No current flows: there's a **gap** or an **open switch**, so the circuit isn't a complete loop."); }
      else { status.textContent = `💡 ${lit} lit`; status.style.color = "#1F7A5A"; const ib = (Ibat).toFixed(1); msg.innerHTML = FC.md(`A **closed loop**! Current flows out of +, through the ${lit > 1 ? "bulbs" : "bulb"} and back to −.${nb > 1 ? " Compare the bulbs' brightness — what do you notice?" : ""} (Battery current ≈ ${ib} units)`); }
    }
    draw();
    return { destroy(){ cancelAnimationFrame(raf); } };
  };


  /* circuit symbols for cards */
  FC.art.circuitSymbol = function(kind){
    const v = svg(240, 140, {}); const st = { stroke:"#3b2418", "stroke-width":7, fill:"none", "stroke-linecap":"round" };
    const L = (x1,y1,x2,y2,o) => v.appendChild(s("line", Object.assign({ x1, y1, x2, y2 }, st, o||{})));
    if (kind === "cell"){ L(20,70,104,70); L(104,30,104,110); L(136,50,136,90,{ "stroke-width":16, "stroke-linecap":"butt" }); L(136,70,220,70);
      v.appendChild(lbl(84, 34, "+", "#B3262E", 34)); v.appendChild(lbl(160, 34, "−", "#2E9FB0", 34)); }
    else if (kind === "bulb"){ L(20,70,82,70); L(158,70,220,70); v.appendChild(s("circle", Object.assign({ cx:120, cy:70, r:38 }, st))); L(93,43,147,97); L(93,97,147,43); }
    else if (kind === "switch"){ L(20,70,80,70); L(160,70,220,70); v.appendChild(s("circle", { cx:84, cy:70, r:8, fill:"#3b2418" })); v.appendChild(s("circle", { cx:156, cy:70, r:8, fill:"#3b2418" })); L(84,70,150,30); }
    else if (kind === "led"){ L(20,70,92,70); L(148,70,220,70); v.appendChild(s("path", { d:"M92 38 L92 102 L144 70 Z", fill:"#3b2418" })); L(148,38,148,102); L(150,30,174,8,{ "stroke-width":5 }); L(166,40,190,18,{ "stroke-width":5 }); }
    else { L(20,70,220,70); }
    return v;
  };
  /* =======================================================
     THU · Switch X-ray
     ======================================================= */
  IX.switchxray = function(host){
    const KINDS = [
      { n:"Push button", d:"A spring holds the metal contacts apart. **Press** → they touch → circuit closed. **Release** → the spring opens it again.", draw:(g, on) => { g.appendChild(s("rect", { x:40, y:150, width:260, height:70, rx:10, fill:"#3a2a20" })); g.appendChild(s("rect", { x:60, y:200, width:70, height:12, fill:"#C46A3A" })); g.appendChild(s("rect", { x:210, y:200, width:70, height:12, fill:"#C46A3A" })); const y = on ? 186 : 140; g.appendChild(s("rect", { x:90, y, width:160, height:12, fill:"#E08A55" })); g.appendChild(s("path", { d:`M170 ${y} V${y-50}`, stroke:"#9da3a8", "stroke-width":10 })); g.appendChild(s("rect", { x:120, y:y-90, width:100, height:44, rx:14, fill:"#B3262E" })); g.appendChild(s("path", { d:`M150 ${y+12} q10 10 0 20 q-10 10 0 20 M190 ${y+12} q10 10 0 20 q-10 10 0 20`, stroke:"#c0c4c8", "stroke-width":4, fill:"none" })); } },
      { n:"Toggle (rocker)", d:"Flip it and it **stays** where you left it — on or off. Light switches in houses work like this.", draw:(g, on) => { g.appendChild(s("rect", { x:40, y:150, width:260, height:70, rx:10, fill:"#3a2a20" })); g.appendChild(s("rect", { x:60, y:200, width:70, height:12, fill:"#C46A3A" })); g.appendChild(s("rect", { x:210, y:200, width:70, height:12, fill:"#C46A3A" })); g.appendChild(s("line", { x1:95, y1:200, x2: on ? 245 : 225, y2: on ? 200 : 150, stroke:"#E08A55", "stroke-width":12, "stroke-linecap":"round" })); g.appendChild(s("circle", { cx:95, cy:200, r:10, fill:"#E9DCC0" })); g.appendChild(s("path", { d: on ? "M120 120 l100 -30 v40 l-100 30z" : "M120 90 l100 30 v40 l-100 -30z", fill:"#2E9FB0" })); } },
      { n:"Pressure plate", d:"Two foil-covered cards kept apart by a **sponge** with a hole. **Step on it** → the foils touch through the hole → circuit closed!", draw:(g, on) => { const dy = on ? 22 : 0; g.appendChild(s("rect", { x:40, y:200, width:260, height:14, fill:"#C9A97A" })); g.appendChild(s("rect", { x:40, y:192, width:260, height:8, fill:"#c0c4c8" })); g.appendChild(s("rect", { x:40, y:150, width:90, height:42, fill:"#E8C24A" })); g.appendChild(s("rect", { x:210, y:150, width:90, height:42, fill:"#E8C24A" })); g.appendChild(s("rect", { x:40, y:128 + dy, width:260, height:8, fill:"#c0c4c8" })); g.appendChild(s("rect", { x:40, y:114 + dy, width:260, height:14, fill:"#C9A97A" })); if (on) g.appendChild(s("path", { d:"M120 60 q50 -30 100 0 l-10 30 h-80z", fill:"#5a3825" })); } },
      { n:"Tilt switch", d:"A little **metal ball** inside a tube. Tilt it one way → the ball rolls onto two contacts and closes the circuit. Used in alarms!", draw:(g, on) => { const gg = s("g", { transform:`rotate(${on ? 18 : -18} 170 180)` }); gg.appendChild(s("rect", { x:60, y:150, width:220, height:60, rx:30, fill:"rgba(233,220,192,.25)", stroke:"#E9DCC0", "stroke-width":4 })); gg.appendChild(s("rect", { x:250, y:162, width:12, height:36, fill:"#C46A3A" })); gg.appendChild(s("rect", { x:268, y:162, width:12, height:36, fill:"#C46A3A" })); gg.appendChild(s("circle", { cx: on ? 236 : 96, cy:180, r:22, fill:"#c0c4c8" })); g.appendChild(gg); } }
    ];
    KINDS.forEach((K, i) => {
      let on = false;
      const card = h("div", { class:"pcard hov", style:{ position:"absolute", left:(i*440)+"px", top:"0", width:"410px", height:"690px", padding:"18px 20px", cursor:"pointer", display:"flex", flexDirection:"column", gap:"10px" } });
      const v = svg(340, 280, { style:"width:370px;height:300px;background:#1b2124;border-radius:12px" });
      const g = s("g"); v.appendChild(g);
      const state = h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"30px", letterSpacing:".1em" } });
      const d = h("div", { style:{ fontSize:"23px", lineHeight:"1.28" } }); d.innerHTML = FC.md(K.d);
      card.append(h("div", { style:{ fontFamily:"var(--f-display)", fontWeight:"900", fontSize:"36px", lineHeight:"1" } }, K.n), v, state, d, h("div", { style:{ marginTop:"auto", fontFamily:"var(--f-label)", fontWeight:"800", letterSpacing:".14em", fontSize:"17px", color:"#B3262E" } }, "TAP TO OPERATE"));
      const paint = () => { FC.clear(g); K.draw(g, on); g.appendChild(s("circle", { cx:300, cy:40, r:22, fill: on ? "#FF5A5F" : "#5a2a2a" })); if (on) g.appendChild(s("circle", { cx:300, cy:40, r:50, fill:"url(#g-lamp)" })); state.textContent = on ? "CLOSED · ON 💡" : "OPEN · OFF"; state.style.color = on ? "#1F7A5A" : "#8a6f5c"; };
      card.addEventListener("click", e => { e.stopPropagation(); on = !on; FC.sfx("tok"); paint(); });
      paint(); host.appendChild(card);
    });
    return {};
  };

  /* =======================================================
     THU · Temple trap simulator
     ======================================================= */
  IX.trapsim = function(host){
    const v = svg(1100, 690, { style:"position:absolute;left:0;top:0;width:1100px;height:690px;border-radius:16px" });
    v.innerHTML = `<defs><clipPath id="tr-c"><rect width="1100" height="690" rx="16"/></clipPath></defs>`;
    const g = s("g", { "clip-path":"url(#tr-c)" }); v.appendChild(g);
    g.appendChild(s("rect", { width:1100, height:690, fill:"#241b14" }));
    for (let r=0;r<6;r++) for (let c=0;c<8;c++) g.appendChild(s("rect", { x:c*150 - (r%2)*75, y:r*90, width:146, height:86, rx:6, fill:"#2f241b" }));
    g.appendChild(s("rect", { y:540, width:1100, height:150, fill:"#3a2d22" }));
    const plate = s("rect", { x:600, y:528, width:200, height:16, rx:3, fill:"#8a7a62", style:"transition:transform .25s" }); g.appendChild(plate);
    g.appendChild(lbl(700, 590, "PRESSURE PLATE", "#C9A97A", 24));
    const codex = s("g", { transform:"translate(900 420)" }); codex.appendChild(s("rect", { x:-60, y:20, width:120, height:100, fill:"#5a4330" })); codex.appendChild(s("rect", { x:-44, y:-6, width:88, height:30, fill:"#efe3c6" })); for (let i=0;i<5;i++) codex.appendChild(s("line", { x1:-44 + i*22, x2:-44 + i*22, y1:-6, y2:24, stroke:"#B3262E", "stroke-width":2 })); g.appendChild(codex);
    g.appendChild(lbl(900, 570, "THE CODEX", "#E9DCC0", 24));
    const led = s("circle", { cx:1030, cy:80, r:26, fill:"#5a2a2a" }), glow = s("circle", { cx:1030, cy:80, r:120, fill:"url(#g-lamp)", opacity:0 });
    g.append(glow, led);
    g.appendChild(s("path", { d:"M800 536 C 900 500, 980 300, 1030 106", stroke:"#C46A3A", "stroke-width":4, fill:"none", "stroke-dasharray":"8 6" }));
    const looter = s("g", { transform:"translate(80 0)" });
    looter.appendChild(s("circle", { cx:0, cy:360, r:30, fill:"#0b0808" }));
    looter.appendChild(s("path", { d:"M-40 345 h80 l-6 -10 h-68z", fill:"#0b0808" }));
    looter.appendChild(s("path", { d:"M-34 520 l10 -130 h48 l10 130z", fill:"#0b0808" }));
    looter.appendChild(s("path", { d:"M-24 520 l-6 20 M24 520 l6 20", stroke:"#0b0808", "stroke-width":14 }));
    g.appendChild(looter);
    const alarm = lbl(550, 160, "", "#FF5A5F", 110); g.appendChild(alarm);
    host.appendChild(v);
    const P = panel(600); host.appendChild(P);
    const msg = pmsg("A looter is sneaking toward the codex. Our **pressure-plate switch** is hidden under a floor tile, wired to an **LED and buzzer**. Will it catch them?");
    const ctr = h("div", { style:{ marginTop:"auto", display:"grid", gap:"12px" } });
    P.append(ptitle("The temple trap"), msg, h("div", { style:{ fontSize:"22px", lineHeight:"1.35", padding:"12px 16px", background:"rgba(179,38,46,.08)", borderRadius:"10px" } }, "INPUT: weight on the plate → PROCESS: foils touch, circuit closes → OUTPUT: light + buzzer."), ctr);
    let busy = false, t;
    const walk = btn("👣 Looter sneaks in", async () => {
      if (busy) return; busy = true;
      const steps = 14;
      for (let i=1;i<=steps;i++){ looter.setAttribute("transform", `translate(${80 + i*45} ${i%2 ? -6 : 0})`); await FC.wait(140); }
      plate.style.transform = "translateY(8px)";
      led.setAttribute("fill", "#FF5A5F"); glow.setAttribute("opacity", 1); alarm.textContent = "ALARM!";
      msg.innerHTML = FC.md("**Caught!** The looter's weight squashed the sponge, the two foil layers **touched**, the circuit **closed** — and the LED and buzzer switched on. 🎉");
      let k = 0; t = setInterval(() => { k++; led.setAttribute("fill", k%2 ? "#5a2a2a" : "#FF5A5F"); FC.sfx("zap"); if (k > 7) clearInterval(t); }, 260);
    }, "on");
    ctr.append(walk, darkB(btn("Reset the trap", () => { clearInterval(t); busy = false; looter.setAttribute("transform", "translate(80 0)"); plate.style.transform = ""; led.setAttribute("fill", "#5a2a2a"); glow.setAttribute("opacity", 0); alarm.textContent = ""; msg.innerHTML = FC.md("Trap reset. What could make this alarm **better**?"); }, "dark")));
    return { destroy(){ clearInterval(t); } };
  };

  /* =======================================================
     Generic build stepper (cfg.steps = [{t, d, art}])
     ======================================================= */
  FC.art.trapStep = function(n){
    const v = svg(900, 640); const g = s("g", { filter:"url(#fx-paper)" }); v.appendChild(g);
    const card = (x, y, foil) => { g.appendChild(s("rect", { x, y, width:300, height:200, rx:6, fill:"#C9A97A" })); if (foil) g.appendChild(s("rect", { x:x+20, y:y+20, width:260, height:160, fill:"#c0c4c8" })); };
    if (n === 0){ card(80, 80, false); card(480, 80, false); g.appendChild(s("rect", { x:140, y:360, width:260, height:180, fill:"#E8C24A" })); g.appendChild(s("circle", { cx:270, cy:450, r:50, fill:"#14110F", opacity:.4 })); g.appendChild(s("rect", { x:520, y:380, width:200, height:60, rx:6, fill:"#c0c4c8" })); v.appendChild(lbl(270, 580, "SPONGE (WITH A HOLE)", "#E9DCC0", 26)); v.appendChild(lbl(620, 470, "FOIL", "#E9DCC0", 26)); }
    else if (n === 1){ card(80, 160, true); card(480, 160, true); v.appendChild(lbl(450, 450, "GLUE FOIL ON ONE SIDE OF EACH CARD", "#E9DCC0", 30)); }
    else if (n === 2){ card(300, 380, true); g.appendChild(s("rect", { x:320, y:300, width:260, height:80, fill:"#E8C24A" })); g.appendChild(s("ellipse", { cx:450, cy:340, rx:60, ry:30, fill:"#14110F", opacity:.5 })); g.appendChild(s("rect", { x:300, y:220, width:300, height:80, fill:"#C9A97A" })); g.appendChild(s("rect", { x:320, y:290, width:260, height:10, fill:"#c0c4c8" })); v.appendChild(lbl(450, 640 - 40, "FOIL FACES FOIL · SPONGE KEEPS THEM APART", "#E9DCC0", 28)); }
    else if (n === 3){ g.appendChild(s("rect", { x:100, y:300, width:300, height:120, rx:6, fill:"#C9A97A" })); g.appendChild(s("path", { d:"M400 330 C 520 300, 560 200, 640 200", stroke:"#C46A3A", "stroke-width":8, fill:"none" })); g.appendChild(s("path", { d:"M400 390 C 520 420, 600 460, 700 440", stroke:"#2E9FB0", "stroke-width":8, fill:"none" })); g.appendChild(s("circle", { cx:690, cy:200, r:40, fill:"#B3262E" })); g.appendChild(s("rect", { x:700, y:400, width:100, height:80, rx:10, fill:"#2A2420", stroke:"#D9A23A", "stroke-width":4 })); g.appendChild(s("path", { d:"M690 240 C 760 300, 800 340, 760 400", stroke:"#C46A3A", "stroke-width":8, fill:"none" })); v.appendChild(lbl(690, 140, "LED / BUZZER", "#E9DCC0", 26)); v.appendChild(lbl(750, 520, "BATTERY", "#E9DCC0", 26)); v.appendChild(lbl(250, 470, "PLATE (SWITCH)", "#E9DCC0", 26)); }
    else { g.appendChild(s("rect", { x:200, y:380, width:500, height:60, rx:6, fill:"#8a7a62" })); g.appendChild(s("path", { d:"M380 300 q70 -40 140 0 l-14 40 h-112z", fill:"#5a3825" })); g.appendChild(s("circle", { cx:450, cy:150, r:110, fill:"url(#g-lamp)" })); g.appendChild(s("circle", { cx:450, cy:150, r:36, fill:"#FF5A5F" })); v.appendChild(lbl(450, 520, "STEP → BEEP! TEST IT 10 TIMES", "#E9DCC0", 32)); }
    return v;
  };
  IX.stepper = function(host, cfg){
    const STEPS = cfg.steps || [];
    const v = h("div", { style:{ position:"absolute", left:"0", top:"0", width:"900px", height:"690px", borderRadius:"16px", background:"rgba(0,0,0,.3)", display:"grid", placeItems:"center" } });
    host.appendChild(v);
    const P = panel(820); host.appendChild(P);
    const num = h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"30px", letterSpacing:".14em", color:"#C46A3A" } });
    const tt = h("div", { style:{ fontFamily:"var(--f-display)", fontWeight:"900", fontSize:"60px", lineHeight:"1" } });
    const dd = pmsg("");
    const extra = h("div", { style:{ fontSize:"23px", padding:"12px 16px", background:"rgba(179,38,46,.1)", borderLeft:"6px solid #B3262E", borderRadius:"0 8px 8px 0", display: cfg.safety ? "block" : "none" } }, cfg.safety || "");
    const ctr = h("div", { style:{ marginTop:"auto", display:"flex", gap:"12px" } });
    P.append(num, tt, dd, extra, ctr);
    let i = 0;
    function go(n){ i = FC.clamp(n, 0, STEPS.length-1); num.textContent = `STEP ${i+1} OF ${STEPS.length}`; tt.textContent = STEPS[i].t; dd.innerHTML = FC.md(STEPS[i].d); FC.clear(v); const a = FC.art[STEPS[i].art](STEPS[i].n); a.setAttribute("style", "width:860px;height:620px"); v.appendChild(a); a.animate([{ opacity:0, transform:"translateY(20px)" }, { opacity:1, transform:"none" }], { duration:500 }); }
    ctr.append(darkB(btn("◂ Back", () => go(i-1), "dark")), btn("Next step ▸", () => { go(i+1); FC.sfx("paper"); }, "on"));
    go(0);
    return {};
  };

  /* =======================================================
     FRI · Number-art pattern repeater
     ======================================================= */
  IX.numberart = function(host){
    let n = 8, mode = "block", pal = 0;
    const PALS = [["#B3262E","#efe3c6"],["#1F7A5A","#efe3c6"],["#2E9FB0","#14110F"],["#D9A23A","#3b2418"]];
    const v = svg(1100, 690, { style:"position:absolute;left:0;top:0;width:1100px;height:690px;border-radius:14px;box-shadow:var(--sh-3)" });
    host.appendChild(v);
    const P = panel(600); host.appendChild(P);
    const msg = pmsg("");
    const row1 = h("div", { style:{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px" } });
    const row2 = h("div", { style:{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px" } });
    const MODES = [["block","Block repeat"],["mirror","Mirror"],["halfdrop","Half-drop"],["rotate","Rotate"]];
    const mbs = MODES.map(([k, l]) => { const b = btn(l, () => { mode = k; mbs.forEach(x => x.classList.toggle("on", x === b)); draw(); }, ""); b.style.fontSize = "20px"; b.style.minHeight = "54px"; row2.appendChild(b); return b; });
    mbs[0].classList.add("on");
    const nb = (l, d) => { const b = darkB(btn(l, () => { n = (n + d + 20) % 20; draw(); }, "dark")); b.style.fontSize = "20px"; b.style.minHeight = "54px"; return b; };
    row1.append(nb("− number", -1), nb("+ number", 1));
    const cb = btn("🎨 Colours", () => { pal = (pal+1) % PALS.length; draw(); }, ""); cb.style.fontSize = "20px";
    P.append(ptitle("Number pattern studio"), msg, h("div", { style:{ marginTop:"auto" } }), row1, row2, cb);
    function tile(x, y, w, hh, flipX, flipY, rot){
      const [fg, bg] = PALS[pal];
      const g = s("g", { transform:`translate(${x + w/2} ${y + hh/2}) rotate(${rot||0}) scale(${flipX ? -1 : 1} ${flipY ? -1 : 1}) translate(${-w/2} ${-hh/2})` });
      g.appendChild(s("rect", { width:w-6, height:hh-6, x:3, y:3, rx:12, fill:bg, stroke:fg, "stroke-width":4 }));
      const m = FC.maya(n, { color:fg }); m.setAttribute("x", w*.18); m.setAttribute("y", hh*.12); m.setAttribute("width", w*.64); m.setAttribute("height", hh*.64); g.appendChild(m);
      g.appendChild(s("path", { d:`M${w*.12} ${hh*.86} h${w*.2} l${w*.05} -${hh*.06} l${w*.05} ${hh*.06} h${w*.36}`, stroke:fg, "stroke-width":4, fill:"none" }));
      return g;
    }
    function draw(){
      FC.clear(v);
      const [fg, bg] = PALS[pal];
      v.appendChild(s("rect", { width:1100, height:690, fill: bg === "#14110F" ? "#2A2420" : "#E9DCC0" }));
      v.appendChild(s("rect", { x:0, y:0, width:1100, height:24, fill:"url(#p-fret)" })); v.appendChild(s("rect", { x:0, y:666, width:1100, height:24, fill:"url(#p-fret)" }));
      const cols = 8, rows = 5, w = 1100/cols, hh = (690-48)/rows;
      for (let r=0;r<rows;r++) for (let c=0;c<cols;c++){
        let x = c*w, y = 24 + r*hh, fx = false, fy = false, rot = 0;
        if (mode === "mirror"){ fx = c%2 === 1; fy = r%2 === 1; }
        if (mode === "halfdrop"){ y += (c%2) * hh/2; }
        if (mode === "rotate"){ rot = ((r + c) % 4) * 90; }
        if (mode === "halfdrop" && c%2 && r === rows-1) continue;
        v.appendChild(tile(x, y, w, hh, fx, fy, rot));
      }
      const name = { block:"block repeat", mirror:"mirror (reflection) symmetry", halfdrop:"half-drop repeat", rotate:"rotation" }[mode];
      msg.innerHTML = FC.md(`Motif: the Maya numeral **${n}**. Pattern: **${name}**. Maya and Aztec artists used **repetition**, **rhythm** and **symmetry** in borders, textiles and buildings. Which pattern feels calm? Which feels lively?`);
      void fg;
    }
    draw();
    return {};
  };

  /* =======================================================
     FRI · Symmetry mirror canvas
     ======================================================= */
  IX.mirror = function(host){
    const W = 1100, H = 690;
    const cv = stop(h("canvas", { width:W*2, height:H*2, style:{ position:"absolute", left:"0", top:"0", width:W+"px", height:H+"px", borderRadius:"14px", background:"#efe3c6", boxShadow:"var(--sh-3)", cursor:"crosshair", touchAction:"none" } }));
    host.appendChild(cv);
    const ctx = cv.getContext("2d"); ctx.scale(2, 2); ctx.lineCap = "round"; ctx.lineJoin = "round";
    let ways = 2, col = "#3b2418", drawing = false, last = null;
    function guides(){ ctx.save(); ctx.strokeStyle = "rgba(179,38,46,.35)"; ctx.setLineDash([12, 10]); ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(W/2, 0); ctx.lineTo(W/2, H); if (ways === 4){ ctx.moveTo(0, H/2); ctx.lineTo(W, H/2); } ctx.stroke(); ctx.restore(); }
    function clear(){ ctx.clearRect(0, 0, W, H); guides(); }
    function seg(a, b){
      ctx.strokeStyle = col; ctx.lineWidth = 10;
      const pts = [[a, b]];
      const mx = p => [W - p[0], p[1]], my = p => [p[0], H - p[1]];
      pts.push([mx(a), mx(b)]);
      if (ways === 4){ pts.push([my(a), my(b)]); pts.push([my(mx(a)), my(mx(b))]); }
      pts.forEach(([p, q]) => { ctx.beginPath(); ctx.moveTo(...p); ctx.lineTo(...q); ctx.stroke(); });
    }
    cv.addEventListener("pointerdown", e => { drawing = true; cv.setPointerCapture(e.pointerId); last = FC.toLocal(cv, e); });
    cv.addEventListener("pointermove", e => { if (!drawing) return; const p = FC.toLocal(cv, e); seg(last, p); last = p; });
    cv.addEventListener("pointerup", () => { drawing = false; });
    const P = panel(600); host.appendChild(P);
    const msg = pmsg("Draw on **one side** with the mouse — the other side copies you like a mirror. This is **reflective (line) symmetry**.");
    const g2 = h("div", { style:{ marginTop:"auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px" } });
    const wb = btn("2-way", () => { ways = 2; wb.classList.add("on"); w4.classList.remove("on"); clear(); msg.innerHTML = FC.md("**2-way symmetry**: one mirror line, like a butterfly — or a Maya face mask."); }, "on");
    const w4 = btn("4-way", () => { ways = 4; w4.classList.add("on"); wb.classList.remove("on"); clear(); msg.innerHTML = FC.md("**4-way symmetry**: two mirror lines — like the K'in (sun) glyph's four petals."); }, "");
    g2.append(wb, w4);
    ["#3b2418","#B3262E","#2E9FB0","#1F7A5A"].forEach(c => { const b = h("button", { class:"ixbtn", style:{ background:c, minHeight:"54px" }, onclick:(e) => { e.stopPropagation(); col = c; } }, ""); g2.appendChild(b); });
    const cl = darkB(btn("Clear", () => clear(), "dark")); cl.style.gridColumn = "1 / -1"; g2.appendChild(cl);
    P.append(ptitle("Mirror canvas"), msg, g2);
    clear();
    return {};
  };

  /* ---------- Folio III painting: the scribe ---------- */
  A.scribeFolio = function(){
    const v = svg(800, 1000);
    v.appendChild(s("rect", { width:800, height:1000, fill:"#efe3c6" }));
    v.appendChild(s("rect", { width:800, height:1000, filter:"url(#fx-grain)", fill:"#fff" }));
    v.appendChild(s("rect", { x:30, y:30, width:740, height:940, fill:"none", stroke:"#B3262E", "stroke-width":10 }));
    v.appendChild(s("rect", { x:50, y:50, width:700, height:900, fill:"none", stroke:"#B3262E", "stroke-width":3 }));
    const g = s("g", { filter:"url(#fx-rough)" });
    // seated scribe in profile (simplified)
    g.appendChild(s("path", { d:"M260 820 Q240 640 330 560 Q420 520 470 600 Q500 700 480 820Z", fill:"#2E9FB0" }));
    g.appendChild(s("circle", { cx:390, cy:470, r:70, fill:"#C46A3A" }));
    g.appendChild(s("path", { d:"M320 430 Q380 360 470 400 Q440 420 400 418 Q350 420 320 450Z", fill:"#1F7A5A" }));
    for (let i=0;i<4;i++) g.appendChild(s("path", { d:`M${350 + i*28} 400 q${10 + i*6} -70 ${40 + i*10} -110`, stroke:"#1F7A5A", "stroke-width":8, fill:"none" }));
    g.appendChild(s("path", { d:"M470 640 L600 560", stroke:"#5a3825", "stroke-width":10 }));
    g.appendChild(s("path", { d:"M600 560 l20 -14", stroke:"#14110F", "stroke-width":8 }));
    g.appendChild(s("path", { d:"M560 760 q40 -30 80 0 l-8 40 h-64z", fill:"#b86a3e" }));
    g.appendChild(s("rect", { x:520, y:620, width:160, height:110, fill:"#fff8e8", stroke:"#3b2418", "stroke-width":4 }));
    for (let i=0;i<3;i++) g.appendChild(s("circle", { cx:560 + i*30, cy:670, r:8, fill:"#B3262E" }));
    v.appendChild(g);
    // name glyph cartouche top-right: prefix + K'in
    const c = s("g"); c.appendChild(s("rect", { x:500, y:100, width:200, height:200, rx:40, fill:"none", stroke:"#3b2418", "stroke-width":7 }));
    A.GLYPHS.kin.steps.slice(2).forEach(st => c.appendChild(s("path", { d:st.d, fill:"none", stroke:"#B3262E", "stroke-width":14, transform:"translate(520 105) scale(.45)" })));
    c.appendChild(s("circle", { cx:530, cy:140, r:12, fill:"#3b2418" })); c.appendChild(s("circle", { cx:530, cy:180, r:12, fill:"#3b2418" }));
    v.appendChild(c);
    // number column left
    [7, 13, 4].forEach((n, i) => { const m = FC.maya(n, { color:"#B3262E" }); m.setAttribute("x", 90); m.setAttribute("y", 110 + i*170); m.setAttribute("width", 130); m.setAttribute("height", 140); v.appendChild(m); v.appendChild(s("rect", { x:80, y:100 + i*170, width:150, height:160, rx:28, fill:"none", stroke:"#3b2418", "stroke-width":5 })); });
    return v;
  };
})(window.FC);
