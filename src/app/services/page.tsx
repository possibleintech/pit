import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { SERVICES_HERO, ROUTES, SITE } from "@/lib/constants";
import { ServicesPageContent } from "@/components/services/ServicesPageContent";
import { SectionLink as Link } from "@/components/common/SectionLink";
import { TYPO } from "@/lib/constants/typography";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Website development, e-commerce stores, SEO, analytics, mobile apps, and cloud solutions from PIT – Possible In Tech.",
  alternates: { canonical: `${SITE.url}${ROUTES.services}` },
  openGraph: {
    title: `Our Services | ${SITE.name}`,
    description:
      "Comprehensive digital solutions: websites, e-commerce, SEO, analytics, and cloud architecture.",
    url: `${SITE.url}${ROUTES.services}`,
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero-shell">
        <div className="absolute inset-0 pit-grid-bg opacity-40 pointer-events-none" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className={TYPO.sectionEyebrow}>{SERVICES_HERO.eyebrow}</p>
          <h1 className={`${TYPO.pageTitle} mt-3 mb-4 max-w-3xl`}>
            Services built for <span className="text-magenta">digital growth</span>
          </h1>
          <p className={`${TYPO.body} max-w-2xl`}>{SERVICES_HERO.subheadline}</p>
        </div>
      </section>

      <ServicesPageContent />

      <section className="border-t border-pit bg-pit-grey py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className={TYPO.sectionEyebrow}>Start building</p>
          <h2 className={`${TYPO.sectionTitle} mt-3 mb-3`}>
            Ready to accelerate your <span className="text-magenta">online presence</span>?
          </h2>
          <p className={`${TYPO.sectionSubtitle} mx-auto mb-8 max-w-xl`}>
            Book a free strategy session to discuss goals, scope, and timeline.
          </p>
          <Link
            href={ROUTES.consultation}
            className="btn-primary inline-flex items-center gap-2 text-sm sm:text-base"
          >
            <span>Book a free consultation</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
