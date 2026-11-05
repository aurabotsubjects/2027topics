/* ==========================================================
   INTERACTIVES — Week 10 (Map Sheet X · Our Place)
   museumlabel · campaign · darksky · showcase · fullmap
   ========================================================== */
(function(BM){
  "use strict";
  const h = BM.h, s = BM.s, svg = BM.svg, A = BM.art, IX = BM.IX;
  const btn = BM.ixbtn;
  const setMD = (el, t) => { el.innerHTML = String(t).split("\n\n").map(BM.md).join('<span style="display:block;height:12px"></span>'); return el; };
  const controls = (host, kids) => { const c = h("div", { class:"ix-controls", style:{ position:"absolute", right:"0", top:"-118px" } }, kids); host.appendChild(c); return c; };
  const panel = (style, kids) => h("div", { class:"ix-panel", style }, kids);
  const stop = e => e.stopPropagation();
  const lab = t => h("b", { style:{ fontFamily:"var(--f-label)", letterSpacing:".08em", textTransform:"uppercase", fontSize:"18px", display:"block", marginTop:"8px" } }, t);
  const field = (ph, val, on, rows) => { const el = h(rows ? "textarea" : "input", { placeholder:ph, rows:rows || null, style:{ width:"100%", fontSize:"18px", padding:"6px 10px", border:"2px solid #c9c2b0", borderRadius:"8px", fontFamily:"inherit", boxSizing:"border-box", resize:"none" }, onclick:stop, onpointerdown:stop, onkeydown:stop }); el.value = val; el.addEventListener("input", () => on(el.value)); return el; };
  const range = (min, max, val, col, on) => { const r = h("input", { type:"range", min, max, value:val, style:{ width:"100%", accentColor:col }, onclick:stop, onpointerdown:stop }); r.addEventListener("input", () => on(+r.value)); return r; };
  const T = (x, y, t, o) => s("text", Object.assign({ x, y, "font-family":"Atkinson Hyperlegible", "font-size":20, fill:"#1F2A30" }, o || {}), t);
  const wrapText = (g, txt, x, y, w, size, o) => { const words = String(txt).split(/\s+/); let line = "", yy = y; const per = Math.floor(w/(size*.52)); words.forEach(wd => { if ((line + " " + wd).trim().length > per){ g.appendChild(T(x, yy, line.trim(), Object.assign({ "font-size":size }, o))); yy += size*1.3; line = wd; } else line += " " + wd; }); if (line.trim()) g.appendChild(T(x, yy, line.trim(), Object.assign({ "font-size":size }, o))); return yy; };

  /* =======================================================
     MUSEUM LABEL — make the label for a Big Project museum case (Mon W10)
     ======================================================= */
  IX.museumlabel = function(host){
    const W = 1000, H = 640;
    const d = { obj:"Grandad's sheep shears", when:"about 1950", story:"Used by my great-grandad when he worked as a shearer near Methven.", how:"Family photos and Grandad's memories (an oral history).", p1:"For Grandad, they remind him of hard work and his dad.", p2:"A museum might see them as evidence of how shearing changed when machines arrived." };
    try { Object.assign(d, BM.store.get("w10label", {})); } catch(e){}
    const v = svg(W, H, { style:"position:absolute;left:0;top:0;width:1000px;height:640px;border-radius:12px" });
    host.appendChild(v);
    function draw(){
      BM.clear(v);
      v.appendChild(s("rect", { width:W, height:H, rx:12, fill:"#2F3E46" }));
      v.appendChild(s("rect", { x:40, y:40, width:520, height:560, rx:6, fill:"#efe6cf" }));
      v.appendChild(s("rect", { x:40, y:40, width:520, height:560, fill:"url(#p-grid)", opacity:.4 }));
      v.appendChild(T(64, 80, "OUR PLACE EXHIBITION · HAKATERE", { "font-family":"Big Shoulders Display", "font-weight":900, "font-size":20, fill:"#B4412F", "letter-spacing":"3" }));
      let y = wrapText(v, d.obj || "Object or story", 64, 130, 470, 34, { "font-family":"Fraunces", "font-weight":700 });
      v.appendChild(T(64, y + 34, d.when || "", { "font-size":20, fill:"#4B5357", "font-style":"italic" }));
      y = wrapText(v, d.story, 64, y + 80, 470, 21);
      v.appendChild(s("line", { x1:64, y1:y + 22, x2:530, y2:y + 22, stroke:"#a7957a", "stroke-width":2 }));
      v.appendChild(T(64, y + 56, "HOW DO WE KNOW?", { "font-family":"Big Shoulders Display", "font-weight":900, "font-size":18, fill:"#2C6F92", "letter-spacing":"2" }));
      y = wrapText(v, d.how, 64, y + 84, 470, 19);
      v.appendChild(T(64, y + 40, "TWO PERSPECTIVES", { "font-family":"Big Shoulders Display", "font-weight":900, "font-size":18, fill:"#2C6F92", "letter-spacing":"2" }));
      y = wrapText(v, "1. " + d.p1, 64, y + 68, 470, 18);
      wrapText(v, "2. " + d.p2, 64, y + 30, 470, 18);
      // the case
      v.appendChild(s("rect", { x:600, y:120, width:360, height:400, rx:8, fill:"#cfe1e8", opacity:.25, stroke:"#F3ECDD", "stroke-width":4 }));
      v.appendChild(s("rect", { x:620, y:440, width:320, height:60, fill:"#8a6a3a" }));
      v.appendChild(T(780, 320, "your object here", { "text-anchor":"middle", fill:"#F3ECDD", "font-size":22, "font-style":"italic" }));
      try { BM.store.set("w10label", d); } catch(e){}
    }
    const f = k => field("", d[k], val => { d[k] = val; draw(); }, k === "obj" || k === "when" ? 0 : 2);
    const p = panel({ left:"1030px", right:"0", top:"0", bottom:"0", overflowY:"auto" }, [lab("Object or story"), f("obj"), lab("When"), f("when"), lab("The story"), f("story"), lab("How do we know?"), f("how"), lab("Perspective 1"), f("p1"), lab("Perspective 2"), f("p2")]);
    host.appendChild(p);
    controls(host, [btn("🖨 Print label", () => window.print(), "on")]);
    draw();
    return {};
  };

  /* =======================================================
     CAMPAIGN — make a poster for our cause (Tue W10)
     ======================================================= */
  IX.campaign = function(host){
    const W = 760, H = 640;
    const CAUSES = [
      { k:"birds", n:"Give river birds space", head:"GIVE THEM SPACE", sub:"1 September – 1 February is nesting season on our braided rivers.", ask:"Keep dogs on a lead · drive on formed tracks only · walk around nesting birds", col:"#2C6F92", e:"🐦" },
      { k:"river", n:"Care for the Hakatere", head:"OUR RIVER, OUR TAONGA", sub:"The Hakatere gives us water, food and a home for birds and fish.", ask:"Pick up rubbish · save water at home · learn the river's stories", col:"#3D8DB3", e:"🌊" },
      { k:"sky", n:"Keep our skies dark", head:"SAVE THE STARS", sub:"Every light that points up hides the stars.", ask:"Point outdoor lights down · switch them off when not needed · look up!", col:"#1d2a4a", e:"✨" }
    ];
    const d = { c:0, aud:"Families who visit the river in summer", head:"", sub:"", ask:"" };
    const v = svg(W, H, { style:"position:absolute;left:0;top:0;width:760px;height:640px;border-radius:12px;box-shadow:var(--sh-3)" });
    host.appendChild(v);
    function draw(){
      const C = CAUSES[d.c];
      BM.clear(v);
      v.appendChild(s("rect", { width:W, height:H, fill:"#F3ECDD" }));
      v.appendChild(s("rect", { width:W, height:200, fill:C.col }));
      v.appendChild(s("text", { x:W/2, y:120, "text-anchor":"middle", "font-size":110 }, C.e));
      v.appendChild(s("text", { x:W/2, y:280, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":62, fill:C.col, "letter-spacing":"2" }, (d.head || C.head).toUpperCase()));
      let y = wrapText(v, d.sub || C.sub, 60, 340, 640, 28, { "font-family":"Fraunces" });
      v.appendChild(s("rect", { x:40, y:y + 30, width:W - 80, height:150, rx:12, fill:"#fff", stroke:C.col, "stroke-width":4 }));
      v.appendChild(T(60, y + 66, "WHAT YOU CAN DO", { "font-family":"Big Shoulders Display", "font-weight":900, "font-size":22, fill:C.col, "letter-spacing":"2" }));
      wrapText(v, d.ask || C.ask, 60, y + 100, 640, 22);
      v.appendChild(T(W/2, H - 24, "Made by Room 14 · for " + d.aud, { "text-anchor":"middle", "font-size":17, fill:"#4B5357" }));
    }
    const sel = h("div", { style:{ display:"flex", flexDirection:"column", gap:"6px" } }, CAUSES.map((C, i) => btn(C.e + " " + C.n, () => { d.c = i; d.head = d.sub = d.ask = ""; [hf, sf, af].forEach(x => x.value = ""); draw(); }, "dark sm")));
    const hf = field("Headline (or leave blank)", "", v2 => { d.head = v2; draw(); });
    const sf = field("Why it matters", "", v2 => { d.sub = v2; draw(); }, 2);
    const af = field("What people can do", "", v2 => { d.ask = v2; draw(); }, 2);
    const p = panel({ left:"790px", right:"0", top:"0", bottom:"0", overflowY:"auto" }, [lab("Our cause"), sel, lab("Audience"), field("", d.aud, v2 => { d.aud = v2; draw(); }), lab("Headline"), hf, lab("Message"), sf, lab("Call to action"), af]);
    host.appendChild(p);
    controls(host, [btn("🖨 Print poster", () => window.print(), "on")]);
    draw();
    return { steps:2, step(k){ d.c = k; draw(); } };
  };

  /* =======================================================
     DARK SKY — light pollution, shielded lights, and light travel (Wed W10)
     ======================================================= */
  IX.darksky = function(host){
    const W = 1100, H = 640;
    const v = svg(W, H, { style:"position:absolute;left:0;top:0;width:1100px;height:640px;border-radius:12px" });
    const sky = s("rect", { width:W, height:H, rx:12 }); v.appendChild(sky);
    const glow = s("ellipse", { cx:550, cy:640, rx:700, ry:380, fill:"#e6a85a" }); v.appendChild(glow);
    const stars = s("g"); v.appendChild(stars);
    v.appendChild(A.range(W, H, 560, 40, 3, "#05090d", {}));
    const town = s("g"); v.appendChild(town);
    host.appendChild(v);
    const r = BM.rng(77), ST = Array.from({ length:420 }, () => ({ x:r()*W, y:r()*520, m:r() }));
    let lights = 70, shielded = false;
    const lR = range(0, 100, 70, "#e6a85a", n => { lights = n; draw(); });
    const ctl = panel({ left:"1130px", right:"0", top:"0" }, [lab("Outdoor lights"), lR, h("div", { style:{ marginTop:"8px" } }, btn("Point lights down", () => { shielded = !shielded; draw(); }, "dark sm"))]);
    const read = panel({ left:"1130px", right:"0", top:"190px", bottom:"0" }, [h("p", { style:{ fontSize:"21px" } })]);
    host.append(ctl, read);
    function draw(){
      const pol = lights/100*(shielded ? .35 : 1);
      sky.setAttribute("fill", `rgb(${Math.round(15 + pol*70)},${Math.round(24 + pol*50)},${Math.round(34 + pol*30)})`);
      glow.setAttribute("opacity", pol*.55);
      BM.clear(stars); let n = 0;
      ST.forEach(st => { if (st.m > pol*1.05 - .05 || st.m > .97){ n++; stars.appendChild(s("circle", { cx:st.x, cy:st.y, r:.8 + st.m*1.8, fill:"#F6EBC8", opacity:.5 + st.m*.5 })); } });
      BM.clear(town);
      for (let i=0;i<Math.round(lights/8);i++){ const x = 100 + i*75; town.appendChild(s("line", { x1:x, y1:600, x2:x, y2:560, stroke:"#4B5357", "stroke-width":4 })); town.appendChild(s("path", { d:shielded ? `M${x - 12} 558 h24 l-6 6 h-12z` : `M${x} 552 m-8 0 a8 8 0 1 0 16 0 a8 8 0 1 0 -16 0`, fill:"#ffd88a" })); if (!shielded) town.appendChild(s("circle", { cx:x, cy:552, r:30, fill:"#ffd88a", opacity:.25 })); }
      ctl.querySelectorAll(".ixbtn").forEach(b => b.classList.toggle("on", shielded));
      setMD(read.querySelector("p"), `**Stars you can see:** about ${n} of ${ST.length} in this model.\n\n` + (pol < .2 ? "**A dark sky!** Like the **Aoraki Mackenzie International Dark Sky Reserve** near Takapō/Tekapo, where the University of Canterbury's **Mt John Observatory** studies the stars." : shielded ? "**Pointing lights down** keeps light on the ground, where people need it, and out of the sky." : "**Light pollution** washes out the stars. Lights that shine **up and sideways** make the sky glow.") + "\n\nIn the Mackenzie, outdoor **lighting controls** began in the early **1980s**. They also save energy and protect wildlife.");
    }
    controls(host, [btn("Town", () => { lights = 90; shielded = false; lR.value = 90; draw(); }, "dark"), btn("Dark sky", () => { lights = 5; lR.value = 5; draw(); }, "on")]);
    draw();
    return { steps:3, step(k){ if (k === 0){ lights = 70; shielded = false; } if (k === 1){ shielded = true; } if (k === 2){ lights = 5; } if (k === 3){ lights = 90; shielded = false; } lR.value = lights; draw(); } };
  };

  /* =======================================================
     SHOWCASE — evaluate a Smart Farm against its brief (Thu W10)
     ======================================================= */
  IX.showcase = function(host){
    const d = { name:"Mini pivot irrigator", user:"Liv, showing farm visitors", specs:["Rotates a full circle","Arm at least 20 cm","Scratch sim uses a loop","Turns water on only when dry"], marks:[2,1,2,0], warm:"The loop makes the pivot turn smoothly.", cool:"Add the if/else so it only waters when dry." };
    try { Object.assign(d, BM.store.get("w10show", {})); } catch(e){}
    const LV = ["Not yet","Partly","Met"], LC = ["#B4412F","#E6C873","#7FA55A"];
    const wrap = h("div", { style:{ position:"absolute", left:"0", top:"0", width:"1000px", bottom:"0", background:"#F3ECDD", borderRadius:"12px", padding:"26px 30px", boxSizing:"border-box", color:"#1F2A30", overflow:"hidden" } });
    host.appendChild(wrap);
    const sum = panel({ left:"1030px", right:"0", top:"0", bottom:"0" }, [h("h4", { style:{ fontSize:"30px" } }, "Evaluation"), h("div", { class:"meter", style:{ height:"28px", borderRadius:"14px", background:"#d6cdb8", overflow:"hidden", margin:"10px 0" } }, h("div", { class:"mf", style:{ height:"100%", background:"#7FA55A", transition:"width .4s" } })), h("p", { class:"sp", style:{ fontSize:"21px" } })]);
    host.appendChild(sum);
    function draw(){
      BM.clear(wrap);
      wrap.append(lab("Smart Farm"), field("", d.name, v2 => { d.name = v2; save(); summary(); }), lab("Stakeholder"), field("", d.user, v2 => { d.user = v2; save(); summary(); }), lab("Specifications (tap to mark)"));
      d.specs.forEach((sp, i) => {
        const row = h("div", { style:{ display:"flex", gap:"10px", alignItems:"center", marginTop:"8px" } });
        const f = field("Specification " + (i + 1), sp, v2 => { d.specs[i] = v2; save(); });
        f.style.flex = "1";
        const b = h("button", { class:"ixbtn sm", style:{ width:"150px", flex:"none", padding:"8px 10px", fontSize:"18px", minHeight:"0", background:LC[d.marks[i]], color:"#1F2A30" }, onclick:e => { stop(e); d.marks[i] = (d.marks[i] + 1) % 3; BM.sfx("tok"); save(); draw(); } }, LV[d.marks[i]]);
        row.append(f, b); wrap.appendChild(row);
      });
      wrap.append(lab("☀️ Warm (what works)"), field("", d.warm, v2 => { d.warm = v2; save(); summary(); }), lab("❄️ Cool (one improvement)"), field("", d.cool, v2 => { d.cool = v2; save(); summary(); }));
      summary();
    }
    function save(){ try { BM.store.set("w10show", d); } catch(e){} }
    function summary(){
      const tot = d.marks.reduce((a, b) => a + b, 0), pct = Math.round(tot/(d.marks.length*2)*100);
      sum.querySelector(".mf").style.width = pct + "%";
      const met = d.marks.filter(m => m === 2).length;
      setMD(sum.querySelector(".sp"), `**${d.name}** for **${d.user}**.\n\n**${met} of ${d.specs.length}** specifications met (${pct}%).\n\n☀️ ${d.warm}\n\n❄️ ${d.cool}\n\n**Next step:** fix the ‘Not yet’ or ‘Partly’ specifications, then **test again**.`);
    }
    draw();
    return {};
  };

  /* =======================================================
     FULL MAP — the ten sheets reassemble, then the class decides (Fri W10)
     ======================================================= */
  IX.fullmap = function(host){
    const CW = 200, CH = 250, G = 14;
    const grid = h("div", { style:{ position:"absolute", left:"0", top:"0", width:(CW*5 + G*4) + "px", height:(CH*2 + G) + "px" } });
    host.appendChild(grid);
    const cells = [];
    for (let n=1;n<=10;n++){
      const c = h("div", { style:{ position:"absolute", width:CW + "px", height:CH + "px", borderRadius:"6px", overflow:"hidden", boxShadow:"var(--sh-3)", transition:"all 1s cubic-bezier(.2,.8,.2,1)", background:"#efe6cf" } });
      const a = BM.art.sheetArt(n, { found:true }); a.setAttribute("style", "width:100%;height:100%"); a.setAttribute("preserveAspectRatio", "xMidYMid slice"); c.appendChild(a);
      grid.appendChild(c); cells.push(c);
    }
    const OPTS = [
      ["💰", "Sell it to the Dealer", "It would make money, but the map would leave Hakatere and its stories could be lost."],
      ["🏫", "Keep it in our classroom", "We could look after it, but few people would see it."],
      ["🏛️", "Give it to the community", "Shared at the museum, with **both names honoured** and Kāi Tahu stories told by Kāi Tahu."],
      ["🗑️", "Throw away the old pencil names", "The map would be ‘clean’, but we'd lose the evidence of whose place this is."]
    ];
    const votes = [0,0,0,0];
    let mode = "scatter", decided = false;
    const read = panel({ left:(CW*5 + G*4 + 30) + "px", right:"0", top:"0", bottom:"0" }, [h("h4", { class:"ft", style:{ fontSize:"30px" } }), h("div", { class:"fp" }), h("p", { class:"fn", style:{ fontSize:"20px", marginTop:"10px" } })]);
    host.appendChild(read);
    function layout(){
      cells.forEach((c, i) => {
        if (mode === "scatter"){ const r = BM.rng(i + 3); c.style.left = (r()*780) + "px"; c.style.top = (r()*240) + "px"; c.style.transform = `rotate(${(r() - .5)*30}deg)`; }
        else { c.style.left = ((i % 5)*(CW + G)) + "px"; c.style.top = (Math.floor(i/5)*(CH + G)) + "px"; c.style.transform = "none"; }
      });
    }
    function panelDraw(){
      const fp = read.querySelector(".fp"); BM.clear(fp);
      if (mode === "scatter"){ read.querySelector(".ft").textContent = "Ten sheets"; setMD(read.querySelector(".fn"), "All **ten sheets** are here at last, **Sheet VII** too. Press **Reassemble** to put the map back together."); return; }
      if (mode === "map"){ read.querySelector(".ft").textContent = "The whole map"; setMD(read.querySelector(".fn"), "From the **chest** in the river gravel to **our place** today: trails, a deed, a station, a town, **the race** (back where it belongs), a flood, and the names **restored**.\n\nNow the big question: **what should happen to the map?** Press **Vote**."); return; }
      read.querySelector(".ft").textContent = decided ? "Our decision" : "What should happen to the map?";
      OPTS.forEach(([e, t, why], i) => {
        const b = h("button", { class:"ixbtn dark sm", style:{ display:"flex", justifyContent:"space-between", width:"100%", marginTop:"6px", textAlign:"left" }, onclick:ev => { stop(ev); if (decided) return; votes[i]++; BM.sfx("tok"); panelDraw(); } }, h("span", null, e + " " + t), h("b", null, String(votes[i])));
        if (decided && i === 2) b.classList.add("on");
        fp.appendChild(b);
      });
      const tot = votes.reduce((a, b) => a + b, 0);
      setMD(read.querySelector(".fn"), decided
        ? "🟡 **The map goes to the community**, with **both names honoured**: shared at the museum, with Kāi Tahu stories told by Kāi Tahu. The Dealer can't buy what a whole town has decided isn't for sale."
        : `Tap an option for each vote (${tot} so far). Talk about **why** before you vote.\n\n` + OPTS.map(o => `${o[0]} *${o[2]}*`).join("\n\n"));
    }
    const go = m => { mode = m; layout(); panelDraw(); };
    controls(host, [btn("Scatter", () => { decided = false; go("scatter"); }, "dark"), btn("Reassemble", () => { BM.sfx("paper"); go("map"); }, "dark"), btn("Vote", () => go("vote"), "dark"), btn("Decide", () => { decided = true; BM.sfx("chime"); go("vote"); }, "on")]);
    go("scatter");
    return { steps:3, step(k){ decided = k === 3; go(["scatter","map","vote","vote"][k]); } };
  };
})(window.BM);
