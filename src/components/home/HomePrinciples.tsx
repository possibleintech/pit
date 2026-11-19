"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DEVELOPMENT_PRINCIPLES, ROUTES } from "@/lib/constants";
import type { DevelopmentPrinciple } from "@/lib/constants/principles";
import { MotionSection } from "@/components/common/MotionSection";

const ROTATE_MS = 3500;

export function HomePrinciples() {
  const [activeId, setActiveId] = useState<DevelopmentPrinciple["id"]>(DEVELOPMENT_PRINCIPLES[0].id);
  const [paused, setPaused] = useState(false);
  const active = DEVELOPMENT_PRINCIPLES.find((p) => p.id === activeId) ?? DEVELOPMENT_PRINCIPLES[0];

  const goToNext = useCallback(() => {
    setActiveId((current) => {
      const idx = DEVELOPMENT_PRINCIPLES.findIndex((p) => p.id === current);
      const next = (idx + 1) % DEVELOPMENT_PRINCIPLES.length;
      return DEVELOPMENT_PRINCIPLES[next].id;
    });
  }, []);

  useEffect(() => {
    if (paused) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const interval = setInterval(goToNext, ROTATE_MS);
    return () => clearInterval(interval);
  }, [paused, goToNext]);

  const selectPrinciple = (id: DevelopmentPrinciple["id"]) => {
    setActiveId(id);
  };

  return (
    <section className="scroll-mt-24 bg-white py-14 sm:py-20 lg:py-24 border-b border-[#E8E8ED] relative" id="principles">
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(232, 232, 237, 0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(232, 232, 237, 0.6) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative min-w-0">
        <MotionSection className="max-w-3xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCEAF4] border border-[#E20A96]/20 text-[#E20A96] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles size={13} />
            <span>How We Build</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#292D3D] leading-tight tracking-tight mb-3">
            Standards You Can <span className="text-[#E20A96]">Rely On</span>
          </h2>
          <p className="text-sm sm:text-base text-[#53596A] leading-relaxed max-w-2xl">
            Every digital platform built by PIT adheres to rigorous engineering principles, ensuring your website remains fast, maintainable, and conversion-ready.
          </p>
        </MotionSection>

        <div
          className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start min-w-0"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node)) setPaused(false);
          }}
        >
          {/* Principles Selector Tabs */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-2.5 sm:gap-3 min-w-0">
            {DEVELOPMENT_PRINCIPLES.map((p) => {
              const isSelected = activeId === p.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => selectPrinciple(p.id)}
                  className={cn(
                    "text-left rounded-2xl border p-3.5 sm:p-4 transition-all duration-200 cursor-pointer min-w-0",
                    isSelected
                      ? "border-[#E20A96] bg-[#FCEAF4] shadow-[0_4px_18px_rgba(226,10,150,0.14)] scale-[1.02]"
                      : "border-[#E8E8ED] bg-[#F7F7FA] hover:border-[#E20A96]/30 hover:bg-white"
                  )}
                >
                  <span
                    className={cn(
                      "text-xs font-bold block mb-1",
                      isSelected ? "text-[#E20A96]" : "text-[#292D3D]"
                    )}
                  >
                    {p.acronym}
                  </span>
                  <span className="text-xs font-semibold text-[#292D3D] block leading-snug">
                    {p.title}
                  </span>
                  <span className="text-[10px] text-[#53596A] mt-1 block">
                    {p.mapsTo}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Principle Detail Spotlight */}
          <div className="lg:col-span-7 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.25 }}
                className="bg-white border border-[#E8E8ED] rounded-2xl p-6 sm:p-8 shadow-[0_8px_30px_rgba(41,45,61,0.06)] min-w-0"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#FCEAF4] text-[#E20A96] flex items-center justify-center shrink-0">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#E20A96]">
                      {active.mapsTo} Focus
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#292D3D]">
                      {active.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#53596A] leading-relaxed mb-6">
                  {active.description}
                </p>

                <div className="bg-[#F7F7FA] border border-[#E8E8ED] rounded-xl p-4 sm:p-5 mb-6">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[#E20A96] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#292D3D] mb-1">
                        What this means for your business
                      </p>
                      <p className="text-xs sm:text-sm text-[#53596A] leading-relaxed">
                        {active.trustPoint}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#E8E8ED]">
                  <Link
                    href={ROUTES.techStack}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E20A96] hover:gap-2.5 transition-all"
                  >
                    <span>View full tech stack</span>
                    <ArrowRight size={13} />
                  </Link>
                  <span className="text-[11px] text-[#53596A]">
                    PIT Quality Standards
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
