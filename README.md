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

## Project Structure

- `index.html` contains the dashboard markup.
- `src/main.js` contains the lecture toggle and progress-count behavior.
- `src/style.css` contains Tailwind imports and reusable dashboard styles.
- `vite.config.js` configures the local Vite and Tailwind toolchain.

The lecture bullets are interactive. Clicking a lecture toggles its active state, and the progress graph updates to show the number of active lectures out of the total.
