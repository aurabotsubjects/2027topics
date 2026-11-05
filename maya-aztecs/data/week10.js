/* ==========================================================
   WEEK 10 — FOLIO X · THE CODEX COMES HOME
   ========================================================== */
(function(FC){
  "use strict";

  const showcase = (name, how) => ({ type:"discussion", phase:"paths", fs:null, kicker:"Big Project · Exhibition week", q:`**${name}:** ${how}`, sub:"Use your journal checklist. Finished? Help a classmate or rehearse your 30-second talk.", talk:60,
    notes:[["SAY","“This is Exhibition week. Today your Big Project gets finished and shared.”"],["NOTE","Students who finished early can rehearse for the Friday Exhibition."]] });

  /* ======================= MONDAY · HISTORY ======================= */
  const mon = {
    id:"w10-mon", week:10, day:"mon", subject:"history", duration:50,
    title:"Living Legacy: The Maya & Nahua Today", guide:"itzel",
    codes:["SS-H","SS-P","EN"],
    coverage:"Y5–6 History (2027 Social Sciences): continuity and change; how past societies shape the present (foods, words, languages); Indigenous peoples as living cultures. Big Project: Museum Case completed.",
    li:"We are learning how Maya and Aztec heritage continues in the world today.",
    sc:["I can describe Maya and Nahua peoples and languages today.","I can name gifts from Mesoamerica and the Americas to the world (foods and words).","I can explain one thing that has continued and one that has changed."],
    vocab:[
      { w:"heritage", def:"the traditions, languages, places and objects passed down from the past" },
      { w:"continuity", def:"things that have stayed the same over time" },
      { w:"Columbian Exchange", def:"the swap of plants, animals, foods and ideas between the Americas and the rest of the world after 1492" },
      { w:"loanword", def:"a word one language borrows from another, e.g. ‘tomato’ from Nahuatl" },
      { w:"living culture", def:"a culture that is still practised by people today" },
      { w:"Nahua", def:"the Indigenous people of Mexico who speak Nahuatl, descendants of the Aztecs (Mexica) and their neighbours" }
    ],
    prep:{ min:2, items:["Big Project materials (Museum Case)","Expedition Journals"] },
    safety:["Food talk: be aware of allergies if anyone brings food to share (e.g. peanuts)."],
    hononga:"Like Nahuatl and the Mayan languages, **te reo Māori** is a living language that people fought to keep strong. The first **kōhanga reo** opened in Wainuiomata in **1982**, and the **Māori Language Act 1987** made Māori an official language of New Zealand.",
    paths:[
      { id:"A", name:"The Scribe", product:"Museum Case Label (finish)", steps:["Write your artefact's label: what it is, who made it, when, where.","Add a ‘How do we know?’ card naming your source.","Add a ‘Still here today’ line linking it to Maya or Nahua people now."], flying:"Add a second perspective: how might a Maya or Nahua visitor feel seeing it?" },
      { id:"B", name:"The Builder", product:"Museum Case Display (finish)", steps:["Finish your model or drawing of the artefact.","Arrange your case: object, label, source card.","Check it against the Museum Case checklist."], flying:"Add a ‘then and now’ panel showing the same idea today." },
      { id:"C", name:"The Messenger", product:"Guided Tour Script", steps:["Write a 30-second tour of your Museum Case.","Include one fact, one source and one ‘still here today’ link.","Rehearse it twice with a partner."], flying:"Prepare an answer to a tricky visitor question." }
    ],
    supportedShort:"label template with sentence starters; checklist cards; tour script frame.",
    lens:{
      pillar:"mohio", title:"Every nation, tribe, people and language",
      look:"Look at the languages on our slides: Nahuatl, Yucatec Maya, K'iche', te reo Māori, English, Spanish. God's story isn't for one people. It's for all of them.",
      ref:"Revelation 7:9",
      paraphrase:"After this I looked, and there before me was a great multitude that no one could count, from every nation, tribe, people and language, standing before the throne and before the Lamb.",
      talk:[
        { q:"Who will be in that great crowd? Think about everyone we've met this term.", listen:"Maya, Nahua, Spanish, Māori, Kiwi, every language; people God loves from every nation." },
        { q:"Why does it matter that languages and cultures are still here, not just the ‘crowd’?", listen:"God made the variety; every language can praise Him; the Bible is translated into many Mayan languages and Nahuatl." }
      ],
      live:"Learn to say ‘hello’ in one language you don't speak, and use it this week."
    },
    clue:{ prompt:"How many of the words on the Word Origins slide came into English from Nahuatl?", answer:6, explain:"tomato, chocolate, avocado, coyote, chilli, axolotl = 6 → one bar and one dot. Clue saved!" },
    next:"Tuesday — Rights & Taonga: who should own the past? (and the Codex Decision).",
    rubric:[
      { c:"Peoples today", code:"SS-H",
        d:["Says the Maya are gone.","“The Maya disappeared.”"],
        a:["Describes Maya and Nahua peoples and languages today.","“Over 6 million people speak about 30 Mayan languages, and 1.6 million speak Nahuatl.”"],
        f:["Explains why ‘disappeared’ is a myth.","“The cities were left, but the people stayed — their languages and weaving are alive today.”"],
        i:["I know about the past.","I can describe Maya and Nahua people today.","I can explain why ‘they disappeared’ is a myth."] },
      { c:"Gifts to the world", code:"SS-H · EN",
        d:["Names one food.","“Chocolate.”"],
        a:["Names several foods and Nahuatl words and where they came from.","“Tomatoes, maize, chillies and cacao came from the Americas; ‘tomato’ and ‘avocado’ are Nahuatl words.”"],
        f:["Explains how the exchange changed the world.","“Curry with chilli and Italian food with tomatoes only exist because of the Columbian Exchange.”"],
        i:["I can name a gift.","I can name foods and words and where they came from.","I can explain how they changed the world."] },
      { c:"Continuity & change", code:"SS-P",
        d:["Lists something from the past.","“They had pyramids.”"],
        a:["Gives one continuity and one change.","“Continuity: Maya women still weave huipiles. Change: they speak Spanish too.”"],
        f:["Explains why some things continue.","“People kept their languages because families and communities chose to teach them.”"],
        i:["I can list something.","I can give a continuity and a change.","I can explain why things continue."] }
    ],
    plan:{
      prior:"The whole term; Week 9 (Conquest); Week 2 (maize); Week 8 (potato, kūmara).",
      kc:["Thinking","Using language, symbols & texts","Relating to others"],
      sequence:[
        ["0–6","Field Transmission","Dr Canul: the codex is safe — now meet the people it belongs to; Glyph Check; LI/SC.","Recall."],
        ["6–18","Excavate","Still here (languages); What's on your plate?; Word Origins; Hononga (te reo).","Explore, sort."],
        ["18–20","Exhibition check-in","Museum Case.","Plan."],
        ["20–38","Choose Your Path","Finish Museum Case (label / display / tour).","Create."],
        ["38–45","Through the Lens","Revelation 7:9.","Discuss."],
        ["45–50","Decode & Exit","Clue (6).","Solve; self-assess."]
      ],
      diff:{
        supported:"Label template; picture cards for foods.",
        esol:"Home languages welcome — share a loanword from your language!",
        learning:"Tour script option; partner support.",
        flying:"Second perspective; tricky visitor question."
      },
      assess:{
        lookFor:["Peoples & languages today","Foods & words","Continuity & change"],
        evidence:["Museum Case labels","Tour scripts","Exit self-assessment"]
      },
      inquiry:["Did any students still think the Maya ‘disappeared’?","Museum Cases ready for Friday?","Invite whānau reminder sent?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"itzel", meta:"Folio X · the last page",
        msg:"Team, the forgery is exposed and the codex is safe. But before we decide its future, there's something every visitor needs to understand: the Maya and Nahua peoples **didn't disappear**. They are **still here**, and so is their gift to the world. You probably ate some of it this week!",
        notes:[["SAY","Read the message."],["ASK","“What do you think she means — we ate some of it?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:"real", title:"Remember Week 9?", qs:[
          { q:"Name two reasons Tenochtitlan fell.", a:"Indigenous allies, smallpox, a divided empire, Spanish technology." },
          { q:"What is El Niño?", a:"When trade winds weaken and warm water spreads east across the Pacific." },
          { q:"Angle of incidence = …?", a:"Angle of reflection." }],
        notes:[["SAY","Whiteboards; show on 3."],["CLICK","→ flips."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and SC."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Living cultures", title:"Still here today", h:"470px", cards:[
          { big:"🗣️", color:"#1F7A5A", t:"Mayan languages", d:"About **30 Mayan languages** are spoken today by **6 million or more** people, mostly in **Guatemala** and southern **Mexico**." },
          { big:"🇲🇽", color:"#B3262E", t:"Nahuatl", d:"The Aztecs' language is alive: Mexico's **2020 census** counted about **1.65 million** Nahuatl speakers." },
          { big:"🧵", color:"#D9A23A", t:"Living traditions", d:"Weaving, farming the **milpa**, and the Maya calendar are still part of life in many communities (remember Doña Rosa?)." }],
        notes:[["ASK","“Why do some people think the Maya ‘disappeared’?”"],["LISTEN","The great Classic cities were abandoned — but the people moved and stayed."],["PACE","Aim for minute 9."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"The Columbian Exchange", title:"What's on your plate?", ix:"gifts",
        notes:[["CLICK","Tap each meal."],["ASK","“Which of these did you eat this week?”"],["SAFETY","If food is shared, check allergies (peanuts!)."],["PACE","Aim for minute 13."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Words we borrowed", title:"Word Origins", ix:"wordorigins",
        notes:[["CLICK","Students guess first, then tap to flip."],["SAY","“‘Chocolate’ probably comes from a Nahuatl word for a bitter drink. Word experts still debate exactly how.”"],["NOTE","Count the Nahuatl words — it's today's clue (6)."],["PACE","Aim for minute 17."]] },
      { type:"hononga", phase:"excavate", fs:"real", title:"Te reo Māori — a living language",
        body:"Like Nahuatl and the Mayan languages, **te reo Māori** is a living language that people worked hard to keep strong.\n\nThe first **kōhanga reo** opened in Wainuiomata in **1982**. The **Māori Language Act 1987** made Māori an **official language** of New Zealand.",
        notes:[["ASK","“What te reo words do we use every day?”"]] },
      showcase("Museum Case", "finish your label, ‘How do we know?’ card and display today."),
      { type:"paths", phase:"paths", fs:null, minutes:18, notes:[["SAY","Paths finish the Museum Case."],["CLICK","Start the 18-minute timer."]] },
      { type:"lens", phase:"lens", fs:null, notes:[["CLICK","→ reveals each move."],["SAY","Read Revelation 7:9."],["ASK","Use both questions."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["ASK","“How many Nahuatl words?” (6)"],["CLICK","▬ ● → Check."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = cacao beans."]] }
    ]
  };

  /* ======================= TUESDAY · CIVICS / GEOGRAPHY ======================= */
  const tue = {
    id:"w10-tue", week:10, day:"tue", subject:"geography", duration:50,
    title:"Rights & Taonga: Who Should Own the Past?", guide:"sofia",
    codes:["SS-C","SS-P","SS-H"],
    coverage:"Y6 Civics & Society (2027 Social Sciences): rights and responsibilities; how international agreements (UN declarations) affect NZ; designing a campaign. Big Project: Campaign completed.",
    li:"We are learning about the rights of Indigenous peoples to their heritage, and how to make a fair decision.",
    sc:["I can explain what UNDRIP is and one right it protects.","I can weigh different perspectives on who should own a treasure.","I can give reasons for my vote on the codex's future."],
    vocab:[
      { w:"rights", def:"things every person (or group) should be free to have or do" },
      { w:"UNDRIP", def:"the United Nations Declaration on the Rights of Indigenous Peoples (2007)" },
      { w:"declaration", def:"an official public statement of what people agree on" },
      { w:"repatriation", def:"returning treasures or ancestral remains to the people or country they came from" },
      { w:"campaign", def:"a planned set of actions to persuade people to support a cause" },
      { w:"perspective", def:"a point of view — how someone sees an issue" }
    ],
    prep:{ min:2, items:["Big Project materials (Campaign)","Expedition Journals"] },
    safety:[],
    hononga:"**Karanga Aotearoa**, Te Papa's repatriation programme, brings Māori and Moriori ancestral remains home from museums overseas. Between **2003 and 2024** it returned **850** ancestors from overseas institutions — and more are still waiting.",
    paths:[
      { id:"A", name:"The Scribe", product:"Campaign Letter", steps:["Write to a museum director about the codex (or the headdress).","Explain the right you're standing up for (use UNDRIP).","Ask for a clear action, politely and firmly."], flying:"Answer the museum's best argument in your letter." },
      { id:"B", name:"The Builder", product:"Campaign Poster", steps:["Design a poster for your chosen decision.","Include a slogan, a reason and a fact.","Add one image that tells the story without words."], flying:"Make a second version for a different audience (kids vs adults)." },
      { id:"C", name:"The Messenger", product:"Campaign Speech", steps:["Write a 45-second speech for the class vote.","Use one fact, one feeling and one call to action.","Practise it with a partner, then deliver."], flying:"Respond to a question from the other side." }
    ],
    supportedShort:"letter frame; poster checklist; speech starter cards.",
    lens:{
      pillar:"panga", title:"Doing justice when it costs something",
      look:"Look at the four choices for the codex. Selling it would make money. Keeping it overseas would make a big museum famous. Returning it costs us something — but it's the people's own story.",
      ref:"Micah 6:8",
      paraphrase:"He has shown you what is good. And what does the Lord require of you? To act justly and to love mercy and to walk humbly with your God.",
      talk:[
        { q:"What would ‘acting justly’ look like for the codex?", listen:"Giving it to the people it belongs to; listening to them; not profiting from someone else's heritage." },
        { q:"Why is doing the right thing sometimes costly?", listen:"We give up money or fame; we put others first; humility (walk humbly)." }
      ],
      live:"Think of something you borrowed or took that should go back to its owner. Return it this week."
    },
    clue:{ prompt:"New Zealand announced its support for UNDRIP in 2010. What is the last digit of that year?", answer:0, explain:"2010 → 0. The Maya wrote zero as a shell! Clue saved." },
    next:"Wednesday — Powering the Future + the Fair Test Expo.",
    rubric:[
      { c:"Rights & UNDRIP", code:"SS-C",
        d:["Says people have rights.","“People should be treated fairly.”"],
        a:["Explains UNDRIP and one right it covers.","“UNDRIP was adopted by the UN in 2007; NZ supported it in 2010. It covers Indigenous peoples' culture, language and religious customs.”"],
        f:["Applies UNDRIP to a real case.","“Under UNDRIP, Mexico's request for Moctezuma's headdress is about Nahua culture and identity, not just an object.”"],
        i:["I know people have rights.","I can explain UNDRIP and one right.","I can apply it to a real case."] },
      { c:"Weighing perspectives", code:"SS-P",
        d:["Gives one opinion.","“It should go back.”"],
        a:["Gives reasons on both sides.","“Austria says the headdress is too fragile to travel; Mexico says it's their heritage.”"],
        f:["Weighs perspectives and suggests a fair solution.","“They could share it — a digital copy and a joint exhibition — while experts plan a safe way home.”"],
        i:["I have an opinion.","I can give reasons on both sides.","I can suggest a fair solution."] },
      { c:"Campaign & vote", code:"SS-C · EN",
        d:["Votes without a reason.","Ticks a box."],
        a:["Votes with a clear reason and makes a campaign product.","Poster: ‘Bring it home — it's their story’ with a UNDRIP fact."],
        f:["Persuades respectfully and answers the other side.","Speech that names the best argument against and responds."],
        i:["I voted.","I voted with a reason and made a campaign.","I persuaded respectfully and answered the other side."] }
    ],
    plan:{
      prior:"Week 5 (looters); Week 7 (Mosaic serpent in the British Museum); Week 9 (Conquest).",
      kc:["Participating & contributing","Thinking","Relating to others"],
      sequence:[
        ["0–6","Field Transmission","Sofía: who should own the past?; Glyph Check; LI/SC.","Recall."],
        ["6–20","Excavate","UNDRIP; Moctezuma's headdress (weigh it up); Karanga Aotearoa; the Codex Decision vote.","Weigh, vote."],
        ["20–22","Exhibition check-in","Campaign.","Plan."],
        ["22–38","Choose Your Path","Letter / poster / speech.","Persuade."],
        ["38–45","Through the Lens","Micah 6:8.","Discuss."],
        ["45–50","Decode & Exit","Clue (0, the shell).","Solve; self-assess."]
      ],
      diff:{
        supported:"Frames; sentence starters.",
        esol:"Visual voting; key words with icons.",
        learning:"Poster option; partner speech.",
        flying:"Respond to the strongest counter-argument."
      },
      assess:{
        lookFor:["UNDRIP explained","Both perspectives","Reasoned vote"],
        evidence:["Campaign products","Vote reasons","Exit self-assessment"]
      },
      inquiry:["Was the vote reasoned, not just popular?","Did students show respect to the other side?","Campaigns ready for the Exhibition?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"sofia", meta:"Who owns the past?",
        msg:"Navigators, the Collector is gone, but his question isn't: **who should own the codex?** Big museums all over the world hold treasures from other countries. Some people say they should stay; others say they should go home. Today you'll weigh it up, and then **you will vote**.",
        notes:[["SAY","Read the message."],["NOTE","The vote result is saved and appears in Friday's finale."]] },
      { type:"glyphcheck", phase:"transmission", fs:"real", qs:[
          { q:"Name one Nahuatl word we use in English.", a:"Tomato, chocolate, avocado, chilli, coyote, axolotl." },
          { q:"About how many people speak Mayan languages today?", a:"6 million or more." },
          { q:"What was the Columbian Exchange?", a:"The swap of foods, plants and animals between the Americas and the world after 1492." }],
        notes:[["SAY","Whiteboards; show on 3."],["CLICK","→ flips."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and SC."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"A promise the world made", title:"UNDRIP", h:"460px", cards:[
          { big:"🌐", color:"#2E9FB0", t:"What it is", d:"The **UN Declaration on the Rights of Indigenous Peoples**, adopted by the UN General Assembly on **13 September 2007**." },
          { big:"🇳🇿", color:"#1F7A5A", t:"New Zealand", d:"NZ announced its **support in April 2010**." },
          { big:"📜", color:"#D9A23A", t:"What it covers", d:"**46 articles**, including culture and identity, **language**, **religious customs**, and lands and resources." }],
        notes:[["SAY","“A declaration isn't a law, but it's a promise countries make about how they'll act.”"],["PACE","Aim for minute 10."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"A real debate", title:"Moctezuma's headdress", ix:"weighup",
        cfg:{ claim:"The feathered headdress in Vienna should go back to Mexico.", forLabel:"GO HOME", againstLabel:"STAY",
          intro:"An Aztec **feathered headdress**, made with quetzal feathers and gold, is in the **Weltmuseum Wien** in Austria. Tap each card.",
          items:[
            { t:"A symbol of identity", side:"for", d:"Many Mexicans see it as an important symbol of **national and Indigenous identity**." },
            { t:"Repeated requests", side:"for", d:"Mexican representatives and activists have **asked for it back** many times." },
            { t:"Too fragile to travel", side:"against", d:"Austria says the long trip across the Atlantic would be **too risky** for the delicate feathers." },
            { t:"Nearly a loan", side:"for", d:"A deal to **lend** it to Mexico was nearly reached in **2011**." },
            { t:"Cared for now", side:"against", d:"The museum has the experts and conditions to **protect** it where it is." },
            { t:"A replica exists", side:"against", d:"A **replica** is shown at the National Museum of Anthropology in Mexico City." }],
          outro:"Both sides have real reasons. What would be **fair** — and could there be a creative solution?" },
        notes:[["CLICK","Tap each card; let the scale tip."],["ASK","“Is ‘too fragile’ a good enough reason? What else could be done?”"],["PACE","Aim for minute 14."]] },
      { type:"hononga", phase:"excavate", fs:"real", title:"Bringing ancestors home",
        body:"**Karanga Aotearoa**, Te Papa's repatriation programme, brings Māori and Moriori ancestral remains home from museums overseas.\n\nBetween **2003 and 2024** it returned **850** ancestors from overseas institutions — and more are still waiting.",
        notes:[["SAY","“For whānau, this is about bringing family home, not just objects.”"],["NOTE","Handle respectfully; no images of remains."]] },
      { type:"interactive", phase:"excavate", fs:"story", kicker:"Your turn", title:"The Codex Decision", ix:"codexvote",
        notes:[["SAY","“Teams: 2 minutes to discuss. Every vote needs a reason.”"],["CLICK","Tap + for each vote, then ‘Lock in decision’."],["NOTE","The locked decision appears in Friday's finale."],["PACE","Aim for minute 20."]] },
      showcase("Campaign", "finish your campaign product for the Exhibition."),
      { type:"paths", phase:"paths", fs:null, minutes:16, notes:[["SAY","Paths = campaign products."],["CLICK","Start the 16-minute timer."]] },
      { type:"lens", phase:"lens", fs:null, notes:[["CLICK","→ reveals each move."],["SAY","Read Micah 6:8."],["ASK","Use both questions."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["ASK","“Last digit of 2010?” (0)"],["CLICK","Shell → Check."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = cacao beans."]] }
    ]
  };

  /* ======================= WEDNESDAY · SCIENCE ======================= */
  const wed = {
    id:"w10-wed", week:10, day:"wed", subject:"science", duration:50,
    title:"Powering the Future + the Fair Test Expo", guide:"mateo",
    codes:["SC-MIE","SC-P","SS-G"],
    coverage:"Y6 Science (Matter, interactions & energy): energy sources for electricity; science practices — presenting an investigation and its conclusion. Links: Y6 Geography (climate mitigation). Big Project: My Fair Test presented.",
    li:"We are learning to compare energy sources and to share the findings of our own investigation.",
    sc:["I can compare renewable and non-renewable energy sources.","I can explain where battery materials like lithium and copper come from, and one impact.","I can present my fair test clearly: question, method, results, conclusion."],
    vocab:[
      { w:"renewable", def:"an energy source that won't run out, like sunlight, wind or flowing water" },
      { w:"non-renewable", def:"an energy source that will run out, like coal, oil and gas" },
      { w:"fossil fuel", def:"coal, oil or gas, formed underground and burned for energy" },
      { w:"emissions", def:"gases released into the air, like carbon dioxide from burning fuel" },
      { w:"lithium", def:"a light metal used in rechargeable batteries" },
      { w:"conclusion", def:"what your results show, answering your question" }
    ],
    prep:{ min:5, items:["Fair Test projects and results tables","Space for the Expo (desks in a horseshoe)","Expedition Journals"] },
    safety:["Expo demos: batteries only, no mains power; disconnect after each demo."],
    hononga:"In **2025**, **88.5%** of New Zealand's electricity came from **renewable** sources — mostly **hydro** (like Manapōuri and the Waitaki) and **geothermal** (like Wairākei).",
    paths:[
      { id:"A", name:"The Scribe", product:"Fair Test Poster", steps:["Show your question, method (fair test!), results and conclusion.","Include your results as a table or graph.","Add one thing you'd improve next time."], flying:"Explain any result that surprised you." },
      { id:"B", name:"The Builder", product:"Fair Test Demo", steps:["Set up your experiment to show visitors.","Run it once safely and explain each step.","Point to your results and conclusion."], flying:"Let a visitor change one variable and predict the result." },
      { id:"C", name:"The Messenger", product:"Fair Test Talk", steps:["Prepare a 60-second talk: question, method, results, conclusion.","Use one visual (graph or photo).","Take one question from the audience."], flying:"Explain how you kept the test fair." }
    ],
    supportedShort:"poster template with headings; talk cue cards; results table.",
    lens:{
      pillar:"aroha", title:"Loving our neighbours where batteries begin",
      look:"Look at the battery in a phone. Its lithium might come from the Atacama, where Indigenous communities worry about their water. Our choices reach people we'll never meet.",
      ref:"Genesis 2:15; Matthew 22:39",
      paraphrase:"The Lord God took the man and put him in the Garden of Eden to work it and take care of it… Love your neighbour as yourself.",
      talk:[
        { q:"Who are our ‘neighbours’ when it comes to the energy we use?", listen:"People near mines, rivers and power stations; people affected by climate change; future generations." },
        { q:"What is one way we can care for creation AND our neighbours with energy?", listen:"Use less, switch off, repair and reuse devices, recycle batteries, support fair and careful mining." }
      ],
      live:"Recycle one old battery or device at a proper drop-off point (with an adult)."
    },
    clue:{ prompt:"How many countries make up the ‘lithium triangle’?", answer:3, explain:"Chile, Argentina and Bolivia = 3 → three dots. Clue saved!" },
    next:"Thursday — Temple of Light: test, evaluate and showcase.",
    rubric:[
      { c:"Energy sources", code:"SC-MIE",
        d:["Names a source.","“Solar power.”"],
        a:["Compares renewable and non-renewable sources.","“Solar and hydro won't run out and have no emissions; diesel is a fossil fuel that runs out and makes emissions.”"],
        f:["Weighs trade-offs in a mix.","“Solar can't work at night, so a mix with hydro or a battery is more reliable.”"],
        i:["I can name a source.","I can compare renewable and non-renewable.","I can weigh trade-offs."] },
      { c:"Materials & impacts", code:"SC-MIE · SS-G",
        d:["Says batteries are needed.","“Phones need batteries.”"],
        a:["Explains where lithium or copper comes from and one impact.","“Over half the world's lithium resources are in Chile, Argentina and Bolivia; mining uses lots of water in the Atacama.”"],
        f:["Suggests a responsible response.","“We should recycle batteries and listen to the communities near the mines.”"],
        i:["I know batteries are needed.","I can explain where materials come from and an impact.","I can suggest a responsible response."] },
      { c:"Presenting a fair test", code:"SC-P",
        d:["Shows results.","A poster with a picture."],
        a:["Presents question, method, results and conclusion clearly.","“We changed only the number of potato cells; 3 cells lit the LED.”"],
        f:["Explains fairness, errors and improvements.","“We kept the nail size the same; next time we'd repeat each test 3 times.”"],
        i:["I showed my results.","I presented all four parts clearly.","I explained fairness and improvements."] }
    ],
    plan:{
      prior:"Week 8: generators & Itaipú; Week 9: Atacama; Big Project My Fair Test since Week 6.",
      kc:["Thinking","Using language, symbols & texts","Participating & contributing"],
      sequence:[
        ["0–6","Field Transmission","Mateo: power for the community museum; Glyph Check; LI/SC.","Recall."],
        ["6–18","Excavate","Renewable vs non-renewable; Energy Mix Builder; batteries begin in the ground; Hononga (NZ renewables).","Build, compare."],
        ["18–40","Fair Test Expo (22 min)","Students present (poster / demo / talk) in rotation.","Present, question."],
        ["40–45","Through the Lens","Genesis 2:15; Matthew 22:39.","Discuss."],
        ["45–50","Decode & Exit","Clue (3).","Solve; self-assess."]
      ],
      diff:{
        supported:"Poster template; cue cards.",
        esol:"Visual results; partner talk.",
        learning:"Demo option; shorter talk.",
        flying:"Visitor-changes-a-variable challenge."
      },
      assess:{
        lookFor:["Renewable vs non-renewable","Materials & impacts","Clear fair-test presentation"],
        evidence:["Expo observations (Quick-Mark)","Posters / talks","Exit self-assessment"]
      },
      inquiry:["Which fair tests need finishing for Friday?","Did students explain fairness?","Keep the Expo posters for the Exhibition."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"mateo", meta:"Power for the museum",
        msg:"The community museum in Petén will be the codex's new home, and it needs **power**: lights, a humidity sensor, a little fan to keep the paper dry. Which energy source should we choose? And then — it's **Expo time**. Show the world your Fair Tests!",
        notes:[["SAY","Read the message."]] },
      { type:"glyphcheck", phase:"transmission", fs:"real", qs:[
          { q:"What is UNDRIP?", a:"The UN Declaration on the Rights of Indigenous Peoples (2007)." },
          { q:"How does a generator make electricity?", a:"Spinning magnets near coils of wire." },
          { q:"Which desert has some of the most intense sunlight on Earth?", a:"The Atacama (Week 9)." }],
        notes:[["SAY","Whiteboards; show on 3."],["CLICK","→ flips."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and SC."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Two kinds of energy", title:"Renewable or not?", h:"440px", cards:[
          { big:"☀️", color:"#1F7A5A", t:"Renewable", d:"**Won't run out**: sunlight, wind, flowing water (hydro), the Earth's heat (geothermal)." },
          { big:"🛢️", color:"#5a3825", t:"Non-renewable", d:"**Will run out**: coal, oil and gas (fossil fuels). Burning them releases **emissions**." }],
        notes:[["ASK","“Which kind powers most of New Zealand?” (Renewable — see the Hononga.)"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Design challenge", title:"Power the museum", ix:"energymix",
        notes:[["CLICK","Add and remove units; try the battery."],["ASK","“Why not 100% solar?” (Night!)"],["NOTE","The meters are a simplified model, not real data."],["PACE","Aim for minute 12."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Where batteries begin", title:"Lithium, copper & the Atacama",
        bullets:["About **58%** of the world's known **lithium** is in **Chile, Argentina and Bolivia**: the ‘lithium triangle’.","**Chile** mines more **copper** than any other country. Copper carries electricity in every wire.","Lithium from the Atacama's salt flats uses lots of water (about **2 million litres** evaporate per tonne). Local **Lickanantay** communities worry about their water."],
        visual:{ svg:() => { const M = FC.map, v = M.build({ view:[1770, 860, 320, 320] });
          M.mark(v, [-68.2, -23.5], "Chile · Atacama", { side:"left" }); M.mark(v, [-67.5, -20.1], "Bolivia", { color:"#D9A23A" }); M.mark(v, [-66.8, -25.6], "Argentina", { color:"#2E9FB0" });
          v.setAttribute("style", "width:620px;height:620px;border-radius:16px;box-shadow:var(--sh-3)"); return v; } },
        notes:[["ASK","“Is a battery ‘clean’ if making it harms someone's water?”"],["NOTE","Balanced: batteries also help cut emissions. The question is how to mine fairly."],["PACE","Aim for minute 16."]] },
      { type:"hononga", phase:"excavate", fs:"real", title:"Aotearoa runs on renewables",
        body:"In **2025**, **88.5%** of New Zealand's electricity came from **renewable** sources.\n\nMost came from **hydro** (like Manapōuri and the Waitaki) and **geothermal** (like Wairākei).",
        notes:[["ASK","“What could we add to make it 100%?”"]] },
      { type:"paths", phase:"paths", fs:null, minutes:22, title:"Fair Test Expo", notes:[["SAY","Expo rotation: half present, half visit; swap at 11 minutes."],["CLICK","Start the 22-minute timer."],["SAFETY","Batteries only; disconnect after demos."]] },
      { type:"lens", phase:"lens", fs:null, notes:[["CLICK","→ reveals each move."],["SAY","Read Genesis 2:15 and Matthew 22:39."],["ASK","Use both questions."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["ASK","“How many countries in the lithium triangle?” (3)"],["CLICK","●●● → Check."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = cacao beans."]] }
    ]
  };

  /* ======================= THURSDAY · TECHNOLOGY ======================= */
  const thu = {
    id:"w10-thu", week:10, day:"thu", subject:"technology", duration:50,
    title:"Temple of Light: Test, Evaluate & Showcase", guide:"mateo",
    codes:["TE-TP","TE-TK","DT-CT"],
    coverage:"Technology (NZC 2007 L3): technological practice — outcome evaluation against specifications; stakeholder feedback; planning improvements. Big Project: Temple of Light showcased.",
    li:"We are learning to test and evaluate our design against the brief, and to present it.",
    sc:["I can test each specification and record the results.","I can give and use stakeholder feedback.","I can present my temple, explaining its input → process → output."],
    vocab:[
      { w:"evaluate", def:"judge how well something meets its specifications" },
      { w:"test plan", def:"a list of how you will test each specification" },
      { w:"reliability", def:"how often something works correctly when you try it" },
      { w:"stakeholder feedback", def:"comments from the people the design is for" },
      { w:"improvement", def:"a change that makes the design work better" },
      { w:"showcase", def:"an event where you show and explain your work" }
    ],
    prep:{ min:10, items:["Teams' Temple of Light builds (from Week 9)","Spare batteries, LEDs, clip leads, tape","Engineering Journals"] },
    safety:["Batteries only — never sockets.","Hot wire = short circuit: disconnect.","Craft knives are teacher-only."],
    hononga:"When visitors come to a marae, **manaakitanga** — caring for guests — matters. At our showcase we'll welcome visitors warmly, explain clearly and look after their questions.",
    paths:[
      { id:"A", name:"The Scribe · Evaluator", product:"Evaluation Report", steps:["Record test results for each specification.","Write what worked and what didn't, with evidence.","Plan one improvement and say how you'd test it."], flying:"Compare your temple with another team's design." },
      { id:"B", name:"The Builder · Fixer", product:"Final Fix & Demo", steps:["Fix one problem found in testing.","Re-test that specification 10 times.","Prepare the temple for the Exhibition."], flying:"Add a feature a stakeholder asked for." },
      { id:"C", name:"The Messenger · Presenter", product:"Showcase Presentation", steps:["Prepare a 30-second pitch: who it's for and what it does.","Demonstrate it and explain input → process → output.","Ask a visitor for one warm and one cool."], flying:"Answer ‘What would you change in version 2?’" }
    ],
    supportedShort:"results table; pitch cue cards; feedback slips.",
    lens:{
      pillar:"manaaki", title:"Let your light shine — for God's glory",
      look:"Look at your temples glowing. They took skill, patience and teamwork. But the point of a light is to help others see.",
      ref:"Matthew 5:16",
      paraphrase:"In the same way, let your light shine before others, that they may see your good deeds and glorify your Father in heaven.",
      talk:[
        { q:"Jesus says people should see our good deeds and glorify God — not us. How could we show our temples in a way that does that?", listen:"Thank teammates; share credit; explain kindly; be humble; thank God for the skills." },
        { q:"How can feedback be a gift, even when it's a ‘cool’?", listen:"It helps us improve; given kindly it shows care (Manaaki)." }
      ],
      live:"Write a thank-you note to a teammate for their part in the build."
    },
    clue:{ prompt:"How many specifications were in the museum's brief?", answer:3, explain:"3 specifications → three dots. Clue saved for the final seal!" },
    next:"Friday — Completing My Codex and the Exhibition!",
    rubric:[
      { c:"Testing & evaluation", code:"TE-TP",
        d:["Says if it works.","“It lights up.”"],
        a:["Tests each specification and records results.","“Hidden input ✓; 9/10 reliable ✓; visible in a bright room — partly.”"],
        f:["Uses results to justify an improvement.","“Only 7/10 worked, so we re-taped the foil and got 10/10.”"],
        i:["I said if it worked.","I tested each spec and recorded results.","I used results to improve it."] },
      { c:"Stakeholder feedback", code:"TE-TP",
        d:["Listens to feedback.","Nods."],
        a:["Gathers warm and cool feedback and records it.","“Warm: the sound is cool. Cool: hard to see the light.”"],
        f:["Acts on feedback and explains the change.","“We added foil behind the LED because visitors said it was dim.”"],
        i:["I listened.","I gathered and recorded feedback.","I acted on feedback."] },
      { c:"Presenting the system", code:"TE-TK · DT-CT",
        d:["Shows the temple.","Turns it on."],
        a:["Explains input → process → output.","“Step on the plate (input), it closes the circuit (process), the LED lights (output).”"],
        f:["Explains how the parts interact and how code makes decisions (if used).","“If the light sensor reads under 300, the code turns the LED on.”"],
        i:["I showed it.","I explained input → process → output.","I explained how the parts interact."] }
    ],
    plan:{
      prior:"Week 9: Temple of Light design & build. Weeks 1–8: circuits, switches, Arduino.",
      kc:["Participating & contributing","Managing self","Thinking"],
      sequence:[
        ["0–6","Field Transmission","Mateo: opening night; Glyph Check; LI/SC; safety.","Recall."],
        ["6–14","Excavate","Evaluation Matrix; warm & cool; showcase run-sheet.","Plan."],
        ["14–40","Test, fix & showcase (26 min)","Teams test, fix, then present to another team.","Evaluate, present."],
        ["40–45","Through the Lens","Matthew 5:16.","Thank a teammate."],
        ["45–50","Decode & Exit","Clue (3); pack builds safely.","Solve; self-assess."]
      ],
      diff:{
        supported:"Results table; cue cards.",
        esol:"Visual matrix; demo-led presenting.",
        learning:"Fixer role with clear steps.",
        flying:"Version-2 planning; compare designs."
      },
      assess:{
        lookFor:["Each spec tested","Feedback used","Clear I-P-O explanation"],
        evidence:["Evaluation reports","Showcase observation (Quick-Mark)","Exit self-assessment"]
      },
      inquiry:["Which temples need a final fix before Friday?","Store builds safely, batteries out.","Who could host visitors at the Exhibition?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"mateo", meta:"Opening night",
        msg:"Tomorrow the codex gets a home, and the museum wants your **Temples of Light** in the opening exhibition! But first, engineers always **test** before they show. Does your temple meet every specification in the brief? Let's find out — then **showcase** it.",
        notes:[["SAY","Read the message."]] },
      { type:"glyphcheck", phase:"transmission", fs:"real", qs:[
          { q:"Renewable or non-renewable: hydro?", a:"Renewable." },
          { q:"What three things does a brief include?", a:"Stakeholder, need, specifications." },
          { q:"What does ‘reliable’ mean?", a:"It works correctly every time (or nearly every time)." }],
        notes:[["SAY","Whiteboards; show on 3."],["CLICK","→ flips."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and SC."]] },
      { type:"safety", phase:"transmission", fs:"real", title:"Showcase safety", items:[
          { icon:"🔋", t:"Batteries only", d:"Never sockets." },
          { icon:"🔥", t:"Hot = short", d:"Disconnect warm wires straight away." },
          { icon:"🧹", t:"Clear space", d:"Keep walkways clear for visitors." }],
        notes:[["SAFETY","Read the rules."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Test against the brief", title:"Evaluation Matrix", ix:"evalmatrix",
        notes:[["CLICK","Model with one team's temple: run 10 trials, then mark each spec."],["SAY","“Partly is honest and useful — it tells us what to fix.”"],["PACE","Aim for minute 10."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Feedback that helps", title:"Warm & cool", h:"420px", cards:[
          { big:"☀️", color:"#D9A23A", t:"Warm", d:"Something that **works well**. Be specific: “The buzzer is loud enough to hear across the room.”" },
          { big:"❄️", color:"#2E9FB0", t:"Cool", d:"Something to **improve**, said kindly: “The LED is hard to see. Could you add foil behind it?”" },
          { big:"❓", color:"#B3262E", t:"Question", d:"Ask one **curious question**: “How does the plate know when someone steps on it?”" }],
        notes:[["SAY","“Feedback is a gift. Give it the way you'd want to receive it.”"]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Your 2-minute showcase", title:"Showcase run-sheet", h:"440px", cards:[
          { big:"1️⃣", color:"#1F7A5A", t:"Pitch (30 s)", d:"Who is it for? What does it do?" },
          { big:"2️⃣", color:"#D9A23A", t:"Demo", d:"Show it working. Let a visitor trigger it." },
          { big:"3️⃣", color:"#2E9FB0", t:"Explain", d:"Input → process → output. Show your circuit diagram." },
          { big:"4️⃣", color:"#B3262E", t:"Ask", d:"“What's one warm and one cool?” Write them down." }],
        notes:[["PACE","Testing and showcases start by minute 14."]] },
      { type:"hononga", phase:"excavate", fs:"real", title:"Manaakitanga — caring for guests",
        body:"When visitors come to a marae, **manaakitanga** — caring for guests — matters.\n\nAt our showcase we'll welcome visitors warmly, explain clearly and look after their questions.",
        notes:[["NOTE","Keep it general; check local tikanga with your Māori lead."]] },
      { type:"paths", phase:"paths", fs:null, minutes:26, notes:[["SAY","Teams take roles: Evaluator, Fixer, Presenter."],["CLICK","Start the 26-minute timer."],["SAFETY","Roam; check wiring and battery placement."]] },
      { type:"lens", phase:"lens", fs:null, notes:[["CLICK","→ reveals each move."],["SAY","Read Matthew 5:16."],["ASK","Use both questions; finish by thanking a teammate."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["ASK","“How many specifications?” (3)"],["CLICK","●●● → Check."],["SAFETY","Batteries out before storing builds."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = cacao beans."]] }
    ]
  };

  /* ======================= FRIDAY · ART ======================= */
  const fri = {
    id:"w10-fri", week:10, day:"fri", subject:"art", duration:50,
    title:"Completing My Codex & the Exhibition", guide:"rosa",
    codes:["VA-CI","VA-PK","VA-DI","VA-UC"],
    coverage:"Visual Arts (NZC 2007, Level 3): communicating and interpreting — presenting work, artist statements, and responding to others' art; practical knowledge — finishing to a high standard. Big Project: My Codex exhibited.",
    li:"We are learning to complete, present and reflect on our 10-panel codex.",
    sc:["I can finish all my codex panels to a high standard.","I can write an artist statement about my favourite panel.","I can give and receive kind, specific feedback."],
    vocab:[
      { w:"artist statement", def:"a short piece of writing explaining an artwork and the artist's choices" },
      { w:"exhibition", def:"a public display of artworks or projects" },
      { w:"docent", def:"a guide who explains an exhibition to visitors" },
      { w:"curate", def:"to choose and arrange works for an exhibition" },
      { w:"reflection", def:"thinking carefully about what you did and learned" }
    ],
    prep:{ min:10, items:["Codex books (all panels)","Exhibition space set up (tables, labels, Museum Cases, campaign posters, temples)","Whānau invitations sent","Codex panel 10 materials: pencils, paints, glue"] },
    safety:["Exhibition: keep walkways clear; temple batteries disconnected when not demonstrating."],
    hononga:"**Te Papa Tongarewa**, our national museum, has a name that means **“container of treasures”** — treasures that come from the land and people of Aotearoa. Today our classroom becomes a container of treasures too.",
    paths:[
      { id:"A", name:"The Scribe", product:"Artist Statement", steps:["Choose your favourite codex panel.","Write: what it shows, the technique you used, and why you made your choices.","Finish with what the term taught you."], flying:"Connect your panel to a real Maya or Aztec artwork we studied." },
      { id:"B", name:"The Builder", product:"Final Panel: “My Story in God's Story”", steps:["Plan panel 10: your own story as part of God's bigger story.","Use at least two techniques from the term (glyphs, dye, stamping, mosaic, weaving).","Finish neatly and add it to your codex."], flying:"Hide a personal glyph in the design and explain it." },
      { id:"C", name:"The Messenger", product:"Exhibition Docent", steps:["Choose three works to guide visitors through.","Prepare one fact and one question for each.","Welcome visitors and lead a 2-minute tour."], flying:"Invite a visitor to give a warm and a cool to an artist." }
    ],
    supportedShort:"artist statement frame; panel planning sheet; docent cue cards.",
    lens:{
      pillar:"sdg", title:"Not to us, but to Your name be the glory",
      look:"Look at the codex books on display: ten weeks of work, learning and growing. The Collector wanted glory and gold. We're giving the codex back, and the glory to God.",
      ref:"Psalm 115:1",
      paraphrase:"Not to us, Lord, not to us but to your name be the glory, because of your love and faithfulness.",
      talk:[
        { q:"What's the difference between the Collector's goal and ours?", listen:"He wanted money and fame; we want truth, justice and God's glory; we gave the codex home." },
        { q:"How can we celebrate our work AND give God the glory?", listen:"Be thankful; celebrate others; recognise our gifts come from God (Manaaki); Soli Deo Gloria." }
      ],
      live:"Write ‘Soli Deo Gloria’ on the back cover of your codex, and thank God for one thing you learned this term."
    },
    clue:{ prompt:"Final Seal: add the four Glyph Clues from this week.", answer:12, explain:"6 + 0 + 3 + 3 = 12 = two bars and two dots." },
    next:"The end of the expedition. Soli Deo Gloria!",
    rubric:[
      { c:"Finished codex", code:"VA-PK",
        d:["Some panels unfinished.","6 of 10 panels done."],
        a:["All panels finished neatly, using the term's techniques.","10 panels complete: glyphs, dye, stamping, mosaic, papel picado, weaving."],
        f:["Panels show refined technique and a clear personal style.","Consistent colours and a personal glyph running through the book."],
        i:["Some of my panels are finished.","All my panels are finished neatly.","My codex has refined technique and my own style."] },
      { c:"Artist statement", code:"VA-CI · VA-UC",
        d:["Says what they like.","“I like the red one.”"],
        a:["Explains the panel, technique and choices.","“I used stamping with a step-fret motif because it repeats like Aztec designs.”"],
        f:["Connects to context and personal meaning.","“My final panel puts my family's story inside God's story, like a codex records a people's story.”"],
        i:["I said what I like.","I explained my panel and choices.","I connected it to context and meaning."] },
      { c:"Feedback & exhibition", code:"VA-CI",
        d:["Looks at others' work.","Walks past."],
        a:["Gives kind, specific feedback and presents to visitors.","“Warm: your mosaic colours glow. Cool: the outline is faint.”"],
        f:["Leads visitors and draws out others' ideas.","A docent tour that invites questions and gives credit to each artist."],
        i:["I looked at others' work.","I gave specific feedback and presented.","I led visitors and celebrated others."] }
    ],
    plan:{
      prior:"Weeks 1–9 codex panels; all Big Projects.",
      kc:["Using language, symbols & texts","Relating to others","Participating & contributing"],
      sequence:[
        ["0–6","Field Transmission","Doña Rosa: the last panel; Glyph Check; LI/SC.","Recall the term."],
        ["6–12","Excavate","Artist statements; exhibition protocol; Hononga (Te Papa).","Plan."],
        ["12–34","Choose Your Path (22 min)","Panel 10 / artist statement / docent prep → Exhibition opens.","Create, present."],
        ["34–40","Through the Lens","Psalm 115:1.","Reflect."],
        ["40–50","Final Seal & Finale","6 + 0 + 3 + 3 = 12; the Codex Comes Home; credits.","Celebrate."]
      ],
      diff:{
        supported:"Statement frame; planning sheet.",
        esol:"Visual docent cards; home-language welcome.",
        learning:"Docent with a partner; shorter statement.",
        flying:"Personal glyph; connect to real artworks."
      },
      assess:{
        lookFor:["Finished codex","Artist statement","Kind, specific feedback"],
        evidence:["Codex books (photos)","Artist statements","Exhibition observations"]
      },
      inquiry:["Repeat the Week 1 Glyph Wall: what have students learned?","Which Big Projects showed the most growth?","Thank-you notes to whānau and helpers."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"rosa", meta:"The last panel",
        msg:"Children, your codex books are nearly finished — ten panels, ten weeks. A codex holds a people's story. Today you'll make the last panel: **your story, inside God's bigger story**. Then we open the doors and show your whānau everything you've made.",
        notes:[["SAY","Read the message."],["NOTE","Exhibition day: whānau may arrive during Path time."]] },
      { type:"glyphcheck", phase:"transmission", fs:"real", title:"The whole term", qs:[
          { q:"Name the four surviving Maya codices.", a:"Dresden, Madrid, Paris and the Maya Codex of Mexico." },
          { q:"How do you write 12 in Maya numbers?", a:"Two bars (5 + 5) and two dots." },
          { q:"What did the class decide for the codex?", a:"(Your class's decision from Tuesday.)" }],
        notes:[["SAY","Whole-term review."],["CLICK","→ flips."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and SC."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Tell your story", title:"Writing an artist statement", h:"440px", cards:[
          { big:"👀", color:"#2E9FB0", t:"What", d:"“My panel shows…”" },
          { big:"🖌️", color:"#D9A23A", t:"How", d:"“I used the technique of… because…”" },
          { big:"💭", color:"#B3262E", t:"Why", d:"“It means… to me. This term I learned…”" }],
        notes:[["SAY","“Three short paragraphs: what, how, why.”"]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Exhibition protocol", title:"Welcome to our museum", h:"420px", cards:[
          { big:"🤝", color:"#1F7A5A", t:"Welcome", d:"Greet visitors and offer a tour." },
          { big:"🙌", color:"#D9A23A", t:"Look, don't touch", d:"Unless the artist invites you." },
          { big:"💬", color:"#2E9FB0", t:"Warm & cool", d:"Leave kind, specific feedback slips." }],
        notes:[["NOTE","Set up: codex books open, Museum Cases, campaign posters, Fair Test posters, Temples of Light."]] },
      { type:"hononga", phase:"excavate", fs:"real", title:"A container of treasures",
        body:"**Te Papa Tongarewa**, our national museum, has a name that means **“container of treasures”** — treasures that come from the land and people of Aotearoa.\n\nToday our classroom becomes a container of treasures too.",
        notes:[["ASK","“What's the treasure in our ‘museum’ today?” (Our learning, our stories, each other.)"]] },
      { type:"paths", phase:"paths", fs:null, minutes:22, notes:[["SAY","Finish panel 10, statements and docent prep; then the Exhibition opens."],["CLICK","Start the 22-minute timer."]] },
      { type:"lens", phase:"lens", fs:null, notes:[["CLICK","→ reveals each move."],["SAY","Read Psalm 115:1."]] },
      { type:"folioseal", phase:"decode", fs:"story",
        notes:[["SAY","“The final seal — Folio X!”"],["CLICK","6 + 0 + 3 + 3 = 12. Press ▬ twice and ● twice → Break the seal."],["ASK","“How many fives are in 12?” (2, with 2 left over)"]] },
      { type:"finale", phase:"decode", fs:"story", title:"The Codex Comes Home",
        notes:[["CLICK","→ moves through the finale: the decision, the homecoming, the last folio, the flight home, then the credits."],["NOTE","Add student names in Settings → Class list to see them in the credits (stored on this computer only)."],["SAY","Let the credits roll — then pray together and thank God for the term."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Final self-assessment for the term."],["CLICK","C = cacao beans."]] }
    ]
  };

  FC.WEEKS[10] = {
    n:10,
    story:"Folio X — The Codex Comes Home. The team meets the living Maya and Nahua peoples and their gifts to the world, weighs who should own the past and votes on the codex's future, powers the community museum, showcases the Temples of Light, and completes their codex books. The final seal opens, and the codex goes home. Soli Deo Gloria.",
    hononga:"Te reo Māori as a living language (Mon); Karanga Aotearoa and repatriation (Tue); New Zealand's renewable electricity (Wed); manaakitanga at our showcase (Thu); Te Papa Tongarewa, ‘container of treasures’ (Fri). Check local framing with your Māori lead.",
    seal:{
      answer:12,
      instruction:"Add this week's four **Glyph Clues**: 6 + 0 + 3 + 3. Build the answer with **bars and dots**.",
      reveal:"🟡 **Folio X unsealed:** the codex in its new home, a community museum, with people from many nations walking in. Dr Canul: “It has come home.” Now — on to the finale!",
      art:() => { const v = FC.art.homeFolio(); v.setAttribute("style", "width:100%;height:100%"); return v; }
    },
    lessons:[mon, tue, wed, thu, fri]
  };
})(window.FC);
