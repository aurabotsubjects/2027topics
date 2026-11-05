/* ==========================================================
   WEEK 2 INTERACTIVES — Children of Maize
   ========================================================== */
(function(FC){
  "use strict";
  const h = FC.h, s = FC.s, svg = FC.svg, A = FC.art, M = FC.map, IX = FC.IX;
  const btn = (label, onclick, cls) => h("button", { class:"ixbtn " + (cls||""), onclick:(e) => { e.stopPropagation(); FC.sfx("tok"); onclick(e); } }, label);
  const panel = (w) => h("div", { class:"pcard", style:{ position:"absolute", right:"0", top:"0", width:(w||560)+"px", height:"690px", display:"flex", flexDirection:"column", gap:"14px" } });
  const ptitle = t => h("div", { style:{ fontFamily:"var(--f-display)", fontWeight:"900", fontSize:"46px", lineHeight:"1" } }, t);
  const pmsg = t => { const d = h("div", { style:{ fontSize:"28px", lineHeight:"1.3" } }); d.innerHTML = FC.md(t || ""); return d; };
  const big = (t, c) => h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"72px", lineHeight:".9", color:c || "#B3262E" } }, t);
  const darkB = b => { b.style.color = "var(--cacao-ink)"; b.style.boxShadow = "inset 0 0 0 2px rgba(90,56,37,.35)"; return b; };

  /* =======================================================
     MON · Teosinte → maize
     ======================================================= */
  IX.maize = function(host){
    const v = svg(1100, 690, { style:"position:absolute;left:0;top:0;width:1100px;height:690px" });
    v.appendChild(s("rect", { width:1100, height:690, rx:16, fill:"rgba(0,0,0,.3)" }));
    // ruler
    const ruler = s("g");
    for (let cm=0; cm<=20; cm++){ const y = 600 - cm*25; ruler.appendChild(s("line", { x1:150, x2: cm%5 ? 170 : 185, y1:y, y2:y, stroke:"#E9DCC0", "stroke-width": cm%5 ? 2 : 4 })); if (cm%5===0) ruler.appendChild(s("text", { x:140, y:y+10, "text-anchor":"end", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":28, fill:"#E9DCC0" }, cm + " cm")); }
    ruler.appendChild(s("line", { x1:150, x2:150, y1:100, y2:600, stroke:"#E9DCC0", "stroke-width":4 }));
    v.appendChild(ruler);
    const ear = s("g", { filter:"url(#fx-paper)" }); v.appendChild(ear);
    host.appendChild(v);
    const slider = h("input", { type:"range", min:0, max:100, value:0, style:{ position:"absolute", left:"220px", width:"760px", bottom:"40px", accentColor:"#D9A23A", height:"40px" } });
    host.appendChild(slider);
    host.appendChild(h("div", { style:{ position:"absolute", left:"220px", width:"760px", bottom:"0px", display:"flex", justifyContent:"space-between", fontFamily:"var(--f-label)", fontWeight:"900", letterSpacing:".08em", fontSize:"22px", color:"#E9DCC0" } }, h("span", null, "≈ 9,000 YEARS AGO"), h("span", null, "OLMEC TIMES"), h("span", null, "TODAY")));
    const P = panel(560); host.appendChild(P);
    const nm = big("Teosinte", "#5a3825"), msg = pmsg("");
    P.append(ptitle("From grass to maize"), nm, msg, h("div", { style:{ marginTop:"auto", fontSize:"22px", opacity:".75" } }, "Drag the slider: thousands of years of farmers choosing the best seeds."));
    function draw(t){
      FC.clear(ear);
      const L = 75 + 395*t, W = 26 + 74*t, cx = 560, base = 600;
      // husk leaves
      if (t > .15){ ear.appendChild(A.leaf(cx, base, L*1.05, -100, W*.6*t + 6, "#3FA37C", { rib:false })); ear.appendChild(A.leaf(cx, base, L*1.0, -80, W*.6*t + 6, "#1F7A5A", { rib:false })); }
      // cob body
      ear.appendChild(s("path", { d:`M${cx-W/2} ${base} C ${cx-W/2} ${base-L*.7}, ${cx-W*.25} ${base-L}, ${cx} ${base-L} C ${cx+W*.25} ${base-L}, ${cx+W/2} ${base-L*.7}, ${cx+W/2} ${base} Z`, fill: t < .3 ? "#7a5a3c" : "#E0B23A" }));
      if (t < .3){
        // teosinte: single zig-zag row of hard-cased kernels
        const n = 7 + Math.round(t*10);
        for (let i=0;i<n;i++){ const y = base - 8 - i*(L-10)/n; ear.appendChild(s("path", { d:`M${cx + (i%2? -1:1)*W*.18 - 8} ${y} l8 -${(L-10)/n} l8 ${(L-10)/n}z`, fill:"#4a3523", stroke:"#2a1d12", "stroke-width":1.5 })); }
      } else {
        const cols = 3 + Math.round(t*5), rows = Math.round(8 + t*34), kw = W/cols*.8;
        for (let r=0;r<rows;r++){ const y = base - 10 - r*(L-24)/rows, taper = Math.min(1, Math.sin(Math.PI*(r+1)/(rows+1))*1.35);
          for (let c=0;c<cols;c++){ const x = cx - (cols-1)/2*kw*taper + c*kw*taper; ear.appendChild(s("ellipse", { cx:x, cy:y, rx:kw*taper*.45, ry:(L/rows)*.42, fill: (r+c)%7 ? "#F0C25E" : "#D98A2A" })); } }
      }
      const cm = (L/25).toFixed(0);
      if (t < .3){ nm.textContent = "Teosinte"; nm.style.color = "#5a3825"; msg.innerHTML = FC.md(`A wild grass from southern Mexico. Its ear is only about **${cm} cm** long, with a handful of rock-hard seeds. You could not make tortillas from this!`); }
      else if (t < .75){ nm.textContent = "Early maize"; nm.style.color = "#B9772D"; msg.innerHTML = FC.md(`Farmers kept planting the seeds from the **biggest, softest** ears. Generation after generation the ears grew — about **${cm} cm** by Olmec times.`); }
      else { nm.textContent = "Maize today"; nm.style.color = "#1F7A5A"; msg.innerHTML = FC.md(`About **${cm} cm** long, hundreds of soft kernels. Maize (corn) grew from Mesoamerica to feed the **whole world** — one of the greatest inventions of farmers ever.`); }
    }
    slider.addEventListener("input", e => { e.stopPropagation(); draw(slider.value/100); });
    slider.addEventListener("pointerdown", e => e.stopPropagation());
    draw(0);
    return {};
  };

  /* =======================================================
     MON · Surplus simulator
     ======================================================= */
  IX.surplus = function(host){
    const POP = 12, JOBS = [["🏺","Potter"],["🧵","Weaver"],["🪨","Builder"],["🎒","Trader"],["📜","Scribe"],["🔭","Priest-astronomer"],["👑","Ruler (ajaw)"]];
    const UP = [{ k:"milpa", t:"Plant a milpa", d:"maize + beans + squash together", y:.7 },{ k:"raised", t:"Raised fields & terraces", d:"more land, better water", y:.8 },{ k:"store", t:"Store the harvest", d:"granaries keep food for dry times", y:.6 }];
    const on = {};
    const v = svg(1100, 690, { style:"position:absolute;left:0;top:0;width:1100px;height:690px" });
    v.appendChild(s("rect", { width:1100, height:690, rx:16, fill:"rgba(0,0,0,.3)" }));
    const scene = s("g"); v.appendChild(scene);
    host.appendChild(v);
    const P = panel(560); host.appendChild(P);
    const stat = h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"30px", letterSpacing:".06em", lineHeight:"1.25" } });
    const msg = pmsg("");
    const grid = h("div", { style:{ marginTop:"auto", display:"grid", gap:"10px" } });
    P.append(ptitle("Food → free time → cities"), stat, msg, grid);
    UP.forEach(u => { const b = btn(`${u.t}`, () => { on[u.k] = !on[u.k]; b.classList.toggle("on", !!on[u.k]); draw(); }, ""); b.style.fontSize = "22px"; b.style.minHeight = "60px"; grid.appendChild(b); });
    function draw(){
      const yld = 1.2 + UP.reduce((a, u) => a + (on[u.k] ? u.y : 0), 0);
      const farmers = Math.min(POP, Math.ceil(POP / yld));
      const free = POP - farmers;
      stat.innerHTML = `Each farmer feeds <b style="color:#1F7A5A">${yld.toFixed(1)}</b> people<br>Farmers needed: <b style="color:#B9772D">${farmers}</b> of ${POP}<br>Free for other jobs: <b style="color:#2A8C9C">${free}</b>`;
      msg.innerHTML = FC.md(free === 0 ? "Everyone must farm just to eat. No time to build, write or trade." : free < 5 ? "A **surplus** (extra food)! Some people can now do **specialist** jobs." : "Big surplus → many specialists → a **city** with temples, writing and rulers.");
      FC.clear(scene);
      // fields
      for (let i=0;i<farmers;i++){ const x = 60 + (i%6)*80, y = 520 + Math.floor(i/6)*70; scene.appendChild(s("rect", { x, y, width:70, height:50, rx:6, fill:"#5a3825" })); for (let k=0;k<4;k++) scene.appendChild(A.leaf(x+10+k*16, y+46, 34, -90 + (k-1.5)*10, 7, "#3FA37C", { rib:false })); scene.appendChild(s("text", { x:x+35, y:y-6, "text-anchor":"middle", "font-size":26 }, "🧑‍🌾")); }
      // specialists
      JOBS.slice(0, free).forEach(([ic, nm], i) => {
        const x = 560 + (i%3)*170, y = 470 + Math.floor(i/3)*85;
        const g = s("g", { transform:`translate(${x} ${y})` });
        g.appendChild(s("rect", { x:-75, y:-34, width:150, height:68, rx:12, fill:"#E9DCC0", filter:"url(#fx-paper)" }));
        g.appendChild(s("text", { x:-48, y:12, "text-anchor":"middle", "font-size":34 }, ic));
        g.appendChild(s("text", { x:10, y:8, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size": nm.length > 9 ? 16 : 20, fill:"#3b2418" }, nm.toUpperCase()));
        scene.appendChild(g);
        g.animate([{ opacity:0, transform:`translate(${x}px, ${y+20}px)` }, { opacity:1, transform:`translate(${x}px, ${y}px)` }], { duration:500, fill:"forwards" });
      });
      // settlement grows (temple first so houses sit in front)
      if (free >= 5) scene.appendChild(A.pyramid(860, 330, 300, 280, 6, "#9a8f7f", "#5e554b"));
      else if (free >= 3) scene.appendChild(A.pyramid(860, 330, 170, 140, 3, "#9a8f7f", "#5e554b", { comb:false }));
      const houses = 2 + free*2;
      for (let i=0;i<houses;i++){ const x = 60 + (i*61)%620, y = 360 + (i%3)*34; scene.appendChild(s("path", { d:`M${x} ${y} h70 v-40 l-35 -34 l-35 34z`, fill: i%2 ? "#C9A97A" : "#E9DCC0", filter:"url(#fx-paper)" })); scene.appendChild(s("path", { d:`M${x-6} ${y-38} l41 -40 l41 40`, stroke:"#8a6a3c", "stroke-width":8, fill:"none" })); }
      scene.appendChild(s("text", { x:40, y:60, "font-family":"Big Shoulders Display", "font-weight":900, "font-size":34, fill:"#E9DCC0", "letter-spacing":3 }, free >= 5 ? "A CITY!" : free >= 2 ? "A TOWN" : "A FARMING VILLAGE"));
    }
    draw();
    return {};
  };

  /* =======================================================
     TUE · Plate slide (subduction)
     ======================================================= */
  IX.plates = function(host){
    const v = svg(1100, 690, { style:"position:absolute;left:0;top:0;width:1100px;height:690px;border-radius:16px" });
    v.innerHTML = `<defs><linearGradient id="pl-mantle" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#C46A3A"/><stop offset="1" stop-color="#7a2a16"/></linearGradient><clipPath id="pl-clip"><rect width="1100" height="690" rx="16"/></clipPath></defs>`;
    const g = s("g", { "clip-path":"url(#pl-clip)" }); v.appendChild(g);
    g.appendChild(s("rect", { width:1100, height:690, fill:"#1b2a30" }));
    g.appendChild(s("rect", { y:330, width:1100, height:360, fill:"url(#pl-mantle)" }));
    // ocean water
    g.appendChild(s("path", { d:"M0 220 H600 L560 300 H0Z", fill:"#2E9FB0", opacity:.8 }));
    // oceanic plate (moves)
    const oc = s("g", { style:"transition:transform 1.6s cubic-bezier(.4,0,.2,1)" });
    oc.appendChild(s("path", { d:"M-400 300 H560 Q640 320 760 460 L720 500 Q620 380 540 360 H-400Z", fill:"#2a3a40", stroke:"#14110F", "stroke-width":3 }));
    for (let i=0;i<14;i++) oc.appendChild(s("path", { d:`M${-380 + i*70} 312 l30 0 l-6 10 l6 10 l-30 0`, fill:"none", stroke:"#5CC3D2", "stroke-width":3, opacity:.6 }));
    g.appendChild(oc);
    // continental plate
    g.appendChild(s("path", { d:"M560 300 Q640 290 1100 260 V420 H800 Q700 400 620 330Z", fill:"#8a6a52", stroke:"#14110F", "stroke-width":3, filter:"url(#fx-paper)" }));
    const mtn = s("g", { style:"transform-origin:850px 270px; transform-box:view-box; transition:transform 1.6s cubic-bezier(.3,.7,.2,1); transform:scaleY(.25)" });
    mtn.appendChild(s("path", { d:"M640 290 L720 170 L770 230 L860 90 L930 210 L990 140 L1100 270Z", fill:"#C9A97A", filter:"url(#fx-paper)" }));
    mtn.appendChild(s("path", { d:"M840 120 L860 90 L880 120Z M975 160 L990 140 L1004 162Z", fill:"#F4EBD8" }));
    g.appendChild(mtn);
    const magma = s("ellipse", { cx:800, cy:470, rx:30, ry:40, fill:"#F0C25E", opacity:0, filter:"url(#fx-glow)", style:"transition:transform 1.8s, opacity .8s; transform-box:view-box" });
    g.appendChild(magma);
    const plume = s("g", { opacity:0, style:"transition:opacity 1s" });
    [[900,70,40],[930,40,50],[965,20,60]].forEach(([x,y,r]) => plume.appendChild(s("circle", { cx:x, cy:y, r, fill:"#6b6256", opacity:.8 })));
    g.appendChild(plume);
    const quake = s("g", { opacity:0 });
    quake.appendChild(s("path", { d:"M640 360 l14 -30 l10 26 l26 -16 l-10 28 l28 10 l-30 8 l8 30 l-24 -18 l-16 26 l-4 -30 l-30 4 l22 -20z", fill:"#F0C25E", stroke:"#B3262E", "stroke-width":4 }));
    [60,100,140].forEach(r => quake.appendChild(s("circle", { cx:660, cy:360, r, fill:"none", stroke:"#F0C25E", "stroke-width":3, opacity:.5 })));
    g.appendChild(quake);
    const wave = s("path", { d:"M0 222 Q60 170 120 222Z", fill:"#5CC3D2", opacity:0, style:"transform-box:view-box; transform-origin:60px 222px" });
    g.appendChild(wave);
    const lab = (x, y, t, c) => g.appendChild(s("text", { x, y, "font-family":"Big Shoulders Display", "font-weight":900, "font-size":28, fill:c || "#F4EBD8", "letter-spacing":2 }, t));
    lab(40, 200, "PACIFIC OCEAN"); lab(60, 290, "NAZCA PLATE (ocean)", "#5CC3D2"); lab(700, 360, "SOUTH AMERICAN PLATE", "#F4EBD8"); lab(40, 640, "MANTLE (hot, slowly moving rock)", "#F4EBD8");
    host.appendChild(v);
    const P = panel(560); host.appendChild(P);
    const step = big("0", "#2E9FB0"), msg = pmsg("");
    const ctr = h("div", { style:{ marginTop:"auto", display:"flex", gap:"12px" } });
    P.append(ptitle("The Ring of Fire"), step, msg, ctr);
    const ST = [
      "Earth's outer shell is cracked into giant **plates** that move a few centimetres a year — about as fast as your fingernails grow.",
      "The heavy **ocean plate** slides **under** the lighter continental plate. This is called **subduction**.",
      "Squashed and crumpled, the land is pushed up into mountains — the **Andes**, the longest mountain range on land.",
      "The diving plate melts deep down. Hot **magma** rises and erupts out of **volcanoes**.",
      "Sometimes the plates get stuck… then suddenly slip: an **earthquake**! Under the sea, it can push up a **tsunami**."
    ];
    let k = 0;
    function go(n){
      k = FC.clamp(n, 0, ST.length-1); step.textContent = `${k+1} / ${ST.length}`; msg.innerHTML = FC.md(ST[k]);
      oc.style.transform = `translateX(${k*40}px)`;
      mtn.style.transform = `scaleY(${k >= 2 ? 1 : k === 1 ? .45 : .25})`;
      magma.style.opacity = k >= 3 ? .95 : 0; magma.style.transform = k >= 3 ? "translate(110px,-330px) scale(.6)" : "none";
      plume.setAttribute("opacity", k >= 3 ? 1 : 0);
      quake.setAttribute("opacity", k >= 4 ? 1 : 0);
      if (k >= 4){ v.animate([{ transform:"translate(0,0)" },{ transform:"translate(-10px,4px)" },{ transform:"translate(9px,-5px)" },{ transform:"translate(-6px,3px)" },{ transform:"translate(0,0)" }], { duration:600, iterations:2 }); FC.sfx("thunder");
        wave.setAttribute("opacity", 1); wave.animate([{ transform:"translateX(560px) scaleY(.4)" },{ transform:"translateX(0) scaleY(1.6)" }], { duration:2000, fill:"forwards" }); }
      else wave.setAttribute("opacity", 0);
    }
    ctr.append(darkB(btn("◂ Back", () => go(k-1), "dark")), btn("Push the plates ▸", () => go(k+1), "on"));
    go(0);
    return {};
  };

  /* =======================================================
     TUE · 1960 tsunami across the Pacific
     ======================================================= */
  function dest(ll, brg, dkm){
    const R = 6371, r = Math.PI/180, d = dkm/R, la1 = ll[1]*r, lo1 = ll[0]*r, b = brg*r;
    const la2 = Math.asin(Math.sin(la1)*Math.cos(d) + Math.cos(la1)*Math.sin(d)*Math.cos(b));
    const lo2 = lo1 + Math.atan2(Math.sin(b)*Math.sin(d)*Math.cos(la1), Math.cos(d) - Math.sin(la1)*Math.sin(la2));
    return [((lo2/r + 540) % 360) - 180, la2/r];
  }
  function hav(a, b){ const R = 6371, r = Math.PI/180; const x = Math.sin((b[1]-a[1])*r/2)**2 + Math.cos(a[1]*r)*Math.cos(b[1]*r)*Math.sin((b[0]-a[0])*r/2)**2; return 2*R*Math.asin(Math.sqrt(x)); }
  IX.tsunami = function(host){
    const map = M.build({ view:[300, 250, 2000, 1150] });
    map.setAttribute("style", "position:absolute;left:0;top:0;width:1180px;height:690px;border-radius:12px;box-shadow:var(--sh-3)");
    host.appendChild(map);
    const epi = [-73.2, -39.8];
    M.mark(map, epi, "Valdivia, Chile · M9.5", { color:"#B3262E", side:"left", scale:.9 });
    const PL = [ { n:"Hawaiʻi", ll:[-155.1,19.7], real:"about 15 hours" }, { n:"Aotearoa NZ", ll:[174.8,-41.3], real:"less than a day" }, { n:"Japan", ll:[141.0,38.3], real:"about 22 hours" } ];
    PL.forEach(p => { p.km = hav(epi, p.ll); p.mk = M.mark(map, p.ll, p.n, { color:"#1F7A5A", scale:.9 }); p.mk.setAttribute("opacity", .5); });
    const rings = s("g"); map.querySelector(".m-route").appendChild(rings);
    const P = panel(560); host.appendChild(P);
    const clock = big("0 h", "#2E9FB0"), msg = pmsg("**22 May 1960:** the biggest earthquake ever recorded shook southern Chile. Press PLAY to watch the tsunami cross the Pacific.");
    const log = h("div", { style:{ fontSize:"24px", lineHeight:"1.35" } });
    const ctr = h("div", { style:{ marginTop:"auto", display:"flex", gap:"12px" } });
    P.append(ptitle("The 1960 tsunami"), clock, msg, log, ctr);
    const SPEED = 720; let raf;
    function ringPath(dkm){
      let d = "", prev = null;
      for (let b=0; b<=360; b+=3){ const [x,y] = M.proj(...dest(epi, b, dkm)); if (!prev || Math.abs(x - prev[0]) > 600) d += `M${x.toFixed(0)} ${y.toFixed(0)}`; else d += `L${x.toFixed(0)} ${y.toFixed(0)}`; prev = [x,y]; }
      return d;
    }
    function frame(hrs){
      FC.clear(rings);
      [0, -1.2, -2.4].forEach((off, i) => { const t = hrs + off; if (t <= 0) return; rings.appendChild(s("path", { d:ringPath(t*SPEED), fill:"none", stroke:"#7FF3FF", "stroke-width":[5,3,2][i], opacity:[.95,.55,.3][i], "vector-effect":"non-scaling-stroke" })); });
      clock.textContent = `${hrs.toFixed(0)} h`;
      FC.clear(log);
      PL.forEach(p => { const arrived = hrs*SPEED >= p.km; p.mk.setAttribute("opacity", arrived ? 1 : .5); if (arrived) log.appendChild(h("div", null, "🌊 ", h("b", null, p.n), ` — reached after ${p.real}`)); });
    }
    ctr.append(btn("▶ Play", () => {
      cancelAnimationFrame(raf); const t0 = performance.now(), dur = FC.motionOK() ? 11000 : 1;
      (function st(t){ const k = Math.min(1, (t-t0)/dur); frame(k*24); if (k < 1) raf = requestAnimationFrame(st); else { msg.innerHTML = FC.md("Tsunami waves cross deep ocean at about the speed of a **jet plane**. Waves hit Hawaiʻi, Japan — and **Aotearoa**, where harbours surged. That's why NZ has tsunami warnings: **“Long or strong, get gone.”**"); FC.sfx("ok"); } })(t0);
    }, "on"), darkB(btn("Reset", () => { cancelAnimationFrame(raf); frame(0); }, "dark")));
    frame(0);
    return { destroy(){ cancelAnimationFrame(raf); } };
  };

  /* =======================================================
     WED · Electric eel — thousands of cells in series
     ======================================================= */
  IX.eel = function(host){
    const v = svg(1100, 690, { style:"position:absolute;left:0;top:0;width:1100px;height:690px" });
    v.appendChild(s("rect", { width:1100, height:690, rx:16, fill:"#0f2a2a" }));
    for (let i=0;i<8;i++) v.appendChild(A.leaf(40 + i*140, 690, 200, -90 + (i%3-1)*12, 26, "#123a32", { rib:false }));
    const eelPath = "M80 380 C 220 300, 360 460, 520 380 S 820 300, 980 380 Q1040 400 1060 380 Q1040 420 990 410 C 820 360, 680 470, 520 430 S 220 360, 90 420 Q 40 410 80 380Z";
    v.appendChild(s("path", { d:eelPath, fill:"#3b3a2a", stroke:"#14110F", "stroke-width":3, filter:"url(#fx-paper)" }));
    v.appendChild(s("circle", { cx:110, cy:392, r:8, fill:"#F4EBD8" }));
    const cells = [];
    for (let i=0;i<40;i++){ const t = i/40, x = 180 + t*800, y = 395 + Math.sin(t*Math.PI*2.4 + .4)*-38; const c = s("rect", { x:x-7, y:y-14, width:14, height:28, rx:3, fill:"#5a5640", stroke:"#14110F", "stroke-width":1.5 }); v.appendChild(c); cells.push(c); }
    const zap = s("g", { opacity:0 }); v.appendChild(zap);
    for (let i=0;i<8;i++) zap.appendChild(s("path", { d:`M${140 + i*120} 330 l-20 -40 l30 10 l-16 -50`, stroke:"#7FF3FF", "stroke-width":4, fill:"none", filter:"url(#fx-glow)" }));
    v.appendChild(s("text", { x:40, y:70, "font-family":"Big Shoulders Display", "font-weight":900, "font-size":32, fill:"#E9DCC0", "letter-spacing":3 }, "ELECTRIC EEL · AMAZON RIVER"));
    host.appendChild(v);
    const slider = h("input", { type:"range", min:0, max:5700, step:50, value:0, style:{ position:"absolute", left:"60px", width:"980px", bottom:"40px", accentColor:"#7FF3FF", height:"40px" } });
    slider.addEventListener("pointerdown", e => e.stopPropagation());
    host.appendChild(slider);
    host.appendChild(h("div", { style:{ position:"absolute", left:"60px", bottom:"0", fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"22px", letterSpacing:".1em", color:"#E9DCC0" } }, "DRAG: HOW MANY ELECTRIC CELLS FIRE TOGETHER?"));
    const P = panel(560); host.appendChild(P);
    const volts = big("0 V", "#1E7E95"), cnt = h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"26px", letterSpacing:".08em" } });
    const bar = h("div", { style:{ height:"28px", borderRadius:"14px", background:"rgba(90,56,37,.15)", overflow:"hidden" } }, h("div", { style:{ height:"100%", width:"0%", background:"linear-gradient(90deg,#2E9FB0,#7FF3FF)" } }));
    const cmp = pmsg("");
    P.append(ptitle("Living batteries"), volts, cnt, bar, cmp, h("div", { style:{ marginTop:"auto", fontSize:"22px", lineHeight:"1.3" } }, h("img", { src:"assets/img/art-electric-eel.webp", alt:"", onerror:"this.remove()", style:{ float:"left", width:"130px", height:"130px", objectFit:"cover", borderRadius:"10px", margin:"0 14px 4px 0", boxShadow:"0 4px 12px rgba(0,0,0,.3)" } }), "🟢 Electric eels are really a kind of ", h("b", null, "knifefish"), ", not true eels. In 2019 scientists described a species that can zap up to about ", h("b", null, "860 volts"), "."));
    function draw(){
      const n = +slider.value, V = Math.round(n*0.15);
      volts.textContent = `${V} V`; cnt.textContent = `${n.toLocaleString("en-NZ")} cells × about 0.15 V each`;
      bar.firstChild.style.width = (V/860*100) + "%";
      cells.forEach((c, i) => c.setAttribute("fill", i < n/5700*40 ? "#7FF3FF" : "#5a5640"));
      zap.setAttribute("opacity", V > 500 ? 1 : V > 150 ? .5 : 0);
      cmp.innerHTML = FC.md(V < 2 ? "Each cell (an **electrocyte**) makes only a tiny voltage — less than a AA battery (1.5 V)." : V < 230 ? `Stacked in a row (**in series**), the voltages **add up**: like ${Math.round(V/1.5)} AA batteries in a row!` : `**${V} V** — more than a wall socket (230 V in NZ). Enough to stun a fish… or a horse. ⚠️ That's why we NEVER play with sockets.`);
    }
    slider.addEventListener("input", draw);
    draw();
    return {};
  };

  /* =======================================================
     WED · Potato battery builder
     ======================================================= */
  IX.potato = function(host){
    const v = svg(1100, 690, { style:"position:absolute;left:0;top:0;width:1100px;height:690px" });
    v.appendChild(s("rect", { width:1100, height:690, rx:16, fill:"rgba(0,0,0,.3)" }));
    const rig = s("g"); v.appendChild(rig);
    host.appendChild(v);
    const P = panel(560); host.appendChild(P);
    const volts = big("0.0 V", "#B9772D"), msg = pmsg("");
    const ctr = h("div", { style:{ marginTop:"auto", display:"flex", gap:"12px" } });
    P.append(ptitle("Potato power"), volts, msg, h("div", { style:{ fontSize:"22px", lineHeight:"1.3", padding:"12px 16px", background:"rgba(31,122,90,.1)", borderRadius:"10px", overflow:"hidden" } }, h("img", { src:"assets/img/art-andes-potatoes.webp", alt:"", onerror:"this.remove()", style:{ float:"left", width:"130px", height:"130px", objectFit:"cover", borderRadius:"10px", margin:"0 14px 4px 0", boxShadow:"0 4px 12px rgba(0,0,0,.3)" } }), "🥔 The potato was first farmed in the ", h("b", null, "Andes of South America"), " about 8,000 years ago. Zinc + copper + potato juice = a chemical battery!"), ctr);
    let n = 1; const PER = 0.9, NEED = 1.8;
    function potato(x, y){
      const g = s("g", { transform:`translate(${x} ${y})`, filter:"url(#fx-paper)" });
      g.appendChild(s("path", { d:"M-80 10 C -90 -50, -20 -70, 20 -60 C 80 -55, 95 -10, 85 25 C 75 70, -10 75, -50 60 C -75 50, -78 30, -80 10Z", fill:"#B9884F" }));
      [[-40,-20],[10,-35],[40,10],[-20,30]].forEach(([a,b]) => g.appendChild(s("circle", { cx:a, cy:b, r:4, fill:"#6b4a26" })));
      g.appendChild(s("rect", { x:-48, y:-110, width:10, height:90, fill:"#9da3a8" })); // zinc nail
      g.appendChild(s("path", { d:"M-53 -112 h20 l-5 -10 h-10z", fill:"#9da3a8" }));
      g.appendChild(s("rect", { x:28, y:-105, width:34, height:70, rx:4, fill:"#C46A3A" })); // copper
      g.appendChild(s("text", { x:-43, y:-130, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":22, fill:"#c0c4c8" }, "Zn −"));
      g.appendChild(s("text", { x:45, y:-120, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":22, fill:"#E08A55" }, "Cu +"));
      return g;
    }
    function draw(){
      FC.clear(rig);
      const V = n*PER, gap = Math.min(190, 900/n), x0 = 550 - (n-1)*gap/2;
      for (let i=0;i<n;i++){
        rig.appendChild(potato(x0 + i*gap, 480));
        if (i < n-1) rig.appendChild(s("path", { d:`M${x0+i*gap+45} 370 Q ${x0+i*gap+gap/2} 320 ${x0+(i+1)*gap-43} 365`, stroke:"#F0C25E", "stroke-width":6, fill:"none" }));
      }
      // LED
      const lit = V >= NEED, br = lit ? Math.min(1, .35 + (V-NEED)/2) : 0;
      const lx = 550, ly = 170;
      rig.appendChild(s("path", { d:`M${x0-43} 370 Q ${x0-80} 200 ${lx-20} ${ly+70}`, stroke:"#c0c4c8", "stroke-width":6, fill:"none" }));
      rig.appendChild(s("path", { d:`M${x0+(n-1)*gap+45} 370 Q ${x0+(n-1)*gap+90} 200 ${lx+20} ${ly+70}`, stroke:"#C46A3A", "stroke-width":6, fill:"none" }));
      if (lit) rig.appendChild(s("circle", { cx:lx, cy:ly, r:150, fill:"url(#g-lamp)", opacity:br }));
      rig.appendChild(s("path", { d:`M${lx-34} ${ly+60} V${ly} Q${lx-34} ${ly-46} ${lx} ${ly-46} Q${lx+34} ${ly-46} ${lx+34} ${ly} V${ly+60}Z`, fill: lit ? "#FF5A5F" : "#8a1d23" }));
      volts.textContent = `${V.toFixed(1)} V`; volts.style.color = lit ? "#1F7A5A" : "#B9772D";
      msg.innerHTML = FC.md(lit ? `**${n} potatoes in series = ${V.toFixed(1)} V.** That's enough for a red LED (it needs about ${NEED} V). It glows — dimly, because potatoes can only push a tiny current.` : `**${n} potato${n>1?"es":""} = ${V.toFixed(1)} V.** Each cell gives about **0.9 V**. A red LED needs about **${NEED} V**. Not enough yet… add another cell **in series**.`);
    }
    ctr.append(darkB(btn("− potato", () => { n = Math.max(1, n-1); draw(); }, "dark")), btn("+ potato", () => { n = Math.min(5, n+1); draw(); if (n*PER >= NEED) FC.sfx("ok"); }, "on"));
    draw();
    return {};
  };

  /* =======================================================
     THU · Paper circuit planner (copper tape on a card)
     ======================================================= */
  const GX = 9, GY = 6;
  function circuitBoard(opts){
    opts = opts || {};
    const W = opts.w || 1100, H = opts.h || 690, pad = opts.pad || 90;
    const cw = (W - pad*2)/(GX-1), chh = (H - pad*2)/(GY-1);
    const P = (i, j) => [pad + i*cw, pad + j*chh];
    const nodes = { batP:[1,1], batN:[1,4], ledP:[7,2], ledN:[7,3] };
    const v = svg(W, H, { style:`position:absolute;left:0;top:0;width:${W}px;height:${H}px;cursor:${opts.readonly ? "default" : "crosshair"}` });
    v.appendChild(s("rect", { x:10, y:10, width:W-20, height:H-20, rx:10, fill:"#efe3c6", filter:"url(#fx-paper)" }));
    v.appendChild(s("rect", { x:10, y:10, width:W-20, height:H-20, rx:10, fill:"url(#p-dots)", opacity:.5 }));
    const tape = s("g"), comp = s("g"), dots = s("g"); v.append(tape, comp, dots);
    for (let i=0;i<GX;i++) for (let j=0;j<GY;j++){ const [x,y] = P(i,j); dots.appendChild(s("circle", { cx:x, cy:y, r:opts.readonly ? 3 : 6, fill:"#C9A97A" })); }
    // battery (coin cell, folded corner)
    const [bx, by] = P(1, 2.5);
    comp.appendChild(s("circle", { cx:bx - cw*.55, cy:by, r:Math.min(cw, chh)*.9, fill:"#c7ccd0", stroke:"#8a8f94", "stroke-width":4 }));
    comp.appendChild(s("text", { x:bx - cw*.55, y:by + 10, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":Math.min(cw,chh)*.4, fill:"#5b6166" }, "3V"));
    const lab = (n, t, c) => { const [x,y] = P(...nodes[n]); comp.appendChild(s("text", { x:x + (n.startsWith("bat") ? -10 : -14), y: n === "ledN" ? y + (opts.readonly ? 30 : 40) : y - 14, "text-anchor":"end", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":opts.readonly ? 22 : 26, fill:c }, t)); comp.appendChild(s("circle", { cx:x, cy:y, r:opts.readonly ? 8 : 12, fill:c })); };
    lab("batP", "+", "#B3262E"); lab("batN", "−", "#1E7E95");
    const [lx, ly] = P(7, 2.5);
    const glow = s("circle", { cx:lx + cw*.6, cy:ly, r:chh*1.6, fill:"url(#g-lamp)", opacity:0 });
    comp.appendChild(glow);
    comp.appendChild(s("path", { d:`M${lx+cw*.2} ${ly-chh*.55} h${cw*.5} a${chh*.55} ${chh*.55} 0 0 1 0 ${chh*1.1} h-${cw*.5}z`, fill:"#B3262E", class:"ledbody" }));
    lab("ledP", "long +", "#B3262E"); lab("ledN", "short −", "#1E7E95");
    return { v, tape, P, nodes, cw, chh, glow };
  }
  function evaluate(edges, nodes){
    const par = {}; const f = k => (par[k] = par[k] && par[k] !== k ? f(par[k]) : k); const u = (a, b) => { par[f(a)] = f(b); };
    edges.forEach(e => { const [a, b] = e.split("|"); u(a, b); });
    const key = n => nodes[n].join(",");
    const A = f(key("batP")), B = f(key("batN")), C = f(key("ledP")), D = f(key("ledN"));
    if (A === B) return { s:"short", t:"⚠️ SHORT CIRCUIT! Tape joins + straight to − without going through the LED. The battery drains and can get warm." };
    if (C === D) return { s:"bypass", t:"The tape joins BOTH LED legs, so the current skips the LED. No light." };
    if (C === A && D === B) return { s:"ok", t:"💡 It works! A closed loop: + → long leg → LED → short leg → −." };
    if (C === B && D === A) return { s:"back", t:"The loop is closed, but the LED is BACKWARDS. The long leg must connect to +." };
    return { s:"open", t:"There's a GAP — the loop isn't closed. Follow the tape from + with your finger to find it." };
  }
  function drawTape(B, edges){
    FC.clear(B.tape);
    edges.forEach(e => { const [a, b] = e.split("|").map(p => p.split(",").map(Number)); const [x1,y1] = B.P(...a), [x2,y2] = B.P(...b); B.tape.appendChild(s("line", { x1, y1, x2, y2, stroke:"#C46A3A", "stroke-width":Math.min(B.cw, B.chh)*.32, "stroke-linecap":"round" })); B.tape.appendChild(s("line", { x1, y1, x2, y2, stroke:"#F0A070", "stroke-width":3, opacity:.6 })); });
  }
  const pathEdges = pts => pts.slice(1).map((p, i) => { const a = pts[i]; return [a.join(","), p.join(",")].sort().join("|"); });
  const EXAMPLE = [...pathEdges([[1,1],[2,1],[3,1],[4,1],[5,1],[6,1],[7,1],[7,2]]), ...pathEdges([[7,3],[7,4],[6,4],[5,4],[4,4],[3,4],[2,4],[1,4]])];
  IX.papercircuit = function(host){
    const B = circuitBoard({ w:1100, h:690 });
    host.appendChild(B.v);
    let edges = new Set();
    B.v.addEventListener("click", e => {
      e.stopPropagation();
      const [x, y] = FC.toLocal(B.v, e);
      let best = null, bd = 1e9;
      for (let i=0;i<GX;i++) for (let j=0;j<GY;j++){
        [[i+1,j],[i,j+1]].forEach(([i2,j2]) => { if (i2 >= GX || j2 >= GY) return; const [x1,y1] = B.P(i,j), [x2,y2] = B.P(i2,j2); const d = Math.hypot(x - (x1+x2)/2, y - (y1+y2)/2); if (d < bd){ bd = d; best = [[i,j].join(","), [i2,j2].join(",")].sort().join("|"); } });
      }
      if (best && bd < Math.min(B.cw, B.chh)*.5){ edges.has(best) ? edges.delete(best) : edges.add(best); drawTape(B, edges); FC.sfx("paper"); res.innerHTML = FC.md("Press **TEST** when the tape path is finished."); B.glow.setAttribute("opacity", 0); }
    });
    const P = panel(600); host.appendChild(P);
    const res = pmsg("Click **between two dots** to lay (or remove) a strip of copper tape. Connect **+ → long leg**, and **short leg → −**.");
    const ctr = h("div", { style:{ marginTop:"auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"12px" } });
    P.append(ptitle("Copper-tape planner"), res, h("div", { style:{ fontSize:"22px", lineHeight:"1.35", opacity:".85" } }, "Faults to try: leave a gap · join + straight to − · wire the LED backwards."), ctr);
    const setMsg = txt => { res.innerHTML = FC.md(txt); };
    ctr.append(darkB(btn("Clear", () => { edges = new Set(); drawTape(B, edges); B.glow.setAttribute("opacity", 0); setMsg("Cleared. Click between the dots to lay copper tape."); }, "dark")),
      darkB(btn("Example", () => { edges = new Set(EXAMPLE); drawTape(B, edges); setMsg("An example path. Press **TEST**."); }, "dark")));
    const testB = btn("⚡ Test the circuit", () => { const r = evaluate([...edges], B.nodes); setMsg(r.t); B.glow.setAttribute("opacity", r.s === "ok" ? 1 : 0); FC.sfx(r.s === "ok" ? "ok" : "no"); }, "on");
    testB.style.gridColumn = "1 / -1"; ctr.appendChild(testB);
    return {};
  };
  IX.fixit = function(host){
    const CASES = [
      { t:"Card A", edges:[...pathEdges([[1,1],[2,1],[3,1],[4,1]]), ...pathEdges([[5,1],[6,1],[7,1],[7,2]]), ...pathEdges([[7,3],[7,4],[6,4],[5,4],[4,4],[3,4],[2,4],[1,4]])] },
      { t:"Card B", edges:[...pathEdges([[1,1],[2,1],[3,1],[4,1],[5,1],[6,1],[7,1],[7,2]]), ...pathEdges([[7,3],[7,4],[6,4],[5,4],[4,4],[3,4],[2,4],[1,4]]), ...pathEdges([[3,1],[3,2],[3,3],[3,4]])] },
      { t:"Card C", edges:[...pathEdges([[1,1],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[8,1],[8,2],[8,3],[7,3]]), ...pathEdges([[7,2],[6,2],[5,2],[4,2],[3,2],[3,3],[3,4],[2,4],[1,4]])] }
    ];
    CASES.forEach((c, i) => {
      const card = h("div", { class:"pcard hov", style:{ position:"absolute", left:(i*600)+"px", top:"0", width:"560px", height:"690px", padding:"16px", cursor:"pointer", display:"flex", flexDirection:"column", gap:"10px" } });
      const wrap = h("div", { style:{ position:"relative", width:"528px", height:"360px" } });
      const B = circuitBoard({ w:528, h:360, pad:40, readonly:true }); wrap.appendChild(B.v); drawTape(B, new Set(c.edges));
      const r = evaluate(c.edges, B.nodes);
      const ans = h("div", { style:{ fontSize:"25px", lineHeight:"1.28", display:"none" } }, r.t);
      card.append(h("div", { style:{ fontFamily:"var(--f-display)", fontWeight:"900", fontSize:"42px" } }, c.t + " — why won't it light?"), wrap, ans, h("div", { class:"tap", style:{ marginTop:"auto", fontFamily:"var(--f-label)", fontWeight:"800", letterSpacing:".14em", textTransform:"uppercase", fontSize:"18px", color:"#B3262E" } }, "Discuss · then tap to reveal"));
      card.addEventListener("click", e => { e.stopPropagation(); ans.style.display = "block"; FC.sfx("paper"); });
      host.appendChild(card);
    });
    return {};
  };

  /* =======================================================
     FRI · Dye lab
     ======================================================= */
  IX.dyelab = function(host){
    const DYES = [
      { k:"indigo", n:"Indigo (añil plant)", c:[36,64,122] },
      { k:"cochineal", n:"Cochineal (insects)", c:[179,38,46] },
      { k:"yellow", n:"Marigold / turmeric", c:[230,175,40] },
      { k:"water", n:"Water (lighter)", c:[244,235,216] }
    ];
    const cnt = { indigo:0, cochineal:0, yellow:0, water:0 };
    const v = svg(1100, 690, { style:"position:absolute;left:0;top:0;width:1100px;height:690px" });
    v.appendChild(s("rect", { width:1100, height:690, rx:16, fill:"rgba(90,56,37,.08)" }));
    const pots = DYES.map((d, i) => {
      const x = 140 + i*170, y = 160;
      const g = s("g", { style:"cursor:pointer" });
      g.appendChild(s("ellipse", { cx:x, cy:y+40, rx:70, ry:22, fill:"#5a3825" }));
      g.appendChild(s("path", { d:`M${x-70} ${y+40} Q${x-70} ${y+120} ${x} ${y+120} Q${x+70} ${y+120} ${x+70} ${y+40}Z`, fill:"#b86a3e", filter:"url(#fx-paper)" }));
      g.appendChild(s("ellipse", { cx:x, cy:y+40, rx:60, ry:16, fill:`rgb(${d.c.join(",")})` }));
      g.appendChild(s("text", { x, y:y+160, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":20, fill:"#3b2418" }, d.n.toUpperCase()));
      g.addEventListener("click", e => { e.stopPropagation(); cnt[d.k]++; FC.sfx("tok"); draw(); drop(x, y+40, d.c); });
      v.appendChild(g); return g;
    });
    void pots;
    const bowlX = 850, bowlY = 380;
    v.appendChild(s("ellipse", { cx:bowlX, cy:bowlY, rx:180, ry:50, fill:"#3b2418" }));
    v.appendChild(s("path", { d:`M${bowlX-180} ${bowlY} Q${bowlX-170} ${bowlY+200} ${bowlX} ${bowlY+200} Q${bowlX+170} ${bowlY+200} ${bowlX+180} ${bowlY}Z`, fill:"#8a6a52", filter:"url(#fx-paper)" }));
    const liquid = s("ellipse", { cx:bowlX, cy:bowlY+4, rx:160, ry:40, fill:"#efe3c6" }); v.appendChild(liquid);
    const strips = s("g"); v.appendChild(strips);
    host.appendChild(v);
    function drop(x, y, c){ const d = s("circle", { cx:x, cy:y, r:12, fill:`rgb(${c.join(",")})` }); v.appendChild(d); d.animate([{ transform:"translate(0,0)" }, { transform:`translate(${bowlX-x}px, ${bowlY-y}px)` }], { duration:500, easing:"cubic-bezier(.5,0,.5,1)" }).finished.then(() => d.remove()); }
    function mix(){
      const tot = Object.values(cnt).reduce((a,b) => a+b, 0); if (!tot) return [239,227,198];
      const out = [0,0,0];
      for (let ch=0; ch<3; ch++){ let lg = 0; DYES.forEach(d => { if (cnt[d.k]) lg += cnt[d.k]/tot * Math.log(d.c[ch]/255); }); out[ch] = Math.round(Math.exp(lg)*255); }
      return out;
    }
    function nameOf(c){
      const [r,g,b] = c.map(x => x/255), mx = Math.max(r,g,b), mn = Math.min(r,g,b), l = (mx+mn)/2;
      if (mx - mn < .08) return l > .8 ? "pale cream" : l < .25 ? "near black" : "grey-brown";
      let hh; const d = mx - mn; if (mx === r) hh = ((g-b)/d) % 6; else if (mx === g) hh = (b-r)/d + 2; else hh = (r-g)/d + 4; hh *= 60; if (hh < 0) hh += 360;
      const base = hh < 15 || hh >= 330 ? "red" : hh < 45 ? "orange" : hh < 70 ? "yellow" : hh < 165 ? "green" : hh < 255 ? "blue" : "purple";
      return (l > .7 ? "light " : l < .3 ? "deep " : "") + (base === "orange" && l < .4 ? "brown" : base);
    }
    const P = panel(600); host.appendChild(P);
    const res = pmsg("");
    const ctr = h("div", { style:{ marginTop:"auto", display:"grid", gap:"12px" } });
    P.append(ptitle("Mixing bowl"), res, h("div", { style:{ fontSize:"22px", lineHeight:"1.35", opacity:".85" } }, "Tap a dye pot to add a drop. Always predict first! Dip a strip to save each colour."), ctr);
    function draw(){ const c = mix(); liquid.setAttribute("fill", `rgb(${c.join(",")})`); const parts = DYES.filter(d => cnt[d.k]).map(d => `${cnt[d.k]} × ${d.n.split(" ")[0].toLowerCase()}`).join(" + "); res.innerHTML = parts ? `${FC.esc(parts)}<br>→ <b style="font-size:40px">${nameOf(c)}</b>` : "The bowl is empty."; }
    let nStrip = 0;
    ctr.append(btn("Dip a paper strip", () => {
      const c = mix(), x = 60 + (nStrip % 9)*60; nStrip++;
      const r = s("rect", { x, y:470, width:46, height:180, rx:4, fill:`rgb(${c.join(",")})`, filter:"url(#fx-paper)" }); strips.appendChild(r);
      r.animate([{ transform:"translateY(-60px)", opacity:0 }, { transform:"none", opacity:1 }], { duration:500 }); FC.sfx("paper");
    }, "on"), darkB(btn("Empty bowl", () => { Object.keys(cnt).forEach(k => cnt[k] = 0); draw(); }, "dark")));
    draw();
    return {};
  };

  /* =======================================================
     FRI · The Maya Blue mystery
     ======================================================= */
  IX.mayablue = function(host){
    const v = svg(1100, 690, { style:"position:absolute;left:0;top:0;width:1100px;height:690px" });
    v.appendChild(s("rect", { width:1100, height:690, rx:16, fill:"rgba(90,56,37,.08)" }));
    const stage = s("g"); v.appendChild(stage);
    host.appendChild(v);
    const P = panel(560); host.appendChild(P);
    const num = big("1", "#2E9FB0"), msg = pmsg("");
    const ctr = h("div", { style:{ marginTop:"auto", display:"flex", gap:"12px", flexWrap:"wrap" } });
    P.append(ptitle("The Maya Blue mystery"), num, msg, ctr);
    const STEPS = [
      { t:"Maya painters made a brilliant blue that has survived **over 1,000 years** of tropical rain and sun on walls at places like **Bonampak** and **Chichén Itzá**. Ordinary plant dyes fade fast. How did they do it?" },
      { t:"**Ingredient 1:** leaves of the **indigo** plant (añil). Soaked and stirred, they make a blue dye — but on its own, indigo fades and washes away." },
      { t:"**Ingredient 2:** a special white clay from the Yucatán — **palygorskite**, called *sak lu'um* (‘white earth’) in Yucatec Maya. Its crystals are full of tiny tunnels." },
      { t:"**Heat it!** Warming the mix makes the indigo **lock inside** the clay's tiny tunnels. Some scientists think it was made over burning **copal** incense during ceremonies." },
      { t:"**The result: Maya Blue** — so tough that acid, rain and centuries can't wash it out. Scientists only worked out the secret in the last few decades!" }
    ];
    let k = 0, rained = false;
    function draw(){
      FC.clear(stage); num.textContent = `${k+1} / ${STEPS.length}`; msg.innerHTML = FC.md(STEPS[k].t);
      const pot = (x, col, lab) => { const g = s("g", { filter:"url(#fx-paper)" }); g.appendChild(s("path", { d:`M${x-80} 300 Q${x-80} 430 ${x} 430 Q${x+80} 430 ${x+80} 300Z`, fill:"#b86a3e" })); g.appendChild(s("ellipse", { cx:x, cy:300, rx:80, ry:22, fill:col })); g.appendChild(s("text", { x, y:480, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":26, fill:"#3b2418" }, lab)); stage.appendChild(g); };
      if (k === 0){
        stage.appendChild(s("rect", { x:120, y:120, width:760, height:420, rx:8, fill:"#e8d9b8", filter:"url(#fx-paper)" }));
        stage.appendChild(s("path", { d:"M200 480 l40 -200 q50 -60 100 0 l40 200z", fill:"#2E9FB0" })); stage.appendChild(s("circle", { cx:290, cy:250, r:40, fill:"#B3262E" }));
        stage.appendChild(s("path", { d:"M520 480 l40 -200 q50 -60 100 0 l40 200z", fill:"#2E9FB0" })); stage.appendChild(s("circle", { cx:610, cy:250, r:40, fill:"#D9A23A" }));
        stage.appendChild(s("rect", { x:140, y:140, width:720, height:40, fill:"#2E9FB0" }));
        stage.appendChild(s("text", { x:500, y:600, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":30, fill:"#3b2418", "letter-spacing":2 }, "A MURAL — STILL BLUE AFTER 1,000+ YEARS"));
      }
      if (k >= 1){ for (let i=0;i<5;i++) stage.appendChild(A.leaf(120 + i*30, 260, 110, -70 - i*8, 28, "#1F7A5A")); pot(200, "#24407a", "INDIGO"); }
      if (k >= 2){ const g = s("g", { filter:"url(#fx-paper)" }); g.appendChild(s("path", { d:"M380 430 Q420 300 500 290 Q590 300 620 430Z", fill:"#efe9dc" })); for (let i=0;i<12;i++) g.appendChild(s("circle", { cx:420 + (i%4)*45, cy:340 + Math.floor(i/4)*30, r:6, fill:"#c9bfa8" })); g.appendChild(s("text", { x:500, y:480, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":26, fill:"#3b2418" }, "PALYGORSKITE CLAY")); stage.appendChild(g); }
      if (k >= 3){ const g = s("g"); for (let i=0;i<5;i++) g.appendChild(s("path", { d:`M${700 + i*30} 560 q-20 -60 10 -110 q30 50 10 110z`, fill: i%2 ? "#F0C25E" : "#E08A55", filter:"url(#fx-glow)" })); for (let i=0;i<3;i++) g.appendChild(s("path", { d:`M${740 + i*30} 430 q-20 -40 0 -80 q20 -40 0 -80`, stroke:"#c9bfa8", "stroke-width":6, fill:"none", opacity:.7 })); stage.appendChild(g); }
      if (k >= 4){
        const strip = (x, lab, col, fades) => { const r = s("rect", { x, y:110, width:140, height:300, rx:6, fill:col, filter:"url(#fx-paper)" }); stage.appendChild(r); stage.appendChild(s("text", { x:x+70, y:445, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":24, fill:"#3b2418" }, lab)); if (rained && fades) r.setAttribute("fill", "#c9cfd6"); return r; };
        stage.appendChild(s("rect", { x:0, y:0, width:1100, height:690, fill:"#efe3c6", opacity:.92 }));
        strip(330, "INDIGO ONLY", "#24407a", true); strip(560, "MAYA BLUE", "#3FA7B5", false);
        if (rained){ for (let i=0;i<40;i++) stage.appendChild(s("line", { x1:300 + (i*37)%460, x2:290 + (i*37)%460, y1:60 + (i*53)%380, y2:90 + (i*53)%380, stroke:"#5CC3D2", "stroke-width":3, opacity:.6 })); }
      }
    }
    const rain = btn("🌧 Centuries of rain", () => { rained = true; draw(); FC.sfx("paper"); }, "");
    ctr.append(darkB(btn("◂ Back", () => { k = Math.max(0, k-1); rained = false; draw(); }, "dark")), btn("Next ▸", () => { k = Math.min(STEPS.length-1, k+1); draw(); FC.sfx("paper"); }, "on"), rain);
    draw();
    return {};
  };

  /* ---------- Folio II painting: the milpa ---------- */
  A.milpaFolio = function(){
    const v = svg(800, 1000);
    v.appendChild(s("rect", { width:800, height:1000, fill:"#efe3c6" }));
    v.appendChild(s("rect", { width:800, height:1000, filter:"url(#fx-grain)", fill:"#fff" }));
    v.appendChild(s("rect", { x:30, y:30, width:740, height:940, fill:"none", stroke:"#B3262E", "stroke-width":10 }));
    v.appendChild(s("rect", { x:50, y:50, width:700, height:900, fill:"none", stroke:"#B3262E", "stroke-width":3 }));
    const g = s("g", { filter:"url(#fx-rough)" });
    g.appendChild(s("path", { d:"M60 820 Q400 790 740 820 V930 H60Z", fill:"#5a3825" }));
    for (let i=0;i<5;i++){
      const x = 150 + i*125;
      g.appendChild(s("path", { d:`M${x} 830 V${420 + (i%2)*40}`, stroke:"#1F7A5A", "stroke-width":12 }));
      for (let k=0;k<4;k++){ g.appendChild(A.leaf(x, 760 - k*80, 120, -150 + (k%2)*120, 22, "#3FA37C", { rib:false })); }
      g.appendChild(s("ellipse", { cx:x+18, cy:560 + (i%2)*30, rx:16, ry:44, fill:"#F0C25E" }));
      g.appendChild(s("path", { d:`M${x} ${420 + (i%2)*40} l-20 -40 M${x} ${420 + (i%2)*40} l20 -44 M${x} ${420 + (i%2)*40} l0 -50`, stroke:"#D9A23A", "stroke-width":5 }));
      // beans twining
      g.appendChild(s("path", { d:`M${x-6} 820 q-24 -40 0 -80 q24 -40 0 -80 q-24 -40 0 -80`, stroke:"#2E9FB0", "stroke-width":5, fill:"none" }));
    }
    // squash
    [[210,850],[470,860],[640,845]].forEach(([x,y]) => { g.appendChild(s("ellipse", { cx:x, cy:y, rx:46, ry:30, fill:"#E08A55" })); g.appendChild(A.leaf(x+30, y-10, 70, -30, 26, "#1F7A5A", { rib:false })); });
    // numeral 13 (two bars, three dots) top-left in cartouche
    g.appendChild(s("rect", { x:90, y:90, width:180, height:200, rx:30, fill:"none", stroke:"#3b2418", "stroke-width":6 }));
    v.appendChild(g);
    const m = FC.maya(13, { color:"#B3262E" }); m.setAttribute("x", 105); m.setAttribute("y", 105); m.setAttribute("width", 150); m.setAttribute("height", 170); v.appendChild(m);
    // rain clouds
    const c = s("g", { filter:"url(#fx-rough)" });
    [[520,140,60],[600,120,70],[680,150,50]].forEach(([x,y,r]) => c.appendChild(s("circle", { cx:x, cy:y, r, fill:"#2E9FB0", opacity:.85 })));
    for (let i=0;i<6;i++) c.appendChild(s("path", { d:`M${520 + i*30} 220 l-8 40`, stroke:"#2E9FB0", "stroke-width":5 }));
    v.appendChild(c);
    return v;
  };
})(window.FC);

/* ---------- Week 2 static visuals ---------- */
(function(FC){
  "use strict";
  const s = FC.s, svg = FC.svg, M = FC.map;
  FC.art.ringOfFire = function(){
    const wrap = FC.h("div", { style:{ width:"700px", height:"560px", borderRadius:"14px", overflow:"hidden", boxShadow:"var(--sh-3)" } });
    const map = M.build({ view:[200, 150, 2150, 1300] });
    map.setAttribute("style", "width:100%;height:100%");
    const ring = [[-72,-50],[-73,-40],[-71,-30],[-75,-15],[-79,-3],[-77,6],[-85,11],[-92,15],[-99,17],[-105,20],[-112,28],[-122,38],[-124,46],[-135,58],[-150,60],[-165,55],[-178,52],[165,54],[158,53],[150,46],[142,40],[138,35],[132,32],[126,25],[122,14],[125,7],[118,-3],[110,-7],[124,-9],[140,-5],[150,-6],[155,-7],[167,-15],[175,-20],[178,-30],[176,-38],[172,-42],[168,-46]];
    const g = map.querySelector(".m-route");
    ring.forEach(([lo,la], i) => { const [x,y] = M.proj(lo, la); g.appendChild(s("circle", { cx:x, cy:y, r:18, fill: i%3 ? "#B3262E" : "#F0C25E", opacity:.9 })); });
    M.label(map, [-160, 10], "PACIFIC OCEAN", 52, "rgba(233,220,192,.6)");
    M.mark(map, [172.6,-43.5], "Aotearoa", { color:"#1F7A5A", scale:1.6 });
    M.mark(map, [-98.6,19.0], "Popocatépetl", { color:"#B3262E", scale:1.6, side:"left" });
    wrap.appendChild(map);
    return wrap;
  };
  FC.art.cellDiagram = function(){
    const v = svg(640, 560, { style:"width:640px;height:560px" });
    const g = s("g", { filter:"url(#fx-paper)" });
    g.appendChild(s("path", { d:"M90 420 C 70 300, 180 250, 320 250 C 470 250, 570 300, 550 420 C 530 520, 120 530, 90 420Z", fill:"#E8D9A8" }));
    g.appendChild(s("rect", { x:180, y:150, width:40, height:300, rx:4, fill:"#9da3a8" }));
    g.appendChild(s("rect", { x:420, y:150, width:40, height:300, rx:4, fill:"#C46A3A" }));
    v.appendChild(g);
    const t = (x, y, txt, c, sz) => v.appendChild(s("text", { x, y, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":sz || 28, fill:c }, txt));
    t(120, 200, "ZINC −", "#c0c4c8"); t(530, 200, "COPPER +", "#E08A55"); t(320, 470, "JUICE (ELECTROLYTE)", "#5a3825", 24);
    v.appendChild(s("path", { d:"M200 150 V60 H440 V150", stroke:"#F0C25E", "stroke-width":8, fill:"none" }));
    v.appendChild(s("circle", { cx:320, cy:60, r:70, fill:"url(#g-lamp)" }));
    v.appendChild(s("path", { d:"M296 80 V50 Q296 26 320 26 Q344 26 344 50 V80Z", fill:"#FF5A5F" }));
    for (let i=0;i<4;i++){ const x = 230 + i*55; v.appendChild(s("path", { d:`M${x} 60 l18 0 m-8 -8 l8 8 l-8 8`, stroke:"#7FF3FF", "stroke-width":5, fill:"none" })); }
    t(320, 540, "e⁻ flow: zinc → wire → LED → copper", "#7FF3FF", 26);
    return v;
  };
})(window.FC);
