/* ==========================================================
   WEEK 4 — STAGE IV · PRIDE BEFORE THE FALL
   A storm at the Hellespont. The fragment falls into the sea and Nasrin fishes it out.
   Notes: [KEY, text]  KEY = SAY ASK LISTEN IF CLICK TALK DEEPER PACE SAFETY WAIT NOTE CARE SIDE
   Facts are sourced in data/sources.js (tags match blueprint §18).
   ========================================================== */
(function(BM){
  "use strict";

  /* ======================= MONDAY · HISTORY ======================= */
  const mon = {
    id:"w04-mon", week:4, day:"mon", subject:"history", duration:50,
    title:"Xerxes & the Greeks: Whose Story?", guide:"shirin",
    codes:["SS-H","SS-P","EN","RE"],
    coverage:"Y5–6 History practices (2027 Social Sciences): perspectives, who wrote the sources and why, cause and consequence.",
    li:"We are learning to compare Persian and Greek perspectives on the wars of 480 BC.",
    sc:["I can describe what happened at Thermopylae and Salamis.","I can explain who wrote the sources we have.","I can explain why two people might tell the same story differently."],
    vocab:[
      { w:"Xerxes", say:"ZERK-seez", def:"king of Persia after Darius I (ruled 486–465 BC); he invaded Greece in 480 BC" },
      { w:"Thermopylae", say:"ther-MOP-ih-lee", def:"a narrow pass in Greece where a small Greek force held back the Persian army in 480 BC" },
      { w:"Salamis", say:"SAL-uh-mis", def:"an island near Athens where the Greek fleet beat the Persian fleet in 480 BC" },
      { w:"Leonidas", say:"lee-ON-ih-das", def:"a king of Sparta who led the Greeks at Thermopylae" },
      { w:"Immortals", def:"the Persian king's elite guard of soldiers" },
      { w:"perspective", def:"a point of view: how one person or group sees something" },
      { w:"bias", say:"BY-us", def:"leaning towards one side, often without meaning to" },
      { w:"pride", def:"thinking too highly of yourself; trusting your own power instead of God" }
    ],
    prep:{ min:5, items:["Class Bible marked at Proverbs 16:18","Caravan Journals","Optional for Path B: blank maps of Greece and Turkey"] },
    safety:[],
    care:["No gore: keep the focus on sources and perspective, not on the fighting.","Students who love battle stories may want details. Redirect: “Historians ask how we know, and whose story it is.”"],
    hononga:"**Two sides of one story.** In Aotearoa, events like the New Zealand Wars have been told differently by different people. Historians listen to **more than one voice** before deciding what happened.",
    paths:[
      { id:"A", name:"The Scribe", product:"Two-Perspective Diary", steps:["Write **two short diary entries** about Thermopylae: one by a **Greek** soldier, one by a **Persian** soldier.","Use at least **two facts** from today in each.","Underline the sentence where each one shows their **perspective**."], flying:"Add a historian's note: which parts could we check, and which are opinion?" },
      { id:"B", name:"The Artisan", product:"Map of the War", steps:["Draw a map with **Persia, the Hellespont, Greece, Thermopylae, Athens and Salamis**.","Draw the **route** of Xerxes' army (land) and fleet (sea).","Add a **key** and label the two battles with the year."], flying:"Add a scale bar and estimate how far the army marched from Sardis to Athens." },
      { id:"C", name:"The Herald", product:"Debate: Win or Loss?", steps:["In two groups, prepare for the debate: **“Was Thermopylae a win or a loss?”**","Each side gives **two reasons**, one from each perspective.","Finish with: **“It depends on who is telling the story because…”**"], flying:"Explain why Herodotus's account is so important, and what its weakness is." }
    ],
    supportedShort:"the Two Tellings table printed; sentence starters (“A Greek would say… A Persian would say…”); partner pairing.",
    lens:{
      pillar:"mohio", title:"Pride goes before a fall",
      look:"Look again at the Greek telling. Herodotus shows **Xerxes** as a proud king who thought nothing could stop him.",
      ref:"Proverbs 16:18",
      paraphrase:"Pride goes before destruction, and a proud spirit before a fall.",
      talk:[
        { q:"Herodotus says Xerxes was proud. Is that fair? How would we know?", listen:"We only have the Greek side; we'd need other sources; but the Bible's warning about pride is true for everyone." },
        { q:"Where can pride trip us up?", listen:"Not listening, thinking we're better than others, not asking for help, refusing to say sorry." }
      ],
      live:"This week, practise one **humble** habit: ask for help, or say “you were right.” Write it in your Caravan Journal."
    },
    clue:{ prompt:"About how many Spartans stayed with Leonidas at Thermopylae?", answer:300, explain:"About 300 Spartans (with other Greeks). Waystation Clue 1 = 300, saved for Friday!" },
    next:"Tuesday — Farhad: how does a town grow in the desert?",
    rubric:[
      { c:"Thermopylae & Salamis", code:"SS-H",
        d:["Names one battle.","“Thermopylae.”"],
        a:["Describes both battles and the year.","“In 480 BC the Persians won at Thermopylae, but the Greeks won the sea battle at Salamis.”"],
        f:["Explains cause and consequence.","“After Salamis the Persian fleet was beaten, so Xerxes couldn't supply his army and went home.”"],
        i:["I can name a battle.","I can describe both battles and the year.","I can explain what happened because of Salamis."] },
      { c:"Who wrote the sources?", code:"SS-P",
        d:["Says someone wrote about it.","“A history writer.”"],
        a:["Explains that most of our evidence comes from Herodotus, a Greek.","“Herodotus was Greek, writing in the 400s BC.”"],
        f:["Explains how that affects what we know.","“We don't have a Persian account, so we only see one side clearly.”"],
        i:["I can say someone wrote it.","I can explain that Herodotus, a Greek, is our main source.","I can explain how that affects what we know."] },
      { c:"Perspectives", code:"SS-P · EN",
        d:["Retells one side.","“The Spartans were brave.”"],
        a:["Compares how a Greek and a Persian might tell it.","“A Greek calls it a brave defeat; a Persian calls it a victory.”"],
        f:["Explains why perspectives differ and why it matters.","“People remember what matters to their side. Historians compare sources to get closer to the truth.”"],
        i:["I can retell one side.","I can compare two perspectives.","I can explain why perspectives differ and why it matters."] }
    ],
    plan:{
      prior:"Students met Herodotus in Week 1's Source Sorter and on the Royal Road (Week 3). Some will know the ‘300’ story from popular culture; it may be exaggerated.",
      kc:["Thinking","Using language, symbols & texts","Relating to others"],
      sequence:[
        ["0–6","The Dispatch","Shirin's dispatch; Waystation Check; LI/SC.","Recall."],
        ["6–20","Discovery","Xerxes and the war map; **Two Tellings**; who wrote the sources; turn & talk.","Compare; discuss."],
        ["20–38","Choose Your Path","A/B/C; roam: “Whose side is this sentence on?”","Create."],
        ["38–45","Through the Lens","Proverbs 16:18.","Discuss pride."],
        ["45–50","Waystation Clue & Exit","Clue 1 (answer 300).","Solve; self-assess."]
      ],
      diff:{
        supported:"Printed Two Tellings table; sentence starters; partner pairing.",
        esol:"Map visuals; two colours for two perspectives; act out the debate in pairs.",
        learning:"Debate option; movement; chunked steps.",
        flying:"Historian's notes; the weakness of a single source."
      },
      assess:{
        lookFor:["Describes Thermopylae and Salamis","Explains that Herodotus was Greek","Compares two perspectives"],
        evidence:["Path products","Debate","Exit self-assessment"]
      },
      inquiry:["Who could explain why we have no Persian account? Link to Week 7 (the Persepolis tablets are everyday records, not war stories).","Did the debate stay respectful?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"shirin", meta:"On a ship in the Hellespont · a storm rising",
        msg:"Hold on, caravan! We're crossing the **Hellespont**, the narrow sea between Asia and Europe, with King **Xerxes'** huge army. He's going to conquer **Greece**. The Greeks tell this story one way… but who tells the Persian side? **Whoa!** The fragment just slipped into the sea!",
        notes:[["SAY","Read the dispatch with drama. 🟡 Shirin is fictional; Xerxes, the Hellespont and the war of 480 BC are real."],["ASK","“If only one side writes the history, what might we miss?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"What is a satrap?", a:"A governor chosen by the king to run a province." }, { q:"How many stations did the Royal Road have?", a:"111." }, { q:"Who was Herodotus?", a:"A Greek writer of the 400s BC: our main source for the Persian wars." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"sayitright", phase:"excavate", fs:"real", kicker:"Say it right", title:"Names from the war",
        words:[ { w:"Xerxes", say:"ZERK · seez", mean:"the Persian king who invaded Greece" }, { w:"Thermopylae", say:"ther · MOP · ih · lee", mean:"the narrow pass" }, { w:"Leonidas", say:"lee · ON · ih · das", mean:"the Spartan king" }, { w:"Salamis", say:"SAL · uh · mis", mean:"the sea battle" } ],
        note:"In Persian, Xerxes is **Khshayarsha**. The Greeks changed many Persian names.",
        notes:[["CLICK","Tap each card."],["SAY","Practise slowly."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"480 BC", title:"Xerxes marches on *Greece*",
        bullets:["**Xerxes**, son of Darius, crossed the **Hellespont** with a huge army.","At **Thermopylae**, **Leonidas** stayed with about **300 Spartans** and others. The **Immortals** took a mountain path; the Persians won.","Later that year the Greeks won at sea at **Salamis**."],
        visual:{ map:{ theme:"paper", labels:true, ranges:false, deserts:false, cities:["sardis","susa","babylon"] }, size:760 },
        notes:[["SAY","Read the points. On the map, point to Sardis and imagine the army marching west into Greece (off the left edge)."],["NOTE","Source: Livius, Thermopylae (480 BCE). Keep it gore-free."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"One war, two tellings", title:"Two Tellings", ix:"twotellings",
        notes:[["CLICK","Press → to reveal each row. Before each, ask: “How would a Persian tell this part?”"],["SAY","“The Greek side is based on Herodotus. The Persian side is imagined: no Persian account of these battles survives. That's a problem for historians!”"],["ASK","At ‘Who won?’: “Can both be true?” (Yes: the Persians won the battle; the Greeks remember the courage.)"]] },
      { type:"discussion", phase:"excavate", fs:"real", kicker:"Turn & Talk", q:"Almost everything we know about these battles comes from **Herodotus, a Greek**. **Why does that matter?**", sub:"Think about whose heroes, whose enemies, and whose story gets remembered.", talk:45,
        notes:[["TALK","45 seconds."],["LISTEN","He might favour the Greeks; Persians might be shown as proud or cruel; we only hear one side; we should be careful."]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAY","“Choose your path. Every product shows **two** perspectives.”"],["CLICK","Start the 18-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Proverbs 16:18."],["ASK","“Herodotus says Xerxes was proud. Is that fair? How would we know?” Then: “Where can pride trip us up?”"]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 300."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = darics."]] }
    ]
  };

  /* ======================= TUESDAY · GEOGRAPHY ======================= */
  const tue = {
    id:"w04-tue", week:4, day:"tue", subject:"geography", duration:50,
    title:"Water Towns: Qanats, Oases & Yazd", guide:"farhad",
    codes:["SS-G","SS-E","SS-P","MA"],
    coverage:"Y6 Geography: settlement and urbanisation — how water technology makes desert cities possible. Y5 biomes (desert). Comparing places: Yazd and Ashburton.",
    li:"We are learning how water technology makes desert cities possible.",
    sc:["I can explain how a qanat supports a town.","I can describe Yazd as a desert city.","I can compare Yazd with Canterbury's water races."],
    vocab:[
      { w:"oasis", say:"oh-AY-sis", def:"a green place in a desert where there is water" },
      { w:"Yazd", say:"yazd", def:"a desert city in central Iran, famous for qanats and windcatchers" },
      { w:"water race", def:"an open channel that carries water across farmland by gravity" },
      { w:"stockwater", def:"water for farm animals to drink" },
      { w:"World Heritage", def:"places UNESCO lists as important to the whole world" },
      { w:"irrigation", def:"bringing water to land so crops can grow" },
      { w:"climate", def:"the usual weather of a place over many years" }
    ],
    prep:{ min:5, items:["Caravan Journals","Printed Venn diagram for Path A","Optional: a map of the Ashburton District's water races"] },
    safety:[],
    care:[],
    hononga:"**Water races on the plains.** The Ashburton District's **stockwater race network** carries water across the plains to farms. It was **over 4,000 km** long in 2000 and about **1,543 km** in 2024 (Ashburton District Council).",
    paths:[
      { id:"A", name:"The Scribe", product:"Compare Yazd and Ashburton", steps:["Draw a **Venn diagram**: Yazd / both / Ashburton.","Fill it with **at least six** facts (water source, climate, technology, farming).","Write a **paragraph**: how does water shape both places?"], flying:"Why has Ashburton's water-race network become shorter? Suggest two reasons and how you could check." },
      { id:"B", name:"The Artisan", product:"Oasis Town Map", steps:["Draw a map with **mountains**, a **qanat** (dashed line), and the **outlet**.","Add **gardens, houses and windcatchers** around the water.","Add a **key** and a **title**."], flying:"Show what would happen to your town if the qanat dried up." },
      { id:"C", name:"The Herald", product:"Water-Master's Talk", steps:["You are the town's **water-master**, in charge of sharing the qanat water.","Plan a **1-minute talk**: where the water comes from and how you share it fairly.","Use at least **two facts** from today."], flying:"A farmer complains he didn't get his share. How do you answer fairly?" }
    ],
    supportedShort:"a printed Venn diagram with picture prompts; an oasis map template; partner pairing.",
    lens:{
      pillar:"aroha", title:"Streams in the desert",
      look:"Look again at the oasis: water appears, and the desert **blooms**.",
      ref:"Isaiah 35:1, 6–7",
      paraphrase:"The desert will be glad and bloom. Water will gush out in the wilderness and streams in the desert. The burning sand will become a pool.",
      talk:[
        { q:"Isaiah pictures God bringing water to the desert. What does that tell us about God?", listen:"He brings life and hope; He can change hard places; He cares for His people." },
        { q:"Is there a ‘dry place’ in someone's life where we could bring kindness, like water?", listen:"A lonely classmate, someone sad, a new student, an older neighbour." }
      ],
      live:"Be a ‘stream in the desert’ for someone this week. Write who, and what you'll do, in your Caravan Journal."
    },
    clue:{ prompt:"How many qanats are in the Persian Qanat World Heritage listing?", answer:11, explain:"11 qanats. Waystation Clue 2 = 11, saved for Friday!" },
    next:"Wednesday — Gandom: how do animals survive the hottest place on Earth?",
    rubric:[
      { c:"How a qanat supports a town", code:"SS-G",
        d:["Says a qanat brings water.","“It brings water.”"],
        a:["Explains how qanat water lets people settle.","“The qanat brings groundwater out onto the plain, so gardens grow and people can live there.”"],
        f:["Explains what happens if the water fails.","“If the qanat dried up, the gardens would die and people would have to leave.”"],
        i:["I can say a qanat brings water.","I can explain how it lets a town grow.","I can explain what happens if the water fails."] },
      { c:"Yazd, a desert city", code:"SS-G",
        d:["Says Yazd is in a desert.","“It's hot.”"],
        a:["Describes Yazd's climate and water technology.","“Yazd is very hot (over 40 °C in summer); qanats bring water and windcatchers cool houses.”"],
        f:["Explains how technology changed where people could live.","“Without qanats and windcatchers, a big city couldn't survive there.”"],
        i:["I can say Yazd is in a desert.","I can describe its climate and technology.","I can explain how technology made the city possible."] },
      { c:"Comparing with Canterbury", code:"SS-G · SS-P",
        d:["Names Ashburton's water races.","“We have water races.”"],
        a:["Gives one similarity and one difference.","“Both use gravity channels; ours are open races from rivers, qanats are underground tunnels.”"],
        f:["Uses data to describe change.","“Our network shrank from over 4,000 km in 2000 to about 1,543 km in 2024.”"],
        i:["I can name our water races.","I can give a similarity and a difference.","I can use data to describe change."] }
    ],
    plan:{
      prior:"Students built a qanat model (Week 2) and learned about windcatchers (Week 3). Some will have seen water races on farms.",
      kc:["Thinking","Using language, symbols & texts","Participating & contributing"],
      sequence:[
        ["0–6","The Dispatch","Farhad's dispatch; Waystation Check; LI/SC.","Recall."],
        ["6–20","Discovery","**Oasis Builder**; Yazd; 🇳🇿 Hononga: Ashburton's water races; turn & talk.","Predict; compare."],
        ["20–38","Choose Your Path","A/B/C.","Create."],
        ["38–45","Through the Lens","Isaiah 35.","Discuss."],
        ["45–50","Waystation Clue & Exit","Clue 2 (answer 11).","Solve; self-assess."]
      ],
      diff:{
        supported:"Venn diagram with picture prompts; map template.",
        esol:"Pictures of Yazd and a water race side by side; key words on cards.",
        learning:"Map option; chunked steps; calm screen.",
        flying:"Interpret the network's change; fair sharing dilemma."
      },
      assess:{
        lookFor:["Explains how qanats support towns","Describes Yazd","Compares with Ashburton using data"],
        evidence:["Path products","Discussion","Exit self-assessment"]
      },
      inquiry:["Who used the water-race data correctly (bigger to smaller)?","Revisit Week 1's ‘Why settle here?’ reasons: water is first."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"farhad", meta:"Arriving at an oasis · palm shade at last",
        msg:"Look at that: **green**. In the middle of the desert! Gardens, fruit trees, houses, towers. And not a river in sight. **So where's the water coming from?** I'll give you a hint: look at the line of little holes running back towards the mountains.",
        notes:[["SAY","Read the dispatch. 🟡 Farhad is fictional."],["ASK","“What do you think the line of holes is?” (Qanat shafts!)"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"Where was the battle of Thermopylae?", a:"At a narrow pass in Greece, in 480 BC." }, { q:"Who won at Salamis?", a:"The Greek fleet." }, { q:"Why is it a problem that Herodotus was Greek?", a:"We mostly hear the Greek side; there's no Persian account." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Watch a town grow", title:"The Oasis Builder", ix:"oasis",
        notes:[["CLICK","Press →: dry plain → qanat → gardens → houses → windcatchers. Then try ‘Block the qanat’."],["ASK","Before each step: “What will appear next, now there's water?”"],["SAY","“The Persian Qanat World Heritage listing includes 11 qanats. The Gonabad qanat dates from about the 3rd–4th century BC; Hasan-e Mashir near Yazd from about AD 1400.”"],["NOTE","Sources: The Persian Qanat (World Heritage); AFP/Al-Monitor (Yazd)."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Yazd", title:"A city in the *desert*",
        cards:[ { icon:"🌡️", t:"Hot", d:"Summer temperatures go above **40 °C**.", foot:"climate" }, { icon:"💧", t:"Qanats", d:"Underground channels bring **water** from the mountains.", foot:"water" }, { icon:"🌬️", t:"Windcatchers", d:"About **700** towers catch the breeze to **cool** homes.", foot:"cooling" } ],
        notes:[["SAY","“Yazd shows how technology lets people live in hard places.”"],["NOTE","Sources: AFP/Al-Monitor; World Heritage (qanats)."]] },
      { type:"hononga", phase:"excavate", fs:"real", title:"Water races on *our* plains",
        body:"The Ashburton District's **stockwater race network** carries water from the rivers, by gravity, across the plains to farms.\n\nIt was **over 4,000 km** long in **2000**, and about **1,543 km** in **2024** (Ashburton District Council).\n\n**How is a water race like a qanat? How is it different? Why might the network be getting shorter?**",
        notes:[["ASK","“Similarities?” (gravity, gentle slope, brings water to farms) “Differences?” (open channel vs underground tunnel; river vs groundwater)."],["LISTEN","Why shorter: piped water, irrigation schemes, saving water, cost (accept ideas; we haven't sourced the reasons)."],["NOTE","Source: Ashburton District Council, Stockwater race network."]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAY","“Choose your path. Every product shows how water shapes a town.”"],["CLICK","Start the 18-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Isaiah 35:1–7."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 11 qanats."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = darics."]] }
    ]
  };

  /* ======================= WEDNESDAY · SCIENCE ======================= */
  const wed = {
    id:"w04-wed", week:4, day:"wed", subject:"science", duration:50,
    title:"Desert Adaptations: the Lut", guide:"gandom",
    codes:["SC-LW","SC-P","MA"],
    coverage:"Y5 Science (2027): adaptation — how living things survive in their habitat; body and behaviour adaptations; variation.",
    li:"We are learning how desert animals are adapted to heat and lack of water.",
    sc:["I can describe the conditions in a desert.","I can explain three adaptations (body and behaviour).","I can explain how God made animals with variety, able to adapt to different places."],
    vocab:[
      { w:"adaptation", def:"a feature or behaviour that helps a living thing survive where it lives" },
      { w:"body adaptation", def:"a feature of the body (e.g. big ears, furry paws)" },
      { w:"behaviour adaptation", def:"something an animal does (e.g. coming out at night)" },
      { w:"nocturnal", say:"nok-TER-nul", def:"active at night, resting by day" },
      { w:"burrow", def:"a hole or tunnel an animal digs to live in" },
      { w:"Lut", say:"loot", def:"a desert in south-east Iran, one of the hottest places on Earth" },
      { w:"land-surface temperature", def:"how hot the ground itself is (not the air)" },
      { w:"variation", def:"differences between living things of the same kind" }
    ],
    prep:{ min:5, items:["Caravan Journals","Path B: modelling clay, card, pipe cleaners, felt scraps","Optional: printed animal cards (sand cat, jerboa, onager)"] },
    safety:[],
    care:[],
    hononga:"**Adapted to Aotearoa.** Our **kiwi** is nocturnal and finds food by smell; **wētā** hide in holes by day. Animals here are adapted to forests and cold winters, not deserts, but God gave them what they need too.",
    paths:[
      { id:"A", name:"The Scribe", product:"Adaptation Fact File", steps:["Choose a Lut animal: **sand cat**, **jerboa** or **onager**.","Describe its **habitat** (heat, little water).","Explain **three adaptations**: at least one **body** and one **behaviour**."], flying:"Compare it with a New Zealand animal. Which adaptations would be useless here, and why?" },
      { id:"B", name:"The Artisan", product:"Design a Desert Animal", steps:["Invent an animal for the Lut (model or labelled drawing).","Give it **at least four adaptations** and label each.","Write **why** each one helps it survive."], flying:"Add one adaptation that would be a problem, and explain why you'd remove it." },
      { id:"C", name:"The Herald", product:"Gandom's Survival Tips", steps:["You are **Gandom**, giving survival tips to animals new to the Lut.","Plan **five tips**, each based on a real adaptation.","Perform it (**1 minute**) in Gandom's grumpy voice!"], flying:"Explain the difference between a body adaptation and a behaviour adaptation, with examples." }
    ],
    supportedShort:"picture cards of adaptations; a fact-file template; sentence starter “The ___ has ___ which helps it…”.",
    lens:{
      pillar:"mohio", title:"God knows the wild donkey's home",
      look:"Look again at the **onager**, a wild donkey of Iran. Where does it live, and who looks after it?",
      ref:"Job 39:5–8",
      paraphrase:"God says: “Who let the wild donkey go free? I gave it the wasteland as its home and the salt flats as its dwelling. It laughs at the noise of the town, and it ranges the hills for its pasture.”",
      talk:[
        { q:"God says He gave the wild donkey the desert as its home. What does that tell us about God and creation?", listen:"He made every habitat; He cares for wild animals; He designed them to live there." },
        { q:"The onager is endangered. How should people care for its home?", listen:"Protect it, stop hunting it, save water, support reserves." }
      ],
      live:"Draw your favourite desert adaptation in your Caravan Journal and write: “God thought of this!”"
    },
    clue:{ prompt:"NASA satellites measured 70.7 °C in the Lut. Round that to the nearest whole degree.", answer:71, explain:"70.7 rounds up to 71. Waystation Clue 3 = 71, saved for Friday!" },
    next:"Thursday — Nasrin: how do you keep ice frozen in the desert?",
    rubric:[
      { c:"Desert conditions", code:"SC-LW",
        d:["Says deserts are hot.","“It's hot.”"],
        a:["Describes heat, little water and hot ground.","“The Lut's ground reached 70.7 °C, and there's very little water.”"],
        f:["Explains the difference between ground and air temperature.","“70.7 °C was the ground, measured by satellite; the air is cooler, but still very hot.”"],
        i:["I can say deserts are hot.","I can describe desert conditions.","I can explain ground versus air temperature."] },
      { c:"Adaptations", code:"SC-LW",
        d:["Names one adaptation.","“Big ears.”"],
        a:["Explains three adaptations, body and behaviour.","“Furry paws protect from hot sand; it comes out at night; it gets water from food.”"],
        f:["Explains how adaptations work together.","“The jerboa stays in its cool burrow by day and gets water from its food, so it hardly needs to drink.”"],
        i:["I can name an adaptation.","I can explain three, body and behaviour.","I can explain how adaptations work together."] },
      { c:"Variety in creation", code:"SC-LW · RE",
        d:["Says animals are different.","“There are lots of animals.”"],
        a:["Explains variation within a kind.","“God made cats with variety: some, like the sand cat, can live in deserts.”"],
        f:["Describes the main view and the side note respectfully.","“Our school teaches God created kinds with variety; many scientists believe natural selection over millions of years made new species.”"],
        i:["I can say animals are different.","I can explain variation within a kind.","I can describe both views respectfully."] }
    ],
    plan:{
      prior:"Students know habitats (Week 1) and food chains/webs (Weeks 2–3). Some may confuse adaptation with an animal choosing to change.",
      kc:["Thinking","Using language, symbols & texts","Managing self"],
      sequence:[
        ["0–6","The Dispatch","Gandom's dispatch; Waystation Check; LI/SC.","Recall."],
        ["6–20","Discovery","The hottest place; meet the animals; **Survive the Lut**; creation and variety (D8).","Predict; choose; test."],
        ["20–38","Choose Your Path","A/B/C.","Create."],
        ["38–45","Through the Lens","Job 39:5–8.","Discuss."],
        ["45–50","Waystation Clue & Exit","Clue 3 (answer 71).","Solve; self-assess."]
      ],
      diff:{
        supported:"Picture cards; fact-file template; sentence starters.",
        esol:"Pictures and gestures (big ears, digging, night); key words on cards.",
        learning:"Hands-on design; chunked steps; calm screen.",
        flying:"Compare with NZ animals; body vs behaviour."
      },
      assess:{
        lookFor:["Describes desert conditions","Explains three adaptations","Explains variation within a kind"],
        evidence:["Path products","Survive the Lut choices","Exit self-assessment"]
      },
      inquiry:["Who still thinks animals ‘decide’ to adapt? Clarify with the variation idea.","Rounding to the nearest whole number: who needed help?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"gandom", meta:"The edge of the Lut desert · noon",
        msg:"Oh no. No, no, no. **The Lut.** One of the hottest places on Earth. I'm a camel, so I'm built for this… but even I've got limits. Look at the sand: nothing moving. **Where is everybody?** Come back tonight and you'll see. The clever ones have a plan.",
        notes:[["SAY","Read it in Gandom's grumpy voice. 🟡 Gandom is fictional."],["ASK","“Where do you think the animals are hiding?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"How does a qanat help a desert town grow?", a:"It brings groundwater out onto the plain for gardens, fields and people." }, { q:"Name two things that make Yazd liveable.", a:"Qanats and windcatchers." }, { q:"What is Ashburton's version of a qanat?", a:"The stockwater race network." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"The hottest place on Earth?", title:"The *Lut* desert",
        bullets:["The **Lut** is a desert in south-east Iran.","In **2005**, NASA satellites measured a **land-surface temperature** of **70.7 °C** there.","That's the **ground**, not the air: hot enough to cook an egg on the sand!"],
        visual:{ map:{ theme:"paper", labels:true, ranges:true, deserts:true, cities:["yazd","persepolis"] }, size:760 },
        notes:[["SAY","Read the points. Find the Lut on the map (south-east)."],["ASK","“Why might the ground be hotter than the air?”"],["NOTE","Source: NASA Earth Observatory. Be careful: ground temperature, not air temperature."]] },
      { type:"animalcards", phase:"excavate", fs:"real", kicker:"Desert survivors", title:"Who lives in the *desert*?",
        animals:[
          { img:"animal-11", icon:"🐱", col:"#c9a06a", t:"Sand cat", d:"**Fur on its paws** protects it from hot sand. It shelters in a **burrow** and gets most of its water from its **food**." },
          { img:"animal-12", icon:"🐭", col:"#b88a4a", t:"Jerboa", d:"**Nocturnal**: it feeds at night and spends the day underground. It may **never drink** water in its life. Long back legs for **hopping**." },
          { img:"animal-05", icon:"🫏", col:"#9a7a5a", t:"Persian onager", status:"ENDANGERED", d:"A **wild donkey** of Iran's plains and deserts. Fast runner across open ground." }
        ],
        notes:[["SAY","Read each card."],["ASK","“Which are body adaptations? Which are behaviour?”"],["NOTE","Sources: Cincinnati Zoo (sand cat); DesertUSA (jerboa); WWF (onager). These are typical of the species; not all were studied in the Lut itself."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Design a survivor", title:"Survive the Lut", ix:"survivelut",
        notes:[["CLICK","Class votes on adaptations (tap to choose). Then press → for noon, night and the result."],["ASK","“Why is ‘thick dark fur’ a bad idea here?”"],["DEEPER","“Which of your choices are body adaptations? Which are behaviour?”"]] },
      { type:"sidenote", phase:"excavate", fs:"real", kicker:"Variety in creation", title:"Made to fit their homes",
        main:"God created animals **according to their kinds** (Genesis 1), with **variety** built in. Within a kind, like the cat kind, animals can vary and **adapt** to very different places: a sand cat in the desert, a snow leopard in the mountains.",
        refs:"Genesis 1:24–25 · Psalm 104:24",
        side:{ text:"Many scientists believe that over **millions of years**, **natural selection** produced new species from earlier ones.", src:"Widely taught in science (general scientific view)" },
        notes:[["SAY","“Our school teaches that God created kinds of animals with variety. Many scientists believe new species formed over millions of years. Here's their view.”"],["SIDE","Never mock either view. Rubrics never assess which view a student holds (D8)."]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAY","“Choose your path. Every product explains body **and** behaviour adaptations.”"],["CLICK","Start the 18-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Job 39:5–8."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 70.7 → 71."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = darics."]] }
    ]
  };

  /* ======================= THURSDAY · TECHNOLOGY ======================= */
  const thu = {
    id:"w04-thu", week:4, day:"thu", subject:"technology", duration:50,
    title:"Ice in the Desert: the Yakhchāl", guide:"nasrin",
    codes:["TE-TK","TE-TP","SC-PW","SC-P","MA"],
    coverage:"Technology (NZC L3): technological knowledge (how insulation works). Science: heat flow, insulators, fair testing with a control. Maths: measuring time, simple bar graphs.",
    li:"We are learning how insulation slows heat flow, and how to test materials fairly.",
    sc:["I can explain how the yakhchāl kept ice frozen.","I can plan a fair test with a control.","I can compare insulators using my data."],
    vocab:[
      { w:"yakhchāl", say:"YAKH-chaal", def:"a Persian ‘ice pit’: a domed building that stored ice into summer" },
      { w:"insulator", def:"a material that slows down the flow of heat" },
      { w:"conductor", def:"a material that lets heat flow through easily" },
      { w:"heat flow", def:"heat moving from something hotter to something colder" },
      { w:"control", def:"the test you leave unchanged, to compare the others with" },
      { w:"prediction", def:"what you think will happen, and why" },
      { w:"data", def:"facts and measurements collected in a test" }
    ],
    prep:{ min:10, items:["Ice cubes of the same size in identical cups (one per material per team)","Wraps: foil, felt, newspaper, bubble wrap; one cup left bare (the control)","Elastic bands, a stopwatch or the on-screen timer","Results table and bar-graph grid (printed or drawn)","Paper towels for drips"] },
    safety:["Wipe drips at once.","Don't eat or suck the ice cubes.","Keep cups away from iPads."],
    care:[],
    hononga:"**Insulation at home.** NZ houses use **insulation** in ceilings and walls to keep heat **in** during winter. It works the same way as the yakhchāl's thick walls, just in the other direction!",
    paths:[
      { id:"A", name:"The Scribe", product:"Fair-Test Report with Graph", steps:["Write your **question**, **prediction** and what you **changed, measured and kept the same**.","Record how much each ice cube had melted at the end (or the time until fully melted).","Draw a **bar graph** and write a **conclusion**: which was the best insulator?"], flying:"Explain why the bare cup (the control) is important." },
      { id:"B", name:"The Artisan", product:"Design an Ice House", steps:["Design a modern **ice house** for a desert town (drawing or model).","Use what you learned: **thick walls, shade, below ground, best insulator**.","Label **how** each feature slows heat flow."], flying:"Compare your design with the yakhchāl: what's the same, what's new?" },
      { id:"C", name:"The Herald", product:"Science Presenter", steps:["Plan a **1-minute TV science report** on your test.","Show your **results** and explain which material won and **why**.","Link it to the **yakhchāl**."], flying:"Explain a surprising result, and how you'd test it again." }
    ],
    supportedShort:"a ready-drawn results table and graph grid; picture labels for materials; clear team roles.",
    lens:{
      pillar:"manaaki", title:"Wise like the ant",
      look:"Look again at the yakhchāl: people made ice in **winter** and stored it for **summer**.",
      ref:"Proverbs 6:6–8",
      paraphrase:"Go and watch the ant and be wise! It has no boss to give it orders, yet it gathers food in summer and stores it up at harvest.",
      talk:[
        { q:"The ant and the yakhchāl builders both planned ahead. Why is that wise?", listen:"You're ready when hard times come; you can share with others; you don't waste what you have." },
        { q:"What could you plan ahead for, to serve someone else?", listen:"Packing a spare lunch item, preparing for a group task, saving to give, practising a skill to help." }
      ],
      live:"Choose one thing to **prepare ahead** this week, so you can help someone. Write it in your Caravan Journal."
    },
    clue:{ prompt:"At what temperature (in °C) does water freeze?", answer:0, explain:"Water freezes at 0 °C. Waystation Clue 4 = 0, saved for Friday!" },
    next:"Friday — Master Hamid: the glazed-brick archers. Let's print!",
    rubric:[
      { c:"How the yakhchāl worked", code:"TE-TK · SC-PW",
        d:["Says it kept ice.","“It kept ice cold.”"],
        a:["Explains how its design slowed heat flow.","“Thick mud-brick walls and a deep pit slowed the heat getting in.”"],
        f:["Explains the whole system: making and storing ice.","“Ice was made in shallow pits on winter nights, shaded by a wall, then stored under the thick dome.”"],
        i:["I can say it kept ice.","I can explain how its design slowed heat flow.","I can explain the whole system."] },
      { c:"Planning a fair test", code:"SC-P",
        d:["Tests with help.","Wraps some cups."],
        a:["Changes one thing, measures one thing and includes a control.","“Only the wrap changed; same ice, same cups; one bare cup as the control.”"],
        f:["Explains why the control and repeats matter.","“The control shows how fast ice melts with no insulator, so we can see what each wrap did.”"],
        i:["I can test with help.","I can plan a fair test with a control.","I can explain why the control matters."] },
      { c:"Using data", code:"SC-P · MA",
        d:["Says which melted first.","“The bare one.”"],
        a:["Records results and draws a bar graph.","A labelled bar graph of melt time for each wrap."],
        f:["Draws a conclusion and notes limits.","“Felt was best, but our cubes weren't exactly the same size, so we'd repeat it.”"],
        i:["I can say which melted first.","I can record results and make a graph.","I can draw a conclusion and note limits."] }
    ],
    plan:{
      prior:"Students met the yakhchāl in Week 1 (Problem → Solution) and ran fair tests in Weeks 2–3. A control is new.",
      kc:["Thinking","Managing self","Participating & contributing"],
      sequence:[
        ["0–6","The Dispatch","Nasrin's dispatch; Waystation Check; LI/SC.","Recall."],
        ["6–14","Discovery","How the yakhchāl worked; **Heat Flow**; the fair test with a control; safety.","Predict."],
        ["14–38","Test (Paths)","Start the ice test straight away (it needs time); check at set times; then complete paths.","Test; record; create."],
        ["38–45","Through the Lens","Proverbs 6:6–8.","Discuss."],
        ["45–50","Waystation Clue & Exit","Clue 4 (answer 0); final melt check; tidy.","Solve; self-assess."]
      ],
      diff:{
        supported:"Ready-drawn table and graph grid; clear roles.",
        esol:"Labels with pictures; numbers in tables; gestures for ‘hot’ and ‘cold’.",
        learning:"Hands-on; short steps; a role for each learner.",
        flying:"Explain the control; design a modern ice house."
      },
      assess:{
        lookFor:["Explains the yakhchāl","Plans a fair test with a control","Uses data to conclude"],
        evidence:["Results tables and graphs","Ice-house designs","Exit self-assessment"]
      },
      inquiry:["Which teams' results disagreed? Discuss why (cube size, wrapping tightness).","Graphing skills: who needs more support?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"nasrin", meta:"Beside a huge mud-brick cone · summer heat",
        msg:"Guess what's inside this giant cone of mud brick? **Ice.** In summer. In the desert. My cousins made it in **winter**, in long shallow pools, on freezing nights. Then they stored it in here. Today you'll find out **which material keeps ice frozen longest**, with a proper fair test.",
        notes:[["SAY","Read the dispatch. 🟡 Nasrin is fictional; yakhchāls are real."],["ASK","“How could mud keep ice cold?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"What was the land-surface temperature in the Lut?", a:"70.7 °C (the ground, measured by satellite)." }, { q:"Give a body adaptation and a behaviour adaptation.", a:"Body: furry paws, big ears. Behaviour: active at night, digging burrows." }, { q:"What does nocturnal mean?", a:"Active at night." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Ice house", title:"How a *yakhchāl* worked",
        bullets:["On winter nights, water froze in **long shallow pits**, shaded by a **tall wall**.","The ice was cut and stored in a **deep pit** under a thick **mud-brick dome**.","The thick walls slowed the heat, so the ice lasted **into summer**."],
        visual:{ artefact:"yakhchal" },
        notes:[["SAY","Read the points."],["NOTE","Sources: Archnet (yakhchāl); Atlas Obscura. Simplified drawing."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Hot to cold", title:"Heat Flow", ix:"heatflow",
        notes:[["CLICK","Press →: heat moves in → a thin wall → a thick wall → the yakhchāl."],["SAY","“Heat always flows from hot to cold. An insulator slows it down.”"],["NOTE","The ice meter is an illustration, not real measurements. Our test today gives us real data!"]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Our fair test", title:"Which wrap keeps ice longest?",
        cards:[ { icon:"🔀", t:"We change", d:"The **wrap**: foil, felt, newspaper, bubble wrap.", foot:"one variable" }, { icon:"⏱️", t:"We measure", d:"How long until each ice cube **melts** (or how much water at the end).", foot:"the data" }, { icon:"🔒", t:"We keep the same", d:"Ice cube size, cups, place in the room, start time.", foot:"fair!" }, { icon:"🧊", t:"The control", d:"One cup with **no wrap**, to compare with.", foot:"the control" } ],
        notes:[["SAY","“A control is the test we don't change, so we can see what difference each wrap makes.”"],["ASK","“Predict: which wrap will win? Why?”"]] },
      { type:"safety", phase:"excavate", fs:"real", title:"Ice test rules",
        items:[ { icon:"🧽", t:"Wipe drips", d:"Paper towels are ready." }, { icon:"🚫", t:"Don't eat the ice", d:"It's science equipment today!" }, { icon:"📱", t:"Away from iPads", d:"Cups stay on trays, away from devices." } ],
        notes:[["SAFETY","Read each rule. Hand out ice last, so all cubes start together."]] },
      { type:"paths", phase:"paths", fs:null, minutes:22,
        notes:[["SAY","“Start your ice test now: it needs time. Check at the times on the board. Work on your path while you wait.”"],["CLICK","Start the 22-minute timer. Call checks every 5 minutes."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Proverbs 6:6–8."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 0 °C. (Yes, a clue can be zero!)"]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Final ice check; self-assess; tidy."],["CLICK","C = darics."]] }
    ]
  };

  /* ======================= FRIDAY · ART ======================= */
  const fri = {
    id:"w04-fri", week:4, day:"fri", subject:"art", duration:50,
    title:"Glazed-Brick Archers: Printmaking", guide:"hamid",
    codes:["VA-PK","VA-DI","VA-UC","MA"],
    coverage:"Visual Arts (NZC 2007, Level 3): practical knowledge (relief printing, positive and negative areas, repeat), understanding art in context (the Frieze of Archers, Susa). Maths: Old Persian number signs.",
    li:"We are learning to make a repeating relief print inspired by the Frieze of Archers.",
    sc:["I can explain what the Frieze of Archers is.","I can carve a foam printing block (positive and negative areas).","I can print a repeating border."],
    vocab:[
      { w:"frieze", say:"freez", def:"a long decorated band along a wall" },
      { w:"glazed brick", def:"a brick with a shiny, coloured glass-like coating" },
      { w:"relief print", def:"a print made from the raised surface of a block" },
      { w:"positive area", def:"the raised part of the block that takes the ink" },
      { w:"negative area", def:"the cut or pressed-in part that stays the colour of the paper" },
      { w:"brayer", say:"BRAY-er", def:"a small roller for spreading ink" },
      { w:"repeat", def:"printing the same image again and again in a pattern" }
    ],
    prep:{ min:10, items:["Foam printing sheets (or polystyrene trays), blunt pencils","Water-based printing ink or thick paint, brayers, an inking tray","Paper strips (for borders) and newspaper","Wet wipes; drying rack or line"] },
    safety:["Wash hands after printing.","Pencils press, not stab."],
    care:[],
    hononga:"**Patterns that repeat in Aotearoa.** Kōwhaiwhai rafter patterns and tukutuku panels repeat designs along a wall, like a frieze. Some carry meaning for whānau and iwi; we admire them and don't copy sacred designs.",
    paths:[
      { id:"A", name:"The Scribe", product:"Print and Reflection", steps:["Make **one print** of your block.","Write a **reflection**: what are the **positive** and **negative** areas?","Explain how your print connects to the **Frieze of Archers**."], flying:"What would you change on your block to make the print clearer?" },
      { id:"B", name:"The Artisan", product:"Repeating Border", steps:["Design a **guard or pattern** for your block, drawn **in reverse**.","Press the lines in deeply, then **ink** the block.","Print **three times in a row** to make a border, changing colour if you like."], flying:"Make your border tile perfectly so the prints join up." },
      { id:"C", name:"The Herald", product:"Teach-a-Print", steps:["Learn the steps well, then **teach a partner** how to print.","Explain **positive** and **negative** areas as you go.","Show **one tip** for a clean print."], flying:"Explain why the archers on the real frieze all look so alike." }
    ],
    supportedShort:"a simple design to trace; pre-reversed outlines; adult help inking.",
    lens:{
      pillar:"manaaki", title:"The armour of God",
      look:"Look again at the archers: spears, bows, robes, ready to guard the palace.",
      ref:"Ephesians 6:10–11",
      paraphrase:"Be strong in the Lord and in His mighty power. Put on the full armour of God, so that you can stand firm.",
      talk:[
        { q:"Paul compares God's help to a soldier's armour. What is God's ‘armour’? (Ephesians 6:14–17)", listen:"Truth, righteousness, the gospel of peace, faith, salvation, the Word of God." },
        { q:"Every picture breaks somewhere. Where does the armour picture break?", listen:"It isn't real metal; we don't fight people; God's strength, not ours, protects us." }
      ],
      live:"Choose one piece of God's armour to ‘put on’ this week. Write it in your Caravan Journal."
    },
    clue:{ prompt:"Friday's clue is the Seal Fragment: add this week's four Waystation Clues and write the total in Old Persian number signs.", answer:382, explain:"300 + 11 + 71 + 0 = 382 → three 100-signs, four 20-signs and one 2-sign." },
    next:"Next week — Stage V: For Such a Time as This. A queen risks her life.",
    rubric:[
      { c:"The frieze in context", code:"VA-UC",
        d:["Says it shows soldiers.","“Archers on a wall.”"],
        a:["Describes what, where and when.","“Glazed-brick archers made about 510 BC for Darius's palace at Susa; now in the Louvre.”"],
        f:["Explains why the style mattered.","“Coloured glazed bricks were a new style that became typical of the empire.”"],
        i:["I can say what it shows.","I can describe what, where and when.","I can explain why its style mattered."] },
      { c:"Positive & negative", code:"VA-PK",
        d:["Makes a print with help.","A faint print."],
        a:["Carves a block and explains positive and negative areas.","“The pressed lines stay white; the raised foam takes the ink.”"],
        f:["Plans a design that uses both areas well.","Bold areas of ink balanced with clear white lines."],
        i:["I can print with help.","I can carve and explain positive and negative.","I can plan a design using both areas well."] },
      { c:"Repeat", code:"VA-PK · VA-DI",
        d:["Prints once.","One print."],
        a:["Prints a repeating border of three.","Three prints in a row, evenly spaced."],
        f:["Designs a repeat that joins smoothly or alternates colours.","Prints line up and the pattern flows."],
        i:["I can print once.","I can print a repeating border.","I can design a repeat that flows."] }
    ],
    plan:{
      prior:"Students carved seals (Week 2) and relief layers (Week 3); they know designs print in reverse.",
      kc:["Thinking","Managing self","Using language, symbols & texts"],
      sequence:[
        ["0–6","The Dispatch","Hamid's dispatch; Waystation Check; LI/SC.","Recall."],
        ["6–14","Discovery","The Frieze of Archers; **Print Studio**.","Look; predict."],
        ["14–36","Choose Your Path","Design, carve, ink, print.","Create."],
        ["36–41","Through the Lens","Ephesians 6:10–11 (an analogy).","Discuss."],
        ["41–50","Seal Fragment IV & the Shadow's Note","300 + 11 + 71 + 0 = 382 → 100, 100, 100, 20, 20, 20, 20, 2.","Solve the lock."]
      ],
      diff:{
        supported:"Trace a simple design; adult help inking.",
        esol:"Demonstrate every step; picture instructions.",
        learning:"Hands-on; short steps; calm space.",
        flying:"A perfectly tiling repeat."
      },
      assess:{
        lookFor:["Describes the frieze","Explains positive and negative","Prints a repeat"],
        evidence:["Prints (photograph)","Reflections","Seal Fragment working (382)"]
      },
      inquiry:["Who still drew designs the right way round? Remind next week.","How did students answer the Shadow's ‘Why bother?’"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"hamid", meta:"The palace at Susa · a wall of coloured bricks",
        msg:"Stand back, and look at this wall. **Archers**, one after another, each taller than you, made of **coloured glazed bricks** that shine like jewels. We made them in pieces, then fitted them together. Today you'll make a **repeat** too, with a block and some ink. **Same image, again and again, each one proud.**",
        notes:[["SAY","Read the dispatch. 🟡 Master Hamid is fictional; the Frieze of Archers is real."],["ASK","“How could you make the same picture many times?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"What is an insulator?", a:"A material that slows down heat flow." }, { q:"Why do we need a control in a fair test?", a:"To compare: it shows what happens with no change." }, { q:"How did the yakhchāl keep ice?", a:"Thick mud-brick dome, deep pit, shade wall." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Real Persian art", title:"The Frieze of *Archers*",
        bullets:["Made of **coloured glazed bricks** about **510 BC** for the palace of **Darius I** at **Susa**.","A long line of **archers** (royal guards) with spears and bows.","Susa's palace used this kind of ceramic decoration, a **new style** that became typical of the empire. The frieze is now in the **Louvre**, Paris."],
        visual:{ svg:() => {
          const s = BM.s, v = BM.svg(620, 620, { style:"width:620px;height:620px;border-radius:10px;box-shadow:var(--sh-3)" });
          v.appendChild(s("rect", { width:620, height:620, fill:"#1d4f7a" }));
          for (let r=0;r<16;r++) for (let c=0;c<8;c++) v.appendChild(s("rect", { x:c*80 - (r%2)*40, y:r*40, width:78, height:38, fill:"none", stroke:"#123a5c", "stroke-width":2 }));
          [[60,"#E8B84A"],[250,"#2f8a6a"],[440,"#E8B84A"]].forEach(([x, robe]) => { const g = s("g");
            g.appendChild(s("circle", { cx:x + 60, cy:150, r:30, fill:"#5a3418" }));
            g.appendChild(s("path", { d:`M${x + 30} 180 h70 l20 330 h-110z`, fill:robe }));
            g.appendChild(s("path", { d:`M${x + 40} 260 h55 M${x + 35} 340 h70 M${x + 30} 420 h85`, stroke:"#F6EED8", "stroke-width":6 }));
            g.appendChild(s("path", { d:`M${x + 130} 90 V560`, stroke:"#d9c39a", "stroke-width":8 }));
            g.appendChild(s("path", { d:`M${x + 122} 90 l8 -24 l8 24z`, fill:"#d9c39a" }));
            g.appendChild(s("path", { d:`M${x + 20} 200 q-20 60 0 120`, stroke:"#d9c39a", "stroke-width":6, fill:"none" }));
            v.appendChild(g); });
          v.appendChild(s("rect", { y:560, width:620, height:60, fill:"#E8B84A" }));
          v.appendChild(s("text", { x:310, y:600, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":24, "letter-spacing":"3", fill:"#2B1B10" }, "DRAWING INSPIRED BY THE FRIEZE"));
          return v; } },
        notes:[["SAY","Read the points."],["CLICK","To show the real frieze, open the French Ministry of Culture page (Sources panel)."],["NOTE","Sources: French Ministry of Culture (Jacques de Morgan archive, Frieze of Archers); UNESCO (Susa). The picture here is our own simplified drawing, not the frieze."]] },
      { type:"interactive", phase:"excavate", fs:"real", paper:true, kicker:"Positive & negative", title:"Print Studio", ix:"printstudio",
        notes:[["CLICK","Press →: block → draw backwards → press lines → roll ink → print and repeat."],["ASK","At step 4: “Which parts will be white on the paper?” (The pressed-in lines.)"]] },
      { type:"paths", phase:"paths", fs:null, minutes:20,
        notes:[["SAY","“Design first (in reverse!), then carve and print.”"],["CLICK","Start the 20-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Ephesians 6:10–17."],["NOTE","This is an analogy: name where the picture breaks."]] },
      { type:"folioseal", phase:"decode", fs:"story",
        notes:[["SAY","“Four clues: 300, 11, 71 and 0. Add them up.”"],["CLICK","300 + 11 + 71 + 0 = 382."],["SAY","“382: three 100-signs (300), then 82: four 20-signs (80) and one 2-sign.”"],["CLICK","Press 100, 100, 100, 20, 20, 20, 20, 2, then ‘Open the lock’."]] },
      { type:"intercept", phase:"decode", fs:"story",
        msg:"Even the mightiest king loses. Why bother?",
        ask:"Xerxes had the biggest army in the world and still lost. If even kings fail, why should we keep trying? Who is the King who never loses?",
        notes:[["SAY","Read it in the Shadow's voice. 🟡 The Shadow Courier is fictional."],["ASK","Take answers. Link to Proverbs 16:18 (pride) and to God, the King who reigns forever (Psalm 145:13)."],["LISTEN","We keep trying because God is with us; doing right matters even when we lose; God's kingdom lasts."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess. Celebrate Fragment IV!"],["CLICK","C = darics. Dry prints for the Week 10 Exhibition."]] }
    ]
  };

  BM.WEEKS[4] = {
    n:4,
    story:"A storm at the Hellespont. The caravan crosses with Xerxes' great army, and the fragment slips into the sea until Nasrin fishes it out. The historians compare a Greek and a Persian telling of Thermopylae and Salamis; the geographers watch an oasis town grow where qanat water appears; the scientists design animals to survive the Lut; the engineers test which wrap keeps ice longest; and the artists print a repeating border of glazed-brick archers. On Friday, 300 + 11 + 71 + 0 = 382 frees Fragment IV.",
    hononga:"More than one voice in New Zealand's history (Mon) · Ashburton's stockwater races (Tue) · kiwi and wētā adaptations (Wed) · insulation in NZ homes (Thu) · kōwhaiwhai and tukutuku repeats (Fri).",
    seal:{
      answer:382,
      instruction:"Add the four **Waystation Clues**. Then write the total in **Old Persian number signs**, biggest first, and press them into the clay. *(100 = the hundred sign · 20 = two corner wedges · 2 = two upright wedges.)*",
      reveal:"🟡 **Fragment IV found!** Still dripping from the sea, it flies to its place on the Seal. Four down, six to go. Next week: *For Such a Time as This* — a queen risks her life."
    },
    lessons:[mon, tue, wed, thu, fri]
  };
})(window.BM);
