import { PrismaClient } from "@prisma/client";
import { existsSync, mkdirSync } from "node:fs";
import { dirname, isAbsolute, resolve } from "node:path";

/**
 * Resolve the SQLite database URL so that ALL of these open the SAME file:
 *   - `next dev`
 *   - the standalone production server (`.next/standalone/server.js`)
 *   - `npm run db:push` (see scripts/db-push.mjs, which mirrors this logic)
 *
 * Why this is needed: Prisma resolves a RELATIVE `file:` URL against the
 * *schema directory*, while the running server resolves it against its *cwd*.
 * With a relative URL the app and the CLI silently use different files, and a
 * stale absolute URL (e.g. a CI or sandbox path) throws
 * `Error code 14: Unable to open the database file`.
 *
 * Relative paths are therefore pinned to the project root, and the parent folder
 * is created if missing. Absolute paths pass through untouched — which is what
 * you want in production, e.g. file:/home/uXXXXXXXXX/domains/ahmedxoclub.com/app/db/custom.db
 */
function resolveDatabaseUrl(): string | undefined {
  const raw = process.env.DATABASE_URL;
  if (!raw || !raw.startsWith("file:")) return raw;

  const target = raw.slice("file:".length);
  if (isAbsolute(target)) return raw;

  const absolute = resolve(process.cwd(), target.replace(/^[.][/\\]/, "")).replace(/\\/g, "/");
  try {
    const dir = dirname(absolute);
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  } catch {
    /* read-only filesystem — let Prisma surface the real error */
  }
  return `file:${absolute}`;
}

const resolvedDatabaseUrl = resolveDatabaseUrl();
if (resolvedDatabaseUrl) process.env.DATABASE_URL = resolvedDatabaseUrl;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    // 'query' logging floods the console; real failures still surface as errors.
    log: process.env.NODE_ENV === "production" ? ["error"] : ["warn", "error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
