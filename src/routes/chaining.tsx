import { Button } from '@/components/ui/button'
import { useState } from 'react'

export function ChainingPage() {
  const [last, setLast] = useState('(none)')
  const chooseLast = (e: React.MouseEvent<HTMLButtonElement>) => {
    setLast(e.currentTarget.textContent ?? '')
  }

  return (
    <div>
      <h1>Locator Chaining</h1>

      <div className="border font-bold">
        Last button clicked: <span data-testid="last-clicked">{last}</span>
      </div>

      <h2>Unchained</h2>
      <p>
        The page object contains methods for creationg "root" locators: `getByRole`, `getByTestId`, etc.
        As you would expect, root locators search the entire page for matching elements.
      </p>
      <Button onClick={chooseLast} disabled>Find Me</Button>
      <Button onClick={chooseLast} aria-label="unchained button" data-testid="unchained-button">Alpha</Button>

      <h2>Chained</h2>
      <p>
        The locator class also contains methods for deriving new, "chained" locators from an existing instance.
        Chained locators typically search within the HTML element(s) matched by the parent locator.
      </p>
      <div aria-label="chained parent 1" data-testid="chained-parent-1" className="border border-black border-dashed">
        <h3>Parent 1</h3>
        <Button onClick={chooseLast} aria-label="chained child 1" data-testid="chained-child-1">Bravo</Button>
      </div>
      <div aria-label="chained parent 2" data-testid="chained-parent-2" className="border border-black border-dashed">
        <h3>Parent 2</h3>
        <Button onClick={chooseLast} aria-label="chained child 2" data-testid="chained-child-2">Charlie</Button>
      </div>

      <h3>Logically Combined</h3>
      <p>
        The locator class also contains methods for performing logical combinations of locators.
        Instead of searchin "within" a parent, they return a new locator that matches the parent and/or
        the child.
        Intersection via `and` lets you find a single element by unrelated criteria e.g. "role X _and_ testid Y."
        Union via `or` lets you find find many elements by unrelated criteria e.g. "label Q _or_ text Q."
      </p>
    </div>
  )
}
