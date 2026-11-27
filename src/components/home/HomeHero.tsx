"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HOME_HERO, HOME_STATS, SITE } from "@/lib/constants";
import { HOME_TYPO, TYPO } from "@/lib/constants/typography";
import { SectionLink } from "@/components/common/SectionLink";
import { MotionSection } from "@/components/common/MotionSection";
import { HeroProjectShowcase } from "@/components/home/HeroProjectShowcase";
import { usePitBot } from "@/components/pitbot";
import { trackEvent } from "@/lib/analytics";

export function HomeHero() {
  const { handleCtaHover } = usePitBot();

  return (
    <section className="relative overflow-hidden border-b border-pit bg-white">
      <div className="absolute inset-0 pit-grid-bg opacity-40 pointer-events-none" aria-hidden />
      <div
        className="absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-soft-pink/70 blur-3xl pointer-events-none"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:py-24">
        <div className="min-w-0 lg:col-span-6">
          <MotionSection>
            <p className={HOME_TYPO.hero.brand}>{SITE.shortName}</p>
            <p className={`${TYPO.sectionEyebrow} mt-3 mb-4`}>{HOME_HERO.eyebrow}</p>
            <h1 className={`${HOME_TYPO.hero.headline} mb-5`}>
              <span>{HOME_HERO.headlinePrefix}</span>{" "}
              <span className="text-magenta">{HOME_HERO.headlineHighlight}</span>
            </h1>
            <p className={`${HOME_TYPO.hero.subheadline} mb-8 max-w-xl`}>
              {HOME_HERO.subheadline}
            </p>

            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <SectionLink
                href={HOME_HERO.primaryCta.href}
                onMouseEnter={() => handleCtaHover(true)}
                onMouseLeave={() => handleCtaHover(false)}
                onFocus={() => handleCtaHover(true)}
                onBlur={() => handleCtaHover(false)}
                onClick={() => trackEvent("cta_click", { source: "hero_primary" })}
                className="btn-primary inline-flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <span>{HOME_HERO.primaryCta.label}</span>
                <ArrowRight size={16} />
              </SectionLink>
              <Link
                href={HOME_HERO.secondaryCta.href}
                onClick={() => trackEvent("cta_click", { source: "hero_secondary" })}
                className="btn-outline inline-flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <span>{HOME_HERO.secondaryCta.label}</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <dl className="grid grid-cols-2 gap-4 border-t border-pit pt-6 sm:grid-cols-4">
              {HOME_STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className={TYPO.statValue}>{stat.value}</dd>
                  <p className={TYPO.statLabel}>{stat.label}</p>
                </div>
              ))}
            </dl>
          </MotionSection>
        </div>

        <div className="min-w-0 lg:col-span-6">
          <MotionSection delay={0.12}>
            <HeroProjectShowcase />
          </MotionSection>
        </div>
      </div>
    </section>
  );
}
