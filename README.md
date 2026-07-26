# RES-SERWIS website

The source code for the RES-SERWIS company website: a fast, accessible Polish
landing page for heating-system service and diagnostics in Olsztyn.

The website is built with React, TypeScript, Vite, and Tailwind CSS. The
production build prerenders the complete page to static HTML so that visitors,
search engines, and AI search crawlers can understand the content without
running JavaScript. A small client-side enhancement layer handles navigation,
mobile-menu behavior, and smooth section scrolling.

## Highlights

- Fully prerendered, crawlable homepage
- Responsive AVIF and WebP images with stripped metadata
- Self-hosted fonts and no third-party runtime scripts
- Semantic HTML, keyboard navigation, reduced-motion support, and automated
  WCAG A/AA checks
- Canonical metadata, Open Graph cards, sitemap, robots rules, and structured
  data
- Production-ready Apache redirects, caching, compression, and security headers
- Separate, non-indexable GitHub Pages preview build
- Automated linting, type checks, unit tests, production validation, and
  browser tests

## Technology

| Area | Tools |
| --- | --- |
| UI | React 19, TypeScript, Tailwind CSS |
| Build | Vite 8, React server rendering, static prerendering |
| Unit tests | Vitest, Testing Library |
| Browser tests | Playwright, axe-core |
| Image pipeline | Sharp, AVIF, WebP |
| Automation | GitHub Actions |
| Production hosting | Static files on Apache |

## Requirements

- Node.js 22.12 or newer
- npm 11 or newer

## Getting started

Install the exact dependency versions from the lockfile:

```sh
npm ci
```

Start the development server:

```sh
npm run dev
```

The site is available at [http://localhost:8080](http://localhost:8080).

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local Vite development server |
| `npm run build` | Build, prerender, and validate the production site |
| `npm run preview` | Serve the generated production build locally |
| `npm run check` | Run linting, type checks, unit tests, and the production build |
| `npm run test` | Run the Vitest unit-test suite once |
| `npm run test:watch` | Run unit tests in watch mode |
| `npm run test:e2e` | Build the site and run desktop/mobile Playwright tests |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Check browser and Node TypeScript projects |
| `npm run seo:check` | Validate the generated production SEO output |
| `npm run images:optimize` | Regenerate responsive, metadata-free images |

For a complete local release check, run:

```sh
npm run check
npm run test:e2e
npm audit --omit=dev --audit-level=high
```

The same checks run in GitHub Actions for pull requests and pushes to `main`.

## How the build works

`npm run build` performs four stages:

1. Vite creates the browser bundle in `dist/`.
2. Vite creates a temporary server-rendering bundle in `dist-ssr/`.
3. `scripts/prerender.mjs` renders the React page into `dist/index.html`,
   inlines its critical stylesheet, and removes the temporary SSR output.
4. `scripts/validate-seo.mjs` checks metadata, structured data, accessibility
   landmarks, responsive images, required public files, and image privacy.

Only the generated `dist/` directory is deployed to production.

## Project structure

```text
.
├── .github/workflows/       # Quality checks and optional Pages preview
├── docs/                    # Quality standard and launch checklist
├── public/                  # SEO, social, manifest, 404, and Apache assets
├── scripts/                 # Prerender, validation, preview, and image tools
├── src/
│   ├── assets/
│   │   ├── work/            # Curated source photographs
│   │   └── generated/       # Responsive AVIF/WebP variants
│   ├── components/          # Homepage sections and navigation
│   ├── lib/                 # Lightweight browser enhancements
│   ├── pages/               # Page composition
│   └── test/                # Unit and interaction tests
└── tests/e2e/               # Desktop, mobile, and accessibility tests
```

## SEO and AI search visibility

The build exposes the full visible content as HTML and includes:

- a stable production canonical URL;
- search-engine and AI-search crawler rules;
- Open Graph and X/Twitter metadata;
- `LocalBusiness`, `WebSite`, `WebPage`, and service-offer JSON-LD;
- a production sitemap and branded social/search assets;
- automated checks that prevent important metadata from disappearing.

The implementation deliberately uses only claims supported by the visible
website. It does not invent service areas, qualifications, reviews, opening
hours, or other business information.

See [docs/SEO_TODO.md](docs/SEO_TODO.md) for the remaining launch and
post-launch work.

## Images and privacy

Curated source images live in `src/assets/work`. To regenerate responsive
variants, run:

```sh
npm run images:optimize
```

The image pipeline removes EXIF, IPTC, and XMP metadata and writes optimized
AVIF/WebP assets to `src/assets/generated`. Never commit raw customer or
work-site photography to this repository.

## Production deployment

The production target is the existing Apache hosting environment for
`https://www.res-serwis.pl/`.

1. Back up the current website and server configuration.
2. Install a valid TLS certificate covering both `res-serwis.pl` and
   `www.res-serwis.pl`.
3. Confirm that `www.res-serwis.pl` is the intended canonical hostname.
4. Run the complete release checks.
5. Upload the contents of `dist/`, including the `dist/.htaccess` dotfile.
6. Complete the live checks in [docs/SEO_TODO.md](docs/SEO_TODO.md).

Do not enable the permanent canonical redirect until TLS works correctly on
both hostnames. The server must support the Apache features listed in the SEO
checklist, or the `.htaccess` rules must be translated into the hosting
provider's configuration.

## GitHub Pages preview

`.github/workflows/pages-preview.yml` contains an optional preview deployment
for:

```text
https://hanasmarcin.github.io/res-serwis-redesign/
```

This build is intentionally different from production:

- it uses `/res-serwis-redesign/` as the asset base path;
- it emits `noindex`, `nofollow`, and a restrictive `robots.txt`;
- it removes the production sitemap and Apache configuration;
- it retains the production canonical while using the preview URL for social
  sharing metadata;
- it validates the final preview before uploading it.

The workflow only becomes usable after GitHub Pages is enabled for the
repository. GitHub Free does not provide Pages for private repositories, so the
repository must be public or the account must support private-repository Pages.
The workflow does not itself change repository visibility or purchase a plan.

## Quality standard

The release requirements, accessibility rules, performance budgets, and
privacy expectations are documented in
[docs/QUALITY.md](docs/QUALITY.md). The latest recorded Lighthouse checks are
also kept there so regressions remain visible.
