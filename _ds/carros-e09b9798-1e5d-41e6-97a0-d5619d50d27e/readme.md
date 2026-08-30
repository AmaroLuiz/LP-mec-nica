# Velocity Design System

**Dark luxury + automotive performance + editorial typography + precision UI.**

A design system for a premium performance-vehicle brand. It should read less like a landing page and more like a cross between a premium manufacturer site, a performance dashboard, and an industrial-design editorial.

## Sources given

| Source | What it was |
| --- | --- |
| `uploads/Captura de tela 2026-08-26 195854.png` (copied to `assets/reference/art-direction-reference.png`) | A single 348×633 screenshot of a dark automotive landing page: `VELOCITY. REFINED.` hero, glass spec HUD cards (0-60 MPH 2.1s / RANGE 520+ miles / POWER 1100 HP), a light "DASH BOARD" section with an overlapping dashboard card, and an interior/central-touchscreen section |
| Written brief (pasted into chat) | The complete token spec — palette with usage notes, 70/20/10 colour proportion, type pairing + scale, spacing scale, radii, shadows, motion principles, personality |

No codebase, Figma file, logo, or photography was supplied. Everything visual here derives from those two sources; anything not derivable is flagged as a gap rather than invented.

**Brand name:** the screenshot's headline word "VELOCITY" is used as the working brand name. If the real brand differs, rename `thumbnail.html`, `NavBar`'s default `brand` prop, `SiteFooter.jsx`, and `SKILL.md`.

## Index

| Path | Contents |
| --- | --- |
| `styles.css` | The single entry point consumers link. `@import` list only |
| `tokens/` | `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `elevation.css`, `motion.css`, `base.css` |
| `guidelines/` | 21 foundation specimen cards (Colors, Type, Spacing, Surfaces, Motion, Brand) |
| `components/core/` | `Button`, `IconButton`, `Card`, `GlassPanel`, `Tag`, `Badge`, `EyebrowLabel` |
| `components/forms/` | `Input`, `Select`, `Checkbox`, `Radio`, `Switch` |
| `components/navigation/` | `NavBar`, `Tabs` |
| `components/feedback/` | `Dialog`, `Toast`, `Tooltip`, `ProgressBar` |
| `components/data/` | `MetricCard`, `BarSpark`, `SpecList` |
| `ui_kits/marketing_site/` | Full model page: hero + dashboard + interior + reservation flow (`README.md` inside) |
| `ui_kits/performance_app/` | VX companion app: icon rail, Drive / Charging / Route screens (`README.md` inside) |
| `assets/reference/` | The supplied art-direction screenshot |
| `SKILL.md` | Agent Skills wrapper for use outside this project |

### Component inventory notes

No source defined a component list, so the standard primitive set was authored: Button, IconButton, Input, Select, Checkbox, Radio, Switch, Card, Badge, Tag, Tabs, Dialog, Toast, Tooltip.

**Intentional additions** (each earns its place from the reference screenshot):
- `EyebrowLabel` — the 11px uppercase technical label appears on nearly every element in the reference; it needed one canonical implementation.
- `GlassPanel` — the floating blurred HUD surface over the hero is the system's signature; it is not a Card.
- `MetricCard` — the spec readout (label + large display number + inline chart) is the reference's most distinctive component.
- `BarSpark` — the micro bar chart inside the 0-60 card.
- `SpecList` — the technical key/value rows used throughout spec and dashboard sections.
- `ProgressBar` — required by the reference's HUD gauges and by the "reveal by width" motion rule.

No Avatar, Breadcrumb, Table, Accordion or Menu was authored — nothing in the sources implies them.

---

## CONTENT FUNDAMENTALS

**Voice: an engineer writing for an owner.** Confident, specific, unadorned. Facts do the persuading; adjectives are rationed.

- **Headlines are declarative fragments, punctuated as sentences, often stacked on two lines.** The reference's own hero — `VELOCITY.` / `REFINED.` — is the model: one or two words per line, each terminated with a full stop, uppercase. Follow-ons in the same register: `Build yours.` · `Machined, not moulded.` · `Precision, at scale.`
- **Casing is deliberate and only has three modes.** Display/heading: sentence case or ALL CAPS for hero fragments. Technical labels, nav, tags, metadata: ALL CAPS at 10–12px with 0.04–0.08em tracking. Body: sentence case, never caps.
- **Sub-headlines are often set as uppercase micro-copy, not body text.** In the reference the hero subhead is 11px uppercase over two lines: `EXPERIENCE THE FUTURE OF / PERFORMANCE AND LUXURY.` Use that treatment when the line sits directly under a display headline; use real body type once you're inside a content section.
- **Person: mostly none.** Prefer subject-free technical statements ("Refundable for 14 days", "Confirmed by a specialist") over "we". Address the reader as *you* only in ownership/transactional copy ("Build yours", "your allocation"). Never "I". Never "our team".
- **Numbers are the headline wherever possible.** Values carry the unit in smaller type immediately after the figure: `2.1s`, `520+ miles`, `1100 HP`, `82%`. Keep the unit exactly as the reference sets it — lowercase `s`, lowercase `miles`, uppercase `HP`, `MPH` in labels.
- **Field names are terse and technical.** `0-60 MPH`, `RANGE`, `POWER`, `STATE OF CHARGE`, `DRAG COEFF.` — max three words, abbreviations allowed, no articles.
- **Body copy is short and load-bearing.** 1–3 sentences per block, 40–70 characters per line. Say the mechanism: "Every readout is derived from the same telemetry bus that governs the drive unit."
- **No exclamation marks. No emoji — ever.** No "🚀", no "✨", no emoji in labels, buttons, toasts, or docs. The one expressive device the system allows is the accent-red signal.
- **No marketing intensifiers.** Avoid *revolutionary, game-changing, seamless, effortless, next-generation, unleash*. Avoid empty superlatives; if a claim has a number, use the number.
- **Buttons name the action and, where money is involved, the consequence.** `Explore specifications` · `Configure` · `Reserve — $168,500` · `Stop charging`. Sentence case. Never "Click here", never "Submit".
- **Status and system copy is a log line, not a chat message.** `Reservation received · Reference VX-2291` · `Charging stopped · Session logged · 18 min · 216 mi added`. Use the middle dot as separator, present the fact, offer no apology or celebration.

---

## VISUAL FOUNDATIONS

### Colour
- **Proportion is the rule that matters: ~70% charcoal/graphite, ~20% white/grey, ~10% red.** `#111315` (primary) and `#292C30` (secondary) carry almost everything; `#565A5E` is for UI elements and metal gradients; `#F4F4F2` is the light section ground.
- **Red `#E33B3B` is a signal, never branding.** Legitimate: chart peak bars, active state, live indicator dot, progress fill, one highlighted spec, focus ring, error border. Illegitimate: hero fills, headline colour, logo, large areas, decorative accents. A screen with red in two places is usually one too many.
- **Text: `#F5F5F3` on dark, `#111315` on light, `#B5B7B8` for descriptions/labels/metadata.** Never pure `#FFF` or pure `#000` for type.
- **Imagery colour vibe: cool, desaturated, near-monochrome.** Metallic silver bodies on dark studio floors with wet-reflection highlights; specular highlights are white-blue, shadows are neutral-black. No warm grading, no film grain, no colour casts. If a photo has to sit under text, add `--overlay-bottom` (black 55% → transparent) rather than dimming the whole image.

### Type
- **Space Grotesk 600 for display and headings; Inter 400/500 for body and UI; JetBrains Mono for raw telemetry strings only.** (Substitution flagged below.)
- Display sits at 96/72px desktop (52/44 mobile) with **line-height 0.88–0.95 and letter-spacing −0.04em** — that compression is what produces the stacked `VELOCITY. / REFINED.` look. Headings use −0.025em, line-height ~1.0–1.12.
- Body: 20/16/14px, line-height 1.5–1.55. Labels: 10–12px, weight 500, 0.04–0.08em tracking, uppercase — this single treatment is what makes the whole system read as instrumentation.

### Spacing & layout
- 4px for micro-components, 8px for structure: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 80 · 96 · 128.
- Container `max-width: 1440px`, gutters 32–64px. `128px` between major blocks; desktop should feel generously empty.
- **Deliberate overlap is a structural principle, not an exception.** Cards cross section boundaries (the dashboard card sits ~96px above the light section's top edge), media overruns its container, HUD panels sit partly over the hero. Achieve it with negative margins/absolute offsets, and always give the overlapping element the larger shadow (`--shadow-atmos-lg`) so the depth order reads.
- Fixed elements: the nav is the only sticky chrome (transparent over the hero, `rgba(17,19,21,.72)` + `blur(18px)` once scrolled). Toasts pin bottom-right at 24px. Nothing else is fixed.

### Backgrounds
Flat charcoal or the three-stop hero gradient `#111315 → #292C30 → #111315`; light sections are flat `#F4F4F2`. Photography is full-bleed or inset with 18px radius. **No patterns, no textures, no hand-drawn illustration, no noise, no chromatic gradients.** Where depth is needed, use a radial white 12% highlight behind the subject, not a coloured glow.

### Cards, borders, shadows
- Cards: 16px radius, hairline border (`rgba(255,255,255,.10)` on dark, `rgba(17,19,21,.12)` on light), `0 20px 50px rgba(0,0,0,.18)`. Graphite fill on dark sections, white on light.
- Glass panels: 12–16px radius, `linear-gradient(rgba(255,255,255,.12), rgba(255,255,255,.04))`, `backdrop-filter: blur(18px)`, `1px` border at 20% white, and `0 12px 40px rgba(0,0,0,.22)` **plus an `inset 0 1px 0 rgba(255,255,255,.12)` top highlight** — that inset line is what makes it read as machined glass rather than SaaS glassmorphism.
- Radii by role: buttons 8–10px, cards 14–18px, glass 12–16px, large imagery 16–20px, tags/status 999px. **Never 24px+ on everything** — that reads as generic SaaS.
- Shadows are atmospheric depth, never a hard black drop. Two elevations only (`atmos`, `atmos-lg`) plus the glass recipe.

### Transparency & blur
Use blur only where something meaningful sits behind it: glass HUD over photography, scrolled nav over content, modal scrim (`blur(28px)`), toasts. On a flat fill, use `Card tone="inset"` (4% white) instead — blur with nothing behind it is decoration.

### Motion
- Signature easing `cubic-bezier(.16, 1, .3, 1)`; durations 200 / 450 / 800 / 1200ms. The feel is **mass + precision + controlled speed**.
- Entrances: `opacity 0→1` with `translateY(40px→0)`, 700–1000ms, staggered — never simultaneous. The hero sequence is background → vehicle → headline → subhead → spec cards → indicators, like a system initialising. Images settle `scale(1.05)→scale(1)`.
- Lines, bars, charts, underlines and dividers reveal by `width 0→100%` or `clip-path`.
- Metric numbers count up 0→value **once**, on viewport entry.
- Scroll parallax is extremely subtle: background 0.15x, main image 0.35x, cards 0.50x, text 0.70x.
- **Hover is almost imperceptible:** `translateY(-2px)`, `scale(1.01)`, `brightness(1.05)`. Nav/tab underlines grow from 0. Never `scale(1.1)`, rotation, bounce, or colour flips.
- **Press:** `scale(0.995)` with no shadow change — the element stiffens, it doesn't squash.
- **Focus:** 1px accent ring + 4px accent glow at 18%. Never remove focus styling.
- Respect `prefers-reduced-motion`: keep opacity fades, drop translate/scale/count-up.

---

## ICONOGRAPHY

**No icon assets were supplied.** The reference screenshot shows a small set of thin, single-weight outline glyphs at ~14–16px (nav markers, a battery/charge glyph, a right arrow in the CTA, a chevron) and no filled or two-tone icons.

- **Substitution (flagged):** [Lucide](https://lucide.dev) is used, loaded from CDN (`https://unpkg.com/lucide-static@0.469.0/icons/<name>.svg`) — closest available match for the reference's 1.5–2px uniform-stroke, rounded-cap outline style. On dark surfaces the SVGs are rendered via `<img>` + `filter: invert(1)` at 0.9 opacity; the accent variant uses a hue-rotate filter. **If the brand has real icon files, drop them into `assets/icons/` and replace the `Icon` / `AppIcon` helpers in the UI kits.**
- Sizes: 14px inside `sm` controls, 16px default, 18–20px for rail/HUD. Stroke stays visually 1.5px — do not scale a 16px icon up to 32px.
- Colour: icons inherit text colour (`#F5F5F3` / `#B5B7B8`). Accent red only for an active or live state.
- **No emoji, ever.** No unicode pictographs as icons. The only non-Lucide glyphs allowed are the CSS-drawn chevron in `Select`, the `Checkbox` tick, and the `×` in `Toast` — all hairline shapes, consistent with the outline set.
- Arrows: `arrow-right` in CTAs, `corner-up-right` for navigation actions, `chevron-*` for disclosure only.

## Gaps & substitutions to resolve

1. **Fonts** — no font files were supplied. Space Grotesk, Inter and JetBrains Mono load from Google Fonts via `@import` in `tokens/fonts.css`. If the brand licenses Helvetica Neue (the brief's "closer to automotive" alternative) or has hosted webfonts, drop the binaries in `assets/fonts/` and replace that file with real `@font-face` rules.
2. **Logo** — none supplied, and none was drawn. The wordmark is Space Grotesk 600 at 0.14em tracking (`guidelines/brand-wordmark.card.html`).
3. **Photography** — none supplied. Every image area in both UI kits is a labelled placeholder plate naming the shot it expects.
4. **Icons** — Lucide substitution, as above.
