"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { premiumCopy } from "@/lib/premium";
import { BRAND, WA_MESSAGES } from "@/lib/brand";
import { Reveal } from "@/components/club/reveal";
import { Kicker, WhatsAppButton } from "@/components/club/ui-bits";

/** The approved entrance photograph (1553x1013, ~3:2) — real asset, not generated. */
const ENTRANCE_IMG = "/images/entrance/xo-entrance.webp";

/**
 * "STEP INTO XO." — the approved entrance image sits immediately after the
 * video hero, with a gentle scroll parallax that is disabled under
 * prefers-reduced-motion. The image is lazy-loaded (below the fold) and the
 * aspect ratio is reserved so the section cannot shift on load.
 */
export function EntranceSection() {
  const { isAr } = useLanguage();
  const p = premiumCopy(isAr);
  const wrapRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-3.5%", "3.5%"]);

  return (
    <section id="entrance" className="relative bg-night py-20 lg:py-28" aria-label={p.entrance.title}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-col gap-4">
            <Kicker>{p.entrance.kicker}</Kicker>
            <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight text-cream sm:text-4xl lg:text-[2.75rem]">
              {p.entrance.title}
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-cream/70">{p.entrance.body}</p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <figure
            ref={wrapRef}
            className="relative mt-12 overflow-hidden rounded-3xl border border-gold/20 bg-night-soft"
          >
            {/* Reserved ratio: 3:2 source, cinematic band on wider screens. */}
            <div className="relative aspect-[3/2] sm:aspect-[16/9]">
              <motion.div className="absolute inset-0" style={reduceMotion ? undefined : { y }}>
                <Image
                  src={ENTRANCE_IMG}
                  alt={`XO Club Dubai entrance — ${BRAND.address.full}. Reservations ${BRAND.phoneDisplay}`}
                  fill
                  sizes="(max-width: 1280px) 100vw, 1200px"
                  className="scale-[1.07] object-cover object-center"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-night via-night/25 to-transparent" aria-hidden="true" />
              <figcaption className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-5 p-6 sm:flex-row sm:items-end sm:justify-between sm:p-8">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold-light">
                    {p.entrance.caption}
                  </p>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-cream/75">
                    {BRAND.hours.spec} · {BRAND.agePolicy}
                  </p>
                </div>
                <WhatsAppButton size="lg" message={WA_MESSAGES.vip} label={p.entrance.cta} />
              </figcaption>
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
