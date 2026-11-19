type MethodStep = { step: string; detail: string };

export const SERVICE_METHODOLOGY: Record<string, readonly MethodStep[]> = {
  "website-development": [
    { step: "Discovery & UX", detail: "Analyze audience, brand requirements, and structure mobile-first wireframes." },
    { step: "Design & System", detail: "Apply the PIT design system with responsive layouts and modern components." },
    { step: "Engineering", detail: "Build lightning-fast React/Next.js pages optimized for Core Web Vitals." },
    { step: "Launch & SEO", detail: "Deploy with SSL, meta tagging, sitemaps, and automated performance checks." },
  ],
  "ecommerce-stores": [
    { step: "Store Architecture", detail: "Structure catalogs, product variants, cart flows, and payment options." },
    { step: "High-Converting UI", detail: "Craft engaging product pages, fast search filters, and 1-click checkouts." },
    { step: "Payments & Logistics", detail: "Integrate trusted payment gateways, shipping calculators, and notifications." },
    { step: "Launch & Analytics", detail: "End-to-end testing, revenue tracking, and automated order fulfillment." },
  ],
  seo: [
    { step: "Technical Audit", detail: "Deep crawl of site architecture, indexation, status codes, and speed bottlenecks." },
    { step: "On-Page Strategy", detail: "Optimize heading tags, meta data, content relevance, and schema markup." },
    { step: "Core Web Vitals", detail: "Optimize image delivery, caching, and layout shifts for top Google rankings." },
    { step: "Keyword Tracking", detail: "Monitor impressions, organic clicks, and high-intent buyer rankings." },
  ],
  "analytics-tracking": [
    { step: "Audit & Planning", detail: "Map key conversion events, funnel drop-offs, and measurement milestones." },
    { step: "Tag Manager Setup", detail: "Deploy Google Tag Manager container with clean trigger schemas." },
    { step: "GA4 & PostHog", detail: "Configure custom event models, user properties, and behavioral funnels." },
    { step: "Dashboard Reporting", detail: "Create actionable dashboards connecting clicks to real revenue results." },
  ],
  "mobile-app-development": [
    { step: "Scope & Prototype", detail: "Define user journeys, wireframes, and backend contracts for iOS & Android." },
    { step: "Cross-Platform Build", detail: "Engineer Flutter or React Native apps with native performance and polish." },
    { step: "Device QA", detail: "Test offline states, permissions, push alerts, and varied screen sizes." },
    { step: "Store Publishing", detail: "Complete App Store & Google Play submission, guidelines, and compliance." },
  ],
  "it-consulting": [
    { step: "Tech Assessment", detail: "Evaluate existing stacks, bottlenecks, vendor contracts, and security." },
    { step: "Architecture Plan", detail: "Design scalable cloud architectures and modern component hierarchies." },
    { step: "Roadmap & Budget", detail: "Formulate clear implementation milestones with realistic timelines." },
    { step: "Team Enablement", detail: "Handoff blueprints and standard operating procedures to development teams." },
  ],
  hosting: [
    { step: "Server Setup", detail: "Configure reliable cloud hosting on AWS, Hostinger, or GoDaddy." },
    { step: "SSL & Domains", detail: "Configure secure DNS records, SSL certificates, and fast CDN edge caching." },
    { step: "Deployment CI", detail: "Automated zero-downtime deployment pipelines with rollback safety." },
    { step: "Monitoring", detail: "24/7 uptime monitoring, server health checks, and scheduled backups." },
  ],
  devops: [
    { step: "Pipeline Setup", detail: "Automate build, test, and release flows using GitHub Actions and Jenkins." },
    { step: "Code Quality", detail: "Integrate SonarQube quality gates and automated security scanning." },
    { step: "Staging Preview", detail: "Deploy branch preview environments for testing before production push." },
    { step: "Observability", detail: "Centralized logging, error monitoring, and performance alerts." },
  ],
  "whatsapp-api": [
    { step: "API Verification", detail: "Setup official WhatsApp Business API credentials with Meta." },
    { step: "Templates", detail: "Draft and submit high-engagement transactional message templates." },
    { step: "Webhook Wiring", detail: "Connect order events, customer inquiries, and two-way notifications." },
    { step: "Automation", detail: "Automate order tracking, OTPs, and customer support conversations." },
  ],
  "email-notification": [
    { step: "SMTP & Domain", detail: "Configure DKIM, SPF, and DMARC for near-100% inbox delivery." },
    { step: "Branded Templates", detail: "Design responsive, high-converting HTML email layouts." },
    { step: "Event Triggers", detail: "Wire sign-up, order, password reset, and newsletter triggers." },
    { step: "Tracking", detail: "Track open rates, click-throughs, and bounce diagnostics." },
  ],
  "mobile-otp": [
    { step: "Gateway Config", detail: "Connect premium SMS gateways with secure API keys." },
    { step: "Verification Flow", detail: "Build friction-free 4/6-digit verification with auto-fill." },
    { step: "Fraud Prevention", detail: "Implement strict rate-limiting, cooldowns, and spam blocks." },
    { step: "Data Privacy", detail: "Secure server-side token hashing adhering to data safety norms." },
  ],
};
