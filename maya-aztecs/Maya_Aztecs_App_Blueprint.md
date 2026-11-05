# 🌞 THE FIFTH CODEX
## An Expedition into the Maya & Aztec World
### Master Blueprint · Teacher Presentation App + Complete Term Programme
**Years 5–6 · Aotearoa New Zealand Curriculum · Christian Lens · 10 weeks × 5 subjects × 50-minute lessons**

> *Soli Deo Gloria — To God Alone the Glory*

---

## 📍 READ THIS FIRST — What this file is and what you need to decide

This is the **planning and mapping document**. No part of the app has been built yet. Once you approve it (or change it), this file becomes the build recipe: the app's lesson data, slides, lesson plans and rubrics all come from what is written here.

**What's in it**

| § | Section | What it gives you |
|---|---|---|
| 0 | Decisions for you | The choices I need you to make before building |
| 1 | The vision | What the term should feel like for students |
| 2 | The story world | Narrative, characters, teams, the weekly mystery |
| 3 | Curriculum framework | 2027 NZ curriculum mapping for every subject |
| 4 | Christian lens | How faith runs through the term without feeling bolted on |
| 5 | The 50-minute lesson | The fixed lesson shape, with the teacher scripting system |
| 6 | Student agency | The "Choose Your Path" project system |
| 7 | Assessment & rubrics | Developing / Achieved / Flying, with example work for each level |
| 8 | Ten-week overview | The whole term on one page |
| 9 | Full lesson programme | All 50 lessons, with Week 1 written out in full as the template |
| 10 | App design | Art direction, colour, type, motion, interactions |
| 11 | App architecture | Screens, presenter mode, data model, PDF export |
| 12 | Interactive slide library | Every JavaScript animation or interactive to be built |
| 13 | Arduino & circuits kit | Hardware options, the no-kit path, safety |
| 14 | Prep & resources | The one-off Term Kit plus the prep load for each lesson |
| 15 | ChatGPT image prompts | Style lock + the full image list |
| 16 | Build plan | Phases, review points, quality checks |
| 17 | Accuracy & sensitivity guardrails | Rules the builder must follow |

---

# 0. DECISIONS FOR YOU (please answer before Phase 1)

I've filled in a **recommended default** for each one, so if you're happy, just say "go with defaults".

| # | Decision | Recommended default | Why it matters |
|---|---|---|---|
| D1 | **App name** | **The Fifth Codex** (alternatives: *Codex of the Sun*, *Jade & Lightning*) | Only four genuine Maya books (codices) survive today. The story imagines a fifth one, so the name is grounded in real history. |
| D2 | **Geography framing** ⚠️ | **"Latin America: from Mesoamerica to South America"** | The Maya and Aztecs lived in **Mesoamerica** (Mexico and Central America), which is **not South America**. To keep your "Sth America" focus and still theme everything around the Maya and Aztecs, Sofía's expedition plane starts in Mexico and flies south over the term to the Andes, the Amazon and Patagonia. The Inca come in as the "cousin civilisation". |
| D3 | **Term length** | 10 weeks. Weeks 9–10 can be merged for a 9-week term (see §8). | 2027 term dates vary. |
| D4 | **Lesson length** | **50 minutes** (as you asked) | Every timing in this file uses 50 min. |
| D5 | **Thursday hardware** | **Two-track:** every Tech lesson works with *no kit* (in-app simulator + card, foil and LEDs). An **Arduino track** runs alongside for weeks 4–10 if you get kits (see §13). | You can start the term before any kits arrive. |
| D6 | **Student devices** | Not required. If students have Chromebooks or iPads, Tinkercad Circuits (free) is an optional extension in Tech. | The app is teacher-run only. |
| D7 | **Human sacrifice and the Conquest** | Told honestly at an age-appropriate level, with no gore and no images of violence (see §17). | Leaving it out entirely would hide the most important Christian-lens lesson of the term (Week 8, Micah 6). |
| D8 | **Teams** | 6 Expedition Teams named after rainforest animals (teacher can set 2–8) | Used for cacao-bean points and group tasks. |
| D9 | **End-of-term showcase** | A **Week 10 "Codex Comes Home" Exhibition** for whānau | Strong ERO evidence of community engagement and student voice. |
| D10 | **Folder and repo name** | The folder is **`maya&aztecs`**, as you asked. For GitHub, the repo should be **`mayaaztecs`** because `&` isn't allowed in repo names and breaks web addresses. | Avoids hosting problems later. |
| D11 | **Te reo Māori and local iwi connections** | Each week has a short **Hononga Aotearoa** (NZ connection) slide. Local content is flagged for checking with your school's Māori lead or local hapū (Ngāi Tahu / local rūnanga in Canterbury). | Culturally responsive practice without pan-Māori generalising. |

---

# 1. THE VISION

**Students aren't "doing a topic on the Maya and Aztecs". They are the expedition team that has been called in to save one.**

A storm has broken open a stone chamber in the rainforest of Petén, Guatemala. Inside is a folded bark-paper book: a **fifth Maya codex**, sealed into ten folios. A rival known only as **The Collector** wants it so he can sell it. Each week the class helps the field team **unseal one folio**. To do that they need everything they learn that week: history to read it, geography to find where it points, science and technology to protect and power the expedition, and art to restore and copy it.

**The emotional arc:** wonder → discovery → puzzles and setbacks (storms, power failures, a stolen map) → courage and teamwork → a moral choice (sell it, keep it, or give it back?) → the codex is returned to its people.

**The learning promise.** By Week 10 every child can:
- tell the story of the Maya and Aztecs from the Olmec to today, using evidence from more than one source and showing how different people saw the same events;
- read and use maps of Latin America, and explain its landforms, hazards, biomes, cities, trade and climate, with comparisons to Aotearoa;
- build, draw and explain simple circuits (series and parallel, conductors and insulators, switches, electromagnets), and explain how electricity is generated and used wisely;
- design, build, code and evaluate a working circuit project (paper circuits → Arduino);
- design and make art in Mesoamerican and Latin American traditions (glyphs, dyes, stamping, mosaic, papel picado, weaving), producing their own 10-page screenfold codex;
- talk with real understanding about how God's story meets this history: creation, the image of God, time, sacrifice, justice, repentance and every nation coming to worship.

**Design pillars**
1. **Mystery first.** Every lesson opens with a *Field Transmission* and ends by solving a *Glyph Clue*.
2. **Real learning, not decoration.** Every interactive teaches a concept a static slide can't.
3. **Student agency.** Every lesson has a *Choose Your Path* project with three options (see §6).
4. **Faith woven in.** The Christian lens comes out of the lesson content itself (see §4).
5. **Teacher-proof.** Anyone can pick it up and teach it, using the scripts, timings, prep lists and model answers.
6. **First-class beauty.** Layered cut-paper art, museum-quality typography, cinematic motion.

---

# 2. THE STORY WORLD

## 2.1 Opening premise (Week 1 opening cinematic, read aloud)
> *"Three nights ago, a tropical storm tore through the rainforest of northern Guatemala. When the rain stopped, Dr Itzel Canul's team found that a fallen ceiba tree had cracked open a hidden stone chamber. Inside, wrapped in rotted cloth, was a book: folded like a fan, painted on bark paper, sealed shut with ten wax-and-jade seals. Only four Maya books have survived the last 500 years. This could be the fifth. But the storm also took out the camp's power, the satellite link is failing, and someone calling himself 'The Collector' has already offered money to anyone who will steal it. Dr Canul needs a team who can think like historians, explorers, scientists, engineers and artists. She has chosen you."*

🟢/🟡 **Fact-or-Story badge.** Every slide carries a small badge: 🟢 **REAL EVIDENCE** (true history, science or geography) or 🟡 **EXPEDITION STORY** (our fiction). Teaching children to tell the difference is a critical-literacy goal in its own right, and ERO will see it. The Fifth Codex, the characters and the Collector are 🟡. Everything they *teach* is 🟢.

## 2.2 The field team (fictional guides — one "voice" per subject)
| Day | Guide | Who they are | Voice |
|---|---|---|---|
| **Mon · History** | **Dr Itzel Canul** | Guatemalan epigrapher (reader of glyphs), of Yucatec Maya heritage. Leader of the dig. | Calm, precise, proud of her ancestors, loves a good puzzle. "Evidence first, then the story." |
| **Tue · Geography & Social Science** | **Capt. Sofía Quispe** | Peruvian bush pilot of Quechua heritage. Flies the expedition's old floatplane *La Golondrina* (the Swallow). | Adventurous, practical, funny. Each week she flies the team further south. |
| **Wed · Science** & **Thu · Technology** | **Mateo Ríos** | Young engineer from Mexico City who keeps the camp's power, lights and security running. | Energetic, hands-on, a bit chaotic. "Let's test it!" |
| **Fri · Art** | **Doña Rosa Ajpop** | K'iche' Maya weaver and artist from Guatemala who restores old paintings. | Warm and wise. She teaches that making beautiful things is a gift and a responsibility. |
| *(Antagonist)* | **The Collector** | Never seen: only intercepted messages, a silver beetle seal, a shadow. | Smooth, tempting. He treats heritage as a price tag. |

Characters appear as **cut-paper portrait illustrations** (ChatGPT prompts in §15), never photos of real people.

## 2.3 Expedition Teams (default 6)
**Jaguar · Quetzal · Macaw · Tapir · Howler Monkey · Harpy Eagle** (optional extras: Ocelot, Axolotl). Each team has a cut-paper emblem and a colour.

## 2.4 Points: Cacao Beans 🫘
The Aztecs really did use cacao beans as money (🟢). Teams earn beans for thinking, teamwork, kindness, perseverance and quality work. **Points never come from the rubric levels.** Assessment and rewards are kept separate. A bean counter sits in the presenter toolbar and saves locally.

## 2.5 The weekly mystery mechanic: Glyph Clues → Folio Seal
- **Every lesson (Mon–Thu)** ends with a **Glyph Clue**: a short problem that uses the lesson's learning (e.g. a Maya-number sum, a map grid reference, "which circuit lights?", a code bug). The answer is a **number from 0–19** shown as a Maya numeral.
- **Friday (Art)** ends with the **Folio Seal**. The four week's clues are combined on a jade combination lock. When it opens, the folio unfolds (signature animation), the class sees what this page of the codex "says", and *La Golondrina* moves on the term map.
- **The Collector's Intercept** (Fri, 2 min): a message that raises a real ethical question for next week (e.g. "Museums are full of treasures from other countries. Why shouldn't I sell this one?").

## 2.6 Story beats across the term
| Wk | Folio | Story beat | Collector |
|---|---|---|---|
| 1 | I · *The Seal Breaks* | The chamber is found and the team assembled. Power is down after a lightning storm. | First offer: "Name your price." |
| 2 | II · *Children of Maize* | The first folio shows a maize field. Emergency batteries are needed. | Fake "buyer's certificate" appears. |
| 3 | III · *The Scribe's Secret* | The glyphs reveal a scribe's name. The class learns to read numbers. | He tries to buy the scribe's name. |
| 4 | IV · *Keepers of Time* | A date is hidden in the folio. Material choice protects the codex from damp. | Claims the date "proves the world will end". |
| 5 | V · *The Silent Cities* | The folio points to an abandoned city. LiDAR scan reveals it. | Looters reach the city first. |
| 6 | VI · *The Eagle on the Cactus* | The trail crosses to Aztec lands. The compass is lost. | He steals the map. |
| 7 | VII · *The Great Market* | A trade record is decoded. An electromagnet lifts the stone lid. | Offers the class a "share". |
| 8 | VIII · *The Fifth Sun* | A sun-stone riddle. The river generator powers the camp. | "The old gods demanded blood. Gold is easier." |
| 9 | IX · *Meeting of Worlds* | Two accounts of 1519. Mirrors light the dark chamber. | Exposed: he's been forging documents. |
| 10 | X · *The Codex Comes Home* | The class decides the codex's future, and it is returned to a Maya community museum. | Defeated. Not by force, but by the truth told publicly. |

---

# 3. NZ CURRICULUM FRAMEWORK (2027)

> ⚠️ **Important context for 2027 (checked October 2026).** For Years 0–8, the **new Science and Social Sciences curriculum content must be taught from 2027** (schools may phase implementation across 2027–2028). **Technology and The Arts** don't move to the new content until **2029**, so those subjects map to *The New Zealand Curriculum* (2007), Level 3, with the new draft content as optional. **Before printing for ERO, the builder will check wording against Tāhūrangi** (tahurangi.education.govt.nz), because the Ministry's year-level pages are still under review.

## 3.1 Why a Maya & Aztec context still meets the 2027 Social Sciences content
The new Years 4–6 Social Sciences content names specific contexts (e.g. Year 5 history: the Mt Tarawera eruption and dynastic China; Year 6 history: NZ to 1840 and the Elizabethan and Victorian ages). **Maya and Aztecs is a school-chosen context.** This programme therefore:
1. teaches the **same knowledge lenses** the new curriculum applies to ancient China (farming, government, daily life, trade, religion, writing; comparing societies; change over time; using primary sources);
2. **directly covers the required Geography and Economic Activity content** that fits Latin America (see table);
3. shows on every lesson plan a **"Required-content coverage"** line, so a reviewer can see what is delivered here and what the school delivers in other terms.

| 2027 required content (Years 4–6 band, per year-level guide) | Where it's covered in The Fifth Codex |
|---|---|
| **Y5 Geography:** tectonic hazards (earthquakes, volcanoes, tsunami) | Tue W2 (Ring of Fire, 1960 Chile earthquake & tsunami that reached NZ) |
| **Y5 Geography:** temperate & tropical rainforest biomes; compare NZ temperate rainforest | Tue W4 |
| **Y5 Geography:** deforestation and its effects on environments and Indigenous peoples | Tue W5 |
| **Y5 Economic Activity:** changes in exchange (barter → currency → electronic); trade routes | Tue W7 (Aztec cacao money & markets → today) |
| **Y5 History:** an ancient civilisation through farming, government, daily life, trade, religion, writing; comparing societies | Mon W2–W8 use exactly these lenses |
| **Y5 Civics:** purpose of laws and rules | Mon W7 (market judges, Aztec law); Tue W10 |
| **Y6 Geography:** urbanisation & informal settlements | Tue W6 (Tenochtitlan → Mexico City; informal settlements) |
| **Y6 Geography:** climate patterns; greenhouse gases; mitigation & adaptation | Tue W9 (El Niño, Andes glaciers) |
| **Y6 Geography:** regional study with a country case study (SE Asia is named; method transferable) | Tue W8 (Andes region, Peru case study). *Flag: SE Asia itself must be taught in another term.* |
| **Y6 Civics:** rights & responsibilities; international agreements (UN declarations); develop a campaign | Tue W10 (UNDRIP, heritage rights, class campaign) |
| **Y6 Economic Activity:** specialisation and exchange | Tue W7 |
| **Y6 Science:** simple circuits: energy source + output device in a closed loop; metal wires conduct | Wed W3–W5, Thu W1–W10 |
| **Y6 Science:** light: reflection & refraction | Wed W9 |
| **Y6 Science:** rocks and minerals | Wed W4 (obsidian, jade, copper ore as materials) |
| **Y5 Science:** non-contact forces incl. magnetism; magnets attract some metals, not all | Wed W6–W7 |
| **Y5 Science:** Earth/Moon/Sun, seasons, maramataka | Mon W4 (Maya astronomy vs maramataka); Wed W9 |

## 3.2 Code key (used on every lesson plan)
**Social Sciences (2027, Years 4–6)**
- **SS-H** History: understanding the past through sources, perspectives, cause & consequence, continuity & change.
- **SS-G** Geography: places, environments, hazards, biomes, urbanisation, climate; maps, graphs, aerial images.
- **SS-C** Civics & Society: rules, laws, rights & responsibilities, decision-making.
- **SS-E** Economic Activity: exchange, trade, money, specialisation.
- **SS-P** Practices: asking questions, using primary & secondary sources, comparing, explaining change over time, respectful debate, communicating findings.

**Science (2027, Years 4–6)**
- **SC-MIE** Matter, interactions & energy (circuits, conductors, light, energy sources).
- **SC-MF** Motion & forces (magnetism, non-contact forces).
- **SC-ES** Earth systems / Earth & Space (rocks & minerals, Sun & seasons).
- **SC-P** Science practices: questioning, fair testing, observing, measuring, recording, explaining with evidence, using scientific vocabulary & diagrams.

**Technology (NZC 2007, Level 3 → 2029 transition)**
- **TE-TP** Technological Practice: planning for practice; brief development; outcome development & evaluation.
- **TE-TK** Technological Knowledge: technological modelling; products; systems (inputs, process, outputs).
- **TE-NT** Nature of Technology: characteristics of technology; technology & society.
- **DT-CT** Digital Technologies — Computational Thinking (Progress Outcomes 1–2): algorithms, sequence/selection/loops, debugging.
- **DT-DD** Designing & Developing Digital Outcomes.

**The Arts — Visual Arts (NZC 2007, Level 3)**
- **VA-UC** Understanding the arts in context: the purpose and context of art from past and present cultures.
- **VA-PK** Developing practical knowledge: art-making conventions, techniques, materials.
- **VA-DI** Developing ideas: from observation, imagination and the study of artists' work.
- **VA-CI** Communicating & interpreting: sharing and responding to art.

**Cross-curricular:** **EN** English (oral language, reading, writing) · **MA** Maths (Maya base-20, measurement, data, symmetry) · **RE** Christian Character / Bible.
**Key Competencies:** Thinking · Using language, symbols & texts · Managing self · Relating to others · Participating & contributing.
**Te Tiriti / culturally responsive:** a Hononga Aotearoa link in every week; Māori and Pacific learners see their own knowledge valued (maramataka, kūmara voyaging, pounamu, kaitiakitanga, repatriation).

---

# 4. THE CHRISTIAN LENS — "Through the Lens"

## 4.1 The principle
The lens is **found in the content, not attached to it.** Every week's history, geography, science, technology and art raises real questions about God, people and the world, and the lens is how the class thinks those questions through. A test for the builder: *if you took the Bible part out, would the lesson lose something it needs?* If it wouldn't, it isn't good enough yet.

## 4.2 Built on the school vision
Each lesson's lens moment chooses the **one pillar that fits best**, so the pillars feel natural and never forced. All four come up evenly across the term.

| Pillar | Icon | What it looks like in this term |
|---|---|---|
| **Aroha — Love: God, Others, Self, World** | ❤️ | Every person is made in God's image (Maya, Aztec, Spanish, us). We look after creation (rainforests, rivers, energy). |
| **Mōhio — Know: God, His story and our place in it** | 📜 | God is Lord of every nation and of time. Scripture is read alongside the evidence. We are honest about history, including when Christians did wrong. |
| **Manaaki — Serve: faithfully with our gifts and talents** | 🤲 | Scribes, engineers, weavers, farmers: gifts used to bless others. Fair trade, generosity, using our skills for others. |
| **Pānga — Impact: bringing God's Kingdom to earth** | 🌱 | Justice for Indigenous peoples, returning taonga, standing for the truth, "let your light shine". |
| **Soli Deo Gloria** | ✨ | The term ends with the codex returned. We seek glory for God, not for ourselves or for gold, in contrast to the Collector. |

## 4.3 The four moves (7 minutes, scripted)
1. **LOOK CLOSER** — a detail from today's learning (an artefact, a map, a circuit) is shown again.
2. **OPEN THE WORD** — a short passage (a kid-friendly paraphrase on screen, plus the reference so you can read it from your own Bible).
3. **TALK IT THROUGH** — two discussion questions with model answers and "listen for" notes for the teacher.
4. **LIVE IT OUT** — one concrete response (a sentence in the journal, a prayer, a class decision, an act of service).

**Placement:** the default is minutes 38–45, but the app flags lessons where the lens works best elsewhere (e.g. as the hook), and the teacher can drag the slide.

## 4.4 Term-long threads
- **The Creator of all peoples** (Acts 17:24–27; Gen 1:27) → every civilisation is made up of image-bearers.
- **The Word that lasts** (Isa 40:8; John 1:1–5) → codices burned, but God's Word endures. Today the Bible is translated into many Mayan languages and Nahuatl.
- **Time belongs to God** (Ps 90:12; Gen 1:14; Matt 24:36) → the Maya were brilliant timekeepers. We trust instead of fear.
- **The God who gives instead of takes** (Acts 17:25; Micah 6:6–8; Heb 10:10) → the Aztecs believed the Sun had to be fed. The God of the Bible gives life and breath and gave Himself.
- **Light and power** (Gen 1:3; John 8:12; Col 1:17; Matt 5:14–16) → the science thread: the Source, staying connected, letting light shine.
- **Justice and repentance** (Mic 6:8; 1 John 1:9) → the Conquest: Bartolomé de las Casas spoke up and Bernardino de Sahagún preserved Nahua knowledge, while Diego de Landa burned the books.
- **Every nation, tribe and language** (Rev 7:9) → the finale.

## 4.5 Science and technology analogies: the rule
Spiritual analogies (e.g. "a circuit only works when it's connected to the source", John 15:5) are **labelled as analogies** ("This is a picture, not a proof"). Each one comes with a **"Where the picture breaks"** prompt, so children learn to think carefully rather than swallow a cute comparison.

---

# 5. THE 50-MINUTE LESSON

## 5.1 Fixed shape (every Mon–Fri lesson)
| Min | Phase | Purpose | Slides |
|---|---|---|---|
| **0–6** | 🛰️ **Field Transmission** | Story hook from the guide · 3-question **Glyph Check** retrieval · Learning Intention & Success Criteria | 3–4 |
| **6–18** | ⛏️ **Excavate** | Teacher-led input through interactive slides, modelling, "turn & talk" | 4–7 |
| **18–38** | 🧭 **Choose Your Path** | Students choose **Path A, B or C** to show their understanding (see §6) · teacher roams with the rubric | 1–2 (+ timer) |
| **38–45** | 🔍 **Through the Lens** | Christian lens, 4 moves (§4.3) | 2 |
| **45–50** | 🗝️ **Decode & Exit** | Glyph Clue solved · quick self-assessment against the success criteria (thumbs / fist-to-five on the Developing–Achieved–Flying scale) · cacao beans | 2 |

**Friday version:** Art runs the same shape, but Decode becomes the **Folio Seal** (all the week's clues combined) plus the **Collector's Intercept**. The Path time is extended to 22 minutes, and the lens becomes a 5-minute gallery reflection.

## 5.2 The teacher scripting system (for someone who has never taught)
Every slide has presenter notes using these markers:

| Marker | Meaning |
|---|---|
| 🗣️ **SAY** | Words to read aloud (or put in your own words). |
| ❓ **ASK** | A question to pose, with **wait time** ⏳ ("count to 5 silently"). |
| 👂 **LISTEN FOR** | What a good answer includes. |
| ↪️ **IF THEY SAY…** | Common misconceptions and how to respond. |
| 🖱️ **CLICK** | When to run the animation or interactive, and what to point at. |
| 🤝 **TURN & TALK** | Partner discussion (30–60 s), plus how to bring the class back. |
| ⭐ **DEEPER** | A challenge question for quick thinkers. |
| 🧘 **PACE** | A timing check ("By now you should be at minute 18"). |

**Example (Mon W1, slide 6):**
> 🗣️ **SAY:** "Historians are a bit like detectives. They can't go back in time, so they look at *sources*: things left behind from the past."
> ❓ **ASK:** "If someone 500 years from now wanted to know about *our* class, what could they look at?" ⏳ 5 s
> 👂 **LISTEN FOR:** objects (books, chairs), writing (journals, emails), pictures, buildings, people's memories.
> ↪️ **IF THEY SAY** "Google": "Great! Is everything on the internet true? How would a historian check?"
> 🖱️ **CLICK:** the *Source Sorter* — drag each item into OBJECT · WRITING · PICTURE · MEMORY.

## 5.3 Classroom routines built into the app
- **Expedition Protocol** (shown Week 1, then on the toolbar): Respect the site (people & materials) · Evidence before opinion · Everyone's voice · Leave it better than you found it.
- **Timer** (Path time), **Random Team/Name Picker** (optional class list, stored only on the device), **Cacao counter**, a **Calm screen** (for transitions).

---

# 6. STUDENT AGENCY — "Choose Your Path"

## 6.1 How it works
Every lesson offers **three paths** that show the *same* learning intention in different ways. Students choose (with teacher guidance). Each path:
- has a **clear product** (what you'll make),
- has **3 steps** on screen (what to do),
- is assessed against the **same lesson rubric** (§7), so choice never lowers expectations,
- has a **Supported** version (sentence starters, templates, word bank) and a **Flying Challenge** (an extension question).

| Path | Style | Example products |
|---|---|---|
| **A · The Scribe** | Writing & recording | Field report, diary entry, labelled diagram, explanation, letter |
| **B · The Builder** | Making & modelling | Model, map, timeline, circuit, poster, diorama, craft |
| **C · The Messenger** | Speaking & performing | Radio bulletin, role-play, teach-back, debate, news report, podcast |

Some lessons use topic-specific paths (e.g. Tech has *Design · Build · Test* roles). The app shows the paths on a **"Path Board"** slide that students can see while they work, with a big countdown timer.

## 6.2 Term-long Big Projects (summative, chosen in Week 6)
Each subject has one Big Project, built in Weeks 7–10 and shown at the Week 10 Exhibition:
- **History:** *Museum Case.* Curate one artefact display (a model or drawing, a label, a "how do we know?" card, two perspectives).
- **Geography:** *Expedition Atlas page* or *Campaign* (rights of Indigenous peoples / rainforest protection).
- **Science:** *My Fair Test.* An investigation the student designs themselves on an electricity question.
- **Technology:** *Temple of Light.* A designed, built and (optionally) coded interactive diorama.
- **Art:** *My Codex.* A 10-page screenfold book (one page made each Friday) plus an artist statement.

**Agency in the Big Projects:** students choose their artefact, question, design or theme, set a personal goal in Week 6, and check in on it each week.

---

# 7. ASSESSMENT & RUBRICS — Developing · Achieved · Flying

## 7.1 The three levels
| Level | Badge | Meaning | Curriculum meaning |
|---|---|---|---|
| **Developing** | 🌱 (seed) | On the way: shows some of the learning with support | Working towards the expected curriculum level/year |
| **Achieved** | 🌽 (maize) | Shows the learning intention securely and independently | Working at the expected level for Years 5–6 |
| **Flying** | 🦅 (eagle) | Goes beyond: explains why, connects, applies to new contexts, evaluates | Working beyond the expected level |

*(The maize and eagle are drawn from the topic itself: the Maya "children of maize" and the Aztec eagle.)*

## 7.2 How rubrics are built (every lesson, every subject)
- Each **success criterion** becomes a **rubric row**. There are usually 2–3 rows.
- Each cell has a **"Looks like…"** descriptor plus a **real example of student work** written at that level (a quote, a described sketch, a described circuit).
- The rubric row names its **curriculum code** (e.g. SS-P, SC-MIE).
- The app has a **Quick-Mark mode**: tap a level for each student or team per row. Results are stored on the device only and exported as CSV or PDF for the teacher's records. No student logins.

## 7.3 Subject "core" rubrics (term-level, used for the Big Projects and end-of-term reporting)

### HISTORY core rubric (SS-H, SS-P)
| Criterion | 🌱 Developing | 🌽 Achieved | 🦅 Flying |
|---|---|---|---|
| **Using sources** | Names a source. *e.g. "We know because of the pyramids."* | Says what a source tells us and what kind it is. *e.g. "The Dresden Codex is a primary source: a Maya book that shows they tracked Venus."* | Compares sources and judges their reliability. *e.g. "The Spanish accounts were written by the winners, so I'd check them against the Florentine Codex, which Nahua people helped write."* |
| **Explaining cause & consequence** | Retells what happened. *e.g. "The Maya left their cities."* | Explains a cause and a consequence. *e.g. "Long droughts meant crops failed, so people moved away."* | Weighs several causes, or links to today. *e.g. "Drought was probably the trigger, but war and cutting down forests made it worse. Countries face the same mix today."* |
| **Perspectives** | Gives one point of view. | Describes two different perspectives on an event. | Explains *why* people saw it differently and what that means for the truth. |

### GEOGRAPHY / SOCIAL SCIENCE core rubric (SS-G, SS-E, SS-C, SS-P)
| Criterion | 🌱 Developing | 🌽 Achieved | 🦅 Flying |
|---|---|---|---|
| **Using maps & data** | Finds a place on a map with help. | Uses a compass, grid reference, key and scale to locate and describe places. *e.g. "Lake Titicaca is at grid D7, on the border of Peru and Bolivia, high in the Andes."* | Interprets patterns across maps or graphs. *e.g. "The cities follow the coast and rivers because inland is mountain or rainforest."* |
| **Explaining people & environments** | Describes a place. *e.g. "The Amazon has lots of trees."* | Explains how people and environments affect each other. *e.g. "Farmers clear the rainforest for cattle, which removes habitats and threatens the Indigenous peoples who live there."* | Compares with NZ and suggests responses. *e.g. "Like our kauri forests, it's a taonga. Protected areas and Indigenous guardianship (kaitiakitanga) reduce clearing."* |
| **Taking action / perspectives** | Gives an opinion. | Gives an opinion with reasons and recognises another view. | Builds a reasoned case for action that is fair to different groups. |

### SCIENCE core rubric (SC-MIE, SC-MF, SC-P)
| Criterion | 🌱 Developing | 🌽 Achieved | 🦅 Flying |
|---|---|---|---|
| **Scientific understanding** | Names parts. *e.g. "You need a battery and a bulb."* | Explains using a scientific idea. *e.g. "The bulb only lights when the circuit is a closed loop, because the current needs a complete path from the battery and back."* | Predicts and explains new situations. *e.g. "If I add a second bulb in series, both will be dimmer because the same battery is pushing the current through more resistance."* |
| **Investigating (fair test)** | Does a test with help. | Changes one variable, keeps others the same, records results. | Explains why it's fair, identifies weaknesses and suggests improvements. |
| **Communicating** | Uses everyday words, simple drawings. | Uses correct vocabulary and standard circuit symbols. | Uses diagrams and vocabulary precisely to teach someone else. |

### TECHNOLOGY core rubric (TE-TP, TE-TK, DT-CT)
| Criterion | 🌱 Developing | 🌽 Achieved | 🦅 Flying |
|---|---|---|---|
| **Design & planning** | Has an idea. | Writes a brief with a need and 2–3 specifications, and sketches a labelled plan. | Justifies design choices against the specifications and the stakeholder's needs. |
| **Building & systems** | Builds with help; some parts work. | Builds a working outcome; can explain its input → process → output. | Improves the outcome after testing; explains how the parts of the system interact. |
| **Algorithms & debugging** | Follows steps given. | Writes or orders a sequence with a loop or decision; finds and fixes a bug. | Writes efficient code and explains how they debugged it methodically. |
| **Evaluation** | Says if it worked. | Evaluates against each specification. | Gets stakeholder feedback and plans the next version. |

### VISUAL ART core rubric (VA-UC, VA-PK, VA-DI, VA-CI)
| Criterion | 🌱 Developing | 🌽 Achieved | 🦅 Flying |
|---|---|---|---|
| **Context** | Names the culture the art comes from. | Explains the purpose of the art form (e.g. glyphs recorded kings and dates). | Compares it with another tradition and explains its meaning, respectfully. |
| **Technique** | Uses the materials with help. | Uses the technique carefully (e.g. even dye wash, clean symmetrical cut, controlled shading). | Combines techniques skilfully; refines through trial. |
| **Ideas** | Copies an example. | Develops their own design from the studied examples. | Creates an original, meaningful design that shows influence without copying. |
| **Reflecting** | Says what they like. | Uses art words to describe their work and others'. | Gives specific, kind feedback and explains their artistic choices. |

## 7.4 Formative evidence each week
Glyph Check retrieval (mini-whiteboards) · Path products (photograph them with the app's "Evidence" reminder) · Quick-Mark data · Exit self-assessment · teacher observation notes · Expedition Journal.

**Pre/post:** Week 1 "What do I already know?" glyph wall and circuit concept cartoon → repeated in Week 10 to show progress.

## 7.5 Differentiation (on every lesson plan)
**Supported:** sentence starters, word banks, partially completed templates, partner pairing, read-aloud slides. **ESOL:** visuals for every key word, glossary, oral rehearsal before writing, home languages welcome (Spanish speakers can shine!). **Neurodiverse / learning support:** chunked checklists, a choice of response mode, movement breaks, a calm-screen option, no timed-only tasks. **Flying Challenge:** an open extension question on every path.

## 7.6 PDF export (lesson plans + rubrics)
- Every lesson has **"📄 Lesson Plan PDF"** and **"📄 Rubric PDF"** buttons, plus **"📄 Week Pack"** (all 5 plans + rubrics) and **"📄 Unit Plan"** (the whole term overview, curriculum map and core rubrics).
- **How:** a dedicated A4 print layout (`@media print`) that is clean, ink-light and ERO-ready, with the school name, class, teacher and date. The default is the browser's **Save as PDF** (most reliable, vector-sharp). A one-click **direct download** uses `html2pdf.js` (from cdnjs) as a secondary option.
- Rubric PDFs come in two versions: **Teacher** (with examples and curriculum codes) and **Student** (simplified "I can…" language, three boxes to tick, plus a space for a teacher comment).

---

# 8. TEN-WEEK OVERVIEW

| Wk | Folio | **Mon** History | **Tue** Geography / Social Science | **Wed** Science (Electricity) | **Thu** Technology (Circuits) | **Fri** Art | Lens pillar & key text |
|---|---|---|---|---|---|---|---|
| 1 | I · The Seal Breaks | Who were the Maya & Aztecs? Time, place & sources | Where in the world? Maps, hemispheres, Mesoamerica vs South America | What is electricity? Static & lightning | Think like an engineer: the brief & the Jaguar-Eye torch | Glyph sketching & making the codex book | 📜 Mōhio · Acts 17:24–27 |
| 2 | II · Children of Maize | Olmec to Maya: maize, farming & the first cities | Land of fire & stone: the Ring of Fire & the 1960 tsunami | Electric life: eels, nerves & batteries (potato battery) | Paper circuits: light-up glyph cards | Dyes & colour: staining codex pages; the Maya Blue mystery | ❤️ Aroha · Ps 65:9–13; Gen 2:7 |
| 3 | III · The Scribe's Secret | Writing & numbers: glyphs, base 20 & the decipherment mystery | Water beneath stone: Yucatán cenotes & the Chicxulub crater | The complete loop: circuits & symbols | Switches: the pressure-plate temple trap | Number art: dot-bar-shell pattern design | 📜 Mōhio · Isa 40:8; John 1:1–5 |
| 4 | IV · Keepers of Time | Calendars & astronomy: Tzolk'in, Haab', Long Count & the 2012 myth | Rainforest biomes: Petén & the Amazon vs Te Waipounamu forests | Conductors & insulators: the gift of rubber | Meet the microcontroller: "Heartbeat of the Temple" | Calendar wheels: rotating card design | 📜 Mōhio · Ps 90:12; Matt 24:36 |
| 5 | V · The Silent Cities | City-states & kings: Tikal, Calakmul, Pakal & the Classic collapse | Deforestation & Indigenous peoples | Series & parallel circuits | Sequences & loops: the calendar light code | Portraits of kings: relief profile & tonal shading | 🌱 Pānga · Gen 2:15; Ps 127:1 |
| 6 | VI · The Eagle on the Cactus | Rise of the Aztecs: migration, Tenochtitlan & the Triple Alliance | Cities on a lake: urbanisation, Mexico City sinking, informal settlements | Magnetism & the Olmec "compass" mystery | Inputs & decisions: the secret door code | Aztec geometric design & card stamping | 📜 Mōhio · Matt 7:24–27 |
| 7 | VII · The Great Market | Daily life in Tenochtitlan: school, family, law & the market | Trade & exchange: cacao money → electronic payments; fair trade | Electromagnets | Sound: the teponaztli drum code (piezo) | Mosaic masks: torn-paper turquoise mosaic | 🤲 Manaaki · Prov 11:1; 2 Cor 9:7 |
| 8 | VIII · The Fifth Sun | Beliefs & the Fifth Sun: temples, the Templo Mayor & sacrifice | The Andes & the Inca: altitude, terraces, roads; the kūmara voyage | Generating electricity: motors, generators & Itaipú | Sensors: the equinox sunrise detector (LDR) | Papel picado: fold-and-cut paper | 📜 Mōhio · Micah 6:6–8; Acts 17:25 |
| 9 | IX · Meeting of Worlds | 1519–1521: two accounts of the Conquest | Climate patterns: El Niño, Atacama to Amazon, retreating glaciers | Light: reflection, shadows & obsidian mirrors | Temple of Light: design & build | Woven worlds: huipil motifs & paper weaving | ❤️ Aroha · Gen 1:27; Micah 6:8; 1 John 1:9 |
| 10 | X · The Codex Comes Home | Living legacy: Maya & Nahua peoples today; what they gave the world | Rights & taonga: UNDRIP, repatriation & the class campaign | Powering the future: solar, lithium, copper & stewardship + Fair Test Expo | Temple of Light: test, evaluate & showcase | Completing My Codex & the Exhibition | ✨ Soli Deo Gloria · Rev 7:9; Matt 5:14–16 |

**For a 9-week term:** merge Wk 9 Tue into Wk 8 Tue (climate as a 10-min Excavate segment), merge Wk 9 and Wk 10 Tech (Temple of Light build, then showcase), drop Wk 9 Art (weaving), and run the Exhibition in Wk 9.

---

# 9. THE COMPLETE PROGRAMME

> **Format note for the builder.** Week 1 is written out **in full** as the gold-standard template (scripts, paths, rubric with examples, lens). Weeks 2–10 are written as **Lesson Cards** with all the essential content (LI, SC, hook, key knowledge, interactive, paths, lens, clue, prep). During the build, each card is expanded to Week 1's depth, using Week 1 as the pattern, and the expanded weeks are shown to the teacher for review.

---

## ⭐ WEEK 1 — FOLIO I · THE SEAL BREAKS
**Story:** the chamber is found and the team chosen. Lightning has knocked out the camp's power.
**Hononga Aotearoa:** how do Māori record and pass on the past (whakapapa, pūrākau, carving, waiata)? Like codices, they hold history in more than writing.
**Week prep (total ≈ 20 min):** Expedition Journals (one exercise book per student), balloons, A3 paper strips for codex books, LEDs + coin cells (Tech).

---

### MON · W1 · HISTORY — "Who Were the Maya and Aztecs?"
- **Codes:** SS-H, SS-P · EN (oral language) · KC: Thinking, Using language, symbols & texts
- **Required-content coverage:** Y5 History practices: comparing societies, change over time, primary & secondary sources.
- **LI:** We are learning to describe who the Maya and Aztecs were and how historians find out about the past.
- **SC:** I can place the Olmec, Maya and Aztecs on a timeline and map. · I can explain the difference between a primary and a secondary source. · I can give an example of how we know something about the Maya or Aztecs.
- **Key vocabulary:** civilisation, Mesoamerica, archaeology, artefact, source (primary/secondary), codex (plural codices), BCE/CE.
- **Prep:** ⏱️ 0 min (all on screen). Optional: print the Source Sorter cards.

**🛰️ Field Transmission (0–6)**
- Cinematic: the storm, the ceiba tree, the chamber, the sealed book (opening animation §12 #1).
- 🗣️ SAY the premise (§2.1). 🖱️ CLICK to reveal Dr Canul's message: *"I need historians. Before you can read this book, you must know who made it."*
- **Glyph Check (prior knowledge, not retrieval this week):** ❓ "Thumbs up if you've heard of the Maya… the Aztecs… a pyramid in Mexico… chocolate coming from there?" → 🖱️ add answers to the **Glyph Wall** (the app keeps it until Week 10).
- Share the LI and SC (big-type slide).

**⛏️ Excavate (6–18)**
1. **The Deep Timeline** (interactive §12 #2): a scroll from 1200 BCE to today. 🖱️ Reveal the **Olmec** (c. 1200–400 BCE, the "mother culture", giant stone heads) → **Maya** (Preclassic from c. 2000 BCE; Classic city-states c. 250–900 CE; Postclassic to the Spanish arrival; the last independent Maya kingdom, Nojpetén, fell in 1697) → **Aztecs / Mexica** (Tenochtitlan founded c. 1325; Empire 1428–1521) → **today** (millions of Maya people and Nahuatl speakers still live in Mexico & Central America).
   - ↪️ IF THEY SAY "the Maya and Aztecs were the same / lived at the same time": "Good thinking. Let's check the timeline. When the Aztecs built Tenochtitlan, the great Classic Maya cities like Tikal had been quiet for about 400 years. But Maya people were still living and trading in the Yucatán."
   - 🤝 TURN & TALK: "What surprises you on this timeline?"
2. **Where?** A map zooms from NZ → the Americas → **Mesoamerica** (south Mexico, Guatemala, Belize, western Honduras & El Salvador). Note: *Mesoamerica is not South America. Tomorrow Capt. Quispe will show us the difference.*
3. **How do we know? Sources.** 🖱️ The **Source Sorter** (drag cards): a Maya stela 🟢 (primary), a codex page 🟢 (primary), a Spanish letter by Cortés 🟢 (primary, but by an invader), a modern textbook (secondary), a museum website (secondary), an archaeologist's photo of a dig (primary evidence, secondary report).
   - ❓ ASK: "Which of these would you trust most? Why?" 👂 LISTEN FOR: made at the time; made by the people themselves; checking more than one source.
   - ⭐ DEEPER: "Why might a letter written by Cortés not tell the whole story?"

**🧭 Choose Your Path (18–38)**
- **A · Scribe — Field Report:** look at one artefact image (from 3 on screen: Olmec head, Maya stela, Aztec Sun Stone) and complete the *See / Think / Wonder / How could I check?* frame in the journal.
- **B · Builder — Timeline Strip:** create a 5-point illustrated timeline (Olmec, Classic Maya, Tenochtitlan founded, Spanish arrive 1519, Maya & Nahua people today), with a date and a 1-line caption for each.
- **C · Messenger — "Breaking News" bulletin:** a 60-second radio report from the dig site explaining who made the codex and how historians will check it is real.
- *Supported:* sentence starters ("I see… I think it was used for… because…"); dates pre-printed. *Flying Challenge:* "Explain why a timeline might hide the fact that Maya people are still alive today."

**🔍 Through the Lens (38–45) — 📜 Mōhio**
- **LOOK CLOSER:** the timeline again, with thousands of years of nations rising and falling.
- **OPEN THE WORD:** Acts 17:24–27 (Paul in Athens). *"God made the world and everything in it… From one person He made every nation… He set the times and places where they would live… so that people would seek Him."*
- **TALK IT THROUGH:** ❓ "Paul says God set the times and places of every nation. Does that include the Maya and the Aztecs, who never heard of Israel?" 👂 Yes. Every people group is part of God's world and God's story. ❓ "If every nation matters to God, how should we study other people's history?" 👂 With respect, honestly, carefully, not mocking what is different.
- **LIVE IT OUT:** journal sentence: *"This term I will study the Maya and Aztecs with respect because…"*

**🗝️ Decode & Exit (45–50)**
- **Glyph Clue 1:** "How many centuries passed between Tenochtitlan's founding (1325) and the Spanish arrival (1519)?" → about 2 (accept 1.94 ≈ 2). *Teaser:* "Write it the Maya way… you'll learn how on Wednesday week 3!" (for now shown as two dots ••).
- Self-assess against the SC (fist-to-five → Developing/Achieved/Flying). Award cacao beans.

**📊 Lesson Rubric — Mon W1**
| SC (code) | 🌱 Developing | 🌽 Achieved | 🦅 Flying |
|---|---|---|---|
| Timeline & map (SS-H) | Places 1–2 civilisations with help. *Ex: "The Aztecs were a long time ago in Mexico."* | Places Olmec, Maya and Aztecs in the right order with approximate dates and region. *Ex: timeline with Olmec 1200 BCE → Classic Maya 250–900 CE → Tenochtitlan 1325 → Spanish 1519.* | Notices overlaps or continuity. *Ex: "The Maya were around before AND after the Aztecs, and they're still here today."* |
| Primary vs secondary (SS-P) | Sorts some sources with help. | Defines both and gives a correct example of each. *Ex: "A codex is primary because the Maya made it. A textbook is secondary."* | Explains how reliable a source is. *Ex: "Cortés' letter is primary, but he wanted the king to think he was a hero."* |
| How we know (SS-P) | Gives a fact without a source. | Links a fact to its evidence. *Ex: "We know the Maya had kings because their stelae show kings with dates."* | Suggests how to check a claim using more than one source. |

**Teacher reflection (teaching as inquiry):** Who struggled with primary vs secondary? Who already knows a lot? (Use them as Path C experts next week.)

---

### TUE · W1 · GEOGRAPHY — "Where in the World?"
- **Codes:** SS-G, SS-P · MA (coordinates, scale) · KC: Thinking, Using language, symbols & texts
- **LI:** We are learning to locate places in Latin America using maps, hemispheres, latitude and longitude.
- **SC:** I can name and locate the continents and oceans around Latin America. · I can explain the difference between Mesoamerica and South America. · I can use a grid reference or latitude/longitude to find a place.
- **Key vocab:** continent, hemisphere, equator, latitude, longitude, Mesoamerica, Central America, South America, Latin America, compass rose, scale.
- **Prep:** ⏱️ 5 min. Atlases (optional), Expedition Journals.

**🛰️ Field Transmission (0–6):** Capt. Sofía Quispe's floatplane *La Golondrina* lands on the lake (animation). *"I fly the expedition. But if you can't read a map, you don't fly with me."* Glyph Check: 3 retrieval Qs from Monday (Which came first, Maya or Aztec? What is a primary source? Name one source about the Maya).
**⛏️ Excavate (6–18):**
1. **The Flight Path** interactive (§12 #10): a globe spins from Ōtautahi Christchurch across the Pacific to Mexico. 🖱️ Show the equator, the Tropics, the hemispheres. ❓ "Which hemisphere is Mexico in? Which is NZ in? Is it summer in Mexico now?"
2. **Mesoamerica vs South America:** drag-reveal regions: North America (incl. Mexico) / Central America / South America / Caribbean; overlay *Mesoamerica* (a cultural region). The term route: Mexico → Guatemala → Panama → Andes → Amazon → Atacama → Patagonia.
3. **Latitude & longitude game:** the teacher reads coordinates, students point on the projected map (Tikal ≈ 17°N 89°W; Mexico City ≈ 19°N 99°W; Christchurch ≈ 43°S 172°E).
**🧭 Paths (18–38):** **A** *Navigator's Log*: locate & label 8 places on a blank map (printable, or drawn in the journal from the projected map) with lat/long. · **B** *Expedition Map*: draw and colour the Latin America route map with compass rose, key and scale. · **C** *Pilot's Radio Brief*: in pairs, guide a "pilot" from NZ to Tikal using only directions and coordinates. *Flying Challenge:* "Why do you think 'Latin America' includes Mexico but not the USA?"
**🔍 Lens — ❤️ Aroha (World):** Psalm 24:1, "The earth is the Lord's, and everything in it." ❓ "If the whole world belongs to God, how might that change the way we look at a map?" 👂 Every place matters; we're guests, not owners; care for the places and peoples. **Live it out:** circle one place on the map to pray for this term.
**🗝️ Glyph Clue 2:** "How many of the 7 continents does *La Golondrina* touch on her route?" → 2 (North & South America).
**📊 Rubric rows:** Locating places (SS-G) · Explaining regions (SS-G) · Coordinates/grid (SS-P, MA).
- *Developing ex:* "Mexico is near America." · *Achieved ex:* "Tikal is in Guatemala, in Central America at about 17°N. That's Mesoamerica, not South America." · *Flying ex:* "Mesoamerica is about culture, not continents. It crosses from North America into Central America."

---

### WED · W1 · SCIENCE — "What Is Electricity? Static & Lightning"
- **Codes:** SC-MIE, SC-P · KC: Thinking
- **Required-content coverage:** Y6 Science: an energy source and output in a loop (introduced); science practices.
- **LI:** We are learning that electricity is caused by moving electric charges, and how static electricity and lightning form.
- **SC:** I can describe what happens when objects are rubbed together and become charged. · I can explain that like charges repel and opposite charges attract. · I can explain how lightning is a giant static discharge.
- **Key vocab:** electricity, charge, positive, negative, electron, static, attract, repel, discharge, lightning.
- **Prep:** ⏱️ 5 min. Balloons (1 per pair), tissue-paper scraps (cut into tiny "glyph" pieces), a plastic comb, a tap of running water (demo).
- **Safety:** latex allergies (have non-latex balloons); never touch electrical sockets; lightning safety at home.

**🛰️ Field Transmission:** Mateo, by torchlight: *"Last night lightning struck the generator mast and the whole camp went dark. I need to understand electricity from the very beginning."* Glyph Check from Tue.
**⛏️ Excavate:**
1. **Inside an atom** (§12 #20): a cut-paper atom; electrons (−) orbit, protons (+) in the middle. 🖱️ Rub the balloon on the jumper: electrons jump across, the balloon becomes negative.
2. **Attract or repel?** Interactive charges: drag + and − tokens and watch them push or pull.
3. **Catatumbo lightning 🟢:** over Lake Maracaibo, Venezuela (South America), storms light up the sky on up to about 260 nights a year, one of the most lightning-struck places on Earth. 🖱️ The animation shows charges separating in the cloud → a giant spark.
4. 🧪 **Live demo:** charged comb bends a thin stream of water.
**🧭 Paths:** **A** *Lab Report*: test what the charged balloon picks up (paper, foil, salt, pepper, hair). Predict → test → explain. · **B** *Comic Strip*: "The Life of an Electron" from jumper → balloon → spark. · **C** *Storm Chaser Report*: explain how Catatumbo lightning forms, using the vocabulary. *Flying Challenge:* "Why does static happen more on dry days?"
**🔍 Lens — 📜 Mōhio:** Job 37:3–5 / Job 38:35, *"Can you send the lightning bolts on their way?"* (God's questions to Job). ❓ "People in the past, including the Maya, often thought lightning was a god. Scientists now explain how it works. Does explaining *how* lightning works mean God isn't part of it?" 👂 Science explains *how*; God is *who* made the laws that make it work. Knowing more can make us more amazed, not less. **Live it out:** write one "Wow, God…" sentence about lightning.
**🗝️ Glyph Clue 3:** "A negative balloon is held near a negative balloon. Attract (1) or repel (2)?" → 2.
**📊 Rubric rows:** Describing charging (SC-MIE) · Like/opposite charges (SC-MIE) · Explaining lightning (SC-MIE, SC-P).
- *Developing ex:* "The balloon got sticky." · *Achieved ex:* "Rubbing moved electrons onto the balloon, so it was negative and attracted the paper." · *Flying ex:* "Lightning is the same as the balloon, only huge. Charges separate in the cloud until the attraction is strong enough to jump through the air."

---

### THU · W1 · TECHNOLOGY — "Think Like an Engineer: The Jaguar-Eye Torch"
- **Codes:** TE-TP (brief development), TE-TK (systems), TE-NT · KC: Managing self, Participating
- **LI:** We are learning how engineers solve problems using a design brief, and to build a simple circuit.
- **SC:** I can identify the need, the stakeholder and 2 specifications in a brief. · I can build a working LED circuit with a coin battery. · I can explain the input → process → output of my torch.
- **Key vocab:** engineer, stakeholder, need, brief, specification, prototype, LED, battery, circuit, input/output.
- **Prep:** ⏱️ 10 min. 1 LED (5 mm, any colour) + one CR2032 coin cell per student or pair; card, tape, scissors. **SAFETY ⚠️:** coin cells are dangerous if swallowed. Count them out and count them back; never let them go home loose (see §13.4).

**🛰️ Transmission:** Mateo: *"The camp is dark and the codex chamber is pitch black. I need each of you to design an emergency torch: small, light, safe and hands-free."*
**⛏️ Excavate:**
1. **The Design Process wheel** (§12 #30): Need → Brief → Ideas → Plan → Build → Test → Improve. 🖱️ Each segment unfolds like paper.
2. **Writing the brief:** stakeholder = Mateo's team; need = see in the dark chamber; specs = fits on a finger, has a switch, uses safe parts.
3. **How an LED works** (simulator): long leg (+), short leg (−). 🖱️ Flip the LED around → no light (an LED lets current through one way only).
**🧭 Paths (roles within pairs, or individually):** **A** *Designer*: sketch 3 torch ideas, annotate them and pick one against the specs. · **B** *Builder*: build the Jaguar-Eye finger torch (LED + coin cell + card switch flap). · **C** *Tester*: test 3 classmates' torches against the specs and give "warm & cool" feedback. *Everyone builds at least a basic LED + coin cell.* *Flying Challenge:* add a switch made from a folded card flap.
**🔍 Lens — 🤲 Manaaki:** Exodus 31:1–5 (Bezalel, filled with God's Spirit "with skill, ability and knowledge in all kinds of crafts"). ❓ "The Bible says God gave Bezalel skill to design and make. What gifts has God given you for designing and building?" **Live it out:** name a design skill to grow, and someone it could help.
**🗝️ Glyph Clue 4:** "How many legs does an LED have?" → 2. (The clues accumulate.)
**📊 Rubric rows:** Brief (TE-TP) · Working circuit (TE-TK) · Systems explanation (TE-TK).
- *Developing ex:* "My torch lights up." · *Achieved ex:* "Input = pressing the flap, process = the battery pushes current through the LED, output = light. It meets 'fits on a finger' and 'has a switch'." · *Flying ex:* "It didn't meet 'hands-free' at first, so I added a band. Next version I'd use a brighter LED."

---

### FRI · W1 · ART — "Glyph Sketching & Making the Codex"
- **Codes:** VA-UC, VA-PK, VA-DI · KC: Managing self
- **LI:** We are learning to observe and draw Maya glyphs, and to construct a screenfold codex book.
- **SC:** I can explain what a codex is and how it was made. · I can draw a glyph using careful observation of shape, line and outline. · I can fold a neat screenfold book.
- **Key vocab:** glyph, codex, screenfold (concertina), amate (bark paper), observation, contour line, outline.
- **Prep:** ⏱️ 10 min. A3 card or paper cut lengthwise into strips (2 strips per student, glued end-to-end = 10 panels), B/2B pencils, erasers, glue sticks.

**🛰️ Transmission:** Doña Rosa: *"Before we can restore the Fifth Codex, your hands must learn what the scribes' hands knew. Every great artist starts by looking slowly."*
**⛏️ Excavate:**
1. **The four surviving codices 🟢:** Dresden, Madrid, Paris and the Maya Codex of Mexico. Bark paper coated in white lime plaster, painted, folded like a fan. 🖱️ The **Codex Unfold** (§12 #1) shows the screenfold in 3D.
2. **How a glyph is built:** a glyph is often a *main sign* with *affixes* (smaller signs attached). 🖱️ The **Glyph Draw-Along** (§12 #40): an SVG glyph draws itself stroke by stroke (big outline first, then inner details).
3. **Observation drawing tips:** look 80%, draw 20%; draw light first; contour (outline) before detail.
**🧭 Paths (22 min):** All students fold the codex (5 min, guided on screen). Then: **A** *Faithful Copy*: draw one real glyph carefully (choice of 4 projected: *ajaw* "lord", *k'in* "sun/day", *ha'* "water", the jaguar *b'ahlam* head) on the cover panel. · **B** *Glyph of Me*: design a personal name glyph inspired by Maya forms (main sign = something you love, affix = your team animal). · **C** *Scribe's Teaching Card*: draw a glyph AND write 3 steps teaching someone else to draw it. *Flying Challenge:* add tonal shading to make the glyph look carved.
**🔍 Lens (5 min gallery) — 🤲 Manaaki:** Psalm 90:17, "Establish the work of our hands." ❓ "Maya scribes were respected, gifted people. What does careful, beautiful work say about the person who makes it, and about the God who made us?"
**🗝️ FOLIO SEAL I:** combine the clues 2 · 2 · 2 · 2 → the jade lock needs their **sum** = 8 → the folio unfolds: a painted ceiba tree with roots and branches (in Maya thought the ceiba connected the layers of the world). 🟡 Story: the folio's edge shows a maize glyph, pointing to next week. **Collector's Intercept:** *"Everyone has a price. What's yours?"* ❓ Discussion seed for next week.
**📊 Rubric rows:** Context (VA-UC) · Observational drawing (VA-PK) · Craft construction (VA-PK).
- *Developing ex:* glyph drawn small, lines faint and uneven; folds not lined up. · *Achieved ex:* glyph fills the panel, a clear dark outline with the inner details correct; neat folds; "Codices were folded bark-paper books." · *Flying ex:* shading shows a carved-stone effect; the personal glyph combines two elements meaningfully; explains that main sign + affix is how Maya writing works.

---

## ⭐ WEEKS 2–10 — LESSON CARDS
*(Each card is expanded to Week 1 depth during the build. "Int" = interactive from §12.)*

### WEEK 2 — FOLIO II · CHILDREN OF MAIZE
**Hononga Aotearoa:** the Māori gardening cycle and maramataka; kūmara as taonga (and a teaser that kūmara came from South America → Wk 8).

**MON · History — From Olmec to Maya: Maize & the First Cities**
- **LI:** describe how farming maize allowed Olmec and Maya cities to grow. **SC:** explain the milpa system (maize, beans, squash); explain how surplus food leads to cities and specialised jobs; compare the Popol Vuh creation account with Genesis respectfully.
- **Hook:** Folio II shows maize growing from a figure's head. Why maize?
- **Key knowledge 🟢:** maize domesticated from teosinte in southern Mexico (~9,000 years ago); the "Three Sisters" milpa; Olmec San Lorenzo and La Venta; Maya Preclassic cities (El Mirador's huge La Danta pyramid); surplus → specialists (scribes, potters, priests, kings). The *Popol Vuh* (K'iche' Maya, written down in the 1550s) tells of humans finally made from maize dough.
- **Int:** *Teosinte → Maize* morph slider; *Surplus Simulator* (more farmers' food → unlocks specialist jobs → a city grows).
- **Paths:** A *Farmer's Almanac* page · B *Milpa model/diagram* · C *Village Council role-play* (who gets the surplus?).
- **Lens 📜/❤️:** Genesis 2:7 and Ps 65:9–13 (God waters the land and provides grain). Compare: in the Popol Vuh the gods tried mud, then wood, then maize to make people who would worship them; in Genesis God forms humans from dust and *breathes* His own life into them, out of love, not need. Treat the Popol Vuh as a respected cultural text. ❓ "What does each story say about why people exist?"
- **Clue:** "How many plants grow in a milpa?" → 3.

**TUE · Geography — Land of Fire & Stone (Ring of Fire)**
- **LI:** explain how tectonic plates create volcanoes, earthquakes and tsunami in Latin America. **SC:** describe plate boundaries; explain a hazard's causes and effects; connect to NZ.
- **Key knowledge 🟢:** Ring of Fire; the Nazca plate sliding under the South American plate builds the Andes; Popocatépetl ("smoking mountain" in Nahuatl) is active near Mexico City; the **1960 Valdivia earthquake in Chile (M9.5) is the largest recorded, and its tsunami crossed the Pacific and reached NZ** less than a day later.
- **Int:** *Plate Slide* (push the plates → mountains rise, earthquake meter); *Tsunami Across the Pacific* (wave front travels Chile → NZ with a clock).
- **Paths:** A *Hazard fact-file* · B *Plate boundary model (layered card/paper)* · C *Civil Defence broadcast* (NZ: "Long or strong, get gone").
- **Lens 🤲 Manaaki:** Luke 10:25–37, the Good Samaritan. Neighbours across the Pacific helped each other after quakes (Chile helped Christchurch in 2011 and NZ helped Chile in 2010). **Sensitivity:** some Canterbury whānau have lived experience of the 2010–2011 earthquakes. Give a calm warning, allow opting out of video, and focus on helpers and preparedness.
- **Clue:** "The 1960 earthquake was magnitude 9.5. Round it to the nearest whole number." → 10.

**WED · Science — Electric Life: Eels, Nerves & Batteries**
- **LI:** explain that electricity can be stored chemically (batteries) and used by living things. **SC:** explain how electric eels make electricity; build a potato or lemon battery; explain energy stored → transferred.
- **Key knowledge 🟢:** Amazon electric eels (*Electrophorus*; one species discovered in 2019 can discharge up to ~860 volts); our nerves send electrical signals; Alessandro Volta's 1800 "pile" (the first battery) was inspired by electric fish; **the potato was first farmed in the Andes of South America.**
- **Int:** *Eel Discharge* (stacked cells add voltage like batteries in a row); *Battery Inside* (zinc + copper + electrolyte → electron flow).
- **Paths:** A *Explain the eel* labelled diagram · B *Potato/lemon battery* (in groups: copper coin, galvanised nail, LED; series cells to light it) · C *Inventor interview* (Volta).
- **Lens 📜:** Psalm 139:13–14, "fearfully and wonderfully made" (our bodies run on electrical signals!).
- **Prep:** 10 min (potatoes/lemons, galvanised nails, copper coins or strips, crocodile leads, red LEDs).
- **Clue:** "How many potato cells did your group need to light the LED?" (usually 3–4) → the teacher sets the clue to 4.

**THU · Technology — Paper Circuits: Light-Up Glyph Cards**
- **LI:** design and build a paper circuit that lights a glyph. **SC:** plan a circuit path; build a working copper-tape circuit; troubleshoot.
- **Int:** *Paper Circuit Planner* (draw a track on a card template → the simulator tests it); *Troubleshooting Flowchart*.
- **Paths:** A *Planner* (perfect circuit diagram) · B *Builder* (card lights up) · C *Fixer* (diagnose 3 "broken" designs on screen).
- **Lens ❤️:** John 1:5, "The light shines in the darkness." The cards are made to give to someone who needs encouragement.
- **Prep:** 10 min (copper tape, CR2032 cells, LEDs, card, binder clips).
- **Clue:** "A broken circuit has a gap. Number of gaps that stop it working?" → 1.

**FRI · Art — Dyes & Colour: Staining Codex Pages + the Maya Blue Mystery**
- **LI:** explore natural dyes and colour mixing to create aged "amate" codex pages. **SC:** make an even dye wash; mix secondary colours; explain how Mesoamericans made colours.
- **Key knowledge 🟢:** **Maya Blue**: indigo plant dye bonded to palygorskite clay by heating, so it survives centuries of rain (a puzzle scientists only solved recently); **cochineal** red from insects on prickly-pear cactus, so valuable that the Spanish shipped it to Europe.
- **Int:** *Dye Lab* colour-mixing simulator; *Maya Blue Mystery* reveal (indigo + clay + heat).
- **Paths:** A *Colour journal* swatches with notes · B *Stain codex pages* (tea, coffee, turmeric, beetroot/red cabbage) and paint the folio II page · C *Dye-maker's demo* to another group.
- **Lens 🤲:** Exodus 35:25, skilled women spinning blue, purple and scarlet yarn for the Tabernacle. Colour as a gift.
- **Folio Seal II:** clues 3 · 10 · 4 · 1 → the lock needs the **sum, 18** → the folio shows a maize god and a dotted number. **Intercept:** a fake "certificate" saying the codex belongs to him.

### WEEK 3 — FOLIO III · THE SCRIBE'S SECRET
**Hononga Aotearoa:** how te reo Māori was written down in the 1800s (missionaries and Māori scholars together) compared with the decipherment of Maya script.

**MON · History — Writing & Numbers: Cracking the Maya Code**
- **LI:** explain how Maya writing and numbers worked and how modern scholars deciphered them. **SC:** read and write Maya numbers to 19 (and beyond with place value); explain logograms and syllables; tell the decipherment story.
- **Key knowledge 🟢:** dot = 1, bar = 5, shell = 0; base 20 (stacked vertically); the Maya used **zero** centuries before Europe. The script mixes word signs (logograms) and syllable signs. **The great irony:** Bishop Diego de Landa ordered codices burned at Maní (1562), yet his own notes recorded a Maya "alphabet" that helped **Yuri Knorozov** (1950s) show the script was partly syllabic. **Tatiana Proskouriakoff** (1960) proved the inscriptions recorded the lives of real rulers.
- **Int:** *Maya Number Machine* (drag dots/bars/shells; base-20 place-value tower; type any number → glyph); *Decipherment Detective* (match syllables to build the word *b'a-la-ma* → *b'ahlam*, jaguar).
- **Paths:** A *Code-breaker worksheet* (number puzzles) · B *Number tower model* · C *Documentary* about the code-breakers.
- **Lens 📜:** Isaiah 40:8 and John 1:1–5, "the Word of our God endures forever." Books burned, words lost… and yet. Honest talk: a Christian leader destroyed books; that was wrong. Today the Bible is translated into many Mayan languages, God's Word given *in* their words.
- **Clue:** a Maya number shown on screen → 13.

**TUE · Geography — Water Beneath Stone: Cenotes & Chicxulub**
- **LI:** explain why water shaped where people settled in the Yucatán. **SC:** explain how cenotes form in limestone (karst); link water to settlement; read a map pattern.
- **Key knowledge 🟢:** the Yucatán has almost no rivers on the surface; rain soaks through limestone into caves; collapsed caves form **cenotes**. A ring of cenotes traces the edge of the buried **Chicxulub crater** (about 180 km across), from the asteroid that hit 66 million years ago. Maya cities clustered near water (Chichén Itzá means "mouth of the well of the Itza").
- **Int:** *Karst Cross-Section* (rain → limestone → cave → collapse); *Cenote Ring Reveal* (map overlay draws the crater circle — wow moment).
- **Paths:** A *Settlement report* (best city site & why) · B *Cross-section diagram/model* · C *Tour-guide script* for a cenote.
- **Lens ❤️:** John 4:13–14, living water, Jesus at the well. ❓ "Why might water be such a powerful picture in a place with no rivers?"
- **Clue:** "How many km across is the Chicxulub crater, divided by 10?" → 18.

**WED · Science — The Complete Loop: Circuits & Symbols**
- **LI:** build and draw simple circuits with standard symbols. **SC:** build a closed circuit; explain open vs closed; draw it with symbols.
- **Int:** **Circuit Sandbox** (§12 #21, the core science tool: drag battery, bulb, wires, switch; animated current; open/closed).
- **Paths:** A *Symbol dictionary & 3 diagrams* · B *Build 4 challenge circuits* (kit) · C *Circuit "Simon says" game* run for a group.
- **Lens 📜 (analogy, labelled):** John 15:5, "apart from me you can do nothing." A bulb disconnected from the source can't shine. ⚠️ *Where the picture breaks:* people aren't machines. God's love isn't switched off when we fail.
- **Prep:** 5 min (kits: 2×AA holders, bulbs/LEDs, wires with crocodile clips).
- **Clue:** "How many complete loops does a simple circuit need?" → 1.

**THU · Technology — Switches: the Pressure-Plate Temple Trap**
- **LI:** design a switch that controls a circuit (an alarm to protect the codex). **SC:** explain how a switch opens/closes a circuit; build a pressure-plate switch from card & foil; test and improve.
- **Int:** *Switch X-ray* (push-button, toggle, reed, pressure plate shown in cross-section).
- **Paths:** A *Design* sketches · B *Build* a foil pressure plate + buzzer/LED · C *Test & Report*: does it trigger every time?
- **Lens 🌱 Pānga:** Nehemiah 4:9, "we prayed… and posted a guard." Protecting what is precious (and why the codex must be protected from looters).
- **Prep:** 10 min (foil, card, sponge/foam, buzzers or LEDs, cells).
- **Clue:** "A switch has 2 states. How many?" → 2.

**FRI · Art — Number Art: Dot-Bar-Shell Pattern Design**
- **LI:** create a pattern design using Maya numerals, repetition and symmetry. **SC:** use repetition and rhythm; use line/reflective symmetry; explain the meaning hidden in the design.
- **Int:** *Symmetry Mirror Canvas* (teacher demo: draw on one side, it reflects); *Pattern Repeater*.
- **Paths:** A *Birthday-number border* · B *Symmetrical folio III page* · C *Pattern puzzle* for a classmate to decode.
- **Lens ❤️:** Psalm 147:4, God "determines the number of the stars and calls them each by name." Order and beauty in creation.
- **Folio Seal III:** 13 · 18 · 1 · 2 → the lock: the Maya numeral for the total (34 = 1 twenty + 14) → the scribe's name glyph is revealed: 🟡 "Aj K'in", "He of the Sun". **Intercept:** he offers to buy the scribe's name for a TV documentary.

### WEEK 4 — FOLIO IV · KEEPERS OF TIME
**Hononga Aotearoa:** the **maramataka** (Māori lunar calendar) compared with Maya calendars: both track sky and seasons for planting and life. (Y5 science content.)

**MON · History — Calendars, Astronomy & the 2012 Myth**
- **LI:** explain how the Maya measured time and why it mattered. **SC:** explain the 260-day Tzolk'in and 365-day Haab'; explain the 52-year Calendar Round; evaluate the "2012 end of the world" claim using evidence.
- **Key knowledge 🟢:** Tzolk'in = 13 numbers × 20 day-names; Haab' = 18 months × 20 days + 5 days (Wayeb'); together they make 18,980 days = 52 years. The Long Count counts days from a start date in 3114 BCE. The Dresden Codex has Venus tables. **21 December 2012** was simply the end of a big cycle (13 b'ak'tuns), like an odometer rolling over. Maya inscriptions even mention dates far beyond 2012.
- **Int:** **Calendar Round Gears** (§12 #4: interlocking wheels turn; today's Maya date is calculated live); *Myth-Buster Evidence Board*.
- **Paths:** A *Myth-buster article* · B *Today's date in Maya* poster · C *Debate*: "Were the Maya better at time than us?"
- **Lens 📜:** Ps 90:12 ("teach us to number our days"); Matthew 24:36 (no one knows the day). ❓ "Why do people get scared by end-of-the-world claims? What does Jesus tell us instead?" 👂 Trust, not fear; live well today.
- **Clue:** "Number of days in the Wayeb'?" → 5.

**TUE · Geography — Rainforest Biomes: Petén & Amazon vs NZ**
- **LI:** compare tropical and temperate rainforests. **SC:** describe rainforest layers; explain climate differences; compare an NZ and a Latin American rainforest.
- **Key knowledge 🟢:** emergent / canopy / understorey / forest floor; the Amazon is the largest tropical rainforest; the Petén forest surrounds Tikal; NZ's temperate rainforests (e.g. West Coast, Fiordland) have podocarps, ferns and mosses.
- **Int:** *Rainforest Layer Explorer* (hover each layer: animals, light %, temperature); *Climate Graph Compare* (Manaus vs Hokitika).
- **Paths:** A *Venn comparison* · B *Layered cut-paper diorama* · C *Nature documentary voice-over*.
- **Lens ❤️:** Genesis 1:11–12, 31, "God saw that it was very good." Creation as a gift to treasure.
- **Clue:** "How many layers in the rainforest?" → 4.

**WED · Science — Conductors & Insulators: the Gift of Rubber**
- **LI:** test which materials let electricity flow. **SC:** carry out a fair test; classify conductors/insulators; explain why metals conduct.
- **Key knowledge 🟢:** metals (gold, copper, silver) conduct; rubber, plastic, wood, stone, glass insulate. **Mesoamericans processed rubber more than 3,000 years ago** (latex + morning-glory juice) for balls, sandals and seals, long before Europe. Obsidian & jade = insulators. Chile produces more copper than any other country, the metal in our wires.
- **Int:** *Conductor Tester* (drag gold, jade, obsidian, cacao bean, copper, rubber, etc. into the circuit gap → the bulb responds).
- **Paths:** A *Fair-test report* · B *Real-material testing* (kit) · C *Safety advert* (why cables are coated in rubber/plastic).
- **Lens 🤲:** Colossians 1:17, "in him all things hold together." The properties of materials are reliable because creation is ordered.
- **Prep:** 5 min (a tray of everyday materials + a circuit tester).
- **Clue:** "Out of 8 materials tested, how many conducted?" → the teacher sets it (typically 3).

**THU · Technology — Meet the Microcontroller: "Heartbeat of the Temple"**
- **LI:** understand what a microcontroller is and write a first algorithm (blink). **SC:** explain input → process → output for a microcontroller; order code blocks into a sequence; change a delay and predict the result.
- **Int:** **Arduino Simulator** (§12 #31: blocks ↔ C code, step-through highlight, virtual LED). Real board optional.
- **Paths:** A *Algorithm cards*: write "human robot" instructions · B *Code the Blink* (sim or real) · C *Debug Hunt*: find 3 errors.
- **Lens 📜:** Psalm 19:1–4. The heavens "speak" without words; code is instructions for machines; creation runs on God's faithful order.
- **Clue:** "If the delay is 500 ms, how many blinks per second?" → 1.

**FRI · Art — Calendar Wheels**
- **LI:** design and construct a rotating calendar wheel. **SC:** use radial design; construct with card & split pins; explain the calendar cycle it shows.
- **Paths:** A *Personal 20-day-name wheel* · B *Two-wheel gear model* (13 & 20) · C *"How it works" teach card*.
- **Lens:** Ecclesiastes 3:1, "a time for everything."
- **Prep:** 5 min (card circles: printable template or traced bowls, split pins).
- **Folio Seal IV:** 5 · 4 · 3 · 1 → the folio shows a Long Count date. 🟡 The date points to "the city where the kings fell silent". **Intercept:** "Your codex predicts doom. Sell it before it's worthless."

### WEEK 5 — FOLIO V · THE SILENT CITIES
**Hononga Aotearoa:** archaeology in NZ (e.g. Wairau Bar), and why respecting wāhi tapu matters.

**MON · History — Kings, City-States & the Great Collapse**
- **LI:** explain how Classic Maya city-states were ruled and evaluate theories of their decline. **SC:** describe the role of the *k'uhul ajaw* (holy lord) & rivalries (Tikal vs Calakmul); explain Pakal's tomb discovery; weigh evidence for causes of the collapse.
- **Key knowledge 🟢:** dozens of rival city-states; Pakal of Palenque (ruled 615–683), whose tomb was found in 1952 by Alberto Ruz after years of digging; **southern lowland cities emptied c. 800–950 CE**; evidence: lake-sediment cores show severe droughts; warfare inscriptions increase; deforestation. **LiDAR** (lasers from aircraft) revealed tens of thousands of hidden structures in Guatemala (2018), and in 2024 a student found a lost city, "Valeriana", in old LiDAR survey data.
- **Int:** **LiDAR Reveal** (§12 #6: drag a scan beam over the canopy → the city appears); *Collapse Evidence Board* (drag evidence to hypotheses, and confidence meters change).
- **Paths:** A *Detective's case file* · B *Ranked "causes" pyramid* · C *Panel debate* (Drought vs War vs Deforestation).
- **Lens 🌱 Pānga:** Psalm 127:1 ("Unless the Lord builds the house…") and Genesis 2:15 (work it and take care of it). ❓ "What can a whole society learn from the collapse?"
- **Clue:** "Pakal became king at age 12. Write 12 in Maya." → 12.

**TUE · Geography — Deforestation & Indigenous Peoples**
- **LI:** explain causes and effects of deforestation and different perspectives on it. **SC:** explain 3 causes; describe effects on environment & Indigenous peoples; evaluate solutions.
- **Key knowledge 🟢:** causes: cattle ranching, soy, logging, mining, roads; "fishbone" clearing patterns seen from space; Indigenous territories often have much less clearing; the Maya Biosphere Reserve.
- **Int:** *Satellite Time-Lapse slider* (forest → fishbone); *Perspectives Wheel* (farmer, Indigenous elder, government, consumer, scientist).
- **Paths:** A *Persuasive letter* · B *Cause-effect web poster* · C *Role-play council meeting*.
- **Lens ❤️/🌱:** Psalm 24:1 & Micah 6:8. Kaitiakitanga and stewardship as acts of love for God and neighbour.
- **Clue:** "How many perspectives on the wheel?" → 5.

**WED · Science — Series & Parallel Circuits**
- **LI:** compare series and parallel circuits. **SC:** build both; predict and explain brightness; explain why houses use parallel.
- **Int:** **Circuit Sandbox (series/parallel mode)**: remove one bulb → watch what happens.
- **Paths:** A *Prediction table & explanation* · B *Build & compare* · C *"Light the camp" problem* (which wiring for 6 tents?).
- **Lens (analogy) 📜:** 1 Corinthians 12, one body, many parts. In a parallel circuit each bulb is connected to the source directly; if one goes out, the rest still shine. ⚠️ *Where the picture breaks:* in the Church, if one part suffers, all suffer (1 Cor 12:26), so we're more connected than a circuit!
- **Clue:** "Remove one bulb from a 3-bulb series circuit. How many stay lit?" → 0.

**THU · Technology — Sequences & Loops: the Calendar Light Code**
- **LI:** write a sequence with a loop. **SC:** sequence 3 LEDs (traffic-light style); use a loop; debug timing.
- **Int:** Arduino Simulator (3 LEDs).
- **Paths:** A *Flowchart* · B *Code it* · C *Remix* (a pattern spelling a Maya number in flashes).
- **Lens:** Lamentations 3:22–23, "new every morning", God's faithful repeating mercy.
- **Clue:** "A loop runs 4 times with 3 LEDs each. Total flashes?" → 12.

**FRI · Art — Portraits of Kings: Relief Profile & Tonal Shading**
- **LI:** draw a profile portrait in Maya relief style using tonal shading. **SC:** use profile proportion; create 3–5 tones; add a meaningful headdress/symbol.
- **Int:** *Tone Ladder* demo; *Profile Proportion overlay*.
- **Paths:** A *Self-portrait as a stela figure* (own symbols, not deity imagery) · B *Copy of Pakal's profile* · C *Stela with a written caption of an achievement*.
- **Lens:** 1 Samuel 16:7, "people look at outward appearance, but the Lord looks at the heart." What kings carved about themselves vs who they really were.
- **Folio Seal V:** 12 · 5 · 0 · 12 → (12 + 5 + 0 + 12 = 29) → the folio shows a map glyph and an eagle. 🟡 The trail leads north to Aztec lands. **Intercept:** photos of looters' tunnels at the city.

### WEEK 6 — FOLIO VI · THE EAGLE ON THE CACTUS
**Hononga Aotearoa:** Māori migration traditions and the founding of settlements; how the place you settle is chosen.
**Big Projects launched (all subjects): students choose and set goals.**

**MON · History — The Rise of the Aztecs**
- **LI:** explain how the Mexica founded Tenochtitlan and built an empire. **SC:** retell the founding story & identify it as a tradition; explain chinampas & causeways; explain the Triple Alliance and tribute.
- **Key knowledge 🟢:** the Mexica migrated from a homeland they called Aztlan; tradition says their god told them to settle where an eagle stood on a cactus (now on Mexico's flag); Tenochtitlan was founded c. 1325 on an island in Lake Texcoco; chinampas (floating-garden fields), 3 causeways, a fresh-water aqueduct from Chapultepec; the 1428 Triple Alliance (Tenochtitlan, Texcoco, Tlacopan); tribute from conquered towns (recorded in the Codex Mendoza); population perhaps around 200,000 by 1519, among the largest cities in the world.
- **Int:** **Tenochtitlan Builder** (§12 #7: the lake → island → chinampas grow → causeways → temples); *Tribute Map*.
- **Paths:** A *Founding-story retelling with "fact or tradition?" notes* · B *Chinampa model* · C *Newsreader at the founding*.
- **Lens 📜:** Matthew 7:24–27, built on rock vs sand. Tenochtitlan was built on a lake (tomorrow we'll see what happened next!). ❓ "What is your life built on?"
- **Clue:** "How many cities in the Triple Alliance?" → 3.

**TUE · Geography — Cities on a Lake: Urbanisation**
- **LI:** explain urbanisation and its effects using Mexico City. **SC:** define urbanisation; explain why Mexico City is sinking; describe informal settlements and responses.
- **Key knowledge 🟢:** Mexico City sits on the old lakebed; pumping groundwater makes the clay compact, so parts of the city sink tens of centimetres a year; one of the world's largest cities (~22 million in the metro area); informal settlements on city edges; the **axolotl**, a critically endangered salamander, survives only in the Xochimilco canals (the last of the lake).
- **Int:** *Then & Now slider* (Tenochtitlan → Mexico City); *Sinking Meter* (cathedral tilt); *Axolotl Habitat* map.
- **Paths:** A *Urban planner's report* · B *Then/now map* · C *Axolotl rescue appeal*.
- **Lens ❤️:** Jeremiah 29:7, "seek the peace and prosperity of the city." How Christians can care for cities and people living in informal settlements.
- **Clue:** "Lake → city: how many causeways crossed the lake?" → 3.

**WED · Science — Magnetism & the Olmec "Compass" Mystery**
- **LI:** investigate magnetic forces and poles. **SC:** explain that magnets attract some metals (iron) but not all; explain poles; evaluate the Olmec compass hypothesis.
- **Key knowledge 🟢:** non-contact forces; N–S poles; magnetic field; Earth as a magnet; a polished Olmec hematite bar (~3,000 years old) found at San Lorenzo floats pointing roughly north. Some scientists think it may be the world's oldest compass, others aren't convinced (an evidence debate!).
- **Int:** *Field-line visualiser* (iron filings animation); *Olmec Bar Debate* (evidence for/against).
- **Paths:** A *Investigation: what's magnetic?* · B *Make a compass* (needle, magnet, cork, water) · C *Science-court debate*.
- **Lens 📜:** Psalm 32:8, "I will instruct you… in the way you should go." A compass shows direction; where do we get our direction?
- **Prep:** 5 min (magnets, needles, corks, bowl of water, a mix of metals incl. aluminium cans).
- **Clue:** "How many poles does a magnet have?" → 2.

**THU · Technology — Inputs & Decisions: the Secret Door Code**
- **LI:** use an input (button) and an if/else decision. **SC:** explain input → decision → output; code a button that unlocks (lights green / buzzes); test edge cases.
- **Int:** Arduino Simulator (button + LED); *Decision Tree* builder.
- **Paths:** A *Flowchart with decisions* · B *Code the lock* · C *Hacker test*: try to break a classmate's logic.
- **Lens 🌱:** Proverbs 4:23 (guard your heart). Choices as "if/then" decisions in life.
- **Clue:** "Code needs button pressed 3 times. Presses needed?" → 3.

**FRI · Art — Aztec Geometric Design & Card Stamping**
- **LI:** design and print a repeating geometric pattern. **SC:** use Aztec-inspired geometric motifs (stepped frets, zigzags, spirals); make a card relief stamp; print a repeat (block / half-drop).
- **Key knowledge 🟢:** Aztec clay stamps (*pintaderas*) printed designs onto cloth, paper and possibly skin.
- **Int:** *Pattern Repeater* (block, half-drop, mirror).
- **Paths:** A *Motif sketchbook* · B *Card relief stamp & print the folio VI page* · C *Design for a real use* (team banner).
- **Lens:** Psalm 139:14. Repetition and variety, like people: each made, none identical.
- **Prep:** 10 min (thick card, scrap card shapes, PVA, paint or ink pads, rollers optional).
- **Folio Seal VI:** 3 · 3 · 2 · 3 → the folio shows a marketplace. **Intercept:** the Collector steals Sofía's map. ❓ "Is it ever right to take something because you say you'll look after it better?"

### WEEK 7 — FOLIO VII · THE GREAT MARKET
**Hononga Aotearoa:** Māori trade networks (pounamu, tītī/muttonbirds, kūmara) and the value of jade vs pounamu.

**MON · History — Daily Life in Tenochtitlan: School, Family, Law & the Market**
- **LI:** describe daily life for different groups in Aztec society. **SC:** describe 3 social groups; explain how children were educated; explain how market rules and laws worked.
- **Key knowledge 🟢:** the tlatoani (ruler), nobles, commoners (macehualtin), merchants (pochteca), enslaved people; the *calpulli* neighbourhood; schools: the *calmecac* (nobles' children; priests, writing) and *telpochcalli* (commoners; often described as some of the earliest broadly compulsory schooling, mainly for boys); the **Tlatelolco market**, which amazed the Spanish (Bernal Díaz described huge crowds and order), with **judges who checked fair measures and punished cheating**.
- **Int:** *Society Pyramid* (hover for roles); *Market Walk* (§12 #8: a cut-paper market scene with clickable stalls).
- **Paths:** A *"A day in my life" diary as a Mexica child* · B *Market stall model* · C *Market judge role-play* (settle a dispute).
- **Lens 📜/🤲:** Proverbs 11:1, "the Lord detests dishonest scales." Aztec market judges and God's heart for fairness.
- **Clue:** "How many types of school?" → 2.

**TUE · Social Science — Trade & Exchange: Cacao Money to Tap-and-Go**
- **LI:** explain how exchange changed from barter to money to electronic payments. **SC:** explain barter & its problems; explain how cacao and cotton cloths worked as money; explain fair trade today.
- **Key knowledge 🟢:** cacao beans were currency (a 1545 Nahuatl price list from Tlaxcala gives roughly: a large tomato ≈ 1 bean, an avocado ≈ 3 beans, a turkey hen ≈ 100 beans; values to be checked against a source during the build); larger values used *quachtli* (cotton cloaks); people even made counterfeit beans! Today much of the world's cacao comes from small farmers, and fair trade aims for fair prices.
- **Int:** **Tlatelolco Trading Game** (§12 #9: barter vs cacao; teams trade); *Money Timeline* (barter → cacao → coins → cards → phone).
- **Paths:** A *Explain-the-change comic* · B *Class market simulation* (paper cacao beans) · C *Fair-trade advert*.
- **Lens 🤲 Manaaki:** 2 Corinthians 9:7 & Micah 6:8. Generosity and justice for farmers.
- **Clue:** "Avocado = 3 beans. 4 avocados = ?" → 12.

**WED · Science — Electromagnets**
- **LI:** make and test an electromagnet. **SC:** explain that a current makes a magnetic field; fair-test number of coils vs paper clips lifted; explain uses.
- **Int:** *Coil Slider* (more coils → stronger field → more clips); *Scrapyard crane* animation.
- **Paths:** A *Fair-test report with graph* · B *Build & test* · C *Explain to Mateo* how to lift the "stone lid" (🟡 story).
- **Lens 🤲:** Acts 1:8, "you will receive power…" Power that is given for service, not show.
- **Prep:** 10 min (iron nails, insulated wire, D cells/AA packs, paper clips). Safety: wires can get warm, so connect only briefly.
- **Clue:** "Your best result (paper clips lifted)", the teacher sets it (≈ 10).

**THU · Technology — Sound: the Teponaztli Drum Code**
- **LI:** code a rhythm/melody with a piezo buzzer. **SC:** use tone() & delays; use a loop for rhythm; compose with purpose.
- **Key knowledge 🟢:** the *teponaztli* is an Aztec slit drum carved from a log, playing two tones.
- **Int:** Arduino Simulator (piezo plays through the speakers); *Rhythm Grid*.
- **Paths:** A *Notation*: write the rhythm · B *Code it* · C *Perform & explain* the algorithm.
- **Lens:** Psalm 150, "praise Him with… drums." Music as worship.
- **Clue:** "A 2-tone drum, played 2 bars of 4 beats. Beats?" → 8.

**FRI · Art — Mosaic: Torn-Paper Turquoise**
- **LI:** create a mosaic using tesserae, colour and tone. **SC:** use small torn/cut pieces with gaps; use colour value to show form; explain Aztec mosaic art.
- **Key knowledge 🟢:** Aztec and Mixtec artisans made turquoise mosaics on wood (e.g. the double-headed serpent in the British Museum); turquoise was traded from far north (today's US Southwest). Students design their **own animal** (e.g. their team animal), not a deity mask.
- **Paths:** A *Mosaic tile* · B *Folio VII page in mosaic* · C *Collaborative team mosaic*.
- **Lens 🤲:** 1 Corinthians 12 again: many small pieces, one picture.
- **Prep:** 5 min (magazines/coloured paper in blue-green shades, glue sticks).
- **Folio Seal VII:** 2 · 12 · 10 · 8 → the folio shows a sun with five rays. **Intercept:** *"The old gods demanded blood. All I demand is gold. Who's the reasonable one?"*

### WEEK 8 — FOLIO VIII · THE FIFTH SUN
**Hononga Aotearoa:** **the kūmara voyage**: DNA and plant evidence show Polynesian voyagers likely reached South America, bringing the kūmara back into the Pacific. Our kūmara is South American!

**MON · History — Beliefs & the Fifth Sun: Temples, the Templo Mayor & Sacrifice** *(⚠️ see §17 for sensitive handling)*
- **LI:** explain Aztec beliefs about the Sun and why temples were central. **SC:** explain the Legend of the Fifth Sun; describe the Templo Mayor and how it was rediscovered; compare Aztec beliefs about sacrifice with the Christian message, respectfully and honestly.
- **Key knowledge 🟢:** the Aztecs believed four earlier worlds/suns had been destroyed and they lived in the Fifth Sun; many believed the gods had sacrificed themselves for the Sun and that it needed to be "fed" with offerings, including human sacrifice (stated plainly, with no detail or images of violence). **In 1978 electricity workers digging in Mexico City struck a giant carved stone (Coyolxauhqui)**, which led to the excavation of the Templo Mayor. The "Sun Stone" (found 1790) is a famous carving, often wrongly called a calendar.
- **Int:** *Templo Mayor Layers* (§12 #11: the temple was rebuilt 7 times; peel the layers like an onion); *Sun Stone Explorer* (hover rings).
- **Paths:** A *Museum label for an artefact* · B *Layered temple model (card)* · C *Archaeologist's press conference 1978*.
- **Lens 📜 (the heart of the term):** Micah 6:6–8, *"Shall I offer my firstborn…? He has shown you what is good: to act justly, love mercy, walk humbly with your God."* + Acts 17:24–25 (God "is not served by human hands, as if he needed anything; he himself gives everyone life and breath"). ❓ "The Aztecs believed the Sun needed people to keep it going. What does the Bible say about who keeps the Sun shining and who gives life?" 👂 God doesn't need anything from us; He gives. Then Hebrews 10:10: in Jesus, God gave *Himself* "once for all". **Tone:** compassion, not superiority: "They were trying to deal with a real fear. The Bible's answer is a gift."
- **Clue:** "Number of the Sun we live in, in Aztec belief?" → 5.

**TUE · Geography — The Andes & the Inca (+ the Kūmara Voyage)**
- **LI:** explain how the Inca adapted to living in the Andes. **SC:** explain altitude zones and climate; explain terraces, roads and quipu; compare the Inca with the Aztecs.
- **Key knowledge 🟢:** the Andes are the longest mountain range on land; temperature drops as you climb; the Inca (c. 1400s–1530s) built terraces, a road network of tens of thousands of km (Qhapaq Ñan), Machu Picchu (c. 1450), and kept records on knotted cords (quipu); potatoes & quinoa from the Andes; Polynesian–South American contact (c. 1200 CE, DNA evidence).
- **Int:** *Altitude Climber* (slider: crops & temperature change); *Quipu Knotter* (tie knots = numbers); *Voyage Map* (Polynesia ↔ South America).
- **Paths:** A *Inca vs Aztec comparison chart* · B *Terrace model or quipu (string)* · C *Chasqui runner relay* message challenge.
- **Lens 📜:** Psalm 121:1–2, "I lift up my eyes to the mountains — where does my help come from?"
- **Clue:** "Knots in the quipu on screen" → 7.

**WED · Science — Generating Electricity: Motors, Generators & Itaipú**
- **LI:** explain how electricity is generated by spinning magnets and coils. **SC:** explain energy transfer from movement to electricity; build/observe a motor; explain hydroelectric power.
- **Key knowledge 🟢:** generators spin magnets near coils; the **Itaipú dam** (Brazil–Paraguay) is one of the largest hydro stations on Earth; NZ also gets much of its electricity from hydro (e.g. Waitaki, Manapōuri).
- **Int:** **Generator Crank** (§12 #24: spin → the bulb brightens); *Dam Cross-section* (water → turbine → generator → grid).
- **Paths:** A *Energy transfer flow diagram* · B *Build a simple motor or crank-generator demo* · C *Pitch*: river power for the camp (🟡).
- **Lens ❤️/🌱:** Isaiah 40:26, God's great power and strength, with energy as a resource to share justly.
- **Prep:** 5–10 min (small DC motors, cells, optional hand-crank torch).
- **Clue:** "Number of countries sharing Itaipú?" → 2.

**THU · Technology — Sensors: the Equinox Sunrise Detector (LDR)**
- **LI:** use a light sensor to trigger an output. **SC:** read an analogue sensor; set a threshold; trigger an LED/servo at "sunrise".
- **Key knowledge 🟢:** at Chichén Itzá's El Castillo at the equinoxes, a shadow pattern looks like a serpent sliding down the stairs (whether this was designed on purpose is debated).
- **Int:** **Equinox Simulator** (§12 #5: drag the sun, the serpent shadow appears) + Arduino sim (LDR value meter, threshold slider).
- **Paths:** A *Plan the threshold logic* · B *Code & build* · C *Test in different light* & graph readings.
- **Lens 📜:** Psalm 113:3, "from the rising of the sun to the place where it sets, the name of the Lord is to be praised."
- **Clue:** "A threshold of 500 halved?" → 250 → as the clue, "the number of tens", 25 → the teacher displays 25 ÷ 5 = 5. *(The builder will simplify: clue = 5.)*

**FRI · Art — Papel Picado: Fold-and-Cut**
- **LI:** design a symmetrical cut-paper banner. **SC:** fold accurately; cut positive/negative shapes safely; explain the tradition.
- **Key knowledge 🟢:** papel picado is a **Mexican folk art from more recent centuries** (not Aztec), still made in towns like San Salvador Huixcolotla, Puebla; people link it to older paper traditions like amate.
- **Int:** **Papel Picado Simulator** (§12 #42: fold, draw cuts, unfold to reveal).
- **Paths:** A *Single sheet with a theme* · B *Class banner (one flag each)* · C *Teach the fold to a younger class*.
- **Lens ❤️:** Romans 12:15, celebrate with those who celebrate. Joy and community in art.
- **Prep:** 5 min (tissue/coloured paper, scissors).
- **Folio Seal VIII:** 5 · 7 · 2 · 5 → the folio shows two figures meeting, one in armour. **Intercept:** the Collector's "Spanish document" is shown, but something looks wrong…

### WEEK 9 — FOLIO IX · MEETING OF WORLDS
**Hononga Aotearoa:** first encounters in Aotearoa (1642, 1769) and two-perspective histories (Aotearoa NZ's Histories).

**MON · History — 1519–1521: Two Accounts of the Conquest**
- **LI:** compare different perspectives on the Spanish conquest of the Aztec Empire. **SC:** sequence the key events; explain why a small Spanish force won (allies, disease, divisions, technology); compare Spanish and Nahua accounts.
- **Key knowledge 🟢:** Cortés lands in 1519; **Malintzin** (La Malinche), a Nahua woman, interprets; tens of thousands of **Tlaxcalan and other Indigenous allies** join against the Mexica; meeting with **Moctezuma II** (Nov 1519); Moctezuma dies (1520); *La Noche Triste*; **smallpox** devastates the city; Tenochtitlan falls 13 Aug 1521 under Cuauhtémoc. Sources: Cortés' letters, Bernal Díaz, and the **Florentine Codex**, Nahua accounts gathered with the friar **Bernardino de Sahagún**.
- **Int:** **Two-Lens Viewer** (§12 #12: toggle Spanish ↔ Nahua account of the same moment); *Why Did Tenochtitlan Fall?* factor balance-scale.
- **Paths:** A *Two-perspective diary* · B *Causes balance model* · C *Hot-seat interviews* (Malintzin, a Tlaxcalan leader, a Spanish soldier, a Mexica mother).
- **Lens ❤️ Aroha + honest Mōhio:** Genesis 1:27 & Micah 6:8. Some who called themselves Christians did terrible wrongs; others, like **Bartolomé de las Casas**, risked everything to speak for Indigenous people. ❓ "How do we tell the truth when people from 'our side' did wrong?" 1 John 1:9: confession and repentance. **Tone:** grief, honesty, hope.
- **Clue:** "Year Tenochtitlan fell, last two digits" → 21 → "minus 2" → 19 (the largest single Maya digit).

**TUE · Geography — Climate Patterns: El Niño & Extremes**
- **LI:** explain climate patterns in South America and their links to NZ. **SC:** compare the Atacama and Amazon climates; explain El Niño simply; explain glacier retreat, greenhouse gases, mitigation & adaptation.
- **Key knowledge 🟢:** the Atacama is one of the driest places on Earth; El Niño was named by Peruvian fishermen because warm water arrived near Christmas ("the Christ child"), and it affects NZ weather too; Andes glaciers are shrinking and many cities rely on their meltwater.
- **Int:** *El Niño toggle* (ocean temperature map); *Climate Graph builder*; *Glacier retreat slider*.
- **Paths:** A *Climate report card* · B *Climate graph & annotations* · C *Weather broadcast* (El Niño year).
- **Lens 🌱:** Genesis 8:22 ("seedtime and harvest… will never cease") and responsibility for our part in caring for the climate.
- **Clue:** "Months in a year minus months of summer (3)?" → 9.

**WED · Science — Light: Reflection, Shadows & Obsidian Mirrors**
- **LI:** investigate how light travels and reflects. **SC:** explain that light travels in straight lines; investigate angles of reflection; explain shadows.
- **Key knowledge 🟢:** Aztecs polished **obsidian** (volcanic glass) into mirrors; shadows and sunlight at El Castillo; we see objects when light reflects into our eyes.
- **Int:** **Mirror Maze** (§12 #25: angle mirrors to send a beam to the chamber's codex, the 🟡 story moment); *Shadow Caster*.
- **Paths:** A *Investigation: angle in = angle out* · B *Mirror challenge* (light a target around a corner) · C *Shadow puppet play*.
- **Lens 📜:** John 8:12 & Matthew 5:14–16. Reflecting light: we don't make the light; we reflect it (like the Moon).
- **Prep:** 5 min (small mirrors, torches, protractors).
- **Clue:** "Angle in = 40°, angle out = ?" → 40 → "÷ 4" → 10.

**THU · Technology — Temple of Light: Design & Build**
- **LI:** design and build an interactive temple diorama. **SC:** write a brief with specs; plan circuits (+ optional code); build safely in a team.
- **Paths (team roles):** Designer · Electrician · Coder/Tester · Builder. Every student logs their role in the Engineering Journal.
- **Lens 🤲:** 1 Peter 4:10, use your gift to serve others.
- **Prep:** 10 min (shoe boxes/cardboard, all previous kit).
- **Clue:** "Specs in your brief?" → 3.

**FRI · Art — Woven Worlds: Huipil Motifs & Paper Weaving**
- **LI:** create a paper weaving with motifs inspired by Maya textiles. **SC:** weave over-under accurately; design meaningful motifs; explain that Maya weaving is a living tradition.
- **Key knowledge 🟢:** Guatemalan Maya women weave *huipiles* (blouses) on backstrap looms; designs can show a person's town and identity.
- **Int:** *Weave Simulator* (over/under pattern generator).
- **Paths:** A *Motif design sheet* · B *Paper weaving for the folio IX page* · C *Story-weave* (each strip = a part of your story).
- **Lens:** Colossians 3:12–14, "clothe yourselves with compassion…" Love binds everything together.
- **Prep:** 5 min (paper strips, glue).
- **Folio Seal IX:** 19 · 9 · 10 · 3 → the folio shows people of many nations. **Intercept:** exposed! Sofía finds the Collector's "Spanish document" uses a modern spelling, so it's a forgery. 🟡 He's on the run. Next week the class must decide where the codex should go.

### WEEK 10 — FOLIO X · THE CODEX COMES HOME
**Hononga Aotearoa:** **repatriation**: Te Papa's Karanga Aotearoa programme has brought home ancestral remains from overseas; returning taonga.
**Exhibition:** the Big Projects are shown to whānau.

**MON · History — Living Legacy: The Maya & Nahua Today**
- **LI:** explain how Maya and Aztec heritage continues today. **SC:** describe Maya and Nahua peoples & languages today; identify gifts to the world (foods, words, ideas); reflect on change & continuity.
- **Key knowledge 🟢:** millions of Maya people live in Mexico, Guatemala and Belize and speak around 30 Mayan languages; over a million people speak Nahuatl; words from Nahuatl: *tomato, chocolate, avocado, chilli, coyote, axolotl*; foods: maize, cacao, vanilla, tomatoes, chillies.
- **Int:** *Gifts to the World* map (foods spread worldwide); *Word Origins* game.
- **Paths:** A *Museum Case label* (Big Project finish) · B *Museum Case model* · C *Guided tour script*.
- **Lens 📜/🌱:** Revelation 7:9, every nation, tribe, people and language worshipping together. ❓ "Who will be there? (Maya, Nahua, Māori, Kiwi, Spanish… us!)"
- **Clue:** "Number of Nahuatl words on the slide?" → 6.

**TUE · Civics — Rights & Taonga: Who Should Own the Past?**
- **LI:** explain the rights of Indigenous peoples to their heritage and plan a campaign. **SC:** explain one article of UNDRIP; weigh perspectives on museum ownership (e.g. Moctezuma's headdress in Vienna); create a campaign for the codex's future.
- **Key knowledge 🟢:** the UN Declaration on the Rights of Indigenous Peoples (2007; NZ endorsed it in 2010) includes rights to cultural heritage; debates about returning objects; NZ's repatriation work.
- **Int:** *Ownership Debate Scale*; **the Codex Decision** (§12 #13: the class votes on options with reasons: sell / keep in a big museum abroad / return to a Maya community museum. Results feed the finale).
- **Paths:** A *Campaign letter* · B *Campaign poster* · C *Campaign speech/video*.
- **Lens 🌱 Pānga:** Micah 6:8, "act justly". Doing justice when it costs something.
- **Clue:** "Year NZ endorsed UNDRIP, last digit" → 0 (shell!).

**WED · Science — Powering the Future + Fair Test Expo**
- **LI:** evaluate energy sources and share investigation findings. **SC:** compare renewable and non-renewable sources; explain lithium & copper's role and impacts; present a fair test clearly.
- **Key knowledge 🟢:** the Atacama has some of the strongest sunlight on Earth (big solar farms); the "lithium triangle" (Chile, Argentina, Bolivia) supplies battery lithium; mining uses water in dry places, which affects Indigenous communities.
- **Int:** *Energy Mix Builder* (choose sources for the camp, see emissions & impacts); *Expo timer*.
- **Paths:** Big Project *My Fair Test* presentations (A poster · B demo · C talk).
- **Lens 🌱:** Genesis 2:15 & Matthew 22:39, stewardship and loving our neighbours who live where batteries begin.
- **Clue:** "Countries in the lithium triangle?" → 3.

**THU · Technology — Temple of Light: Test, Evaluate & Showcase**
- **LI:** test and evaluate an outcome against the brief. **SC:** test each spec; gather stakeholder feedback; plan improvements.
- **Int:** *Evaluation Matrix* (specs × tests); *Showcase run-sheet*.
- **Paths:** A *Evaluation report* · B *Final fix & demo* · C *Showcase presenter*.
- **Lens ✨:** Matthew 5:16, "let your light shine… that they may glorify your Father." Our temple of light isn't for our glory.
- **Clue:** "Specs met out of 3?" → the team's score (aim 3).

**FRI · Art — Completing My Codex & the Exhibition**
- **LI:** complete, present and reflect on a 10-page codex. **SC:** finish all pages to a high standard; write an artist statement; give & receive kind, specific feedback.
- **Paths:** A *Artist statement* · B *Final page: "My Story in God's Story"* · C *Exhibition docent*.
- **Lens ✨ Soli Deo Gloria:** Psalm 115:1, *"Not to us, Lord, not to us, but to your name be the glory."* The Collector wanted glory and gold. We return the codex and give God the glory.
- **FINAL SEAL X:** all 10 folios + the class decision → the **Finale cinematic** (§12 #14): the codex is carried to a (🟡 fictional) community museum in Petén. Dr Canul reads the last folio: 🟡 a scribe's blessing of maize, rain and time. *La Golondrina* flies home to Aotearoa. Credits roll with every student's name (typed in by the teacher; stored on the device only) and "Soli Deo Gloria".

---

# 10. APP DESIGN — "Layered Paper, Carved Stone, Living Light"

## 10.1 Art direction
**Not "kids' craft".** The look is **museum-grade cut-paper diorama**: think a high-end museum exhibition or an editorial-magazine illustration. Strict rules:
- **Depth over cuteness:** 4–7 parallax paper layers per scene with real cast shadows (multi-stop `box-shadow`/`filter: drop-shadow` tuned to sit low and soft, never cartoony outlines).
- **Real paper texture:** subtle fibre noise (SVG `feTurbulence`), **torn amate edges** (SVG mask paths), slight warm vignette.
- **Geometric discipline:** Mesoamerican stepped-fret, chevron and grid motifs as **structural framing** (borders, dividers, progress bars). These are used architecturally, not scattered as decoration.
- **Restraint:** one hero image per slide, generous negative space, a maximum of 3 colours from the palette per slide plus neutrals.
- **No faces of deities or sacred imagery used as decoration.** Gods are only shown in context, inside learning content.
- **Science and Tech days get a "living light" layer:** glowing **copper traces** run across the amate paper like a circuit board, pulsing with current. It's the term's visual signature: *ancient paper + electric light.*

## 10.2 Colour system (CSS tokens)
| Token | Hex | Use |
|---|---|---|
| `--obsidian` | `#14110F` | Deep background (presenter mode default: dark rooms project better) |
| `--basalt` | `#2A2420` | Panels on dark |
| `--amate` | `#E9DCC0` | Light paper surface |
| `--amate-deep` | `#C9A97A` | Aged paper, secondary surface |
| `--cacao` | `#5A3825` | Text on paper, borders |
| `--jade` | `#1F7A5A` | History accent, success |
| `--maya-blue` | `#2E9FB0` | Geography accent, water |
| `--quetzal` | `#0F5E47` | Forest, deep green |
| `--cochineal` | `#B3262E` | Art accent, alerts, the Collector |
| `--ochre-gold` | `#D9A23A` | Highlights, cacao beans, awards |
| `--copper` | `#C46A3A` | Tech accent, circuit traces |
| `--spark` | `#7FF3FF` | Science glow (electric current only) |
| `--turquoise` | `#2FB3A6` | Aztec accent |

**Subject colourways:** Mon *Jade + Gold on Basalt* · Tue *Maya Blue + Quetzal on Amate* · Wed *Obsidian + Spark* · Thu *Copper + Ember on Basalt* · Fri *Cochineal + Turquoise on Amate*.
**Projection rule:** all text passes WCAG AA at minimum, AAA for body text (projectors wash colours out). The palette is tested in a "projector simulation" mode (reduced contrast and saturation) before sign-off. Circuit states never rely on red/green alone; they also use shapes and labels.

## 10.3 Typography (large, thick, legible from the back row)
| Role | Font (Google Fonts) | Settings |
|---|---|---|
| **Display / slide titles** | **Fraunces** | weight 900, optical size 144, SOFT 30–50, tight tracking (−0.02em); 110–180 px at 1080p |
| **Labels, numbers, kickers** | **Big Shoulders Display** | weight 800–900, uppercase, +0.08em tracking (a carved-stone signage feel) |
| **Body & teacher notes** | **Atkinson Hyperlegible** | 30–40 px on slides (minimum 28 px); 16–18 px in lesson-plan view |
| **Code (Arduino)** | **JetBrains Mono** | 26–32 px on slides |

**Type scale (1920×1080 base, fluid with `clamp()`):** 180 / 120 / 80 / 56 / 40 / 32 / 28. A maximum of ~35 words of body text per slide; the detail lives in the presenter notes.

## 10.4 Motion principles
- **Library:** GSAP 3 (from cdnjs; all plugins are now free: SplitText, DrawSVG, MorphSVG, Flip), plus plain CSS/Web Animations for the small stuff.
- **Signature transition: the Codex Fold.** Slides change by folding like a screenfold page (3D `rotateY` on a hinge with a shadow sweep). Used between *phases*; within a phase, quicker "paper slide" transitions.
- **Easing:** paper should feel weighty: `power3.out` for entrances, a slight overshoot (`back.out(1.2)`) for paper "lift", never bouncy-cartoony.
- **Entrances:** layers arrive back-to-front with a 60–90 ms stagger; titles reveal by SplitText line masks (like ink pressing into paper).
- **Mouse parallax:** scene layers shift 2–18 px according to depth (pointer position), with damped lerp.
- **Hover:** paper cards lift (translateY −6 px, scale 1.02, the shadow deepens and spreads); glyphs get an ochre ink glow; copper traces pulse toward the cursor on Tech slides; buttons have a stamped-press active state.
- **Ambient life:** slow drifting dust motes in light shafts, leaves turning, gentle water shimmer: subtle and pausable.
- **Reduced motion:** respects `prefers-reduced-motion`, plus a manual toggle (cross-fades instead of folds, no parallax).
- **Performance:** 60 fps on a school MacBook driving an Apple TV. Animate transform/opacity only; lazy-load each lesson; WebP images; pause offscreen animations.

## 10.5 Sound (optional, off by default)
WebAudio-synthesised (no audio files): paper rustle on folds, stone grind on seal unlocks, a soft electric hum and zap for circuits, a slit-drum "tok" for correct answers. A master volume is on the toolbar.

## 10.6 Procedural-first rule
Every scene must look finished **without** the ChatGPT images (SVG/CSS cut-paper layers built in code). The images *upgrade* scenes; they are never required. This lets you build and teach before all the images are made.

---

# 11. APP ARCHITECTURE

## 11.1 Tech stack
- **Static site**: HTML + CSS + vanilla JS (ES modules). No build step, so it's easy to edit in the GitHub web UI. Hosted on **GitHub Pages or Netlify**, and also runs offline by opening `index.html`.
- **Libraries (cdnjs, pinned versions):** GSAP 3 (+ plugins), html2pdf.js (direct PDF download). Optional: Lottie is *not* needed.
- **Storage:** `localStorage` only (cacao scores, Quick-Mark results, Glyph Wall, settings, class names). Everything is wrapped in try/catch with an **Export / Import backup (JSON)** button. No student data leaves the device.
- **No logins.** It's a teacher tool. An optional 4-digit teacher PIN hides the lesson plans/marks view if the screen is shared.

## 11.2 Screens
1. **Expedition Hub (home):** a cut-paper map of the Americas with *La Golondrina*'s route. 10 folio seals (locked/unlocked). Term progress, a "Today's lesson" button (auto-picks by date if the term start date is set).
2. **Week View:** 5 day-cards (Mon–Fri, colour-coded) + week story, prep summary, Week Pack PDF.
3. **Lesson Launcher:** LI/SC, timings, prep checklist (✓), "Present", "Lesson Plan PDF", "Rubric PDF", "Quick-Mark".
4. **Presenter Mode:** fullscreen slides. **Keyboard / clicker:** → / Space / PageDown = next; ← / PageUp = back; **N** = notes overlay; **T** = timer; **P** = picker; **B** = black/calm screen; **F** = fullscreen; **G** = Glyph Wall; **C** = cacao board; number keys jump to a phase. Works with a presentation clicker or the Ajazz stream deck (keys mapped to these shortcuts).
5. **Presenter View (dual screen):** press **D** to open an audience window (send it to the Apple TV / projector). The laptop shows the current and next slide, notes, script and timer. The two windows stay in sync via `BroadcastChannel`.
6. **Lesson Plan View:** an ERO-ready document for each lesson, generated from the same data as the slides (so they never drift apart).
7. **Rubric & Quick-Mark:** a grid of students/teams × rubric rows; tap a level; notes; CSV/PDF export.
8. **Planning Docs:** Unit Plan, Curriculum Map (§3), Term Overview (§8), Core Rubrics (§7.3), Kit List (§14), all printable/PDF.
9. **Settings:** class name, teacher name, school (default *[school name]*), term start date, teams, student names (optional), sound, motion, PIN, data backup.

## 11.3 Lesson plan document (what ERO sees)
Each plan contains: header (subject, week, date, class, duration 50 min) · curriculum codes + **2027 required-content coverage** · LI & SC · key vocabulary (incl. te reo Māori / Spanish / Nahuatl / Mayan words with pronunciation) · prior knowledge · resources & prep (with time) · **sequence with timings** (Transmission / Excavate / Paths / Lens / Decode) · differentiation (supported / ESOL / learning support / Flying) · assessment (what to look for, rubric link, evidence to collect) · Key Competencies · Te Tiriti / Hononga Aotearoa link · Christian Character link (pillar + text) · safety (where relevant) · **teaching-as-inquiry reflection box** (blank on print) · next steps.

## 11.4 Folder structure
```
maya&aztecs/
├── Maya_Aztecs_App_Blueprint.md      ← this file
├── ChatGPT_Image_Prompts.md          ← (Phase 1) full prompt list, copy-paste ready
├── index.html                        ← Expedition Hub
├── present.html                      ← Presenter (audience) window
├── css/  tokens.css · base.css · paper.css · slides.css · print.css
├── js/
│   ├── app.js · router.js · store.js · presenter.js · sync.js · pdf.js · quickmark.js
│   ├── engine/  slide-types.js · transitions.js · parallax.js · audio.js
│   └── interactives/  (one module per §12 item, e.g. maya-numbers.js, circuit-sandbox.js, arduino-sim.js …)
├── data/
│   ├── term.js            (weeks, story beats, characters, teams)
│   ├── curriculum.js      (code key, coverage map)
│   ├── rubrics.js         (core rubrics)
│   └── weeks/ week01.js … week10.js   (lessons → slides, notes, plan fields, rubric)
├── assets/  img/ (WebP) · svg/ · fonts/ (optional self-hosted)
└── README.md             (how to host, use, edit)
```

## 11.5 Lesson data schema (summary)
```js
{
  id: "w01-mon", week: 1, day: "mon", subject: "history",
  title: "Who Were the Maya and Aztecs?", guide: "itzel",
  codes: ["SS-H","SS-P","EN"], coverage: "Y5 History practices …",
  li: "…", sc: ["…","…","…"], vocab: [{w:"codex", say:"KOH-deks", def:"…"}],
  prep: { minutes: 0, items: [] }, safety: null,
  paths: [{ id:"A", name:"The Scribe", product:"…", steps:["…"], supported:"…", flying:"…" }, …],
  lens: { pillar:"mohio", look:"…", word:{ref:"Acts 17:24-27", paraphrase:"…"}, talk:[{q:"…", listen:"…"}], live:"…" },
  clue: { prompt:"…", answer: 2 },
  rubric: [{ sc:0, code:"SS-H", developing:{desc:"…", example:"…"}, achieved:{…}, flying:{…} }, …],
  differentiation: {…}, kc: [...], hononga: "…", inquiry: "…",
  slides: [{ type:"transmission", phase:"transmission", content:{…}, notes:[{k:"SAY", t:"…"}, …] }, …]
}
```

## 11.6 Slide types (reusable)
`cinematic` · `transmission` (guide message, typewriter + radio crackle) · `glyph-check` (3 retrieval Qs with reveal) · `li-sc` · `content` (title + visual + ≤35 words) · `interactive` (mounts a §12 module) · `discussion` (big question + turn-and-talk timer) · `path-board` (3 paths + countdown) · `lens` (4 moves) · `decode` (clue entry with Maya numeral keypad) · `folio-seal` (Friday lock + unfold) · `intercept` (the Collector's message, glitch style) · `hononga` (NZ connection) · `fact-or-story` badge on all of them.

---

# 12. INTERACTIVE SLIDE LIBRARY (all teacher-run)

| # | Interactive | Used | What the teacher does / what it teaches |
|---|---|---|---|
| 1 | **Codex Unfold** (opening cinematic & Folio reveals) | W1 + every Fri | 3D screenfold opens panel by panel; paper physics; the term's signature moment |
| 2 | **Deep Timeline** | W1, reused | Horizontal scroll/zoom 2000 BCE → today; eras as paper strips; click events |
| 3 | **Maya Number Machine** | W3, reused in clues | Drag dots/bars/shells; base-20 place-value tower; type a number → glyph; quiz mode |
| 4 | **Calendar Round Gears** | W4 | Interlocking 260/365 wheels turning; today's Long Count & Calendar Round computed live (GMT correlation) |
| 5 | **Equinox Serpent** | W8 Thu | Drag the sun's position; shadow triangles form on the El Castillo stairs |
| 6 | **LiDAR Reveal** | W5 | Drag the laser beam over the canopy; hidden city structures appear |
| 7 | **Tenochtitlan Builder** | W6 | Step-build: lake → island → chinampas → causeways → aqueduct → temples |
| 8 | **Market Walk** | W7 | Clickable cut-paper market stalls with real goods and facts |
| 9 | **Tlatelolco Trading Game** | W7 Tue | Barter vs cacao rounds; teams; counterfeit-bean twist |
| 10 | **Flight Path Globe** | W1 Tue, every Tue | Stylised globe/map; *La Golondrina* flies the route; lat/long overlay |
| 11 | **Templo Mayor Layers** | W8 | Peel the 7 building phases |
| 12 | **Two-Lens Viewer** | W9 | Toggle Spanish ↔ Nahua accounts of the same scene; compare panel |
| 13 | **Codex Decision** | W10 Tue | Class vote with reasons; results feed the finale |
| 14 | **Finale Cinematic + Credits** | W10 Fri | Codex returned; flight home; class names; Soli Deo Gloria |
| 15 | **Plate Slide & Tsunami Clock** | W2 Tue | Push plates → mountains/quakes; wave front Chile → NZ |
| 16 | **Karst & Cenote Ring** | W3 Tue | Cross-section animation; crater ring overlay |
| 17 | **Rainforest Layer Explorer** | W4 Tue | Hover layers; light %, animals, NZ compare |
| 18 | **Deforestation Time-lapse** | W5 Tue | Slider: forest → fishbone pattern |
| 19 | **Altitude Climber & Quipu Knotter** | W8 Tue | Slider climbs the Andes; tie knots = numbers |
| 20 | **Charge Lab** | W1 Wed | Rub balloon; electrons transfer; attract/repel tokens |
| 21 | **Circuit Sandbox** ⭐ | W3–W5 Wed, Thu | Drag components; animated current; open/closed; series/parallel; brightness; short-circuit warning; standard symbols toggle |
| 22 | **Conductor Tester** | W4 Wed | Drag materials into the gap; result + explanation |
| 23 | **Electromagnet Coil Slider** | W7 Wed | Coils/current → field strength → clips lifted; graph plot |
| 24 | **Generator Crank & Dam** | W8 Wed | Spin → voltage → bulb; dam cross-section |
| 25 | **Mirror Maze** | W9 Wed | Rotate mirrors; ray tracing; angle readouts |
| 26 | **Energy Mix Builder** | W10 Wed | Choose sources; impacts meters |
| 27 | **Eel Discharge & Battery Inside** | W2 Wed | Stacked cells add voltage; chemical → electrical |
| 30 | **Design Process Wheel** | Thu W1, reused | Unfolding paper wheel; current stage highlight |
| 31 | **Arduino Simulator** ⭐ | Thu W4–W10 | Virtual Uno + breadboard; blocks ↔ C code; step-through with line highlight; LED, button, piezo (WebAudio), LDR (slider), servo; "bug" mode for debugging lessons |
| 32 | **Paper Circuit Planner** | Thu W2 | Draw copper-tape path on a card template; continuity check |
| 33 | **Switch X-ray** | Thu W3 | Cross-sections of switch types |
| 40 | **Glyph Draw-Along** | Fri W1, reused | SVG stroke-by-stroke drawing guides, speed control |
| 41 | **Dye Lab** | Fri W2 | Colour-mixing simulator + Maya Blue reveal |
| 42 | **Papel Picado Simulator** | Fri W8 | Fold, cut, unfold; symmetry |
| 43 | **Symmetry Mirror & Pattern Repeater** | Fri W3, W6 | Live mirror drawing; block/half-drop/mirror repeats |
| 44 | **Weave Simulator** | Fri W9 | Over/under pattern generator |
| 50 | **Toolbar widgets** | All | Timer, picker, cacao board, Glyph Wall, calm screen, Fact-or-Story badge |

**Interactive quality bar:** every one must (1) teach a concept better than a picture, (2) be operable with mouse/trackpad from the teacher's laptop, (3) have large hit targets (≥ 64 px), (4) include a "reset" and a "show answer" button, and (5) come with presenter notes explaining what to click and what to ask.

---

# 13. ARDUINO & CIRCUITS KIT

## 13.1 Two tracks (every Tech lesson runs on either)
| Track | What | Cost | Prep |
|---|---|---|---|
| **No-kit track** | In-app Circuit Sandbox + Arduino Simulator on the projector; hands-on with card, foil, copper tape, LEDs, coin cells | Low | Minimal |
| **Arduino track** (W4–W10) | Arduino Uno (or compatible) starter kits, 1 per team of 4–5 (6 kits) | Moderate | One-off setup (install Arduino IDE or use the free web-based Arduino Cloud Editor / Tinkercad) |
| *(Alternative)* | BBC micro:bit + MakeCode blocks | Low–moderate | Very easy; the app's code pages can show MakeCode equivalents if chosen |

## 13.2 Arduino per-team kit
Arduino Uno + USB cable · half breadboard · 10 LEDs (red, yellow, green, white) · 10 × 220 Ω resistors · 2 push buttons · 1 piezo buzzer · 1 LDR + 10 kΩ resistor · 1 micro servo (SG90) · 20 jumper wires · a storage box labelled with the team animal.

## 13.3 Code delivery
Every sketch is shown in the app as **colour-coded block view + C code side by side**, with a "Copy code" button and a downloadable `.ino` file. Each sketch has an intentional-bug version for debugging lessons.

## 13.4 Safety (on every Wed/Thu plan)
- **Low voltage only** (AA/AAA, 9 V maximum, USB). **Never** mains sockets; explain why (Wed W1 & W10).
- **Coin (button) cells:** serious harm if swallowed. Count them out and back in; keep them in a labelled lidded container; never send them home; dispose of used cells safely.
- Short circuits make wires and cells hot: the "touch briefly" rule for electromagnets and potato cells.
- Scissors and craft-knife rules (Art); only the teacher uses craft knives.
- Latex-free balloons option; food allergies (lemons/potatoes, cacao demos).

---

# 14. PREP & RESOURCES

## 14.1 The "buy once" Term Kit
Expedition Journals (1 exercise book each) · balloons · copper tape (2 rolls) · 40 × 5 mm LEDs · 30 × CR2032 coin cells · AA battery packs + crocodile-clip leads (12 sets) · small bulbs & holders (12) · insulated wire · iron nails · paper clips · magnets (bar) · needles & corks · small mirrors (12) · torches (6) · DC motors (6) · galvanised nails + copper strips · split pins · card (A3/A4 assorted), tissue paper, coloured paper, magazines · tea bags, coffee, turmeric, beetroot/red cabbage (for dyes) · watercolours/acrylics, brushes · B/2B pencils, erasers · glue sticks, PVA · scissors · shoe boxes (collected from home in W7) · optional 6 Arduino kits.

## 14.2 Prep load per lesson
Each lesson shows a **⏱️ prep badge** (0 / 5 / 10 min) and a one-tap checklist. **Target: the average is under 5 minutes; nothing is over 10.** No photocopying is needed (everything is projected). Optional printables are one click (templates: blank map, timeline strip, card templates, calendar-wheel circles, rubric student sheets).

## 14.3 Weekly prep summary
Shown on the Week View: everything needed Mon–Fri on one list, grouped by "already in the Term Kit" and "bring from home".

---

# 15. CHATGPT IMAGE PROMPTS

## 15.1 Style lock (paste at the start of every ChatGPT image request)
> **STYLE LOCK — The Fifth Codex.** Sophisticated layered cut-paper diorama illustration, museum-exhibition quality, not childish. Five to seven physical paper layers with soft, realistic cast shadows between them, giving real depth. Textured handmade amate bark paper and matte card with visible fibres and subtly torn edges. Palette strictly limited to: obsidian black #14110F, warm amate cream #E9DCC0, aged paper tan #C9A97A, cacao brown #5A3825, jade green #1F7A5A, Maya blue #2E9FB0, deep quetzal green #0F5E47, cochineal red #B3262E, ochre gold #D9A23A, copper #C46A3A. Mesoamerican geometric motifs (stepped frets, chevrons) used as framing only. Cinematic lighting from one side, gentle atmospheric haze between layers. Precise, elegant, editorial. No text, no letters, no logos, no watermarks. No cartoon faces, no googly eyes, no thick black outlines, no glossy 3D plastic look. Respectful and historically grounded.

**Format notes:** request **16:9 landscape (1792×1024 or larger)** for scenes; **transparent background PNG** for cut-out layers and characters; **square** for artefact cards. Save as `wXX-name.png`; the builder converts to WebP.

## 15.2 Image list (full copy-paste prompts in `ChatGPT_Image_Prompts.md`, delivered in Phase 1)
**Characters (transparent PNG, waist-up, ¾ view, dignified, fictional people):** Dr Itzel Canul · Capt. Sofía Quispe · Mateo Ríos · Doña Rosa Ajpop · The Collector (silhouette only, with the silver beetle seal).

*Example prompt: Dr Itzel Canul.*
> [STYLE LOCK] + A fictional Guatemalan archaeologist and epigrapher in her early 40s, of Yucatec Maya heritage, warm brown skin, dark hair tied back with a few greys, wearing a practical khaki field shirt with rolled sleeves, a woven Maya-pattern strap across her shoulder, holding a magnifying loupe. Calm, intelligent, confident expression. Waist-up, three-quarter view, built from layered cut paper with subtle shadows. Transparent background.

**Hero scenes (16:9, one per week):** W1 the storm-broken chamber beneath a fallen ceiba · W2 a milpa field at dawn below a Preclassic pyramid · W3 a scribe's workshop by lamplight · W4 an observatory at night under the Milky Way (Caracol-style) · W5 a jungle-swallowed city with laser lines · W6 Tenochtitlan on the lake at sunrise · W7 the Tlatelolco market · W8 the Templo Mayor's twin shrines against a giant sun (no violence) · W9 two worlds meeting on a causeway, Spanish ships on the horizon, in a sombre tone · W10 a community museum in a Guatemalan town, people gathered, golden light.

**Subject headers (16:9 banners):** History stone stela frame · Geography map table with floatplane · Science dark chamber with copper circuit glow · Technology workbench with Arduino on amate paper · Art studio with dyes, brushes and folded codex.

**Artefact cards (square, "artistic reconstruction" style, clearly not photos):** Olmec colossal head · Maya stela · codex page · jade mask (generic, not a specific sacred object) · Sun Stone (stylised) · cacao pod & beans · rubber ball · obsidian mirror · chinampa · quipu · teponaztli drum · huipil textile · papel picado banner · axolotl · electric eel · potato plants of the Andes · LiDAR jungle view.

**Map layers (transparent):** stylised Latin America relief map in layered paper; the Pacific route NZ ↔ Mexico; the Andes; the Amazon.

**Rules:** no photos of real people, no real-artefact photo forgeries (label them "artistic reconstruction"), no gore, no deity imagery as decoration, and no images that imitate a specific museum's photograph.

---

# 16. BUILD PLAN

| Phase | What gets built | You review |
|---|---|---|
| **0 — This plan** | ✅ This blueprint | Answer the §0 decisions; change anything |
| **1 — Engine + design system + Week 1 vertical slice** | Tokens, typography, paper rendering, transitions, presenter mode (single and dual screen), notes, toolbar, store, PDF export, Lesson Plan view, Rubric + Quick-Mark; **all 5 Week 1 lessons fully built** with their interactives; the `ChatGPT_Image_Prompts.md` file | Teach or click through Week 1; check the look, the scripts, the PDFs |
| **2 — Weeks 2–5** | Lesson data expanded to Week 1 depth; interactives #3–#6, #15–#18, #20–#22, #27, #30–#33, #40–#41, #43 | Review per week |
| **3 — Weeks 6–10** | Remaining lessons & interactives; Big Projects; Exhibition mode; finale cinematic | Review |
| **4 — Polish & QA** | Image slots wired; projector-contrast test; reduced-motion pass; print/PDF check for every plan & rubric; fact-check pass (§17); offline test; README | Final sign-off |

**Quality checks at every phase:** (1) an accuracy pass: every 🟢 fact traced to a reliable source; (2) a curriculum-code pass against Tāhūrangi; (3) a **cold-read test**: could someone who has never taught run this lesson from the slides and notes alone?; (4) the lens test from §4.1; (5) a performance test on a MacBook + Apple TV; (6) a screenshot review of every slide type.

---

# 17. ACCURACY & SENSITIVITY GUARDRAILS (rules for the builder)

1. **NZ English** spelling throughout (colour, centre, organise).
2. **Fact vs story is always badged.** No invented facts presented as real. Numbers that are estimates are labelled ("about", "estimates suggest").
3. **Maya ≠ Aztec ≠ Inca.** Never blend them. The Maya are a living people, not a "vanished" civilisation; the Classic *cities* declined, the people didn't disappear.
4. **"Aztec"** is used as the common name, with **Mexica** introduced as the people's own name for themselves.
5. **Human sacrifice:** state it truthfully and briefly; explain the belief behind it (the Fifth Sun); no graphic description, no images of violence, no "savages" framing. Compare respectfully with the Gospel (Micah 6, Acts 17, Hebrews 10). The tone is compassion, not superiority.
6. **The Conquest:** honest about violence, disease and injustice; name Indigenous allies and agency (Tlaxcala, Malintzin); show Christian failure *and* faithfulness (Landa vs Las Casas and Sahagún). No glorifying conquerors.
7. **Religion & culture:** Maya and Aztec beliefs are described accurately and respectfully, without mockery. The Popol Vuh is treated as a respected cultural text when compared with Genesis. Some students may have Latin American heritage; invite them to share, never put them on the spot.
8. **Bible:** references are given so the teacher reads from the school's translation; on-screen paraphrases are marked as paraphrases. Archaeology "illuminates", it doesn't "prove". Where Christians interpret differently, say so.
9. **The 2012 myth** is debunked calmly using evidence. Avoid fear-based content.
10. **Earthquake content (W2 Tue):** a calm warning given beforehand; Canterbury whānau may have trauma; focus on helpers & preparedness; no disaster footage.
11. **Te ao Māori:** Hononga Aotearoa content stays general and is respectfully framed. Local iwi/hapū-specific content is flagged for checking with the school's Māori lead or Ngāi Tahu / local rūnanga. No pan-Māori generalisations.
12. **Images:** no real people, no fake "photos" of real artefacts, no deity faces as decoration.
13. **Privacy:** student names (if entered) stay in the browser on the teacher's device only; Export/Import for backup; nothing is sent anywhere.
14. **Electrical safety** is on every relevant plan (§13.4).

---

*End of blueprint. Next step: your answers to §0 → Phase 1.*
*Soli Deo Gloria.*
