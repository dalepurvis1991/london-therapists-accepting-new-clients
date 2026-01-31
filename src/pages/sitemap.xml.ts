import type { APIRoute } from "astro";
import { PLACES } from "../data/places";

const BASE_URL = (import.meta as any).env?.PUBLIC_SITE_URL || "https://example.com";

function xmlEscape(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export const GET: APIRoute = async () => {
  const urls = [
    `${BASE_URL}/`,
    `${BASE_URL}/london/therapy-and-wellbeing`,
    ...PLACES.map((p) => `${BASE_URL}/london/therapy-and-wellbeing/${p.slug}`),
  ];

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map((u) => `  <url><loc>${xmlEscape(u)}</loc></url>`).join("\n") +
    `\n</urlset>\n`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
