# SEO launch TODO

Last reviewed: 2026-07-25

## Scope

Keep the current visible website content unchanged. Do not add qualifications,
expanded service-area copy, FAQs, new claims, or separate service pages unless
that product decision changes later.

## Already implemented

- [x] Prerender the complete homepage into the production HTML.
- [x] Preserve client-side hydration and the existing website experience.
- [x] Add canonical, robots, Googlebot, Bingbot, hreflang, Open Graph, and
      X/Twitter metadata.
- [x] Add `LocalBusiness`, `WebSite`, `WebPage`, and service-offer JSON-LD using
      only information already visible on the website.
- [x] Add `robots.txt` rules for search engines, OAI-SearchBot, and
      ChatGPT-User.
- [x] Add the canonical XML sitemap.
- [x] Add branded favicon, app icons, web manifest, and a 1200×630 social card.
- [x] Add a static, non-indexable 404 page.
- [x] Add Apache rules for the canonical HTTPS host, legacy `index.php`
      redirects, compression, caching, and security headers.
- [x] Add build-time prerendering and automated SEO validation.

## Before production deployment

- [ ] Back up the existing production website and its server configuration.
- [ ] Install a valid TLS certificate covering both `res-serwis.pl` and
      `www.res-serwis.pl`.
- [ ] Confirm that `https://www.res-serwis.pl/` is the intended permanent
      canonical hostname.
- [ ] Confirm that the production server supports `.htaccess`, `mod_rewrite`,
      `mod_headers`, and `mod_deflate`. Translate the rules into the hosting
      platform's native configuration if it does not.
- [ ] Inventory all legacy URLs that currently receive impressions, clicks,
      links, or traffic. Extend the redirect map if any important URL is not
      covered by the current `index.php?main=...` rules.
- [ ] Run `npm run build` and deploy the generated `dist/` directory without
      omitting dotfiles such as `dist/.htaccess`.
- [ ] Confirm that the production environment does not inject `noindex`,
      conflicting canonicals, or a second `robots.txt`.

## Immediately after deployment

- [ ] Verify that HTTP and the non-canonical hostname redirect once to
      `https://www.res-serwis.pl/`.
- [ ] Verify representative legacy URLs return a single permanent redirect to
      the appropriate homepage section.
- [ ] Verify an unknown URL returns a genuine HTTP 404 status and serves
      `404.html`.
- [ ] Verify that `/robots.txt`, `/sitemap.xml`, `/site.webmanifest`, `/og.png`,
      `/logo.jpg`, and all favicon files return HTTP 200.
- [ ] Test the live URL with Google Rich Results Test and Schema.org Validator.
- [ ] Test link previews for Open Graph and X/Twitter using the live URL.
- [ ] Create or verify the Google Search Console domain property.
- [ ] Submit `https://www.res-serwis.pl/sitemap.xml` in Google Search Console.
- [ ] Use URL Inspection to test the rendered homepage and request indexing
      after the migration.
- [ ] Create or verify Bing Webmaster Tools, import the Search Console property
      if useful, and submit the sitemap.
- [ ] Confirm that Google Business Profile and Bing Places use the same name,
      address, phone number, website URL, and business category as the site.
- [ ] Choose an analytics solution and address consent/privacy requirements
      before enabling it.
- [ ] Track phone, email, map, and outbound Viessmann link clicks as conversion
      events.
- [ ] Track referrals containing `utm_source=chatgpt.com`.

## Performance and monitoring

- [ ] Run PageSpeed Insights against the deployed mobile and desktop pages.
- [ ] Confirm mobile Lighthouse performance is at least 95 and accessibility,
      best-practices, and SEO scores are 100 before launch.
- [ ] Check Search Console Core Web Vitals after enough field data accumulates.
- [ ] Verify that HTML, CSS, JavaScript, fonts, and images use compression and
      appropriate cache headers in production.
- [ ] Monitor index coverage and confirm legacy URLs leave the index in favor
      of the canonical homepage.
- [ ] Monitor branded and non-branded impressions, clicks, click-through rate,
      calls, and email conversions monthly.
- [ ] Review Bing Webmaster Tools AI Performance and ChatGPT referral traffic
      when data becomes available.
- [ ] Review crawl errors, structured-data warnings, redirects, and the sitemap
      after every hosting or routing change.

## Deliberately not required

- `llms.txt` is not required for Google AI features or ChatGPT search
  discovery.
- Meta keywords are not used.
- Do not add fabricated reviews, ratings, opening hours, credentials, locations,
  or other structured-data properties that are not supported by the visible
  website.
