# OUTPUT #2 — HOMEPAGE WIREFRAME (XO Club Dubai)
*v2 — XO rebrand. Live single-page Maze at `/`. Phone placements annotated ①–⑰.*

**Truths:** Verified 5.0 Rating · Radisson Blu Hotel, Dubai Waterfront, Mezzanine Floor, Business Bay · Daily 11:00 PM–4:00 AM · Book **+971 50 373 7162** · No fake DJs/events/prices — placeholders only.

## Master Skeleton

```
┌──────────────────────────────────────────────────────────────────────┐
│ HEADER sticky — [XO · Cinzel]  [Tonight|Tables|Guides|Location|FAQ]   ①
│                [📞 +971 50 373 7162]  [EN|AR]                        │
╞══════════════════════════════════════════════════════════════════════╡
│ ① HERO — kenburns obsidian/gold bg · gold particles                  │
│   H1: "XO Club Dubai — Dubai's Ultra-Premium Nightclub"              │
│   Sub: Khaliji · Hip-Hop · R&B · Commercial | Business Bay           │
│   [Book on WhatsApp ▸]  ②  [📞 Call +971 50 373 7162]  ③             │
├──────────────────────────────────────────────────────────────────────┤
│ ② TRUSTBAR — ★★★★★ Verified 5.0 Rating · Radisson Blu Waterfront     │
│   · Open Daily 11 PM–4 AM · Written Quotes on WhatsApp  ④            │
├──────────────────────────────────────────────────────────────────────┤
│ ③ #tonight — "TONIGHT AT XO" (DYNAMIC PLACEHOLDER ZONE)              │
│   [Insert DJ/Artist Name] [Insert Event Theme] [Insert Date/Time]    │
│   TBA seal · dashed-gold cards → [Reserve via WhatsApp]  ⑤           │
├──────────────────────────────────────────────────────────────────────┤
│ ④ #experience — Ultra-premium story: 3 glass cards (arrival, table,  │
│   night) + "Verified 5.0" badge  ⑥                                   │
│ ⑤ #music — 4 genre tiles: Hip-Hop / R&B / Commercial / Arabic-Khaliji│
│   CTA: "Hear it live — WhatsApp +971 50 373 7162"  ⑦                 │
│ ⑥ #tables — VIP tiers (NO prices):                                   │
│   XO Signature Table · Premium Booth · XO Royal Loft                 │
│   chips: "AED [Insert Minimum Spend]" · "written quote on WhatsApp"  │
│   [Get Written Quote on WhatsApp]  ⑧                                 │
│ ⑦ #booking — 3-step form (date/guests/tier) → XO- ref →              │
│   success screen: wa.me/971503737162 deep link  ⑨⑩                   │
│ ⑧ #events — "UPCOMING EXPERIENCES" (2nd placeholder zone:            │
│   real events solid-gold · empty state = TBA placeholder cards)      │
│   CTA: "Lineup announced on WhatsApp first"  ⑪                       │
│ ⑨ #guides — 7 silo cards → future routes                             │
│   strip: "Questions? +971 50 373 7162"  ⑫                            │
│ ⑩ #compare — "XO vs Others" fact table (5.0 rating, hotel address,   │
│   daily 11–4, single booking line) → CTA  ⑬                          │
│ ⑪ #gallery — masonry + marquee (alt = brand + phone rule)            │
│ ⑫ #reviews — 5.0 curated feed carousel · badge ⑭                     │
│ ⑬ #location — EMBEDDED GOOGLE MAP · NAP card · hours 11 PM–4 AM      │
│   [Directions] [WhatsApp +971 50 373 7162]  ⑮                        │
│ ⑭ #faq — accordion (mirrors FAQPage schema) · per-answer CTA  ⑯      │
│ ⑮ FINAL CTA — full-bleed gold: "Tonight is waiting."                 │
│   [📞 Call +971 50 373 7162]  [WhatsApp XO]  ⑰                       │
│ FOOTER — NAP · silo links · /privacy /terms · hours · ⑱ footer phone │
╞══════════════════════════════════════════════════════════════════════╡
│ PERSISTENT: Floating WhatsApp bubble · Mobile thumb bar              ⑲⑳
│ TRIGGERED: Exit-intent popup — "Before you go: tonight's written     ㉑
│ quote on WhatsApp +971 50 373 7162" (mouseleave / 45s)               │
└──────────────────────────────────────────────────────────────────────┘
```

## Section Goals & CTAs

| # | Section | Goal | Primary CTA | Secondary CTA |
|---|---|---|---|---|
| ① | Hero | Instant brand + intent capture | WhatsApp book ② | Call ③ |
| ② | TrustBar | Credibility in 3 seconds | — | — |
| ③ | #tonight | FOMO without fake facts | WhatsApp reserve ⑤ | View #events |
| ④ | #experience | Justify ultra-premium | Scroll to #tables | — |
| ⑤ | #music | Own genre queries | WhatsApp ⑦ | Silo links |
| ⑥ | #tables | Monetise (no prices!) | Written quote ⑧ | Call |
| ⑦ | #booking | Convert on-page | Submit → XO-ref | wa.me deep link ⑩ |
| ⑧ | #events | Repeat visits | WhatsApp first ⑪ | — |
| ⑨ | #guides | SEO maze exit → routes | Silo card | Help line ⑫ |
| ⑩ | #compare | Intercept competitor intent | Book XO ⑬ | — |
| ⑪ | #gallery | Proof of vibe | — | — |
| ⑫ | #reviews | Defend 5.0 | Add review (GBP) | Book ⑭ |
| ⑬ | #location | Map + hours clarity | Directions | WhatsApp ⑮ |
| ⑭ | #faq | Objection kill + snippets | WhatsApp per answer ⑯ | — |
| ⑮ | Final CTA | Last-chance conversion | Call ⑰ | WhatsApp |

## Dynamic Placeholder Zones (explicit)

1. **"Tonight at XO" (#tonight)** — always renders the elegant empty state unless staff publishes a real night: shimmer tokens `[Insert DJ/Artist Name]`, `[Insert Event Theme]`, `[Insert Date]`, `[Insert Time]` in dashed-gold cards with a "To Be Announced" seal. Never fabricates names. See `13-dynamic-placeholder-spec.md`.
2. **"Upcoming Experiences" (#events)** — DB-driven: real rows → solid-gold event cards (eligible for Event schema); empty → same TBA placeholder treatment. Placeholders must NEVER leak into JSON-LD, llms.txt, or sitemap.

## Phone Placement Count (load path)

Target ≥10 → **delivered: 20+**. Static: header ①, hero ②③, trustbar ④, tonight ⑤, experience ⑥, music ⑦, tables ⑧, booking ⑨⑩, events ⑪, guides ⑫, compare ⑬, reviews ⑭, location ⑮, faq ⑯, final CTA ⑰, footer ⑱ = **18 static** + persistent floating WhatsApp ⑲ + thumb bar ⑳ + exit-intent ㉑. Every placement uses **only** +971 50 373 7162 / wa.me/971503737162.
