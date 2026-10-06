# Faiz Sayyed portfolio

React/Vite portfolio for Electronics & Computer Science, full stack development and software product work. Canonical URL: https://faiz-labs.netlify.app/.

## Local development and validation

Run from the repository root:

```sh
npm ci --prefix portfolio
npm run dev --prefix portfolio
npm run lint --prefix portfolio
npm run build --prefix portfolio
npm run preview --prefix portfolio
```

The app is in `portfolio`; root dependencies are not required for its build. Production output is `portfolio/dist`. Use a Node version compatible with Vite's declared engine (`^20.19.0 || >=22.12.0`); final QA used Node 24.14.1.

## Hosting configuration

Vercel uses the `portfolio` root directory and the Vite build settings in `vercel.json`. See [deployment instructions](../DEPLOYMENT.md) for GitHub import settings and checks after publishing.

`../netlify.toml` sets base `portfolio`, build `npm run build`, publish `dist`, and an SPA fallback. `../firebase.json` publishes `portfolio/dist`, preserves hash navigation through an index rewrite, and configures hashed-asset caching. Firebase project/account selection remains an operator step; no project ID is invented here.

The custom fallback handles unknown pathnames in the app with noindex metadata. SPA rewrites return HTTP 200 rather than a server 404. Real assets take priority over the fallback. After an authorized deployment, verify `/Faiz_Sayyed_Resume.pdf`, `/faiz-portrait.webp`, `/favicon.svg`, `/robots.txt`, hash navigation and an unknown path on the selected host.

Do not commit generated `node_modules`, `dist`, QA artifacts or local environment files. Commit/push/deploy are separate operator actions.

## Content and optional inputs

Theme colors are centralized in `src/index.css`: warm paper surfaces in light mode and near-black warm surfaces in dark mode, with copper/amber palette tokens. The light text/interaction accent is deepened to `#925B2B` for contrast; dark mode uses `#C98742`. Components share these tokens for links, focus, active states, schematic graphics, cursor and progress. Contact icons use monochrome `currentColor`; project artwork and the portrait retain their original colors.

Canonical project content is in `src/data/projects.js`; contacts and CV path are in `src/data/contact.js` and `src/data/navigation.js`. Keep unknown links null. The PacePDF feature is an abstract editorial document study built in SVG/CSS, with four manually selected steps and no screenshots or device mockups. Its product CTA uses the existing live URL or Play Store URL when supplied; the unavailable state is intentional while both remain null. Do not fabricate ratings or product URLs.

The hero uses `src/assets/faiz-portrait.webp`, a transparent subject cutout derived from the user-selected `1785476193858 (1).jpg` portrait (charcoal blazer and black shirt). The blue studio background is removed; the existing technical grid remains behind the portrait. Its byte-identical public copy at `/faiz-portrait.webp` provides the social-image URL. Original portraits are preserved for reference. Contact email is `faizusayed256@gmail.com`; the CV at `/Faiz_Sayyed_Resume.pdf` has matching visible text and mailto link.

See [Milestone 9](../MILESTONE_9.md) for the final audit, measured results, cleanup and deployment limitations, and [project progress](../PROJECT_PROGRESS.md) for milestone completion.
