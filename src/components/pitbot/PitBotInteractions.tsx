"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Award, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { PitBot } from "./PitBot";
import { usePitBot } from "./PitBotController";
import { PITBOT_SERVICE_GUIDES } from "./pitBotMessages";
import { PitBotPose } from "./pitBotAnimations";

/**
 * Homepage Hero Interactive Mascot Showcase
 */
export function PitBotHeroShowcase() {
  const {
    heroPose,
    heroAnimation,
    heroMessage,
    triggerHeroClick,
  } = usePitBot();

  return (
    <motion.div
      initial={{ opacity: 0, y: 35, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full flex flex-col items-center justify-center py-4 select-none"
    >
      {/* Dynamic Speech Bubble */}
      <div className="z-20 min-h-[50px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {heroMessage && (
            <motion.div
              key={heroMessage}
              initial={{ opacity: 0, y: 8, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.94 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              onClick={triggerHeroClick}
              className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white border border-[#E8E8ED] shadow-[0_10px_30px_rgba(41,45,61,0.08)] flex items-center gap-2.5 cursor-pointer hover:border-[#E20A96]/40 hover:shadow-[0_12px_36px_rgba(226,10,150,0.15)] transition-all group"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#E20A96] animate-pulse shrink-0" />
              <span className="text-xs sm:text-sm font-bold text-[#292D3D] group-hover:text-[#E20A96] transition-colors whitespace-nowrap">
                {heroMessage}
              </span>
              <span className="text-[10px] text-[#53596A]/60 font-semibold group-hover:text-[#E20A96] transition-colors hidden sm:inline">
                (click me!)
              </span>
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-b border-r border-[#E8E8ED] rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Main Mascot Stage Container */}
      <div className="relative flex items-center justify-center mt-2">
        {/* Soft Ambient Magenta Halo */}
        <div
          className="absolute w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] rounded-full pointer-events-none blur-3xl opacity-60 -z-10"
          style={{
            background:
              "radial-gradient(circle, rgba(226, 10, 150, 0.32) 0%, rgba(252, 234, 244, 0.6) 50%, transparent 75%)",
          }}
        />

        {/* Circular Tech Orbit Ring Accent */}
        <div className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full border border-dashed border-[#E20A96]/20 pointer-events-none animate-[spin_60s_linear_infinite] -z-10" />

        {/* Main PIT BOT Character */}
        <PitBot
          pose={heroPose}
          alt="PIT BOT welcoming you to Possible In Tech"
          size="hero"
          animation={heroAnimation}
          priority={true}
          interactive={true}
          onClick={triggerHeroClick}
        />

        {/* Floating Stat Card 1: Top Left */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-3 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md border border-[#E8E8ED] rounded-2xl p-3 sm:p-3.5 shadow-[0_8px_24px_rgba(41,45,61,0.08)] flex items-center gap-2.5 z-10 pointer-events-none"
        >
          <div className="w-8 h-8 rounded-xl bg-[#FCEAF4] text-[#E20A96] flex items-center justify-center shrink-0">
            <Zap size={16} />
          </div>
          <div>
            <div className="text-[10px] text-[#53596A] font-semibold uppercase tracking-wider">
              Performance
            </div>
            <div className="text-xs sm:text-sm font-extrabold text-[#292D3D]">
              99.9% Uptime
            </div>
          </div>
        </motion.div>

        {/* Floating Stat Card 2: Bottom Right */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 4.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute -bottom-4 -right-4 sm:-right-8 bg-white/95 backdrop-blur-md border border-[#E8E8ED] rounded-2xl p-3 sm:p-3.5 shadow-[0_8px_24px_rgba(41,45,61,0.08)] flex items-center gap-2.5 z-10 pointer-events-none"
        >
          <div className="w-8 h-8 rounded-xl bg-[#FCEAF4] text-[#E20A96] flex items-center justify-center shrink-0">
            <Award size={16} />
          </div>
          <div>
            <div className="text-[10px] text-[#53596A] font-semibold uppercase tracking-wider">
              Results
            </div>
            <div className="text-xs sm:text-sm font-extrabold text-[#292D3D]">
              Google PageSpeed 95+
            </div>
          </div>
        </motion.div>

        {/* Mascot Name Badge Bottom Center */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#292D3D] text-white text-[11px] font-bold shadow-md tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E20A96] animate-ping" />
          <span>PIT BOT</span>
          <span className="text-[#E8E8ED]/70 font-normal">| Official Mascot</span>
        </div>
      </div>
    </motion.div>
  );
}

/**
 * Interactive Services Guide Component featuring PIT BOT
 */
export function PitBotServicesInteractiveGuide() {
  const [selectedService, setSelectedService] = useState<string>("website-development");

  const guide = PITBOT_SERVICE_GUIDES[selectedService] || PITBOT_SERVICE_GUIDES["website-development"];

  const servicesList = [
    { id: "website-development", label: "Website Development" },
    { id: "ecommerce-stores", label: "E-commerce" },
    { id: "search-engine-optimization", label: "SEO Services" },
    { id: "analytics-tracking", label: "Analytics & Tracking" },
  ];

  return (
    <div className="w-full bg-white border border-[#E8E8ED] rounded-3xl p-6 sm:p-8 shadow-[0_10px_35px_rgba(41,45,61,0.06)] mb-12 sm:mb-16 relative overflow-hidden">
      {/* Background soft pink ambient light */}
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none blur-3xl opacity-40 -z-10"
        style={{
          background: "radial-gradient(circle, rgba(226, 10, 150, 0.2) 0%, transparent 70%)",
        }}
      />

      <div className="grid lg:grid-cols-12 gap-8 items-center">
        {/* Left: Mascot with Speech Bubble */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <PitBot
            pose={guide.pose}
            alt="PIT BOT Guide"
            size="lg"
            animation="floating"
            glow={true}
            message={guide.message}
            speechBubblePosition="top"
          />
        </div>

        {/* Right: Service Selector Tabs & Details */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCEAF4] text-[#E20A96] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles size={12} />
            <span>PIT BOT Smart Guide</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold text-[#292D3D] mb-2 tracking-tight">
            How PIT BOT Powers Your Growth
          </h3>

          <p className="text-xs sm:text-sm text-[#53596A] mb-5 leading-relaxed">
            Hover or tap any service below to see how our engineering stack accelerates your business.
          </p>

          {/* Interactive Service Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
            {servicesList.map((srv) => {
              const isSelected = selectedService === srv.id;
              return (
                <button
                  key={srv.id}
                  onClick={() => setSelectedService(srv.id)}
                  onMouseEnter={() => setSelectedService(srv.id)}
                  className={`px-3 py-2.5 rounded-2xl text-xs font-bold text-center transition-all cursor-pointer border ${
                    isSelected
                      ? "bg-[#292D3D] text-white border-[#292D3D] shadow-md scale-[1.02]"
                      : "bg-[#F7F7FA] text-[#53596A] border-[#E8E8ED] hover:bg-[#FCEAF4] hover:text-[#E20A96] hover:border-[#E20A96]/30"
                  }`}
                >
                  {srv.label}
                </button>
              );
            })}
          </div>

          {/* Active Feature Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#F7F7FA] border border-[#E8E8ED] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#E20A96] mb-1">
                Selected Discipline
              </p>
              <h4 className="text-sm sm:text-base font-extrabold text-[#292D3D]">
                {guide.headline}
              </h4>
            </div>

            <Link
              href={`/services#${selectedService}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#E20A96] hover:bg-[#C40882] text-white text-xs font-bold transition-all shadow-xs shrink-0"
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

/**
 * Form Celebration Mascot Reaction
 */
export function PitBotFormCelebration({ fullName }: { fullName: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="max-w-2xl mx-auto px-4 sm:px-6 text-center py-6"
    >
      <div className="flex justify-center mb-4">
        <PitBot
          pose="celebrate"
          alt="PIT BOT celebrating successful inquiry submission"
          size="lg"
          animation="celebrating"
          glow={true}
          glowIntensity="vibrant"
          speechBubble={`Hooray, ${fullName || "friend"}! Your inquiry is in safe hands! 🎉`}
        />
      </div>

      <div className="w-14 h-14 rounded-full bg-[#FCEAF4] text-[#E20A96] flex items-center justify-center mx-auto mb-4 shadow-xs">
        <CheckCircle2 size={32} />
      </div>

      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#292D3D] mb-3">
        Inquiry Received Successfully!
      </h3>

      <p className="text-sm sm:text-base text-[#53596A] leading-relaxed mb-6">
        Thank you, {fullName}. Our engineering team at PIT will review your requirements and reach out within 24 hours with a tailored technical roadmap.
      </p>
    </motion.div>
  );
}
