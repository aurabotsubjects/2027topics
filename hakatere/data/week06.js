/* ==========================================================
   WEEK 6 — MAP SHEET VI · THE TOWN  (Big Projects chosen)
   Notes: [KEY, text]  KEY = SAY ASK LISTEN IF CLICK TALK DEEPER PACE SAFETY WAIT NOTE TIKANGA
   Facts are sourced in data/sources.js (tags match blueprint §18).
   ========================================================== */
(function(BM){
  "use strict";

  /* Big Project launch slide (blueprint §6.2; as in The Fifth Codex) */
  const bigProject = (subject, name, what, choose) => ({
    type:"content", phase:"paths", fs:"real", kicker:"Big Project launch · Weeks 7–10", title:name,
    bullets:[what, "**Choose:** " + choose, "**Set a goal** in your Field Journal: *By Week 10 I want to…*", "Build it over Weeks 7–10 and show it at the **Our Place Exhibition** in Week 10."],
    visual:{ level:true },
    notes:[["SAY","“This is your Big Project for " + subject + ". You choose what you make, and you'll show it to your whānau in Week 10.”"],["CLICK","Give 2 minutes: students write their choice and a goal in their Field Journals."],["NOTE","The core rubric for this subject is in the Unit Plan PDF. Check goals weekly (1 minute at the start of Path time)."]]
  });

  /* Scratch-style blocks drawn in code (our own design; no Scratch mascot) */
  const blocksSVG = () => {
    const s = BM.s, v = BM.svg(600, 600, { style:"width:600px;height:600px;border-radius:10px;box-shadow:var(--sh-3)" });
    v.appendChild(s("rect", { width:600, height:600, fill:"#f6f1e4" }));
    const B = (y, col, t, ind) => { v.appendChild(s("path", { d:`M${60 + (ind||0)} ${y} h30 l10 10 h40 l10 -10 h290 a10 10 0 0 1 10 10 v50 a10 10 0 0 1 -10 10 h-290 l-10 10 h-40 l-10 -10 h-30 a10 10 0 0 1 -10 -10 v-50 a10 10 0 0 1 10 -10Z`, fill:col })); v.appendChild(s("text", { x:80 + (ind||0), y:y + 44, "font-family":"Big Shoulders Display", "font-weight":900, "font-size":30, fill:"#fff", "letter-spacing":"1" }, t)); };
    B(80, "#c9842a", "WHEN ▶ CLICKED");
    B(170, "#3D8DB3", "MOVE 1 SQUARE");
    B(260, "#3D8DB3", "MOVE 1 SQUARE");
    B(350, "#7d5fb0", "TURN LEFT 90°");
    B(440, "#3D8DB3", "MOVE 1 SQUARE");
    v.appendChild(s("text", { x:300, y:570, "text-anchor":"middle", "font-family":"Atkinson Hyperlegible", "font-size":22, fill:"#4B5357" }, "Blocks snap together in order: a sequence."));
    return v;
  };

  /* ======================= MONDAY · HISTORY ======================= */
  const mon = {
    id:"w06-mon", week:6, day:"mon", subject:"history", duration:50,
    title:"Building Ashburton: A Victorian Town", guide:"nell",
    codes:["SS-H","SS-E","SS-P","ANZH"],
    coverage:"Y6 History (2027): the Victorian age — buildings, technology and life for different groups. Y6 Economic activity: specialisation, exchange and local industry. Practices: sequencing change over time using sources.",
    li:"We are learning how Ashburton grew from a river crossing into a town, and how its industries depended on specialisation.",
    sc:["I can sequence the early growth of the town.","I can explain how bridges, the railway and industry helped the town grow.","I can describe one local business, past or present, and what it specialises in."],
    vocab:[
      { w:"accommodation house", def:"an early inn where travellers could eat and sleep" },
      { w:"ferry reserve", def:"land set aside beside a river for a ferry crossing" },
      { w:"survey", def:"to measure land and mark out where streets and sections go" },
      { w:"railway terminus", def:"the station at the end of a railway line" },
      { w:"industry", def:"businesses that make or process goods, like a flour mill or a freezing works" },
      { w:"freezing works", def:"a factory where meat is processed and frozen to send overseas" },
      { w:"specialisation", def:"when a person or business focuses on doing one job well, and trades for the rest" },
      { w:"Victorian", def:"from the time Queen Victoria reigned (1837–1901)" }
    ],
    prep:{ min:5, items:["Field Journals (Big Project goal page)","Optional: a few old photos of Ashburton's main street from the Ashburton Museum website","Optional: card, boxes and glue for Path B"] },
    safety:[],
    tikanga:["Before the town, this was part of Kāi Tahu's trails and food places (Weeks 2–3). Ask your Māori lead whether Arowhenua has Māori names for places in the town you could use."],
    hononga:"**Whose map?** The town grid was drawn on land bought under Kemp's Deed (Week 4), on a plain that Kāi Tahu had crossed for generations. The town's name, Ashburton, and the river's name, Hakatere, sit side by side on Sheet I and still do today.",
    paths:[
      { id:"A", name:"The Recorder", product:"Then & Now Report", steps:["Choose **one place** in Ashburton: the main street, the river crossing or the railway.","Describe it **then** (1860s–1900s) and **now**.","Explain **one thing that changed** and **why**."], flying:"Explain what stayed the same, and why that matters." },
      { id:"B", name:"The Maker", product:"Main-Street Model", steps:["Build a **model of an 1880s main street** from card or boxes.","Include **at least 4 businesses**: a store, a grain store, a stock agent, a hotel…","Label **what each one specialises in**."], flying:"Add the railway line and explain why shops lined up beside it." },
      { id:"C", name:"The Storyteller", product:"1880s Business Pitch", steps:["Invent a **shop for 1880s Ashburton**.","Plan a **1-minute pitch**: what you sell, **who needs it**, and **who you trade with**.","Use the word **specialise**."], flying:"Explain how the railway or the freezing works would help your business." }
    ],
    supportedShort:"a picture timeline to order (1858, 1864, 1878, 1880), sentence frames, a business word bank.",
    lens:{
      pillar:"manaaki", title:"Seek the good of the town",
      look:"Look again at the town growing on the plain: houses, shops, mills, railway, people.",
      ref:"Jeremiah 29:7",
      paraphrase:"Seek the peace and good of the city where I have sent you. Pray to the Lord for it, because if it does well, you will do well too.",
      talk:[
        { q:"God told His people to seek the good of the city they lived in. What does it look like to seek the good of Ashburton?", listen:"Helping neighbours; supporting local businesses; caring for the river; praying for the town; welcoming newcomers." },
        { q:"Who in our town works hard for everyone's good?", listen:"Firefighters, nurses, teachers, farmers, shop owners, volunteers, church groups, council workers." }
      ],
      live:"Pray for **one person or place** in our town this week, or do **one kind thing** for it."
    },
    clue:{ prompt:"The accommodation house was built in 1858, and the town was surveyed by 1864. How many years apart?", answer:6, explain:"1864 − 1858 = 6. Trig Clue 1 is saved for Friday!" },
    next:"Tuesday — Sam is climbing above the bushline. What lives up there, where it's too cold for trees?",
    rubric:[
      { c:"Sequencing growth", code:"SS-H",
        d:["Names one early event.","“There was a ferry.”"],
        a:["Sequences the town's early growth.","“1858 accommodation house at the ferry → 1863–64 survey → shops and railway → Rakaia bridge 1878 → Methven line 1880.”"],
        f:["Explains how one change led to the next.","“The ferry crossing brought travellers, so an inn was built, so a town was surveyed there.”"],
        i:["I can name one early event.","I can sequence the town's growth.","I can explain how one change led to the next."] },
      { c:"Railway, bridges & industry", code:"SS-H · SS-E",
        d:["Says trains came.","“They built a railway.”"],
        a:["Explains how transport and industry helped the town grow.","“Bridges and the railway let farmers send grain, wool and meat away, so mills and freezing works were built.”"],
        f:["Explains the effects of losing a railway.","“When the Methven line closed in 1976, the town shrank until the ski field brought people back.”"],
        i:["I know trains came.","I can explain how transport and industry helped the town grow.","I can explain the effects of losing a railway."] },
      { c:"Specialisation", code:"SS-E",
        d:["Names a shop.","“A bakery.”"],
        a:["Describes a business and what it specialises in.","“A flour mill specialises in grinding wheat. It buys from farmers and sells flour to bakers.”"],
        f:["Explains why specialisation needs trade.","“If everyone does one job well, they must trade to get everything else.”"],
        i:["I can name a shop.","I can describe a business and its specialisation.","I can explain why specialisation needs trade."] }
    ],
    plan:{
      prior:"Students know the river and plains (Weeks 1, 4), Kemp's Deed (Week 4) and Hakatere Station (Week 5). Most know Ashburton's main street, the Domain and the river bridge.",
      kc:["Thinking","Using language, symbols & texts"],
      sequence:[
        ["0–6","Field Note","Nell's note: Sheet VI, a grid on a treeless plain. Trig Check (Week 5). LI/SC.","Recall; predict."],
        ["6–18","Survey","From ferry to town; **Town Grows**; bridges and railways; industry and specialisation.","Sequence; discuss."],
        ["18–20","Big Project launch","History Big Project: **Our Place Museum Case**. Choose and set a goal.","Choose; write goal."],
        ["20–38","Choose Your Path","Introduce A/B/C. Roam: “What does that business specialise in? Who does it trade with?”","Report / model / pitch."],
        ["38–45","Through the Lens","Jeremiah 29:7 — four moves.","Discuss; pray or act."],
        ["45–50","Trig Clue & Exit","Trig Clue 1 (answer 6); self-assessment; wheat sheaves.","Solve; self-assess."]
      ],
      diff:{
        supported:"Picture timeline; sentence frames; word bank.",
        esol:"Photos of then and now; act out a ferry crossing and a trade.",
        learning:"Hands-on model; partner work; calm screen available.",
        flying:"Cause and effect between changes; losing a railway; specialisation and trade."
      },
      assess:{
        lookFor:["Sequences the town's growth","Explains transport and industry","Explains specialisation"],
        evidence:["Town Grows discussion","Path products (photograph)","Big Project goal","Exit self-assessment"]
      },
      inquiry:["Big Project choices: who needs help finding an object or story?","Who linked the town back to Kemp's Deed?","Invite whānau with old photos or objects for the museum cases."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"nell", meta:"Conservation room · Sheet VI",
        msg:"Sheet VI is all **straight lines**: a neat **grid of streets** ruled on a flat, empty plain. Not a single tree. Down by the river there's a tiny drawing of a **ferry**, and someone has pencilled in the corner: *treeless — plant shelter!* This is the **start of a town**. Can you guess which one?",
        notes:[["SAY","Read the message. 🟡 Nell is fictional."],["ASK","“Which town? How do you know?”"],["LISTEN","Ashburton: the river, the grid, the ferry crossing."]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"What is wet-on-wet painting?", a:"Painting on wet paper so colours spread and blend." }, { q:"How do you make the nor'west arch in a painting?", a:"Lift out a curved band of wet paint with a tissue." }, { q:"What bearing opened Sheet V?", a:"041° (1 + 6 + 29 + 5)." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"A river crossing", title:"From ferry to *town*",
        bullets:["Ashburton began on a **treeless plain** beside the braided river.","In **1858** an **accommodation house** was built on a **ferry reserve** on the riverbank, where travellers crossed.","The **town was surveyed** in **1863–64**: streets were pegged out in a grid."],
        visual:{ map:{ theme:"paper", labels:"both", relief:true }, size:560 },
        notes:[["SAY","Facts from Te Ara (Canterbury places: Mid-Canterbury)."],["ASK","“Why would a town start at a river crossing?”"],["LISTEN","Travellers had to stop; they needed food and a bed; goods crossed there; it was a meeting place."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Watch it grow", title:"Town Grows", ix:"towngrows",
        notes:[["CLICK","Press → (or ‘Grow’) to move through time. Students predict what appears next."],["ASK","At each step: “What does the town need now?”"],["NOTE","The map is a simplified picture, not an exact plan of Ashburton."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Getting there", title:"Bridges & *railways*", h:"480px",
        cards:[ { big:"1878", t:"Rakaia bridged", d:"Once the **Rakaia River was bridged**, the township of **Rakaia** grew on its south bank." }, { big:"1880", t:"Methven line", d:"A **branch railway** ran from Rakaia to **Methven**, its terminus, from **1880 to 1976**." }, { big:"1967", t:"Line closed", d:"The **Tinwald–Mt Somers** line closed in **1967**. Part of it is kept at the **Plains Vintage Railway**." } ],
        notes:[["SAY","Facts from Te Ara."],["ASK","“How would a railway change life for a farmer in 1880?”"],["LISTEN","Grain and wool could go to the port quickly; supplies came in; people could travel; towns grew around stations."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Making a living", title:"Industry & *specialisation*",
        bullets:["Ashburton's industries included **flour mills, dairy factories, freezing works and brickworks**. Grain stores and stock agents lined the main road and railway.","**John Grigg** of **Longbeach** drained huge swamps to farm, and helped start Canterbury's **meat-freezing** industry. His statue stands in Ashburton.","Each business **specialised** in one job and **traded** with the others: farmers → mills and freezing works → shops → families."],
        visual:{ artefact:"haybale" },
        notes:[["SAY","Facts from Te Ara. Curriculum: Y6 economic activity (specialisation and exchange)."],["ASK","“A flour mill specialises in flour. Who does it buy from? Who does it sell to?”"],["NOTE","Draining swamps also removed wetlands that were mahika kai (Week 2). Raise it if students are ready: progress can have costs."]] },
      { type:"discussion", phase:"excavate", fs:"real", kicker:"Turn & Talk", q:"You're opening a business in **1880s Ashburton**. What will you **specialise** in, and **who** will you trade with?", sub:"Think about farmers, travellers, the railway and families.", talk:60,
        notes:[["TALK","60-second talk."],["LISTEN","Blacksmith (horses, ploughs); saddler; general store; hotel near the station; baker buying flour; carrier with a dray."]] },
      bigProject("History", "Our Place Museum Case", "Curate **one object or story** from Hakatere (a family object, a building, a photo or a person) with a **label**, a **“how do we know?”** card and **two perspectives**.", "your object or story. You could interview a grandparent or neighbour."),
      { type:"paths", phase:"paths", fs:null, minutes:18,
        notes:[["SAY","“Choose your path. Remember the word: specialise.”"],["CLICK","Start the 18-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Jeremiah 29:7."],["ASK","“What does it look like to seek the good of Ashburton?”"]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 1864 − 1858 = 6."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess. Check every student has written a Big Project goal."],["CLICK","C = wheat sheaves."]] }
    ]
  };

  /* ======================= TUESDAY · GEOGRAPHY ======================= */
  const tue = {
    id:"w06-tue", week:6, day:"tue", subject:"geography", duration:50,
    title:"Life Above the Bushline: Alpine & Tussock Ecosystems", guide:"sam",
    codes:["SS-G","SC-P"],
    coverage:"Y5 Geography (2027): biomes and ecosystems — the alpine and tussock biome and the braided-river ecosystem; how living things are adapted to their environment; protecting places.",
    li:"We are learning about the alpine and tussock biome and the ecosystems in it.",
    sc:["I can describe the conditions above the bushline.","I can explain how plants and animals are adapted to live there.","I can compare the alpine ecosystem with the braided-river ecosystem."],
    vocab:[
      { w:"biome", def:"a large area with a similar climate, plants and animals (like alpine, desert or rainforest)" },
      { w:"ecosystem", def:"living things and their surroundings, all affecting each other" },
      { w:"bushline", def:"the height on a mountain above which trees can't grow (also called the treeline)" },
      { w:"alpine", def:"high on mountains, above the bushline" },
      { w:"tussock", def:"a tough native grass that grows in thick clumps" },
      { w:"adaptation", def:"a feature that helps a living thing survive where it lives" },
      { w:"kea", say:"KEH-ah", def:"New Zealand's mountain parrot, the world's only alpine parrot" },
      { w:"wetland", def:"land that is wet for much of the year, like a swamp, bog or lake edge" }
    ],
    prep:{ min:5, items:["Field Journals","Optional: a clump of garden tussock or a photo of snow tussock","Optional (Path B): shoebox, card, clay for a diorama"] },
    safety:[],
    tikanga:["Tussock, birds and wetlands were mahika kai and resources for Kāi Tahu (Week 2). Check te reo names for local plants and birds with your Māori lead."],
    hononga:"**Kaitiakitanga.** Kāi Tahu gathered food and materials across these high-country ecosystems for generations, and still hold knowledge of the trails. Caring for the land so it keeps providing is an idea shared by mana whenua and by Christians who see creation as God's gift.",
    paths:[
      { id:"A", name:"The Recorder", product:"Field Guide Page", steps:["Choose **one plant or animal** from the alpine zone or the braided river.","Draw it and label **3 adaptations**.","Explain **where it lives** and **what threatens it**."], flying:"Compare it with a living thing from the other ecosystem." },
      { id:"B", name:"The Maker", product:"Ecosystem Diorama", steps:["Build a **shoebox diorama** of the alpine zone or a braided river.","Include **plants, animals and the conditions** (snow, wind, gravel, water).","Add **3 labels** explaining adaptations."], flying:"Show how the two ecosystems connect: rivers flow from the mountains." },
      { id:"C", name:"The Storyteller", product:"Ranger Talk", steps:["Plan a **1-minute DOC ranger talk** at Hakatere Conservation Park.","Explain **what lives here** and **how it survives**.","Give visitors **two ways to protect it**."], flying:"Answer a visitor who asks, ‘Why does it matter if one bird disappears?’" }
    ],
    supportedShort:"plant and animal picture cards, an adaptations word bank, a diagram to label.",
    lens:{
      pillar:"aroha", title:"Ask the animals",
      look:"Look again at the kea, the tussock and the wrybill: each one fits its place.",
      ref:"Job 12:7–10",
      paraphrase:"Ask the animals, and they will teach you; ask the birds, and they will tell you. Which of them doesn't know that the Lord made this? In His hand is the life of every creature.",
      talk:[
        { q:"What can a kea or a tussock ‘teach’ us about God?", listen:"He designs carefully; He cares for small things; He gives each creature what it needs; He is creative." },
        { q:"If every creature's life is in God's hand, how should we treat them?", listen:"Give nesting birds space; don't litter; protect wetlands; respect the land." }
      ],
      live:"Draw one alpine or braided-river creature in your Field Journal, and write one thing it **teaches** you about God."
    },
    clue:{ prompt:"How many braided-river bird species are our class teams named after? (Look at the team list.)", answer:6, explain:"Wrybill, black-billed gull, banded dotterel, black stilt, black-fronted tern and pied oystercatcher: 6. Trig Clue 2 is saved!" },
    next:"Wednesday — Dr Priya says the best time to see Matariki is a freezing winter dawn. Bring your warmest jersey!",
    rubric:[
      { c:"Alpine conditions", code:"SS-G",
        d:["Says it's cold up high.","“It's cold.”"],
        a:["Describes the conditions above the bushline.","“Above the bushline it's cold, windy and snowy, with a short growing season, so trees can't grow.”"],
        f:["Explains why it gets colder as you climb.","“Air is about 6°C cooler for every 1,000 m, so the top of Mt Hutt can be freezing when the plains are warm.”"],
        i:["I know it's cold up high.","I can describe the conditions above the bushline.","I can explain why it gets colder as you climb."] },
      { c:"Adaptations", code:"SS-G · SC-P",
        d:["Names an alpine plant or animal.","“Kea live there.”"],
        a:["Explains how plants and animals are adapted.","“Alpine plants grow low and small, and some have hairy leaves, which helps them survive cold and wind.”"],
        f:["Explains why an adaptation helps, with evidence.","“Tussocks grow in thick clumps, so the inside stays sheltered from wind and frost.”"],
        i:["I can name an alpine living thing.","I can explain how living things are adapted.","I can explain why an adaptation helps."] },
      { c:"Comparing ecosystems", code:"SS-G",
        d:["Describes one ecosystem.","“Birds live by the river.”"],
        a:["Compares the alpine and braided-river ecosystems.","“Alpine: cold and snowy, with kea and cushion plants. River: open gravel where six birds nest from September to January.”"],
        f:["Explains how the two are connected.","“Snow and rain in the mountains feed the rivers, and the floods keep the gravel open for the birds.”"],
        i:["I can describe one ecosystem.","I can compare the two ecosystems.","I can explain how they are connected."] }
    ],
    plan:{
      prior:"Students know the mountains, the rain shadow and braided rivers (Weeks 2–5), and that braided-river birds nest on the gravel (Week 4). Some have tramped or skied at Mt Hutt.",
      kc:["Thinking","Participating & contributing"],
      sequence:[
        ["0–6","Field Note","Sam's message. Trig Check (Monday). LI/SC.","Recall; predict."],
        ["6–18","Survey","Biomes and ecosystems; Hakatere Conservation Park; **Altitude Zones**; adaptations; braided-river birds.","Explore; compare; discuss."],
        ["18–20","Big Project launch","Geography Big Project: **Mountain Field Guide or Campaign**.","Choose; write goal."],
        ["20–38","Choose Your Path","Introduce A/B/C. Roam: “How does it survive? What threatens it?”","Field guide / diorama / ranger talk."],
        ["38–45","Through the Lens","Job 12:7–10 — four moves.","Discuss; journal."],
        ["45–50","Trig Clue & Exit","Trig Clue 2 (answer 6); self-assessment; wheat sheaves.","Solve; self-assess."]
      ],
      diff:{
        supported:"Picture cards; word bank; diagram to label.",
        esol:"Act out wind, cold and snow; picture glossary of plants and birds.",
        learning:"Hands-on diorama; partner work; calm screen available.",
        flying:"Lapse rate; connected ecosystems; threats and protection."
      },
      assess:{
        lookFor:["Describes alpine conditions","Explains adaptations","Compares the two ecosystems"],
        evidence:["Altitude Zones discussion","Path products (photograph)","Big Project goal","Exit self-assessment"]
      },
      inquiry:["Big Project: who chose a campaign? Help them find an audience.","Did students explain adaptations, or just name them?","Bank kea questions for a DOC visit."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"sam", meta:"Above the bushline · Hakatere Conservation Park",
        msg:"We climbed up through the beech forest this morning until the trees just **stopped**. Above that line it's all **tussock**, then tiny plants hugging the rocks. Flint barked at a **kea** that was trying to undo my pack! How does anything live up here, where it's too cold even for trees?",
        notes:[["SAY","Read the message. 🟡 Sam and Flint are fictional."],["ASK","“Why might trees stop growing at a certain height?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"What was built on the ferry reserve in 1858?", a:"An accommodation house." }, { q:"What does specialisation mean?", a:"Focusing on one job and trading for everything else." }, { q:"Name two of Ashburton's early industries.", a:"Flour mills, dairy factories, freezing works, brickworks." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Our high country", title:"Hakatere *Conservation Park*",
        bullets:["A **biome** is a big area with a similar climate, plants and animals. An **ecosystem** is living things and their surroundings, affecting each other.","**Hakatere Conservation Park** protects nearly **60,000 ha**: **tussock, beech forest, rivers, lakes and wetlands**.","The **Ō Tū Wharekai** wetlands are among New Zealand's best of their kind."],
        visual:{ map:{ theme:"paper", labels:"both", relief:true }, size:560 },
        notes:[["SAY","Facts from DOC (Hakatere Conservation Park)."],["ASK","“What's the difference between a biome and an ecosystem?”"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Climb the mountain", title:"Altitude Zones", ix:"altitudezones",
        notes:[["CLICK","Drag the slider or press → to climb: plains, forest, tussock, alpine, peak."],["ASK","At each zone: “What's changed? What lives here? Why?”"],["NOTE","Zone heights are approximate. The 6°C per 1,000 m is a general rule; real temperatures vary."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Built to survive", title:"Alpine *adaptations*", h:"500px",
        cards:[ { icon:"🌾", t:"Tussock", d:"Grows in **thick clumps**. The inside of the clump stays **sheltered** from wind and frost." }, { icon:"🌼", t:"Alpine plants", d:"Many stay **low and small**, some in **cushion** shapes, some with **hairy or waxy leaves**: protection from **cold, wind and drying**." }, { icon:"🦜", t:"Kea", d:"The world's only **alpine parrot**, found in the Southern Alps. Clever and curious, and **endangered**." } ],
        notes:[["SAY","Kea facts from DOC. Te Ara: ‘A low average temperature is the defining characteristic of alpine zones.’"],["ASK","“Why would being low and small help a plant on a windy mountain?”"],["LISTEN","Less wind; snow covers it like a blanket; less water lost; warmer near the ground."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Down by the river", title:"The *braided-river* ecosystem",
        bullets:["Six braided-river birds nest on **open gravel** from about **September to January**: **wrybill, banded dotterel, black stilt, black-billed gull, pied oystercatcher** and **black-fronted tern**.","Their eggs look like **stones**. Floods keep the gravel **open and bare**.","DOC asks people to **stay on tracks**, keep **vehicles off** the riverbed in nesting season, and give birds **space**."],
        visual:{ artefact:"stones" },
        notes:[["SAY","Facts from DOC (2024). Our class teams are named after these six birds, plus kea and pipit!"],["ASK","“How is this ecosystem different from the alpine one? How are they connected?”"],["LISTEN","Rivers start as snow and rain in the mountains; gravel comes down from the mountains."]] },
      bigProject("Geography", "Mountain Field Guide or Campaign", "Make a **field guide** to one local maunga or braided river (how it formed, weather, life, hazards, people) **or** run a **campaign** to protect braided-river birds.", "your mountain or river, or your cause and who your audience is"),
      { type:"paths", phase:"paths", fs:null, minutes:18,
        notes:[["SAY","“Choose your path. Use the word adaptation.”"],["CLICK","Start the 18-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Job 12:7–10."],["ASK","“What can a kea or a tussock teach us about God?”"]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 6. (Settings → Teams lists all eight team birds; six are braided-river birds.)"]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess. Check Big Project goals are written."],["CLICK","C = wheat sheaves."]] }
    ]
  };

  /* ======================= WEDNESDAY · SCIENCE ======================= */
  const wed = {
    id:"w06-wed", week:6, day:"wed", subject:"science", duration:50,
    title:"Matariki & Puaka", guide:"priya",
    codes:["SC-ES","ANZH","SC-P"],
    coverage:"Y5–6 Science (2027): stars and star clusters; patterns in the night sky through the year. Aotearoa New Zealand's Histories and te ao Māori: Matariki and Puaka as markers of the Māori New Year.",
    li:"We are learning what Matariki is scientifically, and what Matariki and Puaka mean in te ao Māori.",
    sc:["I can explain that Matariki is a star cluster (the Pleiades).","I can explain why Matariki marks the Māori New Year.","I can explain why many Kāi Tahu look to Puaka."],
    vocab:[
      { w:"star cluster", def:"a group of stars that are close together in space" },
      { w:"Pleiades", say:"PLY-uh-deez", def:"the star cluster called Matariki in te reo Māori, in the constellation Taurus" },
      { w:"Puaka", say:"POO-ah-kah", def:"the southern Kāi Tahu name for the star Rigel (Puanga in the north)" },
      { w:"Rigel", say:"RY-jel", def:"a very bright, hot, blue-white star in Orion" },
      { w:"Tautoru", say:"tow-TAW-roo", def:"the three stars of Orion's belt" },
      { w:"light-year", def:"the distance light travels in one year, about 9.5 million million km" },
      { w:"constellation", def:"a group of stars that make a pattern in the sky" }
    ],
    prep:{ min:5, items:["Field Journals","Optional: card and silver pens for Path A star cards","Home task (with whānau): look east before dawn on a clear winter morning"] },
    safety:["Dawn stargazing at home happens with an adult. Wrap up warm!"],
    tikanga:["Follow §17.5: present Puaka as the marker many southern iwi, including Ngāi Tahu, use, and credit Prof. Rangi Matamua for the nine-star account; note that accounts vary.","Ask your Māori lead and Te Rūnanga o Arowhenua how Matariki and Puaka are marked in Hakatere before teaching (D3). Add their answer to the ‘In Hakatere’ note.","Pōhutukawa is linked to remembering those who have died. Be gentle: some students may have lost someone this year."],
    hononga:"**Puaka in the south.** For many Kāi Tahu, **Puaka** (Rigel) is the star to watch for in the dawn sky, because it is bright and easy to see from the south. Kāi Tahu astronomer **Victoria Campbell** has researched the southern skies. Ask your Māori lead how Puaka and Matariki are marked at Arowhenua.",
    paths:[
      { id:"A", name:"The Recorder", product:"Star Card Set", steps:["Make **10 small star cards**: the 9 stars of Matariki and **Puaka**.","On each, write the **name** and **what it is linked to**.","On the back of one card, explain **what Matariki is scientifically**."], flying:"Add a card explaining why Kāi Tahu often look to Puaka." },
      { id:"B", name:"The Maker", product:"Winter Dawn Sky Map", steps:["Draw a **winter dawn sky** over our mountains, looking **north-east**.","Mark **Tautoru (Orion's belt)**, **Puaka** and **Matariki**.","Add arrows showing **how to find** each one."], flying:"Add a label for how far away Matariki is, and what a light-year is." },
      { id:"C", name:"The Storyteller", product:"Matariki & Puaka Explainer", steps:["Plan a **1-minute explainer** for a junior class.","Explain **what Matariki is**, **when** to look, and **why it matters**.","Explain **Puaka** for Kāi Tahu."], flying:"Answer a junior who asks, ‘Why do we have a holiday for some stars?’" }
    ],
    supportedShort:"star picture cards, a sky map to complete, sentence frames.",
    lens:{
      pillar:"mohio", title:"He calls them each by name",
      look:"Look again at the dawn sky: Tautoru, Puaka and the little cluster of Matariki.",
      ref:"Job 38:31 · Amos 5:8 · Psalm 147:4",
      paraphrase:"Can you tie up the stars of the Pleiades, or loosen Orion's belt? He made the Pleiades and Orion. He counts the stars and calls them each by name.",
      talk:[
        { q:"Māori named these stars and read meaning in them. The Bible says God knows every star by name. What do both tell us about how people have always looked up?", listen:"People have always wondered at the stars; they used them to mark time and seasons; they felt they mattered; we look up and think about who made them." },
        { q:"The Bible names the Pleiades and Orion, the same stars as Matariki and Puaka's constellation. What does it mean that God made and names them?", listen:"He's the Creator; He's bigger than the stars; He knows details; if He knows every star, He knows me." }
      ],
      live:"With whānau, look **east before dawn** on a clear winter morning. Say thank you to the God who **names the stars**."
    },
    clue:{ prompt:"How many stars of Matariki does Professor Rangi Matamua name?", answer:9, explain:"Nine stars. Trig Clue 3 is saved!" },
    next:"Thursday — Liv's tractor won't move until someone gives it exact instructions. Time to code!",
    rubric:[
      { c:"Matariki the cluster", code:"SC-ES",
        d:["Says Matariki is stars.","“It's some stars.”"],
        a:["Explains that Matariki is a star cluster.","“Matariki is the Pleiades, a cluster of stars in Taurus, about 440 light-years away.”"],
        f:["Explains why it appears before dawn in midwinter.","“The Sun hides it until mid-June; then it rises a little earlier each day, before dawn.” (Week 4)"],
        i:["I know Matariki is stars.","I can explain that Matariki is a star cluster.","I can explain why it appears before dawn in midwinter."] },
      { c:"The Māori New Year", code:"ANZH",
        d:["Says Matariki is a holiday.","“We get a day off.”"],
        a:["Explains why Matariki marks the new year and what people do.","“Its rising marks the new year. People remember those who died, celebrate the harvest and read the stars for the season.”"],
        f:["Explains the meaning of several of the nine stars.","“Pōhutukawa is for those who have died; Tupuānuku for food from the ground; Hiwa-i-te-rangi is the wishing star.”"],
        i:["I know Matariki is a holiday.","I can explain why Matariki marks the new year.","I can explain several of the nine stars."] },
      { c:"Puaka", code:"ANZH · SC-ES",
        d:["Names Puaka.","“Puaka is a star.”"],
        a:["Explains why many Kāi Tahu look to Puaka.","“Puaka is Rigel, a bright star in Orion. Matariki is harder to see clearly from the south, so many Kāi Tahu look to Puaka.”"],
        f:["Uses Tautoru to find both Puaka and Matariki.","“Find the belt; Puaka is the bright blue star near it; follow the belt the other way to Matariki.”"],
        i:["I can name Puaka.","I can explain why many Kāi Tahu look to Puaka.","I can find Puaka and Matariki using Tautoru."] }
    ],
    plan:{
      prior:"Students learned in Week 4 why Matariki reappears before dawn in midwinter, and in Week 5 about the maramataka. Many will know Matariki from the public holiday; fewer will know Puaka.",
      kc:["Thinking","Relating to others","Using language, symbols & texts"],
      sequence:[
        ["0–6","Field Note","Dr Priya's message. Trig Check (Tuesday). LI/SC.","Recall; predict."],
        ["6–18","Survey","Matariki the cluster; **D8 side note**; **Matariki & Puaka Finder**; traditions; Puaka for Kāi Tahu.","Find; discuss."],
        ["18–20","Big Project launch","Science Big Project: **Sky Watcher's Journal**.","Choose; write goal."],
        ["20–38","Choose Your Path","Introduce A/B/C. Roam: “What's it linked to? How do you find it?”","Star cards / sky map / explainer."],
        ["38–45","Through the Lens","Job 38:31, Amos 5:8, Psalm 147:4 — four moves.","Discuss; look at dawn."],
        ["45–50","Trig Clue & Exit","Trig Clue 3 (answer 9); self-assessment; wheat sheaves.","Solve; self-assess."]
      ],
      diff:{
        supported:"Star picture cards; sky map to complete; sentence frames.",
        esol:"Point and name each star on the screen; picture glossary.",
        learning:"Hands-on star cards; partner work; calm screen available.",
        flying:"Heliacal rising (Week 4); light-years; the nine stars' meanings."
      },
      assess:{
        lookFor:["Explains Matariki is a star cluster","Explains the Māori New Year","Explains Puaka for Kāi Tahu"],
        evidence:["Finder discussion","Path products (photograph)","Big Project goal","Exit self-assessment"]
      },
      inquiry:["Did the ‘In Hakatere’ note get checked with Arowhenua? Record their guidance here.","Was Pōhutukawa handled gently?","Big Project: who chose a Sky Watcher's Journal? Plan observation nights."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"priya", meta:"Mt Hutt road · 6 am, late June",
        msg:"It's **minus three** and I've been out since five. Over the mountains, low in the **north-east**, I can see three stars in a row, a bright **blue-white** star beside them, and a tiny, misty **cluster** just above the horizon. Two of these mark the **new year**. Which ones? And why do people in the south often watch a different star?",
        notes:[["SAY","Read the message. 🟡 Dr Priya is fictional."],["ASK","“Who has seen Matariki? Where? When?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"What is the bushline?", a:"The height above which trees can't grow." }, { q:"Name one alpine adaptation.", a:"Low and small; cushion shape; hairy or waxy leaves; tussock clumps." }, { q:"Why can't we see Matariki in May? (Week 4)", a:"The Sun is in front of it; its glare hides it." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"A cluster of stars", title:"What is *Matariki*?",
        bullets:["**Matariki** is a small **star cluster**, the **Pleiades**, in **Taurus**.","It rises **low in the north-east before dawn in midwinter**, and signals the **Māori New Year**. Since **2022** it has had a **public holiday**.","Radio telescopes measured the cluster at about **443 light-years** away."],
        visual:{ artefact:"starchart" },
        notes:[["SAY","Facts from Te Ara (Matariki) and EurekAlert/NRAO (the distance measurement)."],["NOTE","The public holiday is on a Friday in late June or early July; its date follows the maramataka."],["SAY","“A light-year is how far light travels in a year: about 9.5 million million km. The light you see from Matariki left it over 400 years ago!”"]] },
      { type:"sidenote", phase:"excavate", fs:"real", kicker:"How old are the stars?", title:"Who made the *Pleiades*?",
        main:"**God made the stars** (Genesis 1:16). **He made the Pleiades and Orion** (Amos 5:8), and **He counts the stars and calls them each by name** (Psalm 147:4).\n\nReading Genesis as history, we believe the universe is **young**: thousands of years, not millions.",
        refs:"Genesis 1:16 · Amos 5:8 · Job 38:31 · Psalm 147:4",
        side:{ text:"Many astronomers estimate the stars of the Pleiades formed about **100 million years ago**.", src:"EurekAlert / NRAO (2014)" },
        notes:[["SAY","“As Christians, we believe God created everything, and our school teaches that the universe is young. Many astronomers think the stars are much older, so it's good to know what they say and why. Here's their estimate.”"],["NOTE","Measurements stay as measurements: the 443 light-year distance was measured with radio telescopes. Ages are estimates based on assumptions."],["NOTE","Rubrics never assess which view a student holds (D8)."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"A winter dawn", title:"Matariki & Puaka Finder", ix:"matarikifinder",
        notes:[["CLICK","Press → to find each star: Tautoru, Puaka, then Matariki. At Matariki, tap the nine star names."],["TIKANGA","The nine names follow Prof. Rangi Matamua's account. Te Ara notes that some iwi count seven stars and others nine."],["NOTE","The sky is simplified. In real life, look north-east about an hour before sunrise in late June or July."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"A time to…", title:"Matariki *traditions*", h:"480px",
        cards:[ { icon:"🕯️", t:"Remember", d:"**Remembering those who have died** in the past year." }, { icon:"🍠", t:"Celebrate", d:"**Feasting at the end of the harvest**, sharing food together." }, { icon:"🔭", t:"Look ahead", d:"**Reading the stars** to plan: clear, bright stars were a sign of a good season; hazy stars, a cold winter." } ],
        notes:[["SAY","Facts from Te Ara (Matariki)."],["TIKANGA","Be gentle with ‘remember’: some students may have lost someone this year."],["ASK","“Which of these do Christians do too?” (Remember loved ones; give thanks for the harvest; plan ahead with God.)"]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"In the south", title:"*Puaka*",
        bullets:["**Puaka** is the Kāi Tahu name for **Rigel**, a bright **blue-white** star in Orion (called **Puanga** in the north).","Matariki can be **harder to see clearly** from the south, so many southern iwi, **including Kāi Tahu**, look to **Puaka** to mark the new year.","**In Hakatere:** ask Te Rūnanga o Arowhenua how they mark Puaka and Matariki (teacher note)."],
        visual:{ artefact:"starchart" },
        notes:[["SAY","Facts from Te Ara (Matariki) and the Otago Daily Times (‘Puaka the real star of southern skies’, quoting Kāi Tahu astronomer Victoria Campbell)."],["TIKANGA","Replace the ‘In Hakatere’ line with Arowhenua's own guidance once you have it (D3)."]] },
      bigProject("Science", "Sky Watcher's Journal", "Keep a **3-week Moon and star observation diary**, or **build a star-finder**, with **a question you investigate**.", "your question (e.g. *How does the Moon's shape change in 3 weeks?* *When does Puaka rise?*)"),
      { type:"paths", phase:"paths", fs:null, minutes:18,
        notes:[["SAY","“Choose your path. Be respectful: these stars mean a lot to people.”"],["CLICK","Start the 18-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Job 38:31, Amos 5:8 and Psalm 147:4."],["NOTE","Follow §4.5: teach Matariki traditions respectfully as what they mean to Māori. Ask what we share, and what Christians believe about the Creator who made the stars. Never mock or ‘debunk’."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 9."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess. Remind: look east before dawn with whānau."],["CLICK","C = wheat sheaves."]] }
    ]
  };

  /* ======================= THURSDAY · TECHNOLOGY ======================= */
  const thu = {
    id:"w06-thu", week:6, day:"thu", subject:"technology", duration:50,
    title:"Scratch 1: Algorithms & Sequence (Drive the Tractor)", guide:"liv",
    codes:["DT-CT","DT-DD"],
    coverage:"Digital Technologies — Computational Thinking, Progress Outcome 2: give, follow and debug simple algorithms; build a simple program using sequence. Works with or without devices (Block Sim and unplugged paths).",
    li:"We are learning to give, follow and debug simple algorithms, and to build a simple program.",
    sc:["I can write an algorithm as clear steps in order.","I can turn my algorithm into a sequence of blocks.","I can find and fix a bug."],
    vocab:[
      { w:"algorithm", def:"a set of clear, step-by-step instructions to do a task" },
      { w:"sequence", def:"steps done in a set order, one after another" },
      { w:"program", def:"an algorithm written so a computer can follow it" },
      { w:"block", def:"one instruction in a block-based language like Scratch" },
      { w:"bug", def:"a mistake in a program that stops it working as planned" },
      { w:"debug", def:"to find and fix the bugs in a program" },
      { w:"sprite", def:"a character or object that a program moves around the screen" }
    ],
    prep:{ min:10, items:["Devices with Scratch (scratch.mit.edu) if available, or use Block Sim on the board","Masking tape grid on the floor for Path A (5 × 5 squares)","Printed ‘buggy programs’ for Path C (or use Block Sim's Buggy program)"] },
    safety:["Unplugged path: walk, don't run; the ‘tractor’ keeps eyes open!"],
    tikanga:[],
    hononga:"**Clear instructions.** Every skilled job, from guiding a waka to mustering sheep, has been passed on with clear, ordered steps. Computers need instructions that are even clearer: they do exactly what we say, not what we mean.",
    paths:[
      { id:"A", name:"The Recorder", product:"Unplugged Algorithm", steps:["On the tape grid, one partner is the **tractor**, one is the **programmer**.","Write an **algorithm** using only: **move 1, turn left, turn right**.","Run it. Did the tractor reach the hay? **Debug** and try again."], flying:"Write the shortest algorithm that still avoids every fence." },
      { id:"B", name:"The Maker", product:"Scratch Build", steps:["In **Scratch** (or Block Sim), make a sprite **move** across the stage using **move** and **turn** blocks.","Start with **when ▶ clicked**.","Test it, then **change one step** and predict what will happen."], flying:"Add a ‘wait 1 second’ between moves so you can watch each step." },
      { id:"C", name:"The Bug Hunter", product:"Fix 3 Programs", steps:["Run each **buggy program**. Predict what it **should** do.","Find the **exact step** that goes wrong.","Fix it and **test again**. Write what the bug was."], flying:"Write your own buggy program for a partner to fix." }
    ],
    supportedShort:"block picture cards (move, turn left, turn right), a printed grid, a debugging checklist.",
    lens:{
      pillar:"manaaki", title:"Fitting and orderly",
      look:"Look again at the algorithm: every step in the right order, so the tractor gets there.",
      ref:"1 Corinthians 14:40",
      paraphrase:"Everything should be done in a fitting and orderly way.",
      talk:[
        { q:"Paul wrote this about church gatherings. Why might God care about things being done in an orderly way?", listen:"So everyone can take part; so it's not confusing; so people are cared for; God is a God of peace, not confusion." },
        { q:"When something goes wrong (a ‘bug’ in our day), how can we ‘debug’ it calmly?", listen:"Stop; find what went wrong; fix it; try again; say sorry; ask for help." }
      ],
      live:"Write the **algorithm for your morning** in 5 steps. Is anything out of order?"
    },
    clue:{ prompt:"A tractor needs ‘move 10 steps’ four times to cross the paddock. How many steps in total?", answer:40, explain:"4 × 10 = 40 steps. Trig Clue 4 is saved for Friday!" },
    next:"Friday — Tom is taking us to learn about some of the oldest art in our region. Not to copy it, but to understand it.",
    rubric:[
      { c:"Algorithms", code:"DT-CT",
        d:["Gives a few steps out of order.","“Go to the hay.”"],
        a:["Writes an algorithm as clear steps in order.","“Move 3, turn left, move 5, turn right, move 5.”"],
        f:["Writes the shortest working algorithm and explains it.","“I checked every square so it avoids the fences in the fewest steps.”"],
        i:["I can give some steps.","I can write an algorithm in clear, ordered steps.","I can write the shortest working algorithm."] },
      { c:"Programming", code:"DT-CT · DT-DD",
        d:["Drags a block with help.","One move block."],
        a:["Builds a working sequence of blocks.","When ▶ clicked → move → turn → move."],
        f:["Predicts and tests changes.","“If I swap these two blocks, it'll hit the fence.” (It does.)"],
        i:["I can drag a block.","I can build a working sequence.","I can predict and test changes."] },
      { c:"Debugging", code:"DT-CT",
        d:["Says it doesn't work.","“It's broken.”"],
        a:["Finds and fixes a bug.","“Step 9 turns too early. I added one more move.”"],
        f:["Explains a debugging strategy.","“I run it one step at a time and check where it goes wrong.”"],
        i:["I can tell when it doesn't work.","I can find and fix a bug.","I can explain how I debug."] }
    ],
    plan:{
      prior:"Students have built mechanisms (Weeks 1–5). This is the start of the Scratch half of the technology track (D6). Some students will have used Scratch or block coding before; many won't.",
      kc:["Thinking","Managing self","Participating & contributing"],
      sequence:[
        ["0–6","Field Note","Liv's message. Trig Check (Wednesday). LI/SC.","Recall; predict."],
        ["6–18","Survey","Algorithms; Scratch blocks; **Block Sim**: build, run, debug.","Write; run; fix."],
        ["18–20","Big Project launch","Technology Big Project: **Smart Farm**.","Choose; write goal."],
        ["20–38","Choose Your Path","Introduce A/B/C. Roam: “What step is next? Where did it go wrong?”","Unplugged / Scratch / bug hunt."],
        ["38–45","Through the Lens","1 Corinthians 14:40 — four moves.","Discuss; morning algorithm."],
        ["45–50","Trig Clue & Exit","Trig Clue 4 (answer 40); self-assessment; wheat sheaves.","Solve; self-assess."]
      ],
      diff:{
        supported:"Block picture cards; printed grid; debugging checklist.",
        esol:"Act out move and turn; arrows instead of words.",
        learning:"Unplugged movement path; partner coding; calm screen available.",
        flying:"Shortest algorithm; predicting changes; writing buggy programs."
      },
      assess:{
        lookFor:["Writes an ordered algorithm","Builds a working sequence","Finds and fixes a bug"],
        evidence:["Block Sim runs","Path products (photograph or screenshots)","Big Project goal","Exit self-assessment"]
      },
      inquiry:["Device access: who needs the unplugged path next week?","Who debugged step by step rather than starting over?","Big Project: plan device time for Smart Farm simulations."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"liv", meta:"Machinery shed · new tractor",
        msg:"The new tractor has a **self-steering** system. It can drive itself up and down the paddock, but only if someone gives it **exact instructions**: how far, which way, in what order. One wrong step and it's in the fence! Today you write the instructions. That's called an **algorithm**.",
        notes:[["SAY","Read the message. 🟡 Liv is fictional."],["ASK","“Who has followed instructions that went wrong because a step was missing?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"What is Matariki scientifically?", a:"A star cluster: the Pleiades, in Taurus." }, { q:"Why do many Kāi Tahu look to Puaka?", a:"Matariki is harder to see clearly from the south; Puaka (Rigel) is bright and easy to see." }, { q:"How do you find Puaka?", a:"Find Tautoru (Orion's belt); Puaka is the bright blue-white star near it." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Step by step", title:"What is an *algorithm*?",
        bullets:["An **algorithm** is a set of **clear steps, in order**, to do a task.","Computers do **exactly** what we say, not what we mean. So every step must be **precise**.","A mistake in the steps is a **bug**. Finding and fixing it is **debugging**."],
        visual:{ svg:blocksSVG },
        notes:[["CLICK","Quick demo: ask a student to be a ‘robot’. Give vague instructions (“Go to the door”) and then precise ones (“Stand up. Turn right. Take 4 steps…”)."],["ASK","“Which instructions worked better? Why?”"]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Block coding", title:"Meet *Scratch*",
        bullets:["**Scratch** is a free, **block-based** coding language from the **Lifelong Kindergarten Group** at the **MIT Media Lab**.","It's designed especially for **ages 8 to 16**.","You snap **blocks** together in order: a **sequence**. Start with **when ▶ clicked**."],
        visual:{ svg:blocksSVG },
        notes:[["SAY","Facts from Scratch (About Scratch)."],["NOTE","We use our own tractor sprite in Block Sim. Students can choose any sprite in Scratch."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Drive the tractor", title:"Block Sim", ix:"blocksim",
        notes:[["CLICK","Build a program together: students call out the next block. Press ▶ Run. Then try ‘🐞 Buggy program’."],["CLICK","→ steps: clear, run the buggy program, run a working one."],["ASK","With the buggy program: “Which step goes wrong? How do you know?”"]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"When it goes wrong", title:"How to *debug*", h:"470px",
        cards:[ { big:"1", t:"Predict", d:"Say what the program **should** do." }, { big:"2", t:"Run slowly", d:"Run it **one step at a time** and watch." }, { big:"3", t:"Find it", d:"Spot the **exact step** where it goes wrong." }, { big:"4", t:"Fix & test", d:"Change **one thing**, then **test again**." } ],
        notes:[["SAY","“Good programmers expect bugs. Debugging is part of the job, not a failure.”"]] },
      bigProject("Technology", "Smart Farm", "Build a **working mechanism model** of a farm machine **plus** a **Scratch simulation** of it, built to a **brief** and **tested**.", "your machine (pivot, hay hoist, gate, tractor…) and your stakeholder"),
      { type:"paths", phase:"paths", fs:null, minutes:18,
        notes:[["SAY","“Choose your path. Test, find the bug, fix, test again.”"],["CLICK","Start the 18-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read 1 Corinthians 14:40."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 4 × 10 = 40."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess. Devices away."],["CLICK","C = wheat sheaves."]] }
    ]
  };

  /* ======================= FRIDAY · ART ======================= */
  const fri = {
    id:"w06-fri", week:6, day:"fri", subject:"art", duration:50,
    title:"Ngāi Tahu Rock Art: Learning About, Not Copying", guide:"tom",
    codes:["VA-UC","VA-DI","VA-PK"],
    coverage:"Visual Arts (NZC 2007, Level 3): understanding the arts in context (Ngāi Tahu rock art as taonga); developing ideas (original place symbols); developing practical knowledge (earth pigments).",
    li:"We are learning about Ngāi Tahu rock art in its context, and making our own place symbols with earth pigments.",
    sc:["I can explain what rock art is, where it is found, and why it is taonga.","I can explain why we don't copy rock-art figures.","I can create original symbols for my own family and place."],
    vocab:[
      { w:"rock art", def:"drawings or paintings on rock, often in shelters or caves" },
      { w:"taonga", say:"TAH-ong-ah", def:"a treasure; something precious that belongs to a people" },
      { w:"kōkōwai", say:"KAW-kaw-wai", def:"red ochre: red earth used as a pigment" },
      { w:"pigment", def:"the colour in paint, often from earth, plants or soot" },
      { w:"limestone", def:"a soft, pale rock; many rock-art shelters are in limestone" },
      { w:"symbol", def:"a picture or mark that stands for an idea" },
      { w:"guardian", def:"someone who protects and cares for something" }
    ],
    prep:{ min:15, items:["Craft red ochre powder or red/brown paint, charcoal sticks (art charcoal), white chalk","A little cooking oil or PVA to mix pigment; brushes, sticks, rag","Rough paper or card (brown paper bags work well)","⚠️ Never use material taken from any rock-art site or shelter"] },
    safety:["Charcoal and ochre: aprons on, wash hands after; don't blow powder.","Oil: tiny amounts only."],
    tikanga:["Do **not** show, trace or copy rock-art figures, and don't use them as decoration (§17.4). Only use images Te Ana / Ngāi Tahu share publicly, with credit.","Students make **their own** symbols about **their own** families and places.","Share this lesson with your Māori lead and Te Rūnanga o Arowhenua before teaching (D3). The Arowhenua narrative notes weka oil was used as a pigment ingredient."],
    hononga:"**Taonga in our region.** Most Ngāi Tahu rock art is in South Canterbury and North Otago, close to us. It records tribal history, trails and food places, the same kinds of things we've learned about all term. **Te Ana Ngāi Tahu Māori Rock Art Centre** in Timaru cares for it on behalf of Ngāi Tahu, with Ngāi Tahu guides.",
    paths:[
      { id:"A", name:"The Recorder", product:"Context Report", steps:["Write a short report: **what rock art is**, **where** it is, **what it was made from**, and **what it records**.","Explain **why it is fragile**.","Explain **why we don't copy it**."], flying:"Explain the role of Te Ana and its Ngāi Tahu guides." },
      { id:"B", name:"The Maker", product:"Earth-Pigment Place Symbols", steps:["Design **3 original symbols** for **your family and your place** (home, river, mountain, a favourite food…).","Paint them with **ochre and charcoal** on rough paper.","Write a **key**: what each symbol means to you."], flying:"Arrange your symbols to tell a short story of your family. Keep it for the triptych!" },
      { id:"C", name:"The Storyteller", product:"Guide Talk", steps:["Plan a **1-minute talk** as a guide at a rock-art site.","Explain **why** visitors must **not touch** and **not copy**.","Explain **who cares for** the art and why."], flying:"Explain how caring for taonga is like caring for something precious of your own family." }
    ],
    supportedShort:"a symbol ideas sheet (home, river, mountain, star, family), a ‘respect rules’ card, sentence frames.",
    lens:{
      pillar:"aroha", title:"Honour one another",
      look:"Look again at the shelter: art that belongs to a people, protected so it can last.",
      ref:"Romans 12:10",
      paraphrase:"Love each other deeply. Honour one another above yourselves.",
      talk:[
        { q:"How does choosing **not** to copy someone's taonga honour them?", listen:"It shows respect; it's theirs; their stories belong to them; we don't take what isn't ours." },
        { q:"What precious things does your family have that you'd want others to respect?", listen:"Photos; heirlooms; stories; a Bible; a family name; a special place." }
      ],
      live:"Gallery walk: tell one classmate what **one of their symbols** means, after they've told you."
    },
    clue:{ prompt:"Friday's clue is the Survey Seal: combine this week's four Trig Clues.", answer:61, explain:"6 + 6 + 9 + 40 = 61 → bearing 061°. The same bearing as Sheet III!" },
    next:"Next week — Sheet VII · The Race: a water race across the plains… if we can find it.",
    rubric:[
      { c:"Context", code:"VA-UC",
        d:["Says rock art is old drawings.","“Old pictures on rocks.”"],
        a:["Explains what rock art is, where it is, and why it is taonga.","“It's art in limestone shelters in South Canterbury and North Otago, made with fat, gum and soot or kōkōwai. It records Ngāi Tahu history, so it's taonga.”"],
        f:["Explains how it is cared for and why.","“It's fragile, so Te Ana cares for it on behalf of Ngāi Tahu, with Ngāi Tahu guides.”"],
        i:["I know rock art is old art on rock.","I can explain what it is, where it is, and why it's taonga.","I can explain how it is cared for."] },
      { c:"Respect", code:"VA-UC",
        d:["Says don't touch.","“Don't touch it.”"],
        a:["Explains why we don't copy rock-art figures.","“The figures belong to Ngāi Tahu and their stories, so we learn about them and make our own.”"],
        f:["Links respect for taonga to their own life.","“It's like our family photos: they mean something to us, and others shouldn't just take them.”"],
        i:["I know not to touch.","I can explain why we don't copy.","I can link respect for taonga to my own life."] },
      { c:"Own symbols", code:"VA-DI · VA-PK",
        d:["Makes a mark with pigment.","A smudge."],
        a:["Creates original symbols for their family and place, with a key.","Three clear symbols in ochre and charcoal, with meanings."],
        f:["Arranges symbols to tell a story.","Symbols placed to show a journey from home to the river and mountains."],
        i:["I can make a mark with pigment.","I can create original symbols with a key.","I can arrange symbols to tell a story."] }
    ],
    plan:{
      prior:"Students have learned about ara tawhito and mahika kai (Weeks 2–3), Kemp's Deed (Week 4) and why we use Kāi Tahu sources. They have used line and pattern (Week 4).",
      kc:["Relating to others","Managing self"],
      sequence:[
        ["0–6","Field Note","Tom's message. Trig Check (Thursday). LI/SC.","Recall; predict."],
        ["6–16","Survey","What rock art is; **Rock Art Context** visit and respect check; why we don't copy; method demo.","Discuss; decide."],
        ["16–18","Big Project launch","Art Big Project: **My Place triptych**.","Choose; write goal."],
        ["18–40","Choose Your Path (22 min)","Introduce A/B/C. Roam: “What does your symbol mean? Is it your own?”","Report / pigment symbols / guide talk."],
        ["40–45","Through the Lens","Romans 12:10 — gallery reflection.","Gallery walk."],
        ["45–50","Survey Seal & Dealer","Survey Seal VI: 6 + 6 + 9 + 40 = 61 → 061°. The Dealer's Offer. Self-assess; wheat sheaves.","Add; dial; discuss."]
      ],
      diff:{
        supported:"Symbol ideas sheet; respect card; sentence frames.",
        esol:"Model making a symbol and saying what it means; picture glossary.",
        learning:"Larger brushes or fingers; fewer symbols; calm screen available.",
        flying:"Story arrangement; linking respect to their own taonga."
      },
      assess:{
        lookFor:["Explains rock art in context","Explains why we don't copy","Creates original symbols with a key"],
        evidence:["Respect check","Symbol sheets (photograph)","Big Project goal","Exit self-assessment"]
      },
      inquiry:["Were all symbols original? Gently redirect any that imitate rock-art figures.","Record your Māori lead's feedback on this lesson.","Big Project: triptych folders now hold Land and River pieces; plan the Sky panel."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"tom", meta:"Ōpihi Valley lookout · grey morning",
        msg:"Not far south of us, in **limestone shelters**, there is art that is **hundreds of years old**, painted by the ancestors of Ngāi Tahu. I'm not going to show you copies of it today, and you won't draw it. That's on purpose. Today we learn **about** it, **why it matters**, and **who looks after it**. Then we make **our own** symbols.",
        notes:[["SAY","Read the message. 🟡 Tom is fictional."],["TIKANGA","Explain the plan clearly: we're not copying rock art, and here's why."]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"What is an algorithm?", a:"Clear steps, in order, to do a task." }, { q:"What is debugging?", a:"Finding and fixing mistakes (bugs) in a program." }, { q:"What block starts a Scratch program?", a:"When ▶ clicked." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"content", phase:"excavate", fs:"real", paper:true, kicker:"Taonga in our region", title:"Ngāi Tahu *rock art*",
        bullets:["Ngāi Tahu rock art is found mostly in **limestone shelters** in **South Canterbury and North Otago**.","Paint was made from **animal or bird fat** and **plant gum**, mixed with **soot** or **kōkōwai** (red ochre).","It records **tribal history**, **ara tawhito** (trails) and **mahinga kai** (food places)."],
        visual:{ artefact:"stones" },
        notes:[["SAY","Facts from Tohu Whenua (Te Ana Ngāi Tahu Māori Rock Art Centre) and the Arowhenua narrative (weka oil)."],["ASK","“Why do you think people painted trails and food places?”"]] },
      { type:"interactive", phase:"excavate", fs:"real", paper:true, kicker:"A visit, without copying", title:"Rock Art Context", ix:"rockart",
        notes:[["CLICK","Press → through the five stops, then do the Respect check together (students vote with thumbs)."],["TIKANGA","The shelter picture deliberately has no rock-art figures."],["ASK","At ‘Who cares for it’: “Why is it important that the guides are Ngāi Tahu?”"]] },
      { type:"content", phase:"excavate", fs:null, paper:true, kicker:"Our rule", title:"Learn about it, *don't copy* it",
        bullets:["Rock art is **taonga**: it belongs to **Ngāi Tahu** and tells **their** stories.","Copying the figures, or using them as **decoration**, takes something that isn't ours.","Instead we make **our own symbols** about **our own** families and places, using **earth pigments** like ochre and charcoal (from the art cupboard, **never** from a site)."],
        visual:{ artefact:"palette" },
        notes:[["SAY","“This is how we show respect: we learn, we listen, and we make our own.”"],["CLICK","Demo: mix a little ochre with oil; paint one simple symbol of your own (e.g. your house) and say what it means."]] },
      bigProject("Art", "My Place Triptych", "Three panels, **Land, River and Sky**, using techniques from the term (sketching, flat colour, layers, line and pattern, wet-on-wet, printmaking), plus an **artist statement**.", "which pieces from your folder to develop, and what each panel will say about your place"),
      { type:"paths", phase:"paths", fs:null, minutes:22,
        notes:[["SAY","“Choose your path. Every symbol must be your own.”"],["CLICK","Start the 22-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move. 5-minute gallery reflection."],["SAY","Read Romans 12:10."]] },
      { type:"folioseal", phase:"decode", fs:"story",
        notes:[["SAY","“Four clues. Add them to get the bearing.”"],["CLICK","Tap each ‘?’ tile. 6 + 6 + 9 + 40 = 61. Dial 061° and press ‘Fix the bearing’."],["ASK","“061°: we've seen that bearing before! Sheet III. Why would the surveyor come back to the same bearing?” (Maybe the town lies along the same line as the old trail and Single Tree.)"]] },
      { type:"intercept", phase:"decode", fs:"story",
        msg:"Restoration team. A town on a treeless plain, swamps drained, rivers bridged. Progress always wins. Why worry about what was there before? — D.",
        ask:"Does progress always win? What can progress cost, and who pays?",
        notes:[["SAY","Read it in the Dealer's smooth voice."],["ASK","Link to the week: drained swamps (mahika kai lost, Week 2), the railway that later closed, rock art that's fragile."],["LISTEN","Progress brings good things (jobs, bridges) and costs (lost wetlands, lost stories); we can choose to protect things; the people who were there first matter."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess. Celebrate Sheet VI! Check all Big Project goals are written."],["CLICK","C = wheat sheaves. Lay pigment work flat to dry."]] }
    ]
  };

  BM.WEEKS[6] = {
    n:6,
    story:"Sheet VI shows a grid of streets on a treeless plain, and a ferry on the river. This week historians watch Ashburton grow from a river crossing; geographers climb above the bushline; astronomers find Matariki and Puaka in the winter dawn; coders drive a tractor with algorithms; and artists learn about Ngāi Tahu rock art and make their own place symbols. Everyone chooses a Big Project. Friday's bearing is one we've seen before, and the Dealer says progress always wins.",
    hononga:"The town on Kāi Tahu trails, and Hakatere/Ashburton side by side (Mon) · kaitiakitanga of the high country (Tue) · Matariki and Puaka for Kāi Tahu (Wed) · clear instructions passed on (Thu) · Ngāi Tahu rock art as taonga: learning about, not copying (Fri). Check all local framing with your Māori lead and Te Rūnanga o Arowhenua (D3), especially Wednesday and Friday.",
    seal:{
      answer:61,
      instruction:"Add the four **Trig Clues** from Monday to Thursday. The total is a **bearing**. Dial it on the theodolite to crack the wax seal.",
      reveal:"🟡 **Sheet VI restored:** a **grid of streets** ruled on a treeless plain, a **ferry** on the river, and a pencil note: *treeless — plant shelter!* The bearing is **061° again**, the same as Sheet III. **The surveyor came back to the same bearing. Why?** Next week: *The Race*.",
      art:() => { const v = BM.art.sheetArt(6); v.setAttribute("style", "width:100%;height:100%"); return v; }
    },
    lessons:[mon, tue, wed, thu, fri]
  };
})(window.BM);
