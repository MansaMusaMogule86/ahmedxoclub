"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { premiumCopy } from "@/lib/premium";
import { BRAND, WA_MESSAGES } from "@/lib/brand";
import { Reveal } from "@/components/club/reveal";
import { MediaPlaceholder } from "@/components/club/media-placeholder";
import { SectionHead, WhatsAppButton } from "@/components/club/ui-bits";

/**
 * VIP & EXPERIENCES — VIP Tables · Bottle Service · Club Atmosphere ·
 * Private Events · Music & Entertainment.
 *
 * Each slot reserves a 4:3 media area. If an entry has approved photography it
 * is rendered; if `image` is null the dimension-preserving XO placeholder is
 * shown instead, so an unapproved or missing photo can never break the layout
 * or masquerade as the real venue.
 */
export function ExperiencesSection() {
  const { isAr } = useLanguage();
  const copy = premiumCopy(isAr);
  const p = copy.experiences;

  return (
    <section id="experiences" className="relative bg-night-soft/60 py-20 lg:py-28" aria-label={p.kicker}>
      <div className="pattern-dots absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHead kicker={p.kicker} title={p.title} subtitle={p.subtitle} />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {p.items.map((item, i) => (
            <Reveal key={item.key} delay={0.04 + (i % 3) * 0.05}>
              <article className="hover-lift flex h-full flex-col overflow-hidden rounded-3xl border border-gold/15 bg-night-card hover:border-gold/40">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={`${item.name} at XO Club Dubai — Radisson Blu Hotel, Dubai Waterfront. Bookings ${BRAND.phoneDisplay}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  ) : (
                    <MediaPlaceholder
                      ratio="auto"
                      label={p.photoPending}
                      assetPath={`images/experience/${item.key}.webp`}
                      className="h-full w-full rounded-none border-0"
                    />
                  )}
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night-card via-transparent to-transparent"
                    aria-hidden="true"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg font-bold text-cream">{item.name}</h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-cream/65">{item.blurb}</p>
                  <Link
                    href={item.href}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold-light transition hover:text-gold"
                  >
                    {isAr ? "لمعرفة المزيد" : "Explore"}
                    <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.16}>
          <div className="mt-12 flex flex-col items-center gap-3 text-center">
            <WhatsAppButton size="lg" message={WA_MESSAGES.general} label={copy.common.reserveTable} />
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cream/45">
              {copy.common.reservedNote}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
