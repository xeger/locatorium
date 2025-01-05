import { Button } from '@/components/ui/button'

export function CombinationPage() {
  return (
    <div>
      <h1>Locator Combination</h1>

      <h2>Intersection</h2>
      <Button id="one" data-testid="ambiguous-button">Alpha</Button>
      <Button id="two" data-testid="ambiguous-button">Bravo</Button>

      <h2>Union</h2>
      <Button id="three" data-testid="distinct-button-1">Charlie</Button>
      <Button id="four" data-testid="distinct-button-2">Delta</Button>
    </div>
  )
}
