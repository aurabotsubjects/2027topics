/* ==========================================================
   WEEK 9 — MAP SHEET IX · MAKING IT RIGHT
   Notes: [KEY, text]  KEY = SAY ASK LISTEN IF CLICK TALK DEEPER PACE SAFETY WAIT NOTE TIKANGA
   Facts are sourced in data/sources.js (tags match blueprint §18).
   Sensitive content (blueprint D9, §17.6): Te Kerēme is told honestly, focused on
   truth-telling and restoration, with no blame on children or families.
   ========================================================== */
(function(BM){
  "use strict";

  /* ======================= MONDAY · HISTORY ======================= */
  const mon = {
    id:"w09-mon", week:9, day:"mon", subject:"history", duration:50,
    title:"Te Kerēme: The Ngāi Tahu Claim & the 1998 Settlement", guide:"nell",
    codes:["SS-H","SS-C","ANZH","SS-P"],
    coverage:"Y6 History (2027): Māori political responses to land loss, including petitions and claims; the Treaty settlement process. Aotearoa New Zealand's Histories: mana whenua, the Crown and restoring relationships. Civics: how wrongs can be put right.",
    li:"We are learning how Ngāi Tahu sought justice over land and promises, and how the claim was settled.",
    sc:["I can describe Te Kerēme and why it lasted so long.","I can explain the 1998 settlement and the Crown's apology.","I can explain what restoring relationships can look like in our place."],
    vocab:[
      { w:"Te Kerēme", say:"teh keh-REH-meh", def:"‘the claim’: Ngāi Tahu's claim against the Crown about land and broken promises" },
      { w:"grievance", def:"a complaint about something unfair" },
      { w:"petition", def:"a written request to people in power, often signed by many" },
      { w:"Waitangi Tribunal", def:"a body that hears claims that the Crown broke the Treaty of Waitangi" },
      { w:"settlement", def:"an agreement that puts right a wrong, as far as possible" },
      { w:"apology", def:"saying sorry, admitting what was wrong" },
      { w:"restoration", def:"repairing something so it is whole again; making things right" },
      { w:"marae", say:"MAH-rai", def:"a meeting place for whānau, hapū and iwi" }
    ],
    prep:{ min:10, items:["Read the safety and tikanga notes first","Field Journals","Optional (Path B): a long paper strip for a class timeline"] },
    safety:["Sensitive history (blueprint D9, §17.6). Tell it honestly and calmly. No student, family or group in the room is to blame.","Some students are Kāi Tahu. Let them share only if they want to; never ask them to speak for their iwi."],
    tikanga:["Teach this from Ngāi Tahu sources (Ngāi Tahu's own stories, the Arowhenua narrative) and check it with your Māori lead and Te Rūnanga o Arowhenua before teaching (D3).","Focus on truth-telling and restoration (Micah 6:8; Luke 19). The 1998 apology and settlement are part of the story.","Ask whether someone from Arowhenua or Hakatere Marae would be willing to speak with the class, or to suggest how to acknowledge the settlement locally."],
    hononga:"**Hakatere Marae.** In 1970, **Hakatere Marae** was set up in Ashburton in the former Fairton school building (Arowhenua narrative). The rūnanga and marae are part of how Kāi Tahu keep and pass on their history, and part of the relationship the 1998 settlement set out to restore.",
    paths:[
      { id:"A", name:"The Recorder", product:"Letter to the Past", steps:["Write a **letter to Matiaha Tiramōrehu** in 1849.","Tell him **what happened** to the claim he started, and **how long** it took.","Explain the **1998 apology** and what it says."], flying:"Add what you think ‘making it right’ still looks like today." },
      { id:"B", name:"The Maker", product:"Claim Timeline", steps:["Make a **timeline from 1848 to 1998** on a long strip.","Include at least **6 events**, with dates.","Show the **seven generations** who kept the claim alive."], flying:"Add Hakatere events (1877 reserves, 1970 marae)." },
      { id:"C", name:"The Storyteller", product:"Panel Discussion", steps:["Hold a **respectful panel**: a historian, a Crown representative (1998) and a young person today. No speaking for real people.","Questions: **What went wrong? Why did it take so long? What did the apology mean?**","Each panelist uses facts from today's slides."], flying:"End with: ‘What can our class do to help make things right?’" }
    ],
    supportedShort:"a picture timeline (1848, 1849, 1986, 1991, 1998), sentence frames, a word bank.",
    lens:{
      pillar:"panga", title:"Making it right",
      look:"Look again at the timeline: a promise broken, a claim kept alive for seven generations, an apology.",
      ref:"Luke 19:1–10 · Micah 6:8",
      paraphrase:"Zacchaeus met Jesus and said: I will give half of what I own to the poor, and if I have cheated anyone, I will pay them back four times as much. The Lord asks us to act justly, to love mercy and to walk humbly with our God.",
      talk:[
        { q:"What does ‘making it right’ look like when the people who did wrong are long gone?", listen:"Telling the truth; saying sorry on behalf of others; giving back what we can; building a better relationship now; remembering." },
        { q:"Zacchaeus didn't just say sorry; he paid back more than he took. Why does putting things right matter, not just words?", listen:"Words alone don't fix harm; actions show you mean it; it restores trust; it's what justice looks like." }
      ],
      live:"Think of something **you** need to put right. Say sorry, and do **one thing** to fix it."
    },
    clue:{ prompt:"From Kemp's Deed (1848) to the settlement (1998): how many years? Divide by 10.", answer:15, explain:"1998 − 1848 = 150; 150 ÷ 10 = 15. Trig Clue 1 is saved for Friday!" },
    next:"Tuesday — Sam is up at the head of the Hakatere, where the river begins as snow and ice.",
    rubric:[
      { c:"Te Kerēme", code:"SS-H · ANZH",
        d:["Says Ngāi Tahu complained.","“They said it wasn't fair.”"],
        a:["Describes the claim and why it lasted so long.","“It began with Tiramōrehu's letter in 1849. Ngāi Tahu kept pressing it for about seven generations because the promises weren't kept.”"],
        f:["Explains the key steps in the claim.","“A 1944 Act gave payments without consulting Ngāi Tahu; in 1986 Rakiihia Tau took it to the Waitangi Tribunal, which reported in 1991.”"],
        i:["I know Ngāi Tahu complained.","I can describe Te Kerēme and why it lasted.","I can explain the key steps in the claim."] },
      { c:"The 1998 settlement", code:"SS-C · ANZH",
        d:["Says there was an agreement.","“They made a deal.”"],
        a:["Explains the settlement and the apology.","“In 1998 the Crown apologised for acting unfairly and in bad faith, and the settlement included about $170 million, pounamu and Aoraki.”"],
        f:["Explains why an apology matters as well as money.","“Saying what was wrong out loud helps start a new relationship.”"],
        i:["I know there was an agreement.","I can explain the settlement and apology.","I can explain why the apology matters."] },
      { c:"Restoring relationships", code:"SS-P · SS-C",
        d:["Says people should be nice.","“Be friends.”"],
        a:["Explains what restoration can look like locally.","“Using both names, Hakatere and Ashburton; learning Kāi Tahu history; working with Arowhenua.”"],
        f:["Links restoration to justice and action.","“Like Zacchaeus, it means doing something, not just saying sorry.”"],
        i:["I can say people should get on.","I can explain what restoration looks like here.","I can link restoration to justice and action."] }
    ],
    plan:{
      prior:"Students learned Kemp's Deed and its promises (Week 4), and that Kāi Tahu kept speaking up. They know the station history (Week 5) and the town's growth (Week 6). Many will know little about Treaty settlements.",
      kc:["Thinking","Relating to others","Participating & contributing"],
      sequence:[
        ["0–6","Field Note","Nell's note: pencilled names restored. Trig Check (Week 8). LI/SC.","Recall; predict."],
        ["6–20","Survey","Tiramōrehu's letter; **A Claim Through Time**; the Tribunal; the 1998 settlement and apology; Hakatere Marae.","Sequence; discuss."],
        ["20–38","Choose Your Path","Introduce A/B/C. Roam: “What was wrong? What put it right? What's left to do?”","Letter / timeline / panel."],
        ["38–45","Through the Lens","Luke 19:1–10; Micah 6:8 — four moves.","Discuss; put something right."],
        ["45–50","Trig Clue & Exit","Trig Clue 1 (answer 15); self-assessment; wheat sheaves.","Solve; self-assess."]
      ],
      diff:{
        supported:"Picture timeline; sentence frames; word bank.",
        esol:"Use the timeline visual; act out ‘promise’ and ‘sorry’.",
        learning:"Use the interactive with a partner; choice of product; calm screen available.",
        flying:"Key steps in the claim; why apology matters; local restoration."
      },
      assess:{
        lookFor:["Describes Te Kerēme","Explains the settlement and apology","Explains restoration locally"],
        evidence:["Timeline discussion","Path products (photograph)","Exit self-assessment"]
      },
      inquiry:["Was the tone honest and calm? Did anyone feel blamed?","Revisit the Week 4 ‘What should happen?’ ideas: how do they compare with what happened?","Record your Māori lead's feedback."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"nell", meta:"Conservation room · Sheet IX",
        msg:"On Sheet IX, someone has gone back over the **faded pencil names** in ink: *Hakatere*, *Ō Tū Wharekai*, *Te Kiekie*, side by side with the English names. And on the last page of the field book is a short entry in the surveyor's hand. It's an **apology**. Today we learn about a much bigger apology, and the long journey that led to it.",
        notes:[["SAY","Read the message. 🟡 Nell, the sheet and the field book are fictional; Te Kerēme is real."],["SAFETY","“Today is about a long struggle for justice and how it was settled. Nobody here is to blame; it's important we know the truth.”"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"How many chiefs signed Kemp's Deed? (Week 4)", a:"16, at Akaroa in 1848." }, { q:"What was promised, and what happened in Hakatere? (Week 4)", a:"Reserves and mahika kai; no reserves were surveyed in Hakatere, and mahika kai weren't protected." }, { q:"What bearing opened Sheet VIII?", a:"019° (4 + 11 + 2 + 2)." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"22 October 1849", title:"*Tiramōrehu's* letter",
        bullets:["A year after Kemp's Deed, the rangatira **Matiaha Tiramōrehu** wrote to Lieutenant-Governor **Eyre**.","He said the reserves were **too small**, and asked for the land and payments **promised**, and for **schools, hospitals** and access to **mahinga kai**.","Ngāi Tahu describe it as the **first formal statement** of their grievances against the Crown."],
        visual:{ artefact:"fieldbook" },
        notes:[["SAY","Facts from Te Rūnanga o Ngāi Tahu (‘Matiaha Tiramōrehu: the first formal statement…’)."],["ASK","“Which promises from Week 4 is he talking about?”"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"1848 → 1998", title:"A Claim Through Time", ix:"claimtimeline",
        notes:[["CLICK","Press → to move along the timeline, or tap a date."],["ASK","At 1944: “Why would Ngāi Tahu keep pressing the claim after a payment?” (They weren't consulted; it didn't put right what was lost.)"],["SAY","“About seven generations kept this claim alive. Imagine your great-great-great-great-grandparents starting something you finish.”"]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"1998", title:"The settlement & *apology*", h:"500px",
        cards:[ { icon:"⚖️", t:"The Tribunal (1991)", d:"The **Waitangi Tribunal** found the Crown had acted **unconscionably** and in repeated breach of the Treaty." }, { icon:"🤝", t:"The settlement (1998)", d:"Compensation valued at **$170 million**; ownership of **pounamu** confirmed; **Aoraki** symbolically returned. The **Ngāi Tahu Claims Settlement Act 1998** became law." }, { icon:"🕊️", t:"The apology", d:"The Crown **apologised**: it admitted it had not acted in **good faith**, and committed to a **new relationship**. It was given at **Ōnuku Marae** on **29 November 1998**." } ],
        notes:[["SAY","Facts from NZHistory and Te Rūnanga o Ngāi Tahu (The Apology)."],["ASK","“Why might an apology matter as much as money?”"],["LISTEN","It tells the truth; it says the people were right; it shows respect; it's a fresh start."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"In our place", title:"Hakatere: *restoring* relationships",
        bullets:["In **1877**, nearly 30 years after the promise, the **Rakaia and Ashburton Māori Reserves** were allocated to Kaiapoi Kāi Tahu.","In **1970**, **Hakatere Marae** was set up in Ashburton, in the former **Fairton school** building.","Today, restoration includes **both names** (Hakatere and Ashburton), learning **Kāi Tahu history** from Kāi Tahu, and working **in partnership** with Arowhenua."],
        visual:{ map:{ theme:"paper", labels:"both", relief:true }, size:560 },
        notes:[["SAY","1877 and 1970 facts from the Arowhenua narrative."],["TIKANGA","Ask your Māori lead how the school can support restoration locally. Avoid promising anything on behalf of others."]] },
      { type:"discussion", phase:"excavate", fs:"real", kicker:"Turn & Talk", q:"In Week 4 we asked what should happen when a promise is broken. **What actually happened?** Was it enough?", sub:"Think about truth, apology, giving back, and the relationship now.", talk:60,
        notes:[["TALK","60-second talk."],["LISTEN","Truth was told; the Crown apologised; some land and money were returned; it can't give back everything; the relationship keeps going."],["NOTE","Accept different views respectfully. The aim is understanding, not one ‘right’ opinion about the settlement."]] },
      { type:"paths", phase:"paths", fs:null, minutes:18,
        notes:[["SAY","“Choose your path. Be honest and respectful.”"],["CLICK","Start the 18-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Tell the story of Zacchaeus (Luke 19:1–10), then read Micah 6:8."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 150 ÷ 10 = 15."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess. Thank students for listening to a hard history with care."],["CLICK","C = wheat sheaves."]] }
    ]
  };

  /* ======================= TUESDAY · GEOGRAPHY ======================= */
  const tue = {
    id:"w09-tue", week:9, day:"tue", subject:"geography", duration:50,
    title:"Water From the Mountains: Snow, Ice & a Warming World", guide:"sam",
    codes:["SS-G","SC-ES","SS-C"],
    coverage:"Y6 Geography (2027): climate patterns and temperature trends; how rising greenhouse gases are linked to higher temperatures; mitigation and adaptation. Reading line graphs of change over time.",
    li:"We are learning how mountain snow and ice feed our rivers, and how a warming climate could change this.",
    sc:["I can explain how snowmelt and rain feed the Hakatere.","I can describe how our glaciers are changing.","I can suggest ways to reduce (mitigate) and adapt to a warming climate."],
    vocab:[
      { w:"snowmelt", def:"water from melting snow" },
      { w:"catchment", def:"the area of land where rain and snow drain into a river" },
      { w:"snowline", def:"the height above which snow lasts through summer" },
      { w:"greenhouse gas", def:"a gas, like carbon dioxide, that traps heat in the atmosphere" },
      { w:"mitigation", def:"reducing greenhouse gases to slow warming" },
      { w:"adaptation", def:"getting ready for the effects of a changing climate" },
      { w:"trend", def:"the general direction something changes over time" }
    ],
    prep:{ min:5, items:["Field Journals","Optional (Path B): a clear tub, ice cubes, a ‘mountain’ of sand or a rock, warm water"] },
    safety:["Some students worry about climate change. Keep the focus on what people can do, and on God's care for creation."],
    tikanga:["Water is taonga to Kāi Tahu. Ask your Māori lead about Kāi Tahu values for water (mauri, kaitiakitanga) before teaching them in depth."],
    hononga:"**Kaitiakitanga.** Kāi Tahu see themselves as kaitiaki (guardians) of the rivers and mountains. Caring for the water that flows from the mountains is shared work for everyone who lives in Hakatere.",
    paths:[
      { id:"A", name:"The Recorder", product:"Explanation", steps:["Explain **how snow and ice in the mountains become water in the Hakatere**.","Describe **how our glaciers are changing**.","Give **one mitigation** and **one adaptation** idea."], flying:"Explain why less snow could matter most in late summer." },
      { id:"B", name:"The Maker", product:"Water-Cycle Model", steps:["Build a **model mountain** in a tub with **ice** on top.","Add warm water around it (the sun's heat) and watch the **melt** run down.","Draw and label your model: **snow, melt, river, sea, evaporation, rain**."], flying:"Test: what happens with less ice? Record it." },
      { id:"C", name:"The Storyteller", product:"Adaptation Pitch", steps:["Plan a **1-minute pitch to the council**.","Explain **one way** our district could **adapt** (water storage, efficient irrigation, planting trees…).","Give **one reason** it helps people **and** the river."], flying:"Add a mitigation idea that families can do at home." }
    ],
    supportedShort:"a water-cycle diagram to label, mitigation/adaptation picture cards, sentence frames.",
    lens:{
      pillar:"aroha", title:"To work it and take care of it",
      look:"Look again at the mountains: snow and ice storing water for the plains below.",
      ref:"Genesis 2:15",
      paraphrase:"The Lord God took the man and put him in the Garden of Eden to work it and take care of it.",
      talk:[
        { q:"God gave people the job of working and caring for His creation. What does ‘taking care of it’ look like in Hakatere?", listen:"Using water wisely; not polluting; planting trees; protecting rivers and birds; reducing waste." },
        { q:"When a problem feels huge, like climate change, what can one person or one class do?", listen:"Small actions add up; learn; share ideas; pray; make good choices; encourage others." }
      ],
      live:"Choose **one way** your family can save water or energy this week."
    },
    clue:{ prompt:"How many branches does the Hakatere begin as?", answer:2, explain:"Two: the North Branch and the South Branch. Trig Clue 2 is saved!" },
    next:"Wednesday — Dr Priya is learning to find her way across the sea using only the stars.",
    rubric:[
      { c:"Snow, ice & rivers", code:"SS-G",
        d:["Says snow melts.","“Snow turns to water.”"],
        a:["Explains how snowmelt and rain feed the Hakatere.","“Its North and South Branches drain the foothills and the Arrowsmith Range; rain and snowmelt flow down and join above Ashburton.”"],
        f:["Explains why stored snow and ice matter in summer.","“Snow melts slowly, so it keeps feeding the river in late summer when it's dry.”"],
        i:["I know snow melts.","I can explain how snowmelt and rain feed the river.","I can explain why stored snow matters."] },
      { c:"Changing glaciers", code:"SS-G · SC-ES",
        d:["Says glaciers are melting.","“Ice is melting.”"],
        a:["Describes how our glaciers are changing, with evidence.","“NIWA has photographed glaciers every year since 1977; they estimate at least 13 trillion litres of water lost since the late 1970s.”"],
        f:["Links warming to greenhouse gases and to river flows.","“More greenhouse gases trap heat, so less snow and earlier melt could mean less water in late summer.”"],
        i:["I know glaciers are melting.","I can describe the change with evidence.","I can link warming to river flows."] },
      { c:"Mitigation & adaptation", code:"SS-C",
        d:["Gives one idea.","“Turn lights off.”"],
        a:["Suggests mitigation and adaptation ideas.","“Mitigation: walk or bike more. Adaptation: store water and irrigate efficiently.”"],
        f:["Explains benefits for people and the environment.","“Efficient irrigation saves water for farms and leaves more for the river's fish and birds.”"],
        i:["I can give one idea.","I can suggest mitigation and adaptation ideas.","I can explain the benefits."] }
    ],
    plan:{
      prior:"Students know glaciers carved our valleys (Week 4), the rain shadow (Week 5) and irrigation (Weeks 5, 7). Some feel anxious about climate change.",
      kc:["Thinking","Participating & contributing"],
      sequence:[
        ["0–6","Field Note","Sam's message. Trig Check (Monday). LI/SC.","Recall; predict."],
        ["6–18","Survey","The Hakatere's branches; **Snowmelt** model; changing glaciers; mitigation and adaptation.","Predict; observe; discuss."],
        ["18–38","Choose Your Path","Introduce A/B/C. Roam: “Where does the water come from? What could change? What can we do?”","Explanation / model / pitch."],
        ["38–45","Through the Lens","Genesis 2:15 — four moves.","Discuss; family action."],
        ["45–50","Trig Clue & Exit","Trig Clue 2 (answer 2); self-assessment; wheat sheaves.","Solve; self-assess."]
      ],
      diff:{
        supported:"Diagram to label; picture cards; sentence frames.",
        esol:"Ice-melt demo; picture glossary.",
        learning:"Hands-on model; partner work; calm screen available.",
        flying:"Late-summer flows; greenhouse gases; benefits for people and rivers."
      },
      assess:{
        lookFor:["Explains snowmelt and the river","Describes glacier change with evidence","Suggests mitigation and adaptation"],
        evidence:["Snowmelt discussion","Path products (photograph)","Exit self-assessment"]
      },
      inquiry:["Did anyone seem worried? Follow up with hope and action.","Who could tell mitigation from adaptation?","Geography Big Projects: anyone campaigning for rivers can use today's ideas."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"sam", meta:"Head of the South Branch · late summer",
        msg:"I'm up where the Hakatere **begins**: high in the ranges, where snowbanks drip into little streams. On the plains, the river's low and warm. Up here, every drop is still **ice-cold meltwater**. If the snow and ice up here shrink, what happens to the river down there?",
        notes:[["SAY","Read the message. 🟡 Sam is fictional."],["ASK","“Where does the water in our river come from?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"Who wrote the first formal statement of Ngāi Tahu grievances, and when?", a:"Matiaha Tiramōrehu, 22 October 1849." }, { q:"When was the Ngāi Tahu Claims Settlement Act passed?", a:"1998." }, { q:"Name one thing the 1998 settlement included.", a:"An apology; about $170 million; pounamu ownership; Aoraki symbolically returned." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Where our river begins", title:"Two *branches*",
        bullets:["The Hakatere begins as **two branches**. The **North Branch** drains the foothill ranges; the **South Branch** drains the southern end of the **Arrowsmith Range**.","They flow across the plains only a few kilometres apart, and **join just above Ashburton**.","The river is fed mainly by **rain and snowmelt** in its headwaters, and flows about **112 km** to the Pacific."],
        visual:{ map:{ theme:"paper", labels:"both", relief:true }, size:560 },
        notes:[["SAY","Facts from Te Ara (1966, Ashburton River) and the Braided River Aid (BRaid) river page."],["ASK","“When in the year would snowmelt matter most?”"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Snow, ice & the river", title:"Snowmelt", ix:"snowmelt",
        notes:[["CLICK","Press ‘Warmer +1’ (or →) to see how the model changes."],["ASK","“What happens to the late-summer river flow as it warms?”"],["NOTE","This is a simplified teaching model, not a forecast."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"A warming world", title:"Our glaciers are *changing*", h:"500px",
        cards:[ { icon:"📸", t:"Watching", d:"**NIWA** has flown over and photographed our glaciers every March since **1977**: the **end-of-summer snowline survey**." }, { icon:"💧", t:"Losing ice", d:"NIWA estimates our glaciers have lost at least **13 trillion litres** of water since the late 1970s. Hotter summers and marine heatwaves are big drivers." }, { icon:"🌡️", t:"Why", d:"**Greenhouse gases**, like carbon dioxide, trap heat. As they increase, average **temperatures rise**." } ],
        notes:[["SAY","Facts from NIWA. Curriculum: Y6 climate change, mitigation and adaptation."],["SAFETY","Keep it hopeful: “People everywhere are working on this, and there's lots we can do.”"]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"What can we do?", title:"Mitigation & *adaptation*", h:"480px",
        cards:[ { icon:"🚲", t:"Mitigation", d:"**Reduce** greenhouse gases: walk or bike, save energy, plant trees, waste less food." }, { icon:"🛡️", t:"Adaptation", d:"**Get ready** for changes: store water, irrigate efficiently, protect wetlands, plan for floods and droughts." }, { icon:"🤝", t:"Together", d:"Families, farmers, councils, iwi and scientists all have a part. **Fair, shared** decisions matter." } ],
        notes:[["NOTE","Farming and water are real community debates (§17.8). Present more than one view fairly; no villains."]] },
      { type:"paths", phase:"paths", fs:null, minutes:18,
        notes:[["SAY","“Choose your path. Keep it hopeful: what can we do?”"],["CLICK","Start the 18-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Genesis 2:15."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 2."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = wheat sheaves."]] }
    ]
  };

  /* ======================= WEDNESDAY · SCIENCE ======================= */
  const wed = {
    id:"w09-wed", week:9, day:"wed", subject:"science", duration:50,
    title:"Finding Our Way by the Stars", guide:"priya",
    codes:["SC-ES","SC-P","ANZH"],
    coverage:"Y6 Science (2027): how people have used the sky for navigation and to plan planting and harvest; using models and diagrams of the sky. Aotearoa New Zealand's Histories: Polynesian and Māori wayfinding.",
    li:"We are learning how people have used the stars to find their way and to plan the year.",
    sc:["I can find south using the Southern Cross and the Pointers.","I can describe how Polynesian navigators used the stars.","I can explain how sky knowledge guided planting and harvest."],
    vocab:[
      { w:"navigation", def:"finding your way from one place to another" },
      { w:"wayfinding", def:"navigating without instruments, using stars, sun, swells and nature" },
      { w:"star compass", def:"a mental map of where stars rise and set on the horizon" },
      { w:"Southern Cross", def:"a small, bright cross of stars in the southern sky, used to find south" },
      { w:"Pointers", def:"two bright stars that point to the Southern Cross" },
      { w:"south celestial pole", def:"the point in the sky the southern stars seem to circle" },
      { w:"swell", def:"long, rolling ocean waves made by distant winds" }
    ],
    prep:{ min:5, items:["Field Journals","Optional (Path B): paper plates, split pins and markers for a star compass","Home task (with whānau): find the Southern Cross on a clear night"] },
    safety:["Stargazing at home with an adult."],
    tikanga:["Wayfinding is living knowledge for Māori and Pacific peoples today. Teach it respectfully as their knowledge, from Te Ara, and ask your Māori lead about local voyaging stories.","The Southern Cross has several Māori names and traditions (Te Ara mentions an anchor and an opening for the winds). Check local names with your Māori lead."],
    hononga:"**Waka and stars.** Polynesian navigators crossed the Pacific by reading where stars rose and set, the swells and the Sun. Their descendants include Māori, whose ancestors voyaged to Aotearoa this way. The maramataka and Matariki (Weeks 5–6) used the same careful watching of the sky.",
    paths:[
      { id:"A", name:"The Recorder", product:"Navigator's Guide", steps:["Write a **guide for finding south** using the **Southern Cross** and **Pointers**, with a diagram.","Add **two** Polynesian wayfinding methods.","Explain **one way** sky knowledge helped with **planting or harvest**."], flying:"Explain why the Southern Cross is in different places at different times of night." },
      { id:"B", name:"The Maker", product:"Star Compass", steps:["Make a **paper-plate star compass** with **N, E, S, W** around the rim.","Mark where **three stars** rise in the east and set in the west.","Add the **Southern Cross** near south."], flying:"Use your compass to plan a pretend voyage: which star would you steer by?" },
      { id:"C", name:"The Storyteller", product:"Wayfinder Story", steps:["Write a short **story of a young navigator** learning the stars.","Include **star paths**, **swells** and **finding south**.","Use only facts from today (no invented traditions)."], flying:"End the story with Matthew 2:9–10: the Magi following a star." }
    ],
    supportedShort:"a Southern Cross diagram with the steps, a star compass template, sentence frames.",
    lens:{
      pillar:"mohio", title:"They followed the star",
      look:"Look again at the sky: stars that guided travellers safely across oceans.",
      ref:"Matthew 2:9–10",
      paraphrase:"The star they had seen when it rose went ahead of them until it stopped over the place where the child was. When they saw the star, they were overjoyed.",
      talk:[
        { q:"The Magi followed a star to find Jesus. What ‘guides’ do we follow to find our way in life?", listen:"The Bible; parents and teachers; prayer; wise friends; the Holy Spirit." },
        { q:"Navigators trusted stars that never let them down. Who can we trust completely?", listen:"God; Jesus; His promises; He never changes." }
      ],
      live:"Find the **Southern Cross** with whānau this week, and remember the **star that led to Jesus**."
    },
    clue:{ prompt:"How many bright main stars make the Southern Cross?", answer:4, explain:"Four bright stars (plus a fainter fifth). Trig Clue 3 is saved!" },
    next:"Thursday — Liv's baler needs a counter. Time for variables!",
    rubric:[
      { c:"Finding south", code:"SC-ES · SC-P",
        d:["Finds the Southern Cross with help.","Points to the Cross."],
        a:["Finds south using the Cross and Pointers.","“Extend the long arm about four and a half times, meet the line from the Pointers, then drop to the horizon.”"],
        f:["Explains why the Cross moves through the night.","“Earth spins, so the Cross circles the south celestial pole, but the pole stays still.”"],
        i:["I can find the Cross with help.","I can find south using the Cross and Pointers.","I can explain why the Cross moves."] },
      { c:"Wayfinding", code:"ANZH · SC-ES",
        d:["Says sailors used stars.","“They looked at stars.”"],
        a:["Describes how Polynesian navigators used the stars.","“They memorised where stars rose and set and steered by a star near the horizon, swapping to another as it rose.”"],
        f:["Explains other clues navigators used.","“When it was cloudy they kept a steady angle to the ocean swells.”"],
        i:["I know sailors used stars.","I can describe Polynesian star navigation.","I can explain other clues they used."] },
      { c:"Planning the year", code:"SC-ES",
        d:["Says stars tell the time of year.","“Stars mean winter.”"],
        a:["Explains how sky knowledge guided planting and harvest.","“The maramataka and the rising of Matariki and Puaka told people when to plant, harvest and fish.”"],
        f:["Compares different peoples' use of the sky.","“Many civilisations, like the Maya and Māori, mapped the sky to plan farming.”"],
        i:["I know stars mark the year.","I can explain how sky knowledge guided planting.","I can compare different peoples' use of the sky."] }
    ],
    plan:{
      prior:"Students found the Southern Cross in Week 3, learned the maramataka (Week 5), Matariki and Puaka (Week 6). Some students have Pacific heritage and voyaging stories at home.",
      kc:["Thinking","Relating to others","Using language, symbols & texts"],
      sequence:[
        ["0–6","Field Note","Dr Priya's message. Trig Check (Tuesday). LI/SC.","Recall; predict."],
        ["6–18","Survey","The Southern Cross; **Find South**; Polynesian wayfinding; sky and planting.","Find; practise; discuss."],
        ["18–38","Choose Your Path","Introduce A/B/C. Roam: “Where's south? Which star would you steer by?”","Guide / star compass / story."],
        ["38–45","Through the Lens","Matthew 2:9–10 — four moves.","Discuss; find the Cross."],
        ["45–50","Trig Clue & Exit","Trig Clue 3 (answer 4); self-assessment; wheat sheaves.","Solve; self-assess."]
      ],
      diff:{
        supported:"Diagram with steps; compass template; sentence frames.",
        esol:"Act out the steps on the board; picture glossary.",
        learning:"Hands-on compass; partner practice; calm screen available.",
        flying:"Why the Cross moves; swells; comparing peoples."
      },
      assess:{
        lookFor:["Finds south","Describes wayfinding","Explains sky knowledge and planting"],
        evidence:["Find South practice","Path products (photograph)","Exit self-assessment"]
      },
      inquiry:["Who found the pole on a new sky without help?","Did students with Pacific heritage feel their knowledge was respected?","Sky Watcher's Journals: add a Southern Cross observation."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"priya", meta:"Harbour · night before a voyage",
        msg:"I'm joining a **waka hourua** (voyaging canoe) crew for a week. No GPS, no compass. The navigator says she'll find the way by the **stars**, the **swells** and the **Sun**, just as her ancestors did across the whole Pacific. First lesson tonight: **find south**.",
        notes:[["SAY","Read the message. 🟡 Dr Priya is fictional."],["ASK","“How could you find your way without a phone or compass?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"How many branches does the Hakatere begin as?", a:"Two: the North and South Branches." }, { q:"What is the difference between mitigation and adaptation?", a:"Mitigation reduces greenhouse gases; adaptation gets ready for the changes." }, { q:"How do you find south with the Southern Cross? (Week 3)", a:"Follow the long arm about 4½ times, then drop straight down to the horizon." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"A cross in the sky", title:"The *Southern Cross*",
        bullets:["The Southern Cross has **four bright stars** in a cross shape, and a **fainter fifth** star.","Two bright **Pointers** point towards it.","It's visible **all year** from Aotearoa, so people have long used it to **find south**."],
        visual:{ artefact:"starchart" },
        notes:[["SAY","Facts from Te Ara (Southern Cross)."],["TIKANGA","Te Ara notes Māori traditions such as the Cross as an anchor or an opening for the winds. Check local names with your Māori lead."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Practise", title:"Find South", ix:"findsouth",
        notes:[["CLICK","Press → through the steps. Then ‘New sky’: students guess where the south celestial pole is and you tap it."],["ASK","“Why is the Cross in a different place in each new sky?” (Earth's spin and the seasons.)"]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Across the Pacific", title:"*Wayfinding* by the stars", h:"500px",
        cards:[ { icon:"🧭", t:"Star compass", d:"Navigators memorised **where bright stars rose and set** on the horizon." }, { icon:"⭐", t:"Star steering", d:"Steer towards a star **near the horizon**; when it rises too high, **switch** to the next. **7 to 12 stars** could guide a night." }, { icon:"🌊", t:"Swells & song", d:"When cloudy, keep a **steady angle to the swells**. Routes were kept in **memory and song**." } ],
        notes:[["SAY","Facts from Te Ara (Canoe navigation). Te Ara says the greatest skill of the old navigators was reading the night sky."],["NOTE","Te Ara also names Kōpō (Venus) and Pareārau (Jupiter) as useful for navigators."]] },
      { type:"discussion", phase:"excavate", fs:"real", kicker:"Turn & Talk", q:"Navigators, farmers and fishers all **watched the sky**. How did knowing the sky help people **plan the year**?", sub:"Think back to the maramataka (Week 5) and Matariki & Puaka (Week 6).", talk:45,
        notes:[["TALK","45-second talk."],["LISTEN","When to plant and harvest; when to fish; the new year; seasons and weather; when to travel."]] },
      { type:"paths", phase:"paths", fs:null, minutes:18,
        notes:[["SAY","“Choose your path. Respect: this is living knowledge for Māori and Pacific peoples.”"],["CLICK","Start the 18-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Matthew 2:9–10."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 4."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = wheat sheaves."]] }
    ]
  };

  /* ======================= THURSDAY · TECHNOLOGY ======================= */
  const thu = {
    id:"w09-thu", week:9, day:"thu", subject:"technology", duration:50,
    title:"Scratch 4: Variables & Testing (Counting the Harvest)", guide:"liv",
    codes:["DT-CT","DT-DD"],
    coverage:"Digital Technologies — Computational Thinking, Progress Outcome 2: use variables to store and change data; test programs systematically with a test table.",
    li:"We are learning to use variables to count and store data, and to test programs carefully.",
    sc:["I can create a variable and change it.","I can show a variable on the screen.","I can test my program with a test table."],
    vocab:[
      { w:"variable", def:"a named box in a program that stores a value that can change" },
      { w:"value", def:"the number or word stored in a variable" },
      { w:"set", def:"to give a variable a value (e.g. set bales to 0)" },
      { w:"change", def:"to add to a variable (e.g. change bales by 1)" },
      { w:"initialise", def:"to set a variable to its starting value" },
      { w:"expected result", def:"what should happen if the program works" },
      { w:"actual result", def:"what really happens when you run it" }
    ],
    prep:{ min:10, items:["Devices with Scratch if available, or use the Harvest Counter on the board","Test table template for all paths","Optional: small blocks or counters to act as ‘bales’"] },
    safety:[],
    tikanga:[],
    hononga:"**Counting what matters.** From counting sheep through a gate at Hakatere Station (Week 5) to counting bales today, farmers have always needed accurate counts. Variables let a computer keep count for us.",
    paths:[
      { id:"A", name:"The Tester", product:"Test Table", steps:["Write a **test table**: bales in, expected, actual, ✅/❌.","Test **0, 1, 3 and 12** bales.","Find the **bug** in the buggy version and explain it."], flying:"Explain why we test 0 as well as bigger numbers." },
      { id:"B", name:"The Maker", product:"Scratch Harvest Counter", steps:["In **Scratch** (or the Harvest Counter), make a variable called **bales**.","**Set bales to 0** when ▶ is clicked, then **change bales by 1** each time a bale passes.","**Show** the variable on screen and test it."], flying:"Add a second variable for **paddocks** and count both." },
      { id:"C", name:"The Bug Fixer", product:"Bug-Fix Clinic", steps:["Fix **3 broken programs**: a counter that never resets, one that resets every time, and one that adds 2.","For each, write **what was wrong** and **how you fixed it**.","Help a classmate with their bugs."], flying:"Write your own buggy counter for someone else to fix." }
    ],
    supportedShort:"printed set/change blocks, a test table frame, counters for acting out.",
    lens:{
      pillar:"manaaki", title:"Faithful in little things",
      look:"Look again at the counter: one bale at a time, every one counted.",
      ref:"Luke 16:10",
      paraphrase:"Whoever can be trusted with very little can also be trusted with much.",
      talk:[
        { q:"A counter has to be accurate with every single bale. Why does being faithful in small things matter?", listen:"Small things add up; people can trust you; it builds good habits; God sees small things." },
        { q:"What ‘small things’ can you be faithful in this week?", listen:"Homework; chores; kind words; keeping promises; telling the truth." }
      ],
      live:"Pick **one small job** and do it faithfully every day this week."
    },
    clue:{ prompt:"A bale counter starts at 0 and adds 1 for each bale. After 12 bales, what does it show?", answer:12, explain:"0 + 12 = 12. Trig Clue 4 is saved for Friday!" },
    next:"Friday — Triptych build week! Tom says it's time to bring your Land, River and Sky together.",
    rubric:[
      { c:"Variables", code:"DT-CT",
        d:["Uses a variable with help.","Makes a variable but doesn't use it."],
        a:["Creates and changes a variable.","Set bales to 0; change bales by 1."],
        f:["Uses more than one variable.","Counts bales and paddocks separately."],
        i:["I can use a variable with help.","I can create and change a variable.","I can use more than one variable."] },
      { c:"Displaying data", code:"DT-DD",
        d:["Value can't be seen.","Hidden variable."],
        a:["Shows the variable on screen.","The bales counter is visible and updates."],
        f:["Presents data clearly for a user.","Labels and sounds when a total is reached."],
        i:["I can make a variable.","I can show a variable on screen.","I can present data clearly."] },
      { c:"Testing", code:"DT-CT",
        d:["Runs it once.","“It works.”"],
        a:["Tests with a test table.","Tests 0, 3 and 12; records expected and actual."],
        f:["Finds and explains a bug from the test table.","“With 3 bales it showed 1, so it was resetting each time.”"],
        i:["I can run my program.","I can test with a test table.","I can find and explain bugs from my tests."] }
    ],
    plan:{
      prior:"Students know sequence (Week 6), loops (Week 7) and events and if/else (Week 8). Smart Farm projects may need a counter.",
      kc:["Thinking","Managing self"],
      sequence:[
        ["0–6","Field Note","Liv's message. Trig Check (Wednesday). LI/SC.","Recall; predict."],
        ["6–18","Survey","Variables; set and change; **Harvest Counter**; test tables; Smart Farm check-in.","Predict; test; debug."],
        ["18–38","Choose Your Path","Introduce A/B/C. Roam: “What's the starting value? What did you expect?”","Test table / Scratch / bug clinic."],
        ["38–45","Through the Lens","Luke 16:10 — four moves.","Discuss; faithful job."],
        ["45–50","Trig Clue & Exit","Trig Clue 4 (answer 12); self-assessment; wheat sheaves.","Solve; self-assess."]
      ],
      diff:{
        supported:"Printed blocks; test frame; counters.",
        esol:"Act out a variable with a labelled box and counters.",
        learning:"Hands-on counters; partner coding; calm screen available.",
        flying:"Multiple variables; presenting data; explaining bugs."
      },
      assess:{
        lookFor:["Creates and changes a variable","Shows the variable","Tests with a test table"],
        evidence:["Test tables","Path products (screenshots)","Exit self-assessment"]
      },
      inquiry:["Who understood ‘initialise’ (set to 0 at the start)?","Smart Farm: who's ready to showcase next week?","Book device time for the showcase."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"liv", meta:"Hay paddock · baling day",
        msg:"The baler's spitting out bales all afternoon and I've **lost count** three times! The farm wants a little screen that **counts every bale** automatically. A computer needs somewhere to **remember the number**. That's a **variable**.",
        notes:[["SAY","Read the message. 🟡 Liv is fictional."],["ASK","“How do you keep count of something when you're busy?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"How many bright stars make the Southern Cross?", a:"Four (plus a fainter fifth)." }, { q:"How did Polynesian navigators steer at night?", a:"Towards a star near the horizon, swapping to the next as it rose." }, { q:"What did navigators use when it was cloudy?", a:"The ocean swells." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"A box that remembers", title:"*Variables*", h:"480px",
        cards:[ { icon:"📦", t:"Variable", d:"A **named box** that stores a **value**, like **bales = 0**." }, { icon:"0️⃣", t:"Set", d:"**Set bales to 0** at the start (**initialise**), so the count starts fresh." }, { icon:"➕", t:"Change", d:"**Change bales by 1** each time a bale passes the sensor." } ],
        notes:[["CLICK","Unplugged: a box labelled ‘bales’. Students drop in a counter for each ‘bale’ that passes."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Count every bale", title:"Harvest Counter", ix:"harvestcounter",
        notes:[["CLICK","Press ‘Test 3’ and ‘Test 12’ to fill the test table. Then ‘🐞 Buggy’ and test again."],["CLICK","→ steps: test 3, test 12, buggy test."],["ASK","With the bug: “The test says 1 instead of 3. Which block is in the wrong place?” (Set bales to 0 inside the sensor event.)"]] },
      { type:"content", phase:"excavate", fs:null, kicker:"Big Project check-in", title:"Nearly *Exhibition* time!",
        bullets:["The **Our Place Exhibition** is **next week**.","What do you still need to **finish**?","Could a **variable** help your Smart Farm (count bales, sheep or pivot turns)?"],
        visual:{ level:true },
        notes:[["SAY","1-minute check-in for all Big Projects."]] },
      { type:"paths", phase:"paths", fs:null, minutes:18,
        notes:[["SAY","“Choose your path. Expected vs actual: write both!”"],["CLICK","Start the 18-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Luke 16:10."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 12."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess. Devices away."],["CLICK","C = wheat sheaves."]] }
    ]
  };

  /* ======================= FRIDAY · ART ======================= */
  const fri = {
    id:"w09-fri", week:9, day:"fri", subject:"art", duration:50,
    title:"My Place Triptych: Build Week", guide:"tom",
    codes:["VA-PK","VA-DI","VA-CI","VA-UC"],
    coverage:"Visual Arts (NZC 2007, Level 3): developing ideas (selecting and refining work into a triptych); developing practical knowledge (combining techniques from the term); communicating and interpreting (artist statements).",
    li:"We are learning to bring our best work together into a My Place triptych, and to write an artist statement.",
    sc:["I can choose and refine pieces for Land, River and Sky.","I can make the three panels work together.","I can write an artist statement that explains my choices."],
    vocab:[
      { w:"triptych", say:"TRIP-tick", def:"an artwork made of three panels that belong together" },
      { w:"panel", def:"one part of a triptych" },
      { w:"refine", def:"to improve something with small careful changes" },
      { w:"unity", def:"when the parts of an artwork feel like they belong together" },
      { w:"artist statement", def:"a short piece of writing that explains an artwork and the artist's choices" },
      { w:"exhibition", def:"a public display of artworks" }
    ],
    prep:{ min:15, items:["Triptych folders (all term's art pieces)","Three A4 or A3 mounting boards per student, glue, scissors","All media from the term: pastels, watercolour, collage paper, ochre, ink"] },
    safety:["Scissors and glue rules. Watercolour water pots on the table centre."],
    tikanga:["Check every panel uses students' own designs only (no copied rock-art figures or Māori patterns as decoration, §17.4)."],
    hononga:"**Both names.** Many triptychs will show the river. Encourage students to title it with **both names**, Hakatere and Ashburton, as the restored map does.",
    paths:[
      { id:"A", name:"The Writer", product:"Artist Statement", steps:["Write a **4–6 sentence artist statement** for your triptych.","Explain **one technique** in each panel and **why** you chose it.","Finish with **what you want viewers to feel** about our place."], flying:"Include a quote from your Field Journal about what you learned this term." },
      { id:"B", name:"The Maker", product:"Triptych Build", steps:["Choose your **best Land, River and Sky** pieces (or make a new one).","**Refine** them: trim, add details, strengthen colour.","Mount them side by side so they **work together** (a line or colour that flows across)."], flying:"Add a small title card with both names: Hakatere / Ashburton." },
      { id:"C", name:"The Curator", product:"Exhibition Plan", steps:["Plan **how the class triptychs will be displayed** next week.","Group them by **theme or colour**, and plan **labels**.","Make a **welcome sign** for whānau."], flying:"Write a short exhibition introduction for visitors." }
    ],
    supportedShort:"statement sentence starters, a panel-choice checklist, partner support.",
    lens:{
      pillar:"manaaki", title:"God's handiwork",
      look:"Look again at the three panels: land, river and sky, made with care.",
      ref:"Ephesians 2:10",
      paraphrase:"We are God's handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.",
      talk:[
        { q:"You've made a work of art about our place. Paul says we are God's work of art. What does that mean?", listen:"God made us carefully; we're valuable; we have a purpose; He's still working on us." },
        { q:"What ‘good works’ could your art do?", listen:"Bring joy; help people love our place; tell true stories; honour others." }
      ],
      live:"Invite **someone special** to the Week 10 Exhibition, and tell them one thing about your triptych."
    },
    clue:{ prompt:"Friday's clue is the Survey Seal: combine this week's four Trig Clues.", answer:33, explain:"15 + 2 + 4 + 12 = 33 → bearing 033°." },
    next:"Next week — Sheet X · Our Place: the full map, the Exhibition, and a decision about the map's future.",
    rubric:[
      { c:"Selecting & refining", code:"VA-DI",
        d:["Chooses pieces with help.","Three unrelated pieces."],
        a:["Chooses and refines pieces for Land, River and Sky.","Trimmed, mounted pieces with added detail."],
        f:["Explains why each piece was chosen.","“I chose my layered mountains because they show depth best.”"],
        i:["I can choose pieces with help.","I can choose and refine my pieces.","I can explain my choices."] },
      { c:"Unity", code:"VA-PK · VA-DI",
        d:["Panels don't connect.","Different sizes and colours."],
        a:["Makes the three panels work together.","A river line flows across all three panels."],
        f:["Uses colour, line or theme to create strong unity.","Repeated blue-grey and a horizon line at the same height."],
        i:["I can put three panels together.","I can make them work together.","I can create strong unity."] },
      { c:"Artist statement", code:"VA-CI · VA-UC",
        d:["Writes what it shows.","“It's mountains.”"],
        a:["Explains techniques and choices.","“In the Sky panel I used wet-on-wet to show a nor'west sky.”"],
        f:["Explains meaning and links to the term's learning.","“I wanted both names in my title because Hakatere was here first.”"],
        i:["I can say what it shows.","I can explain my techniques and choices.","I can explain the meaning."] }
    ],
    plan:{
      prior:"Students have made pieces all term: sketching (W1), flat colour (W2), layers (W3), line and pattern (W4), wet-on-wet (W5), own symbols (W6), printmaking (W7), collage (W8).",
      kc:["Managing self","Using language, symbols & texts"],
      sequence:[
        ["0–6","Field Note","Tom's message. Trig Check (Thursday). LI/SC.","Recall; open folders."],
        ["6–14","Survey","**Triptych Planner**; unity; artist statements.","Plan; choose."],
        ["14–40","Choose Your Path (26 min)","Introduce A/B/C. Roam: “What connects your panels? Why that technique?”","Statement / build / exhibition plan."],
        ["40–45","Through the Lens","Ephesians 2:10 — gallery reflection.","Gallery walk."],
        ["45–50","Survey Seal & Dealer","Survey Seal IX: 15 + 2 + 4 + 12 = 33 → 033°. The Dealer is exposed. Self-assess; wheat sheaves.","Add; dial; discuss."]
      ],
      diff:{
        supported:"Sentence starters; checklist; partner.",
        esol:"Statement in two languages if helpful; picture prompts.",
        learning:"Fewer, larger panels; scribe support; calm screen available.",
        flying:"Strong unity; statements linking meaning and learning."
      },
      assess:{
        lookFor:["Chooses and refines pieces","Creates unity","Writes an artist statement"],
        evidence:["Triptychs (photograph)","Artist statements","Exit self-assessment"]
      },
      inquiry:["Who needs extra time before the Exhibition?","Are titles using both names?","Exhibition set-up plan: who, where, when."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"tom", meta:"Studio · folders open",
        msg:"Open your **triptych folders**. Mountains sketched in Week 1, layered ranges, braided rivers, nor'west skies, prints of the winter stars, patchwork plains… That's a whole term of seeing **our place**. Today you bring it together: **Land, River, Sky**.",
        notes:[["SAY","Read the message. 🟡 Tom is fictional."],["CLICK","Give 2 minutes to look through folders."]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"What is a variable?", a:"A named box that stores a value that can change." }, { q:"Why do we set a counter to 0 at the start?", a:"To initialise it, so the count starts fresh." }, { q:"What goes in a test table?", a:"Input, expected result, actual result, pass/fail." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"interactive", phase:"excavate", fs:"real", paper:true, kicker:"Plan your three panels", title:"Triptych Planner", ix:"triptych",
        notes:[["CLICK","Tap each panel to try a different technique from the term. (→ steps through combinations.)"],["ASK","“Which combination feels most like our place? What connects the three?”"]] },
      { type:"content", phase:"excavate", fs:null, paper:true, kicker:"Making it work", title:"*Unity* & the artist statement",
        bullets:["**Unity:** connect the panels with a **line** (a river or horizon), a **colour**, or a **theme** that flows across.","**Refine:** trim edges, strengthen colour, add one detail to each panel.","**Artist statement:** what it shows, **one technique per panel and why**, and what you want viewers to **feel**."],
        visual:{ artefact:"palette" },
        notes:[["SAY","Show one example triptych layout on the board."]] },
      { type:"paths", phase:"paths", fs:null, minutes:26,
        notes:[["SAY","“Choose your path. Everyone finishes their panels; A, B and C are your extra role.”"],["CLICK","Start the 26-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move. 5-minute gallery reflection."],["SAY","Read Ephesians 2:10."]] },
      { type:"folioseal", phase:"decode", fs:"story",
        notes:[["SAY","“Four clues. Add them to get the bearing.”"],["CLICK","Tap each ‘?’ tile. 15 + 2 + 4 + 12 = 33. Dial 033° and press ‘Fix the bearing’."],["SAY","Read the reveal: the names restored, and the surveyor's last entry."]] },
      { type:"intercept", phase:"decode", fs:"story", meta:"Intercepted message",
        msg:"[Not meant for the restoration team] Buyer overseas confirmed. Once I have all ten sheets and the field book, the map leaves the country. Nobody here will even notice. — D.",
        ask:"Now we know the Dealer's plan. What should happen to the map, and who should decide?",
        notes:[["SAY","“This message wasn't meant for us. It was sent by mistake.” Read it in the Dealer's voice."],["ASK","“Why does it matter where the map ends up?”"],["LISTEN","It's our history; it has Kāi Tahu names and stories; it belongs to the community; it should be seen, not hidden; mana whenua should have a say."],["NOTE","Bank answers for next week's final vote."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess. Celebrate Sheet IX!"],["CLICK","C = wheat sheaves. Store triptychs safely for the Exhibition."]] }
    ]
  };

  BM.WEEKS[9] = {
    n:9,
    story:"Sheet IX: the faded pencil names are restored in ink, and the field book's last entry is an apology. This week historians follow Te Kerēme from Tiramōrehu's 1849 letter to the 1998 settlement and apology; geographers trace the river back to snow and ice in a warming world; astronomers find south and learn Pacific wayfinding; coders count the harvest with variables; and artists build their My Place triptychs. Friday's seal reveals the names, and the Dealer's real plan is exposed.",
    hononga:"Te Kerēme, the apology and Hakatere Marae (Mon) · kaitiakitanga of water (Tue) · Polynesian and Māori wayfinding (Wed) · counting what matters (Thu) · both names on our art (Fri). Check all local framing with your Māori lead and Te Rūnanga o Arowhenua (D3), especially Monday.",
    seal:{
      answer:33,
      instruction:"Add the four **Trig Clues** from Monday to Thursday. The total is a **bearing**. Dial it on the theodolite to crack the wax seal.",
      reveal:"🟡 **Sheet IX restored:** the faded pencil names inked in at last: **Hakatere**, **Ō Tū Wharekai**, **Te Kiekie**, side by side with the English names. And the field book's last entry: *I wrote their names in pencil, and let others ink over them. I am sorry.* Next week: *Our Place*.",
      art:() => { const v = BM.art.sheetArt(9); v.setAttribute("style", "width:100%;height:100%"); return v; }
    },
    lessons:[mon, tue, wed, thu, fri]
  };
})(window.BM);
