# Sublime — Design System

Landing page for a product-customization business (sublimación / merchandising). Dark, professional, modern.

## Direction & feel
- **Dark theme** built around "inked studio" surfaces: deep near-black canvas with subtly elevated dark cards that evoke a sublimated/premium blank surface.
- Single accent used with intention; everything else is neutral dark.

## Tokens (defined in `globals.css` via Tailwind v4 `@theme`)
- Surfaces: `ink-950` (base) → `ink-900` (alt section) → `ink-850` (card) → `ink-800` (hover/inset/image bg) → `ink-700` (fill).
- Text: `fg` (primary) · `fg-secondary` (supporting) · `fg-muted` (metadata/muted).
- Borders: `border-base` (rgba white .08) · `border-soft` (.05) · `border-strong` (.14).
- Accent: `accent` (#ec4899 pink), `accent-strong` (#f472b6), `accent-soft` (rgba .14 fill for chips/icons).
- WhatsApp green (#25D366) reserved exclusively for the WhatsApp button.

## Depth strategy
- **Borders + subtle shadow** (thin-border strategy, works on dark). Shadows don't read on dark, so elevation is conveyed by surface lightness shifts (ink-850 vs ink-950) plus a 1px hairline. One ring: `0 0 0 1px rgba(255,255,255,0.04)`.
- Shared `.dark-card` utility: `bg-ink-850`, `border-border-soft`, soft ring. Hover → `border-border-strong`.

## Spacing
- Base units 4/8px via Tailwind scale. Section padding uses a consistent `py-20 md:py-28/32`. Grid gaps `gap-5`/`gap-6`, header→content `mb-12/mb-14`.

## Typography
- Rubik (`--font-rubik`) as the app font; Orbitron reserved for the brand wordmark (Hero + Header logo).
- Hierarchy driven by weight + color/opacity (not size alone): section titles `font-bold` + `tracking-tight`, body `text-fg-secondary`, metadata `text-fg-muted text-sm`.
- `text-pretty` on paragraphs, `text-balance`/`tracking-tight` on headings.

## Component patterns
- **Card (product/service/step/related)**: `.dark-card` rounded-`2xl`, image `aspect-square bg-ink-800 p-4/6`, hover image `scale-110`, CTA link `text-accent-strong` with growing `gap`.
- **Primary button**: `bg-accent hover:bg-accent-strong text-white rounded-xl py-3/3.5 px-6 font-semibold active:scale-[0.97]`.
- **Outline button (dark)**: `border-border-strong bg-ink-800 hover:bg-accent hover:border-accent text-fg hover:text-white rounded-xl`.
- **Step number**: 11×11 `bg-accent text-white rounded-full font-bold`.
- **Service icon chip**: 12×12 `rounded-xl bg-accent-soft text-accent-strong`.
- **Category/product badge**: `bg-accent text-white rounded-full text-xs font-semibold px-3 py-1`.
- **Section header**: centered, `h2 text-3xl md:text-5xl font-bold tracking-tight mb-4` + `p text-fg-secondary max-w-2xl`.

## Backgrounds
- Alternate dark sections: base `bg-ink-950`, alt sections (Servicios, OrderSteps) `bg-ink-900` with `.dot-grid` overlay (`opacity-40`) as the signature texture.
- `.dot-grid`: radial pink dots (1px, rgba accent .1) at 22px — evokes a sublimation/print grid.

## Signature
"Print-dot grid" backdrop + inked dark surfaces + single pink ink accent. Appears as the dot-grid across sections, the pink accent cards/buttons, and the Orbitron wordmark.
