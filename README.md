# Tulas International School — Homepage Redesign

A modern, animated single-page landing page for [Tulas International School (TIS)](https://tis.edu.in/), built as a frontend assessment project. The redesign retains TIS's core branding and content while delivering a polished, responsive experience with smooth scroll animations and interactive features.

## Live Demo

- **Live URL:** [https://ashishreddy2022-source.github.io/tis-homepage-redesign/](https://ashishreddy2022-source.github.io/tis-homepage-redesign/)
- **Repository:** [https://github.com/ashishreddy2022-source/tis-homepage-redesign](https://github.com/ashishreddy2022-source/tis-homepage-redesign)

## Tech Stack

| Layer       | Technology            |
|-------------|-----------------------|
| Framework   | React 19 (via Vite 8) |
| Styling     | Tailwind CSS v4       |
| Animations  | Framer Motion         |
| Icons       | Lucide React          |
| Deployment  | GitHub Pages          |

## Standout Features

1. **Custom Cursor** — A spring-smoothed ring that follows the mouse and scales up on interactive elements. Automatically hidden on touch devices via `pointer: coarse` media query.
2. **Scroll-Triggered Reveals** — Sections and cards stagger into view as the user scrolls. Uses `whileInView` with `viewport: { once: true }` to avoid replaying animations.
3. **Dark/Light Theme Switcher** — An animated toggle (moon/sun icons with rotation) that persists the user's preference to `localStorage`. Themes are driven by CSS custom properties on `[data-theme]`, so the switch is instant across all sections.
4. **Scroll Progress Bar** — A spring-smoothed gradient bar fixed to the top of the viewport, indicating how far the user has scrolled.

## Getting Started

```bash
# Clone
git clone https://github.com/your-username/tis-homepage-redesign.git
cd tis-homepage-redesign

# Install
npm install

# Dev server (http://localhost:5173)
npm run dev

# Production build
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── animation/        # CustomCursor, ScrollProgress, ScrollReveal
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # HeroSection, AboutSection, AcademicsSection,
│   │                       CampusSection, TestimonialsSection,
│   │                       AdmissionsSection, CTASection
│   └── ui/               # Button, SectionHeading, ThemeSwitcher
├── data/
│   └── content.js        # All static text, navigation, and section data
├── hooks/
│   ├── useMousePosition.js
│   └── useScrollProgress.js
├── App.jsx
├── main.jsx
└── index.css             # Tailwind imports + brand tokens + dark mode vars
```

All page content lives in `src/data/content.js`. This means updating copy, stats, program descriptions, or testimonials doesn't require touching any component files — just edit the data.

## Design Decisions

- **Brand palette**: Navy/indigo (`#1a237e` → `#3f51b5`) paired with gold (`#c89b3c`) for accents. These are close to the official TIS brand identity and work well for a premium school aesthetic in both light and dark modes.
- **Typography**: [Outfit](https://fonts.google.com/specimen/Outfit) for headings (distinctive, bold), [Inter](https://fonts.google.com/specimen/Inter) for body text (readable, neutral). Both loaded from Google Fonts with `display=swap`.
- **Component granularity**: Kept intentionally moderate. There's a `Button`, `SectionHeading`, and `ScrollReveal` that are genuinely reused. Didn't extract every `<div>` into its own component just to inflate the file count.
- **Tailwind v4**: Using the new `@theme` directive for design tokens and the Vite plugin — no `tailwind.config.js` needed.
- **Dark mode**: Implemented with CSS custom properties (`--bg`, `--fg`, etc.) toggled via a `data-theme` attribute. This avoids Tailwind's `dark:` class duplication and makes theming more maintainable.

## Responsive Breakpoints

| Width  | Layout changes |
|--------|----------------|
| < 640  | Single-column sections, stacked stats, mobile menu |
| 640    | Two-column grids for cards |
| 768    | Tablet layout adjustments |
| 1024   | Desktop nav visible, full grid layouts |
| 1280+  | Max-width container kicks in |

## Accessibility

- Semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`)
- Proper heading hierarchy (single `<h1>` in hero, `<h2>` per section, `<h3>` for cards)
- `aria-label` on navigation, interactive buttons, and the custom cursor is `aria-hidden`
- Visible focus rings via `focus-visible:ring-2`
- Links and buttons have clear hover/active states
- Body scroll lock when mobile menu is open

## Evaluation Checklist

- [x] Builds locally without errors (`npm run build` succeeds)
- [x] All four standout features implemented and functional
- [x] Tested on Mobile (375px), Tablet (768px), and Desktop (1280px+)
- [x] Zero lint warnings (`npx oxlint` — 0 warnings, 0 errors)
- [x] No unused dependencies or dead code
- [x] No `console.log()` statements left in
- [x] `README.md` with setup instructions and tech stack details
