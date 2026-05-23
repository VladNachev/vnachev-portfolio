# Vladimir Nachev QA Portfolio

Personal portfolio website for Vladimir Nachev, Senior QA Engineer / QA Automation Engineer.

## Live Site

The portfolio is deployed on Vercel:

```text
https://vnachev-portfolio.vercel.app/
```

## Stack

- React
- Vite
- TypeScript
- npm

## Run Locally

PowerShell may block `npm.ps1` on some Windows machines. If that happens, use `npm.cmd`:

```bash
npm.cmd install
npm.cmd run dev
```

Then open the local URL printed by Vite, usually:

```text
http://127.0.0.1:5173/
```

## Build

```bash
npm.cmd run build
```

Preview the production build:

```bash
npm.cmd run preview
```

## Editing Content

Most portfolio content is centralized in:

```text
src/data/portfolio.ts
```

Update that file to replace:

- pinned GitHub repository placeholders
- article placeholders
- certification placeholders
- profile text and contact links
- skills and experience copy

Placeholder cards are intentionally marked in the UI so they are easy to find and replace later.

## Project Structure

```text
src/
  components/
    Header.tsx
    Hero.tsx
    Section.tsx
  data/
    portfolio.ts
  App.tsx
  main.tsx
  styles.css
```

## Deployment

The site is deployed on Vercel from the GitHub repository:

```text
https://vnachev-portfolio.vercel.app/
```

Vercel settings:

- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

Every push to the connected production branch triggers a new Vercel deployment.
