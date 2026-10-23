"use client";

import { Disc3, Guitar, Mic2, Waves } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { dictionaries } from "@/lib/content";
import { WA_MESSAGES } from "@/lib/brand";
import { Reveal } from "@/components/club/reveal";
import { SectionHead, WhatsAppButton } from "@/components/club/ui-bits";

const GENRE_ICONS = [Mic2, Waves, Disc3, Guitar];

export function Music() {
  const { isAr } = useLanguage();
  const t = dictionaries[isAr ? "ar" : "en"];

  return (
    <section id="music" className="relative py-20 lg:py-28" aria-label={t.music.kicker}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHead kicker={t.music.kicker} title={t.music.title} subtitle={t.music.subtitle} />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.music.genres.map((g, i) => {
            const Icon = GENRE_ICONS[i % GENRE_ICONS.length];
            return (
              <Reveal key={g.name} delay={0.05 + i * 0.06}>
                <article className="card-hover-glow relative h-full overflow-hidden rounded-3xl border border-gold/15 bg-night-card p-6 text-center">
                  <div
                    className="absolute inset-x-0 top-0 h-1 bg-crimson-gradient opacity-70"
                    aria-hidden="true"
                  />
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-cream" dir="auto">
                    {g.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/60" dir="auto">
                    {g.desc}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-9 flex justify-center">
            <WhatsAppButton size="default" variant="outline" message={WA_MESSAGES.general} label={t.music.cta} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
