import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
  ABOUT_HERO,
  ABOUT_STATS,
  ABOUT_VISION,
  ABOUT_MISSION,
  ABOUT_VALUES,
  ABOUT_EXPERTISE,
  DEVELOPMENT_PRINCIPLES,
  PROJECTS,
  ROUTES,
  SITE,
} from "@/lib/constants";
import { SectionLink as Link } from "@/components/common/SectionLink";
import { PitBot } from "@/components/pitbot";
import { TYPO } from "@/lib/constants/typography";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about PIT – Possible In Tech: vision, mission, engineering standards, and how we build digital products that grow businesses.",
  alternates: { canonical: `${SITE.url}${ROUTES.about}` },
  openGraph: {
    title: `About Us | ${SITE.name}`,
    description: ABOUT_HERO.subheadline,
    url: `${SITE.url}${ROUTES.about}`,
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero-shell">
        <div className="absolute inset-0 pit-grid-bg opacity-40 pointer-events-none" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl items-end gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <p className={TYPO.sectionEyebrow}>{ABOUT_HERO.eyebrow}</p>
            <h1 className={`${TYPO.pageTitle} mt-3 mb-4`}>
              Modern digital solutions for{" "}
              <span className="text-magenta">ambitious businesses</span>
            </h1>
            <p className={`${TYPO.body} max-w-xl`}>{ABOUT_HERO.subheadline}</p>
          </div>
          <div className="grid grid-cols-2 gap-3 lg:col-span-5">
            {ABOUT_STATS.map((stat) => (
              <div key={stat.label} className="border border-pit bg-pit-grey p-5">
                <p className={TYPO.statValue}>{stat.value}</p>
                <p className={`${TYPO.statLabel} mt-1`}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className={TYPO.sectionEyebrow}>Vision</p>
            <h2 className={`${TYPO.sectionTitle} mt-3 mb-4`}>Where we are headed</h2>
            <p className={TYPO.body}>{ABOUT_VISION}</p>
          </div>
          <div>
            <p className={TYPO.sectionEyebrow}>Mission</p>
            <h2 className={`${TYPO.sectionTitle} mt-3 mb-4`}>How we create value</h2>
            <p className={TYPO.body}>{ABOUT_MISSION}</p>
          </div>
        </div>
      </section>

      <section className="section-shell bg-pit-grey">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className={TYPO.sectionEyebrow}>Values</p>
          <h2 className={`${TYPO.sectionTitle} mt-3 mb-8`}>What guides every engagement</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {ABOUT_VALUES.map((value) => (
              <div key={value.title} className="border-l-2 border-magenta bg-white p-6">
                <h3 className="mb-2 text-base font-bold text-navy">{value.title}</h3>
                <p className="text-sm leading-relaxed text-secondary-pit">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <p className={TYPO.sectionEyebrow}>Expertise</p>
            <h2 className={`${TYPO.sectionTitle} mt-3 mb-6`}>What we deliver</h2>
            <ul className="space-y-3">
              {ABOUT_EXPERTISE.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-navy">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-magenta" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7">
            <p className={TYPO.sectionEyebrow}>Proof</p>
            <h2 className={`${TYPO.sectionTitle} mt-3 mb-6`}>Recent work</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {PROJECTS.slice(0, 6).map((project) => (
                <a
                  key={project.id}
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-pit p-4 transition-colors hover:border-magenta/40"
                >
                  <p className="text-sm font-bold text-navy">{project.name}</p>
                  <p className="mt-1 text-xs text-secondary-pit">{project.category}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-pit-grey">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className={TYPO.sectionEyebrow}>Standards</p>
          <h2 className={`${TYPO.sectionTitle} mt-3 mb-8`}>Engineering principles</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DEVELOPMENT_PRINCIPLES.map((item) => (
              <div key={item.id} className="border border-pit bg-white p-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-magenta">
                  {item.acronym}
                </p>
                <h3 className="mb-2 text-base font-bold text-navy">{item.title}</h3>
                <p className="text-sm leading-relaxed text-secondary-pit">{item.trustPoint}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="flex justify-center lg:col-span-5">
            <PitBot
              pose="wave"
              alt="PIT BOT mascot"
              size="lg"
              animation="floating"
              glow
              message="I'm here to help your brand grow."
              speechBubblePosition="top"
            />
          </div>
          <div className="lg:col-span-7">
            <p className={TYPO.sectionEyebrow}>Brand mascot</p>
            <h2 className={`${TYPO.sectionTitle} mt-3 mb-4`}>
              Meet <span className="text-magenta">PIT BOT</span>
            </h2>
            <p className={`${TYPO.body} mb-6 max-w-xl`}>
              PIT BOT is the friendly face of Possible In Tech — a reminder that complex technology
              should feel clear, helpful, and built for real business outcomes.
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="border border-pit bg-pit-grey p-3.5">
                <p className="text-xs font-bold uppercase text-magenta">Identity</p>
                <p className="text-sm font-extrabold text-navy">PIT BOT</p>
              </div>
              <div className="border border-pit bg-pit-grey p-3.5">
                <p className="text-xs font-bold uppercase text-magenta">Specialty</p>
                <p className="text-sm font-extrabold text-navy">Digital growth</p>
              </div>
              <div className="col-span-2 border border-pit bg-pit-grey p-3.5 sm:col-span-1">
                <p className="text-xs font-bold uppercase text-magenta">Motto</p>
                <p className="text-sm font-extrabold text-navy">Possible online</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-pit-grey py-14 text-center sm:py-20">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className={`${TYPO.sectionTitle} mb-3`}>Ready to build with PIT?</h2>
          <p className={`${TYPO.sectionSubtitle} mx-auto mb-8 max-w-lg`}>
            Tell us about your goals and we will map a practical technical roadmap.
          </p>
          <Link
            href={ROUTES.consultation}
            className="btn-primary inline-flex items-center gap-2 text-sm sm:text-base"
          >
            <span>Let&apos;s talk</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
