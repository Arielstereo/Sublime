# AGENTS.md — Sublime (Next.js + Tailwind v4)

## Quick Commands
```bash
npm run dev           # dev server on localhost:3000
npm run build         # production build
npm run start         # run production build
npm run lint          # eslint (extends next/core-web-vitals)
npm run generate-catalog  # generate public/catalogo.pdf from src/data/products
```

## Architecture
- **Framework**: Next.js 16 (App Router, React 19)
- **Styling**: Tailwind v4 (`@tailwindcss/postcss`), CSS variables, `src/app/globals.css`
- **Path alias**: `@/*` → `src/*` (see `jsconfig.json`)
- **Components**: `src/app/components/` (all client components, no separate `/components` folder)
- **Data**: Static JSON files in `src/data/products/<category>/<id>.json` aggregated by `src/data/index.js`
- **Routing**: `/products/[id]` serves both category views (string id) and product detail (numeric id)

## Key Conventions
- **Client components** use `"use client"` directive; server components are default
- **Icons**: Iconify via Tailwind (`icon-[collection--name]`), lucide + streamline-pixel collections
- **Images**: Next.js `<Image>` with local `/public` assets; product images in `public/tazas/`, `public/remeras/`, etc.
- **WhatsApp deep links**: Built via `waLink(message)` helper in `products/[id]/page.jsx`
- **Language**: Spanish (rioplatense voseo) — "Personalizá", "Elejí"
- **Category routing**: `isCategory(id)` checks `categoryNames` keys; string IDs route to `CategoryView`, numeric to `ProductDetail`

## Product Data Model
Each product JSON in `src/data/products/<category>/`:
```json
{
  "id": 1,
  "name": "...",
  "category": "kids",
  "image": "/remeras/img.png",
  "image2": "/remeras/img2.png",
  "image3": "/remeras/img3.png",
  "description": "short",
  "fullDescription": "long",
  "price": 15000,
  "wholesalePrice": { "minQty": 10, "price": 12000 },
  "promoPrice": 13000,
  "colors": ["#hex", "#hex"],
  "features": ["...", "..."],
  "badgeText": "NUEVO" // optional
}
```

## Adding a Product
1. Add images to `public/<category>/`
2. Create `src/data/products/<category>/<id>.json`
3. Import & export in `src/data/index.js` (maintain numeric order)
4. Run `npm run generate-catalog` to update PDF

## Deploy
- Target: Vercel (`sublime.empren.dev`)
- Build command: `npm run build`
- Output: `.next/` (default)

## Environment
- `.env.local` present (not committed)
- No database, no auth, no API routes — fully static + client-side WhatsApp links

## Testing / QA
- No test framework configured; manual verification via `npm run dev`
- Lint before commit: `npm run lint`