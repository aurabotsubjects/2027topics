/* ==========================================================
   WEEK 1 — FOLIO I · THE SEAL BREAKS
   Each lesson = slides (with scripted notes) + plan + rubric.
   Notes: [KEY, text]  KEY = SAY ASK LISTEN IF CLICK TALK DEEPER PACE SAFETY WAIT NOTE
   ========================================================== */
(function(FC){
  "use strict";

  /* ======================= MONDAY · HISTORY ======================= */
  const mon = {
    id:"w01-mon", week:1, day:"mon", subject:"history", duration:50,
    title:"Who Were the Maya and Aztecs?", guide:"itzel",
    codes:["SS-H","SS-P","EN"],
    coverage:"Y5 History practices (2027 Social Sciences, Years 4–6): placing an ancient civilisation in time and place; using primary and secondary sources; comparing societies (Olmec, Maya, Aztec; Aotearoa).",
    li:"We are learning to describe who the Maya and Aztecs were, and how historians find out about the past.",
    sc:["I can place the Olmec, Maya and Aztecs on a timeline and a map.","I can explain the difference between a primary and a secondary source.","I can give an example of how we know something about the Maya or Aztecs."],
    vocab:[
      { w:"civilisation", def:"a large, organised society with cities, leaders, laws and shared culture" },
      { w:"Mesoamerica", say:"mez-oh-uh-MERR-ih-kuh", def:"‘middle America’ — the cultural region of southern Mexico and Central America" },
      { w:"archaeology", say:"ar-kee-OL-uh-jee", def:"studying the past by digging up and examining what people left behind" },
      { w:"artefact", def:"an object made by people in the past" },
      { w:"primary source", def:"made at the time, by people who were there" },
      { w:"secondary source", def:"made later, about the past" },
      { w:"codex", say:"KOH-deks", def:"a hand-made book (plural: codices, KOH-dih-seez)" },
      { w:"BCE / CE", def:"Before Common Era / Common Era (same years as BC / AD)" }
    ],
    prep:{ min:2, items:["Expedition Journals out on desks","Optional: print the 3 artefact images for Path A (or leave slide 11 on screen)"] },
    safety:[],
    hononga:"How do Māori hold and pass on history? **Whakapapa** (genealogy), **pūrākau** (traditional narratives), **whakairo** (carving) and **waiata** all carry the past. Like codices and stelae, history lives in more than written words. Ask: what ‘sources’ would a historian of Aotearoa use?",
    paths:[
      { id:"A", name:"The Scribe", product:"Artefact Field Report", steps:["Choose one artefact on screen: Olmec head, Maya stela or Aztec Sun Stone.","Draw it in your journal and write **See · Think · Wonder**.","Finish with **How could I check?** — name a source you'd look for."], flying:"Explain why a museum label might not tell the whole story." },
      { id:"B", name:"The Builder", product:"Illustrated Timeline Strip", steps:["Fold a strip into 5 boxes.","Add: Olmec · Classic Maya · Tenochtitlan founded (1325) · Spanish arrive (1519) · Maya & Nahua people today.","Give each a date, a picture and a one-line caption."], flying:"Add Aotearoa: when did Polynesian voyagers arrive? What does the comparison show?" },
      { id:"C", name:"The Messenger", product:"‘Breaking News’ Radio Bulletin", steps:["With a partner, plan a 60-second report from the dig site.","Explain who might have made the codex, and when.","Say how historians will check it's real — name 2 kinds of source."], flying:"Interview an ‘expert’ who doubts the codex is real. What evidence would convince them?" }
    ],
    supportedShort:"sentence starters (“I see… I think it was used for… because…”), dates provided for the timeline, partner pairing.",
    lens:{
      pillar:"mohio", title:"Every nation in God's story",
      look:"Look back at our timeline: thousands of years of peoples and cities rising and falling — Olmec, Maya, Aztec — and Polynesian voyagers reaching Aotearoa.",
      ref:"Acts 17:24–27",
      paraphrase:"God made the world and everything in it… From one person He made every nation… He decided the times and places where they would live, so that they would seek Him — and He is not far from any of us.",
      talk:[
        { q:"Paul says God set the times and places of every nation. Does that include the Maya and the Aztecs, who had never heard of Israel?", listen:"Yes — every people is part of God's world and God's story. God was ‘not far’ from them either." },
        { q:"If every nation matters to God, how should we study other people's history?", listen:"With respect and honesty; carefully; not mocking what is different; telling the truth even when it's hard." }
      ],
      live:"In your journal, finish: **“This term I will study the Maya and Aztecs with respect because…”**"
    },
    clue:{ prompt:"Tenochtitlan was founded around 1325. The Spanish arrived in 1519. About how many centuries (hundreds of years) apart is that?", answer:2, explain:"1519 − 1325 = 194 years ≈ 2 centuries. Clue 1 is saved for Friday's Folio Seal!" },
    next:"Tuesday — Capt. Sofía Quispe needs navigators who can read a map.",
    rubric:[
      { c:"Timeline & map", code:"SS-H",
        d:["Places 1–2 civilisations with help.","“The Aztecs were a long time ago in Mexico.”"],
        a:["Places Olmec, Maya and Aztecs in the right order with approximate dates and region.","timeline: Olmec 1200 BCE → Classic Maya 250–900 CE → Tenochtitlan 1325 → Spanish 1519, all in Mesoamerica."],
        f:["Notices overlaps or continuity across time.","“The Maya were around before AND after the Aztecs — and they're still here today.”"],
        i:["I can put one or two of them on a timeline with help.","I can put the Olmec, Maya and Aztecs in order, with dates and where they lived.","I can explain how their times overlap — and that Maya people still live today."] },
      { c:"Primary vs secondary sources", code:"SS-P",
        d:["Sorts some sources with help.","Puts the stela and the textbook in the right boxes with prompting."],
        a:["Defines both, and gives a correct example of each.","“A codex is primary because the Maya made it. A textbook is secondary.”"],
        f:["Explains how reliable a source is and why.","“Cortés' letter is primary, but he wanted the king to think he was a hero.”"],
        i:["I can sort some sources with help.","I can explain primary and secondary, with an example of each.","I can explain why a primary source might still not tell the whole truth."] },
      { c:"How we know", code:"SS-P · EN",
        d:["Gives a fact without its evidence.","“The Maya had kings.”"],
        a:["Links a fact to its evidence.","“We know the Maya had kings because their stelae show kings with dates.”"],
        f:["Suggests how to check a claim using more than one source.","“To check the codex is real, compare its glyphs with the Dresden Codex AND test the paper's age.”"],
        i:["I can share a fact.","I can say a fact AND how we know it.","I can explain how I'd check a fact using more than one source."] }
    ],
    plan:{
      prior:"Most students will know little about the Maya and Aztecs; some may know ‘pyramids’, ‘chocolate’ or game-style temples. They should know what a timeline is. The Glyph Wall captures prior knowledge (a baseline to revisit in Week 10).",
      kc:["Thinking","Using language, symbols & texts","Relating to others"],
      sequence:[
        ["0–6","Field Transmission","Play the opening cinematic (click through 5 moments). Read Dr Canul's message. Run the **Glyph Wall** — type students' ideas.","Watch, predict, share what they already know."],
        ["6–18","Excavate","Expedition Protocol (1 min); share LI/SC. Reveal the **Deep Timeline**; zoom the map NZ → Mesoamerica; sort sources with class voting.","Turn & talk; vote on each source; justify thinking."],
        ["18–38","Choose Your Path","Introduce A/B/C (2 min). Roam with the rubric; prompt: “How do you know?”","Choose a path; create their product."],
        ["38–45","Through the Lens","Acts 17:24–27 — four moves.","Discuss; write a journal sentence."],
        ["45–50","Decode & Exit","Glyph Clue 1; fist-to-five self-assessment; cacao beans.","Work out the clue; self-assess."]
      ],
      diff:{
        supported:"Sentence starters (“I see… / I think it was used for… because…”); dates pre-written for the timeline; pair with a confident reader; drawing + labels instead of sentences.",
        esol:"Visual glossary on screen; key words with pictures (artefact, source, timeline); rehearse orally with a partner before writing; home-language notes welcome.",
        learning:"Chunked 3-step path cards on screen; choice of response mode (draw / say / write); movement during source voting; calm screen available.",
        flying:"Flying challenge on every path; ask “Why might a primary source still be biased?”; compare the Maya timeline with Aotearoa's settlement."
      },
      assess:{
        lookFor:["Correct order Olmec → Maya → Aztec, with approximate dates","Accurate use of ‘primary’ and ‘secondary’ with an example","Linking a fact to its evidence (“We know… because…”)"],
        evidence:["Path products (photograph)","Source-sorter votes","Exit self-assessment","Glyph Wall (baseline for Week 10)"]
      },
      inquiry:["Who could already explain primary vs secondary? Who needs it revisited in Tuesday's Glyph Check?","Which paths did students choose — did choice affect quality or engagement?","What prior knowledge or misconceptions appeared on the Glyph Wall?"]
    },
    slides:[
      { type:"cinematic", phase:"transmission", fs:"story", ix:"opening", title:"Opening: the storm",
        notes:[["NOTE","Dim the lights if you can. This is the start of the whole term — make it feel like an event."],["CLICK","Press → (or click) to move through 5 moments: storm · lightning & falling tree · the chamber · the codex unfolds · the title."],["SAY","Read each caption aloud slowly and dramatically, or let students read it."],["ASK","After the codex unfolds: “What do you think this book is? Who might have made it?” ⏳ wait 5 seconds."],["PACE","About 2 minutes."]] },
      { type:"transmission", phase:"transmission", fs:"story", guide:"itzel", meta:"Petén · Guatemala",
        msg:"Kia ora, expedition team. I'm Dr Itzel Canul. Three nights ago my team found this book in the rainforest. Only four Maya books have survived the last 500 years — this could be the **fifth**. It's sealed with ten jade seals, and someone calling himself **The Collector** wants it. Before you can read it, you must know **who made it**. I need historians.",
        notes:[["SAY","Read the message aloud (it types itself — click the text to show it all at once)."],["NOTE","🟡 Dr Canul is a fictional character. Point out the yellow ‘Expedition story’ badge, bottom right, and the green ‘Real evidence’ badge on later slides: “All term, watch these badges. Part of being a good historian is knowing what's story and what's evidence.”"],["ASK","“Why might someone like The Collector want an ancient book?”"]] },
      { type:"glyphwall", phase:"transmission", fs:null, title:"What do you already know?",
        notes:[["ASK","“What do you already know — or think you know — about the Maya or the Aztecs? Anything at all, even a guess.” ⏳ 10 seconds of thinking time."],["CLICK","Type each idea into the box and press Enter. Notes can be dragged around."],["LISTEN","Pyramids, Mexico, chocolate, jungle, calendars, ‘the end of the world 2012’, sacrifice, gold. Accept everything — don't correct yet."],["NOTE","The Glyph Wall is saved on this computer. We'll come back to it in Week 10 to see how far we've come."]] },
      { type:"protocol", phase:"transmission", fs:null,
        notes:[["SAY","“Expeditions have rules so everyone stays safe and the work is good. Here are ours for the whole term.”"],["ASK","“Which one do you think will be hardest for our class? Why?”"],["PACE","1 minute — keep it brisk."]] },
      { type:"lisc", phase:"transmission", fs:null,
        notes:[["SAY","Read the learning intention, then each success criterion. “By the end of today you'll be able to say ‘I can…’ to these.”"],["NOTE","The three levels — Developing, Achieved, Flying — are how we'll check our learning all term."]] },
      { type:"discussion", phase:"excavate", fs:"real", kicker:"Think like a historian", q:"If someone 500 years from now wanted to find out about **our class**, what could they look at?", sub:"Historians can't time-travel. They study **sources** — things left behind from the past.", talk:45,
        notes:[["SAY","“Historians are like detectives. They can't go back in time, so they look at sources — things people left behind.”"],["TALK","Press the 45-second talk button. Partners list as many ‘sources’ as they can. Bring back with “3, 2, 1… eyes on me.”"],["LISTEN","Objects (desks, books), writing (journals, emails, signs), pictures (photos, art), buildings, people's memories, recordings."],["IF","“Google” → “Great! But is everything online true? How would a historian check?”"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"When?", title:"The Deep Timeline", ix:"timeline",
        notes:[["CLICK","Press ‘Reveal next’ to add each era: Olmec → Maya Preclassic → Classic → Postclassic → Aztec → Spanish rule → Today → Aotearoa comparison."],["SAY","Olmec (c. 1200–400 BCE) are often called the ‘mother culture’. The Maya lasted thousands of years. The Aztec Empire was short: 1428–1521."],["IF","“The Maya and Aztecs lived at the same time” → “Let's check! When Tenochtitlan was founded (1325), the great Classic Maya cities like Tikal had been quiet for about 400 years — but Maya people were still living and trading in the Yucatán.”"],["ASK","At the last reveal: “Tenochtitlan was founded at about the same time Polynesian voyagers were settling Aotearoa. What does that make you think?”"],["TALK","“What surprises you on this timeline?” (30 seconds)"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Where?", title:"From Aotearoa to Mesoamerica", ix:"mapzoom",
        notes:[["CLICK","Press 1 → 2 → 3. The map zooms from NZ, across the Pacific, to Mesoamerica."],["SAY","“Meso means middle. Mesoamerica is a cultural region — southern Mexico and Central America. It is NOT South America. Tomorrow Capt. Quispe will show us the difference.”"],["ASK","“Which modern countries can you see in Mesoamerica?” (Mexico, Guatemala, Belize, Honduras, El Salvador.)"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Sources · how do we know?", title:"Primary or *secondary*?", ix:"sources",
        notes:[["SAY","“Primary sources were made at the time, by people who were there. Secondary sources were made later, about the past.”"],["CLICK","For each card: ask the class to vote (thumbs up = primary, thumbs down = secondary), THEN drag it into a box. The tip bar explains each answer."],["ASK","“Which of these would you trust most? Why?”"],["LISTEN","Made at the time; made by the people themselves; checked against other sources."],["DEEPER","Leave Cortés' letter until last — it's the interesting one."]] },
      { type:"discussion", phase:"excavate", fs:"real", kicker:"Deeper thinking", q:"Cortés' letter is a primary source. Why might it **not** tell the whole story?", sub:"Ask every source three questions: *Who made it? When? Why?*", talk:30,
        notes:[["LISTEN","He was the invader; he wanted the King of Spain to think he was a hero; he might leave out his own mistakes or cruelty; he didn't fully understand Aztec culture."],["SAY","“A primary source isn't automatically true. Good historians compare sources from different points of view.”"],["PACE","By now you should be at about minute 17–18."]] },
      { type:"interactive", phase:"paths", fs:"real", kicker:"Look closely · Path A", title:"Artefact files", ix:"artefacts",
        notes:[["CLICK","Click a card to show its facts. Press → to show three more artefacts (cacao, rubber ball, obsidian mirror); ← goes back. Leave this slide up during Path time for Path A students."],["NOTE","These are artistic reconstructions, not photographs."]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAY","“Choose the path that will help you show your learning best. All three paths are marked against the same success criteria.”"],["CLICK","Press Start to run the 20-minute timer. Go back to slide 11 for Path A artefacts if needed (press ← twice)."],["NOTE","Roam with the rubric (or Quick-Mark on a device). Ask: “How do you know?” · “What source tells us that?”"],["PACE","Give a 5-minute warning (the timer chimes)."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Press → to reveal each of the four moves in turn."],["SAY","Read Acts 17:24–27 from your class Bible (the paraphrase is on screen). Context: Paul was speaking in Athens to people with many gods — he told them about the one true God who made every nation."],["ASK","Use the two questions. ⏳ Wait time before taking answers."],["LISTEN","Every people group is part of God's world and story; we study others with respect and honesty."]] },
      { type:"decode", phase:"decode", fs:"story",
        notes:[["SAY","“Dr Canul says each lesson's learning gives us a clue to the seal. Here's today's.”"],["ASK","Let teams work it out (1519 − 1325 = 194 ≈ 2 centuries)."],["CLICK","Build the answer with the keypad: ● = 1. Press ‘Check the glyph’. The clue is saved for Friday."],["NOTE","Students will learn Maya numbers properly in Week 3 — today just enjoy the dots!"]] },
      { type:"exit", phase:"decode", fs:null,
        notes:[["SAY","“Show me on your hand: one finger — Developing, three — Achieved, five — Flying. Think about the success criteria.”"],["CLICK","Press C to award cacao beans to teams."],["NOTE","Collect / photograph Path products as evidence."]] }
    ]
  };

  /* ======================= TUESDAY · GEOGRAPHY ======================= */
  const tue = {
    id:"w01-tue", week:1, day:"tue", subject:"geography", duration:50,
    title:"Where in the World?", guide:"sofia",
    codes:["SS-G","SS-P","MA"],
    coverage:"Geography practices (2027 Social Sciences, Years 4–6): map skills — continents, hemispheres, latitude & longitude, regions; Y6 regional-study method applied to Latin America. Prepares Y5 hazards & biomes later in the term.",
    li:"We are learning to locate places in Latin America using maps, hemispheres, latitude and longitude.",
    sc:["I can name and locate the continents and oceans around Latin America.","I can explain the difference between Mesoamerica and South America.","I can use latitude and longitude to find a place."],
    vocab:[
      { w:"continent", def:"one of the Earth's 7 large land masses" },
      { w:"hemisphere", def:"half of the Earth (Northern/Southern, Eastern/Western)" },
      { w:"equator", def:"the imaginary line around the middle of the Earth (0° latitude)" },
      { w:"latitude", say:"LAT-ih-tyood", def:"how far north or south of the equator a place is" },
      { w:"longitude", say:"LON-jih-tyood", def:"how far east or west a place is" },
      { w:"Mesoamerica", def:"a cultural region in southern Mexico and Central America" },
      { w:"Latin America", def:"Mexico, Central & South America — where Spanish or Portuguese are spoken" },
      { w:"compass rose", def:"the symbol showing North, South, East and West on a map" }
    ],
    prep:{ min:5, items:["Atlases (optional)","Blank map printable for Path A (optional — or draw from the screen)","Coloured pencils"] },
    safety:[],
    hononga:"Polynesian navigators crossed the Pacific long before maps had latitude lines — reading stars, ocean swells, birds and clouds. DNA evidence suggests Polynesian voyagers even reached South America around 800 years ago (more in Week 8!). Ask: how is traditional wayfinding like, and unlike, latitude and longitude?",
    paths:[
      { id:"A", name:"The Scribe", product:"Navigator's Log", steps:["Use a blank map of Latin America (or draw one from the screen).","Locate and label 8 places, writing each one's latitude & longitude.","Add the equator and both tropics."], flying:"Use latitude to explain why it's warm all year in Tikal but cold in Patagonia." },
      { id:"B", name:"The Builder", product:"Expedition Route Map", steps:["Draw *La Golondrina*'s route: Aotearoa → Mexico → South America.","Add a compass rose, a key and the equator.","Colour Mesoamerica and South America differently."], flying:"Add a scale bar and estimate the distance from Mexico City to Lima." },
      { id:"C", name:"The Messenger", product:"Pilot's Radio Brief", steps:["In pairs: one pilot, one navigator.","The navigator guides the pilot to a secret place using only directions and coordinates.","Swap roles with a new place."], flying:"Use hemispheres and continents in your directions, not just coordinates." }
    ],
    supportedShort:"coordinates provided on cards; partner navigator; a printed map with grid lines labelled.",
    lens:{
      pillar:"aroha", title:"The earth is the Lord's",
      look:"Look at the whole map: oceans, continents, the place we live and the places the Maya and Aztecs lived — one world.",
      ref:"Psalm 24:1",
      paraphrase:"The earth belongs to the Lord, and everything in it — the world, and all who live in it.",
      talk:[
        { q:"If the whole world belongs to God, how might that change the way we look at a map?", listen:"Every place and people matters; we're caretakers and guests, not owners; far-away places matter to God as much as ours." },
        { q:"Who lives in the places on our map today? How could we show them aroha?", listen:"Millions of people, including Maya and Nahua peoples; learn about them, pray, treat them with respect, support fair trade." }
      ],
      live:"Circle one place on your map that you will **pray for** this term. Write its name in your journal."
    },
    clue:{ prompt:"On our term route, how many continents of the Americas will La Golondrina fly over? (Mexico & Guatemala are in one; Peru, Brazil & Chile are in the other.)", answer:2, explain:"North America (incl. Mexico & Central America) + South America = 2. Clue 2 saved!" },
    next:"Wednesday — Mateo's camp has lost power. What IS electricity?",
    rubric:[
      { c:"Locating places", code:"SS-G",
        d:["Finds a place on a map with help.","“Mexico is near America.”"],
        a:["Names and locates the continents and oceans around Latin America.","Labels North & South America, the Pacific and Atlantic, and places Mexico and Peru correctly."],
        f:["Describes locations using several geographic terms.","“Peru is on the west coast of South America, south of the equator, beside the Pacific.”"],
        i:["I can find a place with help.","I can name and find the continents and oceans around Latin America.","I can describe where a place is using lots of map words."] },
      { c:"Explaining regions", code:"SS-G",
        d:["Confuses Mesoamerica and South America.","“The Maya lived in South America.”"],
        a:["Explains the difference between Mesoamerica and South America.","“Tikal is in Guatemala, in Central America. That's Mesoamerica, not South America.”"],
        f:["Explains that regions can be cultural, not just physical.","“Mesoamerica is about shared culture, not continents — it crosses from North into Central America.”"],
        i:["I'm still mixing up the regions.","I can explain how Mesoamerica is different from South America.","I can explain that a region can be about culture, not just land."] },
      { c:"Latitude & longitude", code:"SS-P · MA",
        d:["Finds a place when the lines are pointed out.","Finds Tikal with the teacher tracing the lines."],
        a:["Uses latitude (first) and longitude to locate a place.","Finds 12°S, 77°W and names Lima."],
        f:["Gives coordinates for a new place and checks them.","Works out Christchurch ≈ 43°S, 172°E and explains why it is ‘E’."],
        i:["I can find a place when someone helps me follow the lines.","I can use latitude and longitude to find a place.","I can work out the coordinates of a new place myself."] }
    ],
    plan:{
      prior:"From Monday: Mesoamerica is where the Olmec, Maya and Aztecs lived. Students may know compass points and simple grids from earlier years; latitude/longitude are new for many.",
      kc:["Thinking","Using language, symbols & texts","Managing self"],
      sequence:[
        ["0–6","Field Transmission","Capt. Quispe's message; 3-question Glyph Check (flip cards); LI/SC.","Recall Monday's learning on mini-whiteboards."],
        ["6–18","Excavate","Flight Path (equator, tropics, hemispheres) → latitude & longitude explained → Regions of the Americas → Navigator's Challenge game.","Point, predict, vote; explain hemispheres."],
        ["18–38","Choose Your Path","Introduce paths; roam; check coordinate use (latitude first!).","Create Navigator's Log / Route Map / Radio Brief."],
        ["38–45","Through the Lens","Psalm 24:1 — four moves.","Discuss; circle a place to pray for."],
        ["45–50","Decode & Exit","Glyph Clue 2; self-assess; cacao beans.","Solve; self-assess."]
      ],
      diff:{
        supported:"Coordinates on cards; maps with labelled grid lines; navigator partner; finger-tracing routine (“across the ladder, then down the pole”).",
        esol:"Key words with symbols (N/S/E/W, equator line); oral rehearsal; Spanish speakers can share place-name pronunciations.",
        learning:"Tactile: trace lines on a printed map; one coordinate at a time; movement game during the challenge.",
        flying:"Estimate distances with a scale bar; explain climate differences using latitude; research the Prime Meridian."
      },
      assess:{
        lookFor:["Correctly naming/locating continents and oceans","Clear statement that Mesoamerica ≠ South America","Latitude stated first, with N/S and E/W"],
        evidence:["Path products","Navigator's Challenge responses","Glyph Check whiteboards","Exit self-assessment"]
      },
      inquiry:["Who still reverses latitude and longitude? Plan a 3-minute warm-up for Wednesday.","Did any students hold the misconception that the Maya were South American?","Which map skills need revisiting before Week 2 (Ring of Fire)?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"sofia", meta:"Lake Petén Itzá",
        msg:"¡Hola! Kia ora! Capt. Sofía Quispe here — I fly *La Golondrina*, the expedition's old floatplane. This term I'll fly us from Mexico all the way to the bottom of South America. But I have one rule: **if you can't read a map, you don't fly with me.**",
        notes:[["SAY","Read the message. Sofía is Peruvian, of Quechua heritage (🟡 fictional)."],["ASK","“Where do you think she'll fly us first?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:"real", qs:[
          { q:"Which came first: the Maya or the Aztecs?", a:"The Maya — thousands of years earlier. (The Olmec came before both!)" },
          { q:"What is a primary source?", a:"Something made at the time, by people who were there — like a stela or a codex." },
          { q:"Name one way we know about the Maya.", a:"Stelae, codices, buildings, archaeology, Spanish accounts, Maya people today…" }],
        notes:[["SAY","“Mini-whiteboards: write your answer, then show me on 3.”"],["CLICK","Press → to flip each card after students show answers (or click a card)."],["NOTE","This is retrieval practice — it strengthens memory. Keep it quick: under 3 minutes."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and SC aloud."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Hemispheres", title:"Fly the Pacific", ix:"flight",
        notes:[["CLICK","Press ✈ Fly first. Then toggle Equator, Tropics and Hemispheres one at a time."],["ASK","Before ‘Hemispheres’: “Which hemisphere is NZ in? Which is Mexico in?” Then: “So if it's summer here, what season is it in Mexico?”"],["LISTEN","NZ: Southern Hemisphere. Mexico: Northern. Seasons are opposite."],["NOTE","The distance shown is a straight-line estimate (about 11,000 km)."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Map skills", title:"Latitude & longitude", visual:{ svg:() => FC.art.globe() },
        bullets:["**Latitude** lines run across, like ladder rungs. They measure how far **north or south** of the equator (0°) you are.","**Longitude** lines run from pole to pole. They measure how far **east or west** you are.","Always say **latitude first**: Tikal ≈ **17°N, 90°W**.","Ōtautahi Christchurch ≈ **43°S, 172°E**."],
        notes:[["SAY","“Lat is flat — latitude lines are flat, like the rungs of a ladder you climb north or south.”"],["ASK","“Why do you think we need TWO numbers to find a place?”"],["LISTEN","One number only gives a line; two lines cross at one point."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Regions", title:"Mesoamerica ≠ South America", ix:"regions",
        notes:[["CLICK","Tap each region button. Before each tap, ask the class to point at the screen where they think it is."],["SAY","“Mexico is part of North America! Mesoamerica is a cultural region where peoples shared maize, calendars, ball games and pyramid-temples.”"],["IF","“The Aztecs were in South America” → “Let's check the map — Mexico City is in North America. The Inca were in South America; we'll meet them in Week 8.”"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Game", title:"Navigator's Challenge", ix:"latlong",
        notes:[["CLICK","Press ‘Next place’. Everyone points at the screen (or a printed map). Then press ‘Reveal’ — the lines show the answer."],["SAY","“Latitude first: find the line across. Then longitude: find the line up and down. Where they cross — that's the place!”"],["PACE","Do 4–6 places; you should be near minute 18 by the end."]] },
      { type:"discussion", phase:"excavate", fs:"real", kicker:"Wonder", q:"Why do we call it **Latin** America?", sub:"Hint: what languages are spoken in Mexico, Peru and Brazil? Where did those languages come from?", talk:30,
        notes:[["LISTEN","Spanish and Portuguese; they grew from Latin (the language of ancient Rome); Spain and Portugal colonised these lands."],["DEEPER","“What languages were spoken there BEFORE Spanish arrived?” (Mayan languages, Nahuatl, Quechua… many are still spoken today!)"]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAY","Explain the three paths; students choose."],["CLICK","Start the timer. Go back to the Navigator's Challenge slide if Path A students need the map."],["NOTE","Check: “Latitude first?” “North or south? East or west?”"]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","→ reveals each move."],["SAY","Read Psalm 24:1 from your Bible."],["ASK","Use both questions; take 3–4 answers each."]] },
      { type:"decode", phase:"decode", fs:"story",
        notes:[["ASK","“How many continents of the Americas will we fly over this term?” (North America incl. Mexico & Central America; South America = 2.)"],["CLICK","Build 2 dots on the keypad → Check."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Fist-to-five self-assessment against the SC."],["CLICK","C = cacao beans."]] }
    ]
  };

  /* ======================= WEDNESDAY · SCIENCE ======================= */
  const wed = {
    id:"w01-wed", week:1, day:"wed", subject:"science", duration:50,
    title:"What Is Electricity? Static & Lightning", guide:"mateo",
    codes:["SC-MIE","SC-MF","SC-P"],
    coverage:"Y6 Science — Matter, interactions & energy: electric charge as the basis of circuits (energy source → output, built on next weeks). Y5 Science — non-contact forces. Science practices: predict, test, observe, explain.",
    li:"We are learning that electricity is caused by moving electric charges, and how static electricity and lightning form.",
    sc:["I can describe what happens when objects are rubbed together and become charged.","I can explain that like charges repel and opposite charges attract.","I can explain how lightning is a giant static discharge."],
    vocab:[
      { w:"atom", def:"a tiny particle that everything is made of" },
      { w:"electron", say:"ee-LEK-tron", def:"a tiny negative (−) particle on the outside of an atom" },
      { w:"charge", def:"positive (+) or negative (−); like charges repel, opposite charges attract" },
      { w:"static electricity", def:"charge that builds up on an object, often from rubbing" },
      { w:"attract / repel", def:"pull together / push apart" },
      { w:"discharge", def:"when built-up charge suddenly flows away — like a spark" },
      { w:"non-contact force", def:"a push or pull that works without touching (e.g. static, magnetism, gravity)" }
    ],
    prep:{ min:5, items:["Balloons — 1 per pair (non-latex option)","Tissue paper torn into tiny ‘glyph’ pieces","Plastic comb + a tap or jug for a thin stream of water (demo)","Wool jumper or cloth for rubbing"] },
    safety:["Check for latex allergies — use non-latex balloons if needed.","Never experiment with sockets or mains electricity.","Lightning safety: “When thunder roars, go indoors.” Avoid tall trees and water in storms."],
    hononga:"In Māori tradition, the weather — including storms and lightning — belongs to the story of **Tāwhirimātea**. Many cultures, including the Maya, explained lightning through their beliefs. Ask: how do different peoples explain lightning? How does science explain *how* it happens? (Treat traditions respectfully; check local framing with your Māori lead.)",
    paths:[
      { id:"A", name:"The Scribe", product:"Static Lab Report", steps:["**Predict:** which will a charged balloon pick up — paper, foil, salt, pepper, hair?","Test each one and record results in a table.","Explain using the words **electrons, negative, attract**."], flying:"Why does static work better on dry days than humid ones?" },
      { id:"B", name:"The Builder", product:"Comic: ‘The Life of an Electron’", steps:["Plan 5–6 panels.","Show an electron jumping from a jumper to a balloon… and then a spark!","Label the + and − charges in every panel."], flying:"Add a final panel showing the same thing inside a thundercloud." },
      { id:"C", name:"The Messenger", product:"Storm Chaser Report", steps:["Plan a 60-second weather report from Lake Maracaibo.","Explain how the cloud becomes charged and why lightning strikes.","Use at least 4 science words."], flying:"Include a safety message: what should people do in a lightning storm, and why?" }
    ],
    supportedShort:"results table pre-drawn; word bank (electron, negative, positive, attract, repel); comic panel template.",
    lens:{
      pillar:"mohio", title:"Who sends the lightning?",
      look:"Look again at the lightning over Lake Maracaibo — thousands of flashes, night after night. Many ancient peoples, including the Maya, believed lightning was a god.",
      ref:"Job 37:3–5; 38:35",
      paraphrase:"God unleashes His lightning beneath the whole heaven… He does great things beyond our understanding. “Can you send out the lightning bolts on their way? Do they report to you, ‘Here we are’?”",
      talk:[
        { q:"Scientists can now explain how lightning works. Does knowing how it works mean God isn't part of it?", listen:"Science explains HOW; God is WHO made the world and its laws. Knowing more can make us more amazed, not less." },
        { q:"Why might God ask Job questions about lightning?", listen:"To show His greatness and wisdom; to help Job be humble and trust Him — we don't control creation." }
      ],
      live:"Write one **“Wow, God…”** sentence in your journal about electricity or lightning."
    },
    clue:{ prompt:"Two balloons have both been rubbed, so both are negative. Hold them close together. Do they attract (1) or repel (2)?", answer:2, explain:"Like charges repel → 2. Clue 3 saved!" },
    next:"Thursday — Mateo needs an emergency torch. Time to think like engineers!",
    rubric:[
      { c:"Describing charging", code:"SC-MIE",
        d:["Describes what happened without the science.","“The balloon got sticky.”"],
        a:["Explains charging by electrons moving.","“Rubbing moved electrons onto the balloon, so it became negative and attracted the paper.”"],
        f:["Explains both objects and predicts new cases.","“The jumper lost electrons so it's positive now — it should attract a negative balloon too.”"],
        i:["I can say what happened.","I can explain that rubbing moves electrons and makes things charged.","I can explain what happens to BOTH objects and predict new results."] },
      { c:"Attract & repel", code:"SC-MIE · SC-MF",
        d:["Knows charges push or pull, with help.","Points to ‘pull’ on the diagram."],
        a:["States the rule correctly with an example.","“Like charges repel, opposite charges attract — two negative balloons push apart.”"],
        f:["Links the rule to non-contact forces and new situations.","“It's a non-contact force like magnetism — the balloon pulled the paper without touching.”"],
        i:["I know charges can push or pull.","I can explain like charges repel and opposite charges attract.","I can link this to other non-contact forces and new situations."] },
      { c:"Explaining lightning", code:"SC-MIE · SC-P",
        d:["Says lightning is electricity.","“Lightning is electric.”"],
        a:["Explains lightning as a static discharge.","“Charges separate in the cloud; when the difference is huge, a giant spark jumps to the ground.”"],
        f:["Compares lightning with the balloon model and explains safety.","“It's the balloon spark but huge — that's why you avoid tall trees: they're the shortest path to the ground.”"],
        i:["I can say lightning is electricity.","I can explain lightning as a giant static discharge.","I can compare lightning with our balloon test and explain storm safety."] }
    ],
    plan:{
      prior:"Students have experienced static (jumpers, trampolines, hair). Most won't know about electrons. Builds towards circuits (Week 3) and the Y6 requirement for simple circuits.",
      kc:["Thinking","Participating & contributing","Managing self"],
      sequence:[
        ["0–6","Field Transmission","Mateo's message (power is out); Glyph Check; LI/SC; safety slide.","Recall Tuesday; read safety rules."],
        ["6–18","Excavate","Inside an atom → balloon charge lab → attract/repel → live comb-and-water demo (predict first!) → Catatumbo lightning.","Predict, observe, explain with + and −."],
        ["18–38","Choose Your Path","Paths; balloons and paper out for Path A testing.","Test / draw / report."],
        ["38–45","Through the Lens","Job 37–38 — four moves.","Discuss; ‘Wow, God…’ sentence."],
        ["45–50","Decode & Exit","Glyph Clue 3; self-assess; tidy balloons.","Solve; self-assess."]
      ],
      diff:{
        supported:"Pre-drawn results table; word bank; work alongside a partner; comic template with labelled panels.",
        esol:"Gestures for attract (hands together) and repel (hands apart); symbols + and − on cards; oral rehearsal before writing.",
        learning:"Hands-on first, writing second; movement during the demo; choice of response mode.",
        flying:"Explain humidity's effect; research how lightning rods protect buildings; compare static and current electricity."
      },
      assess:{
        lookFor:["Uses ‘electrons’ to explain charging","States like/opposite charge rule with an example","Describes lightning as a static discharge"],
        evidence:["Lab reports / comics / recordings","Predictions before the demo","Exit self-assessment"]
      },
      inquiry:["Who still thinks rubbing ‘makes’ electricity rather than moving it?","Was the prediction-first routine effective? Use it again for circuits.","Which students need concrete materials again next week?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"mateo", meta:"Camp generator · 02:14",
        msg:"Can you hear me? Mateo here — the camp engineer. Last night lightning hit our generator mast and **the whole camp went dark**. The codex chamber has no light and the satellite link is failing. To fix the power, we need to understand electricity from the very beginning — the **tiniest** beginning.",
        notes:[["SAY","Read the message (or have a student read it as Mateo)."],["ASK","“What do you think he means by ‘the tiniest beginning’?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:"real", qs:[
          { q:"Which hemisphere is Mexico in?", a:"The Northern Hemisphere (we're in the Southern)." },
          { q:"Is Mesoamerica part of South America?", a:"No! It's southern Mexico and Central America." },
          { q:"What do lines of latitude measure?", a:"How far north or south of the equator a place is." }],
        notes:[["SAY","Whiteboards: write, then show on 3."],["CLICK","→ flips each card."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and SC."]] },
      { type:"safety", phase:"transmission", fs:"real", title:"Science safety", items:[
          { icon:"🔌", t:"Never use sockets", d:"Mains electricity in walls can kill. We only use static and small batteries." },
          { icon:"🎈", t:"Balloon check", d:"Tell your teacher if you have a latex allergy. Balloons stay away from faces." },
          { icon:"⛈️", t:"Lightning rules", d:"“When thunder roars, go indoors.” Stay away from tall trees and water in a storm." }],
        notes:[["SAFETY","Read all three rules. Ask a student to explain each in their own words."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"The tiniest beginning", title:"Inside an atom", ix:"atom",
        notes:[["SAY","“Everything — you, your desk, the air — is made of tiny atoms. Atoms have three kinds of particles.”"],["CLICK","Tap a proton, a neutron and an electron to show their descriptions."],["SAY","“Electrons are on the outside — so they can be rubbed off. Moving electrons is what electricity IS.”"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Static electricity", title:"The balloon test", ix:"chargelab",
        notes:[["ASK","Before pressing: “What will happen to the paper when I bring a balloon near it?” Then press ‘2 · Hold near paper’ FIRST, with an uncharged balloon — nothing happens. That's a fair-test comparison!"],["CLICK","Then press ‘1 · Rub’ and ‘2 · Hold near paper’ again."],["SAY","“Rubbing didn't make electrons — it MOVED them. The balloon gained electrons (negative). The jumper lost them (positive).”"],["NOTE","Students can try this for real in Path A."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"The rule", title:"Attract or repel?", ix:"charges",
        notes:[["CLICK","Tap a charge to flip its sign; drag to move. Ask for a prediction, then press ‘Let go!’"],["SAY","“Like charges repel, opposite charges attract.” Students do the gesture: hands apart (repel), hands together (attract)."],["DEEPER","“This is a non-contact force — like magnetism and gravity. It works without touching.”"]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Live demo · 2 minutes", title:"Bending water", visual:{ svg:() => FC.art.waterDemo() },
        bullets:["Rub a plastic comb through dry hair (or a jumper) 10 times.","Turn on a tap to a **thin, steady** stream.","Bring the comb close — **don't touch** the water!","**Predict first:** what will the water do?"],
        notes:[["ASK","Take 3 predictions BEFORE the demo."],["NOTE","The negative comb attracts the water (water molecules have slightly charged ends). Students just need: “the charged comb pulls the water — a non-contact force.”"],["IF","No tap? Use a jug with a small hole, or skip and show the slide."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Nature's static", title:"Catatumbo lightning", ix:"lightning",
        notes:[["SAY","“Over Lake Maracaibo in Venezuela — South America — storms happen on up to about 260 nights a year. It's one of the most lightning-struck places on Earth.”"],["CLICK","Press ‘Build charge’ 3–5 times (explain + rising, − sinking), then ‘Strike!’"],["ASK","“How is a storm cloud like our balloon?”"],["LISTEN","Things rub/crash together (ice and water), charges separate, then a giant spark — a discharge."],["PACE","You should be close to minute 18."]] },
      { type:"discussion", phase:"excavate", fs:"real", kicker:"Wonder", q:"Why do you get more static shocks on **dry** days?", sub:"Hint: water in the air helps extra electrons slip away.", talk:30,
        notes:[["LISTEN","Damp air lets charge leak away; dry air lets it build up until you touch something — zap!"],["NOTE","This is also the Path A flying challenge — keep it brief."]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAY","Explain the paths. Path A students collect balloons and paper."],["CLICK","Start the timer."],["NOTE","Look for students using ‘electrons’ and ‘negative/positive’ correctly."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","→ reveals each move."],["SAY","Read Job 37:3–5 and 38:35. Context: God speaks to Job, showing His power and wisdom in creation."],["ASK","Use both questions."],["LISTEN","Science explains how; God made the laws; amazement and humility."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["ASK","“Both balloons negative — attract or repel?” (repel = 2)"],["CLICK","2 dots → Check."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess; collect balloons."],["CLICK","C = cacao beans."]] }
    ]
  };

  /* ======================= THURSDAY · TECHNOLOGY ======================= */
  const thu = {
    id:"w01-thu", week:1, day:"thu", subject:"technology", duration:50,
    title:"Think Like an Engineer: the Jaguar-Eye Torch", guide:"mateo",
    codes:["TE-TP","TE-TK","TE-NT"],
    coverage:"Technology (NZC 2007, Level 3): brief development and outcome development; technological systems (input → process → output). Links to Y6 Science (2027): an energy source and an output device in a closed loop.",
    li:"We are learning how engineers solve problems using a design brief, and to build a simple LED circuit.",
    sc:["I can identify the need, the stakeholder and the specifications in a brief.","I can build a working LED circuit with a coin battery.","I can explain the input, process and output of my torch."],
    vocab:[
      { w:"engineer", def:"someone who designs and builds solutions to problems" },
      { w:"stakeholder", def:"the person or group the design is for" },
      { w:"need", def:"the problem the design must solve" },
      { w:"brief", def:"a short plan that describes the need and the must-haves" },
      { w:"specification", say:"spess-if-ih-KAY-shun", def:"a must-have that can be tested" },
      { w:"prototype", def:"a first working version, built to test ideas" },
      { w:"LED", def:"light-emitting diode — a light that lets current through one way only" },
      { w:"input · process · output", def:"what goes in, what happens, what comes out" }
    ],
    prep:{ min:10, items:["1 × 5 mm LED + 1 × CR2032 coin cell per student or pair — COUNT THEM","Card strips about 2 × 10 cm","Sticky tape, scissors, coloured pens","A lidded, labelled box for the coin cells"] },
    safety:["Coin (button) cells are dangerous if swallowed — count out and count back; keep in a lidded box; never send home.","LEDs + coin cells only: never connect to sockets or larger batteries.","Scissors rules."],
    hononga:"Māori were brilliant engineers: **waka hourua** (voyaging canoes), **pā** defences and **pātaka** (raised storehouses) were designed for real needs, tested in real conditions and improved over generations. Ask: what was the ‘brief’ for a voyaging waka?",
    paths:[
      { id:"A", name:"The Scribe · Designer", product:"Three Design Sketches", steps:["Sketch 3 different torch ideas.","Label the parts and materials.","Choose one, and explain which specifications it meets best."], flying:"Add a ‘version 2’ improvement to your chosen design." },
      { id:"B", name:"The Builder", product:"Jaguar-Eye Torch", steps:["Follow the build steps on screen.","Make your torch light with a working push switch.","Make it hands-free with a card ring."], flying:"Add a second LED. Does it still work? Why or why not?" },
      { id:"C", name:"The Messenger · Tester", product:"Test Report for Mateo", steps:["Test three classmates' torches against our 3 specifications.","Give each a ‘warm’ (what works) and a ‘cool’ (what to improve).","Report your findings to Mateo (the class)."], flying:"Suggest a new specification Mateo forgot." }
    ],
    supportedShort:"everyone builds at least the basic LED + coin cell first; picture build steps on screen; work in pairs.",
    lens:{
      pillar:"manaaki", title:"Skill is a gift",
      look:"Look at your torch: a tiny design that solves a real problem for someone in the dark.",
      ref:"Exodus 31:1–5",
      paraphrase:"The Lord said, “I have chosen Bezalel and filled him with the Spirit of God, with wisdom, understanding, knowledge and all kinds of skills — to make artistic designs and to work in all kinds of crafts.”",
      talk:[
        { q:"God gave Bezalel skill to design and make. What gifts has God given you for designing and building?", listen:"Patience, careful hands, ideas, drawing, testing, helping others, not giving up." },
        { q:"Who could your design skills help — now, or one day?", listen:"Family, people without power, people with disabilities, our community — engineering as serving others (Manaaki)." }
      ],
      live:"Write one design skill you want to **grow** this term, and **who** it could help."
    },
    clue:{ prompt:"Look closely at an LED. How many legs does it have?", answer:2, explain:"Two legs: long (+) and short (−). Clue 4 saved — Friday we break the seal!" },
    next:"Friday — Doña Rosa teaches us to draw like Maya scribes, and we break the first seal.",
    rubric:[
      { c:"Understanding the brief", code:"TE-TP",
        d:["Says what is being made.","“We're making a torch.”"],
        a:["Identifies the need, stakeholder and at least 2 specifications.","“Mateo's team needs light but their hands must stay free — it must fit on a finger and have a switch.”"],
        f:["Explains why each specification matters to the stakeholder.","“A switch saves the battery, so the torch lasts the whole dig.”"],
        i:["I can say what we're making.","I can name the need, the stakeholder and 2 specifications.","I can explain why each specification matters."] },
      { c:"Building the circuit", code:"TE-TK",
        d:["Lights the LED with help.","LED lights when the teacher positions the legs."],
        a:["Builds a working LED circuit with a switch.","Torch lights when squeezed and turns off when released."],
        f:["Troubleshoots and improves the build.","“It flickered, so I taped the short leg flatter — now it's reliable.”"],
        i:["I can light the LED with help.","I can build a torch that turns on and off.","I can fix problems and improve my torch."] },
      { c:"Explaining the system", code:"TE-TK · TE-NT",
        d:["Says it lights up.","“It glows.”"],
        a:["Explains input → process → output.","“Input = pressing; process = the battery pushes current through the LED; output = light.”"],
        f:["Explains why an LED only works one way and evaluates the design.","“The LED is a one-way gate, so the long leg must go to +. Next version: a brighter LED.”"],
        i:["I can say what it does.","I can explain input, process and output.","I can explain WHY it works and how to make it better."] }
    ],
    plan:{
      prior:"Wednesday's lesson: electricity is moving charge. Some students will have made circuits before. The design process is introduced today and used all term (Temple of Light, Weeks 9–10).",
      kc:["Managing self","Participating & contributing","Thinking"],
      sequence:[
        ["0–6","Field Transmission","Mateo's request; Glyph Check; LI/SC; coin-cell safety.","Recall Wednesday; repeat the safety rules."],
        ["6–18","Excavate","Design Process wheel; Mateo's brief (need, stakeholder, specifications); LED Lab (one-way gate, closed loop); build steps.","Identify specifications; predict when the LED lights."],
        ["18–38","Choose Your Path","Count out coin cells. Roles: Designer / Builder / Tester. Everyone builds a basic LED + cell.","Design, build, test."],
        ["38–45","Through the Lens","Exodus 31:1–5 — four moves.","Discuss; name a skill to grow."],
        ["45–50","Decode & Exit","Glyph Clue 4; COUNT COIN CELLS BACK IN; self-assess.","Return all cells; self-assess."]
      ],
      diff:{
        supported:"Pairs build together; picture-based build steps; LED legs pre-bent; teacher check-in at step 2.",
        esol:"Visual step cards; key-word labels on real parts; demonstrate before explaining.",
        learning:"Larger LEDs (10 mm) for fine-motor needs; tape pre-cut; option to test (Path C) rather than build.",
        flying:"Second LED (series vs parallel preview); justify design choices against specs; design a better switch."
      },
      assess:{
        lookFor:["Names need, stakeholder and specifications","A working circuit with a switch","Uses input/process/output language"],
        evidence:["Photos of torches and sketches","Test reports","Exit self-assessment"]
      },
      inquiry:["Did every coin cell come back? (Record the count.)","Who understood the LED as one-way? Revisit in Week 3 circuits.","How well did students use the brief to judge designs?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"mateo", meta:"Chamber entrance",
        msg:"Good news: you understand charge now. Bad news: the chamber is **pitch black**. I need each of you to design an emergency torch — **small, light, safe and hands-free**, so our team can work in the chamber with both hands. Think like an engineer!",
        notes:[["SAY","Read the message."],["ASK","“Why does Mateo need it to be hands-free?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:"real", qs:[
          { q:"What charge does an electron have?", a:"Negative (−)." },
          { q:"Like charges… attract or repel?", a:"Repel! Opposite charges attract." },
          { q:"What is lightning?", a:"A giant static discharge — a spark between charged clouds and the ground." }],
        notes:[["SAY","Whiteboards; show on 3."],["CLICK","→ flips each card."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and SC."]] },
      { type:"safety", phase:"transmission", fs:"real", title:"Engineers' safety rules", items:[
          { icon:"🪙", t:"Coin cells: count out, count back", d:"They can badly hurt someone if swallowed. Never in your mouth; never taken home." },
          { icon:"💡", t:"Small parts only", d:"LEDs and coin cells only. Never connect to sockets or big batteries." },
          { icon:"✂️", t:"Tools with care", d:"Scissors stay low and closed when walking." }],
        notes:[["SAFETY","This one is serious: swallowed button batteries can cause severe internal burns within hours. Count them out and back in, and record the count."],["ASK","“Why might a coin cell be especially dangerous to a little brother or sister?”"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"How engineers work", title:"The Design Process", ix:"designwheel",
        notes:[["CLICK","Press ‘Next stage’ through all 7 stages. Each shows how it applies to Mateo's torch."],["SAY","“Engineers don't just build — they find the need, plan, test and improve. It's a loop: version 2 is always better than version 1.”"],["ASK","“Which stage do you think people skip most often?” (Usually testing or improving!)"]] },
      { type:"brief", phase:"excavate", fs:"story", title:"Mateo's brief: an emergency torch",
        stakeholder:"Mateo and the camp team, working inside a dark stone chamber.",
        need:"Light to work by — while keeping **both hands free** to handle the codex.",
        specs:["Fits on a finger (hands-free)","Has a switch — on only when needed","Uses only safe, small parts (LED + coin cell)"],
        notes:[["SAY","“A brief tells us WHO it's for, WHAT the need is, and the SPECIFICATIONS — must-haves we can test.”"],["ASK","“How could we TEST each specification?”"],["LISTEN","Put it on a finger; press the switch on/off; check the parts list."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"The science inside", title:"How an LED works", ix:"ledsim",
        notes:[["CLICK","Press the switch: light! Then flip the LED: no light. Flip back."],["SAY","“An LED is a one-way gate. The LONG leg goes to + (the side of the coin cell with writing).”"],["SAY","“The current needs a complete loop — a closed circuit — from the battery, through the LED, and back.”"],["ASK","“What's the input? the process? the output?”"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Build guide", title:"The Jaguar-Eye torch", ix:"torchbuild",
        notes:[["CLICK","Step through all 5 steps now; leave this slide up during Path time for builders (press ← to return from the path board)."],["NOTE","Common problem: LED doesn't light → flip the coin cell, or press the legs flatter onto the cell."],["PACE","Aim to start paths at minute 18."]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAFETY","Count out the coin cells now. Write the number on the board."],["SAY","“Everyone builds at least a basic LED + coin cell. Then choose: Designer, Builder or Tester.”"],["CLICK","Start the timer."],["NOTE","Ask: “Which specification does your torch meet? How do you know?”"]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","→ reveals each move."],["SAY","Read Exodus 31:1–5. Bezalel was chosen to design and build the Tabernacle — skill as a gift from God."],["ASK","Use both questions."]] },
      { type:"decode", phase:"decode", fs:"story",
        notes:[["SAFETY","Before the clue: COUNT ALL COIN CELLS BACK INTO THE BOX."],["ASK","“How many legs does an LED have?” (2)"],["CLICK","2 dots → Check."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess; store torches for the gallery."],["CLICK","C = cacao beans."]] }
    ]
  };

  /* ======================= FRIDAY · ART ======================= */
  const fri = {
    id:"w01-fri", week:1, day:"fri", subject:"art", duration:50,
    title:"Glyph Sketching & Making the Codex", guide:"rosa",
    codes:["VA-UC","VA-PK","VA-DI"],
    coverage:"Visual Arts (NZC 2007, Level 3): understanding art in context (Maya writing and books); developing practical knowledge (observational drawing, book construction); developing ideas from the study of artists' work.",
    li:"We are learning to observe and draw Maya glyphs, and to construct a screenfold codex book.",
    sc:["I can explain what a codex is and how it was made.","I can draw a glyph using careful observation of shape, line and outline.","I can fold a neat screenfold book."],
    vocab:[
      { w:"glyph", say:"glif", def:"a sign or symbol used in writing" },
      { w:"codex", say:"KOH-deks", def:"a hand-made book; Maya codices were folded like a fan" },
      { w:"screenfold", def:"a book folded back and forth like a concertina" },
      { w:"amate", say:"ah-MAH-teh", def:"paper made from the inner bark of fig trees" },
      { w:"cartouche", say:"kar-TOOSH", def:"the frame drawn around a glyph" },
      { w:"observation", def:"looking closely and carefully before drawing" },
      { w:"contour line", def:"a confident outline that shows the edge of a shape" }
    ],
    prep:{ min:10, items:["A3 paper or thin card cut in half lengthwise — 2 strips per student","B / 2B pencils and erasers","Glue sticks","Rulers"] },
    safety:["Scissors rules; craft knives are teacher-only."],
    hononga:"Before writing on paper, Māori recorded knowledge in **whakairo** (carving), **tukutuku** and **kōwhaiwhai** patterns, and in memory through whakapapa and waiata. Ask: what does it mean to ‘read’ a carving? (Explore the idea of recording meaning in art; avoid copying sacred Māori designs.)",
    paths:[
      { id:"A", name:"The Scribe", product:"Faithful Copy", steps:["Choose a glyph: K'in, Ik', Ajaw or B'ahlam.","Draw it large on your cover panel — light lines first.","Go over the outline firmly, then add the inner details."], flying:"Add tonal shading so it looks carved in stone." },
      { id:"B", name:"The Builder", product:"A ‘Glyph of Me’", steps:["Choose a main sign: something you love.","Add an affix: your team animal, small, on the left or top.","Draw it inside a cartouche on your cover."], flying:"Write 2 sentences explaining what each part of your glyph means." },
      { id:"C", name:"The Messenger", product:"Scribe's Teaching Card", steps:["Draw one glyph step by step in 4 boxes.","Write one instruction under each box.","Teach a partner using only your card."], flying:"Test it: can your partner draw the glyph with no extra help?" }
    ],
    supportedShort:"trace over the projected glyph first; use the draw-along at your own pace; partner folding.",
    lens:{
      pillar:"manaaki", title:"The work of our hands",
      look:"Look at the scribes' work: careful lines, patient painting, books folded with skill. Maya scribes were respected, gifted people.",
      ref:"Psalm 90:17",
      paraphrase:"May the favour of the Lord our God rest on us; establish the work of our hands — yes, establish the work of our hands.",
      talk:[
        { q:"What does careful, beautiful work say about the person who made it?", listen:"They cared, took time, valued the people who would read it, used their gifts well." },
        { q:"How could your codex this term honour God and others?", listen:"Doing our best; honesty; respecting the culture we learn from; making something that blesses others." }
      ],
      live:"Gallery walk: give one classmate a **specific, kind** compliment about their glyph."
    },
    clue:{ prompt:"Folio Seal: add the four Glyph Clues from Monday to Thursday.", answer:8, explain:"2 + 2 + 2 + 2 = 8 → the first seal breaks." },
    next:"Week 2 — Children of Maize.",
    rubric:[
      { c:"Context", code:"VA-UC",
        d:["Names who made codices.","“The Maya made books.”"],
        a:["Explains what a codex is and how it was made.","“A codex was folded bark paper, coated in lime plaster and painted. Only four survive.”"],
        f:["Explains why codices matter and what was lost.","“Most were burned after the Spanish arrived, so the four that survive are precious evidence of Maya knowledge.”"],
        i:["I can say who made codices.","I can explain what a codex is and how it was made.","I can explain why codices are so important."] },
      { c:"Observational drawing", code:"VA-PK",
        d:["Glyph is small; lines faint or uneven.","A small K'in glyph with sketchy, broken outline."],
        a:["Glyph fills the panel; clear outline; inner details correct.","A large Ajaw with a firm cartouche, both eyes and the mouth in the right places."],
        f:["Adds tone or creates an original glyph that combines elements meaningfully.","A ‘glyph of me’: a soccer-ball main sign with a quetzal affix, shaded to look carved."],
        i:["My glyph is small and the lines are faint.","My glyph is large, with a clear outline and the right details.","My glyph is shaded or original — and I can explain it."] },
      { c:"Craft construction", code:"VA-PK",
        d:["Folds are uneven; panels different sizes.","Strip folded but panels overlap and edges don't line up."],
        a:["Neat screenfold with roughly equal panels.","10 panels, creases pressed flat, edges lined up."],
        f:["Precise construction plus a thoughtful cover design.","Measured panels, crisp folds, and a decorated border that frames the glyph."],
        i:["My folds are uneven.","My codex has neat, equal panels.","My codex is precise and my cover is carefully designed."] }
    ],
    plan:{
      prior:"Monday introduced codices as primary sources. Students may have folded concertina books before. Observational drawing skills vary widely — the step-by-step draw-along supports everyone.",
      kc:["Managing self","Thinking","Relating to others"],
      sequence:[
        ["0–6","Field Transmission","Doña Rosa's message; week-review Glyph Check; LI/SC.","Recall the week's learning."],
        ["6–18","Excavate","The four surviving codices; how a codex folds; glyph blocks; Glyph Draw-Along (model K'in).","Observe; draw along on scrap paper."],
        ["18–40","Choose Your Path (22 min)","Guided fold of the codex (5 min) → paths. Roam: “Look 80%, draw 20%.”","Fold codex; draw glyph (A/B/C)."],
        ["40–45","Through the Lens","Psalm 90:17 — gallery walk with kind, specific feedback.","Gallery walk; compliments."],
        ["45–50","Folio Seal","Combine Mon–Thu clues; break Seal I; Collector's intercept; exit.","Solve the seal; discuss the intercept."]
      ],
      diff:{
        supported:"Trace the projected glyph; enlarged glyph print-outs; pre-measured strips with fold lines; partner folding.",
        esol:"Demonstrate every step visually; vocabulary with pictures (cartouche, contour).",
        learning:"Self-paced draw-along steps; thicker pencils/markers for fine-motor needs; fewer, larger panels allowed.",
        flying:"Tonal shading; original ‘glyph of me’ with explanation; research the Dresden Codex Venus pages."
      },
      assess:{
        lookFor:["Explains what a codex is and how it was made","Glyph fills the panel with a confident outline and correct details","Neat screenfold with equal panels"],
        evidence:["Codex covers (photograph)","Teaching cards","Gallery-walk feedback","Exit self-assessment"]
      },
      inquiry:["Which students struggled with the fold? Pre-fold or use templates next time.","Did the draw-along help confidence in observational drawing?","How did students respond to the Collector's question — useful for Week 2 discussion?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"rosa", meta:"Restoration tent",
        msg:"Buenos días, children. I am Rosa Ajpop. I weave, and I restore old paintings. Before we can restore the Fifth Codex, **your hands must learn what the scribes' hands knew**. Every great artist begins by looking slowly — so today, we look.",
        notes:[["SAY","Read the message. Doña Rosa is K'iche' Maya (🟡 fictional) — Maya people today still weave and paint."],["ASK","“What do you think she means: ‘looking slowly’?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:"real", title:"This week's big ideas", qs:[
          { q:"What is a primary source? Give an example.", a:"Made at the time by people who were there — a stela, a codex." },
          { q:"Tikal is at about 17°N, 90°W. Which hemisphere?", a:"The Northern (and Western) Hemisphere." },
          { q:"Which leg of an LED goes to the + side?", a:"The long leg." }],
        notes:[["SAY","A whole-week review. Whiteboards; show on 3."],["CLICK","→ flips each card."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and SC."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"The surviving Maya books", title:"Only four survived", h:"560px", cards:[
          { big:"Dresden", t:"The Dresden Codex", d:"In Dresden, Germany. About 3.5 m long when unfolded. Famous for its astronomy tables that track the planet **Venus**." },
          { big:"Madrid", t:"The Madrid Codex", d:"In Madrid, Spain. The longest — almanacs about farming, hunting, weaving and rain." },
          { big:"Paris", t:"The Paris Codex", d:"In Paris, France. Badly worn — rediscovered in 1859 in a basket of old papers!" },
          { big:"Mexico", t:"Maya Codex of Mexico", d:"In Mexico City. Long doubted, but tested and shown to be genuine in 2016 — possibly the oldest surviving book of the Americas." }],
        notes:[["SAY","“Hundreds — maybe thousands — of Maya books once existed. After the Spanish conquest, most were destroyed. Only four are known today. That's why the Fifth Codex in our story would be so precious.”"],["NOTE","We'll explore why the books were burned (and who tried to save Maya knowledge) in Week 3 History — handle with honesty."],["ASK","“Which one would you most like to see? Why?”"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"How a codex works", title:"The screenfold book", ix:"codexobject",
        notes:[["CLICK","Press Unfold, then Fold."],["SAY","“Codices were made from amate — the inner bark of fig trees, pounded flat — then coated with white lime plaster so the colours stood out. Amate paper is still made in Mexico today.”"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Reading the signs", title:"How a glyph block is built", ix:"glyphanatomy", paper:true,
        notes:[["CLICK","Hover over or tap each part: main sign, prefix, superfix, postfix."],["SAY","“Maya writing mixes word signs and syllable signs, packed into blocks. Scribes were highly trained — writing was an art.”"],["NOTE","Full decipherment story comes in Week 3."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Draw along with me", title:"Glyph Draw-Along", ix:"drawalong", paper:true,
        notes:[["SAY","“These are simplified teaching drawings based on real Maya day-signs.”"],["CLICK","Choose K'in. Press ‘Draw step’ one step at a time. Students draw each step on scrap paper with you."],["SAY","Narrate: “Big shape first… now the inside shapes… now tiny details.”"],["PACE","Model one glyph only (about 4 minutes)."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Draw like a scribe", title:"Look 80%, draw 20%", paper:true, visual:{ svg:() => FC.art.glyphSVG("ajaw") },
        bullets:["Your **eyes** do most of the work. Look, then draw.","Draw **light** first — you can always go darker.","**Big shapes first**, then inside shapes, then tiny details.","Use a **contour line**: one confident outline, not lots of hairy little strokes."],
        notes:[["SAY","Demonstrate a ‘hairy line’ vs a confident contour line on the whiteboard."],["ASK","“Why might drawing light first help?”"]] },
      { type:"interactive", phase:"paths", fs:"real", kicker:"Everyone · 5 minutes", title:"Make your codex", ix:"foldguide", paper:true,
        notes:[["CLICK","Step through the 5 folds with the class, doing each step together."],["NOTE","Two A3 halves glued end-to-end ≈ 83 cm → 10 panels of about 8.3 cm. Pre-cut strips save time."],["SAY","“Panel 1 is your cover. Each Friday this term you'll fill a new page — by Week 10 you'll have your own codex!”"]] },
      { type:"paths", phase:"paths", fs:null, minutes:22,
        notes:[["SAY","Students choose a path for their cover panel."],["CLICK","Start the 22-minute timer. Return to the Draw-Along slide (←) if students want to see the steps again."],["NOTE","Coach: “Look 80%, draw 20%.” “Is your glyph filling the panel?”"]] },
      { type:"lens", phase:"lens", fs:null, title:"The work of our hands",
        notes:[["CLICK","→ reveals each move."],["SAY","Read Psalm 90:17. Then do a 3-minute gallery walk: codices open on desks."],["ASK","Model a specific, kind compliment: “I like how your outline is one confident line.”"]] },
      { type:"folioseal", phase:"decode", fs:"story",
        notes:[["SAY","“Four lessons. Four clues. Let's see if they open the first seal.”"],["CLICK","Tap each ‘?’ tile to reveal a clue (they're already shown if solved during the week). Add them: 2 + 2 + 2 + 2 = 8. Build 8 on the keypad (one bar ▬ + three dots ●) → ‘Break the seal’."],["SAY","Read the reveal: the ceiba tree and the maize glyph hinting at next week."]] },
      { type:"intercept", phase:"decode", fs:"story",
        msg:"To the expedition team: I hear you have broken the first seal. How sweet. Everyone has a price — a new phone? A holiday? Name yours, and the codex comes to me. — C.",
        ask:"Is everything for sale? What makes something too precious to sell?",
        notes:[["SAY","Read it in a smooth, slightly sinister voice (have fun!)."],["ASK","Take a few answers; don't resolve it — this question runs all term and returns in Week 10."],["LISTEN","Heritage belongs to a people; some things have more than money value; honesty; stewardship."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess; store codices safely (they're used every Friday)."],["CLICK","C = cacao beans. Celebrate the week!"]] }
    ]
  };

  FC.WEEKS[1] = {
    n:1,
    story:"A storm cracks open a hidden chamber in the Petén rainforest and the Fifth Codex is found. This week the team meets the expedition: historians find out who made the codex, navigators learn to read the map, and engineers start to restore the power after a lightning strike. On Friday, the four clues of the week break the first jade seal.",
    hononga:"Whakapapa, pūrākau, whakairo and waiata as ways of holding history (Mon); Polynesian wayfinding and the voyage to South America (Tue); Tāwhirimātea and different ways of explaining lightning (Wed); Māori engineering — waka hourua, pā, pātaka (Thu); recording meaning in carving and patterns (Fri). Check local framing with your Māori lead / Ngāi Tahu rūnanga.",
    seal:{
      answer:8,
      instruction:"Add up the four **Glyph Clues** from Monday to Thursday. Build the total as a Maya numeral (▬ = 5, ● = 1) to break the jade seal.",
      reveal:"🟡 **Folio I unsealed:** a great ceiba tree — roots in the water below, branches in the sky. In Maya thought the ceiba linked the layers of the world. In the corner… a **maize** glyph. Next week: *Children of Maize*.",
      art:() => { const v = FC.art.ceibaFolio(); v.setAttribute("style", "width:100%;height:100%"); return v; }
    },
    lessons:[mon, tue, wed, thu, fri]
  };
})(window.FC);
