/* ==========================================================
   WEEK 7 — STAGE VII · THE MARKETPLACE OF THE WORLD
   A great bazaar. A thief among the camels!
   Notes: [KEY, text]  KEY = SAY ASK LISTEN IF CLICK TALK DEEPER PACE SAFETY WAIT NOTE CARE SIDE
   ========================================================== */
(function(BM){
  "use strict";

  /* ======================= MONDAY · HISTORY ======================= */
  const mon = {
    id:"w07-mon", week:7, day:"mon", subject:"history", duration:50,
    title:"Everyday Lives: the Persepolis Tablets", guide:"shirin",
    codes:["SS-H","SS-P","SS-E","MA","RE"],
    coverage:"Y5–6 History practices (2027 Social Sciences): primary sources about ordinary people; Y6 Economic Activity: workers, payment and rations. Maths: multiplication.",
    li:"We are learning to use clay tablets to find out about ordinary people's lives.",
    sc:["I can explain what the Persepolis Fortification tablets are.","I can describe what they record.","I can explain why ordinary lives matter to historians."],
    vocab:[
      { w:"tablet", def:"a flat piece of clay with writing pressed into it" },
      { w:"ration", say:"RASH-un", def:"a fixed amount of food given to each person" },
      { w:"archive", say:"AR-kive", def:"a collection of records kept together" },
      { w:"Elamite", say:"EE-luh-mite", def:"the language of Elam, used for most of the Persepolis tablets" },
      { w:"worker", def:"a person who does a job and is paid (here, often in food)" },
      { w:"official", def:"a person with a job in the government" },
      { w:"ordinary", def:"everyday; not famous or royal" }
    ],
    prep:{ min:10, items:["Caravan Journals","Path B: air-dry clay or play-dough, lolly sticks for wedges","Path C: simple props (bowls, bags of ‘grain’ made of rice)"] },
    safety:[],
    care:["Students' families have many kinds of work, paid and unpaid. Value all of it equally."],
    hononga:"**Ordinary lives in Aotearoa.** Museums like Te Papa and the Ashburton Museum keep everyday things (school reports, shop receipts, letters) because ordinary people's lives are history too.",
    paths:[
      { id:"A", name:"The Scribe", product:"A Day in the Life Diary", steps:["You are an **ordinary worker** at Persepolis (stonemason, weaver, messenger).","Write a **diary entry**: your work, your **ration**, the official with the seal.","Include **two facts** from the real tablets."], flying:"Why are records like these sometimes more useful to historians than a king's inscription?" },
      { id:"B", name:"The Artisan", product:"Clay Ration Tablet", steps:["Make a **clay tablet**.","Press a **ration record**: who, what, how much (use Old Persian number signs!).","Roll or stamp your **seal** to approve it."], flying:"Make a second tablet with a mistake for a partner to find, like a real auditor." },
      { id:"C", name:"The Herald", product:"Ration-Day Role-Play", steps:["Set up a **ration store**: an official, a scribe and workers.","Hand out rations, **record** them and **seal** them.","Show the class how the system worked."], flying:"Add a problem: someone claims they were missed. How do the records help?" }
    ],
    supportedShort:"a ration-record template; number cards; multiplication grid; partner pairing.",
    lens:{
      pillar:"aroha", title:"Work done for the Lord",
      look:"Look again at the tablets: thousands of ordinary workers, each one **recorded**, each one **seen**.",
      ref:"Colossians 3:23–24; Proverbs 31:31",
      paraphrase:"Whatever you do, work at it with all your heart, as working for the Lord, not for human masters. Honour her for all that her hands have done.",
      talk:[
        { q:"Kings got the big inscriptions, but the tablets remember ordinary workers. How does God see ordinary work?", listen:"Every job matters to Him; He sees all our work; no one is too small." },
        { q:"What ‘ordinary’ work could you do this week as if for the Lord?", listen:"Chores, homework, helping a sibling, tidying the classroom." }
      ],
      live:"Thank someone this week for their **ordinary work** (a cleaner, a bus driver, a parent)."
    },
    clue:{ prompt:"The tablets date to around 500 BC. How many hundreds is 500?", answer:5, explain:"500 = 5 hundreds. Waystation Clue 1 = 5, saved for Friday!" },
    next:"Tuesday — Farhad: welcome to the bazaar!",
    rubric:[
      { c:"What the tablets are", code:"SS-P",
        d:["Says they're old clay tablets.","“Clay writing.”"],
        a:["Describes when, where and what language.","“Found at Persepolis in 1933, from around 500 BC, mostly in Elamite.”"],
        f:["Explains why such an archive survived.","“Clay lasts; they were stored together in the fortification wall.”"],
        i:["I can say they're clay tablets.","I can say when, where and in what language.","I can explain why they survived."] },
      { c:"What they record", code:"SS-H · SS-E",
        d:["Says they record food.","“Food lists.”"],
        a:["Explains they record food stored and handed out to workers and officials.","“They show rations given to workers, from the lowliest to the king's family.”"],
        f:["Uses a record to work something out.","“12 workers × 3 measures = 36 measures of grain.”"],
        i:["I can say they record food.","I can explain who got rations.","I can use a record to work something out."] },
      { c:"Why ordinary lives matter", code:"SS-H",
        d:["Says they're interesting.","“It's cool.”"],
        a:["Explains what we learn about ordinary people.","“We learn what workers ate and how they were paid.”"],
        f:["Compares with royal sources.","“Kings' inscriptions show what kings wanted us to think; tablets show everyday life.”"],
        i:["I can say they're interesting.","I can explain what we learn about ordinary people.","I can compare them with royal sources."] }
    ],
    plan:{
      prior:"Students saw seal impressions on Persepolis tablets in Week 2 and the Cyrus Cylinder (a royal source). Most think history is only about kings.",
      kc:["Thinking","Using language, symbols & texts","Relating to others"],
      sequence:[
        ["0–6","The Dispatch","Shirin's dispatch; Waystation Check; LI/SC.","Recall."],
        ["6–20","Discovery","The Fortification Archive; **Ration Tablet Reader**; turn & talk.","Read; calculate."],
        ["20–38","Choose Your Path","A/B/C.","Create."],
        ["38–45","Through the Lens","Colossians 3:23–24; Proverbs 31:31.","Discuss."],
        ["45–50","Waystation Clue & Exit","Clue 1 (answer 5).","Solve; self-assess."]
      ],
      diff:{
        supported:"Templates; multiplication grid; partner.",
        esol:"Act out handing out rations; pictures; key words.",
        learning:"Clay option; role-play; chunked steps.",
        flying:"Compare sources; auditor challenge."
      },
      assess:{
        lookFor:["Describes the tablets","Explains what they record","Explains why ordinary lives matter"],
        evidence:["Path products","Tablet Reader calculations","Exit self-assessment"]
      },
      inquiry:["Who multiplied confidently? Use ration problems in maths warm-ups.","Link to the Big Project: History museum cases could feature a tablet."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"shirin", meta:"The treasury storerooms · clay dust everywhere",
        msg:"Caravan, look: **thousands** of clay tablets, stacked in the storerooms. No kings' boasting here. Just **who got how much grain**, who carried messages, who worked in the quarry. **Ordinary people.** And somewhere in these records is a clue about a **thief**…",
        notes:[["SAY","Read the dispatch. 🟡 Shirin is fictional; the tablets are real."],["ASK","“Why might records of ordinary people be useful to historians?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"What does chahar bagh mean?", a:"Four gardens." }, { q:"How many lines of symmetry in a chahar bagh?", a:"Two." }, { q:"Which Big Project did you choose?", a:"Share with a partner!" } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"A primary source", title:"The Persepolis *Fortification* tablets",
        bullets:["Found at Persepolis in **1933**: tens of thousands of tablets and fragments.","About **15,000–18,000** are written in **Elamite**, from **around 500 BC**.","They record food being **stored and handed out**, to everyone from **the lowliest workers to the king's own family**."],
        visual:{ artefact:"tablet" },
        notes:[["SAY","Read the points."],["NOTE","Source: University of Chicago (ISAC), Persepolis Fortification Archive. About three-quarters of the Elamite records list payments including rations to workers (Encyclopaedia Iranica)."]] },
      { type:"interactive", phase:"excavate", fs:"story", kicker:"Who got what?", title:"Ration Tablets", ix:"rationreader",
        notes:[["CLICK","Read each tablet, let teams work out the answer, then tap (or press →) to flip."],["SAY","“These are made-up tablets in the style of the real ones. The real ones list grain, flour, wine and more.”"],["NOTE","Historians have studied the women workers (called pašap) in these records (see Encyclopaedia Iranica's bibliography)."]] },
      { type:"discussion", phase:"excavate", fs:"real", kicker:"Turn & Talk", q:"The Cyrus Cylinder was written **for a king**. These tablets were written **about ordinary workers**. **Which tells us more about everyday life? Why?**", sub:"Think about who made each source and why.", talk:45,
        notes:[["TALK","45 seconds."],["LISTEN","The tablets: they're everyday records, not boasting; but the Cylinder tells us about kings' policies."]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAY","“Choose your path. Every product shows an ordinary person's life.”"],["CLICK","Start the 18-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Colossians 3:23–24 and Proverbs 31:31."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 5."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = darics."]] }
    ]
  };

  /* ======================= TUESDAY · GEOGRAPHY ======================= */
  const tue = {
    id:"w07-tue", week:7, day:"tue", subject:"geography", duration:50,
    title:"Bazaars & Caravanserais: Markets & Trade", guide:"farhad",
    codes:["SS-G","SS-E","SS-P","RE"],
    coverage:"Y6 Economic Activity: specialisation and exchange. Y6 Geography: how markets and trade routes grow cities.",
    li:"We are learning how markets and trade routes grow cities.",
    sc:["I can describe a bazaar and a caravanserai.","I can explain specialisation and exchange.","I can give a local example of specialisation and trade."],
    vocab:[
      { w:"bazaar", say:"buh-ZAR", def:"a market of shops and stalls, often covered (a Persian word!)" },
      { w:"caravanserai", say:"kar-uh-VAN-suh-rye", def:"a roadside inn where caravans of traders and animals could rest" },
      { w:"caravan", def:"a group of travellers and animals journeying together (also a Persian word)" },
      { w:"specialisation", def:"doing one job and becoming very good at it" },
      { w:"exchange", def:"swapping or trading goods and services" },
      { w:"trade route", def:"a road traders use to carry goods" },
      { w:"Silk Road", def:"the network of trade routes joining China, Persia and the Mediterranean" }
    ],
    prep:{ min:5, items:["Caravan Journals","Optional: a few items for a mini trading game (stickers, beads, paper ‘bread’)"] },
    safety:[],
    care:[],
    hononga:"**Markets in Hakatere.** At a **farmers' market** or the **saleyards**, people specialise: one grows vegetables, one raises sheep, one bakes bread. They swap their goods for money, then buy what others make. Who specialises in what in our town?",
    paths:[
      { id:"A", name:"The Scribe", product:"Specialisation Explainer", steps:["Explain **specialisation** and **exchange** in your own words.","Use the **potter, weaver and farmer** example.","Add a **local** example from Ashburton."], flying:"Is specialisation always good? What happens if the only potter gets sick?" },
      { id:"B", name:"The Artisan", product:"Bazaar Map", steps:["Draw a map of a **bazaar** with streets for different trades (spices, carpets, metalwork).","Add a **caravanserai** at the edge of town with a courtyard and a well.","Add a **key**."], flying:"Explain why shops selling the same thing often sit together." },
      { id:"C", name:"The Herald", product:"Merchant's Pitch", steps:["You are a **merchant** in the Tabriz bazaar.","Plan a **1-minute pitch**: what you make, why it's good, a fair price.","Use **honest scales** (Proverbs 11:1) in your pitch!"], flying:"Explain how the caravanserais helped you get your goods to the bazaar." }
    ],
    supportedShort:"picture cards of trades; sentence starters; a bazaar map template.",
    lens:{
      pillar:"panga", title:"Honest scales",
      look:"Look again at the bazaar: trade works only if people are **honest**.",
      ref:"Proverbs 11:1",
      paraphrase:"The LORD detests dishonest scales, but accurate weights find favour with Him.",
      talk:[
        { q:"Why does God care about honest weights at the market?", listen:"Cheating hurts people; God loves justice; honesty builds trust." },
        { q:"What would ‘honest scales’ look like in our class or our town?", listen:"Fair games, telling the truth, fair prices, not copying, returning change." }
      ],
      live:"Choose one way to be **completely honest** this week, even when no one is checking."
    },
    clue:{ prompt:"How many caravanserais are in the Persian Caravanserai World Heritage listing?", answer:54, explain:"54 caravanserais. Waystation Clue 2 = 54, saved for Friday!" },
    next:"Wednesday — Gandom: finally, a lesson about camels!",
    rubric:[
      { c:"Bazaars & caravanserais", code:"SS-G",
        d:["Says a bazaar is a market.","“A market.”"],
        a:["Describes both and their purpose.","“A bazaar is a covered market; a caravanserai is a roadside inn for traders.”"],
        f:["Explains how they grew cities.","“Caravanserais kept traders safe on the road, so more goods reached bazaars like Tabriz.”"],
        i:["I can say a bazaar is a market.","I can describe both and their purpose.","I can explain how they grew cities."] },
      { c:"Specialisation & exchange", code:"SS-E",
        d:["Says people swap things.","“They trade.”"],
        a:["Explains both ideas with an example.","“The potter makes lots of bowls and swaps them for bread and cloth.”"],
        f:["Explains benefits and risks.","“Everyone gets more, but everyone depends on each other.”"],
        i:["I can say people trade.","I can explain both with an example.","I can explain benefits and risks."] },
      { c:"Local example", code:"SS-E · SS-G",
        d:["Names a local shop.","“The supermarket.”"],
        a:["Gives a local example of specialisation.","“Farmers grow, the baker bakes, they meet at the farmers' market.”"],
        f:["Links local trade to wider routes.","“Our wool is shipped overseas, like goods on the Silk Road.”"],
        i:["I can name a local shop.","I can give a local example of specialisation.","I can link local trade to wider routes."] }
    ],
    plan:{
      prior:"Students know the Royal Road stations (Week 3) and road towns. Specialisation is a new idea; ‘trade’ is familiar.",
      kc:["Thinking","Participating & contributing","Relating to others"],
      sequence:[
        ["0–6","The Dispatch","Farhad's dispatch; Waystation Check; LI/SC.","Recall."],
        ["6–20","Discovery","Caravanserais and the Tabriz bazaar; **Bazaar Trader**; 🇳🇿 Hononga; turn & talk.","Predict; trade."],
        ["20–38","Choose Your Path","A/B/C.","Create."],
        ["38–45","Through the Lens","Proverbs 11:1.","Discuss."],
        ["45–50","Waystation Clue & Exit","Clue 2 (answer 54).","Solve; self-assess."]
      ],
      diff:{
        supported:"Picture cards; templates; sentence starters.",
        esol:"Act out trading; Persian loanwords (bazaar, caravan) as a hook.",
        learning:"Trading game; chunked steps.",
        flying:"Risks of specialisation; global trade."
      },
      assess:{
        lookFor:["Describes bazaars and caravanserais","Explains specialisation and exchange","Gives a local example"],
        evidence:["Path products","Discussion","Exit self-assessment"]
      },
      inquiry:["Did students link this to Week 3's road towns?","City Planner Big Projects should include a bazaar."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"farhad", meta:"The great bazaar of Tabriz · spices in the air",
        msg:"Welcome to the **bazaar**! Carpets this way, copper that way, spices everywhere. Every trader does **one thing** brilliantly, and they all swap. Our caravan slept last night in a **caravanserai**: a fortress-inn with a well, a courtyard and a hundred camels. But keep your bags close. **There's a thief about.**",
        notes:[["SAY","Read the dispatch. 🟡 Farhad is fictional; the Tabriz bazaar is real (though much younger than ancient Persia)."],["NOTE","Persian words in English: bazaar, caravan. Point them out!"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"What language are most Persepolis tablets in?", a:"Elamite." }, { q:"What do the tablets record?", a:"Food stored and handed out: rations." }, { q:"12 workers × 3 measures = ?", a:"36 measures." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"World Heritage", title:"Inns and markets on the road",
        cards:[ { big:"54", t:"Caravanserais", d:"The **Persian Caravanserai** World Heritage listing (2023) includes **54** roadside inns along trade and pilgrimage routes, many with **water storage**.", foot:"rest & safety" }, { icon:"🛍️", t:"Tabriz Bazaar", d:"“One of the most important **commercial centres** on the **Silk Road**” (UNESCO).", foot:"trade" }, { icon:"🔄", t:"Specialise & swap", d:"Traders each did **one job** well, then **exchanged** goods in the bazaar.", foot:"economics" } ],
        notes:[["SAY","Read each card."],["NOTE","Sources: World Heritage Site (Persian Caravanserai); UNESCO Silk Roads (Tabriz Historic Bazaar). Both listings are of later buildings, not the Achaemenid period."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Specialise · exchange", title:"The Bazaar Trader", ix:"bazaartrader",
        notes:[["CLICK","Press →: everyone makes everything → specialise → trade at the bazaar → dishonest scales!"],["ASK","“Who is better off after trading?” (Everyone!)"]] },
      { type:"hononga", phase:"excavate", fs:"real", title:"Markets in *Hakatere*",
        body:"At a **farmers' market** or the **saleyards**, people **specialise**: one grows vegetables, one raises sheep, one bakes bread.\n\nThey **exchange** their goods for money, then buy what others make.\n\n**Who specialises in what in our town? What do we sell to the rest of the world?**",
        notes:[["ASK","“What does our district sell to the world?” (Wool, meat, milk, grain, seeds.)"]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAY","“Choose your path. Every product explains specialisation and exchange.”"],["CLICK","Start the 18-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Proverbs 11:1."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 54."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = darics."]] }
    ]
  };

  /* ======================= WEDNESDAY · SCIENCE ======================= */
  const wed = {
    id:"w07-wed", week:7, day:"wed", subject:"science", duration:50,
    title:"Working Animals: Camels, Horses & Care", guide:"gandom",
    codes:["SC-LW","SC-P","RE"],
    coverage:"Y5 Science (2027): adaptation (body features suited to an environment); animal welfare and care.",
    li:"We are learning how camels are adapted for desert travel, and why animals deserve good care.",
    sc:["I can describe three camel adaptations.","I can compare Bactrian and dromedary camels.","I can explain what good care for a working animal looks like."],
    vocab:[
      { w:"Bactrian camel", say:"BAK-tree-un", def:"a camel with two humps, from the cold deserts of Central Asia" },
      { w:"dromedary", say:"DROM-uh-dair-ee", def:"a camel with one hump, from hot deserts" },
      { w:"hump", def:"a store of fat on a camel's back, used for energy" },
      { w:"adaptation", def:"a feature that helps a living thing survive where it lives" },
      { w:"working animal", def:"an animal that helps people do work, like carrying loads" },
      { w:"welfare", def:"how well an animal is cared for: food, water, shelter, health and kindness" },
      { w:"caravan", def:"a group of travellers and animals journeying together" }
    ],
    prep:{ min:5, items:["Caravan Journals","Path B: modelling clay or card, pipe cleaners","Optional: pictures of local working animals (sheepdogs, horses)"] },
    safety:[],
    care:["Some students may have lost a pet. Keep the welfare discussion positive."],
    hononga:"**Working animals in Hakatere.** Our farms depend on **sheepdogs** and once depended on **draught horses**. A good farmer makes sure working dogs have food, water, shelter, rest and kindness.",
    paths:[
      { id:"A", name:"The Scribe", product:"Camel Fact File", steps:["Draw a camel and label **at least four adaptations**.","Explain **how** each one helps in the desert.","Compare **Bactrian** and **dromedary** camels."], flying:"Explain why a camel's hump is NOT a water tank, and what it really does." },
      { id:"B", name:"The Artisan", product:"Labelled Camel Model", steps:["Model a **Bactrian camel** in clay or card.","Add **labels** for the humps, eyelashes, nostrils, feet and coat.","Make a **care card**: what does your camel need each day?"], flying:"Make a dromedary too, and show the difference." },
      { id:"C", name:"The Herald", product:"Gandom's Complaints Department", steps:["You are **Gandom**, complaining (funnily!) about bad camel care.","Explain **three things** every camel needs.","End with **one thing a kind caravan master does**."], flying:"Link your talk to Proverbs 12:10." }
    ],
    supportedShort:"a camel outline to label; adaptation word cards; partner pairing.",
    lens:{
      pillar:"aroha", title:"The righteous care for their animals",
      look:"Look again at Gandom: strong, clever… and **needing care**.",
      ref:"Proverbs 12:10; Genesis 24:14–20",
      paraphrase:"The righteous care for the needs of their animals. Rebekah said, “I'll draw water for your camels too,” and she ran back and forth until they had all finished drinking.",
      talk:[
        { q:"Rebekah watered ten thirsty camels. What does that show about her character?", listen:"Kindness, hard work, care for animals, generosity to a stranger." },
        { q:"How can we care well for animals at home, at school or on the farm?", listen:"Food, water, shelter, vet care, gentleness, exercise." }
      ],
      live:"Do one kind thing for an animal this week (feed a pet, fill a bird bath, thank a farmer)."
    },
    clue:{ prompt:"How many humps does a Bactrian camel have?", answer:2, explain:"Two humps. Waystation Clue 3 = 2, saved for Friday!" },
    next:"Thursday — Nasrin: crack the Shadow's secret code!",
    rubric:[
      { c:"Camel adaptations", code:"SC-LW",
        d:["Names one adaptation.","“Humps.”"],
        a:["Describes three adaptations and how they help.","“Long eyelashes keep out sand; wide feet stop it sinking; the hump stores fat.”"],
        f:["Corrects a common mistake.","“The hump stores fat, not water: the camel uses it for energy.”"],
        i:["I can name one adaptation.","I can describe three and how they help.","I can correct a common mistake."] },
      { c:"Bactrian vs dromedary", code:"SC-LW",
        d:["Says there are different camels.","“Some have one hump.”"],
        a:["Compares the two.","“Bactrians have two humps and a thick winter coat; dromedaries have one hump.”"],
        f:["Links differences to habitat.","“Bactrians live in cold deserts, so the shaggy winter coat helps.”"],
        i:["I can say there are different camels.","I can compare the two.","I can link the differences to habitat."] },
      { c:"Animal care", code:"SC-LW · RE",
        d:["Says animals need food.","“Feed them.”"],
        a:["Lists what working animals need.","“Food, water, shelter, rest, health care and kindness.”"],
        f:["Explains why care matters from the Bible and science.","“Proverbs 12:10 says the righteous care for animals; healthy animals also work better.”"],
        i:["I can say animals need food.","I can list what they need.","I can explain why care matters."] }
    ],
    plan:{
      prior:"Gandom has been with us all term. Many students believe humps store water.",
      kc:["Thinking","Relating to others","Managing self"],
      sequence:[
        ["0–6","The Dispatch","Gandom's dispatch; Waystation Check; LI/SC.","Recall."],
        ["6–20","Discovery","Bactrian vs dromedary; **Camel Design**; animal care; turn & talk.","Predict; explore."],
        ["20–38","Choose Your Path","A/B/C.","Create."],
        ["38–45","Through the Lens","Proverbs 12:10; Genesis 24.","Discuss."],
        ["45–50","Waystation Clue & Exit","Clue 3 (answer 2).","Solve; self-assess."]
      ],
      diff:{
        supported:"Camel outline; word cards.",
        esol:"Pictures; point and name; key words.",
        learning:"Model option; humour; chunked steps.",
        flying:"Hump myth; habitat links."
      },
      assess:{
        lookFor:["Three adaptations","Bactrian vs dromedary","Animal care"],
        evidence:["Path products","Discussion","Exit self-assessment"]
      },
      inquiry:["Who held the ‘humps store water’ myth? Did it change?","Sanctuary Big Projects can use today's welfare ideas."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"gandom", meta:"The caravanserai courtyard · camels resting",
        msg:"**Finally.** A lesson about the most important member of this caravan: **me**. Two humps, magnificent eyelashes, feet like cushions. And before anyone asks: **no**, my humps are **not** full of water. Honestly. Also, someone's been stealing our feed. Not that I'm complaining. Much.",
        notes:[["SAY","Read it in Gandom's proudest voice. 🟡 Gandom is fictional."],["ASK","“What do you think is in a camel's hump?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"What is a caravanserai?", a:"A roadside inn for caravans of traders and animals." }, { q:"What is specialisation?", a:"Doing one job and becoming very good at it." }, { q:"What does Proverbs 11:1 say about scales?", a:"The LORD detests dishonest scales." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"animalcards", phase:"excavate", fs:"real", kicker:"Two kinds of camel", title:"Bactrian or *dromedary*?",
        animals:[
          { img:"animal-10", icon:"🐫", col:"#a87a4a", t:"Bactrian camel", d:"**Two humps.** Grows a **shaggy winter coat** for freezing cold, and sheds it in the hot summer. Used by caravans across Persia and Central Asia." },
          { img:"animal-23", icon:"🐪", col:"#c99a5a", t:"Dromedary", d:"**One hump.** Lives in hot deserts like Arabia and North Africa." },
          { img:"animal-24", icon:"🥩", col:"#7a5a3a", t:"What's in the hump?", d:"**Fat, not water!** The camel turns the fat into **energy** when food is scarce." }
        ],
        notes:[["SAY","Read each card."],["NOTE","Sources: San Diego Zoo (Bactrian camel); Cleveland Zoo Society (humps store fat)."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Built for the desert", title:"The Camel Design", ix:"cameldesign",
        notes:[["CLICK","Tap each + (or press →): humps → eyelashes → nostrils → feet → coat."],["ASK","Before each: “What do you think this part helps with?”"],["NOTE","Source: San Diego Zoo (eyelashes, nostrils, feet, winter coat)."]] },
      { type:"discussion", phase:"excavate", fs:"real", kicker:"Turn & Talk", q:"A camel carries your goods across the desert. **What does it need from you to stay healthy?**", sub:"Think about food, water, rest, health and kindness.", talk:45,
        notes:[["TALK","45 seconds."],["LISTEN","Food, water, rest, shade or shelter, not too heavy a load, vet care, gentle handling."]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAY","“Choose your path. Every product includes good animal care.”"],["CLICK","Start the 18-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Proverbs 12:10 and Genesis 24:14–20."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 2."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = darics."]] }
    ]
  };

  /* ======================= THURSDAY · TECHNOLOGY ======================= */
  const thu = {
    id:"w07-thu", week:7, day:"thu", subject:"technology", duration:50,
    title:"Royal Road Messages 2: Secret Codes & Loops", guide:"nasrin",
    codes:["DT-CT","MA","EN"],
    coverage:"Digital Technologies — Computational Thinking, Progress Outcomes 2–3: algorithms with repetition (loops); encoding and decoding data.",
    li:"We are learning to use an algorithm to encode and decode messages, and to use a loop.",
    sc:["I can explain what a cipher is.","I can encode and decode a message with a shift.","I can use a repeat loop in an algorithm or code."],
    vocab:[
      { w:"cipher", say:"SY-fer", def:"a secret way of writing a message by changing its letters" },
      { w:"encode", def:"to turn a message into code" },
      { w:"decode", def:"to turn a coded message back into plain words" },
      { w:"shift", def:"moving each letter the same number of places along the alphabet" },
      { w:"loop", def:"an instruction that repeats steps" },
      { w:"key", def:"the secret information needed to decode (here, the shift number)" },
      { w:"plain text", def:"the message before it is coded" }
    ],
    prep:{ min:10, items:["Printed cipher wheels (two circles of card and a split pin)","Caravan Journals (with the Shadow's Week 3 code copied in!)","iPads with Scratch (optional, for Path B)"] },
    safety:["Split pins are sharp: push them through carefully."],
    care:[],
    hononga:"**Codes in Aotearoa.** Every time you use EFTPOS or log in to a website, your information is **encrypted**: a much harder cipher than ours, but the same idea.",
    paths:[
      { id:"A", name:"The Scribe", product:"Code Book", steps:["Make a **code book** with the alphabet and your shift.","Encode **three messages** for a partner.","Write the **loop** that encodes any message."], flying:"Crack a partner's message without knowing their shift. How did you do it?" },
      { id:"B", name:"The Artisan", product:"Cipher Wheel", steps:["Build a **cipher wheel** from two card circles and a split pin.","Use it to decode the **Shadow's Week 3 message**.","Encode a reply to the Shadow."], flying:"In Scratch, make a sprite that repeats ‘move 3 letters’ for each letter." },
      { id:"C", name:"The Herald", product:"Codebreaker Challenge", steps:["Run a **codebreaker challenge** for another team.","Give them a coded message and **one clue** about the key.","Explain how a **loop** makes coding faster."], flying:"Explain why a shift cipher is easy to crack, and how to make a stronger code." }
    ],
    supportedShort:"a printed alphabet strip; a cipher wheel already built; short messages.",
    lens:{
      pillar:"manaaki", title:"The glory of searching things out",
      look:"Look again at the coded message: hidden… until someone searches it out.",
      ref:"Proverbs 25:2",
      paraphrase:"It is the glory of God to conceal a matter; to search out a matter is the glory of kings.",
      talk:[
        { q:"Why might God hide things for us to search out?", listen:"So we learn, grow, ask questions, enjoy discovering; science and the Bible both reward searching." },
        { q:"How can you use your problem-solving to serve someone?", listen:"Helping with homework, fixing something, solving a friendship problem kindly." }
      ],
      live:"Write an encoded **encouraging message** for a friend, and give them the key."
    },
    clue:{ prompt:"Our cipher shifted every letter by how many places?", answer:3, explain:"A shift of 3 (A → D). Waystation Clue 4 = 3, saved for Friday!" },
    next:"Friday — Master Hamid: the oldest carpet in the world.",
    rubric:[
      { c:"What is a cipher?", code:"DT-CT",
        d:["Says it's a secret code.","“A code.”"],
        a:["Explains a shift cipher.","“Each letter moves the same number of places, like A → D.”"],
        f:["Explains the key and why it matters.","“Without the shift number you can't decode it, but you could try all 25 shifts.”"],
        i:["I can say it's a code.","I can explain a shift cipher.","I can explain the key and why it matters."] },
      { c:"Encoding & decoding", code:"DT-CT · EN",
        d:["Encodes one word with help.","HI → KL"],
        a:["Encodes and decodes a sentence accurately.","Decodes WKH URDG LV ORQJ → THE ROAD IS LONG."],
        f:["Cracks a message without the key.","“I tried shifts until real words appeared.”"],
        i:["I can encode a word with help.","I can encode and decode a sentence.","I can crack a message without the key."] },
      { c:"Using a loop", code:"DT-CT",
        d:["Repeats steps by hand.","Shifts each letter one by one."],
        a:["Writes a repeat loop.","“repeat for each letter: move it 3 places”"],
        f:["Explains why loops make algorithms shorter.","“One loop works for any length of message.”"],
        i:["I can repeat steps by hand.","I can write a repeat loop.","I can explain why loops help."] }
    ],
    plan:{
      prior:"Students wrote sequence algorithms last week and copied the Shadow's coded note in Week 3.",
      kc:["Thinking","Using language, symbols & texts","Managing self"],
      sequence:[
        ["0–6","The Dispatch","Nasrin's dispatch; Waystation Check; LI/SC.","Recall."],
        ["6–18","Discovery","Hidden messages in Herodotus; **Cipher Wheel**: shift, encode, loop, decode the Shadow's note.","Encode; decode."],
        ["18–38","Choose Your Path","A/B/C.","Create."],
        ["38–45","Through the Lens","Proverbs 25:2.","Discuss."],
        ["45–50","Waystation Clue & Exit","Clue 4 (answer 3).","Solve; self-assess."]
      ],
      diff:{
        supported:"Alphabet strip; pre-built wheel; short messages.",
        esol:"Letters and arrows are visual; partner work.",
        learning:"Hands-on wheel; short messages.",
        flying:"Crack without the key; Scratch loop."
      },
      assess:{
        lookFor:["Explains a cipher","Encodes and decodes","Writes a loop"],
        evidence:["Code books","Decoded Shadow messages","Exit self-assessment"]
      },
      inquiry:["Who cracked the Shadow's message first?","Who's ready for variables and binary in Week 8?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"nasrin", meta:"A quiet corner of the caravanserai",
        msg:"Remember the Shadow's note from **Week 3**? The one nobody could read? I think I know how it works. Royal messages were sometimes **hidden** or **coded** so enemies couldn't read them. Today we learn how codes work, and then… **we crack the Shadow's message.** Get your Caravan Journals.",
        notes:[["SAY","Read the dispatch. 🟡 Nasrin is fictional."],["CLICK","Ask students to open their journals to the Week 3 code: WKH URDG LV ORQJ."]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"How many humps does a dromedary have?", a:"One." }, { q:"What is in a camel's hump?", a:"Fat, not water." }, { q:"What is an algorithm?", a:"A precise, step-by-step set of instructions." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"A hidden message", title:"Herodotus and the *tattooed* message",
        bullets:["Herodotus tells how **Histiaeus** wanted to send a secret message.","He **shaved a servant's head**, **tattooed** the message on it, and waited for the **hair to grow back**.","Then he sent the servant to **Aristagoras**, who shaved his head again… and read the message!"],
        visual:{ artefact:"herodotus" },
        notes:[["SAY","Read the story. Students love it!"],["ASK","“What's the weakness of this method?” (It's slow! And anyone who shaves his head can read it.)"],["NOTE","Source: Herodotus, Histories 5.35 (Perseus / Perseids, Tufts University)."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Shift · loop · decode", title:"The Cipher Wheel", ix:"cipher",
        notes:[["CLICK","Press →: hidden messages → the shift → encode HELLO with a loop → decode the Shadow's note (letter by letter) → the answer. Use Shift − / + to explore other keys."],["ASK","At step 4: “Before it finishes, can you guess the words?”"],["SAY","At the end: “THE ROAD IS LONG. Why might the Shadow write that?” (Tired? Lonely? Far from home?)"]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Loops", title:"Why loops matter",
        cards:[ { icon:"🐢", t:"Without a loop", d:"Shift H. Shift E. Shift L. Shift L. Shift O… one instruction for **every** letter.", foot:"long & slow" }, { icon:"🔁", t:"With a loop", d:"**repeat for each letter:** move it 3 places. One instruction, works for **any** message.", foot:"short & smart" }, { icon:"🧩", t:"In Scratch", d:"The **repeat** block does the same job for sprites: repeat 10 → move 10 steps.", foot:"try it!" } ],
        notes:[["SAY","“A loop repeats steps so we don't have to write them again and again.”"],["NOTE","Source: Technology Online, Progress Outcomes; Scratch (MIT)."]] },
      { type:"paths", phase:"paths", fs:null, minutes:20,
        notes:[["SAY","“Choose your path. Everyone decodes the Shadow's message first if you haven't!”"],["CLICK","Start the 20-minute timer."],["SAFETY","Split pins."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Proverbs 25:2."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 3."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = darics."]] }
    ]
  };

  /* ======================= FRIDAY · ART ======================= */
  const fri = {
    id:"w07-fri", week:7, day:"fri", subject:"art", duration:50,
    title:"Carpets & Weaving: the Pazyryk Carpet", guide:"hamid",
    codes:["VA-PK","VA-DI","VA-UC","MA"],
    coverage:"Visual Arts (NZC 2007, Level 3): practical knowledge (weaving, grid design, repeat), developing ideas (border and centre), understanding art in context (the Pazyryk carpet). Maths: area, large numbers, Old Persian number signs.",
    li:"We are learning to design and weave a patterned carpet section.",
    sc:["I can describe the Pazyryk carpet.","I can design a border and a centre.","I can weave or draw repeating motifs."],
    vocab:[
      { w:"weave", def:"to make fabric by passing threads over and under each other" },
      { w:"knot", def:"in carpets, a loop of wool tied around threads to make a tuft of colour" },
      { w:"warp", def:"the threads that run up and down on a loom" },
      { w:"weft", def:"the threads that go across, over and under the warp" },
      { w:"loom", def:"a frame for weaving" },
      { w:"border", def:"a decorated band around the edge" },
      { w:"motif", say:"moh-TEEF", def:"a shape or picture that repeats in a design" }
    ],
    prep:{ min:10, items:["Paper-weaving: coloured paper strips and pre-slit card ‘looms’","Or: grid paper (1 cm squares) and coloured pencils for knot designs","Optional: a real rug or a photo of a Persian carpet"] },
    safety:["Scissors handle-first."],
    care:[],
    hononga:"**Weaving in Aotearoa.** **Raranga** (Māori weaving) uses harakeke (flax) to make kete and whāriki (mats) with patterns that carry meaning. Weavers, like carpet makers, plan patterns that repeat.",
    paths:[
      { id:"A", name:"The Designer", product:"Design Notes + Plan", steps:["On grid paper, design a carpet with a **border** and a **centre**.","Use **one square = one knot**.","Write **notes**: your colours, motifs and what they mean."], flying:"Count how many ‘knots’ your design has. How long would it take at one knot every 10 seconds?" },
      { id:"B", name:"The Artisan", product:"Paper Weaving", steps:["Weave paper strips **over and under** on a card loom.","Plan a **border** of one colour and a **pattern** in the centre.","Glue the ends and add **fringe** at the top and bottom."], flying:"Weave a pattern that repeats diagonally." },
      { id:"C", name:"The Herald", product:"Carpet-Seller's Story", steps:["You are a **carpet seller** in the Tabriz bazaar.","Tell the story of the **Pazyryk carpet**: how old, where found, how many knots.","Sell your own design **honestly** (no cheating scales!)."], flying:"Explain why the Pazyryk carpet survived 2,400 years in the ground." }
    ],
    supportedShort:"pre-slit looms; a border already drawn on grid paper; a motif to copy.",
    lens:{
      pillar:"aroha", title:"Skilled hands, willing hearts",
      look:"Look again at the knots: **thousands upon thousands**, every one tied by a skilled hand.",
      ref:"Exodus 35:25–26",
      paraphrase:"Every skilled woman spun with her hands and brought what she had spun: blue, purple or scarlet yarn, or fine linen. All the women who were willing and had the skill spun the goats' hair.",
      talk:[
        { q:"The women used their skills to make something beautiful for God's tabernacle. What skills has God given you?", listen:"Art, sport, music, kindness, maths, reading, listening, building." },
        { q:"How could you use your skill to bless someone this week?", listen:"Make a card, teach a friend, help at home, play music for someone." }
      ],
      live:"Use your gift for someone else this week. Write what you'll do in your Caravan Journal."
    },
    clue:{ prompt:"Friday's clue is the Seal Fragment: add this week's four Waystation Clues and write the total in Old Persian number signs.", answer:64, explain:"5 + 54 + 2 + 3 = 64 → three 20-signs and two 2-signs." },
    next:"Next week — Stage VIII: Fire on the Mountain. Persepolis burns.",
    rubric:[
      { c:"The Pazyryk carpet", code:"VA-UC",
        d:["Says it's an old carpet.","“A very old rug.”"],
        a:["Describes its age, where it was found and where it is now.","“About 2,400–2,500 years old, found in a burial mound in Siberia, now in the Hermitage.”"],
        f:["Uses the numbers to explain the skill involved.","“About 360,000 knots per square metre: over a million knots, all by hand!”"],
        i:["I can say it's an old carpet.","I can describe its age, discovery and home.","I can use the numbers to explain the skill."] },
      { c:"Border & centre", code:"VA-DI",
        d:["Draws a pattern.","Some coloured squares."],
        a:["Designs a clear border and centre.","A border band framing a centre motif."],
        f:["Designs a balanced, symmetrical carpet with meaning.","Mirrored corners; motifs explained."],
        i:["I can draw a pattern.","I can design a border and centre.","I can design a balanced carpet with meaning."] },
      { c:"Weaving & repeat", code:"VA-PK",
        d:["Weaves with help.","Strips over and under, with gaps."],
        a:["Weaves or draws a neat repeating pattern.","Tight weave, pattern repeats."],
        f:["Plans and controls a complex repeat.","Diagonal or alternating repeat, carefully finished."],
        i:["I can weave with help.","I can weave a neat repeat.","I can plan a complex repeat."] }
    ],
    plan:{
      prior:"Students have made rosettes, seals, prints, relief and foil. Grid symmetry was last week's garden.",
      kc:["Thinking","Managing self","Using language, symbols & texts"],
      sequence:[
        ["0–6","The Dispatch","Hamid's dispatch; Waystation Check; LI/SC.","Recall."],
        ["6–14","Discovery","The Pazyryk carpet; **Knot Counter**.","Calculate; look."],
        ["14–36","Choose Your Path","A/B/C.","Design; weave."],
        ["36–41","Through the Lens","Exodus 35:25–26.","Discuss."],
        ["41–50","Seal Fragment VII & the Shadow's Note","5 + 54 + 2 + 3 = 64 → 20, 20, 20, 2, 2.","Solve the lock."]
      ],
      diff:{
        supported:"Pre-slit looms; drawn borders.",
        esol:"Demonstrate over/under; key words with pictures.",
        learning:"Hands-on weaving; short steps.",
        flying:"Knot-count timing; diagonal repeats."
      },
      assess:{
        lookFor:["Describes the Pazyryk carpet","Designs border and centre","Weaves a repeat"],
        evidence:["Weavings (photograph)","Design notes","Seal Fragment working (64)"]
      },
      inquiry:["Paradise Garden Big Projects could add a carpet border.","How did students respond to ‘Everyone has a price’?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"hamid", meta:"A carpet-weaver's workshop · looms clacking",
        msg:"Sit, sit. Watch her hands: **loop, tie, cut. Loop, tie, cut.** One knot, one tiny spot of colour. Thousands in a single hand-span. Far away in the frozen mountains of the north, they found a carpet like this **buried in ice** for nearly **two and a half thousand years**. Imagine the patience.",
        notes:[["SAY","Read the dispatch. 🟡 Master Hamid is fictional; the Pazyryk carpet is real."]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"What is a shift cipher?", a:"A code that moves every letter the same number of places." }, { q:"What did the Shadow's message say?", a:"THE ROAD IS LONG." }, { q:"What does a loop do?", a:"Repeats steps." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"The oldest carpet", title:"The *Pazyryk* carpet",
        bullets:["The **oldest known knotted carpet**: about **2,400–2,500 years old** (5th–4th century BC).","Found in a **prince's burial mound** in the **Altai Mountains** of Siberia, where the ice preserved it.","About **1.83 × 2 m**, with about **360,000 knots per square metre**. It's in the **Hermitage Museum**, St Petersburg."],
        visual:{ svg:() => {
          const s = BM.s, v = BM.svg(600, 640, { style:"width:600px;height:640px;border-radius:6px;box-shadow:var(--sh-3)" });
          v.appendChild(s("rect", { width:600, height:640, fill:"#7a1530" }));
          [[20,"#E8B84A"],[50,"#0B7A55"],[90,"#E8B84A"],[110,"#1E3A8A"]].forEach(([d, c]) => v.appendChild(s("rect", { x:d, y:d, width:600 - 2*d, height:640 - 2*d, fill:"none", stroke:c, "stroke-width":d === 50 ? 26 : 8 })));
          for (let r=0;r<4;r++) for (let c=0;c<3;c++){ const x = 190 + c*110, y = 180 + r*95; v.appendChild(s("rect", { x:x - 40, y:y - 35, width:80, height:70, fill:"#B0213B", stroke:"#E8B84A", "stroke-width":3 })); v.appendChild(BM.art.rosette(x, y, 30, { petals:8, cols:["#E8B84A","#1E3A8A","#F6D27A"] })); }
          v.appendChild(s("text", { x:300, y:625, "text-anchor":"middle", "font-family":"Big Shoulders Display", "font-weight":900, "font-size":20, "letter-spacing":"3", fill:"#F6D27A" }, "SIMPLIFIED DRAWING, NOT THE REAL CARPET"));
          return v; } },
        notes:[["SAY","Read the points."],["NOTE","Source: Guinness World Records (Pazyryk carpet; Hermitage Museum). Many experts see Persian (Achaemenid) influence in its design; present it as an idea experts discuss. The picture is our simplified drawing."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"One square, one knot", title:"The Knot Counter", ix:"knotcounter",
        notes:[["CLICK","Press →: the carpet → border and centre → zoom in → knots per cm² → the whole carpet."],["ASK","“How long would 1.3 million knots take at one knot every 10 seconds?” (About 3,600 hours of non-stop work!)"],["NOTE","The pattern is simplified, not the real design. The total is our calculation."]] },
      { type:"paths", phase:"paths", fs:null, minutes:20,
        notes:[["SAY","“Design your border and centre first.”"],["CLICK","Start the 20-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Exodus 35:25–26."]] },
      { type:"folioseal", phase:"decode", fs:"story",
        notes:[["SAY","“Four clues: 5, 54, 2, 3.”"],["CLICK","5 + 54 + 2 + 3 = 64."],["SAY","“64: three 20-signs make 60, then 4 more: two 2-signs.”"],["CLICK","Press 20, 20, 20, 2, 2, then ‘Open the lock’."]] },
      { type:"intercept", phase:"decode", fs:"story",
        msg:"Everyone has a price.",
        ask:"The Shadow says anyone can be bought: bribed to cheat or steal. Is that true? Who in our stories this term could NOT be bought?",
        notes:[["SAY","Read it in the Shadow's voice. 🟡 The Shadow Courier is fictional."],["ASK","Link to honest scales (Proverbs 11:1), Daniel (Week 3), Esther (Week 5), Nehemiah (Week 6)."],["LISTEN","Daniel, Esther, Nehemiah: they did right even at a cost. People who love God and others can't be bought."],["NOTE","Did the Shadow steal the camel feed this week? Let students wonder. Unmasked in Week 9."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess. Celebrate Fragment VII!"],["CLICK","C = darics. Store weavings for the Exhibition."]] }
    ]
  };

  BM.WEEKS[7] = {
    n:7,
    story:"A great bazaar, and a thief among the camels! The historians read ration tablets about ordinary workers; the geographers specialise and trade in the bazaar; the scientists explore how camels are built for the desert and how to care for them; the engineers learn shift ciphers and loops, and finally crack the Shadow's Week 3 message: THE ROAD IS LONG; and the artists weave carpets inspired by the Pazyryk carpet. On Friday, 5 + 54 + 2 + 3 = 64 frees Fragment VII.",
    hononga:"Museums keep ordinary lives (Mon) · farmers' markets and saleyards (Tue) · sheepdogs and draught horses (Wed) · encryption in everyday life (Thu) · raranga and whāriki (Fri).",
    seal:{
      answer:64,
      instruction:"Add the four **Waystation Clues**. Then write the total in **Old Persian number signs**, biggest first, and press them into the clay. *(20 = two corner wedges · 2 = two upright wedges.)*",
      reveal:"🟡 **Fragment VII found!** It was rolled up inside a carpet in the bazaar. Seven down, three to go. Next week: *Fire on the Mountain* — Persepolis burns."
    },
    lessons:[mon, tue, wed, thu, fri]
  };
})(window.BM);
