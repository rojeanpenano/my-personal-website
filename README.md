# rojeanpenano.vercel.app

Personal portfolio — the site itself is designed as a small engineered system:
a dark schematic aesthetic where structure is the decoration, motion explains
architecture, and the flagship case study renders as an animated system diagram.

**Live:** https://rojeanpenano.vercel.app

## Stack

- **Next.js 16** (App Router, static generation) — the whole site pre-renders to HTML
- **TypeScript** throughout
- **Tailwind CSS v4** — design tokens declared in CSS via `@theme`
- **CSS-only animation** — SVG line-draw and fade-settle keyframes; JavaScript
  ships only where a capability demands it (an IntersectionObserver reveal
  wrapper and a clipboard button — the only two client components)

## Design principles

- One accent color, three type voices (display, body, mono), hairline strokes
- Motion is explanatory, never decorative; everything respects `prefers-reduced-motion`
- Semantic HTML landmarks, keyboard-navigable, WCAG AA contrast

## Run locally

```bash
npm ci
npm run dev
```

Production build: `npm run build`