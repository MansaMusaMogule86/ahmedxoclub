/**
 * PM2 process definition for XO Club Dubai (ahmedxoclub.com) on a Hostinger VPS.
 *
 * Prerequisites on the server (see docs/deploy/hostinger.md):
 *   npm ci && npx prisma generate && npx prisma db push && npm run build
 *
 * Start / reload:
 *   pm2 start ecosystem.config.js && pm2 save
 *   pm2 reload xo-club            # after a new deploy
 *
 * NOTE: `npm run build` must run ON the server. The build bundles `sharp`, whose
 * native binary is platform-specific — a bundle built on Windows will not run on
 * a Linux host.
 *
 * Keep secrets in `.env` on the server rather than here; the values below are
 * placeholders and are only used if `.env` does not define them.
 */
module.exports = {
  apps: [
    {
      name: "xo-club",
      script: ".next/standalone/server.js",
      cwd: __dirname,
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        HOSTNAME: "127.0.0.1",
        // Replace uXXXXXXXXX with your Hostinger username (absolute path required).
        DATABASE_URL:
          "file:/home/uXXXXXXXXX/domains/ahmedxoclub.com/app/db/custom.db",
      },
      out_file: "./logs/pm2-out.log",
      error_file: "./logs/pm2-error.log",
      merge_logs: true,
      time: true,
    },
  ],
};
