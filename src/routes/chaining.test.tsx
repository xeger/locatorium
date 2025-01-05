import { page } from '@vitest/browser/context'
import { beforeEach, describe, expect, test } from 'vitest'
import { ChainingPage } from './chaining'

beforeEach(() => {
  page.render(<ChainingPage/>)
})

describe('find elements anywhere', async () => {
  // Good: look for the visible text inside an element
  //   - This is not very specific, and may find the wrong elements(s) when searching the whole page.
  //   - It may fail when icons or divs are interspersed with the search text.
  test('by inner text', async () => {
    await expect.element(page.getByText('Alpha')).toBeInTheDocument()
  })

  // Better: look for a specific test id
  //   - Relies on developers being extremely diligent in choosing globally-unique test ids.
  //   - Works well with major components of an app: tabs, cards, sections, etc.
  //   - Fails in numerous situations:
  //       - Reusable components (are repeated many times, duplicating their childrens' test IDs!)
  //       - Dynamically generated lists, grids or tables of anything.
  test('by test id', async () => {
    await expect.element(page.getByTestId('alligator')).toBeInTheDocument()
  })

  test('by role', async () => {
    // Best: find by role + accessible name (as inner text)
    await expect.element(page.getByRole('button', {name: 'Zulu'})).toBeInTheDocument()
    // Or: find by role + accessible name (as aria-label)
    await expect.element(page.getByRole('button', {name: 'Able'})).toBeInTheDocument()

    // Tip: aria-label takes precedence over inner text to determine the accessible name.
    await expect.element(page.getByRole('button', {name: 'Able'})).toBeInTheDocument()
    await expect.element(page.getByRole('button', {name: 'Alpha'})).not.toBeInTheDocument()

    // Tip: apply modifiers to narrow down the search, even without a name.
    await expect.element(page.getByRole('button', {disabled: true})).toBeInTheDocument()
  })
})

test('find elements inside a parent', async () => {
  const parent1 = page.getByLabelText('parent 1');
  const parent2 = page.getByLabelText('parent 2');

  // There are four buttons on the page, but only one inside each parent.
  // No need to narrow it down when chaining to search within a parent.
  await expect.element(parent1.getByRole('button')).toHaveTextContent('Bravo')
  await expect.element(parent2.getByRole('button')).toHaveTextContent('Charlie')
})
