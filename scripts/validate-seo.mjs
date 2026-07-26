import { access, readFile, readdir } from "node:fs/promises";
import { resolve } from "node:path";
import sharp from "sharp";

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
requirePattern(
  /"streetAddress": "ul\. Bydgoska 3B"[\s\S]+"postalCode": "10-243"[\s\S]+"addressLocality": "Olsztyn"[\s\S]+"addressCountry": "PL"/i,
  "The LocalBusiness structured address is missing or incorrect.",
);
requirePattern(/<div id="root">[\s\S]+Serwis i diagnostyka[\s\S]+<\/div>/i, "The main content was not prerendered.");
requirePattern(
  /<div id="root">[\s\S]+ul\. Bydgoska 3B, 10-243 Olsztyn, Polska[\s\S]+<\/div>/i,
  "The visible business address is missing or incorrect.",
);
requirePattern(/<main id="main-content" tabindex="-1">/i, "The main landmark and focus target are missing.");
requirePattern(/href="#main-content"[\s\S]+Przejdź do treści/i, "The skip link is missing.");
requirePattern(/href="tel:\+48502328185"/i, "The mobile contact action is missing.");
requirePattern(/type="image\/avif"/i, "Responsive AVIF image sources are missing.");
requirePattern(/type="image\/webp"/i, "Responsive WebP image sources are missing.");

if (html.includes("tel:+48895260518") || html.includes("+48 89 526 05 18")) {
  errors.push("The retired landline number must not appear in production HTML.");
}

if (/<div id="root">[\s\S]+>www\.res-serwis\.pl<\/a>[\s\S]+<\/div>/i.test(html)) {
  errors.push("The website link must not appear in the visible contact content.");
}

if (html.includes("fonts.googleapis.com") || html.includes("fonts.gstatic.com")) {
  errors.push("Production HTML must use self-hosted fonts.");
}

if (/style="[^"]*opacity:\s*0/i.test(html)) {
  errors.push("Prerendered content must not be hidden at first paint.");
}

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

const notFoundHtml = await readFile(resolve(outputDirectory, "404.html"), "utf8");
if (!notFoundHtml.includes("Nie znaleźliśmy tej strony.")) {
  errors.push("The static 404 page must use the site's Polish language.");
}

const manifest = JSON.parse(
  await readFile(resolve(outputDirectory, "site.webmanifest"), "utf8"),
);
const manifestIcon = manifest.icons.find((icon) => icon.src === "/icon-512.jpg");
const iconMetadata = await sharp(resolve(outputDirectory, "icon-512.jpg")).metadata();

if (
  manifestIcon?.sizes !== "512x512" ||
  iconMetadata.width !== 512 ||
  iconMetadata.height !== 512
) {
  errors.push("The 512px manifest icon declaration and image dimensions must agree.");
}

const assetFilenames = await readdir(resolve(outputDirectory, "assets"));
const imageFilenames = assetFilenames.filter((filename) =>
  /\.(?:avif|jpe?g|png|webp)$/i.test(filename),
);

for (const filename of imageFilenames) {
  const metadata = await sharp(resolve(outputDirectory, "assets", filename)).metadata();
  if (metadata.exif || metadata.iptc || metadata.xmp) {
    errors.push(`Production image metadata was not stripped: dist/assets/${filename}`);
  }
}

if (errors.length > 0) {
  console.error("SEO validation failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("SEO validation passed.");
