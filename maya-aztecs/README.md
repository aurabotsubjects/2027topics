# The Fifth Codex — Maya & Aztecs (Years 5–6)

The Fifth Codex is a teacher-run presentation app for a 10-week term. Every lesson is 50 minutes, and each day of the week is a different subject: History (Mon), Geography/Social Science (Tue), Science: Electricity (Wed), Technology: Circuits (Thu) and Art (Fri).

**Status:** All ten weeks are built: fifty full lessons, with the Big Projects launched in Week 6 and shown at the Week 10 Exhibition. Week 10 ends with the final Folio Seal and a finale. The class's Tuesday vote on the codex's future (the Codex Decision) is saved on this computer and shown in the finale, which ends with credits using the class list from Settings.

## Open it
- **On your Mac:** double-click `index.html`. It runs in Chrome or Safari, and works offline because the fonts are included.
- **Online:** upload this folder to a GitHub repo called **`mayaaztecs`** (repo names can't contain `&`), then turn on GitHub Pages or connect the repo to Netlify. There's no build step.

## Present
Go to **Week 1**, choose a day, then press **Present from start**.

| Key | Action |
|---|---|
| → / Space / clicker | Next slide or next reveal |
| ← | Back |
| N | Teacher notes and scripts (SAY / ASK / LISTEN FOR / IF THEY SAY…) |
| T | Timer |
| P | Random picker (teams, or your class list) |
| C | Cacao bean scores |
| B | Calm (black) screen |
| F | Fullscreen |
| D | Two-screen mode: opens a class-screen window. Drag it to the Apple TV or projector and press F there. Your laptop then shows the notes and the next slide. (Clicks on interactives happen on the class screen.) |
| M | Sound on/off |
| Esc | Close an overlay, or exit to the lesson page |

## Lesson plans, rubrics and PDFs
Every lesson page has these buttons:
- **Lesson Plan PDF**: an ERO-ready plan with the 2027 curriculum links.
- **Rubric PDF**: the teacher version, with Developing / Achieved / Flying levels and an example of student work for each level.
- **Student Rubric**: "I can…" statements with tick boxes.
- **Quick-Mark**: tap a level for each student, then export a CSV or an assessment-record PDF.

To get a PDF, choose **Print / Save as PDF** and pick "Save as PDF" in the print dialog. That's the best quality. **Download PDF** is a one-click option, but it needs an internet connection.

Each **Week** page ends with **Sources & further reading**: clickable links, grouped by day, to the pages that back up the facts in that week's slides. Every lesson has at least one source (134 in total), and each is labelled by type (Museum, Government / official, University / academic, Encyclopaedia, Education / organisation, News, Wikipedia — starting point only) so reviewers can judge reliability. Each lesson page shows its own day's sources; every **Lesson Plan PDF** ends with a *Sources & evidence* page (with the Scripture reference, curriculum source and a teacher check box); each **Week Pack** ends with that week's sources; and the **Unit Plan** includes a *Where the content comes from* page (how the materials were made, curriculum documents, reviewer sign-off) plus the full term bibliography. Document pages now paginate automatically so nothing runs off an A4 sheet. To add a source, edit `data/sources.js`.

The **Unit Plan** and **Week Pack** documents are linked from the home page and the Week page.

## Your data
Team names, the class list, marks, cacao beans and the Glyph Wall are saved **only in this browser on this computer**. Use **Settings → Export backup** to move them to another computer.

## Images (optional)
See `ChatGPT_Image_Prompts.md`. Put images in `assets/img/` using the file names listed there. While an image is missing, the browser console shows a harmless "file not found" message.

## Folders
- `index.html` — the app.
- `css/` — design system and print styles.
- `js/` — the engine, interactives, slide types, presenter, documents and art.
- `data/` — term data, `week01.js` to `week10.js`, and `sources.js` (the source links for each week). The lesson content lives here: slides, scripts, plan fields and rubrics.
- `assets/fonts/` — self-hosted fonts (SIL Open Font License).

### Vocabulary pop-ups (slides)
Hover over any dotted-underlined word on a slide to see its meaning; it disappears when the pointer moves away (tap it on a touch screen). Gold dots mark **today's lesson words** (from the lesson's vocab list). Fainter dots mark vocab from other weeks and other uncommon words, such as te reo Māori words, place names and Nahuatl words. Each word is underlined only the first time it appears on a slide, and everyday words (like *if* or *open*) are only underlined in the lesson that teaches them. To add or change meanings, edit `data/glossary.js` (extra words) or the lesson's `vocab` list.

### Path cards (student printables)
Every lesson has a printable **Path Card** for each Choose-Your-Path option (A, B and C). Each card has:
- the mission and detailed step-by-step instructions with tick boxes;
- the success criteria;
- where to find information (which slides, the Expedition Journal, trusted sources);
- a word bank and sentence starters;
- what "Achieved" work looks like, and the Flying challenge.

Print them from the lesson page ("Path Cards (A · B · C)" or "🖨 Print card" beside each path), from the 🖨 button on the Choose Your Path slide, or a whole week at once from the Week page. Longer cards run onto a second page, so print double-sided.
