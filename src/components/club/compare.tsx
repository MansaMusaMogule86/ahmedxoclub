"use client";

import { Check, X } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { dictionaries } from "@/lib/content";
import { WA_MESSAGES } from "@/lib/brand";
import { Reveal } from "@/components/club/reveal";
import { SectionHead, WhatsAppButton } from "@/components/club/ui-bits";
import { BrandLogo } from "@/components/club/brand-logo";

export function Compare() {
  const { isAr } = useLanguage();
  const t = dictionaries[isAr ? "ar" : "en"];

  return (
    <section id="compare" className="relative bg-night-soft/60 py-20 lg:py-28" aria-label={t.compare.kicker}>
      <div className="pattern-arabesque absolute inset-0 opacity-[0.04]" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHead kicker={t.compare.kicker} title={t.compare.title} subtitle={t.compare.subtitle} />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-12 overflow-hidden rounded-3xl border border-gold/20 bg-night-card">
            {/* Header row */}
            <div className="grid grid-cols-[1fr] sm:grid-cols-[0.9fr_1.1fr_1fr] border-b border-gold/20 bg-night-soft/70">
              <div className="hidden sm:block" aria-hidden="true" />
              <div className="flex items-center gap-3 border-gold/20 px-5 py-4 sm:border-e">
                <BrandLogo className="h-9 shrink-0" sizes="90px" />
                <p className="text-sm font-black uppercase tracking-[0.14em] text-gold-light">
                  {t.compare.colXo}
                </p>
              </div>
              <div className="px-5 py-4">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-cream/45">
                  {t.compare.colOther}
                </p>
              </div>
            </div>

            {/* Rows */}
            {t.compare.rows.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-1 gap-2 px-5 py-5 sm:grid-cols-[0.9fr_1.1fr_1fr] sm:gap-0 ${
                  i % 2 === 0 ? "bg-night/40" : ""
                } border-b border-gold/10 last:border-b-0`}
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cream/60">{row.label}</p>
                <div className="flex items-start gap-2.5 sm:border-e sm:border-gold/10 sm:pe-5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-whatsapp" aria-hidden="true" />
                  <p className="text-sm font-semibold leading-relaxed text-cream/90" dir="auto">
                    {row.xo}
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-crimson-bright" aria-hidden="true" />
                  <p className="text-sm leading-relaxed text-cream/45" dir="auto">
                    {row.other}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Deep-dive comparison pages (competitor interception routes) */}
        <Reveal delay={0.12}>
          <div className="mt-8">
            <p className="text-center text-[11px] font-bold uppercase tracking-[0.24em] text-cream/45">
              {isAr ? "مقارنات موسّعة" : "Full comparisons"}
            </p>
            <ul className="mt-4 flex flex-wrap justify-center gap-2">
              {[
                ["/vs-fobia-club", "XO vs Fobia Night Club"],
                ["/vs-omni-club", "XO vs Omni Club"],
                ["/vs-avenue-club", "XO vs The Avenue Club"],
                ["/vs-solitaire-club", "XO vs Solitaire Club"],
                ["/vs-dxb-night-club", "XO vs DXB Night Club"],
                ["/vs-club-one", "XO vs Club One"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="rounded-full border border-gold/20 px-4 py-2 text-xs font-semibold text-cream/70 transition hover:border-gold/50 hover:text-gold"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-8 flex justify-center">
            <WhatsAppButton message={WA_MESSAGES.weekend} label={t.compare.cta} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
