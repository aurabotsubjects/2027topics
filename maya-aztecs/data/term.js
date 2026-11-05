/* ==========================================================
   TERM DATA — overview, curriculum, core rubrics, kit
   (source: Maya_Aztecs_App_Blueprint.md)
   ========================================================== */
(function(FC){
  "use strict";
  FC.TERM = {
    title:"The Fifth Codex",
    subtitle:"An Expedition into the Maya & Aztec World",
    yearLevels:"Years 5–6",
    lessonLength:50,
    premise:"Three nights ago, a tropical storm tore through the rainforest of northern Guatemala. A fallen ceiba tree cracked open a hidden stone chamber. Inside was a folded bark-paper book, sealed with ten jade seals. Only four Maya books have survived the last 500 years. This could be the fifth — and someone calling himself 'The Collector' wants it.",
    weeks:[
      { n:1, folio:"I", title:"The Seal Breaks", story:"The chamber is found and the expedition team assembled. Lightning has knocked out the camp's power.", ready:true, route:[-89.6,17.2] ,
        lessons:{ history:"Who Were the Maya and Aztecs?", geography:"Where in the World?", science:"What Is Electricity? Static & Lightning", technology:"Think Like an Engineer: The Jaguar-Eye Torch", art:"Glyph Sketching & Making the Codex" }, pillar:"mohio", text:"Acts 17:24–27" },
      { n:2, folio:"II", title:"Children of Maize", story:"The first folio shows a maize field. Emergency batteries are needed.", route:[-94.0,18.1],
        lessons:{ history:"From Olmec to Maya: Maize & the First Cities", geography:"Land of Fire & Stone: the Ring of Fire", science:"Electric Life: Eels, Nerves & Batteries", technology:"Paper Circuits: Light-Up Glyph Cards", art:"Dyes & Colour: the Maya Blue Mystery" }, pillar:"aroha", text:"Ps 65:9–13; Gen 2:7" },
      { n:3, folio:"III", title:"The Scribe's Secret", story:"The glyphs reveal a scribe's name. The class learns to read Maya numbers.", route:[-88.6,20.7],
        lessons:{ history:"Writing & Numbers: Cracking the Maya Code", geography:"Water Beneath Stone: Cenotes & Chicxulub", science:"The Complete Loop: Circuits & Symbols", technology:"Switches: the Pressure-Plate Temple Trap", art:"Number Art: Dot-Bar-Shell Pattern Design" }, pillar:"mohio", text:"Isa 40:8; John 1:1–5" },
      { n:4, folio:"IV", title:"Keepers of Time", story:"A date is hidden in the folio. The right materials protect the codex from damp.", route:[-60.0,-3.1],
        lessons:{ history:"Calendars, Astronomy & the 2012 Myth", geography:"Rainforest Biomes: Petén & Amazon vs NZ", science:"Conductors & Insulators: the Gift of Rubber", technology:"Meet the Microcontroller", art:"Calendar Wheels" }, pillar:"mohio", text:"Ps 90:12; Matt 24:36" },
      { n:5, folio:"V", title:"The Silent Cities", story:"The folio points to an abandoned city. A LiDAR scan reveals it.", route:[-89.8,18.1],
        lessons:{ history:"Kings, City-States & the Great Collapse", geography:"Deforestation & Indigenous Peoples", science:"Series & Parallel Circuits", technology:"Sequences & Loops: the Calendar Light Code", art:"Portraits of Kings: Relief & Shading" }, pillar:"panga", text:"Gen 2:15; Ps 127:1" },
      { n:6, folio:"VI", title:"The Eagle on the Cactus", story:"The trail crosses into Aztec lands. The compass is lost.", route:[-99.1,19.4],
        lessons:{ history:"The Rise of the Aztecs", geography:"Cities on a Lake: Urbanisation", science:"Magnetism & the Olmec 'Compass' Mystery", technology:"Inputs & Decisions: the Secret Door Code", art:"Aztec Geometric Design & Card Stamping" }, pillar:"mohio", text:"Matt 7:24–27" },
      { n:7, folio:"VII", title:"The Great Market", story:"A trade record is decoded. An electromagnet lifts the stone lid.", route:[-98.6,19.0],
        lessons:{ history:"Daily Life in Tenochtitlan", geography:"Trade & Exchange: Cacao Money to Tap-and-Go", science:"Electromagnets", technology:"Sound: the Teponaztli Drum Code", art:"Mosaic: Torn-Paper Turquoise" }, pillar:"manaaki", text:"Prov 11:1; 2 Cor 9:7" },
      { n:8, folio:"VIII", title:"The Fifth Sun", story:"A sun-stone riddle. The river generator powers the camp.", route:[-72.0,-13.5],
        lessons:{ history:"Beliefs & the Fifth Sun", geography:"The Andes & the Inca (+ the Kūmara Voyage)", science:"Generating Electricity", technology:"Sensors: the Equinox Sunrise Detector", art:"Papel Picado: Fold-and-Cut" }, pillar:"mohio", text:"Micah 6:6–8; Acts 17:25" },
      { n:9, folio:"IX", title:"Meeting of Worlds", story:"Two accounts of 1519. Mirrors light the dark chamber.", route:[-69.5,-23.5],
        lessons:{ history:"1519–1521: Two Accounts of the Conquest", geography:"Climate Patterns: El Niño & Extremes", science:"Light: Reflection, Shadows & Obsidian Mirrors", technology:"Temple of Light: Design & Build", art:"Woven Worlds: Huipil Motifs & Paper Weaving" }, pillar:"aroha", text:"Gen 1:27; Micah 6:8; 1 John 1:9" },
      { n:10, folio:"X", title:"The Codex Comes Home", story:"The class decides the codex's future — and it is returned to a Maya community museum.", route:[-89.9,16.9],
        lessons:{ history:"Living Legacy: the Maya & Nahua Today", geography:"Rights & Taonga: Who Should Own the Past?", science:"Powering the Future + Fair Test Expo", technology:"Temple of Light: Test, Evaluate & Showcase", art:"Completing My Codex & the Exhibition" }, pillar:"sdg", text:"Rev 7:9; Matt 5:14–16" }
    ],
    codes:{
      "SS-H":"Social Sciences — History: understanding the past through sources, perspectives, cause & consequence, continuity & change (2027, Years 4–6).",
      "SS-G":"Social Sciences — Geography: places, environments, hazards, biomes, urbanisation, climate; maps, graphs, aerial images.",
      "SS-C":"Social Sciences — Civics & Society: rules, laws, rights & responsibilities, decision-making.",
      "SS-E":"Social Sciences — Economic Activity: exchange, trade, money, specialisation.",
      "SS-P":"Social Sciences — Practices: questioning, using primary & secondary sources, comparing, explaining change, respectful debate, communicating.",
      "SC-MIE":"Science — Matter, interactions & energy (circuits, conductors, light, energy sources).",
      "SC-MF":"Science — Motion & forces (magnetism, non-contact forces).",
      "SC-ES":"Science — Earth systems / Earth & Space.",
      "SC-P":"Science — Practices: questioning, fair testing, observing, measuring, recording, explaining with evidence, using vocabulary & diagrams.",
      "TE-TP":"Technology (NZC 2007 L3) — Technological Practice: planning, brief development, outcome development & evaluation.",
      "TE-TK":"Technology (NZC 2007 L3) — Technological Knowledge: modelling, products, systems (input → process → output).",
      "TE-NT":"Technology (NZC 2007 L3) — Nature of Technology: characteristics of technology; technology & society.",
      "DT-CT":"Digital Technologies — Computational Thinking (PO1–2): algorithms, sequence/selection/loops, debugging.",
      "VA-UC":"Visual Arts (NZC 2007 L3) — Understanding the arts in context.",
      "VA-PK":"Visual Arts (NZC 2007 L3) — Developing practical knowledge.",
      "VA-DI":"Visual Arts (NZC 2007 L3) — Developing ideas.",
      "VA-CI":"Visual Arts (NZC 2007 L3) — Communicating & interpreting.",
      "EN":"English — oral language, reading, writing.",
      "MA":"Mathematics & Statistics — number (incl. base 20), measurement, geometry, data.",
      "RE":"Christian Character / Bible programme."
    },
    coverage:[
      ["Y5 Geography: tectonic hazards (earthquakes, volcanoes, tsunami)","Tue W2"],
      ["Y5 Geography: temperate & tropical rainforest biomes; NZ comparison","Tue W4"],
      ["Y5 Geography: deforestation & effects on environments and Indigenous peoples","Tue W5"],
      ["Y5 Economic Activity: changes in exchange (barter → currency → electronic); trade routes","Tue W7"],
      ["Y5 History: an ancient civilisation through farming, government, daily life, trade, religion, writing; comparing societies","Mon W2–W8"],
      ["Y5 Civics: purpose of laws and rules","Mon W7; Tue W10"],
      ["Y6 Geography: urbanisation & informal settlements","Tue W6"],
      ["Y6 Geography: climate patterns; greenhouse gases; mitigation & adaptation","Tue W9"],
      ["Y6 Geography: regional study with country case study (method; SE Asia taught elsewhere)","Tue W8"],
      ["Y6 Civics: rights & responsibilities; UN declarations; develop a campaign","Tue W10"],
      ["Y6 Economic Activity: specialisation and exchange","Tue W7"],
      ["Y6 Science: simple circuits — energy source + output device in a closed loop; metals conduct","Wed W1–W5; Thu W1–W10"],
      ["Y6 Science: light — reflection & refraction","Wed W9"],
      ["Y6 Science: rocks & minerals","Wed W4"],
      ["Y5 Science: non-contact forces incl. magnetism","Wed W6–W7"],
      ["Y5 Science: Earth/Moon/Sun, seasons, maramataka","Mon W4; Wed W9"]
    ],
    coreRubrics:{
      history:{ title:"History", codes:"SS-H · SS-P", rows:[
        ["Using sources","Names a source. e.g. “We know because of the pyramids.”","Says what a source tells us and what kind it is. e.g. “The Dresden Codex is a primary source — a Maya book showing they tracked Venus.”","Compares sources and judges reliability. e.g. “The Spanish accounts were written by the winners, so I'd check them against the Florentine Codex, which Nahua people helped write.”"],
        ["Cause & consequence","Retells what happened. e.g. “The Maya left their cities.”","Explains a cause and a consequence. e.g. “Long droughts meant crops failed, so people moved away.”","Weighs several causes or links to today. e.g. “Drought was probably the trigger, but war and cutting down forests made it worse — countries face the same mix today.”"],
        ["Perspectives","Gives one point of view.","Describes two different perspectives on an event.","Explains why people saw it differently and what that means for the truth."]]},
      geography:{ title:"Geography / Social Science", codes:"SS-G · SS-E · SS-C · SS-P", rows:[
        ["Using maps & data","Finds a place on a map with help.","Uses compass, grid reference, key and scale to locate and describe places. e.g. “Lake Titicaca is at D7, on the border of Peru and Bolivia, high in the Andes.”","Interprets patterns across maps or graphs. e.g. “Cities follow the coast and rivers because inland is mountain or rainforest.”"],
        ["People & environments","Describes a place. e.g. “The Amazon has lots of trees.”","Explains how people and environments affect each other. e.g. “Farmers clear rainforest for cattle, which removes habitats and threatens the Indigenous peoples who live there.”","Compares with NZ and suggests responses. e.g. “Like our kauri forests it's a taonga; protected areas and Indigenous guardianship reduce clearing.”"],
        ["Action & perspectives","Gives an opinion.","Gives an opinion with reasons and recognises another view.","Builds a reasoned case for action that is fair to different groups."]]},
      science:{ title:"Science", codes:"SC-MIE · SC-MF · SC-P", rows:[
        ["Scientific understanding","Names parts. e.g. “You need a battery and a bulb.”","Explains using a scientific idea. e.g. “The bulb only lights when the circuit is a closed loop, because current needs a complete path from the battery and back.”","Predicts and explains new situations. e.g. “A second bulb in series makes both dimmer because the same battery pushes current through more resistance.”"],
        ["Investigating (fair test)","Does a test with help.","Changes one variable, keeps others the same, records results.","Explains why it's fair, identifies weaknesses, suggests improvements."],
        ["Communicating","Uses everyday words, simple drawings.","Uses correct vocabulary and standard circuit symbols.","Uses diagrams and vocabulary precisely to teach someone else."]]},
      technology:{ title:"Technology", codes:"TE-TP · TE-TK · DT-CT", rows:[
        ["Design & planning","Has an idea.","Writes a brief with a need and 2–3 specifications; sketches a labelled plan.","Justifies design choices against the specifications and the stakeholder's needs."],
        ["Building & systems","Builds with help; some parts work.","Builds a working outcome; explains its input → process → output.","Improves after testing; explains how the parts of the system interact."],
        ["Algorithms & debugging","Follows steps given.","Writes/orders a sequence with a loop or decision; finds and fixes a bug.","Writes efficient code and explains how they debugged methodically."],
        ["Evaluation","Says if it worked.","Evaluates against each specification.","Gets stakeholder feedback and plans the next version."]]},
      art:{ title:"Visual Art", codes:"VA-UC · VA-PK · VA-DI · VA-CI", rows:[
        ["Context","Names the culture the art comes from.","Explains the purpose of the art form (e.g. glyphs recorded kings and dates).","Compares with another tradition and explains its meaning, respectfully."],
        ["Technique","Uses the materials with help.","Uses the technique carefully (even dye wash, clean symmetrical cut, controlled shading).","Combines techniques skilfully; refines through trial."],
        ["Ideas","Copies an example.","Develops their own design from the studied examples.","Creates an original, meaningful design showing influence without copying."],
        ["Reflecting","Says what they like.","Uses art words to describe their work and others'.","Gives specific, kind feedback and explains their artistic choices."]]}
    },
    kit:[
      ["Every lesson","Expedition Journal (1 exercise book per student) · mini-whiteboards & pens"],
      ["Science","Balloons (non-latex option) · tissue paper · plastic comb · AA battery packs & crocodile-clip leads (12 sets) · small bulbs & holders (12) · insulated wire · iron nails · paper clips · bar magnets · needles & corks · galvanised nails + copper strips · small mirrors (12) · torches (6) · DC motors (6)"],
      ["Technology","5 mm LEDs (40+) · CR2032 coin cells (30) in a lidded, labelled box · copper tape (2 rolls) · foil · card · sponge/foam · buzzers · binder clips · shoe boxes (collected W7) · optional: 6 Arduino Uno starter kits (see blueprint §13)"],
      ["Art","A3 card/paper (codex strips) · B/2B pencils · erasers · glue sticks & PVA · tea bags, coffee, turmeric, beetroot/red cabbage (dyes) · watercolours/acrylics & brushes · tissue & coloured paper · magazines · split pins · scissors"],
      ["Optional printables","Blank maps, timeline strips, templates, student rubrics — one click from each lesson"]
    ],
    safety:[
      "Low voltage only (AA/AAA, 9 V max, USB). Never mains sockets — explain why.",
      "Coin (button) cells are dangerous if swallowed: count out and back, lidded labelled box, never sent home.",
      "Short circuits heat wires and cells — touch briefly; disconnect when not testing.",
      "Scissors rules; craft knives teacher-only.",
      "Latex-free balloons option; check food allergies (lemons, potatoes, cacao demos).",
      "Earthquake content (W2): give a calm warning; Canterbury whānau may have lived experience; focus on helpers & preparedness."
    ]
  };
  FC.WEEKS = FC.WEEKS || {};
})(window.FC);
