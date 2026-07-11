# Gatsby screenshot baselines

This harness captures full-page PNG visual baselines from the current Gatsby site. It covers every document route in [`routes.js`](./routes.js) at 375, 768, 1024, and 1440 CSS pixels wide.

## Run

Install dependencies and the Playwright Chromium browser once:

```sh
yarn install
yarn playwright install chromium
```

Build and serve the current Gatsby site in one terminal:

```sh
yarn build
yarn serve
```

Then, in another terminal, start the capture:

```sh
yarn baseline:capture
```

The default target is `http://localhost:9000`. Point the harness at another running environment with `BASE_URL`:

```sh
BASE_URL=https://example.com yarn baseline:capture
```

Each image is written to `baselines/<route-slug>/<width>.png`; the home page uses the `home` slug. Before taking each screenshot, the harness scrolls through the page to render lazy-loaded images. Existing PNGs are skipped, so rerunning the command resumes an interrupted capture; delete an existing PNG to capture that route and viewport again. The harness keeps capturing other routes if a route or viewport fails, reports every failure and a captured/skipped/failed summary at the end, and exits non-zero when any capture failed.

`baselines/` is intentionally gitignored. These files are local snapshots and must not be committed.
