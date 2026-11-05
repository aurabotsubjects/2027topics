/* ==========================================================
   WEEK 8 — FOLIO VIII · THE FIFTH SUN
   ========================================================== */
(function(FC){
  "use strict";

  const bpCheck = (name) => ({ type:"discussion", phase:"paths", fs:null, kicker:"Big Project check-in", q:`**${name}:** what did you finish last week, and what's your goal for **this** week?`, sub:"Two weeks to the Exhibition! Tell a partner your next step in 30 seconds.", talk:60,
    notes:[["SAY","“One minute: Big Project goals.”"],["NOTE","Students on track may use Path time for their Big Project."]] });

  /* ======================= MONDAY · HISTORY ======================= */
  const mon = {
    id:"w08-mon", week:8, day:"mon", subject:"history", duration:50,
    title:"Beliefs & the Fifth Sun: the Templo Mayor", guide:"itzel",
    codes:["SS-H","SS-P","RE"],
    coverage:"Y5 History (2027 Social Sciences): an ancient civilisation's religion and beliefs; how archaeology uncovers the past (the Templo Mayor); comparing beliefs respectfully and understanding perspectives.",
    li:"We are learning about Aztec beliefs about the Sun, and why the Templo Mayor was at the centre of their world.",
    sc:["I can explain the Aztec belief in the Fifth Sun.","I can describe the Templo Mayor and how it was rediscovered.","I can compare Aztec beliefs with the Christian message, respectfully and honestly."],
    vocab:[
      { w:"belief", def:"something a person or group holds to be true" },
      { w:"Fifth Sun", def:"the Aztec belief that they lived in the fifth age of the world" },
      { w:"Templo Mayor", say:"TEM-ploh my-OR", def:"the ‘Great Temple’ at the centre of Tenochtitlan" },
      { w:"offering", def:"a gift given in worship" },
      { w:"sacrifice", def:"giving up something precious, often in worship" },
      { w:"excavation", def:"carefully digging to uncover the past" },
      { w:"respect", def:"treating people and their beliefs with care, even when we disagree" }
    ],
    prep:{ min:3, items:["Read the teacher notes on the Lens slide beforehand (sensitive content)","Expedition Journals","Optional: card and glue for layered temple models (Path B)"] },
    safety:["Sensitive content: human sacrifice is mentioned briefly and factually only — no detail, no images. Watch for anxious students and follow up kindly."],
    hononga:"Our **kūmara** is South American! Genetic evidence suggests Polynesian voyagers and South Americans met around **1200 CE** — and the kūmara travelled across the Pacific. (We'll follow the voyage tomorrow.) Māori traditions honour **Rongo**, associated with cultivated food and peace — every culture has wondered where food, sun and life come from.",
    paths:[
      { id:"A", name:"The Scribe", product:"Museum Label", steps:["Choose the Templo Mayor or the Sun Stone.","Write a museum label: what it is, when, where, how we know.","Add a ‘What people believed’ line, written respectfully."], flying:"Add a second label from a Mexica person's point of view." },
      { id:"B", name:"The Builder", product:"Layered Temple Model", steps:["Make 3 card temples, each bigger than the last.","Stack them so the smaller ones sit inside.","Label each stage and the twin shrines."], flying:"Add a cut-away so viewers can see the inner stages." },
      { id:"C", name:"The Messenger", product:"Press Conference 1978", steps:["You are an archaeologist in 1978. Announce the discovery.","Answer 3 reporters' questions (partners).","Explain why the find matters."], flying:"Explain why archaeologists dig slowly and carefully." }
    ],
    supportedShort:"label template; layered temple outlines; press conference role cards.",
    lens:{
      pillar:"mohio", title:"A gift, not a debt",
      look:"Look at the Fifth Sun: the Aztecs believed the gods had given themselves so the Sun could move, and that the Sun needed offerings — even human lives — to keep going. They were trying to deal with a real fear: that the world might end.",
      ref:"Acts 17:24–25; Micah 6:6–8; Hebrews 10:10",
      paraphrase:"The God who made the world and everything in it is the Lord of heaven and earth… He is not served by human hands, as if he needed anything. Rather, he himself gives everyone life and breath and everything else… (Micah:) He has shown you what is good: to act justly, to love mercy and to walk humbly with your God… (Hebrews:) We have been made holy through the sacrifice of the body of Jesus Christ once for all.",
      talk:[
        { q:"The Aztecs believed the Sun needed people to keep it going. What does the Bible say about who keeps the Sun shining and who gives life?", listen:"God made the Sun and keeps creation going; He doesn't need anything from us — He gives us life and breath." },
        { q:"In the Christian message, who gives the sacrifice? How is that different?", listen:"God gives Himself in Jesus, once for all — a gift, not a payment we must keep making. Speak with compassion: ‘They were trying to deal with a real fear; the Bible's answer is a gift.’" }
      ],
      live:"Write a thank-you prayer for one thing God **gives** you every day (sunlight, breath, food, people)."
    },
    clue:{ prompt:"In Aztec belief, which Sun (which age of the world) were they living in?", answer:5, explain:"The Fifth Sun → 5. Clue saved!" },
    next:"Tuesday — up into the Andes with the Inca, and the kūmara voyage.",
    rubric:[
      { c:"Aztec beliefs", code:"SS-H",
        d:["Says the Aztecs worshipped gods.","“They had lots of gods.”"],
        a:["Explains the Fifth Sun belief and why temples mattered.","“They believed they lived in the fifth age and the Sun needed offerings, so the Templo Mayor was the centre of the city.”"],
        f:["Explains the belief from the Mexica perspective, respectfully.","“They were afraid the world could end, as the earlier suns had — their offerings were about keeping the world going.”"],
        i:["I know they worshipped gods.","I can explain the Fifth Sun and the temple.","I can explain the belief from their point of view."] },
      { c:"Archaeology", code:"SS-P",
        d:["Says the temple was found.","“They found it.”"],
        a:["Describes the 1978 discovery and the temple's layers.","“Electricity workers found a carved disc in 1978; archaeologists found seven building stages, one inside another.”"],
        f:["Explains what the layers tell us about history.","“Each ruler built a bigger temple — it shows how the city's power grew over 200 years.”"],
        i:["I know it was found.","I can describe the discovery and the layers.","I can explain what the layers tell us."] },
      { c:"Comparing beliefs", code:"RE · SS-P",
        d:["Says one belief is wrong.","“That's bad.”"],
        a:["Compares respectfully, using Acts 17 or Micah 6.","“The Aztecs thought the Sun needed feeding; the Bible says God doesn't need anything — He gives life.”"],
        f:["Compares with compassion and explains the gift of Jesus.","“They were afraid; Christians believe God gave Himself once for all, so we don't have to pay for life.”"],
        i:["I gave an opinion.","I can compare respectfully.","I can compare with compassion and explain the Christian message."] }
    ],
    plan:{
      prior:"Week 6–7: Tenochtitlan, society. Seal VII: a sun with five rays.",
      kc:["Thinking","Relating to others","Using language, symbols & texts"],
      sequence:[
        ["0–6","Field Transmission","Dr Canul: the five-rayed sun; Glyph Check; LI/SC.","Recall."],
        ["6–20","Excavate","The Fifth Sun belief (calmly, factually); Templo Mayor layers (1978 discovery); Sun Stone explorer; Hononga (kūmara).","Explore, discuss."],
        ["20–22","Big Project check-in","Museum Case.","Share."],
        ["22–36","Choose Your Path","Label / model / press conference.","Create."],
        ["36–45","Through the Lens (extended)","Acts 17; Micah 6; Hebrews 10.","Discuss with care."],
        ["45–50","Decode & Exit","Clue (5).","Solve; self-assess."]
      ],
      diff:{
        supported:"Label template; picture vocab.",
        esol:"Visual layers; simple sentence frames.",
        learning:"Model option; oral label.",
        flying:"Mexica-perspective label; archaeology methods."
      },
      assess:{
        lookFor:["Explains the Fifth Sun respectfully","Describes the discovery/layers","Compares beliefs with compassion"],
        evidence:["Path products","Lens discussion","Exit self-assessment"]
      },
      inquiry:["How did students respond to the sacrifice content? Follow up with any anxious students.","Did comparisons stay respectful (no ‘savages’ language)?","Big Project — two weeks left: who needs help?"]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"itzel", meta:"Folio VIII · the five-rayed sun",
        msg:"Team, the sun on Folio VII leads us to the **heart** of the Aztec world. The Mexica believed the world had already ended **four times** — and that they lived in the age of the **Fifth Sun**. Today we'll find out what they believed, and how a lucky dig in 1978 uncovered their greatest temple.",
        notes:[["SAY","Read the message."],["NOTE","Today touches on sacrifice. Keep it calm, brief and factual. No images or detail."]] },
      { type:"glyphcheck", phase:"transmission", fs:"real", title:"Remember Week 7?", qs:[
          { q:"What was used as money in the Aztec market?", a:"Cacao beans (and cotton cloaks — quachtli — for bigger buys)." },
          { q:"How can you make an electromagnet stronger?", a:"More coils, more current, an iron core." },
          { q:"What does a higher frequency sound like?", a:"A higher pitch." }],
        notes:[["SAY","Whiteboards; show on 3."],["CLICK","→ flips."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and SC."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"What the Mexica believed", title:"The Fifth Sun", visual:{ artefact:"sunstone" },
        bullets:["The Mexica believed **four earlier worlds** (‘suns’) had each been destroyed.","They believed the gods had **given themselves** so the Fifth Sun could move — and that the Sun needed **offerings** to keep going.","These offerings included food, flowers, precious things, their own blood — and sometimes **human lives**. It came from a real fear: that the world might end."],
        notes:[["SAY","Read calmly and briefly. “This is hard to hear. Let's try to understand WHY they believed it — we'll think about it more in the Lens.”"],["ASK","“What fear sat underneath this belief?”"],["NOTE","Do not go into detail. If a student asks graphic questions, gently redirect: “We're focusing on what they believed and why.”"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Archaeology", title:"The Templo Mayor", ix:"templolayers",
        notes:[["CLICK","→ peels each layer."],["ASK","“Why might each ruler build a bigger temple over the old one?”"],["SAY","“Twin shrines: Tlaloc (rain) and Huitzilopochtli (sun and war) — rain and sun, the two things farmers needed most.”"],["PACE","Aim for minute 13."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Look closely", title:"The Sun Stone", ix:"sunstone",
        notes:[["CLICK","Tap each ring from the centre out."],["SAY","“Often called the Aztec Calendar — but most experts think it's about the Sun and the ages of the world.”"],["PACE","Aim for minute 18."]] },
      { type:"hononga", phase:"excavate", fs:"real", title:"Our kūmara came from South America",
        body:"The **kūmara** was first farmed in South and Central America. A 2020 genetic study suggests Polynesians and South Americans met around **1200 CE** — and the kūmara crossed the Pacific.\n\nIn te ao Māori, **Rongo** is associated with cultivated food and peace. Every culture has wondered where food, sun and life come from.",
        notes:[["SAY","“Tomorrow we follow the kūmara voyage on the map.”"],["NOTE","Check framing of Rongo with your Māori lead."]] },
      bpCheck("Museum Case"),
      { type:"paths", phase:"paths", fs:null, minutes:14, notes:[["SAY","Explain paths."],["CLICK","Start the timer (14 minutes — the Lens is longer today)."]] },
      { type:"lens", phase:"lens", fs:null,
        notes:[["CLICK","→ reveals each move."],["SAY","Read Acts 17:24–25, then Micah 6:6–8, then Hebrews 10:10."],["ASK","Use both questions."],["NOTE","Tone: compassion, not superiority. “They were trying to deal with a real fear. The Bible's answer is a gift: God doesn't need anything from us — He gave Himself.” Some families may have different views; be gentle."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["ASK","“Which Sun?” (5)"],["CLICK","One bar → Check."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = cacao beans."]] }
    ]
  };

  /* ======================= TUESDAY · GEOGRAPHY ======================= */
  const tue = {
    id:"w08-tue", week:8, day:"tue", subject:"geography", duration:50,
    title:"The Andes & the Inca (+ the Kūmara Voyage)", guide:"sofia",
    codes:["SS-G","SS-H","MA","SS-P"],
    coverage:"Y5–6 Geography (2027 Social Sciences): how people adapt to mountain environments (altitude, climate zones, terracing, roads); comparing societies (Inca and Aztec); Pacific connections (Polynesian voyaging). Maths: base-10 place value on the quipu.",
    li:"We are learning how the Inca adapted to living in the Andes.",
    sc:["I can explain how temperature and crops change with altitude.","I can explain how the Inca used terraces, roads and quipu.","I can compare the Inca with the Aztecs."],
    vocab:[
      { w:"altitude", def:"how high a place is above sea level" },
      { w:"terrace", def:"a flat step cut into a hillside for farming" },
      { w:"Inca", def:"a people whose empire stretched along the Andes in the 1400s–1500s" },
      { w:"quipu (khipu)", say:"KEE-poo", def:"knotted cords the Inca used to record numbers" },
      { w:"Qhapaq Ñan", say:"KHAH-pak NYAN", def:"the great Inca road network" },
      { w:"chasqui", say:"CHAS-kee", def:"a relay runner who carried messages on Inca roads" }
    ],
    prep:{ min:3, items:["String (about 1 m per student) for Path B quipu","Expedition Journals"] },
    safety:[],
    hononga:"Polynesian voyagers were some of the greatest explorers in history. Genetic evidence suggests they reached South America around **1200 CE** and brought the **kūmara** home across the Pacific — eventually to **Aotearoa**, where Māori grew it in a cooler climate by adding gravel and sand to warm the soil.",
    paths:[
      { id:"A", name:"The Scribe", product:"Inca vs Aztec Chart", steps:["Compare: location, capital, farming, records, roads.","Add 2 similarities and 2 differences.","Write which empire you'd rather visit and why."], flying:"Explain how geography shaped each empire's solutions." },
      { id:"B", name:"The Builder", product:"Quipu or Terrace Model", steps:["Quipu: tie knots in string to record 3 numbers (base 10).","OR terraces: fold card into steps and label the crops.","A partner decodes or explains your model."], flying:"Make a quipu that records your class's data (e.g. birthdays per month)." },
      { id:"C", name:"The Messenger", product:"Chasqui Relay", steps:["Teams pass a message along a relay line by memory.","Compare the first and last message.","Explain why the Inca used quipu with their runners."], flying:"Design a better way to keep the message accurate." }
    ],
    supportedShort:"comparison chart with picture prompts; knot guide card; relay script.",
    lens:{
      pillar:"mohio", title:"I lift up my eyes to the mountains",
      look:"Look at the Andes: the longest mountain range on land, snow-capped and huge. The Inca built roads and farms across it — but mountains still remind us how small we are.",
      ref:"Psalm 121:1–2",
      paraphrase:"I lift up my eyes to the mountains — where does my help come from? My help comes from the Lord, the Maker of heaven and earth.",
      talk:[
        { q:"Why might mountains make someone think about where their help comes from?", listen:"They're huge and powerful; climbing is hard; we feel small; we need help." },
        { q:"What ‘mountains’ (big challenges) do people face? Where do Christians find help?", listen:"Hard schoolwork, sickness, change, friendships; help from God, the Maker of the mountains, and from His people." }
      ],
      live:"Name one ‘mountain’ you're facing and ask God (and someone you trust) for help."
    },
    clue:{ prompt:"Count the knots on the RED quipu cord on screen. How many?", answer:7, explain:"7 knots in the ones place → 7. Clue saved!" },
    next:"Wednesday — generating electricity: spin a generator and power the camp!",
    rubric:[
      { c:"Altitude & climate", code:"SS-G",
        d:["Says mountains are cold.","“It's cold at the top.”"],
        a:["Explains temperature drop and crop zones with altitude.","“It gets about 6.5 °C cooler every 1,000 m, so maize grows lower down and potatoes higher up.”"],
        f:["Explains how people used several zones together.","“Families farmed different heights and traded, so they had food all year.”"],
        i:["I know it's cold up high.","I can explain altitude and crop zones.","I can explain how people used several zones."] },
      { c:"Inca solutions", code:"SS-G · SS-H",
        d:["Names one Inca feature.","“Machu Picchu.”"],
        a:["Explains terraces, roads and quipu.","“Terraces made flat farmland; roads joined the empire; quipu recorded numbers.”"],
        f:["Explains how these solved mountain problems.","“Terraces stopped soil washing away and caught sun and water.”"],
        i:["I can name a feature.","I can explain terraces, roads and quipu.","I can explain how they solved problems."] },
      { c:"Comparing empires", code:"SS-P",
        d:["Lists facts about one empire.","“The Aztecs had a lake.”"],
        a:["Compares with similarities and differences.","“Both built huge capitals; Aztecs built on a lake, the Inca on mountains.”"],
        f:["Explains differences using geography.","“Their environments were opposite — lake vs mountains — so their solutions were different.”"],
        i:["I know facts about one.","I can compare both.","I can explain differences with geography."] }
    ],
    plan:{
      prior:"Week 4: rainforest layers; Week 6: Tenochtitlan; Monday: the kūmara.",
      kc:["Thinking","Participating & contributing"],
      sequence:[
        ["0–6","Field Transmission","Sofía flies the Andes; Glyph Check; LI/SC.","Recall."],
        ["6–20","Excavate","Altitude climber; Inca solutions; Quipu knotter; Kūmara voyage map.","Explore, decode, compare."],
        ["20–22","Big Project check-in","Atlas/Campaign.","Share."],
        ["22–38","Choose Your Path","Chart / quipu / relay.","Create."],
        ["38–45","Through the Lens","Psalm 121.","Discuss."],
        ["45–50","Decode & Exit","Clue (7).","Solve; self-assess."]
      ],
      diff:{
        supported:"Chart prompts; knot guide.",
        esol:"Visual climber; tactile quipu.",
        learning:"Hands-on string; pictures.",
        flying:"Class-data quipu; geography explanations."
      },
      assess:{
        lookFor:["Altitude zones","Inca solutions","Comparison"],
        evidence:["Path products","Quipu decoding","Exit self-assessment"]
      },
      inquiry:["Maya ≠ Aztec ≠ Inca — did students keep them distinct?","Who enjoyed the base-10 quipu vs base-20 Maya numbers?","Next week: climate patterns in South America."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"sofia", meta:"Over the Andes",
        msg:"Navigators, hold on — turbulence! We're flying south over the **Andes**, the longest mountain range on land. Down there, a different empire once ruled: the **Inca**. They weren't Maya or Aztec — they built a nation of roads and terraces across the sky.",
        notes:[["SAY","Read the message."],["NOTE","Keep Maya, Aztec and Inca distinct — different peoples, places and times."]] },
      { type:"glyphcheck", phase:"transmission", fs:"real", qs:[
          { q:"What is the Fifth Sun?", a:"The Aztec belief that they lived in the fifth age of the world." },
          { q:"How was the Templo Mayor rediscovered?", a:"Electricity workers struck a carved disc in 1978." },
          { q:"Where was the kūmara first farmed?", a:"South and Central America." }],
        notes:[["SAY","Whiteboards; show on 3."],["CLICK","→ flips."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and SC."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Up the mountain", title:"Altitude & crops", ix:"altitude",
        notes:[["CLICK","Drag the slider from 0 to 6,500 m."],["ASK","“What happens to the temperature? Why can't maize grow at the top?”"],["NOTE","Zones are simplified; temperatures use the average 6.5 °C per 1,000 m."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Mountain engineers", title:"How the Inca lived in the Andes", h:"500px", cards:[
          { big:"⛰️", color:"#1F7A5A", t:"Terraces", d:"Flat **steps** cut into slopes: they stopped soil washing away and trapped warmth and water." },
          { big:"🛤️", color:"#D9A23A", t:"Qhapaq Ñan", d:"A road network of **tens of thousands of km** with bridges and rest houses — now World Heritage." },
          { big:"🏃", color:"#B3262E", t:"Chasqui", d:"**Relay runners** carried messages and quipu along the roads." },
          { big:"🏛️", color:"#2E9FB0", t:"Machu Picchu", d:"A mountain estate built around the **mid-1400s**, never found by the Spanish." }],
        notes:[["ASK","“How did the Inca solve the problem of farming on steep mountains?”"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Records without writing", title:"Quipu knotter", ix:"quipu",
        notes:[["SAY","“Knots near the bottom are ones, then tens, then hundreds — base 10, like us!”"],["ASK","“Read the yellow cord.” (23) “The green cord?” (105)"],["CLICK","Select the blue cord and add knots to make a number the class chooses."],["NOTE","The red cord has 7 knots — today's Glyph Clue."],["PACE","Aim for minute 15."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Across the Pacific", title:"The kūmara voyage", ix:"voyage",
        notes:[["CLICK","→ steps through the voyage."],["SAY","“The DNA study is evidence of contact; scientists still discuss exactly how it happened.”"],["PACE","Aim for minute 20."]] },
      bpCheck("Expedition Atlas or Campaign"),
      { type:"paths", phase:"paths", fs:null, notes:[["SAY","Explain paths."],["CLICK","Start the timer."]] },
      { type:"lens", phase:"lens", fs:null, notes:[["CLICK","→ reveals each move."],["SAY","Read Psalm 121:1–2."],["ASK","Use both questions."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["ASK","“Knots on the red cord?” (7)"],["CLICK","▬ ●● → Check."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = cacao beans."]] }
    ]
  };

  /* ======================= WEDNESDAY · SCIENCE ======================= */
  const wed = {
    id:"w08-wed", week:8, day:"wed", subject:"science", duration:50,
    title:"Generating Electricity: Generators & Itaipú", guide:"mateo",
    codes:["SC-MIE","SC-MF","SC-P","SS-G"],
    coverage:"Y6 Science (Matter, interactions & energy): energy sources and transfer; how moving magnets and coils generate electricity; hydroelectric power in South America and Aotearoa.",
    li:"We are learning how electricity is generated by spinning magnets and coils.",
    sc:["I can explain energy transfer from movement to electricity.","I can explain how a generator works (magnets + coils + movement).","I can explain how a hydro dam makes electricity."],
    vocab:[
      { w:"generator", def:"a machine that turns movement into electricity" },
      { w:"turbine", def:"a wheel with blades turned by water, wind or steam" },
      { w:"energy transfer", def:"energy changing from one form to another" },
      { w:"hydroelectric", def:"electricity made from moving water" },
      { w:"alternating current (AC)", def:"electricity that changes direction many times a second" },
      { w:"renewable", def:"an energy source that won't run out (water, wind, sun)" }
    ],
    prep:{ min:8, items:["Optional: a hand-crank torch or small DC motor + LED (spin the motor shaft to light the LED)","Small DC motors and AA packs (motors run from batteries)","Journals"] },
    safety:["Batteries only.","Motors can spin fast — keep hair and fingers clear."],
    hononga:"Aotearoa makes much of its electricity from **hydro**: stations like **Manapōuri** in Fiordland and the **Waitaki** scheme in Canterbury and Otago. Rivers are also **taonga** to iwi, so building dams raises questions about water, land and partnership.",
    paths:[
      { id:"A", name:"The Scribe", product:"Energy Flow Diagram", steps:["Draw the energy chain: water → turbine → generator → wires → light.","Label each energy form (stored, movement, electrical, light).","Write how the generator works in 3 sentences."], flying:"Add where energy is ‘lost’ (as heat and sound)." },
      { id:"B", name:"The Builder", product:"Motor & Generator Demo", steps:["Run a DC motor with a battery: electricity → movement.","Remove the battery; spin the shaft fast with an LED attached.","Does the LED flicker? Explain why."], flying:"Compare: is a motor just a generator in reverse?" },
      { id:"C", name:"The Messenger", product:"River Power Pitch", steps:["Mateo wants to power the camp from the river.","Pitch a plan: what to build and how it works.","Include one benefit and one problem."], flying:"Include how to respect the river and local people." }
    ],
    supportedShort:"energy chain cards to order; demo step cards; pitch frame.",
    lens:{
      pillar:"panga", title:"Power that comes from God",
      look:"Look at Itaipú: one of the most powerful power stations on Earth, shared by two countries. And yet all that energy began with rain falling from the sky.",
      ref:"Isaiah 40:26, 29",
      paraphrase:"Lift up your eyes and look to the heavens: who created all these? … Because of his great power and mighty strength, not one of them is missing… He gives strength to the weary and increases the power of the weak.",
      talk:[
        { q:"Where does the energy in a hydro dam really come from, if you trace it all the way back?", listen:"Rain → the water cycle → the Sun's heat — Christians see God as the source of all creation's energy." },
        { q:"Two countries share Itaipú's power. Why is sharing energy fairly important?", listen:"Everyone needs power for homes, schools, hospitals; poorer communities shouldn't miss out (Pānga — justice)." }
      ],
      live:"Choose one way to **save energy** at home this week."
    },
    clue:{ prompt:"How many countries share the Itaipú dam?", answer:2, explain:"Brazil and Paraguay → 2. Clue saved!" },
    next:"Thursday — light sensors and the equinox serpent!",
    rubric:[
      { c:"How generators work", code:"SC-MIE · SC-MF",
        d:["Says spinning makes power.","“You spin it.”"],
        a:["Explains magnets, coils and movement.","“Spinning a magnet inside a coil of wire pushes electrons round the circuit.”"],
        f:["Explains what changes the output.","“Spinning faster or using more coils or stronger magnets makes more electricity.”"],
        i:["I know spinning makes power.","I can explain magnets, coils and movement.","I can explain what changes the output."] },
      { c:"Energy transfer", code:"SC-MIE",
        d:["Names one energy form.","“Electricity.”"],
        a:["Describes the chain of energy transfers.","“Stored energy in high water → movement in the turbine → electrical energy → light.”"],
        f:["Explains losses and efficiency.","“Some energy is lost as heat and sound, so we never get it all as electricity.”"],
        i:["I can name an energy form.","I can describe the chain.","I can explain energy losses."] },
      { c:"Hydro power", code:"SC-MIE · SS-G",
        d:["Says dams make power.","“Dams make electricity.”"],
        a:["Explains how a hydro dam works, with an example.","“Water falls through a penstock, spins a turbine and generator — like Itaipú or Manapōuri.”"],
        f:["Weighs benefits and impacts.","“Hydro is renewable, but dams flood land and change rivers that matter to people and fish.”"],
        i:["I know dams make power.","I can explain how a dam works.","I can weigh benefits and impacts."] }
    ],
    plan:{
      prior:"Weeks 6–7: magnets and electromagnets.",
      kc:["Thinking","Managing self"],
      sequence:[
        ["0–6","Field Transmission","Mateo's batteries are flat; Glyph Check; LI/SC; safety.","Recall."],
        ["6–20","Excavate","Generator crank; energy transfer; dam cross-section; Itaipú; Hononga.","Predict, observe, explain."],
        ["20–22","Big Project check-in","My Fair Test.","Share."],
        ["22–38","Choose Your Path","Kits out.","Diagram / demo / pitch."],
        ["38–45","Through the Lens","Isaiah 40.","Discuss."],
        ["45–50","Decode & Exit","Clue (2).","Solve; self-assess."]
      ],
      diff:{
        supported:"Energy chain cards; demo steps.",
        esol:"Visual dam; gestures for spinning.",
        learning:"Hand-crank torch demo.",
        flying:"Efficiency; motor vs generator."
      },
      assess:{
        lookFor:["Magnets + coils + motion","Energy chain","Hydro explained"],
        evidence:["Diagrams","Demo observations","Exit self-assessment"]
      },
      inquiry:["Did the motor-as-generator demo work? (Small motors give very small voltage — an LED may only flicker.)","Fair Test projects: check data collection.","Link to Week 9 climate (renewables)."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"mateo", meta:"Flat batteries",
        msg:"Bad news — every battery in camp is **flat**. No more buying them from town! But there's a fast river right beside us. Somewhere in South America, a river powers whole **countries**. If I can turn **movement** into **electricity**, the river could light our camp.",
        notes:[["SAY","Read the message."],["ASK","“How could a river make electricity?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:"real", qs:[
          { q:"What does an electromagnet need?", a:"Current flowing through a coil (with an iron core)." },
          { q:"What were Inca terraces for?", a:"Flat farmland on steep slopes; stopped soil washing away." },
          { q:"What's the difference between a motor and a battery?", a:"A battery stores energy; a motor turns electricity into movement." }],
        notes:[["SAY","Whiteboards; show on 3."],["CLICK","→ flips."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and SC."]] },
      { type:"safety", phase:"transmission", fs:"real", title:"Motor safety", items:[
          { icon:"🔋", t:"Batteries only", d:"Never sockets." },
          { icon:"🌀", t:"Spinning parts", d:"Keep hair, fingers and sleeves clear of motors." },
          { icon:"🔥", t:"Warm motor?", d:"Disconnect it and let it cool." }],
        notes:[["SAFETY","Read the rules."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Spin it", title:"The generator", ix:"generator",
        notes:[["CLICK","Drag the crank round (or use the speed slider)."],["ASK","“What happens when you spin faster? Why does the needle swing both ways?”"],["SAY","“This is the opposite of Week 7: there, electricity made a magnet. Here, a moving magnet makes electricity!”"],["PACE","Aim for minute 12."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Follow the water", title:"Inside a hydro dam", ix:"dam",
        notes:[["CLICK","→ adds each stage."],["ASK","“Where does the energy come from at the very start?” (Water held up high — and before that, rain.)"]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"South American giant", title:"Itaipú", visual:{ svg:() => { const v = FC.svg(600, 420); v.innerHTML = `<rect width="600" height="420" rx="18" fill="#cfe3ea"/><path d="M0 260 Q150 230 300 250 L300 420 L0 420Z" fill="#2E9FB0"/><path d="M300 150 L340 150 L360 420 L300 420Z" fill="#9a958c" stroke="#5a5650" stroke-width="4"/><path d="M360 380 L600 380 L600 420 L360 420Z" fill="#5fb6c6"/><text x="130" y="200" font-family="Big Shoulders Display" font-weight="900" font-size="34" fill="#1F4F8A">BRAZIL</text><text x="430" y="200" font-family="Big Shoulders Display" font-weight="900" font-size="34" fill="#1F4F8A">PARAGUAY</text><text x="300" y="120" text-anchor="middle" font-family="Big Shoulders Display" font-weight="900" font-size="30" fill="#3b2418">PARANÁ RIVER</text>`; return v; } },
        bullets:["**Itaipú** sits on the **Paraná River** between **Brazil** and **Paraguay** — the two countries share it.","It has **20 giant turbines** (14,000 megawatts) and is one of the world's biggest power stations.","In Aotearoa, **hydro** stations like Manapōuri and the Waitaki scheme make a large share of our electricity."],
        notes:[["ASK","“Why might two countries build a power station together?”"],["PACE","Aim for minute 20."]] },
      { type:"hononga", phase:"excavate", fs:"real", title:"Hydro in Aotearoa",
        body:"Stations like **Manapōuri** (Fiordland) and the **Waitaki** scheme (Canterbury and Otago) turn our rivers and lakes into electricity.\n\nRivers are **taonga** to iwi, so dams raise important questions about water, land and partnership.",
        notes:[["ASK","“What would you want to know before building a new dam?”"]] },
      bpCheck("My Fair Test"),
      { type:"paths", phase:"paths", fs:null, notes:[["SAY","Explain paths; motors out for Path B."],["CLICK","Start the timer."]] },
      { type:"lens", phase:"lens", fs:null, notes:[["CLICK","→ reveals each move."],["SAY","Read Isaiah 40:26 and 29."],["ASK","Use both questions."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["ASK","“How many countries share Itaipú?” (2)"],["CLICK","●● → Check."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = cacao beans."]] }
    ]
  };

  /* ======================= THURSDAY · TECHNOLOGY ======================= */
  const thu = {
    id:"w08-thu", week:8, day:"thu", subject:"technology", duration:50,
    title:"Sensors: the Equinox Sunrise Detector", guide:"mateo",
    codes:["DT-CT","TE-TK","TE-TP"],
    coverage:"Digital Technologies — Computational Thinking (Progress Outcomes 1–2): analogue sensor input, thresholds and selection; testing. Technology (NZC 2007 L3): input → process → output systems responding to the environment.",
    li:"We are learning to use a light sensor to trigger an output.",
    sc:["I can explain what an analogue sensor reading is (0–1023).","I can set a threshold to decide between light and dark.","I can test my detector in different light and adjust the threshold."],
    vocab:[
      { w:"sensor", def:"a device that measures something (light, heat, sound)" },
      { w:"LDR", def:"light-dependent resistor — a light sensor" },
      { w:"analogue", def:"a reading that can be many values, not just on/off (0–1023 on an Arduino)" },
      { w:"threshold", def:"the value where the decision switches (e.g. above 500 = light)" },
      { w:"equinox", def:"the two days a year (about 20 March and 22 September) when day and night are about equal" }
    ],
    prep:{ min:3, items:["Projector for the simulators","Optional Arduino: LDR + 10 kΩ resistor on A0, LED on pin 13","A torch for testing"] },
    safety:["Real boards: USB power only.","Never shine torches into eyes."],
    hononga:"**Matariki** rises in the pre-dawn sky in mid-winter, and the **maramataka** follows the moon. People in Aotearoa have long watched the sky to know when to plant and gather — the original ‘sensors’ were sharp eyes and generations of knowledge.",
    paths:[
      { id:"A", name:"The Scribe", product:"Threshold Logic Plan", steps:["Draw a flowchart: read sensor → is it above the threshold? → LED on/off.","Choose a threshold and explain why.","Predict what happens on a cloudy day."], flying:"Add a second threshold for ‘bright sun’ (two LEDs)." },
      { id:"B", name:"The Builder", product:"Code the Sunrise Detector", steps:["In the simulator, slide the light level up and down.","Change the threshold with −50/+50 until it works well.","Test with a real LDR if available."], flying:"Make it flash a sunrise pattern when it gets light." },
      { id:"C", name:"The Messenger", product:"Light Survey", steps:["Measure light readings (on screen or real) in 5 places.","Record and graph the readings.","Recommend the best threshold for the classroom."], flying:"Explain why a fixed threshold might fail at different times of day." }
    ],
    supportedShort:"flowchart template; simulator pre-loaded; recording table.",
    lens:{
      pillar:"aroha", title:"From sunrise to sunset",
      look:"Look at the equinox serpent: thousands of people gather to watch light and shadow on a pyramid. And our detector waits for the sun to rise.",
      ref:"Psalm 113:3",
      paraphrase:"From the rising of the sun to the place where it sets, the name of the Lord is to be praised.",
      talk:[
        { q:"The psalm says to praise God ‘from the rising of the sun to the place where it sets’. What could that look like in a normal school day?", listen:"Thanking God in the morning, at lunch, at bedtime; doing our work well; kindness all day." },
        { q:"The Maya watched the sun very carefully. What do Christians believe about who made the sun?", listen:"God created the sun and set the seasons (Genesis 1:14–16) — it's a gift, not a god." }
      ],
      live:"Set a ‘sunrise reminder’: say thank you to God first thing tomorrow."
    },
    clue:{ prompt:"The sunrise threshold is 500. Divide it by 100. What do you get?", answer:5, explain:"500 ÷ 100 = 5 → one bar. Clue saved for the seal!" },
    next:"Friday — papel picado and Seal VIII.",
    rubric:[
      { c:"Sensor input", code:"TE-TK",
        d:["Says it senses light.","“It sees light.”"],
        a:["Explains analogue readings.","“The LDR gives a number from 0 (dark) to 1023 (bright).”"],
        f:["Explains how the reading changes and why.","“More light → lower resistance → a higher reading on A0.”"],
        i:["I know it senses light.","I can explain analogue readings.","I can explain why the reading changes."] },
      { c:"Threshold decision", code:"DT-CT",
        d:["Runs the code with help.","Slides the light and watches."],
        a:["Sets and explains a threshold.","“If the reading is above 500 the LED turns on — that's sunrise.”"],
        f:["Adjusts the threshold from evidence.","“Our room reads 420 with lights on, so I raised it to 600 so it only triggers in real sunlight.”"],
        i:["I ran it with help.","I can set and explain a threshold.","I can adjust it using evidence."] },
      { c:"Testing", code:"TE-TP",
        d:["Tests once.","“It works.”"],
        a:["Tests in several light levels and records.","Readings in 5 places recorded in a table."],
        f:["Graphs results and recommends a threshold.","A bar graph with a justified threshold line."],
        i:["I tested once.","I tested several light levels.","I graphed and recommended a threshold."] }
    ],
    plan:{
      prior:"Weeks 4–7: Arduino simulator, loops, if/else with a button, piezo.",
      kc:["Thinking","Managing self"],
      sequence:[
        ["0–6","Field Transmission","Mateo's sunrise detector; Glyph Check; LI/SC.","Recall."],
        ["6–20","Excavate","Equinox serpent simulator; sensors & thresholds; Arduino LDR simulator.","Explore, predict, test."],
        ["20–22","Big Project check-in","Temple of Light.","Share."],
        ["22–38","Choose Your Path","Plan / code / survey.","Design, test."],
        ["38–45","Through the Lens","Psalm 113:3.","Discuss."],
        ["45–50","Decode & Exit","Clue (5).","Solve; self-assess."]
      ],
      diff:{
        supported:"Flowchart template; pre-loaded program.",
        esol:"Visual slider; sun/moon icons.",
        learning:"Simulator only; one threshold.",
        flying:"Two thresholds; graphing."
      },
      assess:{
        lookFor:["Analogue reading explained","Threshold set and justified","Testing recorded"],
        evidence:["Flowcharts","Surveys","Exit self-assessment"]
      },
      inquiry:["Did students grasp analogue vs digital?","Temple of Light: who will use a sensor?","Next week: the Temple of Light build."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"mateo", meta:"Before dawn",
        msg:"The Maya and Aztecs watched the **sun** with amazing care. At Chichén Itzá, on the **equinox**, light and shadow make a **serpent** slide down the pyramid! I want our camp to know when the sun rises too. Time to give our microcontroller **eyes**: a **light sensor**.",
        notes:[["SAY","Read the message."],["ASK","“How could a machine ‘see’ the sunrise?”"]] },
      { type:"glyphcheck", phase:"transmission", fs:"real", qs:[
          { q:"How does a generator make electricity?", a:"Spinning magnets near coils of wire." },
          { q:"What does if/else do?", a:"Chooses between two actions based on a condition." },
          { q:"How many countries share Itaipú?", a:"Two — Brazil and Paraguay." }],
        notes:[["SAY","Whiteboards; show on 3."],["CLICK","→ flips."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and SC."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Light & shadow", title:"The equinox serpent", ix:"equinox",
        notes:[["CLICK","Move the date and time sliders; then ‘Jump to the equinox’."],["SAY","“Whether the builders planned this on purpose is debated — but the Maya were superb sky-watchers.”"],["PACE","Aim for minute 11."]] },
      { type:"cards", phase:"excavate", fs:"real", kicker:"Giving machines senses", title:"Sensors & thresholds", h:"460px", cards:[
          { big:"👁️", color:"#2E9FB0", t:"Sensor", d:"An **LDR** changes with light. The Arduino reads it on pin **A0**." },
          { big:"0–1023", color:"#D9A23A", t:"Analogue", d:"Not just on/off: a **number** from 0 (dark) to 1023 (bright)." },
          { big:"> 500", color:"#B3262E", t:"Threshold", d:"The decision point: **IF** the reading is above 500, it's sunrise → LED on." }],
        notes:[["ASK","“A button is digital (on/off). Why is a light sensor called analogue?”"]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Code it", title:"Sunrise detector", ix:"arduino",
        cfg:{ title:"Sunrise detector", ldr:{ pin:"A0", label:"LIGHT SENSOR", start:150 }, leds:[{ pin:13, color:"#F0C25E", label:"SUNRISE" }],
          program:[{ op:"if", sensor:"A0", gt:500, then:[{ op:"on", pin:13 }], els:[{ op:"off", pin:13 }] }, { op:"wait", ms:200 }] },
        notes:[["CLICK","▶ Run. Slide the light from dark to bright — the LED comes on when the reading passes 500."],["CLICK","Use −50 / +50 on the IF block to change the threshold. ASK: “What happens if the threshold is 100? 1000?”"],["NOTE","Real board: LDR from 5V to A0, 10 kΩ from A0 to GND; LED on pin 13."],["PACE","Aim for minute 20."]] },
      bpCheck("Temple of Light"),
      { type:"paths", phase:"paths", fs:null, notes:[["SAY","Explain paths."],["CLICK","Start the timer."]] },
      { type:"lens", phase:"lens", fs:null, notes:[["CLICK","→ reveals each move."],["SAY","Read Psalm 113:3 (and Genesis 1:14–16 if time)."],["ASK","Use both questions."]] },
      { type:"decode", phase:"decode", fs:"story", notes:[["ASK","“500 ÷ 100?” (5)"],["CLICK","One bar → Check."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = cacao beans."]] }
    ]
  };

  /* ======================= FRIDAY · ART ======================= */
  const fri = {
    id:"w08-fri", week:8, day:"fri", subject:"art", duration:50,
    title:"Papel Picado: Fold-and-Cut Banners", guide:"rosa",
    codes:["VA-UC","VA-PK","VA-DI","MA"],
    coverage:"Visual Arts (NZC 2007, Level 3): understanding art in context (papel picado, a living Mexican folk art); practical knowledge (folding, positive and negative space, symmetry); developing ideas. Maths link: line symmetry.",
    li:"We are learning to design a symmetrical cut-paper banner.",
    sc:["I can explain where papel picado comes from.","I can fold accurately and cut positive and negative shapes safely.","I can design a banner with a theme and symmetry."],
    vocab:[
      { w:"papel picado", say:"pah-PEL pee-KAH-doh", def:"‘perforated paper’ — Mexican cut-paper banners" },
      { w:"positive space", def:"the paper that's left" },
      { w:"negative space", def:"the holes you cut out" },
      { w:"line symmetry", def:"one half is a mirror image of the other" },
      { w:"folk art", def:"art made by ordinary people within a community tradition" }
    ],
    prep:{ min:5, items:["Tissue paper or thin coloured paper (A4, cut in half)","Scissors (one each); a few hole punches","String and glue stick for the class banner","Codex books (panel 8) for a mini design"] },
    safety:["Scissors: cut away from your body; pass handles first.","Fold, then cut small shapes from the folds — never poke scissors towards hands."],
    hononga:"Paper and fibre arts appear across the Pacific too: **harakeke** (flax) weaving, and Pasifika **tapa/ngatu** cloth. Like papel picado, these are **living traditions** — still made today for celebrations, and passed down in families.",
    paths:[
      { id:"A", name:"The Scribe", product:"Single Sheet with a Theme", steps:["Choose a theme (nature, our class, the expedition).","Fold, plan in pencil, then cut.","Write a caption explaining your symbols."], flying:"Combine large and tiny shapes for contrast." },
      { id:"B", name:"The Builder", product:"Class Banner Flag", steps:["Make one flag for the class banner.","Use at least 3 different cut shapes and a scalloped edge.","Glue it to the string with the others."], flying:"Cut a recognisable silhouette (an animal or pyramid) in the centre." },
      { id:"C", name:"The Messenger", product:"Teach the Fold", steps:["Learn the fold-and-cut method well.","Write simple step cards.","Teach a partner (or a younger class) to make one."], flying:"Teach how to plan symmetry before cutting." }
    ],
    supportedShort:"pre-drawn cut lines; larger paper; step cards.",
    lens:{
      pillar:"aroha", title:"Celebrate with those who celebrate",
      look:"Look at the banners: colour, light and holes that let the sun through. Papel picado decorates weddings, birthdays and festivals — moments when communities gather.",
      ref:"Romans 12:15; Psalm 118:24",
      paraphrase:"Rejoice with those who rejoice; mourn with those who mourn… This is the day the Lord has made; let us rejoice and be glad in it.",
      talk:[
        { q:"Why do people decorate when they celebrate together?", listen:"To show joy, welcome people, make a place feel special and shared." },
        { q:"What does it look like to ‘rejoice with those who rejoice’ in our class?", listen:"Being genuinely happy for others' success; celebrating birthdays and wins; no jealousy (Aroha — Others)." }
      ],
      live:"Celebrate someone's success this week — tell them you're happy for them."
    },
    clue:{ prompt:"Folio Seal: add the four Glyph Clues from Monday to Thursday.", answer:19, explain:"5 + 7 + 2 + 5 = 19 — the biggest number on one Maya level: three bars and four dots!" },
    next:"Week 9 — Meeting of Worlds: two accounts of 1519.",
    rubric:[
      { c:"Context", code:"VA-UC",
        d:["Says it's Mexican.","“It's from Mexico.”"],
        a:["Explains papel picado as a living folk art used in celebrations.","“It's a Mexican folk art still made today, in towns like San Salvador Huixcolotla, for festivals.”"],
        f:["Explains it's NOT Aztec and how traditions change over time.","“It's from more recent centuries, not the Aztecs — but it links to older Mexican paper-making like amate.”"],
        i:["I know it's from Mexico.","I can explain it as a living folk art.","I can explain how the tradition developed."] },
      { c:"Folding & cutting", code:"VA-PK",
        d:["Cuts unevenly; folds don't line up.","Shapes are torn or lopsided."],
        a:["Folds accurately and cuts clean shapes safely.","Clean holes; edges line up when unfolded."],
        f:["Balances large and small shapes skilfully.","A detailed design with fine cuts that keeps the paper strong."],
        i:["My cuts are uneven.","My folds and cuts are accurate.","My design balances big and small shapes."] },
      { c:"Symmetry & design", code:"VA-DI · MA",
        d:["Random holes.","Holes with no plan."],
        a:["Uses line symmetry and a clear theme.","A mirror-image design about the expedition."],
        f:["Uses positive and negative space with purpose and explains it.","“The holes form a pyramid; the paper around it looks like rays of sun.”"],
        i:["My holes are random.","I used symmetry and a theme.","I used positive and negative space with purpose."] }
    ],
    plan:{
      prior:"Week 3: symmetry; Week 6: repeat patterns.",
      kc:["Thinking","Managing self","Relating to others"],
      sequence:[
        ["0–6","Field Transmission","Doña Rosa's festival banners; Glyph Check; LI/SC; safety.","Recall the week."],
        ["6–16","Excavate","Papel picado history; fold-and-cut simulator; Hononga.","Observe, plan."],
        ["16–18","Big Project check-in","My Codex.","Share."],
        ["18–40","Choose Your Path (22 min)","Cut flags; build the class banner.","Sheet / flag / teach."],
        ["40–45","Through the Lens","Romans 12:15.","Celebrate."],
        ["45–50","Folio Seal","5 + 7 + 2 + 5 = 19; intercept.","Solve; discuss."]
      ],
      diff:{
        supported:"Pre-drawn lines; bigger paper.",
        esol:"Demonstration; visual steps.",
        learning:"Hole punch and simple folds.",
        flying:"Silhouettes; fine detail."
      },
      assess:{
        lookFor:["Explains context accurately (not Aztec)","Accurate folding/cutting","Symmetry and theme"],
        evidence:["Banner flags","Captions","Exit self-assessment"]
      },
      inquiry:["Scissors safety — any issues?","Hang the banner for the Week 10 Exhibition!","Prepare sensitively for the Conquest lesson."]
    },
    slides:[
      { type:"transmission", phase:"transmission", fs:"story", guide:"rosa", meta:"A village festival",
        msg:"Children, tonight the village is celebrating — and look: strings of bright **papel picado** dance above the street, the sun shining through their holes! It's a Mexican folk art — not Aztec, but much newer — and families still make it today. Let's cut our own.",
        notes:[["SAY","Read the message."],["NOTE","Papel picado is a Mexican folk art from more recent centuries — not Aztec."]] },
      { type:"glyphcheck", phase:"transmission", fs:"real", title:"This week so far", qs:[
          { q:"Name two Inca solutions to mountain life.", a:"Terraces, roads (Qhapaq Ñan), quipu, chasqui runners." },
          { q:"What makes a generator produce more electricity?", a:"Spinning faster; more coils; stronger magnets." },
          { q:"What is a threshold?", a:"The value where a decision switches (e.g. above 500 = light)." }],
        notes:[["SAY","Whole-week review."],["CLICK","→ flips."]] },
      { type:"lisc", phase:"transmission", fs:null, notes:[["SAY","Read the LI and SC."]] },
      { type:"content", phase:"excavate", fs:"real", kicker:"A living tradition", title:"Papel picado", visual:{ artefact:"papelpicado" },
        bullets:["**Papel picado** means ‘perforated (punched) paper’.","A **Mexican folk art** from more recent centuries — **not Aztec** — linked to older **amate** bark paper.","**San Salvador Huixcolotla** (Puebla) is famous for it: makers chisel through stacks of tissue paper.","Banners hang at weddings, birthdays and festivals."],
        notes:[["ASK","“Why do you think it's made from thin tissue paper?” (Light and colour shine through; it moves in the wind.)"],["NOTE","Image: artistic reconstruction."]] },
      { type:"interactive", phase:"excavate", fs:"real", kicker:"Plan your cuts", title:"Fold-and-cut simulator", ix:"papel", paper:true,
        notes:[["CLICK","Choose ‘In half’, click to cut shapes on the folded paper, then Unfold. Try ‘In quarters’."],["ASK","“Where's the line of symmetry? What's positive space? Negative space?”"],["PACE","Aim for minute 15."]] },
      { type:"safety", phase:"excavate", fs:"real", title:"Cutting safely", items:[
          { icon:"✂️", t:"Cut away", d:"Cut away from your body. Pass scissors handles first." },
          { icon:"📄", t:"Fold first", d:"Cut small shapes from the folded edges — keep fingers behind the blades." },
          { icon:"🧹", t:"Tidy as you go", d:"Scraps in the bin — tissue gets slippery on the floor." }],
        notes:[["SAFETY","Demonstrate safe cutting once."]] },
      bpCheck("My Codex"),
      { type:"paths", phase:"paths", fs:null, minutes:22, notes:[["SAY","Explain paths."],["CLICK","Start the 22-minute timer."]] },
      { type:"lens", phase:"lens", fs:null, notes:[["CLICK","→ reveals each move."],["SAY","Read Romans 12:15 and Psalm 118:24. Hang the banner!"]] },
      { type:"folioseal", phase:"decode", fs:"story",
        notes:[["SAY","“Seal VIII!”"],["CLICK","5 + 7 + 2 + 5 = 19. Build ▬▬▬ ●●●● → Break the seal."],["ASK","“Why is 19 the biggest number that fits on one level?”"]] },
      { type:"intercept", phase:"decode", fs:"story",
        msg:"Children, I have PROOF the codex is mine: an old Spanish document, dated 1521, giving it to my family. Look at the signature. Look at the seal. Hand it over. — C.",
        ask:"How could historians check whether an old document is real? What clues might give a forgery away?",
        notes:[["SAY","Read in the Collector's voice. Show suspicion — something seems off…"],["LISTEN","Check the paper and ink, the spelling and words used, compare with other sources, ask experts, check where it came from."],["NOTE","Next Friday the forgery is exposed."]] },
      { type:"exit", phase:"decode", fs:null, notes:[["SAY","Self-assess."],["CLICK","C = cacao beans."]] }
    ]
  };

  FC.WEEKS[8] = {
    n:8,
    story:"Folio VIII leads to the heart of Aztec belief: the Fifth Sun and the great Templo Mayor, rediscovered by electricity workers in 1978. The team climbs the Andes with the Inca and follows the kūmara across the Pacific, spins a generator when the batteries die, builds a sunrise detector, and cuts papel picado for a festival. Seal VIII shows two figures meeting — and the Collector produces a suspicious ‘Spanish document’.",
    hononga:"The kūmara's South American origins and Rongo (Mon–Tue); hydro power and rivers as taonga (Wed); Matariki and the maramataka (Thu); harakeke, tapa and living traditions (Fri). Check local framing with your Māori lead / Ngāi Tahu rūnanga.",
    seal:{
      answer:19,
      instruction:"Add the four **Glyph Clues**. It's the biggest number that fits on **one** level!",
      reveal:"🟡 **Folio VIII unsealed:** two figures face each other — one in a feathered cloak, one in metal armour — with speech scrolls between them, and the year **1519**. Dr Canul whispers: “The meeting of two worlds.” Next week: *Meeting of Worlds*.",
      art:() => { const v = FC.art.meetFolio(); v.setAttribute("style", "width:100%;height:100%"); return v; }
    },
    lessons:[mon, tue, wed, thu, fri]
  };
})(window.FC);
