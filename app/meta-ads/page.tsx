import { ProofGallery } from "@/components/proof-gallery";
import { ResultInsights } from "@/components/result-insights";
import { Breadcrumbs, FaqList, PrimaryLink, SectionHeader } from "@/components/page-elements";
import { JsonLd } from "@/components/json-ld";
import { StockVisual } from "@/components/stock-visual";
import { adDesigns, adResults } from "@/lib/assets";
import { SERVICES, SITE } from "@/lib/site";
import { STOCK_IMAGES } from "@/lib/stock-images";
import { breadcrumbSchema, buildMetadata, faqSchema, serviceSchema } from "@/lib/seo";
const service = SERVICES["meta-ads"];
export const metadata = buildMetadata({ title: "Meta Ads for Facebook and Instagram", description: service.answer, path: "/meta-ads", image: STOCK_IMAGES.metaPlatform.src, imageAlt: STOCK_IMAGES.metaPlatform.alt });
export default function MetaAdsPage() {
  return (
    <div className="meta-ads-page">
      <JsonLd data={[serviceSchema(service), breadcrumbSchema([{ name: "Home", path: "/" }, { name: service.navLabel, path: "/meta-ads" }]), faqSchema(service.faqs)]} />

      <section className="service-hero section-dark">
        <div className="section-shell">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: service.navLabel }]} />
          <div className="service-hero-grid">
            <div>
              <p className="eyebrow">Facebook + Instagram growth system</p>
              <h1>Meta ads built to create a measurable next step.</h1>
              <p className="lede">{service.answer}</p>
              <div className="price-lockup"><strong>{service.price}</strong><span>{service.cadence}</span></div>
              <PrimaryLink href={SITE.calendly}>Book the Meta Ads call</PrimaryLink>
            </div>
            <aside className="inclusion-sheet inclusion-sheet--visual">
              <StockVisual image={STOCK_IMAGES.metaPlatform} className="stock-visual--meta-hero stock-visual--hd" priority />
              <h2>What does the monthly scope include?</h2>
              <ul>{service.includes.map((item) => <li key={item}>{item}</li>)}</ul>
              <div><strong>Separate from the fee</strong><p>{service.exclusions.join(" · ")}</p></div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="section-shell">
          <div className="stock-section-intro">
            <SectionHeader question="What did the supplied campaigns record?" answer="All nine result screenshots are listed here. Each row states the captured outcome, cost per result, and spend visible in that screenshot." />
            <StockVisual image={STOCK_IMAGES.metaResults} />
          </div>
          <ResultInsights results={adResults} />
        </div>
      </section>

      <section className="section section-white">
        <div className="section-shell split-layout stock-split">
          <div>
            <SectionHeader question="How is a Meta campaign improved after launch?" answer="CEOTurbo reviews the relationship between creative, delivery, spend, response quality, and cost per result. Changes are based on recorded campaign behavior, not a guaranteed forecast." />
            <p>Weekly optimization can adjust creative emphasis, audience settings, placements, budget pacing, or the response path when the evidence supports a change.</p>
          </div>
          <StockVisual image={STOCK_IMAGES.metaOptimization} />
        </div>
      </section>

      <section className="section section-paper">
        <div className="section-shell">
          <SectionHeader question="What ad creative has CEOTurbo designed?" answer="All 22 supplied static designs are shown in their native proportions. They demonstrate varied offers and markets; they are not templates reused for every client." />
          <div className="meta-proof-grid">
            <ProofGallery items={adDesigns} label="All CEOTurbo ad designs" />
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="section-shell narrow"><SectionHeader question="What should you ask before a Meta engagement?" /><FaqList faqs={service.faqs} /></div>
      </section>

      <section className="final-cta section-dark">
        <div className="section-shell">
          <h2>Ready to fund the media, own the account, and read the result?</h2>
          <p>We will confirm the offer, response process, creative inputs, ad budget, and three-month fit.</p>
          <PrimaryLink href={SITE.calendly}>Book the Meta Ads call</PrimaryLink>
        </div>
      </section>
    </div>
  );
}
