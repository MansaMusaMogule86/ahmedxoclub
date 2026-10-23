/**
 * `npm run db:push` — cross-platform wrapper around `prisma db push` that always
 * targets the SAME SQLite file the running app uses (see src/lib/db.ts for the
 * mirrored resolver, and the comment there explaining why relative `file:` URLs
 * are ambiguous between the Prisma CLI and the running server).
 *
 *   .env  DATABASE_URL="file:./db/custom.db"        → <projectRoot>/db/custom.db
 *   .env  DATABASE_URL="file:/home/u1/app/db/db.db" → absolute, used as-is
 */
import { existsSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, isAbsolute, join, resolve } from "node:path";
import { spawnSync } from "node:child_process";

const root = process.cwd();

function readEnvFile() {
  const envPath = join(root, ".env");
  if (!existsSync(envPath)) return undefined;
  const match = readFileSync(envPath, "utf8").match(
    /^\s*DATABASE_URL\s*=\s*"?([^"\r\n]+)"?\s*$/m
  );
  return match ? match[1].trim() : undefined;
}

let url = process.env.DATABASE_URL || readEnvFile();

if (!url) {
  console.error("DATABASE_URL is not set (checked the environment and .env).");
  process.exit(1);
}

if (url.startsWith("file:")) {
  const target = url.slice("file:".length);
  if (!isAbsolute(target)) {
    const absolute = resolve(root, target.replace(/^[.][/\\]/, "")).replace(/\\/g, "/");
    const dir = dirname(absolute);
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
      console.log(`created ${dir}`);
    }
    url = `file:${absolute}`;
  }
}

console.log(`prisma db push → ${url}`);
const result = spawnSync("npx", ["prisma", "db", "push", "--accept-data-loss"], {
  stdio: "inherit",
  shell: process.platform === "win32",
  env: { ...process.env, DATABASE_URL: url },
});
process.exit(result.status ?? 1);
