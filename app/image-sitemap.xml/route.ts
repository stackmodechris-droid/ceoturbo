import { adDesigns, adResults, searchConsoleProof, websitePreviews } from "@/lib/assets";
import { SITE } from "@/lib/site";
import { allStockImages } from "@/lib/stock-images";

export function GET() {
  const escape = (value: string) => value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

  const stockFor = (route: string) => allStockImages.filter((image) => image.route === route);
  const groups = [
    { loc: SITE.url, images: stockFor("/") },
    { loc: `${SITE.url}/seo-websites`, images: [...websitePreviews, searchConsoleProof, ...stockFor("/seo-websites")] },
    { loc: `${SITE.url}/meta-ads`, images: [...adDesigns, ...adResults, ...stockFor("/meta-ads")] },
    { loc: `${SITE.url}/shirts`, images: stockFor("/shirts") },
    { loc: `${SITE.url}/business-cards`, images: stockFor("/business-cards") },
    { loc: `${SITE.url}/review-cards`, images: stockFor("/review-cards") },
    { loc: `${SITE.url}/about`, images: stockFor("/about") },
    { loc: `${SITE.url}/work`, images: [...websitePreviews, ...adDesigns] },
  ];

  const body = groups.map((group) => (
    `<url><loc>${group.loc}</loc>${group.images.map((image) => (
      `<image:image><image:loc>${escape(new URL(image.src, SITE.url).toString())}</image:loc><image:title>${escape(image.title)}</image:title><image:caption>${escape(image.alt)}</image:caption></image:image>`
    )).join("")}</url>`
  )).join("");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">${body}</urlset>`,
    { headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=3600, s-maxage=86400" } },
  );
}
