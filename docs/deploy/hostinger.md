# Deploying ahmedxoclub.com to Hostinger

**Repo:** https://github.com/MansaMusaMogule86/ahmedxoclub (branch `main`)
**Current DNS state (verified):** nameservers `nova.dns-parking.com` / `cosmos.dns-parking.com`,
apex A record `2.57.91.91`, responses served by `Server: hcdn` (Hostinger CDN) — i.e. the domain is
parked at Hostinger and **no hosting plan is wired to it yet**.

---

## 0. Read this first — three facts that decide the method

1. **This is a Node.js app, not a PHP site.** Next.js 16 needs a Node runtime: it has three API route
   handlers (`/api/bookings`, `/api/events`, `/api/reviews`), a `src/proxy.ts` that must return HTTP 410
   for retired URLs, and a dynamic homepage that queries Prisma. It **cannot** be uploaded as plain
   HTML files and it **cannot** be statically exported.
2. **The build must run on the server (Linux).** `npm run build` bundles `sharp`, whose native binary is
   platform-specific. A bundle built on Windows will crash or lose image optimisation on Linux. So:
   `git clone` → `npm ci` → `npm run build` **on the host**, not upload a local `.next`.
3. **Pick the method by plan:**
   - **VPS (KVM)** → Method A. Everything works. **Recommended.**
   - **Web Hosting / Cloud with "Node.js" in hPanel** → Method B. Works with caveats, may need a
     Node version bump and a memory bump for the build.
   - **Basic shared hosting, no Node** → Method C: leave DNS at Hostinger and host the app on
     Vercel/Netlify (change the A record). Do **not** attempt Method A/B.

---

## Method A — Hostinger VPS (recommended)

### A1. Create the VPS and a DNS zone
1. hPanel → **VPS** → create a KVM VPS (Ubuntu 24.04, 2 vCPU / 4 GB RAM is comfortable; the Next build
   plus a 39 MB hero video want headroom).
2. hPanel → **Domains → ahmedxoclub.com → DNS / Nameservers** → add:
   - `A  @    → <your VPS IPv4>`
   - `A  www  → <your VPS IPv4>`
   Remove/leave the parking A record (`2.57.91.91`) unused — once you replace it, the parking page stops.

### A2. Server packages
```bash
ssh root@<your VPS IPv4>
apt update && apt upgrade -y
apt install -y curl git nginx unzip

# Node 22 LTS (Next 16 needs Node >= 20)
curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
apt install -y nodejs
node -v && npm -v

npm i -g pm2
```

### A3. Clone and build
```bash
mkdir -p /home/deploy/domains/ahmedxoclub.com
cd /home/deploy/domains/ahmedxoclub.com
git clone https://github.com/MansaMusaMogule86/ahmedxoclub.git app
cd app

npm ci                      # installs Linux-native sharp etc.
npx prisma generate
```

### A4. Environment
```bash
cp .env.example .env
# edit DATABASE_URL to an ABSOLUTE path inside the app dir:
#   DATABASE_URL="file:/home/deploy/domains/ahmedxoclub.com/app/db/custom.db"
nano .env

mkdir -p db logs
npx prisma db push          # creates db/custom.db
```
> Absolute paths matter: a relative `file:` URL is resolved *schema-relative* by `prisma db push` but
> *cwd-relative* by the running server, which produces `Error code 14: Unable to open the database file`.

### A5. Build and run
```bash
npm run build               # next build + assembles .next/standalone with static + public
pm2 start ecosystem.config.js
pm2 save
pm2 startup                 # run the command it prints, so PM2 survives reboots
pm2 logs xo-club --lines 50
curl -I http://127.0.0.1:3000
```

### A6. nginx + HTTPS
```bash
cp deploy/nginx.conf.example /etc/nginx/sites-available/ahmedxoclub.com
# edit the paths/server_name if needed
ln -s /etc/nginx/sites-available/ahmedxoclub.com /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default
nginx -t && systemctl reload nginx

apt install -y certbot python3-certbot-nginx
certbot --nginx -d ahmedxoclub.com -d www.ahmedxoclub.com
```
Prefer hPanel's SSL if you use a Hostinger-managed VPS template — either is fine, just don't run both.

### A7. Future deploys (one command each)
```bash
cd /home/deploy/domains/ahmedxoclub.com/app
git pull && npm ci && npx prisma generate && npm run build && pm2 reload xo-club
```
(Or push to `main` and let a hPanel/Git webhook run that same sequence.)

---

## Method B — Hostinger Web Hosting / Cloud with Node.js support

Only if hPanel shows **Advanced → Node.js** (or "Setup Node.js App") for your plan.

1. hPanel → **Advanced → Node.js** → *Create application*:
   - Node version: **22.x** (bump it if the default is 18/20 — Next 16 requires ≥ 20)
   - Application root: `domains/ahmedxoclub.com/app`
   - Application URL: `ahmedxoclub.com`
   - Application startup file: `.next/standalone/server.js`
2. Upload the repo: hPanel → **Advanced → GIT** (or File Manager → upload a zip of the repo), then in
   the Node.js app's terminal run:
   ```bash
   npm ci && npx prisma generate && mkdir -p db logs && npx prisma db push && npm run build
   ```
   If `npm run build` is killed for memory, build it in GitHub Actions on Ubuntu and upload the
   `.next/standalone` folder instead (the Linux-built `sharp` binary ships with it).
3. Set the environment variables in the Node.js panel (copy from `.env.example`), with an absolute
   `DATABASE_URL`.
4. Restart the app from the panel, then complete the **verification checklist** below.

**Caveats to expect:** shared plans can throttle long builds, may not allow persistent background
processes, and Passenger-style startup sometimes needs `process.env.PORT` respected — the standalone
server already does this. If `/api/*` or the 410 responses misbehave, Method A is the fix.

---

## Method C — keep DNS at Hostinger, host the app on Vercel (fallback)

Use this if your plan has **no Node.js support**. You keep the domain registered at Hostinger and only
point it at the app.

1. Vercel → *New Project* → import `MansaMusaMogule86/ahmedxoclub` (framework auto-detected as Next.js).
2. Project → Settings → Environment Variables: add `DATABASE_URL`.
   ⚠️ Vercel's filesystem is ephemeral — SQLite will not persist there. Either:
   - move booking storage to a hosted database (Neon/Supabase Postgres via Prisma), **or**
   - accept that the site runs in "placeholder" mode: the homepage falls back to its elegant TBA/empty
     states and the WhatsApp CTAs still take every booking (the site is designed to degrade gracefully).
3. Vercel → Settings → Domains → add `ahmedxoclub.com` + `www.ahmedxoclub.com`.
4. In hPanel → **Domains → DNS zone**, replace the parking records with what Vercel shows:
   - `A  @    → 76.76.21.21`
   - `CNAME  www → cname.vercel-dns.com`
5. Wait for propagation (usually minutes), then issue SSL from Vercel.

Everything in the app — video hero, 410 handling, sitemap, schema, WhatsApp CTAs — works identically.

---

## Verification checklist (run after ANY method)

```bash
APP=https://ahmedxoclub.com

# 1. Core pages must be 200
for p in / /blog /dubai-nightlife-guide /nightclub-reservations-dubai \
         /xo-club-experience /dubai-nightclub-entertainment /vip-table-booking-dubai; do
  printf "%-42s %s\n" "$p" "$(curl -s -o /dev/null -w '%{http_code}' $APP$p)"
done

# 2. Retired competitor pages MUST be 410 Gone (legal cleanup)
for p in /vs-fobia-club /vs-omni-club /vs-avenue-club /vs-solitaire-club \
         /vs-dxb-night-club /vs-club-one /blog/xo-club-vs-fobia-night-club \
         /blog/xo-club-vs-omni-club /blog/xo-club-vs-avenue-club \
         /blog/xo-club-vs-dxb-night-club; do
  printf "%-42s %s\n" "$p" "$(curl -s -o /dev/null -w '%{http_code}' $APP$p)"
done

# 3. SEO plumbing
curl -s $APP/sitemap.xml | head -20          # no /vs- URLs should appear
curl -s $APP/robots.txt  | tail -15          # no Disallow for the retired paths
curl -sI $APP/sitemap.xml | grep -i content-type
```
Also confirm, in the browser: the hero video autoplays (muted) and the header logo shows on mobile;
open **View Source** on `/` and check the JSON-LD blocks are present.

Then: **Google Search Console** → add the domain property → submit `/sitemap.xml`. The 410s will be
processed automatically and removed from the index over the following weeks.

---

## Troubleshooting

| Symptom | Cause / fix |
|---|---|
| `Error code 14: Unable to open the database file` | `DATABASE_URL` is a relative path or the `db/` dir is missing. Use an **absolute** path and `mkdir -p db`. |
| 502 from nginx | The Node process is down: `pm2 logs xo-club`, confirm `PORT=3000` matches the nginx upstream. |
| Images look unoptimised, or a `sharp`/`linux-x64` error | The bundle was built on Windows. Rebuild **on the server** (`rm -rf .next node_modules && npm ci && npm run build`). |
| `next build` killed / OOM on shared hosting | Build in GitHub Actions (ubuntu-latest) and upload `.next/standalone`, or move to a VPS. |
| Hero video stutters or the page is slow | The MP4 is ~39 MB. Re-encode to ~4–6 MB: `ffmpeg -i xo-hero.mp4 -vf scale=1080:1920 -c:v libx264 -crf 26 -an -movflags +faststart xo-hero.mp4`, or serve media from a CDN. |
| Parked Hostinger page still shows | DNS still points at `2.57.91.91`. Replace the apex A record with the VPS/host IP and wait for propagation (`dig ahmedxoclub.com +short`). |
| Site works but bookings don't appear in the DB | Run `npx prisma db push` and check `db/` is writable by the app user (`chown -R deploy:deploy app`). |

---

## Content that must not be republished

The retired competitor-comparison pages and posts live in `archive/competitor-comparison/` and are
**not** served. They now return HTTP 410 via `src/proxy.ts`. Do not re-add them to navigation, the
sitemap, `llms.txt`, or `RETIRED_PATHS` — see `archive/competitor-comparison/README.md`.

