# Milestone 7 — Responsive polish

Completed: 6 October 2026 (Asia/Calcutta). Scope: Milestone 7 only. Progress: **7 / 9 complete — approximately 78%**.

## Starting state and scope

Inspected the supplied brief, repository status, progress report, existing section styles/components and previous QA tooling. Initial lint and production build passed. The repository retained the uncommitted work from Milestones 1–6. That work was preserved; no approved section was rebuilt, no project content or assets were replaced, and no dependency or viewport listener was added.

The connected Browser runtime was unavailable. QA reused the local headless Chrome/Playwright installation and scripts in `%TEMP%/faiz-portfolio-visual-check`, as in earlier milestones. Browser checks used the actual Vite production preview at `http://127.0.0.1:4173`.

## Issues found and fixes

| Finding | Responsive fix |
| --- | --- |
| Work filter targets were only 21–43px wide; Footer Email was 35px wide and GitHub slightly under 44px. Mobile menu CV also lacked 44px width. | Give filters, Footer links and CV a minimum 44px width. Reduce phone filter gaps to 8px so all five filters fit at 320px. Retain the existing minimum 44px height. |
| Work metadata was 8–9px on phones/tablets. | Use 10px for category/status, stack and year through 900px. Keep desktop typography unchanged. |
| Project dialog close controls disappeared after scrolling on tablet/desktop; the phone sticky header partly extended above the viewport. | Make the existing dialog topline sticky at `top: 0` at every width, with an opaque theme background and its close control fully inside the dialog. |
| Palette outer content overflowed at short heights, hiding its status/help and risking loss of the close control when scrolling. | Use a constrained flex-column layout only while the dialog is open. Let the results area shrink and scroll independently; retain search, close, status and help. Through 600px height, reduce title/margins/padding and keep search at least 44px tall. |
| The desktop portrait height cap produced a very shallow crop: 140px at 768×480 and 260px at 1440×600. | Above 700px width and through 700px height, cap the identity column at 360px width, center it in its existing grid column and remove the portrait height cap. Preserve its 5:6 aspect ratio and existing object-position. Compact only the composition padding in this short-height case. |
| Tablet PacePDF feature descriptions were cramped in four columns. | Use two columns from 701–900px, with alternating column borders/padding corrected. Phone already uses two; wider screens retain four. |
| Tablet Skills retained three narrow columns, causing category headings to wrap unevenly. | Use two columns from 701–900px. Keep one phone column and three wider-screen columns. |
| At 1440×400, the first Work preview extended below the viewport because its rail began 32px below the first row. | Remove the rail's vertical margin through 600px height. Verify all six previews, including captions, fit in the tested short desktop viewports. |

No page-level horizontal overflow was found before the pass. These changes address usability and composition rather than masking overflow with a global clipping rule.

## Files changed

- `portfolio/src/styles/hero.css`: short-landscape portrait crop and composition padding.
- `portfolio/src/styles/work.css`: filter target widths/gaps, smaller-screen metadata, persistent dialog close header and short-height preview rail.
- `portfolio/src/styles/pacepdf.css`: tablet feature matrix columns and borders.
- `portfolio/src/styles/progression.css`: tablet Skills columns.
- `portfolio/src/styles/completion.css`: Footer/CV target widths and constrained short-height palette.
- `MILESTONE_7.md`: this report.
- `PROJECT_PROGRESS.md`: mark Milestone 7 complete and link the report.

All component, data, hook and asset files match the hashes captured at the start of this milestone. Only these five application stylesheets changed. No new React render path, resize listener or JavaScript viewport detection was introduced.

## Section audit and responsive decisions

**Navbar / menu / appearance controls:** Desktop navigation remains balanced at 901px and above, including the caption transition at 1200/1201px. Geometry checks found no collisions between brand, nav links, CV, Commands and theme controls. Menu retains its 44px button and full-width links; CV now also meets 44×44px. On short screens the panel scrolls internally to expose CV, Commands and theme. Main/Footer remain inert, body scrolling is locked, focus remains in the controls and Escape restores Menu focus. Opening at mobile width then resizing past 900px clears the menu, inert and body lock correctly.

**Hero:** The actual rendered portrait remains `faiz-portrait.jpg`, imported by Hero and emitted as `faiz-portrait-pesizjdv.jpg`; the unused alternate original remains preserved. Name glyph bounds fit their existing animation masks at every validation size. The mask's deliberate negative margins made a generic scrollWidth check look suspicious, but glyph geometry and screenshots confirmed no clipped name. Phone layout retains the important stacked portrait, simplified technical graphics, compact spacing and ruled facts. No global heading/clamp change was needed. Short landscape windows now retain a natural portrait crop rather than compressing its height. The page is allowed to scroll vertically instead of forcing all Hero content into a short screen.

**Selected Work / dialogs:** Existing aligned desktop rows and preview rail remain; tablet removes the hover preview and phones stack number, title and metadata. Long titles wrap without colliding with metadata. Filters fit one row at 320px with proper targets. All six dialogs were opened at every validation case, scrolled to both extremes, checked for horizontal overflow and a fully visible close button, then closed with Escape and trigger focus restored.

**PacePDF:** Product heading and SHIPPED PRODUCT remain visible. Metadata retains its desktop sidebar and stacked phone rows. The tablet feature matrix gains breathing room through two columns. Phones still show one strong device visual; tablets show two and large desktops three. Placeholders explicitly retain capture-pending language; no screenshot was fabricated. Dark mode keeps the blue visual stage intentional.

**Field Map:** Approved desktop schematic remains above 1050px. Through 1050px the existing two-column tablet representation remains; phones use a vertical accordion/spine through 700px. Domain tools, selected panels and canonical related-project links are accessible without hover. Existing hover connectors, keyboard select/reset and dialog links passed regression tests. No Field Map source/style change was required.

**Trajectory / Experience / Skills:** Timeline remains horizontal above 1100px and vertical below, with phone content stacked on the spine. Dates, long institution names and the NEXT aspiration label remain readable. Experience retains four desktop columns, two tablet columns and one phone column. Skills now deliberately uses 3/2/1 columns, with 16px technology labels and 44px targets. Canonical related-project text wraps without horizontal overflow.

**Contact / Footer:** Exact long email fits at 320px; existing `overflow-wrap: anywhere` protects smaller available content widths. Copy remains easy to tap, announces confirmation and resets; unavailable/denied clipboard fallbacks pass. Footer links retain clean wrapping, improved widths, dynamic year and functioning Back to top/heading focus. Its phone stack and wider layout remain intact.

**Cursor / scroll progress:** Existing touch and reduced-motion cursor disabling, default/link/VIEW/OPEN/CV/COPY/UP states pass. No pointer-motion React state was added. Active navigation and bottom `scaleX(1)` progress still work. No new resize performance burden was introduced; resize checks verify state cleanup rather than claim a measured performance score.

## Viewports and short-height QA

| Primary width | Viewport | Result |
| --- | --- | --- |
| 320 | 320×568 | Pass |
| 360 | 360×740 | Pass |
| 390 | 390×844 | Pass |
| 430 | 430×932 | Pass |
| 768 | 768×1024 | Pass |
| 1024 | 1024×768 | Pass |
| 1280 | 1280×800 | Pass |
| 1440 | 1440×1000 | Pass |
| 1600 | 1600×1000 | Pass |
| 1920 | 1920×1080 | Pass |

Additional short cases: 1440×600, 768×480, 320×400, 320×320, 390×360 and 1440×400. Palette fits inside the viewport with its search/close/status/help visible and the active result fully visible after repeated Arrow Up/Down navigation. The 320×320 and 390×360 cases simulate reduced space available when a mobile keyboard is present. Search text stays 16px. A physical phone keyboard was not tested; the report does not claim device-level keyboard validation.

Boundary checks at 700/701, 900/901, 1050/1051, 1100/1101 and 1200/1201px, all at 800px height, passed. These cover changes between phone/tablet columns, menu/desktop navigation, Field Map representation, timeline/preview and brand caption.

In all **26 validation cases**, `document.documentElement.scrollWidth === viewport width`; no console/page errors, warnings, failed requests or HTTP resource failures were recorded. Dialog widths also remain within their own scroll containers.

## Dark theme, reduced motion and screenshots

The 26-case layout suite ran with reduced motion: glyphs and section content were available immediately, and layout did not depend on animation completion. Existing reduced-motion trajectory/Field Map tests and cursor disabling passed. Default-motion regression suites also passed.

Dark/default-motion checks passed at 320/390/768/1440px, including palette Toggle Theme and reload persistence. Final reduced-motion light/dark screenshots were captured at 320/390/768/1024/1440px. Dark borders, Field Map text, PacePDF and dialogs remain readable; portrait filter remains `none`. No theme tokens changed.

Final screenshot artifacts use `m7-final-{width}-{section}.png`, `m7-final-dark-{width}-{section}.png` and `m7-short-{width}-{height}-{section}.png` in the existing temporary QA directory. They include Hero, Work, PacePDF, Field Map, Trajectory, Experience, Skills, Contact, Footer, palette/menu and representative project dialogs. Before/after screenshots and JSON geometry reports were also captured. Screenshots were reviewed for clipping, stacking, cramped metadata, alignment and whitespace; the short-height Hero, tablet matrix/Skills and persistent close controls show the intended fixes. Default-motion captures of the PacePDF stage require scrolling it into view and waiting for its existing reveal; final dark captures were taken fully revealed.

## Regression and final validation

Reused suites all passed:

- `milestone6.cjs`: Contact/copy, PDF/download, both shortcuts, palette keyboard/search/empty state, containment/return focus, theme/reload, portrait, menu, active navigation and progress at 320/390/768/1024/1440px.
- `m6-continuation-extra.cjs`: real Navbar/Footer PDF tabs, Footer focus/top scroll, missing/denied clipboard, cursor states, touch/reduced motion, dark dialog, menu handoff and resize cleanup. Reran after the final preview fix.
- `m6-m5-m4-regression.cjs`: Work filters/preview/dialogs and PacePDF fallbacks at 320/390/768/1440px, plus reduced motion.
- `m6-m5-milestone4.cjs`: Field Map selection/reset, all domains, related-project dialogs and focus/scroll handling at the same four widths, plus reduced motion.
- `m6-milestone5.cjs`: trajectory/experience counts, six groups/20 skills, keyboard mapping and responsive behavior at the same four widths, plus reduced motion.

Additional temporary Milestone 7 checks:

- `m7-validation.cjs`: 26 geometry/keyboard cases, all six dialogs per case, menu targets/inert/scrolling, palette active-result bounds, navbar/row alignment, columns, Hero glyph/crop and page width; representative dark/default-motion checks.
- `m7-resize-preview.cjs`: all six previews at 1101×600, 1280×800, 1440×600, 1920×1080 and 1440×400; repeated breakpoint resizing and menu cleanup; no errors. Passed after the final short-height rail fix.
- `m7-final-screenshots.cjs`: final light/dark capture matrix, fully visible PacePDF stage and no page overflow.

Final `npm run lint --prefix portfolio`: **PASS**, no warnings/errors.

Final `npm run build --prefix portfolio`: **PASS**, Vite 8.1.0, 329 modules. CSS 50.07kB (9.95kB gzip); JavaScript 375.41kB (116.49kB gzip); portrait 22.54kB. Asset sizes are build output, not a performance benchmark.

`git diff --check`: **PASS**. Existing LF/CRLF conversion notices are informational, not whitespace errors.

No outstanding Milestone 7 implementation issue. Earlier missing real PacePDF captures/store/source URLs and other documented content inputs remain unchanged. No commit, push or deployment. Milestones 8 and 9 have not begun.
