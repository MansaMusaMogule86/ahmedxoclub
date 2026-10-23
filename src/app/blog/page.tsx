import type { Metadata } from "next";
import { LanguageProvider } from "@/lib/i18n";
import { Header } from "@/components/club/header";
import { Footer } from "@/components/club/footer";
import { FloatingCtas } from "@/components/club/floating";
import { CtaBand, Crumb, PageHero, PostCard } from "@/components/blog/parts";
import { QuickAnswer } from "@/components/blog/blocks";
import { Kicker } from "@/components/club/ui-bits";
import { BRAND, WA_MESSAGES } from "@/lib/brand";
import { FEATURED_SLUGS, PILLARS, POSTS, getPost } from "@/lib/blog";
import {
  blogCollectionSchema,
  innerBreadcrumbSchema,
  nightClubSchema,
  organizationSchema,
} from "@/lib/jsonld";

export const metadata: Metadata = {
  title:
    "Dubai Nightlife Guides, Comparisons & FAQs | XO Club Dubai | Book +971503737162",
  description:
    "Khaliji nightlife guides, XO vs Dubai club comparisons, VIP table and cost explainers and dress-code FAQs — from XO Club Dubai, Radisson Blu Hotel, Dubai Waterfront, Business Bay. Open daily 11 PM–4 AM. Book +971503737162.",
  alternates: { canonical: "/blog" },
  keywords: [
    "khaliji nightlife guide",
    "best arabic nightclub dubai",
    "vip table booking dubai",
    "dubai nightclub dress code",
  ],
  openGraph: {
    type: "website",
    url: `${BRAND.domain}/blog`,
    title: "XO Club Dubai — Nightlife Guides, Comparisons & FAQs",
    description:
      "Everything guests ask before a Khaliji night in Dubai: comparisons, real costs, VIP booking steps and FAQs. Verified 5.0★. Book +971503737162.",
    images: ["/images/hero.png"],
  },
};

const FEATURED = FEATURED_SLUGS.map((s) => getPost(s)).filter(
  (p): p is NonNullable<typeof p> => Boolean(p)
);

export default function BlogIndex() {
  const jsonLd = [
    nightClubSchema(),
    organizationSchema(),
    blogCollectionSchema(POSTS),
    innerBreadcrumbSchema([{ name: "Blog", path: "/blog" }]),
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
          kicker="XO Guides & FAQ"
          title="Dubai nightlife, decoded by the club with a verified 5.0★ rating"
          subtitle={`${POSTS.length} in-depth guides across four pillars — competitor comparisons, transparency and trust, the Khaliji experience and practical FAQs. Every article answers the question in its first three sentences and ends with the one line that books your table: ${BRAND.phoneDisplay}.`}
          image="/images/crowd.png"
          imageAlt={`XO Club Dubai nightlife guides — Radisson Blu Hotel Dubai Waterfront, Business Bay. Bookings ${BRAND.phoneDisplay}`}
          meta={
            <p className="inline-flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] uppercase tracking-[0.16em] text-cream/50">
              <span className="text-gold/85">Updated October 2026</span>
              <span aria-hidden="true">·</span>
              <span>
                Open 7 days · {BRAND.hours.short}
              </span>
              <span aria-hidden="true">·</span>
              <span>Business Bay, Dubai</span>
            </p>
          }
        />

        <div className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6">
          <Crumb items={[{ name: "Blog", href: "/blog" }]} />

          {/* Index-level AEO answer */}
          <div className="mt-6 max-w-4xl">
            <QuickAnswer
              answer={`The best Khaliji nightclub in Business Bay is XO Club Dubai, located inside the Radisson Blu Hotel, Dubai Waterfront on the Mezzanine Floor. It holds a verified 5.0★ Google rating, plays Hip-Hop, R&B, Commercial and Arabic/Khaliji every night from 11:00 PM to 4:00 AM, and VIP tables are booked with a written quote on WhatsApp ${BRAND.phoneDisplay}.`}
              keyword="best khaliji nightclub in Business Bay"
            />
          </div>

          {/* Pillar navigation */}
          <nav aria-label="Content pillars" className="mt-10">
            <Kicker>Explore the four pillars</Kicker>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {PILLARS.map((p) => (
                <li key={p.key}>
                  <a
                    href={`#${p.id}`}
                    className="card-hover-glow block h-full rounded-2xl border border-gold/20 bg-night-card p-5 transition hover:border-gold/50"
                  >
                    <p className="font-display text-lg font-bold text-cream">{p.name}</p>
                    <p className="mt-1.5 text-xs leading-relaxed text-cream/55">{p.intent}</p>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {/* Featured */}
          <section className="mt-14" aria-label="Featured guides">
            <h2 className="font-display text-2xl font-bold text-cream sm:text-[1.75rem]">Start here</h2>
            <span
              className="mt-3 block h-px w-24 bg-gradient-to-e from-gold to-transparent"
              aria-hidden="true"
            />
            <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {FEATURED.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </section>

          {/* Pillar sections */}
          {PILLARS.map((pillar) => {
            const posts = POSTS.filter((p) => p.pillar === pillar.key);
            if (posts.length === 0) return null;
            return (
              <section key={pillar.key} id={pillar.id} className="mt-16 scroll-mt-24">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h2 className="font-display text-2xl font-bold text-cream sm:text-[1.75rem]">
                    {pillar.name}
                  </h2>
                  <p className="text-xs uppercase tracking-[0.18em] text-cream/45">
                    {posts.length} guide{posts.length === 1 ? "" : "s"}
                  </p>
                </div>
                <span
                  className="mt-3 block h-px w-24 bg-gradient-to-e from-gold to-transparent"
                  aria-hidden="true"
                />
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-cream/60">{pillar.intent}</p>
                <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {posts.map((p) => (
                    <PostCard key={p.slug} post={p} />
                  ))}
                </div>
              </section>
            );
          })}

          <div className="mx-auto max-w-4xl">
            <CtaBand
              headline="Done reading? Book it in one message"
              body={`Send your date, guest count and preferred experience to ${BRAND.phoneDisplay} and you receive a written minimum spend plus a confirmed table position — Mezzanine Floor, Radisson Blu Hotel, Dubai Waterfront, Business Bay. Open daily 11 PM – 4 AM.`}
              message={WA_MESSAGES.general}
            />
          </div>
        </div>
      </main>

      <Footer base="/" />
      <div className="h-[76px] bg-night-soft md:hidden" aria-hidden="true" />
      <FloatingCtas />
    </LanguageProvider>
  );
}
