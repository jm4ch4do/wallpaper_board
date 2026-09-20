import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [
        {
            name: 'relative-asset-paths',
            hooks: {
                // Rewrite root-absolute asset URLs to relative ones so dist/index.html
                // can be opened directly via file:// without a server.
                'astro:build:done': ({ dir }) => {
                    const outDir = fileURLToPath(dir);
                    const htmlFiles = readdirSync(outDir).filter((file) => file.endsWith('.html'));

                    for (const file of htmlFiles) {
                        const filePath = join(outDir, file);
                        const content = readFileSync(filePath, 'utf8');
                        const patched = content.replace(/(href|src)="\/(?!\/)/g, '$1="./');
                        writeFileSync(filePath, patched);
                    }
                },
            },
        },
    ],
});
