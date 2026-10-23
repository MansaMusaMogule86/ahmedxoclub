# OUTPUT #4 — SCHEMA MARKUP TEMPLATES (XO Club Dubai)
*v2 — XO rebrand. Paste-ready JSON-LD. Domain https://ahmedxoclub.com · phone +971503737162 · hours 23:00–04:00 daily.*

## 1. NightClub (homepage — highest priority)

```json
{
  "@context": "https://schema.org",
  "@type": "NightClub",
  "@id": "https://ahmedxoclub.com/#nightclub",
  "name": "XO Club Dubai",
  "alternateName": "إكس أو كلوب دبي",
  "url": "https://ahmedxoclub.com/",
  "image": "https://ahmedxoclub.com/images/hero.png",
  "description": "Ultra-premium nightclub in Business Bay at Radisson Blu Hotel, Dubai Waterfront. Hip-Hop, R&B, Commercial and Arabic/Khaliji nights with a high-energy mixed crowd. Open daily 11:00 PM – 4:00 AM. Reservations: +971 50 373 7162.",
  "telephone": "+971503737162",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Radisson Blu Hotel, Dubai Waterfront, Mezzanine Floor",
    "addressLocality": "Business Bay",
    "addressRegion": "Dubai",
    "addressCountry": "AE"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 25.1806, "longitude": 55.2669 },
  "hasMap": "https://www.google.com/maps/search/?api=1&query=XO+Club+Dubai",
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "23:00",
    "closes": "04:00"
  }],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "bestRating": "5",
    "worstRating": "1"
  }
}
```

⚠️ **Rating rule:** the 5.0 is verified on Google Maps, but the review count is NOT published. Ship this node only when you add `"reviewCount": <real count>` (Google requires reviewCount/ratingCount for aggregateRating eligibility). Until then, **remove the aggregateRating node entirely** — never guess a count. Do not add `priceRange` (no published pricing).

## 2. Organization

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://ahmedxoclub.com/#org",
  "name": "XO Club Dubai",
  "alternateName": "إكس أو كلوب دبي",
  "url": "https://ahmedxoclub.com/",
  "logo": "https://ahmedxoclub.com/icon.svg",
  "telephone": "+971503737162",
  "contactPoint": [{
    "@type": "ContactPoint",
    "telephone": "+971503737162",
    "contactType": "reservations",
    "availableLanguage": ["en","ar"]
  }]
}
```

## 3. WebSite

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://ahmedxoclub.com/#website",
  "url": "https://ahmedxoclub.com/",
  "name": "XO Club Dubai",
  "inLanguage": ["en","ar"],
  "publisher": { "@id": "https://ahmedxoclub.com/#org" }
}
```

## 4. FAQPage (8 Q&As — answers mirror on-page FAQ verbatim)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type":"Question","name":"How do I book a table at XO Club Dubai?","acceptedAnswer":{"@type":"Answer","text":"Message or call +971 50 373 7162 (WhatsApp: wa.me/971503737162). You receive a written quote for your table minimum spend, then a confirmation with an XO- booking reference."}},
    {"@type":"Question","name":"Where is XO Club Dubai located?","acceptedAnswer":{"@type":"Answer","text":"XO Club Dubai is at Radisson Blu Hotel, Dubai Waterfront, Mezzanine Floor, Business Bay, Dubai, UAE. An embedded Google Map is on our homepage, or call +971 50 373 7162 for directions."}},
    {"@type":"Question","name":"What are XO Club Dubai opening hours?","acceptedAnswer":{"@type":"Answer","text":"Open 7 days a week, daily 11:00 PM to 4:00 AM. For tonight's lineup and reservations, WhatsApp +971 50 373 7162."}},
    {"@type":"Question","name":"How much does a VIP table cost?","acceptedAnswer":{"@type":"Answer","text":"We publish no fixed prices. Every tier — XO Signature Table, Premium Booth, XO Royal Loft — is quoted in writing on WhatsApp at +971 50 373 7162, so your minimum spend is transparent before you arrive."}},
    {"@type":"Question","name":"What music does XO Club Dubai play?","acceptedAnswer":{"@type":"Answer","text":"A high-energy mixed format: Hip-Hop, R&B, Commercial plus Arabic and Khaliji sets — one crowd, expats, tourists and locals together. Tonight's artist is announced on WhatsApp +971 50 373 7162."}},
    {"@type":"Question","name":"Do I need a reservation or can I walk in?","acceptedAnswer":{"@type":"Answer","text":"Walk-ins are welcome subject to capacity, but tables are limited — secure yours via WhatsApp +971 50 373 7162 or call +971 50 373 7162."}},
    {"@type":"Question","name":"Is XO Club Dubai good for tourists and expats?","acceptedAnswer":{"@type":"Answer","text":"Yes — XO Club Dubai draws a high-energy mixed crowd of expats, tourists and locals in the heart of Business Bay. Ask us anything at +971 50 373 7162 before your night."}},
    {"@type":"Question","name":"How is XO Club Dubai rated?","acceptedAnswer":{"@type":"Answer","text":"XO Club Dubai holds a verified 5.0-star rating on Google Maps. Experience it yourself — reserve at +971 50 373 7162."}}
  ]
}
```

## 5. BreadcrumbList (example: silo 2)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type":"ListItem","position":1,"name":"XO Club Dubai","item":"https://ahmedxoclub.com/"},
    {"@type":"ListItem","position":2,"name":"VIP Table Booking Dubai","item":"https://ahmedxoclub.com/vip-table-booking-dubai"}
  ]
}
```

## 6. HowTo — 3-step WhatsApp booking

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to book a VIP table at XO Club Dubai",
  "totalTime": "PT5M",
  "step": [
    {"@type":"HowToStep","position":1,"name":"Message XO on WhatsApp","text":"Send your date, group size and preferred tier to +971 50 373 7162 (wa.me/971503737162)."},
    {"@type":"HowToStep","position":2,"name":"Receive your written quote","text":"XO Club Dubai replies with a written minimum-spend quote for XO Signature Table, Premium Booth or XO Royal Loft — transparent, no surprises."},
    {"@type":"HowToStep","position":3,"name":"Arrive after 11:00 PM","text":"Doors open daily 11:00 PM at Radisson Blu Hotel, Dubai Waterfront, Mezzanine Floor, Business Bay. Show your XO- confirmation and the team takes over."}
  ]
}
```

## 7. Event — ⚠️ CONDITIONAL TEMPLATE

> **HARD RULE:** publish Event schema **only** when a real, confirmed event exists in the DB (name, date, time all filled). **Never** with `[Insert …]` placeholders — placeholder events must not be in JSON-LD, sitemap, or llms.txt.

```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "{{REAL_EVENT_NAME}}",
  "startDate": "{{YYYY-MM-DDTHH:mm}}",
  "endDate": "{{YYYY-MM-DD}}T04:00",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "location": {
    "@type": "Place",
    "name": "XO Club Dubai",
    "address": "Radisson Blu Hotel, Dubai Waterfront, Mezzanine Floor, Business Bay, Dubai, UAE",
    "geo": {"@type":"GeoCoordinates","latitude":25.1806,"longitude":55.2669}
  },
  "image": ["https://ahmedxoclub.com/images/{{REAL_EVENT_IMAGE}}"],
  "description": "{{REAL_EVENT_DESCRIPTION}} — reservations +971 50 373 7162.",
  "organizer": {"@type":"Organization","name":"XO Club Dubai","url":"https://ahmedxoclub.com/"}
}
```

## 8. Validation Checklist (run before every deploy)

- [ ] Rich Results Test passes (NightClub/FAQ/HowTo/Breadcrumb/Event as applicable) + schema.org validator clean.
- [ ] JSON parses; one `@context` per block; stable `@id`s.
- [ ] Telephone **only** `+971503737162` — grep the whole HTML for stray numbers.
- [ ] Address matches NAP exactly: Radisson Blu Hotel, Dubai Waterfront, Mezzanine Floor, Business Bay.
- [ ] Hours `23:00–04:00` ×7 days; no 9PM/3AM legacy values anywhere.
- [ ] aggregateRating: 5.0 + real reviewCount — else node removed; no invented counts/awards/socials/emails.
- [ ] Zero `[Insert …]` strings in any JSON-LD; Event nodes exist only for real DB rows.
- [ ] On-page content matches every schema claim (FAQ text = FAQPage text).
