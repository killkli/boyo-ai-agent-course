import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve, dirname, basename } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const DOCS = resolve(ROOT, '../docs');
const CONTENT = resolve(ROOT, 'src/content');

function ensureDir(dir) {
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
}

function extractTitle(content) {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : '';
}

function injectFrontmatter(content, meta) {
  if (content.startsWith('---')) {
    return content;
  }
  const fm = Object.entries(meta)
    .filter(([, v]) => v !== undefined)
    .map(([k, v]) => {
      if (Array.isArray(v)) return `${k}:\n${v.map(i => `  - "${i}"`).join('\n')}`;
      if (typeof v === 'number') return `${k}: ${v}`;
      return `${k}: "${String(v).replace(/"/g, '\\"')}"`;
    })
    .join('\n');
  return `---\n${fm}\n---\n\n${content}`;
}

const MAPPING = [
  {
    collection: 'lessons',
    src: 'lesson-plan',
    pattern: /^(\d{2})-.+\.md$/,
    getMeta: (match, title) => ({
      title,
      order: parseInt(match[1]),
      duration: '50-60 分鐘',
    }),
  },
  {
    collection: 'labs',
    src: 'workshop/labs',
    pattern: /^lab-(\d{2})-.+\.md$/,
    getMeta: (match, title) => ({
      title,
      order: parseInt(match[1]),
      duration: '50 分鐘',
    }),
  },
  {
    collection: 'handouts',
    src: 'workshop/handouts',
    pattern: null,
    orderMap: {
      'student-schedule': 1,
      'standalone-schedule': 2,
      'prep-checklist': 3,
      'hermes-quick-ref': 4,
      'workshop-scenarios': 5,
      'feedback-form': 6,
    },
    getMeta: (match, title, filename) => {
      const base = filename.replace('.md', '');
      const orderMap = {
        'student-schedule': 1,
        'standalone-schedule': 2,
        'prep-checklist': 3,
        'hermes-quick-ref': 4,
        'workshop-scenarios': 5,
        'feedback-form': 6,
      };
      return { title, order: orderMap[base] || 99 };
    },
  },
  {
    collection: 'resources',
    src: 'online-materials',
    pattern: null,
    orderMap: {
      'prerequisites': 1,
      'resources': 2,
      'self-study-roadmap': 3,
    },
    getMeta: (match, title, filename) => {
      const base = filename.replace('.md', '');
      const orderMap = {
        'prerequisites': 1,
        'resources': 2,
        'self-study-roadmap': 3,
      };
      return { title, order: orderMap[base] || 99 };
    },
  },
  {
    collection: 'guides',
    src: 'workshop/guides',
    pattern: null,
    getMeta: (match, title, filename) => {
      const base = filename.replace('.md', '');
      const orderMap = { 'instructor-guide': 1, 'schedule': 2 };
      return { title, order: orderMap[base] || 99 };
    },
  },
  {
    collection: 'teaching-notes',
    src: 'teaching-notes',
    pattern: null,
    getMeta: (match, title, filename) => {
      const base = filename.replace('.md', '');
      const orderMap = { 'instructor-guide': 1, 'faq': 2 };
      return { title, order: orderMap[base] || 99 };
    },
  },
];

let total = 0;

for (const map of MAPPING) {
  const srcDir = resolve(DOCS, map.src);
  const destDir = resolve(CONTENT, map.collection);
  ensureDir(destDir);

  if (!existsSync(srcDir)) {
    console.log(`  跳過 ${map.collection}: 來源目錄不存在 (${srcDir})`);
    continue;
  }

  const { readdirSync } = await import('fs');
  const files = readdirSync(srcDir).filter(f => f.endsWith('.md'));

  for (const file of files) {
    const srcPath = resolve(srcDir, file);
    let content = readFileSync(srcPath, 'utf-8');
    const title = extractTitle(content);

    let match = null;
    if (map.pattern) {
      match = file.match(map.pattern);
      if (!match) continue;
    }

    const meta = map.getMeta(match, title, file);
    content = injectFrontmatter(content, meta);

    const destPath = resolve(destDir, file);
    writeFileSync(destPath, content, 'utf-8');
    console.log(`  ${map.collection}/${file} ← ${map.src}/${file}`);
    total++;
  }
}

console.log(`\n同步完成：${total} 個檔案`);
