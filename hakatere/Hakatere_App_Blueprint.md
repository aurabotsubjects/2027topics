# 🏔️ THE BRAIDED MAP
## Hakatere: our river, our mountains, our sky
### Master Blueprint · Teacher Presentation App + Complete Term Programme
**Years 5–6 · Aotearoa New Zealand Curriculum · Christian Lens · 10 weeks × 5 subjects × 50-minute lessons**

> *Soli Deo Gloria — To God Alone the Glory*

---

## 📍 READ THIS FIRST — What this file is and what you need to decide

This is the **planning and mapping document** for next term's topic, **Hakatere: our local history**. No part of the app has been built yet. Once you approve it (or change it), this file becomes the build recipe. The app's lesson data, slides, lesson plans, rubrics and sources pages all come from what is written here. It follows the same pattern as *The Fifth Codex* (Maya & Aztecs), so the two apps will feel like siblings: same lesson shape, same Developing / Achieved / Flying rubrics, same PDFs, same teacher scripts. The look, the story and the content are new and belong to Hakatere.

**The subjects**

| Day | Subject | Topic |
|---|---|---|
| Mon | **History** (main topic) | **Hakatere: our local history**, from tākata whenua to today |
| Tue | **Geography / Social Science** | **Mountains**: how they're made, their weather, hazards, life and people |
| Wed | **Science** | **Matariki and the universe**: stars, the Sun, the Moon, seasons, galaxies |
| Thu | **Technology** | **Farm machines + Scratch**: simple machines and mechanisms on Mid Canterbury farms, then coding farm simulations in Scratch |
| Fri | **Art** | **Land, River & Sky**: Canterbury landscape painting, braided rivers from above, Matariki printmaking, and learning about Ngāi Tahu rock art (without copying it) |

**Every fact has a source.** Because you are being asked where lesson content comes from, key facts in this file carry a source tag like **[S12]**. Each tag points to the numbered list in **§18 Sources**, which gives the web address. The app will show the same sources on each Week page, on each lesson page and on the last page of every lesson plan PDF, labelled by type (museum, government, iwi/rūnanga, encyclopaedia, and so on).

**What's in it**

| § | Section | What it gives you |
|---|---|---|
| 0 | Decisions for you | The choices I need you to make before building |
| 1 | The vision | What the term should feel like for students |
| 2 | The story world | Narrative, characters, teams, the weekly mystery |
| 3 | Curriculum framework | 2027 NZ curriculum mapping for every subject |
| 4 | Christian lens | How faith runs through the term without feeling bolted on |
| 5 | The 50-minute lesson | The fixed lesson shape, with the teacher scripting system |
| 6 | Student agency | "Choose Your Path" and the term-long Big Projects |
| 7 | Assessment & rubrics | Developing / Achieved / Flying, with example work for each level |
| 8 | Ten-week overview | The whole term on one page |
| 9 | Full lesson programme | Week 1 written out in full as the template; Weeks 2–10 as lesson cards |
| 10 | App design | Art direction, colour, type, motion — all drawn from Hakatere |
| 11 | App architecture | Screens, presenter mode, data model, PDFs, sources |
| 12 | Interactive slide library | Every JavaScript animation or interactive to be built |
| 13 | Machines & coding kit | Mechanism kit, the Scratch track and the no-device path |
| 14 | Prep, resources & trips | The one-off Term Kit, weekly prep, and local visits |
| 15 | ChatGPT image prompts | Style lock + the full image list |
| 16 | Build plan | Phases, review points, quality checks |
| 17 | Accuracy, tikanga & sensitivity guardrails | Rules the builder must follow |
| 18 | Sources | Every reference, with its web address and type |

---

# 0. DECISIONS (confirmed 30 October 2026)

✅ **All defaults confirmed, except D8, which was changed (see the new D8 below).** D3 is an action for you before the term starts (contact Te Rūnanga o Arowhenua and your Māori lead).

| # | Decision | Recommended default | Why it matters |
|---|---|---|---|
| D1 | **App name** | **The Braided Map** (alternatives: *Trig Point*, *River to Sky*, *Hakatere Field Book*) | The Hakatere is a braided river [S3][S24], and the story is built around a restored survey map. A te reo Māori title should only be chosen with Te Rūnanga o Arowhenua (see D3). |
| D2 | **Which term?** ⚠️ | **Term 2** if possible | Matariki rises in the pre-dawn sky in midwinter (June–July) and the public holiday falls then [S27]. Taught in Term 2, Science Week 6 can line up with the real rising and the holiday. In any other term, the app swaps in sky simulations, and the Pleiades can still be seen in the evening sky in summer. |
| D3 | **Mana whenua partnership** ⚠️ | Before the term, contact **Te Rūnanga o Arowhenua** (the rūnaka whose cultural narrative for Hakatere is our main source [S1]) and the school's Māori lead. Share the Monday History weeks 2–4 and 9, and the Friday rock-art lesson, and ask what they'd like changed, added or left out. Invite a speaker if they are willing. | Local history belongs to the people whose history it is. The source [S1] also names Te Ngāi Tūāhuriri Rūnanga and Te Taumutu Rūnanga as having shared interests in the district. |
| D4 | **Kāi Tahu dialect** | Use the southern **Kāi Tahu** forms where the local source uses them (e.g. *Kāi Tahu, mahika kai, tākata whenua*), with the standard form in brackets the first time (e.g. *mahika kai (mahinga kai)*). | The Arowhenua narrative [S1] and the district plan [S2] use the southern dialect. Showing it respects local identity. Confirm with the rūnaka (D3). |
| D5 | **Story characters** | Four fictional guides who are **not** presented as iwi spokespeople. Ngāi Tahu knowledge is always taught from real Ngāi Tahu sources [S1][S2][S9] or by invited people, never put into a made-up character's mouth. | Avoids a fictional character "speaking for" mana whenua. |
| D6 | **Technology track** | **Two-part term:** Weeks 1–5 farm machines (card, skewer and split-pin mechanisms); Weeks 6–9 **Scratch** coding of farm simulations; Week 10 showcase. Every Scratch lesson also has an **unplugged + in-app block simulator** path for when devices aren't available. | Simple machines are Y5 Science content [S31], so the hands-on half doubles as science. Scratch covers Digital Technologies Progress Outcome 2 [S35]. |
| D7 | **Student devices** | Not required. If students have Chromebooks or iPads, Scratch runs free in the browser [S36]. | The app itself is teacher-run only. |
| D8 | **Ages of the earth, rocks and stars** ✅ *(changed by you)* | **Young earth under God's creation comes first.** Whenever an age comes up, the lesson first teaches that God created the heavens and the earth (Genesis 1), and that the earth is young: thousands of years, not millions. A clearly labelled **🔬 Side note — what many scientists believe** then gives the mainstream scientific estimate, with its source (e.g. *"Many scientists estimate the Pleiades are about 100 million years old"* [S29]). **Measurements are taught normally**, because they aren't ages: distances (light-years, km), heights, and rates measured today (e.g. the Alps rising about 10 mm a year [S20]). See §4.6 for exactly how this looks on slides and plans. | Matches the school's Christian teaching. The side notes are honest about what students will meet in other books and later schooling, and each side of the note is sourced [S20][S29][S50][S51]. |
| D9 | **Sensitive content** | Kemp's Deed (1848) and Te Kerēme told honestly from both perspectives, without blame aimed at children. The 2021 flood taught with care, because some local families lived through it. | See §17. |
| D10 | **Teams** | 6 teams named after **braided-river birds**: Wrybill (ngutu pare), Black-billed Gull (tarāpuka), Banded Dotterel (pohowera), Black Stilt (kakī), Black-fronted Tern (tarapirohe), South Island Pied Oystercatcher (tōrea). Confirm te reo names with your Māori lead. | All six nest on Canterbury's braided riverbeds and several are threatened [S24], so the team names teach something. |
| D11 | **Points** | **Wheat sheaves 🌾**. Mid Canterbury grows a large share of New Zealand's grain [S15]. | Like the cacao beans: earned for thinking, teamwork, kindness and perseverance, never from rubric levels. |
| D12 | **End-of-term showcase** | **"Our Place" Exhibition** in Week 10 for whānau, ideally in partnership with the **Ashburton Museum** [S39] (or held at school with a museum-style layout). | Strong ERO evidence of community engagement and local curriculum. |
| D13 | **Folder and repo name** | Folder **`hakatere`** in `claude_auto` · repo **`hakatere`** | No special characters, so no hosting problems. |
| D14 | **Field trips (optional)** | One or two of: Ashburton Museum [S39]; the Hakatere Station heritage buildings and Ōtūwharekai/Ashburton Lakes (a Tohu Whenua site) [S11][S12]; Hakatere Marae (only by invitation); a local farm with machinery; a dark-sky evening at school. | Real places make local history real. All trips are optional and the app works without them. |

---

# 1. THE VISION

**Students aren't "doing a topic on Ashburton". They are the restoration team for a lost map of their own place.**

After this winter's floods, a crew repairing a stopbank on the Hakatere uncovers a rusted tin chest. Inside is a surveyor's **field book** from the 1860s and **ten folded map sheets**, water-stained and stuck together. Each sheet shows part of Hakatere from the mountains to the sea. The Museum's archivist asks the class to help restore one sheet a week. To open each sheet they'll need everything they learn that week: history to read it, geography to understand the land it shows, science to read the stars the surveyor navigated by, technology to understand the machines that changed the plains, and art to restore and redraw it.

As the sheets open, the class notices something: the surveyor wrote two names for many places, an English name in ink and an older name in pencil. Who gave him the pencilled names? Why were some of them rubbed out? The term's big question is **"Whose story does a map tell?"**

**The emotional arc:** curiosity → discovery → hard truths (promises not kept) → floods and recovery → making things right → celebrating our place and all its people.

**The learning promise.** By Week 10 every child can:
- tell the story of Hakatere from the first tākata whenua to today, using local sources and more than one perspective, including what happened to land and promises in 1848 and how the Crown and Ngāi Tahu reached a settlement in 1998 [S1][S6][S8];
- explain how the Southern Alps formed and keep rising, why Canterbury is dry, why our rivers braid, and how mountains shape life, hazards and farming on the plains [S20][S24][S26];
- explain stars, the Sun, the Moon, seasons and galaxies, and the place of **Matariki** and **Puaka** in the Māori year [S27][S31][S32];
- explain and build simple machines (levers, wheels and axles, gears, pulleys) found in farm machinery, and write, test and debug Scratch programs [S19][S31][S35];
- make landscape and sky art in response to Canterbury artists and the local land [S37];
- talk thoughtfully about how God's story meets our local story: the Creator of mountains and stars, honesty about land and promises, repentance and restoration, and God's care for every people in our community.

**Design pillars** (the same six as The Fifth Codex)
1. **Mystery first.** Every lesson opens with a *Field Note* and ends by solving a *Trig Clue*.
2. **Real learning, not decoration.** Every interactive teaches a concept a static slide can't.
3. **Student agency.** Every lesson has a *Choose Your Path* project with three options (see §6).
4. **Faith woven in.** The Christian lens comes out of the lesson content itself (see §4).
5. **Teacher-proof.** Anyone can pick it up and teach it, using the scripts, timings, prep lists and model answers.
6. **First-class beauty.** Layered cut paper in the colours of shingle, tussock, glacier and night sky.

---

# 2. THE STORY WORLD

## 2.1 Opening premise (Week 1 opening cinematic, read aloud)
> *"In the floods this winter, the Hakatere rose faster than anyone had seen in years. When the water went down, a digger driver repairing the stopbank hit something metal: a rusted tin chest, buried deep in the gravel. Inside, wrapped in oilcloth, was a surveyor's field book dated 1864, and ten folded map sheets so stuck together that nobody dared pull them apart. The Museum's archivist, Nell Baird, has been asked to restore them. But the paper is fragile, the writing is faded, and each sheet hides a puzzle. Nell needs a team who can think like historians, geographers, astronomers, engineers and artists. She has chosen you."*

🟢/🟡 **Fact-or-Story badge** (as in The Fifth Codex). Every slide carries 🟢 **REAL EVIDENCE** or 🟡 **FIELD BOOK STORY**. The chest, the field book, the surveyor and the guides are 🟡 fiction. Everything they *teach* is 🟢 and sourced. **Real historical people** (e.g. Tarawhata, Te Rehe, Joseph Thomas, Walter Mantell, Robert Park, Thomas Beck) appear only as history with sources [S1][S3][S13], never as story characters.

## 2.2 The field team (fictional guides — one "voice" per subject)
| Day | Guide | Who they are | Voice |
|---|---|---|---|
| **Mon · History** | **Nell Baird** | Archivist and conservator at a (fictional) heritage centre in Ashburton. Restores old paper. | Gentle, curious, careful. "Every object has a story, and more than one person in it." |
| **Tue · Geography** | **Sam Rāwiri-McKay** | High-country musterer turned DOC ranger, with a heading dog called **Flint**. Has walked every ridge from Mt Somers to the Arrowsmith Range. | Dry humour, practical. "Read the land before you walk it." (Note D5: Sam is not an iwi spokesperson.) |
| **Wed · Science** | **Dr Priya Nair** | Astronomer who runs night-sky sessions in a dark-sky reserve. | Warm, full of wonder. "Look up. Then look again." |
| **Thu · Technology** | **Liv Bennett** | Young agricultural engineer who fixes irrigators and codes farm controllers. | Fast, hands-on. "If it moves, there's a mechanism. If it decides, there's code." |
| **Fri · Art** | **Tom Whitaker** | Landscape painter who has painted the plains and mountains for forty years. | Quiet, encouraging. "Look slowly. The land is never just one colour." |
| *(Tension)* | **"The Dealer"** | An unseen antique-map dealer who keeps sending offers to buy the chest and sell it overseas. | Charming, pushy. Treats the past as something to sell. Defeated in Week 10 when the map goes to the community, not the highest bidder. |

Characters appear as **cut-paper portrait illustrations** (§15), never photos of real people.

## 2.3 Teams (default 6)
**Wrybill · Black-billed Gull · Banded Dotterel · Black Stilt · Black-fronted Tern · Pied Oystercatcher** (see D10). Each team has a cut-paper bird emblem. Fact card for each bird on the team screen [S24].

## 2.4 Points: Wheat Sheaves 🌾
Teams earn sheaves for thinking, teamwork, kindness, perseverance and quality work. **Points never come from rubric levels.** A sheaf counter sits in the presenter toolbar and saves on the device.

## 2.5 The weekly mystery mechanic: Trig Clues → Survey Seal
- Surveyors fix positions from **trig points** (survey stations on high ground) using a **theodolite**, an instrument that measures angles. That's our mechanic.
- **Every lesson (Mon–Thu)** ends with a **Trig Clue**: a short problem using the lesson's learning (a date difference, a height, a star count, a gear ratio, a code output). The answer is a **number**.
- **Friday (Art)** ends with the **Survey Seal**: the four clues are combined into a **bearing** (an angle from 0° to 359°) and dialled into an on-screen theodolite. When the bearing is right, the wax seal cracks and the map sheet unfolds (signature animation). The class sees what the restored sheet shows, and a pin moves on the term map from the river mouth up to the mountains.
- **The Dealer's Offer** (Fri, 2 min): a message that raises a real question for next week (e.g. "Old maps are worth a fortune overseas. Why should a small town keep this one?").

## 2.6 Story beats across the term
| Wk | Map sheet | Story beat (🟡) | The Dealer |
|---|---|---|---|
| 1 | I · *The Chest* | The chest is found. Sheet I shows the river mouth and two names: "Ashburton" in ink, "Hakatere" in pencil. | First offer: "Name your price." |
| 2 | II · *Kāika & Kai* | Pencilled symbols mark seasonal camps and food places along the river. | "Pencil marks? Worthless. Rub them out." |
| 3 | III · *The Old Trails* | A dotted line runs inland toward the mountains, and a lone tree is drawn on the plain. | Claims he has a "better copy". |
| 4 | IV · *The Deed* | A torn page: a copy of a land deed, and a promise underlined twice. | "History is written by the winners." |
| 5 | V · *The Run* | A high-country sheep station and its stone cottage. | Offers to buy just this sheet. |
| 6 | VI · *The Town* | A grid of streets on a treeless plain, and a ferry on the river. | "Progress always wins." |
| 7 | VII · *The Race* | A water race slicing across the plains. Sheet VII is missing! | He has it. He wants a trade. |
| 8 | VIII · *The Flood* | The surveyor's note about a great flood, and a line marked "stopbank?" | Returns Sheet VII… water-damaged. |
| 9 | IX · *Making It Right* | The pencilled names are restored, and the field book's last entry is an apology. | Exposed: he planned to sell it to a private buyer overseas. |
| 10 | X · *Our Place* | The full map is reassembled. The class decides its future: it goes to the community, with the names honoured. | Defeated. Not by force, but by a town that decided its story wasn't for sale. |

---

# 3. NZ CURRICULUM FRAMEWORK (2027)

> ⚠️ **Context for 2027 (checked October 2026).** For Years 0–8, the **new Science and Social Sciences content must be taught from 2027**. **Technology and The Arts** stay on *The New Zealand Curriculum* (2007), Level 3, until the new content becomes compulsory. **Before printing for ERO, the builder checks wording against Tāhūrangi**, because the Ministry's year-level pages say they are under review [S31]–[S34].

## 3.1 Why Hakatere fits the 2027 content so well
A local-history term is a close match to the new content. It meets **named** Years 5–6 requirements directly instead of by analogy:

| 2027 required content (Ministry year-level guides) | Where it's covered in The Braided Map |
|---|---|
| **Y6 History:** NZ to 1840, early contact; **land acquisition and differing views on whether land can be owned**; Māori political responses including petitions to the Crown [S34] | Mon W2–W4 (tākata whenua, trails, Kemp's Deed 1848) and W9 (Matiaha Tiramōrehu's 1849 letter [S9], Te Kerēme, the 1998 settlement [S8]) |
| **Y6 History:** comparing the **Elizabethan and Victorian ages**, including life for different social groups, religion, buildings and technology [S34] | Mon W5–W6 (Victorian settlers, the Canterbury Association, station life, building the town) |
| **Y5 History:** natural events of historical significance and the recovery that followed (Mt Tarawera 1886) **plus a case study of a different natural disaster** [S33] | Mon W8 (the **May 2021 Hakatere flood** and recovery [S3][S17][S18], compared with Tarawera) |
| **Y5 Geography:** tectonic hazards — how they happen, the hazards they cause, how to prepare [S33] | Tue W2–W3 (the Alpine Fault, uplift, earthquakes, landslides) |
| **Y5 Geography:** biomes and ecosystems [S33] | Tue W6 (alpine and tussock ecosystems; braided rivers) |
| **Y6 Geography:** climate patterns, temperature trends, greenhouse gases, mitigation and adaptation [S34] | Tue W5 (rain shadow, nor'wester) and Tue W9 (snow, glaciers and water in a warming climate) |
| **Y6 Geography:** a Southeast Asian region with a country case study [S34] | Tue W8 (mountains of Southeast Asia, with a Malaysia/Borneo case study on Mt Kinabalu). *Flag: the full SE Asia regional study still needs another term.* |
| **Y6 Civics:** rights and responsibilities; designing a campaign [S34] | Tue W10 (a "Care for our mountains and rivers" campaign) |
| **Y5 Civics:** who makes rules — central government, councils (bylaws), communities [S33] | Mon W7 (water rights and council rules for irrigation); Tue W10 |
| **Y6 Economic Activity:** specialisation and exchange, **including local examples**; a small-business case study [S34] | Mon W6–W7 (flour mills, freezing works, grain and seed growing [S4][S15]); Thu W10 |
| **Y5 Science:** **simple machines (levers, pulleys)** that reduce effort or change the direction of a force [S31] | Thu W2–W5 (farm machines). The Technology lessons double as Science. |
| **Y5 Science:** Earth's tilt causes seasons; the Moon's phases; **maramataka** [S31] | Wed W4–W5 |
| **Y6 Science:** night sky — stars, Moon and planets; the Sun is a star; the Milky Way and galaxies; apparent movement of the Sun, Moon and stars; how civilisations mapped the sky for planting, harvest and navigation; **the significance of Matariki** [S32] | Wed W1–W3 and W6–W10 |
| **Y6 Science:** rocks and minerals [S32] | Tue W2 (greywacke [S20]; Mt Somers' volcanic rock [S21]) |

## 3.2 Code key (used on every lesson plan)
**Social Sciences (2027, Years 4–6)**
- **SS-H** History: understanding the past through sources, perspectives, cause & consequence, continuity & change.
- **SS-G** Geography: places, environments, hazards, biomes, climate; maps, contours, aerial images.
- **SS-C** Civics & Society: rules, laws, rights & responsibilities, decision-making.
- **SS-E** Economic Activity: specialisation, exchange, local industry and business.
- **SS-P** Practices: asking questions, using primary & secondary sources, comparing perspectives, explaining change, respectful debate.
- **ANZH** Aotearoa New Zealand's Histories: local stories, **tūrangawaewae**, mana whenua perspectives.

**Science (2027, Years 4–6)**
- **SC-ES** Earth & Space (stars, Sun, Moon, seasons, galaxies, rocks).
- **SC-MF** Motion & forces (simple machines, gravity).
- **SC-P** Science practices: questioning, observing, measuring, modelling, explaining with evidence.

**Technology (NZC 2007, Level 3)**
- **TE-TP** Technological Practice: brief development, planning, outcome development & evaluation.
- **TE-TK** Technological Knowledge: technological modelling; products; **technological systems** (inputs, processes, outputs; mechanisms).
- **TE-NT** Nature of Technology: technology and society (how farm machines changed Mid Canterbury).
- **DT-CT** Digital Technologies — Computational Thinking, **Progress Outcome 2**: give, follow and debug simple algorithms, and build simple programs [S35].
- **DT-DD** Designing & Developing Digital Outcomes.

**The Arts — Visual Arts (NZC 2007, Level 3)**
- **VA-UC** Understanding the arts in context · **VA-PK** Practical knowledge · **VA-DI** Developing ideas · **VA-CI** Communicating & interpreting.

**Cross-curricular:** **EN** English (interviews, explanation, oral history) · **MA** Maths (scale, contours, angles and bearings, light-years, gear ratios, data) · **TR** te reo Māori (place names) · **RE** Christian Character / Bible.
**Key Competencies:** Thinking · Using language, symbols & texts · Managing self · Relating to others · Participating & contributing.

---

# 4. THE CHRISTIAN LENS — "Through the Lens"

## 4.1 The principle
The lens is **found in the content, not attached to it.** A test for the builder: *if you took the Bible part out, would the lesson lose something it needs?* If it wouldn't, it isn't good enough yet.

## 4.2 Built on the school vision
| Pillar | Icon | What it looks like in this term |
|---|---|---|
| **Aroha — Love: God, Others, Self, World** | ❤️ | Loving our place and all its people: tākata whenua, settlers, newer families. Caring for rivers, birds and mountains. |
| **Mōhio — Know: God, His story and our place in it** | 📜 | God made the mountains and named the stars (Ps 147:4; Amos 5:8). Our local story is part of His bigger story. We tell it honestly. |
| **Manaaki — Serve faithfully with our gifts and talents** | 🤲 | Farmers, engineers, surveyors, painters, flood volunteers: gifts used to serve the community. |
| **Pānga — Impact: bringing God's Kingdom to earth** | 🌱 | Justice about land and promises, restitution (Zacchaeus), restoring relationships, protecting creation. |
| **Soli Deo Gloria** | ✨ | The map goes home to the community. We seek God's glory, not profit. |

## 4.3 The four moves (7 minutes, scripted)
1. **LOOK CLOSER** — a detail from today's learning shown again.
2. **OPEN THE WORD** — a short passage (kid-friendly paraphrase on screen, plus the reference so you can read it from the school's Bible).
3. **TALK IT THROUGH** — two discussion questions with "listen for" notes.
4. **LIVE IT OUT** — one concrete response.

## 4.4 Term-long threads
- **The Maker of mountains and stars** (Ps 121:1–2; Ps 90:2; Ps 147:4; Amos 5:8; Job 38:31) → Science and Geography. Job 38:31 and Amos 5:8 actually mention the **Pleiades** (Matariki) and **Orion** (where Puaka/Rigel is).
- **Remembering well** (Joshua 4:1–7 memorial stones; Deut 32:7 "ask your elders") → local history and oral history.
- **Land, promises and justice** (Lev 25:23 "the land is mine"; 1 Kings 21 Naboth's vineyard; Micah 6:8; Luke 19:1–10 Zacchaeus' restitution) → Kemp's Deed and Te Kerēme, told carefully (§17).
- **Rivers and floods** (Ps 46:1–4; Isaiah 43:2; Matt 7:24–27) → braided rivers and the 2021 flood.
- **Seedtime and harvest** (Gen 8:22; Eccl 3:1–2) → Matariki as the turning of the year; farming on the plains.
- **Gifts for service** (Exodus 31:1–5 Bezalel; 1 Peter 4:10) → Technology and Art.
- **Every nation and language** (Rev 7:9) → the finale: Hakatere's many families [S40].

## 4.5 Analogies and other worldviews
- Spiritual analogies are **labelled as analogies** with a "Where the picture breaks" prompt (as in The Fifth Codex).
- **Māori understandings** (e.g. Matariki traditions, maunga as ancestors, rock art) are taught **respectfully, as what they mean to Māori**, from Māori sources. The lens never mocks or "debunks" them. It asks what we share (remembering the dead, gratitude for harvest, care for the land) and what Christians believe about the Creator who made the stars.


## 4.6 Ages of the earth and universe (D8) — how it looks
Every time a lesson deals with **how old** something is (rocks, mountains, ice ages, stars, the universe):
1. **Main slide box — 📜 God's creation:** God made the heavens and the earth, the mountains and the stars (Genesis 1:1, 1:16; Psalm 90:2; Psalm 104:5–9). Reading Genesis as history, the earth is young, around **thousands of years old**. Events like a single great **Ice Age** are understood as happening in the centuries **after Noah's Flood** (Genesis 6–9) [S50][S51].
2. **Side-note card — 🔬 What many scientists believe:** the mainstream estimate, stated simply and fairly, with its source (e.g. *"Many geologists estimate the Southern Alps rose over about five million years from rock 100–300 million years old"* [S20]). It is styled smaller, in a different colour, with the label **Side note** so it is never mistaken for the main teaching.
3. **Teacher script (🗣️ SAY):** *"As Christians, we believe God created everything, and our school teaches that the earth is young. You'll also hear and read that many scientists think the earth is much older, so it's good to know what they say and why. Here's their estimate."* Model respect for people who see it differently; never mock either view.
4. **Measurements stay as measurements.** Uplift of about 10 mm a year, river flows, heights, and distances in kilometres or light-years are taught as normal science, because they are measured today.
5. **Rubrics never assess which view a student holds.** They assess whether students can explain the main teaching *and* describe the scientists' estimate accurately.

---

# 5. THE 50-MINUTE LESSON

## 5.1 Fixed shape (every Mon–Fri lesson)
| Min | Phase | Purpose | Slides |
|---|---|---|---|
| **0–6** | 📓 **Field Note** | Story hook from the guide · 3-question **Trig Check** retrieval · Learning Intention & Success Criteria | 3–4 |
| **6–18** | 🧭 **Survey** | Teacher-led input through interactive slides, modelling, "turn & talk" | 4–7 |
| **18–38** | 🥾 **Choose Your Path** | Students choose **Path A, B or C** (see §6) · teacher roams with the rubric | 1–2 (+ timer) |
| **38–45** | 🔍 **Through the Lens** | Christian lens, 4 moves | 2 |
| **45–50** | 📐 **Trig Clue & Exit** | Clue solved · self-assessment (Developing–Achieved–Flying) · wheat sheaves | 2 |

**Friday version:** the same shape, but the Clue becomes the **Survey Seal** plus **The Dealer's Offer**, Path time is 22 minutes, and the lens is a 5-minute gallery reflection.

## 5.2 The teacher scripting system
Identical to The Fifth Codex: 🗣️ **SAY** · ❓ **ASK** (with ⏳ wait time) · 👂 **LISTEN FOR** · ↪️ **IF THEY SAY…** · 🖱️ **CLICK** · 🤝 **TURN & TALK** · ⭐ **DEEPER** · 🧘 **PACE** · ⚠️ **SAFETY** · 🌿 **TIKANGA** (new: a note on cultural protocol, e.g. "pronounce place names carefully; practise with the audio first").

## 5.3 Classroom routines built into the app
- **Field Protocol** (shown Week 1, then on the toolbar): Respect people and places · Evidence before opinion · Every voice heard · Leave it better than you found it.
- **Timer**, **Random Team/Name Picker** (class list stored only on the device), **Sheaf counter**, **Calm screen** (a slow braided-river animation), and a **Say it right** button that plays or shows the pronunciation of place names (recordings to be approved locally, D3).

## 5.4 Vocabulary pop-ups on every slide (built into The Fifth Codex, October 2026)
- Hover over any **dotted-underlined word** on a slide to see a pop-up card with its meaning (and pronunciation where useful). It disappears when the pointer moves away. Tap on a touch screen.
- **Gold dots = today's lesson words** (from the lesson's vocab list, shown with a "Today's word" tag). **Faint dots** = vocab from other weeks, plus other uncommon words.
- Each word is underlined only the **first time** it appears on a slide. Everyday words (e.g. *if, open, loop, record*) are underlined only in the lesson that teaches them. Code, buttons and diagrams are never underlined.
- Hakatere's extra glossary (`data/glossary.js`) will cover, for example:
  - te reo Māori in local Kāi Tahu forms where used (tākata whenua, mahika kai, kāika, ara tawhito, hāpua, mātai, Puaka, Ō Tū Wharekai);
  - place and people names (Hakatere, Te Kiekie, Ōpuke, Arowhenua);
  - geography (greywacke, uplift, föhn, nor'wester, lenticular, braided river, stopbank, outwash);
  - surveying (theodolite, trig point, bearing);
  - farming and technology (pivot irrigator, border dyke, header, fulcrum, mechanical advantage, algorithm, variable);
  - astronomy (light-year, cluster, galaxy, nebula).
- Every te reo definition is checked with the school's Māori lead (D3).

---

# 6. STUDENT AGENCY — "Choose Your Path"

## 6.1 How it works
Every lesson offers **three paths** that show the *same* learning intention in different ways. All are assessed against the same rubric.

| Path | Style | Example products |
|---|---|---|
| **A · The Recorder** | Writing & recording | Field notes, diary entry, labelled diagram, explanation, letter, museum label |
| **B · The Maker** | Making & modelling | Model, map, timeline, mechanism, diorama, poster |
| **C · The Storyteller** | Speaking & performing | Oral history interview, radio report, role-play, teach-back, debate |

Every path has a **Supported** version (sentence starters, templates, word bank) and a **Flying Challenge**.

**Printable Path Cards (built into The Fifth Codex, October 2026).** Every lesson has an A4 student handout for **each** path (A, B and C), so each child gets the card for the path they chose. Each card has:
- the **mission** (the product, and what it shows they can do);
- **step-by-step instructions** with tick boxes: *Get ready* → the lesson's steps, each with a 💡 tip suited to writing, making, speaking or testing → *Check your work* → *Share it*;
- the **"I can…" success criteria** to tick, and the **Flying challenge**;
- **Where to find the information:** which slides to ask to see again (by number and title), the Field Journal, materials (Maker path), the day's **trusted sources** with web addresses, and "ask 3 before me";
- a **word bank** (the lesson's vocab with meanings), **sentence starters**, and **what good work looks like** (the rubric's Achieved descriptor and example).

Cards print from the lesson page (all three, or one at a time), from a 🖨 button on the Choose Your Path slide, or a whole week at once from the Week page. Longer cards run onto a second side.

## 6.2 Term-long Big Projects (chosen in Week 6, built Weeks 7–10, shown at the Exhibition)
- **History — *Our Place Museum Case*.** One object or story from Hakatere (a family object, a building, a photo, a person) with a label, a "how do we know?" card and two perspectives. Can include a short oral-history interview with a grandparent or neighbour.
- **Geography — *Mountain Field Guide* or *Campaign*.** A guide to one local maunga or braided river (formation, weather, life, hazards, people), or a campaign to protect braided-river birds [S24].
- **Science — *Sky Watcher's Journal*.** A 3-week Moon and star observation diary, or a star-finder build, with a question the student investigates.
- **Technology — *Smart Farm*.** A working mechanism model of a farm machine **plus** a Scratch simulation of it, built to a brief and tested.
- **Art — *My Place triptych*.** Three panels — Land, River, Sky — showing techniques from the term, plus an artist statement.

---

# 7. ASSESSMENT & RUBRICS — Developing · Achieved · Flying

## 7.1 The three levels
| Level | Badge | Meaning | Curriculum meaning |
|---|---|---|---|
| **Developing** | 🌱 seedling | On the way: shows some of the learning with support | Working towards the expected level |
| **Achieved** | 🌾 wheat sheaf | Shows the learning intention securely and independently | Working at the expected level for Years 5–6 |
| **Flying** | 🪶 wrybill feather / ✨ star | Goes beyond: explains why, connects, applies, evaluates | Working beyond the expected level |

## 7.2 How rubrics are built
As in The Fifth Codex: each **success criterion** becomes a rubric row; each cell has a descriptor plus a **real example of student work** at that level; each row names its code; **Quick-Mark mode** stores results on the device only.

## 7.3 Subject core rubrics (term-level, for Big Projects and reporting)

### HISTORY core rubric (SS-H, SS-P, ANZH)
| Criterion | 🌱 Developing | 🌾 Achieved | ✨ Flying |
|---|---|---|---|
| **Using sources** | Names a source. *e.g. "We know because of the museum."* | Says what a source tells us and what kind it is. *e.g. "The Hakatere Station stone cottage is a primary source. It's still standing from 1862 and shows how shepherds lived."* | Compares sources and judges their reliability. *e.g. "Mantell's 1848 sketches show where Kāi Tahu camped, but he was working for the Crown, so I'd check the Arowhenua account too."* |
| **Cause & consequence** | Retells an event. *e.g. "They built a water race."* | Explains a cause and a consequence. *e.g. "The plains were too dry, so the RDR was built in the Depression. It gave people jobs and watered farms."* | Weighs several causes or links to today. *e.g. "Jobs, power and farming all mattered. Today irrigation still shapes our town, including arguments about river water."* |
| **Perspectives** | Gives one point of view. | Describes two perspectives on an event. *e.g. Kāi Tahu and the Crown on Kemp's Deed.* | Explains *why* people saw it differently and what fairness requires now. |

### GEOGRAPHY core rubric (SS-G, SS-C, SS-P)
| Criterion | 🌱 Developing | 🌾 Achieved | ✨ Flying |
|---|---|---|---|
| **Using maps & data** | Finds a place on a map with help. | Reads contours, scale and grid references to describe a place. *e.g. "Mt Somers is at grid C4. The contours are close together on the south face, so it's steep."* | Interprets patterns across maps and data. *e.g. "The plains are dry because they sit in the rain shadow, so farms cluster where there's irrigation."* |
| **Explaining processes** | Describes a feature. *e.g. "The mountains are high."* | Explains how a process made it. *e.g. "The Pacific and Australian plates push together, so the Alps rise about 10 mm a year near the Alpine Fault."* | Links processes to people and hazards. *e.g. "Uplift + erosion + ice made the gravel plains. That's why our rivers braid and why floods spread so wide."* |
| **Taking action** | Gives an opinion. | Gives an opinion with reasons and recognises another view. | Builds a fair, reasoned case for action. |

### SCIENCE core rubric (SC-ES, SC-MF, SC-P)
| Criterion | 🌱 Developing | 🌾 Achieved | ✨ Flying |
|---|---|---|---|
| **Scientific understanding** | Names objects. *e.g. "Matariki is stars."* | Explains using a scientific idea. *e.g. "Matariki is a cluster of stars. We only see it before dawn in winter because Earth has moved around the Sun so it's now on our night side."* | Predicts and explains new situations. *e.g. "In summer, Matariki is up in the evening, so we could see it at night then."* |
| **Investigating & observing** | Observes with help. | Observes and records carefully over time (e.g. Moon diary). | Explains patterns in the observations and improves the method. |
| **Communicating** | Everyday words, simple drawings. | Correct vocabulary and labelled diagrams. | Uses models and diagrams to teach someone else. |

### TECHNOLOGY core rubric (TE-TP, TE-TK, DT-CT)
| Criterion | 🌱 Developing | 🌾 Achieved | ✨ Flying |
|---|---|---|---|
| **Design & planning** | Has an idea. | Writes a brief with a stakeholder, need and 2–3 specifications; sketches a labelled plan. | Justifies design choices against the specifications. |
| **Mechanisms & systems** | Builds with help; some parts move. | Builds a working mechanism and explains its input → process → output. *e.g. "Turning the small gear makes the big gear turn slower but with more force."* | Improves it after testing and explains how the parts interact. |
| **Algorithms & debugging** | Follows given steps. | Writes a sequence with a loop or decision; finds and fixes a bug. | Writes efficient code and explains how they debugged methodically. |
| **Evaluation** | Says if it worked. | Evaluates against each specification. | Gets stakeholder feedback and plans the next version. |

### VISUAL ART core rubric (VA-UC, VA-PK, VA-DI, VA-CI)
| Criterion | 🌱 Developing | 🌾 Achieved | ✨ Flying |
|---|---|---|---|
| **Context** | Names an artist or tradition. | Explains its purpose or meaning (e.g. Rita Angus painted the high country as clear, bright shapes [S37]). | Compares traditions respectfully (e.g. rock art as tribal record [S38] vs landscape painting). |
| **Technique** | Uses materials with help. | Uses the technique carefully (even wash, layered depth, clean print). | Combines techniques skilfully; refines through trial. |
| **Ideas** | Copies an example. | Develops an own design from studied examples. | Creates an original, meaningful design showing influence without copying. |
| **Reflecting** | Says what they like. | Uses art words to describe work. | Gives specific, kind feedback and explains choices. |

## 7.4 Formative evidence, differentiation, PDFs
Exactly as The Fifth Codex: Trig Check retrieval, photographed path products, Quick-Mark, exit self-assessment, Field Journal; **Supported / ESOL / learning support / Flying** on every plan; Lesson Plan, Rubric (teacher and student), Week Pack and Unit Plan PDFs. **Every lesson plan PDF ends with a Sources & evidence page** (the system built for The Fifth Codex in October 2026).

**Student handouts:** the Path Cards (§6.1) and the student rubric are the two printables students receive each lesson.

**Pre/post:** Week 1 "What do I know about my place?" map wall + "Draw the night sky" baseline → repeated in Week 10.

---

# 8. TEN-WEEK OVERVIEW

| Wk | Map sheet | **Mon** History (Hakatere) | **Tue** Geography (Mountains) | **Wed** Science (Matariki & the universe) | **Thu** Technology (Farm machines + Scratch) | **Fri** Art (Land, River & Sky) | Lens pillar & key text |
|---|---|---|---|---|---|---|---|
| 1 | I · The Chest | What is local history? Names, sources & our place | Reading the land: maps, contours, mountains to sea | Look up! Stars, planets & moons | Think like an engineer: machines on our farms | Seeing the land: mountain sketching & the Field Journal | 📜 Mōhio · Joshua 4:1–7 |
| 2 | II · Kāika & Kai | Tākata whenua: Waitaha, Kāti Māmoe, Kāi Tahu; mahika kai of Hakatere | How mountains are made: plates, the Alpine Fault & greywacke | The Sun is a star | Levers: the gate, the bale spike & the lifting arm | Rita Angus & the high country: flat-colour landscape | ❤️ Aroha · Psalm 104:10–14 |
| 3 | III · The Old Trails | Ara tawhito: trails, rivers & the tree called Hine-Paaka | Mountain hazards: earthquakes, slips & avalanches | Day, night & the spinning sky | Wheels, axles & gears | Layered mountains: depth & atmospheric perspective | 📜 Mōhio · Psalm 121:1–2 |
| 4 | IV · The Deed | 1848: Kemp's Deed — land, promises & perspectives | Ice & gravel: glaciers, the plains & braided rivers | Tilt & seasons: why Matariki rises in winter | Pulleys & linkages: the hay hoist | Braided rivers from above: line & pattern | 🌱 Pānga · Lev 25:23; 1 Kings 21 |
| 5 | V · The Run | Sheep runs & the high country: Hakatere Station | Mountain weather: rain shadow, the nor'wester & the arch | The Moon & the maramataka | Build a machine: the pivot irrigator model | Nor'west skies: wet-on-wet watercolour | 🤲 Manaaki · Gen 8:22 |
| 6 | VI · The Town | Building Ashburton: the Victorian town, the railway & industry | Life above the bushline: alpine & tussock ecosystems | Matariki & Puaka: the cluster, its stars & meanings | Scratch 1: algorithms & sequence (drive the tractor) | Ngāi Tahu rock art: learning about, not copying | 📜 Mōhio · Ps 147:4; Amos 5:8 |
| 7 | VII · The Race | Water on the plains: water races & the Rangitata Diversion Race | People & mountains: stations, musterers, ski fields & parks | Life of a star: colours, giants & nebulae | Scratch 2: loops (the irrigator circle) | Matariki printmaking | 🤲 Manaaki · 1 Peter 4:10 |
| 8 | VIII · The Flood | May 2021: the Hakatere flood & recovery (+ Tarawera 1886) | Mountains of Southeast Asia: Kinabalu case study | Our galaxy: Te Ikaroa, the Milky Way & beyond | Scratch 3: events & decisions (the smart irrigator) | Patchwork plains: aerial collage | ❤️ Aroha · Matt 7:24–27; Isa 43:2 |
| 9 | IX · Making It Right | Te Kerēme: the Ngāi Tahu claim & the 1998 settlement | Water from the mountains: snow, ice & a warming world | Finding our way: navigating by the stars | Scratch 4: variables & testing (counting the harvest) | My Place triptych: build week | 🌱 Pānga · Luke 19:1–10; Micah 6:8 |
| 10 | X · Our Place | Hakatere today: many families, one place + the Exhibition | Kaitiaki of the mountains: our campaign | Seeing further: telescopes, dark skies & the Sky Expo | Smart Farm showcase: test, evaluate & present | Our Place Exhibition | ✨ Soli Deo Gloria · Rev 7:9 |

**For a 9-week term:** merge Wk 9 and 10 Technology (finish + showcase), drop Wk 8 Art (collage), and hold the Exhibition in Wk 9.

---

# 9. THE COMPLETE PROGRAMME

> **Format note for the builder.** Week 1 is written out **in full** as the gold-standard template. Weeks 2–10 are **Lesson Cards** with the essential content (LI, SC, hook, key knowledge with source tags, interactive, paths, lens, clue). During the build each card is expanded to Week 1's depth and shown to the teacher for review. **Facts marked 🔎 still need a source checked during the build** before they go on a slide; everything else carries its source tag.

---

## ⭐ WEEK 1 — MAP SHEET I · THE CHEST
**Story:** the tin chest is found in the stopbank gravel. Sheet I shows the river mouth, with "Ashburton" written in ink and "Hakatere" in pencil.
**Week prep (total ≈ 20 min):** Field Journals (one exercise book or sketchbook per student), A3 paper, B/2B pencils and charcoal, a few printed contour maps (optional; the app projects them), simple machine "detective" cards (optional print).

---

### MON · W1 · HISTORY — "Whose Place? Names, Sources & Local History"
- **Codes:** SS-H, SS-P, ANZH · TR (place names) · KC: Thinking, Using language, symbols & texts
- **Required-content coverage:** Y6 History practices (sources, perspectives); ANZH local context; introduces Y6 "differing views on land".
- **LI:** We are learning what local history is, and how historians find out about the past of a place.
- **SC:** I can explain that places can have more than one name and story. · I can tell the difference between a primary and a secondary source. · I can name one local source that helps us learn about Hakatere.
- **Key vocabulary:** local history, tākata whenua (tangata whenua), Hakatere, source (primary/secondary), archive, heritage, perspective.
- **Prep:** ⏱️ 0 min (all on screen). Optional: bring an old family object or photo to show as a "primary source".

**📓 Field Note (0–6)**
- Opening cinematic: the flood, the digger, the tin chest, the field book (§12 #1).
- 🗣️ SAY the premise (§2.1). 🖱️ CLICK to reveal Nell's note: *"Look at the first sheet. Two names for one river. Before we restore anything, we need to understand whose stories are on this map."*
- **Trig Check (prior knowledge this week):** ❓ "Thumbs up if you know… the Māori name of our river… which mountains you can see from school… the oldest building you know in our district?" → 🖱️ add answers to the **Map Wall** (kept until Week 10).
- Share the LI and SC.

**🧭 Survey (6–18)**
1. **Two names, one river** 🟢. 🖱️ The *Name Layers* map (§12 #2): peel back the English names to show older names.
   - The river's Māori name is **Hakatere**. Around **1848–49** a Canterbury Association surveyor, **Joseph Thomas**, renamed it the **Ashburton**, after **Bingham Baring, Lord Ashburton**, a banker who invested in the Association [S3].
   - Hakatere is still used for the river, the district and the local marae: **Hakatere Marae** took its name from the river [S1].
   - 🌿 TIKANGA: practise saying *Hakatere* (ha-ka-te-re, short even vowels) with the class. Use the "Say it right" button if a local recording has been approved (D3).
   - ❓ ASK: "Why might a place have two names? Whose names are on most of our road signs?" ⏳ 5 s · 👂 LISTEN FOR: different people arrived at different times; names tell stories; some names were replaced.
2. **What is local history?** 🗣️ SAY: "Local history is the story of *this* place: the people who lived here first, the people who came later, and us."
   - A quick visual timeline (scroll): first tākata whenua (Waitaha, Kāti Māmoe, Kāi Tahu [S1]) → 1848 land purchase [S6] → 1858 accommodation house beside the river ferry, town surveyed 1863–64 [S4] → the stone cottage at Hakatere Station, 1862 [S11] → today. ⭐ DEEPER: "What's missing from a timeline like this?"
3. **How do we know? Local sources.** 🖱️ The **Source Sorter** (drag cards into PRIMARY or SECONDARY):
   - the 1862 stone cottage at Hakatere Station 🟢 (primary: it's still there [S11]);
   - Walter Mantell's 1848 sketch of Te Rehe 🟢 (primary: drawn at the time [S1]);
   - a museum exhibition panel (secondary);
   - a kaumātua's account handed down in the whānau (an oral source: discuss!);
   - a 2021 news report on the flood (primary for 2021);
   - this term's app (secondary!).
   - ❓ ASK: "Is a story passed down through families a source? How would a historian treat it?" 👂 Yes: oral history is a source, especially for tākata whenua, who passed on history through whakapapa, kōrero and place names. Historians compare it with other sources, just as they do with written ones.
   - ↪️ IF THEY SAY "only writing counts": "For most of human history, people didn't write. Kāi Tahu remembered place names, trails and food places in kōrero and whakapapa, and some were later written down, like the names Hori Kerei Taiaroa recorded in 1880 [S1]."

**🥾 Choose Your Path (18–38)**
- **A · Recorder — Place-name Detective:** choose 3 local names (Hakatere/Ashburton, Te Kiekie/Mt Somers, Ōpuke/Mt Hutt [S21][S22]). For each: both names, who named it (if known), and one question to research.
- **B · Maker — "My Place" Map:** draw a mental map from home to school with 5 landmarks, and label which are natural and which are built.
- **C · Storyteller — Interview Plan:** write 5 questions to ask an older family member about how the district has changed (to use this week; it becomes evidence for the Big Project).
- *Supported:* name-card bank, sentence starters ("This place is called… because…"). *Flying Challenge:* "Why might renaming a place matter to the people who named it first?"

**🔍 Through the Lens (38–45) — 📜 Mōhio**
- **LOOK CLOSER:** the map sheet with two names.
- **OPEN THE WORD:** Joshua 4:1–7. Israel set up twelve stones from the Jordan so that *"when your children ask, 'What do these stones mean?'"* they would tell the story of what God had done.
- **TALK IT THROUGH:** ❓ "Why did God want His people to remember their history and tell it to their children?" 👂 So they'd remember who they are and God's faithfulness; history shapes identity. ❓ "What 'stones' help us remember Hakatere's story?" 👂 Names, buildings, the marae, the museum, old people's memories.
- **LIVE IT OUT:** journal: *"One story about my place I want to remember is…"*

**📐 Trig Clue & Exit (45–50)**
- **Trig Clue 1:** "The river was renamed around **1849**, and the town was surveyed in **1864**. How many years apart?" → **15**.
- Self-assess against the SC. Award wheat sheaves.

**📊 Lesson Rubric — Mon W1**
| SC (code) | 🌱 Developing | 🌾 Achieved | ✨ Flying |
|---|---|---|---|
| More than one name (ANZH, TR) | Knows the river has another name. *Ex: "It's also called Hakatere."* | Explains both names and their origins. *Ex: "Hakatere is the Māori name. Ashburton was given by a surveyor in about 1849 after Lord Ashburton."* | Explains why naming matters. *Ex: "Changing a name can make people's history invisible, so using both names honours everyone."* |
| Primary vs secondary (SS-P) | Sorts some sources with help. | Defines both and gives a local example of each. *Ex: "The 1862 stone cottage is primary. The museum panel is secondary."* | Explains how oral history is a source and how to check it. |
| Local sources (SS-P) | Names a place to find out. | Names a specific local source and what it could tell us. | Suggests comparing two sources to check a claim. |

**Teacher reflection:** Who has family stories to share (a future expert)? Any whānau links to Hakatere Marae or local farms? Who struggled with primary vs secondary?

---

### TUE · W1 · GEOGRAPHY — "Reading the Land: From Mountains to Sea"
- **Codes:** SS-G, SS-P · MA (scale, contour intervals) · KC: Thinking
- **Required-content coverage:** Y5–6 geographic practices (maps, aerial images); sets up Y5 tectonic hazards.
- **LI:** We are learning to read maps of Mid Canterbury, including contour lines, to describe the land from the mountains to the sea.
- **SC:** I can follow the Hakatere from its source to the sea on a map. · I can explain what contour lines show. · I can use a grid reference and scale.
- **Key vocab:** source, mouth, branch, braided river, plains, foothills, contour line, scale, grid reference, elevation, hāpua (river-mouth lagoon).
- **Prep:** ⏱️ 5 min. Optional: printed contour map of Mt Somers.

**📓 Field Note:** Sam and Flint at the top of a ridge: *"From up here you can see the whole story: ice, rock, river, plains, sea. Learn to read it, and you'll never get lost."* Trig Check from Monday (two names for the river; one primary source; what is local history?).
**🧭 Survey:**
1. **Source to sea** (§12 #10): a 3D cut-paper map flies down the Hakatere.
   - The **South Branch** starts as meltwater from the **Ashburton Glacier** below **Mt Arrowsmith (2,781 m)**. The **North Branch** rises near Godley Peak [S3].
   - The branches join about **21 km from the coast**, just inland of Ashburton town [S3].
   - The river reaches the sea at the **Hakatere hāpua**, a river-mouth lagoon [S3].
   - Ashburton is about 85 km south-west of Christchurch [S4].
2. **Contour lines** (§12 #11 *Contour Builder*): stack paper layers to make Mt Somers / **Te Kiekie (1,688 m)** [S21], then flatten them into a contour map. ❓ "Where are the lines close together? What does that mean?" 👂 Steep slope.
3. **Grid & scale game:** find Mt Hutt / **Ōpuke (2,190 m)** [S22], Mt Somers, Methven and the river mouth using grid references; measure straight-line distances with the scale bar.

**🥾 Paths:** **A** *Field Notes*: describe the river's journey in 6 labelled stages. · **B** *Paper Mountain*: build a layered card model from a contour template and label its steep and gentle sides. · **C** *Ranger's Radio Brief*: guide a "lost tramper" to a hut using grid references and compass directions. *Flying Challenge:* "Why do rivers on the Canterbury Plains run roughly south-east?"
**🔍 Lens — 📜 Mōhio:** Psalm 121:1–2, *"I lift up my eyes to the mountains — where does my help come from? My help comes from the Lord, the Maker of heaven and earth."* ❓ "Why might mountains make people think about God?" ❓ "The psalm says help comes from the Maker, not the mountains. What's the difference?" **Live it out:** write the verse in your Field Journal beside a quick sketch of a local mountain.
**📐 Trig Clue 2:** "Mt Somers is 1,688 m high. How many **whole hundreds** of metres is that?" → **16**.
**📊 Rubric rows:** Following the river (SS-G) · Reading contours (SS-G, MA) · Grid & scale (SS-P, MA).
- *Developing ex:* "The river starts in the mountains and goes to the sea." · *Achieved ex:* "The South Branch starts at the Ashburton Glacier, the branches join near Ashburton, and it reaches the sea at the hāpua. Close contours on Mt Somers mean steep slopes." · *Flying ex:* "The plains slope gently toward the sea, so the river runs south-east and spreads out into braids."

---

### WED · W1 · SCIENCE — "Look Up! Stars, Planets & Moons"
- **Codes:** SC-ES, SC-P · KC: Thinking
- **Required-content coverage:** Y6 Science: night sky — stars, Moon and planets; stars make their own light, planets and moons reflect it [S32].
- **LI:** We are learning to tell the difference between stars, planets and moons in the night sky.
- **SC:** I can explain that stars make their own light and planets and moons reflect it. · I can name the five planets we can see without a telescope. · I can describe what makes a "dark sky" good for stargazing.
- **Key vocab:** star, planet, moon, reflect, emit, naked eye, constellation, star cluster, light pollution.
- **Prep:** ⏱️ 5 min. A torch and a small mirror or foil ball (demo). Home task sheet: "Look up tonight" (optional).
- **Safety:** never look directly at the Sun.

**📓 Field Note:** Dr Priya, in a dark observatory dome: *"Your surveyor didn't have GPS. He had the stars. Tonight, let's learn to read them."* Trig Check from Tuesday.
**🧭 Survey:**
1. **Make light or bounce light?** 🧪 Demo: a torch (makes light, like a star) and a foil ball (only visible when light hits it, like a planet or moon). 🖱️ *Star or Planet?* sorter (§12 #20).
2. **The naked-eye planets** 🟢: **Mercury, Venus, Mars, Jupiter and Saturn** can be seen without a telescope [S32]. 🖱️ Tonight's sky simulation (Ashburton's latitude) with the planets labelled.
   - ↪️ IF THEY SAY "stars twinkle and planets don't": "Good noticing! That's a handy clue, though not a perfect rule."
3. **Dark skies** 🟢: the **Aoraki Mackenzie** area, an hour or two south-west of us, is an International Dark Sky Reserve, with Mt John University Observatory near Tekapo [S30]. 🖱️ The *Light Pollution* slider dims a town's lights to reveal the Milky Way.
**🥾 Paths:** **A** *Sky Recorder*: a labelled diagram showing why we see stars, planets and the Moon (emit vs reflect). · **B** *Sky Model*: a torch-and-ball model that demonstrates reflected light, with a labelled sketch. · **C** *Night-Sky Guide*: a 60-second "tonight's sky" broadcast for whānau. *Flying Challenge:* "Why can we see the Moon in the daytime sometimes but not the stars?"
**🔍 Lens — 📜 Mōhio:** Psalm 19:1, *"The heavens declare the glory of God; the skies proclaim the work of His hands."* ❓ "How can the sky 'declare' something without words?" ❓ "What does a dark, starry sky make you feel?" **Live it out:** one "Wow, God…" sentence about the night sky.
**📐 Trig Clue 3:** "How many planets can we see without a telescope?" → **5**.
**📊 Rubric rows:** Emit vs reflect (SC-ES) · Naked-eye planets (SC-ES) · Observing the sky (SC-P).
- *Developing ex:* "Stars are bright." · *Achieved ex:* "Stars make their own light. Planets and the Moon only shine because sunlight bounces off them." · *Flying ex:* "Venus is so bright because it's close to us and covered in clouds that reflect lots of sunlight." 🔎 *(Verify the Venus cloud fact against a NASA source before use.)*

---

### THU · W1 · TECHNOLOGY — "Think Like an Engineer: Machines on Our Farms"
- **Codes:** TE-TK (systems), TE-NT (technology & society), TE-TP · KC: Thinking, Participating
- **LI:** We are learning how machines changed farming in Mid Canterbury, and to describe a machine as a system with inputs, processes and outputs.
- **SC:** I can describe how farm machines have changed over time. · I can identify the input, process and output of a machine. · I can explain one way a machine makes farm work easier.
- **Key vocab:** machine, mechanism, system, input, process, output, energy, efficiency, engineer.
- **Prep:** ⏱️ 5 min. Optional: printed *Machine Detective* cards.

**📓 Field Note:** Liv, under a giant pivot irrigator: *"This thing waters a whole paddock while it walks in a circle, all on its own. A hundred years ago this was a man with a horse. Let's find out how we got here."*
**🧭 Survey:**
1. **From muscle to machine** 🟢 (§12 #30 *Farm Machine Timeline*, with drag-to-order cards) [S19]:
   - early farm work used bullocks and horses;
   - a horse-drawn reaper arrived in Canterbury in **1856**;
   - steam engines from the 1860s;
   - NZ's first tractors (an Ivel and a Kinnard Haines) in **1904**;
   - header harvesters in **1927**;
   - the electric **rotary milking platform** in **1969** (Merv Hicks);
   - large electric spray irrigators in dry South Island areas from the **mid-1980s**.
   - Today, centre pivots and linear-move irrigators water about **133,000 hectares** of the Ashburton District (Stats NZ, 2022) [S16].
2. **Machines are systems.** 🖱️ The *Input → Process → Output* builder: pick a machine (pivot irrigator, tractor, milking platform, hay baler) and drag its parts into the three boxes. e.g. pivot: *input* water + electricity → *process* pumps push water along the arm while motors drive the wheels → *output* evenly watered circle.
3. **What did machines change?** 🤝 TURN & TALK: one good change and one problem (e.g. fewer farm jobs, more water use).
**🥾 Paths:** **A** *Machine Report*: an I-P-O diagram and a paragraph on one farm machine. · **B** *Machine Model Sketch*: an annotated drawing of a machine showing its moving parts, with a prediction of which "simple machines" are inside (levers? gears? wheels?). · **C** *Then & Now Interview*: role-play a farmer from 1900 meeting a farmer from today. *Flying Challenge:* "Is a machine always better? Give one case where doing a job by hand is better."
**🔍 Lens — 🤲 Manaaki:** Genesis 2:15, God put people in the garden *"to work it and take care of it."* ❓ "Machines help us *work* the land. How can they also help us *take care* of it?" 👂 Water only what's needed, less waste, protect soil and rivers. **Live it out:** name one way you can "work and take care" of something this week.
**📐 Trig Clue 4:** "How many boxes are in a system diagram (input, process, output)?" → **3**.
**📊 Rubric rows:** Change over time (TE-NT) · Systems (TE-TK) · Making work easier (TE-TK).
- *Developing ex:* "Tractors are better than horses." · *Achieved ex:* "A pivot irrigator's input is water and power, its process is pumping water along the arm while it turns, and its output is a watered circle. It saves farmers moving pipes by hand." · *Flying ex:* "Pivots save labour and water evenly, but they let farms use a lot more river water, so there's a trade-off."

---

### FRI · W1 · ART — "Seeing the Land: Mountain Sketching & the Field Journal"
- **Codes:** VA-PK, VA-DI, VA-UC · KC: Managing self
- **LI:** We are learning to observe and sketch the shapes of our landscape using line and tone.
- **SC:** I can draw a mountain skyline using careful observation. · I can use light and dark tone to show near and far. · I can set up my Field Journal for the term.
- **Key vocab:** landscape, skyline, silhouette, foreground, middle ground, background, line, tone, sketch.
- **Prep:** ⏱️ 10 min. A3 paper, B/2B pencils, charcoal, erasers, Field Journals. Weather permitting, go outside for 10 minutes to sketch the real skyline.

**📓 Field Note:** Tom, at his easel on a gravel road: *"Your surveyor drew every ridge by hand. Before we restore his map, your eyes need to learn what his eyes knew. Look slowly."*
**🧭 Survey:**
1. **Three grounds:** foreground (paddock, fence, river stones), middle ground (foothills), background (the Alps). 🖱️ The *Layered Landscape* demo (§12 #40) separates a photo-style cut-paper scene into its three layers.
2. **Skyline drawing:** 🖱️ the skyline draws itself slowly: look at the highest points first, then the dips. "Look 80%, draw 20%."
3. **Tone for distance:** far mountains are paler and bluer; near things are darker with more detail.
**🥾 Paths (22 min):** All students set up the Field Journal cover (5 min). Then: **A** *Faithful Skyline*: sketch the real view (outside or from the projected photo) with 3 grounds. · **B** *Charcoal Tones*: a 5-step tonal strip, then a skyline using tone for distance. · **C** *Teach-a-Sketch*: draw a skyline AND write 3 steps teaching someone else. *Flying Challenge:* add a nor'west arch cloud to the sky.
**🔍 Lens (5 min gallery) — 🤲 Manaaki:** Psalm 90:17, "Establish the work of our hands." ❓ "What does slow, careful drawing teach us about how we look at God's world?"
**📐 SURVEY SEAL I:** combine the clues **15 + 16 + 5 + 3 = 39** → dial a bearing of **039°** on the theodolite → the seal cracks and Sheet I unfolds: the river mouth, the hāpua and a line of pencilled names along the river (🟡). **The Dealer's Offer:** *"Old maps sell for a fortune overseas. Everyone has a price. What's yours?"*
**📊 Rubric rows:** Observation (VA-PK) · Tone & distance (VA-PK, VA-DI) · Context (VA-UC).
- *Developing ex:* skyline drawn from memory as zigzags; one tone. · *Achieved ex:* skyline matches the real ridges; clear foreground, middle ground and background; pale far hills. · *Flying ex:* uses tone and detail on purpose to create depth; explains why far mountains look blue.

---

## ⭐ WEEKS 2–10 — LESSON CARDS
*(Each card is expanded to Week 1 depth during the build. "Int" = interactive from §12. Clue answers are summed into Friday's bearing.)*

### WEEK 2 — MAP SHEET II · KĀIKA & KAI
**Story:** pencilled symbols beside the river mark seasonal camps and food places.

**MON · History — Tākata Whenua: The First People of Hakatere**
- **LI:** describe who the first people of Hakatere were and how they lived with the land through the seasons. **SC:** name the iwi and peoples associated with Hakatere; explain mahika kai and seasonal camps; explain why food places mattered.
- **Key knowledge 🟢:**
  - Māori first settled Canterbury about 600–700 years ago, and inland summer camps were used to gather food [S47].
  - The Arowhenua cultural narrative names the tākata whenua of the area as **Hāwea, Rapuwai, Waitaha, Kāti Māmoe and Kāi Tahu**, with Kāi Tahu hapū **Kāti Huirapa, Ngāi Te Ruahikihiki and Ngāi Tūāhuriri** [S1].
  - People moved with the seasons to **kāika nohoaka** (seasonal camps) near food and water [S1].
  - **Mahika kai** (food-gathering) of Hakatere included tuna (eels), kōura, kākahi, paraki, weka, aruhe (bracken-fern root) and tī kōuka (cabbage tree) [S1].
  - **Ō Tū Wharekai** (the Ashburton Lakes) was a mahika kai site and travel route [S1].
- **Int:** *Seasonal Round* wheel (§12 #3): turn the year and see which kai was gathered where. Content to be checked with Arowhenua (D3).
- **Paths:** A *Mahika kai fact card* · B *Seasonal wheel model* · C *Kōrero practice* (retell with key te reo words).
- **Lens ❤️ Aroha (World):** Psalm 104:10–14 (God makes springs flow and food grow). ❓ "What does it look like to receive food as a gift and not take more than we need?"
- **Clue:** "How many peoples does the narrative name as tākata whenua?" → 5.

**TUE · Geography — How Mountains Are Made**
- **LI:** explain how the Southern Alps formed and are still rising. **SC:** describe the plate boundary; explain uplift and erosion; identify greywacke.
- **Key knowledge 🟢:**
  - NZ sits on the boundary between the **Pacific and Australian plates**. Their collision pushes the land up [S20].
  - 📜 **God's creation (main):** God formed the mountains (Psalm 90:2; Psalm 104:5–8). In a young-earth reading of Genesis, the great mountain ranges were raised during and soon after Noah's Flood, thousands of years ago [S50] (see §4.6).
  - Near the Alpine Fault, uplift is **10 mm or more a year**: a measurement taken today [S20].
  - The Alps are mostly **greywacke**, a hard grey sedimentary rock (rock made from layers of sediment) [S20]. Mt Somers/Te Kiekie is different: it is mostly **volcanic** rock [S21].
  - 🔬 **Side note — what many scientists believe:** many geologists estimate the present ranges rose over about **five million years**, from greywacke **100–300 million years** old, and that Mt Somers' volcanic rock is about **89 million years** old [S20][S21].
  - Erosion (frost, rain, rivers) works against uplift [S20].
- **Int:** *Plate Push* (§12 #12): push the plates and watch the Alps rise while erosion wears them down; uplift counter in mm/year → metres per 1,000 years (measured rate, no age claims on screen).
- **Paths:** A *Rock detective* report (greywacke vs volcanic) · B *Layered-paper plate model* · C *"Mountain's autobiography"* talk.
- **Lens 📜:** Psalm 90:2, *"Before the mountains were born… from everlasting to everlasting you are God."* (See D8.)
- **Clue:** "Uplift of 10 mm a year: how many cm in one year?" → 1.

**WED · Science — The Sun Is a Star**
- **LI:** explain that the Sun is a star and why it looks so different from other stars. **SC:** explain the Sun is a star; explain why it looks bigger and brighter; describe what the Sun gives Earth.
- **Key knowledge 🟢:** the Sun is a star; it looks bigger and brighter than other stars because it is **much closer** [S32]. 🔎 Distance (~150 million km) and size comparisons to be sourced from NASA at build.
- **Int:** *Shrinking Sun* (move the Sun further away until it becomes a dot like any other star); *Scale Walk* (a to-scale walk across the school field).
- **Paths:** A *Sun fact file* · B *Scale model* (Sun vs Earth paper discs) · C *"Interview with the Sun"* role-play.
- **Lens 📜:** Genesis 1:16 ("He also made the stars") and Psalm 136:7–9. ❓ "Why do you think Genesis mentions the stars almost in passing?"
- **Safety:** never look at the Sun, even with sunglasses or binoculars.
- **Clue:** "The Sun is our nearest star. How many stars are nearer to Earth than the Sun?" → 0.

**THU · Technology — Levers: Gate, Bale Spike & Lifting Arm**
- **LI:** explain how levers make farm work easier and build a working lever. **SC:** identify the effort, load and pivot (fulcrum); explain how moving the pivot changes the effort needed; build and test a lever model.
- **Key knowledge 🟢:** simple machines such as levers reduce the effort needed, change the direction of a force, or increase its effect (Y5 Science content) [S31]. Mechanical advantage is how much a machine multiplies a force [S48].
- **Int:** *Lever Lab* (§12 #31): slide the fulcrum and the load (a hay bale) and watch the effort meter.
- **Paths:** A *Lever diagram* with effort/load/pivot on 3 farm tools · B *Card lever arm* (card strips, split pins) that lifts a "bale" · C *Teach-back* of the three lever classes (wheelbarrow, gate, tongs).
- **Lens 🤲 Manaaki:** Ecclesiastes 4:9–10 ("two are better than one"). A lever is "help" that multiplies effort, and so do friends.
- **Prep:** 10 min (card strips, split pins, rulers, small weights or erasers).
- **Clue:** "A lever has effort, load and…? How many parts?" → 3.

**FRI · Art — Rita Angus & the High Country**
- **LI:** respond to a Canterbury landscape painting by making a flat-colour landscape. **SC:** describe Rita Angus's *Cass*; use clear shapes and crisp shadows; choose a limited palette.
- **Key knowledge 🟢:** Rita Angus painted ***Cass*** in **1936**, during a ten-day sketching trip to the remote railway stop at Cass in Canterbury's high country. It shows the small red station beneath purple-shadowed peaks. It is held by Christchurch Art Gallery Te Puna o Waiwhetū and is one of New Zealand's best-known paintings [S37].
- **Int:** *Shape Finder* (the painting simplified into its main shapes); *Limited Palette* mixer.
- **Paths:** A *Look closely* response (See / Think / Wonder) · B *Flat-colour landscape* of a Mid Canterbury view · C *Gallery guide* talk.
- **Lens 🤲:** Exodus 31:3 (skill as a gift).
- **SURVEY SEAL II:** 5 + 1 + 0 + 3 = **9** → bearing **009°**. Sheet II shows river camps marked in pencil (🟡). **Dealer:** *"Pencil marks? Just rub them out. The ink names are the official ones."*

### WEEK 3 — MAP SHEET III · THE OLD TRAILS
**MON · History — Ara Tawhito: Trails, Rivers & Hine-Paaka**
- **LI:** explain how tākata whenua travelled the land and how landmarks guided travel. **SC:** describe ara tawhito; explain why routes followed rivers; tell the story of Hine-Paaka.
- **Key knowledge 🟢** [S1]:
  - Traditional trails linked kāika (settlements), and the **Hakatere, Rakaia and Rangitata** rivers were routes inland to the foothills.
  - Inland routes connected to the **pounamu trails** to the West Coast.
  - Routes passed water, food and shelter and avoided swamps.
  - **Hine-Paaka** was a mātai tree between the Rakaia and Hakatere, named for an ancestor of Ngāi Tūhaitara and Kāti Māmoe. Surveyors called it **"Single Tree"**, and **Robert Park** used it as a reference point in the 1860s survey.
  - It blew down in **1945**. A replacement mātai was planted in **1976** after a tapu-lifting ceremony.
  - In **1843–44** Tarawhata, son of the chief Te Rehe, guided Edward Shortland through the region.
- **Int:** *Trail Map* (§12 #4): plan a route across the plains using water, food and shelter.
- **Paths:** A *Trail guide* · B *Landmark map* · C *Retell the Hine-Paaka story* (with respect; check D3).
- **Lens 📜:** Psalm 119:105, *"Your word is a lamp for my feet, a light on my path."*
- **Clue:** "Hine-Paaka blew down in 1945. The new tree was planted in 1976. How many years between?" → 31.

**TUE · Geography — Mountain Hazards: Earthquakes, Slips & Avalanches**
- **LI:** explain mountain hazards and how people prepare. **SC:** explain how the plate boundary causes earthquakes; describe slips and avalanches; plan a preparedness response.
- **Key knowledge 🟢:** the plate collision that lifts the Alps also causes earthquakes along the Alpine Fault [S20]; fractured, steep, rain-soaked rock leads to slips [S20]. 🔎 Avalanche facts and Alpine Fault earthquake planning (AF8 programme) to be sourced at build.
- **Int:** *Slope Stability* (angle + water + rock type → slip?).
- **Paths:** A *Hazard fact file* · B *Grab-bag plan* · C *Civil Defence message*.
- **Sensitivity:** many Canterbury families lived through the 2010–11 earthquakes. Calm warning, focus on helpers and preparedness.
- **Lens 🤲:** Psalm 46:1–3, *"God is our refuge and strength… though the mountains quake."*
- **Clue:** "In 'Drop, Cover and Hold', how many actions are there?" → 3.

**WED · Science — Day, Night & the Spinning Sky**
- **LI:** explain how Earth's spin makes the Sun and stars appear to move. **SC:** explain day and night; describe how stars appear to move across the night sky; model apparent movement with a diagram.
- **Key knowledge 🟢:** the Sun, Moon and stars appear to move because Earth spins, and diagrams can show this apparent movement [S32]. In the southern sky, stars appear to circle around a point near the Southern Cross. 🔎 (Source at build.)
- **Int:** *Spin the Earth*; *Star Trails* long-exposure simulation over Mt Somers.
- **Paths:** A *Diagram explanation* · B *Spinning globe + torch model* · C *Act it out* (students as Earth and Sun).
- **Lens 📜:** Psalm 113:3, *"From the rising of the sun to the place where it sets…"*
- **Clue:** "How many hours does Earth take to spin once (to the nearest hour)?" → 24.

**THU · Technology — Wheels, Axles & Gears**
- **LI:** explain how wheels, axles and gears transfer and change motion in farm machines. **SC:** explain a wheel and axle; explain gear ratio (big vs small gear); build a gear model.
- **Key knowledge 🟢:** gears and wheels change speed and force (mechanical advantage [S48]); tractors use gears to trade speed for pulling power. 🔎 Tractor gearbox example to be sourced at build.
- **Int:** *Gear Train* (§12 #32): drag gears, count teeth, see the speed ratio.
- **Paths:** A *Gear ratio table* · B *Card gear model* (printed gear templates on card) · C *Explain-a-gear* video script.
- **Lens 🤲:** 1 Corinthians 12:12–20 (many parts, one body; every gear matters).
- **Clue:** "A 30-tooth gear turns a 10-tooth gear. How many turns does the small gear make for one turn of the big gear?" → 3.

**FRI · Art — Layered Mountains: Depth & Atmospheric Perspective**
- **LI:** create depth with layered paper and tone. **SC:** explain atmospheric perspective; layer 4–5 shades; compose foreground to background.
- **Int:** *Layer Mixer* (choose 5 tints from one colour).
- **Paths:** A *Tonal study* · B *Layered cut-paper mountains* (Folio piece for the triptych) · C *Peer critique* talk.
- **SURVEY SEAL III:** 31 + 3 + 24 + 3 = **61** → **061°**. Sheet III: a dotted trail and a lone tree drawn on the plain (🟡).

### WEEK 4 — MAP SHEET IV · THE DEED
**MON · History — 1848: Kemp's Deed — Land, Promises & Perspectives**
- **LI:** explain what happened in Kemp's Deed and how Kāi Tahu and the Crown saw land differently. **SC:** describe the deed and its promises; explain what happened to reserves and mahika kai; compare perspectives on land ownership (Y6 content).
- **Key knowledge 🟢:**
  - **Kemp's Deed** was signed by **16 Ngāi Tahu chiefs at Akaroa on 12 June 1848** for **£2,000**, selling most of the Canterbury block [S6].
  - Ngāi Tahu were promised reserves and their mahika kai. Walter Mantell's survey then cut reserves to **under four acres per person instead of the promised ten** [S6].
  - The Arowhenua narrative records that **no reserves were surveyed in Hakatere** and that mahika kai were not protected as promised [S1].
  - Many Māori saw land as held for future generations and connected by whakapapa; the Crown saw a sale of title. (Y6: "whether land can be owned" [S34]).
- **Int:** *Promises vs Reality* (§12 #5): a split map with promised reserves shrinking to what was surveyed.
- **Paths:** A *Two-perspectives diary* · B *Map comparison poster* · C *Talk show* with two respectful guests.
- **Lens 🌱 Pānga:** Leviticus 25:23 (*"the land is mine and you reside in my land as foreigners"*) and 1 Kings 21 (Naboth's vineyard: the king took land unjustly, and God cared). ❓ "Why does God care about promises and land?" Tone: honest, not blaming children; see §17.
- **Clue:** "How many chiefs signed Kemp's Deed?" → 16.

**TUE · Geography — Ice & Gravel: Glaciers, the Plains & Braided Rivers**
- **LI:** explain how glaciers and rivers built the Canterbury Plains and why our rivers braid. **SC:** describe how glaciers carved the mountains; explain how gravel built the plains; explain braided rivers and why they matter.
- **Key knowledge 🟢:**
  - 📜 **God's creation (main):** glaciers up to **1,000 m thick** once covered the Alps and carved their valleys and lakes [S20]. Young-earth creation scientists understand this as **one Ice Age in the centuries after Noah's Flood** [S51] (see §4.6). Gravel washed out from the glaciers and rivers helped build the Canterbury Plains. 🔎 Source the outwash-gravel explanation at build (Te Ara).
  - 🔬 **Side note — what many scientists believe:** many scientists estimate there were **repeated ice ages over about the last two million years** [S20].
  - **Over 60% of New Zealand's braided riverbed area is in Canterbury** [S24]. Braided rivers have wide gravel beds, many channels and changing flows, and host species found nowhere else [S24].
  - The Hakatere is a **gravel-bed braided river** [S3].
- **Int:** *Braid Maker* (§12 #13): pour gravel and water and watch channels split and rejoin.
- **Paths:** A *Explanation with diagram* · B *Sand-tray braided river* (if possible) · C *River ranger talk*.
- **Lens ❤️:** Psalm 104:10 (*"He makes springs pour water into the ravines"*).
- **Clue:** "More than what percentage of NZ's braided riverbed is in Canterbury? (Divide by 10.)" → 6.

**WED · Science — Tilt & Seasons: Why Matariki Rises in Winter**
- **LI:** explain how Earth's tilt causes seasons and why different stars are seen in different seasons. **SC:** explain tilt → seasons; model it; explain why Matariki appears before dawn in midwinter.
- **Key knowledge 🟢:**
  - Earth is tilted on its axis, which causes seasons through changes in sunlight directness, day length and temperature (Y5 content) [S31].
  - Matariki appears low in the north-east before dawn in midwinter [S27].
  - As Earth orbits, the stars on our night side change through the year. 🔎 (Source the "heliacal rising" explanation at build.)
- **Int:** *Orbit & Tilt* (§12 #21): move Earth around the Sun; watch the seasons and the night-side constellations change.
- **Paths:** A *Season explanation* · B *Torch + globe model* · C *Weather presenter* explaining winter.
- **Lens 🤲:** Genesis 8:22 (*"seedtime and harvest, cold and heat, summer and winter… will never cease"*).
- **Clue:** "How many seasons in a year?" → 4.

**THU · Technology — Pulleys & Linkages: The Hay Hoist**
- **LI:** explain how pulleys and linkages change force and direction. **SC:** explain fixed vs moving pulleys; explain a linkage; build a pulley or linkage model.
- **Key knowledge 🟢:** pulleys can change the direction of a force and reduce effort (Y5) [S31].
- **Int:** *Pulley Lab* (§12 #33): add pulleys and watch effort and rope length change.
- **Paths:** A *Diagram* · B *Cotton-reel hay hoist* (cotton reels, string, skewers) · C *Demo-and-explain*.
- **Lens 🤲:** Galatians 6:2 (*"Carry each other's burdens"*).
- **Clue:** "A single fixed pulley changes the force's…? (Direction = 1, Size = 2)" → 1.

**FRI · Art — Braided Rivers from Above**
- **LI:** create an abstract artwork inspired by aerial views of braided rivers. **SC:** use line and pattern; vary line weight; compose an abstract from a real view.
- **Int:** *Aerial Braid* generator (draw channels; the app rearranges them as the "flood" changes).
- **Paths:** A *Line study sheet* · B *Mixed-media aerial river* (ink, pastel, collage) · C *Artist talk*.
- **SURVEY SEAL IV:** 16 + 6 + 4 + 1 = **27** → **027°**. Sheet IV: a torn copy of a deed with a promise underlined twice (🟡). **Dealer:** *"History is written by the winners. Who cares about a promise from 1848?"*

### WEEK 5 — MAP SHEET V · THE RUN
**MON · History — Sheep Runs & the High Country: Hakatere Station**
- **LI:** describe life on a high-country station and compare Victorian life for different groups (Y6 content). **SC:** describe station life from a primary source; compare the lives of musterers, women and owners; compare with life today.
- **Key knowledge 🟢:**
  - Pastoral (especially merino) farming dominated early European settlement around Hakatere [S11b].
  - Hakatere Station's **stone cottage (1862)** is possibly the oldest building in Mid Canterbury. It housed head shepherds, and later the post office [S11].
  - The **shearers' quarters** date from the **1870s**, and **Chaffey's cook shop** from the **1940s** [S11].
  - Sam Chaffey started the **Hakatere sheepdog trials** [S11].
  - Women in the high country could be very isolated: Mrs Lambie and Mary Rutherford walked about 20 km to meet for tea at the **Trysting Stone** by Lake Clearwater [S11].
  - The buildings are now a **Tohu Whenua** heritage site cared for by DOC and the Hakatere Heritage Committee [S11][S12].
  - The Canterbury settlement was planned by the **Canterbury Association**, whose first four ships arrived in **1850** [S41].
- **Int:** *A Day on the Run* (§12 #6): choose a role (head shepherd, cook, musterer, station wife) and live through a day.
- **Paths:** A *Diary of a musterer or station wife* · B *Model of the stone cottage* · C *Victorian vs today* debate.
- **Lens 🤲 Manaaki:** Genesis 8:22 / John 10:11 (*the good shepherd*).
- **Clue:** "The stone cottage was built in 1862. How many decades before 1872 was that?" → 1.

**TUE · Geography — Mountain Weather: Rain Shadow, Nor'wester & the Arch**
- **LI:** explain how the Southern Alps shape Canterbury's climate (Y6 climate patterns). **SC:** explain the rain shadow; explain the föhn nor'wester; read a rainfall graph.
- **Key knowledge 🟢:**
  - Westerly winds push moist air up over the Alps, where it cools and rains on the West Coast. It sinks down the eastern side warm and dry, as the **nor'wester** [S25].
  - The **nor'west arch** is a lenticular cloud held in place by these winds [S25].
  - Christchurch averages about **648 mm** of rain a year, about half of Auckland's or Wellington's. Nor'westers can push temperatures above **30°C**, and droughts happen about every six years on average [S26].
- **Int:** *Rain Shadow* (§12 #14): send air over the Alps and watch temperature, cloud and rainfall change.
- **Paths:** A *Weather explanation* · B *Rain-shadow diagram model* · C *MetService-style forecast*.
- **Lens 📜:** Job 37:9–13 (God and the winds).
- **Clue:** "Christchurch gets about 648 mm of rain. Round to the nearest hundred, then divide by 100." → 6.

**WED · Science — The Moon & the Maramataka**
- **LI:** explain the Moon's phases and how the maramataka uses them. **SC:** explain that the Moon reflects sunlight; draw the lunar cycle; explain how maramataka guides food gathering and planting.
- **Key knowledge 🟢:** the Moon reflects the Sun's light; its shape depends on the positions of Sun, Earth and Moon; it rises at different times in a ~29-day cycle; the **maramataka** guides food gathering and production (Y5) [S31][S49].
- **Int:** *Moon Phase Machine* (§12 #22).
- **Paths:** A *Lunar cycle diagram* · B *Oreo/paper-plate phases model* · C *Moon-diary launch* (Big Project option).
- **Lens 📜:** Psalm 104:19 (*"He made the moon to mark the seasons"*).
- **Clue:** "How many days in the Moon's cycle (to the nearest day)?" → 29.

**THU · Technology — Build a Machine: The Pivot Irrigator Model**
- **LI:** design and build a model irrigator that combines simple machines. **SC:** write a brief; build a rotating arm on wheels; test and improve it.
- **Key knowledge 🟢:** centre pivots rotate around a central point to water a circle [S15]. They and linear moves cover about 133,000 ha of the district [S16].
- **Int:** *Pivot Planner* (set arm length → see circle area, and the "missed corners" problem).
- **Paths:** A *Designer* (brief + labelled plan) · B *Builder* (card/skewer pivot that rotates on bottle-cap wheels) · C *Tester* (test against specs, warm and cool feedback).
- **Lens 🤲:** Proverbs 16:3 (commit your plans).
- **Clue:** "A circle's middle point is called the…? Count the letters in 'pivot'." → 5.

**FRI · Art — Nor'west Skies: Wet-on-Wet Watercolour**
- **LI:** paint dramatic skies using wet-on-wet watercolour. **SC:** control water and pigment; create a graded wash; add the arch.
- **Paths:** A *Technique swatches* · B *Nor'west sky painting* · C *Demonstrate to a buddy*.
- **SURVEY SEAL V:** 1 + 6 + 29 + 5 = **41** → **041°**. Sheet V: the run, with its stone cottage (🟡).

### WEEK 6 — MAP SHEET VI · THE TOWN (Big Projects chosen)
**MON · History — Building Ashburton: A Victorian Town**
- **LI:** explain how Ashburton grew from a river crossing to a town, and how industry depended on specialisation (Y6 econ). **SC:** sequence the town's early growth; explain the role of the railway and industry; describe one local business past or present.
- **Key knowledge 🟢** [S4]:
  - An **accommodation house** was built on a ferry reserve on the riverbank in **1858**, and the town was surveyed in **1863–64**.
  - Industries included flour mills, dairy factories, freezing works and brickworks.
  - **John Grigg** of Longbeach drained swamps and helped start Canterbury's **meat-freezing** industry.
  - The **Rakaia** was bridged in **1878**; **Methven** was a railway terminus from 1880 to 1976; the Tinwald–Mt Somers line closed in 1967, and part is kept by the **Plains Vintage Railway**.
  - Crop farming in the region dates from the 1860s, and the area grows a big share of NZ's grain and small seeds [S15] (🔎 cross-check those figures against official data at build).
- **Int:** *Town Grows* (§12 #7): a time slider adds buildings, railway and roads to the treeless plain.
- **Paths:** A *Then & now report* · B *Main-street model* · C *Business pitch* for a 1880s Ashburton shop.
- **Lens 🤲:** Jeremiah 29:7 (*"seek the peace and prosperity of the city"*).
- **Clue:** "From the accommodation house (1858) to the town survey (1864), how many years?" → 6.
- **Big Project launch** slide (as in The Fifth Codex).

**TUE · Geography — Life Above the Bushline: Alpine & Tussock Ecosystems**
- **LI:** describe the alpine and tussock biome and its ecosystems (Y5 biomes). **SC:** describe alpine conditions; explain plant and animal adaptations; compare with the braided-river ecosystem.
- **Key knowledge 🟢:** Hakatere Conservation Park covers nearly **60,000 ha** of high country [S11b]. Braided-river birds (wrybill, banded dotterel, black stilt, black-billed gull, pied oystercatcher, black-fronted tern) nest on open gravel from about September to January [S24]. 🔎 Alpine plant and kea facts to be sourced at build (DOC).
- **Int:** *Altitude Zones* (climb from plains to peak: temperature, plants, animals).
- **Paths:** A *Field guide page* · B *Ecosystem diorama* · C *Ranger talk*.
- **Lens ❤️:** Job 12:7–10 (*"ask the animals, and they will teach you"*).
- **Clue:** "How many braided-river bird species are our teams named after?" → 6.

**WED · Science — Matariki & Puaka**
- **LI:** explain what Matariki is scientifically and what it means in te ao Māori. **SC:** explain Matariki is a star cluster (the Pleiades); explain why it marks the Māori new year; explain why Kāi Tahu often look to Puaka.
- **Key knowledge 🟢:**
  - Matariki is a small **star cluster** (the **Pleiades**) in Taurus. It rises low in the north-east before dawn in midwinter and signals the Māori New Year. Since **2022** a public holiday marks it [S27].
  - Traditions include remembering those who died in the past year, celebrating the harvest, and reading the stars to predict the season [S27].
  - Some iwi, including **Ngāi Tahu, look to Puaka (Rigel)** to mark the new year, partly because Matariki is hard to see clearly in the south [S27].
  - Accounts of the number of stars vary. Prof. Rangi Matamua's nine named stars include **Pōhutukawa** (those who have died), **Tupuānuku** (food from the ground), **Waitī** (fresh water) and **Hiwa-i-te-rangi** (the wishing star) [S27][S28].
  - The cluster is about **440 light-years** away, a measured distance [S29]. 📜 God made the stars (Genesis 1:16) and knows each one by name (Psalm 147:4).
  - 🔬 **Side note — what many scientists believe:** many astronomers estimate the cluster is about **100 million years old** [S29] (see §4.6).
- **Int:** *Matariki & Puaka Finder* (§12 #23): a winter dawn sky over Mt Hutt; find Orion and Puaka, then Matariki. Includes an "In Hakatere" note checked with Arowhenua (D3).
- **Paths:** A *Star card set* (9 stars + Puaka) · B *Sky map model* · C *Matariki/Puaka explainer* for juniors.
- **Lens 📜 Mōhio:** **Job 38:31** (*"Can you bind the chains of the Pleiades? Can you loosen Orion's belt?"*), **Amos 5:8** (*"He who made the Pleiades and Orion"*), and **Psalm 147:4** (*"He determines the number of the stars and calls them each by name"*). ❓ "Māori named these stars and read meaning in them. The Bible says God knows every star by name. What do both tell us about how people have always looked up?" (Respectful framing, §4.5.)
- **Clue:** "How many stars of Matariki does Professor Matamua name?" → 9.

**THU · Technology — Scratch 1: Algorithms & Sequence (Drive the Tractor)**
- **LI:** give, follow and debug simple algorithms, and build a simple program in Scratch (DT-CT PO2 [S35]). **SC:** write an algorithm in plain steps; turn it into a Scratch sequence; find and fix a bug.
- **Key knowledge 🟢:** Scratch is a free block-based language made by the MIT Media Lab's Lifelong Kindergarten group, designed for ages 8–16 [S36].
- **Int:** *Block Sim* (§12 #35): an in-app block runner (move, turn, wait) that drives a tractor sprite around a paddock grid. Works with no student devices. *(Note: use our own tractor sprite. Do not draw or reuse the Scratch Cat mascot in the app; see §17.)*
- **Paths:** A *Unplugged algorithm* (classmate as the "tractor") · B *Scratch build* on devices (or Block Sim) · C *Bug hunter* (fix 3 broken programs).
- **Lens 🤲:** 1 Corinthians 14:40 (*"everything done in a fitting and orderly way"*).
- **Clue:** "A tractor needs 'move 10 steps' four times to cross the paddock. Total steps?" → 40.

**FRI · Art — Ngāi Tahu Rock Art: Learning About, Not Copying**
- **LI:** understand Ngāi Tahu rock art in its context and create our own place-symbols with earth pigments. **SC:** explain what rock art is, where it is, and why it is taonga; explain why we don't copy it; create original symbols for my own place.
- **Key knowledge 🟢** [S38]:
  - Ngāi Tahu rock art is found mostly in limestone shelters in **South Canterbury and North Otago**. It was drawn or painted with paint made from animal or bird fat and plant gum, mixed with **soot or kōkōwai (red ochre)**.
  - It records tribal history, ara tawhito and mahinga kai.
  - It is fragile, and **Te Ana Ngāi Tahu Māori Rock Art Centre** in Timaru cares for it on behalf of Ngāi Tahu.
  - The Arowhenua narrative notes weka oil was used as a pigment ingredient [S1].
- **Ethic:** we **do not copy** rock-art figures. We learn about them, then create our own symbols about our own families and places (🌿 TIKANGA note; check with your Māori lead, D3).
- **Int:** *Rock Art Context* virtual visit (images only as shared publicly by Te Ana / Ngāi Tahu, with credit).
- **Paths:** A *Context report* · B *Earth-pigment place symbols* (craft ochre and charcoal, not material from any site) · C *Guide talk* on caring for taonga.
- **SURVEY SEAL VI:** 6 + 6 + 9 + 40 = **61** → **061°**. *(Same as Week 3: the app shows "The surveyor came back to the same bearing. Why?")* Sheet VI: the town grid on a treeless plain (🟡).

### WEEK 7 — MAP SHEET VII · THE RACE
**MON · History — Water on the Plains: The Rangitata Diversion Race**
- **LI:** explain how water was brought to the plains and why. **SC:** explain stock-water races and irrigation; explain why the RDR was built in the Depression; weigh the benefits and costs.
- **Key knowledge 🟢:**
  - Work on the **Rangitata Diversion Race** began on **2 April 1937** at Klondyke. The race (about **67 km**) was completed in **1944**, and **Highbank Power Station** first generated on **8 June 1945** [S13].
  - The Depression was the catalyst: over **400** jobs were created, and a sizeable group of workers came from **Arowhenua** [S13].
  - It irrigates about **66,000 ha** [S13]. Border-dyke flood irrigation was common before spray irrigation [S15].
- **Int:** *Water Race Engineer* (§12 #8): route water across the plains; siphon under a hill.
- **Paths:** A *News report 1945* · B *Model of a race with a siphon* · C *Worker's story* role-play.
- **Lens 🤲:** Isaiah 41:18 (*"I will turn the desert into pools of water"*).
- **Clue:** "Highbank first made power in 1945, and work began in 1937. How many years?" → 8.

**TUE · Geography — People & Mountains: Stations, Ski Fields & Parks**
- **LI:** explain how people use and care for mountain places. **SC:** describe 3 human uses of mountains; explain economic and environmental effects; suggest how to balance them.
- **Key knowledge 🟢:**
  - **Mt Hutt ski field opened in 1973** (founded by Willie Huber) and employs about 300 people in its season [S23]. It helped reverse Methven's decline [S4].
  - Hakatere Conservation Park protects nearly 60,000 ha [S11b], and the Hakatere heritage buildings are a Tohu Whenua site [S12].
- **Int:** *Mountain Uses* map (farming, tourism, conservation, power).
- **Paths:** A *Report* · B *Land-use map* · C *Council meeting* role-play.
- **Lens 🤲:** Psalm 24:1.
- **Clue:** "Mt Hutt opened in 1973. Add the digits (1+9+7+3)." → 20.

**WED · Science — Life of a Star**
- **LI:** describe how stars form, shine and change over their lives. **SC:** describe a nebula, main-sequence star and giant; explain star colour and temperature; compare Puaka (Rigel) and the Sun.
- **Key knowledge:** 📜 main: God made the stars and sustains them (Genesis 1:16; Isaiah 40:26). Star colour and temperature (blue = hotter, red = cooler) are observations taught normally. 🔬 Side note: what many scientists believe about how stars form and change over millions to billions of years (§4.6). 🔎 All to be sourced from NASA/ESA at build (star colours; Rigel a blue supergiant).
- **Int:** *Star Life* slider.
- **Paths:** A *Life-cycle diagram* · B *Star-colour model* · C *"Life of a star" story*.
- **Lens 📜:** Isaiah 40:26 (*"Lift up your eyes… who created all these?… He calls forth each of them by name"*).
- **Clue:** "Hotter stars look which colour: red (1) or blue (2)?" → 2.

**THU · Technology — Scratch 2: Loops (The Irrigator Circle)**
- **LI:** use loops to make efficient programs. **SC:** spot repeated steps; replace them with a repeat loop; debug a loop.
- **Int:** *Block Sim* draws a pivot circle with `repeat 36 [move, turn 10]`.
- **Paths:** A *Loop hunt* in algorithms · B *Scratch pivot animation* · C *Teach-back*.
- **Clue:** "To turn a full circle in steps of 10°, how many repeats?" → 36.

**FRI · Art — Matariki Printmaking**
- **LI:** make a relief print inspired by the winter night sky. **SC:** design a print showing stars and land; carve/press a foam plate; print cleanly.
- **Paths:** A *Design studies* · B *Foam-plate print series* · C *Print-making demo*.
- **SURVEY SEAL VII:** 8 + 20 + 2 + 36 = **66** → **066°**. Sheet VII is missing! **Dealer:** *"I have Sheet VII. Trade me the field book for it."*

### WEEK 8 — MAP SHEET VIII · THE FLOOD
**MON · History — May 2021: The Hakatere Flood & Recovery (+ Tarawera 1886)**
- **LI:** explain a natural event in our district's history and how the community recovered (Y5: a case study of a natural disaster). **SC:** describe what happened in May 2021; explain the response and recovery; compare with Mt Tarawera (1886).
- **Key knowledge 🟢:**
  - Heavy rain from **28–31 May 2021** caused major flooding and a regional state of emergency [S3].
  - The river's flow at Ashburton rose from about **6 m³/s** to more than **1,500 m³/s** [S3].
  - About **4,000** residents might have needed to evacuate if stopbanks failed [S3].
  - The **State Highway 1 bridge** was closed after engineers found a large crack [S18]. The district council ran a flood-recovery programme [S17].
  - 🔎 The Tarawera comparison facts to be sourced at build (Te Ara).
- **Int:** *Flood Hydrograph* (§12 #9): watch the river's flow climb hour by hour; stopbank stress meter.
- **Paths:** A *Recovery timeline* · B *Stopbank model test* · C *Oral history* (interview someone who remembers it, with care).
- **Sensitivity ⚠️:** some families were affected. Give a calm warning, an opt-out, and a focus on helpers.
- **Lens ❤️:** Matthew 7:24–27 (the wise builder) and Isaiah 43:2 (*"When you pass through the waters, I will be with you"*).
- **Clue:** "The flood started on 28 May. What date did the heavy rain end (31 May)? How many days, counting both?" → 4.

**TUE · Geography — Mountains of Southeast Asia: Kinabalu**
- **LI:** compare a Southeast Asian mountain with the Southern Alps (Y6 SE Asia case study, part). **SC:** locate SE Asia's countries; describe Kinabalu's environment; compare with our mountains.
- **Key knowledge:** 🔎 Kinabalu height (~4,095 m) and UNESCO status to be sourced at build.
- **Int:** *Mountain Compare* (side-by-side profiles).
- **Paths:** A *Comparison chart* · B *Profile model* · C *Travel show*.
- **Lens ❤️:** Revelation 7:9 (every nation).
- **Clue:** "How many countries in the SE Asia region (as the curriculum counts them)?" → 11 [S34].

**WED · Science — Our Galaxy: The Milky Way & Beyond**
- **LI:** explain that the Sun is part of the Milky Way and that galaxies exist beyond it. **SC:** describe the Milky Way; explain what a galaxy is; identify galaxies visible from NZ.
- **Key knowledge 🟢:** the Sun is part of the Milky Way, and some night-sky objects are distant galaxies [S32]. 🔎 Te reo name for the Milky Way and Magellanic Clouds facts to be sourced at build.
- **Int:** *Zoom Out* (from the school roof to the galaxy).
- **Paths:** A *"My cosmic address"* · B *Galaxy spiral model* · C *Planetarium guide talk*.
- **Lens 📜:** Psalm 8:3–4 (*"When I consider your heavens… what is mankind that you are mindful of them?"*).
- **Clue:** "How many arms does your class galaxy model have? (Teacher sets 2.)" → 2.

**THU · Technology — Scratch 3: Events & Decisions (The Smart Irrigator)**
- **LI:** use events and if/else decisions. **SC:** trigger code with an event; write an if/else; test both branches.
- **Int:** *Block Sim*: `if soil < 30 then water else wait`.
- **Paths:** A *Flowchart* · B *Scratch smart irrigator* · C *Test plan*.
- **Clue:** "An if/else has how many possible paths?" → 2.

**FRI · Art — Patchwork Plains: Aerial Collage**
- **Paths:** A *Colour study* · B *Paddock collage* · C *Peer critique*.
- **SURVEY SEAL VIII:** 4 + 11 + 2 + 2 = **19** → **019°**. The Dealer returns Sheet VII, water-damaged (🟡).

### WEEK 9 — MAP SHEET IX · MAKING IT RIGHT
**MON · History — Te Kerēme: The Ngāi Tahu Claim & the 1998 Settlement**
- **LI:** explain how Ngāi Tahu sought justice over land and promises, and how the claim was settled. **SC:** describe the claim and why it lasted so long; explain the 1998 settlement and apology; explain what restoring relationships can look like locally.
- **Key knowledge 🟢:**
  - **Matiaha Tiramōrehu's** letter (1849) is described by Ngāi Tahu as the first formal statement of Ngāi Tahu grievances against the Crown [S9].
  - Ngāi Tahu pursued **Te Kerēme** (the claim) for generations [S10].
  - The **Ngāi Tahu Claims Settlement Act 1998** records the Crown's apology and settlement [S8].
  - Locally: the Rakaia and Ashburton Māori Reserves were allocated to Kaiapoi Kāi Tahu in **1877**, and **Hakatere Marae** was established in **1970** in the former Fairton school building [S1].
- **Int:** *A Claim Through Time* (§12 #5b): a timeline from 1848 to 1998.
- **Paths:** A *Letter to the past* · B *Timeline* · C *Panel discussion*.
- **Lens 🌱 Pānga:** Luke 19:1–10 (**Zacchaeus** pays back what he took) and Micah 6:8. ❓ "What does 'making it right' look like when the people who did wrong are long gone?"
- **Clue:** "From 1848 to 1998: how many years? (Divide by 10.)" → 15.

**TUE · Geography — Water From the Mountains: Snow, Ice & a Warming World**
- **LI:** explain how mountain snow and ice feed our rivers, and how a warming climate could change this (Y6 climate). **SC:** explain snowmelt and rivers; describe glacier change; suggest mitigation and adaptation.
- **Key knowledge:** the South Branch starts at the Ashburton Glacier [S3]. 🔎 NIWA glacier-change data to be sourced at build.
- **Paths:** A *Explanation* · B *Water-cycle model* · C *Adaptation pitch*.
- **Lens ❤️:** Genesis 2:15.
- **Clue:** "How many branches does the Hakatere have?" → 2.

**WED · Science — Finding Our Way by the Stars**
- **LI:** explain how people used stars to navigate and to plan the year (Y6). **SC:** find south using the Southern Cross; describe Polynesian wayfinding; explain how sky knowledge guided planting.
- **Key knowledge 🟢:** civilisations mapped the sky for planting, harvest and navigation (Y6) [S32]. 🔎 Southern Cross "find south" method and Te Ara waka navigation to be sourced at build.
- **Int:** *Find South* (§12 #24).
- **Paths:** A *Navigator's guide* · B *Star compass* · C *Wayfinder story*.
- **Lens 📜:** Matthew 2:9–10 (the Magi followed a star).
- **Clue:** "How many main stars in the Southern Cross?" → 4. 🔎 (Confirm: 4 main stars plus a fainter fifth.)

**THU · Technology — Scratch 4: Variables & Testing (Counting the Harvest)**
- **LI:** use variables to count and store data, and test a program systematically. **SC:** create and change a variable; display it; test with a test table.
- **Paths:** A *Test table* · B *Scratch harvest counter* · C *Bug-fix clinic*.
- **Clue:** "A bale counter starts at 0 and adds 1 each time. After 12 bales?" → 12.

**FRI · Art — My Place Triptych: Build Week**
- **Paths:** all students work on Land / River / Sky panels; A/B/C roles for the artist statement.
- **SURVEY SEAL IX:** 15 + 2 + 4 + 12 = **33** → **033°**. Sheet IX: the pencilled names restored, and the field book's last entry is an apology (🟡). **Dealer exposed.**

### WEEK 10 — MAP SHEET X · OUR PLACE
**MON · History — Hakatere Today: Many Families, One Place**
- **Key knowledge 🟢:** the Ashburton Museum's *Hakatere: Home and Heritage* exhibition featured **sixteen local families** and their stories and cultures [S40]. Students present Big Project museum cases.
- **Lens ✨:** Revelation 7:9.
**TUE · Geography — Kaitiaki of the Mountains: Our Campaign**
- **Key knowledge 🟢:** braided-river birds need space from **1 September to 1 February** [S24]. Students launch a campaign (Y6 civics).
**WED · Science — Seeing Further: Telescopes, Dark Skies & the Sky Expo** — Mt John Observatory and the dark-sky reserve [S30]; students present Sky Watcher's Journals.
**THU · Technology — Smart Farm Showcase** — test, evaluate against the brief, present.
**FRI · Art — Our Place Exhibition** — triptychs, museum cases, field guides, Smart Farms, Sky Journals.
**FINAL SEAL X:** the whole map reassembles; the class votes on the map's future (🟡). The answer: it belongs to the community, with both names honoured.

---

# 10. APP DESIGN — "Braided Land, Starlit Sky"

## 10.1 Art direction
The same **layered cut-paper** craft as The Fifth Codex, but made from the materials of Hakatere: **shingle, tussock, glacier ice, river water, wool, survey paper and night sky.** It should feel like a beautifully made museum exhibition crossed with a surveyor's field book. Not childish, not "farm cartoon".

- **Paper layers:** mountain ranges cut from 4–6 tinted papers (atmospheric depth), with soft shadows between layers. The Alps are always on the horizon.
- **Braided-river lines:** the signature motif. Fine silver-blue threads that split and rejoin, used as dividers, progress bars, transitions and the calm screen.
- **Survey-map texture:** cream field-book paper with a faint grid, contour lines, red trig triangles ▲, pencilled annotations and ink stamps.
- **Night mode for Science (Wednesday):** deep indigo layered paper, with stars as tiny punched holes letting light through (paper-lantern effect).
- **Farm geometry for Technology (Thursday):** the patchwork of paddocks seen from the air, with pivot circles.
- **Light & weather:** the nor'west arch as a recurring sky band; golden late-afternoon light on tussock.
- **Respect rule:** no Māori designs (kōwhaiwhai, tukutuku patterns, rock-art figures, carving) used as decoration. Māori visual culture appears only as **content**, credited and approved (§17).

## 10.2 Colour system (CSS tokens)
| Token | Hex | Use |
|---|---|---|
| `--survey-paper` | `#F3ECDD` | Page and card background (field-book cream) |
| `--ink` | `#1F2A30` | Body text (blue-black surveyor's ink) |
| `--greywacke` | `#4B5357` | Dark UI, mountain shadows |
| `--shingle` | `#A7A59C` | Riverbed grey, borders |
| `--glacier` | `#BFE0EA` | Highlights, ice, snow shadows |
| `--river` | `#3D8DB3` | Links, braided-river lines, Geography accent |
| `--tussock` | `#C9A04A` | Warm accent, points, Art accent |
| `--wheat` | `#E6C873` | Sheaves, Achieved badge |
| `--paddock` | `#5E7F3A` | Technology accent, "go" states |
| `--nightsky` | `#121A36` | Science background |
| `--starlight` | `#F6EBC8` | Stars, Science text on dark |
| `--trig-red` | `#B4412F` | Trig triangles, warnings, History accent |
| `--norwest` | `#EADBB8` | Arch-cloud cream, soft panels |

**Subject colours:** History = trig red `#B4412F` · Geography = river blue `#3D8DB3` · Science = night indigo `#2F3D7A` (on `--nightsky`) · Technology = paddock green `#5E7F3A` · Art = tussock gold `#C08A2E`.
All text/background pairs must meet WCAG AA contrast (checked in the build).

## 10.3 Typography (large, legible from the back row)
- **Display:** *Fraunces* (already self-hosted in The Fifth Codex): warm, bookish, museum-like.
- **Labels & data:** *Barlow Condensed* (OFL, self-hosted), which feels like map labelling and survey stamps. Alternative: keep *Big Shoulders Display* for consistency.
- **Body:** *Atkinson Hyperlegible* (accessibility).
- Macrons must render correctly in all three fonts (ā, ē, ī, ō, ū) — test before choosing.
- Minimum 28 px body on slides; 64 px+ titles.

## 10.4 Motion principles
- **Unfold, don't fly:** map sheets unfold along their creases; layers slide gently apart (parallax).
- **Braids flow:** river lines animate slowly (calm, never busy).
- **Stars breathe:** a gentle twinkle, never strobing (photosensitivity safe).
- **Theodolite:** the Survey Seal dial turns with a satisfying click per degree.
- `prefers-reduced-motion` respected everywhere.

## 10.5 Sound (optional, off by default)
Wind over tussock, river on stones, paper unfolding, a theodolite click, a soft bell when a seal opens. No bird calls used decoratively unless properly licensed.

## 10.6 Procedural-first rule
As in The Fifth Codex: mountains, rivers, contours, star fields, gears and paddocks are **drawn in code** (SVG/canvas), so the app works offline and stays light. ChatGPT images (§15) are used for characters, heroes, banners and artefacts only.

---

# 11. APP ARCHITECTURE

## 11.1 Tech stack
**Reuse The Fifth Codex engine** (static HTML + vanilla JS, classic scripts, runs from `file://`, hash router, 1920×1080 stage, presenter mode, PDF docs, Quick-Mark, the sources system). Rename the namespace (e.g. `BM` for "Braided Map") and re-theme. No build step, no server, no student logins.

## 11.2 Screens
Home (term map from river mouth to mountains, with the pin showing progress) · Week page (5 day cards, hero, story, Hononga, **Sources & further reading**, **All Path Cards this week**) · Lesson page (overview, plan, rubric, **sources panel**, **Path Cards A · B · C** with a print button per path) · Presenter (slides with **vocabulary pop-ups** + notes + toolbar: timer, picker, sheaves, calm screen, "Say it right"; 🖨 Path cards button on the Choose Your Path slide) · Documents (Lesson Plan, Rubric T/S, **Path Cards**, Week Pack, Unit Plan with the **Where the content comes from** page and term bibliography) · Settings (school, class, teacher, teams, class list on device).

## 11.3 Folder structure
```
hakatere/
  index.html
  README.md
  Hakatere_App_Blueprint.md      ← this file
  css/  tokens.css fonts.css app.css slides.css print.css
  js/   util.js art.js map.js glossary.js interactives.js ix-week02.js … slides.js presenter.js docs.js app.js
  data/ term.js week01.js … week10.js sources.js glossary.js
  assets/ fonts/ img/ (webp)
```

## 11.4 Data schema
Identical lesson schema to The Fifth Codex (`id, week, day, subject, title, guide, codes, coverage, li, sc, vocab, prep, safety, hononga, paths, lens, clue, rubric, plan, slides`). Renamed fields: `clue` → **Trig Clue**, `seal` → **Survey Seal** (`{answer: bearing, instruction, reveal, art}`). New optional field: `tikanga` (a list of 🌿 notes shown in presenter notes and on the plan). `data/sources.js` uses the same format, with a new source type **"Iwi / rūnaka"** ranked alongside Museum and Government.

## 11.5 Slide types
Reuse all of The Fifth Codex's types (transmission → **fieldnote**, glyphcheck → **trigcheck**, lisc, content, interactive, discussion, cards, paths, lens, decode → **trigclue**, exit, safety, brief, hononga, intercept → **dealer**, folioseal → **surveyseal**). New: **sayitright** (place-name pronunciation card), **thenNow** (photo comparison slider), **skyview** (full-screen night sky).

---

# 12. INTERACTIVE SLIDE LIBRARY (all teacher-run)

| # | Interactive | Subject / week | What it teaches |
|---|---|---|---|
| 1 | **Chest & Field Book opening** | All, W1 | Story hook; sheets unfolding |
| 2 | **Name Layers map** | Hist W1 | Peel English names back to older names |
| 3 | **Seasonal Round wheel** | Hist W2 | Mahika kai through the year (content approved by rūnaka) |
| 4 | **Trail Planner** | Hist W3 | Route-finding by water, food, shelter |
| 5 | **Promises vs Reality** | Hist W4 | Promised vs surveyed reserves |
| 5b | **A Claim Through Time** | Hist W9 | 1848 → 1998 timeline |
| 6 | **A Day on the Run** | Hist W5 | Station life by role |
| 7 | **Town Grows** | Hist W6 | Time slider builds Ashburton |
| 8 | **Water Race Engineer** | Hist W7 | Gradients, siphons, the RDR |
| 9 | **Flood Hydrograph** | Hist W8 | Flow rising to >1,500 m³/s; stopbank stress |
| 10 | **Source to Sea flyover** | Geo W1 | River journey |
| 11 | **Contour Builder** | Geo W1 | Layers ↔ contour map ↔ cross-section |
| 12 | **Plate Push** | Geo W2 | Uplift vs erosion, mm/yr |
| 13 | **Braid Maker** | Geo W4 | How braided channels form and shift |
| 14 | **Rain Shadow** | Geo W5 | Föhn nor'wester; the arch forms |
| 15 | **Altitude Zones** | Geo W6 | Temperature, plants and animals by height |
| 16 | **Mountain Compare** | Geo W8 | Kinabalu vs the Alps |
| 20 | **Star or Planet?** | Sci W1 | Emit vs reflect |
| 21 | **Orbit & Tilt** | Sci W4 | Seasons; which stars are on the night side |
| 22 | **Moon Phase Machine** | Sci W5 | Phases from positions; maramataka link |
| 23 | **Matariki & Puaka Finder** | Sci W6 | Find Orion → Puaka → Matariki at dawn |
| 24 | **Find South** | Sci W9 | Southern Cross method |
| 25 | **Zoom Out** | Sci W8 | School → Earth → Solar System → Milky Way |
| 26 | **Light Pollution slider** | Sci W1/W10 | Dark skies |
| 30 | **Farm Machine Timeline** | Tech W1 | Order the inventions [S19] |
| 31 | **Lever Lab** | Tech W2 | Effort, load, fulcrum |
| 32 | **Gear Train** | Tech W3 | Teeth, ratio, speed vs force |
| 33 | **Pulley Lab** | Tech W4 | Direction and effort |
| 34 | **Pivot Planner** | Tech W5 | Arm length → area; corners problem |
| 35 | **Block Sim** (Scratch-style) | Tech W6–9 | Sequence, loops, events, if/else, variables, with a tractor sprite on a paddock grid |
| 40 | **Layered Landscape** | Art W1/W3 | Foreground/middle/background; atmospheric perspective |
| 41 | **Shape Finder** | Art W2 | Simplifying a landscape into shapes |
| 42 | **Aerial Braid generator** | Art W4 | Line and pattern from rivers |
| 43 | **Wet-on-Wet sky** | Art W5 | Watercolour blending simulation |
| 44 | **Print Studio** | Art W7 | Relief print: positive/negative |
| 45 | **Patchwork Plains** | Art W8 | Colour and shape collage |
| 50 | **Survey Seal theodolite** | Every Friday | Dial the bearing; the sheet unfolds |
| 51 | **Vocabulary pop-ups** | Every slide | Hover/tap an underlined word to see its meaning (§5.4) |
| 52 | **Path Cards** (printables) | Every lesson | Student handout per path with steps, info sources, word bank (§6.1) |
| 53 | **🔬 Side-note card** | Any slide with an age | The D8 "what many scientists believe" card, styled as a side note (§4.6) |

---

# 13. MACHINES & CODING KIT

## 13.1 Two tracks (every Tech lesson runs on either)
- **Hands-on track (W1–5):** card, split pins, skewers, cotton reels, string, bottle caps, paper cups, straws, rubber bands, printed gear templates on card. No power tools. Teacher-only craft knife.
- **Coding track (W6–9):** **Scratch** in the browser if devices exist [S36]. If not: **unplugged** algorithms (students as robots/tractors) + the in-app **Block Sim** (#35) run by the teacher with student instructions.

## 13.2 Safety (on every Thu plan)
Scissors rules; skewer points blunted or capped; elastic bands used carefully; no sockets or mains devices; tidy-up routine.

## 13.3 Optional local partner
Invite a farmer or machinery dealer to bring a tractor or show a pivot (with school health & safety approval). Invite an irrigation-scheme educator for Week 7 History.

---

# 14. PREP, RESOURCES & TRIPS

## 14.1 Term kit (buy once)
- **Every lesson:** Field Journal per student (sketchbook or exercise book) · mini-whiteboards.
- **Science:** torches · polystyrene or foam balls (Sun/Earth/Moon models) · paper plates · split pins · printed planisphere (free templates) · optional binoculars · Stellarium (free planetarium software) for the teacher.
- **Technology:** card, split pins, skewers, cotton reels, string, bottle caps, rubber bands, glue guns (teacher) · gear templates · devices for Scratch (optional).
- **Art:** A3 cartridge paper · B/2B pencils · charcoal · tinted papers (5 shades blue-grey) · watercolours & brushes · oil pastels · craft ochre/earth pigments (purchased, never taken from any site) · foam printing sheets, brayers, block ink · collage paper · A2 card for triptych.

## 14.2 Weekly prep
Each lesson card lists ⏱️ prep. Target: ≤ 10 min per lesson; ≤ 20 min for builds.

## 14.3 Local visits & partners (optional, see D14)
| Place | Links to | Notes |
|---|---|---|
| **Ashburton Museum** [S39] | History all term; Exhibition | Ask about education programmes and the archives. |
| **Hakatere Station heritage buildings / Ōtūwharekai** [S11][S12] | Hist W5, Geo W6–7 | Tohu Whenua site with an information room open daily [S11]. About an hour inland. |
| **Hakatere Marae** | Hist W2–3, W9 | **By invitation only**, arranged through the school's Māori lead and the marae (D3). |
| **Plains Vintage Railway & Historical Museum** [S4] | Hist W6 | Victorian/Edwardian transport. |
| **Ashburton Art Gallery** [S44] | Art | Local and regional artists. |
| **A local farm** | Tech W1–5 | Machinery and pivots, with H&S approval. |
| **Dark-sky evening at school** | Sci W6/W10 | Whānau stargazing night; telescope club volunteers. |

---

# 15. CHATGPT IMAGE PROMPTS

## 15.1 Style lock (paste before every prompt)
> *Layered cut-paper illustration, 5–7 paper layers with soft drop shadows between them, subtle paper grain and torn edges, Canterbury high-country light (clear, crisp, golden), muted natural palette of shingle grey, tussock gold, glacier blue, river blue-green and cream, with deep indigo for night scenes. Elegant museum-exhibition quality, not cartoonish, no text, no logos, no brand marks.*

## 15.2 Image list (webp, same naming scheme as The Fifth Codex)
**Characters (5):** `char-nell` (archivist with cotton gloves and a magnifier, field book open) · `char-sam` (ranger in a wool swanni with a heading dog, tussock behind) · `char-priya` (astronomer under a dark sky with a small telescope) · `char-liv` (agri-engineer in overalls with a tablet, pivot irrigator behind) · `char-tom` (older landscape painter at an easel on a gravel road). **Plus** `char-dealer` (only a gloved hand, a magnifying loupe and a stack of old maps — never a face).
**Heroes (10, one per week):** `hero-w01` tin chest in river gravel at dawn with a stopbank · `hero-w02` river camp at dusk beside a braided river (generic, no specific iwi imagery; check D3) · `hero-w03` a lone tree on a wide plain with distant mountains · `hero-w04` an 1840s writing desk with a quill and a map, ocean light (no real people) · `hero-w05` a high-country stone cottage with merino sheep and mountains · `hero-w06` an 1870s wide main street on a treeless plain with a steam train · `hero-w07` a water race cutting straight across golden plains · `hero-w08` a swollen braided river under heavy grey sky, stopbank in foreground · `hero-w09` a restored map with two sets of names and gentle morning light · `hero-w10` a community exhibition hall with families looking at maps and art.
**Banners (5):** history (survey paper + trig triangles), geography (layered Alps + braids), science (Matariki over mountains at dawn), technology (aerial paddocks + pivot circles), art (easel in tussock).
**Artefacts (~12):** theodolite · surveyor's field book · tin chest · merino fleece · hay bale with hoist · gear set · centre-pivot span · stone cottage doorway · river stones (greywacke) · star chart · foam print block · watercolour palette.
**Do not generate:** real people (living or historical), Māori ancestors or tūpuna, carvings, kōwhaiwhai, rock-art figures, marae buildings, the Scratch Cat, any brand logos or real company machinery badges.

---

# 16. BUILD PLAN

| Phase | What | Review point |
|---|---|---|
| **0** | You answer §0 decisions; contact Arowhenua/Māori lead (D3) | ✅ Decisions confirmed |
| **1** | Copy The Fifth Codex engine → `hakatere` (includes vocabulary pop-ups, Path Cards, sources system and auto-paginating PDFs), re-theme (tokens, fonts, art, motifs), new slide types, theodolite seal, 🔬 side-note card, Block Sim, Hakatere glossary | ✅ Look & feel approved (Week 1 sample slides) |
| **2** | Build **Week 1** fully (5 lessons, plans, rubrics, sources page) | ✅ Week 1 approved |
| **3** | Weeks 2–10, two at a time, each with sources; 🔎 items sourced before they go on slides | ✅ Each pair reviewed |
| **4** | Images added in 3 batches (§15) | ✅ |
| **5** | Unit Plan + term bibliography; full Playwright test of every slide and interactive; PDF pagination check | ✅ Final |

**Quality checks every phase:** NZ English and macrons · every fact sourced (or removed) · contrast AA · reduced-motion · no overflow on 1920×1080 · PDFs paginate to A4 · works from `file://` offline.

---

# 17. ACCURACY, TIKANGA & SENSITIVITY GUARDRAILS

1. **Sources or it doesn't go in.** Every factual slide carries a source in `data/sources.js`. 🔎 items are verified or removed. Wikipedia is never the only source.
2. **Mana whenua first.** Ngāi Tahu history is taught from Ngāi Tahu sources (the Arowhenua narrative [S1], the district plan's tākata whenua values [S2], Ngāi Tahu's own stories [S9]) and checked with Te Rūnanga o Arowhenua (D3). Where accounts differ, say so ("Accounts vary…").
3. **No fictional Māori authority.** Story characters never deliver tikanga or iwi history (D5).
4. **No copying taonga.** No rock-art figures, kōwhaiwhai, tukutuku or carving patterns copied or used as decoration. Students learn *about* them and make *their own* symbols.
5. **Matariki & Puaka.** Present Puaka as the marker many southern iwi, including Ngāi Tahu, use [S27]. Credit Prof. Rangi Matamua for the nine-star account and note that accounts vary [S27][S28].
6. **Kemp's Deed and Te Kerēme.** Honest, age-appropriate, two perspectives; no blame on children or families; focus on truth-telling and restoration (Micah 6:8; Luke 19). The 1998 apology and settlement are part of the story [S8].
7. **The 2021 flood.** Calm warning, opt-out, and a focus on helpers and recovery. Ask before using any family's flood photos.
8. **Farming debates.** Irrigation, dairying and river health are real community debates. Present more than one view fairly. No villains.
9. **Ages and origins (D8, §4.6).** Young earth under God's creation is the main teaching. Mainstream ages appear only in a labelled 🔬 side note, stated accurately and fairly with a source. Measurements (distances, heights, rates) are taught as normal science. No mocking of any view, and rubrics never grade which view a student holds.
10. **Te reo Māori.** Correct macrons; local Kāi Tahu dialect forms where appropriate (D4); pronunciation practised; no te reo used as decoration.
11. **Copyright.** No Scratch Cat or other mascots drawn; Rita Angus's *Cass* shown via the gallery's own page or as a described/simplified study, not reproduced in the app unless permission allows; credit all images.
12. **Real people.** Historical figures appear only as history with sources. No invented quotes for real people.

---

# 18. SOURCES

*Checked October 2026. Type labels match the app's sources system. 🔎 = to be added during the build.*

| # | Source | Publisher | Type | Web address |
|---|---|---|---|---|
| S1 | Tākata Whenua o Hakatere: People of the Mountains, Rivers, Land & Sea (curated by Tewera King, Upoko of Te Rūnanga o Arowhenua) | Ashburton College / Te Rūnanga o Arowhenua | Iwi / rūnaka | https://www.ashburtoncollege.school.nz/wp-content/uploads/2025/11/Cultural_Narrative_-_Takata_Whenua_O_Hakatere-2.pdf |
| S2 | District Plan Section 2: Takata Whenua Values | Ashburton District Council | Government / official | https://www.ashburtondc.govt.nz/__data/assets/pdf_file/0010/5041/02-Takata-Whenua-Values.pdf |
| S3 | Ashburton River / Hakatere | Wikipedia (starting point only) | Wikipedia | https://en.wikipedia.org/wiki/Ashburton_River_/_Hakatere |
| S4 | Canterbury places: Mid-Canterbury (page 17) | Te Ara — Encyclopedia of New Zealand | Encyclopaedia | https://teara.govt.nz/en/canterbury-places/page-17 |
| S5 | Ashburton (1966 Encyclopaedia of New Zealand) | Te Ara | Encyclopaedia | https://teara.govt.nz/en/1966/ashburton |
| S6 | Kemp's Purchase | Christchurch City Libraries | Government / official (library) | https://my.christchurchcitylibraries.com/kemps-purchase/ |
| S7 | Kemp's Deed | Wikipedia (starting point only) | Wikipedia | https://en.wikipedia.org/wiki/Kemp%27s_Deed |
| S8 | Ngāi Tahu Claims Settlement Act 1998 | NZ Legislation | Government / official | https://legislation.govt.nz/act/public/1998/97/en/latest/ |
| S9 | Matiaha Tiramōrehu: the first formal statement of Ngāi Tahu grievances against the Crown | Te Rūnanga o Ngāi Tahu | Iwi / rūnaka | https://ngaitahu.iwi.nz/our_stories/matiaha-tiramorehu-the-first-formal-statement-of-ngai-tahu-grievances-against-the-crown |
| S10 | Te Kerēme — Ngāi Tahu land claim | Christchurch City Libraries | Government / official (library) | https://my.christchurchcitylibraries.com/te-kereme-ngai-tahu-land-claim/ |
| S11 | Hakatere Station buildings / Ōtūwharekai: Hakatere heritage | Department of Conservation | Government / official | https://www.doc.govt.nz/parks-and-recreation/places-to-go/canterbury/places/hakatere-conservation-park/heritage-sites/otuwharekai-hakatere-heritage/ |
| S11b | Hakatere Station, Ashburton Lakes (Hakatere Conservation Park) | Department of Conservation | Government / official | https://www.doc.govt.nz/parks-and-recreation/places-to-go/canterbury/places/hakatere-conservation-park/heritage-sites/hakatere-station-buildings/ |
| S12 | Ōtūwharekai: Hakatere heritage (Tohu Whenua site) | Tohu Whenua (Heritage NZ, DOC, MBIE) | Government / official | https://tohuwhenua.nz/regions/waitaha-canterbury/otuwharekai-hakatere-heritage/ |
| S13 | Our History — Rangitata Diversion Race | Rangitata Diversion Race Management Ltd | Organisation | https://www.rdrml.co.nz/our-history/ |
| S14 | Rangitata Diversion Race | Wikipedia (starting point only) | Wikipedia | https://en.wikipedia.org/wiki/Rangitata_Diversion_Race |
| S15 | Water — The Life Blood of the Plains (Ashburton's treasures) | Living Heritage (school-written; cross-check figures) | Other website (cross-check) | https://www.livingheritage.org.nz/Schools-Stories/Ashburton-s-treasures/Water-The-Life-Blood-of-the-Plains |
| S16 | Irrigated farm area in the Ashburton District (Stats NZ Agricultural Production Census 2022) | Figure.NZ / Stats NZ | Government / official (data) | https://figure.nz/chart/NseW81TBujeqht2A-sIW76LprKZZaqo3s |
| S17 | Flood recovery | Ashburton District Council | Government / official | https://www.ashburtondc.govt.nz/ashburton-district/flood-recovery |
| S18 | Canterbury floods: no quick fix for damaged Ashburton Bridge (31 May 2021) | 1News | News | https://www.1news.co.nz/2021/05/31/canterbury-floods-no-quick-fix-in-line-for-damaged-ashburton-bridge-after-engineers-find-massive-crack |
| S19 | Farm mechanisation (James Watson) | Te Ara | Encyclopaedia | https://teara.govt.nz/en/farm-mechanisation/print |
| S20 | Mountains: how the Southern Alps formed (page 3) | Te Ara | Encyclopaedia | https://teara.govt.nz/en/mountains/page-3 |
| S21 | Mount Somers / Te Kiekie | Wikipedia (starting point only) | Wikipedia | https://en.wikipedia.org/wiki/Mount_Somers_/_Te_Kiekie |
| S22 | Mount Hutt | Wikipedia (starting point only) | Wikipedia | https://en.wikipedia.org/wiki/Mount_Hutt |
| S23 | Mt Hutt marks 40 years | RNZ | News | https://www.rnz.co.nz/news/national/216085/mt-hutt-marks-40-years |
| S24 | Give nesting river birds space this summer (2024) | Department of Conservation | Government / official | https://www.doc.govt.nz/news/media-releases/2024-media-releases/give-nesting-river-birds-space-this-summer/ |
| S25 | The Northwest Arch | MetService | Government / official | https://about.metservice.com/learning/the-northwest-arch |
| S26 | Canterbury region: climate (page 4) | Te Ara | Encyclopaedia | https://teara.govt.nz/en/canterbury-region/page-4 |
| S27 | Matariki — Māori New Year (Paul Meredith) | Te Ara | Encyclopaedia | https://teara.govt.nz/en/matariki-maori-new-year/print |
| S28 | The 9 whetū (stars) of Matariki | Auckland University of Technology | University / academic | https://www.aut.ac.nz/about/maori/matariki/the-9-whetu-stars-of-matariki |
| S29 | How far are the Pleiades, really? | Center for Astrophysics, Harvard & Smithsonian | University / academic | https://www.cfa.harvard.edu/news/how-far-are-pleiades-really |
| S30 | Mount John University Observatory (Aoraki Mackenzie Dark Sky Reserve) | Wikipedia (starting point only) — 🔎 add University of Canterbury page | Wikipedia | https://en.wikipedia.org/wiki/Mount_John_University_Observatory |
| S31 | Science in Year 5 | NZ Ministry of Education | Government / official | https://www.education.govt.nz/parents-and-caregivers/schools-year-0-13/parent-portal/guide-for-the-new-zealand-curriculum-years-0-to-8/year-5-new-zealand-curriculum/science-in-year-5 |
| S32 | Science in Year 6 | NZ Ministry of Education | Government / official | https://www.education.govt.nz/parents-and-caregivers/schools-year-0-13/parent-portal/guide-for-the-new-zealand-curriculum-years-0-to-8/year-6-new-zealand-curriculum/science-in-year-6 |
| S33 | Social Sciences in Year 5 | NZ Ministry of Education | Government / official | https://www.education.govt.nz/parents-and-caregivers/schools-year-0-13/parent-portal/guide-for-the-new-zealand-curriculum-years-0-to-8/year-5-new-zealand-curriculum/social-sciences-in-year-5 |
| S34 | Social Sciences in Year 6 | NZ Ministry of Education | Government / official | https://www.education.govt.nz/parents-and-caregivers/schools-year-0-13/parent-portal/guide-for-the-new-zealand-curriculum-years-0-to-8/year-6-new-zealand-curriculum/social-sciences-in-year-6 |
| S35 | Computational thinking for digital technologies: Progress Outcome 2 | Technology Online (NZ Ministry of Education) | Government / official | https://technology.tki.org.nz/Technology-in-the-NZC/CTDT-Progress-outcomes-exemplars-and-snapshots/PO2 |
| S36 | About Scratch | MIT Media Lab — Scratch | University / academic | https://scratch.mit.edu/help/about/ |
| S37 | Rita Angus — Cass | Christchurch Art Gallery Te Puna o Waiwhetū | Museum | https://christchurchartgallery.org.nz/bulletin/204/rita-angus-cass |
| S38 | Te Ana Ngāi Tahu Māori Rock Art Centre | Tohu Whenua | Government / official | https://tohuwhenua.nz/regions/waitaha-canterbury/te-ana-ngai-tahu-maori-rock-art-centre/ |
| S39 | Ashburton Museum | Ashburton Museum | Museum | https://ashburtonmuseum.co.nz/ |
| S40 | Hakatere: Home and Heritage to be celebrated at museum | Ashburton District Council | Government / official | https://www.ashburtondc.govt.nz/latest-news-and-info/news-and-media-releases/museum/hakatere-home-and-heritage-to-be-celebrated-at-museum |
| S41 | First Four Ships (Canterbury Association) — 🔎 add a Te Ara or NZHistory page | Wikipedia (starting point only) | Wikipedia | https://en.wikipedia.org/wiki/First_Four_Ships |
| S42 | Technological practice | Technology Online (NZ Ministry of Education) | Government / official | https://technologyonline.tki.org.nz/Technology-in-the-NZC/Technological-practice |
| S43 | Science and Social Sciences released for Years 0–10 | NZ Ministry of Education | Government / official | https://www.education.govt.nz/news/science-and-social-sciences-released-years-0-10 |
| S44 | Ashburton Art Gallery | Ashburton Art Gallery | Museum | https://ashburtonartgallery.org.nz/ |
| S45 | Remote monitoring of traps (machines that sense and report) | Predator Free NZ Trust | Organisation | https://predatorfreenz.org/resources/recording-monitoring-options/remote-monitoring-traps/ |
| S46 | Matariki or Puanga? Why location matters (2024) | 1News | News | https://www.1news.co.nz/2024/06/26/matariki-or-puanga-why-location-matters-when-marking-the-maori-new-year |
| S47 | Canterbury region: Māori settlement (page 6) | Te Ara | Encyclopaedia | https://teara.govt.nz/en/canterbury-region/page-6 |
| S48 | Mechanical advantage | Encyclopaedia Britannica | Encyclopaedia | https://www.britannica.com/print/article/371823 |
| S49 | Maramataka — the lunar calendar | Te Ara | Encyclopaedia | https://teara.govt.nz/en/maramataka-the-lunar-calendar |
| S50 | Young Earth creationism (overview of the view and its main arguments) — 🔎 add a creationist primary source at build (e.g. Answers in Genesis, answersingenesis.org) | Wikipedia (starting point only) | Wikipedia | https://en.wikipedia.org/wiki/Young_Earth_creationism |
| S51 | The Ice Age (Creation Answers Book, ch. 16) — 🔎 link found by search but the site wouldn't load for checking; confirm at build | Creation Ministries International | Organisation (creationist) | https://creation.com/articles/ice-age-cab-16 |

**Bible references** are read from the school's own Bible; the app links each to BibleGateway (e.g. https://www.biblegateway.com/passage/?search=Job+38%3A31).

---

*End of blueprint. Decisions confirmed 30 October 2026 (D8 changed). Next step: Phase 1 when you're ready.*
