import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Read target version from CLI argument, or fallback to root package.json
const argVersion = process.argv[2];
const rootPkgPath = path.join(rootDir, 'package.json');
const rootPkg = JSON.parse(fs.readFileSync(rootPkgPath, 'utf8'));

const targetVersion = argVersion ? argVersion.replace(/^v/, '') : rootPkg.version;

if (!targetVersion || !/^\d+\.\d+\.\d+.*$/.test(targetVersion)) {
  console.error(`Invalid version format: "${targetVersion}". Expected semantic version like "2.3.0".`);
  process.exit(1);
}

console.log(`Synchronizing Metamorph documentation portal version to: v${targetVersion}\n`);

const UPDATES = [
  {
    filePath: 'package.json',
    replacements: [
      {
        pattern: /"version":\s*"[^"]+"/,
        replacement: `"version": "${targetVersion}"`,
      },
    ],
  },
  {
    filePath: 'README.md',
    replacements: [
      {
        pattern: /CLI-@nikelyh\/metamorph_v[\d.]+-blue/,
        replacement: `CLI-@nikelyh/metamorph_v${targetVersion}-blue`,
      },
    ],
  },
  {
    filePath: 'apps/client/index.html',
    replacements: [
      {
        pattern: /"softwareVersion":\s*"[^"]+"/,
        replacement: `"softwareVersion": "${targetVersion}"`,
      },
    ],
  },
  {
    filePath: 'apps/client/src/widgets/docs-sidebar/ui/DocsSidebar.tsx',
    replacements: [
      {
        pattern: />\s*v\d+\.\d+\.\d+\s*</,
        replacement: `>v${targetVersion}<`,
      },
    ],
  },
  {
    filePath: 'apps/client/src/shared/ui/SearchModal.tsx',
    replacements: [
      {
        pattern: /Metamorph v\d+\.\d+\.\d+ Docs/,
        replacement: `Metamorph v${targetVersion} Docs`,
      },
    ],
  },
  {
    filePath: 'apps/client/src/shared/ui/DocsPagination.tsx',
    replacements: [
      {
        pattern: /Metamorph CLI v\d+\.\d+\.\d+/,
        replacement: `Metamorph CLI v${targetVersion}`,
      },
    ],
  },
  {
    filePath: 'apps/client/src/pages/not-found/ui/NotFoundPage.tsx',
    replacements: [
      {
        pattern: /Metamorph v\d+\.\d+\.\d+/,
        replacement: `Metamorph v${targetVersion}`,
      },
    ],
  },
  {
    filePath: 'apps/client/src/pages/getting-started/ui/GettingStartedPage.tsx',
    replacements: [
      {
        pattern: /v\d+\.\d+\.\d+ on npm/,
        replacement: `v${targetVersion} on npm`,
      },
    ],
  },
  {
    filePath: 'AGENTS.md',
    replacements: [
      {
        pattern: /`@nikelyh\/metamorph`\s+v\d+\.\d+\.\d+/,
        replacement: `\`@nikelyh/metamorph\` v${targetVersion}`,
      },
      {
        pattern: /\(currently\s+\*\*v\d+\.\d+\.\d+\*\*\)/,
        replacement: `(currently **v${targetVersion}**)`,
      },
    ],
  },
  {
    filePath: '.agents/skills/metamorph-web-guide/SKILL.md',
    replacements: [
      {
        pattern: /\(currently\s+`v\d+\.\d+\.\d+`\)/,
        replacement: `(currently \`v${targetVersion}\`)`,
      },
    ],
  },
];

let changedCount = 0;

for (const entry of UPDATES) {
  const fullPath = path.join(rootDir, entry.filePath);
  if (!fs.existsSync(fullPath)) {
    console.warn(`[SKIP] File not found: ${entry.filePath}`);
    continue;
  }

  const original = fs.readFileSync(fullPath, 'utf8');
  let updated = original;

  for (const { pattern, replacement } of entry.replacements) {
    updated = updated.replace(pattern, replacement);
  }

  if (updated !== original) {
    fs.writeFileSync(fullPath, updated, 'utf8');
    console.log(`[UPDATED] ${entry.filePath}`);
    changedCount++;
  } else {
    console.log(`[ALREADY SYNCED] ${entry.filePath}`);
  }
}

console.log(`\nVersion sync complete! ${changedCount} file(s) updated.`);
