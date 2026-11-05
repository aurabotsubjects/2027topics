/* ==========================================================
   INTERACTIVES — Week 10 · The Gate of All Nations
   wordflip · citygrowth · recovery · designcycle · forgiveness · sealmessage
   ========================================================== */
(function(BM){
  "use strict";
  const h = BM.h, s = BM.s, svg = BM.svg, A = BM.art, IX = BM.IX;
  const { btn, controls, panel, setMD } = IX._h;

  /* =======================================================
     10a. WORDS FROM PERSIA — flip to find the origin (Mon W10)
     ======================================================= */
  IX.wordflip = function(host){
    const WD = [
      { w:"bazaar", icon:"🛍️", o:"From Persian **bāzār**, “a market”." },
      { w:"caravan", icon:"🐫", o:"From Persian **kārwān**, “a band of desert travellers”." },
      { w:"paradise", icon:"🌳", o:"From an old Iranian word like **pairidaēza**, “an enclosed park or garden”." },
      { w:"Nowruz", icon:"🌸", o:"**“New day”**: the Persian New Year, on **21 March**, at the start of spring." }
    ];
    const cards = WD.map((d, i) => {
      const c = h("div", { class:"flip", style:{ position:"absolute", left:(i*440)+"px", top:"-10px", width:"420px", height:"440px", minHeight:"0" } }, h("div", { class:"in" },
        h("div", { class:"face front", style:{ display:"grid", placeItems:"center", textAlign:"center" } }, h("div", null, h("div", { style:{ fontSize:"110px" } }, d.icon), h("div", { style:{ fontFamily:"var(--f-royal)", fontWeight:"800", fontSize:"54px" } }, d.w), h("div", { class:"tap" }, "Where does it come from?"))),
        h("div", { class:"face back", style:{ display:"grid", placeItems:"center", textAlign:"center", padding:"20px" } }, h("div", null, h("div", { style:{ fontFamily:"var(--f-royal)", fontWeight:"800", fontSize:"44px" } }, d.w), setMD(h("div", { style:{ fontSize:"28px", lineHeight:"1.3", marginTop:"10px" } }), d.o)))));
      c.addEventListener("click", e => { e.stopPropagation(); c.classList.toggle("on"); BM.sfx("paper"); });
      host.appendChild(c); return c; });
    const tip = h("div", { class:"pcard ix-tip", style:{ left:"0", right:"0", top:"460px", minHeight:"70px" } });
    setMD(tip, "We've used these words all term! Guess first, then tap to flip. Persian words travelled into English along trade routes, like goods on the Silk Road.");
    host.appendChild(tip);
    return { steps:WD.length, step(i){ cards.forEach((c, k) => c.classList.toggle("on", k < i)); if (i) BM.sfx("paper"); } };
  };

  /* =======================================================
     10b. CITY GROWTH — Tehran then and now (Tue W10)
     ======================================================= */
  IX.citygrowth = function(host){
    const W = 1100, H = 640;
    const v = svg(W, H, { style:"position:absolute;left:0;top:-10px;width:1100px;height:640px;border-radius:12px;box-shadow:var(--sh-3);background:#FBF3E0" });
    host.appendChild(v);
    const base = 560, maxV = 8, sc = 460/maxV;
    for (let k=0;k<=8;k+=2){ const y = base - k*sc; v.appendChild(s("path", { d:`M120 ${y} H1060`, stroke:"#d8c9a8", "stroke-width":2 })); v.appendChild(s("text", { x:100, y:y + 8, "text-anchor":"end", "font-family":"Atkinson Hyperlegible", "font-size":22, fill:"#5a3a1c" }, k + "m")); }
    v.appendChild(s("text", { x:40, y:60, "font-family":"Big Shoulders Display", "font-weight":900, "font-size":30, fill:"#1E3A8A" }, "TEHRAN'S POPULATION (millions)"));
    const D = [["1956", 1.56], ["2006", 7.7]];
    const bars = D.map(([yr, val], i) => { const x = 260 + i*420; const r = s("rect", { x, y:base, width:220, height:0, rx:10, fill: i ? "#B0213B" : "#1E3A8A", style:"transition:all 1.2s cubic-bezier(.3,.7,.2,1)" });
      v.appendChild(r); v.appendChild(s("text", { x:x + 110, y:base + 40, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":34, fill:"#2B1B10" }, yr));
      const lab = s("text", { x:x + 110, y:base - 20, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":40, fill:"#2B1B10", opacity:0, style:"transition:opacity .6s" }, val + " million"); v.appendChild(lab);
      return { r, lab, val }; });
    const info = panel({ left:"1130px", right:"0", top:"-10px" }, [h("h4"), h("p")]);
    const pie = svg(300, 300, { style:"position:absolute;left:1180px;top:330px;width:300px;height:300px;opacity:0;transition:opacity .8s" });
    pie.appendChild(s("circle", { cx:150, cy:150, r:130, fill:"#E8B84A" }));
    const a = .76*Math.PI*2; pie.appendChild(s("path", { d:`M150 150 L150 20 A130 130 0 1 1 ${150 + 130*Math.sin(a)} ${150 - 130*Math.cos(a)}Z`, fill:"#1E3A8A" }));
    pie.appendChild(s("text", { x:150, y:160, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":44, fill:"#fff" }, "76% city"));
    host.append(info, pie);
    const T = [
      ["Tehran, 1956","In **1956**, about **1.56 million** people lived in Tehran, Iran's capital."],
      ["Tehran, 2006","Fifty years later, in **2006**: about **7.7 million**. About **five times** as many!"],
      ["Why do people move to cities?","Jobs, schools, hospitals, family, shops… When people move to cities faster than homes can be built, some end up in **informal settlements**: homes built without permission or services like clean water."],
      ["Most Iranians live in cities","By **2020**, about **3 in 4** people in Iran lived in **cities** (World Bank / UN data)."]
    ];
    function step(i){ info.querySelector("h4").textContent = T[i][0]; setMD(info.querySelector("p"), T[i][1]);
      bars.forEach((b, k) => { const on = k <= Math.min(i, 1); b.r.setAttribute("height", on ? b.val*sc : 0); b.r.setAttribute("y", on ? base - b.val*sc : base); b.lab.setAttribute("y", base - b.val*sc - 20); b.lab.setAttribute("opacity", on ? 1 : 0); });
      pie.style.opacity = i >= 3 ? "1" : "0"; if (i) BM.sfx("tok"); }
    step(0);
    return { steps:3, step };
  };

  /* =======================================================
     10c. RECOVERY — the fallow deer and the takahē (Wed W10)
     ======================================================= */
  IX.recovery = function(host){
    const mk = (x, col, icon, title, from, fromYr, to, toYr, lines) => {
      const card = h("div", { class:"pcard", style:{ position:"absolute", left:x+"px", top:"-10px", width:"860px", height:"620px", padding:"20px 26px", boxShadow:`inset 0 8px 0 ${col}, var(--sh-3)` } });
      const num = h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"150px", color:col, lineHeight:"1" } }, String(from));
      const yr = h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"34px", letterSpacing:".1em" } }, fromYr);
      const line = setMD(h("div", { style:{ fontSize:"26px", lineHeight:"1.35", marginTop:"14px" } }), lines[0]);
      card.append(h("div", { style:{ display:"flex", gap:"16px", alignItems:"center" } }, h("div", { style:{ fontSize:"80px" } }, icon), h("div", { style:{ fontFamily:"var(--f-royal)", fontWeight:"800", fontSize:"40px" } }, title)), num, yr, line);
      host.appendChild(card);
      let tm;
      return { go(){ clearInterval(tm); let n = from; const stepN = Math.max(1, Math.round((to - from)/40)); if (!BM.motionOK()){ num.textContent = "about " + to; yr.textContent = toYr; setMD(line, lines[1]); return; } tm = setInterval(() => { n = Math.min(to, n + stepN); num.textContent = (n === to ? "about " : "") + n; if (n >= to){ clearInterval(tm); yr.textContent = toYr; setMD(line, lines[1]); BM.sfx("chime"); } }, 40); },
        reset(){ clearInterval(tm); num.textContent = String(from); yr.textContent = fromYr; setMD(line, lines[0]); }, stop(){ clearInterval(tm); } };
    };
    const deer = mk(0, "#B9770A", "🦌", "Persian fallow deer", 30, "1956", 500, "TODAY",
      ["Thought **extinct**, until about **30** were found in south-western **Iran** (Khuzestan) in **1956**.", "Breeding programmes in **Iran, Germany and Israel** brought it back: about **500** worldwide today, about **300** living wild in Israel."]);
    const tak = mk(900, "#0B7A55", "🐦", "Takahē (Aotearoa)", 0, "BEFORE 1948", 500, "2023",
      ["Thought **extinct**… until **20 November 1948**, when takahē were rediscovered in the **Murchison Mountains**, Fiordland.", "With protection, safe islands and breeding: about **500** takahē by **2023** (DOC)."]);
    function step(i){ if (i === 0){ deer.reset(); tak.reset(); } if (i === 1) deer.go(); if (i === 2) tak.go(); }
    step(0);
    return { steps:2, step, destroy(){ deer.stop(); tak.stop(); } };
  };

  /* =======================================================
     10d. THE DESIGN CYCLE — need → plan → build → test → improve (Thu W10)
     ======================================================= */
  IX.designcycle = function(host){
    const ST = [["🎯","Need","Who is it for? What do they need? (the brief)"],["📝","Plan","Sketch ideas; choose materials; decide how to test."],["🔨","Build","Make the model or program."],["🧪","Test","Test it fairly against the specifications."],["🔁","Improve","Change one thing, then test again."]];
    const W = 900, cx = 450, cy = 330, R = 230;
    const v = svg(W, 660, { style:"position:absolute;left:0;top:-10px;width:900px;height:660px" });
    host.appendChild(v);
    v.appendChild(s("circle", { cx, cy, r:R, fill:"none", stroke:"#F6D27A", "stroke-width":8, "stroke-dasharray":"18 12" }));
    v.appendChild(s("text", { x:cx, y:cy + 12, "text-anchor":"middle", "font-family":"Cinzel, serif", "font-weight":800, "font-size":38, fill:"#FBF3E0" }, "THE DESIGN"));
    v.appendChild(s("text", { x:cx, y:cy + 56, "text-anchor":"middle", "font-family":"Cinzel, serif", "font-weight":800, "font-size":38, fill:"#FBF3E0" }, "CYCLE"));
    const nodes = ST.map((st, i) => { const a = -Math.PI/2 + i*2*Math.PI/5, x = cx + Math.cos(a)*R, y = cy + Math.sin(a)*R;
      const g = s("g", { opacity:.35, style:"transition:opacity .5s" }); g.appendChild(s("circle", { cx:x, cy:y, r:78, fill:"#FBF3E0", stroke:"#C2593A", "stroke-width":6 }));
      g.appendChild(s("text", { x, y:y - 4, "text-anchor":"middle", "font-size":50 }, st[0])); g.appendChild(s("text", { x, y:y + 44, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":28, fill:"#2B1B10" }, st[1].toUpperCase()));
      v.appendChild(g); return g; });
    const info = panel({ left:"930px", right:"0", top:"-10px" }, [h("h4"), h("p")]);
    const check = h("div", { class:"pcard", style:{ position:"absolute", left:"930px", right:"0", top:"300px", padding:"16px 20px", fontSize:"24px", lineHeight:"1.45" } });
    setMD(check, "**Showcase checklist**\n☐ What was the **need**?\n☐ Does it meet the **specifications**?\n☐ What did your **tests** show?\n☐ What did you **improve**, and why?");
    host.append(info, check);
    function step(i){ nodes.forEach((n, k) => n.setAttribute("opacity", i === 0 ? .35 : k < i ? 1 : .35)); if (i === 0){ info.querySelector("h4").textContent = "Five stages"; setMD(info.querySelector("p"), "Engineers and coders work in a **cycle**: they go round more than once. Press → to walk through it."); } else { info.querySelector("h4").textContent = `${i} · ${ST[i-1][1]}`; setMD(info.querySelector("p"), ST[i-1][2]); BM.sfx("tok"); } }
    step(0);
    return { steps:5, step };
  };

  /* =======================================================
     10e. THE FORGIVENESS VOTE — what will the caravan do? (Fri W10)
     ======================================================= */
  IX.forgiveness = function(host){
    const votes = { f:0, n:0 };
    const portrait = h("div", { style:{ position:"absolute", left:"0", top:"-10px", width:"520px", height:"640px", borderRadius:"14px", overflow:"hidden", boxShadow:"var(--sh-3)", background:"#2B1B10" } });
    const pa = A.portrait("shadow"); pa.setAttribute("style", "width:100%;height:100%"); portrait.appendChild(pa);
    const im = BM.imgSlot("char-zal"); im.style.cssText += ";position:absolute;inset:0;width:100%;height:100%;object-fit:cover"; portrait.appendChild(im);
    host.appendChild(portrait);
    const mk = (k, t, col) => { const n = h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"80px" } }, "0"); const b = h("button", { class:"ixbtn", style:{ width:"100%", padding:"18px", fontSize:"30px", background:col, color:"#fff" }, onclick:(e) => { e.stopPropagation(); votes[k]++; n.textContent = votes[k]; BM.sfx("tok"); } }, t); return h("div", { class:"pcard", style:{ padding:"16px", textAlign:"center" } }, b, n); };
    const box = h("div", { style:{ position:"absolute", left:"560px", right:"0", top:"-10px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"20px" } }, mk("f", "🤝 Forgive Zal", "#0B7A55"), mk("n", "⏳ Not yet", "#8A5A0A"));
    const info = h("div", { class:"pcard", style:{ position:"absolute", left:"560px", right:"0", top:"230px", padding:"20px 24px", fontSize:"27px", lineHeight:"1.4", minHeight:"380px" } });
    host.append(box, info);
    const T = [
      "Zal sent the mocking notes, followed us, maybe stole the camel feed… because Zal's family **lost everything**. **What will the caravan do?** Talk in your teams, then vote.",
      "**Colossians 3:13:** “Bear with each other and **forgive** one another if any of you has a grievance against someone. Forgive as the Lord forgave you.”",
      "**Romans 12:20–21:** “If your enemy is hungry, feed him… Do not be overcome by evil, but **overcome evil with good**.”",
      "🟡 **Zal:** “You… forgive me? After everything? Then let me help you. I know where the last fragment is.”"
    ];
    function step(i){ setMD(info, T[i]); if (i) BM.sfx(i === 3 ? "chime" : "paper"); }
    controls(host, [btn("Clear votes", () => { votes.f = votes.n = 0; [...box.querySelectorAll(".pcard > div")].forEach(d => d.textContent = "0"); })]);
    step(0);
    return { steps:3, step };
  };

  /* =======================================================
     10f. THE SEAL'S MESSAGE — all ten fragments join (Fri W10)
     ======================================================= */
  IX.sealmessage = function(host){
    const seal = A.sealArt([1,2,3,4,5,6,7,8,9,10]);
    seal.setAttribute("style", "position:absolute;left:0;top:-10px;width:640px;height:640px");
    host.appendChild(seal);
    const msg = h("div", { style:{ position:"absolute", left:"700px", right:"0", top:"40px", fontFamily:"Fraunces, serif", fontStyle:"italic", fontSize:"56px", lineHeight:"1.25", color:"#6B3F0A", textShadow:"0 1px 0 rgba(255,240,200,.6)" } });
    const ref = h("div", { style:{ position:"absolute", left:"700px", right:"0", top:"420px", fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"32px", letterSpacing:".14em", color:"#0F7F74", opacity:"0", transition:"opacity 1s" } });
    host.append(msg, ref);
    let tm;
    const T = [
      () => { clearInterval(tm); msg.textContent = ""; ref.style.opacity = "0"; },
      () => { const full = "Seek wisdom as silver, and search for it as for hidden treasure."; clearInterval(tm); let i = 0; if (!BM.motionOK()){ msg.textContent = full; } else tm = setInterval(() => { msg.textContent = full.slice(0, ++i); if (i >= full.length) clearInterval(tm); }, 45); ref.textContent = "THE SEAL’S MESSAGE · FROM PROVERBS 2:4"; ref.style.opacity = "1"; BM.sfx("chime"); },
      () => { clearInterval(tm); msg.textContent = "“For the LORD gives wisdom; from His mouth come knowledge and understanding.”"; ref.textContent = "PROVERBS 2:6"; ref.style.opacity = "1"; BM.sfx("chime"); }
    ];
    function step(i){ T[i](); [...seal.querySelectorAll("path")].forEach(p => p.style.filter = i ? "drop-shadow(0 0 8px #F6D27A)" : "none"); }
    step(0);
    return { steps:2, step, destroy(){ clearInterval(tm); } };
  };
})(window.BM);
