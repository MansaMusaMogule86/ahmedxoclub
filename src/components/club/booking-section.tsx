"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, CalendarDays, Check, CheckCircle2, MessageCircle, Phone, Users } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { useLanguage } from "@/lib/i18n";
import { dictionaries } from "@/lib/content";
import { BRAND, TABLE_TYPES, WA_MESSAGES } from "@/lib/brand";
import { useBookingStore } from "@/lib/booking-store";
import { Reveal } from "@/components/club/reveal";
import { SectionHead, WhatsAppButton } from "@/components/club/ui-bits";
import { cn } from "@/lib/utils";

interface Fields {
  date: string;
  guests: number;
  name: string;
  phone: string;
  email: string;
  occasion: string;
  notes: string;
  consent: boolean;
}

interface Result {
  reference: string;
  whatsappUrl: string;
}

export function BookingSection() {
  const { lang } = useLanguage();
  const t = dictionaries[lang];
  const storeTable = useBookingStore((s) => s.tableType);
  const setTableType = useBookingStore((s) => s.setTableType);

  const [step, setStep] = useState(1);
  const [fields, setFields] = useState<Fields>({
    date: "",
    guests: 5,
    name: "",
    phone: "+971 ",
    email: "",
    occasion: "",
    notes: "",
    consent: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    setFields((f) => ({ ...f, guests: useBookingStore.getState().guests }));
    const fmt = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Dubai", year: "numeric", month: "2-digit", day: "2-digit" });
    setMinDate(fmt.format(new Date()));
  }, []);

  const set = <K extends keyof Fields>(key: K, value: Fields[K]) => setFields((f) => ({ ...f, [key]: value }));

  const tableDef = useMemo(() => TABLE_TYPES.find((x) => x.key === storeTable) ?? TABLE_TYPES[1], [storeTable]);

  const stepMeta = [
    { n: 1, label: t.booking.step1, desc: t.booking.step1Desc },
    { n: 2, label: t.booking.step2, desc: t.booking.step2Desc },
    { n: 3, label: t.booking.step3, desc: t.booking.step3Desc },
  ];

  const validateStep1 = () => {
    if (!fields.date) {
      toast.error(t.booking.errDate);
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    if (fields.name.trim().length < 2) {
      toast.error(t.booking.errName);
      return false;
    }
    if (!/^[+0-9][0-9 ()\-]{5,}$/.test(fields.phone.trim())) {
      toast.error(t.booking.errPhone);
      return false;
    }
    return true;
  };

  const submit = async () => {
    if (!fields.consent) {
      toast.error(t.booking.errConsent);
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fields.name.trim(),
          phone: fields.phone.trim(),
          email: fields.email.trim(),
          date: fields.date,
          guests: fields.guests,
          tableType: storeTable,
          occasion: fields.occasion.trim(),
          notes: fields.notes.trim(),
          consent: fields.consent,
        }),
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        setResult({ reference: data.booking.reference, whatsappUrl: data.whatsappUrl });
      } else {
        toast.error(data.error || t.booking.errGeneric);
      }
    } catch {
      toast.error(t.booking.errGeneric);
    } finally {
      setSubmitting(false);
    }
  };

  const arrowIcon = lang === "ar" ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />;
  const backIcon = lang === "ar" ? <ArrowRight className="h-4 w-4" /> : <ArrowLeft className="h-4 w-4" />;

  return (
    <section id="booking" className="relative bg-night-soft/60 py-20 lg:py-28" aria-label={t.booking.title}>
      <div className="pattern-arabesque absolute inset-0 opacity-[0.05]" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal>
          <SectionHead kicker={t.booking.kicker} title={t.booking.title} subtitle={t.booking.subtitle} />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-12 rounded-3xl glass p-6 sm:p-8 lg:p-10">
            {result ? (
              /* ---------- SUCCESS ---------- */
              <div className="flex flex-col items-center py-6 text-center" role="status">
                <CheckCircle2 className="h-16 w-16 text-whatsapp" aria-hidden="true" />
                <h3 className="mt-4 font-display text-2xl font-black text-cream sm:text-3xl">{t.booking.successTitle}</h3>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-cream/70">{t.booking.successBody(result.reference)}</p>
                <p className="mt-4 rounded-xl border border-gold/40 bg-gold/10 px-5 py-2.5 font-mono text-xl font-black tracking-[0.2em] text-gold" dir="ltr">
                  {result.reference}
                </p>
                <a
                  href={result.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-whatsapp px-7 font-bold text-night shadow-[0_8px_30px_-8px_rgba(37,211,102,0.55)] transition hover:brightness-110"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  {t.booking.successWa}
                </a>
                <p className="mt-4 text-xs text-cream/50">{t.booking.successNote}</p>
                <p className="mt-1 text-xs text-cream/50">
                  {t.common.call}: <a href={`tel:${BRAND.phoneDial}`} className="font-semibold text-gold-light" dir="ltr">{BRAND.phoneDisplay}</a>
                </p>
                <button
                  onClick={() => {
                    setResult(null);
                    setStep(1);
                  }}
                  className="mt-6 text-sm font-medium text-cream/60 underline-offset-4 transition hover:text-gold hover:underline"
                >
                  {t.booking.another}
                </button>
              </div>
            ) : (
              <>
                {/* ---------- PROGRESS ---------- */}
                <div className="mb-8">
                  <div className="flex items-center justify-between">
                    {stepMeta.map((s) => (
                      <div key={s.n} className="flex flex-1 items-center gap-3 last:flex-none">
                        <div className="flex items-center gap-2.5">
                          <span
                            className={cn(
                              "flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold transition",
                              step > s.n
                                ? "bg-whatsapp/20 text-whatsapp ring-1 ring-whatsapp/50"
                                : step === s.n
                                  ? "bg-gold-gradient font-black text-night"
                                  : "bg-night text-cream/40 ring-1 ring-gold/20"
                            )}
                          >
                            {step > s.n ? <Check className="h-4 w-4" aria-hidden="true" /> : s.n}
                          </span>
                          <span className="hidden flex-col sm:flex">
                            <span className={cn("text-xs font-bold", step >= s.n ? "text-cream" : "text-cream/40")}>{s.label}</span>
                            <span className="text-[11px] text-cream/40">{s.desc}</span>
                          </span>
                        </div>
                        {s.n < 3 ? <div className={cn("h-px flex-1", step > s.n ? "bg-whatsapp/50" : "bg-gold/15")} /> : null}
                      </div>
                    ))}
                  </div>
                  <Progress value={(step / 3) * 100} className="mt-4 h-1.5 bg-night" />
                </div>

                {/* ---------- STEP 1 ---------- */}
                {step === 1 ? (
                  <div className="space-y-6">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="bk-date" className="text-cream/80">
                          {t.booking.date}
                        </Label>
                        <div className="relative">
                          <CalendarDays className="pointer-events-none absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gold/70" aria-hidden="true" />
                          <Input
                            id="bk-date"
                            type="date"
                            min={minDate}
                            value={fields.date}
                            onChange={(e) => set("date", e.target.value)}
                            className="h-12 rounded-xl border-gold/25 bg-night ps-10 text-cream [color-scheme:dark]"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bk-guests" className="text-cream/80">
                          {t.booking.guests}
                        </Label>
                        <Select value={String(fields.guests)} onValueChange={(v) => set("guests", Number(v))}>
                          <SelectTrigger id="bk-guests" className="h-12 rounded-xl border-gold/25 bg-night text-cream">
                            <Users className="me-2 h-4 w-4 text-gold/70" aria-hidden="true" />
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="max-h-72 border-gold/25 bg-popover text-cream">
                            {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                              <SelectItem key={n} value={String(n)}>
                                {t.booking.guestsUnit(n)}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-cream/80">{t.booking.tableType}</Label>
                      <div className="grid gap-3 sm:grid-cols-3" role="radiogroup" aria-label={t.booking.tableType}>
                        {TABLE_TYPES.map((tab) => (
                          <button
                            key={tab.key}
                            type="button"
                            role="radio"
                            aria-checked={storeTable === tab.key}
                            onClick={() => setTableType(tab.key)}
                            className={cn(
                              "rounded-2xl border p-4 text-start transition-all duration-200",
                              storeTable === tab.key
                                ? "border-gold bg-gold/10 shadow-[0_0_24px_-8px_rgba(212,175,55,0.5)]"
                                : "border-gold/15 hover:border-gold/45"
                            )}
                          >
                            <span className="flex items-center justify-between gap-2">
                              <span className="text-sm font-bold text-cream" dir="auto">{lang === "ar" ? tab.nameAr : tab.name}</span>
                              {storeTable === tab.key ? <Check className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" /> : null}
                            </span>
                            <span className="mt-1 block text-xs text-gold-light" dir="auto">
                              {lang === "ar" ? tab.seatsAr : tab.seats}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => validateStep1() && setStep(2)}
                      className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gold-gradient font-bold text-night transition hover:brightness-110"
                    >
                      {t.booking.next} {arrowIcon}
                    </button>
                  </div>
                ) : null}

                {/* ---------- STEP 2 ---------- */}
                {step === 2 ? (
                  <div className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="bk-name" className="text-cream/80">{t.booking.name}</Label>
                        <Input
                          id="bk-name"
                          value={fields.name}
                          onChange={(e) => set("name", e.target.value)}
                          placeholder={t.booking.namePh}
                          autoComplete="name"
                          className="h-12 rounded-xl border-gold/25 bg-night text-cream placeholder:text-cream/30"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bk-phone" className="text-cream/80">{t.booking.phone}</Label>
                        <Input
                          id="bk-phone"
                          type="tel"
                          dir="ltr"
                          value={fields.phone}
                          onChange={(e) => set("phone", e.target.value)}
                          placeholder={t.booking.phonePh}
                          autoComplete="tel"
                          className="h-12 rounded-xl border-gold/25 bg-night text-cream placeholder:text-cream/30"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bk-email" className="text-cream/80">{t.booking.email}</Label>
                        <Input
                          id="bk-email"
                          type="email"
                          dir="ltr"
                          value={fields.email}
                          onChange={(e) => set("email", e.target.value)}
                          placeholder={t.booking.emailPh}
                          autoComplete="email"
                          className="h-12 rounded-xl border-gold/25 bg-night text-cream placeholder:text-cream/30"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bk-occasion" className="text-cream/80">{t.booking.occasion}</Label>
                        <Input
                          id="bk-occasion"
                          value={fields.occasion}
                          onChange={(e) => set("occasion", e.target.value)}
                          placeholder={t.booking.occasionPh}
                          className="h-12 rounded-xl border-gold/25 bg-night text-cream placeholder:text-cream/30"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bk-notes" className="text-cream/80">{t.booking.notes}</Label>
                      <Textarea
                        id="bk-notes"
                        value={fields.notes}
                        onChange={(e) => set("notes", e.target.value)}
                        placeholder={t.booking.notesPh}
                        rows={3}
                        className="resize-none rounded-xl border-gold/25 bg-night text-cream placeholder:text-cream/30"
                      />
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <button
                        onClick={() => setStep(1)}
                        className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full border border-gold/40 font-semibold text-gold-light transition hover:bg-gold/10"
                      >
                        {backIcon} {t.booking.back}
                      </button>
                      <button
                        onClick={() => validateStep2() && setStep(3)}
                        className="inline-flex h-12 flex-[2] items-center justify-center gap-2 rounded-full bg-gold-gradient font-bold text-night transition hover:brightness-110"
                      >
                        {t.booking.next} {arrowIcon}
                      </button>
                    </div>
                  </div>
                ) : null}

                {/* ---------- STEP 3 ---------- */}
                {step === 3 ? (
                  <div className="space-y-6">
                    <div className="rounded-2xl border border-gold/20 bg-night/60 p-5">
                      <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gold">{t.booking.reviewTitle}</h3>
                      <dl className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                        {[
                          [t.booking.date, fields.date],
                          [t.booking.guests, t.booking.guestsUnit(fields.guests)],
                          [t.booking.tableType, lang === "ar" ? tableDef.nameAr : tableDef.name],
                          [t.common.writtenQuote, BRAND.phoneDisplay],
                          [t.booking.name, fields.name],
                          [t.booking.phone, fields.phone],
                          ...(fields.occasion ? [[t.booking.occasion, fields.occasion] as [string, string]] : []),
                        ].map(([k, v]) => (
                          <div key={k as string} className="flex items-baseline justify-between gap-3 border-b border-gold/10 pb-2">
                            <dt className="text-xs text-cream/50">{k}</dt>
                            <dd className="text-sm font-semibold text-cream/90" dir={k === t.booking.phone || v === BRAND.phoneDisplay ? "ltr" : undefined}>
                              {v}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>

                    <label className="flex cursor-pointer items-start gap-3 text-sm text-cream/70">
                      <Checkbox
                        checked={fields.consent}
                        onCheckedChange={(v) => set("consent", v === true)}
                        className="mt-0.5 border-gold/40 data-[state=checked]:border-gold data-[state=checked]:bg-gold data-[state=checked]:text-night"
                        aria-label={t.booking.consent}
                      />
                      {t.booking.consent}
                    </label>

                    <div className="flex flex-col gap-3 sm:flex-row">
                      <button
                        onClick={() => setStep(2)}
                        className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full border border-gold/40 font-semibold text-gold-light transition hover:bg-gold/10"
                      >
                        {backIcon} {t.booking.back}
                      </button>
                      <button
                        onClick={submit}
                        disabled={submitting}
                        className="inline-flex h-12 flex-[2] items-center justify-center gap-2 rounded-full bg-gold-gradient font-bold text-night transition hover:brightness-110 disabled:opacity-60"
                      >
                        {submitting ? t.booking.submitting : t.booking.submit}
                        {!submitting ? <Check className="h-4 w-4" aria-hidden="true" /> : null}
                      </button>
                    </div>
                  </div>
                ) : null}

                {/* ---------- FOOT NOTE ---------- */}
                <div className="mt-8 border-t border-gold/10 pt-5">
                  <p className="flex items-center justify-center gap-2 text-center text-xs text-cream/50">
                    <Phone className="h-3.5 w-3.5 text-gold/70" aria-hidden="true" />
                    <span dir="ltr">{BRAND.phoneDisplay}</span> · {t.booking.phoneHelp}
                  </p>
                  <div className="mt-3 flex justify-center">
                    <WhatsAppButton size="default" variant="outline" message={WA_MESSAGES.general} label={t.booking.orWhatsapp} />
                  </div>
                </div>
              </>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
