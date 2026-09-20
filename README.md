# Wallpaper Board Dashboard

A fixed-size dashboard mockup built with Astro and Tailwind CSS. The interface uses a dark, futuristic layout for tracking development courses, projects, and progress.

## Requirements

- Node.js 18.20.8+ / 20.3+ / 22+
- npm

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Open Directly

After running `npm run build`, open `dist/index.html` directly in a browser — no server required. The build rewrites asset URLs to relative paths (via a small `astro:build:done` hook in `astro.config.mjs`) so the stylesheet and `app.js` resolve correctly under `file://`.

## Editing the Dashboard

This project is component- and data-driven, so most changes don't require touching raw HTML:

- **Repeated content** (lecture bullets, project cards, roadmap steps, accent-mastery steps, footer stats) lives in plain TypeScript data files under `src/data/`. Add, remove, or edit an entry there and the corresponding list re-renders automatically.
- **Layout/markup** for each visual block lives in typed `.astro` components under `src/components/`.
- **Page composition** — how components are arranged into the full dashboard — lives in `src/pages/index.astro`.
- **Client-side behavior** (lecture toggle clicks, the progress ring) lives in `public/app.js`, a plain script that works identically in dev and when opening the built file directly.

### Example: adding a lecture bullet

Edit `src/data/lectures.ts`:

```ts
export const lectures: Lecture[] = [
    // ...
    { number: 12, label: 'New Lecture', active: false },
];
```

Save, and `npm run dev` (or the next build) picks it up automatically — no markup to duplicate.

## Project Structure

- `src/pages/index.astro` — composes the full dashboard from components.
- `src/layouts/BaseLayout.astro` — the shared `<html>`/`<head>`/`<body>` shell and stylesheet import.
- `src/components/*.astro` — one component per visual block (header, current mission, cards row, roadmap panels, footer, accent mastery) plus small reusable pieces (bullet, card, roadmap/accent step).
- `src/data/*.ts` — typed data lists that drive the repeated content.
- `src/style.css` — Tailwind import and reusable dashboard styles (dots, squares, section/project titles).
- `public/app.js` — vanilla JS for lecture toggling and the dynamic progress ring; copied verbatim to the build output.
- `astro.config.mjs` — Tailwind Vite plugin plus the relative-asset-path rewrite used for direct file opening.

The lecture bullets are interactive. Clicking a lecture toggles its active state, and the progress graph updates to show the number of active lectures out of the total.
