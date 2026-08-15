import { ServicePage } from "@/components/service-page";
import { SERVICES } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { STOCK_IMAGES } from "@/lib/stock-images";
const service = SERVICES.shirts;
export const metadata = buildMetadata({ title: "Custom Company Shirt Pack", description: service.answer, path: "/shirts", image: STOCK_IMAGES.shirtsDesigner.src, imageAlt: STOCK_IMAGES.shirtsDesigner.alt });
export default function Page(){return <ServicePage service={service} demo="shirts" media={[STOCK_IMAGES.shirtsDesigner,STOCK_IMAGES.professionalShirt]} mediaQuestion="How can company shirts make the business easier to recognize?" mediaAnswer="The design needs to read at a normal distance, reproduce cleanly, and support a consistent team appearance without turning the shirt into a crowded flyer."/>}
