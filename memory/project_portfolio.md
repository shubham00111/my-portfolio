---
name: Portfolio site overview
description: Key facts about Shubham's portfolio project - tech stack, design language, and content sources
type: project
---

Neo-brutalism portfolio site built with Next.js 15, React 19, Tailwind CSS v4, TypeScript.

**Why:** Full revamp from chanhdai.com template to original neo-brutalism design, recruiter-focused.

**Design system:** Cream (#FAFAF8) bg, black borders, #FFE500 yellow accent, 2px solid borders, 4px offset box shadows, no rounded corners, Space Grotesk font. Dark mode: #0A0A0A bg, white borders, yellow accent stays.

**Content source:** Shubham_Rawat_Resume.pdf at project root — use this for any content updates.

**Data files to update for content changes:**
- `app/data/user.tsx` — name, bio, stats, contact
- `app/data/experience.ts` — work history, education
- `app/data/tech-stack.ts` — skill categories

**Resume PDF:** Copied to `/public/Shubham_Rawat.pdf` for the download link.

**How to apply:** When making any changes, maintain neo-brutalism patterns: `nb-card`, `nb-card-hover`, `nb-tag`, `nb-btn-primary`, `nb-btn-secondary` utility classes defined in `globals.css`.
