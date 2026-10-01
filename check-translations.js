import fs from 'fs';
import path from 'path';

const enPath = path.resolve('./src/i18n/en.json');
const elPath = path.resolve('./src/i18n/el.json');

let enKeys, elKeys;

try {
  enKeys = Object.keys(JSON.parse(fs.readFileSync(enPath, 'utf8')));
  elKeys = Object.keys(JSON.parse(fs.readFileSync(elPath, 'utf8')));
} catch (error) {
  console.error('❌ i18n Check Failed: Could not read or parse JSON files.', error.message);
  process.exit(1);
}

const missingInEl = enKeys.filter(key => !elKeys.includes(key));
const missingInEn = elKeys.filter(key => !enKeys.includes(key));

if (missingInEl.length === 0 && missingInEn.length === 0) {
  console.log('✅ i18n Check Passed: English and Greek keys match perfectly.');
  process.exit(0);
}

console.error('❌ i18n Check Failed: Translation key mismatch detected!\n');

if (missingInEl.length > 0) {
  console.error(`Keys missing in Greek (el.json):`);
  missingInEl.forEach(key => console.error(`  - ${key}`));
}

if (missingInEn.length > 0) {
  console.error(`Keys missing in English (en.json):`);
  missingInEn.forEach(key => console.error(`  - ${key}`));
}

console.error('\nPlease fix the missing keys and run again.');
process.exit(1);
