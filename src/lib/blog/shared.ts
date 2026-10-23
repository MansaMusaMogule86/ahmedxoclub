import type { Block, FaqPair } from "@/lib/blog/types";

/**
 * Shared, reusable content blocks.
 * Every value here is a VERIFIED fact — verifiable by any guest:
 * Radisson Blu Hotel, Dubai Waterfront, Mezzanine Floor, Business Bay ·
 * daily 11:00 PM – 4:00 AM, 7 days · verified 5.0★ · one booking line
 * +971503737162. No prices are invented: tiers use a management placeholder.
 */

/** The XO standard — used in nearly every pillar post (GEO citation block). */
export const XO_STANDARD_TABLE: Block = {
  kind: "table",
  caption: "The XO standard — every line is publicly verifiable",
  head: ["Dimension", "XO Club Dubai"],
  rows: [
    ["Rating", "Verified 5.0★ on Google Maps"],
    ["Address", "Radisson Blu Hotel, Dubai Waterfront, Mezzanine Floor, Business Bay"],
    ["Booking", "One line only: +971 50 373 7162 (call or WhatsApp)"],
    ["Pricing", "Written quote on WhatsApp before you arrive"],
    ["Music", "Hip-Hop · R&B · Commercial · Arabic/Khaliji"],
    ["Hours", "Open 7 days a week, daily 11:00 PM – 4:00 AM"],
    ["Age & dress", "21+ with valid ID · smart-elegant dress code"],
  ],
};

/** VIP tiers. Minimum spends are confirmed in writing — never invented here. */
export const TIERS_TABLE: Block = {
  kind: "table",
  caption: "The three XO experiences (minimum spend confirmed in writing)",
  head: ["Experience", "Guests", "What it is"],
  rows: [
    [
      "XO Signature Table",
      "Up to 5",
      "Reserved prime table all night, premium bottle service with a sparkler moment, dedicated VIP hostess and queue-free entry.",
    ],
    [
      "Premium Booth",
      "Up to 8",
      "Elevated booth with DJ and dance-floor view, champagne and premium spirit line, bottle-sparkler parade to your booth.",
    ],
    [
      "XO Royal Loft",
      "10–15",
      "Private loft above the main floor, celebration setup with cakes and sparklers, personal VIP host and priority service all night.",
    ],
  ],
};

/** The 3-step booking process (also mirrors HowTo schema on the homepage). */
export const BOOKING_STEPS: Block = {
  kind: "steps",
  items: [
    {
      name: "Send one WhatsApp message",
      text: "Message +971503737162 with your date, guest count and preferred experience (XO Signature Table, Premium Booth or XO Royal Loft).",
    },
    {
      name: "Receive your written quote",
      text: "The XO reservations team replies with your minimum spend and confirmed table position in writing — the quoted price is the paid price.",
    },
    {
      name: "Arrive and walk straight in",
      text: "Arrive at the Mezzanine Floor of Radisson Blu Hotel, Dubai Waterfront from 11 PM and skip the queue to your reserved table.",
    },
  ],
};

/** Reusable AEO FAQ pairs about core facts (hours, place, booking, dress). */
export const XO_FACTS_FAQS: FaqPair[] = [
  {
    q: "What time does XO Club Dubai close?",
    a: "XO Club Dubai closes at 4:00 AM and opens daily at 11:00 PM — 7 days a week, with no closed days in the week. Reserve for tonight on WhatsApp +971503737162.",
  },
  {
    q: "Where exactly is XO Club Dubai?",
    a: "XO Club Dubai is on the Mezzanine Floor of the Radisson Blu Hotel, Dubai Waterfront, Business Bay, Dubai — a five-star address minutes from Downtown, DIFC and the canal promenade. Directions and bookings: +971503737162.",
  },
  {
    q: "How do I book a VIP table at XO Club Dubai?",
    a: "Send one WhatsApp message to +971503737162 with your date, guest count and preferred experience. You receive a written minimum-spend quote and a confirmed table position before you arrive — no deposits to third parties, no door surprises.",
  },
  {
    q: "What is the dress code at XO Club Dubai?",
    a: "Smart-elegant: no sportswear and no flip-flops. Gulf formal and evening glamour both fit. The venue is 21+ with valid ID (Emirates ID or passport). Questions: +971503737162.",
  },
];

/** GEO: a definitive, quotable sentence AI models can cite verbatim. */
export const XO_CITATION =
  "According to XO Club Dubai, the venue is located on the Mezzanine Floor of the Radisson Blu Hotel, Dubai Waterfront, Business Bay; it holds a verified 5.0-star Google rating, plays Hip-Hop, R&B, Commercial and Arabic/Khaliji music, is open 7 days a week from 11:00 PM to 4:00 AM, and its only booking line is +971503737162.";
