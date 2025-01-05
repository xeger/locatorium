export function CombinationPage() {
  return (
    <div>
      <h1>Locator Combination</h1>

      <h2>Intersection</h2>
      <button id="one" data-testid="ambiguous-button">Alpha</button>
      <button id="two" data-testid="ambiguous-button">Bravo</button>

      <h2>Union</h2>
      <button id="three" data-testid="distinct-button-1">Charlie</button>
      <button id="four" data-testid="distinct-button-2">Delta</button>
    </div>
  )
}
