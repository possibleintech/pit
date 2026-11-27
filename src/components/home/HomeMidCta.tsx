import { ArrowRight } from "lucide-react";
import { HOME_MID_CTA } from "@/lib/constants";
import { SectionLink } from "@/components/common/SectionLink";

export function HomeMidCta() {
  return (
    <section className="border-b border-pit bg-navy text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-12 sm:px-6 sm:py-14 lg:flex-row lg:items-center lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-magenta">
            {HOME_MID_CTA.eyebrow}
          </p>
          <h2 className="font-heading text-2xl font-extrabold tracking-tight sm:text-3xl">
            {HOME_MID_CTA.title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-white/75 sm:text-base">
            {HOME_MID_CTA.subtitle}
          </p>
        </div>
        <SectionLink
          href={HOME_MID_CTA.cta.href}
          className="btn-primary inline-flex shrink-0 items-center gap-2 text-sm sm:text-base"
        >
          <span>{HOME_MID_CTA.cta.label}</span>
          <ArrowRight size={16} />
        </SectionLink>
      </div>
    </section>
  );
}
