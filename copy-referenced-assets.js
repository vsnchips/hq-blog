// Script to copy only referenced assets from hq-promo-assets and events
// Usage: node copy-referenced-assets.js

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import fse from 'fs-extra';
import { fileURLToPath } from 'url';

// Folders to scan for references
const SRC_DIRS = ['src', 'public/posts'];
// Asset folders to scan/copy from
const ASSET_FOLDERS = [
  { src: 'ext_assets/hq-promo-assets', public: 'ext_assets/hq-promo-assets' },
  { src: 'ext_assets/events', public: 'ext_assets/events' },
];
// Output folder (in dist)
const OUTPUT_DIR = 'dist';

// Regex to match asset references like /hq-promo-assets/filename.jpg or ext_assets/events/...
// Updated to handle both /hq-promo-assets/... and ext_assets/... in the reference extraction logic
const assetRegex = /([/\\](hq-promo-assets|events)[/\\][^"'\s)]+\.(?:jpe?g|png|gif|svg|webp|mp4|mov|pdf))|(["']ext_assets[/\\][^"']+\.(?:jpe?g|png|gif|svg|webp|mp4|mov|pdf)["'])/gi;

async function findReferencedAssets() {
  const referenced = new Set();
  for (const dir of SRC_DIRS) {
    const files = await glob(`${dir}/**/*.{js,ts,tsx,html,md,mdx}`);
    for (const file of files) {
      const content = fs.readFileSync(file, 'utf8');
      let match;
      while ((match = assetRegex.exec(content))) {
        // Handle both /hq-promo-assets/... and ext_assets/... matches
        if (match[1]) {
          referenced.add(match[1].replace(/^["']|["']$/g, ''));
        } else if (match[3]) {
          referenced.add(match[3].replace(/^["']|["']$/g, ''));
        }
      }
    }
  }
  console.log(`Found ${referenced.size} unique asset references.`);
  return referenced;
}

function copyAssets(referenced) {
  referenced.forEach(relPath => {
    // Normalize path for both / and \
    const normRelPath = relPath.replace(/\\/g, '/').replace(/^\//, '');
    // Remove leading 'ext_assets/' if present for matching
    const relPathNoPrefix = normRelPath.replace(/^ext_assets\//, '');
    const [folder, ...rest] = relPathNoPrefix.split('/');
    // Find the asset folder by folder name only
    const assetFolder = ASSET_FOLDERS.find(f => f.public.endsWith(folder));
    if (!assetFolder) return;
    const srcFile = path.join(assetFolder.src, ...rest);
    const destFile = path.join(OUTPUT_DIR, 'ext_assets', folder, ...rest);
    if (fs.existsSync(srcFile)) {
      fse.ensureDirSync(path.dirname(destFile));
      fse.copyFileSync(srcFile, destFile);
      console.log(`Copied: ${srcFile} -> ${destFile}`);
    } else {
      console.warn(`Missing: ${srcFile}`);
    }
  });
}

async function main() {
  const referenced = await findReferencedAssets();
  copyAssets(referenced);
  console.log('Done. Only referenced assets copied to', OUTPUT_DIR);
}

main();
