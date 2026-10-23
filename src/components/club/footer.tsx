"use client";

import { Clock, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { dictionaries } from "@/lib/content";
import { BRAND } from "@/lib/brand";
import { XoMonogram } from "@/components/club/ui-bits";

export function Footer() {
  const { isAr } = useLanguage();
  const t = dictionaries[isAr ? "ar" : "en"];
  const year = 2026;

  const explore = [
    { href: "#tonight", label: t.nav.tonight },
    { href: "#experience", label: t.nav.experience },
    { href: "#tables", label: t.nav.tables },
    { href: "#events", label: t.nav.events },
    { href: "#guides", label: t.nav.guides },
    { href: "#reviews", label: t.nav.reviews },
    { href: "#faq", label: t.nav.faq },
  ];

  return (
    <footer className="mt-auto border-t border-gold/15 bg-night-soft" aria-label="Footer">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.8fr_1.1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <XoMonogram />
              <span className="flex flex-col leading-none">
                <span className="font-logo text-xl font-bold tracking-[0.14em]">
                  <span className="text-gold">XO</span> <span className="text-cream">CLUB</span>
                </span>
                <span className="text-[9px] font-semibold tracking-[0.42em] text-gold/80">
                  {isAr ? "دبي" : "DUBAI"}
                </span>
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/60" dir="auto">
              {t.footer.about}
            </p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-xs font-bold text-gold-light">
              ★ 5.0 — {isAr ? "تقييم موثق على جوجل" : "Verified Google Rating"}
            </p>
          </div>

          {/* Explore */}
          <nav aria-label={t.footer.explore}>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.26em] text-gold/85">
              {t.footer.explore}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {explore.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-cream/65 transition hover:text-gold">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact & NAP */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.26em] text-gold/85">
              {t.footer.contact}
            </h3>
            <address className="mt-4 space-y-3 not-italic">
              <p className="flex items-start gap-2.5 text-sm text-cream/70" dir="auto">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold/80" aria-hidden="true" />
                <span>
                  {BRAND.address.hotel}
                  <br />
                  {BRAND.address.floor}, {BRAND.address.area}
                  <br />
                  {BRAND.address.city}, {BRAND.address.countryName}
                </span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-gold/80" aria-hidden="true" />
                <a
                  href={`tel:${BRAND.phoneDial}`}
                  className="text-base font-black text-gold-light transition hover:text-gold"
                  dir="ltr"
                >
                  {BRAND.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2.5 text-sm text-cream/70" dir="auto">
                <Clock className="h-4 w-4 shrink-0 text-gold/80" aria-hidden="true" />
                {isAr ? t.footer.hours : "Open 7 days · Daily 11 PM – 4 AM"}
              </p>
            </address>
            <a
              href="#booking"
              className="mt-5 inline-flex h-11 items-center rounded-full bg-gold-gradient px-6 text-sm font-bold text-night transition hover:brightness-110"
            >
              {t.footer.reservations.replace("+971 50 373 7162", "")}
              <span dir="ltr" className="ms-1">{BRAND.phoneDisplay}</span>
            </a>
          </div>
        </div>

        {/* Popular searches — internal SEO strip */}
        <div className="mt-12 border-t border-gold/10 pt-8">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.26em] text-cream/40">
            {t.footer.popular}
          </h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {t.footer.popularLinks.map((p) => (
              <li
                key={p}
                className="rounded-full border border-gold/15 px-3.5 py-1.5 text-xs text-cream/55"
                dir="auto"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-gold/10 pt-6 text-xs text-cream/40 sm:flex-row">
          <p dir="auto">© {year} {BRAND.name}. {t.footer.rights}</p>
          <p className="flex items-center gap-2" dir="auto">
            <span>{t.footer.legal}</span>
            <span aria-hidden="true">·</span>
            <span className="text-gold/70">{t.footer.madeIn}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
