/* ==========================================================
   WEEK 9 — FOLIO IX · MEETING OF WORLDS
   ========================================================== */
(function(FC){
  "use strict";

  const bpCheck = (name) => ({ type:"discussion", phase:"paths", fs:null, kicker:"Big Project check-in", q:`**${name}:** what's left to finish before the Exhibition **next week**?`, sub:"Make a 3-item ‘to finish’ list in your journal.", talk:60,
    notes:[["SAY","“The Exhibition is next week! One minute: what's left to do?”"],["NOTE","Students who are on track may use Path time for their Big Project."]] });

  /* ======================= MONDAY · HISTORY ======================= */
  const mon = {
    id:"w09-mon", week:9, day:"mon", subject:"history", duration:50,
    title:"1519–1521: Two Accounts of the Conquest", guide:"itzel",
    codes:["SS-H","SS-P","RE"],
    coverage:"Y5–6 History (2027 Social Sciences): perspectives — comparing accounts of the same events; cause and consequence (why Tenochtitlan fell); continuity and change; honest engagement with injustice in the past.",
    li:"We are learning to compare different perspectives on the Spanish conquest of the Aztec Empire.",
    sc:["I can sequence the key events from 1519 to 1521.","I can explain why a small Spanish force won (allies, disease, divisions, technology).","I can compare Spanish and Nahua accounts of the same events."],
    vocab:[
      { w:"conquest", def:"taking control of a place or people by force" },
      { w:"perspective", def:"a point of view — how someone sees events" },
      { w:"ally", def:"a group that joins with another, often against a common enemy" },
      { w:"epidemic", def:"a disease spreading quickly through many people" },
      { w:"immunity", def:"the body's protection against a disease" },
      { w:"Florentine Codex", def:"a 1500s book of Nahua knowledge and accounts, gathered with the friar Bernardino de Sahagún" },
      { w:"repentance", def:"being truly sorry and turning away from wrong" }
    ],
    prep:{ min:3, items:["Read the Lens notes beforehand (sensitive content)","Hot-seat role cards for Path C (or use the slide prompts)","Expedition Journals"] },
    safety:["Sensitive content: war, disease and injustice. Keep it honest but not graphic. Some students may have Latin American heritage — invite, never pressure, them to share."],
    hononga:"In Aotearoa, first encounters between Māori and Europeans also have **two perspectives**: Abel **Tasman**'s ships (1642) and James **Cook**'s arrival (1769). Today, **Aotearoa New Zealand's Histories** asks students to hear more than one voice — just as we're doing with 1519.",
    paths:[
      { id:"A", name:"The Scribe", product:"Two-Perspective Diary", steps:["Write two short diary entries about the same day in 1519–1521.","One from a Spanish soldier, one from a Mexica person.","End with what each one couldn't see or understand."], flying:"Add a third voice: a Tlaxcalan ally." },
      { id:"B", name:"The Builder", product:"Causes Balance Model", steps:["Make a card balance or ranked tower of causes.","Allies, disease, divisions, technology, leadership.","Explain your ranking with evidence."], flying:"Show how causes connected (e.g. disease weakened defence)." },
      { id:"C", name:"The Messenger", product:"Hot-Seat Interviews", steps:["Take a role: Malintzin, a Tlaxcalan leader, a Spanish soldier or a Mexica mother.","The class asks you 3 questions.","Answer from that person's perspective."], flying:"Play two roles and show how they'd disagree." }
    ],
    supportedShort:"diary frame; cause cards with pictures; role cards with prompts.",
    lens:{
      pillar:"mohio", title:"Telling the truth when ‘our side’ did wrong",
      look:"Look honestly at the Conquest: violence, greed and injustice — often by people who called themselves Christians. But look too at **Las Casas**, who spoke up for Indigenous peoples, and **Sahagún**, who helped Nahua scholars record their knowledge.",
      ref:"Genesis 1:27; Micah 6:8; 1 John 1:9",
      paraphrase:"God created mankind in his own image… He has shown you what is good: to act justly and to love mercy and to walk humbly with your God… If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness.",
      talk:[
        { q:"Genesis says every person is made in God's image. How should that have changed the way the Spanish treated the Mexica and other peoples?", listen:"Every person has equal worth; violence and greed were wrong; Las Casas used this very argument." },
        { q:"How do we tell the truth when people from ‘our side’ did wrong?", listen:"Be honest, don't make excuses; say sorry and learn (repentance — 1 John 1:9); listen to those who were hurt; act justly now." }
      ],
      live:"Write one sentence: **“Every person is made in God's image, so I will…”**"
    },
    clue:{ prompt:"Tenochtitlan fell in 1521. Take the last two digits and subtract 2.", answer:19, explain:"21 − 2 = 19 — three bars and four dots. Clue saved!" },
    next:"Tuesday — climate patterns: El Niño, the Atacama and shrinking glaciers.",
    rubric:[
      { c:"Sequence of events", code:"SS-H",
        d:["Names one event.","“The Spanish came.”"],
        a:["Sequences the key events with dates.","“1519 arrival and meeting; 1520 La Noche Triste and smallpox; 13 August 1521 the fall.”"],
        f:["Explains how events led to each other.","“Smallpox spread after La Noche Triste, so the city was weakened for the siege.”"],
        i:["I can name an event.","I can put events in order with dates.","I can explain how events led to each other."] },
      { c:"Causes", code:"SS-H",
        d:["Gives one reason.","“They had guns.”"],
        a:["Explains several causes including allies and disease.","“Tens of thousands of Tlaxcalan allies, smallpox and divisions in the empire mattered more than guns.”"],
        f:["Weighs causes and challenges myths.","“The idea that a few hundred Spaniards beat an empire alone is a myth — Indigenous allies and disease were key.”"],
        i:["I can give a reason.","I can explain several causes.","I can weigh causes and challenge myths."] },
      { c:"Perspectives", code:"SS-P · RE",
        d:["Retells one side.","“The Spanish won.”"],
        a:["Compares Spanish and Nahua accounts.","“Cortés made himself sound in control; the Nahua account remembers fear and sickness.”"],
        f:["Explains why accounts differ and responds with honesty and compassion.","“Cortés wrote to impress the king; the Nahua wrote as survivors. Both help us see the truth.”"],
        i:["I can retell one side.","I can compare two accounts.","I can explain why they differ."] }
    ],
    plan:{
      prior:"Weeks 6–8: Tenochtitlan, society, beliefs. Week 1: sources (Cortés' letter). Week 3: Landa (honesty about Christian wrongs).",
      kc:["Thinking","Relating to others","Using language, symbols & texts"],
      sequence:[
        ["0–6","Field Transmission","Dr Canul: Folio VIII's meeting; Glyph Check; LI/SC.","Recall; predict."],
        ["6–20","Excavate","Timeline 1519–1521; Two Lenses (Spanish vs Nahua); Why did Tenochtitlan fall? (factors); Hononga.","Compare, weigh."],
        ["20–22","Big Project check-in","Museum Case.","Share."],
        ["22–36","Choose Your Path","Diary / balance / hot seat.","Create, role-play."],
        ["36–45","Through the Lens (extended)","Genesis 1:27; Micah 6:8; 1 John 1:9; Las Casas & Sahagún.","Discuss."],
        ["45–50","Decode & Exit","Clue (19).","Solve; self-assess."]
      ],
      diff:{
        supported:"Diary frame; picture cause cards.",
        esol:"Visual timeline; role cards.",
        learning:"Oral hot-seat; fewer events.",
        flying:"Three perspectives; challenge myths."
      },
      assess:{
        lookFor:["Sequence with dates","Multiple causes incl. allies & disease","Perspectives compared"],
        evidence:["Path products","Hot-seat observations","Exit self-assessment"]
      },
      inquiry:["Did students avoid ‘goodies vs baddies’?","Responses to the Christian-failure discussion?","Big Project finishing plans — anyone at risk?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"itzel", meta:"Folio IX · two worlds meet",
        msg:"Team, Folio VIII showed two figures meeting in **1519**: a Mexica noble and a Spanish soldier in armour. What happened next changed the world. Today we'll hear the story from **both sides** — because a good historian never trusts only one account.",
        notes:[["SAY","Read the message."],["NOTE","Sensitive: war, disease, injustice. Honest, not graphic. Tone: grief, honesty, hope."]] },
      { type:"glyphcheck", phase:"transmission", fs:"real", title:"Remember Week 8?", qs:[
          { q:"What did the Aztecs believe about the Fifth Sun?", a:"That they lived in the fifth age, and the Sun needed offerings to keep moving." },
          { q:"What is a quipu?", a:"Knotted cords the Inca used to record numbers." },
          { q:"How does a generator work?", a:"Spinning magnets near coils of wire make electricity." }],
        notes:[["SAY","Whiteboards; show on 3."],["CLICK","→ flips."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and SC."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"1519–1521", title:"What happened?", ix:"conquest",
        notes:[["CLICK","→ moves through each event."],["SAY","Name Malintzin and the Tlaxcalans clearly — Indigenous people were central to the story."],["PACE","Aim for minute 11."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Two perspectives", title:"Two lenses on the same moment", ix:"twolens",
        notes:[["CLICK","For each moment: Spanish lens, then Nahua lens."],["ASK","“What's different? Why might Cortés tell it that way? Why might the Nahua remember it that way?”"],["NOTE","Text is paraphrased for students — not exact quotes."],["PACE","Aim for minute 16."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Cause & consequence", title:"Why did Tenochtitlan fall?", ix:"factors",
        cfg:{ title:"Why did it fall?", intro:"Tap each factor. Many people think the Spanish won because of guns and horses. The evidence tells a bigger story.", factors:[
          { e:"🤝", t:"Indigenous allies", c:"#1F7A5A", w:95, d:"**Tens of thousands** of Tlaxcalans and others who resented Mexica rule fought alongside a few hundred Spaniards. Without them the Spanish could not have won." },
          { e:"🦠", t:"Smallpox", c:"#5a3825", w:90, d:"A **smallpox** epidemic killed huge numbers, including the ruler Cuitláhuac. The Mexica had no immunity to this new disease." },
          { e:"⚖️", t:"A divided empire", c:"#D9A23A", w:70, d:"Many conquered towns hated paying **tribute** — so the empire wasn't united." },
          { e:"⚔️", t:"Steel, horses & guns", c:"#9aa4a8", w:45, d:"Steel swords and armour helped, but there were few guns and horses — and gunpowder often got damp." },
          { e:"🗣️", t:"Malintzin", c:"#B3262E", w:55, d:"**Malintzin**'s skill with languages helped the Spanish make alliances and understand the Mexica." }] },
        notes:[["CLICK","Tap each factor; discuss before tapping."],["ASK","“Which factor surprised you?”"],["PACE","Aim for minute 20."]] },
      { type:"hononga", phase:"excavate", fs:"real", title:"Two perspectives in Aotearoa",
        body:"In Aotearoa, first encounters between Māori and Europeans also have **two perspectives**: Abel **Tasman**'s ships (1642) and James **Cook**'s arrival (1769).\n\n**Aotearoa New Zealand's Histories** asks us to hear more than one voice — just as we're doing with 1519.",
        notes:[["ASK","“Why is it important to hear from people on both sides of a first encounter?”"]] },
      bpCheck("Museum Case"),
      { type:"paths", phase:"paths", fs:null, minutes:14, notes:[["SAY","Explain paths."],["CLICK","Start the 14-minute timer (the Lens is longer today)."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","→ reveals each move."],["SAY","Read Genesis 1:27, Micah 6:8 and 1 John 1:9. Tell briefly about Bartolomé de las Casas, who defended Indigenous peoples, and Sahagún, who worked with Nahua scholars to record their knowledge (the Florentine Codex)."],["ASK","Use both questions."],["NOTE","Tone: honest grief and hope. Don't defend the wrongs; don't shame students. Repentance means telling the truth and changing."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["ASK","“21 − 2?” (19)"],["CLICK","▬▬▬ ●●●● → Check."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = cacao beans."]] }
    ]
  };

  /* ======================= TUESDAY · GEOGRAPHY ======================= */
  const tue = {
    id:"w09-tue", week:9, day:"tue", subject:"geography", duration:50,
    title:"Climate Patterns: El Niño, the Atacama & Shrinking Glaciers", guide:"sofia",
    codes:["SS-G","SS-P","SC-ES"],
    coverage:"Y6 Geography (2027 Social Sciences): climate patterns; El Niño and its effects including on Aotearoa; greenhouse gases and climate change impacts (glacier retreat); mitigation and adaptation.",
    li:"We are learning about climate patterns in South America and how they link to Aotearoa.",
    sc:["I can compare very different climates in South America (Atacama vs Amazon).","I can explain El Niño simply, including its effect on New Zealand.","I can explain glacier retreat and suggest mitigation and adaptation."],
    vocab:[
      { w:"climate", def:"the usual weather of a place over many years" },
      { w:"El Niño", say:"el NEEN-yoh", def:"a pattern where the Pacific near South America warms up, changing weather worldwide" },
      { w:"trade winds", def:"steady winds that blow from east to west near the equator" },
      { w:"glacier", def:"a slow-moving river of ice" },
      { w:"greenhouse gases", def:"gases (like carbon dioxide) that trap heat around the Earth" },
      { w:"mitigation / adaptation", def:"reducing the cause of climate change / adjusting to its effects" }
    ],
    prep:{ min:2, items:["Expedition Journals"] },
    safety:[],
    hononga:"El Niño affects **Aotearoa** too: it often brings more westerly winds, so the **west** is wetter and the **east** — like Canterbury — drier, which matters for farmers. NIWA tracks El Niño and La Niña so communities can prepare.",
    paths:[
      { id:"A", name:"The Scribe", product:"Climate Report Card", steps:["Make a report card for the Atacama and the Amazon.","Include rainfall, temperature and how people live.","Grade how each copes with climate change."], flying:"Add Canterbury and explain El Niño's effect." },
      { id:"B", name:"The Builder", product:"El Niño Diagram", steps:["Draw a normal year and an El Niño year side by side.","Show winds, warm water and rain clouds.","Label effects in Peru and NZ."], flying:"Add La Niña as a third panel." },
      { id:"C", name:"The Messenger", product:"Weather Broadcast", steps:["Present a 60-second forecast for an El Niño year.","Cover Peru, Australia and Canterbury.","Give one tip to help people prepare."], flying:"Interview a ‘glacier scientist’ about meltwater." }
    ],
    supportedShort:"report card template; diagram outline; broadcast script frame.",
    lens:{
      pillar:"panga", title:"Seedtime and harvest",
      look:"Look at the patterns: rains and droughts, warm years and cool years, glaciers that feed cities. The climate is a gift people depend on — and something we affect.",
      ref:"Genesis 8:22; Psalm 24:1",
      paraphrase:"As long as the earth endures, seedtime and harvest, cold and heat, summer and winter, day and night will never cease… The earth is the Lord's, and everything in it.",
      talk:[
        { q:"God promised Noah that seasons would continue. Why does that promise matter to farmers and cities?", listen:"They rely on reliable seasons; it shows God's faithfulness and care." },
        { q:"If the earth is the Lord's, what part do WE play in caring for the climate?", listen:"Using less energy, planting trees, reducing waste, helping people affected (Pānga — kaitiakitanga)." }
      ],
      live:"Choose one **climate action** for your family (walk/bike once, switch off lights, plant something)."
    },
    clue:{ prompt:"There are 12 months in a year. Take away the 3 summer months. How many are left?", answer:9, explain:"12 − 3 = 9 → one bar and four dots. Clue saved!" },
    next:"Wednesday — light, reflection and obsidian mirrors.",
    rubric:[
      { c:"Climate contrasts", code:"SS-G",
        d:["Says one place is dry.","“The desert is dry.”"],
        a:["Compares the Atacama and the Amazon with reasons.","“The Atacama is one of the driest places on Earth; the Amazon is hot and wet all year.”"],
        f:["Explains the causes of the contrast.","“Mountains and cold ocean currents block rain from the Atacama; the Amazon gets rising warm, wet air.”"],
        i:["I can describe one climate.","I can compare two climates.","I can explain why they differ."] },
      { c:"El Niño", code:"SS-G · SC-ES",
        d:["Names El Niño.","“It's a weather thing.”"],
        a:["Explains El Niño simply and its NZ effect.","“Trade winds weaken, warm water moves east; NZ often gets drier in the east.”"],
        f:["Explains effects on people and why forecasting matters.","“Peru's fishing suffers and Canterbury farmers face drought — NIWA warns people to prepare.”"],
        i:["I can name El Niño.","I can explain it and its NZ effect.","I can explain effects on people."] },
      { c:"Climate change response", code:"SS-G · SS-C",
        d:["Says ice is melting.","“Glaciers melt.”"],
        a:["Explains glacier retreat and gives mitigation and adaptation examples.","“Warming shrinks Andes glaciers; cities can store water (adaptation) and we can cut emissions (mitigation).”"],
        f:["Evaluates responses fairly.","“Poor communities who did least to cause it are hit hardest — rich countries should help.”"],
        i:["I know ice is melting.","I can explain retreat and responses.","I can evaluate fairness of responses."] }
    ],
    plan:{
      prior:"Week 4: climate graphs; Week 5: deforestation; Week 8: the Andes.",
      kc:["Thinking","Participating & contributing"],
      sequence:[
        ["0–6","Field Transmission","Sofía: from the desert to the rainforest; Glyph Check; LI/SC.","Recall."],
        ["6–20","Excavate","Atacama vs Amazon; El Niño toggle (incl. NZ); glacier retreat; Hononga (NIWA).","Compare, explain."],
        ["20–22","Big Project check-in","Atlas/Campaign.","Share."],
        ["22–38","Choose Your Path","Report / diagram / broadcast.","Create."],
        ["38–45","Through the Lens","Genesis 8:22; Psalm 24:1.","Discuss; action."],
        ["45–50","Decode & Exit","Clue (9).","Solve; self-assess."]
      ],
      diff:{
        supported:"Templates; picture cards.",
        esol:"Visual toggle; weather icons.",
        learning:"Diagram option; oral broadcast.",
        flying:"La Niña; fairness of responses."
      },
      assess:{
        lookFor:["Climate contrasts","El Niño + NZ effect","Mitigation & adaptation"],
        evidence:["Path products","Discussion","Exit self-assessment"]
      },
      inquiry:["Climate anxiety: keep it hopeful and action-focused.","Did students link El Niño to Canterbury?","Link to Week 10 campaigns."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"sofia", meta:"Desert to jungle",
        msg:"Navigators, this morning we took off from the **Atacama** — so dry that some weather stations have barely recorded any rain. By lunch we were over the dripping **Amazon**. Same continent, wildly different climates. And the ocean between us and South America has a trick that changes **our** weather in Canterbury too…",
        notes:[["SAY","Read the message."],["ASK","“How could the ocean near South America change our weather?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:"real", qs:[
          { q:"Name two reasons Tenochtitlan fell.", a:"Indigenous allies, smallpox, divisions, Spanish technology." },
          { q:"What is a climate graph?", a:"Bars for rainfall, a line for temperature, for each month." },
          { q:"Tropical vs temperate rainforest — one difference?", a:"Tropical is hot all year; temperate is cool with seasons." }],
        notes:[["SAY","Whiteboards; show on 3."],["CLICK","→ flips."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and SC."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"One continent, many climates", title:"Atacama vs Amazon", h:"480px", cards:[
          { big:"🏜️", color:"#D9A23A", t:"Atacama", d:"One of the **driest places on Earth** (Chile). Mountains and a cold ocean current block the rain." },
          { big:"🌧️", color:"#1F7A5A", t:"Amazon", d:"Hot and wet all year. Rising warm, moist air makes **daily rain**." },
          { big:"🏔️", color:"#2E9FB0", t:"Andes", d:"Cold at the top, with **glaciers** that feed rivers and cities." }],
        notes:[["ASK","“Why would mountains stop rain from reaching a desert?”"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"The Pacific's big switch", title:"El Niño", ix:"elnino",
        notes:[["CLICK","Normal year, then El Niño year."],["ASK","“What happens to the warm water? Where does the rain go?”"],["SAY","“Peruvian fishermen named it El Niño — the Christ child — because the warm water often arrived around Christmas.”"],["PACE","Aim for minute 13."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"A warming world", title:"Shrinking glaciers", ix:"glacier",
        notes:[["CLICK","Drag the slider from 1980 to 2025."],["ASK","“What happens to the city's water when the glacier is gone?”"],["NOTE","Keep it hopeful: talk about what people are doing (water storage, cutting emissions)."],["PACE","Aim for minute 18."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"What can we do?", title:"Mitigation & adaptation", h:"440px", cards:[
          { big:"⬇️", color:"#1F7A5A", t:"Mitigation", d:"**Reduce the cause**: less fossil fuel, more renewable energy (like hydro!), protect forests." },
          { big:"🛡️", color:"#2E9FB0", t:"Adaptation", d:"**Prepare for the effects**: store water, plant drought-tolerant crops, build stronger defences." }],
        notes:[["ASK","“Give one example of each that a family in Christchurch could do.”"],["PACE","Aim for minute 20."]] },
      bpCheck("Expedition Atlas or Campaign"),
      { type:"paths", phase:"paths", fs:null, notes:[["SAY","Explain paths."],["CLICK","Start the timer."]] },
      { type:"lens", phase:"lens", fs:null, notes:[["CLICK","→ reveals each move."],["SAY","Read Genesis 8:22 and Psalm 24:1."],["ASK","Use both questions."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["ASK","“12 − 3?” (9)"],["CLICK","▬ ●●●● → Check."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = cacao beans."]] }
    ]
  };

  /* ======================= WEDNESDAY · SCIENCE ======================= */
  const wed = {
    id:"w09-wed", week:9, day:"wed", subject:"science", duration:50,
    title:"Light: Reflection, Shadows & Obsidian Mirrors", guide:"mateo",
    codes:["SC-MIE","SC-P"],
    coverage:"Y6 Science (Matter, interactions & energy): light travels in straight lines; reflection (angle of incidence = angle of reflection); shadows; how we see objects. Science practices: investigating and measuring angles.",
    li:"We are learning how light travels and reflects.",
    sc:["I can explain that light travels in straight lines.","I can investigate and explain that angle in = angle out.","I can explain how shadows form and how we see objects."],
    vocab:[
      { w:"reflection", def:"light bouncing off a surface" },
      { w:"angle of incidence", def:"the angle the light comes IN at (measured from the normal)" },
      { w:"angle of reflection", def:"the angle the light goes OUT at" },
      { w:"normal", def:"an imaginary line at 90° to the mirror" },
      { w:"shadow", def:"a dark area where light is blocked" },
      { w:"obsidian", def:"black volcanic glass, polished by the Aztecs into mirrors" }
    ],
    prep:{ min:5, items:["Small mirrors (one per pair)","Torches","Protractors","Paper targets; optional cardboard for shadow puppets"] },
    safety:["Never shine torches or reflected sunlight into eyes.","Handle mirrors by the edges; report any cracks."],
    hononga:"**Pāua** shell shimmers because its layers **reflect** light in many directions — that's why carvers set it into the eyes of whakairo, so they seem to catch the light and come alive.",
    paths:[
      { id:"A", name:"The Scribe", product:"Investigation: Angle In = Angle Out", steps:["Shine a torch at a mirror at 3 different angles.","Measure angle in and angle out with a protractor.","Write your conclusion with your results."], flying:"Explain why your measurements weren't exactly equal (errors)." },
      { id:"B", name:"The Builder", product:"Mirror Challenge", steps:["Use 2–3 mirrors to light a target around a corner.","Draw the light path with arrows.","Mark the angles at each mirror."], flying:"Build a simple periscope from card and two mirrors." },
      { id:"C", name:"The Messenger", product:"Shadow Puppet Play", steps:["Make shadow puppets of the expedition team.","Perform a 1-minute scene with a torch.","Explain how the shadow's size changes."], flying:"Explain why shadows have sharp or blurry edges." }
    ],
    supportedShort:"results table with protractor guide; light-path template; puppet templates.",
    lens:{
      pillar:"manaaki", title:"Reflecting the light",
      look:"Look at the mirror: it doesn't make light — it reflects it. The Moon doesn't shine by itself either; it reflects the Sun.",
      ref:"John 8:12; Matthew 5:14–16",
      paraphrase:"Jesus said, “I am the light of the world. Whoever follows me will never walk in darkness, but will have the light of life.”… “You are the light of the world… let your light shine before others, that they may see your good deeds and glorify your Father in heaven.”",
      talk:[
        { q:"Jesus said HE is the light, and also that WE are the light. How can both be true? (Think of a mirror.)", listen:"We reflect His light, like a mirror or the Moon; the light comes from Him." },
        { q:"What does it look like to ‘reflect’ Jesus' light at school?", listen:"Kindness, honesty, helping, including others — so people see God's goodness (Manaaki; Soli Deo Gloria)." }
      ],
      live:"Do one ‘reflecting’ act of kindness today — and let God get the glory."
    },
    clue:{ prompt:"Light hits a mirror at 40°. What's the angle of reflection? Now divide it by 4.", answer:10, explain:"Angle out = 40°, and 40 ÷ 4 = 10 → two bars. Clue saved!" },
    next:"Thursday — build your Temple of Light!",
    rubric:[
      { c:"How light travels", code:"SC-MIE",
        d:["Says light shines.","“The torch makes light.”"],
        a:["Explains light travels in straight lines and we see by reflected light.","“Light goes in straight lines; we see a book because light bounces off it into our eyes.”"],
        f:["Uses ray diagrams to explain.","Draws accurate rays from a source, off an object, into the eye."],
        i:["I know light shines.","I can explain straight lines and seeing.","I can use ray diagrams."] },
      { c:"Reflection investigation", code:"SC-P · SC-MIE",
        d:["Shines a torch at a mirror.","“It bounced.”"],
        a:["Measures angles and concludes angle in = angle out.","“30° in, 30° out; 50° in, 49° out — about equal.”"],
        f:["Explains errors and uses the law to predict.","“Our protractor was hard to line up; I predict 70° in gives 70° out.”"],
        i:["I saw it bounce.","I measured and found angle in = angle out.","I explained errors and predicted."] },
      { c:"Shadows", code:"SC-MIE",
        d:["Says shadows are dark.","“It's dark behind.”"],
        a:["Explains shadows form where light is blocked; size changes with distance.","“Closer to the torch makes a bigger shadow.”"],
        f:["Explains sharp vs blurry edges.","“A small light source makes sharp edges; a big one makes blurry edges.”"],
        i:["I know shadows are dark.","I can explain how shadows form and change.","I can explain sharp and blurry edges."] }
    ],
    plan:{
      prior:"Week 8: the equinox serpent (light and shadow).",
      kc:["Thinking","Managing self"],
      sequence:[
        ["0–6","Field Transmission","Mateo and the dark chamber; Glyph Check; LI/SC; safety.","Recall."],
        ["6–20","Excavate","Angle in = angle out; obsidian mirrors; mirror maze; Hononga (pāua).","Investigate, predict."],
        ["20–22","Big Project check-in","My Fair Test.","Share."],
        ["22–38","Choose Your Path","Mirrors and torches out.","Investigate / challenge / puppets."],
        ["38–45","Through the Lens","John 8:12; Matthew 5:14–16.","Discuss."],
        ["45–50","Decode & Exit","Clue (10).","Solve; self-assess."]
      ],
      diff:{
        supported:"Protractor guide; templates.",
        esol:"Demonstration; ray drawings.",
        learning:"Maze on screen; puppet option.",
        flying:"Periscope; error analysis."
      },
      assess:{
        lookFor:["Straight lines and seeing","Angle in = angle out","Shadows explained"],
        evidence:["Results tables","Light-path drawings","Exit self-assessment"]
      },
      inquiry:["Protractor skills — re-teach if needed.","Did the maze help students see angles?","Fair Test projects due next week."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"mateo", meta:"The dark chamber",
        msg:"We've found the last chamber — but it's **pitch black** and too deep for wires. On the wall hangs a polished **obsidian mirror**, just like the ones the Aztecs made. If we bounce sunlight from the entrance with mirrors, we could light the chamber without any electricity!",
        notes:[["SAY","Read the message."],["ASK","“How could mirrors carry light around corners?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:"real", qs:[
          { q:"What is El Niño?", a:"When trade winds weaken and warm water spreads east across the Pacific." },
          { q:"What is a threshold in code?", a:"The value where a decision switches." },
          { q:"What makes the equinox ‘serpent’?", a:"Triangles of light and shadow on El Castillo's stair." }],
        notes:[["SAY","Whiteboards; show on 3."],["CLICK","→ flips."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and SC."]] },
      { type:"safety", phase:"transmission", fs:"real", title:"Light safety", items:[
          { icon:"👁️", t:"Eyes", d:"Never shine torches or reflected sunlight into anyone's eyes." },
          { icon:"🪞", t:"Mirrors", d:"Hold by the edges. Report cracks straight away." },
          { icon:"☀️", t:"Sun", d:"Never look at the sun — even with a mirror." }],
        notes:[["SAFETY","Read the rules."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"The law of reflection", title:"Angle in = angle out", ix:"reflect",
        notes:[["CLICK","Drag the torch to different angles."],["ASK","“What do you notice about the two angles?”"],["SAY","“Angles are measured from the normal — the dashed line at 90° to the mirror.”"]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Volcanic glass", title:"Obsidian mirrors", visual:{ artefact:"mirror" },
        bullets:["**Obsidian** is natural black glass from volcanoes.","Aztec craftspeople **polished** it into dark, shiny mirrors.","One Aztec obsidian mirror ended up in England — owned by **John Dee**, an adviser to Queen Elizabeth I. A **2021** study confirmed it came from Mexico. It's now in the **British Museum**."],
        notes:[["ASK","“Why does a smooth, shiny surface reflect better than a rough one?”"],["NOTE","Image: artistic reconstruction."],["PACE","Aim for minute 13."]] },
      { type:"interactive", phase:"excavate", fs:"story", kicker:"Light the chamber", title:"Mirror maze", ix:"mirrormaze",
        notes:[["CLICK","Tap mirrors to turn them until the beam reaches the codex. Try Chamber 2."],["ASK","“At each mirror, what's true about the angles?”"],["PACE","Aim for minute 20."]] },
      { type:"hononga", phase:"excavate", fs:"real", title:"Pāua — reflected light",
        body:"**Pāua** shell shimmers because its thin layers **reflect** light in many directions.\n\nCarvers set pāua into the eyes of **whakairo**, so they catch the light and seem to come alive.",
        notes:[["ASK","“Why does pāua look different from different angles?”"]] },
      bpCheck("My Fair Test"),
      { type:"paths", phase:"paths", fs:null, notes:[["SAY","Explain paths; mirrors and torches out."],["CLICK","Start the timer."],["SAFETY","Remind: no light in eyes."]] },
      { type:"lens", phase:"lens", fs:null, notes:[["CLICK","→ reveals each move."],["SAY","Read John 8:12 and Matthew 5:14–16."],["ASK","Use both questions."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["ASK","“40° out, ÷ 4?” (10)"],["CLICK","▬▬ → Check."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = cacao beans."]] }
    ]
  };

  /* ======================= THURSDAY · TECHNOLOGY ======================= */
  const thu = {
    id:"w09-thu", week:9, day:"thu", subject:"technology", duration:50,
    title:"Temple of Light: Design & Build", guide:"mateo",
    codes:["TE-TP","TE-TK","DT-CT"],
    coverage:"Technology (NZC 2007 L3): technological practice — brief development (stakeholder, need, specifications), planning, outcome development and evaluation; technological systems (input → process → output). Collaborative team roles.",
    li:"We are learning to design and build an interactive temple diorama in a team.",
    sc:["I can write a brief with a stakeholder, need and 3 specifications.","I can plan the circuit (and optional code) for my temple.","I can build safely in a team role and test against my specifications."],
    vocab:[
      { w:"brief", def:"a plan that says who it's for, what's needed and the specifications" },
      { w:"stakeholder", def:"the person or group the product is for" },
      { w:"specification", def:"a measurable requirement the outcome must meet" },
      { w:"prototype", def:"a first working version to test" },
      { w:"evaluate", def:"judge how well it meets the specifications" }
    ],
    prep:{ min:10, items:["Shoe boxes or cardboard (one per team)","All previous kit: battery packs, LEDs, clip leads, switches, foil/card pressure plates, buzzers; Arduinos if available","Card, glue, scissors, paint/pens","Engineering Journals"] },
    safety:["Batteries only — never sockets.","Hot wire = short circuit: disconnect.","Scissors and craft knives: craft knives are teacher-only."],
    hononga:"Building a **wharenui** is a community project: carvers, weavers, painters and builders each bring their skills, guided by kaumātua. Every role matters, and the finished house tells the community's story.",
    paths:[
      { id:"A", name:"Designer", product:"Brief & Sketch", steps:["Write the team's brief: stakeholder, need, 3 specs.","Sketch the temple from the front and side.","Label where the light/sound/input will go."], flying:"Add a materials list with reasons for each choice." },
      { id:"B", name:"Electrician / Builder", product:"Circuit & Structure", steps:["Plan the circuit diagram with symbols.","Build the temple from the box and card.","Wire the input → output safely."], flying:"Add a parallel circuit so two lights work independently." },
      { id:"C", name:"Coder / Tester", product:"Code & Test Plan", steps:["(Optional) code an Arduino effect: blink, sound or sensor.","Write a test plan for each specification.","Run the tests and record results."], flying:"Get feedback from another team (the ‘stakeholder’) and plan improvements." }
    ],
    supportedShort:"brief template; circuit cards; test checklist.",
    lens:{
      pillar:"manaaki", title:"Each one has a gift",
      look:"Look at the teams: a designer, an electrician, a builder, a coder, a tester. No one could build the temple alone.",
      ref:"1 Peter 4:10",
      paraphrase:"Each of you should use whatever gift you have received to serve others, as faithful stewards of God's grace in its various forms.",
      talk:[
        { q:"What gifts did you see in your teammates today?", listen:"Specific, kind observations: patience, ideas, careful wiring, encouragement." },
        { q:"How is using your gift to SERVE different from using it to show off?", listen:"Serving helps the team and others; showing off is about me (Manaaki — serving faithfully)." }
      ],
      live:"Thank one teammate for a gift they used today."
    },
    clue:{ prompt:"How many specifications should your brief have?", answer:3, explain:"3 specifications → three dots. Clue saved for the seal!" },
    next:"Friday — woven worlds: huipil motifs and Seal IX.",
    rubric:[
      { c:"Brief & planning", code:"TE-TP",
        d:["Has an idea.","“A temple with a light.”"],
        a:["Writes a brief with stakeholder, need and 3 specs; sketches a plan.","“For museum visitors; the temple lights up when stepped on; specs: hidden switch, 9/10 reliable, visible in daylight.”"],
        f:["Justifies design choices against the specs.","“A buzzer as well as a light, because visitors might not notice the light in a bright room.”"],
        i:["I have an idea.","I wrote a brief and a plan.","I justified my choices."] },
      { c:"Building the system", code:"TE-TK",
        d:["Builds with help; some parts work.","The temple is built but the light doesn't work."],
        a:["Builds a working input → output system safely.","Pressure plate → circuit → LED works reliably."],
        f:["Explains how the parts interact and improves after testing.","“We added a second LED in parallel so if one fails the temple still glows.”"],
        i:["I built it with help.","Our system works safely.","I can explain and improve the system."] },
      { c:"Teamwork & evaluation", code:"TE-TP · DT-CT",
        d:["Works alongside others.","Did some building."],
        a:["Completes a role and tests against each spec.","Tester recorded results for all 3 specs."],
        f:["Leads improvement using stakeholder feedback.","“Another team said it was too dim, so we added reflective foil behind the LED.”"],
        i:["I worked with others.","I did my role and we tested each spec.","I helped improve it using feedback."] }
    ],
    plan:{
      prior:"Weeks 1–8: circuits, switches, symbols, series/parallel, Arduino (blink, loops, if, sound, sensors). Big Project launched in Week 6.",
      kc:["Participating & contributing","Managing self","Thinking"],
      sequence:[
        ["0–6","Field Transmission","Mateo: the museum needs a temple display; Glyph Check; LI/SC; safety.","Recall."],
        ["6–14","Excavate","The brief; team roles; build steps.","Plan."],
        ["14–42","Build (28 min)","Teams build; teacher roams with the rubric.","Design, build, test."],
        ["42–47","Through the Lens","1 Peter 4:10.","Thank a teammate."],
        ["47–50","Decode & Exit","Clue (3); tidy kits.","Solve; self-assess."]
      ],
      diff:{
        supported:"Templates; pre-made pressure plates.",
        esol:"Visual steps; role cards with icons.",
        learning:"Builder role with clear steps.",
        flying:"Parallel circuits; Arduino effects; stakeholder feedback."
      },
      assess:{
        lookFor:["Brief with 3 specs","Working system","Role completed + tested"],
        evidence:["Engineering Journals","Photos of builds","Exit self-assessment"]
      },
      inquiry:["Which teams need extra build time before the Exhibition?","Safety: any shorts or hot wires?","Store builds safely for Week 10."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"mateo", meta:"A museum request",
        msg:"Big news: a community museum in Guatemala wants a **display** about our expedition — a model temple that **lights up** or **sounds** when visitors interact with it. Everything we've learned — circuits, switches, sensors, code — comes together today. Teams, it's time to build your **Temple of Light**!",
        notes:[["SAY","Read the message."],["NOTE","This is the Technology Big Project build day."]] },
      { type:"glyphcheck", phase:"transmission", fs:"real", qs:[
          { q:"What three things does a brief include?", a:"Stakeholder, need, specifications." },
          { q:"Series or parallel for two lights that work independently?", a:"Parallel." },
          { q:"Name an input you could use.", a:"A switch, pressure plate, button or light sensor." }],
        notes:[["SAY","Whiteboards; show on 3."],["CLICK","→ flips."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and SC."]] },
      { type:"safety", phase:"transmission", fs:"real", title:"Build safety", items:[
          { icon:"🔋", t:"Batteries only", d:"Never sockets." },
          { icon:"🔥", t:"Hot = short", d:"Disconnect warm wires straight away." },
          { icon:"🔪", t:"Craft knives", d:"Teacher only. Students use scissors." }],
        notes:[["SAFETY","Read the rules."]] },
      { type:"brief", phase:"excavate", fs:"story", title:"The museum's brief",
        stakeholder:"Visitors to a small community museum in Guatemala (including children).",
        need:"An eye-catching model temple that **responds** when a visitor interacts with it.",
        specs:["Has a hidden input (switch, pressure plate, button or sensor)","Responds reliably (at least 9 out of 10 times)","Easy to see or hear in a bright, busy room"],
        notes:[["SAY","“Your team writes its own brief — this is an example.”"],["ASK","“How will you TEST each specification?”"]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Everyone has a job", title:"Team roles", h:"460px", cards:[
          { big:"✏️", color:"#2E9FB0", t:"Designer", d:"Writes the brief, sketches the plan, chooses materials." },
          { big:"⚡", color:"#D9A23A", t:"Electrician", d:"Plans the circuit with symbols and wires it **safely**." },
          { big:"🏗️", color:"#B3262E", t:"Builder", d:"Builds the temple and scenery from box and card." },
          { big:"🧪", color:"#1F7A5A", t:"Coder / Tester", d:"(Optional) codes an Arduino effect; tests every spec." }],
        notes:[["SAY","“Log your role in your Engineering Journal. Swap roles halfway if your team agrees.”"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Build guide", title:"Build your temple", ix:"stepper",
        cfg:{ safety:"⚠️ Batteries only. Disconnect when not testing. Craft knives are teacher-only.", steps:[
          { t:"Write the brief", d:"Stakeholder, need, and **3 specifications** you can test.", art:"templeStep", n:0 },
          { t:"Choose your temple", d:"A **shoe box** on its side becomes the temple chamber.", art:"templeStep", n:1 },
          { t:"Build the scenery", d:"Card steps, a pyramid, glyphs, plants — make it look like our expedition!", art:"templeStep", n:2 },
          { t:"Wire the system", d:"Input → circuit → output. A switch, pressure plate or Arduino. Batteries **outside** the box so you can reach them.", art:"templeStep", n:3 },
          { t:"Test & improve", d:"Test every specification. Record results. Fix one thing and test again.", art:"templeStep", n:4 }] },
        notes:[["CLICK","Step through, then leave it up during building."],["PACE","Building starts by minute 14."]] },
      { type:"hononga", phase:"excavate", fs:"real", title:"Building a wharenui",
        body:"A **wharenui** is built by a whole community: carvers, weavers, painters and builders each bring their skills, guided by kaumātua.\n\nEvery role matters, and the finished house tells the community's story.",
        notes:[["ASK","“How is our team build like that?”"]] },
      { type:"paths", phase:"paths", fs:null, minutes:28, notes:[["SAY","Teams take their roles. Build!"],["CLICK","Start the 28-minute timer."],["SAFETY","Roam; check wiring and battery placement."]] },
      { type:"lens", phase:"lens", fs:null, notes:[["CLICK","→ reveals each move."],["SAY","Read 1 Peter 4:10."],["ASK","Use both questions; finish by thanking a teammate."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["ASK","“How many specifications?” (3)"],["CLICK","●●● → Check."],["SAFETY","Batteries disconnected before storing builds."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = cacao beans."]] }
    ]
  };

  /* ======================= FRIDAY · ART ======================= */
  const fri = {
    id:"w09-fri", week:9, day:"fri", subject:"art", duration:50,
    title:"Woven Worlds: Huipil Motifs & Paper Weaving", guide:"rosa",
    codes:["VA-UC","VA-PK","VA-DI"],
    coverage:"Visual Arts (NZC 2007, Level 3): understanding art in context (Maya weaving as a living tradition; textiles and identity); practical knowledge (over-under weaving, pattern); developing ideas (meaningful personal motifs).",
    li:"We are learning to create a paper weaving with motifs inspired by Maya textiles.",
    sc:["I can explain that Maya weaving is a living tradition that shows identity.","I can weave over-under accurately.","I can design motifs that carry meaning for me."],
    vocab:[
      { w:"huipil", say:"wee-PEEL", def:"a woven blouse worn by many Maya women" },
      { w:"backstrap loom", def:"a loom tied to a post and around the weaver's back" },
      { w:"warp", def:"the threads (or strips) that run up and down" },
      { w:"weft", def:"the threads (or strips) woven across" },
      { w:"motif", def:"a repeated design element" }
    ],
    prep:{ min:5, items:["A4 paper (warp: folded and cut into slits, leaving a border)","Paper strips in several colours (weft)","Glue sticks; coloured pens for motifs","Codex books (panel 9)"] },
    safety:["Scissors: careful cutting of warp slits (teacher can pre-cut for some students)."],
    hononga:"**Raranga** (Māori weaving) with harakeke is also a living tradition: kete, whāriki and **korowai** (cloaks). Patterns like **poutama** (stairway) carry meaning, and weavers follow tikanga — like giving the first piece away. Learn the ideas respectfully; don't copy sacred patterns.",
    paths:[
      { id:"A", name:"The Scribe", product:"Motif Design Sheet", steps:["Design 4 motifs that represent you (family, place, interests).","Explain each motif's meaning.","Plan where they'd go on a weaving."], flying:"Design a motif that combines two meanings." },
      { id:"B", name:"The Builder", product:"Paper Weaving (Folio IX)", steps:["Cut warp slits in your paper (leave a border).","Weave weft strips over-under, alternating each row.","Add your motifs on top with pens or cut paper."], flying:"Weave a twill or diamond pattern instead of plain." },
      { id:"C", name:"The Messenger", product:"Story-Weave", steps:["Each weft strip = one part of your life story.","Choose colours that match each part.","Explain your story-weave to a partner."], flying:"Write a short artist statement for the Exhibition." }
    ],
    supportedShort:"pre-cut warp sheets; wider strips; motif ideas sheet.",
    lens:{
      pillar:"aroha", title:"Clothed in love",
      look:"Look at a huipil: every thread crosses another to make something strong and beautiful. A weaver's choices show who she is and where she belongs.",
      ref:"Colossians 3:12–14",
      paraphrase:"As God's chosen people, holy and dearly loved, clothe yourselves with compassion, kindness, humility, gentleness and patience… And over all these virtues put on love, which binds them all together in perfect unity.",
      talk:[
        { q:"Paul says to ‘clothe yourselves’ with compassion and kindness. What would that look like if it were a piece of clothing?", listen:"Something you put on every day; others can see it; it covers you." },
        { q:"Love ‘binds them all together’. How is love like the threads in a weaving?", listen:"It holds everything together; without it things fall apart; it connects people (Aroha)." }
      ],
      live:"Choose one ‘virtue’ to ‘wear’ tomorrow (kindness, patience…) and do it on purpose."
    },
    clue:{ prompt:"Folio Seal: add the four Glyph Clues from Monday to Thursday.", answer:41, explain:"19 + 9 + 10 + 3 = 41 = two twenties + 1." },
    next:"Week 10 — The Codex Comes Home: Exhibition week!",
    rubric:[
      { c:"Context", code:"VA-UC",
        d:["Says the Maya wove clothes.","“They made clothes.”"],
        a:["Explains Maya weaving as a living tradition showing identity.","“Maya women in Guatemala still weave huipiles on backstrap looms; designs can show their town.”"],
        f:["Compares with another living tradition respectfully.","“Like raranga, weaving carries meaning and tikanga — it's not just decoration.”"],
        i:["I know they wove clothes.","I can explain it as a living tradition.","I can compare respectfully."] },
      { c:"Weaving technique", code:"VA-PK",
        d:["Strips skip or bunch up.","Some rows not alternating."],
        a:["Weaves neat over-under rows that alternate.","Tight, even rows with a clear checkerboard."],
        f:["Uses a complex weave or pattern with control.","A neat diamond or twill pattern."],
        i:["My strips are uneven.","My over-under weave is neat.","I used a complex pattern with control."] },
      { c:"Meaningful motifs", code:"VA-DI",
        d:["Decorates without meaning.","Random shapes."],
        a:["Designs motifs and explains their meaning.","“The mountain is Aoraki, near my family's home.”"],
        f:["Creates a cohesive design where colour and motif tell a story.","“Warm colours for my family, blue for the sea where we holiday, and a star for my faith.”"],
        i:["I decorated it.","My motifs have meanings.","My whole design tells a story."] }
    ],
    plan:{
      prior:"Week 6: motifs and repeats; Tuesday W8: weaving image (huipil).",
      kc:["Thinking","Managing self","Relating to others"],
      sequence:[
        ["0–6","Field Transmission","Doña Rosa at her loom; Glyph Check; LI/SC.","Recall the week."],
        ["6–16","Excavate","Huipiles & backstrap looms; weave simulator; Hononga (raranga).","Observe, plan."],
        ["16–18","Big Project check-in","My Codex — artist statement.","Share."],
        ["18–40","Choose Your Path (22 min)","Panel 9.","Motifs / weave / story-weave."],
        ["40–45","Through the Lens","Colossians 3:12–14.","Discuss."],
        ["45–50","Folio Seal","19 + 9 + 10 + 3 = 41 (20s level); the forgery exposed.","Solve; discuss."]
      ],
      diff:{
        supported:"Pre-cut warp; wide strips.",
        esol:"Demonstration; visual steps.",
        learning:"Larger strips; plain weave.",
        flying:"Twill/diamond; artist statement."
      },
      assess:{
        lookFor:["Living tradition explained","Neat weave","Meaningful motifs"],
        evidence:["Codex panel 9 (photo)","Motif sheets","Exit self-assessment"]
      },
      inquiry:["Exhibition next week — set up the room plan.","Codex books: all panels complete?","Invite whānau!"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"rosa", meta:"At the loom",
        msg:"Children, come sit by my loom. My grandmother taught me, and her grandmother taught her. One end is tied to this post, the other around my back — a **backstrap loom**. The patterns on my **huipil** tell people which town I'm from. Maya weaving isn't history — it's **alive**. Today, you'll weave too.",
        notes:[["SAY","Read the message."],["NOTE","Maya people are a living people; weaving is a living tradition."]] },
      { type:"glyphcheck", phase:"transmission", fs:"real", title:"This week so far", qs:[
          { q:"Name two reasons Tenochtitlan fell.", a:"Indigenous allies, smallpox, divisions, technology." },
          { q:"How does El Niño affect Canterbury?", a:"Often drier in the east (more westerly winds)." },
          { q:"Angle of incidence = …?", a:"Angle of reflection." }],
        notes:[["SAY","Whole-week review."],["CLICK","→ flips."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and SC."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"A living tradition", title:"The huipil", visual:{ artefact:"huipil" },
        bullets:["Many **Maya women** in Guatemala and Mexico still weave **huipiles** (blouses) on **backstrap looms**.","Designs, colours and motifs can show a weaver's **town**, family and identity.","Weavers today are working to **protect** their designs from being copied by big companies."],
        notes:[["ASK","“Why might people want to protect their designs?”"],["NOTE","Image: artistic reconstruction."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Over, under", title:"Weaving studio", ix:"weave",
        notes:[["CLICK","Try each pattern and colour set."],["ASK","“What's the difference between warp and weft? How does changing over-under make a diamond?”"],["PACE","Aim for minute 15."]] },
      { type:"hononga", phase:"excavate", fs:"real", title:"Raranga — Māori weaving",
        body:"**Raranga** with harakeke is a living tradition too: kete, whāriki and **korowai**. Patterns like **poutama** (stairway) carry meaning, and weavers follow tikanga.\n\nWe learn the ideas respectfully — we don't copy sacred patterns.",
        notes:[["NOTE","Check local tikanga with your Māori lead."]] },
      bpCheck("My Codex"),
      { type:"paths", phase:"paths", fs:null, minutes:22, notes:[["SAY","Explain paths; panel 9 of the codex."],["CLICK","Start the 22-minute timer."]] },
      { type:"lens", phase:"lens", fs:null, notes:[["CLICK","→ reveals each move."],["SAY","Read Colossians 3:12–14."]] },
      { type:"folioseal", phase:"decode", fs:"story",
        notes:[["SAY","“Seal IX — the biggest yet!”"],["CLICK","19 + 9 + 10 + 3 = 41. Press +20 twice, then ● → Break the seal."],["ASK","“How many twenties are in 41?” (2, with 1 left over)"]] },
      { type:"intercept", phase:"decode", fs:"story",
        msg:"…wait. This message isn't from the Collector. It's from Sofía: “I checked his ‘1521’ document. It uses MODERN spelling and a printed font that didn't exist then. It's a FORGERY. He's on the run.”",
        ask:"The codex is safe — but who should it belong to now? Think about it for next week.",
        notes:[["SAY","Read Sofía's message with excitement."],["ASK","“How did Sofía spot the forgery?” (Modern spelling, wrong font — evidence!)"],["NOTE","Next week the class decides where the codex should go."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess; weavings dry flat."],["CLICK","C = cacao beans."]] }
    ]
  };

  FC.WEEKS[9] = {
    n:9,
    story:"Folio IX tells of the meeting of two worlds. The team hears the Conquest from both Spanish and Nahua voices, explores El Niño and shrinking Andes glaciers, bounces light with obsidian mirrors to light the last chamber, builds their Temples of Light, and weaves huipil-inspired motifs. Seal IX shows people of many nations — and Sofía exposes the Collector's forgery.",
    hononga:"Two perspectives on first encounters, 1642 and 1769 (Mon); El Niño's effect on Canterbury and NIWA (Tue); pāua in whakairo (Wed); building a wharenui together (Thu); raranga and poutama (Fri). Check local framing with your Māori lead / Ngāi Tahu rūnanga.",
    seal:{
      answer:41,
      instruction:"Add the four **Glyph Clues**. You'll need **two** twenties (+20, +20), then build the rest.",
      reveal:"🟡 **Folio IX unsealed:** a circle of people from many nations, hands joined around the codex. Dr Canul: “It doesn't belong to one person. It belongs to a people.” Next week: *The Codex Comes Home*.",
      art:() => { const v = FC.art.nationsFolio(); v.setAttribute("style", "width:100%;height:100%"); return v; }
    },
    lessons:[mon, tue, wed, thu, fri]
  };
})(window.FC);
