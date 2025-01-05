import { expect, test } from '@playwright/test';
const {beforeEach, describe} = test;

beforeEach(async ({ page }) => {
  await page.goto('/interactivity');
});

test('right click', async ({ page }) => {
  const target = page.getByTestId('right-click-target');
  await expect(target).toBeVisible();
  await expect(page.getByRole('menu')).toHaveCount(0)
  await target.click({ button: 'right' });
  await expect(page.getByRole('menu')).toHaveCount(1)
})
