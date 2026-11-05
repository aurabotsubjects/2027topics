/* ==========================================================
   WEEK 10 — MAP SHEET X · OUR PLACE  (the Exhibition)
   Notes: [KEY, text]  KEY = SAY ASK LISTEN IF CLICK TALK DEEPER PACE SAFETY WAIT NOTE TIKANGA
   Facts are sourced in data/sources.js (tags match blueprint §18).
   Clues: 16 + 5 + 8 + 10 = 39 → 039°, the same bearing as Sheet I: full circle.
   ========================================================== */
(function(BM){
  "use strict";

  /* ======================= MONDAY · HISTORY ======================= */
  const mon = {
    id:"w10-mon", week:10, day:"mon", subject:"history", duration:50,
    title:"Hakatere Today: Many Families, One Place", guide:"nell",
    codes:["SS-H","SS-P","ANZH","SS-C"],
    coverage:"Y5–6 History and Civics (2027): identity, belonging and the many groups who make up a community; using sources to present local history. Aotearoa New Zealand's Histories: tūrangawaewae and mana whenua in our place today. Big Project presentation (museum cases).",
    li:"We are learning how many families and cultures make up Hakatere today, and to present our museum cases.",
    sc:["I can explain how Hakatere today is home to many families and cultures.","I can present my museum case with a label, evidence and two perspectives.","I can show how my understanding of our place has grown since Week 1."],
    vocab:[
      { w:"community", def:"the people who live in a place and share it" },
      { w:"culture", def:"the way of life, beliefs, language and traditions of a group" },
      { w:"heritage", def:"what is passed down to us from the past" },
      { w:"tūrangawaewae", say:"too-RAH-ngah-WAI-wai", def:"a place to stand; a place where you belong" },
      { w:"curator", def:"someone who chooses and looks after objects for a museum" },
      { w:"exhibit", def:"an object or display shown in a museum" },
      { w:"evidence", def:"information that shows something is true" }
    ],
    prep:{ min:15, items:["Big Project museum cases ready on desks","The Week 1 Map Wall notes (they are saved in the app)","Printed museum labels (use the Museum Label tool)","Optional: invite a staff member from the Ashburton Museum"] },
    safety:["Some families' stories include hard things (leaving another country, loss). Students share only what their families are happy for them to share."],
    tikanga:["Acknowledge mana whenua first when presenting the history of our place: Kāi Tahu and Te Rūnanga o Arowhenua.","Museum cases about Māori taonga need whānau permission and should be checked with your Māori lead (D3)."],
    hononga:"**One place, many families.** Kāi Tahu are tākata whenua of Hakatere, and Arowhenua and Hakatere Marae are part of our community today. Alongside them are families whose people came in the 1850s, after the war, or last year. All of them now call Hakatere home.",
    paths:[
      { id:"A", name:"The Curator", product:"Present Your Museum Case", steps:["Set up your **museum case** with its **label**.","Present it in **1 minute**: the object or story, **how we know**, and **two perspectives**.","Answer **one question** from the audience."], flying:"Explain how your case connects to something we learned this term." },
      { id:"B", name:"The Visitor", product:"Gallery Walk Feedback", steps:["Visit **three** museum cases.","For each, write **one thing you learned** and **one question**.","Leave your feedback card by the case."], flying:"Find two cases that tell different perspectives on the same thing." },
      { id:"C", name:"The Guide", product:"Exhibition Guide Plan", steps:["Plan a **2-minute tour** of the class museum for Friday's visitors.","Choose **3 cases** and write what you'll say about each.","Begin by **acknowledging mana whenua**."], flying:"Write an introduction panel for the whole History section." }
    ],
    supportedShort:"a presentation script frame, feedback cards, a tour planning sheet.",
    lens:{
      pillar:"sdg", title:"Every nation, tribe, people and language",
      look:"Look again at our community: tākata whenua, families from long ago, families from just last year.",
      ref:"Revelation 7:9",
      paraphrase:"I looked, and there was a great crowd that no one could count, from every nation, tribe, people and language, standing before the throne and before the Lamb.",
      talk:[
        { q:"Revelation pictures every people together before God. What does that mean for the many families of Hakatere?", listen:"Everyone belongs; every culture matters to God; we can welcome each other; we're one family in Christ." },
        { q:"How can our class help everyone feel they belong in our place?", listen:"Learn names and greetings; listen to stories; use both names; include newcomers." }
      ],
      live:"Learn **one thing** about another family's culture or story this week."
    },
    clue:{ prompt:"How many local families were featured in the Ashburton Museum's Hakatere: Home & Heritage exhibition?", answer:16, explain:"Sixteen families. Trig Clue 1 is saved for Friday!" },
    next:"Tuesday — Sam says it's time to stand up for our mountains and rivers. Campaign launch!",
    rubric:[
      { c:"Many families", code:"SS-H · ANZH",
        d:["Names one group in our community.","“Farmers.”"],
        a:["Explains how Hakatere is home to many families and cultures.","“Kāi Tahu are tākata whenua; settler families came from the 1850s; new families still arrive from many countries.”"],
        f:["Explains why every story matters to the whole community.","“When we know each other's stories, we understand our place better and everyone belongs.”"],
        i:["I can name one group.","I can explain how many families make up Hakatere.","I can explain why every story matters."] },
      { c:"Museum case", code:"SS-P",
        d:["Shows an object.","Object with no label."],
        a:["Presents a case with a label, evidence and two perspectives.","Label, ‘how do we know?’ card and two perspectives, explained clearly."],
        f:["Judges the reliability of the evidence.","“Grandad's memory is a primary source, but I checked the date with an old photo.”"],
        i:["I can show an object.","I can present a case with evidence and perspectives.","I can judge my evidence."] },
      { c:"Growth", code:"SS-H",
        d:["Adds one new note to the Map Wall.","One fact."],
        a:["Shows how their understanding has grown since Week 1.","“In Week 1 I knew the river's name; now I know its history, people and promises.”"],
        f:["Explains what changed their thinking most.","“Learning about Kemp's Deed changed how I see the map.”"],
        i:["I can add a new fact.","I can show how my understanding has grown.","I can explain what changed my thinking."] }
    ],
    plan:{
      prior:"A whole term: tākata whenua, trails, Kemp's Deed, the station, the town, the race, the flood and Te Kerēme. Big Project museum cases are ready to present.",
      kc:["Relating to others","Using language, symbols & texts","Participating & contributing"],
      sequence:[
        ["0–6","Field Note","Nell's note: the last sheet. Map Wall: compare with Week 1.","Recall; add notes."],
        ["6–14","Survey","Hakatere: Home & Heritage; **Museum Label** tool.","Discuss; finish labels."],
        ["14–38","Choose Your Path","Present cases / gallery walk / guide plan.","Present; give feedback."],
        ["38–45","Through the Lens","Revelation 7:9 — four moves.","Discuss; learn a story."],
        ["45–50","Trig Clue & Exit","Trig Clue 1 (answer 16); self-assessment; wheat sheaves.","Solve; self-assess."]
      ],
      diff:{
        supported:"Presentation script frame; partner presenting.",
        esol:"Present with photos and a few key words; home language welcome.",
        learning:"Present to a small group instead of the class; calm screen available.",
        flying:"Evidence reliability; linking cases to the term."
      },
      assess:{
        lookFor:["Explains many families, one place","Presents with evidence and two perspectives","Shows growth since Week 1"],
        evidence:["Museum cases (photograph)","Map Wall Week 1 vs Week 10","History core rubric (Unit Plan)"]
      },
      inquiry:["Photograph the Map Wall for Week 1 vs Week 10 evidence.","Mark museum cases with the History core rubric.","Confirm Friday's Exhibition plan with your Māori lead (karakia/mihi?)."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"nell", meta:"Conservation room · the last sleeve",
        msg:"There's **one sheet left**: Sheet X. The field book calls it simply *Our Place*. Before we open it on Friday, let's look at what **our place** is today: who lives here, whose stories are told, and what **you** now know that you didn't know in Week 1.",
        notes:[["SAY","Read the message. 🟡 Nell is fictional."]] },
      { type:"glyphwall", phase:"transmission", fs:null, title:"What do you know about our place now?",
        notes:[["SAY","“These are the notes you wrote in Week 1. What would you add now?”"],["CLICK","Type new notes from students. Drag them beside the Week 1 notes to compare."],["NOTE","Photograph the wall: it's your Week 1 vs Week 10 evidence."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Ashburton Museum, 2021", title:"*Hakatere*: Home & Heritage",
        bullets:["In 2021 the **Ashburton Museum** held an exhibition called **Hakatere: Home & Heritage**.","It featured **16 local families**: some born in Ashburton, some who came from overseas.","It showed **photographs** by local photographer **Emmily Harmer**, families' **stories** and their **cultural dress**."],
        visual:{ artefact:"fieldbook" },
        notes:[["SAY","Facts from Ashburton District Council (Hakatere: Home & Heritage to be celebrated at museum, 2021)."],["ASK","“If our class made an exhibition like this, whose stories would be in it?”"],["TIKANGA","Begin with mana whenua: Kāi Tahu, Te Rūnanga o Arowhenua and Hakatere Marae."]] },
      { type:"interactive", phase:"excavate", fs:null, kicker:"Finish your label", title:"Museum Label", ix:"museumlabel",
        notes:[["CLICK","Model one label, then let students type theirs on devices, or fill in the printed version."],["NOTE","The label saves in this browser. Print with ‘Print label’ (or Ctrl/Cmd + P)."]] },
      { type:"paths", phase:"paths", fs:null, minutes:24,
        notes:[["SAY","“Choose your path. Curators present; visitors give feedback; guides plan Friday's tour.”"],["CLICK","Start the 24-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Revelation 7:9."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 16."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess. Thank presenters."],["CLICK","C = wheat sheaves."]] }
    ]
  };

  /* ======================= TUESDAY · GEOGRAPHY ======================= */
  const tue = {
    id:"w10-tue", week:10, day:"tue", subject:"geography", duration:50,
    title:"Kaitiaki of the Mountains: Our Campaign", guide:"sam",
    codes:["SS-C","SS-G","EN"],
    coverage:"Y6 Civics (2027): taking informed action on an issue in our community; how people persuade others and influence decisions. Geography: caring for places (braided rivers, mountains, dark skies). Big Project presentation (field guides and campaigns).",
    li:"We are learning to take action for our mountains and rivers through a campaign.",
    sc:["I can choose a cause and explain why it matters, using evidence.","I can make a campaign message for a real audience.","I can explain how citizens can influence decisions."],
    vocab:[
      { w:"kaitiaki", say:"kai-tee-AH-kee", def:"a guardian or caretaker, especially of land, water and living things" },
      { w:"campaign", def:"a planned effort to persuade people to do something" },
      { w:"audience", def:"the people you want to reach" },
      { w:"call to action", def:"the clear thing you ask people to do" },
      { w:"persuade", def:"to convince someone to think or do something" },
      { w:"citizen", def:"a member of a community or country, with rights and responsibilities" }
    ],
    prep:{ min:10, items:["Big Project field guides and campaigns ready to share","Paper, markers or devices for posters","Optional: find out how to send a letter to the Ashburton District Council or ECan"] },
    safety:[],
    tikanga:["Kaitiaki is a Māori concept with deep meaning. Use it respectfully, and acknowledge that Kāi Tahu are kaitiaki of these mountains and rivers. Check how to explain it with your Māori lead."],
    hononga:"**Kaitiakitanga.** Kāi Tahu have cared for the mountains, rivers and mahika kai of Hakatere for generations. When we campaign for the river, we join a much older story of guardianship.",
    paths:[
      { id:"A", name:"The Field Guide", product:"Present Your Field Guide", steps:["Present your **Mountain Field Guide** in **1 minute**.","Share the **most surprising fact** and **one hazard or threat**.","Say **one way** people can care for it."], flying:"Link your guide to a campaign idea." },
      { id:"B", name:"The Campaigner", product:"Campaign Poster", steps:["Choose a **cause**: river birds, the river, or dark skies.","Make a **poster** with a **headline**, **why it matters** (with a fact) and a **call to action**.","Decide **where** it will go to reach your audience."], flying:"Write a short letter to the council or ECan to go with it." },
      { id:"C", name:"The Speaker", product:"Assembly Speech", steps:["Write a **1-minute speech** for assembly or a council meeting.","Use **one fact**, **one story** and **one clear ask**.","Practise it with a partner."], flying:"Answer a tough question someone might ask." }
    ],
    supportedShort:"a poster template, campaign word bank, sentence frames (“Please… because…”).",
    lens:{
      pillar:"panga", title:"Caring for creatures",
      look:"Look again at the river birds on their gravel nests, and the people who give them space.",
      ref:"Proverbs 12:10",
      paraphrase:"Good people care about the needs of their animals.",
      talk:[
        { q:"Why does the Bible link being good with caring for animals?", listen:"God made them; He cares for them; how we treat the weak shows our heart; we're His caretakers." },
        { q:"What's one real thing our class can do for the mountains or rivers?", listen:"Share our posters; write to the council; give birds space; pick up rubbish; tell our families." }
      ],
      live:"Put your **campaign into action**: put up the poster, send the letter, or tell three people."
    },
    clue:{ prompt:"River birds need space from 1 September to 1 February. How many months is that?", answer:5, explain:"September, October, November, December, January: 5 months. Trig Clue 2 is saved!" },
    next:"Wednesday — Dr Priya is taking us to one of the darkest skies on Earth. Sky Expo day!",
    rubric:[
      { c:"Cause & evidence", code:"SS-G · SS-C",
        d:["Names a cause.","“Save birds.”"],
        a:["Explains why a cause matters, with evidence.","“Over 60% of NZ's braided riverbed is in Canterbury, and birds nest on it from September to February.”"],
        f:["Considers different perspectives on the cause.","“Fishers and drivers use the river too, so we suggest tracks rather than a ban.”"],
        i:["I can name a cause.","I can explain why it matters with evidence.","I can consider different perspectives."] },
      { c:"Campaign message", code:"EN · SS-C",
        d:["Makes a sign.","“Save the birds!”"],
        a:["Makes a clear message with a call to action for an audience.","Headline, fact, and ‘Keep dogs on a lead’ for families at the river."],
        f:["Chooses words and design to persuade a specific audience.","Short, friendly words and a bird photo for families; facts for the council."],
        i:["I can make a sign.","I can make a clear campaign message.","I can persuade a specific audience."] },
      { c:"Taking action", code:"SS-C",
        d:["Says people should help.","“Everyone should help.”"],
        a:["Explains how citizens can influence decisions.","“We can write to the council, make submissions, and tell our community.”"],
        f:["Plans a real next step and who to contact.","“We'll send our posters to the DOC office and the council's river team.”"],
        i:["I can say people should help.","I can explain how citizens influence decisions.","I can plan a real next step."] }
    ],
    plan:{
      prior:"Students know braided rivers and their birds (Weeks 4, 6), water and climate (Weeks 5, 7, 9), and people and mountains (Week 7). Some Big Projects are campaigns.",
      kc:["Participating & contributing","Using language, symbols & texts"],
      sequence:[
        ["0–6","Field Note","Sam's message. Trig Check (Monday). LI/SC.","Recall; predict."],
        ["6–16","Survey","Kaitiaki; how campaigns work; **Campaign** poster maker.","Plan; design."],
        ["16–38","Choose Your Path","Field guide / poster / speech.","Present; make; practise."],
        ["38–45","Through the Lens","Proverbs 12:10 — four moves.","Discuss; act."],
        ["45–50","Trig Clue & Exit","Trig Clue 2 (answer 5); self-assessment; wheat sheaves.","Solve; self-assess."]
      ],
      diff:{
        supported:"Poster template; word bank; sentence frames.",
        esol:"Visual posters with few words; rehearse one sentence.",
        learning:"Choice of product; partner work; calm screen available.",
        flying:"Perspectives; persuasive choices; real next steps."
      },
      assess:{
        lookFor:["Explains the cause with evidence","Makes a clear message","Plans real action"],
        evidence:["Posters and speeches (photograph)","Field guides","Geography core rubric (Unit Plan)"]
      },
      inquiry:["Which campaigns can really go out (school newsletter, council, DOC)?","Mark field guides with the Geography core rubric.","Display posters at Friday's Exhibition."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"sam", meta:"Hakatere riverbed · September",
        msg:"The first **wrybill** of the season is back on the riverbed, and someone has just driven a ute straight past its nest. Ten weeks ago you didn't know what a braided river was. Now you know more than most adults. It's time to **use** what you know. Let's **campaign**.",
        notes:[["SAY","Read the message. 🟡 Sam is fictional."],["ASK","“What do you care about most from this term's learning?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"How many families were in Hakatere: Home & Heritage?", a:"16." }, { q:"What goes on a museum label?", a:"The object or story, how we know, and two perspectives." }, { q:"Who are the tākata whenua of Hakatere?", a:"Kāi Tahu (with Waitaha and Kāti Māmoe before them); Te Rūnanga o Arowhenua." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"How to campaign", title:"Be a *kaitiaki*", h:"500px",
        cards:[ { icon:"🎯", t:"Cause & audience", d:"**What** do you want to change, and **who** needs to hear it? Families at the river? The council?" }, { icon:"📊", t:"Evidence", d:"Use a **fact** from this term: e.g. braided-river birds nest from **1 September to 1 February**." }, { icon:"📣", t:"Call to action", d:"Ask for **one clear thing**: keep dogs on a lead, drive on tracks, point lights down." } ],
        notes:[["SAY","Nesting season dates from DOC and Canterbury Regional Council (via DOC, 2024)."],["TIKANGA","“Kāi Tahu have been kaitiaki of these rivers for generations. We're joining that work, not starting it.”"]] },
      { type:"interactive", phase:"excavate", fs:null, kicker:"Make it", title:"Campaign", ix:"campaign",
        notes:[["CLICK","Choose a cause; type a headline, message and call to action. Print the poster."],["ASK","“Would your audience stop and read it? Why?”"]] },
      { type:"discussion", phase:"excavate", fs:"real", kicker:"Turn & Talk", q:"Who has the **power to decide** about our rivers and mountains, and **how** could our class reach them?", sub:"Think about the council, ECan, DOC, Arowhenua, farmers and families.", talk:45,
        notes:[["TALK","45-second talk."],["LISTEN","Write letters; make submissions; talk to councillors; share posters; invite someone to visit; tell our families."]] },
      { type:"paths", phase:"paths", fs:null, minutes:22,
        notes:[["SAY","“Choose your path. Make it real: who will see it?”"],["CLICK","Start the 22-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Proverbs 12:10."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 5 (September to January)."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess. Collect posters for the Exhibition."],["CLICK","C = wheat sheaves."]] }
    ]
  };

  /* ======================= WEDNESDAY · SCIENCE ======================= */
  const wed = {
    id:"w10-wed", week:10, day:"wed", subject:"science", duration:50,
    title:"Seeing Further: Telescopes, Dark Skies & the Sky Expo", guide:"priya",
    codes:["SC-ES","SC-P"],
    coverage:"Y6 Science (2027): how people investigate the sky (telescopes, observatories); light and distance; the effect of light pollution; presenting observations (Sky Watcher's Journals). Post-assessment: ‘Draw the night sky’.",
    li:"We are learning how telescopes and dark skies help us see further, and to present our sky observations.",
    sc:["I can explain why dark skies help us see more stars.","I can explain how light travel tells us about distance.","I can present my Sky Watcher's Journal and what I found out."],
    vocab:[
      { w:"telescope", def:"an instrument that gathers more light than our eyes, so we can see faint and distant things" },
      { w:"observatory", def:"a building with telescopes for studying the sky" },
      { w:"light pollution", def:"artificial light that brightens the night sky and hides the stars" },
      { w:"dark sky reserve", def:"an area protected so its night sky stays dark" },
      { w:"speed of light", def:"how fast light travels: about 300,000 km every second" },
      { w:"observation", def:"something you notice and record carefully" }
    ],
    prep:{ min:10, items:["Sky Watcher's Journals and star-finders ready to present","Paper for ‘Draw the night sky’ (compare with the Week 1 baseline)","Optional: a torch to show light spreading up vs down"] },
    safety:["Stargazing with an adult. Never look at the Sun, even with a telescope."],
    tikanga:["Māori navigated and planned the year by the night sky (Weeks 5–6, 9). The Aoraki Mackenzie reserve also honours that history."],
    hononga:"**Looking up together.** From Matariki and Puaka to Te Ikaroa and the Southern Cross, this term we've seen the sky through science and through te ao Māori. Dark skies protect both.",
    paths:[
      { id:"A", name:"The Observer", product:"Present Your Sky Journal", steps:["Present your **Sky Watcher's Journal** in **1 minute**.","Share your **question**, **what you observed** and **what you found out**.","Show **one drawing or record**."], flying:"Explain what you'd investigate next and why." },
      { id:"B", name:"The Artist", product:"Draw the Night Sky (again)", steps:["**Draw the night sky** as you did in Week 1.","Label everything you can: Matariki, Puaka, the Southern Cross, Te Ikaroa, the Moon's phase…","Compare with your **Week 1 drawing**: what's new?"], flying:"Add arrows showing how the sky moves through the night." },
      { id:"C", name:"The Advocate", product:"Dark Sky Pledge", steps:["Make a **dark-sky pledge card** for your family.","Explain **why** dark skies matter, with **one fact**.","List **two actions** (point lights down, switch off)."], flying:"Explain why the Mackenzie protects its dark sky." }
    ],
    supportedShort:"a presentation frame, a labelled sky chart to copy, sentence frames.",
    lens:{
      pillar:"mohio", title:"Lights in the sky",
      look:"Look again at the dark sky: thousands of stars that light pollution would hide.",
      ref:"Genesis 1:14–16",
      paraphrase:"God said, ‘Let there be lights in the sky to separate day from night, and let them be signs to mark seasons, days and years.’ He made the two great lights, the sun and the moon. He also made the stars.",
      talk:[
        { q:"This term, how have the lights in the sky marked seasons, days and years for people in our place?", listen:"Matariki and Puaka for the new year; the Moon for the maramataka; the Sun for seasons; stars for navigation." },
        { q:"Why might God want us to be able to see the stars?", listen:"To wonder; to know Him; to find our way; to remember how big He is." }
      ],
      live:"Choose **one dark-sky action** at home this week, then go outside and **look up**."
    },
    clue:{ prompt:"Sunlight takes about 8 minutes and 20 seconds to reach Earth. How many whole minutes is that?", answer:8, explain:"8 whole minutes (and 20 seconds). Trig Clue 3 is saved!" },
    next:"Thursday — Liv says it's showcase day. Time to test our Smart Farms against their briefs.",
    rubric:[
      { c:"Dark skies", code:"SC-ES",
        d:["Says you see stars at night.","“It's dark at night.”"],
        a:["Explains why dark skies help us see more stars.","“Light pollution brightens the sky and hides faint stars, so places like the Mackenzie control their lights.”"],
        f:["Explains how to reduce light pollution.","“Point lights down and switch them off, so light stays on the ground.”"],
        i:["I know stars come out at night.","I can explain why dark skies help.","I can explain how to reduce light pollution."] },
      { c:"Light & distance", code:"SC-ES",
        d:["Says light is fast.","“Light is really fast.”"],
        a:["Explains how light travel tells us about distance.","“Sunlight takes about 8 minutes to reach us; light from the Small Magellanic Cloud takes far, far longer.”"],
        f:["Uses light-years to compare distances.","“Matariki is about 443 light-years away; the Small Magellanic Cloud is about 190,000.”"],
        i:["I know light is fast.","I can explain light travel and distance.","I can compare distances in light-years."] },
      { c:"Presenting observations", code:"SC-P",
        d:["Shows a drawing.","One sky drawing."],
        a:["Presents a question, observations and a finding.","“My question was how the Moon changes. Over 3 weeks it went from crescent to full and back.”"],
        f:["Explains what they'd investigate next.","“Next I'd find out when Puaka rises earlier each day.”"],
        i:["I can show my work.","I can present a question, observations and a finding.","I can plan what to investigate next."] }
    ],
    plan:{
      prior:"A term of sky science: planets (W1), the Sun (W2), spin (W3), seasons (W4), the Moon (W5), Matariki (W6), star life (W7), galaxies (W8), wayfinding (W9). Big Project Sky Watcher's Journals are ready.",
      kc:["Thinking","Using language, symbols & texts"],
      sequence:[
        ["0–6","Field Note","Dr Priya's message. Trig Check (Tuesday). LI/SC.","Recall; predict."],
        ["6–16","Survey","Mt John and the dark-sky reserve; **Dark Sky**; light travel.","Predict; observe; explain."],
        ["16–38","Choose Your Path","Sky Expo: journals / draw the sky / pledge.","Present; draw; compare."],
        ["38–45","Through the Lens","Genesis 1:14–16 — four moves.","Discuss; look up."],
        ["45–50","Trig Clue & Exit","Trig Clue 3 (answer 8); self-assessment; wheat sheaves.","Solve; self-assess."]
      ],
      diff:{
        supported:"Presentation frame; sky chart; sentence frames.",
        esol:"Present with drawings and labels.",
        learning:"Present to a small group; calm screen available.",
        flying:"Light-years comparisons; next investigations."
      },
      assess:{
        lookFor:["Explains dark skies","Explains light travel","Presents observations"],
        evidence:["Sky Journals","‘Draw the night sky’ Week 1 vs Week 10","Science core rubric (Unit Plan)"]
      },
      inquiry:["Compare ‘Draw the night sky’ drawings: photograph pairs for evidence.","Mark Sky Journals with the Science core rubric.","Display journals at Friday's Exhibition."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"priya", meta:"Takapō / Tekapo · Mt John",
        msg:"Tonight I'm on top of **Mt John**, above Lake Takapō, in one of the **darkest skies on Earth**. The stars are so thick that Te Ikaroa casts a faint glow on the ground. Down the road, a town's lights would hide most of them. Today is our **Sky Expo**: what can **you** see now that you couldn't in Week 1?",
        notes:[["SAY","Read the message. 🟡 Dr Priya is fictional."]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"When do braided-river birds need space?", a:"1 September to 1 February." }, { q:"What is a call to action?", a:"The clear thing you ask people to do." }, { q:"What does kaitiaki mean?", a:"A guardian or caretaker of land, water and living things." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"One of the darkest skies", title:"Mt John & the *dark-sky reserve*",
        bullets:["**Mt John Observatory** (University of Canterbury) sits above Lake Takapō/Tekapo.","The **Aoraki Mackenzie Dark Sky Reserve** (**2012**, about **4,300 km²**) was the world's first **gold-rated** reserve.","**Lighting controls** since the early **1980s** protect the view, save energy and help wildlife."],
        visual:{ artefact:"starchart" },
        notes:[["SAY","Facts from RNZ (Aoraki-Mackenzie Dark Sky Reserve) and DarkSky International."],["ASK","“Why would a telescope work better in a dark place?”"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Switch off the lights", title:"Dark Sky", ix:"darksky",
        notes:[["CLICK","Slide the outdoor lights up and down; press ‘Point lights down’. (→ steps: shield, dark sky, town.)"],["ASK","“How many stars disappear in town? What's the easiest fix?”"],["NOTE","Star counts are a model, not real measurements."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Seeing further", title:"Light takes *time*", h:"480px",
        cards:[ { icon:"☀️", t:"The Sun", d:"Sunlight takes about **8 minutes 20 seconds** to reach Earth, about **150 million km** away." }, { icon:"✨", t:"Matariki", d:"About **443 light-years** away (Week 6): its light left long before Hakatere Station was built." }, { icon:"🌌", t:"Small Magellanic Cloud", d:"About **190,000 light-years** away (Week 8): one of the most distant things you can see with your eyes." } ],
        notes:[["SAY","Sun facts from the Smithsonian (How things fly: ask an explainer)."],["NOTE","Distances are measurements (D8 §4.6)."],["SAY","“A telescope gathers more light than your eye, so it can see fainter, more distant things.”"]] },
      { type:"paths", phase:"paths", fs:null, minutes:22,
        notes:[["SAY","“Sky Expo! Observers present; artists draw the sky again; advocates make pledges.”"],["CLICK","Start the 22-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Genesis 1:14–16."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 8."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess. Collect journals and drawings for the Exhibition."],["CLICK","C = wheat sheaves."]] }
    ]
  };

  /* ======================= THURSDAY · TECHNOLOGY ======================= */
  const thu = {
    id:"w10-thu", week:10, day:"thu", subject:"technology", duration:50,
    title:"Smart Farm Showcase: Test, Evaluate & Present", guide:"liv",
    codes:["TE-TP","TE-TK","DT-CT","DT-DD"],
    coverage:"Technology (NZC 2007 L3): technological practice — evaluating an outcome against its brief and specifications, with stakeholder feedback. Digital Technologies PO2: testing and debugging. Big Project presentation (Smart Farms).",
    li:"We are learning to test our Smart Farms, evaluate them against their briefs, and present them.",
    sc:["I can test my outcome against each specification.","I can use feedback to decide on an improvement.","I can present how my machine and program work."],
    vocab:[
      { w:"evaluate", def:"to judge how well something meets its goals" },
      { w:"brief", def:"a description of what an outcome must do and who it's for" },
      { w:"specification", def:"a rule the design must meet" },
      { w:"stakeholder", def:"a person who will use or is affected by the outcome" },
      { w:"prototype", def:"an early model built to test an idea" },
      { w:"iterate", def:"to improve something by testing and changing it, again and again" }
    ],
    prep:{ min:15, items:["Smart Farm models and devices with Scratch simulations","Printed evaluation sheets (or use the Showcase tool)","Space for a ‘science fair’ layout"] },
    safety:["Models on tables, not the floor. Skewer points taped. Hands clear of moving parts."],
    tikanga:[],
    hononga:"**Technology that serves people and the land.** This term's machines (levers, gears, pulleys, pivots and smart programs) all changed life on the plains. Good design asks: who does this help, and what does it cost the land and water?",
    paths:[
      { id:"A", name:"The Evaluator", product:"Evaluation Report", steps:["Test your Smart Farm against **each specification**.","Record **Met / Partly / Not yet** with evidence.","Write **one improvement** and **why** it would help your stakeholder."], flying:"Explain how you would test the improvement." },
      { id:"B", name:"The Demonstrator", product:"Showcase Demo", steps:["Demonstrate your **mechanism** and your **Scratch simulation**.","Explain **which simple machines** and **which code** (loops, if/else, variables) you used.","Ask a visitor for **feedback**."], flying:"Show a bug you found and how you fixed it." },
      { id:"C", name:"The Tester", product:"Peer Testing", steps:["Test **two** classmates' Smart Farms against **their** briefs.","Give **one warm** and **one cool** for each.","Record your findings for them."], flying:"Suggest one specification they could add." }
    ],
    supportedShort:"a spec checklist, a warm/cool card, a demo script frame.",
    lens:{
      pillar:"manaaki", title:"With all your heart",
      look:"Look again at the Smart Farms: built, tested, fixed and tested again.",
      ref:"Colossians 3:23",
      paraphrase:"Whatever you do, work at it with all your heart, as working for the Lord, not for people.",
      talk:[
        { q:"What does it look like to work ‘with all your heart’ on a project like this?", listen:"Don't give up after a bug; test carefully; help others; finish well; do your best even when no one's watching." },
        { q:"How does working ‘for the Lord’ change how we feel when something fails?", listen:"We can try again; failure isn't the end; God values effort and character; we learn." }
      ],
      live:"Thank someone who helped you with your Smart Farm, and tell them **what you learned**."
    },
    clue:{ prompt:"A pivot turns 36° every hour. How many hours does it take to go all the way round (360°)?", answer:10, explain:"360 ÷ 36 = 10 hours. Trig Clue 4 is saved for Friday!" },
    next:"Friday — the Our Place Exhibition. And the last seal: Sheet X.",
    rubric:[
      { c:"Testing against the brief", code:"TE-TP",
        d:["Says if it works.","“It works.”"],
        a:["Tests the outcome against each specification with evidence.","Rotates a full circle: Met. Waters only when dry: Partly (sensor value wrong)."],
        f:["Designs fair tests and repeats them.","Tested three times at three moisture levels."],
        i:["I can say if it works.","I can test against each specification.","I can design fair, repeated tests."] },
      { c:"Evaluating & improving", code:"TE-TP · DT-CT",
        d:["Lists a problem.","“The wheel fell off.”"],
        a:["Uses feedback to choose an improvement.","“My stakeholder needed it to stop when wet, so I fixed the if/else.”"],
        f:["Explains the trade-offs of the improvement.","“A bigger arm waters more but needs a stronger tower.”"],
        i:["I can list a problem.","I can use feedback to choose an improvement.","I can explain trade-offs."] },
      { c:"Presenting", code:"TE-TK · DT-DD",
        d:["Shows the model.","Shows it without explaining."],
        a:["Explains how the mechanism and the program work.","“The gears turn the wheels slowly but strongly; the loop turns the pivot; the variable counts rotations.”"],
        f:["Links the design to the stakeholder's needs.","“Liv wanted visitors to understand pivots, so I added labels and a slow mode.”"],
        i:["I can show my model.","I can explain how it works.","I can link it to my stakeholder."] }
    ],
    plan:{
      prior:"Students built mechanisms (Weeks 1–5) and Scratch programs with sequence, loops, if/else and variables (Weeks 6–9). Smart Farm projects began in Week 6.",
      kc:["Thinking","Managing self","Participating & contributing"],
      sequence:[
        ["0–6","Field Note","Liv's message. Trig Check (Wednesday). LI/SC.","Recall; set up."],
        ["6–14","Survey","Evaluating against a brief; **Showcase** evaluation tool.","Plan tests."],
        ["14–38","Choose Your Path","Evaluate / demonstrate / peer-test (science-fair style).","Test; demo; feedback."],
        ["38–45","Through the Lens","Colossians 3:23 — four moves.","Discuss; thank a helper."],
        ["45–50","Trig Clue & Exit","Trig Clue 4 (answer 10); self-assessment; wheat sheaves.","Solve; self-assess."]
      ],
      diff:{
        supported:"Spec checklist; demo script frame; partner.",
        esol:"Demonstrate with gestures and labels.",
        learning:"Demo to a small group; calm screen available.",
        flying:"Fair tests; trade-offs; stakeholder links."
      },
      assess:{
        lookFor:["Tests against the brief","Uses feedback to improve","Explains mechanism and code"],
        evidence:["Evaluation sheets","Smart Farms (photograph/video)","Technology core rubric (Unit Plan)"]
      },
      inquiry:["Mark Smart Farms with the Technology core rubric.","Which Smart Farms go to the Exhibition with a ‘try me’ sign?","Note students who iterated after a failed test."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"liv", meta:"Machinery shed · showcase day",
        msg:"I've cleared the shed and set up tables. **Showcase day!** Every engineer brings a **Smart Farm**: a working model plus a Scratch program. But a real engineer doesn't just say ‘it works’. We **test** it against the **brief**, take **feedback**, and make it **better**.",
        notes:[["SAY","Read the message. 🟡 Liv is fictional."]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"How long does sunlight take to reach Earth?", a:"About 8 minutes 20 seconds." }, { q:"What is light pollution?", a:"Artificial light that brightens the night sky and hides stars." }, { q:"Name one way to reduce light pollution.", a:"Point lights down; switch them off when not needed." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Like a real engineer", title:"*Evaluate* against the brief", h:"480px",
        cards:[ { icon:"📋", t:"Check each spec", d:"For **every specification**: Met, Partly or Not yet? Write the **evidence**." }, { icon:"🗣️", t:"Ask the stakeholder", d:"Would **your stakeholder** be happy? What would they want changed?" }, { icon:"🔁", t:"Iterate", d:"Pick **one improvement**, make it, and **test again**." } ],
        notes:[["SAY","Technological practice: evaluating outcomes against briefs and specifications."]] },
      { type:"interactive", phase:"excavate", fs:null, kicker:"Score your Smart Farm", title:"Showcase", ix:"showcase",
        notes:[["CLICK","Model with the example, then students type their own (it saves in this browser). Tap each specification to mark it."]] },
      { type:"paths", phase:"paths", fs:null, minutes:24,
        notes:[["SAY","“Showcase time! Evaluators test, demonstrators show, testers give feedback.”"],["CLICK","Start the 24-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Colossians 3:23."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 360 ÷ 36 = 10."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess. Smart Farms to the Exhibition tables."],["CLICK","C = wheat sheaves."]] }
    ]
  };

  /* ======================= FRIDAY · ART & THE EXHIBITION ======================= */
  const fri = {
    id:"w10-fri", week:10, day:"fri", subject:"art", duration:50,
    title:"Our Place Exhibition", guide:"tom",
    codes:["VA-CI","VA-UC","SS-C"],
    coverage:"Visual Arts (NZC 2007, Level 3): communicating and interpreting (presenting triptychs and artist statements to an audience); understanding the arts in context. The ‘Our Place’ Exhibition for whānau shows all five Big Projects (blueprint D12).",
    li:"We are learning to present our work to our community, and to celebrate our place.",
    sc:["I can present my triptych and explain my artist statement.","I can guide a visitor through our exhibition.","I can reflect on what I have learned about our place this term."],
    vocab:[
      { w:"exhibition", def:"a public display of work" },
      { w:"triptych", say:"TRIP-tick", def:"an artwork made of three panels that belong together" },
      { w:"artist statement", def:"writing that explains an artwork and the artist's choices" },
      { w:"reflection", def:"thinking carefully about what you've learned" },
      { w:"Soli Deo Gloria", def:"Latin for ‘To God alone the glory’" }
    ],
    prep:{ min:30, items:["Exhibition set-up: triptychs, museum cases, field guides and posters, Sky Journals, Smart Farms","Welcome sign; programme for whānau; name labels","Ask your Māori lead about a mihi or karakia to open, and invite Te Rūnanga o Arowhenua and the Ashburton Museum","The app on the big screen for the final seal and vote"] },
    safety:["Visitors: clear walkways; Smart Farms on tables; adults supervise moving parts."],
    tikanga:["Open with a mihi or karakia if your Māori lead advises; acknowledge mana whenua.","Check every display uses students' own designs (no copied taonga)."],
    hononga:"**Our place.** The term began with a river and two names, Hakatere and Ashburton. It ends with a community that knows both, and the stories behind them.",
    paths:[
      { id:"A", name:"The Guide", product:"Exhibition Tours", steps:["Welcome visitors and **acknowledge mana whenua**.","Take them to **three** displays and explain each.","Invite them to the **final seal** at the end."], flying:"Answer a visitor's tricky question about the term." },
      { id:"B", name:"The Exhibitor", product:"Present Your Triptych", steps:["Stand by your **triptych**.","Explain **one technique per panel** and read your **artist statement**.","Ask your visitor what **they** notice."], flying:"Link your triptych to something from History or Science this term." },
      { id:"C", name:"The Reporter", product:"Exhibition Review", steps:["**Interview** two visitors: what did they learn? what surprised them?","Write a short **review** of the exhibition for the school newsletter.","Include **one photo idea**."], flying:"Add your own reflection: what changed in how you see our place?" }
    ],
    supportedShort:"a tour script, an artist-statement card to read from, interview questions.",
    lens:{
      pillar:"sdg", title:"Soli Deo Gloria",
      look:"Look again at the whole map: mountains, rivers, stars, people and promises, and a community that chose to share it.",
      ref:"Revelation 7:9 · Psalm 115:1",
      paraphrase:"A great crowd from every nation, tribe, people and language stood before God. Not to us, Lord, not to us, but to your name be the glory, because of your love and faithfulness.",
      talk:[
        { q:"Our school's motto is Soli Deo Gloria: to God alone the glory. How does this term's learning give glory to God?", listen:"Wonder at His creation; telling the truth; making things right; caring for each other and the land; using our gifts." },
        { q:"What's one thing you'll remember about our place for the rest of your life?", listen:"Accept all: both names; the braided river; Matariki and Puaka; the promise; the flood; the stars." }
      ],
      live:"Tell someone at home **the story of our place**, from the mountains to the sea."
    },
    clue:{ prompt:"The final seal: combine this week's four Trig Clues.", answer:39, explain:"16 + 5 + 8 + 10 = 39 → bearing 039°, the same as Sheet I. Full circle!" },
    next:"The end of the term, and the start of a community that knows its place.",
    rubric:[
      { c:"Presenting art", code:"VA-CI",
        d:["Shows their triptych.","Points to it."],
        a:["Explains techniques and reads their artist statement.","“In the Sky panel I used wet-on-wet to show a nor'west sky.”"],
        f:["Responds to a visitor's questions with insight.","Explains why both names are in the title."],
        i:["I can show my work.","I can explain my techniques and statement.","I can respond to questions with insight."] },
      { c:"Guiding visitors", code:"SS-C · VA-UC",
        d:["Says hello.","“Hi.”"],
        a:["Guides a visitor through three displays.","Acknowledges mana whenua, explains three displays clearly."],
        f:["Connects displays into the story of our place.","“From the museum case to the triptych, they all show how Hakatere changed.”"],
        i:["I can welcome a visitor.","I can guide a visitor through displays.","I can connect displays into one story."] },
      { c:"Reflection", code:"VA-UC",
        d:["Says they liked it.","“It was fun.”"],
        a:["Reflects on what they learned about our place.","“I learned the river has two names and why both matter.”"],
        f:["Explains how their thinking changed.","“I used to think the map just showed places. Now I know it tells whose story is remembered.”"],
        i:["I can say I enjoyed it.","I can reflect on what I learned.","I can explain how my thinking changed."] }
    ],
    plan:{
      prior:"The whole term. All Big Projects are complete. Whānau, Arowhenua and the Ashburton Museum are invited.",
      kc:["Relating to others","Participating & contributing","Managing self"],
      sequence:[
        ["0–6","Welcome","Tom's message. Mihi or karakia if advised. Welcome whānau.","Welcome."],
        ["6–34","Choose Your Path (Exhibition)","Guides, exhibitors and reporters; visitors walk the exhibition.","Present; guide; interview."],
        ["34–40","Through the Lens","Soli Deo Gloria — Revelation 7:9; Psalm 115:1.","Reflect."],
        ["40–50","The Final Seal","Survey Seal X: 16 + 5 + 8 + 10 = 39 → 039° (full circle). The Dealer returns Sheet VII; the map reassembles; the class votes.","Add; dial; vote; celebrate."]
      ],
      diff:{
        supported:"Tour script; statement card; partner guides.",
        esol:"Welcome in home languages; visual displays.",
        learning:"Quiet exhibitor role; breaks available; calm screen available.",
        flying:"Connecting displays; insightful answers; reflection."
      },
      assess:{
        lookFor:["Presents art with understanding","Guides visitors","Reflects on learning"],
        evidence:["Exhibition photos","Triptychs and statements","Art core rubric (Unit Plan)","Visitor feedback"]
      },
      inquiry:["Gather evidence for reports: core rubrics for all five Big Projects.","Thank whānau, Arowhenua, the museum and helpers.","What would you change next time? Note it for next year."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"tom", meta:"Our Place Exhibition · doors open",
        msg:"The hall is ready: **triptychs** on the walls, **museum cases** on the tables, **field guides**, **campaign posters**, **Sky Journals** and **Smart Farms** whirring. Ten weeks ago this was a rusty tin chest in the river gravel. Today it's **our place**, told by **you**. Welcome, whānau!",
        notes:[["SAY","Read the message. 🟡 Tom is fictional."],["TIKANGA","If advised by your Māori lead, open with a mihi or karakia and acknowledge mana whenua."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria to students and visitors."]] },
      { type:"content", phase:"excavate", fs:null, paper:true, kicker:"Today's exhibition", title:"*Our Place* · Hakatere",
        bullets:["**History:** Our Place Museum Cases.","**Geography:** Mountain Field Guides and campaigns.","**Science:** Sky Watcher's Journals.","**Technology:** Smart Farms (try them!).","**Art:** My Place triptychs: Land, River, Sky."],
        visual:{ artefact:"chest" },
        notes:[["SAY","Explain the layout to visitors. Guides start tours now."]] },
      { type:"paths", phase:"paths", fs:null, minutes:28,
        notes:[["SAY","“Guides, exhibitors and reporters: to your places!”"],["CLICK","Start the 28-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Revelation 7:9 and Psalm 115:1. Explain Soli Deo Gloria for visitors."]] },
      { type:"folioseal", phase:"decode", fs:"story",
        notes:[["SAY","“One last seal. Four clues from this week.”"],["CLICK","Tap each ‘?’ tile. 16 + 5 + 8 + 10 = 39. Dial 039° and press ‘Fix the bearing’."],["ASK","“039°: where have we seen that before?” (Sheet I! The map has come full circle.)"]] },
      { type:"intercept", phase:"decode", fs:"story",
        msg:"Restoration team. The whole town has been talking about your exhibition. Nobody will buy a map that a whole community is watching over. So here it is: Sheet VII, the race. Put your map back together. Whatever you decide, decide it together. — D.",
        ask:"Why did the Dealer give Sheet VII back?",
        notes:[["SAY","Read it in the Dealer's voice, one last time. 🟡 The Dealer is fictional."],["LISTEN","Because the community knew the map's value; because a story everyone knows can't be quietly sold; because it belongs to the people whose names are on it."],["SAY","“The Dealer wasn't beaten by force. He was beaten by a town that knew its own story.”"]] },
      { type:"interactive", phase:"decode", fs:"story", kicker:"Ten sheets, one map", title:"Our Place", ix:"fullmap",
        notes:[["CLICK","Press ‘Reassemble’ to put the ten sheets together. Then ‘Vote’: students and visitors vote on what should happen to the map. Talk about why. Then ‘Decide’."],["SAY","🟡 The story's ending: the map goes to the community, with both names honoured."]] },
      { type:"content", phase:"decode", fs:null, kicker:"Soli Deo Gloria", title:"Thank you, *Hakatere*",
        bullets:["**Thank you** to our whānau, Te Rūnanga o Arowhenua, the Ashburton Museum, and everyone who shared stories.","From the **mountains** to the **sea**, from the **first people** to the **newest families**: this is **our place**.","**To God alone the glory.**"],
        visual:{ level:true },
        notes:[["SAY","Final thanks. Invite visitors to keep looking around."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess: one last time this term."],["CLICK","C = wheat sheaves. Celebrate!"]] }
    ]
  };

  BM.WEEKS[10] = {
    n:10,
    story:"The last sleeve holds Sheet X: Our Place. This week historians present museum cases about the many families of Hakatere; geographers launch campaigns as kaitiaki of the mountains and rivers; astronomers hold a Sky Expo under dark skies; engineers showcase their Smart Farms; and on Friday the class opens the Our Place Exhibition. The final bearing brings the map full circle, the Dealer returns Sheet VII, the ten sheets reassemble, and the class decides the map's future.",
    hononga:"Mana whenua acknowledged first; Kāi Tahu, Arowhenua and Hakatere Marae as part of our community today (Mon) · kaitiakitanga (Tue) · the night sky in science and te ao Māori (Wed) · technology that serves people and the land (Thu) · a mihi or karakia to open the Exhibition, if advised (Fri). Check all local framing with your Māori lead and Te Rūnanga o Arowhenua (D3).",
    seal:{
      answer:39,
      instruction:"Add the four **Trig Clues** from Monday to Thursday. The total is the **final bearing**. Dial it on the theodolite to crack the last seal.",
      reveal:"🟡 **Sheet X restored: Our Place.** The whole map, from the mountains to the sea, with **both names** side by side. The bearing is **039°**, the same as Sheet I: **we've come full circle**. But one sleeve is still empty… and a gold-edged card has arrived.",
      art:() => { const v = BM.art.sheetArt(10); v.setAttribute("style", "width:100%;height:100%"); return v; }
    },
    lessons:[mon, tue, wed, thu, fri]
  };
})(window.BM);
