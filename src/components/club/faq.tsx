"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/lib/i18n";
import { dictionaries } from "@/lib/content";
import { FAQS } from "@/lib/faq";
import { Reveal } from "@/components/club/reveal";
import { SectionHead, WhatsAppButton } from "@/components/club/ui-bits";
import { WA_MESSAGES } from "@/lib/brand";

export function FaqSection() {
  const { isAr } = useLanguage();
  const t = dictionaries[isAr ? "ar" : "en"];

  return (
    <section id="faq" className="relative py-20 lg:py-28" aria-label={t.faq.kicker}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal>
          <SectionHead kicker={t.faq.kicker} title={t.faq.title} subtitle={t.faq.subtitle} />
        </Reveal>

        <Reveal delay={0.08}>
          <Accordion type="single" collapsible className="mt-10">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-gold/15">
                <AccordionTrigger className="text-start text-[15px] font-semibold text-cream/90 hover:text-gold hover:no-underline [&>svg]:text-gold">
                  <span dir="auto">{isAr ? f.qAr : f.q}</span>
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-cream/65">
                  <span dir="auto">{isAr ? f.aAr : f.a}</span>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-8 flex justify-center">
            <WhatsAppButton size="default" variant="outline" message={WA_MESSAGES.general} label={t.common.whatsapp} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
