"use client";

import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { FEATURED_SLUGS, POSTS, getPost } from "@/lib/blog";
import type { BlogPost } from "@/lib/blog/types";
import { Reveal } from "@/components/club/reveal";
import { SectionHead } from "@/components/club/ui-bits";
import { PostCard } from "@/components/blog/parts";

const FEATURED = FEATURED_SLUGS.map((s) => getPost(s)).filter(
  (p): p is BlogPost => Boolean(p)
);

/** Homepage strip linking the Maze into the /blog content engine. */
export function HomeBlogBand() {
  const { isAr } = useLanguage();

  return (
    <section id="blog" className="relative bg-night-soft/60 py-20 lg:py-28" aria-label="XO guides and blog">
      <div className="pattern-dots absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHead
            kicker={isAr ? "أدلة إكس أو" : "XO Guides & Blog"}
            title={
              isAr
                ? "كل ما يُسأل قبل أي ليلة خليجية في دبي"
                : "Every question, answered before your Khaliji night"
            }
            subtitle={
              isAr
                ? "مقارنات صريحة، التكاليف الحقيقية، خطوات حجز الطاولة وأسئلة الأدلة — كل مقال يبدأ بإجابة مباشرة وينتهي بخط واحد: ‎+971 50 373 7162."
                : `${POSTS.length} in-depth guides: honest venue comparisons, what a night really costs, VIP booking steps and dress-code answers. Every article opens with a direct Quick Answer — and one booking line: +971 50 373 7162.`
            }
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED.map((p, i) => (
            <Reveal key={p.slug} delay={0.05 + (i % 4) * 0.05}>
              <PostCard post={p} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 flex justify-center">
            <Link
              href="/blog"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-7 text-sm font-bold text-gold-light transition hover:border-gold hover:bg-gold/20"
            >
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              {isAr ? "تصفّح كل الأدلة" : `Browse all ${POSTS.length} guides`}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
