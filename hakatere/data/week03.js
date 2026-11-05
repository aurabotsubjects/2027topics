/* ==========================================================
   WEEK 3 — MAP SHEET III · THE OLD TRAILS
   Notes: [KEY, text]  KEY = SAY ASK LISTEN IF CLICK TALK DEEPER PACE SAFETY WAIT NOTE TIKANGA
   Facts are sourced in data/sources.js (tags match blueprint §18).
   ========================================================== */
(function(BM){
  "use strict";

  /* a lone mātai on the plain — drawn in code for the Hine-Paaka slide */
  const treeSVG = () => {
    const v = BM.svg(600, 600, { style:"width:600px;height:600px;border-radius:10px;box-shadow:var(--sh-3)" });
    v.appendChild(BM.s("rect", { width:600, height:600, fill:"#e9e0c8" }));
    v.appendChild(BM.art.range(600, 600, 300, 120, 9, "#b9c4c8", { snow:"#f4f6f4", peaks:5 }));
    v.appendChild(BM.s("rect", { y:420, width:600, height:180, fill:"#c9a04a", opacity:.7 }));
    v.appendChild(BM.art.loneTree(300, 470, .95, "#3b4950"));
    for (let i=0;i<8;i++) v.appendChild(BM.art.tussock(40 + i*75, 590, 60, "#a8875a", i + 3));
    return v;
  };

  /* a river with a raupō raft — for the mōkihi slide */
  const raftSVG = () => {
    const s = BM.s, v = BM.svg(600, 600, { style:"width:600px;height:600px;border-radius:10px;box-shadow:var(--sh-3)" });
    v.appendChild(s("rect", { width:600, height:600, fill:"#e9e0c8" }));
    v.appendChild(BM.art.range(600, 600, 210, 110, 5, "#b9c4c8", { snow:"#f4f6f4", peaks:4 }));
    v.appendChild(s("rect", { y:210, width:600, height:390, fill:"#c9b47a" }));
    v.appendChild(BM.art.braids([[120,220],[260,330],[330,460],[420,620]], { seed:4, w0:30, w1:120, color:"#6FB6D6", sw:6, bedColor:"#a7a59c", bedOpacity:.8 }));
    const r = s("g", { transform:"translate(330 420) rotate(-28)" });
    for (let i=0;i<4;i++) r.appendChild(s("rect", { x:-80, y:-26 + i*14, width:160, height:14, rx:7, fill:i%2 ? "#a8875a" : "#8a6a3a" }));
    r.appendChild(s("path", { d:"M-70 -30 v62 M0 -30 v62 M70 -30 v62", stroke:"#4b3a2a", "stroke-width":4 }));
    v.appendChild(r);
    v.appendChild(s("path", { d:"M180 250 l-20 -40 M200 270 l-20 -40", stroke:"#4B5357", "stroke-width":3, "stroke-dasharray":"4 6" }));
    v.appendChild(s("text", { x:40, y:570, "font-family":"Big Shoulders Display", "font-weight":900, "font-size":26, fill:"#4B5357" }, "WALK UP · FLOAT DOWN"));
    return v;
  };

  /* ======================= MONDAY · HISTORY ======================= */
  const mon = {
    id:"w03-mon", week:3, day:"mon", subject:"history", duration:50,
    title:"Ara Tawhito: Trails, Rivers & Hine-Paaka", guide:"nell",
    codes:["SS-H","SS-P","ANZH","SS-G"],
    coverage:"Y6 History (2027): New Zealand before 1840 and early contact (Māori guides with early officials, 1843–48). Aotearoa New Zealand's Histories: mana whenua relationships with land; landmarks and place. Geographic practices: routes and resources.",
    li:"We are learning how tākata whenua travelled the land and how landmarks guided travel.",
    sc:["I can describe ara tawhito (traditional trails) and why they followed rivers.","I can explain how routes were chosen to pass water, food and shelter.","I can retell the story of Hine-Paaka respectfully, using the facts our sources give."],
    vocab:[
      { w:"ara tawhito", say:"AH-rah TAH-fee-taw", def:"ancient, traditional travel routes" },
      { w:"route", def:"the way you choose to travel from one place to another" },
      { w:"landmark", def:"a feature that is easy to see and helps you find your way" },
      { w:"pounamu", say:"PAW-oo-nah-moo", def:"greenstone (New Zealand jade), found mainly on the West Coast" },
      { w:"mātai", say:"MAH-tai", def:"a native tall forest tree (black pine)" },
      { w:"mōkihi", say:"MAW-kee-hee", def:"a raft made from bundles of raupō (bulrush) or flax stalks" },
      { w:"tapu", say:"TAH-poo", def:"sacred, set apart, under protection" },
      { w:"boundary marker", def:"something that shows where one area ends and another begins" }
    ],
    prep:{ min:5, items:["Field Journals","Optional: print the trail grid for Path B","Coloured pencils"] },
    safety:[],
    tikanga:["Hine-Paaka was named for an ancestor of Ngāi Tūhaitara and Kāti Māmoe. Retell only what the Arowhenua narrative records; don't add details about the ancestor.","The 1976 replacement was planted after a tapu-lifting ceremony. Treat this with respect; ask your Māori lead before discussing tapu in depth.","Share this lesson with your Māori lead and Te Rūnanga o Arowhenua before teaching (D3)."],
    hononga:"**Kā Huru Manu.** Te Rūnanga o Ngāi Tahu maps traditional place names and trails in its online atlas, Kā Huru Manu. Its Waitaki trail story describes people walking upriver to gather food and returning downriver on **mōkihi** rafts. Our own rivers, the Hakatere, Rakaia and Rangitata, were trails inland too.",
    paths:[
      { id:"A", name:"The Recorder", product:"Trail Guide", steps:["Write a **trail guide** for travellers going from the coast to Ō Tū Wharekai.","Explain **why** the route follows the river and **what it avoids**.","List what travellers will find along the way: **water, food, shelter**."], flying:"Why might the same route be used for hundreds of years?" },
      { id:"B", name:"The Maker", product:"Landmark Map", steps:["Draw a map from the **coast to the foothills** with the three rivers.","Add **landmarks**: a lone tree, a mountain, a lake, swamps to avoid.","Mark your **best route** with a dotted line and a key."], flying:"Add a second route to the pounamu trails over the Alps." },
      { id:"C", name:"The Storyteller", product:"Hine-Paaka Retell", steps:["Plan a **respectful 1-minute retell** of the story of the tree Hine-Paaka.","Include **what it was**, **who it was named for**, **how surveyors used it**, and **what happened in 1945 and 1976**.","Only use facts from today's slides."], flying:"Explain why a tree could be so important to a people." }
    ],
    supportedShort:"trail vocabulary cards, a printed grid map, sentence frames (“The trail followed … because …”), the Hine-Paaka timeline to copy.",
    lens:{
      pillar:"mohio", title:"A light on my path",
      look:"Look again at the trail: water, food and shelter marking the way inland.",
      ref:"Psalm 119:105",
      paraphrase:"Your word is a lamp for my feet and a light on my path.",
      talk:[
        { q:"Travellers needed landmarks and good routes. How is God's Word like a landmark or a light on a trail?", listen:"It shows the way; it keeps us from getting lost or stuck; it helps us choose well; it's always there." },
        { q:"Where in your life do you need a light on your path right now?", listen:"Friendships, school, family decisions, worries; accept all, gently." }
      ],
      live:"Write **Psalm 119:105** in your Field Journal beside a little drawing of a trail."
    },
    clue:{ prompt:"Hine-Paaka blew down in 1945. A new mātai was planted in 1976. How many years apart?", answer:31, explain:"1976 − 1945 = 31. Trig Clue 1 is saved for Friday!" },
    next:"Tuesday — Sam says the same push that lifts the mountains also shakes them. Time to learn how to be ready.",
    rubric:[
      { c:"Ara tawhito", code:"SS-H · ANZH",
        d:["Says people walked from place to place.","“They walked to the mountains.”"],
        a:["Describes ara tawhito and why they followed rivers.","“The Hakatere, Rakaia and Rangitata were trails inland, linking to the pounamu trails.”"],
        f:["Explains how trails connected people, food and trade.","“Trails linked coastal kāika to inland food places and the West Coast pounamu, so people could gather and trade.”"],
        i:["I know people travelled the land.","I can describe ara tawhito and why they followed rivers.","I can explain how trails connected people, food and trade."] },
      { c:"Choosing a route", code:"SS-G · SS-P",
        d:["Chooses a route with help.","Draws a straight line to the lakes."],
        a:["Explains choosing a route for water, food and shelter, and around swamps.","“My trail follows the river so there's water every day, and goes around the swamps.”"],
        f:["Compares routes and justifies the best.","“The straight route is shorter but crosses three swamps; the river route is longer but safer.”"],
        i:["I can choose a route with help.","I can explain how routes were chosen for water, food and shelter.","I can compare routes and justify the best one."] },
      { c:"Hine-Paaka", code:"ANZH · EN",
        d:["Remembers it was a tree.","“There was a special tree.”"],
        a:["Retells the story respectfully with the key facts.","“Hine-Paaka was a mātai between the Rakaia and Hakatere, named for an ancestor. Surveyors called it Single Tree. It blew down in 1945, and a new mātai was planted in 1976.”"],
        f:["Explains why the tree mattered to different people.","“To Ngāi Tūhaitara it marked a boundary and an ancestor; to surveyors it was a reference point. The same tree meant different things.”"],
        i:["I know there was a special tree.","I can retell Hine-Paaka's story respectfully with the key facts.","I can explain why the tree mattered to different people."] }
    ],
    plan:{
      prior:"Students know the tākata whenua of Hakatere and seasonal camps (Week 2), and how to read the map from mountains to sea (Week 1). Some will know long walks or tramps; some know Te Araroa passes through Hakatere Conservation Park.",
      kc:["Thinking","Using language, symbols & texts","Relating to others"],
      sequence:[
        ["0–6","Field Note","Nell's note: a dotted line and a lone tree. Trig Check (Week 2). LI/SC.","Recall; predict."],
        ["6–18","Survey","Ara tawhito; **Trail Planner**; mōkihi; **Hine-Paaka** (story and timeline); Tarawhata as a guide.","Plan routes; discuss; retell."],
        ["18–38","Choose Your Path","Introduce A/B/C. Roam: “Why this way? What's on the route?”","Trail guide / landmark map / retell."],
        ["38–45","Through the Lens","Psalm 119:105 — four moves.","Discuss; journal."],
        ["45–50","Trig Clue & Exit","Trig Clue 1 (answer 31); self-assessment; wheat sheaves.","Solve; self-assess."]
      ],
      diff:{
        supported:"Vocabulary cards; printed grid; sentence frames; timeline to copy.",
        esol:"Gesture and map-pointing for route words; picture cards for water, food, shelter, swamp.",
        learning:"Use the Trail Planner on the board with a partner; shorter retell; calm screen available.",
        flying:"Why routes lasted for centuries; pounamu route; why the tree mattered to different people."
      },
      assess:{
        lookFor:["Explains why trails followed rivers","Chooses a route for water, food and shelter","Retells Hine-Paaka respectfully and accurately"],
        evidence:["Trail Planner routes","Path products (photograph)","Exit self-assessment"]
      },
      inquiry:["Were retells respectful and accurate? Did anyone add invented details?","Who connected the guides (Tarawhata) to Week 4's land purchase?","Note questions for your Māori lead."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"nell", meta:"Conservation room · Sheet III",
        msg:"Sheet III shows a **dotted line** running inland from the coast toward the mountains, and one drawing that's very carefully done: a **lone tree on the plain**, with two words in pencil: *Single Tree*. A surveyor drew it. But the tree had **another name** long before that.",
        notes:[["SAY","Read the message. 🟡 Nell is fictional; the tree is real history."],["ASK","“Why would a surveyor draw one tree so carefully?”"],["LISTEN","It's a landmark; easy to see on a flat plain; a reference point for measuring."]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"What is mahika kai?", a:"Food-gathering places and the ways food was gathered." }, { q:"Why are the Southern Alps still rising?", a:"The Pacific and Australian plates push together; uplift about 10 mm a year near Aoraki/Mt Cook." }, { q:"What was the bearing for Sheet II?", a:"009° (5 + 1 + 0 + 3)." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Ara tawhito", title:"Trails across *Hakatere*",
        bullets:["The **Hakatere, Rakaia and Rangitata** rivers were traditional trails inland to the foothills.","Inland routes linked to the **pounamu trails** over to Te Tai Poutini (the West Coast).","Routes passed places where **food, water and shelter** were always available, and went **around the huge swamps**."],
        visual:{ map:{ theme:"paper", labels:"both", relief:true }, size:620 },
        notes:[["SAY","Facts from the Arowhenua narrative (Tākata Whenua o Hakatere)."],["ASK","“Why follow a river instead of walking in a straight line?” ⏳"],["LISTEN","Water every day; food (eels, birds); easier walking on the riverbed; a path you can't lose; avoids swamps."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Plan a trail", title:"Coast to Ō Tū Wharekai", ix:"trailplanner",
        notes:[["CLICK","Students direct you square by square from the coast kāika to the lakes. Click squares next to the route. Click an earlier square to go back."],["ASK","At each choice: “Water? Food? Shelter? Swamp?”"],["CLICK","Then press ‘Follow the river’ to compare a river route."],["NOTE","The grid is a game model, not a real map of a trail."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Up and down the rivers", title:"Walk up, float down",
        body:"Ngāi Tahu's trail atlas, **Kā Huru Manu**, describes a trail on the **Waitaki River** to the south of us: people **walked upriver** to gather food, then came back **downriver on mōkihi**, rafts made from bundles of raupō, carrying the harvest.\n\nCampsites along the way were overnight stops and places to **prepare food**.",
        visual:{ svg:raftSVG },
        notes:[["SAY","“This example comes from the Waitaki trail story in Kā Huru Manu. Our rivers were trails too.”"],["ASK","“Why float down instead of walking back?”"],["LISTEN","Heavy loads; faster; easier; rivers do the work."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"A landmark with a name", title:"*Hine-Paaka*",
        bullets:["**Hine-Paaka** was a large **mātai** tree on the edge of the inland foothills, **between the Rakaia and Hakatere** rivers.","It was named for **Hine-Paaka**, an ancestor of **Ngāi Tūhaitara and Kāti Māmoe**, and it marked a **boundary**.","In the 1860s the surveyor **Robert Park** called it **“Single Tree”** in his sketchbook and used it as a reference point."],
        visual:{ svg:treeSVG },
        notes:[["SAY","Read slowly. Facts from the Arowhenua narrative."],["TIKANGA","Don't add details about the ancestor Hine-Paaka. Only retell what the narrative records."],["ASK","“The same tree had two names. What did it mean to each group?”"]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"A tree through time", title:"What happened to Hine-Paaka?", h:"440px",
        cards:[ { big:"1860s", t:"“Single Tree”", d:"A surveyor uses it as a **reference point**. The land around it later becomes a farm, and the tree is **fenced**." }, { big:"1945", t:"Blown down", d:"A storm **blows the old mātai down**." }, { big:"1976", t:"Planted again", d:"A **new mātai** is planted, after a **tapu-lifting ceremony** led by Riki Ellison-Taiaroa and Paani Manawatu." } ],
        notes:[["SAY","“Early settlers reportedly tried twice to cut it down, but it was fenced and kept.”"],["TIKANGA","Explain tapu simply: ‘sacred, set apart’. Ask your Māori lead before going further."],["ASK","“Why might people plant a new tree in the same place?”"]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Guides who knew the land", title:"Following *Tarawhata*",
        bullets:["**Te Rehe** was the ariki (high chief) for the Huirapa area, where Hakatere is.","In **1843–44**, his son **Tarawhata** guided the official **Edward Shortland** through South Canterbury to Akaroa. Shortland learned Māori names for many small streams.","In **1848**, Tarawhata and Te Rehe guided **Walter Mantell** through the region."],
        visual:{ artefact:"sketch" },
        notes:[["SAY","“The newcomers needed Kāi Tahu guides who knew the trails, the water and the names.”"],["DEEPER","“1848 is the year of Kemp's Deed. Why might it matter that officials travelled with Kāi Tahu guides that year?” (Bank for Week 4.)"]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAY","“Choose your path. Use facts from today's slides only.”"],["CLICK","Start the 20-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Psalm 119:105."],["ASK","“How is God's Word like a landmark or a light on a trail?”"]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 1976 − 1945 = 31."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = wheat sheaves."]] }
    ]
  };

  /* ======================= TUESDAY · GEOGRAPHY ======================= */
  const tue = {
    id:"w03-tue", week:3, day:"tue", subject:"geography", duration:50,
    title:"Mountain Hazards: Earthquakes, Slips & Avalanches", guide:"sam",
    codes:["SS-G","SS-C","SS-P"],
    coverage:"Y5 Geography (2027): tectonic hazards — how they happen, the hazards they cause, and how to prepare. Y5 Civics: who helps and makes plans (Civil Defence, councils, communities).",
    li:"We are learning about mountain hazards and how people prepare for them.",
    sc:["I can explain how the plate boundary causes earthquakes.","I can describe how slips and avalanches happen.","I can plan what to do to be prepared."],
    vocab:[
      { w:"hazard", def:"something that could cause harm" },
      { w:"earthquake", def:"shaking of the ground when rock suddenly moves along a fault" },
      { w:"fault", def:"a crack in the Earth's crust where rocks move" },
      { w:"slip", def:"a landslide: rock and soil sliding down a slope" },
      { w:"avalanche", def:"a mass of snow sliding down a mountain" },
      { w:"prepare", def:"to get ready before something happens" },
      { w:"Civil Defence", def:"the people and services who help communities get ready for, and recover from, emergencies" }
    ],
    prep:{ min:5, items:["Field Journals","Optional: a real grab-bag item or two (torch, water bottle, first-aid kit) to show","Check your school's earthquake drill routine"] },
    safety:["Sensitivity: many Canterbury families lived through the 2010–11 earthquakes. Give a calm warning, let students step out if they need to, and focus on helpers and preparedness.","Practise Drop, Cover and Hold carefully: under desks, no pushing."],
    tikanga:[],
    hononga:"**Rūaumoko.** In Māori tradition, **Rūaumoko** is linked with earthquakes and volcanoes. Different people have explained earthquakes in different ways; today we learn the science of plates and faults, and how to keep each other safe. Ask your Māori lead before teaching the traditional narrative.",
    paths:[
      { id:"A", name:"The Recorder", product:"Hazard Fact File", steps:["Choose **one hazard**: earthquake, slip or avalanche.","Explain **what causes it** and **where** it happens in our district or the Alps.","Write **three ways to be prepared**."], flying:"Explain how one hazard can cause another (e.g. earthquake → slip)." },
      { id:"B", name:"The Maker", product:"Grab-Bag Plan", steps:["Draw and label a **grab bag** for a family of four.","Include **water, food, a torch, a first-aid kit, a radio, warm clothes** and anything special your whānau needs.","Add a **family meeting place** and an emergency contact."], flying:"Plan for a pet or someone who needs extra help." },
      { id:"C", name:"The Storyteller", product:"Civil Defence Message", steps:["Write a calm **30-second radio message** for our district.","Tell people **what to do during** an earthquake (Drop, Cover, Hold) and **after**.","Practise it in a calm, clear voice."], flying:"Add advice for people tramping or skiing in the mountains." }
    ],
    supportedShort:"hazard picture cards, a grab-bag checklist, the Drop · Cover · Hold card, sentence frames.",
    lens:{
      pillar:"aroha", title:"Though the mountains quake",
      look:"Look again at the slope: rain, broken rock and shaking can send a slip down the hill.",
      ref:"Psalm 46:1–3",
      paraphrase:"God is our safe place and our strength, always ready to help in trouble. So we will not be afraid, even if the earth shakes and the mountains fall into the sea.",
      talk:[
        { q:"The psalm doesn't promise that nothing scary will happen. What does it promise?", listen:"God is with us; He is our safe place; He helps in trouble; we don't have to be afraid alone." },
        { q:"How can we be ‘help in trouble’ for each other, like the helpers after an earthquake?", listen:"Checking on neighbours; sharing food and water; comforting people; being prepared so we can help others." }
      ],
      live:"Ask someone at home: **what is our family's plan if there's an earthquake?** Write one thing you'll do."
    },
    clue:{ prompt:"In “Drop, Cover and Hold”, how many actions are there?", answer:3, explain:"Drop, Cover, Hold: 3. Trig Clue 2 is saved!" },
    next:"Wednesday — Dr Priya says the stars aren't really moving at night. So why do they?",
    rubric:[
      { c:"Earthquakes", code:"SS-G",
        d:["Says earthquakes shake the ground.","“The ground shakes.”"],
        a:["Explains that the plate boundary causes earthquakes along faults.","“The plates push against each other. When rock suddenly slips along the Alpine Fault, it shakes.”"],
        f:["Uses evidence about the Alpine Fault to explain why we prepare.","“It last had a big quake in 1717 and they happen about every 300 years, so we prepare now.”"],
        i:["I know earthquakes shake the ground.","I can explain how the plate boundary causes earthquakes.","I can use evidence about the Alpine Fault to explain why we prepare."] },
      { c:"Slips & avalanches", code:"SS-G",
        d:["Names a slip or avalanche.","“Rocks fall down.”"],
        a:["Describes what makes slips and avalanches more likely.","“Steep, broken, wet rock slips more easily. Avalanches happen when snow sits on steep slopes.”"],
        f:["Explains how hazards link together.","“An earthquake can shake loose a slip that blocks a river or road.”"],
        i:["I can name a mountain hazard.","I can describe what makes slips and avalanches more likely.","I can explain how one hazard can cause another."] },
      { c:"Being prepared", code:"SS-C",
        d:["Knows to hide under a table.","“Get under the desk.”"],
        a:["Explains Drop, Cover, Hold and a household plan.","“Drop, cover your head and neck, hold on. Have water, a torch and a meeting place.”"],
        f:["Plans for different people and places.","“In the mountains, check the avalanche advisory; at home, plan for our dog and Nana.”"],
        i:["I know one thing to do in an earthquake.","I can explain Drop, Cover, Hold and a household plan.","I can plan for different people and places."] }
    ],
    plan:{
      prior:"Last week students learned that the Pacific and Australian plates push the Alps up along the Alpine Fault. Many students' families lived through the 2010–11 Canterbury earthquakes; some may feel anxious.",
      kc:["Thinking","Participating & contributing","Managing self"],
      sequence:[
        ["0–6","Field Note","Sam's message. Calm warning. Trig Check (Monday). LI/SC.","Recall; check in."],
        ["6–18","Survey","The Alpine Fault; **Slope Stability**; avalanches; Drop · Cover · Hold (practise); grab bag.","Test slopes; practise; plan."],
        ["18–38","Choose Your Path","Introduce A/B/C. Roam: “What causes it? How do we prepare?”","Fact file / grab-bag plan / Civil Defence message."],
        ["38–45","Through the Lens","Psalm 46:1–3 — four moves.","Discuss; home question."],
        ["45–50","Trig Clue & Exit","Trig Clue 2 (answer 3); self-assessment; wheat sheaves.","Solve; self-assess."]
      ],
      diff:{
        supported:"Hazard picture cards; grab-bag checklist; sentence frames.",
        esol:"Act out Drop, Cover, Hold; picture glossary; rehearse the radio message.",
        learning:"Movement (practise the drill); choice of product; calm screen available; a quiet space for anyone upset.",
        flying:"Linked hazards; mountain safety; planning for different people."
      },
      assess:{
        lookFor:["Links plate movement to earthquakes","Describes conditions that make slips and avalanches likely","Explains Drop, Cover, Hold and a household plan"],
        evidence:["Path products (photograph)","Drill practice","Exit self-assessment"]
      },
      inquiry:["Did anyone find this hard? Follow up gently and tell whānau if needed.","Who could link hazards together?","Send the home question so families talk about their plan."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"sam", meta:"Hakatere Conservation Park · after rain",
        msg:"Kia ora. After last night's rain there's been a **slip** across the track, so Flint and I took the long way round. Mountains are beautiful, but they can be **dangerous**. The same push that lifts them also **shakes** them. Today we learn how to be **ready**.",
        notes:[["SAY","Read the message. 🟡 Sam is fictional."],["SAFETY","Calm warning now: “Today we talk about earthquakes. Some of our families remember the Canterbury earthquakes. If you feel worried, you can tell me, or take a break. We're going to focus on being ready and on the helpers.”"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"Name the three rivers that were trails inland.", a:"Hakatere, Rakaia and Rangitata." }, { q:"What did surveyors call Hine-Paaka?", a:"“Single Tree”." }, { q:"What three things did a good trail pass?", a:"Water, food and shelter (and it avoided swamps)." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Why the ground shakes", title:"The *Alpine Fault*",
        bullets:["The plate push that lifts the Alps also causes **earthquakes**. When rock suddenly slips along a **fault**, the ground shakes.","The **Alpine Fault** runs about **650 km** up the South Island, along the western edge of the Alps.","Its last big earthquake was in **1717**, and big ones happen about **every 300 years**. That's why scientists say it's important to **prepare now**."],
        notes:[["SAY","Facts from Te Ara and GNS Science."],["SAY","“Scientists can't say exactly when the next one will be. They say it's likely in our lifetimes, so we get ready, the same way we wear seatbelts.”"],["NOTE","GNS Science estimates about a 75% chance of a large Alpine Fault earthquake in the next 50 years. Share this only if students ask, and calmly."],["IF","A student is worried → “That's a normal feeling. Being prepared is how we look after each other. Let's learn what to do.”"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Will it slip?", title:"Slope Stability", ix:"slope",
        notes:[["CLICK","Try different slopes: change the angle and rain, toggle ‘Broken rock’, add an ‘Earthquake’, then press ‘Will it slip?’"],["SAY","“Our mountains are steep, made of broken rock, and get lots of rain. That's why slips are common.”"],["ASK","“Which change made the biggest difference?”"],["NOTE","The risk meter is a simplified teaching model, not an engineering tool."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Snow on steep slopes", title:"Avalanches", h:"470px",
        cards:[ { icon:"🏔️", t:"What it is", d:"A slide of **snow** down a mountain. Anytime **snow and steep slopes** are together, an avalanche is possible." }, { icon:"🗓️", t:"When", d:"They can happen in any season, but are most common in **winter and spring**." }, { icon:"📱", t:"Be ready", d:"Check the **NZ Avalanche Advisory** and the mountain weather before you go. Skiers carry a **beacon, shovel and probe**." } ],
        notes:[["SAY","Facts from DOC's ‘Be avalanche alert’ page."],["ASK","“Who has been up to a ski field like Mt Hutt? What safety signs did you see?”"]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"When the shaking starts", title:"Drop · Cover · Hold", h:"470px",
        cards:[ { big:"1", t:"Drop", d:"**Drop** to your hands and knees, or as low as you can." }, { big:"2", t:"Cover", d:"**Cover** your head and neck. Get under a strong table if you can." }, { big:"3", t:"Hold", d:"**Hold** on until the shaking stops. Don't run outside." } ],
        notes:[["CLICK","Practise now: say “Earthquake!” and everyone does Drop, Cover, Hold under desks for 20 seconds. Calm voices."],["SAY","Source: getready.govt.nz (NEMA). “After shaking stops, expect more shakes: Drop, Cover and Hold again each time.”"]] },
      { type:"discussion", phase:"excavate", fs:"real", kicker:"Turn & Talk", q:"What would your family need if you had to stay home for **three days** with no power or water?", sub:"Civil Defence says you may be stuck at home for three days or more in an emergency.", talk:60,
        notes:[["TALK","60-second talk. Make a class list."],["LISTEN","Water, food that doesn't need cooking, torch, batteries, radio, first-aid kit, medicines, warm clothes, pet food, a phone charger, a plan to meet."],["NOTE","Many emergency items are already in your home. Keep it practical and calm."]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAY","“Choose your path. Keep it calm and helpful: we're helpers today.”"],["CLICK","Start the 20-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Psalm 46:1–3."],["ASK","“The psalm doesn't promise nothing scary will happen. What does it promise?”"]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 3."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess. Remind: ask the home question tonight."],["CLICK","C = wheat sheaves."]] }
    ]
  };

  /* ======================= WEDNESDAY · SCIENCE ======================= */
  const wed = {
    id:"w03-wed", week:3, day:"wed", subject:"science", duration:50,
    title:"Day, Night & the Spinning Sky", guide:"priya",
    codes:["SC-ES","SC-P"],
    coverage:"Y6 Science (2027): the apparent movement of the Sun, Moon and stars is caused by Earth's rotation; using diagrams and models to show apparent movement; how people have used the sky to find their way.",
    li:"We are learning how Earth's spin makes the Sun and stars seem to move across the sky.",
    sc:["I can explain why we have day and night.","I can describe how the stars seem to move across the night sky.","I can show the apparent movement with a diagram or model."],
    vocab:[
      { w:"rotate", def:"to spin around a centre line" },
      { w:"axis", def:"the imaginary line Earth spins around, from the North Pole to the South Pole" },
      { w:"apparent movement", def:"movement that seems to happen but is really caused by us moving" },
      { w:"sunrise", def:"when the Sun seems to come up in the east" },
      { w:"sunset", def:"when the Sun seems to go down in the west" },
      { w:"south celestial pole", def:"the point in the southern sky that the stars seem to circle around" },
      { w:"Southern Cross", def:"a small, bright cross of stars in the southern sky, used to find south" },
      { w:"Pointers", def:"two bright stars that point to the Southern Cross" }
    ],
    prep:{ min:5, items:["A torch (the Sun) and a globe or ball with a sticker on NZ","Optional: a swivel chair for the ‘act it out’ demo","Home task: ‘Find the Southern Cross’ (with whānau, on a clear night)"] },
    safety:["Never look at the Sun.","Stargazing at home happens with an adult."],
    tikanga:["The Southern Cross is known in te reo as Māhutonga (Te Punga is also used in some areas). Check local names with your Māori lead."],
    hononga:"**Finding the way by the stars.** Polynesian navigators read the rising and setting stars to cross the Pacific, and Māori knowledge of the night sky guided travel and seasons. In Week 9 we'll learn more about finding our way by the stars.",
    paths:[
      { id:"A", name:"The Recorder", product:"Day-and-Night Diagram", steps:["Draw the **Sun**, **Earth** and **New Zealand** at **midday** and **midnight**.","Add arrows to show **which way Earth spins**.","Write two sentences: why we get **day and night**, and why the stars **seem** to move."], flying:"Explain why the Southern Cross is upside down at some times and upright at others." },
      { id:"B", name:"The Maker", product:"Globe & Torch Model", steps:["Put a sticker on NZ on a ball or globe. Shine a torch (the Sun) on it.","Turn the globe slowly to show **sunrise, midday, sunset and midnight** for NZ.","Draw your model and label it."], flying:"Use your model to show why it's day in London when it's night here." },
      { id:"C", name:"The Storyteller", product:"Act It Out", steps:["In a group, one person is the **Sun**, one is **Earth** (spinning slowly), others are **stars** around the room.","Show how, from Earth, the Sun and stars **seem** to move.","Narrate it for the class."], flying:"Act out how the stars seem to circle the south celestial pole." }
    ],
    supportedShort:"a partly drawn diagram to complete, picture cards (sunrise, midday, sunset, night), sentence frames.",
    lens:{
      pillar:"mohio", title:"From the rising of the sun",
      look:"Look again at the Earth spinning: sunrise, midday, sunset, night, every day.",
      ref:"Psalm 113:3",
      paraphrase:"From the place where the sun rises to the place where it sets, the name of the Lord is to be praised.",
      talk:[
        { q:"Every 24 hours the whole Earth turns through sunrise and sunset. What might it mean to praise God ‘from the rising of the sun to the place where it sets’?", listen:"All day long; everywhere on Earth; all people in every place." },
        { q:"Right now, somewhere on Earth, the sun is rising. What does that tell us about who God's people are?", listen:"They're everywhere, in every country; God is praised all around the world all the time." }
      ],
      live:"Tomorrow, notice where the Sun is when you **wake up** and when you **go to bed**. Say a one-line thank you at each."
    },
    clue:{ prompt:"How many hours does Earth take to spin around once (to the nearest hour)?", answer:24, explain:"About 24 hours: one day. Trig Clue 3 is saved!" },
    next:"Thursday — Liv's tractor has more gears than you can count. Why does a tractor need gears?",
    rubric:[
      { c:"Day and night", code:"SC-ES",
        d:["Says the Sun goes away at night.","“The Sun goes down.”"],
        a:["Explains that Earth spins, so each place faces towards and then away from the Sun.","“Earth spins once about every 24 hours. When NZ faces the Sun it's day; when it faces away it's night.”"],
        f:["Explains apparent movement precisely.","“The Sun isn't really moving across our sky. We spin, so it seems to rise in the east and set in the west.”"],
        i:["I know it's dark at night.","I can explain day and night using Earth's spin.","I can explain why the Sun only seems to move."] },
      { c:"The spinning sky", code:"SC-ES",
        d:["Says stars move.","“The stars move around.”"],
        a:["Describes stars seeming to circle the south celestial pole because Earth spins.","“Looking south, the stars seem to go round one point, because Earth is spinning.”"],
        f:["Uses the Southern Cross to find south.","“Follow the long arm of the Cross about four and a half times, then drop straight down to the horizon.”"],
        i:["I know stars seem to move.","I can describe how stars seem to circle the south celestial pole.","I can use the Southern Cross to find south."] },
      { c:"Modelling", code:"SC-P",
        d:["Draws Sun and Earth.","Unlabelled drawing."],
        a:["Shows apparent movement in a labelled diagram or model.","Diagram with spin arrow, day side and night side."],
        f:["Uses the model to predict a new situation.","Shows when it's night here, it's day on the other side of the world."],
        i:["I can draw the Sun and Earth.","I can show day and night in a labelled diagram or model.","I can use my model to predict something new."] }
    ],
    plan:{
      prior:"Students know the Sun is a star (Week 2) and the five naked-eye planets (Week 1). Many will say ‘the Sun goes round the Earth’ or ‘the Sun goes down’; that's how it looks.",
      kc:["Thinking","Using language, symbols & texts"],
      sequence:[
        ["0–6","Field Note","Dr Priya's message. Trig Check (Tuesday). LI/SC.","Recall; predict."],
        ["6–18","Survey","Day and night (torch + globe demo); **Spin the Earth**; **Star Trails** and finding south.","Predict; observe; explain."],
        ["18–38","Choose Your Path","Introduce A/B/C. Roam: “Is it moving, or are we?”","Diagram / model / act it out."],
        ["38–45","Through the Lens","Psalm 113:3 — four moves.","Discuss; notice the Sun."],
        ["45–50","Trig Clue & Exit","Trig Clue 3 (answer 24); self-assessment; wheat sheaves.","Solve; self-assess."]
      ],
      diff:{
        supported:"Partly drawn diagram; picture cards; sentence frames.",
        esol:"Spin your body to show rotation; picture glossary; act it out.",
        learning:"Hands-on globe and torch; movement (act it out); calm screen available.",
        flying:"Upside-down Southern Cross; day in London; finding south."
      },
      assess:{
        lookFor:["Explains day and night by Earth's spin","Describes stars circling the south celestial pole","Shows apparent movement in a labelled diagram or model"],
        evidence:["Path products (photograph)","Demo predictions","Exit self-assessment"]
      },
      inquiry:["Who still thinks the Sun moves around Earth? Revisit with the swivel chair.","Who found the Southern Cross at home?","Bank star-navigation questions for Week 9."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"priya", meta:"Dark-sky site · after midnight",
        msg:"I left my camera pointing **south** all night. When I looked at the photo, the stars had drawn **perfect circles** around one spot in the sky. But here's the thing: the **stars weren't moving**. Something else was. Can you work out what?",
        notes:[["SAY","Read the message. 🟡 Dr Priya is fictional."],["ASK","“What was moving?” (Take predictions; reveal later: Earth!)"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"What causes earthquakes along the Alpine Fault?", a:"The plates push together; rock suddenly slips along the fault." }, { q:"Name three things that make a slip more likely.", a:"Steep slope, broken rock, lots of water (and shaking)." }, { q:"What are the three actions in an earthquake?", a:"Drop, Cover, Hold." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Is the Sun moving?", title:"Why we have *day and night*",
        bullets:["Earth **spins** on its axis. One full spin takes about **24 hours**.","The side facing the Sun has **day**. The side facing away has **night**.","As we spin, the Sun **seems** to rise in the **east** and set in the **west**. It's really **us** turning."],
        visual:{ artefact:"starchart" },
        notes:[["NOTE","🧪 Demo: torch (Sun) and a globe or ball with a sticker on NZ. Turn slowly: sunrise, midday, sunset, midnight."],["SAY","Source: NASA StarChild."],["ASK","“Why don't we feel Earth spinning?”"],["LISTEN","It spins smoothly and steadily; everything around us moves with us, like in a car or plane."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Looking down on the South Pole", title:"Spin the Earth", ix:"spinearth",
        notes:[["CLICK","Press → to step through midnight, sunrise, noon, sunset. Or press ‘Spin’."],["SAY","“Looking down on the South Pole, Earth spins clockwise. Watch the red dot (us) move from the night side into the light.”"],["NOTE","Drawing is simplified; continents are shapes only."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Facing south at night", title:"The spinning sky", ix:"startrails",
        notes:[["CLICK","Press ‘Play the night’, then ‘Show trails’ (like Dr Priya's camera). Then ‘Find south’."],["SAY","“The stars seem to circle one point: the south celestial pole. Unlike the north, there's no bright star right at the pole, so we use the Southern Cross.”"],["SAY","“During the night, the Southern Cross turns from upright, to sideways, to upside down.” (Te Ara)"],["NOTE","The star positions are a simplified model to show the movement."]] },
      { type:"discussion", phase:"excavate", fs:"real", kicker:"Turn & Talk", q:"If the stars **seem** to move but don't really, what else in the sky only **seems** to move?", sub:"Think about the Sun, the Moon and the planets.", talk:45,
        notes:[["TALK","45-second talk."],["LISTEN","The Sun rising and setting; the Moon rising and setting; planets crossing the sky during the night: all because Earth spins."]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAY","“Choose your path. Every path must show the spin with an arrow or a movement.”"],["CLICK","Start the 20-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Psalm 113:3."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 24."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess. Home task: find the Southern Cross with whānau on a clear night."],["CLICK","C = wheat sheaves."]] }
    ]
  };

  /* ======================= THURSDAY · TECHNOLOGY ======================= */
  const thu = {
    id:"w03-thu", week:3, day:"thu", subject:"technology", duration:50,
    title:"Wheels, Axles & Gears", guide:"liv",
    codes:["TE-TK","TE-TP","SC-MF","MA"],
    coverage:"Technology (NZC L3): technological knowledge of mechanisms (wheel and axle, gears) and how they transfer and change motion; technological modelling. Y5 Science: simple machines. Maths: ratio.",
    li:"We are learning how wheels, axles and gears transfer and change motion in farm machines.",
    sc:["I can explain how a wheel and axle works.","I can explain gear ratio: what happens when a big gear turns a small gear.","I can build and test a gear model."],
    vocab:[
      { w:"wheel and axle", def:"a wheel fixed to a rod (axle) so they turn together" },
      { w:"axle", def:"the rod in the centre that a wheel turns on or with" },
      { w:"gear", def:"a wheel with teeth that fits into another toothed wheel" },
      { w:"teeth", def:"the bumps around the edge of a gear that lock together" },
      { w:"driver gear", def:"the gear that is turned first, by an engine or a hand" },
      { w:"driven gear", def:"the gear that is turned by the driver gear" },
      { w:"gear ratio", def:"how many times one gear turns compared with the other" },
      { w:"speed", def:"how fast something moves or turns" }
    ],
    prep:{ min:10, items:["Print the gear templates on card (or trace bottle caps and jar lids)","Split pins, card, scissors, a cardboard base","Optional: an old egg-beater, hand drill or bike to show real gears"] },
    safety:["Scissors rules; split-pin care.","Keep fingers out of real gears (on bikes or tools): they can pinch.","Tidy-up routine."],
    tikanga:[],
    hononga:"**Wheels arrive in Aotearoa.** Before European settlement Māori had no wheeled vehicles; loads were carried, dragged or floated (like on mōkihi). Wheels, carts and later geared machines changed how people farmed and travelled on the plains.",
    paths:[
      { id:"A", name:"The Recorder", product:"Gear Ratio Table", steps:["Use the Gear Train to test **four pairs** of gears.","Record **teeth on each gear** and **how many turns** the driven gear makes for one turn of the driver.","Write a rule: **“When a big gear turns a small gear…”**"], flying:"Find a pair where the driven gear turns half as fast. Where might a farmer want that?" },
      { id:"B", name:"The Maker", product:"Card Gear Model", steps:["Cut out a **big** and a **small** card gear from the templates.","Pin them on a card base with **split pins** so their teeth mesh.","Mark one tooth on each and count turns: **does the small one spin faster?**"], flying:"Add a third gear. Which way does it turn?" },
      { id:"C", name:"The Storyteller", product:"Explain-a-Gear Script", steps:["Write a **1-minute video script** explaining gears to a younger student.","Use a **farm example** (tractor, bike, egg-beater).","Explain **speed vs force** in simple words."], flying:"Explain why the two gears turn in opposite directions." }
    ],
    supportedShort:"gear templates already cut, a turns-counting table, sentence frames, partner pairing.",
    lens:{
      pillar:"manaaki", title:"Many parts, one body",
      look:"Look again at the gears: every tooth matters; if one gear stops, the whole machine stops.",
      ref:"1 Corinthians 12:12, 18–20",
      paraphrase:"A body is one, but it has many parts. God has placed each part just where He wanted it. There are many parts, but one body.",
      talk:[
        { q:"How is our class (or church, or team) like a set of gears?", listen:"Everyone has a part; we depend on each other; small parts matter; if one stops, others are affected." },
        { q:"Is the small gear less important than the big one?", listen:"No! It does a different job; it turns faster; the machine needs both." }
      ],
      live:"Name **one ‘small gear’** in our class or school whose job makes everything work, and thank them this week."
    },
    clue:{ prompt:"A 30-tooth gear turns a 10-tooth gear. How many times does the small gear turn for one turn of the big gear?", answer:3, explain:"30 ÷ 10 = 3 turns. Trig Clue 4 is saved for Friday!" },
    next:"Friday — Tom is cutting paper mountains, and Sheet III is waiting.",
    rubric:[
      { c:"Wheel and axle", code:"TE-TK · SC-MF",
        d:["Names a wheel.","“A tractor has wheels.”"],
        a:["Explains that turning the big wheel turns the axle with more force (or the axle turns the wheel faster).","“A steering wheel is big, so a small push turns the axle with lots of force.”"],
        f:["Finds and explains wheels and axles in farm machines.","“The wheelbarrow wheel and axle let a heavy load roll instead of being dragged.”"],
        i:["I can name a wheel.","I can explain how a wheel and axle works.","I can explain wheels and axles in farm machines."] },
      { c:"Gear ratio", code:"TE-TK · MA",
        d:["Says gears turn each other.","“One gear turns the other.”"],
        a:["Explains gear ratio using teeth.","“A 30-tooth gear turning a 10-tooth gear makes the small one turn 3 times as fast.”"],
        f:["Explains the speed–force trade-off with a real example.","“A tractor's low gear turns the wheels slowly but strongly for pulling; high gear is fast for the road.”"],
        i:["I know gears turn each other.","I can explain gear ratio using teeth.","I can explain the speed–force trade-off with an example."] },
      { c:"Build & test", code:"TE-TP",
        d:["Builds gears with help.","Gears slip and don't mesh."],
        a:["Builds a working gear pair and counts turns.","Marked teeth; turns recorded."],
        f:["Improves the model after testing.","Adds a third gear and explains direction."],
        i:["I can build gears with help.","I can build a working gear pair and count turns.","I can improve my gear model after testing."] }
    ],
    plan:{
      prior:"Last week students learned levers: effort, load, pivot, and the trade-off of less effort for more distance. Gears trade speed for force in a similar way. Bike riders will know gears from experience.",
      kc:["Thinking","Participating & contributing"],
      sequence:[
        ["0–6","Field Note","Liv's message. Trig Check (Wednesday). LI/SC.","Recall; predict."],
        ["6–18","Survey","Workshop safety; wheel and axle; **Gear Train**; gears on the farm; design brief.","Predict turns; count; discuss."],
        ["18–38","Choose Your Path","Introduce A/B/C. Roam: “How many turns? Faster or stronger?”","Ratio table / card gears / script."],
        ["38–45","Through the Lens","1 Corinthians 12 — four moves.","Discuss; thank a ‘small gear’."],
        ["45–50","Trig Clue & Exit","Trig Clue 4 (answer 3); self-assessment; wheat sheaves.","Solve; self-assess; tidy up."]
      ],
      diff:{
        supported:"Pre-cut gears; turns table; sentence frames.",
        esol:"Gesture: big slow circle vs small fast circle; picture glossary.",
        learning:"Real gears to handle (egg-beater, bike); partner build; calm screen available.",
        flying:"Third gear direction; slower driven gear; tractor gear examples."
      },
      assess:{
        lookFor:["Explains wheel and axle","Explains gear ratio using teeth","Builds a meshing gear pair and counts turns"],
        evidence:["Ratio tables","Gear models (photograph)","Exit self-assessment"]
      },
      inquiry:["Who connected gears to levers (trade-offs)?","Did the card gears mesh? Adjust templates for Week 5.","Who could explain direction with three gears?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"liv", meta:"Machinery shed · morning",
        msg:"Here's a puzzle. This tractor's engine spins **really fast**. But when it's pulling a heavy plough, the wheels turn **slowly and strongly**. On the road it goes **fast**. Same engine. The secret is hidden inside: **gears**. Let's open it up.",
        notes:[["SAY","Read the message. 🟡 Liv is fictional."],["ASK","“Who rides a bike with gears? What's a low gear good for?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"Why do we have day and night?", a:"Earth spins; the side facing the Sun has day." }, { q:"How long does Earth take to spin once?", a:"About 24 hours." }, { q:"How do you find south using the Southern Cross?", a:"Follow its long arm to the south celestial pole, then drop straight down to the horizon." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"safety", phase:"excavate", fs:null, title:"Workshop rules",
        items:[ { icon:"✂️", t:"Scissors", d:"Points down; cut away from your body." }, { icon:"⚙️", t:"Fingers clear", d:"Real gears can pinch. Never put fingers near moving gears on bikes or tools." }, { icon:"🧹", t:"Tidy up", d:"Every scrap in the bin, every tool back in its box." } ],
        notes:[["SAFETY","30 seconds."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Simple machines", title:"The *wheel and axle*",
        bullets:["A **wheel** fixed to an **axle** so they turn together.","Turn the **big wheel** and the axle turns with **more force** (a steering wheel, a tap).","Turn the **axle** and the edge of the wheel moves **further and faster** (a tractor's wheels)."],
        visual:{ artefact:"tractor" },
        notes:[["SAY","“Like a lever, a wheel and axle trades force for distance.” Mechanical advantage: Britannica."],["ASK","“Find a wheel and axle in the classroom.” (Door knob, pencil sharpener, chair wheels.)"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Count the teeth", title:"Gear Train", ix:"geartrain",
        notes:[["CLICK","Choose teeth for the driver and driven gears. Press ‘One turn’ and count how many times the small gear turns (watch the red dots)."],["ASK","Before each test: “Predict: how many turns?”"],["SAY","“Big gear turning a small gear: faster, but less force. Small gear turning a big gear: slower, but more force.”"],["DEEPER","“Why do the two gears turn in opposite directions?”"]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"On the farm", title:"Why tractors need *gears*",
        bullets:["**Low gears:** the wheels turn **slowly but strongly**: for pulling a plough or a heavy trailer up a hill.","**High gears:** the wheels turn **fast**: for driving along the road.","The **same engine** can do both jobs because gears change **speed and force**."],
        visual:{ artefact:"gears" },
        notes:[["SAY","“Gears let one engine do many jobs.”"],["ASK","“Which gear would you use to pull a heavy load of hay bales?” (Low.)"]] },
      { type:"brief", phase:"excavate", fs:null, title:"Make a gear model",
        stakeholder:"**Liv**, who is teaching new farm workers how a tractor gearbox works.",
        need:"A **card gear model** that shows a big gear turning a small gear faster.",
        specs:["Two card gears with teeth that mesh.","Fixed with split pins so they turn smoothly.","A marked tooth on each so turns can be counted."],
        notes:[["SAY","“Path B builds to this brief.”"]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAY","“Choose your path. Count teeth and turns!”"],["CLICK","Start the 20-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read 1 Corinthians 12:12, 18–20."],["NOTE","Analogy: a class is ‘like’ a set of gears. “Where does the picture break?” (People choose to work together and care for each other; gears don't.)"]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 30 ÷ 10 = 3."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess. Tidy-up routine."],["CLICK","C = wheat sheaves."]] }
    ]
  };

  /* ======================= FRIDAY · ART ======================= */
  const fri = {
    id:"w03-fri", week:3, day:"fri", subject:"art", duration:50,
    title:"Layered Mountains: Depth & Atmospheric Perspective", guide:"tom",
    codes:["VA-PK","VA-DI","VA-CI"],
    coverage:"Visual Arts (NZC 2007, Level 3): developing practical knowledge (tints, layering, atmospheric perspective); developing ideas (composition from foreground to background); communicating and interpreting (peer critique).",
    li:"We are learning to create depth in a landscape using layered paper and tone.",
    sc:["I can explain atmospheric perspective.","I can make 4–5 tints of one colour and layer them from pale (far) to dark (near).","I can compose a picture with a foreground, middle ground and background."],
    vocab:[
      { w:"atmospheric perspective", def:"making far things paler, bluer and less detailed to show distance (also called aerial perspective)" },
      { w:"tint", def:"a colour made lighter by adding white" },
      { w:"tone", def:"how light or dark a colour is" },
      { w:"layer", def:"one sheet or level placed on top of another" },
      { w:"depth", def:"the feeling that a picture goes back into the distance" },
      { w:"foreground", def:"the part of a picture that looks closest" },
      { w:"background", def:"the part of a picture that looks furthest away" }
    ],
    prep:{ min:15, items:["Tinted paper in 5 shades of one colour per table (or white paper + one paint colour and white to mix tints)","Scissors, glue sticks, A4 card bases","Field Journals"] },
    safety:["Scissors rules. Glue sticks only (no glue guns)."],
    tikanga:["Students make their own mountain shapes. No Māori designs as decoration."],
    hononga:"**Seeing far.** On a clear day, from the plains you can see layer after layer of ranges going back to the Alps, each one paler. Te reo has many words for the land and sky; ask your Māori lead for local words for the ranges you can see from school.",
    paths:[
      { id:"A", name:"The Recorder", product:"Tonal Study", steps:["Paint or colour a strip of **5 tints** of one colour, from palest to darkest.","Sketch **4 layers of mountains** in pencil.","Shade each layer with one tint: **palest at the back, darkest at the front**."], flying:"Write a paragraph explaining atmospheric perspective to someone who has never heard of it." },
      { id:"B", name:"The Maker", product:"Layered Cut-Paper Mountains", steps:["Choose **5 shades** of one colour.","Tear or cut **5 mountain shapes**, each lower than the one behind.","Glue them from **back (palest) to front (darkest)**. Add one small foreground detail."], flying:"Add a braided river in the front layer. Keep this piece for the My Place triptych!" },
      { id:"C", name:"The Storyteller", product:"Peer Critique", steps:["Look at **two classmates'** layered pieces.","Give each **one ‘warm’** (what works) and **one ‘cool’** (one suggestion), using art words.","Report to the class what you learned about depth."], flying:"Explain which piece shows the most depth, and why." }
    ],
    supportedShort:"pre-cut mountain templates, a 5-tint paper set ready to go, a warm/cool feedback card.",
    lens:{
      pillar:"mohio", title:"Now we see dimly",
      look:"Look again at the far mountains: pale and hazy. Up close, everything is clear.",
      ref:"1 Corinthians 13:12",
      paraphrase:"Now we see things like a dim reflection in a mirror, but one day we will see face to face. Now I know only part; then I will know fully, as God fully knows me.",
      talk:[
        { q:"This is an analogy: far mountains look hazy, but up close they're clear. How is that like what Paul says about knowing God now and one day?", listen:"Now we only understand part; one day we'll see clearly; God knows us fully already." },
        { q:"Where does the picture break?", listen:"Mountains don't change, we just get closer; God isn't far away now, He's with us; we can know Him truly now, just not fully." }
      ],
      live:"Gallery walk: tell one classmate how their layers show **far and near**."
    },
    clue:{ prompt:"Friday's clue is the Survey Seal: combine this week's four Trig Clues.", answer:61, explain:"31 + 3 + 24 + 3 = 61 → bearing 061°." },
    next:"Next week — Sheet IV · The Deed: a torn page, and a promise underlined twice.",
    rubric:[
      { c:"Atmospheric perspective", code:"VA-PK",
        d:["Says far things look smaller.","“They look small.”"],
        a:["Explains that far things look paler, bluer and less detailed.","“The air between us and the far mountains makes them paler and bluer.”"],
        f:["Uses it on purpose and explains choices.","“I made my back layer almost white so it feels really far away.”"],
        i:["I know far things look smaller.","I can explain atmospheric perspective.","I can use it on purpose and explain my choices."] },
      { c:"Tints & layers", code:"VA-PK · VA-DI",
        d:["Uses one or two shades.","Layers all the same colour."],
        a:["Makes 4–5 tints and layers them pale (far) to dark (near).","Five layers in order; clear depth."],
        f:["Refines edges and spacing to strengthen depth.","Overlaps and varied heights make a convincing range."],
        i:["I can use two shades.","I can make 4–5 tints and layer them pale to dark.","I can refine my layers to make strong depth."] },
      { c:"Critique", code:"VA-CI",
        d:["Says they like it.","“It's nice.”"],
        a:["Gives a warm and a cool using art words.","“Warm: your tints go smoothly from pale to dark. Cool: the front layer could be taller.”"],
        f:["Gives specific, kind feedback and explains choices.","Links feedback to atmospheric perspective."],
        i:["I can say what I like.","I can give a warm and a cool using art words.","I can give specific, kind feedback and explain it."] }
    ],
    plan:{
      prior:"In Week 1 students drew foreground, middle ground and background with tone; in Week 2 they simplified shapes. Today combines both into layered paper. Keep the best pieces for the Week 9 triptych.",
      kc:["Managing self","Relating to others"],
      sequence:[
        ["0–6","Field Note","Tom's message. Trig Check (Thursday). LI/SC.","Recall; look out at the ranges."],
        ["6–18","Survey","Atmospheric perspective; **Layer Mixer** (tints, wrong way round); method demo.","Predict; compare; plan."],
        ["18–40","Choose Your Path (22 min)","Introduce A/B/C. Roam: “Which layer is furthest? Is it the palest?”","Tonal study / cut-paper / critique."],
        ["40–45","Through the Lens","1 Corinthians 13:12 — gallery reflection.","Gallery walk."],
        ["45–50","Survey Seal & Dealer","Survey Seal III: 31 + 3 + 24 + 3 = 61 → 061°. The Dealer's Offer. Self-assess; wheat sheaves.","Add; dial; discuss."]
      ],
      diff:{
        supported:"Pre-cut templates; ready-made tint set; feedback card.",
        esol:"Model silently, then name; colour and tone words on cards.",
        learning:"Tearing instead of cutting; fewer layers (3); calm screen available.",
        flying:"Braided river in the foreground; explain atmospheric perspective in writing."
      },
      assess:{
        lookFor:["Explains atmospheric perspective","Layers 4–5 tints from pale (far) to dark (near)","Gives warm and cool feedback with art words"],
        evidence:["Layered pieces (photograph)","Critique comments","Exit self-assessment"]
      },
      inquiry:["Which pieces go in the triptych folder?","Did anyone layer the wrong way round? Re-teach with the Layer Mixer.","Who gave the most useful critique?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"tom", meta:"Foothills road · clear morning",
        msg:"Look west on a clear morning: hills, then ranges, then more ranges, then the Alps. Each one is **paler and bluer** than the one in front. Your surveyor shaded his map the same way. Today we **build** that depth out of paper.",
        notes:[["SAY","Read the message. 🟡 Tom is fictional."],["ASK","“If you can see the ranges from the classroom, look now. How many layers can you count?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"A big gear turns a small gear. What happens to the small gear?", a:"It turns faster (with less force)." }, { q:"Why does a tractor need low gears?", a:"Slow but strong turning for pulling heavy loads." }, { q:"What is a wheel and axle?", a:"A wheel fixed to a rod so they turn together." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"content", phase:"excavate", fs:"real", paper:true, kicker:"Seeing far", title:"*Atmospheric* perspective",
        body:"Painters show distance by changing **colour and tone** as a landscape goes back. The air between us and far-away things makes them look **paler and bluer**, with **less detail**.\n\nNear things are **darker**, with more contrast and detail.",
        visual:{ artefact:"palette" },
        notes:[["SAY","Also called aerial perspective (National Gallery, London)."],["ASK","“Why do the far mountains look blue, when the rock is grey?”"],["LISTEN","Air and tiny particles in it scatter blue light between us and the mountains."]] },
      { type:"interactive", phase:"excavate", fs:"real", paper:true, kicker:"Five tints", title:"Layer Mixer", ix:"layermixer",
        notes:[["CLICK","Try each colour. Then press → (or ‘Wrong way round’) to put dark layers at the back."],["ASK","“Does it still look deep? Why not?”"],["SAY","“Far = pale, near = dark. Each layer is one step darker.”"]] },
      { type:"content", phase:"excavate", fs:null, paper:true, kicker:"Your turn", title:"Build *layered* mountains",
        bullets:["Choose **5 shades** of one colour, palest to darkest.","Cut or tear **5 mountain shapes**: each one **lower** than the one behind.","Glue from the **back (palest)** to the **front (darkest)**.","Add **one small detail** in the front layer: a fence, tussock or a river."],
        visual:{ artefact:"printblock" },
        notes:[["SAY","Model the first two layers in 2 minutes. Torn edges look like real ridges!"]] },
      { type:"paths", phase:"paths", fs:null, minutes:22,
        notes:[["SAY","“Choose your path. Path B: keep your piece flat; it's going in the triptych folder.”"],["CLICK","Start the 22-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move. 5-minute gallery reflection."],["SAY","Read 1 Corinthians 13:12."],["NOTE","This is an analogy. Make sure the ‘Where does the picture break?’ question is discussed."]] },
      { type:"folioseal", phase:"decode", fs:"story",
        notes:[["SAY","“Four clues. Add them to get the bearing.”"],["CLICK","Tap each ‘?’ tile. 31 + 3 + 24 + 3 = 61. Dial 061° and press ‘Fix the bearing’."],["SAY","Read the reveal: a dotted trail inland, and Single Tree on the plain."]] },
      { type:"intercept", phase:"decode", fs:"story",
        msg:"Restoration team. I have a better copy of Sheet III. Cleaner, no pencil, no torn edges. Why fuss over the old one? — D.",
        ask:"Is a ‘cleaner copy’ as good as the original? What could a copy leave out?",
        notes:[["SAY","Read it in the Dealer's smooth voice."],["ASK","Link to Monday: the pencil name ‘Single Tree’ and Hine-Paaka. A copy might leave out evidence."],["LISTEN","Copies can leave things out or change them; originals are primary sources; you can't check a copy you can't trust; the pencil marks are history."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess. Celebrate Sheet III!"],["CLICK","C = wheat sheaves. Store layered pieces flat."]] }
    ]
  };

  BM.WEEKS[3] = {
    n:3,
    story:"Sheet III shows a dotted line running inland and a lone tree drawn on the plain: ‘Single Tree’. This week historians learn about ara tawhito (traditional trails) and the mātai Hine-Paaka; geographers learn about earthquakes, slips and avalanches and how to be ready; astronomers discover why the sky seems to spin; engineers count gear teeth; and artists build layered mountains. Friday's four clues give the bearing for Sheet III, and the Dealer claims he has a ‘better copy’.",
    hononga:"Ara tawhito, mōkihi and Kā Huru Manu; Hine-Paaka, named for an ancestor of Ngāi Tūhaitara and Kāti Māmoe (Mon) · Rūaumoko and different ways of explaining earthquakes (Tue) · Māhutonga and wayfinding by the stars (Wed) · how wheels changed travel in Aotearoa (Thu) · local words for the ranges (Fri). Check all local framing with your Māori lead and Te Rūnanga o Arowhenua (D3).",
    seal:{
      answer:61,
      instruction:"Add the four **Trig Clues** from Monday to Thursday. The total is a **bearing**. Dial it on the theodolite to crack the wax seal.",
      reveal:"🟡 **Sheet III restored:** a **dotted trail** running inland toward the mountains, and a carefully drawn **lone tree** labelled in pencil: *Single Tree*. Next week: *The Deed*.",
      art:() => { const v = BM.art.sheetArt(3); v.setAttribute("style", "width:100%;height:100%"); return v; }
    },
    lessons:[mon, tue, wed, thu, fri]
  };
})(window.BM);
