# Dhruv Portfolio Redesign

Clean, minimal, premium, and recruiter-friendly portfolio scaffold aligned to `portfolio_redesign_brief.pdf`.

## Stack

- Next.js App Router
- React + TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide Icons

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Project Structure

- `src/app/page.tsx`: landing page scaffold (hero, signal strip, featured projects, experience preview, CTA)
- `src/app/projects/page.tsx`: filterable projects index
- `src/app/projects/[slug]/page.tsx`: case study template route
- `src/app/experience/page.tsx`: timeline + leadership scaffold
- `src/app/about/page.tsx`: narrative + focus areas
- `src/app/contact/page.tsx`: contact actions + location
- `src/data/site-content.ts`: core content, links, and placeholders
- `src/components/*`: reusable UI, cards, nav, and visuals

## Replace Placeholders Before Ship

- `src/data/site-content.ts`
  - `dhruv@example.com` email
  - LinkedIn URL
  - GitHub URL
  - Calendly URL (optional)
- `public/resume.pdf`
  - add your actual resume file
- Project links
  - add `githubHref` and/or `demoHref` inside each project object
- Case studies
  - fill Problem / Insight / Solution / System / Impact / Reflection per project

## Workflow Files

- `MEMORY.md`: running implementation log to survive context truncation
- `UNFINISHED_ACTION_ITEMS.md`: unresolved decisions and deferred tasks

Keep both updated as we iterate.
