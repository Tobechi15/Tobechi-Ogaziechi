// Central content store. Update copy, links, and structured content here —
// components read from this file rather than hard-coding text.

export const profile = {
  name: "Tobechi Ogaziechi",
  fullName: "Tobechi A. Ogaziechi",
  role: "Software Engineer & Full-Stack Builder",
  roleShort: "Software Engineer — TypeScript, React, Node.js",
  location: "Nigeria",
  email: "tobechiogaziechi@email.com",
  phone: "+234-802-445-1059",
  github: "https://github.com/Tobechi15",
  githubHandle: "github.com/Tobechi15",
  linkedin: "https://www.linkedin.com/in/tobechi-ogaziechi",
  linkedinHandle: "linkedin.com/in/tobechi-ogaziechi",
  tagline:
    "I design and build scalable software products, from modern web applications and fintech infrastructure to quantitative trading systems.",
  summary:
    "Computer Science graduate and software engineer with hands-on depth in TypeScript across the stack — NestJS and Node.js backends, React/Next.js frontends, and React Native mobile apps. I've shipped fintech backends integrating banking and payment APIs, a blockchain-based escrow system, and production-style architectures using PostgreSQL, TypeORM, Redis, and BullMQ.",
} as const;

export const nav = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;

export const footerLinks = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

export const socials = [
  { label: "GitHub", href: profile.github, handle: profile.githubHandle },
  { label: "LinkedIn", href: profile.linkedin, handle: profile.linkedinHandle },
  { label: "Email", href: `mailto:${profile.email}`, handle: profile.email },
] as const;

export const aboutParagraphs = [
  "I'm a software engineer who enjoys taking an idea apart, understanding the problem underneath it, and building the system that solves it properly. My work spans full-stack web development, backend engineering, and the harder-to-get-right parts of software: fintech infrastructure, trading systems, API integrations, and database architecture.",
  "In practice that means comfortably moving across the full product lifecycle — reading a requirement and turning it into an architecture, building the frontend and backend that implement it, wiring up the APIs and data layer, writing the tests that keep it honest, and shipping and maintaining it once it's live.",
  "Recent work includes fintech backends built on NestJS and PostgreSQL that integrate real banking and payment rails, a hybrid escrow system that settles both fiat and cryptocurrency, and quantitative trading tooling written in Python. I care about clean architecture and code that's still readable six months later, and I'm equally comfortable in a Next.js frontend, a NestJS service layer, or a Python research script.",
] as const;

export const aboutFocusAreas = [
  "Full-stack web development",
  "Backend engineering",
  "Fintech systems",
  "Trading systems",
  "APIs & integrations",
  "Database architecture",
  "Automation",
  "Blockchain / Web3",
  "Quantitative software",
] as const;

export type SkillCategory = {
  title: string;
  note: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    note: "Interfaces & client architecture",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Redux",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    note: "Services & application logic",
    skills: ["Node.js", "Express", "NestJS", "Python", "Java", "REST APIs", "JWT Auth"],
  },
  {
    title: "Databases",
    note: "Persistence & data modeling",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "TypeORM", "Redis"],
  },
  {
    title: "Mobile",
    note: "Cross-platform product delivery",
    skills: ["React Native", "Expo", "Swift (iOS)"],
  },
  {
    title: "Trading / Quant",
    note: "Market systems & research",
    skills: [
      "Python",
      "MQL5",
      "MT5",
      "Market Data APIs",
      "Quantitative Research",
      "Algorithmic Trading",
      "WebSockets",
    ],
  },
  {
    title: "Blockchain",
    note: "Decentralized settlement",
    skills: ["Solidity", "ethers.js", "web3.js", "BSC", "Solana"],
  },
  {
    title: "Infrastructure / Tools",
    note: "Delivery & operations",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Vercel",
      "Render",
      "Linux",
      "AWS",
      "CI/CD",
      "Jest",
    ],
  },
];

export type Project = {
  slug: string;
  name: string;
  period: string;
  summary: string;
  problem: string;
  approach: string;
  stack: string[];
  highlights: string[];
  links: { label: string; href: string | null }[];
  visual: "escrow" | "orb" | "quant" | "fintech" | "webuildidea";
};

export const projects: Project[] = [
  {
    slug: "hybrid-escrow-system",
    name: "Hybrid Escrow System for Freelance Payments",
    period: "2025 — 2026 · Final-year software engineering project",
    summary:
      "An escrow layer built to solve the trust problem in freelance payments — holding and releasing both fiat and cryptocurrency funds against defined conditions, so neither client nor freelancer has to move first.",
    problem:
      "Freelance payments break down on trust: clients don't want to pay before work is delivered, freelancers don't want to deliver before they're paid, and existing fiat and crypto payment rails don't interoperate in a single settlement flow.",
    approach:
      "Designed a client/freelancer/dispute workflow with explicit transaction states — funded, in progress, delivered, released, disputed, refunded — so escrow logic and settlement rails stay decoupled. Fiat and crypto payments interoperate through a shared escrow abstraction, with security considerations (authorization, state validation, and idempotent settlement) treated as first-class parts of the architecture rather than an afterthought.",
    stack: ["Node.js", "PostgreSQL", "Blockchain", "Web3", "Cryptocurrency APIs"],
    highlights: [
      "Escrow architecture with explicit, auditable transaction states",
      "Client / freelancer / dispute-resolution workflow",
      "Dual settlement: fiat rails alongside cryptocurrency payments",
      "Backend built around idempotent, state-driven transaction handling",
      "Security-conscious design: authorization, validation, and safe fund release",
    ],
    links: [
      { label: "GitHub", href: null },
      { label: "Case study", href: null },
    ],
    visual: "escrow",
  },
  {
    slug: "orb-stocks-in-play",
    name: "Stocks-in-Play / ORB Trading Engine",
    period: "2023 — 2024",
    summary:
      "A broker-agnostic quantitative trading engine that scans the market for high-momentum equities and generates Opening Range Breakout (ORB) signals in real time.",
    problem:
      "Manually tracking which stocks are 'in play' on a given day — high relative volume, clean technical structure, a real catalyst — doesn't scale, and most retail tooling is tied to a single broker's data feed.",
    approach:
      "Built a modular Python architecture that ingests live market data, computes Relative Volume (RVOL) and VWAP, and detects Opening Range Breakouts against a configurable set of technical filters. Broker and data-provider integrations (Alpaca, Deriv) sit behind an abstraction layer so the scanning and signal logic stay broker-agnostic, with a research/backtesting path for validating filters before they run live.",
    stack: ["Python", "WebSockets", "REST APIs", "Alpaca", "Deriv"],
    highlights: [
      "Real-time market data ingestion over WebSockets",
      "Relative Volume (RVOL) and VWAP computation",
      "Opening Range Breakout (ORB) signal detection",
      "Configurable technical filters for stock scanning",
      "Broker-agnostic integration layer (Alpaca, Deriv)",
      "Modular architecture with a backtesting/research path",
    ],
    links: [
      { label: "GitHub", href: null },
      { label: "Case study", href: null },
    ],
    visual: "orb",
  },
  {
    slug: "quant-trading-infrastructure",
    name: "Quantitative Trading Engine & Infrastructure",
    period: "2023 — Present",
    summary:
      "A body of work spanning algorithmic strategy development, broker-independent real-time infrastructure, and a machine-learning pipeline for analyzing trade outcomes.",
    problem:
      "Turning a trading idea into something you can actually run — and trust — requires more than a signal: it needs real-time infrastructure that isn't locked to one broker, and a way to know statistically whether the strategy is working.",
    approach:
      "Built WebSocket-based real-time infrastructure and broker abstractions across the Deriv API and cTrader Open API so strategies aren't tied to a single execution venue. Layered a Random Forest / XGBoost pipeline on top of historical trade data to predict trade outcomes, using SHAP for interpretability so the model's reasoning stays inspectable rather than a black box.",
    stack: ["Python", "Deriv API", "cTrader Open API", "MongoDB", "XGBoost", "SHAP"],
    highlights: [
      "Broker-independent execution via WebSocket infrastructure abstractions",
      "Strategy development and signal generation",
      "Random Forest / XGBoost pipeline for trade-outcome prediction",
      "SHAP-based interpretability for model decisions",
      "Statistical, research-driven approach to strategy validation",
    ],
    links: [
      { label: "GitHub", href: null },
      { label: "Case study", href: null },
    ],
    visual: "quant",
  },
  {
    slug: "fintech-payment-backend",
    name: "Fintech Payment & Banking Backend",
    period: "2025 — 2026",
    summary:
      "A production-style fintech backend built on real banking infrastructure — wallets, virtual accounts, KYC, bill payments, and international transfers, running end-to-end on a modular NestJS architecture.",
    problem:
      "Fintech backends have to be correct under load: money can't be lost or double-processed, external bank/payment webhooks arrive asynchronously and out of order, and the system has to stay auditable while it scales past a single team.",
    approach:
      "Delivered the backend on Anchor's banking APIs and Paystack, covering wallets, virtual accounts, KYC, bill payments, and international transfers. Moved transaction processing off synchronous request handling and onto Redis/BullMQ background jobs with webhook-driven event handling, so spikes in load don't block the request path. Secured the platform with JWT-based authentication inside a modular NestJS architecture designed to scale beyond a single team.",
    stack: [
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "TypeORM",
      "Redis",
      "BullMQ",
      "JWT",
      "Anchor API",
      "Paystack",
    ],
    highlights: [
      "Wallets, virtual accounts, and KYC on real banking rails (Anchor)",
      "Bill payments and international transfers",
      "Async transaction processing via Redis/BullMQ background jobs",
      "Webhook-driven event handling instead of blocking synchronous calls",
      "JWT-based auth inside a modular, team-scalable NestJS architecture",
    ],
    links: [
      { label: "GitHub", href: null },
      { label: "Case study", href: null },
    ],
    visual: "fintech",
  },
  {
    slug: "webuildidea",
    name: "WeBuildIdea",
    period: "2026 — Present",
    summary:
      "A software development studio built to take startup and business ideas from concept to production-ready digital product — owning delivery end-to-end across design, frontend, backend, and deployment.",
    problem:
      "Founders and small businesses usually need a technical partner who can own an idea from architecture through to a deployed product, not just a contractor for one layer of the stack.",
    approach:
      "Built as a studio rather than a single project: WeBuildIdea takes clients from an idea through design, frontend, backend, and deployment as one continuous process. Reusable systems and workflows — component libraries, deployment pipelines, backend scaffolding — cut the time it takes to ship a new client website or software product from scratch.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"],
    highlights: [
      "End-to-end delivery: design, frontend, backend, deployment",
      "Reusable systems and workflows across client engagements",
      "Faster time-to-ship for new client products",
      "Studio model for startups and businesses turning ideas into products",
    ],
    links: [{ label: "Website", href: null }],
    visual: "webuildidea",
  },
];

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  location: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Full-Stack Developer & Instructor",
    org: "New Horizons System Solutions",
    period: "Aug 2020 — Dec 2020",
    location: "Port Harcourt, Rivers",
    points: [
      "Brought a cohort of students from no full-stack background to shipping their own frontend and backend projects through direct mentoring.",
    ],
  },
  {
    role: "Software Development Engineering Intern",
    org: "Techpadi Nigeria",
    period: "May 2020 — Aug 2020",
    location: "Abuja",
    points: [
      "Cut manual reporting work by building a Python pipeline that automatically retrieved cross-regional AWS performance data.",
      "Gave the team visibility into real-time metrics by building a QuickSight dashboard on top of Glue, S3, Lambda, and Redshift.",
      "Consolidated data from CloudWatch, a Bindles DataLake, and DynamoDB into unified Node.js data stacks.",
    ],
  },
  {
    role: "Research Assistant",
    org: "New Horizon System Solutions",
    period: "Dec 2019 — May 2020",
    location: "Atlanta, Georgia",
    points: [
      "Improved resource-flow efficiency in a disaster-response simulation by developing optimization algorithms on Python's NetworkX graph library.",
      "Made simulation results interpretable to non-technical stakeholders by building a PyGame visualization interface.",
    ],
  },
];

export const additionalProjects = [
  {
    name: "cTrader / Deriv Trading Infrastructure",
    period: "2023 — Present",
    description:
      "Gave a trading engine broker independence by building WebSocket-based real-time infrastructure and broker abstractions.",
    stack: ["Python", "Deriv API", "cTrader Open API"],
  },
  {
    name: "Machine Learning Trade-Analysis Pipeline",
    period: "2025 — 2026",
    description:
      "Built a Random Forest / XGBoost pipeline predicting trade outcomes, with SHAP for interpretability.",
    stack: ["Python", "MongoDB"],
  },
  {
    name: "Mobile Banking App",
    period: "2025 — 2026",
    description:
      "Shipped a cross-platform mobile banking app letting users manage accounts and move money end-to-end via integrated Anchor and Paystack APIs.",
    stack: ["React Native (Expo)", "TypeScript", "Anchor API", "Paystack"],
  },
  {
    name: "Chime Bot",
    period: "2020",
    description:
      "Improved contact management for Amazon Chime teams with a bot built on AWS Lambda and Amazon Lex.",
    stack: ["AWS Lambda", "Amazon Lex"],
  },
  {
    name: "Stock Predictor",
    period: "2018 — 2019",
    description:
      "Led a team to a 90.07% accuracy stock-trend model using Naive Bayes, Neural Network, and Linear Regression.",
    stack: ["Python", "Naive Bayes", "Neural Networks", "Linear Regression"],
  },
] as const;

export const education = {
  school: "Clifford University",
  location: "Ihie, Abia State, Nigeria",
  degree: "B.S. & M.S. in Computer Science",
  concentration: "Concentration: Intelligence & Modeling/Simulations",
  gpa: "GPA: 4.00 / 5.00 — Dean's List",
  coursework: [
    "Data Structures & Algorithms",
    "Machine Learning",
    "Artificial Intelligence",
    "Object-Oriented Programming",
    "Computer Organization & Programming",
    "Statistics & Applications",
  ],
  note: "Graduation date to be confirmed.",
} as const;

export const leadership = {
  org: "National Association of Computing Students (NACOS)",
  location: "Ihie, Abia",
  period: "Aug 2025",
  description:
    "Led an organization of 100+ members, hosting events and managing a board of executives.",
} as const;

export const certifications = [
  { name: "CompTIA A+ Certification", issuer: "CompTIA", date: "May 2022" },
  { name: "Data Science Certificate", issuer: "DataCamp", date: "May 2022" },
] as const;

export const philosophyPoints = [
  {
    title: "Build with purpose",
    body: "Software should solve a real problem, not simply demonstrate technical ability. Every architectural decision starts from the problem, not the tech stack.",
  },
  {
    title: "Clean, maintainable architecture",
    body: "Code is read far more often than it's written. I optimize for a system someone else — or future me — can understand and extend without archaeology.",
  },
  {
    title: "Security and correctness first",
    body: "Especially in fintech and trading systems, correctness under load and safe handling of money and data aren't optional — they're the baseline.",
  },
  {
    title: "Scalable by design",
    body: "Systems are structured so they can grow past a single team, a single load pattern, or a single integration without a rewrite.",
  },
  {
    title: "Continuous learning",
    body: "The stack changes; the discipline of understanding a problem deeply before writing code doesn't. I stay hands-on with new tools, languages, and research.",
  },
] as const;

export const services = [
  {
    title: "Full-stack web applications",
    description:
      "End-to-end products built on React/Next.js frontends and Node.js/NestJS backends, from architecture through deployment.",
  },
  {
    title: "SaaS platforms & MVPs",
    description:
      "Taking a product idea to a working, production-ready MVP — scoped for what needs to exist first, built to extend afterward.",
  },
  {
    title: "Backend APIs & integrations",
    description:
      "REST APIs, authentication, background job processing, and third-party integrations built on solid database architecture.",
  },
  {
    title: "Fintech applications",
    description:
      "Wallets, virtual accounts, KYC flows, and transaction processing built on real banking and payment infrastructure.",
  },
  {
    title: "Payment integrations",
    description:
      "Integrating banking, payment, and card-processing APIs (Anchor, Paystack, and similar) into reliable transaction flows.",
  },
  {
    title: "Trading & automation systems",
    description:
      "Market data ingestion, signal generation, and broker-agnostic execution infrastructure for algorithmic strategies.",
  },
  {
    title: "Database-driven applications",
    description:
      "Schema design and data architecture across PostgreSQL, MySQL, and MongoDB for applications that need to scale cleanly.",
  },
  {
    title: "Business websites",
    description:
      "Fast, well-structured websites for businesses and founders who need a credible, professional presence online.",
  },
] as const;

export const contact = {
  headline: "Have an idea worth building?",
  supporting: "Let's turn the idea into a reliable, well-engineered product.",
} as const;
