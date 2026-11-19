"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionLink } from "@/components/common/SectionLink";
import { ArrowRight, CheckCircle2, ExternalLink, Globe, Sparkles, Layers } from "lucide-react";
import { PROJECTS, ROUTES, type ProjectItem } from "@/lib/constants";
import { MotionSection } from "@/components/common/MotionSection";
import { PitBot } from "@/components/pitbot";

export function HomeProjectSection() {
  const [activeId, setActiveId] = useState<string>(PROJECTS[0].id);

  const activeProject: ProjectItem =
    PROJECTS.find((p) => p.id === activeId) || PROJECTS[0];

  return (
    <section className="scroll-mt-24 bg-white py-14 sm:py-20 lg:py-28 border-b border-[#E8E8ED] relative" id="projects">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(232, 232, 237, 0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(232, 232, 237, 0.6) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <MotionSection className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCEAF4] border border-[#E20A96]/20 text-[#E20A96] text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4 shadow-xs">
            <Sparkles size={13} className="shrink-0" />
            <span>Our Featured Work</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#292D3D] tracking-tight mb-3 sm:mb-4">
            Digital Experiences <span className="text-[#E20A96]">We&apos;ve Delivered</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#53596A] max-w-2xl mx-auto leading-relaxed">
            Explore live e-commerce stores, high-traffic marketplaces, and custom web platforms engineered by PIT for ambitious brands.
          </p>
        </MotionSection>

        {/* Project Selector Tabs */}
        <MotionSection delay={0.1} className="mb-8 sm:mb-10">
          <div className="relative">
            <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 pt-1 scrollbar-none snap-x snap-mandatory px-1">
              {PROJECTS.map((project) => {
                const isActive = project.id === activeId;
                return (
                  <button
                    key={project.id}
                    onClick={() => setActiveId(project.id)}
                    className={`snap-center shrink-0 px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 border cursor-pointer ${
                      isActive
                        ? "bg-[#292D3D] text-white border-[#292D3D] shadow-md scale-[1.02]"
                        : "bg-white text-[#53596A] border-[#E8E8ED] hover:border-[#E20A96]/40 hover:bg-[#FCEAF4]/40"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full shrink-0 ${
                        isActive ? "bg-[#E20A96]" : "bg-[#E8E8ED]"
                      }`}
                    />
                    <span className="truncate">{project.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </MotionSection>

        {/* Spotlight Main Showcase */}
        <MotionSection delay={0.2} className="mb-12 sm:mb-16">
          <div className="bg-white rounded-3xl border border-[#E8E8ED] shadow-[0_12px_40px_rgba(41,45,61,0.08)] overflow-hidden grid lg:grid-cols-12 gap-0 transition-all duration-300">
            {/* Left: Browser Window Screenshot Showcase */}
            <div className="lg:col-span-7 bg-[#1F222E] flex flex-col justify-between overflow-hidden group">
              {/* Browser Header Bar */}
              <div className="bg-[#151821] px-4 py-3 border-b border-slate-800 flex items-center justify-between shrink-0 gap-3">
                <div className="flex items-center gap-2 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="bg-[#1F222E] text-slate-300 text-[10px] sm:text-xs font-mono px-3 py-1 rounded-full flex items-center gap-1.5 max-w-[200px] sm:max-w-xs truncate border border-slate-700/60">
                  <Globe size={11} className="text-[#E20A96] shrink-0" />
                  <span className="truncate">{activeProject.projectUrl}</span>
                </div>
                <Link
                  href={activeProject.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors p-1"
                  aria-label={`Open ${activeProject.name} live site`}
                >
                  <ExternalLink size={15} />
                </Link>
              </div>

              {/* Screenshot Image Container */}
              <div className="relative aspect-[16/10] sm:aspect-video lg:aspect-auto lg:h-[450px] w-full overflow-hidden bg-[#1F222E]">
                <Image
                  src={activeProject.image}
                  alt={activeProject.imageAlt}
                  fill
                  priority
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F222E]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5 sm:p-6">
                  <Link
                    href={activeProject.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E20A96] text-white text-xs font-bold shadow-lg hover:bg-[#C40882] transition-colors"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink size={14} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: Project Details */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FCEAF4] text-[#E20A96] border border-[#E20A96]/20">
                    {activeProject.category}
                  </span>
                  <Link
                    href={activeProject.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E20A96] hover:underline shrink-0"
                  >
                    <span>Live Site</span>
                    <ExternalLink size={13} />
                  </Link>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#292D3D] mb-3 tracking-tight">
                  {activeProject.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#53596A] leading-relaxed mb-6">
                  {activeProject.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#292D3D] mb-3">
                    Key Features & Results
                  </h4>
                  <ul className="space-y-2.5">
                    {activeProject.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-[#53596A]">
                        <CheckCircle2 size={16} className="text-[#E20A96] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* PIT BOT Quality Endorsement Badge */}
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#F7F7FA] border border-[#E8E8ED] mb-6">
                  <div className="w-12 h-12 shrink-0 flex items-center justify-center">
                    <PitBot
                      image="/assets/pit-bot/pit-bot-celebrate.webp"
                      alt="PIT BOT celebrating project delivery"
                      size="custom"
                      width={48}
                      height={48}
                      animation="subtle"
                      className="w-12 h-12"
                    />
                  </div>
                  <div className="text-xs">
                    <span className="font-bold text-[#292D3D] block">
                      Crafted with PIT BOT Precision
                    </span>
                    <span className="text-[11px] text-[#53596A]">
                      Delivered on schedule with 100% responsive test coverage.
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-[#E8E8ED] flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href={activeProject.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-[#E20A96] hover:bg-[#C40882] text-white text-xs sm:text-sm font-bold inline-flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(226,10,150,0.26)] transition-all"
                >
                  <span>Visit Website</span>
                  <ExternalLink size={14} />
                </Link>
                <SectionLink
                  href={ROUTES.consultation}
                  className="px-5 py-3 rounded-full bg-white hover:bg-[#FCEAF4]/50 border border-[#E8E8ED] hover:border-[#E20A96]/30 text-[#292D3D] hover:text-[#E20A96] text-xs sm:text-sm font-semibold inline-flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Request Similar Build</span>
                  <ArrowRight size={14} />
                </SectionLink>
              </div>
            </div>
          </div>
        </MotionSection>

        {/* All Projects Cards Grid */}
        <MotionSection delay={0.3}>
          <div className="mb-5 sm:mb-7 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Layers size={18} className="text-[#E20A96]" />
              <h3 className="text-lg sm:text-xl font-bold text-[#292D3D]">All Completed Works</h3>
            </div>
            <span className="text-xs text-[#53596A] font-medium hidden sm:inline">Click any card to inspect details</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {PROJECTS.map((project) => {
              const isSelected = project.id === activeId;
              return (
                <div
                  key={project.id}
                  onClick={() => setActiveId(project.id)}
                  className={`cursor-pointer group bg-white rounded-2xl border transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xs ${
                    isSelected
                      ? "border-[#E20A96] ring-2 ring-[#E20A96]/20 shadow-[0_8px_24px_rgba(226,10,150,0.12)] scale-[1.01]"
                      : "border-[#E8E8ED] hover:border-[#E20A96]/40 hover:shadow-md hover:-translate-y-1"
                  }`}
                >
                  <div>
                    {/* Card Thumbnail */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                      <Image
                        src={project.image}
                        alt={project.imageAlt}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute top-2.5 right-2.5">
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#292D3D]/90 backdrop-blur-md text-white border border-white/10">
                          {project.category.split(" ")[0]}
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-4 sm:p-5">
                      <h4 className="text-sm sm:text-base font-bold text-[#292D3D] group-hover:text-[#E20A96] transition-colors mb-1.5 truncate">
                        {project.name}
                      </h4>
                      <p className="text-xs text-[#53596A] line-clamp-2 leading-relaxed mb-2">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-4 sm:px-5 pb-4 pt-3 border-t border-[#E8E8ED]/60 flex items-center justify-between text-xs">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider ${
                        isSelected ? "text-[#E20A96]" : "text-[#53596A] group-hover:text-[#292D3D]"
                      }`}
                    >
                      {isSelected ? "Active Focus" : "View Project"}
                    </span>
                    <Link
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-1 rounded-full text-[#53596A] hover:text-[#E20A96] hover:bg-[#FCEAF4] transition-colors"
                      title={`Visit ${project.name} live site`}
                    >
                      <ExternalLink size={13} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
