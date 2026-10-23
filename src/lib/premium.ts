/**
 * Copy for the premium branding layer (video hero, entrance, entertainment,
 * VIP & experiences). Kept separate from lib/content.ts so the new sections
 * stay self-contained; both are EN/AR and brand-fact-only.
 *
 * RULE: performer names, biographies, Instagram handles and schedules are
 * NEVER invented — they render as explicit "awaiting approval" states until
 * management supplies them.
 */

export interface ExperienceItem {
  key: string;
  name: string;
  blurb: string;
  href: string;
  /**
   * Approved photography. `null` renders the dimension-preserving XO
   * placeholder instead — set to null to blank any slot instantly.
   */
  image: string | null;
}

export interface PerformerSlot {
  key: string;
  /** Expected approved photograph path; no file is generated or substituted. */
  image: string;
  kind: "dj" | "dancer";
}

export interface PremiumCopy {
  hero: {
    eyebrow: string;
    title: string;
    tagline: string;
    reserve: string;
    discover: string;
  };
  entrance: {
    kicker: string;
    title: string;
    body: string;
    cta: string;
    caption: string;
  };
  entertainment: {
    kicker: string;
    title: string;
    subtitle: string;
    residents: string;
    dancers: string;
    slot: string;
    fields: {
      name: string;
      bio: string;
      instagram: string;
      specialty: string;
      days: string;
      time: string;
    };
    tba: string;
    pendingPhoto: string;
    note: string;
  };
  experiences: {
    kicker: string;
    title: string;
    subtitle: string;
    photoPending: string;
    items: ExperienceItem[];
  };
  common: {
    reserveTable: string;
    reservedNote: string;
  };
}

/** Six performer slots — paths reserved for approved photography only. */
export const PERFORMER_SLOTS: PerformerSlot[] = [
  { key: "dj-01", image: "/images/entertainment/djs/dj-01.webp", kind: "dj" },
  { key: "dj-02", image: "/images/entertainment/djs/dj-02.webp", kind: "dj" },
  { key: "dj-03", image: "/images/entertainment/djs/dj-03.webp", kind: "dj" },
  { key: "dancer-01", image: "/images/entertainment/dancers/dancer-01.webp", kind: "dancer" },
  { key: "dancer-02", image: "/images/entertainment/dancers/dancer-02.webp", kind: "dancer" },
  { key: "dancer-03", image: "/images/entertainment/dancers/dancer-03.webp", kind: "dancer" },
];

export const PREMIUM: { en: PremiumCopy; ar: PremiumCopy } = {
  en: {
    hero: {
      eyebrow: "Khaliji & Arabic Nightclub · Dubai",
      title: "AHMED XO CLUB",
      tagline: "The night belongs to XO.",
      reserve: "Reserve Your Table",
      discover: "Discover XO",
    },
    entrance: {
      kicker: "The Entrance",
      title: "Step into XO.",
      body:
        "The Mezzanine Floor of the Radisson Blu Hotel, Dubai Waterfront — gold, black and the sound of the Gulf waiting behind the door. This is the room where Business Bay's Khaliji nights begin, every night from 11 PM to 4 AM.",
      cta: "Reserve Your Table",
      caption: "Radisson Blu Hotel, Dubai Waterfront · Mezzanine Floor · Business Bay",
    },
    entertainment: {
      kicker: "Entertainment",
      title: "The XO stage",
      subtitle:
        "Resident DJs and the XO dance troupe hold the floor from 11 PM to 4 AM. Every profile below is published only with management-approved details — no invented line-ups, ever.",
      residents: "Resident DJs",
      dancers: "XO Dancers",
      slot: "Performer slot",
      fields: {
        name: "Name",
        bio: "Biography",
        instagram: "Instagram",
        specialty: "Specialty",
        days: "Scheduled days",
        time: "Performance time",
      },
      tba: "To Be Announced",
      pendingPhoto: "Approved photograph pending",
      note:
        "XO Club Dubai does not invent performers or weekly schedules. Line-ups are confirmed on WhatsApp +971 50 373 7162 — ask what is on tonight.",
    },
    experiences: {
      kicker: "VIP & Experiences",
      title: "Five ways to spend the night",
      subtitle:
        "Reserve a table, order the bottle service, take in the room, book the celebration or follow the music — each experience is confirmed in writing before you arrive.",
      photoPending: "Approved photography pending",
      items: [
        {
          key: "vip-tables",
          name: "VIP Tables",
          blurb: "XO Signature Table, Premium Booth or XO Royal Loft — reserved all night with a written minimum spend.",
          href: "/vip-table-booking-dubai",
          image: "/images/vip-table.png",
        },
        {
          key: "bottle-service",
          name: "Bottle Service",
          blurb: "Champagne, premium spirits and non-alcoholic towers served to your table with the sparkler parade.",
          href: "/bottle-service-dubai",
          image: "/images/bottle-service.png",
        },
        {
          key: "atmosphere",
          name: "Club Atmosphere",
          blurb: "A five-star hotel room at full energy — gold, velvet and the Khaliji peak between 12:30 and 2 AM.",
          href: "/business-bay-nightlife",
          image: "/images/interior.png",
        },
        {
          key: "private-events",
          name: "Private Events",
          blurb: "Birthdays, corporate nights and celebrations with decor, cakes and a dedicated VIP host.",
          href: "/private-events-dubai",
          image: "/images/private-events.png",
        },
        {
          key: "music",
          name: "Music & Entertainment",
          blurb: "Hip-Hop, R&B, Commercial and Arabic/Khaliji on one floor, every night until 4 AM.",
          href: "/dubai-nightlife-guide",
          image: "/images/dj.png",
        },
      ],
    },
    common: {
      reserveTable: "Reserve Your Table",
      reservedNote: "Written quote on WhatsApp before you arrive",
    },
  },
  ar: {
    hero: {
      eyebrow: "نادي خليجي وعربي · دبي",
      title: "أحمد إكس أو كلوب",
      tagline: "الليلة لإكس أو.",
      reserve: "احجز طاولتك",
      discover: "استكشف إكس أو",
    },
    entrance: {
      kicker: "المدخل",
      title: "اخل إلى إكس أو.",
      body:
        "الطابق الأوسط من فندق راديسون بلو دبي ووترفرنت — ذهب وأسود وصوت الخليج ينتظر خلف الباب. هنا تبدأ ليالي الخليج التجاري، كل ليلة من 11 مساءً حتى 4 صباحاً.",
      cta: "احجز طاولتك",
      caption: "فندق راديسون بلو دبي ووترفرنت · الطابق الأوسط · الخليج التجاري",
    },
    entertainment: {
      kicker: "الفنانون",
      title: "مسرح إكس أو",
      subtitle:
        "منسقي الأغاني المقيمون وفرقة إكس أو الخاصة يمسكون الأرضية من 11 مساءً حتى 4 صباحاً. كل ملف يُنشر فقط ببيانات معتمدة من الإدارة — بلا أسماء أو جداول مُختلقة.",
      residents: "منسقو الأغاني المقيمون",
      dancers: "راقصو إكس أو",
      slot: "مكان فنان",
      fields: {
        name: "الاسم",
        bio: "نبذة",
        instagram: "إنستغرام",
        specialty: "التخصص",
        days: "الأيام",
        time: "وقت الأداء",
      },
      tba: "سيُعلن لاحقاً",
      pendingPhoto: "بانتظار صورة معتمدة",
      note:
        "إكس أو كلوب دبي لا يختلق أسماء فنانين أو جداول أسبوعية. تُؤكَّد الأسماء على واتساب +971 50 373 7162 — اسأل عن برنامج الليلة.",
    },
    experiences: {
      kicker: "كبار الشخصيات والتجارب",
      title: "خمس طرق لتعيش الليلة",
      subtitle:
        "احجز طاولة، اطلب خدمة القوارير، عِش الأجواء، احتفل بمناسبتك أو تابع الموسيقى — كل تجربة تُؤكَّد كتابياً قبل وصولك.",
      photoPending: "بانتظار تصوير معتمد",
      items: [
        {
          key: "vip-tables",
          name: "طاولات كبار الشخصيات",
          blurb: "طاولة إكس أو المميزة أو الجناح الفاخر أو اللوفت الملكي — محجوزة طوال الليلة مع حد أدنى مكتوب.",
          href: "/vip-table-booking-dubai",
          image: "/images/vip-table.png",
        },
        {
          key: "bottle-service",
          name: "خدمة القوارير",
          blurb: "شمبانيا ومشروبات فاخرة وتشكيلات بلا كحول تُقدَّم لطاولتك مع عرض المشاعل.",
          href: "/bottle-service-dubai",
          image: "/images/bottle-service.png",
        },
        {
          key: "atmosphere",
          name: "أجواء النادي",
          blurb: "قاعة فندق خمس نجوم بكامل طاقتها — ذهب ومخمل وذروة خليجية بين 12:30 و2 صباحاً.",
          href: "/business-bay-nightlife",
          image: "/images/interior.png",
        },
        {
          key: "private-events",
          name: "المناسبات الخاصة",
          blurb: "أعياد ميلاد وليالي شركات واحتفالات مع ديكور وكعك ومضيف VIP مخصص.",
          href: "/private-events-dubai",
          image: "/images/private-events.png",
        },
        {
          key: "music",
          name: "الموسيقى والفنون",
          blurb: "هيب هوب وآر أند بي وكوميرشال وأغاني خليجية على أرضية واحدة، كل ليلة حتى 4 صباحاً.",
          href: "/dubai-nightlife-guide",
          image: "/images/dj.png",
        },
      ],
    },
    common: {
      reserveTable: "احجز طاولتك",
      reservedNote: "عرض مكتوب على واتساب قبل وصولك",
    },
  },
};

/** Copy for the active language. */
export function premiumCopy(isAr: boolean): PremiumCopy {
  return isAr ? PREMIUM.ar : PREMIUM.en;
}
