// @ts-check
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
    preact({
      // devtools: true,
      compat: true, // 使用 preact 的相容性模式
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});