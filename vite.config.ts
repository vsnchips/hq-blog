import { defineConfig } from 'vite';
import ts from 'vite-plugin-ts';

export default defineConfig({
  plugins: [
    ts(),
    // viteStaticCopy removed for public/hq-promo-assets and public/events
  ],
  server: {
    // Removed invalid mimeTypes property
    host: '0.0.0.0',
    port: 5174,
  },
  base: '/',
  build: {
    rollupOptions: {
      input: './index.html',
    },
  },
});