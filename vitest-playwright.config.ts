import { defineProject, mergeConfig } from 'vitest/config'
import configShared from './vitest.config.ts'

export default defineProject(mergeConfig(configShared, {
  test: {
    browser: {
      headless: true,
      instances: [{ browser: 'chromium' }],
      provider: 'playwright',
    },
  },
}))
