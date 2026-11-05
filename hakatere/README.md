# The Braided Map — Hakatere (Years 5–6)

The Braided Map is a teacher-run presentation app for a 10-week term on our own place. Every lesson is 50 minutes, and each day is a different subject: History — Hakatere local history (Mon), Geography — Mountains (Tue), Science — Matariki & the universe (Wed), Technology — farm machines + Scratch (Thu) and Art — Land, River & Sky (Fri). It is built on the same engine as *The Fifth Codex*, re-themed for Hakatere. The full plan is in `Hakatere_App_Blueprint.md`.

**Status:** Phase 1 (engine and look) and **all ten weeks** are built: fifty full lessons with scripted slides, interactives, lesson plans, rubrics, Path Cards and sources. All 33 ChatGPT images are in.

## Open it
- **On your Mac:** double-click `index.html`. It runs in Chrome or Safari and works offline (fonts are included).
- **Online:** upload this folder to a GitHub repo called **`hakatere`**, then turn on GitHub Pages or connect it to Netlify. There's no build step.

## Present
Go to **Week 1**, choose a day, then press **Present from start**.

| Key | Action |
|---|---|
| → / Space / clicker | Next slide or next reveal |
| ← | Back |
| N | Teacher notes and scripts (SAY / ASK / LISTEN FOR / IF THEY SAY… / 🌿 TIKANGA) |
| T | Timer |
| P | Random picker (teams, or your class list) |
| C | Wheat sheaf scores 🌾 |
| B | Calm (black) screen |
| F | Fullscreen |
| D | Two-screen mode: class screen + your notes |
| M | Sound on/off |
| Esc | Close an overlay, or exit to the lesson page |

## The weekly mystery
- Every Mon–Thu lesson ends with a **Trig Clue** (a number). Type it on the keypad; solved clues are saved.
- Friday ends with the **Survey Seal**: add the four clues to get a **bearing**, dial it on the theodolite, and the map sheet unfolds. Week 1: **039°** · Week 2: **009°** · Week 3: **061°** · Week 4: **027°** · Week 5: **041°** · Week 6: **061°** (again!) · Week 7: **066°** (Sheet VII is missing) · Week 8: **019°** · Week 9: **033°** · Week 10: **039°** (full circle: the same as Sheet I). After the last seal, the ten sheets reassemble and the class votes on the map's future.
- Then **The Dealer's Offer** raises a question that runs all term.

## Lesson plans, rubrics and PDFs
Each lesson page has a **Lesson Plan PDF** (ERO-ready, with 2027 curriculum links, 🌿 tikanga notes and a Sources & evidence page), **Rubric PDF** (Developing / Achieved / Flying with student-work examples), **Student Rubric**, **Path Cards (A · B · C)** and **Quick-Mark**. Choose **Print / Save as PDF** for the best quality.

Every Week page ends with **Sources & further reading**, grouped by day and labelled by type (Iwi / rūnaka, Museum, Government, University, Encyclopaedia…). To add a source, edit `data/sources.js`.

## Before you teach (blueprint D3)
- Share the Monday History lessons (especially Week 2 *Tākata Whenua*, Week 3 *Hine-Paaka* and Week 4 *Kemp's Deed*), Week 5's maramataka lesson, Week 6 Matariki & Puaka, the Week 6 rock-art lesson, Week 8's 2021 flood lesson, Week 9 *Te Kerēme* and the Week 10 Exhibition plan (mihi/karakia, kaitiaki framing) with **Te Rūnanga o Arowhenua** and your **Māori lead**.
- Check te reo definitions in `data/glossary.js` and the place-name pronunciations on Monday's **Say it right** slide.
- The guides (Nell, Sam, Priya, Liv, Tom) are fictional and never speak for mana whenua.

## Your data
Team names, the class list, marks, wheat sheaves and the Map Wall are saved **only in this browser on this computer**. Use **Settings → Export backup** to move them.

## Images (optional)
See `ChatGPT_Image_Prompts.md`. Put images in `assets/img/` using the exact file names listed there. Until then the app uses its built-in cut-paper art.

## Folders
- `index.html` — the app.
- `css/` — design tokens (Hakatere palette), app, slides and print styles.
- `js/` — engine: `art.js` (procedural mountains, braided rivers, stars, paddocks, portraits), `map.js` (the Hakatere map), `interactives.js` (Week 1 interactives), `ix-week02.js`–`ix-week10.js`, `slides.js`, `presenter.js`, `docs.js`, `app.js`.
- `data/` — `term.js`, `week01.js`–`week10.js`, `sources.js`, `glossary.js`.
- `assets/fonts/` — self-hosted fonts (SIL Open Font License).
