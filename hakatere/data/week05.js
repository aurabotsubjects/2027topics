/* ==========================================================
   WEEK 5 — MAP SHEET V · THE RUN
   Notes: [KEY, text]  KEY = SAY ASK LISTEN IF CLICK TALK DEEPER PACE SAFETY WAIT NOTE TIKANGA
   Facts are sourced in data/sources.js (tags match blueprint §18).
   ========================================================== */
(function(BM){
  "use strict";

  /* a nor'west sky with its arch — for Tuesday and Friday */
  const archSVG = () => {
    const s = BM.s, v = BM.svg(600, 600, { style:"width:600px;height:600px;border-radius:10px;box-shadow:var(--sh-3)" });
    v.appendChild(s("rect", { width:600, height:600, fill:"#9fb3bd" }));
    v.appendChild(s("path", { d:"M-20 250 C 150 150, 450 150, 620 250 L620 330 C 450 250, 150 250, -20 330Z", fill:"#d8e9f0" }));
    v.appendChild(s("path", { d:"M-20 0 H620 V230 C 450 130, 150 130, -20 230Z", fill:"#7d8f99" }));
    v.appendChild(BM.art.range(600, 600, 380, 90, 6, "#5b666b", { snow:"#eef2f2", peaks:6 }));
    v.appendChild(s("rect", { y:430, width:600, height:170, fill:"#c9a04a" }));
    v.appendChild(s("path", { d:"M0 470 C 200 460, 400 480, 600 465", stroke:"#3b5a2a", "stroke-width":14, fill:"none" }));
    v.appendChild(s("text", { x:300, y:200, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":26, fill:"#1F2A30", "letter-spacing":"2" }, "THE ARCH: CLEAR SKY UNDER THE CLOUD"));
    return v;
  };

  /* rainfall bars — Christchurch and the two big North Island cities */
  const rainSVG = () => {
    const s = BM.s, v = BM.svg(600, 600, { style:"width:600px;height:600px;border-radius:10px;box-shadow:var(--sh-3)" });
    v.appendChild(s("rect", { width:600, height:600, fill:"#f6f1e4" }));
    v.appendChild(s("text", { x:300, y:56, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":30, fill:"#1F2A30", "letter-spacing":"2" }, "AVERAGE RAIN IN A YEAR"));
    const base = 520, k = .28;
    [[ "Christchurch", 648, "#B4412F", "648 mm" ], [ "Auckland / Wellington", 1296, "#2C6F92", "about twice" ]].forEach(([n, mm, c, lab], i) => {
      const x = 110 + i*230, hh = mm*k;
      v.appendChild(s("rect", { x, y:base - hh, width:150, height:hh, rx:6, fill:c }));
      v.appendChild(s("text", { x:x + 75, y:base - hh - 14, "text-anchor":"middle", "font-family":"Atkinson Hyperlegible", "font-weight":700, "font-size":26, fill:"#1F2A30" }, lab));
      v.appendChild(s("text", { x:x + 75, y:base + 36, "text-anchor":"middle", "font-family":"Atkinson Hyperlegible", "font-size":22, fill:"#1F2A30" }, n));
    });
    v.appendChild(s("line", { x1:80, y1:base, x2:540, y2:base, stroke:"#1F2A30", "stroke-width":3 }));
    v.appendChild(s("text", { x:300, y:585, "text-anchor":"middle", "font-family":"Atkinson Hyperlegible", "font-size":17, fill:"#4B5357" }, "Source: Te Ara (Canterbury region). North Island bar is approximate."));
    return v;
  };

  /* ======================= MONDAY · HISTORY ======================= */
  const mon = {
    id:"w05-mon", week:5, day:"mon", subject:"history", duration:50,
    title:"Sheep Runs & the High Country: Hakatere Station", guide:"nell",
    codes:["SS-H","SS-P","ANZH","SS-E"],
    coverage:"Y6 History (2027): Victorian-era life for different social groups (workers, women, owners); buildings and technology. Economic activity: pastoral farming. Practices: using primary sources and heritage places as evidence.",
    li:"We are learning what life was like on a high-country sheep station, and how it was different for different people.",
    sc:["I can describe station life using evidence from Hakatere Station.","I can compare the lives of shepherds, musterers, cooks and station wives.","I can compare station life then with life today."],
    vocab:[
      { w:"run", def:"a large area of land leased for grazing sheep" },
      { w:"station", def:"a big sheep or cattle farm, especially in the high country" },
      { w:"merino", def:"a breed of sheep with very fine wool, suited to the high country" },
      { w:"musterer", def:"a worker who gathers sheep from the hills, using dogs" },
      { w:"head shepherd", def:"the worker in charge of the sheep and the other shepherds" },
      { w:"cob", def:"a building material made of clay, earth and straw" },
      { w:"heritage", def:"places and things from the past that we keep and care for" },
      { w:"Victorian", def:"from the time Queen Victoria reigned (1837–1901)" }
    ],
    prep:{ min:5, items:["Field Journals","Optional: show DOC's or Tohu Whenua's Hakatere heritage pages on the board","Optional: a piece of merino wool or fleece to pass round"] },
    safety:[],
    tikanga:["Before stations, this area was part of a seasonal trail for mahika kai, and Ngāi Tahu whānau and hapū still hold knowledge of those trails (DOC). Link back to Weeks 2–4 so students see both stories in one place."],
    hononga:"**Two stories in one place.** The land around Hakatere Station is also covered by a **Statutory Acknowledgement and Deed of Recognition** under the **Ngāi Tahu Claims Settlement Act 1998**, because of its importance to Ngāi Tahu. The trails and mahika kai came first; the station came after Kemp's Deed.",
    paths:[
      { id:"A", name:"The Recorder", product:"Diary of a Musterer or Station Wife", steps:["Choose a role: **musterer** or **station wife**, about **1890**.","Write **one day's diary**, from before dawn to evening.","Include **three facts** from today's slides (the cottage, isolation, merino, the Trysting Stone…)."], flying:"Add a second entry from a different role, about the same day." },
      { id:"B", name:"The Maker", product:"Model of the Stone Cottage", steps:["Build the **1862 stone cottage** from card, clay or Lego.","Show the **stone walls**, the **roof** and the **door**.","Label it with **three uses** it had over time."], flying:"Add the shearers' quarters or the cook shop and label their dates." },
      { id:"C", name:"The Storyteller", product:"Victorian vs Today Debate", steps:["In pairs, debate: **‘Life on a station in 1890 was better than today.’**","One argues **for**, one argues **against**, using facts from today.","Finish by agreeing on **one thing that was better then** and **one that's better now**."], flying:"Bring in the view of a station wife, who was often very isolated."}
    ],
    supportedShort:"role picture cards, a then/now table, sentence frames (“In 1890 a musterer … but today …”).",
    lens:{
      pillar:"manaaki", title:"The good shepherd",
      look:"Look again at the head shepherd: up before dawn, counting every sheep, out in the snow for the ones that are lost.",
      ref:"John 10:11, 14",
      paraphrase:"Jesus said: I am the good shepherd. The good shepherd gives up his life for the sheep. I know my sheep and my sheep know me.",
      talk:[
        { q:"What did a good shepherd at Hakatere have to do for the sheep?", listen:"Count them; find lost ones; bring them down before snow; know them; protect them; work in all weather." },
        { q:"Jesus calls Himself the good shepherd. What does that tell us about how He cares for us?", listen:"He knows us by name; He looks for us when we're lost; He protects us; He gave His life for us." }
      ],
      live:"Like a good shepherd, notice **one person** who seems ‘lost’ or alone this week, and include them."
    },
    clue:{ prompt:"The stone cottage was built in 1862. How many decades is that before 1872?", answer:1, explain:"1872 − 1862 = 10 years = 1 decade. Trig Clue 1 is saved for Friday!" },
    next:"Tuesday — Sam says a hot, dry wind is coming over the mountains. Why is it so warm?",
    rubric:[
      { c:"Station life", code:"SS-H · SS-E",
        d:["Says people farmed sheep.","“They had sheep.”"],
        a:["Describes station life using evidence.","“Merino farming was the main work. The stone cottage, built in 1862, housed the head shepherds and later the post office.”"],
        f:["Uses the buildings as evidence of change over time.","“The cottage, the 1940s cook shop and the trials show the station kept changing.”"],
        i:["I know they farmed sheep.","I can describe station life using evidence.","I can use buildings as evidence of change."] },
      { c:"Different lives", code:"SS-H · SS-P",
        d:["Describes one job.","“Musterers got the sheep.”"],
        a:["Compares the lives of different groups.","“Musterers worked outside on the tops; station wives worked at home and could be very isolated.”"],
        f:["Explains why lives were different.","“Women were scarce in the high country, so a station wife might go months without seeing another woman.”"],
        i:["I can describe one job.","I can compare the lives of different groups.","I can explain why their lives were different."] },
      { c:"Then & now", code:"SS-P",
        d:["Says it was old-fashioned.","“They didn't have phones.”"],
        a:["Compares station life then and now.","“Then: letters and walking 20 km for tea. Now: phones, roads and the internet.”"],
        f:["Weighs what was gained and lost.","“We're less isolated now, but we might know our neighbours less.”"],
        i:["I know life was different.","I can compare station life then and now.","I can weigh what was gained and lost."] }
    ],
    plan:{
      prior:"Students know Kemp's Deed (Week 4): after 1848 the Crown sold the land to settlers. Many students have farming families; some have visited the Ashburton Lakes and seen Hakatere Station.",
      kc:["Thinking","Relating to others","Using language, symbols & texts"],
      sequence:[
        ["0–6","Field Note","Nell's note: a run and its stone cottage. Trig Check (Week 4). LI/SC.","Recall; predict."],
        ["6–20","Survey","Settlers arrive; the run; the buildings; women in the high country; **A Day on the Run**; caring for it today.","Compare; discuss."],
        ["20–38","Choose Your Path","Introduce A/B/C. Roam: “Whose life is this? What's the evidence?”","Diary / cottage model / debate."],
        ["38–45","Through the Lens","John 10:11 — four moves.","Discuss; include someone."],
        ["45–50","Trig Clue & Exit","Trig Clue 1 (answer 1); self-assessment; wheat sheaves.","Solve; self-assess."]
      ],
      diff:{
        supported:"Role cards; then/now table; sentence frames.",
        esol:"Act out jobs (mustering, baking, washing); picture glossary.",
        learning:"Use A Day on the Run on the board with a partner; choice of product; calm screen available.",
        flying:"Change over time from the buildings; why women's lives were so isolated."
      },
      assess:{
        lookFor:["Describes station life with evidence","Compares the lives of different groups","Compares then and now"],
        evidence:["A Day on the Run discussion","Path products (photograph)","Exit self-assessment"]
      },
      inquiry:["Did students connect the station to Kemp's Deed and mahika kai?","Who used the buildings as evidence of change?","Families with station connections: invite a visitor or photo for Week 7 (People & mountains)."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"nell", meta:"Conservation room · Sheet V",
        msg:"Sheet V is a proper map again: fenced paddocks, dots for sheep, a lake, and one little building drawn very neatly: a **stone cottage**. The surveyor has written *Hakatere Stn*. That cottage is **still standing today**. Let's find out who lived there.",
        notes:[["SAY","Read the message. 🟡 Nell is fictional; the station and cottage are real."],["ASK","“Has anyone been up to the Ashburton Lakes or seen Hakatere Station?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"When and where was Kemp's Deed signed?", a:"Akaroa, 12 June 1848, by 16 Ngāi Tahu chiefs." }, { q:"What happened to the promised reserves in Hakatere?", a:"No reserves were surveyed in Hakatere, and mahika kai were not protected." }, { q:"What bearing opened Sheet IV?", a:"027° (16 + 6 + 4 + 1)." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"After the deed", title:"The settlers *arrive*",
        bullets:["The **Canterbury Association** planned an English settlement in Canterbury.","Its **first four ships**, the *Charlotte Jane*, *Randolph*, *Sir George Seymour* and *Cressy*, arrived at **Lyttelton in December 1850**.","Settlers took up huge **runs** for sheep. **Hakatere Station** was taken up in **1857** by **Thomas Henry Potts**."],
        visual:{ map:{ theme:"paper", labels:"both", relief:true }, size:560 },
        notes:[["SAY","Facts from Christchurch City Libraries (The first four ships) and Tohu Whenua."],["ASK","“Kemp's Deed was 1848. The ships came in 1850. What do you notice?”"],["LISTEN","The land was bought just before the settlers came; it was being got ready for them."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Wool in the high country", title:"Life on the *run*",
        bullets:["**Pastoral farming**, especially **merino sheep**, was the main work in the early days of European settlement around Hakatere.","Native plants were seen as an obstacle to travel and grazing, and were often **cleared by burning**.","Workers and their families were very **isolated**: they might go **months without seeing neighbours**."],
        visual:{ artefact:"fleece" },
        notes:[["SAY","Facts from DOC (Hakatere Station) and Tohu Whenua."],["CLICK","If you brought merino wool, pass it round: “Feel how fine it is.”"],["ASK","“Why merino sheep in the high country?”"],["LISTEN","Hardy in cold and snow; fine wool was valuable; good on tussock."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Buildings as evidence", title:"The Hakatere *buildings*", h:"500px",
        cards:[ { artefact:"cottage", t:"Stone cottage · 1862", d:"Built of **cob and local stone**, possibly the **oldest building in Mid Canterbury**. Home for **head shepherds**, then the ‘married quarters’, later the **post office** and a mutton chiller.", foot:"Still standing" }, { icon:"🛏️", t:"Men's quarters", d:"A long timber building, built **bit by bit** in the late 1800s for the **single men** and **shearers**.", foot:"Late 19th century" }, { icon:"🍲", t:"Cook shop · 1940s", d:"Added by **Sam Chaffey**. The station **cook** lived here, and shepherds **ate and socialised** here.", foot:"1940s" } ],
        notes:[["SAY","Facts from Tohu Whenua and DOC (Ōtūwharekai: Hakatere heritage)."],["ASK","“How can a building be a source of evidence?”"],["LISTEN","Its materials, size and changes show who lived there and how life changed."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"A cup of tea, 20 km away", title:"Women in the *high country*",
        bullets:["Women were **scarce** in the high country. One woman in the area reportedly went **almost ten years without seeing another woman**.","Local stories say **Mrs Lambie** of Hakatere and her nearest woman neighbour, **Mary Rutherford** of Mt Potts, met at the **Trysting Stone** by Lake Clearwater.","It was about a **20 km walk**, in long dresses and lace-up boots, **with their children**, for a cup of tea and a chat."],
        visual:{ artefact:"cottage" },
        notes:[["SAY","Facts from DOC. Say “local stories say”: it's a story passed down, not a written record."],["ASK","“Why would someone walk 20 km for a cup of tea?”"],["LISTEN","Loneliness; friendship; news; to talk to another woman; help with children."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Choose a role", title:"A Day on the Run", ix:"dayontherun",
        notes:[["CLICK","Choose a role, then press → to move through the day. Press ‘Then / Today’ to compare."],["ASK","At each step: “How is this different for the other roles?”"],["NOTE","🟡 Historical fiction set about 1890, based on DOC and Tohu Whenua accounts. The roles are not real people."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Keeping the past", title:"Caring for *Hakatere* today",
        bullets:["**Sam Chaffey** started the annual **Hakatere sheepdog trials** to bring musterers to the district. They were first held in **1946** and ran until **2007**.","The buildings were bought with the station in **2008** and are cared for by **DOC** with volunteers from the **Hakatere Heritage Committee**.","Today the site is a **Tohu Whenua** heritage place, the gateway to Ō Tū Wharekai / the Ashburton Lakes."],
        visual:{ artefact:"cottage" },
        notes:[["SAY","Facts from Tohu Whenua and DOC."],["ASK","“Why do volunteers give their time to look after old buildings?”"]] },
      { type:"paths", phase:"paths", fs:null, minutes:18,
        notes:[["SAY","“Choose your path. Use evidence from today's slides.”"],["CLICK","Start the 18-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read John 10:11, 14."],["ASK","“What did a good shepherd at Hakatere have to do?”"]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 1872 − 1862 = 10 years = 1 decade."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = wheat sheaves."]] }
    ]
  };

  /* ======================= TUESDAY · GEOGRAPHY ======================= */
  const tue = {
    id:"w05-tue", week:5, day:"tue", subject:"geography", duration:50,
    title:"Mountain Weather: Rain Shadow, Nor'wester & the Arch", guide:"sam",
    codes:["SS-G","MA"],
    coverage:"Y6 Geography (2027): climate patterns and how landforms shape them; reading and comparing climate data (rainfall graphs).",
    li:"We are learning how the Southern Alps shape Canterbury's weather and climate.",
    sc:["I can explain the rain shadow.","I can explain why the nor'wester is warm and dry.","I can read a rainfall graph and explain what it shows."],
    vocab:[
      { w:"climate", def:"the usual weather of a place over many years" },
      { w:"westerly", def:"a wind blowing from the west" },
      { w:"rain shadow", def:"a dry area on the side of mountains away from the wind" },
      { w:"nor'wester", def:"Canterbury's hot, dry, gusty north-west wind" },
      { w:"föhn wind", say:"FERN", def:"a warm, dry wind that blows down the side of mountains" },
      { w:"lenticular cloud", def:"a smooth, lens-shaped cloud made by air flowing over mountains" },
      { w:"drought", def:"a long time with much less rain than usual" }
    ],
    prep:{ min:5, items:["Field Journals","Optional: check MetService for a nor'west day and show the forecast","Optional: a photo of the nor'west arch"] },
    safety:[],
    tikanga:["Te reo has names for winds; ask your Māori lead whether there is a local Kāi Tahu name for the nor'wester before using one."],
    hononga:"**Reading the sky.** People who live on the plains learn to read the nor'west arch as a sign of hot, windy weather to come. Māori, farmers and musterers all watched the sky over the mountains to plan their days.",
    paths:[
      { id:"A", name:"The Recorder", product:"Weather Explanation", steps:["Write an explanation: **why the West Coast is wet and Canterbury is dry**.","Use the words **westerly, cools, rain, sinks, warms, rain shadow**.","Include the **648 mm** fact and what it means."], flying:"Explain why the nor'wester can be warmer on the plains than it was on the West Coast." },
      { id:"B", name:"The Maker", product:"Rain-Shadow Diagram Model", steps:["Draw or build a **cross-section**: Tasman Sea → Alps → plains.","Add **arrows** for the air, **clouds and rain** on the west, **dry warm wind** on the east.","Add the **nor'west arch** above the plains."], flying:"Label temperatures at three points from the Rain Shadow interactive." },
      { id:"C", name:"The Storyteller", product:"MetService-Style Forecast", steps:["Plan a **1-minute forecast** for a **nor'west day** in Mid Canterbury.","Explain **why** it will be hot, dry and windy, and what the **arch** means.","Give **advice** for farmers and families (water, fire risk, sun)."], flying:"Add a forecast for the West Coast on the same day."}
    ],
    supportedShort:"a cross-section to label, weather picture cards, sentence frames (“The air rises and…”).",
    lens:{
      pillar:"mohio", title:"The breath of God",
      look:"Look again at the arch: wind and cloud held in place across the whole sky.",
      ref:"Job 37:9–13",
      paraphrase:"The storm comes from its chamber, and the cold from the driving winds. God loads the clouds with moisture and scatters His lightning; at His command they swirl around the earth, to do whatever He directs.",
      talk:[
        { q:"Job says the winds and clouds move at God's command. How does it feel to know God is in charge of the weather?", listen:"Safe; amazed; small; it's not random; we can trust Him even in storms and droughts." },
        { q:"Scientists explain how the nor'wester works. Does knowing *how* it works take away from God's power, or add to it?", listen:"Adds to it: God made the rules the air follows; knowing how it works helps us see His wisdom." }
      ],
      live:"Next nor'west day, look for the **arch** and say thank you for the God who made the winds."
    },
    clue:{ prompt:"Christchurch gets about 648 mm of rain a year. Round it to the nearest hundred, then divide by 100.", answer:6, explain:"648 → 600; 600 ÷ 100 = 6. Trig Clue 2 is saved!" },
    next:"Wednesday — Dr Priya says the Moon doesn't make any light at all. So why does it shine?",
    rubric:[
      { c:"Rain shadow", code:"SS-G",
        d:["Says the West Coast is wetter.","“It rains more over there.”"],
        a:["Explains the rain shadow.","“Moist westerly air is pushed up the Alps, cools and rains on the West Coast. The plains get much less.”"],
        f:["Links the rain shadow to life on the plains.","“That's why Canterbury farms need irrigation, and why droughts happen about every six years.”"],
        i:["I know the West Coast is wetter.","I can explain the rain shadow.","I can link it to farming on the plains."] },
      { c:"The nor'wester", code:"SS-G",
        d:["Says the nor'wester is windy.","“It's a windy wind.”"],
        a:["Explains why the nor'wester is warm and dry.","“The air has lost its rain. It sinks down the eastern side and warms quickly, so it's hot and dry.”"],
        f:["Explains the arch.","“Air flowing over the Alps makes a wave; a long lenticular cloud forms in it, with clear sky beneath.”"],
        i:["I know the nor'wester is windy.","I can explain why it's warm and dry.","I can explain the nor'west arch."] },
      { c:"Reading climate data", code:"SS-G · MA",
        d:["Reads one number.","“648.”"],
        a:["Reads a rainfall graph and explains it.","“Christchurch gets about 648 mm, about half of Auckland's or Wellington's.”"],
        f:["Uses data to make a claim.","“The data shows Christchurch is the driest main city, which fits the rain-shadow idea.”"],
        i:["I can read one number.","I can read a rainfall graph and explain it.","I can use data to make a claim."] }
    ],
    plan:{
      prior:"Students know the Alps are high and run across the westerly winds (Weeks 2–4). Many will have felt a nor'wester and seen the arch without knowing what it is.",
      kc:["Thinking","Using language, symbols & texts"],
      sequence:[
        ["0–6","Field Note","Sam's message. Trig Check (Monday). LI/SC.","Recall; predict."],
        ["6–20","Survey","Westerlies and the Alps; **Rain Shadow**; the arch; Canterbury's climate (graph).","Predict; explain; read data."],
        ["20–38","Choose Your Path","Introduce A/B/C. Roam: “Where does the rain fall? Why is it warmer here?”","Explanation / diagram / forecast."],
        ["38–45","Through the Lens","Job 37:9–13 — four moves.","Discuss; look for the arch."],
        ["45–50","Trig Clue & Exit","Trig Clue 2 (answer 6); self-assessment; wheat sheaves.","Solve; self-assess."]
      ],
      diff:{
        supported:"Cross-section to label; picture cards; sentence frames.",
        esol:"Use arm movements: air up (cool, rain), air down (warm, dry).",
        learning:"Use the interactive on the board with a partner; calm screen available.",
        flying:"Why the nor'wester is warmer than where it started; the arch; drought."
      },
      assess:{
        lookFor:["Explains the rain shadow","Explains the warm, dry nor'wester","Reads the rainfall graph"],
        evidence:["Rain Shadow predictions","Path products (photograph)","Exit self-assessment"]
      },
      inquiry:["Who linked the rain shadow to irrigation (Thursday's pivot)?","Did students read the graph correctly?","Note any nor'west days this week and point out the arch."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"sam", meta:"Mt Somers · nor'west day",
        msg:"Today the wind's **roaring** down from the north-west. It's **hot and dry**, the dust is blowing off the paddocks, and Flint won't stop panting. Above the mountains there's a long **band of cloud** with **clear blue sky** underneath it, like a giant arch. How can wind coming off **snowy mountains** be so warm?",
        notes:[["SAY","Read the message. 🟡 Sam and Flint are fictional."],["ASK","“Who's felt a nor'wester? What's it like?”"],["LISTEN","Hot, dry, gusty, dusty, makes people grumpy, things blow over."]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"When was Hakatere's stone cottage built?", a:"1862." }, { q:"Name two groups who lived and worked on the station.", a:"Head shepherds, musterers, shearers, cooks, station wives and children." }, { q:"What was the Trysting Stone?", a:"Where two women met for tea after a walk of about 20 km." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Over the mountains", title:"Westerlies and the *Alps*",
        bullets:["**Westerly** winds bring **moist air** from the Tasman Sea. The Alps force it **up**.","Rising air **cools**. Its water vapour forms **cloud and rain** on the **West Coast** side.","The air then **sinks** down onto the plains. Sinking air **warms**, and because it's now **dry**, it warms **faster** than it cooled on the way up. It arrives **hot, dry and gusty**: the **nor'wester**."],
        visual:{ svg:archSVG },
        notes:[["SAY","Facts from MetService (Föhn wind; The Northwest Arch)."],["ASK","“So why is the nor'wester warm?”"],["LISTEN","It's sinking; it warms as it comes down; it's dry, so it warms faster."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Send the air over", title:"Rain Shadow", ix:"rainshadow",
        notes:[["CLICK","Press ‘Blow’ to send the air parcel over. Press → to step through: rising, peak, sinking, plains."],["CLICK","Try lowering the Alps: what happens to the rain and the temperature on the plains?"],["NOTE","Simplified teaching model: 10 °C per km for dry air, 6 °C per km in cloud."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"A cloud that stays still", title:"The *nor'west arch*",
        bullets:["Air flowing over the Alps makes a **wave** in the sky, like a wave in the ocean.","At the top of the wave, the air is cooler and a long, smooth **lenticular** (lens-shaped, ‘pancake’) cloud forms.","Strong north-west winds **hold the cloud in place** across Canterbury, with a **gap of blue sky** over the Alps: the **arch**."],
        visual:{ svg:archSVG },
        notes:[["SAY","Facts from MetService (The Northwest Arch)."],["ASK","“If you see the arch in the morning, what weather should you expect?”"],["LISTEN","Hot, dry, windy: a nor'wester."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Our climate", title:"In the *rain shadow*",
        bullets:["Christchurch gets about **648 mm** of rain a year, about **half** of Auckland's or Wellington's. It's the **driest** of the main cities.","A nor'wester can push Christchurch's temperature **above 30°C**.","**Droughts**, from a few months to two years or more, happen on average about **every six years**."],
        visual:{ svg:rainSVG },
        notes:[["SAY","Facts from Te Ara (Canterbury region: climate)."],["ASK","“Read the graph: about how much more rain do Auckland and Wellington get?” (About twice as much.)"],["NOTE","The North Island bar is drawn at about twice 648 mm, from Te Ara's ‘about half’."]] },
      { type:"discussion", phase:"excavate", fs:"real", kicker:"Turn & Talk", q:"How does living in a **rain shadow** affect **farms** on the plains?", sub:"Think about water, grass, crops, dust, fire risk and the machines farmers use.", talk:60,
        notes:[["TALK","60-second talk."],["LISTEN","Dry soil; grass stops growing; need irrigation (water races, pivots); dust; fire risk; stock need water."],["SAY","“Hold that thought: on Thursday we build a pivot irrigator.”"]] },
      { type:"paths", phase:"paths", fs:null, minutes:18,
        notes:[["SAY","“Choose your path. Use the words: rises, cools, rain, sinks, warms.”"],["CLICK","Start the 18-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Job 37:9–13."],["ASK","“Does knowing how the nor'wester works take away from God's power, or add to it?”"]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 648 → 600 → 6."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = wheat sheaves."]] }
    ]
  };

  /* ======================= WEDNESDAY · SCIENCE ======================= */
  const wed = {
    id:"w05-wed", week:5, day:"wed", subject:"science", duration:50,
    title:"The Moon & the Maramataka", guide:"priya",
    codes:["SC-ES","SC-P"],
    coverage:"Y5 Science (2027): the Moon reflects the Sun's light; its shape depends on the positions of the Sun, Earth and Moon; it rises at different times in a cycle of about 29 days; the maramataka guides food gathering and production.",
    li:"We are learning why the Moon's shape changes, and how the maramataka uses the Moon's cycle.",
    sc:["I can explain that the Moon reflects sunlight.","I can draw and name the phases of the lunar cycle.","I can explain how the maramataka guides food gathering and planting."],
    vocab:[
      { w:"reflect", def:"to bounce light back" },
      { w:"phase", def:"the shape of the lit part of the Moon that we see" },
      { w:"lunar cycle", def:"the Moon's cycle of phases, about 29½ days" },
      { w:"crescent", def:"a thin curved shape, like a fingernail" },
      { w:"gibbous", say:"GIB-us", def:"more than half lit, but not full" },
      { w:"wax / wane", def:"wax = the lit part grows; wane = it shrinks" },
      { w:"maramataka", say:"mah-rah-mah-TAH-kah", def:"the Māori lunar calendar; each night has its own name and guidance" }
    ],
    prep:{ min:10, items:["A torch (the Sun), a ball on a stick (the Moon); you are Earth","Optional (Path B): Oreo biscuits or paper plates and black paper","Optional: a printed maramataka (check with your Māori lead which one to use)"] },
    safety:["Food allergies: check before using biscuits. Paper plates work just as well."],
    tikanga:["Maramataka differ between iwi and regions: names, number of nights and guidance vary. Ask your Māori lead which maramataka is used locally before teaching any night names beyond Whiro and Mutuwhenua.","Some whānau follow the maramataka today. Invite sharing, but don't put students on the spot."],
    hononga:"**Living by the Moon.** The maramataka helped Māori decide when to fish, plant and gather food, by watching the Moon, the stars and the seasons together. Many people are using it again today, for gardening, fishing and wellbeing.",
    paths:[
      { id:"A", name:"The Recorder", product:"Lunar Cycle Diagram", steps:["Draw the **Sun, Earth** and the Moon in **8 positions** around Earth.","Under each, draw what the Moon **looks like from Aotearoa** and **name the phase**.","Write one sentence: **why** the Moon's shape changes."], flying:"Explain why the lit side is on the left when the Moon is waxing in the Southern Hemisphere." },
      { id:"B", name:"The Maker", product:"Oreo or Paper-Plate Phases", steps:["Make **8 Moon phases** with Oreos (scrape the cream) or paper plates and black paper.","Put them **in order** around a circle, with ‘Earth’ in the middle.","Label **new, first quarter, full, last quarter**."], flying:"Add the maramataka names Whiro and Mutuwhenua in the right places." },
      { id:"C", name:"The Storyteller", product:"Moon-Diary Launch", steps:["Start a **Moon diary**: draw the Moon each night for **two weeks** (with whānau).","Plan how you'll record **date, time, shape and where in the sky**.","Explain to the class what you **predict** you'll see."], flying:"Make this your Big Project: compare your diary with a maramataka."}
    ],
    supportedShort:"a phase-ordering card set, a diagram to complete, sentence frames.",
    lens:{
      pillar:"mohio", title:"He made the Moon",
      look:"Look again at the Moon: always half lit by the Sun, marking the nights and the months.",
      ref:"Psalm 104:19",
      paraphrase:"He made the moon to mark the seasons, and the sun knows when to set.",
      talk:[
        { q:"Psalm 104 says God made the Moon to mark the seasons. How have people used the Moon to plan their lives?", listen:"Calendars like the maramataka; knowing when to fish and plant; tides; festivals like Easter, which is set by the Moon." },
        { q:"The Moon has no light of its own; it reflects the Sun. How could that be a picture of how we live as Christians?", listen:"We reflect God's love and light; it's not our own light; we shine more when we face Him." }
      ],
      live:"Tonight, look for the Moon with someone at home. **Draw its shape** in your Field Journal."
    },
    clue:{ prompt:"The Moon's cycle takes about 29½ days. How many whole days is that?", answer:29, explain:"29½ days = 29 whole days and half a day. Trig Clue 3 is saved!" },
    next:"Thursday — Liv wants to water a whole paddock with one machine. Can a giant arm do it?",
    rubric:[
      { c:"Moonlight", code:"SC-ES",
        d:["Says the Moon shines.","“The Moon glows.”"],
        a:["Explains that the Moon reflects sunlight.","“The Moon makes no light; the Sun always lights half of it, and we see that light bounce back.”"],
        f:["Explains the phases using positions.","“At full moon, Earth is between the Sun and Moon, so we see the whole lit half.”"],
        i:["I know the Moon shines.","I can explain that it reflects sunlight.","I can explain the phases using positions."] },
      { c:"The lunar cycle", code:"SC-ES · SC-P",
        d:["Draws a few Moon shapes.","Crescents and a full moon, not in order."],
        a:["Draws and names the phases in order.","New → crescent → first quarter → gibbous → full → back again."],
        f:["Explains rising times or the Southern Hemisphere view.","“It rises about 50 minutes later each day; the full moon rises at sunset.”"],
        i:["I can draw some Moon shapes.","I can draw and name the phases in order.","I can explain rising times or the southern view."] },
      { c:"Maramataka", code:"SC-ES · ANZH",
        d:["Says Māori had a Moon calendar.","“A calendar for the Moon.”"],
        a:["Explains how the maramataka guides food gathering and planting.","“Every night has a name; people used it to decide when to fish and plant.”"],
        f:["Explains why it differs between places.","“Iwi in different places watched their own seasons and food, so names and guidance vary.”"],
        i:["I know Māori had a Moon calendar.","I can explain how the maramataka guides food gathering.","I can explain why it differs between places."] }
    ],
    plan:{
      prior:"Students know Earth spins (Week 3) and orbits the Sun with a tilt (Week 4), and that Matariki's dawn rising marks the new year for many iwi. Common misconception: ‘Earth's shadow makes the phases.’",
      kc:["Thinking","Using language, symbols & texts"],
      sequence:[
        ["0–6","Field Note","Dr Priya's message. Trig Check (Tuesday). LI/SC.","Recall; predict."],
        ["6–20","Survey","Moonlight; torch-and-ball demo; **Moon Phase Machine**; four main phases; the maramataka.","Predict; observe; explain."],
        ["20–38","Choose Your Path","Introduce A/B/C. Roam: “Where's the Sun? Which half is lit?”","Diagram / Oreo phases / Moon diary."],
        ["38–45","Through the Lens","Psalm 104:19 — four moves.","Discuss; look at the Moon."],
        ["45–50","Trig Clue & Exit","Trig Clue 3 (answer 29); self-assessment; wheat sheaves.","Solve; self-assess."]
      ],
      diff:{
        supported:"Phase-ordering cards; diagram to complete; sentence frames.",
        esol:"Torch-and-ball demo with each student holding the ‘Moon’; picture glossary.",
        learning:"Hands-on demo; partner work; calm screen available.",
        flying:"Southern view (lit side on the left when waxing); rising times; maramataka variation."
      },
      assess:{
        lookFor:["Explains reflected sunlight","Draws and names phases in order","Explains how the maramataka guides food gathering"],
        evidence:["Demo predictions","Path products (photograph)","Exit self-assessment"]
      },
      inquiry:["Who still thinks Earth's shadow makes the phases? Re-do the demo.","Which students started a Moon diary? Check in next week.","Confirm with your Māori lead which maramataka to use for Week 6."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"priya", meta:"Observatory · moonrise",
        msg:"Here's a strange fact: the Moon makes **no light at all**. None. It's a ball of grey rock. And yet some nights it's bright enough to read by, and other nights it **disappears**. For hundreds of years, Māori used its changing shape as a **calendar**. Let's work out how it changes, and why it was so useful.",
        notes:[["SAY","Read the message. 🟡 Dr Priya is fictional."],["ASK","“If the Moon makes no light, why can we see it?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"What is the rain shadow?", a:"The dry side of the mountains, away from the wind." }, { q:"Why is the nor'wester warm and dry?", a:"It lost its rain on the West Coast and warms as it sinks onto the plains." }, { q:"Why can't we see Matariki in May?", a:"The Sun is in front of it; its glare hides it." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Borrowed light", title:"*Moonlight* is sunlight",
        bullets:["The Moon **reflects** the Sun's light. The Sun **always lights half** of the Moon.","As the Moon goes around Earth, we see **more or less** of that lit half. That's the **phase**.","One full cycle, from new moon to new moon, takes about **29½ days**."],
        visual:{ artefact:"starchart" },
        notes:[["CLICK","Demo: darken the room. Torch on one side. Hold the ‘Moon’ ball at arm's length and turn slowly on the spot. Students watch the lit part grow and shrink."],["SAY","Curriculum: Year 5 Science, the Moon."],["IF","A student says Earth's shadow makes the phases → “Let's test it: is my head ever between the torch and the ball during the crescent?” (No.)"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Sun, Earth, Moon", title:"Moon Phase Machine", ix:"moonphase",
        notes:[["CLICK","Drag the slider or press ‘+1 day’. Press → to step: first quarter, full, last quarter, new."],["ASK","At first quarter: “Which side is lit from Aotearoa?” (The left: in the Southern Hemisphere we see the Moon ‘upside down’ compared with Europe.)"],["NOTE","Rising times are approximate."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Four main phases", title:"The *lunar* cycle", h:"470px",
        cards:[ { icon:"🌑", t:"New moon", d:"The Moon is **between Earth and the Sun**. The lit half faces away: we see **nothing**. Rises with the Sun." }, { icon:"🌓", t:"First quarter", d:"**Half lit** (on the **left** from Aotearoa). Rises around **midday**, seen in the evening." }, { icon:"🌕", t:"Full moon", d:"**Earth is between** the Sun and Moon. We see the **whole lit half**. Rises at **sunset**." }, { icon:"🌗", t:"Last quarter", d:"**Half lit** (on the **right** from Aotearoa). Rises around **midnight**, seen in the morning." } ],
        notes:[["SAY","“The Moon rises about 50 minutes later each day.”"],["NOTE","Emoji show the northern view; remind students that from Aotearoa the lit side is mirrored."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"A calendar from the sky", title:"The *maramataka*",
        bullets:["The **maramataka** is the traditional Māori **lunar calendar**: about **twelve months**, each following the Moon.","**Every night** of the month has its **own name**. In many maramataka the first night is **Whiro** and the last is **Mutuwhenua**. Different maramataka recognise **28 to 32** nights or phases.","People used it to decide when to **plant, fish and gather food**. Each month is linked to stars: the rising of **Matariki** in Pipiri signals the **new year**."],
        visual:{ artefact:"starchart" },
        notes:[["SAY","Facts from Te Ara (Maramataka) and Museums Wellington."],["TIKANGA","Maramataka differ between iwi. Ask your Māori lead which local version to use before teaching more night names."],["ASK","“Why would a Moon calendar be useful for gathering food?”"],["LISTEN","Tides follow the Moon; fish and eels are more active at some times; it's the same everywhere you go; you can see it without a printed calendar."]] },
      { type:"discussion", phase:"excavate", fs:"real", kicker:"Turn & Talk", q:"If you had **no printed calendar**, how could you use the **Moon and stars** to plan your year?", sub:"Think about planting, fishing, travelling and celebrating.", talk:45,
        notes:[["TALK","45-second talk."],["LISTEN","Count moons; watch for star risings like Matariki; notice the full moon; link it to the seasons."]] },
      { type:"paths", phase:"paths", fs:null, minutes:18,
        notes:[["SAY","“Choose your path. Path C: this could be your Big Project!”"],["CLICK","Start the 18-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Psalm 104:19."],["NOTE","Analogy (reflecting light): discuss where the picture breaks: the Moon has no choice; we choose to turn towards God."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 29 (29½ days = 29 whole days)."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess. Remind: look at the Moon tonight with whānau."],["CLICK","C = wheat sheaves."]] }
    ]
  };

  /* ======================= THURSDAY · TECHNOLOGY ======================= */
  const thu = {
    id:"w05-thu", week:5, day:"thu", subject:"technology", duration:50,
    title:"Build a Machine: The Pivot Irrigator Model", guide:"liv",
    codes:["TE-TP","TE-TK","MA"],
    coverage:"Technology (NZC 2007 L3): technological practice (brief development, planning, testing and evaluating an outcome); technological systems (combining simple machines). Mathematics: area of a circle and a square.",
    li:"We are learning to design and build a model irrigator that combines simple machines.",
    sc:["I can write a brief with specifications.","I can build a rotating arm on wheels.","I can test my model and improve it."],
    vocab:[
      { w:"centre pivot", def:"an irrigator with a long arm that rotates around a fixed centre point, watering a circle" },
      { w:"span", def:"one section of the pivot's arm, between two towers" },
      { w:"tower", def:"the wheeled legs that hold up the arm and drive it round" },
      { w:"radius", def:"the distance from the centre of a circle to its edge" },
      { w:"area", def:"how much space a flat shape covers" },
      { w:"hectare", def:"an area of 10,000 square metres (100 m × 100 m)" },
      { w:"specification", def:"a rule the design must meet" }
    ],
    prep:{ min:15, items:["Card strips, skewers or straws, bottle caps (wheels), split pins, a cork or Blu Tack for the centre pivot","Tape, scissors, rulers","A test mat (A3 paper with a marked circle)"] },
    safety:["Skewers: points snipped or taped.","Scissors rules.","Tidy-up routine."],
    tikanga:[],
    hononga:"**Water and the plains.** The rain shadow (Tuesday) makes the plains dry, so water from the rivers is used to irrigate farms. How water is shared between farms, rivers and people is an important conversation for everyone in our district, including mana whenua (Week 7).",
    paths:[
      { id:"A", name:"The Designer", product:"Brief + Labelled Plan", steps:["Write a **brief**: who is it for, what does it need to do?","List **3–4 specifications** (e.g. rotates a full circle, at least 2 wheels, arm at least 20 cm).","Draw a **labelled plan** showing the **pivot, spans, towers and wheels**."], flying:"Add a design idea to water the missed corners." },
      { id:"B", name:"The Builder", product:"Card & Skewer Pivot", steps:["Fix a **centre pivot** (cork or Blu Tack) and attach a **card arm**.","Add **towers** with **bottle-cap wheels** that roll along the ground.","Push the end: does it **rotate smoothly** around the centre?"], flying:"Add a second span joined with a split pin so the arm bends at a joint." },
      { id:"C", name:"The Tester", product:"Test & Feedback", steps:["Test **two models** against the **specifications**.","Measure the **radius** and estimate the **area** watered.","Give each builder **one warm** and **one cool** piece of feedback."], flying:"Recommend one improvement and explain why it would work."}
    ],
    supportedShort:"a pre-cut arm and towers, a spec checklist, a test table, partner pairing.",
    lens:{
      pillar:"manaaki", title:"Commit your plans",
      look:"Look again at the pivot: planned around one fixed centre, turning steadily to water the whole circle.",
      ref:"Proverbs 16:3",
      paraphrase:"Commit to the Lord whatever you do, and He will establish your plans.",
      talk:[
        { q:"An engineer plans carefully before building. What does it mean to ‘commit your plans to the Lord’?", listen:"Pray about them; ask what's good and fair; do your best work; trust God with the result." },
        { q:"A pivot turns around one fixed centre. What is the ‘fixed centre’ that keeps your life steady?", listen:"God; family; faith; knowing who we are; truth." }
      ],
      live:"Before you start your build, **pray or pause** and commit your plan. After testing, give thanks for one thing that worked."
    },
    clue:{ prompt:"The middle point of a circle is called the centre, or the pivot. How many letters are in ‘pivot’?", answer:5, explain:"P-I-V-O-T: 5 letters. Trig Clue 4 is saved for Friday!" },
    next:"Friday — Tom says Sheet V's sky was painted while the paper was still wet. Let's try it.",
    rubric:[
      { c:"Brief & specifications", code:"TE-TP",
        d:["Says what the model is.","“A sprinkler thing.”"],
        a:["Writes a brief with clear specifications.","“For Liv. Rotates a full circle; at least 2 wheels; arm at least 20 cm.”"],
        f:["Writes measurable specifications and links them to the user's need.","“It must water at least 1,000 cm² so it shows a whole paddock.”"],
        i:["I can say what my model is.","I can write a brief with specifications.","I can write measurable specifications."] },
      { c:"Build", code:"TE-TK · TE-TP",
        d:["Builds an arm with help.","The arm doesn't turn."],
        a:["Builds a rotating arm on wheels.","Arm rotates around the pivot on bottle-cap wheels."],
        f:["Combines simple machines on purpose.","Wheels and axles on the towers; a jointed span with a split pin."],
        i:["I can build an arm with help.","I can build a rotating arm on wheels.","I can combine simple machines on purpose."] },
      { c:"Test & improve", code:"TE-TP · MA",
        d:["Says if it works.","“It works.”"],
        a:["Tests against specifications and makes one improvement.","Checked each spec; fixed a wobbling wheel."],
        f:["Uses measurement in testing and explains improvements.","“Radius 20 cm → about 1,257 cm² watered; the corners still miss about 21%.”"],
        i:["I can say if it works.","I can test against specifications and improve.","I can use measurement to explain my improvements."] }
    ],
    plan:{
      prior:"Students know levers, wheels and axles, gears and pulleys (Weeks 2–4), and saw pivots in Week 1. On Tuesday they learned why the plains are dry.",
      kc:["Thinking","Managing self","Participating & contributing"],
      sequence:[
        ["0–6","Field Note","Liv's message. Trig Check (Wednesday). LI/SC.","Recall; predict."],
        ["6–16","Survey","Workshop safety; centre pivots; **Pivot Planner**; what's inside; the brief.","Calculate; predict; plan."],
        ["16–38","Choose Your Path","Introduce Designer / Builder / Tester. Roam: “Does it turn smoothly? Does it meet the spec?”","Plan / build / test."],
        ["38–45","Through the Lens","Proverbs 16:3 — four moves.","Discuss; give thanks."],
        ["45–50","Trig Clue & Exit","Trig Clue 4 (answer 5); self-assessment; wheat sheaves.","Solve; self-assess; tidy up."]
      ],
      diff:{
        supported:"Pre-cut parts; spec checklist; test table.",
        esol:"Show a real pivot photo; build alongside a partner; picture glossary.",
        learning:"Pre-cut parts; choice of path; calm screen available.",
        flying:"Missed corners; jointed spans; area calculations."
      },
      assess:{
        lookFor:["Writes a brief with specifications","Builds a rotating arm on wheels","Tests and improves the model"],
        evidence:["Briefs and plans","Models (photograph)","Test feedback"]
      },
      inquiry:["Did the bottle-cap wheels turn freely? Note fixes.","Who connected the dry plains (Tuesday) to irrigation?","Keep the best models for the Week 10 showcase."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"liv", meta:"Plains farm · after a nor'wester",
        msg:"After three days of nor'wester, the paddocks are **crunchy and brown**. Next door, a giant metal **arm on wheels** is slowly walking round in a circle, and everything under it is **green**. Today you're the engineers. Can you **design and build** one?",
        notes:[["SAY","Read the message. 🟡 Liv is fictional."],["ASK","“Who has seen a centre pivot? What does it look like from the road? From the air?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"Does the Moon make its own light?", a:"No: it reflects the Sun's light." }, { q:"At full moon, where is Earth?", a:"Between the Sun and the Moon." }, { q:"What does a moving pulley do to the effort?", a:"Halves it (but you pull twice as much rope)." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"safety", phase:"excavate", fs:null, title:"Workshop rules",
        items:[ { icon:"✂️", t:"Scissors", d:"Points down; cut away from your body." }, { icon:"🍢", t:"Skewers", d:"Points snipped or taped. Never point at anyone." }, { icon:"🧹", t:"Tidy up", d:"Every scrap in the bin, every tool back in its box." } ],
        notes:[["SAFETY","30 seconds."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Watering a circle", title:"The *centre pivot*",
        bullets:["A **centre pivot** has a long arm made of **spans** held up by wheeled **towers**. It **rotates around a central point**, watering a **circle**.","Centre pivots and **linear moves** (which travel in a straight line) cover about **133,000 hectares** of the Ashburton District.","That's why, from a plane, the plains look like **circles in squares**."],
        visual:{ artefact:"pivot" },
        notes:[["SAY","Facts from Living Heritage (school-written; cross-checked) and Stats NZ via Figure.NZ (2022 census)."],["ASK","“Why a circle and not a square?”"],["LISTEN","The arm is fixed at one end, so the other end can only travel in a circle."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Plan the paddock", title:"Pivot Planner", ix:"pivotplanner",
        notes:[["CLICK","Move the arm-length slider. Press ‘Spin’, then ‘Show corners’. (→ steps: spin, corners, shorter arm.)"],["ASK","“Make the arm longer. Does the percentage of missed corners change?” (No: always about 21%.)"],["SAY","Maths: circle area = π × radius × radius. Square area = side × side."],["NOTE","Tower spacing is simplified (one every ~50 m)."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"What's inside?", title:"Simple machines in a *pivot*", h:"470px",
        cards:[ { icon:"🛞", t:"Wheels & axles", d:"Each **tower** rolls on **wheels** fixed to **axles**, carrying the heavy arm." }, { icon:"⚙️", t:"Gears", d:"A small **motor** at each tower turns the wheels through a **gearbox**: slow but strong." }, { icon:"🔩", t:"Joints", d:"The **spans** are joined so the arm can **flex** over bumps, like a linkage." } ],
        notes:[["SAY","“A machine is often simple machines working together. That's a system.”"]] },
      { type:"brief", phase:"excavate", fs:null, title:"Build a pivot irrigator model",
        stakeholder:"**Liv**, who wants to show farm visitors how a centre pivot waters a paddock.",
        need:"A **model pivot** with an arm that **rotates a full circle** around a fixed centre, on wheels.",
        specs:["A fixed centre pivot.","An arm at least 20 cm long.","At least two towers with bottle-cap wheels.","Rotates a full circle smoothly."],
        notes:[["SAY","“Builders build to this brief; Designers can improve it; Testers check against it.”"]] },
      { type:"paths", phase:"paths", fs:null, minutes:22,
        notes:[["SAY","“Choose your role: Designer, Builder or Tester. Testers start testing at minute 10.”"],["CLICK","Start the 22-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Proverbs 16:3."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 5."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess. Tidy-up routine. Store models safely for Week 10."],["CLICK","C = wheat sheaves."]] }
    ]
  };

  /* ======================= FRIDAY · ART ======================= */
  const fri = {
    id:"w05-fri", week:5, day:"fri", subject:"art", duration:50,
    title:"Nor'west Skies: Wet-on-Wet Watercolour", guide:"tom",
    codes:["VA-PK","VA-DI","VA-CI"],
    coverage:"Visual Arts (NZC 2007, Level 3): developing practical knowledge (watercolour: wet-on-wet, graded wash, lifting out); developing ideas (painting a sky from observation and memory); communicating and interpreting (demonstrating and explaining a technique).",
    li:"We are learning to paint dramatic skies using wet-on-wet watercolour.",
    sc:["I can control water and pigment.","I can paint a graded wash from dark to light.","I can add the nor'west arch by lifting out colour."],
    vocab:[
      { w:"watercolour", def:"paint that is mixed with water and is see-through (transparent)" },
      { w:"wet-on-wet", def:"painting onto paper that is already wet, so colours spread and blend" },
      { w:"wet-on-dry", def:"painting onto dry paper, so edges stay sharp" },
      { w:"pigment", def:"the colour in paint" },
      { w:"graded wash", def:"a smooth area of colour that goes gradually from dark to light" },
      { w:"bloom", def:"a soft, flower-like mark when water spreads into wet paint" },
      { w:"lifting out", def:"taking paint off with a clean, damp brush or tissue to make a lighter area" }
    ],
    prep:{ min:15, items:["Watercolour paper (or thick cartridge), taped to boards","Watercolour paints (blue, grey, a warm brown or ochre), big soft brushes, water pots","Tissues for lifting out; paper towels"] },
    safety:["Water pots on the table centre; wipe up spills.","Aprons on."],
    tikanga:["Students paint their own skies and mountains. No Māori designs as decoration."],
    hononga:"**Reading the sky.** On Tuesday we learned the arch is a sign of a nor'wester. People who live with the mountains learn to read their skies; today we paint one.",
    paths:[
      { id:"A", name:"The Recorder", product:"Technique Swatches", steps:["Paint **4 swatches**: **wet-on-wet**, **wet-on-dry**, a **graded wash** and **lifting out**.","Label each and write **one sentence** about what happened.","Circle the one that looks most like a **nor'west sky**."], flying:"Try a fifth: dropping a second colour into a wet wash." },
      { id:"B", name:"The Maker", product:"Nor'west Sky Painting", steps:["Wet the **top two-thirds** of your paper with clean water.","Drop in **blue-grey** at the top and let it spread: a **graded wash**, lighter towards the mountains.","While it's wet, **lift out** a curved band with a tissue: **the arch**. When it's dry, paint the **mountains** wet-on-dry."], flying:"Add a dry, golden plain in the foreground. Keep this piece for the My Place triptych!" },
      { id:"C", name:"The Storyteller", product:"Demonstrate to a Buddy", steps:["Practise the technique once yourself.","**Demonstrate** wet-on-wet to a buddy and explain each step.","Use the words **pigment, graded wash, lifting out, bloom**."], flying:"Explain why wet-on-wet is good for skies but not for mountains."}
    ],
    supportedShort:"pre-wet paper, a limited palette (two colours), step cards with pictures.",
    lens:{
      pillar:"mohio", title:"The heavens declare",
      look:"Look again at the sky you painted: cloud, light and the great arch across the plains.",
      ref:"Psalm 19:1",
      paraphrase:"The heavens declare the glory of God; the skies show what His hands have made.",
      talk:[
        { q:"When you look at a big Canterbury sky, what does it tell you about God?", listen:"He's creative; He's powerful; He loves beauty; He's bigger than we can imagine." },
        { q:"You can't fully control wet-on-wet paint. How is that like trusting God with things we can't control?", listen:"We do our part and let the water do its work; we can't control everything; surprises can be beautiful." }
      ],
      live:"Gallery walk: tell one classmate what their sky **declares**: calm, stormy, hot, windy?"
    },
    clue:{ prompt:"Friday's clue is the Survey Seal: combine this week's four Trig Clues.", answer:41, explain:"1 + 6 + 29 + 5 = 41 → bearing 041°." },
    next:"Next week — Sheet VI · The Town: a grid of streets on a treeless plain, and a ferry on the river. Big Projects are chosen!",
    rubric:[
      { c:"Water & pigment", code:"VA-PK",
        d:["Paints with lots of water or lots of paint.","Puddles or dry streaks."],
        a:["Controls water and pigment.","Colour spreads softly without puddles."],
        f:["Uses blooms and soft edges on purpose.","Lets colour bloom in the clouds, keeps it calm near the horizon."],
        i:["I can paint with watercolour.","I can control water and pigment.","I can use blooms and soft edges on purpose."] },
      { c:"Graded wash", code:"VA-PK · VA-DI",
        d:["Paints one flat colour.","Same shade all over."],
        a:["Paints a graded wash from dark to light.","Dark at the top, lighter towards the mountains."],
        f:["Makes the wash smooth and even.","No hard lines or stripes."],
        i:["I can paint one colour.","I can paint a graded wash from dark to light.","I can make the wash smooth and even."] },
      { c:"The arch", code:"VA-DI · VA-CI",
        d:["Paints clouds.","Blobs of cloud."],
        a:["Adds the nor'west arch by lifting out.","A clear curved band under the cloud."],
        f:["Explains choices and links to Tuesday's science.","“The clear band is the gap of blue sky over the Alps under the lenticular cloud.”"],
        i:["I can paint clouds.","I can add the arch by lifting out.","I can explain my choices using the science."] }
    ],
    plan:{
      prior:"On Tuesday students learned how the nor'west arch forms. In Week 3 they layered mountains from pale to dark. Today is their first watercolour lesson: expect puddles!",
      kc:["Managing self","Relating to others"],
      sequence:[
        ["0–6","Field Note","Tom's message. Trig Check (Thursday). LI/SC.","Recall; look at the sky."],
        ["6–18","Survey","Wet-on-wet vs wet-on-dry; **Wet-on-Wet** interactive; method demo.","Predict; compare; plan."],
        ["18–40","Choose Your Path (22 min)","Introduce A/B/C. Roam: “Is your paper still wet? Where's the lightest part?”","Swatches / painting / demonstration."],
        ["40–45","Through the Lens","Psalm 19:1 — gallery reflection.","Gallery walk."],
        ["45–50","Survey Seal & Dealer","Survey Seal V: 1 + 6 + 29 + 5 = 41 → 041°. The Dealer's Offer. Self-assess; wheat sheaves.","Add; dial; discuss."]
      ],
      diff:{
        supported:"Pre-wet paper; two colours; picture step cards.",
        esol:"Model silently, then name each step; technique words on cards.",
        learning:"Smaller paper; one technique at a time; calm screen available.",
        flying:"Dropping in a second colour; a golden plain; explaining with science."
      },
      assess:{
        lookFor:["Controls water and pigment","Paints a graded wash","Adds the arch by lifting out"],
        evidence:["Paintings (photograph)","Swatch sheets","Exit self-assessment"]
      },
      inquiry:["Which pieces go in the triptych folder?","Who lifted out a clear arch? Ask them to demonstrate next time.","Did the paper buckle? Tape more firmly next time."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"tom", meta:"Studio · nor'west afternoon",
        msg:"Look closely at the sky on Sheet V. The surveyor's friend didn't draw it: they **painted** it, and the colour has **spread softly** like smoke. That only happens when you paint on **wet paper**. Today we try it. Warning: the water is in charge, and that's the fun.",
        notes:[["SAY","Read the message. 🟡 Tom is fictional."],["ASK","“Look out the window. What colours are in the sky right now?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"What shape does a centre pivot water?", a:"A circle." }, { q:"About what percentage of a square paddock does a pivot miss?", a:"About 21%: the corners." }, { q:"What makes the nor'west arch?", a:"A long lenticular cloud held in place by strong north-west winds, with clear sky beneath." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"cards", phase:"excavate", fs:"real", paper:true, kicker:"Watercolour", title:"Wet or *dry*?", h:"470px",
        cards:[ { icon:"💧", t:"Wet-on-wet", d:"Paint onto **wet paper**. Colours **spread, blend and bloom** with soft edges. Great for **skies**." }, { icon:"🖌️", t:"Wet-on-dry", d:"Paint onto **dry paper**. Edges stay **sharp**. Great for **mountains, fences and trees**." }, { icon:"🧻", t:"Lifting out", d:"Dab **wet paint** with a clean tissue or damp brush to take colour **off**, making a light area." } ],
        notes:[["CLICK","Demo each on scrap paper in 30 seconds."]] },
      { type:"interactive", phase:"excavate", fs:"real", paper:true, kicker:"Try it here first", title:"Wet-on-Wet", ix:"wetonwet",
        notes:[["CLICK","Paint on dry paper first. Then press ‘Wet the paper’ and paint again: watch it bloom. Try ‘Graded wash’, ‘Lift the arch’ and ‘Mountains’. (→ steps through them.)"],["ASK","“Which is better for the sky? For the mountains? Why?”"]] },
      { type:"content", phase:"excavate", fs:null, paper:true, kicker:"Your turn", title:"Paint a *nor'west sky*",
        bullets:["**Tape** your paper down. Wet the **top two-thirds** with clean water.","Drop in **blue-grey** at the top. Tilt the board so it spreads: a **graded wash**, lighter towards the bottom.","While it's still **wet**, lift out a **curved band** with a tissue: **the arch**.","When it's **dry**, paint the **mountains** wet-on-dry along the bottom of the sky."],
        visual:{ svg:archSVG },
        notes:[["SAY","Model the whole method in 3 minutes."],["NOTE","The arch is a clear band of sky **under** the cloud, curving across."]] },
      { type:"paths", phase:"paths", fs:null, minutes:22,
        notes:[["SAY","“Choose your path. Path B: keep your piece flat to dry for the triptych folder.”"],["CLICK","Start the 22-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move. 5-minute gallery reflection."],["SAY","Read Psalm 19:1."],["NOTE","The ‘can't control the water’ link is an analogy; discuss where it breaks (God isn't unpredictable like water; He is faithful)."]] },
      { type:"folioseal", phase:"decode", fs:"story",
        notes:[["SAY","“Four clues. Add them to get the bearing.”"],["CLICK","Tap each ‘?’ tile. 1 + 6 + 29 + 5 = 41. Dial 041° and press ‘Fix the bearing’."],["SAY","Read the reveal: the run, with its stone cottage."]] },
      { type:"intercept", phase:"decode", fs:"story",
        msg:"Restoration team. It's just grass and sheep and one old stone hut. Knock it down and build something new. Why keep the past? — D.",
        ask:"What can an old building tell us that a new one can't?",
        notes:[["SAY","Read it in the Dealer's smooth voice."],["ASK","Link to Monday: the cottage as evidence; volunteers who care for it; the stories of isolation and the Trysting Stone."],["LISTEN","Buildings are primary sources; they show how people lived; you can't get them back once they're gone; they help us remember both the station and the mahika kai that came before."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess. Celebrate Sheet V!"],["CLICK","C = wheat sheaves. Lay paintings flat to dry."]] }
    ]
  };

  BM.WEEKS[5] = {
    n:5,
    story:"Sheet V shows a high-country run, fenced paddocks and a neatly drawn stone cottage. This week historians explore life on Hakatere Station; geographers discover the rain shadow and the nor'wester; astronomers learn why the Moon changes shape and how the maramataka uses it; engineers design and build a pivot irrigator model; and artists paint nor'west skies wet-on-wet. Friday's clues give the bearing for Sheet V, and the Dealer wants to knock the old cottage down.",
    hononga:"Hakatere Station on a mahika kai trail, with a Statutory Acknowledgement under the 1998 settlement (Mon) · reading the sky and local wind names (Tue) · the maramataka, which differs between iwi (Wed) · water and the plains (Thu) · reading the sky in paint (Fri). Check all local framing with your Māori lead and Te Rūnanga o Arowhenua (D3), especially Wednesday's maramataka.",
    seal:{
      answer:41,
      instruction:"Add the four **Trig Clues** from Monday to Thursday. The total is a **bearing**. Dial it on the theodolite to crack the wax seal.",
      reveal:"🟡 **Sheet V restored:** a **high-country run** with fenced paddocks, Lake Clearwater, dots for sheep, and a small **stone cottage** labelled *Hakatere Stn · 1862*. Next week: *The Town*, and Big Projects begin.",
      art:() => { const v = BM.art.sheetArt(5); v.setAttribute("style", "width:100%;height:100%"); return v; }
    },
    lessons:[mon, tue, wed, thu, fri]
  };
})(window.BM);
