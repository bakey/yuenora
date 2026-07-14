import { readFileSync, writeFileSync } from "node:fs";
import { globSync } from "node:fs";

const R2_PUBLIC_URL = "https://pub-364a76a828f94fbeb2b09c625907dcf5.r2.dev";
const files = globSync("src/**/*.css");

for (const file of files) {
  const original = readFileSync(file, "utf-8");
  const updated = original.replace(
    /url\(\s*(['"]?)\/((?:assets|images)\/[^'"\)]+)\1\s*\)/g,
    (_, quote, path) => `url(${quote}${R2_PUBLIC_URL}/${path}${quote})`,
  );
  if (updated !== original) {
    writeFileSync(file, updated, "utf-8");
    console.log("updated", file);
  }
}
