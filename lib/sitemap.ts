import { adDesigns, adResults, searchConsoleProof, websitePreviews } from "@/lib/assets";
import { articles } from "@/lib/articles";
import { SITE } from "@/lib/site";
import { allStockImages, type StockImageAsset } from "@/lib/stock-images";

type ChangeFrequency = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

export type SitemapRouteEntry = {
  path: string;
  lastModified: string;
  changeFrequency: ChangeFrequency;
  priority: number;
};

export const sitemapRouteEntries: SitemapRouteEntry[] = [
  { path: "/", lastModified: SITE.updated, changeFrequency: "weekly", priority: 1 },
  { path: "/seo-websites", lastModified: SITE.updated, changeFrequency: "weekly", priority: 0.9 },
  { path: "/meta-ads", lastModified: SITE.updated, changeFrequency: "weekly", priority: 0.9 },
  { path: "/shirts", lastModified: SITE.updated, changeFrequency: "monthly", priority: 0.8 },
  { path: "/business-cards", lastModified: SITE.updated, changeFrequency: "monthly", priority: 0.8 },
  { path: "/review-cards", lastModified: SITE.updated, changeFrequency: "monthly", priority: 0.8 },
  { path: "/yard-signs", lastModified: SITE.updated, changeFrequency: "monthly", priority: 0.8 },
  { path: "/work", lastModified: SITE.updated, changeFrequency: "weekly", priority: 0.8 },
  { path: "/insights", lastModified: SITE.updated, changeFrequency: "weekly", priority: 0.75 },
  { path: "/about", lastModified: SITE.updated, changeFrequency: "monthly", priority: 0.6 },
  { path: "/contact", lastModified: SITE.updated, changeFrequency: "weekly", priority: 0.7 },
  { path: "/privacy-policy", lastModified: SITE.updated, changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", lastModified: SITE.updated, changeFrequency: "yearly", priority: 0.3 },
  { path: "/accessibility", lastModified: SITE.updated, changeFrequency: "yearly", priority: 0.3 },
  ...articles.map((article) => ({
    path: `/insights/${article.slug}`,
    lastModified: article.modified || article.published,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  })),
];

export type ImageSitemapGroup = {
  path: string;
  lastModified: string;
  images: Array<{
    src: string;
    title: string;
    alt: string;
  }>;
};

const stockFor = (path: string): StockImageAsset[] => allStockImages.filter((image) => image.route === path);

export const imageSitemapGroups: ImageSitemapGroup[] = [
  { path: "/", lastModified: SITE.updated, images: stockFor("/") },
  {
    path: "/seo-websites",
    lastModified: SITE.updated,
    images: [...websitePreviews, searchConsoleProof, ...stockFor("/seo-websites")],
  },
  {
    path: "/meta-ads",
    lastModified: SITE.updated,
    images: [...adDesigns, ...adResults, ...stockFor("/meta-ads")],
  },
  { path: "/shirts", lastModified: SITE.updated, images: stockFor("/shirts") },
  { path: "/business-cards", lastModified: SITE.updated, images: stockFor("/business-cards") },
  { path: "/review-cards", lastModified: SITE.updated, images: stockFor("/review-cards") },
  { path: "/about", lastModified: SITE.updated, images: stockFor("/about") },
  { path: "/work", lastModified: SITE.updated, images: [...websitePreviews, ...adDesigns] },
];
