/* ==========================================================
   INTERACTIVES — Week 6 · Rebuilding the Walls
   wall52 · gateplanner · relsort · blocksim · gardengrid
   ========================================================== */
(function(BM){
  "use strict";
  const h = BM.h, s = BM.s, svg = BM.svg, A = BM.art, IX = BM.IX;
  const { btn, controls, panel, setMD } = IX._h;

  /* =======================================================
     8. THE WALL OF 52 DAYS — every team adds a section (Mon W6)
     ======================================================= */
  IX.wall52 = function(host){
    const Q = [
      ["Who let the exiles go home?","Cyrus (Ezra 1)."],
      ["What does a qanat use to move water?","Gravity, along a gentle slope."],
      ["Name a producer.","Any plant: grass, shrubs, trees."],
      ["What were cylinder seals for?","Signing documents in clay."],
      ["How many stations on the Royal Road?","111."],
      ["What is a satrap?","A governor of a province."],
      ["Who wrote about Thermopylae?","Herodotus, a Greek."],
      ["What is an insulator?","A material that slows heat flow."],
      ["What is a tell?","A hill made of towns built on top of each other."],
      ["What force holds an arch together?","Compression."],
      ["Which queen said, “If I perish, I perish”?","Esther."],
      ["What does a windcatcher do?","Catches breezes to cool a building."]
    ];
    const FAM = ["Sheep Gate","Fish Gate","Old Gate","Valley Gate","Dung Gate","Fountain","Water Gate","Horse Gate","East Gate","Inspection","Hundred Tower","Broad Wall"];
    const W = 1100, H = 680;
    const v = svg(W, H, { style:"position:absolute;left:0;top:-10px;width:1100px;height:680px;border-radius:12px;box-shadow:var(--sh-3);background:linear-gradient(#f2d9a8,#e2bf86)" });
    host.appendChild(v);
    v.appendChild(s("path", { d:"M0 560 Q550 520 1100 560 V680 H0Z", fill:"#c9a46a" }));
    const secW = 88, base = 540, x0 = 22;
    const secs = Q.map((q, i) => { const g = s("g", { style:"cursor:pointer" }); const x = x0 + i*secW;
      g.appendChild(s("rect", { x, y:base - 40, width:secW - 4, height:40, fill:"#b59a74", opacity:.5 }));
      const bricks = s("g"); g.appendChild(bricks);
      g.appendChild(s("text", { x:x + secW/2 - 2, y:base + 30, "text-anchor":"middle", "font-family":"Atkinson Hyperlegible", "font-size":12, "font-weight":700, fill:"#2B1B10" }, FAM[i]));
      g.addEventListener("click", e => { e.stopPropagation(); build(i); });
      v.appendChild(g); return { g, bricks, x, done:false }; });
    const mockers = s("g", { opacity:0, style:"transition:opacity 1s" }); v.appendChild(mockers);
    [120, 470, 860].forEach(x => { mockers.appendChild(s("ellipse", { cx:x, cy:220, rx:60, ry:90, fill:"#1d1420", opacity:.55 })); mockers.appendChild(s("circle", { cx:x, cy:120, r:34, fill:"#1d1420", opacity:.55 })); });
    const mockText = s("text", { x:550, y:80, "text-anchor":"middle", "font-family":"Fraunces, serif", "font-style":"italic", "font-size":30, fill:"#3a1d2a", opacity:0, style:"transition:opacity 1s" }, "“What are those feeble Jews doing?” (Neh 4:2)"); v.appendChild(mockText);
    const day = h("div", { style:{ position:"absolute", left:"1130px", right:"0", top:"-10px", fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"40px", color:"#F6D27A" } });
    const info = panel({ left:"1130px", right:"0", top:"60px" }, [h("h4"), h("p")]);
    host.append(day, info);
    function bricksFor(sec){ BM.clear(sec.bricks); for (let r=0;r<8;r++) for (let c=0;c<3;c++){ sec.bricks.appendChild(s("rect", { x:sec.x + c*28 + (r%2 ? 14 : 0) - (r%2 && c === 2 ? 14 : 0), y:base - 40 - (r+1)*34, width:(r%2 && c === 2) ? 12 : 26, height:32, fill: r % 2 ? "#c9a06a" : "#b98a58", stroke:"#6b4f33", "stroke-width":2 })); } }
    function count(){ const n = secs.filter(x => x.done).length; day.textContent = n === secs.length ? "Day 52 · the wall is finished!" : `Sections built: ${n} / ${secs.length}`; mockers.setAttribute("opacity", n >= 4 && n < 12 ? 1 : 0); mockText.setAttribute("opacity", n >= 4 && n < 12 ? 1 : 0); }
    function build(i){ const sec = secs[i]; sec.done = true; bricksFor(sec); info.querySelector("h4").textContent = `${FAM[i]} · ${Q[i][0]}`; setMD(info.querySelector("p"), "**Answer:** " + Q[i][1] + (i === 11 ? "\n\n**Nehemiah 6:15:** the wall was finished in **52 days**." : "")); count(); BM.sfx("stone"); }
    function step(n){ secs.forEach((sec, i) => { if (i < n){ if (!sec.done) build(i); } else { sec.done = false; BM.clear(sec.bricks); } }); if (!n){ info.querySelector("h4").textContent = "Rebuild the wall together"; setMD(info.querySelector("p"), "Each section is named after a gate or tower from **Nehemiah 3**. Tap a section, answer its review question as a team, and the bricks go up."); } count(); }
    step(0);
    return { steps:Q.length, step };
  };

  /* =======================================================
     16. CITY GATE PLANNER — why walls, where gates (Tue W6)
     ======================================================= */
  IX.gateplanner = function(host){
    const W = 1100, H = 680;
    const v = svg(W, H, { style:"position:absolute;left:0;top:-10px;width:1100px;height:680px;border-radius:12px;box-shadow:var(--sh-3);background:#e9d6b0" });
    host.appendChild(v);
    // valley + spring + road + fields
    v.appendChild(s("path", { d:"M930 0 Q900 340 960 680", stroke:"#a7c7a0", "stroke-width":80, fill:"none", opacity:.6 }));
    v.appendChild(s("text", { x:960, y:40, "font-family":"Atkinson Hyperlegible", "font-weight":700, "font-size":20, fill:"#2B1B10" }, "valley"));
    v.appendChild(s("circle", { cx:880, cy:420, r:26, fill:"#2b8fb3" })); v.appendChild(s("text", { x:880, y:470, "text-anchor":"middle", "font-family":"Atkinson Hyperlegible", "font-weight":700, "font-size":20, fill:"#123a5c" }, "spring"));
    v.appendChild(s("path", { d:"M0 340 H200", stroke:"#a07a4a", "stroke-width":24, "stroke-dasharray":"30 10" })); v.appendChild(s("text", { x:20, y:320, "font-family":"Atkinson Hyperlegible", "font-weight":700, "font-size":20, fill:"#2B1B10" }, "road to the coast"));
    v.appendChild(s("path", { d:"M550 0 V100", stroke:"#a07a4a", "stroke-width":24, "stroke-dasharray":"30 10" })); v.appendChild(s("text", { x:570, y:40, "font-family":"Atkinson Hyperlegible", "font-weight":700, "font-size":20, fill:"#2B1B10" }, "road north (sheep & traders)"));
    v.appendChild(s("path", { d:"M550 680 V600", stroke:"#a07a4a", "stroke-width":24, "stroke-dasharray":"30 10" })); v.appendChild(s("text", { x:570, y:665, "font-family":"Atkinson Hyperlegible", "font-weight":700, "font-size":20, fill:"#2B1B10" }, "rubbish valley"));
    const wall = s("path", { d:"M200 120 H820 V580 H200Z", fill:"#d8c39a", stroke:"#8a6a42", "stroke-width":26, "stroke-linejoin":"round" }); v.appendChild(wall);
    const town = s("g"); v.appendChild(town);
    for (let i=0;i<24;i++){ const x = 250 + (i%6)*90, y = 170 + Math.floor(i/6)*95; town.appendChild(s("rect", { x, y, width:56, height:44, fill:"#c9a06a", stroke:"#8a6a42", "stroke-width":2 })); }
    v.appendChild(s("text", { x:510, y:370, "text-anchor":"middle", "font-family":"Cinzel, serif", "font-weight":800, "font-size":36, fill:"#5a3a1c", opacity:.65 }, "JERUSALEM"));
    const SPOTS = [
      { x:820, y:420, gate:"Water Gate", good:"Near the **spring**: people carry water in." },
      { x:550, y:120, gate:"Sheep Gate", good:"On the **road north**: shepherds bring sheep to market." },
      { x:200, y:340, gate:"Valley / road gate", good:"Where the **road to the coast** arrives: traders come in." },
      { x:550, y:580, gate:"Dung Gate", good:"Faces the **rubbish valley**: waste goes out, away from homes." },
      { x:200, y:500, gate:"(no road here)", good:"", bad:"No road, no water, no reason to come: a gate here is just a **weak spot** for attackers." }
    ];
    const marks = SPOTS.map(sp => { const g = s("g", { style:"cursor:pointer" }); const c = s("circle", { cx:sp.x, cy:sp.y, r:22, fill:"#FBF3E0", stroke:"#8a6a42", "stroke-width":4, "stroke-dasharray":"6 5" }); g.appendChild(c); const t = s("text", { x:sp.x, y:sp.y + 8, "text-anchor":"middle", "font-size":24 }, "?"); g.appendChild(t);
      g.addEventListener("click", e => { e.stopPropagation(); place(sp, c, t); }); v.appendChild(g); sp.c = c; sp.t = t; return g; });
    const info = panel({ left:"1130px", right:"0", top:"-10px" }, [h("h4"), h("p")]);
    host.appendChild(info);
    function place(sp, c, t){ c.setAttribute("fill", sp.bad ? "#E0566F" : "#3FBF86"); c.setAttribute("stroke-dasharray", "none"); t.textContent = sp.bad ? "✗" : "🚪"; info.querySelector("h4").textContent = sp.bad ? "Not a good spot" : sp.gate; setMD(info.querySelector("p"), sp.bad || sp.good); BM.sfx(sp.bad ? "no" : "ok"); }
    const T = [
      ["Why build walls?","Ancient cities built walls for **defence** (keeping enemies out), **safety at night**, and **control**: everyone came in and out through the gates, where guards and taxes were."],
      ["Where should the gates go?","A gate is a weak spot, so you don't want too many. Put each one **where people need it**: water, roads, markets, rubbish. Tap a **?** to place a gate."]
    ];
    function reset(){ SPOTS.forEach(sp => { sp.c.setAttribute("fill", "#FBF3E0"); sp.c.setAttribute("stroke-dasharray", "6 5"); sp.t.textContent = "?"; }); }
    function step(i){ if (i <= 1){ reset(); info.querySelector("h4").textContent = T[i][0]; setMD(info.querySelector("p"), T[i][1]); } else { reset(); for (let k=0;k<i-1 && k<SPOTS.length;k++) place(SPOTS[k], SPOTS[k].c, SPOTS[k].t); } marks.forEach(m => m.setAttribute("opacity", i >= 1 ? 1 : 0)); }
    step(0);
    host.appendChild(h("div", { class:"ix-chip", style:{ position:"absolute", left:"14px", top:"620px", background:"rgba(0,0,0,.45)" } }, "Simplified plan, not a real map of Jerusalem"));
    return { steps:6, step };
  };

  /* =======================================================
     25. RELATIONSHIP SORTER — win–win, win–lose, lose–lose (Wed W6)
     ======================================================= */
  IX.relsort = function(host){
    return IX._sorter(host, {
      bins:[ { id:"m", t:"MUTUALISM", d:"both win 😀😀", c:"#0B7A55" }, { id:"p", t:"PARASITISM", d:"one wins, one loses 😀😟", c:"#B0213B" }, { id:"c", t:"COMPETITION", d:"both lose a little 😟😟", c:"#8A5A0A" } ],
      cards:[
        { t:"Bees & pomegranate flowers", icon:"🐝", bin:"m", why:"Bees get **nectar**; the flowers get **pollinated** and make fruit. Both win: **mutualism**." },
        { t:"Ticks on a camel", icon:"🐫", bin:"p", why:"The tick drinks the camel's **blood**; the camel is harmed. **Parasitism**." },
        { t:"Leopard & wolf, same goats", icon:"🐺", bin:"c", why:"Both hunt the same **prey**, so each gets less. **Competition**." },
        { t:"Two trees, one water channel", icon:"🌳", bin:"c", why:"Both need the same **water** and **light**. **Competition**." },
        { t:"Tapeworm in a dog", icon:"🐕", bin:"p", why:"The worm takes **food** from inside the dog; the dog is harmed. **Parasitism**." },
        { t:"Oxpecker bird & buffalo", icon:"🐦", bin:"m", why:"The bird eats **ticks** off the buffalo; the buffalo gets cleaned. **Mutualism**." }
      ],
      tip:"Hold up each card. Class votes: mutualism, parasitism or competition? Then drag it.",
      done:"Mutualism: both win · Parasitism: one wins, one loses · Competition: both lose a little.",
      binH:300, cardW:270, cardH:240, scale:.5
    });
  };

  /* =======================================================
     35. BLOCK SIM — move the courier station to station (Thu W6)
     ======================================================= */
  IX.blocksim = function(host){
    const COLS = 7, ROWS = 4, CS = 130, ox = 20, oy = 30;
    const ROCK = { "2,1":1, "2,2":1, "4,2":1, "4,3":1, "5,1":1 };
    const START = [0,3], GOAL = [6,0];
    const v = svg(COLS*CS + 40, ROWS*CS + 60, { style:`position:absolute;left:0;top:-10px;width:${COLS*CS + 40}px;height:${ROWS*CS + 60}px;border-radius:12px;box-shadow:var(--sh-3);background:#e9d6b0` });
    host.appendChild(v);
    for (let r=0;r<ROWS;r++) for (let c=0;c<COLS;c++){ const x = ox + c*CS, y = oy + r*CS; v.appendChild(s("rect", { x:x + 3, y:y + 3, width:CS - 6, height:CS - 6, rx:10, fill: ROCK[`${c},${r}`] ? "#9a7b5c" : "#f4e6c6", stroke:"#c9b48a", "stroke-width":2 })); if (ROCK[`${c},${r}`]) v.appendChild(s("text", { x:x + CS/2, y:y + CS/2 + 20, "text-anchor":"middle", "font-size":54 }, "⛰️")); }
    const lab = (c, r, t) => v.appendChild(s("text", { x:ox + c*CS + CS/2, y:oy + r*CS + CS/2 + 22, "text-anchor":"middle", "font-size":56 }, t));
    lab(START[0], START[1], "🏁"); lab(GOAL[0], GOAL[1], "🏛️");
    const courier = s("text", { "text-anchor":"middle", "font-size":64, style:"transition:transform .45s" }, "🏇"); v.appendChild(courier);
    const put = (c, r) => courier.setAttribute("transform", `translate(${ox + c*CS + CS/2} ${oy + r*CS + CS/2 + 24})`);
    let prog = [], pos = START.slice(), running = false;
    const listEl = h("div", { style:{ position:"absolute", left:"980px", right:"0", top:"180px", display:"flex", flexWrap:"wrap", gap:"8px", alignContent:"flex-start", minHeight:"120px", padding:"12px", borderRadius:"14px", background:"rgba(0,0,0,.25)" } });
    const status = h("div", { class:"pcard ix-tip", style:{ left:"980px", right:"0", top:"470px", minHeight:"60px" } }, "Build a program: tap the arrows to add steps, then Run.");
    const ARW = { U:"⬆️", D:"⬇️", L:"⬅️", R:"➡️" };
    const pal = h("div", { style:{ position:"absolute", left:"980px", right:"0", top:"-10px", display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"8px" } }, Object.keys(ARW).map(k => btn(ARW[k], () => { if (running) return; prog.push(k); paint(); })));
    const tools = h("div", { style:{ position:"absolute", left:"980px", right:"0", top:"80px", display:"flex", gap:"8px", flexWrap:"wrap" } }, btn("▶ Run", () => run(), "on"), btn("↶ Undo", () => { if (!running){ prog.pop(); paint(); } }), btn("Clear", () => { if (!running){ prog = []; paint(); put(...START); pos = START.slice(); } }));
    host.append(pal, tools, listEl, status);
    function paint(hi){ BM.clear(listEl); prog.forEach((k, i) => listEl.appendChild(h("span", { class:"ix-chip", style:{ fontSize:"30px", padding:"4px 10px", background: i === hi ? "#F6D27A" : "#FBF3E0", color:"#2B1B10" } }, ARW[k]))); if (!prog.length) listEl.appendChild(h("span", { style:{ color:"#FBF3E0", opacity:".7", fontSize:"20px" } }, "(empty program)")); }
    function run(){ if (running) return; running = true; pos = START.slice(); put(...pos); let i = 0;
      const tick = () => { if (i >= prog.length){ running = false; const win = pos[0] === GOAL[0] && pos[1] === GOAL[1]; setMD(status, win ? "✓ **The message reached the palace!** Every step was exact." : "The courier stopped, but **not at the palace**. Debug: which step is missing or wrong?"); BM.sfx(win ? "ok" : "no"); paint(); return; }
        const k = prog[i], d = { U:[0,-1], D:[0,1], L:[-1,0], R:[1,0] }[k], n = [pos[0] + d[0], pos[1] + d[1]];
        paint(i);
        if (n[0] < 0 || n[0] >= COLS || n[1] < 0 || n[1] >= ROWS || ROCK[n.join()]){ running = false; setMD(status, `🐞 **Bug at step ${i + 1}!** The courier can't go ${ARW[k]} there (mountain or edge). Fix that step.`); BM.sfx("no"); return; }
        pos = n; put(...pos); BM.sfx("tok"); i++; setTimeout(tick, BM.motionOK() ? 520 : 0); };
      tick(); }
    const GOOD = "UUURRRRRR".split(""), BUGGY = "UURRRRRR".split("");
    const T = [
      () => { prog = []; setMD(status, "An **algorithm** is a precise list of steps. Build one to get the courier from 🏁 to the palace 🏛️, avoiding the mountains."); },
      () => { prog = GOOD.slice(); setMD(status, "Here's one algorithm. Read it with the class: does every step make sense? Press **Run**."); },
      () => { prog = BUGGY.slice(); setMD(status, "Here's a friend's algorithm. **Run it**: there's a bug. Which step is wrong or missing?"); },
      () => { prog = GOOD.slice(); setMD(status, "**Debugged!** One ⬆️ was missing at the start, so the courier hit a mountain. Tiny mistakes matter to a computer (and a courier)."); }
    ];
    function step(i){ running = false; pos = START.slice(); put(...pos); T[i](); paint(); }
    step(0);
    return { steps:3, step };
  };

  /* =======================================================
     45. GARDEN GRID — a mirror-symmetric chahar bagh (Fri W6)
     ======================================================= */
  IX.gardengrid = function(host){
    const N = 10, CS = 64, ox = 20, oy = 10;
    const v = svg(N*CS + 40, N*CS + 20, { style:`position:absolute;left:0;top:-10px;width:${N*CS + 40}px;height:${N*CS + 20}px;border-radius:12px;box-shadow:var(--sh-3);background:#c9a46a` });
    host.appendChild(v);
    const TOOLS = { water:{ fill:"#2b8fb3", icon:"" }, pool:{ fill:"#1E7FB0", icon:"" }, path:{ fill:"#e9d6b0", icon:"" }, tree:{ fill:"#6e9a3c", icon:"🌳" }, flower:{ fill:"#8fbf5a", icon:"🌷" }, pav:{ fill:"#e9d6b0", icon:"🏛️" }, soil:{ fill:"#a98a5a", icon:"" } };
    const grid = Array.from({ length:N }, () => Array(N).fill("soil"));
    const cells = [];
    for (let r=0;r<N;r++){ cells[r] = []; for (let c=0;c<N;c++){ const g = s("g", { style:"cursor:pointer" }); const rc = s("rect", { x:ox + c*CS + 2, y:oy + r*CS + 2, width:CS - 4, height:CS - 4, rx:6 }); const tx = s("text", { x:ox + c*CS + CS/2, y:oy + r*CS + CS/2 + 13, "text-anchor":"middle", "font-size":34 }); g.append(rc, tx); v.appendChild(g); cells[r][c] = { rc, tx };
      g.addEventListener("click", e => { e.stopPropagation(); setMirror(r, c, tool); }); } }
    // mirror lines
    v.appendChild(s("path", { d:`M${ox + N*CS/2} ${oy} V${oy + N*CS} M${ox} ${oy + N*CS/2} H${ox + N*CS}`, stroke:"#F6D27A", "stroke-width":3, "stroke-dasharray":"8 8", opacity:.8, "pointer-events":"none" }));
    function paintCell(r, c){ const t = TOOLS[grid[r][c]]; cells[r][c].rc.setAttribute("fill", t.fill); cells[r][c].tx.textContent = t.icon; }
    function setMirror(r, c, k){ [[r, c], [r, N-1-c], [N-1-r, c], [N-1-r, N-1-c]].forEach(([a, b]) => { grid[a][b] = k; paintCell(a, b); }); BM.sfx("tok"); }
    let tool = "water";
    const pal = h("div", { style:{ position:"absolute", left:"720px", top:"-10px", width:"280px", display:"grid", gap:"8px" } }, [["water","💧 Water channel"],["pool","🔵 Pool"],["path","🟫 Path"],["tree","🌳 Tree"],["flower","🌷 Flowers"],["pav","🏛️ Pavilion"],["soil","🧹 Clear"]].map(([k, t]) => { const b = btn(t, () => { tool = k; [...pal.children].forEach(x => x.classList.toggle("on", x === b)); }); if (k === "water") b.classList.add("on"); return b; }));
    const info = panel({ left:"1030px", right:"0", top:"-10px" }, [h("h4"), h("p")]);
    host.append(pal, info);
    function fill(fn){ for (let r=0;r<N;r++) for (let c=0;c<N;c++){ const k = fn(r, c); if (k) grid[r][c] = k; } for (let r=0;r<N;r++) for (let c=0;c<N;c++) paintCell(r, c); }
    const mid = (r, c) => (r === 4 || r === 5 || c === 4 || c === 5);
    const T = [
      ["An empty garden","Tap a tool, then tap a square. Whatever you place is **mirrored** into all four quarters: the garden stays **symmetrical**.", () => fill(() => "soil")],
      ["1 · Water in four directions","Two **water channels** cross in the middle, dividing the garden into **four parts**: *chahar bagh*, “four gardens”.", () => fill((r, c) => mid(r, c) ? "water" : null)],
      ["2 · A central pool","Where the channels meet, a **pool** reflects the sky.", () => fill((r, c) => (r === 4 || r === 5) && (c === 4 || c === 5) ? "pool" : null)],
      ["3 · Shade trees","Rows of **trees** give shade and fruit, lined up in each quarter.", () => fill((r, c) => (r === 1 || r === 8) && (c === 1 || c === 3 || c === 6 || c === 8) ? "tree" : (c === 1 || c === 8) && (r === 3 || r === 6) ? "tree" : null)],
      ["4 · Flowers and paths","**Flower beds** and **paths** fill the spaces, still mirrored.", () => fill((r, c) => (r === 2 || r === 7) && (c === 2 || c === 7) ? "flower" : (r === 0 || r === 9 || c === 0 || c === 9) ? "path" : null)],
      ["5 · A pavilion","A **pavilion** at each end for resting in the shade. The UNESCO listing **The Persian Garden** includes **nine** gardens like this.", () => fill((r, c) => (r === 0 || r === 9) && (c === 4 || c === 5) ? "pav" : null)]
    ];
    function step(i){ if (i === 0) fill(() => "soil"); else { fill(() => "soil"); for (let k=1;k<=i;k++) T[k][2](); } info.querySelector("h4").textContent = T[i][0]; setMD(info.querySelector("p"), T[i][1]); if (i) BM.sfx("tok"); }
    step(0);
    return { steps:5, step };
  };
})(window.BM);
