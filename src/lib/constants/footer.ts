import { ROUTES } from "./routes";

export const FOOTER = {
  copyright: "PIT – Possible In Tech. All rights reserved.",
  sections: {
    services: "Services",
    company: "Company",
    contact: "Contact & WhatsApp",
  },
} as const;

export const SOCIAL_LINKS = [
  { id: "whatsapp", label: "WhatsApp", href: "https://wa.me/917871694931" },
  { id: "linkedin", label: "LinkedIn", href: "https://linkedin.com" },
  { id: "instagram", label: "Instagram", href: "https://instagram.com" },
] as const;

export const FOOTER_SERVICES = [
  { label: "Website Development", href: "/services#website-development" },
  { label: "E-commerce Stores", href: "/services#ecommerce-stores" },
  { label: "SEO Optimization", href: "/services#seo" },
  { label: "Analytics & Tracking", href: "/services#analytics-tracking" },
  { label: "Mobile App Development", href: "/services#mobile-app-development" },
  { label: "IT Consulting", href: "/services#it-consulting" },
  { label: "Cloud & Hosting", href: "/services#hosting" },
  { label: "WhatsApp API", href: "/services#whatsapp-api" },
  { label: "DevOps", href: "/services#devops" },
] as const;

export const FOOTER_EXPLORE = [
  { label: "Home", href: ROUTES.home },
  { label: "Our Services", href: ROUTES.services },
  { label: "Portfolio & Work", href: ROUTES.projects },
  { label: "Tech Stack", href: ROUTES.techStack },
  { label: "Development Principles", href: ROUTES.principles },
  { label: "Client Reviews", href: ROUTES.reviews },
  { label: "Blog & Insights", href: ROUTES.blog },
  { label: "Contact Us", href: ROUTES.consultation },
] as const;

/** Compact links shown on mobile */
export const FOOTER_MOBILE_QUICK = [
  { label: "Services", href: ROUTES.services },
  { label: "About", href: ROUTES.about },
  { label: "Our Work", href: ROUTES.projects },
  { label: "Tech Stack", href: ROUTES.techStack },
  { label: "Blog", href: ROUTES.blog },
  { label: "Contact", href: ROUTES.consultation },
] as const;
