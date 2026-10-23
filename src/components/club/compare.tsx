"use client";

import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { BRAND, WA_MESSAGES } from "@/lib/brand";
import { Reveal } from "@/components/club/reveal";
import { SectionHead, WhatsAppButton } from "@/components/club/ui-bits";

/**
 * THE XO STANDARD — first-party published facts only.
 *
 * This section previously ran an "XO vs. The Rest" comparison table with an
 * unnamed-competitor column containing unverified negative claims. It is now a
 * single-column statement of verifiable facts about XO Club Dubai itself: no
 * competitor names, no superiority claims, no statements about any other venue.
 * (See archive/competitor-comparison/README.md.)
 */
const COPY = {
  en: {
    kicker: "The XO Standard",
    title: "What you can expect at XO Club Dubai",
    subtitle:
      "Published facts about our own house — the checks any guest can make before booking. We describe ourselves; we make no claims about anyone else.",
    rows: [
      { label: "Google rating", value: `Verified ${BRAND.rating.value.toFixed(1)}★ on Google Maps, as published on our own profile` },
      { label: "Address", value: `${BRAND.address.hotel}, ${BRAND.address.floor}, ${BRAND.address.area}, ${BRAND.address.city}` },
      { label: "Hours", value: "Open 7 days a week, 11:00 PM – 4:00 AM" },
      { label: "Music", value: "Hip-Hop · R&B · Commercial · Arabic/Khaliji on one floor" },
      { label: "Booking", value: `One line for everything — ${BRAND.phoneDisplay} (call or WhatsApp)` },
      { label: "Pricing", value: "Minimum spend confirmed in writing before you arrive" },
      { label: "Entry", value: "21+ with valid ID · smart-elegant dress code" },
    ],
    cta: "Reserve your table on WhatsApp",
    note: "Facts verified by XO Club Dubai. Ratings shown are taken from our own Google Maps profile and can change over time.",
  },
  ar: {
    kicker: "معيار إكس أو",
    title: "ما تتوقعه في إكس أو كلوب دبي",
    subtitle:
      "حقائق منشورة عن مكاننا — يمكن لأي ضيف التحقق منها قبل الحجز. نتحدث عن أنفسنا فقط، ولا نُطلق أي ادعاء عن مكان آخر.",
    rows: [
      { label: "تقييم جوجل", value: `‏${BRAND.rating.value.toFixed(1)}★ موثق على خرائط جوجل كما هو منشور على صفحتنا` },
      { label: "العنوان", value: `${BRAND.address.hotel}، ${BRAND.address.floor}، ${BRAND.address.area}` },
      { label: "الساعات", value: "مفتوح 7 أيام في الأسبوع، 11 مساءً – 4 صباحاً" },
      { label: "الموسيقى", value: "هيب هوب · آر أند بي · كوميرشال · عربي/خليجي على أرضية واحدة" },
      { label: "الحجز", value: `خط واحد لكل شيء — ${BRAND.phoneDisplay} (اتصال أو واتساب)` },
      { label: "الأسعار", value: "الحد الأدنى مؤكد كتابياً قبل وصولك" },
      { label: "الدخول", value: "فوق 21 مع هوية سارية · أزياء أنيقة" },
    ],
    cta: "احجز طاولتك على واتساب",
    note: "حقائق موثقة من إكس أو كلوب دبي. التقييمات مأخوذة من صفحتنا على خرائط جوجل وقد تتغير.",
  },
} as const;

export function Compare() {
  const { isAr } = useLanguage();
  const t = COPY[isAr ? "ar" : "en"];

  return (
    <section id="standard" className="relative bg-night-soft/60 py-20 lg:py-28" aria-label={t.kicker}>
      <div className="pattern-arabesque absolute inset-0 opacity-[0.04]" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHead kicker={t.kicker} title={t.title} subtitle={t.subtitle} />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-12 overflow-hidden rounded-3xl border border-gold/20 bg-night-card">
            {t.rows.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-1 gap-2 border-b border-gold/10 px-5 py-5 last:border-b-0 sm:grid-cols-[0.4fr_1fr] sm:gap-6 ${
                  i % 2 === 0 ? "bg-night/40" : ""
                }`}
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cream/60">{row.label}</p>
                <p className="flex items-start gap-2.5 text-sm font-semibold leading-relaxed text-cream/90" dir="auto">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-whatsapp" aria-hidden="true" />
                  {row.value}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-4 text-center text-[11px] uppercase tracking-[0.16em] text-cream/35">{t.note}</p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-8 flex justify-center">
            <WhatsAppButton message={WA_MESSAGES.weekend} label={t.cta} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
