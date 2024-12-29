/// <reference types="vitest" />
import { defineProject } from 'vitest/config';

export default defineProject
({
  test: {
    include: ['src/**/*.test.{ts,tsx}'],
    globals: true,
    setupFiles: ['./vitest-setup.ts', 'vitest-browser-react'],
    browser: {
      enabled: true,
      instances: [{ browser: 'chrome' }],
    },
  }
})
