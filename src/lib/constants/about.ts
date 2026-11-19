import { COMPANY, CODING_PRINCIPLES } from "./site";

export const ABOUT_HERO = {
  eyebrow: "About PIT",
  headline: "Possible In Tech — Modern Digital Solutions & Technology Agency",
  subheadline:
    "We are a digital solutions agency dedicated to helping businesses grow online. We engineer modern websites, high-converting e-commerce stores, data-driven SEO, and analytics architectures.",
} as const;

export const ABOUT_STATS = [
  { value: "10+", label: "Projects Delivered" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "15+", label: "Technologies" },
  { value: "24/7", label: "Ongoing Reliability" },
] as const;

export const ABOUT_VISION = COMPANY.vision;
export const ABOUT_MISSION = COMPANY.mission;

export const ABOUT_VALUES = [
  {
    title: "Client-Centric Collaboration",
    description:
      "We treat your business goals as our own, providing transparent communication, milestone demos, and responsive support at every step.",
  },
  {
    title: "Performance & Quality First",
    description:
      "Every digital platform we build is engineered for lightning speed, mobile responsiveness, and high conversion rates.",
  },
  {
    title: "Modern Tech Stack",
    description:
      "We leverage industry-leading technologies — Next.js, React, Tailwind CSS, TypeScript, and modern cloud platforms — built for longevity.",
  },
  {
    title: "Data-Driven Outcomes",
    description:
      "From technical SEO to Google Analytics & PostHog event tracking, we ensure your digital investments deliver measurable business results.",
  },
] as const;

export const ABOUT_EXPERTISE = [
  "Website Development (Next.js, React, Vite)",
  "E-commerce Stores & Payment Workflows",
  "SEO & Core Web Vitals Optimization",
  "Analytics & Event Tracking (GA4, GTM, PostHog)",
  "Mobile App Development (Flutter & React Native)",
  "Cloud & High-Speed Hosting (AWS, Hostinger, GoDaddy)",
  "WhatsApp Business API & Customer Notifications",
  "DevOps Automation & Quality Engineering",
] as const;

export { CODING_PRINCIPLES };
