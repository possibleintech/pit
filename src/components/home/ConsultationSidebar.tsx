"use client";

import { CONTACT } from "@/lib/constants";
import { PitBot } from "@/components/pitbot";
import { ContactPhoneList } from "@/components/common/ContactPhoneList";

export function ConsultationSidebar() {
  return (
    <div className="lg:col-span-5">
      <p className="section-eyebrow mb-3">Let&apos;s connect</p>
      <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-navy sm:text-4xl">
        Ready to build something <span className="text-magenta">useful</span>?
      </h2>
      <p className="mb-6 text-sm leading-relaxed text-secondary-pit sm:text-base">
        Share your goals. We will reply with a clear scope and timeline recommendation.
      </p>

      <div className="mb-6 flex items-center gap-4 border border-pit bg-white p-4">
        <PitBot
          pose="pointing"
          alt="PIT BOT pointing to the consultation form"
          size="sm"
          animation="floating"
          glow
        />
        <p className="text-sm font-semibold text-navy">
          Fill the form, or WhatsApp / call either number below — our team usually replies within a
          few hours.
        </p>
      </div>

      <ContactPhoneList source="consultation_sidebar" compact />

      <a
        href={`mailto:${CONTACT.email}`}
        className="mt-4 block text-sm font-semibold text-magenta hover:underline"
      >
        {CONTACT.email}
      </a>
    </div>
  );
}
