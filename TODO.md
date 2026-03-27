# Fixable — Animation TODO

Follow this order. Each item builds on the previous.
Before implementing any item, read: `/mnt/skills/user/scroll-animations/SKILL.md`

---

## Phase 1 — Foundation (Do These First)

- [ ] **Install Lenis smooth scroll**
  - Install `lenis` package
  - Wrap `app/layout.tsx` with `ReactLenis` provider
  - Set `lerp: 0.08`, `duration: 1.2`
  - Sync with GSAP ticker

- [ ] **Auto-hide navbar on scroll**
  - Slides up (`translateY(-100%)`) when scrolling down
  - Reappears instantly when scrolling up
  - Add `backdrop-filter: blur(12px)` frosted glass when past hero
  - Use scroll-direction hook + CSS transitions only
  - Disable transition on initial page load

---

## Phase 2 — Content Animations

- [ ] **Staggered text reveal on hero headline**
  - Use GSAP SplitText to split headline into lines
  - Each line slides up from behind `overflow: hidden` mask
  - `yPercent: 100` → `0`, stagger `0.1s`, `ease: "power3.out"`
  - Trigger on page load, not scroll

- [ ] **Fade-in-up on all section content**
  - Apply to: service cards, differentiator strip, pricing cards, testimonials, portfolio grid
  - Framer Motion `whileInView` with `viewport: { once: true, margin: "-100px" }`
  - `opacity: 0, y: 40` → `opacity: 1, y: 0`
  - Stagger children at `0.15s` intervals

---

## Phase 3 — Micro-interactions

- [ ] **Magnetic CTA buttons**
  - Buttons subtly shift toward cursor when mouse is within ~100px
  - Scale `1.03` + shadow lift on hover
  - Smooth reset on mouse leave (`duration: 0.5`)
  - Disable entirely on touch devices

- [ ] **Portfolio card tilt on hover**
  - CSS `perspective(1000px) rotateX() rotateY()` based on cursor position
  - Max tilt: `±10deg`
  - Smooth reset on mouse leave
  - Disable on touch devices

- [ ] **Button hover states**
  - All buttons: smooth color/background transition (`200ms`)
  - Primary CTA: subtle glow or shadow lift on hover
  - Secondary CTA: border color shift on hover

---

## Phase 4 — Scroll Storytelling

- [ ] **Clip-path reveal on portfolio images**
  - Images reveal via `clip-path: inset(100% 0% 0% 0%)` → `inset(0% 0% 0% 0%)`
  - Tied to scroll position with GSAP `scrub: true`
  - Trigger: `start: "top 80%"`

- [ ] **Sticky split-screen services section**
  - Left column: sticky image/visual
  - Right column: scrollable service descriptions
  - As user scrolls through each service, left visual crossfades
  - Use GSAP ScrollTrigger to trigger swaps

---

## Phase 5 — Page Transitions

- [ ] **Route transition animation**
  - Branded color block wipes across screen between pages
  - `transform: scaleX(0)` → `scaleX(1)` then reverse with shifted `transform-origin`
  - Use `next-view-transitions` package OR Next.js 15.2+ `experimental: { viewTransition: true }`

---

## Pre-Launch

- [ ] **Add a privacy policy page**
  - Create `src/app/privacy/page.tsx`
  - Link it in the footer

---

## Rules (Apply to Every Item)

- Only animate `transform`, `opacity`, `clip-path`, `filter`
- Never animate `width`, `height`, `margin`, `top`, `left`
- All animation components: `"use client"` directive
- Always include `prefers-reduced-motion` support
- Target: 55+ FPS on mid-range Android
- Max bundle addition: 50KB total across all libraries
