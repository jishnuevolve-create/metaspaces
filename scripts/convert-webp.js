// One-off image optimization script. Converts the site's real photos to
// WebP at sane display sizes. Run: node scripts/convert-webp.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '..', 'images');

// Target max width for each usage — gallery/service photos never need to
// be wider than ~2x their largest on-screen size (roughly 600px CSS width).
const TARGETS = {
  'living.jpg': 900,          // hero photo, largest on-screen usage
  'bedroom-warm.jpg': 700,
  'kitchen-dark.jpg': 700,
  'kids.jpg': 700,
  'bedroom-earthy.jpg': 700,
  'balcony.jpg': 700,
  'dresser.jpg': 700,
};

async function run() {
  const results = [];
  for (const [file, maxWidth] of Object.entries(TARGETS)) {
    const inputPath = path.join(IMAGES_DIR, file);
    if (!fs.existsSync(inputPath)) { console.log('skip (missing):', file); continue; }
    const outputName = file.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    const outputPath = path.join(IMAGES_DIR, outputName);

    const meta = await sharp(inputPath).metadata();
    const resizeWidth = Math.min(meta.width, maxWidth);

    const info = await sharp(inputPath)
      .resize({ width: resizeWidth })
      .webp({ quality: 78 })
      .toFile(outputPath);

    const beforeBytes = fs.statSync(inputPath).size;
    results.push({
      file,
      outputName,
      before: beforeBytes,
      after: info.size,
      width: info.width,
      height: info.height,
    });
  }

  console.log('\nfile,before_kb,after_kb,saved_pct,width,height');
  results.forEach(r => {
    const savedPct = (100 * (1 - r.after / r.before)).toFixed(0);
    console.log(`${r.outputName},${(r.before/1024).toFixed(0)},${(r.after/1024).toFixed(0)},${savedPct}%,${r.width},${r.height}`);
  });
}

run().catch(err => { console.error(err); process.exit(1); });
