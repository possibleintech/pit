"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  PitBotPose,
  PitBotAnimationState,
  PitBotExpression,
  PITBOT_POSE_ASSETS,
} from "./pitBotAnimations";
import { PitBotAnimation } from "./PitBotAnimation";
import { PitBotSpeechBubble } from "./PitBotSpeechBubble";

export interface PitBotProps {
  pose?: PitBotPose;
  image?: string; // Backwards compatibility for direct image path
  alt?: string;
  size?: "sm" | "md" | "lg" | "xl" | "hero" | "custom";
  width?: number;
  height?: number;
  className?: string;
  animation?: PitBotAnimationState;
  expression?: PitBotExpression;
  message?: string | null;
  speechBubble?: string; // alias for message
  speechBubblePosition?: "top" | "bottom" | "left" | "right";
  priority?: boolean;
  glow?: boolean;
  glowIntensity?: "soft" | "medium" | "vibrant";
  interactive?: boolean;
  enableBlink?: boolean;
  enableCursorTilt?: boolean;
  badge?: string;
  onClick?: () => void;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}

const SIZE_PRESETS = {
  sm: "w-14 h-14 sm:w-16 sm:h-16",
  md: "w-28 h-28 sm:w-32 sm:h-32",
  lg: "w-44 h-44 sm:w-52 sm:h-52",
  xl: "w-60 h-60 sm:w-72 sm:h-72",
  hero: "w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px]",
  custom: "",
};

const GLOW_PRESETS = {
  soft: "radial-gradient(circle, rgba(226, 10, 150, 0.22) 0%, rgba(252, 234, 244, 0.4) 45%, transparent 70%)",
  medium: "radial-gradient(circle, rgba(226, 10, 150, 0.35) 0%, rgba(252, 234, 244, 0.5) 50%, transparent 72%)",
  vibrant: "radial-gradient(circle, rgba(226, 10, 150, 0.52) 0%, rgba(252, 234, 244, 0.62) 55%, transparent 75%)",
};

export function PitBot({
  pose = "wave",
  image,
  alt,
  size = "md",
  width,
  height,
  className = "",
  animation = "floating",
  expression = "friendly",
  message,
  speechBubble,
  speechBubblePosition = "top",
  priority = false,
  glow = false,
  glowIntensity = "medium",
  interactive = true,
  enableBlink = true,
  enableCursorTilt = true,
  badge,
  onClick,
  onHoverStart,
  onHoverEnd,
}: PitBotProps) {
  const [imgError, setImgError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Resolve image source and alt from pose or image prop
  const currentAsset = pose && PITBOT_POSE_ASSETS[pose] ? PITBOT_POSE_ASSETS[pose] : null;
  const imageSrc = image || currentAsset?.src || "/assets/pit-bot/pit-bot-wave.webp";
  const imageAlt = alt || currentAsset?.alt || "PIT BOT - Official Possible In Tech Mascot";
  const activeMessage = message || speechBubble;

  const containerSizeClass = size !== "custom" ? SIZE_PRESETS[size] : "";

  return (
    <div
      className={`relative inline-flex flex-col items-center ${className}`}
      onMouseEnter={() => {
        setIsHovered(true);
        onHoverStart?.();
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        onHoverEnd?.();
      }}
    >
      {/* Speech Bubble (Top position) */}
      {speechBubblePosition === "top" && activeMessage && (
        <PitBotSpeechBubble
          message={activeMessage}
          position="top"
          interactive={interactive}
          onClick={onClick}
        />
      )}

      {/* Main Mascot Animation Container */}
      <PitBotAnimation
        animation={animation}
        interactive={interactive}
        enableBlink={enableBlink}
        enableCursorTilt={enableCursorTilt}
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

        {/* Mascot Image with Smooth Cross-Fade Transitions between Poses */}
        <div className="relative w-full h-full flex items-center justify-center">
          <AnimatePresence mode="wait">
            {!imgError ? (
              <motion.div
                key={imageSrc}
                initial={{ opacity: 0.82, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0.82, scale: 0.98 }}
                transition={{ duration: 0.22, ease: "easeInOut" }}
                className="relative w-full h-full flex items-center justify-center"
              >
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={width || 500}
                  height={height || 500}
                  priority={priority}
                  onError={() => setImgError(true)}
                  className="w-full h-full object-contain filter drop-shadow-[0_12px_28px_rgba(41,45,61,0.12)] transition-transform duration-300"
                />
              </motion.div>
            ) : (
              <div className="w-full h-full flex items-center justify-center p-4 bg-[#FCEAF4] rounded-full border-2 border-[#E20A96]">
                <span className="text-xs font-bold text-[#E20A96]">PIT BOT</span>
              </div>
            )}
          </AnimatePresence>

          {/* Optional Badge over character */}
          {badge && (
            <div className="absolute -top-2 -right-2 px-2.5 py-0.5 rounded-full bg-[#E20A96] text-white text-[10px] font-bold shadow-md uppercase tracking-wider">
              {badge}
            </div>
          )}
        </div>
      </PitBotAnimation>

      {/* Speech Bubble (Bottom position) */}
      {speechBubblePosition === "bottom" && activeMessage && (
        <PitBotSpeechBubble
          message={activeMessage}
          position="bottom"
          interactive={interactive}
          onClick={onClick}
        />
      )}
    </div>
  );
}
