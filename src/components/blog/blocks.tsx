import { CheckCircle2, ChevronDown, Info, Quote as QuoteIcon } from "lucide-react";
import type { Block, FaqPair, PostSection } from "@/lib/blog/types";

/** A table block (comparison tables, fact tables, tier tables). */
function TableBlock({ head, rows, caption }: { head: string[]; rows: string[][]; caption?: string }) {
  return (
    <figure className="my-6 overflow-hidden rounded-2xl border border-gold/20 bg-night-soft/60">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[36rem] border-collapse text-sm">
          <thead>
            <tr className="bg-gold/10">
              {head.map((h) => (
                <th
                  key={h}
                  scope="col"
                  className="whitespace-nowrap px-4 py-3 text-start text-[11px] font-bold uppercase tracking-[0.16em] text-gold-light"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className={i % 2 === 1 ? "bg-night/40" : undefined}>
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={`border-t border-gold/10 px-4 py-3.5 align-top leading-relaxed ${
                      j === 0 ? "font-semibold text-cream/90" : "text-cream/70"
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {caption ? (
        <figcaption className="border-t border-gold/10 px-4 py-2.5 text-[11px] uppercase tracking-[0.18em] text-cream/40">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

/** Renders one content block. Shared by posts, /vs-* and silo pages. */
export function BlockView({ block }: { block: Block }) {
  switch (block.kind) {
    case "p":
      return <p className="mt-4 text-[15px] leading-[1.85] text-cream/75">{block.text}</p>;

    case "h3":
      return <h3 className="mt-7 font-display text-lg font-bold text-gold-light">{block.text}</h3>;

    case "list":
      return (
        <ul className="mt-4 space-y-2.5">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-cream/75">
              <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-whatsapp" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );

    case "steps":
      return (
        <ol className="mt-5 space-y-3.5">
          {block.items.map((step, i) => (
            <li
              key={i}
              className="flex items-start gap-4 rounded-2xl border border-gold/15 bg-night-soft/50 p-4"
            >
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-gradient text-sm font-black text-night"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <span>
                <span className="block text-sm font-bold text-cream/90">{step.name}</span>
                <span className="mt-1 block text-sm leading-relaxed text-cream/65">{step.text}</span>
              </span>
            </li>
          ))}
        </ol>
      );

    case "table":
      return <TableBlock head={block.head} rows={block.rows} caption={block.caption} />;

    case "callout":
      return (
        <aside className="my-6 flex items-start gap-3.5 rounded-2xl border border-gold/30 bg-gradient-to-b from-gold/[0.09] to-night-card p-5">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
          <p className="text-sm leading-relaxed text-cream/80">
            <span className="me-1.5 font-bold uppercase tracking-[0.14em] text-gold-light">
              {block.label}
            </span>
            {block.text}
          </p>
        </aside>
      );

    case "quote":
      return (
        <blockquote className="my-6 rounded-2xl border-s-2 border-gold bg-night-soft/60 p-5">
          <QuoteIcon className="h-4 w-4 text-gold/70" aria-hidden="true" />
          <p className="mt-2 font-display text-[15px] italic leading-relaxed text-cream/85">
            {block.text}
          </p>
          {block.cite ? (
            <footer className="mt-2 text-[11px] uppercase tracking-[0.18em] text-cream/40">
              — {block.cite}
            </footer>
          ) : null}
        </blockquote>
      );

    default:
      return null;
  }
}

/** Renders one H2 section of an article. */
export function SectionView({ section }: { section: PostSection }) {
  return (
    <section id={section.id} className="scroll-mt-28">
      <h2 className="mt-12 font-display text-2xl font-bold leading-snug text-cream sm:text-[1.75rem]">
        {section.heading}
      </h2>
      <span
        className="mt-3 block h-px w-24 bg-gradient-to-e from-gold to-transparent"
        aria-hidden="true"
      />
      {section.blocks.map((b, i) => (
        <BlockView key={i} block={b} />
      ))}
    </section>
  );
}

/** AEO "Quick Answer" block — the snippet/voice-optimised direct answer. */
export function QuickAnswer({ answer, keyword }: { answer: string; keyword?: string }) {
  return (
    <aside
      className="rounded-3xl border border-gold/35 bg-gradient-to-b from-gold/[0.10] to-night-card p-6 sm:p-7"
      aria-label="Quick answer"
    >
      <p className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.24em] text-gold-light">
        Quick Answer
      </p>
      <p className="mt-4 text-[16px] font-medium leading-[1.8] text-cream/90">{answer}</p>
      {keyword ? (
        <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-cream/40">
          Target query: <span className="text-gold/80">{keyword}</span>
        </p>
      ) : null}
    </aside>
  );
}

/** Scannable bullet summary rendered above the fold. */
export function KeyTakeaways({ items }: { items: string[] }) {
  return (
    <div className="mt-6 rounded-3xl border border-gold/15 bg-night-soft/50 p-6">
      <h2 className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold/85">
        Key takeaways
      </h2>
      <ul className="mt-4 space-y-2.5">
        {items.map((t, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-cream/75">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" aria-hidden="true" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Visible FAQ list (details/summary) — mirrors the FAQPage JSON-LD. */
export function FaqList({ faqs, title = "Frequently asked questions" }: { faqs: FaqPair[]; title?: string }) {
  return (
    <section id="faq" className="mt-14 scroll-mt-28">
      <h2 className="font-display text-2xl font-bold text-cream">{title}</h2>
      <span
        className="mt-3 block h-px w-24 bg-gradient-to-e from-gold to-transparent"
        aria-hidden="true"
      />
      <div className="mt-6 space-y-3">
        {faqs.map((f) => (
          <details
            key={f.q}
            className="group rounded-2xl border border-gold/15 bg-night-soft/50 px-5 py-4 open:border-gold/35"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-semibold text-cream/90 [&::-webkit-details-marker]:hidden">
              <h3 className="font-sans text-[15px] font-semibold">{f.q}</h3>
              <ChevronDown
                className="h-4 w-4 shrink-0 text-gold transition-transform group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-cream/70">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
