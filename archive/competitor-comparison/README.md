# ARCHIVE — Competitor comparison content (UNPUBLISHED, not served)

**Status:** retired from the public site for legal review. Kept in the repository so
nothing is lost and a decision is documented. **Do not re-publish without legal sign-off.**

## Why this content was unpublished

The pages below named third-party venues and presented comparative advertising
("Which is better…", rival star ratings, "recurring service complaints", "at a glance"
comparison tables, and internal `alternative` target keywords). That carries risk under
UAE advertising/competition rules and platform policies regardless of accuracy.

Specifically prohibited by the cleanup brief:
- naming competitors in promotional comparison headlines,
- claiming XO is superior to named competitors,
- publishing unverified negative claims about other venues,
- using competitor trademarks/logos without legal review.

## What is archived here

| File | Original location | What it was |
|---|---|---|
| `routes/vs-fobia-club/page.tsx` | `src/app/vs-fobia-club/` | `/vs-fobia-club` interception page |
| `routes/vs-omni-club/page.tsx` | `src/app/vs-omni-club/` | `/vs-omni-club` |
| `routes/vs-avenue-club/page.tsx` | `src/app/vs-avenue-club/` | `/vs-avenue-club` |
| `routes/vs-solitaire-club/page.tsx` | `src/app/vs-solitaire-club/` | `/vs-solitaire-club` |
| `routes/vs-dxb-night-club/page.tsx` | `src/app/vs-dxb-night-club/` | `/vs-dxb-night-club` |
| `routes/vs-club-one/page.tsx` | `src/app/vs-club-one/` | `/vs-club-one` |
| `vs-page.tsx` | `src/components/blog/vs-page.tsx` | shared `/vs-*` template |
| `competitors.ts` | `src/lib/competitors.ts` | the 6 rival datasets (names, ratings, comparison rows, "alternative" keywords) |
| `posts-comparison.ts` | `src/lib/blog/posts-comparison.ts` | 4 competitor-named blog posts that lived at `/blog/xo-club-vs-*` |

Companion internal document (never published): `docs/strategy/08-competitor-kill-sheet.md`.

## Retired URLs and their HTTP status

All ten URLs now return **HTTP 410 Gone** (see `src/middleware.ts` → `RETIRED_PATHS`):

```
/vs-fobia-club          /blog/xo-club-vs-fobia-night-club
/vs-omni-club           /blog/xo-club-vs-omni-club
/vs-avenue-club         /blog/xo-club-vs-avenue-club
/vs-solitaire-club      /blog/xo-club-vs-dxb-night-club
/vs-dxb-night-club
/vs-club-one
```

410 was chosen over 301 because no genuinely equivalent first-party replacement exists —
a nightlife guide is not an equivalent of a named-competitor comparison, so redirecting
would mislead users and search engines.

**Do not add these paths to `robots.txt` Disallow.** A Disallow would stop crawlers
fetching the URL, so they would never see the 410 and the pages would linger in the index.
Returning 410 is the correct de-indexing signal.

## If this content is ever restored

1. Legal review of every line, and written approval for each third-party name.
2. Remove all rival ratings, complaint references and "alternative" keywords.
3. Re-add routes under `src/app/`, restore the `src/lib/competitors.ts` import path,
   re-add `vsMetadata()` to `src/lib/seo-meta.ts` and `competitorFaqSchema()` to
   `src/lib/jsonld.ts`, and remove the paths from `RETIRED_PATHS` in `src/middleware.ts`.
