import { access, readFile } from "node:fs/promises";
import { resolve } from "node:path";

const rootDirectory = resolve(import.meta.dirname, "..");
const outputDirectory = resolve(rootDirectory, "dist");
const htmlPath = resolve(outputDirectory, "index.html");
const html = await readFile(htmlPath, "utf8");

const errors = [];

const requirePattern = (pattern, message) => {
  if (!pattern.test(html)) {
    errors.push(message);
  }
};

requirePattern(/<html[^>]+lang="pl-PL"/i, "The document language must be pl-PL.");
requirePattern(/<title>RES-SERWIS \| Serwis pomp ciepła/i, "The SEO title is missing.");
requirePattern(/<meta name="description"[^>]+>/i, "The meta description is missing.");
requirePattern(/<meta name="robots" content="index, follow/i, "The indexable robots meta tag is missing.");
requirePattern(/<link rel="canonical" href="https:\/\/www\.res-serwis\.pl\/"/i, "The canonical URL is missing or incorrect.");
requirePattern(/<meta property="og:image" content="https:\/\/www\.res-serwis\.pl\/og\.png"/i, "The Open Graph image is missing.");
requirePattern(/<meta name="twitter:card" content="summary_large_image"/i, "The X/Twitter card metadata is missing.");
requirePattern(/<script type="application\/ld\+json">/i, "JSON-LD structured data is missing.");
requirePattern(/"@type": "LocalBusiness"/i, "LocalBusiness structured data is missing.");
requirePattern(/<div id="root">[\s\S]+Serwis i diagnostyka[\s\S]+<\/div>/i, "The main content was not prerendered.");

const h1Count = (html.match(/<h1\b/gi) ?? []).length;
if (h1Count !== 1) {
  errors.push(`Expected exactly one H1 in the prerendered homepage, found ${h1Count}.`);
}

const jsonLdBlocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)];
for (const [, json] of jsonLdBlocks) {
  try {
    JSON.parse(json);
  } catch (error) {
    errors.push(`Invalid JSON-LD: ${error.message}`);
  }
}

const requiredFiles = [
  ".htaccess",
  "404.html",
  "apple-touch-icon.png",
  "favicon.ico",
  "icon-192.png",
  "icon-512.jpg",
  "logo.jpg",
  "og.png",
  "robots.txt",
  "site.webmanifest",
  "sitemap.xml",
];

for (const filename of requiredFiles) {
  try {
    await access(resolve(outputDirectory, filename));
  } catch {
    errors.push(`Missing generated SEO asset: dist/${filename}`);
  }
}

const robots = await readFile(resolve(outputDirectory, "robots.txt"), "utf8");
if (!robots.includes("Sitemap: https://www.res-serwis.pl/sitemap.xml")) {
  errors.push("robots.txt does not advertise the canonical sitemap.");
}

const sitemap = await readFile(resolve(outputDirectory, "sitemap.xml"), "utf8");
if (!sitemap.includes("<loc>https://www.res-serwis.pl/</loc>")) {
  errors.push("sitemap.xml does not include the canonical homepage.");
}

if (errors.length > 0) {
  console.error("SEO validation failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("SEO validation passed.");
