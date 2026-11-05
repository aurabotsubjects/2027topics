/* ==========================================================
   WEEK 3 — FOLIO III · THE SCRIBE'S SECRET
   ========================================================== */
(function(FC){
  "use strict";

  /* ======================= MONDAY · HISTORY ======================= */
  const mon = {
    id:"w03-mon", week:3, day:"mon", subject:"history", duration:50,
    title:"Writing & Numbers: Cracking the Maya Code", guide:"itzel",
    codes:["SS-H","SS-P","MA","RE"],
    coverage:"Y5 History (2027 Social Sciences): an ancient civilisation through writing and knowledge; using primary sources; how historians' understanding changes with new evidence (decipherment). Maths: base-20 place value.",
    li:"We are learning how Maya writing and numbers worked, and how modern scholars cracked the code.",
    sc:["I can read and write Maya numbers using dots, bars and the shell (zero), including place value in twenties.","I can explain that Maya writing used word signs and syllable signs.","I can tell the story of the decipherment and explain why it changed what we know."],
    vocab:[
      { w:"glyph", say:"glif", def:"a written sign or symbol" },
      { w:"decipher", say:"dee-SY-fer", def:"to work out the meaning of a code or writing" },
      { w:"logogram", def:"a sign that stands for a whole word (e.g. JAGUAR)" },
      { w:"syllable sign", def:"a sign for a sound like ‘ba’ or ‘ka’" },
      { w:"base 20", def:"counting in twenties (we count in tens — base 10)" },
      { w:"place value", def:"a digit's value depends on its position (in Maya numbers: 1s, 20s, 400s, from the bottom up)" },
      { w:"zero", def:"the number for ‘nothing’ — the Maya wrote it as a shell" },
      { w:"epigrapher", say:"eh-PIG-ruh-fer", def:"someone who reads ancient inscriptions (like Dr Canul!)" }
    ],
    prep:{ min:2, items:["Mini-whiteboards and pens (number quiz)","Expedition Journals"] },
    safety:[],
    hononga:"Te reo Māori was an oral language until the early 1800s, when Māori scholars and missionaries worked **together** to write it with the Latin alphabet — soon many Māori were reading and writing, and letters and newspapers in te reo flourished. Maya writing went the other way: a written script that was **lost** for centuries and then decoded. Ask: what does it mean for a people when their writing is valued — or destroyed?",
    paths:[
      { id:"A", name:"The Scribe", product:"Code-Breaker Worksheet", steps:["Write your age and birthday as Maya numbers.","Write 3 numbers above 20 for a partner to decode.","Explain how base 20 differs from our base 10."], flying:"Write 400 as a Maya number. Why THREE levels?" },
      { id:"B", name:"The Builder", product:"Maya Number Tower", steps:["Fold a strip into 3 boxes: 400s (top), 20s, 1s.","Build 3 different numbers with dots, bars and shells.","Swap with a partner and decode each other's towers."], flying:"Put a shell (zero) in the MIDDLE level and explain why it matters." },
      { id:"C", name:"The Messenger", product:"Codebreakers Film", steps:["Plan a 90-second documentary on cracking the code.","Include Landa, Knorozov and Proskouriakoff.","End: why does reading Maya writing matter?"], flying:"Explain the irony: the man who burned the books also helped us read them." }
    ],
    supportedShort:"a number strip 0–19 to copy from; place-value tower template; documentary sentence starters.",
    lens:{
      pillar:"mohio", title:"The Word that lasts",
      look:"Look at the story of the Maya books: hundreds burned in 1562 by a church leader, Bishop Diego de Landa. Knowledge lost. Yet the writing survived on stone, and people worked for centuries to read it again.",
      ref:"Isaiah 40:8; John 1:1–5",
      paraphrase:"The grass withers and the flowers fall, but the word of our God endures for ever… In the beginning was the Word, and the Word was with God, and the Word was God… The light shines in the darkness.",
      talk:[
        { q:"A Christian leader burned Maya books. Christians today say that was wrong. Why is it important to be honest when people from ‘our side’ did harm?", listen:"Truth matters to God; honesty builds trust; saying sorry and learning from it (repentance); respect for every people's culture." },
        { q:"Today the Bible has been translated into many Mayan languages, like K'iche' and Yucatec. Why might it matter to people to read God's Word in their own language?", listen:"God speaks to every people; their language and culture are valued; easier to understand; honours who they are." }
      ],
      live:"Write one sentence: **“Words matter because…”** — then one way you'll use your words well this week."
    },
    clue:{ prompt:"Decode this Maya numeral from Folio II. What number is it?", maya:13, answer:13, explain:"Two bars (10) + three dots (3) = 13. Clue saved!" },
    next:"Tuesday — water beneath stone: cenotes and a crater from space!",
    rubric:[
      { c:"Reading & writing Maya numbers", code:"MA · SS-P",
        d:["Reads numbers to 19 with help.","Reads ▬●● as 7 with a number strip."],
        a:["Reads and writes numbers using dots, bars, shell and the 20s level.","Writes 26 as one dot (20s) above ▬● (6)."],
        f:["Explains place value in base 20 and the role of zero.","“The shell in the middle shows zero twenties, so 401 isn't confused with 21.”"],
        i:["I can read Maya numbers to 19 with help.","I can read and write Maya numbers, including the 20s level.","I can explain base 20 and why zero matters."] },
      { c:"How Maya writing worked", code:"SS-H",
        d:["Says the Maya wrote in pictures.","“They drew pictures.”"],
        a:["Explains word signs and syllable signs.","“Glyphs could be a whole word, like jaguar, or a syllable like ‘ba’. ba-la-ma spells b'ahlam.”"],
        f:["Explains why this made decipherment hard or clever.","“Scribes could write the same word different ways, mixing word signs and syllables — that's why it took so long to crack.”"],
        i:["I can say the Maya wrote with glyphs.","I can explain word signs and syllable signs.","I can explain why that made the code hard to crack."] },
      { c:"The decipherment story", code:"SS-H · SS-P",
        d:["Names one person or event.","“Someone burned the books.”"],
        a:["Sequences the key events and explains one consequence.","“Landa burned the books in 1562; Knorozov showed the syllables in 1952; Proskouriakoff proved stelae were history in 1960 — so now we know the kings' stories.”"],
        f:["Evaluates how new evidence changed historians' views.","“People once thought the Maya were peaceful star-watchers. Reading the glyphs showed real kings, wars and politics.”"],
        i:["I can name a person or event.","I can put the story in order and explain why it mattered.","I can explain how new evidence changed what historians believed."] }
    ],
    plan:{
      prior:"Week 1: codices as primary sources; glyph drawing. Week 2: Folio II's numeral. Students know base-10 place value.",
      kc:["Thinking","Using language, symbols & texts","Relating to others"],
      sequence:[
        ["0–6","Field Transmission","Dr Canul: the numeral on Folio II; Glyph Check; LI/SC.","Recall; guess the numeral."],
        ["6–18","Excavate","Number Machine (build, type, quiz); place value in 20s; Decipherment Detective (ba-la-ma, ka-ka-wa, pa-ka-la); the codebreakers timeline.","Whiteboard quiz; build words."],
        ["18–38","Choose Your Path","Paths; roam: “Read it bottom to top.”","Worksheet / tower / documentary."],
        ["38–45","Through the Lens","Isaiah 40:8; John 1:1–5; honesty about Landa.","Discuss; journal sentence."],
        ["45–50","Decode & Exit","Read Folio II's numeral (13).","Solve; self-assess."]
      ],
      diff:{
        supported:"0–19 number strip; tower template with labelled levels; work in pairs.",
        esol:"Numbers are a universal language — strong entry point; visual symbols; oral rehearsal for the documentary.",
        learning:"Concrete counters (beans = dots, sticks = bars); one level at a time.",
        flying:"Numbers over 400; compare with Roman numerals; explain why zero is a big idea."
      },
      assess:{
        lookFor:["Correct reading/writing with the 20s level","Explanation of word vs syllable signs","Sequenced decipherment story with consequence"],
        evidence:["Whiteboard quiz responses","Path products","Exit self-assessment"]
      },
      inquiry:["Who could read the 20s level confidently? Re-quiz Tuesday.","How did students respond to the honesty discussion about Landa?","Did the syllable puzzle help students see writing as sounds, not just pictures?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"itzel", meta:"Folio III · night shift",
        msg:"Team, I couldn't sleep. That numeral in the corner of Folio II — two bars and three dots — is a **number**. And Folio III is covered in them, beside a **name glyph**. A scribe signed this book! To read their name, you must learn to count like the Maya and read like an **epigrapher**.",
        notes:[["SAY","Read the message."],["ASK","“What do you think two bars and three dots means?” Take guesses — don't confirm yet!"]] },
      { type:"glyphcheck", phase:"transmission", fs:"real", title:"Remember Week 2?", qs:[
          { q:"What are the three plants of the milpa?", a:"Maize, beans and squash." },
          { q:"What makes a cell's voltage add up?", a:"Joining cells in series (one after another)." },
          { q:"What made Maya Blue so long-lasting?", a:"Indigo locked inside palygorskite clay by heating." }],
        notes:[["SAY","Whiteboards; show on 3."],["CLICK","→ flips."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and SC."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Counting in twenties", title:"Maya Number Machine", ix:"numbers",
        notes:[["SAY","“A dot is 1. A bar is 5. A shell is ZERO. Bars go at the bottom, dots on top.”"],["CLICK","Bottom row (1s): build 7 (▬ ●●), 13 (▬▬ ●●●), 19 (▬▬▬ ●●●●)."],["ASK","“What happens after 19?” Then show the 20s level: one dot in the 20s row + shell in the 1s = 20."],["CLICK","Type 26, 100, 400 into the box. Then use 🎲 Quiz — whiteboards — then Reveal."],["DEEPER","“Why do you think the Maya counted in twenties?” (Fingers AND toes!)"]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"A mathematical marvel", title:"Zero: a big idea", visual:{ maya:0 },
        bullets:["The Maya used a symbol for **zero** — a shell — over **1,600 years ago**, centuries before Europeans used zero.","Zero holds a place: it shows ‘no twenties’ or ‘no ones’.","Without zero, how would you tell **21** from **401**?"],
        notes:[["ASK","“Try writing 401 without a zero. What's the problem?”"],["LISTEN","You'd need a way to show the empty 20s level — otherwise 1 four-hundred + 1 looks like 1 twenty + 1."],["NOTE","Babylonian and Indian mathematicians also developed zero; the Maya invented theirs independently."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Sounds, not just pictures", title:"Decipherment detective", ix:"decipher",
        notes:[["SAY","“For centuries people thought Maya glyphs were just pictures. The breakthrough: many glyphs are SYLLABLES — sounds — like ba, la, ma.”"],["CLICK","Word 1: tap ba → la → ma. Rule: the last vowel is silent → b'ahlam (jaguar). Then try kakaw (cacao) and Pakal (a king's name)."],["NOTE","The tiles are simplified teaching shapes, not real glyph drawings."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"A 400-year mystery", title:"The codebreakers", h:"560px", cards:[
          { big:"1562", color:"#B3262E", t:"Burned… and saved", d:"Bishop **Diego de Landa** burned Maya books at Maní. Yet his notes recorded a Maya ‘alphabet’ that later became a key." },
          { big:"1952", color:"#2E9FB0", t:"Yuri Knorozov", d:"A Russian scholar showed Landa's ‘alphabet’ was really **syllables**. Many experts didn't believe him at first!" },
          { big:"1960", color:"#1F7A5A", t:"Tatiana Proskouriakoff", d:"She proved stelae recorded the **births, crownings and deaths of real rulers** — Maya history, not just star charts." },
          { big:"Today", color:"#D9A23A", t:"Reading most glyphs", d:"Scholars — including **Maya** epigraphers today — can read most inscriptions. The kings' stories are coming back." }],
        notes:[["SAY","Tell it as a detective story across 400 years."],["ASK","“How did new evidence change what historians believed about the Maya?”"],["LISTEN","They thought the Maya were peaceful priest-astronomers; the glyphs revealed kings, wars, alliances and politics."],["PACE","Aim for minute 18."]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAY","Explain paths."],["CLICK","Start the timer. Leave the Number Machine handy (← to go back) for checking."],["NOTE","Common error: reading top-to-bottom. Remind: ‘bottom level = ones’."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","→ reveals each move."],["SAY","Read Isaiah 40:8 and John 1:1–5. Be honest and calm: “A church leader did something wrong. Christians today grieve that and want to honour Maya culture.”"],["ASK","Use both questions."],["NOTE","Week 9 explores Christians who defended Indigenous peoples (Las Casas) and preserved knowledge (Sahagún)."]] },
      { type:"decode", phase:"decode", fs:"story",
        notes:[["ASK","“Two bars and three dots — what number?” (13)"],["CLICK","Build ▬▬ + ●●● → Check."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = cacao beans."]] }
    ]
  };

  /* ======================= TUESDAY · GEOGRAPHY ======================= */
  const tue = {
    id:"w03-tue", week:3, day:"tue", subject:"geography", duration:50,
    title:"Water Beneath Stone: Cenotes & the Chicxulub Crater", guide:"sofia",
    codes:["SS-G","SS-P","SC-ES"],
    coverage:"Y5–6 Geography (2027 Social Sciences): how physical environments shape where people settle; interpreting maps, cross-sections and patterns. Y6 Science link: rocks (limestone) and Earth processes.",
    li:"We are learning how the Yucatán's limestone landscape and its cenotes shaped where the Maya lived.",
    sc:["I can explain how a cenote forms in limestone (karst).","I can use a map to identify a pattern and suggest an explanation.","I can explain how access to water influences where people settle."],
    vocab:[
      { w:"limestone", def:"rock made from ancient sea shells and coral; slowly dissolves in rainwater" },
      { w:"karst", def:"a landscape of limestone with caves, sinkholes and underground rivers" },
      { w:"cenote", say:"say-NOH-tay", def:"a natural well formed when a cave roof collapses (from Yucatec Maya ts'onot)" },
      { w:"groundwater", def:"water stored underground in rock" },
      { w:"crater", def:"a bowl-shaped hole made by an impact or volcano" },
      { w:"settlement", def:"a place where people live (village, town, city)" },
      { w:"peninsula", def:"land surrounded by water on three sides" }
    ],
    prep:{ min:3, items:["Optional: a piece of chalk (limestone) and a cup of vinegar to show it fizz and dissolve","Expedition Journals"] },
    safety:["If doing the chalk + vinegar demo: vinegar stings eyes — teacher demonstration only."],
    hononga:"In Aotearoa, water — **wai** — is a taonga. **Te Waikoropupū Springs** near Tākaka hold some of the clearest fresh water ever measured, and are a wāhi tapu (sacred place) for local iwi. Like the cenotes, these springs come from water travelling through **limestone and marble** underground. Ask: how should we care for precious water places?",
    paths:[
      { id:"A", name:"The Scribe", product:"Settlement Report", steps:["Choose where to build a new Maya city on a Yucatán map.","Give 3 reasons for your choice — water must be one!","Explain what would happen if your cenote dried up."], flying:"Compare: why did the Aztecs build on a lake, and the Maya beside cenotes?" },
      { id:"B", name:"The Builder", product:"Cenote Cross-Section", steps:["Draw (or build in layers of card) a cross-section: rain, soil, limestone, cave, collapse.","Label each stage with arrows showing the water's path.","Add people collecting water at the top."], flying:"Add the Chicxulub crater rim underneath and show why cenotes line up along it." },
      { id:"C", name:"The Messenger", product:"Cenote Tour-Guide Script", steps:["You are a guide at a cenote near Chichén Itzá.","Explain how it formed, why it mattered to the Maya and the crater mystery.","Include one rule for visitors to protect the water."], flying:"Explain why pollution on the surface quickly reaches cenote water in limestone country." }
    ],
    supportedShort:"cross-section template with labels; map with a grid; tour-guide sentence starters.",
    lens:{
      pillar:"aroha", title:"Living water",
      look:"Look at the cenote: in a land with no rivers, a deep pool of clear, life-giving water. People built whole cities around it.",
      ref:"John 4:13–14",
      paraphrase:"Jesus said, “Everyone who drinks this water will be thirsty again, but whoever drinks the water I give will never thirst. The water I give will become a spring of water welling up to eternal life.”",
      talk:[
        { q:"Jesus was talking to a woman at a well. Why might ‘water’ be such a powerful picture of what He offers?", listen:"We can't live without it; it refreshes; it's a gift; Jesus satisfies our deepest needs — love, forgiveness, purpose." },
        { q:"Water is precious everywhere. How can we show aroha to the world by caring for water?", listen:"Don't waste or pollute it; protect rivers and springs; support people without clean water (Aroha — World, Others)." }
      ],
      live:"Choose one **water-care action** for this week (e.g. shorter showers, picking up rubbish near a stream, turning off taps)."
    },
    clue:{ prompt:"The Chicxulub crater is about 180 km wide. Divide 180 by 10.", answer:18, explain:"180 ÷ 10 = 18 → three bars and three dots. Clue saved!" },
    next:"Wednesday — the complete loop: building circuits and drawing them with symbols.",
    rubric:[
      { c:"How cenotes form", code:"SS-G · SC-ES",
        d:["Says a cenote is a hole with water.","“It's a pool in the ground.”"],
        a:["Explains the steps: rain dissolves limestone → cave → roof collapse → cenote.","“Slightly acidic rain dissolves limestone into caves; when a roof collapses you get a cenote.”"],
        f:["Links the process to the landscape (no surface rivers, karst).","“Water sinks through the limestone instead of making rivers — so cenotes were the only way to reach it.”"],
        i:["I can say what a cenote is.","I can explain the steps that form a cenote.","I can explain why the whole landscape has cenotes instead of rivers."] },
      { c:"Map patterns", code:"SS-P",
        d:["Notices dots on the map.","“There are lots of blue dots.”"],
        a:["Identifies the ring pattern and suggests an explanation.","“Many cenotes make a half-circle — scientists found a buried crater underneath.”"],
        f:["Explains the cause–effect chain from impact to cenotes.","“The impact cracked the rock along the crater rim, so water dissolved caves there first.”"],
        i:["I can spot dots on a map.","I can describe the pattern and suggest why.","I can explain the full chain from impact to cenotes."] },
      { c:"Water & settlement", code:"SS-G",
        d:["Says people need water.","“People need to drink.”"],
        a:["Explains why Maya settlements grew near cenotes, with an example.","“Chichén Itzá was built by a cenote — its name means ‘mouth of the well’.”"],
        f:["Compares with other places or explains risks.","“If drought lowers the water, cities near cenotes struggle — maybe part of the Maya collapse.”"],
        i:["I know people need water.","I can explain why cities grew near cenotes.","I can compare with other places or explain risks."] }
    ],
    plan:{
      prior:"Week 2: plates and the Ring of Fire; Week 1: map skills. Students may have heard of the dinosaur-killing asteroid.",
      kc:["Thinking","Using language, symbols & texts","Participating & contributing"],
      sequence:[
        ["0–6","Field Transmission","Sofía flies over the flat Yucatán; Glyph Check (Maya numbers!); LI/SC.","Recall; ‘where's the river?’"],
        ["6–18","Excavate","How a cenote forms (6-step cross-section); optional chalk + vinegar demo; the cenote mystery map (ring → Chicxulub); water & settlement; Hononga (Te Waikoropupū).","Predict; spot patterns; explain."],
        ["18–38","Choose Your Path","Paths; roam with the rubric.","Report / cross-section / tour script."],
        ["38–45","Through the Lens","John 4:13–14.","Discuss; water-care action."],
        ["45–50","Decode & Exit","Clue (180 ÷ 10 = 18).","Solve; self-assess."]
      ],
      diff:{
        supported:"Cross-section template; labelled map; partner reading.",
        esol:"Gesture sequence for water sinking; visual step cards; Spanish speakers may know ‘cenote’ already.",
        learning:"Hands-on layers of card; chunked steps; drawing option.",
        flying:"Impact science; compare Aztec and Maya water solutions; pollution in karst."
      },
      assess:{
        lookFor:["Correct formation sequence","Pattern + explanation from the map","Water–settlement reasoning with an example"],
        evidence:["Path products","Map discussion responses","Exit self-assessment"]
      },
      inquiry:["Did students reason from evidence (the dot pattern) before the reveal?","Was the chalk/vinegar demo worth the time?","Link to Week 5 (drought and collapse) — note student ideas now."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"sofia", meta:"Over the Yucatán",
        msg:"Look down, navigators! The Yucatán is as flat as a tortilla — and I can't see a single river. So how did huge Maya cities get water? There… a glint below the trees. A perfectly round **well**, deep and blue. The Maya called them **ts'onot**. We call them **cenotes**.",
        notes:[["SAY","Read the message."],["ASK","“If there are no rivers, where could water be hiding?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:"real", title:"Maya numbers check", qs:[
          { q:"What do a dot, a bar and a shell stand for?", a:"Dot = 1, bar = 5, shell = 0." },
          { q:"In base 20, what is the second level worth?", a:"Twenties (20s). The third level is 400s." },
          { q:"What did Knorozov discover?", a:"Many glyphs are syllable signs — sounds like ba, la, ma." }],
        notes:[["SAY","Whiteboards; show on 3."],["CLICK","→ flips."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and SC."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Karst country", title:"How a cenote forms", ix:"karst",
        notes:[["CLICK","Press Next through the 6 steps. Pause and ask ‘what happens next?’ before each."],["SAY","Optional demo: drop chalk (limestone) into vinegar — it fizzes as the acid dissolves it. Rain does this, very slowly, over thousands of years."],["SAFETY","Vinegar demo: teacher only; keep away from eyes."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Spot the pattern", title:"The cenote mystery", ix:"cenotering",
        notes:[["CLICK","1) Cenotes. 2) Look closer — the arc appears. STOP: “What could make a half-circle of wells about 180 km wide?” Take ideas."],["CLICK","3) Reveal the crater. 4) Maya cities."],["SAY","“Geographers look for PATTERNS on maps, then ask WHY.”"],["NOTE","The map is simplified; the crater outline is approximate."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Why people live where they do", title:"Water decides", visual:{ svg:() => FC.art.glyphSVG("ik") },
        bullets:["Every settlement needs **water**, **food** and **safety**.","In the Yucatán, cities grew beside cenotes: **Chichén Itzá** means ‘at the mouth of the well of the Itzá’.","Some cenotes were sacred: the Maya placed **offerings** — jade, gold, pottery — in the Sacred Cenote."],
        notes:[["ASK","“Why do you think Christchurch was built where it is?” (Rivers, flat land for farming, the coast.)"],["NOTE","The glyph shown is Ik' (wind/breath) — a reminder of how precious the elements of life were."],["PACE","Aim for minute 16."]] },
      { type:"hononga", phase:"excavate", fs:"real", title:"Te Waikoropupū — springs of clear water",
        body:"**Te Waikoropupū Springs**, near Tākaka in Golden Bay, hold some of the clearest fresh water ever measured. The water travels underground through **marble and limestone** — like the Yucatán's cenotes.\n\nThe springs are a **wāhi tapu** (sacred place) for local iwi, and visitors are asked not to touch the water. **Wai is a taonga.**",
        notes:[["SAY","Read or summarise."],["ASK","“Why might people ask visitors not to touch the water?”"],["NOTE","Check local framing with your Māori lead."]] },
      { type:"paths", phase:"paths", fs:null, notes:[["SAY","Explain paths."],["CLICK","Start the timer."]] },
      { type:"lens", phase:"lens", fs:null, notes:[["CLICK","→ reveals each move."],["SAY","Read John 4:13–14 (Jesus and the woman at the well)."],["ASK","Use both questions."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["ASK","“180 ÷ 10?” (18)"],["CLICK","Build ▬▬▬ ●●● → Check."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = cacao beans."]] }
    ]
  };

  /* ======================= WEDNESDAY · SCIENCE ======================= */
  const wed = {
    id:"w03-wed", week:3, day:"wed", subject:"science", duration:50,
    title:"The Complete Loop: Circuits & Symbols", guide:"mateo",
    codes:["SC-MIE","SC-P"],
    coverage:"Y6 Science (Matter, interactions & energy): simple circuits — an energy source (battery) linked to an output device (bulb) in a closed loop; metal wires conduct electricity. Science practices: standard circuit diagrams and conventions.",
    li:"We are learning to build simple circuits and draw them using standard circuit symbols.",
    sc:["I can build a closed circuit with a battery, wires, a switch and a bulb.","I can explain the difference between an open and a closed circuit.","I can draw a circuit diagram using standard symbols."],
    vocab:[
      { w:"circuit", def:"a complete path that electricity can flow around" },
      { w:"closed circuit", def:"a complete loop — current flows" },
      { w:"open circuit", def:"a loop with a gap — no current flows" },
      { w:"current", def:"the flow of electric charge around a circuit" },
      { w:"component", def:"a part of a circuit (battery, bulb, switch, wire)" },
      { w:"circuit diagram", def:"a drawing of a circuit using standard symbols" },
      { w:"short circuit", def:"a path from + to − that skips the output; dangerous" }
    ],
    prep:{ min:8, items:["Circuit kits per group: battery holder (2 × AA), 1–2 bulbs/LEDs with holders, 4 leads with crocodile clips, 1 switch","Spare AA batteries","Expedition Journals for diagrams"] },
    safety:["Batteries only — never sockets.","Short circuits make wires hot: if a wire feels warm, disconnect it.","Don't put batteries in mouths; report leaking batteries."],
    hononga:"Electricity in Aotearoa travels in huge loops too: from hydro stations like **Manapōuri** and the **Waitaki** scheme, through the national grid, into homes and back. A circuit is a loop at every scale. Ask: where does the electricity in our classroom come from?",
    paths:[
      { id:"A", name:"The Scribe", product:"Symbol Dictionary", steps:["Draw the 5 symbols: cell, battery, bulb, switch (open & closed), wire.","Draw 3 circuit diagrams: closed, open (switch off), and broken (gap).","Under each, write whether the bulb lights and why."], flying:"Draw a circuit where ONE switch controls TWO bulbs. Will both light?" },
      { id:"B", name:"The Builder", product:"Challenge Circuits", steps:["Build: (1) battery + bulb, (2) add a switch, (3) make it fail on purpose, (4) fix it.","After each, draw its circuit diagram with symbols.","Test: does the switch really control the bulb?"], flying:"Build a circuit with two bulbs. Are they as bright as one? Why might that be?" },
      { id:"C", name:"The Messenger", product:"‘Circuit Says’", steps:["Create 6 instruction cards (e.g. “Open the switch!”).","Run the game with a group using a real or drawn circuit.","Players must say ‘LIGHT’ or ‘DARK’ and explain why."], flying:"Include a ‘short circuit’ card and explain why it's dangerous." }
    ],
    supportedShort:"symbol cards to copy; a pre-built working circuit to modify; partner roles.",
    lens:{
      pillar:"mohio", title:"Connected to the source",
      look:"Look at the bulb: it only shines while it's connected in a complete loop to the battery. Break the connection and it goes dark.",
      ref:"John 15:4–5",
      paraphrase:"Jesus said, “Remain in me, as I also remain in you. No branch can bear fruit by itself; it must remain in the vine… I am the vine; you are the branches. Apart from me you can do nothing.”",
      talk:[
        { q:"Jesus used a picture of a vine. How is a bulb in a circuit a similar picture of staying connected to God?", listen:"The bulb needs the source to shine; we need God's life and love; staying connected through prayer, Scripture, church, trust." },
        { q:"⚠️ Where the picture breaks: a bulb has no choice and can't be loved. How are people different from bulbs?", listen:"God loves us personally; we can choose to stay close; when we drift, God doesn't ‘switch off’ His love — He welcomes us back." }
      ],
      live:"Write one way you'll **stay connected** to God this week (a prayer time, a verse, thanking Him)."
    },
    clue:{ prompt:"How many complete loops does a simple circuit need for the bulb to light?", answer:1, explain:"Just ONE complete (closed) loop → 1. Clue saved!" },
    next:"Thursday — switches! Build a pressure-plate trap to guard the codex.",
    rubric:[
      { c:"Building a closed circuit", code:"SC-MIE",
        d:["Builds with help; may not light.","Bulb lights only after the teacher fixes a loose clip."],
        a:["Builds a working circuit with a switch that controls the bulb.","Battery → switch → bulb → back to battery; switch turns it on and off."],
        f:["Modifies or troubleshoots circuits independently.","“The bulb didn't light because the clip was on the plastic, not the metal — I moved it.”"],
        i:["I can build a circuit with help.","I can build a circuit where a switch controls the bulb.","I can fix and change circuits on my own."] },
      { c:"Open vs closed", code:"SC-MIE",
        d:["Says when the bulb is on or off.","“It's on now.”"],
        a:["Explains open and closed circuits using ‘loop’ and ‘current’.","“When the switch is open there's a gap, so current can't flow round the loop.”"],
        f:["Explains short circuits and why they're dangerous.","“A wire straight from + to − skips the bulb — a big current flows and the wire gets hot.”"],
        i:["I can say if the bulb is on or off.","I can explain open and closed circuits.","I can explain short circuits and the danger."] },
      { c:"Circuit diagrams", code:"SC-P",
        d:["Draws pictures of the parts.","Draws a realistic battery and a bulb with wires."],
        a:["Draws an accurate diagram with standard symbols.","Uses the cell, bulb and switch symbols with straight wire lines."],
        f:["Uses diagrams to predict and to communicate designs.","Draws a two-bulb diagram and correctly predicts which bulbs light when a switch opens."],
        i:["I can draw the parts as pictures.","I can draw a diagram with the right symbols.","I can use diagrams to predict and explain."] }
    ],
    plan:{
      prior:"Weeks 1–2: charge, LEDs, closed loops, cells in series.",
      kc:["Thinking","Managing self","Using language, symbols & texts"],
      sequence:[
        ["0–6","Field Transmission","Mateo needs a reliable camp lamp; Glyph Check; LI/SC; safety.","Recall; repeat safety."],
        ["6–18","Excavate","What every circuit needs; Circuit Sandbox (picture mode — closed, open, gap, short); symbol cards; sandbox in symbol mode.","Predict LIGHT/DARK; explain."],
        ["18–38","Choose Your Path","Kits out; build, diagram, game.","Build / draw / play."],
        ["38–45","Through the Lens","John 15:4–5 (analogy, with ‘where it breaks’).","Discuss; journal."],
        ["45–50","Decode & Exit","Clue (1 loop); kits away; self-assess.","Solve; self-assess."]
      ],
      diff:{
        supported:"Pre-built circuit to modify; symbol cards; partner builder/recorder.",
        esol:"Symbols are universal — a strong visual language; gestures for open/closed.",
        learning:"Larger components; step cards; option to use the on-screen sandbox.",
        flying:"Two bulbs; predict brightness; preview series and parallel."
      },
      assess:{
        lookFor:["Working circuit with a switch","Accurate open/closed explanation","Correct symbols in diagrams"],
        evidence:["Diagrams in journals","Kit observations","Exit self-assessment"]
      },
      inquiry:["Which misconceptions appeared (e.g. one wire is enough)?","Did students connect diagrams to real builds?","Who is ready for series vs parallel in Week 5?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"mateo", meta:"Camp lamp test",
        msg:"Team! I've wired the camp lamp three times and it keeps failing. I think I've been sloppy — I need a **plan** that everyone can read. Engineers all over the world use the same **circuit symbols**, so anyone can build a circuit from a drawing. Let's learn the language of circuits.",
        notes:[["SAY","Read the message."],["ASK","“Why would engineers need drawings everyone can understand?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:"real", qs:[
          { q:"What does an LED need to light?", a:"A complete loop, with its long leg towards +." },
          { q:"What makes a cenote?", a:"Rain dissolves limestone into a cave; the roof collapses → a natural well." },
          { q:"What is 1 dot in the 20s level plus a shell below?", a:"20." }],
        notes:[["SAY","Whiteboards; show on 3."],["CLICK","→ flips."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and SC."]] },
      { type:"safety", phase:"transmission", fs:"real", title:"Circuit safety", items:[
          { icon:"🔋", t:"Batteries only", d:"Never sockets. Mains electricity can kill." },
          { icon:"🔥", t:"Hot wire = short", d:"If a wire or battery feels warm, disconnect it straight away." },
          { icon:"🚫", t:"Not for mouths", d:"Never put batteries in your mouth. Tell the teacher about leaking batteries." }],
        notes:[["SAFETY","Read the rules; students repeat ‘hot wire = short’."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"The recipe", title:"Every circuit needs…", h:"420px", cards:[
          { icon:"🔋", t:"An energy source", d:"A **cell** or **battery** pushes the current." },
          { icon:"〰", t:"Conductors", d:"Metal **wires** give the current a path." },
          { icon:"💡", t:"An output", d:"Something that uses the energy: a **bulb**, LED, buzzer or motor." },
          { icon:"⭕", t:"A closed loop", d:"A **complete** path from + all the way back to −. A **switch** can open or close it." }],
        notes:[["SAY","“Four ingredients. Miss one and nothing happens.”"],["ASK","“Which one did Mateo probably forget?”"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Build it on screen", title:"Circuit sandbox", ix:"sandbox", cfg:{ preset:"loop", presets:["loop","empty"], title:"Circuit sandbox" },
        notes:[["SAY","“This sandbox calculates the real current. The battery is on the left.”"],["CLICK","Choose ✋ Flip switch, then click the switch to close it: light! Open it: dark."],["CLICK","Erase one wire (⌫): gap → dark. Put it back."],["CLICK","Danger demo: add a Wire straight across from + to − → SHORT CIRCUIT warning."],["ASK","Before every click: “LIGHT or DARK?”"]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"A language everyone can read", title:"Circuit symbols", h:"540px", cards:[
          { svg:() => FC.art.circuitSymbol("cell"), t:"Cell / battery", d:"Long line = **+**, short thick line = **−**. A battery is two or more cells." },
          { svg:() => FC.art.circuitSymbol("bulb"), t:"Bulb", d:"A circle with a cross inside." },
          { svg:() => FC.art.circuitSymbol("switch"), t:"Switch", d:"A line that lifts up = **open**. Flat = **closed**." },
          { svg:() => FC.art.circuitSymbol("led"), t:"LED", d:"A triangle and a bar, with arrows for the light." },
          { svg:() => FC.art.circuitSymbol("wire"), t:"Wire", d:"Always drawn with **straight lines** and square corners." }],
        notes:[["SAY","“Engineers in Mexico, Japan or Aotearoa all use these same symbols.”"],["ASK","“Why straight lines, not wiggly ones?”"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Now read the symbols", title:"Symbol mode", ix:"sandbox", cfg:{ preset:"loop", symbols:true, presets:["loop","empty"], title:"Read the diagram" },
        notes:[["SAY","“Same circuit — drawn the engineer's way.”"],["CLICK","Toggle Symbols on/off to compare picture and diagram."],["ASK","Flip the switch — “Point to the symbol that changed.”"],["PACE","Aim for minute 18."]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAY","Explain paths; kits out for Path B."],["CLICK","Start the timer."],["NOTE","Check crocodile clips are on metal contacts; check battery direction; spare batteries ready."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","→ reveals each move."],["SAY","Read John 15:4–5. Then: “This is a picture, not a proof. Pictures help — but they also have limits.”"],["ASK","Use both questions, especially ‘where the picture breaks’."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["ASK","“How many complete loops?” (1)"],["CLICK","1 dot → Check."],["SAFETY","Batteries out of holders before kits go away."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = cacao beans."]] }
    ]
  };

  /* ======================= THURSDAY · TECHNOLOGY ======================= */
  const thu = {
    id:"w03-thu", week:3, day:"thu", subject:"technology", duration:50,
    title:"Switches: the Pressure-Plate Temple Trap", guide:"mateo",
    codes:["TE-TP","TE-TK","TE-NT"],
    coverage:"Technology (NZC 2007, Level 3): brief development; outcome development and evaluation; technological systems (input → process → output; switches as control). Nature of technology: how products solve real needs.",
    li:"We are learning how switches control circuits, and to design and build a pressure-plate switch for an alarm.",
    sc:["I can explain how different switches open and close a circuit.","I can build a pressure-plate switch that reliably triggers an LED or buzzer.","I can test my alarm against the brief and suggest an improvement."],
    vocab:[
      { w:"switch", def:"a device that opens or closes a circuit" },
      { w:"contacts", def:"the metal parts in a switch that touch to close the circuit" },
      { w:"pressure plate", def:"a switch that closes when something presses on it" },
      { w:"input · process · output", def:"what triggers it · what happens inside · the result" },
      { w:"reliable", def:"works every time" },
      { w:"spacer", def:"something that holds parts apart until pressed (our sponge)" }
    ],
    prep:{ min:10, items:["Per pair: 2 squares of card (about 10 × 10 cm), foil, a sponge or foam square with a hole cut in it","Per pair: LED or buzzer, 2 × AA battery holder (or a coin cell), 3 leads with crocodile clips","Glue sticks, tape","Lidded box for any coin cells"] },
    safety:["Batteries only; disconnect when not testing.","Coin cells (if used): count out and back.","Scissors: cutting holes in sponge is a teacher job or with adult help."],
    hononga:"Traditional **pā** (fortified villages) used clever early-warning ideas: lookouts, palisades and sounds that alerted the whole community. Today, Aotearoa's tsunami sirens and earthquake alerts are switch-triggered systems that protect everyone. Ask: what makes a good warning system?",
    paths:[
      { id:"A", name:"The Scribe · Designer", product:"Alarm Design Sheet", steps:["Sketch your pressure plate from the side and the top.","Label: card, foil, sponge spacer, wires, LED/buzzer, battery.","Write the input → process → output."], flying:"Design a switch that triggers when the codex is LIFTED (not stepped on)." },
      { id:"B", name:"The Builder", product:"Pressure-Plate Alarm", steps:["Follow the build steps on screen.","Wire your plate in a loop with the battery and LED/buzzer.","Test it 10 times. Does it work EVERY time?"], flying:"Add a second plate so EITHER one triggers the alarm." },
      { id:"C", name:"The Messenger · Tester", product:"Trap Test Report", steps:["Test 3 teams' traps: 10 presses each.","Record how many times each one triggered (out of 10).","Give each team one ‘warm’ and one ‘cool’, and report to Mateo."], flying:"Suggest a fair-test rule so every trap is tested the same way." }
    ],
    supportedShort:"pre-cut card and sponge; step cards; pair build.",
    lens:{
      pillar:"panga", title:"Pray — and post a guard",
      look:"Look at your alarm: a simple switch that protects something precious from being stolen.",
      ref:"Nehemiah 4:9",
      paraphrase:"But we prayed to our God and posted a guard day and night to meet this threat.",
      talk:[
        { q:"Nehemiah prayed AND posted a guard. Why do you think he did both?", listen:"Trusting God doesn't mean doing nothing; God gives us minds and skills to act wisely; prayer and action go together." },
        { q:"What precious things in our school or community need protecting — and how could we help protect them?", listen:"People (the vulnerable), the environment, taonga, friendships, our school culture — Pānga: bringing God's Kingdom by caring and acting." }
      ],
      live:"Write one **prayer** and one **action** for something you want to protect."
    },
    clue:{ prompt:"A switch can be in how many different states?", answer:2, explain:"Open or closed → 2. Clue saved for the seal!" },
    next:"Friday — number art, symmetry and Seal III.",
    rubric:[
      { c:"How switches work", code:"TE-TK",
        d:["Says a switch turns things on.","“You press it.”"],
        a:["Explains how contacts open and close the circuit, for at least two switch types.","“In a push button, a spring holds the contacts apart; pressing makes them touch and closes the loop.”"],
        f:["Compares switch types and chooses the best for a purpose.","“A tilt switch is better for detecting someone lifting the codex; a pressure plate is better for footsteps.”"],
        i:["I can say a switch turns things on.","I can explain how two kinds of switch work.","I can choose the best switch for a job and explain why."] },
      { c:"Building the pressure plate", code:"TE-TP · TE-TK",
        d:["Builds with help; triggers sometimes.","Works 4 out of 10 presses."],
        a:["Builds a working plate that triggers reliably.","Works 9–10 out of 10 presses."],
        f:["Improves the design after testing.","“The sponge was too thick, so I cut a bigger hole — now it works every time.”"],
        i:["I built it with help.","My plate works almost every time.","I tested and improved my design."] },
      { c:"Testing against the brief", code:"TE-TP · TE-NT",
        d:["Says if it worked.","“It worked.”"],
        a:["Tests against each specification with results.","“Hidden under the mat ✓, 10/10 triggers ✓, loud enough ✗.”"],
        f:["Plans a specific next version from evidence.","“Version 2: a buzzer instead of an LED so guards hear it from the next tent.”"],
        i:["I can say if it worked.","I can test it against each specification.","I can plan an improvement from my test results."] }
    ],
    plan:{
      prior:"Week 1 design process and briefs; Week 2 paper circuits; Week 3 Wednesday circuits and symbols.",
      kc:["Managing self","Thinking","Participating & contributing"],
      sequence:[
        ["0–6","Field Transmission","Mateo: looters' tracks near camp; Glyph Check; LI/SC; safety.","Recall; repeat safety."],
        ["6–18","Excavate","Switch X-ray (4 types); the temple-trap simulation; the brief; build steps.","Operate, predict, explain."],
        ["18–38","Choose Your Path","Materials out; Designer / Builder / Tester.","Design, build, test."],
        ["38–45","Through the Lens","Nehemiah 4:9.","Prayer + action."],
        ["45–50","Decode & Exit","Clue (2 states); tidy; self-assess.","Solve; self-assess."]
      ],
      diff:{
        supported:"Pre-cut materials; picture steps; pair build.",
        esol:"Demonstrate the build first; label real parts.",
        learning:"Larger plates; tape instead of glue; Tester role option.",
        flying:"Lift-detect switch; two plates in parallel; fair-test design."
      },
      assess:{
        lookFor:["Explains switch contacts","Reliable plate (9–10/10)","Specification-based evaluation"],
        evidence:["Design sheets","Test tallies","Photos of builds","Exit self-assessment"]
      },
      inquiry:["Reliability results — what was the most common failure?","Did students use the brief to evaluate?","Next: sequences and loops with a microcontroller (Week 4)."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"mateo", meta:"Chamber entrance · 05:40",
        msg:"Bad news. This morning I found **footprints** in the mud outside the codex chamber — and they're not ours. The Collector has sent looters. We need an alarm that switches on **by itself** when someone steps where they shouldn't. Time to build a **temple trap**!",
        notes:[["SAY","Read the message dramatically."],["ASK","“How could an alarm ‘know’ someone has stepped on the floor?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:"real", qs:[
          { q:"What's the difference between an open and a closed circuit?", a:"Open = a gap, no current. Closed = a complete loop, current flows." },
          { q:"Draw the symbol for a bulb.", a:"A circle with a cross inside (⊗)." },
          { q:"What is a short circuit?", a:"A path from + to − that skips the output — dangerous, wires get hot." }],
        notes:[["SAY","Whiteboards; show on 3."],["CLICK","→ flips."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and SC."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Look inside", title:"Switch X-ray", ix:"switchxray",
        notes:[["CLICK","Tap each switch to operate it. Watch the contacts."],["ASK","“What do ALL switches have in common?”"],["LISTEN","Two contacts that touch (closed) or separate (open)."],["DEEPER","“Which switch would detect someone LIFTING the codex?” (Tilt — or a plate the codex rests on that opens when lifted.)"]] },
      { type:"interactive", phase:"excavate", fs:"story", kicker:"Will it work?", title:"The temple trap", ix:"trapsim",
        notes:[["CLICK","Press ‘Looter sneaks in’. Watch the plate."],["SAY","“Input: weight. Process: foils touch, circuit closes. Output: light and buzzer.”"],["ASK","“How could a clever looter avoid our trap? How could we improve it?”"]] },
      { type:"brief", phase:"excavate", fs:"story", title:"Mateo's brief: a temple-trap alarm",
        stakeholder:"Mateo and the camp guards, protecting the codex at night.",
        need:"An alarm that switches on **automatically** when someone steps near the codex.",
        specs:["Hidden under a mat or floor tile","Triggers reliably (at least 9 out of 10 steps)","Gives a clear warning (light and/or sound)"],
        notes:[["ASK","“How will we TEST ‘triggers reliably’?” (Press it 10 times and count.)"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Build guide", title:"Make a pressure plate", ix:"stepper",
        cfg:{ safety:"⚠️ Batteries only. Disconnect when not testing. Cutting sponge holes is a teacher job.", steps:[
          { t:"Collect your parts", d:"2 card squares · foil · a sponge (or foam) square with a **hole in the middle** · LED or buzzer · battery pack · 3 clip leads.", art:"trapStep", n:0 },
          { t:"Foil both cards", d:"Glue foil on **one side** of each card. Leave a little foil tab sticking out for the clip.", art:"trapStep", n:1 },
          { t:"Make the sandwich", d:"Card (foil up) → sponge with hole → card (foil **down**). The sponge keeps the foils **apart** until someone steps on it.", art:"trapStep", n:2 },
          { t:"Wire the loop", d:"Battery → LED/buzzer → top foil… bottom foil → back to battery. The plate is the **switch** in your loop.", art:"trapStep", n:3 },
          { t:"Test it — 10 times!", d:"Press the plate: the foils touch through the hole → **BEEP!** Count how many times out of 10 it works.", art:"trapStep", n:4 }] },
        notes:[["CLICK","Step through all 5 steps; leave it up for builders."],["NOTE","Most common fault: the sponge hole is too small, so the foils can't touch. Make the hole about the size of a coin."],["PACE","Aim for minute 18."]] },
      { type:"paths", phase:"paths", fs:null, notes:[["SAY","Explain roles."],["CLICK","Start the timer."],["SAFETY","Count out coin cells if used."]] },
      { type:"lens", phase:"lens", fs:null, notes:[["CLICK","→ reveals each move."],["SAY","Read Nehemiah 4:9 — Nehemiah rebuilding Jerusalem's walls while enemies threatened."],["ASK","Use both questions."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["ASK","“How many states does a switch have?” (2)"],["CLICK","2 dots → Check."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess; store traps for display."],["CLICK","C = cacao beans."]] }
    ]
  };

  /* ======================= FRIDAY · ART ======================= */
  const fri = {
    id:"w03-fri", week:3, day:"fri", subject:"art", duration:50,
    title:"Number Art: Dot-Bar-Shell Pattern Design", guide:"rosa",
    codes:["VA-UC","VA-PK","VA-DI","MA"],
    coverage:"Visual Arts (NZC 2007, Level 3): understanding art in context (pattern in Mesoamerican design); practical knowledge (repetition, rhythm, symmetry); developing ideas. Maths link: reflective symmetry and pattern.",
    li:"We are learning to design patterns using Maya numerals, repetition and symmetry.",
    sc:["I can identify repetition, rhythm and symmetry in Maya and Aztec design.","I can create a pattern using a motif with a repeat or reflection.","I can explain the meaning hidden in my design."],
    vocab:[
      { w:"motif", say:"moh-TEEF", def:"a shape or picture that is repeated in a design" },
      { w:"repetition", def:"using the same motif again and again" },
      { w:"rhythm", def:"a regular beat in a pattern that moves your eye along" },
      { w:"symmetry", def:"when one half mirrors the other" },
      { w:"border", def:"a pattern band around the edge" },
      { w:"half-drop", def:"a repeat where every second column slides down half a step" }
    ],
    prep:{ min:5, items:["Codex books (panel 3)","Pencils, rulers, fine black pens","Coloured pencils or the dyes from Week 2","Squared paper (optional, for planning)"] },
    safety:["Pens and rulers only — no craft knives."],
    hononga:"**Kōwhaiwhai** and **tukutuku** patterns repeat motifs with rhythm and symmetry, and many carry meaning or tell stories. Like Maya numerals in a border, a pattern can **hold meaning**, not just decoration. (Explore the ideas of rhythm and meaning; don't copy specific sacred designs.)",
    paths:[
      { id:"A", name:"The Scribe", product:"Birthday-Number Border", steps:["Write your birthday (day and month) as Maya numerals.","Repeat them as a border around panel 3 of your codex.","Underneath, explain the hidden meaning."], flying:"Use a half-drop or mirror repeat and explain why you chose it." },
      { id:"B", name:"The Builder", product:"Symmetrical Folio III Page", steps:["Fold a scrap paper in half to plan a symmetrical design.","Use numerals + one shape from Week 1 glyphs as your motifs.","Draw it on panel 3, mirrored down the middle."], flying:"Try 4-way symmetry (two mirror lines) like the K'in glyph." },
      { id:"C", name:"The Messenger", product:"Pattern Puzzle", steps:["Design a pattern with a secret number hidden in it.","Swap with a partner — can they decode the secret?","Explain how you used repetition and rhythm."], flying:"Hide a ‘sum’: two numbers that add to the seal number!" }
    ],
    supportedShort:"squared paper; numeral strip 0–19; fold-in-half mirror guide.",
    lens:{
      pillar:"manaaki", title:"Order, beauty and careful work",
      look:"Look at the patterns: order, rhythm, symmetry. The Maya noticed patterns in the stars and seasons and made them part of their art.",
      ref:"Psalm 147:4–5; Colossians 3:23",
      paraphrase:"He determines the number of the stars and calls them each by name. Great is our Lord and mighty in power; His understanding has no limit… Whatever you do, work at it with all your heart, as working for the Lord.",
      talk:[
        { q:"Psalm 147 says God knows the number of the stars and names each one. What does that tell us about God — and about how He knows us?", listen:"God is great, orderly and personal; if He knows every star, He knows and cares about each of us." },
        { q:"What does it look like to do our art ‘with all our heart, as working for the Lord’?", listen:"Careful, patient work; doing our best even when no one's watching; using our gifts to bless others." }
      ],
      live:"Gallery walk: find one pattern that shows **careful work**, and tell its maker why."
    },
    clue:{ prompt:"Folio Seal: add the four Glyph Clues from Monday to Thursday.", answer:34, explain:"13 + 18 + 1 + 2 = 34 = one twenty (top) and 14 (bottom)." },
    next:"Week 4 — Keepers of Time: Maya calendars and the 2012 myth.",
    rubric:[
      { c:"Pattern in context", code:"VA-UC",
        d:["Says Maya art has patterns.","“There are shapes.”"],
        a:["Identifies repetition, rhythm and symmetry in Mesoamerican examples.","“The border repeats the same step shape — that's repetition and rhythm.”"],
        f:["Explains how patterns carried meaning.","“Numbers in borders could show dates — the pattern tells a story.”"],
        i:["I can see patterns.","I can name repetition, rhythm and symmetry in Maya design.","I can explain how patterns carried meaning."] },
      { c:"Pattern making", code:"VA-PK · MA",
        d:["Repeats a motif unevenly.","Numerals drawn at different sizes with uneven gaps."],
        a:["Creates a neat, consistent repeat or reflection.","An even border with equal spacing and a clear mirror line."],
        f:["Uses a complex repeat (half-drop, rotation, 4-way) with control.","A 4-way symmetrical design with balanced colours."],
        i:["My pattern is uneven.","My pattern repeats neatly and evenly.","I used a tricky repeat with control."] },
      { c:"Meaning & ideas", code:"VA-DI · VA-CI",
        d:["Copies an example.","Copies the screen pattern exactly."],
        a:["Designs their own pattern with a meaning they can explain.","“My border shows 14 and 3 — my birthday, 14 March.”"],
        f:["Creates an original, layered design and explains choices.","“I hid my birthday in a half-drop so it feels like steps on a pyramid.”"],
        i:["I copied an example.","I designed my own pattern with a meaning.","My design is original and I can explain every choice."] }
    ],
    plan:{
      prior:"Week 3 Monday: Maya numerals; Week 1: glyph drawing; Week 2: dyes.",
      kc:["Thinking","Managing self","Using language, symbols & texts"],
      sequence:[
        ["0–6","Field Transmission","Doña Rosa on pattern; Glyph Check; LI/SC.","Recall the week."],
        ["6–18","Excavate","Patterns in Maya & Aztec design; Number Pattern Studio (repeat types); Mirror Canvas (2-way, 4-way).","Predict, describe, compare."],
        ["18–40","Choose Your Path (22 min)","Panel 3 of the codex; roam with the rubric.","Border / symmetry / puzzle."],
        ["40–45","Through the Lens","Psalm 147; Colossians 3:23 — gallery walk.","Compliment careful work."],
        ["45–50","Folio Seal","13 + 18 + 1 + 2 = 34 (needs the 20s level!); Collector's intercept.","Solve; discuss."]
      ],
      diff:{
        supported:"Squared paper; numeral strip; folded mirror guides.",
        esol:"Visual vocabulary (repeat, mirror, rotate); demonstration.",
        learning:"Stencils for motifs; larger squares; fewer repeats.",
        flying:"4-way symmetry; half-drop repeats; hidden-sum puzzles."
      },
      assess:{
        lookFor:["Names repetition, rhythm, symmetry","Neat, consistent repeat","Explains a personal meaning"],
        evidence:["Codex panel 3 (photograph)","Puzzle swaps","Exit self-assessment"]
      },
      inquiry:["Could students read the 34 in the seal (20s level)?","Which repeat type was most popular?","How are the codex books holding up — any repairs needed?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"rosa", meta:"Restoration tent",
        msg:"Children, look at Folio III — numbers everywhere, marching in rows like dancers. The scribes didn't just **write** numbers; they made them **beautiful**. Today your numbers become art. And when you finish, we'll need a **big** number to open the third seal…",
        notes:[["SAY","Read the message."],["ASK","“Where do you see patterns in our classroom?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:"real", title:"This week so far", qs:[
          { q:"Write 13 as a Maya numeral.", a:"▬▬ with ●●● on top." },
          { q:"Why do cenotes form a ring in the Yucatán?", a:"They follow the buried rim of the Chicxulub crater." },
          { q:"What do all switches have inside?", a:"Contacts that touch (closed) or separate (open)." }],
        notes:[["SAY","Whole-week review."],["CLICK","→ flips."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and SC."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Look closely", title:"Patterns in Mesoamerican design", h:"440px", cards:[
          { big:"Repeat", color:"#B3262E", t:"The same motif, again", d:"The same **motif** again and again — like the step-fret (greca) on temple walls." },
          { big:"Rhythm", color:"#2E9FB0", t:"A steady beat", d:"A regular beat that moves your eye along a border or a textile band." },
          { big:"Mirror", color:"#1F7A5A", t:"Symmetry", d:"Many masks, glyphs and buildings are **symmetrical** — one half mirrors the other." },
          { big:"Meaning", color:"#D9A23A", t:"Art you can read", d:"Patterns could hold **numbers**, **dates** and **names** — art that could be read!" }],
        notes:[["SAY","“Mitla, in Oaxaca, has walls covered in step-fret mosaics — thousands of carved stones in repeating patterns.”"],["ASK","“Which of these can you see on our slide borders?” (The step-fret strip!)"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Try every repeat", title:"Number pattern studio", ix:"numberart", paper:true,
        notes:[["CLICK","Change the number; try Block → Mirror → Half-drop → Rotate; change colours."],["ASK","“Which pattern feels calm? Which feels lively? Why?”"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Draw with a mirror", title:"Symmetry canvas", ix:"mirror", paper:true,
        notes:[["CLICK","Draw on one side with the mouse; the other side mirrors. Switch to 4-way."],["SAY","“The K'in (sun) glyph has 4-way symmetry — four matching petals.”"],["PACE","Aim for minute 18."]] },
      { type:"paths", phase:"paths", fs:null, minutes:22, notes:[["SAY","Explain paths; panel 3 of the codex."],["CLICK","Start the 22-minute timer."],["NOTE","Tip: lightly rule guide lines first so the repeats are even."]] },
      { type:"lens", phase:"lens", fs:null, title:"Order, beauty and careful work", notes:[["CLICK","→ reveals each move."],["SAY","Read Psalm 147:4–5 and Colossians 3:23. Then a 3-minute gallery walk."]] },
      { type:"folioseal", phase:"decode", fs:"story",
        notes:[["SAY","“Our biggest seal yet!”"],["CLICK","Reveal the clues: 13 + 18 + 1 + 2 = 34. Build it: press +20 once (one dot in the 20s), then 14 in the ones (▬▬ ●●●●) → ‘Break the seal’."],["ASK","“Why do we need the 20s level for 34?”"]] },
      { type:"intercept", phase:"decode", fs:"story",
        msg:"Clever children. You've found a scribe's NAME. A TV company will pay me a fortune for the story of ‘the lost scribe’. Give me the name — I'll make it famous. Everyone wins. — C.",
        ask:"Who should decide how the Maya past is told and shared — and who should benefit?",
        notes:[["SAY","Read in the Collector's voice."],["ASK","Discuss briefly."],["LISTEN","Maya people today should have a say; heritage isn't just for profit; respect for the scribe as a real person; telling the story truthfully."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess; codices dry flat."],["CLICK","C = cacao beans."]] }
    ]
  };

  FC.WEEKS[3] = {
    n:3,
    story:"Folio III is covered in numbers and a name glyph — a scribe signed the codex! The team learns to count in twenties and follows the 400-year story of cracking the Maya code, discovers the cenotes and a crater from space, learns the language of circuit symbols, and builds a pressure-plate trap as looters circle the camp. Seal III needs the biggest number yet.",
    hononga:"Te reo Māori written down through partnership (Mon); Te Waikoropupū Springs and wai as a taonga (Tue); the national grid as a giant loop (Wed); pā early-warning and today's alert systems (Thu); kōwhaiwhai and tukutuku — patterns that hold meaning (Fri). Check local framing with your Māori lead / Ngāi Tahu rūnanga.",
    seal:{
      answer:34,
      instruction:"Add the four **Glyph Clues**. The total is over 19 — you'll need the **20s level**! (Press **+20** once, then build the rest.)",
      reveal:"🟡 **Folio III unsealed:** a scribe sits with brush and paint pot, columns of numbers beside them — and a name glyph with the **K'in** (sun) sign: Dr Canul reads it as **Aj K'in, ‘He of the Sun’**. Next week: *Keepers of Time*.",
      art:() => { const v = FC.art.scribeFolio(); v.setAttribute("style", "width:100%;height:100%"); return v; }
    },
    lessons:[mon, tue, wed, thu, fri]
  };
})(window.FC);
