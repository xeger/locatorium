import { page, userEvent } from '@vitest/browser/context'
import { beforeEach, describe, expect, test } from 'vitest'
import { InteractivityPage } from './interactivity'

beforeEach(async () => {
  page.render(<InteractivityPage/>)
})

// The Playwright API uses Locator methods for interactivity.
// Vitest has a compatible API that simply forwards to the userEvent singleton.
describe('via Locator', () => {
  test('click', async () => {
    const target = page.getByTestId('click-target');
    const telltale = page.getByTestId('last-clicked');
    await expect.element(target).toBeInTheDocument();
    await expect.element(telltale).toHaveTextContent('(none)')
    await target.click();
    await expect.element(telltale).toHaveTextContent('Alpha')
  })

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
  test('click', async () => {
    const target = page.getByTestId('click-target');
    const telltale = page.getByTestId('last-clicked');
    await expect.element(target).toBeInTheDocument();
    await expect.element(telltale).toHaveTextContent('(none)')
    await userEvent.click(target);
    await expect.element(telltale).toHaveTextContent('Alpha')
  })

  // Right click is a [provider-dependent operation](https://vitest.dev/guide/browser/interactivity-api.html#userevent-click) in Vitest.
  //   - [WebdriverIO](https://webdriver.io/docs/api/element/click/) claims to support `button` option
  //   - [Playwright](https://playwright.dev/docs/api/class-locator#locator-click) claims to support `button` option
  //   - [Testing Library](https://testing-library.com/docs/user-event/convenience/#click) has a completely different way of doing right click
  test('right click', async () => {
    const target = page.getByTestId('right-click-target');
    await expect.element(target).toBeInTheDocument();
    await expect.element(page.getByRole('menu')).not.toBeInTheDocument();
    await userEvent.click(target, { button: 'right' });
    await expect.element(page.getByRole('menu')).toBeInTheDocument();
  })
})
