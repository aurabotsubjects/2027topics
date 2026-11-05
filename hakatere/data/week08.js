/* ==========================================================
   WEEK 8 — MAP SHEET VIII · THE FLOOD
   Notes: [KEY, text]  KEY = SAY ASK LISTEN IF CLICK TALK DEEPER PACE SAFETY WAIT NOTE TIKANGA
   Facts are sourced in data/sources.js (tags match blueprint §18).
   Sensitive content (blueprint D9, §17.7): the May 2021 flood is taught with a
   calm warning, an opt-out, and a focus on helpers and recovery.
   ========================================================== */
(function(BM){
  "use strict";

  const checkIn = (week) => ({
    type:"content", phase:"excavate", fs:null, kicker:"Big Project check-in · Week " + week, title:"How's your *Big Project*?",
    bullets:["Look at your **goal** in your Field Journal.","What have you **finished**? What's **next** this week?","Who or what do you **need** (a photo, an interview, materials, device time)?"],
    visual:{ level:true },
    notes:[["SAY","“One minute: check your Big Project goal and write your next step.”"],["NOTE","Note who needs help. Big Projects are shown at the Week 10 Exhibition."]]
  });

  /* ======================= MONDAY · HISTORY ======================= */
  const mon = {
    id:"w08-mon", week:8, day:"mon", subject:"history", duration:50,
    title:"May 2021: The Hakatere Flood & Recovery", guide:"nell",
    codes:["SS-H","SS-G","SS-C","SS-P"],
    coverage:"Y5 History (2027): natural events and how communities respond and recover — a case study of a natural disaster (the May 2021 Canterbury flood), compared with Mt Tarawera (1886). Civics: who helps in an emergency.",
    li:"We are learning how a natural event affected our district, and how the community responded and recovered.",
    sc:["I can describe what happened in the May 2021 flood.","I can explain how people responded and recovered.","I can compare it with the Mt Tarawera eruption of 1886."],
    vocab:[
      { w:"flood", def:"when water overflows onto land that is usually dry" },
      { w:"state of emergency", def:"a declaration that lets authorities act quickly to keep people safe" },
      { w:"evacuate", def:"to leave a dangerous place and go somewhere safe" },
      { w:"stopbank", def:"a bank of earth built beside a river to keep floodwater in" },
      { w:"m³/s (cumecs)", def:"cubic metres per second: how much water flows past a point each second" },
      { w:"response", def:"what people do straight away to keep each other safe" },
      { w:"recovery", def:"repairing and rebuilding after a disaster, which can take years" },
      { w:"eruption", def:"when a volcano bursts out with ash, rock and gas" }
    ],
    prep:{ min:5, items:["⚠️ Read the safety notes first; tell families ahead if you can","Field Journals","Optional: a tray of sand and a jug for Path B (stopbank test)","Oral history (Path C): students interview at home, only with permission"] },
    safety:["Some families in our district were directly affected by the 2021 flood: farms, homes, roads. Give a calm warning before the lesson and let students opt out of discussions or step away.","Focus on helpers, preparation and recovery. Don't ask students to share their own experiences in front of the class.","Oral history (Path C) is optional, done at home with permission, and only with people who are happy to talk about it."],
    tikanga:["Iwi were among the recovery partners. Ask your Māori lead whether Arowhenua would like their role in the response acknowledged in a particular way."],
    hononga:"**Living with the river.** Kāi Tahu knew the Hakatere as a river that changed with every flood, and built seasonal camps accordingly (Weeks 2–4). Floods are part of how braided rivers work; the challenge is living safely beside them.",
    paths:[
      { id:"A", name:"The Recorder", product:"Recovery Timeline", steps:["Make a **timeline** from **29 May 2021** to today.","Include the **rain**, the **state of emergency**, the **peak**, the **bridge**, and **recovery** steps.","Mark **who helped** at each stage."], flying:"Add Mt Tarawera (1886) above the line and compare." },
      { id:"B", name:"The Maker", product:"Stopbank Model Test", steps:["Build a **river channel** in a sand tray with **stopbanks** on each side.","Pour water slowly, then faster. **Where does it break through?**","Improve your stopbank and **test again**. Record what worked."], flying:"Explain why a breakout upstream can ease the pressure downstream." },
      { id:"C", name:"The Storyteller", product:"Oral History (with care)", steps:["**With permission**, plan **3 gentle questions** for someone who remembers the flood.","Ask about **helpers** and **recovery**, not the scariest parts.","Write or record a short summary. **Thank** them."], flying:"Compare their memories with today's facts." }
    ],
    supportedShort:"a picture timeline to order, a helpers word bank, sentence frames (“First…, then…, finally…”).",
    lens:{
      pillar:"aroha", title:"When you pass through the waters",
      look:"Look again at the river: rising, peaking, falling, and the helpers who came.",
      ref:"Isaiah 43:2 · Matthew 7:24–27",
      paraphrase:"When you pass through the waters, I will be with you; when you pass through the rivers, they will not sweep over you. Jesus said: the wise builder built his house on the rock; the rain came and the floods rose, and it did not fall.",
      talk:[
        { q:"God doesn't promise there will be no floods. What does He promise?", listen:"He will be with us; we won't be alone; He helps us through." },
        { q:"Jesus talks about building on rock. How did people ‘build on rock’ before and after the flood?", listen:"Strong stopbanks; being prepared; helping neighbours; trusting God; rebuilding well." }
      ],
      live:"Thank **one helper** this week: a firefighter, a farmer who helped, a council worker, a neighbour."
    },
    clue:{ prompt:"After the flood, fixing the district's roads took over six months and about how many million dollars?", answer:4, explain:"About $4 million. Trig Clue 1 is saved for Friday!" },
    next:"Tuesday — Sam is packing for a trip to a mountain in Malaysia. How does it compare with ours?",
    rubric:[
      { c:"What happened", code:"SS-H · SS-G",
        d:["Says there was a flood.","“The river flooded.”"],
        a:["Describes what happened in May 2021.","“Heavy rain from 29 May made the river peak at about 1,450 m³/s. A state of emergency was declared, and the SH1 bridge was damaged.”"],
        f:["Explains why it happened.","“Over 500 mm of rain fell in the foothills, and braided rivers carry huge floods because their catchments are steep.”"],
        i:["I know there was a flood.","I can describe what happened.","I can explain why it happened."] },
      { c:"Response & recovery", code:"SS-C",
        d:["Names one helper.","“Firefighters.”"],
        a:["Explains how people responded and recovered.","“Emergency services helped people evacuate; iwi, farmers and neighbours helped clean up; roads took over six months to fix.”"],
        f:["Explains why recovery takes a long time.","“Farms, roads and bridges all needed repairs, and people needed money, help and time.”"],
        i:["I can name one helper.","I can explain the response and recovery.","I can explain why recovery takes a long time."] },
      { c:"Comparing", code:"SS-H · SS-P",
        d:["Names another disaster.","“Tarawera.”"],
        a:["Compares the 2021 flood with Mt Tarawera (1886).","“Tarawera erupted on 10 June 1886 and about 120 people died; the Pink and White Terraces were buried. In 2021 no one died, but many properties were damaged.”"],
        f:["Explains what has changed in how we respond.","“Today we have warnings, Civil Defence and stopbanks, so people can leave in time.”"],
        i:["I can name another disaster.","I can compare the two events.","I can explain what has changed."] }
    ],
    plan:{
      prior:"Students know braided rivers (Week 4), hazards and being prepared (Week 3), and the river's history (Weeks 1–7). Many students lived through the 2021 flood; some families were badly affected.",
      kc:["Thinking","Relating to others","Participating & contributing"],
      sequence:[
        ["0–6","Field Note","Calm warning. Nell's note: Sheet VIII, a great flood. Trig Check (Week 7). LI/SC.","Recall; check in."],
        ["6–20","Survey","What happened; **Flood Hydrograph**; helpers; recovery; Mt Tarawera; Big Project check-in.","Watch; discuss; compare."],
        ["20–38","Choose Your Path","Introduce A/B/C. Roam: “Who helped? What happened next?”","Timeline / stopbank test / oral history plan."],
        ["38–45","Through the Lens","Isaiah 43:2; Matthew 7:24–27 — four moves.","Discuss; thank a helper."],
        ["45–50","Trig Clue & Exit","Trig Clue 1 (answer 4); self-assessment; wheat sheaves.","Solve; self-assess."]
      ],
      diff:{
        supported:"Picture timeline; helpers word bank; sentence frames.",
        esol:"Show the hydrograph rising and falling with your hand; picture glossary.",
        learning:"Hands-on stopbank model; quiet space available; calm screen available.",
        flying:"Why breakouts ease pressure; how responses have changed since 1886."
      },
      assess:{
        lookFor:["Describes the flood accurately","Explains response and recovery","Compares with Tarawera"],
        evidence:["Hydrograph discussion","Path products (photograph)","Exit self-assessment"]
      },
      inquiry:["Did anyone find today hard? Follow up gently and tell whānau if needed.","Who focused on helpers and recovery?","Oral histories: thank participants; could any become museum cases (with permission)?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"nell", meta:"Conservation room · Sheet VIII",
        msg:"Sheet VIII has a wide blue wash where the river should be, and a note in the surveyor's hand: *great flood — water to here*. Along one bank he's drawn a red line and written **stopbank?** with a question mark. He was asking how to keep a town safe from the river. In our own time, in **May 2021**, the Hakatere flooded again.",
        notes:[["SAFETY","Before you read: “Today we learn about the 2021 flood. Some of our families were affected. If you'd rather not talk about it, that's fine; you can let me know or take a break. We'll focus on the helpers and how our community recovered.”"],["SAY","Read the message. 🟡 Nell and the sheet are fictional; the flood is real."]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"What is a relief print?", a:"A print where the raised (flat) surface takes the ink; pressed lines stay paper-coloured." }, { q:"Why does a print come out backwards?", a:"It's a mirror image of the plate." }, { q:"What bearing opened Sheet VII?", a:"066° (8 + 20 + 2 + 36), but the sleeve was empty!" } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"End of May 2021", title:"The *Hakatere* flood",
        bullets:["From about **29 May 2021**, heavy rain fell on the mountains and foothills. Around **540 mm** fell at **Mount Somers**.","On **30 May** a **state of local emergency** was declared in Ashburton, and a region-wide emergency for Canterbury.","The **Hakatere and Hinds** rivers hit **record flows**."],
        visual:{ map:{ theme:"paper", labels:"both", relief:true }, size:560 },
        notes:[["SAY","Facts from Ashburton District Council (first anniversary of the May floods) and 1News (30 May 2021)."],["ASK","“Why does rain in the mountains flood the town on the plains?”"],["LISTEN","The rivers carry the water down; lots of rain in a short time; the ground can't soak it up."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Hour by hour", title:"Flood Hydrograph", ix:"hydrograph",
        notes:[["CLICK","Press ▶ Play, or → to jump to each moment."],["ASK","At the peak: “1,450 cubic metres every second. How many bathtubs is that?” (About 7,000 a second, if a bath holds 200 litres.)"],["NOTE","The curve's shape is a teaching sketch; the peak is from 1News."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"People helping people", title:"Response & *recovery*", h:"500px",
        cards:[ { icon:"🚒", t:"Response", d:"**Emergency services**, including Fire and Emergency and police, helped as the flood happened. Many residents by the rivers **evacuated themselves**." }, { icon:"🤝", t:"Partners", d:"**Iwi**, the **Rural Support Trust**, **Federated Farmers**, health services and others helped. People across NZ gave to the **Mayoral Relief Fund**." }, { icon:"🛠️", t:"Rebuilding", d:"Nearly **280 properties** were affected. Fixing roads took **over six months** and about **$4 million**. A **second bridge** is planned." } ],
        notes:[["SAY","Facts from Ashburton District Council."],["ASK","“Which helper would you most like to thank? Why?”"]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"A case from 1886", title:"Compare: *Mt Tarawera*",
        bullets:["On **10 June 1886**, **Mt Tarawera** near Rotorua erupted.","Perhaps **120 people** were killed, and the famous **Pink and White Terraces** were buried.","**Compare:** what was the same, and what was different, about warnings, helpers and recovery then and in 2021?"],
        visual:{ artefact:"volcanic" },
        notes:[["SAY","Facts from NZHistory."],["LISTEN","Same: people helped each other; land changed. Different: in 1886 there were no modern warnings or Civil Defence; in 2021 people had warnings and could evacuate in time."]] },
      checkIn(8),
      { type:"paths", phase:"paths", fs:null, minutes:18,
        notes:[["SAY","“Choose your path. Path C: plan questions only; interviews happen at home, with permission.”"],["CLICK","Start the 18-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Isaiah 43:2, then summarise Matthew 7:24–27."],["SAFETY","Be gentle: avoid suggesting that people whose homes flooded didn't ‘build on rock’. The parable is about lives built on Jesus' words."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 4."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess. Thank students for their care today."],["CLICK","C = wheat sheaves."]] }
    ]
  };

  /* ======================= TUESDAY · GEOGRAPHY ======================= */
  const tue = {
    id:"w08-tue", week:8, day:"tue", subject:"geography", duration:50,
    title:"Mountains of Southeast Asia: Kinabalu", guide:"sam",
    codes:["SS-G","SS-P"],
    coverage:"Y6 Geography (2027): the Southeast Asian region — locating its 11 countries; a case study of a Southeast Asian mountain environment; comparing it with our own place.",
    li:"We are learning to compare a mountain in Southeast Asia with the Southern Alps.",
    sc:["I can locate Southeast Asia and name its 11 countries.","I can describe Mt Kinabalu's environment.","I can compare Kinabalu with our mountains."],
    vocab:[
      { w:"Southeast Asia", def:"the region of Asia south of China and east of India, with 11 countries" },
      { w:"Borneo", def:"a large island shared by Malaysia, Indonesia and Brunei" },
      { w:"equator", def:"the imaginary line around the middle of the Earth" },
      { w:"tropical", def:"near the equator: hot, often wet, all year" },
      { w:"rainforest", def:"a thick forest in a place with lots of rain" },
      { w:"World Heritage site", def:"a place UNESCO lists as important to the whole world" },
      { w:"pitcher plant", def:"a plant with cup-shaped leaves that trap insects" }
    ],
    prep:{ min:5, items:["A world map or globe (find Malaysia, Borneo, NZ)","Field Journals","Optional (Path B): card or clay for mountain profiles"] },
    safety:[],
    tikanga:["Kinabalu is a sacred mountain to the Kadazan-Dusun people of Sabah. If you mention this, do so respectfully and without adding details you can't source. Like Aoraki for Ngāi Tahu, mountains can be ancestors and sacred places for Indigenous peoples."],
    hononga:"**Mountains that matter.** Aoraki is the most sacred of Ngāi Tahu's ancestral mountains, and it was symbolically returned to Ngāi Tahu in the 1998 settlement (Week 9). Many peoples around the world hold mountains as sacred.",
    paths:[
      { id:"A", name:"The Recorder", product:"Comparison Chart", steps:["Make a **2-column chart**: **Kinabalu** and **Aoraki / the Southern Alps**.","Compare **height, location, climate, plants and animals, and people**.","Write one sentence: **the biggest difference** and why."], flying:"Explain why the bottom of Kinabalu is rainforest but the bottom of our Alps isn't." },
      { id:"B", name:"The Maker", product:"Profile Model", steps:["Draw or build **side-by-side profiles** of Kinabalu and Aoraki **to scale** (1 cm = 200 m).","Colour the **vegetation zones** on each.","Label heights and zones."], flying:"Add a third mountain from Southeast Asia (research it)." },
      { id:"C", name:"The Storyteller", product:"Travel Show", steps:["Plan a **1-minute travel show** about climbing Kinabalu.","Describe how the **plants and weather change** as you climb.","Compare with a climb in **our** mountains."], flying:"Add advice on caring for a World Heritage site." }
    ],
    supportedShort:"a map with the 11 countries labelled, a comparison chart frame, picture cards (rainforest, pitcher plant, snow, tussock).",
    lens:{
      pillar:"aroha", title:"Every nation",
      look:"Look again at the map: eleven countries, many languages, many peoples.",
      ref:"Revelation 7:9",
      paraphrase:"I looked, and there was a great crowd that no one could count, from every nation, tribe, people and language, standing before the throne.",
      talk:[
        { q:"Revelation pictures people from every nation together before God. What does that tell us about how God sees the peoples of Southeast Asia, and us?", listen:"He loves every nation; everyone is welcome; no group is more important; we're one family." },
        { q:"How can we show welcome to people from other countries here in Ashburton?", listen:"Learn their names; learn a greeting; include them; ask about their home; share food." }
      ],
      live:"Learn to say **hello** in one Southeast Asian language this week (e.g. Malay: *selamat pagi*, good morning)."
    },
    clue:{ prompt:"How many countries are in the Southeast Asian region, as our curriculum counts them?", answer:11, explain:"11 countries. Trig Clue 2 is saved!" },
    next:"Wednesday — Dr Priya is zooming out: from our school, to the Earth, to the whole galaxy.",
    rubric:[
      { c:"Southeast Asia", code:"SS-G",
        d:["Finds Asia on a map.","Points to Asia."],
        a:["Locates Southeast Asia and names its countries.","Names most of the 11 countries and finds Malaysia and Borneo."],
        f:["Describes shared features and differences in the region.","“Most are tropical, but some are islands and some are on the mainland.”"],
        i:["I can find Asia.","I can locate Southeast Asia and name its countries.","I can describe shared features and differences."] },
      { c:"Kinabalu", code:"SS-G",
        d:["Says it's a big mountain.","“It's tall.”"],
        a:["Describes Kinabalu's environment.","“4,095 m, in Sabah on Borneo. Rainforest at the bottom, alpine scrub and granite at the top, with thousands of plant species.”"],
        f:["Explains why it is a World Heritage site.","“It has huge biodiversity: about 1,000 orchids and half of Borneo's plant species.”"],
        i:["I know it's a big mountain.","I can describe Kinabalu's environment.","I can explain why it's a World Heritage site."] },
      { c:"Comparing", code:"SS-G · SS-P",
        d:["Gives one difference.","“It's hotter.”"],
        a:["Compares Kinabalu with our mountains.","“Kinabalu is higher and near the equator, so it starts in rainforest. Aoraki is far south, with snow and glaciers.”"],
        f:["Explains differences using latitude and climate.","“Being near the equator, every zone on Kinabalu is warmer than the same height here.”"],
        i:["I can give one difference.","I can compare the two mountains.","I can explain the differences."] }
    ],
    plan:{
      prior:"Students know our mountains, alpine zones and the bushline (Weeks 2–7). Some have family links to Southeast Asia: invite them to share, without putting anyone on the spot.",
      kc:["Thinking","Relating to others"],
      sequence:[
        ["0–6","Field Note","Sam's message. Trig Check (Monday). LI/SC.","Recall; predict."],
        ["6–18","Survey","Southeast Asia's 11 countries; Kinabalu; **Mountain Compare**; living things.","Locate; compare; discuss."],
        ["18–38","Choose Your Path","Introduce A/B/C. Roam: “What's the same? What's different? Why?”","Chart / profile model / travel show."],
        ["38–45","Through the Lens","Revelation 7:9 — four moves.","Discuss; learn a greeting."],
        ["45–50","Trig Clue & Exit","Trig Clue 2 (answer 11); self-assessment; wheat sheaves.","Solve; self-assess."]
      ],
      diff:{
        supported:"Labelled map; chart frame; picture cards.",
        esol:"Students with Southeast Asian heritage may share words or photos if they wish; picture glossary.",
        learning:"Hands-on profiles; partner work; calm screen available.",
        flying:"Latitude and climate; World Heritage values."
      },
      assess:{
        lookFor:["Locates Southeast Asia","Describes Kinabalu","Compares the mountains"],
        evidence:["Mountain Compare discussion","Path products (photograph)","Exit self-assessment"]
      },
      inquiry:["Who could explain why the zones differ (latitude)?","Did students with Southeast Asian links feel valued?","Bank questions for further research."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"sam", meta:"Airport · bags packed",
        msg:"I'm off to climb a mountain that starts in **steaming rainforest** full of orchids and ends in **bare granite** above the clouds: **Mt Kinabalu** in Malaysia. It's even higher than Aoraki! I want to know: how is a tropical mountain **different** from ours?",
        notes:[["SAY","Read the message. 🟡 Sam is fictional."],["CLICK","Find Malaysia and Borneo on a map or globe."]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"When did the 2021 flood happen?", a:"From about 29 May 2021." }, { q:"Name two kinds of helpers in the flood.", a:"Emergency services, iwi, Rural Support Trust, farmers, neighbours." }, { q:"When did Mt Tarawera erupt?", a:"10 June 1886." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Our neighbours", title:"Southeast *Asia*",
        bullets:["**Southeast Asia** has **11 countries**: Brunei, Cambodia, Indonesia, Laos, Malaysia, Myanmar, the Philippines, Singapore, Thailand, Timor-Leste and Vietnam.","Some are on the **mainland** of Asia; others are made of **islands**.","Most of the region is **near the equator**: hot and wet all year."],
        visual:{ artefact:"starchart" },
        notes:[["SAY","Curriculum: Y6 Social Sciences names ‘the 11 countries in the Southeast Asian region’."],["CLICK","Find each country on the map."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Sabah, Malaysia", title:"Mt *Kinabalu*",
        bullets:["**Mt Kinabalu** is **4,095 m** high, the highest mountain between the Himalayas and New Guinea. It's in **Sabah, Malaysia**, at the north end of **Borneo**.","Its park climbs from **152 m to 4,095 m**, through **six vegetation zones**: from **lowland rainforest** to **alpine scrub**.","It has an estimated **5,000–6,000 plant species**, about **1,000 orchids** and **326 bird species**. It was Malaysia's **first World Heritage site** (2000)."],
        visual:{ artefact:"stones" },
        notes:[["SAY","Facts from UNESCO (Kinabalu Park) and Mount Kinabalu Park's news page."],["ASK","“Why would so many different plants grow on one mountain?”"],["LISTEN","Many different zones from hot to cold; lots of rain; isolated on an island."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Side by side", title:"Mountain Compare", ix:"mountaincompare",
        notes:[["CLICK","Press → through: two mountains, climate, living things, Southeast Asia."],["ASK","“Kinabalu's bottom zone is rainforest; ours is plains and tussock. Why?” (Kinabalu is near the equator.)"],["NOTE","Aoraki was re-measured at 3,724 m in 2014."]] },
      { type:"discussion", phase:"excavate", fs:"real", kicker:"Turn & Talk", q:"If you climbed **Kinabalu** and then **Aoraki**, what would feel **the same**, and what would feel **different**?", sub:"Think about temperature, plants, animals, weather and people.", talk:45,
        notes:[["TALK","45-second talk."],["LISTEN","Same: colder as you climb; plants get smaller; thin air. Different: rainforest vs tussock; orchids vs alpine daisies; snow and glaciers here."]] },
      { type:"paths", phase:"paths", fs:null, minutes:18,
        notes:[["SAY","“Choose your path. Use facts from both mountains.”"],["CLICK","Start the 18-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Revelation 7:9."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 11."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = wheat sheaves."]] }
    ]
  };

  /* ======================= WEDNESDAY · SCIENCE ======================= */
  const wed = {
    id:"w08-wed", week:8, day:"wed", subject:"science", duration:50,
    title:"Our Galaxy: Te Ikaroa, the Milky Way & Beyond", guide:"priya",
    codes:["SC-ES","SC-P"],
    coverage:"Y6 Science (2027): the Sun is part of the Milky Way galaxy; some objects in the night sky are distant galaxies; using models and scale to describe the universe.",
    li:"We are learning that the Sun is part of the Milky Way, and that other galaxies exist beyond it.",
    sc:["I can describe the Milky Way.","I can explain what a galaxy is.","I can name galaxies we can see from Aotearoa."],
    vocab:[
      { w:"galaxy", def:"a huge group of billions of stars, gas and dust held together by gravity" },
      { w:"Milky Way", def:"our galaxy; the solar system is part of it" },
      { w:"Te Ikaroa", say:"teh EE-kah-raw-ah", def:"the Māori name for the Milky Way" },
      { w:"spiral", def:"a shape that winds around a centre, like a whirlpool" },
      { w:"Magellanic Clouds", say:"MAJ-eh-LAN-ik", def:"two small galaxies near ours, seen as hazy patches in the southern sky" },
      { w:"light-year", def:"the distance light travels in one year, about 9.5 million million km" },
      { w:"cosmic address", def:"where you are, from your home out to the universe" }
    ],
    prep:{ min:5, items:["Field Journals","Optional (Path B): paper plates, glue, glitter or white paint, cotton wool","Home task (with whānau): on a dark, moonless night, look for Te Ikaroa and the Magellanic Clouds"] },
    safety:["Night-sky viewing happens at home with an adult."],
    tikanga:["Te Ikaroa (the long fish) is the Māori name for the Milky Way (Te Ara). Ask your Māori lead about local Kāi Tahu names for the Milky Way and the Magellanic Clouds before using others."],
    hononga:"**Te Ikaroa.** Māori named the Milky Way **Te Ikaroa**, the long fish, stretched across the sky. Knowledge of the night sky guided travel, planting and the seasons (Weeks 5–6, 9).",
    paths:[
      { id:"A", name:"The Recorder", product:"My Cosmic Address", steps:["Write your **cosmic address**: your name, home, town, Aotearoa, Earth, solar system, Milky Way, universe.","Add **one fact** at each level.","Draw a small picture for **three** of the levels."], flying:"Add the distance to the Small Magellanic Cloud and explain what a light-year is." },
      { id:"B", name:"The Maker", product:"Galaxy Spiral Model", steps:["Make a **spiral galaxy** on a paper plate: a bright **centre** and **two arms**.","Mark **‘You are here’** about two-thirds of the way out.","Add two small **Magellanic Clouds** nearby."], flying:"Explain why we see the Milky Way as a band across the sky." },
      { id:"C", name:"The Storyteller", product:"Planetarium Guide Talk", steps:["Plan a **1-minute planetarium talk**.","Take your audience **from our school out to the galaxies**.","Use the words **galaxy, Te Ikaroa, light-year**."], flying:"End with Psalm 8:3–4 and what it means to you." }
    ],
    supportedShort:"a cosmic address frame, picture cards (Earth, Sun, galaxy), sentence frames.",
    lens:{
      pillar:"mohio", title:"When I consider your heavens",
      look:"Look again at the zoom: school, Earth, solar system, galaxy, and then more galaxies.",
      ref:"Psalm 8:3–4",
      paraphrase:"When I look at your heavens, the work of your fingers, the moon and the stars you set in place, what are human beings that you think about them, that you care for them?",
      talk:[
        { q:"The galaxy is enormous. How does that make you feel about God?", listen:"Amazed; small; He's powerful; He's creative; He's bigger than anything." },
        { q:"David asks why God cares about people when the universe is so big. What's the answer?", listen:"God made us in His image; He loves us; we're not lost in the size; He knows us by name." }
      ],
      live:"Look up at the night sky with someone at home, and read **Psalm 8:3–4** together."
    },
    clue:{ prompt:"How many arms does our class galaxy model have? (Look at the model on the board.)", answer:2, explain:"Our model has 2 arms. Trig Clue 3 is saved!" },
    next:"Thursday — Liv's pivot keeps watering the paddock even when it's raining. Can we make it smart?",
    rubric:[
      { c:"The Milky Way", code:"SC-ES",
        d:["Says the Milky Way is stars.","“A lot of stars.”"],
        a:["Describes the Milky Way and our place in it.","“It's our galaxy, a spiral about 100,000 light-years across. The solar system is part of it, near the Orion arm.”"],
        f:["Explains why we see it as a band.","“We're inside the flat disc, so looking along it we see a band of stars.”"],
        i:["I know the Milky Way is stars.","I can describe the Milky Way and our place in it.","I can explain why we see it as a band."] },
      { c:"Galaxies", code:"SC-ES",
        d:["Names a galaxy.","“The Milky Way.”"],
        a:["Explains what a galaxy is.","“A huge group of billions of stars, gas and dust, held together by gravity.”"],
        f:["Uses scale to explain how far away galaxies are.","“The Small Magellanic Cloud is about 190,000 light-years away.”"],
        i:["I can name a galaxy.","I can explain what a galaxy is.","I can use scale to explain distances."] },
      { c:"Seeing from Aotearoa", code:"SC-ES · SC-P",
        d:["Says you can see stars.","“Stars at night.”"],
        a:["Names galaxies we can see from Aotearoa.","“The Milky Way, Te Ikaroa, and the Large and Small Magellanic Clouds.”"],
        f:["Explains where and when to look.","“On a dark night away from lights, the Magellanic Clouds are near the south celestial pole.”"],
        i:["I can say we see stars.","I can name galaxies we can see from here.","I can explain where and when to look."] }
    ],
    plan:{
      prior:"Students know the Sun is a star (Week 2), the spinning sky (Week 3), star clusters (Week 6) and star colours (Week 7). Many have seen the Milky Way on a dark night.",
      kc:["Thinking","Using language, symbols & texts"],
      sequence:[
        ["0–6","Field Note","Dr Priya's message. Trig Check (Tuesday). LI/SC.","Recall; predict."],
        ["6–20","Survey","Te Ikaroa; what a galaxy is; **Zoom Out**; the Magellanic Clouds.","Predict; zoom; explain."],
        ["20–38","Choose Your Path","Introduce A/B/C. Roam: “Where are we? What's next out?”","Cosmic address / galaxy model / guide talk."],
        ["38–45","Through the Lens","Psalm 8:3–4 — four moves.","Discuss; look up."],
        ["45–50","Trig Clue & Exit","Trig Clue 3 (answer 2); self-assessment; wheat sheaves.","Solve; self-assess."]
      ],
      diff:{
        supported:"Address frame; picture cards; sentence frames.",
        esol:"Nested circles drawing for the cosmic address; picture glossary.",
        learning:"Hands-on galaxy model; partner work; calm screen available.",
        flying:"Why we see a band; light-years and scale."
      },
      assess:{
        lookFor:["Describes the Milky Way","Explains what a galaxy is","Names galaxies visible from Aotearoa"],
        evidence:["Zoom Out discussion","Path products (photograph)","Exit self-assessment"]
      },
      inquiry:["Who could explain why we see the Milky Way as a band?","Did anyone see the Magellanic Clouds at home?","Sky Watcher's Journals: add a dark-sky observation."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"priya", meta:"Lake Clearwater · moonless night",
        msg:"Out at Lake Clearwater, far from town lights, there's a **pale, glowing river** across the whole sky. Through binoculars it breaks into **millions of stars**. Low in the south are two small, misty **clouds** that never move away. These aren't clouds at all. Let's **zoom out** and find out where we really are.",
        notes:[["SAY","Read the message. 🟡 Dr Priya is fictional."],["ASK","“Who has seen the Milky Way? Where?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"How high is Mt Kinabalu?", a:"4,095 m." }, { q:"How many countries are in Southeast Asia?", a:"11." }, { q:"Why is the bottom of Kinabalu rainforest?", a:"It's near the equator: hot and wet." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Our galaxy", title:"*Te Ikaroa* · the Milky Way",
        bullets:["The Milky Way is called **Te Ikaroa** in te reo Māori. Its glow comes from **millions of stars** too far away to see one by one.","Our **solar system** is part of it, along with about **250 billion** other stars.","It's a **barred spiral galaxy**, about **100,000 light-years** across. The Sun is near the **Orion arm**, about 28,000 light-years from the centre."],
        visual:{ artefact:"starchart" },
        notes:[["SAY","Facts from Te Ara (Night sky) and NASA StarChild."],["ASK","“If we're inside the galaxy, why do we see it as a band across the sky?”"],["LISTEN","We're inside a flat disc; looking along the disc we see lots of stars; looking out of it we see fewer."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Where are we?", title:"Zoom Out", ix:"zoomout",
        notes:[["CLICK","Press → to zoom out: school, Aotearoa, Earth, solar system, Milky Way, galaxies."],["ASK","At each level: “What's our address now?”"],["NOTE","Our Milky Way picture shows two arms for simplicity; NASA describes four major arms and some smaller ones. Our class model also has 2 arms (today's clue)."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Beyond our galaxy", title:"Other *galaxies*", h:"480px",
        cards:[ { icon:"🌌", t:"What's a galaxy?", d:"A huge group of **billions of stars**, gas and dust, held together by **gravity**." }, { icon:"☁️", t:"Magellanic Clouds", d:"Two hazy patches near the **south celestial pole**: the **Large** and **Small Magellanic Clouds**, small galaxies that orbit ours." }, { icon:"📏", t:"How far?", d:"The **Small Magellanic Cloud** is about **190,000 light-years** away, one of the most distant things you can see with your eyes." } ],
        notes:[["SAY","Facts from Te Ara (Night sky)."],["NOTE","Distances are measurements (D8 §4.6): teach them as normal science."]] },
      { type:"paths", phase:"paths", fs:null, minutes:18,
        notes:[["SAY","“Choose your path. Start your address at home!”"],["CLICK","Start the 18-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Psalm 8:3–4."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 2 (set the class model to 2 arms)."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = wheat sheaves."]] }
    ]
  };

  /* ======================= THURSDAY · TECHNOLOGY ======================= */
  const thu = {
    id:"w08-thu", week:8, day:"thu", subject:"technology", duration:50,
    title:"Scratch 3: Events & Decisions (The Smart Irrigator)", guide:"liv",
    codes:["DT-CT","DT-DD"],
    coverage:"Digital Technologies — Computational Thinking, Progress Outcome 2: use events and decisions (if/else) in programs; test both branches.",
    li:"We are learning to use events and if/else decisions in our programs.",
    sc:["I can start code with an event.","I can write an if/else decision.","I can test both branches of my program."],
    vocab:[
      { w:"event", def:"something that happens and starts code running (a click, a key, a sensor reading)" },
      { w:"decision", def:"a point where the program chooses what to do" },
      { w:"if/else", def:"if something is true, do this; otherwise (else), do that" },
      { w:"condition", def:"the question an if block checks, like ‘moisture < 30’" },
      { w:"sensor", def:"a device that measures something, like soil moisture or temperature" },
      { w:"branch", def:"one of the paths a decision can take" },
      { w:"test table", def:"a table of inputs, expected results and actual results" }
    ],
    prep:{ min:10, items:["Devices with Scratch if available, or use the Smart Irrigator on the board","Printed flowchart shapes (start, decision diamond, action) for Path A","A test table template for Path C"] },
    safety:[],
    tikanga:[],
    hononga:"**Using water wisely.** Water from the rivers is precious to farmers, to wildlife and to Kāi Tahu, for whom the rivers are taonga (Week 7). Smart irrigators that water only when needed help share it fairly.",
    paths:[
      { id:"A", name:"The Recorder", product:"Flowchart", steps:["Draw a **flowchart** for a smart irrigator: **start → read sensor → decision (moisture < 30?) → water ON or OFF**.","Use a **diamond** for the decision.","Label the **yes** and **no** branches."], flying:"Add a second decision: ‘Is it raining?’" },
      { id:"B", name:"The Maker", product:"Scratch Smart Irrigator", steps:["In **Scratch** (or the Smart Irrigator sim), make a **moisture** value change.","Use **if moisture < 30 then … else …**.","Show **water ON** and **water OFF** with costumes or sounds."], flying:"Make the moisture go down over time and up when watering." },
      { id:"C", name:"The Tester", product:"Test Plan", steps:["Write a **test table**: moisture, expected, actual, ✅/❌.","Test values **below 30**, **above 30**, and **exactly 30**.","Find the **bug** in the buggy version and explain it."], flying:"Explain why testing exactly 30 matters." }
    ],
    supportedShort:"printed if/else blocks to arrange, a flowchart template, a test table frame.",
    lens:{
      pillar:"manaaki", title:"Wise choices",
      look:"Look again at the decision: if dry, water; else, wait.",
      ref:"James 1:5",
      paraphrase:"If any of you lacks wisdom, ask God, who gives generously to all without finding fault, and it will be given to you.",
      talk:[
        { q:"A smart irrigator makes a decision with an if/else. What decisions do you make every day?", listen:"If it's raining, take a coat; if a friend is sad, check on them; if I'm unsure, ask." },
        { q:"James says we can ask God for wisdom. When do you need wisdom to decide?", listen:"Friendship problems; what to say; right and wrong; family choices." }
      ],
      live:"Before one decision this week, **pause and ask God for wisdom**."
    },
    clue:{ prompt:"An if/else decision has how many possible paths?", answer:2, explain:"Two: the ‘if’ path and the ‘else’ path. Trig Clue 4 is saved for Friday!" },
    next:"Friday — Tom's been up in the plane again. From above, the plains look like a patchwork quilt.",
    rubric:[
      { c:"Events", code:"DT-CT",
        d:["Starts code with help.","Uses the green flag only."],
        a:["Starts code with an event.","“When sensor reading changes” runs the decision."],
        f:["Uses more than one event.","Click, key and sensor events trigger different scripts."],
        i:["I can start code with help.","I can start code with an event.","I can use more than one event."] },
      { c:"Decisions", code:"DT-CT · DT-DD",
        d:["Uses an if block with help.","If with no else."],
        a:["Writes an if/else decision.","If moisture < 30 then water ON else water OFF."],
        f:["Nests or combines decisions.","If dry and not raining, water."],
        i:["I can use an if block with help.","I can write an if/else.","I can combine decisions."] },
      { c:"Testing", code:"DT-CT",
        d:["Tries the program once.","“It works.”"],
        a:["Tests both branches with a test table.","Tests 20% (ON) and 60% (OFF); both ✅."],
        f:["Tests boundary values and finds bugs.","“At exactly 30 it turns OFF; I checked that's what we want.” Finds the > bug."],
        i:["I can try my program.","I can test both branches.","I can test boundaries and find bugs."] }
    ],
    plan:{
      prior:"Students know sequence (Week 6) and loops (Week 7). They know pivots (Weeks 1, 5) and the dry plains (Week 5).",
      kc:["Thinking","Managing self"],
      sequence:[
        ["0–6","Field Note","Liv's message. Trig Check (Wednesday). LI/SC.","Recall; predict."],
        ["6–18","Survey","Events; decisions; **Smart Irrigator**; test tables.","Predict; test; debug."],
        ["18–38","Choose Your Path","Introduce A/B/C. Roam: “What's the condition? Did you test both branches?”","Flowchart / Scratch / test plan."],
        ["38–45","Through the Lens","James 1:5 — four moves.","Discuss; ask for wisdom."],
        ["45–50","Trig Clue & Exit","Trig Clue 4 (answer 2); self-assessment; wheat sheaves.","Solve; self-assess."]
      ],
      diff:{
        supported:"Printed blocks; flowchart template; test frame.",
        esol:"Act out if/else (if I hold up a red card, sit; else, stand).",
        learning:"Unplugged flowchart; partner coding; calm screen available.",
        flying:"Combined conditions; boundary testing."
      },
      assess:{
        lookFor:["Uses an event","Writes if/else","Tests both branches"],
        evidence:["Test tables","Path products (screenshots)","Exit self-assessment"]
      },
      inquiry:["Who tested the boundary (exactly 30)?","Smart Farm projects: who can add a decision?","Device time needed for the Week 10 showcase."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"liv", meta:"Pivot paddock · drizzle",
        msg:"It's **drizzling**, and the pivot is still **watering**! That's wasting water and money. The farm has a new **soil sensor** that measures how wet the ground is. Can we program the pivot to **decide** for itself when to water?",
        notes:[["SAY","Read the message. 🟡 Liv is fictional."],["ASK","“What should the pivot check before it waters?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"What is a galaxy?", a:"A huge group of billions of stars, gas and dust, held together by gravity." }, { q:"What is the Māori name for the Milky Way?", a:"Te Ikaroa." }, { q:"Name two galaxies we can see from Aotearoa.", a:"The Large and Small Magellanic Clouds (and the Milky Way)." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"New blocks", title:"Events & *decisions*", h:"480px",
        cards:[ { icon:"⚡", t:"Event", d:"Something that **starts** code: **when ▶ clicked**, **when a key is pressed**, **when a sensor reading changes**." }, { icon:"🔀", t:"If / else", d:"**If** the condition is true, do this. **Else**, do that. Two paths: **two branches**." }, { icon:"🧪", t:"Test table", d:"Try inputs that should go **each way**, and one **right on the line** (the boundary)." } ],
        notes:[["CLICK","Unplugged: “If I hold up a red card, sit down. Else, stand up.” Try it a few times."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Decide when to water", title:"Smart Irrigator", ix:"smartirrigator",
        notes:[["CLICK","Press ‘Test 20%’ and ‘Test 60%’ to fill the test table. Then turn on ‘🐞 Buggy’ and test again. ‘▶ Run a day’ lets the program run itself; try the nor'wester."],["CLICK","→ steps: test 20%, test 60%, buggy test."],["ASK","With the bug: “Which symbol is wrong? How did the test table show it?” (> instead of <.)"]] },
      { type:"brief", phase:"excavate", fs:null, title:"Program a smart irrigator",
        stakeholder:"**Liv**, who wants to save water and only irrigate when the soil is dry.",
        need:"A **Scratch program** that turns watering **ON** when moisture is **below 30**, and **OFF** otherwise.",
        specs:["Starts with an event.","Uses if/else with the condition ‘moisture < 30’.","Tested with a test table (both branches and the boundary)."],
        notes:[["SAY","“Path B builds to this brief; Path C tests it.”"]] },
      { type:"paths", phase:"paths", fs:null, minutes:18,
        notes:[["SAY","“Choose your path. Test both branches!”"],["CLICK","Start the 18-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read James 1:5."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 2."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess. Devices away."],["CLICK","C = wheat sheaves."]] }
    ]
  };

  /* ======================= FRIDAY · ART ======================= */
  const fri = {
    id:"w08-fri", week:8, day:"fri", subject:"art", duration:50,
    title:"Patchwork Plains: Aerial Collage", guide:"tom",
    codes:["VA-PK","VA-DI","VA-CI"],
    coverage:"Visual Arts (NZC 2007, Level 3): developing practical knowledge (collage: shape, colour, texture, overlap); developing ideas (abstracting the plains from above); communicating and interpreting (peer critique).",
    li:"We are learning to make an aerial collage of the plains using shape, colour and texture.",
    sc:["I can choose a colour scheme for the plains.","I can cut, tear and overlap shapes to make a collage.","I can give helpful feedback using art words."],
    vocab:[
      { w:"collage", def:"art made by sticking pieces of paper or other materials onto a surface" },
      { w:"overlap", def:"when one shape partly covers another" },
      { w:"texture", def:"how a surface looks or feels: rough, smooth, lined, dotted" },
      { w:"colour scheme", def:"a set of colours chosen to work together" },
      { w:"composition", def:"how the parts of an artwork are arranged" },
      { w:"critique", def:"thoughtful feedback on an artwork" }
    ],
    prep:{ min:15, items:["Coloured paper (greens, golds, browns, blues), magazines, tissue paper","Glue sticks, scissors, A3 card","Optional: crayons or textured surfaces for rubbings"] },
    safety:["Scissors rules. Glue sticks only."],
    tikanga:["Students make their own paddock patterns. No Māori designs as decoration (§17.4)."],
    hononga:"**Lines on the land.** The straight fences and paddocks seen from the air were drawn by surveyors on land that Kāi Tahu knew by its rivers, trails and food places (Weeks 2–6). A collage can show both: the grid and the braided river that doesn't follow it.",
    paths:[
      { id:"A", name:"The Recorder", product:"Colour Study", steps:["Make **4 small colour studies** of the plains: **summer, spring, autumn** and a **flat-colour** version (like Rita Angus, Week 2).","Use squares of paper or paint.","Write which **scheme** feels most like Hakatere, and why."], flying:"Explain how colour can show the season and the weather." },
      { id:"B", name:"The Maker", product:"Paddock Collage", steps:["Cut or tear **paddock shapes** and **overlap** them on A3 card.","Add **texture**: lines for crops, dots for stock, circles for **pivots**.","Add the **braided river** and **shelter belts**."], flying:"Leave one area plain so the eye can rest. Keep this for the triptych!" },
      { id:"C", name:"The Critic", product:"Peer Critique", steps:["Look at **two collages**.","Give each **one warm** and **one cool**, using **shape, colour, texture, overlap**.","Report what you learned to the class."], flying:"Explain which collage shows the plains most clearly from above, and why." }
    ],
    supportedShort:"pre-cut paddock shapes, a 4-colour palette card, a warm/cool feedback card.",
    lens:{
      pillar:"aroha", title:"Boundary lines in pleasant places",
      look:"Look again at the patchwork: boundaries, paddocks, the river running through it all.",
      ref:"Psalm 16:6",
      paraphrase:"The boundary lines have fallen for me in pleasant places; I have a beautiful inheritance.",
      talk:[
        { q:"David thanks God for the place he lives. What do you thank God for about our place?", listen:"Mountains; the river; farms; family; friends; school; the sky." },
        { q:"An inheritance is passed on to the next generation. What should we pass on about Hakatere?", listen:"Clean rivers; true stories; both names; care for the land; welcome." }
      ],
      live:"Gallery walk: tell a classmate which **paddock** in their collage you like best, and why."
    },
    clue:{ prompt:"Friday's clue is the Survey Seal: combine this week's four Trig Clues.", answer:19, explain:"4 + 11 + 2 + 2 = 19 → bearing 019°." },
    next:"Next week — Sheet IX · Making It Right: the names restored, and the field book's last entry.",
    rubric:[
      { c:"Colour", code:"VA-PK",
        d:["Uses random colours.","Bright colours with no plan."],
        a:["Chooses a colour scheme for the plains.","Golds, greens and browns for a summer plain."],
        f:["Uses colour to show season or mood, and explains it.","“I used autumn browns to show the dry nor'wester.”"],
        i:["I can use colours.","I can choose a colour scheme.","I can use colour to show mood and explain it."] },
      { c:"Shape & overlap", code:"VA-PK · VA-DI",
        d:["Glues shapes side by side.","Squares in rows."],
        a:["Cuts, tears and overlaps shapes with texture.","Irregular paddocks overlap; lines and dots add texture."],
        f:["Composes with a focal point and a resting area.","The braided river leads the eye; one plain area rests it."],
        i:["I can glue shapes.","I can overlap shapes with texture.","I can compose with a focal point."] },
      { c:"Critique", code:"VA-CI",
        d:["Says it's nice.","“It's nice.”"],
        a:["Gives a warm and a cool using art words.","“Warm: your overlaps look like real paddocks. Cool: add texture to the crops.”"],
        f:["Gives specific, kind feedback linked to the aim.","Links feedback to how the plains look from above."],
        i:["I can say what I like.","I can give a warm and a cool with art words.","I can give specific feedback linked to the aim."] }
    ],
    plan:{
      prior:"Students have used flat colour (Week 2), line and pattern from above (Week 4) and printmaking (Week 7). They know pivots and shelter belts.",
      kc:["Managing self","Relating to others"],
      sequence:[
        ["0–6","Field Note","Tom's message. Trig Check (Thursday). LI/SC.","Recall; look."],
        ["6–18","Survey","Patchwork from above; **Patchwork Plains**; method demo.","Try; plan."],
        ["18–40","Choose Your Path (22 min)","Introduce A/B/C. Roam: “Where's your texture? What overlaps?”","Colour study / collage / critique."],
        ["40–45","Through the Lens","Psalm 16:6 — gallery reflection.","Gallery walk."],
        ["45–50","Survey Seal & Dealer","Survey Seal VIII: 4 + 11 + 2 + 2 = 19 → 019°. The Dealer returns Sheet VII. Self-assess; wheat sheaves.","Add; dial; discuss."]
      ],
      diff:{
        supported:"Pre-cut shapes; palette card; feedback card.",
        esol:"Model silently, then name; art words on cards.",
        learning:"Tearing instead of cutting; larger pieces; calm screen available.",
        flying:"Focal point and resting area; colour and mood."
      },
      assess:{
        lookFor:["Chooses a colour scheme","Overlaps shapes with texture","Gives warm and cool feedback"],
        evidence:["Collages (photograph)","Critique comments","Exit self-assessment"]
      },
      inquiry:["Which collages go in the triptych folder?","Next week is triptych build week: does everyone have Land, River and Sky pieces?","How did the class react to the Dealer's return of Sheet VII?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"tom", meta:"Small plane · over the plains",
        msg:"Up in the plane again! Below us the plains look like a **patchwork quilt**: gold and green squares, dark lines of **shelter belts**, round green **pivot circles**, and the grey **braided river** wandering through it all. Let's **cut and tear** it into a collage.",
        notes:[["SAY","Read the message. 🟡 Tom is fictional."],["ASK","“If you could fly over our school, what shapes would you see?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"What is an event in coding?", a:"Something that starts code running (a click, a key, a sensor)." }, { q:"What does if/else do?", a:"If the condition is true, do one thing; else, do another." }, { q:"Why test exactly 30?", a:"It's the boundary: it checks the program does what we want right on the line." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"interactive", phase:"excavate", fs:"real", paper:true, kicker:"Design from above", title:"Patchwork Plains", ix:"patchwork",
        notes:[["CLICK","Tap paddocks to change colours; try ‘Palette’, ‘Pivots’ and ‘Shelter belts’. (→ steps through palettes.)"],["ASK","“Which palette looks most like Hakatere in summer? In a nor'wester?”"]] },
      { type:"content", phase:"excavate", fs:null, paper:true, kicker:"Your turn", title:"Make a *paddock collage*",
        bullets:["Choose a **colour scheme** (4–6 colours).","**Cut or tear** paddock shapes; **overlap** them.","Add **texture**: lines for crops, dots for stock, circles for pivots.","Add the **braided river** last, wandering through the grid."],
        visual:{ artefact:"pivot" },
        notes:[["SAY","Model the first few shapes in 2 minutes."]] },
      { type:"paths", phase:"paths", fs:null, minutes:22,
        notes:[["SAY","“Choose your path. Path B: keep it flat for the triptych.”"],["CLICK","Start the 22-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move. 5-minute gallery reflection."],["SAY","Read Psalm 16:6."]] },
      { type:"folioseal", phase:"decode", fs:"story",
        notes:[["SAY","“Four clues. Add them to get the bearing.”"],["CLICK","Tap each ‘?’ tile. 4 + 11 + 2 + 2 = 19. Dial 019° and press ‘Fix the bearing’."],["SAY","Read the reveal: the great flood and the ‘stopbank?’ line."]] },
      { type:"intercept", phase:"decode", fs:"story",
        msg:"Restoration team. Here is your Sheet VII. I'm afraid some water got to it in the flood. No trade needed… for now. Enjoy your map while you have it. — D.",
        ask:"Why would the Dealer give Sheet VII back? Can we trust him?",
        notes:[["SAY","Read it in the Dealer's smooth voice. 🟡 Show students the ‘water-damaged’ Sheet VII if you've made a prop."],["ASK","“He says ‘for now’. What might he be planning?”"],["LISTEN","He wants us to trust him; he wants the whole set; he might be planning to take it all; he damaged it; we should protect the map."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess. Celebrate Sheet VIII, and Sheet VII's return!"],["CLICK","C = wheat sheaves. Store collages flat."]] }
    ]
  };

  BM.WEEKS[8] = {
    n:8,
    story:"Sheet VIII shows a great flood and a pencilled line marked ‘stopbank?’. This week historians study the May 2021 Hakatere flood and how the community recovered; geographers compare Mt Kinabalu with our Alps; astronomers zoom out to Te Ikaroa and other galaxies; coders build a smart irrigator with if/else; and artists collage the patchwork plains. On Friday the seal cracks, and the Dealer returns Sheet VII, water-damaged.",
    hononga:"Iwi among the flood recovery partners; living with a braided river (Mon) · mountains that are sacred, like Aoraki (Tue) · Te Ikaroa (Wed) · rivers as taonga and sharing water (Thu) · the grid and the river (Fri). Check all local framing with your Māori lead and Te Rūnanga o Arowhenua (D3).",
    seal:{
      answer:19,
      instruction:"Add the four **Trig Clues** from Monday to Thursday. The total is a **bearing**. Dial it on the theodolite to crack the wax seal.",
      reveal:"🟡 **Sheet VIII restored:** the river spread wide in a **great flood**, with water stains, a note *water to here*, and a red pencil line along the bank: **stopbank?** Next week: *Making It Right*.",
      art:() => { const v = BM.art.sheetArt(8); v.setAttribute("style", "width:100%;height:100%"); return v; }
    },
    lessons:[mon, tue, wed, thu, fri]
  };
})(window.BM);
