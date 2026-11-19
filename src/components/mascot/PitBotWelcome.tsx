"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Zap, Award, ArrowUpRight } from "lucide-react";
import { PitBot } from "./PitBot";

const HERO_BUBBLE_MESSAGES = [
  "Hi! I'm PIT BOT 👋",
  "Your business, possible online! 🚀",
  "Modern websites & e-commerce ✨",
  "Google SEO & high-conversion design 📈",
];

export function PitBotWelcome() {
  const [bubbleIndex, setBubbleIndex] = useState(0);
  const [clickCount, setClickCount] = useState(0);

  // Cycle messages smoothly
  useEffect(() => {
    const timer = setInterval(() => {
      setBubbleIndex((prev) => (prev + 1) % HERO_BUBBLE_MESSAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleClick = () => {
    setClickCount((prev) => prev + 1);
    setBubbleIndex((prev) => (prev + 1) % HERO_BUBBLE_MESSAGES.length);
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-center py-4 select-none">
      {/* Dynamic Speech Bubble */}
      <AnimatePresence mode="wait">
        <motion.div
          key={bubbleIndex}
          initial={{ opacity: 0, y: 10, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.94 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          onClick={handleClick}
          className="mb-4 sm:mb-6 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white border border-[#E8E8ED] shadow-[0_10px_30px_rgba(41,45,61,0.08)] flex items-center gap-2.5 z-20 cursor-pointer hover:border-[#E20A96]/40 hover:shadow-[0_12px_36px_rgba(226,10,150,0.15)] transition-all group"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#E20A96] animate-pulse shrink-0" />
          <span className="text-xs sm:text-sm font-bold text-[#292D3D] group-hover:text-[#E20A96] transition-colors whitespace-nowrap">
            {HERO_BUBBLE_MESSAGES[bubbleIndex]}
          </span>
          <span className="text-[10px] text-[#53596A]/60 font-semibold group-hover:text-[#E20A96] transition-colors hidden sm:inline">
            (click me!)
          </span>
          {/* Bubble Pointer Arrow */}
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-b border-r border-[#E8E8ED] rotate-45" />
        </motion.div>
      </AnimatePresence>

      {/* Main Mascot Stage Container */}
      <div className="relative flex items-center justify-center">
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
          image="/assets/pit-bot/pit-bot-wave.png"
          alt="PIT BOT welcoming you to Possible In Tech"
          size="hero"
          animation="float"
          priority={true}
          interactive={true}
          onClick={handleClick}
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
            <div className="text-[10px] text-[#53596A] font-semibold uppercase tracking-wider">Performance</div>
            <div className="text-xs sm:text-sm font-extrabold text-[#292D3D]">99.9% Uptime</div>
          </div>
        </motion.div>

        {/* Floating Stat Card 2: Bottom Right */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute -bottom-4 -right-4 sm:-right-8 bg-white/95 backdrop-blur-md border border-[#E8E8ED] rounded-2xl p-3 sm:p-3.5 shadow-[0_8px_24px_rgba(41,45,61,0.08)] flex items-center gap-2.5 z-10 pointer-events-none"
        >
          <div className="w-8 h-8 rounded-xl bg-[#FCEAF4] text-[#E20A96] flex items-center justify-center shrink-0">
            <Award size={16} />
          </div>
          <div>
            <div className="text-[10px] text-[#53596A] font-semibold uppercase tracking-wider">Results</div>
            <div className="text-xs sm:text-sm font-extrabold text-[#292D3D]">Google PageSpeed 95+</div>
          </div>
        </motion.div>

        {/* Mascot Name Badge Bottom Center */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#292D3D] text-white text-[11px] font-bold shadow-md tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E20A96] animate-ping" />
          <span>PIT BOT</span>
          <span className="text-[#E8E8ED]/70 font-normal">| Official Mascot</span>
        </div>
      </div>
    </div>
  );
}
