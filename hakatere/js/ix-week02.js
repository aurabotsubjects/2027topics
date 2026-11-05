/* ==========================================================
   INTERACTIVES — Week 2 (Map Sheet II · Kāika & Kai)
   mahikakai · platepush · shrinksun · scalewalk · leverlab · flatcolour
   ========================================================== */
(function(BM){
  "use strict";
  const h = BM.h, s = BM.s, svg = BM.svg, A = BM.art, M = BM.map, IX = BM.IX;
  const btn = BM.ixbtn;
  const setMD = (el, t) => { el.innerHTML = BM.md(t); return el; };
  const controls = (host, kids) => { const c = h("div", { class:"ix-controls", style:{ position:"absolute", right:"0", top:"-118px" } }, kids); host.appendChild(c); return c; };
  const panel = (style, kids) => h("div", { class:"ix-panel", style }, kids);
  const stop = e => e.stopPropagation();

  /* =======================================================
     MAHIKA KAI MAP — food places along Hakatere (Mon W2)
     Source: Tākata Whenua o Hakatere (Te Rūnanga o Arowhenua)
     ======================================================= */
  IX.mahikakai = function(host){
    const map = M.hakatere({ theme:"paper", labels:"both", relief:true });
    map.setAttribute("style", "position:absolute;left:0;top:-10px;width:700px;height:700px;border-radius:10px;box-shadow:var(--sh-3)");
    host.appendChild(map);
    const SITES = [
      { k:"lakes", at:[20.5,31.5], t:"Ō Tū Wharekai · lakes & wetlands", inland:true, d:"A seasonal **mahika kai** site and a major **travel route** between the east coast and the West Coast. People gathered birds and **tuna** (eels) here. Archaeologists have found ovens, middens and rock shelters." },
      { k:"forest", at:[49,46], t:"Forest edge · birds", inland:true, d:"Birds such as **weka, kererū, kākā and tūī** gave meat, oil and feathers. Weka oil (hinu weka) was used as a medicine and in paints." },
      { k:"plains", at:[40,56], t:"Plains · plants", inland:true, d:"**Aruhe** (bracken-fern root) was an important food for energy. **Tī kōuka** (cabbage tree) was gathered and cooked too." },
      { k:"river", at:[60,64], t:"The river · tuna, kōura, kākahi", inland:false, d:"The Hakatere gave **tuna** (eels), **kōura** (freshwater crayfish) and **kākahi** (freshwater mussels)." },
      { k:"coast", at:[86,84], t:"Whakanui · the coast", inland:false, d:"At the coast, **paraki** (smelts) were caught. Whakanui was one of a chain of **kāika nohoaka** (temporary camps) along the eastern coast." }
    ];
    const marks = s("g");
    SITES.forEach((st, i) => {
      const [x, y] = [st.at[0]*10, st.at[1]*10];
      const g = s("g", { style:"cursor:pointer", transform:`translate(${x} ${y})` });
      const ring = s("circle", { r:26, fill:"rgba(243,236,221,.92)", stroke:"#6b7a80", "stroke-width":4, "stroke-dasharray":"5 5" });
      const hut = s("path", { d:"M-11 7 L0 -10 L11 7Z", fill:"none", stroke:"#4B5357", "stroke-width":3.5, "stroke-linejoin":"round" });
      const num = s("text", { x:22, y:-18, "font-family":"Big Shoulders Display", "font-weight":900, "font-size":30, fill:"#9E3826", stroke:"#efe6cf", "stroke-width":5, "paint-order":"stroke" }, String(i+1));
      g.append(ring, hut, num);
      g.addEventListener("click", e => { stop(e); pick(i); });
      marks.appendChild(g); st.g = g; st.ring = ring; st.hut = hut;
    });
    map.appendChild(marks);
    const info = panel({ left:"740px", right:"0", top:"0", minHeight:"260px" }, [h("div", { class:"ix-chip", style:{ background:"#9E3826", color:"#fff" } }, "Mahika kai"), h("h4", { style:{ marginTop:"10px" } }, "Food places of Hakatere"), setMD(h("p"), "Click a pencilled mark on the map. Each one is a place where people gathered **kai** (food).")]);
    host.appendChild(info);
    const season = panel({ left:"740px", right:"0", bottom:"0", minHeight:"190px" }, [h("h4", null, "Summer"), h("p")]);
    host.appendChild(season);
    let summer = true;
    function setSeason(sm){
      summer = sm;
      SITES.forEach(st => { const on = summer || !st.inland; st.ring.setAttribute("fill", on ? "rgba(243,236,221,.95)" : "rgba(167,165,156,.6)"); st.hut.setAttribute("opacity", on ? 1 : .25); });
      season.querySelector("h4").textContent = summer ? "☀️ Summer: inland camps busy" : "❄️ Winter: inland camps empty";
      setMD(season.querySelector("p"), summer ? "In summer, **eeling and birding parties** travelled up the rivers to inland camps near food and water." : "Most inland camps were **deserted in winter**. People were back at camps nearer the coast, with food gathered and preserved earlier.");
      sBtn.textContent = summer ? "Switch to winter" : "Switch to summer";
    }
    function pick(i){ const st = SITES[i]; SITES.forEach((x, j) => x.ring.setAttribute("stroke", j === i ? "#B4412F" : "#6b7a80")); info.querySelector("h4").textContent = (i+1) + ". " + st.t; setMD(info.querySelector("p"), st.d); BM.sfx("paper"); }
    const sBtn = btn("Switch to winter", () => setSeason(!summer), "on");
    controls(host, [sBtn]);
    setSeason(true);
    return { steps:SITES.length + 1, step(n){ if (n === 0){ setSeason(true); return; } if (n <= SITES.length) pick(n-1); else setSeason(false); } };
  };

  /* =======================================================
     PLATE PUSH — uplift vs erosion (Tue W2). Measured rates only.
     ======================================================= */
  IX.platepush = function(host){
    const W = 1100, H = 640;
    const v = svg(W, H, { style:"position:absolute;left:0;top:0;width:1100px;height:640px;border-radius:12px" });
    v.appendChild(s("rect", { width:W, height:H, rx:12, fill:"#cfe1e8" }));
    const sea = s("rect", { x:0, y:470, width:W, height:170, fill:"#6FB6D6", opacity:.5 });
    const plateL = s("g"), plateR = s("g");
    plateL.appendChild(s("rect", { x:-200, y:500, width:760, height:140, fill:"#8a7a62" }));
    plateL.appendChild(s("text", { x:40, y:590, "font-family":"Big Shoulders Display", "font-weight":900, "font-size":30, fill:"#F3ECDD" }, "AUSTRALIAN PLATE →"));
    plateR.appendChild(s("rect", { x:540, y:500, width:760, height:140, fill:"#6d6252" }));
    plateR.appendChild(s("text", { x:760, y:590, "font-family":"Big Shoulders Display", "font-weight":900, "font-size":30, fill:"#F3ECDD" }, "← PACIFIC PLATE"));
    const fault = s("path", { d:"M550 500 L520 640", stroke:"#B4412F", "stroke-width":5, "stroke-dasharray":"10 8" });
    const mtn = s("path", { fill:"#4B5357" }), snow = s("path", { fill:"#F3F6F4" });
    const gravel = s("g"), rain = s("g", { opacity:0 });
    for (let i=0;i<40;i++) rain.appendChild(s("line", { x1:300 + (i*23)%500, y1:40 + (i*37)%160, x2:292 + (i*23)%500, y2:62 + (i*37)%160, stroke:"#3D8DB3", "stroke-width":3, "class":"rdrop" }));
    v.append(sea, plateL, plateR, mtn, snow, gravel, fault, rain);
    v.appendChild(s("text", { x:568, y:630, "font-family":"Big Shoulders Display", "font-weight":800, "font-size":20, fill:"#F3ECDD" }, "Alpine Fault"));
    host.appendChild(v);
    let hgt = 60, up = 0, erode = 0, years = 0, raf, last = 0;
    function draw(){
      const peak = 500 - hgt;
      mtn.setAttribute("d", `M300 500 C 380 ${500 - hgt*.4}, 460 ${peak+30}, 540 ${peak} C 600 ${peak+20}, 680 ${500 - hgt*.45}, 800 500Z`);
      const sl = peak + Math.min(80, hgt*.25);
      snow.setAttribute("d", hgt > 160 ? `M${540 - (sl-peak)*1.4} ${sl} L540 ${peak} L${540 + (sl-peak)*1.5} ${sl} Q540 ${sl - 14} ${540 - (sl-peak)*1.4} ${sl}Z` : "");
      plateL.setAttribute("transform", `translate(${Math.min(20, up*20)} 0)`);
      plateR.setAttribute("transform", `translate(${-Math.min(20, up*20)} 0)`);
      read.innerHTML = BM.md(`**Years of pushing:** ${Math.round(years)} · **Uplift so far:** about ${(years*10/1000).toFixed(1)} m · **Worn away:** about ${(years*erode*8/1000).toFixed(1)} m`);
    }
    function tick(t){
      const dt = Math.min(.05, (t - (last || t))/1000); last = t;
      if (up || erode){
        years += dt*60;
        hgt = Math.max(30, Math.min(420, hgt + dt*(up*60 - erode*30)));
        if (erode && Math.random() < .2){ const gx = 520 + (Math.random()-.5)*300; const p = s("circle", { cx:gx, cy:500 - hgt*.3, r:4 + Math.random()*4, fill:"#A7A59C" }); gravel.appendChild(p); p.animate([{ transform:"translate(0,0)" }, { transform:`translate(${gx > 540 ? 260 : -260}px, ${hgt*.3 - 10}px)` }], { duration:1600, fill:"forwards" }); setTimeout(() => p.remove(), 1700); }
        draw();
      }
      raf = requestAnimationFrame(tick);
    }
    const info = panel({ left:"1130px", right:"0", top:"0", minHeight:"300px" }, [h("h4", null, "Two plates collide"), setMD(h("p"), "New Zealand sits on the boundary between the **Pacific** and **Australian** plates. Where they push together, the land is **pushed up**. Press **Push**.")]);
    const read = h("div", { class:"pcard", style:{ position:"absolute", left:"1130px", right:"0", top:"330px", padding:"14px 18px", fontSize:"24px", lineHeight:"1.3" } });
    const ruler = panel({ left:"1130px", right:"0", bottom:"0", minHeight:"160px" }, [h("h4", { style:{ fontSize:"30px" } }, "📏 Measured today"), setMD(h("p", { style:{ fontSize:"22px" } }), "Near Aoraki/Mt Cook the Alps are rising **about 10 mm a year**: about **1 metre every 100 years**, if nothing wore them down.")]);
    host.append(info, read, ruler);
    const pushB = btn("⇆ Push", () => { up = up ? 0 : 1; pushB.classList.toggle("on", !!up); if (up) { setMD(info.querySelector("p"), "The plates squeeze together and the land **rises**. Near the Alpine Fault it rises **10 mm or more a year**."); info.querySelector("h4").textContent = "Uplift"; } }, "dark");
    const rainB = btn("🌧 Rain & frost", () => { erode = erode ? 0 : 1; rain.style.transition = "opacity .5s"; rain.setAttribute("opacity", erode ? .8 : 0); rainB.classList.toggle("on", !!erode); if (erode){ info.querySelector("h4").textContent = "Erosion"; setMD(info.querySelector("p"), "Heavy rain, frost and rivers **wear the mountains down** and carry gravel to the plains. Uplift pushes up; erosion wears down. Both happen at once."); } }, "dark");
    controls(host, [pushB, rainB, btn("Reset", () => { up = 0; erode = 0; hgt = 60; years = 0; pushB.classList.remove("on"); rainB.classList.remove("on"); rain.setAttribute("opacity", 0); draw(); }, "dark")]);
    draw(); raf = requestAnimationFrame(tick);
    return { steps:2, step(i){ up = i >= 1 ? 1 : 0; erode = i >= 2 ? 1 : 0; pushB.classList.toggle("on", !!up); rainB.classList.toggle("on", !!erode); rain.setAttribute("opacity", erode ? .8 : 0); }, destroy(){ cancelAnimationFrame(raf); } };
  };

  /* =======================================================
     SHRINKING SUN — move the Sun away until it's a star (Wed W2)
     ======================================================= */
  IX.shrinksun = function(host){
    const W = 1760, H = 560;
    const v = svg(W, H, { style:"position:absolute;left:0;top:0;width:1760px;height:560px;border-radius:14px" });
    v.appendChild(s("rect", { width:W, height:H, rx:14, fill:"#0b1024" }));
    v.appendChild(A.stars(W, H, 7, 260));
    const glow = s("circle", { cx:880, cy:280, r:300, fill:"url(#g-lamp)" });
    const sun = s("circle", { cx:880, cy:280, r:200, fill:"#ffe08a" });
    const core = s("circle", { cx:880, cy:280, r:160, fill:"#fff4c8" });
    v.append(glow, sun, core); host.appendChild(v);
    const bar = h("div", { class:"pcard", style:{ position:"absolute", left:"0", right:"0", top:"580px", padding:"14px 22px", display:"flex", gap:"24px", alignItems:"center", fontSize:"26px" } });
    const range = h("input", { type:"range", min:0, max:100, value:0, style:{ width:"560px", accentColor:"#C9A04A" }, oninput:() => set(+range.value), onclick:stop, onpointerdown:stop });
    const txt = h("div", { style:{ flex:"1" } });
    bar.append(h("b", { style:{ fontFamily:"var(--f-label)", letterSpacing:".1em", textTransform:"uppercase" } }, "Move the Sun away"), range, txt);
    host.appendChild(bar);
    const MAX = 268000; // Proxima Centauri ≈ 4.2 light-years ≈ 268,000 × the Earth–Sun distance
    function set(p){
      const f = Math.pow(MAX, p/100);
      const r = Math.max(2.4, 200/f);
      sun.setAttribute("r", r); core.setAttribute("r", Math.max(1.6, r*.8)); glow.setAttribute("r", Math.max(10, r*1.5 + 6)); glow.setAttribute("opacity", Math.max(.35, 1 - p/140));
      const fs = f < 10 ? f.toFixed(1) : Math.round(f).toLocaleString("en-NZ");
      txt.innerHTML = BM.md(p < 1 ? "**Where it is now:** about **150 million km** away. Light takes about **8 minutes** to reach us." : p > 98 ? `**${fs} times further away** — as far as the next nearest star, **Proxima Centauri** (about **4.2 light-years**). Our Sun would look like **just another star**.` : `**${fs} times further away** than it is now. Smaller… and dimmer.`);
    }
    set(0);
    controls(host, [btn("Where it is now", () => { range.value = 0; set(0); }, "dark"), btn("As far as the next star", () => { range.value = 100; set(100); }, "on")]);
    return { steps:2, step(i){ const p = [0, 50, 100][i]; range.value = p; set(p); } };
  };

  /* =======================================================
     SCALE WALK — Sun as a basketball on the school field (Wed W2)
     ======================================================= */
  IX.scalewalk = function(host){
    const SUN_KM = 1392700, EARTH_KM = 12742, MOON_KM = 3475, AU_KM = 149600000, MOON_DIST = 384400, PROX_KM = 4.24*9.461e12;
    const k = 0.24 / SUN_KM; // metres per km (Sun = 24 cm basketball)
    const earthMM = EARTH_KM*k*1000, moonMM = MOON_KM*k*1000, earthM = AU_KM*k, moonCM = MOON_DIST*k*100, proxKM = PROX_KM*k/1000;
    const W = 1760, H = 400;
    const v = svg(W, H, { style:"position:absolute;left:0;top:0;width:1760px;height:400px;border-radius:14px" });
    v.appendChild(s("rect", { width:W, height:H, rx:14, fill:"#5E7F3A" }));
    for (let i=0;i<12;i++) v.appendChild(s("rect", { x:i*150, y:0, width:75, height:H, fill:"#6f8f45", opacity:.4 }));
    const X0 = 140, PX = 1500/30; // 30 m across
    for (let m=0;m<=30;m+=5){ v.appendChild(s("line", { x1:X0 + m*PX, x2:X0 + m*PX, y1:330, y2:350, stroke:"#F3ECDD", "stroke-width":3 })); v.appendChild(s("text", { x:X0 + m*PX, y:380, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":800, "font-size":24, fill:"#F3ECDD" }, m + " m")); }
    v.appendChild(s("line", { x1:X0, x2:X0 + 30*PX, y1:340, y2:340, stroke:"#F3ECDD", "stroke-width":3 }));
    v.appendChild(s("circle", { cx:X0, cy:200, r:60, fill:"#ffcf5a", stroke:"#d99a2a", "stroke-width":4 }));
    v.appendChild(s("text", { x:X0, y:300, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":26, fill:"#F3ECDD" }, "SUN · 24 cm ball"));
    const ex = X0 + earthM*PX;
    const walker = s("g", { style:"transition:transform 4s ease-in-out" });
    walker.appendChild(s("circle", { cx:X0, cy:150, r:12, fill:"#1F2A30" })); walker.appendChild(s("path", { d:`M${X0} 162 V210 M${X0-16} 180 H${X0+16} M${X0} 210 L${X0-12} 240 M${X0} 210 L${X0+12} 240`, stroke:"#1F2A30", "stroke-width":7, "stroke-linecap":"round" }));
    const earthG = s("g", { opacity:0, style:"transition:opacity .8s" });
    earthG.appendChild(s("circle", { cx:ex, cy:200, r:5, fill:"#3D8DB3", stroke:"#fff", "stroke-width":2 }));
    earthG.appendChild(s("circle", { cx:ex, cy:200, r:26, fill:"none", stroke:"#F3ECDD", "stroke-width":2, "stroke-dasharray":"4 4" }));
    earthG.appendChild(s("text", { x:ex, y:150, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":26, fill:"#F3ECDD" }, `EARTH · ${earthMM.toFixed(1)} mm`));
    v.append(earthG, walker); host.appendChild(v);
    const cards = h("div", { style:{ position:"absolute", left:"0", right:"0", top:"420px", display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"20px" } });
    const mk = (t, d) => { const c = h("div", { class:"pcard", style:{ padding:"16px 20px", opacity:".25", transition:"opacity .6s" } }, h("div", { style:{ fontFamily:"var(--f-display)", fontWeight:"900", fontSize:"32px", lineHeight:"1.05", marginBottom:"6px" } }, t), setMD(h("div", { style:{ fontSize:"23px", lineHeight:"1.25" } }), d)); cards.appendChild(c); return c; };
    const c1 = mk("Earth", `If the Sun were a **24 cm** basketball, Earth would be a **${earthMM.toFixed(1)} mm** pinhead about **${Math.round(earthM)} m** away. The Sun is about **109 Earths** across.`);
    const c2 = mk("The Moon", `The Moon would be a speck about **${moonMM.toFixed(1)} mm** across, only **${moonCM.toFixed(0)} cm** from the Earth pinhead.`);
    const c3 = mk("The next star", `On the same scale, the next nearest star would be about **${Math.round(proxKM/100)*100} km** away: almost as far as from Christchurch to Hawaiʻi!`);
    host.appendChild(cards);
    function step(i){ walker.style.transform = i >= 1 ? `translateX(${ex - X0 - 30}px)` : "none"; earthG.setAttribute("opacity", i >= 1 ? 1 : 0); [c1, c2, c3].forEach((c, j) => c.style.opacity = i >= j + 1 ? "1" : ".25"); }
    controls(host, [btn("Walk to Earth", () => step(1), "on"), btn("The Moon", () => step(2), "dark"), btn("The next star", () => step(3), "dark")]);
    step(0);
    return { steps:3, step };
  };

  /* =======================================================
     LEVER LAB — slide the pivot, feel the effort (Thu W2)
     ======================================================= */
  IX.leverlab = function(host){
    const W = 1100, H = 600, L = 900, X0 = 100, Y = 380, LOAD = 30; // 30 kg hay bale
    const v = svg(W, H, { style:"position:absolute;left:0;top:0;width:1100px;height:600px;border-radius:12px" });
    v.appendChild(s("rect", { width:W, height:H, rx:12, fill:"#efe6cf" }));
    v.appendChild(s("rect", { y:480, width:W, height:120, fill:"#C9A04A", opacity:.55 }));
    const beamG = s("g");
    beamG.appendChild(s("rect", { x:X0, y:Y - 12, width:L, height:24, rx:6, fill:"#8a6544" }));
    const bale = s("g");
    bale.appendChild(s("rect", { x:X0 + 10, y:Y - 112, width:150, height:100, rx:10, fill:"#e2c46e", stroke:"#b8963e", "stroke-width":4 }));
    for (let i=0;i<5;i++) bale.appendChild(s("line", { x1:X0 + 30 + i*28, x2:X0 + 30 + i*28, y1:Y - 108, y2:Y - 16, stroke:"#b8963e", "stroke-width":3 }));
    bale.appendChild(s("text", { x:X0 + 85, y:Y - 52, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":30, fill:"#5a4632" }, LOAD + " kg"));
    const hand = s("g"); hand.appendChild(s("path", { d:`M${X0 + L - 20} ${Y - 120} v80`, stroke:"#B4412F", "stroke-width":10, "stroke-linecap":"round" })); hand.appendChild(s("path", { d:`M${X0 + L - 38} ${Y - 54} l18 22 l18 -22`, fill:"none", stroke:"#B4412F", "stroke-width":10, "stroke-linecap":"round", "stroke-linejoin":"round" }));
    hand.appendChild(s("text", { x:X0 + L - 20, y:Y - 134, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":26, fill:"#9E3826" }, "EFFORT"));
    beamG.append(bale, hand);
    const fulc = s("path", { fill:"#4B5357" });
    const armL = s("g"), armR = s("g");
    v.append(beamG, fulc, armL, armR);
    v.appendChild(s("text", { x:X0 + 85, y:Y + 70, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":26, fill:"#2C6F92" }, "LOAD"));
    host.appendChild(v);
    const meter = panel({ left:"1130px", right:"0", top:"0", minHeight:"240px" }, [h("h4", null, "Effort needed"), h("div", { class:"em", style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"84px", lineHeight:"1", color:"#9E3826" } }), h("div", { class:"bar", style:{ height:"24px", borderRadius:"12px", background:"rgba(0,0,0,.12)", marginTop:"10px", overflow:"hidden" } }, h("div", { style:{ height:"100%", width:"0", background:"#B4412F", transition:"width .3s" } })), h("p", { style:{ marginTop:"10px" } })]);
    host.appendChild(meter);
    const rng = h("input", { type:"range", min:12, max:88, value:50, style:{ width:"100%", accentColor:"#B4412F" }, oninput:() => set(+rng.value), onclick:stop, onpointerdown:stop });
    const ctl = panel({ left:"1130px", right:"0", top:"290px", minHeight:"120px" }, [h("h4", { style:{ fontSize:"30px" } }, "Slide the pivot (fulcrum)"), rng]);
    host.appendChild(ctl);
    const tip = panel({ left:"1130px", right:"0", bottom:"0", minHeight:"150px" }, [setMD(h("p", { style:{ fontSize:"22px" } }), "**Pivot closer to the load = less effort**, but you push your end further down.")]);
    host.appendChild(tip);
    let pct = 50;
    function set(p){
      pct = p;
      const fx = X0 + L*p/100, loadArm = fx - (X0 + 85), effArm = (X0 + L - 20) - fx;
      const eff = LOAD*loadArm/effArm;
      fulc.setAttribute("d", `M${fx} ${Y + 12} L${fx - 50} 480 L${fx + 50} 480Z`);
      const lab = (g, x1, x2, txt, col) => { BM.clear(g); g.appendChild(s("path", { d:`M${x1} ${Y + 40} H${x2}`, stroke:col, "stroke-width":4, "marker-end":"" })); g.appendChild(s("text", { x:(x1 + x2)/2, y:Y + 36, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":800, "font-size":22, fill:col }, txt)); };
      lab(armL, X0 + 85, fx, "load arm", "#2C6F92"); lab(armR, fx, X0 + L - 20, "effort arm", "#9E3826");
      meter.querySelector(".em").textContent = "≈ " + (eff < 10 ? eff.toFixed(1) : Math.round(eff)) + " kg";
      meter.querySelector(".bar > div").style.width = Math.min(100, eff/90*100) + "%";
      setMD(meter.querySelector("p"), eff < LOAD*.95 ? "**Easier** than lifting the bale straight up (" + LOAD + " kg)." : eff > LOAD*1.05 ? "**Harder** than lifting it straight up! The pivot is too close to you." : "About the **same** as lifting it straight up.");
      beamG.setAttribute("transform", "");
    }
    function lift(){
      const fx = X0 + L*pct/100;
      beamG.style.transformBox = "view-box"; beamG.style.transformOrigin = `${fx}px ${Y}px`;
      beamG.animate([{ transform:"rotate(0deg)" }, { transform:"rotate(9deg)" }, { transform:"rotate(9deg)" }, { transform:"rotate(0deg)" }], { duration:2400, easing:"ease-in-out" });
      BM.sfx("tok");
    }
    set(50);
    controls(host, [btn("Push down!", lift, "on"), btn("Pivot near the load", () => { rng.value = 25; set(25); }, "dark"), btn("Pivot near you", () => { rng.value = 80; set(80); }, "dark")]);
    return { steps:2, step(i){ const p = [50, 25, 80][i]; rng.value = p; set(p); } };
  };

  /* =======================================================
     FLAT COLOUR — detail → simple shapes → limited palette (Fri W2)
     An original Mid Canterbury scene (not a copy of any painting).
     ======================================================= */
  IX.flatcolour = function(host){
    const W = 1100, H = 660;
    const v = svg(W, H, { style:"position:absolute;left:0;top:0;width:1100px;height:660px;border-radius:12px" });
    const PAL = {
      noon:{ n:"High-country noon", c:["#9ec9e0","#6f8fa8","#e9eef0","#a8875a","#c9a04a","#5e7f3a","#2f3e46"] },
      norwest:{ n:"Nor'west evening", c:["#e9c58a","#7d6a8a","#f3e3cc","#a8603e","#d9a24a","#6f6a3a","#3a2a30"] },
      frost:{ n:"Frosty morning", c:["#cfdde6","#8fa3b8","#ffffff","#a9b4ba","#d6d0bf","#7f9a8a","#3b4950"] }
    };
    // shapes: sky, far range, snow, foothills, tussock plain, shelterbelt, shadows
    const sky = s("rect", { width:W, height:H, rx:12 });
    const far = s("path", { d:"M0 330 L120 240 L200 280 L330 150 L420 230 L520 170 L640 260 L760 190 L880 250 L1000 200 L1100 260 V420 H0Z" });
    const snowP = s("path", { d:"M290 190 L330 150 L370 196 L345 188 L330 204Z M490 196 L520 170 L560 204 L530 198Z M730 214 L760 190 L800 222 L770 216Z" });
    const hills = s("path", { d:"M0 420 C 180 360, 300 380, 420 410 C 560 360, 760 380, 1100 400 V520 H0Z" });
    const plain = s("path", { d:"M0 500 H1100 V660 H0Z" });
    const belt = s("path", { d:"M640 470 h360 v34 h-360z" });
    const shade = s("path", { d:"M330 150 L420 230 L380 300 L300 260Z M760 190 L880 250 L820 300 L740 260Z M420 410 C 520 380, 600 390, 700 400 L620 460 Z" });
    const hut = s("path", { d:"M180 520 h70 v-40 l-35 -26 l-35 26z" });
    const tex = s("g", { opacity:1, style:"transition:opacity .8s" });
    for (let i=0;i<140;i++) tex.appendChild(s("path", { d:`M${(i*53)%1100} ${520 + (i*29)%140} q6 -18 12 0`, stroke:"#8a6a2a", "stroke-width":2, fill:"none", opacity:.6 }));
    for (let i=0;i<30;i++) tex.appendChild(s("circle", { cx:650 + i*12, cy:470 + (i%3)*4, r:12, fill:"#3a4a28", opacity:.7 }));
    const grad = s("rect", { width:W, height:420, fill:"url(#g-lamp)", opacity:.25, style:"transition:opacity .8s" });
    v.append(sky, grad, far, snowP, hills, plain, belt, shade, hut, tex);
    host.appendChild(v);
    const info = panel({ left:"1130px", right:"0", top:"0", minHeight:"300px" }, [h("h4"), h("p")]);
    host.appendChild(info);
    const palBox = h("div", { style:{ position:"absolute", left:"1130px", right:"0", bottom:"0", display:"flex", flexDirection:"column", gap:"10px" } });
    host.appendChild(palBox);
    let pal = "noon", flat = false;
    function paint(){
      const c = PAL[pal].c;
      sky.setAttribute("fill", c[0]); far.setAttribute("fill", c[1]); snowP.setAttribute("fill", c[2]); hills.setAttribute("fill", c[3]); plain.setAttribute("fill", c[4]); belt.setAttribute("fill", c[5]); shade.setAttribute("fill", c[6]); shade.setAttribute("opacity", flat ? .55 : .25); hut.setAttribute("fill", c[3]);
      tex.setAttribute("opacity", flat ? 0 : 1); grad.setAttribute("opacity", flat ? 0 : .25);
      [far, hills, plain, belt].forEach(p => p.setAttribute("stroke", flat ? "rgba(0,0,0,.18)" : "none"));
      palBox.querySelectorAll("button").forEach(b => b.classList.toggle("on", b.dataset.k === pal));
    }
    Object.keys(PAL).forEach(k => { const b = btn(PAL[k].n, () => { pal = k; paint(); setMD(info.querySelector("p"), "A **limited palette** (just a few colours) makes a picture feel calm and joined-up. Which mood does **" + PAL[k].n + "** give?"); info.querySelector("h4").textContent = "Limited palette"; }, "dark"); b.dataset.k = k; b.style.minHeight = "54px"; b.style.fontSize = "20px"; palBox.appendChild(b); });
    const TXT = [["Look closely", "Artists who paint the high country often **simplify** it. First, look at all the detail: every tussock, every tree."], ["Find the big shapes", "Now squint. The land becomes a few **big, clear shapes**: sky, ranges, hills, plain. Shadows become **crisp shapes** too."], ["Choose a palette", "Pick **a few colours** and use them everywhere. Click a palette below."]];
    function step(i){ flat = i >= 1; paint(); info.querySelector("h4").textContent = TXT[i][0]; setMD(info.querySelector("p"), TXT[i][1]); }
    controls(host, [btn("Detail ↔ shapes", () => { flat = !flat; paint(); }, "on")]);
    step(0);
    return { steps:2, step };
  };
})(window.BM);
