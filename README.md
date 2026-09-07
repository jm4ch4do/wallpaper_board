# Wallpaper Board Dashboard

A fixed-size dashboard mockup built with Vite and Tailwind CSS. The interface uses a dark, futuristic layout for tracking development courses, projects, and progress.

## Requirements

- Node.js 18 or newer
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

After cloning the repository, you can also open `index.html` directly in a browser. The page uses the committed `standalone.css` file and a regular deferred script, so it does not require an active development server for the dashboard and lecture interactions to work.

## Standalone Stylesheet

The Tailwind classes are compiled locally rather than loaded from a CDN. `npm run build` builds the project and copies the existing `standalone.css` into `dist`, but it does not currently regenerate the root `standalone.css` file.

If new Tailwind classes are added, the standalone stylesheet must be regenerated before opening `index.html` directly. A dedicated `build:standalone` command has not been configured yet.

## Project Structure

- `index.html` contains the dashboard markup.
- `src/main.js` contains the lecture toggle and progress-count behavior.
- `src/style.css` contains Tailwind imports and reusable dashboard styles.
- `standalone.css` contains the compiled local styles used when opening `index.html` directly.
- `vite.config.js` configures the local Vite and Tailwind toolchain.

The lecture bullets are interactive. Clicking a lecture toggles its active state, and the progress graph updates to show the number of active lectures out of the total.
