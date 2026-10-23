# OUTPUT #1 — SITE ARCHITECTURE (XO Club Dubai)
*v2 — XO rebrand. Supersedes the obsolete pre-rebrand version in full. Single source of truth: worklog "Task ID: rebrand-1".*

**Brand:** XO Club Dubai (إكس أو كلوب دبي) · **Domain:** https://ahmedxoclub.com · **Booking (ONLY number):** +971503737162 (display "+971 50 373 7162")

---

## A. LIVE NOW — Single-Page Maze (route `/` only)

The sandbox preview exposes only `/`. All conversion + SEO intent lives in one scroll-hybrid "Maze":

```
ahmedxoclub.com/  — LIVE (single-page Maze)
│
├── Hero ............... Cinzel "XO" + "Dubai's Ultra-Premium Nightclub" + CTA
├── TrustBar ........... Verified 5.0 Rating · Radisson Blu, Business Bay · Daily 11 PM–4 AM
├── #tonight ........... "Tonight at XO" — dynamic elegant placeholders (NO fake DJs)
├── #experience ........ Ultra-premium experience narrative
├── #music ............. Hip-Hop · R&B · Commercial · Arabic/Khaliji
├── #tables ............ VIP tiers: XO Signature Table / Premium Booth / XO Royal Loft
│                        "AED [Insert Minimum Spend]" chips + written-quote promise
├── #booking ........... 3-step request + WhatsApp deep link (wa.me/971503737162)
├── #events ............ "Upcoming Experiences" — DB events or TBA placeholder cards
├── #guides ............ 7 silo hub cards (khaliji, VIP, arabic, private, guide, bottle, bay)
├── #compare ........... "XO vs Others" — wink-not-slander fact table
├── #gallery ........... Atmosphere gallery (alt text per 10-technical-seo-spec)
├── #reviews ........... Verified 5.0 feed (no invented count)
├── #location .......... Embedded Google Map + NAP + hours 11:00 PM–4:00 AM daily
├── #faq ............... Accordion (mirrors FAQPage JSON-LD)
├── Final CTA .......... "Call +971 50 373 7162" / WhatsApp — last scroll stop
└── Footer ............. NAP block, silo links, /privacy, /terms, hours, phone
    ↳ persistent modules: Floating WhatsApp · Mobile thumb bar · Exit-intent popup
```

## B. PRODUCTION — Multi-Route Architecture (post-launch)

```
ahmedxoclub.com/ (Maze stays the conversion core)
├── /book .................... dedicated booking landing (ads/QR target)
├── /privacy · /terms ........ legal
├── /events .................. full event index (real events only, ever)
│
├── /khaliji-nightlife-dubai/          [SILO 1 — pillar 2,200w]
│   ├── /what-to-expect-first-time     ├── /khaliji-vs-arabic-nightlife
│   ├── /khaliji-club-dress-code       ├── /khaliji-music-guide
│   ├── /khaliji-artists-to-know       ├── /khaliji-night-out-itinerary
│   ├── /tourists-guide-khaliji-dubai  └── /shisha-and-khaliji-nights
├── /vip-table-booking-dubai/          [SILO 2 — pillar 2,200w]
│   ├── /how-vip-table-booking-works   ├── /vip-table-vs-general-entry
│   ├── /what-a-vip-table-includes     ├── /minimum-spend-explained
│   ├── /birthday-vip-table-dubai      ├── /group-table-booking-guide
│   ├── /vip-etiquette-checklist       └── /last-minute-table-booking
├── /best-arabic-nightclub-dubai/      [SILO 3 — pillar 2,000w]
│   ├── /arabic-nightclub-vs-international ├── /arabic-music-nights-dubai
│   ├── /lebanese-egyptian-khaliji-differences ├── /arabic-club-etiquette
│   ├── /mixed-crowd-arabic-clubs      ├── /where-locals-dance-dubai
│   ├── /arabic-clubs-near-business-bay └── /first-timers-arabic-club-faq
├── /private-events-dubai/             [SILO 4 — pillar 2,000w]
│   ├── /birthday-party-nightclub-dubai ├── /corporate-event-venue-dubai
│   ├── /bachelor-bachelorette-dubai   ├── /anniversary-celebration-dubai
│   ├── /product-launch-venue-dubai    ├── /graduation-party-dubai
│   ├── /private-event-booking-checklist └── /event-planning-timeline
├── /dubai-nightlife-guide/            [SILO 5 — pillar 2,500w]
│   ├── /nightclub-dress-code-dubai    ├── /entry-price-guide (how pricing works)
│   ├── /nye-nightclub-dubai           ├── /ramadan-eid-nightlife-guide
│   ├── /nightlife-for-tourists        ├── /clubbing-rules-etiquette
│   ├── /clubs-open-till-4am-dubai     └── /dubai-nightlife-by-area
├── /bottle-service-dubai/             [SILO 6 — pillar 2,000w]
│   ├── /bottle-service-menu-guide     ├── /minimum-spend-vs-bottle-price
│   ├── /champagne-service-dubai       ├── /bottle-service-for-groups
│   ├── /bottle-service-tipping-guide  ├── /splitting-bottle-service
│   └── /when-to-reserve-bottles
└── /business-bay-nightlife/           [SILO 7 — pillar 2,000w]
    ├── /business-bay-hotels-nearby-nightlife ├── /business-bay-vs-downtown
    ├── /clubs-near-business-bay-hotels ├── /after-work-business-bay
    ├── /business-bay-canal-evening-guide ├── /getting-to-business-bay-at-night
    └── /expats-guide-business-bay-night

├── COMPETITOR INTERCEPTION (1,500w each, "wink not slander"):
│   /vs-omni-club · /vs-avenue-club · /vs-club-one · /vs-dxb-night-club
│
└── HREFLANG CLUSTER (all routes): /en · /ar · /ru · /de · /fr · /he
    └── sitemap.xml = sitemap index → sitemap-pages.xml · sitemap-articles.xml · sitemap-images.xml
```

## C. Anchor → Route Migration Map

| Maze anchor | Future route | Phase |
|---|---|---|
| `#guides` silo cards | 7 pillar routes | P2 |
| `#tables` | `/vip-table-booking-dubai` (+ `/book`) | P2 |
| `#compare` | `/vs-omni-club` … `/vs-dxb-night-club` | P2 |
| `#booking` | `/book` | P2 |
| `#music` | `/khaliji-nightlife-dubai#music` + `/best-arabic-nightclub-dubai` | P2 |
| `#tonight` | `/events` (real data only) | P3 |
| `#events` | `/events` | P3 |
| `#location` | stays on home + `/business-bay-nightlife` | P3 |
| `#faq` | stays on home + per-silo FAQ blocks | P3 |

Phases: **P1** = live Maze · **P2** = pillars + vs + /book · **P3** = /events, hreflang clusters, sitemap index split.

## D. Internal-Linking Rules

1. Every article links up to its pillar + across to 2 sibling pillars (max 3 clicks from `/`).
2. 3–5 contextual links per 500 words, descriptive anchors ("VIP table booking in Dubai", never "click here").
3. Every page ends with a booking CTA: `tel:+971503737162` **and** `https://wa.me/971503737162`.
4. Vs-pages link the rival-named H1 → comparison table → booking CTA; never link out to competitors.
5. Phone NAP block (address + +971 50 373 7162 + hours) is a shared footer component on every route.
6. No orphan pages: new URL ships with ≥3 inbound internal links on publish day.
