/* ==========================================================
   WEEK 2 — FOLIO II · CHILDREN OF MAIZE
   ========================================================== */
(function(FC){
  "use strict";

  /* ======================= MONDAY · HISTORY ======================= */
  const mon = {
    id:"w02-mon", week:2, day:"mon", subject:"history", duration:50,
    title:"From Olmec to Maya: Maize & the First Cities", guide:"itzel",
    codes:["SS-H","SS-E","SS-P","RE"],
    coverage:"Y5 History (2027 Social Sciences, Years 4–6): an ancient civilisation through farming, daily life and religion; cause and consequence (farming surplus → specialisation → cities); comparing societies. Y6 Economic Activity link: specialisation.",
    li:"We are learning to explain how farming maize allowed the Olmec and Maya to build the first cities.",
    sc:["I can explain how maize was developed from a wild grass and grown in a milpa.","I can explain how a food surplus leads to specialist jobs and cities.","I can compare two creation accounts (the Popol Vuh and Genesis) respectfully."],
    vocab:[
      { w:"maize", say:"mayz", def:"corn — the main crop of Mesoamerica" },
      { w:"teosinte", say:"tay-oh-SIN-tay", def:"the wild grass that maize was bred from" },
      { w:"domesticate", def:"to change a wild plant or animal, over many generations, to suit people" },
      { w:"milpa", say:"MEEL-pah", def:"a field growing maize, beans and squash together" },
      { w:"surplus", def:"extra — more food than people need right now" },
      { w:"specialist", def:"someone who does one job full-time (potter, scribe, builder)" },
      { w:"Olmec", say:"OHL-mek", def:"early Mesoamerican civilisation, c. 1200–400 BCE" },
      { w:"Popol Vuh", say:"POH-pol VOO", def:"a sacred book of the K'iche' Maya, written down in the 1550s" }
    ],
    prep:{ min:3, items:["Expedition Journals","Optional: a real corn cob (or popcorn kernels) to pass around","Optional: dried beans and a squash/pumpkin for the milpa display"] },
    safety:["If passing around food items, check for allergies; no eating."],
    hononga:"Māori gardeners grew **kūmara** with great skill, timing planting and harvest by the **maramataka** (the lunar calendar) and storing the crop in **rua** (storage pits) — a surplus that carried whānau through winter. Like maize for the Maya, kūmara was a taonga crop surrounded by deep knowledge. Teaser: kūmara itself first came from **South America** (Week 8!).",
    paths:[
      { id:"A", name:"The Scribe", product:"Farmer's Almanac Page", steps:["Draw and label a milpa: maize, beans, squash.","Explain how each plant helps the others.","Write how a big harvest let some people become specialists."], flying:"Explain one risk of depending on a single crop like maize." },
      { id:"B", name:"The Builder", product:"‘Food to City’ Flow Chart", steps:["Make a chain of 5 boxes: wild grass → maize → milpa → surplus → city.","Draw a picture in each box.","Add a ‘because’ arrow label between every box."], flying:"Add a branch: what happens to the city if the rains fail?" },
      { id:"C", name:"The Messenger", product:"Village Council Role-Play", steps:["In a group of 4, you are a village council with a huge harvest.","Decide: who stops farming to become a potter, builder, scribe or priest?","Present your decision and your reasons to the class."], flying:"Argue whether it's fair that rulers ate the surplus but didn't farm." }
    ],
    supportedShort:"flow-chart template with pictures; word bank (surplus, specialist, milpa); partner talk before writing.",
    lens:{
      pillar:"mohio", title:"Made from maize… or made in His image?",
      look:"Look at the maize again: the Maya believed it was so precious that people themselves were made from it. The Popol Vuh tells how the gods tried making people from mud, then wood, and finally from maize dough.",
      ref:"Genesis 2:7; Psalm 65:9–13",
      paraphrase:"The Lord God formed a man from the dust of the ground and breathed into his nostrils the breath of life… You care for the land and water it; You provide the people with grain.",
      talk:[
        { q:"In the Popol Vuh, the gods made people so that someone would praise and feed them. In Genesis, God breathes His own life into people. What does each story say about why people exist?", listen:"Popol Vuh: people made to serve and remember the gods. Genesis: God makes people out of love, shares His own breath/life, gives them a garden to care for — He doesn't need us, He wants us." },
        { q:"Psalm 65 says God waters the land and provides the grain. How might a Christian farmer in the Maya lands today thank God for the maize harvest?", listen:"Prayer, generosity, sharing the harvest, caring for the soil, thanking God rather than taking the harvest for granted." }
      ],
      live:"Write a short **thank-you prayer** for one food that grows in the ground — and the farmers who grow it."
    },
    clue:{ prompt:"How many different plants grow together in a traditional milpa?", answer:3, explain:"Maize, beans and squash = 3. Clue saved for Friday!" },
    next:"Tuesday — the Ring of Fire. Why do Mexico, Chile and Aotearoa all shake?",
    rubric:[
      { c:"Maize & the milpa", code:"SS-H · SS-E",
        d:["Names maize as a Maya food.","“The Maya ate corn.”"],
        a:["Explains maize was bred from teosinte and grown in a milpa with beans and squash.","“Farmers chose the biggest seeds for thousands of years until teosinte became maize. They grew it with beans and squash in a milpa.”"],
        f:["Explains how the milpa plants help each other or the long-term change.","“Beans put goodness (nitrogen) back in the soil and climb the maize, and squash leaves shade out weeds — a team.”"],
        i:["I can say the Maya grew maize.","I can explain how maize came from teosinte and what a milpa is.","I can explain how the milpa plants help each other."] },
      { c:"Surplus → specialists → cities", code:"SS-H · SS-P",
        d:["Says cities grew.","“They built a city.”"],
        a:["Explains cause and consequence from surplus to specialists to cities.","“Extra food meant not everyone had to farm, so some people became builders and scribes, and villages grew into cities.”"],
        f:["Explains consequences or risks of this change.","“Specialists needed farmers to keep producing extra — so a long drought could bring the whole city down.”"],
        i:["I can say cities grew.","I can explain how extra food led to specialists and cities.","I can explain a risk or consequence of relying on a surplus."] },
      { c:"Comparing creation accounts", code:"SS-P · RE",
        d:["Retells part of one story.","“In the Popol Vuh people were made from corn.”"],
        a:["Compares the two accounts respectfully with a similarity and a difference.","“Both say people were made from the earth. In the Popol Vuh the gods needed praise; in Genesis God breathed life into people out of love.”"],
        f:["Explains what each account shows about the value of people, respectfully.","“Genesis says every person carries God's breath and image — so the Maya people themselves had great worth to God.”"],
        i:["I can retell part of a story.","I can share a similarity and a difference, respectfully.","I can explain what each story says about how valuable people are."] }
    ],
    plan:{
      prior:"Week 1: who/when/where of the Olmec, Maya and Aztecs; primary and secondary sources. Many students eat corn but won't know it is a Mesoamerican invention.",
      kc:["Thinking","Using language, symbols & texts","Relating to others"],
      sequence:[
        ["0–6","Field Transmission","Dr Canul reveals Folio I's maize glyph; Glyph Check (Week 1 recall); LI/SC.","Recall; predict why maize matters."],
        ["6–18","Excavate","Teosinte → maize slider; the milpa; surplus simulator (toggle farming improvements); Olmec & Preclassic cities; Hononga Aotearoa (kūmara).","Predict, vote, explain cause → effect."],
        ["18–38","Choose Your Path","Paths A/B/C; roam with the rubric: “What happened BECAUSE of the surplus?”","Almanac / flow chart / council role-play."],
        ["38–45","Through the Lens","Popol Vuh & Genesis 2:7; Psalm 65 — four moves.","Compare respectfully; thank-you prayer."],
        ["45–50","Decode & Exit","Glyph Clue (milpa = 3); self-assess; cacao beans.","Solve; self-assess."]
      ],
      diff:{
        supported:"Flow-chart template with picture prompts; sentence starters (“Because farmers had extra food…”); pair reading of the milpa slide.",
        esol:"Real objects (corn, beans, squash) labelled; gestures for ‘surplus’ (overflowing basket); bilingual labels welcome (maíz, frijol, calabaza).",
        learning:"Hands-on objects; drawing option; role-play roles with scripted cards.",
        flying:"Investigate the risks of depending on one crop; compare with the potato in the Andes or kūmara in Aotearoa."
      },
      assess:{
        lookFor:["Accurate account of teosinte → maize and the milpa","A cause → consequence chain from surplus to cities","A respectful comparison of the two creation accounts with a similarity and a difference"],
        evidence:["Path products (photograph)","Surplus-simulator predictions","Journal prayer / comparison sentence","Exit self-assessment"]
      },
      inquiry:["Could students explain ‘surplus’ in their own words? If not, revisit with the Week 7 market.","How did students handle comparing a sacred Maya text with Genesis? Note any comments to follow up with care.","Which students chose the role-play, and did it deepen their cause–consequence reasoning?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"itzel", meta:"Folio I · corner glyph",
        msg:"Kia ora, team. Look closely at the corner of Folio I — a **maize** glyph. For the Maya, maize wasn't just food. Their sacred stories say **people were made from it**. If we want to read this codex, we must understand why one plant was so important that it built whole cities.",
        notes:[["SAY","Read the message. Show a real corn cob if you have one."],["ASK","“How many foods can you think of that are made from corn?” (Tortillas, popcorn, cornflakes, corn chips, polenta…)"]] },
      { type:"glyphcheck", phase:"transmission", fs:"real", title:"Remember Week 1?", qs:[
          { q:"Put these in order: Aztec, Olmec, Maya.", a:"Olmec → Maya → Aztec. (And Maya people still live today!)" },
          { q:"Is a codex a primary or secondary source?", a:"Primary — made by Maya scribes at the time." },
          { q:"Which region did the Maya live in: Mesoamerica or South America?", a:"Mesoamerica — southern Mexico and Central America." }],
        notes:[["SAY","Mini-whiteboards; show on 3."],["CLICK","→ flips each card."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and SC."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"An invention that fed the world", title:"From grass to maize", ix:"maize",
        notes:[["SAY","“About 9,000 years ago, farmers in southern Mexico started with a wild grass called teosinte. Its ‘ear’ was tiny, with a few rock-hard seeds.”"],["CLICK","Drag the slider slowly from left to right while you talk."],["ASK","“How do you think farmers turned this into maize — with no science labs?”"],["LISTEN","Saving and replanting seeds from the best plants, year after year, for thousands of years (domestication / selective breeding)."],["DEEPER","“Maize can't grow wild any more — it needs people to plant it. Why might that be?” (The husk stops the seeds scattering.)"]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Three sisters in one field", title:"The milpa", h:"560px", cards:[
          { icon:"🌽", t:"Maize", d:"Grows tall and strong — it's the **pole** the beans climb up." },
          { icon:"🫘", t:"Beans", d:"Climb the maize and put **nitrogen** (plant food) back into the soil." },
          { icon:"🎃", t:"Squash", d:"Big leaves **shade the ground**, keeping it damp and blocking weeds." },
          { icon:"🍽️", t:"A complete diet", d:"Together, maize and beans give the protein people need. Milpa farming is **still practised** today." }],
        notes:[["SAY","“A milpa grows maize, beans and squash together. Each plant helps the others — a team, not competitors.”"],["ASK","“Which plant would you be in the milpa? Why?” (fun 30-second turn & talk)"],["NOTE","Many people call these the ‘three sisters’ (a phrase from Haudenosaunee/Iroquois tradition in North America); in Mesoamerica the field is called a **milpa**."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Cause & consequence", title:"Food → free time → cities", ix:"surplus",
        notes:[["SAY","“In this village of 12 people, everyone farms just to survive.”"],["CLICK","Turn on one improvement at a time: milpa → raised fields → storage. Before each, ask: “What will change?”"],["SAY","“A SURPLUS — extra food — means some people can stop farming and become SPECIALISTS: potters, builders, scribes, priests… and rulers.”"],["ASK","“Is it fair that some people stopped farming? Who decides?”"],["LISTEN","Specialists still needed food from farmers; rulers took tribute; it can be fair if everyone contributes."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"The first cities", title:"From the Olmec to El Mirador", visual:{ artefact:"olmec" },
        bullets:["**Olmec** (c. 1200–400 BCE): big ceremonial centres like **San Lorenzo** and **La Venta**, giant stone heads and the first pyramid mounds.","Maize surplus let the **Maya** build cities too. **El Mirador** (Preclassic, about 2,000 years ago) has one of the biggest pyramids on Earth: **La Danta**.","With specialists came **writing, calendars, kings** and trade."],
        notes:[["SAY","“Surplus → specialists → cities. That pattern is how the first cities in the Americas began.”"],["ASK","“What specialist jobs can you see clues of in a city like El Mirador?” (Builders, stonemasons, engineers, scribes, rulers.)"],["PACE","Aim to be at about minute 16."]] },
      { type:"hononga", phase:"excavate", fs:"real", title:"Kūmara, the maramataka & the rua",
        body:"Māori gardeners grew **kūmara** with great skill — planting and harvesting by the **maramataka** (the Māori lunar calendar) and storing the crop in **rua** (storage pits) to last through winter.\n\nThat stored surplus is the same idea as the Maya maize harvest: food that lets a community plan, build and gather.\n\nAnd a mystery for Week 8: kūmara first came from **South America**…",
        notes:[["SAY","Read or summarise."],["ASK","“How is a rua like a Maya granary?”"],["NOTE","Check with your Māori lead for local Canterbury/Ngāi Tahu examples of kūmara gardening and food storage (e.g. kai stored for mahinga kai seasons)."]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAY","Explain the three paths."],["CLICK","Start the timer."],["NOTE","Push for ‘because’: every link in the chain needs a reason."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","→ reveals each move."],["SAY","“The Popol Vuh is a sacred book of the K'iche' Maya, written down in the 1550s. Maya people today still value it, so we treat it with respect — just as we'd want people to treat the Bible with respect.”"],["SAY","Read Genesis 2:7 and Psalm 65:9–13 from your Bible."],["ASK","Use both questions."],["IF","A student mocks the Popol Vuh → “We can disagree respectfully. What does Genesis say about how valuable those Maya people were to God?”"]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["ASK","“How many plants grow in a milpa?” (3)"],["CLICK","3 dots → Check."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = cacao beans."]] }
    ]
  };

  /* ======================= TUESDAY · GEOGRAPHY ======================= */
  const tue = {
    id:"w02-tue", week:2, day:"tue", subject:"geography", duration:50,
    title:"Land of Fire & Stone: the Ring of Fire", guide:"sofia",
    codes:["SS-G","SS-P","SC-ES"],
    coverage:"Y5 Geography (2027 Social Sciences): tectonic hazards — earthquakes, volcanoes and tsunami; causes and effects; NZ connections. Practices: interpreting maps and diagrams; case study of a natural disaster (1960 Chile).",
    li:"We are learning to explain how moving tectonic plates cause volcanoes, earthquakes and tsunami in Latin America.",
    sc:["I can explain what tectonic plates are and what happens at a subduction zone.","I can describe the causes and effects of one hazard (earthquake, volcano or tsunami).","I can explain how a hazard in Latin America is connected to Aotearoa."],
    vocab:[
      { w:"tectonic plate", def:"a giant slab of Earth's outer shell that slowly moves" },
      { w:"subduction", say:"sub-DUK-shun", def:"when one plate slides under another" },
      { w:"Ring of Fire", def:"the horseshoe of volcanoes and earthquakes around the Pacific" },
      { w:"magma", def:"melted rock underground (called lava when it erupts)" },
      { w:"magnitude", def:"a number showing how much energy an earthquake releases" },
      { w:"tsunami", say:"soo-NAH-mee", def:"giant sea waves caused by an earthquake or landslide under the sea" },
      { w:"hazard", def:"a natural event that could harm people" },
      { w:"Popocatépetl", say:"poh-poh-kah-TEH-peh-tl", def:"an active volcano near Mexico City (Nahuatl: ‘smoking mountain’)" }
    ],
    prep:{ min:2, items:["Optional: a world map or atlas","Know your school's tsunami / earthquake drill (Path C)"] },
    safety:["Sensitive topic: some Canterbury whānau have lived experience of the 2010–2011 earthquakes. Give a calm heads-up at the start, focus on helpers and preparedness, show no disaster footage, and let students step out or choose another path if needed."],
    hononga:"Aotearoa sits on the Ring of Fire too — on the boundary of the Pacific and Australian plates. Ruapehu and Tongariro are active volcanoes, and Canterbury knows earthquakes well. The **1960 tsunami from Chile** reached our harbours. In Māori tradition, **Rūaumoko** is associated with earthquakes and volcanoes. Civil Defence advice for a long or strong quake near the coast: **“Long or strong, get gone.”**",
    paths:[
      { id:"A", name:"The Scribe", product:"Hazard Fact File", steps:["Choose one hazard: earthquake, volcano or tsunami.","Explain its CAUSE (what the plates do) with a labelled diagram.","List 3 EFFECTS on people, and 2 ways people stay safe."], flying:"Compare your hazard in Chile or Mexico with the same hazard in Aotearoa." },
      { id:"B", name:"The Builder", product:"Layered Paper Subduction Model", steps:["Use two strips of card: one ocean plate, one continental plate.","Slide the ocean plate underneath and crumple paper ‘mountains’ on top.","Label: plate names, subduction, mountains, volcano, magma."], flying:"Add an arrow showing where an earthquake would start, and why." },
      { id:"C", name:"The Messenger", product:"Civil Defence Broadcast", steps:["Plan a 60-second emergency broadcast for a coastal town after a big quake.","Explain why a tsunami might come, and what to do.","Include the NZ message: ‘Long or strong, get gone.’"], flying:"Explain why a tsunami from Chile could reach Aotearoa." }
    ],
    supportedShort:"diagram template with labels to place; word bank; partner for the broadcast.",
    lens:{
      pillar:"manaaki", title:"Though the mountains quake",
      look:"Look at the moving plates — huge forces we can't control. Yet after disasters, people from other countries come to help.",
      ref:"Psalm 46:1–3; Luke 10:36–37",
      paraphrase:"God is our refuge and strength, an ever-present help in trouble. So we will not fear, though the earth give way and the mountains fall into the sea… (Jesus:) ‘Which one was a neighbour to the man?’ ‘The one who had mercy.’ ‘Go and do the same.’",
      talk:[
        { q:"Psalm 46 talks about the earth shaking — yet says ‘we will not fear’. How can people trust God when frightening things happen?", listen:"God is with us; He is bigger than the danger; we can pray; it's OK to feel scared and still trust; God often helps through other people." },
        { q:"After the 2011 Christchurch earthquake, rescue teams came from Japan, Australia, the USA, the UK and more. How is that like the Good Samaritan?", listen:"Strangers from far away showed mercy; being a neighbour isn't about living next door; we can help others in disasters too (Manaaki)." }
      ],
      live:"As a class, write one way our school could **be a neighbour** to people affected by a disaster (pray, give, write cards, learn safety)."
    },
    clue:{ prompt:"The 1960 Chile earthquake measured magnitude 9.5. Round 9.5 to the nearest whole number.", answer:10, explain:"9.5 rounds up to 10 → two bars (▬▬). Clue saved!" },
    next:"Wednesday — electric eels and potato batteries!",
    rubric:[
      { c:"Plates & subduction", code:"SS-G · SC-ES",
        d:["Says the ground moves.","“Earthquakes happen when the ground shakes.”"],
        a:["Explains plates and what happens at a subduction zone.","“The Nazca plate slides under the South American plate. That pushes up the Andes and makes volcanoes.”"],
        f:["Links subduction to several hazards and to the Ring of Fire.","“The same subduction makes mountains, volcanoes, quakes AND tsunami — that's why they ring the Pacific.”"],
        i:["I can say the ground moves.","I can explain plates and subduction.","I can link subduction to several hazards around the Pacific."] },
      { c:"Causes & effects of a hazard", code:"SS-G · SS-P",
        d:["Names a hazard.","“Volcanoes erupt.”"],
        a:["Describes the cause and at least two effects of one hazard.","“Stuck plates suddenly slip → earthquake → buildings fall and a tsunami can form.”"],
        f:["Explains effects on people and how risk can be reduced.","“Building codes, warning systems and drills save lives — Chile and NZ both use them.”"],
        i:["I can name a hazard.","I can explain a hazard's cause and effects.","I can explain how people reduce the danger."] },
      { c:"Connection to Aotearoa", code:"SS-G",
        d:["Says NZ has earthquakes.","“We get earthquakes too.”"],
        a:["Explains a specific connection between Latin America and NZ.","“The 1960 tsunami from Chile crossed the Pacific and reached NZ harbours.”"],
        f:["Uses the connection to explain why NZ needs warnings and preparation.","“Because a far-away quake can send a tsunami here, NZ needs a Pacific warning system and drills.”"],
        i:["I know NZ has earthquakes.","I can explain a real link between Latin America and NZ.","I can use that link to explain why NZ prepares."] }
    ],
    plan:{
      prior:"Week 1 map skills and the Pacific map. Canterbury students may have strong prior knowledge (and feelings) about earthquakes.",
      kc:["Thinking","Participating & contributing","Managing self"],
      sequence:[
        ["0–6","Field Transmission","Sensitive-topic heads-up; Capt. Quispe's message; Glyph Check; LI/SC.","Recall; share what they know calmly."],
        ["6–18","Excavate","Ring of Fire map talk; Plate Slide (5 steps); the 1960 tsunami across the Pacific; Popocatépetl & Andes facts.","Predict; explain cause → effect."],
        ["18–38","Choose Your Path","Paths; check diagrams for correct plate direction.","Fact file / model / broadcast."],
        ["38–45","Through the Lens","Psalm 46 & the Good Samaritan.","Discuss; class ‘neighbour’ action."],
        ["45–50","Decode & Exit","Clue (9.5 → 10); self-assess.","Solve; self-assess."]
      ],
      diff:{
        supported:"Labels to cut and stick on a diagram; sentence frames (“The cause is… One effect is…”); teacher-led group.",
        esol:"Physical model with hands (two hands sliding); visual word cards; Spanish-speaking students may know terremoto, volcán, maremoto/tsunami.",
        learning:"Hands-on paper model; short chunks; option to opt out of hazard detail if anxious.",
        flying:"Compare Chile and NZ preparedness; research the Pacific Tsunami Warning Center; explain magnitude scales."
      },
      assess:{
        lookFor:["Correct explanation of subduction","Cause → effect chain for one hazard","A specific NZ connection"],
        evidence:["Path products","Plate Slide predictions","Exit self-assessment"]
      },
      inquiry:["Were any students distressed? Follow up privately and inform whānau if needed.","Did students grasp that one process causes several hazards?","How could Path C link with our school's real emergency drills?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"sofia", meta:"Over the Andes",
        msg:"¡Hola, navigators! This week *La Golondrina* flies south along the **Andes**, the longest mountain range on land. Below us are smoking volcanoes — and in my country we feel earthquakes often. Before we fly, you need to understand the **Ring of Fire**. And guess what? Aotearoa is on it too.",
        notes:[["SAFETY","Before the message, say calmly: “Today we're learning about earthquakes and volcanoes. Some of us remember the Christchurch earthquakes, and that's OK. We'll focus on how the Earth works and how people stay safe and help each other. If you need a break, let me know.”"],["SAY","Read Sofía's message."]] },
      { type:"glyphcheck", phase:"transmission", fs:"real", qs:[
          { q:"Name the three plants of the milpa.", a:"Maize, beans and squash." },
          { q:"What is a surplus?", a:"Extra food — more than people need right now." },
          { q:"What wild grass did maize come from?", a:"Teosinte." }],
        notes:[["SAY","Whiteboards; show on 3."],["CLICK","→ flips each card."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and SC."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Pacific hazards", title:"The Ring of Fire", visual:{ svg:() => FC.art.ringOfFire() },
        bullets:["Around the Pacific Ocean is a horseshoe of **volcanoes and earthquakes**: the **Ring of Fire**.","It runs down the Americas — through **Mexico** and the **Andes** — and round to Japan, Indonesia and **Aotearoa**.","Near Mexico City, **Popocatépetl** (Nahuatl: ‘smoking mountain’) is still active."],
        notes:[["ASK","“Find Aotearoa on the ring. Why might it be there?”"],["SAY","“Earth's outer shell is cracked like an eggshell into plates. Where plates meet, the ground shakes and volcanoes form.”"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"How it works", title:"Plates on the move", ix:"plates",
        notes:[["CLICK","Press ‘Push the plates’ through all 5 steps. Pause at each and ask for a prediction first."],["SAY","Use the gesture: right hand flat (continent), left hand (ocean plate) slides under it. Students copy."],["DEEPER","“Why does the OCEAN plate go under, not the continental plate?” (It's heavier/denser.)"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Case study · 22 May 1960", title:"A wave across the Pacific", ix:"tsunami",
        notes:[["SAY","“In 1960, near Valdivia in Chile, the biggest earthquake ever measured struck: magnitude 9.5.”"],["CLICK","Press Play. Watch the wave front cross the Pacific. The clock is an estimate based on the wave's speed in deep ocean."],["ASK","“How long do you think it took to reach Aotearoa?” (Less than a day.)"],["SAY","“That's why we have tsunami warnings in NZ: Long or strong, get gone.”"],["NOTE","Keep the tone factual and calm; focus on warning systems."]] },
      { type:"discussion", phase:"excavate", fs:"real", kicker:"Think it through", q:"Chile, Mexico and Aotearoa all live with earthquakes. What can **people** do to stay safer?", sub:"Think about buildings, warnings, drills, and helping each other.", talk:45,
        notes:[["LISTEN","Strong building codes; warning sirens/apps; drills (Drop, Cover, Hold); emergency kits; plans to move to high ground; neighbours checking on each other."],["SAY","“Chile and New Zealand both have some of the strongest earthquake building rules in the world.”"],["PACE","Aim for minute 18."]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAY","Explain paths. Students who find the topic hard can choose Path B (modelling)."],["CLICK","Start the timer."],["NOTE","Check plate arrows: the ocean plate goes UNDER."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","→ reveals each move."],["SAY","Read Psalm 46:1–3, then Luke 10:36–37 (the end of the Good Samaritan)."],["ASK","Use both questions gently."],["NOTE","Rescue teams from many countries (including Japan, Australia, the USA and the UK) helped in Christchurch in 2011."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["ASK","“Round 9.5 to the nearest whole number.” (10)"],["CLICK","Build 10 = ▬▬ (press +5 twice) → Check."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess. Check in with anyone who seemed unsettled."],["CLICK","C = cacao beans."]] }
    ]
  };

  /* ======================= WEDNESDAY · SCIENCE ======================= */
  const wed = {
    id:"w02-wed", week:2, day:"wed", subject:"science", duration:50,
    title:"Electric Life: Eels, Nerves & Batteries", guide:"mateo",
    codes:["SC-MIE","SC-P"],
    coverage:"Y6 Science (Matter, interactions & energy): energy sources for circuits — chemical energy stored in batteries; cells in series add voltage; an energy source linked to an output device (LED). Science practices: fair testing, measuring, recording.",
    li:"We are learning that electricity can be stored as chemical energy in a battery, and that living things use electricity too.",
    sc:["I can explain how a battery (or cell) stores and releases electrical energy.","I can build or explain a potato/lemon battery and why adding cells in series increases the voltage.","I can describe how electric eels and our nerves use electricity."],
    vocab:[
      { w:"cell", def:"one unit that makes electricity from a chemical reaction (a battery is one or more cells)" },
      { w:"battery", def:"a store of chemical energy that can push an electric current" },
      { w:"volt (V)", def:"the unit for how hard a battery ‘pushes’ the current" },
      { w:"in series", def:"joined one after another in a single line — voltages add up" },
      { w:"electrode", def:"the metal parts (e.g. zinc and copper) where the reaction happens" },
      { w:"electrolyte", def:"the juicy liquid that lets charges move between electrodes" },
      { w:"nerve", def:"a pathway in the body that carries electrical signals" },
      { w:"electrocyte", say:"ee-LEK-troh-site", def:"an electric-eel cell that makes a small voltage" }
    ],
    prep:{ min:10, items:["Potatoes or lemons (1 per group, plus spares)","Galvanised (zinc-coated) nails and copper coins/strips — 1 of each per potato","Crocodile-clip leads (4 per group)","Red LEDs (1 per group)","Optional: a cheap multimeter"] },
    safety:["Food items are for science only — don't eat them afterwards (metal contamination).","Nails can be sharp: push them in carefully, pointing away from hands.","Never connect anything to sockets; potatoes and small batteries only."],
    hononga:"Rongoā and kai knowledge: Māori knew many uses for plants (and the Andes peoples for the potato) long before science explained the chemistry. In our potato battery, the **energy** is stored in chemicals — just like the energy stored in kai that powers our bodies. Ask: what ‘batteries’ power a human?",
    paths:[
      { id:"A", name:"The Scribe", product:"Battery Investigation Report", steps:["Question: does adding more potato cells make the LED brighter?","Test 1, 2, 3 and 4 cells in series; record what the LED does.","Explain your results using the words **cell, series, volts**."], flying:"What would happen if you joined the cells side by side (in parallel) instead? Predict and explain." },
      { id:"B", name:"The Builder", product:"Potato (or Lemon) Battery", steps:["Push a zinc nail and a copper coin into each potato.","Join copper of one to zinc of the next with clip leads.","Connect the ends to an LED (long leg to the copper end). Does it glow?"], flying:"Find the fewest cells that light your LED, and explain why." },
      { id:"C", name:"The Messenger", product:"‘Inventor Interview’ with Volta", steps:["One partner is Alessandro Volta (1800), one is an interviewer.","Explain how electric fish gave him the idea for the first battery.","Explain how his ‘pile’ of cells worked — in series!"], flying:"Link Volta's pile to the electric eel: what's the same?" }
    ],
    supportedShort:"results table pre-drawn; build-step picture cards; partner roles (builder / recorder).",
    lens:{
      pillar:"aroha", title:"Fearfully and wonderfully made",
      look:"Look at the eel: thousands of tiny cells firing together. Now think about you — every heartbeat and every thought travels as a tiny electrical signal along your nerves.",
      ref:"Psalm 139:13–14",
      paraphrase:"You created my inmost being; You knit me together in my mother's womb. I praise You because I am fearfully and wonderfully made; Your works are wonderful, I know that full well.",
      talk:[
        { q:"Your brain sends electrical signals to move your fingers right now. What does that make you think about how God made you?", listen:"Amazing, complex, intentional design; we're precious; awe and thanks." },
        { q:"If every person is ‘wonderfully made’, how should we treat people who are different from us — or ourselves on a bad day?", listen:"With kindness and respect; not putting ourselves or others down (Aroha — Self and Others)." }
      ],
      live:"Write: **“I am wonderfully made because…”** — and one kind thing to say to someone else today."
    },
    clue:{ prompt:"Each potato cell gives about 0.9 volts. A red LED needs about 2 volts. What is the fewest whole cells you need in series?", answer:3, explain:"2 cells = 1.8 V (just short); 3 cells = 2.7 V ✓. Answer: 3. Clue saved!" },
    next:"Thursday — paper circuits: make a glyph that lights up!",
    rubric:[
      { c:"Batteries store energy", code:"SC-MIE",
        d:["Says batteries have power.","“Batteries make it go.”"],
        a:["Explains a cell turns chemical energy into electrical energy, with electrodes and electrolyte.","“The zinc and copper react with the potato juice and push electrons around the circuit.”"],
        f:["Explains energy transfer from start to finish.","“Chemical energy in the cell → electrical energy in the wires → light energy in the LED.”"],
        i:["I can say a battery powers things.","I can explain how a cell makes electricity.","I can explain the energy changes from cell to light."] },
      { c:"Cells in series", code:"SC-MIE · SC-P",
        d:["Builds or tests with help.","Connects one potato with help."],
        a:["Explains that cells in series add their voltages, using results.","“One potato wasn't enough. With 3 in series (2.7 V) the LED glowed.”"],
        f:["Uses results to predict, and explains limits (dim light, small current).","“It's only dim because potatoes give a tiny current, even when the voltage is enough.”"],
        i:["I can build or test with help.","I can explain that cells in series add up their volts.","I can predict results and explain why the light is dim."] },
      { c:"Electricity in living things", code:"SC-MIE",
        d:["Says eels are electric.","“Eels can zap you.”"],
        a:["Describes how eels (many cells in series) and our nerves use electricity.","“An eel stacks thousands of electrocytes in a row, like batteries in series. Our nerves send electrical signals.”"],
        f:["Compares the eel with Volta's pile or a battery pack.","“Volta copied the eel's idea — stack cells in series to get a bigger voltage.”"],
        i:["I know eels are electric.","I can explain how eels and nerves use electricity.","I can compare an eel with a battery pack."] }
    ],
    plan:{
      prior:"Week 1: electricity is moving charge; LEDs need a closed loop and work one way. Many students know batteries ‘go flat’.",
      kc:["Thinking","Managing self","Participating & contributing"],
      sequence:[
        ["0–6","Field Transmission","Mateo's message (flat batteries); Glyph Check; LI/SC; safety.","Recall; read safety."],
        ["6–18","Excavate","Electric eel slider (cells in series); inside a cell (zinc, copper, juice); potato battery builder; Volta's pile.","Predict how many cells; explain."],
        ["18–38","Choose Your Path","Hand out kits; groups build/test; roam with the rubric.","Investigate / build / interview."],
        ["38–45","Through the Lens","Psalm 139:13–14.","Discuss; journal sentence."],
        ["45–50","Decode & Exit","Clue (3 cells); tidy kits; self-assess.","Solve; self-assess."]
      ],
      diff:{
        supported:"Picture build cards; pre-joined leads; partner roles; results table template.",
        esol:"Demonstrate first; label kit parts; numbers-based recording.",
        learning:"Tactile building; clear 3-step cards; option for Path C oral response.",
        flying:"Series vs parallel prediction; research why lemons vs potatoes differ; explain why the light is dim (current)."
      },
      assess:{
        lookFor:["Cell explained as chemical → electrical energy","Series adds voltage, supported by results","Eel/nerve explanation"],
        evidence:["Results tables / photos of builds","Interview recordings","Exit self-assessment"]
      },
      inquiry:["Did every group get an LED to glow? If not, was it connections or cell count?","Who confused voltage with current? Plan a quick ‘push vs flow’ analogy next week.","Did students link the eel to series circuits?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"mateo", meta:"Supply tent",
        msg:"Bad news, team: every spare battery in the camp is **flat**, and the supply boat can't come for days. But I've got a sack of **potatoes**, some copper coins and a box of nails… and the river here is full of animals that make their **own** electricity. Let's find out how!",
        notes:[["SAY","Read Mateo's message."],["ASK","“Which river animal do you think makes electricity?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:"real", qs:[
          { q:"What does an LED need to light up?", a:"A closed loop (complete circuit), with the long leg to +." },
          { q:"Like charges attract or repel?", a:"Repel. Opposite charges attract." },
          { q:"What is subduction?", a:"When one tectonic plate slides under another." }],
        notes:[["SAY","Whiteboards; show on 3."],["CLICK","→ flips."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and SC."]] },
      { type:"safety", phase:"transmission", fs:"real", title:"Kitchen-science safety", items:[
          { icon:"🥔", t:"Science food only", d:"After metal goes in, potatoes and lemons are NOT for eating." },
          { icon:"📌", t:"Careful with nails", d:"Push nails in slowly, pointing away from your hands." },
          { icon:"🔌", t:"Never sockets", d:"We only use potatoes and small batteries. Wall sockets can kill." }],
        notes:[["SAFETY","Read all three rules; ask students to repeat the socket rule."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Living batteries", title:"The electric eel", ix:"eel",
        notes:[["SAY","“Amazon electric eels have thousands of special cells called electrocytes. Each makes only a tiny voltage.”"],["CLICK","Drag the slider slowly to the right — watch the voltage add up."],["ASK","“Why does stacking cells in a row make a bigger zap?”"],["LISTEN","Each cell adds its push; in series, the voltages add up."],["SAFETY","Point out the 230 V comparison: wall sockets are more than enough to kill — never play with them."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Inside a cell", title:"How a battery works", visual:{ svg:() => FC.art.cellDiagram() },
        bullets:["A **cell** has two different metals (**electrodes**), like **zinc** and **copper**…","…and a juicy **electrolyte** between them (potato or lemon juice works!).","A chemical reaction pushes **electrons** from the zinc, through the wire, to the copper — a **current**.","Stored **chemical energy** → **electrical energy**."],
        notes:[["SAY","“A battery is a store of chemical energy. When the circuit is closed, the reaction pushes electrons around.”"],["ASK","“Why does a battery eventually go flat?” (The chemicals get used up.)"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Add cells in series", title:"Potato power", ix:"potato",
        notes:[["ASK","Before each click: “Will this be enough to light the LED?”"],["CLICK","Press ‘+ potato’ one at a time. At 2 cells (1.8 V) it's right on the edge; at 3 it glows."],["SAY","“Each potato cell gives about 0.9 volts. In series, the volts add up.” (Real results vary — that's science!)"],["NOTE","Students will test this for real in Paths A and B."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"A history mystery", title:"How a fish inspired the battery", h:"520px", cards:[
          { big:"1780s", color:"#2E9FB0", t:"Electric fish", d:"Scientists studied **torpedo fish** and eels. How could an animal make electricity?" },
          { big:"1800", color:"#C46A3A", t:"Volta's pile", d:"Alessandro **Volta** stacked discs of zinc, copper and salty cloth — like the fish's cells. The **first battery**!" },
          { big:"Today", color:"#1F7A5A", t:"‘Volt’", d:"The unit **volt** is named after him. Every battery pack is cells in series — just like an eel." }],
        notes:[["SAY","“Volta even called his invention an ‘artificial electric organ’ — he was copying nature!”"],["PACE","Aim for minute 18."]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAY","Explain paths; hand out kits (A and B)."],["CLICK","Start the timer."],["NOTE","Troubleshooting: check copper→zinc between potatoes; LED long leg to the copper end; push metals in deeper; try lemons."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","→ reveals each move."],["SAY","Read Psalm 139:13–14."],["ASK","Use both questions."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["ASK","“0.9 V per cell; the LED needs about 2 V. Fewest whole cells?” (3)"],["CLICK","3 dots → Check."],["SAFETY","Collect nails and dispose of the potatoes (not for eating)."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = cacao beans."]] }
    ]
  };

  /* ======================= THURSDAY · TECHNOLOGY ======================= */
  const thu = {
    id:"w02-thu", week:2, day:"thu", subject:"technology", duration:50,
    title:"Paper Circuits: Light-Up Glyph Cards", guide:"mateo",
    codes:["TE-TP","TE-TK","DT-CT"],
    coverage:"Technology (NZC 2007, Level 3): planning and outcome development; technological modelling (circuit planning before building); systems. Y6 Science link: a closed loop from energy source to output device. Computational thinking: systematic debugging.",
    li:"We are learning to plan, build and troubleshoot a paper circuit that lights up a glyph card.",
    sc:["I can plan a closed-loop circuit path on paper before building.","I can build a working copper-tape circuit with an LED and a coin cell.","I can find and fix faults (a gap, a backwards LED, or a short circuit)."],
    vocab:[
      { w:"copper tape", def:"sticky metal tape that conducts electricity" },
      { w:"circuit path", def:"the route the current takes around the loop" },
      { w:"open / closed circuit", def:"a gap stops the current / a complete loop lets it flow" },
      { w:"short circuit", def:"a shortcut from + to − that skips the LED (wastes the battery, can get warm)" },
      { w:"troubleshoot", def:"to find and fix a problem step by step" },
      { w:"prototype", def:"a first test version" }
    ],
    prep:{ min:10, items:["Copper tape (about 30 cm per student)","1 LED + 1 CR2032 coin cell per student (COUNT them)","Card (A5) and pencils","Binder clips (1 per student) to hold the coin cell","Lidded box for coin cells"] },
    safety:["Coin cells: count out and back; never in mouths; never sent home.","Copper tape edges can be sharp — handle with care.","A short circuit can make the coin cell warm: disconnect it straight away."],
    hononga:"Kōwhaiwhai patterns guide the eye along a continuous path — like a circuit, the line must flow without a break. Ask: where else do we see ‘unbroken paths’ in art and design? (Be respectful: explore the idea of flowing lines; don't copy specific sacred designs.)",
    paths:[
      { id:"A", name:"The Scribe · Planner", product:"Perfect Circuit Plan", steps:["Draw your glyph on the card (front).","On the back, plan the tape path: + → long leg, short leg → −.","Check it with a partner using the ‘finger trace’ test."], flying:"Plan a card with TWO LEDs that both light. Explain your design." },
      { id:"B", name:"The Builder", product:"Light-Up Glyph Card", steps:["Lay copper tape on your plan, keeping one continuous strip at corners.","Tape the LED legs down (long leg on the + track).","Fold the corner over the coin cell and clip it. Light!"], flying:"Add a fold-down flap switch so the light only shines when pressed." },
      { id:"C", name:"The Messenger · Fixer", product:"Troubleshooting Guide", steps:["Study the three broken cards on screen.","Write (or record) a step-by-step guide: ‘If it won't light, check…’","Test your guide by helping two builders."], flying:"Turn your guide into a flowchart with YES/NO decisions." }
    ],
    supportedShort:"pre-printed circuit templates with tape lines; teacher-pre-cut tape; partner build.",
    lens:{
      pillar:"aroha", title:"A light for someone",
      look:"Look at your glowing glyph: one small light in a dark room. These cards are made to give away to someone who needs encouragement.",
      ref:"John 1:5; Proverbs 16:24",
      paraphrase:"The light shines in the darkness, and the darkness has not overcome it… Kind words are like honey — sweet to the soul and healing to the body.",
      talk:[
        { q:"John says ‘the light shines in the darkness’. Christians believe Jesus is that light. What do you think it means?", listen:"Hope even in hard times; good is stronger than evil; Jesus brings God's love into dark places." },
        { q:"Who could you give your light-up card to, and what kind words could you write inside?", listen:"Family, a lonely classmate, an elderly neighbour, someone sick — specific kind words." }
      ],
      live:"Inside your card, write a **kind message** for someone who needs a little light this week."
    },
    clue:{ prompt:"A paper circuit won't light. You find one break in the copper tape. How many gaps does it take to stop the whole circuit?", answer:1, explain:"Just ONE gap breaks the loop → 1. Clue saved for Friday!" },
    next:"Friday — dyes, colour and the Maya Blue mystery… and Seal II.",
    rubric:[
      { c:"Planning the circuit", code:"TE-TP",
        d:["Draws some tape lines.","Plan shows tape from + but it doesn't reach the LED."],
        a:["Plans a closed loop with correct polarity.","Plan: + track to the long leg; short leg back to − ; no shortcuts."],
        f:["Plans for extra features or explains design choices.","“I planned two LEDs side by side on the same tracks so both get the full 3 V.”"],
        i:["I can draw some of the tape path.","I can plan a complete loop with + to the long leg.","I can plan extra features and explain why."] },
      { c:"Building the circuit", code:"TE-TK",
        d:["Builds with help; may not light reliably.","LED flickers; tape joins are lifting."],
        a:["Builds a working card that lights reliably.","Card lights every time the corner is clipped."],
        f:["Adds a switch or improves the build after testing.","Added a fold-down flap switch; pressed = light."],
        i:["I built it with help.","My card lights up every time.","I improved it with a switch or better design."] },
      { c:"Troubleshooting", code:"DT-CT · TE-TK",
        d:["Notices it doesn't work.","“It's broken.”"],
        a:["Identifies and fixes a fault (gap, backwards LED or short).","“There was a gap at the corner, so I patched it with more tape.”"],
        f:["Uses a systematic method and explains it to others.","“I trace from + with my finger, check the LED direction, then check for shortcuts — in that order.”"],
        i:["I can tell when it's not working.","I can find and fix a fault.","I can use a step-by-step method and teach it."] }
    ],
    plan:{
      prior:"Week 1 Jaguar-Eye torch (LED + coin cell, polarity, closed loop); Week 2 Wednesday: cells and voltage.",
      kc:["Thinking","Managing self","Relating to others"],
      sequence:[
        ["0–6","Field Transmission","Mateo's request (signal lights for the camp); Glyph Check; LI/SC; safety.","Recall; repeat coin-cell rule."],
        ["6–18","Excavate","Paper Circuit Planner (lay tape, test faults live); Fix-It cards (gap / short / backwards).","Predict; diagnose."],
        ["18–38","Choose Your Path","COUNT OUT coin cells. Planner / Builder / Fixer.","Plan, build, troubleshoot."],
        ["38–45","Through the Lens","John 1:5; Proverbs 16:24.","Write kind messages."],
        ["45–50","Decode & Exit","COUNT IN coin cells; clue (1); self-assess.","Return cells; self-assess."]
      ],
      diff:{
        supported:"Templates with printed tape lines; pre-cut tape lengths; buddy builder.",
        esol:"Demonstration first; picture steps; key words with icons (gap, short, backwards).",
        learning:"Larger cards; wider tape; option of Fixer role.",
        flying:"Two-LED design; flap switch; flowchart troubleshooting guide."
      },
      assess:{
        lookFor:["Closed-loop plan with correct polarity","Working, reliable build","Correct diagnosis of faults"],
        evidence:["Photos of plans and cards","Troubleshooting guides","Exit self-assessment"]
      },
      inquiry:["Coin-cell count correct at the end? Record it.","Which fault was most common in real builds? Use it in next week's Glyph Check.","Did planning first reduce build problems?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"mateo", meta:"Camp signal post",
        msg:"The satellite link keeps dropping, so we need **light signals** between the tents and the chamber. Paper is light, cheap and we have heaps of it. Your mission: design a **paper circuit** — a glowing glyph card. Plan it first. Engineers who plan, win!",
        notes:[["SAY","Read the message."],["ASK","“Why might planning first save time?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:"real", qs:[
          { q:"What happens to the voltage when cells are joined in series?", a:"It adds up (e.g. 3 × 0.9 V = 2.7 V)." },
          { q:"Which leg of an LED goes to + ?", a:"The long leg." },
          { q:"How do electric eels make a big zap?", a:"Thousands of cells in series — the voltages add up." }],
        notes:[["SAY","Whiteboards; show on 3."],["CLICK","→ flips."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and SC."]] },
      { type:"safety", phase:"transmission", fs:"real", title:"Paper-circuit safety", items:[
          { icon:"🪙", t:"Count the coin cells", d:"Out and back in. Never in mouths. Never taken home." },
          { icon:"✂️", t:"Sharp copper edges", d:"Copper tape edges can cut — handle carefully." },
          { icon:"🔥", t:"Warm = short!", d:"If the coin cell feels warm, unclip it straight away. There's a short circuit." }],
        notes:[["SAFETY","Count out cells during Paths and record the number."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Plan before you build", title:"Paper circuit planner", ix:"papercircuit",
        notes:[["SAY","“This is the back of a card. Battery + is top left, − is bottom left. The LED is on the right.”"],["CLICK","Click between dots to lay tape. Build a path with a deliberate GAP first, press Test (gap!). Fix it, then Test again."],["CLICK","Try wiring + to the short leg (backwards), and a shortcut from + to − (short circuit) — test each."],["ASK","“Which fault is the most dangerous?” (The short circuit — it drains the battery and can get warm.)"],["NOTE","‘Example’ shows a working path."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Be the fixer", title:"Why won't these light?", ix:"fixit",
        notes:[["SAY","“Three students built cards, but none of them light. Be the detectives.”"],["TALK","For each card: 30 seconds with a partner, then tap to reveal."],["LISTEN","A: a gap. B: a short circuit (tape joins + to −). C: the LED is backwards (+ is wired to the short leg)."],["SAY","“Fixer's routine: 1) trace from + with your finger, 2) check the LED direction, 3) look for shortcuts.”"],["PACE","Aim for minute 18."]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAFETY","Count out the coin cells; write the number on the board."],["SAY","Explain paths."],["CLICK","Start the timer."],["NOTE","Tip: keep tape continuous around corners by folding it, not cutting it."]] },
      { type:"lens", phase:"lens", fs:null, notes:[["CLICK","→ reveals each move."],["SAY","Read John 1:5 and Proverbs 16:24."],["ASK","Use both questions."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["SAFETY","Count all coin cells back in FIRST."],["ASK","“How many gaps stop the whole circuit?” (1)"],["CLICK","1 dot → Check."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = cacao beans."]] }
    ]
  };

  /* ======================= FRIDAY · ART ======================= */
  const fri = {
    id:"w02-fri", week:2, day:"fri", subject:"art", duration:50,
    title:"Dyes & Colour: the Maya Blue Mystery", guide:"rosa",
    codes:["VA-UC","VA-PK","SC-P"],
    coverage:"Visual Arts (NZC 2007, Level 3): understanding art in context (Mesoamerican dyes and pigments); developing practical knowledge (natural dyes, colour mixing, even washes). Science link: materials and their properties.",
    li:"We are learning how Mesoamerican artists made colours from nature, and to use natural dyes to create aged codex pages.",
    sc:["I can explain how Mesoamerican artists made colours (indigo, cochineal, Maya Blue).","I can mix secondary colours and predict the result.","I can apply an even dye wash to make an aged codex page."],
    vocab:[
      { w:"dye", def:"a coloured liquid that soaks into a material" },
      { w:"pigment", def:"a coloured powder (often from minerals) mixed into paint" },
      { w:"indigo", def:"a blue dye made from the leaves of the indigo (añil) plant" },
      { w:"cochineal", say:"koch-ih-NEEL", def:"a red dye made from tiny insects that live on prickly-pear cactus" },
      { w:"Maya Blue", def:"a super-tough blue made from indigo and palygorskite clay, heated" },
      { w:"primary / secondary colours", def:"red, yellow, blue / colours made by mixing two primaries" },
      { w:"wash", def:"a thin, even layer of watery colour" }
    ],
    prep:{ min:10, items:["Strong tea and coffee (cooled) in small containers","Turmeric (½ tsp in water) and beetroot or red-cabbage water (optional)","Broad brushes or sponges","Your codex books (from Week 1)","Newspaper / aprons"] },
    safety:["Turmeric and beetroot stain clothes and skin — aprons and newspaper.","No tasting the dyes.","Wipe spills straight away (slippery floors)."],
    hononga:"Māori created rich colours from nature: **paru** (iron-rich mud) dyed harakeke fibres black, and **kōkōwai** (red ochre mixed with oil) coloured carvings and waka. Ask: how is kōkōwai like Mesoamerican pigments? Why might red be such an important colour for many cultures?",
    paths:[
      { id:"A", name:"The Scribe", product:"Colour Journal", steps:["Make 6 swatches: tea, coffee, turmeric, beetroot/cabbage, and 2 mixes.","Label each with what you used and the colour you got.","Write how Maya Blue was made and why it lasts."], flying:"Explain why cochineal was so valuable that the Spanish shipped it across the world." },
      { id:"B", name:"The Builder", product:"Aged Codex Page (Folio II)", steps:["Brush an even wash of tea or coffee over panel 2 of your codex.","When nearly dry, add a second colour at the edges for an ‘ancient’ look.","Once dry, paint a maize plant in your own style."], flying:"Mix a ‘Maya-ish’ blue-green and use it for one detail." },
      { id:"C", name:"The Messenger", product:"Dye-Maker's Demonstration", steps:["Practise one dye technique (wash, dabbing or edge-staining).","Teach it to a group in 2 minutes, step by step.","Explain where the colour comes from in nature."], flying:"Compare a Mesoamerican dye with kōkōwai or paru in your demonstration." }
    ],
    supportedShort:"pre-mixed dyes; demonstration at the table; one colour at a time.",
    lens:{
      pillar:"manaaki", title:"Colour as a gift",
      look:"Look at the colours: blue from leaves, red from tiny insects, yellow from flowers. God filled creation with colour — and gave people the skill to find it.",
      ref:"Exodus 35:25, 35",
      paraphrase:"Every skilled woman spun with her hands and brought what she had spun — blue, purple and scarlet yarn and fine linen… God filled them with skill to do all kinds of work as craftsmen, designers and embroiderers.",
      talk:[
        { q:"In Exodus, skilled people brought blue and scarlet yarn to make the Tabernacle beautiful. Why might beauty matter to God?", listen:"God made a beautiful world; beauty points to Him; doing our best honours God; creativity reflects that we're made in His image." },
        { q:"What creative gift do you have that you could use to bless others?", listen:"Drawing, music, colour, building, writing, encouraging — using gifts to serve (Manaaki)." }
      ],
      live:"Gallery walk: tell a partner which **colour choice** in their page you like best, and why."
    },
    clue:{ prompt:"Folio Seal: add the four Glyph Clues from Monday to Thursday.", answer:17, explain:"3 + 10 + 3 + 1 = 17 → three bars and two dots." },
    next:"Week 3 — the Scribe's Secret: cracking the Maya number code!",
    rubric:[
      { c:"Colour in context", code:"VA-UC",
        d:["Names a natural colour source.","“They used plants.”"],
        a:["Explains how indigo, cochineal and Maya Blue were made.","“Blue came from indigo leaves, red from cochineal insects, and Maya Blue from indigo heated with special clay.”"],
        f:["Explains why a colour mattered (value, durability, trade).","“Cochineal was so valuable the Spanish shipped it to Europe — and Maya Blue survived 1,000 years of rain.”"],
        i:["I can name where a colour comes from.","I can explain how indigo, cochineal and Maya Blue were made.","I can explain why a colour was valuable or special."] },
      { c:"Colour mixing", code:"VA-PK",
        d:["Mixes colours without predicting.","Mixed everything together and got brown."],
        a:["Predicts and makes secondary colours.","“Blue + yellow → green. I predicted it and it worked.”"],
        f:["Controls tints and shades deliberately.","“I added water for a lighter green and a tiny bit of red to make it look older.”"],
        i:["I mixed colours to see what happens.","I can predict and make secondary colours.","I can make lighter and darker versions on purpose."] },
      { c:"Dye wash technique", code:"VA-PK",
        d:["Patchy wash; paper too wet or streaky.","Puddles and torn paper on the panel."],
        a:["Even wash that ‘ages’ the page.","Panel 2 evenly tea-stained, edges slightly darker."],
        f:["Layers washes with control for an authentic effect.","Two layers, darker edges, a dabbed texture like old bark paper."],
        i:["My wash is patchy.","My wash is even and looks aged.","I layered washes with control for a real ancient look."] }
    ],
    plan:{
      prior:"Week 1: codex construction and glyph drawing. Students know the primary colours.",
      kc:["Managing self","Thinking","Relating to others"],
      sequence:[
        ["0–6","Field Transmission","Doña Rosa's message; Glyph Check; LI/SC; mess routines.","Recall; set up."],
        ["6–18","Excavate","Colours from nature (cards); Dye Lab simulator (predict mixes); the Maya Blue mystery (rain test).","Predict colours; explain."],
        ["18–40","Choose Your Path (22 min)","Dyes out; journal / codex page / demonstration.","Make and test dyes."],
        ["40–45","Through the Lens","Exodus 35 — gallery walk.","Compliment a colour choice."],
        ["45–50","Folio Seal","Clues 3 + 10 + 3 + 1 = 17; Seal II; Collector's intercept.","Solve; discuss."]
      ],
      diff:{
        supported:"Pre-mixed dyes; teacher demonstration at the table; fewer swatches.",
        esol:"Colour words with swatches (and in Spanish: azul, rojo, amarillo, verde); demonstrate first.",
        learning:"Sponges instead of brushes; larger panels; extra drying time.",
        flying:"Cochineal economics; compare Maya Blue chemistry; control tints and shades."
      },
      assess:{
        lookFor:["Explains natural colour sources and Maya Blue","Predicts secondary colours","Even, controlled wash"],
        evidence:["Swatch journals / codex panel 2 (photograph)","Demonstration observation","Exit self-assessment"]
      },
      inquiry:["Did the dye routines work smoothly? Adjust set-up for next time.","Which students controlled the wash well — use as demonstrators later.","How did students respond to the Collector's certificate (source checking!)?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"rosa", meta:"Restoration tent",
        msg:"Look at this, children — the second folio. The painters used **colours that have lasted centuries**. Today you will make colours the old way: from leaves, roots, insects and earth. And I will show you a mystery that puzzled scientists for a hundred years… the secret of **Maya Blue**.",
        notes:[["SAY","Read the message."],["ASK","“Where do you think colours came from before there were paint shops?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:"real", title:"This week so far", qs:[
          { q:"What is a surplus — and why did it help cities grow?", a:"Extra food. Not everyone had to farm, so some people became specialists." },
          { q:"Why do the Andes have volcanoes?", a:"The Nazca plate slides under (subducts beneath) South America; melted rock rises." },
          { q:"Name one fault that stops a paper circuit working.", a:"A gap, a backwards LED, or a short circuit." }],
        notes:[["SAY","Whole-week review."],["CLICK","→ flips."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and SC."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Colours from nature", title:"Where did the colours come from?", h:"540px", cards:[
          { big:"Blue", color:"#24407a", t:"Indigo", d:"From the leaves of the **añil** (indigo) plant, soaked and stirred until blue." },
          { big:"Red", color:"#B3262E", t:"Cochineal", d:"Crushed **cochineal insects** from prickly-pear cactus. After the conquest it became one of Spain's most valuable exports." },
          { big:"Yellow", color:"#D9A23A", t:"Plants & ochre", d:"Flowers, roots and **ochre** (yellow earth) gave yellows and oranges." },
          { big:"Black", color:"#2A2420", t:"Soot", d:"**Carbon** from burnt wood (soot) made the black outlines of glyphs." }],
        notes:[["SAY","“Mesoamerican artists were chemists! They found colour in plants, insects and earth.”"],["ASK","“Which colour surprises you most? Why?” (Usually cochineal — insects!)"],["NOTE","Cochineal (carmine) is still used today in some foods and cosmetics — students may find it on labels as E120."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Predict, then mix", title:"The dye lab", ix:"dyelab", paper:true,
        notes:[["ASK","Before each mix: “Predict the colour.”"],["CLICK","Try: indigo + yellow (green); cochineal + yellow (orange); cochineal + indigo (purple); all three (brown!); then add water (lighter)."],["CLICK","‘Dip a paper strip’ saves each colour as a swatch."],["SAY","“Mixing two primary colours makes a secondary colour.”"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"A real science mystery", title:"The secret of Maya Blue", ix:"mayablue", paper:true,
        notes:[["CLICK","Press Next through the 5 steps. On the last step press ‘Centuries of rain’."],["ASK","At step 1: “How could a blue survive 1,000 years of tropical rain?” Take guesses."],["SAY","“The clay's tiny tunnels lock the indigo in, like a safe. Scientists only worked it out in recent decades.”"],["PACE","Aim for minute 18."]] },
      { type:"hononga", phase:"excavate", fs:"real", title:"Kōkōwai & paru",
        body:"Māori made colour from the land too. **Kōkōwai** — red ochre mixed with oil — coloured carvings, waka and people for important occasions. **Paru**, an iron-rich mud, dyed harakeke (flax) fibres a deep, lasting black for weaving.\n\nLike Maya Blue, these techniques took careful knowledge passed down through generations.",
        notes:[["SAY","Read or summarise."],["NOTE","Check local knowledge with your Māori lead; avoid copying sacred patterns."]] },
      { type:"paths", phase:"paths", fs:null, minutes:22,
        notes:[["SAY","Explain the paths. Path B works on panel 2 of their codex."],["CLICK","Start the 22-minute timer."],["NOTE","Wash tips: a damp (not soaking) brush; work quickly in one direction; darken edges with a second wash when nearly dry."]] },
      { type:"lens", phase:"lens", fs:null, title:"Colour as a gift",
        notes:[["CLICK","→ reveals each move."],["SAY","Read Exodus 35:25 and 35."],["ASK","Then a 3-minute gallery walk: compliment a colour choice."]] },
      { type:"folioseal", phase:"decode", fs:"story",
        notes:[["SAY","“Four clues again. Let's open Folio II.”"],["CLICK","Reveal each clue tile (3, 10, 3, 1). Total = 17 → build ▬▬▬ + ●● → ‘Break the seal’."],["SAY","Read the reveal. Point out the Maya numeral on the folio — next week we learn to read it!"]] },
      { type:"intercept", phase:"decode", fs:"story",
        msg:"I have a certificate proving the codex was sold to my great-grandfather in 1920. It is legally MINE. Hand it over, or my lawyers will visit. — C.",
        ask:"How could historians check whether the Collector's certificate is real? What sources would you look for?",
        notes:[["SAY","Read it in the Collector's voice."],["ASK","Discuss briefly — this links to Week 1 sources!"],["LISTEN","Check the paper and ink age; who signed it; compare with records of the dig; the chamber was sealed until this storm — so how could it have been sold in 1920?!"]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess; codices dry flat."],["CLICK","C = cacao beans."]] }
    ]
  };

  FC.WEEKS[2] = {
    n:2,
    story:"The first folio shows a maize field — so the team investigates the plant that built cities. Capt. Quispe flies south along the Andes and the Ring of Fire, Mateo makes emergency batteries from potatoes, engineers build paper-circuit signal cards, and Doña Rosa reveals the secret of Maya Blue. On Friday, Seal II breaks… and the Collector produces a suspicious certificate.",
    hononga:"Kūmara, the maramataka and rua storage pits (Mon); Aotearoa on the Ring of Fire, Rūaumoko and the 1960 tsunami (Tue); energy stored in kai and in cells (Wed); flowing kōwhaiwhai lines as unbroken paths (Thu); kōkōwai and paru as natural colours (Fri). Check local framing with your Māori lead / Ngāi Tahu rūnanga.",
    seal:{
      answer:17,
      instruction:"Add up the four **Glyph Clues** from Monday to Thursday. Build the total as a Maya numeral (▬ = 5, ● = 1) to break Seal II.",
      reveal:"🟡 **Folio II unsealed:** a milpa of maize, beans and squash under rain clouds — and in the corner, a Maya **numeral** in a cartouche: two bars and three dots. What number is it? Next week: *The Scribe's Secret*.",
      art:() => { const v = FC.art.milpaFolio(); v.setAttribute("style", "width:100%;height:100%"); return v; }
    },
    lessons:[mon, tue, wed, thu, fri]
  };
})(window.FC);
