"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { FAQ_ITEMS } from "@/lib/constants";
import { SectionHeader } from "@/components/common/SectionHeader";

export function HomeFaq() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);

  return (
    <section className="section-shell scroll-mt-24 bg-white" id="faq">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          className="mb-10 sm:mb-12"
          eyebrow="FAQ"
          title="Frequently asked"
          titleHighlight="questions"
          subtitle="Clear answers about timelines, pricing, support, and how we work."
        />

        <div className="divide-y divide-pit border-y border-pit">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id}>
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-sm font-bold text-navy sm:text-base">{item.question}</span>
                  <ChevronDown
                    size={18}
                    className={cn(
                      "shrink-0 text-secondary-pit transition-transform",
                      isOpen && "rotate-180 text-magenta"
                    )}
                  />
                </button>
                {isOpen ? (
                  <p className="pb-5 text-sm leading-relaxed text-secondary-pit">{item.answer}</p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
