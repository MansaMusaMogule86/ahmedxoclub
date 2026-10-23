"use client";

import { useEffect, useRef, useState } from "react";
import { GlassWater, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLanguage } from "@/lib/i18n";
import { dictionaries } from "@/lib/content";
import { BRAND, WA_MESSAGES } from "@/lib/brand";
import { Stars } from "@/components/club/ui-bits";

const SESSION_KEY = "xo-exit-shown";
const HOLD_SECONDS = 10 * 60;

export function ExitIntent() {
  const { lang } = useLanguage();
  const t = dictionaries[lang];
  const [open, setOpen] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(HOLD_SECONDS);
  const shownRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.sessionStorage.getItem(SESSION_KEY)) return;

    const trigger = () => {
      if (shownRef.current) return;
      shownRef.current = true;
      window.sessionStorage.setItem(SESSION_KEY, "1");
      setOpen(true);
    };

    // Desktop: exit intent (cursor leaves viewport top)
    const onMouseOut = (e: MouseEvent) => {
      if (e.relatedTarget === null && e.clientY <= 8) trigger();
    };
    // Mobile fallback: long dwell
    const timer = window.setTimeout(trigger, 45_000);

    document.addEventListener("mouseout", onMouseOut);
    return () => {
      document.removeEventListener("mouseout", onMouseOut);
      window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const id = setInterval(() => setSecondsLeft((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, [open]);

  const mm = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const ss = String(secondsLeft % 60).padStart(2, "0");

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md rounded-3xl border-gold/40 bg-night-card p-8 text-center" showCloseButton={false} dir={lang === "ar" ? "rtl" : "ltr"}>
        <button
          onClick={() => setOpen(false)}
          className="absolute end-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold/25 text-cream/60 transition hover:text-gold"
          aria-label={t.exit.stay}
        >
          <X className="h-4 w-4" />
        </button>
        <DialogHeader className="items-center space-y-0">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 ring-1 ring-gold/40">
            <GlassWater className="h-8 w-8 text-gold" aria-hidden="true" />
          </div>
          <DialogTitle className="font-display text-2xl font-black leading-snug text-cream">{t.exit.title}</DialogTitle>
          <DialogDescription className="mt-3 text-sm leading-relaxed text-cream/70">{t.exit.body}</DialogDescription>
        </DialogHeader>
        <div className="mt-4 flex justify-center" aria-label="5.0 stars">
          <Stars value={5} className="h-5 w-5" />
        </div>
        <div className="mt-4" dir="ltr">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cream/45">{t.exit.timer}</p>
          <p className="mt-1 font-mono text-4xl font-black tracking-widest text-gold" aria-live="off">
            {mm}:{ss}
          </p>
        </div>
        <a
          href={`https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(WA_MESSAGES.exit)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-whatsapp font-bold text-night transition hover:brightness-110"
        >
          {t.exit.claim} · <span dir="ltr">{BRAND.phoneDisplay}</span>
        </a>
        <button
          onClick={() => setOpen(false)}
          className="mt-3 text-xs font-medium text-cream/45 underline-offset-4 transition hover:text-cream/70 hover:underline"
        >
          {t.exit.stay}
        </button>
      </DialogContent>
    </Dialog>
  );
}
