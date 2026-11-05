/* ==========================================================
   WEEK 4 — FOLIO IV · KEEPERS OF TIME
   ========================================================== */
(function(FC){
  "use strict";

  /* ======================= MONDAY · HISTORY ======================= */
  const mon = {
    id:"w04-mon", week:4, day:"mon", subject:"history", duration:50,
    title:"Keepers of Time: Calendars, Stars & the 2012 Myth", guide:"itzel",
    codes:["SS-H","SS-P","MA","RE"],
    coverage:"Y5 History (2027 Social Sciences): an ancient civilisation's knowledge and beliefs (calendars, astronomy); evaluating claims against evidence. Y5 Science link: Earth, Moon, Sun & the maramataka. Maths: cycles and multiples.",
    li:"We are learning how the Maya measured time, why it mattered, and how to test a claim with evidence.",
    sc:["I can explain the 260-day Tzolk'in and the 365-day Haab'.","I can explain how they combine into a 52-year Calendar Round.","I can use evidence to judge the claim that the Maya predicted the end of the world in 2012."],
    vocab:[
      { w:"Tzolk'in", say:"tsol-KEEN", def:"the 260-day calendar: 13 numbers × 20 day-names" },
      { w:"Haab'", say:"hahb", def:"the 365-day solar calendar: 18 months of 20 days + 5 extra days" },
      { w:"Wayeb'", say:"wah-YEB", def:"the 5 unlucky extra days at the end of the Haab' year" },
      { w:"Calendar Round", def:"52 years — the time until both calendars line up again" },
      { w:"Long Count", def:"a day-count from a start date in 3114 BCE (b'ak'tun.k'atun.tun.winal.k'in)" },
      { w:"cycle", def:"something that repeats again and again" },
      { w:"myth", def:"a popular story or belief that isn't true" },
      { w:"evidence", def:"facts or information that show whether something is true" }
    ],
    prep:{ min:2, items:["Mini-whiteboards","Expedition Journals"] },
    safety:[],
    hononga:"The **maramataka** is the Māori lunar calendar. Each night of the moon's cycle has a name, and the maramataka guides when to plant, fish and rest. Since 2022 Aotearoa celebrates **Matariki** as a public holiday — the Māori New Year, timed by the stars and moon. Like the Maya, Māori watched the sky closely to live well on the land.",
    paths:[
      { id:"A", name:"The Scribe", product:"Myth-Buster Article", steps:["Headline: “Did the Maya predict the end?”","Explain the claim; give 3 pieces of evidence.","Finish with your verdict: busted or not?"], flying:"Explain why myths like this spread so fast — and how to check one." },
      { id:"B", name:"The Builder", product:"Today in Maya Poster", steps:["Copy today's Tzolk'in, Haab' and Long Count.","Draw the numbers as Maya numerals.","Label what each calendar measures."], flying:"Work out the Tzolk'in date for your next birthday by counting on from today." },
      { id:"C", name:"The Messenger", product:"Time Debate", steps:["Debate: were the Maya better at time than us?","Pairs: one argues YES, one NO — 2 facts each.","Agree on one thing both calendars do well."], flying:"Compare the Maya calendars with the maramataka." }
    ],
    supportedShort:"a fill-in Tzolk'in/Haab' chart; evidence cards to sort; debate sentence starters.",
    lens:{
      pillar:"mohio", title:"Numbering our days",
      look:"Look at the Maya: brilliant time-keepers who counted days for thousands of years. And look at the 2012 myth: people frightened by a date they didn't understand.",
      ref:"Psalm 90:12; Matthew 24:36",
      paraphrase:"Teach us to number our days, that we may gain a heart of wisdom… But about that day or hour no one knows, not even the angels in heaven, nor the Son, but only the Father.",
      talk:[
        { q:"Why do you think people get scared by ‘end of the world’ claims? What does Jesus say instead?", listen:"Fear spreads quickly; people want certainty. Jesus says only the Father knows — so we don't need to fear date-setters; we can trust God and live well today." },
        { q:"What does it mean to ‘number our days’ wisely?", listen:"Our time is a gift; use it well — love people, learn, serve, not waste days; live with purpose (Mōhio: our place in God's story)." }
      ],
      live:"Write one way you'll use **tomorrow** well — a ‘wise day’ goal."
    },
    clue:{ prompt:"How many days are there in the Wayeb' (the extra days at the end of the Haab' year)?", maya:null, answer:5, explain:"18 × 20 = 360, + 5 Wayeb' days = 365. The answer is 5 — one bar. Clue saved!" },
    next:"Tuesday — into the rainforest: the Petén and the Amazon vs our own forests.",
    rubric:[
      { c:"Maya calendars", code:"SS-H · MA",
        d:["Says the Maya had calendars.","“They had a calendar with days.”"],
        a:["Explains the Tzolk'in and Haab' with numbers.","“The Tzolk'in is 13 numbers × 20 day-names = 260 days. The Haab' is 18 × 20 + 5 = 365 days.”"],
        f:["Explains the Calendar Round and the Long Count.","“The two calendars only line up again every 52 years. The Long Count counts every day from 3114 BCE, like an odometer.”"],
        i:["I can say the Maya had calendars.","I can explain the Tzolk'in and Haab' with numbers.","I can explain the Calendar Round and the Long Count."] },
      { c:"Why time mattered", code:"SS-H",
        d:["Gives one use.","“To know the date.”"],
        a:["Explains how calendars guided farming, ceremonies and recording history.","“They used the Haab' for seasons and planting, and the Long Count to record when kings were born and crowned.”"],
        f:["Links calendars to astronomy and evidence.","“The Dresden Codex has Venus tables — they predicted where Venus would be years ahead. That shows careful observation over centuries.”"],
        i:["I can give one reason.","I can explain how calendars were used in daily life.","I can link calendars to astronomy and use evidence."] },
      { c:"Testing a claim", code:"SS-P",
        d:["Gives an opinion.","“I don't think the world ended.”"],
        a:["Uses 2–3 pieces of evidence to bust the 2012 myth.","“13.0.0.0.0 was just the end of a cycle, and an inscription at Palenque mentions the year 4772.”"],
        f:["Explains how to check claims and why myths spread.","“Check what the original sources say — the doom idea came from modern books, not Maya inscriptions. Scary stories spread faster than true ones.”"],
        i:["I can give my opinion.","I can use evidence to bust the myth.","I can explain how to check any claim."] }
    ],
    plan:{
      prior:"Week 3: Maya numbers (dots, bars, shells; base 20); decipherment. Students know days, months and years.",
      kc:["Thinking","Using language, symbols & texts","Relating to others"],
      sequence:[
        ["0–6","Field Transmission","Dr Canul: a date hidden in Folio IV; Glyph Check; LI/SC.","Recall; predict."],
        ["6–20","Excavate","Calendar Round gears (today's Maya date, +13, +20, +260, +52 yrs, 2012); three calendars; sky-watchers & the Dresden Codex; Hononga (maramataka); Myth-Buster board.","Predict, count, evaluate evidence."],
        ["20–38","Choose Your Path","Paths; roam with the rubric.","Article / poster / debate."],
        ["38–45","Through the Lens","Psalm 90:12; Matthew 24:36.","Discuss; wise-day goal."],
        ["45–50","Decode & Exit","Clue (5 Wayeb' days).","Solve; self-assess."]
      ],
      diff:{
        supported:"Calendar chart with blanks; evidence cards pre-sorted; pair work.",
        esol:"Visual gears; key vocabulary cards; numbers are universal.",
        learning:"Physical wheels (Friday preview); one calendar at a time.",
        flying:"Calculate future Tzolk'in dates; compare with the maramataka and the Gregorian calendar."
      },
      assess:{
        lookFor:["Correct numbers for Tzolk'in/Haab'","Evidence-based verdict on 2012","Explains purpose of calendars"],
        evidence:["Path products","Myth-board discussion","Exit self-assessment"]
      },
      inquiry:["Did students use evidence, not just opinion, in the myth-bust?","Were any students anxious about ‘end of the world’ ideas? Follow up gently.","Link to Friday's wheel build — who understood the 13 × 20 mesh?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"itzel", meta:"Folio IV · a hidden date",
        msg:"Team — Folio IV is covered in **dates**. Rows of numbers beside day-signs and a giant column of numerals. The Maya were obsessed with **time**. To read this folio we need to understand not one, not two, but **three** Maya calendars. Get your counting brains ready!",
        notes:[["SAY","Read the message."],["ASK","“Why might a whole civilisation care so much about time?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:"real", title:"Remember Week 3?", qs:[
          { q:"Write 20 in Maya numerals.", a:"One dot in the 20s level, a shell (zero) in the 1s level." },
          { q:"What formed the ring of cenotes?", a:"The buried rim of the Chicxulub crater cracked the limestone." },
          { q:"What do all switches have inside?", a:"Two contacts that touch (closed) or separate (open)." }],
        notes:[["SAY","Whiteboards; show on 3."],["CLICK","→ flips."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and SC."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Two gears, one calendar", title:"The Calendar Round", ix:"calendarround",
        notes:[["SAY","“The Tzolk'in has 13 numbers and 20 day-names. Every day BOTH gears turn one step.”"],["CLICK","Press Today: read today's Maya date aloud together. Then +1 day a few times."],["ASK","Before +13: “After 13 days, what will the number be?” Before +20: “What about the day-name?”"],["CLICK","+260 days → same Tzolk'in date. +52 years → both calendars line up: the Calendar Round."],["DEEPER","“Why 260? 13 × 20. Why does it take 52 years for both to match?” (They only line up after 18,980 days = 73 Tzolk'ins = 52 Haab' years.)"],["NOTE","Dates use the standard GMT correlation that most scholars use."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Three ways to count time", title:"The Maya calendars", h:"520px", cards:[
          { big:"260", color:"#B3262E", t:"Tzolk'in", d:"**13 numbers × 20 day-names.** Used for ceremonies and naming. Maya day-keepers in Guatemala **still use it today**." },
          { big:"365", color:"#1F7A5A", t:"Haab'", d:"**18 months × 20 days + 5** Wayeb' days. Followed the sun and seasons — for farming." },
          { big:"52", color:"#D9A23A", t:"Calendar Round", d:"Tzolk'in + Haab' together repeat only every **52 years** — like a ‘Maya century’." },
          { big:"∞", color:"#2E9FB0", t:"Long Count", d:"Counts every day from **11 August 3114 BCE**. Used on stelae to record history." }],
        notes:[["SAY","Walk through each card."],["ASK","“Which of these is most like our calendar?” (Haab' — 365 days.)"],["PACE","Aim for minute 13."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Sky-watchers", title:"Reading the sky", visual:{ artefact:"codexpage" },
        bullets:["The **Dresden Codex** — one of only four Maya books to survive — has tables that track **Venus** for over 100 years.","Venus appears in the sky in a cycle of about **584 days**. The Maya measured it to within a few hours.","Buildings like **El Caracol** at Chichén Itzá may have been used to watch Venus and the sun."],
        notes:[["SAY","“No telescopes — just eyes, patience and careful records over hundreds of years.”"],["ASK","“How could you measure the sky without any instruments?”"],["NOTE","Image: artistic reconstruction of a codex page."]] },
      { type:"hononga", phase:"excavate", fs:"real", title:"The maramataka — Aotearoa's moon calendar",
        body:"The **maramataka** names each night of the moon's cycle. It guides the best times to **plant, fish, gather and rest**.\n\nMatariki — the Māori New Year — is set by the **stars and moon**, and has been a public holiday since **2022**. Like the Maya, Māori observed the sky to live well with the land.",
        notes:[["ASK","“What's similar about the maramataka and the Maya calendars? What's different?”"],["NOTE","Check local maramataka knowledge with your Māori lead / rūnanga."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Think like a historian", title:"Myth-buster: 21 December 2012", ix:"mythboard",
        notes:[["SAY","“In 2012 some people panicked. Films and websites said the Maya predicted the world would END on 21 December 2012. Let's test that claim.”"],["CLICK","Tap each evidence card. Read it aloud; ask “Does this support or bust the claim?”"],["LISTEN","13.0.0.0.0 is just a cycle ending; dates after 2012 exist; only one mention with no doom; the count continues; Maya people rejected the myth; scientists checked."],["PACE","Aim for minute 20."]] },
      { type:"paths", phase:"paths", fs:null, notes:[["SAY","Explain paths."],["CLICK","Start the timer. Path B: go back to the Calendar Round slide (←) to read today's date."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","→ reveals each move."],["SAY","Read Psalm 90:12 and Matthew 24:36."],["ASK","Use both questions."],["NOTE","Some children worry about ‘end of the world’ stories. Keep the tone calm: Jesus tells us not to fear and not to trust date-setters."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["ASK","“How many Wayeb' days?” (5)"],["CLICK","Build one bar → Check."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = cacao beans."]] }
    ]
  };

  /* ======================= TUESDAY · GEOGRAPHY ======================= */
  const tue = {
    id:"w04-tue", week:4, day:"tue", subject:"geography", duration:50,
    title:"Rainforest Biomes: Petén & Amazon vs Aotearoa", guide:"sofia",
    codes:["SS-G","SS-P","SC-ES"],
    coverage:"Y5 Geography (2027 Social Sciences): temperate and tropical rainforest biomes, with a New Zealand comparison; interpreting climate graphs; describing vertical structure (layers).",
    li:"We are learning to compare tropical and temperate rainforests.",
    sc:["I can describe the four layers of a rainforest.","I can use climate graphs to explain how tropical and temperate rainforests differ.","I can compare a Latin American rainforest with a New Zealand rainforest."],
    vocab:[
      { w:"biome", say:"BY-ohm", def:"a large area with a similar climate, plants and animals" },
      { w:"tropical", def:"near the equator — hot all year" },
      { w:"temperate", def:"between the tropics and the poles — mild, with seasons" },
      { w:"canopy", def:"the thick ‘roof’ of leaves high in the forest" },
      { w:"emergent", def:"the tallest trees that stick up above the canopy" },
      { w:"understorey", def:"the dim layer of small trees and shrubs under the canopy" },
      { w:"climate graph", def:"a graph showing a place's average rainfall (bars) and temperature (line) each month" }
    ],
    prep:{ min:2, items:["Expedition Journals","Coloured paper and glue (Path B dioramas)"] },
    safety:[],
    hononga:"In 2014, **Te Urewera** — a great forest in the North Island — became the first place in the world recognised in law as a **legal person**, reflecting Tūhoe's relationship with the forest. To Māori, Tāne Mahuta is the guardian of forests, and many see the forest as **kin**, not just a resource. Ask: how does the way we see a forest change how we treat it?",
    paths:[
      { id:"A", name:"The Scribe", product:"Venn Comparison", steps:["Draw a Venn diagram: Amazon/Petén vs NZ rainforest.","Add at least 4 facts in each part (climate, layers, plants, animals).","Write 2 sentences: the biggest similarity and difference."], flying:"Use the climate graphs to explain WHY they're different (latitude!)." },
      { id:"B", name:"The Builder", product:"Cut-Paper Diorama", steps:["Fold paper into 4 layers.","Glue plants and animals into the right layers.","Label the light at each layer."], flying:"Make it double-sided: tropical on one side, temperate on the other." },
      { id:"C", name:"The Messenger", product:"Documentary Voice-over", steps:["Script 60 s: climb from floor to emergent.","Describe light, heat and animals at each layer.","Use at least 4 vocab words."], flying:"Add a comparison: “Meanwhile, in a forest in Fiordland…”" }
    ],
    supportedShort:"Venn template with fact cards; layer labels to glue; sentence starters.",
    lens:{
      pillar:"aroha", title:"“Very good”",
      look:"Look at the rainforests — layer upon layer of life, from harpy eagles to kiwi and wētā. Rainforests hold over half of the world's land plant and animal species.",
      ref:"Genesis 1:11–12, 31",
      paraphrase:"Then God said, “Let the land produce vegetation: seed-bearing plants and trees on the land that bear fruit with seed in it, according to their various kinds.” And it was so… God saw all that he had made, and it was very good.",
      talk:[
        { q:"God called creation ‘very good’. What in the rainforest makes you think about how creative God is?", listen:"The variety of life; the way layers fit together; animals adapted to each layer; beauty and design." },
        { q:"If creation is a gift, how should we treat rainforests — here and in South America?", listen:"Care for them, not waste or destroy; respect people who live there; protect native bush (Aroha — World)." }
      ],
      live:"Name one thing you could do to care for **native bush** near you (a planting day, staying on tracks, cleaning shoes to stop kauri dieback)."
    },
    clue:{ prompt:"How many layers does a rainforest have?", answer:4, explain:"Forest floor, understorey, canopy, emergent → 4. Clue saved!" },
    next:"Wednesday — conductors and insulators: the gift of rubber.",
    rubric:[
      { c:"Rainforest layers", code:"SS-G",
        d:["Names one or two layers.","“There's the canopy.”"],
        a:["Describes all four layers with light and life.","“The forest floor gets only about 2% of the light, so it's dark — jaguars and leafcutter ants live there.”"],
        f:["Explains how living things are adapted to each layer.","“Understorey plants have huge leaves to catch the little light that gets through.”"],
        i:["I can name some layers.","I can describe all four layers.","I can explain adaptations in each layer."] },
      { c:"Climate graphs", code:"SS-P · SS-G",
        d:["Reads one value with help.","“It rains a lot in March.”"],
        a:["Describes the pattern of rain and temperature for both places.","“Manaus is hot all year; Hokitika is cooler with seasons, but both get lots of rain.”"],
        f:["Explains the pattern using location (latitude).","“Manaus is near the equator so it gets strong sun all year; Hokitika is far south so it has winters.”"],
        i:["I can read the graph with help.","I can describe the patterns for both places.","I can explain the patterns using where the places are."] },
      { c:"Comparing rainforests", code:"SS-G · SS-P",
        d:["Lists features of one forest.","“The Amazon has monkeys.”"],
        a:["Compares similarities and differences with examples.","“Both have four layers and lots of rain, but NZ forests have tree ferns and kiwi, not monkeys and jaguars.”"],
        f:["Draws a conclusion and links to care or people.","“Both are taonga that store carbon and protect species — both need protecting.”"],
        i:["I can describe one forest.","I can compare both with examples.","I can draw a conclusion about why both matter."] }
    ],
    plan:{
      prior:"Week 3: cenotes and landscapes. Students may know NZ native bush from school trips.",
      kc:["Thinking","Using language, symbols & texts","Participating & contributing"],
      sequence:[
        ["0–6","Field Transmission","Sofía flies over the Amazon; Glyph Check; LI/SC.","Recall; describe."],
        ["6–20","Excavate","Tropical vs temperate cards; Rainforest Layer Explorer (both modes); climate graphs (Manaus vs Hokitika); Hononga (Te Urewera).","Predict, read graphs, compare."],
        ["20–38","Choose Your Path","Paths; roam.","Venn / diorama / voice-over."],
        ["38–45","Through the Lens","Genesis 1.","Discuss; care action."],
        ["45–50","Decode & Exit","Clue (4 layers).","Solve; self-assess."]
      ],
      diff:{
        supported:"Venn with fact cards; layer labels; partner reading.",
        esol:"Visual layers; gesture heights; animal picture cards.",
        learning:"Hands-on diorama; one layer at a time.",
        flying:"Explain differences with latitude; research one endemic species."
      },
      assess:{
        lookFor:["Four layers with light/life","Correct reading of climate graphs","Clear comparison with examples"],
        evidence:["Path products","Graph discussion","Exit self-assessment"]
      },
      inquiry:["Did the Hokitika rainfall surprise students? How did they explain it?","Could students read both bars and line on the climate graph?","Next week links to deforestation — note students' ideas about protecting forests."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"sofia", meta:"Over the Amazon",
        msg:"Navigators, look down: green as far as you can see. This is the **Amazon** — the biggest tropical rainforest on Earth, about **20 times** the size of Aotearoa. The Maya city of Tikal sits in a rainforest too, the **Petén**. But here's my question: how is this jungle different from the rainforest on our own **West Coast**?",
        notes:[["SAY","Read the message."],["ASK","“What do you think a NZ rainforest and the Amazon have in common?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:"real", qs:[
          { q:"How many days are in the Tzolk'in?", a:"260 — 13 numbers × 20 day-names." },
          { q:"What was 21 December 2012 in the Long Count?", a:"13.0.0.0.0 — the end of a cycle, not the end of the world." },
          { q:"What is the Wayeb'?", a:"The 5 extra days at the end of the Haab' year." }],
        notes:[["SAY","Whiteboards; show on 3."],["CLICK","→ flips."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and SC."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Two kinds of rainforest", title:"Tropical vs temperate", h:"500px", cards:[
          { big:"Tropical", color:"#D9A23A", t:"Petén · Amazon", d:"Near the **equator**. Hot all year (about 25–28 °C), heavy rain, the most kinds of living things on Earth." },
          { big:"Temperate", color:"#2E9FB0", t:"West Coast · Fiordland", d:"Further from the equator. **Cool** with seasons, lots of rain, mosses, ferns and giant podocarps." },
          { big:"Both", color:"#1F7A5A", t:"Rainforests", d:"Lots of **rain**, tall trees, **layers** of life — and both are taonga that store carbon." }],
        notes:[["SAY","“A biome is a big area with a similar climate, plants and animals.”"],["ASK","“What does ‘tropical’ mean? Where are the tropics?”"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Climb the forest", title:"Rainforest layers", ix:"layers",
        notes:[["CLICK","Tap each layer from the top down (or bottom up for a climb!). Read the light % and animals."],["CLICK","Switch to Te Waipounamu and tap the layers again."],["ASK","“Why does the forest floor get only about 2% of the light?” (The canopy catches it.)"],["DEEPER","“How are understorey plants adapted to low light?” (Huge leaves, climbing.)"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Read the climate", title:"Manaus vs Hokitika", ix:"climate",
        notes:[["SAY","“Bars = rain. Line = temperature.”"],["CLICK","Start with Manaus. Then add Hokitika."],["ASK","“Which place is hotter? Which gets more rain?” (Surprise: Hokitika!)"],["DEEPER","“Why is Manaus hot all year?” (Near the equator — strong sun all year.)"],["PACE","Aim for minute 18."]] },
      { type:"hononga", phase:"excavate", fs:"real", title:"Te Urewera — a forest with its own identity",
        body:"In **2014** a law recognised **Te Urewera** as a **legal person** — the first place in the world treated this way. It reflects **Tūhoe**'s relationship with the forest as kin.\n\nIn te ao Māori, **Tāne Mahuta** is guardian of the forests and the birds. Our native forests are **taonga**.",
        notes:[["ASK","“How does seeing a forest as family change how you treat it?”"],["NOTE","Check framing with your Māori lead."]] },
      { type:"paths", phase:"paths", fs:null, notes:[["SAY","Explain paths."],["CLICK","Start the timer."]] },
      { type:"lens", phase:"lens", fs:null, notes:[["CLICK","→ reveals each move."],["SAY","Read Genesis 1:11–12 and 31."],["ASK","Use both questions."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["ASK","“How many layers?” (4)"],["CLICK","4 dots → Check."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = cacao beans."]] }
    ]
  };

  /* ======================= WEDNESDAY · SCIENCE ======================= */
  const wed = {
    id:"w04-wed", week:4, day:"wed", subject:"science", duration:50,
    title:"Conductors & Insulators: the Gift of Rubber", guide:"mateo",
    codes:["SC-MIE","SC-P","SS-H"],
    coverage:"Y6 Science (Matter, interactions & energy): metals conduct electricity; testing materials in a simple circuit. Science practices: fair testing, recording, explaining with evidence. Y6 rocks & minerals link (jade, obsidian).",
    li:"We are learning to test which materials let electricity flow.",
    sc:["I can carry out a fair test of materials in a circuit.","I can sort materials into conductors and insulators.","I can explain why wires are made of metal and coated in plastic or rubber."],
    vocab:[
      { w:"conductor", def:"a material that lets electricity flow through it (e.g. metals)" },
      { w:"insulator", def:"a material that does not let electricity flow (e.g. rubber, plastic, wood)" },
      { w:"fair test", def:"a test where you change only one thing and keep everything else the same" },
      { w:"variable", def:"something that can change in an experiment" },
      { w:"latex", say:"LAY-tex", def:"the milky sap of rubber trees" },
      { w:"predict", def:"say what you think will happen, before testing" }
    ],
    prep:{ min:5, items:["Tester per group: battery pack, bulb/LED in holder, 3 leads with crocodile clips","A tray of materials per group: copper wire, foil, a coin, paper clip, rubber band, plastic spoon, wooden pop stick, eraser, stone","Results tables in journals"] },
    safety:["Batteries only — never sockets.","If a wire gets warm, disconnect it (short circuit).","Don't test anything wet."],
    hononga:"**Pounamu** (greenstone) is a taonga to Māori, especially Ngāi Tahu. It is a type of **jade** — and like the Maya's jade, it is a stone that does **not** conduct electricity. Both peoples treasured this green stone above gold.",
    paths:[
      { id:"A", name:"The Scribe", product:"Fair-Test Report", steps:["Question: which materials conduct?","Write what you change, keep the same, measure.","Results table + conclusion with a reason."], flying:"Explain one way your test might not have been fair, and how to fix it." },
      { id:"B", name:"The Builder", product:"Real-Material Testing", steps:["Build the tester: battery → bulb → clips.","Predict, then test 8 materials. Record ✓/✗.","Sort into two groups and find the pattern."], flying:"Test a pencil's graphite (sharpen both ends). Surprise?" },
      { id:"C", name:"The Messenger", product:"Safety Advert", steps:["Poster or advert: why are cables coated?","Use the words conductor and insulator.","Include one safety rule for home."], flying:"Explain why we must never touch power lines — even with a stick if it's wet." }
    ],
    supportedShort:"pre-built tester; picture results table; materials labelled.",
    lens:{
      pillar:"mohio", title:"All things hold together",
      look:"Look at the results: every metal conducted, every time. Rubber never did. Scientists can rely on that.",
      ref:"Colossians 1:17",
      paraphrase:"He is before all things, and in him all things hold together.",
      talk:[
        { q:"Why can scientists trust that copper will conduct tomorrow, just like today?", listen:"Creation is ordered and reliable; the ‘rules’ of nature don't change; Christians see that order as coming from God, who holds all things together." },
        { q:"How is God's faithfulness like (and unlike) the reliable properties of materials?", listen:"God is dependable, never changes; but God is personal and loving, not just a rule — He keeps His promises." }
      ],
      live:"Thank God for one thing in creation you can **rely on** every day."
    },
    clue:{ prompt:"Out of the 8 materials in the on-screen tester, how many conducted?", answer:3, explain:"Copper, gold and iron — all metals → 3. Clue saved!" },
    next:"Thursday — meet the microcontroller: give the temple a heartbeat!",
    rubric:[
      { c:"Fair testing", code:"SC-P",
        d:["Tests materials with help.","Tests a few things without recording."],
        a:["Keeps the circuit the same, changes only the material, records results.","“We used the same battery and bulb every time and only changed the material.”"],
        f:["Explains why it's fair and suggests improvements.","“A loose clip could make a conductor look like an insulator — we should test each one twice.”"],
        i:["I tested with help.","I did a fair test and recorded results.","I can explain fairness and improve the test."] },
      { c:"Conductors & insulators", code:"SC-MIE",
        d:["Sorts some materials.","“The spoon didn't work.”"],
        a:["Sorts correctly and identifies the pattern.","“All the metals conducted; plastic, wood, rubber and stone didn't.”"],
        f:["Explains why metals conduct.","“Metals have electrons that can move freely, so current can flow through them.”"],
        i:["I can sort some materials.","I can sort correctly and find the pattern.","I can explain why metals conduct."] },
      { c:"Using the science", code:"SC-MIE · SS-H",
        d:["Says cables are covered.","“Wires have plastic on them.”"],
        a:["Explains why wires are metal inside and insulated outside.","“Copper carries the current; the rubber or plastic coating stops it reaching us.”"],
        f:["Connects to the history of rubber and real safety.","“Mesoamericans made rubber 3,000 years ago; today rubber and plastic keep us safe from electric shocks.”"],
        i:["I know cables are covered.","I can explain the metal inside and the coating outside.","I can link rubber's history to safety today."] }
    ],
    plan:{
      prior:"Weeks 1–3: closed circuits, switches, circuit symbols. Metals conduct (seen in paper circuits).",
      kc:["Thinking","Managing self","Participating & contributing"],
      sequence:[
        ["0–6","Field Transmission","Mateo: damp camp, frayed lamp wires; Glyph Check; LI/SC; safety.","Recall; repeat safety."],
        ["6–20","Excavate","Predict (turn & talk); Conductor Tester (8 materials); conductors vs insulators; the gift of rubber; Hononga (pounamu).","Predict, test, explain."],
        ["20–38","Choose Your Path","Kits out (Path B).","Report / testing / advert."],
        ["38–45","Through the Lens","Colossians 1:17.","Discuss; thank God."],
        ["45–50","Decode & Exit","Clue (3); kits away.","Solve; self-assess."]
      ],
      diff:{
        supported:"Pre-built tester; picture table; partner roles.",
        esol:"Real objects named and shown; sorting is visual.",
        learning:"Fewer materials; tick/cross recording.",
        flying:"Graphite and salty water (teacher demo); explain electrons."
      },
      assess:{
        lookFor:["Fair-test language","Correct sorting and pattern","Explains insulated cables"],
        evidence:["Results tables","Path products","Exit self-assessment"]
      },
      inquiry:["Did any group get a ‘false insulator’ result from a loose clip? Great discussion point.","Who could explain fairness clearly?","Link to Thursday: microcontrollers use copper tracks on an insulating board."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"mateo", meta:"Rainy season camp",
        msg:"It's been raining for three days and our camp is **damp**. The codex crate needs a seal that keeps water out, and the lamp wires are fraying — I can see bare copper! Which materials let electricity **through**, and which ones **block** it? We need to test them properly.",
        notes:[["SAY","Read the message."],["ASK","“Why are bare wires dangerous?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:"real", qs:[
          { q:"Name the four rainforest layers.", a:"Forest floor, understorey, canopy, emergent." },
          { q:"What does a switch do in a circuit?", a:"Opens or closes the loop." },
          { q:"Draw the symbol for a cell.", a:"A long thin line (+) and a short thick line (−)." }],
        notes:[["SAY","Whiteboards; show on 3."],["CLICK","→ flips."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and SC."]] },
      { type:"safety", phase:"transmission", fs:"real", title:"Testing safely", items:[
          { icon:"🔋", t:"Batteries only", d:"Never test anything with mains power or sockets." },
          { icon:"🔥", t:"Warm = short", d:"If a wire or battery gets warm, disconnect it." },
          { icon:"💧", t:"Keep it dry", d:"Don't test wet things. Water + electricity = danger." }],
        notes:[["SAFETY","Read the rules."]] },
      { type:"discussion", phase:"excavate", fs:"real", kicker:"Predict first", q:"Copper, gold, an iron nail, rubber, jade, obsidian, a cacao bean, wood. Which will let electricity **flow**?", sub:"Scientists **predict** before they test. Is there a pattern in your predictions?", talk:45,
        notes:[["TALK","45 seconds. Pairs sort the 8 into ‘flow’ and ‘block’."],["ASK","Take votes for a few materials (especially jade and the cacao bean)."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Test it", title:"The conductor tester", ix:"conductor",
        notes:[["SAY","“We keep the battery and bulb the same and only change the material. That's a fair test.”"],["CLICK","Tap each material. Before each: “Prediction?” Then reveal."],["ASK","At the end: “What do all the conductors have in common?” (They're metals.)"],["NOTE","This tester gives the Glyph Clue answer (3)."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"The pattern", title:"Conductors & insulators", h:"480px", cards:[
          { big:"Metals", color:"#C46A3A", t:"Conductors", d:"Copper, gold, silver, iron, aluminium. Metals have **electrons that can move freely**, so current flows." },
          { big:"Others", color:"#2E9FB0", t:"Insulators", d:"Rubber, plastic, wood, glass, stone. Their electrons are **held tightly** — current can't flow." },
          { big:"Both", color:"#1F7A5A", t:"A cable", d:"A **conductor** inside (copper) carries the current; an **insulator** outside (plastic/rubber) keeps us safe." }],
        notes:[["SAY","“Inside a metal, tiny electrons can drift along — like marbles in a tube. In an insulator, they're stuck.”"],["DEEPER","Pencil graphite is a non-metal that conducts — a famous exception!"]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"A Mesoamerican invention", title:"The gift of rubber", visual:{ artefact:"ball" },
        bullets:["Over **3,000 years ago**, Mesoamericans made rubber by mixing **latex** from rubber trees with juice from a **morning-glory vine**.","They made bouncing **balls**, sandals, glue and waterproof seals — long before Europe had rubber.","Europeans were amazed: they had never seen a ball that **bounced**!","Today rubber and plastic **insulate** electric cables and keep us safe."],
        notes:[["SAY","“The word for the ballgame ball came from the same people who invented rubber.”"],["ASK","“What would Mateo use to seal the codex crate?” (Rubber — waterproof!)"],["PACE","Aim for minute 18."]] },
      { type:"hononga", phase:"excavate", fs:"real", title:"Pounamu — a green treasure",
        body:"**Pounamu** (greenstone) is a taonga to Māori, especially **Ngāi Tahu**, found mainly on the West Coast of Te Waipounamu.\n\nIt is a kind of **jade** — and like Maya jade, it's a stone that **insulates**. Both peoples valued green stone more than gold.",
        notes:[["ASK","“Why might a material be valuable even if it doesn't conduct?”"]] },
      { type:"paths", phase:"paths", fs:null, notes:[["SAY","Explain paths; kits out for Path B."],["CLICK","Start the timer."],["NOTE","Check clips are on metal; spare batteries ready."]] },
      { type:"lens", phase:"lens", fs:null, notes:[["CLICK","→ reveals each move."],["SAY","Read Colossians 1:17."],["ASK","Use both questions."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["ASK","“How many conducted?” (3)"],["CLICK","3 dots → Check."],["SAFETY","Batteries out before kits go away."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = cacao beans."]] }
    ]
  };

  /* ======================= THURSDAY · TECHNOLOGY ======================= */
  const thu = {
    id:"w04-thu", week:4, day:"thu", subject:"technology", duration:50,
    title:"Meet the Microcontroller: Heartbeat of the Temple", guide:"mateo",
    codes:["DT-CT","TE-TK","TE-NT"],
    coverage:"Digital Technologies — Computational Thinking (Progress Outcomes 1–2): algorithms as precise sequences; debugging. Technology (NZC 2007 L3): technological systems (input → process → output); how microcontrollers are used in everyday products.",
    li:"We are learning what a microcontroller is and how to write an algorithm to make it blink.",
    sc:["I can explain input → process → output for a microcontroller.","I can put code blocks in the right order to make an LED blink.","I can change a delay and predict what will happen."],
    vocab:[
      { w:"microcontroller", def:"a tiny computer on a chip that follows instructions (code)" },
      { w:"Arduino", say:"ar-DWEE-no", def:"a popular microcontroller board for learning and making" },
      { w:"algorithm", def:"a precise list of steps to solve a problem" },
      { w:"sequence", def:"steps done in a set order" },
      { w:"loop", def:"steps that repeat" },
      { w:"delay", def:"a wait, measured in milliseconds (ms) — 1000 ms = 1 second" },
      { w:"bug / debug", def:"a mistake in code / finding and fixing it" }
    ],
    prep:{ min:3, items:["Projector for the simulator","Optional: Arduino Uno + USB cable (the built-in LED on pin 13 blinks with this exact code)","Algorithm cards: paper and pens"] },
    safety:["If using a real board: USB power only; keep drinks away from laptops."],
    hononga:"Microcontrollers are helping protect native birds in Aotearoa: some **smart pest traps** use them to sense when a trap goes off and send an alert, so rangers don't have to walk to every trap. Technology serving **Predator Free 2050** and our taonga species.",
    paths:[
      { id:"A", name:"The Scribe", product:"Robot Algorithm", steps:["Write steps for a ‘human robot’ to draw a numeral.","One precise step per card; number them.","Test on a partner; fix unclear steps (debug!)."], flying:"Add a LOOP card (“repeat steps 2–4 three times”)." },
      { id:"B", name:"The Builder", product:"Code the Blink", steps:["Use the simulator (or an Arduino): make it blink.","Change the waits: a fast and a slow heartbeat.","Record: delay → blinks per second."], flying:"Make a ‘heartbeat’ pattern: two quick blinks, then a pause." },
      { id:"C", name:"The Messenger", product:"Debug Hunt", steps:["On the Debug slide, find why it won't blink.","Fix it; explain the bug in one sentence.","Write 2 more bugs for a partner to find."], flying:"Explain why 1 ms delays make the LED look always on." }
    ],
    supportedShort:"pre-written step cards to order; simulator with blocks; partner pairs.",
    lens:{
      pillar:"mohio", title:"Instructions without words",
      look:"Look at the microcontroller: it does exactly what its code says, over and over. And look at the sky the Maya studied: the sun rises and sets, the seasons turn, faithfully.",
      ref:"Psalm 19:1–4",
      paraphrase:"The heavens declare the glory of God; the skies proclaim the work of his hands. Day after day they pour forth speech; night after night they reveal knowledge. They have no speech, they use no words… yet their voice goes out into all the earth.",
      talk:[
        { q:"The Psalm says the sky ‘speaks’ without words. What does creation tell us about God?", listen:"God is powerful, creative, faithful, orderly; the regular cycles show His care." },
        { q:"A microcontroller only follows code. How are people different from machines?", listen:"We can think, choose, love, create; God made us in His image; we're not just programmed." }
      ],
      live:"Look at the sky tonight. Thank God for one thing it ‘tells’ you."
    },
    clue:{ prompt:"If the LED is ON for 500 ms and OFF for 500 ms, how many blinks happen each second?", answer:1, explain:"500 ms + 500 ms = 1000 ms = 1 second → 1 blink per second. Clue saved!" },
    next:"Friday — make a turning calendar wheel and open Seal IV.",
    rubric:[
      { c:"Input → process → output", code:"TE-TK",
        d:["Names the board.","“It's an Arduino.”"],
        a:["Explains IPO with an example.","“A button is the input, the microcontroller runs the code (process), the LED is the output.”"],
        f:["Applies IPO to a real-world product.","“A smart trap: sensor (input) → microcontroller decides (process) → sends a message (output).”"],
        i:["I can name the board.","I can explain input → process → output.","I can explain a real product using IPO."] },
      { c:"Sequencing an algorithm", code:"DT-CT",
        d:["Orders steps with help.","Puts ON and OFF but forgets the waits."],
        a:["Orders ON → wait → OFF → wait inside a loop.","The LED blinks steadily every second."],
        f:["Creates a new pattern and explains each step.","A ‘heartbeat’: two quick blinks then a long pause, explained line by line."],
        i:["I can order steps with help.","I can make the LED blink with the right sequence.","I can design a new pattern and explain it."] },
      { c:"Predicting & debugging", code:"DT-CT",
        d:["Notices something is wrong.","“It's not blinking.”"],
        a:["Finds and fixes a bug; predicts the effect of a delay change.","“The second wait was missing, so the LED turned off for no time at all.”"],
        f:["Debugs methodically and explains the thinking.","“I stepped through one line at a time and watched when the LED changed.”"],
        i:["I can notice a problem.","I can find and fix a bug.","I can debug step by step and explain it."] }
    ],
    plan:{
      prior:"Weeks 1–3: circuits, LEDs, switches as inputs; algorithms in everyday life.",
      kc:["Thinking","Managing self","Using language, symbols & texts"],
      sequence:[
        ["0–6","Field Transmission","Mateo wants a blinking beacon; Glyph Check; LI/SC.","Recall."],
        ["6–20","Excavate","Input → process → output; human-robot challenge; Arduino simulator (Blink: Step, Run, change delays); Debug hunt.","Predict, instruct, debug."],
        ["20–38","Choose Your Path","Algorithm cards / code the blink / debug hunt.","Create, test, fix."],
        ["38–45","Through the Lens","Psalm 19:1–4.","Discuss."],
        ["45–50","Decode & Exit","Clue (1 blink/s).","Solve; self-assess."]
      ],
      diff:{
        supported:"Step cards to order; simulator with pre-made blocks.",
        esol:"Icons on blocks; demonstrate; code words are the same in every language.",
        learning:"Human-robot activity first (kinaesthetic); one change at a time.",
        flying:"Heartbeat patterns; read the C code and explain each line."
      },
      assess:{
        lookFor:["IPO explained with an example","Correct blink sequence","Bug found and explained"],
        evidence:["Algorithm cards","Simulator observations","Exit self-assessment"]
      },
      inquiry:["Did students grasp that code runs exactly as written (no ‘common sense’)?","Who is ready for 3-LED sequences (Week 5)?","If using real boards: note set-up issues for next time."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"mateo", meta:"Night watch",
        msg:"Last night the camp was pitch black and someone tripped over the codex crate! I want a **beacon** that blinks all night, like a **heartbeat** — on, off, on, off — so everyone knows where the temple entrance is. A switch can't do that by itself. We need a tiny **brain**: a **microcontroller**.",
        notes:[["SAY","Read the message."],["ASK","“How could a light blink by itself, all night?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:"real", qs:[
          { q:"Name two conductors and two insulators.", a:"Conductors: copper, iron (metals). Insulators: rubber, plastic, wood." },
          { q:"What does input → process → output mean?", a:"What triggers it → what happens inside → the result." },
          { q:"How many days in the Haab' year?", a:"365 (18 × 20 + 5)." }],
        notes:[["SAY","Whiteboards; show on 3."],["CLICK","→ flips."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and SC."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"A tiny computer", title:"What's a microcontroller?", h:"500px", cards:[
          { big:"IN", color:"#2E9FB0", t:"Input", d:"Sensors and buttons tell it what's happening: a press, light, heat, movement." },
          { big:"⚙", color:"#D9A23A", t:"Process", d:"The microcontroller follows its **code** — step by step, millions of times a second." },
          { big:"OUT", color:"#B3262E", t:"Output", d:"It controls things: **LEDs**, buzzers, motors, screens." }],
        notes:[["SAY","“Microcontrollers are hidden in microwaves, washing machines, toys, cars, traffic lights…”"],["ASK","“What's the input, process and output in a microwave?”"]] },
      { type:"discussion", phase:"excavate", fs:"real", kicker:"Human robot", q:"Tell me — your **robot** — exactly how to draw a Maya **13**. I will do **exactly** what you say, nothing more.", sub:"Computers have no common sense. An **algorithm** must be precise and in the right **order**.", talk:60,
        notes:[["SAY","Play the robot at the board. Follow instructions literally (e.g. “draw a bar” → draw it anywhere, any size)."],["LISTEN","Students realise they must be precise: where, how big, which order."],["NOTE","Keep it fun! 2–3 minutes max."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Your first program", title:"Heartbeat of the Temple", ix:"arduino",
        cfg:{ title:"Blink" },
        notes:[["SAY","“setup() runs once. loop() repeats forever. digitalWrite turns the LED on (HIGH) or off (LOW). delay waits — 1000 ms = 1 second.”"],["CLICK","Press ⏭ Step a few times — watch the highlighted line and the LED. Then ▶ Run."],["ASK","“What will happen if I make both waits 200 ms?” Predict, then change with − and Run."],["DEEPER","“What if I delete one wait?” (Leads into the debug hunt.)"],["NOTE","On a real Arduino Uno, pin 13 is the built-in ‘L’ LED — this exact code works with no wiring."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Find the bug", title:"Debug hunt", ix:"arduino",
        cfg:{ title:"Debug hunt", program:[{ op:"on", pin:13 }, { op:"wait", ms:1000 }, { op:"off", pin:13 }] },
        notes:[["CLICK","Press Run. ASK: “Is it blinking?” (It looks always ON!)"],["CLICK","Use ⏭ Step to slow it down. ASK: “How long is the LED off?” (No time at all — it goes straight back to ON.)"],["CLICK","Fix: press + Wait. Run again."],["LISTEN","The OFF step needs a wait after it, or the loop turns the LED back on instantly."],["PACE","Aim for minute 20."]] },
      { type:"hononga", phase:"excavate", fs:"real", title:"Smart traps for taonga species",
        body:"Some **smart pest traps** in Aotearoa use microcontrollers to sense when a trap goes off and send an **alert**, so rangers know which traps to check.\n\nIt's technology serving **Predator Free 2050** — protecting kiwi, kākā and other taonga.",
        notes:[["ASK","“What's the input, process and output of a smart trap?”"]] },
      { type:"paths", phase:"paths", fs:null, notes:[["SAY","Explain paths."],["CLICK","Start the timer. Leave the simulator slide available for Path B and C (←)."]] },
      { type:"lens", phase:"lens", fs:null, notes:[["CLICK","→ reveals each move."],["SAY","Read Psalm 19:1–4."],["ASK","Use both questions."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["ASK","“500 on + 500 off = how many blinks a second?” (1)"],["CLICK","1 dot → Check."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = cacao beans."]] }
    ]
  };

  /* ======================= FRIDAY · ART ======================= */
  const fri = {
    id:"w04-fri", week:4, day:"fri", subject:"art", duration:50,
    title:"Calendar Wheels: Rotating Card Design", guide:"rosa",
    codes:["VA-UC","VA-PK","VA-DI","MA"],
    coverage:"Visual Arts (NZC 2007, Level 3): understanding art in context (radial design in Mesoamerican calendars); practical knowledge (radial symmetry, construction with card and split pins); developing ideas. Maths link: angles, fractions of a circle, cycles.",
    li:"We are learning to design and build a rotating calendar wheel using radial design.",
    sc:["I can use radial design (a pattern that spreads from the centre).","I can construct a turning wheel with card and a split pin.","I can explain the calendar cycle my wheel shows."],
    vocab:[
      { w:"radial", def:"spreading out from a centre point, like spokes or sun rays" },
      { w:"radial symmetry", def:"a design that looks the same as you turn it around its centre" },
      { w:"segment", def:"one ‘slice’ of a circle" },
      { w:"split pin", def:"a metal fastener with two legs that lets card turn" },
      { w:"cycle", def:"something that repeats" }
    ],
    prep:{ min:5, items:["Card circles: a large (about 20 cm) and a small (about 13 cm) per student — trace bowls or plates","Split pins (one each)","Rulers, pencils, coloured pencils/felts","Optional: protractors (for 18° segments)"] },
    safety:["Split pins are sharp: push through card onto a soft surface (eraser or Blu Tack), not your hand.","Scissors: walk carefully."],
    hononga:"Maramataka charts are often drawn as **circles** — the nights of the moon arranged around a wheel. Like the Maya calendar wheels, the circle shows time as a **cycle** that keeps coming round, not a straight line.",
    paths:[
      { id:"A", name:"The Scribe", product:"Day-Name Wheel", steps:["Divide a big circle into 20 segments (18°).","Write and decorate the 20 day-names.","Add your Tzolk'in birthday on the back."], flying:"Add a symbol you design for each day-name — your own, not copied." },
      { id:"B", name:"The Builder", product:"Two-Wheel Model", steps:["Big wheel: 20 day-names. Small: 13 numerals.","Join them with a split pin through the centre.","Turn both one step at a time — find 4 Ajaw."], flying:"Add a window cut-out so only one combination shows." },
      { id:"C", name:"The Messenger", product:"Teach Card", steps:["Make a card teaching how to use the wheel.","Explain 13 × 20 = 260 with a diagram.","Teach a partner using your card."], flying:"Explain how the Haab' (365) wheel would join on to make the 52-year Calendar Round." }
    ],
    supportedShort:"pre-divided circle templates; day-name strips to glue; step cards.",
    lens:{
      pillar:"mohio", title:"A time for everything",
      look:"Look at your wheel: time going round — seasons, days, years. The Maya saw time as cycles. The Bible also sees seasons in life, held in God's hands.",
      ref:"Ecclesiastes 3:1, 11",
      paraphrase:"There is a time for everything, and a season for every activity under the heavens… He has made everything beautiful in its time.",
      talk:[
        { q:"What ‘seasons’ have you had in your life so far? (e.g. starting school, a move, a new sibling)", listen:"Times of change, joy, sadness, growth — God is with us in every season." },
        { q:"What does it mean that God makes everything beautiful ‘in its time’?", listen:"Waiting can be hard, but God is working; not everything happens at once; trust His timing." }
      ],
      live:"Gallery walk: tell one person what you admire in their wheel."
    },
    clue:{ prompt:"Folio Seal: add the four Glyph Clues from Monday to Thursday.", answer:13, explain:"5 + 4 + 3 + 1 = 13 — two bars and three dots." },
    next:"Week 5 — The Silent Cities: kings, collapse and LiDAR.",
    rubric:[
      { c:"Context", code:"VA-UC",
        d:["Says the Maya had calendar wheels.","“They had circles for days.”"],
        a:["Explains how the wheel shows a calendar cycle.","“The 13 numbers and 20 day-names turn together, making 260 days.”"],
        f:["Compares radial design across cultures.","“The Aztec Sun Stone and maramataka charts also use circles to show time going round.”"],
        i:["I know the Maya had calendar wheels.","I can explain the cycle my wheel shows.","I can compare radial designs across cultures."] },
      { c:"Construction", code:"VA-PK · MA",
        d:["Builds with help; wheel sticks.","Segments are uneven; the wheel won't turn."],
        a:["Builds a wheel that turns smoothly with even segments.","20 equal segments; split pin centred; turns easily."],
        f:["Builds a precise two-wheel model with a window.","Uses a protractor (18°); the window shows one date at a time."],
        i:["I built it with help.","My wheel turns smoothly and is even.","My model is precise and has a window."] },
      { c:"Radial design", code:"VA-DI",
        d:["Decorates without a plan.","Random colours and shapes."],
        a:["Uses repeated motifs around the centre (radial symmetry).","Each segment has the same border and colour pattern."],
        f:["Creates an original, balanced radial design and explains choices.","“I alternated warm and cool colours so your eye travels round, like time.”"],
        i:["I decorated it.","I used a repeated radial pattern.","My design is original and I can explain it."] }
    ],
    plan:{
      prior:"Monday: Tzolk'in (13 × 20) and Haab'; Week 3: symmetry and pattern; Maya numerals.",
      kc:["Thinking","Managing self","Using language, symbols & texts"],
      sequence:[
        ["0–6","Field Transmission","Doña Rosa: a wheel to read Folio IV's dates; Glyph Check; LI/SC.","Recall the week."],
        ["6–18","Excavate","Radial design across Mesoamerica; Calendar Wheel demo (drag & turn); build steps.","Observe, predict."],
        ["18–40","Choose Your Path (22 min)","Build wheels; roam with the rubric.","Wheel / gear model / teach card."],
        ["40–45","Through the Lens","Ecclesiastes 3; gallery walk.","Discuss; compliment."],
        ["45–50","Folio Seal","5 + 4 + 3 + 1 = 13; the Collector's intercept.","Solve; discuss."]
      ],
      diff:{
        supported:"Pre-divided templates; glue-on strips.",
        esol:"Demonstration; visual step cards.",
        learning:"Larger circles; fewer segments (e.g. 10 + 5 model).",
        flying:"Window cut-out; protractor accuracy; Haab' extension."
      },
      assess:{
        lookFor:["Explains the cycle","Wheel turns; even segments","Radial design"],
        evidence:["Photographed wheels","Teach cards","Exit self-assessment"]
      },
      inquiry:["Did students link 13 × 20 to the wheels?","Which construction step caused the most trouble?","Keep wheels for Week 10 display."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"rosa", meta:"Restoration tent",
        msg:"Children, the dates on Folio IV are like a puzzle that turns. In the old days, day-keepers carried the count in their heads and on painted pages. Today, we'll make **calendar wheels** with our own hands — and use them to open **Seal IV**.",
        notes:[["SAY","Read the message."],["ASK","“Where have you seen circles that show time?” (Clocks!)"]] },
      { type:"glyphcheck", phase:"transmission", fs:"real", title:"This week so far", qs:[
          { q:"Tzolk'in = how many numbers × how many day-names?", a:"13 × 20 = 260 days." },
          { q:"Which layer of the rainforest gets the least light?", a:"The forest floor (about 2%)." },
          { q:"What does delay(1000) do?", a:"Waits 1000 milliseconds — 1 second." }],
        notes:[["SAY","Whole-week review."],["CLICK","→ flips."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and SC."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Designs that turn", title:"Radial design", h:"540px", cards:[
          { artefact:"sunstone", t:"Aztec Sun Stone", d:"Rings of signs spreading from the centre — a **radial** design about 3.6 m wide." },
          { big:"260", color:"#B3262E", t:"Maya day count", d:"13 numbers and 20 day-names turning together, like **interlocking wheels**." },
          { big:"◎", color:"#1F7A5A", t:"Maramataka", d:"Moon nights arranged around a **circle** — time as a cycle." }],
        notes:[["SAY","“Radial means spreading from the centre — like sun rays or spokes.”"],["ASK","“Why might a circle be a good shape for showing time?”"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Try it first", title:"The calendar wheel", ix:"calwheel", paper:true,
        notes:[["CLICK","Drag the outer wheel (day-names) and the inner wheel (numbers). Press ‘Turn both’ to step a day."],["ASK","“Start at 1 Imix. After 13 turns, what's in the window?” (1 Ix — the number is back to 1, but the name has moved on 13 places.)"],["DEEPER","“How many turns until 1 Imix comes back?” (260)"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Build guide", title:"Make your wheel", ix:"stepper",
        cfg:{ safety:"⚠️ Push split pins through onto an eraser or Blu Tack — never onto your hand.", steps:[
          { t:"Collect your parts", d:"A **big** card circle (~20 cm), a **small** circle (~13 cm) and one **split pin**.", art:"wheelStep", n:0 },
          { t:"Divide the big wheel", d:"Rule **20 equal segments** (18° each). Write a day-name near the edge of each.", art:"wheelStep", n:1 },
          { t:"Divide the small wheel", d:"Rule **13 segments** (about 28° each). Draw a Maya numeral 1–13 in each.", art:"wheelStep", n:2 },
          { t:"Design radially", d:"Repeat colours and borders around each wheel — **radial symmetry**. Keep the edges neat.", art:"wheelStep", n:3 },
          { t:"Join and turn!", d:"Push the split pin through **both centres**, open the legs at the back. Turn both wheels one step at a time.", art:"wheelStep", n:4 }] },
        notes:[["CLICK","Step through all 5; leave it up during building."],["NOTE","Tip: find the centre by folding the circle in half twice."],["PACE","Aim for minute 18."]] },
      { type:"paths", phase:"paths", fs:null, minutes:22, notes:[["SAY","Explain paths."],["CLICK","Start the 22-minute timer."]] },
      { type:"lens", phase:"lens", fs:null, notes:[["CLICK","→ reveals each move."],["SAY","Read Ecclesiastes 3:1 and 11. Then a 3-minute gallery walk."]] },
      { type:"folioseal", phase:"decode", fs:"story",
        notes:[["SAY","“Seal IV!”"],["CLICK","Reveal the clues: 5 + 4 + 3 + 1 = 13. Build it: ▬▬ ●●● → ‘Break the seal’."],["ASK","“Do we need the 20s level this time?” (No — 13 is under 20.)"]] },
      { type:"intercept", phase:"decode", fs:"story",
        msg:"I've read your folio's last page. A Long Count date — the END of something. Your codex predicts DOOM. Sell it to me now, before it's worthless. — C.",
        ask:"How could we check whether the Collector's claim is true? What did we learn on Monday?",
        notes:[["SAY","Read in the Collector's voice."],["ASK","Discuss briefly."],["LISTEN","Look at the evidence; a cycle ending isn't doom; ask experts; don't let fear rush us."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess; wheels on display."],["CLICK","C = cacao beans."]] }
    ]
  };

  FC.WEEKS[4] = {
    n:4,
    story:"Folio IV is full of dates. The team learns the Maya's three calendars and busts the 2012 myth, compares the Amazon with Aotearoa's rainforests, tests conductors and insulators to protect the codex from the damp, gives the temple a microcontroller ‘heartbeat’, and builds calendar wheels. Seal IV reveals a Long Count date — the last one ever carved.",
    hononga:"The maramataka and Matariki (Mon); Te Urewera and Tāne Mahuta (Tue); pounamu (Wed); smart traps for Predator Free 2050 (Thu); maramataka circles (Fri). Check local framing with your Māori lead / Ngāi Tahu rūnanga.",
    seal:{
      answer:13,
      instruction:"Add the four **Glyph Clues**. Build the total with bars and dots.",
      reveal:"🟡 **Folio IV unsealed:** a column of five numerals — **10.4.0.0.0**. Dr Canul goes quiet. It's the **last Long Count date ever found carved in stone** (Toniná, 909 CE). After it, the kings fell silent. Next week: *The Silent Cities*.",
      art:() => { const v = FC.art.timeFolio(); v.setAttribute("style", "width:100%;height:100%"); return v; }
    },
    lessons:[mon, tue, wed, thu, fri]
  };
})(window.FC);
