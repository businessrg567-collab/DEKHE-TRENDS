import { build as esbuild } from "esbuild";
import { build as viteBuild } from "vite";
import { rm, readFile, copyFile, mkdir } from "fs/promises";
import { existsSync, copyFileSync } from "fs";
import path from "path";

// server deps to bundle to reduce openat(2) syscalls
// which helps cold start times
const allowlist = [
  "@google/generative-ai",
  "axios",
  "connect-pg-simple",
  "cors",
  "date-fns",
  "drizzle-orm",
  "drizzle-zod",
  "express",
  "express-rate-limit",
  "express-session",
  "jsonwebtoken",
  "memorystore",
  "multer",
  "nanoid",
  "nodemailer",
  "openai",
  "passport",
  "passport-local",
  "pg",
  "stripe",
  "uuid",
  "ws",
  "xlsx",
  "zod",
  "zod-validation-error",
];

async function buildAll() {
  await rm("dist", { recursive: true, force: true });

  console.log("building client...");
  await viteBuild({
    root: ".",
  });

  // Copy static files to the dist directory
  const distPath = path.join(process.cwd(), 'dist');
  const publicDistPath = path.join(distPath, 'public');
  
  // Create dist/public directory if it doesn't exist
  if (!existsSync(publicDistPath)) {
    await mkdir(publicDistPath, { recursive: true });
  }

  // Copy ads.txt to dist
  const adsTxtPath = path.join(process.cwd(), 'ads.txt');
  if (existsSync(adsTxtPath) && existsSync(distPath)) {
    const destPath = path.join(distPath, 'ads.txt');
    await copyFile(adsTxtPath, destPath);
    console.log(`Copied ads.txt to ${destPath}`);
  }

  // Copy robots.txt and sitemap.xml to dist/public
  const staticFiles = ['robots.txt', 'sitemap.xml'];
  for (const file of staticFiles) {
    const srcPath = path.join(process.cwd(), 'public', file);
    if (existsSync(srcPath)) {
      const destPath = path.join(publicDistPath, file);
      await copyFile(srcPath, destPath);
      console.log(`Copied ${file} to ${destPath}`);
    }

  console.log("building server...");
  const pkg = JSON.parse(await readFile("package.json", "utf-8"));
  const allDeps = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies || {}),
  ];
  const externals = allDeps.filter((dep) => !allowlist.includes(dep));

  await esbuild({
    entryPoints: ["server/index.ts"],
    platform: "node",
    bundle: true,
    format: "cjs",
    outfile: "dist/index.cjs",
    define: {
      "process.env.NODE_ENV": '"production"',
    },
    minify: true,
    external: externals,
    logLevel: "info",
    alias: {
      "@shared": path.resolve(process.cwd(), "shared"),
    },
  });

  // Copy public files (robots.txt, sitemap.xml) to dist/public
  console.log("copying public files...");
  const publicFiles = ["robots.txt", "sitemap.xml", "sitemap.html"];
  for (const file of publicFiles) {
    const srcPath = path.join("public", file);
    const destPath = path.join("dist", "public", file);
    if (existsSync(srcPath)) {
      await copyFile(srcPath, destPath);
      console.log(`  copied ${file}`);
    }
  }
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
