"use client";

import { Building2, Crown, Music2, Phone, ShieldCheck, Star } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { dictionaries } from "@/lib/content";
import { BRAND } from "@/lib/brand";
import { Reveal } from "@/components/club/reveal";
import { SectionHead } from "@/components/club/ui-bits";

const ICONS: Record<string, React.ReactNode> = {
  star: <Star className="h-5 w-5 fill-gold text-gold" aria-hidden="true" />,
  building: <Building2 className="h-5 w-5" aria-hidden="true" />,
  crown: <Crown className="h-5 w-5" aria-hidden="true" />,
  music: <Music2 className="h-5 w-5" aria-hidden="true" />,
  shield: <ShieldCheck className="h-5 w-5" aria-hidden="true" />,
  phone: <Phone className="h-5 w-5" aria-hidden="true" />,
};

export function Differentiators() {
  const { isAr } = useLanguage();
  const t = dictionaries[isAr ? "ar" : "en"];

  return (
    <section id="experience" className="relative bg-night-soft/60 py-20 lg:py-28" aria-label={t.why.kicker}>
      <div className="pattern-arabesque absolute inset-0 opacity-[0.04]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHead kicker={t.why.kicker} title={t.why.title} subtitle={t.why.subtitle} />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.why.items.map((item, i) => (
            <Reveal key={item.title} delay={0.05 + i * 0.05}>
              <article className="card-hover-glow group h-full rounded-3xl border border-gold/15 bg-night-card p-6">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 text-gold transition group-hover:bg-gold/20">
                  {ICONS[item.icon] ?? ICONS.star}
                </span>
                <h3 className="mt-5 text-lg font-bold text-cream">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-cream/60">{item.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-10 text-center text-sm font-semibold tracking-wide text-gold-light" dir="ltr">
            {BRAND.address.full} · {BRAND.phoneDisplay}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
