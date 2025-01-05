import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';

export function ChainingPage() {
  const [last, setLast] = useState('(none)')
  const chooseLast = (e: React.MouseEvent<HTMLButtonElement>) => {
    setLast(e.currentTarget.textContent ?? '')
  }

  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
      <div className="font-bold flex justify-center">
        Last button clicked: <span data-testid="last-clicked">{last}</span>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Unchained</CardTitle>
        </CardHeader>
        <CardContent>
          The page object contains methods for creationg "root" locators: `getByRole`, `getByTestId`, etc.
          As you would expect, root locators search the entire page for matching elements.
          <Button onClick={chooseLast} disabled>Find Me</Button>
          <Button onClick={chooseLast} aria-label="unchained button" data-testid="unchained-button">Alpha</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Chained</CardTitle>
        </CardHeader>
        <CardContent>
          The locator class also contains methods for deriving new, "chained" locators from an existing instance.
          Chained locators typically search within the HTML element(s) matched by the parent locator.
          <div aria-label="chained parent 1" data-testid="chained-parent-1" className="border border-black border-dashed">
            Parent 1
            <Button onClick={chooseLast} aria-label="chained child 1" data-testid="chained-child-1">Bravo</Button>
          </div>
          <div aria-label="chained parent 2" data-testid="chained-parent-2" className="border border-black border-dashed">
            Parent 2
            <Button onClick={chooseLast} aria-label="chained child 2" data-testid="chained-child-2">Charlie</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Logically Combined</CardTitle>
        </CardHeader>
        <CardContent>
          The locator class also contains methods for performing logical combinations of locators.
          Instead of searchin "within" a parent, they return a new locator that matches the parent and/or
          the child.
          Intersection via `and` lets you find a single element by unrelated criteria e.g. "role X _and_ testid Y."
          Union via `or` lets you find find many elements by unrelated criteria e.g. "label Q _or_ text Q."
        </CardContent>
      </Card>
    </div>
  )
}
