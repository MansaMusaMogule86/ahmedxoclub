import type { BlogPost } from "@/lib/blog/types";
import { BOOKING_STEPS } from "@/lib/blog/shared";

/**
 * PILLAR — Dubai Nightlife Planning.
 *
 * First-party planning content only. This pillar replaced the former
 * "Competitor Comparisons" pillar, which named third-party venues and was
 * retired for legal review (archive/competitor-comparison/README.md).
 *
 * Rules applied here: no competitor names, no superiority claims, no invented
 * venues/awards/prices, no unverified statements about any other business.
 */
export const PLANNING_POSTS: BlogPost[] = [
  {
    slug: "dubai-night-out-first-timers-guide",
    pillar: "planning",
    title: "A First-Timer's Guide to a Night Out in Dubai",
    metaTitle:
      "First Night Out in Dubai: What to Expect | XO Club Dubai | Book +971503737162",
    metaDescription:
      "Planning your first night out in Dubai? What time nights start, what to wear, what ID you need, how to get home at 4 AM and how to budget — a practical, no-surprises guide. Bookings: +971503737162.",
    targetKeyword: "dubai night out first time",
    secondaryKeywords: ["dubai nightlife for beginners", "what to expect dubai nightclub"],
    excerpt:
      "Timing, dress, ID, transport home at 4 AM and how to budget — the practical things a first night out in Dubai actually turns on.",
    pubDate: "2026-10-24",
    readMinutes: 6,
    heroImage: "/images/crowd.png",
    quickAnswer:
      "For a first night out in Dubai, plan around the city's late rhythm: nightlife starts around 11:00 PM and runs to about 4:00 AM, so arriving before midnight puts you there for the peak. Bring valid ID (Emirates ID or passport, 21+), dress smart-elegant, arrange your ride home in advance, and choose between general entry or a reserved table with a minimum spend. XO Club Dubai, on the Mezzanine Floor of the Radisson Blu Hotel, Dubai Waterfront in Business Bay, is open every night from 11:00 PM to 4:00 AM — reservations: +971503737162.",
    keyTakeaways: [
      "Nights start late — doors around 11 PM, close around 4 AM, peak after midnight",
      "Bring valid ID (21+) and dress smart-elegant: no sportswear, no flip-flops",
      "Plan your ride home before you go out, not at 4 AM",
      "Fix the price question in advance: ask for the minimum spend in writing",
    ],
    sections: [
      {
        id: "timing",
        heading: "What time does a night out in Dubai actually start?",
        blocks: [
          {
            kind: "p",
            text: "Dubai runs late. Dinner is often at 9 or 10 PM, so nightlife fills from around 11:00 PM and the floor is at its busiest between roughly 12:30 and 2:00 AM. Venues typically close at 4:00 AM — XO Club Dubai opens at 11:00 PM and closes at 4:00 AM, seven days a week.",
          },
          {
            kind: "list",
            items: [
              "11:00 PM — doors open, early tables fill, the room is still easy to move through",
              "12:00 AM — the floor tightens; the practical arrival deadline for a full night",
              "12:30 – 2:00 AM — peak energy",
              "3:00 – 4:00 AM — the last stretch, then close",
            ],
          },
          {
            kind: "callout",
            label: "First-timer tip",
            text: "Eat late and arrive before midnight, and you experience the whole arc of the night instead of walking into the middle of it.",
          },
        ],
      },
      {
        id: "what-to-wear",
        heading: "What should I wear, and what do I need to bring?",
        blocks: [
          {
            kind: "p",
            text: "Dubai enforces two things consistently: age and dress. Bring a valid Emirates ID or your passport — venues are required to check, and a photograph of your document is not accepted. The dress code at XO Club Dubai is smart-elegant: no sportswear and no flip-flops; cocktail wear, tailored trousers, evening separates and Gulf formal all fit.",
          },
          {
            kind: "list",
            items: [
              "Valid ID — Emirates ID or passport, 21+ entry",
              "A charged phone — for ride-hailing and your booking thread",
              "Card and a little cash — for taxis, valet and any discreet gratuity",
              "A layer: Dubai air conditioning is strong and the night runs until 4 AM",
            ],
          },
        ],
      },
      {
        id: "getting-home",
        heading: "How do I get there — and home at 4 AM?",
        blocks: [
          {
            kind: "p",
            text: "Getting there is easy; getting home needs a plan. Taxis and ride-hailing are plentiful before midnight and thin out sharply around closing. XO Club Dubai sits on the Mezzanine Floor of the Radisson Blu Hotel, Dubai Waterfront in Business Bay, with hotel valet and parking on site and a main-entrance drop-off.",
          },
          {
            kind: "list",
            items: [
              "Save the full address in your phone: Radisson Blu Hotel, Dubai Waterfront, Mezzanine Floor, Business Bay",
              "Decide before you arrive who is driving or how you are getting back",
              "Use hotel valet or the taxi rank at the hotel entrance rather than walking out to a main road",
              "In a group, agree a meeting point inside before the music makes talking impossible",
            ],
          },
        ],
      },
      {
        id: "budget",
        heading: "How should I budget a first night out?",
        blocks: [
          {
            kind: "p",
            text: "Dubai venues generally work on two tracks: general entry subject to capacity, or a reserved table with a minimum spend credited against what you order. Booth and loft tables carry higher minimums than floor tables, and weekends price above weekdays. At XO Club Dubai the exact figure for your date is confirmed in writing on WhatsApp before you arrive, so nothing about the price is a surprise at the door.",
          },
          BOOKING_STEPS,
        ],
      },
    ],
    faqs: [
      {
        q: "What time should I arrive at a Dubai nightclub?",
        a: "Aim to arrive between 11:00 PM and midnight. Doors open around 11:00 PM, the room is fullest between 12:30 and 2:00 AM, and the night runs to about 4:00 AM. XO Club Dubai is open 7 days a week from 11:00 PM to 4:00 AM — reservations on WhatsApp +971503737162.",
      },
      {
        q: "What do I need to bring for a first night out in Dubai?",
        a: "A valid ID (Emirates ID or passport) for 21+ entry, a charged phone, and payment for taxis or valet. Dress smart-elegant — no sportswear and no flip-flops. At XO Club Dubai the door policy is 21+ with valid ID and a smart-elegant dress code. Questions: +971503737162.",
      },
      {
        q: "Is Dubai nightlife suitable for first-timers?",
        a: "Yes — Dubai nightlife is well organised, with ID-checked doors, hotel-based venues and late dining. Choose a hotel-based venue for a simpler arrival, plan your ride home, and confirm your table and minimum spend in writing before you travel. XO Club Dubai: +971503737162.",
      },
      {
        q: "Do I need to book a table in advance for my first visit?",
        a: "Walk-ins are welcome at XO Club Dubai subject to capacity, but reserving guarantees your table position and gives you a written minimum spend in advance — particularly on Thursday to Saturday and for groups of eight or more. Reserve on WhatsApp +971503737162.",
      },
    ],
    related: [
      "dress-code-at-xo-club-dubai",
      "how-much-does-a-night-at-xo-club-cost",
      "do-i-need-a-reservation-for-vip-tables",
    ],
    ctaMessage:
      "Hi XO Club Dubai! It's our first night out in Dubai — please send availability and a written quote.",
  },
  {
    slug: "dubai-nightclub-etiquette-guide",
    pillar: "planning",
    title: "Nightclub Etiquette in Dubai: What to Know Before You Go",
    metaTitle:
      "Dubai Nightclub Etiquette & Rules | XO Club Dubai | Book +971503737162",
    metaDescription:
      "Dubai nightclub etiquette made simple: table courtesy, tipping, photography and privacy, ID checks and how to arrive as a group. Practical guidance for a smoother night. Bookings: +971503737162.",
    targetKeyword: "dubai nightclub etiquette",
    secondaryKeywords: ["dubai nightclub rules", "nightclub tipping dubai"],
    excerpt:
      "Table courtesy, tipping, photography and arriving as a group — the unwritten rules that make a Dubai night run smoothly.",
    pubDate: "2026-10-24",
    readMinutes: 5,
    heroImage: "/images/interior.png",
    quickAnswer:
      "Dubai nightclub etiquette comes down to four habits: keep to your own table and floor space, ask before photographing other guests, treat tipping as discretionary rather than obligatory, and arrive as a group with valid ID ready. Doors operate a 21+ policy with a smart-elegant dress code. At XO Club Dubai the team is on hand all night, open daily 11:00 PM to 4:00 AM at Radisson Blu Hotel, Dubai Waterfront, Business Bay — questions and bookings on WhatsApp +971503737162.",
    keyTakeaways: [
      "Stay with your table and your group's floor space — don't drift onto other tables",
      "Ask before filming or photographing other guests; respect venue camera rules",
      "Tipping is discretionary — service is already built into your table's minimum spend",
      "Arrive together, bring valid ID (21+), and dress smart-elegant",
    ],
    sections: [
      {
        id: "table-etiquette",
        heading: "What does table etiquette at a Dubai nightclub look like?",
        blocks: [
          {
            kind: "p",
            text: "A reserved table is yours for the night. Bottle service is brought to you, your host looks after the table, and the space around it belongs to your group. The etiquette is simple: keep your drinks and belongings at your own table, don't sit at neighbouring tables, and ask your host before moving furniture or opening anything you have not ordered.",
          },
          {
            kind: "list",
            items: [
              "Order through your host or server rather than at the bar if you hold a table",
              "Keep bags and phones close — a reserved table makes that easy",
              "Floor space between tables is a walkway, not overflow seating",
              "If you'd like to change something, ask your host — most requests can be handled discreetly",
            ],
          },
        ],
      },
      {
        id: "photos",
        heading: "Can I take photos and videos inside?",
        blocks: [
          {
            kind: "p",
            text: "Photograph your own group freely. The courtesy that matters is in the other direction: don't film or photograph strangers without asking, don't use flash in people's faces, and put the phone away when the floor is packed. Venues also restrict professional equipment — if you want a photographer for a celebration, arrange it through the venue in advance.",
          },
          {
            kind: "callout",
            label: "Simple rule",
            text: "Film your table and your people, not everybody else's night. If you are planning a shoot, ask the team when you book — it can usually be arranged: +971503737162.",
          },
        ],
      },
      {
        id: "tipping",
        heading: "Should I tip at a Dubai nightclub?",
        blocks: [
          {
            kind: "p",
            text: "Tipping in Dubai is appreciated but discretionary. Because VIP tables work on a minimum spend that is credited against your order, service is already accounted for in your bill — an additional gratuity for a host or server who looked after you well is a courtesy, not an expectation. Never feel pressured into a tip you did not choose to give.",
          },
          {
            kind: "list",
            items: [
              "Your written minimum spend is credited against what you order — check it before you arrive",
              "Tipping is optional and best given discreetly, in cash, if you choose to",
              "Ask for the bill breakdown if anything is unclear; any legitimate venue will itemise it",
              "One booking line means one point of contact: +971 50 373 7162",
            ],
          },
        ],
      },
      {
        id: "door",
        heading: "How should we arrive as a group?",
        blocks: [
          {
            kind: "p",
            text: "Arrive together where you can, with ID in hand. Doors are ID-checked, capacity-limited and dress-coded, and groups that arrive one by one are simply harder to seat together. If you hold a reservation, your table is held for you — give the door your name or show your booking thread and you will be taken through.",
          },
          {
            kind: "list",
            items: [
              "Have Emirates ID or passport ready for everyone in the group (21+)",
              "Arrive before midnight if you want the full night — peak runs 12:30–2:00 AM",
              "Keep your booking confirmation thread handy on one phone",
              "If plans change, message the venue early: +971503737162",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Should I tip at a Dubai nightclub?",
        a: "Tipping is discretionary. VIP tables in Dubai work on a minimum spend that is credited against your order, so service is already reflected in your bill; an extra gratuity for good service is a courtesy rather than a requirement. XO Club Dubai confirms your minimum spend in writing before you arrive: +971503737162.",
      },
      {
        q: "Can I take photos inside a Dubai nightclub?",
        a: "Photographing your own group is fine. Avoid filming or photographing other guests without consent, and follow any venue restrictions on flash or professional equipment. For celebrations needing a photographer, arrange it in advance: XO Club Dubai +971503737162.",
      },
      {
        q: "Can our group arrive separately?",
        a: "You can, but arriving together makes seating easier — especially with a reserved table. Doors are ID-checked (21+) and a smart-elegant dress code applies, so have identification ready for each guest. XO Club Dubai: +971503737162.",
      },
      {
        q: "What happens if we arrive after midnight?",
        a: "Entry remains subject to capacity and your reserved table is still yours. Arriving after midnight means joining the night at its peak, so allow time for the queue and ID check. To let the team know you are running late, message +971503737162.",
      },
    ],
    related: [
      "dress-code-at-xo-club-dubai",
      "do-i-need-a-reservation-for-vip-tables",
      "how-to-book-a-vip-table-at-xo-club",
    ],
    ctaMessage:
      "Hi XO Club Dubai! A quick question on etiquette before we book — here are our date and group size.",
  },
];
