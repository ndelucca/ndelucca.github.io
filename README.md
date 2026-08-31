# ndelucca.github.io

My personal page: a static site built with TypeScript, Handlebars and Webpack, deployed to
GitHub Pages.

Live at <https://ndelucca.github.io>.

## Pages

| Page          | What it does                                                             |
| ------------- | ------------------------------------------------------------------------ |
| `index`       | Landing page                                                             |
| `fountain`    | An ASCII cow quoting a fortune fetched from an API, with local fallbacks |
| `ephemerides` | Historical events for today, from the Wikipedia "on this day" feed       |
| `workout`     | Monthly strength routines, with loads resolved against a 1RM you pick    |
| `diet`        | What to eat today, switching on whether it is a training day             |

## Commands

```bash
npm start          # dev server on http://localhost:3000
npm run build      # production build into build/
npm test           # jest
npm run typecheck  # tsc --noEmit
npm run lint       # eslint
npm run format     # prettier --write
npm run check      # typecheck + lint + format check + tests, same as CI
```

Node 22 or newer.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which typechecks, lints, tests and
builds, then publishes `build/` straight to GitHub Pages. There is no `gh-pages` branch and
nothing to run by hand.

The repository's **Settings → Pages → Source** must be set to **GitHub Actions**.

## Layout

```
src/
  data/          routine JSON, the gym reference table, the month registry
  scss/          styles; main.scss is global, the rest are per page
  templates/     .hbs pages and partials; one page per file
  ts/            one entry per page, plus modules/ and workout/ helpers
  __tests__/     jest suites
public/          copied verbatim into the build (favicons, robots.txt, .nojekyll)
docs/            source notes for the routines, not published
```

A `.hbs` file in `src/templates/` becomes a page automatically. If a `.ts` or `.scss` file
of the same name exists, it is bundled with it. Markdown files dropped in `md/` become pages
too, rendered through `markdown.hbs`.

## Adding a workout month

1. Write `src/data/routines/YYYY_MM.json` following the `MonthRoutine` shape in
   `src/ts/routines/types.ts` (the routine plus a `defaults` map of starting 1RMs).
2. Add `"YYYY_MM"` to `src/data/months.json`.

Each month is fetched on demand, so adding one does not grow the initial bundle.

## A note on the workout password

The workout page asks for a password. It is **not** a security boundary: the check runs in
the browser, the hash is in the bundle, and the routine data is in this public repository
either way. It only keeps the page from opening unprompted on a shared screen.
