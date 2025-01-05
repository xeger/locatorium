import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useCallback, useState } from 'react';

export function ChainingPage() {
  const [last, setLast] = useState('(none)')
  const chooseLast = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    setLast(e.currentTarget.textContent ?? '')
  }, [setLast])

  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
      <div className="font-bold flex justify-center">
        Last button clicked: <span data-testid="last-clicked">{last}</span>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Root Locators</CardTitle>
          <CardDescription>Returned from methods of the page object</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <Button onClick={chooseLast} disabled>Zulu</Button>
            <Button onClick={chooseLast} aria-label="Able" data-testid="alligator">Alpha</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Chained Locators</CardTitle>
          <CardDescription>Returned from locator instance methods</CardDescription>
        </CardHeader>
        <CardContent>
          <div aria-label="parent 1" data-testid="parent-1" className="border border-primary border-dashed flex flex-col p-4">
            <Button onClick={chooseLast} aria-label="child 1" data-testid="child-1">Bravo</Button>
          </div>
          <div aria-label="parent 2" data-testid="parent-2" className="border border-primary border-dashed flex flex-col p-4">
            <Button onClick={chooseLast} aria-label="child 2" data-testid="child-2">Charlie</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Logical Combination Locators</CardTitle>
        </CardHeader>
        <CardContent>
          To do!
        </CardContent>
      </Card>
    </div>
  )
}
