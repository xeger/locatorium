import { defineProject, mergeConfig } from 'vitest/config'
import configShared from './vitest.config.ts'

export default defineProject(mergeConfig(configShared, {
  test: {
    browser: {
      enabled: true,
      headless: true,
      instances: [{ browser: 'chrome' }],
      provider: 'webdriverio',
    },
  },
}))
