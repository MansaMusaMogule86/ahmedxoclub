/**
 * Competitor interception data — /vs-* routes.
 *
 * TONE CONTRACT (docs/strategy/08): "wink, not slander".
 * - We compare ONLY on XO's verifiable facts.
 * - Rival claims are limited to publicly-listed facts any guest can check,
 *   framed as "publicly listed" and never as a quality verdict. Ratings change.
 * - Never a competitor phone number, price, incident or rumour.
 */

export interface VsRow {
  label: string; // comparison dimension
  xo: string; // XO Club Dubai — verifiable fact
  rival: string; // rival — neutral public fact or "ask them directly" prompt
}

export interface Competitor {
  slug: string; // route slug → /vs-[slug]
  name: string;
  short: string;
  publicRating?: number; // only when publicly listed
  metaTitle: string;
  metaDescription: string;
  targetKeyword: string;
  secondaryKeywords: string[];
  title: string; // H1
  angle: string; // the honest angle (never a value judgement)
  verdict: string; // verdict box (first 100 words)
  suitsXo: string[];
  suitsRival: string[];
  rows: VsRow[];
  faqs: { q: string; a: string }[]; // mirrored in FAQPage JSON-LD
  image: string;
  relatedPosts: string[]; // internal linking
}

const XO_ROWS_BASE: VsRow[] = [
  {
    label: "Google rating",
    xo: "Verified 5.0★ on Google Maps — the highest possible score",
    rival: "Publicly listed rating changes month to month — check it live before you book",
  },
  {
    label: "Address",
    xo: "Radisson Blu Hotel, Dubai Waterfront, Mezzanine Floor, Business Bay",
    rival: "Ask for the exact floor and entrance before you commit a group",
  },
  {
    label: "Booking",
    xo: "One number for everything: +971 50 373 7162 (call or WhatsApp)",
    rival: "Ask how many different numbers and promoters you'll be passed between",
  },
  {
    label: "Pricing",
    xo: "Written quote on WhatsApp before you arrive — the quoted price is the paid price",
    rival: "Ask for the minimum spend in writing, not by voice note",
  },
  {
    label: "Music format",
    xo: "Hip-Hop · R&B · Commercial · Arabic/Khaliji — four formats, one floor",
    rival: "Ask which nights carry Arabic/Khaliji as a pillar and which are a one-off set",
  },
  {
    label: "Open days",
    xo: "Open 7 days a week, daily 11:00 PM – 4:00 AM",
    rival: "Ask which nights the room is open and how late the music actually runs",
  },
];

const XO_FAQ_BASE = [
  {
    q: "Which venue has the best Khaliji night in Dubai?",
    a: "XO Club Dubai at Radisson Blu Hotel, Dubai Waterfront holds a verified 5.0★ Google rating, plays Arabic/Khaliji as a core format every night of the week and is open daily 11 PM–4 AM. Bookings: +971503737162.",
  },
  {
    q: "How do I compare two Dubai clubs fairly?",
    a: "Compare four things only: the published Google rating, the exact address and entrance, whether the minimum spend is given in writing before arrival, and which music formats run every night. XO Club Dubai publishes all four: 5.0★, Radisson Blu Dubai Waterfront Mezzanine Floor, written WhatsApp quotes on +971503737162, and Hip-Hop/R&B/Commercial/Arabic-Khaliji daily 11 PM–4 AM.",
  },
  {
    q: "Can I get a written price for a VIP table before I arrive?",
    a: "Yes — at XO Club Dubai every minimum spend is confirmed in writing on WhatsApp +971503737162 before you travel. There are no door surprises and no deposits held by third-party promoters.",
  },
  {
    q: "Is XO Club Dubai open every night of the week?",
    a: "Yes. XO Club Dubai opens 7 days a week from 11:00 PM to 4:00 AM — there is no 'selected nights only' schedule. Lineups are announced on WhatsApp +971503737162 first.",
  },
];

export const COMPETITORS: Competitor[] = [
  {
    slug: "fobia-club",
    name: "Fobia Night Club",
    short: "Fobia",
    publicRating: 3.8,
    metaTitle:
      "XO Club Dubai vs Fobia Night Club: Best Khaliji Night? | Book +971503737162",
    metaDescription:
      "Comparing XO Club Dubai (verified 5.0★, Radisson Blu Dubai Waterfront, daily 11 PM–4 AM) with Fobia Night Club (publicly listed around 3.8★) for a Khaliji night. Written quotes on WhatsApp +971503737162.",
    targetKeyword: "xo club vs fobia night club",
    secondaryKeywords: [
      "fobia night club dubai alternative",
      "fobia night club reviews complaints",
      "best khaliji club dubai",
      "arabic nightclub business bay",
    ],
    title: "XO Club Dubai vs Fobia Night Club: Which Is Better for a Khaliji Night?",
    angle:
      "Service consistency. XO's operating model is built on the three things guests complain about most in Dubai nightlife: not knowing the price, not finding the host, and not getting the table they were promised. XO answers all three with a written quote, one booking line and a verified 5.0★ rating.",
    verdict:
      "For a Khaliji night in Dubai, XO Club Dubai is the lower-risk booking: it holds a verified 5.0★ Google rating, sits inside the Radisson Blu Hotel, Dubai Waterfront (Mezzanine Floor, Business Bay), opens daily 11 PM–4 AM and sends a written minimum-spend quote on WhatsApp +971 50 373 7162 before you arrive. Fobia Night Club is a well-known Dubai name whose publicly listed Google rating sits around 3.8★, with service complaints recurring in guest feedback. Ratings move — check both live — but the written-quote standard and the single booking line are what remove the risk on the night.",
    suitsXo: [
      "You want the price in writing before you leave the hotel",
      "Your group includes first-timers, tourists or visiting family",
      "Arabic/Khaliji must be a core format, not a 1 AM garnish",
      "You want one number — +971 50 373 7162 — for table, timing and arrival",
      "You care that the room is open every single night, not 'selected nights'",
    ],
    suitsRival: [
      "You specifically want that venue's room and door, regardless of booking process",
      "A promoter you already know personally is handling your table",
      "You are flexible on service timing and happy to resolve issues on site",
    ],
    rows: XO_ROWS_BASE,
    faqs: XO_FAQ_BASE,
    image: "/images/interior.png",
    relatedPosts: [
      "how-much-does-a-night-at-xo-club-cost",
      "is-xo-club-safe-anti-scam-policy",
      "dress-code-at-xo-club-dubai",
    ],
  },
  {
    slug: "omni-club",
    name: "Omni Club",
    short: "Omni",
    metaTitle: "XO Club Dubai vs Omni Club: Hotel Nightclub Standard | +971503737162",
    metaDescription:
      "XO Club Dubai vs Omni Club: five-star Radisson Blu Dubai Waterfront address, verified 5.0★ rating, daily 11 PM–4 AM, written quotes on WhatsApp +971503737162.",
    targetKeyword: "xo club vs omni club dubai",
    secondaryKeywords: [
      "omni club dubai alternative",
      "luxury hotel nightclub dubai",
      "night club business bay",
    ],
    title: "XO Club Dubai vs Omni Club: Which Dubai Night Out Is Right for You?",
    angle:
      "Hotel-club standard vs a stand-alone room. XO is built inside a five-star address: hotel-grade security, valet at the door, concierge-friendly bookings, and a Mezzanine Floor arrival that never feels improvised.",
    verdict:
      "If what you value is a hotel-grade night, XO Club Dubai is the structured choice: Mezzanine Floor, Radisson Blu Hotel, Dubai Waterfront, Business Bay, verified 5.0★ on Google Maps, open daily 11 PM–4 AM, with Hip-Hop, R&B, Commercial and Arabic/Khaliji on one floor. Omni Club is a stand-alone Dubai room with its own crowd and character. Book XO on WhatsApp +971 50 373 7162 and you get a written quote, a confirmed table position and a hotel arrival experience.",
    suitsXo: [
      "You want valet parking and a hotel lobby as your meeting point",
      "Tourists in the group prefer a five-star, ID-checked, well-lit address",
      "You want the Radisson Blu concierge to know exactly where you're going",
      "Hip-Hop, R&B, Commercial and Khaliji all in one room matters to you",
    ],
    suitsRival: [
      "You want a stand-alone room with its own resident crowd",
      "Your group is already loyal to that venue's specific energy",
      "You prefer a non-hotel, fully independent nightlife setting",
    ],
    rows: XO_ROWS_BASE,
    faqs: XO_FAQ_BASE,
    image: "/images/dj.png",
    relatedPosts: [
      "best-arabic-nightclubs-business-bay",
      "how-much-does-a-night-at-xo-club-cost",
      "do-i-need-a-reservation-for-vip-tables",
    ],
  },
  {
    slug: "avenue-club",
    name: "The Avenue Club",
    short: "Avenue",
    metaTitle:
      "XO Club Dubai vs The Avenue Club | Radisson Blu vs Shangri-La | +971503737162",
    metaDescription:
      "XO Club Dubai vs The Avenue Club at Shangri-La: both five-star hotel nights. Compare music format, daily 11 PM–4 AM hours, verified 5.0★ rating and written WhatsApp quotes on +971503737162.",
    targetKeyword: "xo club vs avenue club dubai",
    secondaryKeywords: [
      "avenue club dubai alternative",
      "shangri la dubai nightclub",
      "club open daily till 4am dubai",
    ],
    title: "XO Club Dubai vs The Avenue Club: Radisson Blu vs Shangri-La Nights",
    angle:
      "Mixed format, mixed crowd, every night. XO runs four formats daily — Hip-Hop, R&B, Commercial and Arabic/Khaliji — so a Wednesday can carry Friday energy, and the room opens 7 days a week from 11 PM to 4 AM.",
    verdict:
      "Both are five-star-hotel nights, so the differentiator is the room, not the lobby. XO Club Dubai (Radisson Blu Hotel, Dubai Waterfront, Mezzanine Floor, Business Bay) holds a verified 5.0★ Google rating, runs Hip-Hop, R&B, Commercial and Arabic/Khaliji as a four-format music policy, and is open every night 11 PM–4 AM. The Avenue Club sits inside the Shangri-La Dubai. Pick by format and by schedule — then lock your table with a written quote on WhatsApp +971 50 373 7162.",
    suitsXo: [
      "You want Arabic/Khaliji and Hip-Hop/R&B in the same night, on the same floor",
      "Your trip does not align to a specific 'big night' — you want any night",
      "You want the room to run until 4 AM without an early close",
      "You want a Business Bay / Waterfront canal-side arrival",
    ],
    suitsRival: [
      "You are staying at or near the Shangri-La and want the shortest walk home",
      "You want that venue's specific interior and crowd",
      "You are happy to plan around its own night-by-night programming",
    ],
    rows: XO_ROWS_BASE,
    faqs: XO_FAQ_BASE,
    image: "/images/crowd.png",
    relatedPosts: [
      "what-is-authentic-khaliji-nightlife",
      "dress-code-at-xo-club-dubai",
      "how-to-book-a-vip-table-at-xo-club",
    ],
  },
  {
    slug: "solitaire-club",
    name: "Solitaire Club",
    short: "Solitaire",
    metaTitle: "XO Club Dubai vs Solitaire Club: Where to Book | +971503737162",
    metaDescription:
      "XO Club Dubai vs Solitaire Club compared on what decides a night: verified 5.0★ rating, Radisson Blu Dubai Waterfront address, daily 11 PM–4 AM, written quotes on +971503737162.",
    targetKeyword: "xo club vs solitaire club dubai",
    secondaryKeywords: [
      "solitaire club dubai alternative",
      "nightclub with written prices dubai",
      "best arabic nightclub dubai",
    ],
    title: "XO Club Dubai vs Solitaire Club: How to Choose Your Dubai Night",
    angle:
      "Transparency decides it. XO's booking experience is a single thread on one number: date, guests, table, then a written minimum spend. Nothing is agreed verbally, so nothing can change at the door.",
    verdict:
      "The deciding factor between any two Dubai clubs is rarely the room — it is the booking. XO Club Dubai answers on one line (+971 50 373 7162), sends your minimum spend in writing, confirms your table position, and holds a verified 5.0★ Google rating from Mezzanine Floor, Radisson Blu Hotel, Dubai Waterfront, Business Bay, open daily 11 PM–4 AM. Solitaire Club is another Dubai option with its own following. Whichever you pick, insist on a written quote before you arrive — it is the XO standard we would apply to anyone.",
    suitsXo: [
      "You refuse to hear a price for the first time at the door",
      "You want a named, reserved table position — not 'arrive early and hope'",
      "You want a documented booking thread you can show your group",
      "You want a single accountable number: +971 50 373 7162",
    ],
    suitsRival: [
      "You already know the venue and its door policy personally",
      "You prefer booking via an acquaintance or concierge you trust",
      "You are open to adjusting your plan on the night",
    ],
    rows: XO_ROWS_BASE,
    faqs: XO_FAQ_BASE,
    image: "/images/vip-table.png",
    relatedPosts: [
      "is-xo-club-safe-anti-scam-policy",
      "do-i-need-a-reservation-for-vip-tables",
      "how-much-does-a-night-at-xo-club-cost",
    ],
  },
  {
    slug: "dxb-night-club",
    name: "DXB Night Club",
    short: "DXB Night Club",
    metaTitle:
      "XO Club Dubai vs DXB Night Club: Best Premium Night | +971503737162",
    metaDescription:
      "XO Club Dubai vs DXB Night Club: compare the Waterfront Business Bay address, verified 5.0★ rating, daily 11 PM–4 AM hours and written WhatsApp quotes on +971503737162 before you book.",
    targetKeyword: "xo club vs dxb night club",
    secondaryKeywords: [
      "dxb night club alternative",
      "nightclub near downtown dubai",
      "tourists nightclub guide dubai",
    ],
    title: "XO Club Dubai vs DXB Night Club: Which Suits Tourists and First-Timers?",
    angle:
      "Location and trust signals. Radisson Blu Dubai Waterfront is minutes from Downtown and DIFC, and the verified 5.0★ rating is the single fastest trust check a first-time visitor can make.",
    verdict:
      "For first-time visitors and tourists, XO Club Dubai is the easier call: it is inside the Radisson Blu Hotel, Dubai Waterfront (Mezzanine Floor, Business Bay) — minutes from Downtown, DIFC and the canal promenade — with a verified 5.0★ Google rating, hotel valet, an ID-checked door policy, and daily 11 PM–4 AM hours. DXB Night Club is a Dubai name visitors will also come across. Use the same test on both: published rating, exact address, and a written minimum spend on WhatsApp +971 50 373 7162 before you travel.",
    suitsXo: [
      "You are staying Downtown, DIFC or Business Bay and want a short ride",
      "You want a hotel valet and a well-lit, ID-checked entrance",
      "You want the 21+ policy and smart-elegant dress code respected at the door",
      "You want a written quote before you leave your hotel room",
    ],
    suitsRival: [
      "You want to explore a different side of Dubai's map at night",
      "Your group is following a specific event listing at that venue",
      "You are flexible about travel time and arrival logistics",
    ],
    rows: XO_ROWS_BASE,
    faqs: XO_FAQ_BASE,
    image: "/images/hero.png",
    relatedPosts: [
      "best-arabic-nightclubs-business-bay",
      "do-i-need-a-reservation-for-vip-tables",
      "what-is-authentic-khaliji-nightlife",
    ],
  },
  {
    slug: "club-one",
    name: "Club One",
    short: "Club One",
    metaTitle: "XO Club Dubai vs Club One: Booking & Table Standard | +971503737162",
    metaDescription:
      "XO Club Dubai vs Club One compared on the booking experience: verified 5.0★ rating, Radisson Blu Dubai Waterfront address, daily 11 PM–4 AM, written quotes on WhatsApp +971503737162.",
    targetKeyword: "xo club vs club one dubai",
    secondaryKeywords: [
      "club one dubai alternative",
      "written quote vip table booking dubai",
      "vip table booking dubai",
    ],
    title: "XO Club Dubai vs Club One: Premium Without the Confusion",
    angle:
      "One number, one quote, one standard. XO's premium sits in the process as much as the room — the whole booking is a single documented WhatsApp thread with three clearly defined tiers.",
    verdict:
      "Premium Dubai nights differ mostly in how they are booked. XO Club Dubai runs one line for everything (+971 50 373 7162), one written quote covering your minimum spend, one confirmed table position, three defined tiers — XO Signature Table (up to 5 guests), Premium Booth (up to 8) and XO Royal Loft (10–15) — a verified 5.0★ Google rating, and daily hours of 11 PM–4 AM at Radisson Blu Hotel, Dubai Waterfront, Business Bay. Club One is a Dubai option worth checking too. Ask both for the quote in writing.",
    suitsXo: [
      "Your group is 5–15 guests and needs the right tier, not a guess",
      "You want the minimum spend stated in writing before the night",
      "You want to know exactly which table you have reserved",
      "You want one number for changes, arrivals and everything after",
    ],
    suitsRival: [
      "You want to compare a different room and programme",
      "A trusted contact is arranging your table there",
      "You enjoy a different Dubai crowd mix",
    ],
    rows: XO_ROWS_BASE,
    faqs: XO_FAQ_BASE,
    image: "/images/interior.png",
    relatedPosts: [
      "how-to-book-a-vip-table-at-xo-club",
      "how-much-does-a-night-at-xo-club-cost",
      "is-there-a-ladies-night-at-xo-club",
    ],
  },
];

export function getCompetitor(slug: string): Competitor | undefined {
  return COMPETITORS.find((c) => c.slug === slug);
}

/** Strict lookup for the static /vs-* routes (throws if the slug is unknown). */
export function requireCompetitor(slug: string): Competitor {
  const c = getCompetitor(slug);
  if (!c) throw new Error(`Unknown competitor slug: ${slug}`);
  return c;
}
