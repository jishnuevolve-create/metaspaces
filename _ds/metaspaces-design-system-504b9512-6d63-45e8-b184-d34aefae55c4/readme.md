# Metaspaces Design System

Design system for **Metaspaces** — premium home interior designers in Bangalore, a Seasun Group company. Modular kitchens, wardrobes, living/bedroom interiors and full-home packages, sold through a marketing site and paid-ad landing pages, with leads handed off to WhatsApp.

## Sources used

| Source | What it gave |
|---|---|
| `https://metaspaces.in/` (fetched 11 Sep 2026) | All product copy, service inventory, process steps, stats, testimonials, FAQ, form fields, locality list, and the `theme-color: #1f2024` brand anchor |
| `uploads/Screenshot 2026-09-11 114516.png` | Layout inspiration only — a travel landing page ("Skywings"). Its *structure* (split hero with rounded image + floating chip, trust strip, 3-up card row, highlighted middle process step, split closing CTA) was adapted; none of its visual identity was. |
| Brief supplied in chat | Colour roles, type direction, the step-form spec |

**Not obtainable from this environment:** the site's own stylesheet, the logo at `metaspaces.in/assets/img/logo.png`, and the photography in `metaspaces.in/assets/img/`. Network fetches of binaries and of un-referenced URLs are blocked here. Consequences are flagged under *Known gaps* below.

---

## Products

1. **Marketing website** (`ui_kits/website/`) — the metaspaces.in homepage: multi-slide hero, service grid, signature-kitchen block, transformations, process, why-us, reviews, FAQ, locality list, consultation form, SEO footer.
2. **Ad landing page** (`ui_kits/ad-landing/`) — a single-goal page for paid traffic. No nav, one CTA, and a five-step progressive lead form (service → property → locality → timeline → contact) in place of the long form.

---

## Content fundamentals

**Voice.** Plain, specific, slightly formal Indian-English professional service writing. Confident without hype — the persuasion comes from specificity (₹ figures, week counts, material names), not adjectives.

**Person.** "We" for Metaspaces, "you/your" for the homeowner. Never "I". Never third-person ("Metaspaces offers…") outside SEO meta text and the FAQ, where the brand name is repeated deliberately for search.

> "We understand your home, lifestyle, timeline and budget — free of charge."
> "Tell us a little about your home."

**Casing.** Hero headlines are Title Case ("Designing Beautiful Homes You'll Love to Live In"). Every section heading is sentence case ("A simple, transparent process"). Eyebrows are Sentence case in markup, uppercased by CSS with 0.14em tracking ("What we do", "How it works", "Across the city"). Buttons are Title Case ("Book Free Consultation").

**Sentence shape.** Short lede, then one long qualifying sentence with an em-dash aside. Triads are everywhere and are load-bearing, not decorative — they name the real scope: "design, production and installation", "aesthetics, storage and budget".

**Numbers.** Always concrete, always with a unit: 500+, 6–10 weeks, 100%, 20+, ₹3.99 Lakh, ₹4–8 lakh. En-dashes in ranges. "Lakh" spelled out in hero copy, "L" abbreviated only in tight price badges. Asterisk on promotional prices (₹3.99 Lakh*).

**Hedging and honesty.** Costs are always ranged and qualified ("typically ranges from around… depends on scope"). Claims are verifiable ("factory-backed furniture support through Seasun Group / Radian Ergo"). This candour *is* the differentiator — do not tighten it into a slogan.

**Local specificity.** Bangalore localities are named in full and often. "Built to last in Bangalore's climate", "how Bangalore cooks". Never generic "your city".

**Reassurance clauses** sit immediately after every ask: "free of charge", "no obligation", "We'll respond within one business day", "We respect your privacy".

**Emoji.** The legacy site uses them as section icons (🛋️ 🍳 👤 📋 🪵). **This system replaces all of them with Lucide line icons.** Do not write emoji in new Metaspaces work. Unicode `★` (gold) and `✓` are the two glyphs still used as typographic marks.

**Words to avoid:** "luxury", "world-class", "revolutionize", "elevate", "bespoke", "curated", "seamless", "unlock". The brand says "premium", "transparent", "accountable", "practical", "durable".

---

## Visual foundations

**Colour.** One warm accent over charcoal ink on warm paper.
- `--ink-900 #1F2024` is the dominant colour — headlines, header wordmark, footer ground. Taken from the site's own `theme-color`.
- `--paper-050 #FAF8F5` is the page ground; `#FFFFFF` is reserved for card surfaces so cards read as lifted, and `--paper-100 #F4F0EA` bands alternate sections.
- `--terracotta-600 #C1622D` is the **only** accent. Buttons, active states, eyebrows, badges, link colour, progress fill. Never a background for large areas, never two accents on screen.
- `--gold-600 #B8935A` for star ratings and offer flags; `--olive-600 #6B7654` for reassurance/success ticks. Neither is a second brand colour.
- Body copy is `--ink-500 #6B6B6F` at 16/1.7 — muted, never black.

**Type.** Manrope throughout — rounded-but-confident, ExtraBold (800) for display, 700 for card titles, 400/500 for body. Tracking tightens as size grows (−0.03em hero, −0.02em headings, 0 body). Fraunces is the single exception, used only for testimonial quotes. Line-height is generous everywhere (1.7 body, 1.65 lede); density is never the answer.

**Scale jumps are deliberate.** Hero 64px → section head 36px → card title 22px → body 16px. Never compress that ladder.

**Layout.** 1200px container, gutters clamped 20→48px, sections 64→112px tall. 3-up grids at 24px gap, collapsing 3 → 2 → 1. Split blocks (hero, kitchen feature, closing CTA) are roughly 1:1 with the image on alternating sides. The sticky header is the only fixed element on the website kit; the landing page adds fixed WhatsApp/call buttons bottom-right.

**Corners.** 32px on hero and feature imagery, 24px on cards, 16px on inputs and option cards, and full pills (999px) on every button, chip and badge. Nothing in this system has a square corner.

**Cards.** White, 24px radius, a 1px `--border-soft` hairline *and* a soft warm shadow — both, not one. `--shadow-card 0 8px 24px rgba(31,32,36,.07)`; on hover it deepens to `0 16px 40px rgba(31,32,36,.12)` and the card rises 3px. Shadows are always tinted with the ink colour at low alpha, never neutral black.

**Imagery.** Warm, daylit, styled interiors — real rooms, no CGI look, no filters, no grain, no duotone. Always `object-fit: cover` in a fixed aspect ratio (4:3 for cards, 5:4 for the hero). Photos zoom to 1.04 over 420ms on card hover. Full-bleed photography appears only inside the website hero, where a left-to-right charcoal scrim (82% → 12%) carries white text; elsewhere photos are contained, rounded and shadowed. No background patterns, no textures, no gradients as decoration — the only gradients in the system are photo scrims.

**Transparency and blur.** Three places only: the sticky header (`rgba(250,248,245,.86)` + 12px blur), floating badges over photography (`rgba(255,255,255,.94)` + 10px blur), and the `onPhoto` button variant. Everywhere else surfaces are opaque.

**Motion.** Ease-out `cubic-bezier(.22,.61,.36,1)` at three speeds: 140ms (buttons, chips, focus), 220ms (card lift, accordion, dots), 420ms (image zoom, step transitions). Step-form screens slide in 18px from the right while fading. No bounces, no springs, no scroll-triggered reveals, no parallax.

**Hover.** Buttons darken to the 700 shade and lift 3px. Cards lift 3px, deepen their shadow, and zoom their image. Chips shift border to the accent tint and text to terracotta. Links go `#C1622D → #9C4E22`. Never opacity fades.

**Press.** `scale(.985)`. No colour change beyond the hover state.

**Focus.** 3px `rgba(193,98,45,.28)` ring plus a solid terracotta border on inputs. Always visible — never suppressed.

**Borders.** Hairlines only: `--border-soft #EDEAE5` inside light compositions, `--border-hairline #D8D5D0` for inputs and chips. The FAQ uses bottom hairlines as its only structure. No dividers heavier than 1px, and no coloured left-border accent cards.

---

## Iconography

- **System:** [Lucide](https://lucide.dev) via CDN (`unpkg.com/lucide@0.469.0`), stroke weight **1.75**, sizes 16/20/24/28. Wrapped by the `Icon` component.
- **This is a substitution and should be reviewed.** metaspaces.in ships no icon font, sprite sheet or SVG set — its section icons are emoji and its ticks are the `✓` character. Lucide's rounded-square line style is the closest match to the brand's soft, practical register. If Metaspaces has a real icon set, replace `Icon`'s internals and this section.
- **Treatment:** a glyph almost never sits bare. It lives in a 38–44px terracotta-tinted circle (`--surface-accent-soft` background, `--terracotta-600` stroke), or inline in a button at 16px inheriting the button's text colour.
- **The working vocabulary:** `chef-hat` (kitchen), `door-open` (wardrobes), `sofa` (living), `bed-double` (bedroom), `house` (full home), `lightbulb` (ceiling/lighting), `user-round`, `clipboard-list`, `tree-pine` (materials), `ruler` (space planning), `wrench` (execution), `factory` (Seasun support), `map-pin`, `phone`, `message-circle` (WhatsApp), `star`, `check`, `arrow-right`, `arrow-left`, `chevron-down`, `calendar-clock`, `receipt-indian-rupee`, `zap`.
- **Unicode still in use:** `★` for star ratings (gold, letter-spaced 2px) and `→` in text links. **Emoji: never.**
- **Logo:** none supplied. Wherever a mark belongs, the wordmark "Metaspaces" is set in Manrope 800 at −0.035em — see `guidelines/brand-mark.html`. No mark was drawn or approximated.

---

## Components

Grouped by concern under `components/`. Every component is a plain React function with a `.d.ts` props contract and a `.prompt.md` usage note; styling reads CSS custom properties only.

**`components/core/`** — `Button`, `Pill`, `Chip`, `Stat`, `Icon`
**`components/content/`** — `SectionHeading`, `ServiceCard`, `FloatingBadge`, `ProcessStep`, `TestimonialCard`, `FaqItem`
**`components/forms/`** — `Field`, `Input`, `Textarea`, `Select`, `OptionCard`, `ProgressDots`, `SearchSelect`

The inventory is derived from what metaspaces.in actually renders. **Intentional additions** (no direct counterpart on the live site, added because the brief's landing page needs them):
- `Icon` — wrapper for the substituted Lucide set.
- `OptionCard`, `ProgressDots`, `SearchSelect` — required by the five-step form specified in the brief; the live site has only a single long `<select>`-based form.
- `FloatingBadge` — the hero stat chip adapted from the inspiration screenshot.

## Index

| Path | What |
|---|---|
| `styles.css` | Single entry point — `@import`s every token file. Consumers link this. |
| `tokens/` | `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `elevation.css`, `motion.css`, `fonts.css`, `base.css` |
| `components/core/`, `components/content/`, `components/forms/` | Reusable primitives + their `@dsCard` specimen HTML |
| `guidelines/` | 16 foundation specimen cards (colour, type, spacing, radius, elevation, motion, brand mark, photography, iconography) |
| `ui_kits/website/` | metaspaces.in homepage recreation — see its README |
| `ui_kits/ad-landing/` | Paid-ad landing page with the five-step lead form — see its README |
| `assets/img/` | **Placeholder** interior images (see below) |
| `data/localities.js` | The 45-item Bangalore locality list |
| `thumbnail.html` | Homepage tile for this design system |
| `SKILL.md` | Agent-skill wrapper for use in Claude Code |

## Known gaps

1. **No logo file.** `metaspaces.in/assets/img/logo.png` could not be downloaded. The wordmark stands in everywhere.
2. **Placeholder photography.** `assets/img/*.jpg` are generated grey-warm placeholders labelled with the filename they stand in for. Drop the real files from `metaspaces.in/assets/img/` in with the same names (`kitchen.jpg`, `wardrobe.jpg`, `living.jpg`, `bedroom.jpg`, `home.jpg`, `ceiling.jpg`, `kitchen-big.jpg`, `hero.jpg`, `cta.jpg`, `before.jpg`, `after.jpg`) and every card and kit updates with no code change.
3. **Fonts are linked, not self-hosted.** Manrope and Fraunces load from Google Fonts. Manrope is a *chosen* face (the brief's shortlist), not a confirmed brand font — the live site's stylesheet was unreadable from here. If Metaspaces already uses a different family, that is a one-line change in `tokens/fonts.css`.
4. **Accent chosen, not sampled.** The brief said to take the accent from the logo; the logo was unreachable, so terracotta `#C1622D` was picked from the brief's own shortlist as the best fit for warm premium interiors. Confirm against the real mark.
5. **Icons substituted** — see Iconography above.
