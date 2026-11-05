/* ==========================================================
   APP — router & screens (hub, week, lesson, quick-mark, settings)
   ========================================================== */
(function(BM){
  "use strict";
  const h = BM.h, s = BM.s, A = BM.art, M = BM.map;
  const app = document.getElementById("app");
  const DAYS = ["mon","tue","wed","thu","fri"];
  A.installDefs();
  if (!BM.settings().motion) document.documentElement.classList.add("reduce-motion");

  const audience = /[?&]audience=1/.test(location.search);

  /* ---------- top bar ---------- */
  function topbar(active){
    const brand = h("a", { class:"brand", href:"#/" }, A.brandMark(), h("div", null, h("small", null, "Persia · Yrs 5–6"), h("b", null, "The Royal Road")));
    const nav = h("nav", null,
      h("a", { class:"navbtn", href:"../index.html", title:"Back to the 2027 topics" }, "‹ 2027 Topics"),
      h("a", { class:"navbtn" + (active === "hub" ? " on" : ""), href:"#/" }, "The Road"),
      ...Object.keys(BM.WEEKS).map(n => h("a", { class:"navbtn" + (active === "week" + n ? " on" : ""), href:`#/week/${n}` }, `Week ${n}`)),
      h("a", { class:"navbtn" + (active === "docs" ? " on" : ""), href:"#/doc/unit" }, "Unit Plan"),
      h("a", { class:"navbtn" + (active === "settings" ? " on" : ""), href:"#/settings" }, "Settings"));
    return h("header", { class:"topbar" }, brand, nav);
  }

  /* ---------- HUB ---------- */
  function hub(){
    const T = BM.TERM;
    const page = h("div");
    page.appendChild(topbar("hub"));
    const wrap = h("div", { class:"wrap" });
    // the term map: the Persian plateau and the empire; one waystation per week; the Seal fills as fragments are found
    const map = M.persia({ theme:"dark", labels:true, road:true, regions:false, cities:["sardis","babylon","susa","persepolis","pasargadae","ecbatana","jerusalem","yazd","tabriz","nishapur","behistun"] });
    const opened = BM.store.get("folios", {});
    const pts = T.weeks.map(w => M.proj(w.route[0], w.route[1]));
    let d = `M${pts[0][0]} ${pts[0][1]}`;
    for (let i=1;i<pts.length;i++) d += ` L${pts[i][0]} ${pts[i][1]}`;
    const marks = s("g");
    marks.appendChild(s("path", { d, fill:"none", stroke:"#F6D27A", "stroke-width":3, "stroke-dasharray":"4 10", "stroke-linecap":"round", opacity:.7 }));
    T.weeks.forEach((w, i) => {
      const [x,y] = pts[i]; const ready = !!BM.WEEKS[w.n];
      const g = s("g", { class:"seal" + (ready ? "" : " locked"), transform:`translate(${x + (w.off || [0,0])[0]} ${y + (w.off || [0,0])[1]})`, style: ready ? "cursor:pointer" : null });
      g.appendChild(s("circle", { class:"disc", r:26, fill: opened[w.n] ? "#E8B84A" : ready ? "#B0213B" : "#26305A", stroke:"#FBF3E0", "stroke-width":3 }));
      g.appendChild(s("text", { y:8, "text-anchor":"middle", "font-family":"Cinzel, serif", "font-weight":800, "font-size": w.folio.length > 2 ? 17 : 21, fill:"#FBF3E0", "pointer-events":"none" }, w.folio));
      if (ready) g.addEventListener("click", () => location.hash = `#/week/${w.n}`);
      g.appendChild(s("title", null, `Week ${w.n} · Stage ${w.folio} · ${w.title} · ${w.place}`));
      marks.appendChild(g);
    });
    map.appendChild(marks);
    const sealBox = h("div", { class:"hub-seal", title:"The Seal of the Kings: fragments found so far" }, A.sealArt(Object.keys(opened).filter(k => opened[k]).map(Number)));
    const hero = h("section", { class:"hub-hero" },
      h("div", null,
        h("h1", { class:"display" }, h("span", { class:"the" }, T.subtitle), "The Royal ", h("em", null, "Road")),
        h("p", { class:"lead" }, T.premise),
        h("div", { class:"hub-meta" }, ["history","geography","science","technology","art"].map(k => h("span", { class:"chip c-" + k }, `${BM.SUBJECTS[k].short} · ${BM.SUBJECTS[k].name}`))),
        h("div", { class:"hub-cta" },
          h("a", { class:"btn gold", href:"#/week/1" }, BM.icon("play"), "Begin Week 1"),
          h("a", { class:"btn ghost", href:"#/doc/unit" }, BM.icon("plan"), "Unit Plan"),
          h("a", { class:"btn ghost", href:"#/settings" }, BM.icon("gear"), "Class setup")),
        h("div", { class:"motto" }, "Soli Deo Gloria — to God alone the glory")),
      h("div", { class:"hub-map" }, map, sealBox));
    wrap.appendChild(hero);
    // weeks
    wrap.appendChild(h("div", { class:"section-title" }, h("h2", null, "Ten stages · ten weeks"), h("span", { class:"kicker" }, `${Object.keys(BM.WEEKS).length} of 10 weeks ready`)));
    wrap.appendChild(h("div", { class:"fret-strip", style:{ marginBottom:"22px" } }));
    wrap.appendChild(h("div", { class:"weeks-grid" }, T.weeks.map(w => {
      const ready = !!BM.WEEKS[w.n];
      const thumb = BM.imgSlot("hero-w" + String(w.n).padStart(2, "0"), "tile-img");
      return h(ready ? "a" : "div", { class:"week-tile" + (ready ? "" : " locked"), href: ready ? `#/week/${w.n}` : null },
        thumb, h("div", { class:"tile-shade" }),
        h("span", { class:"tag" + (ready ? " ready" : "") }, ready ? (opened[w.n] ? "Fragment found" : "Ready") : "Coming"),
        h("div", { class:"num" }, String(w.n).padStart(2, "0")),
        h("h3", null, `Stage ${w.folio} · ${w.title}`),
        h("p", { class:"muted" }, w.story));
    })));
    // docs
    wrap.appendChild(h("div", { class:"section-title" }, h("h2", null, "Planning documents"), h("span", { class:"kicker" }, "Print or save as PDF")));
    const docs = [
      ["#/doc/unit","Unit Plan","Rationale, 10-week overview, curriculum map, 2027 coverage, core rubrics, kit & safety."],
      ...Object.keys(BM.WEEKS).map(n => [`#/doc/week/${n}`, `Week ${n} Pack`, `All five Week ${n} lesson plans and rubrics in one PDF.`]),
      ["#/week/1","Week 1 Lessons","Present, plan, mark — Monday to Friday."],
      ["#/settings","Class Setup","Teams, class list (stays on this computer), sound, motion, backup."]
    ];
    wrap.appendChild(h("div", { class:"docs-grid" }, docs.map(([href, t, d]) => h("a", { class:"paper doc-card", href }, h("div", { class:"kicker" }, "Open"), h("h3", null, t), h("p", null, d)))));
    // quick guide
    wrap.appendChild(h("div", { class:"section-title" }, h("h2", null, "Presenting — quick guide")));
    const keys = [["→ / Space / clicker","Next slide or next reveal"],["←","Back"],["N","Teacher notes & scripts"],["T","Timer"],["P","Random picker"],["C","Daric scores 🪙"],["B","Calm (black) screen"],["F","Fullscreen"],["D","Class screen + teacher console (two displays)"],["M","Sound on/off"],["Esc","Close / exit"]];
    wrap.appendChild(h("div", { class:"paper", style:{ padding:"22px 26px", display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:"10px 24px" } }, keys.map(([k, t]) => h("div", { style:{ display:"flex", gap:"12px", alignItems:"baseline" } }, h("b", { style:{ fontFamily:"var(--f-label)", letterSpacing:".08em", minWidth:"150px", color:"var(--cochineal)" } }, k), h("span", null, t)))));
    wrap.appendChild(h("p", { class:"muted", style:{ marginTop:"18px", fontSize:"15px" } }, "🟢 Real evidence = true history, geography, science, technology and art, with sources. 🟡 Road Story = our fiction (the Seal of the Kings, the Road Scroll, the guides and the Shadow Courier). Every slide is badged so students learn to tell the difference."));
    page.appendChild(wrap);
    return page;
  }

  /* ---------- WEEK ---------- */
  /* sources list (clickable) */
  const DAYNAME = { mon:"Monday", tue:"Tuesday", wed:"Wednesday", thu:"Thursday", fri:"Friday", all:"Whole week" };
  function sourcesList(list){
    return h("ol", { class:"src-list" }, BM.srcSorted(list).map(x => { const k = BM.srcKind(x.url); return h("li", null,
      h("span", { class:"src-kind k-" + k.split(" ")[0].toLowerCase() }, k),
      h("a", { href:x.url, target:"_blank", rel:"noopener" }, x.t), h("span", { class:"src-by" }, " — " + x.by),
      h("div", { class:"src-fact" }, (x.fact ? "Backs up: " + x.fact + " · " : ""), h("span", { class:"src-url" }, BM.srcHost(x.url)))); }));
  }
  function sourcesBlock(n){
    const S = (BM.SOURCES || {})[n] || [];
    if (!S.length) return null;
    const box = h("div", { class:"paper panel src-panel" });
    ["mon","tue","wed","thu","fri","all"].forEach(d => { const list = S.filter(x => x.day === d); if (!list.length) return;
      box.append(h("h3", { class:"src-day" }, DAYNAME[d]), sourcesList(list)); });
    box.appendChild(h("p", { class:"src-note" }, "Links open in a new tab. Each source is labelled by type: museums, government bodies, universities and encyclopaedias carry the most weight; Wikipedia is listed only as a starting point alongside a stronger source. Checked October 2026 — if a page moves, search its title."));
    return box;
  }
  function week(n){
    const W = BM.WEEKS[n], T = BM.TERM.weeks[n-1];
    if (!W) return notReady(n);
    const page = h("div"); page.appendChild(topbar("week" + n));
    const wrap = h("div", { class:"wrap" });
    wrap.appendChild(h("div", { class:"week-head has-hero" }, BM.imgSlot("hero-w" + String(n).padStart(2, "0"), "week-hero-img"), h("div", { class:"bignum" }, String(n).padStart(2,"0")),
      h("div", null, h("div", { class:"kicker" }, `Stage ${T.folio} · Week ${n} of 10 · ${T.place}`), h("h1", { class:"display" }, T.title), h("p", { class:"story" }, W.story))));
    wrap.appendChild(h("div", { class:"week-actions" },
      h("a", { class:"btn gold", href:`#/present/${W.lessons[0].id}/0` }, BM.icon("play"), "Present Monday"),
      h("a", { class:"btn", href:`#/doc/week/${n}` }, BM.icon("pdf"), "Week Pack PDF (plans + rubrics)"),
      h("a", { class:"btn", href:`#/doc/weekpaths/${n}` }, BM.icon("pdf"), "All Path Cards this week"),
      h("a", { class:"btn ghost", href:"#/doc/unit" }, BM.icon("plan"), "Unit Plan"),
      ((BM.SOURCES || {})[n] || []).length ? h("button", { class:"btn ghost", onclick:() => { const el = document.getElementById("sources"); if (el) el.scrollIntoView({ behavior:"smooth" }); } }, "🔗 Sources") : null));
    wrap.appendChild(h("div", { class:"days" }, W.lessons.map(L => {
      const S = BM.SUBJECTS[L.subject];
      const band = h("div", { class:"band" }, A.band(L.subject, L.week*5 + DAYS.indexOf(L.day)), BM.imgSlot(`day-w${String(L.week).padStart(2,"0")}-${L.day}`, "band-img"));
      return h("a", { class:"day-card s-" + L.subject, href:`#/lesson/${L.id}` }, band,
        h("div", { class:"body" }, h("div", { class:"day" }, `${S.day} · ${S.name}`), h("h3", null, L.title), h("div", { class:"li" }, L.li),
          h("div", { class:"foot" }, h("span", { class:"prep-badge" }, `⏱ prep ${L.prep.min} min`), h("span", { class:"prep-badge" }, `${L.slides.length} slides`), h("span", { class:"prep-badge" }, BM.PILLARS[L.lens.pillar].icon + " " + BM.PILLARS[L.lens.pillar].name))));
    })));
    // prep summary
    wrap.appendChild(h("div", { class:"section-title" }, h("h2", null, "This week's prep"), h("span", { class:"kicker" }, `about ${W.lessons.reduce((a, L) => a + L.prep.min, 0)} minutes in total`)));
    wrap.appendChild(h("div", { class:"paper panel" }, h("table", { class:"seq" }, h("tbody", null, W.lessons.map(L => h("tr", null, h("td", null, BM.SUBJECTS[L.subject].short), h("td", null, L.prep.items.join(" · ") || "Nothing — it's all on screen.")))))));
    wrap.appendChild(h("div", { class:"section-title" }, h("h2", null, "Hononga Aotearoa · connections & care"), h("span", { class:"kicker" }, "linking Persia to our place, with 🕊️ care notes")));
    wrap.appendChild(h("div", { class:"paper panel" }, h("p", { style:{ margin:0, fontSize:"18px" } }, W.hononga)));
    const sb = sourcesBlock(n);
    if (sb){ wrap.appendChild(h("div", { class:"section-title", id:"sources" }, h("h2", null, "Sources & further reading"), h("span", { class:"kicker" }, "check the facts behind this week's lessons"))); wrap.appendChild(sb); }
    page.appendChild(wrap);
    return page;
  }
  function notReady(n){
    const page = h("div"); page.appendChild(topbar(""));
    const T = BM.TERM.weeks[n-1];
    page.appendChild(h("div", { class:"wrap" }, h("div", { class:"week-head" }, h("div", { class:"bignum" }, String(n).padStart(2,"0")), h("div", null, h("div", { class:"kicker" }, T ? `Stage ${T.folio}` : ""), h("h1", { class:"display" }, T ? T.title : "Not found"), h("p", { class:"story" }, "This week is planned in the blueprint and will be built in the next phase."))), h("a", { class:"btn gold", href:"#/" }, "Back to the Road")));
    return page;
  }

  /* ---------- LESSON ---------- */
  function lesson(id){
    const L = BM.presenter.lessonById(id);
    if (!L) return notReady(0);
    const S = BM.SUBJECTS[L.subject];
    const page = h("div"); page.appendChild(topbar("week"));
    const wrap = h("div", { class:"wrap" });
    const last = BM.store.get("lastSlide:" + id, 0);
    const hero = h("div", { class:"lesson-hero s-" + L.subject }, h("div", { class:"bg" }, A.band(L.subject, 11), BM.imgSlot(`day-w${String(L.week).padStart(2,"0")}-${L.day}`, "band-img")),
      h("div", { class:"inner" }, h("div", { class:"kicker", style:{ color:"var(--c)" } }, `Week ${L.week} · ${S.day} · ${S.name} · 50 min`), h("h1", { class:"display" }, L.title), h("p", { style:{ fontSize:"20px", maxWidth:"52em", margin:"12px 0 0" } }, L.li),
        h("div", { class:"week-actions", style:{ margin:"22px 0 0" } },
          h("a", { class:"btn gold", href:`#/present/${id}/0` }, BM.icon("play"), "Present from start"),
          last > 0 ? h("a", { class:"btn", href:`#/present/${id}/${last}` }, `Resume at slide ${last+1}`) : null,
          h("a", { class:"btn", href:`#/doc/plan/${id}` }, BM.icon("plan"), "Lesson Plan PDF"),
          h("a", { class:"btn", href:`#/doc/rubric/${id}` }, BM.icon("rubric"), "Rubric PDF"),
          h("a", { class:"btn", href:`#/doc/rubric-student/${id}` }, "Student Rubric"),
          h("a", { class:"btn", href:`#/doc/paths/${id}` }, BM.icon("pdf"), "Path Cards (A · B · C)"),
          h("a", { class:"btn jade", href:`#/mark/${id}` }, BM.icon("mark"), "Quick-Mark"))));
    wrap.appendChild(hero);
    // prep checklist
    const prepKey = "prep:" + id, done = BM.store.get(prepKey, {});
    const prepList = h("ul", { class:"check-list" }, (L.prep.items.length ? L.prep.items : ["Nothing to prepare — everything is on screen."]).map((it, i) => {
      const li = h("li", { class: done[i] ? "done" : "" }, h("span", { class:"box" }, done[i] ? "✓" : ""), h("span", null, it));
      li.addEventListener("click", () => { const d2 = BM.store.get(prepKey, {}); d2[i] = !d2[i]; BM.store.set(prepKey, d2); li.classList.toggle("done", d2[i]); li.firstChild.textContent = d2[i] ? "✓" : ""; });
      return li;
    }));
    const left = h("div", { style:{ display:"flex", flexDirection:"column", gap:"22px" } },
      h("div", { class:"paper panel" }, h("h2", null, "The lesson at a glance"), h("table", { class:"seq" }, h("tbody", null, L.plan.sequence.map(r => { const td = h("td"); td.innerHTML = BM.md(r[2]); return h("tr", null, h("td", null, r[0]), h("td", { style:{ fontWeight:"700", whiteSpace:"nowrap" } }, r[1]), td); })))),
      h("div", { class:"paper panel" }, h("h2", null, "Choose Your Path"), ...L.paths.map(p => h("p", { style:{ margin:"6px 0" } }, h("b", { style:{ fontFamily:"var(--f-label)", letterSpacing:".08em", color:"var(--cochineal)" } }, `${p.id} · ${p.name.toUpperCase()} — `), p.product, " ", h("a", { class:"btn sm", href:`#/doc/path/${id}/${p.id}`, style:{ fontSize:"12px", marginLeft:"6px" } }, "🖨 Print card"))), h("p", { style:{ margin:"10px 0 0", fontSize:"15px" } }, "Each card gives students detailed steps, a word bank, where to find information and what good work looks like. Print only the paths students choose, or ", h("a", { href:`#/doc/paths/${id}` }, "all three"), ".")),
      h("div", { class:"paper panel" }, h("h2", null, "Slides"), h("div", { style:{ display:"flex", flexWrap:"wrap", gap:"8px" } }, L.slides.map((sl, i) => h("a", { class:"btn sm", href:`#/present/${id}/${i}`, style:{ fontSize:"12px" } }, `${i+1} · ${(BM.PHASES.find(p => p.id === sl.phase)||{}).icon || ""} ${sl.title || sl.label || ({ transmission:"Dispatch", glyphcheck:"Waystation Check", glyphwall:"Map Wall", protocol:"Caravan Code", lisc:"LI & SC", paths:"Choose Your Path", lens:"Through the Lens", decode:"Waystation Clue", exit:"Exit", folioseal:"Seal Fragment", intercept:"Shadow's Note", discussion:"Turn & Talk", sayitright:"Say it right", teams:"Teams" })[sl.type] || sl.type}`)))));
    const right = h("div", { style:{ display:"flex", flexDirection:"column", gap:"22px" } },
      h("div", { class:"paper panel" }, h("h2", null, `Prep · ${L.prep.min} min`), prepList),
      L.safety && L.safety.length ? h("div", { class:"paper panel", style:{ boxShadow:"inset 6px 0 0 #B4412F, var(--sh-2)" } }, h("h2", null, "⚠️ Safety"), h("ul", null, L.safety.map(x => h("li", null, x)))) : null,
      h("div", { class:"paper panel" }, h("h2", null, "Key vocabulary"), h("ul", null, L.vocab.map(v => h("li", null, h("b", null, v.w), v.say ? ` (${v.say})` : "", " — ", v.def)))),
      h("div", { class:"paper panel" }, h("h2", null, `${BM.PILLARS[L.lens.pillar].icon} Through the Lens`), h("p", { style:{ margin:"0 0 6px" } }, h("b", null, L.lens.ref), " — ", h("i", null, L.lens.paraphrase)), h("p", { style:{ margin:0 } }, L.lens.talk[0].q)),
      h("div", { class:"paper panel" }, h("h2", null, "Curriculum"), h("p", { style:{ margin:"0 0 6px" } }, L.codes.join(" · ")), h("p", { style:{ margin:0, fontSize:"15px" } }, L.coverage)));
    const ls = ((BM.SOURCES || {})[L.week] || []).filter(x => x.day === L.day || x.day === "all");
    if (ls.length) right.appendChild(h("div", { class:"paper panel src-panel" }, h("h2", null, "🔗 Sources"), sourcesList(ls), h("a", { href:`#/week/${L.week}`, class:"src-note" }, "All Week " + L.week + " sources →")));
    wrap.appendChild(h("div", { class:"lesson-grid" }, left, right));
    page.appendChild(wrap);
    return page;
  }

  /* ---------- QUICK-MARK ---------- */
  function mark(id){
    const L = BM.presenter.lessonById(id);
    const page = h("div"); page.appendChild(topbar("week"));
    const wrap = h("div", { class:"wrap" });
    const key = "marks:" + id;
    const studs = BM.students(), who = studs.length ? studs : BM.teams().map(t => t.name);
    wrap.appendChild(h("div", { class:"week-head", style:{ gridTemplateColumns:"1fr" } }, h("div", null, h("div", { class:"kicker" }, `Quick-Mark · ${BM.SUBJECTS[L.subject].name} · Week ${L.week}`), h("h1", { class:"display", style:{ fontSize:"clamp(40px,5vw,76px)" } }, L.title), h("p", { class:"story" }, studs.length ? "Tap a level for each criterion. Saved on this computer only." : "No class list yet, so you're marking by team. Add names in Settings to mark individuals."))));
    const data = BM.store.get(key, {});
    const save = () => BM.store.set(key, data);
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
      h("button", { class:"btn gold", onclick:() => BM.download(`${id}-marks.csv`, toCSV(), "text/csv") }, "Export CSV"),
      h("a", { class:"btn", href:`#/doc/marks/${id}` }, BM.icon("pdf"), "Assessment record PDF"),
      h("a", { class:"btn", href:`#/doc/rubric/${id}` }, "View rubric"),
      h("a", { class:"btn ghost", href:`#/lesson/${id}` }, "Back to lesson")));
    wrap.appendChild(h("div", { class:"paper panel", style:{ overflowX:"auto" } }, h("div", { style:{ display:"flex", gap:"16px", marginBottom:"10px", fontSize:"14px" } }, h("span", null, h("b", { style:{ color:"#C98A3A" } }, "D"), " Developing"), h("span", null, h("b", { style:{ color:"#4F7A35" } }, "A"), " Achieved"), h("span", null, h("b", { style:{ color:"#3D8DB3" } }, "F"), " Flying")), table));
    page.appendChild(wrap);
    return page;
  }

  /* ---------- SETTINGS ---------- */
  function settings(){
    const st = BM.settings();
    const page = h("div"); page.appendChild(topbar("settings"));
    const wrap = h("div", { class:"wrap" });
    wrap.appendChild(h("div", { class:"week-head", style:{ gridTemplateColumns:"1fr" } }, h("div", null, h("div", { class:"kicker" }, "Class setup"), h("h1", { class:"display" }, "Settings"), h("p", { class:"story" }, "Everything here is saved only in this browser on this computer. Nothing is sent anywhere."))));
    const f = (lab, key, ph) => h("label", { class:"f" }, lab, h("input", { class:"t", value:st[key] || "", placeholder:ph || "", oninput:(e) => { st[key] = e.target.value; BM.saveSettings(st); } }));
    const tg = (lab, key, after) => { const b = h("button", { class:"toggle" + (st[key] ? " on" : ""), onclick:() => { st[key] = !st[key]; BM.saveSettings(st); b.classList.toggle("on", st[key]); after && after(st[key]); } }); return h("div", { class:"toggle-row" }, b, h("span", null, lab)); };
    wrap.appendChild(h("div", { class:"paper panel" }, h("h2", null, "Printed on lesson plans"), h("div", { class:"form-grid" }, f("School", "school", "e.g. your school name"), f("Class", "className", "Room 14"), f("Teacher", "teacher", "Your name"), f("Year", "year", "2027"), f("Term", "term", "Term 1"), f("Term start date", "termStart", "YYYY-MM-DD"))));
    const tnames = BM.store.get("teamNames", {});
    const teamBox = h("div", { class:"form-grid", style:{ marginTop:"10px" } });
    const drawTeams = () => { BM.clear(teamBox); BM.DEFAULT_TEAMS.slice(0, st.teamCount).forEach(t => teamBox.appendChild(h("label", { class:"f" }, h("span", { style:{ color:t.color } }, "● " + t.name), h("input", { class:"t", value:tnames[t.id] || t.name, oninput:(e) => { tnames[t.id] = e.target.value; BM.store.set("teamNames", tnames); } })))); };
    const cnt = h("select", { class:"t", onchange:(e) => { st.teamCount = +e.target.value; BM.saveSettings(st); drawTeams(); } }, [2,3,4,5,6,7,8].map(n => h("option", { value:n, selected: n === (st.teamCount|0) ? "selected" : null }, `${n} teams`)));
    drawTeams();
    wrap.appendChild(h("div", { class:"paper panel", style:{ marginTop:"20px" } }, h("h2", null, "Caravan Teams"), h("label", { class:"f", style:{ maxWidth:"220px" } }, "Number of teams", cnt), teamBox));
    wrap.appendChild(h("div", { class:"paper panel", style:{ marginTop:"20px" } }, h("h2", null, "Class list (optional)"), h("p", { style:{ marginTop:0 } }, "One name per line. Used by the random picker and Quick-Mark. Stored only on this computer."), h("textarea", { class:"t", style:{ width:"100%" }, oninput:(e) => { st.students = e.target.value; BM.saveSettings(st); } }, st.students || "")));
    wrap.appendChild(h("div", { class:"paper panel", style:{ marginTop:"20px" } }, h("h2", null, "Presenting"),
      tg("Sound effects (wind, camel bell, clay thunk, chime — synthesised)", "sound"),
      tg("Motion & animation (turn off for a calmer, reduced-motion version)", "motion", on => document.documentElement.classList.toggle("reduce-motion", !on))));
    /* ---- Images still to make: hides each one as soon as its file exists in assets/img ---- */
    const imgBox = h("div"), imgHead = h("p", { style:{ marginTop:0 } });
    const copy = (text, label) => { const done = () => BM.toast(label + " copied"); if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, () => fallbackCopy(text, done)); else fallbackCopy(text, done); };
    const fallbackCopy = (text, done) => { const ta = h("textarea", { style:{ position:"fixed", left:"-9999px" } }, text); document.body.appendChild(ta); ta.select(); try { document.execCommand("copy"); done(); } catch(e){ BM.toast("Couldn't copy: select the text and copy it"); } ta.remove(); };
    const probe = file => new Promise(res => { const im = new Image(); im.onload = () => res(true); im.onerror = () => res(false); im.src = `assets/img/${file}.webp?c=${Date.now()}`; });
    const drawImages = () => {
      imgHead.textContent = "Checking which images are already in the folder…"; BM.clear(imgBox);
      Promise.all((BM.IMAGES_TODO || []).map(it => probe(it.file).then(ok => ok ? null : it))).then(list => {
        const todo = list.filter(Boolean);
        imgHead.textContent = todo.length ? `${todo.length} of ${BM.IMAGES_TODO.length} still to make. Add each file to assets/img with the exact name shown; it disappears from this list once the app can find it (press Recheck after adding).` : "All the images are in. Nothing left to make. 🎉";
        todo.forEach(it => imgBox.appendChild(h("div", { class:"paper", style:{ marginTop:"12px", padding:"14px 16px", borderRadius:"10px" } },
          h("div", { style:{ display:"flex", gap:"10px", alignItems:"baseline", flexWrap:"wrap" } }, h("strong", null, it.title), h("code", null, it.file + ".webp")),
          h("div", { style:{ fontSize:"14px", margin:"2px 0 8px", opacity:".8" } }, "Used in: " + it.where),
          h("div", { style:{ fontSize:"14px", lineHeight:"1.45", marginBottom:"8px" } }, it.prompt),
          h("div", { class:"week-actions", style:{ margin:0 } },
            h("button", { class:"btn gold", onclick:() => copy(BM.IMAGE_STYLE_LOCK + "\n\n" + it.prompt, "Prompt with style lock") }, "Copy prompt + style lock"),
            h("button", { class:"btn", onclick:() => copy(it.prompt, "Prompt") }, "Copy prompt only"),
            h("button", { class:"btn", onclick:() => copy(it.file, "File name") }, "Copy file name")))));
      });
    };
    drawImages();
    wrap.appendChild(h("div", { class:"paper panel", style:{ marginTop:"20px" } }, h("h2", null, "Images still to make"), imgHead,
      h("div", { class:"week-actions", style:{ margin:"0 0 4px" } }, h("button", { class:"btn gold", onclick:() => copy(BM.IMAGE_STYLE_LOCK, "Style lock") }, "Copy style lock"), h("button", { class:"btn", onclick:drawImages }, "Recheck")),
      h("p", { style:{ fontSize:"14px", opacity:".8" } }, "Tip: attach one existing animal picture (such as animal-01) as a style reference, ask for portrait 2:3, then save as WebP at about 1024 × 1536."), imgBox));
    const fileIn = h("input", { type:"file", accept:".json", style:{ display:"none" }, onchange:(e) => { const file = e.target.files[0]; if (!file) return; file.text().then(t => { try { BM.store.load(JSON.parse(t)); BM.toast("Backup restored"); setTimeout(() => location.reload(), 600); } catch(err){ BM.toast("That file isn't a Royal Road backup"); } }); } });
    let armed = false;
    wrap.appendChild(h("div", { class:"paper panel", style:{ marginTop:"20px" } }, h("h2", null, "Backup & reset"),
      h("div", { class:"week-actions", style:{ margin:0 } },
        h("button", { class:"btn gold", onclick:() => BM.download("royal-road-backup.json", JSON.stringify(BM.store.dump(), null, 1), "application/json") }, "Export backup"),
        h("button", { class:"btn", onclick:() => fileIn.click() }, "Import backup"), fileIn,
        h("button", { class:"btn ghost", style:{ color:"var(--cochineal)", boxShadow:"inset 0 0 0 1.5px var(--cochineal)" }, onclick:(e) => { if (!armed){ armed = true; e.target.textContent = "Click again to confirm reset"; return; } ["clues","folios","glyphwall","cacao"].forEach(k => BM.store.del(k)); BM.toast("Progress reset (clues, Seal fragments, map wall, darics)"); e.target.textContent = "Reset term progress"; armed = false; } }, "Reset term progress"))));
    page.appendChild(wrap);
    return page;
  }

  /* ---------- router ---------- */
  function route(){
    const hash = location.hash || "#/";
    const parts = hash.replace(/^#\/?/, "").split("/");
    if (parts[0] === "present"){
      BM.clear(app);
      BM.presenter.open(parts[1], +parts[2] || 0, { audience });
      return;
    }
    if (BM.presenter.active()) BM.presenter.close(true);
    BM.clear(app);
    window.scrollTo(0, 0);
    let view;
    if (parts[0] === "week") view = week(+parts[1] || 1);
    else if (parts[0] === "lesson") view = lesson(parts[1]);
    else if (parts[0] === "mark") view = mark(parts[1]);
    else if (parts[0] === "settings") view = settings();
    else if (parts[0] === "doc"){
      const kind = parts[1], id = parts[2];
      let pages = [], name = "royal-road";
      const L = id ? BM.presenter.lessonById(id) : null;
      if (kind === "plan" && L){ pages = BM.docs.plan(L); name = `${id}-lesson-plan`; }
      else if (kind === "rubric" && L){ pages = BM.docs.rubric(L); name = `${id}-rubric`; }
      else if (kind === "rubric-student" && L){ pages = BM.docs.rubricStudent(L); name = `${id}-student-rubric`; }
      else if (kind === "paths" && L){ pages = BM.docs.pathCards(L); name = `${id}-path-cards`; }
      else if (kind === "path" && L){ pages = BM.docs.pathCard(L, (parts[3] || "A").toUpperCase()); name = `${id}-path-${(parts[3] || "A").toUpperCase()}`; }
      else if (kind === "weekpaths"){ pages = BM.docs.weekPaths(+id || 1); name = `week-${id}-path-cards`; }
      else if (kind === "marks" && L){ pages = BM.docs.marks(L); name = `${id}-assessment-record`; }
      else if (kind === "week"){ pages = BM.docs.week(+id || 1); name = `week-${id}-pack`; }
      else { pages = BM.docs.unit(); name = "royal-road-unit-plan"; }
      BM.docs.show(app, pages, name);
      document.title = name + " · The Royal Road";
      return;
    }
    else view = hub();
    document.title = "The Royal Road · Persia";
    app.appendChild(view);
    BM.$$(".day-card, .week-tile, .doc-card, .panel", app).forEach((el, i) => BM.motionOK() && el.animate([{ opacity:0, transform:"translateY(24px)" }, { opacity:1, transform:"none" }], { duration:700, delay:60 + i*45, easing:"cubic-bezier(.2,.8,.2,1)", fill:"backwards" }));
  }
  window.addEventListener("hashchange", route);
  route();
})(window.BM);
