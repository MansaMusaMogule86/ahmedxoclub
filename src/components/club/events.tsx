"use client";

import { CalendarDays, Sparkles, Star } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { dictionaries } from "@/lib/content";
import { WA_MESSAGES, waLink } from "@/lib/brand";
import { Reveal } from "@/components/club/reveal";
import { SectionHead } from "@/components/club/ui-bits";

export interface EventCard {
  id: string;
  slug: string;
  title: string;
  titleAr?: string | null;
  description: string;
  performer?: string | null;
  dateISO: string;
  offer?: string | null;
  featured: boolean;
}

function fmtDate(iso: string, lang: "en" | "ar") {
  return new Intl.DateTimeFormat(lang === "ar" ? "ar-AE" : "en-GB", {
    timeZone: "Asia/Dubai",
    weekday: "short",
    day: "numeric",
    month: "short",
  }).format(new Date(iso));
}

function fmtTime(iso: string, lang: "en" | "ar") {
  return new Intl.DateTimeFormat(lang === "ar" ? "ar-AE" : "en-GB", {
    timeZone: "Asia/Dubai",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(new Date(iso));
}

export function EventsSection({ events }: { events: EventCard[] }) {
  const { isAr, lang } = useLanguage();
  const t = dictionaries[lang];

  return (
    <section id="events" className="relative bg-night-soft/60 py-20 lg:py-28" aria-label={t.events.kicker}>
      <div className="pattern-dots absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHead kicker={t.events.kicker} title={t.events.title} subtitle={t.events.subtitle} />
        </Reveal>

        {events.length === 0 ? (
          /* ---------- Elegant empty state: management placeholder ---------- */
          <Reveal delay={0.08}>
            <div className="xo-placeholder-card mx-auto mt-12 max-w-3xl rounded-3xl p-8 text-center sm:p-10">
              <span className="xo-tba-seal">
                <Star className="h-3 w-3" aria-hidden="true" />
                {t.common.tba}
              </span>
              <h3 className="xo-placeholder-token mt-5 font-display text-2xl font-black">
                {isAr ? "[إدراج ثيم الفعالية]" : "[Insert Event Theme]"}
              </h3>
              <p className="mt-2 text-sm text-cream/60">
                {isAr ? "[إدراج التاريخ] · [إدراج اسم الفنان]" : "[Insert Date] · [Insert DJ/Artist Name]"}
              </p>
              <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-cream/60">{t.events.empty}</p>
              <a
                href={waLink(WA_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-gold-gradient px-8 text-sm font-bold text-night transition hover:brightness-110"
              >
                {t.common.reserve} · +971 50 373 7162
              </a>
            </div>
          </Reveal>
        ) : (
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((e, i) => (
              <Reveal key={e.id} delay={0.05 + (i % 3) * 0.06}>
                <article className="card-hover-glow flex h-full flex-col overflow-hidden rounded-3xl border border-gold/15 bg-night-card">
                  <div className="flex items-center justify-between border-b border-gold/10 bg-night-soft/60 px-5 py-3.5">
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-gold-light" dir="ltr">
                      <CalendarDays className="h-4 w-4" aria-hidden="true" />
                      {fmtDate(e.dateISO, lang)}
                    </span>
                    {e.featured ? (
                      <span className="rounded-full bg-crimson-gradient px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-cream">
                        {t.events.featured}
                      </span>
                    ) : null}
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-xl font-bold text-cream" dir="auto">
                      {isAr && e.titleAr ? e.titleAr : e.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-cream/60" dir="auto">
                      {e.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between gap-3">
                      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-cream/50" dir="ltr">
                        {fmtTime(e.dateISO, lang)} · 11 PM – 4 AM
                      </span>
                      <a
                        href={waLink(WA_MESSAGES.event(isAr && e.titleAr ? e.titleAr : e.title))}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 items-center gap-1.5 rounded-full bg-gold-gradient px-4 text-xs font-bold text-night transition hover:brightness-110"
                      >
                        <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                        {t.events.reserve}
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
