/* ==========================================================
   WEEK 5 — STAGE V · FOR SUCH A TIME AS THIS
   The palace at Susa, where a queen risks her life.
   Notes: [KEY, text]  KEY = SAY ASK LISTEN IF CLICK TALK DEEPER PACE SAFETY WAIT NOTE CARE SIDE
   Facts are sourced in data/sources.js (tags match blueprint §18).
   ========================================================== */
(function(BM){
  "use strict";

  /* ======================= MONDAY · HISTORY ======================= */
  const mon = {
    id:"w05-mon", week:5, day:"mon", subject:"history", duration:50,
    title:"Esther, Queen of Persia", guide:"shirin",
    codes:["SS-H","EN","RE"],
    coverage:"Y5–6 History practices (2027 Social Sciences): connecting a written account to place and time (Susa, Xerxes I); sequencing events. Christian Character: God's providence.",
    li:"We are learning to retell the story of Esther and connect it to what we know about Xerxes and Susa.",
    sc:["I can retell the main events of Esther in order.","I can explain who King Ahasuerus probably was.","I can explain how God's care shows in the story, even though He is never named."],
    vocab:[
      { w:"Esther", say:"ES-ter", def:"a young Jewish woman who became queen of Persia" },
      { w:"Mordecai", say:"MOR-deh-kye", def:"Esther's cousin, who raised her" },
      { w:"Haman", say:"HAY-mun", def:"the king's proud official who plotted against the Jews" },
      { w:"Ahasuerus", say:"a-haz-yoo-EE-rus", def:"the king in the book of Esther, usually identified with Xerxes I" },
      { w:"sceptre", say:"SEP-ter", def:"a rod held by a king or queen as a sign of power" },
      { w:"Purim", say:"POOR-im", def:"a Jewish festival that remembers how the Jews were saved in Esther's time" },
      { w:"providence", def:"God's care and control over everything that happens" },
      { w:"courage", def:"doing what is right even when you are afraid" }
    ],
    prep:{ min:5, items:["Class Bible marked at Esther 4:14","Caravan Journals","Optional for Path C: simple props (a crown, a sceptre, a scroll)"] },
    safety:[],
    care:["Haman's plan to destroy a whole people is serious. Keep the focus on courage and rescue, not on the violence in Esther 9.","Some students may have family histories of persecution. Speak with care."],
    hononga:"**Courage in Aotearoa.** People in our history spoke up for others when it was risky, like Kate Sheppard and the women who campaigned for the vote (1893). Courage often means using the place you're in to help others.",
    paths:[
      { id:"A", name:"The Scribe", product:"Esther's Journal", steps:["Write **three journal entries** as Esther: becoming queen, the night before she goes to the king, and after the rescue.","Show her **feelings** and her **choices**.","Include the words **“for such a time as this.”**"], flying:"Add an entry where Esther notices God's hidden hand in the ‘coincidences’." },
      { id:"B", name:"The Artisan", product:"Storyboard Comic", steps:["Draw **six panels** for the key turning points.","Add **speech bubbles** and a caption for each.","Draw a small **hidden hand** symbol wherever God's care shows."], flying:"Add a final panel explaining why Purim is still celebrated." },
      { id:"C", name:"The Herald", product:"Readers' Theatre", steps:["In a group of four or five, choose **two scenes** (Esther 4 and Esther 5).","Assign **roles** (Esther, Mordecai, the king, Haman, a narrator).","Rehearse and perform, using the **real words** from the Bible where you can."], flying:"Add a narrator who explains what historians know about Xerxes and Susa." }
    ],
    supportedShort:"pre-drawn storyboard frames; event picture cards to order; sentence starters.",
    lens:{
      pillar:"panga", title:"For such a time as this",
      look:"Look again at Esther: an orphan, an exile… placed in the palace at exactly the right time.",
      ref:"Esther 4:14",
      paraphrase:"Mordecai said to Esther: “If you stay silent, help will come from another place… And who knows but that you have come to your royal position **for such a time as this**?”",
      talk:[
        { q:"God is never named in Esther. Where can we still see His care?", listen:"Esther becoming queen; Mordecai's deed recorded; the sleepless king; the sceptre held out; the rescue." },
        { q:"Where might God have put you ‘for such a time as this’?", listen:"In this class, this family, this team; to help a friend; to stand up for someone." }
      ],
      live:"Think of one person you could **speak up for** or help this week. Write their first name and your plan in your Caravan Journal."
    },
    clue:{ prompt:"Esther 4:14 holds the famous words “for such a time as this.” Which verse number is that?", answer:14, explain:"Verse 14. Waystation Clue 1 = 14, saved for Friday!" },
    next:"Tuesday — Farhad: why is Susa a hill made of cities?",
    rubric:[
      { c:"Retelling Esther", code:"EN · RE",
        d:["Retells one event.","“Esther became queen.”"],
        a:["Retells the main events in order.","Queen → Haman's plot → ‘for such a time as this’ → the sceptre → the sleepless night → rescue."],
        f:["Explains the turning points and why they matter.","“The sleepless night was a turning point: the king remembered Mordecai just before Haman asked to harm him.”"],
        i:["I can retell one event.","I can retell the main events in order.","I can explain the turning points."] },
      { c:"History and place", code:"SS-H",
        d:["Says it happened in Persia.","“In a palace.”"],
        a:["Connects the story to Susa and Xerxes I.","“It's set in Susa; Britannica identifies Ahasuerus with Xerxes I.”"],
        f:["Links to other things we've learned.","“This is the same Xerxes who lost at Salamis; Susa had Darius's palace with glazed bricks.”"],
        i:["I can say it happened in Persia.","I can connect it to Susa and Xerxes I.","I can link it to what we've already learned."] },
      { c:"God's hidden hand", code:"RE",
        d:["Says God helped.","“God helped Esther.”"],
        a:["Gives examples of God's care in the story.","“The king couldn't sleep and read about Mordecai: that was God's timing.”"],
        f:["Explains why it matters that God isn't named.","“Even when we can't see God, He is still at work. That gives us courage.”"],
        i:["I can say God helped.","I can give examples of God's care in the story.","I can explain why it matters that God isn't named."] }
    ],
    plan:{
      prior:"Many students know Esther from church or children's Bibles. They met Xerxes last week (480 BC) and Susa in Weeks 1, 2 and 4.",
      kc:["Thinking","Relating to others","Using language, symbols & texts"],
      sequence:[
        ["0–6","The Dispatch","Shirin's dispatch; Waystation Check; LI/SC.","Recall."],
        ["6–20","Discovery","Who was Ahasuerus? (Xerxes I, Susa); **Turning Points**; turn & talk.","Order events; find the hidden hand."],
        ["20–38","Choose Your Path","A/B/C.","Create."],
        ["38–45","Through the Lens","Esther 4:14.","Discuss; commit."],
        ["45–50","Waystation Clue & Exit","Clue 1 (answer 14).","Solve; self-assess."]
      ],
      diff:{
        supported:"Event picture cards; storyboard frames; sentence starters.",
        esol:"Act out scenes; key words with pictures; rehearse orally.",
        learning:"Drama option; chunked steps; calm screen.",
        flying:"Turning points; historical links."
      },
      assess:{
        lookFor:["Retells events in order","Connects to Susa and Xerxes I","Explains God's hidden hand"],
        evidence:["Path products","Turning Points ordering","Exit self-assessment"]
      },
      inquiry:["Who connected Esther's Xerxes with last week's Xerxes?","Who could explain providence in their own words?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"shirin", meta:"The palace at Susa · whispers in the corridor",
        msg:"Caravan, quietly. We're inside the palace at **Susa**, and something terrible is happening. A proud official named **Haman** has tricked the king into signing a law against the Jews. Only one person can reach the king: **Queen Esther**. But if she goes to him without being called… she could die.",
        notes:[["SAY","Read it quietly, with tension. 🟡 Shirin is fictional; Esther's story is from the Bible."],["ASK","“What would you do if you were Esther?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"What is a frieze?", a:"A long decorated band along a wall." }, { q:"What were the archers made of?", a:"Coloured glazed bricks." }, { q:"Who was Xerxes?", a:"The Persian king who invaded Greece in 480 BC." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"History and the Bible", title:"Who was *King Ahasuerus*?",
        bullets:["The book of Esther is set in the palace at **Susa**.","Britannica identifies the king, **Ahasuerus**, with **Xerxes I**: the same king who invaded Greece!","The book of Esther is the origin of the Jewish festival of **Purim**, still celebrated today."],
        visual:{ map:{ theme:"paper", labels:true, ranges:true, deserts:false, cities:["susa","persepolis","babylon","jerusalem"] }, size:760 },
        notes:[["SAY","Read the points. Point to Susa."],["ASK","“How does knowing this was Xerxes help us picture the story?”"],["NOTE","Sources: Britannica (Ahasuerus; Purim); UNESCO (Susa)."]] },
      { type:"interactive", phase:"excavate", fs:"story", kicker:"Order the story", title:"Turning Points", ix:"turningpoints",
        notes:[["CLICK","The cards are shuffled. The class tells you which comes first; tap it. Each card flips to show God's ‘hidden hand’. Press → to place the next one automatically."],["ASK","At the sleepless night: “Coincidence?” ⏳"],["SAY","At the end: “God is never named in the book of Esther, yet His care is seen in every turn of the story.”"],["NOTE","🟡 The ‘hidden hand’ notes are our reflections on the story, not quotations from the Bible."]] },
      { type:"discussion", phase:"excavate", fs:"real", kicker:"Turn & Talk", q:"Esther was afraid, but she still went to the king. **What helped her be brave?**", sub:"Think about Mordecai's words, the fasting, and who was with her.", talk:45,
        notes:[["TALK","45 seconds."],["LISTEN","Mordecai's challenge; everyone fasting with her; trusting God; knowing her people needed her; ‘if I perish, I perish’ (4:16)."]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAY","“Choose your path. Every product shows the turning points.”"],["CLICK","Start the 18-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Esther 4:12–16."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 14."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = darics."]] }
    ]
  };

  /* ======================= TUESDAY · GEOGRAPHY ======================= */
  const tue = {
    id:"w05-tue", week:5, day:"tue", subject:"geography", duration:50,
    title:"Layers of a City: Susa & the Tell", guide:"farhad",
    codes:["SS-G","SS-H","SS-P"],
    coverage:"Y6 Geography: settlement over time (continuity and change in one place). History practices: archaeology as evidence.",
    li:"We are learning how cities build up in layers over time, and what archaeologists learn from them.",
    sc:["I can explain what a tell is.","I can describe Susa's layers.","I can explain continuity and change in one place."],
    vocab:[
      { w:"tell", def:"a hill made of the remains of many towns, built one on top of another" },
      { w:"layer", def:"one level of a settlement, sitting on the ones before it" },
      { w:"archaeology", say:"ar-kee-OL-uh-jee", def:"studying the past by digging up what people left behind" },
      { w:"excavate", def:"to dig carefully to uncover things from the past" },
      { w:"artefact", def:"an object made by people, especially an old one" },
      { w:"continuity", def:"things that stay the same over time" },
      { w:"change", def:"things that become different over time" }
    ],
    prep:{ min:10, items:["Caravan Journals","Path B: clear cups, coloured sand or layers of clay/play-dough, small ‘artefacts’ (beads, buttons)","Optional: a layered cake or sandwich to model layers!"] },
    safety:["Sand stays in the cups or trays; sweep spills."],
    care:[],
    hononga:"**Layers in Ashburton.** Our town has layers too: early buildings replaced by newer ones on the same street corners. Old photos show what used to be there. What might an archaeologist find under East Street in 1,000 years?",
    paths:[
      { id:"A", name:"The Archaeologist", product:"Archaeologist's Report", steps:["Draw a **cross-section** of a tell with **five layers**.","Label what might be found in each (pottery, coins, walls).","Explain **why the deepest layer is the oldest**."], flying:"Explain what continuity and change you'd see in Susa's layers." },
      { id:"B", name:"The Artisan", product:"Layered Tell Model", steps:["In a clear cup, build **at least four layers** of coloured sand or clay.","Hide a small **artefact** in each layer.","Label the layers from **oldest (bottom)** to **newest (top)**."], flying:"Swap with a partner: ‘excavate’ their cup carefully and record the order." },
      { id:"C", name:"The Herald", product:"“Layer by Layer” Talk", steps:["You are a guide at **Susa**.","Plan a **1-minute tour** from the top layer down to the bottom.","Explain what a **tell** is and why Susa matters."], flying:"Answer: “Why would people keep building in the same place?”" }
    ],
    supportedShort:"a tell template to colour and label; picture cards of artefacts; partner pairing.",
    lens:{
      pillar:"mohio", title:"Our dwelling place in every generation",
      look:"Look again at the tell: people came and went, cities rose and fell, layer after layer.",
      ref:"Psalm 90:1–2",
      paraphrase:"Lord, You have been our dwelling place through all generations. Before the mountains were born, from everlasting to everlasting, You are God.",
      talk:[
        { q:"Cities rise and fall, but the psalm says God is our home in every generation. What does that mean?", listen:"God never changes; He was there for every layer of people; He is always with us." },
        { q:"What ‘layers’ of your family's story can you thank God for?", listen:"Grandparents, parents, moving to NZ, the family's faith, family traditions." }
      ],
      live:"Ask someone older in your family about **one thing that has changed** and **one that has stayed the same**. Write it in your Caravan Journal."
    },
    clue:{ prompt:"How many layers of settlement does Susa have?", answer:27, explain:"27 layers. Waystation Clue 2 = 27, saved for Friday!" },
    next:"Wednesday — Gandom: why is a salt lake losing its flamingos?",
    rubric:[
      { c:"What is a tell?", code:"SS-G",
        d:["Says it's a hill.","“A big hill.”"],
        a:["Explains how a tell forms.","“People built new towns on top of the ruins of old ones, so the hill grew.”"],
        f:["Explains why people kept building there.","“It had water, trade and a good position, so people stayed.”"],
        i:["I can say it's a hill.","I can explain how a tell forms.","I can explain why people kept building there."] },
      { c:"Susa's layers", code:"SS-G · SS-H",
        d:["Names one layer.","“Darius's palace.”"],
        a:["Describes Susa's layers from oldest to newest.","“27 layers: early settlers, Elamite city, Darius's palace, later towns up to the 13th century AD.”"],
        f:["Explains how archaeologists use layers as evidence.","“Deeper means older, so they can put the finds in order.”"],
        i:["I can name a layer.","I can describe the layers in order.","I can explain how layers are evidence."] },
      { c:"Continuity & change", code:"SS-H · SS-P",
        d:["Says things changed.","“It got different.”"],
        a:["Gives an example of continuity and of change.","“People always lived there (continuity), but the rulers changed (change).”"],
        f:["Compares with our own town.","“Ashburton's main streets stayed, but the buildings changed.”"],
        i:["I can say things changed.","I can give an example of each.","I can compare with our own town."] }
    ],
    plan:{
      prior:"Students met Susa in Weeks 1, 2, 4 and yesterday; the Week 1 side note mentioned its earliest layers.",
      kc:["Thinking","Using language, symbols & texts","Participating & contributing"],
      sequence:[
        ["0–6","The Dispatch","Farhad's dispatch; Waystation Check; LI/SC.","Recall."],
        ["6–20","Discovery","**Dig the Tell**; Susa's facts; 🔬 side note; turn & talk.","Predict; discuss."],
        ["20–38","Choose Your Path","A/B/C (B needs sand trays).","Create."],
        ["38–45","Through the Lens","Psalm 90:1–2.","Discuss."],
        ["45–50","Waystation Clue & Exit","Clue 2 (answer 27).","Solve; self-assess."]
      ],
      diff:{
        supported:"Tell template; artefact picture cards.",
        esol:"Model with a layered cup; key words on cards.",
        learning:"Hands-on model; chunked steps.",
        flying:"Continuity and change; why people stay."
      },
      assess:{
        lookFor:["Explains a tell","Describes layers in order","Gives continuity and change examples"],
        evidence:["Path products","Models (photograph)","Exit self-assessment"]
      },
      inquiry:["Who understood ‘deeper = older’?","Revisit continuity and change in Week 8 (Bam earthquake rebuilding)."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"farhad", meta:"Standing on a great mound outside Susa",
        msg:"See this hill we're standing on? **It isn't a hill.** It's a city… on top of a city… on top of a city. People have lived here for so long that their old towns have piled up into a mountain. Somewhere down there, archaeologists are digging. **Grab a trowel!**",
        notes:[["SAY","Read the dispatch. 🟡 Farhad is fictional."],["ASK","“How could a city become a hill?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"Where is the book of Esther set?", a:"The palace at Susa." }, { q:"Who was Ahasuerus probably?", a:"Xerxes I." }, { q:"What does Purim remember?", a:"How the Jews were saved in Esther's time." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Deeper means older", title:"Dig the Tell", ix:"tell",
        notes:[["CLICK","Press → to dig down, layer by layer."],["ASK","Before each layer: “Older or newer than the last one?”"],["NOTE","Simplified to five bands; Susa has 27 layers. Source: UNESCO, Susa."]] },
      { type:"sidenote", phase:"excavate", fs:"real", kicker:"Susa in numbers", title:"A city of *27 layers*",
        main:"Susa has **27 layers** of settlement, one on top of another, up to the **13th century AD**. It was the capital of **Elam** and of the **Persian Empire**, and archaeologists have dug there for **more than 150 years**. Reading Genesis as history, Susa's first people lived **a few thousand years** after Creation.",
        refs:"Genesis 10:22 · UNESCO World Heritage Centre",
        side:{ text:"Archaeologists date Susa's earliest layers to the **late 5th millennium BC**, about **6,000 years ago**.", src:"UNESCO World Heritage Centre — Susa" },
        notes:[["SAY","Read the main box, then the side note."],["SIDE","Never mock either view (D8)."]] },
      { type:"discussion", phase:"excavate", fs:"real", kicker:"Turn & Talk", q:"**Why would people keep building in the same place for thousands of years?**", sub:"Think back to Week 1: why settle here?", talk:45,
        notes:[["TALK","45 seconds."],["LISTEN","Water, farmland, trade routes, defence (a hill!), it was home, the buildings and roads were already there."]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAY","“Choose your path. Every product shows deeper = older.”"],["CLICK","Start the 18-minute timer."],["SAFETY","Sand stays in trays."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Psalm 90:1–2."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 27."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = darics."]] }
    ]
  };

  /* ======================= WEDNESDAY · SCIENCE ======================= */
  const wed = {
    id:"w05-wed", week:5, day:"wed", subject:"science", duration:50,
    title:"Wetlands & Salt Lakes: Lake Urmia", guide:"gandom",
    codes:["SC-LW","SC-P","SS-G"],
    coverage:"Y5 Science (2027): ecosystems — food chains, how changes to non-living parts (water, salt) affect living things; human impact and conservation.",
    li:"We are learning how a salt-lake food chain works and how changing the water affects it.",
    sc:["I can build the brine shrimp → flamingo food chain.","I can explain why Lake Urmia shrank.","I can predict the effects of the lake shrinking."],
    vocab:[
      { w:"salt lake", def:"a lake with very salty water and no river flowing out" },
      { w:"brine shrimp", def:"tiny animals (Artemia) that live in very salty water" },
      { w:"wetland", def:"land covered or soaked by water for much of the year" },
      { w:"salinity", say:"suh-LIN-ih-tee", def:"how salty water is" },
      { w:"upstream", def:"further up a river, towards where it starts" },
      { w:"restoration", def:"bringing something back to how it should be" },
      { w:"cause and effect", def:"one thing (the cause) makes another thing happen (the effect)" }
    ],
    prep:{ min:5, items:["Caravan Journals","Path B: two trays or plates, blue card or paper, salt for the ‘shoreline’","Optional demo: a cup of water with salt stirred in, left to evaporate on a sunny sill"] },
    safety:["Don't taste the salt water."],
    care:[],
    hononga:"**Our water, shared.** Canterbury's rivers feed farms, towns and wetlands like **Te Waihora (Lake Ellesmere)**. Taking too much water upstream can harm the living things downstream. Sharing water fairly matters here too.",
    paths:[
      { id:"A", name:"The Scribe", product:"Cause-and-Effect Chain", steps:["Draw a chain of boxes: **water taken upstream → … → flamingos leave**.","Add **at least five** links with arrows.","Finish with one **solution** and what it would change."], flying:"Add a second chain showing what happens if the restoration works." },
      { id:"B", name:"The Artisan", product:"Lake Model: Before & After", steps:["Make **two lake models**: Lake Urmia **before** and **after** shrinking.","Add **shrimp and flamingos** (drawn or modelled) where they'd be.","Label the **salt crust** and the **water level**."], flying:"Add a label with the real figures: 45% of its area, 85% of its volume." },
      { id:"C", name:"The Herald", product:"Flamingo's News Report", steps:["You are a **flamingo reporter** at Lake Urmia.","Report **what's happening** to the lake and **why**.","Interview a **farmer** and a **scientist**, then sign off with hope."], flying:"Explain why sharing water fairly is hard for people upstream." }
    ],
    supportedShort:"cause-and-effect boxes to order; picture cards; sentence starters “Because…, so…”.",
    lens:{
      pillar:"aroha", title:"Work it and take care of it",
      look:"Look again at the lake: people needed water, but taking too much harmed the shrimp and flamingos.",
      ref:"Genesis 2:15",
      paraphrase:"The LORD God took the man and put him in the Garden of Eden to work it and take care of it.",
      talk:[
        { q:"God gave people work to do AND care to give. How did Lake Urmia's story get out of balance?", listen:"People used the water but didn't take care of the lake; too much work, not enough care." },
        { q:"How can we ‘work and take care’ of the water we use?", listen:"Short showers, turning taps off, not polluting drains, caring for streams." }
      ],
      live:"Choose a way to **save water** at home this week and track it for three days in your Caravan Journal."
    },
    clue:{ prompt:"What percentage of its area had Lake Urmia lost by July 2020?", answer:45, explain:"45% of its area (and 85% of its volume). Waystation Clue 3 = 45, saved for Friday!" },
    next:"Thursday — Nasrin: how does an arch hold up a dome?",
    rubric:[
      { c:"Salt-lake food chain", code:"SC-LW",
        d:["Names an animal at the lake.","“Flamingos.”"],
        a:["Builds the chain and explains it.","“Algae → brine shrimp → flamingo: the flamingos eat the shrimp.”"],
        f:["Explains how salt affects every link.","“Too much salt and the shrimp die, so the flamingos lose their food.”"],
        i:["I can name an animal at the lake.","I can build the food chain and explain it.","I can explain how salt affects every link."] },
      { c:"Why the lake shrank", code:"SC-LW · SS-G",
        d:["Says it's drying up.","“It's getting smaller.”"],
        a:["Explains the main cause.","“Dams and farms upstream took much of the water.”"],
        f:["Uses the data to describe the change.","“By 2020 it lost 45% of its area but 85% of its volume, so it's much shallower too.”"],
        i:["I can say it's shrinking.","I can explain the main cause.","I can use the data to describe the change."] },
      { c:"Predicting effects", code:"SC-P",
        d:["Says something will happen.","“The birds will be sad.”"],
        a:["Predicts a chain of effects.","“Less water → saltier → fewer shrimp → flamingos leave.”"],
        f:["Suggests and evaluates a solution.","“Sending more river water back would help, but farmers would need help too.”"],
        i:["I can say something will happen.","I can predict a chain of effects.","I can suggest and evaluate a solution."] }
    ],
    plan:{
      prior:"Students built food chains (Week 2) and webs (Week 3). Many won't know that lakes can be salty.",
      kc:["Thinking","Participating & contributing","Relating to others"],
      sequence:[
        ["0–6","The Dispatch","Gandom's dispatch; Waystation Check; LI/SC.","Recall."],
        ["6–20","Discovery","Meet the lake's food chain; **Salt Lake Slider**; turn & talk.","Predict; discuss."],
        ["20–38","Choose Your Path","A/B/C.","Create."],
        ["38–45","Through the Lens","Genesis 2:15.","Discuss."],
        ["45–50","Waystation Clue & Exit","Clue 3 (answer 45).","Solve; self-assess."]
      ],
      diff:{
        supported:"Cause-and-effect boxes to order; picture cards.",
        esol:"Before/after pictures; key words; gestures.",
        learning:"Model option; chunked steps.",
        flying:"Use both figures (area and volume); evaluate solutions."
      },
      assess:{
        lookFor:["Builds the food chain","Explains the cause","Predicts effects"],
        evidence:["Path products","Discussion","Exit self-assessment"]
      },
      inquiry:["Who understood area vs volume? Revisit in Maths.","Link to Week 2's Amos 5:24 (fair sharing)."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"gandom", meta:"The salty shore of Lake Urmia · north-west Iran",
        msg:"Pfft. **Salt.** On my lips, on my hooves, everywhere. This lake is saltier than the sea, and the shore is creeping further away every year. The **flamingos** used to come in thousands. Now… look how few. **Something's wrong with the water.**",
        notes:[["SAY","Read it in Gandom's voice. 🟡 Gandom is fictional; Lake Urmia is real."],["ASK","“Why might a lake shrink?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"What is a tell?", a:"A hill made of the remains of towns built one on top of another." }, { q:"In a tell, which layer is oldest?", a:"The deepest one." }, { q:"How many layers does Susa have?", a:"27." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"animalcards", phase:"excavate", fs:"real", kicker:"The salt-lake food chain", title:"Who lives at *Lake Urmia*?",
        animals:[
          { img:"animal-21", icon:"🟢", col:"#3f7a4a", t:"Algae", d:"Tiny **producers** that grow in the salty water, using sunlight." },
          { img:"animal-22", icon:"🦐", col:"#c26a4a", t:"Brine shrimp (Artemia)", d:"Tiny **consumers** that eat algae. They live in salty water, but **too much salt** harms them." },
          { img:"animal-13", icon:"🦩", col:"#e58aa0", t:"Flamingos", d:"**Consumers** that wade in the shallows to eat brine shrimp." }
        ],
        notes:[["SAY","“Algae → brine shrimp → flamingos. A short food chain in a very salty lake.”"],["NOTE","Source: Utah State University (Lake Urmia; brine shrimp and flamingos). Algae as the shrimp's food is general science."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Lower the water", title:"The Salt Lake Slider", ix:"saltlake",
        notes:[["CLICK","Press →: a healthy lake → water taken upstream → by 2020 → restoration. Or drag the slider."],["SAY","“By July 2020, Lake Urmia had lost 45% of its area and 85% of its volume, mainly because water was taken upstream for dams and farms. Iran began a restoration programme in 2013.”"],["NOTE","Source: Utah State University. The meters are illustrations, not measurements."]] },
      { type:"discussion", phase:"excavate", fs:"real", kicker:"Turn & Talk", q:"Farmers need water for crops. Flamingos need the lake. **How could people share the water fairly?**", sub:"Think about everyone who needs the water: people, farms and animals.", talk:60,
        notes:[["TALK","60 seconds."],["LISTEN","Use less water on farms, smarter irrigation, let some river water reach the lake, rules for sharing, everyone giving a little."]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAY","“Choose your path. Every product shows cause and effect.”"],["CLICK","Start the 18-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Genesis 2:15."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 45 (%)."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = darics."]] }
    ]
  };

  /* ======================= THURSDAY · TECHNOLOGY ======================= */
  const thu = {
    id:"w05-thu", week:5, day:"thu", subject:"technology", duration:50,
    title:"Arches & Domes: Building Strong", guide:"nasrin",
    codes:["TE-TK","TE-TP","SC-PW","SC-P"],
    coverage:"Technology (NZC L3): technological knowledge (structures), technological practice (build, test, improve). Science: forces (compression, push), fair testing.",
    li:"We are learning how arches carry weight, and how to build one that holds a load.",
    sc:["I can explain compression in an arch.","I can build an arch from blocks or card.","I can test my arch and improve it."],
    vocab:[
      { w:"arch", def:"a curved structure that spans an opening and holds up weight" },
      { w:"dome", def:"a roof shaped like half a ball: an arch turned all the way round" },
      { w:"keystone", def:"the wedge-shaped stone at the top of an arch that locks it together" },
      { w:"compression", def:"a squeezing force that pushes things together" },
      { w:"load", def:"the weight a structure has to hold up" },
      { w:"buttress", say:"BUT-ress", def:"a support built against a wall or arch to stop it pushing outwards" },
      { w:"span", def:"the distance an arch or bridge stretches across" }
    ],
    prep:{ min:15, items:["Per team: card strips, tape, two stacks of books (the arch's feet)","Or: sugar cubes / foam blocks to build a block arch","Coins or washers as the load; a small cup to hold them","Results table"] },
    safety:["Stack books carefully; keep them low.","Don't eat the sugar cubes (if used)."],
    care:[],
    hononga:"**Arches in Aotearoa.** Arches hold up bridges and old stone buildings across New Zealand. After the Canterbury earthquakes, engineers learned a lot about how masonry arches behave when the ground shakes.",
    paths:[
      { id:"A", name:"The Scribe", product:"Test Results", steps:["Test a **flat card beam** and a **card arch** across the same gap.","Record how many **coins** each holds before it fails.","Explain the difference using the word **compression**."], flying:"Test a third design (a taller arch, a double layer) and explain the result." },
      { id:"B", name:"The Artisan", product:"Strongest Arch Challenge", steps:["Build the **strongest arch** you can across a 20 cm gap.","Test it with coins until it **fails**.","**Improve** one thing and test again."], flying:"Add buttresses to stop the feet sliding. Did it help?" },
      { id:"C", name:"The Herald", product:"Engineer's Explanation", steps:["Use a model or diagram to explain **how an arch works**.","Show the **load**, the **compression** and the **feet**.","Explain what happens if you remove the **keystone**."], flying:"Explain how a dome is like an arch turned all the way round." }
    ],
    supportedShort:"a pre-cut arch template; a results table; clear team roles.",
    lens:{
      pillar:"manaaki", title:"Build on the rock",
      look:"Look again at the arch: it only stands if its **feet** are on something solid.",
      ref:"Matthew 7:24–27",
      paraphrase:"Jesus said: everyone who hears My words and puts them into practice is like a wise man who built his house on the rock. The rain came, the streams rose and the winds blew, but it did not fall.",
      talk:[
        { q:"An arch needs solid feet. What does it mean to build our lives ‘on the rock’?", listen:"Listening to Jesus AND doing what He says; trusting Him when things are hard." },
        { q:"What ‘storms’ might come in life, and how does a strong foundation help?", listen:"Hard days, losses, friendship troubles; trusting God keeps us standing." }
      ],
      live:"Choose one thing Jesus teaches that you'll **put into practice** this week (e.g. Matthew 7:12)."
    },
    clue:{ prompt:"An arch pushes its load down into how many feet?", answer:2, explain:"Two feet. Waystation Clue 4 = 2, saved for Friday!" },
    next:"Friday — Master Hamid: the gold of the Oxus. Let's emboss!",
    rubric:[
      { c:"How an arch works", code:"TE-TK · SC-PW",
        d:["Says arches are strong.","“Arches are strong.”"],
        a:["Explains compression and the feet.","“The load squeezes the stones together and the force goes down to the two feet.”"],
        f:["Explains the keystone and the sideways push.","“The keystone locks it; the feet push outwards, so they need buttresses.”"],
        i:["I can say arches are strong.","I can explain compression and the feet.","I can explain the keystone and sideways push."] },
      { c:"Building an arch", code:"TE-TP",
        d:["Builds with help.","A card bent over books."],
        a:["Builds an arch that holds a load.","Holds coins across the gap."],
        f:["Improves the design after testing.","“We added buttresses and it held twice as many coins.”"],
        i:["I can build with help.","I can build an arch that holds a load.","I can improve it after testing."] },
      { c:"Testing", code:"SC-P",
        d:["Tests with help.","Adds some coins."],
        a:["Tests fairly and records the results.","Same gap, same coins, one coin at a time."],
        f:["Compares designs using data.","“The arch held 34 coins; the flat beam held 6.”"],
        i:["I can test with help.","I can test fairly and record.","I can compare designs using data."] }
    ],
    plan:{
      prior:"Students saw the yakhchāl's dome last week. Forces may be new; ‘push’ and ‘squeeze’ are good starting words.",
      kc:["Thinking","Managing self","Participating & contributing"],
      sequence:[
        ["0–6","The Dispatch","Nasrin's dispatch; Waystation Check; LI/SC.","Recall."],
        ["6–16","Discovery","**Arch Force**; the design brief; safety.","Predict."],
        ["16–38","Build & Test (Paths)","Build, test with coins, improve; complete paths.","Build; test; record."],
        ["38–45","Through the Lens","Matthew 7:24–27.","Discuss."],
        ["45–50","Waystation Clue & Exit","Clue 4 (answer 2).","Solve; tidy."]
      ],
      diff:{
        supported:"Arch template; results table; roles.",
        esol:"Gestures for ‘push’ and ‘squeeze’; diagram labels.",
        learning:"Hands-on; short steps.",
        flying:"Buttresses; domes."
      },
      assess:{
        lookFor:["Explains compression","Builds a working arch","Tests and improves"],
        evidence:["Results tables","Models (photograph)","Exit self-assessment"]
      },
      inquiry:["Which designs failed at the feet? Use it to teach buttresses.","Link to Week 8's earthquake lesson."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"nasrin", meta:"Under a great brick arch · cool shade",
        msg:"Look up! A whole roof of **mud brick**, curved like a rainbow, with nothing holding it up in the middle. **How?** Mud brick is weak if you bend it… but squeeze it, and it's strong. My uncle says: *make the bricks lean on each other, and they'll hold up the sky.*",
        notes:[["SAY","Read the dispatch. 🟡 Nasrin is fictional."],["ASK","“What does it mean: make the bricks lean on each other?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"What do flamingos eat at Lake Urmia?", a:"Brine shrimp." }, { q:"Why did Lake Urmia shrink?", a:"Water was taken upstream for dams and farms." }, { q:"What happens when the water gets saltier?", a:"The brine shrimp struggle, so the flamingos lose their food." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Follow the force", title:"Arch Force", ix:"archforce",
        notes:[["CLICK","Press →: a flat beam bends → an arch → squeezed together → push at the feet → remove the keystone!"],["SAY","“An arch turns the weight into a squeeze (compression). The stones push against each other, and the force travels down to the two feet.”"],["NOTE","Source: Britannica (arch: downward pressure forces the stones together; supports take the sideways push)."]] },
      { type:"brief", phase:"excavate", fs:"real", title:"Span the gap",
        stakeholder:"Builders in a land with mud brick but little timber.",
        need:"A **strong roof or bridge** made from small pieces that are weak when bent.",
        specs:["It must span a 20 cm gap between two stacks of books.","It must hold as many coins as possible.","Only card and tape (or blocks).","We test fairly: same gap, coins added one at a time."],
        notes:[["SAY","Read the brief."],["ASK","“Why didn't Persian builders just use long wooden beams?” (Timber was scarce on the plateau.)"]] },
      { type:"safety", phase:"excavate", fs:"real", title:"Build-and-test rules",
        items:[ { icon:"📚", t:"Low, steady stacks", d:"Stack books carefully; keep them low." }, { icon:"🪙", t:"One coin at a time", d:"Add the load gently, one coin at a time." }, { icon:"🧹", t:"Tidy as you go", d:"Pick up coins that fall, so no one slips." } ],
        notes:[["SAFETY","Read each rule."]] },
      { type:"paths", phase:"paths", fs:null, minutes:22,
        notes:[["SAY","“Build and test first (12 minutes), then finish your path.”"],["CLICK","Start the 22-minute timer."],["ASK","Roaming: “Where did it fail? At the top or at the feet?”"]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Matthew 7:24–27."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 2 feet."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess, then tidy."],["CLICK","C = darics."]] }
    ]
  };

  /* ======================= FRIDAY · ART ======================= */
  const fri = {
    id:"w05-fri", week:5, day:"fri", subject:"art", duration:50,
    title:"Gold of the Oxus: Foil Embossing", guide:"hamid",
    codes:["VA-PK","VA-DI","VA-UC","MA"],
    coverage:"Visual Arts (NZC 2007, Level 3): practical knowledge (repoussé and chasing in foil), developing ideas (pattern and detail), understanding art in context (the Oxus treasure). Maths: Old Persian number signs.",
    li:"We are learning to emboss a metal-foil design inspired by Persian goldwork.",
    sc:["I can describe the Oxus chariot model.","I can emboss raised areas and lines.","I can add detail with pattern."],
    vocab:[
      { w:"emboss", def:"to make a design stand out from a surface" },
      { w:"repoussé", say:"re-poo-SAY", def:"shaping metal by pushing it from the back" },
      { w:"chasing", def:"pressing fine lines into metal from the front" },
      { w:"Oxus treasure", say:"OK-sus", def:"a hoard of gold and silver objects from the Persian Empire, now in the British Museum" },
      { w:"chariot", def:"a two-wheeled cart pulled by horses" },
      { w:"texture", def:"how a surface feels or looks like it feels" },
      { w:"motif", say:"moh-TEEF", def:"a shape or picture that repeats in a design" }
    ],
    prep:{ min:10, items:["Craft foil (or foil trays cut flat), cut to card size","Felt or a folded newspaper pad under each","Blunt pencils, used ballpoint pens, lolly sticks","Black shoe polish or paint for antiquing (optional)","Card for mounting"] },
    safety:["Foil edges can be sharp: fold them over first.","Wash hands after polish or paint."],
    care:[],
    hononga:"**Treasures in Aotearoa.** Te Papa looks after taonga (treasures) for all New Zealanders, like the British Museum looks after the Oxus treasure. Museums help us learn from the past and care for precious things.",
    paths:[
      { id:"A", name:"The Curator", product:"Museum Label", steps:["Make your foil piece (or a sketch of one).","Write a **museum label**: title, materials, inspired by, and **how it was made**.","Use the words **repoussé** and **chasing**."], flying:"Write a second label for the real Oxus chariot, using facts from today." },
      { id:"B", name:"The Artisan", product:"Foil Emboss", steps:["Draw a design (an animal, a chariot, a rosette) on paper, then tape it to the foil.","Trace firmly, then **push from the back** to raise the main shapes.","Turn over and **chase** fine lines and patterns from the front."], flying:"Antique it: wipe dark polish over and buff the raised parts to make them shine." },
      { id:"C", name:"The Herald", product:"Treasure-Hunter Talk", steps:["You are a **treasure hunter** describing the Oxus chariot.","Plan a **1-minute talk**: what it is, what it's made of, how old it is.","Show your foil piece and explain **how you made it**."], flying:"Explain why gold objects survive so well for thousands of years." }
    ],
    supportedShort:"simple templates to trace; pre-cut, edge-folded foil; adult help pressing.",
    lens:{
      pillar:"sdg", title:"Worth more than gold",
      look:"Look again at the shining gold chariot: precious, beautiful… and Proverbs says something is worth even more.",
      ref:"Proverbs 3:13–15",
      paraphrase:"Blessed are those who find wisdom and gain understanding. She is more profitable than silver and yields better returns than gold. She is more precious than rubies; nothing you desire can compare with her.",
      talk:[
        { q:"Why would wisdom be worth more than gold?", listen:"Gold can be lost or stolen; wisdom helps us live well; wisdom comes from God and lasts." },
        { q:"Where do we get wisdom?", listen:"From God, His Word, prayer, wise people (James 1:5)." }
      ],
      live:"Soli Deo Gloria: write **SDG** on the back of your foil piece. Ask God for wisdom for one thing this week."
    },
    clue:{ prompt:"Friday's clue is the Seal Fragment: add this week's four Waystation Clues and write the total in Old Persian number signs.", answer:88, explain:"14 + 27 + 45 + 2 = 88 → four 20-signs and four 2-signs." },
    next:"Next week — Stage VI: Rebuilding the Walls. Big Projects begin!",
    rubric:[
      { c:"The Oxus chariot", code:"VA-UC",
        d:["Says it's made of gold.","“A gold chariot.”"],
        a:["Describes it with date and place.","“A small gold chariot model, 5th–4th century BC, with four horses, a driver and a seated figure; in the British Museum.”"],
        f:["Explains how goldsmiths made such work.","“They shaped sheet gold from behind and added detail from the front.”"],
        i:["I can say what it's made of.","I can describe it with date and place.","I can explain how it was made."] },
      { c:"Raised areas & lines", code:"VA-PK",
        d:["Draws lines into foil.","Lines but no raised shapes."],
        a:["Uses repoussé for raised shapes and chasing for lines.","Main shapes stand up; fine lines pressed in."],
        f:["Controls depth for a clear design.","Smooth raised forms; crisp, even lines."],
        i:["I can draw lines into foil.","I can raise shapes and chase lines.","I can control depth for a clear design."] },
      { c:"Pattern & detail", code:"VA-DI",
        d:["Adds one pattern.","Dots in one corner."],
        a:["Adds patterns that suit the design.","A border and textures on clothes or manes."],
        f:["Uses pattern to lead the eye and add meaning.","A rosette border that frames the main shape."],
        i:["I can add a pattern.","I can add patterns that suit my design.","I can use pattern to frame and add meaning."] }
    ],
    plan:{
      prior:"Students carved, printed and layered relief in Weeks 2–4. Embossing is new; they know designs can be reversed.",
      kc:["Thinking","Managing self","Using language, symbols & texts"],
      sequence:[
        ["0–6","The Dispatch","Hamid's dispatch; Waystation Check; LI/SC.","Recall."],
        ["6–14","Discovery","The Oxus chariot; **Raise the Gold**.","Look; predict."],
        ["14–36","Choose Your Path","Design, emboss, chase, finish.","Create."],
        ["36–41","Through the Lens","Proverbs 3:13–15.","Discuss."],
        ["41–50","Seal Fragment V & the Shadow's Note","14 + 27 + 45 + 2 = 88 → 20, 20, 20, 20, 2, 2, 2, 2.","Solve the lock."]
      ],
      diff:{
        supported:"Templates; folded foil; adult help.",
        esol:"Demonstrate each step; key words with pictures.",
        learning:"Hands-on; short steps.",
        flying:"Antiquing; depth control."
      },
      assess:{
        lookFor:["Describes the Oxus chariot","Uses repoussé and chasing","Adds suitable pattern"],
        evidence:["Foil pieces (photograph)","Labels","Seal Fragment working (88)"]
      },
      inquiry:["Who pressed too hard and tore the foil? Use thicker felt next time.","How did students answer the Shadow's note about Esther?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"hamid", meta:"The goldsmiths' workshop · tap, tap, tap",
        msg:"Hear that tapping? The **goldsmiths**. Gold is soft, so they don't carve it. They **push** it. From behind, to make the shapes rise. From the front, to draw the lines. One of my friends made a tiny **golden chariot** with four horses, small enough to hold in your hand. **Today, you are goldsmiths.**",
        notes:[["SAY","Read the dispatch. 🟡 Master Hamid is fictional; the Oxus chariot is real."],["ASK","“Why might gold be pushed instead of carved?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"What force holds an arch together?", a:"Compression (squeezing)." }, { q:"What does the keystone do?", a:"It locks the top of the arch together." }, { q:"Why do arches need strong supports at the sides?", a:"The feet are pushed outwards." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Real Persian treasure", title:"The *Oxus* chariot",
        bullets:["A small model chariot made of **gold**, from the **5th–4th century BC**.","**Four small horses** pull a chariot with a **driver** and a **seated figure**.","It's part of the **Oxus treasure**, now in the **British Museum** (Room 52)."],
        visual:{ artefact:"foil" },
        notes:[["SAY","Read the points."],["CLICK","To show the real chariot, open the British Museum link (Sources panel)."],["NOTE","Source: British Museum, The Oxus chariot model. The picture is an artwork study, not the museum object."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Push and press", title:"Raise the Gold", ix:"raisegold",
        notes:[["CLICK","Press →: flat foil → push from behind (repoussé) → turn over → chase lines → inspired by the Oxus."],["ASK","“Which side do you push from to make a shape stick OUT?”"]] },
      { type:"paths", phase:"paths", fs:null, minutes:20,
        notes:[["SAY","“Fold the foil edges first. Design, then emboss.”"],["CLICK","Start the 20-minute timer."],["SAFETY","Foil edges folded."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Proverbs 3:13–15."]] },
      { type:"folioseal", phase:"decode", fs:"story",
        notes:[["SAY","“Four clues: 14, 27, 45 and 2. Add them up.”"],["CLICK","14 + 27 + 45 + 2 = 88."],["SAY","“88: four 20-signs make 80, then 8 more: four 2-signs.”"],["CLICK","Press 20, 20, 20, 20, 2, 2, 2, 2, then ‘Open the lock’."]] },
      { type:"intercept", phase:"decode", fs:"story",
        msg:"One girl can't change anything.",
        ask:"The Shadow says one person can't make a difference. What would Esther say? Can one person change things?",
        notes:[["SAY","Read it in the Shadow's voice. 🟡 The Shadow Courier is fictional."],["ASK","Take answers. Link to Esther 4:14 and Monday's lesson."],["LISTEN","Esther did; God works through one person; small acts of courage matter."],["NOTE","The Shadow seems to be growing less sure. Keep this thread alive towards Week 9."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess. Celebrate Fragment V: halfway!"],["CLICK","C = darics. Mount foil pieces for the Week 10 Exhibition."]] }
    ]
  };

  BM.WEEKS[5] = {
    n:5,
    story:"The palace at Susa, where a queen risks her life. The historians put Esther's story in order and find God's hidden hand; the geographers dig down through the 27 layers of Susa's tell; the scientists watch Lake Urmia shrink and its flamingos leave; the engineers build arches that hold a load; and the artists emboss foil like the gold of the Oxus. On Friday, 14 + 27 + 45 + 2 = 88 frees Fragment V: halfway there.",
    hononga:"Courage in NZ history (Mon) · layers of Ashburton's streets (Tue) · sharing Canterbury's water, Te Waihora (Wed) · arches and the Canterbury earthquakes (Thu) · taonga at Te Papa (Fri).",
    seal:{
      answer:88,
      instruction:"Add the four **Waystation Clues**. Then write the total in **Old Persian number signs**, biggest first, and press them into the clay. *(20 = two corner wedges · 2 = two upright wedges.)*",
      reveal:"🟡 **Fragment V found!** Half the Seal shines. Five down, five to go. Next week: *Rebuilding the Walls* — the whole caravan must work together."
    },
    lessons:[mon, tue, wed, thu, fri]
  };
})(window.BM);
