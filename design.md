# Ahsas Cab - Design System & Style Guide

This document serves as the single source of truth for the styling, components, and animations used across the Ahsas Cab Next.js application. The overarching theme is "Professional & Spiritual," leveraging premium glassmorphism effects, rich colors, and elegant typography.

---

## 1. Brand & Color Scheme

The color palette relies on deep contrasts between midnight navy and antique gold to convey luxury, trust, and spiritual reverence.

### Base Variables (`globals.css`)
- **Background (Pearl White)**: `--background: 0 0% 100%`
- **Foreground (Midnight Navy)**: `--foreground: 222 47% 11%`

### Theme Colors (Tailwind Config)
- **Primary / Gold**: `#D9B34A` (`hsl(43, 74%, 49%)`). Used for primary buttons, highlighted text, and active states.
  - *Tailwind class*: `bg-primary`, `text-gold`
- **Secondary / Navy**: `#0F172A` (`hsl(222, 47%, 11%)`). Used for footers, dark sections, and secondary buttons.
  - *Tailwind class*: `bg-secondary`, `text-navy`
- **Accent / Desert Sand**: Soft gold/beige used for subtle highlights and borders.

### Gradients
- **Gold Gradient**: `linear-gradient(135deg, #F2D57E 0%, #D4AF37 50%, #997B28 100%)`
- **Navy Gradient**: `linear-gradient(135deg, #1E293B 0%, #0F172A 100%)`

---

## 2. Typography

The application utilizes Next.js optimized Google Fonts (`next/font/google`).

- **Playfair Display**: Used for premium headings (`h1`, `h2`, `h3`). It provides a classic, luxurious serif look.
  - *Tailwind class*: `font-playfair`
- **Inter / Geist Sans**: Used for all body text, paragraphs, and UI elements. Clean, highly legible sans-serif.
  - *Tailwind class*: `font-sans`
- **Cairo**: Used specifically for Arabic script translations and stylized subheadings. It provides a clean, modern, and highly legible Naskh-style geometric aesthetic.
  - *Tailwind class*: `font-cairo` or `font-arabic`

---

## 3. UI Components

### Buttons (`GlassButton.tsx`)
Buttons feature a subtle glass effect, rounded corners, and a slight scale animation on hover/click.

**Variants:**
- `primary`: Solid gold background with white text. (`bg-primary text-primary-foreground`)
- `secondary`: Solid navy background with gold/white text. (`bg-secondary text-secondary-foreground`)
- `outline`: Transparent background with a gold border and text. (`bg-transparent border-primary/20 hover:bg-primary/5`)

**Sizes:**
- `sm`: `h-9 px-4 text-sm`
- `md` (Default): `h-11 px-6 text-base`
- `lg`: `h-14 px-8 text-lg`

**Interactions:** All buttons use `hover:scale-[1.02] active:scale-[0.98] transition-all duration-300`.

### Cards (`GlassCard.tsx`)
Used for features, fleet vehicles, and testimonials. They combine semi-transparent backgrounds with background blur for a "frosted glass" look.

**Core Styles:**
- Layout: Padding `p-6` (or `py-10` for larger feature cards), `rounded-xl` or `rounded-3xl` for modern softness.
- Glass Effect: `bg-white/60 backdrop-blur-md border border-white/20 shadow-lg`.
- Hover State: `hover:scale-[1.02] hover:shadow-xl transition-all duration-300`.

---

## 4. Animation & Motion Guidelines

Animations are designed to be fast, snappy, and premium (typically between `0.3s` and `0.5s`). 

### Entrance Animations (Tailwind Utilities)
For static rendering (like the Hero section), use pure CSS Tailwind utilities instead of bulky JavaScript libraries:
- **Base classes**: `animate-in fade-in fill-mode-both`
- **Slide directions**: `slide-in-from-bottom-4` (or top/left/right)
- **Speed**: `duration-500` (0.5 seconds)
- **Staggering**: Chain delays on sibling elements (`delay-100`, `delay-200`, `delay-300`) to create a cascading entrance effect.

### Scroll Reveal (`ScrollReveal.tsx` & `FadeIn.tsx`)
For elements that appear as the user scrolls down the page:
- **Duration**: `0.3s` to `0.5s` maximum.
- **Delay**: Default `0.1s`.
- **Effect**: Elements should slide up slightly (`translate-y-10` to `0`) while fading from opacity `0` to `1`.

---

## 5. Layout & Sections

### Hero Section Standard
The Hero section is the flagship component of the site and follows strict styling rules:
- **Height**: Minimum 90 viewport height (`min-h-[90vh] md:min-h-screen`) to ensure maximum impact.
- **Background**: Uses `next/image` with `object-cover`.
- **Overlay**: A simple, highly performant dark overlay (`bg-black/60`) is placed directly over the image to guarantee high text contrast and legibility without stressing the GPU.
- **Typography**: `font-playfair` for the main title, with `text-white` and a subtle `drop-shadow-md`.
- **Structure**: Can be center-aligned or two-column (where the right column typically holds a `QuickBookingForm`).
