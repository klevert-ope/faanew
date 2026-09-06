import type { APIRoute } from "astro";

function robotsTxt(sitemapUrl: URL): string {
  return `User-agent: *
Allow: /

Sitemap: ${sitemapUrl.href}
`;
}

export const GET: APIRoute = ({ site }) => {
  const sitemapUrl = new URL("sitemap-index.xml", site);
  return new Response(robotsTxt(sitemapUrl), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
