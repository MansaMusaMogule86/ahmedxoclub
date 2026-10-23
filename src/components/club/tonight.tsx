"use client";

import { CalendarDays, Clock, Sparkles, Star, Users } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { dictionaries } from "@/lib/content";
import { WA_MESSAGES, waLink } from "@/lib/brand";
import { Reveal } from "@/components/club/reveal";
import { SectionHead, WhatsAppButton } from "@/components/club/ui-bits";

/**
 * TONIGHT AT XO — the dynamic placeholder system.
 * Management swaps [Insert …] tokens for real data (events API / content file)
 * without touching layout. Placeholders are styled as luxury "To Be
 * Announced" panels, never as fake events.
 */

function PlaceholderRow({
  icon,
  label,
  value,
  isPlaceholder,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  isPlaceholder: boolean;
}) {
  return (
    <div className="flex items-center gap-3 border-t border-gold/10 py-3 first:border-t-0">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/25 bg-gold/5 text-gold">
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-cream/45">{label}</p>
        {isPlaceholder ? (
          <p className="xo-placeholder-token mt-0.5 truncate text-[15px] font-semibold">{value}</p>
        ) : (
          <p className="mt-0.5 truncate text-[15px] font-semibold text-cream/90" dir="auto">
            {value}
          </p>
        )}
      </div>
    </div>
  );
}

export function TonightAtXo() {
  const { isAr } = useLanguage();
  const t = dictionaries[isAr ? "ar" : "en"];

  return (
    <section id="tonight" className="relative py-20 lg:py-28" aria-label={t.tonight.kicker}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHead kicker={t.tonight.kicker} title={t.tonight.title} subtitle={t.tonight.subtitle} />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {/* ---- Card 1: TONIGHT (placeholder) ---- */}
          <Reveal delay={0.05}>
            <article className="xo-placeholder-card flex h-full flex-col rounded-3xl p-6 sm:p-7">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-crimson-gradient px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-cream shadow-[0_6px_24px_-8px_rgba(139,26,43,0.8)]">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cream opacity-70" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cream" />
                  </span>
                  {t.tonight.tonightBadge}
                </span>
                <span className="xo-tba-seal">
                  <Star className="h-3 w-3" aria-hidden="true" />
                  {t.common.tba}
                </span>
              </div>

              <div className="mt-5 flex-1">
                <PlaceholderRow
                  icon={<Sparkles className="h-4 w-4" />}
                  label={t.tonight.theme}
                  value={isAr ? "[إدراج ثيم الفعالية]" : "[Insert Event Theme]"}
                  isPlaceholder
                />
                <PlaceholderRow
                  icon={<Star className="h-4 w-4" />}
                  label={t.tonight.guest}
                  value={isAr ? "[إدراج اسم الدي جي / الفنان]" : "[Insert DJ/Artist Name]"}
                  isPlaceholder
                />
                <PlaceholderRow
                  icon={<Clock className="h-4 w-4" />}
                  label={t.tonight.time}
                  value={isAr ? "11:00 مساءً – 4:00 صباحاً" : "11:00 PM – 4:00 AM"}
                  isPlaceholder={false}
                />
                <p className="mt-4 text-xs leading-relaxed text-cream/50">{t.tonight.programPending}</p>
              </div>

              <a
                href={waLink(WA_MESSAGES.tonight)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-gold-gradient text-sm font-bold text-night transition hover:brightness-110"
              >
                {t.tonight.reserveTonight}
              </a>
            </article>
          </Reveal>

          {/* ---- Card 2: THIS WEEKEND (placeholder) ---- */}
          <Reveal delay={0.12}>
            <article className="xo-placeholder-card flex h-full flex-col rounded-3xl p-6 sm:p-7">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-gold-light">
                  <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                  {t.tonight.weekendBadge}
                </span>
                <span className="xo-tba-seal">{t.tonight.comingSoon}</span>
              </div>

              <div className="mt-5 flex-1">
                <PlaceholderRow
                  icon={<Sparkles className="h-4 w-4" />}
                  label={t.tonight.theme}
                  value={isAr ? "[إدراج ثيم الفعالية]" : "[Insert Event Theme]"}
                  isPlaceholder
                />
                <PlaceholderRow
                  icon={<CalendarDays className="h-4 w-4" />}
                  label={t.tonight.date}
                  value={isAr ? "[إدراج التاريخ]" : "[Insert Date]"}
                  isPlaceholder
                />
                <PlaceholderRow
                  icon={<Users className="h-4 w-4" />}
                  label={t.tonight.guest}
                  value={
                    isAr
                      ? "ضيف مميز: [إدراج اسم الفنان] — قريباً"
                      : "Special Guest: [Artist Name] — Coming Soon"
                  }
                  isPlaceholder
                />
                <p className="mt-4 text-xs leading-relaxed text-cream/50">{t.tonight.announcedFirst}</p>
              </div>

              <a
                href={waLink(WA_MESSAGES.weekend)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full border border-gold/50 bg-gold/10 text-sm font-bold text-gold-light transition hover:border-gold hover:bg-gold/20"
              >
                {t.tonight.reserveWeekend}
              </a>
            </article>
          </Reveal>

          {/* ---- Card 3: THE SIGNATURE NIGHT (evergreen, verified format) ---- */}
          <Reveal delay={0.19}>
            <article className="card-hover-glow relative flex h-full flex-col overflow-hidden rounded-3xl border border-gold/25 bg-night-card p-6 sm:p-7">
              <div className="absolute inset-0 opacity-[0.06]" aria-hidden="true">
                <ImageBg />
              </div>
              <span className="relative inline-flex w-fit items-center gap-2 rounded-full bg-gold-gradient px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-night">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                {t.tonight.kicker}
              </span>
              <h3 className="relative mt-5 font-display text-2xl font-black text-cream">{t.tonight.signatureTitle}</h3>
              <p className="relative mt-3 flex-1 text-sm leading-relaxed text-cream/65">{t.tonight.signatureDesc}</p>
              <ul className="relative mt-4 flex flex-wrap gap-2" aria-label={t.trust.music}>
                {(isAr
                  ? ["هيب هوب", "آر أند بي", "كوميرشال", "خليجي"]
                  : ["Hip-Hop", "R&B", "Commercial", "Khaliji"]
                ).map((g) => (
                  <li
                    key={g}
                    className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[11px] font-bold tracking-wide text-gold-light"
                  >
                    {g}
                  </li>
                ))}
              </ul>
              <a
                href="#booking"
                className="relative mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-gold-gradient text-sm font-bold text-night transition hover:brightness-110"
              >
                {t.tonight.reserveSignature}
              </a>
            </article>
          </Reveal>
        </div>

        <Reveal delay={0.25}>
          <div className="mt-8 flex justify-center">
            <WhatsAppButton
              size="default"
              variant="outline"
              message={WA_MESSAGES.general}
              label={t.tonight.announcedFirst}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ImageBg() {
  return (
    <div
      className="h-full w-full bg-[url('/images/interior.png')] bg-cover bg-center"
      aria-hidden="true"
    />
  );
}
