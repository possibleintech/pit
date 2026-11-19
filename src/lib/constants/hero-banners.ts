export const HERO_CAROUSEL = {
  intervalMs: 4500,
  label: "PIT Featured Highlights",
  previousLabel: "Previous highlight",
  nextLabel: "Next highlight",
  slideLabel: "Show slide",
} as const;

export interface HeroBannerItem {
  id: "agency-character" | "ecommerce" | "seo-analytics" | "mobile-whatsapp";
  tag: string;
  badge: string;
  title: string;
  caption: string;
  themeColor: string;
}

export const HERO_BANNERS = [
  {
    id: "agency-character",
    tag: "01 / DIGITAL AGENCY",
    badge: "Official Agency Platform",
    title: "Your business, possible online.",
    caption: "Engineered with modern Next.js, mobile-first design, and lightning-fast speed standards.",
    themeColor: "#E20A96",
  },
  {
    id: "ecommerce",
    tag: "02 / E-COMMERCE",
    badge: "Stores Ready to Sell",
    title: "High-converting online stores.",
    caption: "Frictionless checkout, automated payments, inventory sync, and instant customer notifications.",
    themeColor: "#E20A96",
  },
  {
    id: "seo-analytics",
    tag: "03 / SEO & GROWTH",
    badge: "Data-Driven Visibility",
    title: "Get found on Google, grow with data.",
    caption: "Top-ranking technical SEO, Google Analytics 4, Tag Manager, and PostHog conversion funnels.",
    themeColor: "#38BDF8",
  },
  {
    id: "mobile-whatsapp",
    tag: "04 / APPS & AUTOMATION",
    badge: "Customer Engagement",
    title: "Mobile apps & WhatsApp automations.",
    caption: "Official WhatsApp Business API messaging, cross-platform Flutter/React Native mobile apps.",
    themeColor: "#25D366",
  },
] as const;
