import { copyFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        tailwindcss(),
        {
            name: 'copy-standalone-stylesheet',
            closeBundle() {
                const cssAsset = readdirSync(resolve('dist/assets'))
                    .find((file) => file.endsWith('.css'));

                copyFileSync(resolve('dist/assets', cssAsset), resolve('standalone.css'));
                copyFileSync(resolve('standalone.css'), resolve('dist/standalone.css'));
            },
        },
    ],
});
