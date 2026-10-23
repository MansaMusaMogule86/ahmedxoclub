/**
 * XO Club Dubai — seed.
 *
 * HARD RULES (brand spec):
 * - NEVER invent DJs, artists, events, weekly schedules, prices, awards or
 *   review counts. Anything here must be a verified fact.
 * - Therefore this seed intentionally writes NO fabricated content.
 *
 * It resets the three content tables so the site falls back to its elegant
 * management placeholders (see docs/strategy/13) until real data is added:
 *   - Event  → "Upcoming Experiences" TBA placeholder card (Event schema is
 *              emitted ONLY for real, confirmed events)
 *   - Review → curated on-site feed until the live Google source is connected
 *   - Booking→ starts empty; real reservations flow in via /api/bookings
 *
 * Real data is added by management, not by this script.
 *
 * Run: npx prisma db push && npx tsx prisma/seed.ts
 */
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function main() {
  await db.booking.deleteMany({});
  await db.event.deleteMany({});
  await db.review.deleteMany({});

  console.log(
    [
      "",
      "XO Club Dubai — content tables reset (no fabricated data seeded).",
      "",
      "The website now renders its elegant placeholder states:",
      "  - Events   -> '[Insert Event Theme] / [Insert Date] / [Insert DJ-Artist Name]' TBA card",
      "  - Reviews  -> curated on-site feed until the live Google source is connected",
      "  - Bookings -> empty; real requests arrive via /api/bookings",
      "",
      "To publish real content, add records with CONFIRMED facts only:",
      "  - Event:  title, performer, date, description (announced & confirmed)",
      "  - Review: name, rating, text, source (a real guest review, with consent)",
      "",
      "Verified venue facts for every page: Radisson Blu Hotel, Dubai Waterfront,",
      "Mezzanine Floor, Business Bay | daily 11:00 PM - 4:00 AM, 7 days a week |",
      "verified 5.0* Google rating | ONE booking line: +971503737162",
      "",
    ].join("\n")
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => db.$disconnect());
