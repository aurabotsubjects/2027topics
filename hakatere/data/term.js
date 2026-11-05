/* ==========================================================
   TERM DATA — overview, curriculum, core rubrics, kit
   (source: Hakatere_App_Blueprint.md §2, §3, §7, §8, §14)
   ========================================================== */
(function(BM){
  "use strict";
  BM.TERM = {
    title:"The Braided Map",
    subtitle:"Hakatere: our river, our mountains, our sky",
    yearLevels:"Years 5–6",
    lessonLength:50,
    premise:"In the floods this winter, the Hakatere rose faster than anyone had seen in years. A digger driver repairing the stopbank hit something metal: a rusted tin chest, buried deep in the gravel. Inside was a surveyor's field book dated 1864 and ten folded map sheets, stuck together. The Museum's archivist needs a team who can think like historians, geographers, astronomers, engineers and artists. She has chosen you.",
    bigQuestion:"Whose story does a map tell?",
    weeks:[
      { n:1, folio:"I", title:"The Chest", story:"The chest is found in the stopbank gravel. Sheet I shows the river mouth and two names: “Ashburton” in ink, “Hakatere” in pencil.", route:[76.3,90.4],
        lessons:{ history:"Whose Place? Names, Sources & Local History", geography:"Reading the Land: From Mountains to Sea", science:"Look Up! Stars, Planets & Moons", technology:"Think Like an Engineer: Machines on Our Farms", art:"Seeing the Land: Mountain Sketching & the Field Journal" }, pillar:"mohio", text:"Joshua 4:1–7" },
      { n:2, folio:"II", title:"Kāika & Kai", story:"Pencilled symbols mark seasonal camps and food places along the river.", route:[74.4,82],
        lessons:{ history:"Tākata whenua: the first people of Hakatere", geography:"How mountains are made: plates, the Alpine Fault & greywacke", science:"The Sun is a star", technology:"Levers: the gate, the bale spike & the lifting arm", art:"Rita Angus & the high country: flat-colour landscape" }, pillar:"aroha", text:"Psalm 104:10–14" },
      { n:3, folio:"III", title:"The Old Trails", story:"A dotted line runs inland toward the mountains, and a lone tree is drawn on the plain.", route:[69.5,71],
        lessons:{ history:"Ara tawhito: trails, rivers & the tree called Hine-Paaka", geography:"Mountain hazards: earthquakes, slips & avalanches", science:"Day, night & the spinning sky", technology:"Wheels, axles & gears", art:"Layered mountains: depth & atmospheric perspective" }, pillar:"mohio", text:"Ps 119:105; Ps 46:1–3" },
      { n:4, folio:"IV", title:"The Deed", story:"A torn page: a copy of a land deed, and a promise underlined twice.", route:[60,65],
        lessons:{ history:"1848: Kemp's Deed — land, promises & perspectives", geography:"Ice & gravel: glaciers, the plains & braided rivers", science:"Tilt & seasons: why Matariki rises in winter", technology:"Pulleys & linkages: the hay hoist", art:"Braided rivers from above: line & pattern" }, pillar:"panga", text:"Lev 25:23; 1 Kings 21" },
      { n:5, folio:"V", title:"The Run", story:"A high-country sheep station and its stone cottage.", route:[50,59],
        lessons:{ history:"Sheep runs & the high country: Hakatere Station", geography:"Mountain weather: rain shadow, the nor'wester & the arch", science:"The Moon & the maramataka", technology:"Build a machine: the pivot irrigator model", art:"Nor'west skies: wet-on-wet watercolour" }, pillar:"manaaki", text:"John 10:11; Ps 104:19" },
      { n:6, folio:"VI", title:"The Town", story:"A grid of streets on a treeless plain, and a ferry on the river.", route:[41,52.5],
        lessons:{ history:"Building Ashburton: the Victorian town, the railway & industry", geography:"Life above the bushline: alpine & tussock ecosystems", science:"Matariki & Puaka: the cluster, its stars & meanings", technology:"Scratch 1: algorithms & sequence (drive the tractor)", art:"Ngāi Tahu rock art: learning about, not copying" }, pillar:"mohio", text:"Ps 147:4; Amos 5:8" },
      { n:7, folio:"VII", title:"The Race", story:"A water race slicing across the plains. Sheet VII is missing!", route:[32,44],
        lessons:{ history:"Water on the plains: water races & the Rangitata Diversion Race", geography:"People & mountains: stations, musterers, ski fields & parks", science:"Life of a star: colours, giants & nebulae", technology:"Scratch 2: loops (the irrigator circle)", art:"Matariki printmaking" }, pillar:"manaaki", text:"1 Peter 4:10" },
      { n:8, folio:"VIII", title:"The Flood", story:"The surveyor's note about a great flood, and a line marked “stopbank?”", route:[25.5,34],
        lessons:{ history:"May 2021: the Hakatere flood & recovery (+ Tarawera 1886)", geography:"Mountains of Southeast Asia: Kinabalu case study", science:"Our galaxy: Te Ikaroa, the Milky Way & beyond", technology:"Scratch 3: events & decisions (the smart irrigator)", art:"Patchwork plains: aerial collage" }, pillar:"aroha", text:"Matt 7:24–27; Isa 43:2" },
      { n:9, folio:"IX", title:"Making It Right", story:"The pencilled names are restored, and the field book's last entry is an apology.", route:[20.5,24.5],
        lessons:{ history:"Te Kerēme: the Ngāi Tahu claim & the 1998 settlement", geography:"Water from the mountains: snow, ice & a warming world", science:"Finding our way: navigating by the stars", technology:"Scratch 4: variables & testing (counting the harvest)", art:"My Place triptych: build week" }, pillar:"panga", text:"Luke 19:1–10; Micah 6:8" },
      { n:10, folio:"X", title:"Our Place", story:"The full map is reassembled. The class decides its future: it goes to the community, with the names honoured.", route:[16.5,15],
        lessons:{ history:"Hakatere today: many families, one place + the Exhibition", geography:"Kaitiaki of the mountains: our campaign", science:"Seeing further: telescopes, dark skies & the Sky Expo", technology:"Smart Farm showcase: test, evaluate & present", art:"Our Place Exhibition" }, pillar:"sdg", text:"Revelation 7:9" }
    ],
    codes:{
      "SS-H":"Social Sciences — History: understanding the past through sources, perspectives, cause & consequence, continuity & change (2027, Years 4–6).",
      "SS-G":"Social Sciences — Geography: places, environments, hazards, biomes, climate; maps, contours, aerial images.",
      "SS-C":"Social Sciences — Civics & Society: rules, laws, rights & responsibilities, decision-making.",
      "SS-E":"Social Sciences — Economic Activity: specialisation, exchange, local industry and business.",
      "SS-P":"Social Sciences — Practices: asking questions, using primary & secondary sources, comparing perspectives, explaining change, respectful debate.",
      "ANZH":"Aotearoa New Zealand's Histories: local stories, tūrangawaewae, mana whenua perspectives.",
      "SC-ES":"Science — Earth & Space (stars, Sun, Moon, seasons, galaxies, rocks).",
      "SC-MF":"Science — Motion & forces (simple machines, gravity).",
      "SC-P":"Science — Practices: questioning, observing, measuring, modelling, explaining with evidence.",
      "TE-TP":"Technology (NZC 2007 L3) — Technological Practice: brief development, planning, outcome development & evaluation.",
      "TE-TK":"Technology (NZC 2007 L3) — Technological Knowledge: modelling, products, technological systems (inputs, processes, outputs; mechanisms).",
      "TE-NT":"Technology (NZC 2007 L3) — Nature of Technology: technology and society (how farm machines changed Mid Canterbury).",
      "DT-CT":"Digital Technologies — Computational Thinking, Progress Outcome 2: give, follow and debug simple algorithms; build simple programs.",
      "DT-DD":"Digital Technologies — Designing & Developing Digital Outcomes.",
      "VA-UC":"Visual Arts (NZC 2007 L3) — Understanding the arts in context.",
      "VA-PK":"Visual Arts (NZC 2007 L3) — Developing practical knowledge.",
      "VA-DI":"Visual Arts (NZC 2007 L3) — Developing ideas.",
      "VA-CI":"Visual Arts (NZC 2007 L3) — Communicating & interpreting.",
      "EN":"English — interviews, explanation, oral history.",
      "MA":"Mathematics & Statistics — scale, contours, angles & bearings, light-years, gear ratios, data.",
      "TR":"Te reo Māori — place names (local Kāi Tahu forms where used).",
      "RE":"Christian Character / Bible programme."
    },
    coverage:[
      ["Y6 History: NZ to 1840, early contact; land acquisition and differing views on whether land can be owned; Māori political responses including petitions","Mon W2–W4, W9"],
      ["Y6 History: Elizabethan and Victorian ages — life for different social groups, religion, buildings, technology","Mon W5–W6"],
      ["Y5 History: natural events and recovery (Mt Tarawera 1886) plus a case study of another natural disaster","Mon W8 (May 2021 Hakatere flood)"],
      ["Y5 Geography: tectonic hazards — how they happen, the hazards they cause, how to prepare","Tue W2–W3"],
      ["Y5 Geography: biomes and ecosystems","Tue W6"],
      ["Y6 Geography: climate patterns, temperature trends, greenhouse gases, mitigation and adaptation","Tue W5, W9"],
      ["Y6 Geography: a Southeast Asian region with a country case study","Tue W8 (Kinabalu) — full regional study in another term"],
      ["Y6 Civics: rights and responsibilities; designing a campaign","Tue W10"],
      ["Y5 Civics: who makes rules — central government, councils, communities","Mon W7; Tue W10"],
      ["Y6 Economic Activity: specialisation and exchange, including local examples","Mon W6–W7; Thu W10"],
      ["Y5 Science: simple machines (levers, pulleys) that reduce effort or change direction","Thu W2–W5"],
      ["Y5 Science: Earth's tilt causes seasons; the Moon's phases; maramataka","Wed W4–W5"],
      ["Y6 Science: night sky — stars, Moon and planets; the Sun is a star; the Milky Way; mapping the sky; the significance of Matariki","Wed W1–W3, W6–W10"],
      ["Y6 Science: rocks and minerals","Tue W2"]
    ],
    coreRubrics:{
      history:{ title:"History", codes:"SS-H · SS-P · ANZH", rows:[
        ["Using sources","Names a source. e.g. “We know because of the museum.”","Says what a source tells us and what kind it is. e.g. “The Hakatere Station stone cottage is a primary source. It's still standing from 1862 and shows how shepherds lived.”","Compares sources and judges their reliability. e.g. “Mantell's 1848 sketches show where Kāi Tahu camped, but he was working for the Crown, so I'd check the Arowhenua account too.”"],
        ["Cause & consequence","Retells an event. e.g. “They built a water race.”","Explains a cause and a consequence. e.g. “The plains were too dry, so the RDR was built in the Depression. It gave people jobs and watered farms.”","Weighs several causes or links to today. e.g. “Jobs, power and farming all mattered. Today irrigation still shapes our town, including arguments about river water.”"],
        ["Perspectives","Gives one point of view.","Describes two perspectives on an event (e.g. Kāi Tahu and the Crown on Kemp's Deed).","Explains why people saw it differently and what fairness requires now."]]},
      geography:{ title:"Geography / Social Science", codes:"SS-G · SS-C · SS-P", rows:[
        ["Using maps & data","Finds a place on a map with help.","Reads contours, scale and grid references to describe a place. e.g. “Mt Somers is at grid C3. The contours are close together on the south face, so it's steep.”","Interprets patterns across maps and data. e.g. “The plains are dry because they sit in the rain shadow, so farms cluster where there's irrigation.”"],
        ["Explaining processes","Describes a feature. e.g. “The mountains are high.”","Explains how a process made it. e.g. “The Pacific and Australian plates push together, so the Alps rise about 10 mm a year near the Alpine Fault.”","Links processes to people and hazards. e.g. “Uplift + erosion + ice made the gravel plains. That's why our rivers braid and why floods spread so wide.”"],
        ["Taking action","Gives an opinion.","Gives an opinion with reasons and recognises another view.","Builds a fair, reasoned case for action."]]},
      science:{ title:"Science", codes:"SC-ES · SC-MF · SC-P", rows:[
        ["Scientific understanding","Names objects. e.g. “Matariki is stars.”","Explains using a scientific idea. e.g. “Matariki is a cluster of stars. We only see it before dawn in winter because Earth has moved around the Sun so it's now on our night side.”","Predicts and explains new situations. e.g. “In summer, Matariki is up in the evening, so we could see it at night then.”"],
        ["Investigating & observing","Observes with help.","Observes and records carefully over time (e.g. Moon diary).","Explains patterns in the observations and improves the method."],
        ["Communicating","Everyday words, simple drawings.","Correct vocabulary and labelled diagrams.","Uses models and diagrams to teach someone else."]]},
      technology:{ title:"Technology", codes:"TE-TP · TE-TK · DT-CT", rows:[
        ["Design & planning","Has an idea.","Writes a brief with a stakeholder, need and 2–3 specifications; sketches a labelled plan.","Justifies design choices against the specifications."],
        ["Mechanisms & systems","Builds with help; some parts move.","Builds a working mechanism and explains its input → process → output. e.g. “Turning the small gear makes the big gear turn slower but with more force.”","Improves it after testing and explains how the parts interact."],
        ["Algorithms & debugging","Follows given steps.","Writes a sequence with a loop or decision; finds and fixes a bug.","Writes efficient code and explains how they debugged methodically."],
        ["Evaluation","Says if it worked.","Evaluates against each specification.","Gets stakeholder feedback and plans the next version."]]},
      art:{ title:"Visual Art", codes:"VA-UC · VA-PK · VA-DI · VA-CI", rows:[
        ["Context","Names an artist or tradition.","Explains its purpose or meaning (e.g. Rita Angus painted the high country as clear, bright shapes).","Compares traditions respectfully (e.g. rock art as tribal record vs landscape painting)."],
        ["Technique","Uses materials with help.","Uses the technique carefully (even wash, layered depth, clean print).","Combines techniques skilfully; refines through trial."],
        ["Ideas","Copies an example.","Develops an own design from studied examples.","Creates an original, meaningful design showing influence without copying."],
        ["Reflecting","Says what they like.","Uses art words to describe work.","Gives specific, kind feedback and explains choices."]]}
    },
    kit:[
      ["Every lesson","Field Journal per student (sketchbook or exercise book) · mini-whiteboards & pens"],
      ["Science","Torches · polystyrene or foam balls (Sun/Earth/Moon models) · foil · paper plates · split pins · printed planisphere (free templates) · optional binoculars · Stellarium (free planetarium software) for the teacher"],
      ["Technology","Card, split pins, skewers (points blunted), cotton reels, string, bottle caps, paper cups, straws, rubber bands · printed gear templates · teacher-only glue gun & craft knife · devices for Scratch (optional, Weeks 6–9)"],
      ["Art","A3 cartridge paper · B/2B pencils · charcoal · erasers · tinted papers (5 shades blue-grey) · watercolours & brushes · oil pastels · purchased earth pigments (never taken from any site) · foam printing sheets, brayers, block ink · collage paper · A2 card for the triptych"],
      ["Optional printables","Contour maps, Machine Detective cards, Path Cards, student rubrics — one click from each lesson"]
    ],
    safety:[
      "Never look directly at the Sun — not with eyes, binoculars or a telescope.",
      "Technology workshop: scissors rules; skewer points blunted or capped; elastic bands used carefully; no sockets or mains devices; tidy-up routine. Craft knife and glue gun are teacher-only.",
      "Outdoor sketching and dark-sky evenings: usual school outdoor and after-hours procedures; whānau supervision for evening events.",
      "The May 2021 flood (Week 8): give a calm warning; some local families lived through it. Offer an opt-out and focus on helpers and recovery.",
      "Kemp's Deed and Te Kerēme (Weeks 4, 9): honest, age-appropriate, two perspectives; no blame aimed at children or families.",
      "Farm visits: only with school health & safety approval; stay well clear of moving machinery."
    ]
  };
  BM.WEEKS = BM.WEEKS || {};
})(window.BM);
