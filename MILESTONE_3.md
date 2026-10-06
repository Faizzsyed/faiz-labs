# Milestone 3 — Selected Work and PacePDF

Implemented 6 October 2026. Only the Work section and PacePDF case study were added. The approved hero, navigation implementation, design tokens, original images, manifests and deployment configuration remain unchanged. Field Map, Trajectory, Skills, Contact and Command Palette were not started.

## Files changed

- `portfolio/src/pages/Home.jsx`: mounts Projects and PacePdfFeature after the approved hero.
- `portfolio/src/components/Projects.jsx`: replaces the legacy project cards with the editorial work index, filters, preview and detail dialog.
- `portfolio/src/data/projects.js`: canonical content for six selected projects, feature descriptions and PacePDF story.

## Files created

- `portfolio/src/components/ProjectRow.jsx`
- `portfolio/src/components/ProjectPreview.jsx`
- `portfolio/src/components/ProjectVisual.jsx`
- `portfolio/src/components/ProjectDialog.jsx`
- `portfolio/src/components/PacePdfFeature.jsx`
- `portfolio/src/styles/work.css`
- `portfolio/src/styles/pacepdf.css`
- `portfolio/src/data/projectArchive.js`: the preceding project data retained for reference; not imported into the public site. Its historical descriptions/statuses/URLs are not the canonical source.
- `MILESTONE_3.md`

No application dependencies added or removed. Browser verification uses the temporary Playwright installation from milestones 1–2.

## Canonical content structure

`projects` is the ordered source shared by the work list, previews and dialogs:

1. PacePDF
2. Connectwell Digital Marketing Platform
3. AttendAI Pro
4. Passport Photo Studio
5. IoT Plant Monitoring System
6. PaperForge (an existing portfolio project with a verified public repository)

Fields include stable `id` and `number`, title/fullTitle, descriptor, category, filter associations, nullable year, technology list, status, description, role, features, nullable GitHub/live/store links, image/alt/caption, link-audit states, attribution and source notes. PacePDF also contains `screenshots: []` ready for actual captures. `paceFeatures` and `paceStory` hold its eight workflows and three narrative blocks. Historical project exports are retained in the archive; the old component import names have compatibility aliases in the canonical file.

Filters: All, Web, Mobile, Python, IoT. The current category counts are 6, 3, 1, 1 and 1. Stable project numbers remain the same when filtering. Unknown project years are explicitly unlisted; update timestamps were not used as release dates. PacePDF's 2026 year follows the supplied milestone example; IoT's year follows the supplied exhibition details.

Source quality:

- AttendAI's public README confirms the MERN application. The old face-recognition/Python claims are removed from the displayed content because the README lists those as future scope.
- Passport Photo Studio's public README confirms Python/Flet/Pillow/OpenCV, local processing and its current development status. It credits Faiz Sayyed as developer; the dialog preserves the repository host's attribution.
- PaperForge's public README confirms React/Node/Express document tooling. No download numbers, user counts, performance improvements, reviews or revenue claims were added.
- Connectwell and IoT use supplied facts. Role wording describes implementation areas without inventing leadership positions, client results or awards.
- PacePDF's shipped/production status and local-first workflows are user-supplied. A public store listing has not been verified because its URL is missing.

## Link audit

Audited existing repository links through GitHub's public API before implementation. The existing portfolio live URL returned HTTP 200. A valid repository means publicly accessible during this audit, not a guarantee of any release or feature completeness. Missing and invalid links are stored as null in canonical data and never rendered as public links.

| Selected project | GitHub | Live | Store |
| --- | --- | --- | --- |
| PacePDF | Missing | Missing | Missing |
| Connectwell | Invalid — prior URL returned 404; canonical URL null | Missing | Missing |
| AttendAI Pro | Valid — https://github.com/Faizzsyed/attendai-pro | Missing | Missing |
| Passport Photo Studio | Valid — https://github.com/ProfMohsinKhan/Passport-size-photo-maker | Missing | Missing |
| IoT Plant Monitoring | Missing | Missing | Missing |
| PaperForge | Valid — https://github.com/Faizzsyed/paperforge | Missing | Missing |

All preceding project entries were accounted for, including those retained only in the archive:

| Archived project | GitHub | Live | Store |
| --- | --- | --- | --- |
| PDF Tools (legacy PacePDF record) | Missing | Missing | Missing |
| Durabedz | Missing | Missing | Missing |
| Whispers in the Dark | Missing | Missing | Missing |
| Alien OS | Valid — https://github.com/Faizzsyed/jadoo_os | Missing | Missing |
| Birthday Letter Creator / WishCraft | Valid — https://github.com/Faizzsyed/wishcraft | Missing | Missing |
| Green / Red Flag | Valid — https://github.com/Faizzsyed/green-redflag | Missing | Missing |
| Hell Girl Inspired Experience | Missing | Missing | Missing |
| Personal Portfolio | Valid — https://github.com/Faizzsyed/faiz-labs | Valid — https://faiz-labs.netlify.app | Missing |

The public Google Play button is disabled with a short explanation. Add the real listing to `pacePdf.playStoreUrl` to activate it. No fake URL, search link or broken GitHub CTA is substituted.

## Image audit and PacePDF visual status

| Existing asset | Decision |
| --- | --- |
| `public/projects/attendai.jpg` | Use existing landing-page capture, with descriptive alt text |
| `public/projects/passport-photo-studio.png` | Use existing desktop dashboard capture |
| `public/projects/paperforge.jpg` | Use and label as existing project artwork; not described as a verified app screenshot |
| `public/projects/connectwell.jpg` | Preserved; omitted from published visuals because its promotional composition includes unverified adoption/performance metrics |
| `public/projects/passport_photo_studio.jpg` | Preserved promotional artwork; actual dashboard capture preferred |
| `public/projects/pdf-tools.png`, `pdfmate_mark.png` | Legacy PDF Tools logo assets, not PacePDF app screenshots; preserved without relabeling them as the new app's UI |
| `public/projects/wishcraft.jpg` | Existing artwork retained with archived project; not added to selected list |
| Small shared purple geometric images | Preserved; not presented as product captures |

No real PacePDF screenshots were found in src/assets or public. The feature uses clearly labeled device shells: Home & tools, Page operations and Saved outputs. The screens contain only editorial placeholder typography and explicit capture-pending text, with no fabricated app interface. The work preview and PacePDF dialog likewise show intentional editorial placeholders. IoT and Connectwell have capture-pending placeholders.

To replace PacePDF placeholders, add real files under `portfolio/public/projects/pacepdf/` and populate `screenshots` with `{ src, alt, label }` records. No raster files were created, edited or deleted by this milestone.

## Desktop interactions

- Ruled horizontal rows with oversized titles, always-visible category/year/stack/status and stronger PacePDF treatment.
- Restrained title shift, border reveal and directional arrow reaction; essential information never depends on hover.
- Dedicated sticky preview rail: images change on row entry and subtly follow pointer direction with interpolation. Pointer moves update refs and requestAnimationFrame transforms, not React state. Frames stop once interpolation settles; unmount cancels pending work.
- Preview is aria-hidden and pointer-events none, occupies space outside row text and has viewport-height constraints. No modal or preview physics library.
- Category filtering uses Framer Motion opacity/layout transitions with stable numbering and an announced result count.

## Modal behavior and accessibility

- Each project row is a real button with a descriptive accessible name and aria-haspopup dialog.
- Native showModal creates a modal top layer and makes the background inert. Heading and description label the dialog.
- Close receives focus on opening. Explicit forward/backward Tab wrapping supplements native behavior and keeps keyboard traversal in the controls.
- Escape, close button and desktop backdrop dismiss. Body scroll locks while open, preserves its preceding value and restores the initiating row's focus without unwanted scrolling.
- Dialog includes role, technologies, features and an image or honest placeholder. Only valid known links are shown; Passport repository attribution is retained.
- Missing screenshot previews are labeled. Floating previews are decorative only. Real detail images have descriptive alt text and lazy loading/error fallback.
- Reduced motion disables pointer interpolation, removes transforms and durations, and retains static access to all content.

## Responsive decisions

- Desktop preview rail only above 1100px on fine-hover pointers. Touch events cannot activate it.
- Tablet keeps roomy rows without the preview rail; the device group reduces to two frames.
- Mobile stacks project number, title, descriptor and metadata; uses a full-screen, scrollable detail dialog and a sticky close strip.
- Mobile PacePDF displays one strong device shell at a time, stacked metadata and a two-column feature matrix. Narrative blocks become vertical.
- The original hero and navbar styles remain intact. The navigation's existing observer now recognizes the Work section; PacePDF remains under the work experience rather than adding an unrelated navigation item.

## Verification

- Lint: clean, no warnings or errors.
- Production build: successful.
- Production preview checked in local headless Chrome at 1440px desktop, 768px tablet, 390px mobile and 320px small mobile.
- All five filters return expected projects in stable order.
- Desktop hover preview loads a real capture, responds through transforms, remains in the viewport and does not overlap project rows.
- Enter opens a row; Tab stays within dialog controls; Escape closes; focus returns to the row; body scroll is restored.
- Mobile rows and full-screen dialog have no horizontal overflow at 320px or 390px; preview rail is hidden and one product device is displayed.
- Connectwell has no broken GitHub/live links; Google Play button is disabled; no fabricated PacePDF screen images are present.
- Reduced-motion check: auto scroll behavior, hidden custom cursor, no preview interpolation, near-zero CSS transitions.
- No console warnings/errors, page errors or failed network resources in the responsive checks.
- Additional checks passed for reverse Tab wrapping, the actual Passport repository CTA, the PacePDF story link closing its dialog, and preview containment in a 500px-high desktop viewport.
- Only index, work and pacepdf are mounted as main sections. Deployment and package manifests remain untouched.

## Outstanding inputs

- PacePDF's real Google Play listing, source link if public, and actual app screenshots.
- Verified Connectwell repository/live link and metric-free actual screenshots.
- IoT photographs or documentation and a repository/demo URL if available.
- Project years not supplied for Connectwell, AttendAI, Passport Photo Studio and PaperForge.

Missing inputs do not result in invented claims or public broken links. Milestone 4 has not begun.
