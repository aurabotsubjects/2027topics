# The Royal Road: ChatGPT Image Prompts

The app already looks finished without any new images: maps, the road, rosettes, wedge numbers, the clay lock, qanat and windcatcher drawings, the guides and the Seal are all drawn in code. Images are an optional upgrade that fades in over the built-in art.

**Most of the images already exist.** The first Persia app (*The Royal Road Race*, in the `Persia` folder) has 127 images in the same style. They have been copied into `PersiaNew/assets/img/` with new file names (see Part A). You only need to **generate the new images in Part C** (about 18), and only the three marked ⭐ are used in Week 1.

## How to use these images
1. Open a **new ChatGPT chat** and attach two of the existing images as style references: `char-shirin.webp` (a face) and `hero-w01.webp` (a scene). Say: *"Match the visual style, lighting, colour palette and level of finish of these reference images for every image I ask for. Do not copy their composition."*
2. Paste the **STYLE LOCK** below, then the prompt for the image you want. One image per message.
3. Save the image as **WebP** (or PNG, then convert at squoosh.app; long edge ≤ 1280 px, about 120 KB) using the **exact file name** shown.
4. Put the file in `PersiaNew/assets/img/`. The app finds it automatically and fades it in. If a file is missing, the app uses its drawn art instead, so nothing breaks.
5. If an image has stray letters or numbers, reply: *"Regenerate with absolutely no text, letters or numbers anywhere."*

**Where each image shows up**
| File | Where it appears |
|---|---|
| `char-*.webp` | The guide's portrait on every Dispatch slide (and the Shadow's Note on Fridays) |
| `hero-wNN.webp` | Behind Monday's Dispatch, behind Friday's Seal Fragment lock, on the home-page week tile and the Week page header |
| `day-wNN-mon` … `day-wNN-fri.webp` | The day cards on the Week page and the header of each lesson page |
| `animal-NN.webp` | Animal cards on Wednesday (Science) slides |
| `team-*.webp` | Team crests on the team slide |
| `seal-kings.webp` | The Seal of the Kings (the fragments are cut from it in code) |
| `art-*.webp` | Our own designed objects (the clay lock, a cylinder seal, a foil study, a garden plan) |

---

## STYLE LOCK (paste this first, every time)
> Cinematic, richly painted concept art in the style of a high-quality animated historical adventure film: warm golden-hour or storm light breaking through clouds, soft volumetric haze, weathered ancient stone, glazed brick and richly textured woven fabric. A muted earthy palette of sand, ash and charcoal with deep lapis blue, turquoise, deep crimson and burnished antique-gold accents. Characters have warm, expressive, dignified faces (friendly, never cartoonish caricature), historically grounded Achaemenid Persian dress and detail, respectful of Persian and Iranian culture. Shallow depth of field, fine film grain, awe-inspiring, suitable for ages 9–11: intense is fine, but never frightening, gory or violent. Absolutely no text, letters, numbers, signatures or watermarks anywhere in the image.

**Never include (blueprint §15, §17):** real people as portraits (Cyrus, Darius, Xerxes, Esther, Nehemiah, Alexander…); copies of real museum objects made to look like photographs (the Cyrus Cylinder, the Oxus treasure, the archers frieze…); sacred texts, calligraphy or religious symbols (including the Faravahar) used as decoration; mosques or fire temples as decoration; modern Iranian political imagery or flags.

---

## Part A — Reused images (already copied for you)
These came from the first Persia app (`Persia/assets/`) and were copied into `PersiaNew/assets/img/` with the names the new app uses. The originals in `Persia/` are untouched.

| Old file (Persia/assets) | New file (PersiaNew/assets/img) | Used for |
|---|---|---|
| `CHAR-01-face` | `char-shirin` | Shirin the Scribe (Monday · History) |
| `CHAR-02-face` | `char-farhad` | Farhad the Caravan Master (Tuesday · Geography) |
| `CHAR-03-face` | `char-gandom` | Gandom the camel (Wednesday · Science) |
| `CHAR-04-face` | `char-shadow` | The Shadow Courier (Friday's Shadow's Note) |
| `CHAR-05` | `char-zal` | Zal unmasked (Week 9) |
| `CHAR-06` | `char-cast` | Whole cast (spare) |
| `CHAR-01` … `CHAR-04` (full sheets) | `sheet-shirin`, `sheet-farhad`, `sheet-gandom`, `sheet-shadow` | Character reference sheets (attach these when generating scenes that include a guide) |
| `W01-HERO` … `W10-HERO` | `hero-w01` … `hero-w10` | Week heroes |
| `W##-MON` | `day-w##-mon` | Monday (History) day cards |
| `W##-TUE` | `day-w##-tue` | Tuesday (Geography) day cards |
| `W##-WED` | `day-w##-wed` | Wednesday (Science) day cards |
| `W##-THU` (the old Art cards) | `day-w##-fri` | **Friday** (Art) day cards — Art moved to Friday |
| `ANIMAL-01` … `ANIMAL-18` | `animal-01` … `animal-18` | Animal cards: 01 Persian leopard · 02 bezoar ibex · 03 brown bear · 04 golden eagle · 05 Persian onager · 06 goitered gazelle · 07 Asiatic cheetah · 08 Asiatic lion · 09 Caspian tiger · 10 Bactrian camel · 11 sand cat · 12 jerboa · 13 greater flamingo · 14 water buffalo · 15 Caspian seal · 16 dugong · 17 Persian fallow deer · 18 hawksbill turtle |
| `TEAM-01` … `TEAM-06` | `team-immortals`, `team-leopards`, `team-simurgh`, `team-cheetahs`, `team-griffins`, `team-lions` | Team crests |
| `CORE-07` | `seal-kings` | The Seal of the Kings |
| `CORE-01`, `CORE-03`, `CORE-06`, `CORE-08`, `CORE-13`, `CORE-14` | `core-title`, `core-map`, `core-daric`, `core-fragments`, `core-gates`, `core-caravan` | Spares for later weeks (title art, parchment map, daric coin, fragments, gate doors, caravan silhouettes) |
| `medal-*`, `coin`, `SHOWDOWN-BG*` | (copied with the same names) | Optional Caravan Quiz (D5), later |

The **Thursday (Technology)** day cards and two new guides don't exist yet: they are in Part C.

---

## Part B — Format guide
| Kind | Format | Notes |
|---|---|---|
| Character face (`char-*`) | **Square 1:1** (1024 × 1024) | Head and shoulders, centred, warm cream background — the same framing as `char-shirin.webp` (the old `CHAR-01-face`) |
| Day card (`day-*`) | **Landscape 3:2** (1536 × 1024) | One strong subject, room on the left for nothing in particular (cards are cropped wide) |
| Object (`art-*`) | **Square 1:1** (1024 × 1024) | One object, centred, on a plain warm backdrop |
| Team crest (`team-*`) | **Square 1:1** (768 × 768) | Round crest, plain background |

---

## Part C — New images to generate

### 1. New guides ⭐ (used in Week 1)
Attach `char-shirin.webp` and say *"Same style and framing as this portrait."*

#### ⭐ `char-nasrin.webp` — Nasrin (Thursday · Technology)
> [STYLE LOCK] Head-and-shoulders portrait of Nasrin, a fictional 13-year-old ancient Persian girl who is a young water engineer, the daughter of a qanat-digger. Warm brown skin, dark hair tucked under a practical turquoise head-wrap, a dusty indigo work tunic, a small clay oil lamp glowing in one hand and a plumb line on a cord around her neck, a smudge of dust on one cheek. Bright, practical, quick-thinking expression with a confident half-smile. Plain warm cream background. Square 1:1 (1024 × 1024).

#### ⭐ `char-hamid.webp` — Master Hamid (Friday · Art)
> [STYLE LOCK] Head-and-shoulders portrait of Master Hamid, a fictional elderly ancient Persian palace craftsman: a kind, lined face, a neat white beard, a cream cloth head-wrap, a brown leather work apron over a terracotta tunic, a fine stone-carving chisel tucked behind one ear and a little gold leaf on his fingertips, faint stone dust in the air. Patient, wise, gentle expression. Plain warm cream background. Square 1:1 (1024 × 1024).

### 2. Thursday (Technology) day cards — `day-w01-thu` … `day-w10-thu`
These replace the old Friday quiz backdrops: Thursday is now Technology. Look: *blueprint-on-clay* — a real scene with a faint white engineering line-drawing feel layered over terracotta and sand tones.

#### ⭐ `day-w01-thu.webp` — Think like a desert engineer
> [STYLE LOCK] A still life on a sun-baked mud-brick ledge in an ancient Persian desert town at midday: an empty clay water jug lying on its side, a small block of ice melting into a puddle on a terracotta plate, and the blazing sun reflected in the puddle; behind, out of focus, tall windcatcher towers on the rooftops and a line of qanat shaft mounds across the sand. Faint white engineering sketch lines (arrows for air and water) drawn delicately over the scene like a blueprint, with no letters or numbers. Landscape 3:2 (1536 × 1024).

#### `day-w02-thu.webp` — Water from the mountains: build a qanat
> [STYLE LOCK] A dramatic cut-away cross-section of the ground at the foot of snowy mountains: a deep mother well reaching groundwater, a line of vertical shafts from the surface, and a gently sloping underground tunnel carrying clear water by gravity out to a green oasis village with fields. A young engineer with a lamp kneels in the tunnel. Warm earth tones with turquoise water; faint white blueprint lines over the cut-away, no letters or numbers. Landscape 3:2 (1536 × 1024).

#### `day-w03-thu.webp` — Catching the wind: the windcatcher
> [STYLE LOCK] Late-afternoon view over the mud-brick rooftops of an ancient desert city with many tall square windcatcher towers with vertical slots; soft white airflow lines curl down into a courtyard house below, where a family rests in the cool shade. Warm sand and terracotta palette with lapis-blue sky. Landscape 3:2 (1536 × 1024).

#### `day-w04-thu.webp` — Ice in the desert: the yakhchāl
> [STYLE LOCK] A huge stepped conical mud-brick ice house (yakhchāl) at dusk in the desert, a tall shade wall running beside a shallow freezing pool, frost glittering on the pool's surface, a cold blue twilight sky with the first stars. Peaceful, slightly magical. Landscape 3:2 (1536 × 1024).

#### `day-w05-thu.webp` — Arches & domes: building strong
> [STYLE LOCK] Inside an ancient Persian brick building under construction: a row of mud-brick arches and a half-finished dome supported by a curved wooden frame, a wedge-shaped keystone being lowered into place by ropes, warm dust in shafts of light. Builders seen from behind or at a distance. Landscape 3:2 (1536 × 1024).

#### `day-w06-thu.webp` — Royal Road Messages 1: relay algorithms
> [STYLE LOCK] A royal road relay station at dawn: a tired courier on a horse hands a sealed message tube to a fresh rider on a rested horse; stables, a torch on a post, and the road stretching away to the next station on the horizon. Strong sense of motion and sequence. Landscape 3:2 (1536 × 1024).

#### `day-w07-thu.webp` — Messages 2: secret codes & loops
> [STYLE LOCK] Close-up of a scribe's desk by lamplight: two concentric clay discs that turn like a cipher wheel (decorated only with simple dots and wedge marks, no letters), a wax writing tablet, a stylus, a coiled cord and a small sealed message. Mysterious, warm and inviting. Landscape 3:2 (1536 × 1024).

#### `day-w08-thu.webp` — Messages 3: binary signals
> [STYLE LOCK] A chain of hilltop signal stations at night across a desert valley: on each hill a row of large clay lamps, some lit and some dark, sending a message from hill to hill; stars overhead, the glow reflected on the dunes. Landscape 3:2 (1536 × 1024).

#### `day-w09-thu.webp` — Messages 4: the courier game
> [STYLE LOCK] A beautifully painted board-game map on parchment laid on a carved wooden table: a winding road with round stations, little carved courier tokens, camels and horses, a few dice-like clay cubes with dots only, lamplight and gold accents. No letters or numbers. Landscape 3:2 (1536 × 1024).

#### `day-w10-thu.webp` — Showcase: test, evaluate & present
> [STYLE LOCK] A proud exhibition table in a sunlit classroom-like courtyard: student-made models of a qanat channel, a card windcatcher with paper streamers, a small ice-house dome and a row of brick arches, with ribbons and simple handmade tags (blank), gold afternoon light, a sense of celebration. Landscape 3:2 (1536 × 1024).

### 3. Our own designed objects (`art-*`)
These are **our designs**, not copies of museum objects.

#### `art-seal-lock.webp` — the clay Seal lock (Friday, every week)
> [STYLE LOCK] A palm-sized slab of soft reddish-brown clay set into a bronze frame on a carved stone door, with a few wedge-shaped impressions pressed into it in a row (simple wedges only, not a real inscription) and the faint glow of gold light seeping from a hairline crack. Plain dark lapis background. Square 1:1 (1024 × 1024).

#### `art-cylinder-seal.webp` — a cylinder seal and its rolled impression (Week 2 Art)
> [STYLE LOCK] A small carved stone cylinder seal lying on a clay tablet, next to the long rolled impression it has left in the clay: an original simple design of a camel, a palm tree and a star (not a copy of any real seal). Warm side light shows the relief. Plain warm backdrop. Square 1:1 (1024 × 1024).

#### `art-foil-study.webp` — a gold-foil embossing study (Week 5 Art)
> [STYLE LOCK] A student-style embossed gold craft-foil panel on a felt pad: an original design of a small horse-drawn chariot and a rosette border, raised from the back and outlined from the front, with a wooden embossing tool beside it. Clearly a modern classroom craft piece inspired by ancient goldwork, not a copy of a museum object. Square 1:1 (1024 × 1024).

#### `art-garden-plan.webp` — a four-part garden plan (Week 6 Art)
> [STYLE LOCK] A bird's-eye painted plan of a Persian four-part garden (chahar bagh) on parchment: two crossing water channels meeting at a central pool, four planted quarters with cypress and fruit trees, a pavilion at one end, a decorative rosette border. No writing. Square 1:1 (1024 × 1024).

### 4. Optional extras
#### `team-onagers.webp` and `team-ibex.webp` — crests for teams 7 and 8 (only if you use 7–8 teams)
> [STYLE LOCK] A round heraldic crest in burnished gold and earth-brown enamel showing a Persian onager (wild ass) in profile, with a rosette ring border. Plain white background, cleanly isolated. Square 1:1 (768 × 768).

> [STYLE LOCK] A round heraldic crest in burnished gold and slate-blue enamel showing a wild goat (bezoar ibex) with long curved horns on a rocky peak, with a rosette ring border. Plain white background, cleanly isolated. Square 1:1 (768 × 768).

---

## Checklist
- ⭐ Week 1: `char-nasrin`, `char-hamid`, `day-w01-thu` (3 images)
- Weeks 2–10: `day-w02-thu` … `day-w10-thu` (9 images), `art-seal-lock`, `art-cylinder-seal`, `art-foil-study`, `art-garden-plan` (4 images)
- Optional: `team-onagers`, `team-ibex`
- Everything else is reused (Part A).
