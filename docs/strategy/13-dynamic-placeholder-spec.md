# OUTPUT #5 — THE DYNAMIC PLACEHOLDER SPEC ("Tonight at XO")
*v2 — XO rebrand. Governs ALL empty states for lineup/events across the Maze and future routes.*

## 1. Why placeholders exist (hard rules)

No fixed weekly schedule · no fake DJ names · no invented events · no invented prices. When real data is absent, XO renders **elegant "announcement pending" states** — never silence, never fiction. Real data replaces placeholders 1:1 (same card, solid treatment).

## 2. Placeholder Tokens (exact strings)

| Token | Used in | Notes |
|---|---|---|
| `[Insert DJ/Artist Name]` | #tonight, #events, silo teasers | never a real name |
| `[Insert Event Theme]` | #tonight, #events | e.g. slot for theme titles |
| `[Insert Date]` | #tonight, #events | ISO-capable when swapped |
| `[Insert Time]` | #tonight, #events | default context: doors 11:00 PM |

Tokens NEVER appear in JSON-LD, llms.txt, sitemap.xml, GBP, or email/WhatsApp scripts.

## 3. Visual Rendering

- **Card treatment:** dashed gold border `rgba(212,175,55,.45)`, radius 20px, glass bg `rgba(8,8,10,.55)` + blur, faint gold gradient wash — vs **real events** = solid 1px gold border + slightly stronger gradient + date badge.
- **Token text:** Cinzel, uppercase, letter-spacing `.12em`, **gold shimmer** (`#8C6D1F → #F0D98C → #D4AF37` sweep, 3.2s infinite).
- **Frame:** ornamental corner brackets (gold, 1px, 40% opacity) inside the card.
- **"To Be Announced" seal:** small crimson `#8B1A2B` chip, ivory text, gold hairline, top-inline-end corner.
- **Microcopy:** "The experience is always worth the wait — reserve now, lineup drops soon." + WhatsApp CTA.

## 4. CSS Class Contract (implementation namespace)

| Class | Purpose |
|---|---|
| `.xo-event-card` | base card (both states) |
| `.xo-placeholder-card` | empty state modifier (dashed) |
| `.xo-event-card--real` | real-data modifier (solid) |
| `.xo-placeholder-token` | shimmer token text |
| `.xo-placeholder-frame` | ornamental corner-frame wrapper |
| `.xo-placeholder-seal` | "To Be Announced" seal |
| `.xo-placeholder-rows` | token row container |
| `.xo-placeholder-note` | microcopy line |
| `.xo-chip-placeholder` | `AED [Insert Minimum Spend]` chip (#tables) |

## 5. Paste-Ready Example

```html
<article class="xo-event-card xo-placeholder-card" data-placeholder="true"
  aria-label="Tonight's lineup at XO Club Dubai is being announced. Reserve now: call or WhatsApp +971 50 373 7162.">
  <div class="xo-placeholder-frame">
    <span class="xo-placeholder-seal">To Be Announced</span>
    <h3 class="xo-event-title">Tonight at XO</h3>
    <div class="xo-placeholder-rows">
      <span class="xo-placeholder-token" data-token="artist">[Insert DJ/Artist Name]</span>
      <span class="xo-placeholder-token" data-token="theme">[Insert Event Theme]</span>
      <span class="xo-placeholder-token" data-token="date">[Insert Date]</span>
      <span class="xo-placeholder-token" data-token="time">[Insert Time]</span>
    </div>
    <p class="xo-placeholder-note">The experience is always worth the wait — reserve now, lineup drops soon.</p>
    <a class="xo-btn-gold" href="tel:+971503737162">Call +971 50 373 7162</a>
    <a class="xo-btn-wa" href="https://wa.me/971503737162" aria-label="WhatsApp XO Club Dubai on +971 50 373 7162">WhatsApp XO</a>
  </div>
</article>
```

```css
.xo-placeholder-card{
  border:1.5px dashed rgba(212,175,55,.45); border-radius:20px;
  background:linear-gradient(160deg, rgba(212,175,55,.06), rgba(8,8,10,.6));
  backdrop-filter:blur(12px); padding:2rem; position:relative;
}
.xo-event-card--real{ border:1px solid rgba(212,175,55,.75); border-style:solid; }
.xo-placeholder-token{
  font-family:"Cinzel",serif; text-transform:uppercase; letter-spacing:.12em;
  background:linear-gradient(90deg,#8C6D1F,#F0D98C,#D4AF37,#F0D98C,#8C6D1F);
  background-size:200% 100%; -webkit-background-clip:text; background-clip:text;
  color:transparent; animation:xo-shimmer 3.2s linear infinite;
}
@keyframes xo-shimmer{ to{ background-position:-200% 0; } }
.xo-placeholder-seal{
  background:#8B1A2B; color:#F5F1E8; border:1px solid rgba(212,175,55,.6);
  border-radius:8px; padding:.25rem .6rem; font:600 .7rem Inter; letter-spacing:.18em;
  text-transform:uppercase; position:absolute; inset-inline-end:1rem; inset-block-start:1rem;
}
@media (prefers-reduced-motion: reduce){
  .xo-placeholder-token{ animation:none; color:#D4AF37; background:none; }
}
```

## 6. Accessibility Rules

- Card carries `data-placeholder="true"` + a full-sentence `aria-label` stating the announcement is pending **and** the booking phone (see example) — screen readers never present tokens as facts.
- Token spans are `aria-hidden="true"`; the h3 + aria-label carry meaning.
- Shimmer pauses under `prefers-reduced-motion` (static gold text fallback).
- Contrast: token gradient ≥AA at display size; seal ivory-on-crimson ≈8:1; keep the reserved card size identical for both states (CLS < 0.05).

## 7. Management Workflow (swap later)

1. **Source of truth:** `content.ts` placeholder set now → `/api/events` later. API returns `[]` → render placeholder set; API returns rows → render `.xo-event-card--real` with real title/theme/date/time.
2. **Staff swap:** add a real event (name, theme, date, time, image) in the events store/admin → card flips to solid state, tokens replaced, seal hidden, `data-placeholder` removed, aria-label switches to event facts + phone.
3. **Downstream sync on swap:** add Event JSON-LD (doc 05 §7 — real data only), include in sitemap if it has a route, update llms.txt lineup line, post to GBP. **Remove expired events within 24h** of the night ending (card returns to placeholder state gracefully).
4. **QA on every swap:** zero `[Insert …]` strings in DOM outside placeholder cards; phone is still +971503737162 everywhere; CWV unchanged (reserved card size).
