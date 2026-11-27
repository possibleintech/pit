"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ROUTES } from "@/lib/constants";
import { PitBot } from "./PitBot";
import { PITBOT_SERVICE_GUIDES } from "./pitBotMessages";

const SERVICE_OPTIONS = [
  { id: "website-development", label: "Website Development" },
  { id: "ecommerce-stores", label: "E-commerce" },
  { id: "seo", label: "SEO Services" },
  { id: "analytics-tracking", label: "Analytics & Tracking" },
] as const;

export function PitBotServicesInteractiveGuide() {
  const [selectedService, setSelectedService] = useState<string>("website-development");
  const guide =
    PITBOT_SERVICE_GUIDES[selectedService] || PITBOT_SERVICE_GUIDES["website-development"];

  return (
    <div className="relative mb-12 w-full overflow-hidden border border-pit bg-white p-6 sm:mb-16 sm:rounded-3xl sm:p-8 shadow-[0_10px_35px_rgba(41,45,61,0.06)]">
      <div className="grid items-center gap-8 lg:grid-cols-12">
        <div className="flex flex-col items-center justify-center lg:col-span-5">
          <PitBot
            pose={guide.pose}
            alt="PIT BOT Guide"
            size="lg"
            animation="floating"
            glow
            message={guide.message}
            speechBubblePosition="top"
          />
        </div>

        <div className="lg:col-span-7">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-magenta">
            PIT BOT guide
          </p>
          <h3 className="mb-2 text-xl font-extrabold tracking-tight text-navy sm:text-2xl">
            How PIT BOT powers your growth
          </h3>
          <p className="mb-5 text-sm leading-relaxed text-secondary-pit">
            Tap a service to see how our stack helps that part of your business.
          </p>

          <div className="mb-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {SERVICE_OPTIONS.map((service) => {
              const isSelected = selectedService === service.id;
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setSelectedService(service.id)}
                  onMouseEnter={() => setSelectedService(service.id)}
                  className={`cursor-pointer border px-3 py-2.5 text-center text-xs font-bold transition-all ${
                    isSelected
                      ? "border-navy bg-navy text-white"
                      : "border-pit bg-pit-grey text-secondary-pit hover:border-magenta/30 hover:bg-soft-pink hover:text-magenta"
                  }`}
                >
                  {service.label}
                </button>
              );
            })}
          </div>

          <div className="flex flex-col items-start justify-between gap-4 border border-pit bg-pit-grey p-4 sm:flex-row sm:items-center sm:p-5">
            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-wider text-magenta">
                Selected
              </p>
              <h4 className="text-sm font-extrabold text-navy sm:text-base">{guide.headline}</h4>
            </div>
            <Link
              href={`${ROUTES.services}#${selectedService}`}
              className="btn-primary inline-flex shrink-0 items-center gap-1.5 text-xs"
            >
              <span>{guide.ctaText}</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PitBotFormCelebration({ fullName }: { fullName: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="mx-auto max-w-2xl px-4 py-6 text-center sm:px-6"
    >
      <div className="mb-4 flex justify-center">
        <PitBot
          pose="celebrate"
          alt="PIT BOT celebrating successful inquiry submission"
          size="lg"
          animation="celebrating"
          glow
          glowIntensity="vibrant"
          speechBubble={`Hooray, ${fullName || "friend"}! Your inquiry is in safe hands.`}
        />
      </div>

      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-soft-pink text-magenta">
        <CheckCircle2 size={32} />
      </div>

      <h3 className="mb-3 text-2xl font-extrabold text-navy sm:text-3xl">
        Inquiry received successfully
      </h3>
      <p className="mb-6 text-sm leading-relaxed text-secondary-pit sm:text-base">
        Thank you, {fullName}. Our team will review your requirements and reply with next steps.
      </p>
    </motion.div>
  );
}
