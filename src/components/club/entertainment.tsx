"use client";

import { useLanguage } from "@/lib/i18n";
import { dictionaries } from "@/lib/content";
import { PERFORMER_SLOTS, premiumCopy, type PerformerSlot } from "@/lib/premium";
import { WA_MESSAGES } from "@/lib/brand";
import { Reveal } from "@/components/club/reveal";
import { PerformerPlaceholder } from "@/components/club/media-placeholder";
import { SectionHead, WhatsAppButton } from "@/components/club/ui-bits";

/**
 * ENTERTAINMENT — six prepared performer slots (3 resident DJs + 3 XO dancers).
 *
 * Every profile supports: real name · approved photograph · biography ·
 * Instagram · specialty · scheduled days · performance time. With no approved
 * data supplied yet, EVERY value renders as an explicit "To Be Announced"
 * state and the photograph as a dimension-preserving placeholder — no names,
 * biographies, handles or weekly schedules are invented.
 *
 * The slots already point at the reserved asset paths
 * (/images/entertainment/djs/dj-0N.webp, /images/entertainment/dancers/dancer-0N.webp):
 * dropping approved photos in publishes them without any layout change.
 */
export function EntertainmentSection() {
  const { isAr } = useLanguage();
  const t = dictionaries[isAr ? "ar" : "en"];
  const p = premiumCopy(isAr).entertainment;

  const slotFields = [
    { label: p.fields.name, value: p.tba },
    { label: p.fields.bio, value: p.tba },
    { label: p.fields.instagram, value: p.tba },
    { label: p.fields.specialty, value: p.tba },
    { label: p.fields.days, value: p.tba },
    { label: p.fields.time, value: p.tba },
  ];

  const groups: { title: string; slots: PerformerSlot[] }[] = [
    { title: p.residents, slots: PERFORMER_SLOTS.filter((s) => s.kind === "dj") },
    { title: p.dancers, slots: PERFORMER_SLOTS.filter((s) => s.kind === "dancer") },
  ];

  return (
    <section id="entertainment" className="relative py-20 lg:py-28" aria-label={p.kicker}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHead kicker={p.kicker} title={p.title} subtitle={p.subtitle} />
        </Reveal>

        {groups.map((group, gi) => (
          <div key={group.title} className="mt-14">
            <Reveal delay={0.05}>
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="font-display text-xl font-bold text-cream sm:text-2xl">{group.title}</h3>
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold/75">
                  {p.pendingPhoto}
                </p>
              </div>
              <span
                className="mt-3 block h-px w-24 bg-gradient-to-e from-gold to-transparent"
                aria-hidden="true"
              />
            </Reveal>

            <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {group.slots.map((slot, i) => (
                <Reveal key={slot.key} delay={0.05 + (gi * 0.05) + (i % 3) * 0.05}>
                  <PerformerPlaceholder
                    ratio="4 / 5"
                    slotLabel={`${p.slot} 0${i + 1} · ${p.tba}`}
                    fields={slotFields}
                    assetPath={slot.image}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        ))}

        <Reveal delay={0.15}>
          <div className="glass mx-auto mt-14 flex max-w-3xl flex-col items-center gap-4 rounded-3xl p-6 text-center sm:flex-row sm:text-start">
            <p className="flex-1 text-sm leading-relaxed text-cream/70">{p.note}</p>
            <WhatsAppButton size="default" message={WA_MESSAGES.tonight} label={t.common.whatsapp} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
