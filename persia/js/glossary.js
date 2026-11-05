/* ==========================================================
   GLOSSARY HOVER — vocabulary pop-ups on slides.
   Hover (or tap) an underlined word on any slide to see its
   meaning; it disappears when the pointer moves away.
   • Today's lesson vocab = gold dotted underline ("Lesson word")
   • Other vocab from the term + uncommon words = faint underline
   Each word is underlined only the first time it appears on a slide.
   ========================================================== */
(function(BM){
  "use strict";
  const G = BM.gloss = {};
  let INDEX = null;           // lower-case variant -> entry
  let RE = null;              // big matching regex

  const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const isAbbr = s => /^[A-Z]{2,5}s?$/.test(s);

  function variants(w, alt){
    const out = new Set();
    let parts = String(w).split(/\s*\/\s*/);
    // "open / closed circuit" → "open circuit", "closed circuit"
    if (parts.length === 2 && !/\s/.test(parts[0].trim()) && /\s/.test(parts[1].replace(/\s*\([^)]*\)/, "").trim())){
      const tail = parts[1].replace(/\s*\([^)]*\)/, "").trim().split(/\s+/).slice(1).join(" ");
      parts = [parts[0] + " " + tail, parts[1]];
    }
    parts.forEach(part => {
      const paren = (part.match(/\(([^)]+)\)/) || [])[1];
      const base = part.replace(/\s*\([^)]*\)\s*/g, " ").trim();
      if (base) out.add(base);
      if (paren && !/^plural|^e\.g\.|^or /i.test(paren) && paren.length > 1) out.add(paren.trim());
    });
    (alt || []).forEach(a => out.add(a));
    const more = [];
    out.forEach(v => {
      if (isAbbr(v) || v.length < 3) return;
      if (/[^aeiou]y$/i.test(v)) more.push(v.slice(0, -1) + "ies");
      else if (/(s|x|z|ch|sh)$/i.test(v)) more.push(v + "es");
      else more.push(v + "s");
      if (/ex$/i.test(v)) more.push(v.slice(0, -2) + "ices");
    });
    more.forEach(m => out.add(m));
    return [...out].filter(v => v.length >= 2);
  }

  function build(){
    INDEX = new Map();
    const add = (e, lessonId) => {
      variants(e.w, e.alt).forEach(v => {
        const k = isAbbr(v) ? v : v.toLowerCase();
        if (!INDEX.has(k)) INDEX.set(k, { w:e.w.replace(/\s*\([^)]*\)/g, ""), def:e.def, say:e.say || "", lessons:new Set(), vars:new Set() });
        INDEX.get(k).vars.add(v);
        if (lessonId) INDEX.get(k).lessons.add(lessonId);
      });
    };
    // lesson vocab first (so their definitions win), then extras
    Object.keys(BM.WEEKS || {}).sort((a, b) => a - b).forEach(n => BM.WEEKS[n].lessons.forEach(L => (L.vocab || []).forEach(v => add(v, L.id))));
    (BM.GLOSS_EXTRA || []).forEach(e => add(e, null));
    const keys = [...INDEX.keys()].sort((a, b) => b.length - a.length).map(esc);
    RE = new RegExp(`(?<![\\p{L}\\p{N}'’])(${keys.join("|")})(?![\\p{L}\\p{N}])`, "giu");
  }

  // Everyday words: underlined only in the lesson that teaches them
  const COMMON = new Set("if else open closed need input inputs output outputs process predict evidence condition loop loops delay current switch switches sequence tone beat beats gap wash core coil coils test debug bug scribe engineer source sources map maps scale key brief design pattern patterns record rule rules law laws trade market value code power energy light heat sound force model plan system".split(" "));
  const isCommon = e => [...e.vars].some(v => COMMON.has(v.toLowerCase()));
  const SKIP = "svg, button, input, textarea, select, code, pre, script, style, .no-gloss, .gl, .gl-tip, [style*='f-mono'], .caret, .ltitle, .phasebar, .phases, .badge-fs, .slidenum, .s-kicker, .ptool, .nm";

  function lookup(match){
    if (isAbbr(match) && INDEX.has(match)) return INDEX.get(match);   // LED, AC… exact case only
    return INDEX.get(match.toLowerCase()) || null;
  }

  function processEl(root, lessonId){
    if (!INDEX) build();
    const seen = new Set([...root.querySelectorAll(".gl")].map(g => { const e = INDEX.get(g.dataset.gk); return e ? e.w.toLowerCase() : ""; }));
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(n){
        if (!n.data || n.data.trim().length < 2) return NodeFilter.FILTER_REJECT;
        const p = n.parentElement;
        if (!p || p.closest(SKIP)) return NodeFilter.FILTER_REJECT;
        if (p.querySelector && p.querySelector(":scope > .caret")) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = []; let n; while ((n = walker.nextNode())) nodes.push(n);
    nodes.forEach(node => {
      const text = node.data; RE.lastIndex = 0;
      let m, last = 0; const frag = document.createDocumentFragment(); let changed = false;
      while ((m = RE.exec(text))){
        const word = m[1];
        const e = lookup(word);
        if (!e) continue;
        if (COMMON.has(word.toLowerCase()) && !(lessonId && e.lessons.has(lessonId))) continue;
        const key = e.w.toLowerCase();
        if (seen.has(key)) continue;
        seen.add(key);
        if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)));
        const sp = document.createElement("span");
        sp.className = "gl" + (lessonId && e.lessons.has(lessonId) ? " lv" : "");
        sp.textContent = word;
        sp.dataset.gk = isAbbr(word) && INDEX.has(word) ? word : word.toLowerCase();
        frag.appendChild(sp);
        last = m.index + word.length; changed = true;
      }
      if (!changed) return;
      if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
      // inside a flex/grid box, keep the sentence together as ONE item
      const disp = getComputedStyle(node.parentNode).display;
      if (/flex|grid/.test(disp)){ const wrap = document.createElement("span"); wrap.className = "gl-run"; wrap.appendChild(frag); node.parentNode.replaceChild(wrap, node); }
      else node.parentNode.replaceChild(frag, node);
    });
  }

  /* ---------- tooltip ---------- */
  function tipFor(host){
    let tip = host.querySelector(":scope > .gl-tip");
    if (!tip){ tip = document.createElement("div"); tip.className = "gl-tip"; tip.setAttribute("role", "tooltip"); host.appendChild(tip); }
    return tip;
  }
  function show(span, host){
    const e = INDEX.get(span.dataset.gk) || lookup(span.textContent);
    if (!e) return;
    const tip = tipFor(host);
    tip.innerHTML = "";
    const head = document.createElement("div"); head.className = "gl-w"; head.textContent = e.w;
    if (e.say){ const s = document.createElement("span"); s.className = "gl-say"; s.textContent = " (" + e.say + ")"; head.appendChild(s); }
    const def = document.createElement("div"); def.className = "gl-d"; def.textContent = e.def;
    tip.append(head, def);
    if (span.classList.contains("lv")){ const t = document.createElement("div"); t.className = "gl-tag"; t.textContent = "Today's word"; tip.appendChild(t); }
    tip.classList.add("on");
    const r = span.getBoundingClientRect(), hr = host.getBoundingClientRect();
    const tw = tip.offsetWidth, th = tip.offsetHeight;
    let x = r.left + r.width/2 - tw/2 - hr.left, y = r.top - th - 12 - hr.top, below = false;
    if (y < 8){ y = r.bottom + 12 - hr.top; below = true; }
    x = Math.max(8, Math.min(x, hr.width - tw - 8));
    tip.style.left = x + "px"; tip.style.top = y + "px";
    tip.classList.toggle("below", below);
    span.classList.add("hot");
    G._hot = span;
  }
  function hide(host){
    const tip = host.querySelector(":scope > .gl-tip"); if (tip) tip.classList.remove("on");
    if (G._hot){ G._hot.classList.remove("hot"); G._hot = null; }
  }

  /* ---------- attach to a presenter stage ---------- */
  G.attach = function(stage, lesson, host){
    if (!stage) return null;
    host = host || stage.parentElement;
    let timer = null, busy = false;
    const run = () => {
      timer = null; busy = true;
      try { [...stage.children].forEach(el => processEl(el, lesson && lesson.id)); } catch(e){ console.warn("gloss", e); }
      obs.takeRecords(); busy = false;
    };
    const obs = new MutationObserver(() => { if (busy) return; clearTimeout(timer); timer = setTimeout(run, 120); });
    obs.observe(stage, { childList:true, subtree:true, characterData:true });
    run();
    const over = e => { const s = e.target.closest && e.target.closest(".gl"); if (s && stage.contains(s)) show(s, host); };
    const out = e => { const s = e.target.closest && e.target.closest(".gl"); if (!s) return; if (e.relatedTarget && s.contains(e.relatedTarget)) return; hide(host); };
    const click = e => { const s = e.target.closest && e.target.closest(".gl"); if (!s) return; e.stopPropagation(); if (G._hot === s) hide(host); else show(s, host); };
    stage.addEventListener("mouseover", over);
    stage.addEventListener("mouseout", out);
    stage.addEventListener("click", click);
    return { destroy(){ obs.disconnect(); clearTimeout(timer); stage.removeEventListener("mouseover", over); stage.removeEventListener("mouseout", out); stage.removeEventListener("click", click); hide(host); } };
  };
  G.processEl = processEl;
  G.rebuild = () => { INDEX = null; };
})(window.BM);
