"use client";

import { BadgeCheck, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { dictionaries } from "@/lib/content";
import { BRAND, WA_MESSAGES } from "@/lib/brand";
import { Reveal } from "@/components/club/reveal";
import { GoogleG, SectionHead, Stars, WhatsAppButton } from "@/components/club/ui-bits";

export interface ReviewCard {
  id: string;
  name: string;
  rating: number;
  text: string;
  source: string;
}

/**
 * NOTE (legal/SEO cleanup): the previous CURATED array of sample testimonials
 * was REMOVED. Publishing invented guest reviews attributed to Google is a
 * consumer-protection risk and conflicts with the "no invented reviews" rule.
 *
 * This section now renders only reviews supplied through the approved database
 * feed (real, consented guest reviews entered by management). When there are
 * none, it points readers to the live Google Maps listing instead of filling
 * the space with placeholder quotes.
 */

export function Reviews({ reviews }: { reviews: ReviewCard[] }) {
  const { isAr } = useLanguage();
  const t = dictionaries[isAr ? "ar" : "en"];
  const feed = reviews;

  return (
    <section id="reviews" className="relative bg-night-soft/60 py-20 lg:py-28" aria-label={t.reviews.kicker}>
      <div className="pattern-dots absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHead kicker={t.reviews.kicker} title={t.reviews.title} subtitle={t.reviews.subtitle} />
        </Reveal>

        {/* Verified 5.0 badge */}
        <Reveal delay={0.08}>
          <div className="mx-auto mt-10 flex max-w-2xl flex-col items-center gap-4 rounded-3xl border border-gold/30 bg-gradient-to-b from-gold/[0.08] to-night-card p-8 text-center sm:flex-row sm:text-start">
            <div className="flex flex-col items-center gap-1.5 sm:items-start">
              <div className="flex items-center gap-3" dir="ltr">
                <span className="text-6xl font-black leading-none text-gold-shimmer" aria-hidden="true">
                  5.0
                </span>
                <Stars value={5} className="h-6 w-6" />
              </div>
              <span className="sr-only">{t.reviews.verified}</span>
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gold-light">
                <GoogleG className="h-4 w-4" />
                {t.reviews.verified}
              </p>
            </div>
            <div className="flex-1 border-t border-gold/10 pt-4 sm:border-s sm:border-t-0 sm:ps-6 sm:pt-0">
              <p className="text-sm leading-relaxed text-cream/70">
                {BRAND.name} · {BRAND.address.full} — {t.trust.fromReviews}
              </p>
              <a
                href={BRAND.mapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-light underline-offset-4 transition hover:text-gold hover:underline"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {t.reviews.readAll}
              </a>
            </div>
          </div>
        </Reveal>

        {/* Review feed — approved database reviews, or a link to the live source */}
        {feed.length === 0 ? (
          <Reveal delay={0.12}>
            <div className="mt-10 rounded-3xl border border-gold/20 bg-night-card p-8 text-center">
              <p className="font-display text-lg font-bold text-cream">
                {isAr ? "التقييمات على جوجل" : "Read our reviews on Google"}
              </p>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-cream/65">
                {isAr
                  ? "لا نعرض أي تقييمات مُختلقة. تقييم 5.0★ موثق على خرائط جوجل، ويمكنك قراءة التقييمات الحقيقية مباشرة من مصدرها."
                  : `We don't publish invented testimonials. Our ${BRAND.rating.value.toFixed(1)}★ rating is verified on Google Maps — read the reviews at their source, in full.`}
              </p>
              <a
                href={BRAND.mapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex h-11 items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-6 text-sm font-semibold text-gold-light transition hover:border-gold hover:bg-gold/20"
              >
                <GoogleG className="h-4 w-4" />
                {t.reviews.readAll}
              </a>
            </div>
          </Reveal>
        ) : (
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {feed.slice(0, 6).map((r, i) => (
            <Reveal key={r.id} delay={0.05 + (i % 3) * 0.06}>
              <figure className="card-hover-glow flex h-full flex-col rounded-3xl border border-gold/15 bg-night-card p-6">
                <div className="flex items-center justify-between">
                  <Stars value={r.rating} className="h-4 w-4" />
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/20 bg-gold/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-gold-light/80">
                    <GoogleG className="h-3 w-3" />
                    {r.source}
                  </span>
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-cream/70" dir="auto">
                  “{r.text}”
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-3 border-t border-gold/10 pt-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/15 font-bold text-gold-light">
                    {r.name.trim().charAt(0).toUpperCase()}
                  </span>
                  <span className="text-sm font-semibold text-cream/85">{r.name}</span>
                  <BadgeCheck className="h-4 w-4 text-whatsapp" aria-label={t.reviews.verified} />
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        )}

        <Reveal delay={0.2}>
          <p className="mt-6 text-center text-[11px] uppercase tracking-[0.24em] text-cream/40">
            {t.reviews.curatedNote}
          </p>
          <div className="mt-6 flex justify-center">
            <WhatsAppButton size="default" variant="outline" message={WA_MESSAGES.general} label={t.reviews.leaveReview} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
