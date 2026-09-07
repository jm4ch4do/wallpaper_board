import { copyFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        tailwindcss(),
        {
            name: 'copy-standalone-stylesheet',
            closeBundle() {
                copyFileSync(resolve('standalone.css'), resolve('dist/standalone.css'));
            },
        },
    ],
});
