/* ==========================================================
   THE BRAIDED MAP — utilities (global namespace BM)
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
  const P = "bm1:";
  BM.store = {
    get(k, d){ try { const v = localStorage.getItem(P+k); return v == null ? d : JSON.parse(v); } catch(e){ return d; } },
    set(k, v){ try { localStorage.setItem(P+k, JSON.stringify(v)); } catch(e){} },
    del(k){ try { localStorage.removeItem(P+k); } catch(e){} },
    dump(){ const o = {}; try { for (let i=0;i<localStorage.length;i++){ const k = localStorage.key(i); if (k.startsWith(P)) o[k.slice(P.length)] = JSON.parse(localStorage.getItem(k)); } } catch(e){} return o; },
    load(o){ try { Object.keys(o).forEach(k => localStorage.setItem(P+k, JSON.stringify(o[k]))); } catch(e){} }
  };

  /* ---- settings ---- */
  const DEFAULT_TEAMS = [
    { id:"wrybill", name:"Wrybill", reo:"ngutu pare", color:"#7E9AA6" },
    { id:"gull", name:"Black-billed Gull", reo:"tarāpuka", color:"#B4412F" },
    { id:"dotterel", name:"Banded Dotterel", reo:"pohowera", color:"#A8692E" },
    { id:"stilt", name:"Black Stilt", reo:"kakī", color:"#2B3438" },
    { id:"tern", name:"Black-fronted Tern", reo:"tarapirohe", color:"#C9A04A" },
    { id:"oystercatcher", name:"Pied Oystercatcher", reo:"tōrea", color:"#3D8DB3" },
    { id:"kea", name:"Kea", reo:"kea", color:"#5E7F3A" },
    { id:"pipit", name:"Pipit", reo:"pīhoihoi", color:"#8A7B5C" }
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

  /* ---- Maya numerals ---- */
  /* one level (0–19): dots on top, bars below; shell = 0 */
  function levelGroup(n, color, w, h){
    const g = BM.s("g");
    if (n === 0){
      // shell glyph (stylised)
      g.appendChild(BM.s("path", { d:`M${w*.12} ${h*.55} Q${w*.5} ${h*.08} ${w*.88} ${h*.55} Q${w*.5} ${h*.92} ${w*.12} ${h*.55}Z`, fill:"none", stroke:color, "stroke-width":w*.07, "stroke-linejoin":"round" }));
      g.appendChild(BM.s("path", { d:`M${w*.3} ${h*.46} Q${w*.5} ${h*.36} ${w*.7} ${h*.46} M${w*.26} ${h*.6} Q${w*.5} ${h*.7} ${w*.74} ${h*.6}`, fill:"none", stroke:color, "stroke-width":w*.05, "stroke-linecap":"round" }));
      return g;
    }
    const bars = Math.floor(n/5), dots = n % 5;
    const rows = bars + (dots ? 1 : 0);
    const barH = h*.13, gap = h*.07, dotR = h*.075;
    const total = bars*barH + (bars? (bars-1)*gap : 0) + (dots ? dotR*2 + (bars?gap:0) : 0);
    let y = (h - total)/2;
    if (dots){
      const span = w*.78, step = dots > 1 ? Math.min(span/(dots-1), dotR*2.8) : 0;
      const x0 = w/2 - step*(dots-1)/2;
      for (let i=0;i<dots;i++) g.appendChild(BM.s("circle", { cx:x0+i*step, cy:y+dotR, r:dotR, fill:color }));
      y += dotR*2 + (bars?gap:0);
    }
    for (let i=0;i<bars;i++){ g.appendChild(BM.s("rect", { x:w*.1, y, width:w*.8, height:barH, rx:barH*.45, fill:color })); y += barH + gap; }
    void rows;
    return g;
  }
  BM.mayaDigits = function(n){ n = Math.max(0, Math.floor(n)); const d = []; do { d.unshift(n % 20); n = Math.floor(n/20); } while (n > 0); return d; };
  BM.maya = function(n, opt){
    opt = opt || {};
    const color = opt.color || "currentColor";
    const digits = BM.mayaDigits(n);
    const W = 100, H = 100, LH = digits.length > 1 ? 100/digits.length : 100;
    const svg = BM.svg(W, H, { class: opt.cls || "maya", role:"img", "aria-label":`Maya numeral ${n}` });
    digits.forEach((dg, i) => {
      const g = levelGroup(dg, color, W, LH);
      g.setAttribute("transform", `translate(0 ${i*LH})`);
      svg.appendChild(g);
      if (i < digits.length - 1) svg.appendChild(BM.s("line", { x1:20, x2:80, y1:(i+1)*LH, y2:(i+1)*LH, stroke:color, "stroke-width":1, opacity:.25, "stroke-dasharray":"3 4" }));
    });
    return svg;
  };

  /* ---- icons (stroke) ---- */
  const I = {
    prev:'<path d="M15 5l-7 7 7 7"/>', next:'<path d="M9 5l7 7-7 7"/>',
    notes:'<path d="M5 4h14v16H5z"/><path d="M8 8h8M8 12h8M8 16h5"/>',
    timer:'<circle cx="12" cy="13" r="7.5"/><path d="M12 9v4l3 2M9 2.5h6"/>',
    pick:'<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M1 12h4M19 12h4"/>',
    bean:'<ellipse cx="12" cy="12" rx="6.5" ry="9" transform="rotate(30 12 12)"/><path d="M9 6c3 3 3 9 6 12" />',
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
    history:   { name:"History", day:"Monday", short:"Mon", color:"#B4412F", hi:"#E07B62", icon:"📜" },
    geography: { name:"Geography & Social Science", day:"Tuesday", short:"Tue", color:"#3D8DB3", hi:"#7CC0DE", icon:"🏔️" },
    science:   { name:"Science", day:"Wednesday", short:"Wed", color:"#2F3D7A", hi:"#B9C6FF", icon:"✨" },
    technology:{ name:"Technology", day:"Thursday", short:"Thu", color:"#5E7F3A", hi:"#9CC26A", icon:"⚙️" },
    art:       { name:"Visual Art", day:"Friday", short:"Fri", color:"#C08A2E", hi:"#E2B45A", icon:"🎨" }
  };
  BM.PHASES = [
    { id:"transmission", name:"Field Note", icon:"📓", min:"0–6" },
    { id:"excavate", name:"Survey", icon:"🧭", min:"6–18" },
    { id:"paths", name:"Paths", icon:"🥾", min:"18–38" },
    { id:"lens", name:"Lens", icon:"🔍", min:"38–45" },
    { id:"decode", name:"Trig Clue", icon:"📐", min:"45–50" }
  ];
  BM.PILLARS = {
    aroha:{ name:"Aroha", en:"Love — God, Others, Self, World", icon:"❤️" },
    mohio:{ name:"Mōhio", en:"Know — God, His story & our place in it", icon:"📜" },
    manaaki:{ name:"Manaaki", en:"Serve — faithfully with our gifts & talents", icon:"🤲" },
    panga:{ name:"Pānga", en:"Impact — bringing God's Kingdom to earth", icon:"🌱" },
    sdg:{ name:"Soli Deo Gloria", en:"To God alone the glory", icon:"✨" }
  };
})(window.BM);
