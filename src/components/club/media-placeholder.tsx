import { cn } from "@/lib/utils";

/**
 * Dimension-preserving placeholder for approved photography.
 *
 * Rules it enforces:
 * - no generated / downloaded / substituted imagery is ever rendered here;
 * - the parent reserves the final aspect ratio, so dropping the real photo in
 *   later cannot shift the layout (no CLS);
 * - the public site never shows a broken-image icon, a dev filename or an
 *   "image missing" message — only the XO monogram on charcoal + gold;
 * - in development it prints the slot path being waited on, so an editor can
 *   see exactly which approved asset is outstanding.
 */
export function MediaPlaceholder({
  ratio = "16 / 9",
  label,
  glyph = "XO",
  assetPath,
  className,
}: {
  /** Final aspect ratio of the incoming photo, e.g. "3 / 4". */
  ratio?: string;
  /** Short caption under the monogram (public: generic brand line). */
  label?: string;
  glyph?: string;
  /** Expected asset path — only surfaced outside production. */
  assetPath?: string;
  className?: string;
}) {
  const isDev = process.env.NODE_ENV !== "production";

  return (
    <div
      role="img"
      aria-label={label ? `${label} — XO Club Dubai` : "XO Club Dubai — premium experience"}
      className={cn("xo-media-placeholder", className)}
      style={{ aspectRatio: ratio }}
    >
      <div className="relative z-[1] flex flex-col items-center gap-3 px-6 text-center">
        <span className="xo-media-placeholder__glyph text-3xl sm:text-4xl">{glyph}</span>
        <span className="xo-media-placeholder__label">
          {label ?? "Premium Experience"}
        </span>
        {isDev && assetPath ? (
          <span className="max-w-[22ch] text-[9px] uppercase tracking-[0.18em] text-gold/45">
            awaiting approved asset: {assetPath}
          </span>
        ) : null}
      </div>
    </div>
  );
}

/**
 * Performer slot: same placeholder, plus the unassigned data rows the spec
 * requires (name, biography, Instagram, specialty, days, time). Every value
 * renders as an explicit "awaiting approval" state — nothing is invented.
 */
export function PerformerPlaceholder({
  ratio = "4 / 5",
  slotLabel,
  fields,
  assetPath,
  className,
}: {
  ratio?: string;
  slotLabel: string;
  fields: { label: string; value: string }[];
  assetPath: string;
  className?: string;
}) {
  const isDev = process.env.NODE_ENV !== "production";

  return (
    <div className={cn("overflow-hidden rounded-3xl border border-gold/20 bg-night-card", className)}>
      <MediaPlaceholder
        ratio={ratio}
        label={slotLabel}
        assetPath={assetPath}
        className="rounded-none border-0 border-b border-gold/15"
      />
      <dl className="divide-y divide-gold/10">
        {fields.map((f) => (
          <div key={f.label} className="flex items-center justify-between gap-4 px-5 py-3">
            <dt className="text-[10px] font-bold uppercase tracking-[0.2em] text-cream/40">
              {f.label}
            </dt>
            <dd className="text-xs font-semibold text-gold/70">{f.value}</dd>
          </div>
        ))}
      </dl>
      {isDev ? (
        <p className="border-t border-gold/10 px-5 py-2 text-[9px] uppercase tracking-[0.16em] text-cream/25">
          dev: unpublished until approved — {assetPath}
        </p>
      ) : null}
    </div>
  );
}
