/* ==========================================================
   WEEK 2 — STAGE II · THE KING WHO OPENED THE GATES
   Babylon, 539 BC. The fragment is hidden inside a clay cylinder.
   Notes: [KEY, text]  KEY = SAY ASK LISTEN IF CLICK TALK DEEPER PACE SAFETY WAIT NOTE CARE SIDE
   Facts are sourced in data/sources.js (tags match blueprint §18).
   ========================================================== */
(function(BM){
  "use strict";

  /* ======================= MONDAY · HISTORY ======================= */
  const mon = {
    id:"w02-mon", week:2, day:"mon", subject:"history", duration:50,
    title:"Cyrus the Great & the Fall of Babylon", guide:"shirin",
    codes:["SS-H","SS-P","EN","RE"],
    coverage:"Y5–6 History practices (2027 Social Sciences, Years 4–6): using primary sources, comparing two accounts of the same event, perspectives. Persia as an ancient civilisation (Y5).",
    li:"We are learning how Cyrus built an empire, and what the Cyrus Cylinder and the Bible tell us about him.",
    sc:["I can describe how Cyrus took Babylon in 539 BC.","I can explain what the Cyrus Cylinder records.","I can compare the Cylinder with Isaiah 45 and Ezra 1: what's the same and what's different."],
    vocab:[
      { w:"Cyrus the Great", say:"SY-rus", def:"the Persian king who built the empire; he ruled from about 559 to 530 BC" },
      { w:"Babylon", say:"BAB-ih-lon", def:"a huge, rich city on the Euphrates River (in modern Iraq), taken by Cyrus in 539 BC" },
      { w:"exile", say:"EG-zile", def:"being forced to live away from your home country; also a person who is forced to" },
      { w:"deported", def:"forced to leave your land and move somewhere else" },
      { w:"decree", say:"dih-KREE", def:"an official order from a king or ruler" },
      { w:"cylinder", def:"a shape like a tube or a rolling pin" },
      { w:"cuneiform", say:"KYOO-nee-uh-form", def:"writing made of wedge-shaped marks pressed into clay" },
      { w:"Marduk", say:"MAR-dook", def:"the god the people of Babylon worshipped (a false god; the Bible says the LORD is the only true God)" },
      { w:"anointed", def:"chosen and set apart by God for a special task" },
      { w:"perspective", def:"a point of view: how one person or group sees something" }
    ],
    prep:{ min:5, items:["Class Bible marked at Isaiah 44:28–45:7 and Ezra 1:1–4","Caravan Journals","Optional for Path B: air-dry clay or a cardboard tube and paper","Optional: open the British Museum page for the Cyrus Cylinder (Sources panel) to show the real object"] },
    safety:[],
    care:["Iran's people today are proud of Cyrus. Speak of him with respect, and invite (never require) students with family links to Iran to share what they know.","Avoid modern political claims about the Cylinder (e.g. that it is the ‘first charter of human rights’): historians debate this. Keep to what the Cylinder says.","Some students may have experienced being forced to leave a home or country. Talk about exiles gently; don't ask students to share personal stories."],
    hononga:"**Coming home.** Many families in Aotearoa came from somewhere else, and some could not go back. Ezra 1 tells of exiles who were allowed to go home after about 70 years away. How would that feel?",
    paths:[
      { id:"A", name:"The Scribe", product:"A Royal Announcement", steps:["Write Cyrus's **decree** in your own words, as if a herald is reading it to the exiles.","Include **who** may go home, **where** to, and **what** they may rebuild (use Ezra 1:1–4).","Add a **seal** at the bottom and one sentence: “The Cylinder agrees because…”"], flying:"Write a second, short announcement from a Babylonian priest's point of view. How would it be different?" },
      { id:"B", name:"The Artisan", product:"Clay Cylinder Model", steps:["Shape a **cylinder** from clay (or roll paper around a cardboard tube).","Press or draw **wedge marks** in bands, like cuneiform.","Write a **summary ‘inscription’** card: **four things** the Cylinder says Cyrus did."], flying:"Add a label: what does the Cylinder not mention, and why does that matter to historians?" },
      { id:"C", name:"The Herald", product:"Interview with a Returning Exile", steps:["With a partner, one is a **reporter**, one is a **Jewish exile** packing to go home.","Plan **4 questions**: Where have you been? Who let you go? What will you rebuild? How do you feel?","Perform your interview (**1–2 minutes**), using at least **two facts** from today."], flying:"Ask the exile: “Who do *you* say really opened the gates: Cyrus, Marduk or the LORD?” Answer using Isaiah 45 or Ezra 1." }
    ],
    supportedShort:"sentence starters (“Cyrus said that…”, “The people could…”); the Two Sources table printed; partner pairing; draw-and-label option.",
    lens:{
      pillar:"mohio", title:"Who really rules history?",
      look:"Look again at the two sources. The Cylinder says **Marduk** chose Cyrus. Ezra says **the LORD** stirred his heart.",
      ref:"Isaiah 45:1–7 (and 44:28)",
      paraphrase:"The LORD calls Cyrus His anointed and says, “I will strengthen you, though you have not acknowledged Me… I am the LORD, and there is no other; apart from Me there is no God.”",
      talk:[
        { q:"The Cylinder says Marduk chose Cyrus. Isaiah says the LORD did. What does Isaiah teach about who really rules history?", listen:"The LORD is the only true God; He rules over kings and nations, even kings who don't know Him." },
        { q:"Can God use people who don't know Him?", listen:"Yes: Cyrus didn't acknowledge the LORD, but God used him to send His people home." }
      ],
      live:"Pray for the leaders of Aotearoa New Zealand this week (1 Timothy 2:1–2). Write one leader's name in your Caravan Journal."
    },
    clue:{ prompt:"In which chapter of Isaiah is Cyrus called the LORD's “anointed”?", answer:45, explain:"Isaiah 45:1 calls Cyrus the LORD's anointed. Waystation Clue 1 = 45, saved for Friday!" },
    next:"Tuesday — Farhad: why did one empire need four capital cities?",
    rubric:[
      { c:"Cyrus takes Babylon", code:"SS-H",
        d:["Names Cyrus and Babylon.","“Cyrus took Babylon.”"],
        a:["Describes how and when Cyrus took Babylon.","“In 539 BC Cyrus's army entered Babylon. The Cylinder says it was without a battle.”"],
        f:["Explains why we should check how a source describes the event.","“The Cylinder was written for Cyrus, so of course it says the people welcomed him. We'd want another source to check.”"],
        i:["I can name Cyrus and Babylon.","I can describe how and when Cyrus took Babylon.","I can explain why I'd check how a source describes it."] },
      { c:"The Cyrus Cylinder", code:"SS-P",
        d:["Says the Cylinder is old writing.","“It's a clay thing with writing.”"],
        a:["Explains what the Cylinder records and what kind of source it is.","“It's a primary source. It says Cyrus restored temples and sent deported peoples home.”"],
        f:["Explains what the Cylinder leaves out and why that matters.","“It doesn't mention the Jews or Jerusalem, so it can't prove Ezra 1, but it shows the same policy.”"],
        i:["I can say what the Cylinder is.","I can explain what it records and that it's a primary source.","I can explain what it leaves out and why that matters."] },
      { c:"Comparing two sources", code:"SS-P · RE",
        d:["Finds one thing in Ezra 1.","“Cyrus let them go home.”"],
        a:["Finds one thing that is the same and one that is different.","“Both say Cyrus sent people home. The Cylinder says Marduk chose him; Ezra says the LORD did.”"],
        f:["Explains why the two sources see Cyrus differently.","“The Cylinder was made for Babylonians, so it uses their god. Ezra was written by God's people, who knew the LORD was in charge.”"],
        i:["I can find one fact in Ezra 1.","I can find something the same and something different.","I can explain why the two sources see it differently."] }
    ],
    plan:{
      prior:"Students met Cyrus on last week's timeline (559 BC, 539 BC) and the Cyrus Cylinder in the Source Sorter. Some know Daniel or Esther; few will know Ezra. ‘Exile’ is a new idea for most.",
      kc:["Thinking","Using language, symbols & texts","Relating to others"],
      sequence:[
        ["0–6","The Dispatch","Shirin's dispatch; Waystation Check (Week 1 recall); LI/SC.","Recall; predict what's inside a clay cylinder."],
        ["6–20","Discovery","Say it right; **Cylinder Reader** (5 bands); 🌍 who Cyrus was; **Two Sources Side by Side** (Cylinder vs Ezra 1); turn & talk.","Vote, read, compare, talk."],
        ["20–38","Choose Your Path","Introduce A/B/C; roam: “Which source says that? Who made it, and why?”","Create their product."],
        ["38–45","Through the Lens","Isaiah 45:1–7 — four moves.","Discuss; pray for NZ leaders."],
        ["45–50","Waystation Clue & Exit","Clue 1 (answer 45); self-assessment; darics.","Solve; self-assess."]
      ],
      diff:{
        supported:"Printed Two Sources table to fill in; sentence starters; partner reading of Ezra 1:1–4 (or listen to it read aloud).",
        esol:"Visual glossary (hover the dotted words); picture of the Cylinder; act out ‘gates opening’ and ‘going home’; rehearse orally before writing.",
        learning:"Chunked path cards; choice of response mode; movement in the Path C interview; calm screen available.",
        flying:"“Why might a king want to be seen as a liberator?” Write a priest's version of the decree (Path A Flying)."
      },
      assess:{
        lookFor:["Describes 539 BC and how Cyrus took Babylon","Explains what the Cylinder records and that it is a primary source","Names one similarity and one difference between the Cylinder and Ezra 1"],
        evidence:["Path products (photograph)","Two Sources talk","Exit self-assessment"]
      },
      inquiry:["Who could explain *why* the two sources differ? Build on this in Week 4 (whose story?).","Did any student with family links to Iran share? Follow up kindly.","Who needs more help with the idea of a primary source?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"shirin", meta:"Outside the gates of Babylon · dawn",
        msg:"Caravan! The Road Scroll has led us to **Babylon**, the greatest city in the world. Its gates are open, and nobody is fighting. A new king has arrived: **Cyrus**. The archivists whisper that the second fragment is sealed inside a **clay cylinder** written for him. To find it, we must read what the Cylinder says… and check it against another source.",
        notes:[["SAY","Read the dispatch. 🟡 Shirin is fictional; Babylon, Cyrus and the Cylinder are real."],["ASK","“Why would a historian want a second source to check the first?”"],["LISTEN","To see if it's true; one source might be one-sided."]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"Name the three peoples of the land before the empire.", a:"Elamites, Medes and Persians." }, { q:"Which came first: 539 BC or 518 BC?", a:"539 BC: BC dates count down." }, { q:"What is radial symmetry?", a:"A pattern that repeats around a centre point, like a rosette." } ],
        notes:[["ASK","Mini-whiteboards, then flip each card."],["NOTE","These recall Week 1 (Mon, Mon, Fri)."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"sayitright", phase:"excavate", fs:"real", kicker:"Say it right", title:"Names from Babylon",
        words:[ { w:"Cyrus", say:"SY · rus", mean:"Kourosh in Persian; the king who built the empire" }, { w:"Babylon", say:"BAB · ih · lon", mean:"the great city on the Euphrates" }, { w:"Marduk", say:"MAR · dook", mean:"the god Babylon worshipped" }, { w:"Pasargadae", say:"pa · SAR · ga · dee", mean:"Cyrus's capital in Pars" } ],
        note:"In Persian, Cyrus is **Kourosh** (koo-ROSH). If a student speaks Persian, invite them to say it.",
        notes:[["CLICK","Tap each card."],["SAY","Practise slowly, then at normal speed."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Meet the king", title:"Cyrus the Great",
        bullets:["Cyrus came from **Pars**. He built his capital, **Pasargadae**, and ruled from about **559 to 530 BC**.","He joined the Medes and Persians into one kingdom, then conquered lands far to the west.","In **539 BC**, his army took **Babylon**, the greatest city of its day."],
        visual:{ map:{ theme:"paper", labels:true, ranges:true, cities:["pasargadae","babylon","ecbatana","susa","sardis"], regions:["media","pars"] }, size:760 },
        notes:[["SAY","Read the points. Point to Pars, then Babylon, then Sardis in the far west."],["ASK","“Look at the distance from Pasargadae to Babylon. How might Cyrus's army have travelled?”"],["NOTE","Source: the Met (Pasargadae; Cyrus ruled about 559–530 BC). Map simplified."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"A primary source", title:"The Cylinder Reader", ix:"cylinder",
        notes:[["CLICK","Press → (or tap each band) to read the five parts."],["SAY","“This clay cylinder was made in Babylon soon after Cyrus took the city. It's written in Babylonian cuneiform.”"],["ASK","At band 1: “Who do you think wrote this, and who was it written for?” (Cyrus's scribes; for the people of Babylon.)"],["DEEPER","“Does the Cylinder say anything about the Jews or Jerusalem?” (No. Wait for the next slide.)"],["NOTE","The drawing is not a photo. To show the real object, open the British Museum page (Sources panel). Source: British Museum, Cyrus Cylinder."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Two sources, one event", title:"The Cylinder & Ezra 1", ix:"twosources",
        notes:[["SAY","Read Ezra 1:1–4 aloud from the class Bible first."],["CLICK","Press → to reveal each row. Before each reveal, ask: “Same or different?”"],["SAY","“The Cylinder doesn't mention the Jews or Jerusalem. But it shows the same policy Ezra describes: Cyrus sent deported peoples home and restored temples. Archaeology doesn't prove the Bible, but here it fits well with it.”"],["IF","“So the Cylinder is wrong about Marduk?” → “The Cylinder tells us what Babylonians believed. The Bible teaches that the LORD is the only true God, and Isaiah says He was the one at work.”"]] },
      { type:"discussion", phase:"excavate", fs:"real", kicker:"Turn & Talk", q:"Both sources say Cyrus sent people home. **Why might a king want to be seen as the one who set people free?**", sub:"Think about what the people of Babylon would think of their new king.", talk:45,
        notes:[["TALK","45 seconds."],["LISTEN","So people like him and don't rebel; to look kind and powerful; to keep the peace in a huge empire."],["DEEPER","Plant the Shadow's question for Friday: “Do you think kings always tell the whole truth about themselves?”"]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAY","“Three paths, same learning. Every path uses **both** sources.”"],["CLICK","Start the 18-minute timer."],["ASK","Roaming: “Which source says that? How do you know?”"]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Isaiah 44:28–45:7 from the class Bible."],["ASK","“The Cylinder says Marduk chose Cyrus; Isaiah says the LORD did. What does Isaiah teach about who really rules history?” Then: “Can God use people who don't know Him?”"],["SIDE","Christians have long read Isaiah 44–45 as prophecy given before Cyrus was born. Some scholars think these chapters were written nearer Cyrus's time. You don't need to raise this with the class; if a student asks, explain both views kindly."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: Isaiah 45 (verse 1)."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess against the success criteria."],["CLICK","C = darics."]] }
    ]
  };

  /* ======================= TUESDAY · GEOGRAPHY ======================= */
  const tue = {
    id:"w02-tue", week:2, day:"tue", subject:"geography", duration:50,
    title:"Royal Capitals: Pasargadae, Babylon, Susa & Persepolis", guide:"farhad",
    codes:["SS-G","SS-C","SS-P","MA"],
    coverage:"Y6 Geography: settlement and urbanisation (why cities grow and what they're for). Civics: why governments choose capitals. Maps and scale.",
    li:"We are learning why the Persian Empire had several capital cities and what each one was for.",
    sc:["I can locate four capitals on a map.","I can describe one feature of each capital.","I can explain why a huge empire might need more than one capital."],
    vocab:[
      { w:"capital", def:"the city where a country's government or ruler is based" },
      { w:"ceremonial", say:"seh-ruh-MOH-nee-ul", def:"used for special ceremonies and celebrations" },
      { w:"palace", def:"a large, grand building where a king or queen lives or works" },
      { w:"irrigation", def:"bringing water to land through channels so plants can grow" },
      { w:"channel", def:"a narrow path dug or built for water to flow along" },
      { w:"chahar bagh", say:"cha-HAR bahg", def:"a Persian garden divided into four parts by water channels" },
      { w:"government", def:"the people who make the rules and run a country" },
      { w:"central", def:"in the middle, easy to reach from everywhere" }
    ],
    prep:{ min:5, items:["Caravan Journals","Optional: printed outline maps for Path B","Optional: a map of New Zealand for the Hononga slide"] },
    safety:[],
    care:[],
    hononga:"**Why is Wellington our capital?** New Zealand's first capital was Okiato (Russell) in **1840**. It moved to **Auckland in 1841**, then to **Wellington in 1865**: Auckland was too far north for many MPs to reach, especially from the South Island. A tribunal of **three Australians** chose Wellington because it is more central (Te Ara).",
    paths:[
      { id:"A", name:"The Scribe", product:"City Guidebook Page", steps:["Choose **one capital**: Pasargadae, Babylon, Susa or Persepolis.","Write a **guidebook page**: where it is, **what it was for**, and **one amazing feature**.","Add a **‘Don't miss!’** box with one fact a visitor should see."], flying:"Add a ‘Then and now’ box: what does the site look like today, and why?" },
      { id:"B", name:"The Artisan", product:"Map of the Capitals", steps:["Draw a map with the **Zagros**, the **Persian Gulf** and the **Euphrates**.","Mark the **four capitals**, each with a **symbol** for its job (🌳 🏛️ ⚖️ 👑).","Add a **key** and a **compass rose**."], flying:"Add a scale bar and estimate the distance from Susa to Persepolis." },
      { id:"C", name:"The Herald", product:"Tour-Guide Talk", steps:["You are **Farhad**, leading a caravan between the capitals.","Plan a **1-minute tour**: visit **at least three capitals** and say what each is for.","Finish by explaining **why the king needs more than one capital**."], flying:"Compare with New Zealand: why did our capital move to Wellington?" }
    ],
    supportedShort:"picture cards for each capital's job; a printed map to label; partner pairing.",
    lens:{
      pillar:"aroha", title:"Seek the good of the city",
      look:"Look again at **Babylon**. God's people lived there as **exiles**, far from home.",
      ref:"Jeremiah 29:7",
      paraphrase:"Work for the peace and wellbeing of the city where you live, and pray to the LORD for it, because if it does well, you will do well too.",
      talk:[
        { q:"God told His people to pray for Babylon, the city that had taken them away. Why would He ask that?", listen:"God loves every city; His people are to bless the place they live; it's how we love our neighbours." },
        { q:"What would it look like for our class to ‘seek the good’ of our town?", listen:"Picking up rubbish, helping neighbours, praying for leaders, kindness at the shops or the library." }
      ],
      live:"Choose **one thing** you could do to bless our town this week. Write it in your Caravan Journal."
    },
    clue:{ prompt:"Pasargadae's stone water channels were about how many centimetres wide?", answer:25, explain:"About 25 cm wide, with a basin every 13–14 m. Waystation Clue 2 = 25, saved for Friday!" },
    next:"Wednesday — Gandom: who eats whom on the grasslands?",
    rubric:[
      { c:"Locating capitals", code:"SS-G",
        d:["Finds one capital on a map with help.","Points to Babylon."],
        a:["Locates all four capitals and the main landforms.","“Babylon is on the Euphrates; Susa is in the lowlands; Pasargadae and Persepolis are in Pars.”"],
        f:["Uses direction and distance to describe where they are.","“Persepolis is south-east of Susa, past the Zagros.”"],
        i:["I can find one capital with help.","I can find all four capitals on a map.","I can use direction and distance to describe them."] },
      { c:"What each capital was for", code:"SS-G · SS-C",
        d:["Says one fact about one capital.","“Persepolis had palaces.”"],
        a:["Describes one feature or job for each capital.","“Pasargadae was the garden capital; Persepolis was for ceremonies.”"],
        f:["Explains how a city's job shaped what was built there.","“Persepolis was for ceremonies, so it had huge halls and staircases for processions.”"],
        i:["I can say one fact about a capital.","I can describe a job or feature for each capital.","I can explain how a city's job shaped what was built."] },
      { c:"Why more than one capital?", code:"SS-C",
        d:["Gives a simple reason.","“Because it was big.”"],
        a:["Explains why a large empire might need several capitals.","“The empire was huge, so the king needed places to rule from in different regions.”"],
        f:["Compares with another country's capital decisions.","“New Zealand moved its capital to Wellington because it was more central. Persia used several cities so the king could be closer to every part.”"],
        i:["I can give a reason.","I can explain why a big empire needs several capitals.","I can compare with how New Zealand chose its capital."] }
    ],
    plan:{
      prior:"Students know the Zagros, Pars and Babylon from Week 1 and yesterday. Many will know Wellington is our capital but not why.",
      kc:["Thinking","Using language, symbols & texts","Participating & contributing"],
      sequence:[
        ["0–6","The Dispatch","Farhad's dispatch; Waystation Check; LI/SC.","Recall Monday."],
        ["6–20","Discovery","**Capital Cities Map** (4 jobs); Pasargadae's garden; turn & talk; 🇳🇿 Hononga: Wellington.","Predict each city's job; discuss."],
        ["20–38","Choose Your Path","Introduce A/B/C; roam: “What was this city *for*?”","Create."],
        ["38–45","Through the Lens","Jeremiah 29:7.","Discuss; choose a way to bless our town."],
        ["45–50","Waystation Clue & Exit","Clue 2 (answer 25).","Solve; self-assess."]
      ],
      diff:{
        supported:"Picture cards (🌳 🏛️ ⚖️ 👑) to match to cities; printed map; sentence starter “___ was the ___ capital because…”.",
        esol:"Symbols for each job; gesture for ‘capital’ (pointing to a star on a map); rehearse with a partner.",
        learning:"Chunked path cards; map labelling instead of writing; movement in the tour (Path C).",
        flying:"Distance and direction; compare with NZ's capital move."
      },
      assess:{
        lookFor:["Locates four capitals","Describes the job of each","Explains why an empire needs more than one capital"],
        evidence:["Path products","Capital Cities Map responses","Exit self-assessment"]
      },
      inquiry:["Who confused Babylon with Persia's own cities? Clarify: Babylon was conquered, not founded, by the Persians.","Did the NZ connection help students explain ‘central’?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"farhad", meta:"Loading the camels · Babylon's market",
        msg:"Shirin says the fragment moved. Again. Now I've got to take the caravan to **four capital cities**. Four! Why does one king need four capitals? **Here's the thing:** every city had a job. Work out each job, and we'll know where the king keeps his secrets.",
        notes:[["SAY","Read the dispatch. 🟡 Farhad is fictional."],["ASK","“What's a capital city? Why do countries have one?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"In what year did Cyrus take Babylon?", a:"539 BC." }, { q:"Name one thing the Cyrus Cylinder says Cyrus did.", a:"Entered Babylon without a battle; restored temples; returned deported peoples; ended forced labour." }, { q:"What does Ezra 1 say Cyrus allowed?", a:"The Jewish exiles could go home to rebuild the temple in Jerusalem." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Four cities, four jobs", title:"The Capital Cities Map", ix:"capitals",
        notes:[["CLICK","Press → (or tap a card) to light up each city. Before each, ask the class to guess its job."],["SAY","Pasargadae: “Cyrus's garden capital in Pars.” Babylon: “the great city Cyrus took in 539 BC.” Susa: “the old capital of Elam, where Darius built a palace and great hall.” Persepolis: “begun about 518 BC, the ceremonial capital.”"],["NOTE","Sources: the Met (Pasargadae), UNESCO (Susa), World Heritage Site (Persepolis), British Museum (Babylon, 539 BC). Map simplified."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"The garden capital", title:"Water in the garden at *Pasargadae*",
        bullets:["Cyrus's palace garden at **Pasargadae** had **stone water channels** about **25 cm wide**.","Every **13–14 m** the water flowed into a small **basin**. The water came from the nearby river.","Was it the first **chahar bagh** (a four-part garden)? Historians are **still debating** that."],
        visual:{ artefact:"garden" },
        notes:[["SAY","Read the points. “25 cm: hold your hands apart that much.”"],["ASK","“Why would a king in a dry land build a garden full of running water?” (To show his power and wealth; for shade and cool; beauty.)"],["NOTE","Source: the Met, ‘Ideas of Empire: The Royal Garden at Pasargadae’. The picture is an artist's plan, not a real site plan. We'll design our own chahar bagh in Week 6."]] },
      { type:"discussion", phase:"excavate", fs:"real", kicker:"Turn & Talk", q:"**Why might a huge empire need more than one capital?**", sub:"Think about distance, travel by horse and camel, and the different peoples.", talk:45,
        notes:[["TALK","45 seconds."],["LISTEN","Too far to travel; to be close to different regions; hot summers and cooler places (the king may have moved with the seasons); different jobs (ceremony, government)."],["NOTE","Keep any seasonal-move idea as a student hypothesis; we haven't sourced which seasons were spent where."]] },
      { type:"hononga", phase:"excavate", fs:"real", title:"Why is *Wellington* our capital?",
        body:"New Zealand's first capital was **Okiato (Russell)** in **1840**. In **1841** it moved to **Auckland**.\n\nBut Auckland was a long way north, and MPs from the South Island found it hard to reach. In **1865** a tribunal of **three Australians** chose **Wellington**, because it is more **central**.\n\n**Why do capitals move?** What made Wellington a better choice? (Te Ara)",
        notes:[["SAY","Read it, then show NZ on a map: Russell, Auckland, Wellington."],["ASK","“Why might the people who chose the capital come from another country?” (To be fair; nobody could say they favoured their own town.)"],["NOTE","Source: Te Ara — Capital city."]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAY","“Choose your path. Every product says what each capital was **for**.”"],["CLICK","Start the 18-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Jeremiah 29:4–7 from the class Bible. “Jeremiah wrote this letter to God's people living as exiles in Babylon.”"],["ASK","“Why would God ask His people to pray for the city that took them away?”"]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 25 (cm)."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = darics."]] }
    ]
  };

  /* ======================= WEDNESDAY · SCIENCE ======================= */
  const wed = {
    id:"w02-wed", week:2, day:"wed", subject:"science", duration:50,
    title:"Producers, Consumers & Decomposers: the Grassland", guide:"gandom",
    codes:["SC-LW","SC-P","EN"],
    coverage:"Y5 Science (2027): ecosystems — producers, consumers and decomposers; food chains; energy from the Sun.",
    li:"We are learning how energy passes along a food chain.",
    sc:["I can sort living things into producers, consumers and decomposers.","I can build a food chain with arrows that show energy moving.","I can explain why decomposers matter."],
    vocab:[
      { w:"producer", def:"a living thing that makes its own food from sunlight (plants)" },
      { w:"consumer", def:"a living thing that eats other living things" },
      { w:"decomposer", say:"dee-com-POH-zer", def:"a living thing that breaks down dead plants and animals (fungi, bacteria, some beetles)" },
      { w:"food chain", def:"a diagram showing what eats what, with arrows showing energy moving" },
      { w:"energy", def:"what living things need to move, grow and live; it starts with the Sun" },
      { w:"herbivore", def:"an animal that eats only plants" },
      { w:"predator", def:"an animal that hunts other animals" },
      { w:"prey", def:"an animal that is hunted and eaten" },
      { w:"nutrients", def:"the good things in soil that plants need to grow" },
      { w:"critically endangered", def:"at very high risk of dying out in the wild" }
    ],
    prep:{ min:5, items:["Caravan Journals","Path B: string, coat hangers or sticks, card, pencils","Optional: a mushroom or some leaf litter in a sealed clear bag to show decomposition"] },
    safety:["Don't touch or eat wild fungi; keep any leaf-litter bag sealed."],
    care:[],
    hononga:"**Our grasslands.** Canterbury's tussock grasslands have producers (tussock), consumers (grasshoppers, skinks, kārearea the NZ falcon) and decomposers (fungi, worms). The same three jobs, on the other side of the world.",
    paths:[
      { id:"A", name:"The Scribe", product:"Food Chain Report", steps:["Draw the chain **grass → gazelle → cheetah** with arrows.","Label each one **producer** or **consumer**, and explain what the **arrows** mean.","Add the **decomposers** underneath and explain why they matter."], flying:"Make a second chain with four links, using another Iranian animal." },
      { id:"B", name:"The Artisan", product:"Food Chain Mobile", steps:["Draw and cut out **the Sun, grass, gazelle, cheetah, dung beetle and fungi**.","Hang them in order on string, with **arrow cards** between them.","Colour-code: **green** producers, **red** consumers, **brown** decomposers."], flying:"Add a card that explains what happens to the energy at each step." },
      { id:"C", name:"The Herald", product:"“Energy's Journey” Role-Play", steps:["In a group, each person is one link: **Sun, grass, gazelle, cheetah, decomposer**.","Pass a **ball (the energy)** along the chain, each saying what they are and what they do.","End with the decomposer passing **nutrients** back to the grass."], flying:"What happens if the cheetah disappears? Act it out." }
    ],
    supportedShort:"pre-drawn picture cards to order; arrow cards; colour key; partner pairing.",
    lens:{
      pillar:"mohio", title:"Food at the proper time",
      look:"Look again at the food chain. **Every link** depends on the one before… and the first one depends on the **Sun**.",
      ref:"Psalm 104:14, 27–28",
      paraphrase:"God makes grass grow for the cattle and plants for people to grow. All creatures look to Him to give them their food at the proper time; when He opens His hand, they are filled with good things.",
      talk:[
        { q:"The psalm says all creatures look to God for their food. Where do you see that in the food chain?", listen:"God made the Sun and the plants; every animal depends on what He provides." },
        { q:"Decomposers clean up and recycle. What does that show about how God designed creation?", listen:"Nothing is wasted; creation is ordered and wise; everything has a job." }
      ],
      live:"At your next meal, thank God for one link in your food chain (the farmer, the plant, the rain or the Sun)."
    },
    clue:{ prompt:"In the food chain grass → gazelle → cheetah, how many living things are there?", answer:3, explain:"Grass, gazelle, cheetah = 3. Waystation Clue 3 = 3, saved for Friday!" },
    next:"Thursday — Nasrin: how do you bring water from the mountains without a pump?",
    rubric:[
      { c:"Producers, consumers, decomposers", code:"SC-LW",
        d:["Sorts some living things with help.","Says grass is a plant."],
        a:["Sorts living things correctly and gives the reason.","“Grass is a producer because it makes its own food from sunlight.”"],
        f:["Explains a tricky case.","“Fungi aren't plants: they can't make food from sunlight, so they're decomposers.”"],
        i:["I can sort some with help.","I can sort them and give a reason.","I can explain a tricky one, like fungi."] },
      { c:"Food chains & energy", code:"SC-LW · SC-P",
        d:["Puts the living things in order.","grass, gazelle, cheetah"],
        a:["Draws a chain with arrows and explains them.","“The arrow means ‘is eaten by’; energy moves from the grass to the gazelle.”"],
        f:["Explains where the energy started and what happens if a link is lost.","“The energy comes from the Sun. If the gazelles disappeared, the cheetahs would go hungry.”"],
        i:["I can put a chain in order.","I can draw arrows and explain them.","I can explain where energy starts and what happens if a link is lost."] },
      { c:"Why decomposers matter", code:"SC-LW",
        d:["Names a decomposer.","“Mushrooms.”"],
        a:["Explains what decomposers do.","“They break down dead things and dung into nutrients in the soil.”"],
        f:["Explains what would happen without decomposers.","“Dead things would pile up and the soil would run out of nutrients, so the grass wouldn't grow.”"],
        i:["I can name a decomposer.","I can explain what decomposers do.","I can explain what would happen without them."] }
    ],
    plan:{
      prior:"Students sorted living and non-living things in Week 1 and met predator and prey in the Zagros. Many think fungi are plants. ‘Energy’ in food chains is a new idea.",
      kc:["Thinking","Using language, symbols & texts","Managing self"],
      sequence:[
        ["0–6","The Dispatch","Gandom's dispatch; Waystation Check; LI/SC.","Recall."],
        ["6–20","Discovery","Meet the grassland animals; **Food Chain Builder**; **Producer, consumer or decomposer?** sorter; turn & talk.","Vote, sort, explain."],
        ["20–38","Choose Your Path","A/B/C; roam: “Which way does the energy go?”","Create."],
        ["38–45","Through the Lens","Psalm 104:14, 27–28.","Discuss; give thanks."],
        ["45–50","Waystation Clue & Exit","Clue 3 (answer 3).","Solve; self-assess."]
      ],
      diff:{
        supported:"Picture cards to order; arrow cards; colour-coded key; sentence starter “The ___ is a producer because…”.",
        esol:"Pictures for every living thing; gesture for ‘eat’; vocabulary cards; act out the chain.",
        learning:"Hands-on mobile or role-play; chunked steps; calm screen.",
        flying:"Four-link chains; predict what happens when a link disappears."
      },
      assess:{
        lookFor:["Sorts producers, consumers and decomposers correctly","Draws arrows in the right direction and explains them","Explains the role of decomposers"],
        evidence:["Path products","Sorter votes","Exit self-assessment"]
      },
      inquiry:["Who drew arrows the wrong way (‘eats’ instead of ‘is eaten by’)? Revisit with tomorrow's Waystation Check.","Who still thinks fungi are plants?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"gandom", meta:"The grassy plains east of the Zagros",
        msg:"Flat ground at last. **Grass!** Lovely grass. Don't look at me like that: I'm a **consumer**, it's my job. Everything out here eats something, and something eats it. Except the grass. The grass eats **sunshine**. Show-off.",
        notes:[["SAY","Read it in Gandom's grumpy voice. 🟡 Gandom is fictional."],["ASK","“What does Gandom mean, the grass eats sunshine?”"],["LISTEN","Plants make their own food using sunlight."]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"Name two of the four Persian capitals.", a:"Any two: Pasargadae, Babylon, Susa, Persepolis." }, { q:"What was Persepolis for?", a:"Ceremonies: it was the ceremonial capital." }, { q:"Is a mushroom a plant?", a:"No! Fungi are their own group. We'll find out more today." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"animalcards", phase:"excavate", fs:"real", kicker:"Meet the grassland", title:"Who lives on the plains?",
        animals:[
          { img:"animal-06", icon:"🦌", col:"#b88a4a", t:"Goitered gazelle", d:"A fast **herbivore** that grazes on grasses and shrubs. Once common across Iran's central plateau." },
          { img:"animal-05", icon:"🫏", col:"#9a7a5a", t:"Persian onager", status:"ENDANGERED", d:"A **wild ass** that grazes on the plains. Kavir National Park helps protect it." },
          { img:"animal-07", icon:"🐆", col:"#C9822B", t:"Asiatic cheetah", status:"CRITICALLY ENDANGERED", d:"A **predator** that hunts gazelles and other animals. Only a few survive, all in **Iran**." }
        ],
        notes:[["SAY","Read each card."],["ASK","“Which are herbivores? Which is the predator?”"],["DEEPER","“The cheetah's prey is getting harder to find, because people hunt the gazelles too. How would that affect the cheetah?”"],["NOTE","Source: WWF, Central Persian desert basins ecoregion (critically endangered Asiatic cheetah; endangered onager; goitered gazelle)."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Follow the energy", title:"The Food Chain Builder", ix:"foodchain",
        notes:[["CLICK","Press → to build the chain: Sun → grass → gazelle → cheetah → dung beetles → fungi → back to the grass."],["SAY","“The arrow means *is eaten by*. It shows which way the **energy** goes.”"],["ASK","Before each step: “What comes next?”"],["IF","Arrows drawn the wrong way (cheetah → gazelle) → “Follow the energy: does it go from the cheetah into the gazelle, or from the gazelle into the cheetah?”"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Producer · consumer · decomposer", title:"Three jobs: sort them!", ix:"pcdsort",
        notes:[["CLICK","Hold up each card; the class votes; drag it."],["ASK","At the mushroom: “Plant or not?” ⏳"],["LISTEN","Fungi are not plants: they can't make food from sunlight."]] },
      { type:"discussion", phase:"excavate", fs:"real", kicker:"Turn & Talk", q:"**What would happen if all the decomposers disappeared?**", sub:"Think about dead plants, dung, and what the grass needs to grow.", talk:45,
        notes:[["TALK","45 seconds."],["LISTEN","Dead things and dung would pile up; the soil would lose its nutrients; plants wouldn't grow well; then the animals would go hungry."]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAY","“Choose your path. Every chain starts with the Sun.”"],["CLICK","Start the 18-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Psalm 104:14 and 27–28 from the class Bible."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: grass, gazelle, cheetah = 3 living things (the Sun isn't living)."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = darics."]] }
    ]
  };

  /* ======================= THURSDAY · TECHNOLOGY ======================= */
  const thu = {
    id:"w02-thu", week:2, day:"thu", subject:"technology", duration:50,
    title:"Water from the Mountains: Build a Qanat", guide:"nasrin",
    codes:["TE-TP","TE-TK","SC-P","MA"],
    coverage:"Technology (NZC L3): technological practice (brief, build, test) and knowledge (systems, modelling). Science practices: fair testing and measuring. Maths: measurement and time.",
    li:"We are learning how a qanat carries water by gravity, and how to build and test a working model.",
    sc:["I can label the parts of a qanat (mother well, shafts, tunnel, outlet).","I can explain why the slope must be gentle.","I can build and test a sloping channel and record my results."],
    vocab:[
      { w:"qanat", say:"kah-NAHT", def:"an underground tunnel that carries water by gravity from near the mountains to a town" },
      { w:"mother well", def:"the deep first well of a qanat, dug down to the groundwater" },
      { w:"shaft", def:"a vertical hole from the surface down to the tunnel (for air, digging and repairs)" },
      { w:"groundwater", def:"water held underground in soil and rock" },
      { w:"gravity", def:"the force that pulls things down towards the ground" },
      { w:"slope", def:"how steeply something goes up or down" },
      { w:"erosion", def:"wearing away of soil or rock by water or wind" },
      { w:"fair test", def:"a test where you change only one thing and keep everything else the same" },
      { w:"variable", def:"something that can change in an experiment" }
    ],
    prep:{ min:15, items:["Per team: a half-pipe of stiff card, a length of guttering or a pool-noodle cut in half","Books or blocks to set three heights (e.g. 1, 3 and 6 books)","Jugs, measuring cups (200 ml), trays or tubs to catch the water","Stopwatches or iPads with a timer","Old towels and paper towels for spills","Printed results table (or draw one in the journal)"] },
    safety:["Wipe up spills at once: wet floors are slippery.","Water stays in the trays and away from iPads and power points.","Carry water carefully, with two hands."],
    care:[],
    hononga:"**Canterbury's water races.** Stockwater races across the Canterbury Plains carry water from the rivers by gravity, along gently sloping channels, to farms far away: a modern cousin of the qanat.",
    paths:[
      { id:"A", name:"The Scribe", product:"Test Report", steps:["Write your **question**: “How does the slope change how fast the water flows?”","Record your **results table**: three slopes, time for 200 ml, three tries each.","Write a **conclusion**: which slope would be best for a real qanat, and why?"], flying:"Work out the average time for each slope and explain why we repeat tests." },
      { id:"B", name:"The Artisan", product:"Labelled Model", steps:["Build a **model qanat** from card (or clay in a tray) with a **mother well**, **shafts**, a **tunnel** and an **outlet**.","Make sure the tunnel has a **gentle slope**.","Add **labels**, and test that water reaches the outlet."], flying:"Add a ‘water clock’ to share the water fairly between two farms. How would it work?" },
      { id:"C", name:"The Herald", product:"Explain It as Nasrin", steps:["Plan a **1-minute talk** as Nasrin, using your model or a diagram.","Explain **the parts** and **why the slope must be gentle**.","Use your **test results** as evidence."], flying:"Answer: “Why not just make the tunnel steep so the water arrives faster?”" }
    ],
    supportedShort:"a ready-drawn results table; labelled diagram to copy; partner roles (pourer, timer, recorder).",
    lens:{
      pillar:"manaaki", title:"Let justice roll like a river",
      look:"Look again at the qanat. Farmers used **water clocks** so everyone got a **fair share** of the water.",
      ref:"Amos 5:24",
      paraphrase:"Let justice roll on like a river, and doing what is right like a stream that never runs dry.",
      talk:[
        { q:"Why would God compare fairness to a river that never stops?", listen:"Fairness should keep flowing all the time, to everyone, not just sometimes." },
        { q:"What does fair sharing look like in our class?", listen:"Taking turns, sharing equipment, making sure quiet people get a say, sharing the jobs in a team." }
      ],
      live:"Today, make sure everyone in your team got a fair turn. Tomorrow, be the person who notices when someone misses out."
    },
    clue:{ prompt:"A qanat tunnel drops 1 m over 1,000 m. How many centimetres does it drop every 100 m?", answer:10, explain:"1 m = 100 cm over 1,000 m → 10 cm every 100 m. Waystation Clue 4 = 10, saved for Friday!" },
    next:"Friday — Master Hamid: signing with a picture. Cylinder seals!",
    rubric:[
      { c:"Parts of a qanat", code:"TE-TK",
        d:["Names one part.","“A tunnel.”"],
        a:["Labels the mother well, shafts, tunnel and outlet and says what each does.","“The mother well reaches the groundwater; the shafts let workers dig and breathe.”"],
        f:["Explains the qanat as a system (input → process → output).","“Input: groundwater near the mountains. Process: gravity in a gentle tunnel. Output: water for the town.”"],
        i:["I can name a part.","I can label all four parts and say what they do.","I can explain the qanat as a system."] },
      { c:"Why a gentle slope?", code:"TE-TK · SC-P",
        d:["Says water runs downhill.","“Water goes down.”"],
        a:["Explains why the slope must be gentle, not too steep or too flat.","“Too flat and the water stops; too steep and it rushes and wears the tunnel away.”"],
        f:["Uses test results as evidence.","“At 6 books the water took 2 seconds but splashed out; at 1 book it took 9 seconds and flowed smoothly.”"],
        i:["I can say water runs downhill.","I can explain why the slope must be gentle.","I can use my results as evidence."] },
      { c:"Testing fairly", code:"TE-TP · SC-P",
        d:["Tests with help.","Pours water and watches."],
        a:["Runs a fair test: changes only the slope and records times.","“We used 200 ml every time and only changed the number of books.”"],
        f:["Repeats tests, averages, and suggests an improvement.","“We did three tries and averaged them. Next time we'd use a jug with a spout.”"],
        i:["I can test with help.","I can run a fair test and record results.","I can repeat, average and improve my test."] }
    ],
    plan:{
      prior:"Students met the qanat in Week 1 (Problem → Solution; Input → Process → Output). Most haven't done a timed fair test with repeats.",
      kc:["Thinking","Managing self","Participating & contributing"],
      sequence:[
        ["0–6","The Dispatch","Nasrin's dispatch; Waystation Check; LI/SC.","Recall."],
        ["6–16","Discovery","Parts of a qanat; **Slope Tester**; the design brief; safety.","Predict, vote, explain."],
        ["16–38","Build & Test (Paths)","Teams build a channel and time 200 ml at three slopes (3 tries each); then complete their path.","Build, test, record."],
        ["38–45","Through the Lens","Amos 5:24.","Discuss fair sharing."],
        ["45–50","Waystation Clue & Exit","Clue 4 (answer 10); pack up; wipe spills.","Solve; tidy; self-assess."]
      ],
      diff:{
        supported:"Ready-drawn results table; clear team roles; a model to copy; adult help with timing.",
        esol:"Diagram with labels; gestures for ‘steep’ and ‘gentle’; numbers in the table instead of sentences.",
        learning:"Hands-on build; short, clear steps; a role that suits each learner; movement allowed.",
        flying:"Averages; design a water clock for fair shares; ‘Why not make it steep?’"
      },
      assess:{
        lookFor:["Labels the four parts","Explains why a gentle slope works best","Runs a fair test and records results"],
        evidence:["Results tables (photograph)","Models","Explain-it talks","Exit self-assessment"]
      },
      inquiry:["Which teams controlled their variables well? Use them as models next build (Week 3 windcatcher).","Did any team struggle with timing? Practise with the stopwatch next week."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"nasrin", meta:"At the mouth of a qanat · water rushing",
        msg:"Listen! Hear that? That's water that fell as snow on the mountains, travelled **kilometres underground**, and came out here, in the desert. **No pumps.** Just a tunnel and a slope. Today you build one. Get the slope wrong and you'll find out why my father calls it *the gentlest work in the world*.",
        notes:[["SAY","Read the dispatch. 🟡 Nasrin is fictional."],["ASK","“What do you think ‘the gentlest work in the world’ means?” (The slope must be gentle.)"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"What is a producer?", a:"A living thing that makes its own food from sunlight (plants)." }, { q:"Which way does the arrow go in a food chain?", a:"From the thing eaten to the thing that eats it: the way the energy goes." }, { q:"Name a decomposer.", a:"Fungi, bacteria, dung beetles, worms." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"How a qanat works", title:"Four parts of a *qanat*",
        bullets:["**Mother well:** a deep well near the mountains, dug down to the **groundwater**.","**Tunnel:** carries the water along a **gently sloping** path, pulled by **gravity**.","**Shafts:** vertical holes to the surface, for digging, air and repairs.","**Outlet:** where the water comes out for the town and fields. **Water clocks** helped give each farmer a fair share."],
        visual:{ artefact:"qanat" },
        notes:[["SAY","Read each part, pointing to the drawing."],["ASK","“Why does the tunnel need so many shafts?” (To dig it, bring the soil up, let air in and fix it later.)"],["NOTE","Source: The Persian Qanat (World Heritage). Simplified drawing."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Too steep? Too flat?", title:"The Slope Tester", ix:"slope",
        notes:[["CLICK","Press → to show: gentle → too flat → too steep → back to gentle. Or drag the slider."],["ASK","Before each: “What do you predict will happen?”"],["SAY","“A qanat needs a slope that's just right: enough for gravity to pull the water, gentle enough not to wear away the tunnel.”"]] },
      { type:"brief", phase:"excavate", fs:"real", title:"Bring water to the town",
        stakeholder:"A desert town and its farmers, 2,500 years ago.",
        need:"Water that flows **steadily all year**, from the mountains to the fields, **without pumps or electricity**.",
        specs:["Water must reach the end of the channel.","It must flow smoothly: no big splashing over the sides.","It must work using only gravity.","We test it fairly: 200 ml each time, only the slope changes."],
        notes:[["SAY","Read the brief together. “Specifications are the must-haves we can test.”"],["ASK","“Which specification is about a fair test?”"]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"A fair test", title:"Change one thing only",
        cards:[ { icon:"🔀", t:"We change", d:"The **slope**: 1 book, 3 books, 6 books.", foot:"one variable" }, { icon:"⏱️", t:"We measure", d:"The **time** for 200 ml to reach the end. **Three tries** each.", foot:"the results" }, { icon:"🔒", t:"We keep the same", d:"The **amount** of water, the **channel**, the **way we pour**, the **person timing**.", foot:"fair!" } ],
        notes:[["SAY","“A fair test changes only one thing. If we changed the slope *and* the amount of water, we wouldn't know which one made the difference.”"],["ASK","“Why do we do three tries?” (One try could be a mistake; three is more reliable.)"]] },
      { type:"safety", phase:"excavate", fs:"real", title:"Water rules",
        items:[ { icon:"🧽", t:"Wipe spills at once", d:"Wet floors are slippery. Towels are ready." }, { icon:"📱", t:"Water away from iPads", d:"Water stays in the trays, far from iPads and power points." }, { icon:"🫗", t:"Two hands", d:"Carry jugs carefully with two hands. Walk, don't run." } ],
        notes:[["SAFETY","Read each rule. Set up towels and trays before handing out water."]] },
      { type:"paths", phase:"paths", fs:null, minutes:22,
        notes:[["SAY","“Every team builds and tests first (12 minutes), then finishes their path.”"],["CLICK","Start the 22-minute timer."],["ASK","Roaming: “What are you changing? What stays the same?”"],["SAFETY","Spills wiped at once."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Amos 5:24 from the class Bible."],["ASK","“What does fair sharing look like in our class?”"]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 1 m = 100 cm; 1,000 m ÷ 100 m = 10 sections; 100 cm ÷ 10 = 10 cm."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess, then pack up."],["CLICK","C = darics: award teams who tidied well."]] }
    ]
  };

  /* ======================= FRIDAY · ART ======================= */
  const fri = {
    id:"w02-fri", week:2, day:"fri", subject:"art", duration:50,
    title:"Cylinder Seals & Cuneiform", guide:"hamid",
    codes:["VA-PK","VA-DI","VA-UC","MA"],
    coverage:"Visual Arts (NZC 2007, Level 3): practical knowledge (relief printing, carving in reverse), developing ideas (a personal symbol), understanding art in context (Persian seals and cuneiform). Maths: Old Persian number signs.",
    li:"We are learning to make a cylinder seal and print a rolled impression.",
    sc:["I can explain what cylinder seals were used for.","I can carve or draw a design in reverse.","I can roll a clean, repeating impression."],
    vocab:[
      { w:"cylinder seal", def:"a small carved cylinder rolled across wet clay to leave a picture: a signature" },
      { w:"impression", def:"the mark or picture left when something is pressed into a surface" },
      { w:"reverse", def:"the opposite way round, like a mirror image" },
      { w:"mirror image", def:"a picture flipped as if seen in a mirror" },
      { w:"archive", say:"AR-kive", def:"a collection of old documents kept safely" },
      { w:"motif", say:"moh-TEEF", def:"a picture or shape that repeats in a design" },
      { w:"cuneiform", say:"KYOO-nee-uh-form", def:"wedge-shaped writing pressed into clay" },
      { w:"symbol", def:"a picture that stands for an idea or a person" }
    ],
    prep:{ min:10, items:["Cardboard tubes (or thick foam sheet wrapped round a tube), or air-dry clay","Pencils and blunt carving tools (lolly sticks, paperclips)","Printing ink or paint and rollers, or a tray of play-dough to roll into","Paper strips for prints","Mirrors (optional) for checking reversed designs"] },
    safety:["Carving tools point away from your hands and body.","Wash hands after paint or ink."],
    care:[],
    hononga:"**Signatures in Aotearoa.** A signature, a stamp, a school logo or a family name on a whakapapa chart all say “this belongs to me / us.” What symbol would say who *you* are?",
    paths:[
      { id:"A", name:"The Scribe", product:"Seal Design Journal", steps:["Design **your own symbol**: an animal, plant or object that says something about you.","Draw it **the right way**, then **in reverse** (use a mirror to check).","Write **why** you chose it and what a Persian official used seals for."], flying:"Design a seal for one of the kings we've met. What would Cyrus put on his seal? Explain." },
      { id:"B", name:"The Artisan", product:"Rolled Seal Print", steps:["Draw your design **in reverse** on foam wrapped round a tube (or carve it in clay).","Press the lines in **deeply**, then roll ink or paint over it.","Roll it along a paper strip (or into play-dough) for a **repeating band**."], flying:"Add a border pattern above and below, like the bands on a real seal." },
      { id:"C", name:"The Herald", product:"“Signed and Sealed” Role-Play", steps:["You are an **official at Persepolis** sealing documents (a ration list, a travel pass).","Explain to a ‘visitor’ what your **seal** is and **why** you use it.","Show how you **roll** it, and why it must be carved backwards."], flying:"What if someone stole your seal? Act out what the officials would do." }
    ],
    supportedShort:"simple design templates (a star, a camel, a tree); pre-reversed tracing; a mirror; partner help with rolling.",
    lens:{
      pillar:"manaaki", title:"Sealed as God's own",
      look:"Look again at the seal. It says **“this is mine; I stand behind it.”**",
      ref:"Haggai 2:23; 2 Corinthians 1:21–22",
      paraphrase:"God told Zerubbabel, “I will make you like My signet ring, because I have chosen you.” Paul writes that God has put His seal of ownership on His people and given them His Spirit.",
      talk:[
        { q:"A seal says “this belongs to me.” What does it mean that God puts His seal on His people?", listen:"We belong to Him; He chose us; He keeps us safe; we are precious to Him." },
        { q:"If you belong to God, how might that change the way you treat others this week?", listen:"Kindness, honesty, helping, using our gifts for Him." }
      ],
      live:"Draw your seal design in your Caravan Journal and write underneath: **“I belong to God.”**"
    },
    clue:{ prompt:"Friday's clue is the Seal Fragment: add this week's four Waystation Clues and write the total in Old Persian number signs.", answer:83, explain:"45 + 25 + 3 + 10 = 83 → four 20-signs, one 2-sign and one 1-sign." },
    next:"Next week — Stage III: The Royal Road. A courier, a carved cliff and 111 stations.",
    rubric:[
      { c:"Seals in context", code:"VA-UC",
        d:["Says a seal makes a picture.","“You roll it.”"],
        a:["Explains what seals were used for.","“Officials rolled their seal across clay to sign a document, like a signature.”"],
        f:["Uses evidence from the Persepolis archive.","“Thousands of tablets have seal impressions but no writing: the seal itself was the message.”"],
        i:["I can say what a seal does.","I can explain what seals were used for.","I can use evidence from the Persepolis archive."] },
      { c:"Designing in reverse", code:"VA-PK · VA-DI",
        d:["Draws a design.","A camel facing right."],
        a:["Draws or carves the design in reverse so the print comes out the right way.","Letters and the animal face the right way in the print."],
        f:["Plans a design that repeats smoothly around the cylinder.","The pattern joins up where the roll starts again."],
        i:["I can draw a design.","I can carve it in reverse so the print is the right way round.","I can plan a design that repeats smoothly."] },
      { c:"Printing a clean impression", code:"VA-PK",
        d:["Prints with help.","A smudgy print."],
        a:["Rolls a clear, even impression.","Lines are clear along the strip."],
        f:["Evaluates and improves the print.","“The first print was too inky, so I used less paint and pressed more evenly.”"],
        i:["I can print with help.","I can roll a clear, even print.","I can check and improve my print."] }
    ],
    plan:{
      prior:"Students made rosettes (radial symmetry) last week. They've seen cuneiform on the Cyrus Cylinder this week. Mirror images are often tricky.",
      kc:["Thinking","Managing self","Using language, symbols & texts"],
      sequence:[
        ["0–6","The Dispatch","Hamid's dispatch; Waystation Check; LI/SC.","Recall."],
        ["6–16","Discovery","Cylinder seals; **Roll the Seal** (and mirror writing); cuneiform.","Predict; test mirror writing."],
        ["16–36","Choose Your Path","A/B/C (most will make a seal first).","Design, carve, print."],
        ["36–41","Through the Lens","Haggai 2:23; 2 Cor 1:21–22.","Discuss belonging."],
        ["41–50","Seal Fragment II & the Shadow's Note","45 + 25 + 3 + 10 = 83 → four 20s, a 2 and a 1.","Solve the lock; respond to the note."]
      ],
      diff:{
        supported:"Templates; pre-reversed tracings; mirrors; partner help.",
        esol:"Demonstrate every step; picture instructions; key words on cards.",
        learning:"Hands-on; short steps; choose clay, foam or play-dough.",
        flying:"Seamless repeat; design a king's seal with a reason."
      },
      assess:{
        lookFor:["Explains the purpose of seals","Designs in reverse","Rolls a clean print"],
        evidence:["Prints (photograph)","Design journals","Seal Fragment working (83 = 20+20+20+20+2+1)"]
      },
      inquiry:["Who found mirror images hard? Offer a mirror and tracing paper next time.","How did students answer the Shadow's question about kings?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"hamid", meta:"An office in the treasury · rows of clay tablets",
        msg:"Ah, you found the scribes' office. Look: **thousands** of clay tablets, and many have no writing at all. Only pictures, rolled into the clay. Every official had a **seal**: a little stone cylinder that was his signature. Today you carve your own. But careful… **the seal is a liar.** It shows everything **backwards**.",
        notes:[["SAY","Read the dispatch. 🟡 Master Hamid is fictional."],["ASK","“Why would a seal show everything backwards?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"Name the four parts of a qanat.", a:"Mother well, shafts, tunnel, outlet." }, { q:"Why must a qanat's slope be gentle?", a:"Too flat: the water stops. Too steep: it rushes and erodes the tunnel." }, { q:"What is a fair test?", a:"Change only one thing; keep everything else the same." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Signed with a picture", title:"Cylinder seals",
        bullets:["A **cylinder seal** is a small stone cylinder carved with a picture.","Officials **rolled** it across wet clay to **sign** a document.","At Persepolis, archaeologists found **5,000–6,000 tablets** with **seal impressions but no writing**: the seal was the message."],
        visual:{ artefact:"cylseal" },
        notes:[["SAY","Read the points."],["ASK","“Why might a picture be better than writing for some people?” (Not everyone could read; a picture is quick to recognise.)"],["NOTE","Source: University of Chicago (ISAC), Persepolis Fortification Archive. The picture is an artwork, not a museum object."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Roll it!", title:"Roll the Seal", ix:"rollseal",
        notes:[["CLICK","Press →: the seal → roll it → look closely (it's backwards!) → the archive."],["ASK","At step 3: “Which way does the camel face on the seal? And on the clay?”"],["DEEPER","Mirror writing: write your name on paper, hold it up to a window from the back. That's how you'd carve it on a seal!"]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Wedge writing", title:"*Cuneiform*: writing with wedges",
        cards:[ { icon:"🪵", t:"A reed stylus", d:"Scribes pressed the end of a **cut reed** into soft clay.", foot:"the tool" }, { icon:"🔺", t:"Wedges", d:"Each press made a **wedge** shape. Groups of wedges made **signs**.", foot:"cuneiform = wedge-shaped" }, { icon:"🧱", t:"Clay that lasts", d:"Baked or dried, the clay survived for **2,500 years**: that's how we can read the Cyrus Cylinder.", foot:"a primary source" } ],
        notes:[["SAY","“The Cyrus Cylinder is written in cuneiform. Our Old Persian number signs are wedges too!”"],["ASK","“Why do clay tablets last longer than paper?”"]] },
      { type:"paths", phase:"paths", fs:null, minutes:20,
        notes:[["SAY","“Everyone designs a seal symbol first. Then choose your path.”"],["CLICK","Start the 20-minute timer."],["SAFETY","Carving tools point away from hands."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Haggai 2:23 and 2 Corinthians 1:21–22."],["ASK","“What does it mean that God puts His seal on His people?”"]] },
      { type:"folioseal", phase:"decode", fs:"story",
        notes:[["SAY","“Four Waystation Clues this week. Add them up and press the total into the clay.”"],["CLICK","Tap each tile. 45 + 25 + 3 + 10 = 83."],["SAY","“83: how many 20-signs fit? Four (80). Then 3 more: one 2-sign and one 1-sign. Biggest first!”"],["CLICK","Press 20, 20, 20, 20, 2, 1, then ‘Open the lock’."]] },
      { type:"intercept", phase:"decode", fs:"story",
        msg:"Kings say they free people. Do they really?",
        ask:"Cyrus's Cylinder says he set people free. Was he really kind, or did he just want people to like him? Can it be both? And who do you think opened the gates?",
        notes:[["SAY","Read it in the Shadow's voice. 🟡 The Shadow Courier is fictional."],["ASK","Take a few answers. Link back to Monday: the Cylinder was written for Cyrus; Isaiah says the LORD was at work."],["LISTEN","Kings want to look good; people can do good things for mixed reasons; God can use them anyway."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess. Celebrate Fragment II!"],["CLICK","C = darics. Keep seals and prints for the Week 10 Exhibition."]] }
    ]
  };

  BM.WEEKS[2] = {
    n:2,
    story:"Babylon, 539 BC. The great city's gates open without a battle, and a new king rides in: Cyrus. The historians read the Cyrus Cylinder and compare it with Ezra 1; the geographers visit four capital cities and find out what each was for; the scientists follow the Sun's energy along a grassland food chain; the engineers build and test a qanat; and the artists carve cylinder seals that sign in pictures. On Friday, 45 + 25 + 3 + 10 = 83 is pressed into the clay to free Fragment II.",
    hononga:"Exiles coming home, and families who came to Aotearoa (Mon) · why Wellington became our capital in 1865 (Tue) · Canterbury's tussock grasslands (Wed) · Canterbury's stockwater races (Thu) · signatures, logos and family symbols (Fri). 🕊️ Speak of Cyrus with respect: he is a hero to many Iranians.",
    seal:{
      answer:83,
      instruction:"Add the four **Waystation Clues**. Then write the total in **Old Persian number signs**, biggest first, and press them into the clay. *(20 = two corner wedges · 2 = two upright wedges · 1 = one upright wedge.)*",
      reveal:"🟡 **Fragment II found!** It slides out of the clay cylinder and flies to its place on the Seal. Two down, eight to go. Next week: *The Royal Road* — a race along 2,500 km of road."
    },
    lessons:[mon, tue, wed, thu, fri]
  };
})(window.BM);
