import { BRAND, waLink } from "@/lib/brand";

export function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
      <span className="h-px w-8 bg-gold/60" aria-hidden="true" />
      {children}
      <span className="h-px w-8 bg-gold/60" aria-hidden="true" />
    </span>
  );
}

export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="divider-gold w-16" />
      <span className="block h-2 w-2 rotate-45 border border-gold/70 bg-gold/30" />
      <span className="divider-gold w-16" />
    </div>
  );
}

export function SectionHead({
  kicker,
  title,
  subtitle,
  align = "center",
}: {
  kicker: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "start";
}) {
  const alignCls = align === "center" ? "items-center text-center" : "items-start text-start";
  return (
    <div className={`flex flex-col gap-4 ${alignCls}`}>
      <Kicker>{kicker}</Kicker>
      <h2 className="max-w-3xl text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {subtitle ? <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">{subtitle}</p> : null}
    </div>
  );
}

/** XO monogram — gold serif XO with crimson diamond, obsidian plate. */
export function XoMonogram({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={`${className} shrink-0`} aria-hidden="true">
      <rect width="64" height="64" rx="14" className="fill-night-soft" />
      <rect x="2.5" y="2.5" width="59" height="59" rx="12" fill="none" className="stroke-gold/70" strokeWidth="2" />
      <text
        x="33"
        y="41"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="24"
        fontWeight="bold"
        letterSpacing="3"
        className="fill-gold"
      >
        XO
      </text>
      <path d="M32 48 L35 51 L32 54 L29 51 Z" className="fill-crimson-bright" />
    </svg>
  );
}

export function WhatsAppButton({
  message,
  label,
  size = "lg",
  variant = "green",
  className = "",
}: {
  message: string;
  label: string;
  size?: "default" | "lg";
  variant?: "green" | "outline";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 whitespace-nowrap";
  const sizing = size === "lg" ? "h-12 px-6 text-[15px]" : "h-10 px-4 text-sm";
  const look =
    variant === "green"
      ? "bg-whatsapp text-night hover:brightness-110 shadow-[0_8px_30px_-8px_rgba(37,211,102,0.55)]"
      : "border border-whatsapp/50 text-whatsapp hover:bg-whatsapp/10";
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizing} ${look} ${className}`}
      aria-label={label}
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
      </svg>
      {label}
    </a>
  );
}

export function CallButton({
  label,
  size = "lg",
  className = "",
}: {
  label: string;
  size?: "default" | "lg";
  className?: string;
}) {
  const sizing = size === "lg" ? "h-12 px-6 text-[15px]" : "h-10 px-4 text-sm";
  return (
    <a
      href={`tel:${BRAND.phoneDial}`}
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 bg-gold/10 font-semibold text-gold-light transition-all duration-300 hover:border-gold hover:bg-gold/20 whitespace-nowrap ${sizing} ${className}`}
      aria-label={label}
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2Z" />
      </svg>
      <span dir="ltr">{label}</span>
    </a>
  );
}

export function Stars({ value = 5, className = "h-4 w-4" }: { value?: number; className?: string }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${value} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className={`${className} ${i <= Math.round(value) ? "fill-gold" : "fill-gold/25"}`}
          aria-hidden="true"
        >
          <path d="M12 2l2.9 6.26 6.86.59-5.2 4.51 1.56 6.7L12 16.55 5.88 20.06l1.56-6.7-5.2-4.51 6.86-.59L12 2z" />
        </svg>
      ))}
    </span>
  );
}

/** Google "G" mark for the verified-rating badge. */
export function GoogleG({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47a5.57 5.57 0 0 1-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09A11.99 11.99 0 0 0 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.29A7.2 7.2 0 0 1 4.89 12c0-.8.14-1.57.38-2.29V6.62H1.29a12 12 0 0 0 0 10.76l3.98-3.09Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.69 1.29 6.62l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75Z"
      />
    </svg>
  );
}
