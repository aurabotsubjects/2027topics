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
    if (onPaper){ const deep = { history:"#9E3826", geography:"#2C6F92", science:"#2F3D7A", technology:"#4E6B2F", art:"#8A5E14" }[L.subject] || S.color; el.style.setProperty("--subj", deep); el.style.setProperty("--subj-hi", deep); }
    el.appendChild(A.backdrop(opt.backdrop || subj, null, (ctx.index+3)*7 + L.week*13));
    if (opt.img){
      const im = BM.imgSlot(opt.img, "slide-img"); im.style.cssText += ";position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0";
      el.appendChild(im);
      el.appendChild(h("div", { class:"scrim-img", style:{ position:"absolute", inset:"0", zIndex:"0", background: opt.scrim || "linear-gradient(90deg, rgba(12,18,22,.82) 0%, rgba(12,18,22,.6) 45%, rgba(12,18,22,.35) 100%)" } }));
    }
    el.appendChild(h("div", { class:"grain" }));
    if (!opt.noVignette) el.appendChild(h("div", { class:"vignette" }));
    if (!opt.noBar) el.appendChild(phasebar(slide, ctx));
    if (slide.fs !== null) el.appendChild(h("div", { class:"badge-fs " + (slide.fs || "real") }, h("span", { class:"dot" }), slide.fs === "story" ? "Field Book story" : "Real evidence"));
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
      h("div", { class:"meta" }, h("span", { class:"rec" }), "Field Note", h("span", { style:{ opacity:".6" } }, slide.meta || "")),
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
    f.content.append(kick(slide.kicker || "Trig Check · quick recall"), title(slide.title || "What do you remember?", "md"));
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
        h("div", { class:"levels" }, h("span", { style:{ color:"#E0A866" } }, "🌱 Developing"), h("span", { style:{ color:"#E6C873" } }, "🌾 Achieved"), h("span", { style:{ color:"#7CC0DE" } }, "✨ Flying")))));
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
      else if (slide.visual.map){ const mp = BM.map.hakatere(slide.visual.map); mp.setAttribute("style", "width:100%;height:100%;display:block"); node = h("div", { class:"pcard", style:{ width:(slide.visual.size || 700) + "px", height:(slide.visual.size || 700) + "px", padding:"0", overflow:"hidden" } }, mp); }
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
    const grid = h("div", { style:{ display:"grid", gridTemplateColumns:`repeat(${n},1fr)`, gap:"30px" } });
    slide.cards.forEach(c => {
      const card = h("div", { class:"pcard hov", style:{ height: slide.h || "600px", display:"flex", flexDirection:"column", padding:"28px 30px" } });
      if (c.artefact){ card.appendChild(A.artefactBox(c.artefact, "width:100%;height:260px;margin-bottom:10px")); }
      if (c.svg){ const a = c.svg(); a.setAttribute("style", "width:100%;height:150px;margin-bottom:10px"); card.appendChild(a); }
      if (c.icon){ card.appendChild(h("div", { style:{ fontSize:"90px", lineHeight:"1", marginBottom:"10px" } }, c.icon)); }
      if (c.big) card.appendChild(h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"84px", lineHeight:".9", color:c.color || "#B4412F" } }, c.big));
      card.appendChild(h("div", { style:{ fontFamily:"var(--f-display)", fontWeight:"900", fontSize:"40px", lineHeight:"1.02", margin:"8px 0 10px" } }, c.t));
      const d = h("div", { style:{ fontSize:"27px", lineHeight:"1.26" } }); d.innerHTML = BM.md(c.d); card.appendChild(d);
      if (c.foot) card.appendChild(h("div", { style:{ marginTop:"auto", fontFamily:"var(--f-label)", fontWeight:"800", letterSpacing:".12em", textTransform:"uppercase", fontSize:"19px", color:"#4F7A35" } }, c.foot));
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
    const cols = { A:"#3D8DB3", B:"#5E7F3A", C:"#B4412F" };
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
    const keys = h("div", { class:"keys" }, ["1","2","3","4","5","6","7","8","9"].map(d => k(d, () => { if (val === "0") val = d; else if (val.length < 4) val += d; })), k("⌫", () => val = val.slice(0, -1), "dark"), k("0", () => { if (val === "") val = "0"; else if (val !== "0" && val.length < 4) val += "0"; }), k("Clear", () => val = "", "dark"));
    const check = h("button", { class:"ixbtn on", style:{ width:"100%" }, onclick:(e) => { e.stopPropagation();
      if (+val === answer && val !== ""){ verdict.textContent = "✓ Fixed on the map!"; verdict.className = "verdict ok"; BM.sfx("ok"); onOK && onOK(); }
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
    f.content.append(kick(slide.kicker || "Say it right · 🌿 tikanga"), title(slide.title || "Our place names", "md"));
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
    const tri = h("div", { class:"trig-badge" }, "▲");
    const left = h("div", null, kick("Trig Clue · fix our position"),
      h("div", { class:"clue" }, C.prompt),
      h("div", { class:"s-body", style:{ marginTop:"30px", fontSize:"32px", opacity:".85" } }, "Work it out with your team. Type the number and check it. Every clue this week is saved for Friday's Survey Seal."));
    const done = () => { const sv = BM.store.get("clues", {}); sv[ctx.lesson.id] = true; BM.store.set("clues", sv); expl.style.display = "block"; };
    const expl = h("div", { class:"pcard", style:{ marginTop:"30px", padding:"20px 26px", fontSize:"30px", display: solved[ctx.lesson.id] ? "block" : "none" } }, "📐 ", C.explain || "Clue saved for Friday's Survey Seal!");
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
    f.content.appendChild(h("div", { class:"s-body", style:{ marginTop:"30px", fontSize:"30px" } }, "🌾 Award wheat sheaves for great thinking, teamwork and kindness · Next lesson: ", h("b", null, L.next || "see you next time!")));
    enter(f.content);
    return { el:f.el };
  };

  T.protocol = function(slide, ctx){
    const f = frame(slide, ctx);
    f.content.append(kick("How we work in the field"), title("The Field Protocol", "md"));
    const P = [["respect","Respect people and places","Every family's story, every place name, every marae, farm and riverbed. We handle everything with care."],["evidence","Evidence before opinion","‘How do we know?’ is our favourite question."],["voice","Every voice heard","We listen, build on ideas and disagree kindly."],["better","Leave it better","…than we found it: our room, our team, our river, our place."]];
    f.content.appendChild(h("div", { class:"proto" }, P.map(([k, t, d]) => h("div", { class:"pcard hov" }, h("div", { class:"ic" }, A.protoIcon(k)), h("h3", null, t), h("p", null, d)))));
    enter(f.content);
    return { el:f.el };
  };

  T.glyphwall = function(slide, ctx){
    const f = frame(slide, ctx);
    f.content.append(kick("The Map Wall · what do we already know about our place?"), title(slide.title || "What do you already know?", "md"));
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
    const inp = h("input", { placeholder:"Type what a student says about our place, then press Enter…", onkeydown:(e) => { e.stopPropagation(); if (e.key === "Enter" && inp.value.trim()){ const a = notes(); a.push({ t:inp.value.trim(), x:40 + (a.length*330) % 1500, y:150 + Math.floor(a.length/5)*190 + (a.length%2)*30, r:(Math.random()*6-3).toFixed(1) }); BM.store.set(key, a); inp.value = ""; render(); BM.sfx("paper"); } } });
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
    f.content.append(kick(slide.kicker || "Hononga · tākata whenua & tikanga"), title(slide.title, "md"), b);
    enter(f.content);
    return { el:f.el };
  };

  T.intercept = function(slide, ctx){
    const f = frame(slide, ctx, { backdrop:"dealer", dark:true });
    const m = h("div", { class:"m" });
    const box = h("div", { class:"intercept dealer" },
      h("div", { class:"hdr" }, h("span", { class:"rec" }), "The Dealer's Offer · a letter left at the Museum · ", h("span", { style:{ color:"var(--gold)" } }, "✒︎ gold-edged card")),
      m, h("div", { class:"ask" }, h("b", { style:{ fontFamily:"var(--f-label)", letterSpacing:".14em", color:"var(--gold)" } }, "THINK ABOUT IT · "), slide.ask));
    f.content.appendChild(box);
    const art = h("div", { style:{ position:"absolute", right:"0", top:"0", height:"100%", width:"44%", zIndex:"1", WebkitMaskImage:"linear-gradient(90deg,transparent 0%,#000 40%)", maskImage:"linear-gradient(90deg,transparent 0%,#000 40%)" } }, A.portrait("dealer"));
    art.firstChild.setAttribute("style", "width:100%;height:100%");
    const cim = BM.imgSlot("char-dealer", "collector-img");
    cim.style.cssText += ";position:absolute;inset:0;width:100%;height:100%;object-fit:cover";
    art.appendChild(cim);
    f.el.insertBefore(art, f.content);
    let i = 0; const full = slide.msg; let t;
    if (BM.motionOK()) t = setInterval(() => { i++; m.textContent = full.slice(0, i) + (i % 2 ? "▌" : ""); if (i >= full.length){ clearInterval(t); m.textContent = full; } }, 40);
    else m.textContent = full;
    BM.sfx("paper");
    return { el:f.el, destroy(){ clearInterval(t); } };
  };

  /* SURVEY SEAL — combine the week's Trig Clues into a bearing, dial it on the theodolite */
  T.folioseal = function(slide, ctx){
    const f = frame(slide, ctx, { backdrop:"history", dark:true, img:"hero-w" + String(ctx.lesson.week).padStart(2, "0"), scrim:"linear-gradient(90deg, rgba(12,18,22,.9) 0%, rgba(12,18,22,.72) 55%, rgba(12,18,22,.5) 100%)" });
    f.el.classList.remove("paperbg");
    const W = BM.WEEKS[ctx.lesson.week];
    const solved = BM.store.get("clues", {});
    const clueLessons = W.lessons.filter(l => l.subject !== "art");
    f.content.append(kick(`Map Sheet ${BM.TERM.weeks[ctx.lesson.week-1].folio} · the Survey Seal`), title("Dial the bearing", "sm"));
    const tiles = h("div", { style:{ display:"flex", gap:"18px", marginTop:"6px" } }, clueLessons.map(l => {
      const win = h("div", { class:"seal-tile" });
      const paint = () => { win.textContent = win.dataset.on === "1" ? String(l.clue.answer) : "?"; win.classList.toggle("on", win.dataset.on === "1"); };
      win.dataset.on = solved[l.id] ? "1" : "0"; paint();
      win.addEventListener("click", e => { e.stopPropagation(); win.dataset.on = "1"; paint(); BM.sfx("tok"); });
      return h("div", { class:"pcard", style:{ padding:"10px 12px", textAlign:"center", width:"150px" } }, h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", letterSpacing:".14em", fontSize:"20px", color:BM.SUBJECTS[l.subject].color, marginBottom:"6px" } }, BM.SUBJECTS[l.subject].short.toUpperCase()), win);
    }));
    const instr = h("div", { class:"s-body", style:{ fontSize:"29px", marginTop:"18px", maxWidth:"820px" } }); instr.innerHTML = BM.md(slide.instruction || W.seal.instruction);
    // theodolite dial
    let deg = 0;
    const dial = BM.svg(420, 420, { class:"theo", style:"width:380px;height:380px;cursor:grab;touch-action:none" });
    const rim = s("g");
    rim.appendChild(s("circle", { cx:210, cy:210, r:200, fill:"#2F3E46", stroke:"#C9A04A", "stroke-width":10 }));
    rim.appendChild(s("circle", { cx:210, cy:210, r:150, fill:"#1F2A30" }));
    for (let i=0;i<360;i+=5){ const a = (i - 90)*Math.PI/180, r1 = i % 30 === 0 ? 168 : i % 10 === 0 ? 178 : 184; rim.appendChild(s("line", { x1:210 + Math.cos(a)*r1, y1:210 + Math.sin(a)*r1, x2:210 + Math.cos(a)*194, y2:210 + Math.sin(a)*194, stroke:"#F3ECDD", "stroke-width": i % 30 === 0 ? 3 : 1.5 })); if (i % 30 === 0) rim.appendChild(s("text", { x:210 + Math.cos(a)*152, y:210 + Math.sin(a)*152 + 7, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":800, "font-size":18, fill:"#E6C873" }, String(i))); }
    const needle = s("g", { style:"transition:transform .25s ease-out; transform-origin:210px 210px" });
    needle.appendChild(s("path", { d:"M210 60 L222 210 L210 230 L198 210Z", fill:"#B4412F" }));
    needle.appendChild(s("circle", { cx:210, cy:210, r:22, fill:"#C9A04A" }));
    dial.append(rim, needle, s("text", { x:210, y:40, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":22, fill:"#F3ECDD" }, "N"));
    const readout = h("div", { class:"theo-read" }, "000°");
    const set = d => { deg = ((Math.round(d) % 360) + 360) % 360; needle.style.transform = `rotate(${deg}deg)`; readout.textContent = String(deg).padStart(3, "0") + "°"; };
    let dragging = false;
    const angleFrom = e => { const r = dial.getBoundingClientRect(); const cx = r.left + r.width/2, cy = r.top + r.height/2; return Math.atan2(e.clientY - cy, e.clientX - cx)*180/Math.PI + 90; };
    dial.addEventListener("pointerdown", e => { e.stopPropagation(); dragging = true; dial.setPointerCapture(e.pointerId); set(angleFrom(e)); BM.sfx("tok"); });
    dial.addEventListener("pointermove", e => { if (!dragging) return; const before = deg; set(angleFrom(e)); if (before !== deg && deg % 5 === 0) BM.sfx("tok"); });
    dial.addEventListener("pointerup", () => { dragging = false; });
    const nudge = (d, lab) => h("button", { class:"ixbtn dark", onclick:(e) => { e.stopPropagation(); set(deg + d); BM.sfx("tok"); } }, lab);
    const verdict = h("div", { class:"verdict" });
    // the map sheet (sealed → unfolds)
    const sheet = h("div", { class:"sheet-wrap" });
    const art = h("div", { class:"sheet-art" }, W.seal.art());
    const flapT = h("div", { class:"flap top" }), flapB = h("div", { class:"flap bottom" });
    const seal = h("div", { class:"wax" }, h("span", null, "SHEET " + BM.TERM.weeks[ctx.lesson.week-1].folio));
    sheet.append(art, flapT, flapB, seal);
    const caption = h("div", { class:"sheet-cap" }); caption.innerHTML = BM.md(W.seal.reveal);
    sheet.appendChild(caption);
    const open = () => {
      seal.classList.add("crack"); BM.sfx("paper");
      setTimeout(() => { sheet.classList.add("open"); BM.sfx("chime"); }, 600);
      const opened = BM.store.get("folios", {}); opened[ctx.lesson.week] = true; BM.store.set("folios", opened);
    };
    const check = h("button", { class:"ixbtn on", onclick:(e) => { e.stopPropagation();
      if (deg === W.seal.answer){ verdict.textContent = "✓ Bearing fixed — the seal cracks!"; verdict.className = "verdict ok"; BM.sfx("ok"); open(); }
      else { verdict.textContent = `✗ ${String(deg).padStart(3,"0")}° isn't it — add the clues again`; verdict.className = "verdict no"; BM.sfx("no"); }
    } }, "Fix the bearing");
    const show = h("button", { class:"ixbtn ghost", style:{ fontSize:"18px" }, onclick:(e) => { e.stopPropagation(); set(W.seal.answer); } }, "Teacher: show bearing");
    const theo = h("div", { class:"theo-box" }, h("div", { style:{ display:"grid", placeItems:"center", gap:"6px" } }, dial, readout),
      h("div", { style:{ display:"flex", flexDirection:"column", gap:"12px" } }, h("div", { style:{ display:"flex", gap:"10px" } }, nudge(-10, "−10°"), nudge(-1, "−1°"), nudge(1, "+1°"), nudge(10, "+10°")), check, verdict, show));
    const leftCol = h("div", null, tiles, instr, theo);
    f.content.appendChild(h("div", { style:{ display:"grid", gridTemplateColumns:"1fr 520px", gap:"60px", alignItems:"start" } }, leftCol, sheet));
    if (BM.store.get("folios", {})[ctx.lesson.week]){ seal.classList.add("crack"); sheet.classList.add("open"); set(W.seal.answer); }
    enter(f.content);
    return { el:f.el };
  };

  /* friendlier aliases used in The Braided Map's data */
  T.fieldnote = T.transmission; T.trigcheck = T.glyphcheck; T.trigclue = T.decode; T.mapwall = T.glyphwall; T.dealer = T.intercept; T.surveyseal = T.folioseal;
})(window.BM);
