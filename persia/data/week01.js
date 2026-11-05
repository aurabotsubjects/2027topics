/* ==========================================================
   WEEK 1 — STAGE I · THE GATES OF THE PLATEAU
   Each lesson = slides (with scripted notes) + plan + rubric.
   Notes: [KEY, text]  KEY = SAY ASK LISTEN IF CLICK TALK DEEPER PACE SAFETY WAIT NOTE CARE SIDE
   Facts are sourced in data/sources.js (tags match blueprint §18).
   ========================================================== */
(function(BM){
  "use strict";

  /* ======================= MONDAY · HISTORY ======================= */
  const mon = {
    id:"w01-mon", week:1, day:"mon", subject:"history", duration:50,
    title:"Before the Empire: Elamites, Medes & Persians", guide:"shirin",
    codes:["SS-H","SS-P","MA","RE"],
    coverage:"Y5–6 History practices (2027 Social Sciences, Years 4–6): chronology, primary and secondary sources. Introduces Persia as an ancient civilisation (Y5).",
    li:"We are learning where the Persian Empire came from, and how historians put events in order.",
    sc:["I can name the three peoples of the land before the empire (Elamites, Medes, Persians).","I can explain how BC dates count down to AD 1.","I can tell the difference between a primary and a secondary source."],
    vocab:[
      { w:"empire", def:"a group of lands and peoples ruled by one king or government" },
      { w:"civilisation", def:"a large, organised society with cities, laws, writing and buildings" },
      { w:"Elamites", say:"EE-luh-mites", def:"the people of Elam, in the south-western lowlands of Iran; their capital was Susa" },
      { w:"Medes", say:"meeds", def:"the people of Media, in north-western Iran; their capital was Ecbatana" },
      { w:"Persians", def:"the people of Pars (Persis) in south-western Iran, whose kings built the empire" },
      { w:"BC / AD", def:"BC = before Christ (counts down); AD = Anno Domini, ‘in the year of the Lord’ (counts up). Also written BCE / CE" },
      { w:"timeline", def:"a line showing events in the order they happened" },
      { w:"primary source", def:"made at the time, by people who were there or lived then" },
      { w:"secondary source", def:"made later, about the past, using other sources" },
      { w:"archaeologist", def:"a scientist who studies the past by digging up and examining things people left behind" }
    ],
    prep:{ min:0, items:["Nothing to prepare: it's all on screen","Optional: a globe or world map","Caravan Journals (one exercise book or sketchbook per student) ready to hand out"] },
    safety:[],
    care:["Some students may have family links to Iran, Afghanistan or the Middle East. Invite them (never require them) to share; they may become this term's ‘experts’.","Iran today is taught through people, culture and creation, with no political commentary (D10). If students raise the news: “Countries have governments, and people disagree about them. In this unit we're learning about the people, the land and its history, and we pray for every family in Iran.”"],
    hononga:"**Where do our families come from?** Many New Zealand families came here from other lands, and some may have links to Iran or the Middle East. Just as the Elamites, Medes and Persians each had a home region, every family has a story of where it came from. Invite (never require) students to share.",
    paths:[
      { id:"A", name:"The Scribe", product:"“Who Was Here First?” Fact Tablet", steps:["Draw a **clay-tablet shape** with **three panels**: Elamites, Medes, Persians.","In each panel write **where they lived** and **one city** (Susa, Ecbatana, Pasargadae).","Add **one fact** for each people, from the slides or the map."], flying:"Why might a king's own inscription not tell the whole truth?" },
      { id:"B", name:"The Artisan", product:"Timeline Scroll", steps:["Tape paper into a long **scroll** and draw a line with **BC** on the left and **AD** on the right.","Place **at least 6 events** to scale: **1 cm = 20 years** (e.g. 559 BC, 539 BC, 518 BC, 330 BC).","Draw a small **picture** for each event and label the year."], flying:"How many years from Cyrus taking Babylon (539 BC) to Alexander burning Persepolis (330 BC)? Show your working." },
      { id:"C", name:"The Herald", product:"Source Detective Talk", steps:["Choose **3 sources** from the Source Sorter (e.g. the Cyrus Cylinder, Herodotus, a museum website).","Plan what you'll say: is each one **primary or secondary**, and **why**?","Explain to a partner or the class in **1 minute**: “This is a primary source because…”"], flying:"Herodotus was Greek. Would a Persian tell the story of the Persian wars the same way? Why does that matter?" }
    ],
    supportedShort:"pre-cut event cards; a printed ribbon; sentence starters; the map slide to copy from; partner pairing.",
    lens:{
      pillar:"mohio", title:"Every nation in God's story",
      look:"Look again at the map: **Elam**, **Media** and **Pars**. These peoples were here long before the empire.",
      ref:"Genesis 10:22; Acts 2:9–11",
      paraphrase:"Elam is named among the families who spread out after the Flood. Centuries later, at Pentecost, Parthians, Medes and Elamites heard about God's wonders in their own languages.",
      talk:[
        { q:"Elam appears near the start of the Bible and again at Pentecost. What does that tell us about God and the peoples of this land?", listen:"God knew these peoples from the beginning; the good news was for them too." },
        { q:"Why might God want people from every nation to hear about Him in their own language?", listen:"He loves every people; no nation is left out (Revelation 7:9)." }
      ],
      live:"In your Caravan Journal, finish: **“One thing I want to remember about God and the nations is…”**"
    },
    clue:{ prompt:"How many peoples lived in the land before the Persian Empire began?", answer:3, explain:"Elamites, Medes and Persians = 3. Waystation Clue 1 is saved for Friday's Seal Fragment!" },
    next:"Tuesday — Farhad: why did people settle where they did?",
    rubric:[
      { c:"Three peoples", code:"SS-H",
        d:["Names one people.","“The Persians.”"],
        a:["Names all three and where they lived.","“Elamites in the south-western lowlands with their capital Susa, Medes in the north-west, Persians in Pars.”"],
        f:["Explains why the empire is named after one people.","“The Persian kings ruled, so their name stuck, but Elamites and Medes still lived there and even worked in the government.”"],
        i:["I can name one of the peoples.","I can name all three peoples and where they lived.","I can explain why the empire is named after just one people."] },
      { c:"BC and AD", code:"SS-H · MA",
        d:["Places some events with help.","Puts Cyrus before Alexander with prompting."],
        a:["Orders events and explains that BC counts down.","“539 BC is earlier than 518 BC because BC counts down to AD 1.”"],
        f:["Calculates spans across BC dates and explains the method.","“539 − 518 = 21 years: with BC you subtract the smaller number from the bigger one.”"],
        i:["I can put some events in order with help.","I can order events and explain that BC counts down.","I can work out how many years between two BC dates and explain how."] },
      { c:"Primary vs secondary", code:"SS-P",
        d:["Sorts some sources with help.","Puts the museum website in the right box with prompting."],
        a:["Defines both with an example of each.","“The Cyrus Cylinder is primary; a museum website is secondary.”"],
        f:["Explains why even a primary source can be one-sided.","“Herodotus was there at the time, but he was Greek, so he might favour the Greeks. A king's inscription makes the king look good.”"],
        i:["I can sort some sources with help.","I can explain primary and secondary, with an example of each.","I can explain why even a primary source can be one-sided."] }
    ],
    plan:{
      prior:"Most students will not yet know where Iran is or who the Persians were. Some will know Bible stories set in Persia (Daniel, Esther) without knowing it. Some may have family links to Iran or the Middle East: future experts. BC dates are often new and confusing.",
      kc:["Thinking","Using language, symbols & texts","Relating to others"],
      sequence:[
        ["0–6","The Dispatch","Play the opening (click through 6 moments). Read Shirin's dispatch. **Waystation Check** (prior knowledge, thumbs up), then add ideas to the **Map Wall** (kept until Week 10). Caravan Code; LI/SC.","Watch, predict, share what they already know about Persia."],
        ["6–18","Discovery","**Zoom to Persia** (NZ → Iran → Elam, Media, Pars); Say it right; turn & talk; **Timeline Ribbon** (BC counts down); 🔬 Susa side note; **Source Sorter** with class voting.","Turn & talk; drag cards; vote on each source."],
        ["18–38","Choose Your Path","Introduce A/B/C (2 min). Roam with the rubric; prompt: “How do we know? Who wrote this, and why?”","Choose a path; create their product."],
        ["38–45","Through the Lens","Genesis 10:22; Acts 2:9–11 — four moves.","Discuss; write a journal sentence."],
        ["45–50","Waystation Clue & Exit","Waystation Clue 1 (answer 3); self-assessment; darics.","Work out the clue; self-assess."]
      ],
      diff:{
        supported:"Pre-cut event cards and a printed ribbon; sentence starters; copy the three peoples from the map slide; partner with a confident reader.",
        esol:"Visual glossary on screen (hover the dotted words); map and timeline are visual; rehearse orally with a partner; home-language words for ‘king’ or ‘history’ welcome.",
        learning:"Chunked 3-step path cards; choice of response mode (draw / say / write); movement during source voting; calm screen available.",
        flying:"Flying challenge on every path; “Why might a king's own inscription not tell the whole truth?”"
      },
      assess:{
        lookFor:["Names Elamites, Medes and Persians and where they lived","Orders BC dates correctly and explains that BC counts down","Uses ‘primary’ and ‘secondary’ accurately with an example"],
        evidence:["Path products (photograph)","Timeline Ribbon and Source Sorter votes","Map Wall (baseline for Week 10)","Exit self-assessment"]
      },
      inquiry:["Who has family links to Iran or the Middle East (a possible expert, if they'd like to share)?","Who struggled with BC dates? Revisit in Tuesday's Waystation Check.","What did the Map Wall show about what students already know?"]
    },
    slides:[
      { type:"cinematic", phase:"transmission", fs:"story", ix:"opening", title:"Opening: the Shattering Seal",
        notes:[["NOTE","Dim the lights if you can. This is the start of the whole term — make it feel like an event."],["CLICK","Press → to move through 6 moments: the road · the couriers · the Seal · the sandstorm · Shirin's Road Scroll · the title."],["SAY","Read each caption slowly (it types itself), or let a confident reader read it."],["ASK","After the sandstorm: “Where do you think the ten fragments went? Who else might want them?” ⏳ wait 5 seconds."],["PACE","About 2 minutes."]] },
      { type:"transmission", phase:"transmission", fs:"story", guide:"shirin", meta:"The royal archive · by lamplight",
        msg:"Salaam, caravan! I'm Shirin, the youngest scribe in the royal archive. My Road Scroll has opened, and the first fragment is somewhere in these mountains. But **before we chase a single fragment, we need to know whose land this is.** Kings came and went, but the people were here first. I need historians.",
        notes:[["SAY","Read the message aloud (it types itself — click the text to show it all)."],["NOTE","🟡 Shirin is fictional. Point out the yellow ‘Road Story’ badge (bottom right) and the green ‘Real evidence’ badge on later slides: “All term, watch these badges. Part of being a good historian is knowing what's story and what's evidence.”"],["SAY","“Salaam (peace) is a greeting used in Iran and many countries.”"]] },
      { type:"glyphcheck", phase:"transmission", fs:null, kicker:"Waystation Check · what do we know already?", title:"Thumbs up if you can…",
        qs:[ { q:"…find Iran on a world map?", a:"It's in south-west Asia, between the Caspian Sea and the Persian Gulf. We'll zoom there soon!" }, { q:"…name a king of Persia?", a:"Cyrus, Darius, Xerxes… we'll meet them all this term." }, { q:"…name a Bible story set in Persia?", a:"Daniel in the lions' den, Esther, Ezra and Nehemiah all happen in the Persian Empire!" } ],
        notes:[["ASK","Read each question. Thumbs up / sideways / down. Then click to flip."],["NOTE","This week's Waystation Check is about prior knowledge; from Tuesday it recalls the day before."],["LISTEN","Accept every answer; don't correct yet. Put interesting answers on the Map Wall next."]] },
      { type:"glyphwall", phase:"transmission", fs:null, title:"What do you know about Persia?",
        notes:[["ASK","“What do you already know — or think you know — about Persia or Iran? Anything at all.” ⏳ 10 seconds of thinking time."],["CLICK","Type each idea and press Enter. Notes can be dragged around."],["LISTEN","Deserts, carpets, cats, kings, Esther, Daniel, the Magi, oil, Persian food, family links."],["NOTE","The Map Wall is saved on this computer. We'll come back to it in Week 10 to see how far we've come."]] },
      { type:"protocol", phase:"transmission", fs:null,
        notes:[["SAY","“Every caravan has rules so everyone stays safe and the work is good. Here are ours for the whole term.”"],["ASK","“Why is ‘Respect every person and people’ first, when we're learning about people from long ago and far away?”"],["PACE","1 minute."]] },
      { type:"lisc", phase:"transmission", fs:null,
        notes:[["SAY","Read the learning intention, then each success criterion. “By the end of today you'll be able to say ‘I can…’ to these.”"],["NOTE","Developing · Achieved · Flying (seedling · daric · Simurgh feather) are how we check our learning all term."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Where is Persia?", title:"Zoom to Persia", ix:"zoompersia",
        notes:[["CLICK","Press → (or the buttons): spin the globe from Aotearoa to Iran → show the land → three peoples. Then tap Elam, Media and Pars."],["SAY","“Ancient Persia was centred on what is now Iran, on a high plateau between the Persian Gulf and the Caspian Sea.”"],["SAY","“Three peoples matter before the empire: the Elamites, whose capital was Susa in the south-western lowlands; the Medes in the north-west, with their city Ecbatana; and the Persians of Pars in the south-west, where Pasargadae and Persepolis would later be built.”"],["NOTE","The globe and map are simplified (coastlines and places approximate). Sources: UNESCO (Susa), Livius and Britannica (Media, Ecbatana), the Met (Pasargadae)."]] },
      { type:"sayitright", phase:"excavate", fs:"real", kicker:"Say it right", title:"Say the names well",
        words:[ { w:"Achaemenid", say:"a · KEE · men · id", mean:"the family of Persian kings, Cyrus to Darius III" }, { w:"Elam", say:"EE · lum", mean:"the land of the Elamites" }, { w:"Susa", say:"SOO · sah", mean:"the Elamite capital" }, { w:"Ecbatana", say:"ek · BAT · a · na", mean:"the Median capital (modern Hamadan)" } ],
        note:"Practise together slowly, then at normal speed. Saying a name well shows respect for the people it belongs to.",
        notes:[["CLICK","Tap a card to show what it names."],["SAY","“Let's practise: a-KEE-men-id. Ek-BAT-a-na.”"],["NOTE","Pronunciations are common English forms; Persian speakers may say them differently. If a student speaks Persian (Farsi), invite them to teach the class."]] },
      { type:"discussion", phase:"excavate", fs:"real", kicker:"Turn & Talk", q:"The empire is called “Persian”, but **other peoples lived in the land first**. Why might that matter?", sub:"Think about who ruled, who lived there, and whose name went on the maps.", talk:45,
        notes:[["TALK","Start the 45-second talk. Bring back with “3, 2, 1… eyes on me.”"],["LISTEN","Empires are often named after the rulers, not everyone who lived there; the Elamites and Medes still mattered; their stories could be forgotten."],["IF","“The Persians beat them so it's theirs” → “The Persians did rule, but the Elamites and Medes didn't disappear. Elamite was even one of the empire's official languages. Whose story gets told when only the rulers' name is used?”"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Counting down to zero", title:"The Timeline Ribbon", ix:"timeline",
        notes:[["SAY","“BC dates count *down*, like a rocket launch. 539 BC came *before* 518 BC.”"],["CLICK","Hold up each card; the class says ‘earlier’ or ‘later’; drag it to a dot. Then ‘Check order’."],["SAY","Facts: Cyrus begins to rule **559 BC**; takes **Babylon 539 BC**; Darius begins **Persepolis about 518 BC**; Alexander **burns Persepolis 330 BC**."],["DEEPER","“How many years from Cyrus taking Babylon (539 BC) to Darius starting Persepolis (518 BC)?” (21: subtract, because BC counts down.)"],["NOTE","Sources: British Museum (Cyrus Cylinder), the Met (Pasargadae), Persepolis (World Heritage Site), World History Encyclopedia (330 BC)."]] },
      { type:"sidenote", phase:"excavate", fs:"real", kicker:"Susa's first layers", title:"One of the oldest cities",
        main:"**Susa** is one of the oldest cities in the world. Genesis 10:22 names **Elam** among the families who spread out across the earth after the Flood. Reading Genesis as history, the earth is young — **thousands of years old** — and Elam was one of the first nations.",
        refs:"Genesis 1; 10–11 · Answers in Genesis (young-earth reading)",
        side:{ text:"Archaeologists date the earliest of Susa's many layers to the **late 5th millennium BC**, about **6,000 years ago**.", src:"UNESCO World Heritage Centre — Susa" },
        notes:[["SAY","“As Christians, we believe God created everything, and our school teaches that the earth is young. You'll also read that many scientists think it is much older, so it's good to know what they say. Here's their estimate.”"],["SIDE","Never mock either view. Rubrics never assess which view a student holds (D8)."],["ASK","“How do archaeologists find out how old a city is?” (They dig down through layers: the deeper, the older.)"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"How do we know?", title:"The Source Sorter", ix:"sourcesorter",
        notes:[["SAY","“A primary source was made at the time, by people who were there. A secondary source was made later, about the past.”"],["CLICK","Hold up each card. Class votes (hands: primary / secondary), then drag it into a box."],["ASK","At Herodotus: “Herodotus was Greek. Would a Greek tell the story of the Persian wars the same way a Persian would?” ⏳"],["LISTEN","Probably not: he might favour the Greeks. Historians compare sources."],["IF","“The Bible isn't a history source” → “Historians of every belief use it as an ancient source for this period, alongside the clay tablets. As Christians, we also trust it as true. Let's see this term how it fits with the other evidence.”"],["NOTE","The objects are simplified drawings, not photos. To see the real Cyrus Cylinder, open the British Museum link in the Sources panel."]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAY","“Three paths, same learning. Choose the one that lets you show your best thinking.”"],["CLICK","Start the 20-minute timer. Roam with the rubric (Quick-Mark on a device, or the printed rubric)."],["ASK","While roaming: “How do you know? Who made that source, and why?”"],["NOTE","Hand out Caravan Journals now if you haven't. Print Path Cards with the 🖨 button."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Press → to reveal each move: Look closer → Open the Word → Talk it through → Live it out."],["SAY","Read Genesis 10:22 and Acts 2:9–11 from the class Bible (the screen shows a paraphrase)."],["ASK","“Elam appears near the start of the Bible and again at Pentecost. What does that tell us about God and the peoples of this land?”"],["LISTEN","God knew these peoples from the beginning; the good news was for them too; no nation is left out."]] },
      { type:"decode", phase:"decode", fs:"story",
        notes:[["SAY","“Every day this week ends with a Waystation Clue. The Royal Road had 111 stations where messengers changed horses; each lesson is one of our waystations. On Friday, the four clues unlock the first fragment.”"],["CLICK","Teams work it out; type the answer and press ‘Check the clue’."],["NOTE","Answer: Elamites, Medes, Persians = 3."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","“Show me with your hand: Developing, Achieved or Flying?”"],["CLICK","C = darics. Award for thinking, teamwork, kindness and perseverance — never for rubric levels."]] }
    ]
  };

  /* ======================= TUESDAY · GEOGRAPHY ======================= */
  const tue = {
    id:"w01-tue", week:1, day:"tue", subject:"geography", duration:50,
    title:"Why Settle Here? Reading the Persian Plateau", guide:"farhad",
    codes:["SS-G","SS-P","MA"],
    coverage:"Y5 Geography: biomes (mountain, desert, plateau). Y6 Geography: settlement and urbanisation — why people settle where they do (sets up the term).",
    li:"We are learning how land, water and climate decide where people build settlements.",
    sc:["I can describe the land of Iran (mountains around the edge, deserts in the middle).","I can give four reasons people choose a place to settle.","I can explain why many Persian towns were built near mountains."],
    vocab:[
      { w:"settlement", def:"a place where people live: a village, town or city" },
      { w:"site", def:"the exact spot where a settlement is built" },
      { w:"plateau", say:"PLAT-oh", def:"a large area of high, fairly flat land" },
      { w:"desert", def:"a very dry place with little rain and few plants" },
      { w:"oasis", say:"oh-AY-sis", def:"a green place in a desert where there is water" },
      { w:"mountain range", def:"a long line of mountains" },
      { w:"fertile", def:"good for growing crops" },
      { w:"trade route", def:"a road or path that traders use to carry goods" },
      { w:"defence", def:"protection from attack" },
      { w:"urbanisation", def:"more and more people coming to live in towns and cities" }
    ],
    prep:{ min:5, items:["Caravan Journals","Optional: printed outline maps of Iran for Path B","Optional: clay or card for Path B site models"] },
    safety:[],
    care:[],
    hononga:"**Why is our town here?** Ashburton began where the main road south crossed the river: an accommodation house was built beside the river ferry in **1858**, and the town was surveyed in **1863–64** (Te Ara). Water, a crossing and a road: the same reasons that built Persian towns.",
    paths:[
      { id:"A", name:"The Scribe", product:"Settlement Report", steps:["Write a heading: **“Why Site C?”**","Explain why Site C is the best place for a town, using **at least four reasons** (water, food, defence, trade, materials, climate).","Finish with **one sentence** about why the other sites failed."], flying:"Can a town survive if it loses the reason it was built? Give an example." },
      { id:"B", name:"The Artisan", product:"Site Model or Map", steps:["Draw (or build in clay or card) a **valley** with mountains, a spring, a river and a road.","Mark the **perfect town site** and label **water, farmland, defence and road**.","Add a **key** with a symbol for each reason."], flying:"Add a second, worse site to your model and label what it is missing." },
      { id:"C", name:"The Herald", product:"Caravan Master's Advice", steps:["Imagine you are **Farhad**, advising a king where to build his new city.","Plan a **1-minute talk**: where, and **three reasons why** (use the six reasons).","Practise with a partner, then present to your team."], flying:"Answer a tricky question from the ‘king’: “Why not build on the river? It has the most water!”" }
    ],
    supportedShort:"the six reasons as picture cards; starter “Site C is best because…”; partner pairing.",
    lens:{
      pillar:"aroha", title:"The One who gives the water",
      look:"Look again at the spring at the foot of the mountains: the reason Site C became a city.",
      ref:"Psalm 104:10–13",
      paraphrase:"God sends springs into the valleys; water flows between the mountains and gives every wild animal a drink.",
      talk:[
        { q:"The psalm says God gives the water. How should that change how we treat water in a dry land?", listen:"With thanks and care: don't waste it, share it fairly, look after rivers and springs." },
        { q:"Who in our town depends on water from the mountains?", listen:"Farmers (irrigation, stock water), families (town water), businesses, animals and rivers." }
      ],
      live:"Choose **one way to save water** at home or school this week. Write it in your Caravan Journal."
    },
    clue:{ prompt:"Name the two great mountain ranges around the Persian plateau. How many ranges is that?", answer:2, explain:"The Zagros and the Alborz = 2. Waystation Clue 2 is saved for Friday!" },
    next:"Wednesday — Gandom: who lives on the mountain?",
    rubric:[
      { c:"The land", code:"SS-G",
        d:["Describes one feature.","“There's desert.”"],
        a:["Describes mountains around the edge and deserts in the middle.","“The Zagros and Alborz mountains go around the edge, and there are deserts like the Lut in the middle.”"],
        f:["Links the shape of the land to where people live.","“Towns are around the edge near the mountains because the middle is too hot and dry.”"],
        i:["I can describe one feature of Iran's land.","I can describe the mountains around the edge and the deserts in the middle.","I can explain how the shape of the land decides where people live."] },
      { c:"Settlement factors", code:"SS-G",
        d:["Gives one reason.","“People live where there's water.”"],
        a:["Gives four reasons, applied to a site.","“Site C is best because it has a spring for water, flat land for farming, hills for defence and a road for trade.”"],
        f:["Weighs the reasons and explains which matters most.","“Water matters most: without it the others don't help, like Site B.”"],
        i:["I can give one reason people settle somewhere.","I can give four reasons and use them to choose a site.","I can explain which reason matters most, and why."] },
      { c:"Water & mountains", code:"SS-G · SS-P",
        d:["Says towns are near mountains.","“The towns are by the mountains.”"],
        a:["Explains that water comes from the mountains.","“Snow and rain fall on the mountains, so there's water at the foot of them.”"],
        f:["Explains how qanats let towns grow.","“Persian towns are near mountains because snow and rain sink into the ground there, and qanats can bring the water out. Without that, people couldn't live on the plateau.”"],
        i:["I can say where the towns are.","I can explain why water is found near mountains.","I can explain how qanats helped towns grow."] }
    ],
    plan:{
      prior:"From Monday: where Iran is; the three peoples. Students will know local reasons for towns (rivers, roads) without having names for them. Many won't know the word ‘plateau’.",
      kc:["Thinking","Using language, symbols & texts","Participating & contributing"],
      sequence:[
        ["0–6","The Dispatch","Farhad's dispatch. **Waystation Check** on Monday's learning (mini-whiteboards). LI/SC.","Recall; whiteboards."],
        ["6–18","Discovery","**Plateau Flyover** (mountains around the edge, deserts in the middle, 70.7 °C in the Lut); **Why settle here?** (six reasons); **Settlement Picker** (team vote, then 100 years later); Hononga: why is our town here?","Predict, vote, explain."],
        ["18–38","Choose Your Path","A/B/C. Roam: “Which reason matters most? Why?”","Report / model / talk."],
        ["38–45","Through the Lens","Psalm 104:10–13 — four moves.","Discuss; choose a water-saving action."],
        ["45–50","Waystation Clue & Exit","Waystation Clue 2 (answer 2); self-assess; darics.","Solve; self-assess."]
      ],
      diff:{
        supported:"The six reasons as picture cards; sentence starters; copy the valley from the slide; partner pairing.",
        esol:"Pictures on every reason chip; act out ‘defence’ and ‘trade’; rehearse the Path C talk with a partner first.",
        learning:"Choice of response mode; Path B can be drawn rather than built; calm screen available.",
        flying:"“Can a town survive if it loses the reason it was built?”; compare Site C with our own town."
      },
      assess:{
        lookFor:["Describes mountains around the edge and deserts in the middle","Uses at least four settlement reasons accurately","Explains the link between mountains and water"],
        evidence:["Settlement Picker votes and reasons","Path products (photograph)","Exit self-assessment"]
      },
      inquiry:["Which reasons did students use most and least?","Who could link the mountains to water? Revisit with qanats on Thursday.","Did the Ashburton link help students see the same patterns at home?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"farhad", meta:"A mountain pass above the plain",
        msg:"Greetings, young travellers. Farhad, caravan master. I have led camels to every city on the Royal Road. Here is my first lesson, and my best: **“Find the water and you'll find the town.”** Every city on this road is here for a reason. Learn the reasons, and you'll never get lost.",
        notes:[["SAY","Read the message. 🟡 Farhad is a fictional guide."],["ASK","“What do you think he means: ‘Find the water and you'll find the town’?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"Name the three peoples of the land before the empire.", a:"Elamites, Medes and Persians." }, { q:"Which came first: 539 BC or 518 BC?", a:"539 BC: BC counts down." }, { q:"Give one primary source about Persia.", a:"e.g. the Cyrus Cylinder or the Behistun inscription." } ],
        notes:[["ASK","Mini-whiteboards: students write an answer, then flip the card."],["IF","If many miss BC order, re-teach in 1 minute: “BC counts down like a rocket launch: 10, 9, 8… so the bigger BC number is earlier.”"]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"The shape of the land", title:"Plateau Flyover", ix:"plateau",
        notes:[["CLICK","Press → to tilt the map and lift the mountains, then show the deserts and the Lut's temperature, then return to flat."],["SAY","“High mountains run around much of the edge: the Zagros in the west and the Alborz in the north. In the middle is a high plateau with deserts.”"],["SAY","“The Lut Desert in the south-east is one of the hottest places on Earth: NASA satellites measured a ground temperature of 70.7 °C there in 2005.”"],["ASK","“Where on this map would you *not* build a town? Why?” ⏳"],["LISTEN","The middle of the desert: no water, too hot."],["NOTE","Sources: Britannica (Zagros, about 1,600 km; Kavir Desert), NASA Earth Observatory (Lut). The map is simplified."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Why settle here?", title:"The six reasons", ix:"settlesix",
        notes:[["SAY","“People choose a place to settle for six big reasons: water · food and farmland · defence · trade routes · building materials · climate.”"],["CLICK","Tap each reason; ask the class where it is in the picture before it pins on. Or ‘Show all six’."],["ASK","“Which reason do you think matters most?”"],["LISTEN","Water! Without it, nothing else works."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"You choose", title:"The Settlement Picker", ix:"settlepick",
        notes:[["SAY","“A king wants a new town in this valley. Which site, A, B, C or D?”"],["TALK","Teams discuss for 1 minute using the six reasons, then vote on whiteboards."],["CLICK","‘Reveal: 100 years later’, then tap each site to read what happened."],["SAY","“Many Persian towns grew at the foot of mountains, where underground water could be reached and brought out by qanats: tunnels that use gravity to carry water from a ‘mother well’ near the mountains. We'll build one on Thursday!”"],["NOTE","The valley is fictional (🟢 the reasons are real geography)."]] },
      { type:"hononga", phase:"excavate", fs:"real", title:"Why is *our* town here?",
        body:"Ashburton began where the **main road south crossed the river**. An accommodation house was built beside the **river ferry** in **1858**, and the town was **surveyed in 1863–64**.\n\n❓ Which of the **six reasons** explain *our* town? Which reasons might explain a town you've lived in or visited?",
        notes:[["ASK","“Which of the six reasons explain our town?” (Water: the river; trade: the road and the crossing; flat, fertile land: the plains.)"],["NOTE","Source: Te Ara — Canterbury places: Mid-Canterbury."]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAY","“Choose your path. Every path uses the six reasons: keep them in mind.”"],["CLICK","Start the 20-minute timer."],["ASK","While roaming: “Which reason matters most for this site? How do you know?”"]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Psalm 104:10–13 from the class Bible."],["ASK","“The psalm says God gives the water. How should that change how we treat water in a dry land?” Then: “Who in our town depends on water from the mountains?”"]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: Zagros and Alborz = 2."],["IF","If a team names other ranges (e.g. the Taurus), praise the knowledge, then: “The two around the Persian plateau that we met today.”"]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess against the three success criteria."],["CLICK","C = darics."]] }
    ]
  };

  /* ======================= WEDNESDAY · SCIENCE ======================= */
  const wed = {
    id:"w01-wed", week:1, day:"wed", subject:"science", duration:50,
    title:"What Is a Habitat? The Zagros Mountain Community", guide:"gandom",
    codes:["SC-LW","SC-P"],
    coverage:"Y5 Science (2027): ecosystems have living and non-living parts; habitats and communities; predator and prey (introduced).",
    li:"We are learning what habitats and communities are, and what animals need to survive.",
    sc:["I can explain what a habitat is.","I can sort the living and non-living parts of an ecosystem.","I can explain the difference between a population and a community."],
    vocab:[
      { w:"habitat", def:"the place where an animal or plant lives and gets everything it needs" },
      { w:"organism", def:"one living thing" },
      { w:"population", def:"all the living things of one kind in one place" },
      { w:"community", def:"all the populations of different living things in one place" },
      { w:"ecosystem", def:"a community of living things together with the non-living things around them" },
      { w:"living (biotic)", def:"alive, or once alive: plants, animals, fungi, bacteria", alt:["biotic"] },
      { w:"non-living (abiotic)", def:"never alive: rock, water, soil, sunlight, temperature", alt:["abiotic"] },
      { w:"shelter", def:"a safe place to rest and hide" },
      { w:"prey", def:"an animal that is hunted and eaten by another animal" },
      { w:"predator", def:"an animal that hunts and eats other animals" }
    ],
    prep:{ min:5, items:["Caravan Journals","Optional: print the leopard and wild goat animal cards","Optional: shoeboxes for Path B dioramas"] },
    safety:[],
    care:[],
    hononga:"**Our own mountain community.** The Southern Alps / Kā Tiritiri o te Moana have their own habitats and communities too. ❓ What lives in our high country, and what do those animals need?",
    paths:[
      { id:"A", name:"The Scribe", product:"Habitat Fact File", steps:["Choose **one Zagros animal** (Persian leopard, wild goat, golden eagle).","Write its **habitat**, **what it eats**, and how it gets its **four needs** (food, water, shelter, space).","Add **one danger** it faces and draw it in its habitat."], flying:"What might happen to the leopards if many wild goats were hunted?" },
      { id:"B", name:"The Artisan", product:"Mountain Diorama Plan", steps:["Draw (or start in a shoebox) the **Zagros mountain community**.","Include **at least 4 living** and **4 non-living** parts.","**Colour-code**: living parts one colour, non-living another. Label everything."], flying:"Add arrows showing what eats what. What's at the top?" },
      { id:"C", name:"The Herald", product:"Gandom's Guided Tour", steps:["Plan a **1-minute nature documentary** voice-over, as Gandom the camel.","Introduce the **community**: name 3 animals and 2 plants, and what they need.","Use the words **habitat**, **population** and **community**. Practise, then present."], flying:"In your tour, explain why the rock, snow and water matter to the leopard." }
    ],
    supportedShort:"animal fact cards; a living / non-living sorting mat; sentence starters; partner pairing.",
    lens:{
      pillar:"aroha", title:"The mountains belong to the wild goats",
      look:"Look again at the wild goats on the cliffs: their home has everything they need.",
      ref:"Psalm 104:18",
      paraphrase:"The high mountains are home for the wild goats; the rocky cliffs are a safe place for the hyrax.",
      talk:[
        { q:"The psalm says the mountains belong to the wild goats. What does that tell us about how God sees animals' homes?", listen:"God made each habitat for its animals; He cares about their homes; they're His gift to them." },
        { q:"How can people share land well with animals?", listen:"Protect habitats, don't over-hunt, keep water clean, leave space, set up sanctuaries." }
      ],
      live:"Draw **one creature and its ‘home’** in your Caravan Journal, with a short thank-you prayer for it."
    },
    clue:{ prompt:"How many things does every animal need to survive?", answer:4, explain:"Food, water, shelter and space = 4. Waystation Clue 3 is saved for Friday!" },
    next:"Thursday — Nasrin's three desert problems.",
    rubric:[
      { c:"Habitat", code:"SC-LW",
        d:["Says where an animal lives.","“A habitat is where animals live.”"],
        a:["Explains a habitat with the four needs.","“A habitat is the place an animal gets its food, water, shelter and space.”"],
        f:["Explains how one habitat meets an animal's needs.","“The Zagros gives wild goats grass, streams, cliffs to escape and room to roam.”"],
        i:["I can say where an animal lives.","I can explain what a habitat is, using the four needs.","I can explain how one habitat gives an animal everything it needs."] },
      { c:"Living and non-living", code:"SC-LW",
        d:["Sorts some parts with help.","Sorts the goat and the rock correctly."],
        a:["Sorts all parts correctly with reasons.","“Soil bacteria are living; sunlight is non-living.”"],
        f:["Explains how living parts depend on non-living parts.","“Leopards depend on goats, and goats depend on plants and water, so rain and soil matter to the leopard too.”"],
        i:["I can sort some parts with help.","I can sort living and non-living parts and explain why.","I can explain how living things depend on the non-living parts."] },
      { c:"Population vs community", code:"SC-LW",
        d:["Uses one of the words.","“A community is lots of animals.”"],
        a:["Explains both correctly with an example.","“All the leopards are a population; leopards, goats, plants and birds together are a community.”"],
        f:["Uses organism → population → community → ecosystem in order.","“One leopard is an organism; all the leopards are a population; with all the other living things they're a community; add the rock and water and it's an ecosystem.”"],
        i:["I can use one of the words.","I can explain population and community with an example.","I can explain organism, population, community and ecosystem in order."] }
    ],
    plan:{
      prior:"Students will know many animals and the word ‘habitat’; fewer will know population, community or ecosystem. Few will know Iran's wildlife (leopards, wild goats).",
      kc:["Thinking","Using language, symbols & texts"],
      sequence:[
        ["0–6","The Dispatch","Gandom's dispatch. **Waystation Check** on Tuesday. LI/SC.","Recall; whiteboards."],
        ["6–18","Discovery","**Habitat Zoom** (organism → population → community → ecosystem); meet the Zagros animals; **Living or non-living?** sorter; the four needs.","Vote, sort, explain."],
        ["18–38","Choose Your Path","A/B/C. Roam: “Is that living or non-living? How do you know?”","Fact file / diorama plan / guided tour."],
        ["38–45","Through the Lens","Psalm 104:18 — four moves.","Discuss; draw and pray."],
        ["45–50","Waystation Clue & Exit","Waystation Clue 3 (answer 4); self-assess; darics.","Solve; self-assess."]
      ],
      diff:{
        supported:"Animal cards with key facts; sorting mat; sentence starters; partner pairing.",
        esol:"Picture-rich slides; act out ‘predator’ and ‘prey’; label a diagram rather than write paragraphs.",
        learning:"Hands-on sorting; choice of response mode; calm screen available.",
        flying:"Predict what happens to the leopards if the wild goats are over-hunted."
      },
      assess:{
        lookFor:["Defines a habitat using the four needs","Sorts living and non-living accurately (including bacteria and sunlight)","Uses population and community correctly"],
        evidence:["Sorter votes","Path products (photograph)","Exit self-assessment"]
      },
      inquiry:["Who confused population and community? Revisit in Thursday's Waystation Check.","Did students recognise bacteria as living?","Which animals caught their interest (useful for Week 3's food webs)?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"gandom", meta:"A rocky slope in the Zagros",
        msg:"Hmph. **Mountains.** Why did it have to be mountains? I'm Gandom, by the way. A camel. A clever one. Look around you, though: everything up here is connected to everything else. Even me. **Mostly me.**",
        notes:[["SAY","Read it in a grumpy, dry voice. 🟡 Gandom is fictional (‘Gandom’ means wheat)."],["ASK","“What do you think Gandom means: everything up here is connected?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"Name the two mountain ranges around the plateau.", a:"The Zagros and the Alborz." }, { q:"Give two reasons people choose a place to settle.", a:"Any two: water, food & farmland, defence, trade, materials, climate." }, { q:"Why are many Persian towns near mountains?", a:"Water comes from the mountains (snow and rain), and qanats bring it out." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Zoom out", title:"Habitat Zoom", ix:"habitatzoom",
        notes:[["CLICK","Press → to zoom: one leopard (organism) → all the leopards (population) → all the living things (community) → plus rock, soil, water, sunlight and snow (ecosystem)."],["SAY","“The Persian leopard lives in Iran's mountains. Its main prey are wild goats and wild sheep, with wild boar and porcupines.”"],["SAY","“The Persian leopard is Endangered. Iran may have about 550–850 of them, though scientists say this estimate needs updating.”"],["NOTE","Source: IUCN SSC Cat Specialist Group (Persian leopard report). Leopards usually live alone; the population is spread across the mountains. The picture is a simplified scene."]] },
      { type:"animalcards", phase:"excavate", fs:"real", kicker:"Meet the community", title:"Who lives in the Zagros?",
        animals:[
          { img:"animal-01", icon:"🐆", col:"#C9822B", t:"Persian leopard", status:"ENDANGERED", d:"A **predator**. Hunts mostly **wild goats** and **wild sheep**. Where wild goats are common, leopards are found." },
          { img:"animal-02", icon:"🐐", col:"#8a6a4a", t:"Wild goat (bezoar ibex)", d:"**Prey** for the leopard. Eats grasses and shrubs; climbs **cliffs** to escape danger." },
          { img:"animal-04", icon:"🦅", col:"#3a2614", t:"Golden eagle", d:"A **predator** of the high mountains, hunting from the sky." }
        ],
        notes:[["SAY","“Let's meet three members of the community.” Read each card."],["ASK","“Which ones are predators? Which is prey?”"],["DEEPER","“Scientists found that wild-goat numbers were the main thing linked to leopards being present in protected areas. Why might that be?” (No goats, no food for leopards.)"],["NOTE","Leopard facts: IUCN Cat Specialist Group report."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Biotic or abiotic?", title:"Living or non-living?", ix:"biotic",
        notes:[["CLICK","Hold up each card: class votes LIVING or NON-LIVING, then drag it."],["ASK","At soil bacteria: “Can something too small to see be alive?” ⏳"],["LISTEN","Yes: bacteria are living things. They help break down dead leaves."],["IF","“Water is living because it moves” → “Moving isn't the test. Living things grow, feed, breathe and reproduce. Does water do those?”"]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Every animal needs…", title:"Four things to survive",
        cards:[ { icon:"🌿", t:"Food", d:"Plants or other animals to eat.", foot:"Goat: grass & shrubs" }, { icon:"💧", t:"Water", d:"To drink, every day or two.", foot:"Goat: mountain streams" }, { icon:"🪨", t:"Shelter", d:"A safe place to rest and hide.", foot:"Goat: cliffs & ledges" }, { icon:"🗺️", t:"Space", d:"Room to roam, find mates and raise young.", foot:"Goat: the whole range" } ],
        notes:[["SAY","“Every animal needs four things: food, water, shelter and space.”"],["ASK","“Which of these does a mountain give a wild goat?”"],["LISTEN","Grass and shrubs, streams, cliffs to escape predators, room to roam."]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAY","“Choose your path. Every path uses the words habitat, population and community.”"],["CLICK","Start the 20-minute timer."],["ASK","While roaming: “Is that living or non-living? How does it help the animal?”"]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Psalm 104:18 from the class Bible."],["ASK","“The psalm says the mountains belong to the wild goats. What does that tell us about how God sees animals' homes?” Then: “How can people share land well with animals?”"]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: food, water, shelter, space = 4."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess against the three success criteria."],["CLICK","C = darics."]] }
    ]
  };

  /* ======================= THURSDAY · TECHNOLOGY ======================= */
  const thu = {
    id:"w01-thu", week:1, day:"thu", subject:"technology", duration:50,
    title:"Think Like a Desert Engineer", guide:"nasrin",
    codes:["TE-TK","TE-NT","TE-TP"],
    coverage:"Technology (NZC 2007, Level 3): Technological Knowledge (technological systems: input → process → output) and Nature of Technology (technology and society). Links to Y5–6 Science (heat, water).",
    li:"We are learning how Persian engineers solved the problems of living in a hot, dry land, and to describe a technology as a system.",
    sc:["I can name three big problems of desert living.","I can match each problem to a Persian solution.","I can describe a technology as input → process → output."],
    vocab:[
      { w:"technology", def:"things people design and make to solve problems or meet needs" },
      { w:"engineer", def:"a person who designs and builds things to solve problems" },
      { w:"problem", def:"something that needs to be solved" },
      { w:"solution", def:"a way of solving a problem" },
      { w:"system", def:"parts that work together to do a job" },
      { w:"input", def:"what goes into a system" },
      { w:"process", def:"what the system does to the input" },
      { w:"output", def:"what comes out of a system" },
      { w:"stakeholder", def:"a person who will use or be affected by a design" },
      { w:"need", def:"something a stakeholder must have" }
    ],
    prep:{ min:5, items:["Caravan Journals","Optional ‘problem props’: a jug of water, a fan and an ice cube on a plate"] },
    safety:["If you use the problem props: keep water away from the fan and any power point; the fan is operated by the teacher only."],
    care:[],
    hononga:"**Moving water in Canterbury.** Mid Canterbury farmers also move water across dry land: Ashburton District's **stockwater races** are channels that carry water to farms. ❓ How is a water race like a qanat? How is it different?",
    paths:[
      { id:"A", name:"The Scribe", product:"Engineer's Report", steps:["Choose **one invention**: the qanat, the windcatcher or the yakhchāl.","Draw an **input → process → output** diagram for it.","Write a **paragraph**: what problem it solves, who it helps, and how it works."], flying:"Which of these three ideas could still help New Zealanders today? How?" },
      { id:"B", name:"The Artisan", product:"Invention Sketch", steps:["Draw a **cut-away** of a qanat, windcatcher or yakhchāl (as if sliced in half).","Add **arrows** to show how the **water**, **air** or **cold** moves.","**Label** at least five parts."], flying:"Add a second sketch: how could you improve it with modern materials?" },
      { id:"C", name:"The Herald", product:"Inventor's Pitch", steps:["Pretend **you** invented one of the three. Present it to ‘the king’.","In **1 minute**: the problem, your solution, and why he should pay for it.","Use the words **input**, **process** and **output**."], flying:"Answer the king's tricky question: “What happens if it breaks?”" }
    ],
    supportedShort:"I-P-O template with pictures; cut-away outlines to label; sentence starters; partner pairing.",
    lens:{
      pillar:"manaaki", title:"By wisdom a house is built",
      look:"Look again at the windcatcher: a house made cool by wisdom, not power.",
      ref:"Proverbs 24:3–4; Proverbs 2:6",
      paraphrase:"A house is built by wisdom and made strong by understanding. It is the LORD who gives wisdom.",
      talk:[
        { q:"Persian engineers used wisdom to make homes people could live in. Where does wisdom come from?", listen:"From God (Proverbs 2:6); from learning, listening, trying and improving." },
        { q:"How could you use your problem-solving to help someone this week?", listen:"Fix something, help a friend with work, solve a class problem, invent a better system." }
      ],
      live:"Name **one problem at school** you could help solve. Write it in your Caravan Journal."
    },
    clue:{ prompt:"How many big desert problems did Persian engineers solve today?", answer:3, explain:"Water, heat and keeping things cold = 3. Waystation Clue 4 is saved for Friday!" },
    next:"Friday — palace patterns & the first Seal Fragment!",
    rubric:[
      { c:"Desert problems", code:"TE-NT",
        d:["Names one problem.","“It's too hot.”"],
        a:["Names three problems of desert living.","“Finding water, the heat, and keeping food cold.”"],
        f:["Explains why each problem matters for a town.","“Without water there's no farming, without cool houses people get sick, without ice food spoils.”"],
        i:["I can name one desert problem.","I can name three desert problems.","I can explain why each problem matters for a town."] },
      { c:"Matching solutions", code:"TE-TK",
        d:["Names one invention.","“The qanat gives water.”"],
        a:["Matches all three problems and solutions, with how each works.","“The windcatcher catches breezes and lets hot air out, so the house is cooler.”"],
        f:["Compares an old solution with a modern one.","“A windcatcher cools without electricity, but an air-conditioner needs power.”"],
        i:["I can name one invention.","I can match three problems to three inventions and say how each works.","I can compare an old solution with a modern one."] },
      { c:"Systems", code:"TE-TK",
        d:["Says what goes in or comes out.","“Water comes out.”"],
        a:["Describes one invention as input → process → output.","“A qanat's input is groundwater near the mountains. Its process is gravity pulling water down a gently sloping tunnel. Its output is water for a town in the desert.”"],
        f:["Describes two systems and compares them.","“The windcatcher and the yakhchāl both use nature (wind, cold nights, shade) instead of power.”"],
        i:["I can say what goes in or comes out.","I can describe an invention as input → process → output.","I can describe two systems and compare them."] }
    ],
    plan:{
      prior:"From Tuesday: towns grow near mountains where there's water; the word ‘qanat’. Students know modern solutions (taps, fridges, air-con) but rarely think about life without electricity.",
      kc:["Thinking","Participating & contributing"],
      sequence:[
        ["0–6","The Dispatch","Nasrin's dispatch. **Waystation Check** on Wednesday. LI/SC.","Recall; whiteboards."],
        ["6–18","Discovery","Turn & talk: desert problems 2,500 years ago; **Problem → Solution Matcher** (qanat, windcatcher, yakhchāl); **Input → Process → Output** builder; stakeholders & needs.","Talk, match, sort."],
        ["18–38","Choose Your Path","A/B/C. Roam: “What's the input? What's the process?”","Report / sketch / pitch."],
        ["38–45","Through the Lens","Proverbs 24:3–4; 2:6 — four moves.","Discuss; name a problem to solve."],
        ["45–50","Waystation Clue & Exit","Waystation Clue 4 (answer 3); self-assess; darics.","Solve; self-assess."]
      ],
      diff:{
        supported:"I-P-O template with pictures; cut-away outlines to label; sentence starters.",
        esol:"Problem props make the problems concrete; label diagrams; rehearse the pitch with a partner.",
        learning:"Hands-on props; choice of response mode; calm screen available.",
        flying:"Which idea could still help New Zealanders today? Compare with a modern solution."
      },
      assess:{
        lookFor:["Names three desert problems","Matches each to a Persian solution and says how it works","Describes one invention as input → process → output"],
        evidence:["Matcher and I-P-O sort","Path products (photograph)","Exit self-assessment"]
      },
      inquiry:["Who could explain ‘process’ (the hardest part)?","Which invention interested students most (useful for Weeks 2–4 builds)?","Do we have the materials ready for next week's qanat build?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"nasrin", meta:"Climbing out of a well shaft · lamp in hand",
        msg:"Oh! Hello. I'm Nasrin — my father digs qanats, and so do I. Out here, **the sun will cook you, the water hides underground, and food goes bad by lunch.** My family has solved all three. **Want to learn how?** Every problem has a slope. Find it.",
        notes:[["SAY","Read the message. 🟡 Nasrin is a fictional guide (a young water engineer)."],["ASK","“What do you think she means: every problem has a slope?” (Water runs downhill: find the way things naturally move.)"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"What is a habitat?", a:"The place an animal gets its food, water, shelter and space." }, { q:"Is soil bacteria living or non-living?", a:"Living!" }, { q:"What's the difference between a population and a community?", a:"Population = all of one kind; community = all the different living things together." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"discussion", phase:"excavate", fs:"real", kicker:"Turn & Talk", q:"You live in the desert **2,500 years ago**. No electricity. What are your **biggest problems**?", sub:"Think about water, heat, food… and what we use today that they didn't have.", talk:60,
        notes:[["TALK","60-second talk. If you brought the props (jug, fan, ice cube), hold each up as a hint."],["LISTEN","Finding water; the heat; keeping food and water cool; no fridges, no air-con, no taps."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Three problems, three inventions", title:"Problem → Solution", ix:"problemsolution",
        notes:[["CLICK","Tap a problem, then the class chooses the solution. Wrong matches show red; correct ones lock in green with an explanation."],["SAY","Qanat: “An underground tunnel with a gentle slope that carries water by gravity from a ‘mother well’ near the mountains. Vertical shafts reach down to the tunnel. Some of Iran's World Heritage qanats date from the 3rd–4th century BC.”"],["SAY","Windcatcher (badgir): “A tall tower that catches breezes and lets hot air escape, with no electricity. The desert city of Yazd has about 700 of them.”"],["SAY","Yakhchāl: “Water froze in shallow pits on winter nights, shaded by a tall wall. The ice was stored in a deep pit under a thick dome and lasted into summer.”"],["NOTE","Sources: Persian Qanat (World Heritage listing), AFP/Al-Monitor (Yazd windcatchers), Archnet and Atlas Obscura (yakhchāl). The drawings are simplified."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Input → process → output", title:"Inside a system", ix:"ipo",
        notes:[["SAY","“Engineers describe technologies as systems: what goes in (input), what happens (process), and what comes out (output).”"],["CLICK","Choose an invention. Class says where each card goes, then drag it. ‘Show answer’ sorts them."],["ASK","“What's the input of a qanat? The process? The output?”"],["LISTEN","Input = groundwater near the mountains; process = gravity pulls water along a gently sloping tunnel; output = water at the surface for a town and farms."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Who is it for?", title:"Stakeholders & needs",
        cards:[ { icon:"👩‍🌾", t:"A farmer", d:"**Needs** water for crops, every day of the growing season.", foot:"→ the qanat" }, { icon:"👨‍👩‍👧", t:"A family", d:"**Needs** a cool room to sleep in during a 40 °C summer.", foot:"→ the windcatcher" }, { icon:"🧑‍🍳", t:"A cook", d:"**Needs** to keep food fresh, and ice for cold drinks in summer.", foot:"→ the yakhchāl" } ],
        notes:[["SAY","“Engineers always ask: *who* is this for, and *what* do they need? The person is the stakeholder.”"],["ASK","“Who would be a stakeholder for a new playground? What would they need?”"]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAY","“Choose your path. Every path explains one invention as a system.”"],["CLICK","Start the 20-minute timer."],["ASK","While roaming: “What's the input? What's the process? Who is it for?”"]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Proverbs 24:3–4 and Proverbs 2:6 from the class Bible."],["ASK","“Persian engineers used wisdom to make homes people could live in. Where does wisdom come from?” Then: “How could you use your problem-solving to help someone this week?”"]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: water, heat and keeping things cold = 3."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess against the three success criteria."],["CLICK","C = darics."]] }
    ]
  };

  /* ======================= FRIDAY · ART ======================= */
  const fri = {
    id:"w01-fri", week:1, day:"fri", subject:"art", duration:50,
    title:"Rosettes & Radial Symmetry: Patterns of the Palaces", guide:"hamid",
    codes:["VA-PK","VA-DI","VA-UC","MA"],
    coverage:"Visual Arts (NZC 2007, Level 3): practical knowledge (construction, repeat pattern), developing ideas, understanding art in context (Persepolis rosettes). Maths: angles (30°), symmetry; Old Persian number signs (place value).",
    li:"We are learning to design with radial symmetry, inspired by the rosettes in Persian palace art.",
    sc:["I can explain what radial symmetry is.","I can construct a rosette using a compass and equal angles.","I can repeat colours and shapes evenly around a centre."],
    vocab:[
      { w:"pattern", def:"shapes, lines or colours that repeat in a planned way" },
      { w:"motif", def:"a shape or picture that repeats in a design" },
      { w:"rosette", def:"a flower-like design with petals around a centre" },
      { w:"symmetry", def:"when one part of a design matches another part exactly" },
      { w:"radial symmetry", def:"a pattern that repeats evenly around a centre point" },
      { w:"line of symmetry", def:"a line that splits a shape into two mirror-image halves" },
      { w:"repeat", def:"to do or show again, in the same way" },
      { w:"border", def:"a decorated edge around a picture or panel" },
      { w:"relief", def:"a carving where the picture stands out from a flat background" }
    ],
    prep:{ min:10, items:["Compasses, rulers, protractors (or printed 12-segment templates)","A4 card, coloured pencils / felt pens, scissors","A3 team banner card for each team","Caravan Journals"] },
    safety:["Compass points: carried point-down, used flat on the desk, passed handle-first.","Scissors: usual classroom rules."],
    care:[],
    hononga:"**Radial symmetry in creation.** Look for it at home: a kiwifruit cut across, a flower, a starfish, a bicycle wheel. Bring a photo or drawing of one to share.",
    paths:[
      { id:"A", name:"The Scribe", product:"Pattern Journal", steps:["Make your own **12-petal rosette** (first 8 minutes, everyone).","In your journal, explain **how you kept it symmetrical** (circle, 30° marks, the same petal each time).","Write **what Persian palace art used rosettes for** (borders on carvings at Persepolis)."], flying:"Design a rosette with two different layers of petals that still has radial symmetry." },
      { id:"B", name:"The Artisan", product:"Team Banner Border", steps:["Make your own **rosette** (first 8 minutes, everyone).","Make **more rosettes** for your team's banner border, all the same size.","Colour them with a **repeating colour pattern** and glue them around the team crest."], flying:"Make every second rosette a different design so the border alternates (A-B-A-B)." },
      { id:"C", name:"The Herald", product:"Teach-a-Rosette", steps:["Make your own **rosette** (first 8 minutes, everyone).","Write or record **clear steps** so a Year 3 student could make one.","**Test** your steps on a partner: can they follow them? Fix any step that confused them."], flying:"Explain the difference between radial symmetry and a mirror line in your instructions." }
    ],
    supportedShort:"printed 12-segment templates; a petal stencil; picture step cards; partner pairing.",
    lens:{
      pillar:"manaaki", title:"Everything beautiful in its time",
      look:"Walk the gallery: look at the rosettes everyone made. Same steps, different designs.",
      ref:"Ecclesiastes 3:11",
      paraphrase:"God has made everything beautiful in its time.",
      talk:[
        { q:"Where do you see God's ‘patterns’ in creation?", listen:"Flowers, snowflakes, shells, kiwifruit, the seasons, stars." },
        { q:"Why do people everywhere love to make beautiful patterns?", listen:"We're made in the image of a creative God; beauty brings joy; it's a way of using our gifts." }
      ],
      live:"Write your **name and one kind comment** on a sticky note for someone else's rosette."
    },
    clue:{ prompt:"Friday's clue is the Seal Fragment: add this week's four Waystation Clues and write the total in Old Persian number signs.", answer:12, explain:"3 + 2 + 4 + 3 = 12 → one 10-sign + one 2-sign." },
    next:"Week 2 — The King Who Opened the Gates.",
    rubric:[
      { c:"Radial symmetry", code:"VA-PK · MA",
        d:["Repeats a shape, but unevenly.","Petals of different sizes; some segments missing."],
        a:["Repeats evenly around a centre.","12 even segments; the petal repeats evenly; colours repeat in order."],
        f:["Explains radial symmetry vs a mirror line.","“Radial symmetry repeats around a point, while a mirror line reflects one way.”"],
        i:["I can repeat a shape with help.","I can repeat a shape evenly around a centre.","I can explain the difference between radial symmetry and a mirror line."] },
      { c:"Construction", code:"VA-PK",
        d:["Draws a circle and some segments with help.","Circle drawn; segments uneven."],
        a:["Uses a compass and equal angles accurately.","Circle, 12 points 30° apart, spokes ruled lightly."],
        f:["Designs a two-layer rosette that keeps radial symmetry.","Two petal layers, both evenly spaced."],
        i:["I can draw a circle and some segments with help.","I can use a compass and 30° angles to make 12 equal segments.","I can design a two-layer rosette that keeps its symmetry."] },
      { c:"Context", code:"VA-UC",
        d:["Says rosettes are Persian.","“They're from Persia.”"],
        a:["Explains where rosettes were used.","“Rows of rosettes decorated the borders of the carvings at Persepolis.”"],
        f:["Compares Persian rosettes with patterns from another culture or from nature, respectfully.","“Rosettes are like flowers cut across. Other cultures use radial patterns too, like rose windows.”"],
        i:["I can say where rosettes come from.","I can explain how rosettes were used in Persian palace art.","I can compare rosettes with other patterns, respectfully."] }
    ],
    plan:{
      prior:"Students will know line (mirror) symmetry from maths; radial symmetry and compass use may be new. Compass skills vary widely.",
      kc:["Managing self","Thinking"],
      sequence:[
        ["0–6","The Dispatch","Master Hamid's dispatch. **Waystation Check** on Thursday. LI/SC.","Recall; whiteboards."],
        ["6–18","Discovery","Rosettes at Persepolis (a real British Museum relief with 12-petalled rosettes); **Symmetry Mirror**; **Build a rosette** step by step; team banners.","Draw, predict, watch, try."],
        ["18–40","Choose Your Path (22 min)","Everyone makes a rosette (8 min), then A/B/C. Roam: “Is every segment the same?”","Journal / banner border / teach-a-rosette."],
        ["40–45","Through the Lens (gallery)","Ecclesiastes 3:11 — a 5-minute gallery walk.","Walk, notice, comment kindly."],
        ["45–50","Seal Fragment I & the Shadow's Note","Add the four clues (3 + 2 + 4 + 3 = 12); write 12 in Old Persian number signs; press them into the clay lock; Fragment I flies to the Seal. Read the Shadow's Note.","Add, write signs, celebrate; discuss the note."]
      ],
      diff:{
        supported:"Printed 12-segment templates; petal stencil; picture step cards.",
        esol:"Demonstrate each step; picture step cards; vocabulary pop-ups on screen.",
        learning:"Templates instead of compass and protractor; larger paper; extra time.",
        flying:"Two-layer rosette; explain radial symmetry vs a mirror line."
      },
      assess:{
        lookFor:["Even segments and repeated petals","Accurate compass and angle use (or careful template use)","Explains radial symmetry and where rosettes were used"],
        evidence:["Rosettes and team banners (photograph)","Path products","Seal Fragment working (12 = 10 + 2)"]
      },
      inquiry:["Who needs more compass practice before Week 2's cylinder seals?","Did students understand Old Persian number signs? Revisit place value next Friday.","How did students respond to the Shadow's Note?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"hamid", meta:"A palace workshop · stone dust in the air",
        msg:"Come in, come in. Master Hamid. I have carved for kings all my life. **Look at this border:** the same flower, again and again, each one perfect. The carvers drew it first with a cord and a peg. **You will too.** Slow hands, sharp eyes. Beauty takes time.",
        notes:[["SAY","Read the message slowly and kindly. 🟡 Master Hamid is a fictional guide."],["ASK","“How do you think a cord and a peg could help you draw a perfect circle?” (Like a compass!)"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"Name the three desert problems from yesterday.", a:"Water, heat and keeping things cold." }, { q:"Which invention catches the breeze?", a:"The windcatcher (badgir)." }, { q:"What is the output of a qanat?", a:"Water at the surface for a town and farms." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Real Persian art", title:"Rosettes at *Persepolis*",
        bullets:["At **Persepolis**, stone carvings were framed with rows of **rosettes**: flowers radiating from a centre.","A Persepolis carving in the **British Museum** has a border of **twelve-petalled rosettes** (6th–5th century BC).","Carvers repeated the **same flower**, perfectly evenly."],
        visual:{ artefact:"rosette" },
        notes:[["SAY","Read the points. “Twelve petals! That's what we'll make today.”"],["CLICK","To show the real carving, open the British Museum link (Sources panel on the lesson page): Relief fragment W_1818-0509-4."],["NOTE","The picture here is a simplified drawing, not the museum object."]] },
      { type:"interactive", phase:"excavate", fs:"real", paper:true, kicker:"Draw one petal…", title:"The Symmetry Mirror", ix:"symmetry",
        notes:[["CLICK","Draw in the gold segment (or press ‘Show a petal’). Your line repeats around the centre. Try 6, 8, 12 and 16 parts."],["ASK","“Where else do you see radial symmetry?” ⏳"],["LISTEN","Flowers, starfish, wheels, a kiwifruit cut across, snowflakes."],["DEEPER","Turn the mirror off: “Is it still radial symmetry?” (Yes: it still repeats around the point.)"]] },
      { type:"interactive", phase:"excavate", fs:"real", paper:true, kicker:"Step by step", title:"Build a rosette", ix:"rosettebuild",
        notes:[["CLICK","Press → through the 6 steps: circle → 12 points (30° apart) → spokes → one petal → repeat → centre, ring & colour."],["SAY","“360° divided by 12 is 30°. A protractor helps; the printed template does it for you.”"],["SAFETY","Compass points stay flat on the desk and are passed handle-first."]] },
      { type:"teams", phase:"excavate", fs:"real", kicker:"Team banners", title:"Our caravan teams",
        notes:[["SAY","“Each team's crest goes in the middle of a rosette border. Path B makes the borders.”"],["NOTE","Green 🟢 facts are real; yellow 🟡 ones are creatures of Persian art and story, not real animals. Team names can be changed in Settings."]] },
      { type:"paths", phase:"paths", fs:null, minutes:22,
        notes:[["SAY","“First 8 minutes: everyone makes a rosette. Then choose your path.”"],["CLICK","Start the 22-minute timer."],["ASK","While roaming: “Is every segment the same? How did you keep it even?”"],["SAFETY","Compass rules."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move. This is a 5-minute gallery reflection."],["SAY","Read Ecclesiastes 3:11."],["ASK","“Where do you see God's ‘patterns’ in creation?” Then: “Why do people everywhere love to make beautiful patterns?”"]] },
      { type:"folioseal", phase:"decode", fs:"story",
        notes:[["SAY","“It's time. Four Waystation Clues this week. Add them up, then write the total in Old Persian number signs and press them into the clay.”"],["CLICK","Tap each ‘?’ tile (already shown if solved this week). 3 + 2 + 4 + 3 = 12."],["SAY","“The Persians had signs for 1, 2, 10, 20 and 100. They wrote the biggest first. So 12 is one 10-sign and one 2-sign.”"],["CLICK","Press the 10 sign, then the 2 sign, then ‘Open the lock’. The clay cracks and Fragment I flies to the Seal."],["NOTE","The sign shapes are simplified wedges for the classroom. Source: Old Persian cuneiform (e.g. 22 = 20 + 2, 23 = 20 + 2 + 1); check the chart at UT Austin's Old Persian script page."]] },
      { type:"intercept", phase:"decode", fs:"story",
        msg:"Ten fragments. One of you will lose.",
        ask:"Who do you think the Shadow Courier is? Why would someone want the Seal for themselves?",
        notes:[["SAY","Read it in a low, mysterious voice. 🟡 The Shadow Courier is fictional."],["ASK","Take a few answers; don't resolve it. This mystery runs all term."],["LISTEN","Someone greedy, someone hurt, someone who wants power… or someone who has lost something."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess. Celebrate the first fragment!"],["CLICK","C = darics. Store rosettes and banners safely for the Week 10 Exhibition."]] }
    ]
  };

  BM.WEEKS[1] = {
    n:1,
    story:"The Seal of the Kings shatters in a sandstorm. Shirin's Road Scroll opens for the first time, and the caravan steps out into the Zagros Mountains. This week the historians find out whose land this was before the empire, the geographers read the plateau and learn why towns grow where they do, the scientists meet the mountain community, the engineers solve three desert problems, and the artists learn the rosette patterns of the palaces. On Friday, the four Waystation Clues are written in Old Persian number signs and pressed into a clay lock to free Fragment I.",
    hononga:"Where our families come from (Mon) · why Ashburton is where it is: the river crossing, the road and the 1858 ferry (Tue) · our own mountain communities in the Southern Alps (Wed) · Canterbury's stockwater races, a modern cousin of the qanat (Thu) · radial symmetry in kiwifruit, flowers and starfish (Fri). 🕊️ Some students may have family links to Iran or the Middle East: invite, never require, sharing.",
    seal:{
      answer:12,
      instruction:"Add the four **Waystation Clues**. Then write the total in **Old Persian number signs**, biggest first, and press them into the clay. *(10 = a corner wedge · 2 = two upright wedges · 1 = one upright wedge.)*",
      reveal:"🟡 **Fragment I found!** It glows and flies to its place on the Seal of the Kings. One down, nine to go. Next week: *The King Who Opened the Gates* — Babylon, 539 BC."
    },
    lessons:[mon, tue, wed, thu, fri]
  };
})(window.BM);
