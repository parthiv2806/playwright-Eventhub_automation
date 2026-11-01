# playwright-Eventhub_automation

End-to-end UI tests for the [EventHub practice application](https://eventhub.rahulshettyacademy.com)
using [Playwright](https://playwright.dev/).

## Prerequisites

- Node.js 20 or newer
- npm

## Setup

```bash
npm ci
npx playwright install --with-deps
```

## Running tests

| Command | What it does |
| --- | --- |
| `npm test` | Runs every test in the configured browser project(s) |
| `npm run test:chromium` | Runs only Chromium (fastest feedback) |
| `npm run test:headed` | Runs with visible browser windows |
| `npm run test:ui` | Opens Playwright's interactive UI mode |
| `npm run test:debug` | Runs with the Playwright debugger |
| `npm run report` | Opens the last HTML report |

## Project structure

```
fixtures/
  basefixture.js   # Adds the `loginPage` page-object fixture
  authfixture.js   # Adds the `authenticatedPage` (already logged in) fixture
pages/
  Login_page.js    # Login page object
test_data/
  login.json       # Test credentials
tests/
  Login.spec.js    # Valid login + invalid login cases
```

## Test data

Credentials live in `test_data/login.json`.

## Reporting

Failures capture a screenshot and video automatically, and the HTML report is
written to `playwright-report/`. On CI the report is uploaded as an artifact by
`.github/workflows/playwright.yml`.
