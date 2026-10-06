# Milestone 9 — Final QA and production readiness

Completed: 6 October 2026 (Asia/Calcutta). **9 / 9 COMPLETE — 100%. READY FOR DEPLOYMENT.**

## Final audit summary

Inspected git status/diff, all milestone documentation, progress, package manifests, deployment configuration, public assets and the starting lint/build before cleanup. The supplied working tree contained the completed rebuild and uncommitted milestone work. Approved layouts, content, architecture and interactions were preserved. No commit, push or deployment was performed.

The connected Browser runtime still exposed no browser. Reused the existing temporary Chrome/Playwright, axe and Lighthouse tooling against the actual production preview at `http://127.0.0.1:4173`. QA tooling and reports remain outside the application and repository in `%TEMP%/faiz-portfolio-visual-check`.

## Content and PacePDF audit

Verified mounted content and the actual one-page resume PDF:

- Faiz Sayyed; `faizusayed256@gmail.com`; GitHub `https://github.com/Faizzsyed`; LinkedIn `https://www.linkedin.com/in/faizsayyed-tech`; canonical `https://faiz-labs.netlify.app/`.
- Diploma in Information Technology, Thakur Polytechnic, Kandivali, Mumbai, completed 2023. B.E. Electronics & Computer Science, Shree L. R. Tiwari College of Engineering, expected 2027. The timeline displays the 2023–2027 range; the resume explicitly says “Expected 2027.”
- Python Developer Intern at Codec Technologies, Mar 2026–Present; Software Tester Intern at Elite Forums, Dec 2024–Jan 2025. Dates and responsibilities match shared data and the resume.
- Six canonical projects: PacePDF, Connectwell, AttendAI Pro, Passport Photo Studio, IoT Plant Monitoring System and PaperForge. The IoT row intentionally uses its shorter title; the detail dialog uses the full name. Connectwell likewise retains its full title in details.
- No accidental debug/developer text, typo requiring correction or inconsistent factual claim was found in mounted content. Deliberate capture-pending/unlisted-year labels remain. Experience responsibility text appears in both the journey and experience sections intentionally, sourced from one shared record.

PacePDF remains featured and marked **Shipped product** with Android / Flutter / Dart metadata. Verified all eight workflows: Merge, Split, Organize, Remove, Watermark, Sign, Files and Share. `screenshots: []` and `playStoreUrl: null` remain. Device shells explicitly identify screenshot placeholders; the store button is disabled, and dialogs publish no store link. No ratings, users, downloads, reviews, revenue, screenshots or URLs were fabricated.

## External-link audit

Checked on 6 October 2026 using web reads and direct HTTP requests, plus local production browser/resource checks. The current hosted site is separate from this undeployed build.

| Target | Classification | Evidence / treatment |
| --- | --- | --- |
| [GitHub profile](https://github.com/Faizzsyed) | VALID | HTTP 200; correct supplied identity. |
| [AttendAI Pro](https://github.com/Faizzsyed/attendai-pro) | VALID | HTTP 200; visible repository CTA. |
| [PaperForge](https://github.com/Faizzsyed/paperforge) | VALID | HTTP 200; visible repository CTA. |
| [Passport Photo Studio](https://github.com/ProfMohsinKhan/Passport-size-photo-maker) | VALID | HTTP 200; correct host and existing developer attribution retained. |
| [LinkedIn](https://www.linkedin.com/in/faizsayyed-tech) | VALID supplied destination; availability unverified | Matches user's verified URL and resume annotation. Automated access returns HTTP 999; this does not establish a broken profile. |
| Canonical portfolio root | VALID | `https://faiz-labs.netlify.app/` returns HTTP 200. |
| `/Faiz_Sayyed_Resume.pdf` | VALID in build; MISSING on current host | Local HTTP 200, real `%PDF-` signature, 149,083 bytes, one page, parsed identity/education/experience and correct URI annotations. Navbar/Footer popup and palette download passed. Current hosted path returns 404; publish the new build and recheck. |
| `mailto:faizusayed256@gmail.com` | VALID | All mounted email targets and resume annotation match the supplied address; mail delivery was not tested. |
| Old Connectwell repository | BROKEN; INTENTIONALLY HIDDEN | `https://github.com/Faizzsyed/connectwell-digital` still returns 404. Canonical github remains null; no broken CTA is visible in the build. |
| Other missing project repositories | MISSING; INTENTIONALLY HIDDEN | PacePDF and IoT github values remain null. |
| Project live URLs | MISSING; INTENTIONALLY HIDDEN | All six live values remain null; no invented CTAs. |
| PacePDF Play Store URL | MISSING; action disabled | Null data, disabled feature button, no navigable store CTA. |
| Social image | VALID in build; MISSING on current host | `https://faiz-labs.netlify.app/faiz-portrait.jpg` references the real 400×400 portrait. Local HTTP 200 and correct image bytes; current hosted path returns 404 until the new artifact is published. |

All visible local/build CTAs resolve to real resources or the verified external destinations above. The only external availability limitation is LinkedIn's automated-access restriction. Recheck hosted CV/social paths after deployment; do not interpret local readiness as an already completed deployment.

## Navigation and interaction QA

Twelve final system cases at 390/768/1440px × light/dark × reduced/default motion passed content assertions and all eight navigation destinations. Checked command-palette destinations, hash updates, settled scroll positions with fixed-header offsets, heading focus, active navigation ownership, browser back/forward, native Navbar links and Back to top. Ordinary history/navigation does not introduce unnecessary forced focus.

Existing regression suites were rerun successfully:

- Navbar/menu: opening, Escape, Tab/Shift+Tab containment, inert background, scroll lock, focus return, desktop resize cleanup and palette handoff.
- Palette: Ctrl+K/Cmd+K, arrow navigation, search, empty results, Enter, close/cancel, focus return, section commands, theme and PDF download.
- Work: All/Web/Mobile/Python/IoT counts, keyboard activation, real preview switching/bounds, all six native dialogs, sticky close controls at scroll extremes, Escape, Tab containment and trigger restoration.
- PacePDF: intentional placeholders, disabled missing store action, metadata/workflows and story navigation.
- Field Map: five domains, desktop hover/focus connections, keyboard selection/reset, mobile expansion, announcements and canonical related-project dialogs.
- Trajectory/Experience/Systems: six milestones, two experience roles, six groups, 20 technologies, supplied dates, aspiration labeling, Enter/Space interaction and canonical mappings.
- Contact/Footer: copy success, missing/rejected clipboard paths, status timeout, links, CV popup/download, Back to top focus and wrapping.
- Theme reload persistence, storage-denied toggling, eligible cursor states, touch/reduced cursor suppression, active navigation and full scroll progress.

No application console errors, failed local resources, horizontal overflow or broken interactions were reported by the passing suites. Keyboard coverage includes Tab, Shift+Tab, Enter, Space, Escape, arrows, Ctrl+K and Cmd+K where supported.

## Responsive, theme and motion QA

All required minimum viewports passed:

`320×568`, `360×800`, `390×844`, `430×932`, `768×1024`, `1024×768`, `1280×800`, `1440×900`, `1600×900`, `1920×1080`.

The reused responsive suite covered **26 cases**, also including short mobile `320×320`/`390×360`, short desktop `1440×400`/`1440×600`, short tablet `768×480`, and relevant breakpoint boundaries. Checked heading fit, portrait crop, row metadata, dialog close bounds, palette scrolling, menu targets, email/footer wrapping, PacePDF matrix/placeholders, Field Map/timeline adaptation and absence of horizontal overflow. Dark/default-motion checks passed at 320/390/768/1024/1440px. Screenshots of mobile Contact, tablet PacePDF and desktop Field Map were visually inspected.

Both themes passed across mobile/tablet/desktop, including dialogs, palette, Field Map, Contact, Footer, real image previews and unchanged portrait filtering. The existing contrast fixes and focus styling remain. Body/muted/cobalt ratios against the main background remain 14.03/5.22/5.50 light and 15.22/8.49/6.70 dark; dimmed Field Map metadata remains above 4.5:1.

Reduced-motion startup and runtime switching passed. Essential content remains available; SVG paths are immediately complete, cursor is hidden, smooth scrolling is disabled, previews cancel/reset their movement, and filters/dialogs/palette/Field Map remain functional. Re-enabling motion restores eligible preview movement without a page reload.

## Accessibility QA

Reused axe tooling for **46 new scans** at 320/390/768/1024/1440px in both themes, covering the full page, selected Field Map, project dialog, palette and mobile menu. **Zero reported violations, including zero serious/critical violations.** Saved raw results as `m9-axe.json`.

Heading structure, named landmarks, main skip-link focus, visible/accessibility names, focus order/restoration, dialog semantics, polite status regions, keyboard access and mobile touch targets passed browser checks. Axe retains manual-review/incomplete contrast results for some patterned/positioned text and decorative glyphs; token/opacity composition and prior pattern fixes were reviewed rather than treating automated scores as certification. Physical assistive devices and non-Chrome browser engines were not tested.

## Performance QA

Production bundle remains unchanged after unused-file cleanup:

- JS **376.57 kB / 116.88 kB gzip**.
- CSS **50.63 kB / 10.04 kB gzip**.
- Hero portrait **22.54 kB**, eager/high priority with a preload resolving to its actual hashed URL.
- Project images retain lazy loading, async decode, correct intrinsic dimensions and fixed visual containers.

Reviewed imports, data sharing, event listeners, media subscriptions, RAF, timers and Intersection/ResizeObserver cleanup. Cursor/preview/progress remain ref/RAF based; active navigation uses IntersectionObserver. No animation/state architecture was replaced for insignificant savings. Shared canonical data avoids inconsistent copies. The portrait's public/source duplication is intentional for a stable social URL plus hashed/preloaded hero; the page loads only its hero resource. Original project artwork is preserved but not loaded initially.

Real Lighthouse **13.5.0** ran again against the production preview in Chrome with default simulated mobile throttling (412×823, 4× CPU):

| Category | Milestone 8 | Milestone 9 |
| --- | ---: | ---: |
| Performance | 99 | 99 |
| Accessibility | 100 | 100 |
| Best practices | 100 | 100 |
| SEO | 100 | 100 |

FCP approximately **1.5s**, LCP **1.8s**, CLS **0**, TBT approximately **10ms**; no Lighthouse run warnings. No material regression. The existing approximately 51 KiB session-unused-JS, dependency-chain and estimated 150ms render-blocking-CSS advisories remain non-blocking. Scores are local lab measurements, not hosted guarantees. Raw report: `%TEMP%/faiz-portfolio-visual-check/m9-lighthouse.json`.

## SEO and hosting QA

Twenty width/theme/motion metadata/fallback cases passed again. Verified title/description, root canonical, robots.txt, synchronized theme-color, all Open Graph/Twitter fields, valid minimal Person JSON-LD, favicon, real social image, zoom-permitting viewport and absence of localhost metadata URLs. Static resource bytes and natural image dimensions passed.

Netlify and Firebase configuration remained unchanged: correct build/publish directories, asset paths, SPA rewrites and Firebase cache headers. Root and `/index.html` load the portfolio; hash navigation remains native. Unknown paths render the themed fallback with one H1, noindex and a working return link. Existing rewrite architecture returns HTTP 200 for unmatched SPA paths rather than a server 404. Local production behavior and configuration were verified; no hosted deployment or provider emulator was run. Firebase account/project selection remains an operator step.

## Repository cleanup and files changed

Removed only confirmed unused items after checking imports/references and preserving temporary copies outside the repo:

- `portfolio/src/App.css`: unused starter stylesheet.
- `portfolio/src/components/About.jsx`, `Loader.jsx`, `Spotlight.jsx`, `AccentSwitcher.jsx`: unmounted legacy components.
- `portfolio/src/context/AccentContext.jsx`: only consumed by the removed unmounted switcher; mounted theme provider is unchanged.
- `portfolio/src/assets/vite.svg`, `react.svg`: unused starter graphics.
- `portfolio/public/Faiz_Sayyed_Resume..pdf`: byte-identical, unreferenced duplicate. The canonical resume remains untouched.

Updated `portfolio/README.md` with actual install/build/preview commands, hosting behavior, content sources and optional input instructions. Added this report and updated `PROJECT_PROGRESS.md`.

Found **913 generated root `node_modules` files tracked by Git** despite the existing ignore rule. Removed those files from the Git index with `git rm -r --cached -- node_modules`; local installed files remain intact. These cleanup deletions are staged for a future reviewed commit. No application/rebuild source was staged by this action, and no commit was created. Root package manifests were retained; the app build uses the portfolio manifest. No dependency version changed.

No shipped source debug logging, debugger statements, localhost references, shipping TODOs or temporary QA artifacts were found. Original user assets, historical project archive, deployment files, milestone documentation and deliberate missing-input placeholders remain preserved. Existing ignored build/install folders remain local. `git diff --check` passed; only existing Git LF/CRLF conversion notices were printed, not lint/build warnings.

## Final validation and deployment readiness

- `npm ci --prefix portfolio --dry-run --ignore-scripts --no-audit --no-fund`: **PASS**, lockfile/install consistency checked without replacing the user's installation.
- `npm ls --prefix portfolio --depth=0`: **PASS**.
- `npm run lint --prefix portfolio`: **PASS**.
- `npm run build --prefix portfolio`: **PASS**, no introduced warnings/errors.
- Existing regression suites, final system/navigation tests, responsive tests, metadata/fallback tests and accessibility scans: **PASS**.

**READY FOR DEPLOYMENT** and ready for a reviewed Git commit/push. Review the full rebuild's modified/untracked files and staged generated-dependency deletions when preparing that commit. Deployment requires selecting/authenticating the intended Netlify or Firebase target, then publishing the new artifact and rechecking hosted assets. Current remote CV/social-image paths return 404; both are valid in the new build. LinkedIn's HTTP 999 prevents automated profile availability confirmation. These are deployment/verification caveats, not local production blockers.

Optional future inputs do not prevent completion:

- Real PacePDF screenshots.
- Exact PacePDF Play Store URL.
- Additional verified project live links and optional captures.

**Final status: 9 / 9 COMPLETE — 100%.** No commit, push or deployment performed. Stop after Milestone 9.
