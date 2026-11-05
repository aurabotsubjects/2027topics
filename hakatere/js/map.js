/* ==========================================================
   HAKATERE MAP — a simplified cut-paper map of Mid Canterbury
   Units: 1 km = 10 SVG units. Positions are approximate (from
   latitude/longitude), good for grid references and straight-line
   distances to the nearest few km. Not for navigation.
   ========================================================== */
(function(BM){
  "use strict";
  const s = BM.s;
  const M = BM.map = {};
  const K = 10; // svg units per km
  /* places in km from the map's top-left corner */
  M.PLACES = {
    arrowsmith:{ x:13.7, y:10.0, en:"Mt Arrowsmith", h:2781, kind:"peak" },
    hutt:{ x:55.0, y:25.0, en:"Mt Hutt", mi:"Ōpuke", h:2190, kind:"peak" },
    somers:{ x:43.4, y:39.9, en:"Mt Somers", mi:"Te Kiekie", h:1688, kind:"peak" },
    lakes:{ x:20.5, y:31.5, en:"Ashburton Lakes", mi:"Ō Tū Wharekai", kind:"lake" },
    methven:{ x:64.0, y:42.5, en:"Methven", kind:"town" },
    mtsomersv:{ x:43.6, y:50.0, en:"Mt Somers village", kind:"village" },
    ashburton:{ x:71.9, y:72.7, en:"Ashburton", kind:"town" },
    rakaiat:{ x:94.0, y:55.5, en:"Rakaia", kind:"village" },
    confluence:{ x:67.5, y:69.9, en:"Branches join", kind:"point" },
    mouth:{ x:76.3, y:90.4, en:"River mouth (hāpua)", kind:"point" },
    glacier:{ x:16.0, y:14.0, en:"Ashburton Glacier", kind:"point" }
  };
  M.RIVERS = {
    south:[[16,14],[19,22],[23,31],[29,41],[37,50],[47,58],[58,64.5],[67.5,69.9]],
    north:[[49,30],[54,39],[59,49],[63.5,60],[67.5,69.9]],
    main:[[67.5,69.9],[71.9,72.7],[74.2,81],[76.3,90.4]],
    rakaia:[[30,-6],[46,5],[58,17],[65,30],[79,44],[95,58],[110.1,72.1]],
    rangitata:[[-6,40],[7,51],[16,58],[25,73],[37,88],[52.2,103.2]]
  };
  M.MTN = [[0,0],[63,0],[60.5,21],[56,32],[49,44],[36,52],[21,62],[0,73]];
  const coastY = x => 72.1 + (110.1 - x)/57.9*31.1;
  M.coastY = coastY;
  M.toSvg = (x, y) => [x*K, y*K];
  M.dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
  M.gridRef = (x, y) => "ABCDEFGH"[Math.max(0, Math.min(7, Math.floor(x/15)))] + (Math.max(0, Math.min(7, Math.floor(y/15))) + 1);
  const pd = pts => "M" + pts.map(p => (p[0]*K).toFixed(1) + " " + (p[1]*K).toFixed(1)).join(" L");

  /* build the map. opt: { theme:"paper"|"dark", grid, labels:"en"|"mi"|"both"|"none", relief, rivers, braids } */
  M.hakatere = function(opt){
    opt = opt || {};
    const dark = opt.theme === "dark";
    const v = BM.svg(1200, 1200, { class:"hk-map", preserveAspectRatio:"xMidYMid meet" });
    const G = {};
    const grp = (name, attrs) => { const g = s("g", Object.assign({ class:"hk-" + name }, attrs || {})); v.appendChild(g); G[name] = g; return g; };
    // plains
    grp("base").appendChild(s("rect", { width:1200, height:1200, fill: dark ? "#2a2f2a" : "#e9dfc4" }));
    if (!dark) G.base.appendChild(s("rect", { width:1200, height:1200, fill:"url(#p-grid)", opacity:.5 }));
    const pad = s("g", { opacity: dark ? .25 : .22 }); pad.appendChild(BM.art.paddocks(1200, 1200, 21, { cell:90, pivots:.3, edge:"rgba(0,0,0,.08)", belt:"#4a5a35" })); G.base.appendChild(pad);
    // sea
    const sea = grp("sea");
    sea.appendChild(s("path", { d:`M${130*K} ${coastY(130)*K} L${10*K} ${coastY(10)*K} L${10*K} ${140*K} L${130*K} ${140*K}Z`, fill: dark ? "#1d3a4a" : "#a9cdd8" }));
    for (let i=0;i<8;i++){ const x = 95 + i*4, y = coastY(x) + 4 + i*1.6; sea.appendChild(s("path", { d:`M${x*K} ${y*K} q15 -8 30 0 q15 8 30 0`, stroke: dark ? "#3D8DB3" : "#3D8DB3", "stroke-width":2, fill:"none", opacity:.45 })); }
    sea.appendChild(s("path", { d:`M${130*K} ${coastY(130)*K} L${10*K} ${coastY(10)*K}`, stroke: dark ? "#BFE0EA" : "#2F3E46", "stroke-width":3, opacity:.5 }));
    // mountains (relief)
    const mtn = grp("mtn");
    mtn.appendChild(s("path", { d: pd(M.MTN) + "Z", fill: dark ? "#3a4448" : "#a7a59c" }));
    if (opt.relief !== false){
      const rnd = BM.rng(8);
      for (let i=0;i<70;i++){
        const x = rnd()*60, y = rnd()*70; // inside test (rough)
        if (x > 63 - y*0.2 - (y > 32 ? (y-32)*0.9 : 0) || y > 73 - x*0.25) continue;
        const sz = 14 + rnd()*22;
        mtn.appendChild(s("path", { d:`M${x*K - sz} ${y*K + sz*.5} L${x*K} ${y*K - sz*.7} L${x*K + sz} ${y*K + sz*.5}Z`, fill: dark ? "#55626a" : "#8c8a80", opacity:.7 }));
        mtn.appendChild(s("path", { d:`M${x*K - sz*.3} ${y*K - sz*.25} L${x*K} ${y*K - sz*.7} L${x*K + sz*.3} ${y*K - sz*.25}Z`, fill:"#F3F6F4", opacity:.8 }));
      }
    }
    // lakes
    const lk = grp("lakes");
    [[15.3,38.8,2.2,1.2],[25.7,24.4,3.2,1.4],[20.5,30.5,1.4,.9]].forEach(([x,y,rx,ry]) => lk.appendChild(s("ellipse", { cx:x*K, cy:y*K, rx:rx*K, ry:ry*K, fill:"#6FB6D6", stroke:"#3D8DB3", "stroke-width":2 })));
    // rivers
    const rv = grp("rivers");
    const rcol = dark ? "#BFE0EA" : "#3D8DB3";
    const scaleP = pts => pts.map(p => [p[0]*K, p[1]*K]);
    rv.appendChild(BM.art.braids(scaleP(M.RIVERS.rakaia), { seed:3, w0:14, w1:34, color:rcol, opacity:.8, sw:2.5, bedColor: dark ? "#6b6f6c" : "#c9c4b4", bedOpacity:.8, threads:4 }));
    rv.appendChild(BM.art.braids(scaleP(M.RIVERS.rangitata), { seed:4, w0:14, w1:30, color:rcol, opacity:.8, sw:2.5, bedColor: dark ? "#6b6f6c" : "#c9c4b4", bedOpacity:.8, threads:4 }));
    const hk = s("g", { class:"hk-hakatere" });
    hk.appendChild(BM.art.braids(scaleP(M.RIVERS.south), { seed:5, w0:6, w1:22, color:rcol, opacity:.95, sw:2.6, bedColor: dark ? "#6b6f6c" : "#c9c4b4", bedOpacity:.85, threads:4 }));
    hk.appendChild(BM.art.braids(scaleP(M.RIVERS.north), { seed:6, w0:5, w1:18, color:rcol, opacity:.95, sw:2.4, bedColor: dark ? "#6b6f6c" : "#c9c4b4", bedOpacity:.85, threads:3 }));
    hk.appendChild(BM.art.braids(scaleP(M.RIVERS.main), { seed:7, w0:22, w1:26, color:rcol, opacity:.95, sw:2.8, bedColor: dark ? "#6b6f6c" : "#c9c4b4", bedOpacity:.85, threads:4 }));
    hk.appendChild(s("ellipse", { cx:76.6*K, cy:91.2*K, rx:22, ry:9, fill:"#6FB6D6", transform:`rotate(-28 ${76.6*K} ${91.2*K})` }));
    rv.appendChild(hk);
    // roads
    const rd = grp("roads", { opacity:.55 });
    rd.appendChild(s("path", { d: pd([[118,49],[94,55.5],[71.9,72.7],[54,86],[38,97]]), stroke: dark ? "#E6C873" : "#B4412F", "stroke-width":3.5, fill:"none", "stroke-dasharray":"14 8" }));
    rd.appendChild(s("path", { d: pd([[71.9,72.7],[66,58],[64,42.5]]), stroke: dark ? "#E6C873" : "#B4412F", "stroke-width":2.5, fill:"none", "stroke-dasharray":"8 8" }));
    // places
    const pl = grp("places");
    Object.keys(M.PLACES).forEach(k => {
      const p = M.PLACES[k], x = p.x*K, y = p.y*K;
      const g = s("g", { class:"hk-pl hk-pl-" + k, "data-k":k });
      if (p.kind === "peak") g.appendChild(BM.art.trig(x, y, 13));
      else if (p.kind === "town") g.appendChild(s("rect", { x:x-9, y:y-9, width:18, height:18, fill: dark ? "#F3ECDD" : "#1F2A30", stroke: dark ? "#1F2A30" : "#F3ECDD", "stroke-width":3 }));
      else if (p.kind === "village") g.appendChild(s("circle", { cx:x, cy:y, r:7, fill: dark ? "#F3ECDD" : "#1F2A30" }));
      else if (p.kind === "point") g.appendChild(s("circle", { cx:x, cy:y, r:6, fill:"#F3ECDD", stroke:rcol, "stroke-width":3 }));
      pl.appendChild(g);
    });
    // labels (two layers: English and Māori)
    const lab = grp("labels");
    const en = s("g", { class:"hk-en" }), mi = s("g", { class:"hk-mi" });
    lab.append(en, mi);
    const txt = (g, x, y, t, o) => { o = o || {}; const e = s("text", { x:x*K, y:y*K, "font-family": o.serif ? "Fraunces" : "Big Shoulders Display", "font-weight": o.serif ? 600 : 800, "font-style": o.italic ? "italic" : null, "font-size": o.size || 26, fill: o.fill || (dark ? "#F3ECDD" : "#1F2A30"), "text-anchor": o.anchor || "start", "letter-spacing": o.ls || ".5", stroke: dark ? "#141B21" : "#efe6cf", "stroke-width":6, "paint-order":"stroke", transform: o.rot ? `rotate(${o.rot} ${x*K} ${y*K})` : null }, t); g.appendChild(e); return e; };
    const pairs = [
      [[30,44],"Ashburton River","Hakatere",{ rot:42, italic:true, serif:true, fill:rcol }],
      [[45.5,37],"Mt Somers","Te Kiekie",{}],
      [[57,22.5],"Mt Hutt","Ōpuke",{}],
      [[12,44.5],"Ashburton Lakes","Ō Tū Wharekai",{ size:22 }],
      [[117,36],"Christchurch 85 km ↗","Ōtautahi 85 km ↗",{ size:22, anchor:"end" }]
    ];
    pairs.forEach(([[x,y], e, m, o]) => { txt(en, x, y, e, o); txt(mi, x, y, m, Object.assign({}, o, { fill: o.fill || (dark ? "#E6C873" : "#9E3826") })); });
    // labels that stay the same in both layers
    const fixed = s("g", { class:"hk-fixed" }); lab.appendChild(fixed);
    txt(fixed, 16, 7.5, "Mt Arrowsmith", { size:22 });
    txt(fixed, 66, 41.5, "Methven", {});
    txt(fixed, 74, 71.5, "Ashburton", { size:30 });
    txt(fixed, 96, 54, "Rakaia", { size:22 });
    txt(fixed, 76, 38, "Rakaia River", { rot:40, italic:true, serif:true, fill:rcol, size:22 });
    txt(fixed, 18, 71, "Rangitata River", { rot:55, italic:true, serif:true, fill:rcol, size:22 });
    txt(fixed, 117, 104, "PACIFIC OCEAN", { anchor:"end", size:24, fill: dark ? "#BFE0EA" : "#2C6F92", ls:"4" });
    txt(fixed, 4, 117, "Simplified map · positions approximate", { size:18, fill: dark ? "rgba(243,236,221,.6)" : "rgba(31,42,48,.6)" });
    const L = opt.labels || "en";
    en.style.opacity = (L === "en" || L === "both") ? 1 : 0;
    mi.style.opacity = (L === "mi" || L === "both") ? 1 : 0;
    if (L === "both") mi.setAttribute("transform", "translate(0 26)");
    if (L === "none") lab.style.display = "none";
    en.style.transition = mi.style.transition = "opacity .9s";
    // grid
    const gr = grp("grid", { style: opt.grid ? "" : "display:none" });
    for (let i=0;i<=8;i++){ gr.appendChild(s("line", { x1:i*150, x2:i*150, y1:0, y2:1200, stroke: dark ? "rgba(243,236,221,.35)" : "rgba(31,42,48,.35)", "stroke-width":2 })); gr.appendChild(s("line", { y1:i*150, y2:i*150, x1:0, x2:1200, stroke: dark ? "rgba(243,236,221,.35)" : "rgba(31,42,48,.35)", "stroke-width":2 })); }
    for (let i=0;i<8;i++){
      gr.appendChild(s("text", { x:i*150 + 75, y:30, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":30, fill:"#B4412F", stroke:"#efe6cf", "stroke-width":5, "paint-order":"stroke" }, "ABCDEFGH"[i]));
      gr.appendChild(s("text", { x:18, y:i*150 + 86, "font-family":"Big Shoulders Display", "font-weight":900, "font-size":30, fill:"#B4412F", stroke:"#efe6cf", "stroke-width":5, "paint-order":"stroke" }, String(i+1)));
    }
    // scale bar + north arrow
    const sc = grp("scale");
    sc.appendChild(s("rect", { x:880, y:1110, width:300, height:70, rx:8, fill: dark ? "rgba(20,27,33,.8)" : "rgba(243,236,221,.92)" }));
    [0,1,2,3].forEach(i => sc.appendChild(s("rect", { x:900 + i*50, y:1140, width:50, height:12, fill: i%2 ? (dark ? "#F3ECDD" : "#efe6cf") : (dark ? "#141B21" : "#1F2A30"), stroke: dark ? "#F3ECDD" : "#1F2A30", "stroke-width":2 })));
    [["0",900],["10",1000],["20 km",1100]].forEach(([t,x]) => sc.appendChild(s("text", { x, y:1134, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":800, "font-size":20, fill: dark ? "#F3ECDD" : "#1F2A30" }, t)));
    sc.appendChild(s("path", { d:"M1150 1172 L1162 1124 L1174 1172 L1162 1160Z", fill: dark ? "#F3ECDD" : "#1F2A30" }));
    sc.appendChild(s("text", { x:1162, y:1120, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":20, fill: dark ? "#F3ECDD" : "#1F2A30" }, "N"));
    v.bm = G;
    v.setLabels = function(mode){ en.style.opacity = (mode === "en" || mode === "both") ? 1 : 0; mi.style.opacity = (mode === "mi" || mode === "both") ? 1 : 0; mi.setAttribute("transform", mode === "both" ? "translate(0 26)" : ""); };
    return v;
  };
})(window.BM);
