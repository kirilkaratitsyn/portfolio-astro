// Fails if de.json or uk.json is missing a key (or array item) that en.json has.
import fs from 'node:fs';

const load = (locale) => JSON.parse(fs.readFileSync(new URL(`../src/i18n/${locale}.json`, import.meta.url)));
const shape = (value, path = '') => {
  if (Array.isArray(value)) return value.flatMap((item, index) => shape(item, `${path}[${index}]`));
  if (value && typeof value === 'object') return Object.entries(value).flatMap(([key, item]) => shape(item, path ? `${path}.${key}` : key));
  return [path];
};

const reference = new Set(shape(load('en')));
let failed = false;
for (const locale of ['de', 'uk']) {
  const keys = new Set(shape(load(locale)));
  const missing = [...reference].filter((key) => !keys.has(key));
  const extra = [...keys].filter((key) => !reference.has(key));
  if (missing.length || extra.length) {
    failed = true;
    console.error(`${locale}: missing ${missing.length}, extra ${extra.length}`, { missing, extra });
  }
}
console.log(failed ? 'i18n keys differ' : `i18n keys match (${reference.size} keys)`);
process.exit(failed ? 1 : 0);
