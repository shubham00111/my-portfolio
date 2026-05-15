# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev        # start dev server with Turbopack
yarn build      # production build with Turbopack
yarn start      # serve production build
```

There are no tests or linting scripts configured. Prettier runs via `prettier-plugin-tailwindcss` (auto-sorts Tailwind classes) — config is in `.prettierrc.json`.

## Architecture

**Next.js 15 App Router** single-page portfolio. The page renders at `app/page.tsx`; all sections are plain Server Components imported there in order. One additional route exists: `app/blog/page.tsx` (stub).

### Content is fully decoupled from components

All copy, links, and structured data live in `app/data/`:
- `user.tsx` — personal info, social URLs, resume path
- `experience.ts` — work history + education as typed `Position[]`
- `projects.ts` — case studies as typed `Project[]`
- `tech-stack.ts` — skills grouped by `SkillTier` (Primary / Production / Familiar) and category, referencing Iconify icon IDs
- `Socials.ts` — social link cards for the Connect section

To update any visible content, edit these data files — components read from them directly and need no changes.

### Layout shell

`app/layout.tsx` wraps everything in `<Provider>` (next-themes ThemeProvider using `class` attribute), then renders `<Header>` above and `<Footer>` below a `max-w-5xl border-x` container. The container's side rails form the vertical border lines that run the full page height.

### Styling conventions

Tailwind CSS 4 with a custom warm-beige light palette and OKLCH dark palette, both defined as CSS custom properties in `app/globals.css`. Key utility classes defined there:
- `nb-card` / `nb-card-hover` — bordered card with optional hover shadow
- `nb-tag` — pill-shaped skill/tech label
- `nb-btn-primary` / `nb-btn-secondary` — button variants
- `screen-line-top` / `screen-line-bottom` — full-bleed `::before`/`::after` pseudo-element horizontal rules that extend `200vw` past the max-width container; used on section headers and `GutterSeparator`
- `--line` CSS var — a blended color used for those pseudo-element rules and the hatch pattern in `GutterSeparator`

Dark mode is toggled via `next-themes` (class strategy). `ThemeButton` handles the toggle; it mounts a blank placeholder to avoid hydration mismatch.

### Icons

Skills use `@iconify/react` with Iconify icon IDs (e.g. `"devicon:typescript"`). Skills without a matching icon specify a `fallback` short string instead.

### GitHub contribution graph

`ContributionSection` is a Client Component (`"use client"`) that fetches from the public `github-contributions-api.jogruber.de` API on mount and renders via the vendored `components/kibo-ui/contribution-graph/index.tsx` component.

### Sound

`lib/SoundManger.ts` exports a singleton `soundManager` with a `playClick()` method that caches and replays `/public/click.wav`. It is a no-op during SSR (`typeof window === "undefined"` guard).

### Font

Space Grotesk (Google Fonts, loaded via `next/font`) is configured in `app/fonts/index.ts` and applied globally in `app/layout.tsx`.
