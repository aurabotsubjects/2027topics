/* ==========================================================
   THE ROYAL ROAD — utilities (global namespace BM, shared engine with The Fifth Codex)
   ========================================================== */
window.BM = window.BM || {};
(function(BM){
  "use strict";
  const SVGNS = "http://www.w3.org/2000/svg";

  /* ---- DOM builders ---- */
  function build(ns, tag, attrs, kids){
    const el = ns ? document.createElementNS(ns, tag) : document.createElement(tag);
    if (attrs) for (const k in attrs){
      const v = attrs[k];
      if (v == null || v === false) continue;
      if (k === "class") ns ? el.setAttribute("class", v) : (el.className = v);
      else if (k === "style" && typeof v === "object") Object.assign(el.style, v);
      else if (k === "html") el.innerHTML = v;
      else if (k === "text") el.textContent = v;
      else if (k.startsWith("on") && typeof v === "function") el.addEventListener(k.slice(2), v);
      else if (k === "dataset") Object.assign(el.dataset, v);
      else el.setAttribute(k, v === true ? "" : v);
    }
    append(el, kids);
    return el;
  }
  function append(el, kids){
    if (kids == null) return;
    if (Array.isArray(kids)) kids.forEach(k => append(el, k));
    else if (kids instanceof Node) el.appendChild(kids);
    else el.appendChild(document.createTextNode(String(kids)));
  }
  BM.h = (tag, attrs, ...kids) => build(null, tag, attrs, kids);
  BM.s = (tag, attrs, ...kids) => build(SVGNS, tag, attrs, kids);
  BM.svg = (w, h, attrs, ...kids) => build(SVGNS, "svg", Object.assign({ viewBox:`0 0 ${w} ${h}`, xmlns:SVGNS }, attrs||{}), kids);
  BM.SVGNS = SVGNS;
  BM.$ = (sel, root=document) => root.querySelector(sel);
  BM.$$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));
  BM.clear = el => { while (el.firstChild) el.removeChild(el.firstChild); return el; };
  BM.esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));
  /* light inline markup: **bold**, *italic* */
  BM.md = s => BM.esc(s).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/\*(.+?)\*/g, "<em>$1</em>");

  /* ---- seeded random ---- */
  BM.rng = function(seed){
    let t = (seed >>> 0) || 1;
    return function(){ t += 0x6D2B79F5; let r = Math.imul(t ^ t >>> 15, 1 | t); r ^= r + Math.imul(r ^ r >>> 7, 61 | r); return ((r ^ r >>> 14) >>> 0) / 4294967296; };
  };
  BM.lerp = (a,b,t) => a + (b-a)*t;
  BM.clamp = (v,a,b) => Math.max(a, Math.min(b, v));

  /* ---- storage (always wrapped: may be blocked) ---- */
  const P = "rr1:";   /* own storage prefix: never clashes with other apps opened from file:// */
  BM.store = {
    get(k, d){ try { const v = localStorage.getItem(P+k); return v == null ? d : JSON.parse(v); } catch(e){ return d; } },
    set(k, v){ try { localStorage.setItem(P+k, JSON.stringify(v)); } catch(e){} },
    del(k){ try { localStorage.removeItem(P+k); } catch(e){} },
    dump(){ const o = {}; try { for (let i=0;i<localStorage.length;i++){ const k = localStorage.key(i); if (k.startsWith(P)) o[k.slice(P.length)] = JSON.parse(localStorage.getItem(k)); } } catch(e){} return o; },
    load(o){ try { Object.keys(o).forEach(k => localStorage.setItem(P+k, JSON.stringify(o[k]))); } catch(e){} }
  };

  /* ---- settings ---- */
  const DEFAULT_TEAMS = [
    { id:"immortals", name:"Immortals", img:"team-immortals", color:"#1E3A8A", fact:"🟢 The Immortals were the Persian king's elite guard. At Thermopylae they took the mountain path." },
    { id:"leopards", name:"Persian Leopards", img:"team-leopards", color:"#C9822B", fact:"🟢 Persian leopards live in Iran's mountains; their main prey is wild goats and sheep." },
    { id:"simurgh", name:"Simurgh", img:"team-simurgh", color:"#0E9F6E", fact:"🟡 The Simurgh is a wise, giant bird of Persian story and art — not a real animal." },
    { id:"cheetahs", name:"Asiatic Cheetahs", img:"team-cheetahs", color:"#C2593A", fact:"🟢 Fewer than 20 Asiatic cheetahs may be left in the wild (2025)." },
    { id:"griffins", name:"Golden Griffins", img:"team-griffins", color:"#6D4AA8", fact:"🟡 Griffins (part eagle, part lion) appear in Persian palace art — a creature of story." },
    { id:"lions", name:"Winged Lions", img:"team-lions", color:"#B0213B", fact:"🟡 Winged lions guarded doorways in glazed-brick art — a creature of story." },
    { id:"onagers", name:"Onagers", img:"team-onagers", color:"#8A6A3C", fact:"🟢 The Persian onager is a wild ass of Iran's dry plains." },
    { id:"ibex", name:"Wild Goats", img:"team-ibex", color:"#5B6B78", fact:"🟢 Wild goats (bezoar ibex) climb the Zagros cliffs to escape predators." }
  ];
  BM.DEFAULT_TEAMS = DEFAULT_TEAMS;
  BM.settings = function(){
    return Object.assign({
      school:"", className:"Room 14", teacher:"", year:"2027", term:"", termStart:"",
      teamCount:6, students:"", sound:false, motion:true
    }, BM.store.get("settings", {}));
  };
  BM.saveSettings = s => BM.store.set("settings", s);
  BM.teams = function(){
    const st = BM.settings();
    const names = BM.store.get("teamNames", {});
    return DEFAULT_TEAMS.slice(0, BM.clamp(st.teamCount|0, 2, 8)).map(t => Object.assign({}, t, { name: names[t.id] || t.name }));
  };
  BM.students = () => BM.settings().students.split(/\n|,/).map(s => s.trim()).filter(Boolean);

  /* ---- toast ---- */
  let toastEl, toastT;
  BM.toast = function(msg){
    if (!toastEl){ toastEl = BM.h("div", { class:"toast" }); document.body.appendChild(toastEl); }
    toastEl.textContent = msg; toastEl.classList.add("show");
    clearTimeout(toastT); toastT = setTimeout(() => toastEl.classList.remove("show"), 2200);
  };

  /* ---- motion preference ---- */
  BM.motionOK = function(){
    if (!BM.settings().motion) return false;
    try { return !matchMedia("(prefers-reduced-motion: reduce)").matches; } catch(e){ return true; }
  };
  BM.anim = function(el, kf, opt){
    if (!el || !el.animate) return { finished: Promise.resolve() };
    if (!BM.motionOK()) opt = Object.assign({}, opt, { duration: 1, delay: 0 });
    return el.animate(kf, Object.assign({ fill:"both", easing:"cubic-bezier(.2,.8,.2,1)" }, opt));
  };
  BM.wait = ms => new Promise(r => setTimeout(r, ms));

  /* ---- Sound (WebAudio, synthesised, optional) ---- */
  let ac;
  function ctx(){ if (!ac){ try { ac = new (window.AudioContext||window.webkitAudioContext)(); } catch(e){ return null; } } if (ac.state === "suspended") ac.resume(); return ac; }
  function noise(a, dur){ const b = a.createBuffer(1, a.sampleRate*dur, a.sampleRate), d = b.getChannelData(0); for (let i=0;i<d.length;i++) d[i] = Math.random()*2-1; const s = a.createBufferSource(); s.buffer = b; return s; }
  BM.sfx = function(name){
    if (!BM.settings().sound) return;
    const a = ctx(); if (!a) return; const t = a.currentTime;
    const g = a.createGain(); g.connect(a.destination);
    if (name === "paper"){
      const n = noise(a,.35), f = a.createBiquadFilter(); f.type="bandpass"; f.frequency.value=2400; f.Q.value=.6;
      n.connect(f); f.connect(g); g.gain.setValueAtTime(0,t); g.gain.linearRampToValueAtTime(.18,t+.04); g.gain.exponentialRampToValueAtTime(.001,t+.33); n.start(t);
    } else if (name === "tok" || name === "ok"){
      const o = a.createOscillator(); o.type="sine"; o.frequency.setValueAtTime(name==="ok"?660:420,t); o.frequency.exponentialRampToValueAtTime(name==="ok"?990:240,t+.12);
      o.connect(g); g.gain.setValueAtTime(.35,t); g.gain.exponentialRampToValueAtTime(.001,t+.25); o.start(t); o.stop(t+.3);
      if (name==="ok"){ const o2=a.createOscillator(); o2.type="triangle"; o2.frequency.value=1320; const g2=a.createGain(); o2.connect(g2); g2.connect(a.destination); g2.gain.setValueAtTime(0,t+.12); g2.gain.linearRampToValueAtTime(.15,t+.14); g2.gain.exponentialRampToValueAtTime(.001,t+.6); o2.start(t+.12); o2.stop(t+.7); }
    } else if (name === "no"){
      const o = a.createOscillator(); o.type="square"; o.frequency.setValueAtTime(180,t); o.frequency.linearRampToValueAtTime(120,t+.25);
      const f=a.createBiquadFilter(); f.type="lowpass"; f.frequency.value=700; o.connect(f); f.connect(g); g.gain.setValueAtTime(.12,t); g.gain.exponentialRampToValueAtTime(.001,t+.3); o.start(t); o.stop(t+.32);
    } else if (name === "zap"){
      const n = noise(a,.5), f = a.createBiquadFilter(); f.type="highpass"; f.frequency.value=900;
      n.connect(f); f.connect(g); g.gain.setValueAtTime(.4,t); g.gain.exponentialRampToValueAtTime(.001,t+.45); n.start(t);
      const o=a.createOscillator(); o.type="sawtooth"; o.frequency.setValueAtTime(90,t); const g2=a.createGain(); o.connect(g2); g2.connect(a.destination); g2.gain.setValueAtTime(.08,t); g2.gain.exponentialRampToValueAtTime(.001,t+.4); o.start(t); o.stop(t+.42);
    } else if (name === "thunder"){
      const n = noise(a,2.5), f = a.createBiquadFilter(); f.type="lowpass"; f.frequency.value=320;
      n.connect(f); f.connect(g); g.gain.setValueAtTime(0,t); g.gain.linearRampToValueAtTime(.6,t+.08); g.gain.exponentialRampToValueAtTime(.001,t+2.4); n.start(t);
    } else if (name === "stone"){
      const n = noise(a,1.1), f = a.createBiquadFilter(); f.type="lowpass"; f.frequency.setValueAtTime(200,t); f.frequency.linearRampToValueAtTime(600,t+1);
      n.connect(f); f.connect(g); g.gain.setValueAtTime(.0,t); g.gain.linearRampToValueAtTime(.35,t+.2); g.gain.exponentialRampToValueAtTime(.001,t+1.1); n.start(t);
    } else if (name === "chime"){
      [523,659,784,1047].forEach((fq,i)=>{ const o=a.createOscillator(); o.type="sine"; o.frequency.value=fq; const g2=a.createGain(); o.connect(g2); g2.connect(a.destination); const st=t+i*.12; g2.gain.setValueAtTime(0,st); g2.gain.linearRampToValueAtTime(.16,st+.02); g2.gain.exponentialRampToValueAtTime(.001,st+1.4); o.start(st); o.stop(st+1.5); });
    }
  };
  /* musical tone (ignores the sound setting only when forced — used by lesson instruments) */
  BM.tone = function(freq, ms, opt){
    opt = opt || {};
    if (!opt.force && !BM.settings().sound) return;
    const a = ctx(); if (!a) return; const t = a.currentTime + (opt.delay || 0), d = (ms || 200) / 1000;
    const g = a.createGain(); g.connect(a.destination);
    if (opt.drum){
      const o = a.createOscillator(); o.type = "sine"; o.frequency.setValueAtTime(freq * 1.6, t); o.frequency.exponentialRampToValueAtTime(freq, t + .05);
      o.connect(g); g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(.6, t + .005); g.gain.exponentialRampToValueAtTime(.001, t + .45); o.start(t); o.stop(t + .5);
      const n = noise(a, .06), f = a.createBiquadFilter(); f.type = "bandpass"; f.frequency.value = freq * 3; const g2 = a.createGain(); n.connect(f); f.connect(g2); g2.connect(a.destination); g2.gain.setValueAtTime(.25, t); g2.gain.exponentialRampToValueAtTime(.001, t + .06); n.start(t);
    } else {
      const o = a.createOscillator(); o.type = opt.type || "square"; o.frequency.value = freq;
      const f = a.createBiquadFilter(); f.type = "lowpass"; f.frequency.value = 3000; o.connect(f); f.connect(g);
      g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(.09, t + .01); g.gain.setValueAtTime(.09, t + Math.max(.02, d - .03)); g.gain.exponentialRampToValueAtTime(.0001, t + d); o.start(t); o.stop(t + d + .02);
    }
  };

  /* ---- Old Persian number signs (drawn as SVG, never a font) ----
     The script had signs for 1, 2, 10, 20 and 100, written biggest first
     and repeated (e.g. 83 = 20 20 20 20 2 1). Shapes are simplified
     wedges for the classroom (confirm against UT Austin, blueprint S41). */
  BM.opParts = function(n){
    n = Math.max(0, Math.floor(n)); const out = [];
    [100,20,10,2,1].forEach(v => { while (n >= v){ out.push(v); n -= v; } });
    return out;
  };
  /* one wedge: a triangular head + a tapering tail, pointing down (v) or right (h) */
  function wedge(x, y, len, dir, col){
    const w = len*.42;
    if (dir === "h") return BM.s("path", { d:`M${x} ${y-w/2} L${x+w*.9} ${y} L${x} ${y+w/2}Z M${x+w*.6} ${y-w*.12} L${x+len} ${y-1.5} L${x+len} ${y+1.5} L${x+w*.6} ${y+w*.12}Z`, fill:col });
    return BM.s("path", { d:`M${x-w/2} ${y} L${x} ${y+w*.9} L${x+w/2} ${y}Z M${x-w*.12} ${y+w*.6} L${x-1.5} ${y+len} L${x+1.5} ${y+len} L${x+w*.12} ${y+w*.6}Z`, fill:col });
  }
  /* corner wedge (Winkelhaken) used for 10 */
  function corner(x, y, s, col){ return BM.s("path", { d:`M${x+s} ${y} L${x} ${y+s*.5} L${x+s} ${y+s} L${x+s*.72} ${y+s*.5}Z`, fill:col }); }
  /* draw one sign into a 60×80 cell; returns a <g> */
  BM.opSign = function(v, col){
    const g = BM.s("g"); col = col || "currentColor";
    if (v === 1) g.appendChild(wedge(30, 8, 64, "v", col));
    else if (v === 2){ g.appendChild(wedge(18, 8, 64, "v", col)); g.appendChild(wedge(42, 8, 64, "v", col)); }
    else if (v === 10) g.appendChild(corner(10, 18, 44, col));
    else if (v === 20){ g.appendChild(corner(2, 18, 30, col)); g.appendChild(corner(28, 18, 30, col)); }
    else if (v === 100){ g.appendChild(wedge(14, 8, 64, "v", col)); g.appendChild(wedge(22, 40, 34, "h", col)); }
    return g;
  };
  BM.oldPersian = function(n, opt){
    opt = opt || {};
    const parts = BM.opParts(n), cw = 60, W = Math.max(1, parts.length)*cw;
    const v = BM.svg(W, 80, { class: opt.cls || "opnum", role:"img", "aria-label":`${n} in Old Persian number signs` });
    parts.forEach((p, i) => { const g = BM.opSign(p, opt.color); g.setAttribute("transform", `translate(${i*cw} 0)`); v.appendChild(g); });
    return v;
  };

  /* ---- icons (stroke) ---- */
  const I = {
    prev:'<path d="M15 5l-7 7 7 7"/>', next:'<path d="M9 5l7 7-7 7"/>',
    notes:'<path d="M5 4h14v16H5z"/><path d="M8 8h8M8 12h8M8 16h5"/>',
    timer:'<circle cx="12" cy="13" r="7.5"/><path d="M12 9v4l3 2M9 2.5h6"/>',
    pick:'<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M1 12h4M19 12h4"/>',
    bean:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5.5"/><path d="M10 10.5l2-1.5 2 1.5M12 9v6"/>',
    wall:'<path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z"/>',
    calm:'<path d="M20 14.5A8.5 8.5 0 019.5 4 8.5 8.5 0 1020 14.5z"/>',
    full:'<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>',
    screen:'<rect x="2.5" y="4" width="19" height="12" rx="1.5"/><path d="M8 20h8M12 16v4"/>',
    sound:'<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16 9a4 4 0 010 6M18.5 6.5a7.5 7.5 0 010 11"/>',
    mute:'<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M17 9l5 6M22 9l-5 6"/>',
    exit:'<path d="M6 6l12 12M18 6L6 18"/>',
    print:'<path d="M6 9V3h12v6M6 18H4v-7h16v7h-2"/><path d="M7 14h10v7H7z"/>',
    pdf:'<path d="M6 2h9l5 5v15H6z"/><path d="M14 2v6h6M9 14h6M9 18h4"/>',
    play:'<path d="M7 4l13 8-13 8z"/>',
    plan:'<path d="M5 3h14v18H5z"/><path d="M9 7h6M9 11h6M9 15h3"/>',
    rubric:'<path d="M3 5h18v14H3zM3 10h18M9 5v14M15 5v14"/>',
    mark:'<path d="M4 12l5 5L20 6"/>',
    home:'<path d="M3 11l9-8 9 8M5 9.5V21h14V9.5"/>',
    gear:'<circle cx="12" cy="12" r="3.2"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',
    reset:'<path d="M4 12a8 8 0 108-8H8"/><path d="M8 1L4 4l4 3"/>',
    eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>'
  };
  BM.icon = function(name){
    const sv = BM.svg(24, 24, { fill:"none", stroke:"currentColor", "stroke-width":"2", "stroke-linecap":"round", "stroke-linejoin":"round", "aria-hidden":"true" });
    sv.innerHTML = I[name] || "";
    return sv;
  };

  /* ---- optional image slot (ChatGPT images) — falls back to procedural art silently ---- */
  BM.imgSlot = function(name, cls){
    const img = new Image();
    img.className = cls || "img-slot"; img.alt = ""; img.decoding = "async";
    img.style.opacity = "0"; img.style.transition = "opacity .8s";
    img.onload = () => { img.style.opacity = "1"; };
    img.onerror = () => { img.remove(); };
    img.src = `assets/img/${name}.webp`;
    return img;
  };

  /* ---- download helper ---- */
  BM.download = function(name, text, type){
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([text], { type: type || "text/plain" }));
    a.download = name; document.body.appendChild(a); a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  };

  /* ---- subjects ---- */
  BM.SUBJECTS = {
    history:   { name:"History", day:"Monday", short:"Mon", color:"#1E3A8A", hi:"#8FA8F0", icon:"📜" },
    geography: { name:"Geography & Social Science", day:"Tuesday", short:"Tue", color:"#0F7F74", hi:"#5FD6C8", icon:"🗺️" },
    science:   { name:"Science", day:"Wednesday", short:"Wed", color:"#0B7A55", hi:"#62D39F", icon:"🐆" },
    technology:{ name:"Technology", day:"Thursday", short:"Thu", color:"#A9472C", hi:"#F0977A", icon:"⚙️" },
    art:       { name:"Visual Art", day:"Friday", short:"Fri", color:"#B9770A", hi:"#F5B941", icon:"🎨" }
  };
  BM.PHASES = [
    { id:"transmission", name:"Dispatch", icon:"📜", min:"0–6" },
    { id:"excavate", name:"Discovery", icon:"🧭", min:"6–18" },
    { id:"paths", name:"Paths", icon:"🐪", min:"18–38" },
    { id:"lens", name:"Lens", icon:"🔍", min:"38–45" },
    { id:"decode", name:"Waystation", icon:"🔑", min:"45–50" }
  ];
  BM.PILLARS = {
    aroha:{ name:"Aroha", en:"Love — God, Others, Self, World", icon:"❤️" },
    mohio:{ name:"Mōhio", en:"Know — God, His story & our place in it", icon:"📜" },
    manaaki:{ name:"Manaaki", en:"Serve — faithfully with our gifts & talents", icon:"🤲" },
    panga:{ name:"Pānga", en:"Impact — bringing God's Kingdom to earth", icon:"🌱" },
    sdg:{ name:"Soli Deo Gloria", en:"To God alone the glory", icon:"✨" }
  };
})(window.BM);
