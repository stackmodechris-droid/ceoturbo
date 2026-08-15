export const SITE = {
  name: "CEOTurbo",
  legalName: "CEO Turbo",
  url: "https://ceoturbo.com",
  phoneDisplay: "678-558-4327",
  phoneHref: "tel:+16785584327",
  calendly: "https://calendly.com/stackmodechris/ceoturbo",
  founder: "Christopher Robinson",
  founderAlias: "StackmodeChris",
  description:
    "CEOTurbo builds custom SEO, AEO and GEO websites, Meta ads, and branded print systems for US businesses.",
  updated: "2026-08-15"
} as const;

export const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/seo-websites", label: "SEO Websites" },
  { href: "/meta-ads", label: "Meta Ads" },
  { href: "/shirts", label: "Shirts" },
  { href: "/business-cards", label: "Business Cards" },
  { href: "/review-cards", label: "Review Cards" },
  { href: "/yard-signs", label: "Yard Signs" }
] as const;

export type ServiceKey =
  | "seo-websites"
  | "meta-ads"
  | "shirts"
  | "business-cards"
  | "review-cards"
  | "yard-signs";

export type ServiceOffer = {
  key: ServiceKey;
  name: string;
  navLabel: string;
  eyebrow: string;
  price: string;
  priceValue: number;
  cadence: string;
  summary: string;
  answer: string;
  idealFor: string[];
  includes: string[];
  exclusions: string[];
  process: { title: string; body: string }[];
  faqs: { question: string; answer: string }[];
};

export const SERVICES: Record<ServiceKey, ServiceOffer> = {
  "seo-websites": {
    key: "seo-websites",
    name: "SEO Visibility Website",
    navLabel: "SEO Websites",
    eyebrow: "Search visibility",
    price: "$4,800",
    priceValue: 4800,
    cadence: "one time",
    summary: "A custom-coded business website built to be understood by customers, search engines, and AI-assisted search.",
    answer:
      "CEOTurbo designs and develops a custom Next.js website with up to seven core pages, clear conversion paths, technical SEO, answer-first content, structured data, Google and Bing indexing setup, and client-owned GitHub and Vercel accounts. It is a fixed-scope foundation for visibility, not a promise of a specific ranking.",
    idealFor: [
      "Businesses replacing a slow or generic builder site",
      "Local service companies that need clear service and location signals",
      "Founders who want control of their code, hosting, and domain",
      "Teams that need a trustworthy base for ads, content, and reviews"
    ],
    includes: [
      "Up to seven strategy-led core pages",
      "Custom Next.js design and development",
      "Responsive, accessible component system",
      "Metadata, canonicals, schema, sitemap, and robots rules",
      "Google Search Console and Bing Webmaster submission guidance",
      "Google and Apple Maps assistance for eligible businesses",
      "Client-owned GitHub repository and Vercel deployment setup",
      "Two revision rounds and 30 days of launch support"
    ],
    exclusions: [
      "Domain registration and paid Vercel plan fees",
      "Guaranteed rankings, traffic, citations, leads, or sales",
      "Ecommerce, gated applications, or custom backend systems",
      "Ongoing article publishing or monthly SEO after launch"
    ],
    process: [
      { title: "Map the decision", body: "We identify the offer, buyer questions, proof, service areas, and one primary conversion." },
      { title: "Build the evidence", body: "We design, code, structure, and test the pages around real content and proof." },
      { title: "Hand over control", body: "We connect your domain, indexing tools, GitHub, and Vercel, then deliver access." }
    ],
    faqs: [
      { question: "What is an SEO, AEO, and GEO website?", answer: "It is a crawlable, fast website with clear page structure, direct answers, accurate entity information, useful original content, and structured data that matches what visitors can see. SEO remains the technical and content foundation; AEO and GEO describe making those answers easier for answer and generative systems to understand and support." },
      { question: "Do you guarantee a number-one Google ranking?", answer: "No. No developer or agency controls search rankings or AI citations. CEOTurbo delivers the technical, content, proof, and conversion foundation that improves eligibility and competitiveness, then shows you how to measure the result." },
      { question: "Will I own the website?", answer: "Yes. The agreed project files are delivered to a client-controlled GitHub repository and deployed through a client-controlled Vercel account. Domain and platform charges are billed directly by those providers." },
      { question: "Can you set up Google Maps and Apple Maps?", answer: "Yes, when the business is eligible and the owner can complete required verification. Online-only businesses may not qualify for a Google Business Profile, and CEOTurbo will not create a false address or listing." }
    ]
  },
  "meta-ads": {
    key: "meta-ads",
    name: "Meta Ads Growth",
    navLabel: "Meta Ads",
    eyebrow: "Facebook + Instagram",
    price: "$1,250",
    priceValue: 1250,
    cadence: "per month · 3-month minimum",
    summary: "Campaign strategy, conversion-minded creative, and weekly optimization for Facebook and Instagram.",
    answer:
      "CEOTurbo manages up to two active Meta campaigns and produces six static creative variations each month. The engagement includes a tracking review, weekly optimization, and a monthly performance summary. The management fee is $1,250 per month for at least three months; Meta ad spend is paid separately by the client.",
    idealFor: [
      "Local and service businesses with a clear offer",
      "Companies with real photos, proof, or customer outcomes",
      "Teams ready to respond to leads quickly",
      "Businesses able to fund ad spend separately from management"
    ],
    includes: [
      "Two active campaign structures",
      "Six static creative variations each month",
      "Offer, audience, and landing-path review",
      "Pixel and event-tracking review where supported",
      "Weekly budget and creative optimization",
      "Monthly plain-language performance summary"
    ],
    exclusions: [
      "Meta advertising spend",
      "Guaranteed cost per lead, purchases, or revenue",
      "Daily inbox, sales, or appointment-closing services",
      "Video production, influencer content, or location shoots"
    ],
    process: [
      { title: "Clarify the offer", body: "We define what the campaign asks people to do and how the business will respond." },
      { title: "Build and launch", body: "We create the ad system, campaign structure, tracking path, and initial variations." },
      { title: "Read and refine", body: "We monitor real outcomes, preserve winners, and replace weak creative without hiding spend." }
    ],
    faqs: [
      { question: "Does the $1,250 include ad spend?", answer: "No. The fee covers strategy, creative, management, optimization, and reporting. Your media budget is paid directly to Meta from your ad account." },
      { question: "Why is there a three-month minimum?", answer: "Campaigns need enough time and budget to collect meaningful signals, test creative, and make informed changes. A short burst can launch an offer, but it rarely supports a responsible optimization cycle." },
      { question: "Can you promise the same results shown here?", answer: "No. The screenshots are historical examples from specific campaigns and offers. Performance changes with the market, offer, budget, sales process, timing, creative, and account data." },
      { question: "Who owns the ad account?", answer: "The client should own the Meta Business assets, payment method, pixel, and ad account. CEOTurbo receives the access needed to perform the agreed work." }
    ]
  },
  shirts: {
    key: "shirts",
    name: "Company Shirt Pack",
    navLabel: "Shirts",
    eyebrow: "Wear the brand",
    price: "$649",
    priceValue: 649,
    cadence: "one time",
    summary: "Twelve coordinated company shirts that turn your team into a consistent, recognizable brand presence.",
    answer:
      "The Company Shirt Pack includes 12 premium shirts with one full-color print location, a custom brand-ready design, one digital proof, a mixed run of standard adult sizes, production, and standard shipping within the contiguous United States. Additional print locations, specialty garments, rush orders, and unusual sizes are quoted separately.",
    idealFor: ["Home-service crews", "Event and retail teams", "Founders who meet customers in person", "Businesses preparing for photos or local promotion"],
    includes: ["12 premium shirts", "One full-color print location", "Custom design built around supplied brand assets", "One production proof", "Mixed standard adult sizes", "Contiguous-US standard shipping"],
    exclusions: ["Additional print locations", "Specialty or premium-priced garments", "Rush production", "Applicable sales tax"],
    process: [
      { title: "Send the brand", body: "Provide your logo, colors, preferred garment color, sizes, and where the shirts will be used." },
      { title: "Approve the proof", body: "Review the exact placement, scale, contrast, and spelling before production." },
      { title: "Wear it consistently", body: "Use the shirts during jobs, events, photography, and customer-facing work." }
    ],
    faqs: [
      { question: "Why do company shirts matter?", answer: "Consistent apparel helps customers recognize who belongs to the business, keeps the visual identity consistent in real-world interactions, and makes job-site or team photography more useful across the website and ads." },
      { question: "What shirt sizes are included?", answer: "The base package covers a mixed run of standard adult sizes. Final quantities and sizes are confirmed before the proof is approved. Extended sizes or specialty garments may change the quote." },
      { question: "Can the design include a QR code?", answer: "Yes, when the placement is large, flat, and high-contrast enough to scan reliably. A short URL remains the fallback because fabric folds and movement can reduce scan reliability." }
    ]
  },
  "business-cards": {
    key: "business-cards",
    name: "QR Business Card Pack",
    navLabel: "Business Cards",
    eyebrow: "Make follow-up easy",
    price: "$299",
    priceValue: 299,
    cadence: "one time",
    summary: "Five hundred polished business cards with a direct QR path to your website.",
    answer:
      "The QR Business Card Pack includes 500 double-sided 16pt matte cards, a custom front-and-back design, a tested QR code that opens the approved website destination, one digital proof, printing, and standard contiguous-US shipping. The card keeps the essential contact path available when a prospect is busy or not ready to book on the spot.",
    idealFor: ["Owners who network locally", "Sales and service teams", "Companies attending events", "Businesses that need a professional leave-behind"],
    includes: ["500 double-sided 16pt matte cards", "Custom front-and-back design", "Website QR code and printed short URL", "One digital proof", "Contiguous-US standard shipping"],
    exclusions: ["Premium foil, letterpress, or unusual stocks", "NFC hardware", "Multiple employee versions", "Applicable sales tax or rush shipping"],
    process: [
      { title: "Choose the destination", body: "Send the exact website, booking, or landing-page URL the QR code should open." },
      { title: "Approve the hierarchy", body: "We prioritize the name, role, contact path, and QR instruction without crowding the card." },
      { title: "Scan the proof", body: "The final QR destination and printed fallback URL are checked before production." }
    ],
    faqs: [
      { question: "What should a business-card QR code open?", answer: "Usually the main website, a focused contact page, or a booking page. The best destination depends on the conversation the card is meant to continue." },
      { question: "What happens if my website changes?", answer: "A QR code that points to a stable URL can keep working while the page behind that URL changes. Changing the printed destination itself requires a new card unless a separately managed redirect is used." },
      { question: "Are these NFC business cards?", answer: "No. This fixed package is for traditional printed business cards with a visible QR code and fallback URL. NFC hardware is not included." }
    ]
  },
  "review-cards": {
    key: "review-cards",
    name: "Google Review Pack",
    navLabel: "Review Cards",
    eyebrow: "Make honest feedback easier",
    price: "$349",
    priceValue: 349,
    cadence: "one time",
    summary: "Review leave-behinds and a counter display that shorten the path to an honest Google review.",
    answer:
      "The Google Review Pack includes 100 double-sided leave-behind cards and one 8×10 counter or wall display. Both use a tested QR code that opens the business’s direct Google review link. The design asks every customer for honest feedback and does not offer incentives, gate negative feedback, or request a specific star rating.",
    idealFor: ["Home-service businesses after a completed job", "Retail counters and reception desks", "Restaurants, studios, and appointment businesses", "Teams that need a consistent review request"],
    includes: ["100 double-sided review cards", "One 8×10 counter or wall display", "Direct Google review QR code", "Honest-review call-to-action copy", "One digital proof", "Contiguous-US standard shipping"],
    exclusions: ["Review incentives or gating", "Guaranteed review volume or rating", "Google Business Profile verification", "Applicable sales tax or rush shipping"],
    process: [
      { title: "Confirm the profile", body: "We verify the exact Google review destination supplied by the business owner." },
      { title: "Approve neutral copy", body: "The request welcomes honest feedback from every customer without pressure or incentives." },
      { title: "Place it at the moment", body: "Use the card after service or display the sign where customers naturally complete their visit." }
    ],
    faqs: [
      { question: "Do Google reviews help customers trust a business?", answer: "Reviews appear with Business Profiles in Google Search and Maps and give prospective customers useful information from prior customers. Honest, current feedback can support a customer’s decision, but no card can guarantee a ranking or rating." },
      { question: "Can I offer a discount for a review?", answer: "No. Google prohibits incentives such as free or discounted goods or services in exchange for reviews, changes, or removals. The CEOTurbo design asks for honest feedback without an incentive." },
      { question: "Should I give the card only to happy customers?", answer: "No. Selectively asking only satisfied customers can become review gating. Use the same neutral request for every eligible customer and respond professionally to all feedback." },
      { question: "Will CEOTurbo add star-rating schema to my own business site?", answer: "Not as a shortcut to search stars. Google treats self-serving Organization and LocalBusiness review markup as ineligible for review rich results. Structured data must match supported guidelines and visible content." }
    ]
  },
  "yard-signs": {
    key: "yard-signs",
    name: "QR Yard Sign Pack",
    navLabel: "Yard Signs",
    eyebrow: "Be visible on the street",
    price: "$549",
    priceValue: 549,
    cadence: "one time",
    summary: "Ten double-sided yard signs designed for fast recognition, a clear offer, and an optional QR action.",
    answer:
      "The QR Yard Sign Pack includes ten 18×24-inch double-sided coroplast signs, standard stakes, a custom design, one digital proof, an optional website or review QR code, production, and standard contiguous-US shipping. The primary message remains readable without scanning; the QR code is a secondary action for people close enough to use it safely.",
    idealFor: ["Contractors and home-service companies", "Real estate and event promotion", "Local businesses with permission to place signs", "Teams that want job sites to generate nearby awareness"],
    includes: ["Ten 18×24 double-sided coroplast signs", "Ten standard yard stakes", "Custom high-distance design", "Optional website or review QR code", "One digital proof", "Contiguous-US standard shipping"],
    exclusions: ["Local permits or placement permission", "Installation", "Custom sign structures", "Applicable sales tax or rush shipping"],
    process: [
      { title: "Choose one message", body: "We reduce the sign to the business name, service, action, and readable contact path." },
      { title: "Test from a distance", body: "The hierarchy is reviewed at realistic viewing size before the proof is approved." },
      { title: "Place with permission", body: "Use signs only where local rules and the property owner allow them." }
    ],
    faqs: [
      { question: "Should a yard sign rely on a QR code?", answer: "No. People may see the sign while moving or from too far away to scan. The company name, service, and simple contact path must work first; the QR code is optional for nearby pedestrians or parked visitors." },
      { question: "Can the QR code open a Google review page?", answer: "Yes, but review requests make the most sense at a completed job or customer touchpoint. For general awareness, a focused website or quote page is usually the clearer destination." },
      { question: "Does the package include permits?", answer: "No. Sign rules vary by city, neighborhood, road, and property. The client is responsible for permission, legal placement, and removal." }
    ]
  }
};

export const SERVICE_ORDER: ServiceKey[] = [
  "seo-websites",
  "meta-ads",
  "shirts",
  "business-cards",
  "review-cards",
  "yard-signs"
];
