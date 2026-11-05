/* ==========================================================
   WEEK 8 — STAGE VIII · FIRE ON THE MOUNTAIN
   Persepolis burns. The heaviest setback: the fragment is cracked.
   Notes: [KEY, text]  KEY = SAY ASK LISTEN IF CLICK TALK DEEPER PACE SAFETY WAIT NOTE CARE SIDE
   ========================================================== */
(function(BM){
  "use strict";

  /* ======================= MONDAY · HISTORY ======================= */
  const mon = {
    id:"w08-mon", week:8, day:"mon", subject:"history", duration:50,
    title:"Alexander & the Fall of Persia", guide:"shirin",
    codes:["SS-H","SS-P","EN","RE"],
    coverage:"Y5–6 History practices (2027 Social Sciences): cause and consequence; comparing explanations from different sources; continuity and change. Christian Character: God's kingdom in Daniel.",
    li:"We are learning how the Persian Empire fell, and how Daniel describes kingdoms rising and falling.",
    sc:["I can describe Gaugamela and the burning of Persepolis.","I can compare the reasons ancient writers give for the fire.","I can connect the fall of Persia to Daniel 8 and Daniel 2."],
    vocab:[
      { w:"Alexander the Great", def:"a Macedonian (Greek) king who conquered the Persian Empire" },
      { w:"Darius III", def:"the last Achaemenid king of Persia" },
      { w:"Gaugamela", say:"gaw-guh-MEE-luh", def:"the battle in 331 BC where Alexander defeated Darius III" },
      { w:"conquer", def:"to take control of a place by force" },
      { w:"motive", say:"MOH-tiv", def:"the reason someone does something" },
      { w:"explanation", def:"a reason that tells why something happened" },
      { w:"vision", def:"something seen in a dream or by God's revelation" }
    ],
    prep:{ min:5, items:["Class Bible marked at Daniel 8:20–21 and Daniel 2:44","Caravan Journals","Path C: a gavel or ruler for the ‘judge’"] },
    safety:[],
    care:["Avoid graphic war detail. Keep the focus on sources and explanations.","Some students may feel sad that Persepolis was destroyed. Acknowledge loss, then point to what survived (Friday's art, the people, the stories)."],
    hononga:"**Losing treasures.** In 2011 the Christchurch earthquake damaged the Christchurch Cathedral and many heritage buildings. Losing beautiful old buildings is sad for a whole community, but people, memories and stories survive.",
    paths:[
      { id:"A", name:"The Scribe", product:"Historian's Verdict", steps:["Write the **three explanations** for why Persepolis burned.","For each, say **which source** gives it and **how much you trust it**.","Write your **verdict**: “I think… because…, but we can't be sure because…”"], flying:"Why might a Greek writer and a Persian writer explain the fire differently?" },
      { id:"B", name:"The Artisan", product:"Before-and-After Persepolis", steps:["Draw **Persepolis before** the fire (halls, columns, staircases).","Draw it **after** (ruins, standing columns).","Label **what survived** and **what was lost**."], flying:"Add a third panel: Persepolis today as a World Heritage site." },
      { id:"C", name:"The Herald", product:"Courtroom: Alexander on Trial", steps:["Roles: **judge**, **prosecutor**, **defender**, **witnesses** (ancient writers).","The prosecutor and defender each use **evidence** from the sources.","The class (jury) decides: **which explanation is most convincing?**"], flying:"Add Arrian as a witness who says: “The true motive may never be known.”" }
    ],
    supportedShort:"explanation cards with pictures; a verdict sentence frame; partner pairing.",
    lens:{
      pillar:"mohio", title:"The kingdom that lasts",
      look:"Look again at our timeline: Elam, Media, Babylon, Persia… **every** kingdom we've studied has fallen.",
      ref:"Daniel 8:20–21; Daniel 2:44",
      paraphrase:"The ram is the kings of Media and Persia; the goat is the king of Greece. In the time of those kings, the God of heaven will set up a kingdom that will never be destroyed.",
      talk:[
        { q:"Every kingdom we've studied fell. Which kingdom lasts?", listen:"God's kingdom, which Jesus brings; it will never be destroyed." },
        { q:"How does knowing God's kingdom lasts help us when things fall apart?", listen:"We can trust God; hard times don't have the last word; we have hope." }
      ],
      live:"Write in your Caravan Journal: **“When things fall apart, I can remember…”**"
    },
    clue:{ prompt:"In what year BC did Persepolis burn?", answer:330, explain:"330 BC. Waystation Clue 1 = 330, saved for Friday!" },
    next:"Tuesday — Farhad: when the ground shakes, how do cities rebuild?",
    rubric:[
      { c:"The fall of Persia", code:"SS-H",
        d:["Says Alexander won.","“Alexander beat Persia.”"],
        a:["Describes Gaugamela and the fire, with dates.","“Alexander defeated Darius III at Gaugamela in 331 BC and burned Persepolis in 330 BC.”"],
        f:["Explains consequences.","“The Achaemenid Empire ended, but Persian people and culture continued.”"],
        i:["I can say Alexander won.","I can describe Gaugamela and the fire with dates.","I can explain what happened next."] },
      { c:"Comparing explanations", code:"SS-P",
        d:["Gives one reason for the fire.","“He was angry.”"],
        a:["Compares the explanations and their sources.","“Some say revenge for Athens, some say a drunken feast; Arrian says we may never know.”"],
        f:["Judges how reliable each is.","“Writers lived long after, so they may have guessed; Arrian is honest about not knowing.”"],
        i:["I can give one reason.","I can compare the explanations.","I can judge how reliable each is."] },
      { c:"Daniel's kingdoms", code:"RE",
        d:["Retells Daniel's vision.","“A ram and a goat.”"],
        a:["Connects Daniel 8 to Persia and Greece.","“The ram is Media and Persia; the goat is Greece.”"],
        f:["Explains Daniel 2:44's message.","“Kingdoms fall, but God's kingdom will never be destroyed.”"],
        i:["I can retell the vision.","I can connect it to Persia and Greece.","I can explain Daniel 2:44's message."] }
    ],
    plan:{
      prior:"Students know Xerxes burned Athens' side of the war (Week 4) and the timeline (Week 1). Daniel is familiar from Week 3.",
      kc:["Thinking","Using language, symbols & texts","Relating to others"],
      sequence:[
        ["0–6","The Dispatch","Shirin's dispatch; Waystation Check; LI/SC.","Recall."],
        ["6–20","Discovery","Gaugamela and 330 BC; **Why Did It Burn?** (vote); Daniel 8.","Weigh evidence; vote."],
        ["20–38","Choose Your Path","A/B/C.","Create."],
        ["38–45","Through the Lens","Daniel 2:44.","Discuss."],
        ["45–50","Waystation Clue & Exit","Clue 1 (answer 330).","Solve; self-assess."]
      ],
      diff:{
        supported:"Explanation cards; verdict frame; partner.",
        esol:"Pictures for each explanation; act out the courtroom.",
        learning:"Courtroom role-play; chunked steps.",
        flying:"Reliability; Greek vs Persian perspective."
      },
      assess:{
        lookFor:["Describes Gaugamela and 330 BC","Compares explanations","Connects to Daniel"],
        evidence:["Path products","Votes and reasons","Exit self-assessment"]
      },
      inquiry:["Who judged reliability (not just preference)?","Care check: how did students feel about the loss of Persepolis?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"shirin", meta:"Persepolis · smoke on the mountain",
        msg:"Caravan… I can see smoke from here. **Persepolis is burning.** A young king from Macedonia, **Alexander**, has beaten the last Persian king. The great halls, the staircases of the nations… And the fragment was hidden in the treasury. **Why would anyone burn something so beautiful?** The writers don't agree.",
        notes:[["SAY","Read it quietly. 🟡 Shirin is fictional; the fire is real (330 BC)."],["CARE","Some students may feel sad. That's OK: we'll see on Friday what survived."]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"What does a shift cipher do?", a:"Moves every letter the same number of places." }, { q:"How old is the Pazyryk carpet?", a:"About 2,400–2,500 years." }, { q:"What did Xerxes do in Week 4?", a:"Invaded Greece in 480 BC (Thermopylae and Salamis)." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"331–330 BC", title:"The fall of *Persia*",
        bullets:["**Alexander the Great** defeated **Darius III** at **Gaugamela** in **331 BC**.","In **330 BC**, Persepolis was **burned**.","Ancient writers give **different reasons**. One, **Arrian**, admits the true motive may **never be known**."],
        visual:{ map:{ theme:"paper", labels:true, ranges:true, cities:["persepolis","babylon","susa","ecbatana"] }, size:740 },
        notes:[["SAY","Read the points."],["NOTE","Source: World History Encyclopedia, Alexander the Great & the Burning of Persepolis."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Weigh the evidence", title:"Why Did It Burn?", ix:"whyburn",
        notes:[["CLICK","Press → to reveal each explanation. Then the class votes by tapping a card."],["ASK","“Which source would you trust most? Why?”"],["NOTE","Simplified summaries of the ancient explanations (World History Encyclopedia)."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Daniel's visions", title:"Kingdoms rise and fall",
        cards:[ { icon:"🐏", t:"The ram", d:"“The two-horned ram… represents the kings of **Media and Persia**.” (Daniel 8:20)", foot:"Persia" }, { icon:"🐐", t:"The goat", d:"“The shaggy goat is the king of **Greece**.” (Daniel 8:21)", foot:"Alexander" }, { icon:"👑", t:"The kingdom that lasts", d:"“The God of heaven will set up a kingdom that will **never be destroyed**.” (Daniel 2:44)", foot:"God's kingdom" } ],
        notes:[["SAY","Read the verses from the class Bible."],["SIDE","Christians read Daniel as prophecy given before these events; some scholars date the book later. You needn't raise this; if asked, explain both views kindly."]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAY","“Choose your path. Every product weighs the evidence.”"],["CLICK","Start the 18-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Daniel 2:44 and Daniel 8:20–21."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 330."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = darics."]] }
    ]
  };

  /* ======================= TUESDAY · GEOGRAPHY ======================= */
  const tue = {
    id:"w08-tue", week:8, day:"tue", subject:"geography", duration:50,
    title:"Hazards & Rebuilding: the Bam Earthquake", guide:"farhad",
    codes:["SS-G","SS-C","SC-PW","MA"],
    coverage:"Y5 Geography (2027): tectonic hazards — how they happen, the hazards they cause, how to prepare. Comparing Bam (2003) and Canterbury (2010–11). Continuity and change in a city.",
    li:"We are learning how earthquakes affect cities and how cities rebuild.",
    sc:["I can explain why Iran has earthquakes.","I can describe the 2003 Bam earthquake.","I can explain how rebuilding can make a city safer."],
    vocab:[
      { w:"earthquake", def:"a sudden shaking of the ground caused by movement in the Earth's crust" },
      { w:"tectonic plate", def:"a huge slab of the Earth's crust that slowly moves" },
      { w:"fault", def:"a crack in the Earth's crust where rocks move" },
      { w:"magnitude", def:"a number that measures how much energy an earthquake releases" },
      { w:"hazard", def:"something that could cause harm" },
      { w:"reinforced", def:"made stronger, for example with steel inside concrete" },
      { w:"building code", def:"rules about how buildings must be built to be safe" }
    ],
    prep:{ min:10, items:["Caravan Journals","Path B: straws, pipe cleaners, card, Blu Tack, a tray of jelly or a sheet on a table to make a ‘shake table’","School earthquake drill instructions"] },
    safety:["Shake tables stay low on the desk; no throwing.","Practise Drop, Cover and Hold calmly."],
    care:["Many people died in the Bam earthquake. Focus on helpers, safer buildings and preparation, not on casualties.","Some students (or their families) remember the Canterbury earthquakes. Invite, never require, sharing; check in quietly with anyone who seems upset."],
    hononga:"**Canterbury rebuilds.** In 2010 and 2011, earthquakes shook Canterbury and damaged much of Christchurch. The city has been **rebuilding with stronger buildings**. At school we practise **Drop, Cover and Hold** so we know what to do.",
    paths:[
      { id:"A", name:"The Scribe", product:"Prepare-for-a-Quake Guide", steps:["Write a **guide** for a family: before, during and after an earthquake.","Include **Drop, Cover and Hold**.","Add **one lesson** from Bam or Canterbury."], flying:"Explain why the same size earthquake can do very different damage in two cities." },
      { id:"B", name:"The Artisan", product:"Safer Building Model", steps:["Build a model building from straws or card.","Test it on a **shake table** (a tray of jelly or a shaken sheet).","**Improve** it (braces, a lighter roof, a wider base) and test again."], flying:"Explain your design using the word reinforced." },
      { id:"C", name:"The Herald", product:"Rebuild Planner's Talk", steps:["You are a **city planner** rebuilding Bam (or Christchurch).","Plan a **1-minute talk**: what you'll build differently and why.","Include **one thing** you'll keep to remember the past."], flying:"How do you balance rebuilding fast with rebuilding safely?" }
    ],
    supportedShort:"a guide template; picture cards for Drop, Cover, Hold; partner build.",
    lens:{
      pillar:"aroha", title:"Our refuge and strength",
      look:"Look again at the shaking city: when the ground gives way, what can we hold on to?",
      ref:"Psalm 46:1–2",
      paraphrase:"God is our refuge and strength, an ever-present help in trouble. So we will not fear, though the earth give way and the mountains fall into the heart of the sea.",
      talk:[
        { q:"The psalm says we won't fear even when the earth gives way. How can God be a refuge when the ground isn't safe?", listen:"He's always with us; He gives courage; people who help are part of His care." },
        { q:"How could our class help people after a disaster?", listen:"Pray, give, write cards, help neighbours, be prepared, be calm and kind." }
      ],
      live:"Pray for people rebuilding after disasters, in Iran, Aotearoa and around the world."
    },
    clue:{ prompt:"About what percentage of buildings in the Bam area were damaged or destroyed (USGS)?", answer:85, explain:"About 85%. Waystation Clue 2 = 85, saved for Friday!" },
    next:"Wednesday — Gandom: only 17 Asiatic cheetahs left. What can be done?",
    rubric:[
      { c:"Why earthquakes happen", code:"SS-G · SC-PW",
        d:["Says the ground shakes.","“The ground moves.”"],
        a:["Explains plates and faults.","“Iran is where tectonic plates push together, so faults move and cause earthquakes.”"],
        f:["Compares with Aotearoa.","“NZ is on a plate boundary too, so both countries need to prepare.”"],
        i:["I can say the ground shakes.","I can explain plates and faults.","I can compare with Aotearoa."] },
      { c:"The Bam earthquake", code:"SS-G",
        d:["Says there was an earthquake.","“Bam had an earthquake.”"],
        a:["Describes when, how strong and the damage.","“26 December 2003, magnitude 6.6; about 85% of buildings damaged or destroyed.”"],
        f:["Explains why the damage was so great.","“Many buildings were mud brick with heavy roofs, which collapse in shaking.”"],
        i:["I can say there was an earthquake.","I can describe when, how strong and the damage.","I can explain why the damage was so great."] },
      { c:"Rebuilding safer", code:"SS-G · SS-C",
        d:["Says they rebuilt.","“They built it again.”"],
        a:["Explains how rebuilding can be safer.","“Stronger frames, lighter roofs and better building rules.”"],
        f:["Weighs speed, safety and memory.","“Rebuild safely, even if slower, and keep something to remember the old city.”"],
        i:["I can say they rebuilt.","I can explain how rebuilding can be safer.","I can weigh speed, safety and memory."] }
    ],
    plan:{
      prior:"Some students lived through or have heard family stories of the Canterbury earthquakes. Plate tectonics is new for most.",
      kc:["Thinking","Participating & contributing","Managing self"],
      sequence:[
        ["0–6","The Dispatch","Farhad's dispatch; Waystation Check; LI/SC.","Recall."],
        ["6–20","Discovery","Why Iran has earthquakes; **Shake Table**; Bam 2003; 🇳🇿 Hononga: Canterbury; practise Drop, Cover, Hold.","Predict; practise."],
        ["20–38","Choose Your Path","A/B/C.","Create; test."],
        ["38–45","Through the Lens","Psalm 46:1–2.","Discuss; pray."],
        ["45–50","Waystation Clue & Exit","Clue 2 (answer 85).","Solve; self-assess."]
      ],
      diff:{
        supported:"Guide template; picture cards; partner.",
        esol:"Act out Drop, Cover, Hold; diagrams; key words.",
        learning:"Hands-on shake table; movement; calm space for anyone anxious.",
        flying:"Different damage, same magnitude; balancing rebuild priorities."
      },
      assess:{
        lookFor:["Explains plates and faults","Describes Bam","Explains safer rebuilding"],
        evidence:["Path products","Shake-table tests","Exit self-assessment"]
      },
      inquiry:["Care check: anyone distressed by earthquake talk?","City Planner Big Projects need an earthquake plan."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"farhad", meta:"On the road to Bam · the ground trembles",
        msg:"Did you feel that? A little tremor. Out here the ground is **always on the move**. Long after our story, in **2003**, a strong earthquake struck the old city of **Bam**. Most of its mud-brick buildings fell. But people came to help, and the city **rebuilt**. Today: why does the ground shake, and how do we build safer?",
        notes:[["SAY","Read the dispatch calmly. 🟡 Farhad is fictional; the 2003 Bam earthquake is real."],["CARE","Watch for anyone who seems anxious. Keep a calm, practical tone."]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"Who defeated Darius III?", a:"Alexander the Great (Gaugamela, 331 BC)." }, { q:"When did Persepolis burn?", a:"330 BC." }, { q:"What does Daniel 2:44 say about God's kingdom?", a:"It will never be destroyed." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Why does Iran shake?", title:"Plates, faults & quakes",
        cards:[ { icon:"🧩", t:"Plates", d:"The Earth's crust is broken into huge **plates**. Under Iran, the **Arabian plate** pushes into the **Eurasian plate**.", foot:"pushing" }, { icon:"⚡", t:"Faults", d:"The pressure builds up along cracks called **faults**, until the rocks suddenly **slip**.", foot:"slipping" }, { icon:"〰️", t:"Shaking", d:"The slip sends **shaking** through the ground. Weak buildings can **collapse**.", foot:"hazard" } ],
        notes:[["SAY","Read each card. Use two books pushed together to model plates."],["NOTE","General geology. NZ also sits on a plate boundary (Pacific and Australian plates)."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Test it!", title:"The Shake Table", ix:"shaketable",
        notes:[["CLICK","Press →: two buildings → shake! → Bam 2003 → rebuilding safer. Use Rebuild / Shake to repeat."],["ASK","Before shaking: “Which will survive? Why?”"],["SAY","“On 26 December 2003, a magnitude 6.6 earthquake struck Bam. The US Geological Survey reported about 85% of buildings in the area damaged or destroyed.”"],["NOTE","Source: USGS (archived event page). Some reports give higher figures; we use USGS. Keep the focus on buildings and helpers, not casualties."]] },
      { type:"hononga", phase:"excavate", fs:"real", title:"Canterbury *rebuilds*",
        body:"In **2010 and 2011**, earthquakes shook Canterbury and damaged much of **Christchurch**.\n\nThe city has been **rebuilding with stronger buildings** and new ideas.\n\nAt school we practise **Drop, Cover and Hold**. Let's practise it now, calmly.",
        notes:[["CLICK","Practise Drop, Cover and Hold together."],["CARE","Invite, never require, families' stories. Keep it calm and practical."]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAY","“Choose your path. Every product is about being safer.”"],["CLICK","Start the 18-minute timer."],["SAFETY","Shake tables low on desks."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Psalm 46:1–3."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 85 (USGS figure)."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = darics."]] }
    ]
  };

  /* ======================= WEDNESDAY · SCIENCE ======================= */
  const wed = {
    id:"w08-wed", week:8, day:"wed", subject:"science", duration:50,
    title:"Endangered: the Asiatic Cheetah", guide:"gandom",
    codes:["SC-LW","SC-P","EN"],
    coverage:"Y5 Science (2027): human impact on ecosystems; endangered and extinct species; conservation actions.",
    li:"We are learning why species become endangered and how people help them.",
    sc:["I can define endangered and extinct.","I can explain the threats to the Asiatic cheetah.","I can suggest a conservation action."],
    vocab:[
      { w:"endangered", def:"at risk of dying out" },
      { w:"critically endangered", def:"at very high risk of dying out in the wild" },
      { w:"extinct", def:"no longer living anywhere on Earth" },
      { w:"conservation", def:"protecting nature and wildlife" },
      { w:"sanctuary", def:"a protected place for wildlife" },
      { w:"population", def:"all the animals of one kind in an area" },
      { w:"threat", def:"something that could cause harm" }
    ],
    prep:{ min:5, items:["Caravan Journals","Path B: A3 paper and markers for posters","Optional: DOC's takahē story as a hopeful NZ example"] },
    safety:[],
    care:["Endangered-species lessons can feel hopeless. End with action and hope (takahē, Persian fallow deer)."],
    hononga:"**A comeback in Aotearoa.** The **takahē** was thought to be extinct until it was rediscovered in **1948** in Fiordland. Thanks to conservation work, takahē numbers have grown (DOC). With care, species can recover.",
    paths:[
      { id:"A", name:"The Scribe", product:"Persuasive Letter", steps:["Write a **letter** to a decision-maker asking them to help the Asiatic cheetah.","Use **two facts** and **one solution**.","End with a strong, polite **request**."], flying:"Answer an objection: “But roads are important for people too.”" },
      { id:"B", name:"The Artisan", product:"Awareness Poster", steps:["Design a **poster** about the Asiatic cheetah.","Include the number **17**, the threats and **what helps**.","Add a catchy **slogan**."], flying:"Add a small graph or infographic." },
      { id:"C", name:"The Herald", product:"Data Detectives Talk", steps:["Explain **what 17 means** for a species.","Describe **three threats** and **three helpers**.","Finish with **one thing our class could do**."], flying:"Compare with the takahē: what helped it recover?" }
    ],
    supportedShort:"a letter template; threat/helper picture cards; partner pairing.",
    lens:{
      pillar:"panga", title:"The earth is the LORD's",
      look:"Look again at the cheetah: one of God's creatures, now one of the rarest on Earth.",
      ref:"Genesis 1:28; Psalm 24:1",
      paraphrase:"God told people to rule over the creatures, caring for them as His stewards. The earth is the LORD's, and everything in it.",
      talk:[
        { q:"If the earth belongs to God, what does it mean to ‘rule’ over the animals?", listen:"Care for them like a good king or a shepherd; look after what belongs to God." },
        { q:"What is one thing our class could do for endangered animals?", listen:"Learn and share, support a sanctuary, plant native trees, slow down near wildlife signs, pick up rubbish." }
      ],
      live:"Choose one action for wildlife this week (Aotearoa or Iran). Write it in your Caravan Journal."
    },
    clue:{ prompt:"How many Asiatic cheetahs were said to be left in March 2025?", answer:17, explain:"17. Waystation Clue 3 = 17, saved for Friday!" },
    next:"Thursday — Nasrin: messages in 1s and 0s!",
    rubric:[
      { c:"Endangered & extinct", code:"SC-LW",
        d:["Says some animals are rare.","“There aren't many.”"],
        a:["Defines both with examples.","“The Asiatic cheetah is critically endangered; the Caspian tiger is extinct.”"],
        f:["Explains why small populations are at risk.","“With only 17, one disease or a few road deaths could wipe them out.”"],
        i:["I can say some animals are rare.","I can define both with examples.","I can explain why small populations are at risk."] },
      { c:"Threats", code:"SC-LW",
        d:["Names one threat.","“Cars.”"],
        a:["Explains three threats.","“Road deaths, less prey from hunting, and conflict with herders.”"],
        f:["Links threats to the food web.","“If gazelles are hunted, the cheetah has less food.”"],
        i:["I can name a threat.","I can explain three threats.","I can link threats to the food web."] },
      { c:"Conservation action", code:"SC-LW · EN",
        d:["Says we should help.","“Save them.”"],
        a:["Suggests a specific action and how it helps.","“Wildlife crossings would stop road deaths.”"],
        f:["Uses a success story as evidence.","“Takahē recovered with protection and breeding, so cheetahs could too.”"],
        i:["I can say we should help.","I can suggest an action and how it helps.","I can use a success story as evidence."] }
    ],
    plan:{
      prior:"Students met the cheetah in Week 2's food chain and the leopard's threats in Week 3.",
      kc:["Thinking","Participating & contributing","Using language, symbols & texts"],
      sequence:[
        ["0–6","The Dispatch","Gandom's dispatch; Waystation Check; LI/SC.","Recall."],
        ["6–20","Discovery","Endangered vs extinct; **Cheetah Survival** (threats & helpers); 🇳🇿 Hononga: takahē.","Discuss; predict."],
        ["20–38","Choose Your Path","A/B/C.","Create."],
        ["38–45","Through the Lens","Genesis 1:28; Psalm 24:1.","Discuss."],
        ["45–50","Waystation Clue & Exit","Clue 3 (answer 17).","Solve; self-assess."]
      ],
      diff:{
        supported:"Templates; picture cards; partner.",
        esol:"Pictures; key words; rehearse orally.",
        learning:"Poster option; chunked steps.",
        flying:"Objections; takahē comparison."
      },
      assess:{
        lookFor:["Defines endangered and extinct","Explains threats","Suggests an action"],
        evidence:["Path products","Discussion","Exit self-assessment"]
      },
      inquiry:["Sanctuary Big Projects can use today's ideas.","Did students leave with hope as well as concern?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"gandom", meta:"The plains near Turan · very quiet",
        msg:"Remember the **cheetah** from our grassland food chain? The fastest runner on these plains. Well… there are hardly any left. **Seventeen**, someone said. Seventeen! I've got more fleas than that. Sorry. Not funny. **What can we do?**",
        notes:[["SAY","Read it in Gandom's voice, getting serious at the end. 🟡 Gandom is fictional."]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"When was the Bam earthquake?", a:"26 December 2003." }, { q:"Why did so many buildings collapse?", a:"Many were mud brick with heavy roofs." }, { q:"What do we do in an earthquake?", a:"Drop, Cover and Hold." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"animalcards", phase:"excavate", fs:"real", kicker:"Rare or gone?", title:"Endangered and *extinct*",
        animals:[
          { img:"animal-07", icon:"🐆", col:"#C9822B", t:"Asiatic cheetah", status:"CRITICALLY ENDANGERED", d:"Found only in **Iran**. In March 2025, Iran's environment chief said only **17** were left." },
          { img:"animal-09", icon:"🐅", col:"#a8542a", t:"Caspian tiger", status:"EXTINCT", d:"Once lived in the forests near the Caspian Sea. **Gone** from the wild." },
          { img:"animal-06", icon:"🦌", col:"#b88a4a", t:"Goitered gazelle", d:"The cheetah's prey. When people **hunt gazelles**, cheetahs go hungry." }
        ],
        notes:[["SAY","Read each card."],["NOTE","Sources: Blue News/dpa (17 cheetahs, March 2025); WWF (critically endangered Asiatic cheetah; prey hunted; killed to protect livestock)."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Threats and helpers", title:"Cheetah Survival", ix:"cheetahsave",
        notes:[["CLICK","Press → to add each threat (the meter falls), then each helper (it rises). Or tap cards to toggle."],["ASK","“Which helper would make the biggest difference?”"],["NOTE","The meter is an illustration, not real data. Road deaths around Turan are reported by Blue News/dpa."]] },
      { type:"hononga", phase:"excavate", fs:"real", title:"A comeback in *Aotearoa*",
        body:"The **takahē** was thought to be **extinct** until it was rediscovered in **1948** in Fiordland.\n\nWith protection, safe islands and breeding programmes, takahē numbers have **grown** (DOC).\n\n**What could the Asiatic cheetah learn from the takahē?**",
        notes:[["SAY","“There's hope. Species can recover when people work together.”"],["NOTE","Source: Department of Conservation, The takahē story."]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAY","“Choose your path. Every product ends with an action.”"],["CLICK","Start the 18-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Genesis 1:26–28 and Psalm 24:1."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 17."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = darics."]] }
    ]
  };

  /* ======================= THURSDAY · TECHNOLOGY ======================= */
  const thu = {
    id:"w08-thu", week:8, day:"thu", subject:"technology", duration:50,
    title:"Royal Road Messages 3: Binary Signals & Variables", guide:"nasrin",
    codes:["DT-CT","MA"],
    coverage:"Digital Technologies — Computational Thinking, Progress Outcome 3: data represented in binary; using a variable in a program. Maths: place value.",
    li:"We are learning to represent messages in binary and store values in a variable.",
    sc:["I can explain that computers store data as 1s and 0s.","I can convert small numbers to binary.","I can use a variable in code."],
    vocab:[
      { w:"binary", say:"BY-nuh-ree", def:"a number system that uses only two digits: 0 and 1" },
      { w:"bit", def:"one binary digit: a 0 or a 1" },
      { w:"on / off", def:"the two states a bit can show (1 = on, 0 = off)" },
      { w:"variable", def:"a named box in a program that stores a value that can change" },
      { w:"data", def:"information a computer stores and uses" },
      { w:"signal", def:"a sign used to send a message" }
    ],
    prep:{ min:10, items:["Four large lamp cards per team (8, 4, 2, 1), lit side yellow, unlit side black","Mini-whiteboards","Beads in two colours and string (Path B)","iPads with Scratch (optional)"] },
    safety:[],
    care:[],
    hononga:"**Binary in Aotearoa.** Every photo you take, every song you stream and every EFTPOS payment in Ashburton is stored as millions of **1s and 0s**.",
    paths:[
      { id:"A", name:"The Scribe", product:"Binary Code Book", steps:["Write the numbers **0 to 15** in binary.","Spot a **pattern** in the 1s column.","Make a **code**: A = 1, B = 2… and send a word in binary."], flying:"How many lamps would you need to show 100?" },
      { id:"B", name:"The Artisan", product:"Binary Bracelet", steps:["Choose your **initial** (A = 1, B = 2…).","Write it in **5-bit binary**.","Thread beads: one colour for **1**, another for **0**."], flying:"Make a bracelet for your whole first name." },
      { id:"C", name:"The Herald", product:"Signal Relay", steps:["Teams stand across the room with lamp cards **8, 4, 2, 1**.","Send a number by showing lit (1) or dark (0) cards.","The other team **decodes** it and sends one back."], flying:"Send a two-digit number using more lamps. How many do you need?" }
    ],
    supportedShort:"a place-value chart (8, 4, 2, 1); lamp cards; partner.",
    lens:{
      pillar:"mohio", title:"Yes means yes",
      look:"Look again at the lamps: each one is clearly **on** or **off**. No maybes.",
      ref:"Matthew 5:37",
      paraphrase:"Jesus said: all you need to say is simply “Yes” or “No”.",
      talk:[
        { q:"A bit is either 1 or 0. Jesus asks our yes to mean yes. Why is being clear and honest important?", listen:"People can trust us; promises are kept; no tricks." },
        { q:"Every picture breaks somewhere. Where does the binary picture break?", listen:"People aren't machines: we can change, say sorry and grow; some answers need more than yes or no." }
      ],
      live:"Keep one promise this week exactly as you said it."
    },
    clue:{ prompt:"What number is 1011 in binary? (8 + 0 + 2 + 1)", answer:11, explain:"8 + 2 + 1 = 11. Waystation Clue 4 = 11, saved for Friday!" },
    next:"Friday — Master Hamid: tiny paintings, big stories.",
    rubric:[
      { c:"Binary data", code:"DT-CT",
        d:["Says computers use numbers.","“Codes.”"],
        a:["Explains bits as two states.","“Computers store everything as 1s and 0s: on or off.”"],
        f:["Explains why two states are useful.","“Two states are easy to tell apart, so the data doesn't get mixed up.”"],
        i:["I can say computers use codes.","I can explain bits as two states.","I can explain why two states are useful."] },
      { c:"Converting to binary", code:"DT-CT · MA",
        d:["Converts with help.","5 = 0101 with the chart."],
        a:["Converts numbers 0–15.","13 = 1101."],
        f:["Explains the place values.","“Each place doubles: 1, 2, 4, 8, 16.”"],
        i:["I can convert with help.","I can convert 0–15.","I can explain the place values."] },
      { c:"Using a variable", code:"DT-CT",
        d:["Says a variable stores something.","“A box.”"],
        a:["Uses a variable to count.","“change score by 1 each delivery.”"],
        f:["Explains why variables are useful.","“The score changes during the game, so it needs a variable.”"],
        i:["I can say what a variable is.","I can use a variable to count.","I can explain why variables are useful."] }
    ],
    plan:{
      prior:"Students used sequence (Week 6) and loops (Week 7). Place value is familiar in base 10.",
      kc:["Thinking","Using language, symbols & texts","Participating & contributing"],
      sequence:[
        ["0–6","The Dispatch","Nasrin's dispatch; Waystation Check; LI/SC.","Recall."],
        ["6–18","Discovery","**Binary Lamps**; variables (score); unplugged lamp relay.","Convert; signal."],
        ["18–38","Choose Your Path","A/B/C.","Create."],
        ["38–45","Through the Lens","Matthew 5:37 (an analogy).","Discuss."],
        ["45–50","Waystation Clue & Exit","Clue 4 (answer 11).","Solve; self-assess."]
      ],
      diff:{
        supported:"Place-value chart; lamp cards.",
        esol:"Visual on/off; numbers; partner.",
        learning:"Hands-on cards and beads; movement in the relay.",
        flying:"More bits; names in binary."
      },
      assess:{
        lookFor:["Explains bits","Converts 0–15","Uses a variable"],
        evidence:["Code books","Bracelets","Exit self-assessment"]
      },
      inquiry:["Who's ready for events and if/else next week?","Coder Big Projects need a score variable."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"nasrin", meta:"A signal tower on a hilltop · night",
        msg:"Look: lamps on the hilltop. **On, off, on, on.** The signallers can't shout across the valley, so they use light. Each lamp is either **on or off**, nothing in between. And guess what? Every computer in the world works the same way: **1s and 0s**.",
        notes:[["SAY","Read the dispatch. 🟡 Nasrin is fictional; the signal lamps are our classroom model."]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"How many Asiatic cheetahs were said to be left in 2025?", a:"17." }, { q:"What's the difference between endangered and extinct?", a:"Endangered: at risk of dying out. Extinct: gone completely." }, { q:"Name a threat to the cheetah.", a:"Roads, less prey, conflict with herders." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"On and off", title:"Binary Lamps", ix:"binarylamps",
        notes:[["CLICK","Press →: 0000 → 0001 → 0101 → 1011 → 1111. Then tap lamps to make numbers the class calls out."],["ASK","“What's the biggest number four lamps can show?” (15)"],["NOTE","Source: Technology Online, Progress Outcome 3 (binary)."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Variables", title:"A box that remembers",
        cards:[ { icon:"📦", t:"A variable", d:"A **named box** in a program that stores a value: **score**, **lives**, **messages delivered**.", foot:"stores" }, { icon:"➕", t:"Change it", d:"**change score by 1** each time the courier delivers a message.", foot:"updates" }, { icon:"🧮", t:"In binary!", d:"Inside the computer, the score is stored as **bits**: 3 is **0011**.", foot:"connects" } ],
        notes:[["SAY","“A variable is like a scoreboard. It changes during the game.”"]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAY","“Choose your path. Every product uses binary.”"],["CLICK","Start the 20-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Matthew 5:33–37."],["NOTE","An analogy: name where it breaks."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 11."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = darics."]] }
    ]
  };

  /* ======================= FRIDAY · ART ======================= */
  const fri = {
    id:"w08-fri", week:8, day:"fri", subject:"art", duration:50,
    title:"Miniature Painting: the Shahnameh", guide:"hamid",
    codes:["VA-PK","VA-DI","VA-UC","VA-CI","MA"],
    coverage:"Visual Arts (NZC 2007, Level 3): practical knowledge (fine detail, layered composition, borders), developing ideas (telling a story), understanding art in context (Persian miniature painting, the Shahnameh). Maths: Old Persian number signs.",
    li:"We are learning to paint a detailed miniature scene that tells a story.",
    sc:["I can describe Persian miniature painting.","I can plan a scene with layers and a border.","I can use fine detail and bright colour."],
    vocab:[
      { w:"miniature", say:"MIN-uh-chur", def:"a small, very detailed painting, often in a book" },
      { w:"Shahnameh", say:"SHAH-nah-meh", def:"‘the Book of Kings’, a long Persian poem of heroes and kings" },
      { w:"manuscript", def:"a book written and painted by hand" },
      { w:"Simurgh", say:"SEE-moorg", def:"a great mythical bird in Persian stories (a creature of story, not real)" },
      { w:"composition", def:"how the parts of a picture are arranged" },
      { w:"border", def:"a decorated frame around the edge of a picture" }
    ],
    prep:{ min:10, items:["A5 card or thick paper","Fine brushes, watercolours or fine felt pens; gold paint or gel pen","Pencils for planning","Magnifying glasses (optional)"] },
    safety:["Rinse brushes; wipe spills."],
    care:[],
    hononga:"**Stories that survive.** Māori pūrākau, NZ picture books and family stories carry memory from one generation to the next, like the Shahnameh. What story from your family would you paint?",
    paths:[
      { id:"A", name:"The Scribe", product:"Story Caption", steps:["Plan a scene from a story (Zal and the Simurgh, or a Bible story from this term).","Write a **caption** that tells what's happening.","Explain your **layers** (sky, middle, ground) and **border**."], flying:"Write the caption as a short poem." },
      { id:"B", name:"The Artisan", product:"Miniature Painting", steps:["Draw your scene in **layers**: sky at the top, ground at the bottom.","Paint with **bright colours** and a **fine brush**.","Add a **gold border** and tiny **details**."], flying:"Hide a tiny detail for a friend to find with a magnifying glass." },
      { id:"C", name:"The Herald", product:"Storyteller", steps:["Retell **Zal and the Simurgh** (or your scene) in **1 minute**.","Point to details in a painting as you tell it.","Finish: **why do stories survive when buildings burn?**"], flying:"Explain why our Shadow Courier might be called Zal." }
    ],
    supportedShort:"a layered template (sky / middle / ground); a border stencil; partner.",
    lens:{
      pillar:"sdg", title:"Beauty instead of ashes",
      look:"Look again at the painting: Persepolis burned, but **beauty and stories survived**.",
      ref:"Isaiah 61:3",
      paraphrase:"The LORD will bestow on those who grieve a crown of beauty instead of ashes, the oil of joy instead of mourning.",
      talk:[
        { q:"Persepolis burned, but Persian art and stories lived on. What does Isaiah promise God can do with ashes?", listen:"Bring beauty and joy out of loss; make new things; give hope." },
        { q:"Have you seen something good come from something hard?", listen:"Accept gently; invite, don't require, sharing." }
      ],
      live:"Soli Deo Gloria: sign your miniature **SDG**. Thank God for one good thing that came from a hard time."
    },
    clue:{ prompt:"Friday's clue is the Seal Fragment: add this week's four Waystation Clues and write the total in Old Persian number signs.", answer:443, explain:"330 + 85 + 17 + 11 = 443 → four 100-signs, two 20-signs, one 2-sign and one 1-sign." },
    next:"Next week — Stage IX: Star-Watchers & Silk. The Shadow is unmasked!",
    rubric:[
      { c:"Persian miniatures", code:"VA-UC",
        d:["Says they're small paintings.","“Tiny pictures.”"],
        a:["Describes features and the Shahnameh.","“Small detailed paintings in books like the Shahnameh, with borders and bright colours.”"],
        f:["Explains how they tell stories.","“The high viewpoint shows lots of action at once, so you can read the whole story.”"],
        i:["I can say they're small paintings.","I can describe their features.","I can explain how they tell stories."] },
      { c:"Layers & border", code:"VA-DI",
        d:["Draws a scene.","A single figure."],
        a:["Plans layers and a border.","Sky, middle and ground, with a gold frame."],
        f:["Arranges figures to lead the eye through the story.","The eye moves from the nest to the bird to the father."],
        i:["I can draw a scene.","I can plan layers and a border.","I can arrange figures to lead the eye."] },
      { c:"Detail & colour", code:"VA-PK",
        d:["Uses some colour.","Large flat areas."],
        a:["Uses bright colour and fine detail.","Patterned clothes, tiny flowers."],
        f:["Controls fine detail across the whole work.","Even, careful detail everywhere."],
        i:["I can use colour.","I can use bright colour and fine detail.","I can control detail across the whole work."] }
    ],
    plan:{
      prior:"Students have used pattern, relief, foil and weaving. The Shadow Courier has been mysterious all term; Zal is next week's reveal.",
      kc:["Thinking","Managing self","Using language, symbols & texts"],
      sequence:[
        ["0–6","The Dispatch","Hamid's dispatch; Waystation Check; LI/SC.","Recall."],
        ["6–14","Discovery","Miniatures and the Shahnameh; **Miniature Zoom**; Zal and the Simurgh.","Look; find details."],
        ["14–36","Choose Your Path","A/B/C.","Plan; paint."],
        ["36–41","Through the Lens","Isaiah 61:3.","Discuss."],
        ["41–50","Seal Fragment VIII & the Shadow's Note","330 + 85 + 17 + 11 = 443 → 100 ×4, 20 ×2, 2, 1.","Solve the lock."]
      ],
      diff:{
        supported:"Layer template; stencil; partner.",
        esol:"Show examples; picture instructions.",
        learning:"Fine felts instead of brushes; short steps.",
        flying:"Hidden details; poem captions."
      },
      assess:{
        lookFor:["Describes miniatures","Plans layers and border","Uses fine detail"],
        evidence:["Miniatures (photograph)","Captions","Seal Fragment working (443)"]
      },
      inquiry:["Paradise Garden panels can use a miniature-style border.","Prepare for the Week 9 unmasking: who has guessed?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"hamid", meta:"Among the ashes · a painted book in my hands",
        msg:"The palace is ash. But look what I saved: a **painted book**. Pages smaller than your hand, full of heroes, mountains and a great green bird. Fire can take stone. It cannot take **stories**. Today you'll paint one, so small and so careful that people will need to lean in close.",
        notes:[["SAY","Read it gently. 🟡 Master Hamid is fictional. (The Shahnameh was written much later than Persepolis: Hamid's book is part of our story.)"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"What is 0101 in binary?", a:"5 (4 + 1)." }, { q:"What is a bit?", a:"One binary digit: 0 or 1." }, { q:"What is a variable?", a:"A named box in a program that stores a value." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"The Book of Kings", title:"The *Shahnameh*",
        bullets:["The **Shahnameh** (“Book of Kings”) is a long Persian **epic poem** of heroes and kings.","The painted **Shahnama of Shah Tahmasp** (1500s) is one of the most famous illustrated books in the world.","One story: baby **Zal** is abandoned by his father and **rescued by the Simurgh**, who raises him in her nest on a mountain."],
        visual:{ artefact:"journal" },
        notes:[["SAY","Read the points."],["CLICK","Show the Met's ‘Zal in the Simurgh's Nest’ page (Sources panel)."],["NOTE","Sources: the Met (Shahnama of Shah Tahmasp; Zal in the Simurgh's Nest). 🟡 The Simurgh is a creature of story, not a real animal."]] },
      { type:"interactive", phase:"excavate", fs:"real", paper:true, kicker:"Lean in close", title:"Miniature Zoom", ix:"miniaturezoom",
        notes:[["CLICK","Press → to zoom into the nest, a rider, the flowers, then back out to see the layers."],["ASK","“What tiny details can you spot?”"]] },
      { type:"paths", phase:"paths", fs:null, minutes:20,
        notes:[["SAY","“Plan your layers first, then paint small.”"],["CLICK","Start the 20-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Isaiah 61:1–3."]] },
      { type:"folioseal", phase:"decode", fs:"story",
        notes:[["SAY","“Four clues: 330, 85, 17, 11. Add them up.”"],["CLICK","330 + 85 + 17 + 11 = 443."],["SAY","“443: four 100-signs (400), two 20-signs (40), then 3: one 2-sign and one 1-sign.”"],["CLICK","Press 100 ×4, 20 ×2, 2, 1, then ‘Open the lock’."],["NOTE","🟡 Story: the fragment is cracked, but it holds."]] },
      { type:"intercept", phase:"decode", fs:"story",
        msg:"Everything burns in the end.",
        ask:"Persepolis burned. Is the Shadow right that everything burns in the end? What doesn't burn? (Think about Daniel 2:44 and Isaiah 61:3.)",
        notes:[["SAY","Read it slowly in the Shadow's voice. 🟡 The Shadow is fictional."],["ASK","Take answers."],["LISTEN","God's kingdom, love, stories, faith, people's courage, hope."],["NOTE","Next week the Shadow is unmasked. Ask students to write their guess in their journals."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess. Fragment VIII is cracked but safe!"],["CLICK","C = darics. Dry miniatures flat for the Exhibition."]] }
    ]
  };

  BM.WEEKS[8] = {
    n:8,
    story:"Persepolis burns. Alexander defeats the last Persian king, and the fragment hidden in the treasury is cracked. The historians weigh why the palace burned and read Daniel's visions of kingdoms rising and falling; the geographers learn why the ground shakes and how Bam and Christchurch rebuilt; the scientists fight for the last Asiatic cheetahs; the engineers send binary signals and keep score with a variable; and the artists paint tiny miniatures like the Shahnameh, where Zal is raised by the Simurgh. On Friday, 330 + 85 + 17 + 11 = 443 frees Fragment VIII: cracked, but whole.",
    hononga:"Christchurch's lost heritage buildings (Mon) · the Canterbury earthquakes and Drop, Cover and Hold (Tue) · the takahē comeback (Wed) · binary in everyday NZ life (Thu) · pūrākau and family stories (Fri). 🕊️ Care: earthquakes and loss.",
    seal:{
      answer:443,
      instruction:"Add the four **Waystation Clues**. Then write the total in **Old Persian number signs**, biggest first, and press them into the clay. *(100 = the hundred sign · 20 = two corner wedges · 2 = two upright wedges · 1 = one upright wedge.)*",
      reveal:"🟡 **Fragment VIII found!** It's cracked from the fire… but it holds, and flies to its place on the Seal. Eight down, two to go. Next week: *Star-Watchers & Silk* — and the Shadow Courier is unmasked."
    },
    lessons:[mon, tue, wed, thu, fri]
  };
})(window.BM);
