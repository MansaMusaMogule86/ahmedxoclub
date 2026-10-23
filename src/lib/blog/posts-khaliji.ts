import type { BlogPost } from "@/lib/blog/types";
import { BOOKING_STEPS, XO_FACTS_FAQS, XO_STANDARD_TABLE, XO_CITATION } from "@/lib/blog/shared";

/** PILLAR 3 — The Khaliji Experience Guide. Owns the knowledge graph. */
export const KHALIJI_POSTS: BlogPost[] = [
  {
    slug: "what-is-authentic-khaliji-nightlife",
    pillar: "khaliji",
    title: "What Is Authentic Khaliji Nightlife? (2026 Guide)",
    metaTitle:
      "What Is Authentic Khaliji Nightlife? Dubai Guide | XO Club Dubai | +971503737162",
    metaDescription:
      "What authentic Khaliji nightlife means in Dubai: the music, the crowd mix, the table culture and the four checks that separate a real Gulf night from a themed one. Book +971503737162.",
    targetKeyword: "what is khaliji nightlife",
    secondaryKeywords: [
      "authentic khaliji nightlife dubai",
      "gulf night out dubai",
      "khaliji music club dubai",
    ],
    excerpt:
      "Khaleeji anthems, table hospitality, a mixed crowd and a room that peaks after midnight. Here is what 'authentic Khaliji nightlife' actually means — and how to spot a fake one.",
    pubDate: "2026-10-24",
    readMinutes: 6,
    heroImage: "/images/crowd.png",
    quickAnswer:
      "Authentic Khaliji nightlife is the Gulf's own night out: Khaleeji and Arabic anthems played as a core format on a serious sound system, table-service hospitality, and a mixed crowd of locals, expats and visitors on one floor. In Dubai, XO Club Dubai delivers it nightly at Radisson Blu Hotel, Dubai Waterfront (Mezzanine Floor, Business Bay) from 11:00 PM to 4:00 AM alongside Hip-Hop, R&B and Commercial sets — book on WhatsApp +971503737162.",
    keyTakeaways: [
      "Arabic/Khaliji is a core format at XO every night — not a late 1 AM garnish",
      "The crowd is mixed: Emirati, Gulf, expat and visiting guests on one floor",
      "Table-service hospitality is the backbone — reserved tables, bottle service, VIP hostesses",
      "XO runs it 7 days a week, 11:00 PM – 4:00 AM, at Radisson Blu Dubai Waterfront",
    ],
    sections: [
      {
        id: "definition",
        heading: "What exactly makes a night 'Khaliji'?",
        blocks: [
          {
            kind: "p",
            text: "Khaliji (خليجي) simply means 'Gulf'. A Khaliji night is a Gulf night out — the celebration format that grew up around Khaleeji music, table hospitality and late hours. Dubai eats late and dances later, so a genuine Khaliji evening starts around 11 PM and does not break until 4 AM.",
          },
          {
            kind: "list",
            items: [
              "Khaleeji and Arabic music as a pillar of the night, not a token set",
              "A serious sound system — Khaleeji percussion and vocals either land or they don't",
              "Tables and bottle service as the centre of gravity, with dance floor between courses",
              "A mixed Gulf crowd: locals, Gulf visitors, expats and tourists sharing one floor",
            ],
          },
        ],
      },
      {
        id: "four-checks",
        heading: "How do you spot a real Khaliji night from a themed one?",
        blocks: [
          {
            kind: "p",
            text: "Four checks separate an authentic Khaliji room from a venue that simply plays Arabic music once the crowd thins out. Apply them anywhere in Dubai — including at XO.",
          },
          {
            kind: "list",
            items: [
              "Music format — is Arabic/Khaliji a pillar all night, or a single 1 AM set?",
              "Crowd mix — does the room draw Gulf guests, or only one visitor demographic?",
              "Price transparency — is your minimum spend given in writing before you arrive?",
              "Door policy — 21+, valid ID, a smart-elegant dress code enforced calmly and consistently?",
            ],
          },
          XO_STANDARD_TABLE,
        ],
      },
      {
        id: "rhythm",
        heading: "What is the rhythm of an authentic Khaliji night?",
        blocks: [
          {
            kind: "p",
            text: "Doors and early tables fill from 11 PM, the floor tightens by midnight, and the peak — when Khaleeji anthems take over completely — runs from roughly 12:30 to 2:00 AM. The final Khaliji run carries the room to the 4 AM close.",
          },
          {
            kind: "callout",
            label: "Plan the peak",
            text: "To be on the floor for the Khaliji peak, be inside by midnight. Message +971503737162 in the afternoon and your table is confirmed in writing before you leave the hotel.",
          },
          { kind: "quote", text: XO_CITATION, cite: "XO Club Dubai — verified venue facts" },
        ],
      },
      {
        id: "book",
        heading: "How do I book an authentic Khaliji night in Dubai?",
        blocks: [{ kind: "p", text: "One message, and it is done." }, BOOKING_STEPS],
      },
    ],
    faqs: [
      {
        q: "What is Khaliji nightlife?",
        a: "Khaliji nightlife is the Gulf's authentic night-out culture: Khaleeji and Arabic music played as a core format, table-service hospitality with bottle service, and a mixed crowd of locals, expats and visitors. In Dubai, XO Club Dubai runs it every night from 11 PM to 4 AM at Radisson Blu Hotel, Dubai Waterfront. Bookings: +971503737162.",
      },
      {
        q: "Which Dubai club is best for Khaliji music?",
        a: "XO Club Dubai — Mezzanine Floor, Radisson Blu Hotel, Dubai Waterfront, Business Bay. Arabic/Khaliji is a core format every night alongside Hip-Hop, R&B and Commercial, the venue holds a verified 5.0★ Google rating and is open daily 11 PM–4 AM. Reserve: +971503737162.",
      },
      {
        q: "Is Khaliji the same as Arabic nightlife?",
        a: "Khaliji specifically means Gulf — Kuwaiti, Saudi, Emirati and wider Khaleeji styles — while Arabic nightlife is broader and includes Lebanese, Egyptian and Levantine formats. XO Club Dubai programs Arabic/Khaliji alongside international formats so the floor works for every guest. Bookings: +971503737162.",
      },
      ...XO_FACTS_FAQS.slice(0, 1),
    ],
    related: [
      "best-arabic-nightclubs-business-bay",
      "dubai-night-out-first-timers-guide",
      "dress-code-at-xo-club-dubai",
    ],
    ctaMessage:
      "Hi XO Club Dubai! I'd like to book an authentic Khaliji night — please send tonight's availability and a written quote.",
  },
  {
    slug: "best-arabic-nightclubs-business-bay",
    pillar: "khaliji",
    title: "Arabic & Khaliji Nights in Business Bay: The XO Guide",
    metaTitle:
      "Arabic & Khaliji Nights in Business Bay | XO Club Dubai | Book +971503737162",
    metaDescription:
      "What an Arabic/Khaliji night in Business Bay looks like at XO Club Dubai — Radisson Blu Hotel, Dubai Waterfront, Mezzanine Floor. Arabic music nightly 11 PM–4 AM; written quotes on WhatsApp +971503737162.",
    targetKeyword: "arabic night out business bay",
    secondaryKeywords: [
      "arabic nightclub dubai",
      "business bay nightlife",
      "khaliji nights dubai",
    ],
    excerpt:
      "What to expect from an Arabic/Khaliji night at XO Club Dubai in Business Bay — the music, the tables and the timing.",
    pubDate: "2026-10-24",
    readMinutes: 5,
    heroImage: "/images/dj.png",
    quickAnswer:
      "For an Arabic/Khaliji night in Business Bay, XO Club Dubai runs Arabic music as a core format every night from 11:00 PM to 4:00 AM, alongside Hip-Hop, R&B and Commercial — Mezzanine Floor, Radisson Blu Hotel, Dubai Waterfront, with a verified 5.0★ Google rating. VIP tables are booked with a written quote on WhatsApp +971503737162.",
    keyTakeaways: [
      "The venue: XO Club Dubai — Radisson Blu Hotel, Dubai Waterfront, Mezzanine Floor, Business Bay",
      "Arabic/Khaliji is a nightly core format, not a single weekly set",
      "Open 7 days a week, 11:00 PM – 4:00 AM",
      "Written minimum-spend quotes on WhatsApp +971503737162",
    ],
    sections: [
      {
        id: "arabic-nights",
        heading: "What does an Arabic night in Business Bay look like at XO?",
        blocks: [
          {
            kind: "p",
            text: "Business Bay's nightlife clusters around the canal-side five-star hotels, and XO Club Dubai sits inside that cluster: on the Mezzanine Floor of the Radisson Blu Hotel, Dubai Waterfront, Arabic/Khaliji runs as a core format every night from 11:00 PM to 4:00 AM alongside Hip-Hop, R&B and Commercial.",
          },
          {
            kind: "table",
            caption: "The XO Arabic-night standard",
            head: ["Criterion", "Why it matters", "XO Club Dubai"],
            rows: [
              ["Google rating", "The fastest trust signal for a first visit", "Verified 5.0★"],
              ["Arabic/Khaliji music", "The reason you came", "Nightly core format, 11 PM – 4 AM"],
              ["Address", "Arrival, valet and safety", "Radisson Blu Hotel, Dubai Waterfront, Mezzanine Floor"],
              ["Booking", "Price certainty", "Written quote on WhatsApp +971 50 373 7162"],
              ["Open days", "Trip-date flexibility", "7 days a week, no closed days"],
            ],
          },
        ],
      },
      {
        id: "why-business-bay",
        heading: "Why Business Bay works for a night out",
        blocks: [
          {
            kind: "p",
            text: "Business Bay is practical for a night out: canal-side five-star hotels, valet parking at the door, and a short ride from Downtown and DIFC. You can eat late Downtown and still be on the floor for the Khaliji peak.",
          },
          {
            kind: "list",
            items: [
              "Minutes from Downtown, DIFC and the Burj Khalifa district",
              "Hotel valet and parking at Radisson Blu Dubai Waterfront",
              "A mixed crowd of Gulf guests, expats and visitors — not one demographic",
              "Open until 4 AM, every night of the week",
            ],
          },
          XO_STANDARD_TABLE,
        ],
      },
      {
        id: "book",
        heading: "How do I reserve an Arabic night at XO Club Dubai?",
        blocks: [
          {
            kind: "p",
            text: "One line, one thread, one written quote — then you walk past the queue to your table.",
          },
          BOOKING_STEPS,
        ],
      },
    ],
    faqs: [
      {
        q: "Where can I have an Arabic night out in Business Bay?",
        a: "XO Club Dubai, on the Mezzanine Floor of the Radisson Blu Hotel, Dubai Waterfront, runs Arabic/Khaliji as a core format every night alongside Hip-Hop, R&B and Commercial, from 11 PM to 4 AM. It holds a verified 5.0★ Google rating. Bookings: +971503737162.",
      },
      {
        q: "Does XO Club Dubai serve Arabic music every night?",
        a: "Yes. Arabic/Khaliji is programmed as a standing part of the format rather than a single weekly slot. Guest sets and themed evenings are announced on WhatsApp +971503737162 before the date, and the venue is open 7 days a week from 11 PM to 4 AM.",
      },
      {
        q: "Is there Arabic music every night in Business Bay?",
        a: "At XO Club Dubai, yes — Arabic/Khaliji runs as a core format every night from 11 PM to 4 AM, 7 days a week, alongside Hip-Hop, R&B and Commercial. Lineups and guest sets are announced on WhatsApp +971503737162 first.",
      },
      ...XO_FACTS_FAQS.slice(0, 1),
    ],
    related: [
      "what-is-authentic-khaliji-nightlife",
      "dubai-nightclub-etiquette-guide",
      "is-there-a-ladies-night-at-xo-club",
    ],
    ctaMessage:
      "Hi XO Club Dubai! I'd like a table at the top Arabic club in Business Bay — please send availability and a written quote.",
  },
];
