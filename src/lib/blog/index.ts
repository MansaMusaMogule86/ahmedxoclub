/**
 * Blog engine — aggregate + helpers.
 * Import anywhere as `@/lib/blog`.
 */
import type { BlogPost, PillarKey } from "@/lib/blog/types";
import { PLANNING_POSTS } from "@/lib/blog/posts-planning";
import { TRUST_POSTS } from "@/lib/blog/posts-trust";
import { KHALIJI_POSTS } from "@/lib/blog/posts-khaliji";
import { PRACTICAL_POSTS } from "@/lib/blog/posts-practical";

export type { BlogPost, PostSection, Block, FaqPair, Pillar, PillarKey } from "@/lib/blog/types";
export { PILLARS, getPillar } from "@/lib/blog/pillars";

export const POSTS: BlogPost[] = [
  ...PLANNING_POSTS,
  ...TRUST_POSTS,
  ...KHALIJI_POSTS,
  ...PRACTICAL_POSTS,
];

/** Editorial order for the /blog index hero strip. */
export const FEATURED_SLUGS = [
  "dubai-night-out-first-timers-guide",
  "how-much-does-a-night-at-xo-club-cost",
  "best-arabic-nightclubs-business-bay",
  "how-to-book-a-vip-table-at-xo-club",
];

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getPostsByPillar(key: PillarKey): BlogPost[] {
  return POSTS.filter((p) => p.pillar === key);
}

export function getAllSlugs(): string[] {
  return POSTS.map((p) => p.slug);
}

/** Newest first. */
export function postsSorted(): BlogPost[] {
  return [...POSTS].sort((a, b) => (a.pubDate < b.pubDate ? 1 : -1));
}

/**
 * Related posts: explicit `related` slugs first (internal-linking rule),
 * then topped up from the same pillar so every post always links out.
 */
export function getRelated(post: BlogPost, limit = 3): BlogPost[] {
  const explicit = post.related
    .map((slug) => getPost(slug))
    .filter((p): p is BlogPost => Boolean(p) && p!.slug !== post.slug);

  const samePillar = getPostsByPillar(post.pillar).filter(
    (p) => p.slug !== post.slug && !explicit.some((e) => e.slug === p.slug)
  );

  const rest = POSTS.filter(
    (p) =>
      p.slug !== post.slug &&
      p.pillar !== post.pillar &&
      !explicit.some((e) => e.slug === p.slug)
  );

  return [...explicit, ...samePillar, ...rest].slice(0, limit);
}
