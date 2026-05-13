import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const assetsDir = 'c:/src/projects/Mood_logger/moodLogger_webpage/src/assets';

async function optimizeImages() {
  const files = fs.readdirSync(assetsDir);
  for (const file of files) {
    if (file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.jpeg')) {
      const ext = path.extname(file);
      const name = path.basename(file, ext);
      const inputPath = path.join(assetsDir, file);
      const outputPath = path.join(assetsDir, `${name}.webp`);

      console.log(`Converting ${file} to ${name}.webp...`);
      try {
        await sharp(inputPath)
          .webp({ quality: 80, effort: 6 })
          .toFile(outputPath);
        
        fs.unlinkSync(inputPath); // Delete original
        console.log(`Deleted ${file}`);
      } catch (e) {
        console.error(`Error converting ${file}:`, e);
      }
    }
  }
  console.log('Optimization complete.');
}

optimizeImages();
