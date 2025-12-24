import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  // When server is built to dist/index.cjs, __dirname will be "dist"
  // So dist/public is the correct path for the client build
  // Also try process.cwd() as fallback for different deployment scenarios
  let distPath: string;
  
  if (typeof __dirname !== "undefined") {
    // CJS format - __dirname is available
    distPath = path.resolve(__dirname, "public");
  } else {
    // ESM format fallback - use process.cwd()
    distPath = path.resolve(process.cwd(), "dist", "public");
  }
  
  // Fallback: try from project root if above doesn't exist
  if (!fs.existsSync(distPath)) {
    distPath = path.resolve(process.cwd(), "dist", "public");
  }
  
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory at ${distPath}. Make sure to build the client first with 'npm run build'`,
    );
  }

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
