# React Portfolio Modernization Plan (Light/Dark Themes + Multi-Page + 2025 UX Refresh)

## Goals

- Introduce global light/dark theme with an accessible toggle and persistent preference.
- Convert the current single-page layout into a multi-page experience (Home, Projects, Experience, About, Contact) plus a new Blog/Articles section with placeholder content and routing-ready scaffolding.
- Refresh visual design to align with 2025 portfolio trends: clean typography, airy spacing, soft gradients, glassmorphism accents, micro-interactions, and high contrast accessibility.

## Current Snapshot (what we saw)

- Vite + React 18 + Tailwind; single-page composition inside `src/App.jsx` with components for Hero/About/Technologies/Experience/Projects/Contact.
- Dark-leaning palette (neutral-950 bg, neutral-300 text) without theme toggling.
- `react-router-dom` is already installed but unused.
- Motion library used for simple entrance animations.

## Assumptions

- Tailwind config can be extended with CSS variables for theme tokens (light/dark) without ejecting.
- Content structure of existing sections can be reused; copy updates are allowed where needed.
- No backend yet; blog will be a front-end placeholder (cards + article detail stub) powered by static data.

## High-Level Approach

1. **Theming**: Centralize color tokens via CSS variables on `:root[data-theme]`, wrap app with a ThemeProvider, and add a toggle in the nav. Sync preference to `localStorage` and respect `prefers-color-scheme` on first load.
2. **Routing**: Enable `react-router-dom` v7 with a layout shell (`RootLayout`) that contains Navbar, footer, and theme background. Split pages: Home (current hero + sections), Projects, Experience, About, Contact, Blog (list), Blog Detail placeholder. Add 404 friendly page.
3. **Design Refresh**: Apply 2025-inspired styling: soft multi-stop gradients for hero background, glassmorphic cards, elevated CTA buttons, updated typography scale, scroll progress indicator, hover micro-interactions, and responsive grids. Ensure WCAG AA contrast for both themes.
4. **Content/Data**: Move constants into shared data files per page (e.g., `content/projects.js`, `content/blogs.js`). Provide sample blog entries with tags/date/read-time and a hero banner placeholder for detail view.
5. **QA**: Update tests/smoke via `npm run build`/`npm run lint` (if configured) and basic manual checks for theme toggle persistence and page navigation.

## Detailed Task Breakdown

### Theming

- Add `ThemeProvider` (new file) using `useState`, `useEffect`, and context to expose `theme` + `toggleTheme`.
- Set `data-theme` attribute on `document.documentElement` to switch CSS variables.
- Update `src/index.css` with CSS variables for both themes (background, surface, text, accent, border, glow). Map Tailwind utilities via `:root` custom properties for consistency.
- Add a toggle button in `Navbar` with accessible label, sun/moon icon, focus styles, and smooth transition.
- Update section wrappers/backgrounds to consume the new tokens (replace hardcoded `neutral-950/300` classes where possible with utility classes referencing CSS vars via Tailwind’s arbitrary values).

### Multi-Page Routing

- Replace single `App` render with `RouterProvider` and routes in `main.jsx`.
- Create `src/layouts/RootLayout.jsx` to wrap pages with Navbar/Footer/background gradient.
- Create pages:
  - `pages/Home.jsx` (reuse Hero/About/Technologies/Experience/Projects/Contact entry points; consider trimming contact into its own page as well if desired).
  - `pages/Projects.jsx` (uses Projects component; optional filters/chips for 2025 design).
  - `pages/Experience.jsx` (uses Experience component).
  - `pages/About.jsx` (uses About + Technologies).
  - `pages/Contact.jsx` (uses Contact component; add CTA card styling).
  - `pages/Blog.jsx` (list view; cards with title, excerpt, tags, date, read time, CTA to detail).
  - `pages/BlogDetail.jsx` placeholder (shows selected slug/title, hero banner gradient, “coming soon”).
  - `pages/NotFound.jsx` for 404.
- Add a `routes.jsx` (or inline in `main.jsx`) defining loader-friendly routes for future data.
- Ensure Navbar links use `NavLink` with active styles and responsive menu (top-right toggle + social icons remain).

### Design Revamp (2025 cues)

- Gradients: hero background radial + directional gradient; accent buttons with glass blur and neon border hover.
- Cards: glassmorphic surfaces with subtle noise texture and border; drop-shadow on hover; smooth `motion` transitions.
- Typography: update scale for headings (clamp), increase line-height, and use accent gradient text for key titles.
- Micro-interactions: hover lift on buttons/cards; scroll progress indicator at top; staggered fade/slide in sections with existing `motion` lib.
- Layout: generous padding, max-width container, and responsive grids for cards.
- Accessibility: maintain focus rings, ensure contrast in both themes; prefers-reduced-motion respect by guarding animations.

### Content/Data Structure

- Add `src/content` directory:
  - `projects.js`, `experiences.js`, `skills.js`, `blogPosts.js` (with sample placeholder blog entries: id/slug/title/summary/body tags/date/readTime/hero).
- Update components to consume from these files to simplify future data changes.

### Dependencies

- Optional helpers: `clsx` for class merging; `@headlessui/react` if we add disclosure/menu; otherwise keep dependencies minimal.
- Tailwind plugins: optional `@tailwindcss/typography` for blog detail prose styling.

### Implementation Order

1. Set up theme tokens + provider + toggle; verify in current UI.
2. Introduce router + layouts; move existing sections into `Home` page.
3. Create additional pages (Projects, Experience, About, Contact) and wire Navbar links.
4. Add Blog list/detail placeholders using static data.
5. Apply design refresh (gradients, cards, typography, micro-interactions) across key components.
6. QA: run lint/build; manual checks for routing, theme persistence, and responsive layouts.

### Testing / Validation

- Commands: `npm run lint`, `npm run build`.
- Manual: toggle theme (persist reload), navigate to all pages including Blog/404, check focus states, verify animations aren’t excessive in reduced-motion.

### Deliverables for Next PR

- Updated `main.jsx`/`App.jsx` (or new routes file) with router + layout.
- New `ThemeProvider` + CSS variables in `index.css`.
- New pages and blog placeholder data.
- Navbar with theme toggle + active link states.
- Visual refresh of hero/cards/buttons using gradients/glassmorphism.
- IMPLEMENTATION notes in this file (kept up to date during build).
