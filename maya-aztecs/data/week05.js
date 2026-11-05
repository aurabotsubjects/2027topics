/* ==========================================================
   WEEK 5 — FOLIO V · THE SILENT CITIES
   ========================================================== */
(function(FC){
  "use strict";

  /* ======================= MONDAY · HISTORY ======================= */
  const mon = {
    id:"w05-mon", week:5, day:"mon", subject:"history", duration:50,
    title:"Kings, City-States & the Great Collapse", guide:"itzel",
    codes:["SS-H","SS-P","RE"],
    coverage:"Y5 History (2027 Social Sciences): an ancient civilisation's government and leadership; cause and consequence; weighing evidence for competing explanations; how new technology (LiDAR) changes historical understanding.",
    li:"We are learning how Classic Maya city-states were ruled, and to weigh evidence for why many cities were abandoned.",
    sc:["I can describe how a Maya city-state was ruled by a holy lord (k'uhul ajaw).","I can explain how LiDAR helps archaeologists find hidden cities.","I can weigh evidence for different causes of the Classic Maya collapse."],
    vocab:[
      { w:"city-state", def:"a city that rules itself and the land around it, like a small country" },
      { w:"k'uhul ajaw", say:"k'oo-HOOL ah-HOW", def:"‘holy lord’ — the title of a Classic Maya king" },
      { w:"rival", def:"someone competing against you" },
      { w:"LiDAR", say:"LY-dar", def:"laser scanning from a plane that ‘sees’ the ground through trees" },
      { w:"collapse", def:"when a society's cities and government break down" },
      { w:"hypothesis", say:"hy-POTH-uh-sis", def:"a possible explanation that can be tested with evidence" },
      { w:"drought", say:"drowt", def:"a long time with much less rain than usual" }
    ],
    prep:{ min:2, items:["Expedition Journals","Optional: sticky notes for ranking causes (Path B)"] },
    safety:[],
    hononga:"**Wairau Bar** near Blenheim is one of the earliest places people lived in Aotearoa (around 1280s). Archaeologists dug there from the 1940s, and ancestral remains (kōiwi) were taken away. In **2009** they were returned to **Rangitāne o Wairau** and reburied with respect. Archaeology must honour **wāhi tapu** and the people whose ancestors are being studied.",
    paths:[
      { id:"A", name:"The Scribe", product:"Detective's Case File", steps:["Case: Why did the southern Maya cities empty?","List the evidence for drought, war and deforestation.","Write your verdict with your best evidence."], flying:"Explain why most experts think it was a mix of causes." },
      { id:"B", name:"The Builder", product:"Causes Pyramid", steps:["Build a pyramid of causes: most important at the top.","Each block needs one piece of evidence.","Present your ranking to a partner."], flying:"Show how one cause made another worse (arrows!)." },
      { id:"C", name:"The Messenger", product:"Panel Debate", steps:["Groups of 3: Drought vs War vs Deforestation.","Each expert gives 2 pieces of evidence.","The audience votes — then discusses a ‘mix’."], flying:"Chair the debate and summarise both sides fairly." }
    ],
    supportedShort:"evidence cards to sort; case-file template; debate role cards.",
    lens:{
      pillar:"panga", title:"Unless the Lord builds the house",
      look:"Look at the silent cities: great pyramids, powerful kings, proud inscriptions — and then the kings fell silent and the forest grew back.",
      ref:"Psalm 127:1; Genesis 2:15",
      paraphrase:"Unless the Lord builds the house, the builders labour in vain… The Lord God took the man and put him in the Garden of Eden to work it and take care of it.",
      talk:[
        { q:"The Maya kings built huge cities and boasted about their power. What does Psalm 127 say makes building last?", listen:"Building with God, not just our own pride; wisdom, justice and care matter more than size or power." },
        { q:"Genesis says ‘work it and take care of it’. What could a whole society today learn from the collapse?", listen:"Care for land and water; plan for drought; avoid endless rivalry; share resources (Pānga — bringing God's kingdom)." }
      ],
      live:"Write one way our class can **care for** something we share (our room, garden, field)."
    },
    clue:{ prompt:"Pakal became king of Palenque at age 12. Write 12 the Maya way.", maya:null, answer:12, explain:"Two bars (10) and two dots (2) = 12. Clue saved!" },
    next:"Tuesday — deforestation today and the people of the forest.",
    rubric:[
      { c:"Maya government", code:"SS-H",
        d:["Says the Maya had kings.","“They had kings.”"],
        a:["Explains city-states ruled by holy lords, with an example.","“Each city had its own k'uhul ajaw. Tikal and Calakmul were rivals and fought for power.”"],
        f:["Explains how kings used monuments and religion to show power.","“Kings carved stelae showing themselves as holy and powerful — to make people loyal.”"],
        i:["I know the Maya had kings.","I can explain city-states and their kings.","I can explain how kings showed their power."] },
      { c:"New evidence (LiDAR)", code:"SS-P",
        d:["Says LiDAR is a laser.","“They use lasers.”"],
        a:["Explains how LiDAR reveals hidden structures and why that matters.","“Laser pulses bounce off the ground through gaps in the trees, showing pyramids and roads we couldn't see.”"],
        f:["Explains how LiDAR changed historians' ideas.","“LiDAR showed far more houses and roads — so there were millions more people than we thought.”"],
        i:["I can say what LiDAR is.","I can explain how it finds hidden cities.","I can explain how it changed what historians think."] },
      { c:"Cause & consequence", code:"SS-H · SS-P",
        d:["Gives one cause.","“There was a drought.”"],
        a:["Gives evidence for two or more causes.","“Lake mud shows bad droughts, and carvings show more wars after 750 CE.”"],
        f:["Weighs causes and explains how they connect.","“Drought was probably the trigger, but war and cutting down forests made it worse — they fed each other.”"],
        i:["I can give one cause.","I can give evidence for two causes.","I can weigh the causes and show how they connect."] }
    ],
    plan:{
      prior:"Week 3: decipherment showed real kings; Week 4: Long Count dates and the last date (909 CE).",
      kc:["Thinking","Using language, symbols & texts","Relating to others"],
      sequence:[
        ["0–6","Field Transmission","Dr Canul: the last date points to a silent city; Glyph Check; LI/SC.","Recall; predict."],
        ["6–20","Excavate","City-states & kings; Pakal's tomb; LiDAR reveal; Collapse evidence board; Hononga (Wairau Bar).","Scan, sort evidence, discuss."],
        ["20–38","Choose Your Path","Paths; roam with the rubric.","Case file / pyramid / debate."],
        ["38–45","Through the Lens","Psalm 127:1; Genesis 2:15.","Discuss; care goal."],
        ["45–50","Decode & Exit","Clue (12).","Solve; self-assess."]
      ],
      diff:{
        supported:"Evidence cards pre-matched with pictures; case-file template.",
        esol:"Visual LiDAR before/after; key words with icons (☀️⚔️🌳).",
        learning:"Sort 3 cards only; oral explanation.",
        flying:"Link to modern drought and climate; judge reliability of evidence."
      },
      assess:{
        lookFor:["Explains holy lords and rivalry","Explains LiDAR","Weighs multiple causes with evidence"],
        evidence:["Path products","Evidence-board discussion","Exit self-assessment"]
      },
      inquiry:["Did students move beyond a single cause?","How did students respond to the Wairau Bar story about respect for ancestors?","Link to Tuesday: deforestation then and now."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"itzel", meta:"Folio V · the silent city",
        msg:"Team — the last date in Folio IV, 909 CE, is when the Maya kings fell **silent**. Folio V shows a map to one of their cities, swallowed by jungle. From the air you'd see nothing but trees. Luckily, archaeologists have a secret weapon: **lasers**.",
        notes:[["SAY","Read the message."],["ASK","“How could lasers help find a city hidden under a jungle?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:"real", title:"Remember Week 4?", qs:[
          { q:"How many days are in the Tzolk'in and the Haab'?", a:"260 and 365." },
          { q:"Why didn't the world end in 2012?", a:"13.0.0.0.0 was just the end of a cycle — like an odometer." },
          { q:"Name a conductor and an insulator.", a:"Copper (conductor), rubber (insulator)." }],
        notes:[["SAY","Whiteboards; show on 3."],["CLICK","→ flips."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and SC."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Rival kingdoms", title:"Holy lords & city-states", h:"520px", cards:[
          { big:"👑", color:"#D9A23A", t:"K'uhul ajaw", d:"Each city had a **holy lord** who ruled the city and the farms around it — like a small country." },
          { big:"⚔️", color:"#B3262E", t:"Tikal vs Calakmul", d:"Two superpowers fought for centuries, each with allies. Tikal won a big victory in **695 CE**." },
          { big:"🗿", color:"#1F7A5A", t:"Stelae", d:"Kings carved **stone monuments** to record their births, crownings and wars — and show their power." },
          { big:"60+", color:"#2E9FB0", t:"Dozens of cities", d:"There was **never one Maya empire** — dozens of rival city-states." }],
        notes:[["SAY","“The Maya were never one country. Think of dozens of rival kingdoms.”"],["ASK","“What problems might come from lots of rival kingdoms close together?”"]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"A king's tomb", title:"The secret of Pakal", visual:{ artefact:"stela" },
        bullets:["**K'inich Janaab' Pakal** became king of **Palenque** aged **12** in 615 CE and ruled for 68 years.","In 1949 archaeologist **Alberto Ruz** noticed holes in a floor stone of the Temple of the Inscriptions.","After **3 years** clearing a rubble-filled staircase, in **1952** he found Pakal's tomb, with a jade mask."],
        notes:[["SAY","Tell it as a detective story."],["ASK","“Why might the builders have filled the staircase with rubble?”"],["NOTE","Image: artistic reconstruction of a stela."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Seeing through trees", title:"LiDAR reveal", ix:"lidar",
        notes:[["SAY","“A plane fires hundreds of thousands of laser pulses every second. Some slip through the leaves, hit the ground and bounce back. A computer removes the trees.”"],["CLICK","Drag across slowly, or press Auto-scan."],["ASK","“How do we know these are human-made?” (Straight lines, platforms, regular shapes.)"],["NOTE","In 2018 a LiDAR survey found 60,000+ structures in Guatemala. In 2024 a student found a lost city (‘Valeriana’) in old survey data."],["PACE","Aim for minute 14."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Weigh the evidence", title:"Why did the cities empty?", ix:"collapse",
        notes:[["SAY","“Between about 800 and 950 CE, the great southern cities were abandoned. Historians have three main hypotheses.”"],["CLICK","For each card: read, discuss which theory it supports, THEN tap."],["LISTEN","Several causes working together; drought as a trigger."],["PACE","Aim for minute 20."]] },
      { type:"hononga", phase:"excavate", fs:"real", title:"Wairau Bar — respecting the ancestors",
        body:"**Wairau Bar**, near Blenheim, is one of the earliest places people lived in Aotearoa (around the **1280s**).\n\nKōiwi (ancestral remains) dug up decades ago were returned to **Rangitāne o Wairau** in **2009** and reburied. Good archaeology respects **wāhi tapu** and the descendants of the people being studied.",
        notes:[["ASK","“Why does it matter to ask descendants before digging?”"],["NOTE","Check framing with your Māori lead."]] },
      { type:"paths", phase:"paths", fs:null, notes:[["SAY","Explain paths."],["CLICK","Start the timer. Leave the evidence board available (←) for Path A."]] },
      { type:"lens", phase:"lens", fs:null, notes:[["CLICK","→ reveals each move."],["SAY","Read Psalm 127:1 and Genesis 2:15."],["ASK","Use both questions."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["ASK","“Pakal was 12. Write 12.”"],["CLICK","▬▬ ●● → Check."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = cacao beans."]] }
    ]
  };

  /* ======================= TUESDAY · GEOGRAPHY ======================= */
  const tue = {
    id:"w05-tue", week:5, day:"tue", subject:"geography", duration:50,
    title:"Deforestation & the Peoples of the Forest", guide:"sofia",
    codes:["SS-G","SS-C","SS-P"],
    coverage:"Y5 Geography (2027 Social Sciences): deforestation — causes and effects on environments and Indigenous peoples; interpreting aerial/satellite images; considering different perspectives and possible responses.",
    li:"We are learning about the causes and effects of deforestation and the different perspectives people have on it.",
    sc:["I can explain three causes of deforestation.","I can describe effects on the environment and on Indigenous peoples.","I can consider different perspectives and suggest a fair solution."],
    vocab:[
      { w:"deforestation", def:"cutting down or clearing forests over large areas" },
      { w:"cattle ranching", def:"raising cows on large areas of grassland" },
      { w:"Indigenous peoples", def:"the first peoples of a land and their descendants" },
      { w:"perspective", def:"a point of view — how someone sees an issue" },
      { w:"protected area", def:"land where clearing is limited by law" },
      { w:"kaitiakitanga", say:"kai-tee-AH-kee-tah-ngah", def:"guardianship and care of the environment (te reo Māori)" }
    ],
    prep:{ min:2, items:["Expedition Journals","Role cards for Path C (or use the wheel on screen)"] },
    safety:[],
    hononga:"Before people arrived, forest covered most of Aotearoa. Since then, roughly **two-thirds** of it has been cleared — much of it in the last 200 years for farms. Today **kaitiakitanga** (guardianship) guides many iwi and community groups who replant native forest and protect what remains, like the kauri forests threatened by kauri dieback.",
    paths:[
      { id:"A", name:"The Scribe", product:"Persuasive Letter", steps:["Write to a world leader about protecting the Amazon.","Give 3 reasons with evidence.","Respect the farmer's view — suggest a fair solution."], flying:"Include what people in NZ can do as shoppers." },
      { id:"B", name:"The Builder", product:"Cause & Effect Web", steps:["Put DEFORESTATION in the middle.","Causes on one side, effects on the other.","Draw arrows and add a picture to each."], flying:"Add ‘feedback loops’ (an effect that causes more clearing)." },
      { id:"C", name:"The Messenger", product:"Council Role-Play", steps:["Take a role from the perspectives wheel.","Each speaks for 30 seconds at a ‘council meeting’.","The council votes on a fair plan."], flying:"Chair the meeting and find a compromise." }
    ],
    supportedShort:"letter frame; picture cards for the web; role cards with key sentences.",
    lens:{
      pillar:"aroha", title:"The earth is the Lord's",
      look:"Look at the forest and the people who live there: the farmer who needs a living, and the elder whose home is disappearing. Both are loved by God.",
      ref:"Psalm 24:1; Micah 6:8",
      paraphrase:"The earth is the Lord's, and everything in it, the world, and all who live in it… He has shown you what is good. And what does the Lord require of you? To act justly and to love mercy and to walk humbly with your God.",
      talk:[
        { q:"If ‘the earth is the Lord's’, who does the forest really belong to? How should that change the way people treat it?", listen:"It belongs to God; we are caretakers (kaitiaki), not owners; use it with care and gratitude." },
        { q:"What would ‘acting justly’ look like for the Indigenous peoples of the Amazon?", listen:"Respecting their land rights; listening to them; not taking their land; fair trade; standing up for them." }
      ],
      live:"Choose one **justice action**: learn about a product's source, or share what you learned with your family."
    },
    clue:{ prompt:"How many perspectives are on the perspectives wheel?", answer:5, explain:"Farmer, elder, government, consumer, scientist → 5. Clue saved!" },
    next:"Wednesday — series and parallel circuits: lighting the whole camp.",
    rubric:[
      { c:"Causes", code:"SS-G",
        d:["Names one cause.","“People cut trees.”"],
        a:["Explains three causes with detail.","“Land is cleared for cattle ranching, soy farms and logging; new roads open up more forest.”"],
        f:["Explains why causes are linked to world demand.","“Countries far away buy the beef and soy, so demand from shoppers drives the clearing.”"],
        i:["I can name a cause.","I can explain three causes.","I can link causes to what the world buys."] },
      { c:"Effects on environment & people", code:"SS-G · SS-C",
        d:["Says animals lose homes.","“Animals lose their homes.”"],
        a:["Explains effects on the environment and on Indigenous peoples.","“Species lose habitat, less rain is recycled, and Indigenous peoples lose their land, food and culture.”"],
        f:["Uses evidence such as the satellite pattern or Indigenous territories.","“The time-lapse shows Indigenous territories stay greener — their guardianship protects the forest.”"],
        i:["I can describe one effect.","I can explain effects on nature and people.","I can use evidence to explain the effects."] },
      { c:"Perspectives & action", code:"SS-C · SS-P",
        d:["Gives an opinion.","“They should stop.”"],
        a:["Describes two perspectives and suggests a solution.","“Farmers need income and elders need their land — protected areas and better farming could help both.”"],
        f:["Proposes a fair, reasoned plan that considers many groups.","“Pay farmers to keep forest standing, give Indigenous peoples land rights, and label products so shoppers can choose.”"],
        i:["I can give my opinion.","I can describe two perspectives and a solution.","I can design a fair plan for many groups."] }
    ],
    plan:{
      prior:"Week 4: rainforest layers and climate; Monday: Maya deforestation as a possible cause of collapse.",
      kc:["Thinking","Relating to others","Participating & contributing"],
      sequence:[
        ["0–6","Field Transmission","Sofía sees smoke and fishbone roads; Glyph Check; LI/SC.","Recall; predict."],
        ["6–20","Excavate","Causes cards; satellite time-lapse (fishbone, Indigenous territory); perspectives wheel; Hononga.","Observe, discuss, take perspectives."],
        ["20–38","Choose Your Path","Letter / web / council role-play.","Create, argue, compromise."],
        ["38–45","Through the Lens","Psalm 24:1; Micah 6:8.","Discuss; justice action."],
        ["45–50","Decode & Exit","Clue (5).","Solve; self-assess."]
      ],
      diff:{
        supported:"Picture cards; letter frame; partner work.",
        esol:"Visual time-lapse; role cards with key phrases.",
        learning:"Sort causes/effects with pictures; oral role-play.",
        flying:"Feedback loops; NZ consumer link; compromise plans."
      },
      assess:{
        lookFor:["Three causes explained","Effects on people and nature","Two perspectives + a fair solution"],
        evidence:["Path products","Role-play observations","Exit self-assessment"]
      },
      inquiry:["Did students show empathy for the farmer as well as the elder?","Was the Indigenous territory evidence persuasive?","Link to Week 9 (climate) and Week 10 (rights campaign)."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"sofia", meta:"Over the southern Amazon",
        msg:"Navigators, something's wrong down there. Smoke on the horizon, and long straight roads cutting into the forest with side-roads branching off — like the **bones of a fish**. Last week we flew over endless green. Today we'll find out who is clearing it, why, and who gets hurt.",
        notes:[["SAY","Read the message."],["ASK","“Why might someone cut down a rainforest?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:"real", qs:[
          { q:"What does LiDAR do?", a:"Laser pulses from a plane reach the ground through the trees and map hidden structures." },
          { q:"Name the four rainforest layers.", a:"Forest floor, understorey, canopy, emergent." },
          { q:"Give one possible cause of the Maya collapse.", a:"Drought, war or deforestation (probably a mix)." }],
        notes:[["SAY","Whiteboards; show on 3."],["CLICK","→ flips."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and SC."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Why forests are cleared", title:"Causes of deforestation", h:"500px", cards:[
          { big:"🐄", color:"#B3262E", t:"Cattle ranching", d:"The **biggest** cause in the Amazon: forest cleared for grass to raise cattle." },
          { big:"🌱", color:"#D9A23A", t:"Soy & farms", d:"Huge fields of soy — much of it feeds animals around the world." },
          { big:"🪓", color:"#5a3825", t:"Logging", d:"Valuable trees are cut for timber; logging roads open the way for more clearing." },
          { big:"⛏️", color:"#2E9FB0", t:"Mining & roads", d:"Gold mines pollute rivers; new **roads** bring settlers deeper into the forest." }],
        notes:[["ASK","“Which of these might connect to things we buy in New Zealand?”"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"From space", title:"Satellite time-lapse", ix:"deforest",
        notes:[["CLICK","Drag the slider slowly from 1975 to 2020."],["ASK","“What pattern do you see?” (Fishbone.) “What do you notice about the Indigenous territory?”"],["CLICK","Toggle the territory off: “What happens without protection?”"],["NOTE","Simplified model based on real satellite patterns (e.g. Rondônia, Brazil)."],["PACE","Aim for minute 13."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Whose voice counts?", title:"Perspectives wheel", ix:"perspectives",
        notes:[["CLICK","Tap each person. Read their view aloud."],["ASK","Use each ‘Ask’ prompt. Push for empathy: “Is the farmer a bad person?”"],["LISTEN","Everyone has real needs; fair solutions consider all; Indigenous voices are often ignored."],["PACE","Aim for minute 20."]] },
      { type:"hononga", phase:"excavate", fs:"real", title:"Aotearoa's lost forests",
        body:"Before people arrived, forest covered most of Aotearoa. Since then, roughly **two-thirds** has been cleared — much of it for farms in the last 200 years.\n\nToday, **kaitiakitanga** guides iwi and community groups replanting native bush and protecting forests like the kauri, threatened by **kauri dieback**.",
        notes:[["ASK","“Is it fair for NZ to tell Brazil to stop clearing forests? Why or why not?”"]] },
      { type:"paths", phase:"paths", fs:null, notes:[["SAY","Explain paths."],["CLICK","Start the timer."]] },
      { type:"lens", phase:"lens", fs:null, notes:[["CLICK","→ reveals each move."],["SAY","Read Psalm 24:1 and Micah 6:8."],["ASK","Use both questions."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["ASK","“How many perspectives?” (5)"],["CLICK","One bar → Check."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = cacao beans."]] }
    ]
  };

  /* ======================= WEDNESDAY · SCIENCE ======================= */
  const wed = {
    id:"w05-wed", week:5, day:"wed", subject:"science", duration:50,
    title:"Series & Parallel: Lighting the Camp", guide:"mateo",
    codes:["SC-MIE","SC-P"],
    coverage:"Y6 Science (Matter, interactions & energy): simple circuits with more than one output device; series and parallel connections; predicting and explaining brightness. Science practices: predicting, observing, using circuit diagrams.",
    li:"We are learning to compare series and parallel circuits.",
    sc:["I can build a series circuit and a parallel circuit.","I can predict and explain what happens to brightness and when a bulb is removed.","I can explain why houses are wired in parallel."],
    vocab:[
      { w:"series circuit", def:"components connected one after another in a single loop" },
      { w:"parallel circuit", def:"components on separate branches, each connected to the battery" },
      { w:"branch", def:"a separate path in a circuit" },
      { w:"brightness", def:"how much light a bulb gives" },
      { w:"current", def:"the flow of electric charge" }
    ],
    prep:{ min:8, items:["Per group: 2 × AA battery pack, 2–3 bulbs in holders, 6 crocodile-clip leads","Spare bulbs and batteries","Journals for diagrams"] },
    safety:["Batteries only — never sockets.","Hot wire = short circuit: disconnect.","Bulbs can get warm — hold by the holder."],
    hononga:"Every house in Aotearoa is wired in **parallel**: that's why you can turn off the kitchen light without the TV going dark. Old Christmas lights were often wired in **series** — when one bulb blew, the whole string went out!",
    paths:[
      { id:"A", name:"The Scribe", product:"Prediction Table", steps:["For 4 circuits, predict: brightness, and what happens if one bulb is removed.","Test on screen or with a kit and record results.","Explain any surprises."], flying:"Explain why bulbs in series are dimmer." },
      { id:"B", name:"The Builder", product:"Build & Compare", steps:["Build 2 bulbs in series, then 2 in parallel.","Compare brightness. Unscrew one bulb each time.","Draw both circuits with symbols."], flying:"Add a switch that controls only ONE bulb in parallel." },
      { id:"C", name:"The Messenger", product:"Light the Camp", steps:["Mateo needs 6 tent lights. Series or parallel?","Draw your plan with symbols.","Explain your choice to Mateo in 3 sentences."], flying:"Add one master switch that turns everything off." }
    ],
    supportedShort:"prediction table with pictures; pre-built series circuit; diagram templates.",
    lens:{
      pillar:"aroha", title:"One body, many parts",
      look:"Look at the parallel circuit: every bulb is joined to the battery by its own branch. If one goes out, the others keep shining.",
      ref:"1 Corinthians 12:12, 26",
      paraphrase:"Just as a body, though one, has many parts, but all its many parts form one body, so it is with Christ… If one part suffers, every part suffers with it; if one part is honoured, every part rejoices with it.",
      talk:[
        { q:"How is a parallel circuit like Paul's picture of the church as a body?", listen:"Each person connected to God (the source); everyone has a place; one person's problem doesn't switch everyone off." },
        { q:"⚠️ Where the picture breaks: in a circuit, other bulbs don't care when one goes out. What does Paul say happens in God's family?", listen:"When one suffers, all suffer — we care for each other; we're more connected than wires (Aroha — Others)." }
      ],
      live:"Name someone in our class or family you could **encourage** this week."
    },
    clue:{ prompt:"Three bulbs are in series. You remove one. How many stay lit?", answer:0, explain:"In series there's only one loop — break it and ALL go out → 0 (the shell!). Clue saved!" },
    next:"Thursday — loops and the Calendar Light Code.",
    rubric:[
      { c:"Building circuits", code:"SC-MIE",
        d:["Builds one circuit with help.","Builds a series circuit after a demonstration."],
        a:["Builds both series and parallel circuits correctly.","Two bulbs in a single loop; two bulbs on separate branches."],
        f:["Builds and modifies circuits for a purpose.","Adds a switch on one branch to control a single bulb."],
        i:["I built a circuit with help.","I built series and parallel circuits.","I changed circuits to do a job."] },
      { c:"Predicting & explaining", code:"SC-MIE · SC-P",
        d:["Describes what happened.","“The lights went out.”"],
        a:["Predicts and explains what happens when a bulb is removed.","“In series there's one loop, so removing a bulb breaks it. In parallel the other branch is still complete.”"],
        f:["Explains brightness using current or energy.","“In series the same battery pushes current through two bulbs, so each gets less and glows dimmer.”"],
        i:["I can describe what happened.","I can predict and explain removing a bulb.","I can explain brightness differences."] },
      { c:"Applying the science", code:"SC-MIE",
        d:["Names where lights are used.","“Houses have lights.”"],
        a:["Explains why houses use parallel circuits.","“So each light can be switched on or off without affecting the others.”"],
        f:["Designs a sensible wiring plan and justifies it.","“Parallel for the 6 tents, with a master switch near the battery so Mateo can turn them all off.”"],
        i:["I know where lights are used.","I can explain why houses use parallel.","I can design and justify a wiring plan."] }
    ],
    plan:{
      prior:"Weeks 1–4: closed loops, symbols, switches, conductors.",
      kc:["Thinking","Managing self","Participating & contributing"],
      sequence:[
        ["0–6","Field Transmission","Mateo must light every tent; Glyph Check; LI/SC; safety.","Recall."],
        ["6–20","Excavate","Predict; sandbox: series (remove a bulb) and parallel (remove a bulb); compare cards; Hononga.","Predict, observe, explain."],
        ["20–38","Choose Your Path","Kits out.","Table / build / camp plan."],
        ["38–45","Through the Lens","1 Corinthians 12.","Discuss."],
        ["45–50","Decode & Exit","Clue (0); kits away.","Solve; self-assess."]
      ],
      diff:{
        supported:"Pre-built series circuit; picture table.",
        esol:"Gesture loop vs branches; diagrams.",
        learning:"On-screen sandbox; one change at a time.",
        flying:"Brightness explanations; switch per branch; master switch."
      },
      assess:{
        lookFor:["Both circuits built","Predicts removal correctly","Explains house wiring"],
        evidence:["Diagrams","Prediction tables","Exit self-assessment"]
      },
      inquiry:["Did students expect parallel bulbs to be dimmer? Address the misconception.","Who can now explain brightness with current?","Big Projects next week: note potential fair-test questions."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"mateo", meta:"Expanding the camp",
        msg:"More of the team has arrived — we now have **six tents**! I wired two lights one after the other, and when one bulb blew, BOTH went dark. Someone tripped over a tent peg in the night. There must be a better way to wire lots of lights. Let's investigate!",
        notes:[["SAY","Read the message."],["ASK","“Why might both lights have gone out?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:"real", qs:[
          { q:"What's the difference between an open and closed circuit?", a:"Open = a gap; closed = a complete loop." },
          { q:"Why are metals good conductors?", a:"Their electrons can move freely." },
          { q:"What is a short circuit?", a:"A path from + to − with no output — dangerous." }],
        notes:[["SAY","Whiteboards; show on 3."],["CLICK","→ flips."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and SC."]] },
      { type:"safety", phase:"transmission", fs:"real", title:"Circuit safety", items:[
          { icon:"🔋", t:"Batteries only", d:"Never sockets." },
          { icon:"🔥", t:"Hot = short", d:"Disconnect a warm wire straight away." },
          { icon:"💡", t:"Warm bulbs", d:"Hold bulbs by the holder, not the glass." }],
        notes:[["SAFETY","Read the rules."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"One loop", title:"Series circuit", ix:"sandbox", cfg:{ preset:"series", presets:["series","parallel","empty"], title:"Series" },
        notes:[["SAY","“Series means one after another — one single loop.”"],["ASK","“Are these bulbs as bright as one bulb on its own?” (Dimmer.)"],["CLICK","Choose ⌫ Erase and remove one bulb. ASK first: “What will happen to the other one?” (Both go out.)"],["DEEPER","Why dimmer? The same battery has to push current through two bulbs, so less current flows."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Separate branches", title:"Parallel circuit", ix:"sandbox", cfg:{ preset:"parallel", presets:["parallel","series","empty"], title:"Parallel" },
        notes:[["SAY","“Parallel means each bulb has its own branch back to the battery.”"],["ASK","“Brighter or dimmer than series?” (Bright — each gets the full push.)"],["CLICK","Erase one bulb: the other stays lit!"],["PACE","Aim for minute 16."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Compare", title:"Series vs parallel", h:"480px", cards:[
          { big:"1", color:"#B3262E", t:"Series", d:"**One loop.** Bulbs are dimmer. Remove one → **all go out**." },
          { big:"2+", color:"#1F7A5A", t:"Parallel", d:"**Separate branches.** Bulbs stay bright. Remove one → **the others stay on**." },
          { big:"🏠", color:"#2E9FB0", t:"Your house", d:"Wired in **parallel**, so every light and plug works on its own." }],
        notes:[["ASK","“Which should Mateo use for six tents? Why?”"]] },
      { type:"hononga", phase:"excavate", fs:"real", title:"Parallel at home",
        body:"Every house in Aotearoa is wired in **parallel** — turn off the kitchen light and the TV stays on.\n\nOld Christmas lights were often wired in **series**: when one bulb blew, the whole string went dark, and someone had to test every bulb to find it!",
        notes:[["ASK","“What would happen if your house was wired in series?”"]] },
      { type:"paths", phase:"paths", fs:null, notes:[["SAY","Explain paths; kits out."],["CLICK","Start the timer."]] },
      { type:"lens", phase:"lens", fs:null, notes:[["CLICK","→ reveals each move."],["SAY","Read 1 Corinthians 12:12 and 26."],["ASK","Use both questions, especially ‘where the picture breaks’."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["ASK","“Remove one bulb in series — how many stay lit?” (0)"],["CLICK","Leave the shell (0) → Check."],["SAFETY","Batteries out before kits go away."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = cacao beans."]] }
    ]
  };

  /* ======================= THURSDAY · TECHNOLOGY ======================= */
  const thu = {
    id:"w05-thu", week:5, day:"thu", subject:"technology", duration:50,
    title:"Sequences & Loops: the Calendar Light Code", guide:"mateo",
    codes:["DT-CT","TE-TK"],
    coverage:"Digital Technologies — Computational Thinking (Progress Outcomes 1–2): sequence and iteration (loops) in algorithms; debugging timing. Technology (NZC 2007 L3): technological systems — a controlled lighting system.",
    li:"We are learning to write a sequence that repeats using a loop.",
    sc:["I can sequence 3 LEDs like a traffic light.","I can explain how loop() repeats my code.","I can find and fix a timing bug."],
    vocab:[
      { w:"sequence", def:"instructions in a set order" },
      { w:"loop", def:"instructions that repeat" },
      { w:"iteration", def:"one time through a loop" },
      { w:"flowchart", def:"a diagram of an algorithm using shapes and arrows" },
      { w:"timing", def:"how long each step lasts" }
    ],
    prep:{ min:3, items:["Projector for the simulator","Optional: Arduino + breadboard, 3 LEDs (red, yellow, green) + 3 × 220 Ω resistors on pins 13, 12, 11","Paper for flowcharts"] },
    safety:["If using real boards: USB power only; every LED needs its resistor."],
    hononga:"Lighthouses around Aotearoa each flash their own **pattern** so sailors know exactly where they are — a code made of light, repeating all night. **Pencarrow** at the entrance to Wellington Harbour was NZ's first permanent lighthouse (1859).",
    paths:[
      { id:"A", name:"The Scribe", product:"Flowchart", steps:["Draw a flowchart for a traffic light.","Use ovals (start), rectangles (steps) and an arrow back to show the loop.","Label every wait time."], flying:"Add a pedestrian crossing to your flowchart." },
      { id:"B", name:"The Builder", product:"Code the Traffic Light", steps:["Use the simulator (or Arduino) to run the traffic light.","Change the timings for a busy road.","Test that only ONE light is on at a time."], flying:"Add the ‘flashing yellow’ night mode." },
      { id:"C", name:"The Messenger", product:"Maya Number Flash Code", steps:["Invent a code: long flash = bar, short flash = dot.","Program a Maya number in flashes.","A partner decodes it!"], flying:"Flash a two-level number (with a 20s pause)." }
    ],
    supportedShort:"flowchart shape cards; simulator pre-loaded; partner pairs.",
    lens:{
      pillar:"mohio", title:"New every morning",
      look:"Look at the loop: the same steps, over and over, never forgetting. Every morning the sun rises; the seasons come round again.",
      ref:"Lamentations 3:22–23",
      paraphrase:"Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.",
      talk:[
        { q:"A loop repeats faithfully. What does it mean that God's mercies are ‘new every morning’?", listen:"Every day is a fresh start; God's love doesn't run out; forgiveness is always available." },
        { q:"How is God's faithfulness different from a machine repeating code?", listen:"God chooses to love us; it's personal, not automatic; He knows us by name." }
      ],
      live:"Tomorrow morning, start the day with a **thank-you** to God."
    },
    clue:{ prompt:"A loop runs 4 times. Each time, 3 LEDs flash once. How many flashes in total?", maya:null, answer:12, explain:"4 × 3 = 12 → two bars and two dots. Clue saved!" },
    next:"Friday — portraits of kings: relief profiles and tonal shading.",
    rubric:[
      { c:"Sequencing", code:"DT-CT",
        d:["Orders some steps with help.","Turns on all three lights at once."],
        a:["Writes a correct traffic-light sequence.","Green → yellow → red, one at a time, with waits."],
        f:["Designs and explains a new sequence.","Adds a night mode with flashing yellow and explains each step."],
        i:["I ordered some steps.","I wrote a correct sequence.","I designed and explained a new sequence."] },
      { c:"Loops", code:"DT-CT",
        d:["Says the code repeats.","“It goes again.”"],
        a:["Explains how loop() repeats and counts repeats.","“loop() runs the steps again and again — 4 times through is 12 flashes.”"],
        f:["Uses a loop efficiently and explains why loops matter.","“Instead of writing it 100 times, the loop repeats it — shorter code, fewer bugs.”"],
        i:["I know it repeats.","I can explain how loop() works.","I can explain why loops are useful."] },
      { c:"Debugging", code:"DT-CT",
        d:["Notices a problem.","“Two lights are on.”"],
        a:["Finds and fixes a timing or order bug.","“I forgot to turn yellow off before red came on.”"],
        f:["Debugs step by step and tests edge cases.","“I stepped through each line and checked only one LED was on at every moment.”"],
        i:["I can notice a bug.","I can find and fix a bug.","I can debug step by step and test carefully."] }
    ],
    plan:{
      prior:"Week 4 Thursday: microcontrollers, blink, setup()/loop(), delay.",
      kc:["Thinking","Managing self"],
      sequence:[
        ["0–6","Field Transmission","Mateo: a light code for the camp gate; Glyph Check; LI/SC.","Recall."],
        ["6–20","Excavate","Sequences & loops; flowchart; Arduino traffic light (step, run, retime); Maya number flash code.","Predict, trace, change."],
        ["20–38","Choose Your Path","Flowchart / code / flash code.","Create, test."],
        ["38–45","Through the Lens","Lamentations 3:22–23.","Discuss."],
        ["45–50","Decode & Exit","Clue (12).","Solve; self-assess."]
      ],
      diff:{
        supported:"Flowchart shape cards; pre-loaded program to edit.",
        esol:"Colour-coded LEDs; visual flowchart.",
        learning:"Step mode only; one change at a time.",
        flying:"Night mode; two-level number flash code."
      },
      assess:{
        lookFor:["Correct sequence","Explains loop","Fixes a bug"],
        evidence:["Flowcharts","Simulator observations","Exit self-assessment"]
      },
      inquiry:["Did students connect flowchart arrows to loop()?","Real boards: wiring issues to note?","Next: inputs and decisions (Week 6)."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"mateo", meta:"Camp gate",
        msg:"The beacon worked! Now I want a **light code** for the camp gate: green means come in, yellow means wait, red means stop — repeating all night. Three LEDs, one **sequence**, and a **loop** so it never stops.",
        notes:[["SAY","Read the message."],["ASK","“What order should the lights go in?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:"real", qs:[
          { q:"What does setup() do? What does loop() do?", a:"setup() runs once; loop() repeats forever." },
          { q:"What does delay(500) do?", a:"Waits half a second (500 ms)." },
          { q:"Series or parallel: remove one bulb and the rest stay on?", a:"Parallel." }],
        notes:[["SAY","Whiteboards; show on 3."],["CLICK","→ flips."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and SC."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Building blocks of code", title:"Sequence & loop", h:"480px", cards:[
          { big:"1→2→3", color:"#2E9FB0", t:"Sequence", d:"Steps in a **set order**. Swap two steps and you get a different result." },
          { big:"↻", color:"#1F7A5A", t:"Loop", d:"Steps that **repeat**. loop() repeats forever — 4 times through = 4 **iterations**." },
          { big:"⬭▭◇", color:"#D9A23A", t:"Flowchart", d:"**Oval** = start, **rectangle** = a step, **arrow** = what's next. An arrow going back up = a loop!" }],
        notes:[["ASK","“Name something in daily life that is a loop.” (Brushing teeth strokes, a song chorus, seasons…)"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Three LEDs", title:"The gate light code", ix:"arduino",
        cfg:{ title:"Traffic light", leds:[{ pin:11, color:"#2BD96B", label:"GREEN" }, { pin:12, color:"#F0C25E", label:"YELLOW" }, { pin:13, color:"#FF5A5F", label:"RED" }],
          program:[{ op:"on", pin:11 }, { op:"wait", ms:3000 }, { op:"off", pin:11 }, { op:"on", pin:12 }, { op:"wait", ms:1000 }, { op:"off", pin:12 }, { op:"on", pin:13 }, { op:"wait", ms:3000 }, { op:"off", pin:13 }] },
        notes:[["CLICK","Step through slowly first. ASK at each line: “Which LED is on now?”"],["CLICK","Run. Then make it a busy road: longer green, shorter red."],["ASK","Bug test: “What if we delete the ‘Turn GREEN OFF’ block?” (Green and yellow on together.) Delete it with ✕ and Run; then ↺ Reset."],["NOTE","Real board: green LED on pin 11, yellow on 12, red on 13, each with a 220 Ω resistor to GND."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Remix", title:"Maya number flash code", ix:"arduino",
        cfg:{ title:"Flash a 7", program:[{ op:"on", pin:13 }, { op:"wait", ms:1500 }, { op:"off", pin:13 }, { op:"wait", ms:400 }, { op:"on", pin:13 }, { op:"wait", ms:300 }, { op:"off", pin:13 }, { op:"wait", ms:400 }, { op:"on", pin:13 }, { op:"wait", ms:300 }, { op:"off", pin:13 }, { op:"wait", ms:2500 }] },
        notes:[["SAY","“Code: a LONG flash = a bar (5). A SHORT flash = a dot (1). A long pause = end of number.”"],["CLICK","Run. ASK: “What number is it?” (7: one bar, two dots.)"],["CLICK","Change it live to 11 (bar, bar, dot): use ↑ to move blocks and + Wait."],["PACE","Aim for minute 20."]] },
      { type:"hononga", phase:"excavate", fs:"real", title:"Lighthouse codes",
        body:"Each lighthouse in Aotearoa flashes its own **pattern** so sailors know exactly which one they're looking at — a light code that **loops** all night.\n\n**Pencarrow**, at the entrance to Wellington Harbour, was NZ's first permanent lighthouse (**1859**).",
        notes:[["ASK","“Why does every lighthouse need a different pattern?”"]] },
      { type:"paths", phase:"paths", fs:null, notes:[["SAY","Explain paths."],["CLICK","Start the timer. Simulator slides are available with ←."]] },
      { type:"lens", phase:"lens", fs:null, notes:[["CLICK","→ reveals each move."],["SAY","Read Lamentations 3:22–23."],["ASK","Use both questions."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["ASK","“4 loops × 3 LEDs?” (12)"],["CLICK","▬▬ ●● → Check."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = cacao beans."]] }
    ]
  };

  /* ======================= FRIDAY · ART ======================= */
  const fri = {
    id:"w05-fri", week:5, day:"fri", subject:"art", duration:50,
    title:"Portraits of Kings: Relief Profiles & Tonal Shading", guide:"rosa",
    codes:["VA-UC","VA-PK","VA-DI"],
    coverage:"Visual Arts (NZC 2007, Level 3): understanding art in context (Maya relief portraits on stelae); practical knowledge (profile proportion, tonal shading with 3–5 tones); developing ideas (personal symbols).",
    li:"We are learning to draw a profile portrait in Maya relief style using tonal shading.",
    sc:["I can draw a profile using proportion guides.","I can use 3–5 tones to make my drawing look carved.","I can add a headdress or symbol that means something to me."],
    vocab:[
      { w:"profile", def:"a view of a face from the side" },
      { w:"relief", def:"a carving that stands out from a flat background" },
      { w:"proportion", def:"how big parts are compared with each other" },
      { w:"tone", def:"how light or dark something is" },
      { w:"hatching", def:"shading with parallel lines" },
      { w:"stela", say:"STEE-luh", def:"a tall carved stone monument (plural: stelae)" }
    ],
    prep:{ min:3, items:["Codex books (panel 5)","B, 2B and 4B pencils (or HB + pressure), erasers","Optional: a torch to show light and shadow on a ball"] },
    safety:[],
    hononga:"**Whakairo** (Māori carving) often shows **tūpuna** (ancestors) in wharenui, honouring who people come from. Like Maya stelae, carving records identity and history — but each tradition has its own meanings and tikanga, so we learn from them respectfully rather than copying them.",
    paths:[
      { id:"A", name:"The Scribe", product:"Me as a Stela", steps:["Draw your own profile using the guides.","Design a headdress with YOUR symbols (hobbies, values, family).","Write a caption: your name + one achievement."], flying:"Use all 5 tones and a clear light direction." },
      { id:"B", name:"The Builder", product:"Pakal Study", steps:["Copy a Maya-style profile from the screen using the guides.","Shade with at least 3 tones.","Add a border of Maya numerals."], flying:"Add cast shadows to make the carving look deep." },
      { id:"C", name:"The Messenger", product:"Stela with Caption", steps:["Draw a stela of someone you admire (not a celebrity — someone you know).","Add a caption about their character, not their looks.","Present it to a partner."], flying:"Write the caption in glyph-style blocks with a translation." }
    ],
    supportedShort:"traced head outline; tone strip to copy; symbol ideas sheet.",
    lens:{
      pillar:"manaaki", title:"The Lord looks at the heart",
      look:"Look at the stelae: kings carved themselves looking powerful, perfect and important. But who were they really?",
      ref:"1 Samuel 16:7",
      paraphrase:"The Lord does not look at the things people look at. People look at the outward appearance, but the Lord looks at the heart.",
      talk:[
        { q:"Why do you think kings wanted to look perfect and powerful in their portraits?", listen:"To make people respect and obey them; to be remembered; pride." },
        { q:"If God looks at the heart, what would you want a portrait of YOUR heart to show?", listen:"Kindness, honesty, courage, love — character more than looks (Manaaki — serving with our gifts)." }
      ],
      live:"Gallery walk: compliment someone's **character** that their portrait shows, not just their drawing skill."
    },
    clue:{ prompt:"Folio Seal: add the four Glyph Clues from Monday to Thursday.", answer:29, explain:"12 + 5 + 0 + 12 = 29 = one twenty + 9." },
    next:"Week 6 — The Eagle on the Cactus: the rise of the Aztecs.",
    rubric:[
      { c:"Context", code:"VA-UC",
        d:["Says kings were carved in stone.","“They carved kings.”"],
        a:["Explains the purpose of stelae and relief portraits.","“Stelae showed kings in profile with headdresses and dates to record their power and history.”"],
        f:["Compares with another tradition respectfully.","“Like whakairo, stelae honour important people — but each has its own meaning and tikanga.”"],
        i:["I know kings were carved.","I can explain what stelae were for.","I can compare with another tradition respectfully."] },
      { c:"Profile & proportion", code:"VA-PK",
        d:["Draws a face that looks front-on or flat.","Eyes high on the head; no ear."],
        a:["Draws a clear profile using proportion guides.","Eye halfway down the head; ear between the eye and nose lines."],
        f:["Draws a confident, well-proportioned profile with detail.","Sloping forehead, ear spool and headdress all in proportion."],
        i:["My face looks flat or front-on.","My profile uses the proportion guides.","My profile is confident and detailed."] },
      { c:"Tone & meaning", code:"VA-PK · VA-DI",
        d:["Uses one or two tones.","Mostly outline with a little shading."],
        a:["Uses 3–5 tones and a personal symbol.","Light and dark sides; a headdress showing a hobby."],
        f:["Uses tone to create depth and explains the meaning of symbols.","“Light comes from the left so the right edge is darkest; the waves show my family's love of the sea.”"],
        i:["I used one or two tones.","I used 3–5 tones and a symbol.","My tones create depth and I can explain my symbols."] }
    ],
    plan:{
      prior:"Week 1: glyph drawing (look 80%, draw 20%); Week 3: symmetry; Monday: kings and stelae.",
      kc:["Thinking","Managing self","Using language, symbols & texts"],
      sequence:[
        ["0–6","Field Transmission","Doña Rosa on carved kings; Glyph Check; LI/SC.","Recall."],
        ["6–18","Excavate","Kings in stone; profile builder (5 steps); tone ladder & light on a sphere.","Observe, practise tones."],
        ["18–40","Choose Your Path (22 min)","Panel 5 of the codex.","Portrait / study / stela."],
        ["40–45","Through the Lens","1 Samuel 16:7; gallery walk.","Character compliments."],
        ["45–50","Folio Seal","12 + 5 + 0 + 12 = 29 (20s level!); intercept.","Solve; discuss."]
      ],
      diff:{
        supported:"Traced outline; tone strip.",
        esol:"Demonstration; visual steps.",
        learning:"Larger paper; 3 tones only.",
        flying:"Cast shadows; glyph caption."
      },
      assess:{
        lookFor:["Profile proportion","3–5 tones","Personal symbol explained"],
        evidence:["Codex panel 5 (photo)","Captions","Exit self-assessment"]
      },
      inquiry:["Which students found tone hardest? Re-teach pressure control.","Were symbols personal and respectful (no deity imagery)?","Big Projects launch next week — note interests."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"rosa", meta:"Restoration tent",
        msg:"Children, Folio V shows a king in **profile** — side-on, with a tall headdress, carved so deeply he seems to step out of the stone. The old carvers knew how to make flat stone look **round** using light and shadow. Today you'll learn their secret: **tone**.",
        notes:[["SAY","Read the message."],["ASK","“How can a flat drawing look 3D?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:"real", title:"This week so far", qs:[
          { q:"What did LiDAR reveal?", a:"Hidden cities, roads and houses under the jungle." },
          { q:"Name a cause of deforestation.", a:"Cattle ranching, soy farms, logging, mining or roads." },
          { q:"Series or parallel for a house?", a:"Parallel." }],
        notes:[["SAY","Whole-week review."],["CLICK","→ flips."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and SC."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Kings in stone", title:"Relief portraits", visual:{ artefact:"stela" },
        bullets:["Maya kings were carved in **relief** — raised from the stone.","Faces are shown in **profile**, often with a **sloping forehead**, ear spools and huge feathered headdresses.","Light falling across the carving makes **shadows** — that's what makes it look deep."],
        notes:[["ASK","“What do you notice about how the king is shown?”"],["NOTE","Image: artistic reconstruction of a stela."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Step by step", title:"Draw a profile", ix:"profile", paper:true,
        notes:[["CLICK","→ adds each step: outline, guides, features, headdress, tone."],["SAY","“Your headdress shows YOUR symbols — what matters to you. Not gods or Maya religious symbols.”"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Light & dark", title:"Tone ladder", ix:"toneladder", paper:true,
        notes:[["CLICK","Drag the light around the ball. ASK: “Where's the darkest part?” (Opposite the light.)"],["CLICK","Tap each tone step."],["SAY","Students practise a 5-step tone strip in their journals for 2 minutes."],["PACE","Aim for minute 18."]] },
      { type:"paths", phase:"paths", fs:null, minutes:22, notes:[["SAY","Explain paths; panel 5 of the codex."],["CLICK","Start the 22-minute timer."]] },
      { type:"lens", phase:"lens", fs:null, notes:[["CLICK","→ reveals each move."],["SAY","Read 1 Samuel 16:7. Then the gallery walk."]] },
      { type:"folioseal", phase:"decode", fs:"story",
        notes:[["SAY","“Seal V — it needs the 20s level again!”"],["CLICK","12 + 5 + 0 + 12 = 29. Press +20 once, then ▬ ●●●● (9) → Break the seal."],["ASK","“Why does 29 need two levels?”"]] },
      { type:"intercept", phase:"decode", fs:"story",
        msg:"Too slow, children. My diggers reached the silent city first. Tunnels through every temple. The jade is already sold. History is for those who get there first. — C.",
        ask:"Why is looting so harmful — even if the objects end up somewhere safe? What is lost when things are dug up secretly?",
        notes:[["SAY","Read in the Collector's voice."],["LISTEN","We lose the context (where it was found, what was near it); damage to sites; it belongs to Guatemala and Maya people; it's stealing."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = cacao beans."]] }
    ]
  };

  FC.WEEKS[5] = {
    n:5,
    story:"Folio V maps a city where the kings fell silent. The team learns how holy lords ruled rival city-states, uses LiDAR to reveal the hidden city, weighs evidence for the collapse, investigates deforestation today, wires the growing camp in parallel, codes a gate light, and draws kings in relief. Seal V points north — to an eagle on a cactus.",
    hononga:"Wairau Bar and returning kōiwi (Mon); forest loss and kaitiakitanga (Tue); parallel wiring at home (Wed); lighthouse codes (Thu); whakairo honouring tūpuna (Fri). Check local framing with your Māori lead / Ngāi Tahu rūnanga.",
    seal:{
      answer:29,
      instruction:"Add the four **Glyph Clues**. The total is over 19 — use the **20s level** (+20), then build the rest.",
      reveal:"🟡 **Folio V unsealed:** a trail of footprints heads **north** to an island in a lake — and on it, an **eagle on a cactus**. Dr Canul: “That's not a Maya sign. That's the **Mexica** — the Aztecs!” Next week: *The Eagle on the Cactus*.",
      art:() => { const v = FC.art.mapFolio(); v.setAttribute("style", "width:100%;height:100%"); return v; }
    },
    lessons:[mon, tue, wed, thu, fri]
  };
})(window.FC);
