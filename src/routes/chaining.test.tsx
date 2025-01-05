import { page } from '@vitest/browser/context'
import { beforeEach, describe, expect, test } from 'vitest'
import { ChainingPage } from './chaining'

beforeEach(() => {
  page.render(<ChainingPage/>)
})

describe('starting at page', () => {
  test('getByRole', async () => {
    // Good: find by inner text.
    //   - This is not very specific, and may find the wrong elements(s) when searching the whole page.
    await expect.element(page.getByText('Alpha')).toBeInTheDocument()

    // Better: find by test id
    //   - This always works, but relies on developers being extremely diligent in choosing globally-unique test ids.
    //   - Best for top-level elements of the app; fairly useless for nested pieces of complex organisms and molecules.
    await expect.element(page.getByTestId('unchained-button')).toBeInTheDocument()

    // Best: find by role + accessible name (via inner text).
    await expect.element(page.getByRole('button', {name: 'Find Me'})).toBeInTheDocument()
    // May apply modifiers e.g. disabled to narrow down the search, even without a name.
    await expect.element(page.getByRole('button', {disabled: true})).toBeInTheDocument()

    // Best: find by role + accessible name (via aria-label)
    await expect.element(page.getByRole('button', {name: 'unchained button'})).toBeInTheDocument()
    // Note that aria-label takes precedence over inner text to determine the accessible name.
    await expect.element(page.getByRole('button', {name: 'Alpha'})).not.toBeInTheDocument()
  })
})

describe('chaining from an existing locator', () => {
  test('getByRole', async () => {
    const parent1 = page.getByLabelText('chained parent 1');
    const parent2 = page.getByLabelText('chained parent 2');
    await expect.element(parent1.getByRole('button')).toHaveTextContent('Bravo')
    await expect.element(parent2.getByRole('button')).toHaveTextContent('Charlie')
  })
})
