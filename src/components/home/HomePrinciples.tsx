"use client";

import { useState } from "react";
import { DEVELOPMENT_PRINCIPLES } from "@/lib/constants";
import type { DevelopmentPrinciple } from "@/lib/constants/principles";
import { SectionHeader } from "@/components/common/SectionHeader";
import { cn } from "@/lib/utils";

export function HomePrinciples() {
  const [activeId, setActiveId] = useState<DevelopmentPrinciple["id"]>(
    DEVELOPMENT_PRINCIPLES[0].id
  );
  const active =
    DEVELOPMENT_PRINCIPLES.find((principle) => principle.id === activeId) ??
    DEVELOPMENT_PRINCIPLES[0];

  return (
    <section className="section-shell scroll-mt-24 bg-white" id="principles">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          className="mb-10 sm:mb-14"
          align="left"
          eyebrow="How we build"
          title="Standards you can"
          titleHighlight="rely on"
          subtitle="Clear engineering habits that keep every product fast, maintainable, and conversion-ready."
        />

        <div className="grid gap-8 lg:grid-cols-12">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:col-span-5">
            {DEVELOPMENT_PRINCIPLES.map((principle) => {
              const isActive = principle.id === activeId;
              return (
                <button
                  key={principle.id}
                  type="button"
                  onClick={() => setActiveId(principle.id)}
                  className={cn(
                    "border px-4 py-4 text-left transition-colors",
                    isActive
                      ? "border-magenta bg-soft-pink/50"
                      : "border-pit bg-white hover:border-magenta/30"
                  )}
                >
                  <p className="text-sm font-bold text-navy">{principle.title}</p>
                  <p className="mt-1 text-xs text-secondary-pit">{principle.mapsTo}</p>
                </button>
              );
            })}
          </div>

          <div className="border border-pit bg-pit-grey/60 p-6 sm:p-8 lg:col-span-7">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-magenta">
              {active.acronym}
            </p>
            <h3 className="mb-3 text-xl font-extrabold text-navy sm:text-2xl">{active.title}</h3>
            <p className="mb-4 text-sm leading-relaxed text-secondary-pit sm:text-base">
              {active.description}
            </p>
            <p className="border-t border-pit pt-4 text-sm font-medium text-navy">
              {active.trustPoint}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
