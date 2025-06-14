import { defineConfig } from 'vite';
import ts from 'vite-plugin-ts';

export default defineConfig({
  plugins: [
    ts(),
    // viteStaticCopy removed for public/hq-promo-assets and public/events
  ],
  server: {
    // Removed invalid mimeTypes property
  },
  base: '/',
  build: {
    rollupOptions: {
      input: './index.html',
    },
  },
});