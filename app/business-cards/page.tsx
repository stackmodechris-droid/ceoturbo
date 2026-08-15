import { ServicePage } from "@/components/service-page";
import { SERVICES } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { STOCK_IMAGES } from "@/lib/stock-images";
const service = SERVICES["business-cards"];
export const metadata = buildMetadata({ title: "QR Business Card Pack", description: service.answer, path: "/business-cards", image: STOCK_IMAGES.businessCard.src, imageAlt: STOCK_IMAGES.businessCard.alt });
export default function Page(){return <ServicePage service={service} demo="business-cards" media={[STOCK_IMAGES.businessCard,STOCK_IMAGES.businessCardFollowUp]} mediaQuestion="What should a business card make easier after the conversation?" mediaAnswer="The card should preserve recognition, make the next action obvious, and provide a readable fallback when a QR scan is not practical."/>}
