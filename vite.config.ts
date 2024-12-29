/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import istanbul from 'vite-plugin-istanbul';

export default defineConfig({
  build: {
    // TODO: experiment with coverage, especially v8 (but only if it works with playwright!)
    sourcemap: 'hidden',
  },
  plugins: [
    react(),
    istanbul({
      include: 'src/*',
      exclude: ['node_modules', 'test/'],
      requireEnv: false,
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  test: {
    include: ['src/**/*.test.{ts,tsx}'],
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest-setup.ts', 'vitest-browser-react'],
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['src/**/*.test.{ts,tsx}'],
    },
    browser: {
      enabled: true,
      headless: true,
      instances: [{ browser: 'chromium' }],
      provider: 'playwright',
    },
  },
});
