/* ==========================================================
   PRESENTER — fullscreen slides, notes, toolbar, dual screen
   Keys: → Space PgDn next · ← PgUp back · N notes · T timer
         P picker · C cacao · B calm · F fullscreen · D class screen
         M sound · Esc close/exit
   ========================================================== */
(function(FC){
  "use strict";
  const h = FC.h;
  const P = FC.presenter = {};
  let state = null;
  let chan = null;
  try { chan = new BroadcastChannel("fc5-present"); } catch(e){}

  const NOTE_LABEL = { SAY:"🗣️ Say", ASK:"❓ Ask", LISTEN:"👂 Listen for", IF:"↪️ If they say…", CLICK:"🖱️ Click", TALK:"🤝 Turn & talk", DEEPER:"⭐ Deeper", PACE:"🧘 Pace", SAFETY:"⚠️ Safety", WAIT:"⏳ Wait time", NOTE:"📝 Note" };

  P.lessonById = function(id){
    for (const w of Object.values(FC.WEEKS)){ const l = w.lessons.find(x => x.id === id); if (l) return l; }
    return null;
  };

  P.open = function(id, index, opts){
    opts = opts || {};
    const lesson = P.lessonById(id);
    if (!lesson){ FC.toast("Lesson not found"); location.hash = "#/"; return; }
    P.close(true);
    const root = h("div", { class:"presenter" + (opts.audience ? " audience" : "") });
    const host = h("div", { class:"stage-host" });
    const stage = h("div", { class:"stage" });
    host.appendChild(stage); root.appendChild(host);
    document.body.appendChild(root);
    document.body.style.overflow = "hidden";
    state = { lesson, id, index:-1, step:0, root, stage, host, api:null, audience:!!opts.audience, console:false, overlays:{} };
    buildChrome();
    fit(); window.addEventListener("resize", fit);
    document.addEventListener("keydown", onKey);
    root.addEventListener("mousemove", onMove);
    root.addEventListener("click", onClick);
    if (chan) chan.onmessage = onMsg;
    window.addEventListener("storage", onStorage);
    state.gloss = FC.gloss ? FC.gloss.attach(stage, lesson, root) : null;
    go(FC.clamp(index|0, 0, lesson.slides.length-1), 0, true);
    if (opts.audience){ root.querySelector(".ptool").style.display = "none"; }
    idle();
  };

  P.close = function(silent){
    if (!state) return;
    try { state.api && state.api.destroy && state.api.destroy(); } catch(e){}
    clearInterval(state.timerT);
    try { state.gloss && state.gloss.destroy(); } catch(e){}
    window.removeEventListener("resize", fit);
    document.removeEventListener("keydown", onKey);
    window.removeEventListener("storage", onStorage);
    state.root.remove();
    document.body.style.overflow = "";
    if (!silent && document.fullscreenElement) document.exitFullscreen().catch(() => {});
    state = null;
  };
  P.active = () => !!state;

  function fit(){
    if (!state) return;
    const r = state.host.getBoundingClientRect();
    const k = Math.min(r.width/1920, r.height/1080);
    state.stage.style.transform = `translate(${-960*k}px, ${-540*k}px) scale(${k})`;
    state.stage.style.left = (r.width/2) + "px"; state.stage.style.top = (r.height/2) + "px";
  }

  function render(i){
    const L = state.lesson, slide = L.slides[i];
    const fn = FC.SLIDE[slide.type] || (FC.slideExtras || {})[slide.type] || FC.SLIDE.content;
    const ctx = { lesson:L, index:i, total:L.slides.length, presenter:P };
    let res;
    try { res = fn(slide, ctx); } catch(e){ console.error(e); res = { el:h("div", { class:"slide" }, h("div", { class:"content" }, "Slide error: " + e.message)) }; }
    return res;
  }

  function go(i, step, first, fromRemote){
    if (!state) return;
    const L = state.lesson;
    if (i < 0 || i >= L.slides.length) return;
    const dir = i >= state.index ? 1 : -1;
    const oldEl = state.cur, oldApi = state.api;
    const oldPhase = state.index >= 0 ? L.slides[state.index].phase : null;
    const res = render(i);
    state.index = i; state.api = res; state.cur = res.el;
    state.stage.appendChild(res.el);
    state.step = 0;
    if (step && res.step){ state.step = Math.min(step, res.steps||0); res.step(state.step); }
    else if (res.step && res.steps) res.step(0);
    // transition
    const phaseChange = oldPhase && oldPhase !== L.slides[i].phase;
    if (oldEl){
      try { oldApi && oldApi.destroy && oldApi.destroy(); } catch(e){}
      if (FC.motionOK() && !first){
        if (phaseChange){
          oldEl.style.transformOrigin = dir > 0 ? "left center" : "right center";
          res.el.style.transformOrigin = dir > 0 ? "right center" : "left center";
          FC.anim(oldEl, [{ transform:"rotateY(0)", filter:"brightness(1)" }, { transform:`rotateY(${dir*-88}deg)`, filter:"brightness(.4)" }], { duration:750, easing:"cubic-bezier(.6,0,.4,1)" }).finished.then(() => oldEl.remove());
          FC.anim(res.el, [{ transform:`rotateY(${dir*88}deg)`, filter:"brightness(.4)" }, { transform:"rotateY(0)", filter:"brightness(1)" }], { duration:850, delay:250, easing:"cubic-bezier(.2,.8,.2,1)" });
          FC.sfx("paper");
        } else {
          FC.anim(oldEl, [{ opacity:1, transform:"none" }, { opacity:0, transform:`translateX(${dir*-90}px) scale(.985)` }], { duration:450, easing:"cubic-bezier(.4,0,.2,1)" }).finished.then(() => oldEl.remove());
          FC.anim(res.el, [{ opacity:0, transform:`translateX(${dir*120}px)` }, { opacity:1, transform:"none" }], { duration:650, easing:"cubic-bezier(.2,.8,.2,1)" });
        }
      } else oldEl.remove();
    }
    updateChrome();
    if (!state.audience){
      try { history.replaceState(null, "", `#/present/${state.id}/${i}`); } catch(e){}
      FC.store.set("lastSlide:" + state.id, i);
    }
    if (!fromRemote) broadcast();
  }
  function next(){
    const a = state.api;
    if (a && a.steps && state.step < a.steps){ state.step++; a.step(state.step); updateChrome(); broadcast(); return; }
    if (state.index < state.lesson.slides.length - 1) go(state.index + 1);
    else FC.toast("End of lesson — press Esc to return");
  }
  function prev(){
    const a = state.api;
    if (a && a.steps && state.step > 0){ state.step--; a.step(state.step); updateChrome(); broadcast(); return; }
    if (state.index > 0) go(state.index - 1);
  }
  P.next = () => state && next(); P.prev = () => state && prev();

  /* ---------- dual-screen sync ---------- */
  function broadcast(){
    if (!state || state.audience) return;
    const msg = { type:"goto", id:state.id, index:state.index, step:state.step, t:Date.now() };
    try { chan && chan.postMessage(msg); } catch(e){}
    FC.store.set("presentSync", msg);
  }
  function onMsg(e){ follow(e.data); }
  function onStorage(e){ if (e.key === "fc5:presentSync" && e.newValue){ try { follow(JSON.parse(e.newValue)); } catch(_){} } }
  function follow(m){
    if (!state || !state.audience || !m || m.type !== "goto") return;
    if (m.id !== state.id){ P.open(m.id, m.index, { audience:true }); return; }
    if (m.index !== state.index) go(m.index, m.step, false, true);
    else if (state.api && state.api.step && m.step !== state.step){ state.step = m.step; state.api.step(m.step); }
  }
  function openAudience(){
    const url = location.href.split("#")[0].split("?")[0] + `?audience=1#/present/${state.id}/${state.index}`;
    const w = window.open(url, "fc5-class-screen", "popup,width=1280,height=720");
    if (!w){ FC.toast("Pop-up blocked — allow pop-ups for this page"); return; }
    state.console = true; state.root.classList.add("console"); fit(); updateChrome();
    FC.toast("Drag the new window onto the class screen, then press F there");
  }

  /* ---------- chrome ---------- */
  function tb(icon, tip, key, fn){ const b = h("button", { "data-tip":tip, "aria-label":tip, onclick:(e) => { e.stopPropagation(); fn(); } }, FC.icon(icon), key ? h("span", { class:"k" }, key) : null); return b; }
  function buildChrome(){
    const R = state.root;
    const pos = h("div", { class:"pos" });
    const notesB = tb("notes", "Teacher notes", "N", toggleNotes);
    const soundB = tb(FC.settings().sound ? "sound" : "mute", "Sound on/off", "M", toggleSound);
    const bar = h("div", { class:"ptool" },
      tb("exit", "Exit to lesson", "Esc", exit),
      h("div", { class:"sep" }),
      tb("prev", "Back", "←", prev), pos, tb("next", "Next", "→", next),
      h("div", { class:"sep" }),
      notesB, tb("timer", "Timer", "T", () => toggleOv("timer")), tb("pick", "Random picker", "P", () => toggleOv("picker")), tb("bean", "Cacao beans", "C", () => toggleOv("cacao")),
      tb("calm", "Calm screen", "B", toggleCalm), soundB,
      h("div", { class:"sep" }),
      tb("screen", "Open class screen (dual display)", "D", openAudience), tb("full", "Fullscreen", "F", toggleFull));
    R.appendChild(bar);
    state.ui = { pos, notesB, soundB };
    const notes = h("div", { class:"notes" }); R.appendChild(notes); state.ui.notes = notes;
    if (FC.store.get("notesOpen", false)) notes.classList.add("on");
    const tf = h("div", { class:"timer-float" }); R.appendChild(tf); state.ui.timerFloat = tf;
    const calm = h("div", { class:"calm" }, h("div", { class:"breath" }), h("p", null, "Breathe in · breathe out · press B to return")); R.appendChild(calm); state.ui.calm = calm;
    const cs = h("div", { class:"console-side" }); const cb = h("div", { class:"console-bottom" }); R.append(cs, cb); state.ui.cside = cs; state.ui.cbot = cb;
    ["timer","picker","cacao"].forEach(k => { const o = h("div", { class:"overlay", onclick:(e) => { if (e.target === o) toggleOv(k); } }); R.appendChild(o); state.overlays[k] = o; });
  }
  function notesHTML(slide){
    const L = state.lesson;
    const ph = FC.PHASES.find(p => p.id === slide.phase) || {};
    const wrap = h("div");
    wrap.appendChild(h("h4", null, `Slide ${state.index+1}/${L.slides.length} · ${ph.icon||""} ${ph.name||""}`, h("span", { class:"aim" }, ph.min ? `Aim: minutes ${ph.min}` : "")));
    (slide.notes || []).forEach(([k, t]) => { const r = h("div", { class:"note-row" }, h("div", { class:"k k-" + k }, NOTE_LABEL[k] || k), h("div")); r.lastChild.innerHTML = FC.md(t); wrap.appendChild(r); });
    if (!(slide.notes||[]).length) wrap.appendChild(h("div", { style:{ opacity:".6" } }, "No notes for this slide."));
    return wrap;
  }
  function updateChrome(){
    if (!state || !state.ui) return;
    const L = state.lesson, slide = L.slides[state.index];
    const st = state.api && state.api.steps ? ` · ${state.step}/${state.api.steps}` : "";
    state.ui.pos.textContent = `${state.index+1}/${L.slides.length}${st}`;
    FC.clear(state.ui.notes).appendChild(notesHTML(slide));
    if (state.console){
      const cs = FC.clear(state.ui.cside);
      cs.appendChild(h("div", { class:"kicker", style:{ color:"var(--cochineal)" } }, "Teacher console · class screen follows this window"));
      cs.appendChild(h("h2", { style:{ fontFamily:"var(--f-display)", fontWeight:"900", fontSize:"30px", margin:"8px 0 12px" } }, L.title));
      cs.appendChild(notesHTML(slide));
      const nx = L.slides[state.index+1];
      FC.clear(state.ui.cbot).append(h("div", { class:"nxt" }, nx ? "Up next" : "End of lesson"), h("div", { class:"nt" }, nx ? (nx.title || nx.q || (nx.type === "transmission" ? "Field transmission" : nx.type)) : "Press Esc to return"));
    }
    state.ui.notesB.classList.toggle("on", state.ui.notes.classList.contains("on"));
  }
  function toggleNotes(){ const n = state.ui.notes; n.classList.toggle("on"); FC.store.set("notesOpen", n.classList.contains("on")); updateChrome(); }
  function toggleCalm(){ state.ui.calm.classList.toggle("on"); }
  function toggleSound(){ const st = FC.settings(); st.sound = !st.sound; FC.saveSettings(st); const b = state.ui.soundB; b.replaceChild(FC.icon(st.sound ? "sound" : "mute"), b.firstChild); FC.toast(st.sound ? "Sound on" : "Sound off"); if (st.sound) FC.sfx("chime"); }
  function toggleFull(){ if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(() => FC.toast("Fullscreen not available")); else document.exitFullscreen(); }
  function exit(){ const id = state.id; P.close(); location.hash = `#/lesson/${id}`; }

  /* ---------- overlays ---------- */
  function toggleOv(k){
    const o = state.overlays[k];
    const on = !o.classList.contains("on");
    Object.values(state.overlays).forEach(x => x.classList.remove("on"));
    if (!on) return;
    FC.clear(o).appendChild(({ timer:timerCard, picker:pickerCard, cacao:cacaoCard })[k]());
    o.classList.add("on");
  }
  const closeX = (k) => h("button", { class:"ov-close", onclick:() => toggleOv(k) }, "×");
  function timerCard(){
    const c = h("div", { class:"ov-card" }, closeX("timer"), h("h3", null, "Timer"));
    const g = h("div", { style:{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"10px" } });
    [1,2,3,5,7,10,20,25].forEach(m => g.appendChild(h("button", { class:"btn", onclick:() => { startTimer(m*60); toggleOv("timer"); } }, `${m} min`)));
    c.appendChild(g);
    c.appendChild(h("p", { class:"muted", style:{ color:"var(--cacao)" } }, "The timer floats in the top-right corner of the class screen."));
    return c;
  }
  function startTimer(sec){
    clearInterval(state.timerT);
    const tf = state.ui.timerFloat; let left = sec, paused = false;
    const tv = h("span"); const pb = h("button", { onclick:(e) => { e.stopPropagation(); paused = !paused; pb.textContent = paused ? "▶" : "❚❚"; } }, "❚❚");
    const xb = h("button", { onclick:(e) => { e.stopPropagation(); clearInterval(state.timerT); tf.classList.remove("on"); } }, "✕");
    FC.clear(tf).append("⏱", tv, pb, xb); tf.classList.add("on"); tf.classList.remove("warn");
    const draw = () => { tv.textContent = FC.fmtTime(Math.max(0,left)); tf.classList.toggle("warn", left <= 60); };
    draw();
    state.timerT = setInterval(() => { if (paused) return; left--; draw(); if (left === 0){ FC.sfx("chime"); tf.animate([{ transform:"scale(1)" },{ transform:"scale(1.2)" },{ transform:"scale(1)" }], { duration:500, iterations:4 }); } if (left < -5) { clearInterval(state.timerT); } }, 1000);
  }
  function pickerCard(){
    const studs = FC.students(), teams = FC.teams().map(t => t.name);
    let pool = studs.length ? "students" : "teams";
    const out = h("div", { class:"picker-out" }, "?");
    const c = h("div", { class:"ov-card", style:{ textAlign:"center" } }, closeX("picker"), h("h3", null, "Random Picker"), out);
    const used = new Set();
    const spin = () => {
      const list = pool === "students" ? studs : teams;
      if (!list.length){ out.textContent = "Add names in Settings"; return; }
      let avail = list.filter(n => !used.has(n)); if (!avail.length){ used.clear(); avail = list.slice(); }
      const pick = avail[Math.floor(Math.random()*avail.length)];
      let n = 0; const t = setInterval(() => { out.textContent = list[Math.floor(Math.random()*list.length)]; FC.sfx("tok"); if (++n > 14){ clearInterval(t); out.textContent = pick; used.add(pick); FC.sfx("ok"); out.animate([{ transform:"scale(.8)" },{ transform:"scale(1.1)" },{ transform:"scale(1)" }], { duration:500 }); } }, 70);
    };
    const row = h("div", { style:{ display:"flex", gap:"10px", justifyContent:"center", flexWrap:"wrap" } },
      h("button", { class:"btn gold", onclick:spin }, "Pick!"),
      h("button", { class:"btn", onclick:(e) => { pool = pool === "students" ? "teams" : "students"; e.target.textContent = pool === "students" ? "Picking: students" : "Picking: teams"; } }, pool === "students" ? "Picking: students" : "Picking: teams"));
    c.appendChild(row);
    if (!studs.length) c.appendChild(h("p", { style:{ color:"var(--cacao)", fontSize:"15px" } }, "Tip: add your class list in Settings (stored only on this computer)."));
    return c;
  }
  function cacaoCard(){
    const c = h("div", { class:"ov-card", style:{ width:"min(1100px, 92vw)" } }, closeX("cacao"), h("h3", null, "🫘 Cacao Beans"));
    const grid = h("div", { class:"cacao-grid" });
    const draw = () => {
      FC.clear(grid);
      const sc = FC.store.get("cacao", {});
      FC.teams().forEach(t => {
        const v = sc[t.id] || 0; const tv = h("div", { class:"tv" }, String(v));
        const mod = d => { const s2 = FC.store.get("cacao", {}); s2[t.id] = Math.max(0, (s2[t.id]||0) + d); FC.store.set("cacao", s2); FC.sfx(d > 0 ? "ok" : "tok"); draw(); };
        grid.appendChild(h("div", { class:"cacao-team", style:{ boxShadow:`inset 0 6px 0 ${t.color}, var(--sh-1)` } }, h("div", { class:"tn" }, t.name), tv, h("div", { class:"row" }, h("button", { onclick:() => mod(-1) }, "−"), h("button", { onclick:() => mod(1) }, "+"), h("button", { onclick:() => mod(5), style:{ width:"60px", fontSize:"18px" } }, "+5"))));
      });
    };
    draw(); c.appendChild(grid);
    c.appendChild(h("p", { style:{ color:"var(--cacao)", fontSize:"15px", marginBottom:0 } }, "Beans reward thinking, teamwork, kindness and perseverance — they're never tied to rubric levels."));
    return c;
  }

  /* ---------- input ---------- */
  function onKey(e){
    if (!state) return;
    if (e.target && /INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
    const k = e.key;
    if (["ArrowRight","PageDown"," ","Enter"].includes(k)){ e.preventDefault(); next(); }
    else if (["ArrowLeft","PageUp","Backspace"].includes(k)){ e.preventDefault(); prev(); }
    else if (k === "Home"){ go(0); } else if (k === "End"){ go(state.lesson.slides.length-1); }
    else if (k === "n" || k === "N") toggleNotes();
    else if (k === "t" || k === "T") toggleOv("timer");
    else if (k === "p" || k === "P") toggleOv("picker");
    else if (k === "c" || k === "C") toggleOv("cacao");
    else if (k === "b" || k === "B" || k === ".") toggleCalm();
    else if (k === "f" || k === "F") toggleFull();
    else if (k === "d" || k === "D") openAudience();
    else if (k === "m" || k === "M") toggleSound();
    else if (k === "Escape"){
      const open = Object.values(state.overlays).find(o => o.classList.contains("on"));
      if (open){ open.classList.remove("on"); return; }
      if (state.ui.calm.classList.contains("on")){ toggleCalm(); return; }
      if (!state.audience && !document.fullscreenElement) exit();
    }
    else if (/^[1-5]$/.test(k) && e.altKey){ const ph = FC.PHASES[+k-1].id; const i = state.lesson.slides.findIndex(s2 => s2.phase === ph); if (i >= 0) go(i); }
  }
  let idleT;
  function idle(){ if (!state) return; state.root.classList.remove("idle"); clearTimeout(idleT); idleT = setTimeout(() => state && state.root.classList.add("idle"), 2600); }
  let raf;
  function onMove(e){
    idle();
    if (!state || !FC.motionOK()) return;
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      if (!state || !state.cur) return;
      const r = state.root.getBoundingClientRect();
      const nx = (e.clientX - r.left)/r.width*2 - 1, ny = (e.clientY - r.top)/r.height*2 - 1;
      state.cur.querySelectorAll(".layer[data-depth]").forEach(l => { const d = +l.dataset.depth; l.style.transform = `translate(${(-nx*d*22).toFixed(1)}px, ${(-ny*d*14).toFixed(1)}px)`; });
    });
  }
  function onClick(e){
    // clicking empty stage space advances (like a presentation); interactive elements stop propagation
    if (!state) return;
    if (e.target.closest(".ptool, .notes, .overlay, .timer-float, .console-side, button, input, a, .flip, .gnote, .pcard, svg, canvas")) return;
    if (state.ui.calm.classList.contains("on")){ toggleCalm(); return; }
    next();
  }
})(window.FC);
