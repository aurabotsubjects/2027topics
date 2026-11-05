/* ==========================================================
   STYLISED PAPER MAP — Pacific-centred (Aotearoa ↔ the Americas)
   Coarse coastlines on purpose: it's cut paper, not GPS.
   ========================================================== */
(function(FC){
  "use strict";
  const s = FC.s;
  const M = FC.map = {};
  const K = 10;
  M.proj = (lon, lat) => [ (((lon % 360) + 360) % 360 - 100) * K, (80 - lat) * K ];
  M.unproj = (x, y) => { let lon = x / K + 100; if (lon > 180) lon -= 360; return [lon, 80 - y / K]; };

  const LAND = {
    northAmerica: [[-168,66],[-162,70],[-156,71.2],[-141,69.8],[-128,70],[-115,68.5],[-95,69],[-87,67.5],[-82,63],[-92,57.5],[-82,52],[-79,55],[-77,60],[-70,61],[-64,60],[-61,56],[-56,52],[-60,47],[-66,44],[-70,42],[-74,40],[-76,35],[-81,31],[-80,26],[-81,25],[-83,29],[-89,30],[-94,29.5],[-97,26],[-97.6,22],[-96,19],[-94,18.2],[-91,18.8],[-90.3,21],[-87,21.5],[-87.6,18.5],[-88.2,16],[-84,15.8],[-83.3,11],[-81.5,9],[-79.5,9.5],[-77.4,8.6],[-78.3,7.6],[-80.5,7.4],[-82,8.2],[-85.5,10],[-85.8,11.5],[-87.6,13],[-91,14],[-92.5,14.6],[-95,16],[-99,16.7],[-103,18.5],[-105.5,20.5],[-105.4,22.6],[-108.5,25.5],[-111,28],[-114.7,31.7],[-112.5,29],[-110.3,24.2],[-109.9,22.9],[-112,24.8],[-114.2,28],[-115.8,30.4],[-117.1,32.5],[-118.5,34],[-120.6,34.6],[-122.5,37.8],[-124.2,40.5],[-124,46],[-124.7,48.4],[-127,50.5],[-130,54.5],[-134,58],[-140,60],[-146,61],[-152,59],[-158,57],[-164,55],[-158,58.5],[-162,60],[-165,62.5],[-164.5,64.5],[-168,65.6]],
    southAmerica: [[-77.4,8.6],[-75.5,10.5],[-72,12],[-71.5,10.5],[-68,10.5],[-63,10.7],[-61,10],[-58,7],[-54,6],[-51.5,4.5],[-50,1.8],[-48.5,-1],[-44.5,-2.5],[-40,-2.8],[-35.3,-5.2],[-34.8,-7.5],[-35.5,-9.5],[-38.5,-13],[-39,-17.5],[-40.5,-21],[-42,-23],[-44.5,-23.3],[-48.5,-26.5],[-48.8,-28.5],[-50.5,-31],[-52.5,-33.5],[-55,-35],[-57.5,-35],[-57,-37],[-58,-38.5],[-62,-39],[-62.3,-40.8],[-65,-41],[-64,-42.5],[-65.5,-45],[-67.5,-46.5],[-66,-48],[-68.5,-50.5],[-69,-52.5],[-71,-54],[-74,-52.5],[-75.5,-48],[-74,-44],[-73.5,-41],[-73.5,-37],[-71.6,-33],[-71.4,-30],[-70.5,-25],[-70.2,-18.5],[-72,-17],[-76,-14],[-79.5,-7.5],[-81.2,-5],[-80.5,-2],[-80.5,0.5],[-78.8,1.8],[-77.3,4],[-77.5,6.5],[-78.3,7.6]],
    cuba: [[-84.9,21.9],[-82,23.1],[-77,22],[-74.2,20.2],[-77.5,19.9],[-80.5,21.8]],
    hispaniola: [[-74.4,18.4],[-72.5,19.9],[-69,19.6],[-68.4,18.5],[-71.5,17.8]],
    australia: [[113,-22],[114,-26],[115,-34],[118,-35],[123,-34],[129,-31.5],[132,-31.5],[135,-34.5],[138,-35],[140,-38],[144,-38.5],[147,-38],[150,-37.5],[151.5,-33],[153.5,-28.5],[153,-25],[150,-22],[146,-19],[145.5,-15],[143.5,-14],[142.5,-10.7],[141.5,-13],[141,-17],[139.5,-17.5],[136,-15],[136.5,-12],[132,-11.5],[129,-15],[126,-14],[122,-17.5],[119,-20],[114,-21.8]],
    nzNorth: [[172.7,-34.4],[174.5,-35.8],[175.8,-37],[178.5,-37.7],[177.9,-39.2],[176.8,-40.2],[175.2,-41.6],[174.6,-41.2],[174.8,-39.8],[173.8,-39.2],[174.6,-38],[174.3,-36.5],[173,-35.2]],
    nzSouth: [[172.7,-40.5],[174.1,-41.3],[173.9,-42.3],[172.8,-43.6],[171.3,-44.3],[170.7,-45.9],[169.2,-46.6],[166.5,-46],[166.8,-45.3],[168.3,-44],[170.5,-42.8],[171.6,-41.7],[172.1,-40.8]],
    png: [[141,-2.6],[145,-4.2],[147.5,-6],[150.5,-10.5],[147,-10],[143.5,-9],[141,-9.2]],
    asia: [[105,22],[108,21.5],[110,20],[112,22],[117,23.5],[120,27],[122,31],[121,36],[119,39],[122,40.5],[126,38],[129,35],[130,42.5],[135,43.5],[140,48],[142,54],[136,55],[140,60],[150,59.5],[156,61],[163,61],[170,60],[180,65],[180,75],[105,75]],
    japan: [[130,31],[132,34],[135,34],[140,35.5],[141.5,39],[141,41.5],[140,41],[139,38],[136,36.5],[133,35.5],[130,33.5]],
    hawaii: [[-155.9,19.1],[-154.8,19.5],[-155.8,20.2]],
    greenland: [[-55,60],[-43,60],[-35,66],[-22,70],[-20,75],[-60,75],[-58,70],[-52,66]]
  };
  M.LAND = LAND;
  M.MESOAMERICA = [[-106,23.5],[-97.6,22.3],[-96,19],[-94,18.2],[-91,18.8],[-90.3,21],[-87,21.5],[-87.6,18.5],[-88.2,16],[-86.5,15.9],[-85.7,12.5],[-85.8,10.2],[-87.6,13],[-91,14],[-92.5,14.6],[-95,16],[-99,16.7],[-103,18.5],[-105.5,20.5]];
  M.CENTRAL = [[-92.2,17.8],[-91,18.8],[-90.3,21],[-87,21.5],[-87.6,18.5],[-88.2,16],[-84,15.8],[-83.3,11],[-81.5,9],[-79.5,9.5],[-77.4,8.6],[-78.3,7.6],[-80.5,7.4],[-82,8.2],[-85.5,10],[-85.8,11.5],[-87.6,13],[-91,14],[-92.5,14.6]];
  M.PLACES = {
    christchurch:{ n:"Ōtautahi Christchurch", ll:[172.6,-43.5] },
    tikal:{ n:"Tikal", ll:[-89.6,17.2] },
    mexicoCity:{ n:"Mexico City", ll:[-99.1,19.4] },
    chichen:{ n:"Chichén Itzá", ll:[-88.6,20.7] },
    palenque:{ n:"Palenque", ll:[-92.0,17.5] },
    laVenta:{ n:"La Venta (Olmec)", ll:[-94.0,18.1] },
    panama:{ n:"Panama Canal", ll:[-79.6,9.1] },
    maracaibo:{ n:"Lake Maracaibo", ll:[-71.6,9.8] },
    lima:{ n:"Lima", ll:[-77.0,-12.0] },
    cusco:{ n:"Cusco", ll:[-72.0,-13.5] },
    manaus:{ n:"Manaus (Amazon)", ll:[-60.0,-3.1] },
    rio:{ n:"Rio de Janeiro", ll:[-43.2,-22.9] },
    buenosAires:{ n:"Buenos Aires", ll:[-58.4,-34.6] },
    atacama:{ n:"Atacama Desert", ll:[-69.5,-23.5] },
    patagonia:{ n:"Patagonia", ll:[-71.0,-49.5] },
    honolulu:{ n:"Hawaiʻi", ll:[-157.8,21.3] }
  };

  const pathOf = pts => "M" + pts.map(([lo,la]) => M.proj(lo,la).map(v => v.toFixed(0)).join(" ")).join(" L") + "Z";
  M.pathOf = pathOf;

  /* build a map svg. opts: { view:[x,y,w,h], graticule:true, labels:true, landFill, ocean } */
  M.build = function(opts){
    opts = opts || {};
    const view = opts.view || M.VIEWS.pacific;
    const v = FC.svg(2400, 1400, { class:"fc-map", viewBox:view.join(" "), preserveAspectRatio:"xMidYMid meet" });
    const ocean = s("g", { class:"m-ocean" });
    ocean.appendChild(s("rect", { x:-400, y:-200, width:3200, height:1900, fill:opts.ocean || "#17505a" }));
    ocean.appendChild(s("rect", { x:-400, y:-200, width:3200, height:1900, fill:"url(#p-dots)", opacity:.35 }));
    v.appendChild(ocean);
    // graticule
    const gr = s("g", { class:"m-grat", stroke:"rgba(233,220,192,.16)", "stroke-width":1.5, "vector-effect":"non-scaling-stroke" });
    for (let lon=-180; lon<=180; lon+=10){ const [x] = M.proj(lon, 0); gr.appendChild(s("line", { x1:x, x2:x, y1:0, y2:1400, "vector-effect":"non-scaling-stroke" })); }
    for (let lat=-60; lat<=80; lat+=10){ const [,y] = M.proj(0, lat); gr.appendChild(s("line", { x1:0, x2:2400, y1:y, y2:y, "vector-effect":"non-scaling-stroke" })); }
    v.appendChild(gr);
    // special lines
    const sp = s("g", { class:"m-special", fill:"none", "vector-effect":"non-scaling-stroke" });
    const eq = M.proj(0,0)[1], tc = M.proj(0,23.44)[1], tcap = M.proj(0,-23.44)[1];
    sp.appendChild(s("line", { class:"m-equator", x1:0, x2:2400, y1:eq, y2:eq, stroke:"#F0C25E", "stroke-width":4, "vector-effect":"non-scaling-stroke", opacity:0 }));
    sp.appendChild(s("line", { class:"m-tropic", x1:0, x2:2400, y1:tc, y2:tc, stroke:"#E08A55", "stroke-width":3, "stroke-dasharray":"14 10", "vector-effect":"non-scaling-stroke", opacity:0 }));
    sp.appendChild(s("line", { class:"m-tropic", x1:0, x2:2400, y1:tcap, y2:tcap, stroke:"#E08A55", "stroke-width":3, "stroke-dasharray":"14 10", "vector-effect":"non-scaling-stroke", opacity:0 }));
    sp.appendChild(s("rect", { class:"m-southhemi", x:-400, y:eq, width:3200, height:1400, fill:"#7FF3FF", opacity:0 }));
    v.appendChild(sp);
    // land: shadow + paper
    const land = s("g", { class:"m-land", filter:"url(#fx-paper-rough)" });
    Object.keys(LAND).forEach(k => {
      land.appendChild(s("path", { class:"m-l m-" + k, d:pathOf(LAND[k]), fill:opts.landFill || "#E9DCC0", stroke:"#C9A97A", "stroke-width":1.2, "vector-effect":"non-scaling-stroke" }));
    });
    v.appendChild(land);
    // regions (hidden until shown)
    const reg = s("g", { class:"m-regions" });
    reg.appendChild(s("path", { class:"m-r m-r-na", d:pathOf(LAND.northAmerica), fill:"#D9A23A", opacity:0 }));
    reg.appendChild(s("path", { class:"m-r m-r-ca", d:pathOf(M.CENTRAL), fill:"#C46A3A", opacity:0 }));
    reg.appendChild(s("path", { class:"m-r m-r-sa", d:pathOf(LAND.southAmerica), fill:"#1F7A5A", opacity:0 }));
    reg.appendChild(s("path", { class:"m-r m-r-carib", d:pathOf(LAND.cuba) + pathOf(LAND.hispaniola), fill:"#2FB3A6", opacity:0 }));
    reg.appendChild(s("path", { class:"m-r m-r-meso", d:pathOf(M.MESOAMERICA), fill:"#B3262E", opacity:0, stroke:"#F4EBD8", "stroke-width":3, "stroke-dasharray":"10 7", "vector-effect":"non-scaling-stroke" }));
    v.appendChild(reg);
    v.appendChild(s("g", { class:"m-route" }));
    v.appendChild(s("g", { class:"m-marks" }));
    v.appendChild(s("g", { class:"m-labels" }));
    return v;
  };
  M.VIEWS = {
    pacific:[60, 80, 2280, 1320],
    americas:[1280, 400, 1060, 1000],
    meso:[1470, 520, 360, 240],
    nzToMexico:[540, 360, 1520, 930]
  };
  M.animateView = function(svgEl, to, ms){
    const from = svgEl.getAttribute("viewBox").split(/\s+/).map(Number);
    if (!FC.motionOK()){ svgEl.setAttribute("viewBox", to.join(" ")); return Promise.resolve(); }
    return new Promise(res => {
      const t0 = performance.now(); ms = ms || 1600;
      (function step(t){
        let k = Math.min(1, (t - t0)/ms); k = k < .5 ? 4*k*k*k : 1 - Math.pow(-2*k+2, 3)/2;
        svgEl.setAttribute("viewBox", from.map((f,i) => (f + (to[i]-f)*k).toFixed(2)).join(" "));
        if (k < 1) requestAnimationFrame(step); else res();
      })(t0);
    });
  };
  /* marker: pin with label, size relative to view width */
  M.mark = function(svgEl, ll, label, opt){
    opt = opt || {};
    const vb = svgEl.getAttribute("viewBox").split(/\s+/).map(Number), sc = (opt.scale || 1) * vb[2] / 1000;
    const [x,y] = M.proj(ll[0], ll[1]);
    const g = s("g", { class:"m-mark", transform:`translate(${x} ${y})` });
    g.appendChild(s("circle", { r:16*sc, fill:opt.color || "#B3262E", stroke:"#F4EBD8", "stroke-width":4*sc }));
    g.appendChild(s("circle", { r:34*sc, fill:"none", stroke:opt.color || "#B3262E", "stroke-width":3*sc, opacity:.6, class:"m-ping" }));
    if (label){
      const left = opt.side === "left";
      const t = s("text", { x:(left ? -26 : 26)*sc, y:(left ? 50 : -22)*sc, "text-anchor": left ? "end" : "start", "font-family":"Big Shoulders Display, sans-serif", "font-weight":900, "font-size":34*sc, fill:"#F4EBD8", stroke:"#14110F", "stroke-width":8*sc, "paint-order":"stroke", "letter-spacing":1*sc }, label.toUpperCase());
      g.appendChild(t);
    }
    svgEl.querySelector(".m-marks").appendChild(g);
    return g;
  };
  M.label = function(svgEl, ll, text, size, color, opt){
    const [x,y] = M.proj(ll[0], ll[1]);
    const t = s("text", Object.assign({ x, y, "text-anchor":"middle", "font-family":"Big Shoulders Display, sans-serif", "font-weight":900, "font-size":size, fill:color || "rgba(244,235,216,.85)", "letter-spacing":size*.12 }, opt||{}), text);
    svgEl.querySelector(".m-labels").appendChild(t);
    return t;
  };
  /* great-circle-ish arc (pretty curve) between two lon/lat points */
  M.arc = function(a, b, lift){
    const [x1,y1] = M.proj(a[0],a[1]), [x2,y2] = M.proj(b[0],b[1]);
    const mx = (x1+x2)/2, my = (y1+y2)/2 - (lift ?? Math.hypot(x2-x1,y2-y1)*.22);
    return `M${x1} ${y1} Q${mx} ${my} ${x2} ${y2}`;
  };
})(window.FC);
