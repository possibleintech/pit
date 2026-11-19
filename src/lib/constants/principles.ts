export const DEVELOPMENT_PRINCIPLES = [
  {
    id: "mobile-first",
    acronym: "Responsive",
    title: "Mobile-First Design",
    description: "Every layout, card, and interaction is designed to feel native and effortless on smartphones, tablets, and desktops.",
    trustPoint: "Over 70% of your visitors are on mobile — they get a fast, intuitive experience with zero friction.",
    mapsTo: "User Experience",
  },
  {
    id: "speed",
    acronym: "Speed",
    title: "Performance & Web Vitals",
    description: "Sub-second load times, optimized assets, and clean code that scores high on Google Lighthouse.",
    trustPoint: "Faster page loads directly boost conversion rates and increase your organic search rankings.",
    mapsTo: "Conversion",
  },
  {
    id: "dry",
    acronym: "DRY",
    title: "Don't Repeat Yourself",
    description: "Reusable UI components, centralized brand tokens, and modular code architecture.",
    trustPoint: "Rapid feature development, consistent branding across every page, and a maintainable foundation.",
    mapsTo: "Maintainability",
  },
  {
    id: "data",
    acronym: "Data",
    title: "Analytics & Measurement",
    description: "Built-in tracking for user events, form submissions, and marketing attribution.",
    trustPoint: "You know exactly which pages and campaigns drive real leads and revenue.",
    mapsTo: "Measurability",
  },
  {
    id: "clean",
    acronym: "Clean",
    title: "Clean Code & Quality Gates",
    description: "Strict TypeScript types, modular file structures, and automated checks before deployment.",
    trustPoint: "Fewer bugs, zero downtime deployments, and a solid platform ready to scale as your business grows.",
    mapsTo: "Reliability",
  },
  {
    id: "agile",
    acronym: "Agile",
    title: "Iterative Collaboration",
    description: "Regular sprint updates, clickable demos, and direct access to our engineering team.",
    trustPoint: "You see visible progress each week and have total clarity into how your project is progressing.",
    mapsTo: "Transparency",
  },
] as const;

export type DevelopmentPrinciple = (typeof DEVELOPMENT_PRINCIPLES)[number];
