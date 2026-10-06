# Milestone 4 — Field Map

Completed 6 October 2026. Progress: **4 / 9 complete**. No milestone 5 or later section was started.

## Files changed

- `portfolio/src/pages/Home.jsx`: imports and mounts FieldMap after PacePDF.
- `PROJECT_PROGRESS.md`: created because it did not previously exist; records four completed milestones and the five remaining stages.

## Files created

- `portfolio/src/data/fieldMap.js`
- `portfolio/src/components/FieldMap.jsx`
- `portfolio/src/components/FieldNode.jsx`
- `portfolio/src/components/FieldMapPanel.jsx`
- `portfolio/src/styles/field-map.css`
- `MILESTONE_4.md`
- `PROJECT_PROGRESS.md`

No application dependency, project metadata, original image, deployment configuration, hero, navigation or Work implementation was changed. SHA-256 comparisons of Hero, Navbar, Projects, PacePdfFeature and their three section styles confirm byte-for-byte preservation of the approved files.

## Architecture and domain content

FieldMap owns domain selection, temporary pointer/focus highlighting and its related-project dialog state. FieldNode renders either a desktop branch or a responsive accordion row. FieldMapPanel resolves related projects by ID from the canonical `data/projects.js`; titles, descriptions, technology and detail imagery are not duplicated in the map data.

`fieldMap.js` stores domain ID, index, label, category marker, focus, description, tool labels, project associations, desktop position and connector path. Descriptions are deliberately concise. Domain tools describe areas of practice/exploration, not a claim that every associated project uses every listed tool.

| Domain | Tools | Existing project associations |
| --- | --- | --- |
| WEB | React, Node.js, Express, MongoDB, Firebase | Connectwell, AttendAI Pro, PaperForge |
| AI | Python, Computer Vision, Local AI, Ollama | Passport Photo Studio (OpenCV alignment assistance); PaperForge (optional AI integrations) |
| MOBILE | Flutter, Dart | PacePDF |
| IOT | ESP32, Sensors, Automation | IoT Plant Monitoring |
| ENGINEERING | Electronics, Computer Science, Embedded Systems, System Design | IoT Plant Monitoring |

AttendAI is intentionally excluded from the AI association: its verified current project record identifies face recognition as future scope. Passport's OpenCV features and PaperForge's optional AI integration provide truthful relationships to existing selected work. No new project, award, released AI feature or project metric was invented.

## Desktop interaction

- Asymmetric schematic with five DOM branch controls, SVG orthogonal connectors, a central FS interface, coordinate ticks, labeled paths and restrained technical grid.
- Hover or keyboard focus highlights the direct tools and connector, slightly dims unrelated branches and leaves the locked information panel tied to the selected domain.
- Clicking or pressing Enter/Space selects a domain. Clicking the selected domain again resets it. Clear / reset removes selection and temporary highlighting.
- The panel includes domain, focus, tools, description and related projects. Each related-project button opens the existing ProjectDialog component with the canonical project object.
- The existing Work component and its dialog flow remain untouched. The map has a separate instance of the same reusable dialog; background inertness prevents simultaneous user interaction with both.
- All connector paths draw once when the schematic enters the viewport. Interaction only changes stroke/opacity; there are no perpetual path animations.

## Tablet and mobile

- At widths up to 1050px the desktop SVG/DOM graph is hidden and replaced by an accordion representation, retaining the same domain/selection data.
- Tablet above 700px: two columns with a central technical spine and short branch ticks.
- Mobile at 700px and below: one column, vertical spine and small square junction markers. Domain tools remain readable even when its description/project panel is collapsed.
- Only one domain is expanded at a time. Tap the active row or Clear / reset to collapse it.
- The information panel becomes an inline expansion, with related-project actions using the existing full-screen mobile dialog.
- Desktop and responsive controls have separate DOM representations but CSS exposes only the appropriate version to the accessibility tree and keyboard navigation. Mobile aria-controls IDs are unique.

## Accessibility

- Main domain controls and project actions are native buttons with visible inherited focus styles and at least 44px interaction height.
- Desktop uses aria-pressed and references the shared information panel. Accordions use aria-expanded and aria-controls.
- Selection is announced by a concise polite, atomic status message. Hover does not cause unsolicited announcements.
- SVG paths, center mark and coordinate details are decorative and aria-hidden.
- Related-project dialogs reuse the established accessible label, close focus, forward/backward Tab wrapping, Escape close, body scroll lock and focus return.
- Reduced motion makes paths fully drawn immediately and retains instant selection. No parallax was added, so touch and reduced-motion users have no pointer motion to disable.

## Performance choices

- React/DOM/SVG plus the existing Framer Motion dependency; no graph, canvas or physics library.
- No pointermove handler, React mouse-coordinate state, continuous animation, animation loop or parallax.
- Selection and pointer/focus entry are the only map interaction state updates. The five connector paths use a shared once-only viewport reveal.
- Map styling is scoped to field-prefixed classes; existing Hero/Work/PacePDF styles are unchanged.

## Validation

- `npm run lint --prefix portfolio`: clean, no warnings/errors.
- `npm run build --prefix portfolio`: successful.
- Production preview inspected in local headless Chrome at desktop 1440px, tablet 768px, mobile 390px and small mobile 320px. Connected Browser tooling was unavailable earlier in this session, so the established temporary Playwright tooling was reused without app dependency changes.
- Five accessible domain controls at each width; desktop hover highlights direct paths/tools and dims unrelated branches.
- Selection, selected-domain toggle, reset, Enter and Space verified. Status message updates with the selected domain.
- All domain mappings checked; AI does not claim AttendAI recognition features.
- Related PacePDF opens the correct project details, locks scrolling, contains keyboard focus, closes with Escape and returns focus to the related-project button.
- Responsive fallback uses two tablet columns and one mobile column. No horizontal overflow at tested widths.
- Reduced-motion SVG paths are fully drawn with zero dash offset; selected Web connector resolves to cobalt.
- No console warnings/errors, page errors or failed resources in the Field Map checks.
- Existing Milestone 3 interaction regression checks passed against the new production build: work filters, preview, project opening, dialog focus/close, mobile layouts and PacePDF placeholder/store behavior remain intact.
- Seven approved Hero/Navbar/Work/PacePDF source and style files passed byte-for-byte hash comparison.
- Only index, work, pacepdf and field-map are mounted. Existing deployment files and manifests remain intact.

## Unresolved issues

No unresolved Field Map implementation issue. Existing content gaps, including PacePDF captures/store URL and unlisted project years, remain as recorded in Milestone 3; this milestone does not fabricate them or start later work.
