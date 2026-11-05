/* ==========================================================
   TERM DATA — overview, curriculum, core rubrics, kit
   (source: Persia_App_Blueprint.md §1, §2, §3, §7, §8, §13, §14)
   route = [longitude, latitude] of the week's main place (for the map)
   ========================================================== */
(function(BM){
  "use strict";
  BM.TERM = {
    title:"The Royal Road",
    subtitle:"Quest for the Seal of the Kings",
    yearLevels:"Years 5–6",
    lessonLength:50,
    premise:"Long ago, the greatest road in the world ran from the sea in the west to the palaces of the east. At its end was a treasure: the Seal of the Kings, which could open any gate in the empire. One night a terrible sandstorm shattered it into ten fragments and scattered them along the road and across the centuries. Shirin, the youngest scribe of the royal archive, has an old Road Scroll that opens a different century every week. She needs a caravan that can think like historians, geographers, scientists, engineers and artists. She has chosen you.",
    bigQuestion:"What makes a kingdom last?",
    weeks:[
      { n:1, folio:"I", title:"The Gates of the Plateau", place:"the Zagros Mountains", route:[47.4,33.6], story:"The Seal shatters in a sandstorm. Shirin's Road Scroll opens for the first time, and the caravan steps out into the Zagros Mountains.",
        lessons:{ history:"Before the Empire: Elamites, Medes & Persians", geography:"Why Settle Here? Reading the Persian Plateau", science:"What Is a Habitat? The Zagros Mountain Community", technology:"Think Like a Desert Engineer", art:"Rosettes & Radial Symmetry: Patterns of the Palaces" }, pillar:"mohio", text:"Gen 10:22; Acts 2:9" },
      { n:2, folio:"II", title:"The King Who Opened the Gates", place:"Babylon, 539 BC", route:[44.42,32.54], story:"Babylon, 539 BC. The fragment is hidden inside a clay cylinder.",
        lessons:{ history:"Cyrus the Great & the fall of Babylon", geography:"Royal capitals: Pasargadae, Babylon, Susa, Persepolis", science:"Producers, consumers & decomposers: the grassland", technology:"Water from the mountains: build a qanat", art:"Cylinder seals & cuneiform" }, pillar:"mohio", text:"Isaiah 45:1–7" },
      { n:3, folio:"III", title:"The Royal Road", place:"Behistun, on the road", route:[47.44,34.39], off:[0,-34], story:"A relay station on the road. The caravan races a courier past a great carved cliff.",
        lessons:{ history:"Darius the organiser: satraps, darics, roads & Behistun", geography:"Road towns: settlements along the Royal Road", science:"Food webs & predators: the Persian leopard", technology:"Catching the wind: the windcatcher", art:"Relief carving: the procession of nations" }, pillar:"panga", text:"Daniel 6:10" },
      { n:4, folio:"IV", title:"Pride Before the Fall", place:"the Hellespont", route:[26.6,40.2], story:"A storm at the Hellespont. The fragment falls into the sea and is fished out by Nasrin.",
        lessons:{ history:"Xerxes & the Greeks: whose story?", geography:"Water towns: qanats, oases & Yazd", science:"Desert adaptations: the Lut", technology:"Ice in the desert: the yakhchāl", art:"Glazed-brick archers: printmaking" }, pillar:"mohio", text:"Proverbs 16:18" },
      { n:5, folio:"V", title:"For Such a Time as This", place:"the palace at Susa", route:[48.25,32.19], off:[0,30], story:"The palace at Susa, where a queen risks her life.",
        lessons:{ history:"Esther, queen of Persia", geography:"Layers of a city: Susa & the tell", science:"Wetlands & salt lakes: Lake Urmia", technology:"Arches & domes: building strong", art:"Gold of the Oxus: foil embossing" }, pillar:"panga", text:"Esther 4:14" },
      { n:6, folio:"VI", title:"Rebuilding the Walls", place:"Jerusalem", route:[35.23,31.77], story:"Jerusalem's broken walls. The whole class must cooperate to rebuild one wall.",
        lessons:{ history:"Ezra & Nehemiah: going home to rebuild", geography:"Walls & gates: Jerusalem rebuilt", science:"Living together: mutualism, parasitism & competition", technology:"Royal Road Messages 1: relay algorithms", art:"Paradise gardens: designing a chahar bagh" }, pillar:"manaaki", text:"Nehemiah 4:6; 6:15" },
      { n:7, folio:"VII", title:"The Marketplace of the World", place:"a great bazaar (Tabriz)", route:[46.29,38.08], story:"A great bazaar. A thief among the camels!",
        lessons:{ history:"Everyday lives: the Persepolis tablets", geography:"Bazaars & caravanserais: markets & trade", science:"Working animals: camels, horses & care", technology:"Messages 2: secret codes & loops", art:"Carpets & weaving: the Pazyryk carpet" }, pillar:"aroha", text:"Prov 12:10; 31:31" },
      { n:8, folio:"VIII", title:"Fire on the Mountain", place:"Persepolis", route:[52.89,29.93], off:[-34,10], story:"Persepolis burns. The heaviest setback: the fragment is cracked.",
        lessons:{ history:"Alexander & the fall of Persia", geography:"Hazards & rebuilding: the Bam earthquake", science:"Endangered: the Asiatic cheetah", technology:"Messages 3: binary signals & variables", art:"Miniature painting: the Shahnameh" }, pillar:"mohio", text:"Daniel 2:44; Psalm 46" },
      { n:9, folio:"IX", title:"Star-Watchers & Silk", place:"the road east (Nishapur)", route:[58.8,36.21], story:"A night journey with star-watchers from the east. The Shadow Courier is unmasked: Zal.",
        lessons:{ history:"Parthians, Sasanians & the Magi", geography:"Silk Road cities: Persia meets China", science:"Sea communities: the Caspian seal", technology:"Messages 4: events, decisions & debugging", art:"The Magi's night sky" }, pillar:"aroha", text:"Matt 2:1–12; Col 3:13" },
      { n:10, folio:"X", title:"The Gate of All Nations", place:"Persepolis: the Gate of All Nations", route:[52.89,29.93], off:[34,-14], story:"The caravan votes on forgiving Zal. All ten fragments join; the Seal's message is revealed.",
        lessons:{ history:"Legacy & Iran today: Nowruz, words & gardens", geography:"Cities today: Tehran, NZ & a fair city", science:"Recovery: the fallow deer & the takahē", technology:"Showcase: test, evaluate & present", art:"The Persia Exhibition" }, pillar:"sdg", text:"Prov 2:4–6; Rev 7:9" }
    ],
    codes:{
      "SS-H":"Social Sciences — History: understanding the past through sources, perspectives, cause & consequence, continuity & change (2027, Years 4–6).",
      "SS-G":"Social Sciences — Geography: places, settlements, environments, hazards, biomes; maps and aerial images.",
      "SS-C":"Social Sciences — Civics & Society: rules, laws, leadership, rights & responsibilities.",
      "SS-E":"Social Sciences — Economic Activity: specialisation, exchange, trade, money.",
      "SS-P":"Social Sciences — Practices: asking questions, using primary & secondary sources, comparing perspectives, explaining change, respectful debate.",
      "SC-LW":"Science — Living world: habitats, ecosystems, food webs, adaptation, diversity, conservation (2027, Years 4–6).",
      "SC-PW":"Science — Physical world: heat, insulation, air movement, forces and structures (used in Technology).",
      "SC-P":"Science — Practices: questioning, observing, fair testing, measuring, modelling, explaining with evidence.",
      "TE-TP":"Technology (NZC 2007 L3) — Technological Practice: brief development, planning, outcome development & evaluation.",
      "TE-TK":"Technology (NZC 2007 L3) — Technological Knowledge: modelling, products, technological systems (input → process → output).",
      "TE-NT":"Technology (NZC 2007 L3) — Nature of Technology: technology and society (how Persian inventions shaped settlement).",
      "DT-CT":"Digital Technologies — Computational Thinking, Progress Outcomes 2–3: give, follow and debug algorithms; simple programs with sequence, loops, inputs and outputs; binary.",
      "DT-DD":"Digital Technologies — Designing & Developing Digital Outcomes.",
      "VA-UC":"Visual Arts (NZC 2007 L3) — Understanding the arts in context.",
      "VA-PK":"Visual Arts (NZC 2007 L3) — Developing practical knowledge.",
      "VA-DI":"Visual Arts (NZC 2007 L3) — Developing ideas.",
      "VA-CI":"Visual Arts (NZC 2007 L3) — Communicating & interpreting.",
      "EN":"English — explanation, persuasion, retelling, reading sources.",
      "MA":"Mathematics & Statistics — timelines and BC dates, place value with Old Persian number signs, scale and distance, angles and symmetry, percentages, binary, data.",
      "RE":"Christian Character / Bible programme."
    },
    coverage:[
      ["Y6 Geography: urbanisation, why people move to cities, informal settlements and their impact on people","Tue all term — especially W1 (why settle here), W3–W4 (road and water towns), W7 (markets), W10 (Tehran and NZ cities today; planning a fair city)"],
      ["Y6 Economic Activity: specialisation and exchange","Mon W3 (the daric, taxes, the Royal Road), Mon W7 (workers and rations in the Persepolis tablets), Tue W7 (bazaars and caravanserais)"],
      ["Y5 Geography: tectonic hazards — how they happen, the hazards they cause, how to prepare","Tue W8 (the 2003 Bam earthquake and rebuilding; NZ comparison)"],
      ["Y5 Geography: biomes and ecosystems","Tue W1 (mountain, desert and plateau); Wed W1–W5"],
      ["Y5 History: an ancient civilisation case study (🔎 the Year 5 guide names ancient China)","Persia all term; Tue W9 compares Persian and Chinese Silk Road cities. Flag: a separate ancient China study may still be needed."],
      ["Y5–6 History practices: sources, perspectives, cause & consequence, continuity & change","Mon all term: primary sources every week; Persian vs Greek vs biblical accounts (W4)"],
      ["Y6 History: NZ to 1840; the Victorian age","Not covered this term (see the Hakatere term)"],
      ["Y5 Science: ecosystems — living and non-living parts; producers, consumers, decomposers; food chains and webs; predator and prey; mutualism and parasitism","Wed W1–W3, W5–W6, W9"],
      ["Y6 Science: diversity of living things, variation, adaptation (🔎 check exact wording)","Wed W4 (desert adaptations; natural selection only as a 🔬 side note, D8), W7, W8, W10"],
      ["Y5 Science: heat and insulation; forces and structures (🔎 check year-level wording)","Thu W3–W5 (windcatcher airflow, ice-house insulation, arches)"]
    ],
    coreRubrics:{
      history:{ title:"History", codes:"SS-H · SS-P · RE", rows:[
        ["Using sources","Names a source. e.g. “We know from the Cyrus Cylinder.”","Says what a source tells us and what kind it is. e.g. “The Cyrus Cylinder is a primary source from 539 BC. It says Cyrus took Babylon without a battle and sent peoples home.”","Compares sources and judges their reliability. e.g. “The Cylinder was written for Cyrus, so it makes him look good. Ezra 1 describes the same policy from the Jews' side. Together they show it really happened.”"],
        ["Cause & consequence","Retells an event. e.g. “Darius built a road.”","Explains a cause and a consequence. e.g. “The empire was huge, so Darius built the Royal Road with stations. Messages could cross it in days instead of months.”","Weighs several causes or links to today."],
        ["Perspectives","Gives one point of view.","Describes two perspectives on an event (e.g. Greeks and Persians on Thermopylae).","Explains why people saw it differently and whose voices are missing."],
        ["Chronology","Puts some events in order with help.","Orders events on a BC/AD timeline and explains that BC dates count down.","Explains how events in different places happened at the same time (e.g. Esther and the Greek wars)."]]},
      geography:{ title:"Geography / Social Science", codes:"SS-G · SS-E · SS-P", rows:[
        ["Settlement factors","Gives one reason a town is there. e.g. “There's water.”","Explains how several factors shaped a settlement. e.g. “Yazd is in the desert, but qanats bring water from the mountains, and it was on a trade route, so a city could grow.”","Compares settlements and predicts change. e.g. “If the qanats dried up, Yazd would need pumps or would shrink.”"],
        ["Using maps & data","Finds a place on a map with help.","Uses a map, scale and data to describe a place.","Interprets patterns across maps and data (e.g. city growth graphs)."],
        ["People & change","Describes a city.","Explains why people move to cities and one effect.","Suggests fair solutions to a city problem and recognises other views."]]},
      science:{ title:"Science", codes:"SC-LW · SC-P", rows:[
        ["Scientific understanding","Names animals in a habitat.","Explains relationships using science words. e.g. “Wild goats are the leopard's main prey, so if goats are hunted out, leopards lose their food.”","Predicts what happens when an ecosystem changes. e.g. “As Lake Urmia gets saltier, brine shrimp die, so flamingos lose food and leave.”"],
        ["Investigating","Observes with help.","Plans and carries out a fair test, recording results.","Explains results and improves the method."],
        ["Communicating","Everyday words, simple drawings.","Correct vocabulary and labelled food-web diagrams.","Uses models and data to teach someone else."]]},
      technology:{ title:"Technology", codes:"TE-TP · TE-TK · DT-CT", rows:[
        ["Design & planning","Has an idea.","Writes a brief with a stakeholder, need and 2–3 specifications; sketches a labelled plan.","Justifies design choices against the specifications."],
        ["Making & testing","Builds with help.","Builds a working model and tests it fairly against a specification. e.g. “Our ice house kept the ice 25 minutes longer with two layers of felt.”","Improves the model after testing and explains why the change worked."],
        ["Algorithms & debugging","Follows given steps.","Writes a sequence with a loop or decision; finds and fixes a bug.","Writes efficient code and explains how they debugged methodically."],
        ["Technology & society","Says what an invention does.","Explains how an invention helped people live somewhere.","Compares an old solution with a modern one (e.g. windcatcher vs air-conditioner)."]]},
      art:{ title:"Visual Art", codes:"VA-UC · VA-PK · VA-DI · VA-CI", rows:[
        ["Context","Names an object or art form.","Explains its purpose or meaning. e.g. “The archers frieze was glazed brick in Darius's palace at Susa, showing the king's guard.”","Compares art from different times or places respectfully."],
        ["Technique","Uses materials with help.","Uses the technique carefully (clean print, even relief, symmetrical design).","Combines techniques skilfully; refines through trial."],
        ["Ideas","Copies an example.","Develops an own design from studied examples.","Creates an original, meaningful design showing influence without copying."],
        ["Reflecting","Says what they like.","Uses art words to describe work.","Gives specific, kind feedback and explains choices."]]}
    },
    kit:[
      ["Every lesson","Caravan Journal per student (exercise book or sketchbook) · mini-whiteboards & pens"],
      ["Science","Printed animal cards (from the animal images) · string for food webs · clear cups and coloured sand (Week 5 tell, shared with Geography)"],
      ["Technology","Card, tape, glue sticks, guttering offcuts or card half-pipes, trays, jugs, measuring cups, air-dry clay, shoeboxes, paper streamers, a desk fan (teacher-operated), identical cups, ice cubes, wrapping materials (foil, felt, newspaper, bubble wrap), sugar cubes or foam blocks, coins for load tests, stopwatches · devices for Scratch (optional, Weeks 6–9)"],
      ["Art","Compasses, protractors, rulers · coloured pencils, felt pens · air-dry clay · cardboard tubes and craft foam (seals) · foam printing sheets, brayers, block ink · craft metal foil and felt pads · paper for weaving · A5 watercolour paper, fine brushes, watercolours or gouache · A2 card for the Paradise Garden panel"],
      ["Optional printables","Outline maps of Iran, animal cards, Path Cards, student rubrics — one click from each lesson"]
    ],
    safety:[
      "Technology workshop: water and spills (towels ready; nothing electrical near water); the fan is operated by the teacher only; scissors rules; no sockets or mains devices handled by students; tidy-up routine. Craft knife is teacher-only.",
      "Compass points (Friday art): carried point-down, used flat on the desk, passed handle-first.",
      "War and violence (Thermopylae, Alexander, the Esther story) are taught without gore.",
      "The Bam earthquake (Week 8) is taught with care: helpers, safer buildings, preparation. Remember Canterbury families' own earthquake memories.",
      "Iran today (D10): people, culture and creation, with prayer and no political commentary. Use the script in the blueprint (§17) if students raise the news.",
      "Some students may have family in Iran or the Middle East, or Muslim or Zoroastrian family and friends. Describe every faith accurately and respectfully."
    ]
  };
  BM.WEEKS = BM.WEEKS || {};
})(window.BM);
