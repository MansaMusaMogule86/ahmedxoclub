"use client";

import { Building2, ChevronDown, Clock, Phone, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { dictionaries } from "@/lib/content";
import { premiumCopy } from "@/lib/premium";
import { BRAND, WA_MESSAGES } from "@/lib/brand";
import { GoldParticles } from "@/components/club/gold-particles";
import { HeroVideo } from "@/components/club/hero-video";
import { GoogleG, Stars, WhatsAppButton } from "@/components/club/ui-bits";

export function Hero() {
  const { isAr } = useLanguage();
  const t = dictionaries[isAr ? "ar" : "en"];
  const p = premiumCopy(isAr);

  const badges = [
    { icon: <GoogleG className="h-4 w-4" />, label: t.hero.trust1 },
    { icon: <Building2 className="h-4 w-4 text-gold" />, label: t.hero.trust2 },
    { icon: <Clock className="h-4 w-4 text-gold" />, label: t.hero.trust3 },
    { icon: <Sparkles className="h-4 w-4 text-gold" />, label: t.hero.trust4 },
  ];

  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden" aria-label="XO Club Dubai">
      {/* LAYER 1 — full-screen video hero (poster + reduced-motion fallback inside) */}
      <HeroVideo />
      <GoldParticles className="absolute inset-0 h-full w-full" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-28 pt-32 sm:px-10 lg:px-16 lg:pb-24">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-start">
          {/* Eyebrow: category + city (keeps the money keyword visible above the fold) */}
          <p className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-light sm:text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            {p.hero.eyebrow}
          </p>

          {/* Brand headline + tagline (single H1, two lines) */}
          <h1 className="mt-7 max-w-[22ch] text-shadow-hero">
            <span className="block font-mono-display text-[2rem] font-bold uppercase leading-[1.06] tracking-[0.1em] text-cream sm:text-5xl lg:text-5xl xl:text-6xl">
              {p.hero.title}
            </span>
            <span className="mt-3 block font-display text-[1.35rem] font-semibold italic text-gold-shimmer sm:mt-4 sm:text-3xl lg:text-[1.75rem] xl:text-3xl">
              {p.hero.tagline}
            </span>
          </h1>

          {/* Verified 5.0 proof */}
          <div className="mt-7 flex flex-col items-center gap-2 lg:items-start" aria-label={t.hero.trust1}>
            <div className="flex items-center gap-3">
              <Stars value={5} className="h-5 w-5" />
              <span className="text-lg font-black tracking-wide text-cream" dir="ltr">
                5.0
              </span>
            </div>
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold-light/90">
              {t.hero.trust1}
            </span>
          </div>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/80 sm:text-lg lg:max-w-xl">
            {t.hero.subtitle}
          </p>

          {/* CTAs — RESERVE YOUR TABLE (primary) · DISCOVER XO (secondary)
              Localised: the primary opens the one booking line on WhatsApp. */}
          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
            <WhatsAppButton size="lg" message={WA_MESSAGES.vip} label={p.hero.reserve} />
            <a
              href="#entrance"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-cream/25 bg-cream/[0.06] px-6 text-[15px] font-semibold text-cream/90 backdrop-blur-sm transition hover:border-gold/60 hover:text-gold-light"
            >
              {p.hero.discover}
            </a>
            {/* The one booking line stays reachable from the hero on every device. */}
            <a
              href={`tel:${BRAND.phoneDial}`}
              className="inline-flex items-center gap-2 rounded-full px-2 py-2 text-sm font-semibold text-gold-light/90 underline-offset-4 transition hover:text-gold hover:underline"
              aria-label={t.hero.ctaCall}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span dir="ltr">{BRAND.phoneDisplay}</span>
            </a>
          </div>

          {/* Trust badges */}
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-2.5 lg:justify-start">
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
