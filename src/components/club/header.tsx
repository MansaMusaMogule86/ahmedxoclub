"use client";

import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { dictionaries } from "@/lib/content";
import { BRAND } from "@/lib/brand";
import { XoMonogram } from "@/components/club/ui-bits";
import { cn } from "@/lib/utils";

export function Header() {
  const { lang, toggle, isAr } = useLanguage();
  const t = dictionaries[lang];
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { href: "#tonight", label: t.nav.tonight },
    { href: "#experience", label: t.nav.experience },
    { href: "#tables", label: t.nav.tables },
    { href: "#guides", label: t.nav.guides },
    { href: "#reviews", label: t.nav.reviews },
    { href: "#location", label: t.nav.location },
    { href: "#faq", label: t.nav.faq },
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "glass border-b border-gold/15 shadow-[0_10px_40px_-18px_rgba(0,0,0,0.8)]" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-3" aria-label="XO Club Dubai — home">
          <XoMonogram />
          <span className="flex flex-col leading-none">
            <span className="font-logo text-lg font-bold tracking-[0.14em]">
              <span className="text-gold">XO</span> <span className="text-cream">CLUB</span>
            </span>
            <span className="text-[9px] font-semibold tracking-[0.42em] text-gold/80">
              {isAr ? "دبي" : "DUBAI"}
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-[13px] font-medium text-cream/80 transition-colors hover:text-gold"
            >
              {n.label}
            </a>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-2">
          <a
            href={`tel:${BRAND.phoneDial}`}
            className="hidden h-11 items-center gap-2 rounded-full border border-gold/35 px-4 text-sm font-semibold text-gold-light transition hover:border-gold hover:bg-gold/10 lg:inline-flex"
            aria-label={`${t.common.call} ${BRAND.phoneDisplay}`}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span dir="ltr">{BRAND.phoneDisplay}</span>
          </a>

          {/* Mobile: compact call button — phone always visible in header */}
          <a
            href={`tel:${BRAND.phoneDial}`}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/35 text-gold-light transition hover:bg-gold/10 lg:hidden"
            aria-label={`${t.common.call} ${BRAND.phoneDisplay}`}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
          </a>

          <button
            onClick={toggle}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-sm font-bold text-gold transition hover:bg-gold/10"
            aria-label={isAr ? "Switch to English" : "التبديل إلى العربية"}
            title={isAr ? "English" : "العربية"}
          >
            {isAr ? "EN" : "ع"}
          </button>

          <a
            href="#booking"
            className="hidden h-11 items-center rounded-full bg-gold-gradient px-5 text-sm font-bold text-night shadow-[0_8px_28px_-8px_rgba(212,175,55,0.6)] transition hover:brightness-110 sm:inline-flex"
          >
            {t.nav.book}
          </a>

          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-cream xl:hidden"
            onClick={() => setOpen(true)}
            aria-label={t.nav.menu}
            aria-expanded={open}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open ? (
        <div className="fixed inset-0 z-[60] bg-night/80 backdrop-blur-sm xl:hidden" onClick={() => setOpen(false)}>
          <div
            className="absolute inset-x-4 top-4 rounded-2xl glass p-6"
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="font-logo text-lg font-bold tracking-[0.14em] text-gold">XO CLUB</span>
              <button
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-cream"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-[15px] font-medium text-cream/90 transition hover:bg-gold/10 hover:text-gold"
                >
                  {n.label}
                </a>
              ))}
            </nav>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href="#booking"
                onClick={() => setOpen(false)}
                className="inline-flex h-12 items-center justify-center rounded-full bg-gold-gradient font-bold text-night"
              >
                {t.nav.book}
              </a>
              <a
                href={`tel:${BRAND.phoneDial}`}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-gold/40 font-semibold text-gold-light"
              >
                <Phone className="h-4 w-4" />
                <span dir="ltr">{BRAND.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
