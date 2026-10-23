"use client";

import { CalendarClock, MapPin, Phone, Star } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { dictionaries } from "@/lib/content";
import { BRAND } from "@/lib/brand";
import { Reveal } from "@/components/club/reveal";

export function TrustBar() {
  const { isAr } = useLanguage();
  const t = dictionaries[isAr ? "ar" : "en"];

  const cells = [
    {
      icon: <Star className="h-5 w-5 fill-gold text-gold" aria-hidden="true" />,
      title: t.trust.rated,
      sub: t.trust.fromReviews,
    },
    {
      icon: <MapPin className="h-5 w-5 text-gold" aria-hidden="true" />,
      title: t.trust.location,
      sub: t.trust.mezzanine,
    },
    {
      icon: <CalendarClock className="h-5 w-5 text-gold" aria-hidden="true" />,
      title: t.trust.hours,
      sub: t.trust.hoursSub,
    },
    {
      icon: <Phone className="h-5 w-5 text-gold" aria-hidden="true" />,
      title: t.trust.booking,
      sub: t.trust.bookingSub,
    },
  ];

  return (
    <section className="relative border-y border-gold/15 bg-night-soft/80 py-10" aria-label={t.trust.rated}>
      <div className="pattern-dots absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {cells.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.06}>
            <div className="flex items-start gap-3.5">
              <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
                {c.icon}
              </span>
              <div className="min-w-0">
                <p className="text-sm font-bold text-cream">{c.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-cream/55">{c.sub}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
