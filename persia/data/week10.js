/* ==========================================================
   WEEK 10 — STAGE X · THE GATE OF ALL NATIONS
   The caravan votes on forgiving Zal. All ten fragments join; the Seal's message is revealed.
   Big Projects are presented all week; Friday is the Persia Exhibition.
   Notes: [KEY, text]  KEY = SAY ASK LISTEN IF CLICK TALK DEEPER PACE SAFETY WAIT NOTE CARE SIDE
   ========================================================== */
(function(BM){
  "use strict";

  /* ======================= MONDAY · HISTORY ======================= */
  const mon = {
    id:"w10-mon", week:10, day:"mon", subject:"history", duration:50,
    title:"Legacy & Iran Today: Nowruz, Words & Gardens", guide:"shirin",
    codes:["SS-H","SS-P","EN","RE"],
    coverage:"Y5–6 History practices (2027 Social Sciences): continuity and change (what Persia gave the world); presenting historical inquiry (Big Project museum cases). Christian Character: every nation in God's story.",
    li:"We are learning what ancient Persia passed on to the world, and how Persian culture continues today.",
    sc:["I can describe Nowruz and why it matters to many people.","I can name English words that come from Persian.","I can present my Persia Museum Case with evidence."],
    vocab:[
      { w:"legacy", say:"LEG-uh-see", def:"something passed on from the past to the future" },
      { w:"Nowruz", say:"noh-ROOZ", def:"‘new day’: the Persian New Year on 21 March, at the start of spring" },
      { w:"intangible heritage", def:"traditions, celebrations and skills (not objects) that communities pass on" },
      { w:"loanword", def:"a word one language borrows from another" },
      { w:"culture", def:"the way of life of a group: food, language, art, celebrations, beliefs" },
      { w:"museum case", def:"a display that shows an object with a label and explanation" }
    ],
    prep:{ min:10, items:["Big Project museum cases ready to present","A ‘Map Wall’ from Week 1 on display","Class Bible marked at Revelation 7:9"] },
    safety:[],
    care:["Iran today is taught through people, culture and creation, with no political commentary (D10).","Students with family links to Iran may like to share Nowruz traditions: invite, never require."],
    hononga:"**New Year in Aotearoa.** In New Zealand, **Matariki** marks the Māori New Year in winter; Nowruz marks the Persian New Year in spring. Many families in Aotearoa celebrate both, or other New Years too (like Lunar New Year).",
    paths:[
      { id:"A", name:"The Curator", product:"Persia Museum Case (Big Project)", steps:["Finish your **museum case**: object or person, **label**, **‘how do we know?’ card**.","Add **two perspectives** and a **Bible connection**.","Present it to a small group in **2 minutes**."], flying:"Answer a visitor's tricky question: “How do you know that's true?”" },
      { id:"B", name:"The Artisan", product:"Word Tree", steps:["Draw a **tree**: Persia at the roots.","On the branches, write **English words from Persian** (bazaar, caravan, paradise…).","Add a picture for each word."], flying:"Add words from Māori or another language that English has borrowed." },
      { id:"C", name:"The Herald", product:"Nowruz Explainer", steps:["Plan a **1-minute explainer** about Nowruz.","Include: **what, when, who** celebrates it (12 countries listed it with UNESCO).","Compare it with **Matariki** or another New Year."], flying:"Explain what ‘intangible heritage’ means, with an NZ example." }
    ],
    supportedShort:"a museum-label template; word cards; partner.",
    lens:{
      pillar:"sdg", title:"Every nation, tribe, people and language",
      look:"Look again at our Map Wall from Week 1. Look how far we've come… and how many peoples we've met.",
      ref:"Revelation 7:9",
      paraphrase:"I looked, and there before me was a great multitude that no one could count, from every nation, tribe, people and language, standing before the throne and before the Lamb.",
      talk:[
        { q:"In Week 1 we met Elamites, Medes and Persians. Who will be in the great crowd of Revelation 7:9?", listen:"People from every nation, including Iran, Aotearoa and everywhere." },
        { q:"How can we pray for the people of Iran today?", listen:"For families, children, peace, health, and that they would know God's love." }
      ],
      live:"Pray for the people of Iran this week. Add one thing you've learned to the Map Wall."
    },
    clue:{ prompt:"On what date in March does Nowruz begin?", answer:21, explain:"21 March. Waystation Clue 1 = 21, saved for Friday!" },
    next:"Tuesday — Farhad: cities today, and your City Planner projects.",
    rubric:[
      { c:"Persian legacy", code:"SS-H",
        d:["Names something Persian.","“Carpets.”"],
        a:["Describes Nowruz and gives loanwords.","“Nowruz is the New Year on 21 March; bazaar and caravan come from Persian.”"],
        f:["Explains continuity and change.","“Persia's empire ended, but its celebrations and words continue.”"],
        i:["I can name something Persian.","I can describe Nowruz and give loanwords.","I can explain continuity and change."] },
      { c:"Museum Case (Big Project)", code:"SS-P",
        d:["Labels an object.","A drawing with a title."],
        a:["Includes a label, evidence card, two perspectives and a Bible link.","“The Cyrus Cylinder: what it says, how we know, a Babylonian and a Jewish view, Ezra 1.”"],
        f:["Evaluates the evidence.","“The Cylinder is a primary source, but it was written for Cyrus, so it's one-sided.”"],
        i:["I can label an object.","I can include all four parts.","I can evaluate the evidence."] },
      { c:"Presenting", code:"EN · SS-P",
        d:["Presents with help.","Reads the label aloud."],
        a:["Presents clearly and answers a question.","Explains the object and answers ‘how do we know?’"],
        f:["Engages the audience and links to the term.","Connects the object to other weeks and asks the audience a question."],
        i:["I can present with help.","I can present clearly and answer a question.","I can engage the audience and link to the term."] }
    ],
    plan:{
      prior:"Students have ten weeks of Persia: kings, cities, animals, inventions and art. Museum cases were begun in Week 6.",
      kc:["Using language, symbols & texts","Relating to others","Participating & contributing"],
      sequence:[
        ["0–6","The Dispatch","Shirin's dispatch; Waystation Check; LI/SC.","Recall."],
        ["6–18","Discovery","Nowruz; **Words from Persia**; the Map Wall then and now.","Guess; compare."],
        ["18–38","Big Project presentations","Museum cases in small groups (Path A), or Paths B/C.","Present; ask questions."],
        ["38–45","Through the Lens","Revelation 7:9; pray for Iran.","Discuss; pray."],
        ["45–50","Waystation Clue & Exit","Clue 1 (answer 21).","Solve; self-assess."]
      ],
      diff:{
        supported:"Label template; partner presenting.",
        esol:"Visual museum cases; key words; rehearsal.",
        learning:"Small-group presenting; choice of mode.",
        flying:"Evaluating evidence; tricky questions."
      },
      assess:{
        lookFor:["Describes Nowruz and loanwords","Museum case has all four parts","Presents clearly"],
        evidence:["Museum cases (photograph)","Presentation notes","Exit self-assessment"]
      },
      inquiry:["Compare today's Map Wall with Week 1's.","Which museum cases should feature at Friday's Exhibition?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"shirin", meta:"Persepolis · the Gate of All Nations",
        msg:"Caravan… we're back where it all began: **Persepolis**, at the **Gate of All Nations**. Ten weeks. Kings, cities, animals, inventions, art. The empire is long gone, but look around: Persian **words**, Persian **gardens**, Persian **celebrations**… they're still here. And one fragment is still missing.",
        notes:[["SAY","Read the dispatch with a sense of homecoming. 🟡 Shirin is fictional."]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"Who is the Shadow Courier?", a:"Zal." }, { q:"Where is the Caspian seal found?", a:"Only in the Caspian Sea." }, { q:"Name one thing a ‘star-watcher’ from the east brought to Jesus.", a:"Gold, frankincense or myrrh." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Persia's legacy", title:"Nowruz: a *new day*",
        cards:[ { icon:"🌸", t:"New Year in spring", d:"**Nowruz** means **“new day”**. It begins on **21 March**, at the start of spring.", foot:"21 March" }, { icon:"🌍", t:"Shared by many", d:"**12 countries**, including **Iran**, listed it together with UNESCO in **2016**.", foot:"intangible heritage" }, { icon:"🎉", t:"New beginnings", d:"A time for family, visiting, and wishing for **prosperity and new beginnings**.", foot:"culture" } ],
        notes:[["SAY","Read each card."],["CARE","Invite (never require) students with family links to Iran to share Nowruz traditions."],["NOTE","Source: UNESCO Intangible Cultural Heritage, Decision 11.COM 10.b.1 (2016)."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Words that travelled", title:"Words from Persia", ix:"wordflip",
        notes:[["CLICK","Guess first, then press → (or tap) to flip each card."],["NOTE","Source: Online Etymology Dictionary (bazaar, caravan, paradise)."]] },
      { type:"discussion", phase:"excavate", fs:"real", kicker:"Turn & Talk", q:"Look at our **Map Wall from Week 1**. **What do you know now that you didn't know then?**", sub:"Think about kings, cities, animals, inventions, art and the Bible.", talk:60,
        notes:[["CLICK","Bring the Week 1 Map Wall up (presenter Map Wall slide or the physical wall)."],["TALK","60 seconds."],["LISTEN","Celebrate growth!"]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAY","“Today, museum cases are presented in small groups (Path A). Others choose B or C.”"],["CLICK","Start the 20-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Revelation 7:9–10."],["CARE","Pray for the people of Iran without political commentary."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 21."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = darics."]] }
    ]
  };

  /* ======================= TUESDAY · GEOGRAPHY ======================= */
  const tue = {
    id:"w10-tue", week:10, day:"tue", subject:"geography", duration:50,
    title:"Cities Today: Tehran, NZ & Planning a Fair City", guide:"farhad",
    codes:["SS-G","SS-E","SS-C","MA"],
    coverage:"Y6 Geography (2027): urbanisation — why people move to cities, informal settlements and their impact on people; comparing places. Big Project: City Planner.",
    li:"We are learning why people move to cities, and how a fair city can be planned for everyone.",
    sc:["I can describe how Tehran has grown.","I can explain why people move to cities and what informal settlements are.","I can present a fair city plan."],
    vocab:[
      { w:"urbanisation", def:"more and more people coming to live in towns and cities" },
      { w:"migration", def:"people moving from one place to live in another" },
      { w:"informal settlement", def:"homes built without permission or proper services like clean water and drains" },
      { w:"services", def:"things a city provides: water, power, schools, hospitals, transport" },
      { w:"fair", def:"treating everyone justly, so everyone has what they need" },
      { w:"population", def:"the number of people living in a place" }
    ],
    prep:{ min:10, items:["City Planner Big Projects ready to present","Feedback slips (two stars and a wish)"] },
    safety:[],
    care:["Some students may have moved home, city or country. Speak about migration positively and respectfully."],
    hononga:"**Our cities grow too.** Many people in Aotearoa have moved from farms and small towns into cities like Auckland and Christchurch, and from overseas. Planners must make sure there are enough homes, schools and transport for everyone.",
    paths:[
      { id:"A", name:"The Planner", product:"City Planner (Big Project)", steps:["Finish your **fair desert city** for 10,000 people.","Show **water** (a qanat), a **bazaar**, **homes for everyone** (including newcomers) and an **earthquake plan**.","Present it in **2 minutes**."], flying:"Explain how your city avoids informal settlements." },
      { id:"B", name:"The Artisan", product:"Then-and-Now Graph", steps:["Draw a **bar graph** of Tehran's population: 1956 and 2006.","Add labels and a title.","Write **two sentences** about what the graph shows."], flying:"Work out how many times bigger Tehran was in 2006." },
      { id:"C", name:"The Herald", product:"“Why We Moved” Interviews", steps:["Interview a classmate playing someone who **moved to a city**.","Ask: why did you move? What was hard? What helped?","Present the interview."], flying:"Compare a move to Tehran with a move to Auckland." }
    ],
    supportedShort:"a city-plan checklist; a graph template; partner.",
    lens:{
      pillar:"panga", title:"Seek the good of the city",
      look:"Look again at the growing city: people arriving every day, needing homes, water and welcome.",
      ref:"Jeremiah 29:7; Micah 6:8",
      paraphrase:"Seek the peace and prosperity of the city. And what does the LORD require of you? To act justly, to love mercy and to walk humbly with your God.",
      talk:[
        { q:"What would make a city fair for everyone, including newcomers?", listen:"Homes, water, schools, jobs, welcome, safety, fair rules." },
        { q:"How can we welcome newcomers in our class, school or town?", listen:"Say hello, include them, show them around, learn their name and story." }
      ],
      live:"Welcome someone new (or someone who seems left out) this week."
    },
    clue:{ prompt:"Tehran had about 7.7 million people in 2006. How many whole millions is that?", answer:7, explain:"7 whole millions. Waystation Clue 2 = 7, saved for Friday!" },
    next:"Wednesday — Gandom: species that came back from the brink.",
    rubric:[
      { c:"City growth", code:"SS-G · MA",
        d:["Says Tehran grew.","“It got bigger.”"],
        a:["Uses the data to describe growth.","“From about 1.56 million in 1956 to 7.7 million in 2006.”"],
        f:["Calculates and interprets the change.","“About five times bigger in 50 years: it needed many more homes and services.”"],
        i:["I can say Tehran grew.","I can use the data to describe growth.","I can calculate and interpret the change."] },
      { c:"Urbanisation & informal settlements", code:"SS-G · SS-E",
        d:["Gives one reason people move.","“Jobs.”"],
        a:["Explains reasons and what informal settlements are.","“People move for jobs and schools; if there aren't enough homes, informal settlements grow without services.”"],
        f:["Explains the impact on people.","“Without clean water and drains, people can get sick.”"],
        i:["I can give a reason.","I can explain reasons and informal settlements.","I can explain the impact on people."] },
      { c:"City Planner (Big Project)", code:"SS-G · SS-C",
        d:["Draws a city.","Houses and a road."],
        a:["Includes water, a bazaar, homes for everyone and an earthquake plan.","A labelled plan with a key."],
        f:["Explains how the plan is fair.","“Newcomers get homes near water and jobs, not on the edge.”"],
        i:["I can draw a city.","I can include all four parts.","I can explain how my plan is fair."] }
    ],
    plan:{
      prior:"Students have studied settlement all term: why settle (Week 1), capitals (2), road towns (3), water towns (4), layers (5), walls (6), bazaars (7), hazards (8), Silk Road (9).",
      kc:["Thinking","Participating & contributing","Relating to others"],
      sequence:[
        ["0–6","The Dispatch","Farhad's dispatch; Waystation Check; LI/SC.","Recall."],
        ["6–18","Discovery","**City Growth**: Tehran then and now; urbanisation; informal settlements.","Read the graph; discuss."],
        ["18–38","Big Project presentations","City Planners present (Path A), or Paths B/C.","Present; feedback."],
        ["38–45","Through the Lens","Jeremiah 29:7; Micah 6:8.","Discuss."],
        ["45–50","Waystation Clue & Exit","Clue 2 (answer 7).","Solve; self-assess."]
      ],
      diff:{
        supported:"Checklist; graph template.",
        esol:"Graph visuals; key words; rehearsal.",
        learning:"Small-group presenting.",
        flying:"Calculations; fairness."
      },
      assess:{
        lookFor:["Describes Tehran's growth","Explains urbanisation","Presents a fair plan"],
        evidence:["City plans (photograph)","Graphs","Exit self-assessment"]
      },
      inquiry:["Which city plans go to Friday's Exhibition?","Y6 urbanisation coverage: tick off in the unit plan."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"farhad", meta:"A hilltop above a modern city · lights everywhere",
        msg:"Look at that: **Tehran**, Iran's capital today. Millions of lights. When my grandfather's grandfather was young, it was a fraction of this size. People came from villages for jobs and schools. Today you'll present your own **fair city**. **Ten thousand people are counting on you!**",
        notes:[["SAY","Read the dispatch. 🟡 Farhad is fictional; Tehran's growth is real."]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"What does Nowruz mean?", a:"New day." }, { q:"When does it begin?", a:"21 March." }, { q:"Name a word from Persian.", a:"Bazaar, caravan, paradise." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Then and now", title:"City Growth", ix:"citygrowth",
        notes:[["CLICK","Press →: 1956 → 2006 → why people move → most Iranians live in cities."],["ASK","“How many times bigger is 7.7 million than 1.56 million?” (About 5 times.)"],["NOTE","Sources: Tehran figures (Demographics of Tehran: starting point; check a census source if you can); Iran urban share about 76% in 2020 (World Bank / UN, via IndexMundi)."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Your Big Project", title:"Is your city *fair*?",
        cards:[ { icon:"💧", t:"Water", d:"Where does it come from? (A qanat?) Does everyone get a share?", foot:"Weeks 2 & 4" }, { icon:"🛍️", t:"Bazaar & jobs", d:"Where do people buy, sell and work?", foot:"Week 7" }, { icon:"🏘️", t:"Homes for all", d:"Including **newcomers**, near water and jobs.", foot:"fairness" }, { icon:"🌍", t:"Earthquake plan", d:"Safer buildings, open spaces, a drill.", foot:"Week 8" } ],
        notes:[["SAY","“Check your plan against these four before you present.”"]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAY","“City Planners present in small groups (Path A). Others choose B or C. Give feedback: two stars and a wish.”"],["CLICK","Start the 20-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Jeremiah 29:7 and Micah 6:8."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 7."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = darics."]] }
    ]
  };

  /* ======================= WEDNESDAY · SCIENCE ======================= */
  const wed = {
    id:"w10-wed", week:10, day:"wed", subject:"science", duration:50,
    title:"Recovery: Sanctuaries, the Fallow Deer & the Takahē", guide:"gandom",
    codes:["SC-LW","SC-P","EN"],
    coverage:"Y5 Science (2027): conservation and recovery of species; how people help ecosystems. Big Project: Wild Persia Sanctuary.",
    li:"We are learning how sanctuaries and breeding programmes help species recover.",
    sc:["I can describe how the Persian fallow deer recovered.","I can compare it with the takahē in Aotearoa.","I can present a sanctuary plan for an endangered animal."],
    vocab:[
      { w:"recovery", def:"getting back to good health or bigger numbers" },
      { w:"breeding programme", def:"a plan to help animals have young safely, often in zoos or reserves" },
      { w:"reintroduce", def:"to put animals back into the wild where they used to live" },
      { w:"sanctuary", def:"a protected place for wildlife" },
      { w:"rediscover", def:"to find again something thought to be lost" },
      { w:"kaitiaki", say:"kye-tee-AH-kee", def:"guardian, carer of the land, sea and living things (te reo Māori)" }
    ],
    prep:{ min:5, items:["Wild Persia Sanctuary Big Projects ready to present","Feedback slips"] },
    safety:[],
    care:[],
    hononga:"**Kaitiakitanga.** In te ao Māori, people are **kaitiaki**: guardians of the land and its creatures. The takahē's recovery shows what guardianship can do.",
    paths:[
      { id:"A", name:"The Ranger", product:"Wild Persia Sanctuary (Big Project)", steps:["Finish your sanctuary for **one endangered animal**.","Show its **habitat**, **food web**, **threats** and **recovery plan**.","Present it in **2 minutes**."], flying:"Use the fallow deer or takahē as evidence that your plan could work." },
      { id:"B", name:"The Artisan", product:"Comeback Comic", steps:["Draw a **comic** of the fallow deer's or takahē's comeback.","Show **lost**, **found** and **recovering**.","Add the real numbers."], flying:"Add a panel about what could still go wrong." },
      { id:"C", name:"The Herald", product:"Good News Report", steps:["Plan a **good-news broadcast** about a species that came back.","Include **when, where, how many** and **who helped**.","End with one action listeners can take."], flying:"Interview a ‘zookeeper’ from Israel or Germany." }
    ],
    supportedShort:"a sanctuary checklist; comic template; partner.",
    lens:{
      pillar:"aroha", title:"Creation waits in hope",
      look:"Look again at the deer and the takahē: lost… found… growing again.",
      ref:"Romans 8:19–21",
      paraphrase:"Creation waits in eager expectation… in hope that it will be set free from decay and brought into the freedom and glory of the children of God.",
      talk:[
        { q:"These animals were nearly lost, but came back. What hope does Romans 8 give about creation?", listen:"God will make all things new; creation will be set free." },
        { q:"How can we be kaitiaki (guardians) of creation now?", listen:"Care for habitats, support sanctuaries, plant natives, reduce waste." }
      ],
      live:"Choose one kaitiaki action to keep doing after this term ends."
    },
    clue:{ prompt:"About how many Persian fallow deer were found in Iran in 1956?", answer:30, explain:"About 30. Waystation Clue 3 = 30, saved for Friday!" },
    next:"Thursday — Nasrin: showcase your inventions and games!",
    rubric:[
      { c:"The fallow deer's recovery", code:"SC-LW",
        d:["Says it came back.","“There are more now.”"],
        a:["Describes the recovery with numbers.","“About 30 found in 1956; breeding in Iran, Germany and Israel; about 500 today.”"],
        f:["Explains what made it work.","“Protected reserves, careful breeding and releasing deer into safe habitat.”"],
        i:["I can say it came back.","I can describe the recovery with numbers.","I can explain what made it work."] },
      { c:"Comparing with the takahē", code:"SC-LW",
        d:["Names the takahē.","“A NZ bird.”"],
        a:["Gives a similarity and a difference.","“Both were thought extinct; the takahē was rediscovered in Fiordland in 1948.”"],
        f:["Draws a lesson for other species.","“Protection plus breeding can work if we act before it's too late.”"],
        i:["I can name the takahē.","I can give a similarity and a difference.","I can draw a lesson for other species."] },
      { c:"Sanctuary (Big Project)", code:"SC-LW · SC-P",
        d:["Draws a habitat.","A picture of the animal."],
        a:["Includes habitat, food web, threats and recovery plan.","A labelled sanctuary plan."],
        f:["Uses evidence to justify the plan.","“Like the fallow deer, we'd start with a protected breeding group.”"],
        i:["I can draw a habitat.","I can include all four parts.","I can use evidence to justify my plan."] }
    ],
    plan:{
      prior:"Students studied endangered species (Weeks 8–9) and the takahē (Week 8).",
      kc:["Thinking","Participating & contributing","Relating to others"],
      sequence:[
        ["0–6","The Dispatch","Gandom's dispatch; Waystation Check; LI/SC.","Recall."],
        ["6–18","Discovery","**Recovery**: the fallow deer and the takahē.","Compare."],
        ["18–38","Big Project presentations","Sanctuaries present (Path A), or Paths B/C.","Present; feedback."],
        ["38–45","Through the Lens","Romans 8:19–21.","Discuss."],
        ["45–50","Waystation Clue & Exit","Clue 3 (answer 30).","Solve; self-assess."]
      ],
      diff:{
        supported:"Checklist; comic template.",
        esol:"Number visuals; key words.",
        learning:"Small-group presenting; choice.",
        flying:"Evidence; what could go wrong."
      },
      assess:{
        lookFor:["Describes recovery with numbers","Compares with the takahē","Presents a sanctuary plan"],
        evidence:["Sanctuary plans (photograph)","Comics","Exit self-assessment"]
      },
      inquiry:["Which sanctuaries go to Friday's Exhibition?","End the science strand on hope."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"gandom", meta:"A green valley in the south-west · deer in the trees",
        msg:"Shh… look in the trees. **Deer.** Spotty ones. People once thought these **Persian fallow deer** were gone forever. Then someone found a few. Just a few! And look now. I'm not crying. It's the dust. **Camels don't cry.** Mostly.",
        notes:[["SAY","Read it in Gandom's voice, softening. 🟡 Gandom is fictional."]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"How much did Tehran grow from 1956 to 2006?", a:"From about 1.56 million to 7.7 million." }, { q:"What is an informal settlement?", a:"Homes built without permission or services like clean water." }, { q:"Name one thing a fair city needs.", a:"Water, homes for everyone, jobs, an earthquake plan." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Back from the brink", title:"Recovery", ix:"recovery",
        notes:[["CLICK","Press →: the fallow deer count rises, then the takahē."],["SAY","“About 30 Persian fallow deer were found in south-western Iran in 1956. Breeding programmes in Iran, Germany and Israel brought it back: about 500 worldwide today.”"],["NOTE","Sources: Jerusalem Biblical Zoo (Persian fallow deer); DOC (takahē: rediscovered 20 November 1948; 500 in 2023)."]] },
      { type:"animalcards", phase:"excavate", fs:"real", kicker:"Recovery stories", title:"Lost… and *found*",
        animals:[
          { img:"animal-17", icon:"🦌", col:"#B9770A", t:"Persian fallow deer", d:"Once thought **extinct**. Now about **500** worldwide, about **300** wild in Israel." },
          { img:"animal-25", icon:"🐦", col:"#0B7A55", t:"Takahē", d:"Rediscovered **20 November 1948** in the **Murchison Mountains**, Fiordland. About **500** by **2023**." },
          { img:"animal-07", icon:"🐆", col:"#C9822B", t:"Asiatic cheetah?", status:"STILL AT RISK", d:"Could it be the next recovery story? It needs help **now**." }
        ],
        notes:[["SAY","Read each card."],["ASK","“What did the two recovery stories have in common?” (Protection, breeding, people working together.)"]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAY","“Sanctuaries present in small groups (Path A). Others choose B or C.”"],["CLICK","Start the 20-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Romans 8:19–21."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 30."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = darics."]] }
    ]
  };

  /* ======================= THURSDAY · TECHNOLOGY ======================= */
  const thu = {
    id:"w10-thu", week:10, day:"thu", subject:"technology", duration:50,
    title:"Showcase: Test, Evaluate & Present", guide:"nasrin",
    codes:["TE-TP","TE-TK","DT-CT","DT-DD"],
    coverage:"Technology (NZC L3): technological practice — evaluating outcomes against the brief and specifications; presenting. Digital Technologies: testing and debugging a finished program. Big Project: Desert Engineer or Royal Road Coder.",
    li:"We are learning to test our projects against the brief, evaluate them and present them.",
    sc:["I can test my project against its specifications.","I can evaluate what worked and what I'd improve.","I can present my project clearly."],
    vocab:[
      { w:"evaluate", def:"to judge how well something works" },
      { w:"specification", def:"a must-have that the design is tested against" },
      { w:"brief", def:"a description of who a design is for and what they need" },
      { w:"prototype", def:"an early model used to test an idea" },
      { w:"iteration", def:"one round of improving and testing again" },
      { w:"user", def:"the person who will use the design" }
    ],
    prep:{ min:15, items:["Desert Engineer models and Royal Road Coder games ready","iPads charged for games","Showcase checklists; feedback slips"] },
    safety:["Models handled gently; only teacher handles any fan or water set-up."],
    care:[],
    hononga:"**Designers in Aotearoa.** NZ designers and engineers, from those who build earthquake-safe buildings to those who make apps, all test, evaluate and improve, again and again.",
    paths:[
      { id:"A", name:"The Engineer", product:"Desert Engineer (Big Project)", steps:["Test your improved Persian invention against your **specifications**.","Record your **results**.","Present: the **need**, your **design**, your **tests**, your **improvement**."], flying:"Explain one trade-off you had to make." },
      { id:"B", name:"The Coder", product:"Royal Road Coder (Big Project)", steps:["Test your **Scratch courier game**: events, a loop, a score.","Fix any **bugs** (keep a bug log).","Let **two classmates** play it and give feedback."], flying:"Add one improvement from your testers' feedback." },
      { id:"C", name:"The Reviewer", product:"Showcase Reviewer", steps:["Visit **three** projects.","For each, use the **checklist**: need, specs, tests, improvement.","Give **two stars and a wish**."], flying:"Write a short review explaining which project best met its brief." }
    ],
    supportedShort:"a showcase checklist; partner presenting.",
    lens:{
      pillar:"manaaki", title:"Skill, ability and knowledge",
      look:"Look again at your projects: ideas, skill and hard work.",
      ref:"Exodus 31:2–5",
      paraphrase:"God filled Bezalel with the Spirit of God, with wisdom, understanding, knowledge and all kinds of skills, to make artistic designs and to work in gold, silver, stone and wood.",
      talk:[
        { q:"God gave Bezalel skill to build beautiful things. Where do our skills come from?", listen:"From God; He gives gifts and helps us learn." },
        { q:"How could your project help someone, if it were real?", listen:"Cooler homes, water for farms, a fun game that teaches." }
      ],
      live:"Thank God for one skill you've grown this term. Write it in your Caravan Journal."
    },
    clue:{ prompt:"How many stages are in our design cycle (need → plan → build → test → improve)?", answer:5, explain:"5 stages. Waystation Clue 4 = 5, saved for Friday's final Seal!" },
    next:"Friday — the Persia Exhibition, the final fragment, and a choice about Zal.",
    rubric:[
      { c:"Testing against specifications", code:"TE-TP",
        d:["Tests with help.","“It works.”"],
        a:["Tests each specification and records results.","A table: spec, test, result."],
        f:["Explains how the tests were fair.","“Same fan distance each time; three tries.”"],
        i:["I can test with help.","I can test each specification and record results.","I can explain how my tests were fair."] },
      { c:"Evaluating", code:"TE-TP · DT-DD",
        d:["Says it was good.","“I liked it.”"],
        a:["Explains what worked and what to improve.","“The tower cooled the box, but the streamer only moved with 4 openings.”"],
        f:["Uses feedback and evidence to plan the next iteration.","“Testers said it was too slow, so I'll change the wait to 1 second.”"],
        i:["I can say if it was good.","I can explain what worked and what to improve.","I can use feedback to plan the next step."] },
      { c:"Presenting", code:"TE-TK · EN",
        d:["Shows the project.","Holds it up."],
        a:["Explains the need, design, tests and improvement.","A clear 2-minute talk."],
        f:["Answers questions with technical vocabulary.","Uses ‘specification’, ‘iteration’, ‘variable’ correctly."],
        i:["I can show my project.","I can explain the need, design, tests and improvement.","I can answer questions with technical words."] }
    ],
    plan:{
      prior:"Students have built and tested qanats, windcatchers, ice houses, arches and code all term.",
      kc:["Thinking","Managing self","Participating & contributing"],
      sequence:[
        ["0–6","The Dispatch","Nasrin's dispatch; Waystation Check; LI/SC.","Recall."],
        ["6–12","Discovery","**The Design Cycle**; showcase checklist.","Review."],
        ["12–38","Showcase","Test, evaluate and present (Paths A/B); reviewers visit (Path C).","Present; review."],
        ["38–45","Through the Lens","Exodus 31:2–5.","Discuss."],
        ["45–50","Waystation Clue & Exit","Clue 4 (answer 5).","Solve; self-assess."]
      ],
      diff:{
        supported:"Checklist; partner presenting.",
        esol:"Demonstrate the model; key words.",
        learning:"Small-group showcase; movement.",
        flying:"Trade-offs; iteration plans."
      },
      assess:{
        lookFor:["Tests against specs","Evaluates","Presents clearly"],
        evidence:["Test tables","Games and models (photograph/video)","Exit self-assessment"]
      },
      inquiry:["Which projects go to Friday's Exhibition?","Record Technology core-rubric judgements."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"nasrin", meta:"The engineers' tent · models everywhere",
        msg:"Qanats, windcatchers, ice houses, arches, courier games… we've built so much! Today is **showcase day**. Every engineer has to answer four questions: **What was the need? Does it meet the specs? What did the tests show? What did you improve?** Ready?",
        notes:[["SAY","Read the dispatch. 🟡 Nasrin is fictional."]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"How many fallow deer were found in 1956?", a:"About 30." }, { q:"When was the takahē rediscovered?", a:"20 November 1948." }, { q:"What is a breeding programme?", a:"A plan to help animals have young safely." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Round and round", title:"The Design Cycle", ix:"designcycle",
        notes:[["CLICK","Press → through the five stages, then point to the showcase checklist."],["ASK","“Which stage did you repeat the most?”"]] },
      { type:"paths", phase:"paths", fs:null, minutes:26,
        notes:[["SAY","“Engineers and coders present; reviewers visit with checklists.”"],["CLICK","Start the 26-minute timer."],["SAFETY","Models handled gently."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Exodus 31:1–5."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 5."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = darics."]] }
    ]
  };

  /* ======================= FRIDAY · ART ======================= */
  const fri = {
    id:"w10-fri", week:10, day:"fri", subject:"art", duration:50,
    title:"The Persia Exhibition & the Seal of the Kings", guide:"hamid",
    codes:["VA-CI","VA-UC","VA-DI","MA","RE"],
    coverage:"Visual Arts (NZC 2007, Level 3): communicating and interpreting (exhibiting and talking about art), understanding art in context, developing ideas (Paradise Garden panel combining the term's techniques). Maths: Old Persian number signs. Christian Character: forgiveness and wisdom.",
    li:"We are learning to exhibit our art and explain how it connects to Persian art and to our own ideas.",
    sc:["I can present my Paradise Garden panel and explain the techniques I used.","I can write or say an artist statement.","I can respond thoughtfully to others' work."],
    vocab:[
      { w:"exhibition", def:"a public display of artworks" },
      { w:"artist statement", def:"a short explanation of an artwork: what, how and why" },
      { w:"technique", def:"a way of making art (printing, embossing, weaving…)" },
      { w:"curate", def:"to choose and arrange works for a display" },
      { w:"forgiveness", def:"choosing not to hold a wrong against someone" },
      { w:"wisdom", def:"knowing what is good and right, and doing it" }
    ],
    prep:{ min:30, items:["Exhibition set up: Paradise Garden panels, museum cases, city plans, sanctuaries, models and games","Artist statement cards","Optional: whānau invited; a Nowruz-style spring table with fruit and flowers (D14)","Award certificates (printed)"] },
    safety:["Walkways clear; displays stable."],
    care:["The Forgiveness Vote is a story moment: no student should feel pressured. All views are respected.","If whānau attend, welcome them warmly; invite students with family links to Iran to share if they wish."],
    hononga:"**An exhibition for our community.** Whānau and friends visit, like the 23 nations on the Apadana stairs bringing gifts. Our gifts are our work, our learning and our thanks.",
    paths:[
      { id:"A", name:"The Artist", product:"Paradise Garden Panel (Big Project)", steps:["Display your **Paradise Garden panel**.","Write an **artist statement**: what techniques (rosette, relief, foil, weaving…) and why.","Explain it to a visitor."], flying:"Explain how your panel shows the four-part garden and its meaning." },
      { id:"B", name:"The Curator", product:"Exhibition Guide", steps:["Choose **five works** for a guided tour.","Write a **one-sentence** guide for each.","Lead a small group around."], flying:"Arrange your tour to tell the story of the term." },
      { id:"C", name:"The Herald", product:"Opening Speech", steps:["Write a **1-minute opening speech** for the exhibition.","Thank the guests, explain the term's journey, invite them to look closely.","Deliver it at the start."], flying:"Include a line about the Seal's message." }
    ],
    supportedShort:"an artist-statement frame; partner presenting.",
    lens:{
      pillar:"sdg", title:"The LORD gives wisdom",
      look:"Look again at the Seal: ten fragments, joined. And its message: **seek wisdom like hidden treasure**.",
      ref:"Proverbs 2:1–6; Colossians 3:13",
      paraphrase:"If you look for wisdom as for silver and search for it as for hidden treasure, then you will understand the fear of the LORD and find the knowledge of God. For the LORD gives wisdom. Forgive as the Lord forgave you.",
      talk:[
        { q:"All term we searched for fragments. Proverbs says to search for wisdom like that. Where do we find it?", listen:"From God: His Word, prayer, wise people." },
        { q:"The caravan chose whether to forgive Zal. Why does forgiveness take wisdom and courage?", listen:"It's hard; it means letting go; it's what God did for us." }
      ],
      live:"Soli Deo Gloria. Write one thing you'll remember from this term, and thank God for it."
    },
    clue:{ prompt:"The final Seal: add this week's four Waystation Clues and write the total in Old Persian number signs.", answer:63, explain:"21 + 7 + 30 + 5 = 63 → three 20-signs, one 2-sign and one 1-sign." },
    next:"The end of the Royal Road. Soli Deo Gloria!",
    rubric:[
      { c:"Paradise Garden panel", code:"VA-DI · VA-PK",
        d:["Uses one technique.","A drawn garden."],
        a:["Combines several techniques around a four-part garden.","Rosette border, foil centre, printed figures."],
        f:["Combines techniques with purpose and meaning.","Each technique chosen to show a part of the term's journey."],
        i:["I can use one technique.","I can combine several techniques.","I can combine them with purpose and meaning."] },
      { c:"Artist statement", code:"VA-CI",
        d:["Names the artwork.","“My garden.”"],
        a:["Explains what, how and why.","“I used foil embossing for the pool because…”"],
        f:["Connects to Persian art and personal meaning.","“Like the Persepolis rosettes, my border repeats… it reminds me of…”"],
        i:["I can name my artwork.","I can explain what, how and why.","I can connect it to Persian art and my own meaning."] },
      { c:"Responding to others", code:"VA-CI · VA-UC",
        d:["Says they like it.","“It's nice.”"],
        a:["Gives specific, kind feedback.","“The colours in your border repeat evenly.”"],
        f:["Interprets meaning in others' work.","“Your dark night sky makes the gold star feel like hope.”"],
        i:["I can say I like it.","I can give specific, kind feedback.","I can interpret meaning in others' work."] }
    ],
    plan:{
      prior:"Every student has a Big Project and a term of artworks. The Shadow Courier was unmasked as Zal last week.",
      kc:["Relating to others","Participating & contributing","Using language, symbols & texts"],
      sequence:[
        ["0–5","The Dispatch","Hamid's dispatch; Waystation Check; LI/SC.","Recall."],
        ["5–25","The Exhibition","Guests arrive; students present Paradise Garden panels and Big Projects (Paths A/B/C).","Present; respond."],
        ["25–33","The Forgiveness Vote","What will the caravan do about Zal? Colossians 3:13; Romans 12:20–21.","Discuss; vote."],
        ["33–42","The Final Seal","21 + 7 + 30 + 5 = 63 → 20, 20, 20, 2, 1. All ten fragments join; the Seal's message (Proverbs 2:4, 2:6).","Solve; reflect."],
        ["42–50","Awards & Soli Deo Gloria","Esther Courage, Daniel Integrity, Nehemiah Teamwork, Bezalel Skill, Kaitiaki Creation Care, Grace Forgiveness.","Celebrate; give thanks."]
      ],
      diff:{
        supported:"Statement frame; partner presenting.",
        esol:"Visual displays; rehearsed phrases.",
        learning:"Quiet corner available; choice of role.",
        flying:"Curating; opening speech."
      },
      assess:{
        lookFor:["Combines techniques","Explains in an artist statement","Responds thoughtfully"],
        evidence:["Panels (photograph)","Artist statements","Exhibition photos","Final Seal (63)"]
      },
      inquiry:["Compare students' Week 1 and Week 10 Map Walls for the end-of-term reflection.","Record core-rubric judgements for reporting."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"hamid", meta:"The Gate of All Nations · lamps lit for guests",
        msg:"Welcome, welcome! The gate is open, the lamps are lit, and the guests are arriving: from every family, like the nations on the great staircase. Today we show everything we've made. And then… **one last fragment**, and a choice about **Zal**.",
        notes:[["SAY","Read it warmly to the guests and the class. 🟡 Master Hamid is fictional."]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"Name the five stages of the design cycle.", a:"Need, plan, build, test, improve." }, { q:"What is an artist statement?", a:"A short explanation of an artwork: what, how and why." }, { q:"Name three art techniques we used this term.", a:"Rosettes, seals, relief, printing, foil, weaving, miniatures, blending…" } ],
        notes:[["ASK","Quick oral recall with the guests watching."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"The Persia Exhibition", title:"Ten weeks on the Royal Road",
        cards:[ { icon:"🏺", t:"Museum Cases", d:"Objects and people of Persia, with evidence and perspectives.", foot:"History" }, { icon:"🏙️", t:"City Plans", d:"Fair desert cities for 10,000 people.", foot:"Geography" }, { icon:"🐆", t:"Sanctuaries", d:"Recovery plans for endangered animals.", foot:"Science" }, { icon:"⚙️", t:"Inventions & Games", d:"Desert engineering and courier games.", foot:"Technology" }, { icon:"🌺", t:"Paradise Gardens", d:"Panels combining the term's art techniques.", foot:"Art" } ],
        h:"520px",
        notes:[["SAY","“Welcome to our exhibition. Please look closely and ask the artists questions!”"]] },
      { type:"paths", phase:"paths", fs:null, minutes:20,
        notes:[["SAY","“Artists, curators and heralds: take your places.”"],["CLICK","Start the 20-minute timer."],["CARE","Keep a quiet corner for anyone overwhelmed."]] },
      { type:"interactive", phase:"decode", fs:"story", kicker:"What will the caravan do?", title:"The Forgiveness Vote", ix:"forgiveness",
        notes:[["SAY","“Zal followed us all term, mocked us, maybe stole from us. But Zal's family lost everything. What will the caravan do?”"],["CLICK","Teams talk (1 minute), then everyone votes. Then press → for Colossians 3:13, Romans 12:20–21 and Zal's reply."],["CARE","No pressure: this is a story choice. Respect every view. If the class votes ‘not yet’, say: “Forgiveness can take time. Zal still offers to help.”"],["NOTE","🟡 Zal is fictional."]] },
      { type:"folioseal", phase:"decode", fs:"story",
        notes:[["SAY","“The final four clues: 21, 7, 30, 5.”"],["CLICK","21 + 7 + 30 + 5 = 63."],["SAY","“63: three 20-signs make 60, then 3: one 2-sign and one 1-sign.”"],["CLICK","Press 20, 20, 20, 2, 1, then ‘Open the lock’. Fragment X completes the Seal!"]] },
      { type:"interactive", phase:"decode", fs:"story", kicker:"All ten fragments", title:"The Seal's message", ix:"sealmessage",
        notes:[["CLICK","Press → to reveal the message, then the answer to the whole quest."],["SAY","“The treasure was never just the Seal. It was wisdom, and the LORD gives wisdom.”"],["NOTE","The Seal's message is a paraphrase of Proverbs 2:4; the second line is Proverbs 2:6."]] },
      { type:"cards", phase:"decode", fs:null, kicker:"Soli Deo Gloria", title:"Caravan awards",
        cards:[ { icon:"👑", t:"Esther Courage", d:"Spoke up or tried something brave.", foot:"Esther 4:14" }, { icon:"🦁", t:"Daniel Integrity", d:"Did what was right when it was hard.", foot:"Daniel 6:10" }, { icon:"🧱", t:"Nehemiah Teamwork", d:"Worked with all their heart for the team.", foot:"Nehemiah 4:6" }, { icon:"🛠️", t:"Bezalel Skill", d:"Made something with skill and care.", foot:"Exodus 31:3" }, { icon:"🌿", t:"Kaitiaki Creation Care", d:"Cared for God's creation.", foot:"Genesis 2:15" }, { icon:"🤝", t:"Grace Forgiveness", d:"Forgave, or helped others make peace.", foot:"Colossians 3:13" } ],
        h:"500px",
        notes:[["SAY","Present each award with a reason. Every student should be recognised for something this term."],["CLICK","C = darics: the final tally!"]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Proverbs 2:1–6."],["SAY","Close in prayer: Soli Deo Gloria, to God alone the glory."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Final self-assessment for the term."],["CLICK","Thank the guests. Store Big Projects for reporting."]] }
    ]
  };

  BM.WEEKS[10] = {
    n:10,
    story:"The Gate of All Nations. The caravan comes home to Persepolis. The historians celebrate Persia's legacy (Nowruz, words and gardens) and present museum cases; the geographers present fair cities and see how Tehran has grown; the scientists celebrate the fallow deer and takahē comebacks and present sanctuaries; the engineers and coders showcase their projects; and on Friday the Persia Exhibition opens. The caravan votes on forgiving Zal, 21 + 7 + 30 + 5 = 63 frees the final fragment, and the Seal of the Kings reveals its message: seek wisdom as hidden treasure, for the LORD gives wisdom.",
    hononga:"Matariki and Nowruz (Mon) · NZ cities and newcomers (Tue) · kaitiakitanga and the takahē (Wed) · NZ designers (Thu) · whānau at the Exhibition (Fri).",
    seal:{
      answer:63,
      instruction:"Add the final four **Waystation Clues**. Then write the total in **Old Persian number signs**, biggest first, and press them into the clay. *(20 = two corner wedges · 2 = two upright wedges · 1 = one upright wedge.)*",
      reveal:"🟡 **Fragment X found!** Zal brings it out of hiding. All ten fragments blaze and join: **the Seal of the Kings is whole again.** Press → on the next slide to read its message."
    },
    lessons:[mon, tue, wed, thu, fri]
  };
})(window.BM);
