/* ==========================================================
   WEEK 4 INTERACTIVES — Keepers of Time
   (also: the reusable Arduino Simulator used in Weeks 4–10)
   ========================================================== */
(function(FC){
  "use strict";
  const h = FC.h, s = FC.s, svg = FC.svg, A = FC.art, IX = FC.IX;
  const btn = (label, onclick, cls) => h("button", { class:"ixbtn " + (cls||""), onclick:(e) => { e.stopPropagation(); FC.sfx("tok"); onclick(e); } }, label);
  const panel = (w) => h("div", { class:"pcard", style:{ position:"absolute", right:"0", top:"0", width:(w||560)+"px", height:"690px", display:"flex", flexDirection:"column", gap:"14px" } });
  const ptitle = t => h("div", { style:{ fontFamily:"var(--f-display)", fontWeight:"900", fontSize:"44px", lineHeight:"1" } }, t);
  const pmsg = t => { const d = h("div", { style:{ fontSize:"26px", lineHeight:"1.3" } }); d.innerHTML = FC.md(t || ""); return d; };
  const big = (t, c) => h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"64px", lineHeight:".9", color:c || "#B3262E" } }, t);
  const darkB = b => { b.style.color = "var(--cacao-ink)"; b.style.boxShadow = "inset 0 0 0 2px rgba(90,56,37,.35)"; return b; };
  const small = b => { b.style.fontSize = "19px"; b.style.minHeight = "52px"; b.style.padding = "8px 10px"; return b; };
  const lbl = (x, y, t, c, size, anchor, extra) => s("text", Object.assign({ x, y, "text-anchor":anchor || "middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":size || 26, fill:c || "#3b2418", "letter-spacing":1.5 }, extra || {}), t);

  /* =======================================================
     MON · Maya calendar maths (GMT correlation 584283)
     ======================================================= */
  const DAYNAMES = ["Imix","Ik'","Ak'b'al","K'an","Chikchan","Kimi","Manik'","Lamat","Muluk","Ok","Chuwen","Eb'","B'en","Ix","Men","K'ib'","Kab'an","Etz'nab'","Kawak","Ajaw"];
  const MONTHS = ["Pop","Wo'","Sip","Sotz'","Sek","Xul","Yaxk'in","Mol","Ch'en","Yax","Sak'","Keh","Mak","K'ank'in","Muwan","Pax","K'ayab","Kumk'u","Wayeb'"];
  const GMT = 584283;
  const jdnOf = (y, m, d) => Math.floor(Date.UTC(y, m, d) / 86400000) + 2440588;
  const mod = (a, n) => ((a % n) + n) % n;
  FC.mayaDate = function(days){
    const lc = []; let r = days;
    [144000, 7200, 360, 20, 1].forEach(u => { lc.push(Math.floor(r / u)); r = mod(r, u); });
    const tz = { n: mod(days + 3, 13) + 1, d: mod(days + 19, 20) };
    const hy = mod(days + 348, 365);
    const hb = { d: hy % 20, m: Math.floor(hy / 20) };
    return { lc, tz, hb, tzolkin: `${tz.n} ${DAYNAMES[tz.d]}`, haab: `${hb.d} ${MONTHS[hb.m]}`, long: lc.join(".") };
  };
  const todayDays = () => { const t = new Date(); return jdnOf(t.getFullYear(), t.getMonth(), t.getDate()) - GMT; };
  const gregOf = days => { const ms = (days + GMT - 2440588) * 86400000; const d = new Date(ms); return d.toLocaleDateString("en-NZ", { timeZone:"UTC", day:"numeric", month:"long", year:"numeric" }); };

  IX.calendarround = function(host){
    const W = 1100, H = 690;
    const v = svg(W, H, { style:`position:absolute;left:0;top:0;width:${W}px;height:${H}px` });
    v.appendChild(s("rect", { width:W, height:H, rx:16, fill:"#1b1511" }));
    host.appendChild(v);
    // gear builder
    function gear(cx, cy, r, teeth, labels, col, txtCol, fs, dir){
      dir = dir || 1;
      const outer = s("g", { transform:`translate(${cx} ${cy})` });
      const rot = s("g", { style:"transition:transform .7s cubic-bezier(.3,1.3,.5,1)" });
      const path = []; const tw = Math.PI*2/teeth;
      for (let i=0;i<teeth;i++){
        const a0 = i*tw - Math.PI/2 - tw/2;
        const pts = [[r, a0 + tw*.12], [r + 26, a0 + tw*.3], [r + 26, a0 + tw*.7], [r, a0 + tw*.88]];
        pts.forEach(([rr, aa], k) => path.push(`${(i === 0 && k === 0) ? "M" : "L"}${(rr*Math.cos(aa)).toFixed(1)} ${(rr*Math.sin(aa)).toFixed(1)}`));
      }
      rot.appendChild(s("path", { d: path.join(" ") + "Z", fill:col, stroke:"#14110F", "stroke-width":3, filter:"url(#fx-paper)" }));
      rot.appendChild(s("circle", { r: labels[0].length > 2 ? r*.22 : r*.34, fill:"#14110F", opacity:.5 }));
      labels.forEach((t, i) => {
        const a = dir*i*tw - Math.PI/2;
        if (t.length <= 2){
          const rr = r - fs*1.1, x = rr*Math.cos(a), y = rr*Math.sin(a);
          rot.appendChild(s("text", { x, y, "text-anchor":"middle", "dominant-baseline":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":fs, fill:txtCol, transform:`rotate(${a*180/Math.PI + 90} ${x} ${y})` }, t));
        } else {
          // radial label reading outwards from the hub
          const rr = r - 12, x = rr*Math.cos(a), y = rr*Math.sin(a);
          rot.appendChild(s("text", { x, y, "text-anchor":"end", "dominant-baseline":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":fs, fill:txtCol, transform:`rotate(${a*180/Math.PI} ${x} ${y})` }, t));
        }
      });
      outer.appendChild(rot);
      return { outer, rot, teeth };
    }
    const g13 = gear(250, 360, 150, 13, Array.from({ length:13 }, (_, i) => String(i+1)), "#B3262E", "#F4EBD8", 34);
    const g20 = gear(730, 360, 236, 20, DAYNAMES, "#D9A23A", "#2a1a10", 26, -1);
    v.append(g13.outer, g20.outer);
    // pointers at the mesh (top) — fixed
    const pointer = (x, y) => s("path", { d:`M${x-18} ${y-34} L${x+18} ${y-34} L${x} ${y-6}Z`, fill:"#7FF3FF", filter:"url(#fx-glow)" });
    v.append(pointer(250, 360 - 150 - 30), pointer(730, 360 - 236 - 30));
    v.appendChild(lbl(250, 600, "13 NUMBERS", "#E9DCC0", 30)); v.appendChild(lbl(730, 670, "20 DAY-NAMES", "#E9DCC0", 30));
    const cntT = lbl(40, 60, "", "#7FF3FF", 28, "start"); v.appendChild(cntT);
    // panel
    const P = panel(600); host.appendChild(P);
    const tz = big("", "#B3262E"), hb = h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"40px", color:"#1F7A5A" } });
    const lc = h("div", { style:{ fontFamily:"var(--f-mono)", fontWeight:"700", fontSize:"30px", color:"#5a3825" } });
    const gd = h("div", { style:{ fontSize:"22px", opacity:".8" } });
    const msg = pmsg("");
    const row = (k, el) => h("div", null, h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"800", letterSpacing:".14em", fontSize:"17px", opacity:".7" } }, k), el);
    const grid = h("div", { style:{ marginTop:"auto", display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"8px" } });
    P.append(ptitle("Calendar Round"), gd, row("TZOLK'IN · 260 DAYS", tz), row("HAAB' · 365 DAYS", hb), row("LONG COUNT", lc), msg, grid);
    let days = todayDays(), turns13 = 0, turns20 = 0, base = days;
    function draw(note){
      const M = FC.mayaDate(days);
      const d = days - base;
      turns13 = -(mod(days + 3, 13)) * 360/13; turns20 = -(mod(days + 19, 20)) * 360/20;
      // keep rotations continuous by adding whole turns based on offset
      const k13 = Math.floor((days + 3) / 13), k20 = Math.floor((days + 19) / 20);
      g13.rot.style.transform = `rotate(${turns13 - k13*360}deg)`;
      g20.rot.style.transform = `rotate(${-(turns20 - k20*360)}deg)`;
      tz.textContent = M.tzolkin; hb.textContent = M.haab; lc.textContent = M.long; gd.textContent = gregOf(days);
      cntT.textContent = d === 0 ? "" : `${d > 0 ? "+" : ""}${d} DAYS`;
      msg.innerHTML = FC.md(note || "Each day **both** gears turn one tooth. The same pair (number + name) comes back only every **13 × 20 = 260** days.");
    }
    const b = (t, f) => grid.appendChild(small(btn(t, () => { f(); }, "")));
    b("Today", () => { days = todayDays(); base = days; draw("**Today** in the Maya calendars. Maya day-keepers in Guatemala still count the 260-day calendar today!"); });
    b("+1 day", () => { days++; draw(); });
    b("+13 days", () => { days += 13; draw("After **13** days the number is back where it started — but the day-name has moved on."); });
    b("+20 days", () => { days += 20; draw("After **20** days the day-name is back — but the number has changed."); });
    b("+260 days", () => { days += 260; draw("**260 days** later: the same Tzolk'in date again! But the Haab' date is different."); });
    b("+52 years", () => { days += 18980; draw("**18,980 days** (52 years): the Tzolk'in AND the Haab' line up again. This is the **Calendar Round** — like a ‘Maya century’."); });
    const b2 = darkB(small(btn("21 Dec 2012", () => { days = jdnOf(2012, 11, 21) - GMT; base = days; draw("**13.0.0.0.0** — 13 b'ak'tuns complete. Like a car's odometer rolling over to a new number. Not an ending — the count keeps going!"); FC.sfx("ok"); }, "dark")));
    b2.style.gridColumn = "span 2"; grid.appendChild(b2);
    const b3 = darkB(small(btn("Start date", () => { days = 0; base = 0; draw("**0.0.0.0.0** — the start of the Long Count: 4 Ajaw 8 Kumk'u, **11 August 3114 BCE**."); }, "dark")));
    grid.appendChild(b3);
    draw("**Today** in the Maya calendars. Press **+1 day** and watch both gears turn.");
    return {};
  };

  /* MON · Myth-buster evidence board */
  IX.mythboard = function(host){
    const EV = [
      { t:"The odometer", d:"21 Dec 2012 was **13.0.0.0.0** — the end of 13 b'ak'tuns. Like a car's odometer rolling from 999,999 to 1,000,000 km. The car doesn't explode!" },
      { t:"Dates after 2012", d:"An inscription at **Palenque** mentions an anniversary of King Pakal's crowning in the year **4772 CE**. The Maya expected time to keep going." },
      { t:"Only one mention", d:"Out of thousands of inscriptions, only one (**Tortuguero Monument 6**) mentions the 2012 date. It says nothing about the world ending." },
      { t:"Bigger units", d:"The Long Count has even **bigger** units than the b'ak'tun (the *piktun* = 20 b'ak'tuns). The count doesn't stop at 13." },
      { t:"Ask Maya people", d:"Many Maya people today were **frustrated** by the 2012 myth. It came from modern books and films, not their traditions." },
      { t:"Scientists checked", d:"NASA and astronomers explained there was **no planet, asteroid or alignment** heading for Earth in 2012." }
    ];
    const claim = h("div", { class:"pcard", style:{ position:"absolute", left:"0", top:"0", width:"520px", height:"690px", padding:"30px", display:"flex", flexDirection:"column", gap:"16px" } });
    const stamp = h("div", { style:{ position:"absolute", left:"60px", bottom:"90px", transform:"rotate(-14deg) scale(1.6)", opacity:"0", transition:"all .5s cubic-bezier(.3,1.5,.5,1)", fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"84px", letterSpacing:".1em", color:"#B3262E", border:"10px solid #B3262E", padding:"4px 26px", borderRadius:"12px" } }, "BUSTED");
    const meter = h("div", { style:{ height:"26px", borderRadius:"13px", background:"rgba(90,56,37,.15)", overflow:"hidden" } }, h("i", { style:{ display:"block", height:"100%", width:"0%", background:"#1F7A5A", transition:"width .5s" } }));
    claim.append(h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", letterSpacing:".16em", color:"#B3262E", fontSize:"22px" } }, "THE CLAIM"),
      h("div", { style:{ fontFamily:"var(--f-display)", fontWeight:"900", fontSize:"50px", lineHeight:"1.05" } }, "“The Maya predicted the world would end on 21 December 2012.”"),
      h("div", { style:{ fontSize:"22px", opacity:".8" } }, "Tap the evidence cards. Does the evidence support or bust the claim?"),
      h("div", { style:{ marginTop:"auto", fontFamily:"var(--f-label)", fontWeight:"800", letterSpacing:".12em", fontSize:"18px" } }, "EVIDENCE AGAINST THE CLAIM"), meter, stamp);
    host.appendChild(claim);
    let seen = 0;
    EV.forEach((e, i) => {
      const c = h("div", { class:"pcard hov", style:{ position:"absolute", left:(560 + (i%2)*610)+"px", top:(Math.floor(i/2)*236)+"px", width:"590px", height:"218px", padding:"18px 22px", cursor:"pointer", overflow:"hidden" } });
      const t = h("div", { style:{ fontFamily:"var(--f-display)", fontWeight:"900", fontSize:"34px", lineHeight:"1" } }, `${i+1}. ${e.t}`);
      const d = h("div", { style:{ fontSize:"23px", lineHeight:"1.25", marginTop:"10px", display:"none" } }); d.innerHTML = FC.md(e.d);
      const q = h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"60px", color:"#B3262E", opacity:".35", marginTop:"14px" } }, "?");
      c.append(t, q, d);
      c.addEventListener("click", ev => { ev.stopPropagation(); if (d.style.display === "block") return; d.style.display = "block"; q.remove(); seen++; FC.sfx("paper");
        meter.firstChild.style.width = (seen / EV.length * 100) + "%";
        if (seen === EV.length){ stamp.style.opacity = "1"; stamp.style.transform = "rotate(-14deg) scale(1)"; FC.sfx("ok"); } });
      host.appendChild(c);
    });
    return {};
  };

  /* =======================================================
     TUE · Rainforest layer explorer
     ======================================================= */
  IX.layers = function(host){
    const L = [
      { k:"EMERGENT", y0:40, y1:170, light:"100%", hT:"45–60 m", hN:"40–60 m",
        tro:"Giant trees poke above the rest. **Harpy eagles** nest here; **scarlet macaws** fly over. Hot sun, strong wind.",
        nz:"**Kahikatea** (our tallest native tree, up to about 60 m) and **rimu** tower above the forest. **Kārearea** (NZ falcon) hunt from above." },
      { k:"CANOPY", y0:170, y1:330, light:"most light caught here", hT:"25–45 m", hN:"15–30 m",
        tro:"A thick ‘roof’ of leaves. Most animals live here: **howler & spider monkeys**, **toucans**, **sloths**. Fruit and flowers everywhere.",
        nz:"**Rātā**, **tawa**, **kāmahi** and **beech**. **Kererū**, **tūī** and **kākā** feed on fruit, nectar and seeds." },
      { k:"UNDERSTOREY", y0:330, y1:500, light:"about 5%", hT:"up to 15 m", hN:"up to 10 m",
        tro:"Dim and humid. Big leaves catch the little light. **Red-eyed tree frogs**, **ocelots**, butterflies and snakes.",
        nz:"**Tree ferns** (ponga, mamaku), **kiekie** and **coprosma**. **Ruru** (morepork) and **pīwakawaka** (fantail)." },
      { k:"FOREST FLOOR", y0:500, y1:660, light:"about 2%", hT:"ground", hN:"ground",
        tro:"Dark, with fast-rotting leaves. **Jaguars**, **tapirs**, **leafcutter ants** — and the **ocellated turkey** in the Petén.",
        nz:"Cool and mossy with ferns, fungi and deep leaf litter. **Kiwi**, **wētā** and **giant land snails** (pūpūrangi)." }
    ];
    let mode = "tro", sel = -1;
    const W = 1100, H = 690;
    const v = svg(W, H, { style:`position:absolute;left:0;top:0;width:${W}px;height:${H}px` });
    host.appendChild(v);
    const scene = s("g"); v.appendChild(scene);
    const bands = s("g"); v.appendChild(bands);
    const P = panel(600); host.appendChild(P);
    const kk = h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"22px", letterSpacing:".14em", color:"#1F7A5A" } });
    const tt = ptitle("Rainforest layers"), facts = h("div", { style:{ display:"flex", gap:"10px", flexWrap:"wrap" } }), msg = pmsg("Tap a layer. Start at the top — in the **emergent** layer!");
    const chip = (t) => h("span", { style:{ fontFamily:"var(--f-label)", fontWeight:"800", fontSize:"20px", letterSpacing:".08em", padding:"6px 12px", borderRadius:"8px", background:"rgba(31,122,90,.14)" } }, t);
    const sw = h("div", { style:{ marginTop:"auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px" } });
    const bT = small(btn("🌎 Tropical · Petén & Amazon", () => setMode("tro"), "on")), bN = small(btn("🌿 Temperate · Te Waipounamu", () => setMode("nz"), ""));
    sw.append(bT, bN);
    P.append(kk, tt, facts, msg, sw);
    function tree(x, base, top, w, col, kind){
      const g = s("g", { filter:"url(#fx-paper)" });
      g.appendChild(s("rect", { x:x - w*.06, y:top + 20, width:w*.12, height:base - top - 20, fill: mode === "tro" ? "#4a3222" : "#3b2a1e" }));
      if (kind === "fern"){
        for (let i=0;i<7;i++){ const a = -80 + i*27; g.appendChild(s("path", { d:`M${x} ${top+20} q${Math.cos(a*Math.PI/180)*w*.5} ${-30} ${Math.cos(a*Math.PI/180)*w*.9} ${20 + Math.abs(i-3)*12}`, stroke:col, "stroke-width":12, fill:"none", "stroke-linecap":"round" })); }
      } else {
        const n = 4; for (let i=0;i<n;i++) g.appendChild(s("ellipse", { cx:x + (i - (n-1)/2)*w*.28, cy:top + 30 + (i%2)*18, rx:w*.32, ry:w*.2, fill:col }));
        g.appendChild(s("ellipse", { cx:x, cy:top + 10, rx:w*.3, ry:w*.18, fill:col }));
      }
      return g;
    }
    function drawScene(){
      FC.clear(scene);
      const tro = mode === "tro";
      scene.appendChild(s("rect", { width:W, height:H, rx:16, fill: tro ? "#173826" : "#14302a" }));
      scene.appendChild(s("rect", { width:W, height:200, rx:16, fill: tro ? "#e8b86a" : "#9fc0c8", opacity:.55 }));
      scene.appendChild(s("rect", { y:640, width:W, height:50, fill: tro ? "#3b2a1a" : "#2b3a22" }));
      // floor plants
      for (let i=0;i<14;i++) scene.appendChild(A.leaf(30 + i*80, 650, 60, -90 + (i%3-1)*25, 18, tro ? "#2f6b3a" : "#4f7a3a", { rib:false }));
      // understorey
      [[120,560],[330,580],[560,560],[800,575],[1000,565]].forEach(([x, b]) => scene.appendChild(tree(x, b + 80, b - 170, 150, tro ? "#2c7a45" : "#3f7a52", tro ? "tree" : "fern")));
      // canopy
      for (let i=0;i<7;i++) scene.appendChild(tree(80 + i*160, 660, 210 + (i%2)*20, 230, tro ? "#1f5e36" : "#2d5e44", "tree"));
      // emergent
      [[250, 70],[760, 55]].forEach(([x, t]) => scene.appendChild(tree(x, 660, t, 260, tro ? "#3d8a4a" : "#56786a", "tree")));
      scene.appendChild(lbl(W - 30, 50, tro ? "PETÉN · AMAZON (TROPICAL)" : "TE WAIPOUNAMU (TEMPERATE)", "#F4EBD8", 28, "end"));
    }
    function drawBands(){
      FC.clear(bands);
      L.forEach((l, i) => {
        const on = i === sel;
        const r = s("rect", { x:0, y:l.y0, width:W, height:l.y1 - l.y0, fill: on ? "rgba(127,243,255,.16)" : "rgba(0,0,0,0)", stroke: on ? "#7FF3FF" : "rgba(244,235,216,.25)", "stroke-width": on ? 4 : 2, "stroke-dasharray": on ? "" : "10 8", style:"cursor:pointer" });
        r.addEventListener("click", e => { e.stopPropagation(); sel = i; FC.sfx("paper"); drawBands(); show(); });
        bands.appendChild(r);
        const tag = s("g", { style:"pointer-events:none" });
        tag.appendChild(s("rect", { x:14, y:l.y0 + 12, width:230, height:40, rx:8, fill: on ? "#7FF3FF" : "rgba(20,17,15,.75)" }));
        tag.appendChild(lbl(28, l.y0 + 41, l.k, on ? "#14110F" : "#F4EBD8", 26, "start"));
        bands.appendChild(tag);
      });
    }
    function show(){
      if (sel < 0) return;
      const l = L[sel];
      kk.textContent = `LAYER ${sel+1} OF 4`; tt.textContent = l.k.charAt(0) + l.k.slice(1).toLowerCase();
      FC.clear(facts); facts.append(chip(`☀ light: ${l.light}`), chip(`↕ ${mode === "tro" ? l.hT : l.hN}`));
      msg.innerHTML = FC.md(mode === "tro" ? l.tro : l.nz);
    }
    function setMode(m){ mode = m; bT.classList.toggle("on", m === "tro"); bN.classList.toggle("on", m === "nz"); drawScene(); drawBands(); show(); FC.sfx("paper"); }
    drawScene(); drawBands();
    return {};
  };

  /* TUE · Climate graph comparison */
  IX.climate = function(host){
    const MON = ["J","F","M","A","M","J","J","A","S","O","N","D"];
    const C = {
      manaus:{ n:"Manaus (Amazon, Brazil)", col:"#D9A23A", t:[26.5,26.4,26.5,26.6,26.8,26.9,27.0,27.8,28.3,28.2,27.8,27.1], r:[286,285,304,287,238,117,72,52,81,113,167,228] },
      hoki:{ n:"Hokitika (West Coast, NZ)", col:"#2E9FB0", t:[15.7,16.0,14.8,12.5,10.1,8.0,7.4,8.3,9.9,11.3,12.7,14.6], r:[255,190,230,240,255,245,220,245,240,280,245,270] }
    };
    let show = { manaus:true, hoki:false };
    const W = 1100, H = 690, x0 = 110, x1 = 1000, y0 = 600, y1 = 90;
    const v = svg(W, H, { style:`position:absolute;left:0;top:0;width:${W}px;height:${H}px` });
    host.appendChild(v);
    const P = panel(600); host.appendChild(P);
    const msg = pmsg("");
    const stats = h("div", { style:{ display:"grid", gap:"10px" } });
    const grid = h("div", { style:{ marginTop:"auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px" } });
    const bM = small(btn("🟧 Manaus", () => { show.manaus = !show.manaus; bM.classList.toggle("on", show.manaus); draw(); }, "on"));
    const bH = small(btn("🟦 Hokitika", () => { show.hoki = !show.hoki; bH.classList.toggle("on", show.hoki); draw(); }, ""));
    grid.append(bM, bH);
    P.append(ptitle("Climate graphs"), stats, msg, grid);
    const RMAX = 350, TMAX = 35;
    const X = i => x0 + (i + .5) * (x1 - x0) / 12;
    const YR = r => y0 - r / RMAX * (y0 - y1), YT = t => y0 - t / TMAX * (y0 - y1);
    function draw(){
      FC.clear(v);
      v.appendChild(s("rect", { width:W, height:H, rx:16, fill:"#efe3c6" }));
      for (let r=0;r<=RMAX;r+=50){ v.appendChild(s("line", { x1:x0, x2:x1, y1:YR(r), y2:YR(r), stroke:"rgba(90,56,37,.15)", "stroke-width":2 })); v.appendChild(lbl(x0 - 12, YR(r) + 8, String(r), "#2E6FB0", 20, "end")); }
      for (let t=0;t<=TMAX;t+=5) v.appendChild(lbl(x1 + 14, YT(t) + 8, t + "°", "#B3262E", 20, "start"));
      v.appendChild(lbl(x0 - 12, 60, "RAIN (mm)", "#2E6FB0", 22, "end")); v.appendChild(lbl(x1 + 60, 60, "TEMP (°C)", "#B3262E", 22, "end"));
      MON.forEach((m, i) => v.appendChild(lbl(X(i), y0 + 34, m, "#3b2418", 24)));
      const keys = Object.keys(C).filter(k => show[k]);
      const bw = (x1 - x0) / 12 * .72 / Math.max(1, keys.length);
      keys.forEach((k, ki) => {
        const c = C[k];
        c.r.forEach((r, i) => { const x = X(i) - bw*keys.length/2 + ki*bw; const bar = s("rect", { x, y:y0, width:bw - 4, height:0, fill:c.col, opacity:.85, rx:3 }); v.appendChild(bar);
          bar.setAttribute("y", YR(r)); bar.setAttribute("height", y0 - YR(r));
          if (FC.motionOK()){ bar.style.transformBox = "fill-box"; bar.style.transformOrigin = "50% 100%"; bar.animate([{ transform:"scaleY(0)" }, { transform:"scaleY(1)" }], { duration:600, delay:i*35, easing:"cubic-bezier(.3,1.2,.5,1)", fill:"backwards" }); } });
      });
      keys.forEach(k => {
        const c = C[k];
        const d = c.t.map((t, i) => `${i ? "L" : "M"}${X(i)} ${YT(t)}`).join(" ");
        v.appendChild(s("path", { d, fill:"none", stroke:"#14110F", "stroke-width":9, "stroke-linejoin":"round", opacity:.25 }));
        v.appendChild(s("path", { d, fill:"none", stroke: k === "manaus" ? "#B3262E" : "#1F4F8A", "stroke-width":6, "stroke-linejoin":"round" }));
        c.t.forEach((t, i) => v.appendChild(s("circle", { cx:X(i), cy:YT(t), r:7, fill:"#F4EBD8", stroke: k === "manaus" ? "#B3262E" : "#1F4F8A", "stroke-width":4 })));
      });
      v.appendChild(s("line", { x1:x0, x2:x1, y1:y0, y2:y0, stroke:"#3b2418", "stroke-width":3 }));
      v.appendChild(lbl(W/2, H - 18, "Approximate long-term monthly averages", "#5a3825", 20));
      FC.clear(stats);
      keys.forEach(k => { const c = C[k]; const tot = c.r.reduce((a, b) => a + b, 0), lo = Math.min(...c.t), hi = Math.max(...c.t);
        stats.appendChild(h("div", { style:{ padding:"10px 14px", borderRadius:"10px", borderLeft:`8px solid ${c.col}`, background:"rgba(90,56,37,.08)" } },
          h("div", { style:{ fontFamily:"var(--f-display)", fontWeight:"900", fontSize:"26px" } }, c.n),
          h("div", { style:{ fontSize:"22px" } }, `Rain ≈ ${tot.toLocaleString()} mm a year · Temp ${lo}–${hi} °C`))); });
      msg.innerHTML = FC.md(keys.length === 2 ? "Both are **rainforests** — lots of rain all year. But Manaus is **hot all year** (tropical) while Hokitika is **cool** and changes with the seasons (temperate). Surprise: Hokitika gets **more** rain!" :
        keys[0] === "manaus" ? "**Tropical**: hot every month (about 26–28 °C) and very wet, with a drier season mid-year. Now add Hokitika and **compare**." :
        keys[0] === "hoki" ? "**Temperate**: cool winters and mild summers, with rain spread through the whole year." : "Choose a place.");
    }
    draw();
    return {};
  };

  /* =======================================================
     WED · Conductor tester (8 materials → 3 conduct)
     ======================================================= */
  IX.conductor = function(host){
    const M = [
      { n:"Copper wire", c:true, e:"🟠", why:"A **metal**. Its electrons can move freely — perfect for wires. Chile mines more copper than any other country." },
      { n:"Gold ring", c:true, e:"💍", why:"A **metal** and an excellent conductor. Phones use tiny bits of gold in their connectors." },
      { n:"Iron nail", c:true, e:"🔩", why:"A **metal** — it conducts, though not as well as copper." },
      { n:"Rubber ball", c:false, e:"⚫", why:"Rubber is an **insulator**. Mesoamericans made rubber over 3,000 years ago!" },
      { n:"Jade bead", c:false, e:"🟢", why:"A stone (mineral). Stones are usually **insulators**." },
      { n:"Obsidian", c:false, e:"⬛", why:"Volcanic **glass** — glass is an insulator." },
      { n:"Cacao bean", c:false, e:"🫘", why:"A dry seed — an **insulator** (but worth a lot of money to the Aztecs!)." },
      { n:"Wooden stick", c:false, e:"🪵", why:"Dry wood is an **insulator**." }
    ];
    const W = 1100, H = 690;
    const v = svg(W, H, { style:`position:absolute;left:0;top:0;width:${W}px;height:${H}px` });
    host.appendChild(v);
    v.appendChild(s("rect", { width:W, height:H, rx:16, fill:"#1b2124" }));
    // circuit: battery left, bulb top, gap bottom
    const wire = d => v.appendChild(s("path", { d, stroke:"#C46A3A", "stroke-width":10, fill:"none", "stroke-linecap":"round", "stroke-linejoin":"round" }));
    wire("M150 330 V120 H500"); wire("M600 120 H900 V400 H660"); wire("M150 390 V400 H440");
    v.appendChild(s("rect", { x:110, y:300, width:80, height:120, rx:12, fill:"#2A2420", stroke:"#D9A23A", "stroke-width":4 }));
    v.appendChild(s("rect", { x:132, y:288, width:36, height:14, fill:"#D9A23A" }));
    v.appendChild(lbl(150, 372, "3V", "#F0C25E", 30));
    const glow = s("circle", { cx:550, cy:120, r:150, fill:"url(#g-lamp)", opacity:0, style:"transition:opacity .3s" });
    v.appendChild(glow);
    const bulb = s("circle", { cx:550, cy:120, r:50, fill:"#5a5a50", stroke:"#E9DCC0", "stroke-width":5, style:"transition:fill .3s" }); v.appendChild(bulb);
    v.appendChild(s("path", { d:"M530 128 q10 -26 20 0 q10 26 20 0", stroke:"#2a2a24", "stroke-width":4, fill:"none" }));
    // clips
    const clip = x => { v.appendChild(s("path", { d:`M${x} 386 l0 28 l${x < 550 ? 22 : -22} 0`, stroke:"#9aa", "stroke-width":8, fill:"none" })); };
    clip(440); clip(660);
    v.appendChild(lbl(550, 470, "TEST GAP", "#7FF3FF", 26));
    const slot = s("g"); v.appendChild(slot);
    const res = lbl(550, 250, "", "#F4EBD8", 44); v.appendChild(res);
    // tray
    const tray = h("div", { style:{ position:"absolute", left:"20px", top:"500px", width:"1060px", display:"grid", gridTemplateColumns:"repeat(8,1fr)", gap:"8px" } });
    host.appendChild(tray);
    const P = panel(600); host.appendChild(P);
    const count = big("0 / 8", "#1F7A5A"), msg = pmsg("Tap a material to put it in the **test gap**. Predict first: will the bulb light?");
    const table = h("div", { style:{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"6px 14px", fontSize:"22px" } });
    const rows = M.map(m => { const r = h("div", { style:{ opacity:".45" } }, `${m.e} ${m.n} · ?`); table.appendChild(r); return r; });
    const cl = darkB(small(btn("Reset", () => { tested.clear(); rows.forEach((r, i) => { r.textContent = `${M[i].e} ${M[i].n} · ?`; r.style.opacity = ".45"; r.style.fontWeight = ""; }); FC.clear(slot); res.textContent = ""; bulb.setAttribute("fill", "#5a5a50"); glow.setAttribute("opacity", 0); count.textContent = "0 / 8"; msg.innerHTML = FC.md("Tap a material to put it in the **test gap**."); }, "dark")));
    cl.style.marginTop = "auto";
    P.append(ptitle("Conductor tester"), h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"800", letterSpacing:".12em", fontSize:"18px", opacity:".7" } }, "CONDUCTORS FOUND"), count, table, msg, cl);
    const tested = new Set();
    M.forEach((m, i) => {
      const b = h("button", { class:"pcard hov", style:{ border:"0", cursor:"pointer", padding:"10px 4px", display:"flex", flexDirection:"column", alignItems:"center", gap:"6px", font:"inherit" } }, h("span", { style:{ fontSize:"50px", lineHeight:"1" } }, m.e), h("span", { style:{ fontSize:"18px", fontWeight:"700", lineHeight:"1.05", textAlign:"center" } }, m.n));
      b.addEventListener("click", e => { e.stopPropagation(); test(i); });
      tray.appendChild(b);
    });
    function test(i){
      const m = M[i];
      FC.clear(slot);
      const item = s("g", { transform:"translate(550 400)" });
      item.appendChild(s("rect", { x:-110, y:-22, width:220, height:44, rx:10, fill: m.c ? "#C9A06A" : "#5a4a3a", stroke:"#14110F", "stroke-width":3 }));
      item.appendChild(lbl(0, 9, m.n.toUpperCase(), "#F4EBD8", 22));
      slot.appendChild(item);
      item.animate([{ transform:"translate(550px, 560px)", opacity:0 }, { transform:"translate(550px, 400px)", opacity:1 }], { duration:350, easing:"cubic-bezier(.3,1.3,.5,1)" });
      setTimeout(() => {
        bulb.setAttribute("fill", m.c ? "#FFE28A" : "#5a5a50"); glow.setAttribute("opacity", m.c ? 1 : 0);
        res.textContent = m.c ? "CONDUCTOR ✓" : "INSULATOR ✗"; res.setAttribute("fill", m.c ? "#7FF3FF" : "#F08A8A");
        FC.sfx(m.c ? "ok" : "no");
        tested.add(i); rows[i].textContent = `${m.e} ${m.n} · ${m.c ? "✓ conducts" : "✗ insulates"}`; rows[i].style.opacity = "1"; rows[i].style.fontWeight = m.c ? "800" : "";
        count.textContent = `${[...tested].filter(k => M[k].c).length} / ${tested.size}`;
        msg.innerHTML = FC.md(m.why + (tested.size === 8 ? " — **All 8 tested!** What do the conductors have in common?" : ""));
      }, 380);
    }
    return {};
  };

  /* =======================================================
     THU · Arduino simulator (reusable W4–W10)
     cfg: { leds:[{pin,color,label}], program:[{op:"on"|"off",pin}|{op:"wait",ms}], bug, title, edit }
     ======================================================= */
  IX.arduino = function(host, cfg){
    cfg = cfg || {};
    const LEDS = cfg.leds || [{ pin:13, color:"#FF5A5F", label:"LED" }];
    const BTN = cfg.button || null; // { pin, label }
    const PZ = cfg.piezo || null; // { pin, label }
    const LDR = cfg.ldr || null; // { pin:"A0", label }
    let ldrVal = LDR ? (LDR.start != null ? LDR.start : 200) : 0;
    const DEF = [{ op:"on", pin:13 }, { op:"wait", ms:1000 }, { op:"off", pin:13 }, { op:"wait", ms:1000 }];
    let prog = JSON.parse(JSON.stringify(cfg.program || DEF));
    const W = 1100;
    const v = svg(W, 360, { style:`position:absolute;left:0;top:0;width:${W}px;height:360px` });
    host.appendChild(v);
    v.appendChild(s("rect", { width:W, height:360, rx:16, fill:"#1b2124" }));
    // board
    const bx = 40, by = 40;
    v.appendChild(s("rect", { x:bx, y:by, width:520, height:290, rx:18, fill:"#0f6f8a", stroke:"#0a4a5c", "stroke-width":6 }));
    v.appendChild(s("rect", { x:bx - 20, y:by + 40, width:70, height:80, rx:6, fill:"#9aa4a8" }));
    v.appendChild(s("rect", { x:bx - 14, y:by + 190, width:60, height:70, rx:8, fill:"#2a2a2a" }));
    v.appendChild(s("rect", { x:bx + 200, y:by + 120, width:200, height:60, rx:6, fill:"#1a1a1a" }));
    v.appendChild(lbl(bx + 300, by + 160, "ATMEGA328P", "#9aa4a8", 20));
    for (let i=0;i<14;i++){ v.appendChild(s("rect", { x:bx + 150 + i*24, y:by + 12, width:16, height:22, fill:"#111" })); v.appendChild(lbl(bx + 158 + i*24, by + 52, String(13 - i), "#cfe", 13)); }
    v.appendChild(lbl(bx + 300, by + 250, "MICROCONTROLLER", "#cfe", 26));
    v.appendChild(lbl(bx + 300, by + 280, "the brain that follows your code", "#cfe", 18));
    const onboard = s("circle", { cx:bx + 120, cy:by + 80, r:9, fill:"#4a2a10" }); v.appendChild(onboard); v.appendChild(lbl(bx + 120, by + 106, "L", "#cfe", 16));
    // breadboard
    v.appendChild(s("rect", { x:620, y:60, width:440, height:250, rx:12, fill:"#e9e4d8" }));
    for (let r=0;r<8;r++) for (let c=0;c<16;c++) v.appendChild(s("rect", { x:640 + c*26, y:90 + r*26, width:8, height:8, fill:"#bbb" }));
    const ledEls = {};
    const span = (BTN || LDR) ? 200 : 300, x0 = (BTN || LDR) ? 660 : 690;
    LEDS.forEach((L, i) => {
      const x = LEDS.length === 1 ? ((BTN || LDR) ? 720 : 840) : x0 + i * (span / (LEDS.length - 1)), y = 170;
      const pinX = bx + 158 + (13 - L.pin)*24;
      v.appendChild(s("path", { d:`M${pinX} ${by + 12} V ${20 + i*6} H ${x} V ${y + 40}`, stroke:L.color, "stroke-width":5, fill:"none", opacity:.8 }));
      const glow = s("circle", { cx:x, cy:y, r:90, fill:"url(#g-lamp)", opacity:0 });
      const body = s("path", { d:`M${x-26} ${y+30} V${y-6} a26 26 0 0 1 52 0 V${y+30}Z`, fill:L.color, opacity:.35, stroke:"#14110F", "stroke-width":3 });
      v.append(glow, body, lbl(x, y + 70, L.label || ("PIN " + L.pin), "#3b2418", 22));
      ledEls[L.pin] = { glow, body };
    });
    let pzEl = null;
    if (PZ){
      const x = LEDS.length ? 960 : 840, y = 170, pinX = bx + 158 + (13 - PZ.pin)*24;
      v.appendChild(s("path", { d:`M${pinX} ${by + 12} V 26 H ${x} V ${y - 46}`, stroke:"#D9A23A", "stroke-width":5, fill:"none", opacity:.8 }));
      pzEl = s("g"); pzEl.appendChild(s("circle", { cx:x, cy:y, r:46, fill:"#1a1a1a", stroke:"#14110F", "stroke-width":4 })); pzEl.appendChild(s("circle", { cx:x, cy:y, r:10, fill:"#444" }));
      v.appendChild(pzEl); v.appendChild(lbl(x, y + 74, PZ.label || "PIEZO", "#3b2418", 22));
      for (let i=0;i<3;i++){ const w = s("path", { d:`M${x + 56 + i*16} ${y - 26 - i*6} q14 ${26 + i*6} 0 ${52 + i*12}`, stroke:"#D9A23A", "stroke-width":5, fill:"none", opacity:0, "class":"pzw" }); v.appendChild(w); }
    }
    let ldrRead = null;
    if (LDR){
      const x = 960, y = 150;
      v.appendChild(s("path", { d:`M${bx + 470} ${by + 290} V 340 H ${x} V ${y + 30}`, stroke:"#8B5BA8", "stroke-width":5, fill:"none", opacity:.8 }));
      v.appendChild(s("circle", { cx:x, cy:y, r:26, fill:"#e8d070", stroke:"#14110F", "stroke-width":3 }));
      v.appendChild(s("path", { d:`M${x-16} ${y-8} h8 v16 h8 v-16 h8 v16 h8`, stroke:"#B3262E", "stroke-width":3, fill:"none" }));
      v.appendChild(lbl(x, y + 52, LDR.label || "LIGHT SENSOR", "#3b2418", 20));
      ldrRead = lbl(x, y + 84, "", "#8B5BA8", 26); v.appendChild(ldrRead);
      const sl = h("input", { type:"range", min:0, max:1023, value:ldrVal, style:{ position:"absolute", left:"860px", top:"290px", width:"200px", accentColor:"#D9A23A" } });
      ["pointerdown","click","keydown","input"].forEach(ev => sl.addEventListener(ev, e => e.stopPropagation()));
      sl.addEventListener("input", () => { ldrVal = +sl.value; ldrRead.textContent = `reads ${ldrVal}`; });
      host.appendChild(sl);
      host.appendChild(h("div", { style:{ position:"absolute", left:"860px", top:"262px", width:"200px", textAlign:"center", fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"16px", color:"#3b2418" } }, "🌑 dark  ·  LIGHT  ·  bright ☀️"));
      ldrRead.textContent = `reads ${ldrVal}`;
    }
    let btnDown = false;
    if (BTN){
      const x = 960, y = 170, pinX = bx + 158 + (13 - BTN.pin)*24;
      v.appendChild(s("path", { d:`M${pinX} ${by + 12} V 14 H ${x} V ${y - 40}`, stroke:"#2E9FB0", "stroke-width":5, fill:"none", opacity:.8 }));
      const bg = s("g", { style:"cursor:pointer" });
      bg.appendChild(s("rect", { x:x - 50, y:y - 40, width:100, height:80, rx:10, fill:"#2a2a2a" }));
      const cap = s("circle", { cx:x, cy:y, r:28, fill:"#B3262E", stroke:"#14110F", "stroke-width":4, style:"transition:transform .08s" });
      bg.appendChild(cap); bg.appendChild(lbl(x, y + 72, BTN.label || "BUTTON", "#3b2418", 22));
      const set = d => { btnDown = d; cap.setAttribute("fill", d ? "#7FF3FF" : "#B3262E"); cap.setAttribute("r", d ? 24 : 28); };
      bg.addEventListener("pointerdown", e => { e.stopPropagation(); bg.setPointerCapture(e.pointerId); set(true); FC.sfx("tok"); });
      bg.addEventListener("pointerup", e => { e.stopPropagation(); set(false); });
      bg.addEventListener("pointercancel", () => set(false));
      bg.addEventListener("click", e => e.stopPropagation());
      v.appendChild(bg);
      v.appendChild(lbl(x, 44, "HOLD ME", "#7FF3FF", 18));
    }
    // code view
    const code = h("div", { style:{ position:"absolute", left:"0", top:"376px", width:"1100px", height:"314px", borderRadius:"14px", background:"#0f1416", color:"#cfe", fontFamily:"var(--f-mono)", fontSize:"24px", lineHeight:"1.32", padding:"14px 22px", overflow:"hidden", boxShadow:"inset 0 0 0 2px rgba(127,243,255,.2)" } });
    host.appendChild(code);
    // panel
    const P = panel(600); host.appendChild(P);
    const status = h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"900", fontSize:"30px", letterSpacing:".08em" } }, "■ STOPPED");
    const blocks = h("div", { style:{ display:"flex", flexDirection:"column", gap:"8px", overflow:"auto", maxHeight:"350px" } });
    const ctr = h("div", { style:{ marginTop:"auto", display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"8px" } });
    P.append(ptitle(cfg.title || "Arduino simulator"), status, h("div", { style:{ fontFamily:"var(--f-label)", fontWeight:"800", letterSpacing:".12em", fontSize:"17px", opacity:".7" } }, "LOOP() · REPEATS FOREVER"), blocks, ctr);
    const pinState = {}; LEDS.forEach(L => pinState[L.pin] = false);
    let cur = null, it = null, timer = null, running = false, slow = false, loops = 0, steps = 0;
    const ledName = pin => (LEDS.find(L => L.pin === pin) || {}).label || "LED";
    const nice = o => o.op === "tone" ? `🎵 ${o.hz}Hz · ${o.ms}ms` : o.op === "wait" ? `⏳ Wait ${o.ms} ms` : o.op === "if" ? (o.sensor ? `❓ IF light > ${o.gt}…` : `❓ IF ${(BTN && BTN.label) || "button"} is pressed…`) : `💡 Turn ${ledName(o.pin)} ${o.op === "on" ? "ON" : "OFF"}`;
    const cLine = o => o.op === "tone" ? `tone(${o.pin}, ${o.hz}, ${o.ms}); delay(${o.ms});` : o.op === "wait" ? `delay(${o.ms});` : o.op === "if" ? (o.sensor ? `if (analogRead(${o.sensor}) > ${o.gt}) {` : `if (digitalRead(${o.pin}) == HIGH) {`) : `digitalWrite(${o.pin}, ${o.op === "on" ? "HIGH" : "LOW"});`;
    function* gen(ops){ for (const o of ops){ yield o; if (o.op === "if"){ const c = o.sensor ? ldrVal > o.gt : btnDown; yield* gen(c ? (o.then || []) : (o.els || [])); } } }
    function renderCode(){
      const lines = [["void setup() {", null]];
      LEDS.forEach(L => lines.push([`  pinMode(${L.pin}, OUTPUT);`, null]));
      if (BTN) lines.push([`  pinMode(${BTN.pin}, INPUT);`, null]);
      if (PZ) lines.push([`  pinMode(${PZ.pin}, OUTPUT);`, null]);
      lines.push(["}", null], ["void loop() {", null]);
      const walk = (ops, ind) => ops.forEach(o => { lines.push([ind + cLine(o), o]); if (o.op === "if"){ walk(o.then || [], ind + "  "); lines.push([ind + "} else {", null]); walk(o.els || [], ind + "  "); lines.push([ind + "}", null]); } });
      walk(prog, "  ");
      lines.push(["}", null]);
      const fs = Math.max(17, Math.min(24, Math.floor(286 / lines.length / 1.32)));
      code.style.fontSize = fs + "px";
      code.innerHTML = ""; let curEl = null;
      lines.forEach(([t, o]) => {
        const on = o && o === cur;
        const ln = h("div", { style:{ whiteSpace:"pre", padding:"0 10px", borderRadius:"6px", background: on ? "rgba(127,243,255,.22)" : "transparent", color: on ? "#fff" : (/^(void|\})/.test(t.trim()) || t.trim().startsWith("} else") ? "#F0C25E" : "#cfe") } }, t);
        if (on) curEl = ln; code.appendChild(ln);
      });
      if (curEl) code.scrollTop = Math.max(0, curEl.offsetTop - 120); else code.scrollTop = 0;
    }
    function renderBlocks(){
      FC.clear(blocks); let curEl = null;
      const row = (o, i, list, depth) => {
        const on = o === cur;
        const r = h("div", { style:{ display:"flex", alignItems:"center", gap:"8px", padding:"8px 12px", marginLeft:(depth*28)+"px", borderRadius:"10px", fontSize:"22px", fontWeight:"700", background: o.op === "wait" ? "rgba(217,162,58,.25)" : o.op === "tone" ? "rgba(179,38,46,.16)" : o.op === "if" ? "rgba(46,159,176,.22)" : "rgba(31,122,90,.18)", outline: on ? "4px solid #2E9FB0" : "none" } });
        r.appendChild(h("span", { style:{ flex:"1" } }, nice(o)));
        const mini = (t, f) => { const b = h("button", { class:"ixbtn", style:{ minHeight:"40px", padding:"2px 10px", fontSize:"18px" }, onclick:(e) => { e.stopPropagation(); f(); render(); FC.sfx("tok"); } }, t); r.appendChild(b); };
        if (o.op === "if" && o.sensor && cfg.edit !== false){ mini("−50", () => o.gt = Math.max(0, o.gt - 50)); mini("+50", () => o.gt = Math.min(1000, o.gt + 50)); }
        if (o.op === "tone" && cfg.edit !== false){ mini("♪−", () => o.hz = Math.max(110, Math.round(o.hz / 1.122))); mini("♪+", () => o.hz = Math.min(2000, Math.round(o.hz * 1.122))); }
        if ((o.op === "wait" || o.op === "tone") && cfg.edit !== false){ mini("−", () => o.ms = Math.max(100, o.ms - (o.ms > 500 ? 250 : 100))); mini("+", () => o.ms = Math.min(5000, o.ms + (o.ms >= 500 ? 250 : 100))); }
        if (cfg.edit !== false && depth === 0){ mini("↑", () => { if (i > 0){ [list[i-1], list[i]] = [list[i], list[i-1]]; } }); mini("✕", () => list.splice(i, 1)); }
        if (on) curEl = r;
        blocks.appendChild(r);
        if (o.op === "if"){
          (o.then || []).forEach((c, k) => row(c, k, o.then, depth + 1));
          blocks.appendChild(h("div", { style:{ marginLeft:(depth*28)+"px", fontFamily:"var(--f-label)", fontWeight:"900", letterSpacing:".12em", fontSize:"18px", color:"#2E6FB0" } }, o.sensor ? "ELSE (darker)…" : "ELSE (not pressed)…"));
          (o.els || []).forEach((c, k) => row(c, k, o.els, depth + 1));
        }
      };
      prog.forEach((o, i) => row(o, i, prog, 0));
      if (curEl) blocks.scrollTop = Math.max(0, curEl.offsetTop - blocks.offsetTop - 120);
    }
    function render(){ renderCode(); renderBlocks(); }
    function paintLeds(){
      LEDS.forEach(L => { const e = ledEls[L.pin], on = pinState[L.pin]; e.glow.setAttribute("opacity", on ? 1 : 0); e.body.setAttribute("opacity", on ? 1 : .35); if (L.pin === 13) onboard.setAttribute("fill", on ? "#FFB347" : "#4a2a10"); });
    }
    function exec(){
      if (!prog.length) return 0;
      if (!it){ it = gen(prog); loops++; }
      let n = it.next();
      if (n.done){ it = gen(prog); loops++; n = it.next(); if (n.done) return 0; }
      const o = n.value; cur = o; steps++;
      if (o.op === "on" || o.op === "off"){ pinState[o.pin] = o.op === "on"; paintLeds(); }
      if (o.op === "tone"){ FC.tone(o.hz, o.ms * (slow ? 3 : 1) * .9, { force:true, type:"square" }); if (pzEl){ v.querySelectorAll(".pzw").forEach((w, k) => w.animate([{ opacity:0 }, { opacity:.9 }, { opacity:0 }], { duration:Math.max(150, o.ms*(slow?3:1)), delay:k*40 })); } }
      render();
      status.textContent = running ? `▶ RUNNING · loop ${loops}` : `⏭ STEP ${steps}`;
      return (o.op === "wait" || o.op === "tone") ? o.ms : 0;
    }
    function tick(){
      if (!running) return;
      let ms = exec(), guard = 0;
      // writes and decisions are instant (microseconds) — run on until the next wait
      while (ms === 0 && guard++ < 60) ms = exec();
      if (ms === 0){ timer = setTimeout(tick, 60); return; }
      timer = setTimeout(tick, ms * (slow ? 3 : 1));
    }
    const run = small(btn("▶ Run", () => { if (running) return; running = true; status.style.color = "#1F7A5A"; tick(); }, "on"));
    const step = small(darkB(btn("⏭ Step", () => { stopIt(true); exec(); }, "dark")));
    const stopB = small(darkB(btn("■ Stop", () => stopIt(), "dark")));
    const slowB = small(darkB(btn("🐢 Slow-mo", () => { slow = !slow; slowB.classList.toggle("on", slow); }, "dark")));
    const addW = small(darkB(btn("+ Wait", () => { prog.push({ op:"wait", ms:1000 }); render(); }, "dark")));
    const reset = small(darkB(btn("↺ Reset", () => { stopIt(); prog = JSON.parse(JSON.stringify(cfg.program || DEF)); render(); }, "dark")));
    function stopIt(keep){ running = false; clearTimeout(timer); if (!keep){ cur = null; it = null; loops = 0; steps = 0; LEDS.forEach(L => pinState[L.pin] = false); paintLeds(); status.textContent = "■ STOPPED"; status.style.color = ""; render(); } }
    ctr.append(run, step, stopB, slowB);
    if (cfg.edit !== false) ctr.append(addW, reset);
    render(); paintLeds();
    return { destroy(){ running = false; clearTimeout(timer); } };
  };

  /* =======================================================
     FRI · Calendar wheel (drag to turn) + build steps
     ======================================================= */
  IX.calwheel = function(host){
    const W = 1100, H = 690, cx = 470, cy = 345;
    const v = svg(W, H, { style:`position:absolute;left:0;top:0;width:${W}px;height:${H}px;touch-action:none` });
    host.appendChild(v);
    v.appendChild(s("rect", { width:W, height:H, rx:16, fill:"#efe3c6" }));
    const outer = s("g", { style:"cursor:grab" }), inner = s("g", { style:"cursor:grab" });
    const R1 = 320, R2 = 190;
    // outer: 20 day names
    outer.appendChild(s("circle", { cx:0, cy:0, r:R1, fill:"#D9A23A", stroke:"#3b2418", "stroke-width":5, filter:"url(#fx-paper)" }));
    outer.appendChild(s("circle", { cx:0, cy:0, r:R2 + 10, fill:"none", stroke:"#3b2418", "stroke-width":3 }));
    for (let i=0;i<20;i++){ const a = i*18 - 90, r = a*Math.PI/180;
      outer.appendChild(s("line", { x1:(R2+10)*Math.cos((a+9)*Math.PI/180), y1:(R2+10)*Math.sin((a+9)*Math.PI/180), x2:R1*Math.cos((a+9)*Math.PI/180), y2:R1*Math.sin((a+9)*Math.PI/180), stroke:"#3b2418", "stroke-width":2, opacity:.5 }));
      const x = (R1 - 62)*Math.cos(r), y = (R1 - 62)*Math.sin(r);
      outer.appendChild(s("text", { x, y, "text-anchor":"middle", "dominant-baseline":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":26, fill:"#2a1a10", transform:`rotate(${a + 90} ${x} ${y})` }, DAYNAMES[i])); }
    // inner: 13 numbers as Maya numerals
    inner.appendChild(s("circle", { cx:0, cy:0, r:R2, fill:"#B3262E", stroke:"#3b2418", "stroke-width":5, filter:"url(#fx-paper)" }));
    for (let i=0;i<13;i++){ const a = i*360/13 - 90, r = a*Math.PI/180;
      const m = FC.maya(i+1, { color:"#F4EBD8" }); const x = (R2 - 52)*Math.cos(r), y = (R2 - 52)*Math.sin(r);
      const g = s("g", { transform:`translate(${x} ${y}) rotate(${a + 90}) translate(-30 -30)` }); m.setAttribute("width", 60); m.setAttribute("height", 60); g.appendChild(m); inner.appendChild(g); }
    inner.appendChild(s("circle", { cx:0, cy:0, r:20, fill:"#C9A06A", stroke:"#3b2418", "stroke-width":4 }));
    const og = s("g", { transform:`translate(${cx} ${cy})` }); og.appendChild(outer); og.appendChild(inner); v.appendChild(og);
    // window
    v.appendChild(s("path", { d:`M${cx-48} ${cy - R1 - 14} h96 v${R1 - 40} h-96z`, fill:"none", stroke:"#1F7A5A", "stroke-width":8, rx:8 }));
    v.appendChild(lbl(cx, cy - R1 - 24, "WINDOW", "#1F7A5A", 22));
    const P = panel(560); host.appendChild(P);
    const out = big("", "#B3262E"), msg = pmsg("**Drag** a wheel to turn it. Real Maya day-keepers matched a **number** with a **day-name** — just like this.");
    const ctr = h("div", { style:{ marginTop:"auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px" } });
    P.append(ptitle("Calendar wheel"), out, msg, ctr);
    let aO = 0, aI = 0, day = 0;
    function paint(){ outer.setAttribute("transform", `rotate(${aO})`); inner.setAttribute("transform", `rotate(${aI})`);
      const di = mod(Math.round(-aO / 18), 20), ni = mod(Math.round(-aI / (360/13)), 13);
      out.textContent = `${ni + 1} ${DAYNAMES[di]}`; }
    function stepDay(){ day++; aO -= 18; aI -= 360/13; outer.style.transition = inner.style.transition = "transform .5s cubic-bezier(.3,1.3,.5,1)"; paint(); setTimeout(() => { outer.style.transition = inner.style.transition = ""; }, 520); }
    ctr.append(small(btn("Turn both: +1 day", () => { stepDay(); msg.innerHTML = FC.md("Each new day, **both** wheels move one step. After 13 days the numbers repeat; after 20 days the names repeat."); }, "on")),
      small(darkB(btn("Reset", () => { aO = 0; aI = 0; paint(); }, "dark"))));
    // drag
    let drag = null;
    const ang = e => { const [x, y] = FC.toLocal(v, e); return Math.atan2(y - cy, x - cx) * 180 / Math.PI; };
    [[outer, "o"], [inner, "i"]].forEach(([g, k]) => g.addEventListener("pointerdown", e => { e.stopPropagation(); v.setPointerCapture(e.pointerId); drag = { k, a0: ang(e), s: k === "o" ? aO : aI }; }));
    v.addEventListener("pointermove", e => { if (!drag) return; const d = ang(e) - drag.a0; if (drag.k === "o") aO = drag.s + d; else aI = drag.s + d; paint(); });
    v.addEventListener("pointerup", e => { if (!drag) return; e.stopPropagation(); if (drag.k === "o") aO = Math.round(aO / 18) * 18; else aI = Math.round(aI / (360/13)) * (360/13); drag = null; paint(); FC.sfx("tok"); });
    v.addEventListener("click", e => e.stopPropagation());
    paint();
    return {};
  };

  FC.art.wheelStep = function(n){
    const v = svg(800, 600);
    v.appendChild(s("rect", { width:800, height:600, rx:20, fill:"#efe3c6" }));
    const g = s("g", { filter:"url(#fx-paper)" });
    const C = (x, y, r, f) => s("circle", { cx:x, cy:y, r, fill:f, stroke:"#3b2418", "stroke-width":4 });
    if (n === 0){
      // materials
      g.appendChild(C(250, 300, 170, "#D9A23A")); g.appendChild(C(250, 300, 100, "#B3262E"));
      g.appendChild(s("rect", { x:500, y:180, width:200, height:250, fill:"#E9DCC0", stroke:"#3b2418", "stroke-width":4 }));
      g.appendChild(s("path", { d:"M600 470 l0 60 M585 470 h30", stroke:"#8a7a62", "stroke-width":10 }));
      g.appendChild(s("path", { d:"M470 520 l60 -60 M480 470 l50 50", stroke:"#5a3825", "stroke-width":8 }));
      g.appendChild(lbl(600, 160, "CARD", "#3b2418", 26)); g.appendChild(lbl(650, 560, "SPLIT PIN", "#3b2418", 22));
    } else if (n === 1){
      g.appendChild(C(400, 300, 230, "#D9A23A"));
      for (let i=0;i<20;i++){ const a = i*18*Math.PI/180; g.appendChild(s("line", { x1:400 + 130*Math.cos(a), y1:300 + 130*Math.sin(a), x2:400 + 230*Math.cos(a), y2:300 + 230*Math.sin(a), stroke:"#3b2418", "stroke-width":3 })); }
      g.appendChild(C(400, 300, 130, "none"));
      g.appendChild(lbl(400, 310, "20 SECTIONS", "#3b2418", 34));
    } else if (n === 2){
      g.appendChild(C(400, 300, 150, "#B3262E"));
      for (let i=0;i<13;i++){ const a = i*360/13*Math.PI/180; g.appendChild(s("line", { x1:400, y1:300, x2:400 + 150*Math.cos(a), y2:300 + 150*Math.sin(a), stroke:"#F4EBD8", "stroke-width":3 })); }
      g.appendChild(lbl(400, 520, "13 SECTIONS (about 28° each)", "#3b2418", 30));
    } else if (n === 3){
      g.appendChild(C(400, 300, 230, "#D9A23A"));
      for (let i=0;i<20;i++){ const a = i*18*Math.PI/180; g.appendChild(s("circle", { cx:400 + 190*Math.cos(a), cy:300 + 190*Math.sin(a), r:14, fill:"#3b2418" })); }
      g.appendChild(C(400, 300, 140, "#B3262E"));
      for (let i=0;i<13;i++){ const a = i*360/13*Math.PI/180; g.appendChild(s("circle", { cx:400 + 100*Math.cos(a), cy:300 + 100*Math.sin(a), r:10, fill:"#F4EBD8" })); }
      g.appendChild(lbl(400, 30 + 560, "DESIGN · RADIAL SYMMETRY", "#3b2418", 26));
    } else {
      g.appendChild(C(400, 300, 230, "#D9A23A")); g.appendChild(C(400, 300, 140, "#B3262E"));
      g.appendChild(C(400, 300, 22, "#C9A06A"));
      g.appendChild(s("path", { d:"M352 60 h96 v210 h-96z", fill:"none", stroke:"#1F7A5A", "stroke-width":8 }));
      g.appendChild(s("path", { d:"M600 120 a240 240 0 0 1 40 220", stroke:"#B3262E", "stroke-width":8, fill:"none", "marker-end":"" }));
      g.appendChild(s("path", { d:"M630 330 l12 22 l14 -24", stroke:"#B3262E", "stroke-width":8, fill:"none" }));
      g.appendChild(lbl(680, 230, "TURN!", "#B3262E", 34));
    }
    v.appendChild(g);
    return v;
  };

  /* Folio IV seal art — a Long Count column and a silent city */
  A.timeFolio = function(){
    const v = svg(800, 1000);
    v.appendChild(s("rect", { width:800, height:1000, fill:"#efe3c6" }));
    v.appendChild(s("rect", { x:30, y:30, width:740, height:940, fill:"none", stroke:"#B3262E", "stroke-width":10 }));
    v.appendChild(s("rect", { x:50, y:50, width:700, height:900, fill:"none", stroke:"#B3262E", "stroke-width":3 }));
    [10, 4, 0, 0, 0].forEach((n, i) => {
      const y = 90 + i*165;
      v.appendChild(s("rect", { x:90, y, width:170, height:150, rx:22, fill:"none", stroke:"#3b2418", "stroke-width":5 }));
      const m = FC.maya(n, { color:"#B3262E" }); m.setAttribute("x", 105); m.setAttribute("y", y + 8); m.setAttribute("width", 140); m.setAttribute("height", 134); v.appendChild(m);
      v.appendChild(lbl(300, y + 88, ["B'AK'TUN","K'ATUN","TUN","WINAL","K'IN"][i], "#5a3825", 28, "start"));
    });
    // silent city
    const g = s("g", { filter:"url(#fx-rough)" });
    g.appendChild(s("path", { d:"M470 760 h240 l-30 -60 h-180 z M500 700 l20 -60 h120 l20 60z M540 640 l10 -40 h60 l10 40z", fill:"#5a3825" }));
    g.appendChild(s("rect", { x:565, y:570, width:30, height:30, fill:"#3b2418" }));
    for (let i=0;i<6;i++) g.appendChild(A.leaf(460 + i*50, 800, 70, -90 + (i%2 ? 20 : -20), 22, "#1F7A5A", { rib:false }));
    v.appendChild(g);
    v.appendChild(s("path", { d:"M600 520 v-40 M580 500 l20 -24 l20 24", stroke:"#B3262E", "stroke-width":6, fill:"none", opacity:.6 }));
    return v;
  };
})(window.FC);
