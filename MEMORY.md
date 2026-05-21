# Memory Log

Purpose: preserve continuity across context truncation and keep implementation decisions visible.

## Current Snapshot

- Project: personal portfolio redesign for Dhruv Toprani
- Design direction: clean, minimal, premium, futuristic, bold, recruiter-friendly
- Core positioning: `I build intelligent systems that turn complexity into leverage.`
- Stack: Next.js + TypeScript + Tailwind v4 + Framer Motion + Lucide

## Session Log

### 2026-05-20

- Initialized project with `npm create next-app@latest`.
- Installed `framer-motion`, `lucide-react`, and `clsx`.
- Replaced default template with:
  - persistent navigation and footer
  - five routes: Home, Projects, Experience, About, Contact
  - project filter system and reusable project card
  - experience timeline cards and leadership section
  - case-study dynamic route scaffold (`/projects/[slug]`)
  - dark premium visual system based on brief color palette
- Added `README.md` with placeholder replacement instructions.
- Added `UNFINISHED_ACTION_ITEMS.md` for unresolved decisions.

### 2026-05-21

- Located B/W headshot in Downloads:
  - `/Users/dhruvtoprani/Downloads/headshot_toprani_bw.png`
- Copied headshot into:
  - `/public/headshot-toprani-bw.png`
- Integrated portrait on About page in a premium visual block.
- Re-ran validation:
  - `npm run lint` passed
  - `npm run build` passed
- Created GitHub repository and pushed:
  - `https://github.com/dhruvtoprani/portfolio-redesign`
- Deployed to Vercel:
  - Preview: `https://portfolio-redesign-w3vao1fd8-dhruv-kekin-topranis-projects.vercel.app`
  - Production alias (auto-created by first deploy): `https://portfolio-redesign-sigma.vercel.app`
- User requested pivot toward Figma template:
  - `https://www.figma.com/design/rqWleD6ohZQdWwvWScti6Z/...`
  - `https://www.figma.com/proto/rqWleD6ohZQdWwvWScti6Z/...`
- Figma connector access to node `1:2` failed (access issue persisted); worked from public thumbnail style cues.
- Completed first-pass "Personalfolio-inspired" redesign:
  - teal/deep-navy visual system
  - glass panels and cleaner pill controls
  - new template-style hero card stack
  - refreshed nav, footer, cards, and section styling across pages

## Assumptions Made

- Portfolio is a standalone new project folder inside `portfolio_3.0`.
- Next.js App Router is the preferred framework.
- Placeholder external links are acceptable until final URLs are provided.
- Case studies are scaffolded now and will be fully authored later.

## Next High-Leverage Tasks

1. Replace all placeholder links, resume, and contact data.
2. Add real metrics and outcomes to project and experience entries.
3. Polish microcopy for tone consistency and recruiter speed-read.
4. Add project hero images/thumbnails and SEO/social metadata assets.
