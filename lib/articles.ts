export type ArticleTable = {
  headers: string[];
  rows: string[][];
};

export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  table?: ArticleTable;
};

export type InsightArticle = {
  slug: string;
  title: string;
  description: string;
  answer: string;
  published: string;
  modified: string;
  readingTime: string;
  sections: ArticleSection[];
  faqs: { question: string; answer: string }[];
  sources: { label: string; url: string }[];
};

export const articles: InsightArticle[] = [
  {
    slug: "seo-aeo-geo-for-business-owners",
    title: "What Do SEO, AEO, and GEO Mean for Business Owners?",
    description: "A plain-language guide to SEO, answer-engine optimization, and generative search visibility without ranking promises or invented shortcuts.",
    answer:
      "SEO helps search engines discover, understand, and rank useful pages. AEO is a practical label for structuring clear answers that search and assistant interfaces can extract. GEO is a label for making accurate, well-supported information easier for generative systems to understand and cite. In practice, businesses need one strong foundation: crawlable pages, helpful original content, clear entities, evidence, and a usable next step.",
    published: "2026-08-15",
    modified: "2026-08-15",
    readingTime: "8 min read",
    sections: [
      {
        heading: "What is the difference between SEO, AEO, and GEO?",
        paragraphs: [
          "The terms describe different views of the same discovery problem. SEO focuses on being eligible and competitive in search results. AEO focuses on whether a page gives a direct, understandable answer. GEO focuses on whether a generative system can find enough accurate context and support to use the page when creating a response.",
          "Google's current guidance is blunt: foundational SEO still applies to generative search. Google describes AEO and GEO as third-party labels and warns businesses to prioritize useful, non-commodity content and sound technical structure over supposed hacks. Bing similarly connects traditional crawlability, indexing accuracy, content clarity, and authority with eligibility for Copilot grounding and citations."
        ],
        table: {
          headers: ["Discipline", "Primary question", "Useful work"],
          rows: [
            ["SEO", "Can search find, index, and rank this page?", "Crawlability, intent, internal links, performance, metadata, useful content"],
            ["AEO", "Can the page answer the question clearly?", "Direct answers, descriptive headings, FAQs, comparisons, definitions"],
            ["GEO", "Can a generative system understand and support the claim?", "Entity clarity, primary sources, evidence, current facts, explicit limitations"]
          ]
        }
      },
      {
        heading: "What technical foundation should every business website have?",
        paragraphs: [
          "A page cannot earn visibility if the crawler cannot access it, the canonical points elsewhere, the content arrives broken, or the main answer exists only after an unreliable interaction. The technical baseline is intentionally unglamorous because it removes avoidable failure points.",
          "Server-rendered or statically generated primary copy is useful for speed, reliability, and accessibility. JavaScript is not automatically bad for SEO, but complex rendering creates more ways to fail. A clean website also needs a sitemap containing only canonical URLs, accurate redirects, responsive layouts, semantic controls, and monitoring in Google Search Console and Bing Webmaster Tools."
        ],
        bullets: [
          "One canonical URL for each useful page",
          "Indexable HTML for the main offer and answer",
          "Accurate title, description, headings, and internal links",
          "Structured data that matches visible content",
          "Fast mobile rendering and stable layouts",
          "A sitemap, robots rules, and webmaster-tool verification"
        ]
      },
      {
        heading: "How should a page be written for customers and answer systems?",
        paragraphs: [
          "Start with the answer a buyer came to find. A service page should quickly state what the service is, who it is for, what it includes, how much it costs, what it does not guarantee, and what happens next. This structure helps people first. It also gives search and assistant systems coherent passages to interpret.",
          "Do not write twenty near-duplicate pages just to repeat a keyword. Google specifically emphasizes unique, expert-led, non-commodity content. A useful page contributes something that could not have come from any anonymous site: real examples, documented process, original visuals, current pricing, tradeoffs, and firsthand limitations."
        ]
      },
      {
        heading: "Does schema markup make a company appear in ChatGPT or Google AI results?",
        paragraphs: [
          "Schema markup describes entities and page content in a machine-readable format. It can clarify that a page represents an organization, service, article, breadcrumb trail, or visible FAQ. It does not force a ranking, rich result, recommendation, or citation.",
          "Use only the most specific schema supported by the visible page. Do not invent an address, rating, review count, availability, award, or price. A small accurate graph is more defensible than a large graph filled with unsupported marketing claims."
        ]
      },
      {
        heading: "What should a business measure after launch?",
        paragraphs: [
          "Measure the full path: indexed pages, impressions, qualified clicks, calls, booked appointments, and completed sales. Search Console and Bing Webmaster Tools show discovery and indexing signals; analytics shows what happens on the site; a CRM or booking system shows whether those visits became real conversations.",
          "No platform guarantees that a compliant page will be crawled, indexed, ranked, or cited. Treat improvement as an operating cycle: publish a clear page, verify access, watch real queries, improve weak answers, add genuine proof, and keep facts current."
        ]
      }
    ],
    faqs: [
      { question: "Is GEO replacing SEO?", answer: "No. Current Google and Bing guidance says core SEO and indexing practices remain foundational to generative search and grounding experiences." },
      { question: "Do I need an llms.txt file?", answer: "Not as a ranking shortcut. Google's current generative-search guidance specifically advises focusing on effective SEO and unique content instead of unnecessary AI text files." },
      { question: "Can CEOTurbo guarantee an AI citation?", answer: "No. CEOTurbo can improve technical access, clarity, evidence, and measurement, but no outside provider controls an AI system's answer or citation selection." }
    ],
    sources: [
      { label: "Google: Optimizing for generative AI features", url: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" },
      { label: "Google: Search Essentials", url: "https://developers.google.com/search/docs/essentials" },
      { label: "Bing Webmaster Guidelines", url: "https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a" },
      { label: "Google: Structured data introduction", url: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data" }
    ]
  },
  {
    slug: "how-google-reviews-help-local-businesses",
    title: "How Do Google Reviews Support Local Visibility and Customer Trust?",
    description: "What Google reviews can and cannot do, how to request honest feedback, and how QR review cards should work.",
    answer:
      "Google reviews give prospective customers visible firsthand information beside a Business Profile in Search and Maps. A steady, honest review process can make the business easier to evaluate and gives owners a public place to respond. Review cards reduce friction by opening the direct review link, but they must not offer incentives, pressure customers for five stars, or selectively ask only satisfied customers.",
    published: "2026-08-15",
    modified: "2026-08-15",
    readingTime: "7 min read",
    sections: [
      {
        heading: "Why do Google reviews matter to a local business?",
        paragraphs: [
          "Reviews appear with eligible Business Profiles in Google Search and Maps. They help a person compare experiences, understand how the company responds, and decide whether the business fits the job. Google itself says reviews can help a business stand out and provide useful information to potential customers.",
          "That does not mean a review card automatically improves a ranking. Local visibility depends on many signals, and Google does not publish a formula that a vendor can guarantee. The defensible benefit is simpler: authentic reviews add current, customer-authored context where people are already evaluating the business."
        ]
      },
      {
        heading: "What is the compliant way to ask for a Google review?",
        paragraphs: [
          "Ask every eligible customer for honest feedback using neutral language. Google explicitly allows businesses to remind customers to leave reviews and to share a review link or QR code. The request should not specify a star rating, hide the review link after negative feedback, or offer anything of value in exchange.",
          "A strong request is brief: “Thank you for choosing us. Scan to share an honest Google review.” It describes the action without scripting what the customer should say."
        ],
        table: {
          headers: ["Use", "Avoid"],
          rows: [
            ["Ask all eligible customers", "Ask only customers who say they are happy"],
            ["Request an honest review", "Request a five-star review"],
            ["Share a direct link or QR code", "Route negative feedback away from Google"],
            ["Reply professionally", "Offer a discount, gift, or contest entry"]
          ]
        }
      },
      {
        heading: "Where should a business place review cards?",
        paragraphs: [
          "Place the request at a natural completion point: with a receipt, after a completed service, at a checkout counter, or in a follow-up message the customer expects. The QR code should be large enough to scan, surrounded by quiet space, and paired with a readable short instruction.",
          "A leave-behind card works when staff can hand it to the customer. A counter or wall display works when customers wait or finish an in-person visit. Neither should interrupt safety-sensitive tasks or pressure the person while a dispute is unresolved."
        ]
      },
      {
        heading: "How should a business respond to reviews?",
        paragraphs: [
          "Google recommends short, relevant, professional responses. Thank the reviewer when appropriate, address useful details, and avoid turning the reply into an advertisement. For negative feedback, protect customer privacy, avoid personal attacks, and move complex resolution details into a private channel.",
          "Responses are part of the visible customer experience. A calm reply can show future readers how the company handles communication even when the original review is critical."
        ]
      },
      {
        heading: "Should review ratings be added to the business website schema?",
        paragraphs: [
          "Do not add self-serving review markup expecting search-result stars for your own Organization or LocalBusiness. Google states that pages controlled by the reviewed entity are ineligible for that review-star feature, including when reviews arrive through an embedded third-party widget.",
          "Testimonials may still be useful visible content when they are real and permissioned. The structured data decision is separate: markup must follow the supported feature rules and cannot turn copied third-party ratings into an eligible rich result."
        ]
      }
    ],
    faqs: [
      { question: "Can I put a Google review link in a QR code?", answer: "Yes. Google explicitly recommends sharing a review link or QR code as one way to remind customers to leave a review." },
      { question: "Can I give customers a discount for reviewing?", answer: "No. Google prohibits incentives such as free or discounted goods or services in exchange for reviews, review changes, or removals." },
      { question: "Should a review card ask for five stars?", answer: "No. Ask for honest feedback without pressuring the customer toward a specific rating." }
    ],
    sources: [
      { label: "Google Business Profile: Tips to get more reviews", url: "https://support.google.com/business/answer/3474122" },
      { label: "Google Maps: Incentivized or biased reviews", url: "https://support.google.com/contributionpolicy/answer/16597558" },
      { label: "Google Maps: Rating manipulation", url: "https://support.google.com/contributionpolicy/answer/16597280" },
      { label: "Google Search: Review snippet guidelines", url: "https://developers.google.com/search/docs/appearance/structured-data/review-snippet" }
    ]
  },
  {
    slug: "custom-coded-websites-vs-builders",
    title: "Should You Choose a Custom-Coded Website or a Website Builder?",
    description: "A practical comparison of custom Next.js sites and website builders for business owners choosing based on ownership, speed, flexibility, and upkeep.",
    answer:
      "A website builder is often the right choice when a small team needs to publish and edit a simple site quickly without developer support. A custom-coded website is usually the better fit when the business needs a distinctive interface, precise performance control, complex integrations, or ownership of a portable codebase. The right decision depends on operating needs, not on claiming that one tool always ranks better.",
    published: "2026-08-15",
    modified: "2026-08-15",
    readingTime: "8 min read",
    sections: [
      {
        heading: "What is the practical difference?",
        paragraphs: [
          "A builder combines hosting, templates, editing, and platform features behind one account. That can reduce setup work and let a nontechnical owner change content. The tradeoff is that design, data, integrations, and migration remain bounded by the platform.",
          "A custom-coded site separates the codebase, hosting provider, domain, and connected services. That creates more responsibility, but it also allows the team to optimize the exact interface, rendering strategy, content model, analytics, and handoff process the business needs."
        ],
        table: {
          headers: ["Decision", "Website builder", "Custom-coded site"],
          rows: [
            ["Fast self-service launch", "Usually stronger", "Requires a defined build process"],
            ["Nontechnical editing", "Usually built in", "Requires an editor, CMS, or developer workflow"],
            ["Design freedom", "Bounded by platform primitives", "Controlled by the project code"],
            ["Portability", "Varies by platform", "Repository can move between compatible hosts"],
            ["Maintenance", "Platform handles much of it", "Owner or developer maintains dependencies and integrations"],
            ["Performance control", "Platform-dependent", "Fine-grained, but only if implemented well"]
          ]
        }
      },
      {
        heading: "Does custom code automatically improve SEO?",
        paragraphs: [
          "No. A custom site can still have slow images, duplicate pages, broken canonicals, vague headings, and weak content. A builder site can still be crawlable, useful, and fast. Search performance comes from the finished experience and ongoing content, not the prestige of the implementation label.",
          "Custom code creates control. CEOTurbo uses that control for server-rendered primary content, deliberate metadata, image sizing, structured data, accessible interactions, and route-level performance. Those choices still have to be tested and maintained."
        ]
      },
      {
        heading: "What does client ownership mean?",
        paragraphs: [
          "For a CEOTurbo website, ownership means the agreed source files live in a client-controlled GitHub repository, deployment runs through a client-controlled Vercel account, and the domain remains in the client’s registrar account. The client receives the access needed to control those systems after handoff.",
          "Ownership does not eliminate third-party costs. Domains, commercial hosting plans, email, analytics, databases, payment providers, and other connected services may charge their own fees. Those accounts should remain visible to the business instead of being hidden inside an agency login."
        ]
      },
      {
        heading: "When is a builder the sensible choice?",
        paragraphs: [
          "Choose a builder when the site is simple, the owner needs frequent direct edits, the budget is limited, and the available template can honestly support the brand. A well-configured builder is better than custom code the business cannot maintain.",
          "Choose custom work when the website is a central sales asset, the brand needs to look distinct, proof requires special presentation, integrations matter, or the business wants a portable repository and deliberate handoff."
        ]
      },
      {
        heading: "What should a business ask before signing?",
        paragraphs: [
          "Ask who owns the domain, source code, deployment account, analytics, form data, and design files. Ask which recurring fees are paid to the agency and which are paid directly to providers. Ask what happens when the relationship ends, how redirects are handled, and how the site is backed up.",
          "The most important question is operational: who can make a safe change six months after launch? The answer should be written into the handoff, not left as an assumption."
        ]
      }
    ],
    faqs: [
      { question: "Is Next.js always faster than Wix or another builder?", answer: "No. Performance depends on the finished implementation, images, scripts, hosting, and ongoing changes. Next.js gives developers strong rendering and optimization tools, but they still must be used correctly." },
      { question: "Will I be locked into Vercel?", answer: "The CEOTurbo project is prepared for Vercel, but the source repository remains portable to other compatible Next.js hosting environments. Migration work may still be required." },
      { question: "Can I edit a custom website myself?", answer: "Yes when the project includes an editing workflow or CMS. The fixed CEOTurbo website package is code-led; content-editing requirements beyond the agreed handoff are scoped separately." }
    ],
    sources: [
      { label: "Next.js documentation", url: "https://nextjs.org/docs" },
      { label: "Google: JavaScript SEO basics", url: "https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics" },
      { label: "web.dev: Core Web Vitals", url: "https://web.dev/articles/vitals" },
      { label: "GitHub: About repositories", url: "https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories" }
    ]
  },
  {
    slug: "qr-codes-business-cards-review-cards-yard-signs",
    title: "How Do QR Codes Connect Print to Real Business Actions?",
    description: "Choose the right QR destination for business cards, Google review cards, and yard signs, then test it before printing.",
    answer:
      "A print QR code should continue the conversation already happening. A business card usually opens the website, contact page, or booking link. A review card opens the direct review form. A yard sign usually opens a short quote or service page. The printed piece still needs a readable brand, message, and fallback URL because not every person can or should scan it.",
    published: "2026-08-15",
    modified: "2026-08-15",
    readingTime: "7 min read",
    sections: [
      {
        heading: "What should each QR code open?",
        paragraphs: [
          "The destination should match the context. Someone holding a business card has already met a person and needs an easy follow-up. Someone receiving a review card has completed a real customer experience. Someone seeing a yard sign may know only the service and location.",
          "Sending every scan to the homepage wastes that context. Use the shortest useful path and keep the page fast, mobile-friendly, and clear about the next action."
        ],
        table: {
          headers: ["Printed item", "Best common destination", "Primary job"],
          rows: [
            ["Business card", "Website, contact page, or booking page", "Continue a conversation"],
            ["Review card", "Direct Google review link", "Reduce steps to honest feedback"],
            ["Yard sign", "Short service or quote page", "Turn nearby awareness into an inquiry"],
            ["Company shirt", "Usually a short URL; QR only when large and flat", "Build recognition first"]
          ]
        }
      },
      {
        heading: "How large and clear should a printed QR code be?",
        paragraphs: [
          "Size depends on scanning distance, print quality, surface, contrast, and the complexity of the encoded destination. Use dark modules on a quiet light background, preserve the clear margin around the code, and avoid placing it across folds, seams, stakes, or highly reflective areas.",
          "The safest workflow is physical testing. Print the proof at final size, scan it with more than one phone, test in realistic lighting, and verify the destination before approving the production run."
        ]
      },
      {
        heading: "Why does the fallback URL still matter?",
        paragraphs: [
          "A camera may fail, the person may prefer typing, or the sign may be too far away to scan safely. A short, readable URL provides another path and helps people understand where the code leads before opening it.",
          "Never use a QR code as the only company identifier or action. The business name, offer, and contact path should remain understandable when the code is ignored."
        ]
      },
      {
        heading: "Should the QR destination be permanent?",
        paragraphs: [
          "Use a domain the business controls whenever possible. A stable URL can redirect to a new approved destination later without changing the printed pattern. That is especially useful for business cards and signs expected to remain in circulation.",
          "Avoid unknown free shorteners for long-lived materials. If that third party changes policy or disappears, the printed product cannot be patched. Document who controls the redirect and where it points at approval time."
        ]
      },
      {
        heading: "How do review-card QR codes stay policy-safe?",
        paragraphs: [
          "Google allows businesses to share a review link or QR code, but the request must reflect a genuine experience and must not be tied to a discount, gift, or other benefit. The printed copy should ask for an honest review rather than a specific rating.",
          "The same link should be available to every eligible customer. Do not show the public review path only after someone selects positive feedback."
        ]
      }
    ],
    faqs: [
      { question: "Can one QR code switch destinations later?", answer: "Yes when it points to a stable URL or redirect controlled by the business. The redirect can be updated while the printed QR pattern stays the same." },
      { question: "Should a yard-sign QR code open Google reviews?", answer: "Usually a service or quote page is clearer for general awareness. A review link is better at a genuine post-service customer touchpoint." },
      { question: "Can a QR code be printed on a shirt?", answer: "It can, but fabric movement and folds reduce reliability. Use a large, high-contrast placement and keep a readable short URL as the main fallback." }
    ],
    sources: [
      { label: "Google Business Profile: Share a review link or QR code", url: "https://support.google.com/business/answer/3474122" },
      { label: "Google Maps user-generated content policy", url: "https://support.google.com/contributionpolicy/answer/7422880" },
      { label: "W3C: Understanding link purpose", url: "https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html" },
      { label: "MDN: Redirections in HTTP", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Redirections" }
    ]
  }
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
