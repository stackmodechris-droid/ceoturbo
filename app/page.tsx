import Image from "next/image";
import Link from "next/link";
import { HeroVisual } from "@/components/hero-visual";
import { PrimaryLink, SectionHeader, FaqList } from "@/components/page-elements";
import { PortfolioTabs } from "@/components/portfolio-tabs";
import { ResultInsights } from "@/components/result-insights";
import { StockVisual } from "@/components/stock-visual";
import { Qualifier } from "@/components/qualifier";
import { websitePreviews, adDesigns, adResults, searchConsoleProof } from "@/lib/assets";
import { STOCK_IMAGES } from "@/lib/stock-images";
import { SERVICES, SITE } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ title: "Visibility Systems for Search, Social, and the Street", description: "Custom SEO, AEO and GEO websites, Meta ads, company shirts, QR cards, review cards, and yard signs for US business owners.", path: "/", image: STOCK_IMAGES.turbo.src, imageAlt: STOCK_IMAGES.turbo.alt });

const homeFaqs = [
  { question: "What does CEOTurbo do?", answer: "CEOTurbo coordinates three visibility channels: a custom-coded website for search discovery, Meta ads for paid social reach, and branded physical products for real-world recognition and follow-up." },
  { question: "Can CEOTurbo guarantee rankings or leads?", answer: "No. Search rankings, AI citations, traffic, leads, reviews, and sales depend on factors no outside company controls. CEOTurbo delivers a clear, measurable foundation and reports evidence honestly." },
  { question: "Do I have to buy every service?", answer: "No. Each service is a fixed package. The guided qualifier helps identify the most useful starting point without collecting personal information." },
  { question: "Who owns the website and advertising accounts?", answer: "The client should own the domain, GitHub repository, Vercel deployment, Meta Business assets, and connected analytics. CEOTurbo receives only the access needed for the agreed work." },
];

export default function HomePage() {
  const offers = Object.values(SERVICES);
  return (
    <>
      <section className="hero section-dark">
        <div className="section-shell hero-grid">
          <div className="hero-copy">
          <p className="hero-kicker">Visibility systems for US businesses</p>
            <h1>Get found online.<em>Get remembered everywhere else.</em></h1>
            <p className="lede">CEOTurbo connects custom search-ready websites, Meta ads, and physical branding so the same business looks credible on a screen and in the real world.</p>
            <div className="hero-actions"><PrimaryLink href="#qualifier">Find my starting package</PrimaryLink><a className="text-link" href={SITE.phoneHref}>Call {SITE.phoneDisplay}</a></div>
            <p className="hero-note">Fixed packages. Client-owned accounts. No ranking, lead, or revenue guarantees.</p>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="section section-white">
        <div className="section-shell">
          <p className="section-label">Evidence on the table</p>
          <div className="proof-ledger">
            <div className="proof-stat"><strong>20</strong><span>live website previews</span></div>
            <div className="proof-stat"><strong>22</strong><span>original ad designs supplied</span></div>
            <div className="proof-stat"><strong>9</strong><span>campaign result screenshots</span></div>
            <div className="proof-stat"><strong>3</strong><span>visibility channels coordinated</span></div>
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="section-shell">
          <SectionHeader question="How does CEOTurbo build visibility?" answer="Search earns consideration, social creates targeted reach, and physical branding keeps the company recognizable after the screen disappears." />
          <StockVisual image={STOCK_IMAGES.turbo} className="stock-visual--feature" />
          <div className="model-grid">
            <article className="model-column"><span>Search</span><h3>Be understandable.</h3><p>Useful answers, crawlable pages, accurate schema, indexing setup, and a clear way to act.</p><Link href="/seo-websites">Explore SEO websites</Link></article>
            <article className="model-column"><span>Social</span><h3>Be discoverable.</h3><p>Facebook and Instagram campaigns with original creative, visible spend, and weekly optimization.</p><Link href="/meta-ads">Explore Meta ads</Link></article>
            <article className="model-column"><span>Street</span><h3>Be remembered.</h3><p>Shirts, cards, review prompts, and signs that make the identity consistent in person.</p><Link href="/shirts">Explore physical branding</Link></article>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="section-shell">
          <SectionHeader question="What has CEOTurbo built?" answer={`Explore all ${websitePreviews.length} live website previews and all ${adDesigns.length} supplied ad designs. Websites are shown first; switch categories without leaving the page.`} />
          <PortfolioTabs websites={websitePreviews} ads={adDesigns} initialTab="websites" />
          <p className="portfolio-work-link"><Link className="text-link" href="/work">Open the dedicated Work page →</Link></p>
        </div>
      </section>

      <section className="section section-paper">
        <div className="section-shell">
          <SectionHeader question="What do the campaign screenshots show?" answer="These are specific historical campaign snapshots, not forecasts. Open any row to inspect the supplied screenshot." />
          <ResultInsights results={[adResults[1], adResults[4], adResults[5]]} />
        </div>
      </section>

      <section className="section section-white">
        <div className="section-shell">
          <SectionHeader question="How much does each CEOTurbo package cost?" answer="One published scope per service makes the starting decision clear. Taxes, rush work, platform fees, domains, and Meta ad spend are excluded where noted." />
          <div className="offer-list" id="services">
            {offers.map((service) => (
              <Link className="offer-row" href={`/${service.key}`} key={service.key}>
                <div><h3>{service.name}</h3><p>{service.summary}</p></div><span className="offer-price"><strong>{service.price}</strong><span>{service.cadence}</span></span><span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="section-shell split-layout">
          <div><p className="eyebrow">No form. No data capture.</p><h2>Which package should you start with?</h2><p className="lede">Answer five practical questions. The recommendation happens in your browser and nothing is saved.</p></div>
          <Qualifier />
        </div>
      </section>

      <section className="section section-paper">
        <div className="section-shell split-layout">
          <div><p className="eyebrow">Search evidence</p><h2>How is search visibility measured?</h2><p>The supplied Search Console screenshot records 83 clicks, 3.34K impressions, a 2.5% click-through rate, and a 25.4 average position over the selected twelve-month view. It is one historical example—not a promise of the same outcome.</p></div>
          <a href={searchConsoleProof.src} target="_blank" rel="noreferrer"><Image src={searchConsoleProof.src} alt={searchConsoleProof.alt} width={searchConsoleProof.width} height={searchConsoleProof.height} sizes="(max-width: 820px) 92vw, 420px" /></a>
        </div>
      </section>

      <section className="section section-white">
        <div className="section-shell split-layout">
          <div><p className="eyebrow">Founder-led</p><h2>Who builds the CEOTurbo system?</h2><p>Christopher “StackmodeChris” Robinson combines custom web development, ad creative, campaign reading, and practical brand systems. CEOTurbo’s job is to connect those parts without hiding ownership or inventing proof.</p><PrimaryLink href="/about">About CEOTurbo</PrimaryLink></div>
          <div className="faq-column"><h2>What do business owners ask?</h2><FaqList faqs={homeFaqs} /></div>
        </div>
      </section>

      <section className="final-cta section-dark"><div className="section-shell"><h2>Which visibility move should you make next?</h2><p>Book a focused call to confirm fit, scope, timing, and which assets already exist.</p><PrimaryLink href={SITE.calendly}>Book with CEOTurbo</PrimaryLink></div></section>
    </>
  );
}
