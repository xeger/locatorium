import { page } from '@vitest/browser/context'
import { beforeEach, test } from 'vitest'
import { CombinationPage } from './combination'

beforeEach(() => {
  page.render(<CombinationPage/>)
})

// Vitest doesn't support intersection of locators yet.
test.todo('intersection of two locators')

// Vitest doesn't support union of locators yet.
test.todo('union of two locators')
