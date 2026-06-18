const audienceContent = {
  recruiter: {
    label: "Recruiter path",
    title: "A senior growth marketer with enterprise, APAC and Japan market depth.",
    body: "Review a compact executive profile, career timeline, core skills and downloadable resumes. The portfolio translates career history into proof of budget ownership, search growth, SEO/SEM execution, analytics and agency leadership.",
    highlights: [
      "18+ years across B2B/B2C marketing, eCommerce, analytics and business development",
      "Japan, APAC and India exposure with multilingual communication",
      "Paid search, SEO, SEM, eCommerce, agency management and cross-functional execution",
      "Experience with Estée Lauder Companies, H&M, Google Play, IBM, Thirdwave, Samsung and POSCO"
    ],
    actions: [
      { text: "Download English Resume", href: "assets/resumes/shashikant-resume-english-detailed.pdf" },
      { text: "View Career Timeline", href: "#resume" }
    ]
  },
  learner: {
    label: "Learner path",
    title: "A framework library for marketers who want practical growth systems.",
    body: "Explore SEO/SEM thinking, affiliate workflows, agency governance models, growth hacking process maps, performance marketing architecture and market research notes. Replace placeholder links with exact LinkedIn posts and PDFs as your library grows.",
    highlights: [
      "Search intent, technical SEO and content optimization frameworks",
      "Affiliate and partner marketing process design",
      "Agency evaluation, measurement and reporting structures",
      "APAC performance marketing and luxury skincare marketplace analysis"
    ],
    actions: [
      { text: "Explore Framework Hub", href: "#frameworks" },
      { text: "Follow on LinkedIn", href: "https://jp.linkedin.com/in/mrkant" }
    ]
  },
  client: {
    label: "Client path",
    title: "A diagnostic-first advisory model for growth, traffic, ROAS and execution problems.",
    body: "For businesses, agencies and online stores, the consulting path focuses on diagnosing where growth is blocked: low traffic, poor ROAS, SEO decline, paid search inefficiency, agency underperformance, eCommerce journey gaps and weak measurement systems.",
    highlights: [
      "SEO audit and search growth roadmap",
      "Paid search and SEM efficiency diagnosis",
      "eCommerce journey, merchandising and landing page review",
      "Agency governance, reporting and optimization process design"
    ],
    actions: [
      { text: "Request Advisory Discussion", href: "#contact" },
      { text: "View Services", href: "#consulting" }
    ]
  }
};

const portfolioItems = [
  {
    id: "beauty-paid-search-efficiency",
    category: "Performance Marketing",
    title: "Beauty Paid Search Efficiency System",
    company: "Estée Lauder Companies",
    summary: "Protected search revenue while improving media efficiency through budget control, agency steering and search program optimization.",
    problem: "Paid search needed to continue supporting revenue while budgets were reduced and media efficiency became a priority.",
    action: "Managed paid search across Google, Yahoo! Japan and Bing, improved keyword and budget controls, collaborated with agencies and aligned paid search execution with brand and eCommerce objectives.",
    tools: "Google Ads, Yahoo! Japan Ads, Bing, Google Analytics/GA4, reporting dashboards, agency reporting",
    impact: "Resume materials reference 40-50% spend reduction while maintaining revenue, annual paid search investment of about ¥40-50M and search revenue contribution above ¥250M. Verify latest numbers before public publishing.",
    tags: ["Paid Search", "SEM", "Budget Control", "Beauty eCommerce"]
  },
  {
    id: "pmax-nonbrand-incrementality",
    category: "Performance Marketing",
    title: "Non-Branded Search and PMax Incrementality",
    company: "Estée Lauder Companies",
    summary: "Built a non-brand approach using PMax and keyword restructuring to reduce cannibalization and support incremental sessions and revenue.",
    problem: "Non-branded media needed clearer separation from brand demand and stronger evidence of incrementality.",
    action: "Implemented and optimized Performance Max for non-branded terms, reviewed keyword structure, monitored cannibalization signals and coordinated recommendations for budget allocation.",
    tools: "Google Ads, PMax, keyword research, search query analysis, GA4/Google Analytics",
    impact: "Resume materials mention 0.5 ROAS for non-branded PMax and non-brand budget expansion contributing to incremental sessions and revenue. Validate before external publication.",
    tags: ["PMax", "Non-Branded Search", "Incrementality", "Google Ads"]
  },
  {
    id: "seo-organic-recovery-beauty",
    category: "Search and SEO Strategy",
    title: "Organic Traffic and Brand Presence Recovery",
    company: "Estée Lauder Companies",
    summary: "Recovered organic traffic and revenue trend through on-page optimization, branded keyword focus and skincare search trend research.",
    problem: "Brand presence and organic traffic needed recovery in a competitive beauty search environment.",
    action: "Researched skincare trends and popular keywords, optimized page copy and metadata, aligned SEO actions with content and product teams, and supported a combined paid and organic search approach.",
    tools: "SEO keyword research, Search Console/Webmaster tools, Google Analytics, content optimization, on-page SEO",
    impact: "Resume materials reference a 5% increase in organic traffic and revenue after joining. Verify current numbers before publication.",
    tags: ["SEO", "Organic Growth", "Content Optimization", "Search Trends"]
  },
  {
    id: "hm-regional-performance-media",
    category: "Performance Marketing",
    title: "Regional Performance Media Steering",
    company: "H&M Japan and Korea",
    summary: "Managed SEM, SEO, paid social, affiliate and display activities across Japan and Korea with regional agency coordination.",
    problem: "Regional media investments needed alignment with global strategy, profitable sales, customer acquisition and local market execution.",
    action: "Coordinated agency teams, conducted quality controls, supported SEO actions with site/PR/content teams and connected performance investments to customer growth opportunities.",
    tools: "SEM, SEO, paid social, affiliate, display, agency audits, performance reviews",
    impact: "Resume materials mention identifying more than 50 technical issues in website/app environments and guiding agencies toward customer creation and brand development.",
    tags: ["Regional Media", "SEM", "Affiliate", "Agency Management"]
  },
  {
    id: "thirdwave-seo-ranking",
    category: "Search and SEO Strategy",
    title: "PC and eSports SEO Ranking Growth",
    company: "Thirdwave Corporation / Dospara",
    summary: "Improved search visibility for major eCommerce webpages and guided content, UX and developer workflows around search intent.",
    problem: "Key commercial pages needed higher Google rankings and better alignment with customer search intent.",
    action: "Guided developer teams on search-intent pages, improved Japanese content quality, created wireframes, product backlogs and user stories, and supported UX/UI decisions with data and A/B testing.",
    tools: "Technical SEO, content SEO, wireframes, user stories, A/B testing, Google search analysis",
    impact: "Resume materials reference first-page/top-five ranking for major keywords, 20% CTR improvement and 20% sales target improvement/exceeding goal.",
    tags: ["Technical SEO", "UX", "eCommerce", "A/B Testing"]
  },
  {
    id: "google-play-merchandising-apac",
    category: "eCommerce and Online Stores",
    title: "Google Play APAC Merchandising Growth",
    company: "Google Play via Hays",
    summary: "Planned and optimized store content, campaign calendars, catalog hygiene and APAC merchandising for movies and books.",
    problem: "Digital store content needed stronger merchandising, campaign planning and country-level insight to grow engagement and sales.",
    action: "Planned annual merchandising calendars, coordinated partner content and promotions, conducted A/B testing, maintained metadata hygiene and supported APAC market development.",
    tools: "Store merchandising, A/B testing, catalog management, APAC market research, campaign analysis",
    impact: "Resume materials reference 80% YoY growth and support for 12 APAC countries across movies and books. Validate exact scope before public publication.",
    tags: ["Merchandising", "Google Play", "APAC", "A/B Testing"]
  },
  {
    id: "ibm-demand-generation-seo",
    category: "Analytics and Marketing Intelligence",
    title: "IBM B2B Demand Generation and Search Optimization",
    company: "IBM",
    summary: "Executed search/web optimization and demand program campaigns for B2B markets, including web forms, content, offer management and campaign assets.",
    problem: "B2B demand generation required localized campaign assets, search visibility and structured execution across multiple tactics.",
    action: "Tracked and analyzed website and PPC campaigns, managed content updates, performed SEO recommendations, created campaign elements and executed tactics in Unica Campaign/Collaborate.",
    tools: "SEO, PPC analysis, Unica Campaign, landing pages, web forms, content management, reporting",
    impact: "Resume materials reference 100% campaign execution within time frame and improved country-level organic digital strategy guidance.",
    tags: ["B2B Demand Gen", "SEO", "Campaign Execution", "Analytics"]
  },
  {
    id: "agency-governance-framework",
    category: "Agency and Governance",
    title: "Agency Governance and Performance Review Framework",
    company: "Cross-role framework",
    summary: "A repeatable model for aligning agencies, local teams and regional leadership around budget, measurement, reporting and optimization.",
    problem: "Agencies can over-focus on execution while strategic control, measurement clarity and local/regional accountability become fragmented.",
    action: "Designed operating principles for agency evaluation, roles, reporting cadence, decision rights, performance reviews and optimization checkpoints.",
    tools: "SOPs, workflow maps, KPI/KSF/KGI structure, reporting templates, stakeholder governance",
    impact: "Framework asset. Add proof points from internal or published LinkedIn materials before positioning as a public case study.",
    tags: ["Agency Management", "Governance", "SOP", "Reporting"]
  },
  {
    id: "affiliate-process-design",
    category: "Agency and Governance",
    title: "Affiliate and Partner Marketing Process Design",
    company: "Framework and advisory asset",
    summary: "Structured affiliate lifecycle thinking from agency qualification to publisher engagement, commercial terms, execution and optimization.",
    problem: "Affiliate programs often lack clear partner evaluation, seasonal timing, content sharing, cost negotiation and performance review governance.",
    action: "Mapped phases, decision points, stakeholder roles and performance criteria for affiliate program management across APAC-style market environments.",
    tools: "Affiliate workflow, partner evaluation, publisher communication, negotiation, campaign calendar, reporting framework",
    impact: "Thought-leadership/framework asset. Add published LinkedIn or PDF link to support public proof.",
    tags: ["Affiliate", "Partner Marketing", "Workflow", "APAC"]
  },
  {
    id: "ecommerce-search-merchandising",
    category: "eCommerce and Online Stores",
    title: "eCommerce Search, Merchandising and Landing Page Architecture",
    company: "Cross-role capability",
    summary: "Combines search intent, keyword demand, page structure, product taxonomy and merchandising logic to improve customer journeys.",
    problem: "Online stores lose demand when campaign copy, landing pages, product categories and customer search behavior are not aligned.",
    action: "Mapped search intent to landing pages, improved product/category content, reviewed merchandising flows, and aligned promotional messaging with user demand patterns.",
    tools: "Keyword Planner, Google Analytics, Search Console, CMS, Drupal, product pages, landing page copy, taxonomy",
    impact: "Capability summary based on multiple roles. Add exact project metrics where available.",
    tags: ["eCommerce", "Merchandising", "Landing Pages", "Search Intent"]
  },
  {
    id: "analytics-measurement-system",
    category: "Analytics and Marketing Intelligence",
    title: "Marketing Analytics and Measurement System",
    company: "Cross-role capability",
    summary: "Uses analytics, BI tools and structured reporting to turn campaign activity into decisions for budget, content and channel optimization.",
    problem: "Marketing teams need evidence-based decisions across paid media, SEO, content and eCommerce but often work from fragmented reports.",
    action: "Built and reviewed reporting views, analyzed web/campaign performance, connected metrics to business objectives and translated findings into stakeholder recommendations.",
    tools: "GA4, Google Analytics, Tableau, Salesforce, SPSS, Excel, Search Console, dashboard tools",
    impact: "Capability summary. Use specific dashboard examples or screenshots only when cleared for public use.",
    tags: ["GA4", "Analytics", "Dashboard", "Reporting"]
  },
  {
    id: "pr-360-traditional-marketing",
    category: "Traditional Marketing and 360 Advertising",
    title: "PR, 360 Marketing and Cross-Channel Brand Presence",
    company: "Public Relation Tank, OX, Made in Japan Project and earlier roles",
    summary: "Expanded marketing beyond search into PR, web, social, offline collaboration and business development contexts.",
    problem: "Brands and projects needed visibility across web, social, media relations and offline/online activation rather than isolated channel execution.",
    action: "Supported PR story pitching, media kit preparation, event coordination, web development, social media setup, ads and CRM-related execution.",
    tools: "PR, web content, social media, Google Analytics, PPC, CRM, PHP/CSS/HTML, Photoshop, offline collaboration",
    impact: "Resume-supported experience. Add project-specific outcomes where external publication is appropriate.",
    tags: ["PR", "360 Marketing", "Traditional", "Social"]
  },
  {
    id: "ott-product-market-entry",
    category: "eCommerce and Online Stores",
    title: "OTT Product and New Market Research",
    company: "Perform Group / DAZN",
    summary: "Supported live sports streaming product research, market analysis and store launch coordination.",
    problem: "New market launches required research, scope planning, feature prioritization and coordination with internal and external partners.",
    action: "Analyzed new markets, researched business expansion opportunities, scoped product features and coordinated with partnership teams for effective store launch support.",
    tools: "Product management, market research, scoping, launch coordination, partner collaboration",
    impact: "Resume-supported role summary. Add launch-specific metrics if available.",
    tags: ["Product", "OTT", "Market Research", "Launch"]
  },
  {
    id: "cross-cultural-project-management",
    category: "Agency and Governance",
    title: "Cross-Cultural Project Coordination and Communication",
    company: "Samsung Electronics and POSCO Steel",
    summary: "Used multilingual and cross-cultural communication to coordinate technical, business and construction/project environments.",
    problem: "Korean, Indian and regional teams needed clear communication across high-context and low-context working styles.",
    action: "Coordinated engineers and business teams, translated documents, managed daily reporting, supported project delivery and maintained trust between stakeholders.",
    tools: "Korean language, translation, project coordination, stakeholder management, daily reporting, ERP/business documentation",
    impact: "Resume materials reference 100% document translation execution at Samsung and a POSCO project completed within a 5-month period.",
    tags: ["Communication", "Project Management", "Korean", "Stakeholders"]
  }
];

const caseStudies = [
  {
    title: "Paid Search Efficiency Improvement in Beauty eCommerce",
    company: "Estée Lauder Companies",
    situation: "A beauty eCommerce search program needed to protect revenue while improving spend efficiency.",
    challenge: "Budget pressure required the program to maintain business contribution with less paid media investment.",
    strategy: "Treat paid search as a managed portfolio: separate brand and non-brand intent, inspect inefficiencies, monitor ROAS and revenue signals, and use agency execution with stronger governance.",
    execution: "Managed Google, Yahoo! Japan and Bing campaigns, optimized keyword/budget allocation, reviewed performance reporting and coordinated with brand, content, creative, product and agency teams.",
    result: "Resume materials reference 40-50% spend reduction while maintaining revenue, plus annual paid search ownership of about ¥40-50M and search revenue contribution above ¥250M. Verify current figures before publishing externally.",
    tools: "Google Ads, Yahoo! Japan Ads, Bing, GA4/Google Analytics, agency reports",
    lesson: "Efficiency improves when paid search is governed as a demand system, not only as a bidding activity."
  },
  {
    title: "SEO and Organic Traffic Recovery",
    company: "Estée Lauder Companies",
    situation: "Organic visibility and brand presence needed stronger recovery in a competitive skincare search environment.",
    challenge: "Search behavior, page content and brand/category intent needed better alignment.",
    strategy: "Use a combined SEO and paid search view to understand where brand presence, content and customer intent were not fully connected.",
    execution: "Researched skincare keywords, improved page copy and on-page optimization, aligned SEO recommendations with content/product teams and reviewed organic performance signals.",
    result: "Resume materials reference a 5% increase in organic traffic and revenue after joining. Use verified dashboard figures before external publication.",
    tools: "Search Console/Webmaster tools, Google Analytics, keyword research, on-page SEO, content optimization",
    lesson: "SEO recovery is strongest when technical fixes, content intent and commercial priorities are connected."
  },
  {
    title: "H&M Regional Performance Media and Technical Issue Discovery",
    company: "H&M Japan and Korea",
    situation: "Regional performance media needed to align global strategy with local execution across Japan and Korea.",
    challenge: "SEM, SEO, paid social, affiliate and display channels required agency steering, quality controls and customer-growth alignment.",
    strategy: "Create a regional control layer that reviews agency execution, identifies technical blockers and connects channel investments to acquisition and retention goals.",
    execution: "Coordinated agency teams, reviewed channel optimization, collaborated with site, PR and content teams and surfaced technical website/app issues affecting performance.",
    result: "Resume materials mention identifying more than 50 technical website/app issues and guiding agencies toward customer creation and brand development.",
    tools: "SEM, SEO, paid social, affiliate, display, agency QA, technical review",
    lesson: "Performance media cannot be optimized only inside ad platforms; site and app issues can become hidden growth blockers."
  },
  {
    title: "Thirdwave SEO Ranking and CTR Growth",
    company: "Thirdwave Corporation / Dospara",
    situation: "A PC/eSports eCommerce business needed major commercial pages to rank higher and perform better in search.",
    challenge: "Pages had to satisfy search intent, Japanese content quality, UX and technical SEO requirements.",
    strategy: "Treat SEO as a product workflow: research search intent, guide development, improve content, shape UX and convert insights into backlog/user stories.",
    execution: "Guided developer and design teams, created wireframes and product backlogs, wrote user stories, improved page quality and supported A/B testing decisions.",
    result: "Resume materials reference first-page/top-five ranking for major keywords, 20% CTR improvement and 20% sales improvement/exceeding goal.",
    tools: "SEO, UX/UI, wireframes, user stories, A/B testing, Google search analysis",
    lesson: "Search performance improves faster when SEO becomes part of product and development workflow."
  },
  {
    title: "Google Play Merchandising and APAC Growth",
    company: "Google Play via Hays",
    situation: "Movies and books merchandising required campaign planning, partner coordination and local market insight across APAC markets.",
    challenge: "Digital store performance depended on catalog quality, campaign calendars, content promotions, A/B testing and market-specific insight.",
    strategy: "Operate merchandising as a repeatable growth system with calendar planning, catalog hygiene, cross-functional execution and data analysis.",
    execution: "Planned merchandising calendars, coordinated internal/external partners, maintained metadata quality, supported market research and contributed to global merchandising efforts.",
    result: "Resume materials reference 80% YoY growth and support for 12 APAC countries. Validate exact definition of growth before publication.",
    tools: "Store merchandising, A/B testing, campaign analysis, catalog management, APAC market research",
    lesson: "Digital merchandising becomes a growth lever when content, catalog, timing and market insight move together."
  },
  {
    title: "IBM B2B Demand Generation and Campaign Execution",
    company: "IBM",
    situation: "IBM demand programs required search/web optimization, campaign execution and localized B2B campaign assets.",
    challenge: "Campaign elements needed to be executed within deadlines while supporting local market strategy and web performance.",
    strategy: "Build a structured campaign execution system connecting SEO, offers, landing pages, emails, web forms, assets and analysis.",
    execution: "Tracked and analyzed web/PPC campaigns, managed content and SEO recommendations, created campaign assets and executed tactics using Unica Campaign and Unica Collaborate.",
    result: "Resume materials reference 100% campaign execution within the required time frame and country-level digital strategy guidance.",
    tools: "SEO, PPC analysis, Unica Campaign, web forms, landing pages, content management, reporting",
    lesson: "B2B demand generation needs operational discipline as much as creative campaign thinking."
  }
];

const frameworks = [
  {
    title: "Performance Marketing Architecture: PMA / RGA Operating Model",
    summary: "A role-specific governance model for agencies, local teams and consulting partners, clarifying strategic control, operational support and optimization cadence.",
    topic: "Agency Governance",
    audience: "Recruiter / Client",
    linkedin: "https://jp.linkedin.com/in/mrkant",
    pdf: "assets/research/[add-performance-marketing-architecture.pdf]"
  },
  {
    title: "Affiliate Agency Evaluation Framework",
    summary: "A structured process for agency qualification, pricing, turnaround time, measurement, reporting, media efficiency and capability assessment.",
    topic: "Affiliate Marketing",
    audience: "Learner / Client",
    linkedin: "https://jp.linkedin.com/in/mrkant",
    pdf: "assets/research/[add-affiliate-agency-framework.pdf]"
  },
  {
    title: "Growth Hacking 360 Process Map",
    summary: "A process map connecting strategic planning, campaign design, execution, optimization, conflict resolution and innovation across teams.",
    topic: "Growth Hacking",
    audience: "Learner / Recruiter",
    linkedin: "https://jp.linkedin.com/in/mrkant",
    pdf: "assets/research/[add-growth-hacking-process-map.pdf]"
  },
  {
    title: "SEO / SEM Search Growth Framework",
    summary: "A practical model for connecting keyword research, search intent, technical SEO, paid search structure, landing pages and reporting.",
    topic: "SEO / SEM",
    audience: "Learner / Client",
    linkedin: "https://jp.linkedin.com/in/mrkant",
    pdf: "assets/research/[add-seo-sem-framework.pdf]"
  },
  {
    title: "Rakuten Affiliate Program Workflow",
    summary: "A seasonal affiliate workflow covering publisher interaction, notifications, content sharing, cost negotiation and stakeholder coordination.",
    topic: "Affiliate Workflow",
    audience: "Learner / Client",
    linkedin: "https://jp.linkedin.com/in/mrkant",
    pdf: "assets/research/[add-rakuten-affiliate-workflow.pdf]"
  },
  {
    title: "Marketing Tool Access and Prioritization Matrix",
    summary: "A tiered matrix for evaluating platform access by business value, operational necessity, targeting, efficiency and cannibalization prevention.",
    topic: "Marketing Operations",
    audience: "Recruiter / Client",
    linkedin: "https://jp.linkedin.com/in/mrkant",
    pdf: "assets/research/[add-tool-access-matrix.pdf]"
  },
  {
    title: "Luxury Skincare Marketplace and Paid Ads Strategy Notes",
    summary: "Research notes for South Korea, Thailand, Taiwan and Hong Kong, focused on luxury skincare growth and marketplace advertising strategy.",
    topic: "APAC Market Strategy",
    audience: "Recruiter / Client",
    linkedin: "https://jp.linkedin.com/in/mrkant",
    pdf: "assets/research/[add-luxury-skincare-marketplace-research.pdf]"
  },
  {
    title: "Holiday / Gifting Search and Merchandising Playbook",
    summary: "A search and merchandising playbook for seasonal demand, gift occasions, keyword trends, copy consistency and category navigation.",
    topic: "eCommerce Merchandising",
    audience: "Learner / Client",
    linkedin: "https://jp.linkedin.com/in/mrkant",
    pdf: "assets/research/[add-gifting-search-playbook.pdf]"
  }
];

const services = [
  {
    title: "SEO Audit and Growth Roadmap",
    forWhom: "eCommerce brands, agencies and content-heavy sites",
    problem: "Organic traffic decline, weak rankings, poor page intent, technical SEO issues",
    deliverable: "SEO audit, priority matrix, keyword map, content/page recommendations and 30/60/90-day roadmap",
    engagement: "2-4 week diagnostic sprint"
  },
  {
    title: "Paid Search / SEM Performance Diagnosis",
    forWhom: "Brands running Google, Yahoo! Japan, Bing or PMax campaigns",
    problem: "Poor ROAS, budget waste, brand/non-brand cannibalization, unclear incrementality",
    deliverable: "Account structure review, keyword/control recommendations, budget logic and performance opportunity map",
    engagement: "1-3 week account review"
  },
  {
    title: "eCommerce Growth Strategy",
    forWhom: "Online stores, D2C brands and marketplace teams",
    problem: "Traffic exists but conversion, merchandising, page intent or navigation is weak",
    deliverable: "Customer journey diagnosis, landing page review, merchandising map and growth backlog",
    engagement: "Strategy workshop plus roadmap"
  },
  {
    title: "Agency Performance Review",
    forWhom: "Marketing leaders working with agencies or vendors",
    problem: "Agency output is active but business value, reporting and accountability are unclear",
    deliverable: "Agency scorecard, KPI/KSF/KGI map, meeting cadence, optimization process and decision-rights model",
    engagement: "Governance design sprint"
  },
  {
    title: "APAC Market Search Strategy",
    forWhom: "Regional teams managing multiple Asian markets",
    problem: "Search strategy is copied across countries without local nuance or demand patterns",
    deliverable: "Market keyword landscape, localization notes, channel priorities and local/regional coordination model",
    engagement: "Market research and strategy package"
  },
  {
    title: "Content and Search Intent Mapping",
    forWhom: "SEO, content, product and merchandising teams",
    problem: "Pages do not match user intent or campaign promises",
    deliverable: "Intent map, page-template recommendations, content brief structure and internal-linking opportunities",
    engagement: "Workshop and implementation backlog"
  },
  {
    title: "Marketing Measurement and Reporting Framework",
    forWhom: "Teams with fragmented dashboards and unclear decision logic",
    problem: "Reports exist but do not guide budget, creative, SEO or eCommerce decisions",
    deliverable: "Measurement architecture, dashboard wireframe, reporting cadence and action triggers",
    engagement: "Analytics operating model sprint"
  },
  {
    title: "Affiliate / Partner Marketing Process Design",
    forWhom: "Brands launching or improving affiliate programs",
    problem: "Weak partner selection, unclear commercial terms, poor publisher communication or limited optimization",
    deliverable: "Affiliate lifecycle map, publisher workflow, negotiation checklist and performance review template",
    engagement: "Program design and launch support"
  }
];
