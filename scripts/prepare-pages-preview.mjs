import { readFile, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const rootDirectory = resolve(import.meta.dirname, "..");
const outputDirectory = resolve(rootDirectory, "dist");
const htmlPath = resolve(outputDirectory, "index.html");
const notFoundPath = resolve(outputDirectory, "404.html");
const manifestPath = resolve(outputDirectory, "site.webmanifest");

const pagesBasePath = "/res-serwis-redesign/";
const pagesUrl = `https://hanasmarcin.github.io${pagesBasePath}`;
const pagesImageUrl = `${pagesUrl}og.png`;

const replaceRequired = (source, searchValue, replacement, label) => {
  if (!source.includes(searchValue)) {
    throw new Error(`Pages preview preparation failed: ${label} was not found.`);
  }

  return source.replaceAll(searchValue, replacement);
};

let html = await readFile(htmlPath, "utf8");

html = replaceRequired(
  html,
  'content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"',
  'content="noindex, nofollow, noarchive, nosnippet"',
  "indexable crawler metadata",
);
html = replaceRequired(
  html,
  '<meta property="og:url" content="https://www.res-serwis.pl/"',
  `<meta property="og:url" content="${pagesUrl}"`,
  "Open Graph preview URL",
);
html = replaceRequired(
  html,
  'content="https://www.res-serwis.pl/og.png"',
  `content="${pagesImageUrl}"`,
  "social preview image URL",
);

await writeFile(htmlPath, html);

let notFoundHtml = await readFile(notFoundPath, "utf8");
notFoundHtml = replaceRequired(
  notFoundHtml,
  'href="/"',
  `href="${pagesBasePath}"`,
  "404 homepage link",
);
await writeFile(notFoundPath, notFoundHtml);

const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
manifest.start_url = pagesBasePath;
manifest.scope = pagesBasePath;
manifest.icons = manifest.icons.map((icon) => ({
  ...icon,
  src: `${pagesBasePath}${icon.src.replace(/^\/+/, "")}`,
}));
await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);

await Promise.all([
  writeFile(resolve(outputDirectory, ".nojekyll"), ""),
  writeFile(
    resolve(outputDirectory, "robots.txt"),
    "User-agent: *\nDisallow: /\n",
  ),
  rm(resolve(outputDirectory, ".htaccess"), { force: true }),
  rm(resolve(outputDirectory, "sitemap.xml"), { force: true }),
]);

console.log(`Prepared noindex GitHub Pages preview for ${pagesUrl}.`);
