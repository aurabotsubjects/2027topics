/* ==========================================================
   DOCUMENTS — lesson plans, rubrics, unit plan, week pack
   Generated from the same lesson data as the slides.
   Print → "Save as PDF", or one-click download (html2pdf).
   ========================================================== */
(function(FC){
  "use strict";
  const h = FC.h;
  const D = FC.docs = {};
  const DAYNAMES = { mon:"Monday", tue:"Tuesday", wed:"Wednesday", thu:"Thursday", fri:"Friday" };
  const DOC_COL = { history:"#1F7A5A", geography:"#1E7E95", science:"#1B6E86", technology:"#A4532A", art:"#B3262E" };

  function header(L, kind){
    const st = FC.settings(), S = FC.SUBJECTS[L.subject];
    return h("div", { class:"doc-hdr" },
      h("div", { class:"l" },
        h("span", { class:"subjtag" }, `${S.name} · ${kind}`),
        h("h1", null, L.title),
        h("div", { class:"sub" }, `The Fifth Codex · Week ${L.week} · ${DAYNAMES[L.day]} · ${L.duration || 50} minutes · Years 5–6`)),
      h("div", { class:"r" },
        h("div", null, h("b", null, "School "), st.school || h("span", { class:"line" })),
        h("div", null, h("b", null, "Class "), st.className || h("span", { class:"line" })),
        h("div", null, h("b", null, "Teacher "), st.teacher || h("span", { class:"line" })),
        h("div", null, h("b", null, "Date "), h("span", { class:"line" }))));
  }
  const sec = (title, ...kids) => h("div", { class:"doc-sec" }, h("h2", null, title), ...kids);
  const md = t => { const sp = h("span"); sp.innerHTML = FC.md(t); return sp; };
  const ul = arr => h("ul", null, arr.map(x => h("li", null, md(x))));
  const foot = (L, n) => h("div", { class:"doc-foot" }, h("span", null, `The Fifth Codex · ${L.id}`), h("span", null, "Soli Deo Gloria"), h("span", null, n));

  /* ---------- SOURCES helpers ---------- */
  const CHECKED = "October 2026";
  const kindTag = url => h("span", { class:"src-k" }, FC.srcKind ? FC.srcKind(url) : "Source");
  function srcTable(list, withDay){
    return h("table", { class:"dt src-t" },
      h("thead", null, h("tr", null, withDay ? h("th", { style:{ width:"9%" } }, "Day") : null, h("th", { style:{ width:"17%" } }, "Type"), h("th", null, "Source & web address"), h("th", { style:{ width:"30%" } }, "Backs up"))),
      h("tbody", null, list.map(x => h("tr", null,
        withDay ? h("td", { class:"ph" }, ({ mon:"Mon", tue:"Tue", wed:"Wed", thu:"Thu", fri:"Fri", all:"All" })[x.day]) : null,
        h("td", null, kindTag(x.url)),
        h("td", null, h("a", { href:x.url, target:"_blank", rel:"noopener" }, h("b", null, x.t)), " — " + x.by, h("div", { class:"src-u" }, x.url)),
        h("td", null, x.fact || "")))));
  }
  const PROVENANCE = "These materials were drafted with the help of an AI assistant (Claude, by Anthropic). The facts taught are backed by the published sources listed — museums, government and official bodies, universities and encyclopaedias first; Wikipedia only as a starting point alongside a stronger source. Expedition story elements (the codex, the characters, the Collector) are fiction and are labelled 🟡 Story on the slides; real evidence is labelled 🟢. Scripture is paraphrased for Years 5–6. Links checked " + CHECKED + ".";

  /* ---------- LESSON PLAN ---------- */
  D.plan = function(L){
    const P = L.plan, pages = [];
    const p1 = h("div", { class:"page" }); p1.style.setProperty("--dc", DOC_COL[L.subject]);
    p1.append(header(L, "Lesson Plan"), h("div", { class:"doc-strip" }));
    p1.appendChild(h("div", { class:"two" },
      sec("Curriculum links", h("div", { class:"codes" }, L.codes.map(c => h("span", { title:FC.TERM.codes[c] || "" }, c))), h("p", { style:{ marginTop:"4px", fontSize:"8.6pt" } }, md(P.curriculumNote || L.codes.map(c => FC.TERM.codes[c]).filter(Boolean).slice(0,2).join(" ")))),
      sec("2027 required-content coverage", h("p", null, md(L.coverage)), h("p", { style:{ fontSize:"8.6pt", color:"#6b5444" } }, "Key competencies: " + (P.kc || []).join(" · ")))));
    p1.appendChild(sec("Learning intention & success criteria", h("div", { class:"li-box" },
      h("p", null, h("b", null, "LI  "), L.li),
      h("p", { style:{ margin:"3px 0 1px" } }, h("b", null, "SC  "), "I can…"),
      h("ul", null, L.sc.map(x => h("li", null, x.replace(/^I can /, "")))))));
    p1.appendChild(h("div", { class:"two" },
      sec("Key vocabulary", h("div", { class:"vocab" }, L.vocab.map(v => h("div", null, h("b", null, v.w), v.say ? h("i", null, ` (${v.say})`) : "", " — ", v.def)))),
      sec("Prior knowledge & resources", h("p", null, md(P.prior)), h("p", null, h("b", null, `Prep (${L.prep.min} min): `), L.prep.items.join(" · ")))));
    p1.appendChild(sec("Lesson sequence (50 minutes)", h("table", { class:"dt" },
      h("thead", null, h("tr", null, h("th", null, "Time"), h("th", null, "Phase"), h("th", null, "Teacher"), h("th", null, "Students"))),
      h("tbody", null, P.sequence.map(r => h("tr", null, h("td", { class:"t" }, r[0]), h("td", { class:"ph" }, r[1]), h("td", null, md(r[2])), h("td", null, md(r[3]))))))));
    p1.appendChild(foot(L, "page 1"));
    pages.push(p1);
    const p2 = h("div", { class:"page" }); p2.style.setProperty("--dc", DOC_COL[L.subject]);
    p2.append(header(L, "Lesson Plan (cont.)"), h("div", { class:"doc-strip" }));
    p2.appendChild(sec("Choose Your Path — student agency (same LI, three ways to show it)", h("table", { class:"dt" },
      h("thead", null, h("tr", null, h("th", null, "Path"), h("th", null, "Product"), h("th", null, "Steps"), h("th", null, "Flying challenge"))),
      h("tbody", null, L.paths.map(p => h("tr", null, h("td", { class:"ph" }, `${p.id} · ${p.name}`), h("td", null, p.product), h("td", null, md(p.steps.join(" → "))), h("td", null, p.flying)))))));
    p2.appendChild(sec("Differentiation", h("div", { class:"two" },
      h("div", null, h("p", null, h("b", null, "Supported: "), md(P.diff.supported)), h("p", null, h("b", null, "ESOL: "), md(P.diff.esol))),
      h("div", null, h("p", null, h("b", null, "Learning support: "), md(P.diff.learning)), h("p", null, h("b", null, "Flying / extension: "), md(P.diff.flying))))));
    p2.appendChild(h("div", { class:"two" },
      sec("Assessment for learning", h("p", null, h("b", null, "Look for: ")), ul(P.assess.lookFor), h("p", { style:{ marginTop:"3px" } }, h("b", null, "Evidence: "), P.assess.evidence.join(" · ")), h("p", null, h("b", null, "Rubric: "), "Developing / Achieved / Flying (see lesson rubric).")),
      sec("Christian lens — " + FC.PILLARS[L.lens.pillar].name + " (" + FC.PILLARS[L.lens.pillar].en + ")", h("div", { class:"lens-box" },
        h("p", null, h("b", null, "Look closer: "), md(L.lens.look)),
        h("p", null, h("b", null, "Open the Word: "), L.lens.ref, " — ", h("i", null, "“" + L.lens.paraphrase + "” (paraphrase)")),
        h("p", null, h("b", null, "Talk it through: ")), ul(L.lens.talk.map(t => `${t.q} *Listen for:* ${t.listen}`)),
        h("p", null, h("b", null, "Live it out: "), md(L.lens.live))))));
    p2.appendChild(h("div", { class:"two" },
      sec("Hononga Aotearoa (NZ / Te Tiriti connection)", h("p", null, md(L.hononga))),
      sec("Safety & wellbeing", L.safety && L.safety.length ? ul(L.safety) : h("p", null, "No specific hazards. Usual classroom routines."))));
    p2.appendChild(sec("Mystery thread", h("p", null, h("b", null, "Glyph Clue: "), L.clue.prompt, " ", h("b", null, `Answer: ${L.clue.answer}.`), " ", L.clue.explain || "")));
    p2.appendChild(sec("Teaching as inquiry — after the lesson", ul(P.inquiry), h("div", { class:"reflect-box", style:{ marginTop:"5px" } }, "Reflection & next steps:")));
    p2.appendChild(foot(L, "page 2"));
    pages.push(p2);
    const p3 = h("div", { class:"page" }); p3.style.setProperty("--dc", DOC_COL[L.subject]);
    p3.append(header(L, "Lesson Plan — Sources & evidence"), h("div", { class:"doc-strip" }));
    const ls = FC.srcForLesson ? FC.srcForLesson(L) : [];
    p3.appendChild(sec("Where this lesson's information comes from", ls.length ? srcTable(ls, false) : h("p", null, "See the Week " + L.week + " sources page in the Week Pack.")));
    p3.appendChild(h("div", { class:"two" },
      sec("Scripture used (Through the Lens)", h("p", null, h("b", null, L.lens.ref), " — paraphrased for Years 5–6. Read the passage from the school's Bible version before the lesson."), h("p", { class:"src-u" }, "https://www.biblegateway.com/passage/?search=" + encodeURIComponent(L.lens.ref))),
      sec("Curriculum source", h("p", null, "Codes and coverage: " + L.codes.join(" · ") + ". Science & Social Sciences: new NZ curriculum content (required from 2027). Technology & The Arts: NZC (2007), Level 3. Full links in the Unit Plan."), h("p", { class:"src-u" }, "https://newzealandcurriculum.tahurangi.education.govt.nz"))));
    p3.appendChild(sec("How this lesson was made", h("p", { style:{ fontSize:"8.8pt" } }, PROVENANCE), h("p", { style:{ fontSize:"8.8pt" } }, "Story (fiction) in this lesson: the Field Transmission, the Glyph Clue and the Collector thread. Everything in Excavate, the Hononga and the rubric is real content and is covered by the sources above.")));
    p3.appendChild(sec("Teacher check", h("div", { class:"reflect-box", style:{ minHeight:"16mm" } }, "Facts checked against sources by: ____________________   Date: __________   Notes:")));
    p3.appendChild(foot(L, "page 3 · sources"));
    pages.push(p3);
    return pages;
  };

  /* ---------- RUBRIC (teacher) ---------- */
  D.rubric = function(L){
    const pg = h("div", { class:"page" }); pg.style.setProperty("--dc", DOC_COL[L.subject]);
    pg.append(header(L, "Assessment Rubric"), h("div", { class:"doc-strip" }));
    pg.appendChild(sec("Learning intention", h("p", null, L.li)));
    pg.appendChild(h("div", { class:"lvl-key" }, h("span", { style:{ background:"#B9772D" } }, "🌱 DEVELOPING — on the way, with support"), h("span", { style:{ background:"#1F7A5A" } }, "🌽 ACHIEVED — secure, independent (expected level)"), h("span", { style:{ background:"#2A8C9C" } }, "🦅 FLYING — explains why, connects, applies")));
    pg.appendChild(h("table", { class:"rub" },
      h("thead", null, h("tr", null, h("th", { class:"c0" }, "Criterion (curriculum)"), h("th", { class:"cd" }, "🌱 Developing"), h("th", { class:"ca" }, "🌽 Achieved"), h("th", { class:"cf" }, "🦅 Flying"))),
      h("tbody", null, L.rubric.map(r => h("tr", null,
        h("td", { class:"crit" }, r.c, h("small", null, r.code)),
        ...["d","a","f"].map(k => h("td", null, md(r[k][0]), h("span", { class:"ex" }, md("e.g. " + r[k][1])))))))));
    pg.appendChild(sec("How to use", h("p", null, "Use during Choose Your Path (roam with this sheet or the app's Quick-Mark) and at the exit self-assessment. Every path (A, B, C) is judged against the same criteria, so choice never lowers expectations. Record evidence (photo, quote, product) and note next steps below.")));
    pg.appendChild(h("div", { class:"two" }, sec("Evidence seen", h("div", { class:"reflect-box" }, " ")), sec("Next teaching steps", h("div", { class:"reflect-box" }, " "))));
    pg.appendChild(foot(L, "teacher rubric"));
    return [pg];
  };

  /* ---------- PATH CARDS (student handouts, one per path) ---------- */
  const PATH_COL = { A:"#2E9FB0", B:"#C46A3A", C:"#B3262E" };
  const KIND = {
    write: {
      ready:"Open your Expedition Journal to a clean page. Write the date and the title of your product at the top. Have a pencil, ruler and colouring pencils ready.",
      tips:["Look back at the slides and your notes first. Underline the key facts you will use.", "Write in full sentences. Use at least two words from the word bank.", "Read it back to yourself. Does it make sense? Check the spelling of the key words."],
      share:"Hand your journal to your teacher, or swap with a partner and give each other one ‘warm’ and one ‘cool’.",
      starters:["I learned that… because…", "This shows that…", "One reason is… Another reason is…", "I know this because the source says…", "In conclusion…"] },
    make: {
      ready:"Collect your materials and find a clear space to work. Do a quick sketch of your plan before you start making.",
      tips:["Plan first: a quick labelled sketch saves time later.", "Work carefully and neatly. Label the important parts so someone else can understand it.", "Check or test it. Does it clearly show what you learned? Fix one thing to make it better."],
      share:"Put your name on it. Be ready to explain it to your teacher in one or two sentences.",
      starters:["My model shows…", "This part is the… It does…", "I chose… because…", "If I made it again, I would…"] },
    speak: {
      ready:"Find your partner or group. Decide who will say each part. Get a small card or a page in your journal for notes.",
      tips:["Jot down 3–5 key points as dot points. Don't write a whole script.", "Practise out loud at least twice. Time yourselves.", "Speak clearly and slowly, look at your audience, and use the word-bank words."],
      share:"Present to your group, another team or the class when your teacher calls you.",
      starters:["Today we're going to tell you about…", "The most important thing to know is…", "We know this because…", "Here's an example…", "Does anyone have a question?"] },
    test: {
      ready:"Draw a results table in your journal before you start (what you're testing · result · notes).",
      tips:["Test every item the same way so it's a fair test.", "Write each result in your table straight away — don't rely on memory.", "Give feedback that is kind and specific: one ‘warm’ (what works) and one ‘cool’ (what to improve)."],
      share:"Report your results and feedback to the team you tested and to your teacher.",
      starters:["Test 1: … Result: …", "It worked / didn't work because…", "Warm: I liked how… Cool: Next time you could…"] }
  };
  const kindOf = p => /tester|fixer/i.test(p.name) ? "test" : ({ A:"write", B:"make", C:"speak" })[p.id] || "make";
  const box = () => h("span", { class:"pc-box" });
  const isTeacherPrep = t => /^(read|print|check|test|set up|charge|preview|optional: print|have ready the|photocopy)/i.test(t);

  const liToGoal = li => { const r = li.replace(/^We are learning\s+/i, "").replace(/\.$/, "");
    if (/^to /i.test(r)) return "you can " + r.slice(3);
    if (/^about /i.test(r)) return "you have learned about " + r.slice(6);
    return "you understand " + r; };
  D.pathCard = function(L, pid){
    const p = L.paths.find(x => x.id === pid) || L.paths[0];
    const K = KIND[kindOf(p)], col = PATH_COL[p.id] || "#5A3825";
    const pg = h("div", { class:"page pc" }); pg.style.setProperty("--dc", col);
    pg.appendChild(h("div", { class:"doc-hdr pc-hdr" },
      h("div", { class:"pc-letter" }, p.id),
      h("div", { class:"l" },
        h("span", { class:"subjtag" }, `Path ${p.id} · ${p.name}`),
        h("h1", null, p.product),
        h("div", { class:"sub" }, `${L.title} · Week ${L.week} · ${DAYNAMES[L.day]} · ${FC.SUBJECTS[L.subject].name}`)),
      h("div", { class:"r" }, h("div", null, h("b", null, "Name "), h("span", { class:"line" })), h("div", null, h("b", null, "Team "), h("span", { class:"line" })), h("div", null, h("b", null, "Date "), h("span", { class:"line" })))));
    pg.appendChild(h("div", { class:"doc-strip" }));
    pg.appendChild(h("div", { class:"pc-mission" }, h("b", null, "Your mission: "), "create your ", h("b", null, p.product), ". This shows that ", liToGoal(L.li), "."));
    // step by step
    const steps = [];
    steps.push([h("b", null, "Get ready. "), K.ready]);
    p.steps.forEach((st, i) => steps.push([md(st), h("div", { class:"pc-tip" }, "💡 ", K.tips[Math.min(i, K.tips.length-1)])]));
    steps.push([h("b", null, "Check your work. "), "Tick each ‘I can’ below. If you can't tick one yet, go back and add to your work."]);
    steps.push([h("b", null, "Share it. "), K.share]);
    pg.appendChild(sec("Step by step", h("ol", { class:"pc-steps" }, steps.map(kids => h("li", null, box(), h("div", null, ...kids))))));
    pg.appendChild(h("div", { class:"two" },
      sec("I can… (success criteria)", h("ul", { class:"pc-checks" }, L.sc.map(x => h("li", null, box(), x)))),
      sec("🦅 Flying challenge", h("p", null, md(p.flying)), h("p", { class:"pc-small" }, "Finished early and everything is ticked? Try this to stretch your thinking."))));
    // where to find information
    const info = L.slides.map((sl, i) => ({ sl, i })).filter(o => o.sl.phase === "excavate" && /content|interactive|cards|hononga|brief|safety|discussion/.test(o.sl.type))
      .map(o => `Slide ${o.i + 1}: ${o.sl.title || o.sl.kicker || "today's lesson"}`);
    const srcs = FC.srcForLesson ? FC.srcForLesson(L).slice(0, 4) : [];
    const mats = (L.prep.items || []).filter(t => !isTeacherPrep(t));
    pg.appendChild(sec("Where to find the information you need",
      h("ul", { class:"pc-where" },
        h("li", null, h("b", null, "Today's slides "), "(ask your teacher to show one again): ", info.length ? info.join(" · ") : "the Excavate slides"),
        h("li", null, h("b", null, "Your Expedition Journal: "), "the notes and drawings you made in today's lesson and earlier weeks."),
        p.id === "B" && mats.length ? h("li", null, h("b", null, "Materials "), "(your teacher has these ready): ", mats.join(" · ")) : null,
        srcs.length ? h("li", null, h("b", null, "Trusted sources "), "(on a class device, with your teacher): ", h("span", { class:"pc-src" }, ...srcs.map((x, i) => h("span", null, (i ? " · " : ""), h("i", null, x.t), ` (${x.by}) `, h("span", { class:"src-u", style:{ display:"inline" } }, FC.srcHost ? FC.srcHost(x.url) : x.url))))) : null,
        h("li", null, h("b", null, "People: "), "ask 3 before me — your partner, your team, another team — then your teacher."))));
    pg.appendChild(sec("Word bank", h("div", { class:"vocab pc-vocab" }, L.vocab.map(v => h("div", null, h("b", null, v.w), v.say ? h("i", null, ` (${v.say})`) : "", " — ", v.def)))));
    pg.appendChild(h("div", { class:"two" },
      sec("Need help? Sentence starters", h("p", { class:"pc-starters" }, K.starters.map(x => "“" + x + "”").join("  ·  ")), L.supportedShort ? h("p", { class:"pc-small" }, h("b", null, "Your teacher can also give you: "), L.supportedShort) : null),
      sec("What good work looks like", ...L.rubric.map(r => h("div", { class:"pc-look" }, h("b", null, r.c + ": "), md(r.a[0]), " ", h("span", { class:"pc-ex" }, md("e.g. " + r.a[1])))))));
    pg.appendChild(h("div", { class:"doc-foot" }, h("span", null, `The Fifth Codex · ${L.id} · Path ${p.id}`), h("span", null, "Soli Deo Gloria"), h("span", null, "path card")));
    return [pg];
  };
  D.pathCards = L => L.paths.flatMap(p => D.pathCard(L, p.id));
  D.weekPaths = function(n){ const W = FC.WEEKS[n]; return W ? W.lessons.flatMap(L => D.pathCards(L)) : []; };

  /* ---------- RUBRIC (student) ---------- */
  D.rubricStudent = function(L){
    const pg = h("div", { class:"page" }); pg.style.setProperty("--dc", DOC_COL[L.subject]);
    pg.append(h("div", { class:"doc-hdr" }, h("div", { class:"l" }, h("span", { class:"subjtag" }, FC.SUBJECTS[L.subject].name + " · My Rubric"), h("h1", null, L.title), h("div", { class:"sub" }, `Week ${L.week} · ${DAYNAMES[L.day]}`)),
      h("div", { class:"r" }, h("div", null, h("b", null, "Name "), h("span", { class:"line", style:{ minWidth:"45mm" } })), h("div", null, h("b", null, "Path I chose "), "A  ·  B  ·  C"))), h("div", { class:"doc-strip" }));
    pg.appendChild(sec("We are learning to…", h("p", { style:{ fontSize:"12pt" } }, L.li.replace(/^We are learning (to )?/i, ""))));
    pg.appendChild(h("p", null, "Tick the box that matches your work for each row. Be honest — this helps you grow!"));
    pg.appendChild(h("table", { class:"rub stu" },
      h("thead", null, h("tr", null, h("th", { class:"c0" }, "Success criterion"), h("th", { class:"cd" }, "🌱 Developing"), h("th", { class:"ca" }, "🌽 Achieved"), h("th", { class:"cf" }, "🦅 Flying"))),
      h("tbody", null, L.rubric.map(r => h("tr", null, h("td", { class:"crit" }, r.c), ...r.i.map(t => h("td", null, t, h("span", { class:"tick" }))))))));
    pg.appendChild(sec("My next step is…", h("div", { class:"comment-lines" }), h("div", { class:"comment-lines" })));
    pg.appendChild(sec("Teacher comment", h("div", { class:"comment-lines" }), h("div", { class:"comment-lines" })));
    pg.appendChild(foot(L, "student rubric"));
    return [pg];
  };

  /* ---------- UNIT PLAN ---------- */
  D.unit = function(){
    const T = FC.TERM, st = FC.settings();
    const mk = () => { const p = h("div", { class:"page" }); p.style.setProperty("--dc", "#5A3825"); return p; };
    const hdr = sub => h("div", { class:"doc-hdr" }, h("div", { class:"l" }, h("span", { class:"subjtag" }, "Unit Plan · Integrated Term Topic"), h("h1", null, "The Fifth Codex — Maya & Aztecs"), h("div", { class:"sub" }, sub)), h("div", { class:"r" }, h("div", null, h("b", null, "School "), st.school || h("span", { class:"line" })), h("div", null, h("b", null, "Class "), st.className || h("span", { class:"line" })), h("div", null, h("b", null, "Teacher "), st.teacher || h("span", { class:"line" })), h("div", null, h("b", null, "Year/Term "), `${st.year || ""} ${st.term || ""}`)));
    const fakeL = { id:"unit-plan" };
    const p1 = mk();
    p1.append(hdr("Years 5–6 · 10 weeks · 5 × 50-minute lessons per week · History, Geography/Social Science, Science, Technology, Visual Art"), h("div", { class:"doc-strip" }));
    p1.appendChild(sec("Rationale & vision", h("p", null, "Students become the expedition team called in to protect a newly discovered (fictional) fifth Maya codex. Each week they unseal one folio by using everything they learn: history to read it, geography to find where it points, science and technology to power and protect the expedition, and art to restore and copy it. All facts taught are real (🟢); the expedition story is clearly labelled fiction (🟡) — a deliberate critical-literacy goal."), h("p", null, "The term is integrated around one context, rich in mystery and problem solving, with student agency in every lesson (Choose Your Path) and Big Projects shown at a whānau exhibition in Week 10.")));
    p1.appendChild(h("div", { class:"two" },
      sec("Big ideas / learning promise", ul(["Tell the story of the Maya and Aztecs from the Olmec to today, using more than one source and perspective.","Read and use maps of Latin America; explain landforms, hazards, biomes, cities, trade and climate, compared with Aotearoa.","Build, draw and explain simple circuits; explain how electricity is generated and used wisely.","Design, build, code and evaluate a working circuit outcome.","Design and make art in Mesoamerican and Latin American traditions; produce a 10-page screenfold codex.","Explain how God's story meets this history — creation, the image of God, time, sacrifice, justice, repentance, every nation."])),
      sec("Christian character — school vision", ul(["**Aroha** — Love: God, others, self, world","**Mōhio** — Know: God, His story and our place in it","**Manaaki** — Serve faithfully with our gifts and talents","**Pānga** — Impact: bringing God's Kingdom to earth","**Soli Deo Gloria** — To God alone the glory"]), h("p", null, "Each lesson's ‘Through the Lens’ (Look closer · Open the Word · Talk it through · Live it out) chooses the one pillar that fits naturally — never tokenistic."))));
    p1.appendChild(sec("Lesson structure (every lesson, 50 minutes)", h("table", { class:"dt" }, h("tbody", null,
      [["0–6","Field Transmission","Story hook · Glyph Check retrieval · LI & SC"],["6–18","Excavate","Teacher-led input through interactive slides, modelling, turn & talk"],["18–38","Choose Your Path","Students choose Path A (write), B (make) or C (speak) to show the LI; teacher roams with the rubric"],["38–45","Through the Lens","Christian lens — four scripted moves"],["45–50","Decode & Exit","Glyph Clue (mystery thread) · self-assessment (Developing/Achieved/Flying) · cacao beans"]].map(r => h("tr", null, h("td", { class:"t" }, r[0]), h("td", { class:"ph" }, r[1]), h("td", null, r[2])))))));
    p1.appendChild(sec("Assessment overview", h("p", null, "Formative every lesson: Glyph Check retrieval, Path products (photographed), Quick-Mark against the lesson rubric, exit self-assessment, Expedition Journal. Summative: Big Projects (Weeks 7–10) assessed with the subject core rubrics; Week 1 vs Week 10 Glyph Wall and circuit concept cartoon show progress. Levels: Developing · Achieved · Flying.")));
    p1.appendChild(foot(fakeL, "unit plan p1"));
    const p2 = mk();
    p2.append(hdr("Ten-week overview"), h("div", { class:"doc-strip" }));
    p2.appendChild(h("table", { class:"dt", style:{ fontSize:"7.6pt" } },
      h("thead", null, h("tr", null, ["Wk","Folio","Mon · History","Tue · Geog / SS","Wed · Science","Thu · Technology","Fri · Art","Lens"].map(x => h("th", null, x)))),
      h("tbody", null, T.weeks.map(w => h("tr", null, h("td", { class:"t" }, w.n), h("td", null, h("b", null, w.folio + " "), w.title), h("td", null, w.lessons.history), h("td", null, w.lessons.geography), h("td", null, w.lessons.science), h("td", null, w.lessons.technology), h("td", null, w.lessons.art), h("td", null, FC.PILLARS[w.pillar].name + " · " + w.text))))));
    p2.appendChild(sec("2027 required content — where it is covered", h("table", { class:"dt" }, h("tbody", null, T.coverage.map(r => h("tr", null, h("td", null, r[0]), h("td", { class:"wide" }, r[1])))))));
    p2.appendChild(h("p", { style:{ fontSize:"8pt", color:"#6b5444" } }, "Science & Social Sciences: new NZ curriculum content required from 2027 (Years 0–8). Technology & The Arts: NZC 2007 Level 3 until 2029. Confirm wording on Tāhūrangi before moderation. Maya & Aztecs is a school-chosen context taught through the required knowledge lenses."));
    p2.appendChild(foot(fakeL, "unit plan p2"));
    const p3 = mk();
    p3.append(hdr("Curriculum code key · safety · resources"), h("div", { class:"doc-strip" }));
    p3.appendChild(sec("Curriculum code key", h("table", { class:"dt" }, h("tbody", null, Object.keys(T.codes).map(k => h("tr", null, h("td", { class:"t" }, k), h("td", null, T.codes[k])))))));
    p3.appendChild(h("div", { class:"two" }, sec("Safety", ul(T.safety)), sec("Term kit (buy once)", ul(T.kit.map(k => `**${k[0]}:** ${k[1]}`)))));
    p3.appendChild(sec("Cultural responsiveness", h("p", null, "Each week includes a Hononga Aotearoa connection (e.g. whakapapa and pūrākau as ways of holding history, maramataka, the kūmara voyage, pounamu, kaitiakitanga, repatriation of taonga). Local iwi/hapū content is checked with the school's Māori lead or Ngāi Tahu / local rūnanga. Maya, Aztec and Latin American peoples are presented as living cultures, respectfully and accurately.")));
    p3.appendChild(foot(fakeL, "unit plan p3"));
    const pages = [p1, p2, p3];
    const p4 = mk();
    p4.append(hdr("Where the content comes from — sources & evidence"), h("div", { class:"doc-strip" }));
    p4.appendChild(sec("How this unit was made", h("p", null, PROVENANCE), h("p", null, "Every lesson plan ends with a page listing the sources for that lesson, and every Week Pack ends with that week's sources. The full list for the term follows this page. In the app, the same links are on each Week page and each lesson page, so they can be opened during a lesson or a review.")));
    p4.appendChild(sec("Source types, most to least authoritative", h("table", { class:"dt" }, h("tbody", null, [
      ["Museum", "Collections and research from museums that hold the objects (e.g. British Museum, The Met, Te Papa, INAH)."],
      ["Government / official", "Government agencies, UNESCO, NOAA, NIWA, NZ Ministry of Education, NZ Legislation."],
      ["University / academic", "University libraries and peer-reviewed or academic publications (e.g. Nature, St Andrews, Cornell)."],
      ["Encyclopaedia", "Edited reference works: Britannica, World History Encyclopedia, Te Ara (NZ Government)."],
      ["Education / organisation", "Established education providers and official documentation (Science Learning Hub, Oak National Academy, Arduino)."],
      ["News / science journalism", "Reporting on research (National Geographic, Phys.org, Eos). Used for recent discoveries."],
      ["Other website (cross-check)", "A few specialist or community sites used for a single detail — cross-check these before relying on them."],
      ["Wikipedia (starting point only)", "Never the only source for a fact — always listed with a stronger source."]
    ].map(r => h("tr", null, h("td", { class:"ph" }, r[0]), h("td", null, r[1])))))));
    p4.appendChild(sec("Curriculum documents", srcTable([
      { t:"Science and Social Sciences released for Years 0–10", by:"NZ Ministry of Education", url:"https://www.education.govt.nz/news/science-and-social-sciences-released-years-0-10", fact:"New required content (from 2027) for Science and Social Sciences" },
      { t:"The New Zealand Curriculum (Tāhūrangi)", by:"NZ Ministry of Education", url:"https://newzealandcurriculum.tahurangi.education.govt.nz", fact:"Learning areas, progressions and achievement objectives" },
      { t:"Introducing Aotearoa New Zealand's Histories", by:"NZ Ministry of Education (Tāhūrangi)", url:"https://newzealandcurriculum.tahurangi.education.govt.nz/introducing-anzh/5637168644.p", fact:"Hononga Aotearoa links; perspectives on first encounters" },
      { t:"Technology in the NZC", by:"NZ Ministry of Education (Tāhūrangi)", url:"https://newzealandcurriculum.tahurangi.education.govt.nz/technology-in-the-nzc/5637203839.p", fact:"Technology strands used on Thursdays" },
      { t:"Technological practice", by:"Technology Online (NZ Ministry of Education)", url:"https://technologyonline.tki.org.nz/Technology-in-the-NZC/Technological-practice", fact:"Briefs, specifications, planning and evaluation" }
    ], false)));
    p4.appendChild(sec("Reviewer sign-off", h("div", { class:"reflect-box", style:{ minHeight:"14mm" } }, "Content reviewed by: ____________________   Role: ______________   Date: __________")));
    p4.appendChild(foot(fakeL, "unit plan · sources"));
    pages.push(p4);
    const all = []; Object.keys(FC.SOURCES || {}).sort((a, b) => a - b).forEach(n => { const ORDER = ["mon","tue","wed","thu","fri","all"]; (FC.srcSorted ? FC.srcSorted(FC.SOURCES[n]) : FC.SOURCES[n]).slice().sort((a, b) => ORDER.indexOf(a.day) - ORDER.indexOf(b.day)).forEach(x => all.push(Object.assign({ wk:n }, x))); });
    const PER = 1000;
    for (let i = 0; i < all.length; i += PER){
      const p = mk(); const chunk = all.slice(i, i + PER);
      p.append(hdr("Term bibliography — every source, Weeks 1–" + chunk[chunk.length-1].wk), h("div", { class:"doc-strip" }));
      p.appendChild(h("table", { class:"dt src-t" },
        h("thead", null, h("tr", null, h("th", { style:{ width:"8%" } }, "Wk/day"), h("th", { style:{ width:"16%" } }, "Type"), h("th", null, "Source & web address"), h("th", { style:{ width:"28%" } }, "Backs up"))),
        h("tbody", null, chunk.map(x => h("tr", null, h("td", { class:"ph" }, `W${x.wk} ${({ mon:"Mon", tue:"Tue", wed:"Wed", thu:"Thu", fri:"Fri", all:"All" })[x.day]}`), h("td", null, kindTag(x.url)),
          h("td", null, h("a", { href:x.url, target:"_blank", rel:"noopener" }, h("b", null, x.t)), " — " + x.by, h("div", { class:"src-u" }, x.url)), h("td", null, x.fact || ""))))));
      p.appendChild(foot(fakeL, "bibliography " + (i/PER + 1)));
      pages.push(p);
    }
    Object.keys(T.coreRubrics).forEach(k => {
      const R = T.coreRubrics[k]; const p = mk();
      p.append(hdr("Core rubric — " + R.title + " (Big Project & reporting)"), h("div", { class:"doc-strip" }));
      p.appendChild(h("table", { class:"rub" }, h("thead", null, h("tr", null, h("th", { class:"c0" }, "Criterion (" + R.codes + ")"), h("th", { class:"cd" }, "🌱 Developing"), h("th", { class:"ca" }, "🌽 Achieved"), h("th", { class:"cf" }, "🦅 Flying"))),
        h("tbody", null, R.rows.map(r => h("tr", null, h("td", { class:"crit" }, r[0]), h("td", null, r[1]), h("td", null, r[2]), h("td", null, r[3]))))));
      p.appendChild(foot(fakeL, "core rubric · " + R.title));
      pages.push(p);
    });
    return pages;
  };

  D.sources = function(n){
    const S = FC.srcSorted ? FC.srcSorted((FC.SOURCES || {})[n] || []) : ((FC.SOURCES || {})[n] || []); if (!S.length) return [];
    const L = FC.WEEKS[n].lessons[0], ORDER = ["mon","tue","wed","thu","fri","all"];
    const sorted = S.slice().sort((a, b) => ORDER.indexOf(a.day) - ORDER.indexOf(b.day));
    const pages = [], PER = 1000;
    for (let i = 0; i < sorted.length; i += PER){
      const pg = h("div", { class:"page" }); pg.style.setProperty("--dc", "#5a3825");
      pg.append(h("div", { class:"doc-hdr" }, h("div", { class:"l" }, h("span", { class:"subjtag" }, "Sources"), h("h1", null, `Week ${n} sources & evidence`), h("div", { class:"sub" }, `The Fifth Codex · Week ${n} · ${FC.TERM.weeks[n-1].title} · click a title to open it`))), h("div", { class:"doc-strip" }));
      if (i === 0) pg.appendChild(h("p", { style:{ fontSize:"8.8pt" } }, PROVENANCE));
      pg.appendChild(srcTable(sorted.slice(i, i + PER), true));
      pg.appendChild(foot(L, "sources" + (sorted.length > PER ? ` ${i/PER + 1}` : "")));
      pages.push(pg);
    }
    return pages;
  };
  D.week = function(n){
    const W = FC.WEEKS[n]; if (!W) return [];
    return [...W.lessons.flatMap(L => [...D.plan(L), ...D.rubric(L)]), ...D.sources(n)];
  };

  /* ---------- Quick-Mark summary ---------- */
  D.marks = function(L){
    const pg = h("div", { class:"page" }); pg.style.setProperty("--dc", DOC_COL[L.subject]);
    pg.append(header(L, "Assessment Record"), h("div", { class:"doc-strip" }));
    const data = FC.store.get("marks:" + L.id, {});
    const who = FC.students().length ? FC.students() : FC.teams().map(t => t.name);
    const lab = { d:"Developing", a:"Achieved", f:"Flying" };
    pg.appendChild(h("table", { class:"dt" },
      h("thead", null, h("tr", null, h("th", null, "Student / team"), ...L.rubric.map(r => h("th", null, r.c)), h("th", null, "Note"))),
      h("tbody", null, who.map(w => { const row = data[w] || {}; return h("tr", null, h("td", { class:"ph" }, w), ...L.rubric.map((r, i) => h("td", null, lab[row["r"+i]] || "")), h("td", null, row.note || "")); }))));
    pg.appendChild(foot(L, "assessment record"));
    return [pg];
  };

  /* ---------- auto-pagination: never let a sheet run past A4 ---------- */
  const FIXED = el => el.classList.contains("doc-hdr") || el.classList.contains("doc-strip") || el.classList.contains("doc-foot");
  function overflowPx(p){
    const mm = p.getBoundingClientRect().width / 210, top = p.getBoundingClientRect().top;
    const limit = (297 - 17) * mm;
    let maxB = 0; [...p.children].forEach(c => { if (!c.classList.contains("doc-foot")) maxB = Math.max(maxB, c.getBoundingClientRect().bottom - top); });
    return maxB - limit;
  }
  function contPage(p){
    const np = p.cloneNode(false);
    [...p.children].filter(c => c.classList.contains("doc-hdr") || c.classList.contains("doc-strip")).forEach(c => np.appendChild(c.cloneNode(true)));
    const sub = np.querySelector(".doc-hdr .subjtag"); if (sub && !/cont\.\)$/.test(sub.textContent)) sub.textContent += " (cont.)";
    const f = p.querySelector(".doc-foot"); if (f){ const nf = f.cloneNode(true); const last = nf.lastElementChild; if (last) last.textContent = last.textContent + " (cont.)"; np.appendChild(nf); }
    p.after(np); return np;
  }
  const insertBody = (np, el) => { const firstBody = [...np.children].find(c => !c.classList.contains("doc-hdr") && !c.classList.contains("doc-strip")); np.insertBefore(el, firstBody || null); };
  function splitTable(block, np){
    const tb = block.querySelector("tbody"); if (!tb || tb.rows.length < 2) return false;
    const copy = block.cloneNode(true), ctb = copy.querySelector("tbody"); ctb.innerHTML = "";
    let moved = 0;
    while (tb.rows.length > 1 && overflowPx(block.closest(".page")) > 0){ ctb.insertBefore(tb.rows[tb.rows.length-1], ctb.firstChild); moved++; }
    if (!moved) return false;
    [...copy.children].forEach(c => { if (c.tagName === "P") c.remove(); });
    insertBody(np, copy); return true;
  }
  D.paginate = function(box){
    let guard = 0;
    for (let i = 0; i < box.children.length && guard < 400; i++, guard++){
      const p = box.children[i];
      if (!p.classList.contains("page") || overflowPx(p) <= 1) continue;
      const np = contPage(p);
      let body = [...p.children].filter(c => !FIXED(c));
      while (overflowPx(p) > 1 && body.length > 1){ insertBody(np, body.pop()); }
      if (overflowPx(p) > 1 && body.length === 1) splitTable(body[0], np);
      if ([...np.children].every(FIXED)) np.remove();
    }
  };

  /* ---------- screen view + export ---------- */
  D.show = function(root, pages, name){
    const shell = h("div", { class:"doc-shell" });
    const box = h("div", { class:"doc-pages" });
    const current = () => [...box.querySelectorAll(".page")];
    const bar = h("div", { class:"doc-toolbar no-print" },
      h("a", { class:"btn ghost sm", href: history.length > 1 ? "javascript:history.back()" : "#/" }, "← Back"),
      h("span", { class:"sp" }),
      h("button", { class:"btn gold sm", onclick:() => window.print() }, FC.icon("print"), "Print / Save as PDF"),
      h("button", { class:"btn sm", onclick:() => D.download(current(), name) }, FC.icon("pdf"), "Download PDF"),
      h("span", { class:"sp" }));
    shell.appendChild(bar);
    pages.forEach(p => box.appendChild(p)); shell.appendChild(box);
    root.appendChild(shell);
    const run = () => { try { D.paginate(box); } catch(e){ console.warn(e); } };
    (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(() => requestAnimationFrame(run));
  };
  let h2pPromise;
  function loadH2P(){
    if (window.html2pdf) return Promise.resolve();
    if (h2pPromise) return h2pPromise;
    h2pPromise = new Promise((res, rej) => { const sc = document.createElement("script"); sc.src = "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"; sc.onload = res; sc.onerror = rej; document.head.appendChild(sc); });
    return h2pPromise;
  }
  D.download = async function(pages, name){
    FC.toast("Preparing PDF…");
    try {
      await loadH2P();
      const holder = h("div", { style:{ position:"fixed", left:"-10000px", top:"0", width:"210mm", background:"#fff" } });
      pages.forEach(p => { const c = p.cloneNode(true); c.style.boxShadow = "none"; c.style.margin = "0"; c.style.minHeight = "296mm"; c.style.height = "296mm"; c.style.overflow = "hidden"; holder.appendChild(c); });
      document.body.appendChild(holder);
      await window.html2pdf().set({ margin:0, filename:(name || "fifth-codex") + ".pdf", image:{ type:"jpeg", quality:.96 }, html2canvas:{ scale:2, useCORS:true, backgroundColor:"#ffffff" }, jsPDF:{ unit:"mm", format:"a4", orientation:"portrait" }, pagebreak:{ mode:["css"], before:".page:not(:first-child)" } }).from(holder).save();
      holder.remove();
    } catch(e){
      FC.toast("Direct download unavailable offline — opening Print (choose ‘Save as PDF’)");
      setTimeout(() => window.print(), 600);
    }
  };
})(window.FC);
