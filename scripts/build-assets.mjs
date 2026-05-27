// scripts/build-assets.mjs
// Copia para dist/ apenas os arquivos que devem ir para produção.
// Roda depois de "build:js" (que gera app.js e components.js do JSX).
// Sem dependências externas — usa só APIs nativas do Node.

import { cp, rm, mkdir } from 'node:fs/promises';

const DIST = 'dist';

// Limpa e recria dist/
await rm(DIST, { recursive: true, force: true });
await mkdir(DIST, { recursive: true });

// Arquivos individuais (na raiz do projeto)
const files = [
  'index.html',
  'styles.css',
  'app.js',
  'components.js',
  'favicon.svg',
  'robots.txt',
  'sitemap.xml',
  '_headers',
];

for (const f of files) {
  await cp(f, `${DIST}/${f}`);
}

// Pastas inteiras
const folders = ['imagens', 'legal'];
for (const folder of folders) {
  await cp(folder, `${DIST}/${folder}`, { recursive: true });
}

console.log(`dist/ pronto · ${files.length} arquivos + ${folders.length} pastas`);
