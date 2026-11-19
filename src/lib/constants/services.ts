import { SERVICE_METHODOLOGY } from "./service-methodology";

export const SERVICES_HERO = {
  eyebrow: "Our Capabilities",
  headline: "Modern Digital Solutions Built for Growth",
  subheadline:
    "From high-performance websites and e-commerce stores to data-driven SEO and analytics, PIT helps ambitious businesses connect, convert, and scale.",
} as const;

export interface ServiceItem {
  id: string;
  tag: string;
  icon: string;
  title: string;
  headline: string;
  description: string;
  image: string;
  methodology: readonly { step: string; detail: string }[];
  capabilities: readonly string[];
  techTags?: readonly string[];
  isCore?: boolean;
}

export const SERVICES_LIST: readonly ServiceItem[] = [
  {
    id: "website-development",
    tag: "01",
    icon: "Globe",
    title: "Website Development",
    headline: "Fast, modern, mobile-first websites.",
    description:
      "Modern digital experiences engineered with Next.js, React, and TypeScript. Optimized for maximum speed, mobile responsiveness, and high conversion rates from day one.",
    image: "/services/website_development_2.png",
    methodology: SERVICE_METHODOLOGY["website-development"],
    capabilities: [
      "Next.js & React Applications",
      "Mobile-First Responsive UI",
      "High-Converting Landing Pages",
      "Headless CMS Integration",
      "Core Web Vitals Optimization",
    ],
    techTags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    isCore: true,
  },
  {
    id: "ecommerce-stores",
    tag: "02",
    icon: "ShoppingBag",
    title: "E-commerce Stores",
    headline: "Online stores that are ready to sell.",
    description:
      "Full-stack e-commerce platforms designed to turn visitors into repeat buyers. Fast catalogs, frictionless checkout, payment gateway integration, and automated order workflows.",
    image: "/recent_project/ecom.png",
    methodology: SERVICE_METHODOLOGY["ecommerce-stores"],
    capabilities: [
      "Custom E-Commerce Architecture",
      "Instant Checkout & Cart Flows",
      "Secure Payment Gateways",
      "Automated Order Notifications",
      "Inventory & Order Tracking",
    ],
    techTags: ["Shopify", "WooCommerce", "Next.js E-Commerce", "Stripe"],
    isCore: true,
  },
  {
    id: "seo",
    tag: "03",
    icon: "Search",
    title: "SEO",
    headline: "Get found on Google by the right people.",
    description:
      "Comprehensive search engine optimization that puts your business at the top of organic search results. Technical audits, high-intent keyword strategies, and schema markup.",
    image: "/services/seo_5.png",
    methodology: SERVICE_METHODOLOGY["seo"],
    capabilities: [
      "Technical SEO Audits & Fixes",
      "High-Intent Keyword Research",
      "Structured Data & Schema Markup",
      "Core Web Vitals & Speed Tuning",
      "Local & International SEO",
    ],
    techTags: ["Google Search Console", "Schema.org", "Lighthouse", "Semrush"],
    isCore: true,
  },
  {
    id: "analytics-tracking",
    tag: "04",
    icon: "BarChart3",
    title: "Analytics & Tracking",
    headline: "Measure what matters, grow with data.",
    description:
      "End-to-end analytics and event measurement to understand user behavior, eliminate funnel bottlenecks, and drive continuous growth through actionable insights.",
    image: "/recent_project/data.png",
    methodology: SERVICE_METHODOLOGY["analytics-tracking"],
    capabilities: [
      "Custom Conversion Tracking",
      "Funnel & Cohort Analysis",
      "Server-Side & Client Event Wiring",
      "Automated ROI & Traffic Dashboards",
      "User Journey Heatmaps",
    ],
    techTags: ["Google Analytics", "Search Console", "Tag Manager", "PostHog"],
    isCore: true,
  },
  {
    id: "mobile-app-development",
    tag: "05",
    icon: "Smartphone",
    title: "Mobile App Development",
    headline: "Cross-platform mobile apps built for real users.",
    description:
      "Flutter and React Native applications with native responsiveness, sleek UI/UX, offline functionality, and seamless app store deployments.",
    image: "/services/mobile_app_3.png",
    methodology: SERVICE_METHODOLOGY["mobile-app-development"],
    capabilities: [
      "Flutter & React Native Apps",
      "Cross-Platform iOS & Android",
      "Push Notifications & Offline Support",
      "App Store & Play Store Submissions",
      "Scalable API Connectivity",
    ],
    techTags: ["Flutter", "React Native", "Firebase", "App Store"],
    isCore: false,
  },
  {
    id: "it-consulting",
    tag: "06",
    icon: "Briefcase",
    title: "IT Consulting & Architecture",
    headline: "Clear technical direction for digital success.",
    description:
      "We help businesses evaluate current technologies, choose scalable stacks, architect secure systems, and plan realistic execution roadmaps before writing code.",
    image: "/services/it_consulting_1.png",
    methodology: SERVICE_METHODOLOGY["it-consulting"],
    capabilities: [
      "Technology & Stack Assessment",
      "Scalable Solution Architecture",
      "Cloud Infrastructure Blueprints",
      "Digital Transformation Strategy",
      "Security & Compliance Review",
    ],
    techTags: ["Architecture", "Roadmapping", "Cloud Strategy", "Audits"],
    isCore: false,
  },
  {
    id: "hosting",
    tag: "07",
    icon: "Server",
    title: "Cloud & Hosting",
    headline: "Reliable, high-speed cloud infrastructure.",
    description:
      "Secure hosting, custom domain configuration, SSL certificates, automated backups, and 24/7 uptime monitoring across AWS, Hostinger, and modern edge providers.",
    image: "/services/hosting_4.png",
    methodology: SERVICE_METHODOLOGY["hosting"],
    capabilities: [
      "AWS Cloud Hosting & S3",
      "Hostinger & GoDaddy Setups",
      "SSL, DNS & Edge CDN Caching",
      "Daily Automated Backups",
      "24/7 Server Health Monitoring",
    ],
    techTags: ["AWS", "Hostinger", "GoDaddy", "Cloudflare"],
    isCore: false,
  },
  {
    id: "whatsapp-api",
    tag: "08",
    icon: "MessageCircle",
    title: "WhatsApp & Communication APIs",
    headline: "Automate customer messaging at scale.",
    description:
      "Official WhatsApp Business API integration for order tracking, customer support chats, two-way conversations, and instant automated notifications.",
    image: "/services/whatsapp_7.png",
    methodology: SERVICE_METHODOLOGY["whatsapp-api"],
    capabilities: [
      "Official WhatsApp Business API",
      "Automated Order Notifications",
      "Two-Way Customer Support",
      "Interactive Template Messages",
      "Webhook & CRM Synchronization",
    ],
    techTags: ["Meta Cloud API", "Twilio", "Webhooks", "Node.js"],
    isCore: false,
  },
  {
    id: "devops",
    tag: "09",
    icon: "GitBranch",
    title: "DevOps & Quality Engineering",
    headline: "Automated pipelines and reliable releases.",
    description:
      "Continuous integration, automated testing, SonarQube code quality gates, and staging preview environments so your team deploys with absolute confidence.",
    image: "/services/devops_5.png",
    methodology: SERVICE_METHODOLOGY["devops"],
    capabilities: [
      "GitHub Actions & Jenkins CI/CD",
      "SonarQube Quality Scanning",
      "Automated Staging Environments",
      "Zero-Downtime Deployments",
      "Error Tracking & Observability",
    ],
    techTags: ["GitHub Actions", "Docker", "SonarQube", "PostHog"],
    isCore: false,
  },
] as const;

export const HOME_SERVICES = SERVICES_LIST.map((s) => ({
  id: s.id,
  tag: s.tag,
  icon: s.icon,
  title: s.title,
  headline: s.headline,
  description: s.description,
  image: s.image,
  href: `/services#${s.id}`,
  techTags: s.techTags,
  isCore: s.isCore,
}));
