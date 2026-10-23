/**
 * THE MAZE — 7 content silos rendered as on-page authority hubs.
 * Each silo: EN body copy (SEO/GEO depth), AR title/subtitle/intro,
 * verified-facts stats, FAQs. Phone +971503737162 woven throughout.
 */

export interface SiloFaq {
  q: string;
  a: string;
}

export interface Silo {
  slug: string;
  tab: string;
  tabAr: string;
  image: string;
  en: {
    title: string;
    subtitle: string;
    intro: string;
    body: string[];
    stats: { value: string; label: string }[];
    faqs: SiloFaq[];
  };
  ar: {
    title: string;
    subtitle: string;
    intro: string;
  };
}

export const SILOS: Silo[] = [
  {
    slug: "khaliji-nightlife-dubai",
    tab: "Khaliji Nightlife Guide",
    tabAr: "دليل السهر الخليجي",
    image: "/images/crowd.png",
    en: {
      title: "Khaliji Nightlife in Dubai: The Definitive Guide (2025)",
      subtitle: "What a real Gulf night looks like — from the club that plays it nightly.",
      intro:
        "Khaliji nightlife is the Gulf's own night out: Khaleeji anthems at midnight, the dance floor packed with locals, expats and visitors on one floor, and the kind of hospitality that only a five-star address can deliver.",
      body: [
        "Dubai's Khaliji scene splits into two worlds: hotel venues that trade on views, and rooms that trade on energy. XO Club Dubai — Mezzanine Floor, Radisson Blu Hotel, Dubai Waterfront, Business Bay — was built to end that trade-off. A five-star address, a mixed crowd of expats, tourists and locals, and a music policy that gives Khaleeji anthems their rightful place next to Hip-Hop, R&B and Commercial hits, every night from 11 PM to 4 AM.",
        "How do you spot a genuine Khaliji night? Four checks: the music format (is Arabic/Khaliji a pillar, or a 1 AM garnish?), the crowd mix (a real Gulf night draws Emirati, Saudi and Kuwaiti tables alongside international guests), pricing transparency (every quote in writing on WhatsApp), and the door policy (21+, ID-checked, zero drama). XO runs all four — it's why the club holds a verified 5.0★ rating on Google Maps.",
        "The rhythm of the night matters too. Dubai eats late and dances later: doors and dinner crowds from 11 PM, the floor filling by midnight, peak energy 12:30–2:00 AM, and Khaleeji classics carrying the room to 4 AM. Reserve your table before 10 PM on WhatsApp +971503737162 and the XO team confirms everything in writing — table position, minimum spend, the whole night.",
      ],
      stats: [
        { value: "5.0★", label: "verified Google Maps rating" },
        { value: "7 days", label: "open every single week" },
        { value: "11 PM – 4 AM", label: "nightly, no early closings" },
        { value: "4 formats", label: "Hip-Hop · R&B · Commercial · Khaliji" },
      ],
      faqs: [
        {
          q: "What is Khaliji nightlife?",
          a: "It's the Gulf's authentic night-out culture: Khaleeji music on a proper sound system, table service hospitality, shisha and mocktails, and a mixed dance floor — at XO Club Dubai it's fused nightly with Hip-Hop, R&B and Commercial hits.",
        },
        {
          q: "Which Dubai club is best for Khaliji music?",
          a: "XO Club Dubai (Radisson Blu Hotel, Dubai Waterfront, Business Bay) — Arabic/Khaliji is a core format every night, not a late-night afterthought. Reserve: +971503737162.",
        },
        {
          q: "What time do Khaliji nights start in Dubai?",
          a: "XO opens daily at 11 PM and runs to 4 AM — the floor peaks between 12:30 and 2 AM. Book on WhatsApp +971503737162 to skip the queue.",
        },
      ],
    },
    ar: {
      title: "دليل السهر الخليجي في دبي (2025)",
      subtitle: "كيف تبدو ليلة خليجية حقيقية — من النادي الذي يعيشها كل ليلة.",
      intro:
        "السهر الخليجي هو ليلة الخليج الخاصة: أنثم خليجي في منتصف الليل، أرضية رقص تجمع المحليين والمقيمين والزوار، وكرم لا يقدمه إلا عنوان خمس نجوم.",
    },
  },
  {
    slug: "vip-table-booking-dubai",
    tab: "VIP Table Booking",
    tabAr: "حجز طاولات VIP",
    image: "/images/vip-table.png",
    en: {
      title: "VIP Table Booking Dubai: The XO Way (2025)",
      subtitle: "Written quotes, honest minimums, zero door math — the anti-scam table experience.",
      intro:
        "Dubai's table industry runs on opacity: mystery minimums, surprise deposits, tables that open at midnight. XO Club Dubai runs the opposite play — your quote is written, your table is reserved, and the price you're told is the price you pay.",
      body: [
        "The XO inventory is three experiences, each engineered for a different night: the XO Signature Table (prime floor seating for up to 5), the Premium Booth (elevated, DJ-view, up to 8 — the most requested), and the XO Royal Loft (a private loft for 10–15 with celebration setups). Every tier includes bottle service with a sparkler moment, a dedicated hostess and queue-free entry.",
        "How booking works: (1) WhatsApp or call +971503737162 with your date, guest count and tier; (2) receive your written quote — minimum spend and table position confirmed before you arrive; (3) show up and walk past the queue. No deposits, no fake sold-outs, no numbers invented at the door. That transparency is a big reason XO Club holds a perfect 5.0★ on Google Maps.",
        "What the minimum spend covers matters as much as the number: premium bottles, champagne on ice, mocktails for your non-drinking guests, shisha service and hostess attention all night. Ask for tonight's bottle menu and written quote in one message: +971503737162.",
      ],
      stats: [
        { value: "Written", label: "quote before you arrive" },
        { value: "3 tiers", label: "Signature · Premium · Royal Loft" },
        { value: "1 line", label: "+971503737162 — no middlemen" },
        { value: "5.0★", label: "the rating transparency protects" },
      ],
      faqs: [
        {
          q: "Is there a deposit for VIP tables at XO?",
          a: "Standard reservations need no deposit — your written quote on WhatsApp +971503737162 is your confirmation. Peak nights may require a card guarantee, always stated in writing first.",
        },
        {
          q: "Can we split the minimum spend?",
          a: "Yes — the minimum is per table, not per person, and it covers bottles, mocktails and service. Get the exact written quote for your group: +971503737162.",
        },
        {
          q: "What's included in a VIP table booking at XO Club Dubai?",
          a: "Reserved seating till close, bottle service with sparkler presentation, dedicated hostess, queue-free entry and a written quote confirming everything in advance: +971503737162.",
        },
      ],
    },
    ar: {
      title: "حجز طاولات VIP في دبي: طريقة إكس أو (2025)",
      subtitle: "عروض مكتوبة، حدود صادقة، بلا حسابات عند الباب — تجربة طاولات بلا نصب.",
      intro:
        "تعتمد صناعة الطاولات في دبي على الغموض. إكس أو كلوب دبي يعكس المعادلة — عرضك مكتوب، طاولتك محجوزة، والسعر الذي يُقال لك هو الذي تدفعه.",
    },
  },
  {
    slug: "best-arabic-nightclub-dubai",
    tab: "Arabic & Khaliji Nights",
    tabAr: "الليالي العربية والخليجية",
    image: "/images/interior.png",
    en: {
      title: "Arabic & Khaliji Nights in Dubai: The XO Club Guide",
      subtitle:
        "What a Gulf night out at XO Club Dubai actually looks like — the music, the tables and the timing.",
      intro:
        "XO Club Dubai gives Arabic/Khaliji music a permanent place on the main floor, fused every night with Hip-Hop, R&B and Commercial. If you are planning an Arabic night out in Dubai, this is what you can expect from us: Mezzanine Floor, Radisson Blu Hotel, Dubai Waterfront, Business Bay — open daily from 11:00 PM to 4:00 AM.",
      body: [
        "The music: Arabic/Khaliji runs as a core format every night, not a single late set. Khaleeji anthems and Gulf remixes sit in rotation alongside Hip-Hop, R&B and Commercial on one floor, with the peak between roughly 12:30 and 2:00 AM and the final Khaliji run carrying the room to 4:00 AM.",
        "The tables: VIP guests reserve in advance — the XO Signature Table (up to 5 guests), the Premium Booth (up to 8) or the XO Royal Loft (10–15) — with a minimum spend credited against what you order. Every figure is confirmed in writing on WhatsApp before you arrive, so nothing changes at the door.",
        "The arrival: XO is on the Mezzanine Floor of the Radisson Blu Hotel, Dubai Waterfront in Business Bay, with hotel valet and parking at the entrance, a staffed hotel door, a 21+ ID check and a smart-elegant dress code. Doors open at 11:00 PM — arriving before midnight puts you there for the full night.",
      ],
      stats: [
        { value: "5.0★", label: "verified Google Maps rating" },
        { value: "Nightly", label: "Arabic/Khaliji core format" },
        { value: "Radisson Blu", label: "five-star hotel address" },
        { value: "Daily", label: "open 7 days · 11 PM – 4 AM" },
      ],
      faqs: [
        {
          q: "Where can I find an Arabic night out in Dubai?",
          a: "XO Club Dubai runs Arabic/Khaliji as a core format every night on the Mezzanine Floor of the Radisson Blu Hotel, Dubai Waterfront in Business Bay, alongside Hip-Hop, R&B and Commercial, from 11 PM to 4 AM. Reservations: +971503737162.",
        },
        {
          q: "Which nights carry Arabic music at XO Club Dubai?",
          a: "Every night. Arabic/Khaliji is programmed as part of the standing format rather than a single weekly slot, and guest sets or themed evenings are announced on WhatsApp +971503737162 before the date.",
        },
        {
          q: "How do I get to XO Club Dubai for an Arabic night?",
          a: "Set your maps to Radisson Blu Hotel, Dubai Waterfront, Business Bay — XO is on the Mezzanine Floor, with hotel valet and parking at the entrance. Directions and reservations: +971503737162.",
        },
      ],
    },
    ar: {
      title: "الليالي العربية والخليجية في دبي: دليل إكس أو كلوب",
      subtitle: "كيف تبدو ليلة خليجية في إكس أو كلوب دبي — الموسيقى والطاولات والتوقيت.",
      intro:
        "يمنح إكس أو كلوب دبي الموسيقى العربية والخليجية مكاناً دائماً على الأرضية الرئيسية، ممزوجة كل ليلة بالهيب هوب والآر أند بي والكوميرشال. إن كنت تخطط لليلة عربية في دبي، هذا ما يمكنك توقعه منا: الطابق الأوسط، فندق راديسون بلو دبي ووترفرنت، الخليج التجاري — مفتوح يومياً من 11 مساءً حتى 4 صباحاً.",
    },
  },
  {
    slug: "private-events-dubai",
    tab: "Private Events",
    tabAr: "المناسبات الخاصة",
    image: "/images/private-events.png",
    en: {
      title: "Private Events Dubai: Celebrations at XO Club",
      subtitle: "Birthdays, corporate nights, milestone takeovers — staged inside a five-star address.",
      intro:
        "XO's events team turns the club into your private stage: Royal Loft takeovers for the inner circle, multi-booth configurations for company nights, and full-room birthdays with sparklers doing the talking.",
      body: [
        "The formats that work beautifully at XO: milestone birthdays (the sparkler bottle parade was made for them), corporate wind-downs with booth clusters and a written run-of-show, engagement and henna celebrations in the Royal Loft, and after-parties for weddings across Business Bay's five-star hotels — starting right next door at the Radisson Blu Dubai Waterfront.",
        "Every private event gets the XO treatment: in-house decor coordination, cake and sparkler moments, a dedicated host, and a written package quote — minimum spend, inclusions and timeline confirmed on WhatsApp before you commit. One message to +971503737162 with your date, guest count and occasion gets you that quote, typically the same day.",
        "Corporate clients get the boring-but-vital parts handled: single invoice, venue licensing compliance, AV for speeches or presentations before the floor opens, and a written schedule. The result is why so many XO private nights become annual company traditions — and why the club's 5.0★ rating includes event guests, not just walk-ins.",
      ],
      stats: [
        { value: "Same day", label: "written package quotes" },
        { value: "Royal Loft", label: "private celebration tier, 10–15 guests" },
        { value: "5-star", label: "Radisson Blu Waterfront setting" },
        { value: "+971503737162", label: "one line for events & tables" },
      ],
      faqs: [
        {
          q: "How do I book a private event at XO Club Dubai?",
          a: "Message your date, guest count and occasion to +971503737162 — the XO events team replies with a written package quote, typically the same day.",
        },
        {
          q: "Do you handle decor, cakes and sparklers?",
          a: "Yes — in-house coordination for decor, cakes, sparkler moments and celebration setups, all itemized in your written quote.",
        },
        {
          q: "Can we host a corporate night at XO?",
          a: "Yes — booth clusters, single invoice, AV support and a written run-of-show. Start with +971503737162.",
        },
      ],
    },
    ar: {
      title: "المناسبات الخاصة في دبي: احتفالات إكس أو",
      subtitle: "أعياد ميلاد، ليالي شركات، مناسبات كبرى — داخل عنوان خمس نجوم.",
      intro:
        "يحوّل فريق مناسبات إكس أو النادي إلى مسرحك الخاص: احتكار اللوفت الملكي، تشكيلات الأجنحة لليالي الشركات، وأعياد ميلاد كاملة تتحدث فيها المشاعل.",
    },
  },
  {
    slug: "dubai-nightlife-guide",
    tab: "Dubai Nightlife Guide",
    tabAr: "دليل سهر دبي",
    image: "/images/entrance.png",
    en: {
      title: "Dubai Nightlife Guide 2025: Business Bay & Beyond",
      subtitle: "Where the city actually goes out — costs, timing and the unwritten rules.",
      intro:
        "Dubai nightlife has honest poles: Downtown's hotel superclubs, the Marina's terraces, beach clubs — and Business Bay, the canal-side district where Dubai's most elegant new rooms opened. XO Club Dubai anchors the Business Bay scene.",
      body: [
        "Business Bay is Dubai nightlife's rising pole: five-star hotel venues along the Waterfront canal, minutes from Downtown and DIFC, with valet doors and taxi drop-offs that actually work. XO Club Dubai — Mezzanine Floor, Radisson Blu Hotel, Dubai Waterfront — is the district's high-energy anchor: a mixed crowd, a four-format music policy and the area's only verified 5.0★ Google rating.",
        "Real costs, published plainly: entry and table minimums vary across the city, which is exactly why XO confirms every quote in writing on WhatsApp before you arrive — no door math, ever. A taxi or Careem from Downtown runs minutes and a few dirhams; hotel valet at the Radisson Blu makes arrival effortless. The unwritten rules everywhere in Dubai: bring physical ID (21+), book tables ahead on weekends, and never trust a door price that wasn't written to you first.",
        "Timing is cultural: Dubai eats late and dances later. The city's floors peak 12:30–2:00 AM and Gulf-format rooms run to 3–4 AM — XO runs to 4 AM every single night. Seasonal rhythm matters too: the scene surges October to April, and weekends fill fast. The play is simple — message +971503737162 before 10 PM and walk past the queue.",
      ],
      stats: [
        { value: "Business Bay", label: "Dubai's five-star canal district" },
        { value: "Minutes", label: "from Downtown & DIFC" },
        { value: "4 AM", label: "nightly closing at XO, 7 days" },
        { value: "Written", label: "quotes — the XO anti-scam rule" },
      ],
      faqs: [
        {
          q: "What time do clubs in Dubai get busy?",
          a: "Between 12:30 and 2:00 AM. XO Club Dubai runs the floor until 4 AM every night — reserve on WhatsApp +971503737162 to skip the peak-time queue.",
        },
        {
          q: "Can tourists enter Dubai nightclubs?",
          a: "Yes — 21+ with a passport. No membership culture at XO Club Dubai; reserve on +971503737162 and walk in with your confirmation.",
        },
        {
          q: "Where is the best nightlife in Business Bay?",
          a: "XO Club Dubai — Mezzanine Floor, Radisson Blu Hotel, Dubai Waterfront. Five-star setting, mixed crowd, open daily 11 PM–4 AM: +971503737162.",
        },
      ],
    },
    ar: {
      title: "دليل السهر في دبي 2025: الخليج التجاري وما بعده",
      subtitle: "إلى أين يخرج أهل دبي فعلاً — التكاليف والتوقيت والقواعد غير المكتوبة.",
      intro:
        "للسهر في دبي أقطاب صادقة: النوادي الكبرى في داون تاون، تراسات المارينا، نوادي الشاطئ — والخليج التجاري، حي القناة الذي فتحت فيه أنرق قاعات دبي. إكس أو كلوب دبي مرساة هذا المشهد.",
    },
  },
  {
    slug: "bottle-service-dubai",
    tab: "Bottle Service",
    tabAr: "خدمة القوارير",
    image: "/images/bottle-service.png",
    en: {
      title: "Bottle Service Dubai: The XO Standard",
      subtitle: "Sparkler parades, champagne on ice, and a table that never waits.",
      intro:
        "Bottle service is how Dubai celebrates — and XO Club Dubai does it at five-star standard: golden sparkler parades to your table, champagne on ice before you ask, and a hostess team that reads the night.",
      body: [
        "What separates XO's bottle service from the average Dubai club: presentation and pace. Bottles arrive with lit sparklers and the room's attention; ice, mixers and glassware are refreshed before you notice they need it; and your hostess times the parade for the night's peak — 12:30 to 2 AM, when the floor is full and your moment lands hardest.",
        "The menu runs from premium champagnes to top-shelf spirits, with mocktail towers for Gulf guests who don't drink — everyone at the table participates in the night. Every bottle, every minimum spend, every inclusion lands in your written quote on WhatsApp before you arrive: +971503737162. That's the XO anti-scam rule, and it's why guests rate the club 5.0★ on Google Maps.",
        "Which experience fits your group? Up to 5 guests: the XO Signature Table. Up to 8: the Premium Booth, elevated with the DJ in view — the most requested tier. 10 to 15: the XO Royal Loft, with celebration setups and a private feel above the main floor. One message to +971503737162 gets tonight's bottle menu and your written quote.",
      ],
      stats: [
        { value: "Sparklers", label: "on every XO bottle parade" },
        { value: "3 tiers", label: "Signature · Premium · Royal Loft" },
        { value: "12:30–2 AM", label: "peak floor — when parades land" },
        { value: "Written", label: "bottle menu & quote on WhatsApp" },
      ],
      faqs: [
        {
          q: "How much is bottle service in Dubai?",
          a: "It varies wildly across clubs — which is why XO Club Dubai confirms your exact minimum spend in writing before you arrive. Message +971503737162 for tonight's bottle menu and written quote.",
        },
        {
          q: "What's the best table for bottle service at XO?",
          a: "The Premium Booth (up to 8 guests, DJ view) is the most requested; the XO Royal Loft (10–15) is the celebration tier. Reserve: +971503737162.",
        },
        {
          q: "Do you serve non-alcoholic options for VIP tables?",
          a: "Yes — mocktail towers and premium non-alcoholic service are part of every XO table, included in your written minimum spend: +971503737162.",
        },
      ],
    },
    ar: {
      title: "خدمة القوارير في دبي: معيار إكس أو",
      subtitle: "عروض مشاعل، شمبانيا على الثلج، وطاولة لا تنتظر أبداً.",
      intro:
        "خدمة القوارير هي طريقة دبي في الاحتفال — وإكس أو كلوب دبي يقدمها بمعيار خمس نجوم: عروض مشاعل ذهبية، شمبانيا على الثلج، وفريق مضيفات يفهم الليلة.",
    },
  },
  {
    slug: "business-bay-nightlife",
    tab: "Business Bay Nightlife",
    tabAr: "سهر الخليج التجاري",
    image: "/images/dj.png",
    en: {
      title: "Business Bay Nightlife: The Complete 2025 Guide",
      subtitle: "Dubai's canal district after dark — where to go, what it costs, how to do it right.",
      intro:
        "Business Bay grew into Dubai's most elegant nightlife district almost quietly: five-star hotels along the Waterfront canal, walking-distance valets, and rooms designed for the mixed crowd — expats, visitors and locals in one night.",
      body: [
        "The district's anchor is XO Club Dubai: Mezzanine Floor, Radisson Blu Hotel, Dubai Waterfront. It's the high-energy room that made Business Bay a destination — Hip-Hop, R&B, Commercial and Arabic/Khaliji on one floor, open daily 11 PM to 4 AM, and the only venue in the scene holding a verified 5.0★ Google Maps rating.",
        "Why Business Bay wins for a night out: logistics. The Radisson Blu's valet and hotel parking end the valet hunt; taxis and Careems reach it in minutes from Downtown, DIFC and Jumeirah; and hotel-grade security makes it the district's safest late-night address. After the club, the canal promenade and Business Bay's hotel bars keep the night optional instead of obligatory.",
        "The XO play for any Business Bay night: reserve before you arrive. Weekends and premium booths fill first, and peak energy hits 12:30–2:00 AM. One message to +971503737162 with your date and guest count secures the table and the written quote — the rest of the night is just showing up.",
      ],
      stats: [
        { value: "5.0★", label: "XO — the district's only perfect rating" },
        { value: "Radisson Blu", label: "the district's five-star venue" },
        { value: "Minutes", label: "from Downtown, DIFC & Jumeirah" },
        { value: "Daily 11–4", label: "open 7 nights, every week" },
      ],
      faqs: [
        {
          q: "Where is the best nightclub in Business Bay?",
          a: "XO Club Dubai — Mezzanine Floor, Radisson Blu Hotel, Dubai Waterfront. Mixed-crowd format, open daily 11 PM–4 AM, rated 5.0★: +971503737162.",
        },
        {
          q: "Is Business Bay good for nightlife in Dubai?",
          a: "It's Dubai's rising nightlife district: canal-side five-star hotels, easy logistics and XO Club Dubai as its high-energy anchor. Reserve: +971503737162.",
        },
        {
          q: "How do I get to XO Club Dubai?",
          a: "Set your maps to Radisson Blu Hotel, Dubai Waterfront, Business Bay — Mezzanine Floor. Valet and hotel parking on site; directions link and live help on WhatsApp +971503737162.",
        },
      ],
    },
    ar: {
      title: "سهر الخليج التجاري: الدليل الكامل 2025",
      subtitle: "حي القناة بعد الغروب — أين تذهب، وكم تكلف، وكيف تعيشها صحيحة.",
      intro:
        "نما الخليج التجاري ليصبح أنرق أحياء السهر في دبي بهدوء: فنادق خمس نجوم على القناة، ومداخل صف سيارات على مسافة قدم، وقاعات صُممت للجمهور المختلط — مقيمين وزوار ومحليين في ليلة واحدة.",
    },
  },
  {
    slug: "dubai-nightclub-entertainment",
    tab: "Nightclub Entertainment",
    tabAr: "فنون السهر",
    image: "/images/dj.png",
    en: {
      title: "Dubai Nightclub Entertainment: What to Expect From 11 PM to 4 AM",
      subtitle:
        "How the entertainment side of a Dubai club night actually works — the formats, the arc of the evening and how line-ups are announced.",
      intro:
        "Entertainment in a Dubai club is more than one DJ on a podium: it is the arc of the room across five hours. At XO Club Dubai — Mezzanine Floor, Radisson Blu Hotel, Dubai Waterfront, Business Bay — the programme runs nightly from 11:00 PM to 4:00 AM across Hip-Hop, R&B, Commercial and Arabic/Khaliji, with celebrated guest appearances announced in advance rather than promised on a flyer.",
      body: [
        "The formats: four are programmed as standing parts of the night — Hip-Hop, R&B, Commercial and Arabic/Khaliji. Because they are scheduled rather than rotated weekly, you do not have to guess which night suits you: the room moves through the same arc whatever evening you visit.",
        "The arc of the evening: doors open at 11:00 PM and early tables fill first. The floor tightens by midnight, energy peaks roughly between 12:30 and 2:00 AM, and the final Khaliji stretch carries the room to the 4:00 AM close. Entertainers, dance moments and celebration spotlights are timed around that peak rather than scattered across the night.",
        "Guest appearances: rather than publishing a fixed weekly schedule that changes, XO announces guest DJs, live sets and themed evenings on WhatsApp first — so what you are told is what is happening. Ask what is on before you book on +971503737162, and you will get the real programme for that date.",
        "What you will not find: invented headliner names or line-ups that never play. XO publishes a name only when it is confirmed. If a night is still being finalised, the team will tell you that too — and hold your table either way.",
      ],
      stats: [
        { value: "5 hours", label: "of programme, 11 PM – 4 AM, nightly" },
        { value: "4 formats", label: "Hip-Hop · R&B · Commercial · Khaliji" },
        { value: "WhatsApp first", label: "line-ups announced before the date" },
        { value: "Daily", label: "open 7 days a week" },
      ],
      faqs: [
        {
          q: "What kind of entertainment does a Dubai nightclub programme?",
          a: "Typically a resident DJ format with guest appearances, dance moments and celebration spotlights. At XO Club Dubai the programme runs 11 PM–4 AM nightly across Hip-Hop, R&B, Commercial and Arabic/Khaliji, with guest DJs, live sets and themed evenings announced on WhatsApp +971503737162 before the date.",
        },
        {
          q: "How do I find out who is playing at XO Club Dubai?",
          a: "Message the official line, +971503737162. XO does not publish a fixed weekly schedule; confirmed guest DJs, live sets and themed nights are announced on WhatsApp first, and the team will tell you exactly what is programmed for your date.",
        },
        {
          q: "What time is the entertainment peak at XO Club Dubai?",
          a: "The floor reaches its peak between roughly 12:30 and 2:00 AM, and the final Khaliji run carries the room to the 4:00 AM close. Arriving before midnight means you experience the full arc of the programme.",
        },
      ],
    },
    ar: {
      title: "فنون السهر في نوادي دبي: ما تتوقعه من 11 مساءً حتى 4 صباحاً",
      subtitle: "كيف يعمل الجانب الفني في ليلة نادٍ بدبي — التشكيلات، ومسار الليلة، وكيف تُعلن الأسماء.",
      intro:
        "الفنون في نادي دبي أكثر من منسق أغانٍ واحد: إنها مسار القاعة على مدى خمس ساعات. في إكس أو كلوب دبي — الطابق الأوسط، فندق راديسون بلو دبي ووترفرنت، الخليج التجاري — يمتد البرنامج يومياً من 11 مساءً حتى 4 صباحاً عبر الهيب هوب والآر أند بي والكوميرشال والعربي/الخليجي، مع إعلان الضيوف مسبقاً بدلاً من الوعود على المنشورات.",
    },
  },
  {
    slug: "nightclub-reservations-dubai",
    tab: "Nightclub Reservations",
    tabAr: "حجوزات النوادي",
    image: "/images/vip-table.png",
    en: {
      title: "Nightclub Reservations in Dubai: How the Process Actually Works",
      subtitle:
        "Booking windows, written quotes, changes, arrival and ID — the logistics of reserving a table, without the guesswork.",
      intro:
        "A Dubai nightclub reservation is a short, documented process: you send a date, a guest count and a preference; you receive a written quote and a confirmed table position; you arrive and walk to your table. At XO Club Dubai that whole conversation happens on one line — +971503737162 — and this page sets out how each part of it works, including what to do when plans change.",
      body: [
        "Before you book: message the official line with four things — the date, the number of guests, the experience you prefer (XO Signature Table up to 5 guests, Premium Booth up to 8, or XO Royal Loft for 10–15) and any celebration you want set up. The clearer the first message, the faster the quote comes back. Weekdays are usually straightforward; Thursday to Saturday and groups of eight or more benefit from booking a day or two ahead.",
        "What you receive: a written minimum spend for your date and a confirmed table position — in writing, on WhatsApp, before you commit. Nothing is agreed verbally, there is no deposit paid to a third party, and the figure you are sent is the figure you pay. Keep the thread: it is your reference at the door.",
        "When plans change: message the same line as early as you can. Guest numbers, arrival times and table preferences can usually be adjusted while the room allows, and the reservation is still yours. Late arrivals are handled at the door — your table is held even if you join after midnight, though capacity rules still apply to the room as a whole.",
        "On arrival: XO is on the Mezzanine Floor of the Radisson Blu Hotel, Dubai Waterfront in Business Bay, with hotel valet and parking at the entrance. Entry is 21+ with valid ID (Emirates ID or passport) and a smart-elegant dress code. Give the door your name or show your booking thread and you are taken through to your table.",
      ],
      stats: [
        { value: "1 line", label: "for quote, changes and arrival: +971 50 373 7162" },
        { value: "Written", label: "minimum spend before you commit" },
        { value: "24h", label: "recommended lead time on Thu–Sat" },
        { value: "Daily", label: "reservations answered until 4 AM" },
      ],
      faqs: [
        {
          q: "How does reserving a nightclub table in Dubai work?",
          a: "You message the venue with your date, guest count and preferred experience; you receive a written minimum spend and a confirmed table position; then you arrive and walk to your table. At XO Club Dubai the whole process runs on one line: +971503737162.",
        },
        {
          q: "Can I change or cancel a nightclub reservation in Dubai?",
          a: "Message the venue as early as you can on the same booking line. Guest numbers, arrival times and table preferences can usually be adjusted while availability allows, and your reservation stays valid. XO Club Dubai: +971503737162.",
        },
        {
          q: "What should I send in the first booking message?",
          a: "Date, number of guests, the experience you want (XO Signature Table, Premium Booth or XO Royal Loft) and any celebration details. That is enough for XO Club Dubai to send a written quote — +971503737162.",
        },
        {
          q: "Do I need a deposit to reserve a table in Dubai?",
          a: "At XO Club Dubai you receive a written minimum spend on WhatsApp and no deposit is paid to any third party or promoter. The quoted minimum is credited against what you order on the night: +971503737162.",
        },
      ],
    },
    ar: {
      title: "حجوزات النوادي في دبي: كيف تعمل العملية فعلاً",
      subtitle: "أوقات الحجز، والعروض المكتوبة، والتغييرات، والوصول والهوية — لوجستيات حجز الطاولة بلا تخمين.",
      intro:
        "حجز نادٍ في دبي عملية قصيرة وموثقة: ترسل التاريخ وعدد الضيوف والتفضيل، فتستلم عرضاً مكتوباً وموقع طاولة مؤكداً، ثم تصل وتتجه إلى طاولتك. في إكس أو كلوب دبي تتم هذه المحادثة على خط واحد — +971503737162.",
    },
  },
  {
    slug: "xo-club-experience",
    tab: "The XO Experience",
    tabAr: "تجربة إكس أو",
    image: "/images/entrance.png",
    en: {
      title: "The XO Club Experience: A Night in Detail",
      subtitle:
        "From the hotel door at 11 PM to the last Khaliji record at 4 AM — a walkthrough of how a night at XO unfolds.",
      intro:
        "Every venue has a shape to its night, and guests plan around it. Here is the shape of XO Club Dubai: Mezzanine Floor, Radisson Blu Hotel, Dubai Waterfront, Business Bay — doors at 11:00 PM, peak between 12:30 and 2:00 AM, close at 4:00 AM, seven nights a week.",
      body: [
        "Arrival, 11:00 PM: you come in through the Radisson Blu lobby rather than a back street — valet or hotel parking, a staffed door, a 21+ ID check and a smart-elegant dress code. Inside, the room is still breathable: early tables are settling, the first set is building, and it is the easiest hour to actually talk to your group.",
        "Midnight to the peak, 12:30 – 2:00 AM: the floor tightens and the mixed crowd fills in — Gulf guests, expats and visitors on one floor, which is the format XO was built around. Bottle service moves to the tables with the sparkler parade, celebrations get their moment, and the four-format policy keeps the room moving from Hip-Hop and R&B into Commercial and then Arabic/Khaliji without the floor emptying.",
        "The last stretch, 2:00 – 4:00 AM: the room settles into its Khaliji run and the energy becomes more local and more focused. Table service continues, and the floor thins gradually rather than emptying on a cut-off. When the lights come up at 4:00 AM you are a short ride from your hotel — or a lift ride from your room if you are staying at the Radisson Blu.",
        "What holds it together: one booking line for everything (+971503737162), a written minimum spend before you arrive, a table that is genuinely held for you, and a team you can actually find at 1 AM. That is the experience — not a themed gimmick, but a night that runs the way it was described to you.",
      ],
      stats: [
        { value: "11 PM – 4 AM", label: "the full arc, every night" },
        { value: "12:30 – 2 AM", label: "the peak of the floor" },
        { value: "Radisson Blu", label: "hotel arrival with valet and parking" },
        { value: "One line", label: "bookings, changes and questions: +971 50 373 7162" },
      ],
      faqs: [
        {
          q: "What is the XO Club Dubai experience like?",
          a: "A five-hour night inside the Radisson Blu Hotel, Dubai Waterfront, Mezzanine Floor: doors at 11 PM, a mixed crowd and bottle service through the peak between 12:30 and 2 AM, then the Khaliji run to the 4 AM close. Reservations: +971503737162.",
        },
        {
          q: "How long does a night at XO Club Dubai last?",
          a: "Five hours — the venue opens daily at 11:00 PM and closes at 4:00 AM, seven days a week. Most guests arrive between 11 PM and midnight to be there for the peak.",
        },
        {
          q: "Is XO Club Dubai worth visiting on a weekday?",
          a: "The format is the same every night — four music formats, bottle service, mixed crowd — and weekday tables are generally easier to secure, with the same 11:00 PM to 4:00 AM hours. Reserve on WhatsApp +971503737162.",
        },
      ],
    },
    ar: {
      title: "تجربة إكس أو كلوب: ليلة بالتفصيل",
      subtitle: "من باب الفندق في 11 مساءً إلى آخر أغنية خليجية في 4 صباحاً — كيف تمضي ليلة في إكس أو.",
      intro:
        "لكل مكان شكل خاص لليلته، والضيوف يخططون على أساسه. هذا هو شكل إكس أو كلوب دبي: الطابق الأوسط، فندق راديسون بلو دبي ووترفرنت، الخليج التجاري — الأبواب في 11 مساءً، الذروة بين 12:30 و2 صباحاً، والإغلاق في 4 صباحاً، سبع ليالٍ في الأسبوع.",
    },
  },
];

/** Strict lookup for the static silo routes (throws if the slug is unknown). */
export function requireSilo(slug: string): Silo {
  const s = SILOS.find((x) => x.slug === slug);
  if (!s) throw new Error(`Unknown silo slug: ${slug}`);
  return s;
}
