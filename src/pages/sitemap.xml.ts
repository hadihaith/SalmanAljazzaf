import type { APIRoute } from 'astro';

// Single-page site, so the sitemap lists just the home page
export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const home = new URL(`${base}/`, site).href;
  const lastmod = new Date().toISOString().slice(0, 10);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${home}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
