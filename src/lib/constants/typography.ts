export const FONT_FAMILY = {
  sans: "font-sans",
  heading: "font-heading",
} as const;

export const TYPO = {
  heroBrand: "font-heading text-sm font-semibold tracking-[0.18em] uppercase text-magenta",
  heroHeadline:
    "font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-5xl lg:text-6xl",
  heroSubheadline:
    "font-sans text-base leading-relaxed text-secondary-pit sm:text-lg",
  sectionEyebrow:
    "font-sans text-xs font-semibold tracking-[0.16em] uppercase text-magenta",
  sectionTitle:
    "font-heading text-2xl font-extrabold tracking-tight text-navy sm:text-4xl",
  sectionSubtitle:
    "font-sans text-sm leading-relaxed text-secondary-pit sm:text-base",
  pageTitle:
    "font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl",
  cardTitle: "font-heading text-lg font-semibold text-navy sm:text-xl",
  cardBody: "font-sans text-sm leading-relaxed text-secondary-pit",
  statValue: "font-heading text-2xl font-extrabold text-navy sm:text-3xl",
  statLabel: "font-sans text-xs font-medium text-secondary-pit sm:text-sm",
  body: "font-sans text-sm leading-relaxed text-secondary-pit sm:text-base",
  footerBrand: "font-heading text-2xl font-bold text-white",
  footerTagline: "font-sans text-sm text-white/70",
} as const;

export const HOME_TYPO = {
  hero: {
    brand: TYPO.heroBrand,
    headline: TYPO.heroHeadline,
    subheadline: TYPO.heroSubheadline,
  },
  section: {
    eyebrow: TYPO.sectionEyebrow,
    title: TYPO.sectionTitle,
    subtitle: TYPO.sectionSubtitle,
  },
} as const;
