# Ji Monsales — Futuristic Portfolio

A single-page dark/glassmorphism portfolio that mirrors the reference layout exactly. Built on the existing TanStack Start + Tailwind v4 stack.

## Design system (src/styles.css)

Dark theme tokens in oklch:
- `--background`: deep navy (#070a1f range)
- `--card`: translucent navy for glass surfaces
- `--primary`: neon violet (#8b5cf6)
- `--accent`: electric cyan (#22d3ee)
- Gradient tokens: `--gradient-primary` (violet→cyan), `--gradient-text` (white→violet→cyan)
- Glow tokens: `--shadow-neon`, `--shadow-glass`
- Fonts: Poppins (headings), Inter (body), Space Grotesk (display) loaded via Google Fonts `<link>` in `__root.tsx` head
- Custom scrollbar + smooth scroll in `@layer base`
- Animated background blobs + floating particle keyframes

## Page structure (src/routes/index.tsx)

Single route. Sections composed from small components in `src/components/portfolio/`:

1. `Navbar.tsx` — floating sticky glass nav, JM logo + name/subtitle, anchor links (Home/About/Services/Skills/Projects/Contact) with active underline via IntersectionObserver, neon "Let's Talk" CTA, mobile hamburger sheet
2. `Hero.tsx` — split grid: left greeting badge, large name, gradient typed "Senior Web Developer" (typing animation), intro, Hire Me / View My Work buttons, social row; right portrait in glass frame with floating tech badges (HTML5/CSS3/JS/React/Tailwind) and bottom stats bar (5+/25+/20+/100%)
3. `About.tsx` — glowing circular avatar, bio card, info panel (name/email/phone/location/availability), trait badges
4. `Services.tsx` — "What I Do" + 6 glass cards with neon icon, gradient border, hover lift
5. `Skills.tsx` — left animated progress bars (8 skills), right 4×n tech icon grid with hover glow
6. `Projects.tsx` — 3 project cards with preview image, tech tags, Live Demo / GitHub buttons, hover zoom
7. `Testimonials.tsx` — embla carousel of glass quote cards with avatar, role, 5-star, neon arrows
8. `Contact.tsx` — left contact info, center glass form (name/email/subject/message + neon submit), right social column
9. `Footer.tsx` — JM brand, quick links, socials, copyright

## Assets

Generate via imagegen (saved to `src/assets/`):
- Hero portrait (young Asian developer at neon coding workstation)
- About circular portrait (same person, headshot)
- 3 project preview mockups (dashboard, e-commerce, travel)
- 3 testimonial avatars
Tech logos: use `react-icons` (already common) or inline SVG — install `react-icons` via bun add.

## Effects

- Tailwind + CSS keyframes for: gradient text animation, floating blobs, particle drift, hover glow on cards, progress bar fill on scroll-in (IntersectionObserver hook)
- Scroll reveal: lightweight `useInView` hook adding `opacity/translate` classes
- Glassmorphism: `backdrop-blur-xl bg-white/5 border border-white/10` + neon outer shadow

## SEO

Update root `head()` title/description to "Ji Monsales — Senior Web Developer". Add og tags.

## Files to create

- `src/styles.css` (extend tokens, keyframes, scrollbar)
- `src/routes/__root.tsx` (add font links, dark class on html)
- `src/routes/index.tsx` (compose sections)
- `src/components/portfolio/{Navbar,Hero,About,Services,Skills,Projects,Testimonials,Contact,Footer}.tsx`
- `src/hooks/use-in-view.ts`
- `src/assets/*` (generated images)

## Out of scope

- No backend, no real form submission (toast confirmation only)
- No CMS — content hardcoded
- No auth / Lovable Cloud needed
