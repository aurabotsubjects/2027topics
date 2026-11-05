/* ==========================================================
   WEEK 2 — MAP SHEET II · KĀIKA & KAI
   Notes: [KEY, text]  KEY = SAY ASK LISTEN IF CLICK TALK DEEPER PACE SAFETY WAIT NOTE TIKANGA
   Facts are sourced in data/sources.js (tags match blueprint §18).
   ========================================================== */
(function(BM){
  "use strict";

  /* ======================= MONDAY · HISTORY ======================= */
  const mon = {
    id:"w02-mon", week:2, day:"mon", subject:"history", duration:50,
    title:"Tākata Whenua: The First People of Hakatere", guide:"nell",
    codes:["SS-H","SS-P","ANZH","TR"],
    coverage:"Y6 History (2027 Social Sciences): New Zealand before 1840; tākata whenua and their relationship with the land. Aotearoa New Zealand's Histories: mana whenua perspectives and local stories (tūrangawaewae).",
    li:"We are learning who the first people of Hakatere were and how they lived with the land through the seasons.",
    sc:["I can name the peoples the Arowhenua narrative names as tākata whenua of Hakatere.","I can explain what mahika kai and seasonal camps (kāika nohoaka) are.","I can explain why food places mattered, and still matter."],
    vocab:[
      { w:"tākata whenua", say:"TAH-kah-tah FEH-noo-ah", def:"people of the land: the first people of a place (Kāi Tahu form of tangata whenua)" },
      { w:"Kāi Tahu", say:"KAI TAH-hoo", def:"the main iwi of most of Te Waipounamu (Ngāi Tahu in the standard form)" },
      { w:"hapū", say:"HAH-poo", def:"a sub-tribe: a group of extended families within an iwi" },
      { w:"mahika kai", say:"MAH-hee-kah kai", def:"food-gathering places and the ways food was gathered (Kāi Tahu form of mahinga kai)" },
      { w:"kāika nohoaka", say:"KAI-kah NO-ho-ah-kah", def:"camps, often seasonal, set up near food and water (Kāi Tahu form of kāinga nohoanga)" },
      { w:"tuna", say:"TOO-nah", def:"freshwater eels" },
      { w:"kōura", say:"KAW-oo-rah", def:"freshwater crayfish" },
      { w:"aruhe", say:"AH-roo-heh", def:"the root of bracken fern, an important energy food" },
      { w:"seasonal", def:"changing with the seasons of the year" }
    ],
    prep:{ min:5, items:["Field Journals","Optional (D3): an approved local recording of the te reo words on the Say it right slide","Paper plates, split pins and pencils for Path B (seasonal wheel)"] },
    safety:[],
    tikanga:["This lesson teaches Kāi Tahu history from Kāi Tahu sources (the Tākata Whenua o Hakatere narrative, curated by Te Rūnanga o Arowhenua). Share it with your Māori lead and Arowhenua before teaching (D3).","Nell (a fictional character) says plainly that this story isn't hers to tell. Don't add details the sources don't give.","Pronounce iwi and hapū names carefully. Ask: are there students with whakapapa to these iwi? Invite, never require, them to share."],
    hononga:"**Mahika kai, then and now.** The Arowhenua narrative records that when the Crown bought most of Canterbury in 1848 (Kemp's Deed), it promised to protect Kāi Tahu mahika kai, and that promise was not kept. We'll learn about this honestly in Week 4. Today mahika kai is still a living practice and a value in the Ashburton District Plan.",
    paths:[
      { id:"A", name:"The Recorder", product:"Mahika Kai Fact Card", steps:["Choose **one kai** from today: tuna, kōura, kākahi, aruhe or weka.","Write its **name, where it was gathered** at Hakatere, and **what it was used for**.","Add a labelled drawing and **one question** you'd ask a kaumātua."], flying:"Why might a food place matter for more than just food?" },
      { id:"B", name:"The Maker", product:"Seasonal Camp Wheel", steps:["Divide a paper plate into **summer** and **winter** halves.","Draw **where people were** in each season (inland camps or nearer the coast) and **why**.","Add an arrow on a split pin that turns from season to season."], flying:"Add a third ring showing the travel routes between the camps." },
      { id:"C", name:"The Storyteller", product:"Kōrero Practice", steps:["With a partner, plan a **1-minute retell**: who the tākata whenua of Hakatere are and how they lived with the seasons.","Use at least **four te reo words** correctly (e.g. tākata whenua, mahika kai, kāika, tuna).","Practise saying the words slowly and clearly, then present."], flying:"Explain why we learn this from Kāi Tahu sources, not from made-up characters." }
    ],
    supportedShort:"kai picture cards with names, a sentence frame (“At Hakatere, people gathered … at … because …”), the map slide printed, partner pairing.",
    lens:{
      pillar:"aroha", title:"Food as a gift",
      look:"Look again at the map of mahika kai: rivers, lakes and plains that gave food season after season.",
      ref:"Psalm 104:10–14",
      paraphrase:"God makes springs pour into the valleys; water flows between the mountains. The birds nest by the waters. He makes grass grow for the cattle and plants for people to grow, bringing food out of the earth.",
      talk:[
        { q:"The psalm says food comes as a gift from God's world. What does it look like to receive food as a gift?", listen:"Being thankful; not wasting; sharing; not taking more than we need; looking after the places food comes from." },
        { q:"How did gathering kai in the right season help look after the land and rivers?", listen:"Food could recover; people didn't take everything at once; the places stayed healthy for the next year and the next generation." }
      ],
      live:"In your Field Journal, write **one way your family or class could look after a place that gives us food**."
    },
    clue:{ prompt:"How many peoples does the Arowhenua narrative name as tākata whenua of Hakatere?", answer:5, explain:"Hāwea, Rapuwai, Waitaha, Kāti Māmoe and Kāi Tahu: 5. Trig Clue 1 is saved for Friday!" },
    next:"Tuesday — Sam has a question: how did our mountains get so high, and why are they still rising?",
    rubric:[
      { c:"Tākata whenua", code:"ANZH · TR",
        d:["Names one people with help.","“Kāi Tahu.”"],
        a:["Names the peoples the narrative gives and pronounces them carefully.","“Hāwea, Rapuwai, Waitaha, Kāti Māmoe and Kāi Tahu.”"],
        f:["Explains how the earlier peoples are linked to Kāi Tahu today.","“Kāi Tahu came south and joined with the people already here, so their whakapapa connects to the earlier peoples.”"],
        i:["I can name one of the peoples with help.","I can name the tākata whenua of Hakatere and say them well.","I can explain how the earlier peoples connect to Kāi Tahu today."] },
      { c:"Mahika kai & seasons", code:"SS-H",
        d:["Names a food.","“They ate eels.”"],
        a:["Explains mahika kai and seasonal camps with an example.","“In summer, eeling and birding parties went inland to camps near food and water. In winter those camps were mostly empty.”"],
        f:["Explains how seasonal gathering cared for the land.","“Moving with the seasons meant one place wasn't used up, so there was kai again next year.”"],
        i:["I can name a food that was gathered.","I can explain mahika kai and seasonal camps with an example.","I can explain how moving with the seasons cared for the land."] },
      { c:"Why food places matter", code:"SS-P",
        d:["Says food places are important.","“Because you need food.”"],
        a:["Gives a reason food places mattered and still matter.","“They fed whānau, and mahika kai is still part of Kāi Tahu life today.”"],
        f:["Connects food places to identity and to promises (foreshadowing 1848).","“If a food place is drained or ruined, people lose food, knowledge and part of who they are.”"],
        i:["I know food places are important.","I can explain why food places mattered and still matter.","I can connect food places to identity and to promises made about them."] }
    ],
    plan:{
      prior:"From Week 1, students know the river has two names and that Kāi Tahu remembered place names in kōrero and whakapapa. Some students may have whānau links to Kāi Tahu or Hakatere Marae; some may know about eeling or whitebaiting from home.",
      kc:["Thinking","Using language, symbols & texts","Relating to others"],
      sequence:[
        ["0–6","Field Note","Nell's note about the pencilled symbols. Trig Check (Week 1 recall). LI/SC.","Recall; predict what the symbols might mean."],
        ["6–18","Survey","**Say it right**; who the tākata whenua are; kāika nohoaka; **Mahika Kai map** (summer/winter); five kai cards; turn & talk.","Practise te reo words; explore the map; discuss why people moved with the seasons."],
        ["18–38","Choose Your Path","Introduce A/B/C. Roam: “Where was this kai gathered? How do we know?”","Fact card / seasonal wheel / kōrero practice."],
        ["38–45","Through the Lens","Psalm 104:10–14 — four moves.","Discuss; journal sentence."],
        ["45–50","Trig Clue & Exit","Trig Clue 1 (answer 5); self-assessment; wheat sheaves.","Solve; self-assess."]
      ],
      diff:{
        supported:"Kai picture cards with names; sentence frame; printed map; partner pairing.",
        esol:"Picture glossary for each kai; say each te reo word together twice; home-language food words welcome.",
        learning:"Hands-on wheel (Path B); fewer te reo words to learn (choose 3); calm screen available.",
        flying:"Why food places matter beyond food; why we learn this from Kāi Tahu sources."
      },
      assess:{
        lookFor:["Names the five peoples and pronounces them carefully","Explains mahika kai and seasonal camps with an example","Explains why food places mattered and still matter"],
        evidence:["Path products (photograph)","Te reo pronunciation during Say it right","Exit self-assessment"]
      },
      inquiry:["Were te reo words pronounced with care? Revisit with the Say it right slide on Tuesday.","Did any students share whānau knowledge? Follow up respectfully.","What questions did students raise for Week 4 (Kemp's Deed)?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"nell", meta:"Conservation room · Sheet II",
        msg:"Sheet II is open on my table. Along the river someone has pencilled **small symbols**: circles, little peaks, wavy lines. I think they mark **camps and food places**. But here's the honest truth: this history **isn't mine to tell**. It belongs to Kāi Tahu. So today we learn it from **Kāi Tahu sources**.",
        notes:[["SAY","Read the message. 🟡 Nell is fictional."],["TIKANGA","Point out what Nell does: she doesn't guess or invent. She goes to the people whose history it is. That's our rule all term."],["ASK","“Why does it matter who tells a history?”"],["LISTEN","People know their own stories best; outsiders can get things wrong; it's respectful; whakapapa belongs to whānau."]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"What are the two names of our river?", a:"Hakatere and the Ashburton." }, { q:"Is a kaumātua's account passed down in the whānau a source?", a:"Yes: oral history is a real source. Historians compare it with other sources." }, { q:"What bearing opened Sheet I?", a:"039° (15 + 16 + 5 + 3)." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"sayitright", phase:"excavate", fs:"real", title:"Today's words",
        words:[ { w:"tākata whenua", say:"tā · ka · ta  fe · nu · a", mean:"people of the land" }, { w:"Kāi Tahu", say:"kāi · ta · hu", mean:"the iwi of most of Te Waipounamu" }, { w:"mahika kai", say:"ma · hi · ka  kai", mean:"food-gathering places" }, { w:"kāika", say:"kāi · ka", mean:"a settlement or camp" } ],
        note:"Southern **Kāi Tahu** forms use **k** where other areas use **ng** (Kāi Tahu = Ngāi Tahu; mahika = mahinga). A macron means a **long** vowel.",
        notes:[["TIKANGA","Practise slowly together, then at normal speed. Use an approved local recording if you have one (D3). Check pronunciations with your Māori lead."],["SAY","“Our district uses the southern Kāi Tahu dialect. Using it shows respect for the people of this place.”"]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Who were the first people here?", title:"The *tākata whenua* of Hakatere",
        bullets:["Māori first settled Canterbury about **600–700 years ago**.","The Arowhenua narrative names them: **Hāwea, Rapuwai, Waitaha, Kāti Māmoe and Kāi Tahu**.","Kāi Tahu came south and **joined with the peoples already here**. Local hapū include **Kāti Huirapa**."],
        visual:{ map:{ theme:"paper", labels:"mi", relief:true }, size:560 },
        notes:[["SAY","Read each point slowly. The names come from Tākata Whenua o Hakatere, curated by Te Rūnanga o Arowhenua; the date comes from Te Ara."],["NOTE","The narrative also names the Kāi Tahu hapū Ngāi Te Ruahikihiki and Ngāi Tūāhuriri as having interests in the area."],["TIKANGA","Don't add stories about these peoples that the sources don't give. If students ask more, write their questions down to send to your Māori lead or Arowhenua."],["ASK","“Why might a people's history be told through whakapapa (family lines)?”"]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Living with the seasons", title:"*Kāika nohoaka*: seasonal camps",
        bullets:["**Kāika nohoaka** were camps, some permanent and some seasonal, each set up **near a food resource with water**.","Camps were spread among the **rivers, plains and lakes** of Hakatere.","Inland camps were usually **empty in winter**, but in **summer** eeling and birding parties came to them."],
        visual:{ map:{ theme:"paper", labels:"mi", relief:true }, size:560 },
        notes:[["SAY","“People didn't stay in one place all year. They moved to where the food was, at the right time.”"],["ASK","“Why might inland camps be empty in winter?” ⏳"],["LISTEN","Cold, snow, harder travel, less food to gather, food already gathered and stored."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Mahika kai", title:"Food places along the river", ix:"mahikakai",
        notes:[["CLICK","Press → to visit each pencilled mark (1–5), then once more to switch to winter. Or click the marks and the season button."],["SAY","Read each panel. All the food names and places come from the Arowhenua narrative."],["ASK","At the winter view: “What changes? What stays the same?”"],["NOTE","Marks are placed roughly on our simplified map to show the kind of place, not exact sites."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Five kai of Hakatere", title:"What was gathered?", h:"470px",
        cards:[ { icon:"〰️", t:"Tuna", d:"Freshwater **eels** from the river and lakes." }, { icon:"🦞", t:"Kōura", d:"Freshwater **crayfish**." }, { icon:"🐚", t:"Kākahi", d:"Freshwater **mussels**." }, { icon:"🌿", t:"Aruhe", d:"**Bracken-fern root**: food for energy." }, { icon:"🐦", t:"Weka", d:"A bird for **meat, oil and feathers**." } ],
        notes:[["SAY","“These are five of the kai the Arowhenua narrative names. There were many more: tī kōuka, paraki, kererū, kākā and others.”"],["ASK","“Which of these could you still find around Hakatere today?”"]] },
      { type:"discussion", phase:"excavate", fs:"real", kicker:"Turn & Talk", q:"What would happen to a people if their **food places were drained, fenced off or polluted**?", sub:"Think about food, knowledge, family and who you are.", talk:60,
        notes:[["TALK","60-second talk. Take a few answers."],["LISTEN","Less food; hunger; knowledge not passed on; people feel cut off from their place; anger or sadness; promises broken."],["NOTE","This sets up Week 4 (Kemp's Deed). Don't go into detail yet; keep it calm and honest."]] },
      { type:"hononga", phase:"excavate", fs:"real", title:"Mahika kai, then and now",
        body:"When the Crown bought most of Canterbury from Kāi Tahu in **1848**, the Arowhenua narrative records that it **promised to protect mahika kai**, and that **the promise was not kept**.\n\nWe'll learn this story properly, from more than one perspective, in **Week 4**. Today, mahika kai is still part of Kāi Tahu life, and it is a value in the **Ashburton District Plan**.",
        notes:[["SAY","Read slowly and calmly. Keep it factual."],["TIKANGA","No blame on children or families. Focus on truth-telling and, later in the term, restoration."]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAY","“Choose your path. Every path must use at least three of today's words correctly.”"],["CLICK","Start the 20-minute timer."],["ASK","While roaming: “Where was this kai gathered? How do we know?”"]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Psalm 104:10–14 from the class Bible."],["ASK","“What does it look like to receive food as a gift?” Then the second question."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 5 (Hāwea, Rapuwai, Waitaha, Kāti Māmoe, Kāi Tahu)."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess against the three success criteria."],["CLICK","C = wheat sheaves."]] }
    ]
  };

  /* ======================= TUESDAY · GEOGRAPHY ======================= */
  const tue = {
    id:"w02-tue", week:2, day:"tue", subject:"geography", duration:50,
    title:"How Mountains Are Made: Plates, the Alpine Fault & Greywacke", guide:"sam",
    codes:["SS-G","SS-P","SC-ES"],
    coverage:"Y5 Geography (2027): tectonic processes and the landforms and hazards they create (continued Week 3). Y6 Science: rocks and minerals (greywacke and volcanic rock). D8: God's creation first; scientists' estimate as a labelled side note.",
    li:"We are learning how the Southern Alps were formed and why they are still rising.",
    sc:["I can describe the plate boundary that runs through New Zealand.","I can explain uplift and erosion, using a measurement.","I can tell greywacke from volcanic rock and say where each is found locally."],
    vocab:[
      { w:"tectonic plate", def:"a giant slab of the Earth's outer layer that slowly moves" },
      { w:"plate boundary", def:"where two tectonic plates meet" },
      { w:"Alpine Fault", def:"the long crack (fault) along the western edge of the Southern Alps where the Pacific and Australian plates meet" },
      { w:"uplift", def:"land being pushed upwards" },
      { w:"erosion", def:"rock and soil being worn away and carried off by rain, frost, ice, rivers and wind" },
      { w:"greywacke", say:"GRAY-wak-ee", def:"the hard grey sandstone that makes up most of the Southern Alps" },
      { w:"sedimentary rock", def:"rock made from layers of sand, mud and gravel pressed together" },
      { w:"volcanic rock", def:"rock that formed from lava or volcanic ash" }
    ],
    prep:{ min:5, items:["Optional: a few grey river stones (greywacke) from home or a beach","Coloured card in 3–4 layers, scissors and glue for Path B","Field Journals"] },
    safety:["If you bring river stones, wash hands after handling. Never take stones from protected sites."],
    tikanga:["Many iwi see maunga as ancestors. Speak about the mountains respectfully.","Use both names: Te Kiekie / Mt Somers."],
    hononga:"**Maunga with names and stories.** For many iwi, maunga are ancestors and part of who a people are. Geologists explain how mountains rise; mana whenua hold the kōrero about what the mountains mean. Both kinds of knowing can be respected. Invite local kōrero only through your Māori lead (D3).",
    paths:[
      { id:"A", name:"The Recorder", product:"Rock Detective Report", steps:["Compare **greywacke** and **volcanic rock** in a two-column table.","For each, write **what it looks like, how it formed and where we find it** locally.","Finish with a sentence: **“Most of the Alps are… but Te Kiekie is…”**"], flying:"Why are most New Zealand beaches grey?" },
      { id:"B", name:"The Maker", product:"Layered-Paper Plate Model", steps:["Cut two long card strips: the **Australian** and **Pacific** plates.","Add 3–4 layers of coloured card on top and **push the strips together** so the layers buckle up into a mountain.","Label **plate boundary, uplift and erosion** with arrows."], flying:"Add the Alpine Fault and show which way each plate is moving." },
      { id:"C", name:"The Storyteller", product:"A Mountain's Autobiography", steps:["Be **Te Kiekie** or **a peak in the Alps**. Plan a 1-minute talk in the first person.","Say **what you're made of**, **what pushes you up** and **what wears you down**.","Include the measurement: about **10 mm a year** near Aoraki/Mt Cook."], flying:"Include the 📜 main teaching and the 🔬 side note respectfully, the way the lesson did." }
    ],
    supportedShort:"labelled diagram of the plate boundary to complete, word bank with arrows (push, rise, wear away), rock picture cards, partner pairing.",
    lens:{
      pillar:"mohio", title:"Before the mountains were born",
      look:"Look again at the Plate Push: mountains rising, rain and frost wearing them down.",
      ref:"Psalm 90:2",
      paraphrase:"Before the mountains were born, before You made the earth and the whole world, from forever to forever You are God.",
      talk:[
        { q:"Mountains look like they'll last forever. What does this psalm say lasts longer than the mountains?", listen:"God; He was there before the mountains; He is everlasting." },
        { q:"How can that help when things in our lives feel shaky or are changing?", listen:"God doesn't change; we can trust Him; He is bigger and more lasting than anything we can see." }
      ],
      live:"Sketch a mountain in your Field Journal and write Psalm 90:2 underneath."
    },
    clue:{ prompt:"Near the Alpine Fault the Alps rise about 10 mm a year. How many centimetres is that in one year?", answer:1, explain:"10 mm = 1 cm. Trig Clue 2 is saved!" },
    next:"Wednesday — Dr Priya says the brightest star you'll ever see is the one you must never look at.",
    rubric:[
      { c:"Plate boundary", code:"SS-G",
        d:["Says New Zealand has plates.","“There are plates under us.”"],
        a:["Names both plates and explains that their collision pushes the land up.","“The Pacific and Australian plates push together along the Alpine Fault, so the land rises.”"],
        f:["Links the plate boundary to earthquakes and landforms.","“The same push that lifts the Alps also causes earthquakes along the fault.”"],
        i:["I know there are plates under New Zealand.","I can name the two plates and explain how they make mountains.","I can link the plate boundary to earthquakes and landforms."] },
      { c:"Uplift & erosion", code:"SS-G · MA",
        d:["Describes mountains as high.","“The mountains are really high.”"],
        a:["Explains uplift and erosion, using the measured rate.","“The Alps rise about 10 mm a year, but rain and frost wear them down at the same time.”"],
        f:["Explains how uplift and erosion together shape the plains.","“Gravel worn off the mountains is carried by rivers to make the plains we live on.”"],
        i:["I know the mountains are high.","I can explain uplift and erosion with a measurement.","I can explain how uplift and erosion together made our plains."] },
      { c:"Rocks", code:"SC-ES",
        d:["Names one type of rock.","“Greywacke.”"],
        a:["Tells greywacke from volcanic rock and where each is found locally.","“Most of the Alps are greywacke. Te Kiekie / Mt Somers is mostly volcanic rock.”"],
        f:["Uses rock evidence to explain something about the land.","“Our beaches are grey because the sand is broken-down greywacke from the mountains.”"],
        i:["I can name a type of rock.","I can tell greywacke from volcanic rock and say where each is found.","I can use rocks as evidence to explain our land."] }
    ],
    plan:{
      prior:"Students read contour maps last week and know the river starts at a glacier below Mt Arrowsmith. Many will have felt earthquakes or heard family stories of the 2010–11 Canterbury earthquakes; earthquakes are covered with care in Week 3.",
      kc:["Thinking","Using language, symbols & texts"],
      sequence:[
        ["0–6","Field Note","Sam's message. Trig Check (Monday). LI/SC.","Recall; predict."],
        ["6–18","Survey","**Plate Push** (uplift, erosion, the measured rate); 📜 God's creation + 🔬 side note; rock detective (greywacke vs volcanic); grey beaches.","Push the plates; compare rocks; discuss."],
        ["18–38","Choose Your Path","Introduce A/B/C. Roam: “What pushes it up? What wears it down?”","Report / paper model / mountain autobiography."],
        ["38–45","Through the Lens","Psalm 90:2 — four moves.","Discuss; sketch and write the verse."],
        ["45–50","Trig Clue & Exit","Trig Clue 2 (answer 1); self-assessment; wheat sheaves.","Solve; self-assess."]
      ],
      diff:{
        supported:"Labelled diagram to complete; arrow word bank; rock picture cards; partner pairing.",
        esol:"Gesture: hands pushing together (plates), hands rising (uplift), fingers rubbing (erosion); picture glossary.",
        learning:"Hands-on paper model (Path B); real stones to handle; calm screen available.",
        flying:"Why NZ beaches are grey; link the plate boundary to earthquakes; present both the main teaching and the side note respectfully."
      },
      assess:{
        lookFor:["Names both plates and explains collision → uplift","Uses the measured rate (about 10 mm a year)","Distinguishes greywacke and volcanic rock with local examples"],
        evidence:["Path products (photograph)","Plate Push predictions","Exit self-assessment"]
      },
      inquiry:["Did students handle the 📜 main teaching and 🔬 side note respectfully? Note any questions for follow-up.","Who could explain erosion as well as uplift?","Who brought stones? Use them again in Week 4 (braided rivers)."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"sam", meta:"Mt Somers Track · looking west",
        msg:"Flint and I are on Te Kiekie today. Pick up a stone from the river down there and it's **grey and hard**. Pick one up on this mountain and it's **different**. And here's the strange bit: the Alps out west are **still rising**, a little bit every year. Let's find out why.",
        notes:[["SAY","Read the message. 🟡 Sam and Flint are fictional."],["ASK","“How could a mountain still be growing?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"Name the tākata whenua of Hakatere.", a:"Hāwea, Rapuwai, Waitaha, Kāti Māmoe and Kāi Tahu." }, { q:"What is mahika kai?", a:"Food-gathering places and the ways food was gathered." }, { q:"Why were inland camps empty in winter?", a:"People moved to where the food was; summer was the time for inland eeling and birding." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Two plates collide", title:"Plate Push", ix:"platepush",
        notes:[["SAY","“New Zealand sits on the boundary between the Pacific and Australian plates. Where they push together, the land is pushed up.”"],["CLICK","Press → (or ‘Push’) to start uplift, then → again (or ‘Rain & frost’) to add erosion. Watch the gravel carried away."],["SAY","“Near Aoraki/Mt Cook, the Alps are rising about 10 mm a year. That's a measurement scientists take today. Rain, frost and rivers wear the mountains down at the same time.”"],["ASK","“Where does the gravel go?”"],["LISTEN","Down the rivers… onto the plains… to the sea. Our plains are made of it!"]] },
      { type:"sidenote", phase:"excavate", fs:"real", kicker:"How old are the mountains?", title:"Who made the mountains?",
        main:"**God made the heavens and the earth, and formed the mountains** (Genesis 1:1; Psalm 90:2; Psalm 104:5–9).\n\nReading Genesis as history, we believe the earth is **young**: thousands of years, not millions. Many creationists think the great mountain ranges were **pushed up at the end of Noah's Flood**, as the plates moved quickly.",
        refs:"Genesis 1:1 · Psalm 90:2 · Psalm 104:5–9 · Genesis 6–9",
        side:{ text:"Many geologists estimate the Alps rose over about **five million years**, from greywacke rock **100–300 million years** old, and that Te Kiekie's volcanic rock is about **89 million years** old.", src:"Te Ara — Mountains; Mount Somers (starting point)" },
        notes:[["SAY","“As Christians, we believe God created everything, and our school teaches that the earth is young. You'll also hear and read that many scientists think the earth is much older, so it's good to know what they say and why. Here's their estimate.”"],["NOTE","Measurements stay as measurements: the 10 mm a year uplift is measured today. Ages are estimates based on assumptions."],["IF","A student asks who's right → “That's a great question to keep asking. Christians who love science discuss it too. What we know for sure is who made the mountains.” Model respect; never mock either view."],["NOTE","Rubrics never assess which view a student holds — only that they can explain the main teaching and describe the scientists' estimate accurately (D8)."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Rock detective", title:"Two kinds of rock near us", h:"560px",
        cards:[ { artefact:"stones", t:"Greywacke", d:"A hard **grey sandstone** made from layers of sand and mud pressed together. **Most of the Southern Alps** are greywacke, and so are most of the stones in our riverbeds.", foot:"The Alps · the riverbed" }, { artefact:"volcanic", t:"Volcanic rock", d:"Rock that formed from **lava and volcanic ash**. **Te Kiekie / Mt Somers** is mostly volcanic, unlike the greywacke hills around it.", foot:"Te Kiekie / Mt Somers" } ],
        notes:[["SAY","“So Sam's stones were different because Te Kiekie is a volcanic mountain in the middle of greywacke country.”"],["CLICK","If you brought river stones, pass them round now. ‘Grey, hard, fine-grained: probably greywacke.’"]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"A clue on the beach", title:"Why are our beaches *grey*?",
        body:"Most New Zealand beaches are **grey** because their sand is made of tiny **broken pieces of greywacke**.\n\nRivers like the Hakatere carry worn-down rock from the mountains, across the plains, all the way to the sea.",
        visual:{ artefact:"stones" },
        notes:[["SAY","“Erosion links the mountains, the plains and the beach. It's all one journey.”"],["ASK","“What does that tell us about what our plains are made of?”"]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAY","“Choose your path. Every path must use uplift and erosion.”"],["CLICK","Start the 20-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Psalm 90:2 from the class Bible."],["ASK","“What does this psalm say lasts longer than the mountains?”"]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 10 mm = 1 cm."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = wheat sheaves."]] }
    ]
  };

  /* ======================= WEDNESDAY · SCIENCE ======================= */
  const wed = {
    id:"w02-wed", week:2, day:"wed", subject:"science", duration:50,
    title:"The Sun Is a Star", guide:"priya",
    codes:["SC-ES","SC-P","MA"],
    coverage:"Y6 Science (2027): the Sun is a star; it appears bigger and brighter than other stars because it is much closer. Using scale models to explain size and distance.",
    li:"We are learning that the Sun is a star and why it looks so different from the other stars.",
    sc:["I can explain that the Sun is a star.","I can explain why the Sun looks bigger and brighter than other stars.","I can describe what the Sun gives Earth."],
    vocab:[
      { w:"star", def:"a huge ball of hot gas that makes its own light, like our Sun" },
      { w:"Sun", def:"the star at the centre of our solar system, about 150 million km from Earth" },
      { w:"distance", def:"how far apart two things are" },
      { w:"diameter", def:"the distance straight across a circle or ball, through the middle" },
      { w:"scale model", def:"a model that is smaller (or bigger) than the real thing but keeps the same proportions" },
      { w:"solar system", def:"the Sun and everything that travels around it: planets, moons and more" },
      { w:"light-year", def:"the distance light travels in one year (about 9.5 trillion km)" }
    ],
    prep:{ min:5, items:["A basketball (or any 24 cm ball) and a pin with a small head for the scale demo","Optional: a 30 m tape measure or trundle wheel for the scale walk outside","Paper, compasses or round objects to trace, and scissors for Path B"] },
    safety:["Never look at the Sun — not with your eyes, sunglasses, binoculars or a telescope. It can blind you.","Scale walk outside: usual playground boundaries and supervision."],
    tikanga:[],
    hononga:"**Te Rā.** In te reo Māori the Sun is **te rā**, and **rā** also means *day*. The Sun's path through the year mattered for planting and harvest across Aotearoa. In Week 6 we learn about Matariki and Puaka from Māori sources.",
    paths:[
      { id:"A", name:"The Recorder", product:"Sun Fact File", steps:["Write **five facts** about the Sun from today, with numbers (distance, size, light time).","Explain in two sentences **why the Sun looks bigger and brighter** than other stars.","List **three things the Sun gives Earth**."], flying:"If the Sun is a star, why can't we see other stars in the daytime?" },
      { id:"B", name:"The Maker", product:"Sun & Earth Scale Model", steps:["Cut a paper Sun **109 times wider** than your Earth (e.g. Earth 1 mm across → Sun about 11 cm).","Label both, with their real diameters.","Write how far apart they'd be at your scale (hint: about **108 Suns** apart)."], flying:"Work out where the Moon would go on your model." },
      { id:"C", name:"The Storyteller", product:"“Interview with the Sun”", steps:["With a partner, plan an interview: one of you is a **reporter**, one is **the Sun**.","Ask and answer at least **4 questions**: what are you, how far away, how big, what do you give Earth?","Use real numbers. Perform it in about 90 seconds."], flying:"Have the Sun explain why it looks so different from its star cousins." }
    ],
    supportedShort:"fact cards with the key numbers, a ‘because it is much closer’ sentence frame, paper circles ready to cut, partner pairing.",
    lens:{
      pillar:"mohio", title:"He also made the stars",
      look:"Look again at our Sun shrinking into just another star in the sky.",
      ref:"Genesis 1:16; Psalm 136:7–9",
      paraphrase:"God made two great lights: the greater light to rule the day and the lesser light to rule the night. He also made the stars. … Give thanks to the One who made the great lights, for His love lasts forever.",
      talk:[
        { q:"Genesis mentions the stars almost in passing: “He also made the stars.” Why might that be?", listen:"Making stars is easy for God; He is far greater than even the biggest star; the stars are not gods to worship but things He made." },
        { q:"Psalm 136 turns the Sun and stars into a reason to say thank you. What can we thank God for about the Sun?", listen:"Light, warmth, food growing, day and seasons, beauty." }
      ],
      live:"Write a short **thank-you prayer** for the Sun in your Field Journal."
    },
    clue:{ prompt:"The Sun is our nearest star. How many stars are nearer to Earth than the Sun?", answer:0, explain:"None! The Sun is the nearest star, so the answer is 0. Trig Clue 3 is saved!" },
    next:"Thursday — Liv needs to lift a 30 kg hay bale without hurting her back. Bring your thinking about levers.",
    rubric:[
      { c:"The Sun is a star", code:"SC-ES",
        d:["Says the Sun is hot and bright.","“The Sun is really hot.”"],
        a:["Explains that the Sun is a star that makes its own light.","“The Sun is a star: a huge ball of hot gas that makes its own light.”"],
        f:["Compares the Sun with other stars.","“The Sun is a medium-sized star; some stars are much bigger, but they're so far away they look tiny.”"],
        i:["I know the Sun is hot and bright.","I can explain that the Sun is a star.","I can compare the Sun with other stars."] },
      { c:"Why it looks different", code:"SC-ES · MA",
        d:["Says the Sun looks bigger.","“It's bigger.”"],
        a:["Explains that it looks bigger and brighter because it is much closer.","“The Sun is about 150 million km away. The next star is about 268,000 times further, so it looks like a dot.”"],
        f:["Uses a scale model to explain it.","“If the Sun were a basketball, Earth is a pinhead 26 m away and the next star is thousands of km away.”"],
        i:["I know the Sun looks bigger.","I can explain why the Sun looks bigger and brighter than other stars.","I can use a scale model to explain it."] },
      { c:"What the Sun gives", code:"SC-P",
        d:["Names one thing.","“Light.”"],
        a:["Describes three things the Sun gives Earth.","“Light, warmth, and energy for plants to grow, which feeds us.”"],
        f:["Links the Sun to food chains or farming.","“The grass in our paddocks grows using sunlight, the cows eat the grass, and we drink the milk.”"],
        i:["I can name one thing the Sun gives us.","I can describe three things the Sun gives Earth.","I can link the Sun to food chains or farming."] }
    ],
    plan:{
      prior:"Last week students learned that stars emit light and planets reflect it. Many will still think of the Sun as different from ‘stars’. The numbers are huge, so scale models do the heavy lifting.",
      kc:["Thinking","Using language, symbols & texts"],
      sequence:[
        ["0–6","Field Note","Dr Priya's message. Trig Check (Tuesday). LI/SC. Sun safety.","Recall; predict."],
        ["6–18","Survey","The Sun is a star (facts); **Shrinking Sun**; **Scale Walk** (or outside with a basketball and a pin); what the Sun gives.","Predict; discuss; measure."],
        ["18–38","Choose Your Path","Introduce A/B/C. Roam: “Why does it look bigger? Use a number.”","Fact file / scale model / interview."],
        ["38–45","Through the Lens","Genesis 1:16; Psalm 136:7–9 — four moves.","Discuss; thank-you prayer."],
        ["45–50","Trig Clue & Exit","Trig Clue 3 (answer 0); self-assessment; wheat sheaves.","Solve; self-assess."]
      ],
      diff:{
        supported:"Fact cards with key numbers; sentence frame; paper circles ready to cut.",
        esol:"Gesture: walk away and shrink hands; picture glossary (star, Sun, distance, diameter).",
        learning:"Go outside for the scale walk; hands-on model; calm screen available.",
        flying:"Why we can't see stars in the day; Moon on the scale model; compare the Sun with bigger stars."
      },
      assess:{
        lookFor:["States that the Sun is a star","Explains ‘bigger and brighter because much closer’ with a number","Names three things the Sun gives Earth"],
        evidence:["Path products (photograph)","Scale walk observations","Exit self-assessment"]
      },
      inquiry:["Did the scale walk change students' sense of size and distance?","Who still thinks the Sun is not a star?","Any questions about other stars to bank for Week 7 (Life of a star)?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"priya", meta:"Observatory · daytime",
        msg:"A question for you. What is the **brightest star** you'll ever see? It's up there right now, and you must **never look straight at it**. It looks nothing like the twinkly dots at night, but it's the same kind of thing. Today we find out **why**.",
        notes:[["SAY","Read the message. 🟡 Dr Priya is fictional."],["ASK","“What's the answer?” (The Sun.)"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"Which two plates meet in New Zealand?", a:"The Pacific and Australian plates." }, { q:"How fast are the Alps rising near Aoraki/Mt Cook?", a:"About 10 mm a year." }, { q:"What rock are most of the Alps made of?", a:"Greywacke. (Te Kiekie is mostly volcanic.)" } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"safety", phase:"excavate", fs:"real", title:"Never look at the Sun",
        items:[ { icon:"☀️", t:"Not with your eyes", d:"Looking at the Sun can damage your eyes for life. Sunglasses don't make it safe." }, { icon:"🔭", t:"Not through anything", d:"Never through binoculars, a telescope or a camera. They make it much worse." }, { icon:"🧢", t:"Hat and shade", d:"On the scale walk outside, wear your hat and stay with your group." } ],
        notes:[["SAFETY","Make the rule absolute."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Our nearest star", title:"The Sun is a *star*",
        bullets:["The Sun is our **nearest star**: about **150 million km** away.","Its light takes about **8 minutes** to reach us.","It's about **1.4 million km** across: **109 Earths** side by side. About **1.3 million Earths** could fit inside it."],
        visual:{ artefact:"starchart" },
        notes:[["SAY","“The Sun is a star, the same kind of thing as the dots we see at night.” Facts from the European Space Agency (ESA)."],["ASK","“So why does it look so different from the other stars?” ⏳ Take predictions."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Why does it look so different?", title:"Move the Sun away", ix:"shrinksun",
        notes:[["CLICK","Drag the slider (or press →) to move the Sun further away."],["SAY","At the end: “If our Sun were as far away as the next nearest star, Proxima Centauri, about 4.2 light-years away, it would look like just another star.”"],["ASK","“So why does the Sun look bigger and brighter than other stars?”"],["LISTEN","It's much, much closer to us."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Scale walk", title:"A basketball Sun", ix:"scalewalk",
        notes:[["NOTE","Best done for real: take a basketball and a pin outside. Pace out 26 big steps."],["CLICK","Press the buttons (or →) to walk to Earth, then the Moon, then the next star."],["SAY","“On this scale, the Earth is a pinhead 26 metres away. The next star is almost as far away as Christchurch is from Hawaiʻi.”"]] },
      { type:"discussion", phase:"excavate", fs:"real", kicker:"Turn & Talk", q:"What does the Sun **give** Earth? Name as many things as you can.", sub:"Think about our farms, our food, our weather, and our day.", talk:45,
        notes:[["TALK","45-second talk."],["LISTEN","Light; warmth; energy for plants to grow (which feeds animals and us); day and night; seasons; drying hay; solar power."]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAY","“Choose your path. Use at least one real number.”"],["CLICK","Start the 20-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Genesis 1:16 and Psalm 136:7–9."],["ASK","“Why do you think Genesis mentions the stars almost in passing?”"]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 0 — the Sun is the nearest star. Type 0 on the keypad."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = wheat sheaves."]] }
    ]
  };

  /* ======================= THURSDAY · TECHNOLOGY ======================= */
  const thu = {
    id:"w02-thu", week:2, day:"thu", subject:"technology", duration:50,
    title:"Levers: The Gate, the Bale Spike & the Lifting Arm", guide:"liv",
    codes:["TE-TK","TE-TP","SC-MF"],
    coverage:"Y5 Science (2027): simple machines such as levers reduce the effort needed or change the direction of a force. Technology (NZC L3): technological modelling and mechanisms; building and testing a model.",
    li:"We are learning how levers make farm work easier, and to build and test a working lever.",
    sc:["I can identify the effort, load and pivot (fulcrum) on a lever.","I can explain how moving the pivot changes the effort needed.","I can build and test a lever model."],
    vocab:[
      { w:"lever", def:"a stiff bar that turns on a pivot to help lift or move a load" },
      { w:"fulcrum", say:"FUL-krum", def:"the pivot: the point a lever turns on" },
      { w:"effort", def:"the push or pull you put into a machine" },
      { w:"load", def:"the thing being lifted or moved" },
      { w:"force", def:"a push or a pull" },
      { w:"simple machine", def:"a basic device (lever, wheel and axle, pulley…) that makes work easier" },
      { w:"mechanical advantage", def:"how many times a machine multiplies your effort" }
    ],
    prep:{ min:10, items:["Card strips (about 30 cm), split pins, rulers, pencils","Small weights: erasers or a small toy as the ‘bale’","Scissors (student) — craft knife is teacher-only"] },
    safety:["Scissors rules: walk with points down; cut away from your body.","Split pins have sharp ends: open them carefully, and keep fingers clear.","No standing on chairs or tables to test levers. Tidy-up routine at the end."],
    tikanga:[],
    hononga:"**The kō.** Before European settlement, Māori used the **kō**, a long digging stick with a footrest, to loosen soil for planting. Pushing on the footrest and levering back on the handle used the kō as a **lever** to break up hard ground.",
    paths:[
      { id:"A", name:"The Recorder", product:"Lever Diagrams", steps:["Draw **three farm tools** that are levers (e.g. crowbar lifting a post, wheelbarrow, hay fork).","Label the **effort, load and pivot** on each.","Write which **class** each one is, and why."], flying:"Which of your three needs the least effort? Explain using the pivot's position." },
      { id:"B", name:"The Maker", product:"Card Lever Arm", steps:["Build a lever from a card strip with a **split-pin pivot**.","Put a ‘bale’ (eraser) on one end and press the other end to **lift it**.","Move the pivot to **three places** and record which needs the least effort."], flying:"Add a second card part so your lever lifts the bale **higher** without more effort." },
      { id:"C", name:"The Storyteller", product:"Lever Teach-Back", steps:["Plan a 90-second lesson teaching the **three classes of lever**.","Use one **classroom example** and one **farm example** for each.","Act each one out with your body (your arm is a lever!)."], flying:"Explain why our arm, a third-class lever, needs more effort but is still useful." }
    ],
    supportedShort:"lever diagram with effort/load/pivot labels to cut and stick, pre-cut card strips, partner pairing.",
    lens:{
      pillar:"manaaki", title:"Two are better than one",
      look:"Look again at the Lever Lab: a lever multiplies your effort so a heavy job becomes possible.",
      ref:"Ecclesiastes 4:9–10",
      paraphrase:"Two people are better than one, because together they can work better. If one falls down, the other can help them up.",
      talk:[
        { q:"How is a friend who helps you like a lever?", listen:"They make hard jobs easier; they add their effort to yours; together you can lift what you couldn't alone." },
        { q:"Who in our class or community could use some ‘lever’ help this week?", listen:"Someone with a hard job, a new student, a younger child, a busy parent." }
      ],
      live:"Choose **one person** you will help with a ‘heavy’ job this week, and how."
    },
    clue:{ prompt:"Every lever has effort, load and a pivot. How many parts is that?", answer:3, explain:"Effort, load and pivot (fulcrum): 3. Trig Clue 4 is saved for Friday!" },
    next:"Friday — Tom wants to show you a famous Canterbury painting, and the bearing for Sheet II.",
    rubric:[
      { c:"Parts of a lever", code:"TE-TK · SC-MF",
        d:["Points to the pivot with help.","Finds the pivot on the seesaw."],
        a:["Identifies the effort, load and pivot on a real tool.","“On the crowbar, the post is the load, the rock is the pivot and my push is the effort.”"],
        f:["Classifies levers and explains the class.","“A wheelbarrow is second class because the load is between the pivot and the effort.”"],
        i:["I can find the pivot with help.","I can identify the effort, load and pivot on a lever.","I can sort levers into classes and explain why."] },
      { c:"Moving the pivot", code:"SC-MF",
        d:["Says some positions are easier.","“That one's easier.”"],
        a:["Explains that moving the pivot closer to the load means less effort.","“With the pivot near the bale, I push less, but my end moves further.”"],
        f:["Explains the trade-off with numbers.","“The effort arm is three times longer, so I need about a third of the effort, but I push three times as far.”"],
        i:["I can tell which position is easier.","I can explain how moving the pivot changes the effort.","I can explain the trade-off using numbers."] },
      { c:"Build & test", code:"TE-TP",
        d:["Builds a lever with help.","Lever turns but lifts unevenly."],
        a:["Builds a working lever and tests three pivot positions.","Records results in a simple table."],
        f:["Improves the design after testing.","Adds a stop so the bale lifts higher and stays balanced."],
        i:["I can build a lever with help.","I can build a lever and test three pivot positions.","I can improve my lever after testing."] }
    ],
    plan:{
      prior:"Last week students identified inputs, processes and outputs of farm machines and predicted simple machines inside them. Farm kids will know crowbars, wheelbarrows and gates well; invite them as experts.",
      kc:["Thinking","Participating & contributing","Managing self"],
      sequence:[
        ["0–6","Field Note","Liv's message. Trig Check (Wednesday). LI/SC.","Recall; predict."],
        ["6–18","Survey","Workshop safety; three parts of a lever; **Lever Lab**; three classes; design brief.","Predict effort; identify parts; sort classes."],
        ["18–38","Choose Your Path","Introduce A/B/C. Roam: “Where's the pivot? What happens if you move it?”","Diagrams / card lever / teach-back."],
        ["38–45","Through the Lens","Ecclesiastes 4:9–10 — four moves.","Discuss; choose someone to help."],
        ["45–50","Trig Clue & Exit","Trig Clue 4 (answer 3); self-assessment; wheat sheaves.","Solve; self-assess; tidy up."]
      ],
      diff:{
        supported:"Cut-and-stick labels; pre-cut strips; partner pairing.",
        esol:"Gesture: point to pivot, push effort, lift load; picture glossary; rehearse the teach-back.",
        learning:"Hands-on build; real ruler-and-eraser lever to feel the effort; calm screen available.",
        flying:"Classify levers; explain trade-offs with numbers; improve the model."
      },
      assess:{
        lookFor:["Labels effort, load and pivot correctly","Explains ‘pivot near the load = less effort’","Builds and tests a working lever"],
        evidence:["Path products (photograph)","Test tables","Exit self-assessment"]
      },
      inquiry:["Who could explain the trade-off (less effort, more distance)?","Did the build go safely? Adjust routines for Weeks 3–5.","Which students might lead the Smart Farm Big Project?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"liv", meta:"Hay barn · lifting day",
        msg:"Kia ora! I've got a **30 kg hay bale** to lift onto the trailer, and I'm not wrecking my back doing it. Farmers have used one trick for thousands of years: a **long bar and something to pivot on**. Today you'll find out exactly why it works.",
        notes:[["SAY","Read the message. 🟡 Liv is fictional."],["ASK","“What could Liv use?”"],["LISTEN","A bar, plank, crowbar, lever, ramp, tractor, a friend!"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"Why does the Sun look bigger and brighter than other stars?", a:"It is much, much closer." }, { q:"How long does sunlight take to reach Earth?", a:"About 8 minutes." }, { q:"How many Earths would fit across the Sun?", a:"About 109." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"safety", phase:"excavate", fs:null, title:"Workshop rules",
        items:[ { icon:"✂️", t:"Scissors", d:"Walk with points down. Cut away from your body." }, { icon:"📌", t:"Split pins", d:"The ends are sharp. Open them carefully; keep fingers clear." }, { icon:"🧹", t:"Tidy up", d:"Every scrap in the bin, every tool back in its box before the bell." } ],
        notes:[["SAFETY","These rules apply every Thursday for Weeks 2–5. Craft knife is teacher-only."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Simple machines", title:"Three parts of a *lever*",
        bullets:["**Pivot (fulcrum):** the point the lever turns on.","**Load:** the thing you lift, like a hay bale.","**Effort:** your push or pull.","A lever can **reduce the effort** you need, or **change the direction** of your push."],
        visual:{ artefact:"haybale" },
        notes:[["SAY","“Simple machines like levers reduce the effort needed or change the direction of a force.” (Y5 Science)"],["ASK","“Find a lever in this room.” (Door handle, scissors, a ruler on a pencil…)"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Slide the pivot", title:"Lever Lab", ix:"leverlab",
        notes:[["CLICK","Press → (or the buttons) to move the pivot near the load, then near you. Press ‘Push down!’ to lift."],["ASK","Before each move: “Will Liv need more effort or less?” Thumbs up/down."],["SAY","“Pivot closer to the load = less effort, but you have to push your end further.”"],["NOTE","The effort shown is simplified (we ignore the weight of the bar)."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Three classes of lever", title:"Where's the pivot?", h:"560px",
        cards:[ { big:"1", t:"Pivot in the middle", d:"**Load — pivot — effort.** A seesaw, or a **crowbar lifting a fence post** over a rock.", foot:"First class" }, { big:"2", t:"Load in the middle", d:"**Pivot — load — effort.** A **wheelbarrow**: the wheel is the pivot, the feed is the load.", foot:"Second class" }, { big:"3", t:"Effort in the middle", d:"**Pivot — effort — load.** Tweezers, or **your arm** lifting a bucket.", foot:"Third class" } ],
        notes:[["SAY","“Ask: what's in the middle?”"],["CLICK","Act each one out. Your forearm is a third-class lever: elbow pivot, muscle effort, hand load."],["DEEPER","“Why would anyone use a third-class lever if it needs MORE effort?” (It moves the load further and faster.)"]] },
      { type:"brief", phase:"excavate", fs:null, title:"Lift the bale",
        stakeholder:"**Liv**, who needs to lift hay bales without hurting her back.",
        need:"A model lever that **lifts a ‘bale’ with less effort** than lifting it straight up.",
        specs:["Uses a card strip and a split-pin pivot.","Lifts the ‘bale’ (an eraser) at least 3 cm.","The pivot can be moved to test at least three positions."],
        notes:[["SAY","“Path B is building to this brief. Paths A and C can use it too.”"]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAY","“Choose your path. Label effort, load and pivot whatever you do.”"],["CLICK","Start the 20-minute timer."],["SAFETY","Remind scissors and split-pin rules."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Ecclesiastes 4:9–10."],["NOTE","Analogy: a friend is ‘like’ a lever. Ask: “Where does the picture break?” (A friend isn't a tool; they choose to help because they care.)"]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 3."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess. Tidy-up routine."],["CLICK","C = wheat sheaves."]] }
    ]
  };

  /* ======================= FRIDAY · ART ======================= */
  const fri = {
    id:"w02-fri", week:2, day:"fri", subject:"art", duration:50,
    title:"Rita Angus & the High Country: Flat-Colour Landscapes", guide:"tom",
    codes:["VA-UC","VA-PK","VA-DI"],
    coverage:"Visual Arts (NZC 2007, Level 3): understanding art in context (a Canterbury painter and a famous New Zealand painting); developing practical knowledge (simplified shapes, crisp shadows, limited palette); developing ideas.",
    li:"We are learning to respond to a Canterbury landscape painting by making our own flat-colour landscape.",
    sc:["I can describe Rita Angus's painting Cass and what makes it special.","I can simplify a landscape into clear shapes with crisp shadows.","I can choose a limited palette and use it across my picture."],
    vocab:[
      { w:"landscape", def:"a picture of land: mountains, fields, rivers, sky" },
      { w:"simplify", def:"to show only the main shapes, leaving out small details" },
      { w:"flat colour", def:"areas of smooth, even colour without much blending" },
      { w:"palette", def:"the set of colours an artist chooses to use" },
      { w:"limited palette", def:"using only a few colours across a whole picture" },
      { w:"composition", def:"how the parts of a picture are arranged" },
      { w:"shadow", def:"a darker area where light is blocked" }
    ],
    prep:{ min:10, items:["Open the Christchurch Art Gallery page for Rita Angus's Cass on your device to show the real painting (link in Sources)","A3 cartridge paper, pencils, paints or coloured pencils (4 colours per table), brushes, water pots","Field Journals"] },
    safety:["Usual art-room routines: aprons, water pots on mats, wash brushes at the end."],
    tikanga:["Students make their own landscapes of Mid Canterbury. No Māori designs as decoration."],
    hononga:"**Many ways to show the land.** Rita Angus painted the high country with clear shapes and bright light. Kāi Tahu ancestors recorded their world in **rock art** on limestone shelters in Canterbury; we'll learn about it (not copy it) from Ngāi Tahu sources in Week 6.",
    paths:[
      { id:"A", name:"The Recorder", product:"Look Closely: See · Think · Wonder", steps:["Look at **Cass** for one full minute.","Write **3 things you see**, **2 things you think** (about the mood or story), and **1 thing you wonder**.","Write one sentence about **how Angus used colour or shape**."], flying:"Why do you think Cass was voted New Zealand's greatest painting?" },
      { id:"B", name:"The Maker", product:"Flat-Colour Mid Canterbury Landscape", steps:["Lightly draw a Mid Canterbury view in **4–6 big shapes** (sky, ranges, hills, plain, one small building or shelterbelt).","Choose a **limited palette of 4 colours**.","Paint each shape flat and smooth. Add **crisp shadow shapes**."], flying:"Add one small human detail (a hut, a fence, a person) that tells a story, the way Angus did." },
      { id:"C", name:"The Storyteller", product:"Gallery Guide Talk", steps:["You're a guide at Christchurch Art Gallery. Plan a **1-minute talk** about Cass.","Say **who** painted it, **when**, **where**, and **what you notice**.","Ask your audience **one question** to make them look closer."], flying:"Compare Cass with a landscape of our own district." }
    ],
    supportedShort:"See · Think · Wonder frame, a printed shape template of a simple landscape, a 4-colour palette card.",
    lens:{
      pillar:"manaaki", title:"Skill as a gift",
      look:"Look again at Cass: a painter looked closely at the high country and showed others how to see it.",
      ref:"Exodus 31:3",
      paraphrase:"I have filled him with the Spirit of God, with wisdom, understanding and skill in all kinds of craft.",
      talk:[
        { q:"God gave Bezalel skill to make beautiful things. How can artists use their gifts to serve others?", listen:"Helping people notice beauty; telling true stories; bringing joy; remembering places; making things for worship or community." },
        { q:"What gift or skill has God given you, and how could you use it to bless someone?", listen:"Accept any gift: drawing, kindness, sport, music, organising, encouraging." }
      ],
      live:"Gallery walk: tell one classmate **one skilful thing** you noticed in their landscape."
    },
    clue:{ prompt:"Friday's clue is the Survey Seal: combine this week's four Trig Clues.", answer:9, explain:"5 + 1 + 0 + 3 = 9 → bearing 009°." },
    next:"Next week — Sheet III · The Old Trails: a dotted line inland and a lone tree on the plain.",
    rubric:[
      { c:"Context", code:"VA-UC",
        d:["Names the painter.","“Rita Angus painted it.”"],
        a:["Describes Cass and what makes it special.","“Angus painted the little station at Cass in 1936, under big shadowed mountains, with clear light.”"],
        f:["Explains why it matters to New Zealanders.","“It shows how small people are in our huge land, and how the high country feels, so lots of people connect to it.”"],
        i:["I can name the painter.","I can describe Cass and what makes it special.","I can explain why Cass matters to New Zealanders."] },
      { c:"Simplified shapes", code:"VA-PK",
        d:["Draws with lots of small details.","Many small lines, no big shapes."],
        a:["Simplifies the land into clear shapes with crisp shadows.","Four to six big shapes; shadows painted as clear shapes."],
        f:["Uses shape and shadow on purpose to lead the eye.","Shadows point to a small human detail that tells a story."],
        i:["I can draw a landscape.","I can simplify a landscape into clear shapes with crisp shadows.","I can use shapes and shadows on purpose to lead the eye."] },
      { c:"Limited palette", code:"VA-DI",
        d:["Uses many colours.","Every shape a different colour."],
        a:["Chooses four colours and uses them across the picture.","The same blue appears in the sky and the shadows."],
        f:["Chooses a palette to create a mood and explains it.","“I used warm golds and purple shadows for a nor'west evening.”"],
        i:["I can use colours in my picture.","I can choose a limited palette and use it across my picture.","I can choose a palette to create a mood and explain it."] }
    ],
    plan:{
      prior:"Last week students learned to look slowly, draw skylines and use tone for distance. Few will know Rita Angus. Show the real painting from the gallery's website; the app doesn't reproduce it.",
      kc:["Thinking","Managing self"],
      sequence:[
        ["0–6","Field Note","Tom's message. Trig Check (Thursday). LI/SC.","Recall; predict."],
        ["6–18","Survey","Meet **Cass** (show the gallery page); See · Think · Wonder; **detail → shapes → palette**; how to make a flat-colour landscape.","Look closely; talk; plan shapes and palette."],
        ["18–40","Choose Your Path (22 min)","Introduce A/B/C. Roam: “Squint. What are the big shapes?”","Response / landscape / gallery talk."],
        ["40–45","Through the Lens","Exodus 31:3 — gallery reflection.","Gallery walk; notice skill."],
        ["45–50","Survey Seal & Dealer","Survey Seal II: 5 + 1 + 0 + 3 = 9 → 009°. The Dealer's Offer. Self-assess; wheat sheaves.","Add the clues; dial; discuss."]
      ],
      diff:{
        supported:"See · Think · Wonder frame; shape template; 4-colour palette card.",
        esol:"Point and name each shape; colour words on cards; model first, then name.",
        learning:"Larger brushes and pre-drawn shapes; shorter painting time with breaks; calm screen available.",
        flying:"Why Cass is so loved; a human detail that tells a story; explain a mood palette."
      },
      assess:{
        lookFor:["Describes Cass (who, when, where, what)","Simplifies the land into big shapes and crisp shadows","Uses a limited palette consistently"],
        evidence:["Landscapes and responses (photograph)","Gallery-walk comments","Exit self-assessment"]
      },
      inquiry:["Did students simplify, or still draw details? Re-model squinting.","Keep the best landscapes for the My Place triptych (Week 9).","Who might enjoy visiting the Ashburton Art Gallery?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"tom", meta:"Easel · Arthur's Pass road",
        msg:"In **1936** a young Canterbury painter took the train up into the high country, to a tiny railway stop called **Cass**. She painted what she saw so simply and so clearly that people still stop and stare at it today. Let's find out how she did it.",
        notes:[["SAY","Read the message. 🟡 Tom is fictional. Rita Angus and Cass are real."]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"Name the three parts of a lever.", a:"Effort, load and pivot (fulcrum)." }, { q:"Where should the pivot go for less effort?", a:"Closer to the load." }, { q:"What class of lever is a wheelbarrow?", a:"Second class: the load is in the middle." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"content", phase:"excavate", fs:"real", paper:true, kicker:"A Canterbury painter", title:"Rita Angus, *Cass* (1936)",
        bullets:["Painted in **1936** after a **ten-day sketching trip** to Cass, a remote railway stop in Canterbury's high country.","A small **red railway station** sits beneath huge mountains with **purple shadows**, in clear, crisp light. One man waits on the platform.","It is held by **Christchurch Art Gallery Te Puna o Waiwhetū** and is one of New Zealand's best-known paintings."],
        visual:{ artefact:"palette" },
        notes:[["CLICK","Now open the Christchurch Art Gallery page for Cass on your device and show the real painting (link in Sources). The app doesn't reproduce it."],["SAY","Read the facts. Source: Christchurch Art Gallery."],["ASK","“How does the painting make you feel? Why?”"]] },
      { type:"discussion", phase:"excavate", fs:"real", paper:true, kicker:"See · Think · Wonder", q:"What do you **see**? What do you **think** is going on? What do you **wonder**?", sub:"Keep the painting on screen. Look for one full minute before anyone talks.", talk:60,
        notes:[["PACE","Silent looking for a full minute first. Then 60-second talk."],["LISTEN","See: the station, the man, the mountains, shadows, tracks. Think: he's waiting, it's quiet, lonely or peaceful. Wonder: where is he going? Why so small?"]] },
      { type:"interactive", phase:"excavate", fs:"real", paper:true, kicker:"How to simplify", title:"Detail → shapes → palette", ix:"flatcolour",
        notes:[["CLICK","Press → to go from detail, to big shapes, to choosing a palette. Then try the three palettes."],["SAY","“This is our own Mid Canterbury scene, not Angus's painting. Watch it become a few big shapes with crisp shadows.”"],["ASK","“Which palette feels most like our district? Why?”"]] },
      { type:"content", phase:"excavate", fs:null, paper:true, kicker:"Your turn", title:"Make a *flat-colour* landscape",
        bullets:["**Squint** at your view: find **4–6 big shapes**.","Draw them **lightly**, edge to edge.","Choose **4 colours**. Use each colour in more than one place.","Paint each shape **flat and smooth**. Add **crisp shadow shapes** last."],
        visual:{ artefact:"palette" },
        notes:[["SAY","Model the first two steps on the board in 2 minutes."]] },
      { type:"paths", phase:"paths", fs:null, minutes:22,
        notes:[["SAY","“Choose your path. Path B: 4 colours only!”"],["CLICK","Start the 22-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move. 5-minute gallery reflection."],["SAY","Read Exodus 31:3."]] },
      { type:"folioseal", phase:"decode", fs:"story",
        notes:[["SAY","“Four clues this week. Add them to get the bearing.”"],["CLICK","Tap each ‘?’ tile. 5 + 1 + 0 + 3 = 9. Dial 009° (just east of north) and press ‘Fix the bearing’."],["SAY","Read the reveal: pencilled camp and food marks along the river."]] },
      { type:"intercept", phase:"decode", fs:"story",
        msg:"Restoration team. Pencil marks? Just rub them out. The ink names are the official ones, and a clean map sells for twice the price. — D.",
        ask:"Should the pencil marks be rubbed out? What would we lose?",
        notes:[["SAY","Read it in the Dealer's smooth voice."],["ASK","Take a few answers. Link to Monday: the pencil marks record Kāi Tahu camps and food places."],["LISTEN","We'd lose the history of the first people; ‘official’ isn't the same as ‘true’ or ‘complete’; the marks are evidence."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess. Celebrate Sheet II!"],["CLICK","C = wheat sheaves. Store landscapes flat to dry."]] }
    ]
  };

  BM.WEEKS[2] = {
    n:2,
    story:"Sheet II shows pencilled symbols beside the river: camps and food places. This week historians learn who the tākata whenua of Hakatere are and how they lived with the seasons, from Kāi Tahu sources. Geographers find out how the mountains were made and why they're still rising; astronomers discover the Sun is a star; engineers test levers; and artists meet Rita Angus's Cass. Friday's four clues give the bearing for Sheet II, and the Dealer wants the pencil marks rubbed out.",
    hononga:"Tākata whenua of Hakatere and mahika kai, taught from the Arowhenua narrative; the 1848 promise to protect mahika kai (Mon) · maunga as ancestors, and two kinds of knowing (Tue) · te rā, the Sun (Wed) · the kō as a lever (Thu) · rock art as an ancestral record, to be learned about in Week 6 (Fri). Check all local framing with your Māori lead and Te Rūnanga o Arowhenua (D3).",
    seal:{
      answer:9,
      instruction:"Add the four **Trig Clues** from Monday to Thursday. The total is a **bearing**. Dial it on the theodolite to crack the wax seal.",
      reveal:"🟡 **Sheet II restored:** the river through the plains, and along its banks, **pencilled camp marks and food signs**: kāika, kai, *summer camp*. Next week: *The Old Trails*.",
      art:() => { const v = BM.art.sheetArt(2); v.setAttribute("style", "width:100%;height:100%"); return v; }
    },
    lessons:[mon, tue, wed, thu, fri]
  };
})(window.BM);
