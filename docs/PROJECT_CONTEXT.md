# Project Context (read this first)

Fixed-size (3440x1440) dark dashboard "Wallpaper Board", built with Astro 7 + Tailwind CSS 4. It is a static page meant to be used as a wallpaper/board: it tracks courses, projects and progress. No framework runtime, no routing, a single page.

## Commands

- `npm run dev` — dev server.
- `npm run build` — outputs `dist/`. Required for changes to show up when opening `dist/index.html` directly.
- `npm run preview` — serve the build.

`dist/index.html` is opened via `file://`. `astro.config.mjs` has an `astro:build:done` hook that rewrites root-absolute `href`/`src` to `./...`. Do not remove it and do not add root-absolute asset URLs that bypass it (e.g. in JS-generated markup).

## Architecture: data -> components -> page

| Layer | Location | Role |
| --- | --- | --- |
| Data | `src/data/*.ts` | Typed arrays that drive every repeated list. Each file exports an interface + the data. |
| Components | `src/components/*.astro` | One visual block each, or a small reusable item. Receive data as props. |
| Page | `src/pages/index.astro` | Composes the whole dashboard with fixed pixel sizes. |
| Layout | `src/layouts/BaseLayout.astro` | `<html>` shell, imports `src/style.css`, loads `public/app.js` (`is:inline`, `defer`). |
| Styles | `src/style.css` | Tailwind import, body canvas size, reusable classes (`.dot`, `.sq`, `.section-title`, ...). |
| Client JS | `public/app.js` | Vanilla JS: lecture toggle + progress ring. Copied verbatim to `dist/`. |

### Page layout (`index.astro`)

`<main>` is 2322x1252 and centered on the body canvas. Three groups:

1. Left panel (1444px): `Header`, `CurrentMission`, two `CardsRow` (`projectCards`, `extraCards`).
2. Middle panel: `TailwindRoadmapPanel`.
3. Footer under 1 + 2: `FooterStats`.
4. Right panel (382px, full height): `AccentMasteryPanel`.

### Data files -> components

| Data file | Exports | Rendered by |
| --- | --- | --- |
| `lectures.ts` | `lectures`, `lectureColumns` (split 5 / rest) | `CurrentMission` -> `LectureColumn` -> `LectureBullet` |
| `projectCards.ts` | `projectCards`, `extraCards` | `CardsRow` -> `ProjectCardItem` |
| `roadmapSteps.ts` | `roadmapSteps` | `TailwindRoadmapPanel` -> `RoadmapStepItem` |
| `accentSteps.ts` | `accentSteps` | `AccentMasteryPanel` -> `AccentStepItem` |
| `footerStats.ts` | `footerStats`, `footerQuote` | `FooterStats` |

`Header` and `ProgressRing` have no list data. `ProgressRing` exposes `data-progress-ring` / `data-progress-circumference`, which `app.js` reads.

## How to change things

- **Add/remove/edit a list item** (lecture, card, roadmap step, accent step, footer stat): edit the matching array in `src/data/`. Do not duplicate markup. Follow the existing entry shape (the interface at the top of the file).
- **Progress squares**: `squares` arrays use class suffixes — `f-c`/`f-g`/`f-p` (filled cyan/green/purple), `e-c`/`e-g`/`e-p` (empty, tinted), `''` (plain empty). Use `Array(n).fill(...)` and spread to mix.
- **Change how an item looks**: edit its `.astro` component (`*Item.astro`, `LectureBullet`, etc.).
- **Change a panel's layout or size / reorder panels**: edit `index.astro` or that panel's component. Sizes are fixed px values; keep the total within the 2322x1252 `<main>`.
- **Add a new data-driven block**: create `src/data/x.ts` (interface + array), an item component and a panel component in `src/components/`, then import it in `index.astro`.
- **Shared styles**: add reusable classes to `src/style.css`; otherwise use Tailwind utilities inline.
- **Interactive behavior**: edit `public/app.js`. It relies on `data-*` hooks and class names (`data-lecture-toggle`, `data-lecture-count`, `data-progress-ring`, `.dot`, `.dot-on`, `.w-7`, `text-slate-400/200`). If you rename those in components or CSS, update `app.js` too.
- **Static text with no data file** (titles, header): edit the component directly.

## Behavior notes

- Clicking a lecture bullet toggles its state (`.dot-on`) and updates the `completed / total` counter and the progress ring.
- The initial active state comes from `active` in `lectures.ts`, rendered by `LectureBullet`.
- Clicking a progress square in a project card toggles it between empty and filled states and updates the card's counter.
- Footer stats and the roadmap/accent progress are static values from data files, not computed from lectures.

## Conventions

- 4-space indentation in `.ts` / `.astro`, single quotes in TS.
- Comment above each data array: "Edit this list to ... — the component renders straight from it."
- TypeScript is strict-ish (`tsconfig.json`); keep data typed with the file's interface.
- After changes, run `npm run build` to verify.
- Don't create extra documentation files unless asked; keep `README.md` (user-facing) and this file in sync when structure changes.
