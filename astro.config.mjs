import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://faaafrica.com",
  redirects: {
    "/pricing": "/partners",
    "/partnership": "/partners",
    "/projects": "/work",
    "/About.html": "/about",
  },
});
