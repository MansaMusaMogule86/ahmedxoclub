/**
 * Favicon / app-icon set generator.
 *
 * Source of truth: the approved "AHMED XO CLUB" crown mark
 * (public/images/branding/xo-logo-square.png) — the same square asset used for
 * the header, the hero poster and the schema.org logo. Nothing here is drawn by
 * hand: the old hand-made crescent-moon SVG favicon is gone for good.
 *
 * Output (all flattened onto the brand night black #08080A so the gold stays
 * legible on light and dark browser chrome alike):
 *   src/app/favicon.ico                             16 / 32 / 48 (PNG-in-ICO)
 *   public/images/branding/favicon-16.png
 *   public/images/branding/favicon-32.png
 *   public/images/branding/favicon-48.png
 *   public/images/branding/apple-touch-icon.png     180x180 (iOS home screen)
 *   public/images/branding/icon-192.png             PWA "any"
 *   public/images/branding/icon-512.png             PWA "any" / OG fallback
 *   public/images/branding/icon-maskable-512.png    PWA "maskable" (safe zone)
 *
 * The mark is trimmed of its transparent padding first, so every size is as
 * large and as readable as a 16 px tab allows, then composited over the plate.
 * No SVG is produced on purpose — the artwork is a photorealistic gold render
 * and cannot be vectorised accurately (see src/components/club/brand-logo.tsx).
 *
 * Run: npm run icons
 */
import { writeFile } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const SRC = "public/images/branding/xo-logo-square.png";
const BRANDING = "public/images/branding";
const APP = "src/app";
/** Brand plate — the master's own background, matches theme_color in the manifest. */
const PLATE = "#08080A";
/** Maskable icons must keep their content inside 80% of the canvas diameter. */
const MASKABLE_INSET = 0.58;

/** The master mark with its transparent padding removed (446x390 @512). */
const mark = await sharp(SRC).ensureAlpha().trim({ threshold: 1 }).toBuffer();
const { width: markW = 0, height: markH = 0 } = await sharp(mark).metadata();

/** Mark centred on the brand plate at `inset` of the canvas, as a PNG buffer. */
async function plate(size, inset) {
  const inner = Math.max(1, Math.round(size * inset));
  const fitted = await sharp(mark)
    .resize(inner, inner, { fit: "inside", kernel: "lanczos3" })
    .sharpen({ sigma: 0.6 })
    .png()
    .toBuffer();
  return sharp({
    create: { width: size, height: size, channels: 4, background: PLATE },
  })
    .composite([{ input: fitted, gravity: "center" }])
    .png({ compressionLevel: 9 })
    .toBuffer();
}

/** Minimal PNG-in-ICO container — read by every modern browser and by Windows. */
function toIco(entries) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: 1 = icon
  header.writeUInt16LE(entries.length, 4);

  const dir = Buffer.alloc(16 * entries.length);
  let offset = header.length + dir.length;
  entries.forEach(({ size, data }, i) => {
    const at = i * 16;
    dir.writeUInt8(size >= 256 ? 0 : size, at); // width (0 = 256)
    dir.writeUInt8(size >= 256 ? 0 : size, at + 1); // height
    dir.writeUInt8(0, at + 2); // palette colours
    dir.writeUInt8(0, at + 3); // reserved
    dir.writeUInt16LE(1, at + 4); // colour planes
    dir.writeUInt16LE(32, at + 6); // bits per pixel
    dir.writeUInt32LE(data.length, at + 8); // payload size
    dir.writeUInt32LE(offset, at + 12); // payload offset
    offset += data.length;
  });

  return Buffer.concat([header, dir, ...entries.map((e) => e.data)]);
}

const icons = [
  { size: 16, inset: 0.94, out: join(BRANDING, "favicon-16.png") },
  { size: 32, inset: 0.94, out: join(BRANDING, "favicon-32.png") },
  { size: 48, inset: 0.94, out: join(BRANDING, "favicon-48.png") },
  { size: 180, inset: 0.86, out: join(BRANDING, "apple-touch-icon.png") },
  { size: 192, inset: 0.9, out: join(BRANDING, "icon-192.png") },
  { size: 512, inset: 0.9, out: join(BRANDING, "icon-512.png") },
  { size: 512, inset: MASKABLE_INSET, out: join(BRANDING, "icon-maskable-512.png") },
];

const written = [];
const icoSizes = [];

for (const { size, inset, out } of icons) {
  const data = await plate(size, inset);
  await writeFile(out, data);
  written.push(`${out} (${size}x${size}, ${(data.length / 1024).toFixed(1)} KB)`);
  if (size <= 48) icoSizes.push({ size, data });
}

const ico = toIco(icoSizes);
await writeFile(join(APP, "favicon.ico"), ico);
written.push(`${join(APP, "favicon.ico")} (${icoSizes.map((e) => e.size).join("/")}, ${(ico.length / 1024).toFixed(1)} KB)`);

console.log(`icon set — source ${SRC} (${markW}x${markH} trimmed mark)`);
for (const w of written) console.log(`  ✓ ${w}`);
