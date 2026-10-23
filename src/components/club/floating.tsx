"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { dictionaries } from "@/lib/content";
import { BRAND, WA_MESSAGES } from "@/lib/brand";
import { WhatsAppButton } from "@/components/club/ui-bits";

/** Floating WhatsApp orb (desktop) + thumb-zone call/WA bar (mobile). */
export function FloatingCtas() {
  const { lang } = useLanguage();
  const t = dictionaries[lang];
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBar(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Desktop floating WhatsApp */}
      <div className="fixed bottom-6 end-6 z-40 hidden md:flex flex-col items-end gap-2">
        <span className="rounded-full glass px-3.5 py-1.5 text-xs font-semibold text-cream/85 shadow-lg">
          {t.common.reserve} · <span dir="ltr">{BRAND.phoneDisplay}</span>
        </span>
        <a
          href={`https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(WA_MESSAGES.general)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${t.common.whatsapp} ${BRAND.phoneDisplay}`}
          className="group flex h-16 w-16 animate-pulse-ring items-center justify-center rounded-full bg-whatsapp text-night shadow-[0_10px_36px_-6px_rgba(37,211,102,0.6)] transition hover:scale-105"
        >
          <svg viewBox="0 0 24 24" className="h-8 w-8 fill-night" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
          </svg>
        </a>
      </div>

      {/* Mobile thumb-zone bar */}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 transition-transform duration-500 md:hidden ${
          showBar ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="glass mx-3 mb-3 grid grid-cols-2 gap-2 rounded-2xl p-2 shadow-[0_-8px_30px_-10px_rgba(0,0,0,0.8)]">
          <a
            href={`tel:${BRAND.phoneDial}`}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-gold/40 text-sm font-bold text-gold-light"
            aria-label={`${t.mobileBar.call} ${BRAND.phoneDisplay}`}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {t.mobileBar.call}
          </a>
          <a
            href={`https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(WA_MESSAGES.general)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-whatsapp text-sm font-bold text-night"
            aria-label={`${t.mobileBar.whatsapp} ${BRAND.phoneDisplay}`}
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-night" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            {t.mobileBar.whatsapp}
          </a>
        </div>
      </div>
    </>
  );
}
