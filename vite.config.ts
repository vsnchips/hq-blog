import { defineConfig } from 'vite';
import ts from 'vite-plugin-ts';

export default defineConfig({
  plugins: [ts()],
  server: {
    mimeTypes: {
      '.ts': 'application/javascript',
    },
  },
  base: '/',
  build: {
    rollupOptions: {
      input: './index.html',
    },
  },
});