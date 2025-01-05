import { expect, test } from '@playwright/test';

const { beforeEach } = test;

beforeEach(async ({ page }) => {
  await page.goto('/interactivity');
});

test('click', async ({ page }) => {
  const target = page.getByTestId('click-target');
    const telltale = page.getByTestId('last-clicked');
  await expect(target).toBeVisible();
  await expect(telltale).toHaveText('(none)')
  await target.click();
  await expect(telltale).toHaveText('Alpha')
})

test('right click', async ({ page }) => {
  const target = page.getByTestId('right-click-target');
  await expect(target).toBeVisible();
  await expect(page.getByRole('menu')).toHaveCount(0)
  await target.click({ button: 'right' });
  await expect(page.getByRole('menu')).toHaveCount(1)
})
