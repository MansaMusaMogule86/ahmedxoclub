import Link from "next/link";
import { CheckCircle2, Info, Minus } from "lucide-react";
import { LanguageProvider } from "@/lib/i18n";
import { Header } from "@/components/club/header";
import { Footer } from "@/components/club/footer";
import { FloatingCtas } from "@/components/club/floating";
import { CtaBand, Crumb, PageHero, RelatedLinks } from "@/components/blog/parts";
import { FaqList, KeyTakeaways, QuickAnswer } from "@/components/blog/blocks";
import { BRAND } from "@/lib/brand";
import { getPost } from "@/lib/blog";
import type { Competitor } from "@/lib/competitors";
import {
  competitorFaqSchema,
  innerBreadcrumbSchema,
  nightClubSchema,
  organizationSchema,
} from "@/lib/jsonld";

const ALL_COMPARES: [string, string][] = [
  ["/vs-fobia-club", "XO vs Fobia Night Club"],
  ["/vs-omni-club", "XO vs Omni Club"],
  ["/vs-avenue-club", "XO vs The Avenue Club"],
  ["/vs-solitaire-club", "XO vs Solitaire Club"],
  ["/vs-dxb-night-club", "XO vs DXB Night Club"],
  ["/vs-club-one", "XO vs Club One"],
];

/** "/vs-[competitor]" interception template. Server component. */
export function VsPage({ competitor }: { competitor: Competitor }) {
  const c = competitor;
  const relatedPosts = c.relatedPosts
    .map((s) => getPost(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const jsonLd = [
    nightClubSchema(),
    organizationSchema(),
    competitorFaqSchema(c),
    innerBreadcrumbSchema([{ name: `XO vs ${c.short}`, path: `/vs-${c.slug}` }]),
  ];

  const siloLinks = [
    { name: "Khaliji nightlife in Dubai: the definitive guide", href: "/khaliji-nightlife-dubai" },
    { name: "VIP table booking in Dubai: how it works", href: "/vip-table-booking-dubai" },
    { name: "Best Arabic nightclub in Dubai", href: "/best-arabic-nightclub-dubai" },
    { name: "Business Bay nightlife guide", href: "/business-bay-nightlife" },
    { name: "What a night at XO Club really costs", href: "/blog/how-much-does-a-night-at-xo-club-cost" },
  ];

  return (
    <LanguageProvider>
      {jsonLd.map((obj, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(obj).replace(/</g, "\\u003c") }}
        />
      ))}

      <Header base="/" />

      <main className="flex-1">
        <PageHero
          kicker={`Comparison · XO Club Dubai vs ${c.short}`}
          title={c.title}
          subtitle={c.angle}
          image={c.image}
          imageAlt={`XO Club Dubai vs ${c.name} — VIP tables at Radisson Blu Hotel Dubai Waterfront. Bookings ${BRAND.phoneDisplay}`}
          meta={
            <p className="inline-flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] uppercase tracking-[0.16em] text-cream/50">
              <span className="text-gold/85">XO Club Dubai: verified 5.0★</span>
              <span aria-hidden="true">·</span>
              <span>
                {BRAND.address.area}, Dubai · {BRAND.hours.short}
              </span>
              {typeof c.publicRating === "number" ? (
                <>
                  <span aria-hidden="true">·</span>
                  <span>
                    {c.name}: publicly listed ≈ {c.publicRating.toFixed(1)}★ (verify live)
                  </span>
                </>
              ) : null}
            </p>
          }
        />

        <article className="mx-auto max-w-4xl px-4 pb-20 pt-8 sm:px-6">
          <Crumb items={[{ name: `XO vs ${c.short}`, href: `/vs-${c.slug}` }]} />

          <div className="mt-6">
            <QuickAnswer answer={c.verdict} keyword={c.targetKeyword} />
            <KeyTakeaways
              items={[
                "XO Club Dubai: verified 5.0★ Google rating — Radisson Blu Hotel, Dubai Waterfront, Mezzanine Floor, Business Bay",
                `One booking line for everything: ${BRAND.phoneDisplay} — written minimum-spend quote before you arrive`,
                "Open 7 days a week, daily 11:00 PM – 4:00 AM — no 'selected nights' gaps",
                "Comparison is built only on XO's verifiable facts; rival ratings change and should be checked live",
              ]}
            />
          </div>

          {/* At-a-glance comparison table */}
          <section id="at-a-glance" className="mt-12">
            <h2 className="font-display text-2xl font-bold text-cream sm:text-[1.75rem]">
              At a glance: {c.name} vs XO Club Dubai
            </h2>
            <span className="mt-3 block h-px w-24 bg-gradient-to-e from-gold to-transparent" aria-hidden="true" />
            <p className="mt-4 text-[15px] leading-[1.85] text-cream/75">
              Every line in the XO column below is verifiable in seconds by any guest. The rival
              column is deliberately neutral — where a public fact is not confirmed, we tell you what
              to ask that venue directly.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-gold/20 bg-night-soft/60">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[38rem] border-collapse text-sm">
                  <thead>
                    <tr className="bg-gold/10">
                      <th scope="col" className="px-4 py-3 text-start text-[11px] font-bold uppercase tracking-[0.16em] text-gold-light">Dimension</th>
                      <th scope="col" className="px-4 py-3 text-start text-[11px] font-bold uppercase tracking-[0.16em] text-gold-light">XO Club Dubai</th>
                      <th scope="col" className="px-4 py-3 text-start text-[11px] font-bold uppercase tracking-[0.16em] text-gold-light">{c.name}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {c.rows.map((r, i) => (
                      <tr key={r.label} className={i % 2 === 1 ? "bg-night/40" : undefined}>
                        <td className="border-t border-gold/10 px-4 py-3.5 align-top font-semibold text-cream/90">{r.label}</td>
                        <td className="border-t border-gold/10 px-4 py-3.5 align-top leading-relaxed text-cream/80">
                          <span className="flex items-start gap-2.5">
                            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-whatsapp" aria-hidden="true" />
                            {r.xo}
                          </span>
                        </td>
                        <td className="border-t border-gold/10 px-4 py-3.5 align-top leading-relaxed text-cream/55">
                          <span className="flex items-start gap-2.5">
                            <Minus className="mt-1 h-4 w-4 shrink-0 text-cream/40" aria-hidden="true" />
                            {r.rival}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Balanced "who suits what" — the wink-not-slander escape hatch */}
          <section id="who-suits" className="mt-12">
            <h2 className="font-display text-2xl font-bold text-cream sm:text-[1.75rem]">
              Is XO Club Dubai right for your night?
            </h2>
            <span className="mt-3 block h-px w-24 bg-gradient-to-e from-gold to-transparent" aria-hidden="true" />
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-gold/25 bg-night-card p-6">
                <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-gold-light">
                  Choose XO if…
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {c.suitsXo.map((s) => (
                    <li key={s} className="flex items-start gap-2.5 text-sm leading-relaxed text-cream/75">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-whatsapp" aria-hidden="true" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-gold/15 bg-night-soft/50 p-6">
                <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-cream/60">
                  Fair points for {c.short}…
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {c.suitsRival.map((s) => (
                    <li key={s} className="flex items-start gap-2.5 text-sm leading-relaxed text-cream/60">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-cream/30" aria-hidden="true" />
                      {s}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 flex items-start gap-2.5 text-xs leading-relaxed text-cream/45">
                  <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold/60" aria-hidden="true" />
                  <span>
                    Different nights suit different crowds. If XO&apos;s standard fits yours, book on{" "}
                    {BRAND.phoneDisplay}.
                  </span>
                </p>
              </div>
            </div>
          </section>
          <FaqList faqs={c.faqs} title={`${c.name} vs XO Club Dubai — questions`} />

          <CtaBand
            headline="Secure your XO table, not a maybe"
            body={`Send your date, guest count and preferred experience to ${BRAND.phoneDisplay}. You get a written minimum spend and a confirmed table position before you arrive — Mezzanine Floor, Radisson Blu Hotel, Dubai Waterfront, Business Bay.`}
            message={`Hi XO Club Dubai! I compared XO with ${c.name}. I'd like a written quote and availability for a VIP table.`}
          />

          {relatedPosts.length > 0 ? (
            <RelatedLinks
              links={relatedPosts.map((p) => ({ name: p.title, href: `/blog/${p.slug}` }))}
            />
          ) : null}

          <RelatedLinks links={siloLinks} />

          <nav aria-label="More comparisons" className="mt-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold/85">
              More comparisons
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {ALL_COMPARES.filter(([href]) => href !== `/vs-${c.slug}`).map(([href, label]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="rounded-full border border-gold/20 px-4 py-2 text-xs font-semibold text-cream/70 transition hover:border-gold/50 hover:text-gold"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </article>
      </main>

      <Footer base="/" />
      <div className="h-[76px] bg-night-soft md:hidden" aria-hidden="true" />
      <FloatingCtas />
    </LanguageProvider>
  );
}
