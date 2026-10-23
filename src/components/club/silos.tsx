"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, BookOpen, ChevronRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { dictionaries } from "@/lib/content";
import { SILOS } from "@/lib/silos";
import { WA_MESSAGES } from "@/lib/brand";
import { Reveal } from "@/components/club/reveal";
import { SectionHead, WhatsAppButton } from "@/components/club/ui-bits";
import { cn } from "@/lib/utils";

export function SilosSection() {
  const { isAr, lang } = useLanguage();
  const t = dictionaries[lang];
  const [active, setActive] = useState(0);
  const silo = SILOS[active];

  return (
    <section id="guides" className="relative py-20 lg:py-28" aria-label={t.guides.kicker}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHead kicker={t.guides.kicker} title={t.guides.title} subtitle={t.guides.subtitle} />
        </Reveal>

        {/* Silo tabs */}
        <Reveal delay={0.06}>
          <div
            className="mt-10 flex gap-2 overflow-x-auto pb-2 lg:justify-center"
            role="tablist"
            aria-label={t.guides.kicker}
          >
            {SILOS.map((s, i) => (
              <button
                key={s.slug}
                role="tab"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                className={cn(
                  "whitespace-nowrap rounded-full border px-4 py-2.5 text-[13px] font-semibold transition-all duration-300",
                  active === i
                    ? "border-gold bg-gold-gradient text-night shadow-[0_8px_24px_-8px_rgba(212,175,55,0.55)]"
                    : "border-gold/20 text-cream/65 hover:border-gold/50 hover:text-gold-light"
                )}
              >
                {isAr ? s.tabAr : s.tab}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Active silo */}
        <Reveal delay={0.1} key={silo.slug}>
          <article className="mt-8 overflow-hidden rounded-3xl border border-gold/20 bg-night-card">
            <div className="grid lg:grid-cols-[1.05fr_1fr]">
              {/* Copy */}
              <div className="order-2 flex flex-col p-6 sm:p-9 lg:order-1">
                <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.26em] text-gold/85">
                  <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                  {isAr ? silo.tabAr : silo.tab}
                </p>
                <h3 className="mt-3 font-display text-2xl font-black leading-snug text-cream sm:text-3xl">
                  {lang === "ar" ? silo.ar.title : silo.en.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-gold-light/85">
                  {lang === "ar" ? silo.ar.subtitle : silo.en.subtitle}
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-cream/75" dir="auto">
                  {lang === "ar" ? silo.ar.intro : silo.en.intro}
                </p>

                {/* Body (scrollable, styled by global gold scrollbar) */}
                <div className="mt-5 max-h-64 space-y-4 overflow-y-auto pe-2 lg:max-h-72">
                  {silo.en.body.map((p, i) => (
                    <p key={i} className="text-sm leading-relaxed text-cream/60" dir="auto">
                      {p}
                    </p>
                  ))}
                </div>

                {/* Stats */}
                <div className="mt-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-cream/40">
                    {t.guides.facts}
                  </p>
                  <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {silo.en.stats.map((s) => (
                      <div key={s.label} className="rounded-xl border border-gold/15 bg-night-soft/70 p-3">
                        <p className="text-base font-black text-gold-light" dir="auto">
                          {s.value}
                        </p>
                        <p className="mt-1 text-[10px] leading-snug text-cream/50" dir="auto">
                          {s.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FAQs */}
                <div className="mt-6 space-y-3">
                  {silo.en.faqs.map((f) => (
                    <details
                      key={f.q}
                      className="group rounded-xl border border-gold/15 bg-night-soft/50 px-4 py-3 open:border-gold/35"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-cream/85 [&::-webkit-details-marker]:hidden">
                        <span dir="auto">{f.q}</span>
                        <ChevronRight
                          className="h-4 w-4 shrink-0 text-gold transition-transform group-open:rotate-90 rtl:rotate-180 rtl:group-open:-rotate-90"
                          aria-hidden="true"
                        />
                      </summary>
                      <p className="mt-2.5 text-sm leading-relaxed text-cream/60" dir="auto">
                        {f.a}
                      </p>
                    </details>
                  ))}
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href="#booking"
                    className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-gold-gradient text-sm font-bold text-night transition hover:brightness-110"
                  >
                    {t.guides.jumpIn}
                    <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                  </a>
                  <WhatsAppButton size="default" variant="outline" message={WA_MESSAGES.general} label={t.common.whatsapp} />
                </div>
              </div>

              {/* Image */}
              <div className="relative order-1 min-h-[240px] lg:order-2 lg:min-h-full">
                <Image
                  src={silo.image}
                  alt={`XO Club Dubai — ${isAr ? silo.tabAr : silo.tab}. Reservations +971503737162`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night-card via-night/25 to-transparent lg:bg-gradient-to-e lg:from-night-card lg:via-night/20 lg:to-transparent" />
              </div>
            </div>
          </article>
        </Reveal>

        {/* Reserve strip */}
        <Reveal delay={0.14}>
          <div className="glass mx-auto mt-10 flex max-w-3xl flex-col items-center gap-4 rounded-3xl p-6 text-center sm:flex-row sm:text-start">
            <div className="flex-1">
              <p className="font-display text-lg font-bold text-cream">{t.guides.reserveBox}</p>
              <p className="mt-1 text-sm text-cream/60" dir="auto">
                {t.guides.reserveBoxBody}
              </p>
            </div>
            <WhatsAppButton size="default" message={WA_MESSAGES.general} label={t.common.reserve} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
