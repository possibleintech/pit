"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PitBotAnimation, PitBotAnimationType } from "./PitBotAnimation";

export interface PitBotProps {
  image?: string;
  alt?: string;
  size?: "sm" | "md" | "lg" | "xl" | "hero" | "custom";
  width?: number;
  height?: number;
  className?: string;
  animation?: PitBotAnimationType;
  priority?: boolean;
  glow?: boolean;
  glowIntensity?: "soft" | "medium" | "vibrant";
  speechBubble?: string;
  interactive?: boolean;
  badge?: string;
  onClick?: () => void;
}

const SIZE_PRESETS = {
  sm: "w-14 h-14 sm:w-16 sm:h-16",
  md: "w-28 h-28 sm:w-32 sm:h-32",
  lg: "w-48 h-48 sm:w-56 sm:h-56",
  xl: "w-64 h-64 sm:w-72 sm:h-72",
  hero: "w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px]",
  custom: "",
};

const GLOW_PRESETS = {
  soft: "radial-gradient(circle, rgba(226, 10, 150, 0.22) 0%, rgba(252, 234, 244, 0.4) 45%, transparent 70%)",
  medium: "radial-gradient(circle, rgba(226, 10, 150, 0.35) 0%, rgba(252, 234, 244, 0.5) 50%, transparent 72%)",
  vibrant: "radial-gradient(circle, rgba(226, 10, 150, 0.5) 0%, rgba(252, 234, 244, 0.6) 55%, transparent 75%)",
};

export function PitBot({
  image = "/assets/pit-bot/pit-bot-wave.png",
  alt = "PIT BOT - Official Possible In Tech Mascot",
  size = "md",
  width,
  height,
  className = "",
  animation = "float",
  priority = false,
  glow = false,
  glowIntensity = "medium",
  speechBubble,
  interactive = true,
  badge,
  onClick,
}: PitBotProps) {
  const [imgError, setImgError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const containerSizeClass = size !== "custom" ? SIZE_PRESETS[size] : "";

  return (
    <div
      className={`relative inline-flex flex-col items-center ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Speech Bubble */}
      {speechBubble && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.92 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mb-2 sm:mb-3 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-2xl bg-white border border-[#E8E8ED] shadow-[0_8px_24px_rgba(41,45,61,0.08)] flex items-center gap-2 z-20 pointer-events-auto"
          >
            <span className="w-2 h-2 rounded-full bg-[#E20A96] animate-pulse shrink-0" />
            <span className="text-[11px] sm:text-xs font-bold text-[#292D3D] whitespace-nowrap">
              {speechBubble}
            </span>
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-b border-r border-[#E8E8ED] rotate-45" />
          </motion.div>
        </AnimatePresence>
      )}

      {/* Main Mascot Animation Container */}
      <PitBotAnimation
        animation={animation}
        interactive={interactive}
        onClick={onClick}
        className={containerSizeClass}
      >
        {/* Soft Ambient Glow Halo behind PIT BOT */}
        {glow && (
          <div
            className="absolute -inset-4 sm:-inset-8 rounded-full pointer-events-none blur-2xl -z-10 transition-opacity duration-500"
            style={{
              background: GLOW_PRESETS[glowIntensity],
              opacity: isHovered ? 0.95 : 0.75,
            }}
          />
        )}

        {/* Mascot Image */}
        <div className="relative w-full h-full flex items-center justify-center">
          {!imgError ? (
            <Image
              src={image}
              alt={alt}
              width={width || 500}
              height={height || 500}
              priority={priority}
              onError={() => setImgError(true)}
              className="w-full h-full object-contain filter drop-shadow-[0_12px_28px_rgba(41,45,61,0.12)] transition-transform duration-300"
            />
          ) : (
            // Fallback Vector Render if image path fails
            <div className="w-full h-full flex items-center justify-center p-4 bg-[#FCEAF4] rounded-full border-2 border-[#E20A96]">
              <span className="text-xs font-bold text-[#E20A96]">PIT BOT</span>
            </div>
          )}

          {/* Optional Badge over character */}
          {badge && (
            <div className="absolute -top-2 -right-2 px-2.5 py-0.5 rounded-full bg-[#E20A96] text-white text-[10px] font-bold shadow-md uppercase tracking-wider">
              {badge}
            </div>
          )}
        </div>
      </PitBotAnimation>
    </div>
  );
}
