"use client";

import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { dictionaries } from "@/lib/content";
import { premiumCopy } from "@/lib/premium";
import { WA_MESSAGES } from "@/lib/brand";
import { GoldParticles } from "@/components/club/gold-particles";
import { HeroVideo } from "@/components/club/hero-video";
import { WhatsAppButton } from "@/components/club/ui-bits";

export function Hero() {
  const { isAr } = useLanguage();
  const t = dictionaries[isAr ? "ar" : "en"];
  const p = premiumCopy(isAr);

  return (
    <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden" aria-label="XO Club Dubai">
      <HeroVideo />
      <GoldParticles className="absolute inset-0 h-full w-full" />

      {/* Eyebrow — pinned to top */}
      <div className="absolute top-28 left-0 right-0 z-10 flex justify-center px-6 sm:px-10 lg:px-16">
        <p className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-light sm:text-xs">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
          </span>
          {p.hero.eyebrow}
        </p>
      </div>

      {/* Tagline + CTAs — pinned to bottom */}
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-28 sm:px-10 lg:px-16">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-shadow-hero">
            <span className="block whitespace-nowrap font-display text-[1.35rem] font-semibold italic text-gold-shimmer sm:text-3xl lg:text-[1.75rem] xl:text-3xl">
              {p.hero.tagline}
            </span>
          </h1>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
            <WhatsAppButton size="lg" message={WA_MESSAGES.vip} label={p.hero.reserve} />
            <a
              href="#entrance"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-cream/25 bg-cream/[0.06] px-6 text-[15px] font-semibold text-cream/90 backdrop-blur-sm transition hover:border-gold/60 hover:text-gold-light"
            >
              {p.hero.discover}
            </a>
          </div>
        </div>
      </div>

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
