import { page } from '@vitest/browser/context'
import { beforeEach, expect, test } from 'vitest'
import { InteractivityPage } from './interactivity'

beforeEach(() => {
  page.render(<InteractivityPage/>)
})

test('right click', async () => {
    const target = page.getByTestId('right-click-target');
    await expect.element(target).toBeInTheDocument();
    await expect.element(page.getByRole('menu')).not.toBeInTheDocument();
    await target.click({ button: 'right' });
    await expect.element(page.getByRole('menu')).toBeInTheDocument();
})
