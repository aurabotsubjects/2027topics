/* ==========================================================
   SOURCES — where the key facts in each week can be checked.
   Shown on each Week page and printed in the Week Pack.
   Add more with: { day:"mon|tue|wed|thu|fri|all", t:"Title", by:"Publisher", url:"https://…", fact:"what it backs up" }
   ========================================================== */
(function(FC){
  "use strict";
  FC.SOURCES = {
    1:[
      { day:"mon", t:"Maya people", by:"Encyclopaedia Britannica", url:"https://www.britannica.com/topic/Maya-people", fact:"Who the Maya were; where and when they lived" },
      { day:"mon", t:"Aztec civilization", by:"National Geographic Education", url:"https://education.nationalgeographic.org/resource/aztec-civilization/", fact:"Who the Aztecs (Mexica) were" },
      { day:"mon", t:"Maya codices", by:"UNC Libraries exhibit", url:"https://exhibits.lib.unc.edu/exhibits/show/maya/codices", fact:"Codices as primary sources; the few surviving Maya books" },
      { day:"mon", t:"13th-century Maya codex proves genuine (Grolier/Maya Codex of Mexico)", by:"Brown University", url:"https://www.brown.edu/news/2016-09-07/mayacodex", fact:"The fourth surviving Maya codex" },
      { day:"wed", t:"Lightning explained", by:"Science Learning Hub (NZ)", url:"https://www.sciencelearn.org.nz/resources/239-lightning-explained", fact:"How charge builds up and causes lightning" },
      { day:"wed", t:"Static electricity and electrical charge", by:"Science Learning Hub (NZ)", url:"https://www.sciencelearn.org.nz/resources/2746-static-electricity-and-electrical-charge", fact:"Charges, attraction, the bending-water demo" },
      { day:"wed", t:"Electricity: electrons, insulators and conductors", by:"Science Learning Hub (NZ)", url:"https://www.sciencelearn.org.nz/resources/2745-electricity-electrons-insulators-and-conductors", fact:"Atoms, electrons and current" }
    ],
    2:[
      { day:"mon", t:"El Mirador and La Danta", by:"Guinness World Records — Largest Maya pyramid", url:"https://www.guinnessworldrecords.com/world-records/779448-largest-maya-pyramid", fact:"La Danta, one of the largest pyramids" },
      { day:"mon", t:"Origins of agriculture: the Americas", by:"Encyclopaedia Britannica", url:"https://www.britannica.com/topic/agriculture/South-America", fact:"Maize, beans and squash domestication" },
      { day:"tue", t:"The Pacific Ring of Fire", by:"Te Ara — Encyclopedia of New Zealand", url:"https://teara.govt.nz/en/interactive/8692/the-pacific-ring-of-fire", fact:"The Ring of Fire and Aotearoa's place on it" },
      { day:"tue", t:"Volcanoes — plate boundaries", by:"Te Ara", url:"https://teara.govt.nz/en/volcanoes/page-2", fact:"Plates, subduction and volcanoes in NZ" },
      { day:"wed", t:"Newly discovered eel packs the biggest electrical punch of any known animal", by:"ScienceDaily (Smithsonian study, 2019)", url:"https://www.sciencedaily.com/releases/2019/09/190910134323.htm", fact:"Electric eels are knifefish; 860-volt discharge" },
      { day:"wed", t:"Potato — origins in the Andes", by:"Encyclopaedia Britannica", url:"https://www.britannica.com/plant/potato", fact:"Potatoes first farmed in the Andes" },
      { day:"wed", t:"A brief history of the potato", by:"Smithsonian Magazine", url:"https://www.smithsonianmag.com/arts-culture/a-brief-history-of-the-potato-54839408/", fact:"Andean potato domestication thousands of years ago" },
      { day:"fri", t:"First direct evidence of pre-Columbian sources of palygorskite for Maya Blue", by:"US Geological Survey", url:"https://www.usgs.gov/publications/first-direct-evidence-pre-columbian-sources-palygorskite-maya-blue", fact:"Maya Blue = indigo + palygorskite clay" }
    ],
    3:[
      { day:"mon", t:"Maya mathematics", by:"Mayan.org", url:"https://mayan.org/civilization/mathematics/", fact:"Base 20, dots, bars and the shell (zero)" },
      { day:"mon", t:"The Mayan numeral system", by:"LibreTexts Mathematics", url:"https://math.libretexts.org/Courses/Chabot_College/Math_in_Society_(Zhang)/03%3A_Historical_Counting_Systems/3.05%3A_The_Mayan_Numeral_System", fact:"Place value in twenties" },
      { day:"mon", t:"Yuri V. Knorozov (1922–1999)", by:"UNC Libraries exhibit", url:"https://exhibits.lib.unc.edu/exhibits/show/maya/decipherment/sistema-pisma-drevnikh-maiia", fact:"Knorozov and the syllabic decipherment" },
      { day:"mon", t:"Deciphering Maya glyphs", by:"Lumen Learning — World History", url:"https://courses.lumenlearning.com/worldhistory/chapter/11b-deciphering-maya-glyphs/", fact:"Landa, Knorozov, Proskouriakoff; the decipherment story" },
      { day:"tue", t:"Surficial geology of the Chicxulub impact crater", by:"NASA Technical Reports Server", url:"https://ntrs.nasa.gov/citations/19950048318", fact:"The cenote ring follows the buried crater rim" },
      { day:"tue", t:"Chichén Itzá's Sacred Cenote", by:"Historical MX", url:"https://historicalmx.org/items/show/18", fact:"Offerings in the Sacred Cenote" },
      { day:"tue", t:"Te Waikoropupū Springs", by:"Department of Conservation", url:"https://www.doc.govt.nz/parks-and-recreation/places-to-go/nelson-tasman/places/takaka-area/te-waikoropupu-springs/", fact:"Extremely clear spring water; wāhi tapu" }
    ],
    4:[
      { day:"mon", t:"Dresden Codex astronomy", by:"Mayan.org", url:"https://mayan.org/myths/dresden-codex-astronomy/", fact:"Venus tables in the Dresden Codex" },
      { day:"mon", t:"Dresden Codex Venus table reveals major discovery", by:"Sci.News", url:"https://www.sci.news/astronomy/dresden-codex-venus-table-discovery-04110.html", fact:"How accurately the Maya tracked Venus" },
      { day:"mon", t:"NASA assures us the world won't end on Friday", by:"Smithsonian Magazine", url:"https://www.smithsonianmag.com/smart-news/nasa-assures-us-the-world-wont-end-on-friday-165077465/", fact:"Scientists checked the 2012 claims" },
      { day:"mon", t:"K'inich Janaab' Pakal (Palenque future date)", by:"Wikipedia", url:"https://en.wikipedia.org/wiki/K%CA%BCinich_Janaab%CA%BC_Pakal", fact:"Palenque inscription projecting a date in 4772 CE" },
      { day:"mon", t:"Matariki public holiday", by:"MBIE (NZ Government)", url:"https://www.mbie.govt.nz/business-and-employment/employment-and-skills/employment-legislation-reviews/matariki/matariki-public-holiday/", fact:"Matariki public holiday since 2022" },
      { day:"tue", t:"Legal personality for maunga, awa and other natural features", by:"Community Law NZ", url:"https://communitylaw.org.nz/community-law-manual/chapter-2-maori-land/legal-personality-for-maunga-awa-and-other-natural-features-of-the-land/", fact:"Te Urewera Act 2014" },
      { day:"wed", t:"Mesoamericans made rubber 3,000 years ago", by:"MIT News", url:"https://news.mit.edu/1999/rubber-0714", fact:"Latex + morning-glory juice rubber" },
      { day:"wed", t:"Electricity: electrons, insulators and conductors", by:"Science Learning Hub (NZ)", url:"https://www.sciencelearn.org.nz/resources/2745-electricity-electrons-insulators-and-conductors", fact:"Why metals conduct" },
      { day:"thu", t:"Blink — built-in example", by:"Arduino Docs", url:"https://docs.arduino.cc/built-in-examples/basics/Blink", fact:"The Blink code; pin 13 built-in LED" },
      { day:"fri", t:"Toniná", by:"Wikipedia", url:"https://en.wikipedia.org/wiki/Tonin%C3%A1", fact:"Last known Long Count date (909 CE) — Seal IV" }
    ],
    5:[
      { day:"mon", t:"Laser scans reveal Maya ‘megalopolis’ below Guatemalan jungle", by:"National Geographic (2018)", url:"https://www.nationalgeographic.com/history/article/maya-laser-lidar-guatemala-pacunam", fact:"LiDAR found 60,000+ structures" },
      { day:"mon", t:"Laser scans reveal 60,000 hidden Maya structures", by:"Smithsonian Magazine", url:"https://www.smithsonianmag.com/smart-news/laser-scans-reveal-60000-hidden-maya-structures-guatemala-180968030/", fact:"LiDAR survey details" },
      { day:"mon", t:"Lost Maya city discovered by a student", by:"LiDAR News (2024)", url:"https://lidarnews.com/news/lost-mayan-city-discovered-by-student-during-google-search", fact:"‘Valeriana’ found in old survey data" },
      { day:"mon", t:"Temple of the Inscriptions", by:"Wikipedia", url:"https://en.wikipedia.org/wiki/Temple_of_the_Inscriptions", fact:"Alberto Ruz and Pakal's tomb (1952)" },
      { day:"mon", t:"Drought, agricultural adaptation, and sociopolitical collapse in the Maya Lowlands", by:"PNAS (via PubMed Central)", url:"https://pmc.ncbi.nlm.nih.gov/articles/PMC4426404", fact:"Lake-sediment evidence for drought" },
      { day:"mon", t:"Wairau Bar reburial of ancestors", by:"Te Ara", url:"https://teara.govt.nz/en/photograph/31751/wairau-bar-reburial-of-ancestors", fact:"Kōiwi returned to Rangitāne o Wairau" },
      { day:"tue", t:"Fishbone forest (Rondônia, Brazil)", by:"NASA Scientific Visualization Studio", url:"https://svs.gsfc.nasa.gov/11061", fact:"The fishbone clearing pattern from space" },
      { day:"tue", t:"Fires and deforestation on the Amazon frontier", by:"NASA Earth Observatory", url:"https://earthobservatory.nasa.gov/images/38782/fires-and-deforestation-on-the-amazon-frontier-rondonia-brazil", fact:"Causes of clearing in Rondônia" },
      { day:"tue", t:"More evidence backs Indigenous territories as best safeguard against Amazon deforestation", by:"Mongabay (2023)", url:"https://news.mongabay.com/2023/05/more-evidence-backs-indigenous-territories-as-best-safeguard-against-amazon-deforestation/", fact:"Indigenous lands have less clearing" },
      { day:"tue", t:"Deforestation of New Zealand", by:"Te Ara", url:"https://teara.govt.nz/en/interactive/11674/deforestation-of-new-zealand", fact:"How much NZ forest has been cleared" }
    ],
    6:[
      { day:"mon", t:"Tenochtitlan", by:"National Geographic Education", url:"https://education.nationalgeographic.org/resource/tenochtitlan", fact:"Founding c. 1325; chinampas; causeways" },
      { day:"mon", t:"The rise of the Aztecs", by:"Encyclopaedia Britannica", url:"https://www.britannica.com/place/Mexico/The-rise-of-the-Aztecs", fact:"Triple Alliance (1428) and empire" },
      { day:"mon", t:"Golden Kingdoms: ancient tributes (Codex Mendoza)", by:"The Metropolitan Museum of Art", url:"https://www.metmuseum.org/en/perspectives/golden-kingdoms-ancient-tributes", fact:"Tribute recorded in the Codex Mendoza" },
      { day:"mon", t:"Canoe navigation", by:"Te Ara", url:"https://teara.govt.nz/en/canoe-navigation/page-1", fact:"Waka voyaging; also Wednesday's navigation Hononga" },
      { day:"tue", t:"Groundwater pumping is causing Mexico City to sink", by:"Eos (AGU)", url:"https://eos.org/articles/groundwater-pumping-is-causing-mexico-city-to-sink", fact:"Subsidence rates and causes" },
      { day:"tue", t:"Axolotls are on the brink. Can we bring them back?", by:"Conservation International", url:"https://www.conservation.org/blog/axolotls-are-on-the-brink-can-we-bring-them-back", fact:"Axolotl status; Xochimilco refuges" },
      { day:"tue", t:"Liquefaction", by:"Science Learning Hub (NZ)", url:"https://www.sciencelearn.org.nz/resources/343-liquefaction", fact:"Christchurch liquefaction explained" },
      { day:"wed", t:"History of the compass (Olmec hematite bar)", by:"Wikipedia", url:"https://en.wikipedia.org/wiki/History_of_the_compass", fact:"The San Lorenzo bar and the debate" },
      { day:"wed", t:"Māori star compass", by:"Te Ara", url:"https://teara.govt.nz/en/diagram/2222/maori-star-compass", fact:"Navigating without a compass" }
    ],
    7:[
      { day:"mon", t:"The Tlatelolco market (Aztec Folio)", by:"UC San Diego — D. K. Jordan", url:"https://pages.ucsd.edu/~dkjordan/nahuatl/aztecfolio/AztecFolio03-Tlatel.html", fact:"Bernal Díaz's description; market judges" },
      { day:"mon", t:"Mexico's first tianguis: the story of Tlatelolco market", by:"Mexico News Daily", url:"https://mexiconewsdaily.com/culture/mexicos-first-tianguis-the-story-of-tlatelolco-market/", fact:"Market size and organisation" },
      { day:"tue", t:"Currency in the Place of Reeds", by:"Balagan.info", url:"https://balagan.info/currency-in-the-place-of-reeds", fact:"Cacao prices (turkey hen 100 beans, etc.); quachtli; counterfeit beans" },
      { day:"tue", t:"When money grew on trees", by:"Cornell University Library — Chocolate: Food of the Gods", url:"https://exhibits-container-int.library.cornell.edu/chocolate-food-of-the-gods/feature/when-money-grew-on-trees", fact:"Cacao as currency; the 1545 Tlaxcala price list" },
      { day:"tue", t:"Cocoa farmer income study (2025)", by:"Fairtrade International", url:"https://www.fairtrade.net/en/get-involved/library/cocoa-household-income-study-2025.html", fact:"Cacao farmers' incomes and fair trade" },
      { day:"wed", t:"Making an electromagnet", by:"Science Learning Hub (NZ)", url:"https://www.sciencelearn.org.nz/resources/2564-making-an-electromagnet", fact:"Coils, cores and current" },
      { day:"thu", t:"Drum (Teponaztli)", by:"The Metropolitan Museum of Art", url:"https://www.metmuseum.org/art/collection/search/312583", fact:"The teponaztli slit drum" },
      { day:"thu", t:"Slit drum (teponaztli)", by:"Smarthistory", url:"https://smarthistory.org/slit-drum-teponaztli", fact:"How the two tones are made" },
      { day:"fri", t:"Mosaic double-headed serpent", by:"The British Museum", url:"https://www.britishmuseum.org/collection/object/E_Am1894-634", fact:"Turquoise mosaic in the British Museum" },
      { day:"fri", t:"Aztec world — schools resource", by:"The British Museum", url:"https://www.britishmuseum.org/learn/schools/ages-7-11/americas/visit-resource-aztec-world", fact:"Aztec art and turquoise" }
    ],
    8:[
      { day:"mon", t:"Templo Mayor", by:"Wikipedia", url:"https://en.wikipedia.org/wiki/Templo_Mayor", fact:"Seven building stages; the 1978 Coyolxauhqui discovery; Matos Moctezuma's dig" },
      { day:"mon", t:"Aztec calendar stone (Sun Stone)", by:"Wikipedia", url:"https://en.wikipedia.org/wiki/Aztec_calendar_stone", fact:"Found in 1790 in the Zócalo" },
      { day:"tue", t:"Qhapaq Ñan, Andean Road System", by:"UNESCO World Heritage Centre", url:"https://whc.unesco.org/en/news/2000", fact:"The Inca road network" },
      { day:"tue", t:"Inca mathematics (quipu)", by:"MacTutor, University of St Andrews", url:"https://mathshistory.st-andrews.ac.uk/HistTopics/Inca_mathematics/", fact:"How quipu knots record numbers" },
      { day:"tue", t:"Polynesians, Native Americans made contact before European arrival", by:"Phys.org (2020)", url:"https://phys.org/news/2020-07-polynesians-native-americans-contact-european.html", fact:"Genetic contact traced to Colombia; the kūmara voyage" },
      { day:"wed", t:"Itaipu Dam", by:"Wikipedia", url:"https://en.wikipedia.org/wiki/Itaipu_Dam", fact:"14 GW, 20 generating units, Paraná River, Brazil/Paraguay" },
      { day:"wed", t:"Itaipu Dam", by:"Encyclopaedia Britannica", url:"https://www.britannica.com/topic/Itaipu-Dam", fact:"History and scale of the dam" },
      { day:"wed", t:"Hydro power", by:"Science Learning Hub (NZ)", url:"https://www.sciencelearn.org.nz/resources/1574-hydro-power", fact:"How NZ hydro stations generate electricity" },
      { day:"thu", t:"Chichén Itzá (equinox serpent)", by:"INAH", url:"https://lugares.inah.gob.mx/en/node/4335", fact:"El Castillo and the equinox light-and-shadow serpent" },
      { day:"thu", t:"Analog Input (built-in example)", by:"Arduino Docs", url:"https://docs.arduino.cc/built-in-examples/analog/AnalogInput", fact:"Reading a sensor on A0 (0–1023)" },
      { day:"fri", t:"Papel picado", by:"Wikipedia", url:"https://en.wikipedia.org/wiki/Papel_picado", fact:"History and making of papel picado" },
      { day:"fri", t:"Papel picado from San Salvador Huixcolotla", by:"México Desconocido", url:"https://www.mexicodesconocido.com.mx/papel-picado-huixcolotla.html", fact:"The Puebla town famous for papel picado" }
    ],
    9:[
      { day:"mon", t:"Fall of Tenochtitlan", by:"Wikipedia", url:"https://en.wikipedia.org/wiki/Fall_of_Tenochtitlan", fact:"1519–1521 events; allies; smallpox; 13 August 1521" },
      { day:"mon", t:"Competing narratives in the Florentine Codex", by:"Getty", url:"https://www.getty.edu/news/competing-narratives-about-the-conquest-of-mexico-and-the-fall-of-the-aztec-empire", fact:"Nahua accounts recorded with Sahagún" },
      { day:"mon", t:"A rare 500-year-old manuscript gets a second life online", by:"Getty", url:"https://www.getty.edu/news/a-rare-500-year-old-manuscript-gets-a-second-life-online", fact:"Read the Nahua account (Book 12)" },
      { day:"mon", t:"Bartolomé de las Casas", by:"World History Encyclopedia", url:"https://www.worldhistory.org/Bartolome_de_las_Casas/", fact:"The priest who defended Indigenous peoples" },
      { day:"mon", t:"European discovery of New Zealand", by:"Te Ara", url:"https://teara.govt.nz/en/european-discovery-of-new-zealand", fact:"Tasman 1642 and Cook 1769" },
      { day:"tue", t:"Atacama Desert", by:"Wikipedia", url:"https://en.wikipedia.org/wiki/Atacama_Desert", fact:"One of the driest places on Earth and why" },
      { day:"tue", t:"What is El Niño?", by:"NOAA Ocean Exploration", url:"https://oceanexplorer.noaa.gov/facts/elnino.html", fact:"Trade winds, warm water and the name" },
      { day:"tue", t:"El Niño and La Niña", by:"NIWA", url:"https://niwa.co.nz/climate-and-weather/el-nino-and-la-nina", fact:"Effects on New Zealand (drier east)" },
      { day:"tue", t:"Retreat of Andean glaciers foretells global water woes", by:"Yale Environment 360", url:"https://e360.yale.edu/features/retreat_of_andean_glaciers_foretells_global_water_woes", fact:"Glacier retreat and city water" },
      { day:"wed", t:"Reflection of light", by:"Science Learning Hub (NZ)", url:"https://www.sciencelearn.org.nz/resources/48-reflection-of-light", fact:"Angle of incidence = angle of reflection" },
      { day:"wed", t:"John Dee's ‘magic mirror’ came from the Aztecs", by:"National Geographic", url:"https://www.nationalgeographic.com/history/article/magic-mirror-elizabethan-court-mystical-aztec-origin", fact:"The 2021 study tracing the obsidian to Mexico" },
      { day:"fri", t:"The Maya huipil", by:"Lam Museum of Anthropology, Wake Forest University", url:"https://lammuseum.wfu.edu/2024/06/maya-huipil/", fact:"Huipiles, backstrap looms and identity" }
    ]
  };

  /* ---------- Extra sources so every lesson is backed (added Oct 2026) ---------- */
  const MORE = {
    1:[
      { day:"tue", t:"Introduction to latitude and longitude", by:"Smithsonian Ocean", url:"https://ocean.si.edu/educators-corner/introduction-latitude-and-longitude", fact:"How latitude and longitude lines work" },
      { day:"tue", t:"Tikal National Park", by:"UNESCO World Heritage Centre", url:"https://whc.unesco.org/en/list/64", fact:"Tikal's location in Guatemala's Petén rainforest" },
      { day:"thu", t:"Technological practice", by:"Technology Online (NZ Ministry of Education)", url:"https://technologyonline.tki.org.nz/Technology-in-the-NZC/Technological-practice", fact:"Briefs, stakeholders, specifications and evaluation" },
      { day:"thu", t:"Components and simple circuits", by:"Oak National Academy", url:"https://www.thenational.academy/teachers/programmes/science-primary-ks2/units/changing-circuits/lessons/components-and-simple-circuits", fact:"Cells, LEDs and a complete circuit" },
      { day:"fri", t:"Dresden Codex", by:"Encyclopaedia Britannica", url:"https://www.britannica.com/topic/Dresden-Codex", fact:"The Dresden Codex and its Venus tables" },
      { day:"fri", t:"Madrid Codex", by:"Encyclopaedia Britannica", url:"https://www.britannica.com/topic/Madrid-Codex", fact:"The longest surviving Maya codex" },
      { day:"fri", t:"Paris Codex", by:"Encyclopaedia Britannica", url:"https://www.britannica.com/topic/Paris-Codex", fact:"Rediscovered in Paris in 1859" },
      { day:"fri", t:"Grolier Codex ruled genuine", by:"The Conversation (2016)", url:"https://theconversation.com/grolier-codex-ruled-genuine-what-the-oldest-manuscript-to-survive-spanish-conquest-reveals-67941", fact:"The Maya Codex of Mexico (Grolier) confirmed authentic" }
    ],
    2:[
      { day:"thu", t:"Paper circuit", by:"Science Buddies", url:"https://www.sciencebuddies.org/stem-activities/paper-circuit", fact:"Copper tape, LED and coin-cell paper circuits" },
      { day:"thu", t:"SparkFun paper circuit kits", by:"SparkFun Learn", url:"https://learn.sparkfun.com/tutorials/sparkfun-paper-circuit-kits", fact:"LED polarity (+/−) and coin-cell safety" },
      { day:"fri", t:"Maya Blue: painting from the past in the present", by:"The British Museum (SDCELAR)", url:"https://www.sdcelarbritishmuseum.org/projects/maya-blue/", fact:"Maya Blue = indigo heated with palygorskite clay; very durable" },
      { day:"fri", t:"Maya blue", by:"CAMEO, Museum of Fine Arts Boston", url:"https://cameo.mfa.org/wiki/Maya_blue", fact:"Materials reference for the pigment" },
      { day:"fri", t:"Cochineal", by:"World History Encyclopedia", url:"https://www.worldhistory.org/Cochineal/", fact:"Cochineal red and its value to Spain" },
      { day:"fri", t:"Kōkōwai rock", by:"Te Ara — Encyclopedia of New Zealand", url:"https://teara.govt.nz/en/object/19113/kokowai-rock", fact:"Kōkōwai (red ochre) used by Māori" }
    ],
    3:[
      { day:"wed", t:"Circuit symbols and diagrams", by:"Oak National Academy", url:"https://www.thenational.academy/teachers/programmes/science-primary-ks2/units/changing-circuits/lessons/circuit-symbols-and-diagrams", fact:"Standard symbols for cells, bulbs, switches and wires" },
      { day:"wed", t:"Electrical circuits (Levels 3–4)", by:"Genesis Energy Schoolgen (NZ)", url:"https://media.genesisenergy.co.nz/school-gen/resources/level-3-4/electrical_circuits_level_3_4.pdf", fact:"Complete circuits, conductors and NZ-curriculum activities" },
      { day:"thu", t:"The position of switches: open and closed", by:"Oak National Academy", url:"https://www.thenational.academy/teachers/programmes/science-primary-ks2/units/changing-circuits/lessons/the-position-of-switches-open-and-closed", fact:"How a switch opens and closes a circuit" },
      { day:"fri", t:"Maya cycles of time: the Maya number system", by:"Mathematical Association of America (Convergence)", url:"https://old.maa.org/press/periodicals/convergence/maya-cycles-of-time-maya-number-system", fact:"Dot (1), bar (5), shell (0) numerals" },
      { day:"fri", t:"Maya numerals", by:"Wikipedia (starting point)", url:"https://en.wikipedia.org/wiki/Maya_numerals", fact:"Overview with examples" }
    ],
    4:[
      { day:"mon", t:"Dresden Codex", by:"Encyclopaedia Britannica", url:"https://www.britannica.com/topic/Dresden-Codex", fact:"Venus and eclipse tables in the Dresden Codex" },
      { day:"tue", t:"Te Urewera Act 2014", by:"New Zealand Legislation", url:"https://legislation.govt.nz/act/public/2014/51/en/latest/", fact:"Te Urewera recognised as a legal entity (legal personhood)" },
      { day:"thu", t:"Remote monitoring of traps", by:"Predator Free NZ Trust", url:"https://predatorfreenz.org/resources/recording-monitoring-options/remote-monitoring-traps/", fact:"Smart traps that send alerts" },
      { day:"thu", t:"Blink (first Arduino program)", by:"Arduino Docs", url:"https://docs.arduino.cc/tutorials/uno-rev3/Blink", fact:"setup(), loop() and digitalWrite" },
      { day:"fri", t:"Sun Stone", by:"World History Encyclopedia", url:"https://www.worldhistory.org/Sun_Stone/", fact:"The Aztec Sun Stone's radial design and size" },
      { day:"fri", t:"Maramataka — the lunar calendar", by:"Te Ara — Encyclopedia of New Zealand", url:"https://teara.govt.nz/en/maramataka-the-lunar-calendar", fact:"Māori moon calendar" },
      { day:"fri", t:"The Maramataka | Māori calendar", by:"Te Papa Tongarewa", url:"https://www.tepapa.govt.nz/maramataka", fact:"Maramataka as a cycle of nights" }
    ],
    5:[
      { day:"wed", t:"Comparing series and parallel circuits", by:"Oak National Academy", url:"https://www.thenational.academy/pupils/lessons/comparing-series-and-parallel-circuits", fact:"Series vs parallel brightness and broken bulbs" },
      { day:"wed", t:"Electrical circuits (Levels 3–4)", by:"Genesis Energy Schoolgen (NZ)", url:"https://media.genesisenergy.co.nz/school-gen/resources/level-3-4/electrical_circuits_level_3_4.pdf", fact:"Series and parallel activities for NZ classrooms" },
      { day:"thu", t:"Blink", by:"Arduino Docs", url:"https://docs.arduino.cc/tutorials/uno-rev3/Blink", fact:"Sequences and the repeating loop()" },
      { day:"thu", t:"New Zealand's first lighthouse lit", by:"NZHistory (Ministry for Culture and Heritage)", url:"https://nzhistory.govt.nz/page/new-zealands-first-lighthouse-lit", fact:"Pencarrow, 1859" },
      { day:"fri", t:"Lintel 24, Yaxchilan (museum record)", by:"The British Museum", url:"https://www.britishmuseum.org/collection/object/E_Am1923-Maud-4", fact:"A Maya relief portrait of royalty" },
      { day:"fri", t:"Maya: the Yaxchilán lintels", by:"Smarthistory", url:"https://smarthistory.org/maya-the-yaxchilan-lintels", fact:"Relief carving, profiles and headdresses" }
    ],
    6:[
      { day:"wed", t:"Knowledge of magnetism in pre-Columbian Mesoamerica", by:"Nature (V. Malmstrom, 1976)", url:"https://www.nature.com/articles/259390a0", fact:"The San Lorenzo hematite bar and the compass idea" },
      { day:"thu", t:"Button (built-in example)", by:"Arduino Docs", url:"https://docs.arduino.cc/built-in-examples/digital/Button", fact:"Reading a button with if/else" },
      { day:"thu", t:"Rāhui — prohibitions", by:"Te Ara — Encyclopedia of New Zealand", url:"https://teara.govt.nz/en/kaitiakitanga-guardianship-and-conservation/page-6", fact:"Rāhui to let resources recover" },
      { day:"fri", t:"Stamp (Aztec, baked clay)", by:"Detroit Institute of Arts", url:"https://www.dia.org/collection/stamp-33370", fact:"A real Aztec clay stamp (sello)" },
      { day:"fri", t:"Tapa: barkcloth art in the Pacific", by:"Te Papa Tongarewa", url:"https://tepapa.govt.nz/discover-collections/read-watch-play/tapa-barkcloth-art-in-the-pacific", fact:"Siapo and ngatu made with pattern boards" }
    ],
    7:[
      { day:"wed", t:"Comparing series and parallel circuits (Changing circuits unit)", by:"Oak National Academy", url:"https://www.thenational.academy/pupils/lessons/comparing-series-and-parallel-circuits", fact:"Background circuit knowledge for the coil" }
    ],
    8:[
      { day:"mon", t:"Museo del Templo Mayor", by:"INAH (Mexico's National Institute of Anthropology and History)", url:"https://lugares.inah.gob.mx/en/fut-cultura/6494", fact:"Twin shrines to Huitzilopochtli and Tláloc; the 1978–82 excavation" },
      { day:"mon", t:"Sun Stone", by:"World History Encyclopedia", url:"https://www.worldhistory.org/Sun_Stone/", fact:"The Sun Stone and the ages of the world" },
      { day:"fri", t:"Papel picado: Mexico's festive paper art", by:"Horniman Museum and Gardens", url:"https://www.horniman.ac.uk/story/papel-picado-mexicos-festive-paper-art/", fact:"How papel picado is made and used" }
    ],
    9:[
      { day:"mon", t:"Hernán Cortés (summary)", by:"Encyclopaedia Britannica", url:"https://www.britannica.com/summary/Hernan-Cortes", fact:"Key dates 1519–1521" },
      { day:"tue", t:"Atacama Desert (summary)", by:"Encyclopaedia Britannica", url:"https://www.britannica.com/summary/Atacama-Desert", fact:"Why the Atacama is so dry" },
      { day:"thu", t:"Technological practice", by:"Technology Online (NZ Ministry of Education)", url:"https://technologyonline.tki.org.nz/Technology-in-the-NZC/Technological-practice", fact:"Brief development, planning and evaluation" },
      { day:"thu", t:"Māori architecture — whare Māori", by:"Te Ara — Encyclopedia of New Zealand", url:"https://teara.govt.nz/en/maori-architecture-whare-maori", fact:"The wharenui and the people who build it" },
      { day:"fri", t:"Māori weaving and tukutuku — te raranga me te whatu", by:"Te Ara — Encyclopedia of New Zealand", url:"https://teara.govt.nz/en/maori-weaving-and-tukutuku-te-raranga-me-te-whatu", fact:"Raranga, korowai and patterns like poutama" },
      { day:"fri", t:"Pride and profit: why Mayan weavers fight for intellectual property rights", by:"The Christian Science Monitor (2019)", url:"https://www.csmonitor.com/World/Americas/2019/0327/Pride-and-profit-Why-Mayan-weavers-fight-for-intellectual-property-rights", fact:"Maya weavers protecting their designs" }
    ]
  };
  MORE[3].push({ day:"tue", t:"Golden Kingdoms: the Sacred Cenote, Chichén Itzá", by:"The Metropolitan Museum of Art", url:"https://www.metmuseum.org/perspectives/golden-kingdoms-sacred-cenote-chichen-itza", fact:"Offerings recovered from the Sacred Cenote" });
  MORE[5].push({ day:"mon", t:"Maya city with pyramids, plazas and a ballcourt discovered in Mexican jungle", by:"The Art Newspaper (2024)", url:"https://theartnewspaper.com/2024/10/30/maya-city-with-pyramids-plazas-and-a-ballcourt-discovered-in-mexican-jungle", fact:"‘Valeriana’ found in existing LiDAR survey data" });
  MORE[10] = [
    { day:"mon", t:"Mayan languages", by:"Wikipedia (starting point only)", url:"https://en.wikipedia.org/wiki/Mayan_languages", fact:"About 30 Mayan languages; 6 million or more speakers" },
    { day:"mon", t:"Nahuas (2020 census figures)", by:"Wikipedia (starting point only)", url:"https://en.wikipedia.org/wiki/Nahuas", fact:"1,651,958 Nahuatl speakers counted in Mexico's 2020 census" },
    { day:"mon", t:"From axolotls to airplanes: how Aztec word construction translates", by:"University of Colorado Boulder, Department of Linguistics", url:"https://www.colorado.edu/linguistics/2022/04/24/axolotls-airplanes-how-ancient-aztec-word-construction-translates-modern-world", fact:"English words from Nahuatl: chocolate, axolotl, coyote, tomato, chile, avocado" },
    { day:"mon", t:"Columbian Exchange", by:"World History Encyclopedia", url:"https://www.worldhistory.org/Columbian_Exchange", fact:"Maize, potatoes, tomatoes, chillies, cacao (to Spain 1528) and peanuts spread worldwide" },
    { day:"mon", t:"Our history (te reo Māori timeline)", by:"Te Māngai Pāho", url:"https://tmp.govt.nz/en/about/our-history/", fact:"First kōhanga reo 1982; Māori Language Act 1987" },
    { day:"tue", t:"UN Declaration on the Rights of Indigenous Peoples", by:"Te Puni Kōkiri (NZ Government)", url:"https://www.tpk.govt.nz/a-matou-whakaarotau/te-ao-maori/un-declaration-on-the-rights-of-indigenous-peoples", fact:"Adopted 13 September 2007; NZ support April 2010; 46 articles" },
    { day:"tue", t:"Feathered headdress (Aztec)", by:"Smarthistory", url:"https://smarthistory.org/feathered-headdress-aztec", fact:"In the Weltmuseum Wien; Mexico's requests; Austria says too fragile to travel" },
    { day:"tue", t:"Aztec headdress: Mexico's loan request denied", by:"ARTnews", url:"https://www.artnews.com/art-news/news/aztec-headdress-mexico-weltmuseum-wien-loan-request-denied-1234601661", fact:"The continuing debate over the headdress" },
    { day:"tue", t:"Karanga Aotearoa Repatriation Programme", by:"Te Papa Tongarewa", url:"https://tepapa.govt.nz/about/repatriation/karanga-aotearoa-repatriation-programme", fact:"850 ancestral remains returned from overseas, 2003–2024" },
    { day:"wed", t:"South America's lithium triangle", by:"CSIS (citing USGS 2021)", url:"https://www.csis.org/analysis/south-americas-lithium-triangle-opportunities-biden-administration", fact:"About 58% of the world's lithium resources are in Chile, Argentina and Bolivia" },
    { day:"wed", t:"Mineral Commodity Summaries 2026: Copper", by:"US Geological Survey", url:"https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-copper.pdf", fact:"Chile mined about 5.3 of 23 million tonnes of copper in 2025, the most of any country" },
    { day:"wed", t:"Lithium mining must not dry up the Atacama Desert", by:"NRDC", url:"https://www.nrdc.org/bio/amanda-maxwell/lithium-mining-must-not-dry-atacama-desert", fact:"About 2 million litres evaporated per tonne of lithium; Lickanantay communities' concerns" },
    { day:"wed", t:"The most intense sunlight on Earth can be found in the Atacama Desert", by:"Science News (2023)", url:"https://www.sciencenews.org/?p=3129901", fact:"Record solar radiation on the Atacama's Altiplano" },
    { day:"wed", t:"Energy in New Zealand 2026: Electricity", by:"Ministry of Business, Innovation & Employment", url:"https://www.mbie.govt.nz/building-and-energy/energy-and-natural-resources/energy-statistics-and-modelling/energy-publications-and-technical-papers/energy-in-new-zealand/energy-in-new-zealand-2026/electricity", fact:"88.5% of NZ electricity from renewables in 2025" },
    { day:"thu", t:"Technological practice", by:"Technology Online (NZ Ministry of Education)", url:"https://technologyonline.tki.org.nz/Technology-in-the-NZC/Technological-practice", fact:"Testing and evaluating outcomes against specifications; stakeholder feedback" },
    { day:"fri", t:"About Te Papa: what our name means", by:"Te Papa Tongarewa", url:"https://www.tepapa.govt.nz/node/583", fact:"Te Papa Tongarewa means ‘container of treasures’" }
  ];
  Object.keys(MORE).forEach(n => { FC.SOURCES[n] = (FC.SOURCES[n] || []).concat(MORE[n]); });

  /* What kind of source is it? Shown as a label so reviewers can judge reliability. */
  const KINDS = [
    [/(^|\.)wikipedia\.org$/, "Wikipedia (starting point only)"],
    [/britishmuseum\.org$|sdcelarbritishmuseum\.org$|metmuseum\.org$|getty\.edu$|lammuseum\.wfu\.edu$|horniman\.ac\.uk$|(^|\.)dia\.org$|tepapa\.govt\.nz$|cameo\.mfa\.org$|smarthistory\.org$/, "Museum"],
    [/britannica\.com$|worldhistory\.org$|teara\.govt\.nz$/, "Encyclopaedia"],
    [/niwa\.co\.nz$|inah\.gob\.mx$|\.govt\.nz$|unesco\.org$|noaa\.gov$|nasa\.gov$|usgs\.gov$|si\.edu$|tki\.org\.nz$/, "Government / official"],
    [/\.edu$|st-andrews\.ac\.uk$|nature\.com$|theconversation\.com$|maa\.org$|ncbi\.nlm\.nih\.gov$|pnas\.org$/, "University / academic"],
    [/arduino\.cc$|sciencelearn\.org\.nz$|thenational\.academy$|sciencebuddies\.org$|sparkfun\.com$|genesisenergy\.co\.nz$|predatorfreenz\.org$|fairtrade\.net$|conservation\.org$|libretexts\.org$|lumenlearning\.com$|nationalgeographic\.org$|communitylaw\.org\.nz$/, "Education / organisation"],
    [/nationalgeographic\.com$|phys\.org$|eos\.org$|mongabay\.com$|mexiconewsdaily\.com$|csmonitor\.com$|smithsonianmag\.com$|sciencedaily\.com$|yale\.edu$|mexicodesconocido\.com\.mx$|sci\.news$|theartnewspaper\.com$/, "News / science journalism"]
  ];
  FC.srcKind = url => { let host = ""; try { host = new URL(url).hostname.replace(/^www\./, ""); } catch(e){}
    for (const [re, k] of KINDS) if (re.test(host)) return k; return "Other website (cross-check)"; };
  const RANK = ["Museum","Government / official","University / academic","Encyclopaedia","Education / organisation","News / science journalism","Other website (cross-check)","Wikipedia (starting point only)"];
  FC.srcSorted = list => list.slice().sort((a, b) => RANK.indexOf(FC.srcKind(a.url)) - RANK.indexOf(FC.srcKind(b.url)));
  FC.srcHost = url => { try { return new URL(url).hostname.replace(/^www\./, ""); } catch(e){ return url; } };
  FC.srcForLesson = L => FC.srcSorted(((FC.SOURCES || {})[L.week] || []).filter(x => x.day === L.day || x.day === "all"));
})(window.FC);
