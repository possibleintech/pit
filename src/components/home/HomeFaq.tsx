"use client";

import { useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { FAQ_ITEMS } from "@/lib/constants";
import { MotionSection } from "@/components/common/MotionSection";

export function HomeFaq() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="scroll-mt-24 bg-white py-14 sm:py-20 lg:py-24 border-b border-[#E8E8ED]" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionSection className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCEAF4] border border-[#E20A96]/20 text-[#E20A96] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles size={13} />
            <span>Clear Answers</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#292D3D] leading-tight">
            Frequently Asked <span className="text-[#E20A96]">Questions</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#53596A]">
            Have a question about working with PIT? Find answers below or message us directly.
          </p>
        </MotionSection>

        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={cn(
                  "border rounded-2xl overflow-hidden transition-all duration-200",
                  isOpen
                    ? "border-[#E20A96]/40 bg-[#FCEAF4]/20 shadow-xs"
                    : "border-[#E8E8ED] bg-white hover:border-[#E20A96]/30"
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left transition-colors cursor-pointer"
                >
                  <span className="flex-1 min-w-0 text-sm sm:text-base font-bold text-[#292D3D] leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors",
                      isOpen ? "bg-[#E20A96] text-white" : "bg-[#F7F7FA] text-[#53596A]"
                    )}
                  >
                    <ChevronDown
                      size={16}
                      className={cn("transition-transform duration-200", isOpen && "rotate-180")}
                    />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 text-xs sm:text-sm text-[#53596A] leading-relaxed border-t border-[#E8E8ED]/60 pt-3.5">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
