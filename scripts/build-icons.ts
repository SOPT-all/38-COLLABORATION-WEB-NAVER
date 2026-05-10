import {execSync} from 'child_process';
import {promises as fs} from 'fs';
import path from 'path';

const ICONS_DIR = path.resolve('src/shared/icons');
const OUT_FILE = path.join(ICONS_DIR, 'index.ts');

function toPascalCase(name: string): string {
  const pascalName = getIconName(name)
    .split(/[^a-zA-Z0-9]/)
    .filter(Boolean)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join('');
  return `IcSvg${pascalName}`;
}

function toSnakeCaseFileName(name: string): string {
  const snakeName = getIconName(name)
    .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
    .split(/[^a-zA-Z0-9]/)
    .filter(Boolean)
    .map((s) => s.toLowerCase())
    .join('_');
  return `ic_${snakeName}.tsx`;
}

function getIconName(name: string): string {
  return name.replace(/\.[^.]+$/, '').replace(/^Ic(?=[A-Z])/, '');
}

async function main() {
  try {
    await fs.rm(ICONS_DIR, {recursive: true, force: true});
    await fs.mkdir(ICONS_DIR, {recursive: true});

    const svgrCommand = `pnpm exec svgr src/shared/assets/svg --out-dir ${ICONS_DIR} --ext tsx --typescript --no-dimensions --icon --no-index --jsx-runtime automatic --no-prettier`;
    execSync(svgrCommand, {stdio: 'inherit'});

    const generatedFiles = (await fs.readdir(ICONS_DIR)).filter(
      (f) => f.endsWith('.tsx') && !f.startsWith('index')
    );

    const exportLines = [
      '// (auto-generated) Do not edit manually.',
      '// Run `pnpm build:icons` to regenerate.\n',
    ];

    for (const file of generatedFiles) {
      const oldPath = path.join(ICONS_DIR, file);
      const newFileName = toSnakeCaseFileName(file);
      const newPath = path.join(ICONS_DIR, newFileName);
      const componentName = toPascalCase(file);

      await fs.rename(oldPath, newPath);

      let content = await fs.readFile(newPath, 'utf8');

      content = content.replace(
        /(stroke)=['"]([^'"]+)['"]/g,
        (_match, p1) => `${p1}="currentColor"`
      );

      content = content.replace(
        /(<path[^>]*?|<g[^>]*?)fill=['"]([^'"]+?)['"]/g,
        (match, p1, p2) => {
          if (p2 === 'none' || p2 === 'transparent' || p2.startsWith('url(')) {
            return match;
          }
          return `${p1}fill="currentColor"`;
        }
      );

      content = content.replace(/^import \* as React from 'react';\r?\n/m, '');

      content = content.replace(/const Svg[^ ]+ =/, `const ${componentName} =`);
      content = content.replace(
        /export default Svg[^;]+;/,
        `export default ${componentName};`
      );

      const importMatch = content.match(
        /^(import type \{ SVGProps \} from 'react';\r?\n)/m
      );
      if (importMatch) {
        if (!content.startsWith(`${importMatch[0]}\n`)) {
          content = content.replace(importMatch[0], `${importMatch[0]}\n`);
        }
      }

      await fs.writeFile(newPath, content);

      exportLines.push(
        `export { default as ${componentName} } from './${newFileName.replace('.tsx', '')}';`
      );
    }

    exportLines.push('');
    await fs.writeFile(OUT_FILE, exportLines.join('\n'), 'utf8');

    execSync(`pnpm exec prettier ${ICONS_DIR} --write`, {stdio: 'inherit'});
  } catch (error) {
    console.error('An error occurred during icon build process:', error);
    process.exit(1);
  }
}

main();
