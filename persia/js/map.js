/* ==========================================================
   PERSIA MAP — a simplified cut-paper map of the Persian plateau
   and the lands of the empire (longitude 26–64°E, latitude 22–42°N),
   drawn from approximate coordinates. Good for "where is it?" and
   "what is near what?"; not to scale for measuring. Not for navigation.
   Also: a small orthographic globe for "Zoom to Persia" (NZ → Iran).
   ========================================================== */
(function(BM){
  "use strict";
  const s = BM.s;
  const M = BM.map = {};
  const LON0 = 26, LON1 = 64, LAT0 = 22, LAT1 = 42, W = 1610, H = 1000;
  M.W = W; M.H = H;
  M.proj = (lon, lat) => [ (lon - LON0)/(LON1 - LON0)*W, (LAT1 - lat)/(LAT1 - LAT0)*H ];
  const P = M.proj;
  const pd = (pts, close) => "M" + pts.map(([lo, la]) => P(lo, la).map(v => v.toFixed(1)).join(" ")).join(" L") + (close ? "Z" : "");
  const smooth = (pts, close) => { // Catmull-Rom → cubic Bézier in screen space
    const q = pts.map(([lo, la]) => P(lo, la)); if (q.length < 3) return pd(pts, close);
    const n = q.length, get = i => close ? q[(i + n) % n] : q[Math.max(0, Math.min(n - 1, i))];
    let d = `M${q[0][0].toFixed(1)} ${q[0][1].toFixed(1)}`;
    for (let i=0;i<(close ? n : n - 1);i++){ const p0 = get(i-1), p1 = get(i), p2 = get(i+1), p3 = get(i+2);
      d += ` C${(p1[0] + (p2[0]-p0[0])/6).toFixed(1)} ${(p1[1] + (p2[1]-p0[1])/6).toFixed(1)} ${(p2[0] - (p3[0]-p1[0])/6).toFixed(1)} ${(p2[1] - (p3[1]-p1[1])/6).toFixed(1)} ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`; }
    return d + (close ? "Z" : "");
  };

  /* ---- places (lon, lat) ---- */
  M.PLACES = {
    susa:{ lon:48.25, lat:32.19, en:"Susa", kind:"capital", note:"old capital of Elam" },
    persepolis:{ lon:52.89, lat:29.93, en:"Persepolis", kind:"capital" },
    pasargadae:{ lon:53.17, lat:30.20, en:"Pasargadae", kind:"capital", dy:-14, dx:10 },
    ecbatana:{ lon:48.51, lat:34.80, en:"Ecbatana", kind:"capital", note:"Median city (modern Hamadan)" },
    babylon:{ lon:44.42, lat:32.54, en:"Babylon", kind:"city" },
    sardis:{ lon:28.04, lat:38.49, en:"Sardis", kind:"city" },
    nineveh:{ lon:43.15, lat:36.36, en:"Nineveh", kind:"city" },
    behistun:{ lon:47.44, lat:34.39, en:"Behistun", kind:"site" },
    jerusalem:{ lon:35.23, lat:31.77, en:"Jerusalem", kind:"city" },
    yazd:{ lon:54.37, lat:31.90, en:"Yazd", kind:"city" },
    tehran:{ lon:51.39, lat:35.69, en:"Tehran", kind:"modern", note:"capital of Iran today" },
    tabriz:{ lon:46.29, lat:38.08, en:"Tabriz", kind:"city" },
    nishapur:{ lon:58.80, lat:36.21, en:"Nishapur", kind:"city" },
    damavand:{ lon:52.11, lat:35.95, en:"Mt Damavand", kind:"peak" }
  };
  M.REGIONS = {
    elam:{ en:"ELAM", lon:48.6, lat:31.4, col:"#C2593A", blob:[[46.6,32.8],[47.8,33.4],[49.4,33.0],[50.6,31.4],[50.0,30.2],[48.6,30.2],[47.4,31.0]] },
    media:{ en:"MEDIA", lon:48.6, lat:35.8, col:"#14B8A6", blob:[[45.6,37.6],[47.6,38.0],[50.4,36.8],[51.4,35.2],[50.4,33.8],[48.0,33.6],[46.2,34.6],[45.4,36.2]] },
    pars:{ en:"PARS (PERSIS)", lon:53.0, lat:29.2, col:"#E8B84A", blob:[[50.8,30.6],[52.2,31.4],[54.4,31.0],[55.6,29.4],[54.6,27.8],[52.6,27.6],[51.2,28.6]] }
  };

  /* ---- coastlines & seas (rough) ---- */
  const CASPIAN = [[47.5,42],[48.6,41.3],[49.5,40.4],[49.9,40.0],[49.3,39.3],[48.9,38.5],[48.9,37.9],[49.3,37.6],[50.1,37.4],[51.0,36.8],[52.0,36.6],[53.0,36.8],[54.0,36.9],[54.0,37.4],[53.9,38.5],[53.2,39.3],[53.6,40.0],[52.8,40.6],[52.8,41.2],[52.5,42]];
  const GULF = [[48.0,30.4],[48.6,30.0],[49.2,30.2],[50.1,30.1],[50.3,29.3],[50.8,28.9],[51.4,27.9],[52.5,27.4],[53.7,26.7],[54.8,26.5],[55.6,26.7],[56.3,27.2],[56.9,27.0],[57.3,25.8],[58.8,25.6],[60.5,25.3],[61.6,25.2],[64,25.0],[64,22],[59.6,22],[59.8,22.5],[58.6,23.6],[57.3,23.9],[56.4,24.8],[56.3,25.6],[56.4,26.4],[56.1,26.1],[55.5,25.4],[54.0,24.1],[52.5,24.2],[51.5,24.5],[51.6,25.3],[51.0,26.0],[50.6,25.5],[50.2,26.2],[49.6,26.8],[48.9,27.6],[48.2,29.3],[48.0,29.9]];
  const MED = [[26,40.6],[26.2,40.0],[26.8,39.4],[26.7,38.6],[27.2,37.9],[27.5,37.0],[28.2,36.7],[29.6,36.2],[30.6,36.8],[31.5,36.6],[32.8,36.0],[34.0,36.3],[35.0,36.6],[36.0,36.7],[35.9,35.8],[35.9,34.9],[35.5,33.9],[35.1,33.0],[34.6,31.7],[34.2,31.3],[33.0,31.1],[32.0,31.1],[30.0,31.4],[29.0,30.9],[26,31.3]];
  const BLACK = [[27.9,42],[28.0,41.6],[29.1,41.2],[30.3,41.2],[31.4,41.3],[32.5,41.8],[33.3,42]];
  const RED = [[32.5,30.0],[32.7,29.0],[33.6,27.8],[34.6,26.0],[35.6,24.0],[36.6,22],[38.9,22],[38.0,24.0],[36.6,25.8],[35.3,27.8],[34.9,29.5],[34.5,28.2],[33.9,28.0],[33.2,28.6]];
  const CYPRUS = [[32.3,35.1],[33.0,35.4],[34.6,35.6],[34.0,35.0],[33.0,34.6]];
  M.RIVERS = {
    euphrates:[[38.3,39.4],[38.3,37.5],[38.0,36.6],[39.9,35.4],[40.8,34.4],[42.0,34.3],[43.3,33.0],[44.4,32.5],[45.8,31.3],[46.5,31.0],[47.4,31.0],[48.0,30.4]],
    tigris:[[39.8,38.4],[41.0,37.5],[42.4,37.1],[43.1,36.3],[43.5,35.0],[44.4,33.3],[45.5,32.5],[46.7,31.6],[47.4,31.0]],
    karkheh:[[47.6,34.2],[47.6,33.2],[48.0,32.5],[48.3,31.9],[47.8,31.3]]
  };
  M.RANGES = {
    zagros:{ en:"ZAGROS MOUNTAINS", pts:[[44.0,38.2],[45.2,36.6],[46.4,35.0],[47.8,33.6],[49.4,32.2],[51.0,30.8],[52.8,29.6],[54.8,28.4],[56.8,27.6]], w:62, lab:[48.6,33.1], ang:-37 },
    alborz:{ en:"ALBORZ", pts:[[47.6,38.0],[48.8,37.0],[50.2,36.5],[51.6,36.0],[53.2,36.2],[54.8,36.8],[56.4,37.3]], w:30, lab:[51.6,36.55], ang:-4 },
    taurus:{ en:"", pts:[[30.0,37.3],[32.5,37.0],[35.0,37.4],[37.5,37.9],[40.0,38.6],[42.5,38.6]], w:30 }
  };
  M.DESERTS = {
    kavir:{ en:"DASHT-E KAVIR", sub:"salt desert", lon:54.6, lat:34.4, rx:150, ry:70 },
    lut:{ en:"DASHT-E LUT", sub:"one of the hottest places on Earth", lon:58.6, lat:30.4, rx:110, ry:120 }
  };
  M.IRAN = [[44.0,39.4],[44.8,39.7],[46.5,38.9],[47.9,39.6],[48.4,38.8],[48.9,38.4],[49.0,37.6],[50.1,37.4],[51.0,36.8],[52.0,36.6],[53.0,36.8],[53.9,37.3],[55.4,38.0],[57.3,38.0],[59.3,37.5],[60.4,36.6],[61.2,36.6],[61.2,35.6],[60.7,34.3],[60.9,33.5],[60.5,32.9],[60.8,31.5],[61.7,31.4],[61.8,30.8],[60.9,29.8],[61.4,29.3],[62.5,28.3],[62.8,27.3],[63.3,27.1],[63.2,26.6],[61.6,25.2],[60.5,25.3],[58.8,25.6],[57.3,25.8],[56.9,27.0],[56.3,27.2],[55.6,26.7],[54.8,26.5],[53.7,26.7],[52.5,27.4],[51.4,27.9],[50.8,28.9],[50.3,29.3],[50.1,30.1],[49.2,30.2],[48.6,30.0],[48.0,30.5],[47.7,31.4],[47.4,32.4],[46.1,33.0],[45.4,33.9],[45.6,34.6],[46.2,35.1],[46.1,35.7],[45.4,36.0],[44.8,37.2],[44.2,37.9],[44.4,38.4]];
  /* the Royal Road, Sardis → Susa (approximate route, after Herodotus; Livius S5) */
  M.ROAD = [[28.04,38.49],[30.2,39.0],[32.0,39.65],[33.8,39.8],[35.4,39.4],[37.0,38.9],[38.3,38.35],[40.2,37.9],[42.0,37.0],[43.15,36.36],[44.0,36.19],[45.0,35.0],[46.2,33.8],[47.3,32.9],[48.25,32.19]];

  /* buffer a polyline into a band polygon (for mountain ranges) */
  function band(pts, w){
    const q = pts.map(([lo, la]) => P(lo, la)), L = [], R = [];
    q.forEach((p, i) => { const a = q[Math.max(0, i-1)], b = q[Math.min(q.length-1, i+1)]; let dx = b[0]-a[0], dy = b[1]-a[1]; const l = Math.hypot(dx, dy) || 1; dx /= l; dy /= l;
      const k = w*(i === 0 || i === q.length-1 ? .35 : (.85 + .3*Math.sin(i*1.7))); L.push([p[0] - dy*k, p[1] + dx*k]); R.push([p[0] + dy*k, p[1] - dx*k]); });
    const all = L.concat(R.reverse());
    const n = all.length; let d = `M${all[0][0].toFixed(1)} ${all[0][1].toFixed(1)}`;
    for (let i=0;i<n;i++){ const p0 = all[(i-1+n)%n], p1 = all[i], p2 = all[(i+1)%n], p3 = all[(i+2)%n];
      d += ` C${(p1[0] + (p2[0]-p0[0])/6).toFixed(1)} ${(p1[1] + (p2[1]-p0[1])/6).toFixed(1)} ${(p2[0] - (p3[0]-p1[0])/6).toFixed(1)} ${(p2[1] - (p3[1]-p1[1])/6).toFixed(1)} ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`; }
    return d + "Z";
  }
  M.band = band;
  /* little peak triangles along a range */
  function peaks(pts, w, col, seed){
    const g = s("g", { fill:col }), rnd = BM.rng(seed || 3), q = pts.map(([lo, la]) => P(lo, la));
    for (let i=0;i<q.length-1;i++){ const a = q[i], b = q[i+1], n = Math.ceil(Math.hypot(b[0]-a[0], b[1]-a[1])/26);
      for (let k=0;k<n;k++){ const t = k/n, x = a[0] + (b[0]-a[0])*t + (rnd()-.5)*w*.9, y = a[1] + (b[1]-a[1])*t + (rnd()-.5)*w*.9, sz = 9 + rnd()*9;
        g.appendChild(s("path", { d:`M${(x-sz).toFixed(1)} ${(y+sz*.55).toFixed(1)} L${x.toFixed(1)} ${(y-sz).toFixed(1)} L${(x+sz).toFixed(1)} ${(y+sz*.55).toFixed(1)}Z` })); } }
    return g;
  }

  /* ---- the regional map ----
     opt: theme "paper"|"dark", labels (bool), regions (true|false|[ids]), road, ranges, deserts, iran,
          cities ("all" | [ids]), rivers, relief(bool), layers (bool: return separate layer groups) */
  M.persia = function(opt){
    opt = Object.assign({ theme:"paper", labels:true, regions:false, road:false, ranges:true, deserts:true, iran:false, cities:"all", rivers:true }, opt || {});
    const dark = opt.theme === "dark";
    const C = dark ? { sea:"#0F2A5A", land:"#2B2A3E", land2:"#353248", ink:"#F4E3C1", soft:"rgba(244,227,193,.65)", range:"#4a4466", range2:"#5c5680", peak:"#7a74a0", desert:"rgba(232,184,74,.16)", river:"#5FD6C8", road:"#E8B84A" }
                    : { sea:"#9FD3CB", land:"#EAD6AE", land2:"#E1C796", ink:"#2B1B10", soft:"rgba(43,27,16,.65)", range:"#B98A5E", range2:"#A9774B", peak:"#8a5a34", desert:"rgba(194,89,58,.12)", river:"#1E7FA0", road:"#B0213B" };
    const v = BM.svg(W, H, { class:"persia-map" });
    const G = v.groups = {};
    const grp = (name, attrs) => { const g = s("g", Object.assign({ class:"pm-" + name }, attrs || {})); v.appendChild(g); G[name] = g; return g; };
    // sea + land
    const base = grp("base");
    base.appendChild(s("rect", { width:W, height:H, fill:C.land }));
    base.appendChild(s("rect", { width:W, height:H, fill:"url(#p-sand)", opacity:dark ? .4 : .7 }));
    [MED, BLACK, RED, CYPRUS].forEach((poly, i) => base.appendChild(s("path", { d:smooth(poly, true), fill: i === 3 ? C.land : C.sea })));
    base.appendChild(s("path", { d:smooth(CASPIAN, true), fill:C.sea }));
    base.appendChild(s("path", { d:smooth(GULF, true), fill:C.sea }));
    if (opt.labels){
      const sea = (lon, lat, t, sz) => { const [x, y] = P(lon, lat); base.appendChild(s("text", { x, y, "text-anchor":"middle", "font-family":"Fraunces, Georgia, serif", "font-style":"italic", "font-size":sz || 26, fill: dark ? "#9FD3CB" : "#1E5E7A", opacity:.9 }, t)); };
      sea(50.9, 39.7, "Caspian Sea", 24); sea(52.6, 26.0, "Persian Gulf", 26); sea(29.2, 33.6, "Mediterranean Sea", 26); sea(58.6, 23.2, "Gulf of Oman", 22);
    }
    // relief
    if (opt.deserts){ const dg = grp("deserts"); Object.values(M.DESERTS).forEach(D => { const [x, y] = P(D.lon, D.lat); dg.appendChild(s("ellipse", { cx:x, cy:y, rx:D.rx, ry:D.ry, fill:C.desert })); dg.appendChild(s("ellipse", { cx:x, cy:y, rx:D.rx, ry:D.ry, fill:"url(#p-dots)", opacity:.35 })); if (opt.labels){ dg.appendChild(s("text", { x, y:y + 6, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":24, "letter-spacing":"3", fill:C.soft }, D.en)); } }); }
    if (opt.rivers){ const rg = grp("rivers"); Object.values(M.RIVERS).forEach(r => rg.appendChild(s("path", { d:smooth(r), fill:"none", stroke:C.river, "stroke-width":4, "stroke-linecap":"round", opacity:.85 }))); if (opt.labels){ const [x1, y1] = P(41.0, 34.1); rg.appendChild(s("text", { x:x1, y:y1, "font-family":"Fraunces, serif", "font-style":"italic", "font-size":19, fill:C.river, transform:`rotate(-28 ${x1} ${y1})` }, "Euphrates")); const [x2, y2] = P(43.7, 35.2); rg.appendChild(s("text", { x:x2, y:y2, "font-family":"Fraunces, serif", "font-style":"italic", "font-size":19, fill:C.river, transform:`rotate(-70 ${x2} ${y2})` }, "Tigris")); } }
    if (opt.ranges){
      const mg = grp("ranges");
      Object.values(M.RANGES).forEach((r, i) => { mg.appendChild(s("path", { d:band(r.pts, r.w), fill:C.range, opacity:.85, filter:"url(#fx-paper)" })); mg.appendChild(s("path", { d:band(r.pts, r.w*.5), fill:C.range2, opacity:.9 })); mg.appendChild(peaks(r.pts, r.w*.6, C.peak, 7 + i)); });
      if (opt.labels) Object.values(M.RANGES).forEach(r => { if (!r.en) return; const [x, y] = P(r.lab[0], r.lab[1]); mg.appendChild(s("text", { x, y, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":26, "letter-spacing":"4", fill:C.ink, stroke: dark ? "#2B2A3E" : "#EAD6AE", "stroke-width":6, "paint-order":"stroke", transform:`rotate(${r.ang} ${x} ${y})` }, r.en)); });
    }
    if (opt.iran){ const ig = grp("iran"); ig.appendChild(s("path", { d:pd(M.IRAN, true), fill:"none", stroke: dark ? "#F6D27A" : "#1E3A8A", "stroke-width":4, "stroke-dasharray":"10 7", opacity:.9 })); if (opt.labels){ const [x, y] = P(56.6, 32.6); ig.appendChild(s("text", { x, y, "text-anchor":"middle", "font-family":"Cinzel, serif", "font-weight":800, "font-size":40, "letter-spacing":"8", fill: dark ? "#F6D27A" : "#1E3A8A", opacity:.75 }, "IRAN TODAY")); } }
    if (opt.regions){
      const rg = grp("regions"); const ids = opt.regions === true ? Object.keys(M.REGIONS) : opt.regions;
      ids.forEach(id => { const R = M.REGIONS[id]; const g = s("g", { class:"pm-region", "data-id":id });
        g.appendChild(s("path", { d:smooth(R.blob, true), fill:R.col, opacity:.32, stroke:R.col, "stroke-width":4 }));
        const [x, y] = P(R.lon, R.lat); g.appendChild(s("text", { x, y, "text-anchor":"middle", "font-family":"Cinzel, serif", "font-weight":800, "font-size":30, "letter-spacing":"3", fill:C.ink, stroke: dark ? "#2B2A3E" : "#EAD6AE", "stroke-width":7, "paint-order":"stroke" }, R.en));
        rg.appendChild(g); });
    }
    if (opt.road){ const rd = grp("road"); const path = s("path", { d:smooth(M.ROAD), fill:"none", stroke:C.road, "stroke-width":7, "stroke-dasharray":"14 10", "stroke-linecap":"round", class:"pm-road" }); rd.appendChild(path); v.roadPath = path; if (opt.labels){ const [x, y] = P(36.2, 39.6); rd.appendChild(s("text", { x, y, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":24, "letter-spacing":"3", fill:C.road }, "THE ROYAL ROAD")); } }
    // cities
    const cg = grp("cities");
    const list = opt.cities === "all" ? Object.keys(M.PLACES) : (opt.cities || []);
    list.forEach(id => { const p = M.PLACES[id]; if (!p) return; const [x, y] = P(p.lon, p.lat); const g = s("g", { class:"pm-city", "data-id":id });
      if (p.kind === "peak") g.appendChild(s("path", { d:`M${x-12} ${y+8} L${x} ${y-14} L${x+12} ${y+8}Z`, fill:"#fff", stroke:C.ink, "stroke-width":2 }));
      else if (p.kind === "capital"){ g.appendChild(s("circle", { cx:x, cy:y, r:11, fill:"#E8B84A", stroke:C.ink, "stroke-width":3 })); g.appendChild(s("circle", { cx:x, cy:y, r:4, fill:C.ink })); }
      else g.appendChild(s("circle", { cx:x, cy:y, r:8, fill: p.kind === "modern" ? "#14B8A6" : p.kind === "site" ? "#C2593A" : C.ink, stroke: dark ? "#2B2A3E" : "#fff", "stroke-width":3 }));
      if (opt.labels){ const left = ["sardis","jerusalem","babylon","susa","behistun","nineveh"].indexOf(id) >= 0 && id !== "sardis"; g.appendChild(s("text", { x: x + (left ? -16 : 16) + (p.dx || 0), y: y + 8 + (p.dy || 0), "text-anchor": left ? "end" : "start", "font-family":"Atkinson Hyperlegible, sans-serif", "font-weight":700, "font-size":24, fill:C.ink, stroke: dark ? "#2B2A3E" : "#EAD6AE", "stroke-width":6, "paint-order":"stroke" }, p.en)); }
      cg.appendChild(g); });
    v.place = id => { const p = M.PLACES[id]; return p ? P(p.lon, p.lat) : [0, 0]; };
    // compass
    const nw = s("g", { transform:`translate(${W-70} ${H-90})`, opacity:.8 });
    nw.appendChild(s("path", { d:"M0 -40 L10 0 L0 -8 L-10 0Z", fill:C.ink })); nw.appendChild(s("text", { x:0, y:-48, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":24, fill:C.ink }, "N"));
    v.appendChild(nw);
    v.appendChild(s("text", { x:16, y:H - 14, "font-family":"Atkinson Hyperlegible, sans-serif", "font-size":16, fill:C.soft }, "Simplified map · places and coastlines approximate"));
    return v;
  };

  /* ---- a small orthographic globe (for Zoom to Persia) ---- */
  const LANDS = {
    eurasia:[[-10,36],[-9,43],[-2,44],[-5,48],[0,50],[5,53],[9,57],[5,62],[15,69],[25,71],[40,67],[60,69],[70,73],[80,73],[100,77],[115,74],[130,71],[150,71],[170,70],[180,68],[178,64],[165,60],[160,55],[156,51],[142,53],[140,48],[135,43],[129,35],[126,37],[122,40],[119,35],[122,30],[120,24],[110,20],[108,16],[109,12],[105,9],[100,13],[100,7],[103,1.5],[98,8],[98,16],[94,17],[92,22],[86,21],[80,15],[77,8],[73,17],[72,21],[67,24],[61,25],[57,26],[56.5,27],[52,27.5],[50,30],[48,30],[51,24],[56,24.5],[59,22.5],[55,17],[52,16],[45,13],[43,13],[39,21],[35,28],[34.5,29.5],[34,31],[35,33],[36,36],[30,36],[27,37],[26,40],[23,40],[22,37],[20,40],[19,42],[15,45],[12,44],[16,41],[18,40],[15,38],[12,42],[8,44],[3,43],[3,42],[-1,39],[-2,37],[-5,36]],
    africa:[[-17,21],[-16,12],[-12,7],[-8,4.5],[-3,5],[5,6],[9,4],[9.5,1],[12,-5],[13,-12],[12,-18],[15,-27],[18,-34],[20,-35],[26,-34],[31,-29],[35,-24],[35,-18],[40,-15],[40,-10],[39,-5],[42,0],[51,11],[43,12],[39,16],[36,22],[34,27],[32,31],[25,32],[20,32],[10,37],[0,36],[-6,36],[-10,30],[-16,25]],
    australia:[[114,-22],[114,-26],[115,-34],[118,-35],[124,-34],[130,-31.5],[135,-34.5],[138,-35],[140,-38],[146,-39],[150,-37],[153,-32],[153,-25],[150,-22],[146,-19],[145,-15],[142,-11],[141,-17],[136,-12],[132,-11],[129,-15],[126,-14],[122,-17],[118,-20]],
    nzn:[[172.7,-34.4],[174.5,-36],[175.9,-37.5],[178.5,-37.7],[177.9,-39.2],[176.9,-39.6],[175.3,-41.6],[174.6,-41.3],[174.8,-39.9],[173.8,-39.3],[174.6,-38.1],[174.3,-36.5]],
    nzs:[[172.7,-40.5],[174.3,-41.7],[173.3,-43],[172.8,-43.8],[171.2,-44.5],[170.7,-45.9],[169,-46.6],[166.5,-46],[166.8,-45],[168.3,-44],[170.5,-43],[171.8,-41.7]],
    borneo:[[109,1.5],[111,-3],[116,-4],[119,1],[117,7],[113,3]],
    sumatra:[[95,5.5],[98,4],[104,-2],[106,-6],[103,-5],[99,0]],
    newguinea:[[131,-1],[138,-2],[146,-6],[150,-10],[143,-9],[138,-8],[133,-4]],
    japan:[[130,31],[132,34],[135,34],[140,36],[141,41],[140,38],[136,36],[133,35]],
    madagascar:[[44,-25],[47,-25],[50,-15],[49,-12],[44,-17]],
    srilanka:[[80,6],[82,7],[81,9.5],[80,9]],
    caspianHole:[[47.5,45],[49,46.5],[53,46.5],[53,42],[53.5,40],[54,37],[51,36.8],[49,37.6],[49.5,40.5],[47.5,42.5]],
    blackHole:[[28,41.5],[28,46],[33,46],[37,47],[41.5,41.5],[36,41.5],[31,41.2]]
  };
  M.globe = function(R){
    R = R || 420;
    const v = BM.svg(R*2 + 40, R*2 + 40, { class:"globe", style:"overflow:visible" });
    const cx = R + 20, cy = R + 20;
    v.appendChild(s("circle", { cx, cy, r:R + 14, fill:"url(#g-lamp)", opacity:.25 }));
    v.appendChild(s("circle", { cx, cy, r:R, fill:"#1E5E8A" }));
    const land = s("g"); v.appendChild(land);
    const grat = s("g", { fill:"none", stroke:"rgba(255,255,255,.12)", "stroke-width":1.5 }); v.appendChild(grat);
    v.appendChild(s("circle", { cx, cy, r:R, fill:"none", stroke:"rgba(255,255,255,.35)", "stroke-width":3 }));
    const shade = s("circle", { cx, cy, r:R, fill:"url(#g-globe-shade)" }); v.appendChild(shade);
    const pins = s("g"); v.appendChild(pins);
    v.insertBefore(s("defs", null, s("radialGradient", { id:"g-globe-shade", cx:".35", cy:".3", r:".8" }, s("stop", { offset:"0", "stop-color":"#fff", "stop-opacity":".12" }), s("stop", { offset:".7", "stop-color":"#000", "stop-opacity":"0" }), s("stop", { offset:"1", "stop-color":"#000", "stop-opacity":".4" }))), v.firstChild);
    const rad = d => d*Math.PI/180;
    function proj(lon, lat, lon0, lat0){
      const l = rad(lon - lon0), p = rad(lat), p0 = rad(lat0);
      const cosc = Math.sin(p0)*Math.sin(p) + Math.cos(p0)*Math.cos(p)*Math.cos(l);
      let x = R*Math.cos(p)*Math.sin(l), y = R*(Math.cos(p0)*Math.sin(p) - Math.sin(p0)*Math.cos(p)*Math.cos(l));
      if (cosc < 0){ const k = R/Math.hypot(x, y || 1e-6); x *= k; y *= k; }
      return [cx + x, cy - y, cosc >= 0];
    }
    v.draw = function(lon0, lat0, marks){
      BM.clear(land); BM.clear(grat); BM.clear(pins);
      Object.keys(LANDS).forEach(k => { const pts = LANDS[k].map(([lo, la]) => proj(lo, la, lon0, lat0)); if (!pts.some(p => p[2])) return;
        land.appendChild(s("path", { d:"M" + pts.map(p => p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" L") + "Z", fill: /Hole/.test(k) ? "#1E5E8A" : (k.startsWith("nz") ? "#62D39F" : "#E1C796"), stroke: /Hole/.test(k) ? "none" : "#8a6a3c", "stroke-width":1.5 })); });
      for (let la=-60; la<=60; la+=30){ const pts = []; for (let lo=-180; lo<=180; lo+=6){ const p = proj(lo, la, lon0, lat0); if (p[2]) pts.push(p); else if (pts.length){ grat.appendChild(s("path", { d:"M" + pts.map(q => q[0].toFixed(1) + " " + q[1].toFixed(1)).join(" L") })); pts.length = 0; } } if (pts.length > 1) grat.appendChild(s("path", { d:"M" + pts.map(q => q[0].toFixed(1) + " " + q[1].toFixed(1)).join(" L") })); }
      (marks || []).forEach(m => { const p = proj(m.lon, m.lat, lon0, lat0); if (!p[2]) return; pins.appendChild(s("circle", { cx:p[0], cy:p[1], r:12, fill:m.col || "#E8B84A", stroke:"#fff", "stroke-width":3 })); pins.appendChild(s("text", { x:p[0] + 18, y:p[1] + 9, "font-family":"Atkinson Hyperlegible, sans-serif", "font-weight":700, "font-size":28, fill:"#fff", stroke:"#0F1D4A", "stroke-width":6, "paint-order":"stroke" }, m.t)); });
    };
    return v;
  };
})(window.BM);
