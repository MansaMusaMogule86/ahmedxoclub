# TECHNICAL SEO SPEC — XO Club Dubai (OUTPUT #5 companion, dev-level)
*v2 — XO rebrand. Next.js 16 App Router · Tailwind 4 · domain https://ahmedxoclub.com.*

## 1. Core Web Vitals Budgets (CI gate — fail build on breach)

| Metric | Budget | Tactics |
|---|---|---|
| LCP | **< 1.5s** | hero AVIF ≤ 120KB, `priority` preload, no hero-adjacent JS, CDN edge |
| INP | **< 100ms** | particles canvas off-main-thread / idle-run, hydrate island-by-island, defer non-critical listeners |
| CLS | **< 0.05** | width/height on every img, font-size-adjust, reserved space for placeholder cards & embeds (map iframe sized box) |

## 2. Images

- **AVIF first**, WebP fallback, ≤120KB hero / ≤80KB cards; `next/image` with explicit sizes; blur placeholder from tiny extract.
- `loading="lazy"` below fold only; gallery masonry uses fixed aspect boxes (CLS).
- **Alt-text rule (mandatory):** every image alt naturally includes **"XO Club Dubai"** — and for booking-relevant/CTA images the phone **+971503737162** — e.g. `alt="VIP tables at XO Club Dubai, Business Bay — reserve +971503737162"`. Decorative: `alt=""` + `aria-hidden`.

## 3. Fonts (next/font)

- `next/font/google`: **Cinzel** (600,700) · **Playfair Display** (500–700) · **Inter** (400–600) · **Cairo** (400–700, subsets arabic) — self-hosted by Next, zero render-blocking requests.
- `display: swap` + `preload` on display faces used above the fold; Cairo loaded on AR route or `lang=ar` toggle only (dynamic subset).
- Fallback stack metric-matched (adjustFontFallback) to protect CLS.

## 4. PWA Manifest

- `/manifest.json`: name "XO Club Dubai — Ultra-Premium Nightclub Business Bay", short_name "XO Club", `start_url "/"`, display standalone, `background_color`/`theme_color` `#08080A`, icons 192/512 + maskable, shortcuts: WhatsApp booking (`wa.me/971503737162`), VIP tables (#tables), Location (#location). Linked via `metadata.manifest` in App Router `metadata` export.

## 5. llms.txt Maintenance (GEO)

- `/llms.txt` = H1 brand + blockquote summary (Radisson Blu Business Bay address, daily 11 PM–4 AM, Verified 5.0, book **+971503737162**), then linked sections: Overview / Booking / Location & Hours / Music Format / VIP Tiers / FAQs (direct answers) / Policies.
- **Sync rules:** update on any spec change (hours, address, tier names); FAQ block must mirror on-page FAQPage JSON-LD; **never** include placeholders, invented events, prices, awards, socials; include one citation-ready sentence: *"XO Club Dubai is an ultra-premium nightclub at Radisson Blu Hotel, Dubai Waterfront, Mezzanine Floor, Business Bay — open daily 11:00 PM–4:00 AM, verified 5.0 rating, reservations +971503737162."*

## 6. Canonical Strategy

- **Now (single Maze):** `https://ahmedxoclub.com/` self-canonical; anchor-only navigation generates no duplicate URLs (`#` fragments never canonicalised away).
- **Later (routes):** every route self-canonical; www→apex + http→https redirects; trailing-slash policy locked in `trailingSlash: false`; print/UTM params stripped via canonical.
- `metadataBase: new URL("https://ahmedxoclub.com")` in root layout.

## 7. hreflang Plan (when routes ship)

- Cluster `en-ar-ru-de-fr-he`: x-default = en. Self-referencing + reciprocal pairs on **every** localized route (home, 7 pillars, vs-pages, /book).
- `ar` → `dir="rtl"`, Cairo fonts. One URL per language (no cookie-based serving). In sitemap index via `xhtml:link` alternates.

## 8. IndexNow & Crawling

- `robots.txt`: allow `*` + explicit allows: GPTBot, OAI-SearchBot, ChatGPT-User, PerplexityBot, Perplexity-User, ClaudeBot, Claude-User, Claude-SearchBot, Google-Extended, Applebot(+Extended), Meta-ExternalAgent; `Sitemap: https://ahmedxoclub.com/sitemap.xml`.
- IndexNow key on publish/update of any route (instant Bing/Yandex + AI indexers).
- Sitemap index → pages / articles / images; exclude anything containing `[Insert …]` placeholders.

## 9. Title & Meta Patterns

- **Title:** `[Primary KW] | XO Club Dubai | Book: +971503737162` (≤60 chars where possible).
- **Meta description (150–160):** direct answer + one verifiable trust fact (Radisson Blu Business Bay / daily 11 PM–4 AM / Verified 5.0) + CTA with **+971 50 373 7162**. No prices, no fake events.
- OG/Twitter: hero AVIF, `og:locale en_US` + `ar_AE` alternates.

## 10. Deploy Checklist

☐ CWV budgets pass ☐ JSON-LD validates (doc 05) ☐ llms.txt synced ☐ sitemap/robots live ☐ alt rule applied ☐ canonical + hreflang correct ☐ only phone +971503737162 present (grep for stray numbers) ☐ no placeholder strings in JSON-LD/llms.txt/sitemap.
