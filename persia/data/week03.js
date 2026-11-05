/* ==========================================================
   WEEK 3 — STAGE III · THE ROYAL ROAD
   A relay station on the road. The caravan races a courier past a great carved cliff.
   Notes: [KEY, text]  KEY = SAY ASK LISTEN IF CLICK TALK DEEPER PACE SAFETY WAIT NOTE CARE SIDE
   Facts are sourced in data/sources.js (tags match blueprint §18).
   ========================================================== */
(function(BM){
  "use strict";

  /* ======================= MONDAY · HISTORY ======================= */
  const mon = {
    id:"w03-mon", week:3, day:"mon", subject:"history", duration:50,
    title:"Darius the Organiser: Satraps, Darics, Roads & Behistun", guide:"shirin",
    codes:["SS-H","SS-C","SS-E","SS-P","RE"],
    coverage:"Y5–6 History (2027 Social Sciences): cause and consequence; primary sources (the Behistun inscription). Civics: how leaders organise and govern. Y6 Economic activity: taxes, coins and exchange.",
    li:"We are learning how Darius organised a huge empire.",
    sc:["I can describe satraps, the daric coin and the Royal Road.","I can explain what the Behistun inscription is and why it matters.","I can connect Darius to Ezra 6, and explain why Daniel 6's ‘Darius the Mede’ may be a different king."],
    vocab:[
      { w:"Darius I", say:"duh-RY-us", def:"a Persian king (ruled 522–486 BC) who organised the empire and began Persepolis" },
      { w:"satrap", say:"SAT-rap", def:"a governor chosen by the king to run a province" },
      { w:"satrapy", say:"SAT-ruh-pee", def:"a province of the Persian Empire, run by a satrap" },
      { w:"tribute", def:"a tax paid to a ruler, often every year" },
      { w:"daric", say:"DAR-ik", def:"a gold coin of the Persian Empire" },
      { w:"inscription", def:"words carved into stone or metal" },
      { w:"Behistun", say:"BAY-his-toon", def:"a cliff in western Iran where Darius carved a huge inscription (also called Bisitun)" },
      { w:"decipher", say:"dee-SY-fer", def:"to work out the meaning of writing or a code" },
      { w:"organise", def:"to arrange things so they work well together" }
    ],
    prep:{ min:5, items:["Class Bible marked at Ezra 6:1–15 and Daniel 6","Caravan Journals","Optional for Path B: card, clay or a shoebox lid for the cliff model"] },
    safety:[],
    care:["Daniel in the lions' den is a familiar story. Some students may ask whether this Darius is the same king. Be honest: Christians identify ‘Darius the Mede’ in different ways, and he is probably not Darius I.","Avoid comparing Persian rule with any government today (D10)."],
    hononga:"**Running a country.** New Zealand is divided into **regions**, each with a regional council, and we pay **taxes** that pay for roads, schools and hospitals. Darius used provinces, taxes and roads too.",
    paths:[
      { id:"A", name:"The Scribe", product:"A Satrap's Report to the King", steps:["You are a **satrap**. Choose your province (e.g. Lydia, Egypt, Media).","Write a **report to Darius**: the **tribute** you're sending, the **road** news, and how you keep order.","Seal it with your **Old Persian number** for the tribute (e.g. 23 = 20 + 2 + 1)."], flying:"Darius set up checks on his satraps. Add a secret note from a royal inspector: why did the king need checks?" },
      { id:"B", name:"The Artisan", product:"Behistun Cliff Model", steps:["Build a **cliff** (card, clay or a box lid) with a **carved panel** high up.","Make **three columns** for the three languages: Old Persian, Elamite, Babylonian.","Add a label: **how high** it is and **why** it was in three languages."], flying:"Add Henry Rawlinson on a rope, with a caption explaining how he helped decipher cuneiform." },
      { id:"C", name:"The Herald", product:"Daniel 6 Radio News", steps:["With a partner, plan a **radio news report** of Daniel 6 (‘Breaking news from the lions' den!’).","Include **who, what, where**, and **why** Daniel kept praying.","Perform it (**1–2 minutes**). Add a ‘historian's note’: Darius the Mede is probably **not** Darius I."], flying:"Interview Daniel: “What made you brave?” Answer from Daniel 6:10." }
    ],
    supportedShort:"a report template; sentence starters; a cliff template to colour and label; partner pairing.",
    lens:{
      pillar:"panga", title:"Faithful, just as before",
      look:"Look again at the empire's laws. Even a king's law couldn't stop **Daniel** from praying.",
      ref:"Daniel 6:10",
      paraphrase:"When Daniel heard the law had been signed, he went home, knelt by his window facing Jerusalem, and prayed and gave thanks to his God three times a day, **just as he had done before**.",
      talk:[
        { q:"What made Daniel brave?", listen:"He trusted God; he had a habit of praying; he knew God was bigger than the king." },
        { q:"What's one way to stay faithful to God when it's hard?", listen:"Keep praying; have good habits; friends who encourage you; remember God is with you." }
      ],
      live:"Choose a **time each day** this week to thank God, like Daniel did. Write it in your Caravan Journal."
    },
    clue:{ prompt:"In how many languages is the Behistun inscription written?", answer:3, explain:"Old Persian, Elamite and Babylonian = 3. Waystation Clue 1 = 3, saved for Friday!" },
    next:"Tuesday — Farhad: what happens to towns along a great road?",
    rubric:[
      { c:"How Darius organised the empire", code:"SS-H · SS-C",
        d:["Names one thing Darius did.","“He made a road.”"],
        a:["Describes satraps, the daric and the Royal Road.","“He split the empire into satrapies, each with a satrap, collected tribute, made the daric and built roads.”"],
        f:["Explains cause and consequence.","“The empire was huge, so he needed satraps to rule each part, and roads so messages could reach them fast.”"],
        i:["I can name one thing Darius did.","I can describe satraps, the daric and the Royal Road.","I can explain why he did these things and what happened as a result."] },
      { c:"The Behistun inscription", code:"SS-P",
        d:["Says it's writing on a cliff.","“A carving on a rock.”"],
        a:["Explains what it is and why it's in three languages.","“Darius carved it high on a cliff, in three languages so different peoples could read it.”"],
        f:["Explains why it matters to historians today.","“Because it says the same thing in three languages, it helped scholars decipher cuneiform.”"],
        i:["I can say what it is.","I can explain why it's in three languages.","I can explain why it matters to historians."] },
      { c:"Darius in the Bible", code:"RE · SS-P",
        d:["Retells part of Daniel 6.","“Daniel was in the lions' den.”"],
        a:["Connects Darius I to Ezra 6.","“Darius found Cyrus's decree and ordered the temple finished.”"],
        f:["Explains why ‘Darius the Mede’ may be a different king.","“Daniel calls him a Mede, and Christians identify him in different ways; he's probably not Darius I.”"],
        i:["I can retell part of Daniel 6.","I can connect Darius I to Ezra 6.","I can explain why Daniel's Darius may be a different king."] }
    ],
    plan:{
      prior:"Students know Cyrus (Week 2) and cuneiform (Friday). Most know Daniel and the lions; few know Ezra 6. ‘Province’ and ‘tax’ may need explaining.",
      kc:["Thinking","Using language, symbols & texts","Participating & contributing"],
      sequence:[
        ["0–6","The Dispatch","Shirin's dispatch; Waystation Check; LI/SC.","Recall Week 2."],
        ["6–20","Discovery","**Run the Empire** (divide, appoint, tax, connect); the daric; **Behistun Cliff**; Darius in the Bible (Ezra 6, Daniel 6).","Predict; vote; discuss."],
        ["20–38","Choose Your Path","A/B/C; roam: “Why did Darius need that?”","Create."],
        ["38–45","Through the Lens","Daniel 6:10.","Discuss faithfulness."],
        ["45–50","Waystation Clue & Exit","Clue 1 (answer 3).","Solve; self-assess."]
      ],
      diff:{
        supported:"Report template; cliff template; sentence starters; partner reading of Ezra 6.",
        esol:"Map visuals; act out ‘satrap’ and ‘tribute’ (passing coins); key words on cards.",
        learning:"Chunked path cards; role-play option; calm screen.",
        flying:"Checks on satraps; how Behistun helped decipher cuneiform."
      },
      assess:{
        lookFor:["Describes satraps, the daric and the Royal Road","Explains Behistun's three languages","Connects Darius I to Ezra 6"],
        evidence:["Path products","Run the Empire discussion","Exit self-assessment"]
      },
      inquiry:["Did students understand that Daniel's ‘Darius the Mede’ may be a different king? Revisit kindly if confused.","Who could explain cause and consequence? Build on it on Tuesday (roads → towns)."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"shirin", meta:"A relay station on the Royal Road · horses stamping",
        msg:"Caravan! A **royal courier** just galloped past with a sealed message. I peeked at the address: it's going to the **satrap** of Lydia. A new king, **Darius**, is organising everything: provinces, taxes, gold coins, roads. If we follow the road, we'll find Fragment III. But first we need to understand how one man ran an empire **this big**.",
        notes:[["SAY","Read the dispatch. 🟡 Shirin is fictional; Darius, satraps and the Royal Road are real."],["ASK","“If you had to run a country with no phones, no cars and no internet, what would you need?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"What does the Cyrus Cylinder say Cyrus did for deported peoples?", a:"He returned them to their homelands." }, { q:"What were cylinder seals used for?", a:"To sign documents: an official rolled his seal across wet clay." }, { q:"Write 83 in Old Persian number signs.", a:"Four 20-signs, one 2-sign and one 1-sign." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Divide · appoint · tax · connect", title:"Run the Empire", ix:"empire",
        notes:[["CLICK","Press → through four steps: divide into satrapies → appoint satraps → collect tribute (the darics fly to Susa) → build the Royal Road."],["ASK","Before each step: “What would *you* do next if you were the king?”"],["SAY","“Darius divided the empire into 20 satrapies, each run by a satrap, and each paid a yearly tribute.”"],["NOTE","Sources: Britannica (satrap: 20 satrapies under Darius I, yearly tribute, checks on satraps); Livius (Royal Road). The circles show roughly where some satrapies were; real borders changed over time."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Darius's toolkit", title:"Three ways to hold an empire together",
        cards:[ { icon:"👤", t:"Satraps", d:"A **governor** for each province, chosen by the king. Darius set up **checks** so they didn't misuse their power.", foot:"organise" }, { icon:"🪙", t:"The daric", d:"A **gold coin** used across the empire. (Our team points are darics!)", foot:"trade & tax" }, { icon:"🛣️", t:"Roads", d:"The **Royal Road** and other roads carried soldiers, traders and **messages**.", foot:"connect" } ],
        notes:[["SAY","Read each card."],["ASK","“Which do you think was most important? Why?”"],["NOTE","Sources: Britannica (satrap); daric (starting point: Wikipedia)."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"A primary source on a cliff", title:"The Behistun cliff", ix:"behistun",
        notes:[["CLICK","Press → through: the cliff → 100 m up → three languages → Rawlinson and the key to cuneiform."],["ASK","“Why carve it so high that nobody can read it up close?”"],["LISTEN","So nobody could damage it; to show the king's power; everyone on the road could see it."],["NOTE","Source: HistoryofInformation.com and Britannica (Bisitun). The drawing is simplified."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Darius in the Bible", title:"Two kings called *Darius*?",
        bullets:["**Ezra 6:** Darius found **Cyrus's decree** and ordered the temple **finished** (in his sixth year, Ezra 6:15).","**Daniel 6:** **“Darius the Mede”** and the lions' den.","Christians identify Daniel's Darius in **different ways**. He is probably **not** Darius I."],
        visual:{ artefact:"ezra" },
        notes:[["SAY","Read the points. Read Ezra 6:6–12 aloud if time allows."],["ASK","“Why would historians want to know which Darius is which?”"],["SIDE","Suggestions for ‘Darius the Mede’ include another name for Cyrus, or a governor called Gubaru (Gobryas). Present them as possibilities; don't require students to choose."],["NOTE","Source: Britannica (on the names of Persian kings in the Bible)."]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAY","“Choose your path. Every product explains how Darius ran the empire, or the story of Daniel.”"],["CLICK","Start the 18-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Daniel 6:6–10 from the class Bible."],["ASK","“What made Daniel brave?” Then: “What's one way to stay faithful when it's hard?”"]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: Old Persian, Elamite, Babylonian = 3."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = darics (the real ones were gold!)."]] }
    ]
  };

  /* ======================= TUESDAY · GEOGRAPHY ======================= */
  const tue = {
    id:"w03-tue", week:3, day:"tue", subject:"geography", duration:50,
    title:"Road Towns: Settlements along the Royal Road", guide:"farhad",
    codes:["SS-G","SS-E","SS-P","MA"],
    coverage:"Y6 Geography: settlement and urbanisation — how transport routes create and grow towns. Maths: distance, time and rates.",
    li:"We are learning how roads create and grow settlements.",
    sc:["I can describe the Royal Road and its stations.","I can explain why towns grow on transport routes.","I can compare a Persian road town with a New Zealand road or rail town."],
    vocab:[
      { w:"route", say:"root", def:"the way you travel from one place to another" },
      { w:"station", def:"a stopping place on a road where travellers rest and change horses" },
      { w:"relay", say:"REE-lay", def:"a race or system where one person hands over to the next" },
      { w:"courier", say:"KOO-ree-er", def:"a messenger who carries messages or parcels" },
      { w:"bypass", def:"a road that goes around a town instead of through it" },
      { w:"stage", def:"one part of a journey, between two stopping places" },
      { w:"transport", def:"ways of moving people and goods from place to place" },
      { w:"settlement", def:"a place where people live: a village, town or city" }
    ],
    prep:{ min:5, items:["Caravan Journals","Optional for Path B: long paper strips, rulers","Optional: a map of State Highway 1 through Ashburton"] },
    safety:[],
    care:[],
    hononga:"**A ferry, a road and a town.** Ashburton began beside the **river ferry** on the main road south: an accommodation house was built there in **1858** (Te Ara). Travellers needed a place to stop, so a town grew. ❓ *What happens to a town when a road or railway goes around it?*",
    paths:[
      { id:"A", name:"The Scribe", product:"Road-Town Explanation", steps:["Write a heading: **“How a road makes a town.”**","Explain **three reasons** towns grow at stations (travellers need food, water, beds, horses, trade).","Finish with a **New Zealand example** (Ashburton, or another road or rail town)."], flying:"Explain what might happen to a road town if the road moved. Use an example if you know one." },
      { id:"B", name:"The Artisan", product:"Map of the Royal Road", steps:["On a long strip, draw the road from **Sardis** to **Susa**.","Use a **scale** (e.g. **1 cm = 100 km** → 25 cm) and mark stations along it.","Add symbols for what a station had: 🐎 💧 🛏️ 🍞."], flying:"If the 111 stations were evenly spaced, about how far apart would they be? (2,500 ÷ 111.)" },
      { id:"C", name:"The Herald", product:"Courier's Log", steps:["You are a **royal courier**. Plan a **log entry** for your stage of the road.","Describe the **station**, the **handover**, and what slowed you down (weather, mountains).","Perform it (**1 minute**), ending with Herodotus's famous line."], flying:"Compare your speed with an ordinary traveller. Why was the relay so much faster?" }
    ],
    supportedShort:"a ready-drawn road strip; picture symbols; sentence starters “Towns grow at stations because…”; partner pairing.",
    lens:{
      pillar:"mohio", title:"Make a straight highway",
      look:"Look again at the Royal Road: stations, fresh horses, a clear way through the mountains, ready for the king's messengers.",
      ref:"Isaiah 40:3–5",
      paraphrase:"A voice calls: “In the wilderness prepare the way for the LORD; make straight in the desert a highway for our God. Every valley will be raised up, every mountain made low… and the glory of the LORD will be revealed.”",
      talk:[
        { q:"People got roads ready for kings. Why would we ‘prepare the way’ for God?", listen:"To make room for Him in our lives; to welcome Him; to get our hearts ready." },
        { q:"The Gospels say John the Baptist was the voice in the wilderness. Who was he preparing the way for?", listen:"Jesus (Mark 1:2–3)." }
      ],
      live:"What's one thing that ‘gets in the way’ of you listening to God? Write one way to clear the road this week."
    },
    clue:{ prompt:"How many stations did the Royal Road have, according to Herodotus?", answer:111, explain:"111 stations from Sardis to Susa. Waystation Clue 2 = 111, saved for Friday!" },
    next:"Wednesday — Gandom: who does the leopard eat, and what happens when they're gone?",
    rubric:[
      { c:"The Royal Road", code:"SS-G · SS-P",
        d:["Says it was a long road.","“A big road.”"],
        a:["Describes the road, its length and stations, and names the source.","“Herodotus says it ran about 2,500 km from Sardis to Susa with 111 stations.”"],
        f:["Explains how the relay made messages fast.","“Fresh riders and horses at each station meant the message never stopped, so it arrived in days instead of months.”"],
        i:["I can say what the Royal Road was.","I can describe its length and stations and name the source.","I can explain how the relay made messages fast."] },
      { c:"Why towns grow on routes", code:"SS-G · SS-E",
        d:["Gives one reason.","“People stop there.”"],
        a:["Explains several reasons towns grow at stations.","“Travellers need food, beds and fresh horses, so people set up shops and inns, and a town grows.”"],
        f:["Explains what happens when a route changes.","“If the road moved, travellers wouldn't stop, and the town could shrink.”"],
        i:["I can give one reason.","I can explain several reasons towns grow on roads.","I can explain what happens when a route changes."] },
      { c:"Comparing with Aotearoa", code:"SS-G",
        d:["Names a NZ town.","“Ashburton.”"],
        a:["Compares a Persian road town with a NZ town.","“Both grew where travellers stopped: a Royal Road station and the Ashburton ferry.”"],
        f:["Explains a similarity and a difference.","“Both grew because of a route, but Ashburton grew around a river crossing and later the railway.”"],
        i:["I can name a NZ town.","I can compare it with a Persian road town.","I can explain a similarity and a difference."] }
    ],
    plan:{
      prior:"Students learned in Week 1 that Ashburton grew at the river ferry, and yesterday met the Royal Road. Rates (km per day) may be new.",
      kc:["Thinking","Using language, symbols & texts","Participating & contributing"],
      sequence:[
        ["0–6","The Dispatch","Farhad's dispatch; Waystation Check; LI/SC.","Recall."],
        ["6–20","Discovery","**Royal Road Relay** (traveller vs relay); what a station had; turn & talk; 🇳🇿 Hononga: Ashburton.","Predict; compare; discuss."],
        ["20–38","Choose Your Path","A/B/C; roam: “Why would people settle *here*?”","Create."],
        ["38–45","Through the Lens","Isaiah 40:3–5.","Discuss."],
        ["45–50","Waystation Clue & Exit","Clue 2 (answer 111).","Solve; self-assess."]
      ],
      diff:{
        supported:"Ready-drawn road strip; picture symbols; sentence starters.",
        esol:"Map visuals; act out the relay handover; key words on cards.",
        learning:"Movement in a class relay; chunked steps; calm screen.",
        flying:"Station spacing (2,500 ÷ 111 ≈ 22.5 km); effects of a bypass."
      },
      assess:{
        lookFor:["Describes the Royal Road and stations","Explains why towns grow on routes","Compares with a NZ town"],
        evidence:["Path products","Discussion","Exit self-assessment"]
      },
      inquiry:["Could students explain a bypass? Use it again in Week 7 (bazaars and caravanserais).","Who managed the scale and division in Path B?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"farhad", meta:"Station 47 · watering the camels",
        msg:"Did you see that rider? **Whoosh!** Hands the message to a fresh rider, fresh horse, and **off** again. Meanwhile, us: three camels, one grumpy, plodding along. Look around this station, though: a well, an inn, a baker, a blacksmith, a market. **There's a whole town here, and it's only here because of the road.**",
        notes:[["SAY","Read the dispatch. 🟡 Farhad is fictional; station 47 is made up."],["ASK","“Why would a town grow beside a road station?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"What is a satrap?", a:"A governor chosen by the king to run a province (satrapy)." }, { q:"What was the daric?", a:"A gold coin of the Persian Empire." }, { q:"Why was the Behistun inscription in three languages?", a:"So different peoples of the empire could read it; later it helped scholars decipher cuneiform." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Traveller vs relay", title:"The Royal Road Relay", ix:"relay",
        notes:[["CLICK","Press →: the road → 111 stations → one traveller (about 90 days) → the relay → the famous line. Or use the buttons to race them again."],["SAY","“Herodotus, a Greek writer, described the Royal Road from Sardis to Susa: about 2,500 km, with 111 stations.”"],["ASK","“Why is a relay so much faster than one rider?”"],["LISTEN","Fresh horses and riders; it never stops to rest."],["NOTE","Source: Livius, Royal Road (Herodotus). We don't give an exact number of days for the relay; Herodotus's description is general."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"What did a station need?", title:"A station grows into a town",
        cards:[ { icon:"🐎", t:"Fresh horses", d:"Stables, hay and **grooms** to care for the horses.", foot:"jobs!" }, { icon:"💧", t:"Water & food", d:"A **well**, bakers, farmers growing grain nearby.", foot:"trade!" }, { icon:"🛏️", t:"Beds", d:"An **inn** for travellers and caravans to rest.", foot:"visitors!" }, { icon:"🛒", t:"A market", d:"Travellers **buy and sell**, so traders come to live there.", foot:"a town grows" } ],
        notes:[["SAY","“Every station needed things, and every need made a job. Jobs bring people. People make a town.”"],["NOTE","These are typical needs of road stations (illustrative), not a description of one excavated station."]] },
      { type:"discussion", phase:"excavate", fs:"real", kicker:"Turn & Talk", q:"**What happens to a town when a road or railway goes around it (a bypass)?**", sub:"Think about travellers, shops, jobs and quiet streets.", talk:45,
        notes:[["TALK","45 seconds."],["LISTEN","Fewer travellers stop; shops may lose customers; it gets quieter and safer; some towns shrink, others find new reasons to grow."]] },
      { type:"hononga", phase:"excavate", fs:"real", title:"A ferry, a road and *our* town",
        body:"Ashburton began beside the **river ferry** on the main road south. An **accommodation house** was built there in **1858**, and the town was surveyed in **1863–64** (Te Ara).\n\nTravellers needed somewhere to stop and cross the river, just like the Royal Road stations.\n\n**What other New Zealand towns grew on a road, a river crossing or a railway?**",
        notes:[["ASK","“What other NZ towns grew on a road or railway?” (Many Canterbury towns grew along the railway.)"],["NOTE","Source: Te Ara — Canterbury places: Mid-Canterbury."]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAY","“Choose your path. Every product explains how the road made the town.”"],["CLICK","Start the 18-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Isaiah 40:3–5 and Mark 1:2–3 from the class Bible."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 111 stations."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = darics."]] }
    ]
  };

  /* ======================= WEDNESDAY · SCIENCE ======================= */
  const wed = {
    id:"w03-wed", week:3, day:"wed", subject:"science", duration:50,
    title:"Food Webs & Predators: the Persian Leopard", guide:"gandom",
    codes:["SC-LW","SC-P","EN"],
    coverage:"Y5 Science (2027): food webs; predator and prey; how changes affect an ecosystem; conservation.",
    li:"We are learning how food webs show the links in a community.",
    sc:["I can build a food web.","I can explain predator and prey.","I can predict what happens when one species is removed."],
    vocab:[
      { w:"food web", def:"many food chains joined together, showing who eats whom in a community" },
      { w:"predator", def:"an animal that hunts and eats other animals" },
      { w:"prey", def:"an animal that is hunted and eaten" },
      { w:"staple", say:"STAY-pul", def:"the main, most important food" },
      { w:"top predator", def:"a predator that no other animal hunts" },
      { w:"species", say:"SPEE-sheez", def:"one kind of living thing" },
      { w:"habitat loss", def:"when an animal's home is destroyed or changed" },
      { w:"poaching", def:"hunting or killing animals illegally" },
      { w:"conservation", def:"protecting nature and wildlife" }
    ],
    prep:{ min:10, items:["Caravan Journals","Path B: a ball of string and animal name cards (or printed animal cards from the image set) for a string food web","Optional: printed food web template for Path A"] },
    safety:["String web: hold the string loosely; don't wrap it round fingers or necks."],
    care:["Talking about poaching and poisoning can upset some students. Keep it factual and hopeful: focus on what conservationists are doing."],
    hononga:"**Predators in Aotearoa.** Our native birds didn't evolve with land mammals, so introduced predators (stoats, rats, possums) cause great harm. **Predator Free 2050** aims to remove them. Here, removing a predator *helps* the web; in Iran, losing the leopard's prey *harms* it.",
    paths:[
      { id:"A", name:"The Scribe", product:"Food Web Poster with Explanation", steps:["Draw the leopard's food web: **plants → plant-eaters → leopard**.","Use arrows that mean **“is eaten by”**.","Write a **paragraph**: what happens if the **wild goat** disappears?"], flying:"Add people to your web: how do humans affect it? Use one fact from the IUCN report." },
      { id:"B", name:"The Artisan", product:"String Food Web", steps:["In a group, each person holds an **animal or plant card**.","Pass the string to show **who eats whom**, making a web.","**Tug** the wild goat's string: who feels it? Then photograph your web."], flying:"Remove two species. Explain which loss hurts the web most, and why." },
      { id:"C", name:"The Herald", product:"“What If?” News Report", steps:["Plan a **news report**: “Wild goats vanish from the mountains!”","Interview a **leopard**, a **shepherd** and a **scientist**.","Explain what happens to the web and **one way** to help."], flying:"End with a conservation plan: what three things would help the leopard most?" }
    ],
    supportedShort:"pre-drawn animal cards; arrow cards; the sentence “If ___ disappears, then ___ because…”; partner pairing.",
    lens:{
      pillar:"aroha", title:"Who feeds the lion?",
      look:"Look again at the web. The leopard depends on the goats; the goats on the plants; the plants on rain and sun.",
      ref:"Job 38:39–41",
      paraphrase:"God asks Job: “Do you hunt the prey for the lioness and satisfy the hunger of the young lions? Who provides food for the raven when its young cry out to God?”",
      talk:[
        { q:"God asks Job who feeds the lion and the raven. What's the answer, and what does it tell us about God?", listen:"God does; He cares for every creature, even the wild ones; He's in charge of creation." },
        { q:"If God cares for the leopard, how should people treat it and its home?", listen:"Protect it; don't poison or poach; look after its habitat; share the land well." }
      ],
      live:"Find out about **one conservation project** (in Iran or Aotearoa) and tell your family about it this week."
    },
    clue:{ prompt:"How many staple prey animals does the Persian leopard depend on?", answer:4, explain:"Wild goat, wild sheep, wild boar and Indian crested porcupine = 4. Waystation Clue 3 = 4, saved for Friday!" },
    next:"Thursday — Nasrin: how do you cool a house with no electricity?",
    rubric:[
      { c:"Building a food web", code:"SC-LW",
        d:["Draws a food chain.","grass → goat → leopard"],
        a:["Draws a web with several links and arrows the right way.","Plants link to four plant-eaters; all four link to the leopard."],
        f:["Explains why a web shows more than a chain.","“A web shows the leopard has four prey, so it can switch if one is scarce.”"],
        i:["I can draw a food chain.","I can build a food web with arrows the right way.","I can explain why a web shows more than a chain."] },
      { c:"Predator and prey", code:"SC-LW",
        d:["Names a predator.","“The leopard.”"],
        a:["Explains predator and prey with examples.","“The leopard is a predator; wild goats are its prey.”"],
        f:["Explains how predator and prey numbers affect each other.","“If there are fewer goats, leopards struggle to find food, and their numbers may fall.”"],
        i:["I can name a predator.","I can explain predator and prey with examples.","I can explain how their numbers affect each other."] },
      { c:"Predicting change", code:"SC-LW · SC-P",
        d:["Says something will change.","“The leopard will be sad.”"],
        a:["Predicts a likely effect of removing one species.","“Without goats, leopards would hunt more sheep and boar.”"],
        f:["Uses evidence to explain the prediction.","“Scientists found wild-goat numbers were the main thing linked to leopards being present, so losing goats could mean losing leopards.”"],
        i:["I can say something will change.","I can predict a likely effect.","I can use evidence to explain my prediction."] }
    ],
    plan:{
      prior:"Students built a food chain last week and met the Persian leopard in Week 1 (habitat zoom). Some may think food webs are just longer chains.",
      kc:["Thinking","Relating to others","Participating & contributing"],
      sequence:[
        ["0–6","The Dispatch","Gandom's dispatch; Waystation Check; LI/SC.","Recall."],
        ["6–20","Discovery","Meet the leopard's prey; **Food Web Weaver** (remove the wild goat); threats; turn & talk.","Predict; discuss."],
        ["20–38","Choose Your Path","A/B/C (string web needs space).","Create."],
        ["38–45","Through the Lens","Job 38:39–41.","Discuss creation care."],
        ["45–50","Waystation Clue & Exit","Clue 3 (answer 4).","Solve; self-assess."]
      ],
      diff:{
        supported:"Pre-drawn cards; arrow cards; sentence frame for predictions.",
        esol:"Pictures; act out the string web; key words on cards.",
        learning:"Hands-on string web; movement; chunked steps.",
        flying:"People in the web; conservation plan."
      },
      assess:{
        lookFor:["Builds a web with arrows the right way","Explains predator and prey","Predicts the effect of removing a species"],
        evidence:["Path products (photograph string webs)","Discussion","Exit self-assessment"]
      },
      inquiry:["Who could use evidence (the wild-goat finding) in a prediction?","Did the NZ predator contrast confuse anyone? Clarify: it depends on the ecosystem."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"gandom", meta:"A rocky ridge above the road · dusk",
        msg:"Shh. **Don't move.** Up on those rocks: spots. A **leopard**. Don't worry, I'm far too big and grumpy to be lunch. It's watching the **wild goats**. Everything up here is tangled together, like the rope on my saddle. Pull one strand, and the whole thing **wobbles**.",
        notes:[["SAY","Read it in Gandom's voice, but quietly. 🟡 Gandom is fictional. Leopards hunting near camels is not a real risk we're claiming; it's Gandom's humour."],["ASK","“What does Gandom mean: pull one strand and the whole thing wobbles?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"How many stations did the Royal Road have?", a:"111 (Herodotus)." }, { q:"Name a producer, a consumer and a decomposer.", a:"e.g. grass; gazelle; fungi." }, { q:"Why do towns grow on roads?", a:"Travellers need food, beds and fresh horses, so people set up businesses there." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"animalcards", phase:"excavate", fs:"real", kicker:"Predator and prey", title:"The leopard and its prey",
        animals:[
          { img:"animal-01", icon:"🐆", col:"#C9822B", t:"Persian leopard", status:"ENDANGERED", d:"The **top predator** of Iran's mountains. Hunts **four staple prey**." },
          { img:"animal-02", icon:"🐐", col:"#8a6a4a", t:"Wild goat", d:"Its **main prey**. Where wild goats are common, leopards are found." },
          { img:"animal-19", icon:"🐗", col:"#5a4636", t:"Wild boar & wild sheep", d:"Two more staple prey. Boar root for acorns and roots; wild sheep graze the slopes." },
          { img:"animal-20", icon:"🦔", col:"#6b5a48", t:"Indian crested porcupine", d:"Prey too, though its **quills** make it a prickly meal!" }
        ],
        notes:[["SAY","Read each card."],["ASK","“Why might a leopard need more than one kind of prey?”"],["NOTE","Source: IUCN SSC Cat Specialist Group, Persian leopard report (staple prey; wild-goat numbers the main factor linked to leopard presence). Leopard: Endangered."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Pull one strand…", title:"The Food Web Weaver", ix:"foodweb",
        notes:[["CLICK","Press → : the web → plants → the leopard's four prey → remove the wild goat → threats. Use the button to remove and restore the goat."],["ASK","At step 4: “What do you predict happens to the leopard? The sheep? The plants?” ⏳"],["SAY","“Scientists found wild-goat numbers were the main thing linked to leopards being present. And about 70% of recorded leopard deaths in 2007–2011 were deliberate killing or poisoning.”"],["CARE","Keep it hopeful: conservationists in Iran are working to protect leopards and their prey."]] },
      { type:"discussion", phase:"excavate", fs:"real", kicker:"Turn & Talk", q:"**How could people and leopards share the mountains?**", sub:"Think about shepherds' flocks, the wild goats, and the leopard's need for food.", talk:60,
        notes:[["TALK","60 seconds."],["LISTEN","Protect wild goats and their habitat; guard flocks at night; stop poisoned bait; protected areas; teach people about leopards."]] },
      { type:"hononga", phase:"excavate", fs:"real", title:"Predators in *Aotearoa*",
        body:"New Zealand's native birds grew up without land mammals. **Introduced predators** like stoats, rats and possums now harm kiwi, kākā and many others.\n\n**Predator Free 2050** aims to remove these introduced predators.\n\nIn Iran, the leopard is a **native** predator, and losing it would harm the web. Here, introduced predators harm the web. **Same science, different story.**",
        notes:[["ASK","“Why is removing a predator good here but bad in Iran?” (Native vs introduced.)"],["NOTE","Predator Free 2050 is a NZ Government goal (Department of Conservation)."]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAY","“Choose your path. Every product shows a web, not just a chain.”"],["CLICK","Start the 18-minute timer."],["SAFETY","String web: hold loosely."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Job 38:39–41 from the class Bible."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: wild goat, wild sheep, wild boar, porcupine = 4."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = darics."]] }
    ]
  };

  /* ======================= THURSDAY · TECHNOLOGY ======================= */
  const thu = {
    id:"w03-thu", week:3, day:"thu", subject:"technology", duration:50,
    title:"Catching the Wind: the Windcatcher", guide:"nasrin",
    codes:["TE-TP","TE-TK","SC-PW","SC-P"],
    coverage:"Technology (NZC L3): technological practice (build and test a model) and knowledge (how a technology works). Science: air movement, hot air rises, fair testing.",
    li:"We are learning how a windcatcher moves air to cool a building, and how to build and test a model.",
    sc:["I can explain that hot air rises and moving air cools us.","I can build a windcatcher tower model.","I can test my model fairly, changing only one thing."],
    vocab:[
      { w:"windcatcher", def:"a tall tower that catches breezes and sends them into a building (badgir in Persian)" },
      { w:"badgir", say:"bahd-GEER", def:"the Persian word for a windcatcher" },
      { w:"ventilation", def:"letting fresh air move through a building" },
      { w:"breeze", def:"a gentle wind" },
      { w:"opening", def:"a gap or hole that air can pass through" },
      { w:"streamer", def:"a light strip of paper or ribbon that shows when air is moving" },
      { w:"variable", def:"something you change in a test" },
      { w:"evaluate", def:"to judge how well something works" }
    ],
    prep:{ min:15, items:["Per team: a shoebox (the house) with a ‘window’ cut in one end, card for the tower, tape, scissors","A paper streamer or tissue strip taped inside each house","One desk fan (teacher-operated), placed at the same distance for every test","Printed results table (openings: 1 / 2 / 4)"] },
    safety:["Fan fingers rule: fingers never near the fan blades.","Only the teacher plugs in, moves or switches the fan at the wall.","Scissors pass handle-first."],
    care:[],
    hononga:"**Cooling without power in Aotearoa.** Many NZ schools and homes use **high windows** and **cross-ventilation** to let hot air out on summer days. It's the same idea: let cool air in low, hot air out high.",
    paths:[
      { id:"A", name:"The Scribe", product:"Fair-Test Write-Up", steps:["Write your **question**: “Do more openings catch more wind?”","Record your **results**: how much the streamer moved with **1, 2 and 4 openings** (none / a little / a lot).","Write a **conclusion** and **one thing that made the test fair**."], flying:"Suggest a better way to measure airflow than watching the streamer." },
      { id:"B", name:"The Artisan", product:"Model Windcatcher", steps:["Build a **card tower** and tape it to your shoebox house.","Cut **openings** at the top and a **window** at the other end of the house.","Test it with the fan and **improve** one thing."], flying:"Add flaps to close openings that face away from the wind. Does it help?" },
      { id:"C", name:"The Herald", product:"Explain with Arrows", steps:["Draw a **cross-section** of a house and windcatcher.","Add **blue arrows** for cool air in and **red arrows** for warm air out.","Explain it to a partner in **1 minute** as Nasrin."], flying:"Explain why Yazd has so many windcatchers, using what you know about its climate." }
    ],
    supportedShort:"pre-cut tower templates; a results table with picture choices (😐 🙂 😃); arrow stickers; partner roles.",
    lens:{
      pillar:"manaaki", title:"The wind you can't see",
      look:"Look again at the streamer. We can't **see** the wind, but we can see what it **does**.",
      ref:"John 3:8",
      paraphrase:"Jesus said: “The wind blows wherever it pleases. You hear its sound, but you can't tell where it comes from or where it is going. So it is with everyone born of the Spirit.”",
      talk:[
        { q:"Jesus compared the Holy Spirit to the wind. How is the wind like the Spirit?", listen:"You can't see it but you see what it does; it brings life and change; it's powerful." },
        { q:"Every picture breaks somewhere. Where does the wind picture break?", listen:"The wind is just air and has no mind; the Holy Spirit is God, a Person, who knows, loves and chooses." }
      ],
      live:"Look for one ‘streamer moment’ this week: a change in how someone acts that shows God at work. Write it in your Caravan Journal."
    },
    clue:{ prompt:"In which century was Yazd's oldest surviving windcatcher built?", answer:14, explain:"The 14th century (the 1300s). Waystation Clue 4 = 14, saved for Friday!" },
    next:"Friday — Master Hamid: carving a procession of nations.",
    rubric:[
      { c:"How a windcatcher works", code:"TE-TK · SC-PW",
        d:["Says the tower catches wind.","“It gets wind.”"],
        a:["Explains the airflow: cool air in and down, warm air out.","“The tower catches the breeze and sends it down; the moving air cools us and pushes warm air out.”"],
        f:["Uses ‘hot air rises’ to explain the whole system.","“Warm air rises and escapes high up, so fresh air keeps flowing in, even with a light breeze.”"],
        i:["I can say the tower catches wind.","I can explain the airflow in and out.","I can use ‘hot air rises’ to explain the whole system."] },
      { c:"Building a model", code:"TE-TP",
        d:["Builds a tower with help.","A tower taped to the box."],
        a:["Builds a working model with openings and a window.","The streamer moves when the fan is on."],
        f:["Improves the model after testing.","“We added flaps to block the back openings, and the streamer moved more.”"],
        i:["I can build a tower with help.","I can build a model that works.","I can improve my model after testing."] },
      { c:"Testing fairly", code:"SC-P",
        d:["Tests with help.","Turns the fan on and watches."],
        a:["Changes only the number of openings and keeps the rest the same.","Same fan, same distance, same streamer."],
        f:["Explains the results and the limits of the test.","“Watching a streamer isn't very exact; a paper windmill could count spins.”"],
        i:["I can test with help.","I can change only one thing.","I can explain my results and how to improve the test."] }
    ],
    plan:{
      prior:"Students met the windcatcher in Week 1 (Problem → Solution) and ran a fair test last week (qanat slopes).",
      kc:["Thinking","Managing self","Participating & contributing"],
      sequence:[
        ["0–6","The Dispatch","Nasrin's dispatch; Waystation Check; LI/SC.","Recall."],
        ["6–16","Discovery","Windcatchers in Yazd; **Airflow Simulator**; brief; fair test; safety.","Predict; vote."],
        ["16–38","Build & Test (Paths)","Teams build, then test with the teacher-run fan (1, 2, 4 openings); then complete their path.","Build; test; record."],
        ["38–45","Through the Lens","John 3:8 (an analogy, and where it breaks).","Discuss."],
        ["45–50","Waystation Clue & Exit","Clue 4 (answer 14).","Solve; tidy; self-assess."]
      ],
      diff:{
        supported:"Tower templates; picture results table; clear roles.",
        esol:"Diagram with arrows; gestures for ‘in’, ‘down’, ‘up’, ‘out’; numbers and symbols in the table.",
        learning:"Hands-on; short steps; a role for each learner.",
        flying:"Flaps; better measuring; climate link."
      },
      assess:{
        lookFor:["Explains airflow in a windcatcher","Builds a working model","Tests fairly"],
        evidence:["Models (photograph)","Results tables","Explain-with-arrows diagrams","Exit self-assessment"]
      },
      inquiry:["Was the fan test fair for every team (same distance)?","Who could explain where the wind/Spirit picture breaks?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"nasrin", meta:"A rooftop in Yazd · towers everywhere",
        msg:"Welcome to **Yazd**! Look at all the towers: **windcatchers**. It's scorching up here, but inside my aunt's house it's cool. **No electricity.** The tower catches the breeze high up, where it's strongest, and sends it down into the rooms. Today you'll build one, and test it **fairly**.",
        notes:[["SAY","Read the dispatch. 🟡 Nasrin is fictional; Yazd's windcatchers are real."],["NOTE","Yazd's surviving windcatchers are much later than Darius (the oldest dates from the 14th century). Nasrin's rooftop visit is a jump forward in the story."]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"Name the Persian leopard's four staple prey.", a:"Wild goat, wild sheep, wild boar, Indian crested porcupine." }, { q:"What's the difference between a food chain and a food web?", a:"A web joins many chains, showing all the links in a community." }, { q:"In last week's qanat test, what did we change?", a:"Only the slope." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"The city of windcatchers", title:"*Badgirs* in Yazd",
        bullets:["A **windcatcher** (badgir) is a tall tower that **catches breezes** and sends them into a building.","Hot air escapes through **vertical slots**. It uses **no electricity**.","The desert city of **Yazd** has about **700** windcatchers. The oldest surviving one dates from the **14th century**."],
        visual:{ artefact:"badgir" },
        notes:[["SAY","Read the points."],["ASK","“Why build a tower so tall?” (The wind is stronger higher up, away from buildings.)"],["NOTE","Source: Al-Monitor (AFP, July 2023). Simplified drawing."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Follow the air", title:"The Airflow Simulator", ix:"airflow",
        notes:[["CLICK","Press →: a hot house → catch the breeze → down and across → hot air out. Try 1, 2 and 4 openings."],["SAY","“Moving air cools our skin. And hot air rises, so it escapes high up while fresh air comes in.”"],["ASK","“Why might more openings help? When might they not?” (More directions of wind can be caught; but air can also escape out of the back openings.)"],["NOTE","Simplified: real windcatchers work in several ways. We test, not guess!"]] },
      { type:"brief", phase:"excavate", fs:"real", title:"Cool the house",
        stakeholder:"A family in a desert city, before electricity.",
        need:"A **cooler, fresher** room in summer, using only the **wind**.",
        specs:["The tower must catch the fan's ‘wind’.","Air must move through the house (the streamer moves).","It uses no electricity inside the house.","We test fairly: only the number of openings changes (1, 2, 4)."],
        notes:[["SAY","Read the brief together."],["ASK","“What stays the same in our test?” (The fan, its distance, the box, the streamer.)"]] },
      { type:"safety", phase:"excavate", fs:"real", title:"Fan and tool rules",
        items:[ { icon:"✋", t:"Fan fingers rule", d:"Fingers never near the fan blades." }, { icon:"🔌", t:"Teacher only", d:"Only the teacher plugs in, moves or switches the fan." }, { icon:"✂️", t:"Scissors", d:"Cut away from your body. Pass handle-first." } ],
        notes:[["SAFETY","Read each rule. Place the fan on a stable surface at a marked distance."]] },
      { type:"paths", phase:"paths", fs:null, minutes:22,
        notes:[["SAY","“Build first (10 minutes), test at the fan station, then finish your path.”"],["CLICK","Start the 22-minute timer. Run the fan station yourself."],["ASK","Roaming: “What are you changing? What stays the same?”"]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read John 3:5–8 from the class Bible."],["ASK","“How is the wind like the Holy Spirit? Where does the picture break?”"],["NOTE","Make clear this is an analogy: the Holy Spirit is God, a Person, not a force like the wind."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: the 14th century = 14."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess, then pack up."],["CLICK","C = darics."]] }
    ]
  };

  /* ======================= FRIDAY · ART ======================= */
  const fri = {
    id:"w03-fri", week:3, day:"fri", subject:"art", duration:50,
    title:"Relief Carving: the Procession of Nations", guide:"hamid",
    codes:["VA-PK","VA-DI","VA-UC","VA-CI","MA"],
    coverage:"Visual Arts (NZC 2007, Level 3): practical knowledge (low relief, layering, profile), developing ideas, understanding art in context (the Apadana reliefs at Persepolis), communicating and interpreting. Maths: Old Persian number signs.",
    li:"We are learning to make a low-relief panel inspired by Persian processional carving.",
    sc:["I can explain what a relief is.","I can show figures in profile in a repeating procession.","I can build up layers to show depth."],
    vocab:[
      { w:"relief", def:"a carving where figures stand out from a flat background" },
      { w:"low relief", def:"a relief where the figures stand out only a little" },
      { w:"profile", def:"a view from the side" },
      { w:"procession", say:"pro-SESH-un", def:"a line of people moving forward together, often for a ceremony" },
      { w:"Apadana", say:"ah-pah-DAH-nah", def:"the great audience hall at Persepolis, with carved staircases" },
      { w:"delegation", def:"a group of people sent to represent their nation" },
      { w:"tribute", def:"gifts or payments brought to a ruler" },
      { w:"layer", def:"one level placed on top of another" }
    ],
    prep:{ min:10, items:["Card (cereal-box weight) and glue sticks, or air-dry clay and modelling tools","Scissors; pencils","Printed outlines of a gift-bearer and an animal (optional template)","A desk lamp or torch to show raking light (optional)"] },
    safety:["Scissors pass handle-first; clay tools point away from hands."],
    care:["The procession shows many nations bringing gifts. Celebrate the diversity; avoid stereotypes when students draw people from other nations."],
    hononga:"**A procession in Aotearoa.** At a pōwhiri or the opening of a new building, people arrive together, bring gifts (koha) and are welcomed. Many nations live in Aotearoa today. What would *our* procession of nations look like?",
    paths:[
      { id:"A", name:"The Scribe", product:"Look Closely: See / Think / Wonder", steps:["Choose **one delegation** from the Apadana list (e.g. the Bactrians with a camel).","Write: **I see…** (details), **I think…** (what it means), **I wonder…** (a question).","Explain **why** the king wanted this procession carved on his staircase."], flying:"Compare the procession with Revelation 21:26. What's the same, and what's different?" },
      { id:"B", name:"The Artisan", product:"Card-Layer or Clay Relief", steps:["Draw **one gift-bearer in profile** with a gift or animal.","Cut it into **layers** (background, far, near, details) and glue them on top of each other.","Light it from the **side** and photograph the shadows."], flying:"Make your figure part of a repeating procession with the class: line them up!" },
      { id:"C", name:"The Herald", product:"Guide Talk", steps:["You are a **palace guide** on the Apadana staircase.","Plan a **1-minute talk** about **three delegations** and their gifts.","Explain **why** the nations are shown arriving hand in hand, not as prisoners."], flying:"Answer a visitor: “Were the gifts really a tax?” Use the word *tribute*." }
    ],
    supportedShort:"a gift-bearer template to trace and cut; pre-cut layers; partner help gluing.",
    lens:{
      pillar:"sdg", title:"The glory of the nations",
      look:"Look again at the procession: **23 nations**, each bringing its best gifts to the king.",
      ref:"Revelation 21:26; Psalm 72:10–11",
      paraphrase:"In the new creation, “the glory and honour of the nations will be brought into” God's city. Psalm 72 pictures kings from far lands bringing gifts and bowing to the true King.",
      talk:[
        { q:"The Persian king received gifts from 23 nations. Who does Revelation say will receive the glory of all the nations?", listen:"God and the Lamb (Jesus), the true King of kings." },
        { q:"What ‘gift’ could our class bring to God?", listen:"Our worship, our kindness, our best work, our gifts and talents, our cultures." }
      ],
      live:"Soli Deo Gloria: sign your relief panel **SDG**, “to God alone the glory.”"
    },
    clue:{ prompt:"Friday's clue is the Seal Fragment: add this week's four Waystation Clues and write the total in Old Persian number signs.", answer:132, explain:"3 + 111 + 4 + 14 = 132 → one 100-sign, one 20-sign, one 10-sign and one 2-sign." },
    next:"Next week — Stage IV: Pride Before the Fall. A storm at the Hellespont.",
    rubric:[
      { c:"Relief in context", code:"VA-UC",
        d:["Says a relief is a carving.","“It's carved stone.”"],
        a:["Explains low relief and describes the Apadana procession.","“Figures stand out a little from the wall. The Apadana shows nations bringing gifts to the king.”"],
        f:["Explains the purpose of the procession.","“It showed the whole empire coming together under the king, so visitors would be impressed.”"],
        i:["I can say what a relief is.","I can explain low relief and describe the procession.","I can explain why it was carved."] },
      { c:"Profile & procession", code:"VA-PK · VA-DI",
        d:["Draws a figure.","A front-facing person."],
        a:["Draws a figure in profile carrying a gift.","Side-on figure facing the same way as the procession."],
        f:["Designs figures that repeat in a rhythm.","Each figure is spaced evenly, all walking the same way."],
        i:["I can draw a figure.","I can draw a figure in profile with a gift.","I can design a repeating procession."] },
      { c:"Layers for depth", code:"VA-PK",
        d:["Uses one layer.","A flat cut-out glued on."],
        a:["Builds three or more layers.","Background, figure and details at different heights."],
        f:["Uses layers and light to show depth.","“The camel is lower because it's behind. Side light shows the shadows.”"],
        i:["I can use one layer.","I can build three or more layers.","I can use layers and light to show depth."] }
    ],
    plan:{
      prior:"Students carved seal designs last week and know Persepolis (Week 1 rosettes, Week 2 capitals). ‘Profile’ and ‘relief’ may be new words.",
      kc:["Thinking","Using language, symbols & texts","Relating to others"],
      sequence:[
        ["0–6","The Dispatch","Hamid's dispatch; Waystation Check; LI/SC.","Recall."],
        ["6–16","Discovery","The Apadana procession; **Relief Layers**; 23 nations and their gifts.","Look closely; discuss."],
        ["16–36","Choose Your Path","A/B/C.","Create."],
        ["36–41","Through the Lens","Revelation 21:26; Psalm 72:10–11.","Discuss; sign SDG."],
        ["41–50","Seal Fragment III & the Shadow's Note","3 + 111 + 4 + 14 = 132 → 100 + 20 + 10 + 2.","Solve the lock; puzzle over the coded note."]
      ],
      diff:{
        supported:"Templates; pre-cut layers; partner help.",
        esol:"Show real examples; demonstrate each step; picture instructions.",
        learning:"Hands-on; short steps; choose card or clay.",
        flying:"Repeating procession; compare with Revelation 21."
      },
      assess:{
        lookFor:["Explains low relief","Draws figures in profile","Builds layers for depth"],
        evidence:["Relief panels (photograph with side light)","See/Think/Wonder responses","Seal Fragment working (132 = 100 + 20 + 10 + 2)"]
      },
      inquiry:["Who could use layers to show what's in front and behind?","Keep the Shadow's coded note: it's solved in Week 7 Technology."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"hamid", meta:"The great staircase of the Apadana · Persepolis",
        msg:"Climb slowly. These stairs belong to the **Apadana**, the king's great hall. Now look at the wall beside you: **people**, carved in stone, walking up with you. Medes, Babylonians, Bactrians with camels… **twenty-three nations**, each bringing a gift. They've been walking up these stairs for **two and a half thousand years**.",
        notes:[["SAY","Read the dispatch slowly. 🟡 Master Hamid is fictional; the Apadana reliefs are real."],["ASK","“Why would a king carve visitors walking up his stairs?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"What does a windcatcher do?", a:"Catches breezes and sends them into a building; warm air escapes." }, { q:"Why does hot air escape high up?", a:"Hot air rises." }, { q:"What did we change in yesterday's test?", a:"Only the number of openings (1, 2, 4)." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"The Apadana east stairs", title:"A procession of *nations*",
        cards:[ { icon:"🐫", t:"Bactrians", d:"Bring a **camel** and bowls.", foot:"from the north-east" }, { icon:"🐂", t:"Babylonians", d:"Bring bowls, a **tasselled cloth** and a **humped bull**.", foot:"from Babylon" }, { icon:"🐘", t:"Nubians", d:"Bring an **elephant tusk**, an **okapi** and a small bowl.", foot:"from Africa" }, { icon:"🐎", t:"Armenians", d:"Bring a **stallion** and a metal vessel.", foot:"from the mountains" } ],
        notes:[["SAY","“The stairs show **23 nations** bringing gifts (tribute) to the king. Each group is led up by a courtier, who holds the first person's hand.”"],["ASK","“Why might they be shown holding hands, not in chains?”"],["LISTEN","To show the nations as willing partners, not prisoners; the king gave gifts in return."],["NOTE","Source: Livius, Persepolis Apadana east stairs (23 nations; courtiers lead them; gifts listed); World Heritage Site (Persepolis)."]] },
      { type:"interactive", phase:"excavate", fs:"real", paper:true, kicker:"Layer by layer", title:"Relief Layers", ix:"relief",
        notes:[["CLICK","Press →: flat drawing → far layer → near layer → details → side light."],["SAY","“In low relief, the further away something is, the less it sticks out. Closer things stand higher.”"],["ASK","At step 5: “Why does side light make it look more 3D?” (Shadows show the edges.)"]] },
      { type:"teams", phase:"excavate", fs:"real", kicker:"Our procession", title:"Our caravan teams",
        notes:[["SAY","“For Path B, each team can make a short procession: one gift-bearer per person, all walking the same way.”"]] },
      { type:"paths", phase:"paths", fs:null, minutes:20,
        notes:[["SAY","“Choose your path. Most of you will draw a gift-bearer in profile first.”"],["CLICK","Start the 20-minute timer."],["SAFETY","Scissors handle-first."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Revelation 21:22–26 and Psalm 72:10–11."],["ASK","“Who receives the glory of all the nations?”"]] },
      { type:"folioseal", phase:"decode", fs:"story",
        notes:[["SAY","“Four clues: 3, 111, 4, 14. Add them up.”"],["CLICK","Tap each tile. 3 + 111 + 4 + 14 = 132."],["SAY","“132: one 100-sign, then 32 more: one 20, one 10, one 2. Biggest first!”"],["CLICK","Press 100, 20, 10, 2, then ‘Open the lock’."]] },
      { type:"intercept", phase:"decode", fs:"story",
        msg:"WKH URDG LV ORQJ",
        ask:"The Shadow has written in code! Can anyone read it? Copy it into your Caravan Journal and keep it safe: one day this term you'll learn how to crack it.",
        notes:[["SAY","Read the letters out one by one, in the Shadow's voice."],["ASK","“Any guesses? What kind of code might this be?”"],["NOTE","Don't solve it yet. It's a Caesar shift of 3 (W→T, K→H, H→E): **THE ROAD IS LONG**. Students crack it in Week 7 Technology (secret codes & loops)."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess. Celebrate Fragment III!"],["CLICK","C = darics. Keep relief panels for the Week 10 Exhibition."]] }
    ]
  };

  BM.WEEKS[3] = {
    n:3,
    story:"A relay station on the Royal Road. A royal courier gallops past, and the caravan races after him towards a great carved cliff. The historians see how Darius organised an empire (satraps, darics, roads) and read the Behistun inscription; the geographers watch towns grow at the road's stations; the scientists weave the Persian leopard's food web; the engineers catch the wind with a windcatcher; and the artists carve a procession of nations. On Friday, 3 + 111 + 4 + 14 = 132 frees Fragment III… and the Shadow leaves a message in code.",
    hononga:"NZ regions and taxes (Mon) · Ashburton's 1858 river ferry and road towns (Tue) · Predator Free 2050 and introduced predators (Wed) · high windows and cross-ventilation in NZ classrooms (Thu) · pōwhiri, koha and the many nations of Aotearoa (Fri).",
    seal:{
      answer:132,
      instruction:"Add the four **Waystation Clues**. Then write the total in **Old Persian number signs**, biggest first, and press them into the clay. *(100 = the hundred sign · 20 = two corner wedges · 10 = one corner wedge · 2 = two upright wedges.)*",
      reveal:"🟡 **Fragment III found!** It was tucked behind the carved cliff, and now flies to its place on the Seal. Three down, seven to go. Next week: *Pride Before the Fall* — a storm at the Hellespont."
    },
    lessons:[mon, tue, wed, thu, fri]
  };
})(window.BM);
