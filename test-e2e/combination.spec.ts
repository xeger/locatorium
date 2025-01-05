import { expect, test } from '@playwright/test';

const { beforeEach } = test;

beforeEach(async ({ page }) => {
  await page.goto('/combination');
});

test('intersection of two locators', async ({ page }) => {
  await expect(page.getByTestId('ambiguous-button').and(page.getByText('Alpha'))).toHaveId('one')
  await expect(page.getByTestId('ambiguous-button').and(page.getByText('Bravo'))).toHaveId('two')
})

test('union of two locators', async ({ page }) => {
  await expect(page.getByTestId('distinct-button-1').or(page.getByTestId('distinct-button-2'))).toHaveCount(2)
})
