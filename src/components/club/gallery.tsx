"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";
import { dictionaries } from "@/lib/content";
import { Reveal } from "@/components/club/reveal";
import { SectionHead } from "@/components/club/ui-bits";

const SHOTS = [
  "/images/interior.png",
  "/images/vip-table.png",
  "/images/dj.png",
  "/images/crowd.png",
  "/images/bottle-service.png",
  "/images/entrance.png",
  "/images/private-events.png",
  "/images/hero.png",
];

export function Gallery() {
  const { isAr } = useLanguage();
  const t = dictionaries[isAr ? "ar" : "en"];

  const loop = [...SHOTS, ...SHOTS];

  return (
    <section id="gallery" className="relative overflow-hidden py-20 lg:py-28" aria-label={t.gallery.kicker}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHead kicker={t.gallery.kicker} title={t.gallery.title} subtitle={t.gallery.subtitle} />
        </Reveal>
      </div>

      {/* Marquee strip */}
      <Reveal delay={0.1}>
        <div className="marquee-wrap relative mt-12" dir="ltr" aria-hidden="true">
          <div className="animate-marquee flex w-max gap-4">
            {loop.map((src, i) => (
              <div
                key={`${src}-${i}`}
                className="relative h-56 w-80 shrink-0 overflow-hidden rounded-2xl border border-gold/15 sm:h-64 sm:w-96"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="384px"
                  className="object-cover transition duration-500 hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/60 to-transparent" />
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 start-0 w-16 bg-gradient-to-r from-night to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 end-0 w-16 bg-gradient-to-l from-night to-transparent" />
        </div>
      </Reveal>

      <div className="mx-auto mt-8 max-w-7xl px-4 text-center sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold/70">
          XO Club Dubai · Radisson Blu Waterfront · +971 50 373 7162
        </p>
      </div>
    </section>
  );
}
