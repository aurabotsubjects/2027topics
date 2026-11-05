/* ==========================================================
   SLIDE TYPES — each renders into the 1920×1080 stage
   render(slide, ctx) → { el, steps?, step?(i), destroy? }
   ========================================================== */
(function(FC){
  "use strict";
  const h = FC.h, s = FC.s, A = FC.art;
  const T = FC.SLIDE = {};

  /* ---------- frame ---------- */
  function frame(slide, ctx, opt){
    opt = opt || {};
    const L = ctx.lesson, subj = opt.subject || L.subject, S = FC.SUBJECTS[L.subject];
    const el = h("div", { class:"slide subj-" + L.subject + (opt.paper || (subj === "art" && !opt.dark) ? " paperbg" : "") });
    el.style.setProperty("--subj", S.color); el.style.setProperty("--subj-hi", S.hi);
    if (L.subject === "art" && !opt.dark){ el.style.setProperty("--subj", "#B3262E"); el.style.setProperty("--subj-hi", "#B3262E"); }
    el.appendChild(A.backdrop(opt.backdrop || subj, null, (ctx.index+3)*7 + L.week*13));
    if (opt.img){
      const im = FC.imgSlot(opt.img, "slide-img"); im.style.cssText += ";position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0";
      el.appendChild(im);
      el.appendChild(h("div", { class:"scrim-img", style:{ position:"absolute", inset:"0", zIndex:"0", background: opt.scrim || "linear-gradient(90deg, rgba(14,10,8,.82) 0%, rgba(14,10,8,.6) 45%, rgba(14,10,8,.35) 100%)" } }));
    }
    el.appendChild(h("div", { class:"grain" }));
    if (!opt.noVignette) el.appendChild(h("div", { class:"vignette" }));
    if (!opt.noBar) el.appendChild(phasebar(slide, ctx));
    if (slide.fs !== null) el.appendChild(h("div", { class:"badge-fs " + (slide.fs || "real") }, h("span", { class:"dot" }), slide.fs === "story" ? "Expedition story" : "Real evidence"));
    el.appendChild(h("div", { class:"slidenum" }, `${ctx.index+1} / ${ctx.total}`));
    const content = h("div", { class:"content" });
    el.appendChild(content);
    return { el, content };
  }
  function phasebar(slide, ctx){
    const L = ctx.lesson, S = FC.SUBJECTS[L.subject];
    const cur = FC.PHASES.findIndex(p => p.id === slide.phase);
    const bar = h("div", { class:"phasebar" },
      h("div", { class:"ltitle" }, h("b", null, `${S.short} · Wk ${L.week} · `), L.title),
      h("div", { class:"phases" }, FC.PHASES.map((p, i) => h("div", { class:"ph" + (i === cur ? " on" : i < cur ? " done" : "") }, h("i", null, p.icon), p.name))));
    return bar;
  }
  const kick = (t) => h("div", { class:"s-kicker" }, t);
  const title = (t, cls) => { const e = h("h1", { class:"s-title " + (cls||"") }); e.innerHTML = FC.md(t); return e; };
  function enter(root){
    if (!FC.motionOK()) return;
    const items = root.querySelectorAll("[data-in], .s-kicker, .s-title, .pcard, .flip, .path, .move, .lvlcard, .bul li");
    items.forEach((e, i) => { if (e.closest(".move") && !e.classList.contains("move")) return; e.animate([{ opacity:0, transform:"translateY(34px)" }, { opacity:1, transform:"none" }], { duration:850, delay:120 + i*70, easing:"cubic-bezier(.2,.8,.2,1)", fill:"backwards" }); });
  }
  T._enter = enter;

  /* ---------- interactive mount ---------- */
  function mountIX(host, name, cfg, ctx){
    const fn = FC.IX[name];
    if (!fn){ host.appendChild(h("div", { style:{ padding:"40px", fontSize:"30px" } }, `Interactive “${name}” coming soon.`)); return {}; }
    try { return fn(host, cfg || {}, ctx) || {}; } catch(e){ console.error(e); host.appendChild(h("div", null, "Interactive failed to load: " + e.message)); return {}; }
  }

  /* =========== TYPES =========== */
  T.cinematic = function(slide, ctx){
    const f = frame(slide, ctx, { backdrop:"storm", noVignette:true });
    f.content.style.cssText = "left:0;right:0;top:0;bottom:0";
    const host = h("div", { style:{ position:"absolute", inset:"0" } });
    f.content.appendChild(host);
    const api = mountIX(host, slide.ix, slide.cfg, ctx);
    f.el.querySelector(".phasebar").style.opacity = ".55";
    return { el:f.el, steps:api.steps || 0, step:api.step, destroy:api.destroy };
  };

  /* close any open ** or * so a half-typed string renders cleanly */
  function balance(p){
    p = p.replace(/\*+$/, "");
    if ((p.match(/\*\*/g) || []).length % 2) p += "**";
    if ((p.replace(/\*\*/g, "").match(/\*/g) || []).length % 2) p += "*";
    return p;
  }
  T.transmission = function(slide, ctx){
    const hero = ctx.lesson.day === "mon" ? "hero-w" + String(ctx.lesson.week).padStart(2, "0") : null;
    const f = frame(slide, ctx, { backdrop: slide.backdrop || null, img: hero, scrim:"linear-gradient(90deg, rgba(14,10,8,.45) 0%, rgba(14,10,8,.72) 38%, rgba(14,10,8,.86) 100%)" });
    const G = A.GUIDES[slide.guide];
    const portrait = h("div", { class:"portrait" });
    portrait.appendChild(A.portrait(slide.guide));
    const img = FC.imgSlot("char-" + slide.guide); img.style.cssText += ";position:absolute;inset:0;width:100%;height:100%;object-fit:cover"; portrait.appendChild(img);
    const wave = h("div", { class:"wave" }, Array.from({ length:34 }, (_, i) => h("i", { style:{ animationDelay:(-(i*.13)%1).toFixed(2)+"s", animationDuration:(.6 + (i*37%10)/12).toFixed(2)+"s" } })));
    const msg = h("div", { class:"msg" });
    const right = h("div", null,
      h("div", { class:"meta" }, h("span", { class:"rec" }), "Field Transmission", h("span", { style:{ opacity:".6" } }, slide.meta || "")),
      wave, msg);
    f.content.appendChild(h("div", { class:"tx" }, h("div", { style:{ position:"relative" } }, portrait, h("div", { class:"nameplate" }, h("b", null, G.name), h("span", null, G.role))), right));
    let timer;
    const full = slide.msg;
    const run = () => {
      if (!FC.motionOK()){ msg.innerHTML = FC.md(full); return; }
      let i = 0; msg.textContent = "";
      timer = setInterval(() => { i += 2; msg.innerHTML = FC.md(balance(full.slice(0, i))) + '<span class="caret"></span>'; if (i >= full.length){ clearInterval(timer); msg.innerHTML = FC.md(full); } }, 28);
    };
    setTimeout(run, 500);
    msg.addEventListener("click", e => { e.stopPropagation(); clearInterval(timer); msg.innerHTML = FC.md(full); });
    enter(f.content);
    return { el:f.el, destroy(){ clearInterval(timer); } };
  };

  T.glyphcheck = function(slide, ctx){
    const f = frame(slide, ctx);
    f.content.append(kick(slide.kicker || "Glyph Check · quick recall"), title(slide.title || "What do you remember?", "md"));
    const cards = slide.qs.map((q, i) => {
      const c = h("div", { class:"flip" }, h("div", { class:"in" },
        h("div", { class:"face front" }, h("div", { class:"qn" }, String(i+1)), h("div", { class:"q" }, q.q), h("div", { class:"tap" }, "Tap to reveal")),
        h("div", { class:"face back" }, h("div", { class:"qn" }, "✓"), h("div", { class:"q" }, q.a), h("div", { class:"tap" }, "Who got it?"))));
      c.addEventListener("click", e => { e.stopPropagation(); c.classList.toggle("on"); FC.sfx("paper"); });
      return c;
    });
    f.content.appendChild(h("div", { class:"gc-grid" }, cards));
    enter(f.content);
    return { el:f.el, steps:cards.length, step(i){ cards.forEach((c, j) => c.classList.toggle("on", j < i)); } };
  };

  T.lisc = function(slide, ctx){
    const f = frame(slide, ctx);
    const L = ctx.lesson;
    const seed = A.levelIcon("d", 40), maize = A.levelIcon("a", 40), eagle = A.levelIcon("f", 40);
    void seed; void maize; void eagle;
    f.content.appendChild(h("div", { class:"lisc" },
      h("div", { class:"pcard li-card" }, h("div", { class:"lab" }, "We are learning to…"), h("div", { class:"txt" }, L.li.replace(/^We are learning (to )?/i, ""))),
      h("div", null, h("div", { class:"s-kicker" }, "Success criteria · I can…"),
        h("ul", { class:"sc-list" }, L.sc.map((sc, i) => h("li", null, h("span", { class:"seed" }, A.levelIcon(["d","a","f"][i % 3], 40)), sc.replace(/^I can /, "")))),
        h("div", { class:"levels" }, h("span", { style:{ color:"#E0A458" } }, "🌱 Developing"), h("span", { style:{ color:"#3FA37C" } }, "🌽 Achieved"), h("span", { style:{ color:"#5CC3D2" } }, "🦅 Flying")))));
    enter(f.content);
    return { el:f.el };
  };

  T.content = function(slide, ctx){
    const f = frame(slide, ctx, { paper: slide.paper });
    const textCol = h("div", null);
    if (slide.kicker) textCol.appendChild(kick(slide.kicker));
    textCol.appendChild(title(slide.title, slide.tsize || "md"));
    if (slide.body){ const b = h("div", { class:"s-body" }); b.innerHTML = slide.body.split("\n\n").map(p => `<p>${FC.md(p)}</p>`).join(""); textCol.appendChild(b); }
    if (slide.bullets) textCol.appendChild(h("ul", { class:"bul s-body" }, slide.bullets.map(b => { const li = h("li"); li.innerHTML = FC.md(b); return li; })));
    if (slide.visual){
      const vis = h("div", { class:"vis" });
      let node;
      if (slide.visual.artefact){ node = A.artefactBox(slide.visual.artefact, "width:620px;height:620px;box-shadow:var(--sh-3);transform:rotate(1.5deg)"); }
      else if (slide.visual.portrait){ node = h("div", { class:"pcard", style:{ width:"520px", height:"640px", padding:"0", overflow:"hidden" } }, A.portrait(slide.visual.portrait)); }
      else if (slide.visual.level){ node = h("div", { style:{ display:"flex", gap:"30px" } }, ["d","a","f"].map(l => A.levelIcon(l, 200))); }
      else if (slide.visual.maya != null){ node = h("div", { class:"pcard", style:{ width:"520px", height:"520px", display:"grid", placeItems:"center" } }, FC.maya(slide.visual.maya, { color:"#B3262E" })); node.firstChild.setAttribute("style", "width:360px;height:360px"); }
      else if (slide.visual.svg){ node = slide.visual.svg(); }
      if (node){ node.setAttribute && node.setAttribute("data-in", ""); vis.appendChild(node); }
      f.content.appendChild(h("div", { class:"split " + (slide.wide ? "wide-r" : "") }, textCol, vis));
    } else f.content.appendChild(textCol);
    enter(f.content);
    return { el:f.el };
  };

  T.interactive = function(slide, ctx){
    const f = frame(slide, ctx, { paper: slide.paper });
    f.content.style.cssText = "left:0;right:0;top:0;bottom:0";
    f.el.insertBefore(h("div", { class:"scrim" }), f.content);
    const head = h("div", { class:"ix-head" });
    if (slide.kicker) head.appendChild(kick(slide.kicker));
    head.appendChild(title(slide.title, "md"));
    f.content.appendChild(head);
    const host = h("div", { class:"ix-area" });
    f.content.appendChild(host);
    const api = mountIX(host, slide.ix, slide.cfg, ctx);
    enter(head);
    host.animate && FC.motionOK() && host.animate([{ opacity:0, transform:"translateY(30px)" }, { opacity:1, transform:"none" }], { duration:900, delay:250, easing:"cubic-bezier(.2,.8,.2,1)", fill:"backwards" });
    return { el:f.el, steps:api.steps || 0, step:api.step, destroy:api.destroy };
  };

  T.discussion = function(slide, ctx){
    const f = frame(slide, ctx, { paper: slide.paper });
    const q = h("div", { class:"q" }); q.innerHTML = FC.md(slide.q);
    const box = h("div", { class:"disc" }, kick(slide.kicker || "Turn & Talk"), q);
    if (slide.sub){ const sb = h("div", { class:"sub" }); sb.innerHTML = FC.md(slide.sub); box.appendChild(sb); }
    const secs = slide.talk || 45;
    const tt = h("div", { class:"ttimer" }, fmt(secs));
    let t, left = secs;
    const go = h("button", { class:"ixbtn", onclick:(e) => { e.stopPropagation(); clearInterval(t); left = secs; tt.textContent = fmt(left); FC.sfx("tok"); t = setInterval(() => { left--; tt.textContent = fmt(Math.max(0,left)); if (left <= 0){ clearInterval(t); FC.sfx("chime"); tt.animate([{ transform:"scale(1)" },{ transform:"scale(1.25)" },{ transform:"scale(1)" }], { duration:600, iterations:3 }); } }, 1000); } }, `🤝 Start ${secs}s talk`);
    box.appendChild(h("div", { class:"tt" }, go, tt));
    f.content.appendChild(box);
    enter(f.content);
    return { el:f.el, destroy(){ clearInterval(t); } };
  };
  function fmt(sec){ const m = Math.floor(sec/60), s2 = sec % 60; return `${m}:${String(s2).padStart(2,"0")}`; }
  FC.fmtTime = fmt;

  T.cards = function(slide, ctx){
    const f = frame(slide, ctx, { paper: slide.paper });
    if (slide.kicker) f.content.appendChild(kick(slide.kicker));
    f.content.appendChild(title(slide.title, "md"));
    const n = slide.cards.length;
    const grid = h("div", { style:{ display:"grid", gridTemplateColumns:`repeat(${n},1fr)`, gap:"30px" } });
    slide.cards.forEach(c => {
      const card = h("div", { class:"pcard hov", style:{ height: slide.h || "600px", display:"flex", flexDirection:"column", padding:"28px 30px" } });
      if (c.artefact){ card.appendChild(A.artefactBox(c.artefact, "width:100%;height:260px;margin-bottom:10px")); }
      if (c.svg){ const a = c.svg(); a.setAttribute("style", "width:100%;height:150px;margin-bottom:10px"); card.appendChild(a); }
      if (c.icon){ card.appendChild(h("div", { style:{ fontSize:"90px", lineHeight:"1", marginBottom:"10px" } }, c.icon)); }
      if (c.big) card.appendChild(h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"84px", lineHeight:".9", color:c.color || "#B3262E" } }, c.big));
      card.appendChild(h("div", { style:{ fontFamily:"var(--f-display)", fontWeight:"900", fontSize:"40px", lineHeight:"1.02", margin:"8px 0 10px" } }, c.t));
      const d = h("div", { style:{ fontSize:"27px", lineHeight:"1.26" } }); d.innerHTML = FC.md(c.d); card.appendChild(d);
      if (c.foot) card.appendChild(h("div", { style:{ marginTop:"auto", fontFamily:"var(--f-label)", fontWeight:"800", letterSpacing:".12em", textTransform:"uppercase", fontSize:"19px", color:"#1F7A5A" } }, c.foot));
      grid.appendChild(card);
    });
    f.content.appendChild(grid);
    enter(f.content);
    return { el:f.el };
  };

  T.paths = function(slide, ctx){
    const f = frame(slide, ctx);
    const L = ctx.lesson;
    const mins = slide.minutes || (L.subject === "art" ? 22 : 20);
    let left = mins*60, t;
    const tv = h("div", { class:"t" }, fmt(left));
    const start = h("button", { class:"ixbtn", onclick:(e) => { e.stopPropagation(); if (t){ clearInterval(t); t = null; start.textContent = "▶ Resume"; return; } start.textContent = "❚❚ Pause"; FC.sfx("tok"); t = setInterval(() => { left--; tv.textContent = fmt(Math.max(0,left)); if (left === 300) FC.sfx("chime"); if (left <= 0){ clearInterval(t); t = null; FC.sfx("chime"); } }, 1000); } }, `▶ Start ${mins} min`);
    const printBtn = h("button", { class:"ixbtn ghost", title:"Open the printable path cards in a new tab", onclick:(e) => { e.stopPropagation(); window.open(location.href.split("#")[0] + "#/doc/paths/" + L.id, "_blank"); } }, "🖨 Path cards");
    f.content.appendChild(h("div", { class:"pathbar" }, h("div", null, kick("Choose your path · show what you know"), title(slide.title || "Choose Your Path", "sm")), h("div", { class:"bigtimer" }, printBtn, start, tv)));
    const cols = { A:"#2E9FB0", B:"#C46A3A", C:"#B3262E" };
    f.content.appendChild(h("div", { class:"paths" }, L.paths.map(p => {
      const card = h("div", { class:"pcard path hov" },
        h("div", { class:"pl" }, h("div", { class:"letter", style:{ background:cols[p.id] } }, p.id), h("div", null, h("div", { class:"nm" }, p.name), h("h3", null, p.product))),
        h("ol", null, p.steps.map(st => { const li = h("li"); li.innerHTML = FC.md(st); return li; })),
        h("div", { class:"fly" }, h("b", null, "🦅 Flying challenge"), p.flying));
      return card;
    })));
    if (L.supportedShort) f.content.appendChild(h("div", { class:"support-strip" }, h("b", null, "Supported: "), L.supportedShort));
    enter(f.content);
    return { el:f.el, destroy(){ clearInterval(t); } };
  };

  T.lens = function(slide, ctx){
    const f = frame(slide, ctx, { backdrop: ctx.lesson.subject === "art" ? "art" : "history" });
    const Ls = ctx.lesson.lens, P = FC.PILLARS[Ls.pillar];
    f.content.appendChild(h("div", { class:"lens-top" }, h("div", null, kick("Through the Lens · Christian perspective"), title(slide.title || Ls.title || "Through the Lens", "sm")),
      h("div", { class:"pillar", style:{ marginLeft:"auto" } }, h("span", { class:"pi" }, P.icon), h("div", null, h("b", null, P.name), h("br"), h("span", null, P.en)))));
    const mk = (n, label, kids) => h("div", { class:"pcard move" }, h("div", { class:"mn" }, h("i", null, n), label), kids);
    const look = h("div", { class:"mt" }); look.innerHTML = FC.md(Ls.look);
    const para = h("div", { class:"para" }, "“" + Ls.paraphrase + "”");
    const talk = h("div", null, Ls.talk.map(t => h("div", { class:"tq" }, "❓ " + t.q)));
    const live = h("div", { class:"mt" }); live.innerHTML = FC.md(Ls.live);
    const moves = [
      mk(1, "Look closer", look),
      mk(2, "Open the Word", [para, h("div", { class:"para-note" }, "Paraphrase — read from your class Bible"), h("div", { class:"ref" }, Ls.ref)]),
      mk(3, "Talk it through", talk),
      mk(4, "Live it out", live)
    ];
    f.content.appendChild(h("div", { class:"moves" }, moves));
    enter(f.content.querySelector(".lens-top"));
    const step = i => moves.forEach((m, j) => { m.classList.toggle("on", j < i); });
    step(1);
    return { el:f.el, steps:3, step(i){ step(i+1); } };
  };

  /* keypad widget for decode & seal */
  function keypad(answer, onOK, opt){
    opt = opt || {};
    let val = 0;
    const win = h("div", { class:"numwin" });
    const arab = h("div", { class:"arabic" }, "0");
    const verdict = h("div", { class:"verdict" });
    function show(){ FC.clear(win); win.appendChild(FC.maya(val, { color:"#F0C25E" })); arab.textContent = String(val); }
    const k = (lab, fn) => h("button", { class:"ixbtn", onclick:(e) => { e.stopPropagation(); FC.sfx("tok"); fn(); show(); verdict.textContent = ""; } }, lab);
    const keys = h("div", { class:"keys" },
      k("● +1", () => val++), k("▬ +5", () => val += 5), k("+20 ↑", () => val += 20), k("Clear", () => val = 0));
    const check = h("button", { class:"ixbtn on", style:{ width:"100%", background:"#1F7A5A", color:"#F4EBD8" }, onclick:(e) => { e.stopPropagation();
      if (val === answer){ verdict.textContent = "✓ Glyph decoded!"; verdict.className = "verdict ok"; FC.sfx("ok"); onOK && onOK(); }
      else { verdict.textContent = "✗ Not yet — try again"; verdict.className = "verdict no"; FC.sfx("no"); win.animate([{ transform:"translateX(0)" },{ transform:"translateX(-12px)" },{ transform:"translateX(12px)" },{ transform:"translateX(0)" }], { duration:300 }); }
    } }, opt.checkLabel || "Check the glyph");
    const reveal = h("button", { class:"ixbtn dark", style:{ width:"100%", color:"var(--cacao-ink)", boxShadow:"inset 0 0 0 2px rgba(90,56,37,.3)", fontSize:"20px", minHeight:"56px", padding:"10px" }, onclick:(e) => { e.stopPropagation(); val = answer; show(); } }, "Teacher: show answer");
    show();
    if (opt.compact){
      win.style.cssText += ";width:200px;height:200px"; 
      return h("div", { class:"pcard keypad compact", style:{ display:"grid", gridTemplateColumns:"200px 1fr", gap:"22px", alignItems:"center", padding:"24px", width:"760px" } },
        h("div", { style:{ display:"flex", flexDirection:"column", alignItems:"center", gap:"6px" } }, win, arab),
        h("div", { style:{ display:"flex", flexDirection:"column", gap:"12px" } }, keys, check, h("div", { style:{ display:"flex", gap:"12px", alignItems:"center" } }, verdict, reveal)));
    }
    return h("div", { class:"pcard keypad" }, win, arab, keys, check, verdict, reveal);
  }

  T.decode = function(slide, ctx){
    const f = frame(slide, ctx, { backdrop: ctx.lesson.subject === "art" ? "art" : null });
    const C = ctx.lesson.clue;
    const solved = FC.store.get("clues", {});
    const left = h("div", null, kick("Glyph Clue · decode it the Maya way"),
      h("div", { class:"clue" }, C.prompt),
      C.maya != null ? (() => { const w = h("div", { class:"pcard", style:{ display:"inline-grid", placeItems:"center", width:"220px", height:"220px", marginTop:"26px", padding:"10px" } }); const m = FC.maya(C.maya, { color:"#B3262E" }); m.setAttribute("style", "width:180px;height:180px"); w.appendChild(m); return w; })() : null,
      h("div", { class:"s-body", style:{ marginTop:"30px", fontSize:"32px", opacity:".85" } }, "Work it out with your team. Then build the answer as a Maya numeral: ● = 1, ▬ = 5, shell = 0."));
    const done = () => { const sv = FC.store.get("clues", {}); sv[ctx.lesson.id] = true; FC.store.set("clues", sv); expl.style.display = "block"; };
    const expl = h("div", { class:"pcard", style:{ marginTop:"30px", padding:"20px 26px", fontSize:"30px", display: solved[ctx.lesson.id] ? "block" : "none" } }, "🗝️ ", C.explain || "Clue saved for Friday's Folio Seal!");
    left.appendChild(expl);
    f.content.appendChild(h("div", { class:"decode" }, left, keypad(C.answer, done)));
    enter(f.content);
    return { el:f.el };
  };

  T.exit = function(slide, ctx){
    const f = frame(slide, ctx);
    f.content.append(kick("Exit · how did I go?"), title(slide.title || "Show me on your hand: where are you?", "sm"));
    const L = ctx.lesson;
    const lv = [["d","Developing","I'm on my way — I can do some of it with help."],["a","Achieved","I can do it on my own and explain it."],["f","Flying","I can explain why, connect it, and teach it."]];
    f.content.appendChild(h("div", { class:"exitgrid" }, lv.map(([k, n, d]) => {
      const c = h("div", { class:"pcard lvlcard hov" }, A.levelIcon(k, 200), h("h3", null, n), h("p", null, d));
      c.addEventListener("click", e => { e.stopPropagation(); FC.sfx("tok"); c.animate([{ transform:"scale(1)" },{ transform:"scale(1.06) rotate(-1deg)" },{ transform:"scale(1)" }], { duration:500 }); });
      return c;
    })));
    f.content.appendChild(h("div", { class:"s-body", style:{ marginTop:"30px", fontSize:"30px" } }, "🫘 Award cacao beans for great thinking, teamwork and kindness · Next lesson: ", h("b", null, L.next || "see you next time!")));
    enter(f.content);
    return { el:f.el };
  };

  T.protocol = function(slide, ctx){
    const f = frame(slide, ctx);
    f.content.append(kick("How we work on this expedition"), title("The Expedition Protocol", "md"));
    const P = [["respect","Respect the site","People, materials and other cultures. We handle everything with care."],["evidence","Evidence before opinion","‘How do we know?’ is our favourite question."],["voice","Everyone's voice","We listen, build on ideas and disagree kindly."],["better","Leave it better","…than we found it — our room, our team, our world."]];
    f.content.appendChild(h("div", { class:"proto" }, P.map(([k, t, d]) => h("div", { class:"pcard hov" }, h("div", { class:"ic" }, A.protoIcon(k)), h("h3", null, t), h("p", null, d)))));
    enter(f.content);
    return { el:f.el };
  };

  T.glyphwall = function(slide, ctx){
    const f = frame(slide, ctx);
    f.content.append(kick("The Glyph Wall · what do we already know?"), title(slide.title || "What do you already know?", "md"));
    const wall = h("div", { class:"gwall", style:{ top:"220px" } });
    f.content.appendChild(wall);
    const key = "glyphwall";
    const notes = () => FC.store.get(key, []);
    const cols = ["#F4EBD8","#F0C25E","#9fd7c1","#f2b8a8","#a9dbe3"];
    function render(){
      FC.clear(wall);
      notes().forEach((n, i) => {
        const el = h("div", { class:"gnote", style:{ left:n.x+"px", top:n.y+"px", background:cols[i % cols.length], "--r":(n.r||0)+"deg" } }, n.t, h("button", { class:"x", title:"remove", onclick:(e) => { e.stopPropagation(); const a = notes(); a.splice(i,1); FC.store.set(key, a); render(); } }, "×"));
        let drag;
        el.addEventListener("pointerdown", e => { if (e.target.classList.contains("x")) return; e.stopPropagation(); el.setPointerCapture(e.pointerId); const [x,y] = FC.toLocal(wall, e); drag = [x - n.x, y - n.y]; });
        el.addEventListener("pointermove", e => { if (!drag) return; const [x,y] = FC.toLocal(wall, e); n.x = x - drag[0]; n.y = y - drag[1]; el.style.left = n.x+"px"; el.style.top = n.y+"px"; });
        el.addEventListener("pointerup", () => { if (!drag) return; drag = null; const a = notes(); a[i] = n; FC.store.set(key, a); });
        wall.appendChild(el);
      });
    }
    const inp = h("input", { placeholder:"Type something a student says, then press Enter…", onkeydown:(e) => { e.stopPropagation(); if (e.key === "Enter" && inp.value.trim()){ const a = notes(); a.push({ t:inp.value.trim(), x:40 + (a.length*330) % 1500, y:150 + Math.floor(a.length/5)*190 + (a.length%2)*30, r:(Math.random()*6-3).toFixed(1) }); FC.store.set(key, a); inp.value = ""; render(); FC.sfx("paper"); } } });
    f.content.appendChild(h("div", { class:"gwall-input", style:{ position:"absolute", left:"0", top:"170px", zIndex:"4" } }, inp, h("button", { class:"ixbtn dark", onclick:(e) => { e.stopPropagation(); if (confirmWall()){ FC.store.set(key, []); render(); } } }, "Clear wall")));
    function confirmWall(){ return notes().length === 0 || window.__fcClearOK === true || (window.__fcClearOK = true, FC.toast("Press Clear wall again to confirm"), false); }
    render();
    enter(f.content);
    return { el:f.el };
  };

  T.safety = function(slide, ctx){
    const f = frame(slide, ctx);
    f.content.append(kick("Safety first · engineers' rules"), title(slide.title || "Stay safe with electricity", "md"));
    f.content.appendChild(h("div", { style:{ display:"grid", gridTemplateColumns:`repeat(${slide.items.length},1fr)`, gap:"28px" } }, slide.items.map(it => h("div", { class:"pcard hov", style:{ height:"520px", display:"flex", flexDirection:"column" } }, h("div", { style:{ fontSize:"96px", lineHeight:"1" } }, it.icon), h("div", { style:{ fontFamily:"var(--f-display)", fontWeight:"900", fontSize:"42px", lineHeight:"1.02", margin:"14px 0 12px" } }, it.t), h("div", { style:{ fontSize:"28px", lineHeight:"1.26" } }, it.d)))));
    enter(f.content);
    return { el:f.el };
  };

  T.brief = function(slide, ctx){
    const f = frame(slide, ctx);
    f.content.append(kick("The Design Brief"), title(slide.title, "md"));
    const row = (lab, val, col) => h("div", { class:"pcard", style:{ padding:"22px 28px", marginBottom:"18px", display:"grid", gridTemplateColumns:"300px 1fr", gap:"20px", alignItems:"center" } }, h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"30px", letterSpacing:".12em", textTransform:"uppercase", color:col } }, lab), h("div", { style:{ fontSize:"34px", lineHeight:"1.25" }, html:FC.md(val) }));
    f.content.append(row("Stakeholder", slide.stakeholder, "#C46A3A"), row("Need", slide.need, "#B3262E"));
    f.content.appendChild(h("div", { class:"pcard", style:{ padding:"22px 28px", display:"grid", gridTemplateColumns:"300px 1fr", gap:"20px" } }, h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"30px", letterSpacing:".12em", textTransform:"uppercase", color:"#1F7A5A" } }, "Specifications", h("div", { style:{ fontFamily:"var(--f-body)", fontSize:"20px", letterSpacing:"0", textTransform:"none", fontWeight:"400", color:"var(--cacao)", marginTop:"6px" } }, "must-haves we can test")),
      h("ol", { style:{ margin:"0", paddingLeft:"36px", fontSize:"34px", lineHeight:"1.4" } }, slide.specs.map(sp => h("li", null, sp)))));
    enter(f.content);
    return { el:f.el };
  };

  T.hononga = function(slide, ctx){
    const f = frame(slide, ctx, { backdrop:"nz" });
    const b = h("div", { class:"s-body" }); b.innerHTML = slide.body.split("\n\n").map(p => `<p>${FC.md(p)}</p>`).join("");
    f.content.append(kick("Hononga Aotearoa · our NZ connection"), title(slide.title, "md"), b);
    enter(f.content);
    return { el:f.el };
  };

  T.intercept = function(slide, ctx){
    const f = frame(slide, ctx, { backdrop:"collector", dark:true });
    const m = h("div", { class:"m glitch" });
    const box = h("div", { class:"intercept" },
      h("div", { class:"hdr" }, h("span", { class:"rec" }), "Intercepted transmission · source unknown · ", h("span", { style:{ color:"#C0C4C8" } }, "🪲 silver beetle seal")),
      m, h("div", { class:"ask" }, h("b", { style:{ fontFamily:"var(--f-label)", letterSpacing:".14em", color:"var(--gold)" } }, "THINK ABOUT IT · "), slide.ask));
    f.content.appendChild(box);
    const cim = FC.imgSlot("char-collector", "collector-img");
    cim.style.cssText += ";position:absolute;right:0;top:0;height:100%;width:46%;object-fit:cover;object-position:center 20%;z-index:1;-webkit-mask-image:linear-gradient(90deg,transparent 0%,#000 45%);mask-image:linear-gradient(90deg,transparent 0%,#000 45%)";
    cim.addEventListener("load", () => { box.style.maxWidth = "1080px"; });
    f.el.insertBefore(cim, f.content);
    let i = 0; const full = slide.msg; let t;
    if (FC.motionOK()) t = setInterval(() => { i++; m.textContent = full.slice(0, i) + (i % 2 ? "▌" : ""); if (i >= full.length){ clearInterval(t); m.textContent = full; } }, 45);
    else m.textContent = full;
    FC.sfx("zap");
    return { el:f.el, destroy(){ clearInterval(t); } };
  };

  T.folioseal = function(slide, ctx){
    const f = frame(slide, ctx, { backdrop:"history", dark:true, img:"hero-w" + String(ctx.lesson.week).padStart(2, "0"), scrim:"linear-gradient(90deg, rgba(14,10,8,.88) 0%, rgba(14,10,8,.7) 55%, rgba(14,10,8,.45) 100%)" });
    f.el.classList.remove("paperbg");
    const W = FC.WEEKS[ctx.lesson.week];
    const solved = FC.store.get("clues", {});
    const clueLessons = W.lessons.filter(l => l.subject !== "art");
    f.content.append(kick(`Folio ${FC.TERM.weeks[ctx.lesson.week-1].folio} · the Folio Seal`), title("Break the jade seal", "sm"));
    const tiles = h("div", { style:{ display:"flex", gap:"22px", marginTop:"10px" } }, clueLessons.map(l => {
      const show = !!solved[l.id];
      const win = h("div", { style:{ width:"120px", height:"120px", borderRadius:"18px", background:"var(--basalt)", display:"grid", placeItems:"center", boxShadow:"inset 0 6px 18px rgba(0,0,0,.5)", cursor:"pointer" } });
      const paint = () => { FC.clear(win); if (win.dataset.on === "1"){ const m = FC.maya(l.clue.answer, { color:"#F0C25E" }); m.setAttribute("style", "width:96px;height:96px"); win.appendChild(m); } else win.appendChild(h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"70px", color:"rgba(233,220,192,.3)" } }, "?")); };
      win.dataset.on = show ? "1" : "0"; paint();
      win.addEventListener("click", e => { e.stopPropagation(); win.dataset.on = "1"; paint(); FC.sfx("tok"); });
      return h("div", { class:"pcard", style:{ padding:"12px 14px", textAlign:"center", width:"160px" } }, h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", letterSpacing:".14em", fontSize:"22px", color:FC.SUBJECTS[l.subject].color === "#7FF3FF" ? "#1E7E95" : FC.SUBJECTS[l.subject].color, marginBottom:"8px" } }, FC.SUBJECTS[l.subject].short.toUpperCase()), win);
    }));
    const instr = h("div", { class:"s-body", style:{ fontSize:"30px", marginTop:"22px", maxWidth:"860px" } }); instr.innerHTML = FC.md(slide.instruction || W.seal.instruction);
    const leftCol = h("div", null, tiles, instr);
    // folio (sealed → opens)
    const folio = h("div", { style:{ position:"relative", width:"560px", height:"700px", perspective:"2000px" } });
    const art = h("div", { style:{ position:"absolute", inset:"0", borderRadius:"6px", overflow:"hidden", boxShadow:"var(--sh-3)" } }, W.seal.art());
    const doorL = h("div", { style:{ position:"absolute", left:"0", top:"0", width:"50%", height:"100%", background:"#cdb68c", transformOrigin:"left center", transition:"transform 1.8s cubic-bezier(.3,.7,.2,1)", boxShadow:"inset -10px 0 30px rgba(0,0,0,.25)", backfaceVisibility:"hidden", borderRadius:"6px 0 0 6px" } });
    const doorR = h("div", { style:{ position:"absolute", right:"0", top:"0", width:"50%", height:"100%", background:"#cdb68c", transformOrigin:"right center", transition:"transform 1.8s cubic-bezier(.3,.7,.2,1)", boxShadow:"inset 10px 0 30px rgba(0,0,0,.25)", backfaceVisibility:"hidden", borderRadius:"0 6px 6px 0" } });
    [doorL, doorR].forEach(d => d.appendChild(h("div", { style:{ position:"absolute", inset:"0", background:"var(--fibre), var(--grain)", opacity:".6", mixBlendMode:"multiply" } })));
    const seal = h("div", { style:{ position:"absolute", left:"50%", top:"50%", width:"190px", height:"190px", transform:"translate(-50%,-50%)", borderRadius:"50%", background:"radial-gradient(circle at 35% 30%, #3FA37C, #1F7A5A 55%, #0F5E47)", boxShadow:"0 14px 30px rgba(0,0,0,.5), inset 0 0 0 10px rgba(255,255,255,.08)", display:"grid", placeItems:"center", transition:"transform 1s, opacity 1s" } });
    const sealGlyph = FC.maya(W.seal.answer, { color:"rgba(244,235,216,.0)" }); sealGlyph.setAttribute("style", "width:110px;height:110px");
    seal.appendChild(h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"30px", letterSpacing:".14em", color:"rgba(244,235,216,.75)" } }, "FOLIO " + FC.TERM.weeks[ctx.lesson.week-1].folio));
    folio.append(art, doorL, doorR, seal);
    const caption = h("div", { class:"pcard", style:{ position:"absolute", left:"-40px", right:"-40px", bottom:"-30px", padding:"16px 22px", fontSize:"26px", lineHeight:"1.25", opacity:"0", transition:"opacity 1s 1.4s" } }); caption.innerHTML = FC.md(W.seal.reveal);
    folio.appendChild(caption);
    const open = () => {
      FC.sfx("stone");
      seal.style.transform = "translate(-50%,-50%) scale(1.25) rotate(25deg)"; seal.style.opacity = "0";
      setTimeout(() => { doorL.style.transform = "rotateY(-110deg)"; doorR.style.transform = "rotateY(110deg)"; caption.style.opacity = "1"; FC.sfx("chime"); }, 500);
      const opened = FC.store.get("folios", {}); opened[ctx.lesson.week] = true; FC.store.set("folios", opened);
    };
    const kp = keypad(W.seal.answer, open, { checkLabel:"Break the seal", compact:true });
    kp.style.marginTop = "22px";
    leftCol.appendChild(kp);
    f.content.appendChild(h("div", { style:{ display:"grid", gridTemplateColumns:"1fr 560px", gap:"80px", alignItems:"start" } }, leftCol, folio));
    if (FC.store.get("folios", {})[ctx.lesson.week]){ seal.style.opacity = "0"; doorL.style.transform = "rotateY(-110deg)"; doorR.style.transform = "rotateY(110deg)"; caption.style.opacity = "1"; }
    enter(f.content);
    return { el:f.el };
  };
})(window.FC);
