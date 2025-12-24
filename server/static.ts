import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  // When server is built to dist/index.cjs, __dirname will be "dist"
  // So dist/public is the correct path for the client build
  // Also try process.cwd() as fallback for different deployment scenarios
  const cwd = process.cwd();
  let distPath: string;
  
  // Strategy 1: Try relative to __dirname (when bundled as CJS)
  if (typeof __dirname !== "undefined") {
    distPath = path.resolve(__dirname, "public");
    console.log(`[static] Trying path relative to __dirname: ${distPath}`);
  } else {
    distPath = path.resolve(cwd, "dist", "public");
    console.log(`[static] Trying path from cwd: ${distPath}`);
  }
  
  // Strategy 2: Try from process.cwd()/dist/public
  if (!fs.existsSync(distPath)) {
    distPath = path.resolve(cwd, "dist", "public");
    console.log(`[static] Fallback to cwd/dist/public: ${distPath}`);
  }
  
  // Strategy 3: Try from process.cwd()/public (if build outputs directly to public)
  if (!fs.existsSync(distPath)) {
    distPath = path.resolve(cwd, "public");
    console.log(`[static] Fallback to cwd/public: ${distPath}`);
  }
  
  // Log current working directory and __dirname for debugging
  console.log(`[static] Current working directory: ${cwd}`);
  if (typeof __dirname !== "undefined") {
    console.log(`[static] __dirname: ${__dirname}`);
  }
  console.log(`[static] Final distPath: ${distPath}`);
  console.log(`[static] Path exists: ${fs.existsSync(distPath)}`);
  
  if (!fs.existsSync(distPath)) {
    // List what's actually in dist/ for debugging
    const distDir = path.resolve(cwd, "dist");
    let distContents = "dist directory does not exist";
    if (fs.existsSync(distDir)) {
      try {
        distContents = fs.readdirSync(distDir).join(", ");
      } catch (e) {
        distContents = `Error reading dist: ${e}`;
      }
    }
    throw new Error(
      `Could not find the build directory at ${distPath}. ` +
      `Current directory: ${cwd}, ` +
      `__dirname: ${typeof __dirname !== "undefined" ? __dirname : "undefined"}, ` +
      `dist contents: ${distContents}. ` +
      `Make sure to build the client first with 'npm run build'`,
    );
  }

  console.log(`[static] Successfully found build directory at: ${distPath}`);
  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
