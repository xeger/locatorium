export function ChainingPage() {
  return (
    <div>
      <h1>Locator Chaining</h1>

      <h2>Unchained</h2>
      <button disabled>Find Me</button>
      <button aria-label="unchained button" data-testid="unchained-button">Click Me</button>

      <h2>Chained</h2>
      <div aria-label="chained parent 1" data-testid="chained-parent-1">
        <button aria-label="chained child 1" data-testid="chained-child-1">Click Me Too</button>
      </div>
      <div aria-label="chained parent 2" data-testid="chained-parent-2">
        <button aria-label="chained child 2" data-testid="chained-child-2">Click Me Three</button>
      </div>
    </div>
  )
}
