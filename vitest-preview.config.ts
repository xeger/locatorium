import { defineProject, mergeConfig } from 'vitest/config'
import configShared from './vitest.config.ts'

export default defineProject(mergeConfig(configShared, {
  test: {
    browser: {
      headless: false,
      instances: [{ browser: 'chrome' }],
      provider: 'preview',
    },
  },
}))
