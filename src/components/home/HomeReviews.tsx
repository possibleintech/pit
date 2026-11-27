"use client";

import { Star } from "lucide-react";
import { CLIENT_REVIEWS } from "@/lib/constants";
import { SectionHeader } from "@/components/common/SectionHeader";
import { MotionSection } from "@/components/common/MotionSection";
import { ScrollRow, ScrollRowItem } from "@/components/common/ScrollRow";

function ReviewCard({ review }: { review: (typeof CLIENT_REVIEWS)[number] }) {
  return (
    <article className="flex h-full flex-col justify-between border border-pit bg-white p-6">
      <div>
        <div className="mb-4 flex gap-1">
          {Array.from({ length: review.rating }).map((_, index) => (
            <Star key={index} size={14} className="fill-amber-400 text-amber-400" />
          ))}
        </div>
        <p className="mb-5 text-sm leading-relaxed text-secondary-pit">
          &ldquo;{review.text}&rdquo;
        </p>
      </div>
      <div className="border-t border-pit pt-4">
        <p className="text-sm font-bold text-navy">{review.name}</p>
        <p className="text-xs text-secondary-pit">Verified partner</p>
      </div>
    </article>
  );
}

export function HomeReviews() {
  return (
    <section className="section-shell scroll-mt-24 bg-pit-grey" id="reviews">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          className="mb-10 sm:mb-14"
          eyebrow="Reviews"
          title="Trusted by"
          titleHighlight="growing businesses"
          subtitle="Outcomes and feedback from teams that partnered with PIT."
        />

        <div className="sm:hidden">
          <ScrollRow>
            {CLIENT_REVIEWS.map((review) => (
              <ScrollRowItem key={review.id}>
                <ReviewCard review={review} />
              </ScrollRowItem>
            ))}
          </ScrollRow>
        </div>

        <MotionSection className="hidden gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {CLIENT_REVIEWS.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </MotionSection>
      </div>
    </section>
  );
}
