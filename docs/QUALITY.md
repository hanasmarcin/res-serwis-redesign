# Website quality standard

This document defines the release bar for the RES-SERWIS website.

## Required checks

- `npm run lint`
- `npm run typecheck`
- `npm run test`
- `npm run build`
- `npm run test:e2e`
- `npm audit --omit=dev --audit-level=high`

All commands must pass on the release commit.

## Accessibility

- WCAG 2.2 Level AA is the minimum.
- Automated axe checks must report no A or AA violations.
- Keyboard users must be able to skip navigation, open and close the mobile
  menu, activate every contact method, and reach the destination section.
- Important touch targets should be at least 44 by 44 CSS pixels.
- Text contrast must be at least 4.5:1 for normal text and 3:1 for large text.
- Motion must respect `prefers-reduced-motion`.

## Performance budgets

- Lighthouse mobile performance: at least 95 in a repeatable local run.
- Lighthouse accessibility, best practices, and SEO: 100.
- LCP: at most 2.5 seconds at the 75th percentile in field data.
- CLS: at most 0.1.
- INP: at most 200 milliseconds.
- Initial JavaScript: target at most 100 KB gzip.
- Above-the-fold imagery must use responsive AVIF/WebP sources and explicit
  dimensions.

Lab measurements are regression signals. Search Console or another
privacy-conscious real-user source remains authoritative after launch.

The production build verified on 2026-07-26 scored 99/100/100/100 in the
Lighthouse mobile categories (performance/accessibility/best
practices/SEO), with 2.0 s LCP, 0 ms TBT, and 0.003 CLS. The matching desktop
run scored 100/100/100/100.

## Privacy and security

- No raw work-site photography in Git.
- No GPS, device, author, or capture-time metadata in production images.
- No analytics or third-party scripts without an explicit privacy decision.
- HTTPS must be valid on both canonical and redirecting hostnames before the
  permanent redirect is enabled.
- Production must send the security and caching headers defined in
  `public/.htaccess`.

## Deployment

- Deploy only the generated `dist/` directory.
- Preserve dotfiles, especially `.htaccess`.
- Unknown routes must return HTTP 404 with the Polish `404.html`.
- Legacy URLs should redirect directly to their canonical section in one hop.
