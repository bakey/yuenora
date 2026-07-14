import { readFileSync, writeFileSync } from "node:fs";
import { globSync } from "node:fs";

const files = [
  ...globSync("src/**/*.ts"),
  ...globSync("src/**/*.tsx"),
];

const patterns = [
  { re: /(?<!assetUrl\()"(\/(?:assets|images)\/[^"]+)"/g, wrap: (m) => `assetUrl("${m}")` },
  { re: /(?<!assetUrl\()'(\/(?:assets|images)\/[^']+)'/g, wrap: (m) => `assetUrl('${m}')` },
  { re: /(?<!assetUrl\()`(\/(?:assets|images)\/[\s\S]*?)`/g, wrap: (m) => `assetUrl(\`${m}\`)` },
];

for (const file of files) {
  const original = readFileSync(file, "utf-8");
  let changed = original;
  let hasAsset = false;

  const lines = changed.split("\n");
  const newLines = lines.map((line) => {
    if (line.trim().startsWith("//") || line.includes(".includes(")) {
      return line;
    }
    let newLine = line;
    for (const { re, wrap } of patterns) {
      newLine = newLine.replace(re, (_, path) => {
        hasAsset = true;
        return wrap(path);
      });
    }
    return newLine;
  });
  changed = newLines.join("\n");

  if (hasAsset && !changed.includes('import { assetUrl } from "@/lib/assets"')) {
    changed = `import { assetUrl } from "@/lib/assets";\n${changed}`;
  }

  if (changed !== original) {
    writeFileSync(file, changed, "utf-8");
    console.log("updated", file);
  }
}
