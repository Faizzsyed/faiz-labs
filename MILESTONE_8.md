# Milestone 8 — Accessibility, performance and SEO

Completed: 6 October 2026 (Asia/Calcutta). Scope: Milestone 8 only. Progress: **8 / 9 complete — approximately 89%**.

## Starting state and scope

Started from the existing Milestone 7 working tree. Initial lint/build passed. Preserved the approved section layouts, copy, project records, interactions, resume and real captures. No deployment, push or Milestone 9 work was performed.

The connected Browser runtime had no available browser. QA used the existing local Chrome/Playwright setup against the actual production preview at `http://127.0.0.1:4173`. Axe-core and Lighthouse were installed only in `%TEMP%/faiz-portfolio-visual-check/m8-tools`, outside the application dependency tree.

## Accessibility findings and fixes

| Finding | Fix |
| --- | --- |
| Skip link appeared on Tab and changed the hash, but focus remained on BODY. | Make the main landmark programmatically focusable with `tabIndex={-1}`. Native anchor navigation now focuses MAIN without inserting an extra Tab stop. |
| Compact Field Map rendered “Related projects” as H4 directly below the section H2. | Use H3 in compact panels and retain H4 beneath the desktop domain H3. Preserve the existing appearance. |
| Brand, project rows, Field Map controls, theme toggle and palette close control had accessible names that omitted visible text. | Use native project-row names containing the visible title, description and metadata; native Field Map names with a visually hidden “domain” suffix; include the visible brand, theme and ESC text in their explanatory names. Decorative symbols remain hidden. |
| Hover/focus dimmed unselected Field Map nodes to 70% opacity. Light-theme metadata blended to approximately 2.88:1 contrast. | Raise only node opacity to 95%, giving approximately 4.70:1 in light and 7.77:1 in dark. Active cobalt states and the connector emphasis remain. |
| Technical grid crossings behind small PacePDF stage text could reduce contrast to approximately 4.05:1. Hero identity/role text could cross diagram strokes. | Reduce the stage grid line alpha from 10% to 6%, keeping the worst crossing above 4.5:1. Give the hero identity and role labels the existing paper background underneath their text. |
| Installed Framer Motion's `useReducedMotion` snapshots the preference at mount rather than subscribing to changes. An in-flight preview could continue after preference changes. | Add a small shared `useSyncExternalStore` hook with removable media-query listeners. All seven motion-sensitive components and MotionConfig use it. Cancel/reset preview RAF and transforms on reduced motion; reduced Work rows have no hidden initial state. |

### Semantics, keyboard and focus

- One logical H1 identifies Faiz Sayyed. Seven consistent H2 headings introduce the remaining main sections; H3 subsections and desktop Field Map H4 headings have appropriate parents. Dialog headings belong to their independent modal context.
- Header/main/footer landmarks, named main/footer navigation, native links/buttons, labelled sections and the native dialogs were reviewed. No unnecessary router or ARIA role was added.
- Keyboard checks passed for skip link, Work filters, all project dialogs, Field Map select/reset and related projects, Systems controls, mobile navigation, theme toggle, copy email, Back to top and command palette.
- Dialogs retain initial focus, Escape/cancel handling, Tab/Shift+Tab containment, scroll lock and trigger focus restoration. Palette arrows/search/Enter, empty results, shortcuts and mobile-menu handoff passed. Mobile navigation restores inert/overflow state when closed or resized.
- Existing global cobalt focus outlines remain visible. Menu, filter, dialog, palette and footer targets retain the prior minimum sizing; representative mobile controls were checked at 44px or larger.
- Copy success and unavailable/rejected clipboard paths announce status through the existing polite status region. Filter counts, Field Map selection, Systems mapping and palette results also retain their announcements.
- Real images have descriptive alternative text; decorative previews, cursor, progress line and diagrams remain hidden from assistive technology. SVG decoration does not replace the text controls or descriptions.

### Contrast and reduced motion

| Text token against main background | Light ratio | Dark ratio |
| --- | ---: | ---: |
| Body | 14.03:1 | 15.22:1 |
| Muted text/metadata | 5.22:1 | 8.49:1 |
| Cobalt text/focus color | 5.50:1 | 6.70:1 |

Cobalt against raised surfaces is 5.79:1 light / 5.90:1 dark. The search input already has a cobalt boundary. Interactive states use text, marks and cobalt outlines; neutral structural separators and background diagrams are decorative rather than the sole control/state cue. Disabled placeholder CTAs remain explicitly unavailable.

Reduced-motion startup tests cover immediate hero content, SVG paths, Work filters/previews, Field Map, trajectory, dialogs/palette, cursor and scroll behavior. Runtime preference switching also passed: preview RAF stops and its transform resets; filters, dialogs, domain selection and palette remain usable; movement returns when the preference is disabled.

## Performance and dependency audit

| Dependency | Decision |
| --- | --- |
| React, React DOM | Retain: mounted component/state/rendering architecture. |
| Framer Motion | Retain: approved reveals, paths, layout and presence transitions. |
| `@react-three/drei`, `@react-three/fiber`, `three` | Remove: no source imports or mounted 3D experience. |
| `aos`, `react-type-animation` | Remove: no source imports after prior consolidation. |
| `@tsparticles/react`, `@tsparticles/slim` | Remove with the unmounted ParticleBackground component. |
| `react-icons` | Remove with the unmounted DeveloperPresence component. |
| Vite, React Vite plugin, oxlint, React/React DOM types | Retain: existing build, lint and development tooling. |

Removed eight direct packages and 113 package entries, including transitive dependencies. Verified no imports remain. Retained lockfile versions did not change; `npm ls --prefix portfolio --depth=0` passes. Historical copies of the two retired components were saved outside the repo in the temporary QA folder before removal.

Removed the redundant AccentProvider wrapper from the mounted tree, avoiding unused state/context and an obsolete storage write. Its historical context/switcher source remains available but is not bundled. Other legacy components, template assets and App.css are not imported into the active tree; deleting unrelated historical work would not reduce production bytes. Canonical project data remains shared by Work, Field Map and PacePDF without duplicate content records.

Project dialog/palette code is small relative to the React/Motion runtime; the dialog is shared across sections. Baseline performance was already 99. Lazy-loading these small pieces would add extra request/focus coordination for little initial-bundle benefit, so no code splitting was introduced. Removing the legacy packages improves the installation/dependency surface; Vite had already excluded them from the production bundle, so no bundle-size reduction is claimed.

Final production assets: JS **376.57 kB / 116.88 kB gzip**, CSS **50.63 kB / 10.04 kB gzip**, hero portrait **22.54 kB**. Baseline JS was 375.41 kB / 116.49 kB gzip and CSS 50.07 kB / 9.95 kB gzip. The small increase covers the fallback page, metadata support and preference subscription.

### Images

| Real image | Dimensions | Size | Loading decision |
| --- | --- | ---: | --- |
| Faiz portrait | 400 × 400 | 22,542 bytes | Keep eager/high priority. Add HTML preload that Vite resolves to the same hashed hero image URL. |
| AttendAI capture | 1024 × 551 | 80,745 bytes | Lazy, async decode; correct intrinsic dimensions. |
| Passport Photo Studio capture | 1270 × 795 | 56,729 bytes | Lazy, async decode; correct intrinsic dimensions. |
| PaperForge artwork | 800 × 800 | 107,122 bytes | Lazy, async decode; correct intrinsic dimensions. |

Project visuals retain their fixed parent aspect ratio. Verified natural dimensions against the actual rendered image resources. No image conversion or regeneration was justified. PacePDF placeholders remain placeholders. The same real portrait is copied unchanged to the stable public social-image path; it is not downloaded twice by the homepage.

### Runtime cleanup

Reviewed effect setup/cleanup for cursor pointer/scroll/blur/media listeners, Navbar scroll/menu/resize listeners, active-section IntersectionObserver, scroll-progress ResizeObserver, dialog lifecycle, command shortcut, clipboard timer and preview RAF. Existing cleanup was sound; preview cancellation on preference change was added. Cursor/preview/progress use refs and bounded RAF rather than pointer-driven React rendering. Navbar updates only the scrolled boolean; active navigation uses IntersectionObserver. Theme persistence uses an effect and handles denied storage; no theme listener loop was added. Resize handling cleans up observers/menu state. Browser regression exercised repeated opening/closing and desktop/mobile resize handoff; no runtime errors or resource failures were observed.

## SEO, social metadata and fallback

- Title: **Faiz Sayyed — Engineer, Full Stack Developer & Product Builder**.
- Natural description names Electronics & Computer Science, React, Node.js, Flutter, Python, real software products and PacePDF.
- Added valid `robots.txt`, index/follow metadata, Open Graph title/description/type/URL/site name/image and image dimensions/alt text.
- Twitter uses the square-image `summary` card with title/description/image/alt. No username was invented.
- Canonical and `og:url`: **https://faiz-labs.netlify.app/**. Deployment files contain no conflicting canonical domain.
- Minimal parseable Person JSON-LD uses verified name, website, role/description, GitHub and LinkedIn. No employer, awards, ratings or unsupported education claims.
- Replaced the template lightning favicon with a small SVG FS mark in the established palette. Viewport already permits zoom. Added theme-color and synchronized it during prepaint and theme toggling. No existing apple-touch icon or manifest exists; no missing references or PWA were added.
- Added a small themed NotFound page for non-home pathnames, with one H1, return link and noindex metadata. `/`, `/index.html` and hash navigation retain the portfolio; no routing library was introduced.
- Netlify now explicitly rewrites unmatched paths to `/index.html` without forcing rewrites over existing files. Firebase's existing SPA rewrite and asset cache configuration remain unchanged. Local fallback, return navigation, real static resources and `/index.html#work` passed.
- Hosting rewrites return HTTP 200 for unmatched SPA paths, so this is a client-rendered fallback, not a server 404 status. Hosting configuration was inspected; no deployment or hosted cache/social-crawler validation was performed.
- Reviewed mounted user-facing copy and links. Existing “capture pending,” unlisted years and disabled store action are intentional verified-data boundaries. Approved copy was not rewritten.

## Automated checks and regression evidence

Real Lighthouse CLI **13.5.0** ran against the production preview in headless Chrome, with default simulated mobile throttling (412 × 823, 4× CPU, 150ms RTT). Local measurements are lab results rather than guarantees for the hosted site.

| Lighthouse category | Baseline | After hardening |
| --- | ---: | ---: |
| Performance | 99 | 99 |
| Accessibility | 100 | 100 |
| Best practices | 100 | 100 |
| SEO | 83 | 100 |

Measured FCP approximately 1.5s, LCP approximately 1.8s, CLS 0 and TBT approximately 10ms. The baseline accessible-name diagnostic was unscored despite the 100 accessibility score; that diagnostic now passes. Description/robots failures and the LCP discovery diagnostic were resolved. Remaining advisory items are about 51 KiB of route/session-unused JS, the JS/CSS dependency chain and approximately 150ms estimated render-blocking CSS savings. They do not justify replacing the approved Motion architecture or adding complicated critical-CSS machinery at this milestone.

- **46 axe scans:** all five requested widths in light/dark, covering page, selected Field Map, open project dialog, command palette and mobile menu. Zero reported violations. Automated contrast checks have incomplete results for some patterned/positioned text and decorative glyphs; actual token, opacity and grid-composition ratios were checked manually. Skip-link manual review passes even when the background is inert under the mobile menu. These checks do not constitute assistive-device certification.
- **20 metadata/fallback cases:** 320/390/768/1024/1440 × light/dark × reduced/default motion. Title, description, canonical, social tags, JSON-LD, theme-color, static assets, PDF signature, real image dimensions/loading, skip focus, fallback noindex/return and direct index/hash routing passed. Storage-denied theme toggling passed separately.
- **26 responsive cases:** representative widths, 700/701, 900/901, 1050/1051, 1100/1101, 1200/1201 breakpoint boundaries, short heights down to 320px and desktop up to 1920px. Hero, rows, all six dialogs, palette scrolling, menu/targets, section geometry and no horizontal overflow passed; dark/default-motion representative cases passed.
- Previous Work/PacePDF, Field Map, trajectory/experience/Systems and completion suites passed. Checks include filter counts, canonical related-project mappings, missing-link handling, keyboard interaction, focus return, clipboard success/failure, CV popup/download, menu/palette handoff, theme reload persistence, active navigation, progress, Footer and cursor. All six previews passed viewport bounds at 1101/1280/1440/1920 and short heights of 400/600px; resize cleanup passed.
- Runtime preference-change test passed. New fallback screenshots at 320px and 1440px were visually inspected. Browser suites reported no application console errors, failed resources or introduced warnings.

Raw local reports/scripts/screenshots are in `%TEMP%/faiz-portfolio-visual-check`: `m8-before-lighthouse.json`, `m8-final-lighthouse.json`, `m8-before-axe.json`, `m8-after-axe.json`, `m8-metadata.json`, and `m8-run-*.cjs`. Existing temporary test selectors were updated for the improved native accessible names; behavioral assertions were retained. Tooling is not an application dependency.

## Files changed in this milestone

Relative to the supplied working state:

- `portfolio/index.html`, `portfolio/package.json`, `portfolio/package-lock.json`, `netlify.toml`.
- Public assets: updated `portfolio/public/favicon.svg`; added `faiz-portrait.jpg` and `robots.txt`.
- `portfolio/src/App.jsx`, `main.jsx`, `pages/Home.jsx`, new `pages/NotFound.jsx`, new `hooks/useReducedMotion.js`, `context/ThemeContext.jsx`, `data/projects.js`.
- Components: `CommandPalette.jsx`, `FieldMap.jsx`, `FieldMapPanel.jsx`, `FieldNode.jsx`, `Hero.jsx`, `Navbar.jsx`, `PacePdfFeature.jsx`, `ProjectDialog.jsx`, `ProjectPreview.jsx`, `ProjectRow.jsx`, `ProjectVisual.jsx`, `ThemeToggle.jsx`, `Trajectory.jsx`.
- Styles: `field-map.css`, `hero.css`, `pacepdf.css`, new `not-found.css`.
- Removed unused `DeveloperPresence.jsx` and `ParticleBackground.jsx` after confirming no active consumers.
- Added `MILESTONE_8.md`; updated `PROJECT_PROGRESS.md`. Other milestone working changes remain preserved.

## Validation and remaining limitations

`npm run lint --prefix portfolio`: **PASS**. `npm run build --prefix portfolio`: **PASS**, no introduced build warnings/errors. Retained dependency versions and resume/project content were preserved.

No blocking issue remains in Milestone 8. Chrome automation does not replace testing with physical assistive devices or other browser engines. Social assets and fallback were validated locally, not on an undeployed remote version. Client-side 404 status and Lighthouse advisories are documented above. Real PacePDF captures/store URL remain pending as before, without fabricated replacements.

**Milestone 8 complete. Milestone 9 remains not started.**
