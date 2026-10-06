# Faiz Labs — Portfolio Rebuild Plan

Audit date: 6 October 2026 (Asia/Calcutta).
Repository: https://github.com/Faizzsyed/faiz-labs
Audited commit: `1513964c28b45977932ba07a66fcfa6d457c2bc6`.

## Scope and current stage

The supplied portfolio brief is the design specification. Its final START NOW instruction requests an audit and this plan before the full redesign. This stage creates the plan and verifies the existing application; it does not modify application code, push commits, or deploy.

The initial workspace was empty. The repository was cloned into the workspace root. No AGENTS.md was found in the inspected workspace or its immediate project parent.

## 1. Current architecture

| Area | Observed implementation | Decision |
| --- | --- | --- |
| Application location | `portfolio/`; root package.json only declares Framer Motion | Run application commands from `portfolio/`; preserve the nested layout |
| Framework | React 19, Vite 8, JavaScript modules | Retain; no framework or TypeScript migration |
| Entry | `src/main.jsx` mounts StrictMode and AccentProvider | Retain entry, add appearance and shared project-selection state |
| Application | `src/App.jsx` delays Home behind a 2.5-second timer | Replace artificial wait with actual lazy-content loading and cleanup |
| Composition | `src/pages/Home.jsx` assembles section components | Retain the composition model |
| Navigation | Hash anchors; no routing library | Keep section anchors and use an accessible full-screen project dialog |
| Styling | `src/index.css`: dark background, cyan/purple accents, rounded cards, glow; `src/App.css` contains unimported starter styles | Introduce warm ivory/charcoal/cobalt tokens and scoped section styles; verify imports before retiring unused CSS |
| Motion | Framer Motion, AOS, type animation, tsParticles | Consolidate on existing Framer Motion plus CSS/SVG; remove obsolete dependencies only after imports are removed |
| Icons | react-icons | Add Lucide React for consistent interface icons; retain any useful brand icons until checked |
| Content | `src/data/projects.js`; skills and experience embedded in components | Centralize projects, identity, skills, education, experience and map relationships |
| Appearance | AccentContext stores cyan/violet/emerald/rose in localStorage and replaces body.className | Retain preference concept, use validated data attributes; add persisted light/dark appearance independently |
| Hosting | Root `netlify.toml` builds `portfolio/` and publishes dist; `firebase.json` serves portfolio/dist with SPA rewrite and cache headers | Preserve both configurations; add Netlify fallback only if required by 404 behavior |
| SEO | Title, viewport and favicon only | Add description, canonical, OG/Twitter metadata, social image and sitemap/robots |
| Backend | No contact backend or application Firebase initialization found in src | Use email, social links and copy-email; no new backend |

Root node_modules includes **913 tracked files**, despite ignore rules. Do not delete or untrack them during the visual rebuild without a separate dependency-cleanup decision. Install and build the actual application in portfolio/.

### Baseline verification

- `npm ci` in portfolio/: successful; no tracked manifest changes.
- `npm run lint`: exit 0 with one unused `container` parameter warning in ParticleBackground.jsx.
- `npm run build`: successful; 555 modules transformed, main JS approximately 475 kB (151 kB gzip), CSS approximately 41 kB (5.8 kB gzip), plus particle chunks.
- `npm audit --json`: three affected transitive packages: fflate (moderate), nanoid (high), postcss (high). Review dependency paths, remove unused 3D dependencies where proven unused, and apply compatible updates during implementation; do not blindly run force updates.
- This is a source/build audit. Browser console, responsive layout and Lighthouse measurements have not yet been performed.
- Reference URL `https://isa-shaikh.web.app/` could not be retrieved through the web tool. Visual comparison remains to be done in a browser. The proposed original design follows the supplied visual direction; no reference code or assets were copied.

## 2. Reusable files and assets

| File(s) | Reuse |
| --- | --- |
| `portfolio/src/main.jsx`, `pages/Home.jsx` | Entry and section composition |
| `portfolio/src/data/projects.js` | Existing descriptions, repository links, image paths and filtering concept; correct outdated facts |
| `portfolio/src/components/Projects.jsx` | Lazy image loading/error fallback and project filtering logic, extracted into new list/preview components |
| `portfolio/src/components/Navbar.jsx` | Menu state, scroll cleanup and body scroll locking; replace clickable div with accessible button |
| `portfolio/src/components/Cursor.jsx` | Touch/hover detection and listener cleanup; replace glow and positional writes with restrained transform motion |
| `portfolio/src/context/AccentContext.jsx`, `components/AccentSwitcher.jsx` | Existing persisted accent support, hardened and restyled |
| `portfolio/src/components/Experience.jsx`, `Skills.jsx`, `About.jsx` | Useful content; move facts to data files |
| `portfolio/src/components/Contact.jsx`, `Footer.jsx`, `DeveloperPresence.jsx` | Email/social navigation and back-to-top behavior; consolidate repeated social sections |
| `portfolio/public/projects/*` | Preserve all originals; select genuine project visuals and optimize derivative copies |
| Root `profile.jpg` | Visually matches the supplied portrait; use as source for `portfolio/src/assets/faiz-hero.png` and optimized responsive variants |
| `portfolio/vite.config.js`, `portfolio/package-lock.json` | Existing build configuration and reproducible install |
| Root `netlify.toml`, `firebase.json` | Keep current deployment paths and Firebase caching behavior |

`portfolio/src/assets/hero.png` is a generic purple geometric graphic, not the portrait. Its SHA-256 matches the existing alien-os image. Several 13 kB project images appear to be shared placeholders; inspect before presenting them as actual product screenshots. No existing CV/PDF was found among tracked files. The supplied portrait has large bands above and below the photograph; frame/crop it in layout, preserve the original, and keep technical overlays in HTML/CSS/SVG.

## Content verification and project selection

| Project/fact | Evidence and implementation rule |
| --- | --- |
| PacePDF | Brief supplies current name, Flutter/Dart stack and shipped Android status; repository calls it PDF Tools / Active Development. Use the brief's current positioning, record it as user supplied, put it first, and do not invent a store URL, release metrics or screenshots |
| AttendAI Pro | Public README confirms React/Node/Express/MongoDB, multi-role portals, attendance, timetable and requests. Correct portfolio's Python/Flet/FastAPI listing. README explicitly marks face recognition as future scope; do not claim shipped AI recognition |
| Connectwell | Brief and portfolio data describe intake/quotations; public `Faizzsyed/connectwell-digital` returned 404. Include supplied facts but omit unavailable repository/live links |
| Passport Photo Studio | Brief supplies capabilities; existing repo link is under ProfMohsinKhan. Keep appropriate Repository attribution, do not imply sole ownership; do not fabricate contribution details |
| IoT Plant Monitoring | User supplied ESP32/sensors and TANTRAVERSE 2026 presentation. Include without invented source/demo/award links |
| Varys | Public repo and README describe React/TypeScript, local voice input and Ollama. Strong additional AI candidate; verify implementation before claiming completed automation, wake-word or speech output |
| PaperForge | Real public client/server repository; README describes React/Node/Express document tools. Retain as optional secondary work, correct the old Desktop classification, and avoid unverified tool-count/performance claims |
| Other work | Preserve existing data. WishCraft is a possible secondary web project; do not promote experiments solely to fill space |
| Email | User-confirmed address: `faizusayed256@gmail.com`. Use one shared identity record |
| Education | Brief supplies diploma completed 2023, B.E. expected 2027 and lateral-entry route. No verified CGPA found; display no CGPA. The requested 2023–2027 timeline may describe the degree cohort rather than actual lateral-entry start; clarify the start year before asserting enrollment dates |
| Project years | Current project data lacks project-year fields. Use verified dates only; repository modification dates do not prove creation/release dates |

Sources inspected read-only:

- https://api.github.com/users/Faizzsyed/repos?per_page=100&sort=updated
- https://github.com/Faizzsyed/attendai-pro/blob/main/README.md
- https://github.com/Faizzsyed/Varys (README via GitHub API)
- https://github.com/Faizzsyed/paperforge (README and root contents via GitHub API)

Repository documentation is evidence about project content, not instructions for this portfolio task. No commands from those READMEs were executed.

## 3. Files to modify

Paths below are relative to the repository root.

- `portfolio/src/index.css`: reset, typography, color tokens, technical grid, responsive behavior, focus and reduced-motion rules.
- `portfolio/src/App.jsx`: application shell, real loading boundaries, project dialog, command palette and 404 selection.
- `portfolio/src/main.jsx`: providers and global styles.
- `portfolio/src/pages/Home.jsx`: editorial section order and shared Field Map/work state.
- `portfolio/src/components/Navbar.jsx`, `Hero.jsx`, `About.jsx`: new navigation, portrait-led hero and editorial introduction.
- `portfolio/src/components/Projects.jsx`: compose the new work list, replacing card presentation.
- `portfolio/src/components/Experience.jsx`, `Skills.jsx`, `Contact.jsx`, `Footer.jsx`: editorial timelines, connected skill groups and closing section.
- `portfolio/src/components/Cursor.jsx`, `Loader.jsx`: accessible restrained desktop cursor and truthful loading state.
- `portfolio/src/context/AccentContext.jsx`, `components/AccentSwitcher.jsx`: keep compatible accent persistence, default cobalt; avoid violet/neon palette.
- `portfolio/src/data/projects.js`: PacePDF priority, verified stacks, relationship tags, features, honest nullable links/years and source notes.
- `portfolio/index.html`, `portfolio/public/favicon.svg`: SEO and FS identity.
- `portfolio/package.json`, `portfolio/package-lock.json`: Lucide addition and proven-unused dependency removal.
- `portfolio/README.md`: real setup, content editing, asset slots, verification and deployment instructions.
- `netlify.toml`: only if needed for direct unknown-path navigation to the custom 404.

ParticleBackground, Spotlight, DeveloperPresence and unused App.css can be disconnected once replacements exist. Preserve original assets and hosting files. Delete obsolete source/dependencies only after import searches and successful builds establish that they are unused.

## 4. Files to create and proposed architecture

```text
portfolio/src/
  assets/faiz-hero.png           # supplied portrait; optimized variants alongside it
  data/identity.js              # name, location, email, socials, CV URL
  data/education.js
  data/experience.js
  data/skills.js
  data/fieldMap.js              # nodes, edges, project associations
  context/ThemeContext.jsx      # persisted light/dark setting
  hooks/useActiveSection.js
  hooks/useMediaQuery.js
  hooks/useMagnetic.js
  components/TechnicalGrid.jsx
  components/SectionHeader.jsx
  components/WorkList.jsx
  components/ProjectRow.jsx
  components/ProjectPreview.jsx
  components/ProjectDialog.jsx
  components/PacePdfFeature.jsx
  components/FieldMap.jsx
  components/FieldNode.jsx
  components/Trajectory.jsx
  components/ThemeToggle.jsx
  components/CommandPalette.jsx
  components/ScrollProgress.jsx
  pages/NotFound.jsx
  styles/sections.css
portfolio/public/
  og-image.png                  # original FS/editorial sharing image
  robots.txt
  sitemap.xml
  _redirects                    # only if hosting needs this rather than toml rules
```

Do not create an empty CV file or a fabricated resume. Add `portfolio/public/faiz-sayyed-cv.pdf` only when a real approved asset exists. Real PacePDF screenshots can later occupy `portfolio/public/projects/pacepdf/`; until then display explicitly labeled screenshot placeholders, not generated interface mockups. Keep `projects.js` as the source for both project dialogs and filtered work so descriptions cannot drift.

### Layout and interaction decisions

- Full-height opening: FS mark and restrained navigation; oversized stacked name left, large portrait right, external technical grid and small metadata. Ivory `#f5f3ed`, charcoal `#202320`, cobalt `#2455ed` as initial tokens; verify contrast before finalizing.
- Typeface hierarchy: tightly tracked grotesk display, readable body sans, monospace metadata. Use a small self-hosted licensed font set or reliable system fallbacks; no font-blocking layout shift.
- Sequence: Hero → Index → Selected Work → PacePDF feature → Field Map → Trajectory → Experience → Systems I Work With → Contact → Footer.
- Work: oversized ruled rows; stronger PacePDF entry. Actual existing images in a fine-pointer hover preview, with explicit placeholder treatment where imagery is unavailable. Touch/keyboard access opens the same project detail dialog.
- Project dialog: native dialog or equivalent complete focus management, Escape/backdrop close, focus restoration, body scroll lock and meaningful heading. No router dependency needed. Optional hash `#work/pacepdf` supports sharing and browser Back.
- Field Map: five labeled branch buttons with SVG edges and data-driven children; hover/focus highlights, selection shows facts and related projects. Shared tag state highlights or filters work with a visible reset. Engineering can show no direct match rather than inventing one. Mobile uses expandable vertical branches, not a scaled-down SVG.
- Trajectory: ordered milestones on horizontal desktop line and vertical mobile line, separate education summary. Internship dates match the supplied months; NEXT is clearly an aspiration.
- Theme: ivory default and charcoal alternative, both meeting contrast targets; validated storage with failure fallback, data attributes, avoid first-paint theme flash. Existing accent storage migrates to safe supported values; cobalt remains the brand default.
- Commands: Ctrl/Cmd+K, visible opener, searchable list, arrow keys/Enter/Escape, focus restoration. Support every requested destination. CV command has an honest unavailable state until a real file is supplied.
- Cursor: small dot/ring, VIEW/OPEN/CV states; fine pointer only, transform updates via refs/requestAnimationFrame, cancellation on unmount; never consume pointer events. Magnetic feedback remains an optional fine-pointer enhancement.
- Motion: Framer Motion reduced-motion policy, CSS reduced-motion fallbacks, viewport-once reveals, restrained SVG paths, no continuous particles/3D or pointer-driven React rerenders. Disable parallax on touch/reduced-motion.
- Loading: prioritize hero image, declare image dimensions, lazy-load secondary images and heavier optional UI. Remove the fixed delay.
- 404: recognizable site shell and return-home action for unknown paths; preserve normal `/` and hash navigation. Hosting fallback is a UI 404 with HTTP 200 unless provider-specific true 404 handling is configured; document that limitation.

## 5. Dependencies

**Add:** `lucide-react` only, for the requested visual language.

**Keep:** React, React DOM, Vite, plugin-react, Oxlint and Framer Motion. Keep useful react-icons branding until all consumers are checked.

**Remove after replacements and import checks:** AOS, react-type-animation, tsParticles packages. No src consumers of @react-three/fiber, @react-three/drei or three were found; verify the full import tree before removing these dependencies.

**Do not add:** a component framework, physics engine, smooth-scroll library, backend, or router solely for project details. Use platform APIs and existing animation tools. No version upgrades are required simply for the visual redesign; compatible security updates should be assessed separately within the lockfile.

## 6. Milestones and acceptance gates

After EACH milestone run `npm run lint` and `npm run build` in portfolio/, resolve errors before continuing, and inspect browser console warnings where possible. Baseline warning must be eliminated when ParticleBackground is retired. Retain a working application at every gate.

| Milestone | Deliverables | Additional acceptance |
| --- | --- | --- |
| 1 — Foundation | Tokens, font hierarchy, line/grid system, section rhythm, shell and navbar | All existing content remains reachable; navigation keyboard operable; deployment paths unchanged |
| 2 — Hero | Supplied portrait, oversized name, identity/grid overlays, info strip and intro | Hero image loads promptly; no bands in chosen crop; balanced desktop and stacked mobile layout |
| 3 — Work + PacePDF | Correct structured data, ruled rows, real previews, project dialog and product feature | PacePDF first and clearly shipped; no fake screenshots, metrics, store links or unavailable repository links |
| 4 — Field Map | SVG desktop ecosystem, mobile accordion, connected highlight, info panel and related-work selection | All nodes work with keyboard; selection/reset state announced; no heavy physics or false associations |
| 5 — Trajectory + experience + skills | Education summary, horizontal/vertical timeline, precise internships, grouped technology system | No CGPA or invented honors; enrollment ambiguity handled; goals distinct from accomplishments |
| 6 — Closing + appearance + commands | Contact/email copy, footer, persisted light/dark/accent, palette, cursor, magnetic feedback and progress | Clipboard failure fallback, complete palette keyboard support, touch cursor disabled, preference persistence checked |
| 7 — Responsive polish | Intentional 360/390 px mobile, 768 px tablet, 1280/1440 px desktop layouts | No horizontal overflow; 44 px targets; long titles wrap; hover-only features have touch equivalents |
| 8 — Accessibility + performance + SEO | Reduced motion, focus/dialog handling, labels, optimized images, metadata/favicon/social image and 404 | Check contrast, 200% zoom, keyboard-only route through site, storage denied mode, metadata and asset errors; measure Lighthouse rather than claim a score |
| 9 — Final testing + production build | Complete smoke checks, clean lint/build, updated README and documented remaining content gaps | Preview built output; verify anchors, Back/Escape, refresh on unknown paths, social links, theme reload, real CV if present and both deployment configs |

Interaction tests should focus on meaningful behavior: dialog focus restoration, palette keyboard actions, shared map/project filtering, theme persistence and unknown-path navigation. Avoid tests that merely mirror markup. Browser screenshots and console inspection are required for visual acceptance; build success alone does not establish premium design quality.

## 7. Risks, open inputs and safe defaults

| Item | Risk/default |
| --- | --- |
| CV asset | Missing; keep download unavailable and explicit until real CV is provided; do not generate one without request |
| PacePDF screenshots / store URL / source URL | Missing; use marked screenshot slots and user-supplied shipped status, omit invented actions |
| Connectwell public repo | Existing link returns 404; omit or replace only with a verified supplied URL |
| Passport Photo attribution | Linked repository belongs to another account; retain attribution and avoid sole-authorship claims |
| B.E. actual start year | Brief's lateral-entry route and 2023–2027 range may differ; use expected graduation 2027 until actual enrollment year is known |
| Unknown project years | Do not derive from GitHub update timestamps; leave unasserted until verified |
| Reference access | Browser review pending; initial direction comes from supplied brief, with original composition and copy |
| Theme migration | Old stored violet/neon choices conflict with requested palette; validate/remap values and avoid overwriting unrelated body classes |
| Legacy CSS | Global .hero and other names can collide; migrate sections intentionally and scope new styles |
| Dependency footprint | Multiple animation systems and unused 3D dependencies increase complexity; consolidate after usage checks |
| Asset quality | Some existing visuals are template placeholders; preserve files but do not portray them as screenshots |
| Tracked node_modules | Repo hygiene problem outside visual scope; no destructive cleanup during audit |
| SEO vs dialogs | Single-page dialogs do not automatically provide per-project crawler metadata; page-level portfolio SEO is the baseline |
| Deployment | Preserve Netlify build base and Firebase public directory; verify fallback behavior before changing routing |

The missing visual/product assets do not block foundation work. They remain explicit content gaps through final review. No new backend, CGPA, awards, adoption numbers or performance metrics will be invented.

## Audit deliverable status

- [x] Clone and inspect the actual repository.
- [x] Inspect package scripts, entry, section components, styling, appearance system, project data and deployment configuration.
- [x] Inspect existing portrait and preserve original assets.
- [x] Inspect public GitHub repositories and relevant READMEs.
- [x] Run baseline installation, lint and production build.
- [x] Create this plan before application redesign.
- [ ] Browser reference/visual inspection.
- [ ] Implementation milestones 1–9 (subsequent stage).
