import { ServicePage } from "@/components/service-page";
import { SERVICES } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
const service = SERVICES["yard-signs"];
export const metadata = buildMetadata({ title: "QR Yard Sign Pack", description: service.answer, path: "/yard-signs" });
export default function Page(){return <ServicePage service={service} demo="yard-signs"/>}
