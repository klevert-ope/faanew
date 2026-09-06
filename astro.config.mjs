import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

function pathOf(url) {
  return new URL(url).pathname.replace(/\/+$/, "") || "/";
}

function canonicalLoc(url) {
  const parsed = new URL(url);
  const path = pathOf(url);
  parsed.pathname = path;
  return parsed.href;
}

export default defineConfig({
  site: "https://faaafrica.com",
  integrations: [
    sitemap({
      serialize(item) {
        const path = pathOf(item.url);
        const url = canonicalLoc(item.url);
        if (path === "/") {
          return { ...item, url, changefreq: "weekly", priority: 1 };
        }
        if (
          path === "/services" ||
          path === "/fleet-solutions" ||
          path === "/industrial-solutions"
        ) {
          return { ...item, url, changefreq: "monthly", priority: 0.9 };
        }
        if (path === "/privacy-policy" || path === "/terms-and-conditions") {
          return { ...item, url, changefreq: "yearly", priority: 0.3 };
        }
        return { ...item, url, changefreq: "monthly", priority: 0.7 };
      },
    }),
  ],
  redirects: {
    "/pricing": "/partners",
    "/partnership": "/partners",
    "/projects": "/work",
    "/About.html": "/about",
  },
});
