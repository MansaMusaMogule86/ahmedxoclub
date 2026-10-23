#!/usr/bin/env bash
# ---------------------------------------------------------------------------
# XO Club Dubai — one-shot setup for a fresh Hostinger VPS (Ubuntu 22.04/24.04)
#
# Usage (as root, once, after pointing the domain's A records at this VPS):
#   bash hostinger-vps-setup.sh ahmedxoclub.com https://github.com/MansaMusaMogule86/ahmedxoclub.git
#
# Then edit DATABASE_URL in .env (see the APP_DIR path printed at the end) and
# run the SSL step it prints. Idempotent: safe to re-run.
# ---------------------------------------------------------------------------
set -euo pipefail

DOMAIN="${1:-ahmedxoclub.com}"
REPO="${2:-https://github.com/MansaMusaMogule86/ahmedxoclub.git}"
APP_DIR="/home/deploy/domains/${DOMAIN}/app"
NODE_MAJOR=22

echo "==> XO Club Dubai deploy: domain=${DOMAIN} repo=${REPO}"

echo "==> [1/8] system packages"
apt-get update -y
apt-get install -y curl git nginx unzip ca-certificates

echo "==> [2/8] Node ${NODE_MAJOR} LTS"
if ! command -v node >/dev/null 2>&1 || [ "$(node -v | cut -d. -f1 | tr -d v)" -lt 20 ]; then
  curl -fsSL "https://deb.nodesource.com/setup_${NODE_MAJOR}.x" | bash -
  apt-get install -y nodejs
fi
node -v
npm -v

echo "==> [3/8] PM2"
command -v pm2 >/dev/null 2>&1 || npm i -g pm2

echo "==> [4/8] clone / update app"
mkdir -p "$(dirname "$APP_DIR")"
if [ -d "$APP_DIR/.git" ]; then
  git -C "$APP_DIR" pull --ff-only
else
  git clone "$REPO" "$APP_DIR"
fi
cd "$APP_DIR"

echo "==> [5/8] dependencies + prisma"
npm ci
npx prisma generate
mkdir -p db logs
[ -f .env ] || cp .env.example .env
# Force an absolute SQLite path for this host (relative paths break Prisma).
if grep -q 'uXXXXXXXXX' .env; then
  sed -i "s|^DATABASE_URL=.*|DATABASE_URL=\"file:${APP_DIR}/db/custom.db\"|" .env
fi
grep '^DATABASE_URL' .env
npx prisma db push

echo "==> [6/8] build (bundles the Linux-native sharp binary — must run here)"
npm run build

echo "==> [7/8] start under PM2"
if pm2 describe xo-club >/dev/null 2>&1; then
  pm2 reload xo-club
else
  pm2 start ecosystem.config.js
fi
pm2 save
pm2 startup systemd -u root --hp /root || true   # makes PM2 restart after reboot

echo "==> [8/8] nginx reverse proxy"
cp deploy/nginx.conf.example "/etc/nginx/sites-available/${DOMAIN}"
sed -i "s/ahmedxoclub\.com/${DOMAIN}/g" "/etc/nginx/sites-available/${DOMAIN}"
ln -sf "/etc/nginx/sites-available/${DOMAIN}" "/etc/nginx/sites-enabled/${DOMAIN}"
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl reload nginx

echo
echo "=============================================================="
echo " App is running. Verify locally:"
echo "   curl -I http://127.0.0.1:3000"
echo "   curl -o /dev/null -w '%{http_code}' http://127.0.0.1:3000/vs-fobia-club   # expect 410"
echo
echo " Then enable HTTPS:"
echo "   apt-get install -y certbot python3-certbot-nginx"
echo "   certbot --nginx -d ${DOMAIN} -d www.${DOMAIN}"
echo
echo " If DNS was not pointing here yet, fix the A records at Hostinger first."
echo " App dir: ${APP_DIR}"
echo "=============================================================="
