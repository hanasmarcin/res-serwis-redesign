import { readFile, rm, unlink, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const rootDirectory = resolve(import.meta.dirname, "..");
const clientHtmlPath = resolve(rootDirectory, "dist/index.html");
const serverEntryPath = resolve(rootDirectory, "dist-ssr/entry-server.js");

const [{ render }, template] = await Promise.all([
  import(pathToFileURL(serverEntryPath).href),
  readFile(clientHtmlPath, "utf8"),
]);

const appHtml = render("/");
const rootMarker = '<div id="root"></div>';

if (!template.includes(rootMarker)) {
  throw new Error(`Prerender failed: ${rootMarker} was not found in dist/index.html.`);
}

let prerenderedHtml = template.replace(rootMarker, `<div id="root">${appHtml}</div>`);
const stylesheetLinkPattern =
  /<link rel="stylesheet" crossorigin href="(\/assets\/[^"]+\.css)">/g;

for (const match of prerenderedHtml.matchAll(stylesheetLinkPattern)) {
  const [stylesheetLink, stylesheetHref] = match;
  const stylesheetPath = resolve(rootDirectory, "dist", stylesheetHref.slice(1));
  const stylesheet = await readFile(stylesheetPath, "utf8");

  prerenderedHtml = prerenderedHtml.replace(stylesheetLink, `<style>${stylesheet}</style>`);
  await unlink(stylesheetPath);
}

await writeFile(clientHtmlPath, prerenderedHtml);
await rm(resolve(rootDirectory, "dist-ssr"), { recursive: true, force: true });

console.log("Prerendered / and inlined its critical stylesheet into dist/index.html.");
