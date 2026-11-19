import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { TechLogo } from "@/components/common/TechLogo";
import { MotionSection } from "@/components/common/MotionSection";
import { ScrollRow, ScrollRowItem } from "@/components/common/ScrollRow";
import { ROUTES, TECH_GROUPS, TECH_STACK } from "@/lib/constants";

function findTech(name: string) {
  return TECH_STACK.find((t) => t.name === name);
}

export function HomeTechStrip() {
  return (
    <section className="bg-white border-b border-[#E8E8ED] py-12 sm:py-16 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionSection className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCEAF4] border border-[#E20A96]/20 text-[#E20A96] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles size={13} />
            <span>Technologies We Master</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#292D3D] leading-tight">
            Modern, Reliable & Scalable Stacks
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#53596A] md:hidden">Swipe through stacks →</p>
        </MotionSection>

        <MotionSection delay={0.1} className="w-full">
          <div className="hidden md:flex items-start justify-center gap-10 lg:gap-14 flex-wrap w-full">
            {TECH_GROUPS.map((group) => (
              <div key={group.category} className="flex flex-col items-start gap-3 bg-[#F7F7FA] border border-[#E8E8ED] rounded-2xl p-5 shadow-xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#E20A96]">
                  {group.category}
                </span>
                <div className="flex items-center gap-3">
                  {group.slugs.map((slug) => {
                    const tech = findTech(slug);
                    if (!tech) return null;
                    return (
                      <div key={tech.name} className="flex flex-col items-center gap-1.5 w-14 group">
                        <div className="w-10 h-10 rounded-xl bg-white border border-[#E8E8ED] shadow-xs flex items-center justify-center group-hover:scale-110 group-hover:border-[#E20A96]/40 transition-all">
                          <TechLogo name={tech.name} logo={tech.logo} size={24} />
                        </div>
                        <span className="text-[10px] font-semibold text-[#53596A] group-hover:text-[#292D3D] text-center leading-tight truncate w-full">
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
            <ScrollRow className="gap-3">
              {TECH_GROUPS.map((group) => (
                <ScrollRowItem key={group.category} width="w-[min(78vw,280px)]">
                  <div className="h-full bg-[#F7F7FA] border border-[#E8E8ED] rounded-2xl p-4">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#E20A96] mb-3">
                      {group.category}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {group.slugs.map((slug) => {
                        const tech = findTech(slug);
                        if (!tech) return null;
                        return (
                          <div key={tech.name} className="flex items-center gap-2 p-1.5 bg-white rounded-xl border border-[#E8E8ED]/70 min-w-0">
                            <TechLogo name={tech.name} logo={tech.logo} size={18} />
                            <span className="text-xs font-medium text-[#292D3D] truncate">{tech.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </ScrollRowItem>
              ))}
            </ScrollRow>
          </div>
        </MotionSection>

        <MotionSection delay={0.2} className="mt-8 sm:mt-10 text-center">
          <Link
            href={ROUTES.techStack}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E20A96] hover:gap-2.5 transition-all"
          >
            <span>Explore full technology directory</span>
            <ArrowRight size={13} />
          </Link>
        </MotionSection>
      </div>
    </section>
  );
}
