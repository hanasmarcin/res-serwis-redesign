import { access, readFile } from "node:fs/promises";
import { resolve } from "node:path";

const rootDirectory = resolve(import.meta.dirname, "..");
const outputDirectory = resolve(rootDirectory, "dist");
const pagesBasePath = "/res-serwis-redesign/";
const pagesUrl = `https://hanasmarcin.github.io${pagesBasePath}`;

const [html, notFoundHtml, manifestText, robots] = await Promise.all([
  readFile(resolve(outputDirectory, "index.html"), "utf8"),
  readFile(resolve(outputDirectory, "404.html"), "utf8"),
  readFile(resolve(outputDirectory, "site.webmanifest"), "utf8"),
  readFile(resolve(outputDirectory, "robots.txt"), "utf8"),
]);

const errors = [];

const requirePattern = (pattern, message) => {
  if (!pattern.test(html)) {
    errors.push(message);
  }
};

requirePattern(
  /<meta name="robots" content="noindex, nofollow, noarchive, nosnippet"/i,
  "The Pages preview must be noindex.",
);
requirePattern(
  /<meta name="googlebot" content="noindex, nofollow, noarchive, nosnippet"/i,
  "The Pages preview must be noindex for Googlebot.",
);
requirePattern(
  /<meta name="bingbot" content="noindex, nofollow, noarchive, nosnippet"/i,
  "The Pages preview must be noindex for Bingbot.",
);
requirePattern(
  /<link rel="canonical" href="https:\/\/www\.res-serwis\.pl\/"/i,
  "The preview must retain the production canonical URL.",
);
requirePattern(
  new RegExp(
    `<meta property="og:url" content="${pagesUrl.replaceAll("/", "\\/")}"`,
    "i",
  ),
  "The Open Graph URL must point to the Pages preview.",
);
requirePattern(
  /(?:src|href)="\/res-serwis-redesign\/assets\//i,
  "Bundled assets must use the repository base path.",
);
requirePattern(
  /href="\/res-serwis-redesign\/favicon\.ico"/i,
  "Public assets must use the repository base path.",
);
requirePattern(
  /<div id="root">[\s\S]+Serwis i diagnostyka[\s\S]+<\/div>/i,
  "The Pages homepage content was not prerendered.",
);

if (!notFoundHtml.includes(`href="${pagesBasePath}"`)) {
  errors.push("The Pages 404 page does not link back to the preview root.");
}

const manifest = JSON.parse(manifestText);
if (
  manifest.start_url !== pagesBasePath ||
  manifest.scope !== pagesBasePath ||
  manifest.icons.some((icon) => !icon.src.startsWith(pagesBasePath))
) {
  errors.push("The web manifest does not use Pages-safe URLs.");
}

if (robots !== "User-agent: *\nDisallow: /\n") {
  errors.push("The Pages preview robots.txt must disallow crawling.");
}

for (const filename of [".nojekyll", "index.html", "404.html", "og.png"]) {
  try {
    await access(resolve(outputDirectory, filename));
  } catch {
    errors.push(`Missing Pages artifact: dist/${filename}`);
  }
}

for (const filename of [".htaccess", "sitemap.xml"]) {
  try {
    await access(resolve(outputDirectory, filename));
    errors.push(`Production-only file must not be in Pages artifact: dist/${filename}`);
  } catch {
    // Expected.
  }
}

if (errors.length > 0) {
  console.error("GitHub Pages validation failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("GitHub Pages preview validation passed.");
