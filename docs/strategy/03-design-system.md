# OUTPUT #3 — DESIGN SYSTEM (XO Club Dubai)
*v2 — XO rebrand (crimson replaces the old purple; Cinzel joins the stack).*

## 1. Color Tokens

| Token | Hex | Use | Contrast notes |
|---|---|---|---|
| `--xo-obsidian` | `#08080A` | Page bg, button text on gold | base |
| `--xo-gold` | `#D4AF37` | Primary brand, borders, CTAs | ~9:1 on obsidian → AA/AAA large |
| `--xo-gold-light` | `#F0D98C` | Shimmer highlights, hover | ~13:1 on obsidian |
| `--xo-gold-dark` | `#8C6D1F` | Gold text on light/ivory surfaces | ~4.2:1 on ivory → large text only; darken further for body |
| `--xo-crimson` | `#8B1A2B` | Deep accents, seals, "XO vs Others" | ivory text on crimson ≈ 8:1 AA |
| `--xo-amber` | `#F59E0B` | Live badges, pulse dots | ~8.8:1 on obsidian |
| `--xo-ivory` | `#F5F1E8` | Body text | ~16:1 on obsidian → AAA |
| `--xo-whatsapp` | `#25D366` | WhatsApp CTAs only | dark obsidian text on green ≈ 9.6:1 AA |

Rules: never body-size gold on ivory (fails contrast) — use `--xo-gold-dark` or obsidian. Gold on obsidian is reserved for display sizes, kickers, and borders. WhatsApp green is exclusive to booking actions (color = meaning, never decoration).

## 2. Typography

| Role | Font | Spec |
|---|---|---|
| Logo / display | **Cinzel** 600/700 | `clamp(2.75rem, 6vw, 4.5rem)`, tracking `.06em`, gold gradient text |
| H1–H3 | **Playfair Display** | H1 `clamp(2.25rem,5vw,3.75rem)` · H2 `clamp(1.75rem,3.5vw,2.75rem)` · H3 `1.375rem` |
| Body / UI | **Inter** 400/500/600 | `1rem/1.7` body · `.875rem` small · max-width `68ch` |
| Arabic (RTL) | **Cairo** 400/600/700 | Swaps in for ALL roles when `lang=ar`; line-height `1.9` |

Section **kicker**: Inter 600, `.75rem`, uppercase, letter-spacing `.35em`, gold, always paired with an ornament divider.

## 3. Spacing · Radii · Borders · Glass

- **Spacing scale:** 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128. Section padding `clamp(4rem, 10vw, 7.5rem)`; container max `1200px`; gutter 24px mobile → 40px desktop.
- **Radii:** buttons `12px` · cards `20px` · chips/badges `999px` · placeholder seal `8px`.
- **Borders:** hairline gold at 20–45% opacity (`rgba(212,175,55,.2–.45)`); dashed variant reserved for placeholder cards.
- **Glass:** `background: rgba(8,8,10,.55)` + `backdrop-filter: blur(12px)` + 1px gold border. Never stack glass on glass more than one layer deep (perf).

## 4. Component Specs

1. **Gold button `.xo-btn-gold`** — vertical gradient `#F0D98C → #D4AF37 → #8C6D1F`, obsidian text (Inter 600, uppercase, `.08em`), radius 12px, hover: brightness 1.05 + translateY(-1px) + shimmer sweep; focus ring 2px `#F0D98C` offset 2px.
2. **WhatsApp button `.xo-btn-wa`** — solid `#25D366`, obsidian text + WA glyph, subtle glow `0 0 24px rgba(37,211,102,.35)`; hover deepens glow. Always `wa.me/971503737162`.
3. **Glass card `.xo-card`** — glass token above, 20px radius, hover: border opacity 20→45% + lift 4px.
4. **Trust badge `.xo-trust-badge`** — 5 amber stars + "Verified 5.0 Rating" in gold-light; never append a review count (none published).
5. **Placeholder chip `.xo-chip-placeholder`** — dashed gold border, `AED [Insert Minimum Spend]` in shimmer Cinzel; tooltip/aria: "Written quote provided on WhatsApp — no fixed published pricing."
6. **Section kicker `.xo-kicker`** + **ornament divider** — `— ◆ —` gold rule, 40% opacity, 1px.
7. **Phone pill `.xo-phone-pill`** — tel link `+971 50 373 7162`, gold border, tap target ≥44px.

## 5. Motion Rules

| Motion | Spec |
|---|---|
| Ken Burns (hero) | `scale 1 → 1.08`, 20s alternate ease-in-out, opacity ≤ .45 layer |
| Gold particles | canvas, ≤60 particles, opacity ≤ .35, DPR-capped, paused offscreen |
| Reveals | opacity+12px rise, 200–400ms ease-out, 80ms stagger |
| Shimmer (placeholder text) | background-position sweep 3.2s linear infinite |
| Pulse (WhatsApp/live) | 2s scale ring, amber/green |
| **Global** | everything wrapped in `@media (prefers-reduced-motion: reduce)` → static equivalents |

## 6. RTL / Arabic Rules

- `dir="rtl"` + `lang="ar"` on `<html>`; Cairo replaces Cinzel/Playfair/Inter in one font-family swap.
- **Logical properties only** (`margin-inline-start`, `padding-inline`, `inset-inline-end`) — zero physical left/right in new CSS.
- Mirror layouts, not text order; numerals and `+971 50 373 7162` stay LTR via `dir="ltr"` bidi isolation.
- Arabic strings never letter-spaced; shimmer gradient direction flips with logical `background` values.

## 7. Accessibility Rules

- Contrast per table; all text AA minimum, body text AAA on obsidian.
- Focus-visible ring on every interactive element; skip-to-content link first in DOM.
- Tap targets ≥44×44px; phone numbers always real `tel:`/`wa.me` links, not plain text.
- Placeholder cards carry `aria-label` stating an announcement is pending (see doc 13) — screen readers never read tokens as facts.
- Decorative particles/ornaments `aria-hidden="true"`; full keyboard nav for accordion, carousel, forms.
