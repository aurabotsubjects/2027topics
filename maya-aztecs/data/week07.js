/* ==========================================================
   WEEK 7 — FOLIO VII · THE GREAT MARKET
   ========================================================== */
(function(FC){
  "use strict";

  const bpCheck = (name) => ({ type:"discussion", phase:"paths", fs:null, kicker:"Big Project check-in", q:`**${name}:** what did you finish last week, and what's your goal for **this** week?`, sub:"Look at your goal in your journal. Tell a partner in 30 seconds.", talk:60,
    notes:[["SAY","“One minute: check your Big Project goal.”"],["NOTE","Students choose today's Path OR Big Project time if they're on track (teacher's call)."]] });

  /* ======================= MONDAY · HISTORY ======================= */
  const mon = {
    id:"w07-mon", week:7, day:"mon", subject:"history", duration:50,
    title:"Daily Life in Tenochtitlan: School, Family, Law & the Market", guide:"itzel",
    codes:["SS-H","SS-C","SS-E","RE"],
    coverage:"Y5 History (2027 Social Sciences): daily life, social structure and government in an ancient civilisation; Y5 Civics: the purpose of laws and rules; Economic Activity: markets and fair exchange.",
    li:"We are learning about daily life for different groups in Aztec society.",
    sc:["I can describe at least three social groups in Aztec society.","I can explain how Aztec children were educated.","I can explain how market rules and judges kept trade fair."],
    vocab:[
      { w:"huey tlatoani", say:"WAY tla-toh-AH-nee", def:"‘great speaker’ — the Aztec ruler" },
      { w:"pochteca", say:"poch-TEH-kah", def:"long-distance merchants" },
      { w:"macehualtin", say:"mah-seh-WAL-teen", def:"commoners — most ordinary people" },
      { w:"calpulli", say:"kal-POO-lee", def:"a neighbourhood group that shared land and a school" },
      { w:"calmecac", say:"kal-MEH-kak", def:"school for nobles' children: glyphs, law, astronomy" },
      { w:"telpochcalli", say:"tel-poch-KAL-lee", def:"‘house of youth’ — a school for commoners" },
      { w:"law", def:"a rule made by those in authority that everyone must follow" }
    ],
    prep:{ min:2, items:["Expedition Journals","Optional: a kitchen scale and two ‘market’ items for a fair-measure demo"] },
    safety:[],
    hononga:"Long before money, Māori had wide **trade networks**: **pounamu** from Te Tai Poutini (the West Coast) travelled the length of the country; **tītī** (muttonbirds) preserved in kelp bags (pōhā) were traded north; kūmara and obsidian moved too. Trade built relationships and obligations between iwi — **utu** meant gifts were returned in balance.",
    paths:[
      { id:"A", name:"The Scribe", product:"A Day in My Life", steps:["Write a diary entry as a Mexica child (noble OR commoner).","Include school, family jobs and a trip to the market.","Use at least 4 vocab words."], flying:"Write a second entry from a child in the other group — compare." },
      { id:"B", name:"The Builder", product:"Market Stall Model", steps:["Make a stall from card: roof, table, goods.","Price your goods in cacao beans.","Add a sign about the market rules."], flying:"Add the market judges' building and explain their job." },
      { id:"C", name:"The Messenger", product:"Market Judge Role-Play", steps:["Act out a dispute: someone sold fake cacao beans!","The judge hears both sides and decides.","Explain why fair rules matter."], flying:"Compare with how disputes are settled in NZ today." }
    ],
    supportedShort:"diary frame; stall template; role cards with lines.",
    lens:{
      pillar:"manaaki", title:"Honest scales",
      look:"Look at the market judges: they checked that measures were fair and punished people who cheated — even people making fake cacao beans.",
      ref:"Proverbs 11:1; Leviticus 19:35–36",
      paraphrase:"The Lord detests dishonest scales, but accurate weights find favour with him… Do not use dishonest standards when measuring length, weight or quantity. Use honest scales.",
      talk:[
        { q:"Why do you think God cares about something as ordinary as fair measuring?", listen:"Cheating hurts people (often the poor); honesty shows love for neighbours; God cares about everyday life, not just ‘church’ things." },
        { q:"Where might people be tempted to be ‘a little bit unfair’ today — at school or in shops?", listen:"Games, sharing, swapping cards, selling online, tests — small honesty matters (Manaaki — serving faithfully)." }
      ],
      live:"Choose one place this week where you'll be **extra fair** (sharing, games, swapping)."
    },
    clue:{ prompt:"How many kinds of school did Aztec children go to?", answer:2, explain:"The calmecac and the telpochcalli → 2. Clue saved!" },
    next:"Tuesday — trade and exchange: from cacao money to tap-and-go.",
    rubric:[
      { c:"Social groups", code:"SS-H",
        d:["Names one group.","“There was a king.”"],
        a:["Describes three groups and their roles.","“The huey tlatoani ruled, pochteca traded far away, and macehualtin farmed and built.”"],
        f:["Explains how groups depended on each other and how people could move up.","“Commoners grew the food that fed nobles; brave warriors could become nobles.”"],
        i:["I can name a group.","I can describe three groups.","I can explain how groups depended on each other."] },
      { c:"Education", code:"SS-H",
        d:["Says children went to school.","“They had school.”"],
        a:["Explains the two schools and who went.","“Noble children went to the calmecac to learn glyphs and law; commoner boys went to the telpochcalli.”"],
        f:["Compares Aztec schooling with ours.","“Like us, almost every boy went to school — unusual in 1500! But girls mostly learned at home.”"],
        i:["I know they had school.","I can explain the two schools.","I can compare with schools today."] },
      { c:"Laws & the market", code:"SS-C · SS-E",
        d:["Describes the market.","“They sold stuff.”"],
        a:["Explains how judges and rules kept trade fair.","“Judges checked measures and punished cheats, like people selling fake cacao beans.”"],
        f:["Explains why laws are needed in a community.","“Without fair rules people stop trusting each other, and trade breaks down.”"],
        i:["I can describe the market.","I can explain market rules and judges.","I can explain why laws matter."] }
    ],
    plan:{
      prior:"Week 6: Tenochtitlan, chinampas, Triple Alliance, tribute. Big Projects launched.",
      kc:["Thinking","Relating to others","Participating & contributing"],
      sequence:[
        ["0–6","Field Transmission","Dr Canul at the market; Glyph Check; LI/SC.","Recall."],
        ["6–20","Excavate","Society pyramid; two schools; Market walk (8 stalls); Hononga (trade networks).","Explore, compare."],
        ["20–22","Big Project check-in","Goals.","Share."],
        ["22–38","Choose Your Path","Paths or Big Project.","Diary / stall / role-play."],
        ["38–45","Through the Lens","Proverbs 11:1.","Discuss; fairness goal."],
        ["45–50","Decode & Exit","Clue (2).","Solve; self-assess."]
      ],
      diff:{
        supported:"Diary frame; picture vocab.",
        esol:"Visual pyramid; market pictures.",
        learning:"Model or role-play option; oral diary.",
        flying:"Compare groups; NZ justice comparison."
      },
      assess:{
        lookFor:["Three groups described","Two schools explained","Purpose of market laws"],
        evidence:["Path products","Discussion","Exit self-assessment"]
      },
      inquiry:["Did students notice inequality (nobles vs commoners vs enslaved)? Handle with care.","Big Project progress — who needs help?","Link to Tuesday's money lesson."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"itzel", meta:"Folio VII · the great market",
        msg:"Team, Folio VII is a **market scene** — the great market of **Tlatelolco**, beside Tenochtitlan. When Spanish soldiers saw it in 1519, some said it was bigger and better organised than any market in Spain! Today, let's walk the streets and meet the people who lived here.",
        notes:[["SAY","Read the message."],["ASK","“What would you expect to find in a huge market 500 years ago?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:"real", title:"Remember Week 6?", qs:[
          { q:"What were chinampas?", a:"Fields built in the lake from mud and plants." },
          { q:"Why is Mexico City sinking?", a:"Pumping groundwater makes the clay underneath shrink." },
          { q:"Which materials are magnetic?", a:"Iron, and things with iron in them like steel." }],
        notes:[["SAY","Whiteboards; show on 3."],["CLICK","→ flips."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and SC."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Who's who?", title:"Aztec society", ix:"society",
        notes:[["CLICK","Tap each level from the top."],["ASK","“Which group do you think was biggest?” (Commoners.) “Who did most of the work?”"],["NOTE","Mention enslaved people calmly and factually; their children were born free."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"School for (almost) everyone", title:"Two kinds of school", h:"480px", cards:[
          { big:"📜", color:"#B3262E", t:"Calmecac", d:"For **nobles' children**: reading and painting glyphs, history, law, astronomy and religion. Very strict!" },
          { big:"🛡️", color:"#1F7A5A", t:"Telpochcalli", d:"The ‘house of youth’ in every **calpulli**: commoner boys learned work, citizenship and how to fight." },
          { big:"🏠", color:"#D9A23A", t:"At home", d:"Girls mostly learned at home: **weaving**, cooking, running a household and the market — vital skills." }],
        notes:[["SAY","“In the 1500s, schooling for nearly all boys was very unusual anywhere in the world.”"],["ASK","“What's similar and different about school today?”"],["PACE","Aim for minute 12."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Walk the market", title:"Tlatelolco", ix:"market",
        notes:[["CLICK","Tap the stalls; finish with the Judges."],["SAY","Spanish soldier Bernal Díaz wrote that each kind of goods had its own section — and that there were judges watching over everything."],["ASK","“Why would a market need judges?”"],["PACE","Aim for minute 20."]] },
      { type:"hononga", phase:"excavate", fs:"real", title:"Trade networks in Aotearoa",
        body:"**Pounamu** from Te Tai Poutini (West Coast) travelled the length of the country. **Tītī** (muttonbirds) preserved in kelp bags were traded north; kūmara and obsidian moved too.\n\nTrade built relationships between iwi — gifts were returned in balance (**utu**).",
        notes:[["ASK","“How is trading gifts different from buying in a shop?”"]] },
      bpCheck("Museum Case"),
      { type:"paths", phase:"paths", fs:null, notes:[["SAY","Explain paths (or Big Project time)."],["CLICK","Start the timer."]] },
      { type:"lens", phase:"lens", fs:null, notes:[["CLICK","→ reveals each move."],["SAY","Read Proverbs 11:1 and Leviticus 19:35–36."],["ASK","Use both questions."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["ASK","“How many kinds of school?” (2)"],["CLICK","2 dots → Check."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = cacao beans."]] }
    ]
  };

  /* ======================= TUESDAY · SOCIAL SCIENCE ======================= */
  const tue = {
    id:"w07-tue", week:7, day:"tue", subject:"geography", duration:50,
    title:"Trade & Exchange: Cacao Money to Tap-and-Go", guide:"sofia",
    codes:["SS-E","SS-P","SS-C"],
    coverage:"Y5–6 Economic Activity (2027 Social Sciences): changes in exchange (barter → currency → electronic); specialisation and trade; fair trade and the rights of producers.",
    li:"We are learning how exchange changed from barter to money to electronic payments.",
    sc:["I can explain barter and its problems.","I can explain how cacao beans and cotton cloaks worked as money.","I can explain what fair trade is and why it matters."],
    vocab:[
      { w:"barter", def:"swapping goods without money" },
      { w:"currency", def:"money that everyone in a place accepts" },
      { w:"quachtli", say:"KWACH-tlee", def:"a cotton cloak used for bigger payments by the Aztecs" },
      { w:"counterfeit", def:"fake money made to cheat people" },
      { w:"electronic payment", def:"paying with a card or phone — the money moves as information" },
      { w:"fair trade", def:"trade that pays producers a fair price and treats workers well" }
    ],
    prep:{ min:3, items:["Paper ‘cacao beans’ (10 per student) for the class market — optional","Expedition Journals"] },
    safety:[],
    hononga:"Aotearoa's money tells our story: the **$5 note** shows Sir Edmund Hillary and a hoiho (yellow-eyed penguin); coins show a kiwi and a kōtuku. And New Zealand was one of the **first countries** where tap-and-go and EFTPOS cards became everyday — we went from cash to cards very quickly!",
    paths:[
      { id:"A", name:"The Scribe", product:"Explain-the-Change Comic", steps:["Make a 6-panel comic: barter → cacao → coins → notes → cards → phone.","Show one problem each new kind of money solved.","Add a final panel: what next?"], flying:"Explain one NEW problem that electronic money creates." },
      { id:"B", name:"The Builder", product:"Class Market", steps:["Run a market with paper cacao beans.","Set prices from the 1545 list.","Afterwards, discuss: what was easier than barter?"], flying:"Introduce a ‘counterfeiter’ — how do you protect your market?" },
      { id:"C", name:"The Messenger", product:"Fair-Trade Advert", steps:["Make a poster or 30-second advert for fair-trade chocolate.","Explain who grows cacao and why fair prices matter.","Include the fair-trade mark."], flying:"Compare a cacao farmer's share of a chocolate bar's price with the shop's." }
    ],
    supportedShort:"comic template with prompts; price cards; advert planner.",
    lens:{
      pillar:"manaaki", title:"Justice for the grower",
      look:"Look at the cacao bean: once money for emperors, today grown mostly by small farmers — many of whom earn very little.",
      ref:"Micah 6:8; 2 Corinthians 9:7",
      paraphrase:"He has shown you what is good: to act justly and to love mercy and to walk humbly with your God… Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.",
      talk:[
        { q:"Most cacao today is grown by small farmers in places like Ghana, Côte d'Ivoire and Ecuador. Why should we care how much they're paid?", listen:"They're our neighbours too; God cares about justice; our choices affect real people." },
        { q:"What could ‘acting justly’ and ‘giving cheerfully’ look like for a Year 5/6 student?", listen:"Choosing fair-trade when we can; giving to people in need; sharing; telling others (Manaaki)." }
      ],
      live:"Check a chocolate bar at home: does it have a **fair-trade** mark?"
    },
    clue:{ prompt:"A freshly picked avocado cost 3 cacao beans. How many beans for 4 of them?", answer:12, explain:"4 × 3 = 12 → two bars and two dots. Clue saved!" },
    next:"Wednesday — electromagnets: lift the stone lid!",
    rubric:[
      { c:"Barter", code:"SS-E",
        d:["Says barter is swapping.","“You swap things.”"],
        a:["Explains barter and its main problem.","“You need someone who has what you want AND wants what you have — a double match.”"],
        f:["Explains several problems and why money solves them.","“Some goods can't be split or go rotten; money is small, lasts and can be counted.”"],
        i:["I know barter is swapping.","I can explain the double-match problem.","I can explain why money solves barter's problems."] },
      { c:"Cacao money", code:"SS-E · SS-H",
        d:["Says the Aztecs used beans.","“They paid with beans.”"],
        a:["Explains cacao beans and quachtli as currency, with prices.","“A turkey hen cost about 100 beans; bigger payments used cotton cloaks.”"],
        f:["Explains what makes something good money, using counterfeits as evidence.","“People faked beans with wax — proof the beans really worked as money.”"],
        i:["I know they used beans.","I can explain cacao and quachtli as money.","I can explain what makes good money."] },
      { c:"Change & fair trade", code:"SS-E · SS-C",
        d:["Names a way we pay today.","“You tap your card.”"],
        a:["Describes the change from barter to electronic payments and explains fair trade.","“Barter → cacao → coins → cards → phones. Fair trade pays farmers a fair price.”"],
        f:["Evaluates benefits and problems, and fairness for producers.","“Tapping is fast but easy to overspend; fair trade helps farmers, but costs shoppers a little more.”"],
        i:["I can name a way to pay.","I can describe the change and fair trade.","I can weigh up benefits, problems and fairness."] }
    ],
    plan:{
      prior:"Monday: the Tlatelolco market and fake cacao beans.",
      kc:["Thinking","Participating & contributing","Relating to others"],
      sequence:[
        ["0–6","Field Transmission","Sofía's empty wallet; Glyph Check; LI/SC.","Recall."],
        ["6–20","Excavate","Trading game (barter → cacao); Money timeline; Fair trade; Hononga.","Play, compare, discuss."],
        ["20–22","Big Project check-in","Atlas/Campaign.","Share."],
        ["22–38","Choose Your Path","Comic / class market / advert.","Create."],
        ["38–45","Through the Lens","Micah 6:8; 2 Cor 9:7.","Discuss."],
        ["45–50","Decode & Exit","Clue (12).","Solve; self-assess."]
      ],
      diff:{
        supported:"Comic prompts; price cards.",
        esol:"Visual timeline; acting out barter.",
        learning:"Hands-on market; pictures.",
        flying:"Problems of electronic money; price shares."
      },
      assess:{
        lookFor:["Explains barter's problem","Cacao/quachtli as money","Change over time + fair trade"],
        evidence:["Comics/adverts","Market observations","Exit self-assessment"]
      },
      inquiry:["Did the barter game make the ‘double match’ clear?","Fair trade — sensitive to families' budgets; avoid judgement.","Link to Week 10 (rights campaign)."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"sofia", meta:"Market day",
        msg:"Navigators, I've a confession: the Collector didn't just steal my map — he took my **wallet** too. No cash, no cards. So today I'm going to the market the old way: **swapping**. How hard could it be…?",
        notes:[["SAY","Read the message."],["ASK","“What could go wrong if you had to swap for everything?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:"real", qs:[
          { q:"Name the two Aztec schools.", a:"Calmecac (nobles) and telpochcalli (commoners)." },
          { q:"What did market judges do?", a:"Checked fair measures and punished cheats." },
          { q:"Who were the pochteca?", a:"Long-distance merchants." }],
        notes:[["SAY","Whiteboards; show on 3."],["CLICK","→ flips."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and SC."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Play it", title:"Barter vs cacao", ix:"barter",
        notes:[["CLICK","Barter mode: students tell you which trader to visit. (Sandals → weaver → farmer → fisher → potter.)"],["ASK","“Why did that take so long?”"],["CLICK","Cacao mode: tap items to fill the basket — the total shows as a Maya numeral."],["NOTE","Prices are from a 1545 Nahuatl price list from Tlaxcala (e.g. turkey hen = 100 beans; freshly picked avocado = 3; ripe avocado = 1)."],["PACE","Aim for minute 13."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"How we pay", title:"The money timeline", h:"480px", cards:[
          { big:"🔄", color:"#5a3825", t:"Barter", d:"Swap goods. Needs a **double match**." },
          { big:"🫘", color:"#C46A3A", t:"Cacao & cloth", d:"Beans for small buys, **quachtli** for big ones. People even made **fake** beans!" },
          { big:"🪙", color:"#D9A23A", t:"Coins & notes", d:"Metal coins and paper notes, made by governments." },
          { big:"📱", color:"#2E9FB0", t:"Cards & phones", d:"**Electronic payments** — the money moves as information." }],
        notes:[["ASK","“What problem did each new kind of money solve? What new problems did it create?”"]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"From emperors' money to your chocolate", title:"Fair trade", visual:{ artefact:"cacao" },
        bullets:["Most cacao today is grown by **small family farms**, mostly in West Africa and Latin America.","Many farmers earn only a **small share** of what a chocolate bar costs.","**Fair trade** sets a minimum fair price and extra money for the community — and works against child labour."],
        notes:[["ASK","“Is it fair that a farmer gets only a little of the price?”"],["NOTE","Keep it non-judgemental — families make budget choices."],["PACE","Aim for minute 20."]] },
      { type:"hononga", phase:"excavate", fs:"real", title:"Money in Aotearoa",
        body:"Our money tells our story: the **$5 note** shows Sir Edmund Hillary and a **hoiho**; coins show a **kiwi** and a **kōtuku**.\n\nNew Zealanders took up **EFTPOS** cards and tap-and-go very quickly — today many shops hardly see cash!",
        notes:[["ASK","“What would you put on a new NZ banknote? Why?”"]] },
      bpCheck("Expedition Atlas or Campaign"),
      { type:"paths", phase:"paths", fs:null, notes:[["SAY","Explain paths."],["CLICK","Start the timer."]] },
      { type:"lens", phase:"lens", fs:null, notes:[["CLICK","→ reveals each move."],["SAY","Read Micah 6:8 and 2 Corinthians 9:7."],["ASK","Use both questions."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["ASK","“4 avocados × 3 beans?” (12)"],["CLICK","▬▬ ●● → Check."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = cacao beans."]] }
    ]
  };

  /* ======================= WEDNESDAY · SCIENCE ======================= */
  const wed = {
    id:"w07-wed", week:7, day:"wed", subject:"science", duration:50,
    title:"Electromagnets: Lifting the Stone Lid", guide:"mateo",
    codes:["SC-MIE","SC-MF","SC-P"],
    coverage:"Y5–6 Science: magnetism as a non-contact force; an electric current creates a magnetic field (electromagnets); fair testing with a graph of results.",
    li:"We are learning to make and test an electromagnet.",
    sc:["I can explain that an electric current makes a magnetic field.","I can carry out a fair test: number of coils vs paper clips lifted.","I can explain uses of electromagnets."],
    vocab:[
      { w:"electromagnet", def:"a magnet made by electric current flowing through a coil of wire" },
      { w:"coil", def:"wire wound round and round" },
      { w:"core", def:"the iron in the middle of the coil that makes it stronger" },
      { w:"variable", def:"something that can change in an experiment" },
      { w:"graph", def:"a picture of results that shows patterns" }
    ],
    prep:{ min:10, items:["Per group: a large iron nail, 1–1.5 m of thin insulated wire, AA battery pack, crocodile leads, a pile of steel paper clips","Results table in journals"] },
    safety:["Connect only for a few seconds at a time — the wire and battery get warm.","Batteries only — never sockets.","Don't leave it connected!"],
    hononga:"Electromagnets are everywhere in Aotearoa: in the **turbines** of our hydro power stations (like Manapōuri and the Waitaki dams), in MRI scanners at our hospitals, and in the speakers of every phone. And Auckland's port cranes lift containers on and off ships day and night.",
    paths:[
      { id:"A", name:"The Scribe", product:"Fair-Test Report + Graph", steps:["Question: does the number of coils change how many clips are lifted?","Test 10, 20, 30 coils (on screen or with a kit).","Draw a graph and write a conclusion."], flying:"Explain why the iron core makes it stronger." },
      { id:"B", name:"The Builder", product:"Build & Test", steps:["Wind wire neatly round a nail (count the coils!).","Connect for 5 seconds: how many clips?","Add 10 more coils and test again."], flying:"Test 2 cells vs 1 cell, keeping coils the same." },
      { id:"C", name:"The Messenger", product:"Advice for Mateo", steps:["Mateo must lift an iron-ringed stone lid.","Explain how to build the strongest electromagnet.","Explain how to drop the lid safely when it's moved."], flying:"Explain why a permanent magnet would be a bad choice." }
    ],
    supportedShort:"pre-wound nail; results table; step cards.",
    lens:{
      pillar:"manaaki", title:"Power for a purpose",
      look:"Look at the electromagnet: an ordinary nail becomes powerful — but only while the current flows. Switch it off and the power is gone.",
      ref:"Acts 1:8",
      paraphrase:"You will receive power when the Holy Spirit comes on you; and you will be my witnesses… to the ends of the earth.",
      talk:[
        { q:"Jesus promised His followers ‘power’. What was the power FOR — showing off, or something else?", listen:"To tell others about Jesus, to serve, to love — power for a purpose, not for show." },
        { q:"An electromagnet's power comes from the battery. Where do Christians say their strength to do good comes from?", listen:"God's Spirit, not just our own effort; staying connected (like Week 3's loop)." }
      ],
      live:"Use your ‘power’ (a gift or skill) to **help** someone this week."
    },
    clue:{ prompt:"In the electromagnet lab: 20 coils and 1 cell lift how many paper clips?", answer:10, explain:"20 coils with 1 cell lift 10 clips → two bars. Clue saved!" },
    next:"Thursday — sound: code the teponaztli drum!",
    rubric:[
      { c:"How electromagnets work", code:"SC-MIE · SC-MF",
        d:["Says it's a magnet with electricity.","“The battery makes it magnetic.”"],
        a:["Explains current in a coil makes a magnetic field; off = no field.","“Current flowing round the coil makes a magnetic field; switch it off and the clips drop.”"],
        f:["Explains the core and factors affecting strength.","“The iron core concentrates the field; more coils or more current make it stronger.”"],
        i:["I know it uses electricity.","I can explain how it makes a field.","I can explain what makes it stronger."] },
      { c:"Fair test & graph", code:"SC-P",
        d:["Tests with help.","Tests once with no record."],
        a:["Changes only coils, records results and graphs them.","Results for 10, 20 and 30 coils plotted; same battery and nail."],
        f:["Identifies the pattern and evaluates the test.","“More coils → more clips. Our battery got weaker, so we should test in a random order.”"],
        i:["I tested with help.","I did a fair test and a graph.","I found the pattern and evaluated my test."] },
      { c:"Uses", code:"SC-MIE",
        d:["Names one use.","“Cranes.”"],
        a:["Explains why electromagnets are useful (switch on/off).","“Scrapyard cranes can pick up cars and drop them by switching off.”"],
        f:["Explains several uses and links to everyday technology.","“Speakers, motors, MRI scanners and power-station generators all use electromagnets.”"],
        i:["I can name a use.","I can explain why they're useful.","I can explain several uses."] }
    ],
    plan:{
      prior:"Week 6: magnets, poles, fields. Weeks 1–5: circuits.",
      kc:["Thinking","Managing self","Participating & contributing"],
      sequence:[
        ["0–6","Field Transmission","Mateo and the stone lid; Glyph Check; LI/SC; safety.","Recall."],
        ["6–18","Excavate","Electromagnet lab (coils, cells, switch, graph); uses; Hononga.","Predict, test, graph."],
        ["18–20","Big Project check-in","My Fair Test.","Share."],
        ["20–38","Choose Your Path","Kits out.","Report / build / advice."],
        ["38–45","Through the Lens","Acts 1:8.","Discuss."],
        ["45–50","Decode & Exit","Clue (10); kits away.","Solve; self-assess."]
      ],
      diff:{
        supported:"Pre-wound nails; results table.",
        esol:"Demonstration; graph visual.",
        learning:"On-screen lab; count clips with a partner.",
        flying:"Cells vs coils; explain the core."
      },
      assess:{
        lookFor:["Current → field","Fair test with graph","Uses explained"],
        evidence:["Graphs","Kit observations","Exit self-assessment"]
      },
      inquiry:["Batteries warm? Remind brief connections.","Did graphs show the pattern clearly?","Fair Test Big Projects — check they're manageable."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"mateo", meta:"The stone lid",
        msg:"We've found a stone box under the market floor — but its lid is far too heavy to lift by hand. It has **iron rings** set into the top. If only I had a magnet strong enough… and one I could switch **off** to put it down gently. Wait — I can **make** one, with electricity!",
        notes:[["SAY","Read the message."],["ASK","“How could electricity make a magnet?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:"real", qs:[
          { q:"Like poles…? Opposite poles…?", a:"Repel; attract." },
          { q:"What is barter?", a:"Swapping goods without money." },
          { q:"What is a fair test?", a:"Change one thing, keep the rest the same, measure the result." }],
        notes:[["SAY","Whiteboards; show on 3."],["CLICK","→ flips."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and SC."]] },
      { type:"safety", phase:"transmission", fs:"real", title:"Electromagnet safety", items:[
          { icon:"⏱️", t:"5 seconds", d:"Connect only for a few seconds — wires and batteries get warm." },
          { icon:"🔋", t:"Batteries only", d:"Never sockets." },
          { icon:"🔥", t:"Hot? Stop!", d:"If anything gets hot, disconnect and tell the teacher." }],
        notes:[["SAFETY","Read the rules; repeat “five seconds”."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Test it", title:"Electromagnet lab", ix:"electromag",
        notes:[["SAY","“Current flowing through a coil makes a magnetic field. The iron nail makes it much stronger.”"],["CLICK","Try 10, 20, 30, 40 coils with 1 cell, pressing Record each time. Then try 2 cells."],["ASK","“What pattern does the graph show?”"],["CLICK","Switch off: the clips drop!"],["NOTE","20 coils + 1 cell = 10 clips (the Glyph Clue)."],["PACE","Aim for minute 14."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Everywhere!", title:"Electromagnets at work", h:"480px", cards:[
          { big:"🏗️", color:"#D9A23A", t:"Cranes", d:"Scrapyard cranes lift cars — and **drop** them by switching off." },
          { big:"🔊", color:"#2E9FB0", t:"Speakers", d:"An electromagnet pushes a cone back and forth to make **sound**." },
          { big:"⚙️", color:"#1F7A5A", t:"Motors", d:"Electromagnets push and pull to make motors **spin** — in fans, drills and cars." },
          { big:"🏥", color:"#B3262E", t:"MRI", d:"Giant electromagnets let doctors see **inside** the body." }],
        notes:[["ASK","“Why is being able to switch it OFF so useful?”"],["PACE","Aim for minute 18."]] },
      { type:"hononga", phase:"excavate", fs:"real", title:"Electromagnets in Aotearoa",
        body:"Electromagnets spin inside the generators of our **hydro power stations** like Manapōuri and the Waitaki dams.\n\nThey're in **MRI** scanners in our hospitals, the speakers of every phone, and the giant cranes at our ports.",
        notes:[["ASK","“Where might there be an electromagnet in our classroom?” (Speakers, fans, the projector's fan…)"]] },
      bpCheck("My Fair Test"),
      { type:"paths", phase:"paths", fs:null, notes:[["SAY","Explain paths; kits out."],["CLICK","Start the timer."],["SAFETY","Remind: 5-second connections."]] },
      { type:"lens", phase:"lens", fs:null, notes:[["CLICK","→ reveals each move."],["SAY","Read Acts 1:8."],["ASK","Use both questions."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["ASK","“20 coils, 1 cell — how many clips?” (10)"],["CLICK","▬▬ → Check."],["SAFETY","Disconnect all batteries."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = cacao beans."]] }
    ]
  };

  /* ======================= THURSDAY · TECHNOLOGY ======================= */
  const thu = {
    id:"w07-thu", week:7, day:"thu", subject:"technology", duration:50,
    title:"Sound: the Teponaztli Drum Code", guide:"mateo",
    codes:["DT-CT","TE-TK","VA-UC"],
    coverage:"Digital Technologies — Computational Thinking (Progress Outcomes 1–2): algorithms for sound output; sequence and loops; tone frequency and timing. Technology (NZC 2007 L3): output devices (piezo buzzer). Music/arts link: rhythm and notation.",
    li:"We are learning to code a rhythm and melody with a buzzer.",
    sc:["I can explain how a piezo buzzer makes sound from code.","I can use tone() with a frequency and a delay.","I can compose a rhythm with a loop and explain it."],
    vocab:[
      { w:"piezo buzzer", say:"pee-AY-zo", def:"a small part that vibrates to make sound when it gets electricity" },
      { w:"frequency", def:"how many vibrations per second (hertz, Hz) — higher = higher pitch" },
      { w:"pitch", def:"how high or low a sound is" },
      { w:"rhythm", def:"a pattern of long and short sounds and silences" },
      { w:"beat", def:"the steady pulse of music" },
      { w:"teponaztli", say:"teh-poh-NAZ-tlee", def:"an Aztec slit drum carved from a log, with two tones" }
    ],
    prep:{ min:3, items:["Projector + speakers (the simulator plays sound)","Optional Arduino: piezo buzzer on pin 8 and GND","Journals for rhythm notation"] },
    safety:["Keep volume comfortable.","Real boards: USB power only."],
    hononga:"**Taonga pūoro** are traditional Māori instruments: the **pūtōrino**, kōauau (flute), **pahū** (a wooden gong — like a slit drum!), and the **pūrerehua** (bullroarer). Hirini Melbourne and Richard Nunns helped bring many back into use in the 1980s–90s.",
    paths:[
      { id:"A", name:"The Scribe", product:"Rhythm Notation", steps:["Write your rhythm on a grid: X = drum hit, — = rest.","Write it as code-like steps (tone, delay).","Explain where the loop is."], flying:"Write a call-and-response rhythm for two players." },
      { id:"B", name:"The Builder", product:"Code the Teponaztli", steps:["In the simulator, change the tones and timings.","Make a rhythm that repeats.","Test on a real buzzer if available."], flying:"Code a short melody you know (pitch + timing)." },
      { id:"C", name:"The Messenger", product:"Perform & Explain", steps:["Compose an 8-beat rhythm on the grid.","Perform it with the class (clap or tap).","Explain your algorithm to the audience."], flying:"Teach the class to play your rhythm in two groups." }
    ],
    supportedShort:"pre-filled grid to change; simulator pre-loaded.",
    lens:{
      pillar:"aroha", title:"Praise Him with drums",
      look:"Look at the teponaztli: a hollow log, carefully carved so it sings with two voices. Music has been part of worship across cultures for thousands of years.",
      ref:"Psalm 150:3–6",
      paraphrase:"Praise him with the sounding of the trumpet, praise him with the harp and lyre, praise him with timbrel and dancing… praise him with the clash of cymbals… Let everything that has breath praise the Lord.",
      talk:[
        { q:"Psalm 150 lists all kinds of instruments. What does that tell us about how God feels about music and creativity?", listen:"He enjoys it; every kind of music and culture can praise Him; creativity is a gift." },
        { q:"The Aztecs used drums in worship of their gods. Christians believe there is one true God. How can we use music to honour Him?", listen:"Singing, playing, using our gifts with joy, music that is true and good." }
      ],
      live:"Play or sing a song of thanks this week."
    },
    clue:{ prompt:"A two-tone drum plays 2 bars. Each bar has 4 beats. How many beats altogether?", answer:8, explain:"2 × 4 = 8 → one bar and three dots. Clue saved for the seal!" },
    next:"Friday — mosaic art and Seal VII.",
    rubric:[
      { c:"How the buzzer works", code:"TE-TK",
        d:["Says it beeps.","“It makes a noise.”"],
        a:["Explains frequency and pitch.","“tone(8, 440) makes the buzzer vibrate 440 times a second; higher numbers sound higher.”"],
        f:["Connects vibration, frequency and real instruments.","“Like the teponaztli's thicker tongue vibrating slower, a lower frequency gives a lower note.”"],
        i:["I know it beeps.","I can explain frequency and pitch.","I can link vibration to real instruments."] },
      { c:"Coding rhythm", code:"DT-CT",
        d:["Runs the code with help.","Plays the example."],
        a:["Changes tones and delays to make a repeating rhythm.","A rhythm with two pitches and rests that loops."],
        f:["Composes with purpose and explains the algorithm.","“I used long rests to make it feel like a heartbeat, and repeat it 4 times.”"],
        i:["I ran it with help.","I made a repeating rhythm.","I composed with purpose and explained it."] },
      { c:"Notation & explanation", code:"DT-CT · VA-UC",
        d:["Describes the sound.","“It goes boom boom.”"],
        a:["Writes the rhythm in notation and explains the loop.","Grid notation with hits and rests; the loop marked."],
        f:["Teaches others to perform it accurately.","Leads the class in a two-part performance."],
        i:["I can describe it.","I can write it down and explain the loop.","I can teach others to play it."] }
    ],
    plan:{
      prior:"Weeks 4–6: Arduino simulator, sequences, loops, if/else.",
      kc:["Thinking","Using language, symbols & texts","Participating & contributing"],
      sequence:[
        ["0–6","Field Transmission","Mateo's signal drum; Glyph Check; LI/SC.","Recall."],
        ["6–18","Excavate","The teponaztli; Rhythm grid; Arduino piezo (tone & delay); Hononga (taonga pūoro).","Listen, compose, code."],
        ["18–20","Big Project check-in","Temple of Light.","Share."],
        ["20–38","Choose Your Path","Notation / code / perform.","Create, perform."],
        ["38–45","Through the Lens","Psalm 150.","Discuss."],
        ["45–50","Decode & Exit","Clue (8).","Solve; self-assess."]
      ],
      diff:{
        supported:"Pre-filled grid; clap along.",
        esol:"Music is a universal language; visual grid.",
        learning:"Clapping and tapping; one change at a time.",
        flying:"Melodies; two-part rhythms."
      },
      assess:{
        lookFor:["Explains frequency","Repeating rhythm","Notation + explanation"],
        evidence:["Notation","Performances","Exit self-assessment"]
      },
      inquiry:["Noise levels — set a volume rule.","Who could link frequency to pitch?","Temple of Light: who wants a buzzer?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"mateo", meta:"Signal drums",
        msg:"In the market museum I found a **teponaztli** — a drum carved from a single log, with an H-shaped slit that makes **two notes**. The Aztecs used drums like this to send signals and in ceremonies. I want a signal for our camp — and our microcontroller can make sound too!",
        notes:[["SAY","Read the message."],["ASK","“How can a drum ‘send a message’?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:"real", qs:[
          { q:"What does an electromagnet need to work?", a:"Current flowing through a coil (with an iron core)." },
          { q:"What does if/else do?", a:"Chooses what to do based on a condition." },
          { q:"Name one problem with barter.", a:"You need a double match (or goods can't be split)." }],
        notes:[["SAY","Whiteboards; show on 3."],["CLICK","→ flips."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and SC."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Two tones, one log", title:"Teponaztli rhythm grid", ix:"rhythm",
        notes:[["CLICK","Press Play to hear the starting rhythm. Turn the tempo up and down."],["CLICK","Clear, then let students design a rhythm (tap squares). Play it!"],["ASK","“Why do two tongues of different thickness make different notes?” (Thicker = vibrates slower = lower.)"],["NOTE","Image: artistic reconstruction of a teponaztli."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"How code makes sound", title:"Frequency & pitch", h:"460px", cards:[
          { big:"〰️", color:"#2E9FB0", t:"Vibration", d:"Sound is **vibration**. A piezo buzzer has a disc that flexes back and forth." },
          { big:"Hz", color:"#D9A23A", t:"Frequency", d:"**tone(8, 440)** makes it vibrate **440 times a second** (440 Hz) — the note A." },
          { big:"♪", color:"#B3262E", t:"Pitch", d:"Higher frequency = **higher** note. Lower frequency = **lower** note." }],
        notes:[["SAY","“Put your hand on your throat and hum high then low — feel the vibration change.”"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Code it", title:"The drum code", ix:"arduino",
        cfg:{ title:"Teponaztli code", leds:[], piezo:{ pin:8, label:"PIEZO" },
          program:[{ op:"tone", pin:8, hz:330, ms:250 }, { op:"wait", ms:100 }, { op:"tone", pin:8, hz:220, ms:250 }, { op:"wait", ms:100 }, { op:"tone", pin:8, hz:330, ms:200 }, { op:"tone", pin:8, hz:330, ms:200 }, { op:"tone", pin:8, hz:220, ms:400 }, { op:"wait", ms:500 }] },
        notes:[["CLICK","⏭ Step through: each tone line plays a note."],["CLICK","▶ Run: it loops. Change pitches with ♪+ / ♪− and timings with + / −."],["ASK","“How many notes in one loop? How many in 3 loops?”"],["NOTE","Real board: piezo + leg to pin 8, − leg to GND. Arduino's tone() needs a delay() after it so the next note waits."],["PACE","Aim for minute 18."]] },
      { type:"hononga", phase:"excavate", fs:"real", title:"Taonga pūoro",
        body:"**Taonga pūoro** are traditional Māori instruments: the **pūtōrino**, **kōauau** (flute), **pahū** (a wooden gong — a cousin of the slit drum!) and the **pūrerehua** (bullroarer).\n\nHirini Melbourne and Richard Nunns helped bring many back into use from the 1980s.",
        notes:[["ASK","“Has anyone heard taonga pūoro played?”"]] },
      bpCheck("Temple of Light"),
      { type:"paths", phase:"paths", fs:null, notes:[["SAY","Explain paths."],["CLICK","Start the timer. Set a volume rule!"]] },
      { type:"lens", phase:"lens", fs:null, notes:[["CLICK","→ reveals each move."],["SAY","Read Psalm 150:3–6."],["ASK","Use both questions."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["ASK","“2 bars × 4 beats?” (8)"],["CLICK","▬ ●●● → Check."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = cacao beans."]] }
    ]
  };

  /* ======================= FRIDAY · ART ======================= */
  const fri = {
    id:"w07-fri", week:7, day:"fri", subject:"art", duration:50,
    title:"Mosaic: Torn-Paper Turquoise", guide:"rosa",
    codes:["VA-UC","VA-PK","VA-DI"],
    coverage:"Visual Arts (NZC 2007, Level 3): understanding art in context (Aztec and Mixtec turquoise mosaic; trade in materials); practical knowledge (tesserae, gaps/grout, colour value to show form); developing ideas (an original animal design).",
    li:"We are learning to create a mosaic using tesserae, colour and tone.",
    sc:["I can explain how Aztec and Mixtec artists made mosaics, and where turquoise came from.","I can use small torn or cut pieces with even gaps.","I can use lighter and darker pieces to show form."],
    vocab:[
      { w:"mosaic", say:"moh-ZAY-ik", def:"a picture made from many small pieces" },
      { w:"tesserae", say:"TESS-uh-ree", def:"the small pieces in a mosaic (one is a tessera)" },
      { w:"grout / gap", def:"the space between tesserae" },
      { w:"value", def:"how light or dark a colour is" },
      { w:"turquoise", def:"a blue-green stone, traded from far to the north of the Aztecs" }
    ],
    prep:{ min:5, items:["Magazines or coloured paper in blues, greens (and accent colours)","Glue sticks","Codex books (panel 7) or card squares","Pencils for the outline"] },
    safety:["Scissors (if cutting): walk carefully."],
    hononga:"**Pāua** shell — with its shimmering blues and greens — is set into the eyes of many Māori carvings and into jewellery, catching the light like the turquoise in Aztec mosaics. Each pāua shell is unique, just like each tessera.",
    paths:[
      { id:"A", name:"The Scribe", product:"Mosaic Tile", steps:["Draw a simple outline of your team animal.","Fill it with torn tesserae, leaving even gaps.","Use lighter pieces on one side for light."], flying:"Use 3+ values of the same colour to show form." },
      { id:"B", name:"The Builder", product:"Folio VII Mosaic Page", steps:["Plan a design for panel 7 of your codex.","Tear blue-green tesserae and sort them light → dark.","Glue carefully with gaps; add a border."], flying:"Add a contrasting accent colour (coral or gold) for focus." },
      { id:"C", name:"The Messenger", product:"Team Mosaic", steps:["Each team member makes one section of a big animal.","Agree on light direction and colours first.","Join the sections and present the team mosaic."], flying:"Explain how you kept the sections consistent." }
    ],
    supportedShort:"pre-drawn outlines; pre-sorted colour trays.",
    lens:{
      pillar:"aroha", title:"Many pieces, one picture",
      look:"Look at a mosaic: one tiny piece looks like nothing. Together, thousands make something beautiful. Every piece matters — even the small, dark ones.",
      ref:"1 Corinthians 12:18–22",
      paraphrase:"God has placed the parts in the body, every one of them, just as he wanted them to be… The eye cannot say to the hand, ‘I don't need you!’… those parts of the body that seem to be weaker are indispensable.",
      talk:[
        { q:"In a mosaic, the dark pieces make the light ones shine. How is our class like a mosaic?", listen:"Everyone's different gifts make the whole; no one is unimportant; we need each other." },
        { q:"Who might feel like a ‘small piece’ in our school? How can we show they matter?", listen:"New students, quiet people — include them, thank them, notice them (Aroha — Others)." }
      ],
      live:"Gallery walk: thank someone for their ‘piece’ in our class this week."
    },
    clue:{ prompt:"Folio Seal: add the four Glyph Clues from Monday to Thursday.", answer:32, explain:"2 + 12 + 10 + 8 = 32 = one twenty + 12." },
    next:"Week 8 — The Fifth Sun: beliefs, the Templo Mayor and the river generator.",
    rubric:[
      { c:"Context", code:"VA-UC",
        d:["Says the Aztecs made mosaics.","“They made pictures with stones.”"],
        a:["Explains Aztec/Mixtec mosaic and where turquoise came from.","“Artisans glued turquoise onto wood; the turquoise was traded from far north.”"],
        f:["Links materials, trade and value.","“Turquoise came from hundreds of kilometres away — so mosaics showed wealth and trade connections.”"],
        i:["I know they made mosaics.","I can explain how and where turquoise came from.","I can link materials, trade and value."] },
      { c:"Tesserae & gaps", code:"VA-PK",
        d:["Pieces overlap or are very uneven.","Large overlapping scraps."],
        a:["Uses small pieces with fairly even gaps.","Neat tesserae with clear gaps inside the outline."],
        f:["Uses size and direction of pieces to follow the shape.","Smaller pieces at edges and details; rows follow the curve of the body."],
        i:["My pieces overlap.","My pieces are small with even gaps.","My pieces follow the shape skilfully."] },
      { c:"Value & design", code:"VA-PK · VA-DI",
        d:["Uses one colour value.","All the same blue."],
        a:["Uses light and dark pieces to show form; original animal.","Light on the left, dark on the right of the body."],
        f:["Uses value and accent colour with purpose and explains choices.","“I put coral at the eye so you look there first.”"],
        i:["I used one value.","I used light and dark to show form.","I used value and accents with purpose."] }
    ],
    plan:{
      prior:"Week 5: tone; Week 6: motifs; Monday: trade and markets.",
      kc:["Thinking","Managing self","Relating to others"],
      sequence:[
        ["0–6","Field Transmission","Doña Rosa and a turquoise fragment; Glyph Check; LI/SC.","Recall the week."],
        ["6–16","Excavate","Turquoise mosaics & trade; Mosaic studio (gaps, value); Hononga (pāua).","Observe, experiment."],
        ["16–18","Big Project check-in","My Codex.","Share."],
        ["18–40","Choose Your Path (22 min)","Panel 7.","Tile / page / team mosaic."],
        ["40–45","Through the Lens","1 Corinthians 12; gallery walk.","Thank someone."],
        ["45–50","Folio Seal","2 + 12 + 10 + 8 = 32 (20s level); intercept.","Solve; discuss."]
      ],
      diff:{
        supported:"Outlines; sorted colours.",
        esol:"Demonstration; visual steps.",
        learning:"Bigger tesserae; fewer values.",
        flying:"Directional tesserae; accent colour."
      },
      assess:{
        lookFor:["Explains context","Even gaps","Light/dark for form"],
        evidence:["Codex panel 7 (photo)","Team mosaics","Exit self-assessment"]
      },
      inquiry:["Paper scraps — tidy-up routine?","Did students use value deliberately?","Next week's lesson on beliefs needs sensitivity — prepare."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"rosa", meta:"Restoration tent",
        msg:"Children, look what fell out of Folio VII: a tiny chip of **turquoise**, blue as the lake. Aztec and Mixtec artisans glued thousands of these onto wood to make glittering mosaics — and the turquoise travelled hundreds of kilometres to reach them. Today, your mosaics will be made of paper.",
        notes:[["SAY","Read the message."],["ASK","“How do you make a picture out of tiny pieces?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:"real", title:"This week so far", qs:[
          { q:"How much was a turkey hen worth?", a:"About 100 cacao beans." },
          { q:"How can you make an electromagnet stronger?", a:"More coils, more current (cells), an iron core." },
          { q:"What does a higher frequency sound like?", a:"A higher pitch." }],
        notes:[["SAY","Whole-week review."],["CLICK","→ flips."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and SC."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Treasure from afar", title:"Turquoise mosaics", h:"500px", cards:[
          { big:"💠", color:"#2EA6A6", t:"Tesserae", d:"Thousands of tiny pieces of **turquoise**, shell and stone glued onto carved wood." },
          { big:"🧭", color:"#D9A23A", t:"Traded far", d:"Much turquoise came from mines **far to the north** (today's south-west USA) — a long trade journey." },
          { big:"🏛️", color:"#B3262E", t:"Survivors", d:"A few Aztec/Mixtec mosaics survive in museums today, like the **British Museum** in London." }],
        notes:[["SAY","“We'll design our own animals — not copy religious masks.”"],["ASK","“Why would something made from faraway stone be so valuable?”"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Experiment first", title:"Mosaic studio", ix:"mosaic", paper:true,
        notes:[["CLICK","Try each animal, colour set, light direction and gap size."],["ASK","“Which gap size looks best? Why do the light and dark pieces make it look 3D?”"],["CLICK","Tap tiles to change their tone."],["PACE","Aim for minute 15."]] },
      { type:"hononga", phase:"excavate", fs:"real", title:"Pāua — light in the eyes",
        body:"**Pāua** shell, shimmering blue and green, is set into the eyes of many Māori carvings and into jewellery — catching the light like turquoise in a mosaic.\n\nEvery pāua shell is unique, like every tessera.",
        notes:[["ASK","“Why might carvers put shimmering shell in a carving's eyes?”"]] },
      bpCheck("My Codex"),
      { type:"paths", phase:"paths", fs:null, minutes:22, notes:[["SAY","Explain paths; panel 7 of the codex."],["CLICK","Start the 22-minute timer."]] },
      { type:"lens", phase:"lens", fs:null, notes:[["CLICK","→ reveals each move."],["SAY","Read 1 Corinthians 12:18–22. Then the gallery walk."]] },
      { type:"folioseal", phase:"decode", fs:"story",
        notes:[["SAY","“Seal VII — the 20s level again!”"],["CLICK","2 + 12 + 10 + 8 = 32. Press +20 once, then ▬▬ ●● → Break the seal."]] },
      { type:"intercept", phase:"decode", fs:"story",
        msg:"Clever children. I'll make you an offer: help me open the last folios and I'll give you a SHARE of everything we sell. Rich, every one of you. Think about it. — C.",
        ask:"Would you take the Collector's offer? What makes an offer like this tempting — and what's wrong with it?",
        notes:[["SAY","Read in the Collector's voice."],["LISTEN","Money is tempting; but the codex belongs to Guatemala and Maya people; we'd be sharing in stealing; integrity matters more than money."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess; mosaics dry flat."],["CLICK","C = cacao beans."]] }
    ]
  };

  FC.WEEKS[7] = {
    n:7,
    story:"Folio VII is a market scene. The team walks the great market of Tlatelolco, meets every level of Aztec society, discovers cacao money (and fake beans!), builds an electromagnet to lift a stone lid, codes the teponaztli drum, and makes turquoise-style mosaics. Big Projects check in every day. Seal VII reveals a sun with five rays — and the Collector offers the class a share.",
    hononga:"Māori trade networks: pounamu and tītī (Mon); NZ money and EFTPOS (Tue); electromagnets in our hydro stations (Wed); taonga pūoro (Thu); pāua in carving (Fri). Check local framing with your Māori lead / Ngāi Tahu rūnanga.",
    seal:{
      answer:32,
      instruction:"Add the four **Glyph Clues**. The total is over 19 — use the **20s level** (+20), then build the rest.",
      reveal:"🟡 **Folio VII unsealed:** a great golden **sun with five rays**. Dr Canul: “The Aztecs believed they lived in the age of the **Fifth Sun**…” Next week: *The Fifth Sun*.",
      art:() => { const v = FC.art.sunFolio(); v.setAttribute("style", "width:100%;height:100%"); return v; }
    },
    lessons:[mon, tue, wed, thu, fri]
  };
})(window.FC);
