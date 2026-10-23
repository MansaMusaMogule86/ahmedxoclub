/**
 * XO CLUB DUBAI — single source of truth for brand constants.
 * ABSOLUTE TRUTH: only verified facts below. Never invent DJs, events,
 * prices, review counts, awards, socials or emails.
 * Phone +971503737162 is the ONLY number used anywhere.
 */

export type TableTypeKey = "SIGNATURE" | "PREMIUM" | "ROYAL";

export const BRAND = {
  name: "XO Club Dubai",
  shortName: "XO Club",
  nameAr: "إكس أو كلوب دبي",
  legalName: "XO Club Dubai",
  tagline: "The Ultimate Khaliji & Arabic Nightlife Experience",
  taglineAr: "وجهة السهر الخليجي والعربي الأكثر فخامة في دبي",
  kicker: "Radisson Blu Dubai Waterfront · Business Bay",
  kickerAr: "راديسون بلو دبي ووترفرنت · الخليج التجاري",
  phoneDisplay: "+971 50 373 7162",
  phoneRaw: "+971503737162",
  phoneDial: "+971503737162",
  whatsappNumber: "971503737162",
  domain: "https://ahmedxoclub.com",
  address: {
    hotel: "Radisson Blu Hotel, Dubai Waterfront",
    floor: "Mezzanine Floor",
    area: "Business Bay",
    city: "Dubai",
    country: "AE",
    countryName: "United Arab Emirates",
    street: "Radisson Blu Hotel, Dubai Waterfront, Mezzanine Floor",
    full: "Radisson Blu Hotel, Dubai Waterfront, Mezzanine Floor, Business Bay, Dubai, UAE",
  },
  geo: { lat: 25.1806, lng: 55.2669 },
  rating: { value: 5.0, badge: "Verified 5.0 Rating" },
  hours: {
    spec: "Open 7 days a week · Daily 11:00 PM – 4:00 AM",
    specAr: "مفتوح 7 أيام في الأسبوع · يومياً من 11 مساءً حتى 4 صباحاً",
    short: "Daily 11 PM – 4 AM",
    shortAr: "يومياً 11 مساءً – 4 صباحاً",
    opens: "23:00",
    closes: "04:00",
  },
  agePolicy: "21+ · Smart-elegant dress code · Valid ID required",
  agePolicyAr: "فوق 21 · أزياء أنيقة · هوية سارية مطلوبة",
  music: ["Hip-Hop", "R&B", "Commercial", "Arabic / Khaliji"],
  mapsEmbed:
    "https://www.google.com/maps?q=Radisson%20Blu%20Hotel%20Dubai%20Waterfront%2C%20Business%20Bay%2C%20Dubai&z=16&output=embed",
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=Radisson+Blu+Hotel+Dubai+Waterfront,+Business+Bay,+Dubai",
} as const;

export function waLink(message: string): string {
  return `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const WA_MESSAGES = {
  general:
    "Hi XO Club Dubai! I'd like to reserve a VIP table. My date, guest count and preferred table are below:",
  vip: "Hi XO Club Dubai! I'd like to reserve a VIP table. Please share tonight's availability and a written quote (minimum spend included).",
  signature: "Hi XO Club Dubai! I'm interested in the XO Signature Table. Please send availability and your written quote.",
  premium: "Hi XO Club Dubai! I'm interested in the Premium Booth. Please send availability and your written quote.",
  royal: "Hi XO Club Dubai! I'm interested in the XO Royal Loft. Please send availability and your written quote.",
  tonight: "Hi XO Club Dubai! What's on tonight? I'd like to reserve a table for this evening — please share the program and a written quote.",
  weekend: "Hi XO Club Dubai! I'd like to secure a VIP table for this weekend. Please share availability and a written quote.",
  event: (title: string) =>
    `Hi XO Club Dubai! I'd like to book for "${title}". Please share table options and a written quote.`,
  exit: "Hi XO Club Dubai! I'd like to secure my VIP table for this weekend before closing time — please send the written quote.",
  privateEvent:
    "Hi XO Club Dubai! I'd like a written quote for a private event / celebration at the club. Date, guest count and occasion below:",
} as const;

export interface TableTypeDef {
  key: TableTypeKey;
  name: string;
  nameAr: string;
  seats: string;
  seatsAr: string;
  priceChip: string;
  priceChipAr: string;
  perks: string[];
  perksAr: string[];
  popular?: boolean;
}

/**
 * VIP experiences — pricing intentionally NOT invented.
 * `priceChip` is an elegant management placeholder; real minimum spends
 * are confirmed in writing on WhatsApp: +971503737162.
 */
export const TABLE_TYPES: TableTypeDef[] = [
  {
    key: "SIGNATURE",
    name: "XO Signature Table",
    nameAr: "طاولة إكس أو المميزة",
    seats: "Up to 5 guests",
    seatsAr: "حتى 5 أشخاص",
    priceChip: "AED [Insert Minimum Spend]",
    priceChipAr: "درهم [الحد الأدنى عند الحجز]",
    perks: [
      "Reserved prime VIP table all night",
      "Premium bottle service with sparkler moment",
      "Dedicated VIP hostess & queue-free entry",
      "Written quote confirmed before you arrive",
    ],
    perksAr: [
      "طاولة VIP محجوزة طوال الليلة",
      "خدمة قوارير فاخرة مع لحظة المشعل",
      "مضيفة VIP مخصصة ودخول بدون طابور",
      "عرض مكتوب ومؤكد قبل وصولك",
    ],
  },
  {
    key: "PREMIUM",
    name: "Premium Booth",
    nameAr: "الجناح الفاخر",
    seats: "Up to 8 guests",
    seatsAr: "حتى 8 أشخاص",
    priceChip: "AED [Insert Minimum Spend]",
    priceChipAr: "درهم [الحد الأدنى عند الحجز]",
    popular: true,
    perks: [
      "Elevated booth with DJ & dance-floor view",
      "Champagne & premium spirit line included",
      "Bottle-sparkler parade to your booth",
      "Best-position tables — first to sell out",
    ],
    perksAr: [
      "جناح مرتفع بإطلالة على الدي جي وحلبة الرقص",
      "شمبانيا وتشكيلة مشروبات فاخرة",
      "عرض القوارير المشتعلة حتى جناحك",
      "أفضل المواقع — تُحجز أولاً",
    ],
  },
  {
    key: "ROYAL",
    name: "XO Royal Loft",
    nameAr: "اللوفت الملكي",
    seats: "10–15 guests",
    seatsAr: "10–15 شخصاً",
    priceChip: "AED [Insert Minimum Spend]",
    priceChipAr: "درهم [الحد الأدنى عند الحجز]",
    perks: [
      "Private loft experience above the main floor",
      "Celebration setup: cakes, sparklers & decor",
      "Personal VIP host + priority service all night",
      "The ultimate XO flex — for milestone nights",
    ],
    perksAr: [
      "تجربة لوفت خاصة فوق الأرضية الرئيسية",
      "تجهيز احتفالات: كعك، مشاعل وديكور",
      "مضيف VIP شخصي وخدمة أولوية طوال الليلة",
      "قمة الفخامة — للليالي الاستثنائية",
    ],
  },
];

export function tableTypeLabel(key: TableTypeKey, lang: "en" | "ar"): string {
  const t = TABLE_TYPES.find((x) => x.key === key);
  if (!t) return key;
  return lang === "ar" ? t.nameAr : t.name;
}
