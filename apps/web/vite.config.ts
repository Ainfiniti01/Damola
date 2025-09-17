import path from 'node:path';
import { reactRouter } from '@react-router/dev/vite'; 
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths'; 
import { loadFontsFromTailwindSource } from './plugins/loadFontsFromTailwindSource';

export default defineConfig(({ command }) => ({
  // Keep them available via import.meta.env.NEXT_PUBLIC_*
  envPrefix: 'NEXT_PUBLIC_',
  base: command === 'build' ? '/Damola/' : '/',  // 👈 switch base depending on mode
  root: '.',
  build: {
    rollupOptions: {
      input: 'index.html',
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router'],
    exclude: ['@hono/auth-js', '@auth/core'],
  },
  plugins: [
    reactRouter(),
    tsconfigPaths(),
    loadFontsFromTailwindSource(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    dedupe: ['react', 'react-dom'],
  },
}));
