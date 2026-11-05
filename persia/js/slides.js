/* ==========================================================
   SLIDE TYPES — each renders into the 1920×1080 stage
   render(slide, ctx) → { el, steps?, step?(i), destroy? }
   ========================================================== */
(function(BM){
  "use strict";
  const h = BM.h, s = BM.s, A = BM.art;
  const T = BM.SLIDE = {};

  /* ---------- frame ---------- */
  function frame(slide, ctx, opt){
    opt = opt || {};
    const L = ctx.lesson, subj = opt.subject || L.subject, S = BM.SUBJECTS[L.subject];
    const onPaper = !!(opt.paper || (subj === "art" && !opt.dark));
    const el = h("div", { class:"slide subj-" + L.subject + (onPaper ? " paperbg" : "") });
    el.style.setProperty("--subj", onPaper ? S.color : S.hi); el.style.setProperty("--subj-hi", S.hi);
    if (onPaper){ const deep = { history:"#1E3A8A", geography:"#0F6E65", science:"#0B6A4A", technology:"#9A3E26", art:"#8A5A08" }[L.subject] || S.color; el.style.setProperty("--subj", deep); el.style.setProperty("--subj-hi", deep); }
    el.appendChild(A.backdrop(opt.backdrop || subj, null, (ctx.index+3)*7 + L.week*13));
    if (opt.img){
      const im = BM.imgSlot(opt.img, "slide-img"); im.style.cssText += ";position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0";
      el.appendChild(im);
      el.appendChild(h("div", { class:"scrim-img", style:{ position:"absolute", inset:"0", zIndex:"0", background: opt.scrim || "linear-gradient(90deg, rgba(12,18,22,.82) 0%, rgba(12,18,22,.6) 45%, rgba(12,18,22,.35) 100%)" } }));
    }
    el.appendChild(h("div", { class:"grain" }));
    if (!opt.noVignette) el.appendChild(h("div", { class:"vignette" }));
    if (!opt.noBar) el.appendChild(phasebar(slide, ctx));
    if (slide.fs !== null) el.appendChild(h("div", { class:"badge-fs " + (slide.fs || "real") }, h("span", { class:"dot" }), slide.fs === "story" ? "Road Story" : "Real evidence"));
    el.appendChild(h("div", { class:"slidenum" }, `${ctx.index+1} / ${ctx.total}`));
    const content = h("div", { class:"content" });
    el.appendChild(content);
    return { el, content };
  }
  function phasebar(slide, ctx){
    const L = ctx.lesson, S = BM.SUBJECTS[L.subject];
    const cur = BM.PHASES.findIndex(p => p.id === slide.phase);
    const bar = h("div", { class:"phasebar" },
      h("div", { class:"ltitle" }, h("b", null, `${S.short} · Wk ${L.week} · `), L.title),
      h("div", { class:"phases" }, BM.PHASES.map((p, i) => h("div", { class:"ph" + (i === cur ? " on" : i < cur ? " done" : "") }, h("i", null, p.icon), p.name))));
    return bar;
  }
  const kick = (t) => h("div", { class:"s-kicker" }, t);
  const title = (t, cls) => { const e = h("h1", { class:"s-title " + (cls||"") }); e.innerHTML = BM.md(t); return e; };
  function enter(root){
    if (!BM.motionOK()) return;
    const items = root.querySelectorAll("[data-in], .s-kicker, .s-title, .pcard, .flip, .path, .move, .lvlcard, .bul li");
    items.forEach((e, i) => { if (e.closest(".move") && !e.classList.contains("move")) return; e.animate([{ opacity:0, transform:"translateY(34px)" }, { opacity:1, transform:"none" }], { duration:850, delay:120 + i*70, easing:"cubic-bezier(.2,.8,.2,1)", fill:"backwards" }); });
  }
  T._enter = enter;

  /* ---------- interactive mount ---------- */
  function mountIX(host, name, cfg, ctx){
    const fn = BM.IX[name];
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
    const f = frame(slide, ctx, { backdrop: slide.backdrop || null, img: hero, scrim:"linear-gradient(90deg, rgba(12,18,22,.45) 0%, rgba(12,18,22,.72) 38%, rgba(12,18,22,.86) 100%)" });
    const G = A.GUIDES[slide.guide];
    const portrait = h("div", { class:"portrait" });
    portrait.appendChild(A.portrait(slide.guide));
    const img = BM.imgSlot("char-" + slide.guide); img.style.cssText += ";position:absolute;inset:0;width:100%;height:100%;object-fit:cover"; portrait.appendChild(img);
    const wave = h("div", { class:"wave" }, Array.from({ length:34 }, (_, i) => h("i", { style:{ animationDelay:(-(i*.13)%1).toFixed(2)+"s", animationDuration:(.6 + (i*37%10)/12).toFixed(2)+"s" } })));
    const msg = h("div", { class:"msg" });
    const right = h("div", null,
      h("div", { class:"meta" }, h("span", { class:"rec" }), "Dispatch", h("span", { style:{ opacity:".6" } }, slide.meta || "")),
      wave, msg);
    f.content.appendChild(h("div", { class:"tx" }, h("div", { style:{ position:"relative" } }, portrait, h("div", { class:"nameplate" }, h("b", null, G.name), h("span", null, G.role))), right));
    let timer;
    const full = slide.msg;
    const run = () => {
      if (!BM.motionOK()){ msg.innerHTML = BM.md(full); return; }
      let i = 0; msg.textContent = "";
      timer = setInterval(() => { i += 2; msg.innerHTML = BM.md(balance(full.slice(0, i))) + '<span class="caret"></span>'; if (i >= full.length){ clearInterval(timer); msg.innerHTML = BM.md(full); } }, 28);
    };
    setTimeout(run, 500);
    msg.addEventListener("click", e => { e.stopPropagation(); clearInterval(timer); msg.innerHTML = BM.md(full); });
    enter(f.content);
    return { el:f.el, destroy(){ clearInterval(timer); } };
  };

  T.glyphcheck = function(slide, ctx){
    const f = frame(slide, ctx);
    f.content.append(kick(slide.kicker || "Waystation Check · quick recall"), title(slide.title || "What do you remember?", "md"));
    const cards = slide.qs.map((q, i) => {
      const c = h("div", { class:"flip" }, h("div", { class:"in" },
        h("div", { class:"face front" }, h("div", { class:"qn" }, String(i+1)), h("div", { class:"q" }, q.q), h("div", { class:"tap" }, "Tap to reveal")),
        h("div", { class:"face back" }, h("div", { class:"qn" }, "✓"), h("div", { class:"q" }, q.a), h("div", { class:"tap" }, "Who got it?"))));
      c.addEventListener("click", e => { e.stopPropagation(); c.classList.toggle("on"); BM.sfx("paper"); });
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
        h("div", { class:"levels" }, h("span", { style:{ color:"#D6A97A" } }, "🌱 Developing"), h("span", { style:{ color:"#F6D27A" } }, "🪙 Achieved"), h("span", { style:{ color:"#8FA8F0" } }, "🪶 Flying")))));
    enter(f.content);
    return { el:f.el };
  };

  T.content = function(slide, ctx){
    const f = frame(slide, ctx, { paper: slide.paper });
    const textCol = h("div", null);
    if (slide.kicker) textCol.appendChild(kick(slide.kicker));
    textCol.appendChild(title(slide.title, slide.tsize || "md"));
    if (slide.body){ const b = h("div", { class:"s-body" }); b.innerHTML = slide.body.split("\n\n").map(p => `<p>${BM.md(p)}</p>`).join(""); textCol.appendChild(b); }
    if (slide.bullets) textCol.appendChild(h("ul", { class:"bul s-body" }, slide.bullets.map(b => { const li = h("li"); li.innerHTML = BM.md(b); return li; })));
    if (slide.side) textCol.appendChild(sideNote(slide.side));
    if (slide.visual){
      const vis = h("div", { class:"vis" });
      let node;
      if (slide.visual.artefact){ node = A.artefactBox(slide.visual.artefact, "width:620px;height:620px;box-shadow:var(--sh-3);transform:rotate(1.5deg)"); }
      else if (slide.visual.portrait){ node = h("div", { class:"pcard", style:{ width:"520px", height:"640px", padding:"0", overflow:"hidden" } }, A.portrait(slide.visual.portrait)); }
      else if (slide.visual.level){ node = h("div", { style:{ display:"flex", gap:"30px" } }, ["d","a","f"].map(l => A.levelIcon(l, 200))); }
      else if (slide.visual.map){ const mp = BM.map.persia(slide.visual.map); mp.setAttribute("style", "width:100%;height:100%;display:block"); node = h("div", { class:"pcard", style:{ width:(slide.visual.size || 760) + "px", height:Math.round((slide.visual.size || 760)/1.61) + "px", padding:"0", overflow:"hidden" } }, mp); }
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
    host.animate && BM.motionOK() && host.animate([{ opacity:0, transform:"translateY(30px)" }, { opacity:1, transform:"none" }], { duration:900, delay:250, easing:"cubic-bezier(.2,.8,.2,1)", fill:"backwards" });
    return { el:f.el, steps:api.steps || 0, step:api.step, destroy:api.destroy };
  };

  T.discussion = function(slide, ctx){
    const f = frame(slide, ctx, { paper: slide.paper });
    const q = h("div", { class:"q" }); q.innerHTML = BM.md(slide.q);
    const box = h("div", { class:"disc" }, kick(slide.kicker || "Turn & Talk"), q);
    if (slide.sub){ const sb = h("div", { class:"sub" }); sb.innerHTML = BM.md(slide.sub); box.appendChild(sb); }
    const secs = slide.talk || 45;
    const tt = h("div", { class:"ttimer" }, fmt(secs));
    let t, left = secs;
    const go = h("button", { class:"ixbtn", onclick:(e) => { e.stopPropagation(); clearInterval(t); left = secs; tt.textContent = fmt(left); BM.sfx("tok"); t = setInterval(() => { left--; tt.textContent = fmt(Math.max(0,left)); if (left <= 0){ clearInterval(t); BM.sfx("chime"); tt.animate([{ transform:"scale(1)" },{ transform:"scale(1.25)" },{ transform:"scale(1)" }], { duration:600, iterations:3 }); } }, 1000); } }, `🤝 Start ${secs}s talk`);
    box.appendChild(h("div", { class:"tt" }, go, tt));
    f.content.appendChild(box);
    enter(f.content);
    return { el:f.el, destroy(){ clearInterval(t); } };
  };
  function fmt(sec){ const m = Math.floor(sec/60), s2 = sec % 60; return `${m}:${String(s2).padStart(2,"0")}`; }
  BM.fmtTime = fmt;

  T.cards = function(slide, ctx){
    const f = frame(slide, ctx, { paper: slide.paper });
    if (slide.kicker) f.content.appendChild(kick(slide.kicker));
    f.content.appendChild(title(slide.title, "md"));
    const n = slide.cards.length;
    const grid = h("div", { style:{ display:"grid", gridTemplateColumns:`repeat(${n},minmax(0,1fr))`, gap: n >= 6 ? "22px" : "30px" } });
    const tight = n >= 5;
    slide.cards.forEach(c => {
      const card = h("div", { class:"pcard hov", style:{ height: slide.h || "600px", display:"flex", flexDirection:"column", padding: tight ? "24px 22px" : "28px 30px" } });
      if (c.artefact){ card.appendChild(A.artefactBox(c.artefact, "width:100%;height:260px;margin-bottom:10px")); }
      if (c.svg){ const a = c.svg(); a.setAttribute("style", "width:100%;height:150px;margin-bottom:10px"); card.appendChild(a); }
      if (c.icon){ card.appendChild(h("div", { style:{ fontSize:"90px", lineHeight:"1", marginBottom:"10px" } }, c.icon)); }
      if (c.big) card.appendChild(h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"84px", lineHeight:".9", color:c.color || "#B0213B" } }, c.big));
      card.appendChild(h("div", { style:{ fontFamily:"var(--f-display)", fontWeight:"900", fontSize: n >= 6 ? "29px" : tight ? "36px" : "40px", lineHeight:"1.02", margin:"8px 0 10px", overflowWrap:"anywhere" } }, c.t));
      const d = h("div", { style:{ fontSize: n >= 6 ? "24px" : "27px", lineHeight:"1.26" } }); d.innerHTML = BM.md(c.d); card.appendChild(d);
      if (c.foot) card.appendChild(h("div", { style:{ marginTop:"auto", fontFamily:"var(--f-label)", fontWeight:"800", letterSpacing:".12em", textTransform:"uppercase", fontSize:"19px", color:"#0F7F74" } }, c.foot));
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
    const start = h("button", { class:"ixbtn", onclick:(e) => { e.stopPropagation(); if (t){ clearInterval(t); t = null; start.textContent = "▶ Resume"; return; } start.textContent = "❚❚ Pause"; BM.sfx("tok"); t = setInterval(() => { left--; tv.textContent = fmt(Math.max(0,left)); if (left === 300) BM.sfx("chime"); if (left <= 0){ clearInterval(t); t = null; BM.sfx("chime"); } }, 1000); } }, `▶ Start ${mins} min`);
    const printBtn = h("button", { class:"ixbtn ghost", title:"Open the printable path cards in a new tab", onclick:(e) => { e.stopPropagation(); window.open(location.href.split("#")[0] + "#/doc/paths/" + L.id, "_blank"); } }, "🖨 Path cards");
    f.content.appendChild(h("div", { class:"pathbar" }, h("div", null, kick("Choose your path · show what you know"), title(slide.title || "Choose Your Path", "sm")), h("div", { class:"bigtimer" }, printBtn, start, tv)));
    const cols = { A:"#1E3A8A", B:"#A9472C", C:"#0F7F74" };
    f.content.appendChild(h("div", { class:"paths" }, L.paths.map(p => {
      const card = h("div", { class:"pcard path hov" },
        h("div", { class:"pl" }, h("div", { class:"letter", style:{ background:cols[p.id] } }, p.id), h("div", null, h("div", { class:"nm" }, p.name), h("h3", null, p.product))),
        h("ol", null, p.steps.map(st => { const li = h("li"); li.innerHTML = BM.md(st); return li; })),
        h("div", { class:"fly" }, h("b", null, "✨ Flying challenge"), p.flying));
      return card;
    })));
    if (L.supportedShort) f.content.appendChild(h("div", { class:"support-strip" }, h("b", null, "Supported: "), L.supportedShort));
    enter(f.content);
    return { el:f.el, destroy(){ clearInterval(t); } };
  };

  T.lens = function(slide, ctx){
    const f = frame(slide, ctx, { backdrop: ctx.lesson.subject === "art" ? "art" : "history" });
    const Ls = ctx.lesson.lens, P = BM.PILLARS[Ls.pillar];
    f.content.appendChild(h("div", { class:"lens-top" }, h("div", null, kick("Through the Lens · Christian perspective"), title(slide.title || Ls.title || "Through the Lens", "sm")),
      h("div", { class:"pillar", style:{ marginLeft:"auto" } }, h("span", { class:"pi" }, P.icon), h("div", null, h("b", null, P.name), h("br"), h("span", null, P.en)))));
    const mk = (n, label, kids) => h("div", { class:"pcard move" }, h("div", { class:"mn" }, h("i", null, n), label), kids);
    const look = h("div", { class:"mt" }); look.innerHTML = BM.md(Ls.look);
    const para = h("div", { class:"para" }, "“" + Ls.paraphrase + "”");
    const talk = h("div", null, Ls.talk.map(t => h("div", { class:"tq" }, "❓ " + t.q)));
    const live = h("div", { class:"mt" }); live.innerHTML = BM.md(Ls.live);
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

  /* number keypad for the Trig Clue */
  function keypad(answer, onOK, opt){
    opt = opt || {};
    let val = "";
    const win = h("div", { class:"numwin" });
    const verdict = h("div", { class:"verdict" });
    const show = () => { win.textContent = val === "" ? "–" : val; };
    const k = (lab, fn, cls) => h("button", { class:"ixbtn " + (cls || ""), onclick:(e) => { e.stopPropagation(); BM.sfx("tok"); fn(); show(); verdict.textContent = ""; } }, lab);
    const keys = h("div", { class:"keys" }, ["1","2","3","4","5","6","7","8","9"].map(d => k(d, () => { if (val.length < 4) val += d; })), k("⌫", () => val = val.slice(0, -1), "dark"), k("0", () => { if (val.length < 4 && val !== "") val += "0"; }), k("Clear", () => val = "", "dark"));
    const check = h("button", { class:"ixbtn on", style:{ width:"100%" }, onclick:(e) => { e.stopPropagation();
      if (+val === answer && val !== ""){ verdict.textContent = "✓ Waystation cleared!"; verdict.className = "verdict ok"; BM.sfx("ok"); onOK && onOK(); }
      else { verdict.textContent = "✗ Not yet — check your working"; verdict.className = "verdict no"; BM.sfx("no"); win.animate([{ transform:"translateX(0)" },{ transform:"translateX(-12px)" },{ transform:"translateX(12px)" },{ transform:"translateX(0)" }], { duration:300 }); }
    } }, opt.checkLabel || "Check the clue");
    const reveal = h("button", { class:"ixbtn ghost", style:{ width:"100%", fontSize:"20px", minHeight:"56px", padding:"10px" }, onclick:(e) => { e.stopPropagation(); val = String(answer); show(); } }, "Teacher: show answer");
    show();
    return h("div", { class:"pcard keypad num" }, h("div", { class:"kp-lab" }, "Answer"), win, keys, check, verdict, reveal);
  }
  BM.keypad = keypad;

  /* 🔬 D8 side note: "what many scientists believe" — always smaller, styled apart */
  function sideNote(sd){
    const box = h("div", { class:"sidenote" }, h("div", { class:"sn-lab" }, "🔬 Side note · what many scientists believe"));
    const p = h("div", { class:"sn-txt" }); p.innerHTML = BM.md(sd.text || sd); box.appendChild(p);
    if (sd.src) box.appendChild(h("div", { class:"sn-src" }, "Source: " + sd.src));
    return box;
  }
  BM.sideNote = sideNote;
  T.sidenote = function(slide, ctx){
    const f = frame(slide, ctx, { paper: slide.paper });
    if (slide.kicker) f.content.appendChild(kick(slide.kicker));
    f.content.appendChild(title(slide.title, "md"));
    const main = h("div", { class:"pcard creation" }, h("div", { class:"cr-lab" }, "📜 God's creation · what we believe"));
    const mt = h("div", { class:"cr-txt" }); mt.innerHTML = BM.md(slide.main); main.appendChild(mt);
    if (slide.refs) main.appendChild(h("div", { class:"cr-ref" }, slide.refs));
    f.content.appendChild(h("div", { class:"d8" }, main, sideNote(slide.side)));
    enter(f.content);
    return { el:f.el };
  };

  /* Say it right — place-name pronunciation card (🌿 tikanga) */
  T.sayitright = function(slide, ctx){
    const f = frame(slide, ctx, { backdrop:"land" });
    f.content.append(kick(slide.kicker || "Say it right · names with respect"), title(slide.title || "Say it right", "md"));
    const cards = slide.words.map(w => {
      const c = h("div", { class:"pcard say hov" }, h("div", { class:"sw" }, w.w), h("div", { class:"ss" }, w.say), h("div", { class:"sm" }, w.mean || ""));
      c.addEventListener("click", e => { e.stopPropagation(); BM.sfx("tok"); c.classList.toggle("on"); });
      return c;
    });
    f.content.appendChild(h("div", { class:"saygrid", style:{ gridTemplateColumns:`repeat(${Math.min(cards.length, 4)},1fr)` } }, cards));
    if (slide.note){ const n = h("div", { class:"s-body say-note" }); n.innerHTML = BM.md(slide.note); f.content.appendChild(n); }
    enter(f.content);
    return { el:f.el };
  };

  T.decode = function(slide, ctx){
    const f = frame(slide, ctx, { backdrop: ctx.lesson.subject === "art" ? "art" : null });
    const C = ctx.lesson.clue;
    const solved = BM.store.get("clues", {});
    const tri = h("div", { class:"trig-badge" }, "🔑");
    const left = h("div", null, kick("Waystation Clue · unlock the next station"),
      h("div", { class:"clue" }, C.prompt),
      h("div", { class:"s-body", style:{ marginTop:"30px", fontSize:"32px", opacity:".85" } }, "Work it out with your team. Type the number and check it. Every clue this week is saved for Friday's Seal Fragment lock."));
    const done = () => { const sv = BM.store.get("clues", {}); sv[ctx.lesson.id] = true; BM.store.set("clues", sv); expl.style.display = "block"; };
    const expl = h("div", { class:"pcard", style:{ marginTop:"30px", padding:"20px 26px", fontSize:"30px", display: solved[ctx.lesson.id] ? "block" : "none" } }, "🔑 ", C.explain || "Clue saved for Friday's Seal Fragment!");
    left.appendChild(expl);
    f.content.appendChild(h("div", { class:"decode" }, left, h("div", { style:{ position:"relative" } }, tri, keypad(C.answer, done))));
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
      c.addEventListener("click", e => { e.stopPropagation(); BM.sfx("tok"); c.animate([{ transform:"scale(1)" },{ transform:"scale(1.06) rotate(-1deg)" },{ transform:"scale(1)" }], { duration:500 }); });
      return c;
    })));
    f.content.appendChild(h("div", { class:"s-body", style:{ marginTop:"30px", fontSize:"30px" } }, "🪙 Award darics for great thinking, teamwork and kindness · Next lesson: ", h("b", null, L.next || "see you next time!")));
    enter(f.content);
    return { el:f.el };
  };

  T.protocol = function(slide, ctx){
    const f = frame(slide, ctx);
    f.content.append(kick("How our caravan travels"), title("The Caravan Code", "md"));
    const P = [["respect","Respect every person and people","Persians, Greeks, Jews, Iranians today, and everyone in our room. Every culture and faith is described fairly."],["evidence","Evidence before opinion","‘How do we know?’ and ‘Who wrote this, and why?’ are our favourite questions."],["voice","Every voice heard","We listen, build on ideas and disagree kindly."],["better","Leave the road better","…than you found it: our room, our team, our world."]];
    f.content.appendChild(h("div", { class:"proto" }, P.map(([k, t, d]) => h("div", { class:"pcard hov" }, h("div", { class:"ic" }, A.protoIcon(k)), h("h3", null, t), h("p", null, d)))));
    enter(f.content);
    return { el:f.el };
  };

  T.glyphwall = function(slide, ctx){
    const f = frame(slide, ctx);
    f.content.append(kick("The Map Wall · what do we already know about Persia?"), title(slide.title || "What do you already know?", "md"));
    const wall = h("div", { class:"gwall", style:{ top:"220px" } });
    f.content.appendChild(wall);
    const key = "glyphwall";
    const notes = () => BM.store.get(key, []);
    const cols = ["#FBF7EE","#E6C873","#9fd7c1","#f2b8a8","#a9dbe3"];
    function render(){
      BM.clear(wall);
      notes().forEach((n, i) => {
        const el = h("div", { class:"gnote", style:{ left:n.x+"px", top:n.y+"px", background:cols[i % cols.length], "--r":(n.r||0)+"deg" } }, n.t, h("button", { class:"x", title:"remove", onclick:(e) => { e.stopPropagation(); const a = notes(); a.splice(i,1); BM.store.set(key, a); render(); } }, "×"));
        let drag;
        el.addEventListener("pointerdown", e => { if (e.target.classList.contains("x")) return; e.stopPropagation(); el.setPointerCapture(e.pointerId); const [x,y] = BM.toLocal(wall, e); drag = [x - n.x, y - n.y]; });
        el.addEventListener("pointermove", e => { if (!drag) return; const [x,y] = BM.toLocal(wall, e); n.x = x - drag[0]; n.y = y - drag[1]; el.style.left = n.x+"px"; el.style.top = n.y+"px"; });
        el.addEventListener("pointerup", () => { if (!drag) return; drag = null; const a = notes(); a[i] = n; BM.store.set(key, a); });
        wall.appendChild(el);
      });
    }
    const inp = h("input", { placeholder:"Type what a student says about Persia, then press Enter…", onkeydown:(e) => { e.stopPropagation(); if (e.key === "Enter" && inp.value.trim()){ const a = notes(); a.push({ t:inp.value.trim(), x:40 + (a.length*330) % 1500, y:150 + Math.floor(a.length/5)*190 + (a.length%2)*30, r:(Math.random()*6-3).toFixed(1) }); BM.store.set(key, a); inp.value = ""; render(); BM.sfx("paper"); } } });
    f.content.appendChild(h("div", { class:"gwall-input", style:{ position:"absolute", left:"0", top:"170px", zIndex:"4" } }, inp, h("button", { class:"ixbtn dark", onclick:(e) => { e.stopPropagation(); if (confirmWall()){ BM.store.set(key, []); render(); } } }, "Clear wall")));
    function confirmWall(){ return notes().length === 0 || window.__fcClearOK === true || (window.__fcClearOK = true, BM.toast("Press Clear wall again to confirm"), false); }
    render();
    enter(f.content);
    return { el:f.el };
  };

  T.safety = function(slide, ctx){
    const f = frame(slide, ctx);
    f.content.append(kick("Safety first · engineers' rules"), title(slide.title || "Stay safe in the workshop", "md"));
    f.content.appendChild(h("div", { style:{ display:"grid", gridTemplateColumns:`repeat(${slide.items.length},1fr)`, gap:"28px" } }, slide.items.map(it => h("div", { class:"pcard hov", style:{ height:"520px", display:"flex", flexDirection:"column" } }, h("div", { style:{ fontSize:"96px", lineHeight:"1" } }, it.icon), h("div", { style:{ fontFamily:"var(--f-display)", fontWeight:"900", fontSize:"42px", lineHeight:"1.02", margin:"14px 0 12px" } }, it.t), h("div", { style:{ fontSize:"28px", lineHeight:"1.26" } }, it.d)))));
    enter(f.content);
    return { el:f.el };
  };

  T.brief = function(slide, ctx){
    const f = frame(slide, ctx);
    f.content.append(kick("The Design Brief"), title(slide.title, "md"));
    const row = (lab, val, col) => h("div", { class:"pcard", style:{ padding:"22px 28px", marginBottom:"18px", display:"grid", gridTemplateColumns:"300px 1fr", gap:"20px", alignItems:"center" } }, h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"30px", letterSpacing:".12em", textTransform:"uppercase", color:col } }, lab), h("div", { style:{ fontSize:"34px", lineHeight:"1.25" }, html:BM.md(val) }));
    f.content.append(row("Stakeholder", slide.stakeholder, "#5E7F3A"), row("Need", slide.need, "#B4412F"));
    f.content.appendChild(h("div", { class:"pcard", style:{ padding:"22px 28px", display:"grid", gridTemplateColumns:"300px 1fr", gap:"20px" } }, h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"30px", letterSpacing:".12em", textTransform:"uppercase", color:"#4F7A35" } }, "Specifications", h("div", { style:{ fontFamily:"var(--f-body)", fontSize:"20px", letterSpacing:"0", textTransform:"none", fontWeight:"400", color:"var(--cacao)", marginTop:"6px" } }, "must-haves we can test")),
      h("ol", { style:{ margin:"0", paddingLeft:"36px", fontSize:"34px", lineHeight:"1.4" } }, slide.specs.map(sp => h("li", null, sp)))));
    enter(f.content);
    return { el:f.el };
  };

  T.hononga = function(slide, ctx){
    const f = frame(slide, ctx, { backdrop:"nz" });
    const b = h("div", { class:"s-body" }); b.innerHTML = slide.body.split("\n\n").map(p => `<p>${BM.md(p)}</p>`).join("");
    f.content.append(kick(slide.kicker || "Hononga Aotearoa · connecting to our place"), title(slide.title, "md"), b);
    enter(f.content);
    return { el:f.el };
  };

  T.intercept = function(slide, ctx){
    const f = frame(slide, ctx, { backdrop:"shadow", dark:true });
    f.el.classList.remove("paperbg");
    const m = h("div", { class:"m" });
    const box = h("div", { class:"intercept shadow" },
      h("div", { class:"hdr" }, h("span", { class:"rec" }), slide.hdr || "The Shadow's Note · pinned to the waystation door · ", h("span", { style:{ color:"#c9ced6" } }, slide.hdr ? "" : "silver wax seal")),
      m, h("div", { class:"ask" }, h("b", { style:{ fontFamily:"var(--f-label)", letterSpacing:".14em", color:"#E0566F" } }, "THINK ABOUT IT · "), slide.ask));
    f.content.appendChild(box);
    const art = h("div", { style:{ position:"absolute", right:"0", top:"0", height:"100%", width:"44%", zIndex:"1", WebkitMaskImage:"linear-gradient(90deg,transparent 0%,#000 40%)", maskImage:"linear-gradient(90deg,transparent 0%,#000 40%)" } }, A.portrait("shadow"));
    art.firstChild.setAttribute("style", "width:100%;height:100%");
    const cim = BM.imgSlot(slide.img || "char-shadow", "collector-img");
    cim.style.cssText += ";position:absolute;inset:0;width:100%;height:100%;object-fit:cover";
    art.appendChild(cim);
    f.el.insertBefore(art, f.content);
    let i = 0; const full = slide.msg; let tm;
    if (BM.motionOK()) tm = setInterval(() => { i++; m.textContent = full.slice(0, i) + (i % 2 ? "▌" : ""); if (i >= full.length){ clearInterval(tm); m.textContent = full; } }, 40);
    else m.textContent = full;
    m.addEventListener("click", e => { e.stopPropagation(); clearInterval(tm); m.textContent = full; });
    BM.sfx("paper");
    return { el:f.el, destroy(){ clearInterval(tm); } };
  };

  /* SEAL FRAGMENT — add the week's Waystation Clues, write the total in Old Persian number signs,
     press them into the clay lock; the clay cracks and the fragment flies to its place on the Seal. */
  T.folioseal = function(slide, ctx){
    const wk = ctx.lesson.week, W = BM.WEEKS[wk], TW = BM.TERM.weeks[wk-1];
    const f = frame(slide, ctx, { backdrop:"history", dark:true, img:"hero-w" + String(wk).padStart(2, "0"), scrim:"linear-gradient(90deg, rgba(8,10,24,.92) 0%, rgba(8,10,24,.78) 55%, rgba(8,10,24,.55) 100%)" });
    f.el.classList.remove("paperbg");
    f.content.style.top = "120px";
    const solved = BM.store.get("clues", {});
    const clueLessons = W.lessons.filter(l => l.subject !== "art");
    const opened = BM.store.get("folios", {});
    f.content.append(kick(`Seal Fragment ${TW.folio} · the clay lock`), title("Press the number into the clay", "sm"));
    // the four clue tiles
    const sum = h("div", { class:"sf-sum" });
    const tiles = clueLessons.map(l => {
      const win = h("div", { class:"sf-tile" });
      const paint = () => { win.textContent = win.dataset.on === "1" ? String(l.clue.answer) : "?"; win.classList.toggle("on", win.dataset.on === "1"); showSum(); };
      win.dataset.on = solved[l.id] ? "1" : "0";
      win.addEventListener("click", e => { e.stopPropagation(); win.dataset.on = "1"; paint(); BM.sfx("tok"); });
      win.paint = paint;
      return h("div", { class:"pcard", style:{ padding:"8px 10px", textAlign:"center", width:"140px" } }, h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", letterSpacing:".14em", fontSize:"19px", color:BM.SUBJECTS[l.subject].color, marginBottom:"4px" } }, BM.SUBJECTS[l.subject].short.toUpperCase()), win);
    });
    function showSum(){ const wins = tiles.map(t2 => t2.querySelector(".sf-tile")); const all = wins.every(w2 => w2.dataset.on === "1"); sum.textContent = all ? clueLessons.map(l => l.clue.answer).join(" + ") + " = " + W.seal.answer : "Tap each tile to bring in the week's clues."; }
    const tileRow = h("div", { class:"sf-tiles" }, tiles); tiles.forEach(t2 => t2.querySelector(".sf-tile").paint());
    const instr = h("div", { class:"s-body", style:{ fontSize:"25px", marginTop:"6px", maxWidth:"900px" } }); instr.innerHTML = BM.md(slide.instruction || W.seal.instruction);
    // the clay lock
    let pressed = [];
    const clay = h("div", { class:"sf-clay" });
    const drawClay = () => { BM.clear(clay); if (!pressed.length){ clay.appendChild(h("span", { class:"ph" }, "Soft clay · press the signs here, biggest first")); return; } const v = BM.oldPersian(pressed.reduce((a, b) => a + b, 0)); BM.clear(v); pressed.forEach((p, i) => { const g = BM.opSign(p, "#4a2c14"); g.setAttribute("transform", `translate(${i*60} 0)`); v.appendChild(g); }); v.setAttribute("viewBox", `0 0 ${pressed.length*60} 80`); clay.appendChild(v); };
    const verdict = h("div", { class:"sf-verdict" });
    const keys = h("div", { class:"sf-keys" }, [100,20,10,2,1].map(n => { const b = h("button", { class:"ixbtn", onclick:(e) => { e.stopPropagation(); if (pressed.length >= 14) return; pressed.push(n); drawClay(); verdict.textContent = ""; BM.sfx("stone"); } }); const sv = BM.svg(n === 2 || n === 20 || n === 100 ? 60 : 60, 80); sv.appendChild(BM.opSign(n, "#2B1B10")); b.append(sv, h("small", null, String(n))); return b; }));
    // the Seal
    const already = Object.keys(opened).filter(k => opened[k] && +k !== wk).map(Number);
    const seal = A.sealArt(already);
    const sealBox = h("div", { class:"sf-sealbox" }, seal);
    const cap = h("div", { class:"sf-cap" }); cap.innerHTML = BM.md(W.seal.reveal);
    function open(instant){
      const o2 = BM.store.get("folios", {}); o2[wk] = true; BM.store.set("folios", o2);
      if (instant){ seal.light(wk); cap.classList.add("on"); clay.style.opacity = ".35"; return; }
      clay.classList.add("crack"); BM.sfx("stone");
      setTimeout(() => {
        // a glowing copy of the fragment flies from the clay to its place
        const fly = BM.svg(600, 600, { class:"frag-fly" }); const fp = BM.s("path", { d:seal.fragPath(wk-1), fill:"#F6D27A", stroke:"#FBE7B0", "stroke-width":4, filter:"url(#fx-glow)" }); fly.appendChild(fp);
        const sr = sealBox.getBoundingClientRect(), cr = clay.getBoundingClientRect(), stage = f.el.getBoundingClientRect(), k = stage.width/1920;
        fly.style.cssText = `position:absolute;left:${(sr.left - stage.left)/k}px;top:${(sr.top - stage.top)/k}px;width:${sr.width/k}px;height:${sr.height/k}px;z-index:30;pointer-events:none`;
        f.el.appendChild(fly);
        const dx = ((cr.left + cr.width/2) - (sr.left + sr.width/2))/k, dy = ((cr.top + cr.height/2) - (sr.top + sr.height/2))/k;
        BM.anim(fly, [{ transform:`translate(${dx}px, ${dy}px) scale(.35) rotate(-40deg)`, opacity:0 }, { transform:`translate(${dx*.5}px, ${dy*.5 - 120}px) scale(.8) rotate(-10deg)`, opacity:1, offset:.5 }, { transform:"none", opacity:1 }], { duration:1600, easing:"cubic-bezier(.3,.7,.2,1)" }).finished.then(() => { seal.light(wk); BM.sfx("chime"); BM.anim(fly, [{ opacity:1 }, { opacity:0 }], { duration:1400 }).finished.then(() => fly.remove()); cap.classList.add("on"); });
      }, 650);
    }
    const target = BM.opParts(W.seal.answer);
    const check = h("button", { class:"ixbtn on", onclick:(e) => { e.stopPropagation();
      const total = pressed.reduce((a, b) => a + b, 0);
      if (total === W.seal.answer && pressed.join() === target.join()){ verdict.textContent = "✓ The clay cracks!"; verdict.className = "sf-verdict ok"; BM.sfx("ok"); open(false); }
      else if (total === W.seal.answer){ verdict.textContent = "Right total! Scribes used the fewest signs, biggest first."; verdict.className = "sf-verdict no"; BM.sfx("no"); }
      else { verdict.textContent = `✗ That says ${total}. Check the sum and your signs.`; verdict.className = "sf-verdict no"; BM.sfx("no"); }
    } }, "Open the lock");
    const tools = h("div", { style:{ display:"flex", gap:"12px", marginTop:"12px", alignItems:"center", flexWrap:"wrap" } },
      h("button", { class:"ixbtn dark", onclick:(e) => { e.stopPropagation(); pressed.pop(); drawClay(); } }, "↶ Undo"),
      h("button", { class:"ixbtn dark", onclick:(e) => { e.stopPropagation(); pressed = []; drawClay(); } }, "Smooth the clay"),
      check,
      h("button", { class:"ixbtn ghost", style:{ fontSize:"18px" }, onclick:(e) => { e.stopPropagation(); tiles.forEach(t2 => { const w2 = t2.querySelector(".sf-tile"); w2.dataset.on = "1"; w2.paint(); }); pressed = target.slice(); drawClay(); } }, "Teacher: show answer"));
    drawClay();
    const leftCol = h("div", null, tileRow, sum, instr, clay, keys, tools, verdict);
    f.content.appendChild(h("div", { class:"sf-grid" }, leftCol, h("div", null, sealBox, cap)));
    if (opened[wk]) open(true);
    enter(f.content);
    return { el:f.el };
  };

  /* Team cards (crest + one real or 🟡 story fact each) */
  T.teams = function(slide, ctx){
    const f = frame(slide, ctx, { paper: slide.paper });
    if (slide.kicker) f.content.appendChild(kick(slide.kicker));
    f.content.appendChild(title(slide.title || "Our caravan teams", "md"));
    const teams = BM.teams();
    f.content.appendChild(h("div", { style:{ display:"grid", gridTemplateColumns:`repeat(${Math.min(teams.length, 4)},1fr)`, gap:"24px" } }, teams.map(tm => h("div", { class:"pcard hov team-card", style:{ boxShadow:`inset 0 8px 0 ${tm.color}, var(--sh-3)` } }, A.teamCrest(tm), h("div", { class:"tn" }, tm.name), h("div", { class:"tf" }, tm.fact)))));
    enter(f.content);
    return { el:f.el };
  };

  /* Animal cards (generated wildlife images if present; drawn panel otherwise) */
  T.animalcards = function(slide, ctx){
    const f = frame(slide, ctx, { paper: slide.paper });
    if (slide.kicker) f.content.appendChild(kick(slide.kicker));
    f.content.appendChild(title(slide.title, "md"));
    const n = slide.animals.length;
    f.content.appendChild(h("div", { style:{ display:"grid", gridTemplateColumns:`repeat(${n},1fr)`, gap:"28px" } }, slide.animals.map(an => {
      const pic = h("div", { style:{ position:"relative", height:"420px", borderRadius:"8px", overflow:"hidden", background:`linear-gradient(160deg, ${an.col || "#0B7A55"}, #0a1c17)`, display:"grid", placeItems:"center", fontSize:"150px" } }, an.icon || "🐾");
      const im = BM.imgSlot(an.img, "animal-img"); im.style.cssText += ";position:absolute;inset:0;width:100%;height:100%;object-fit:cover"; pic.appendChild(im);
      if (an.status) pic.appendChild(h("div", { style:{ position:"absolute", left:"12px", top:"12px", padding:"6px 12px", borderRadius:"8px", background:"rgba(176,33,59,.92)", color:"#fff", fontFamily:"var(--f-label)", fontWeight:"900", letterSpacing:".1em", fontSize:"18px", zIndex:"2" } }, an.status));
      const d = h("div", { style:{ fontSize:"25px", lineHeight:"1.25", marginTop:"10px" } }); d.innerHTML = BM.md(an.d);
      return h("div", { class:"pcard hov", style:{ padding:"16px 18px" } }, pic, h("div", { style:{ fontFamily:"var(--f-royal)", fontWeight:"800", fontSize:"32px", lineHeight:"1.05", marginTop:"12px" } }, an.t), d);
    })));
    enter(f.content);
    return { el:f.el };
  };

  /* friendlier aliases used in The Royal Road's data */
  T.dispatch = T.transmission; T.waystationcheck = T.glyphcheck; T.waystationclue = T.decode; T.mapwall = T.glyphwall; T.shadownote = T.intercept; T.sealfragment = T.folioseal;
})(window.BM);
