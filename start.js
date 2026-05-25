#!/usr/bin/env node

import http from "http";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import fs from "fs";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = process.env.PORT || 3000;
const host = process.env.HOST || "0.0.0.0";

// Serve static files from dist/client
function serveStaticFile(filePath, res) {
  try {
    const fullPath = join(__dirname, "dist/client", filePath);
    // Security: prevent directory traversal
    const normalized = path.normalize(fullPath);
    const clientDir = path.normalize(join(__dirname, "dist/client"));
    
    if (!normalized.startsWith(clientDir)) {
      res.writeHead(403, { "Content-Type": "text/plain" });
      res.end("Forbidden");
      return true;
    }

    if (fs.existsSync(fullPath)) {
      const content = fs.readFileSync(fullPath);
      const ext = path.extname(fullPath).toLowerCase();
      
      const mimeTypes = {
        ".js": "application/javascript; charset=utf-8",
        ".css": "text/css; charset=utf-8",
        ".jpg": "image/jpeg",
        ".jpeg": "image/jpeg",
        ".png": "image/png",
        ".gif": "image/gif",
        ".webp": "image/webp",
        ".svg": "image/svg+xml",
        ".woff": "font/woff",
        ".woff2": "font/woff2",
        ".json": "application/json",
        ".txt": "text/plain",
      };

      const contentType = mimeTypes[ext] || "application/octet-stream";
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content);
      return true;
    }
  } catch (err) {
    console.error("Static file error:", err);
  }
  return false;
}

async function start() {
  try {
    // Import the built server module using proper file:// URL
    const serverPath = join(__dirname, "dist/server/server.js");
    const serverUrl = new URL(`file:///${serverPath.replace(/\\/g, "/")}`);
    const { default: server } = await import(serverUrl.href);

    const httpServer = http.createServer(async (req, res) => {
      try {
        // Try to serve static files first
        if (req.url && (req.url.startsWith("/assets/") || req.url.startsWith("/.assetsignore"))) {
          if (serveStaticFile(req.url, res)) {
            return;
          }
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("Not Found");
          return;
        }

        // Create a Request object from the Node.js request
        const url = new URL(
          req.url || "/",
          `http://${req.headers.host || "localhost"}`
        );

        // Build the request headers
        const headers = new Headers(req.headers);

        // Build request body
        let body = null;
        if (!["GET", "HEAD", "OPTIONS"].includes(req.method || "GET")) {
          // For POST, PUT, PATCH, DELETE, etc., read the body
          body = await new Promise((resolve, reject) => {
            const chunks = [];
            req.on("data", (chunk) => chunks.push(chunk));
            req.on("end", () => resolve(Buffer.concat(chunks)));
            req.on("error", reject);
          });
        }

        const request = new Request(url, {
          method: req.method || "GET",
          headers: headers,
          body: body || undefined,
        });

        // Call the fetch handler from the server
        const response = await server.fetch(request, {}, {});

        // Get response headers object
        const responseHeaders = {};
        response.headers.forEach((value, key) => {
          responseHeaders[key] = value;
        });

        // Set response status and headers
        res.writeHead(response.status, responseHeaders);

        // Get response body as text and write it
        const responseBody = await response.text();
        res.end(responseBody);
      } catch (err) {
        console.error("Request error:", err);
        if (!res.headersSent) {
          res.writeHead(500, { "Content-Type": "text/html; charset=utf-8" });
        }
        res.end(`<!DOCTYPE html>
<html>
  <head>
    <title>Server Error</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: #fafafa; color: #111; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; }
      h1 { font-size: 1.25rem; margin: 0 0 0.5rem; }
      p { color: #4b5563; margin: 0 0 1.5rem; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>Server Error</h1>
      <p>An error occurred while processing your request.</p>
    </div>
  </body>
</html>`);
      }
    });

    httpServer.listen(port, host, () => {
      console.log(`✓ Server listening on http://${host}:${port}`);
    });

    // Handle graceful shutdown
    process.on("SIGTERM", () => {
      console.log("SIGTERM received, shutting down gracefully...");
      httpServer.close(() => {
        console.log("Server closed");
        process.exit(0);
      });
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

start();
