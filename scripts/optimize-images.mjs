import { mkdir, rename } from "node:fs/promises";
import { basename, dirname, extname, resolve } from "node:path";
import sharp from "sharp";

const rootDirectory = resolve(import.meta.dirname, "..");
const sourceDirectory = resolve(rootDirectory, "src/assets/work");
const outputDirectory = resolve(rootDirectory, "src/assets/generated");
const publicDirectory = resolve(rootDirectory, "public");

const images = [
  {
    filename: "hero-roof-service.jpg",
    name: "hero-roof-service",
    widths: [640, 960, 1280, 1600],
  },
  {
    filename: "technician-service.jpg",
    name: "technician-service",
    widths: [360, 720],
  },
  {
    filename: "technician-maintenance.jpg",
    name: "technician-maintenance",
    widths: [320, 640],
  },
  {
    filename: "boiler-room.jpg",
    name: "boiler-room",
    widths: [400, 800],
  },
  {
    filename: "heat-pump-room.jpg",
    name: "heat-pump-room",
    widths: [400, 800],
  },
  {
    filename: "solar-collectors.jpg",
    name: "solar-collectors",
    widths: [400, 800],
  },
  {
    filename: "system-diagnostics.jpg",
    name: "system-diagnostics",
    widths: [400, 800],
  },
];

const sanitizeJpeg = async (inputPath) => {
  const metadata = await sharp(inputPath).metadata();

  if (!metadata.exif && !metadata.iptc && !metadata.xmp) {
    return;
  }

  const temporaryPath = resolve(
    dirname(inputPath),
    `.${basename(inputPath, extname(inputPath))}.sanitized.jpg`,
  );

  await sharp(inputPath)
    .rotate()
    .jpeg({
      quality: 86,
      mozjpeg: true,
      chromaSubsampling: "4:4:4",
    })
    .toFile(temporaryPath);

  await rename(temporaryPath, inputPath);
};

const rewritePublicImage = async ({
  filename,
  format,
  height,
  width,
}) => {
  const inputPath = resolve(publicDirectory, filename);
  const temporaryPath = resolve(publicDirectory, `.${filename}.optimized`);
  const pipeline = sharp(inputPath).resize({
    width,
    height,
    fit: "cover",
    withoutEnlargement: true,
  });

  if (format === "jpeg") {
    await pipeline
      .jpeg({ quality: 86, mozjpeg: true, chromaSubsampling: "4:4:4" })
      .toFile(temporaryPath);
  } else {
    await pipeline.png({ compressionLevel: 9, effort: 9 }).toFile(temporaryPath);
  }

  await rename(temporaryPath, inputPath);
};

await mkdir(outputDirectory, { recursive: true });
await sanitizeJpeg(resolve(rootDirectory, "src/assets/logo.jpg"));
await sanitizeJpeg(resolve(publicDirectory, "logo.jpg"));

for (const image of images) {
  const inputPath = resolve(sourceDirectory, image.filename);
  await sanitizeJpeg(inputPath);

  for (const width of image.widths) {
    const pipeline = sharp(inputPath).rotate().resize({
      width,
      withoutEnlargement: true,
    });

    await Promise.all([
      pipeline
        .clone()
        .avif({ quality: 58, effort: 6 })
        .toFile(resolve(outputDirectory, `${image.name}-${width}.avif`)),
      pipeline
        .clone()
        .webp({ quality: 76, effort: 5, smartSubsample: true })
        .toFile(resolve(outputDirectory, `${image.name}-${width}.webp`)),
    ]);
  }
}

await Promise.all([
  rewritePublicImage({
    filename: "icon-192.png",
    format: "png",
    height: 192,
    width: 192,
  }),
  rewritePublicImage({
    filename: "icon-512.jpg",
    format: "jpeg",
    height: 512,
    width: 512,
  }),
  rewritePublicImage({
    filename: "apple-touch-icon.png",
    format: "png",
    height: 180,
    width: 180,
  }),
  rewritePublicImage({
    filename: "og.png",
    format: "png",
    height: 630,
    width: 1200,
  }),
]);

console.log(
  `Optimized ${images.length} responsive images, four public images, and sanitized both logos.`,
);
