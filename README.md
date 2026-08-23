# KnifeBud — Website Redesign

A refreshed 2D React/TypeScript build of the KnifeBud site. Same brand
(warm cream background, deep brown text, coral/orange accent, serif-italic
accent type over a bold sans display face) with a tighter homepage, real
shop cards, a WhatsApp/Sarah ordering flow, and a mobile-first layout.

## A note on the source of truth

I wasn't able to render knifebud.com directly — it's a JS-rendered app and
my fetch tool only returns the empty shell, with no built-in screenshot
capability in this session. So the palette, typography, and layout choices
here are built from the detailed description in the brief (existing
orange/coral, deep brown, warm white background, bold sans + serif/italic
accent, rounded containers), not a pixel-measured extraction of the live
site. Worth a quick side-by-side against the real thing before shipping —
the CSS variables in src/index.css make any palette/type correction a
small, contained edit.

## Run it

```
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
```

## Structure

```
src/
  components/   Navbar, Hero, ProductSection, ProductCard, HowItWorks,
                SarahSection (WhatsApp/Sarah), KnifeSharpening,
                Testimonials, Footer
  data/
    products.ts  Mock catalog — shape is ready to swap for a real API call
  index.css      Design tokens: color, type, radii, shadows, spacing
```

## What's a placeholder

- Product data (src/data/products.ts) — realistic mock cuts/prices,
  structured so swapping in a live API just means replacing this file.
- Testimonials — clearly marked placeholder quotes in Testimonials.tsx;
  replace with real customer quotes before launch.
- Product/hero photography — stock imagery standing in for real KnifeBud
  product shots.
- WhatsApp number and social links — placeholder 2340000000000 /
  @knifebudng, swap for the real ones.

## Design tokens

Everything lives in src/index.css as CSS custom properties: --kb-cream,
--kb-brown-900, --kb-coral, --font-display (Manrope), --font-accent
(Fraunces italic, for accent words like the "meat" in the hero headline),
--font-body (Inter), plus radii, shadows, and an 8px-based spacing scale.
