"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { PROJECTS, ROUTES, type ProjectItem } from "@/lib/constants";
import { SectionHeader } from "@/components/common/SectionHeader";
import { SectionLink } from "@/components/common/SectionLink";
import { MotionSection } from "@/components/common/MotionSection";
import { PitBot } from "@/components/pitbot";
import { cn } from "@/lib/utils";

export function HomeProjectSection() {
  const [activeId, setActiveId] = useState(PROJECTS[0].id);
  const activeProject: ProjectItem =
    PROJECTS.find((project) => project.id === activeId) ?? PROJECTS[0];

  return (
    <section className="section-shell scroll-mt-24 bg-white" id="projects">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          className="mb-10 sm:mb-14"
          eyebrow="Work"
          title="Digital experiences"
          titleHighlight="we've delivered"
          subtitle="Live stores and platforms engineered for speed, clarity, and conversion."
        />

        <MotionSection className="mb-8 overflow-x-auto">
          <div className="flex gap-2 pb-1">
            {PROJECTS.map((project) => {
              const isActive = project.id === activeId;
              return (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => setActiveId(project.id)}
                  className={cn(
                    "shrink-0 border px-4 py-2 text-sm font-semibold transition-colors",
                    isActive
                      ? "border-navy bg-navy text-white"
                      : "border-pit bg-white text-secondary-pit hover:border-magenta/40 hover:text-magenta"
                  )}
                >
                  {project.name}
                </button>
              );
            })}
          </div>
        </MotionSection>

        <MotionSection delay={0.1} className="grid overflow-hidden border border-pit lg:grid-cols-12">
          <div className="relative min-h-[240px] bg-navy lg:col-span-7 lg:min-h-[420px]">
            <Image
              src={activeProject.image}
              alt={activeProject.imageAlt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </div>
          <div className="flex flex-col justify-between bg-white p-6 sm:p-8 lg:col-span-5 lg:p-10">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-magenta">
                {activeProject.category}
              </p>
              <h3 className="mb-3 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                {activeProject.name}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-secondary-pit">
                {activeProject.description}
              </p>
              <ul className="space-y-2.5">
                {activeProject.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-secondary-pit">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-magenta" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center gap-3 border border-pit bg-pit-grey p-3">
                <PitBot
                  pose="celebrate"
                  alt="PIT BOT celebrating project delivery"
                  size="sm"
                  animation="subtle"
                />
                <div>
                  <p className="text-sm font-bold text-navy">Delivered with PIT care</p>
                  <p className="text-xs text-secondary-pit">
                    Responsive, tested, and ready for real customers.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-3 border-t border-pit pt-6 sm:flex-row">
              <Link
                href={activeProject.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2 text-sm"
              >
                <span>Visit website</span>
                <ExternalLink size={14} />
              </Link>
              <SectionLink
                href={ROUTES.consultation}
                className="btn-outline inline-flex items-center justify-center gap-2 text-sm"
              >
                <span>Request similar build</span>
                <ArrowRight size={14} />
              </SectionLink>
            </div>
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
