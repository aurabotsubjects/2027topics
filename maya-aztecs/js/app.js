/* ==========================================================
   APP — router & screens (hub, week, lesson, quick-mark, settings)
   ========================================================== */
(function(FC){
  "use strict";
  const h = FC.h, s = FC.s, A = FC.art, M = FC.map;
  const app = document.getElementById("app");
  const DAYS = ["mon","tue","wed","thu","fri"];
  A.installDefs();
  if (!FC.settings().motion) document.documentElement.classList.add("reduce-motion");

  const audience = /[?&]audience=1/.test(location.search);

  /* ---------- top bar ---------- */
  function topbar(active){
    const brand = h("a", { class:"brand", href:"#/" }, A.brandMark(), h("div", null, h("small", null, "Maya & Aztecs · Yrs 5–6"), h("b", null, "The Fifth Codex")));
    const nav = h("nav", null,
      h("a", { class:"navbtn", href:"../index.html", title:"Back to the 2027 topics" }, "‹ 2027 Topics"),
      h("a", { class:"navbtn" + (active === "hub" ? " on" : ""), href:"#/" }, "Expedition"),
      ...Object.keys(FC.WEEKS).map(n => h("a", { class:"navbtn" + (active === "week" + n ? " on" : ""), href:`#/week/${n}` }, `Week ${n}`)),
      h("a", { class:"navbtn" + (active === "docs" ? " on" : ""), href:"#/doc/unit" }, "Unit Plan"),
      h("a", { class:"navbtn" + (active === "settings" ? " on" : ""), href:"#/settings" }, "Settings"));
    return h("header", { class:"topbar" }, brand, nav);
  }

  /* ---------- HUB ---------- */
  function hub(){
    const T = FC.TERM;
    const page = h("div");
    page.appendChild(topbar("hub"));
    const wrap = h("div", { class:"wrap" });
    // map
    const map = M.build({ view:[1240, 400, 1000, 1080], ocean:"#14110F", landFill:"#2A2420" });
    map.querySelector(".m-grat").setAttribute("stroke", "rgba(217,162,58,.08)");
    map.querySelectorAll(".m-l").forEach(p => { p.setAttribute("stroke", "rgba(217,162,58,.35)"); p.setAttribute("stroke-width", 1.5); });
    map.querySelector(".m-r-meso").setAttribute("opacity", .35);
    const opened = FC.store.get("folios", {});
    const route = map.querySelector(".m-route");
    const pts = T.weeks.map(w => M.proj(w.route[0], w.route[1]));
    let d = `M${pts[0][0]} ${pts[0][1]}`;
    for (let i=1;i<pts.length;i++){ const [x1,y1] = pts[i-1], [x2,y2] = pts[i]; const mx = (x1+x2)/2 + (y2-y1)*.25, my = (y1+y2)/2 - (x2-x1)*.25; d += ` Q${mx} ${my} ${x2} ${y2}`; }
    route.appendChild(s("path", { d, fill:"none", stroke:"#D9A23A", "stroke-width":3, "stroke-dasharray":"10 9", "vector-effect":"non-scaling-stroke", opacity:.75 }));
    T.weeks.forEach((w, i) => {
      const [x,y] = pts[i]; const ready = !!FC.WEEKS[w.n];
      const off = [[0,0],[-22,8],[18,-14],[0,0],[-14,-10],[-26,-4],[18,12],[0,0],[0,0],[16,16]][i];
      const g = s("g", { class:"seal" + (ready ? "" : " locked"), transform:`translate(${x+off[0]} ${y+off[1]})` });
      g.appendChild(s("circle", { class:"disc", r:21, fill: opened[w.n] ? "#D9A23A" : ready ? "#1F7A5A" : "#3A322C", stroke:"#F4EBD8", "stroke-width":2.5 }));
      g.appendChild(s("text", { y:7, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":19, fill:"#F4EBD8", "pointer-events":"none" }, w.folio));
      if (ready) g.addEventListener("click", () => location.hash = `#/week/${w.n}`);
      g.appendChild(s("title", null, `Week ${w.n} · ${w.title}`));
      map.querySelector(".m-marks").appendChild(g);
    });
    M.label(map, [-100,-15], "PACIFIC", 26, "rgba(217,162,58,.35)");
    M.label(map, [-25,8], "ATLANTIC", 26, "rgba(217,162,58,.35)");
    M.label(map, [-99,30], "MESOAMERICA ↓", 18, "rgba(244,235,216,.6)");
    const hero = h("section", { class:"hub-hero" },
      h("div", null,
        h("h1", { class:"display" }, h("span", { class:"the" }, "An expedition into the Maya & Aztec world"), "The Fifth ", h("em", null, "Codex")),
        h("p", { class:"lead" }, T.premise),
        h("div", { class:"hub-meta" }, ["history","geography","science","technology","art"].map(k => h("span", { class:"chip c-" + k }, `${FC.SUBJECTS[k].short} · ${FC.SUBJECTS[k].name}`))),
        h("div", { class:"hub-cta" },
          h("a", { class:"btn gold", href:"#/week/1" }, FC.icon("play"), "Begin Week 1"),
          h("a", { class:"btn ghost", href:"#/doc/unit" }, FC.icon("plan"), "Unit Plan"),
          h("a", { class:"btn ghost", href:"#/settings" }, FC.icon("gear"), "Class setup")),
        h("div", { class:"motto" }, "Soli Deo Gloria — to God alone the glory")),
      h("div", { class:"hub-map" }, map));
    wrap.appendChild(hero);
    // weeks
    wrap.appendChild(h("div", { class:"section-title" }, h("h2", null, "Ten folios · ten weeks"), h("span", { class:"kicker" }, `${Object.keys(FC.WEEKS).length} of 10 weeks ready`)));
    wrap.appendChild(h("div", { class:"fret-strip", style:{ marginBottom:"22px" } }));
    wrap.appendChild(h("div", { class:"weeks-grid" }, T.weeks.map(w => {
      const ready = !!FC.WEEKS[w.n];
      const thumb = FC.imgSlot("hero-w" + String(w.n).padStart(2, "0"), "tile-img");
      return h(ready ? "a" : "div", { class:"week-tile" + (ready ? "" : " locked"), href: ready ? `#/week/${w.n}` : null },
        thumb, h("div", { class:"tile-shade" }),
        h("span", { class:"tag" + (ready ? " ready" : "") }, ready ? (opened[w.n] ? "Unsealed" : "Ready") : "Coming"),
        h("div", { class:"num" }, String(w.n).padStart(2, "0")),
        h("h3", null, `Folio ${w.folio} · ${w.title}`),
        h("p", { class:"muted" }, w.story));
    })));
    // docs
    wrap.appendChild(h("div", { class:"section-title" }, h("h2", null, "Planning documents"), h("span", { class:"kicker" }, "Print or save as PDF")));
    const docs = [
      ["#/doc/unit","Unit Plan","Rationale, 10-week overview, curriculum map, 2027 coverage, core rubrics, kit & safety."],
      ...Object.keys(FC.WEEKS).map(n => [`#/doc/week/${n}`, `Week ${n} Pack`, `All five Week ${n} lesson plans and rubrics in one PDF.`]),
      ["#/week/1","Week 1 Lessons","Present, plan, mark — Monday to Friday."],
      ["#/settings","Class Setup","Teams, class list (stays on this computer), sound, motion, backup."]
    ];
    wrap.appendChild(h("div", { class:"docs-grid" }, docs.map(([href, t, d]) => h("a", { class:"paper doc-card", href }, h("div", { class:"kicker" }, "Open"), h("h3", null, t), h("p", null, d)))));
    // quick guide
    wrap.appendChild(h("div", { class:"section-title" }, h("h2", null, "Presenting — quick guide")));
    const keys = [["→ / Space / clicker","Next slide or next reveal"],["←","Back"],["N","Teacher notes & scripts"],["T","Timer"],["P","Random picker"],["C","Cacao bean scores"],["B","Calm (black) screen"],["F","Fullscreen"],["D","Class screen + teacher console (two displays)"],["M","Sound on/off"],["Esc","Close / exit"]];
    wrap.appendChild(h("div", { class:"paper", style:{ padding:"22px 26px", display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:"10px 24px" } }, keys.map(([k, t]) => h("div", { style:{ display:"flex", gap:"12px", alignItems:"baseline" } }, h("b", { style:{ fontFamily:"var(--f-label)", letterSpacing:".08em", minWidth:"150px", color:"var(--cochineal)" } }, k), h("span", null, t)))));
    wrap.appendChild(h("p", { class:"muted", style:{ marginTop:"18px", fontSize:"15px" } }, "🟢 Real evidence = true history, science and geography. 🟡 Expedition story = our fiction (the Fifth Codex, the guides and the Collector). Every slide is badged so students learn to tell the difference."));
    page.appendChild(wrap);
    return page;
  }

  /* ---------- WEEK ---------- */
  /* sources list (clickable) */
  const DAYNAME = { mon:"Monday", tue:"Tuesday", wed:"Wednesday", thu:"Thursday", fri:"Friday", all:"Whole week" };
  function sourcesList(list){
    return h("ol", { class:"src-list" }, FC.srcSorted(list).map(x => { const k = FC.srcKind(x.url); return h("li", null,
      h("span", { class:"src-kind k-" + k.split(" ")[0].toLowerCase() }, k),
      h("a", { href:x.url, target:"_blank", rel:"noopener" }, x.t), h("span", { class:"src-by" }, " — " + x.by),
      h("div", { class:"src-fact" }, (x.fact ? "Backs up: " + x.fact + " · " : ""), h("span", { class:"src-url" }, FC.srcHost(x.url)))); }));
  }
  function sourcesBlock(n){
    const S = (FC.SOURCES || {})[n] || [];
    if (!S.length) return null;
    const box = h("div", { class:"paper panel src-panel" });
    ["mon","tue","wed","thu","fri","all"].forEach(d => { const list = S.filter(x => x.day === d); if (!list.length) return;
      box.append(h("h3", { class:"src-day" }, DAYNAME[d]), sourcesList(list)); });
    box.appendChild(h("p", { class:"src-note" }, "Links open in a new tab. Each source is labelled by type: museums, government bodies, universities and encyclopaedias carry the most weight; Wikipedia is listed only as a starting point alongside a stronger source. Checked October 2026 — if a page moves, search its title."));
    return box;
  }
  function week(n){
    const W = FC.WEEKS[n], T = FC.TERM.weeks[n-1];
    if (!W) return notReady(n);
    const page = h("div"); page.appendChild(topbar("week" + n));
    const wrap = h("div", { class:"wrap" });
    wrap.appendChild(h("div", { class:"week-head has-hero" }, FC.imgSlot("hero-w" + String(n).padStart(2, "0"), "week-hero-img"), h("div", { class:"bignum" }, String(n).padStart(2,"0")),
      h("div", null, h("div", { class:"kicker" }, `Folio ${T.folio} · Week ${n} of 10`), h("h1", { class:"display" }, T.title), h("p", { class:"story" }, W.story))));
    wrap.appendChild(h("div", { class:"week-actions" },
      h("a", { class:"btn gold", href:`#/present/${W.lessons[0].id}/0` }, FC.icon("play"), "Present Monday"),
      h("a", { class:"btn", href:`#/doc/week/${n}` }, FC.icon("pdf"), "Week Pack PDF (plans + rubrics)"),
      h("a", { class:"btn", href:`#/doc/weekpaths/${n}` }, FC.icon("pdf"), "All Path Cards this week"),
      h("a", { class:"btn ghost", href:"#/doc/unit" }, FC.icon("plan"), "Unit Plan"),
      ((FC.SOURCES || {})[n] || []).length ? h("button", { class:"btn ghost", onclick:() => { const el = document.getElementById("sources"); if (el) el.scrollIntoView({ behavior:"smooth" }); } }, "🔗 Sources") : null));
    wrap.appendChild(h("div", { class:"days" }, W.lessons.map(L => {
      const S = FC.SUBJECTS[L.subject];
      const band = h("div", { class:"band" }, A.band(L.subject, L.week*5 + DAYS.indexOf(L.day)), FC.imgSlot("banner-" + L.subject, "band-img"));
      return h("a", { class:"day-card s-" + L.subject, href:`#/lesson/${L.id}` }, band,
        h("div", { class:"body" }, h("div", { class:"day" }, `${S.day} · ${S.name}`), h("h3", null, L.title), h("div", { class:"li" }, L.li),
          h("div", { class:"foot" }, h("span", { class:"prep-badge" }, `⏱ prep ${L.prep.min} min`), h("span", { class:"prep-badge" }, `${L.slides.length} slides`), h("span", { class:"prep-badge" }, FC.PILLARS[L.lens.pillar].icon + " " + FC.PILLARS[L.lens.pillar].name))));
    })));
    // prep summary
    wrap.appendChild(h("div", { class:"section-title" }, h("h2", null, "This week's prep"), h("span", { class:"kicker" }, `about ${W.lessons.reduce((a, L) => a + L.prep.min, 0)} minutes in total`)));
    wrap.appendChild(h("div", { class:"paper panel" }, h("table", { class:"seq" }, h("tbody", null, W.lessons.map(L => h("tr", null, h("td", null, FC.SUBJECTS[L.subject].short), h("td", null, L.prep.items.join(" · ") || "Nothing — it's all on screen.")))))));
    wrap.appendChild(h("div", { class:"section-title" }, h("h2", null, "Hononga Aotearoa"), h("span", { class:"kicker" }, "this week's NZ connection")));
    wrap.appendChild(h("div", { class:"paper panel" }, h("p", { style:{ margin:0, fontSize:"18px" } }, W.hononga)));
    const sb = sourcesBlock(n);
    if (sb){ wrap.appendChild(h("div", { class:"section-title", id:"sources" }, h("h2", null, "Sources & further reading"), h("span", { class:"kicker" }, "check the facts behind this week's lessons"))); wrap.appendChild(sb); }
    page.appendChild(wrap);
    return page;
  }
  function notReady(n){
    const page = h("div"); page.appendChild(topbar(""));
    const T = FC.TERM.weeks[n-1];
    page.appendChild(h("div", { class:"wrap" }, h("div", { class:"week-head" }, h("div", { class:"bignum" }, String(n).padStart(2,"0")), h("div", null, h("div", { class:"kicker" }, T ? `Folio ${T.folio}` : ""), h("h1", { class:"display" }, T ? T.title : "Not found"), h("p", { class:"story" }, "This week is planned in the blueprint and will be built in the next phase."))), h("a", { class:"btn gold", href:"#/" }, "Back to the expedition")));
    return page;
  }

  /* ---------- LESSON ---------- */
  function lesson(id){
    const L = FC.presenter.lessonById(id);
    if (!L) return notReady(0);
    const S = FC.SUBJECTS[L.subject];
    const page = h("div"); page.appendChild(topbar("week"));
    const wrap = h("div", { class:"wrap" });
    const last = FC.store.get("lastSlide:" + id, 0);
    const hero = h("div", { class:"lesson-hero s-" + L.subject }, h("div", { class:"bg" }, A.band(L.subject, 11), FC.imgSlot("banner-" + L.subject, "band-img")),
      h("div", { class:"inner" }, h("div", { class:"kicker", style:{ color:"var(--c)" } }, `Week ${L.week} · ${S.day} · ${S.name} · 50 min`), h("h1", { class:"display" }, L.title), h("p", { style:{ fontSize:"20px", maxWidth:"52em", margin:"12px 0 0" } }, L.li),
        h("div", { class:"week-actions", style:{ margin:"22px 0 0" } },
          h("a", { class:"btn gold", href:`#/present/${id}/0` }, FC.icon("play"), "Present from start"),
          last > 0 ? h("a", { class:"btn", href:`#/present/${id}/${last}` }, `Resume at slide ${last+1}`) : null,
          h("a", { class:"btn", href:`#/doc/plan/${id}` }, FC.icon("plan"), "Lesson Plan PDF"),
          h("a", { class:"btn", href:`#/doc/rubric/${id}` }, FC.icon("rubric"), "Rubric PDF"),
          h("a", { class:"btn", href:`#/doc/rubric-student/${id}` }, "Student Rubric"),
          h("a", { class:"btn", href:`#/doc/paths/${id}` }, FC.icon("pdf"), "Path Cards (A · B · C)"),
          h("a", { class:"btn jade", href:`#/mark/${id}` }, FC.icon("mark"), "Quick-Mark"))));
    wrap.appendChild(hero);
    // prep checklist
    const prepKey = "prep:" + id, done = FC.store.get(prepKey, {});
    const prepList = h("ul", { class:"check-list" }, (L.prep.items.length ? L.prep.items : ["Nothing to prepare — everything is on screen."]).map((it, i) => {
      const li = h("li", { class: done[i] ? "done" : "" }, h("span", { class:"box" }, done[i] ? "✓" : ""), h("span", null, it));
      li.addEventListener("click", () => { const d2 = FC.store.get(prepKey, {}); d2[i] = !d2[i]; FC.store.set(prepKey, d2); li.classList.toggle("done", d2[i]); li.firstChild.textContent = d2[i] ? "✓" : ""; });
      return li;
    }));
    const left = h("div", { style:{ display:"flex", flexDirection:"column", gap:"22px" } },
      h("div", { class:"paper panel" }, h("h2", null, "The lesson at a glance"), h("table", { class:"seq" }, h("tbody", null, L.plan.sequence.map(r => { const td = h("td"); td.innerHTML = FC.md(r[2]); return h("tr", null, h("td", null, r[0]), h("td", { style:{ fontWeight:"700", whiteSpace:"nowrap" } }, r[1]), td); })))),
      h("div", { class:"paper panel" }, h("h2", null, "Choose Your Path"), ...L.paths.map(p => h("p", { style:{ margin:"6px 0" } }, h("b", { style:{ fontFamily:"var(--f-label)", letterSpacing:".08em", color:"var(--cochineal)" } }, `${p.id} · ${p.name.toUpperCase()} — `), p.product, " ", h("a", { class:"btn sm", href:`#/doc/path/${id}/${p.id}`, style:{ fontSize:"12px", marginLeft:"6px" } }, "🖨 Print card"))), h("p", { style:{ margin:"10px 0 0", fontSize:"15px" } }, "Each card gives students detailed steps, a word bank, where to find information and what good work looks like. Print only the paths students choose, or ", h("a", { href:`#/doc/paths/${id}` }, "all three"), ".")),
      h("div", { class:"paper panel" }, h("h2", null, "Slides"), h("div", { style:{ display:"flex", flexWrap:"wrap", gap:"8px" } }, L.slides.map((sl, i) => h("a", { class:"btn sm", href:`#/present/${id}/${i}`, style:{ fontSize:"12px" } }, `${i+1} · ${(FC.PHASES.find(p => p.id === sl.phase)||{}).icon || ""} ${sl.title || sl.label || sl.type}`)))));
    const right = h("div", { style:{ display:"flex", flexDirection:"column", gap:"22px" } },
      h("div", { class:"paper panel" }, h("h2", null, `Prep · ${L.prep.min} min`), prepList),
      L.safety && L.safety.length ? h("div", { class:"paper panel", style:{ boxShadow:"inset 6px 0 0 #B3262E, var(--sh-2)" } }, h("h2", null, "⚠️ Safety"), h("ul", null, L.safety.map(x => h("li", null, x)))) : null,
      h("div", { class:"paper panel" }, h("h2", null, "Key vocabulary"), h("ul", null, L.vocab.map(v => h("li", null, h("b", null, v.w), v.say ? ` (${v.say})` : "", " — ", v.def)))),
      h("div", { class:"paper panel" }, h("h2", null, `${FC.PILLARS[L.lens.pillar].icon} Through the Lens`), h("p", { style:{ margin:"0 0 6px" } }, h("b", null, L.lens.ref), " — ", h("i", null, L.lens.paraphrase)), h("p", { style:{ margin:0 } }, L.lens.talk[0].q)),
      h("div", { class:"paper panel" }, h("h2", null, "Curriculum"), h("p", { style:{ margin:"0 0 6px" } }, L.codes.join(" · ")), h("p", { style:{ margin:0, fontSize:"15px" } }, L.coverage)));
    const ls = ((FC.SOURCES || {})[L.week] || []).filter(x => x.day === L.day || x.day === "all");
    if (ls.length) right.appendChild(h("div", { class:"paper panel src-panel" }, h("h2", null, "🔗 Sources"), sourcesList(ls), h("a", { href:`#/week/${L.week}`, class:"src-note" }, "All Week " + L.week + " sources →")));
    wrap.appendChild(h("div", { class:"lesson-grid" }, left, right));
    page.appendChild(wrap);
    return page;
  }

  /* ---------- QUICK-MARK ---------- */
  function mark(id){
    const L = FC.presenter.lessonById(id);
    const page = h("div"); page.appendChild(topbar("week"));
    const wrap = h("div", { class:"wrap" });
    const key = "marks:" + id;
    const studs = FC.students(), who = studs.length ? studs : FC.teams().map(t => t.name);
    wrap.appendChild(h("div", { class:"week-head", style:{ gridTemplateColumns:"1fr" } }, h("div", null, h("div", { class:"kicker" }, `Quick-Mark · ${FC.SUBJECTS[L.subject].name} · Week ${L.week}`), h("h1", { class:"display", style:{ fontSize:"clamp(40px,5vw,76px)" } }, L.title), h("p", { class:"story" }, studs.length ? "Tap a level for each criterion. Saved on this computer only." : "No class list yet, so you're marking by team. Add names in Settings to mark individuals."))));
    const data = FC.store.get(key, {});
    const save = () => FC.store.set(key, data);
    const table = h("table", { class:"qm-table" },
      h("thead", null, h("tr", null, h("th", null, studs.length ? "Student" : "Team"), ...L.rubric.map(r => h("th", null, r.c, h("div", { style:{ fontWeight:"400", textTransform:"none", letterSpacing:"0", fontFamily:"var(--f-body)", fontSize:"12px" } }, r.code))), h("th", null, "Note"))),
      h("tbody", null, who.map(w => {
        data[w] = data[w] || {};
        return h("tr", null, h("td", null, w), ...L.rubric.map((r, i) => {
          const set = h("div", { class:"lvl-set" });
          [["d","D"],["a","A"],["f","F"]].forEach(([k, lab]) => { const b = h("button", { class:"lvl " + k + (data[w]["r"+i] === k ? " on" : ""), title:{ d:"Developing", a:"Achieved", f:"Flying" }[k], onclick:() => { data[w]["r"+i] = data[w]["r"+i] === k ? null : k; save(); set.querySelectorAll(".lvl").forEach(x => x.classList.remove("on")); if (data[w]["r"+i]) b.classList.add("on"); } }, lab); set.appendChild(b); });
          return h("td", null, set);
        }), h("td", null, h("input", { class:"qm-note", value:data[w].note || "", placeholder:"evidence / next step", oninput:(e) => { data[w].note = e.target.value; save(); } })));
      })));
    const toCSV = () => { const rows = [["Name", ...L.rubric.map(r => r.c), "Note"]]; who.forEach(w => rows.push([w, ...L.rubric.map((r, i) => ({ d:"Developing", a:"Achieved", f:"Flying" })[data[w]["r"+i]] || ""), data[w].note || ""])); return rows.map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n"); };
    wrap.appendChild(h("div", { class:"week-actions" },
      h("button", { class:"btn gold", onclick:() => FC.download(`${id}-marks.csv`, toCSV(), "text/csv") }, "Export CSV"),
      h("a", { class:"btn", href:`#/doc/marks/${id}` }, FC.icon("pdf"), "Assessment record PDF"),
      h("a", { class:"btn", href:`#/doc/rubric/${id}` }, "View rubric"),
      h("a", { class:"btn ghost", href:`#/lesson/${id}` }, "Back to lesson")));
    wrap.appendChild(h("div", { class:"paper panel", style:{ overflowX:"auto" } }, h("div", { style:{ display:"flex", gap:"16px", marginBottom:"10px", fontSize:"14px" } }, h("span", null, h("b", { style:{ color:"#C98A3A" } }, "D"), " Developing"), h("span", null, h("b", { style:{ color:"#1F7A5A" } }, "A"), " Achieved"), h("span", null, h("b", { style:{ color:"#2E9FB0" } }, "F"), " Flying")), table));
    page.appendChild(wrap);
    return page;
  }

  /* ---------- SETTINGS ---------- */
  function settings(){
    const st = FC.settings();
    const page = h("div"); page.appendChild(topbar("settings"));
    const wrap = h("div", { class:"wrap" });
    wrap.appendChild(h("div", { class:"week-head", style:{ gridTemplateColumns:"1fr" } }, h("div", null, h("div", { class:"kicker" }, "Class setup"), h("h1", { class:"display" }, "Settings"), h("p", { class:"story" }, "Everything here is saved only in this browser on this computer. Nothing is sent anywhere."))));
    const f = (lab, key, ph) => h("label", { class:"f" }, lab, h("input", { class:"t", value:st[key] || "", placeholder:ph || "", oninput:(e) => { st[key] = e.target.value; FC.saveSettings(st); } }));
    const tg = (lab, key, after) => { const b = h("button", { class:"toggle" + (st[key] ? " on" : ""), onclick:() => { st[key] = !st[key]; FC.saveSettings(st); b.classList.toggle("on", st[key]); after && after(st[key]); } }); return h("div", { class:"toggle-row" }, b, h("span", null, lab)); };
    wrap.appendChild(h("div", { class:"paper panel" }, h("h2", null, "Printed on lesson plans"), h("div", { class:"form-grid" }, f("School", "school", "e.g. your school name"), f("Class", "className", "Room 14"), f("Teacher", "teacher", "Your name"), f("Year", "year", "2027"), f("Term", "term", "Term 1"), f("Term start date", "termStart", "YYYY-MM-DD"))));
    const tnames = FC.store.get("teamNames", {});
    const teamBox = h("div", { class:"form-grid", style:{ marginTop:"10px" } });
    const drawTeams = () => { FC.clear(teamBox); FC.DEFAULT_TEAMS.slice(0, st.teamCount).forEach(t => teamBox.appendChild(h("label", { class:"f" }, h("span", { style:{ color:t.color } }, "● " + t.name), h("input", { class:"t", value:tnames[t.id] || t.name, oninput:(e) => { tnames[t.id] = e.target.value; FC.store.set("teamNames", tnames); } })))); };
    const cnt = h("select", { class:"t", onchange:(e) => { st.teamCount = +e.target.value; FC.saveSettings(st); drawTeams(); } }, [2,3,4,5,6,7,8].map(n => h("option", { value:n, selected: n === (st.teamCount|0) ? "selected" : null }, `${n} teams`)));
    drawTeams();
    wrap.appendChild(h("div", { class:"paper panel", style:{ marginTop:"20px" } }, h("h2", null, "Expedition Teams"), h("label", { class:"f", style:{ maxWidth:"220px" } }, "Number of teams", cnt), teamBox));
    wrap.appendChild(h("div", { class:"paper panel", style:{ marginTop:"20px" } }, h("h2", null, "Class list (optional)"), h("p", { style:{ marginTop:0 } }, "One name per line. Used by the random picker and Quick-Mark. Stored only on this computer."), h("textarea", { class:"t", style:{ width:"100%" }, oninput:(e) => { st.students = e.target.value; FC.saveSettings(st); } }, st.students || "")));
    wrap.appendChild(h("div", { class:"paper panel", style:{ marginTop:"20px" } }, h("h2", null, "Presenting"),
      tg("Sound effects (paper, stone, thunder — synthesised)", "sound"),
      tg("Motion & animation (turn off for a calmer, reduced-motion version)", "motion", on => document.documentElement.classList.toggle("reduce-motion", !on))));
    const fileIn = h("input", { type:"file", accept:".json", style:{ display:"none" }, onchange:(e) => { const file = e.target.files[0]; if (!file) return; file.text().then(t => { try { FC.store.load(JSON.parse(t)); FC.toast("Backup restored"); setTimeout(() => location.reload(), 600); } catch(err){ FC.toast("That file isn't a Fifth Codex backup"); } }); } });
    let armed = false;
    wrap.appendChild(h("div", { class:"paper panel", style:{ marginTop:"20px" } }, h("h2", null, "Backup & reset"),
      h("div", { class:"week-actions", style:{ margin:0 } },
        h("button", { class:"btn gold", onclick:() => FC.download("fifth-codex-backup.json", JSON.stringify(FC.store.dump(), null, 1), "application/json") }, "Export backup"),
        h("button", { class:"btn", onclick:() => fileIn.click() }, "Import backup"), fileIn,
        h("button", { class:"btn ghost", style:{ color:"var(--cochineal)", boxShadow:"inset 0 0 0 1.5px var(--cochineal)" }, onclick:(e) => { if (!armed){ armed = true; e.target.textContent = "Click again to confirm reset"; return; } ["clues","folios","glyphwall","cacao"].forEach(k => FC.store.del(k)); FC.toast("Progress reset (clues, folios, wall, cacao)"); e.target.textContent = "Reset term progress"; armed = false; } }, "Reset term progress"))));
    page.appendChild(wrap);
    return page;
  }

  /* ---------- router ---------- */
  function route(){
    const hash = location.hash || "#/";
    const parts = hash.replace(/^#\/?/, "").split("/");
    if (parts[0] === "present"){
      FC.clear(app);
      FC.presenter.open(parts[1], +parts[2] || 0, { audience });
      return;
    }
    if (FC.presenter.active()) FC.presenter.close(true);
    FC.clear(app);
    window.scrollTo(0, 0);
    let view;
    if (parts[0] === "week") view = week(+parts[1] || 1);
    else if (parts[0] === "lesson") view = lesson(parts[1]);
    else if (parts[0] === "mark") view = mark(parts[1]);
    else if (parts[0] === "settings") view = settings();
    else if (parts[0] === "doc"){
      const kind = parts[1], id = parts[2];
      let pages = [], name = "fifth-codex";
      const L = id ? FC.presenter.lessonById(id) : null;
      if (kind === "plan" && L){ pages = FC.docs.plan(L); name = `${id}-lesson-plan`; }
      else if (kind === "rubric" && L){ pages = FC.docs.rubric(L); name = `${id}-rubric`; }
      else if (kind === "rubric-student" && L){ pages = FC.docs.rubricStudent(L); name = `${id}-student-rubric`; }
      else if (kind === "paths" && L){ pages = FC.docs.pathCards(L); name = `${id}-path-cards`; }
      else if (kind === "path" && L){ pages = FC.docs.pathCard(L, (parts[3] || "A").toUpperCase()); name = `${id}-path-${(parts[3] || "A").toUpperCase()}`; }
      else if (kind === "weekpaths"){ pages = FC.docs.weekPaths(+id || 1); name = `week-${id}-path-cards`; }
      else if (kind === "marks" && L){ pages = FC.docs.marks(L); name = `${id}-assessment-record`; }
      else if (kind === "week"){ pages = FC.docs.week(+id || 1); name = `week-${id}-pack`; }
      else { pages = FC.docs.unit(); name = "fifth-codex-unit-plan"; }
      FC.docs.show(app, pages, name);
      document.title = name + " · The Fifth Codex";
      return;
    }
    else view = hub();
    document.title = "The Fifth Codex · Maya & Aztecs";
    app.appendChild(view);
    FC.$$(".day-card, .week-tile, .doc-card, .panel", app).forEach((el, i) => FC.motionOK() && el.animate([{ opacity:0, transform:"translateY(24px)" }, { opacity:1, transform:"none" }], { duration:700, delay:60 + i*45, easing:"cubic-bezier(.2,.8,.2,1)", fill:"backwards" }));
  }
  window.addEventListener("hashchange", route);
  route();
})(window.FC);
