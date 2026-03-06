# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite)
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # ESLint
```

## Architecture

Single-page React portfolio app built with Vite, Tailwind CSS, and Framer Motion. No routing — all sections render sequentially in `src/App.jsx`.

**Component order in App.jsx:** Navbar → Hero → Technologies → Experience → Projects → Contact

**Content data** lives entirely in `src/constants/index.js`. All text, project entries, experience entries, and contact info are exported from there and imported into the relevant components. To update portfolio content, edit only this file.

**Styling** uses Tailwind utility classes inline. The background gradient is set in `App.jsx` with a fixed full-screen div. No CSS modules or styled-components.

**Animations** use Framer Motion — applied per-component for entrance/scroll effects.

**Assets** are in `src/assets/`. Project images are `project-1.jpg` through `project-5.jpg`.

## Deployment

Pushes to `main` trigger GitHub Pages deployment via `.github/workflows/static.yml`. Note: the current workflow uploads the raw repo rather than the Vite build output — the build is not run in CI.
