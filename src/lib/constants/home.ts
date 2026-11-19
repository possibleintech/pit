import { ROUTES } from "./routes";

export const HOME_HERO = {
  eyebrow: "Digital Solutions & Technology Agency",
  headlinePrefix: "Your business,",
  headlineHighlight: "possible online.",
  headline: "Your business,\npossible online.",
  subheadline:
    "We build powerful digital experiences that help businesses grow, connect with customers, and succeed online.",
  primaryCta: { label: "Let's Talk", href: ROUTES.consultation },
  secondaryCta: { label: "Explore Our Services", href: "/services" },
} as const;

export const HOME_STATS = [
  { value: "10+", label: "Projects Delivered", detail: "Fast & on time" },
  { value: "100%", label: "Client Satisfaction", detail: "Transparent agile delivery" },
  { value: "15+", label: "Modern Technologies", detail: "Next.js, React, Cloud & APIs" },
  { value: "24/7", label: "Ongoing Reliability", detail: "Dedicated support & maintenance" },
] as const;

export const CONSULTATION_STEPS = ["About You", "Project Scope", "Project Goals"] as const;

export const PROJECT_TYPES = [
  "Website Development",
  "E-commerce Stores",
  "SEO Optimization",
  "Analytics & Tracking",
  "Mobile App Development",
  "IT Consulting & Architecture",
  "Cloud & Hosting",
  "WhatsApp API Integration",
  "DevOps & Quality Engineering",
  "Other Digital Solution",
] as const;
