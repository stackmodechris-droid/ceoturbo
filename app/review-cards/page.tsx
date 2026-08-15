import { ServicePage } from "@/components/service-page";
import { SERVICES } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { STOCK_IMAGES } from "@/lib/stock-images";
const service = SERVICES["review-cards"];
export const metadata = buildMetadata({ title: "Google Review Card and Display Pack", description: service.answer, path: "/review-cards", image: STOCK_IMAGES.honestReview.src, imageAlt: STOCK_IMAGES.honestReview.alt });
export default function Page(){return <ServicePage service={service} demo="review-cards" media={[STOCK_IMAGES.honestReview]} mediaQuestion="How should an honest review request look and feel?" mediaAnswer="It should be clear, neutral, easy to scan, and offered to every eligible customer without incentives, rating pressure, or review gating."/>}
