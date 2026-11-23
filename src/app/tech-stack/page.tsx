import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { ROUTES, SITE } from "@/lib/constants";
import { TechStackFilter } from "@/components/tech-stack/TechStackFilter";
import { SectionLink as Link } from "@/components/common/SectionLink";
import { TYPO } from "@/lib/constants/typography";

export const metadata: Metadata = {
  title: "Tech Stack",
  description:
    "Technologies, frameworks, databases, and cloud tools PIT uses to engineer reliable digital platforms.",
  alternates: { canonical: `${SITE.url}${ROUTES.techStack}` },
  openGraph: {
    title: `Tech Stack | ${SITE.name}`,
    description:
      "Frontend, backend, commerce, cloud, and analytics tools selected for reliability and velocity.",
    url: `${SITE.url}${ROUTES.techStack}`,
  },
};

export default function TechStackPage() {
  return (
    <>
      <section className="page-hero-shell">
        <div className="absolute inset-0 pit-grid-bg opacity-40 pointer-events-none" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className={TYPO.sectionEyebrow}>Our toolset</p>
          <h1 className={`${TYPO.pageTitle} mt-3 mb-4 max-w-3xl`}>
            Battle-tested <span className="text-magenta">technologies</span>
          </h1>
          <p className={`${TYPO.body} max-w-xl`}>
            Frontend, backend, commerce, cloud, and analytics tools selected for reliability,
            velocity, and maintainability.
          </p>
        </div>
      </section>

      <section className="section-shell bg-pit-grey">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <TechStackFilter />
        </div>
      </section>

      <section className="bg-white py-14 text-center sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className={`${TYPO.sectionTitle} mb-3`}>Need a specific integration?</h2>
          <p className={`${TYPO.sectionSubtitle} mx-auto mb-8 max-w-lg`}>
            Our engineers can recommend a stack architecture for your scale and roadmap.
          </p>
          <Link
            href={ROUTES.consultation}
            className="btn-primary inline-flex items-center gap-2 text-sm sm:text-base"
          >
            <span>Book a consultation</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
