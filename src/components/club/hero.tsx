"use client";

import Image from "next/image";
import { Building2, ChevronDown, Clock, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { dictionaries } from "@/lib/content";
import { BRAND, WA_MESSAGES } from "@/lib/brand";
import { GoldParticles } from "@/components/club/gold-particles";
import { GoogleG, Stars, WhatsAppButton } from "@/components/club/ui-bits";

export function Hero() {
  const { isAr } = useLanguage();
  const t = dictionaries[isAr ? "ar" : "en"];

  const badges = [
    { icon: <GoogleG className="h-4 w-4" />, label: t.hero.trust1 },
    { icon: <Building2 className="h-4 w-4 text-gold" />, label: t.hero.trust2 },
    { icon: <Clock className="h-4 w-4 text-gold" />, label: t.hero.trust3 },
    { icon: <Sparkles className="h-4 w-4 text-gold" />, label: t.hero.trust4 },
  ];

  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden" aria-label="XO Club Dubai">
      {/* Cinematic backdrop */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/hero.png"
          alt="XO Club Dubai — luxury Khaliji nightclub interior at Radisson Blu Dubai Waterfront, VIP tables under golden chandeliers. Book +971503737162"
          fill
          priority
          sizes="100vw"
          className="animate-kenburns object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night/85 via-night/55 to-night" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(8,8,10,0.55)_100%)]" />
      </div>
      <GoldParticles className="absolute inset-0 h-full w-full" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-24 pt-32 sm:px-6">
        <div className="flex flex-col items-center text-center">
          {/* Location badge */}
          <p className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-light sm:text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            {t.hero.badge}
          </p>

          {/* Headline */}
          <h1 className="mt-7 text-4xl font-black leading-[1.08] text-cream sm:text-6xl lg:text-7xl">
            {t.hero.titleTop}
            <br />
            <span className="text-gold-shimmer">{t.hero.titleGold}</span>
          </h1>

          {/* 5.0 rating proof */}
          <div className="mt-6 flex flex-col items-center gap-2" aria-label={t.hero.trust1}>
            <div className="flex items-center gap-3">
              <Stars value={5} className="h-5 w-5" />
              <span className="text-lg font-black tracking-wide text-cream" dir="ltr">5.0</span>
            </div>
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold-light/90">
              {t.hero.trust1}
            </span>
          </div>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/80 sm:text-lg">
            {t.hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
            <WhatsAppButton message={WA_MESSAGES.vip} label={t.hero.ctaWhatsapp} />
            <a
              href={`tel:${BRAND.phoneDial}`}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-gold/50 bg-gold/10 px-6 text-[15px] font-semibold text-gold-light transition hover:border-gold hover:bg-gold/20"
              aria-label={t.hero.ctaCall}
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2Z" />
              </svg>
              <span dir="ltr">{BRAND.phoneDisplay}</span>
            </a>
            <a
              href="#booking"
              className="inline-flex h-12 items-center justify-center rounded-full bg-gold-gradient px-6 text-[15px] font-bold text-night shadow-[0_8px_28px_-8px_rgba(212,175,55,0.6)] transition hover:brightness-110"
            >
              {t.hero.ctaBook}
            </a>
          </div>

          {/* Trust badges */}
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
            {badges.map((b) => (
              <li
                key={b.label}
                className="glass-soft inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-cream/85"
              >
                {b.icon}
                {b.label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#tonight"
        className="absolute bottom-6 start-1/2 flex -translate-x-1/2 flex-col items-center gap-1.5 text-cream/50 transition hover:text-gold"
        aria-label={t.hero.scroll}
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">{t.hero.scroll}</span>
        <ChevronDown className="h-5 w-5 animate-bounce-soft" aria-hidden="true" />
      </a>
    </section>
  );
}
