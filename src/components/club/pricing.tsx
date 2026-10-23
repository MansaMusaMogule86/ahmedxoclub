"use client";

import Image from "next/image";
import { Check, Crown, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { dictionaries } from "@/lib/content";
import { TABLE_TYPES, WA_MESSAGES, type TableTypeKey } from "@/lib/brand";
import { useBookingStore } from "@/lib/booking-store";
import { Reveal } from "@/components/club/reveal";
import { SectionHead, WhatsAppButton } from "@/components/club/ui-bits";

export function Pricing() {
  const { isAr } = useLanguage();
  const t = dictionaries[isAr ? "ar" : "en"];
  const setTableType = useBookingStore((s) => s.setTableType);

  const choose = (key: TableTypeKey) => {
    setTableType(key);
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="tables" className="relative py-20 lg:py-28" aria-label={t.tables.kicker}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHead kicker={t.tables.kicker} title={t.tables.title} subtitle={t.tables.subtitle} />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {TABLE_TYPES.map((tab, i) => (
            <Reveal key={tab.key} delay={0.05 + i * 0.07}>
              <article
                className={`card-hover-glow relative flex h-full flex-col rounded-3xl border p-6 sm:p-7 ${
                  tab.popular
                    ? "border-gold/50 bg-gradient-to-b from-gold/[0.09] to-night-card shadow-[0_18px_60px_-20px_rgba(212,175,55,0.35)]"
                    : "border-gold/15 bg-night-card"
                }`}
              >
                {tab.popular ? (
                  <span className="absolute -top-3.5 start-1/2 -translate-x-1/2 rounded-full bg-crimson-gradient px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-cream shadow-lg rtl:translate-x-1/2">
                    {t.tables.popular}
                  </span>
                ) : null}

                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 text-gold">
                  <Crown className="h-5 w-5" aria-hidden="true" />
                </span>

                <h3 className="mt-4 font-display text-2xl font-black text-cream" dir="auto">
                  {isAr ? tab.nameAr : tab.name}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-cream/50" dir="auto">
                  {isAr ? tab.seatsAr : tab.seats}
                </p>

                {/* Elegant placeholder price chip — real minimum spend arrives in writing */}
                <div className="mt-5 rounded-2xl border border-dashed border-gold/40 bg-gold/[0.06] px-4 py-3 text-center">
                  <p
                    className="xo-placeholder-token text-base font-bold"
                    dir="ltr"
                    title={t.tables.priceNote}
                  >
                    {isAr ? tab.priceChipAr : tab.priceChip}
                  </p>
                  <p className="mt-1 text-[11px] text-cream/50">{t.tables.priceNote}</p>
                </div>

                <div className="mt-5 flex-1">
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold/80">
                    {t.tables.includes}
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {(isAr ? tab.perksAr : tab.perks).map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-sm text-cream/70" dir="auto">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => choose(tab.key)}
                  className={`mt-6 inline-flex h-12 w-full items-center justify-center rounded-full text-sm font-bold transition ${
                    tab.popular
                      ? "bg-gold-gradient text-night hover:brightness-110"
                      : "border border-gold/50 bg-gold/10 text-gold-light hover:border-gold hover:bg-gold/20"
                  }`}
                >
                  {t.tables.bookThis}
                </button>
              </article>
            </Reveal>
          ))}
        </div>

        {/* ---- Transparency promise + bottle service ---- */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-gold/20 bg-night-card p-6 sm:p-8">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 text-gold">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-cream">{t.tables.transparencyTitle}</h3>
              <ul className="mt-4 space-y-3">
                {t.tables.transparency.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-cream/70" dir="auto">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-whatsapp" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="relative h-full overflow-hidden rounded-3xl border border-gold/20">
              <Image
                src="/images/bottle-service.png"
                alt="XO Club Dubai VIP bottle service with golden sparkler presentation — reserve +971503737162"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night via-night/55 to-night/20" />
              <div className="relative flex h-full flex-col justify-end p-6 sm:p-8">
                <h3 className="font-display text-xl font-bold text-cream">{t.tables.bottleTitle}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/75">{t.tables.bottleDesc}</p>
                <div className="mt-4">
                  <WhatsAppButton size="default" message={WA_MESSAGES.vip} label={t.common.reserve} />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
