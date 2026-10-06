# Milestone 5 — Trajectory, Experience and Systems

Completed: 6 October 2026 (Asia/Calcutta). Scope: Milestone 5 only.

## Files changed

- `portfolio/src/pages/Home.jsx`: mount Trajectory, Experience and Skills after Field Map.
- `portfolio/src/components/Experience.jsx`: replace unused legacy timeline with editorial experience rows.
- `portfolio/src/components/Skills.jsx`: replace unused legacy pills with a technical board and accessible technology selection.
- `PROJECT_PROGRESS.md`: record 5 / 9 complete after validation.

## Files created

- `portfolio/src/components/Trajectory.jsx`
- `portfolio/src/data/trajectory.js`
- `portfolio/src/data/experience.js`
- `portfolio/src/data/skills.js`
- `portfolio/src/styles/progression.css`
- `MILESTONE_5.md`

## Trajectory

Six chronological entries, using the user's verified Milestone 5 brief:

| Year | Entry | Place / context |
| --- | --- | --- |
| 2023 | Diploma in Information Technology | Thakur Polytechnic; Kandivali, Mumbai |
| 2023–2027 | Bachelor of Engineering | Electronics & Computer Science; Shree L. R. Tiwari College of Engineering |
| 2024–2025 | Software Tester Intern | Elite Forums; platform testing, defects, support and resolution |
| 2026 | Python Developer Intern | Codec Technologies; AICTE Internship; applications, backend logic and implementation |
| 2026 | Building & shipping products | PacePDF; independent software, web systems, mobile tools and IoT experimentation |
| NEXT | Full stack products | Intelligent systems / advanced engineering; explicitly labeled aspiration |

The timeline reuses internship records and canonical PacePDF naming. No cumulative CGPA or invented metrics. Desktop uses six positions along one ruled progression line with coordinate ticks, index labels and a cobalt shipping marker. Viewport entry animates opacity and an 8px translation once. Hover emphasizes a marker; all details remain visible. Static entries deliberately do not add needless keyboard stops, expansion or modals.

## Experience

Centralized role data supplies both the experience rows and trajectory internships. Codec Technologies: Python Developer Intern, AICTE Internship, Mar 2026–Present. Elite Forums: Software Tester Intern, Dec 2024–Jan 2025. Responsibilities follow the supplied brief. Four desktop columns cover role, company, period and focus; thin rules emphasize hover without hiding content.

## Skills architecture and project mappings

Six indexed groups contain exactly the requested 20 technologies. A continuous ruled board replaces cards, pills and proficiency ratings. Hover/focus highlights the containing group. Native toggle buttons activate a persistent selection; related-project text is announced through a polite atomic status region. No new dependency.

Project matches are computed from `projects.js` technology arrays rather than copying project names or metadata. Display aliases normalize React.js → React, Express.js → Express, and IoT Sensors → IoT sensors.

| Technology | Canonical project match |
| --- | --- |
| React.js / Node.js / Express.js | Connectwell / AttendAI Pro / PaperForge |
| MongoDB | Connectwell / AttendAI Pro |
| Flutter / Dart | PacePDF |
| Python / OpenCV / Pillow | Passport Photo Studio |
| ESP32 / IoT Sensors | IoT Plant Monitoring |
| Firebase / Local AI / Ollama / Git / GitHub / Cloudinary / JavaScript / HTML / CSS | No documented connection in canonical technology metadata |

Unmatched tools remain in the requested toolkit with explicit unmatched copy. In particular, optional AI integrations in PaperForge do not establish that it uses Ollama or Local AI, so no such association is invented.

## Responsive behavior

Above 1100px: horizontal timeline and four-column experience. At 1100px and below: vertical timeline spine with year/detail columns; experience becomes a two-column editorial layout with visible labels. At 700px and below: timeline entries and experience stack, skills become one column, headings wrap naturally, body text remains readable. Technology buttons have at least 44px height. No sideways timeline scrolling.

## Validation and accessibility

- `npm run lint --prefix portfolio`: passed, no warnings/errors.
- `npm run build --prefix portfolio`: passed, Vite 8.1.0, 318 transformed modules.
- Production preview tested using local headless Chrome/Playwright at 1440, 768, 390 and 320px. The in-app browser runtime was unavailable in this session; QA tooling stayed outside application dependencies.
- Verified six trajectory entries, two roles, six skill groups, 20 technologies, supplied dates, aspiration labeling and absence of CGPA.
- Keyboard Enter and Space select technologies; focus outline is visible; one selection is pressed at a time. Hover/focus highlighting does not change selection until activation. Native buttons expose `aria-pressed` and `aria-controls`; status announces related projects.
- Semantic sections, labeled h2 headings, h3 subheadings, ordered timeline/experience lists, and no hover-only critical content.
- Reduced motion: timeline content renders immediately at full opacity without translation; CSS transitions reduce to near-zero duration; inherited reduced-motion behavior remains intact.
- Screenshot review of each new section across all four widths. No clipping or overlap observed; page width equals viewport width. No browser errors, warnings or failed requests in the checked flows.
- Trajectory navigation anchor works. Work regression passes category counts, actual-image desktop preview, keyboard dialog opening, Escape closing, contained focus, restored trigger focus and scroll lock. PacePDF missing store link stays disabled and no mock screenshots are introduced.
- Field Map regression passes all five domains, desktop hover connectors, keyboard selection/reset, canonical associations, related-project dialog, focus return, responsive layout and reduced motion at the same four widths.
- Approved Hero, Navbar, Work and PacePDF component/style hashes match their pre-Milestone-5 values. Field Map source files were not edited.

## Unresolved issues and scope

No unresolved Milestone 5 implementation issue. Some requested toolkit technologies have no canonical project association; their fallback is intentional. Existing missing product URLs/captures remain as documented in earlier milestones. No push, deployment, or Milestone 6 work performed. Progress: 5 / 9 complete.
