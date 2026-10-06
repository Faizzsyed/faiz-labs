# Milestones 1 and 2

Implemented 6 October 2026. Scope: design foundation, navigation, hero only.

## Foundation

- Warm ivory, charcoal, cobalt and gray technical-line tokens in `portfolio/src/index.css`.
- Local web-safe Arial/Helvetica display/body and restrained monospace labels; no font network requests.
- Reusable spacing, typography, radii, layering, container, focus, selection and scrollbar styles.
- Sticky FS navigation with scroll-state background and active-section observer. Index is the only mounted section; Work, Trajectory, Field Map and Contact point to future IDs by design.
- Mobile navigation uses an expandable, non-modal panel with an accessible button and Escape focus return.
- Accent context retained; this stage intentionally validates/migrates the stored accent to cobalt. No theme switcher or dark-theme feature has been started.
- Custom cursor architecture retained with subtle dot/ring, ref-based transform updates and listener/frame cleanup. Disabled for coarse pointer, no hover and reduced motion.
- Artificial 2.5-second loading delay removed. Framer Motion uses the user's reduced-motion preference.

## Hero

- Original root `profile.jpg` preserved. `portfolio/src/assets/faiz-hero.jpg` is a byte-for-byte semantic copy.
- Portrait keeps its natural proportions. CSS framing removes the original upper/lower bands; no raster retouching or generated imagery.
- Oversized masked FAIZ / SAYYED name, statement, category labels, identity/location metadata and three-part information strip.
- Grid, circles, crosshairs, line paths and blue square nodes are separate aria-hidden SVG/DOM decorations.
- Short, once-only name, portrait, metadata and SVG-path entrances; reduced motion renders immediately.
- Mobile stacks copy, portrait and information; simplifies technical geometry and converts the strip to readable rows. Small-screen font sizing was corrected after a 320px overflow check.
- The scroll CTA targets `#hero-notes`, a small hero end marker, until later sections are built.

## CV placeholder

Expected URL: `/faiz-sayyed-cv.pdf`.
Expected asset: `portfolio/public/faiz-sayyed-cv.pdf`.
Configuration: `portfolio/src/data/navigation.js`, `cv.available = false`.

No real CV asset exists in public. The navbar shows an explicitly unavailable CV item instead of requesting a missing file. Add the real resume and set available to true to enable downloading.

## Scope preservation

Home mounts only navigation, cursor and hero for this stage. Existing About, Projects, Skills, Experience, Contact, Footer, DeveloperPresence, ParticleBackground, Spotlight and Loader source files remain available. No later section, case study, map, theme UI or command palette was implemented. ParticleBackground's existing unused-parameter lint warning was safely fixed.

No application dependency was added or removed. No manifests or lockfiles changed. No Netlify/Firebase configuration or original project assets changed. No push or deployment was performed.

## Validation

- Milestone 1: lint clean, production build successful before proceeding to hero.
- Milestone 2: lint clean, production build successful.
- Local headless Chrome inspection because the connected Browser runtime exposed no available browser. Playwright was installed only in a temporary tooling folder, not in this app.
- Desktop 1440px, tablet 768px, mobile 390px and small mobile 320px: screenshots inspected; portrait loads; no horizontal overflow, console errors/warnings, JavaScript errors or failed resources.
- Mobile/tablet menu opens, Escape closes it and restores toggle focus.
- Scroll CTA resolves to the hero end marker.
- Reduced-motion mobile: smooth scrolling disabled, custom cursor hidden and name transforms absent.
- Only `index` is mounted as a main section, confirming milestone scope.
- Repeated the responsive, menu, scroll and reduced-motion checks against the production preview on port 4173; all passed. `git diff --check` is clean.

Outstanding content: real CV. Future-section anchors intentionally await later milestones. Existing dependency audit findings from the audit plan were not changed by these visual milestones.
