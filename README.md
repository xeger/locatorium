# Overview

Locators are a powerful way to find elements in the DOM, originally developed by Playwright and currently being adopted by other testing frameworks including Vitest.
They provide a robust, maintainable approach to element selection that prioritizes accessibility and user-centric attributes over brittle CSS selectors or XPaths.

This project acts as a playground for understanding how locators work in Playwright and Vitest.
It contains a trivial Vite app whose sole purpose is to provide interesting test permutations.
It also contains test suites to exercise Playwright and Vitest locators, and documentation comparing and contrasting the two implementations.

# Cheat Sheet

The locator API consists of a number of methods that find DOM elements by varying logical predicates:
1. by ARIA role i.e. the UI function of the element
2. by visible text associated with the element i.e. inner text, label, title, alt text, or placeholder
3. by developer-provided test ID

Note that locators _lack_ an API for finding elements by HTML ID, CSS class or other presentational attributes.
This is a deliberate omission, stemming from the `testing-library` philosophy that presentational attributes are volatile and lead to flakey tests.
In practice, it's easy for application developers to use volatile labels or make non-unique or unstable test IDs, so the value of this approach to application testers is questionable.
However, applications that rely heavily on ARIA for testing are also more accessible to vision- and motor-impaired users, which can be a valuable side benefit.

## Playwright Locator API

TODO

## Vitest Locator API

While Vitest implements the core Playwright locator APIs, there are some subtle differences between the implementations; for example, Vitest's `getByTitle` cannot find `title` elements within SVGs, unlike Playwright's version.

The table below outlines the locator methods available in Vitest, which closely approximate Playwright's capabilities while maintaining Vitest's ability to run with multiple browsers, automation providers, and out-of-browser execution.

Excerpted from the [official documentation](https://main.vitest.dev/guide/browser/locators.html#locators-2-1-0).

|           Method | Discriminator | Modifiers       | Notes                              |
|-----------------:|---------------|-----------------|------------------------------------|
|        getByRole | name[^1]      | exact, ARIA[^2] | Role may implicit[^3] or explicit. |
|     getByAltText |               | exact           |                                    |
|   getByLabelText |               | exact           |                                    |
| getByPlaceholder |               | exact           |                                    |
|        getByText |               | exact           |                                    |
|       getByTitle |               | exact           |                                    |
|      getByTestId |               | exact           |                                    |

[^1]: [Accessible name](https://developer.mozilla.org/en-US/docs/Glossary/Accessible_name)
[^2]: [ARIA state attributes](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes)
[^3]: DOM elements may be tagged with `aria-role` or they may have an [implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles) e.g. every `button` has role `button` unless otherwise specified
