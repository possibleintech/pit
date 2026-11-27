import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TechLogo } from "@/components/common/TechLogo";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ScrollRow, ScrollRowItem } from "@/components/common/ScrollRow";
import { ROUTES, TECH_GROUPS, TECH_STACK } from "@/lib/constants";

function findTech(name: string) {
  return TECH_STACK.find((tech) => tech.name === name);
}

export function HomeTechStrip() {
  return (
    <section className="section-shell bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          className="mb-8 sm:mb-12"
          eyebrow="Technology"
          title="Modern stacks,"
          titleHighlight="reliably delivered"
        />

        <div className="hidden flex-wrap items-start justify-center gap-6 md:flex lg:gap-8">
          {TECH_GROUPS.map((group) => (
            <div key={group.category} className="border border-pit bg-pit-grey p-5">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-wider text-magenta">
                {group.category}
              </p>
              <div className="flex items-center gap-3">
                {group.slugs.map((slug) => {
                  const tech = findTech(slug);
                  if (!tech) return null;
                  return (
                    <div key={tech.name} className="flex w-14 flex-col items-center gap-1.5">
                      <div className="flex h-10 w-10 items-center justify-center border border-pit bg-white">
                        <TechLogo name={tech.name} logo={tech.logo} size={24} />
                      </div>
                      <span className="w-full truncate text-center text-[10px] font-semibold text-secondary-pit">
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="md:hidden">
          <ScrollRow>
            {TECH_STACK.slice(0, 12).map((tech) => (
              <ScrollRowItem key={tech.name}>
                <div className="flex w-20 flex-col items-center gap-2 border border-pit bg-white p-3">
                  <TechLogo name={tech.name} logo={tech.logo} size={28} />
                  <span className="text-center text-[10px] font-semibold text-secondary-pit">
                    {tech.name}
                  </span>
                </div>
              </ScrollRowItem>
            ))}
          </ScrollRow>
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href={ROUTES.techStack}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-magenta"
          >
            View full tech stack <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
