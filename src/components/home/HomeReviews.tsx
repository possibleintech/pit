"use client";

import { Star, Quote, Sparkles, CheckCircle2 } from "lucide-react";
import { CLIENT_REVIEWS } from "@/lib/constants";
import { MotionSection } from "@/components/common/MotionSection";
import { ScrollRow, ScrollRowItem } from "@/components/common/ScrollRow";

function ReviewCard({ review }: { review: (typeof CLIENT_REVIEWS)[number] }) {
  return (
    <article className="h-full bg-white border border-[#E8E8ED] rounded-2xl p-6 flex flex-col justify-between shadow-[0_4px_20px_rgba(41,45,61,0.04)] hover:shadow-[0_12px_36px_rgba(226,10,150,0.10)] hover:border-[#E20A96]/30 hover:-translate-y-1 transition-all duration-300">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#FCEAF4] text-[#E20A96] flex items-center justify-center">
            <Quote size={18} />
          </div>
          <div className="flex gap-1">
            {Array.from({ length: review.rating }).map((_, i) => (
              <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
            ))}
          </div>
        </div>
        <p className="text-xs sm:text-sm text-[#53596A] leading-relaxed mb-5 italic">
          &ldquo;{review.text}&rdquo;
        </p>
      </div>

      <div className="pt-4 border-t border-[#E8E8ED]/60 flex items-center justify-between">
        <div>
          <p className="text-sm font-bold text-[#292D3D]">{review.name}</p>
          <span className="text-[11px] text-[#53596A]">Verified Partner</span>
        </div>
        <CheckCircle2 size={16} className="text-[#E20A96]" />
      </div>
    </article>
  );
}

export function HomeReviews() {
  return (
    <section className="scroll-mt-24 bg-[#F7F7FA] py-14 sm:py-20 lg:py-24 border-b border-[#E8E8ED] w-full" id="reviews">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionSection className="w-full text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCEAF4] border border-[#E20A96]/20 text-[#E20A96] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles size={13} />
            <span>Client Feedback</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#292D3D] leading-tight tracking-tight mb-3">
            Trusted by <span className="text-[#E20A96]">Growing Businesses</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#53596A] leading-relaxed">
            Real outcomes and experiences from companies that partnered with PIT for web and digital engineering.
          </p>
          <p className="mt-2 text-[11px] text-[#53596A] sm:hidden">Swipe to read more →</p>
        </MotionSection>

        <div className="sm:hidden">
          <ScrollRow>
            {CLIENT_REVIEWS.map((review) => (
              <ScrollRowItem key={review.id}>
                <ReviewCard review={review} />
              </ScrollRowItem>
            ))}
          </ScrollRow>
        </div>

        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
          {CLIENT_REVIEWS.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
