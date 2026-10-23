/**
 * Asset guard — every "/images/…" or "/videos/…" path referenced in src/ must
 * exist in public/. Guards the "no broken image icons" launch requirement: a
 * deleted or renamed photo fails here instead of shipping as an empty slot.
 *
 * Slots that are intentionally reserved for approved photography that has not
 * been supplied yet are allow-listed; they render through the
 * dimension-preserving <MediaPlaceholder> instead of a broken image.
 *
 * Run: npm run check:assets
 */
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const SRC = "src";
const PUBLIC = "public";

/** Reserved-but-unpublished slots (see src/lib/premium.ts PERFORMER_SLOTS). */
const ALLOWED_MISSING = new Set([
  "/images/entertainment/djs/dj-01.webp",
  "/images/entertainment/djs/dj-02.webp",
  "/images/entertainment/djs/dj-03.webp",
  "/images/entertainment/dancers/dancer-01.webp",
  "/images/entertainment/dancers/dancer-02.webp",
  "/images/entertainment/dancers/dancer-03.webp",
]);

function walk(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry);
    return statSync(full).isDirectory() ? walk(full) : [full];
  });
}

const files = walk(SRC).filter((f) => /\.(ts|tsx)$/.test(f));
const refs = new Map();

for (const file of files) {
  const source = readFileSync(file, "utf8");
  const matches = source.matchAll(/["'`](\/(?:images|videos)\/[^"'`\s)]+)["'`]/g);
  for (const m of matches) {
    const asset = m[1];
    if (!refs.has(asset)) refs.set(asset, new Set());
    refs.get(asset).add(relative(process.cwd(), file));
  }
}

const missing = [];
const allowed = [];
for (const [asset, where] of [...refs].sort()) {
  if (existsSync(join(PUBLIC, asset))) continue;
  const entry = `${asset}\n      referenced by: ${[...where].join(", ")}`;
  if (ALLOWED_MISSING.has(asset)) allowed.push(asset);
  else missing.push(entry);
}

console.log(`asset guard — ${refs.size} referenced asset(s) checked`);

if (allowed.length) {
  console.log(`\nreserved/awaiting approved photography (${allowed.length}):`);
  for (const a of allowed) console.log(`  • ${a}`);
}

if (missing.length) {
  console.error(`\nERROR: ${missing.length} referenced asset(s) missing from public/:\n`);
  for (const m of missing) console.error(`  ✗ ${m}`);
  console.error("\nEither restore the file or route the slot through <MediaPlaceholder>.");
  process.exit(1);
}

console.log("\nOK — every referenced asset exists.");
