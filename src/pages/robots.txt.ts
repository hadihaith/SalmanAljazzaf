import type { APIRoute } from 'astro';

// Crawlers only read robots.txt at a domain's root, so this takes effect once the
// site is served from its own domain; on a GitHub project page, submit the sitemap
// in Google Search Console instead.
export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const sitemap = new URL(`${base}/sitemap.xml`, site).href;
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
