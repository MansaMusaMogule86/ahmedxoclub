import { NextResponse, type NextRequest } from "next/server";
import { BRAND } from "@/lib/brand";

/**
 * Next.js 16 renamed the `middleware` file convention to `proxy` (see
 * /docs/messages/middleware-to-proxy), so this file is `src/proxy.ts` and
 * exports `proxy`. The route matcher at the bottom is unchanged.
 *
 * RETIRED URLS → HTTP 410 Gone.
 *
 * These paths published named-competitor comparison content and were retired for
 * legal review (see archive/competitor-comparison/README.md). The source files
 * are preserved in `archive/competitor-comparison/` and are not served.
 *
 * Why 410 and not 301: no genuinely equivalent first-party replacement exists —
 * a nightlife guide is not the equivalent of a named-competitor comparison, so
 * redirecting would mislead users and search engines.
 *
 * Why NOT robots.txt Disallow: a Disallow would stop crawlers fetching these
 * URLs, so they would never observe the 410 and the pages could linger in the
 * index. Serving 410 is the correct de-indexing signal.
 */
export const RETIRED_PATHS = new Set<string>([
  // former /vs-* competitor interception pages
  "/vs-fobia-club",
  "/vs-omni-club",
  "/vs-avenue-club",
  "/vs-solitaire-club",
  "/vs-dxb-night-club",
  "/vs-club-one",
  // former competitor-named blog posts
  "/blog/xo-club-vs-fobia-night-club",
  "/blog/xo-club-vs-omni-club",
  "/blog/xo-club-vs-avenue-club",
  "/blog/xo-club-vs-dxb-night-club",
]);

const SAFE_LINKS: [string, string][] = [
  ["/", "Home"],
  ["/dubai-nightlife-guide", "Dubai nightlife guide"],
  ["/business-bay-nightlife", "Business Bay nightlife"],
  ["/vip-table-booking-dubai", "VIP table booking"],
  ["/nightclub-reservations-dubai", "Nightclub reservations"],
  ["/blog", "Guides & FAQ"],
];

function goneResponse(): NextResponse {
  const links = SAFE_LINKS.map(
    ([href, label]) =>
      `<li><a href="${href}" style="color:#d4af37;text-decoration:none">${label}</a></li>`
  ).join("");

  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,follow">
<title>Page removed — ${BRAND.name}</title>
</head>
<body style="margin:0;background:#080808;color:#f5f2eb;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif">
<main style="max-width:40rem;margin:0 auto;padding:4rem 1.5rem">
<p style="letter-spacing:.3em;text-transform:uppercase;font-size:.7rem;color:#d4af37">${BRAND.name}</p>
<h1 style="font-size:1.75rem;margin:1rem 0 .5rem">This page has been permanently removed</h1>
<p style="color:#a6a29b;line-height:1.7">
The page you requested is no longer published. It has been retired rather than redirected,
because no equivalent page exists.
</p>
<p style="color:#a6a29b;line-height:1.7">
Bookings and information: <a href="tel:${BRAND.phoneDial}" style="color:#f0d98c;text-decoration:none">${BRAND.phoneDisplay}</a>
· ${BRAND.address.full} · ${BRAND.hours.spec}
</p>
<h2 style="font-size:.75rem;letter-spacing:.24em;text-transform:uppercase;color:#d4af37;margin-top:2.5rem">Continue here</h2>
<ul style="line-height:2;padding-left:1.2rem">${links}</ul>
</main>
</body>
</html>`;

  return new NextResponse(html, {
    status: 410,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=3600",
      "x-robots-tag": "noindex, follow",
    },
  });
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  // Normalise a trailing slash so /vs-fobia-club/ also returns 410.
  const normalized =
    pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;

  if (!RETIRED_PATHS.has(normalized)) return NextResponse.next();

  return goneResponse();
}

/** Only the retired paths are matched — no overhead on live routes. */
export const config = {
  matcher: [
    "/vs-fobia-club",
    "/vs-omni-club",
    "/vs-avenue-club",
    "/vs-solitaire-club",
    "/vs-dxb-night-club",
    "/vs-club-one",
    "/blog/xo-club-vs-fobia-night-club",
    "/blog/xo-club-vs-omni-club",
    "/blog/xo-club-vs-avenue-club",
    "/blog/xo-club-vs-dxb-night-club",
  ],
};
