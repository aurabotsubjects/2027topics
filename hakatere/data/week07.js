/* ==========================================================
   WEEK 7 — MAP SHEET VII · THE RACE  (Sheet VII is missing!)
   Notes: [KEY, text]  KEY = SAY ASK LISTEN IF CLICK TALK DEEPER PACE SAFETY WAIT NOTE TIKANGA
   Facts are sourced in data/sources.js (tags match blueprint §18).
   ========================================================== */
(function(BM){
  "use strict";

  /* the RDR across the plains — drawn in code */
  const raceSVG = () => {
    const s = BM.s, v = BM.svg(600, 600, { style:"width:600px;height:600px;border-radius:10px;box-shadow:var(--sh-3)" });
    v.appendChild(s("rect", { width:600, height:600, fill:"#d8c58e" }));
    v.appendChild(BM.art.range(600, 600, 120, 80, 77, "#9aa7ab", { snow:"#f4f6f4", peaks:5 }));
    v.appendChild(s("rect", { y:118, width:600, height:482, fill:"#d8c58e" }));
    v.appendChild(BM.art.braids([[40,130],[90,300],[150,620]], { seed:2, w0:24, w1:40, threads:3, color:"#3D8DB3", sw:3, bedOpacity:.6 }));
    v.appendChild(BM.art.braids([[560,130],[520,330],[480,620]], { seed:3, w0:24, w1:40, threads:3, color:"#3D8DB3", sw:3, bedOpacity:.6 }));
    v.appendChild(s("path", { d:"M80 190 C 220 230, 330 300, 520 430", stroke:"#2C6F92", "stroke-width":10, fill:"none", "stroke-linecap":"round" }));
    v.appendChild(s("circle", { cx:520, cy:430, r:14, fill:"#E6C873", stroke:"#1F2A30", "stroke-width":3 }));
    v.appendChild(s("text", { x:60, y:175, "font-family":"Big Shoulders Display", "font-weight":900, "font-size":22, fill:"#1F2A30" }, "RANGITATA · KLONDYKE INTAKE"));
    v.appendChild(s("text", { x:350, y:470, "font-family":"Big Shoulders Display", "font-weight":900, "font-size":22, fill:"#1F2A30" }, "HIGHBANK ⚡ RAKAIA"));
    v.appendChild(s("text", { x:200, y:330, "font-family":"Fraunces", "font-style":"italic", "font-size":24, fill:"#2C6F92", transform:"rotate(28 200 330)" }, "the race · ~67 km"));
    v.appendChild(s("text", { x:300, y:575, "text-anchor":"middle", "font-family":"Atkinson Hyperlegible", "font-size":18, fill:"#4B5357" }, "Simplified sketch, not to scale."));
    return v;
  };

  /* ======================= MONDAY · HISTORY ======================= */
  const mon = {
    id:"w07-mon", week:7, day:"mon", subject:"history", duration:50,
    title:"Water on the Plains: The Rangitata Diversion Race", guide:"nell",
    codes:["SS-H","SS-E","SS-P","ANZH"],
    coverage:"Y6 History (2027): change over time in our district; the Great Depression and public works. Economic activity: how water and power changed farming. Practices: weighing benefits and costs from more than one perspective.",
    li:"We are learning how and why water was brought across the plains.",
    sc:["I can explain why the plains needed water races and irrigation.","I can explain why the Rangitata Diversion Race was built during the Depression.","I can weigh up the benefits and costs of the race."],
    vocab:[
      { w:"water race", def:"a channel dug to carry water across land" },
      { w:"irrigation", def:"bringing water to land so crops and grass can grow" },
      { w:"diversion", def:"turning something (like a river's water) to go a different way" },
      { w:"intake", def:"the place where water is taken in from a river" },
      { w:"Depression", def:"the Great Depression of the 1930s, when many people lost their jobs" },
      { w:"siphon", def:"a pipe that carries water down and up again, under a valley or river" },
      { w:"hydro power", def:"electricity made from moving water" }
    ],
    prep:{ min:5, items:["Field Journals","Optional: clear tubing and two cups of water to demonstrate a siphon","Optional (Path B): a tray, clay or play-dough, a straw or tube"] },
    safety:["Siphon demo: no sucking on tubes; fill the tube by dipping it in the water."],
    tikanga:["The RDR history records that a sizeable group of workers came from Arowhenua. Some students' whānau may have stories about it; invite sharing, and ask your Māori lead about connections.","Taking water from rivers matters to mana whenua. Present more than one view fairly (§17.8)."],
    hononga:"**Arowhenua on the race.** When the race was built in the Depression, a sizeable group of workers from the local rūnanga, **Arowhenua**, was offered full-time work on the race and its irrigation schemes. Rivers are also taonga to Kāi Tahu, so how much water is taken from them still matters today.",
    paths:[
      { id:"A", name:"The Recorder", product:"News Report, 1945", steps:["Write a **newspaper report** for June 1945: **Highbank makes power!**","Include **when work began**, **how long the race is**, and **who built it**.","Add **one quote** from an imagined worker (not a real person)."], flying:"Add a second article about one cost or worry." },
      { id:"B", name:"The Maker", product:"Race & Siphon Model", steps:["Make a **clay model** of a race crossing a valley.","Use a **tube** as a siphon: the far end must be **lower** than the start.","Test it with water. Does it flow?"], flying:"Explain why the race needs a gentle slope all the way." },
      { id:"C", name:"The Storyteller", product:"Worker's Story", steps:["Role-play a **Depression worker** arriving to dig the race in **1937**.","Tell **why** you came, **what the work was like**, and **what it meant** for your family.","Use facts from today's slides."], flying:"Tell the story again, 50 years later, as a farmer using the water." }
    ],
    supportedShort:"a timeline strip (1937 → 1944 → 1945), picture cards (pick, shovel, wheelbarrow, siphon), sentence frames.",
    lens:{
      pillar:"manaaki", title:"Pools in the desert",
      look:"Look again at the race: water carried across a dry plain so the land can grow food.",
      ref:"Isaiah 41:18",
      paraphrase:"I will make rivers flow on dry hills, and springs in the valleys. I will turn the desert into pools of water.",
      talk:[
        { q:"God promises to bring water to dry places. How does the race help us picture what God is like?", listen:"He provides; He cares for people in hard times; He brings life to dry places." },
        { q:"In the Depression, the race gave work to people who had none. How can we bring ‘water’ to people who are struggling?", listen:"Share food; give work or help; include people; give time; pray." }
      ],
      live:"Next time you see an irrigator or a water race, say thank you for **water** and for the **people who built** it."
    },
    clue:{ prompt:"Work on the race began in 1937, and Highbank first made power in 1945. How many years?", answer:8, explain:"1945 − 1937 = 8. Trig Clue 1 is saved for Friday!" },
    next:"Tuesday — Sam is off to Mt Hutt. Who uses the mountains, and how do we share them?",
    rubric:[
      { c:"Why water?", code:"SS-H · SS-E",
        d:["Says farms need water.","“Plants need water.”"],
        a:["Explains why the plains needed water races and irrigation.","“The plains are in the Alps' rain shadow, and the gravel soils dry out, so farmers needed water brought to them.”"],
        f:["Links water to changes in farming.","“With irrigation, farms could grow more grass and crops, so they changed to dairy and cropping.”"],
        i:["I know farms need water.","I can explain why the plains needed irrigation.","I can link water to changes in farming."] },
      { c:"The race & the Depression", code:"SS-H · ANZH",
        d:["Says people dug a race.","“They built it.”"],
        a:["Explains why the RDR was built in the Depression.","“Work began in 1937. The Depression meant people needed jobs, and over 400 jobs were created, including for Arowhenua workers.”"],
        f:["Explains how it was built and why that was hard.","“It started with picks, shovels and wooden wheelbarrows; the Klondyke section was called ‘the heaviest mile’.”"],
        i:["I know people built a race.","I can explain why it was built in the Depression.","I can explain how it was built."] },
      { c:"Weighing it up", code:"SS-P",
        d:["Says it was good.","“It was good.”"],
        a:["Weighs up benefits and costs.","“It waters about 66,000 ha and makes power, but it takes water from the river.”"],
        f:["Weighs it from different perspectives.","“A farmer, a worker in 1937, a fisher and Arowhenua might all see it differently.”"],
        i:["I can say if it was good.","I can weigh up benefits and costs.","I can weigh it from different perspectives."] }
    ],
    plan:{
      prior:"Students know the rain shadow and droughts (Week 5), centre pivots (Weeks 1, 5) and how braided rivers work (Week 4). Many students' families farm with RDR water.",
      kc:["Thinking","Participating & contributing"],
      sequence:[
        ["0–6","Field Note","Nell's note: Sheet VII is missing! Trig Check (Week 6). LI/SC.","Recall; predict."],
        ["6–20","Survey","Water for a dry plain; the RDR; built in the Depression; **Water Race Engineer**; benefits and costs.","Explain; test; weigh up."],
        ["20–38","Choose Your Path","Introduce A/B/C. Roam: “Why then? Who built it? Who benefits?”","News report / model / worker's story."],
        ["38–45","Through the Lens","Isaiah 41:18 — four moves.","Discuss; give thanks."],
        ["45–50","Trig Clue & Exit","Trig Clue 1 (answer 8); self-assessment; wheat sheaves.","Solve; self-assess."]
      ],
      diff:{
        supported:"Timeline strip; picture cards; sentence frames.",
        esol:"Siphon demo with real water; act out digging; picture glossary.",
        learning:"Hands-on siphon model; partner work; calm screen available.",
        flying:"Perspectives; changes in farming; engineering the slope."
      },
      assess:{
        lookFor:["Explains why water was needed","Explains the Depression context","Weighs benefits and costs"],
        evidence:["Water Race Engineer discussion","Path products (photograph)","Exit self-assessment"]
      },
      inquiry:["Did students present more than one view of water use fairly?","Any whānau stories of the race to collect for museum cases?","Big Projects week 1: check every student has started."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"nell", meta:"Conservation room · an empty sleeve",
        msg:"I opened the tin chest this morning to get **Sheet VII** and… the sleeve is **empty**. It's gone. The field book says it shows *“the race: water across the plains”*. Someone has taken it. While we work out who, we'll do what historians do: **find the facts ourselves**.",
        notes:[["SAY","Read the message. 🟡 Nell and the missing sheet are fictional."],["ASK","“Who might have taken it?” (Bank guesses: the Dealer?)"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"What was rock-art paint made from?", a:"Animal or bird fat and plant gum, mixed with soot or kōkōwai." }, { q:"Why don't we copy rock-art figures?", a:"They're taonga that belong to Ngāi Tahu and their stories." }, { q:"What bearing opened Sheet VI?", a:"061° (6 + 6 + 9 + 40), the same as Sheet III." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"A dry plain", title:"Water for the *plains*",
        bullets:["The plains are in the Alps' **rain shadow** (Week 5): Christchurch gets about **648 mm** of rain a year, and **droughts** come about every six years.","The stony **gravel soils** dry out fast, so farmers needed water **brought** to them in races and channels.","Later, from the **mid-1980s**, big **spray irrigators** spread across the dry South Island."],
        visual:{ artefact:"pivot" },
        notes:[["SAY","Rainfall from Te Ara (Week 5)."],["ASK","“What would a farm on the plains look like in a drought without irrigation?”"]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Klondyke to Highbank", title:"The *Rangitata Diversion Race*",
        bullets:["Work on the **RDR** began on **2 April 1937** at **Klondyke**, in the Rangitata Gorge.","The race is about **67 km** long and was finished in **1944**. It carries Rangitata water north across the plains.","**Highbank Power Station** first made electricity on **8 June 1945**. The race irrigates about **66,000 ha** of farmland."],
        visual:{ svg:raceSVG },
        notes:[["SAY","Facts from Rangitata Diversion Race Management Ltd (Our History) and Engineering New Zealand's heritage record."],["ASK","“Why build a race 67 km long instead of using the river nearby?”"]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"1930s", title:"Built in the *Depression*", h:"500px",
        cards:[ { icon:"💼", t:"Jobs", d:"The **Depression** was the reason. Many people had lost their jobs. The race created work for **over 400 people**: engineers, surveyors, machine operators, concrete workers and labourers." }, { icon:"🤝", t:"Arowhenua", d:"A **sizeable group** from the local rūnanga, **Arowhenua**, was offered **full-time work** on the race and its irrigation schemes." }, { icon:"⛏️", t:"By hand", d:"Work began with **picks, shovels and wooden wheelbarrows**. The hard Klondyke section, **‘the heaviest mile’**, needed draglines and bulldozers." } ],
        notes:[["SAY","Facts from RDRML (Our History)."],["ASK","“How would it feel to get a job after months without one?”"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Be the engineer", title:"Water Race Engineer", ix:"waterrace",
        notes:[["CLICK","1 · Slope: move the slider. Find a slope that flows without scouring. 2 · Siphon: lower and raise the far channel."],["CLICK","→ steps: good slope, too steep, siphon stuck, siphon flowing."],["SAY","“The RDR has nine inverted siphons. The Surrey Hills siphon is 2.7 km long.”"],["NOTE","Simplified model. If you brought tubing, do the real siphon demo now."]] },
      { type:"discussion", phase:"excavate", fs:"real", kicker:"Weigh it up", q:"The race brings water and power. What are its **benefits** and **costs**, and **who** might see it differently?", sub:"Think about farmers, Depression workers, Arowhenua, fishers, birds and the river.", talk:60,
        notes:[["TALK","60-second talk, then a class T-chart: Benefits | Costs."],["LISTEN","Benefits: water for farms; jobs in the Depression; electricity; more food grown. Costs: less water in the river; effects on fish and birds; changes to the land."],["NOTE","Irrigation and river health are real community debates. Present more than one view fairly (§17.8). No villains."]] },
      { type:"paths", phase:"paths", fs:null, minutes:18,
        notes:[["SAY","“Choose your path. Invented people only for quotes: no made-up quotes from real people.”"],["CLICK","Start the 18-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Isaiah 41:18."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 1945 − 1937 = 8."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = wheat sheaves."]] }
    ]
  };

  /* ======================= TUESDAY · GEOGRAPHY ======================= */
  const tue = {
    id:"w07-tue", week:7, day:"tue", subject:"geography", duration:50,
    title:"People & Mountains: Stations, Ski Fields & Parks", guide:"sam",
    codes:["SS-G","SS-E","SS-C"],
    coverage:"Y5–6 Geography and Economic activity (2027): how people use and value places; economic and environmental effects; how communities make decisions about shared places (civics).",
    li:"We are learning how people use and care for mountain places.",
    sc:["I can describe three ways people use the mountains.","I can explain the economic and environmental effects of one use.","I can suggest how to balance different uses."],
    vocab:[
      { w:"land use", def:"what people use an area of land for (farming, recreation, conservation…)" },
      { w:"tourism", def:"visitors travelling to a place for holidays or fun" },
      { w:"conservation", def:"protecting nature so it lasts" },
      { w:"economic", def:"to do with money, jobs and business" },
      { w:"environmental", def:"to do with nature: land, water, plants and animals" },
      { w:"council", def:"the group of elected people who make decisions for a district" },
      { w:"balance", def:"finding a fair way for different needs to fit together" }
    ],
    prep:{ min:5, items:["Field Journals","Optional (Path C): role cards for a council meeting (farmer, ski field manager, DOC ranger, Arowhenua representative, tramper, local business owner)"] },
    safety:[],
    tikanga:["In the council role-play, the Arowhenua representative should be played respectfully, and should not speak for real people. Keep it to general concerns (rivers, mahika kai, places of significance)."],
    hononga:"**Many people, one place.** Kāi Tahu travelled and gathered food in these mountains long before stations, ski fields or parks. Today Ngāi Tahu has a Statutory Acknowledgement over the Hakatere area, so they are part of decisions about it.",
    paths:[
      { id:"A", name:"The Recorder", product:"Report", steps:["Write a report on **three ways** people use our mountains.","For **one use**, explain its **economic** and **environmental** effects.","Finish with your idea for **balancing** them."], flying:"Explain how one use helps or hurts another." },
      { id:"B", name:"The Maker", product:"Land-Use Map", steps:["Draw a **map** of our mountains and plains.","Colour-code areas for **farming, tourism, conservation and water/power**, with a key.","Add **one ‘+’ and one ‘–’** for each use."], flying:"Mark where two uses might clash, and suggest a solution." },
      { id:"C", name:"The Storyteller", product:"Council Meeting", steps:["Take a **role card** (farmer, ski field manager, DOC ranger, tramper, local business owner…).","Debate: **‘Should a new chairlift be built on the mountain?’**","Each speaker gives **one reason**. The mayor decides and explains why."], flying:"Write the council's decision with conditions that balance everyone's needs." }
    ],
    supportedShort:"use picture cards (sheep, skier, ranger, power), a +/– table, sentence frames (“This helps … because …”).",
    lens:{
      pillar:"manaaki", title:"The earth is the Lord's",
      look:"Look again at the map: farmers, skiers, rangers and power, all sharing one set of mountains.",
      ref:"Psalm 24:1",
      paraphrase:"The earth is the Lord's, and everything in it; the world, and all who live in it.",
      talk:[
        { q:"If the mountains belong to God, how should we use them?", listen:"Carefully; fairly; sharing; looking after them for others and for the future; giving thanks." },
        { q:"How can people who want different things share a place well?", listen:"Listen to each other; compromise; make fair rules; think of future generations." }
      ],
      live:"Think of a **shared place** at school (the field, the library). What's **one thing** you can do to share it well?"
    },
    clue:{ prompt:"Mt Hutt ski field opened in 1973. Add the digits: 1 + 9 + 7 + 3.", answer:20, explain:"1 + 9 + 7 + 3 = 20. Trig Clue 2 is saved!" },
    next:"Wednesday — Dr Priya says Puaka is blue and Betelgeuse is red. Why are stars different colours?",
    rubric:[
      { c:"Uses of mountains", code:"SS-G",
        d:["Names one use.","“Skiing.”"],
        a:["Describes three ways people use the mountains.","“Sheep stations farm the tussock, Mt Hutt brings skiers, and the conservation park protects nature.”"],
        f:["Explains how uses connect or clash.","“The ski field brings visitors who also tramp in the park, so tracks get busier.”"],
        i:["I can name one use.","I can describe three uses.","I can explain how uses connect or clash."] },
      { c:"Effects", code:"SS-G · SS-E",
        d:["Says one effect.","“It makes money.”"],
        a:["Explains economic and environmental effects of one use.","“Mt Hutt employs about 300 people in the season and helped Methven grow again, but it needs roads and buildings on the mountain.”"],
        f:["Uses data to support the explanation.","“Methven's population went from 978 in 1991 to 1,707 in 2013 after the ski field turned it around.”"],
        i:["I can say one effect.","I can explain economic and environmental effects.","I can use data to support my explanation."] },
      { c:"Balancing", code:"SS-C",
        d:["Gives an opinion.","“Ban skiing.”"],
        a:["Suggests a way to balance different uses.","“Allow the chairlift but protect the alpine plants with fenced tracks.”"],
        f:["Considers several perspectives and future generations.","“Ask the farmer, DOC, Arowhenua and skiers, and think about who will use it in 50 years.”"],
        i:["I can give an opinion.","I can suggest a way to balance uses.","I can consider several perspectives."] }
    ],
    plan:{
      prior:"Students know Hakatere Station (Week 5), the conservation park and alpine ecosystems (Week 6) and the RDR (Monday). Many have been to Mt Hutt or Methven.",
      kc:["Thinking","Participating & contributing","Relating to others"],
      sequence:[
        ["0–6","Field Note","Sam's message. Trig Check (Monday). LI/SC.","Recall; predict."],
        ["6–18","Survey","Uses of the mountains; Mt Hutt and Methven; **Mountain Uses** map; balancing.","Explore; weigh up."],
        ["18–38","Choose Your Path","Introduce A/B/C. Roam: “Who benefits? What's the cost? How can we balance it?”","Report / map / council meeting."],
        ["38–45","Through the Lens","Psalm 24:1 — four moves.","Discuss; share well."],
        ["45–50","Trig Clue & Exit","Trig Clue 2 (answer 20); self-assessment; wheat sheaves.","Solve; self-assess."]
      ],
      diff:{
        supported:"Picture cards; +/– table; sentence frames.",
        esol:"Role cards with pictures; rehearse one sentence each.",
        learning:"Choice of role; partner work; calm screen available.",
        flying:"Data on Methven; connected uses; future generations."
      },
      assess:{
        lookFor:["Describes three uses","Explains effects","Suggests a balance"],
        evidence:["Mountain Uses discussion","Path products (photograph)","Exit self-assessment"]
      },
      inquiry:["Did the council role-play stay respectful?","Who used data to support their argument?","Big Projects: anyone doing a mountain field guide can use today's map."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"sam", meta:"Mt Hutt road · ski season",
        msg:"The road up Mt Hutt is full of cars this morning. Skiers, a farmer moving sheep on the flats, a DOC ranger checking a track, and the water race glinting on the plains below. **Everyone wants something from these mountains.** How do we share them?",
        notes:[["SAY","Read the message. 🟡 Sam is fictional."],["ASK","“Who uses our mountains? Make a list.”"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"When did work on the RDR begin?", a:"2 April 1937, at Klondyke." }, { q:"Why was it built during the Depression?", a:"People needed jobs; over 400 jobs were created." }, { q:"How does an inverted siphon work?", a:"Water goes down under a valley and up the other side, because the far end is lower than the inlet." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Who uses the mountains?", title:"Farms, *skis* & parks", h:"500px",
        cards:[ { icon:"🐑", t:"Farming", d:"**High-country stations** like Hakatere graze sheep on the tussock hills (Week 5)." }, { icon:"⛷️", t:"Tourism", d:"**Mt Hutt ski field** was opened in **1973** by **Willie Huber**. It employs about **300 people** over a four-month season." }, { icon:"🏞️", t:"Conservation", d:"**Hakatere Conservation Park** protects nearly **60,000 ha**. The **station buildings** are a **Tohu Whenua** heritage site." } ],
        notes:[["SAY","Facts from RNZ (Mt Hutt marks 40 years), DOC and Tohu Whenua."],["ASK","“Which of these brings money to our district? Which protects nature? Can one do both?”"]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"A town turned around", title:"Mt Hutt & *Methven*",
        bullets:["**Methven** was the end of a railway line from **1880 to 1976** (Week 6).","The town **declined** during the 1900s, but the **Mt Hutt ski field reversed** the downturn.","Methven's population grew from **978** (1991) to **1,707** (2013)."],
        visual:{ map:{ theme:"paper", labels:"both", relief:true }, size:560 },
        notes:[["SAY","Facts from Te Ara (Canterbury places: Mid-Canterbury)."],["ASK","“How could a ski field help a town grow?”"],["LISTEN","Jobs; visitors stay in motels and eat in cafés; shops open; families move there."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Tap each use", title:"Mountain Uses", ix:"mountainuses",
        notes:[["CLICK","Tap each symbol (or press →): farming, ski field, park, water and power, heritage."],["ASK","For each: “Who benefits? What's the cost? How is it balanced?”"],["NOTE","Effects are general examples for discussion, not a full report."]] },
      { type:"discussion", phase:"excavate", fs:"real", kicker:"Turn & Talk", q:"A company wants to build a **new chairlift** on the mountain. **Who** should the council listen to, and **why**?", sub:"Think about skiers, farmers, DOC, Arowhenua, local businesses and future generations.", talk:60,
        notes:[["TALK","60-second talk. This sets up Path C."],["LISTEN","Everyone affected; people who live there; mana whenua; experts on plants and birds; future users."]] },
      { type:"paths", phase:"paths", fs:null, minutes:20,
        notes:[["SAY","“Choose your path. Path C: council meeting in the corner, mayor keeps time.”"],["CLICK","Start the 20-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Psalm 24:1."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 1 + 9 + 7 + 3 = 20."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = wheat sheaves."]] }
    ]
  };

  /* ======================= WEDNESDAY · SCIENCE ======================= */
  const wed = {
    id:"w07-wed", week:7, day:"wed", subject:"science", duration:50,
    title:"Life of a Star", guide:"priya",
    codes:["SC-ES","SC-P"],
    coverage:"Y6 Science (2027): stars — colour, temperature and size; comparing stars; how scientists use models. D8 applied: God's creation as the main teaching, scientists' estimates of star ages in a labelled side note.",
    li:"We are learning about stars: their colours, temperatures and sizes, and how scientists describe their lives.",
    sc:["I can explain how a star's colour shows its temperature.","I can describe a nebula, a giant and a supergiant.","I can compare Puaka (Rigel), Betelgeuse and our Sun."],
    vocab:[
      { w:"nebula", say:"NEB-yoo-lah", def:"a huge cloud of gas and dust in space" },
      { w:"temperature", def:"how hot or cold something is" },
      { w:"giant", def:"a star much bigger than our Sun" },
      { w:"supergiant", def:"one of the biggest and brightest kinds of star" },
      { w:"Betelgeuse", say:"BET-el-jooz", def:"a cool red supergiant star in Orion" },
      { w:"white dwarf", def:"a small, hot, leftover star core" },
      { w:"model", def:"a way scientists show or explain something they can't see all at once" }
    ],
    prep:{ min:5, items:["Field Journals","Optional (Path B): coloured paper, pipe-cleaners or balls of different sizes and colours","Optional: a candle flame or a toaster element photo to show red vs white-hot"] },
    safety:["If you show a flame, the teacher holds it; students stay back."],
    tikanga:["Puaka (Rigel) is important to Kāi Tahu (Week 6). Use its name respectfully alongside its scientific description."],
    hononga:"**Puaka and Tautoru.** Last week we found Puaka near Tautoru (Orion's belt) as a marker of the new year for many Kāi Tahu. Today we learn that Puaka is a huge, hot, blue-white star: one sky, seen in different ways.",
    paths:[
      { id:"A", name:"The Recorder", product:"Star Life-Cycle Diagram", steps:["Draw **two paths**: a **Sun-like star** and a **very big star**, as scientists describe them.","Label each stage with its **colour** and **size**.","Add a box: **📜 God made the stars**, and a **🔬 side note** with the scientists' ages."], flying:"Explain why a star's colour tells us its temperature." },
      { id:"B", name:"The Maker", product:"Star-Colour Model", steps:["Make **three model stars**: **Betelgeuse**, the **Sun** and **Puaka**.","Use **colour and size** to show the differences.","Order them from **coolest to hottest**."], flying:"Add a white dwarf and explain where it fits." },
      { id:"C", name:"The Storyteller", product:"‘Life of a Star’ Story", steps:["Write a short story told **by a star**: from a **cloud of gas** to a **shining star** to a **giant**.","Use the words **nebula, temperature, giant**.","End by saying **Who made you** and **who knows your name**."], flying:"Tell it from the view of a very big star that becomes a supernova." }
    ],
    supportedShort:"star picture cards (nebula, Sun, giant, white dwarf), a colour-temperature strip, sentence frames.",
    lens:{
      pillar:"mohio", title:"Lift up your eyes",
      look:"Look again at the stars: red, yellow, blue-white, each one shining.",
      ref:"Isaiah 40:26",
      paraphrase:"Lift up your eyes and look to the heavens: who created all these? He brings out the starry host one by one and calls each of them by name. Because of His great power, not one of them is missing.",
      talk:[
        { q:"Isaiah says God brings out the stars one by one and calls each by name. What does that tell us about God's power?", listen:"He's stronger than any star; He made them all; He's in charge of them; not one is missing." },
        { q:"If God knows every star by name, what does that mean for you?", listen:"He knows me; I'm not forgotten; He cares about details; I matter to Him." }
      ],
      live:"On a clear night, find a **red** star and a **blue-white** star. Say thank you to the God who **names them**."
    },
    clue:{ prompt:"Hotter stars look which colour? Red = 1, Blue = 2.", answer:2, explain:"Blue stars are the hottest. Answer: 2. Trig Clue 3 is saved!" },
    next:"Thursday — Liv says the pivot irrigator does the same thing over and over. There's a code block for that!",
    rubric:[
      { c:"Colour & temperature", code:"SC-ES",
        d:["Says stars are different colours.","“Some are red.”"],
        a:["Explains that colour shows temperature.","“Red stars are the coolest, about 3,000 degrees; blue stars are the hottest, some over 30,000.”"],
        f:["Uses an everyday example to explain it.","“Like a stove element going from red to white as it gets hotter.”"],
        i:["I know stars are different colours.","I can explain that colour shows temperature.","I can explain it with an everyday example."] },
      { c:"Star stages", code:"SC-ES · SC-P",
        d:["Names one stage.","“Stars get big.”"],
        a:["Describes a nebula, a giant and a supergiant.","“A nebula is a cloud of gas and dust. A giant is a star that has swollen up. Supergiants are the biggest of all.”"],
        f:["Explains the main teaching and the scientists' model accurately.","“We believe God made the stars. Many astronomers think stars form in nebulae and change over millions to billions of years.”"],
        i:["I can name one stage.","I can describe a nebula, a giant and a supergiant.","I can explain the main teaching and the scientists' model."] },
      { c:"Comparing stars", code:"SC-ES",
        d:["Names one star.","“The Sun.”"],
        a:["Compares Puaka, Betelgeuse and the Sun.","“Puaka is a blue supergiant, Betelgeuse is a red supergiant, and our Sun is a smaller yellow-white star.”"],
        f:["Explains why Puaka and Betelgeuse look so different.","“They're both supergiants in Orion, but Puaka is much hotter, so it's blue.”"],
        i:["I can name one star.","I can compare three stars.","I can explain why they look different."] }
    ],
    plan:{
      prior:"Students know the Sun is a star (Week 2), the spinning sky (Week 3), Matariki and Puaka (Week 6). Many think all stars are white, or that red means hot.",
      kc:["Thinking","Using language, symbols & texts"],
      sequence:[
        ["0–6","Field Note","Dr Priya's message. Trig Check (Tuesday). LI/SC.","Recall; predict."],
        ["6–20","Survey","Star colours; **Star Life**; **D8 side note**; comparing Puaka, Betelgeuse and the Sun.","Predict; observe; explain."],
        ["20–38","Choose Your Path","Introduce A/B/C. Roam: “What colour? How hot? Which stage?”","Diagram / model / story."],
        ["38–45","Through the Lens","Isaiah 40:26 — four moves.","Discuss; look up."],
        ["45–50","Trig Clue & Exit","Trig Clue 3 (answer 2); self-assessment; wheat sheaves.","Solve; self-assess."]
      ],
      diff:{
        supported:"Picture cards; colour strip; sentence frames.",
        esol:"Colour words matched to hot/cold pictures; picture glossary.",
        learning:"Hands-on model; partner work; calm screen available.",
        flying:"Everyday analogies; Betelgeuse vs Puaka; the main teaching and side note."
      },
      assess:{
        lookFor:["Explains colour and temperature","Describes star stages","Compares three stars"],
        evidence:["Star Life predictions","Path products (photograph)","Exit self-assessment"]
      },
      inquiry:["Who still thinks red means hottest? Re-teach with the stove example.","Could students explain both the main teaching and the side note respectfully?","Sky Watcher's Journal projects: add a red and a blue star to observe."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"priya", meta:"Observatory · Orion overhead",
        msg:"Look at Orion through the telescope tonight and you'll see something amazing. **Puaka**, near Tautoru, shines **blue-white**. On the other side of Orion, **Betelgeuse** glows **orange-red**. Same constellation, totally different colours. Here's a clue: it's not paint. It's **temperature**.",
        notes:[["SAY","Read the message. 🟡 Dr Priya is fictional."],["ASK","“Which do you think is hotter: red or blue?” (Most will guess red.)"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"Name three ways people use our mountains.", a:"Farming, skiing/tourism, conservation, water and power, heritage." }, { q:"When did Mt Hutt ski field open?", a:"1973." }, { q:"What does Puaka mean for many Kāi Tahu? (Week 6)", a:"It marks the new year; it's easier to see than Matariki from the south." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Hot or cool?", title:"A star's *colour*",
        bullets:["A star's **colour** shows its **temperature**.","**Red** stars are the **coolest**, about **3,000 degrees**. **Blue** stars are the **hottest**: some are over **30,000 degrees**.","Our **Sun** is in between, about **6,000 degrees**, and looks **yellow-white**."],
        visual:{ artefact:"starchart" },
        notes:[["SAY","Facts from NASA (Astronomy Picture of the Day: Orion's star colours). Temperatures there are in kelvin; for this age, ‘degrees’ is close enough."],["SAY","“Think of a stove element: it glows red, then orange, then white as it gets hotter.”"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Colour, heat & life", title:"Star Life", ix:"starlife",
        notes:[["CLICK","‘Colour & heat’: slide the temperature. Then ‘Life of a star’: choose Sun-like or very big and slide through the stages. (→ steps: Sun, red, blue, Sun-like life, big-star life.)"],["NOTE","The life stages are a model many astronomers use. Ages are on the side-note slide."]] },
      { type:"sidenote", phase:"excavate", fs:"real", kicker:"Where do stars come from?", title:"Who made the *stars*?",
        main:"**God made the stars** (Genesis 1:16). **He brings them out one by one and calls each by name** (Isaiah 40:26), and **in Him all things hold together** (Colossians 1:17).\n\nReading Genesis as history, we believe God made the stars on the fourth day of creation, and that the universe is **young**: thousands of years, not millions.",
        refs:"Genesis 1:16 · Isaiah 40:26 · Psalm 147:4 · Colossians 1:17",
        side:{ text:"Many astronomers think stars **form from clouds of gas and dust** and change over **millions to billions of years**: Sun-like stars become red giants and then white dwarfs; very big stars become supergiants and explode as supernovae.", src:"NASA Night Sky Network (Life cycles of stars)" },
        notes:[["SAY","“As Christians, we believe God created everything, and our school teaches that the universe is young. Many astronomers think stars are very old and change slowly over a long time. It's good to know what they say and why.”"],["NOTE","Observations stay as observations: star colours and temperatures are measured from starlight today."],["NOTE","Rubrics never assess which view a student holds (D8)."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Three stars", title:"Puaka, Betelgeuse & the *Sun*", h:"480px",
        cards:[ { icon:"🔵", t:"Puaka (Rigel)", d:"A **blue supergiant** in Orion: huge, very **hot** and bright." }, { icon:"🔴", t:"Betelgeuse", d:"A **red supergiant** in Orion: huge, but much **cooler**, so it glows red." }, { icon:"🟡", t:"Our Sun", d:"A **yellow-white** star, about **6,000 degrees**: much smaller than either supergiant." } ],
        notes:[["SAY","Facts from NASA APOD (Orion's star colours) and the Otago Daily Times (Puaka a blue supergiant)."],["ASK","“Puaka and Betelgeuse are both supergiants. Why do they look so different?”"]] },
      { type:"paths", phase:"paths", fs:null, minutes:18,
        notes:[["SAY","“Choose your path. Path A: include both the 📜 box and the 🔬 side note.”"],["CLICK","Start the 18-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Isaiah 40:26."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: Blue = 2."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = wheat sheaves."]] }
    ]
  };

  /* ======================= THURSDAY · TECHNOLOGY ======================= */
  const thu = {
    id:"w07-thu", week:7, day:"thu", subject:"technology", duration:50,
    title:"Scratch 2: Loops (The Irrigator Circle)", guide:"liv",
    codes:["DT-CT","DT-DD","MA"],
    coverage:"Digital Technologies — Computational Thinking, Progress Outcome 2: use repetition (loops) to make programs efficient; debug loops. Mathematics: angles and turns (360° in a full turn).",
    li:"We are learning to use loops to make our programs shorter and smarter.",
    sc:["I can spot repeated steps in an algorithm.","I can replace repeated steps with a repeat loop.","I can find and fix a bug in a loop."],
    vocab:[
      { w:"loop", def:"a part of a program that repeats" },
      { w:"repeat", def:"to do again; in Scratch, the block that runs the blocks inside it again and again" },
      { w:"efficient", def:"doing a job with less effort or fewer steps" },
      { w:"angle", def:"the amount of turn, measured in degrees (°)" },
      { w:"degree", def:"a unit for measuring turns; a full turn is 360°" },
      { w:"pen", def:"in Scratch, a tool that draws a line wherever a sprite moves" }
    ],
    prep:{ min:10, items:["Devices with Scratch if available (add the Pen extension), or use Loop Sim on the board","Unplugged: a chalk circle or masking-tape spot outside for ‘walk the loop’","Printed buggy loops for Path C"] },
    safety:["Unplugged loop walk: small steps, eyes open, plenty of space."],
    tikanga:[],
    hononga:"**Patterns that repeat.** Repeating patterns are everywhere: the seasons, the Moon's cycle (Week 5), the pivot going round. A loop is a coder's way of saying ‘do it again’.",
    paths:[
      { id:"A", name:"The Loop Hunter", product:"Loop Hunt", steps:["Look at **3 long algorithms** (written out step by step).","**Circle the repeated steps** in each.","Rewrite each one using a **repeat** loop. Count how many blocks you saved."], flying:"Find an algorithm in daily life that has a loop (brushing teeth, a skipping rope…)." },
      { id:"B", name:"The Maker", product:"Scratch Pivot Animation", steps:["In **Scratch** (or Loop Sim), use **pen down**, then **repeat 36: move 10, turn 10°**.","Run it: does it draw a **circle**?","Change the numbers to draw a **square** or **triangle**."], flying:"Make the sprite look like a pivot arm and spin it with a loop." },
      { id:"C", name:"The Teacher", product:"Teach-Back", steps:["Learn the **pivot circle** loop.","Teach it to a partner: **why** 36? **why** 10°?","Ask them to debug a loop where the circle **doesn't close**."], flying:"Explain the rule: repeats × turn = 360°." }
    ],
    supportedShort:"printed repeat and move/turn blocks to arrange, a repeats × turn table, partner pairing.",
    lens:{
      pillar:"manaaki", title:"New every morning",
      look:"Look again at the loop: the same faithful steps, round and round, until the whole circle is watered.",
      ref:"Lamentations 3:22–23",
      paraphrase:"Because of the Lord's great love we are not consumed; His mercies never fail. They are new every morning; great is Your faithfulness.",
      talk:[
        { q:"A loop repeats faithfully. How is God's faithfulness like that, and how is it different?", listen:"It never stops; it's new every day; but God isn't a machine: He chooses to love us, and He's personal." },
        { q:"Where does the picture break?", listen:"Loops are automatic; God's love is a choice; loops can have bugs, God doesn't; His mercy is fresh, not just the same." }
      ],
      live:"Each morning this week, say one **thank you** to God: a ‘loop’ of thanks."
    },
    clue:{ prompt:"To turn a full circle in steps of 10°, how many repeats do you need?", answer:36, explain:"360 ÷ 10 = 36 repeats. Trig Clue 4 is saved for Friday!" },
    next:"Friday — Tom has foam plates, rollers and ink. We're printing the winter night sky.",
    rubric:[
      { c:"Spotting repetition", code:"DT-CT",
        d:["Notices some steps are the same.","“It says move a lot.”"],
        a:["Spots the repeated steps in an algorithm.","Circles ‘move 10, turn 10°’ repeated 36 times."],
        f:["Finds repetition in everyday life.","“Skipping is a loop: jump, swing, repeat until you trip!”"],
        i:["I notice repeated steps.","I can spot repeated steps in an algorithm.","I can find loops in everyday life."] },
      { c:"Using loops", code:"DT-CT · DT-DD",
        d:["Uses a repeat block with help.","Repeat with nothing inside."],
        a:["Replaces repeated steps with a repeat loop.","Repeat 36: move 10, turn 10° draws a circle."],
        f:["Changes the loop to make new shapes.","“Repeat 4, turn 90° makes a square; repeat 3, turn 120° makes a triangle.”"],
        i:["I can use a repeat block with help.","I can replace repeated steps with a loop.","I can change a loop to make new shapes."] },
      { c:"Debugging loops", code:"DT-CT · MA",
        d:["Says the shape is wrong.","“It didn't close.”"],
        a:["Finds and fixes a bug in a loop.","“It only repeats 30 times. 30 × 10 = 300°, so it doesn't close. I changed it to 36.”"],
        f:["Explains the rule behind the fix.","“Repeats × turn must equal 360° to come back to the start.”"],
        i:["I can tell when it's wrong.","I can find and fix a bug in a loop.","I can explain the rule behind my fix."] }
    ],
    plan:{
      prior:"Last week students wrote sequences and debugged them (Block Sim). In maths they may know 360° in a full turn. Pivot irrigators water a circle (Week 5).",
      kc:["Thinking","Managing self"],
      sequence:[
        ["0–6","Field Note","Liv's message. Trig Check (Wednesday). LI/SC.","Recall; predict."],
        ["6–18","Survey","Spot the repeats; the repeat block; **Loop Sim**; debugging loops; Smart Farm check-in.","Predict; test; fix."],
        ["18–38","Choose Your Path","Introduce A/B/C. Roam: “What repeats? How many times? Does it close?”","Loop hunt / Scratch / teach-back."],
        ["38–45","Through the Lens","Lamentations 3:22–23 — four moves.","Discuss; loop of thanks."],
        ["45–50","Trig Clue & Exit","Trig Clue 4 (answer 36); self-assessment; wheat sheaves.","Solve; self-assess."]
      ],
      diff:{
        supported:"Printed blocks; repeats × turn table; partner.",
        esol:"Walk the loop physically; numbers and arrows.",
        learning:"Unplugged loop walk; partner coding; calm screen available.",
        flying:"Repeats × turn = 360°; new shapes; animation."
      },
      assess:{
        lookFor:["Spots repetition","Uses a repeat loop","Debugs a loop"],
        evidence:["Loop Sim predictions","Path products (screenshots)","Exit self-assessment"]
      },
      inquiry:["Who can explain repeats × turn = 360°?","Smart Farm projects: who's ready to add a loop to their simulation?","Device access for next week's Scratch 3."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"liv", meta:"Pivot control box · midday",
        msg:"I tried writing the program for a pivot to go round once: **move, turn, move, turn, move, turn**… I got to **72 blocks** and gave up! There must be a shorter way to say **‘do the same thing again’**. There is. It's called a **loop**.",
        notes:[["SAY","Read the message. 🟡 Liv is fictional."],["ASK","“What do we say in real life instead of repeating the same instruction 36 times?” (Do it 36 times!)"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"What does a star's colour tell us?", a:"Its temperature: red is coolest, blue is hottest." }, { q:"What kind of star is Puaka?", a:"A blue supergiant." }, { q:"What is a nebula?", a:"A huge cloud of gas and dust in space." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Do it again", title:"The *repeat* loop",
        bullets:["When the same steps happen **again and again**, we can use a **loop**.","In Scratch, the **repeat** block runs the blocks **inside it** a set number of times.","**Repeat 36: move 10, turn 10°** does the work of **72 blocks** with just **3**."],
        visual:{ artefact:"pivot" },
        notes:[["CLICK","Unplugged: one student walks ‘step, turn a little’ around a chalk circle while the class counts."],["ASK","“Why 36?” (36 × 10° = 360°, a full turn.)"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Draw the pivot circle", title:"Loop Sim", ix:"loopsim",
        notes:[["CLICK","Try the presets: Square, Triangle, Pivot circle. Then change Repeat to 30: what happens?"],["CLICK","→ steps: square, triangle, a circle that doesn't close (18 repeats), the full circle."],["ASK","“What's the rule for coming back to the start?” (Repeats × turn = 360°.)"]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"When a loop goes wrong", title:"Loop *bugs*", h:"470px",
        cards:[ { icon:"🔢", t:"Wrong count", d:"Too few or too many repeats: the shape **doesn't close** or goes round twice." }, { icon:"↪️", t:"Wrong turn", d:"The turn is too big or too small: **repeats × turn** isn't **360°**." }, { icon:"📦", t:"Outside the loop", d:"A block is **outside** the repeat when it should be **inside** (or the other way round)." } ],
        notes:[["SAY","“Same debugging steps as last week: predict, run slowly, find it, fix it, test.”"]] },
      { type:"content", phase:"excavate", fs:null, kicker:"Big Project check-in", title:"*Smart Farm* progress",
        bullets:["Has your mechanism got a **brief** and a **stakeholder**?","Could a **loop** help your Scratch simulation (a pivot turning, a gate opening and closing)?","Write **one goal** for this week in your Field Journal."],
        visual:{ level:true },
        notes:[["SAY","1-minute check-in for everyone (not just Technology Big Projects)."]] },
      { type:"paths", phase:"paths", fs:null, minutes:18,
        notes:[["SAY","“Choose your path. Remember: repeats × turn = 360°.”"],["CLICK","Start the 18-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Lamentations 3:22–23."],["NOTE","Analogy: make sure ‘Where does the picture break?’ is discussed."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 360 ÷ 10 = 36."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess. Devices away."],["CLICK","C = wheat sheaves."]] }
    ]
  };

  /* ======================= FRIDAY · ART ======================= */
  const fri = {
    id:"w07-fri", week:7, day:"fri", subject:"art", duration:50,
    title:"Matariki Printmaking", guide:"tom",
    codes:["VA-PK","VA-DI","VA-CI"],
    coverage:"Visual Arts (NZC 2007, Level 3): developing practical knowledge (relief printmaking: incising, inking, printing a series); developing ideas (designing from the winter night sky and the land); communicating and interpreting (demonstration).",
    li:"We are learning to make a relief print inspired by the winter night sky.",
    sc:["I can design a print that shows stars and land.","I can press a design into a foam plate.","I can ink and print it cleanly."],
    vocab:[
      { w:"relief print", def:"a print made from a surface where the raised parts take the ink" },
      { w:"printing plate", def:"the surface you ink and press onto paper (today, a foam sheet)" },
      { w:"incise", def:"to press or cut lines into a surface" },
      { w:"brayer", say:"BRAY-er", def:"a small roller used to spread ink" },
      { w:"mirror image", def:"a picture that is flipped left to right" },
      { w:"edition", def:"a set of prints made from the same plate" }
    ],
    prep:{ min:15, items:["Foam printing plates (or polystyrene meat trays, washed), blunt pencils","Water-based block-printing ink, brayers (rollers), inking trays","Paper (A5 or A4), newspaper, wet wipes, a drying line"] },
    safety:["Aprons on. Ink on hands: wipe before touching paper or clothes.","Pencils: press, don't stab."],
    tikanga:["Students design their own star and land images. Matariki and Puaka can be shown as stars; don't use Māori patterns (kōwhaiwhai, tukutuku) as decoration (§17.4)."],
    hononga:"**Remembering and hoping.** Matariki is a time to remember those who have died, celebrate the harvest and look ahead (Week 6). A print series of the winter sky can carry those ideas too: what you remember, what you're thankful for, what you hope for.",
    paths:[
      { id:"A", name:"The Recorder", product:"Design Studies", steps:["Draw **3 thumbnail designs**: stars above the land.","For each, show **where the lines will be pressed** (they'll print paper-coloured).","Write **WHY** text must be drawn **backwards**."], flying:"Plan an edition of 3 prints in different ink colours." },
      { id:"B", name:"The Maker", product:"Foam-Plate Print Series", steps:["Press your design into the foam with a **blunt pencil**: deep, clear lines.","**Roll ink** thinly and evenly over the plate.","Lay paper on top, rub with your hand, peel it off. Print **3 times**, trying a new colour each time."], flying:"Make a two-colour print by inking the sky and land in different colours." },
      { id:"C", name:"The Demonstrator", product:"Printmaking Demo", steps:["Practise once yourself.","**Demonstrate** the steps to a small group: press, ink, print, peel.","Explain the **mirror image** with an example."], flying:"Explain how to fix a print that's too blotchy or too pale." }
    ],
    supportedShort:"a pre-drawn design to trace, a step card with pictures, partner inking.",
    lens:{
      pillar:"manaaki", title:"Use your gifts",
      look:"Look again at the prints: one plate, many copies, each one a little different.",
      ref:"1 Peter 4:10",
      paraphrase:"Each of you should use whatever gift you have received to serve others, faithfully looking after God's grace in its many forms.",
      talk:[
        { q:"A print can be shared many times. How could you use your art, or another gift, to serve someone?", listen:"Give a print as a gift; make a card; help a friend; use a talent at church or school." },
        { q:"What gifts do you see in the people around you?", listen:"Accept and affirm: kindness, humour, art, sport, music, organising, helping." }
      ],
      live:"Give **one of your prints** to someone this week, with a note saying why."
    },
    clue:{ prompt:"Friday's clue is the Survey Seal: combine this week's four Trig Clues.", answer:66, explain:"8 + 20 + 2 + 36 = 66 → bearing 066°." },
    next:"Next week — Sheet VIII · The Flood. And the Dealer has made us an offer…",
    rubric:[
      { c:"Design", code:"VA-DI",
        d:["Draws some stars.","Stars only, no land."],
        a:["Designs a print showing stars and land.","Stars, Matariki cluster and a mountain line."],
        f:["Plans for the mirror image and the paper-coloured lines.","Wrote text backwards; planned thick lines for strong prints."],
        i:["I can draw stars.","I can design a print with stars and land.","I can plan for the mirror image."] },
      { c:"Plate", code:"VA-PK",
        d:["Lines are faint or broken.","The print shows almost no lines."],
        a:["Presses deep, clear lines into the plate.","Lines print cleanly as paper-colour."],
        f:["Varies line and texture on purpose.","Dots for stars, thick lines for ridges, patterns for the plains."],
        i:["I can press some lines.","I can press deep, clear lines.","I can vary line and texture."] },
      { c:"Printing", code:"VA-PK · VA-CI",
        d:["Prints once, blotchy.","Too much ink."],
        a:["Inks thinly and prints cleanly.","Even ink, clear image."],
        f:["Makes a series and explains the differences.","Three prints in different colours; explains which works best and why."],
        i:["I can make a print.","I can ink and print cleanly.","I can make a series and explain it."] }
    ],
    plan:{
      prior:"Students learned Matariki and Puaka (Week 6) and star colours (Wednesday). They have used line and pattern (Week 4). Some have done potato or stamp printing.",
      kc:["Managing self","Relating to others"],
      sequence:[
        ["0–6","Field Note","Tom's message. Trig Check (Thursday). LI/SC.","Recall; predict."],
        ["6–18","Survey","Relief printing; **Print Plate** (mirror image!); method demo.","Predict; try; plan."],
        ["18–40","Choose Your Path (22 min)","Introduce A/B/C. Roam: “Are your lines deep? Is the ink thin?”","Designs / prints / demo."],
        ["40–45","Through the Lens","1 Peter 4:10 — gallery reflection.","Gallery walk."],
        ["45–50","Survey Seal & Dealer","Survey Seal VII: 8 + 20 + 2 + 36 = 66 → 066°. Sheet VII is missing! The Dealer's Offer. Self-assess; wheat sheaves.","Add; dial; discuss."]
      ],
      diff:{
        supported:"Design to trace; picture step card; partner inking.",
        esol:"Model silently, then name each step; picture glossary.",
        learning:"Bigger plates and thick pencils; one print only; calm screen available.",
        flying:"Two-colour prints; planning text backwards; a series."
      },
      assess:{
        lookFor:["Designs stars and land","Presses clear lines","Prints cleanly"],
        evidence:["Prints (photograph)","Design studies","Exit self-assessment"]
      },
      inquiry:["Which prints go in the triptych folder (Sky panel)?","Who discovered the mirror image themselves?","Prepare the class for the Dealer's offer: what will we decide?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"tom", meta:"Studio · ink on the rollers",
        msg:"The old surveyor stamped every map sheet with a little **printed mark**. Printing lets you make the same picture **again and again**. Today we print the **winter night sky**: Matariki rising over the mountains. One warning: what you draw **won't come out quite the way you expect**…",
        notes:[["SAY","Read the message. 🟡 Tom is fictional."],["ASK","“What do you think will be different about the print?” (Bank guesses.)"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"What does a repeat loop do?", a:"Runs the blocks inside it again a set number of times." }, { q:"How many repeats of turn 10° make a full circle?", a:"36." }, { q:"What's the rule for a shape that closes?", a:"Repeats × turn = 360°." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"content", phase:"excavate", fs:"real", paper:true, kicker:"How it works", title:"*Relief* printing",
        bullets:["Press lines **into** a foam plate. The **flat surface** takes the ink; the **pressed lines** don't.","Roll ink thinly with a **brayer**, lay paper on top, rub, and peel.","The pressed lines come out **paper-coloured**, and the whole picture is a **mirror image**."],
        visual:{ artefact:"printblock" },
        notes:[["CLICK","Demo the whole process in 3 minutes."],["ASK","“Why might text come out backwards?”"]] },
      { type:"interactive", phase:"excavate", fs:"real", paper:true, kicker:"Try it first", title:"Print Plate", ix:"printplate",
        notes:[["CLICK","Draw on the plate, then Print. Try ‘Letters’ and print: the letters come out backwards!"],["CLICK","→ steps: clear, letters, print."],["ASK","“How would you print a word the right way round?” (Write it backwards on the plate.)"]] },
      { type:"content", phase:"excavate", fs:null, paper:true, kicker:"Your turn", title:"Print the *winter sky*",
        bullets:["Design **stars above the land**: Matariki, Puaka or your own star pattern, and a mountain or plain line.","Press **deep, clear lines** with a blunt pencil. Dots make great stars.","Ink **thinly**, print, then print **2 more** in different colours: an **edition**."],
        visual:{ artefact:"starchart" },
        notes:[["SAY","“Thin ink, firm rub, slow peel.”"]] },
      { type:"paths", phase:"paths", fs:null, minutes:22,
        notes:[["SAY","“Choose your path. Hang prints on the drying line.”"],["CLICK","Start the 22-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move. 5-minute gallery reflection."],["SAY","Read 1 Peter 4:10."]] },
      { type:"folioseal", phase:"decode", fs:"story",
        notes:[["SAY","“Four clues. Add them to get the bearing.”"],["CLICK","Tap each ‘?’ tile. 8 + 20 + 2 + 36 = 66. Dial 066° and press ‘Fix the bearing’."],["SAY","The seal cracks… and the sleeve is empty. Sheet VII is missing!"]] },
      { type:"intercept", phase:"decode", fs:"story",
        msg:"Restoration team. Looking for something? I have Sheet VII. Trade me the field book for it. One old notebook for your missing map: fair, isn't it? — D.",
        ask:"Should we trade the field book for Sheet VII? What might we lose?",
        notes:[["SAY","Read it in the Dealer's smooth voice."],["ASK","Take a class vote, but don't decide yet. Bank reasons for Week 8."],["LISTEN","The field book holds the surveyor's notes and clues; it might be worth more; he took the sheet; we shouldn't reward taking things; maybe we can find another way."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = wheat sheaves. Prints on the drying line."]] }
    ]
  };

  BM.WEEKS[7] = {
    n:7,
    story:"Sheet VII should show the race: water across the plains. But the sleeve is empty! This week historians research the Rangitata Diversion Race; geographers explore who uses the mountains; astronomers discover why stars are different colours; coders use loops to draw the pivot circle; and artists print the winter night sky. Friday's bearing cracks the seal on an empty sleeve, and the Dealer offers a trade.",
    hononga:"Arowhenua workers on the race, and rivers as taonga (Mon) · many users, one place; Ngāi Tahu's Statutory Acknowledgement (Tue) · Puaka as a blue supergiant (Wed) · patterns that repeat (Thu) · remembering and hoping at Matariki (Fri). Check all local framing with your Māori lead and Te Rūnanga o Arowhenua (D3).",
    seal:{
      answer:66,
      instruction:"Add the four **Trig Clues** from Monday to Thursday. The total is a **bearing**. Dial it on the theodolite to crack the wax seal.",
      reveal:"🟡 **The seal cracks… and the sleeve is empty.** Sheet VII is **missing**. Only a pencil note is left: *VII — the race. Taken?* Next week: *The Flood*.",
      art:() => { const v = BM.art.sheetArt(7); v.setAttribute("style", "width:100%;height:100%"); return v; }
    },
    lessons:[mon, tue, wed, thu, fri]
  };
})(window.BM);
