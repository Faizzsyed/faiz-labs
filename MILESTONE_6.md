# Milestone 6 — Contact, footer, commands and appearance

Completed: 6 October 2026 (Asia/Calcutta). Scope: continuation of the interrupted Milestone 6 only.

## Repository state discovered

The repository already contained working, uncommitted Milestones 1–5 plus substantially complete Milestone 6 code. `git status`, tracked diffs, current integration, shared data, styles, documentation, initial lint and initial production build were inspected before editing. No repository `AGENTS.md` was found. `MILESTONE_6.md` did not exist; `PROJECT_PROGRESS.md` still said 5 / 9 and Milestone 6 not started.

Already present: Contact and Footer, canonical real CV, command palette and eleven commands, search and keyboard controls, native dialog focus containment/return, theme provider and persistence, dark tokens, active navigation, scroll progress, mobile navigation and scroll locking, and pointer-based custom cursor. `App.jsx`, `Home.jsx`, theme imports and the pre-paint theme script in `index.html` were complete. No malformed imports or interrupted code fragments were found. Apparent damaged symbols in the default PowerShell output were an output-encoding issue; UTF-8 source text was intact.

The previous run's QA scripts, screenshots and component/style hashes were found in `%TEMP%/faiz-portfolio-visual-check`. Twelve Milestones 1–5 component/style hashes matched that saved pre-Milestone-6 baseline: Hero, Projects, PacePdfFeature, FieldMap, Trajectory, Experience, Skills and their five section styles. Existing changes and assets were preserved; no reset, commit, push or deployment was performed.

## Remaining work and fixes

Fresh browser QA found one accessibility issue: Footer Back to top set heading focus synchronously, which the browser's default anchor navigation then cleared to the body. Its focus handoff now runs on the next animation frame, after anchor navigation. The existing hash, scrolling and reduced-motion behavior remain functional. A browser assertion verifies that the hero h1 receives focus and the page returns to the top.

The remaining unfinished work was milestone documentation and progress tracking. No other application functionality needed rebuilding.

## Files changed in this continuation

- `portfolio/src/components/Footer.jsx`: defer Back to top heading focus until after native anchor navigation.
- `MILESTONE_6.md`: create this report with implementation and fresh QA results.
- `PROJECT_PROGRESS.md`: mark Milestones 1–6 complete, update mounted sections and link this report.

Milestone 6 files already present and verified: `portfolio/index.html`, `src/App.jsx`, `src/pages/Home.jsx`, Contact, Footer, CommandPalette, Navbar, Cursor, ScrollProgress, ThemeToggle, `context/ThemeContext.jsx`, `context/theme.js`, `data/contact.js`, `data/navigation.js`, `data/commands.js`, `hooks/useActiveSection.js`, `hooks/sectionNavigation.js`, `styles/completion.css` and `public/Faiz_Sayyed_Resume.pdf`.

## Contact and Footer

Contact displays LET'S BUILD / SOMETHING USEFUL. Links use shared data:

- Email: `faizusayed256@gmail.com` via `mailto:`.
- LinkedIn: `https://www.linkedin.com/in/faizsayyed-tech`.
- GitHub: `https://github.com/Faizzsyed`.

COPY EMAIL writes the exact shared address, changes to COPIED ✓, announces success in a polite status region, and resets after 2.4 seconds. The timer clears on unmount. Native button keyboard activation works. Both missing clipboard API and rejected clipboard permission were simulated: neither throws an uncaught error; the status offers selecting the email or opening the email app and resets normally.

Footer includes FAIZ SAYYED, ENGINEERING & SOFTWARE, GitHub, LinkedIn, Email, CV and Back to top. Copyright uses `new Date().getFullYear()`. Shared social/mail destinations were checked in both sections. External links use `noopener noreferrer`. Back to top scroll and heading focus passed after the fix. External destination availability/sign-in was not assessed; no external messages were sent.

## CV integration

Canonical path: `/Faiz_Sayyed_Resume.pdf`, centralized in `data/navigation.js`. Navbar CV, Footer CV and palette Download CV all use it. The existing 149,083-byte PDF parses as one page with real resume text and Faiz's name. The production preview serves HTTP 200 with a `%PDF-` signature. Navbar and Footer clicks open that PDF in new tabs; the command downloads successfully as `Faiz_Sayyed_Resume.pdf`. No placeholder logic or generated resume was introduced. The existing separately named `Faiz_Sayyed_Resume..pdf` was preserved and is not used by these controls.

## Command palette

Ctrl+K and Cmd+K open the palette. Eleven shared commands were verified: View Work, Open PacePDF, Go to Field Map, Go to Trajectory, Go to Experience, Go to Skills, Contact Me, Open GitHub, Open LinkedIn, Download CV and Toggle Theme.

Search matches command labels/details, resets the selected index and exposes a useful empty state. Arrow Up/Down wrap through results; Enter activates the selection; Escape closes. Search is a labeled combobox with `aria-activedescendant`, and results expose listbox/option selection. Tab and Shift+Tab stay within search and close controls; the native modal blocks background interaction. Opening locks body scrolling, closing restores it and returns focus to the launch control. Section activation focuses its heading. Download and Toggle Theme activation were exercised. The palette does not open over an existing project dialog.

Mobile launching and Ctrl+K while the menu is open both close the menu before showing commands; the menu's inert/scroll state is cleaned up, the modal remains scroll-locked, and closing returns focus to Menu. No overlay collision was detected.

## Theme

Default is premium ivory/light. Dark uses charcoal background/surface, warm white text, muted light text and restrained blue accents. Preference persists under `faiz-labs-theme`, initializes before paint through `index.html`, and synchronizes through ThemeProvider. Storage exceptions are caught in both locations. ThemeToggle exposes its action and pressed state; the palette also toggles it.

Light/dark toggle and reload persistence passed at all five required widths. The portrait's computed filter remains `none`; no image inversion is applied. Dark screenshots of Hero, Contact, PacePDF, Field Map and a project dialog were reviewed: content is readable, technical lines remain visible and PacePDF retains its intentional blue visual stage. No neon or purple theme was introduced.

Calculated token contrast on the main background: light text 14.03:1, muted 5.22:1, accent 5.50:1; dark text 15.22:1, muted 8.49:1, accent 6.70:1. These are scoped token checks, not a claim of a full-site accessibility certification.

## Cursor, active navigation and progress

Custom cursor is eligible only above 900px with hover, fine pointer and no reduced-motion preference. Touch pointer events are ignored; coarse/hover-none and reduced-motion CSS hide it. Browser checks covered a 1440px touch context and a reduced-motion context as well as mobile widths. Default, link, VIEW, OPEN ↗, CV ↗, COPY and UP ↑ states were exercised. Pointer coordinates and labels update refs/DOM through a single scheduled animation frame, without React state updates per pointer move. Ordinary pointer interaction remains functional without the cursor. No lag was observed during checked transitions; this is not a performance benchmark.

Active Index, Work, Trajectory, Field Map and Contact navigation uses IntersectionObserver on a header-adjusted reading band. Intervening sections inherit their preceding navigation owner; Experience correctly maps to Trajectory. All five nav states passed. Scroll progress uses passive scroll listeners, requestAnimationFrame and ResizeObserver and reaches `scaleX(1)` at the bottom.

## Mobile and accessibility QA

At widths through 900px, Menu opens a scrollable fixed panel with CV, Commands and theme controls. It focuses the first navigation link, locks body scroll and marks main/Footer inert. Tab/Shift+Tab wrap within menu controls, Escape closes and returns focus, Close works, and following Contact closes/restores the background and focuses its heading. Resizing an open menu to desktop closes it and clears inert/scroll locking. Command/menu handoffs also passed.

Verified native buttons/links, visible keyboard focus, labeled landmarks/headings, live clipboard and command status, command/project modal containment, Escape, return focus, heading focus after navigation and reduced-motion cursor disabling. Previous Work project-dialog keyboard opening, containment, Escape, return focus and scroll locking remain functional. No screen-reader software audit was performed.

## Responsive and regression QA

The connected Browser runtime reported no available browsers after documented discovery. Production-preview QA therefore used local headless Chrome through the already available temporary Playwright installation. Tooling and additional checks stayed outside application dependencies and repository files.

| Viewport | Contact/copy | Palette/keyboard/focus | Theme/reload | Navigation/progress | Mobile menu | Horizontal overflow / errors |
| --- | --- | --- | --- | --- | --- | --- |
| 320 × 740 | Pass | Pass | Pass | Pass | Pass | None |
| 390 × 844 | Pass | Pass | Pass | Pass | Pass | None |
| 768 × 1024 | Pass | Pass | Pass | Pass | Pass | None |
| 1024 × 900 | Pass | Pass | Pass | Pass | Desktop controls | None |
| 1440 × 1000 | Pass | Pass | Pass | Pass | Desktop controls | None |

Fresh Contact light/dark, Footer, palette, mobile menu and Hero screenshots were captured. Contact screenshots were visually reviewed across all five widths, with additional direct review of the 320px palette/menu, 390px Footer, desktop dark Hero, PacePDF, Field Map and project dialog. Headings wrap intentionally and content remains accessible.

Reused and reran the existing milestone suites against the current production build:

- `milestone6.cjs`: all five required widths; exact copy/reset, canonical PDF response/download, both shortcuts, search/empty state, arrows/Enter/Escape, Tab containment, return/section focus, theme reload, portrait filter, active nav, progress, mobile controls and no overflow/console errors/HTTP failures.
- `m6-continuation-extra.cjs`: actual Navbar/Footer PDF tabs, footer heading focus and top scroll, unavailable/rejected clipboard, keyboard activation, all cursor states, touch/reduced motion, dark dialog, menu close/resize and menu-to-command handoffs; no page/console errors or failed requests.
- `m6-m5-m4-regression.cjs`: Work category counts, real desktop preview, responsive project dialogs, focus/scroll locks and PacePDF's intentional missing-content handling at 1440/768/390/320px, plus reduced motion.
- `m6-m5-milestone4.cjs`: all five domains, hover connections, keyboard select/reset, related projects/dialog and responsive Field Map at 1440/768/390/320px, plus reduced motion.
- `m6-milestone5.cjs`: six trajectory entries, two experience roles, six skill groups/20 technologies, keyboard selection/mappings and responsive layout at 1440/768/390/320px, plus reduced motion.

All suites passed. The targeted extra suite ran against the final Footer fix. Earlier milestone hashes still match; their application source was not edited.

## Final gates and remaining inputs

- `npm run lint --prefix portfolio`: PASS, no warnings/errors.
- `npm run build --prefix portfolio`: PASS, Vite 8.1.0, 329 modules; final build after Footer fix completed successfully.
- `git diff --check`: PASS, no whitespace errors. Git's existing LF/CRLF conversion notices are separate informational output.

No outstanding Milestone 6 input or implementation issue. Prior content gaps remain: real PacePDF captures and store/source links, a verified public Connectwell repository and other earlier documented project metadata. Their explicit fallbacks are preserved. These do not block Milestone 6.

`PROJECT_PROGRESS.md`: Milestones 1–6 complete, **6 / 9 complete (approximately 67%)**. Stop here; Milestones 7–9 have not begun.
