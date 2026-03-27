# Fixable — Claude Code Project Guide

## Project Overview

**Fixable** is a web design agency site targeting local businesses. It is a Next.js app hosted on Vercel via GitHub auto-deploy. The site offers three services: website design, SEO, and ongoing maintenance. The primary conversion goal is getting visitors to fill out the free mockup request form.

- **Stack:** Next.js 16.2, React 19, TypeScript 5, Tailwind CSS 4, shadcn/ui 4, Base UI (`@base-ui/react`)
- **Deployment:** GitHub → Vercel (auto-deploy on push, do NOT use Vercel CLI directly)
- **Repo:** `proelium27/[repo-name]` on GitHub
- **Status:** Pre-launch, in polish/build mode

## Design System

The site uses a warm taupe/slate color palette. Always respect these CSS variables and never introduce new colors without good reason:

```css
--color-bg: #E9E6E7
--color-text: #5E5653
--color-text-muted: #7B7F8A
--color-accent: #6B7C98
--color-accent-hover: #576780
--color-surface: #DEDAD9
--color-border: #CEC9C8
--color-dark: #5E5653
--color-taupe: #AB978C
--radius: 12px
--radius-sm: 8px
--transition: 200ms cubic-bezier(0.4, 0, 0.2, 1)
```

## Coding Rules

- **Next.js app router** — pages live in `src/app/`, components in `src/components/`
- **TypeScript** — all files use `.tsx` / `.ts`, no plain JS
- **Tailwind CSS 4** — use utility classes; this is v4 (PostCSS plugin, not the v3 config)
- **shadcn/ui + Base UI** — use existing component primitives, don't reinvent them
- **Mobile first** — all changes must be responsive, breakpoints at 640px, 768px, 900px, 1024px
- **Accessibility** — maintain ARIA labels, semantic HTML, and keyboard navigation already in place
- **No inline styles** — use CSS classes and variables, not inline style attributes
- **Never expose API keys** — the site is static; any future API calls must go through a backend or serverless function

## Deployment Workflow

Claude Code does NOT deploy directly. The workflow is:

1. Make changes to source files in `src/`
2. User commits and pushes to GitHub
3. Vercel auto-deploys from GitHub

Never run `vercel deploy` or `vercel login`. Never push to git without explicit user approval.

## Available Skills

Always check for a relevant skill before starting a task. Skills are in `.claude/skills/`.

### When to use each skill:

| Task | Skill |
|------|-------|
| Building or redesigning any UI component or page section | `frontend-design` |
| Auditing HTML/CSS for accessibility, ARIA, focus states, touch targets | `web-design-guidelines` |
| Writing or rewriting any copy (hero, services, pricing, CTAs) | `copywriting` |
| Optimizing the page for more conversions | `page-cro` |
| Optimizing the mockup request form | `form-cro` |
| SEO audit or improvements | `seo-audit` |
| Adding structured data / JSON-LD | `schema-markup` |
| Optimizing for AI search results | `ai-seo` |
| Planning the site launch | `launch-strategy` |
| Writing follow-up emails for mockup leads | `email-sequence` |
| Revisiting pricing tiers | `pricing-strategy` |
| Request is vague or has multiple interpretations | `ask-questions-if-underspecified` |
| Writing, reviewing, or refactoring React/Next.js code | `react-best-practices` |
| Adding animations, scroll effects, transitions, hover effects, or anything that moves | `scroll-animations` |

### Important: Marketing context first

Before using any marketing skill (`copywriting`, `page-cro`, `form-cro`, `seo-audit`, `email-sequence`, `ai-seo`, `pricing-strategy`, `launch-strategy`), always read `.agents/product-marketing-context.md` first. If it doesn't exist yet, invoke `/product-marketing-context` to create it.

## Clarification Rule

If a request is ambiguous or could be interpreted multiple ways, use the `ask-questions-if-underspecified` skill before writing any code. Do not make assumptions on tasks that touch layout, copy, or conversion elements — ask first.

## What NOT to Do

- Do not add npm packages without asking
- Do not restructure the `src/` directory without asking
- Do not change the color palette without asking
- Do not push to git or deploy without explicit user approval
- Do not add backend infrastructure — this is a static site for now
- Do not use placeholder lorem ipsum copy — all copy must be real and intentional
