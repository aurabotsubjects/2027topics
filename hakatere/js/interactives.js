/* ==========================================================
   INTERACTIVES — teacher-run animations (Week 1 set)
   Each: BM.IX[name](host, cfg, api) → { step?, steps?, destroy? }
   host = absolutely positioned div inside the 1920×1080 stage
   (the .ix-area is 1760 × 690).
   ========================================================== */
(function(BM){
  "use strict";
  const h = BM.h, s = BM.s, svg = BM.svg, A = BM.art, M = BM.map;
  const IX = BM.IX = {};

  /* ---------- helpers ---------- */
  const btn = (label, onclick, cls) => h("button", { class:"ixbtn " + (cls||""), onclick:(e) => { e.stopPropagation(); BM.sfx("tok"); onclick(e); } }, label);
  const toLocal = (el, e) => { const r = el.getBoundingClientRect(); const vb = el.viewBox && el.viewBox.baseVal; const base = el.offsetWidth || (vb && vb.width) || el.clientWidth || r.width; const k = r.width / base || 1; return [(e.clientX - r.left)/k, (e.clientY - r.top)/k]; };
  BM.toLocal = toLocal;
  BM.ixbtn = btn;
  function typeInto(el, text, speed){
    el.textContent = "";
    if (!BM.motionOK()){ el.textContent = text; return () => {}; }
    let i = 0; const t = setInterval(() => { el.textContent = text.slice(0, ++i); if (i >= text.length) clearInterval(t); }, speed || 22);
    return () => clearInterval(t);
  }
  const controls = (host, kids) => { const c = h("div", { class:"ix-controls", style:{ position:"absolute", right:"0", top:"-118px" } }, kids); host.appendChild(c); return c; };
  const panel = (style, kids) => h("div", { class:"ix-panel", style }, kids);
  const setMD = (el, t) => { el.innerHTML = BM.md(t); return el; };
  /* make an element draggable inside host; onDrop(x, y) returns true to keep, false to snap home */
  function draggable(el, host, home, onDrop){
    let d = null;
    el.classList.add("dragcard");
    el.style.left = home.x + "px"; el.style.top = home.y + "px";
    el.addEventListener("pointerdown", e => { e.stopPropagation(); el.setPointerCapture(e.pointerId); const [x,y] = toLocal(host, e); d = { dx:x - el.offsetLeft, dy:y - el.offsetTop }; el.classList.add("dragging"); });
    el.addEventListener("pointermove", e => { if (!d) return; const [x,y] = toLocal(host, e); el.style.left = (x - d.dx) + "px"; el.style.top = (y - d.dy) + "px"; });
    el.addEventListener("pointerup", () => { if (!d) return; d = null; el.classList.remove("dragging"); el.style.transition = "left .45s var(--ease-lift), top .45s var(--ease-lift), transform .3s, box-shadow .3s";
      const cx = el.offsetLeft + el.offsetWidth/2, cy = el.offsetTop + el.offsetHeight/2;
      if (!onDrop(cx, cy)){ el.style.left = home.x + "px"; el.style.top = home.y + "px"; } });
    return { home(){ el.style.left = home.x + "px"; el.style.top = home.y + "px"; }, move(x, y){ el.style.transition = "left .6s var(--ease-lift), top .6s var(--ease-lift)"; el.style.left = x + "px"; el.style.top = y + "px"; } };
  }

  /* =======================================================
     1. OPENING — the flood, the digger, the tin chest (Mon W1)
     ======================================================= */
  IX.opening = function(host){
    host.style.cssText += ";position:absolute;inset:0;overflow:hidden;background:#0d1317;";
    const W = 1920, H = 1080;
    const scene = svg(W, H, { style:"position:absolute;inset:0;width:100%;height:100%" });
    scene.innerHTML = `<defs><linearGradient id="op-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1b252b"/><stop offset=".55" stop-color="#2a3a42"/><stop offset="1" stop-color="#11181c"/></linearGradient></defs><rect width="${W}" height="${H}" fill="url(#op-sky)"/>`;
    const far = A.mountains(W, H, 31, ["#2e3d45","#22303a"], { top:560, bottom:640, amp:300, snowLayers:1, snowColor:"#7f939b", peaks:6 });
    scene.appendChild(far);
    // swollen river (rises), then falls back to braids
    const flood = s("path", { d:`M-20 760 Q 480 720 960 750 T 1940 740 V 1100 H -20Z`, fill:"#5f7480", opacity:.95, style:"transition:transform 2.4s ease-in-out; transform-box:view-box" });
    scene.appendChild(flood);
    const gravel = s("g", { opacity:0, style:"transition:opacity 1.6s" });
    gravel.appendChild(s("path", { d:`M-20 800 Q 480 770 960 790 T 1940 780 V1100 H-20Z`, fill:"#8f8c82" }));
    gravel.appendChild(s("rect", { x:-20, y:790, width:1960, height:320, fill:"url(#p-stones)", opacity:.7 }));
    gravel.appendChild(A.braids([[-40,1060],[500,980],[1000,930],[1500,900],[1960,880]], { seed:9, w0:60, w1:30, color:"#a9cdd8", opacity:.75, bed:false, sw:5 }));
    scene.appendChild(gravel);
    // stopbank
    scene.appendChild(s("path", { d:`M-20 700 L 700 690 Q 760 640 900 646 L 1940 650 V 720 L -20 740Z`, fill:"#3f4a3a", filter:"url(#fx-paper)" }));
    // digger
    const dig = s("g", { opacity:0, style:"transition:opacity 1s" });
    dig.appendChild(s("rect", { x:1280, y:560, width:220, height:110, rx:10, fill:"#C9A04A" }));
    dig.appendChild(s("rect", { x:1430, y:500, width:90, height:80, rx:6, fill:"#b08a3a" }));
    dig.appendChild(s("rect", { x:1440, y:512, width:64, height:44, fill:"#9fbac4" }));
    dig.appendChild(s("rect", { x:1260, y:660, width:270, height:44, rx:20, fill:"#2b2b2b" }));
    const arm = s("g", { style:"transform-origin:1300px 580px; transform-box:view-box; transition:transform 1.6s cubic-bezier(.5,0,.3,1)" });
    arm.appendChild(s("path", { d:"M1300 580 L1080 470 L1010 600", stroke:"#C9A04A", "stroke-width":30, fill:"none", "stroke-linecap":"round", "stroke-linejoin":"round" }));
    arm.appendChild(s("path", { d:"M985 590 L1040 590 L1030 650 L970 640Z", fill:"#8a6a2a" }));
    dig.appendChild(arm);
    scene.appendChild(dig);
    // the chest in the gravel
    const chest = s("g", { opacity:0, style:"transition:opacity 1.2s" });
    chest.appendChild(s("ellipse", { cx:960, cy:860, rx:220, ry:40, fill:"#000", opacity:.35 }));
    chest.appendChild(s("rect", { x:830, y:740, width:260, height:130, rx:8, fill:"#6d4f33" }));
    chest.appendChild(s("path", { d:"M830 742 Q960 670 1090 742Z", fill:"#7a5a3c" }));
    for (let i=0;i<10;i++) chest.appendChild(s("circle", { cx:850 + i*24, cy:780 + (i%3)*24, r:8 + (i%4)*3, fill:"#a0522d", opacity:.5 }));
    chest.appendChild(s("rect", { x:946, y:772, width:28, height:38, rx:4, fill:"#C9A04A" }));
    scene.appendChild(chest);
    host.appendChild(scene);
    // inside the chest (step 3): field book + folded sheets
    const inside = h("div", { style:{ position:"absolute", inset:"0", opacity:"0", transition:"opacity 1.4s", background:"radial-gradient(60% 60% at 50% 50%, #3b3326 0%, #1c1812 60%, #0b0a08 100%)" } });
    const ins = svg(W, H, { style:"position:absolute;inset:0;width:100%;height:100%" });
    ins.appendChild(s("ellipse", { cx:960, cy:560, rx:760, ry:420, fill:"url(#g-lamp)", opacity:.25 }));
    const book = s("g", { transform:"translate(560 300) rotate(-6)", filter:"url(#fx-paper)" });
    book.appendChild(s("rect", { width:420, height:520, rx:10, fill:"#4a3a2a" }));
    book.appendChild(s("rect", { x:20, y:20, width:380, height:480, rx:6, fill:"#5a4632" }));
    book.appendChild(s("text", { x:210, y:220, "text-anchor":"middle", "font-family":"Fraunces", "font-style":"italic", "font-size":44, fill:"#d9c9a2" }, "Field Book"));
    book.appendChild(s("text", { x:210, y:280, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":800, "font-size":34, fill:"#d9c9a2", "letter-spacing":"6" }, "1864"));
    book.appendChild(s("rect", { x:380, y:-10, width:14, height:120, fill:"#B4412F" }));
    ins.appendChild(book);
    const sheets = s("g", { transform:"translate(1040 340) rotate(5)" });
    for (let i=0;i<10;i++) sheets.appendChild(s("rect", { x:i*3, y:-i*6, width:340, height:440, rx:4, fill: i%2 ? "#e2d6b8" : "#d6c8a5", stroke:"#a8956c", "stroke-width":2, filter: i === 9 ? "url(#fx-paper)" : null }));
    sheets.appendChild(s("path", { d:"M200 -54 V386 M27 166 H367", stroke:"#000", "stroke-opacity":.15, "stroke-width":3 }));
    sheets.appendChild(s("path", { d:"M70 120 C 140 80, 220 200, 330 150", stroke:"#3D8DB3", "stroke-width":4, fill:"none", opacity:.5 }));
    ins.appendChild(sheets);
    inside.appendChild(ins); host.appendChild(inside);
    // rain
    const cv = h("canvas", { width:W, height:H, style:{ position:"absolute", inset:"0", width:"100%", height:"100%", pointerEvents:"none" } });
    host.appendChild(cv);
    const ctx = cv.getContext("2d");
    const drops = Array.from({ length:380 }, () => ({ x:Math.random()*W, y:Math.random()*H, l:16+Math.random()*26, v:20+Math.random()*16 }));
    let raining = true, rainAlpha = .5, raf;
    function rain(){
      ctx.clearRect(0,0,W,H);
      if (rainAlpha > 0.01){ ctx.strokeStyle = `rgba(190,210,220,${rainAlpha})`; ctx.lineWidth = 2; ctx.beginPath();
        drops.forEach(d => { ctx.moveTo(d.x, d.y); ctx.lineTo(d.x - 5, d.y + d.l); d.y += d.v; d.x -= 2.5; if (d.y > H){ d.y = -40; d.x = Math.random()*(W+200); } }); ctx.stroke(); }
      if (!raining) rainAlpha *= .95;
      raf = requestAnimationFrame(rain);
    }
    if (BM.motionOK()) rain();
    const cap = h("div", { style:{ position:"absolute", left:"120px", bottom:"110px", maxWidth:"1240px", fontFamily:"var(--f-display)", fontWeight:"600", fontSize:"52px", lineHeight:"1.15", color:"#FBF7EE", textShadow:"0 4px 30px rgba(0,0,0,.85)" } });
    const kick = h("div", { class:"s-kicker", style:{ position:"absolute", left:"120px", top:"130px", color:"var(--wheat)" } }, "Hakatere · this winter");
    host.append(kick, cap);
    const title = h("div", { style:{ position:"absolute", inset:"0", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"flex-end", paddingBottom:"110px", opacity:"0", transition:"opacity 1.2s", pointerEvents:"none", textAlign:"center" } },
      h("div", { class:"s-kicker", style:{ justifyContent:"center", color:"var(--wheat)" } }, "Hakatere: our river, our mountains, our sky"),
      h("div", { class:"s-title", style:{ fontSize:"180px", margin:"0", color:"#FBF7EE", textShadow:"0 10px 60px rgba(0,0,0,.7)" } }, "The Braided Map"),
      h("div", { style:{ fontSize:"36px", opacity:".9", marginTop:"10px", color:"#FBF7EE" } }, "Ten sheets. One field book. Whose story does a map tell?"));
    host.appendChild(title);
    const lines = [
      "In the floods this winter, the Hakatere rose faster than anyone had seen in years…",
      "When the water went down, a digger driver repairing the stopbank hit something metal…",
      "A rusted tin chest, buried deep in the river gravel.",
      "Inside, wrapped in oilcloth: a surveyor's field book dated 1864, and ten folded map sheets, stuck together.",
      ""
    ];
    let cancel;
    function go(i){
      if (cancel) cancel();
      cancel = typeInto(cap, lines[i] || "", 26);
      raining = i < 1; if (i === 0){ raining = true; rainAlpha = .5; }
      flood.style.transform = i >= 1 ? "translateY(60px)" : "translateY(-30px)";
      gravel.style.opacity = i >= 1 ? "1" : "0";
      dig.style.opacity = i >= 1 ? "1" : "0";
      arm.style.transform = i >= 1 ? "rotate(-8deg)" : "rotate(14deg)";
      if (i === 1) setTimeout(() => { arm.style.transform = "rotate(4deg)"; BM.sfx("stone"); }, 1500);
      chest.style.opacity = i >= 2 ? "1" : "0";
      inside.style.opacity = i >= 3 ? "1" : "0";
      kick.textContent = i >= 3 ? "Inside the chest" : "Hakatere · this winter";
      title.style.opacity = i >= 4 ? "1" : "0";
      cap.style.opacity = i >= 4 ? "0" : "1";
      if (i >= 4) BM.sfx("chime");
    }
    go(0);
    return { steps:4, step:go, destroy(){ cancelAnimationFrame(raf); if (cancel) cancel(); } };
  };

  /* =======================================================
     2. NAME LAYERS — peel back the English names (Mon W1)
     ======================================================= */
  IX.namelayers = function(host){
    const map = M.hakatere({ theme:"paper", labels:"en", relief:true });
    map.setAttribute("style", "position:absolute;left:0;top:-10px;width:700px;height:700px;border-radius:10px;box-shadow:var(--sh-3)");
    host.appendChild(map);
    const NAMES = [
      { en:"Ashburton River", mi:"Hakatere", d:"**Hakatere** is the river's Māori name. Around **1849**, **Joseph Thomas**, the Canterbury Association's chief surveyor, named it the **Ashburton**, after **Lord Ashburton** (William Bingham Baring), a member of the Association. Hakatere is still the name of the river, the district and **Hakatere Marae**." },
      { en:"Mt Somers", mi:"Te Kiekie", d:"The mountain we can see from much of the plains has two names: **Mt Somers** and **Te Kiekie**. Both are official today." },
      { en:"Mt Hutt", mi:"Ōpuke", d:"**Ōpuke** is the Māori name for **Mt Hutt**, the range above Methven." },
      { en:"Ashburton Lakes", mi:"Ō Tū Wharekai", d:"The high-country lakes and wetlands are **Ō Tū Wharekai**. Hakatere Station's 1862 stone cottage is nearby." },
      { en:"Rakaia & Rangitata", mi:"(kept!)", d:"Some Māori names were **kept**: the **Rakaia** and **Rangitata** rivers still carry their Māori names. Why might some names change and others stay?" }
    ];
    const list = h("div", { style:{ position:"absolute", left:"740px", right:"0", top:"0", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"14px" } });
    const info = panel({ left:"740px", right:"0", bottom:"0", minHeight:"220px" }, [h("h4", null, "Two names, one place"), setMD(h("p"), "Click a name to peel back the layer. Use **Peel back all** to show the older names on the map.")]);
    NAMES.forEach(n => {
      const card = h("div", { class:"pcard hov", style:{ padding:"16px 20px", cursor:"pointer", minHeight:"96px" } },
        h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"30px", letterSpacing:".04em", lineHeight:"1.05" } }, n.en),
        h("div", { class:"mi", style:{ fontFamily:"var(--f-display)", fontWeight:"800", fontSize:"34px", color:"#9E3826", lineHeight:"1.05", maxHeight:"0", overflow:"hidden", transition:"max-height .6s" } }, n.mi));
      card.addEventListener("click", e => { e.stopPropagation(); card.querySelector(".mi").style.maxHeight = "60px"; info.querySelector("h4").textContent = n.en + " · " + n.mi; setMD(info.querySelector("p"), n.d); BM.sfx("paper"); });
      list.appendChild(card);
    });
    host.append(list, info);
    let mode = "en";
    const modeBtn = btn("Peel back all", () => { mode = mode === "en" ? "both" : mode === "both" ? "mi" : "en"; map.setLabels(mode); modeBtn.textContent = { en:"Peel back all", both:"Older names only", mi:"English names" }[mode]; }, "on");
    controls(host, [modeBtn]);
    return { steps:2, step(i){ mode = ["en","both","mi"][i]; map.setLabels(mode); if (i > 0) list.querySelectorAll(".mi").forEach(m => m.style.maxHeight = "60px"); else list.querySelectorAll(".mi").forEach(m => m.style.maxHeight = "0"); modeBtn.textContent = { en:"Peel back all", both:"Older names only", mi:"English names" }[mode]; } };
  };

  /* =======================================================
     3. LOCAL TIMELINE — scroll reveal (Mon W1)
     ======================================================= */
  IX.localtimeline = function(host){
    const EV = [
      { y:"Long ago → today", t:"Tākata whenua", d:"**Waitaha**, **Kāti Māmoe** and **Kāi Tahu**: the first peoples of Hakatere. They named the land, used its trails and food places, and passed on its history in kōrero and whakapapa.", c:"#9E3826" },
      { y:"1848", t:"Kemp's Purchase", d:"The Crown's agent buys a huge block of Canterbury land from Kāi Tahu. Promises are made. (We'll study it properly in Week 4.)", c:"#B4412F" },
      { y:"c. 1849", t:"A new name", d:"Surveyor **Joseph Thomas** names the river the **Ashburton**.", c:"#3D8DB3" },
      { y:"1858", t:"Ferry & accommodation house", d:"An accommodation house opens beside the river ferry, where travellers cross.", c:"#5E7F3A" },
      { y:"1862", t:"The stone cottage", d:"Shepherds at **Hakatere Station** build a stone cottage. It's still standing.", c:"#C08A2E" },
      { y:"1863–64", t:"A town is surveyed", d:"The town of Ashburton is surveyed beside the river.", c:"#2F3D7A" },
      { y:"Today", t:"Our place", d:"Hakatere Marae, farms and towns, and families from many countries. **Us.**", c:"#4F7A35" }
    ];
    const track = h("div", { style:{ position:"absolute", left:"0", right:"0", top:"40px", height:"6px", background:"rgba(243,236,221,.25)", borderRadius:"3px" } });
    const fill = h("div", { style:{ position:"absolute", left:"0", top:"40px", height:"6px", width:"0", background:"var(--wheat)", borderRadius:"3px", transition:"width .8s var(--ease-paper)" } });
    host.append(track, fill);
    const cw = 1760/EV.length;
    const cards = EV.map((e, i) => {
      const c = h("div", { class:"pcard", style:{ position:"absolute", left:(i*cw + 6) + "px", top:"80px", width:(cw - 12) + "px", height:"560px", padding:"20px 20px", opacity:"0", transform:"translateY(30px)", transition:"opacity .7s, transform .7s var(--ease-lift)", boxShadow:`inset 0 8px 0 ${e.c}, var(--sh-3)` } },
        h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"34px", color:e.c, lineHeight:"1" } }, e.y),
        h("div", { style:{ fontFamily:"var(--f-display)", fontWeight:"900", fontSize:"28px", lineHeight:"1.05", margin:"10px 0", hyphens:"auto" } }, e.t),
        setMD(h("div", { style:{ fontSize:"24px", lineHeight:"1.28" } }), e.d));
      const dot = h("div", { style:{ position:"absolute", left:(i*cw + cw/2 - 14) + "px", top:"29px", width:"28px", height:"28px", borderRadius:"50%", background:e.c, boxShadow:"0 0 0 5px rgba(243,236,221,.8)", opacity:"0", transition:"opacity .5s" } });
      host.append(c, dot); c.dot = dot; return c;
    });
    const missing = h("div", { class:"pcard", style:{ position:"absolute", right:"0", top:"-118px", padding:"12px 18px", fontSize:"24px", opacity:"0", transition:"opacity .6s", maxWidth:"560px" } }, "⭐ What's missing from a timeline like this? Whose stories?");
    host.appendChild(missing);
    function step(n){ cards.forEach((c, i) => { const on = i <= n; c.style.opacity = on ? "1" : "0"; c.style.transform = on ? "none" : "translateY(30px)"; c.dot.style.opacity = on ? "1" : "0"; }); fill.style.width = Math.min(100, ((n + .5)/EV.length)*100) + "%"; missing.style.opacity = n >= EV.length - 1 ? "1" : "0"; if (n > 0) BM.sfx("paper"); }
    step(0);
    return { steps:EV.length - 1, step };
  };

  /* =======================================================
     4. SOURCE SORTER — primary or secondary? (Mon W1)
     ======================================================= */
  IX.sourcesorter = function(host){
    const CARDS = [
      { id:"cottage", art:"cottage", t:"The 1862 stone cottage, Hakatere Station", bin:"P", why:"**Primary** — it was built at the time and it's still there. Historians can look at the stones, the size and the fireplace." },
      { id:"sketch", art:"sketch", t:"Walter Mantell's 1848 sketch of Te Rehe", bin:"P", why:"**Primary** — drawn at the time by someone who was there. (Mantell worked for the Crown, so historians compare it with Kāi Tahu accounts.)" },
      { id:"panel", art:"panel", t:"A museum exhibition panel", bin:"S", why:"**Secondary** — written later by experts, using other sources." },
      { id:"oral", art:"oral", t:"A kaumātua's account, handed down in the whānau", bin:"O", why:"**Oral history: a real source!** Kāi Tahu passed on history through whakapapa, kōrero and place names. Historians compare it with other sources, just as they do with written ones." },
      { id:"news", art:"news", t:"A 2021 news report on the flood", bin:"P", why:"**Primary for 2021** — reported as it happened. In 100 years it will be a primary source about our flood." },
      { id:"app", art:"app", t:"This term's app (The Braided Map)", bin:"S", why:"**Secondary!** We made it later, using other sources. That's why every fact has a source link." }
    ];
    const BINS = [
      { id:"P", t:"PRIMARY", d:"made at the time, by people who were there", x:0, w:690, c:"#7FA55A" },
      { id:"O", t:"ORAL", d:"passed on by speaking", x:710, w:340, c:"#E6C873" },
      { id:"S", t:"SECONDARY", d:"made later, about the past", x:1070, w:690, c:"#7CC0DE" }
    ];
    BINS.forEach(b => host.appendChild(h("div", { style:{ position:"absolute", left:b.x+"px", top:"0", width:b.w+"px", height:"300px", borderRadius:"16px", border:`4px dashed ${b.c}`, background:"rgba(0,0,0,.25)", padding:"14px 20px" } },
      h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"40px", letterSpacing:".14em", color:b.c, lineHeight:"1" } }, b.t), h("div", { style:{ fontSize:"22px", opacity:".85" } }, b.d))));
    const tip = h("div", { class:"pcard ix-tip", style:{ left:"0", right:"0", top:"316px", minHeight:"64px" } }, "Drag each source into a box. Ask the class first, then drop it!");
    host.appendChild(tip);
    const placed = {};
    const W = 278;
    CARDS.forEach((c, i) => {
      const home = { x: i*(W + 18) + 4, y:420 };
      const card = h("div", { class:"pcard hov", style:{ width:W+"px", height:"262px", padding:"10px 12px", zIndex:"2" } }, A.artefactBox(c.art, "width:100%;height:160px;pointer-events:none"), h("div", { style:{ fontSize:"21px", fontWeight:"700", lineHeight:"1.12", textAlign:"center", marginTop:"6px" } }, c.t));
      host.appendChild(card);
      const place = (b) => { const slot = Object.keys(placed).filter(k => placed[k] === b.id).indexOf(c.id); card.style.transform = "scale(.58)"; card.style.transformOrigin = "top left"; return { x: b.x + 14 + (slot % Math.max(1, Math.floor(b.w/170)))*168, y: 70 + Math.floor(slot / Math.max(1, Math.floor(b.w/170)))*100 }; };
      const dr = draggable(card, host, home, (x, y) => {
        const b = BINS.find(bb => x > bb.x && x < bb.x + bb.w && y < 330);
        if (!b){ delete placed[c.id]; card.style.transform = ""; return false; }
        placed[c.id] = b.id; const p = place(b); card.style.left = p.x + "px"; card.style.top = p.y + "px";
        const ok = b.id === c.bin || (c.bin === "O");
        card.style.boxShadow = `0 0 0 6px ${ok ? "#7FA55A" : "#D5684F"}, var(--sh-2)`;
        tip.innerHTML = (ok ? '<b style="color:#4F7A35">✓ </b>' : '<b style="color:#9E3826">✗ Not quite. </b>') + BM.md(c.why);
        BM.sfx(ok ? "ok" : "no"); return true;
      });
      c.el = card; c.dr = dr;
    });
    controls(host, [
      btn("Reset", () => { Object.keys(placed).forEach(k => delete placed[k]); CARDS.forEach(c => { c.dr.home(); c.el.style.transform = ""; c.el.style.boxShadow = ""; }); tip.textContent = "Drag each source into a box. Ask the class first, then drop it!"; }, "dark"),
      btn("Show answers", () => { CARDS.forEach(c => { const b = BINS.find(bb => bb.id === c.bin); placed[c.id] = b.id; }); CARDS.forEach(c => { const b = BINS.find(bb => bb.id === c.bin); const slot = Object.keys(placed).filter(k => placed[k] === b.id).indexOf(c.id); const per = Math.max(1, Math.floor(b.w/170)); c.el.style.transform = "scale(.58)"; c.el.style.transformOrigin = "top left"; c.dr.move(b.x + 14 + (slot % per)*168, 70 + Math.floor(slot/per)*100); c.el.style.boxShadow = "0 0 0 6px #7FA55A, var(--sh-2)"; });
        tip.innerHTML = BM.md("**A historian's two questions:** *Who made this, and why?* and *How can I check it against another source?*"); }, "on")
    ]);
    return {};
  };

  /* =======================================================
     10. SOURCE TO SEA — fly down the Hakatere (Tue W1)
     ======================================================= */
  IX.source2sea = function(host){
    const wrap = h("div", { style:{ position:"absolute", left:"0", top:"-10px", width:"1000px", height:"700px", borderRadius:"10px", overflow:"hidden", boxShadow:"var(--sh-3)" } });
    const map = M.hakatere({ theme:"paper", labels:"both", relief:true });
    map.setAttribute("style", "width:100%;height:100%;display:block");
    map.setAttribute("preserveAspectRatio", "xMidYMid slice");
    wrap.appendChild(map); host.appendChild(wrap);
    const pin = s("g", { style:"transition:transform 1.6s var(--ease-paper)" });
    pin.appendChild(s("circle", { r:22, fill:"#B4412F", opacity:.25 }));
    pin.appendChild(s("circle", { r:11, fill:"#B4412F", stroke:"#FBF7EE", "stroke-width":4 }));
    map.appendChild(pin);
    const STOPS = [
      { k:"Source", at:[16,14], view:[0,-50,520,364], t:"Ice: the Ashburton Glacier", d:"The **South Branch** starts as meltwater from the **Ashburton Glacier**, below **Mt Arrowsmith (2,781 m)**. The **North Branch** rises in the ranges further north, near Mt Hutt." },
      { k:"Gorge", at:[33,46], view:[100,180,620,434], t:"Through the foothills", d:"The river cuts through the foothills past **Te Kiekie / Mt Somers (1,688 m)** and out onto the plains." },
      { k:"Plains", at:[52,60.5], view:[300,380,620,434], t:"Braiding across the plains", d:"On the flat gravel plains the river spreads out and splits into many channels that join again: a **braided river**." },
      { k:"Branches join", at:[67.5,69.9], view:[460,520,500,350], t:"The branches join", d:"The North and South Branches meet about **21 km from the coast**, just inland of **Ashburton** town." },
      { k:"Mouth", at:[76.3,90.4], view:[560,700,500,350], t:"The sea: the hāpua", d:"The river reaches the sea at the **Hakatere hāpua**, a river-mouth lagoon held back by a gravel bar." },
      { k:"Whole river", at:[76.3,90.4], view:[0,0,1200,1200], t:"Mountains to sea", d:"About **85 km** north-east of Ashburton is Christchurch. From ice to sea, the whole story of our place is in one river." }
    ];
    const card = panel({ left:"1040px", right:"0", top:"60px", minHeight:"300px" }, [h("div", { class:"ix-chip", style:{ background:"#3D8DB3", color:"#fff" } }, "Stop 1"), h("h4", { style:{ marginTop:"10px" } }), h("p")]);
    host.appendChild(card);
    const dots = h("div", { style:{ position:"absolute", left:"1040px", right:"0", top:"0", display:"flex", gap:"8px" } }, STOPS.map((st, i) => h("button", { class:"ixbtn dark", style:{ minHeight:"44px", padding:"6px 12px", fontSize:"18px" }, onclick:(e) => { e.stopPropagation(); go(i); } }, st.k)));
    host.appendChild(dots);
    const prof = svg(720, 240, { style:"position:absolute;left:1040px;bottom:0;width:720px;height:240px" });
    prof.appendChild(s("rect", { width:720, height:240, rx:10, fill:"rgba(0,0,0,.25)" }));
    prof.appendChild(s("path", { d:"M20 40 C 90 60, 150 120, 230 160 S 480 200, 700 215 L700 230 L20 230Z", fill:"#A7A59C", opacity:.6 }));
    prof.appendChild(s("path", { d:"M20 40 C 90 60, 150 120, 230 160 S 480 200, 700 215", stroke:"#BFE0EA", "stroke-width":5, fill:"none" }));
    [["ice",24,30],["foothills",190,140],["plains",420,185],["sea",640,206]].forEach(([t,x,y]) => prof.appendChild(s("text", { x, y, "font-family":"Big Shoulders Display", "font-weight":800, "font-size":22, fill:"#F3ECDD" }, t)));
    const ppin = s("circle", { r:10, fill:"#B4412F", stroke:"#FBF7EE", "stroke-width":3, style:"transition:transform 1.4s var(--ease-paper)" });
    prof.appendChild(ppin); host.appendChild(prof);
    const PP = [[24,42],[200,150],[420,186],[560,202],[690,214],[690,214]];
    let vb = [0,0,1200,1200], raf;
    function animView(to){
      cancelAnimationFrame(raf);
      if (!BM.motionOK()){ vb = to.slice(); map.setAttribute("viewBox", vb.join(" ")); return; }
      const from = vb.slice(), t0 = performance.now(), D = 1400;
      const tick = (now) => { const k = Math.min(1, (now - t0)/D), e = k < .5 ? 2*k*k : 1 - Math.pow(-2*k + 2, 2)/2; vb = from.map((v, i) => v + (to[i] - v)*e); map.setAttribute("viewBox", vb.join(" ")); if (k < 1) raf = requestAnimationFrame(tick); };
      raf = requestAnimationFrame(tick);
    }
    function go(i){
      const st = STOPS[i];
      pin.style.transform = `translate(${st.at[0]*10}px, ${st.at[1]*10}px)`;
      ppin.style.transform = `translate(${PP[i][0]}px, ${PP[i][1]}px)`;
      animView(st.view);
      card.firstChild.textContent = i === STOPS.length - 1 ? "The whole journey" : "Stop " + (i+1);
      card.querySelector("h4").textContent = st.t; setMD(card.querySelector("p"), st.d);
      dots.querySelectorAll("button").forEach((b, j) => b.classList.toggle("on", j === i));
      BM.sfx("paper");
    }
    go(0);
    return { steps:STOPS.length - 1, step:go, destroy(){ cancelAnimationFrame(raf); } };
  };

  /* =======================================================
     11. CONTOUR BUILDER — layers ↔ contour map ↔ cross-section (Tue W1)
     ======================================================= */
  IX.contours = function(host){
    const LEVELS = [200,400,600,800,1000,1200,1400,1600];
    const PEAK = 1688;
    const radius = (hgt, th) => { const base = 300*Math.pow(1 - hgt/PEAK, .75) + 6; const asym = 1 - .42*Math.sin(th); const wob = 1 + .06*Math.sin(th*3 + hgt/300) + .04*Math.cos(th*5); return base*asym*wob; };
    const blob = (hgt, cx, cy, sy) => { const pts = []; for (let a=0;a<=72;a++){ const th = a/72*Math.PI*2; const r = radius(hgt, th); pts.push(`${(cx + Math.cos(th)*r).toFixed(1)} ${(cy + Math.sin(th)*r*sy).toFixed(1)}`); } return "M" + pts.join(" L") + "Z"; };
    const cols = ["#7FA55A","#93ae5c","#a8b465","#bdb56f","#c9a96a","#b9967a","#a7938b","#c7cdd0"];
    const v = svg(1100, 690, { style:"position:absolute;left:0;top:0;width:1100px;height:690px" });
    v.appendChild(s("rect", { width:1100, height:690, rx:12, fill:"#efe6cf" }));
    v.appendChild(s("rect", { width:1100, height:690, rx:12, fill:"url(#p-grid)" }));
    const stack = s("g"), flat = s("g", { opacity:0 }), section = s("g", { opacity:0 });
    // 3D stack (layers lifted by height)
    LEVELS.forEach((hgt, i) => {
      const lift = hgt*.16;
      const g = s("g", { style:`transition:transform 1.2s var(--ease-paper) ${i*0.06}s, opacity .8s`, class:"lyr" });
      g.appendChild(s("path", { d: blob(hgt, 550, 470 - lift, .42), fill:"#000", opacity:.18, transform:"translate(0 10)" }));
      g.appendChild(s("path", { d: blob(hgt, 550, 470 - lift, .42), fill:cols[i], stroke:"#5a5244", "stroke-width":2 }));
      g.appendChild(s("text", { x:550 + radius(hgt, 0) + 10, y:470 - lift + 8, "font-family":"Big Shoulders Display", "font-weight":800, "font-size":20, fill:"#3b4950" }, hgt + " m"));
      stack.appendChild(g);
    });
    stack.appendChild(A.trig(550, 470 - PEAK*.16 - 12, 14));
    stack.appendChild(s("text", { x:578, y:470 - PEAK*.16 - 14, "font-family":"Big Shoulders Display", "font-weight":900, "font-size":26, fill:"#9E3826" }, "Te Kiekie / Mt Somers · 1,688 m"));
    // flattened contour map (top view)
    LEVELS.forEach((hgt, i) => { flat.appendChild(s("path", { d: blob(hgt, 550, 330, 1), fill:"none", stroke:"#8a5a2e", "stroke-width": i % 5 === 4 ? 4 : 2.2 })); if (i % 2 === 1) flat.appendChild(s("text", { x:550 - 8, y:330 - radius(hgt, -Math.PI/2) + 7, "font-family":"Big Shoulders Display", "font-weight":800, "font-size":19, fill:"#8a5a2e", stroke:"#efe6cf", "stroke-width":5, "paint-order":"stroke" }, String(hgt))); });
    flat.appendChild(A.trig(550, 330, 12));
    flat.appendChild(s("text", { x:120, y:80, "font-family":"Big Shoulders Display", "font-weight":900, "font-size":30, fill:"#2C6F92" }, "NORTH: lines far apart = gentle"));
    flat.appendChild(s("text", { x:120, y:650, "font-family":"Big Shoulders Display", "font-weight":900, "font-size":30, fill:"#9E3826" }, "SOUTH: lines close together = steep"));
    flat.appendChild(s("path", { d:"M1040 70 l14 40 l-14 -10 l-14 10z", fill:"#1F2A30" })); flat.appendChild(s("text", { x:1033, y:60, "font-family":"Big Shoulders Display", "font-weight":900, "font-size":22, fill:"#1F2A30" }, "N"));
    // cross-section A–B (north → south through the peak)
    const sx0 = 120, sx1 = 980, base = 620, sc = .26;
    const xs = [];
    for (let i=0;i<=120;i++){ const t = i/120, y = 330 - 330 + (t - .5)*2; void y; xs.push(t); }
    const prof = []; // height along line through centre: north side uses th=-π/2, south side th=+π/2
    for (let i=0;i<=200;i++){
      const t = i/200, d = (t - .5)*2; // -1 north … +1 south
      const th = d < 0 ? -Math.PI/2 : Math.PI/2, dist = Math.abs(d)*470;
      // invert radius(h) = dist → find h by search
      let hgt = 0; for (let hh = PEAK; hh >= 0; hh -= 8){ if (radius(hh, th) >= dist){ hgt = hh; break; } }
      prof.push([sx0 + t*(sx1 - sx0), base - hgt*sc]);
    }
    section.appendChild(s("path", { d:"M" + prof.map(p => p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" L") + ` L${sx1} ${base} L${sx0} ${base}Z`, fill:"#a8b465", stroke:"#5a5244", "stroke-width":3 }));
    LEVELS.forEach(hgt => section.appendChild(s("line", { x1:sx0, x2:sx1, y1:base - hgt*sc, y2:base - hgt*sc, stroke:"#8a5a2e", "stroke-width":1.2, "stroke-dasharray":"4 6", opacity:.6 })));
    [0,400,800,1200,1600].forEach(hgt => section.appendChild(s("text", { x:sx0 - 12, y:base - hgt*sc + 6, "text-anchor":"end", "font-family":"Big Shoulders Display", "font-weight":800, "font-size":18, fill:"#3b4950" }, hgt + " m")));
    section.appendChild(s("text", { x:sx0, y:base + 40, "font-family":"Big Shoulders Display", "font-weight":900, "font-size":26, fill:"#2C6F92" }, "A (north) · gentle"));
    section.appendChild(s("text", { x:sx1, y:base + 40, "text-anchor":"end", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":26, fill:"#9E3826" }, "steep · B (south)"));
    section.appendChild(s("text", { x:550, y:80, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":30, fill:"#1F2A30" }, "CROSS-SECTION: slicing the mountain from A to B"));
    v.append(stack, flat, section);
    host.appendChild(v);
    const info = panel({ left:"1130px", right:"0", top:"0", minHeight:"300px" }, [h("h4"), h("p")]);
    host.appendChild(info);
    const tips = [
      ["Layers of height", "Each paper layer is one **contour**: every point on its edge is the same height. Our layers are **200 m apart** (the contour interval)."],
      ["Flatten it", "Look down from above and the layers become **contour lines**. **Close together = steep. Far apart = gentle.** Which side of Te Kiekie is steep?"],
      ["Slice it", "A **cross-section** shows the shape of the land along a line. See how the south face drops away fast?"]
    ];
    const tabs = h("div", { style:{ position:"absolute", left:"1130px", right:"0", bottom:"0", display:"flex", flexDirection:"column", gap:"12px" } });
    const tb = ["① Stack the layers", "② Look from above", "③ Cut a cross-section"].map((t, i) => btn(t, () => go(i), "dark"));
    tabs.append(...tb); host.appendChild(tabs);
    function go(i){
      stack.querySelectorAll(".lyr").forEach((g, j) => g.style.transform = i === 0 ? "none" : `translateY(${LEVELS[j]*.16}px)`);
      stack.style.transition = "opacity .9s"; stack.setAttribute("opacity", i === 0 ? 1 : 0);
      flat.style.transition = "opacity .9s"; flat.setAttribute("opacity", i === 1 ? 1 : 0);
      section.style.transition = "opacity .9s"; section.setAttribute("opacity", i === 2 ? 1 : 0);
      info.querySelector("h4").textContent = tips[i][0]; setMD(info.querySelector("p"), tips[i][1]);
      tb.forEach((b, j) => b.classList.toggle("on", j === i)); BM.sfx("paper");
    }
    go(0);
    return { steps:2, step:go };
  };

  /* =======================================================
     12. GRID & SCALE GAME (Tue W1)
     ======================================================= */
  IX.gridgame = function(host){
    const map = M.hakatere({ theme:"paper", labels:"both", grid:true, relief:true });
    map.setAttribute("style", "position:absolute;left:0;top:-10px;width:700px;height:700px;border-radius:10px;box-shadow:var(--sh-3);touch-action:none");
    host.appendChild(map);
    const hi = s("rect", { width:150, height:150, fill:"#E6C873", opacity:0, stroke:"#B4412F", "stroke-width":6, style:"transition:opacity .5s" });
    map.insertBefore(hi, map.bm.places);
    const P = M.PLACES;
    const Q = [
      { q:"What's in square **D2**?", a:"**Ōpuke / Mt Hutt** (2,190 m) — a red trig triangle.", sq:[3,1] },
      { q:"What's the grid reference for **Te Kiekie / Mt Somers**?", a:"**C3** (1,688 m).", sq:[2,2] },
      { q:"Which town is in square **E3**?", a:"**Methven**.", sq:[4,2] },
      { q:"Give the grid reference for the **river mouth (hāpua)**.", a:"**F7**.", sq:[5,6] },
      { q:"About how far is it in a straight line from **Ashburton to Methven**?", a:`About **${Math.round(M.dist(P.ashburton, P.methven))} km** (measure with the scale bar, or press Measure and click both towns).`, sq:null }
    ];
    const list = h("div", { style:{ position:"absolute", left:"740px", right:"0", top:"0", display:"flex", flexDirection:"column", gap:"12px" } });
    Q.forEach((x, i) => {
      const ans = setMD(h("div", { style:{ fontSize:"24px", color:"#4F7A35", maxHeight:"0", overflow:"hidden", transition:"max-height .6s" } }), x.a);
      const c = h("div", { class:"pcard hov", style:{ padding:"14px 20px", cursor:"pointer" } }, setMD(h("div", { style:{ fontSize:"27px", lineHeight:"1.2" } }), (i+1) + ". " + x.q), ans);
      c.addEventListener("click", e => { e.stopPropagation(); ans.style.maxHeight = "90px"; if (x.sq){ hi.setAttribute("x", x.sq[0]*150); hi.setAttribute("y", x.sq[1]*150); hi.setAttribute("opacity", .45); } BM.sfx("ok"); });
      list.appendChild(c);
    });
    host.appendChild(list);
    // measuring tool
    let measuring = false, picks = [];
    const line = s("line", { stroke:"#B4412F", "stroke-width":6, "stroke-dasharray":"14 10", opacity:0 });
    const lab = s("text", { "font-family":"Big Shoulders Display", "font-weight":900, "font-size":40, fill:"#9E3826", stroke:"#efe6cf", "stroke-width":7, "paint-order":"stroke", opacity:0 });
    map.append(line, lab);
    const read = h("div", { class:"pcard", style:{ position:"absolute", left:"740px", right:"0", bottom:"0", padding:"12px 18px", fontSize:"24px", display:"none" } });
    host.appendChild(read);
    map.querySelectorAll(".hk-pl").forEach(g => { g.style.cursor = "pointer"; g.addEventListener("click", e => {
      if (!measuring) return; e.stopPropagation();
      const p = P[g.dataset.k]; picks.push(p); if (picks.length > 2) picks = [p];
      if (picks.length === 2){ const [a, b] = picks; line.setAttribute("x1", a.x*10); line.setAttribute("y1", a.y*10); line.setAttribute("x2", b.x*10); line.setAttribute("y2", b.y*10); line.setAttribute("opacity", 1);
        const km = M.dist(a, b); lab.setAttribute("x", (a.x + b.x)*5 + 14); lab.setAttribute("y", (a.y + b.y)*5); lab.textContent = "≈ " + Math.round(km) + " km"; lab.setAttribute("opacity", 1);
        read.style.display = "block"; read.innerHTML = BM.md(`**${a.en} → ${b.en}:** about **${Math.round(km)} km** in a straight line (1 grid square = 15 km).`); BM.sfx("ok"); }
      else { read.style.display = "block"; read.innerHTML = BM.md(`Start: **${p.en}**. Now click a second place.`); line.setAttribute("opacity", 0); lab.setAttribute("opacity", 0); }
    }); });
    const mbtn = btn("📏 Measure", () => { measuring = !measuring; picks = []; mbtn.classList.toggle("on", measuring); read.style.display = "block"; read.innerHTML = measuring ? BM.md("**Measure:** click two places on the map (towns, peaks or river points).") : "Measuring off."; }, "dark");
    controls(host, [mbtn, btn("Clear", () => { hi.setAttribute("opacity", 0); line.setAttribute("opacity", 0); lab.setAttribute("opacity", 0); list.querySelectorAll(".pcard > div:last-child").forEach(a => a.style.maxHeight = "0"); read.style.display = "none"; }, "dark")]);
    return {};
  };

  /* =======================================================
     20. STAR OR PLANET? — make light or bounce light (Wed W1)
     ======================================================= */
  IX.starplanet = function(host){
    // demo: torch (emits) + foil ball (reflects)
    const demo = svg(640, 420, { style:"position:absolute;left:0;top:0;width:640px;height:420px" });
    demo.appendChild(s("rect", { width:640, height:420, rx:14, fill:"#0b1024" }));
    demo.appendChild(A.stars(640, 420, 3, 60));
    const beam = s("path", { d:"M150 210 L520 110 L520 310Z", fill:"#F6EBC8", opacity:0, style:"transition:opacity .6s" });
    demo.appendChild(beam);
    demo.appendChild(s("rect", { x:40, y:186, width:110, height:48, rx:10, fill:"#C9A04A" }));
    demo.appendChild(s("rect", { x:140, y:178, width:24, height:64, rx:6, fill:"#e8dcc0" }));
    const ballDark = s("circle", { cx:460, cy:210, r:62, fill:"#2a2f3a" });
    const ballLit = s("path", { d:"M460 148 A62 62 0 0 0 460 272 A30 62 0 0 1 460 148Z", fill:"#e9eef2", opacity:0, style:"transition:opacity .6s" });
    demo.append(ballDark, ballLit);
    const dl = (x, y, t, c) => demo.appendChild(s("text", { x, y, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":26, fill:c }, t));
    dl(95, 280, "TORCH = a STAR", "#E6C873"); dl(460, 310, "FOIL BALL = a PLANET or MOON", "#BFE0EA");
    dl(320, 40, "Turn the torch on", "#F3ECDD");
    host.appendChild(demo);
    let on = false;
    const toggle = btn("🔦 Torch on", () => { on = !on; beam.setAttribute("opacity", on ? .35 : 0); ballLit.setAttribute("opacity", on ? 1 : 0); toggle.textContent = on ? "🔦 Torch off" : "🔦 Torch on"; }, "on");
    // sorter
    const ITEMS = [
      { t:"The Sun", e:true, why:"The Sun is a **star**. It makes its own light." },
      { t:"The Moon", e:false, why:"The Moon has no light of its own. We see sunlight **reflecting** off it." },
      { t:"Venus", e:false, why:"Venus is a planet. It **reflects** sunlight — its thick clouds make it extra bright." },
      { t:"Matariki (its stars)", e:true, why:"Matariki is a **cluster of stars**. Each star makes its own light." },
      { t:"Jupiter", e:false, why:"Jupiter is a planet, lit by the Sun: it **reflects** light." },
      { t:"Sirius", e:true, why:"Sirius is the brightest **star** in our night sky. It **emits** light." },
      { t:"Mars", e:false, why:"Mars is a planet; its reddish colour is sunlight **reflected** off its rusty surface." }
    ];
    const BX = 680, bins = [{ e:true, t:"EMITS · makes its own light", c:"#E6C873", x:BX, w:530 }, { e:false, t:"REFLECTS · light bounces off it", c:"#7CC0DE", x:BX + 550, w:530 }];
    bins.forEach(b => host.appendChild(h("div", { style:{ position:"absolute", left:b.x+"px", top:"0", width:b.w+"px", height:"420px", borderRadius:"14px", border:`4px dashed ${b.c}`, background:"rgba(0,0,0,.25)", padding:"12px 16px" } }, h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"28px", letterSpacing:".1em", color:b.c } }, b.t))));
    const tip = h("div", { class:"pcard ix-tip", style:{ left:"0", width:"640px", top:"440px", minHeight:"110px" } }, "Ask the class first: does it make light, or reflect it? Then drag the card.");
    host.appendChild(tip);
    const count = { true:0, false:0 };
    ITEMS.forEach((it, i) => {
      const card = h("div", { class:"pcard hov", style:{ width:"250px", height:"62px", padding:"10px 16px", fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"28px", letterSpacing:".04em", display:"flex", alignItems:"center" } }, it.t);
      host.appendChild(card);
      const home = { x: BX + (i % 4)*270, y: 450 + Math.floor(i/4)*84 };
      const dr = draggable(card, host, home, (x, y) => {
        const b = bins.find(bb => x > bb.x && x < bb.x + bb.w && y < 420); if (!b) return false;
        const slot = count[b.e]++; dr.move(b.x + 14 + (slot % 2)*258, 60 + Math.floor(slot/2)*80);
        const ok = b.e === it.e; card.style.boxShadow = `0 0 0 5px ${ok ? "#7FA55A" : "#D5684F"}, var(--sh-2)`;
        tip.innerHTML = (ok ? '<b style="color:#4F7A35">✓ </b>' : '<b style="color:#9E3826">✗ Think again. </b>') + BM.md(it.why); BM.sfx(ok ? "ok" : "no"); return true;
      });
      it.el = card; it.dr = dr;
    });
    controls(host, [toggle, btn("Reset", () => { count.true = 0; count.false = 0; ITEMS.forEach(it => { it.dr.home(); it.el.style.boxShadow = ""; }); tip.textContent = "Ask the class first: does it make light, or reflect it? Then drag the card."; }, "dark")]);
    return { steps:1, step(i){ on = i > 0; beam.setAttribute("opacity", on ? .35 : 0); ballLit.setAttribute("opacity", on ? 1 : 0); toggle.textContent = on ? "🔦 Torch off" : "🔦 Torch on"; } };
  };

  /* =======================================================
     21. NAKED-EYE PLANETS — a sample evening sky (Wed W1)
     ======================================================= */
  IX.nightsky = function(host){
    const W = 1760, H = 690;
    const v = svg(W, H, { style:"position:absolute;inset:0;width:100%;height:100%;border-radius:14px" });
    v.innerHTML = `<defs><linearGradient id="ns-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0b1024"/><stop offset=".7" stop-color="#18224f"/><stop offset="1" stop-color="#3a3f6a"/></linearGradient></defs><rect width="${W}" height="${H}" rx="14" fill="url(#ns-sky)"/>`;
    v.appendChild(A.milkyway(W, H, 4, .45));
    v.appendChild(A.stars(W, H*.85, 11, 380));
    const ecl = s("path", { d:`M-20 ${H*.78} Q ${W/2} ${H*.05} ${W+20} ${H*.7}`, stroke:"#E6C873", "stroke-width":3, "stroke-dasharray":"10 12", fill:"none", opacity:0, style:"transition:opacity .8s" });
    v.appendChild(ecl);
    const eclLab = s("text", { x:W*.68, y:H*.2, "font-family":"Big Shoulders Display", "font-weight":900, "font-size":26, fill:"#E6C873", opacity:0, style:"transition:opacity .8s" }, "the planets' path (the ecliptic)");
    v.appendChild(eclLab);
    const hills = A.range(W, H, H - 40, 140, 7, "#0a0e1e", { peaks:6 }); v.appendChild(hills);
    v.appendChild(s("text", { x:40, y:H - 20, "font-family":"Big Shoulders Display", "font-weight":800, "font-size":22, fill:"rgba(243,236,221,.6)" }, "A SAMPLE SKY looking north from the plains · check tonight's real positions in Stellarium"));
    const PL = [
      { n:"Mercury", x:.08, c:"#d9c9a8", r:5, d:"Small and hard to spot: only low in the twilight, just after sunset or before sunrise." },
      { n:"Venus", x:.22, c:"#fffaf0", r:11, d:"The brightest planet: often called the evening (or morning) star. It shines with a steady light because its thick clouds reflect sunlight." },
      { n:"Mars", x:.42, c:"#e6866a", r:6.5, d:"Looks orange-red. Its rusty surface reflects reddish light." },
      { n:"Jupiter", x:.6, c:"#fff3d6", r:9, d:"Very bright and steady. Binoculars can show its four biggest moons as tiny dots." },
      { n:"Saturn", x:.8, c:"#f0d69a", r:7, d:"Creamy yellow and steady. You need a telescope to see its rings." }
    ];
    const pts = PL.map(p => { const x = p.x*W, t = (x + 20)/(W + 40); const y = (1-t)*(1-t)*H*.78 + 2*(1-t)*t*H*.05 + t*t*H*.7; return [x, y]; });
    const info = panel({ right:"24px", top:"24px", width:"520px", minHeight:"170px" }, [h("h4", null, "Five planets, no telescope"), setMD(h("p"), "Without a telescope we can see **Mercury, Venus, Mars, Jupiter and Saturn**. Click a planet to learn how to spot it.")]);
    const glows = PL.map((p, i) => {
      const [x, y] = pts[i];
      const g = s("g", { style:"cursor:pointer" });
      g.appendChild(s("circle", { cx:x, cy:y, r:p.r*4, fill:"url(#g-star)", opacity:.6 }));
      g.appendChild(s("circle", { cx:x, cy:y, r:p.r, fill:p.c }));
      const lab = s("text", { x, y:y - p.r - 16, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":28, fill:"#F6EBC8", opacity:0, style:"transition:opacity .5s" }, p.n);
      g.appendChild(lab);
      g.addEventListener("click", e => { e.stopPropagation(); lab.setAttribute("opacity", 1); info.querySelector("h4").textContent = p.n; setMD(info.querySelector("p"), p.d); BM.sfx("tok"); });
      v.appendChild(g); g.lab = lab; return g;
    });
    host.append(v, info);
    let twinkle = false, raf;
    const starEls = Array.from(v.querySelectorAll(".stars circle"));
    function tw(){ starEls.forEach((c, i) => { if (i % 3 === 0) c.setAttribute("opacity", (.35 + Math.random()*.65).toFixed(2)); }); raf = setTimeout(() => { if (twinkle) tw(); }, 180); }
    controls(host, [
      btn("Label the planets", () => glows.forEach(g => g.lab.setAttribute("opacity", 1)), "on"),
      btn("Show their path", () => { ecl.setAttribute("opacity", .9); eclLab.setAttribute("opacity", 1); }, "dark"),
      btn("Twinkle test", () => { twinkle = !twinkle; if (twinkle && BM.motionOK()) tw(); info.querySelector("h4").textContent = "Twinkle test"; setMD(info.querySelector("p"), "Stars are so far away they are tiny points, so air movement makes them **twinkle**. Planets look like tiny discs, so they usually shine **steadily**. A handy clue, not a perfect rule!"); }, "dark")
    ]);
    return { steps:2, step(i){ glows.forEach(g => g.lab.setAttribute("opacity", i >= 1 ? 1 : 0)); ecl.setAttribute("opacity", i >= 2 ? .9 : 0); eclLab.setAttribute("opacity", i >= 2 ? 1 : 0); }, destroy(){ twinkle = false; clearTimeout(raf); } };
  };

  /* =======================================================
     26. LIGHT POLLUTION SLIDER (Wed W1)
     ======================================================= */
  IX.lightpollution = function(host){
    const W = 1760, H = 600;
    const v = svg(W, H, { style:"position:absolute;left:0;top:0;width:1760px;height:600px;border-radius:14px" });
    v.innerHTML = `<defs><linearGradient id="lp-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#070a18"/><stop offset="1" stop-color="#1a2150"/></linearGradient><radialGradient id="lp-glow" cx=".5" cy="1" r=".9"><stop offset="0" stop-color="#ffb35c" stop-opacity=".95"/><stop offset=".5" stop-color="#d98a4a" stop-opacity=".45"/><stop offset="1" stop-color="#d98a4a" stop-opacity="0"/></radialGradient></defs><rect width="${W}" height="${H}" rx="14" fill="url(#lp-sky)"/>`;
    const mw = A.milkyway(W, H, 2, .6); v.appendChild(mw);
    const st = A.stars(W, H*.9, 21, 600); v.appendChild(st);
    const stars = Array.from(st.querySelectorAll("circle")).filter(c => !c.getAttribute("fill").startsWith("url"));
    stars.forEach(c => { c.dataset.b = c.getAttribute("r"); });
    const glow = s("rect", { width:W, height:H, fill:"url(#lp-glow)", opacity:0 }); v.appendChild(glow);
    v.appendChild(A.range(W, H, H - 30, 150, 12, "#0a0e1e", { peaks:5 }));
    const town = s("g");
    for (let i=0;i<46;i++){ const x = 300 + (i*97) % 1200, y = H - 30 - (i*37 % 40); town.appendChild(s("rect", { x, y, width:14 + (i % 3)*8, height:18 + (i % 4)*10, fill:"#1a1c26" })); town.appendChild(s("circle", { class:"lamp", cx:x + 6, cy:y + 6, r:3.5, fill:"#ffd38a" })); }
    v.appendChild(town); host.appendChild(v);
    const lamps = Array.from(town.querySelectorAll(".lamp"));
    const label = h("div", { class:"pcard", style:{ position:"absolute", left:"0", right:"0", top:"620px", padding:"14px 22px", fontSize:"26px", display:"flex", alignItems:"center", gap:"24px" } });
    const range = h("input", { type:"range", min:0, max:100, value:85, style:{ width:"560px", accentColor:"#C9A04A" }, oninput:() => set(+range.value), onclick:(e) => e.stopPropagation(), onpointerdown:(e) => e.stopPropagation() });
    const txt = h("div", { style:{ flex:"1" } });
    label.append(h("b", { style:{ fontFamily:"var(--f-label)", letterSpacing:".1em", textTransform:"uppercase" } }, "Town lights"), range, txt);
    host.appendChild(label);
    function set(p){
      const k = p/100;
      glow.setAttribute("opacity", (k*.9).toFixed(2));
      mw.setAttribute("opacity", Math.max(0, .6 - k*1.2).toFixed(2));
      stars.forEach((c, i) => { const faint = (i % 10)/10; c.style.opacity = faint < (1 - k*1.15) ? "" : "0"; });
      lamps.forEach(l => l.setAttribute("opacity", k.toFixed(2)));
      const n = stars.filter(c => c.style.opacity !== "0").length;
      txt.innerHTML = BM.md(k > .66 ? `**Bright town:** about **${n}** stars visible. No Milky Way.` : k > .3 ? `**Fewer lights:** about **${n}** stars. The Milky Way is still hidden.` : `**Dark sky:** about **${n}** stars, and the **Milky Way** appears! This is why the **Aoraki Mackenzie Dark Sky Reserve** controls outdoor lighting.`);
    }
    set(85);
    controls(host, [btn("Lights on", () => { range.value = 90; set(90); }, "dark"), btn("Lights off", () => { range.value = 0; set(0); }, "on")]);
    return { steps:1, step(i){ const v2 = i ? 0 : 85; range.value = v2; set(v2); } };
  };

  /* =======================================================
     30. FARM MACHINE TIMELINE — drag to order (Thu W1)
     ======================================================= */
  IX.machinetimeline = function(host){
    const EV = [
      { y:"1840s+", t:"Bullocks & horses", art:"horse", d:"Early farm work used **bullock teams and horses** to pull ploughs and carts." },
      { y:"1856", t:"Horse-drawn reaper", art:"reaper", d:"A horse-drawn **reaper** (Bell's Improved Reaper) arrives in Canterbury to cut grain." },
      { y:"1860s", t:"Steam power", art:"steam", d:"**Steam engines** drive threshing mills and, later, traction engines." },
      { y:"1904", t:"First tractors", art:"tractor", d:"New Zealand's first **tractors**, an Ivel and a Kinnard Haines, are imported." },
      { y:"1927", t:"Header harvesters", art:"header", d:"**Headers** cut and thresh grain in one machine." },
      { y:"1969", t:"Rotary milking platform", art:"milking", d:"Merv Hicks builds an electric **rotary milking platform**: cows ride round while being milked." },
      { y:"mid-1980s", t:"Big spray irrigators", art:"pivot", d:"Large electric **spray irrigators** spread across the dry South Island. Today pivots and linear irrigators water about **133,000 ha** of the Ashburton District (2022)." }
    ];
    const order = [3,0,5,2,6,1,4];
    const SW = 236, GAP = 15;
    const slots = EV.map((e, i) => { const sl = h("div", { style:{ position:"absolute", left:(i*(SW + GAP)) + "px", top:"0", width:SW + "px", height:"300px", borderRadius:"12px", border:"3px dashed rgba(243,236,221,.4)", display:"flex", alignItems:"flex-end", justifyContent:"center", paddingBottom:"8px", fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"26px", color:"rgba(243,236,221,.5)" } }, i === 0 ? "EARLIEST" : i === EV.length - 1 ? "LATEST" : "→"); host.appendChild(sl); return { x:i*(SW + GAP), card:null }; });
    host.appendChild(h("div", { style:{ position:"absolute", left:"0", right:"0", top:"312px", height:"6px", background:"linear-gradient(90deg, #A8692E, #E6C873, #7FA55A)", borderRadius:"3px" } }));
    const tip = h("div", { class:"pcard ix-tip", style:{ left:"0", right:"0", bottom:"0", minHeight:"64px" } }, "Drag the machines into order, from earliest to latest. Then press Check.");
    host.appendChild(tip);
    const cards = order.map((ei, k) => {
      const e = EV[ei];
      const yr = h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"30px", color:"#9E3826", opacity:"0", transition:"opacity .5s", lineHeight:"1" } }, e.y);
      const c = h("div", { class:"pcard hov", style:{ width:(SW - 16) + "px", height:"268px", padding:"8px 10px", zIndex:"2" } }, A.artefactBox(e.art, "width:100%;height:150px;pointer-events:none"), h("div", { style:{ fontFamily:"var(--f-display)", fontWeight:"900", fontSize:"25px", lineHeight:"1.02", margin:"6px 0 4px" } }, e.t), yr);
      c.ei = ei; c.yr = yr;
      const home = { x:k*(SW + GAP) + 8, y:340 };
      const dr = draggable(c, host, home, (x, y) => {
        if (y > 320) { slots.forEach(sl => { if (sl.card === c) sl.card = null; }); return false; }
        const i = Math.max(0, Math.min(EV.length - 1, Math.floor(x/(SW + GAP))));
        slots.forEach(sl => { if (sl.card === c) sl.card = null; });
        if (slots[i].card){ slots[i].card.dr.home(); }
        slots[i].card = c; dr.move(slots[i].x + 8, 16); setMD(tip, e.d); BM.sfx("paper"); return true;
      });
      c.dr = dr; host.appendChild(c); return c;
    });
    function check(){ let right = 0; slots.forEach((sl, i) => { if (!sl.card) return; const ok = sl.card.ei === i; if (ok) right++; sl.card.style.boxShadow = `0 0 0 5px ${ok ? "#7FA55A" : "#D5684F"}, var(--sh-2)`; sl.card.yr.style.opacity = ok ? "1" : "0"; }); tip.innerHTML = BM.md(right === EV.length ? "**✓ All in order!** From muscle to machine in about 140 years. What changed for farm workers?" : `**${right} of ${EV.length}** in the right place. Swap the red ones.`); BM.sfx(right === EV.length ? "chime" : "tok"); }
    controls(host, [btn("Check", check, "on"), btn("Show answer", () => { slots.forEach(sl => sl.card = null); cards.forEach(c => { slots[c.ei].card = c; c.dr.move(slots[c.ei].x + 8, 16); c.yr.style.opacity = "1"; c.style.boxShadow = "0 0 0 5px #7FA55A, var(--sh-2)"; }); setMD(tip, EV[EV.length - 1].d); }, "dark"), btn("Reset", () => { slots.forEach(sl => sl.card = null); cards.forEach(c => { c.dr.home(); c.yr.style.opacity = "0"; c.style.boxShadow = ""; }); tip.textContent = "Drag the machines into order, from earliest to latest. Then press Check."; }, "dark")]);
    return {};
  };

  /* =======================================================
     30b. INPUT → PROCESS → OUTPUT builder (Thu W1)
     ======================================================= */
  IX.ipo = function(host){
    const MACH = {
      pivot:{ n:"Pivot irrigator", art:"pivot", parts:[["I","Water from a well or race"],["I","Electricity"],["P","A pump pushes water along the arm"],["P","Motors drive the wheels round the centre"],["O","An evenly watered circle of crop"]] },
      tractor:{ n:"Tractor", art:"tractor", parts:[["I","Diesel fuel"],["I","The driver's steering and pedals"],["P","The engine burns fuel and turns the wheels through gears"],["O","Pulling power to tow a plough or trailer"]] },
      milking:{ n:"Rotary milking platform", art:"milking", parts:[["I","Cows stepping on"],["I","Electricity"],["P","The platform turns slowly while cups milk each cow"],["O","Milk in the vat"],["O","Cows step off when the turn is done"]] },
      baler:{ n:"Hay baler", art:"baler", parts:[["I","Cut, dried grass in rows"],["I","Power from the tractor"],["P","Picks up the hay, squashes it, ties it with twine"],["O","Neat bales of hay"]] }
    };
    const BOX = { I:{ t:"INPUT", c:"#7CC0DE", x:0 }, P:{ t:"PROCESS", c:"#E6C873", x:600 }, O:{ t:"OUTPUT", c:"#9CC26A", x:1200 } };
    Object.values(BOX).forEach(b => { host.appendChild(h("div", { style:{ position:"absolute", left:b.x+"px", top:"0", width:"560px", height:"330px", borderRadius:"14px", border:`4px dashed ${b.c}`, background:"rgba(0,0,0,.25)", padding:"12px 18px" } }, h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"40px", letterSpacing:".14em", color:b.c } }, b.t))); });
    [580, 1180].forEach(x => host.appendChild(h("div", { style:{ position:"absolute", left:x + "px", top:"140px", fontSize:"40px", color:"#F3ECDD" } }, "→")));
    const pic = h("div", { style:{ position:"absolute", left:"0", top:"360px", width:"300px", height:"300px" } });
    const name = h("div", { style:{ position:"absolute", left:"0", top:"640px", width:"300px", textAlign:"center", fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"26px", letterSpacing:".08em" } });
    host.append(pic, name);
    let cards = [];
    function load(key){
      cards.forEach(c => c.remove()); cards = [];
      const m = MACH[key]; BM.clear(pic).appendChild(A.artefactBox(m.art, "width:300px;height:280px;box-shadow:var(--sh-3)")); name.textContent = m.n;
      const shuffled = m.parts.map((p, i) => ({ p, i })).sort((a, b) => ((a.i*7 + 3) % 5) - ((b.i*7 + 3) % 5));
      const cnt = { I:0, P:0, O:0 };
      shuffled.forEach((x, k) => {
        const c = h("div", { class:"pcard hov", style:{ width:"440px", minHeight:"64px", padding:"10px 16px", fontSize:"24px", lineHeight:"1.15", zIndex:"2" } }, x.p[1]);
        const home = { x:340 + (k % 3)*470, y:370 + Math.floor(k/3)*130 };
        const dr = draggable(c, host, home, (cx, cy) => {
          if (cy > 340) return false;
          const key2 = cx < 580 ? "I" : cx < 1180 ? "P" : "O";
          const b = BOX[key2]; const slot = cnt[key2]++; dr.move(b.x + 60, 70 + slot*84);
          const ok = key2 === x.p[0]; c.style.boxShadow = `0 0 0 5px ${ok ? "#7FA55A" : "#D5684F"}, var(--sh-2)`; BM.sfx(ok ? "ok" : "no"); return true;
        });
        c.dr = dr; c.ans = x.p[0]; host.appendChild(c); cards.push(c);
      });
      sel.forEach(b => b.classList.toggle("on", b.dataset.k === key));
    }
    const sel = Object.keys(MACH).map(k => { const b = btn(MACH[k].n, () => load(k), "dark"); b.dataset.k = k; b.style.minHeight = "52px"; b.style.fontSize = "18px"; return b; });
    controls(host, [...sel, btn("Show answer", () => { const cnt = { I:0, P:0, O:0 }; cards.forEach(c => { const b = BOX[c.ans]; c.dr.move(b.x + 60, 70 + (cnt[c.ans]++)*84); c.style.boxShadow = "0 0 0 5px #7FA55A, var(--sh-2)"; }); }, "on")]);
    load("pivot");
    return {};
  };

  /* =======================================================
     40. LAYERED LANDSCAPE — foreground, middle ground, background (Fri W1)
     ======================================================= */
  IX.layered = function(host){
    const W = 1100, H = 660;
    const wrap = h("div", { style:{ position:"absolute", left:"0", top:"0", width:W + "px", height:H + "px", perspective:"1600px" } });
    const mk = (z) => { const v = svg(W, H, { style:`position:absolute;inset:0;width:100%;height:100%;transition:transform 1.4s var(--ease-paper), opacity .8s;transform-style:preserve-3d` }); v.dataset.z = z; return v; };
    const sky = mk(0); sky.appendChild(s("rect", { width:W, height:H, rx:12, fill:"#cfe1e8" })); sky.appendChild(A.arch(W, 220, .7));
    const bg = mk(1); bg.appendChild(A.range(W, H, 330, 230, 3, "#9fb6c2", { snow:"#f4f8f8", peaks:5 }));
    const mg = mk(2); mg.appendChild(A.range(W, H, 470, 150, 8, "#6f8a6a", { peaks:4 })); 
    const fg = mk(3);
    fg.appendChild(s("path", { d:`M0 540 Q ${W*.3} 500 ${W*.6} 530 T ${W} 520 V ${H} H 0Z`, fill:"#8a7a3e" }));
    fg.appendChild(s("rect", { x:0, y:560, width:W, height:100, fill:"url(#p-stones)", opacity:.8 }));
    for (let i=0;i<7;i++) fg.appendChild(A.tussock(60 + i*160, 600 + (i%2)*20, 90, "#C9A04A", i + 2));
    for (let i=0;i<8;i++){ fg.appendChild(s("rect", { x:500 + i*70, y:470 + i*6, width:8, height:80, fill:"#3a2f22" })); }
    fg.appendChild(s("path", { d:"M500 490 L1060 540 M500 515 L1060 565", stroke:"#3a2f22", "stroke-width":3 }));
    const layers = [sky, bg, mg, fg];
    layers.forEach(l => wrap.appendChild(l));
    host.appendChild(wrap);
    const labs = [["BACKGROUND", "The Alps: pale, blue, little detail", "#2C6F92", 200], ["MIDDLE GROUND", "The foothills: medium tone", "#4E6B2F", 420], ["FOREGROUND", "Paddock, fence, river stones: darkest, most detail", "#8A5E14", 600]];
    const tags = labs.map(([t, d, c, y]) => { const e = h("div", { class:"pcard", style:{ position:"absolute", left:(W + 30) + "px", top:(y - 80) + "px", width:"600px", padding:"12px 18px", opacity:"0", transform:"translateX(30px)", transition:"opacity .6s, transform .6s var(--ease-lift)", boxShadow:`inset 8px 0 0 ${c}, var(--sh-2)` } }, h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"30px", letterSpacing:".12em", color:c } }, t), h("div", { style:{ fontSize:"24px" } }, d)); host.appendChild(e); return e; });
    let toneOff = false;
    function go(i){
      layers.forEach((l, j) => { l.style.transform = i >= 1 ? `translate3d(${(j - 1.5)*30}px, ${(j - 1.5)*-34}px, ${(j - 2)*90}px) rotateX(10deg)` : "none"; });
      tags.forEach((t, j) => { const on = i >= 1; t.style.opacity = on ? "1" : "0"; t.style.transform = on ? "none" : "translateX(30px)"; });
      if (i >= 2){ toneOff = false; tone(); }
      BM.sfx("paper");
    }
    function tone(){ bg.style.filter = toneOff ? "brightness(.55) saturate(1.3)" : ""; mg.style.filter = toneOff ? "brightness(.8)" : ""; }
    controls(host, [btn("Separate the layers", () => go(1), "on"), btn("Put them back", () => go(0), "dark"), btn("Tone test", () => { toneOff = !toneOff; tone(); }, "dark")]);
    go(0);
    return { steps:1, step:go };
  };

  /* =======================================================
     40b. SKYLINE — draw the ridge slowly (Fri W1)
     ======================================================= */
  IX.skyline = function(host){
    const W = 1100, H = 640;
    const v = svg(W, H, { style:"position:absolute;left:0;top:0;width:1100px;height:640px;border-radius:12px" });
    v.appendChild(s("rect", { width:W, height:H, rx:12, fill:"#d8e6ec" }));
    const pts = A.ridgePts(W, 360, 250, 17, { peaks:5 });
    const d = "M" + pts.map(p => p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" L");
    const far = s("g"); far.appendChild(A.range(W, H, 360, 250, 17, "#9fb6c2", { snow:"#f4f8f8", peaks:5 })); v.appendChild(far);
    v.appendChild(A.range(W, H, 520, 120, 23, "#7f9a86", { peaks:4 }));
    const paper = s("rect", { width:W, height:H, rx:12, fill:"#f6f1e4", opacity:0, style:"transition:opacity .8s" }); v.appendChild(paper);
    const tops = pts.filter((p, i) => i > 2 && i < pts.length - 3 && p[1] < pts[i-1][1] && p[1] < pts[i+1][1]).sort((a, b) => a[1] - b[1]).slice(0, 4);
    const dips = pts.filter((p, i) => i > 2 && i < pts.length - 3 && p[1] > pts[i-1][1] && p[1] > pts[i+1][1]).sort((a, b) => b[1] - a[1]).slice(0, 4);
    const mk = (arr, c) => { const g = s("g", { opacity:0, style:"transition:opacity .6s" }); arr.forEach(p => { g.appendChild(s("circle", { cx:p[0], cy:p[1], r:12, fill:"none", stroke:c, "stroke-width":5 })); }); v.appendChild(g); return g; };
    const gTops = mk(tops, "#B4412F"), gDips = mk(dips, "#2C6F92");
    const line = s("path", { d, fill:"none", stroke:"#2b2f33", "stroke-width":5, "stroke-linecap":"round", "stroke-linejoin":"round" });
    v.appendChild(line);
    const L = 4000; line.style.strokeDasharray = L; line.style.strokeDashoffset = L;
    const shade = s("g", { opacity:0, style:"transition:opacity 1s" });
    shade.appendChild(s("path", { d: d + ` L${W+60} ${H} L-60 ${H}Z`, fill:"#b9c4c8", opacity:.55 }));
    shade.appendChild(s("path", { d:`M0 560 Q 300 520 600 550 T ${W} 540 V ${H} H 0Z`, fill:"#4b5357", opacity:.8 }));
    v.appendChild(shade);
    host.appendChild(v);
    const info = panel({ left:"1130px", right:"0", top:"0", minHeight:"280px" }, [h("h4"), h("p")]);
    host.appendChild(info);
    const strip = svg(600, 120, { style:"position:absolute;left:1130px;bottom:0;width:600px;height:120px" });
    ["#f3f1ea","#cfd2d0","#9ea4a6","#6b7377","#2b2f33"].forEach((c, i) => { strip.appendChild(s("rect", { x:i*120, y:0, width:118, height:90, fill:c, stroke:"#8a8f90" })); strip.appendChild(s("text", { x:i*120 + 59, y:112, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":800, "font-size":18, fill:"#F3ECDD" }, ["lightest","","","","darkest"][i])); });
    host.appendChild(strip);
    const TXT = [
      ["Look first", "Look at the real skyline for 10 seconds before you draw anything. **Look 80%, draw 20%.**"],
      ["Highest points", "Find the **highest peaks** first. Mark them lightly with tiny dots."],
      ["The dips", "Now find the **lowest dips** (saddles) between the peaks. Mark them too."],
      ["Join them slowly", "Join the dots with one slow, light line, checking the real ridge as you go. Never a zigzag from memory!"],
      ["Tone for distance", "Far mountains are **paler and bluer**; near land is **darker** with more detail. Use the tonal strip."]
    ];
    function go(i){
      paper.setAttribute("opacity", i >= 3 ? .92 : 0);
      gTops.setAttribute("opacity", i >= 1 ? 1 : 0); gDips.setAttribute("opacity", i >= 2 ? 1 : 0);
      line.style.transition = i >= 3 && BM.motionOK() ? "stroke-dashoffset 7s ease-in-out" : "none";
      line.style.strokeDashoffset = i >= 3 ? 0 : L;
      shade.setAttribute("opacity", i >= 4 ? 1 : 0);
      info.querySelector("h4").textContent = TXT[i][0]; setMD(info.querySelector("p"), TXT[i][1]);
    }
    go(0);
    return { steps:4, step:go };
  };
})(window.BM);
