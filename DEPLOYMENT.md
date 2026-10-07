# Portfolio deployment

Prepared on 7 October 2026. Repository: https://github.com/Faizzsyed/faiz-labs. Production branch: `main`.

The app lives in `portfolio/`. Its Vercel build settings are recorded in `portfolio/vercel.json`. Existing Netlify and Firebase configurations are retained. Hash navigation does not require catch-all rewrites; no functions or environment variables are required. Unknown pathnames use Vercel's default 404 response rather than an added SPA rewrite.

## Import into Vercel

1. Sign in at https://vercel.com/new and import `Faizzsyed/faiz-labs` from GitHub.
2. Set **Root Directory** to `portfolio`. This is a Vercel project setting; it is not defined by `vercel.json`.
3. Confirm the following settings before selecting **Deploy**:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Framework preset | Vite |
| Root directory | `portfolio` |
| Build command | `npm run build` |
| Output directory | `dist` |
| Install command | `npm install` |
| Node.js version | 24.x |
| Environment variables | None |

4. Record the actual production URL shown by Vercel after deployment succeeds. Do not assume a project hostname is available.

The CLI was not installed during preparation, and no Vercel project was locally linked. No login automation or credentials were added. GitHub's deployment API had no existing deployment records at inspection time.

Configuration reference: https://vercel.com/docs/project-configuration.

## Verification after deployment

- Load the homepage and check the hero and portrait, Work, abstract PacePDF case study, Field Map, Trajectory, Experience, Skills, Contact and Footer.
- Check light/dark mode, keyboard focus, command palette, active navigation and mobile menu.
- Check copy-email copies `er.faizsayyed@gmail.com`.
- Check navbar/footer/palette CV actions and `/Faiz_Sayyed_Resume.pdf`.
- Check `/faiz-portrait.webp`, `/favicon.svg`, `/robots.txt` and hashed JS/CSS assets return successfully.
- Check mobile/tablet/desktop widths for overflow, browser console for errors and network requests for failed assets.
- Confirm canonical/OpenGraph tags contain no localhost URLs.

Local lint and production build passed before publishing preparation. A public production URL is required for the deployment checks above; local build success does not establish that a deployment exists.

## Canonical URL

The current canonical, OpenGraph URL, social-image URLs and Person JSON-LD URL retain `https://faiz-labs.netlify.app/`. Once the actual Vercel production URL is confirmed as the primary portfolio address, update those absolute URLs together in `portfolio/index.html` and update the canonical reference in `portfolio/README.md`. Until then, retain the existing address.
