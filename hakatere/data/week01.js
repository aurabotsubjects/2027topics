/* ==========================================================
   WEEK 1 — MAP SHEET I · THE CHEST
   Each lesson = slides (with scripted notes) + plan + rubric.
   Notes: [KEY, text]  KEY = SAY ASK LISTEN IF CLICK TALK DEEPER PACE SAFETY WAIT NOTE TIKANGA
   Facts are sourced in data/sources.js (tags match blueprint §18).
   ========================================================== */
(function(BM){
  "use strict";

  /* ======================= MONDAY · HISTORY ======================= */
  const mon = {
    id:"w01-mon", week:1, day:"mon", subject:"history", duration:50,
    title:"Whose Place? Names, Sources & Local History", guide:"nell",
    codes:["SS-H","SS-P","ANZH","TR"],
    coverage:"Y6 History practices (2027 Social Sciences, Years 4–6): using primary and secondary sources; perspectives. Aotearoa New Zealand's Histories: local context and tūrangawaewae. Introduces Y6 “differing views on land”.",
    li:"We are learning what local history is, and how historians find out about the past of a place.",
    sc:["I can explain that places can have more than one name and story.","I can tell the difference between a primary and a secondary source.","I can name one local source that helps us learn about Hakatere."],
    vocab:[
      { w:"local history", def:"the story of one place: the people who lived there first, the people who came later, and us" },
      { w:"tākata whenua", say:"TAH-kah-tah FEH-noo-ah", def:"people of the land: the first people of a place (Kāi Tahu form of tangata whenua)" },
      { w:"Hakatere", say:"ha-ka-te-re", def:"the Māori name of our river, also used for the district and Hakatere Marae" },
      { w:"source", def:"anything that gives us information about the past" },
      { w:"primary source", def:"made at the time, by people who were there" },
      { w:"secondary source", def:"made later, about the past" },
      { w:"archive", def:"a place where old documents, maps and photos are kept safe" },
      { w:"heritage", def:"things from the past that we value and pass on: buildings, places, stories, names" },
      { w:"perspective", def:"a point of view: how one person or group sees something" }
    ],
    prep:{ min:0, items:["Field Journals out on desks","Optional: bring an old family object or photo to show as a ‘primary source’","Optional (D3): load an approved recording of local place names for the Say it right slide"] },
    safety:[],
    tikanga:["Pronounce Hakatere and other place names carefully (short, even vowels). Practise with the class; use a local recording only if your Māori lead has approved it.","Kāi Tahu history is taught from Kāi Tahu sources. Nell (a fictional character) never speaks for mana whenua.","Ask your Māori lead about the meaning of Hakatere before sharing a translation."],
    hononga:"**Remembering in kōrero and whakapapa.** For most of human history people did not write. Kāi Tahu remembered place names, trails and food places in kōrero and whakapapa, and some were later written down, like the names Hori Kerei Taiaroa recorded in 1880. Today we learn that Hakatere is the name of our river, our district and Hakatere Marae. Check framing with your Māori lead and Te Rūnanga o Arowhenua (D3).",
    paths:[
      { id:"A", name:"The Recorder", product:"Place-name Detective Report", steps:["Choose **3 local places** with two names (e.g. Hakatere, Te Kiekie, Ōpuke).","For each, write **both names** and **who named it** (if we know).","Add **one question** to research about each name, and where you would look."], flying:"Why might renaming a place matter to the people who named it first?" },
      { id:"B", name:"The Maker", product:"“My Place” Mental Map", steps:["Draw a map from **home to school** from memory.","Add **5 landmarks** (a river, a bridge, a building, a farm, a mountain you can see…).","Use a key: colour the **natural** features one colour and the **built** ones another. Label any place with two names."], flying:"Add one place on your map that someone else in your family might name differently. Why?" },
      { id:"C", name:"The Storyteller", product:"Oral History Interview Plan", steps:["Plan an interview with an **older family member** about how our district has changed.","Write **5 open questions** (who, what, when, where, why, how). Avoid yes/no questions.","Practise asking them with a partner, and plan how you'll record the answers (notes or audio, with permission)."], flying:"How will you check what your interviewee remembers against another source?" }
    ],
    supportedShort:"name-card bank on the board, sentence starters (“This place is called… because…”), the map from slide 6 to copy from, partner pairing.",
    lens:{
      pillar:"mohio", title:"Stones that remember",
      look:"Look again at our map sheet: one river, two names. Every name carries a story.",
      ref:"Joshua 4:1–7",
      paraphrase:"When Israel crossed the Jordan, Joshua told twelve men to carry stones from the riverbed and set them up. “In the future, when your children ask, ‘What do these stones mean?’, tell them what the Lord did here.”",
      talk:[
        { q:"Why did God want His people to remember their history and tell it to their children?", listen:"So they would remember who they are and God's faithfulness; history shapes who we become." },
        { q:"What ‘stones’ help us remember Hakatere's story?", listen:"Names, old buildings, the marae, the museum, family photos, older people's memories." }
      ],
      live:"In your Field Journal, finish: **“One story about my place I want to remember is…”**"
    },
    clue:{ prompt:"The river was renamed around 1849. The town was surveyed in 1864. How many years apart is that?", answer:15, explain:"1864 − 1849 = 15. Trig Clue 1 is saved for Friday's Survey Seal!" },
    next:"Tuesday — Sam and Flint need map readers who can follow the river from the mountains to the sea.",
    rubric:[
      { c:"More than one name", code:"ANZH · TR",
        d:["Knows the river has another name.","“It's also called Hakatere.”"],
        a:["Explains both names and where they came from.","“Hakatere is the Māori name. Ashburton was given by a surveyor in about 1849, after Lord Ashburton.”"],
        f:["Explains why naming matters.","“Changing a name can make people's history invisible, so using both names honours everyone.”"],
        i:["I know our river has two names.","I can explain both names and where they came from.","I can explain why names matter to the people who gave them."] },
      { c:"Primary vs secondary", code:"SS-P",
        d:["Sorts some sources with help.","Puts the cottage and the museum panel in the right boxes with prompting."],
        a:["Defines both, with a local example of each.","“The 1862 stone cottage is primary. The museum panel is secondary.”"],
        f:["Explains how oral history is a source and how to check it.","“A kaumātua's story is a real source. A historian compares it with other sources, like a sketch from 1848.”"],
        i:["I can sort some sources with help.","I can explain primary and secondary, with a local example of each.","I can explain how oral history is a source and how I'd check it."] },
      { c:"Local sources", code:"SS-P",
        d:["Names a place to find out.","“The library.”"],
        a:["Names a specific local source and what it could tell us.","“The Ashburton Museum archive could show old photos of the town.”"],
        f:["Suggests comparing two sources to check a claim.","“I'd check a family story against the museum's photos and an old map.”"],
        i:["I can name a place to find out.","I can name a local source and say what it could tell us.","I can explain how I'd compare two sources to check a fact."] }
    ],
    plan:{
      prior:"Students will know local places by their everyday names; some will know Hakatere from the marae, school or signs. Some may have whānau links to Hakatere Marae, local farms or long-time district families — future experts. Many will not yet know the words primary and secondary.",
      kc:["Thinking","Using language, symbols & texts","Relating to others"],
      sequence:[
        ["0–6","Field Note","Play the opening (click through 5 moments). Read Nell's note. **Trig Check** prior knowledge with thumbs up, then add ideas to the **Map Wall** (kept until Week 10).","Watch, predict, share what they already know about our place."],
        ["6–18","Survey","Field Protocol (1 min); LI/SC. **Name Layers** map; **Say it right**; turn & talk on two names; local timeline; **Source Sorter** with class voting.","Turn & talk; vote on each source; practise place names."],
        ["18–38","Choose Your Path","Introduce A/B/C (2 min). Roam with the rubric; prompt: “How do we know?”","Choose a path; create their product."],
        ["38–45","Through the Lens","Joshua 4:1–7 — four moves.","Discuss; write a journal sentence."],
        ["45–50","Trig Clue & Exit","Trig Clue 1 (answer 15); self-assessment; wheat sheaves.","Work out the clue; self-assess."]
      ],
      diff:{
        supported:"Name-card bank; sentence starters (“This place is called… because…”); partner with a confident reader; draw and label instead of sentences.",
        esol:"Visual glossary on screen; key words with pictures (source, map, name); rehearse orally with a partner; home-language place names welcome — do they have a name for their home town in another language?",
        learning:"Chunked 3-step path cards; choice of response mode (draw / say / write); movement during source voting; calm screen available.",
        flying:"Flying challenge on every path; “Is a primary source always reliable? Who made it, and why?”"
      },
      assess:{
        lookFor:["Explains both names of the river and where they came from","Accurate use of ‘primary’ and ‘secondary’ with a local example","Names a specific local source (museum, cottage, marae, family)"],
        evidence:["Path products (photograph)","Source Sorter votes","Map Wall (baseline for Week 10)","Exit self-assessment"]
      },
      inquiry:["Who has family stories to share (a future expert)? Any whānau links to Hakatere Marae or local farms?","Who struggled with primary vs secondary? Revisit in Tuesday's Trig Check.","What did the Map Wall show about what students already know about their place?"]
    },
    slides:[
      { type:"cinematic", phase:"transmission", fs:"story", ix:"opening", title:"Opening: the chest in the gravel",
        notes:[["NOTE","Dim the lights if you can. This is the start of the whole term — make it feel like an event."],["CLICK","Press → to move through 5 moments: flood · the digger · the chest · inside the chest · the title."],["SAY","Read each caption slowly, or let students read it."],["ASK","After the chest opens: “What do you think the field book is? Why would someone bury maps in a tin chest?” ⏳ wait 5 seconds."],["PACE","About 2 minutes."]] },
      { type:"transmission", phase:"transmission", fs:"story", guide:"nell", meta:"Heritage centre · conservation room",
        msg:"Kia ora, team. I'm Nell Baird. I restore old paper for a living, and I've never seen anything like this. Look at the first sheet: **two names for one river**. “Ashburton” in ink, “Hakatere” in pencil. Before we restore anything, we need to understand **whose stories are on this map**. I need historians.",
        notes:[["SAY","Read the message aloud (it types itself — click the text to show it all)."],["NOTE","🟡 Nell is fictional. Point out the yellow ‘Field Book story’ badge (bottom right) and the green ‘Real evidence’ badge on later slides: “All term, watch these badges. Part of being a good historian is knowing what's story and what's evidence.”"],["TIKANGA","Nell never speaks for mana whenua. Kāi Tahu history this term comes from Kāi Tahu sources."]] },
      { type:"glyphcheck", phase:"transmission", fs:null, kicker:"Trig Check · what do we know already?", title:"Thumbs up if you know…",
        qs:[ { q:"…the Māori name of our river?", a:"Hakatere — we'll learn its story today." }, { q:"…which mountains you can see from school?", a:"Te Kiekie / Mt Somers, Ōpuke / Mt Hutt — and the Alps behind them." }, { q:"…the oldest building you know in our district?", a:"Hold that thought: old buildings are sources!" } ],
        notes:[["ASK","Read each question. Thumbs up / sideways / down. Then click to flip."],["NOTE","This week's Trig Check is about prior knowledge; from Tuesday it recalls the day before."],["LISTEN","Accept every answer; don't correct yet. Put interesting answers on the Map Wall next."]] },
      { type:"glyphwall", phase:"transmission", fs:null, title:"What do you know about our place?",
        notes:[["ASK","“What do you already know — or think you know — about the history of our place? Anything at all.” ⏳ 10 seconds of thinking time."],["CLICK","Type each idea and press Enter. Notes can be dragged around."],["LISTEN","The river, floods, farms, irrigation, the marae, the museum, old buildings, Mt Hutt skifield, family stories."],["NOTE","The Map Wall is saved on this computer. We'll come back to it in Week 10 to see how far we've come."]] },
      { type:"protocol", phase:"transmission", fs:null,
        notes:[["SAY","“Field teams have rules so everyone stays safe and the work is good. Here are ours for the whole term.”"],["ASK","“Why is ‘Respect people and places’ first when we study the history of our own place?”"],["PACE","1 minute."]] },
      { type:"lisc", phase:"transmission", fs:null,
        notes:[["SAY","Read the learning intention, then each success criterion. “By the end of today you'll be able to say ‘I can…’ to these.”"],["NOTE","Developing · Achieved · Flying are how we check our learning all term."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Two names, one river", title:"Peel back the names", ix:"namelayers",
        notes:[["CLICK","Click each name card to peel back the older name. Then press ‘Peel back all’ to show the older names on the map (press again for older names only)."],["SAY","“The river's Māori name is Hakatere. Around 1849, Joseph Thomas, the Canterbury Association's chief surveyor, named it the Ashburton, after Lord Ashburton, a member of the Association.”"],["SAY","“Hakatere is still used for the river, the district and Hakatere Marae, which took its name from the river.”"],["NOTE","Sources: Wikipedia (starting point) and Te Ara's 1966 encyclopaedia name William Bingham Baring, Lord Ashburton. A few websites name a different Baring — a good example of why historians check more than one source."]] },
      { type:"sayitright", phase:"excavate", fs:"real", title:"Say our place names well",
        words:[ { w:"Hakatere", say:"ha · ka · te · re", mean:"our river, district and marae" }, { w:"Te Kiekie", say:"te · kie · kie", mean:"Mt Somers" }, { w:"Ōpuke", say:"ō (long) · pu · ke", mean:"Mt Hutt" }, { w:"Ō Tū Wharekai", say:"ō · tū · wha · re · kai", mean:"the Ashburton Lakes" } ],
        note:"Short, even vowels; a macron (ā, ē, ī, ō, ū) means the vowel is **long**. Practise together slowly, then at normal speed.",
        notes:[["TIKANGA","Practise slowly together: ha-ka-te-re, with short even vowels. If your Māori lead has approved a local recording, play it first (D3)."],["CLICK","Tap a card to show what it names."],["SAY","“Saying a name well is a way of showing respect to the people who gave it.”"]] },
      { type:"discussion", phase:"excavate", fs:"real", kicker:"Turn & Talk", q:"Why might a place have **two names**? Whose names are on most of our road signs?", sub:"Think about who arrived first, who came later, and who made the maps.", talk:45,
        notes:[["TALK","Start the 45-second talk. Bring back with “3, 2, 1… eyes on me.”"],["LISTEN","Different people arrived at different times; names tell stories; mapmakers chose the names on the maps; some names were replaced and some were kept."],["IF","“The English name is the real one” → “Both are real. Hakatere was the name first, and today both are official. What do we lose if one disappears?”"]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Big idea", title:"What is *local history*?",
        body:"Local history is the story of **this place**: the people who lived here first, the people who came later, and **us**.\n\nHistorians can't time-travel. They find out about the past from **sources** — and they always ask: *How do we know?*",
        visual:{ map:{ theme:"paper", labels:"both", relief:true }, size:640 },
        notes:[["SAY","Read the definition. “This term, our place is the topic. You are the historians.”"],["ASK","“If someone in 100 years wanted to know about our town today, what sources could they use?”"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"When?", title:"Hakatere through time", ix:"localtimeline",
        notes:[["CLICK","Press → to reveal each point: tākata whenua → 1848 → c.1849 → 1858 → 1862 → 1863–64 → today."],["SAY","“Waitaha, Kāti Māmoe and Kāi Tahu are the tākata whenua of Hakatere.” (Source: the Arowhenua cultural narrative.)"],["DEEPER","At the end: “What's missing from a timeline like this? Whose stories are hard to fit on it?”"],["LISTEN","Women's stories, children's, everyday life, stories passed on by speaking, newer families, the land and river themselves."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"How do we know?", title:"Sort our sources", ix:"sourcesorter",
        notes:[["SAY","“A primary source was made at the time by people who were there. A secondary source was made later, about the past.”"],["CLICK","Hold up each card. Class votes (hands: primary / secondary / oral), then drag it into a box."],["ASK","At the kaumātua card: “Is a story passed down through families a source? How would a historian treat it?” ⏳"],["LISTEN","Yes: oral history is a source, especially for tākata whenua, who passed on history through whakapapa, kōrero and place names. Historians compare it with other sources, just as they do with written ones."],["IF","“Only writing counts” → “For most of human history, people didn't write. Kāi Tahu remembered place names, trails and food places in kōrero and whakapapa, and some were later written down, like the names Hori Kerei Taiaroa recorded in 1880.”"]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAY","“Three paths, same learning. Choose the one that lets you show your best thinking.”"],["CLICK","Start the 20-minute timer. Roam with the rubric (Quick-Mark on a device, or the printed rubric)."],["ASK","While roaming: “How do you know? What's your source?”"],["NOTE","Path C's interview plan becomes evidence for the Week 6 Big Project (Our Place Museum Case). Print Path Cards with the 🖨 button."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Press → to reveal each move: Look closer → Open the Word → Talk it through → Live it out."],["SAY","Read Joshua 4:1–7 from the class Bible (the screen shows a paraphrase)."],["ASK","“Why did God want His people to remember their history and tell it to their children?” Then: “What ‘stones’ help us remember Hakatere's story?”"],["LISTEN","Names, buildings, the marae, the museum, older people's memories."]] },
      { type:"decode", phase:"decode", fs:"story",
        notes:[["SAY","“Every day this week ends with a Trig Clue. Surveyors fix positions from trig points; we fix ours with numbers. On Friday, the clues open the first map sheet.”"],["CLICK","Teams work it out; type the answer and press ‘Check the clue’."],["NOTE","Answer: 1864 − 1849 = 15."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","“Show me with your hand: Developing, Achieved or Flying?”"],["CLICK","C = wheat sheaves. Award for thinking, teamwork, kindness and perseverance — never for rubric levels."]] }
    ]
  };

  /* ======================= TUESDAY · GEOGRAPHY ======================= */
  const tue = {
    id:"w01-tue", week:1, day:"tue", subject:"geography", duration:50,
    title:"Reading the Land: From Mountains to Sea", guide:"sam",
    codes:["SS-G","SS-P","MA"],
    coverage:"Y5–6 geographic practices (2027 Social Sciences): maps, contour lines, scale, grid references and aerial views of our own place. Sets up Y5 tectonic hazards (Week 2–3).",
    li:"We are learning to read maps of Mid Canterbury, including contour lines, to describe the land from the mountains to the sea.",
    sc:["I can follow the Hakatere from its source to the sea on a map.","I can explain what contour lines show.","I can use a grid reference and scale."],
    vocab:[
      { w:"source (of a river)", def:"where a river begins" },
      { w:"mouth", def:"where a river reaches the sea" },
      { w:"branch", def:"one of two or more rivers that join to make a bigger river" },
      { w:"braided river", def:"a river that splits into many channels over a wide gravel bed, then joins again" },
      { w:"plains", def:"wide, flat land" },
      { w:"contour line", def:"a line on a map joining places of the same height" },
      { w:"scale", def:"how distance on a map compares to distance on the ground" },
      { w:"grid reference", def:"letters and numbers that tell you which square on a map to look in" },
      { w:"elevation", def:"height above sea level" },
      { w:"hāpua", say:"HAH-poo-ah", def:"a lagoon at a river mouth, held back by a gravel bar" }
    ],
    prep:{ min:5, items:["Field Journals","Optional: print a contour template of Te Kiekie / Mt Somers for Path B (or use the slide)","Card, scissors and glue for Path B (Paper Mountain)"] },
    safety:[],
    tikanga:["Use both names for the maunga: Te Kiekie / Mt Somers and Ōpuke / Mt Hutt.","Many iwi see maunga as ancestors. Speak about the mountains respectfully; check local kōrero with your Māori lead before teaching it."],
    hononga:"**Maunga and awa.** For many iwi, maunga and awa are part of who they are: people introduce themselves by their mountain and river. Our maps today carry both names: Te Kiekie / Mt Somers and Ōpuke / Mt Hutt. Local kōrero about these maunga belongs to mana whenua; invite it, don't invent it (D3).",
    paths:[
      { id:"A", name:"The Recorder", product:"River Field Notes", steps:["Describe the Hakatere's journey in **6 labelled stages**: source, gorge, plains, branches join, Ashburton, hāpua.","For each stage write one sentence about what the land is like there.","Use at least **three** words from the word bank (e.g. braided, plains, elevation)."], flying:"Why do rivers on the Canterbury Plains run roughly south-east?" },
      { id:"B", name:"The Maker", product:"Paper Mountain", steps:["Cut out the contour layers of Te Kiekie (or draw your own: 4–6 layers).","Stack and glue them to build a **layered card mountain**.","Label the **steep side** and the **gentle side**, and the height of the top layer."], flying:"Draw a cross-section of your mountain from north to south. Does it match your model?" },
      { id:"C", name:"The Storyteller", product:"Ranger's Radio Brief", steps:["You're Sam the ranger. A tramper is lost. Plan a **radio message** that guides them to safety.","Use **grid references** and **compass directions** (north, south-east…).","Practise and perform it in under 60 seconds."], flying:"Add a warning about the land (steep slopes, river crossings) using what the contour lines show." }
    ],
    supportedShort:"printed map with the grid, a list of the 6 stages to label, a ‘letter first, then number’ grid card, partner pairing.",
    lens:{
      pillar:"mohio", title:"I lift up my eyes to the mountains",
      look:"Look again at the mountains on our map: Mt Arrowsmith, Ōpuke, Te Kiekie, rising above the plains.",
      ref:"Psalm 121:1–2",
      paraphrase:"I look up to the mountains — where does my help come from? My help comes from the Lord, the Maker of heaven and earth.",
      talk:[
        { q:"Why might mountains make people think about God?", listen:"They're huge, beautiful, old, strong and unmoving; they make us feel small; they show God's power as Maker." },
        { q:"The psalm says help comes from the Maker, not the mountains. What's the difference?", listen:"Mountains are amazing but they are made things; the Maker is greater than what He made; we trust Him, not the mountain." }
      ],
      live:"Write Psalm 121:1–2 in your Field Journal beside a quick sketch of a mountain you can see from home or school."
    },
    clue:{ prompt:"Te Kiekie / Mt Somers is 1,688 m high. How many whole hundreds of metres is that?", answer:16, explain:"1,688 m = 16 whole hundreds (and 88 m more). Trig Clue 2 is saved for Friday!" },
    next:"Wednesday — Dr Priya Nair is waiting in a dark observatory. Bring your night eyes.",
    rubric:[
      { c:"Following the river", code:"SS-G",
        d:["Says where the river starts and ends.","“The river starts in the mountains and goes to the sea.”"],
        a:["Follows the river through its main stages using place names.","“The South Branch starts at the Ashburton Glacier, the branches join near Ashburton, and it reaches the sea at the hāpua.”"],
        f:["Links the river's shape to the land.","“The plains slope gently toward the sea, so the river runs south-east and spreads out into braids.”"],
        i:["I can say where the river starts and ends.","I can follow the Hakatere from source to sea, naming the stages.","I can explain how the land shapes the river."] },
      { c:"Reading contours", code:"SS-G · MA",
        d:["Knows contour lines show something about height.","“The lines show the mountain.”"],
        a:["Explains that contour lines join places of equal height, and that close lines mean steep.","“Close contours on Te Kiekie's south side mean steep slopes.”"],
        f:["Uses contours to predict or compare.","“The north side would be easier to climb because the lines are far apart.”"],
        i:["I know contour lines are about height.","I can explain what contour lines show, and find steep and gentle slopes.","I can use contours to compare routes or predict what the land is like."] },
      { c:"Grid & scale", code:"SS-P · MA",
        d:["Finds a grid square with help.","Finds D2 with a partner."],
        a:["Gives and uses grid references and the scale bar.","“Methven is at E3. Ashburton to Methven is about 31 km.”"],
        f:["Combines grid, scale and direction to describe a route.","“From E5 go north-west about 31 km to Methven at E3.”"],
        i:["I can find a grid square with help.","I can give a grid reference and measure a distance with the scale.","I can describe a route using grid, scale and direction."] }
    ],
    plan:{
      prior:"Students have used simple maps and compass points. Most will not have used contour lines; some will know local places from family trips (Mt Hutt skifield, the lakes, the river mouth).",
      kc:["Thinking","Using language, symbols & texts"],
      sequence:[
        ["0–6","Field Note","Sam & Flint's message. Trig Check on Monday (two names; one primary source; what is local history?). LI/SC.","Recall Monday's learning; predict."],
        ["6–18","Survey","**Source to Sea** flyover; stages of the river; **Contour Builder** (stack → flatten → slice); grid & scale explained; **Grid & Scale game**.","Follow the river; read contours; give grid references; measure."],
        ["18–38","Choose Your Path","Introduce A/B/C. Roam: “Show me on the map.”","Field notes / paper mountain / radio brief."],
        ["38–45","Through the Lens","Psalm 121:1–2 — four moves.","Discuss; sketch and write the verse."],
        ["45–50","Trig Clue & Exit","Trig Clue 2 (answer 16); self-assessment; wheat sheaves.","Solve; self-assess."]
      ],
      diff:{
        supported:"Printed map with the grid; ‘letter first, then number’ card; list of the 6 river stages; partner pairing.",
        esol:"Picture labels for source, mouth, branch, plains; gesture: hands stacked for contour layers; rehearse the radio brief with a partner.",
        learning:"Hands-on contour layers (Path B) for students who learn by making; shorter 4-stage version of Path A; calm screen available.",
        flying:"Why do Canterbury rivers run south-east? Draw a cross-section; plan a safe route using contours."
      },
      assess:{
        lookFor:["Names the river stages in order with place names","Explains ‘close contours = steep’ using Te Kiekie","Gives correct grid references (C3, D2, E3, F7) and measures with the scale bar"],
        evidence:["Path products (photograph)","Grid-game answers on mini-whiteboards","Exit self-assessment"]
      },
      inquiry:["Who could explain contour lines in their own words? Who needs the physical model again?","Did students confuse grid order (letter vs number)?","Which local places did students already know from family trips?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"sam", meta:"Ridge above the Ashburton Gorge",
        msg:"Kia ora from up the top! Flint and I can see the whole story from here: **ice, rock, river, plains, sea**. Your surveyor drew this land by hand in 1864. Learn to read it, and you'll never get lost. First job: follow our river from the mountains to the sea.",
        notes:[["SAY","Read the message. 🟡 Sam and his heading dog Flint are fictional guides."],["ASK","“If you were standing on a ridge in the foothills, what would you see if you looked east?”"],["LISTEN","Plains, paddocks, the river, towns, the sea on a clear day."]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"What are the two names for our river?", a:"Hakatere and the Ashburton." }, { q:"Name one primary source about our district.", a:"e.g. the 1862 stone cottage at Hakatere Station; an 1848 sketch; a 2021 flood report." }, { q:"What is local history?", a:"The story of this place: the first people, those who came later, and us." } ],
        notes:[["ASK","Mini-whiteboards: students write an answer, then flip the card."],["IF","If many miss primary vs secondary, re-teach in 1 minute with the cottage vs museum panel example."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Mountains to sea", title:"Source to Sea", ix:"source2sea",
        notes:[["CLICK","Press → to fly down the river: source → gorge → plains → branches join → mouth → the whole river. Or click the stop buttons."],["SAY","“The South Branch starts as meltwater from the Ashburton Glacier, below Mt Arrowsmith (2,781 m). The branches join about 21 km from the coast, just inland of Ashburton, and the river reaches the sea at the Hakatere hāpua.”"],["ASK","“What do you notice happens to the river when it reaches the plains?”"],["LISTEN","It spreads out; splits into channels; the riverbed gets wide and gravelly: it braids."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Reading the land", title:"Four zones of our place",
        cards:[ { icon:"🏔️", t:"Mountains", d:"Ice, rock and snow. The river is born here.", foot:"Mt Arrowsmith · 2,781 m" }, { icon:"⛰️", t:"Foothills", d:"Lower hills and gorges. The river cuts through.", foot:"Te Kiekie · 1,688 m" }, { icon:"🌾", t:"Plains", d:"Wide, flat gravel land. Farms, towns — and braids.", foot:"Ashburton · Methven" }, { icon:"🌊", t:"Coast", d:"The river meets the sea at the hāpua.", foot:"Hakatere hāpua" } ],
        notes:[["SAY","“Geographers divide land into zones. Which zone is our school in?”"],["ASK","“Where would you most like to live? Why do most people live on the plains?”"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Height on a flat map", title:"Contour Builder", ix:"contours",
        notes:[["CLICK","① Stack the layers → ② look from above → ③ cut a cross-section (press →)."],["SAY","“Each layer is one contour: every point on its edge is the same height. These are 200 m apart.”"],["ASK","At ②: “Where are the lines close together? What does that mean?” ⏳"],["LISTEN","Steep slope! The south side of Te Kiekie is steep; the north side is gentler."],["NOTE","This shape is a simplified model of Te Kiekie / Mt Somers (1,688 m) for teaching contours, not a survey map."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Map skills", title:"Grid references & scale",
        bullets:["**Grid reference:** go **along** first (letter), then **down** (number). *Along the corridor, down the stairs.*","**Scale bar:** 1 grid square on our map = **15 km**. Measure with a ruler or a strip of paper.","**Compass:** north is up. The plains slope down to the **south-east**, toward the sea."],
        visual:{ map:{ theme:"paper", labels:"both", grid:true, relief:true }, size:640 },
        notes:[["SAY","“Along the corridor, then down the stairs: letter first, then number.”"],["ASK","“Which square is Ashburton in?” (E5)"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Grid & scale game", title:"Find it, measure it", ix:"gridgame",
        notes:[["CLICK","Read a question; teams answer on whiteboards; click the card to reveal (the square lights up)."],["CLICK","Press 📏 Measure, then click two places to measure a straight-line distance."],["NOTE","Positions on this simplified map are approximate (to within a few km)."]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAY","“Choose your path. Every path uses the map — keep it on screen or use the printed one.”"],["CLICK","Start the 20-minute timer."],["ASK","While roaming: “Show me on the map. How do you know it's steep there?”"]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Psalm 121:1–2 from the class Bible."],["ASK","“Why might mountains make people think about God?” Then: “The psalm says help comes from the Maker, not the mountains. What's the difference?”"]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 1,688 m → 16 whole hundreds."],["IF","If a team says 17 (rounding): “Close! ‘Whole hundreds’ means how many complete hundreds fit — 1,600 fits, 1,700 doesn't.”"]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess against the three success criteria."],["CLICK","C = wheat sheaves."]] }
    ]
  };

  /* ======================= WEDNESDAY · SCIENCE ======================= */
  const wed = {
    id:"w01-wed", week:1, day:"wed", subject:"science", duration:50,
    title:"Look Up! Stars, Planets & Moons", guide:"priya",
    codes:["SC-ES","SC-P"],
    coverage:"Y6 Science (2027): the night sky — stars, the Moon and planets; stars make their own light, planets and moons reflect it. Introduces dark skies and observation.",
    li:"We are learning to tell the difference between stars, planets and moons in the night sky.",
    sc:["I can explain that stars make their own light and planets and moons reflect it.","I can name the five planets we can see without a telescope.","I can describe what makes a ‘dark sky’ good for stargazing."],
    vocab:[
      { w:"star", def:"a huge ball of hot gas that makes its own light, like our Sun" },
      { w:"planet", def:"a large round object that travels around a star and does not make its own light" },
      { w:"moon", def:"a natural object that travels around a planet" },
      { w:"reflect", def:"to bounce light back" },
      { w:"emit", def:"to give out (make) light" },
      { w:"naked eye", def:"just your eyes, without a telescope or binoculars" },
      { w:"constellation", def:"a pattern of stars that people have named" },
      { w:"star cluster", def:"a group of stars close together in space, like Matariki" },
      { w:"light pollution", def:"too much artificial light at night, which hides the stars" }
    ],
    prep:{ min:5, items:["A torch and a small mirror or foil ball (demo)","Optional: ‘Look up tonight’ home task sheet","Torches and balls (or foil) for Path B"] },
    safety:["Never look directly at the Sun — not with your eyes, binoculars or a telescope.","Don't shine torches into anyone's eyes.","Stargazing at home happens with whānau, not alone."],
    tikanga:["Matariki is introduced properly in Week 6. If students raise it today, welcome their knowledge and note that Matariki and Puaka traditions come from Māori sources."],
    hononga:"**Looking up in Aotearoa.** Māori navigators and gardeners read the stars closely: star risings marked the seasons, and the maramataka (lunar calendar) guided planting and fishing. In Week 6 we will learn about **Matariki** and **Puaka** from Māori sources. Today, start noticing: which stars and planets can you see from your place?",
    paths:[
      { id:"A", name:"The Recorder", product:"Sky Recorder Diagram", steps:["Draw the **Sun**, **Earth**, the **Moon** and **one planet**.","Use arrows to show where light is **emitted** and where it is **reflected**.","Write a caption: why can we see the Moon and planets at night?"], flying:"Why can we sometimes see the Moon in the daytime, but not the stars?" },
      { id:"B", name:"The Maker", product:"Torch-and-Ball Sky Model", steps:["Use a **torch** (the Sun) and a **ball or foil** (a planet or moon).","Show how the ball only ‘shines’ when light hits it. Try different angles.","Draw and label a sketch of your model: emit, reflect, light ray."], flying:"Use your model to show why part of the Moon can be dark." },
      { id:"C", name:"The Storyteller", product:"Night-Sky Guide Broadcast", steps:["Plan a **60-second ‘tonight's sky’ broadcast** for whānau.","Explain the difference between stars and planets, and name the five planets we can see.","Give one tip for good stargazing (dark place, let your eyes adjust, never the Sun)."], flying:"Explain the ‘twinkle test’ and why it's a clue but not a perfect rule." }
    ],
    supportedShort:"labelled diagram to complete, word bank with emit/reflect pictures, the five planets on a card, partner pairing.",
    lens:{
      pillar:"mohio", title:"The heavens declare",
      look:"Look again at the dark-sky slider: thousands of stars appear when the lights go off.",
      ref:"Psalm 19:1",
      paraphrase:"The heavens tell about the glory of God; the skies show what His hands have made.",
      talk:[
        { q:"How can the sky ‘declare’ something without using any words?", listen:"Its beauty, size and order show us something about the Maker; creation points to the Creator." },
        { q:"What does a dark, starry sky make you feel?", listen:"Small, amazed, calm, curious, thankful." }
      ],
      live:"Write one **“Wow, God…”** sentence about the night sky in your Field Journal."
    },
    clue:{ prompt:"How many planets can we see without a telescope?", answer:5, explain:"Mercury, Venus, Mars, Jupiter and Saturn: 5. Trig Clue 3 is saved!" },
    next:"Thursday — Liv Bennett is under a giant pivot irrigator. Machines on our farms!",
    rubric:[
      { c:"Emit vs reflect", code:"SC-ES",
        d:["Says stars are bright.","“Stars are bright.”"],
        a:["Explains that stars make light and planets and moons reflect it.","“Stars make their own light. Planets and the Moon only shine because sunlight bounces off them.”"],
        f:["Uses the idea to explain something new.","“Venus is so bright because it's close to us and covered in clouds that reflect lots of sunlight.”"],
        i:["I know stars are bright.","I can explain emit and reflect for stars, planets and the Moon.","I can use emit and reflect to explain something new."] },
      { c:"Naked-eye planets", code:"SC-ES",
        d:["Names one or two planets.","“Mars and Jupiter.”"],
        a:["Names all five naked-eye planets.","“Mercury, Venus, Mars, Jupiter and Saturn.”"],
        f:["Gives a clue for spotting one.","“Mars looks orange-red; Venus is the brightest and shines steadily.”"],
        i:["I can name some planets.","I can name the five planets we can see without a telescope.","I can explain how to spot one of them."] },
      { c:"Observing the sky", code:"SC-P",
        d:["Says it's easier to see stars at night.","“You need it to be night.”"],
        a:["Describes what makes a good dark sky.","“Away from town lights, on a clear night, after your eyes adjust.”"],
        f:["Explains light pollution and what people do about it.","“The Aoraki Mackenzie reserve controls outdoor lighting so the stars and Milky Way can still be seen.”"],
        i:["I know stars are easier to see at night.","I can describe what makes a dark sky good for stargazing.","I can explain light pollution and how a dark sky reserve helps."] }
    ],
    plan:{
      prior:"Students know the Sun, Moon and stars, and may think planets ‘make light’ or that the Moon is a star. Some will know Matariki from school celebrations. Few will have seen the Milky Way.",
      kc:["Thinking","Using language, symbols & texts"],
      sequence:[
        ["0–6","Field Note","Dr Priya's message. Trig Check on Tuesday. LI/SC. Sun safety (30 s).","Recall; predict."],
        ["6–18","Survey","Torch-and-foil demo + **Star or Planet?** sorter; **naked-eye planets** sky; **light pollution** slider.","Vote emit/reflect; name planets; predict what happens when lights go off."],
        ["18–38","Choose Your Path","Introduce A/B/C. Roam: “Where does the light come from?”","Diagram / model / broadcast."],
        ["38–45","Through the Lens","Psalm 19:1 — four moves.","Discuss; ‘Wow, God…’ sentence."],
        ["45–50","Trig Clue & Exit","Trig Clue 3 (answer 5); self-assessment; wheat sheaves.","Solve; self-assess."]
      ],
      diff:{
        supported:"Labelled diagram to complete; emit/reflect picture cards; the five planets on a card.",
        esol:"Gesture: hands open (emit) vs bounce (reflect); picture glossary; rehearse the broadcast with a partner.",
        learning:"Hands-on model (Path B); dim the room for the demo; calm screen available.",
        flying:"Moon in the daytime; why Venus is so bright; the twinkle test."
      },
      assess:{
        lookFor:["Correct use of emit and reflect","Names all five naked-eye planets","Describes dark-sky conditions and light pollution"],
        evidence:["Path products (photograph)","Sorter votes","Exit self-assessment","Optional ‘Look up tonight’ home sheet"]
      },
      inquiry:["Who still thinks the Moon makes its own light?","Which students are keen stargazers (Sky Watcher's Journal Big Project later)?","Did the light-pollution slider prompt questions about our town's lights?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"priya", meta:"Observatory dome · after dark",
        msg:"Hello, sky watchers. I'm Dr Priya Nair. Your surveyor didn't have GPS in 1864. He had **the stars**. Tonight, let's learn to read them. First question: which lights in the sky **make** their own light, and which only **borrow** it?",
        notes:[["SAY","Read the message. 🟡 Dr Priya is a fictional guide."],["ASK","“Is the Moon a star?” Take a quick vote — come back to it later."]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"Where does the Hakatere's South Branch start?", a:"As meltwater from the Ashburton Glacier, below Mt Arrowsmith." }, { q:"What do contour lines close together mean?", a:"A steep slope." }, { q:"Which grid square is Methven in?", a:"E3." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"safety", phase:"excavate", fs:"real", title:"Stay safe looking up",
        items:[ { icon:"☀️", t:"Never the Sun", d:"Never look straight at the Sun — not with your eyes, binoculars or a telescope. It can blind you." }, { icon:"🔦", t:"Torches down", d:"Point torches at the floor or your model, never into someone's eyes." }, { icon:"🏡", t:"With whānau", d:"Stargazing at home happens with an adult, somewhere safe." } ],
        notes:[["SAFETY","30 seconds. Make the Sun rule absolute."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Make light or bounce light?", title:"Star or Planet?", ix:"starplanet",
        notes:[["NOTE","🧪 Do the real demo first if you can: dim the lights, shine a torch on a foil ball. Then use the slide."],["CLICK","Press ‘Torch on’ (or →). Then hold up each card; class votes EMITS or REFLECTS; drag it."],["SAY","“Stars make their own light, like the torch. Planets and moons only shine because light bounces off them, like the foil ball.”"],["IF","“Stars twinkle and planets don't” → “Good noticing! That's a handy clue, though not a perfect rule.”"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"No telescope needed", title:"Five planets we can see", ix:"nightsky",
        notes:[["SAY","“Without a telescope we can see five planets: Mercury, Venus, Mars, Jupiter and Saturn.”"],["CLICK","Click each planet for a spotting tip; ‘Show their path’ draws the ecliptic; ‘Twinkle test’ compares stars and planets."],["NOTE","This is a sample sky, not tonight's. For real positions use Stellarium (free) set to Ashburton."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Dark skies", title:"Turn down the lights", ix:"lightpollution",
        notes:[["CLICK","Drag the slider from bright town lights to dark. Watch the star count — and the Milky Way."],["SAY","“About an hour or two south-west of us, the Aoraki Mackenzie area is an International Dark Sky Reserve, with Mt John University Observatory near Takapō / Tekapo. Outdoor lights there are controlled so the sky stays dark.”"],["ASK","“What could our town do to see more stars?”"]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAY","“Choose your path. Every path must use the words emit and reflect.”"],["CLICK","Start the timer. Path B needs torches and balls/foil."],["SAFETY","Torches pointed down, never into eyes."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Psalm 19:1."],["ASK","“How can the sky ‘declare’ something without words?” Then: “What does a dark, starry sky make you feel?”"]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 5 (Mercury, Venus, Mars, Jupiter, Saturn)."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess. Optional home task: ‘Look up tonight’ — with whānau, find the Moon and one bright planet."],["CLICK","C = wheat sheaves."]] }
    ]
  };

  /* ======================= THURSDAY · TECHNOLOGY ======================= */
  const thu = {
    id:"w01-thu", week:1, day:"thu", subject:"technology", duration:50,
    title:"Think Like an Engineer: Machines on Our Farms", guide:"liv",
    codes:["TE-TK","TE-NT","TE-TP"],
    coverage:"Technology (NZC 2007, Level 3): Technological Knowledge — technological systems (inputs, processes, outputs); Nature of Technology — technology and society (how farm machines changed Mid Canterbury). Sets up Y5 Science simple machines (Weeks 2–5).",
    li:"We are learning how machines changed farming in Mid Canterbury, and to describe a machine as a system with inputs, processes and outputs.",
    sc:["I can describe how farm machines have changed over time.","I can identify the input, process and output of a machine.","I can explain one way a machine makes farm work easier."],
    vocab:[
      { w:"machine", def:"a device that uses energy to do work" },
      { w:"mechanism", def:"the moving parts inside a machine that make it work" },
      { w:"system", def:"parts that work together to do a job" },
      { w:"input", def:"what goes into a system (energy, materials, instructions)" },
      { w:"process", def:"what the system does to the input" },
      { w:"output", def:"what comes out of a system: the result" },
      { w:"energy", def:"what is needed to make things move or change" },
      { w:"efficiency", def:"getting the job done with less time, energy or waste" },
      { w:"engineer", def:"a person who designs, builds and fixes machines and systems" }
    ],
    prep:{ min:5, items:["Optional: print the Machine Detective cards","Paper and pencils for Path B sketches","Optional: ask a farming whānau for a photo of a machine on their farm"] },
    safety:["No building this week. From Week 2: scissors rules; skewer points blunted or capped; elastic bands used carefully; no sockets or mains devices; tidy-up routine.","Farm visits only with school health & safety approval; stay well clear of moving machinery."],
    tikanga:["Before Europeans arrived, Māori used the kō (a digging stick) to prepare soil for planting. Technology has a long history here."],
    hononga:"**Technology before machines.** Before European settlement, Māori used tools like the **kō** (a digging stick) to loosen soil for planting, and stone adzes to clear land. In the 1840s–50s, Māori farmers quickly took up ploughs too. Technology in Aotearoa has a long, shared history (source: Te Ara, Farm mechanisation).",
    paths:[
      { id:"A", name:"The Recorder", product:"Machine Report", steps:["Choose **one farm machine** from today.","Draw an **Input → Process → Output** diagram for it.","Write a paragraph: what it does, how it changed farm work, and **one problem** it brings."], flying:"Is a machine always better? Give one case where doing a job by hand is better." },
      { id:"B", name:"The Maker", product:"Annotated Machine Sketch", steps:["Draw a farm machine with its **moving parts** clearly shown.","Label at least **5 parts** and what each does.","Predict which **simple machines** are inside: levers? wheels and axles? gears? pulleys?"], flying:"Circle the part you think does the most work, and explain why." },
      { id:"C", name:"The Storyteller", product:"Then & Now Role-Play", steps:["With a partner, plan a conversation between a **farmer from 1900** and a **farmer from today**.","Each farmer describes **one job** (harvest, milking, watering) and the machines they use.","Include **one good change** and **one problem**. Perform it in 60–90 seconds."], flying:"Add a farmer from 2060. What machine might they use, and what problem might it solve?" }
    ],
    supportedShort:"Input/Process/Output frame to fill in, picture cards of each machine, sentence starters (“The input is… The output is…”).",
    lens:{
      pillar:"manaaki", title:"Work it and take care of it",
      look:"Look again at the pivot irrigator: it waters a whole paddock while it walks in a circle.",
      ref:"Genesis 2:15",
      paraphrase:"The Lord God put the man in the Garden of Eden to work it and take care of it.",
      talk:[
        { q:"Machines help us *work* the land. How can they also help us *take care* of it?", listen:"Water only what's needed; less waste; protect soil and rivers; measure carefully; turn things off." },
        { q:"Who are the people who use their gifts to keep farm machines working?", listen:"Engineers, mechanics, farmers, electricians, designers, coders." }
      ],
      live:"Name **one way you can “work and take care”** of something this week (a garden, a pet, our classroom, a younger sibling)."
    },
    clue:{ prompt:"How many boxes are in a system diagram (input, process, output)?", answer:3, explain:"Input → process → output: 3 boxes. Trig Clue 4 is saved for Friday!" },
    next:"Friday — Tom Whitaker is at his easel on a gravel road. Bring your eyes.",
    rubric:[
      { c:"Change over time", code:"TE-NT",
        d:["Says machines are better now.","“Tractors are better than horses.”"],
        a:["Describes changes in order with examples.","“First bullocks and horses, then reapers and steam, tractors in 1904, and now pivot irrigators.”"],
        f:["Weighs the benefits and costs of change.","“Machines meant fewer farm jobs but more food from each farm.”"],
        i:["I know farm machines have changed.","I can describe how farm machines changed, in order, with examples.","I can explain good and bad effects of the changes."] },
      { c:"Systems", code:"TE-TK",
        d:["Names what a machine does.","“It waters the grass.”"],
        a:["Identifies input, process and output.","“A pivot's input is water and power, its process is pumping water along the arm while it turns, and its output is a watered circle.”"],
        f:["Explains how the parts of the system work together.","“If the pump fails, no water goes along the arm, so the output fails even though the wheels still turn.”"],
        i:["I can say what a machine does.","I can identify the input, process and output of a machine.","I can explain how the parts of a system depend on each other."] },
      { c:"Making work easier", code:"TE-TK",
        d:["Says the machine helps.","“It's faster.”"],
        a:["Explains one specific way a machine makes work easier.","“It saves farmers moving pipes by hand.”"],
        f:["Explains a trade-off.","“Pivots save labour and water evenly, but they let farms use a lot more river water, so there's a trade-off.”"],
        i:["I can say a machine helps.","I can explain one way a machine makes farm work easier.","I can explain a trade-off that comes with a machine."] }
    ],
    plan:{
      prior:"Many students live on or near farms and will know tractors, pivots and milking sheds well — use them as experts. Some will not have been on a farm. The words input, process and output may be new.",
      kc:["Thinking","Participating & contributing"],
      sequence:[
        ["0–6","Field Note","Liv's message. Trig Check on Wednesday. LI/SC.","Recall; predict."],
        ["6–18","Survey","**Farm Machine Timeline** (drag to order); ‘machines are systems’; **Input → Process → Output** builder; turn & talk on change.","Order the machines; sort parts into I-P-O; talk about good changes and problems."],
        ["18–38","Choose Your Path","Introduce A/B/C. Roam: “What's the input? What's the output?”","Report / sketch / role-play."],
        ["38–45","Through the Lens","Genesis 2:15 — four moves.","Discuss; name one way to work and take care."],
        ["45–50","Trig Clue & Exit","Trig Clue 4 (answer 3); self-assessment; wheat sheaves.","Solve; self-assess."]
      ],
      diff:{
        supported:"I-P-O frame; picture cards; sentence starters; partner pairing.",
        esol:"Gesture: in → change → out; picture glossary; rehearse the role-play with a partner.",
        learning:"Drag-and-drop on the board for students who learn by moving; shorter report option; calm screen available.",
        flying:"Is a machine always better? Farmer from 2060; how parts of a system depend on each other."
      },
      assess:{
        lookFor:["Orders farm machines correctly and explains change","Identifies input, process and output","Explains a specific benefit and a trade-off"],
        evidence:["Path products (photograph)","Timeline and I-P-O answers","Exit self-assessment"]
      },
      inquiry:["Which students have farm expertise to share in Weeks 2–5?","Did students confuse process and output?","How did the class talk about farming debates — fairly, with more than one view?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"liv", meta:"Under a pivot irrigator · Mid Canterbury",
        msg:"Kia ora! Liv here. This thing above me waters a whole paddock while it walks in a circle, **all on its own**. A hundred years ago this job was a man with a horse. If it moves, there's a mechanism. If it decides, there's code. Let's find out how we got here.",
        notes:[["SAY","Read the message. 🟡 Liv is a fictional guide."],["ASK","“Who has seen a pivot irrigator up close? What does it sound like?”"],["NOTE","Farm kids are your experts today. Invite them to explain."]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"Stars ___ light. Planets ___ light.", a:"Stars emit (make) light. Planets reflect it." }, { q:"Name the five planets we can see without a telescope.", a:"Mercury, Venus, Mars, Jupiter, Saturn." }, { q:"What is light pollution?", a:"Too much artificial light at night, hiding the stars." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"From muscle to machine", title:"Farm Machine Timeline", ix:"machinetimeline",
        notes:[["CLICK","Teams suggest an order; drag the cards into the slots; press Check. ‘Show answer’ if needed."],["SAY","“Bullocks and horses first. A horse-drawn reaper arrived in Canterbury in 1856. Steam came from the 1860s. New Zealand's first tractors, an Ivel and a Kinnard Haines, came in 1904. Headers in 1927. Merv Hicks' electric rotary milking platform in 1969. Big spray irrigators spread across dry South Island areas from the mid-1980s.”"],["SAY","“Today, centre pivots and linear-move irrigators water about 133,000 hectares of the Ashburton District (Stats NZ, 2022).”"],["ASK","“What do you think changed for farm workers?”"]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"Think like an engineer", title:"Machines are *systems*",
        body:"Every machine is a **system**: parts working together.\n\n**Input** → what goes in (energy, materials, instructions)\n**Process** → what the machine does to it\n**Output** → what comes out",
        visual:{ artefact:"pivot" },
        notes:[["SAY","“Engineers think in systems. Watch: a toaster — input electricity and bread, process heating, output toast.”"],["ASK","“What's the input, process and output of a kettle?”"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Input → Process → Output", title:"Build the system", ix:"ipo",
        notes:[["CLICK","Choose a machine (pivot, tractor, milking platform, hay baler). Teams decide where each card goes, then drag it. ‘Show answer’ if needed."],["IF","Process vs output confusion → “The process is what the machine *does*. The output is the *result* you can see at the end.”"]] },
      { type:"discussion", phase:"excavate", fs:"real", kicker:"Turn & Talk", q:"What did machines **change** on our farms? Give **one good change** and **one problem**.", sub:"Think about jobs, water, food, time, rivers and families.", talk:60,
        notes:[["TALK","60-second talk. Take a few answers."],["LISTEN","Good: faster, less hard work, more food, safer in some ways. Problems: fewer farm jobs, more water taken from rivers, cost, noise, accidents."],["NOTE","Irrigation and river health are real community debates. Keep it fair: more than one view, no villains."]] },
      { type:"paths", phase:"paths", fs:null,
        notes:[["SAY","“Choose your path. Every path must use input, process and output.”"],["CLICK","Start the 20-minute timer."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move."],["SAY","Read Genesis 2:15."],["ASK","“Machines help us *work* the land. How can they also help us *take care* of it?”"]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["NOTE","Answer: 3 (input, process, output)."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess. Remind: tomorrow we open the first map sheet!"],["CLICK","C = wheat sheaves."]] }
    ]
  };

  /* ======================= FRIDAY · ART ======================= */
  const fri = {
    id:"w01-fri", week:1, day:"fri", subject:"art", duration:50,
    title:"Seeing the Land: Mountain Sketching & the Field Journal", guide:"tom",
    codes:["VA-PK","VA-DI","VA-UC"],
    coverage:"Visual Arts (NZC 2007, Level 3): developing practical knowledge (line, tone, observation) and ideas; understanding landscape drawing in context.",
    li:"We are learning to observe and sketch the shapes of our landscape using line and tone.",
    sc:["I can draw a mountain skyline using careful observation.","I can use light and dark tone to show near and far.","I can set up my Field Journal for the term."],
    vocab:[
      { w:"landscape", def:"a picture of land: mountains, fields, rivers, sky" },
      { w:"skyline", def:"the outline where the land meets the sky" },
      { w:"silhouette", def:"a dark shape seen against a lighter background" },
      { w:"foreground", def:"the part of a picture that looks closest" },
      { w:"middle ground", def:"the part of a picture between near and far" },
      { w:"background", def:"the part of a picture that looks furthest away" },
      { w:"line", def:"a mark that shows edges and shapes" },
      { w:"tone", def:"how light or dark something is" },
      { w:"sketch", def:"a quick drawing that records what you see" }
    ],
    prep:{ min:10, items:["A3 paper, B/2B pencils, charcoal, erasers","Field Journals","Weather permitting: plan 10 minutes outside to sketch the real skyline"] },
    safety:["Outdoor sketching: usual outdoor boundaries and supervision. Never look at the Sun when sketching the sky."],
    tikanga:["Students make their own marks and designs. No Māori designs (kōwhaiwhai, tukutuku, carving, rock-art figures) are copied as decoration on journal covers."],
    hononga:"**Looking closely at whenua.** Artists of many traditions have recorded this land. In Week 6 we learn about Ngāi Tahu rock art from Ngāi Tahu sources (learning about it, not copying it). Today, journal covers use students' own drawings of the land they know.",
    paths:[
      { id:"A", name:"The Recorder", product:"Faithful Skyline", steps:["Look at the real view (outside or the projected picture) for **10 seconds** first.","Sketch the **skyline**: highest points, then the dips, then one slow line.","Add **foreground, middle ground and background**, and label them lightly."], flying:"Add a nor'west arch cloud to the sky." },
      { id:"B", name:"The Maker", product:"Charcoal Tonal Study", steps:["Make a **5-step tonal strip** from lightest to darkest.","Draw a skyline with three layers of land.","Use **pale tone far away** and **dark tone up close**."], flying:"Smudge and lift (with an eraser) to make mist between the layers." },
      { id:"C", name:"The Storyteller", product:"Teach-a-Sketch", steps:["Draw a skyline using today's method.","Write **3 clear steps** teaching someone else how to do it.","Teach your steps to a partner and watch them try."], flying:"Explain why far mountains look blue and pale." }
    ],
    supportedShort:"traced ridge guide to start from, tonal strip template, ‘look 80%, draw 20%’ prompt card.",
    lens:{
      pillar:"manaaki", title:"The work of our hands",
      look:"Look again at the skyline drawing itself slowly, ridge by ridge.",
      ref:"Psalm 90:17",
      paraphrase:"May the kindness of the Lord our God rest on us; make the work of our hands last.",
      talk:[
        { q:"What does slow, careful drawing teach us about how we look at God's world?", listen:"To notice; to slow down; to be thankful; every place has detail and beauty we usually miss." },
        { q:"Who in our community uses their hands to make things that last?", listen:"Builders, farmers, artists, engineers, cooks, parents." }
      ],
      live:"Gallery walk: tell one classmate something you **noticed** in their drawing."
    },
    clue:{ prompt:"Friday's clue is the Survey Seal: combine this week's four Trig Clues.", answer:39, explain:"15 + 16 + 5 + 3 = 39 → bearing 039°." },
    next:"Next week — Sheet II · Kāika & Kai: pencilled symbols along the river.",
    rubric:[
      { c:"Observation", code:"VA-PK",
        d:["Draws a skyline from memory.","Skyline drawn as zigzags."],
        a:["Draws a skyline that matches the real ridges.","The highest peaks and dips are in the right places."],
        f:["Observes closely and corrects as they go.","Skyline matches the real shape, with small details noticed."],
        i:["I can draw a skyline.","I can draw a skyline that matches the real ridges.","I can observe closely and correct my drawing as I go."] },
      { c:"Tone & distance", code:"VA-PK · VA-DI",
        d:["Uses one tone.","Everything is the same darkness."],
        a:["Shows foreground, middle ground and background with tone.","Clear three grounds; pale far hills, darker near land."],
        f:["Uses tone and detail on purpose to create depth.","Explains why far mountains look blue and pale."],
        i:["I can shade my drawing.","I can use light and dark tone to show near and far.","I can use tone and detail on purpose to create depth."] },
      { c:"Context", code:"VA-UC",
        d:["Says landscapes are pictures of land.","“It's a picture of mountains.”"],
        a:["Explains why people draw the land.","“Surveyors and artists draw the land to record it and help people see it.”"],
        f:["Compares different reasons for drawing the land.","“A surveyor's map is for finding your way; a painting shows how the place feels.”"],
        i:["I know what a landscape is.","I can explain why people draw the land.","I can compare different reasons for drawing the land."] }
    ],
    plan:{
      prior:"Students can draw but often draw mountains as zigzag ‘symbols’ from memory. Few will have used charcoal or tone for distance. The Alps are visible from much of the district on a clear day — use the real view if you can.",
      kc:["Managing self","Thinking"],
      sequence:[
        ["0–6","Field Note","Tom's message. Trig Check on Thursday. LI/SC.","Recall; look out the window at the skyline."],
        ["6–18","Survey","**Layered Landscape** (three grounds); **Skyline** draws itself (look 80%, draw 20%); tone for distance.","Name the three grounds; practise looking before drawing."],
        ["18–40","Choose Your Path (22 min)","All set up the Field Journal cover (5 min), then A/B/C. Go outside for 10 minutes if possible.","Skyline / tonal study / teach-a-sketch."],
        ["40–45","Through the Lens","Psalm 90:17 — 5-minute gallery reflection.","Gallery walk; notice one thing."],
        ["45–50","Survey Seal & Dealer","Survey Seal I: 15 + 16 + 5 + 3 = 39 → bearing 039°. The Dealer's Offer. Self-assess; wheat sheaves.","Add the clues; dial the bearing; discuss the Dealer's question."]
      ],
      diff:{
        supported:"Traced ridge guide; tonal strip template; ‘look 80%, draw 20%’ card.",
        esol:"Model each step silently first, then name it; picture labels for foreground / middle ground / background.",
        learning:"Larger paper and thicker charcoal; shorter sketch time with more breaks; calm screen available.",
        flying:"Nor'west arch; mist with smudge-and-lift; explain why far mountains look blue."
      },
      assess:{
        lookFor:["Skyline drawn from observation, not memory","Three grounds shown with tone","Can explain why people draw the land"],
        evidence:["Field Journal covers and sketches (photograph)","Gallery-walk comments","Exit self-assessment"]
      },
      inquiry:["Who looked closely and who drew from memory? Re-model looking first in Week 3.","Did going outside work? Plan the next outdoor session.","Which students might choose the My Place triptych Big Project?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"tom", meta:"Easel on a gravel road · looking west",
        msg:"Afternoon. Tom Whitaker. Your surveyor drew every ridge by hand. Before we restore his map, **your eyes need to learn what his eyes knew**. The land is never just one colour, and a mountain is never a zigzag. Look slowly.",
        notes:[["SAY","Read the message. 🟡 Tom is a fictional guide."],["ASK","“Look out the window (or picture the view from home). What's the furthest thing you can see?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:null,
        qs:[ { q:"When did the first tractors come to NZ?", a:"1904 (an Ivel and a Kinnard Haines)." }, { q:"Input, process, output: what is the output of a pivot irrigator?", a:"An evenly watered circle of crop." }, { q:"Name one good change and one problem machines brought.", a:"e.g. faster work and more food · fewer farm jobs, more river water used." } ],
        notes:[["ASK","Mini-whiteboards, then flip."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and success criteria."]] },
      { type:"interactive", phase:"excavate", fs:"real", paper:true, kicker:"Three grounds", title:"Layered Landscape", ix:"layered",
        notes:[["CLICK","Press ‘Separate the layers’ (or →) to pull the landscape apart into background, middle ground and foreground."],["SAY","“Foreground: paddock, fence, river stones. Middle ground: the foothills. Background: the Alps.”"],["CLICK","‘Tone test’: make the far mountains dark. “Does it still look far away?”"],["LISTEN","No — far things look pale and blue; near things are darker with more detail."]] },
      { type:"interactive", phase:"excavate", fs:"real", paper:true, kicker:"Look 80%, draw 20%", title:"Draw the skyline slowly", ix:"skyline",
        notes:[["CLICK","Press → through the steps: look → highest points → dips → join slowly (the line draws itself) → add tone."],["SAY","“Look at the highest points first, then the dips. Then one slow, light line. Look 80%, draw 20%.”"],["DEEPER","“Why do far mountains look paler and bluer?” (Air and tiny particles between us and them scatter blue light — artists call it atmospheric perspective.)"]] },
      { type:"content", phase:"excavate", fs:null, paper:true, kicker:"All term", title:"Set up your *Field Journal*",
        bullets:["**Cover:** your own drawing of a skyline you know, plus your name and team bird.","**Inside cover:** “My place is…” in one sentence.","**Every lesson:** date, title, and one thing you noticed.","Respect rule: **your own marks and designs**. We learn about Māori art, but we don't copy it as decoration."],
        visual:{ artefact:"fieldbook" },
        notes:[["SAY","“Your surveyor kept a field book. You'll keep a Field Journal. It travels with you all term.”"],["TIKANGA","No kōwhaiwhai, tukutuku, carving or rock-art figures copied onto covers as decoration (§17)."]] },
      { type:"paths", phase:"paths", fs:null, minutes:22,
        notes:[["SAY","“First 5 minutes: everyone sets up the Field Journal cover. Then choose your path.”"],["CLICK","Start the 22-minute timer. If the weather's good, go outside for 10 minutes to sketch the real skyline."],["SAFETY","Never look at the Sun when sketching the sky."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","Reveal each move. This is a 5-minute gallery reflection."],["SAY","Read Psalm 90:17."],["ASK","“What does slow, careful drawing teach us about how we look at God's world?”"]] },
      { type:"folioseal", phase:"decode", fs:"story",
        notes:[["SAY","“It's time. Four clues this week. Add them up to get a bearing, and dial it on the theodolite.”"],["CLICK","Tap each ‘?’ tile (already shown if solved this week). 15 + 16 + 5 + 3 = 39. Drag the theodolite dial (or use the ±1°/±10° buttons) to 039°, then ‘Fix the bearing’."],["SAY","Read the reveal: the river mouth, the hāpua and a line of pencilled names along the river."],["NOTE","A bearing is an angle from north, measured clockwise. 039° is a little east of north-east… a direction up the river!"]] },
      { type:"intercept", phase:"decode", fs:"story",
        msg:"To the restoration team. I hear the first sheet has opened. Old maps sell for a fortune overseas. Everyone has a price. What's yours? — D.",
        ask:"Is everything for sale? What makes something too precious to sell?",
        notes:[["SAY","Read it in a smooth, charming voice."],["ASK","Take a few answers; don't resolve it — this question runs all term and returns in Week 10."],["LISTEN","Some things belong to a community; history has more than money value; stories, names, honesty, care for what we've been given."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess. Celebrate the first map sheet!"],["CLICK","C = wheat sheaves. Store Field Journals safely."]] }
    ]
  };

  BM.WEEKS[1] = {
    n:1,
    story:"After this winter's floods, a digger driver repairing the Hakatere stopbank finds a rusted tin chest with a surveyor's field book (1864) and ten folded map sheets. This week the class meets the field team: historians find out whose stories are on the map, geographers learn to read the land from mountains to sea, astronomers look up, engineers meet the machines of the plains, and artists learn to see. On Friday, the week's four Trig Clues fix a bearing that opens Sheet I.",
    hononga:"Kōrero, whakapapa and place names as ways of holding history; Hakatere as the name of the river, district and marae (Mon) · maunga and awa, and using both names for Te Kiekie and Ōpuke (Tue) · reading the stars in Aotearoa, with Matariki and Puaka taught from Māori sources in Week 6 (Wed) · the kō and Māori farming technology (Thu) · learning about Māori art without copying it (Fri). Check all local framing with your Māori lead and Te Rūnanga o Arowhenua (D3).",
    seal:{
      answer:39,
      instruction:"Add the four **Trig Clues** from Monday to Thursday. The total is a **bearing** (an angle from north). Dial it on the theodolite to crack the wax seal.",
      reveal:"🟡 **Sheet I restored:** the river mouth and the **hāpua**, the river braiding to the sea, “Ashburton R.” in ink… and **“Hakatere”** in pencil, with a line of faded pencilled names up the river. Next week: *Kāika & Kai*.",
      art:() => { const v = BM.art.sheetArt(1); v.setAttribute("style", "width:100%;height:100%"); return v; }
    },
    lessons:[mon, tue, wed, thu, fri]
  };
})(window.BM);
