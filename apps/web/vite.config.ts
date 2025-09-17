import path from 'node:path';
import { reactRouter } from '@react-router/dev/vite'; // Assuming this is needed for routing
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths'; // For TS path aliases
import { loadFontsFromTailwindSource } from './plugins/loadFontsFromTailwindSource';

export default defineConfig({
  // Keep them available via import.meta.env.NEXT_PUBLIC_*
  envPrefix: 'NEXT_PUBLIC_',
  base: '/Damola/', // Set base for GitHub Pages subpath
  root: '.', // Set project root to current directory
  build: {
    rollupOptions: {
      input: 'index.html', // Simple relative path
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router'], // Add common dependencies
    exclude: ['@hono/auth-js', '@auth/core'], // Exclude known problematic ones
  },
  plugins: [
    reactRouter(),
    tsconfigPaths(),
    loadFontsFromTailwindSource(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Essential alias
    },
    dedupe: ['react', 'react-dom'],
  },
});
