# Shatoya Desree LLC — Design System

Shatoya "Toya" Bennett is a licensed barber and loctician working out of her own suite at
**455 Grayson Hwy, Suite 129, Lawrenceville, GA 30046**. She does retwists, interlocking, loc
repair, instant locs, comb coils, platts and rod sets — and, from the barbering side she never
left, haircuts, fades, lineups and beard work. She also takes house calls. Booking runs through
Square; almost all new clients arrive from Instagram, on a phone.

The business is one person. The design system exists to make one thing look and read the way she
works: **quiet, exact, unhurried, and worth the money.** The register is Black elegance — editorial
magazine spread, luxury salon suite, gallery wall. Never novelty barbershop.

## Sources used
| Source | What was taken from it |
| --- | --- |
| `uploads/lgog.jpg` (225×225) | The circular SD monogram badge. Copied to `assets/logo-badge.jpg`. Gold sampled at `#C89848`. Supersedes the earlier 150×150 upload. |
| `uploads/Screenshot_1–11.jpg` | Eleven photographs of her work — loc updos, retwists, comb coils, platts, kids starter locs. Copied to `assets/gallery/` with descriptive filenames. |
| Square booking site — `https://book.squareup.com/appointments/215e561d-b611-4dcd-beaf-26cfaa1ac7c2/location/0Q0830DRJQKZ6/services` | The complete service menu with real prices and durations, hours, address, phone, Instagram, cancellation policy, no-show fees. Public booking URL: `https://square.site/book/0Q0830DRJQKZ6/shatoya-desree-llc-lawrenceville-ga` |
| Yelp — `https://www.yelp.com/biz/shatoya-desree-duluth` | Client review (Tony L.). |
| MapQuest — `https://www.mapquest.com/us/georgia/shatoya-desree-796767202` | Address confirmation. |
| Google reviews pasted in the brief | Larry O. and Tyeshia L. reviews; the "house calls" detail. |

**Business facts of record** (all verified against Square, all live in `ui_kits/website/data.js`):
phone (470) 624-5865 · shatoyadesree@gmail.com · instagram.com/shatoya.desree ·
Mon–Fri 8:00 AM–2:30 PM (1:00–1:30 PM break) · Sat 5:00 AM–12:00 PM · Sun closed ·
24-hour cancellation window · prepayment required · no-show fees $8–$35 by service ·
prices $10–$400, tax included.

---

## Content fundamentals

**Person.** First person singular, always. "I have been behind the chair for years." "I hold your
chair for 15 minutes." Never "we", never "our team" — there is no team, and the intimacy is the
selling point. Address the reader as "you".

**Register.** Plain, declarative, warm, unbothered. Short sentences carrying real information.
The copy earns trust by being specific, not by being enthusiastic: *"Short to shoulder runs an
hour. Longer hair gets a longer window."* beats *"Amazing loc services tailored to you!"*

**Policies are written as care, not as rules.** The Square policy reads "Must cancel 24hrs before
appointment time." The site says: *"Cancel or move your appointment at least 24 hours ahead and
there is no charge."* Same rule, opposite feeling. State the consequence once, plainly, and move on.

**Casing.** Sentence case in body copy. Title case in button labels and headings — CSS uppercases
buttons and eyebrow labels, so write `Book Appointment`, not `BOOK APPOINTMENT`. Service names
keep their Square capitalisation.

**Punctuation.** No exclamation points. En dash for ranges ("8:00 AM – 2:30 PM") and for asides.
Ampersands only in short labels ("Services & Pricing"), never mid-sentence.

**Emoji.** Never. Not in copy, not in nav, not in the accordion, not as icons.

**The CTA is one string: "Book Appointment."** Never "Book Now", "Reserve", "Schedule", or
"Let's Go". Secondary links are lowercase-feeling and quiet: "See the work", "More on Instagram".

**Testimonials are trimmed to one sentence.** Tony's full Yelp review is a paragraph; the site
runs *"You will leave her chair happy and confident."* Keep the client's first name only.

**Do not write:** "pamper", "luxury experience", "unleash", "journey" as a marketing abstraction
(a loc journey is fine — that is what clients call it), "hair goals", "book your appointment
today", or anything with a countdown.

---

## Visual foundations

**Colour.** Four families, all in `tokens/colors.css`.
- *Ink* (`--ink-1000` → `--ink-400`) — a matte, very slightly warm black. `--ink-900 #0B0A09`
  is the page ground everywhere.
- *Brass* (`--brass-300` → `--brass-700`, canonical `--brass-500 #C89A4E`) — sampled from the
  logo. This is **the** accent and the only saturated colour in the system. Brass appears as
  hairlines, small-caps eyebrows, prices, underlines, button borders, and as a *fill only on
  buttons*. Never a brass panel, never a brass heading block, never a brass gradient.
- *Bone* (`--bone-50` → `--bone-500`) — ivory type on dark, and the ground for the two light
  bands (About, Policies) via the `.sd-on-bone` scope, which re-points the same semantic tokens.
- *Deep support* (`--oxblood-700/800`, `--espresso-700`) — one full-bleed band each, at most.
  The testimonials section is oxblood. Never used for type.

Consume the semantic names (`--surface-page`, `--text-display`, `--line-accent`), not the ramp.

**Type.** `Cormorant Garamond` (display, weights 300/400, tracking −0.015em, leading 1.02–1.14)
against `Jost` (interface, 400/500, leading 1.72, measure 64ch). Headlines are large and set
light — the elegance comes from the thin weight at scale, not from ornament. Small-caps labels are
letterspaced at `0.22em`; buttons at `0.16em`; the wordmark at `0.34em`. Testimonials are the
only italic in the system.

**Layout.** Heavy negative space and asymmetry. Vertical section padding is
`clamp(80px, 12vw, 160px)`; gutters run 24px on mobile, 48px tablet, 80px desktop; content caps
at 1320px, prose at 64ch. Two-column bands are never 50/50 — 0.9/1.1, 280px/1fr, 1fr/1.2fr.
Fixed elements: the header (transparent over the hero, condensing to a blurred ink bar with a
brass hairline after 80px of scroll) and the mobile booking bar pinned to the bottom.

**Backgrounds and imagery.** Photography is the only decoration. The real library is warm interior
light on deep browns and golds — square Instagram crops, unretouched, faces often turned away so
the *hair* is the subject. Render at `saturate(.92–.94)` so the images sit inside the palette
instead of fighting the brass. Never cool-toned, never black and white, never retouched smooth. The hero stacks: image → `--vignette` radial → `--overlay-hero` protection gradient →
SVG turbulence grain at `--grain-opacity: .045`. No patterns, no textures, no illustration, no
gradient as a decorative surface — the only gradients in the system are protection gradients
behind text.

**Corner radii.** Effectively square: `--radius-xs 1px`, `--radius-sm 2px`, `--radius-md 3px`.
`--radius-round` exists for the circular logo badge and nothing else. No pills, no 12px cards.

**Cards — there are none.** Services are a ruled menu, not cards. Testimonials are bare type.
Gallery tiles are edge-to-edge images with a 1px radius. If a design needs grouping, it gets a
hairline rule, not a container.

**Borders and rules.** Always 1px. `--line-hairline` (neutral) for structure,
`--line-accent-soft` (brass at 32%) between service rows, `--line-accent` for emphasis
underlines. Never 2px, never doubled.

**Shadows.** Elevation is carried by value and hairline, not by shadow. Only two shadows exist:
`--shadow-bar` under the sticky booking bar and `--shadow-overlay` under the lightbox. No card
shadows, ever.

**Transparency and blur.** Only on fixed chrome — the scrolled header (`rgba(11,10,9,.86)`) and
the booking bar (`rgba(11,10,9,.92)`), both with `--blur-bar` (`saturate(140%) blur(14px)`),
plus the lightbox scrim at `.72`. Never on content surfaces.

**Motion.** Slow, gentle, nothing bouncy — no spring, no overshoot, no scale-in. The signature is
a fade-and-rise on scroll: opacity 0→1 with a 24px translate over `--dur-reveal 900ms` on
`--ease-out-soft cubic-bezier(.16,1,.3,1)`, staggered ~60–140ms between siblings. Controls
transition at 200ms. Everything collapses to 0ms under `prefers-reduced-motion`.

**Hover.** Brass *lightens* (`--brass-500` → `--brass-400`); ink text lifts to brass; outline
buttons pick up a 10% brass wash; gallery images lose their desaturation and scale 1.03 over
640ms. Nothing moves position on hover.

**Press.** Opacity to .88. No shrink, no shadow change.

**Focus.** 1px `--brass-400` outline at 3px offset. Never removed.

**Disabled.** Opacity .38, `cursor: not-allowed`, colour unchanged.

**Tap targets.** `--tap-min: 48px` — never below 44px, and service rows meet it by padding.

---

## Iconography

**There is no icon set, and that is the decision, not a gap.** The source material contains
exactly one graphic — the monogram badge. Nothing in the brand's own material uses icons, and the
editorial register does not want them: a gallery-wall layout with a tray of little glyphs in it
stops being a gallery wall.

What replaces icons:
- **Letterspaced small-caps words.** "Call", "Instagram", "Directions", "Close" — text, not
  symbols. This is the default and covers almost every case.
- **Hairlines as affordances.** The `Rule` component, the trailing dash in `SectionLabel`, and
  the underline on `Button variant="ghost"`.
- **Two CSS-drawn primitives only**: the accordion's plus/minus (two 1px `<span>` bars, the
  vertical one `scaleY(0)` when open) and the testimonial pager's 1px tick marks. Both are
  geometry, not illustration.

**No icon font. No SVG icon library. No emoji. No unicode dingbats.** If a future surface genuinely
needs pictographic icons (a client portal, say), use **Lucide** at 1.25px stroke via CDN and
recolour to `--brass-500` — but flag it, because it would be an addition to the brand, not a
recovery of it.

**The mark.** `assets/logo-badge.jpg` — a black disc with a gold SD monogram and
`SHATOYA DESREE | LOCTICIAN` arched around the top. Supplied as a **225×225 JPEG only**, which is
still too small for print. Render it at 36px (header), 72–88px (footer and closing CTA), 120px (specimen).
Where the mark cannot be used, set the brand name in Jost at `--tracking-wordmark 0.34em`.
**Nothing in this system redraws or reconstructs the mark.**

---

## Index

**Root**
- `styles.css` — the single entry point. `@import` lines only.
- `thumbnail.html` — homepage tile.
- `SKILL.md` — Agent Skills wrapper.
- `assets/logo-badge.jpg` — the monogram badge (client-supplied, 150×150 JPEG).

**Tokens** (`tokens/`) — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`,
`radius-border.css`, `elevation.css`, `motion.css`, `base.css`.

**Guidelines** (`guidelines/`) — 20 specimen cards feeding the Design System tab, grouped
Colors / Type / Spacing / Brand.

**Components** (`components/`) — 18 primitives, each with `.jsx`, `.d.ts` and `.prompt.md`.

- `core/` — **Button**, **SectionLabel**, **Rule**, **Badge**
- `content/` — **ServiceRow**, **Testimonial**, **GalleryTile**, **AccordionItem**, **HoursTable**, **ProcessStep**, **ContactLine**, **ImagePlaceholder**
- `navigation/` — **SiteHeader**, **MobileNav**, **StickyBookBar**, **SiteFooter**
- `forms/` — **Input**, **Textarea**

**UI kit** (`ui_kits/website/`) — `index.html` (the one-page site) and `service.html` (the
per-category SEO landing page), plus `data.js`, `Sections.jsx`, `App.jsx`, `ServicePage.jsx`.
See `ui_kits/website/README.md`.

### Intentional additions
No source defined a component inventory — there is no existing website, Figma file or codebase —
so the set above was authored from the brief's required sections. Each primitive maps to a
section the brief names. Three are additions beyond the brief's section list: `ImagePlaceholder`
(so missing photography is visibly, specifically labelled rather than silently faked with stock),
`ProcessStep` (the "first time here" sequence — booking anxiety is the biggest drop-off on a
prepaid booking flow), and `ContactLine` (so a phone number is never rendered as un-tappable text).

### Substitutions and gaps
- **Fonts are Google Fonts substitutes.** No font binaries were supplied. Cormorant Garamond
  stands in for the high-contrast serif and Jost for the neutral sans. They load from the Google
  Fonts CDN in `tokens/fonts.css` — there are no local `@font-face` binaries in this project.
- **Photography is real but partial.** Eleven client-supplied work photos are in `assets/gallery/`
  and wired through the site. Missing: a portrait of Toya, and any barbering shot (fade, lineup,
  beard) — the Barbering category is priced but unproven.
- **The logo is a 225×225 JPEG** with no vector or transparent version.
- **Years behind the chair and licence number** are not in any source; the About copy says "years"
  and "Licensed in Georgia" as placeholders.
