/* ==========================================================
   WEEK 6 — FOLIO VI · THE EAGLE ON THE CACTUS
   (Big Projects launch in every subject)
   ========================================================== */
(function(FC){
  "use strict";

  const bigProject = (subject, name, what, choose) => ({
    type:"content", phase:"paths", fs:"real", kicker:"Big Project launch · Weeks 7–10", title:name,
    bullets:[what, "**Choose:** " + choose, "**Set a goal** in your journal: *By Week 10 I want to…*", "Build it over Weeks 7–10 and show it at the **Week 10 Exhibition** for whānau."],
    visual:{ level:true },
    notes:[["SAY","“This is your Big Project for " + subject + ". You choose what you make — and you'll show it to your families in Week 10.”"],["CLICK","Give 2 minutes: students write their choice and a goal in their journals."],["NOTE","Core rubric for this subject is in the Unit Plan PDF. Check goals weekly (1 minute at the start of Path time)."]]
  });

  /* ======================= MONDAY · HISTORY ======================= */
  const mon = {
    id:"w06-mon", week:6, day:"mon", subject:"history", duration:50,
    title:"The Rise of the Aztecs: Tenochtitlan & the Triple Alliance", guide:"itzel",
    codes:["SS-H","SS-P","SS-E","RE"],
    coverage:"Y5 History (2027 Social Sciences): an ancient civilisation — origins and founding stories, how people adapted to their environment (chinampas), government and empire (Triple Alliance, tribute); distinguishing tradition from historical evidence.",
    li:"We are learning how the Mexica founded Tenochtitlan and built an empire.",
    sc:["I can retell the founding story and explain which parts are tradition and which are historical evidence.","I can explain how chinampas and causeways let a city grow on a lake.","I can explain the Triple Alliance and the tribute system."],
    vocab:[
      { w:"Mexica", say:"meh-SHEE-kah", def:"the people we often call the Aztecs" },
      { w:"Tenochtitlan", say:"teh-noch-TEET-lan", def:"the Mexica capital, built on an island in Lake Texcoco" },
      { w:"chinampa", say:"chee-NAM-pah", def:"a field built in a shallow lake from mud and plants" },
      { w:"causeway", def:"a raised road across water" },
      { w:"alliance", def:"an agreement between groups to support each other" },
      { w:"tribute", def:"goods that conquered towns had to send to the rulers" },
      { w:"tradition", def:"a story or belief passed down through generations" }
    ],
    prep:{ min:3, items:["Expedition Journals (Big Project goal page)","Optional: modelling clay or play-dough and straws (Path B chinampa)"] },
    safety:[],
    hononga:"Iwi trace their ancestry to the **waka** that voyaged to Aotearoa around **1250–1300 CE** — about the same time the Mexica founded Tenochtitlan! Founding stories, like those of Kupe and the great waka, explain who people are and why they settled where they did. Sites were chosen for food, fresh water and safety — just like the Mexica's island.",
    paths:[
      { id:"A", name:"The Scribe", product:"Founding Story", steps:["Retell the founding of Tenochtitlan in your own words.","Label each part: 🟢 evidence or 🟡 tradition.","End with why the story mattered to the Mexica."], flying:"Compare it with a founding story you know." },
      { id:"B", name:"The Builder", product:"Chinampa Model", steps:["Build a chinampa: a ‘lake’, stakes, layers of mud and plants.","Add a canal and a canoe.","Label how it worked and why it was so productive."], flying:"Explain how chinampas fed 200,000 people." },
      { id:"C", name:"The Messenger", product:"Founding Newsreader", steps:["Report live from the island, 1325.","Interview a Mexica elder (a partner) about the journey.","Explain what the city will need to grow."], flying:"Fast-forward to 1519: report on the giant city." }
    ],
    supportedShort:"story frame with picture prompts; chinampa diagram to label; interview question cards.",
    lens:{
      pillar:"mohio", title:"Built on rock — or on sand?",
      look:"Look at Tenochtitlan: a magnificent city built on soft mud in the middle of a lake. Tomorrow we'll see what happened to that ground.",
      ref:"Matthew 7:24–27",
      paraphrase:"Everyone who hears these words of mine and puts them into practice is like a wise man who built his house on the rock. The rain came down, the streams rose, and the winds blew… yet it did not fall, because it had its foundation on the rock.",
      talk:[
        { q:"Jesus told a story about two builders. What is the ‘rock’ he's talking about?", listen:"Hearing Jesus' words AND doing them; trusting Him; a life built on Him lasts through storms." },
        { q:"What ‘storms’ can happen in a person's life? What helps someone stand strong?", listen:"Sadness, change, loss, pressure; faith, family, friends, God's promises, prayer." }
      ],
      live:"Write one way you'll **put Jesus' words into practice** this week."
    },
    clue:{ prompt:"How many cities joined together in the Triple Alliance?", answer:3, explain:"Tenochtitlan, Texcoco and Tlacopan → 3. Clue saved!" },
    next:"Tuesday — Mexico City today: the city that is sinking.",
    rubric:[
      { c:"Founding story: tradition & evidence", code:"SS-H · SS-P",
        d:["Retells part of the story.","“They saw an eagle on a cactus.”"],
        a:["Retells the story and identifies tradition vs evidence.","“The eagle is a tradition. That they built a city on an island around 1325 is supported by archaeology.”"],
        f:["Explains why founding stories matter even when they're tradition.","“The eagle story gave the Mexica a sense of purpose — it's still on Mexico's flag today.”"],
        i:["I can retell part of the story.","I can tell tradition from evidence.","I can explain why founding stories matter."] },
      { c:"Adapting to the environment", code:"SS-H",
        d:["Says the city was on a lake.","“It was on water.”"],
        a:["Explains chinampas, causeways and the aqueduct.","“Chinampas made farmland in the lake; causeways joined the island to the shore; an aqueduct brought fresh water.”"],
        f:["Explains how these solutions allowed a huge city.","“Chinampas gave several harvests a year, so 200,000 people could be fed.”"],
        i:["I know it was on a lake.","I can explain chinampas, causeways and the aqueduct.","I can explain how these let the city grow huge."] },
      { c:"Empire & tribute", code:"SS-H · SS-E",
        d:["Says the Aztecs were powerful.","“They were strong.”"],
        a:["Explains the Triple Alliance and tribute.","“Three cities joined in 1428. Conquered towns had to send tribute like cloth, cacao and feathers.”"],
        f:["Explains different perspectives on tribute.","“For Tenochtitlan tribute meant wealth; for conquered towns it was a heavy burden — some later joined the Spanish against them.”"],
        i:["I know they were powerful.","I can explain the Alliance and tribute.","I can explain different views of tribute."] }
    ],
    plan:{
      prior:"Weeks 2–5: Maya civilisation. Seal V pointed north to an eagle on a cactus. Week 4: Matariki/maramataka (founding traditions).",
      kc:["Thinking","Using language, symbols & texts","Relating to others"],
      sequence:[
        ["0–6","Field Transmission","Dr Canul: the eagle on the cactus; Glyph Check; LI/SC.","Recall; predict."],
        ["6–20","Excavate","Tradition or evidence?; Tenochtitlan Builder (6 stages); chinampas; Triple Alliance & tribute; Hononga.","Predict, build, discuss."],
        ["20–24","Big Project launch","History Big Project: Museum Case — choose & set goal.","Choose; write goal."],
        ["24–40","Choose Your Path","Paths.","Story / model / newsreader."],
        ["40–45","Through the Lens","Matthew 7:24–27.","Discuss; action."],
        ["45–50","Decode & Exit","Clue (3).","Solve; self-assess."]
      ],
      diff:{
        supported:"Story frame; labelled chinampa diagram.",
        esol:"Visual builder; key words (lake, island, canoe) with pictures.",
        learning:"Hands-on model; oral retelling.",
        flying:"Perspectives on tribute; compare founding stories."
      },
      assess:{
        lookFor:["Tradition vs evidence","Chinampas & causeways explained","Triple Alliance & tribute"],
        evidence:["Path products","Big Project goal","Exit self-assessment"]
      },
      inquiry:["Did students handle ‘tradition vs evidence’ respectfully?","Big Project choices — who needs support choosing?","Link to Tuesday: what happened to the lake?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"itzel", meta:"Folio VI · north to the lake",
        msg:"Team, we're leaving Maya lands. The footprints on Folio V lead **north**, to the Valley of Mexico — to an island city built on a lake. The **Mexica**, who we often call the Aztecs, built it. Their story begins with a long journey… and an **eagle on a cactus**.",
        notes:[["SAY","Read the message."],["ASK","“Where have you seen an eagle on a cactus?” (Mexico's flag!)"]] },
      { type:"glyphcheck", phase:"transmission", fs:"real", title:"Remember Week 5?", qs:[
          { q:"What does LiDAR do?", a:"Lasers from a plane map the ground under the trees." },
          { q:"Give two possible causes of the Maya collapse.", a:"Drought, war, deforestation (probably a mix)." },
          { q:"Series or parallel: one bulb goes out, the rest stay on?", a:"Parallel." }],
        notes:[["SAY","Whiteboards; show on 3."],["CLICK","→ flips."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and SC."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Think like a historian", title:"Tradition or evidence?", h:"500px", cards:[
          { big:"🟡", color:"#D9A23A", t:"Tradition", d:"The Mexica wandered from **Aztlan** and were told to settle where an **eagle** stood on a **cactus**." },
          { big:"🟢", color:"#1F7A5A", t:"Evidence", d:"Archaeology shows a city was founded on an island in **Lake Texcoco** around **1325**." },
          { big:"🟢", color:"#1F7A5A", t:"Evidence", d:"Spanish visitors in **1519** described a vast city of canals, and its ruins are still being dug up today." }],
        notes:[["SAY","“A tradition is a story passed down. It matters to people even if we can't prove it. Evidence is what we can check.”"],["ASK","“Why might a people tell a founding story?”"],["NOTE","Speak respectfully about Mexica beliefs; the eagle is a national symbol of Mexico today."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Watch a city grow", title:"Building Tenochtitlan", ix:"tenochtitlan",
        notes:[["CLICK","→ adds each stage: island → chinampas → city → causeways → aqueduct → Templo Mayor."],["ASK","Before each: “What problem does a city on a lake have?” (Food, travel, defence, fresh water.)"],["PACE","Aim for minute 13."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Floating gardens", title:"Chinampas", visual:{ artefact:"chinampa" },
        bullets:["Farmers built fields in the shallow lake: layers of **mud** and plants held in by stakes and **willow trees**.","Water soaked up from the canals, so crops grew all year: **maize, beans, squash, chillies, flowers**.","Chinampas are **still farmed** today in Xochimilco, Mexico City."],
        notes:[["ASK","“Why would chinampas give more harvests than a dry field?”"],["NOTE","Image: artistic reconstruction."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"An empire", title:"The Triple Alliance", h:"480px", cards:[
          { big:"1428", color:"#B3262E", t:"Three cities", d:"**Tenochtitlan, Texcoco and Tlacopan** joined forces and conquered towns across central Mexico." },
          { big:"📜", color:"#D9A23A", t:"Tribute", d:"Conquered towns sent **tribute**: cloth, cacao, feathers, maize. It's recorded in the **Codex Mendoza**." },
          { big:"⚖️", color:"#2E9FB0", t:"Two views", d:"Wealth for Tenochtitlan — a heavy **burden** for conquered towns, who resented it." }],
        notes:[["ASK","“How might a town paying tribute feel? What might they do if a chance came to rebel?” (Foreshadows 1519!)"],["PACE","Aim for minute 20."]] },
      { type:"hononga", phase:"excavate", fs:"real", title:"Waka and founding stories",
        body:"Iwi trace their ancestry to the **waka** that voyaged to Aotearoa around **1250–1300 CE** — about the same time Tenochtitlan was founded!\n\nFounding stories explain who people are and where they belong. Settlements were chosen for **food, fresh water and safety** — just like the Mexica's island.",
        notes:[["ASK","“Which waka does your local iwi trace their ancestry to?” (Find out with your Māori lead.)"]] },
      bigProject("History", "Museum Case", "Curate **one artefact display**: a model or drawing, a **label**, a “how do we know?” card and **two perspectives**.", "your artefact — from any week (codex, stela, chinampa, Sun Stone, cacao…)"),
      { type:"paths", phase:"paths", fs:null, notes:[["SAY","Explain today's paths."],["CLICK","Start the timer (16 minutes is fine today)."]] },
      { type:"lens", phase:"lens", fs:null, notes:[["CLICK","→ reveals each move."],["SAY","Read Matthew 7:24–27."],["ASK","Use both questions."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["ASK","“How many cities in the Triple Alliance?” (3)"],["CLICK","3 dots → Check."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = cacao beans."]] }
    ]
  };

  /* ======================= TUESDAY · GEOGRAPHY ======================= */
  const tue = {
    id:"w06-tue", week:6, day:"tue", subject:"geography", duration:50,
    title:"Cities on a Lake: Urbanisation & the Sinking City", guide:"sofia",
    codes:["SS-G","SS-C","SS-P","SC-ES"],
    coverage:"Y6 Geography (2027 Social Sciences): urbanisation — causes and effects, informal settlements and responses; human–environment interaction (groundwater, subsidence, habitat loss — the axolotl); comparing past and present places.",
    li:"We are learning about urbanisation and its effects, using Mexico City as an example.",
    sc:["I can explain what urbanisation is and why people move to cities.","I can explain why Mexico City is sinking.","I can describe effects on people and nature, and suggest responses."],
    vocab:[
      { w:"urbanisation", def:"more and more people living in towns and cities" },
      { w:"migration", def:"people moving from one place to another" },
      { w:"informal settlement", def:"homes built without official permission, often lacking water or power" },
      { w:"groundwater", def:"water stored underground" },
      { w:"subsidence", say:"sub-SY-dence", def:"when the ground sinks" },
      { w:"critically endangered", def:"at very high risk of dying out" }
    ],
    prep:{ min:2, items:["Expedition Journals","Optional: a sponge and a tray to show subsidence (squeeze the water out — it shrinks!)"] },
    safety:[],
    hononga:"After the 2010–2011 earthquakes, parts of **Ōtautahi Christchurch** that were built on old swamp and riverbed suffered **liquefaction** — wet, loose ground turned to mush and sank. Like Mexico City, it showed how much the ground beneath a city matters. Many red-zone areas are now being returned to nature along the Ōtākaro Avon River.",
    paths:[
      { id:"A", name:"The Scribe", product:"Urban Planner's Report", steps:["Explain why Mexico City is sinking.","Describe 2 effects on people.","Recommend 2 solutions (e.g. capture rainwater, fix leaks)."], flying:"Weigh up the cost and fairness of each solution." },
      { id:"B", name:"The Builder", product:"Then & Now Map", steps:["Draw Tenochtitlan (1519) and Mexico City (today) side by side.","Label the lake, causeways and what replaced them.","Add a key."], flying:"Add arrows showing where the city is sinking fastest." },
      { id:"C", name:"The Messenger", product:"Axolotl Rescue Appeal", steps:["Make a poster or 30-second appeal to save the axolotl.","Explain why it's in danger.","Give one action people can take."], flying:"Connect the axolotl's danger to urbanisation." }
    ],
    supportedShort:"report frame; map templates; appeal sentence starters.",
    lens:{
      pillar:"aroha", title:"Seek the good of the city",
      look:"Look at Mexico City: millions of people, some in comfortable homes, some in settlements without clean water — all on ground that is sinking.",
      ref:"Jeremiah 29:7",
      paraphrase:"Seek the peace and prosperity of the city… Pray to the Lord for it, because if it prospers, you too will prosper.",
      talk:[
        { q:"God told His people to work and pray for the good of their city — even a foreign one. What does ‘the good of the city’ look like?", listen:"Safe homes, clean water, fairness, people caring for neighbours, beauty, nature cared for." },
        { q:"How could Christians help people living in informal settlements?", listen:"Practical help (water, schools), standing up for fairness, friendship, prayer (Aroha — Others)." }
      ],
      live:"Pray for **Ōtautahi** (or your town) and name one way to bless it this week."
    },
    clue:{ prompt:"How many causeways joined Tenochtitlan to the shore?", answer:3, explain:"North, south and west → 3. Clue saved!" },
    next:"Wednesday — magnetism and the mystery of the Olmec compass.",
    rubric:[
      { c:"Urbanisation", code:"SS-G",
        d:["Says cities are big.","“Lots of people live there.”"],
        a:["Explains urbanisation and reasons people move to cities.","“People move to cities for jobs, schools and hospitals — that's urbanisation.”"],
        f:["Explains effects, including informal settlements.","“Cities grow faster than housing, so some families build homes without water or power on the edges.”"],
        i:["I know cities are big.","I can explain urbanisation and why it happens.","I can explain its effects on people."] },
      { c:"The sinking city", code:"SS-G · SC-ES",
        d:["Says the city is sinking.","“It's going down.”"],
        a:["Explains the cause: pumping groundwater from clay.","“Pumping water out of the old lakebed makes the clay shrink, so the ground sinks.”"],
        f:["Links cause, effects and solutions.","“It cracks pipes and causes floods; capturing rainwater and fixing leaks would reduce pumping.”"],
        i:["I know it's sinking.","I can explain why it's sinking.","I can link causes, effects and solutions."] },
      { c:"People & nature", code:"SS-C · SS-P",
        d:["Names an animal or problem.","“The axolotl.”"],
        a:["Describes an effect on nature and on people, with a response.","“Canals are polluted and the axolotl is critically endangered; people are cleaning canals to help.”"],
        f:["Evaluates responses fairly for different groups.","“Clean-ups help axolotls and farmers in Xochimilco, but the city also needs water — so saving water helps everyone.”"],
        i:["I can name a problem.","I can describe effects and a response.","I can judge responses fairly."] }
    ],
    plan:{
      prior:"Monday: Tenochtitlan on Lake Texcoco; Week 4–5: environments and human impact.",
      kc:["Thinking","Participating & contributing","Relating to others"],
      sequence:[
        ["0–6","Field Transmission","Sofía flies over Mexico City; Glyph Check; LI/SC.","Recall."],
        ["6–20","Excavate","Urbanisation cards; Then & Now slider; Sinking city (optional sponge demo); axolotl; Hononga (Christchurch).","Compare, predict, explain."],
        ["20–24","Big Project launch","Geography Big Project: Expedition Atlas or Campaign.","Choose; goal."],
        ["24–40","Choose Your Path","Paths.","Report / map / appeal."],
        ["40–45","Through the Lens","Jeremiah 29:7.","Discuss; pray."],
        ["45–50","Decode & Exit","Clue (3).","Solve; self-assess."]
      ],
      diff:{
        supported:"Report frame; map templates.",
        esol:"Then/now visual; sponge demo; key words with pictures.",
        learning:"Hands-on sponge model; poster option.",
        flying:"Fairness of solutions; link to Christchurch."
      },
      assess:{
        lookFor:["Defines urbanisation","Explains subsidence","Effects + responses"],
        evidence:["Path products","Big Project choice","Exit self-assessment"]
      },
      inquiry:["Did the Christchurch link help students understand ground conditions?","Sensitivity: some families may have earthquake experiences — check in gently.","Big Project choices recorded?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"sofia", meta:"Over the Valley of Mexico",
        msg:"Navigators, look down! In 1519 this valley held a sparkling lake with an island city. Today? Buildings as far as the eye can see — **22 million people**. But here's something strange: parts of this city are **sinking** — faster than almost anywhere on Earth.",
        notes:[["SAY","Read the message."],["ASK","“How could a whole city sink?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:"real", qs:[
          { q:"What is a chinampa?", a:"A field built in a shallow lake from mud and plants." },
          { q:"Which three cities made the Triple Alliance?", a:"Tenochtitlan, Texcoco, Tlacopan." },
          { q:"What is a tradition?", a:"A story or belief passed down through generations." }],
        notes:[["SAY","Whiteboards; show on 3."],["CLICK","→ flips."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and SC."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Moving to the city", title:"Urbanisation", h:"480px", cards:[
          { big:"🏙️", color:"#2E9FB0", t:"What is it?", d:"More and more people living in **towns and cities**. Over half the world now lives in cities." },
          { big:"🧲", color:"#1F7A5A", t:"Why move?", d:"**Jobs**, schools, hospitals, family — and sometimes because farming no longer pays." },
          { big:"🏚️", color:"#B3262E", t:"Growing pains", d:"Cities can grow faster than housing — leading to **informal settlements** without water or power." }],
        notes:[["ASK","“Why might a family move from the countryside to a city?”"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"500 years", title:"Then & now", ix:"thennow",
        notes:[["CLICK","Drag the line across. → shows 1519, → again shows today."],["ASK","“What happened to the lake?” (Drained for farms and the growing city.)"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Cause & effect", title:"The sinking city", ix:"sinking",
        notes:[["CLICK","Drag the slider slowly from 0 to 30 years."],["SAY","Optional demo: soak a sponge, then squeeze out the water — it shrinks. The clay under the city does the same when water is pumped out."],["ASK","“What could the city do?” (Capture rainwater, fix leaking pipes, pump less.)"],["NOTE","Rates vary across the city; the fastest areas sink tens of centimetres a year."],["PACE","Aim for minute 15."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"The last of the lake", title:"The axolotl", visual:{ artefact:"axolotl" },
        bullets:["The **axolotl** is a salamander that keeps its frilly gills all its life.","In the wild it lives **only** in the canals of **Xochimilco** — the last remains of the old lake.","It's **critically endangered** because of pollution, introduced fish and the growing city.","Local farmers and scientists are creating **refuges** with clean water in the chinampa canals."],
        notes:[["ASK","“How is the axolotl's problem connected to urbanisation?”"],["NOTE","Image: artistic reconstruction."]] },
      { type:"hononga", phase:"excavate", fs:"real", title:"Ōtautahi: the ground beneath us",
        body:"In the **2010–2011 earthquakes**, parts of Christchurch built on old swamp and riverbed suffered **liquefaction** — wet ground turned to mush and sank.\n\nLike Mexico City, it showed how much the **ground** matters. Many red-zone areas along the **Ōtākaro Avon River** are being returned to nature.",
        notes:[["NOTE","Some students' families may have strong memories of the earthquakes. Keep it brief and gentle."]] },
      bigProject("Geography", "Expedition Atlas or Campaign", "Make an **Expedition Atlas page** about a place from our journey — **or** run a **Campaign** for Indigenous rights or rainforest protection.", "your place or your cause, and who your audience is"),
      { type:"paths", phase:"paths", fs:null, notes:[["SAY","Explain paths."],["CLICK","Start the timer."]] },
      { type:"lens", phase:"lens", fs:null, notes:[["CLICK","→ reveals each move."],["SAY","Read Jeremiah 29:7."],["ASK","Use both questions."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["ASK","“How many causeways?” (3)"],["CLICK","3 dots → Check."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = cacao beans."]] }
    ]
  };

  /* ======================= WEDNESDAY · SCIENCE ======================= */
  const wed = {
    id:"w06-wed", week:6, day:"wed", subject:"science", duration:50,
    title:"Magnetism & the Olmec Compass Mystery", guide:"mateo",
    codes:["SC-MF","SC-P","SS-H"],
    coverage:"Y5 Science (Motion & forces): non-contact forces including magnetism; magnetic poles and fields; which materials are magnetic. Science practices: testing and evaluating a scientific claim with evidence.",
    li:"We are learning how magnets work and how to evaluate a scientific claim.",
    sc:["I can explain that magnets attract some metals (iron, steel) but not all.","I can explain poles: like poles repel, opposite poles attract.","I can use evidence to judge whether the Olmec bar was a compass."],
    vocab:[
      { w:"magnet", def:"an object that attracts iron and steel" },
      { w:"pole", def:"the ends of a magnet, north (N) and south (S), where the force is strongest" },
      { w:"attract / repel", def:"pull together / push apart" },
      { w:"magnetic field", def:"the invisible area around a magnet where its force acts" },
      { w:"non-contact force", def:"a push or pull that works without touching" },
      { w:"compass", def:"a magnetised needle that turns to point north–south" }
    ],
    prep:{ min:5, items:["Per group: a bar magnet, a sewing needle, a slice of cork, a bowl of water","A tray: iron nail, steel paperclip, aluminium can, copper wire, coin, plastic, wood","Optional: iron filings in a sealed bag or under paper"] },
    safety:["Needles are sharp: carry point-down; count them back in.","Keep magnets away from phones, laptops and cards.","Iron filings stay sealed — never loose near eyes."],
    hononga:"Polynesian navigators crossed the Pacific to Aotearoa **without a compass** — reading the **stars**, ocean **swells**, clouds and the flight of **birds**. Today, kaupapa like Te Toki Voyaging Trust keep this knowledge alive on modern waka hourua.",
    paths:[
      { id:"A", name:"The Scribe", product:"Investigation: What's Magnetic?", steps:["Predict which of 8 objects are magnetic.","Test with a magnet and record ✓ / ✗.","Conclusion: are all metals magnetic?"], flying:"Find the pattern: what do the magnetic things contain?" },
      { id:"B", name:"The Builder", product:"Make a Compass", steps:["Stroke a needle 30 times with one end of a magnet (one direction only).","Lay it on cork floating in water.","Check: does it point the same way every time?"], flying:"Compare with a real compass — is it accurate?" },
      { id:"C", name:"The Messenger", product:"Science Court", steps:["Was the Olmec bar a compass? Prosecution vs defence.","Each side uses 2 pieces of evidence.","The ‘jury’ (class) gives a verdict with reasons."], flying:"Explain what extra evidence would settle the case." }
    ],
    supportedShort:"prediction table with pictures; step cards for the compass; evidence cards for the court.",
    lens:{
      pillar:"mohio", title:"Which way should I go?",
      look:"Look at the compass: a tiny needle that always points the same way. Navigators trusted it with their lives. Mateo lost his — and now the team is lost too!",
      ref:"Psalm 32:8",
      paraphrase:"I will instruct you and teach you in the way you should go; I will counsel you with my loving eye on you.",
      talk:[
        { q:"A compass gives direction. Where do people look for direction in life?", listen:"Parents, teachers, friends, the Bible, prayer, conscience — and some unreliable sources too." },
        { q:"God promises to guide us ‘with a loving eye’. How is that different from a compass?", listen:"God knows us personally, cares about us, guides through Scripture, wise people and His Spirit; not just a direction but a relationship." }
      ],
      live:"Think of a choice you're facing. Ask God for **direction** in a short prayer."
    },
    clue:{ prompt:"How many poles does a magnet have?", answer:2, explain:"North and south → 2. Clue saved!" },
    next:"Thursday — inputs and decisions: the secret door code.",
    rubric:[
      { c:"Magnetic materials", code:"SC-MF · SC-P",
        d:["Tests objects with help.","“The nail stuck.”"],
        a:["Tests fairly and concludes that only some metals are magnetic.","“Iron and steel were magnetic, but aluminium and copper weren't — so not all metals are magnetic.”"],
        f:["Explains the pattern and uses it to predict.","“Anything with iron in it is magnetic, so I predict steel scissors will be.”"],
        i:["I tested with help.","I can say which metals are magnetic.","I can explain the pattern and predict."] },
      { c:"Poles & fields", code:"SC-MF",
        d:["Says magnets stick.","“They stick together.”"],
        a:["Explains attract/repel with poles and describes a field.","“N and S attract, N and N repel. The field is strongest at the poles.”"],
        f:["Uses field lines to explain what happens.","“Field lines join between N and S, but push apart between two Ns — that's why they repel.”"],
        i:["I know magnets stick.","I can explain poles and fields.","I can use field lines to explain."] },
      { c:"Evaluating a claim", code:"SC-P · SS-H",
        d:["Gives an opinion.","“I think it was a compass.”"],
        a:["Uses evidence for and against the Olmec compass.","“It points in a fixed direction, but it's broken and there's no writing saying it was used that way.”"],
        f:["Explains what evidence would settle it and why scientists disagree.","“If we found more bars like it near maps or buildings facing the same way, I'd be more convinced.”"],
        i:["I can give an opinion.","I can use evidence for and against.","I can explain what would settle the question."] }
    ],
    plan:{
      prior:"Weeks 1–5: electricity; conductors (metals). Y5 science: forces.",
      kc:["Thinking","Managing self","Participating & contributing"],
      sequence:[
        ["0–6","Field Transmission","Mateo's compass is lost; Glyph Check; LI/SC; safety.","Recall."],
        ["6–20","Excavate","What's magnetic? tester; magnetic field visualiser; Olmec compass weigh-up; Hononga.","Predict, observe, evaluate."],
        ["20–24","Big Project launch","Science Big Project: My Fair Test.","Choose a question; goal."],
        ["24–40","Choose Your Path","Kits out.","Investigate / build a compass / court."],
        ["40–45","Through the Lens","Psalm 32:8.","Discuss; pray."],
        ["45–50","Decode & Exit","Clue (2); count needles back.","Solve; self-assess."]
      ],
      diff:{
        supported:"Picture tables; step cards; pair roles.",
        esol:"Demonstration; visual field lines.",
        learning:"Hands-on testing first; fewer objects.",
        flying:"Field-line explanations; evidence that would settle the debate."
      },
      assess:{
        lookFor:["Not all metals are magnetic","Poles explained","Evidence-based verdict"],
        evidence:["Tables","Compass test","Exit self-assessment"]
      },
      inquiry:["Did aluminium surprise students?","Did the court debate stay evidence-based?","Big Project fair-test questions — check they're testable."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"mateo", meta:"Lost in the valley",
        msg:"Disaster — my **compass** is gone! Without it we can't follow the folio's map. But here's a thought: what if the ancient people of Mexico had compasses too? There's a 3,000-year-old **Olmec** bar of stone that some scientists think might be the **oldest compass in the world**…",
        notes:[["SAY","Read the message."],["ASK","“How does a compass work?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:"real", qs:[
          { q:"Why is Mexico City sinking?", a:"Pumping groundwater makes the lake-bed clay shrink." },
          { q:"Name a conductor of electricity.", a:"Copper (or any metal)." },
          { q:"What's a non-contact force?", a:"A push or pull that works without touching (e.g. gravity, magnetism)." }],
        notes:[["SAY","Whiteboards; show on 3."],["CLICK","→ flips."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and SC."]] },
      { type:"safety", phase:"transmission", fs:"real", title:"Magnet safety", items:[
          { icon:"🪡", t:"Needles", d:"Carry point-down. We count them out and back in." },
          { icon:"📱", t:"Devices", d:"Keep magnets away from phones, laptops and cards." },
          { icon:"🧲", t:"Pinch!", d:"Strong magnets snap together — keep fingers clear." }],
        notes:[["SAFETY","Read the rules."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Test it", title:"What's magnetic?", ix:"magtest",
        notes:[["CLICK","Tap each item. Predict first!"],["ASK","After the aluminium can: “It's a metal — why didn't it stick?”"],["LISTEN","Only things with iron (or nickel/cobalt) are magnetic; steel contains iron."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"See the invisible", title:"Magnetic field", ix:"magfield",
        notes:[["CLICK","Sprinkle filings. Then N → S attract, and N ↔ N repel."],["CLICK","Move the mouse around: the compass needle follows the field."],["SAY","“Earth is a giant magnet. A compass needle lines up with Earth's field — that's why it points north.”"],["PACE","Aim for minute 14."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Science on trial", title:"The Olmec compass", ix:"weighup",
        cfg:{ claim:"“A 3,000-year-old Olmec bar is the world's oldest compass.”", forLabel:"COMPASS", againstLabel:"NOT PROVEN",
          intro:"In 1967 archaeologists found a small polished bar of **hematite** (an iron ore) at **San Lorenzo**. Tap each card: evidence **for** or **against**?",
          outro:"Scientists still disagree! The bar is magnetic and points a fixed way — but there's no proof it was used as a compass. A good scientist says: **“Maybe — we need more evidence.”**",
          items:[
            { t:"It's magnetic", side:"for", d:"Floated on cork, the bar **turns to point in the same direction** every time." },
            { t:"Carefully shaped", side:"for", d:"It was polished flat with a **groove** along it — perhaps to aim it, like a pointer." },
            { t:"Very old", side:"for", d:"It dates to about **1000 BCE** — the Olmec were skilled at working iron-rich stone." },
            { t:"It's broken", side:"against", d:"It's only a **fragment** — we don't know its original shape or use." },
            { t:"Points off-north", side:"against", d:"It points about **35° west of north**, not exactly north." },
            { t:"Only one", side:"against", d:"No other bars like it, and **no writing or pictures** showing it used as a compass." }] },
        notes:[["SAY","“Scientists test claims with evidence — just like historians.”"],["CLICK","Tap each card; ask the class to vote first."],["PACE","Aim for minute 20."]] },
      { type:"hononga", phase:"excavate", fs:"real", title:"Navigating without a compass",
        body:"Polynesian navigators crossed thousands of kilometres of ocean to Aotearoa **without a compass** — reading the **stars**, ocean **swells**, clouds and **birds**.\n\nToday, voyaging groups sail modern **waka hourua** (double-hulled canoes) using the same knowledge.",
        notes:[["ASK","“What would you need to learn to navigate without a compass?”"]] },
      bigProject("Science", "My Fair Test", "Design **your own investigation** on an electricity or magnetism question — change one thing, keep the rest the same, measure and explain.", "your question (e.g. *Does the number of cells change how bright a bulb is?* *Which shape of magnet is strongest?*)"),
      { type:"paths", phase:"paths", fs:null, notes:[["SAY","Explain paths; kits out."],["CLICK","Start the timer."],["SAFETY","Count needles out."]] },
      { type:"lens", phase:"lens", fs:null, notes:[["CLICK","→ reveals each move."],["SAY","Read Psalm 32:8."],["ASK","Use both questions."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["ASK","“How many poles?” (2)"],["CLICK","2 dots → Check."],["SAFETY","Count needles back in."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = cacao beans."]] }
    ]
  };

  /* ======================= THURSDAY · TECHNOLOGY ======================= */
  const thu = {
    id:"w06-thu", week:6, day:"thu", subject:"technology", duration:50,
    title:"Inputs & Decisions: the Secret Door Code", guide:"mateo",
    codes:["DT-CT","TE-TK","TE-TP"],
    coverage:"Digital Technologies — Computational Thinking (Progress Outcomes 1–2): inputs; selection (if/else decisions) in algorithms; testing and debugging. Technology (NZC 2007 L3): input → process → output systems.",
    li:"We are learning to use an input (a button) and an if/else decision in code.",
    sc:["I can explain input → decision → output.","I can code a button that unlocks a door (green) or keeps it locked (red).","I can test my code, including tricky ‘edge cases’."],
    vocab:[
      { w:"input", def:"information going into a system (e.g. a button press)" },
      { w:"selection / decision", def:"code that chooses what to do: if… else…" },
      { w:"if / else", def:"IF something is true do this, ELSE (otherwise) do that" },
      { w:"condition", def:"the question the computer checks (e.g. is the button pressed?)" },
      { w:"edge case", def:"an unusual situation that might break your code" }
    ],
    prep:{ min:3, items:["Projector for the simulator","Optional Arduino: push button on pin 2 (with 10 kΩ pull-down resistor), red LED on 13, green LED on 11","Paper for flowcharts"] },
    safety:["Real boards: USB power only; resistors on every LED."],
    hononga:"A **rāhui** is a restriction placed on an area by tangata whenua — for example after a drowning, or to let kaimoana recover. It works like an **if/then** rule: *if* a rāhui is in place, *then* nobody gathers food there until it's lifted. Rules like this protect people and places.",
    paths:[
      { id:"A", name:"The Scribe", product:"Decision Flowchart", steps:["Draw a flowchart for the door lock with a diamond ◇ for the decision.","Label the YES and NO arrows.","Add a second decision (e.g. night time?)."], flying:"Write it as code-like sentences: if… else…" },
      { id:"B", name:"The Builder", product:"Code the Lock", steps:["Run the lock in the simulator (or Arduino).","Hold the button: does it go green? Let go: red?","Swap the THEN and ELSE parts — what happens?"], flying:"Add a buzzer idea: what output would warn of an intruder?" },
      { id:"C", name:"The Messenger", product:"Hacker Test", steps:["Swap lock designs with another team.","Try to ‘break’ it: edge cases (hold forever? tap fast?).","Report: what worked, what broke, how to fix it."], flying:"Design a 2-button code that's harder to crack." }
    ],
    supportedShort:"flowchart shape cards; simulator pre-loaded; test checklist.",
    lens:{
      pillar:"panga", title:"Guard your heart",
      look:"Look at the lock: it checks a condition and decides what to let in. Our choices work a bit like that too.",
      ref:"Proverbs 4:23",
      paraphrase:"Above all else, guard your heart, for everything you do flows from it.",
      talk:[
        { q:"What does it mean to ‘guard your heart’? What might we choose NOT to let in?", listen:"Being careful what we watch, listen to and believe; not letting in hate, lies or unkindness; letting in what's good and true." },
        { q:"Life choices are like if/then decisions. Give an example of a wise if/then rule for life.", listen:"If I'm angry, then I'll pause before speaking; if someone is left out, then I'll invite them (Pānga — bringing God's kingdom)." }
      ],
      live:"Write your own wise **if/then** rule for this week."
    },
    clue:{ prompt:"The vault opens only if the button is pressed three times in a row. How many presses are needed?", answer:3, explain:"Three presses → 3. Clue saved for the seal!" },
    next:"Friday — Aztec geometric design and card stamping. Seal VI!",
    rubric:[
      { c:"Input → decision → output", code:"TE-TK · DT-CT",
        d:["Names the button and light.","“You press it and it lights.”"],
        a:["Explains input, decision and output.","“The button is the input, the if/else is the decision, and the green or red LED is the output.”"],
        f:["Applies it to another real system.","“A pedestrian crossing: button (input) → if pressed, change lights (decision) → green man (output).”"],
        i:["I can name the parts.","I can explain input → decision → output.","I can explain a real system this way."] },
      { c:"Coding a decision", code:"DT-CT",
        d:["Runs the code with help.","Presses the button and watches."],
        a:["Explains the if/else and predicts the result.","“If pressed, green on and red off; else red on and green off.”"],
        f:["Changes the decision and predicts new behaviour.","“If I swap THEN and ELSE, the door unlocks when NOT pressed — a terrible lock!”"],
        i:["I ran the code with help.","I can explain and predict the if/else.","I can change the decision and predict the result."] },
      { c:"Testing & edge cases", code:"DT-CT · TE-TP",
        d:["Tests once.","“It works.”"],
        a:["Tests several cases and records results.","“Pressed: green ✓. Not pressed: red ✓. Held down: stays green ✓.”"],
        f:["Finds an edge case and suggests a fix.","“Anyone can just hold the button — we need a secret pattern, not just one press.”"],
        i:["I tested once.","I tested several cases.","I found an edge case and suggested a fix."] }
    ],
    plan:{
      prior:"Weeks 4–5: microcontrollers, sequences, loops. Week 3: switches as inputs.",
      kc:["Thinking","Managing self","Participating & contributing"],
      sequence:[
        ["0–6","Field Transmission","Mateo's vault lock; Glyph Check; LI/SC.","Recall."],
        ["6–20","Excavate","Input → decision → output; human if/else game; Arduino lock simulator; Hononga (rāhui).","Predict, test, explain."],
        ["20–24","Big Project launch","Technology Big Project: Temple of Light.","Choose; goal."],
        ["24–40","Choose Your Path","Flowchart / code / hacker test.","Design, test."],
        ["40–45","Through the Lens","Proverbs 4:23.","Discuss; if/then rule."],
        ["45–50","Decode & Exit","Clue (3).","Solve; self-assess."]
      ],
      diff:{
        supported:"Flowchart cards; pre-loaded simulator.",
        esol:"Gesture if/else (thumbs up/down); colour-coded outputs.",
        learning:"Human if/else game; step mode.",
        flying:"Two conditions; secret patterns; real-world systems."
      },
      assess:{
        lookFor:["IPO with decision","Predicts if/else","Edge case identified"],
        evidence:["Flowcharts","Test records","Exit self-assessment"]
      },
      inquiry:["Did students grasp that the decision is checked every loop?","Temple of Light ideas — note who wants to use Arduino.","Next: sound output (Week 7)."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"mateo", meta:"The codex vault",
        msg:"After what happened to Sofía's map, we need a **vault** for the codex. I've built a lock with a hidden **button**. The microcontroller must **decide**: IF the button is pressed, unlock (green light). ELSE stay locked (red light). Computers make millions of decisions like this every second!",
        notes:[["SAY","Read the message."],["ASK","“What other machines make decisions?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:"real", qs:[
          { q:"What does loop() do?", a:"Repeats the code forever." },
          { q:"Like poles…? Opposite poles…?", a:"Like poles repel; opposite poles attract." },
          { q:"What is an input? Give an example.", a:"Information going in — e.g. a button, a light sensor." }],
        notes:[["SAY","Whiteboards; show on 3."],["CLICK","→ flips."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and SC."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"How computers choose", title:"Input → decision → output", h:"480px", cards:[
          { big:"🔘", color:"#2E9FB0", t:"Input", d:"The **button**: pressed or not pressed?" },
          { big:"◇", color:"#D9A23A", t:"Decision", d:"**IF** pressed → do this. **ELSE** → do that. In a flowchart it's a **diamond**." },
          { big:"💡", color:"#1F7A5A", t:"Output", d:"**Green** = unlocked. **Red** = locked." }],
        notes:[["SAY","“The microcontroller checks the button again and again — thousands of times a second.”"]] },
      { type:"discussion", phase:"excavate", fs:"real", kicker:"Human if/else", q:"**IF** I hold up the **green** card, stand up. **ELSE**, sit down.", sub:"You are the computer. Watch the input, make the decision, do the output!", talk:30,
        notes:[["SAY","Play 30 seconds: flash green/red cards (or thumbs up/down). Speed up!"],["ASK","“What was the input? The decision? The output?”"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Code a decision", title:"The secret door lock", ix:"arduino",
        cfg:{ title:"Door lock", button:{ pin:2, label:"SECRET BUTTON" }, leds:[{ pin:11, color:"#2BD96B", label:"UNLOCKED" }, { pin:13, color:"#FF5A5F", label:"LOCKED" }],
          program:[{ op:"if", pin:2, then:[{ op:"on", pin:11 }, { op:"off", pin:13 }], els:[{ op:"on", pin:13 }, { op:"off", pin:11 }] }, { op:"wait", ms:100 }] },
        notes:[["CLICK","Press ▶ Run. The red LOCKED light is on."],["CLICK","Press and HOLD the secret button on the breadboard: green! Let go: red."],["CLICK","Stop, then use ⏭ Step while holding / not holding the button: watch which branch the highlight follows."],["ASK","Edge case: “Is a single button a good lock? How could a thief get in?”"],["NOTE","Real board: button on pin 2 with a 10 kΩ pull-down resistor; LEDs on 11 and 13 with 220 Ω resistors."],["PACE","Aim for minute 18."]] },
      { type:"hononga", phase:"excavate", fs:"real", title:"Rāhui — a rule that protects",
        body:"A **rāhui** is a restriction placed on an area by tangata whenua — for example after a drowning, or to let kaimoana (seafood) recover.\n\nIt works like an **if/then** rule: *if* a rāhui is in place, *then* nobody gathers food there until it is lifted.",
        notes:[["ASK","“Why do communities need rules like this?”"],["NOTE","Check local examples with your Māori lead."]] },
      bigProject("Technology", "Temple of Light", "Design, build and (optionally) code an **interactive diorama**: a temple that lights up, beeps or moves when something happens.", "your stakeholder, your brief, and your input → output (switch, pressure plate, button — or Arduino)"),
      { type:"paths", phase:"paths", fs:null, notes:[["SAY","Explain paths."],["CLICK","Start the timer."]] },
      { type:"lens", phase:"lens", fs:null, notes:[["CLICK","→ reveals each move."],["SAY","Read Proverbs 4:23."],["ASK","Use both questions."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["ASK","“How many presses?” (3)"],["CLICK","3 dots → Check."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = cacao beans."]] }
    ]
  };

  /* ======================= FRIDAY · ART ======================= */
  const fri = {
    id:"w06-fri", week:6, day:"fri", subject:"art", duration:50,
    title:"Aztec Geometric Design & Card Stamping", guide:"rosa",
    codes:["VA-UC","VA-PK","VA-DI","MA"],
    coverage:"Visual Arts (NZC 2007, Level 3): understanding art in context (Aztec stamps and geometric motifs); practical knowledge (relief printing, repeat patterns: block, half-drop, mirror); developing ideas. Maths link: transformation (translation, reflection, rotation).",
    li:"We are learning to design and print a repeating geometric pattern with a card relief stamp.",
    sc:["I can use Aztec-inspired geometric motifs (step-frets, zigzags, spirals).","I can make a card relief stamp.","I can print a neat repeat pattern (block or half-drop)."],
    vocab:[
      { w:"motif", def:"a shape repeated in a design" },
      { w:"relief print", def:"a print made from raised parts of a surface" },
      { w:"step-fret", def:"a stepped spiral motif common in Mesoamerican design" },
      { w:"block repeat", def:"prints in straight rows and columns" },
      { w:"half-drop", def:"every second column dropped by half a stamp" },
      { w:"transformation", def:"moving a shape by sliding, flipping or turning" }
    ],
    prep:{ min:10, items:["Thick card squares (about 8 × 8 cm) and scrap card","PVA glue, scissors","Paint (thin) or ink pads; sponges or rollers","Codex books (panel 6) and scrap paper for test prints","Newspaper to protect desks"] },
    safety:["Scissors: walk carefully.","Paint: aprons/old shirts; wash hands after printing."],
    hononga:"Across the Pacific, **siapo** (Sāmoa) and **ngatu** (Tonga) are bark cloth decorated by rubbing dye over carved or stitched **pattern boards** — a relief printing method like the Aztec stamps. Many Pasifika families in Aotearoa treasure these as taonga for weddings, funerals and celebrations.",
    paths:[
      { id:"A", name:"The Scribe", product:"Motif Sketchbook", steps:["Sketch 6 Aztec-inspired motifs in your journal.","Choose your best and explain why.","Plan 2 repeat patterns on squared paper."], flying:"Design a motif that combines two motifs into one." },
      { id:"B", name:"The Builder", product:"Stamp & Print Folio VI", steps:["Make a card relief stamp (follow the build steps).","Test-print on scrap paper.","Print a neat repeat on panel 6 of your codex."], flying:"Print a half-drop or two-colour repeat." },
      { id:"C", name:"The Messenger", product:"Team Banner", steps:["Design a banner for your expedition team using a repeat pattern.","Explain what your motifs mean to your team.","Present it to the class."], flying:"Combine block and mirror repeats in one design." }
    ],
    supportedShort:"motif templates to trace; pre-cut card shapes; printing step cards.",
    lens:{
      pillar:"manaaki", title:"Wonderfully made",
      look:"Look at the prints: the same stamp, printed again and again — yet every print is slightly different. No two are exactly the same.",
      ref:"Psalm 139:13–14",
      paraphrase:"For you created my inmost being; you knit me together in my mother's womb. I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.",
      talk:[
        { q:"Every print from the same stamp is a little different. How is that like people?", listen:"We're all made by God, all human, yet each person is unique and precious." },
        { q:"What does it mean to be ‘wonderfully made’? How should that change how we treat others?", listen:"Each person has value from God; respect differences; no one is a ‘mistake’ (Manaaki — serving others)." }
      ],
      live:"Gallery walk: find a print that's unique and tell its maker what makes it special."
    },
    clue:{ prompt:"Folio Seal: add the four Glyph Clues from Monday to Thursday.", answer:11, explain:"3 + 3 + 2 + 3 = 11 — two bars and one dot." },
    next:"Week 7 — The Great Market: daily life, trade and an electromagnet.",
    rubric:[
      { c:"Context", code:"VA-UC",
        d:["Says the Aztecs used patterns.","“They had patterns.”"],
        a:["Explains Aztec stamps and motifs.","“The Aztecs used clay stamps to print step-frets and zigzags onto cloth and paper.”"],
        f:["Compares with another printing tradition respectfully.","“Like siapo pattern boards, stamps let people repeat a design quickly and share its meaning.”"],
        i:["I know they used patterns.","I can explain Aztec stamps and motifs.","I can compare with another tradition."] },
      { c:"Making the stamp", code:"VA-PK",
        d:["Makes a stamp with help; parts are loose or thin.","Shapes come off when printing."],
        a:["Makes a sturdy stamp with a clear raised motif.","Card shapes glued firmly; the motif prints clearly."],
        f:["Makes a detailed stamp with layered relief.","Two layers of card give strong and soft parts in the print."],
        i:["I made a stamp with help.","My stamp prints clearly.","My stamp has detail and layers."] },
      { c:"Repeat pattern", code:"VA-DI · MA",
        d:["Prints randomly.","Prints at different angles and gaps."],
        a:["Prints a neat block or half-drop repeat.","Even spacing in rows; half-drop columns line up."],
        f:["Uses transformations creatively and explains choices.","Mirror and half-drop combined with two colours to create rhythm."],
        i:["My prints are random.","My repeat is neat and even.","I used transformations creatively and can explain."] }
    ],
    plan:{
      prior:"Week 3: number art repeats (block, mirror, half-drop, rotate). Week 4: radial design.",
      kc:["Thinking","Managing self","Using language, symbols & texts"],
      sequence:[
        ["0–6","Field Transmission","Doña Rosa: Aztec stamps; Glyph Check; LI/SC.","Recall the week."],
        ["6–16","Excavate","Aztec motifs; Stamp studio (motifs × repeats); build steps; Hononga (siapo/ngatu).","Observe, choose."],
        ["16–19","Big Project launch","Art Big Project: My Codex (+ artist statement).","Goal."],
        ["19–40","Choose Your Path (21 min)","Make stamps; print panel 6.","Sketch / print / banner."],
        ["40–45","Through the Lens","Psalm 139; gallery walk.","Compliment uniqueness."],
        ["45–50","Folio Seal","3 + 3 + 2 + 3 = 11; the Collector's theft.","Solve; discuss."]
      ],
      diff:{
        supported:"Pre-cut shapes; trace templates.",
        esol:"Demonstration; picture steps.",
        learning:"Larger shapes; ink pad instead of paint.",
        flying:"Layered relief; combined transformations."
      },
      assess:{
        lookFor:["Explains Aztec stamps","Clear relief stamp","Neat repeat"],
        evidence:["Codex panel 6 (photo)","Test prints","Exit self-assessment"]
      },
      inquiry:["Printing mess management — what to change next time?","Did students link repeats to Week 3 transformations?","Big Project goals all recorded?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"rosa", meta:"Restoration tent",
        msg:"Children, Folio VI is covered in **stamped** patterns — step-frets and zigzags pressed again and again. The Aztecs carved little clay stamps called **sellos** to print onto cloth and paper. Today you'll make your own stamp from card, and print a pattern fit for a codex!",
        notes:[["SAY","Read the message."],["ASK","“Where do we see stamps or printing today?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:"real", title:"This week so far", qs:[
          { q:"What were chinampas?", a:"Fields built in the lake from mud and plants." },
          { q:"Which materials are magnetic?", a:"Iron and things containing iron, like steel." },
          { q:"What does IF… ELSE… do in code?", a:"Chooses between two actions depending on a condition." }],
        notes:[["SAY","Whole-week review."],["CLICK","→ flips."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and SC."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Aztec design", title:"Geometric motifs", h:"500px", cards:[
          { big:"⌐¬", color:"#B3262E", t:"Step-fret", d:"A stepped spiral, seen on temple walls and pottery all over Mesoamerica." },
          { big:"⋀⋀", color:"#D9A23A", t:"Zigzag", d:"Sharp, energetic lines — like mountains or lightning." },
          { big:"@", color:"#1F7A5A", t:"Spiral", d:"Curling shapes — like wind, water or growing plants." },
          { big:"◆", color:"#2E9FB0", t:"Sellos", d:"Clay **stamps** (flat or rolling) printed these motifs onto cloth and paper." }],
        notes:[["ASK","“Which motif feels calm? Which feels energetic?”"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Try every repeat", title:"Stamp studio", ix:"stamp", paper:true,
        notes:[["CLICK","Choose a motif, then try Block → Half-drop → Mirror → Rotate. Change ink colour."],["ASK","“Which repeat makes the strongest pattern? Why?”"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Build guide", title:"Make a card stamp", ix:"stepper",
        cfg:{ safety:"⚠️ Thin paint works best. Protect desks with newspaper; wash hands after printing.", steps:[
          { t:"Collect your parts", d:"A **thick card base** (about 8 × 8 cm) and **scrap card** for shapes.", art:"stampStep", n:0 },
          { t:"Sketch your motif", d:"Draw a **bold, simple** motif on the base. Remember: the print comes out **back-to-front**!", art:"stampStep", n:1 },
          { t:"Build the relief", d:"Cut card strips and **glue them on the lines**. Raised parts will print; low parts stay blank.", art:"stampStep", n:2 },
          { t:"Ink it", d:"Roll or dab paint **thinly** on the raised parts. Too much paint = blobs.", art:"stampStep", n:3 },
          { t:"Press & repeat", d:"Press firmly, lift straight up, and **repeat** — block or half-drop. Test on scrap first!", art:"stampStep", n:4 }] },
        notes:[["CLICK","Step through; leave it up while students build."],["NOTE","Let glue dry 5 minutes before inking (use this time for test sketches)."],["PACE","Aim for minute 16."]] },
      { type:"hononga", phase:"excavate", fs:"real", title:"Siapo & ngatu",
        body:"**Siapo** (Sāmoa) and **ngatu** (Tonga) are bark cloth decorated by rubbing dye over carved or stitched **pattern boards** — relief printing, like the Aztec stamps.\n\nMany Pasifika families in Aotearoa treasure them for weddings, funerals and celebrations.",
        notes:[["ASK","Invite any Pasifika students to share (only if they want to)."]] },
      bigProject("Art", "My Codex", "Finish your **10-panel screenfold codex** (one panel each Friday) and write a short **artist statement** about your favourite panel.", "the theme for your last panels and the panel you'll feature in your statement"),
      { type:"paths", phase:"paths", fs:null, minutes:21, notes:[["SAY","Explain paths; panel 6 of the codex."],["CLICK","Start the timer."]] },
      { type:"lens", phase:"lens", fs:null, notes:[["CLICK","→ reveals each move."],["SAY","Read Psalm 139:13–14. Then the gallery walk."]] },
      { type:"folioseal", phase:"decode", fs:"story",
        notes:[["SAY","“Seal VI!”"],["CLICK","3 + 3 + 2 + 3 = 11. Build ▬▬ ● → Break the seal."]] },
      { type:"intercept", phase:"decode", fs:"story",
        msg:"Thank you for the map, navigator. Don't worry — I'll look after it far better than you ever could. Finders keepers. — C.",
        ask:"Is it ever right to take something because you say you'll look after it better? (Think about museums and taonga.)",
        notes:[["SAY","Read in the Collector's voice. Sofía's map is gone!"],["LISTEN","Taking without permission is stealing; owners/communities should decide; some museums are now returning taonga (e.g. Te Papa's repatriation work)."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess; prints dry flat."],["CLICK","C = cacao beans."]] }
    ]
  };

  FC.WEEKS[6] = {
    n:6,
    story:"The trail crosses into Aztec lands. The team watches Tenochtitlan rise on its lake, discovers that Mexico City is sinking, tests magnets and the Olmec ‘compass’ after Mateo's compass is lost, codes a secret vault lock, and stamps Aztec patterns. Every subject launches its Big Project. Seal VI shows a great marketplace — just as the Collector steals Sofía's map.",
    hononga:"Waka and founding stories (Mon); Ōtautahi and liquefaction (Tue); Polynesian navigation (Wed); rāhui as an if/then rule (Thu); siapo and ngatu pattern boards (Fri). Check local framing with your Māori lead / Ngāi Tahu rūnanga.",
    seal:{
      answer:11,
      instruction:"Add the four **Glyph Clues** and build the total.",
      reveal:"🟡 **Folio VI unsealed:** a crowd of market stalls — cacao beans, feathers, cloth and pots. Dr Canul: “This is **Tlatelolco**, the great market of the Aztecs!” Next week: *The Great Market*.",
      art:() => { const v = FC.art.marketFolio(); v.setAttribute("style", "width:100%;height:100%"); return v; }
    },
    lessons:[mon, tue, wed, thu, fri]
  };
})(window.FC);
