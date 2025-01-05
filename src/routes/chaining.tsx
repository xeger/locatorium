import { H1, H2, H3, P } from '@/components/typographic'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export function ChainingPage() {
  const [last, setLast] = useState('(none)')
  const chooseLast = (e: React.MouseEvent<HTMLButtonElement>) => {
    setLast(e.currentTarget.textContent ?? '')
  }

  return (
    <div>
      <H1>Locator Chaining</H1>

      <div className="border font-bold">
        Last button clicked: <span data-testid="last-clicked">{last}</span>
      </div>

      <H2>Unchained</H2>
      <P>
        The page object contains methods for creationg "root" locators: `getByRole`, `getByTestId`, etc.
        As you would expect, root locators search the entire page for matching elements.
      </P>
      <Button onClick={chooseLast} disabled>Find Me</Button>
      <Button onClick={chooseLast} aria-label="unchained button" data-testid="unchained-button">Alpha</Button>

      <H2>Chained</H2>
      <P>
        The locator class also contains methods for deriving new, "chained" locators from an existing instance.
        Chained locators typically search within the HTML element(s) matched by the parent locator.
      </P>
      <div aria-label="chained parent 1" data-testid="chained-parent-1" className="border border-black border-dashed">
        <H3>Parent 1</H3>
        <Button onClick={chooseLast} aria-label="chained child 1" data-testid="chained-child-1">Bravo</Button>
      </div>
      <div aria-label="chained parent 2" data-testid="chained-parent-2" className="border border-black border-dashed">
        <H3>Parent 2</H3>
        <Button onClick={chooseLast} aria-label="chained child 2" data-testid="chained-child-2">Charlie</Button>
      </div>

      <H2>Logically Combined</H2>
      <P>
        The locator class also contains methods for performing logical combinations of locators.
        Instead of searchin "within" a parent, they return a new locator that matches the parent and/or
        the child.
        Intersection via `and` lets you find a single element by unrelated criteria e.g. "role X _and_ testid Y."
        Union via `or` lets you find find many elements by unrelated criteria e.g. "label Q _or_ text Q."
      </P>
    </div>
  )
}
