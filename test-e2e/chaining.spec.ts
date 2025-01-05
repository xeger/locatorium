import { expect, test } from '@playwright/test';

const { beforeEach, describe } = test;

beforeEach(async ({ page }) => {
  await page.goto('/chaining');
});

describe('find elements anywhere', () => {
  test('by inner text', async ({ page }) => {
    // Good: look for the visible text inside an element
    //   - This is not very specific, and may find the wrong elements(s) when searching the whole page.
    //   - It may fail when icons or divs are interspersed with the search text.
    await expect(page.getByText('Alpha', {exact: true})).toBeVisible()

  })

  test('by test id', async ({ page }) => {
    // Better: look for a specific test id
    //   - Relies on developers being extremely diligent in choosing globally-unique test ids.
    //   - Works well with major components of an app: tabs, cards, sections, etc.
    //   - Fails in numerous situations:
    //       - Reusable components (are repeated many times, duplicating their childrens' test IDs!)
    //       - Dynamically generated lists, grids or tables of anything.
    await expect(page.getByTestId('alligator')).toHaveCount(1)
  })

  test('by role', async ({ page }) => {
    // Best: find by role + accessible name (as inner text)
    await expect(page.getByRole('button', {name: 'Zulu'})).toHaveCount(1)
    // Or: find by role + accessible name (as aria-label)
    await expect(page.getByRole('button', {name: 'Able'})).toHaveCount(1)

    // Tip: aria-label takes precedence over inner text to determine the accessible name.
    await expect(page.getByRole('button', {name: 'Able'})).toHaveCount(1)
    await expect(page.getByRole('button', {name: 'Alpha'})).not.toBeVisible()

    // Tip: apply modifiers to narrow down the search, even without a name.
    await expect(page.getByRole('button', {disabled: true})).toHaveCount(1)
  })
})

test('find elements inside a parent', async ({ page }) => {
  const parent1 = page.getByLabel('parent 1');
  const parent2 = page.getByLabel('parent 2');

  // There are four buttons on the page, but only one inside each parent.
  // No need to narrow it down when chaining to search within a parent.
  await expect(parent1.getByRole('button')).toHaveText('Bravo')
  await expect(parent2.getByRole('button')).toHaveText('Charlie')
})
