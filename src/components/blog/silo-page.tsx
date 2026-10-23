import { LanguageProvider } from "@/lib/i18n";
import { Header } from "@/components/club/header";
import { Footer } from "@/components/club/footer";
import { FloatingCtas } from "@/components/club/floating";
import { CtaBand, Crumb, PageHero, RelatedLinks } from "@/components/blog/parts";
import { FaqList, KeyTakeaways, QuickAnswer } from "@/components/blog/blocks";
import { BRAND, WA_MESSAGES } from "@/lib/brand";
import { SILOS, type Silo } from "@/lib/silos";
import { POSTS } from "@/lib/blog";
import { innerBreadcrumbSchema, nightClubSchema, organizationSchema } from "@/lib/jsonld";

/** Maps each silo route to the pre-filled WhatsApp intent. */
const SILO_WA: Record<string, string> = {
  "khaliji-nightlife-dubai": WA_MESSAGES.general,
  "vip-table-booking-dubai": WA_MESSAGES.vip,
  "best-arabic-nightclub-dubai":
    "Hi XO Club Dubai! I'd like a table for an Arabic night — please send availability and a written quote.",
  "private-events-dubai": WA_MESSAGES.privateEvent,
  "dubai-nightlife-guide": WA_MESSAGES.tonight,
  "bottle-service-dubai":
    "Hi XO Club Dubai! I'd like information on VIP bottle service — please send your written options and a quote.",
  "business-bay-nightlife": WA_MESSAGES.general,
};

/** Pillar template for the 7 content silos. Server component. */
export function SiloPage({ silo }: { silo: Silo }) {
  const s = silo;
  const waMessage = SILO_WA[s.slug] ?? WA_MESSAGES.general;
  const siblings = SILOS.filter((x) => x.slug !== s.slug);

  /* Editorial links into the blog engine — the silo's supporting articles. */
  const articleLinks = POSTS.filter((p) => p.related.length > 0)
    .slice(0, 6)
    .map((p) => ({ name: p.title, href: `/blog/${p.slug}` }));

  const jsonLd = [
    nightClubSchema(),
    organizationSchema(),
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${BRAND.domain}/${s.slug}#faq`,
      mainEntity: s.en.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    innerBreadcrumbSchema([{ name: s.tab, path: `/${s.slug}` }]),
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
          kicker={`XO Guide · ${s.tab}`}
          title={s.en.title}
          subtitle={s.en.subtitle}
          image={s.image}
          imageAlt={`${s.tab} — XO Club Dubai, Radisson Blu Hotel Dubai Waterfront, Business Bay. Bookings ${BRAND.phoneDisplay}`}
          meta={
            <p className="inline-flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] uppercase tracking-[0.16em] text-cream/50">
              <span className="text-gold/85">Verified 5.0★ Google rating</span>
              <span aria-hidden="true">·</span>
              <span>
                {BRAND.address.area}, Dubai · {BRAND.hours.short}
              </span>
            </p>
          }
        />

        <article className="mx-auto max-w-4xl px-4 pb-20 pt-8 sm:px-6">
          <Crumb items={[{ name: "Guides", href: "/blog" }, { name: s.tab, href: `/${s.slug}` }]} />

          <div className="mt-6">
            <QuickAnswer answer={s.en.intro} keyword={`${s.tab} Dubai`} />
            <KeyTakeaways items={s.en.stats.map((st) => `${st.value} — ${st.label}`)} />
          </div>

          {s.en.body.map((paragraph, i) => (
            <section key={i} id={`section-${i + 1}`} className="scroll-mt-28">
              {i === 0 ? (
                <>
                  <h2 className="mt-12 font-display text-2xl font-bold leading-snug text-cream sm:text-[1.75rem]">
                    {s.en.subtitle}
                  </h2>
                  <span
                    className="mt-3 block h-px w-24 bg-gradient-to-e from-gold to-transparent"
                    aria-hidden="true"
                  />
                </>
              ) : null}
              <p className="mt-4 text-[15px] leading-[1.85] text-cream/75">{paragraph}</p>
            </section>
          ))}

          {/* Facts strip — GEO citable data points */}
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {s.en.stats.map((st) => (
              <div key={st.label} className="rounded-2xl border border-gold/15 bg-night-soft/70 p-4">
                <p className="text-base font-black text-gold-light">{st.value}</p>
                <p className="mt-1 text-[11px] leading-snug text-cream/50">{st.label}</p>
              </div>
            ))}
          </div>

          <FaqList faqs={s.en.faqs} title={`${s.tab} — frequently asked questions`} />

          <CtaBand
            headline="Reserve the XO night this guide describes"
            body={`One WhatsApp message to ${BRAND.phoneDisplay} — date, guests, preferred experience — and you receive a written minimum spend and a confirmed table position before you arrive. Open daily 11 PM – 4 AM at Radisson Blu Hotel, Dubai Waterfront, Business Bay.`}
            message={waMessage}
          />

          <RelatedLinks links={articleLinks} />

          <RelatedLinks
            links={siblings.map((x) => ({ name: `${x.tab} — XO guide`, href: `/${x.slug}` }))}
          />

          <RelatedLinks
            links={[
              { name: "Browse every guide on the XO blog", href: "/blog" },
              { name: "Compare XO with other Dubai clubs", href: "/vs-fobia-club" },
              { name: "Book a VIP table on the booking page", href: "/#booking" },
            ]}
          />
        </article>
      </main>

      <Footer base="/" />
      <div className="h-[76px] bg-night-soft md:hidden" aria-hidden="true" />
      <FloatingCtas />
    </LanguageProvider>
  );
}
