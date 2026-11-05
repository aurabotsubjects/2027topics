/* ==========================================================
   WEEK 9 — STAGE IX · STAR-WATCHERS & SILK
   A night journey with star-watchers from the east. The Shadow Courier is unmasked: Zal.
   Notes: [KEY, text]  KEY = SAY ASK LISTEN IF CLICK TALK DEEPER PACE SAFETY WAIT NOTE CARE SIDE
   ========================================================== */
(function(BM){
  "use strict";

  /* ======================= MONDAY · HISTORY ======================= */
  const mon = {
    id:"w09-mon", week:9, day:"mon", subject:"history", duration:50,
    title:"Parthians, Sasanians & the Magi", guide:"shirin",
    codes:["SS-H","SS-P","RE"],
    coverage:"Y5–6 History practices (2027 Social Sciences): continuity and change (Persia rises again); chronology across BC/AD; sources (the Bible and tradition).",
    li:"We are learning how Persia rose again after Alexander, and how people from Persia appear in the story of Jesus and the early church.",
    sc:["I can name the Parthians and the Sasanians.","I can explain who the Magi were, and what the Bible does and doesn't say about them.","I can connect Acts 2:9 back to Week 1."],
    vocab:[
      { w:"Parthians", say:"PAR-thee-unz", def:"a people from north-east Iran who ruled Persia after Alexander's successors" },
      { w:"Sasanians", say:"suh-SAY-nee-unz", def:"the dynasty that ruled Persia from AD 224 to 651" },
      { w:"Magi", say:"MAY-jye", def:"wise men or star-watchers from the east who came to worship Jesus" },
      { w:"tradition", def:"beliefs or stories passed down over time, not always written in the Bible" },
      { w:"Pentecost", def:"the day the Holy Spirit came on Jesus's followers (Acts 2)" },
      { w:"continuity", def:"things that carry on over time" }
    ],
    prep:{ min:5, items:["Class Bible marked at Matthew 2:1–12 and Acts 2:5–11","Caravan Journals","Path B: small boxes or card to make gift boxes"] },
    safety:[],
    care:["Many families have Christmas traditions about ‘three kings’. Be gentle: tradition is lovely, and the Bible tells us what's certain."],
    hononga:"**Christmas in Aotearoa.** Nativity plays in NZ often show three kings with crowns. Matthew doesn't say how many Magi there were or call them kings: the ‘three’ comes from the three gifts.",
    paths:[
      { id:"A", name:"The Scribe", product:"Bible vs Tradition", steps:["Make a two-column table: **What the Bible says** / **What tradition says**.","Fill it in about the **Magi** (how many, names, kings, camels, the star).","Explain why it matters to know the difference."], flying:"Why might traditions grow around a story? Is that always bad?" },
      { id:"B", name:"The Artisan", product:"Gift Box for Jesus", steps:["Make **three small boxes**: gold, frankincense, myrrh.","Label each with **what it is** and **what it might mean**.","Add a fourth box: **a gift you could give Jesus**."], flying:"Research one gift's real use in the ancient world." },
      { id:"C", name:"The Herald", product:"Magi's Travel Diary", steps:["Write and read aloud a **travel diary** from a Magus.","Include the **star**, **Herod**, the **child** and the **gifts**.","Use only what **Matthew 2** tells us."], flying:"Add a final entry: going home by another way (Matthew 2:12)." }
    ],
    supportedShort:"a Bible/tradition sorting card set; gift labels; partner.",
    lens:{
      pillar:"aroha", title:"Overjoyed",
      look:"Look again at the Magi: people from the **east**, travelling a long way to worship a child.",
      ref:"Matthew 2:10–11",
      paraphrase:"When they saw the star, they were overjoyed. They went into the house, saw the child with Mary his mother, and bowed down and worshipped Him. Then they opened their treasures and gave Him gifts.",
      talk:[
        { q:"People from the east, perhaps from Persia, were among the first to worship Jesus. What does that show?", listen:"Jesus came for every nation; God draws people from far away; the good news is for everyone." },
        { q:"The Magi were overjoyed. What gives you joy about Jesus?", listen:"Accept every sincere answer." }
      ],
      live:"Think of a ‘gift’ you can give Jesus this week (time, kindness, praise). Write it in your Caravan Journal."
    },
    clue:{ prompt:"Acts 2:9 names Parthians, Medes and Elamites. How many peoples is that?", answer:3, explain:"3 peoples (the same three regions we met in Week 1!). Waystation Clue 1 = 3, saved for Friday!" },
    next:"Tuesday — Farhad: the Silk Road, from Persia to China.",
    rubric:[
      { c:"Persia rises again", code:"SS-H",
        d:["Says Persia continued.","“Persia came back.”"],
        a:["Names the Parthians and the Sasanians in order.","“After Alexander, the Parthians, then the Sasanians (AD 224–651).”"],
        f:["Explains continuity and change.","“Rulers changed, but the land, people and culture continued.”"],
        i:["I can say Persia continued.","I can name the Parthians and Sasanians in order.","I can explain continuity and change."] },
      { c:"The Magi", code:"RE · SS-P",
        d:["Says wise men visited Jesus.","“Three kings.”"],
        a:["Says what Matthew does and doesn't say.","“Magi from the east followed a star; Matthew doesn't say there were three or call them kings.”"],
        f:["Explains why separating Bible and tradition matters.","“So we know what's certain, and enjoy traditions as traditions.”"],
        i:["I can say wise men visited.","I can say what Matthew does and doesn't say.","I can explain why it matters."] },
      { c:"Acts 2:9", code:"RE · SS-H",
        d:["Names Pentecost.","“Pentecost.”"],
        a:["Connects Acts 2:9 to Week 1.","“Parthians, Medes and Elamites: the same regions as Week 1.”"],
        f:["Explains the big story.","“From Genesis 10 to Acts 2, God's plan includes the peoples of Persia.”"],
        i:["I can name Pentecost.","I can connect Acts 2:9 to Week 1.","I can explain the big story."] }
    ],
    plan:{
      prior:"Students know the Week 1 peoples and the timeline. Many hold ‘three kings’ traditions.",
      kc:["Thinking","Relating to others","Using language, symbols & texts"],
      sequence:[
        ["0–6","The Dispatch","Shirin's dispatch; Waystation Check; LI/SC.","Recall."],
        ["6–20","Discovery","**Persia Rises Again** timeline; Bible vs tradition (Magi); Acts 2:9.","Order; sort."],
        ["20–38","Choose Your Path","A/B/C.","Create."],
        ["38–45","Through the Lens","Matthew 2:10–11.","Discuss."],
        ["45–50","Waystation Clue & Exit","Clue 1 (answer 3).","Solve; self-assess."]
      ],
      diff:{
        supported:"Sorting cards; gift labels; partner.",
        esol:"Pictures of the Magi story; key words.",
        learning:"Gift-box making; chunked steps.",
        flying:"Why traditions grow; gifts' ancient uses."
      },
      assess:{
        lookFor:["Names Parthians and Sasanians","Separates Bible and tradition","Connects Acts 2:9"],
        evidence:["Path products","Sorting discussion","Exit self-assessment"]
      },
      inquiry:["Handle ‘three kings’ gently with families in mind.","Week 10: link back to Week 1's Map Wall."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"shirin", meta:"A desert night · star-watchers by the fire",
        msg:"Caravan, I thought Persia was finished when Persepolis burned. **I was wrong.** New rulers rose: the **Parthians**, then the **Sasanians**. And tonight we've met some travellers who study the stars. They say a new star has appeared in the west, and they're following it to find **a king**.",
        notes:[["SAY","Read the dispatch. 🟡 Shirin is fictional; the Magi are in Matthew 2."],["NOTE","Our story jumps forward several centuries this week."]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"What is a Persian miniature?", a:"A small, detailed painting, often in a book." }, { q:"Who raised Zal in the Shahnameh?", a:"The Simurgh (a bird of story)." }, { q:"Write 443 in Old Persian signs.", a:"Four 100s, two 20s, a 2 and a 1." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"The timeline continues", title:"Persia Rises Again", ix:"persiarises",
        notes:[["CLICK","Press → to add each event."],["SAY","“After Alexander, Persia rose again under the Parthians, then the Sasanians, who ruled from AD 224 to 651.”"],["NOTE","Source: Britannica (Sasanian dynasty, 224–651; replaced the Parthians)."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Matthew 2", title:"The Bible or tradition?",
        cards:[ { icon:"📖", t:"The Bible says", d:"**Magi from the east** saw His star, came to worship, and gave **gold, frankincense and myrrh**.", foot:"Matthew 2:1–12" }, { icon:"🎭", t:"Tradition adds", d:"**Three** of them, **kings**, with **names**, riding camels.", foot:"later stories" }, { icon:"🔎", t:"So…", d:"We **don't know** how many there were. Three **gifts** probably led to ‘three’ Magi.", foot:"how do we know?" } ],
        notes:[["SAY","Read Matthew 2:1–12 aloud."],["CARE","Traditions are lovely. We're just being careful historians."]] },
      { type:"discussion", phase:"excavate", fs:"real", kicker:"Turn & Talk", q:"In **Week 1**, we met the **Elamites, Medes and Persians**. In **Acts 2:9**, ‘Parthians, Medes and Elamites’ hear the gospel. **Why does that matter?**", sub:"Think about Genesis 10:22, Week 1's lens, and God's plan for every nation.", talk:45,
        notes:[["TALK","45 seconds."],["LISTEN","God's plan included these peoples from the start; the good news reached them; the whole term connects."]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAY","“Choose your path. Every product is careful about what the Bible actually says.”"],["CLICK","Start the 18-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Matthew 2:9–11."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 3."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = darics."]] }
    ]
  };

  /* ======================= TUESDAY · GEOGRAPHY ======================= */
  const tue = {
    id:"w09-tue", week:9, day:"tue", subject:"geography", duration:50,
    title:"Silk Road Cities: Persia Meets China", guide:"farhad",
    codes:["SS-G","SS-E","SS-H","MA"],
    coverage:"Y6 Geography and Economic Activity: trade routes connecting places; comparing cities. Y5 History link: an ancient civilisation comparison (China).",
    li:"We are learning to compare cities on the Silk Road and explain how trade connected Persia and China.",
    sc:["I can trace the Silk Road from China to the Mediterranean.","I can compare a Persian city and a Chinese city.","I can explain what moved along the road: goods, ideas and faith."],
    vocab:[
      { w:"Silk Road", def:"a network of trade routes joining China, Central Asia, Persia and the Mediterranean" },
      { w:"merchant", def:"a person who buys and sells goods" },
      { w:"import", def:"goods brought into a country" },
      { w:"export", def:"goods sent out of a country to sell" },
      { w:"trading partner", def:"a country that buys from and sells to another" },
      { w:"Chang'an", say:"chahng-AHN", def:"an ancient Chinese capital at the eastern end of the Silk Road (today's Xi'an)" }
    ],
    prep:{ min:5, items:["Caravan Journals","A world map or the class atlas","Path B: long paper strips for a Silk Road map"] },
    safety:[],
    care:[],
    hononga:"**Trading with China today.** China has been **New Zealand's largest trading partner since 2017** (MFAT). Milk powder, meat, wood and wool travel from Aotearoa to China, a modern Silk Road by sea and air.",
    paths:[
      { id:"A", name:"The Scribe", product:"Two-City Comparison", steps:["Compare **Tabriz** (Persia) and **Chang'an** (China).","Use a table: location, goods, buildings, who travelled there.","Write **one similarity** and **one difference**."], flying:"Explain how ideas and faith travelled the Silk Road, not just goods." },
      { id:"B", name:"The Artisan", product:"Silk Road Map with Goods", steps:["Draw the route from **Chang'an** to the **Mediterranean**.","Mark **at least four cities**.","Draw the **goods** travelling each way with arrows."], flying:"Add a scale bar and estimate the total distance." },
      { id:"C", name:"The Herald", product:"Merchant's Travel Tale", steps:["You are a merchant carrying silk from **Samarkand** to **Tabriz**.","Plan a **1-minute tale**: what you carry, who you meet, where you stay.","Mention a **caravanserai**."], flying:"Tell what your merchant would trade today from Aotearoa." }
    ],
    supportedShort:"a comparison template; goods picture cards; partner.",
    lens:{
      pillar:"mohio", title:"Nations come to the light",
      look:"Look again at the Silk Road: camels and caravans carrying treasure from east to west.",
      ref:"Isaiah 60:3, 6",
      paraphrase:"Nations will come to your light, and kings to the brightness of your dawn. Herds of camels will cover your land… bearing gold and incense and proclaiming the praise of the LORD.",
      talk:[
        { q:"Isaiah pictures camels bringing gold and incense to God's people. Where else have we seen gold and incense this week?", listen:"The Magi's gifts to Jesus (Matthew 2)." },
        { q:"Besides goods, what good things could travel between nations today?", listen:"Friendship, help, medicine, the gospel, ideas, music." }
      ],
      live:"Pray for one country that New Zealand trades with."
    },
    clue:{ prompt:"The Royal Road was about 2,500 km long. How many hundreds of kilometres is that?", answer:25, explain:"2,500 = 25 hundreds. Waystation Clue 2 = 25, saved for Friday!" },
    next:"Wednesday — Gandom: seals on the ice of the Caspian Sea.",
    rubric:[
      { c:"Tracing the Silk Road", code:"SS-G",
        d:["Finds China and Persia on a map.","Points to both."],
        a:["Traces the route through several cities.","Chang'an → Samarkand → Nishapur → Tabriz → the Mediterranean."],
        f:["Explains why most merchants didn't travel the whole way.","“Goods changed hands city to city, like a relay.”"],
        i:["I can find China and Persia.","I can trace the route through several cities.","I can explain why goods changed hands."] },
      { c:"Comparing cities", code:"SS-G · SS-H",
        d:["Names a Silk Road city.","“Tabriz.”"],
        a:["Gives a similarity and a difference.","“Both were trading cities; Chang'an was a capital, Tabriz had a great bazaar.”"],
        f:["Explains how trade shaped both.","“Trade brought people, wealth and new ideas to both cities.”"],
        i:["I can name a city.","I can give a similarity and a difference.","I can explain how trade shaped both."] },
      { c:"What moved", code:"SS-E · SS-H",
        d:["Names one good.","“Silk.”"],
        a:["Names goods going each way.","“Silk and porcelain went west; glass and silver went east.”"],
        f:["Includes ideas and faith.","“Paper-making, languages and beliefs travelled too.”"],
        i:["I can name a good.","I can name goods going each way.","I can include ideas and faith."] }
    ],
    plan:{
      prior:"Students know the Royal Road (Week 3) and bazaars and caravanserais (Week 7).",
      kc:["Thinking","Using language, symbols & texts","Participating & contributing"],
      sequence:[
        ["0–6","The Dispatch","Farhad's dispatch; Waystation Check; LI/SC.","Recall."],
        ["6–20","Discovery","**Silk Road Journey**; comparing cities; 🇳🇿 Hononga: China and NZ trade.","Trace; compare."],
        ["20–38","Choose Your Path","A/B/C.","Create."],
        ["38–45","Through the Lens","Isaiah 60:3, 6.","Discuss."],
        ["45–50","Waystation Clue & Exit","Clue 2 (answer 25).","Solve; self-assess."]
      ],
      diff:{
        supported:"Comparison template; goods cards.",
        esol:"Map visuals; key words; partner.",
        learning:"Map option; chunked steps.",
        flying:"Ideas and faith; scale."
      },
      assess:{
        lookFor:["Traces the route","Compares cities","Explains what moved"],
        evidence:["Path products","Discussion","Exit self-assessment"]
      },
      inquiry:["Y5 ancient-civilisation link: note who could compare Persia and China.","City Planner Big Projects: trade routes?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"farhad", meta:"A caravanserai on the Silk Road · bales of silk",
        msg:"Silk! Feel it: lighter than air. It came from **China**, thousands of kilometres east, but not on one camel. It passed from merchant to merchant, city to city, like the **Royal Road relay**. And it wasn't just silk travelling: **ideas**, **stories** and **faith** went along this road too.",
        notes:[["SAY","Read the dispatch. 🟡 Farhad is fictional."]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"Who ruled Persia from AD 224 to 651?", a:"The Sasanians." }, { q:"What does Matthew say the Magi brought?", a:"Gold, frankincense and myrrh." }, { q:"Who does Acts 2:9 name?", a:"Parthians, Medes and Elamites." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"City to city", title:"Silk Road Journey", ix:"silkroad",
        notes:[["CLICK","Press → to pass the silk west and the silver east, city by city."],["ASK","“Why didn't one merchant just travel the whole way?” (Too far, too dangerous; each knew his own region.)"],["NOTE","Sources: UNESCO Silk Roads (Tabriz bazaar); World Heritage Site (Persian Caravanserai). Route simplified."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Two Silk Road cities", title:"Tabriz and *Chang'an*",
        cards:[ { icon:"🛍️", t:"Tabriz (Persia)", d:"Its bazaar was **one of the most important commercial centres on the Silk Road** (UNESCO).", foot:"west" }, { icon:"🏯", t:"Chang'an (China)", d:"An ancient Chinese **capital** at the **eastern end** of the Silk Road (today's **Xi'an**).", foot:"east" }, { icon:"🔁", t:"Both", d:"Full of **merchants**, **languages** and **goods** from far away.", foot:"connected" } ],
        notes:[["SAY","Read each card."],["NOTE","Y5 History names ancient China as a case study: this is a light comparison."]] },
      { type:"hononga", phase:"excavate", fs:"real", title:"Aotearoa and *China*",
        body:"China has been **New Zealand's largest trading partner since 2017** (MFAT).\n\nMilk powder, meat, wood and wool travel from Aotearoa to China, a modern Silk Road by **sea and air**.\n\n**What do farms in our district send overseas?**",
        notes:[["ASK","“What do farms in our district send overseas?”"],["NOTE","Source: MFAT, China country page."]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAY","“Choose your path. Every product shows the road connecting places.”"],["CLICK","Start the 18-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Isaiah 60:1–6."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 25."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = darics."]] }
    ]
  };

  /* ======================= WEDNESDAY · SCIENCE ======================= */
  const wed = {
    id:"w09-wed", week:9, day:"wed", subject:"science", duration:50,
    title:"Sea Communities: the Caspian Seal", guide:"gandom",
    codes:["SC-LW","SC-P","EN"],
    coverage:"Y5 Science (2027): ecosystems (a sea community); human impact; how changes to non-living parts (ice, temperature) affect living things.",
    li:"We are learning to describe a sea community and the threats it faces.",
    sc:["I can describe how the Caspian seal lives.","I can build a sea food chain.","I can explain three threats and what helps."],
    vocab:[
      { w:"Caspian Sea", def:"the world's largest inland body of water, north of Iran" },
      { w:"seal pup", def:"a baby seal" },
      { w:"sea ice", def:"frozen sea water that floats" },
      { w:"bycatch", def:"animals caught by accident in fishing nets" },
      { w:"climate change", def:"long-term changes in temperature and weather patterns" },
      { w:"endangered", def:"at risk of dying out" }
    ],
    prep:{ min:10, items:["Caravan Journals","Path B: a shoebox, blue and white paper, cotton wool for ice","Optional: ice cubes in warm and cold water to show melting"] },
    safety:["If using ice cubes, wipe drips."],
    care:[],
    hononga:"**Our sea communities.** New Zealand has the **New Zealand sea lion (rāpoka)** and the tiny **Hector's dolphin**. Like the Caspian seal, they can be harmed by fishing **bycatch**.",
    paths:[
      { id:"A", name:"The Scribe", product:"Threats & Solutions Table", steps:["List **three threats** to the Caspian seal.","For each, write **one solution**.","Add a **sea food chain** with arrows."], flying:"Which threat is hardest to solve? Why?" },
      { id:"B", name:"The Artisan", product:"Sea Community Diorama", steps:["Make a **Caspian Sea diorama** in a shoebox.","Include **sea ice**, a **seal pup**, **fish** and **plants or plankton**.","Label the **food chain**."], flying:"Make a second version showing a warm winter." },
      { id:"C", name:"The Herald", product:"Ranger's Warning Broadcast", steps:["You are a **wildlife ranger** on the Caspian coast.","Broadcast a warning: what's happening to the seals and **why**.","End with **what listeners can do**."], flying:"Interview a fisher: how could fishing change to help?" }
    ],
    supportedShort:"threat and solution picture cards; a food-chain template; partner.",
    lens:{
      pillar:"aroha", title:"The sea, teeming with creatures",
      look:"Look again at the Caspian Sea: seals, fish, birds, tiny plankton, all made by God.",
      ref:"Psalm 104:24–25",
      paraphrase:"How many are Your works, LORD! In wisdom You made them all; the earth is full of Your creatures. There is the sea, vast and spacious, teeming with creatures beyond number.",
      talk:[
        { q:"The psalm praises God for the sea's creatures. How should that shape how we fish and use the sea?", listen:"Carefully, without waste, protecting rare animals." },
        { q:"What is one small thing that helps sea life here in Aotearoa?", listen:"Picking up rubbish on beaches, not letting plastic into drains, choosing sustainable seafood." }
      ],
      live:"Pick up three pieces of rubbish that could end up in a stream or the sea this week."
    },
    clue:{ prompt:"Caspian seal numbers have fallen by about what percentage in the last 100 years?", answer:90, explain:"About 90%. Waystation Clue 3 = 90, saved for Friday!" },
    next:"Thursday — Nasrin: build the Courier Game!",
    rubric:[
      { c:"How the Caspian seal lives", code:"SC-LW",
        d:["Says it lives in the sea.","“In the water.”"],
        a:["Describes where it lives and breeds.","“Only in the Caspian Sea; pups are born on sea ice in the north.”"],
        f:["Explains why the ice matters.","“The ice is a safe nursery away from wolves and people.”"],
        i:["I can say it lives in the sea.","I can describe where it lives and breeds.","I can explain why the ice matters."] },
      { c:"Sea food chain", code:"SC-LW",
        d:["Puts two links in order.","fish → seal"],
        a:["Builds a chain with a producer.","plankton → small fish → Caspian seal"],
        f:["Explains what happens if a link is overfished.","“Fewer fish means less food for seals.”"],
        i:["I can order two links.","I can build a chain with a producer.","I can explain what happens if a link is overfished."] },
      { c:"Threats & solutions", code:"SC-LW · SC-P",
        d:["Names one threat.","“Nets.”"],
        a:["Explains three threats and solutions.","“Bycatch → safer nets; less prey → fishing limits; less ice → climate action and protected areas.”"],
        f:["Uses data to show the size of the problem.","“Numbers have fallen by about 90% in 100 years.”"],
        i:["I can name a threat.","I can explain three threats and solutions.","I can use data to show the problem."] }
    ],
    plan:{
      prior:"Students know food chains and webs (Weeks 2–3), Lake Urmia (Week 5) and endangered species (Week 8).",
      kc:["Thinking","Participating & contributing","Using language, symbols & texts"],
      sequence:[
        ["0–6","The Dispatch","Gandom's dispatch; Waystation Check; LI/SC.","Recall."],
        ["6–20","Discovery","Meet the sea animals; **Ice Nursery**; 🇳🇿 Hononga.","Predict; discuss."],
        ["20–38","Choose Your Path","A/B/C.","Create."],
        ["38–45","Through the Lens","Psalm 104:24–25.","Discuss."],
        ["45–50","Waystation Clue & Exit","Clue 3 (answer 90).","Solve; self-assess."]
      ],
      diff:{
        supported:"Picture cards; template; partner.",
        esol:"Pictures; key words; act out ice melting.",
        learning:"Diorama; chunked steps.",
        flying:"Hardest threat; fisher interview."
      },
      assess:{
        lookFor:["Describes the seal's life","Builds a food chain","Explains threats and solutions"],
        evidence:["Path products","Discussion","Exit self-assessment"]
      },
      inquiry:["Sanctuary Big Projects can use the Caspian seal.","Link to Week 5's Lake Urmia (another changing water body)."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"gandom", meta:"The cold shore of the Caspian Sea",
        msg:"**Brrr.** Cold sand, cold wind, cold everything. That's the **Caspian Sea**: so big people call it a sea, even though it's surrounded by land. Out on the ice, see those little grey blobs? **Seal pups.** Cute. Fine. I admit it. But the ice is melting earlier every year…",
        notes:[["SAY","Read it in Gandom's voice. 🟡 Gandom is fictional."]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"Name two Silk Road cities.", a:"Tabriz, Nishapur, Samarkand, Chang'an." }, { q:"What travelled west on the Silk Road?", a:"Silk, porcelain, paper…" }, { q:"Who is New Zealand's largest trading partner?", a:"China (since 2017)." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"animalcards", phase:"excavate", fs:"real", kicker:"Seas around Iran", title:"Sea *communities*",
        animals:[
          { img:"animal-15", icon:"🦭", col:"#5a7f95", t:"Caspian seal", status:"ENDANGERED", d:"Lives **only in the Caspian Sea**. Pups are born on **sea ice** in the north-east." },
          { img:"animal-16", icon:"🐋", col:"#3f7a8a", t:"Dugong", d:"A gentle **sea cow** of the warm **Persian Gulf**, grazing on seagrass." },
          { img:"animal-18", icon:"🐢", col:"#3f8a6a", t:"Hawksbill turtle", d:"A sea turtle of the **Persian Gulf**, eating sponges on coral reefs." }
        ],
        notes:[["SAY","“Iran has two seas: the cold Caspian in the north and the warm Persian Gulf in the south.”"],["NOTE","Source: CMS fact sheet (Caspian seal). Dugongs and hawksbill turtles are well-known Persian Gulf species."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Warmer winters", title:"The Ice Nursery", ix:"icenursery",
        notes:[["CLICK","Press →: the seal → a shrinking population → warmer winters → pushed ashore. Or drag the slider."],["SAY","“The Caspian seal is Endangered. Its numbers have fallen by about 90% in 100 years. Bycatch is a major cause, and climate change is melting the ice earlier.”"],["NOTE","Source: CMS (Convention on Migratory Species), Caspian seal and climate change fact sheet."]] },
      { type:"hononga", phase:"excavate", fs:"real", title:"Our sea *communities*",
        body:"New Zealand has the **New Zealand sea lion (rāpoka)** and the tiny **Hector's dolphin**.\n\nLike the Caspian seal, they can be caught by accident in fishing nets: **bycatch**.\n\n**What could fishers do to protect them?**",
        notes:[["LISTEN","Safer nets, fishing limits in some areas, marine reserves, watching for animals."]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAY","“Choose your path. Every product has threats AND solutions.”"],["CLICK","Start the 18-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Psalm 104:24–26."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 90."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = darics."]] }
    ]
  };

  /* ======================= THURSDAY · TECHNOLOGY ======================= */
  const thu = {
    id:"w09-thu", week:9, day:"thu", subject:"technology", duration:50,
    title:"Royal Road Messages 4: Events, Decisions & Debugging", guide:"nasrin",
    codes:["DT-CT","DT-DD","TE-TP"],
    coverage:"Digital Technologies — Computational Thinking, Progress Outcome 3: programs with inputs, outputs, sequence, decisions and loops; debugging methodically. Designing & Developing Digital Outcomes (a simple game).",
    li:"We are learning to build a simple game using events and decisions, and to debug it step by step.",
    sc:["I can use an event (when a key is pressed).","I can use an if… then decision.","I can find and fix a bug by testing."],
    vocab:[
      { w:"event", def:"something that happens (like pressing a key) that starts some code" },
      { w:"decision", def:"code that chooses what to do (if… then… else)" },
      { w:"condition", def:"the question an if block checks (true or false)" },
      { w:"input", def:"information going into a program (a key press)" },
      { w:"output", def:"what the program does or shows (movement, a score)" },
      { w:"test", def:"running a program to check it works" }
    ],
    prep:{ min:10, items:["iPads with Scratch (or the Block Sim on screen)","Unplugged version: a 12-square paper track, dice, sandstorm and station cards","Bug log sheets"] },
    safety:[],
    care:[],
    hononga:"**Games made in Aotearoa.** New Zealand has a big game-development industry, and every game starts with events, decisions and lots of debugging.",
    paths:[
      { id:"A", name:"The Scribe", product:"Bug Log", steps:["Test the Courier Game (or a partner's game).","Record **what broke**, **where**, and **how you fixed it**.","Write **one tip** for future debuggers."], flying:"Explain the difference between a bug in the sequence and a bug in a decision." },
      { id:"B", name:"The Artisan", product:"Courier Game", steps:["In Scratch: **when ➡️ key pressed**, move the courier.","Add **if touching sandstorm then wait 2 seconds**.","Add a **score** variable for each station."], flying:"Add an else, a sound, or a second level." },
      { id:"C", name:"The Herald", product:"Game Tester's Review", steps:["Play-test **two** classmates' games.","Give each a **kind, specific** review: what works, one bug, one idea.","Explain how you'd **fix** the bug."], flying:"Write test cases: “If I press ➡️ on a storm square, I expect…”" }
    ],
    supportedShort:"a starter Scratch project; a bug-log template; partner.",
    lens:{
      pillar:"aroha", title:"Fix, don't blame",
      look:"Look again at the bug: the fix was to change the code, not to blame the coder.",
      ref:"Colossians 3:13",
      paraphrase:"Bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you.",
      talk:[
        { q:"When a friend's code has a bug, how should we help?", listen:"Kindly, patiently, helping them find it, not laughing." },
        { q:"When a friend hurts us, what does Colossians 3:13 ask us to do?", listen:"Forgive, as the Lord forgave us." }
      ],
      live:"Is there someone you need to forgive, or ask forgiveness from? Pray about it this week."
    },
    clue:{ prompt:"The sandstorm appears 4 times in our test run. How many times must the code handle it?", answer:4, explain:"4 times. Waystation Clue 4 = 4, saved for Friday!" },
    next:"Friday — Master Hamid: paint the Magi's night sky… and meet the Shadow.",
    rubric:[
      { c:"Events", code:"DT-CT",
        d:["Uses a start block with help.","Green flag."],
        a:["Uses a key-press event to control the sprite.","“when ➡️ key pressed: move.”"],
        f:["Explains events as inputs.","“The key press is the input; the movement is the output.”"],
        i:["I can use a start block with help.","I can use a key-press event.","I can explain events as inputs."] },
      { c:"Decisions", code:"DT-CT",
        d:["Uses an if block with help.","An if block in the wrong place."],
        a:["Uses if… then correctly.","“if touching sandstorm then wait 2 seconds.”"],
        f:["Uses if… else or combined conditions.","“if touching station then score +1 else keep going.”"],
        i:["I can use an if with help.","I can use if… then correctly.","I can use if… else."] },
      { c:"Debugging", code:"DT-CT · TE-TP",
        d:["Notices a bug.","“It's too slow.”"],
        a:["Finds and fixes the bug by testing.","“The wait was outside the if.”"],
        f:["Uses a method and records it.","“I tested one square at a time and wrote each result in my bug log.”"],
        i:["I can notice a bug.","I can find and fix it by testing.","I can use a method and record it."] }
    ],
    plan:{
      prior:"Students used sequence (Week 6), loops (Week 7) and variables (Week 8).",
      kc:["Thinking","Managing self","Relating to others"],
      sequence:[
        ["0–6","The Dispatch","Nasrin's dispatch; Waystation Check; LI/SC.","Recall."],
        ["6–16","Discovery","Events and decisions; **The Courier Game** (run, bug, fix).","Predict; debug."],
        ["16–38","Build (Paths)","Scratch game or unplugged version; bug logs; reviews.","Build; test."],
        ["38–45","Through the Lens","Colossians 3:13.","Discuss."],
        ["45–50","Waystation Clue & Exit","Clue 4 (answer 4).","Solve; self-assess."]
      ],
      diff:{
        supported:"Starter project; template; partner.",
        esol:"Blocks are visual; demonstrate; key words.",
        learning:"Unplugged option; short steps.",
        flying:"if… else; test cases; levels."
      },
      assess:{
        lookFor:["Uses an event","Uses a decision","Debugs methodically"],
        evidence:["Scratch projects","Bug logs","Exit self-assessment"]
      },
      inquiry:["Coder Big Projects: who's ready to add levels?","Link Colossians 3:13 to Friday's unmasking."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"nasrin", meta:"A caravanserai courtyard · building a game in the sand",
        msg:"Today we build a **game**: a courier racing station to station. When you press a key, he moves. If he hits a **sandstorm**, he waits. Every station scores a point. But my first try had a **bug**: my courier kept stopping for no reason! Can you help me fix it? **No blaming. Just fixing.**",
        notes:[["SAY","Read the dispatch. 🟡 Nasrin is fictional."]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"Where do Caspian seal pups grow up?", a:"On sea ice in the north-east of the Caspian Sea." }, { q:"What is bycatch?", a:"Animals caught by accident in fishing nets." }, { q:"What is a loop?", a:"An instruction that repeats steps." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Events · decisions · debugging", title:"The Courier Game", ix:"couriergame",
        notes:[["CLICK","Press →: the code → watch it run → the buggy version → the fix. Use the ➡️ Key button to play by hand."],["ASK","At the bug: “Where is the wait block? Why does that matter?”"],["NOTE","Source: Technology Online, Progress Outcome 3."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Three big ideas", title:"Events, decisions, debugging",
        cards:[ { icon:"⌨️", t:"Event", d:"**when ➡️ key pressed**: an input starts the code.", foot:"input" }, { icon:"🔀", t:"Decision", d:"**if touching 🌪️ then wait**: code that only runs when something is true.", foot:"if… then" }, { icon:"🐞", t:"Debugging", d:"Test **one step at a time**, write down what happens, fix the code.", foot:"method" } ],
        notes:[["SAY","Read each card."]] },
      { type:"paths", phase:"paths", fs:null, minutes:22,
        notes:[["SAY","“Build, test, log your bugs, review a friend's game.”"],["CLICK","Start the 22-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Colossians 3:12–14."],["NOTE","This sets up Friday: the Shadow Courier is unmasked."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 4."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = darics."]] }
    ]
  };

  /* ======================= FRIDAY · ART ======================= */
  const fri = {
    id:"w09-fri", week:9, day:"fri", subject:"art", duration:50,
    title:"The Magi's Night Sky", guide:"hamid",
    codes:["VA-PK","VA-DI","VA-CI","MA"],
    coverage:"Visual Arts (NZC 2007, Level 3): practical knowledge (colour blending, gradients, silhouette), developing ideas (a story scene), communicating and interpreting. Maths: Old Persian number signs.",
    li:"We are learning to paint a night-sky journey using colour blending and light.",
    sc:["I can blend dark-to-light sky colours.","I can show light coming from a star.","I can tell a story through silhouette."],
    vocab:[
      { w:"blend", def:"to mix colours smoothly where they meet" },
      { w:"gradient", def:"a smooth change from one colour to another" },
      { w:"silhouette", say:"sil-oo-ET", def:"a dark shape seen against a lighter background" },
      { w:"horizon", def:"the line where the land meets the sky" },
      { w:"glow", def:"soft light shining around something" },
      { w:"tint / shade", def:"a colour made lighter with white / darker with black" }
    ],
    prep:{ min:10, items:["A4 or A3 card, paint (dark blue, purple, pink, orange, white, black)","Wide brushes for blending, small brushes for stars","Black card for cut-out silhouettes (optional)","Old toothbrushes for flicking stars"] },
    safety:["Flick paint carefully, away from faces; aprons on."],
    care:["The unmasking is emotional for some students. Let them feel sympathy for Zal; Week 10 is about forgiveness."],
    hononga:"**Matariki skies.** In Aotearoa, the rising of **Matariki** in the winter sky marks the Māori New Year. People have always looked to the night sky with wonder.",
    paths:[
      { id:"A", name:"The Poet", product:"Poem + Painting", steps:["Paint a blended night sky with **one bright star**.","Write a **short poem** about the Magi's journey.","Display them together."], flying:"Use a simile or metaphor about light in your poem." },
      { id:"B", name:"The Artisan", product:"Silhouette Painting", steps:["Paint a **gradient sky** from dark (top) to light (horizon).","Add **stars** and **one glowing star**.","Add **black silhouettes** of dunes and a caravan."], flying:"Add a soft path of light from the star to the ground." },
      { id:"C", name:"The Herald", product:"Gallery Talk", steps:["Choose two paintings (yours and a friend's).","Explain **how** the colours blend and **where** the light comes from.","Connect them to **Matthew 2:9–10**."], flying:"Explain how silhouettes tell a story without detail." }
    ],
    supportedShort:"a pre-painted gradient to add to; silhouette stencils; partner.",
    lens:{
      pillar:"sdg", title:"A star will come out of Jacob",
      look:"Look again at the star: light in the darkness, leading the way.",
      ref:"Numbers 24:17; Matthew 2:9–10",
      paraphrase:"A star will come out of Jacob; a sceptre will rise out of Israel. The star went ahead of the Magi until it stopped over the place where the child was. When they saw the star, they were overjoyed.",
      talk:[
        { q:"Long before Jesus was born, Numbers 24:17 spoke of a star. Who was that star pointing to?", listen:"Jesus, the King from Jacob's family." },
        { q:"Who has been a ‘light’ for you, pointing you to Jesus?", listen:"Parents, grandparents, teachers, friends, a church leader." }
      ],
      live:"Soli Deo Gloria: sign your painting **SDG**. Thank someone who has been a light to you."
    },
    clue:{ prompt:"Friday's clue is the Seal Fragment: add this week's four Waystation Clues and write the total in Old Persian number signs.", answer:122, explain:"3 + 25 + 90 + 4 = 122 → one 100-sign, one 20-sign and one 2-sign." },
    next:"Next week — Stage X: The Gate of All Nations. The final fragment… and a choice about Zal.",
    rubric:[
      { c:"Blending", code:"VA-PK",
        d:["Paints bands of colour.","Stripes with hard edges."],
        a:["Blends a smooth gradient.","Dark blue to orange with soft edges."],
        f:["Controls tints and shades for depth.","Darker at the top, glowing at the horizon."],
        i:["I can paint bands of colour.","I can blend a smooth gradient.","I can control tints and shades."] },
      { c:"Light from a star", code:"VA-PK · VA-DI",
        d:["Paints a star.","A yellow star shape."],
        a:["Shows a glow around the star.","Lighter colour radiating out."],
        f:["Uses light to lead the eye through the story.","The star's light leads to the caravan."],
        i:["I can paint a star.","I can show a glow.","I can use light to lead the eye."] },
      { c:"Silhouette story", code:"VA-CI",
        d:["Adds a dark shape.","A black blob."],
        a:["Uses clear silhouettes to tell a story.","Recognisable camels and riders."],
        f:["Arranges silhouettes for meaning.","The caravan faces the star, small against a big sky."],
        i:["I can add a dark shape.","I can use clear silhouettes.","I can arrange them for meaning."] }
    ],
    plan:{
      prior:"Students painted miniatures last week. The Shadow Courier has written notes since Week 1; this lesson reveals Zal.",
      kc:["Thinking","Managing self","Relating to others"],
      sequence:[
        ["0–6","The Dispatch","Hamid's dispatch; Waystation Check; LI/SC.","Recall."],
        ["6–14","Discovery","**Night Sky Blend** demo.","Watch; plan."],
        ["14–36","Choose Your Path","A/B/C.","Paint."],
        ["36–41","Through the Lens","Numbers 24:17; Matthew 2:9–10.","Discuss."],
        ["41–50","Seal Fragment IX & the Unmasking","3 + 25 + 90 + 4 = 122 → 100 + 20 + 2. Zal is revealed.","Solve; respond with compassion."]
      ],
      diff:{
        supported:"Pre-painted gradients; stencils.",
        esol:"Demonstrate each step; key words.",
        learning:"Cut-out silhouettes; short steps.",
        flying:"Light paths; metaphors."
      },
      assess:{
        lookFor:["Blends a gradient","Shows light","Uses silhouettes"],
        evidence:["Paintings (photograph)","Poems","Seal Fragment working (122)"]
      },
      inquiry:["How did students respond to Zal? Prepare for Week 10's forgiveness vote.","Paradise Garden panels: night-sky borders?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"hamid", meta:"Out on the dunes · the deepest night",
        msg:"Look up. Have you ever seen so many stars? The star-watchers say one of them is **different**: brighter, moving ahead of us. Tonight we'll paint the sky, from the deep blue at the top to the last glow at the horizon. And tonight, I think, **someone who has followed us all term will finally show their face.**",
        notes:[["SAY","Read it slowly and quietly. 🟡 Master Hamid is fictional."]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"What is an event in code?", a:"Something (like a key press) that starts some code." }, { q:"What does an if block do?", a:"Runs code only when a condition is true." }, { q:"What did the Courier Game bug teach us?", a:"Fix the code, not the coder: test one step at a time." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Dark to light", title:"The Night Sky Blend", ix:"nightsky",
        notes:[["CLICK","Press →: bands → blend → stars and the bright star → silhouettes → the light that leads."],["SAY","Model blending on paper as the screen shows each step."]] },
      { type:"paths", phase:"paths", fs:null, minutes:22,
        notes:[["SAY","“Blend your sky first while it's wet. Silhouettes go on last.”"],["CLICK","Start the 22-minute timer."],["SAFETY","Flicking paint away from faces."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Numbers 24:17 and Matthew 2:9–10."]] },
      { type:"folioseal", phase:"decode", fs:"story",
        notes:[["SAY","“Four clues: 3, 25, 90, 4.”"],["CLICK","3 + 25 + 90 + 4 = 122."],["SAY","“122: one 100-sign, one 20-sign, one 2-sign.”"],["CLICK","Press 100, 20, 2, then ‘Open the lock’."]] },
      { type:"intercept", phase:"decode", fs:"story", img:"char-zal", hdr:"The Shadow Courier is unmasked · ",
        msg:"My name is Zal. My family made beautiful things. Then we lost everything.",
        ask:"The Shadow Courier is Zal, like the boy in the Shahnameh who was abandoned and lost his family. How do you feel about Zal now? What should the caravan do next week: punish Zal, or forgive?",
        notes:[["SAY","Pause before reading. Read it softly, not as a villain. 🟡 Zal is fictional."],["ASK","“How do you feel about Zal now? Does knowing Zal's story change how you see the notes?”"],["LISTEN","Sympathy, anger, confusion: all are OK. Link to Colossians 3:13 (Thursday)."],["CARE","Some students may connect with loss. Keep it gentle."],["NOTE","Next week the class votes on forgiving Zal, and the final fragment is found."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess. Fragment IX found… and the Shadow has a name."],["CLICK","C = darics. Dry paintings flat for the Exhibition."]] }
    ]
  };

  BM.WEEKS[9] = {
    n:9,
    story:"A night journey with star-watchers from the east. The historians see Persia rise again under the Parthians and Sasanians, and meet the Magi of Matthew 2; the geographers follow silk from China to Persia, city by city; the scientists visit the Caspian seal's shrinking ice nursery; the engineers build a Courier Game with events and decisions, and debug it without blaming; and the artists paint the Magi's night sky. On Friday, 3 + 25 + 90 + 4 = 122 frees Fragment IX… and the Shadow Courier is unmasked: Zal.",
    hononga:"‘Three kings’ in NZ nativity plays (Mon) · China, NZ's largest trading partner (Tue) · rāpoka and Hector's dolphins (Wed) · NZ game developers (Thu) · Matariki skies (Fri).",
    seal:{
      answer:122,
      instruction:"Add the four **Waystation Clues**. Then write the total in **Old Persian number signs**, biggest first, and press them into the clay. *(100 = the hundred sign · 20 = two corner wedges · 2 = two upright wedges.)*",
      reveal:"🟡 **Fragment IX found!** Nine of ten pieces shine on the Seal. Only one left… and the Shadow Courier has a name. Next week: *The Gate of All Nations*."
    },
    lessons:[mon, tue, wed, thu, fri]
  };
})(window.BM);
