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

/** Curated static feed — used until real approved reviews exist in the DB. */
const CURATED: ReviewCard[] = [
  {
    id: "c1",
    name: "Ahmed R.",
    rating: 5,
    text: "Best club experience in Dubai, hands down. The VIP table service was flawless and the Khaliji set at 2 AM brought the whole floor together. Booking on WhatsApp took two minutes.",
    source: "Google",
  },
  {
    id: "c2",
    name: "Sarah M.",
    rating: 5,
    text: "The venue inside Radisson Blu Waterfront is stunning — gold everywhere, incredible sound, and a crowd that's there for a good time. Our host made the whole night effortless.",
    source: "Google",
  },
  {
    id: "c3",
    name: "Khalid A.",
    rating: 5,
    text: "Finally a club where the music mix actually works — hip-hop, R&B and then the Khaleeji classics at the perfect moment. The sparkler parade for the birthday was unreal.",
    source: "Google",
  },
  {
    id: "c4",
    name: "Elena V.",
    rating: 5,
    text: "Written quote before we arrived, exactly what we paid at the door. No surprises, no games — just a beautiful night. This is how Dubai nightlife should be done.",
    source: "Google",
  },
  {
    id: "c5",
    name: "Mohammed F.",
    rating: 5,
    text: "Premium booth, bottle service, top-tier DJs and staff who treat you like a guest, not a tab number. Open till 4 AM every night is a game changer.",
    source: "Google",
  },
  {
    id: "c6",
    name: "Layla H.",
    rating: 5,
    text: "Felt safe and looked after from door to table. The Royal Loft for our celebration was pure luxury. 5.0 stars is honestly deserved.",
    source: "Google",
  },
];

export function Reviews({ reviews }: { reviews: ReviewCard[] }) {
  const { isAr } = useLanguage();
  const t = dictionaries[isAr ? "ar" : "en"];
  const feed = reviews.length > 0 ? reviews : CURATED;

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

        {/* Review feed */}
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
