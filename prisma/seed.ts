/**
 * Seed: events (next 5 weeks of headline nights) + approved reviews.
 * Run: bun prisma/seed.ts
 */
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

const DUBAI_TZ = "Asia/Dubai";

function nextWeekday(weekday: number, weeksAhead = 0, hour = 21): Date {
  // weekday: 0=Sun ... 6=Sat
  const now = new Date();
  const fmt = new Intl.DateTimeFormat("en-CA", {
    timeZone: DUBAI_TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const [y, m, d] = fmt.format(now).split("-").map(Number);
  const todayDubai = new Date(Date.UTC(y, m - 1, d));
  const todayDow = todayDubai.getUTCDay();
  let delta = (weekday - todayDow + 7) % 7;
  if (delta === 0) delta = 7; // always a future date
  const target = new Date(todayDubai);
  target.setUTCDate(target.getUTCDate() + delta + weeksAhead * 7);
  // Dubai is UTC+4 -> 21:00 Dubai = 17:00 UTC
  target.setUTCHours(hour - 4, 0, 0, 0);
  return target;
}

function fmtDate(dt: Date): string {
  const f = new Intl.DateTimeFormat("en-CA", { timeZone: DUBAI_TZ, year: "numeric", month: "2-digit", day: "2-digit" });
  return f.format(dt);
}

async function main() {
  await db.booking.deleteMany({});
  await db.event.deleteMany({});
  await db.review.deleteMany({});

  // ---------- Events: next 5 Friday "Grand Khaliji Night" + next 3 Wednesday Ladies Nights ----------
  const events = [
    {
      slug: "grand-khaliji-night",
      title: "Grand Khaliji Night with Faisal Al Saad",
      titleAr: "ليلة الخليج الكبرى مع فيصل سعد",
      description:
        "Our flagship Friday night. Khaliji superstar Faisal Al Saad performs his Gulf chart-toppers live with a 9-piece band, backed by the Al Waha dance troupe. Doors 9 PM, headline set 12:30 AM.",
      descriptionAr:
        "ليلة الجمعة الرائدة: النجم الخليجي فيصل سعد يقدم أجمل أغانيه الخليجية مباشرة مع فرقة من 9 موسيقيين وفرصة الرقص الشعبي.",
      performer: "Faisal Al Saad",
      date: nextWeekday(5, 0),
      coverCharge: "AED 100 (redeemable)",
      offer: "VIP Gold from AED 1,500",
      category: "live",
      featured: true,
    },
    {
      slug: "layal-al-arayes-ladies-night",
      title: "Layal Al Arayes — Ladies Night",
      titleAr: "ليال العرايس — ليلة السيدات",
      description:
        "Dubai's most talked-about Arabic ladies night. Free entry for ladies before midnight, a complimentary signature mocktail, live oud session and the Gulf Grooves dance floor until 3 AM.",
      descriptionAr:
        "أرقى ليلة سيدات عربية في دبي: دخول مجاني للسيدات قبل منتصف الليل، موكتيل هدية، وعزف عود حي.",
      performer: "DJ Noura + Oud live",
      date: nextWeekday(3, 0),
      coverCharge: "Ladies free before 12 AM · Gentlemen AED 100",
      offer: "Complimentary mocktail for ladies",
      category: "ladies",
      featured: true,
    },
    {
      slug: "khaleeji-classics-thursday",
      title: "Khaleeji Classics — Live Band Night",
      titleAr: "كلاسيكيات الخليج — ليلة الفرقة الحية",
      description:
        "Firqat Al Waha performs three decades of Khaleeji classics — from early رownting Abd Rabbo anthems to modern Gulf hits. Sing-along tables recommended.",
      descriptionAr:
        "فرقة الواحة تعيد أجمل كلاسيكيات الخليج عبر ثلاثة عقود — أمسيات مثالية لعشاق الغناء الخليجي الأصيل.",
      performer: "Firqat Al Waha",
      date: nextWeekday(4, 0),
      coverCharge: "AED 100 (redeemable)",
      offer: null,
      category: "live",
      featured: false,
    },
    {
      slug: "sahara-beats-saturday",
      title: "Sahara Beats — Gulf x Afro-House",
      titleAr: "إيقاعات الصحراء — خليجي × أفرو هاوس",
      description:
        "DJ Mazen fuses Khaleeji percussion with Afro-house and deep Arabic remixes. The highest-energy Saturday in Al Quoz — 600 guests, one dance floor.",
      descriptionAr:
        "دي جي مازن يمزج الإيقاعات الخليجية بالأفرو هاوس — أعلى ليالي السبت طاقةً في دبي.",
      performer: "DJ Mazen",
      date: nextWeekday(6, 0),
      coverCharge: "AED 100 (redeemable)",
      offer: "After 1 AM: 20% off bottles",
      category: "dj",
      featured: false,
    },
    {
      slug: "ya-hala-sunday",
      title: "Ya Hala Sunday — Majlis Sessions",
      titleAr: "يا هلا الأحد — جلسات المجلس",
      description:
        "A softer way to end the weekend: acoustic oud, qanun and vocals around the majlis, with a traditional Arabic coffee ritual and luqaimat service. Ideal for private groups.",
      descriptionAr:
        "خاتمة أنيقة لليلة نهاية الأسبوع: عزف صوتي هادئ حول المجلس مع طقس القهوة العربية والحلويات.",
      performer: "Yousef Al Marzouqi (oud)",
      date: nextWeekday(0, 0),
      coverCharge: "Free entry with reservation",
      offer: "Arabic coffee ritual included",
      category: "cultural",
      featured: false,
    },
    {
      slug: "grand-khaliji-night-w2",
      title: "Grand Khaliji Night — Faisal Al Saad (Round 2)",
      titleAr: "ليلة الخليج الكبرى — فيصل سعد (الجمعة الثانية)",
      description:
        "Back by popular demand: Faisal Al Saad returns for a second headline Friday. Royal Majlis booths sell out first — reserve early via WhatsApp.",
      descriptionAr: "بعد الطلب الكبير: عودة النجم فيصل سعد ليلاً الجمعة. احجز مبكراً عبر واتساب.",
      performer: "Faisal Al Saad",
      date: nextWeekday(5, 1),
      coverCharge: "AED 100 (redeemable)",
      offer: "Royal Majlis from AED 4,000",
      category: "live",
      featured: true,
    },
    {
      slug: "layal-al-arayes-ladies-w2",
      title: "Layal Al Arayes — Ladies Night (Week 2)",
      titleAr: "ليال العرايس — ليلة السيدات (الأسبوع الثاني)",
      description: "Free entry for ladies before midnight, complimentary mocktail, live oud and DJ Noura till 3 AM.",
      descriptionAr: "دخول مجاني للسيدات قبل منتصف الليل مع موكتيل هدية وعزف عود حي.",
      performer: "DJ Noura + Oud live",
      date: nextWeekday(3, 1),
      coverCharge: "Ladies free before 12 AM · Gentlemen AED 100",
      offer: "Complimentary mocktail for ladies",
      category: "ladies",
      featured: false,
    },
    {
      slug: "gulf-grooves-tuesday",
      title: "Gulf Grooves — Khaleeji Remix Night",
      titleAr: "جروف الخليج — ليلة الريمكس الخليجي",
      description:
        "DJ Noura spins Khaleeji remixes, Yemeni pop edits and Khaliji throwbacks. Midweek tables 20% off min spend.",
      descriptionAr: "دي جي نورا تعزف الريمكسات الخليجية — خصم 20% على الحد الأدنى لطاولات منتصف الأسبوع.",
      performer: "DJ Noura",
      date: nextWeekday(2, 0),
      coverCharge: "AED 100 (redeemable)",
      offer: "20% off table min spend",
      category: "dj",
      featured: false,
    },
    {
      slug: "oud-and-strings-monday",
      title: "Oud & Strings Monday",
      titleAr: "الاثنين — ليلة العود والوتر",
      description:
        "Oud maestro Yousef Al Marzouqi leads an intimate instrumental night. The perfect corporate wind-down or date night.",
      descriptionAr: "العبقري يوسف المزروعي يقود ليلة آلات هادئة — مثالية للشركات أو الأزواج.",
      performer: "Yousef Al Marzouqi",
      date: nextWeekday(1, 0),
      coverCharge: "AED 100 (redeemable)",
      offer: null,
      category: "live",
      featured: false,
    },
    {
      slug: "grand-khaliji-night-w3",
      title: "Grand Khaliji Night — Guest Star Edition",
      titleAr: "ليلة الخليج الكبرى — نجمة ضيفة",
      description:
        "A surprise Gulf guest star joins Firqat Al Waha on the Friday headline stage. Announcement drops on Instagram every Monday.",
      descriptionAr: "نجم خليجي ضيف ينضم لفرقة الواحة — يُعلن عنه كل اثنين على إنستغرام.",
      performer: "Guest Star + Firqat Al Waha",
      date: nextWeekday(5, 2),
      coverCharge: "AED 100 (redeemable)",
      offer: "VIP Gold from AED 1,500",
      category: "live",
      featured: true,
    },
  ];

  for (const e of events) await db.event.create({ data: e });

  // ---------- Reviews ----------
  const reviews = [
    { name: "Mohammed Al Rashid", rating: 5, text: "Finally a club in Dubai that plays real Khaleeji music all night — not two songs at 1 AM. The band on Friday was unbelievable. Booked on WhatsApp in 3 minutes, table was exactly what they quoted. No surprises.", source: "Google", featured: true },
    { name: "Noura Al Suwaidi", rating: 5, text: "Ladies night on Wednesday is the best in Dubai, full stop. Free entry before 12, no drama at the door, and the staff treated us like family. The majlis booths are stunning.", source: "Google", featured: true },
    { name: "Fatima H.", rating: 5, text: "We booked the Royal Majlis for my sister's henna party. They confirmed the price in writing, decorated the booth for us, and the oud player learned her favorite song. This is how hospitality is done.", source: "TripAdvisor", featured: true },
    { name: "Khalid Al Marri", rating: 4, text: "Great authentic night. Gets busy after 12 so book a table. Parking was easy with valet. Only wish Fridays were longer than 4 AM!", source: "Google", featured: true },
    { name: "Sara Mahmoud", rating: 5, text: "As someone who was tired of clubs that overcharge tourists, the transparent pricing here is refreshing. What they quote on WhatsApp is what you pay. The Grand Khaliji Night is a must.", source: "Google", featured: true },
    { name: "Abdullah Al Otaibi", rating: 5, text: "My out-of-town guests wanted a real Gulf night — Layali delivered. Live band, dabke moments, amazing shisha. They answered my booking call at 11 PM within a minute.", source: "TripAdvisor", featured: true },
    { name: "Layla I.", rating: 5, text: "Safe, elegant, and the music is 100% Khaleeji. I've brought every visiting cousin here since. The Wednesday ladies night mocktail is genuinely delicious too.", source: "Google", featured: true },
    { name: "Yousef B.", rating: 4, text: "VIP Gold table for 4 was perfect value — AED 1,500 min spend went a long way with the bottle deals. Service was fast. Will book the Platinum next time for the stage view.", source: "Google", featured: true },
    { name: "Hessa Al Nuaimi", rating: 5, text: "Booked for a corporate farewell of 30 people. The events team sent a written package the same day and organized everything — even the Arabic coffee welcome. Professional.", source: "Google", featured: false },
    { name: "Omar Z.", rating: 5, text: "Came skeptical after bad experiences elsewhere in Dubai. Left at 4 AM. The Friday crowd, the band, the energy — this is the real Gulf night. Reserve ahead, weekends fill up.", source: "TripAdvisor", featured: true },
  ];
  for (const r of reviews) await db.review.create({ data: { ...r, approved: true } });

  // One example booking for tonight so availability widget shows realistic "tables left"
  const tonight = fmtDate(nextWeekday(new Intl.DateTimeFormat("en-US", { timeZone: DUBAI_TZ, weekday: "short" }).format(new Date()) === "" ? 5 : new Date().getDay()));
  await db.booking.create({
    data: {
      reference: "LY-DEMO01",
      name: "Demo Group",
      phone: "+971500000000",
      date: tonight,
      guests: 4,
      tableType: "GOLD",
      status: "CONFIRMED",
      source: "seed",
    },
  });

  console.log(`Seeded ${events.length} events, ${reviews.length} reviews, 1 demo booking (tonight=${tonight})`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => db.$disconnect());
