import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue2';
import { resolve } from 'path';

export default defineConfig({
    plugins: [
        Vue(),
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@/assets/sass/index.scss";`
            },
        }
    }
});
