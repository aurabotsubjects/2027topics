/* ==========================================================
   WEEK 6 — STAGE VI · REBUILDING THE WALLS (Big Projects chosen)
   Jerusalem's broken walls. All teams must cooperate to rebuild one wall together.
   Notes: [KEY, text]  KEY = SAY ASK LISTEN IF CLICK TALK DEEPER PACE SAFETY WAIT NOTE CARE SIDE
   ========================================================== */
(function(BM){
  "use strict";

  /* ======================= MONDAY · HISTORY ======================= */
  const mon = {
    id:"w06-mon", week:6, day:"mon", subject:"history", duration:50,
    title:"Ezra & Nehemiah: Going Home to Rebuild", guide:"shirin",
    codes:["SS-H","SS-C","EN","RE"],
    coverage:"Y5–6 History practices (2027 Social Sciences): chronology (Cyrus → Ezra → Nehemiah), cause and consequence, leadership. Civics: how leaders organise people.",
    li:"We are learning why the exiles returned and how Nehemiah led the rebuilding of Jerusalem's walls.",
    sc:["I can put Cyrus, Ezra and Nehemiah in order.","I can explain how Nehemiah combined prayer and action.","I can describe the opposition and how the people kept going."],
    vocab:[
      { w:"Nehemiah", say:"nee-uh-MY-uh", def:"a Jewish cupbearer to King Artaxerxes who led the rebuilding of Jerusalem's walls" },
      { w:"Ezra", def:"a priest and teacher who came to Jerusalem to teach God's law" },
      { w:"Artaxerxes", say:"ar-tuh-ZERK-seez", def:"a Persian king (son of Xerxes) who let Nehemiah go to Jerusalem" },
      { w:"cupbearer", def:"a trusted servant who served the king his wine (and checked it was safe)" },
      { w:"exile", def:"being forced to live away from your homeland" },
      { w:"opposition", def:"people who work against what you are doing" },
      { w:"leadership", def:"guiding and organising people towards a shared goal" }
    ],
    prep:{ min:5, items:["Class Bible marked at Nehemiah 1–6 (especially 2:1–8, 4:6, 6:15)","Caravan Journals","Path B: blocks, card or LEGO for the wall model"] },
    safety:[],
    care:["Some students may have experienced families rebuilding after loss or moving. Keep ‘rebuilding’ hopeful and general."],
    hononga:"**Rebuilding together.** After the Canterbury earthquakes (2010–2011), whole communities worked together to rebuild homes, schools and churches. Like Nehemiah's families, each group took a section.",
    paths:[
      { id:"A", name:"The Scribe", product:"Nehemiah's Leadership Report", steps:["Write **four things Nehemiah did** as a leader (pray, ask, plan, organise, guard).","Give a **Bible reference** for each (Nehemiah 1–6).","Finish: **“The most important thing a leader does is… because…”**"], flying:"Compare Nehemiah with Darius (Week 3): how were their ways of organising similar and different?" },
      { id:"B", name:"The Artisan", product:"Wall Model with Team Sections", steps:["Build a **section of wall** with your team (blocks, card or LEGO).","Label it with a **gate name** from Nehemiah 3.","Join it to the other teams' sections to make **one wall**."], flying:"Add a ‘guard post’ and explain how the builders worked with one hand and held a weapon with the other (Neh 4:17)." },
      { id:"C", name:"The Herald", product:"Interview with Nehemiah", steps:["Plan **four questions** for Nehemiah and answer them **from the Bible text**.","Include: Why did you weep? How did you ask the king? What did the mockers say?","Perform it (**1–2 minutes**)."], flying:"Add a question from a mocker, and Nehemiah's answer from Nehemiah 2:20." }
    ],
    supportedShort:"event cards to order (Cyrus → Ezra → Nehemiah); sentence starters; partner reading of Nehemiah 2.",
    lens:{
      pillar:"manaaki", title:"They worked with all their heart",
      look:"Look again at the wall: **every family** took a section, side by side.",
      ref:"Nehemiah 4:6",
      paraphrase:"So we rebuilt the wall until all of it reached half its height, for the people **worked with all their heart**.",
      talk:[
        { q:"What made Nehemiah's team succeed?", listen:"Prayer, a clear plan, everyone had a job, working together, not giving up, trusting God." },
        { q:"How could our class ‘rebuild’ something together?", listen:"A friendship, the class garden, the library corner, our class kindness, helping a family." }
      ],
      live:"Choose one way you'll **work with all your heart** for your team this week. Write it in your Caravan Journal."
    },
    clue:{ prompt:"How many days did it take to rebuild the wall of Jerusalem (Nehemiah 6:15)?", answer:52, explain:"52 days. Waystation Clue 1 = 52, saved for Friday!" },
    next:"Tuesday — Farhad: why did cities have walls and gates?",
    rubric:[
      { c:"Chronology", code:"SS-H",
        d:["Names Nehemiah.","“Nehemiah built a wall.”"],
        a:["Orders Cyrus → Ezra → Nehemiah.","“Cyrus let the exiles go home; later Ezra came to teach; then Nehemiah rebuilt the walls.”"],
        f:["Links the order to the Persian kings.","“Cyrus, then Darius (temple finished), then Artaxerxes sent Ezra and Nehemiah.”"],
        i:["I can name Nehemiah.","I can order Cyrus, Ezra and Nehemiah.","I can link them to the Persian kings."] },
      { c:"Prayer and action", code:"RE · SS-C",
        d:["Says Nehemiah prayed.","“He prayed.”"],
        a:["Explains how he combined prayer and action.","“He prayed, then asked the king, then made a plan and organised the families.”"],
        f:["Explains why both matter.","“Prayer kept him trusting God; planning meant the work actually got done.”"],
        i:["I can say he prayed.","I can explain how he combined prayer and action.","I can explain why both matter."] },
      { c:"Opposition", code:"SS-H · EN",
        d:["Says people were mean.","“They laughed at them.”"],
        a:["Describes the opposition and the response.","“Sanballat mocked them; Nehemiah prayed and posted guards.”"],
        f:["Explains how the team kept going.","“Half worked while half guarded, and they kept their eyes on God's purpose.”"],
        i:["I can say people opposed them.","I can describe the opposition and response.","I can explain how they kept going."] }
    ],
    plan:{
      prior:"Students know Cyrus's decree (Week 2), Darius and Ezra 6 (Week 3), Esther and Xerxes (Week 5). Artaxerxes is new.",
      kc:["Relating to others","Participating & contributing","Thinking"],
      sequence:[
        ["0–6","The Dispatch","Shirin's dispatch; Waystation Check; LI/SC.","Recall."],
        ["6–20","Discovery","The order of the return; Nehemiah's story; **Wall of 52 Days** (team review).","Answer review questions; build."],
        ["20–38","Choose Your Path","A/B/C.","Create."],
        ["38–45","Through the Lens","Nehemiah 4:6.","Discuss teamwork."],
        ["45–50","Waystation Clue & Exit","Clue 1 (answer 52).","Solve; self-assess."]
      ],
      diff:{
        supported:"Event cards; sentence starters; partner reading.",
        esol:"Act out the cupbearer scene; visual timeline; key words.",
        learning:"Hands-on wall model; movement; chunked steps.",
        flying:"Compare leaders; Nehemiah 4:17 and 2:20."
      },
      assess:{
        lookFor:["Orders Cyrus → Ezra → Nehemiah","Explains prayer and action","Describes opposition and response"],
        evidence:["Path products","Wall of 52 Days answers","Exit self-assessment"]
      },
      inquiry:["Which review questions did teams miss? Revisit before the Week 10 showcase.","Who led well in teams today?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"shirin", meta:"Jerusalem · the broken walls",
        msg:"Caravan, look at this: **Jerusalem**. The temple has been rebuilt, but the city walls are still rubble, and the gates are burned. A man named **Nehemiah** has just arrived from the Persian palace. He's the king's **cupbearer**. And he has a plan… but he needs **everyone**. Every team. Today.",
        notes:[["SAY","Read the dispatch. 🟡 Shirin is fictional; Nehemiah's story is from the Bible."],["ASK","“Why would a big job need everyone?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"Who was Queen Esther's king, probably?", a:"Xerxes I (Ahasuerus)." }, { q:"What is a tell?", a:"A hill made of towns built one on top of another." }, { q:"What force holds an arch together?", a:"Compression." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Going home in stages", title:"Cyrus → Ezra → Nehemiah",
        cards:[ { big:"1", t:"Cyrus", d:"Lets the exiles **go home** and rebuild the temple (Ezra 1).", foot:"539 BC onwards" }, { big:"2", t:"Darius", d:"Finds Cyrus's decree; the **temple is finished** (Ezra 6).", foot:"Week 3" }, { big:"3", t:"Ezra", d:"A priest who comes to **teach God's law** (Ezra 7).", foot:"under Artaxerxes" }, { big:"4", t:"Nehemiah", d:"The king's cupbearer who **rebuilds the walls** (Nehemiah 1–6).", foot:"under Artaxerxes" } ],
        notes:[["SAY","“The return happened in stages, over many years, under several Persian kings.”"],["ASK","“Which of these kings have we already met?”"]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Nehemiah 1–6", title:"Prayer, then action",
        bullets:["**Cupbearer** to King **Artaxerxes**, Nehemiah heard the walls were broken and **prayed** (Neh 1–2).","He **asked the king**, then **planned**: families rebuilt **next to their homes** (Neh 3).","Mocked, he **prayed and posted guards**: done in **52 days** (Neh 6:15)."],
        visual:{ map:{ theme:"paper", labels:true, ranges:false, deserts:false, cities:["jerusalem","babylon","susa"] }, size:700 },
        notes:[["SAY","Read the points. Show Susa (where Nehemiah served the king) and Jerusalem on the map."],["ASK","“Why build next to your own home?” (You care about it; you protect your family.)"]] },
      { type:"interactive", phase:"excavate", fs:"story", kicker:"Every team builds", title:"The Wall of 52 Days", ix:"wall52",
        notes:[["CLICK","Tap a wall section (or press →). Read its review question; the team answers; the bricks go up."],["SAY","When the shadows appear: “Sanballat and his friends mocked them (Neh 4:2–3). What did the builders do?” (Prayed, kept working.)"],["NOTE","🟡 The review questions are our game; the gate names come from Nehemiah 3."]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAY","“Choose your path. Every product shows prayer AND action.”"],["CLICK","Start the 18-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Nehemiah 4:1–6."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 52."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = darics: award teamwork especially."]] }
    ]
  };

  /* ======================= TUESDAY · GEOGRAPHY ======================= */
  const tue = {
    id:"w06-tue", week:6, day:"tue", subject:"geography", duration:50,
    title:"Walls & Gates: Jerusalem Rebuilt", guide:"farhad",
    codes:["SS-G","SS-C","SS-P","MA"],
    coverage:"Y6 Geography: settlement and urbanisation — how cities are planned, protected and rebuilt; movement of people (the return). Comparing with Aotearoa (pā).",
    li:"We are learning why ancient cities had walls and gates, and how cities are planned and rebuilt.",
    sc:["I can give three reasons cities built walls.","I can explain where gates were placed and why.","I can compare Jerusalem's walls with Māori pā and how NZ cities protect people today."],
    vocab:[
      { w:"wall", def:"a strong barrier around a city" },
      { w:"gate", def:"an opening in a wall that can be closed" },
      { w:"defence", def:"protection from attack" },
      { w:"pā", say:"pah", def:"a Māori fortified village, often on a hill, with palisades, ditches and banks" },
      { w:"palisade", say:"pal-ih-SADE", def:"a fence of strong wooden stakes" },
      { w:"city plan", def:"a map showing how a city is laid out" },
      { w:"migration", def:"people moving from one place to live in another" }
    ],
    prep:{ min:5, items:["Caravan Journals","Optional: printed outline of a walled city for Path B"] },
    safety:[],
    care:[],
    hononga:"**Pā in Aotearoa.** Māori built **pā** on hills and headlands. Defenders built tall **palisades** of strong timber and dug **deep ditches**, using the soil to build **high banks**, with narrow entrances (LEARNZ). Like Jerusalem's gates, entrances were few and well guarded.",
    paths:[
      { id:"A", name:"The Scribe", product:"“Why Walls?” Explanation", steps:["Give **three reasons** cities built walls.","Explain **where gates** should go, with **two examples** from Nehemiah 3.","Compare with a **pā**: one similarity and one difference."], flying:"How do NZ towns ‘protect’ people today without walls? Give three examples." },
      { id:"B", name:"The Artisan", product:"Walled-City Plan", steps:["Draw a **walled city** with a spring, roads and a rubbish area.","Place **at least four gates** where people need them, and name them.","Add a **key** and explain one gate's position."], flying:"Add a scale: if 1 cm = 100 m, how long is your wall?" },
      { id:"C", name:"The Herald", product:"Gatekeeper's Talk", steps:["You are the **gatekeeper** of the Water Gate.","Plan a **1-minute talk**: who comes through, when you close the gate, and why.","Use at least **two facts** from today."], flying:"Answer: “Why not just have one gate?”" }
    ],
    supportedShort:"a city template; gate picture cards; sentence starters.",
    lens:{
      pillar:"mohio", title:"Unless the LORD builds the house",
      look:"Look again at the walls and gates: strong, planned, guarded.",
      ref:"Psalm 127:1",
      paraphrase:"Unless the LORD builds the house, the builders labour in vain. Unless the LORD watches over the city, the guards stand watch in vain.",
      talk:[
        { q:"Nehemiah built strong walls AND prayed. What does Psalm 127 say about where real safety comes from?", listen:"From God; walls help, but God is the true protector." },
        { q:"How can we trust God and still do our part?", listen:"Pray and work; wear seatbelts and pray for safety; plan and trust." }
      ],
      live:"Pray for the safety of one place you care about (home, school, a town). Write it in your Caravan Journal."
    },
    clue:{ prompt:"Ezra 2:64 says 42,360 people returned. How many whole thousands is that?", answer:42, explain:"42,360 → 42 whole thousands. Waystation Clue 2 = 42, saved for Friday!" },
    next:"Wednesday — Gandom: who needs whom in a community?",
    rubric:[
      { c:"Why walls?", code:"SS-G",
        d:["Gives one reason.","“To keep bad people out.”"],
        a:["Gives three reasons.","“Defence, safety at night and control of who comes in.”"],
        f:["Explains costs as well as benefits.","“Walls took huge work and could stop a city growing; gates were weak spots.”"],
        i:["I can give one reason.","I can give three reasons.","I can explain costs and benefits."] },
      { c:"Placing gates", code:"SS-G · SS-P",
        d:["Places a gate.","A gate on any side."],
        a:["Places gates where people need them and explains why.","“The Water Gate near the spring; the Dung Gate towards the rubbish valley.”"],
        f:["Uses Nehemiah 3 as evidence.","“Nehemiah 3 names the Fish Gate and Sheep Gate, so we know what came through them.”"],
        i:["I can place a gate.","I can place gates where they're needed and explain.","I can use Nehemiah 3 as evidence."] },
      { c:"Comparing with Aotearoa", code:"SS-G",
        d:["Names a pā.","“A pā.”"],
        a:["Gives a similarity and a difference.","“Both had few entrances; pā used palisades and ditches, Jerusalem used stone walls.”"],
        f:["Compares with modern protection.","“Today we have civil defence, police and building codes instead of walls.”"],
        i:["I can name a pā.","I can give a similarity and a difference.","I can compare with how we're protected today."] }
    ],
    plan:{
      prior:"Students know why people settle (Week 1) and city layers (Week 5). Many have visited or heard of a pā site.",
      kc:["Thinking","Using language, symbols & texts","Participating & contributing"],
      sequence:[
        ["0–6","The Dispatch","Farhad's dispatch; Waystation Check; LI/SC.","Recall."],
        ["6–20","Discovery","42,360 return; **City Gate Planner**; 🇳🇿 Hononga: pā; turn & talk.","Place gates; compare."],
        ["20–38","Choose Your Path","A/B/C.","Create."],
        ["38–45","Through the Lens","Psalm 127:1.","Discuss."],
        ["45–50","Waystation Clue & Exit","Clue 2 (answer 42).","Solve; self-assess."]
      ],
      diff:{
        supported:"City template; gate cards; sentence starters.",
        esol:"Map visuals; gesture for ‘gate’ and ‘wall’; key words.",
        learning:"Map option; chunked steps.",
        flying:"Costs and benefits; modern protection."
      },
      assess:{
        lookFor:["Three reasons for walls","Sensible gate placement","Compares with pā"],
        evidence:["Path products","Gate Planner discussion","Exit self-assessment"]
      },
      inquiry:["Who could round 42,360 to thousands? Revisit place value.","Did students treat the pā comparison respectfully?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"farhad", meta:"At the burned gates of Jerusalem",
        msg:"Forty-two thousand people came home to this city. **Forty-two thousand!** And the walls are rubble. No walls means no safety at night, and no gates means no market, no control, nothing. Today we plan it properly: **where should the gates go?**",
        notes:[["SAY","Read the dispatch. 🟡 Farhad is fictional."],["ASK","“Why might a city need walls?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"Whose cupbearer was Nehemiah?", a:"King Artaxerxes." }, { q:"How long did the wall take?", a:"52 days." }, { q:"Name two things Nehemiah did as a leader.", a:"Prayed, asked the king, planned, organised families, posted guards." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Coming home", title:"A city fills up again",
        cards:[ { big:"42,360", t:"Returned", d:"Ezra 2:64 counts **42,360** people in the first return.", foot:"Ezra 2" }, { icon:"🚪", t:"Gates named", d:"Nehemiah 3 lists the **gates** and who rebuilt next to each.", foot:"Nehemiah 3" }, { icon:"🏘️", t:"Homes by the wall", d:"Families rebuilt the section **next to their homes**.", foot:"Nehemiah 3:23, 28" } ],
        notes:[["SAY","“42,360 people: that's more than the whole population of Ashburton town.”"],["NOTE","Ashburton's population is roughly 20,000 (urban area); check a current figure if you want to compare exactly."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Where should the gates go?", title:"The City Gate Planner", ix:"gateplanner",
        notes:[["CLICK","Press →: why walls → where gates → then each gate is placed. Or let the class choose by tapping the ? marks."],["ASK","At the last spot: “Why is this a bad place for a gate?”"],["NOTE","Simplified plan. Gate names (Water, Sheep, Valley, Dung) come from Nehemiah 3."]] },
      { type:"hononga", phase:"excavate", fs:"real", title:"*Pā* in Aotearoa",
        body:"Māori built **pā** on hills, ridges and headlands.\n\nDefenders built tall **palisades** of strong timber, dug **deep ditches**, and used the soil to build **high banks**. Entrances were **narrow** and few (LEARNZ).\n\n**How are pā like Jerusalem's walls? How are they different?**",
        notes:[["ASK","Similarities: few entrances, height, guarding. Differences: timber and earth vs stone; hilltops vs a city."],["CARE","Many pā sites are wāhi tapu (sacred places). Speak respectfully."],["NOTE","Source: LEARNZ, Archaeological remains of pā."]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAY","“Choose your path. Every product explains walls AND gates.”"],["CLICK","Start the 18-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Psalm 127:1."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 42."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = darics."]] }
    ]
  };

  /* ======================= WEDNESDAY · SCIENCE ======================= */
  const wed = {
    id:"w06-wed", week:6, day:"wed", subject:"science", duration:50,
    title:"Living Together: Mutualism, Parasitism & Competition", guide:"gandom",
    codes:["SC-LW","SC-P","EN"],
    coverage:"Y5 Science (2027): relationships in ecosystems, including mutualism and parasitism; competition for resources.",
    li:"We are learning to describe the relationships between species in a community.",
    sc:["I can define mutualism, parasitism and competition.","I can give an example of each.","I can explain how these relationships affect populations."],
    vocab:[
      { w:"mutualism", say:"MYOO-choo-uh-liz-um", def:"a relationship where both living things benefit" },
      { w:"parasitism", say:"PAIR-uh-sy-tiz-um", def:"a relationship where one benefits and the other is harmed" },
      { w:"parasite", def:"a living thing that lives on or in another and harms it" },
      { w:"host", def:"the living thing a parasite lives on or in" },
      { w:"competition", def:"when living things need the same limited resource" },
      { w:"pollination", def:"moving pollen between flowers so they can make seeds and fruit" },
      { w:"resource", def:"something living things need, like food, water, light or space" }
    ],
    prep:{ min:10, items:["Caravan Journals","Path B: blank cards for a relationship card game","Optional: a pomegranate or picture of one (fruit of Persian gardens)"] },
    safety:[],
    care:[],
    hononga:"**Partners in Aotearoa.** Our **tūī** and **bellbirds** drink nectar from **kōwhai** and **flax** flowers and carry pollen between them: mutualism. **Possums** compete with native birds for fruit and flowers.",
    paths:[
      { id:"A", name:"The Scribe", product:"Three-Relationship Report", steps:["Write a heading for each: **mutualism, parasitism, competition**.","Give a **definition** and a **Persian example** for each.","Add a **New Zealand example** for at least one."], flying:"Explain how a parasite could affect the size of a host population." },
      { id:"B", name:"The Artisan", product:"Relationship Card Game", steps:["Make **six pairs** of cards: two living things on each pair.","On the back, write **which relationship** it is and **why**.","Play a matching game with a partner."], flying:"Add a ‘tricky’ card where the relationship could change (e.g. too many bees, not enough flowers)." },
      { id:"C", name:"The Herald", product:"“Who Needs Whom?” Role-Play", steps:["In threes, act out **one relationship of each kind**.","Use **win–win, win–lose, lose–lose** body language.","The audience guesses the relationship."], flying:"Narrate how each relationship affects the populations." }
    ],
    supportedShort:"relationship picture cards; win/lose emoji key; sentence starters.",
    lens:{
      pillar:"aroha", title:"Every part needs the others",
      look:"Look again at the bees and flowers: each **needs** the other.",
      ref:"1 Corinthians 12:21–26",
      paraphrase:"The eye can't say to the hand, “I don't need you!” The parts that seem weaker are needed. If one part suffers, every part suffers with it; if one part is honoured, every part rejoices.",
      talk:[
        { q:"Paul says God's people are like a body. How is that like mutualism?", listen:"Each part helps the others; everyone benefits; no part is useless." },
        { q:"Our class is a community. Who might feel ‘not needed’? How can we change that?", listen:"Include them, ask for their help, notice their gifts." }
      ],
      live:"Find one person this week and tell them **how they help** the class."
    },
    clue:{ prompt:"How many kinds of relationship between species did we learn today?", answer:3, explain:"Mutualism, parasitism and competition = 3. Waystation Clue 3 = 3, saved for Friday!" },
    next:"Thursday — Nasrin: the courier needs exact instructions. Algorithms!",
    rubric:[
      { c:"Definitions", code:"SC-LW",
        d:["Defines one relationship.","“Mutualism is when both are happy.”"],
        a:["Defines all three accurately.","“Mutualism: both benefit. Parasitism: one benefits, one is harmed. Competition: both need the same resource.”"],
        f:["Uses the words host, parasite and resource correctly.","“The tick is the parasite; the camel is the host.”"],
        i:["I can define one.","I can define all three.","I can use host, parasite and resource correctly."] },
      { c:"Examples", code:"SC-LW",
        d:["Gives one example.","Bees and flowers."],
        a:["Gives an example of each.","Bees and pomegranates; ticks on camels; leopards and wolves."],
        f:["Gives a New Zealand example and explains it.","“Tūī pollinate kōwhai and get nectar: mutualism.”"],
        i:["I can give one example.","I can give an example of each.","I can give and explain an NZ example."] },
      { c:"Effects on populations", code:"SC-LW · SC-P",
        d:["Says something changes.","“There'd be fewer.”"],
        a:["Explains one effect on a population.","“If ticks spread, camels get weaker and fewer calves may survive.”"],
        f:["Predicts a chain of effects.","“Without bees, fewer pomegranates; fewer seeds; fewer trees; less food for animals.”"],
        i:["I can say something changes.","I can explain one effect.","I can predict a chain of effects."] }
    ],
    plan:{
      prior:"Students know food chains, webs and predator–prey (Weeks 2–3). Relationships other than eating are new.",
      kc:["Thinking","Relating to others","Using language, symbols & texts"],
      sequence:[
        ["0–6","The Dispatch","Gandom's dispatch; Waystation Check; LI/SC.","Recall."],
        ["6–20","Discovery","Three relationships; **Relationship Sorter**; 🇳🇿 Hononga; turn & talk.","Vote; sort."],
        ["20–38","Choose Your Path","A/B/C.","Create."],
        ["38–45","Through the Lens","1 Corinthians 12:21–26.","Discuss."],
        ["45–50","Waystation Clue & Exit","Clue 3 (answer 3).","Solve; self-assess."]
      ],
      diff:{
        supported:"Picture cards; emoji key; sentence starters.",
        esol:"Gestures for win/lose; pictures; key words.",
        learning:"Card game; role-play; chunked steps.",
        flying:"Population effects; tricky cards."
      },
      assess:{
        lookFor:["Defines three relationships","Gives examples","Explains effects"],
        evidence:["Path products","Sorter votes","Exit self-assessment"]
      },
      inquiry:["Who confused competition with predation?","Link to Week 9's Caspian seal (bycatch: a different human impact)."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"gandom", meta:"A garden outside Jerusalem's walls",
        msg:"Ugh, **ticks**. Tiny hitchhikers drinking my blood, and they give **nothing** back. Unlike those **bees** over there: they visit the flowers, the flowers feed them, everybody's happy. And see those two trees fighting over one water channel? Nobody's happy. **Three ways to live together.** Guess which one I like least.",
        notes:[["SAY","Read it in Gandom's voice. 🟡 Gandom is fictional."],["ASK","“Which relationship does Gandom like least? Why?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"How many people returned in Ezra 2?", a:"42,360." }, { q:"Give one reason cities built walls.", a:"Defence, safety at night, control of who comes in." }, { q:"What is a pā?", a:"A Māori fortified village with palisades, ditches and banks." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Living together", title:"Three relationships",
        cards:[ { icon:"🐝🌸", t:"Mutualism", d:"**Both win.** Bees get nectar; fruit-tree flowers get pollinated.", foot:"win–win" }, { icon:"🕷️🐫", t:"Parasitism", d:"**One wins, one loses.** A tick drinks a camel's blood.", foot:"win–lose" }, { icon:"🐆🐺", t:"Competition", d:"**Both lose a little.** Leopards and wolves hunt the same goats.", foot:"lose–lose" } ],
        notes:[["SAY","Read each card. Use thumbs: up-up, up-down, down-down."],["NOTE","Y5 Science includes mutualism and parasitism (Ministry of Education). Examples are standard science examples."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Win–win, win–lose, lose–lose", title:"The Relationship Sorter", ix:"relsort",
        notes:[["CLICK","Hold up each card; class votes; drag it."],["ASK","At the oxpecker: “Is the bird helping or hurting?” (Mostly helping: it eats ticks.)"]] },
      { type:"hononga", phase:"excavate", fs:"real", title:"Partners in *Aotearoa*",
        body:"**Tūī** and **bellbirds** drink nectar from **kōwhai** and **flax** flowers, and carry pollen from flower to flower: **mutualism**.\n\nIntroduced **possums** eat the same fruit and flowers: **competition** with our native birds.\n\n**Can you think of a parasite in New Zealand?** (Fleas on a dog, nits on a head!)",
        notes:[["ASK","“Can you think of a parasite in New Zealand?”"],["LISTEN","Fleas, nits (head lice), worms in pets, varroa mites on bees."]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAY","“Choose your path. Every product has all three relationships.”"],["CLICK","Start the 18-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read 1 Corinthians 12:21–26."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 3."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = darics."]] }
    ]
  };

  /* ======================= THURSDAY · TECHNOLOGY ======================= */
  const thu = {
    id:"w06-thu", week:6, day:"thu", subject:"technology", duration:50,
    title:"Royal Road Messages 1: Relay Algorithms", guide:"nasrin",
    codes:["DT-CT","TE-TP","MA"],
    coverage:"Digital Technologies — Computational Thinking, Progress Outcome 2: give, follow and debug simple algorithms (sequence).",
    li:"We are learning to write and follow precise algorithms.",
    sc:["I can explain what an algorithm is.","I can write step-by-step instructions.","I can find and fix a bug in someone's instructions."],
    vocab:[
      { w:"algorithm", say:"AL-guh-rith-um", def:"a precise, step-by-step set of instructions" },
      { w:"sequence", def:"steps done in a set order" },
      { w:"bug", def:"a mistake in an algorithm or program" },
      { w:"debug", def:"to find and fix a mistake" },
      { w:"program", def:"an algorithm written so a computer can follow it" },
      { w:"precise", def:"exact; no guessing needed" },
      { w:"relay", def:"handing a message from one person to the next" }
    ],
    prep:{ min:10, items:["Masking tape grid on the floor (or a chalk grid outside): 7 × 4 squares","Cones or chairs as ‘mountains’, a sign for the ‘palace’","Arrow cards (⬆️ ⬇️ ⬅️ ➡️) for each team","iPads with Scratch (optional, for Path B)"] },
    safety:["Walk, don't run, on the grid.","Keep the grid area clear of bags."],
    care:[],
    hononga:"**Instructions in Aotearoa.** Every time a bus driver follows a route, or a robot vacuum cleans a room, someone wrote an **algorithm**. Even a recipe for pavlova is an algorithm!",
    paths:[
      { id:"A", name:"The Scribe", product:"Algorithm Written & Tested", steps:["Write an algorithm (arrows) to get the courier from 🏁 to the palace on the class grid.","Give it to **another team** to follow **exactly**.","Record any **bugs** and how you fixed them."], flying:"Write the shortest possible algorithm. How do you know it's the shortest?" },
      { id:"B", name:"The Artisan", product:"Scratch / Block Sim Route", steps:["In **Scratch** (or the Block Sim), make a courier sprite move from station to station.","Use **move** and **turn** blocks in the right **sequence**.","Test it, find a bug, fix it."], flying:"Add a second courier who takes over halfway: a relay!" },
      { id:"C", name:"The Herald", product:"Human-Robot Relay", steps:["One person is the **courier robot**; another reads the algorithm.","The robot does **exactly** what is said, nothing more.","Show the class a bug, then fix it."], flying:"Explain why computers need even more precise instructions than people." }
    ],
    supportedShort:"arrow cards to lay out; a smaller grid; a partner to check each step.",
    lens:{
      pillar:"manaaki", title:"Fitting and orderly",
      look:"Look again at the algorithm: every step **in order**, nothing missed.",
      ref:"1 Corinthians 14:40",
      paraphrase:"Everything should be done in a fitting and orderly way.",
      talk:[
        { q:"Why does order matter, in an algorithm and in a team?", listen:"So everyone knows what to do; no one is confused; things get done well." },
        { q:"How can our class serve each other by being orderly?", listen:"Tidy up, take turns, clear instructions, being ready." }
      ],
      live:"Write a short, clear **algorithm for a kind act** (e.g. 1. Notice someone alone. 2. Walk over. 3. Ask them to join). Do it this week."
    },
    clue:{ prompt:"A message passes through 5 stages of the road, with one rider for each stage. How many riders?", answer:5, explain:"5 stages, one rider each = 5 riders. Waystation Clue 4 = 5, saved for Friday!" },
    next:"Friday — Master Hamid: design a paradise garden. And choose your Big Project!",
    rubric:[
      { c:"What is an algorithm?", code:"DT-CT",
        d:["Says it's instructions.","“Steps.”"],
        a:["Explains it's a precise sequence of steps.","“An algorithm is exact steps in the right order.”"],
        f:["Gives an everyday example and explains precision.","“A recipe is an algorithm: if you skip a step, the cake fails.”"],
        i:["I can say it's instructions.","I can explain it's precise steps in order.","I can give an everyday example."] },
      { c:"Writing an algorithm", code:"DT-CT",
        d:["Writes some steps with help.","Arrows that get partway."],
        a:["Writes a complete algorithm that works.","The courier reaches the palace."],
        f:["Writes an efficient algorithm and explains it.","“Nine steps is the fewest because…”"],
        i:["I can write some steps with help.","I can write an algorithm that works.","I can write an efficient one and explain it."] },
      { c:"Debugging", code:"DT-CT · TE-TP",
        d:["Notices something went wrong.","“It didn't work.”"],
        a:["Finds and fixes the bug.","“Step 3 should be ⬆️, not ➡️.”"],
        f:["Explains a strategy for finding bugs.","“We ran it one step at a time and checked where it went wrong.”"],
        i:["I can notice it went wrong.","I can find and fix the bug.","I can explain how I found it."] }
    ],
    plan:{
      prior:"Students know the Royal Road relay (Week 3). Some will have used Scratch or Bee-Bots; others not at all.",
      kc:["Thinking","Managing self","Participating & contributing"],
      sequence:[
        ["0–6","The Dispatch","Nasrin's dispatch; Waystation Check; LI/SC.","Recall."],
        ["6–16","Discovery","What is an algorithm?; **Block Sim** (build, run, debug).","Predict; debug."],
        ["16–38","Unplugged & Paths","Floor-grid relay; then paths (Scratch optional).","Write; follow; debug."],
        ["38–45","Through the Lens","1 Corinthians 14:40.","Discuss."],
        ["45–50","Waystation Clue & Exit","Clue 4 (answer 5).","Solve; tidy."]
      ],
      diff:{
        supported:"Arrow cards; smaller grid; partner checks.",
        esol:"Arrows are universal; demonstrate; key words.",
        learning:"Movement on the floor grid; short steps.",
        flying:"Shortest path; relay in Scratch."
      },
      assess:{
        lookFor:["Explains an algorithm","Writes a working sequence","Debugs"],
        evidence:["Algorithms (photograph)","Scratch projects","Exit self-assessment"]
      },
      inquiry:["Who is ready for loops next week?","Which students could explain their debugging strategy?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"nasrin", meta:"A relay station · horses waiting",
        msg:"The courier's lost! Someone gave him instructions like ‘go that way a bit, then turn somewhere’. **Useless!** On the Royal Road every rider needs **exact** steps: which way, how far, in what order. Engineers call that an **algorithm**. Write me a good one, and the message gets through.",
        notes:[["SAY","Read the dispatch. 🟡 Nasrin is fictional."],["ASK","“What makes instructions good?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"What is mutualism?", a:"A relationship where both benefit." }, { q:"Give an example of parasitism.", a:"Ticks on a camel; fleas on a dog." }, { q:"What is competition?", a:"When living things need the same limited resource." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Computational thinking", title:"What is an *algorithm*?",
        bullets:["An **algorithm** is a **precise, step-by-step** set of instructions.","The steps must be in the right **order** (sequence).","A mistake is a **bug**. Finding and fixing it is **debugging**.","Royal messages went by **relay**: rider to rider, station to station, every step planned."],
        visual:{ artefact:"app" },
        notes:[["SAY","Read the points."],["ASK","“What algorithms do you follow every day?” (Brushing teeth, a recipe, getting to school.)"],["NOTE","Sources: Technology Online (Progress Outcome 2); Livius (Royal Road)."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Build · run · debug", title:"The Block Sim", ix:"blocksim",
        notes:[["CLICK","Press →: build → a working algorithm (press Run) → a buggy one (Run it: where does it fail?) → debugged."],["ASK","At the bug: “Which step is wrong or missing?”"],["DEEPER","“Can you find a shorter route?”"]] },
      { type:"safety", phase:"excavate", fs:"real", title:"Floor-grid rules",
        items:[ { icon:"🚶", t:"Walk", d:"The courier walks one square per step. No running." }, { icon:"🎒", t:"Clear the grid", d:"Bags and chairs off the grid." }, { icon:"👂", t:"Follow exactly", d:"The robot does only what is read out, nothing more." } ],
        notes:[["SAFETY","Read each rule. Set up the tape grid before the lesson."]] },
      { type:"paths", phase:"paths", fs:null, minutes:22,
        notes:[["SAY","“Every team runs the floor relay first, then completes their path.”"],["CLICK","Start the 22-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read 1 Corinthians 14:40."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 5."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = darics."]] }
    ]
  };

  /* ======================= FRIDAY · ART ======================= */
  const fri = {
    id:"w06-fri", week:6, day:"fri", subject:"art", duration:50,
    title:"Paradise Gardens: Designing a Chahar Bagh", guide:"hamid",
    codes:["VA-PK","VA-DI","VA-UC","MA"],
    coverage:"Visual Arts (NZC 2007, Level 3): developing ideas (a symmetrical garden plan), practical knowledge (line, symmetry, pattern), understanding art in context (Persian gardens). Maths: symmetry, Old Persian number signs. Big Projects chosen.",
    li:"We are learning to design a symmetrical Persian-style garden plan.",
    sc:["I can explain the four-part garden idea.","I can use symmetry and water lines in my plan.","I can add plants, pools and paths."],
    vocab:[
      { w:"chahar bagh", say:"cha-HAR bahg", def:"‘four gardens’: a garden divided into four parts by water channels" },
      { w:"symmetry", def:"when one half matches the other like a mirror image" },
      { w:"line of symmetry", def:"the line where a shape can be folded so both halves match" },
      { w:"pavilion", say:"puh-VIL-yun", def:"a small open building in a garden" },
      { w:"plan view", def:"a drawing seen from directly above" },
      { w:"paradise", def:"from an old Persian-family word meaning an enclosed park or garden" }
    ],
    prep:{ min:5, items:["Squared paper (10 × 10 grid) and coloured pencils","Rulers","Big Project choice sheets (one per student)","Optional: a mirror to check symmetry"] },
    safety:[],
    care:[],
    hononga:"**Gardens in Aotearoa.** Many NZ towns have formal gardens with paths, fountains and symmetry, like Ashburton Domain or Christchurch's Botanic Gardens. Where have you seen a garden designed with straight paths and water?",
    paths:[
      { id:"A", name:"The Designer", product:"Garden Plan + Description", steps:["Draw a **plan view** of a chahar bagh on squared paper.","Use **two lines of symmetry** and **water channels** dividing four parts.","Write a **description**: what visitors would see, hear and smell."], flying:"Explain how water would reach your garden (hint: Week 2's qanat!)." },
      { id:"B", name:"The Artisan", product:"Collaborative Class Garden", steps:["Each student designs **one square** of the class garden.","Make sure your square **matches** its mirror partner's square.","Join all squares on the wall to make **one great garden**."], flying:"Add a border pattern from earlier weeks (rosettes, archers)." },
      { id:"C", name:"The Herald", product:"Garden Tour Guide", steps:["Use the Garden Grid or your plan to give a **1-minute tour**.","Explain the **four parts**, the **water** and the **symmetry**.","Link your garden to **Genesis 2** or the word **paradise**."], flying:"Compare your garden with Pasargadae's (Week 2): what's the same?" }
    ],
    supportedShort:"a half-drawn plan to mirror; a grid template; partner checking with a mirror.",
    lens:{
      pillar:"sdg", title:"God planted a garden",
      look:"Look again at the four-part garden, with water flowing in four directions.",
      ref:"Genesis 2:8–10",
      paraphrase:"The LORD God planted a garden in the east, in Eden… A river watering the garden flowed from Eden, and from there it divided into four headwaters.",
      talk:[
        { q:"The word ‘paradise’ comes from an old word for a walled garden. Why might people use it for heaven?", listen:"A place of beauty, peace, life and God's presence." },
        { q:"What does it tell us about God that the first home He made for people was a garden?", listen:"He loves beauty, life, growing things; He wanted people to enjoy and care for creation." }
      ],
      live:"Soli Deo Gloria: sign your garden plan **SDG**. Thank God for one beautiful place you've seen."
    },
    clue:{ prompt:"Friday's clue is the Seal Fragment: add this week's four Waystation Clues and write the total in Old Persian number signs.", answer:102, explain:"52 + 42 + 3 + 5 = 102 → one 100-sign and one 2-sign." },
    next:"Next week — Stage VII: The Marketplace of the World. A thief among the camels!",
    rubric:[
      { c:"The four-part garden", code:"VA-UC",
        d:["Says it's a garden.","“A garden with water.”"],
        a:["Explains the chahar bagh idea.","“Water channels divide it into four parts: ‘four gardens’.”"],
        f:["Explains its meaning and history.","“Persian gardens like this are World Heritage; our word paradise comes from a word for an enclosed garden.”"],
        i:["I can say it's a garden.","I can explain the four-part idea.","I can explain its meaning and history."] },
      { c:"Symmetry & water lines", code:"VA-PK · MA",
        d:["Draws some lines.","A plan with one channel."],
        a:["Uses two lines of symmetry with matching quarters.","All four quarters match."],
        f:["Uses symmetry creatively and accurately.","Mirrored patterns with a balanced focal point."],
        i:["I can draw some lines.","I can use two lines of symmetry.","I can use symmetry creatively and accurately."] },
      { c:"Plants, pools & paths", code:"VA-DI",
        d:["Adds one feature.","Some trees."],
        a:["Adds pools, plants and paths in a clear plan.","A labelled plan with a key."],
        f:["Designs for the visitor's experience.","“Shade trees along the path so visitors stay cool on the way to the pool.”"],
        i:["I can add one feature.","I can add pools, plants and paths clearly.","I can design for the visitor's experience."] }
    ],
    plan:{
      prior:"Students made rosettes (radial symmetry, Week 1) and saw Pasargadae's garden channels (Week 2).",
      kc:["Thinking","Managing self","Participating & contributing"],
      sequence:[
        ["0–6","The Dispatch","Hamid's dispatch; Waystation Check; LI/SC.","Recall."],
        ["6–14","Discovery","Persian gardens; **Garden Grid**.","Predict; design."],
        ["14–30","Choose Your Path","A/B/C.","Design."],
        ["30–38","Big Projects","Introduce the five Big Projects; students choose.","Choose; note first ideas."],
        ["38–42","Through the Lens","Genesis 2:8–10.","Discuss."],
        ["42–50","Seal Fragment VI & the Shadow's Note","52 + 42 + 3 + 5 = 102 → 100 + 2.","Solve the lock."]
      ],
      diff:{
        supported:"Half-drawn plan to mirror; grid template.",
        esol:"Demonstrate mirroring; key words with pictures.",
        learning:"Grid squares; one square at a time; mirror check.",
        flying:"Water supply; compare with Pasargadae."
      },
      assess:{
        lookFor:["Explains the chahar bagh","Uses symmetry accurately","Adds features clearly"],
        evidence:["Garden plans (photograph)","Big Project choices","Seal Fragment working (102)"]
      },
      inquiry:["Record each student's Big Project choice.","Who needs support with symmetry?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"hamid", meta:"A royal garden · water running in stone channels",
        msg:"Listen: water, birds, leaves. In a dry land, a garden like this is a **treasure**. Look how it's divided: **four parts**, water running between them, every side matching the other. The Persians had a word for a walled garden like this… and that word became our **paradise**.",
        notes:[["SAY","Read the dispatch. 🟡 Master Hamid is fictional."],["ASK","“Why would a garden be a treasure in a desert?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"What is an algorithm?", a:"A precise, step-by-step set of instructions." }, { q:"What is a bug?", a:"A mistake in an algorithm or program." }, { q:"What is debugging?", a:"Finding and fixing mistakes." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Persian gardens", title:"The *chahar bagh*",
        bullets:["**Chahar bagh** means **“four gardens”**: water channels divide the garden into **four parts**.","UNESCO's World Heritage listing **The Persian Garden** (2011) includes **nine gardens**, designed around **geometry** and **water**.","Pasargadae had stone water channels (Week 2), but whether its garden was four-part is still **debated**."],
        visual:{ artefact:"garden" },
        notes:[["SAY","Read the points."],["NOTE","Sources: World Heritage Site (The Persian Garden: nine gardens, 2011, four sectors); the Met (Pasargadae). The picture is an artwork, not a real garden plan."]] },
      { type:"interactive", phase:"excavate", fs:"real", paper:true, kicker:"Mirror, mirror", title:"The Garden Grid", ix:"gardengrid",
        notes:[["CLICK","Press → to build: water channels → pool → trees → flowers & paths → pavilions. Or choose a tool and tap: everything mirrors into four quarters."],["ASK","“How many lines of symmetry does our garden have?” (Two: across and down.)"]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Choose your Big Project", title:"Big Projects: Weeks 7–10",
        cards:[ { icon:"🏺", t:"Persia Museum Case", d:"One object or person, with a label, a ‘how do we know?’ card, two perspectives and a Bible link.", foot:"History" }, { icon:"🏙️", t:"City Planner", d:"A fair desert city for 10,000 people: water, bazaar, homes and an earthquake plan.", foot:"Geography" }, { icon:"🐆", t:"Wild Persia Sanctuary", d:"A protected area for one endangered animal, with its food web and recovery plan.", foot:"Science" }, { icon:"⚙️", t:"Desert Engineer / Coder", d:"An improved Persian invention, or a Scratch courier game.", foot:"Technology" }, { icon:"🌺", t:"Paradise Garden Panel", d:"A panel combining the term's techniques around a four-part garden.", foot:"Art" } ],
        h:"560px",
        notes:[["SAY","“For the rest of the term you'll build one Big Project, shown at the Week 10 Exhibition.”"],["CLICK","Hand out choice sheets. Students choose, with a reason."],["NOTE","Big Projects follow blueprint §6.2."]] },
      { type:"paths", phase:"paths", fs:null, minutes:16,
        notes:[["SAY","“Design your garden plan. Keep it symmetrical!”"],["CLICK","Start the 16-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Genesis 2:8–10."],["NOTE","‘Paradise’ comes from an Iranian word similar to Avestan pairidaeza, ‘enclosure, park’ (Online Etymology Dictionary)."]] },
      { type:"folioseal", phase:"decode", fs:"story",
        notes:[["SAY","“Four clues: 52, 42, 3, 5.”"],["CLICK","52 + 42 + 3 + 5 = 102."],["SAY","“102: one 100-sign, then one 2-sign. Just two signs!”"],["CLICK","Press 100, 2, then ‘Open the lock’."]] },
      { type:"intercept", phase:"decode", fs:"story",
        msg:"What are those feeble people doing? Will they finish in a day?",
        ask:"The Shadow is mocking us, just like Sanballat mocked Nehemiah's builders (Nehemiah 4:2). How did the builders answer? How will we?",
        notes:[["SAY","Read it in a sneering Shadow voice. 🟡 The Shadow is fictional; the words echo Nehemiah 4:2."],["ASK","“What did Nehemiah do when people mocked?” (Prayed and kept working: Neh 4:4–6.)"]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess. Celebrate Fragment VI!"],["CLICK","C = darics. Record Big Project choices."]] }
    ]
  };

  BM.WEEKS[6] = {
    n:6,
    story:"Jerusalem's broken walls. Nehemiah arrives from the Persian palace, and every team must work together to rebuild. The historians follow Cyrus → Ezra → Nehemiah and rebuild the Wall of 52 Days; the geographers plan the city's gates; the scientists sort mutualism, parasitism and competition; the engineers write relay algorithms and debug them; and the artists design a four-part paradise garden. Big Projects are chosen. On Friday, 52 + 42 + 3 + 5 = 102 frees Fragment VI.",
    hononga:"Rebuilding after the Canterbury earthquakes (Mon) · pā defences (Tue) · tūī, kōwhai and possums (Wed) · algorithms all around us (Thu) · formal gardens in NZ towns (Fri).",
    seal:{
      answer:102,
      instruction:"Add the four **Waystation Clues**. Then write the total in **Old Persian number signs**, biggest first, and press them into the clay. *(100 = the hundred sign · 2 = two upright wedges.)*",
      reveal:"🟡 **Fragment VI found!** It was hidden in the rubble by the Water Gate. Six down, four to go. Next week: *The Marketplace of the World* — a thief among the camels!"
    },
    lessons:[mon, tue, wed, thu, fri]
  };
})(window.BM);
