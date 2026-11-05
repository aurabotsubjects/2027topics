# 🏺 THE ROYAL ROAD
## Persia: empire, cities, creatures and the God of all nations
### Master Blueprint · Teacher Presentation App + Complete Term Programme
**Years 5–6 · Aotearoa New Zealand Curriculum · Christian Lens · 10 weeks × 5 subjects × 50-minute lessons**

> *Soli Deo Gloria — To God Alone the Glory*

---

## 📍 READ THIS FIRST — What this file is and what you need to decide

This is the **planning and mapping document** for rebuilding the Persia term in the same style as *The Fifth Codex* (Maya & Aztecs) and *The Braided Map* (Hakatere). Once you approve it (or change it), it becomes the build recipe. The lesson data, slides, lesson plans, rubrics, path cards and sources pages all come from what is written here.

**What changes from the old Persia app (*The Royal Road Race*)**

| | Old app | New app |
|---|---|---|
| Who uses it | Teacher screen **plus student logins** (Firebase, live quiz) | **Teacher-run only**, like The Fifth Codex. No logins, no student data online |
| Week shape | Mon History · Tue Geography · Wed Science · **Thu Art** · **Fri Showdown quiz** | Mon History · Tue Geography · Wed Science · **Thu Technology (new)** · **Fri Art** |
| Lesson length | 60 minutes | **50 minutes**, the same fixed shape every day |
| Assessment | Scout / Courier / Captain / Master | **Developing · Achieved · Flying** rubrics with example work, like the other two apps |
| Student choice | Victory Lap paths on Fridays only | **Choose Your Path** (A · B · C) in **every** lesson, with printable **Path Cards** |
| Sources | Few | **Every fact sourced**, labelled by type, on every lesson plan's last page |
| Extras | Live quiz, Fate cards | **Vocabulary pop-ups**, PDF lesson plans, Unit Plan, Quick-Mark, 🔬 side notes |

**What stays:** the story world that your class may already know: **Shirin the Scribe, Farhad the Caravan Master, Gandom the camel, the Shadow Courier (Zal)**, the six caravan teams, **Darics** as points, the **Seal of the Kings** in ten fragments, and the final message from **Proverbs 2:4**. All the existing images (characters, teams, week heroes, animal cards, coins, medals) can be reused (see D6).

**The subjects**

| Day | Subject | Topic |
|---|---|---|
| Mon | **History** (main topic) | **The Persians**: Elamites and Medes, Cyrus, Darius, Xerxes, the Greeks, Alexander, Parthians and Sasanians, with the **biblical history of Persia** (Isaiah, Daniel, Ezra, Nehemiah, Esther, the Magi, Acts 2) taught alongside the other sources |
| Tue | **Geography / Social Science** | **Settlements and Cities**: why people settle where they do, royal capitals, road and water towns, bazaars, walls, hazards and rebuilding, and cities today (urbanisation) |
| Wed | **Science** | **Animal communities and habitats**: habitats, food chains and webs, adaptation, wetlands, relationships between species, endangered animals and recovery |
| Thu | **Technology** *(my suggestion)* | **Desert Engineers → Royal Road Messages**: Weeks 1–5 build and test models of Persian inventions (qanat, windcatcher, ice house, arches); Weeks 6–9 code the Royal Road (algorithms, secret codes, binary, Scratch); Week 10 showcase |
| Fri | **Art** *(my suggestion)* | **Art of the Empire**: rosettes and symmetry, cylinder seals, relief carving, glazed-brick printmaking, gold embossing, paradise gardens, carpets, miniature painting and the Magi's night sky, then the Exhibition |

**Why these Technology and Art topics?** Both come straight out of the History, Geography and Science, so the week holds together. Persian engineers really did solve desert problems with water tunnels, wind towers and ice houses [S15][S16][S17], which makes a natural **design-and-build** unit (NZC Technology, Level 3). The Royal Road was famous for its relay messengers [S5], which leads naturally into **algorithms and coding** (Digital Technologies, Progress Outcomes 2–3 [S37][S38]). Persian art survives in museums around the world (the British Museum, the Louvre, the Met, the Hermitage [S1][S11][S12][S13][S14]), so every Art lesson starts from a real object.

**Every fact has a source.** Key facts carry a tag like **[S12]**, pointing to the numbered list in **§18 Sources**. The app shows the same sources on each Week page, on each lesson page and on the last page of every lesson-plan PDF, labelled by type (museum, government, university, encyclopaedia and so on). Facts marked **🔎** still need a source checked during the build before they go on a slide.

**What's in it**

| § | Section | What it gives you |
|---|---|---|
| 0 | Decisions for you | The choices I need you to make before building |
| 1 | The vision | What the term should feel like for students |
| 2 | The story world | Characters, teams, Darics, the weekly mystery |
| 3 | Curriculum framework | 2027 NZ curriculum mapping for every subject |
| 4 | Christian lens | The biblical history of Persia and how faith runs through the term |
| 5 | The 50-minute lesson | The fixed lesson shape, scripting, vocab pop-ups |
| 6 | Student agency | Choose Your Path, Path Cards and the Big Projects |
| 7 | Assessment & rubrics | Developing / Achieved / Flying, with example work |
| 8 | Ten-week overview | The whole term on one page |
| 9 | Full lesson programme | Week 1 in full as the template; Weeks 2–10 as lesson cards |
| 10 | App design | Art direction, colour, type, motion |
| 11 | App architecture | Screens, data, PDFs, reuse of the engine |
| 12 | Interactive slide library | Every animation or interactive to build |
| 13 | Engineering & coding kit | Materials, the Scratch track and the no-device path |
| 14 | Prep & resources | Term kit and weekly prep |
| 15 | Image plan | What to reuse, what to generate, and the style lock |
| 16 | Build plan | Phases and review points |
| 17 | Accuracy & sensitivity guardrails | Rules the builder must follow |
| 18 | Sources | Every reference, with its web address and type |

---

# 0. DECISIONS (please confirm or change)

| # | Decision | Recommended default | Why it matters |
|---|---|---|---|
| D1 | **App name** | **The Royal Road** (subtitle: *Quest for the Seal of the Kings*). Alternatives: keep *The Royal Road Race*; *The Seal of the Kings*; *Shirin's Scroll* | Keeps the name the class may know, but drops "Race" because the live quiz race is gone. |
| D2 | **Folder and repo** | New app in **`PersiaNew`** (this folder). The old app in `Persia` is left untouched until the new one is approved. | Nothing you have now is lost. |
| D3 | **Technology topic** | **Desert Engineers (W1–5) → Royal Road Messages (W6–9) → Showcase (W10)**, as above. Every coding lesson also has an **unplugged + in-app block simulator** path for when devices aren't free. | Design-and-build covers Technological Practice and Knowledge; the coding half covers Digital Technologies [S37][S38]. The models also reinforce Wednesday's science (heat, insulation, air movement). |
| D4 | **Art topic** | **Art of the Empire**, one real museum object or art form each week (see §8), ending in a **Persia Exhibition** for whānau in Week 10. | Each lesson starts from a real, sourced artwork, and the Exhibition shows the term's learning to families. |
| D5 | **The old Friday Showdown quiz** | **Retire the live quiz and logins.** Keep a short **optional "Caravan Quiz"** (8 questions, teacher-run on the main screen, teams answer on mini-whiteboards) as a Week-review button on the Week page. **Fate of the Road cards** kept as an optional fun extra. | Friday is now Art. The quiz still gives retrieval practice and excitement, without logins or a Firebase project to maintain. |
| D6 | **Reuse the old images** | **Yes.** Reuse `CHAR-01…06`, `TEAM-01…06`, `W01…W10-HERO`, `W##-MON/TUE/WED`, `ANIMAL-01…18`, `CORE` coin, seal, map and medals. The old `W##-THU` (Art) cards move to **Friday**. Only **new** images are needed: 10 Thursday Technology cards, 2 new guide characters, and a few artefacts (see §15). | Saves you about 100 images. The 18 animal cards already match the Science weeks almost exactly. |
| D7 | **Guides** | Keep **Shirin** (History), **Farhad** (Geography), **Gandom the camel** (Science, the "animal's-eye view"). Add **Nasrin**, a young water-engineer (Technology), and **Master Hamid**, an old palace craftsman (Art). | One voice per subject, as in the other two apps. Real historical people (Cyrus, Darius, Esther, Nehemiah) appear only as history, with sources, never as story characters. |
| D8 | **Ages and very early dates** | Follows the school stance from the Hakatere decision: **young earth under God's creation first**, with a labelled **🔬 Side note — what many scientists believe**. In this term the only places it comes up are: the very earliest layers of **Susa** and other pre-Flood-looking archaeological dates (W1, W5), how deserts and salt lakes formed (W4, W5) and **natural selection** in Year 6 Science (W4). See §4.6. | Keeps the school's teaching consistent across terms, and is honest about what students will read elsewhere. |
| D9 | **Difficult history** | Wars (Thermopylae, Alexander) are taught without gore. The **Esther** story is told with care (Haman's plan to destroy the Jews). Daniel 6 (the lions' den) is told as Daniel's faithfulness, not as a scary story. | Years 5–6 audience. See §17. |
| D10 | **Iran today** | Taught warmly through **people, culture and creation** (Nowruz, cities, wildlife, food, poetry), with prayer for Iranians, and **no political commentary** about Iran's government, wars or sanctions. If students raise the news, use the script in §17. | Some students may be Iranian New Zealanders or have Muslim or Zoroastrian family or friends. |
| D11 | **Teams** | Keep the six: **Immortals · Persian Leopards · Simurgh · Asiatic Cheetahs · Golden Griffins · Winged Lions** (images exist). | Continuity. Two of the names (leopard, cheetah) are studied in Science, so each team card gets a real fact [S26][S27]. |
| D12 | **Points** | **Darics 🪙** (gold coins), earned for thinking, teamwork, kindness and perseverance. **Never from rubric levels.** | The daric was the gold coin of the Persian Empire, introduced under Darius [S42]. |
| D13 | **Big Projects** | Chosen in Week 6, built in Weeks 7–10, shown at the Exhibition (see §6.2). | Same rhythm as The Fifth Codex and Hakatere. |
| D14 | **Optional visit** | None required. Options: a whānau **Nowruz-style spring table** at the Exhibition (if Iranian families would like to share), a visit or video call with a local Persian/Iranian community member, an irrigation-scheme visit for the qanat week. | Real people make the learning real. All optional. |

---

# 1. THE VISION

**Students aren't "doing Persia". They are a caravan crew racing the length of the Royal Road to rebuild the Seal of the Kings, and learning everything the road can teach them on the way.**

The Seal of the Kings could open any gate in the empire. One night a sandstorm shattered it into **ten fragments** and scattered them along the Royal Road and across the centuries. Shirin the Scribe has a magic **Road Scroll** that lets a caravan step into a different century each week (🟡 story). Each fragment is locked in a box of clay and wedges. To open it, the caravan needs everything they learned that week: history to know where and when they are, geography to find the city, science to survive the animals and habitats on the way, technology to solve the desert's problems, and art to read and remake the beautiful things the Persians made. And all term, a masked rider, **the Shadow Courier**, is always one step ahead.

The term's big question: **"What makes a kingdom last?"** Students meet kings who built roads, palaces and laws, and watch kingdoms rise and fall (Daniel 2). They discover that the God of Israel was at work in Persia's history all along: naming Cyrus before he was born (Isaiah 45), protecting Daniel and Esther, sending Ezra and Nehemiah home to rebuild, and drawing the Magi "from the east" to Jesus (Matthew 2). The answer the Seal finally gives is not gold or power but **wisdom**: *"Seek it like silver and search for it as for hidden treasure"* (Proverbs 2:4).

**The emotional arc:** wonder → discovery → courage under pressure → pride and its fall → rebuilding → loss (Persepolis burns) → hope in the night sky → forgiveness → celebration.

**The learning promise.** By Week 10 every child can:
- tell the story of ancient Persia in order, from the Elamites and Medes through Cyrus, Darius and Xerxes to Alexander, the Parthians and the Sasanians, using primary sources (the Cyrus Cylinder, the Behistun inscription, the Persepolis tablets) and comparing Persian, Greek and biblical accounts [S1][S6][S7][S8];
- explain where and why people built settlements and cities in Persia, how water, roads and trade shaped them, how cities are destroyed and rebuilt, and how cities grow today, including in New Zealand [S4][S5][S15][S21][S22];
- describe habitats and animal communities from the Zagros Mountains to the deserts, salt lakes and the Caspian Sea, build food chains and webs, explain adaptations and relationships between species, and explain why some animals are endangered and how they can recover [S25][S26][S27][S28][S30];
- design, build and test models of Persian engineering, and write, test and debug algorithms and simple programs [S15][S16][S37][S38];
- make art in response to real Persian objects and explain what they meant to the people who made them [S1][S11][S12][S13][S14];
- talk thoughtfully about how God's story runs through Persia's story: the only true God who rules over every nation, courage and faithfulness, humility, rebuilding, and the nations coming to Jesus.

**Design pillars** (the same six as The Fifth Codex)
1. **Mystery first.** Every lesson opens with a *Dispatch* from the road and ends by solving a *Waystation Clue*.
2. **Real learning, not decoration.** Every interactive teaches a concept a static slide can't.
3. **Student agency.** Every lesson has a *Choose Your Path* project with three options (§6).
4. **Faith woven in.** The Christian lens comes out of the lesson content itself (§4).
5. **Teacher-proof.** Anyone can pick it up and teach it, using the scripts, timings, prep lists and model answers.
6. **First-class beauty.** Lapis, gold and terracotta; glazed brick, carved stone and illuminated manuscript.

---

# 2. THE STORY WORLD

## 2.1 Opening premise (Week 1 opening cinematic, read aloud)
> *"Long ago, the greatest road in the world ran from the sea in the west to the palaces of the east. Kings sent messages along it faster than any single horse could gallop. At the end of the road was a treasure: the Seal of the Kings, which could open any gate in the empire. But one night a terrible sandstorm swept down from the desert and shattered the Seal into ten fragments, scattering them along the road and across the centuries. Shirin, the youngest scribe of the royal archive, has found a way to follow them: an old Road Scroll that opens a different century every week. She needs a caravan that can think like historians, geographers, scientists, engineers and artists. She has chosen you. But be careful. Someone else is looking for the fragments too…"*

🟢/🟡 **Fact-or-Story badge** (as in The Fifth Codex). Every slide carries 🟢 **REAL EVIDENCE** or 🟡 **ROAD STORY**. The Seal, the Road Scroll, the guides and the Shadow Courier are 🟡 fiction. Everything they *teach* is 🟢 and sourced.

## 2.2 The guides (one "voice" per subject)
| Day | Guide | Who they are | Voice |
|---|---|---|---|
| **Mon · History** | **Shirin the Scribe** (about 11) | Youngest scribe in the royal archive. Ink-stained fingers, a satchel of clay tablets and scrolls. Image exists (`CHAR-01`). | Curious, brave, honest. "A record is only as good as the person who wrote it, so always ask: who wrote this, and why?" |
| **Tue · Geography** | **Farhad the Caravan Master** | Grey-bearded, gruff and warm. Has led caravans to every city on the road (`CHAR-02`). | Full of road proverbs. "Find the water and you'll find the town." |
| **Wed · Science** | **Gandom the camel** | Grumpy, loyal, secretly very clever. Gives the "animal's-eye view" of every habitat (`CHAR-03`). *Gandom* means wheat. | Dry humour. "You call this hot? Try wearing my coat in the Lut." |
| **Thu · Technology** | **Nasrin** *(new)* | A young water-engineer, daughter of a qanat-digger. Always has a plumb line, a lamp and a notebook of measurements. | Practical and fast. "Every problem has a slope. Find it." |
| **Fri · Art** | **Master Hamid** *(new)* | An old craftsman who has worked in palace workshops all his life: carving, glazing, goldwork, weaving. | Patient and kind. "Slow hands, sharp eyes. Beauty takes time." |
| *(Tension)* | **The Shadow Courier** | A rider in a silver half-mask on a black horse (`CHAR-04`). Always one step ahead; leaves a note every Friday. **Unmasked in Week 9 as Zal** (`CHAR-05`), a lonely boy whose family of craftsmen lost everything. In Week 10 the caravan votes on whether to forgive him and bring him into the finale. | Clever and bitter at first. His notes raise real questions (e.g. "Why should a king's treasure belong to anyone else?"). |

*(The name Zal comes from the hero of the Persian* Shahnameh *who was raised by the Simurgh [S14]. Students meet this story in Week 8 Art.)*

## 2.3 Teams (default 6)
**Immortals · Persian Leopards · Simurgh · Asiatic Cheetahs · Golden Griffins · Winged Lions** (`TEAM-01…06`). Each team card carries one real fact (e.g. *"The Immortals were the Persian king's elite guard; they took the mountain path at Thermopylae"* [S8]; *"Fewer than 20 Asiatic cheetahs may be left in the wild"* [S27]). Mythical teams (Simurgh, griffins, winged lions) are labelled 🟡 as creatures of Persian art and story, not real animals.

## 2.4 Points: Darics 🪙
Teams earn darics for thinking, teamwork, kindness, perseverance and quality work. **Points never come from rubric levels.** A daric counter sits in the presenter toolbar and saves on the device. (The real daric was a gold coin showing the king as an archer [S42].)

## 2.5 The weekly mystery: Waystation Clues → the Seal Fragment
- The Royal Road had **111 stations** where messengers changed horses [S5]. Each lesson is a waystation.
- **Every lesson (Mon–Thu)** ends with a **Waystation Clue**: a short problem using the lesson's learning (a date, a distance, a count, a percentage, a code). The answer is a **number**.
- **Friday (Art)** ends with the **Seal Fragment lock**: the four clue answers are added together, and students must **write the total in Old Persian number signs**: wedge-shaped signs for **1, 2, 10, 20 and 100** [S41] (e.g. 83 = four 20s + one 2 + one 1). The class "presses" the wedges into the clay lock on screen. When the number is right, the clay cracks and the glowing fragment flies to its place on the Seal (signature animation). This doubles as place-value maths.
- **The Shadow's Note** (Fri, 2 min): a note left by the Shadow Courier that raises a real question for next week.

## 2.6 Story beats across the term
| Wk | Stage | Story beat (🟡) | The Shadow's Note |
|---|---|---|---|
| 1 | **The Gates of the Plateau** | The Seal shatters. Shirin's Road Scroll opens; the caravan enters the Zagros Mountains. | "Ten fragments. One of you will lose." |
| 2 | **The King Who Opened the Gates** | Babylon, 539 BC. The fragment is hidden inside a clay cylinder. | "Kings say they free people. Do they really?" |
| 3 | **The Royal Road** | A relay station on the road. The caravan races a courier past a great carved cliff. | Leaves a message in a code the caravan can't read… yet. |
| 4 | **Pride Before the Fall** | A storm at the Hellespont. The fragment falls into the sea and is fished out by Nasrin. | "Even the mightiest king loses. Why bother?" |
| 5 | **For Such a Time as This** | The palace at Susa, where a queen risks her life. | "One girl can't change anything." |
| 6 | **Rebuilding the Walls** | Jerusalem's broken walls. The whole class must cooperate to rebuild one wall (all teams together). | Mockers' shadows on the wall: "What are those feeble people doing?" (Neh 4:2) |
| 7 | **The Marketplace of the World** | A great bazaar. A thief among the camels! | "Everyone has a price." |
| 8 | **Fire on the Mountain** | Persepolis burns. The heaviest setback: the fragment is cracked. | "Everything burns in the end." |
| 9 | **Star-Watchers & Silk** | Night journey with star-watchers from the east. **The Shadow Courier is unmasked: Zal.** | Zal's real story: "My family made beautiful things. Then we lost everything." |
| 10 | **The Gate of All Nations** | The caravan votes on forgiving Zal. All ten fragments join; the Seal's message is revealed (Proverbs 2:4). | No note. Zal rides in the finale. |

---

# 3. NZ CURRICULUM FRAMEWORK (2027)

> ⚠️ **Context for 2027 (checked October 2026).** For Years 0–8, the **new Science and Social Sciences content must be taught from 2027** [S43]. **Technology and The Arts** stay on *The New Zealand Curriculum* (2007), Level 3, until their new content becomes compulsory. **Before printing for ERO, the builder checks wording against Tāhūrangi**, because the Ministry's year-level pages say they are under review [S33]–[S36].

## 3.1 How a Persia term fits the 2027 content
Ancient Persia is not itself named content for Years 5–6. It is a **context** that teaches the required **practices** (sources, perspectives, chronology, cause and consequence) and covers several **named** requirements directly. Be honest about the gaps (flagged below), so they are covered in another term.

| 2027 required content (Ministry year-level guides) | Where it's covered in The Royal Road |
|---|---|
| **Y6 Geography:** **urbanisation**, why people move to cities, **informal settlements**, and the impact on people [S36] | **Tue, all term** (Settlements & Cities), especially W1 (why settle here), W3–W4 (road and water towns), W7 (markets), **W10 (Tehran and NZ cities today; informal settlements; planning a fair city)** |
| **Y6 Economic Activity:** **specialisation and exchange** [S36] | Mon W3 (the daric, taxes, the Royal Road), Mon W7 (workers and rations in the Persepolis tablets [S7]), Tue W7 (bazaars and caravanserais [S19][S20]) |
| **Y5 Geography:** **tectonic hazards**: how they happen, the hazards they cause, how to prepare [S35] | Tue W8 (the **2003 Bam earthquake** and rebuilding [S21]; NZ comparison) |
| **Y5 Geography:** **biomes and ecosystems** [S35] | Tue W1 (mountain, desert and plateau), Wed W1–W5 (mountain, grassland, desert and wetland habitats) |
| **Y5 History:** an **ancient civilisation** case study 🔎 (the Year 5 guide names ancient China [S35]) | Persia is taught as an ancient civilisation all term, and **Tue W9 compares Persian and Chinese cities on the Silk Road**. *Flag: if the school must teach ancient China as its own study, that still needs its own unit.* |
| **Y5–6 History practices:** sources, perspectives, cause & consequence, continuity & change [S35][S36] | **Mon, all term.** Primary sources every week; Persian vs Greek vs biblical accounts (W4); "whose story?" |
| **Y6 History:** NZ to 1840, the Victorian age [S36] | *Not covered by this term. Flag for another term (Hakatere covers these).* |
| **Y5 Science:** **ecosystems**: living and non-living parts, **producers, consumers and decomposers**, **food chains and webs**, **predator and prey**, relationships such as **mutualism and parasitism** [S33] | **Wed W1–W3, W5–W6, W9** |
| **Y6 Science:** **diversity of living things**, **variation**, **adaptation**, and how species change over time 🔎 (check exact wording) [S34] | **Wed W4** (desert adaptations, variation; natural selection as a 🔬 side note, D8), **W7** (camels and working animals), **W8, W10** (endangered species and recovery) |
| **Y5 Science:** heat and insulation; forces and structures 🔎 (check year-level wording) [S33] | Thu W3–W5 (windcatcher airflow, ice-house insulation, arches) |

## 3.2 Code key (used on every lesson plan)
**Social Sciences (2027, Years 4–6)**
- **SS-H** History: understanding the past through sources, perspectives, cause & consequence, continuity & change.
- **SS-G** Geography: places, settlements, environments, hazards, biomes; maps and aerial images.
- **SS-C** Civics & Society: rules, laws, leadership, rights & responsibilities.
- **SS-E** Economic Activity: specialisation, exchange, trade, money.
- **SS-P** Practices: asking questions, using primary & secondary sources, comparing perspectives, explaining change, respectful debate.

**Science (2027, Years 4–6)** *(strand names checked against Tāhūrangi at build)*
- **SC-LW** Living world: habitats, ecosystems, food webs, adaptation, diversity, conservation.
- **SC-PW** Physical world: heat, insulation, air movement, forces and structures (used in Technology).
- **SC-P** Science practices: questioning, observing, fair testing, measuring, modelling, explaining with evidence.

**Technology (NZC 2007, Level 3)**
- **TE-TP** Technological Practice: brief development, planning, outcome development & evaluation.
- **TE-TK** Technological Knowledge: technological modelling; products; technological systems (input → process → output).
- **TE-NT** Nature of Technology: technology and society (how Persian inventions shaped settlement).
- **DT-CT** Digital Technologies — Computational Thinking, **Progress Outcomes 2–3**: give, follow and debug algorithms; build simple programs with sequence, loops, inputs and outputs; understand that devices store data in binary [S37][S38].
- **DT-DD** Designing & Developing Digital Outcomes.

**The Arts — Visual Arts (NZC 2007, Level 3)**
- **VA-UC** Understanding the arts in context · **VA-PK** Practical knowledge · **VA-DI** Developing ideas · **VA-CI** Communicating & interpreting.

**Cross-curricular:** **EN** English (explanation, persuasion, retelling, reading sources) · **MA** Maths (timelines and BC dates, place value with Old Persian numerals, scale and distance, percentages, binary, data) · **RE** Christian Character / Bible.
**Key Competencies:** Thinking · Using language, symbols & texts · Managing self · Relating to others · Participating & contributing.

---

# 4. THE CHRISTIAN LENS — "Through the Lens"

## 4.1 The principle
The lens is **found in the content, not attached to it.** Persia is unusual: the Bible itself is one of our main sources for Persian history. Ezra, Nehemiah, Esther and parts of Daniel are set in the Persian Empire, and Isaiah names Cyrus. So the Bible is read **as history alongside** the Cyrus Cylinder, the Behistun inscription and Herodotus, as well as for what it shows about God.

A test for the builder: *if you took the Bible part out, would the lesson lose something it needs?* If it wouldn't, it isn't good enough yet.

## 4.2 Built on the school vision
| Pillar | Icon | What it looks like in this term |
|---|---|---|
| **Aroha — Love: God, Others, Self, World** | ❤️ | Love for people of every nation (Persians, Greeks, Jews, Iranians today); kindness to animals (Prov 12:10); forgiving Zal. |
| **Mōhio — Know: God, His story and our place in it** | 📜 | The LORD is the only true God, who rules over the nations and their kings (Isa 45; Dan 2; Prov 21:1). Persia's history is part of His story. |
| **Manaaki — Serve faithfully with our gifts and talents** | 🤲 | Scribes, engineers, builders, craftsmen, Nehemiah's wall-builders: gifts used to serve others (Exod 31; 1 Pet 4:10). |
| **Pānga — Impact: bringing God's Kingdom to earth** | 🌱 | Courage like Esther's and Daniel's; justice for the poor; caring for endangered creatures; rebuilding what was broken. |
| **Soli Deo Gloria** | ✨ | Kings sought their own glory; the Seal's real treasure is wisdom from God (Prov 2:4–6). |

## 4.3 The four moves (7 minutes, scripted)
1. **LOOK CLOSER** — a detail from today's learning shown again.
2. **OPEN THE WORD** — a short passage (kid-friendly paraphrase on screen, plus the reference so you can read it from the school's Bible).
3. **TALK IT THROUGH** — two discussion questions with "listen for" notes.
4. **LIVE IT OUT** — one concrete response.

## 4.4 The biblical history of Persia (taught in the Monday lessons, in order)
| When (BC) | Event | Bible | Other sources |
|---|---|---|---|
| Very early | **Elam**, one of the peoples listed after the Flood | Gen 10:22; Gen 14:1 | Susa, capital of Elam [S4] |
| c. 700s | Isaiah names **Cyrus** as the one who will let God's people rebuild | Isa 44:28; 45:1–7 | — |
| 539 | **Babylon falls** to Cyrus; Daniel is in Babylon | Dan 5:30–31; Dan 6 | Cyrus Cylinder [S1] |
| 538 | **Cyrus's decree**: exiles may return and rebuild the temple | Ezra 1:1–4; 2 Chr 36:22–23 | The Cylinder shows the same *policy* of returning peoples and restoring temples, though it doesn't mention Jerusalem [S1] |
| 520–515 | **Darius I** lets the temple be finished | Ezra 5–6; Hag 1:1 | Behistun inscription [S6] |
| 486–465 | **Xerxes I**, the **Ahasuerus** of the book of Esther | Esther; Ezra 4:6 | Britannica identifies Ahasuerus with Xerxes [S9]; Herodotus on Xerxes' war [S8] |
| 458 | **Ezra** returns to teach God's law | Ezra 7 | — |
| 445 | **Nehemiah**, cupbearer to Artaxerxes, rebuilds Jerusalem's walls in **52 days** | Neh 2:1; 6:15 | — |
| 331–330 | Alexander defeats Persia | Dan 8:20–21 names "the kings of Media and Persia" and "the king of Greece" | Gaugamela, Persepolis burned [S10] |
| AD 30s | **Parthians, Medes and Elamites** hear the gospel at Pentecost | Acts 2:9 | — |
| c. 5 BC | **Magi from the east** come to worship Jesus | Matt 2:1–12 | Magi were a priestly class in Persia 🔎 |

**Guardrails for the Bible-as-history lessons** (kept from the old blueprint, because they were good):
- Archaeology **illuminates** the Bible or is **consistent with** it. Never say it "proves" it.
- The Cyrus Cylinder **does not mention Jerusalem, the Jews or Isaiah** [S1]. It shows the same policy that Ezra 1 describes.
- Where Christians read a passage in different ways, say so. Examples: who **"Darius the Mede"** was (Dan 5:31; Britannica calls the name "historically problematic" [S9]; Christian scholars suggest several identifications), and how to read Daniel's visions.
- The Bible says **Magi from the east**. It doesn't say three, or kings, or give names. Don't teach tradition as text.
- **God is never "a god".** Other nations' gods are described as what those people believed (e.g. *"the Babylonians worshipped Marduk"*; *"Darius honoured Ahuramazda"*). The LORD is described as the one true God, who says *"I am the LORD, and there is no other"* (Isa 45:5).

## 4.5 Other faiths and Iran today
- **Zoroastrianism** (the old faith of many Persians, still practised by small communities today, including in NZ 🔎) and **Islam** (the faith of most Iranians today) are described accurately and respectfully, never mocked. The lens asks what Christians believe about the God who made all nations (Acts 17:26–27), not why others are wrong.
- Analogies are **labelled as analogies**, with a "Where the picture breaks" prompt.
- Iranians today are prayed for with love: for families, children, peace and the freedom to seek God, **without** political commentary (D10).

## 4.6 Ages, origins and natural selection (D8) — how it looks
Only a few lessons touch this (W1 and W5 for Susa's earliest layers; W4 for how deserts formed and for natural selection):
1. **Main slide box — 📜 God's creation:** God made the earth and every kind of animal (Genesis 1:24–25). Reading Genesis as history, the earth is young, around **thousands of years old**, and after the Flood the nations spread out across the earth (Genesis 10–11), Elam among them (Gen 10:22). God made animals able to **vary and adapt** to different places (e.g. desert animals keeping cool). [S44]
2. **Side-note card — 🔬 What many scientists believe:** the mainstream estimate, stated simply and fairly with its source (e.g. *"Archaeologists date the earliest layers of Susa to the late 5th millennium BC, about 6,000 years ago"* [S4]; *"Many scientists believe that over millions of years, natural selection produced new species"* 🔎). It is styled smaller, in a different colour, with the label **Side note**.
3. **Teacher script (🗣️ SAY):** *"As Christians, we believe God created everything, and our school teaches that the earth is young. You'll also read that many scientists think it is much older, so it's good to know what they say. Here's their estimate."* Never mock either view.
4. **Measurements and observations stay as normal science**: temperatures [S25], population counts [S26][S27], lake area [S28], and the **variation and adaptation** we can see happening in animals today.
5. **Rubrics never assess which view a student holds.** They assess whether students can explain the main teaching *and* describe the scientists' view accurately.

---

# 5. THE 50-MINUTE LESSON

## 5.1 Fixed shape (every Mon–Fri lesson)
| Min | Phase | Purpose | Slides |
|---|---|---|---|
| **0–6** | 📜 **The Dispatch** | Story hook from the guide · 3-question **Waystation Check** (retrieval) · Learning Intention & Success Criteria | 3–4 |
| **6–18** | 🧭 **Discovery** | Teacher-led input through interactive slides, modelling, "turn & talk" | 4–7 |
| **18–38** | 🐪 **Choose Your Path** | Students choose **Path A, B or C** (§6) · teacher roams with the rubric | 1–2 (+ timer) |
| **38–45** | 🔍 **Through the Lens** | Christian lens, 4 moves | 2 |
| **45–50** | 🔑 **Waystation Clue & Exit** | Clue solved · self-assessment (Developing–Achieved–Flying) · darics | 2 |

**Friday version:** the same shape, but the Clue becomes the **Seal Fragment lock** plus **the Shadow's Note**, Path time is 22 minutes, and the lens is a 5-minute gallery reflection.

## 5.2 The teacher scripting system
Identical to The Fifth Codex: 🗣️ **SAY** · ❓ **ASK** (with ⏳ wait time) · 👂 **LISTEN FOR** · ↪️ **IF THEY SAY…** · 🖱️ **CLICK** · 🤝 **TURN & TALK** · ⭐ **DEEPER** · 🧘 **PACE** · ⚠️ **SAFETY** · 🕊️ **CARE** (new: a note on sensitive content, e.g. "Some students may have family in Iran").

## 5.3 Classroom routines built into the app
- **Caravan Code** (shown Week 1, then on the toolbar): Respect every person and people · Evidence before opinion · Every voice heard · Leave the road better than you found it.
- **Timer**, **Random Team/Name Picker** (class list stored only on the device), **Daric counter**, **Calm screen** (a slow caravan crossing dunes at dusk), and a **Say it right** button for names (Achaemenid, Ahasuerus, Behistun, qanat, badgir, yakhchāl, Nowruz).

## 5.4 Vocabulary pop-ups on every slide (as built in The Fifth Codex, October 2026)
- Hover over any **dotted-underlined word** on a slide to see a pop-up card with its meaning (and pronunciation where useful). It disappears when the pointer moves away. Tap on a touch screen.
- **Gold dots = today's lesson words** (from the lesson's vocab list, tagged "Today's word"). **Faint dots** = vocab from other weeks, plus other uncommon words.
- Each word is underlined only the **first time** it appears on a slide. Everyday words are underlined only in the lesson that teaches them. Code, buttons and diagrams are never underlined.
- The Persia glossary (`data/glossary.js`) will cover, for example:
  - peoples, places and titles: Achaemenid, Elamite, Mede, satrap, satrapy, Immortals, Magi, Parthian, Sasanian, Susa, Persepolis, Pasargadae, Ecbatana, Hellespont;
  - sources and writing: cuneiform, inscription, cylinder seal, tablet, Behistun, Herodotus;
  - geography: plateau, oasis, tell, bazaar, caravanserai, urbanisation, informal settlement, chokepoint;
  - science: habitat, community, population, ecosystem, producer, consumer, decomposer, food web, adaptation, mutualism, parasitism, endangered, brine shrimp;
  - technology: qanat, mother well, gradient, badgir (windcatcher), yakhchāl, insulation, arch, dome, algorithm, cipher, binary;
  - art: rosette, radial symmetry, relief, glazed brick, repoussé, chahar bagh, miniature, motif.

---

# 6. STUDENT AGENCY — "Choose Your Path"

## 6.1 How it works
Every lesson offers **three paths** that show the *same* learning intention in different ways. All are assessed against the same rubric.

| Path | Style | Example products |
|---|---|---|
| **A · The Scribe** | Writing & recording | Clay-tablet record, diary entry, labelled diagram, explanation, letter, museum label |
| **B · The Artisan** | Making & modelling | Model, map, timeline, mechanism, diorama, poster |
| **C · The Herald** | Speaking & performing | Royal announcement, radio report, role-play, teach-back, debate |

Every path has a **Supported** version (sentence starters, templates, word bank) and a **Flying Challenge**.

**Printable Path Cards (as built in The Fifth Codex).** Every lesson has an A4 student handout for **each** path (A, B and C), so each child gets the card for the path they chose. Each card has:
- the **mission** (the product, and what it shows they can do);
- **step-by-step instructions** with tick boxes: *Get ready* → the lesson's steps, each with a 💡 tip suited to writing, making, speaking or testing → *Check your work* → *Share it*;
- the **"I can…" success criteria** to tick, and the **Flying challenge**;
- **Where to find the information:** which slides to ask to see again (by number and title), the Caravan Journal, materials (Artisan path), the day's **trusted sources** with web addresses, and "ask 3 before me";
- a **word bank** (the lesson's vocab with meanings), **sentence starters**, and **what good work looks like** (the rubric's Achieved descriptor and example).

Cards print from the lesson page (all three or one at a time), from a 🖨 button on the Choose Your Path slide, or a whole week at once from the Week page.

## 6.2 Term-long Big Projects (chosen in Week 6, built Weeks 7–10, shown at the Exhibition)
- **History — *Persia Museum Case*.** One object or person (the Cyrus Cylinder, a daric, Esther, Nehemiah, a Persepolis tablet…) with a label, a "how do we know?" card, two perspectives and a Bible connection.
- **Geography — *City Planner*.** Design a fair desert city for 10,000 people: where it goes and why, water (a qanat), a bazaar, homes for everyone (including newcomers), and a plan for an earthquake.
- **Science — *Wild Persia Sanctuary*.** Design a protected area for one endangered animal, with its habitat, food web, threats and a recovery plan (inspired by the Persian fallow deer and the takahē [S30][S31]).
- **Technology — *Desert Engineer* or *Royal Road Coder*.** Either a tested model of a Persian invention improved for a desert school today, **or** a Scratch courier game with loops, events and a score.
- **Art — *Paradise Garden panel*.** A large panel combining techniques from the term (rosette border, relief figures, gold foil, carpet pattern) around a four-part garden, with an artist statement.

---

# 7. ASSESSMENT & RUBRICS — Developing · Achieved · Flying

## 7.1 The three levels
| Level | Badge | Meaning | Curriculum meaning |
|---|---|---|---|
| **Developing** | 🌱 seedling | On the way: shows some of the learning with support | Working towards the expected level |
| **Achieved** | 🪙 daric | Shows the learning intention securely and independently | Working at the expected level for Years 5–6 |
| **Flying** | 🪶 Simurgh feather | Goes beyond: explains why, connects, applies, evaluates | Working beyond the expected level |

## 7.2 How rubrics are built
As in The Fifth Codex: each **success criterion** becomes a rubric row; each cell has a descriptor plus a **real example of student work** at that level; each row names its code; **Quick-Mark mode** stores results on the device only.

## 7.3 Subject core rubrics (term-level, for Big Projects and reporting)

### HISTORY core rubric (SS-H, SS-P, RE)
| Criterion | 🌱 Developing | 🪙 Achieved | 🪶 Flying |
|---|---|---|---|
| **Using sources** | Names a source. *e.g. "We know from the Cyrus Cylinder."* | Says what a source tells us and what kind it is. *e.g. "The Cyrus Cylinder is a primary source from 539 BC. It says Cyrus took Babylon without a battle and sent peoples home."* | Compares sources and judges their reliability. *e.g. "The Cylinder was written for Cyrus, so it makes him look good. Ezra 1 describes the same policy from the Jews' side. Together they show it really happened."* |
| **Cause & consequence** | Retells an event. *e.g. "Darius built a road."* | Explains a cause and a consequence. *e.g. "The empire was huge, so Darius built the Royal Road with stations. Messages could cross it in days instead of months."* | Weighs several causes or links to today. |
| **Perspectives** | Gives one point of view. | Describes two perspectives on an event. *e.g. Greeks and Persians on Thermopylae.* | Explains *why* people saw it differently and whose voices are missing. |
| **Chronology** | Puts some events in order with help. | Orders events on a BC/AD timeline and explains BC dates count down. | Explains how events in different places happened at the same time (e.g. Esther and the Greek wars). |

### GEOGRAPHY core rubric (SS-G, SS-E, SS-P)
| Criterion | 🌱 Developing | 🪙 Achieved | 🪶 Flying |
|---|---|---|---|
| **Settlement factors** | Gives one reason a town is there. *e.g. "There's water."* | Explains how several factors shaped a settlement. *e.g. "Yazd is in the desert, but qanats bring water from the mountains, and it was on a trade route, so a city could grow."* | Compares settlements and predicts change. *e.g. "If the qanats dried up, Yazd would need pumps or would shrink, like towns when the railway closes."* |
| **Using maps & data** | Finds a place on a map with help. | Uses a map, scale and data to describe a place. | Interprets patterns across maps and data (e.g. city growth graphs). |
| **People & change** | Describes a city. | Explains why people move to cities and one effect. *e.g. "People moved to Tehran for jobs, so it grew from 1.5 million in 1956 to 7.7 million in 2006."* | Suggests fair solutions to a city problem and recognises other views. |

### SCIENCE core rubric (SC-LW, SC-P)
| Criterion | 🌱 Developing | 🪙 Achieved | 🪶 Flying |
|---|---|---|---|
| **Scientific understanding** | Names animals in a habitat. | Explains relationships using science words. *e.g. "Wild goats are the leopard's main prey, so if goats are hunted out, leopards lose their food."* | Predicts what happens when an ecosystem changes. *e.g. "As Lake Urmia gets saltier, brine shrimp die, so flamingos lose food and leave."* |
| **Investigating** | Observes with help. | Plans and carries out a fair test, recording results. | Explains results and improves the method. |
| **Communicating** | Everyday words, simple drawings. | Correct vocabulary and labelled food-web diagrams. | Uses models and data to teach someone else. |

### TECHNOLOGY core rubric (TE-TP, TE-TK, DT-CT)
| Criterion | 🌱 Developing | 🪙 Achieved | 🪶 Flying |
|---|---|---|---|
| **Design & planning** | Has an idea. | Writes a brief with a stakeholder, need and 2–3 specifications; sketches a labelled plan. | Justifies design choices against the specifications. |
| **Making & testing** | Builds with help. | Builds a working model and tests it fairly against a specification. *e.g. "Our ice house kept the ice 25 minutes longer with two layers of felt."* | Improves the model after testing and explains why the change worked. |
| **Algorithms & debugging** | Follows given steps. | Writes a sequence with a loop or decision; finds and fixes a bug. | Writes efficient code and explains how they debugged methodically. |
| **Technology & society** | Says what an invention does. | Explains how an invention helped people live somewhere. | Compares an old solution with a modern one (e.g. windcatcher vs air-conditioner). |

### VISUAL ART core rubric (VA-UC, VA-PK, VA-DI, VA-CI)
| Criterion | 🌱 Developing | 🪙 Achieved | 🪶 Flying |
|---|---|---|---|
| **Context** | Names an object or art form. | Explains its purpose or meaning. *e.g. "The archers frieze was glazed brick in Darius's palace at Susa, showing the king's guard."* | Compares art from different times or places respectfully. |
| **Technique** | Uses materials with help. | Uses the technique carefully (clean print, even relief, symmetrical design). | Combines techniques skilfully; refines through trial. |
| **Ideas** | Copies an example. | Develops an own design from studied examples. | Creates an original, meaningful design showing influence without copying. |
| **Reflecting** | Says what they like. | Uses art words to describe work. | Gives specific, kind feedback and explains choices. |

## 7.4 Formative evidence, differentiation, PDFs
Exactly as The Fifth Codex: Waystation Check retrieval, photographed path products, Quick-Mark, exit self-assessment, the **Caravan Journal** (one book per student); **Supported / ESOL / learning support / Flying** on every plan; Lesson Plan, Rubric (teacher and student), Path Cards, Week Pack and Unit Plan PDFs. **Every lesson plan PDF ends with a Sources & evidence page.**

**Pre/post:** Week 1 "What do I know about Persia?" map wall + "Draw a desert habitat" baseline → repeated in Week 10.

---

# 8. TEN-WEEK OVERVIEW

| Wk | Stage | **Mon** History (Persians + Bible) | **Tue** Geography (Settlements & Cities) | **Wed** Science (Animal communities & habitats) | **Thu** Technology | **Fri** Art (Art of the Empire) | Lens pillar & key text |
|---|---|---|---|---|---|---|---|
| 1 | The Gates of the Plateau | Before the empire: Elamites, Medes & Persians | Why settle here? Reading the Persian plateau | What is a habitat? The Zagros mountain community | Think like a desert engineer | Rosettes & radial symmetry | 📜 Mōhio · Gen 10:22; Acts 2:9 |
| 2 | The King Who Opened the Gates | Cyrus the Great & the fall of Babylon (Isa 45; Ezra 1) | Royal capitals: Pasargadae, Babylon, Susa, Persepolis | Producers, consumers & decomposers: the grassland | Water from the mountains: build a qanat | Cylinder seals & cuneiform | 📜 Mōhio · Isa 45:1–7 |
| 3 | The Royal Road | Darius the organiser: satraps, darics, roads & Behistun (Dan 6; Ezra 6) | Road towns: settlements along the Royal Road | Food webs & predators: the Persian leopard | Catching the wind: the windcatcher | Relief carving: the procession of nations | 🌱 Pānga · Dan 6:10 |
| 4 | Pride Before the Fall | Xerxes & the Greeks: whose story? | Water towns: qanats, oases & the desert city of Yazd | Desert adaptations: the Lut | Ice in the desert: the yakhchāl (insulation test) | Glazed-brick archers: printmaking | 📜 Mōhio · Prov 16:18 |
| 5 | For Such a Time as This | Esther, queen of Persia | Layers of a city: Susa & the tell | Wetlands & salt lakes: Lake Urmia | Arches & domes: building strong | Gold of the Oxus: foil embossing | 🌱 Pānga · Esther 4:14 |
| 6 | Rebuilding the Walls | Ezra & Nehemiah: going home to rebuild | Walls & gates: Jerusalem rebuilt | Living together: mutualism, parasitism & competition | Royal Road Messages 1: relay algorithms (unplugged + Scratch) | Paradise gardens: designing a chahar bagh | 🤲 Manaaki · Neh 4:6; 6:15 |
| 7 | The Marketplace of the World | Everyday lives: workers, women & rations in the Persepolis tablets | Bazaars & caravanserais: markets & trade | Working animals: camels, horses & care | Messages 2: secret codes & loops | Carpets & weaving: the Pazyryk carpet | ❤️ Aroha · Prov 12:10; 31:31 |
| 8 | Fire on the Mountain | Alexander & the fall of Persia (Dan 2; 8) | Hazards & rebuilding: the Bam earthquake | Endangered: the Asiatic cheetah | Messages 3: binary signals & variables | Miniature painting: the Shahnameh | 📜 Mōhio · Dan 2:44; Ps 46 |
| 9 | Star-Watchers & Silk | Parthians, Sasanians & the Magi (Matt 2; Acts 2:9) | Silk Road cities: Persia meets China | Sea communities: the Caspian seal | Messages 4: events, decisions & debugging (the courier game) | The Magi's night sky | ❤️ Aroha · Matt 2:1–12; Col 3:13 |
| 10 | The Gate of All Nations | Legacy & Iran today: Nowruz, words & gardens | Cities today: Tehran, NZ & planning a fair city | Recovery: sanctuaries, the fallow deer & the takahē | Showcase: test, evaluate & present | The Persia Exhibition | ✨ Soli Deo Gloria · Prov 2:4–6; Rev 7:9 |

**For a 9-week term:** merge Wk 9 and 10 Technology (finish + showcase), drop Wk 7 Art (carpets), and hold the Exhibition in Wk 9.

---

# 9. THE COMPLETE PROGRAMME

> **Format note for the builder.** Week 1 is written out **in full** as the gold-standard template. Weeks 2–10 are **Lesson Cards** with the essential content (LI, SC, key knowledge with source tags, interactive, paths, lens, clue). During the build each card is expanded to Week 1's depth and shown to the teacher for review. **Facts marked 🔎 still need a source checked during the build** before they go on a slide; everything else carries its source tag.

---

## ⭐ WEEK 1 — STAGE I · THE GATES OF THE PLATEAU
**Story:** the Seal shatters in a sandstorm. Shirin's Road Scroll opens for the first time, and the caravan steps out into the Zagros Mountains.
**Week prep (total ≈ 20 min):** Caravan Journals (one exercise book or sketchbook per student), A3 paper, coloured pencils, compasses and rulers (Friday), a world map or globe, optional printed outline maps of Iran.

---

### MON · W1 · HISTORY — "Before the Empire: Elamites, Medes & Persians"
- **Codes:** SS-H, SS-P · MA (BC dates) · RE · KC: Thinking, Using language, symbols & texts
- **Required-content coverage:** Y5–6 history practices (chronology, primary and secondary sources); introduces Persia as an ancient civilisation.
- **LI:** We are learning where the Persian Empire came from, and how historians put events in order.
- **SC:** I can name the three peoples of the land before the empire (Elamites, Medes, Persians). · I can explain how BC dates count down to AD 1. · I can tell the difference between a primary and a secondary source.
- **Key vocabulary:** empire, civilisation, Elamites, Medes, Persians, BC / AD (BCE / CE), timeline, primary source, secondary source, archaeologist.
- **Prep:** ⏱️ 0 min (all on screen). Optional: a globe.

**📜 The Dispatch (0–6)**
- Opening cinematic: the Seal of the Kings shatters; ten fragments fly across a map of the empire (§12 #1).
- 🗣️ SAY the premise (§2.1). 🖱️ CLICK to reveal Shirin's first dispatch: *"Before we chase a single fragment, we need to know whose land this is. Kings came and went, but the people were here first."*
- **Waystation Check (what do you already know?):** ❓ "Thumbs up if you can… find Iran on a world map… name a king of Persia… name a Bible story set in Persia?" → 🖱️ add answers to the **Map Wall** (kept until Week 10).
- Share the LI and SC.

**🧭 Discovery (6–18)**
1. **Where is Persia?** 🖱️ The *Zoom to Persia* map (§12 #2): from Aotearoa across the globe to Iran.
   - Ancient **Persia** was centred on what is now **Iran**, on a high plateau between the Persian Gulf and the Caspian Sea 🔎 (add Britannica "Iran" at build).
   - Three peoples matter before the empire: the **Elamites**, whose capital was **Susa** in the south-west lowlands [S4]; the **Medes** in the north-west, with their city Ecbatana 🔎; and the **Persians** of **Pars** in the south-west, where Pasargadae and Persepolis would later be built [S2][S3].
   - ❓ ASK: "The empire is called 'Persian', but there were other peoples in the land first. Why might that matter?" ⏳ 5 s · 👂 LISTEN FOR: empires are often named after the rulers, not everyone who lived there.
2. **Counting down to zero: BC and AD.** 🗣️ SAY: "BC dates count *down*, like a rocket launch. 539 BC came *before* 518 BC."
   - 🖱️ The *Timeline Ribbon* (§12 #3): drag cards onto a BC/AD ribbon:
     - Susa, the Elamite capital 🟢 [S4];
     - Cyrus the Great begins to rule, **559 BC** [S2];
     - Cyrus takes **Babylon, 539 BC** [S1];
     - Darius begins **Persepolis, about 518 BC** [S3];
     - Alexander **burns Persepolis, 330 BC** [S10];
     - Jesus is born (the line between BC and AD);
     - today.
   - 📜/🔬 **Susa's first layers (D8, §4.6).** *Main box:* Susa is one of the oldest cities in the world. Genesis 10:22 names **Elam** among the families who spread out after the Flood. *Side note:* "Archaeologists date the earliest of Susa's 27 layers to the late 5th millennium BC, about 6,000 years ago" [S4].
   - ⭐ DEEPER: "How many years from Cyrus taking Babylon (539 BC) to Darius starting Persepolis (518 BC)?" (21: subtract, because BC counts down.)
3. **How do we know? Sources.** 🖱️ The **Source Sorter** (drag cards into PRIMARY or SECONDARY):
   - the **Cyrus Cylinder**, a clay cylinder written in Babylonian cuneiform soon after 539 BC 🟢 (primary [S1]);
   - the **Behistun inscription**, carved on a cliff for Darius I in three languages 🟢 (primary [S6]);
   - the history written by **Herodotus**, a Greek writer in the 400s BC (primary for his time, but an outsider writing about Persia's enemies' wars: discuss!) [S5][S8];
   - a modern museum web page (secondary);
   - this app (secondary!);
   - the **books of Ezra, Nehemiah and Esther**, written by people living under Persian rule (ancient sources; Christians trust them as God's Word).
   - ❓ ASK: "Herodotus was Greek. Would a Greek tell the story of the Persian wars the same way a Persian would?" 👂 Probably not: he might favour the Greeks. Historians compare sources.
   - ↪️ IF THEY SAY "the Bible isn't a history source": "Historians of every belief use it as an ancient source for this period, alongside the clay tablets. As Christians, we also trust it as true. Let's see this term how it fits with the other evidence."

**🐪 Choose Your Path (18–38)**
- **A · Scribe — "Who Was Here First?" Fact Tablet:** a clay-tablet-shaped page with three panels (Elamites, Medes, Persians): where they lived, one city, one fact.
- **B · Artisan — Timeline Scroll:** a long paper scroll with BC and AD, at least 6 events placed to scale (1 cm = 20 years), and a picture for each.
- **C · Herald — Source Detective Talk:** choose 3 sources from the sorter and explain to a partner (or the class) which are primary or secondary, and why.
- *Supported:* pre-cut event cards and a printed ribbon; starters ("This is a primary source because…"). *Flying Challenge:* "Why might a king's own inscription not tell the whole truth?"

**🔍 Through the Lens (38–45) — 📜 Mōhio**
- **LOOK CLOSER:** the map with Elam, Media and Persia.
- **OPEN THE WORD:** Genesis 10:22 lists **Elam** among the sons of Shem. Acts 2:9–11: at Pentecost, people from many nations, *"Parthians, Medes and Elamites"*, heard about God's wonders in their own languages.
- **TALK IT THROUGH:** ❓ "Elam appears near the start of the Bible and again at Pentecost. What does that tell us about God and the peoples of this land?" 👂 God knew these peoples from the beginning; the good news was for them too. ❓ "Why might God want people from every nation to hear about Him in their own language?" 👂 He loves every people; no nation is left out (Rev 7:9).
- **LIVE IT OUT:** Caravan Journal: *"One thing I want to remember about God and the nations is…"*

**🔑 Waystation Clue & Exit (45–50)**
- **Waystation Clue 1:** "How many peoples lived in the land before the Persian Empire began (Elamites, Medes, Persians)?" → **3**.
- Self-assess against the SC. Award darics.

**📊 Lesson Rubric — Mon W1**
| SC (code) | 🌱 Developing | 🪙 Achieved | 🪶 Flying |
|---|---|---|---|
| Three peoples (SS-H) | Names one people. *Ex: "The Persians."* | Names all three and where they lived. *Ex: "Elamites in the south-west lowlands with their capital Susa, Medes in the north-west, Persians in Pars."* | Explains why the empire is named after one people. *Ex: "The Persian kings ruled, so their name stuck, but Elamites and Medes still lived there and even worked in the government."* |
| BC and AD (SS-H, MA) | Places some events with help. | Orders events and explains BC counts down. *Ex: "539 BC is earlier than 518 BC because BC counts down to AD 1."* | Calculates spans across BC dates and explains the method. |
| Primary vs secondary (SS-P) | Sorts some sources with help. | Defines both with an example of each. *Ex: "The Cyrus Cylinder is primary; a museum website is secondary."* | Explains why even a primary source can be one-sided (Herodotus, a king's inscription). |

**Teacher reflection:** Who has family links to Iran or the Middle East (a possible expert, if they'd like to share)? Who struggled with BC dates?

---

### TUE · W1 · GEOGRAPHY — "Why Settle Here? Reading the Persian Plateau"
- **Codes:** SS-G, SS-P · MA (scale) · KC: Thinking
- **Required-content coverage:** Y5 biomes (mountain, desert); Y6 settlement and urbanisation (sets up the term).
- **LI:** We are learning how land, water and climate decide where people build settlements.
- **SC:** I can describe the land of Iran (mountains around the edge, deserts in the middle). · I can give four reasons people choose a place to settle. · I can explain why many Persian towns were built near mountains.
- **Key vocab:** settlement, site, plateau, desert, oasis, mountain range, fertile, trade route, defence, urbanisation.
- **Prep:** ⏱️ 5 min. Optional: printed outline maps of Iran.

**📜 The Dispatch:** Farhad at the top of a mountain pass, looking down at the plain: *"Find the water and you'll find the town. Every city on this road is here for a reason. Learn the reasons, and you'll never get lost."* Waystation Check from Monday (three peoples; BC counts…; one primary source).
**🧭 Discovery:**
1. **The shape of the land** (§12 #10 *Plateau Flyover*): a cut-paper 3D map of Iran tilts and flies.
   - High mountains run around much of the edge (the **Zagros** in the west and the **Alborz** in the north), with high deserts in the middle 🔎 (Britannica "Iran" at build).
   - The **Lut Desert** (Dasht-e Lut) in the south-east is one of the hottest places on Earth: NASA satellites measured a land-surface temperature of **70.7 °C** there in 2005 [S25].
   - ❓ ASK: "Where on this map would you *not* build a town? Why?" 👂 The middle of the desert: no water, too hot.
2. **Why settle here? The six reasons.** 🖱️ *Settlement Sorter*: drag reasons onto a site: **water** · **food and farmland** · **defence** (hills, rivers, walls) · **trade routes** (crossroads, river crossings, passes) · **building materials** (stone, clay, timber) · **climate** (not too hot, cold or dry).
3. **Choose the site** 🖱️ *Settlement Picker* (§12 #11): on a fictional Persian valley map, teams choose site A, B, C or D for a new town, then reveal the "100 years later" result (A floods; B lacks water; C becomes a city because it has a spring at the foot of the mountains, farmland and a road; D is safe but too far from anything).
   - 🟢 Many Persian towns grew at the foot of mountains, where underground water could be reached and brought out by **qanats**, tunnels that use gravity to carry water from a "mother well" near the mountains [S15]. (Full lesson on Thursday and in Week 4.)
4. **Hononga Aotearoa — why is our town here?** 🟢 Ashburton began where the main road south crossed the river: an accommodation house was built beside the river ferry in **1858**, and the town was surveyed in **1863–64** [S45]. ❓ "Which of the six reasons explain *our* town?"

**🐪 Paths:** **A** *Settlement Report*: describe the best site (C) using at least four reasons. · **B** *Site Model*: draw or build (clay/card) a valley with the perfect town site, labelling water, farmland, defence and road. · **C** *Caravan Master's Advice*: a 1-minute talk advising a king where to build his new city and why. *Flying Challenge:* "Can a town survive if it loses the reason it was built? Give an example."
**🔍 Lens — ❤️ Aroha (World):** Psalm 104:10–13, *"He makes springs pour water into the ravines; it flows between the mountains. They give water to all the beasts of the field."* ❓ "The psalm says God gives the water. How should that change how we treat water in a dry land?" ❓ "Who in our town depends on water from the mountains?" **Live it out:** one way to save water this week.
**🔑 Waystation Clue 2:** "Name the two great mountain ranges around the Persian plateau (Zagros and Alborz). How many is that?" → **2**.
**📊 Rubric rows:** The land (SS-G) · Settlement factors (SS-G) · Water & mountains (SS-G, SS-P).
- *Developing ex:* "People live where there's water." · *Achieved ex:* "Site C is best because it has a spring for water, flat land for farming, hills for defence and a road for trade." · *Flying ex:* "Persian towns are near mountains because snow and rain sink into the ground there, and qanats can bring the water out. Without that, people couldn't live on the plateau."

---

### WED · W1 · SCIENCE — "What Is a Habitat? The Zagros Mountain Community"
- **Codes:** SC-LW, SC-P · KC: Thinking
- **Required-content coverage:** Y5 Science: ecosystems have living and non-living parts [S33].
- **LI:** We are learning what habitats and communities are, and what animals need to survive.
- **SC:** I can explain what a habitat is. · I can sort the living and non-living parts of an ecosystem. · I can explain the difference between a population and a community.
- **Key vocab:** habitat, organism, population, community, ecosystem, living (biotic), non-living (abiotic), shelter, prey, predator.
- **Prep:** ⏱️ 5 min. Optional: printed animal cards (`ANIMAL-01`, `-02`).

**📜 The Dispatch:** Gandom the camel, grumbling on a rocky slope: *"Mountains. Why did it have to be mountains? Look around you, though. Everything up here is connected to everything else. Even me. Mostly me."* Waystation Check from Tuesday.
**🧭 Discovery:**
1. **Meet the Zagros community** 🟢 (§12 #20 *Habitat Zoom*): zoom from one animal to the whole mountain.
   - The **Persian leopard** lives in Iran's mountains. Its main prey are **wild goats** and **wild sheep**, with **wild boar** and **porcupines** [S26].
   - Leopards are found where wild goats are common. Scientists found that wild-goat numbers were the main thing linked to leopards being present in protected areas [S26].
   - The Persian leopard is **Endangered** (IUCN, 2016). Iran may have about **550–850** of them, though scientists say this estimate needs updating [S26].
2. **Organism → population → community → ecosystem.** 🖱️ The zoom levels: one leopard (organism) → all the leopards in the mountains (population) → leopards + goats + sheep + oak trees + eagles + insects (community) → the community plus rock, soil, water, sunlight and snow (ecosystem).
3. **Living or non-living?** 🖱️ *Biotic/Abiotic Sorter*: oak tree, wild goat, snow, rock, soil bacteria, spring water, sunlight, golden eagle, grass, temperature.
4. **What does every animal need?** Food · water · shelter · space (to find mates and raise young). ❓ "Which of these does a mountain give a wild goat?" 👂 Grass and shrubs, streams, cliffs to escape predators, room to roam.

**🐪 Paths:** **A** *Habitat Fact File*: one Zagros animal, its habitat, what it eats, its four needs and one danger. · **B** *Mountain Diorama Plan*: a labelled drawing (or shoebox start) of the Zagros community, with living and non-living parts colour-coded. · **C** *Gandom's Guided Tour*: a 1-minute "nature documentary" voice-over introducing the community. *Flying Challenge:* "What might happen to the leopards if many wild goats were hunted?"
**🔍 Lens — ❤️ Aroha (World):** Psalm 104:18, *"The high mountains belong to the wild goats; the crags are a refuge for the hyrax."* ❓ "The psalm says the mountains *belong* to the wild goats. What does that tell us about how God sees animals' homes?" ❓ "How can people share land well with animals?" **Live it out:** draw one creature and its "home" in your Caravan Journal with a thank-you prayer.
**🔑 Waystation Clue 3:** "How many things does every animal need (food, water, shelter, space)?" → **4**.
**📊 Rubric rows:** Habitat (SC-LW) · Living and non-living (SC-LW) · Population vs community (SC-LW).
- *Developing ex:* "A habitat is where animals live." · *Achieved ex:* "A habitat is the place an animal gets its food, water, shelter and space. All the leopards are a population; leopards, goats, plants and birds together are a community." · *Flying ex:* "Leopards depend on goats, and goats depend on plants and water, so the non-living parts like rain and soil matter to the leopard too."

---

### THU · W1 · TECHNOLOGY — "Think Like a Desert Engineer"
- **Codes:** TE-TK (systems), TE-NT (technology & society), TE-TP · KC: Thinking, Participating
- **LI:** We are learning how Persian engineers solved the problems of living in a hot, dry land, and to describe a technology as a system.
- **SC:** I can name three big problems of desert living. · I can match each problem to a Persian solution. · I can describe a technology as input → process → output.
- **Key vocab:** technology, engineer, problem, solution, system, input, process, output, stakeholder, need.
- **Prep:** ⏱️ 5 min. Optional: a jug of water, a fan and an ice cube on a plate as "problem props".

**📜 The Dispatch:** Nasrin, climbing out of a well shaft with a lamp: *"Out here, the sun will cook you, the water hides underground, and food goes bad by lunch. My family has solved all three. Want to learn how?"*
**🧭 Discovery:**
1. **Three desert problems** 🤝 TURN & TALK: "If you lived in the desert 2,500 years ago with no electricity, what would be your biggest problems?" 👂 Water, heat, keeping food and water cool.
2. **Three Persian solutions** 🟢 (§12 #30 *Problem → Solution Matcher*):
   - **Water → the qanat:** an underground tunnel with a gentle slope that carries water by gravity from a "mother well" near the mountains. Vertical shafts reach down to the tunnel. Some qanats in Iran's World Heritage listing date from the 3rd–4th century BC [S15].
   - **Heat → the windcatcher (badgir):** a tall tower on a house that catches breezes and lets hot air escape, with no electricity. The desert city of **Yazd** has about **700** of them [S16].
   - **Keeping things cold → the yakhchāl:** a domed "ice house" where ice made in winter was stored deep underground into summer [S17] 🔎 (add a second source at build).
3. **Technologies are systems.** 🖱️ The *Input → Process → Output* builder: e.g. *qanat*: input = groundwater near the mountains → process = gravity pulls water along a sloping tunnel → output = water at the surface for a town and farms.
4. **Stakeholders and needs.** 🗣️ SAY: "Engineers always ask: *who* is this for, and *what* do they need?" e.g. a farmer needs water for crops; a family needs a cool room in summer.

**🐪 Paths:** **A** *Engineer's Report*: one invention as an I-P-O diagram with a paragraph on the problem it solves. · **B** *Invention Sketch*: an annotated cut-away drawing of a qanat, windcatcher or yakhchāl, showing how it works (arrows for water, air or cold). · **C** *Inventor's Pitch*: present your invention to "the king" as if you invented it: problem, solution, why he should pay for it. *Flying Challenge:* "Which of these three ideas could still help New Zealanders today? How?"
**🔍 Lens — 🤲 Manaaki:** Proverbs 24:3–4, *"By wisdom a house is built, and through understanding it is established."* ❓ "Persian engineers used wisdom to make homes people could live in. Where does wisdom come from?" (Prov 2:6) ❓ "How could you use your problem-solving to help someone this week?" **Live it out:** name one problem at school you could help solve.
**🔑 Waystation Clue 4:** "How many big desert problems did Persian engineers solve today (water, heat, keeping things cold)?" → **3**.
**📊 Rubric rows:** Desert problems (TE-NT) · Matching solutions (TE-TK) · Systems (TE-TK).
- *Developing ex:* "The qanat gives water." · *Achieved ex:* "A qanat's input is groundwater near the mountains. Its process is gravity pulling water down a gently sloping tunnel. Its output is water for a town in the desert." · *Flying ex:* "The windcatcher and qanat could work together: air passing over qanat water cools it before it enters the house." 🔎 *(Verify the qanat-windcatcher cooling link before use.)*

---

### FRI · W1 · ART — "Rosettes & Radial Symmetry: Patterns of the Palaces"
- **Codes:** VA-PK, VA-DI, VA-UC · MA (angles, symmetry) · KC: Managing self
- **LI:** We are learning to design with radial symmetry, inspired by the rosettes in Persian palace art.
- **SC:** I can explain what radial symmetry is. · I can construct a rosette using a compass and equal angles. · I can repeat colours and shapes evenly around a centre.
- **Key vocab:** pattern, motif, rosette, symmetry, radial symmetry, line of symmetry, repeat, border, relief.
- **Prep:** ⏱️ 10 min. Compasses, rulers, protractors (or printed 12-segment templates), A4 card, coloured pencils/felt pens, scissors. Team banner card (A3) for each team.

**📜 The Dispatch:** Master Hamid, brushing dust from a carved stone: *"Look at this border. The same flower, again and again, each one perfect. The carvers drew it first with a cord and a peg. You will too."*
**🧭 Discovery:**
1. **Rosettes in Persian art** 🟢: rows of carved **rosettes** (flower shapes radiating from a centre) frame the reliefs at Persepolis 🔎 (add a museum image source at build, e.g. a Met or British Museum rosette object) [S3].
2. **Radial symmetry** 🖱️ The *Symmetry Mirror* (§12 #40): draw one petal and watch it repeat around a centre 6, 8, 12 or 16 times. ❓ "Where else do you see radial symmetry?" 👂 Flowers, starfish, wheels, kiwifruit cut across.
3. **Construct a rosette:** 🖱️ step-by-step: draw a circle with the compass → mark 12 equal points (30° apart, or use the template) → join to the centre → draw one petal shape → repeat in every segment → add a centre and an outer ring.
4. **Team banners:** each team's crest (`TEAM-01…06`) goes in the middle of a rosette border.

**🐪 Paths (22 min):** All students start their own rosette (8 min). Then: **A** *Pattern Journal*: rosette + notes on how you kept it symmetrical and what Persian palace art used rosettes for. · **B** *Team Banner Border*: rosettes for the team's banner, with a repeating colour pattern. · **C** *Teach-a-Rosette*: make one AND write or record the steps so a Year 3 student could follow them. *Flying Challenge:* design a rosette with two different layers of petals that still has radial symmetry.
**🔍 Lens (5 min gallery) — 🤲 Manaaki:** Ecclesiastes 3:11, *"He has made everything beautiful in its time."* ❓ "Where do you see God's 'patterns' in creation?" ❓ "Why do people everywhere love to make beautiful patterns?"
**🔐 SEAL FRAGMENT I:** add the clues **3 + 2 + 4 + 3 = 12** → write it in Old Persian number signs (**one 10-sign + one 2-sign**) and press them into the clay lock → the clay cracks; Fragment I glows and flies to the Seal (🟡). **The Shadow's Note:** *"Ten fragments. One of you will lose."*
**📊 Rubric rows:** Radial symmetry (VA-PK, MA) · Construction (VA-PK) · Context (VA-UC).
- *Developing ex:* petals of different sizes; some segments missing. · *Achieved ex:* 12 even segments; the petal repeats evenly; colours repeat in order. · *Flying ex:* two petal layers; explains that radial symmetry repeats around a point while a mirror line reflects one way.

---

## ⭐ WEEKS 2–10 — LESSON CARDS
*(Each card is expanded to Week 1 depth during the build. "Int" = interactive from §12. Clue answers are added for Friday's Seal Fragment, written in Old Persian number signs.)*

### WEEK 2 — STAGE II · THE KING WHO OPENED THE GATES
**Story:** Babylon, 539 BC. The fragment is hidden inside a clay cylinder.

**MON · History — Cyrus the Great & the Fall of Babylon**
- **LI:** explain how Cyrus built an empire and what the Cyrus Cylinder and the Bible tell us about him. **SC:** describe how Cyrus took Babylon; explain what the Cylinder records; compare it with Isaiah 45 and Ezra 1.
- **Key knowledge 🟢:**
  - Cyrus founded Pasargadae and ruled from about **559 to 530 BC** [S2].
  - The **Cyrus Cylinder** (British Museum) was made after Cyrus took **Babylon in 539 BC**. It says the god Babylon worshipped, Marduk, chose Cyrus, who entered Babylon **without a battle**, restored temples, **returned deported peoples** and ended forced labour. It was buried in the foundations of Babylon's city wall [S1].
  - The Cylinder **does not mention the Jews or Jerusalem**, but it shows the policy that **Ezra 1:1–4** describes: Cyrus let the Jewish exiles go home to rebuild the temple [S1].
  - **Isaiah 44:28–45:1** names Cyrus as the one God would use to rebuild Jerusalem.
- **Int:** *Cylinder Reader* (§12 #4): tap sections of the cylinder for kid-friendly translations; *Two Sources Side by Side* (Cylinder vs Ezra 1).
- **Paths:** A *Royal Announcement* (Cyrus's decree in your own words) · B *Clay cylinder model* with a summary "inscription" · C *Interview with a returning exile*.
- **Lens 📜 Mōhio:** Isaiah 45:1–7, *"I will strengthen you, though you have not acknowledged me… I am the LORD, and there is no other."* ❓ "The Cylinder says Marduk chose Cyrus. Isaiah says the LORD did. What does Isaiah teach about who really rules history?" ❓ "Can God use people who don't know Him?" **Live it out:** pray for leaders in NZ (1 Tim 2:1–2).
- **Clue:** "In which chapter of Isaiah is Cyrus named 'His anointed'?" → **45**.

**TUE · Geography — Royal Capitals: Pasargadae, Babylon, Susa & Persepolis**
- **LI:** explain why the empire had several capital cities and what each was for. **SC:** locate four capitals; describe one feature of each; explain why a huge empire might need more than one capital.
- **Key knowledge 🟢:**
  - **Pasargadae**, Cyrus's "garden capital", with stone water channels about **25 cm wide** and a basin every 13–14 m, fed from the nearby river [S2]. (Whether its garden was the first four-part *chahar bagh* is still debated [S2].)
  - **Susa**, the old capital of Elam, became an Achaemenid capital, with Darius's palace and great hall [S4].
  - **Persepolis**, begun about **518 BC** by Darius, was the empire's **ceremonial capital** [S3].
  - **Babylon**, the great city Cyrus took in 539 BC [S1].
- **Int:** *Capital Cities Map* (§12 #12): each city lights up with its "job" (garden capital, government, ceremony, old capital).
- **Paths:** A *City guidebook page* · B *Map of the capitals* with key and symbols · C *Tour-guide talk*.
- **Hononga:** NZ's capital moved from Russell to Auckland, then to Wellington in 1865 🔎 (Te Ara at build). Why do capitals move?
- **Lens ❤️ Aroha:** Jeremiah 29:7, *"Seek the peace and prosperity of the city… Pray to the LORD for it."* (written to exiles in Babylon).
- **Clue:** "Pasargadae's water channels were about how many centimetres wide?" → **25**.

**WED · Science — Producers, Consumers & Decomposers: the Grassland**
- **LI:** explain how energy passes along a food chain. **SC:** sort producers, consumers and decomposers; build a food chain; explain why decomposers matter.
- **Key knowledge 🟢:** producers make food from sunlight; consumers eat other living things; decomposers break down dead material and return nutrients to the soil (Y5 Science content [S33]). Iranian grassland and semi-desert animals include the goitered gazelle, the Persian onager and the Asiatic cheetah (`ANIMAL-05`, `-06`, `-07`) 🔎 (add an IUCN or WCS source for each at build).
- **Int:** *Food Chain Builder* (§12 #21): drag grass → gazelle → cheetah, then add the dung beetle and fungi underneath.
- **Paths:** A *Food chain report* with arrows explained · B *Food chain mobile* (hanging model) · C *"Energy's journey" role-play*.
- **Lens 📜:** Psalm 104:14, 27–28 (God gives food "at the proper time").
- **Clue:** "In the chain grass → gazelle → cheetah, how many living things are there?" → **3**.

**THU · Technology — Water from the Mountains: Build a Qanat**
- **LI:** explain how a qanat carries water by gravity and build a working model. **SC:** label a qanat (mother well, shafts, tunnel, outlet); explain why the slope must be gentle; build and test a sloping channel.
- **Key knowledge 🟢:** a qanat taps groundwater with a deep **mother well**, often near mountains, and carries it along a **gently sloping tunnel** joined to the surface by vertical shafts. Water clocks were used so farmers got a fair share [S15].
- **Int:** *Slope Tester* (§12 #31): change the tunnel's slope; too steep = water rushes and erodes the tunnel, too flat = water stops.
- **Build:** a "qanat" from a half-pipe of card or guttering on books, or a clay channel on a tray. Test: how many seconds for 200 ml of water to reach the end at three slopes?
- **Paths:** A *Test report* (results table) · B *Model build* with labels · C *Explain-it video/talk* as Nasrin.
- **Lens 🤲:** Amos 5:24, *"Let justice roll on like a river."* The water clock made sharing fair. ❓ "What does fair sharing look like in our class?"
- **Prep:** 15 min (card/guttering, books, jugs, trays, measuring cups, stopwatches). **Safety:** wipe spills at once.
- **Clue:** "A tunnel drops 1 m over 1,000 m. How many cm does it drop every 100 m?" → **10**.

**FRI · Art — Cylinder Seals & Cuneiform**
- **LI:** make a cylinder seal and print a rolled impression. **SC:** explain what cylinder seals were for; carve a design in reverse; roll a clean impression.
- **Key knowledge 🟢:** the Persepolis Fortification Archive includes about **5,000–6,000 tablets with seal impressions but no writing**: officials rolled or stamped their seals to sign documents [S7]. The Cyrus Cylinder is written in **cuneiform**, wedge-shaped writing pressed into clay [S1].
- **Int:** *Roll the Seal* (§12 #41): a seal rolls across clay and leaves its picture; *Mirror Writing* (why the design must be carved backwards).
- **Paths:** A *Seal design journal* (your symbol and its meaning) · B *Seal from a cardboard tube/foam* rolled in paint, or carved in air-dry clay · C *"Signed and sealed" role-play* (an official sealing documents).
- **Lens 🤲:** Haggai 2:23 (God makes Zerubbabel "like my signet ring") or 2 Cor 1:22 (God's seal of ownership).
- **🔐 SEAL FRAGMENT II:** **45 + 25 + 3 + 10 = 83** → four 20-signs + one 2-sign + one 1-sign. **Shadow's Note:** *"Kings say they free people. Do they really?"*

---

### WEEK 3 — STAGE III · THE ROYAL ROAD
**Story:** a relay station on the road. The caravan races a courier past a great carved cliff.

**MON · History — Darius the Organiser: Satraps, Darics, Roads & Behistun**
- **LI:** explain how Darius organised a huge empire. **SC:** describe satraps, coins and the Royal Road; explain what the Behistun inscription is; connect Darius to Ezra 6 and Daniel 6.
- **Key knowledge 🟢:**
  - Darius I carved the **Behistun inscription** about **100 m up a cliff** above the road between Babylon and Ecbatana, in **three languages** (Old Persian, Elamite, Babylonian). Copied by Henry Rawlinson in 1835 and 1843, it became the key to reading cuneiform, much as the Rosetta Stone was for hieroglyphs [S6].
  - Darius introduced the gold **daric** coin [S42]; the empire was divided into provinces called **satrapies**, each run by a **satrap** 🔎 (Britannica at build).
  - **Ezra 6:** Darius found Cyrus's decree in the archives and ordered the temple finished (completed in his sixth year, Ezra 6:15).
  - **Daniel 6:** "Darius the Mede" and the lions' den. ⚠️ Christians identify this Darius in different ways; he is probably **not** Darius I (§4.4) [S9].
- **Int:** *Run the Empire* (§12 #5): divide a map into satrapies, set taxes, place roads.
- **Paths:** A *Satrap's report to the king* · B *Behistun cliff model* with the three-language panel · C *Daniel 6 retold* as a radio news report.
- **Lens 🌱 Pānga:** Daniel 6:10, Daniel *"got down on his knees and prayed, giving thanks to his God, just as he had done before."* ❓ "What made Daniel brave?" ❓ "What's one way to stay faithful when it's hard?"
- **Clue:** "In how many languages is the Behistun inscription written?" → **3**.

**TUE · Geography — Road Towns: Settlements along the Royal Road**
- **LI:** explain how roads create and grow settlements. **SC:** describe the Royal Road and its stations; explain why towns grow on transport routes; compare with NZ road and rail towns.
- **Key knowledge 🟢:** Herodotus describes the Royal Road from Sardis to Susa as about **2,500 km** with **111 stations** for resting and changing horses. Travellers took about 90 days; messages moved by **relay**, one rider and horse per day's stage. Herodotus praised the couriers: *"Neither snow nor rain nor heat nor darkness of night"* stops them [S5].
- **Int:** *Royal Road Relay* (§12 #13): a route draws itself; compare one traveller (90 days) with a relay of riders.
- **Hononga 🟢:** Ashburton grew from an accommodation house at the river ferry on the main road south (1858) [S45]. ❓ "What happens to a town when a road or railway bypasses it?"
- **Paths:** A *Road-town explanation* · B *Map of the road* with stations to scale · C *Courier's log* performance.
- **Lens 📜:** Isaiah 40:3, *"Prepare the way for the LORD; make straight in the desert a highway for our God."*
- **Clue:** "How many stations did the Royal Road have, according to Herodotus?" → **111**.

**WED · Science — Food Webs & Predators: the Persian Leopard**
- **LI:** explain how food webs show the links in a community. **SC:** build a food web; explain predator and prey; predict what happens when one species is removed.
- **Key knowledge 🟢:** the Persian leopard's staple prey are **wild goat, wild sheep, wild boar and Indian crested porcupine**; wild-goat numbers are the main factor linked to leopards being present. Threats include habitat loss, poaching (sometimes with poisoned bait) and livestock grazing; about **70%** of recorded leopard deaths in 2007–2011 were deliberate killing or poisoning [S26].
- **Int:** *Food Web Weaver* (§12 #22): draw links; then "remove" the wild goat and watch the web wobble.
- **Paths:** A *Food web poster with explanation* · B *String food web* (students hold cards and string) · C *"What if?" news report*.
- **Lens ❤️:** Job 38:39–41 (God provides food for the lion and the raven).
- **Clue:** "How many staple prey animals does the Persian leopard depend on?" → **4**.

**THU · Technology — Catching the Wind: the Windcatcher**
- **LI:** explain how a windcatcher moves air to cool a building, and build and test a model. **SC:** explain that hot air rises and moving air cools us; build a windcatcher tower; test it fairly.
- **Key knowledge 🟢:** windcatchers are tall towers that catch breezes and draw fresh air into buildings, while hot air escapes through vertical slots, using no electricity. Yazd has about **700**; the oldest surviving one dates from the **14th century** [S16].
- **Int:** *Airflow Simulator* (§12 #32): arrows show air entering, sinking and pushing warm air out.
- **Build & test:** a card tower on a shoebox "house" with a paper streamer inside; a fan as the wind. Variable: one, two or four openings.
- **Paths:** A *Fair-test write-up* · B *Model build* · C *Explain with arrows* talk.
- **Lens 🤲:** John 3:8 (the wind blows where it pleases; you hear it but can't see it). Labelled as an analogy with "where the picture breaks".
- **Prep:** 15 min (shoeboxes, card, tape, streamers, a desk fan). **Safety:** fan fingers rule; no mains plugs handled by students.
- **Clue:** "In which century was Yazd's oldest surviving windcatcher built?" → **14**.

**FRI · Art — Relief Carving: the Procession of Nations**
- **LI:** make a low-relief panel inspired by Persian processional carving. **SC:** explain what a relief is; show figures in profile in a repeating procession; build up layers for depth.
- **Key knowledge 🟢:** the **Apadana** at Persepolis was a great hall whose staircases are decorated with reliefs [S3]; the reliefs show people from many nations bringing gifts to the king 🔎 (add a Met/British Museum or Persepolis museum source at build).
- **Int:** *Relief Layers* (§12 #42): see a flat drawing become low relief, layer by layer.
- **Paths:** A *Look closely* response (See / Think / Wonder) · B *Card-layer or clay relief* of one gift-bearer · C *Guide talk* about who is in the procession.
- **Lens ✨:** Revelation 21:26 ("the glory and honour of the nations will be brought into it") and Psalm 72:10–11.
- **🔐 SEAL FRAGMENT III:** **3 + 111 + 4 + 14 = 132** → one 100-sign + one 20-sign + one 10-sign + one 2-sign. **Shadow's Note:** a message in a code the caravan can't read… yet (solved in Week 7 Technology).

---

### WEEK 4 — STAGE IV · PRIDE BEFORE THE FALL
**Story:** a storm at the Hellespont. The fragment falls into the sea and Nasrin fishes it out.

**MON · History — Xerxes & the Greeks: Whose Story?**
- **LI:** compare Persian and Greek perspectives on the wars of 480 BC. **SC:** describe Thermopylae and Salamis; explain who wrote the sources; explain why perspectives differ.
- **Key knowledge 🟢:** at **Thermopylae (480 BC)** the Spartan king **Leonidas** stayed with about **300 Spartans** and others; the Persian **Immortals** took a mountain path and the Persians won. Greek fortunes turned at the naval battle of **Salamis** later that year [S8]. Most of what we know comes from **Herodotus, a Greek** [S5][S8].
- **Int:** *Two Tellings* (§12 #6): the same battle told by a Greek and a Persian narrator; spot the differences.
- **Paths:** A *Two-perspective diary* · B *Map of the war* with routes · C *Debate: "Was Thermopylae a win or a loss?"*
- **🕊️ CARE:** no gore; the focus is on sources and perspective.
- **Lens 📜 Mōhio:** Proverbs 16:18, *"Pride goes before destruction."* ❓ "Herodotus says Xerxes was proud. Is that fair? How would we know?" ❓ "Where can pride trip *us* up?"
- **Clue:** "About how many Spartans stayed with Leonidas?" → **300**.

**TUE · Geography — Water Towns: Qanats, Oases & Yazd**
- **LI:** explain how water technology makes desert cities possible. **SC:** explain how a qanat supports a town; describe Yazd as a desert city; compare with water races on the Canterbury Plains.
- **Key knowledge 🟢:** the **Persian Qanat** World Heritage listing (2016) includes **11 qanats**; the Gonabad qanat dates from about the 3rd–4th century BC, and the Hasan-e Mashir qanat near Yazd from about AD 1400 [S15]. Yazd's summer temperatures go above **40 °C**; its windcatchers help people live there [S16].
- **Hononga 🟢:** the Ashburton District's **stockwater race network** brings water across the plains; it was over 4,000 km long in 2000 and about 1,543 km in 2024 [S32].
- **Int:** *Oasis Builder* (§12 #14): add qanats, gardens and houses; watch a town grow where the water appears.
- **Paths:** A *Compare Yazd and Ashburton* (Venn diagram + paragraph) · B *Oasis town map* · C *Water-master's talk*.
- **Lens ❤️:** Isaiah 35:1, 6–7 (water in the wilderness; streams in the desert).
- **Clue:** "How many qanats are in the World Heritage listing?" → **11**.

**WED · Science — Desert Adaptations: the Lut**
- **LI:** explain how desert animals are adapted to heat and lack of water. **SC:** describe desert conditions; explain three adaptations (body, behaviour); explain variation and adaptation.
- **Key knowledge 🟢:** NASA satellites measured **70.7 °C** land-surface temperature in the Lut in 2005 (ground temperature, not air temperature) [S25]. Desert animals such as the **sand cat** and **jerboa** (`ANIMAL-11`, `-12`) are active at night and avoid the heat 🔎 (IUCN/zoo source at build).
- 📜/🔬 **D8:** *Main box:* God created animals with variety within their kinds, able to adapt to different places. *Side note:* "Many scientists believe that over millions of years, natural selection produced new species" 🔎.
- **Int:** *Survive the Lut* (§12 #23): choose adaptations for a made-up desert animal and test it through a day and night.
- **Paths:** A *Adaptation fact file* · B *Design a desert animal* (model or labelled drawing) · C *Gandom's survival tips* talk.
- **Lens 📜:** Job 39:1–8 (God knows the wild donkey's desert home). The Persian onager is a wild donkey.
- **Clue:** "Round the Lut's record 70.7 °C to the nearest whole degree." → **71**.

**THU · Technology — Ice in the Desert: the Yakhchāl (insulation fair test)**
- **LI:** explain how insulation slows heat flow and test materials fairly. **SC:** explain how the yakhchāl kept ice; plan a fair test; compare insulators using data.
- **Key knowledge 🟢:** the yakhchāl stored ice made in winter in a deep pit under a thick mud-brick dome, keeping it into summer [S17] 🔎 (second source at build).
- **Test:** which wrap keeps an ice cube longest: foil, felt, newspaper, bubble wrap, nothing (the control)? Change one thing, measure one thing, keep everything else the same.
- **Int:** *Heat Flow* (§12 #33): heat arrows through thin and thick walls.
- **Paths:** A *Fair-test report* with graph · B *Design an ice house* model · C *Science presenter* explaining the results.
- **Lens 🤲:** Proverbs 6:6–8 (the ant stores food in summer). Planning ahead is wise.
- **Prep:** 10 min (ice cubes in identical cups, materials, stopwatch, timer on screen).
- **Clue:** "At what temperature in °C does water freeze?" → **0**.

**FRI · Art — Glazed-Brick Archers: Printmaking**
- **LI:** make a repeating relief print inspired by the archers frieze. **SC:** explain what the frieze is; carve a foam printing block; print a repeating border.
- **Key knowledge 🟢:** the **Frieze of Archers**, made of **coloured glazed bricks** about **510 BC** for the palace of Darius I at Susa, is now in the Louvre [S12]. Susa's palace used ceramic wall decoration, a new style that became typical of the Achaemenid Empire [S4].
- **Int:** *Print Studio* (§12 #43): see positive and negative areas; *Repeat Maker* for borders.
- **Paths:** A *Print and reflection* · B *Repeating border* of three prints in sequence · C *Teach-a-print* demonstration.
- **Lens 🤲:** Ephesians 6:10–11 (the armour of God). Label as an analogy.
- **🔐 SEAL FRAGMENT IV:** **300 + 11 + 71 + 0 = 382** → three 100-signs + four 20-signs + one 2-sign. **Shadow's Note:** *"Even the mightiest king loses. Why bother?"*

---

### WEEK 5 — STAGE V · FOR SUCH A TIME AS THIS
**Story:** the palace at Susa, where a queen risks her life.

**MON · History — Esther, Queen of Persia**
- **LI:** retell the story of Esther and connect it to what we know of Xerxes and Susa. **SC:** retell the main events; explain who Ahasuerus probably was; explain how God's care shows in the story.
- **Key knowledge 🟢:** Britannica identifies **Ahasuerus** in Esther with **Xerxes I** [S9]. The story is set in **Susa** [S4]. The book is the origin of the festival of **Purim** [S9]. God is never named in Esther, yet His care is seen in every "coincidence".
- **Int:** *Turning Points* (§12 #7): order the events, then flip each card to see the "hidden hand".
- **Paths:** A *Esther's journal* · B *Storyboard comic* · C *Readers' theatre*.
- **🕊️ CARE:** Haman's plan to destroy a people is serious; keep the focus on courage and rescue.
- **Lens 🌱 Pānga:** Esther 4:14, *"Who knows but that you have come to your royal position for such a time as this?"* ❓ "Where might God have put *you* 'for such a time as this'?"
- **Clue:** "Esther 4:14: which verse holds the famous words 'for such a time as this'?" → **14**.

**TUE · Geography — Layers of a City: Susa & the Tell**
- **LI:** explain how cities build up in layers over time and what archaeologists learn from them. **SC:** explain what a tell is; describe Susa's layers; explain continuity and change.
- **Key knowledge 🟢:** Susa has **27 layers** of settlement, one on top of another, from very ancient times to the 13th century AD. It was capital of both Elam and the Achaemenid Empire, and more than 150 years of archaeology have taken place there [S4]. (D8 side note for the earliest date, §4.6.)
- **Int:** *Dig the Tell* (§12 #15): dig down through layers; each reveals objects and a date.
- **Paths:** A *Archaeologist's report* · B *Layered tell model* (coloured sand or clay in a clear cup) · C *"Layer by layer" talk*.
- **Lens 📜:** Psalm 90:1–2 ("Lord, you have been our dwelling place throughout all generations").
- **Clue:** "How many layers of settlement does Susa have?" → **27**.

**WED · Science — Wetlands & Salt Lakes: Lake Urmia**
- **LI:** explain how a wetland food chain works and how changing water affects it. **SC:** build the brine shrimp → flamingo chain; explain why the lake is shrinking; predict effects.
- **Key knowledge 🟢:** by July 2020 Lake Urmia had lost **45%** of its area and **85%** of its volume, mainly because water was taken upstream for dams and farms. Saltier water threatens the **brine shrimp (Artemia)** that flamingos eat; Iran began a restoration programme in 2013 [S28].
- **Int:** *Salt Lake Slider* (§12 #24): lower the water; watch salt rise, shrimp fall and flamingos leave.
- **Paths:** A *Cause-and-effect chain* · B *Lake model* (before/after) · C *Flamingo's news report*.
- **Lens ❤️:** Genesis 2:15 (work the garden and take care of it).
- **Clue:** "What percentage of its area had Lake Urmia lost by 2020?" → **45**.

**THU · Technology — Arches & Domes: Building Strong**
- **LI:** explain how arches carry weight and build one that holds a load. **SC:** explain compression in an arch; build an arch from blocks or card; test and improve it.
- **Key knowledge 🟢:** an arch turns the weight above into a push (compression) that travels down to its two **feet** 🔎 (Britannica "arch" at build). Persian builders used arches and domes in mud brick, for example the yakhchāl's dome [S17].
- **Int:** *Arch Force* (§12 #34): arrows show the load flowing around the arch; remove the keystone!
- **Build:** a card arch or a sugar-cube/foam-block arch; test with coins until it fails.
- **Paths:** A *Test results* · B *Strongest arch challenge* · C *Engineer's explanation*.
- **Lens 🤲:** Matthew 7:24–27 (build on the rock).
- **Clue:** "An arch pushes its load down into how many feet?" → **2**.

**FRI · Art — Gold of the Oxus: Foil Embossing**
- **LI:** emboss a metal-foil design inspired by Persian goldwork. **SC:** describe the Oxus chariot; emboss lines and raised areas; add detail with pattern.
- **Key knowledge 🟢:** the **Oxus chariot model**, made of **gold** in the **5th–4th century BC**, shows four small horses pulling a chariot with a seated figure and a driver. It is in the British Museum (Room 52) [S11].
- **Int:** *Raise the Gold* (§12 #44): shows repoussé (pushing from behind) and chasing (lines from the front).
- **Paths:** A *Museum label* for your piece · B *Foil emboss* (craft foil on a felt pad, a blunt pencil) · C *Treasure-hunter talk*.
- **Lens ✨:** Proverbs 3:13–15 (wisdom is worth more than gold). A Seal clue!
- **🔐 SEAL FRAGMENT V:** **14 + 27 + 45 + 2 = 88** → four 20-signs + four 2-signs. **Shadow's Note:** *"One girl can't change anything."*

---

### WEEK 6 — STAGE VI · REBUILDING THE WALLS (Big Projects chosen)
**Story:** Jerusalem's broken walls. All teams must cooperate to rebuild one wall together.

**MON · History — Ezra & Nehemiah: Going Home to Rebuild**
- **LI:** explain why the exiles returned and how Nehemiah led the rebuilding. **SC:** order Cyrus → Ezra → Nehemiah; explain Nehemiah's prayer-plus-action; describe the opposition.
- **Key knowledge 🟢:** Nehemiah was cupbearer to King **Artaxerxes** (Neh 1:11; 2:1). He prayed, asked the king, planned, organised families by sections of the wall and kept watch against attack; the wall was finished in **52 days** (Neh 6:15). Ezra came to teach God's law (Ezra 7).
- **Int:** *Wall of 52 Days* (§12 #8): every team adds bricks by answering review questions; mockers' shadows appear (Neh 4:2–3).
- **Paths:** A *Nehemiah's leadership report* · B *Wall model with team sections* · C *Interview with Nehemiah* (from the Bible text).
- **Lens 🤲 Manaaki:** Nehemiah 4:6, *"The people worked with all their heart."* ❓ "What made the team succeed?" ❓ "How can our class 'rebuild' something?"
- **Clue:** "How many days did it take to rebuild the wall?" → **52**.

**TUE · Geography — Walls & Gates: Jerusalem Rebuilt**
- **LI:** explain why ancient cities had walls and gates, and how cities are planned and rebuilt. **SC:** give three reasons for walls; describe how the return changed Jerusalem; compare with how NZ cities protect people today.
- **Key knowledge 🟢:** the list of returning exiles numbers **42,360** (Ezra 2:64). Nehemiah 3 lists the gates and the families who rebuilt next to them.
- **Hononga:** Māori **pā** used palisades, ditches and banks for defence 🔎 (Te Ara "pā" at build).
- **Int:** *City Gate Planner* (§12 #16): place gates for water, market and road.
- **Paths:** A *Why walls?* explanation · B *Walled-city plan* · C *Gatekeeper's talk*.
- **Lens 📜:** Psalm 127:1, *"Unless the LORD builds the house, the builders labour in vain."*
- **Clue:** "Ezra 2:64 says 42,360 returned. How many whole thousands is that?" → **42**.

**WED · Science — Living Together: Mutualism, Parasitism & Competition**
- **LI:** describe the relationships between species in a community. **SC:** define mutualism, parasitism and competition; give an example of each; explain how they affect populations.
- **Key knowledge 🟢:** Y5 Science includes relationships such as **mutualism and parasitism** [S33]. Examples: bees and flowering fruit trees in Persian gardens (mutualism); ticks on camels (parasitism); leopards and wolves hunting the same goats (competition) 🔎 (add a source for each example at build).
- **Int:** *Relationship Sorter* (§12 #25): win–win, win–lose, lose–lose.
- **Paths:** A *Three-relationship report* · B *Relationship cards game* · C *"Who needs whom?" role-play*.
- **Lens ❤️:** 1 Corinthians 12:21–26 (every part of the body needs the others).
- **Clue:** "How many kinds of relationship did we learn today?" → **3**.

**THU · Technology — Royal Road Messages 1: Relay Algorithms**
- **LI:** write and follow precise algorithms. **SC:** explain what an algorithm is; write step-by-step instructions; find and fix a bug in someone's instructions.
- **Key knowledge 🟢:** Royal Road messages went by **relay**, rider to rider, station to station [S5]. An **algorithm** is a precise set of steps; in DT-CT Progress Outcome 2 students give, follow and debug simple algorithms [S37].
- **Unplugged:** teams write instructions to move a "courier" (a student) across a grid of stations; another team follows them exactly. **Scratch / Block Sim:** move a courier sprite from station to station [S39].
- **Int:** *Block Sim* (§12 #35).
- **Paths:** A *Algorithm written & tested* · B *Scratch/Block Sim route* · C *Human-robot relay* demonstration.
- **Lens 🤲:** 1 Corinthians 14:40 ("everything should be done in a fitting and orderly way").
- **Clue:** "A message passes through 5 stages. One rider for each stage. How many riders?" → **5**.

**FRI · Art — Paradise Gardens: Designing a Chahar Bagh**
- **LI:** design a symmetrical Persian-style garden plan. **SC:** explain the four-part garden idea; use symmetry and water lines; add plants, pools and paths.
- **Key knowledge 🟢:** Pasargadae's royal garden had stone water channels [S2]. Later Persian gardens are famous for the **chahar bagh** ("four gardens") layout, divided by water channels; UNESCO lists nine Persian gardens as World Heritage 🔎 [S18] (the Met notes that Pasargadae's own four-part layout is uncertain [S2]).
- **Int:** *Garden Grid* (§12 #45): place channels, pools, trees and pavilions with mirror symmetry.
- **Paths:** A *Garden plan + description* · B *Collaborative class garden* (each student designs one square) · C *Garden tour guide*.
- **Lens ✨:** Genesis 2:8–10 (God planted a garden, with a river dividing in four). *"Paradise"* comes from an old Persian word for an enclosed garden 🔎 (source at build).
- **Big Projects chosen** (§6.2).
- **🔐 SEAL FRAGMENT VI:** **52 + 42 + 3 + 5 = 102** → one 100-sign + one 2-sign. **Shadow's Note:** mockers' shadows: *"What are those feeble people doing?"* (Neh 4:2).

---

### WEEK 7 — STAGE VII · THE MARKETPLACE OF THE WORLD
**Story:** a great bazaar. A thief among the camels!

**MON · History — Everyday Lives: Workers, Women & Rations in the Persepolis Tablets**
- **LI:** use clay tablets to learn about ordinary people. **SC:** explain what the Persepolis Fortification tablets are; describe what they record; explain why ordinary lives matter to historians.
- **Key knowledge 🟢:** tens of thousands of tablets and fragments were found at Persepolis in **1933**. About 15,000–18,000 are written in **Elamite**; they date to **around 500 BC** and record **storing and handing out food**, documenting society "from the lowliest workers to the king's own family" [S7]. Women appear in the records as workers receiving rations 🔎 (Encyclopaedia Iranica at build).
- **Int:** *Ration Tablet Reader* (§12 #9): read simplified tablets; work out who got what.
- **Paths:** A *A day in the life* diary · B *Clay tablet* with a ration record · C *Market-day role-play*.
- **Lens ❤️ Aroha:** Proverbs 31:31 and Colossians 3:23–24 (work done for the Lord).
- **Clue:** "The tablets date to around 500 BC. How many hundreds is 500?" → **5**.

**TUE · Geography — Bazaars & Caravanserais: Markets & Trade**
- **LI:** explain how markets and trade routes grow cities. **SC:** describe a bazaar and a caravanserai; explain specialisation and exchange; give a local example.
- **Key knowledge 🟢:** the **Persian Caravanserai** World Heritage listing (2023) includes **54** roadside inns built along trade and pilgrimage routes, many with water storage [S19]. The **Tabriz Historic Bazaar** was "one of the most important commercial centres on the Silk Road" [S20].
- **Int:** *Bazaar Trader* (§12 #17): specialise (potter, weaver, farmer) and swap; see why trade helps everyone.
- **Hononga:** your local farmers' market or saleyards: who specialises in what?
- **Paths:** A *Specialisation explainer* · B *Bazaar map* · C *Merchant's pitch*.
- **Lens 🌱:** Proverbs 11:1, *"The LORD detests dishonest scales."*
- **Clue:** "How many caravanserais are in the World Heritage listing?" → **54**.

**WED · Science — Working Animals: Camels, Horses & Care**
- **LI:** explain how camels are adapted for desert travel and why animals deserve care. **SC:** describe three camel adaptations; compare Bactrian and dromedary camels; explain good animal care.
- **Key knowledge 🟢:** Bactrian camels have **two humps**, dromedaries one; humps store fat, not water 🔎 (zoo or museum source at build). Camels were used by Persian caravans (`ANIMAL-10`) 🔎.
- **Int:** *Camel Design* (§12 #26): tap each body part to see its adaptation.
- **Paths:** A *Camel fact file* · B *Labelled camel model* · C *Gandom's complaints department* (comic talk about care).
- **Lens ❤️:** Proverbs 12:10, *"The righteous care for the needs of their animals."* Genesis 24 (Rebekah waters the camels).
- **Clue:** "How many humps does a Bactrian camel have?" → **2**.

**THU · Technology — Royal Road Messages 2: Secret Codes & Loops**
- **LI:** use an algorithm to encode and decode messages, and use a loop. **SC:** explain a cipher; encode and decode with a shift; use a repeat loop in code.
- **Key knowledge 🟢:** Herodotus tells how **Histiaeus** shaved a slave's head, tattooed a message on it, waited for the hair to grow back and sent him to Aristagoras: a hidden message [S40]. A **shift cipher** moves each letter along the alphabet by the same number.
- **Unplugged + Block Sim/Scratch:** a cipher wheel; then a loop that shifts each letter. **Solve the Shadow's Week 3 code.**
- **Paths:** A *Code book* · B *Cipher wheel* · C *Codebreaker challenge*.
- **Lens 🤲:** Proverbs 25:2 ("It is the glory of God to conceal a matter; to search out a matter is the glory of kings").
- **Clue:** "Our cipher shifted every letter by how many places?" → **3**.

**FRI · Art — Carpets & Weaving: the Pazyryk Carpet**
- **LI:** design and weave a patterned carpet section. **SC:** describe the Pazyryk carpet; design a border and centre; weave or draw with repeating motifs.
- **Key knowledge 🟢:** the **Pazyryk carpet**, the oldest known knotted carpet, is about **2,400–2,500 years old** (5th–4th century BC). It was found in a burial mound in the Altai Mountains of Siberia, is about **1.83 × 2 m** with about **360,000 knots per square metre**, and is held by the Hermitage Museum [S13]. Many experts see Persian (Achaemenid) influence in its design 🔎 (confirm with the Hermitage page).
- **Int:** *Knot Counter* (§12 #46): zoom into a carpet grid; one square = one knot.
- **Paths:** A *Design notes + plan* · B *Paper weaving* or grid-paper "knot" design · C *Carpet-seller's story*.
- **Lens ❤️:** Exodus 35:25–26 (skilled women spun for the tabernacle).
- **🔐 SEAL FRAGMENT VII:** **5 + 54 + 2 + 3 = 64** → three 20-signs + two 2-signs. **Shadow's Note:** *"Everyone has a price."*

---

### WEEK 8 — STAGE VIII · FIRE ON THE MOUNTAIN
**Story:** Persepolis burns. The heaviest setback: the fragment is cracked.

**MON · History — Alexander & the Fall of Persia**
- **LI:** explain how the Persian Empire fell and how Daniel's visions describe kingdoms rising and falling. **SC:** describe Gaugamela and the burning of Persepolis; compare the reasons ancient writers give; connect to Daniel 8.
- **Key knowledge 🟢:** Alexander defeated Darius III at **Gaugamela (331 BC)** and burned **Persepolis in 330 BC**. Ancient writers give different reasons: revenge for Xerxes burning Athens, a drunken feast, or hostility; Arrian admits the true motive may never be known [S10].
- **Bible:** Daniel 8:20–21 (the ram is "the kings of Media and Persia"; the goat is "the king of Greece"); Daniel 2 (kingdoms rise and fall, but God's kingdom will never be destroyed, 2:44).
- **Int:** *Why Did It Burn?* (§12 #9b): weigh the three explanations with their sources.
- **Paths:** A *Historian's verdict* · B *Before-and-after Persepolis* · C *Courtroom: "Alexander on trial"*.
- **Lens 📜 Mōhio:** Daniel 2:44. ❓ "Every kingdom we've studied fell. Which kingdom lasts?"
- **Clue:** "In what year BC did Persepolis burn?" → **330**.

**TUE · Geography — Hazards & Rebuilding: the Bam Earthquake**
- **LI:** explain how earthquakes affect cities and how cities rebuild. **SC:** explain why Iran has earthquakes 🔎; describe the 2003 Bam earthquake; explain how rebuilding can make a city safer.
- **Key knowledge 🟢:** a magnitude **6.6** earthquake struck Bam on **26 December 2003**; up to **95%** of buildings were damaged or destroyed, many built of mud brick with heavy roofs; reconstruction followed stricter building codes [S21] 🔎 (add USGS at build).
- **🕊️ CARE:** many people died. Keep the focus on helpers, safer buildings and preparation, not casualties. Some students may remember the Canterbury earthquakes.
- **Hononga:** the 2010–11 Canterbury earthquakes and Christchurch's rebuild 🔎 (NZ History/Te Ara at build); our school's earthquake drill.
- **Int:** *Shake Table* (§12 #18): test mud-brick vs reinforced buildings.
- **Paths:** A *Prepare-for-a-quake guide* · B *Safer building model* · C *Rebuild planner's talk*.
- **Lens ❤️:** Psalm 46:1–2, *"God is our refuge and strength… though the earth give way."*
- **Clue:** "Up to what percentage of Bam's buildings were damaged or destroyed?" → **95**.

**WED · Science — Endangered: the Asiatic Cheetah**
- **LI:** explain why species become endangered and how people help them. **SC:** define endangered and extinct; explain the threats to the Asiatic cheetah; suggest a conservation action.
- **Key knowledge 🟢:** in March 2025 Iran's environment chief said only **17 Asiatic cheetahs** were left; animals have died on highways in Semnan province, around the **Turan** sanctuary [S27] 🔎 (add a WCS or IUCN source). The Caspian tiger is extinct (`ANIMAL-09`) 🔎.
- **Int:** *Population Graph* (§12 #27): plot cheetah estimates over time; predict the future.
- **Paths:** A *Persuasive letter* to a decision-maker · B *Awareness poster* · C *Data detectives* talk.
- **Lens 🌱 Pānga:** Genesis 1:28 and Psalm 24:1 (care for what is God's).
- **Clue:** "How many Asiatic cheetahs were said to be left in 2025?" → **17**.

**THU · Technology — Royal Road Messages 3: Binary Signals & Variables**
- **LI:** represent messages in binary and store values in a variable. **SC:** explain that computers store data as 1s and 0s; convert small numbers to binary; use a variable in code.
- **Key knowledge 🟢:** digital devices store data using just **two states**, represented by **binary digits (bits)** (Progress Outcome 3) [S38].
- **Unplugged:** lamp-signal cards (on = 1, off = 0) with values 8, 4, 2, 1; send numbers across the room. **Block Sim/Scratch:** a variable counts the messages delivered.
- **Int:** *Binary Lamps* (§12 #36).
- **Paths:** A *Binary code book* · B *Binary bracelet/beads* · C *Signal relay* demonstration.
- **Lens 📜:** Matthew 5:37 ("let your 'Yes' be 'Yes' and your 'No,' 'No'"). Labelled as an analogy.
- **Clue:** "What number is 1011 in binary (8 + 0 + 2 + 1)?" → **11**.

**FRI · Art — Miniature Painting: the Shahnameh**
- **LI:** paint a detailed miniature scene that tells a story. **SC:** describe Persian miniature painting; plan a scene with layers and borders; use fine detail and bright colour.
- **Key knowledge 🟢:** the **Shahnameh** (Book of Kings) is a Persian epic; the illustrated *Shahnama of Shah Tahmasp* (1500s) is one of the most famous painted manuscripts [S14]. Its story of **Zal**, raised by the **Simurgh**, explains our Shadow Courier's name 🔎 (check against the Met's Shahnameh pages).
- **Int:** *Miniature Zoom* (§12 #47): zoom into a painted page; find tiny details.
- **Paths:** A *Story caption* for your scene · B *Miniature painting* (A5, fine brushes) · C *Storyteller* retelling the scene.
- **Lens ✨:** Isaiah 61:3 ("a crown of beauty instead of ashes"). After Persepolis burned, beauty and stories survived.
- **🔐 SEAL FRAGMENT VIII:** **330 + 95 + 17 + 11 = 453** → four 100-signs + two 20-signs + one 10-sign + one 2-sign + one 1-sign. The fragment is cracked, but holds. **Shadow's Note:** *"Everything burns in the end."*

---

### WEEK 9 — STAGE IX · STAR-WATCHERS & SILK
**Story:** a night journey with star-watchers from the east. **The Shadow Courier is unmasked: Zal.**

**MON · History — Parthians, Sasanians & the Magi**
- **LI:** explain how Persia rose again after Alexander and how Persians appear in the story of Jesus and the early church. **SC:** name the Parthians and Sasanians; explain who the Magi were; connect Acts 2:9 back to Week 1.
- **Key knowledge 🟢:** after Alexander, Persia rose again under the **Parthians** and then the **Sasanians**, who ruled until the AD 600s 🔎 (Britannica at build). **Matthew 2:1–12:** Magi "from the east" followed a star to worship Jesus; the Bible doesn't say how many or call them kings. **Acts 2:9:** *"Parthians, Medes and Elamites"* heard the gospel at Pentecost.
- **Int:** *Persia Rises Again* timeline extension (§12 #3).
- **Paths:** A *What the Bible says vs what tradition says* (Magi) · B *Gift box* for Jesus with labels · C *Magi's journey* travel diary read aloud.
- **Lens ❤️ Aroha:** Matthew 2:10–11. ❓ "People from Persia were among the first to worship Jesus. What does that show?"
- **Clue:** "Acts 2:9 names Parthians, Medes and Elamites. How many peoples is that?" → **3**.

**TUE · Geography — Silk Road Cities: Persia Meets China**
- **LI:** compare cities on the Silk Road and explain how trade connected Persia and China. **SC:** trace the Silk Road; compare a Persian and a Chinese city; explain what moved along the road (goods, ideas, faith).
- **Key knowledge 🟢:** the Tabriz bazaar was a major Silk Road centre [S20]; caravanserais served Silk Road travellers [S19]. China's Silk Road cities 🔎 (UNESCO Silk Roads at build). *(Y5 ancient-civilisation link: compare with ancient China; §3.1 flag.)*
- **Int:** *Silk Road Journey* (§12 #19): goods change hands city by city.
- **Hononga:** China is one of NZ's biggest trading partners today 🔎 (MFAT/Stats NZ at build).
- **Paths:** A *Two-city comparison* · B *Silk Road map with goods* · C *Merchant's travel tale*.
- **Lens 📜:** Isaiah 60:3, 6 (nations come to the light; camels from the east bring gold and incense).
- **Clue:** "The Royal Road was about 2,500 km long. How many hundreds of kilometres?" → **25**.

**WED · Science — Sea Communities: the Caspian Seal**
- **LI:** describe a sea community and the threats it faces. **SC:** describe how the Caspian seal lives; build a sea food chain; explain three threats and what helps.
- **Key knowledge 🟢:** the Caspian seal lives **only in the Caspian Sea**, breeds on ice in the north, and is **Endangered**; numbers have fallen by **over 90%** since the early 1900s, with fishing bycatch a major cause [S29] 🔎 (add IUCN Red List). Persian Gulf animals include the dugong and hawksbill turtle (`ANIMAL-16`, `-18`) 🔎.
- **Int:** *Ice Nursery* (§12 #28): warmer winters shrink the ice; what happens to pups?
- **Paths:** A *Threats & solutions table* · B *Sea community diorama* · C *Ranger's warning broadcast*.
- **Lens ❤️:** Psalm 104:24–25 ("the sea, vast and spacious, teeming with creatures").
- **Clue:** "Caspian seal numbers have fallen by over what percentage?" → **90**.

**THU · Technology — Royal Road Messages 4: Events, Decisions & Debugging (the Courier Game)**
- **LI:** build a simple game using events and decisions, and debug it methodically. **SC:** use an event (when key pressed); use an if/else decision; find and fix a bug by testing.
- **Key knowledge 🟢:** students develop and debug programs with inputs, outputs, sequence and loops (PO3) [S38].
- **Build:** a courier sprite races station to station; *if* it touches a sandstorm, *then* wait 2 seconds; score counts deliveries. Unplugged version with dice and cards.
- **Int:** *Block Sim* events & if/else (§12 #35).
- **Paths:** A *Bug log* (what broke, how I fixed it) · B *Courier game* · C *Game tester's review*.
- **Lens ❤️:** Colossians 3:13 (forgive as the Lord forgave you). Debugging is fixing, not blaming. Links to Zal.
- **Clue:** "The sandstorm appears 4 times in our test run. How many times must the code handle it?" → **4**.

**FRI · Art — The Magi's Night Sky**
- **LI:** paint a night-sky journey using colour blending and light. **SC:** blend dark-to-light sky colours; show light from a star; tell a story through silhouette.
- **Key knowledge 🟢:** Matthew 2:9–10 (the star went ahead of them). Silhouettes of the caravan from the week's study.
- **Int:** *Night Sky Blend* (§12 #48).
- **Paths:** A *Poem + painting* · B *Silhouette painting* · C *Gallery talk*.
- **Lens ✨:** Numbers 24:17 ("a star will come out of Jacob").
- **🔐 SEAL FRAGMENT IX:** **3 + 25 + 90 + 4 = 122** → one 100-sign + one 20-sign + one 2-sign. **Zal unmasked** (`CHAR-05`): *"My family made beautiful things. Then we lost everything."*

---

### WEEK 10 — STAGE X · THE GATE OF ALL NATIONS
**MON · History — Legacy & Iran Today: Nowruz, Words & Gardens**
- **Key knowledge 🟢:** **Nowruz**, the new year on **21 March** marking spring, is on UNESCO's Intangible Cultural Heritage list (2016), shared by **12 countries** including Iran [S24]. English words from Persian 🔎 (e.g. *paradise*, *bazaar*, *caravan*; Oxford/Merriam-Webster at build). Students present Big Project museum cases.
- **Lens ✨:** Revelation 7:9 (every nation, tribe, people and language). Pray for Iranians today (D10).
- **Clue:** "On what date in March is Nowruz?" → **21**.

**TUE · Geography — Cities Today: Tehran, NZ & Planning a Fair City**
- **Key knowledge 🟢:** Tehran grew from about **1.56 million (1956)** to **7.7 million (2006)** [S22] 🔎 (add the Statistical Centre of Iran or UN data). Most Iranians now live in cities [S23] 🔎. **Y6:** why people move to cities; **informal settlements** 🔎 (UN-Habitat at build); compare with NZ city growth. Students present City Planner projects.
- **Clue:** "Tehran had 7.7 million people in 2006. How many whole millions?" → **7**.

**WED · Science — Recovery: Sanctuaries, the Fallow Deer & the Takahē**
- **Key knowledge 🟢:** the **Persian fallow deer** was thought extinct until about **30** were found in south-western Iran in **1956**; breeding programmes in Iran, Germany and Israel brought it back, with about **500** worldwide today [S30]. **Hononga:** the **takahē**, thought extinct, was rediscovered in Fiordland on **20 November 1948**; about **500** birds by 2023 [S31]. Students present Wild Persia Sanctuaries.
- **Clue:** "About how many Persian fallow deer were found in 1956?" → **30**.

**THU · Technology — Showcase: Test, Evaluate & Present** — test against the brief, evaluate, present Desert Engineer models or Royal Road Coder games.
- **Clue:** "How many stages in our design process (need → plan → build → test → improve)?" → **5**.

**FRI · Art — The Persia Exhibition** — Paradise Garden panels, museum cases, city plans, sanctuaries, models and games; whānau invited (optional Nowruz-style spring table, D14).
**FINAL SEAL X:** **21 + 7 + 30 + 5 = 63** → three 20-signs + one 2-sign + one 1-sign. The **Forgiveness Vote** for Zal (Col 3:13; Rom 12:20–21) → all ten fragments join → the Seal's message: *"Seek wisdom as silver and search for it as for hidden treasure"* (Proverbs 2:4) → closing reflection (Prov 2:6: *"the LORD gives wisdom"*) → awards (Esther Courage, Daniel Integrity, Nehemiah Teamwork, Bezalel Craftsmanship, Kaitiaki Creation Care, Grace Forgiveness).

---

# 10. APP DESIGN — "Lapis, Gold & Clay"

## 10.1 Art direction
Keep the look of the old Persia app, which the images were made for: **premium illuminated manuscript meets glazed brick and carved stone**. Warm, luminous and jewel-toned. In the new engine it becomes calmer and more readable, like The Fifth Codex: big text, clean cards, and one strong visual per slide.

- **Materials:** glazed-brick tiles (lapis, turquoise, saffron), carved limestone for headers, parchment for text cards, clay for the Seal lock, gold foil borders.
- **Signature motifs:** the **rosette** (dividers, bullet points, loading spinner), the **Royal Road line** (a dotted road with station markers as the progress bar), **wedge marks** (for the Seal and numbers), and **caravan silhouettes**.
- **Subject moods:** History = carved stone and gold; Geography = parchment map and road; **Science (Wednesday) = living landscapes** (mountain, desert, salt lake, sea) with the animal cards; **Technology (Thursday) = blueprint-on-clay** (white line drawings on terracotta, with water and air arrows); Art = glazed brick and gold.
- **Respect rule:** no Islamic or Zoroastrian sacred symbols, calligraphy of sacred texts or mosque imagery used as decoration. Real religious art appears only as **content**, credited and explained (§17).

## 10.2 Colour system (CSS tokens, reused from the old app)
| Token | Hex | Use |
|---|---|---|
| `--parchment` | `#F1E1BE` | Page and card background |
| `--ink` | `#2B1B10` | Body text |
| `--lapis` | `#1E3A8A` | Headers, History accent |
| `--lapis-deep` | `#0F1D4A` | Dark UI, night scenes |
| `--turquoise` | `#14B8A6` | Water, Geography accent |
| `--emerald` | `#0E9F6E` | Science accent, "go" states |
| `--terracotta` | `#C2593A` | Technology accent, clay |
| `--saffron` | `#F59E0B` | Art accent, highlights |
| `--gold` | `#E8B84A` | Darics, Achieved badge, borders |
| `--sand` | `#F4E3C1` | Soft panels |
| `--crimson` | `#B0213B` | Warnings, Shadow Courier |
| `--night` | `#0B1024` | Calm screen, Week 9 |

**Subject colours:** History = lapis · Geography = turquoise · Science = emerald · Technology = terracotta · Art = saffron. All text/background pairs must meet WCAG AA contrast (checked in the build).

## 10.3 Typography (large, legible from the back row)
- **Display:** *Cinzel* (as in the old app) for titles and stage names.
- **Body:** *Atkinson Hyperlegible* (as in The Fifth Codex) instead of Nunito, for accessibility.
- **Labels & numbers:** *Big Shoulders Display* (as in The Fifth Codex).
- Old Persian number signs are **drawn as SVG** (not a font), so they always display.
- Minimum 28 px body on slides; 64 px+ titles.

## 10.4 Motion principles
- **Press, don't fly:** wedges press into clay; seals roll; doors swing.
- **The road draws itself:** route lines animate with `stroke-dashoffset`.
- **Glow, never strobe:** gold shimmer and fragment glow are slow and gentle (photosensitivity safe).
- **Week 8 embers** reduced to a soft glow under `prefers-reduced-motion`, which is respected everywhere.

## 10.5 Sound (optional, off by default)
Wind over sand, a camel bell, a clay "thunk" for each wedge, a soft chime when a fragment joins the Seal. All synthesised in the browser (no files).

## 10.6 Procedural-first rule
As in The Fifth Codex: maps, the road, food webs, qanat cross-sections, airflow arrows, rosettes and number signs are **drawn in code** (SVG/canvas), so the app works offline and stays light. Images (§15) are for characters, heroes, animal cards and artefacts.

---

# 11. APP ARCHITECTURE

## 11.1 Tech stack
**Reuse The Fifth Codex engine** (static HTML + vanilla JS, classic scripts, runs from `file://`, hash router, 1920×1080 stage, presenter mode, PDF docs with auto-pagination, Quick-Mark, the sources system, vocabulary pop-ups and Path Cards). Rename the namespace (e.g. `RR` for "Royal Road") and re-theme. No build step, no server, **no student logins** (the old Firebase quiz is not carried over, D5).

## 11.2 Screens
Home (the Royal Road map, with the caravan showing progress and the Seal filling in) · Week page (5 day cards, hero, story, Hononga, **Sources & further reading**, **All Path Cards this week**, optional **Caravan Quiz** button) · Lesson page (overview, plan, rubric, **sources panel**, **Path Cards A · B · C**) · Presenter (slides with **vocabulary pop-ups** + notes + toolbar: timer, picker, darics, calm screen, "Say it right"; 🖨 Path cards button on the Choose Your Path slide) · Documents (Lesson Plan, Rubric T/S, **Path Cards**, Week Pack, Unit Plan with **Where the content comes from** and term bibliography) · Settings (school, class, teacher, teams, class list on device).

## 11.3 Folder structure
```
PersiaNew/
  index.html
  README.md
  Persia_App_Blueprint.md      ← this file
  css/  tokens.css fonts.css app.css slides.css print.css
  js/   util.js art.js map.js glossary.js interactives.js ix-week02.js … slides.js presenter.js docs.js app.js
  data/ term.js week01.js … week10.js sources.js glossary.js quiz.js
  assets/ fonts/ img/ (webp, copied from ../Persia/assets)
```

## 11.4 Data schema
Identical lesson schema to The Fifth Codex (`id, week, day, subject, title, guide, codes, coverage, li, sc, vocab, prep, safety, hononga, paths, lens, clue, rubric, plan, slides`). Renamed: `clue` → **Waystation Clue**, `seal` → **Seal Fragment** (`{answer, signs:[100,20,10,2,1…], instruction, reveal, art}`). New optional fields: `care` (🕊️ notes) and `sideNote` (the D8 🔬 card). New file `data/quiz.js` holds the optional Caravan Quiz (8 questions per week, D5).

## 11.5 Slide types
Reuse all of The Fifth Codex's types (transmission → **dispatch**, glyphcheck → **waystationcheck**, lisc, content, interactive, discussion, cards, paths, lens, decode → **waystationclue**, exit, safety, brief, hononga, intercept → **shadownote**, folioseal → **sealfragment**). New: **sources2** (two sources side by side), **sidenote** (D8 card), **animalcard** (foil-shine animal card using `ANIMAL-##`), **sayitright**.

---

# 12. INTERACTIVE SLIDE LIBRARY (all teacher-run)

| # | Interactive | Subject / week | What it teaches |
|---|---|---|---|
| 1 | **The Shattering Seal** (opening) | All, W1 | Story hook; fragments fly to the map |
| 2 | **Zoom to Persia** | Hist W1 | From NZ to Iran; Elam, Media, Pars |
| 3 | **Timeline Ribbon** | Hist W1, W9 | BC/AD ordering; extended in W9 |
| 4 | **Cylinder Reader** + Two Sources | Hist W2 | The Cyrus Cylinder beside Ezra 1 |
| 5 | **Run the Empire** | Hist W3 | Satrapies, taxes, roads |
| 6 | **Two Tellings** | Hist W4 | Greek vs Persian narrator |
| 7 | **Turning Points** | Hist W5 | Esther's story and the "hidden hand" |
| 8 | **Wall of 52 Days** | Hist W6 | Whole-class cooperative review |
| 9 | **Ration Tablet Reader** | Hist W7 | Everyday lives from tablets |
| 9b | **Why Did It Burn?** | Hist W8 | Weighing explanations and sources |
| 10 | **Plateau Flyover** | Geo W1 | The shape of Iran |
| 11 | **Settlement Picker** | Geo W1 | Site factors; 100 years later |
| 12 | **Capital Cities Map** | Geo W2 | Functions of capitals |
| 13 | **Royal Road Relay** | Geo W3 | Stations; relay vs single traveller |
| 14 | **Oasis Builder** | Geo W4 | Water creates towns |
| 15 | **Dig the Tell** | Geo W5 | Layers of settlement |
| 16 | **City Gate Planner** | Geo W6 | Walls, gates and functions |
| 17 | **Bazaar Trader** | Geo W7 | Specialisation and exchange |
| 18 | **Shake Table** | Geo W8 | Earthquake-safe buildings |
| 19 | **Silk Road Journey** | Geo W9 | Goods and ideas moving |
| 20 | **Habitat Zoom** | Sci W1 | Organism → population → community → ecosystem |
| 21 | **Food Chain Builder** | Sci W2 | Producers, consumers, decomposers |
| 22 | **Food Web Weaver** | Sci W3 | Remove a species, watch the web |
| 23 | **Survive the Lut** | Sci W4 | Adaptations through a desert day |
| 24 | **Salt Lake Slider** | Sci W5 | Water level → salt → shrimp → flamingos |
| 25 | **Relationship Sorter** | Sci W6 | Mutualism, parasitism, competition |
| 26 | **Camel Design** | Sci W7 | Body-part adaptations |
| 27 | **Population Graph** | Sci W8 | Cheetah data and prediction |
| 28 | **Ice Nursery** | Sci W9 | Caspian seal and shrinking ice |
| 29 | **Sanctuary Planner** | Sci W10 | Design a protected area |
| 30 | **Problem → Solution Matcher** | Tech W1 | Desert problems and Persian inventions |
| 31 | **Slope Tester** | Tech W2 | Qanat gradient |
| 32 | **Airflow Simulator** | Tech W3 | Windcatcher air movement |
| 33 | **Heat Flow** | Tech W4 | Insulation |
| 34 | **Arch Force** | Tech W5 | Compression; the keystone |
| 35 | **Block Sim** (Scratch-style) | Tech W6–9 | Sequence, loops, events, if/else, variables, with a courier sprite on the Royal Road |
| 36 | **Binary Lamps** | Tech W8 | Bits and binary numbers |
| 37 | **Cipher Wheel** | Tech W7 | Shift ciphers |
| 40 | **Symmetry Mirror** | Art W1 | Radial symmetry |
| 41 | **Roll the Seal** | Art W2 | Cylinder-seal impressions, mirror images |
| 42 | **Relief Layers** | Art W3 | Low relief |
| 43 | **Print Studio** + Repeat Maker | Art W4 | Relief printing; borders |
| 44 | **Raise the Gold** | Art W5 | Repoussé and chasing |
| 45 | **Garden Grid** | Art W6 | Chahar bagh symmetry |
| 46 | **Knot Counter** | Art W7 | Carpet knots and pattern |
| 47 | **Miniature Zoom** | Art W8 | Detail in painted manuscripts |
| 48 | **Night Sky Blend** | Art W9 | Colour blending |
| 50 | **Seal Fragment lock** | Every Friday | Press Old Persian number signs into clay; the fragment joins the Seal |
| 51 | **Vocabulary pop-ups** | Every slide | Hover/tap an underlined word (§5.4) |
| 52 | **Path Cards** (printables) | Every lesson | Student handout per path (§6.1) |
| 53 | **🔬 Side-note card** | W1, W4, W5 | The D8 card (§4.6) |
| 54 | **Caravan Quiz** (optional) | Week page | 8 review questions, teams answer on whiteboards (D5) |

---

# 13. ENGINEERING & CODING KIT

## 13.1 Two tracks
- **Desert Engineers (W1–5), hands-on:** card, tape, glue sticks, guttering offcuts or card half-pipes, trays, jugs, measuring cups, air-dry clay, shoeboxes, paper streamers, a desk fan (teacher-operated), identical cups, ice cubes, wrapping materials (foil, felt, newspaper, bubble wrap), sugar cubes or foam blocks, coins for load tests, stopwatches. No power tools. Teacher-only craft knife.
- **Royal Road Messages (W6–9), coding:** **Scratch** in the browser if devices exist [S39]. If not: **unplugged** activities (students as couriers, cipher wheels, lamp cards) + the in-app **Block Sim** (#35) run by the teacher with student instructions.

## 13.2 Safety (on every Thu plan)
Water and spills (towels ready; nothing electrical near water); the fan is operated by the teacher only; scissors rules; no sockets or mains devices handled by students; tidy-up routine.

## 13.3 Optional local partner
An irrigation-scheme educator or farmer to talk about water races and how water is shared fairly (W2/W4); a local engineer or builder for arches (W5); a parent who codes for W9.

---

# 14. PREP & RESOURCES

## 14.1 Term kit (buy once)
- **Every lesson:** Caravan Journal per student · mini-whiteboards.
- **Science:** printed animal cards (from `ANIMAL-01…18`), string for food webs, clear cups and coloured sand (W5 tell, shared with Geography).
- **Technology:** see §13.1.
- **Art:** compasses, protractors, rulers · coloured pencils, felt pens · air-dry clay · cardboard tubes and craft foam (seals) · foam printing sheets, brayers, block ink · craft metal foil and felt pads · paper for weaving · A5 watercolour paper, fine brushes, watercolours or gouache · A2 card for the Paradise Garden panel.

## 14.2 Weekly prep
Each lesson card lists ⏱️ prep. Target: ≤ 10 min per lesson; ≤ 20 min for builds.

---

# 15. IMAGE PLAN

## 15.1 Reuse (already in `Persia/assets`, D6)
| Old file | New use |
|---|---|
| `CHAR-01…06` (+ faces) | Shirin, Farhad, Gandom, Shadow Courier, Zal, cast group |
| `TEAM-01…06` | Team crests |
| `W01…W10-HERO` | Week heroes |
| `W##-MON`, `W##-TUE`, `W##-WED` | History, Geography, Science day cards |
| `W##-THU` (old Art cards) | **Friday** Art day cards |
| `ANIMAL-01…18` | Science animal cards (leopard, ibex, bear, eagle, onager, gazelle, cheetah, lion, Caspian tiger, Bactrian camel, sand cat, jerboa, flamingo, water buffalo, Caspian seal, dugong, fallow deer, hawksbill turtle) |
| `CORE` coin, seal, fragments, map, gate doors, caravan silhouettes; `CARAVAN-1…5`; medals; `FX-01…06` | UI, Seal animation, parallax |
| `SHOWDOWN-BG…` | Optional Caravan Quiz background |

## 15.2 New images to generate (about 16)
**Style lock (paste before every prompt):** use the old app's style lock from `Persia_ChatGPT_Image_Prompts.md`, so new images match.
- **Characters (2):** `CHAR-07` Nasrin, a young water-engineer with a lamp, plumb line and notebook beside a qanat shaft · `CHAR-08` Master Hamid, an old craftsman in a palace workshop with chisels, glaze pots and gold foil.
- **Thursday cards (10):** `W01-TECH` desert problems (sun, empty jug, melting ice) · `W02-TECH` qanat cross-section · `W03-TECH` windcatchers over mud-brick roofs · `W04-TECH` yakhchāl dome at dusk · `W05-TECH` mud-brick arches and domes · `W06-TECH` relay riders at a station · `W07-TECH` cipher wheel and wax tablet · `W08-TECH` signal lamps on a hill at night · `W09-TECH` courier game board on parchment · `W10-TECH` a showcase table of models.
- **Artefacts (4):** clay Seal lock with wedge signs · cylinder seal and its rolled impression · foil-embossed chariot study (not a copy of the museum object) · four-part garden plan.

**Do not generate:** real people (Cyrus, Darius, Esther, etc.) as portraits; copies of real museum objects passed off as photographs; sacred texts or religious symbols; modern Iranian political imagery or flags.

---

# 16. BUILD PLAN

| Phase | What | Review point |
|---|---|---|
| **0** | You confirm §0 decisions | ✅ Decisions confirmed |
| **1** | Copy The Fifth Codex engine → `PersiaNew` (vocab pop-ups, Path Cards, sources, paginating PDFs), re-theme (tokens, fonts, motifs), copy and rename reused images, new slide types, the Seal Fragment lock with SVG number signs, 🔬 side-note card, Block Sim (courier), Persia glossary | ✅ Look & feel approved (Week 1 sample slides) |
| **2** | Build **Week 1** fully (5 lessons, plans, rubrics, path cards, sources page) | ✅ Week 1 approved |
| **3** | Weeks 2–10, two at a time, each with sources; 🔎 items sourced before they go on slides | ✅ Each pair reviewed |
| **4** | New images (§15.2) | ✅ |
| **5** | Unit Plan + term bibliography; optional Caravan Quiz; full Playwright test of every slide and interactive; PDF pagination check | ✅ Final |

**Quality checks every phase:** NZ English · every fact sourced (or removed) · contrast AA · reduced-motion · no overflow on 1920×1080 · PDFs paginate to A4 · works from `file://` offline.

---

# 17. ACCURACY & SENSITIVITY GUARDRAILS

1. **Sources or it doesn't go in.** Every factual slide carries a source in `data/sources.js`. 🔎 items are verified or removed. Wikipedia is never the only source.
2. **The Bible as history, honestly.** Archaeology "illuminates" or "is consistent with" the Bible; it doesn't "prove" it. The Cyrus Cylinder doesn't mention Jerusalem [S1]. Where Christians read a passage differently (Darius the Mede, Daniel's visions), say so (§4.4).
3. **God is the only true God.** He is never called "a god" or listed among gods. Other peoples' gods are described as what they believed.
4. **Tradition vs text.** The Magi: "from the east", number not given, not called kings. The Esther story told from the text.
5. **Respect for Iranians and other faiths.** Zoroastrianism and Islam are described accurately and respectfully, never mocked. Some students may be Iranian New Zealanders or have Muslim or Zoroastrian friends and family.
6. **No politics about Iran today (D10).** If students raise the news, 🗣️ SAY: *"Countries have governments, and people disagree about them. In this unit we're learning about the people, the land and its history, and we pray for every family in Iran."* Then move on.
7. **War and violence.** Thermopylae, Alexander and the Esther story are taught without gore. Focus on sources, courage and consequences.
8. **Disasters.** The Bam earthquake is taught with care: helpers, safer buildings, preparation. Remember Canterbury families' own earthquake memories.
9. **Ages and origins (D8, §4.6).** Young earth under God's creation is the main teaching. Mainstream ages and natural selection appear only in a labelled 🔬 side note, stated accurately with a source. Measurements and observations are taught as normal science. Rubrics never grade which view a student holds.
10. **Fact or story.** 🟢 and 🟡 badges on every slide. The Seal, the Road Scroll and the guides are fiction; real people are history only, with sources, and no invented quotes.
11. **Museum objects.** Show real objects through the museum's own pages or credited images where licences allow; students make *their own* designs inspired by them.
12. **Animal numbers change.** Endangered-species figures carry their date and source (e.g. "17 in March 2025" [S27]) and are re-checked each time the unit is taught.

---

# 18. SOURCES

*Checked October 2026 (searched and, where marked ✓, opened and read). Type labels match the app's sources system. 🔎 = a second or better source to be added during the build.*

| # | Source | Publisher | Type | Web address |
|---|---|---|---|---|
| S1 | The Cyrus Cylinder ✓ | British Museum | Museum | https://www.britishmuseum.org/collection/object/W_1880-0617-1941 |
| S2 | Ideas of Empire: The "Royal Garden" at Pasargadae ✓ | The Metropolitan Museum of Art | Museum | https://www.metmuseum.org/articles/pasargadae |
| S3 | Persepolis ✓ (cross-check with UNESCO: https://whc.unesco.org/en/list/114, which wouldn't load for checking) | World Heritage Site (enthusiast site) | Other website (cross-check) | https://www.worldheritagesite.org/list/id/114 |
| S4 | Susa ✓ | UNESCO World Heritage Centre | Education/organisation | https://whc.unesco.org/en/list/1455 |
| S5 | Royal Road ✓ | Livius.org (Jona Lendering, ancient-history reference) | Education/organisation | https://www.livius.org/articles/concept/royal-road/ |
| S6 | The Behistun Inscription, the "Rosetta Stone" of cuneiform ✓ · also Britannica "Bisitun" (https://www.britannica.com/place/Bisitun) | HistoryofInformation.com | Other website (cross-check) | https://historyofinformation.com/detail.php?entryid=2811 |
| S7 | Persepolis Fortification Archive ✓ | Institute for the Study of Ancient Cultures, University of Chicago | University/academic | https://isac.uchicago.edu/node/2474 |
| S8 | Thermopylae (480 BCE) ✓ | Livius.org | Education/organisation | https://www.livius.org/articles/battle/thermopylae-480-bce/ |
| S9 | Ahasuerus ✓ | Encyclopaedia Britannica | Encyclopaedia | https://www.britannica.com/print/article/9988 |
| S10 | Alexander the Great & the Burning of Persepolis ✓ | World History Encyclopedia | Encyclopaedia | https://www.worldhistory.org/article/214/alexander-the-great--the-burning-of-persepolis |
| S11 | The Oxus chariot model ✓ | British Museum | Museum | https://www.britishmuseum.org/collection/object/W_1897-1231-7 |
| S12 | Frieze of archers (Susa, c. 510 BCE; Louvre) ✓ | French Ministry of Culture (Jacques de Morgan archaeology site) | Government/official | https://archeologie.culture.gouv.fr/jacques-morgan/en/media/view/6484 |
| S13 | Oldest carpet (the Pazyryk carpet) ✓ — 🔎 add the Hermitage Museum page | Guinness World Records | Other website (cross-check) | https://guinnessworldrecords.com/world-records/652074-oldest-carpet |
| S14 | The Shahnama of Shah Tahmasp: The Persian Book of Kings (search result) | The Metropolitan Museum of Art | Museum | https://www.metmuseum.org/en/met-publications/the-shahnama-of-shah-tahmasp-the-persian-book-of-kings-2014 |
| S15 | The Persian Qanat ✓ (UNESCO page: https://whc.unesco.org/en/list/1506, which wouldn't load for checking) | World Heritage Site (enthusiast site) | Other website (cross-check) | https://www.worldheritagesite.org/list/id/1506 |
| S16 | Iran's ancient wind catchers beat heat naturally (AFP, July 2023) ✓ | Al-Monitor | News | https://www.al-monitor.com/originals/2023/07/irans-ancient-wind-catchers-beat-heat-naturally |
| S17 | Yakhchal — 🔎 add an academic or museum source | Wikipedia (starting point only) | Wikipedia | https://en.wikipedia.org/wiki/Yakhchal |
| S18 | The Persian Garden — 🔎 page wouldn't load for checking; confirm at build | UNESCO World Heritage Centre | Education/organisation | https://whc.unesco.org/en/list/1372 |
| S19 | Persian Caravanserai ✓ | World Heritage Site (enthusiast site) | Other website (cross-check) | https://www.worldheritagesite.org/list/id/1668 |
| S20 | Tabriz Historic Bazaar Complex ✓ | UNESCO Silk Roads Programme | Education/organisation | https://en.unesco.org/silkroad/silk-road-themes/world-heritage-sites/tabriz-historic-bazaar-complex |
| S21 | 2003 Bam earthquake ✓ — 🔎 add USGS | Wikipedia (starting point only) | Wikipedia | https://en.wikipedia.org/wiki/2003_Bam_earthquake |
| S22 | Demographics of Tehran ✓ — 🔎 add Statistical Centre of Iran / UN data | Wikipedia (starting point only) | Wikipedia | https://en.wikipedia.org/wiki/Demographics_of_Tehran |
| S23 | Urban population (% of total) — Iran — 🔎 not yet opened | World Bank | Government/official (data) | https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=IR |
| S24 | Nowruz: Decision 11.COM 10.B.1 (2016) ✓ | UNESCO Intangible Cultural Heritage | Education/organisation | https://ich.unesco.org/en/decisions/11.COM/10.b.1 |
| S25 | Where Is the Hottest Place on Earth? ✓ | NASA Earth Observatory | Government/official | https://science.nasa.gov/earth/earth-observatory/where-is-the-hottest-place-on-earth/ |
| S26 | Overview report and draft range-wide strategy for the Persian leopard ✓ | IUCN SSC Cat Specialist Group / CMS | University/academic | https://catsg.org/_files/ugd/7a07e2_84735736d12a4ed49b4709e43d86fe52.pdf |
| S27 | Threatened with extinction: only 17 Asiatic cheetahs left worldwide (2 March 2025) ✓ — 🔎 add WCS (https://library.wcs.org/en-us/doi/ctl/view/mid/33065/pubid/PUB22375.aspx) | Blue News (dpa) | News | https://www.bluewin.ch/en/news/only-17-asiatic-cheetahs-left-worldwide-2585590.html |
| S28 | Uniting to save saline lakes (Lake Urmia) ✓ | Utah State University | University/academic | https://utahstatemagazine.usu.edu/field-notes/uniting-to-save-saline-lakes |
| S29 | Caspian seal ✓ — 🔎 add IUCN Red List | Wikipedia (starting point only) | Wikipedia | https://en.wikipedia.org/wiki/Caspian_seal |
| S30 | Persian fallow deer conservation ✓ | Jerusalem Biblical Zoo | Education/organisation | https://www.jerusalemzoo.org.il/en-conservations/persian-fallow-deer-conservation |
| S31 | The takahē story ✓ | Department of Conservation | Government/official | https://www.doc.govt.nz/our-work/takahe-recovery-programme/the-takahe-story |
| S32 | Stockwater race network ✓ | Ashburton District Council | Government/official | https://ashburtondc.govt.nz/services/water-services/stockwater/stockwater-race-network |
| S33 | Science in Year 5 | NZ Ministry of Education | Government/official | https://www.education.govt.nz/parents-and-caregivers/schools-year-0-13/parent-portal/guide-for-the-new-zealand-curriculum-years-0-to-8/year-5-new-zealand-curriculum/science-in-year-5 |
| S34 | Science in Year 6 | NZ Ministry of Education | Government/official | https://www.education.govt.nz/parents-and-caregivers/schools-year-0-13/parent-portal/guide-for-the-new-zealand-curriculum-years-0-to-8/year-6-new-zealand-curriculum/science-in-year-6 |
| S35 | Social Sciences in Year 5 | NZ Ministry of Education | Government/official | https://www.education.govt.nz/parents-and-caregivers/schools-year-0-13/parent-portal/guide-for-the-new-zealand-curriculum-years-0-to-8/year-5-new-zealand-curriculum/social-sciences-in-year-5 |
| S36 | Social Sciences in Year 6 | NZ Ministry of Education | Government/official | https://www.education.govt.nz/parents-and-caregivers/schools-year-0-13/parent-portal/guide-for-the-new-zealand-curriculum-years-0-to-8/year-6-new-zealand-curriculum/social-sciences-in-year-6 |
| S37 | Computational thinking for digital technologies: Progress Outcome 2 | Technology Online (NZ Ministry of Education) | Government/official | https://technology.tki.org.nz/Technology-in-the-NZC/CTDT-Progress-outcomes-exemplars-and-snapshots/PO2 |
| S38 | Computational thinking for digital technologies: Progress Outcome 3 ✓ | Technology Online (NZ Ministry of Education) | Government/official | https://technology.tki.org.nz/Technology-in-the-NZC/CTDT-Progress-outcomes-exemplars-and-snapshots/PO3 |
| S39 | About Scratch | MIT Media Lab — Scratch | University/academic | https://scratch.mit.edu/help/about/ |
| S40 | Herodotus, *Histories* 5.35 (Histiaeus's hidden message) | Perseus Digital Library / Perseids (Tufts University) | University/academic | https://cts.perseids.org/read/greekLit/tlg0016/tlg001/perseus-eng2/5.35.1-5.35.4 |
| S41 | Old Persian cuneiform (number signs) — 🔎 confirm signs against UT Austin (https://sites.la.utexas.edu/persian_online_resources/history-of-the-language/old-persian-script/) | Wikipedia (starting point only) | Wikipedia | https://en.wikipedia.org/wiki/Old_Persian_cuneiform |
| S42 | Daric — 🔎 add a British Museum coin record | Wikipedia (starting point only) | Wikipedia | https://en.wikipedia.org/wiki/Daric |
| S43 | Science and Social Sciences released for Years 0–10 | NZ Ministry of Education | Government/official | https://www.education.govt.nz/news/science-and-social-sciences-released-years-0-10 |
| S44 | Young Earth creationism (overview) — 🔎 add a creationist primary source at build (as for Hakatere) | Wikipedia (starting point only) | Wikipedia | https://en.wikipedia.org/wiki/Young_Earth_creationism |
| S45 | Canterbury places: Mid-Canterbury (page 17) | Te Ara — Encyclopedia of New Zealand | Encyclopaedia | https://teara.govt.nz/en/canterbury-places/page-17 |

**Bible references** are read from the school's own Bible; the app links each to BibleGateway (e.g. https://www.biblegateway.com/passage/?search=Isaiah+45%3A1-7).
