/**
 * Centralized messages and dialogue for PIT BOT
 */

export const PITBOT_HERO_MESSAGES = {
  initial: "Hey there! 👋 Welcome to PIT!",
  secondary: "I'm PIT BOT. Ready to build something awesome?",
  ctaHover: "Click here to start your project! 👉",
  idle: "Still exploring? Let me know if you need any recommendations! ✨",
};

export const PITBOT_CLICK_EASTER_EGGS = [
  "Beep boop! Ready to code! 🚀",
  "High performance, clean code, zero bugs! ⚡",
  "Your business, possible online! ✨",
  "Did someone say high Google rankings? 📈",
  "Built with Next.js & React 19 magic! 💻",
  "100% human-approved robot companion! 🤖",
  "Need a quick consultation? Check out our form below! 👇",
];

export const PITBOT_SERVICE_GUIDES: Record<
  string,
  {
    pose: "laptop" | "package" | "search" | "analytics";
    message: string;
    headline: string;
    ctaText: string;
  }
> = {
  "website-development": {
    pose: "laptop",
    message: "Let's build a website that makes your business stand out!",
    headline: "Fast, modern, mobile-first websites.",
    ctaText: "Explore Web Dev",
  },
  "ecommerce-stores": {
    pose: "package",
    message: "Ready to turn visitors into customers? Let's build your online store!",
    headline: "Online stores ready to sell from day one.",
    ctaText: "Explore E-commerce",
  },
  "search-engine-optimization": {
    pose: "search",
    message: "Let's help your business get discovered on Google!",
    headline: "Data-driven SEO for top search rankings.",
    ctaText: "Explore SEO",
  },
  "analytics-tracking": {
    pose: "analytics",
    message: "Data tells a story. Let's find the opportunities to grow!",
    headline: "PostHog & GA4 funnel tracking that drives revenue.",
    ctaText: "Explore Analytics",
  },
};

export const PITBOT_CHAT_CONVERSATIONS = {
  welcome: `Hey! I'm **PIT BOT** 🤖\n\nWelcome to Possible In Tech. What are we building today?`,
  options: [
    {
      id: "web-dev",
      label: "Website Development",
      reply:
        "Awesome choice! We create modern, ultra-fast, responsive websites using Next.js and TypeScript that convert visitors into paying clients.",
      actionLabel: "Get a Website Quote",
      actionHref: "/services#website-development",
    },
    {
      id: "ecom",
      label: "E-commerce Solutions",
      reply:
        "Ready to sell online? We build high-converting e-commerce stores with instant checkout, Razorpay/Stripe payment gateways, and automated order workflows.",
      actionLabel: "Explore E-commerce",
      actionHref: "/services#ecommerce-stores",
    },
    {
      id: "seo",
      label: "SEO Services",
      reply:
        "Let's get you ranked #1 on Google! We optimize technical SEO, schema structured data, Core Web Vitals, and keyword authority to drive organic leads.",
      actionLabel: "Explore SEO Plans",
      actionHref: "/services#search-engine-optimization",
    },
    {
      id: "analytics",
      label: "Analytics & Tracking",
      reply:
        "Numbers don't lie! We integrate Google Analytics 4, PostHog funnel pipelines, and conversion attribution so you know exactly which campaigns make money.",
      actionLabel: "Explore Analytics",
      actionHref: "/services#analytics-tracking",
    },
    {
      id: "team",
      label: "Talk to Our Team",
      reply:
        "Our engineering team is ready to help you plan your roadmap! You can message us directly on WhatsApp or book a free technical strategy session.",
      actionLabel: "Chat on WhatsApp (7871694931)",
      actionHref: "https://wa.me/917871694931?text=Hi%20PIT%20team,%20I'd%20like%20to%20discuss%20a%20project",
    },
  ],
};
