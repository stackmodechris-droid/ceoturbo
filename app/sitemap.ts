import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { SITE } from "@/lib/site";
const paths=["","/seo-websites","/meta-ads","/shirts","/business-cards","/review-cards","/yard-signs","/work","/insights","/about","/contact","/privacy-policy","/terms","/accessibility"];
export default function sitemap():MetadataRoute.Sitemap{return [...paths,...articles.map(article=>`/insights/${article.slug}`)].map(path=>({url:`${SITE.url}${path}`,lastModified:new Date(SITE.updated),changeFrequency:path.startsWith("/insights/")?"monthly":"monthly",priority:path===""?1:path.startsWith("/privacy")||path==="/terms"?0.3:0.8}));}
