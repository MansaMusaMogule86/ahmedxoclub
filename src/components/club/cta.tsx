"use client";

import { useLanguage } from "@/lib/i18n";
import { dictionaries } from "@/lib/content";
import { BRAND, WA_MESSAGES } from "@/lib/brand";
import { Reveal } from "@/components/club/reveal";
import { WhatsAppButton } from "@/components/club/ui-bits";
import { GoldParticles } from "@/components/club/gold-particles";

export function FinalCta() {
  const { isAr } = useLanguage();
  const t = dictionaries[isAr ? "ar" : "en"];

  return (
    <section className="relative overflow-hidden py-20 lg:py-24" aria-label={t.cta.title}>
      <div className="absolute inset-0 bg-crimson-gradient opacity-90" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.25),transparent_60%)]" aria-hidden="true" />
      <GoldParticles className="absolute inset-0 h-full w-full opacity-70" />
      <div className="pattern-arabesque absolute inset-0 opacity-10" aria-hidden="true" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="font-display text-4xl font-black leading-tight text-cream sm:text-5xl">
            {t.cta.title}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-cream/85">{t.cta.subtitle}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <WhatsAppButton message={WA_MESSAGES.weekend} label={t.cta.whatsapp} />
            <a
              href={`tel:${BRAND.phoneDial}`}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-cream/40 bg-night/40 px-6 text-[15px] font-semibold text-cream transition hover:border-cream hover:bg-night/60"
              aria-label={t.cta.call}
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2Z" />
              </svg>
              <span dir="ltr">{BRAND.phoneDisplay}</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
