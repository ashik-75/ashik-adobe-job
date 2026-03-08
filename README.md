# ashik.dev — Adobe Plugin Developer Portfolio

Personal portfolio site built with **Next.js 15** and **Tailwind CSS**, showcasing custom Adobe plugin development services using CEP and UXP.

## Stack

- **Framework** — Next.js 15 (App Router)
- **Styling** — Tailwind CSS + inline styles
- **Fonts** — Playfair Display, IBM Plex Mono (via `next/font/google`)

## Structure

```
app/
├── layout.tsx      # Fonts, metadata, JSON-LD structured data
├── page.tsx        # Single-page site (Hero, Services, Process, Contact)
└── globals.css     # Base styles
public/
├── og-image.png    # 1200×630 Open Graph image
├── icon.png        # Favicon 48×48
└── apple-icon.png  # Apple touch icon 180×180
```

## Sections

- **Hero** — Intro, tech stack pills, Adobe app badges
- **Services** — Photoshop, Illustrator, InDesign plugin capabilities
- **Process** — Discovery → Architecture → Build → Deliver
- **Contact** — Email, WhatsApp, LinkedIn, YouTube

## Getting Started

```bash
npm install
npm run dev
```

## Before Deploying

- Replace `ashik.dev` in `layout.tsx` with your real domain
- Add `og-image.png`, `icon.png`, and `apple-icon.png` to `/public`
- Update contact details in `page.tsx` if needed