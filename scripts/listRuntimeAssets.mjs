import { execFileSync } from "node:child_process";
import fs from "node:fs";

const mediaPathPattern =
  /\/(?:assets|images)\/[A-Za-z0-9_./-]+\.(?:avif|bmp|gif|ico|jpe?g|png|svg|webp|mp4|m4v|mov|webm|glb|gltf|woff2?|ttf|otf|mp3|wav|ogg)/gi;

const assets = new Set();
const sourceFiles = execFileSync("git", ["ls-files", "src"], { encoding: "utf8" })
  .trim()
  .split("\n")
  .filter(Boolean);

for (const file of sourceFiles) {
  const source = fs.readFileSync(file, "utf8");
  for (const match of source.matchAll(mediaPathPattern)) assets.add(match[0]);
}

// The bracelet designer builds thumbnail and GLB paths dynamically. Read the
// data declarations to include every generated asset without importing the app.
const designerFile = "src/data/taoBraceletDesigner.ts";
const designerSource = fs.readFileSync(designerFile, "utf8");
const generatedIds = [];
const mainBeadPattern =
  /const\s+\w+Beads\s*=\s*makeMainBeads\(\s*"[^"]+",\s*"([^"]+)",\s*\[\n([\s\S]*?)\n\s*\],\s*\n\s*"/g;
for (const match of designerSource.matchAll(mainBeadPattern)) {
  const [, prefix, entries] = match;
  const count = [...entries.matchAll(/^\s*\["/gm)].length;
  for (let index = 1; index <= count; index += 1) {
    generatedIds.push(`${prefix}-${String(index).padStart(2, "0")}`);
  }
}

const spacerEntries = designerSource.match(
  /const\s+spacerBeads[^=]*=\s*\[([\s\S]*?)\]\.map/,
)?.[1];
const spacerCount = [...(spacerEntries || "").matchAll(/^\s*\["/gm)].length;
for (let index = 1; index <= spacerCount; index += 1) {
  generatedIds.push(`spacer-${String(index).padStart(2, "0")}`);
}

const accessoryEntries = designerSource.match(
  /const\s+aiAccessoryNames[^=]*=\s*\[([\s\S]*?)\];/,
)?.[1];
const accessoryCount = [...(accessoryEntries || "").matchAll(/^\s*\["/gm)].length;
for (let index = 1; index <= accessoryCount; index += 1) {
  generatedIds.push(`accessory-${String(index).padStart(2, "0")}`);
}

const excludedIds = new Set(
  [...designerSource.matchAll(/item\.id\s*!==\s*"([^"]+)"/g)].map(
    (match) => match[1],
  ),
);
for (const id of generatedIds) {
  if (excludedIds.has(id)) continue;
  assets.add(`/assets/tao-diy/thumbs/${id}.webp`);
  assets.add(`/assets/tao-diy/models/${id}.glb`);
}

for (const asset of [...assets].sort()) {
  process.stdout.write(`${asset.replace(/^\//, "")}\n`);
}
