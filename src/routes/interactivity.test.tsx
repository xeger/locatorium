import { page, userEvent } from '@vitest/browser/context'
import { beforeEach, describe, expect, test } from 'vitest'
import { InteractivityPage } from './interactivity'

beforeEach(() => {
  page.render(<InteractivityPage/>)
})

// The Playwright API uses Locator methods for interactivity.
// Vitest has a compatible API that simply forwards to the userEvent singleton.
describe('via Locator', () => {
  test('right click', async () => {
    const target = page.getByTestId('right-click-target');
    await expect.element(target).toBeInTheDocument();
    await expect.element(page.getByRole('menu')).not.toBeInTheDocument();
    await target.click({ button: 'right' });
    await expect.element(page.getByRole('menu')).toBeInTheDocument();
  })
});

// In Vitest, the userEvent singleton is the documented interactivity API.
describe('via userEvent', () => {
  test('right click', async () => {
    const target = page.getByTestId('right-click-target');
    await expect.element(target).toBeInTheDocument();
    await expect.element(page.getByRole('menu')).not.toBeInTheDocument();
    await userEvent.click(target, { button: 'right' });
    await expect.element(page.getByRole('menu')).toBeInTheDocument();
  })
})
