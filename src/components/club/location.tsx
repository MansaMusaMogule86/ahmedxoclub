"use client";

import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { dictionaries } from "@/lib/content";
import { BRAND, WA_MESSAGES } from "@/lib/brand";
import { Reveal } from "@/components/club/reveal";
import { SectionHead, WhatsAppButton } from "@/components/club/ui-bits";

export function LocationSection() {
  const { isAr } = useLanguage();
  const t = dictionaries[isAr ? "ar" : "en"];

  return (
    <section id="location" className="relative py-20 lg:py-28" aria-label={t.location.kicker}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHead kicker={t.location.kicker} title={t.location.title} subtitle={t.location.subtitle} />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_1fr]">
          {/* Google Maps embed — exact venue pin */}
          <Reveal delay={0.06}>
            <div className="h-full min-h-[320px] overflow-hidden rounded-3xl border border-gold/25 shadow-[0_20px_60px_-24px_rgba(0,0,0,0.8)] lg:min-h-[460px]">
              <iframe
                title="XO Club Dubai — Radisson Blu Hotel, Dubai Waterfront, Business Bay — Google Maps"
                src={BRAND.mapsEmbed}
                className="h-full min-h-[320px] w-full lg:min-h-[460px]"
                style={{ border: 0, filter: "grayscale(0.35) contrast(1.05)" }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          {/* NAP + hours + contact */}
          <Reveal delay={0.12}>
            <div className="flex h-full flex-col gap-5">
              {/* Address */}
              <div className="rounded-3xl border border-gold/20 bg-night-card p-6">
                <h3 className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.24em] text-gold/85">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {t.location.addressTitle}
                </h3>
                <address className="mt-3 not-italic leading-relaxed text-cream/85" dir="auto">
                  <span className="block font-display text-lg font-bold text-cream">
                    {isAr ? "إكس أو كلوب دبي" : BRAND.name}
                  </span>
                  <span className="mt-1.5 block text-sm text-cream/70">{BRAND.address.hotel}</span>
                  <span className="block text-sm text-cream/70">{BRAND.address.floor}</span>
                  <span className="block text-sm text-cream/70">
                    {BRAND.address.area}, {BRAND.address.city}, {BRAND.address.countryName}
                  </span>
                </address>
                <a
                  href={BRAND.mapsDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex h-11 items-center gap-2 rounded-full bg-gold-gradient px-5 text-sm font-bold text-night transition hover:brightness-110"
                >
                  <Navigation className="h-4 w-4" aria-hidden="true" />
                  {t.location.directions}
                </a>
              </div>

              {/* Hours */}
              <div className="rounded-3xl border border-gold/20 bg-night-card p-6">
                <h3 className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.24em] text-gold/85">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  {t.location.hoursTitle}
                </h3>
                <p className="mt-3 text-xl font-black text-cream" dir="ltr">
                  {isAr ? t.location.hoursValue : "Daily · 11:00 PM – 4:00 AM"}
                </p>
                <p className="mt-1.5 text-sm text-cream/60">{t.location.hoursSub}</p>
                <span className="mt-3 inline-flex items-center gap-2 rounded-full border border-whatsapp/40 bg-whatsapp/10 px-3.5 py-1.5 text-xs font-bold text-whatsapp">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-whatsapp opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-whatsapp" />
                  </span>
                  {isAr ? "مفتوح 7 أيام في الأسبوع" : "Open 7 days a week"}
                </span>
              </div>

              {/* Arrival + reservations */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-3xl border border-gold/20 bg-night-card p-6">
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold/85">
                    {t.location.parkingTitle}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-cream/65" dir="auto">
                    {t.location.parking}
                  </p>
                </div>
                <div className="rounded-3xl border border-gold/20 bg-night-card p-6">
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold/85">
                    {t.location.contactTitle}
                  </h3>
                  <a
                    href={`tel:${BRAND.phoneDial}`}
                    className="mt-2.5 inline-flex items-center gap-2 text-lg font-black text-gold-light transition hover:text-gold"
                    dir="ltr"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    {BRAND.phoneDisplay}
                  </a>
                  <p className="mt-1.5 text-xs leading-relaxed text-cream/55" dir="auto">
                    {t.location.contactBody}
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <WhatsAppButton size="default" message={WA_MESSAGES.general} label={t.common.reserve} />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
