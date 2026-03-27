---
name: scroll-animations
description: >
  Premium scroll animation and transition guidelines for Fixable's Next.js website.
  Use this skill EVERY TIME the user asks to add animations, scroll effects, transitions,
  hover effects, page transitions, or anything that moves on the Fixable website.
  Also use when the user says "make it feel premium", "make it look better", "add interactions",
  or "improve the design feel". This skill defines the exact stack, rules, and philosophy
  that all animation work on fixable.co must follow.
---

# Fixable Animation Guidelines

## Philosophy — Read This First

Animations on Fixable serve one purpose: **proving competence to visiting business owners.**

When a DMV restaurant owner or HVAC contractor lands on fixable.co and sees buttery scroll reveals, magnetic hover states, and silky page transitions — they don't consciously think "nice animation." They think "this agency builds premium things." That feeling closes deals.

**Three rules that cannot be broken:**

1. **Restraint is premium.** One well-executed animation beats ten mediocre ones. If in doubt, do less.
2. **Speed and beauty are not opposites.** Fixable's core pitch is fast sites. The site must feel fast AND look premium. Laggy animations destroy the value proposition entirely.
3. **Scroll-driven over autoplay.** Animations tied to scroll feel intentional. Autoplaying loops feel cheap.

---

## The Stack

Three libraries. Each has a specific job. Do not substitute.

### Lenis (~3KB)
**Job:** Smooth scrolling foundation.

Wraps the entire app. Makes the scroll itself feel premium — that buttery deceleration you notice on high-end agency sites.

```tsx
// app/layout.tsx
import { ReactLenis } from 'lenis/react'

export default function RootLayout({ children }) {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.2 }}>
      {children}
    </ReactLenis>
  )
}
```

### GSAP + ScrollTrigger (~48KB, tree-shakable)
**Job:** Complex scroll-linked sequences — pinning, scrubbing, text reveals, clip-path wipes.

All GSAP plugins (ScrollTrigger, SplitText, MorphSVG) are **free as of 2025** after Webflow's sponsorship.

Sync with Lenis:
```tsx
gsap.ticker.add((time) => lenis.raf(time * 1000))
gsap.ticker.lagSmoothing(0)
lenis.on('scroll', ScrollTrigger.update)
```

Always use `useGSAP()` hook from `@gsap/react` — handles cleanup automatically in React.

### Framer Motion (~32KB, reducible to ~5KB with LazyMotion)
**Job:** Component-level React animations — hover states, page transitions, `whileInView` reveals.

Use `LazyMotion` with `domAnimation` to keep initial bundle at 4.6KB:
```tsx
import { LazyMotion, domAnimation } from 'framer-motion'
// Wrap app with <LazyMotion features={domAnimation}>
```

---

## The Non-Negotiable Performance Rule

**Only animate these properties. Never animate anything else.**

| ✅ Safe (GPU compositor) | ❌ Never animate (triggers layout) |
|--------------------------|-------------------------------------|
| `transform` | `width`, `height` |
| `opacity` | `margin`, `padding` |
| `clip-path` | `top`, `left`, `right`, `bottom` |
| `filter` (keep blur ≤10px) | `font-size`, `border-width` |

Animating layout-affecting properties forces the browser to recalculate layout on every frame. That's what causes jank. Fixable's site must maintain **55+ FPS on mid-range Android**.

### Core Web Vitals guardrails
- **LCP:** Lazy-load animation libraries after critical content renders. Use `next/dynamic` with `ssr: false` for heavy animation components.
- **CLS:** Reserve space for animated elements with `min-height` or `aspect-ratio` before animations initialize. Use `transform` not `top`/`left`.
- **Bundle limit:** Maximum **50KB total** added by all animation libraries combined.

---

## Always Include This

Every animation implementation must include reduced motion support:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

And in Framer Motion:
```tsx
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
```

---

## The Seven Animations (Implementation Order)

Implement in this order. Each builds on the previous.

### 1. Lenis Smooth Scroll
**Effort:** 30 min | **Impact:** Transforms entire site feel immediately

Install and wrap the app. Single biggest ROI of any animation change.

### 2. Auto-hide Navbar
**Effort:** 1 hour | **Impact:** Instantly signals premium quality

Slides up on scroll-down, reappears on scroll-up. Frosted glass on scroll:
```css
backdrop-filter: blur(12px);
background: rgba(255,255,255,0.8);
```
Use a scroll-direction hook (15 lines) + CSS transitions. Disable transition on initial load.

### 3. Staggered Text Reveal — Hero Headline
**Effort:** 2 hours | **Impact:** Most common Awwwards-winning effect

GSAP SplitText splits headline into lines. Each line slides up from behind `overflow: hidden` mask.
```tsx
gsap.from(lines, {
  yPercent: 100,
  duration: 0.8,
  stagger: 0.1,
  ease: "power3.out"
})
```
Wrap each line: `<div style={{overflow: 'hidden'}}><div className="line">...</div></div>`

### 4. Scroll-Triggered Fade-In-Up (All Sections)
**Effort:** 2 hours | **Impact:** Makes static site feel alive

Apply to service cards, testimonials, portfolio grid, pricing cards.
```tsx
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
  viewport={{ once: true, margin: "-100px" }}
>
```
Stagger children at 0.15s intervals.

### 5. Magnetic Buttons + Hover Micro-interactions
**Effort:** 3 hours | **Impact:** Signals obsessive craftsmanship

CTAs subtly shift toward cursor when mouse is within ~100px:
```tsx
const handleMouseMove = (e) => {
  const rect = button.getBoundingClientRect()
  const x = e.clientX - rect.left - rect.width / 2
  const y = e.clientY - rect.top - rect.height / 2
  gsap.to(button, { x: x * 0.3, y: y * 0.3, duration: 0.3 })
}
```
Portfolio cards: CSS `perspective(1000px) rotateX() rotateY()` tilt on hover.
**Disable on touch devices** (`pointer: coarse` media query).

### 6. Clip-Path Image Reveals (Portfolio)
**Effort:** 3 hours | **Impact:** Highest visual drama, still GPU-safe

Portfolio images reveal through animated `clip-path` tied to scroll:
```tsx
gsap.from(image, {
  clipPath: "inset(100% 0% 0% 0%)",
  scrollTrigger: { trigger: image, scrub: true, start: "top 80%" }
})
```
Or circle expand: `circle(0% at 50% 50%)` → `circle(150% at 50% 50%)`

### 7. Page Transitions
**Effort:** 4 hours | **Impact:** Makes site feel like an app, not a page

Branded color block wipes across screen between routes using `transform: scaleX()`.
Use `next-view-transitions` package for simplest App Router integration.
Or Next.js 15.2+ experimental: `experimental: { viewTransition: true }` in `next.config.js`.

---

## Reference Sites

Study these frame-by-frame before implementing:
- **Stripe** (stripe.com) — animation engineering discipline, never animate layout props
- **Linear** (linear.app) — restraint, dark aesthetic, bento grids
- **Vercel** (vercel.com) — navigation micro-interactions, spring physics
- **Locomotive** (locomotive.ca) — agency scroll patterns, 267 Awwwards
- **Denis Snellenberg** (dennissnellenberg.com) — page transitions reference

---

## Next.js-Specific Rules

- All animation components need `"use client"` directive
- Keep Server Components for layout and structure
- Lazy-load GSAP ScrollTrigger via dynamic imports on routes that use it
- Register GSAP plugins inside `useGSAP()`, not at module scope (prevents SSR errors)
- Set `viewport: { once: true }` on all `whileInView` to prevent re-triggering
