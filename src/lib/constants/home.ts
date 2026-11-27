import { ROUTES } from "./routes";

export const HOME_HERO = {
  brand: "PIT – Possible In Tech",
  eyebrow: "Modern Digital Solutions",
  headlinePrefix: "Your business,",
  headlineHighlight: "possible online.",
  headline: "Your business,\npossible online.",
  subheadline:
    "We design and engineer websites, stores, and growth systems that help ambitious businesses win online.",
  primaryCta: { label: "Let's Talk", href: ROUTES.consultation },
  secondaryCta: { label: "See Our Work", href: ROUTES.projects },
  visualAlt: "Featured PIT project screenshot",
} as const;

export const HOME_HERO_SHOWCASE = {
  intervalMs: 3000,
  label: "Featured client work",
} as const;

export const HOME_MID_CTA = {
  eyebrow: "Ready to build",
  title: "Discuss a similar project",
  subtitle:
    "Tell us what you want to launch — we will map scope, timeline, and the fastest path to a live product.",
  cta: { label: "Book a Free Consultation", href: ROUTES.consultation },
} as const;

export const HOME_STATS = [
  { value: "12+", label: "Projects Delivered", detail: "Fast & on time" },
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
