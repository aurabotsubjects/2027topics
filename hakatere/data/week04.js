/* ==========================================================
   WEEK 4 — MAP SHEET IV · THE DEED
   Notes: [KEY, text]  KEY = SAY ASK LISTEN IF CLICK TALK DEEPER PACE SAFETY WAIT NOTE TIKANGA
   Facts are sourced in data/sources.js (tags match blueprint §18).
   Sensitive content (blueprint D9, §17.6): Kemp's Deed is told honestly,
   from two perspectives, with no blame on children or families.
   ========================================================== */
(function(BM){
  "use strict";

  /* an aerial braided river, drawn in code for Friday */
  const aerialSVG = () => {
    const v = BM.svg(600, 600, { style:"width:600px;height:600px;border-radius:10px;box-shadow:var(--sh-3)" });
    v.appendChild(BM.s("rect", { width:600, height:600, fill:"#c9b47a" }));
    v.appendChild(BM.art.braids([[300,-30],[250,150],[340,320],[280,470],[320,640]], { seed:21, w0:110, w1:150, threads:7, color:"#2C6F92", sw:6, bedColor:"#a7a59c", bedOpacity:.95 }));
    return v;
  };

  /* the plains built from glacier-fed fans — for Tuesday */
  const fansSVG = () => {
    const s = BM.s, v = BM.svg(600, 600, { style:"width:600px;height:600px;border-radius:10px;box-shadow:var(--sh-3)" });
    v.appendChild(s("rect", { width:600, height:600, fill:"#cfe1e8" }));
    v.appendChild(BM.art.range(600, 600, 170, 110, 8, "#9aa7ab", { snow:"#f4f6f4", peaks:5 }));
    v.appendChild(s("path", { d:"M0 168 C 100 120, 200 150, 300 130 C 400 110, 500 150, 600 128 L600 190 L0 190Z", fill:"#eef5f7", opacity:.9 }));
    v.appendChild(s("text", { x:300, y:110, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":24, fill:"#1F2A30", "letter-spacing":"2" }, "GLACIERS"));
    [[100,180],[300,180],[500,180]].forEach(([x,y]) => v.appendChild(s("path", { d:`M${x} ${y} L${x - 170} 600 L${x + 170} 600Z`, fill:"#c9b47a", opacity:.6 })));
    v.appendChild(BM.art.braids([[100,180],[90,400],[60,620]], { seed:3, w0:14, w1:40, threads:3, color:"#3D8DB3", sw:3, bedOpacity:.6 }));
    v.appendChild(BM.art.braids([[300,180],[320,400],[300,620]], { seed:5, w0:14, w1:40, threads:3, color:"#3D8DB3", sw:3, bedOpacity:.6 }));
    v.appendChild(BM.art.braids([[500,180],[520,400],[560,620]], { seed:7, w0:14, w1:40, threads:3, color:"#3D8DB3", sw:3, bedOpacity:.6 }));
    v.appendChild(s("text", { x:300, y:570, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":26, fill:"#1F2A30", "letter-spacing":"2" }, "OVERLAPPING GRAVEL FANS = THE PLAINS"));
    return v;
  };

  /* ======================= MONDAY · HISTORY ======================= */
  const mon = {
    id:"w04-mon", week:4, day:"mon", subject:"history", duration:50,
    title:"1848: Kemp's Deed — Land, Promises & Perspectives", guide:"nell",
    codes:["SS-H","SS-P","ANZH","SS-C"],
    coverage:"Y6 History (2027): land acquisition in Aotearoa New Zealand and differing views on whether land can be owned. Aotearoa New Zealand's Histories: mana whenua relationships with land; Crown purchases. Practices: comparing perspectives using sources.",
    li:"We are learning what happened in Kemp's Deed and how Kāi Tahu and the Crown saw land differently.",
    sc:["I can describe Kemp's Deed and the promises in it.","I can explain what happened to the reserves and mahika kai.","I can compare two perspectives on owning land."],
    vocab:[
      { w:"deed", def:"a written legal agreement, often about land" },
      { w:"purchase", def:"buying something" },
      { w:"reserve", def:"land kept back for a people or a purpose" },
      { w:"acre", def:"an old unit of land area, about the size of a rugby field" },
      { w:"mahika kai", say:"MAH-hee-kah kai", def:"food-gathering places and the ways food was gathered (Kāi Tahu form of mahinga kai)" },
      { w:"Crown", def:"the government acting for the King or Queen" },
      { w:"perspective", def:"the way a person or group sees something" },
      { w:"whakapapa", say:"FAH-kah-pah-pah", def:"genealogy; the layers of connection between people, ancestors and the land" }
    ],
    prep:{ min:10, items:["Read the teacher notes on tone first (below)","Field Journals","Optional: print the two-perspectives diary frame for Path A"] },
    safety:["Sensitive history (blueprint D9). This is a story of a promise that wasn't kept. Tell it honestly and calmly. No student, family or group in the room is to blame for what officials did in 1848.","Some students are Kāi Tahu or have whānau links to Arowhenua. Let them share only if they want to; never put them on the spot to speak for their iwi."],
    tikanga:["Teach this lesson from Kāi Tahu sources (the Arowhenua narrative) and check it with your Māori lead and Te Rūnanga o Arowhenua before teaching (D3).","Use ‘Kāi Tahu’ or ‘Ngāi Tahu’ consistently, and explain why both forms appear.","The story doesn't end in 1848. Tell students that Ngāi Tahu kept speaking up for more than 140 years, and that we'll learn about Te Kerēme (the Ngāi Tahu claim) and the 1998 settlement in Week 9."],
    hononga:"**A promise remembered.** For Kāi Tahu, Kemp's Deed is not ‘old history’. The promise about reserves and mahika kai was remembered and spoken about for generations, and became part of Te Kerēme, the Ngāi Tahu claim. The Ngāi Tahu Claims Settlement Act was passed in **1998** (Week 9).",
    paths:[
      { id:"A", name:"The Recorder", product:"Two-Perspectives Diary", steps:["Write **two short diary entries** for 12 June 1848: one from a **Kāi Tahu** person at Akaroa, one from a **Crown official**.","Each entry says **what they think was agreed** and **what the land means** to them.","Use only facts from today's slides."], flying:"Add a third entry from 1849, after the reserves were surveyed." },
      { id:"B", name:"The Maker", product:"Map Comparison Poster", steps:["Draw **two maps side by side**: ‘What was promised’ and ‘What was surveyed’.","Show reserves at **about 10 acres a person** and **under 4 acres a person**.","Mark Hakatere: **no reserves surveyed**, mahika kai **not protected**."], flying:"Add a key and a caption explaining what changed and why it mattered." },
      { id:"C", name:"The Storyteller", product:"Talk Show", steps:["Plan a **respectful talk show** with **two guests** who see the land differently.","The host asks: **What was promised? What happened? What does land mean to you?**","Guests answer using facts from today's slides. No invented quotes from real people."], flying:"End with the host asking: ‘What would make things right?’" }
    ],
    supportedShort:"a timeline strip (1843 → 1848 → 1849), a promised/surveyed picture card, sentence frames (“They were promised … but …”).",
    lens:{
      pillar:"panga", title:"The land is Mine",
      look:"Look again at the two maps: what was promised, and what was surveyed.",
      ref:"Leviticus 25:23 · 1 Kings 21",
      paraphrase:"God told Israel: the land must not be sold for ever, because the land is Mine, and you are like guests living on My land. Later, King Ahab took Naboth's family vineyard unjustly, and God sent the prophet Elijah to tell Ahab it was wrong.",
      talk:[
        { q:"Why does God care about promises and land?", listen:"God keeps His promises and wants us to keep ours; land feeds families and holds their history; God cares about fairness and people who are treated unfairly." },
        { q:"In Naboth's story, God noticed the wrong and spoke up. What can people do when they find out a promise was broken?", listen:"Tell the truth about it; listen to the people who were hurt; say sorry; try to put it right (restoration). We'll see how this happened in Week 9." }
      ],
      live:"Think of **one promise** you've made this week. Write in your Field Journal how you'll **keep it**."
    },
    clue:{ prompt:"How many Ngāi Tahu chiefs signed Kemp's Deed at Akaroa?", answer:16, explain:"16 chiefs signed on 12 June 1848. Trig Clue 1 is saved for Friday!" },
    next:"Tuesday — Sam says rivers of ice once filled our mountains. Where did all the gravel come from?",
    rubric:[
      { c:"Kemp's Deed", code:"SS-H · ANZH",
        d:["Says some land was sold.","“They sold land.”"],
        a:["Describes the deed and its promises.","“In 1848, 16 Ngāi Tahu chiefs signed Kemp's Deed at Akaroa. The Crown paid £2,000, and Ngāi Tahu were to keep their kāika and mahika kai.”"],
        f:["Explains why the map and the words caused problems.","“The map attached to the deed said different things from the words, so people disagreed about what had been agreed.”"],
        i:["I know some land was sold.","I can describe Kemp's Deed and its promises.","I can explain why the deed caused disagreement."] },
      { c:"Reserves & mahika kai", code:"SS-H · SS-P",
        d:["Says the reserves were small.","“They got a bit of land.”"],
        a:["Explains what happened to the reserves and mahika kai.","“Mantell surveyed under 4 acres a person, not the promised 10. In Hakatere no reserves were surveyed and mahika kai weren't protected.”"],
        f:["Explains the effect on people's lives.","“Without food places and enough land, families couldn't live the way they had, and that's why they kept asking for it to be put right.”"],
        i:["I know the reserves were small.","I can explain what happened to the reserves and mahika kai.","I can explain how it affected people's lives."] },
      { c:"Perspectives", code:"SS-P · SS-C",
        d:["Gives one point of view.","“The Crown bought it.”"],
        a:["Compares two perspectives on land fairly.","“Many Māori saw land as held for future generations and linked by whakapapa. The Crown saw a sale of title.”"],
        f:["Explains why both perspectives matter for understanding the past.","“If you only read the Crown's papers, you miss what Kāi Tahu believed was promised.”"],
        i:["I can give one point of view.","I can compare two perspectives on land fairly.","I can explain why both perspectives matter."] }
    ],
    plan:{
      prior:"Students know the tākata whenua of Hakatere, kāika and mahika kai (Week 2), and that Tarawhata and Te Rehe guided Walter Mantell through the region in 1848 (Week 3). Many students will have no idea that land in Canterbury was bought; some will.",
      kc:["Thinking","Relating to others","Participating & contributing"],
      sequence:[
        ["0–6","Field Note","Nell's note: a torn deed, a promise underlined twice. Trig Check (Week 3). LI/SC.","Recall; predict."],
        ["6–20","Survey","Say it right; **Kemp's Deed**; Mantell's survey; **Promises vs Reality**; Hakatere; two perspectives.","Compare; discuss."],
        ["20–38","Choose Your Path","Introduce A/B/C. Roam: “What was promised? What happened? Whose view is this?”","Diary / map poster / talk show."],
        ["38–45","Through the Lens","Leviticus 25:23 and 1 Kings 21 — four moves.","Discuss; journal."],
        ["45–50","Trig Clue & Exit","Trig Clue 1 (answer 16); self-assessment; wheat sheaves.","Solve; self-assess."]
      ],
      diff:{
        supported:"Timeline strip; promised/surveyed picture card; sentence frames.",
        esol:"Use the two maps and gesture (big square, small square); picture cards for land, food, river, promise.",
        learning:"Use Promises vs Reality on the board with a partner; shorter product; calm screen available.",
        flying:"Why the map and the words differed; what restoration could look like; link to Week 9."
      },
      assess:{
        lookFor:["Describes the deed and its promises accurately","Explains what happened to reserves and mahika kai","Compares two perspectives fairly"],
        evidence:["Promises vs Reality discussion","Path products (photograph)","Exit self-assessment"]
      },
      inquiry:["Was the tone honest and calm? Did any student feel blamed? Follow up gently.","Who could explain both perspectives fairly?","Bank students' ‘What would make it right?’ ideas for Week 9 (Te Kerēme)."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"nell", meta:"Conservation room · Sheet IV",
        msg:"Sheet IV isn't a map at all. It's a **torn copy of a land deed**, dated **1848**. Most of the writing has faded, but someone has **underlined one promise twice** in red. When you underline something twice, it really matters to you. Let's find out what was promised, and **whether it was kept**.",
        notes:[["SAY","Read the message. 🟡 Nell and the torn copy are fictional; Kemp's Deed is real history."],["SAFETY","Before you start: “Today's history is about a promise that wasn't kept. It happened a long time ago. Nobody in this room is to blame, but it's important that we know the truth.”"],["ASK","“Why would someone underline a promise twice?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"Who did Tarawhata and Te Rehe guide through the region in 1848?", a:"Walter Mantell, a government official." }, { q:"What is mahika kai?", a:"Food-gathering places and the ways food was gathered." }, { q:"What bearing opened Sheet III?", a:"061° (31 + 3 + 24 + 3)." } ],
        notes:[["ASK","Mini-whiteboards, then flip."],["SAY","“Remember Walter Mantell. He's important today.”"]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"sayitright", phase:"excavate", fs:"real", title:"Today's words",
        words:[ { w:"Kāi Tahu", say:"kāi · ta · hu", mean:"the iwi of most of Te Waipounamu (also Ngāi Tahu)" }, { w:"Akaroa", say:"a · ka · ro · a", mean:"the harbour on Banks Peninsula where the deed was signed" }, { w:"mahika kai", say:"ma · hi · ka  kai", mean:"food-gathering places" }, { w:"whakapapa", say:"fa · ka · pa · pa", mean:"layers of connection: people, ancestors, land" } ],
        note:"You'll see both **Kāi Tahu** and **Ngāi Tahu** today. The Crown's papers and the iwi's official name use **Ngāi Tahu**; our district's southern dialect uses **k**.",
        notes:[["TIKANGA","Practise slowly together. Check pronunciations with your Māori lead."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Akaroa · 12 June 1848", title:"*Kemp's Deed*",
        bullets:["Governor Grey sent the land commissioner **Henry Kemp** to buy land from Ngāi Tahu.","On **12 June 1848**, **16 Ngāi Tahu chiefs** signed the deed at **Akaroa**. The Crown paid **£2,000** for the larger part of their land, including Hakatere.","Ngāi Tahu were to **keep their kāika (settlements) and mahika kai**, and were promised **larger reserves** once the land was surveyed."],
        visual:{ map:{ theme:"paper", labels:"both", relief:true }, size:600 },
        notes:[["SAY","Facts from Christchurch City Libraries (Kemp's Purchase) and the Arowhenua narrative."],["NOTE","The Arowhenua narrative describes the block as about 14 million acres. Many students won't know what that means; use ‘most of Canterbury’."],["ASK","“£2,000 for most of Canterbury. What do you think about that price?” Accept views, then: “Historians say it's important to also ask what each side *thought* they were agreeing to.”"]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Surveying the promise", title:"Mantell's *reserves*",
        bullets:["Later in 1848, **Walter Mantell** surveyed the reserves, guided by **Tarawhata and Te Rehe**.","He **cut the promised reserves down**: under **four acres a person**, instead of the promised **ten**. He also left out some cultivated land and mahika kai.","The **map** attached to the deed showed **different things** from the deed's **words**, which caused confusion and argument for years."],
        visual:{ artefact:"sketch" },
        notes:[["SAY","Christchurch City Libraries says Mantell ‘deliberately’ cut the reserves down. Use the word carefully: it's the source's judgement, and it's backed by the reserve sizes."],["ASK","“Tarawhata and Te Rehe guided Mantell. How might they have felt about what he did?”"],["NOTE","The signatory Hone Tikao objected to the terms for the Akaroa area and disputed the process with Mantell (CCL)."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Two maps", title:"Promises vs Reality", ix:"promises",
        notes:[["CLICK","Start on ‘Promised’. Move the slider to choose how many people live in each kāika. Then press → for ‘Surveyed’ and → again for ‘Hakatere’."],["ASK","“If 60 people lived in a kāika, how much land did they lose?” (600 → under 240 acres.)"],["NOTE","The squares are a model to compare sizes, not real reserve maps."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Here, in our place", title:"What happened in *Hakatere*?",
        bullets:["The Arowhenua narrative records that **no reserves were surveyed in Hakatere**.","Hakatere's **mahika kai**, the eel, bird and plant places we learned about in Week 2, were **not protected** as promised.","Kāi Tahu **kept speaking up** about the promise for generations. That story continues in **Week 9**."],
        visual:{ map:{ theme:"paper", labels:"mi", relief:true }, size:560 },
        notes:[["SAY","Facts from Tākata Whenua o Hakatere (Te Rūnanga o Arowhenua)."],["NOTE","The narrative notes that some reserves were later made at Rakaia and Ashburton (1877). Mention this only if asked, and say it was nearly 30 years later."],["TIKANGA","Don't add details the narrative doesn't give. Write students' questions down for your Māori lead."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Two ways of seeing", title:"Can land be *owned*?", h:"480px",
        cards:[ { icon:"🌿", t:"Many Māori", d:"Land was held by the people for **future generations**, connected to them by **whakapapa**, and used **in its seasons** for mahika kai." }, { icon:"📜", t:"The Crown", d:"Land could be **bought and sold**. After the sale, it was surveyed into blocks, given **title**, and sold to settlers." }, { icon:"❓", t:"The big question", d:"If two groups mean **different things** by ‘selling land’, what was really agreed? Historians read **both sides' sources** to find out." } ],
        notes:[["SAY","“Many Māori, not all. People in a group don't all think the same.”"],["TIKANGA","Keep this general and respectful. Ask your Māori lead how Arowhenua would describe their relationship with the whenua."],["ASK","“Which view is closest to how your family thinks about land? Is there a bit of both?”"]] },
      { type:"discussion", phase:"excavate", fs:"real", kicker:"Turn & Talk", q:"A promise was made in 1848 and **not kept**. When people find that out, what **should** happen?", sub:"Think about telling the truth, saying sorry, and putting things right.", talk:60,
        notes:[["TALK","60-second talk, then share."],["LISTEN","Tell the truth; listen to the people affected; say sorry; give something back; make a new agreement."],["SAY","“Bank these ideas. In Week 9 we'll see what actually happened in 1998.”"]] },
      { type:"paths", phase:"paths", fs:null, minutes:18,
        notes:[["SAY","“Choose your path. Be fair to both perspectives, and use only today's facts.”"],["CLICK","Start the 18-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Leviticus 25:23, then tell the story of Naboth's vineyard (1 Kings 21) in two minutes."],["NOTE","Keep the focus on God's care for fairness and truth-telling, not on blaming anyone today."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 16."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess. Thank students for listening carefully to a hard story."],["CLICK","C = wheat sheaves."]] }
    ]
  };

  /* ======================= TUESDAY · GEOGRAPHY ======================= */
  const tue = {
    id:"w04-tue", week:4, day:"tue", subject:"geography", duration:50,
    title:"Ice & Gravel: Glaciers, the Plains & Braided Rivers", guide:"sam",
    codes:["SS-G","SS-P"],
    coverage:"Y5–6 Geography (2027): how natural processes shape places (glaciers, rivers, gravel plains); environments and the species that depend on them; reading aerial images and maps.",
    li:"We are learning how glaciers and rivers built the Canterbury Plains, and why our rivers braid.",
    sc:["I can describe how glaciers carved the mountains.","I can explain how gravel built the plains.","I can explain what a braided river is and why it matters."],
    vocab:[
      { w:"glacier", def:"a huge, slow-moving river of ice" },
      { w:"Ice Age", def:"a time when much more of the Earth was covered in ice" },
      { w:"gravel", def:"small stones and pebbles; shingle" },
      { w:"fan", def:"a spread-out, fan-shaped pile of gravel where a river leaves the hills" },
      { w:"braided river", def:"a river with many channels that split and rejoin over a wide gravel bed" },
      { w:"channel", def:"the path the water flows along" },
      { w:"flood", def:"when a river rises and spreads over land that is usually dry" },
      { w:"wrybill / ngutu pare", say:"ngoo-too PAH-reh", def:"a small braided-river bird with a beak that bends to the right" }
    ],
    prep:{ min:10, items:["Optional (Path B): a sand tray or a plastic tub of sand and gravel, a jug of water, a block to tilt it","Towels!","Field Journals"] },
    safety:["Sand tray: wipe up spills straight away; no throwing sand."],
    tikanga:["Braided rivers are mahika kai and ara tawhito (Weeks 2–3). The Kāi Tahu names of the birds (ngutu pare, pohowera, kakī) are on today's slides; check pronunciations with your Māori lead."],
    hononga:"**Rivers as trails and food places.** In Weeks 2 and 3 we learned the braided rivers were mahika kai and ara tawhito for Kāi Tahu. The same gravel beds are home to birds like the **ngutu pare** (wrybill), **pohowera** (banded dotterel) and **kakī** (black stilt).",
    paths:[
      { id:"A", name:"The Recorder", product:"Explanation with Diagram", steps:["Draw a labelled diagram: **glacier → river → gravel fan → plains → sea**.","Write an explanation: **how gravel built the plains** and **why our rivers braid**.","Include one **braided-river bird** and why it needs the gravel."], flying:"Explain why the channels move after a flood." },
      { id:"B", name:"The Maker", product:"Sand-Tray Braided River", steps:["Tilt a tray of **sand and gravel**. Pour water slowly from the top.","Watch: do channels **split and rejoin**? Draw what you see.","Pour faster (a ‘flood’). How do the channels **change**?"], flying:"Add more gravel. Does the river braid more?" },
      { id:"C", name:"The Storyteller", product:"River Ranger Talk", steps:["Plan a **1-minute talk** as a DOC river ranger.","Explain **what a braided river is** and **who lives there**.","Ask visitors to **give nesting birds space**: dogs on leads, keep off nesting areas."], flying:"Explain one threat to braided rivers and what people do about it." }
    ],
    supportedShort:"a diagram to label (glacier, river, fan, plains, sea), bird picture cards, sentence frames.",
    lens:{
      pillar:"aroha", title:"Springs in the valleys",
      look:"Look again at the braids: water from the mountains spreading out across the plains.",
      ref:"Psalm 104:10",
      paraphrase:"He makes springs pour water into the valleys; it flows between the mountains.",
      talk:[
        { q:"Psalm 104 praises God for water flowing from the mountains. What does our river water give the plains?", listen:"Drinking water; water for farms and stock; food (eels, fish); homes for birds; gravel for building." },
        { q:"If God gave the rivers as a gift, how should we look after them?", listen:"Keep them clean; give nesting birds space; don't waste water; care for the people downstream." }
      ],
      live:"Next time you cross the Hakatere bridge, look down at the **braids** and say thank you for the water."
    },
    clue:{ prompt:"More than what percentage of New Zealand's braided riverbed area is in Canterbury? Divide it by 10.", answer:6, explain:"More than 60%; 60 ÷ 10 = 6. Trig Clue 2 is saved!" },
    next:"Wednesday — Dr Priya says Matariki vanishes from the sky in May. Where does it go?",
    rubric:[
      { c:"Glaciers", code:"SS-G",
        d:["Says there used to be ice.","“There was ice on the mountains.”"],
        a:["Describes glaciers carving the mountains.","“Glaciers up to 1,000 m thick slowly carved out valleys and lake basins.”"],
        f:["Explains the main teaching and the scientists' estimate accurately.","“We believe there was one Ice Age after the Flood. Many scientists think there were many ice ages over about two million years.”"],
        i:["I know there used to be ice.","I can describe how glaciers carved the mountains.","I can explain both the main teaching and the scientists' estimate."] },
      { c:"Gravel plains", code:"SS-G",
        d:["Says the plains are flat.","“The plains are flat.”"],
        a:["Explains how gravel built the plains.","“Glacier-fed rivers carried gravel out of the Alps and dropped it in overlapping fans.”"],
        f:["Links the plains to farming and water today.","“The gravel holds groundwater, which farms and towns use.”"],
        i:["I know the plains are flat.","I can explain how gravel built the plains.","I can link the plains to farming and water today."] },
      { c:"Braided rivers", code:"SS-G · SS-P",
        d:["Says the river has lots of bits.","“It has lots of streams.”"],
        a:["Explains what a braided river is and why it matters.","“Many channels split and rejoin over a wide gravel bed. Over 60% of New Zealand's is in Canterbury, and birds nest there.”"],
        f:["Explains how flow and gravel change the river.","“In a flood the water fills the bed and moves gravel, so the channels end up in new places.”"],
        i:["I know our river has many channels.","I can explain what a braided river is and why it matters.","I can explain how flow and gravel change the river."] }
    ],
    plan:{
      prior:"Students know the Alps are pushed up by the plates and worn down by rain, frost and rivers (Week 2), and that the rivers were trails and food places (Weeks 2–3). Many have crossed the Hakatere bridge and seen the braids.",
      kc:["Thinking","Using language, symbols & texts"],
      sequence:[
        ["0–6","Field Note","Sam's message. Trig Check (Monday). LI/SC.","Recall; predict."],
        ["6–20","Survey","Glaciers; **D8 side note**; gravel fans; **Braid Maker**; braided rivers and their birds.","Observe; explain; discuss."],
        ["20–38","Choose Your Path","Introduce A/B/C. Roam: “Where did the gravel come from? Why does it split?”","Diagram / sand tray / ranger talk."],
        ["38–45","Through the Lens","Psalm 104:10 — four moves.","Discuss; notice the river."],
        ["45–50","Trig Clue & Exit","Trig Clue 2 (answer 6); self-assessment; wheat sheaves.","Solve; self-assess."]
      ],
      diff:{
        supported:"Diagram to label; bird cards; sentence frames.",
        esol:"Pour water on a tilted tray and name what happens; picture glossary.",
        learning:"Hands-on sand tray; partner talk; calm screen available.",
        flying:"Moving channels; threats to braided rivers; groundwater."
      },
      assess:{
        lookFor:["Describes glaciers carving valleys","Explains gravel fans building the plains","Explains braided rivers and why they matter"],
        evidence:["Braid Maker predictions","Path products (photograph)","Exit self-assessment"]
      },
      inquiry:["Could students explain both the main teaching and the side note accurately and respectfully?","Did the sand tray work? Note tips for next time.","Who linked the rivers back to mahika kai and ara tawhito?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"sam", meta:"Hakatere Gorge · scree slope",
        msg:"Flint and I climbed up above the gorge today. From there you can see how the river **spreads out** onto the plains like the fingers of a hand, over **kilometres of grey gravel**. Every stone came down from the mountains. But how? Long ago, these valleys were full of **ice**.",
        notes:[["SAY","Read the message. 🟡 Sam and Flint are fictional."],["ASK","“Has anyone stood on the riverbed? What's it made of?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"How many Ngāi Tahu chiefs signed Kemp's Deed?", a:"16, at Akaroa on 12 June 1848." }, { q:"What size reserves were promised, and what did Mantell survey?", a:"About 10 acres a person promised; under 4 acres surveyed." }, { q:"Name one thing that makes slips more likely.", a:"Steep slopes, broken rock, heavy rain or an earthquake." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Rivers of ice", title:"When *glaciers* filled the valleys",
        bullets:["A **glacier** is a huge, slow river of ice.","Glaciers up to **1,000 m thick** once covered much of the Southern Alps.","As they moved, they **ground and carved** the rock, scooping out **valleys and lake basins**, like the basins of Ō Tū Wharekai / the Ashburton Lakes."],
        visual:{ artefact:"stones" },
        notes:[["SAY","Facts from Te Ara (Mountains)."],["ASK","“How could ice carve rock?”"],["LISTEN","It's heavy; it carries stones frozen inside it like sandpaper; it moves slowly for a long time."]] },
      { type:"sidenote", phase:"excavate", fs:"real", kicker:"When was the Ice Age?", title:"Ice after the Flood",
        main:"**God made the heavens and the earth** (Genesis 1:1), and the Bible tells of a great **Flood** in Noah's day (Genesis 6–9).\n\nYoung-earth creation scientists believe there was **one Ice Age**, in the centuries **after the Flood**. They suggest that warm oceans gave off lots of water vapour, while volcanic ash kept the land cool, so huge amounts of snow fell, built up into ice, and lasted a **few hundred years**.",
        refs:"Genesis 1:1 · Genesis 6–9 · Job 38:29–30",
        side:{ text:"Many scientists estimate there were **repeated ice ages** over about the **last two million years**, with warmer times in between.", src:"Te Ara — Mountains" },
        notes:[["SAY","“As Christians, we believe God made everything, and our school teaches that the earth is young. Many scientists think there were many ice ages over a much longer time. It's good to know what they say and why.”"],["NOTE","Measurements stay as measurements: the thickness of the ice is estimated from the marks glaciers left on the rock. Ages are estimates based on assumptions."],["IF","A student asks who's right → “That's a great question to keep asking. What we know for sure is who made the mountains and the water.” Model respect; never mock either view."],["NOTE","Rubrics never assess which view a student holds (D8)."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Where the gravel went", title:"How gravel built the *plains*",
        bullets:["Rivers fed by the glaciers carried **huge loads of gravel** out of the Alps.","Where each river left the hills, it **spread out and dropped its gravel** in a fan shape.","The **overlapping fans** of these rivers built the **Canterbury Plains**, New Zealand's **largest flat area**. They slope gently down to the sea, about **1 m for every 132 m**."],
        visual:{ svg:fansSVG },
        notes:[["SAY","Facts from Te Ara (Canterbury region): ‘formed from the overlapping fans of glacier-fed rivers’."],["ASK","“If the plains are made of gravel, what happens to rain that soaks in?”"],["LISTEN","It goes down into the gravel; it's stored underground (groundwater); wells and springs use it."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Gravel + water", title:"Braid Maker", ix:"braidmaker",
        notes:[["CLICK","Move the gravel slider, then choose Low / Normal / Flood. Press ‘Next year’ to see the channels move. (→ steps through: more gravel, flood, next year.)"],["ASK","“What happens to the channels after a flood?”"],["NOTE","This is a simplified model: real rivers take years to change, and floods can be dangerous."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Our rivers", title:"*Braided* rivers",
        bullets:["Most big Canterbury rivers, including the **Hakatere**, have **braided gravel beds**: many channels that **split and rejoin**. They only flow bank to bank in a **big flood**.","**More than 60%** of New Zealand's braided riverbed area is in **Canterbury**.","Birds like the **ngutu pare / wrybill**, **pohowera / banded dotterel** and **kakī / black stilt** depend on them, but face weeds, predators, land-use change and disturbance."],
        visual:{ svg:aerialSVG },
        notes:[["SAY","Facts from Te Ara (Canterbury region) and DOC (2024)."],["ASK","“Why would a bird nest on bare gravel?”"],["LISTEN","Camouflage: eggs look like stones; it can see predators coming; it's near the water and food."]] },
      { type:"discussion", phase:"excavate", fs:"real", kicker:"Turn & Talk", q:"What could **you and your family** do to help birds nesting on the riverbed?", sub:"DOC asks people to give nesting river birds space in spring and summer.", talk:45,
        notes:[["TALK","45-second talk."],["LISTEN","Dogs on leads; keep vehicles off the riverbed; walk around nesting areas; don't leave rubbish; report predators."]] },
      { type:"paths", phase:"paths", fs:null, minutes:18,
        notes:[["SAY","“Choose your path. Path B: towels ready!”"],["CLICK","Start the 18-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Psalm 104:10."],["ASK","“If God gave the rivers as a gift, how should we look after them?”"]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 60 ÷ 10 = 6."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = wheat sheaves."]] }
    ]
  };

  /* ======================= WEDNESDAY · SCIENCE ======================= */
  const wed = {
    id:"w04-wed", week:4, day:"wed", subject:"science", duration:50,
    title:"Tilt & Seasons: Why Matariki Rises in Winter", guide:"priya",
    codes:["SC-ES","SC-P"],
    coverage:"Y5 Science (2027): Earth's tilt causes the seasons through changes in the directness of sunlight, day length and temperature. Using models to explain patterns in the sky through the year.",
    li:"We are learning how Earth's tilt causes the seasons, and why we see different stars at different times of year.",
    sc:["I can explain how Earth's tilt causes the seasons.","I can model the seasons with a torch and globe.","I can explain why Matariki appears before dawn in midwinter."],
    vocab:[
      { w:"tilt", def:"a lean to one side; Earth's axis leans about 23½°" },
      { w:"orbit", def:"the path one object takes around another; Earth orbits the Sun once a year" },
      { w:"season", def:"one of the four parts of the year: summer, autumn, winter, spring" },
      { w:"hemisphere", def:"half of the Earth; we live in the Southern Hemisphere" },
      { w:"direct sunlight", def:"sunlight that hits the ground from high in the sky, so it's stronger" },
      { w:"day length", def:"how many hours of daylight there are between sunrise and sunset" },
      { w:"heliacal rising", say:"hee-LIE-uh-kul", def:"the first time a star is seen again before dawn after being hidden by the Sun's glare" }
    ],
    prep:{ min:5, items:["A torch (the Sun) and a globe or ball on a stick, with a sticker on NZ","Keep the globe's axis tilted the same way as you walk it around the torch","Optional: a darkened room"] },
    safety:["Never look at the Sun.","Dawn stargazing happens at home with an adult."],
    tikanga:["The rising of Matariki in the dawn sky marks the Māori New Year for many iwi. Many southern iwi, including Ngāi Tahu, look to Puaka; we'll learn about Matariki and Puaka in Week 6. Check local framing with your Māori lead (§17.5)."],
    hononga:"**Watching for Matariki.** Māori watched for Matariki and Puaka to reappear in the dawn sky in midwinter to mark the new year, alongside the Moon. Knowing *why* a star reappears comes from the same careful watching of the sky through the year.",
    paths:[
      { id:"A", name:"The Recorder", product:"Season Explanation", steps:["Draw Earth on **two sides** of the Sun: **December** and **June**. Keep the **tilt the same way** in both.","Label which hemisphere leans **towards** the Sun in each.","Explain why NZ has **summer in December** and **winter in June**."], flying:"Explain why Matariki can't be seen in May but appears before dawn in late June." },
      { id:"B", name:"The Maker", product:"Torch & Globe Model", steps:["Tilt a globe and walk it **around a torch**, keeping the tilt pointing the **same way**.","Stop at **December** and **June**. Where does the light hit NZ more **directly**?","Draw and label your model."], flying:"Put a ‘Matariki’ sign on the wall. When does NZ's night side face it?" },
      { id:"C", name:"The Storyteller", product:"Weather Presenter", steps:["Plan a **1-minute TV weather segment** explaining **why it's winter**.","Use the words **tilt, direct sunlight, day length**.","End with a **Matariki** tip: when and where to look."], flying:"Answer a viewer who says ‘It's winter because we're further from the Sun.’" }
    ],
    supportedShort:"a December/June diagram to complete, picture cards (tilt, orbit, summer, winter), sentence frames.",
    lens:{
      pillar:"manaaki", title:"Summer and winter will not cease",
      look:"Look again at the orbit: summer, autumn, winter, spring, every year without fail.",
      ref:"Genesis 8:22",
      paraphrase:"As long as the earth lasts, seedtime and harvest, cold and heat, summer and winter, day and night will never stop.",
      talk:[
        { q:"God made this promise after the Flood. How do the seasons show that God keeps His promises?", listen:"They come every year; farmers can plan; the Sun and stars keep their pattern; God is faithful." },
        { q:"Farmers plan their year around the seasons. How does God's faithfulness help us plan and care for others?", listen:"We can trust Him; we can plant and harvest; we can be ready for winter; we can share food." }
      ],
      live:"Write Genesis 8:22 in your Field Journal beside a little drawing of the **four seasons**."
    },
    clue:{ prompt:"How many seasons are there in a year?", answer:4, explain:"Summer, autumn, winter and spring: 4. Trig Clue 3 is saved!" },
    next:"Thursday — Liv needs to get hay bales up into the loft. Is there an easier way than carrying them?",
    rubric:[
      { c:"Tilt & seasons", code:"SC-ES",
        d:["Says it's cold in winter.","“Winter is cold.”"],
        a:["Explains how the tilt causes the seasons.","“Earth is tilted. In December our half leans towards the Sun, so sunlight is more direct and days are longer: summer.”"],
        f:["Corrects the ‘closer to the Sun’ misconception with evidence.","“It can't be distance: when it's summer here, it's winter in the north at the same time.”"],
        i:["I know winter is colder.","I can explain how the tilt causes the seasons.","I can explain why it isn't about distance from the Sun."] },
      { c:"Modelling", code:"SC-P",
        d:["Shows a globe and torch.","Globe not tilted."],
        a:["Models the seasons with the tilt kept the same way.","Walks the tilted globe around the torch; points out December and June."],
        f:["Uses the model to predict something new.","Predicts when NZ's night side faces Matariki."],
        i:["I can show a globe and torch.","I can model the seasons with the tilt kept the same way.","I can use my model to predict something new."] },
      { c:"Matariki rising", code:"SC-ES",
        d:["Knows Matariki is in winter.","“We see it in winter.”"],
        a:["Explains why Matariki appears before dawn in midwinter.","“In May the Sun is in front of Matariki, so its glare hides it. As Earth moves on, it appears again just before dawn in late June.”"],
        f:["Links the orbit to the changing night sky through the year.","“Our night side faces a different direction each month, so we see different stars.”"],
        i:["I know Matariki is seen in winter.","I can explain why Matariki appears before dawn in midwinter.","I can explain why the night sky changes through the year."] }
    ],
    plan:{
      prior:"Students know that Earth spins once a day, causing day and night and the apparent movement of the stars (Week 3). Common misconception: ‘summer is when Earth is closer to the Sun’.",
      kc:["Thinking","Using language, symbols & texts"],
      sequence:[
        ["0–6","Field Note","Dr Priya's message. Trig Check (Tuesday). LI/SC.","Recall; predict."],
        ["6–20","Survey","The tilt; torch-and-globe demo; **Orbit & Tilt**; why Matariki rises in midwinter.","Predict; observe; explain."],
        ["20–38","Choose Your Path","Introduce A/B/C. Roam: “Which way is it tilted? Is the Sun in the way?”","Explanation / model / weather segment."],
        ["38–45","Through the Lens","Genesis 8:22 — four moves.","Discuss; journal."],
        ["45–50","Trig Clue & Exit","Trig Clue 3 (answer 4); self-assessment; wheat sheaves.","Solve; self-assess."]
      ],
      diff:{
        supported:"Diagram to complete; picture cards; sentence frames.",
        esol:"Lean your body to show tilt; act out the orbit around a ‘Sun’ student.",
        learning:"Hands-on torch and globe; partner work; calm screen available.",
        flying:"The distance misconception; the changing night sky; heliacal rising."
      },
      assess:{
        lookFor:["Explains tilt → seasons","Models the seasons with the tilt kept constant","Explains the Matariki rising"],
        evidence:["Demo predictions","Path products (photograph)","Exit self-assessment"]
      },
      inquiry:["Who still thinks it's about distance? Use the ‘north and south at the same time’ argument.","Who kept the tilt pointing the same way in the model?","Note Matariki questions for Week 6."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"priya", meta:"Observatory · late June, before dawn",
        msg:"Every night in May I looked for **Matariki**, and every night it was **gone**. Not cloudy: just gone. Then, one freezing morning in **late June**, there it was, low in the **north-east**, just before sunrise. Where did it go? The answer has to do with **why we have winter**.",
        notes:[["SAY","Read the message. 🟡 Dr Priya is fictional."],["ASK","“Why do we have winter?” Write answers down; don't correct yet."],["LISTEN","Common: ‘We're further from the Sun.’ Keep it on the board to test later."]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"What built the Canterbury Plains?", a:"Overlapping gravel fans from glacier-fed rivers." }, { q:"What is a braided river?", a:"Many channels that split and rejoin over a wide gravel bed." }, { q:"How long does Earth take to spin once?", a:"About 24 hours: one day." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"A leaning planet", title:"Earth's *tilt*",
        bullets:["Earth's axis is **tilted** about **23½°**, and it **always leans the same way** in space as Earth orbits the Sun.","When our **Southern Hemisphere** leans **towards** the Sun, sunlight is **more direct** and days are **longer**: **summer**.","When we lean **away**, the Sun is **lower**, days are **shorter** and it's colder: **winter**."],
        visual:{ artefact:"starchart" },
        notes:[["CLICK","Demo: walk the tilted globe around the torch. Keep the axis pointing at the same wall corner the whole time."],["SAY","Curriculum: Year 5 Science, Earth's tilt and the seasons."],["ASK","“So is summer because we're closer to the Sun?” Hold the question for the interactive."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Around the Sun", title:"Orbit & Tilt", ix:"orbittilt",
        notes:[["CLICK","Use the month buttons or slider. Press → to step: late June, December, March, May."],["ASK","At December: “NZ is having summer. What's happening in the north?” (Winter.) “So can it be about distance?”"],["SAY","“Fun fact: Earth is actually closest to the Sun in early January, during our summer, but only by a little. The tilt matters much more.”"],["NOTE","Day lengths and Sun heights are approximate for Mid Canterbury."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Where did Matariki go?", title:"Why Matariki rises in *winter*",
        bullets:["As Earth orbits, our **night sky shifts** by almost **1° every day**, so different stars are on our night side through the year.","From about **mid-April to mid-June**, the **Sun is in front of Matariki**. Its **glare hides** the cluster for about two months.","After mid-June, Matariki reappears **low in the north-east, just before dawn**, a little higher each day. This first dawn appearance is called its **heliacal rising**."],
        visual:{ artefact:"starchart" },
        notes:[["SAY","Facts from Museums Wellington (‘Matariki is a heliacal tradition’) and Te Ara (Matariki)."],["ASK","“Why can't we see stars that are near the Sun?”"],["LISTEN","The Sun's light is too bright; they're up during the day."],["TIKANGA","Matariki's rising, with the Moon, marks the Māori New Year for many iwi. Many southern iwi look to Puaka (Week 6)."]] },
      { type:"discussion", phase:"excavate", fs:"real", kicker:"Turn & Talk", q:"If Earth had **no tilt at all**, what would happen to our **seasons**?", sub:"Think about the Sun's height and day length through the year.", talk:45,
        notes:[["TALK","45-second talk."],["LISTEN","No seasons, or almost none; the same day length all year; farmers couldn't plan seedtime and harvest the same way."]] },
      { type:"paths", phase:"paths", fs:null, minutes:18,
        notes:[["SAY","“Choose your path. Keep the tilt pointing the same way!”"],["CLICK","Start the 18-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Genesis 8:22."],["ASK","“How do the seasons show that God keeps His promises?”"]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 4."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess. Revisit the ‘further from the Sun’ idea on the board: was it right?"],["CLICK","C = wheat sheaves."]] }
    ]
  };

  /* ======================= THURSDAY · TECHNOLOGY ======================= */
  const thu = {
    id:"w04-thu", week:4, day:"thu", subject:"technology", duration:50,
    title:"Pulleys & Linkages: The Hay Hoist", guide:"liv",
    codes:["TE-TK","TE-TP","SC-MF"],
    coverage:"Y5 Science (2027): simple machines, including pulleys, change the size or direction of a force. Technology (NZC 2007 L3): technological modelling; mechanisms in technological systems.",
    li:"We are learning how pulleys and linkages change the size and direction of a force.",
    sc:["I can explain the difference between a fixed and a moving pulley.","I can explain what a linkage does.","I can build a pulley or linkage model and test it."],
    vocab:[
      { w:"pulley", def:"a wheel with a groove that a rope runs over" },
      { w:"fixed pulley", def:"a pulley fixed in one place; it changes the direction of the pull" },
      { w:"moving pulley", def:"a pulley attached to the load; it moves up with it and halves the effort" },
      { w:"block and tackle", def:"a set of pulleys working together to lift heavy loads" },
      { w:"effort", def:"the push or pull you put in" },
      { w:"load", def:"the thing being moved or lifted" },
      { w:"linkage", def:"bars joined by pivots so that moving one part moves another" }
    ],
    prep:{ min:15, items:["Cotton reels (or bottle-top pulleys), skewers, string, tape, small paper cups for loads, washers or coins as weights","Card strips and split pins (for linkages)","Optional: a real pulley or a clothesline pulley to show"] },
    safety:["Ropes and string: never around necks.","No standing on chairs to hang pulleys; the teacher sets the top bar.","Skewers: points taped or snipped."],
    tikanga:[],
    hononga:"**Lifting together.** Before machines, heavy loads like waka and building timbers were moved by many people pulling together on ropes, using rollers and levers. Pulleys let fewer people lift more.",
    paths:[
      { id:"A", name:"The Recorder", product:"Pulley Diagram", steps:["Draw and label a **fixed pulley**, a **moving pulley** and a **block and tackle**.","For each, write the **effort** needed and the **rope pulled** for a 1 m lift.","Write the rule: ‘More supporting ropes means…’"], flying:"Explain why the work done stays the same." },
      { id:"B", name:"The Maker", product:"Cotton-Reel Hay Hoist", steps:["Push a skewer through a **cotton reel** and tape it to the top bar: a **fixed pulley**.","Run string over it to a **paper-cup ‘bale’** with coins in it. Lift it by pulling **down**.","Add a **second reel on the cup** to make a moving pulley. Does it feel easier?"], flying:"Make a card linkage that pulls the string when you push a lever." },
      { id:"C", name:"The Storyteller", product:"Demo-and-Explain", steps:["Use the Pulley Lab or a model to **demonstrate** to a small group.","Explain **fixed vs moving** pulleys and the **trade-off**: less effort, more rope.","Ask your audience one check question."], flying:"Explain a linkage you can find in the classroom or on a farm." }
    ],
    supportedShort:"a pre-built fixed-pulley stand, a labelled diagram to copy, an effort/rope table, partner pairing.",
    lens:{
      pillar:"manaaki", title:"Carry each other's burdens",
      look:"Look again at the pulley: the load shared between several ropes, so each one carries less.",
      ref:"Galatians 6:2",
      paraphrase:"Carry each other's burdens, and in this way you will do what Christ asks.",
      talk:[
        { q:"A block and tackle shares the load between several ropes. How is that like carrying each other's burdens?", listen:"When we share a hard thing, it's lighter for each person; friends help; nobody has to lift it alone." },
        { q:"Where does the picture break?", listen:"Ropes don't choose to help, people do; some burdens are feelings, not weights; Jesus carries what we can't." }
      ],
      live:"This week, **help someone carry** something: a load, a job, or a worry."
    },
    clue:{ prompt:"A single fixed pulley changes the force's… Direction = 1, Size = 2.", answer:1, explain:"A single fixed pulley changes the direction of the force (you pull down to lift up). Answer: 1. Trig Clue 4 is saved for Friday!" },
    next:"Friday — Tom's been up in a plane over the Hakatere. From above, the river looks like a drawing.",
    rubric:[
      { c:"Pulleys", code:"TE-TK · SC-MF",
        d:["Says a pulley helps lift.","“It helps you lift.”"],
        a:["Explains fixed vs moving pulleys.","“A fixed pulley changes the direction: pull down to lift up. A moving pulley halves the effort but you pull twice as much rope.”"],
        f:["Explains the trade-off with numbers.","“With 4 supporting ropes, a 200 N bale needs about 50 N, but you pull 4 m of rope for a 1 m lift.”"],
        i:["I know a pulley helps lift.","I can explain fixed vs moving pulleys.","I can explain the trade-off with numbers."] },
      { c:"Linkages", code:"TE-TK",
        d:["Names a moving part.","“That bit moves.”"],
        a:["Explains what a linkage does.","“Bars joined by pivots: push one end and the other end moves the other way.”"],
        f:["Finds a linkage in a real machine.","“A tractor's three-point linkage lifts the plough when the driver pulls a lever.”"],
        i:["I can name a moving part.","I can explain what a linkage does.","I can find a linkage in a real machine."] },
      { c:"Build & test", code:"TE-TP",
        d:["Builds a pulley with help.","String slips off the reel."],
        a:["Builds a working pulley or linkage and tests it.","Lifts the cup by pulling down; records what happens."],
        f:["Improves the model after testing.","Adds a moving pulley and measures the difference."],
        i:["I can build a pulley with help.","I can build a working pulley or linkage and test it.","I can improve my model after testing."] }
    ],
    plan:{
      prior:"Students know levers (Week 2) and wheels, axles and gears (Week 3), including the trade-off of less effort for more distance. A pulley is a wheel and axle with a rope.",
      kc:["Thinking","Participating & contributing","Managing self"],
      sequence:[
        ["0–6","Field Note","Liv's message. Trig Check (Wednesday). LI/SC.","Recall; predict."],
        ["6–18","Survey","Workshop safety; pulleys; **Pulley Lab**; linkages; design brief.","Predict effort; compare; discuss."],
        ["18–38","Choose Your Path","Introduce A/B/C. Roam: “Which way do you pull? How much rope?”","Diagram / hay hoist / demo."],
        ["38–45","Through the Lens","Galatians 6:2 — four moves.","Discuss; help someone."],
        ["45–50","Trig Clue & Exit","Trig Clue 4 (answer 1); self-assessment; wheat sheaves.","Solve; self-assess; tidy up."]
      ],
      diff:{
        supported:"Pre-built stand; diagram to copy; effort/rope table.",
        esol:"Act it out with a real rope over a bar; picture glossary.",
        learning:"Hands-on build with a partner; calm screen available.",
        flying:"The work stays the same; linkages in real machines."
      },
      assess:{
        lookFor:["Explains fixed vs moving pulleys","Explains a linkage","Builds and tests a model"],
        evidence:["Pulley Lab predictions","Models (photograph)","Exit self-assessment"]
      },
      inquiry:["Who connected pulleys back to levers (the same trade-off)?","Did the cotton reels turn freely? Note fixes for next time.","Who found a real linkage?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"liv", meta:"Old woolshed · hay loft",
        msg:"The old woolshed has a **hay loft** up high, and an iron **wheel with a groove** hanging from the beam. Before tractors with front-end loaders, this is how farmers got bales up into the loft. One person, one rope, and a **heavy bale**. How does a wheel make it easier?",
        notes:[["SAY","Read the message. 🟡 Liv is fictional."],["ASK","“Where have you seen a rope going over a wheel?” (Flagpoles, clotheslines, cranes, blinds, boat sails.)"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"Why do we have summer in December?", a:"Our half of Earth leans towards the Sun: more direct sunlight and longer days." }, { q:"Why can't we see Matariki in May?", a:"The Sun is in front of it; the glare hides it." }, { q:"A 30-tooth gear turns a 10-tooth gear. How fast does the small one turn?", a:"3 times as fast." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"safety", phase:"excavate", fs:null, title:"Workshop rules",
        items:[ { icon:"🧵", t:"String & rope", d:"Never around necks or fingers. Pull smoothly; don't yank." }, { icon:"🪑", t:"Feet on the floor", d:"No standing on chairs. Your teacher sets up the top bar." }, { icon:"🧹", t:"Tidy up", d:"Skewers taped, string wound up, everything back in the box." } ],
        notes:[["SAFETY","30 seconds."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Simple machines", title:"The *pulley*",
        bullets:["A **pulley** is a wheel with a groove for a rope. Pulleys can **change the direction** of a force and **reduce the effort** needed.","A **fixed pulley** stays in one place: you pull **down** to lift **up**. Same effort, easier direction.","A **moving pulley** hangs on the load. The load is held by **two ropes**, so you need about **half the effort**, but you pull **twice as much rope**."],
        visual:{ artefact:"haybale" },
        notes:[["SAY","Curriculum: Year 5 Science, simple machines."],["ASK","“Why is pulling down easier than lifting up?”"],["LISTEN","You can use your body weight; your arms are stronger pulling down; you don't have to climb up."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Count the ropes", title:"Pulley Lab", ix:"pulleylab",
        notes:[["CLICK","Move the slider (or press →) to add supporting ropes. Press ‘Lift 1 m’ to watch."],["ASK","“Effort goes down. What goes up?” (The rope you pull.)"],["SAY","“Same trade-off as levers and gears: less effort, more distance.”"],["NOTE","Friction is ignored; real pulleys need a bit more effort."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Bars and pivots", title:"*Linkages*", h:"470px",
        cards:[ { icon:"↕️", t:"Reverse", d:"A bar on a **pivot** in the middle: push one end **in**, the other end comes **out**." }, { icon:"⏸️", t:"Parallel", d:"Two bars joined so both ends move the **same way**, like a folding toolbox." }, { icon:"↪️", t:"Bell crank", d:"An L-shaped bar that turns a movement **around a corner** (90°), like a bike's brake lever." } ],
        notes:[["SAY","“A linkage is bars joined by pivots so moving one part moves another.”"],["SAY","Farm example: a tractor's **three-point linkage** lifts and lowers ploughs and other tools."],["CLICK","Optional: make a quick card reverse-motion linkage with two strips and three split pins."]] },
      { type:"brief", phase:"excavate", fs:null, title:"Make a hay hoist",
        stakeholder:"**Liv**, who needs to lift bales into the loft without carrying them up the ladder.",
        need:"A **model hay hoist** that lifts a paper-cup ‘bale’ by pulling down on a string.",
        specs:["At least one fixed pulley (a cotton reel on a skewer).","Lifts the cup at least 20 cm.","Optional: a moving pulley to halve the effort."],
        notes:[["SAY","“Path B builds to this brief.”"]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAY","“Choose your path. Count the supporting ropes!”"],["CLICK","Start the 20-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Galatians 6:2."],["NOTE","Analogy: make sure ‘Where does the picture break?’ is discussed."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: Direction = 1."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess. Tidy-up routine."],["CLICK","C = wheat sheaves."]] }
    ]
  };

  /* ======================= FRIDAY · ART ======================= */
  const fri = {
    id:"w04-fri", week:4, day:"fri", subject:"art", duration:50,
    title:"Braided Rivers from Above: Line & Pattern", guide:"tom",
    codes:["VA-PK","VA-DI","VA-CI"],
    coverage:"Visual Arts (NZC 2007, Level 3): developing practical knowledge (line, line weight, pattern); developing ideas (abstracting from an aerial view); communicating and interpreting (artist talk).",
    li:"We are learning to create an abstract artwork inspired by aerial views of braided rivers.",
    sc:["I can use line and pattern on purpose.","I can vary line weight to show main and side channels.","I can turn a real view into an abstract composition."],
    vocab:[
      { w:"aerial view", def:"looking down from above, like from a plane or drone" },
      { w:"abstract", def:"art that uses lines, shapes and colours instead of showing things exactly" },
      { w:"line weight", def:"how thick or thin a line is" },
      { w:"pattern", def:"marks or shapes that repeat" },
      { w:"composition", def:"how the parts of an artwork are arranged" },
      { w:"mixed media", def:"using more than one material in one artwork" }
    ],
    prep:{ min:10, items:["A3 paper, fine and thick black markers or ink and sticks","Oil pastels or chalk pastels; optional collage paper (blues, greys, ochres)","Optional: print one or two aerial photos of the Hakatere or Rakaia for reference"] },
    safety:["Ink: aprons on; wipe up spills.","Pastels: keep away from mouths; wash hands after."],
    tikanga:["Students make their own lines and patterns. No Māori designs as decoration (§17.4)."],
    hononga:"**Rivers that move.** Kāi Tahu knew the braided rivers as trails and food places that changed with every flood (Weeks 2–4). Artists today still look down on these rivers and find patterns in them.",
    paths:[
      { id:"A", name:"The Recorder", product:"Line Study Sheet", steps:["Divide a page into **6 boxes**.","In each, draw a different **river line**: thick, thin, wavy, broken, splitting, rejoining.","Label each box with an **art word**."], flying:"Combine your three best lines into one small abstract." },
      { id:"B", name:"The Maker", product:"Mixed-Media Aerial River", steps:["Draw **3–5 main channels** with a thick marker, top to bottom. Add **thin side channels** that split and rejoin.","Fill the **gravel islands** with a **pattern**: dots, dashes or cross-hatching.","Add colour with **pastel or collage**: blues for water, greys and ochres for gravel."], flying:"Leave one area plain so the eye can rest. Keep this piece for the My Place triptych!" },
      { id:"C", name:"The Storyteller", product:"Artist Talk", steps:["Choose **one artwork** (yours or a classmate's).","Explain **how the lines and patterns** show a braided river from above.","Use the words **line weight, pattern, abstract, composition**."], flying:"Explain which part of the artwork your eye goes to first, and why." }
    ],
    supportedShort:"a printed aerial river outline to trace, a pattern sampler card, a word bank for the artist talk.",
    lens:{
      pillar:"aroha", title:"A way in the wilderness",
      look:"Look again at the braids: channels finding new ways across the gravel after every flood.",
      ref:"Isaiah 43:19",
      paraphrase:"See, I am doing a new thing! I am making a way in the wilderness and streams in the dry land.",
      talk:[
        { q:"After a flood, a braided river finds new channels. What new thing might God be doing in your life or our class?", listen:"New friendships; learning something hard; a fresh start; a family change." },
        { q:"God makes ‘streams in the dry land’. Who needs some ‘water’ — kindness, help or hope — this week?", listen:"A lonely classmate; someone sick; a family going through a hard time." }
      ],
      live:"Gallery walk: tell one classmate which **line** in their artwork shows the river best."
    },
    clue:{ prompt:"Friday's clue is the Survey Seal: combine this week's four Trig Clues.", answer:27, explain:"16 + 6 + 4 + 1 = 27 → bearing 027°." },
    next:"Next week — Sheet V · The Run: a high-country station and its stone cottage.",
    rubric:[
      { c:"Line", code:"VA-PK",
        d:["Draws lines all the same.","One thin line."],
        a:["Varies line weight on purpose.","Thick main channels and thin side threads."],
        f:["Uses line to lead the eye through the composition.","Lines that split and rejoin draw the eye down the page."],
        i:["I can draw a line.","I can vary line weight on purpose.","I can use line to lead the eye."] },
      { c:"Pattern", code:"VA-PK · VA-DI",
        d:["Adds a few marks.","Scattered dots."],
        a:["Uses a repeated pattern to show gravel.","Dots and dashes fill the islands."],
        f:["Uses different patterns for different parts.","Close dots for gravel, broken lines for shallow water."],
        i:["I can add some marks.","I can use a repeated pattern to show gravel.","I can use different patterns for different parts."] },
      { c:"Abstract composition", code:"VA-DI · VA-CI",
        d:["Draws a map-like river.","A single wiggly line."],
        a:["Turns the view into an abstract composition.","Lines, patterns and colour, not a map."],
        f:["Explains choices in an artist talk.","“I kept a plain area so the busy channels stand out.”"],
        i:["I can draw a river.","I can turn the view into an abstract composition.","I can explain my choices."] }
    ],
    plan:{
      prior:"Students have drawn foreground and background (Week 1), used flat colour (Week 2) and layered tints (Week 3). Today focuses on line and pattern. On Tuesday they learned how braided rivers form.",
      kc:["Managing self","Using language, symbols & texts"],
      sequence:[
        ["0–6","Field Note","Tom's message. Trig Check (Thursday). LI/SC.","Recall; look at an aerial view."],
        ["6–18","Survey","From above; line and pattern; **Aerial Braid**; method demo.","Look; try lines; plan."],
        ["18–40","Choose Your Path (22 min)","Introduce A/B/C. Roam: “Where's your thickest line? What pattern is the gravel?”","Line study / mixed media / artist talk."],
        ["40–45","Through the Lens","Isaiah 43:19 — gallery reflection.","Gallery walk."],
        ["45–50","Survey Seal & Dealer","Survey Seal IV: 16 + 6 + 4 + 1 = 27 → 027°. The Dealer's Offer. Self-assess; wheat sheaves.","Add; dial; discuss."]
      ],
      diff:{
        supported:"Outline to trace; pattern sampler; word bank.",
        esol:"Model silently, then name each line; art words on cards.",
        learning:"Large paper and thick markers; fewer channels; calm screen available.",
        flying:"Different patterns for different parts; a plain resting area."
      },
      assess:{
        lookFor:["Varies line weight","Uses pattern for gravel","Makes an abstract composition"],
        evidence:["Artworks (photograph)","Artist talk comments","Exit self-assessment"]
      },
      inquiry:["Which pieces go in the triptych folder?","Who stayed map-like, and who went abstract? Show both and discuss.","Who used the most varied line weights?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"tom", meta:"Small plane · 2,000 m over the Hakatere",
        msg:"I got a ride in a farmer's spray plane today. From up here, the Hakatere doesn't look like a river: it looks like a **drawing**. Thick silver lines, thin threads, all **splitting and joining** across grey gravel. I couldn't stop sketching. Let's make art **from above**.",
        notes:[["SAY","Read the message. 🟡 Tom is fictional."],["CLICK","If you printed an aerial photo of the Hakatere or Rakaia, show it now."]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"What does a single fixed pulley change?", a:"The direction of the force: pull down to lift up." }, { q:"What's the trade-off with more supporting ropes?", a:"Less effort, but you pull more rope." }, { q:"What is a linkage?", a:"Bars joined by pivots so moving one part moves another." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"content", phase:"excavate", fs:"real", paper:true, kicker:"From above", title:"A river made of *lines*",
        body:"From the air, a braided river becomes **lines** and **patterns**: thick main channels, thin side threads, and the **texture** of gravel islands in between.\n\nAn **abstract** artwork keeps the *feeling* of the river (movement, splitting, joining) without drawing a map.",
        visual:{ svg:aerialSVG },
        notes:[["ASK","“What lines can you see? Where is the thickest line? Where do lines split?”"],["SAY","“Abstract doesn't mean random. Every line is a choice.”"]] },
      { type:"cards", phase:"excavate", fs:"real", paper:true, kicker:"Art words", title:"Line & *pattern*", h:"470px",
        cards:[ { icon:"〰️", t:"Line weight", d:"**Thick** lines for main channels, **thin** lines for side threads. Varying weight adds energy." }, { icon:"⋯", t:"Pattern", d:"**Repeated marks** (dots, dashes, cross-hatching) show the texture of gravel." }, { icon:"🧩", t:"Composition", d:"Arrange lines so the eye **travels** through. Leave a **plain area** to rest." } ],
        notes:[["CLICK","Demo each on the board in 30 seconds."]] },
      { type:"interactive", phase:"excavate", fs:"real", paper:true, kicker:"Draw from above", title:"Aerial Braid", ix:"aerialbraid",
        notes:[["CLICK","Invite two students to draw channels. Then press ‘Flood!’ to rearrange them. Try ‘Colours’ and ‘Pattern’."],["ASK","“Which version looks most like a river? Which is the most interesting artwork? Are they the same?”"]] },
      { type:"content", phase:"excavate", fs:null, paper:true, kicker:"Your turn", title:"Make your *aerial river*",
        bullets:["Draw **3–5 main channels** with a **thick** marker, from top to bottom.","Add **thin side channels** that **split and rejoin**.","Fill the **gravel islands** with a **pattern**.","Add colour: **pastel or collage**. Leave one area **plain**."],
        visual:{ artefact:"stones" },
        notes:[["SAY","Model the first two channels in 2 minutes."]] },
      { type:"paths", phase:"paths", fs:null, minutes:22,
        notes:[["SAY","“Choose your path. Path B: keep your piece flat for the triptych folder.”"],["CLICK","Start the 22-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move. 5-minute gallery reflection."],["SAY","Read Isaiah 43:19."]] },
      { type:"folioseal", phase:"decode", fs:"story",
        notes:[["SAY","“Four clues. Add them to get the bearing.”"],["CLICK","Tap each ‘?’ tile. 16 + 6 + 4 + 1 = 27. Dial 027° and press ‘Fix the bearing’."],["SAY","Read the reveal: the torn deed, and the promise underlined twice."]] },
      { type:"intercept", phase:"decode", fs:"story",
        msg:"Restoration team. History is written by the winners. Who cares about a promise from 1848? Throw the torn page away. — D.",
        ask:"Does a promise still matter after more than 175 years? Who remembered it?",
        notes:[["SAY","Read it in the Dealer's smooth voice."],["ASK","Link to Monday: Kāi Tahu remembered the promise and kept speaking up for generations."],["LISTEN","Promises matter even if they're old; the people affected remember; truth matters; if you throw away the evidence, you can't put it right; ‘the winners’ aren't the only ones who tell history."],["NOTE","Bank answers for Week 9 (Te Kerēme)."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess. Celebrate Sheet IV!"],["CLICK","C = wheat sheaves. Store artworks flat."]] }
    ]
  };

  BM.WEEKS[4] = {
    n:4,
    story:"Sheet IV is a torn copy of a land deed with a promise underlined twice. This week historians learn about Kemp's Deed (1848) and the promise about reserves and mahika kai; geographers learn how glaciers and gravel built the plains and why our rivers braid; astronomers discover why Earth's tilt brings winter and Matariki; engineers lift hay with pulleys; and artists draw braided rivers from above. Friday's clues give the bearing for Sheet IV, and the Dealer says the old promise doesn't matter.",
    hononga:"Kemp's Deed, reserves and mahika kai, told from the Arowhenua narrative (Mon) · braided rivers as mahika kai, ara tawhito and bird homes: ngutu pare, pohowera, kakī (Tue) · the dawn rising of Matariki and Puaka (Wed) · many hands pulling together (Thu) · rivers that move (Fri). Check all local framing with your Māori lead and Te Rūnanga o Arowhenua (D3), especially Monday.",
    seal:{
      answer:27,
      instruction:"Add the four **Trig Clues** from Monday to Thursday. The total is a **bearing**. Dial it on the theodolite to crack the wax seal.",
      reveal:"🟡 **Sheet IV restored:** a **torn copy of a deed** dated Akaroa 1848, with one line underlined twice in red: *places for food… to be kept*. (The torn copy is part of our story; the real deed's words are in the archives.) Next week: *The Run*.",
      art:() => { const v = BM.art.sheetArt(4); v.setAttribute("style", "width:100%;height:100%"); return v; }
    },
    lessons:[mon, tue, wed, thu, fri]
  };
})(window.BM);
