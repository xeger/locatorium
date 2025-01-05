import { expect, test } from '@playwright/test';
const {beforeEach, describe} = test;

beforeEach(async ({ page }) => {
  await page.goto('/chaining');
});

describe('starting at page', () => {
  test('getByRole', async ({ page }) => {
    // Good: find by inner text.
    //   - This is not very specific, and may find the wrong elements(s) when searching the whole page.
    await expect(page.getByText('Alpha', {exact: true})).toBeVisible()

    // Better: find by test id
    //   - This always works, but relies on developers being extremely diligent in choosing globally-unique test ids.
    //   - Best for top-level elements of the app; fairly useless for nested pieces of complex organisms and molecules.
    await expect(page.getByTestId('unchained-button')).toBeVisible()

    // Best: find by role + accessible name (via inner text).
    await expect(page.getByRole('button', {name: 'Find Me'})).toBeVisible()
    // May apply modifiers e.g. disabled to narrow down the search, even without a name.
    await expect(page.getByRole('button', {disabled: true})).toBeVisible()

    // Best: find by role + accessible name (via aria-label)
    await expect(page.getByRole('button', {name: 'unchained button'})).toBeVisible()
    // Note that aria-label takes precedence over inner text to determine the accessible name.
    await expect(page.getByRole('button', {name: 'Click Me'})).not.toBeVisible()
  })
})

describe('chaining from an existing locator', () => {
  test('getByRole', async ({ page }) => {
    const parent1 = page.getByLabel('chained parent 1');
    const parent2 = page.getByLabel('chained parent 2');
    await expect(parent1.getByRole('button')).toHaveText('Bravo')
    await expect(parent2.getByRole('button')).toHaveText('Charlie')
  })
})
