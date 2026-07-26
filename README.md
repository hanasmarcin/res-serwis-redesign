# RES-SERWIS website

A fast, accessible, prerendered website for RES-SERWIS in Olsztyn. The site is
built with React, TypeScript, Vite, and Tailwind CSS, then emitted as static
files suitable for the existing Apache hosting environment. Production pages
use a small progressive-enhancement entry for navigation and scrolling; React
is loaded on demand only by the unprerendered local development entry.

## Requirements

- Node.js 22.12 or newer
- npm 11 or newer

## Local development

```sh
npm ci
npm run dev
```

## Quality checks

```sh
npm run check
npm run test:e2e
```

`npm run check` runs linting, strict TypeScript validation, unit tests, the
production build, prerendering, image-privacy checks, and SEO validation.
End-to-end tests cover desktop and mobile behavior plus automated WCAG A/AA
checks.

## Images

The curated source images live in `src/assets/work`. Run:

```sh
npm run images:optimize
```

This strips private camera metadata and generates responsive AVIF and WebP
variants in `src/assets/generated`. Raw customer or work-site photography must
never be committed to this repository.

## Production deployment

1. Install a valid TLS certificate covering both `res-serwis.pl` and
   `www.res-serwis.pl`.
2. Confirm that `www.res-serwis.pl` is the intended canonical hostname.
3. Run `npm run check`.
4. Upload the complete `dist/` directory, including `dist/.htaccess`.
5. Execute the live checks in `docs/SEO_TODO.md`.

Do not deploy the canonical redirect before TLS is valid for both hostnames.
