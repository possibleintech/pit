"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Code, Heart, Zap } from "lucide-react";

interface PitCharacterProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  showBubble?: boolean;
  bubbleText?: string;
  interactive?: boolean;
  variant?: "floating" | "waving" | "coding" | "hero";
}

const DEFAULT_BUBBLES = [
  "Hi! Welcome to PIT 👋",
  "Your business, possible online! 🚀",
  "We build fast modern websites 💻",
  "E-commerce stores ready to sell 🛍️",
  "Rank #1 on Google with SEO 📈",
];

export function PitCharacter({
  size = "md",
  className = "",
  showBubble = true,
  bubbleText,
  interactive = true,
  variant = "floating",
}: PitCharacterProps) {
  const [bubbleIndex, setBubbleIndex] = useState(0);
  const [isWaving, setIsWaving] = useState(variant === "waving");
  const [isBlinking, setIsBlinking] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Auto blink eyes every 3.5 seconds
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 180);
    }, 3500);
    return () => clearInterval(blinkInterval);
  }, []);

  // Cycle speech bubbles periodically if no static text provided
  useEffect(() => {
    if (bubbleText) return;
    const interval = setInterval(() => {
      setBubbleIndex((prev) => (prev + 1) % DEFAULT_BUBBLES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [bubbleText]);

  const sizeClasses = {
    sm: "w-14 h-16",
    md: "w-28 h-32",
    lg: "w-44 h-48",
    xl: "w-60 h-64 sm:w-72 sm:h-76",
  }[size];

  const currentText = bubbleText || DEFAULT_BUBBLES[bubbleIndex];

  return (
    <div
      className={`relative inline-flex flex-col items-center select-none ${className}`}
      onMouseEnter={() => {
        setIsHovered(true);
        if (interactive) setIsWaving(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        if (variant !== "waving") setIsWaving(false);
      }}
      onClick={() => {
        if (interactive) {
          setIsWaving(true);
          setBubbleIndex((prev) => (prev + 1) % DEFAULT_BUBBLES.length);
          setTimeout(() => setIsWaving(false), 2000);
        }
      }}
    >
      {/* Speech Bubble */}
      {showBubble && (
        <AnimatePresence mode="wait">
          <motion.div
            key={currentText}
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="mb-2 sm:mb-3 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-2xl bg-white border border-[#E8E8ED] shadow-[0_6px_20px_rgba(41,45,61,0.08)] flex items-center gap-1.5 z-20 cursor-pointer pointer-events-auto"
          >
            <span className="w-2 h-2 rounded-full bg-[#E20A96] animate-pulse shrink-0" />
            <span className="text-[11px] sm:text-xs font-bold text-[#292D3D] whitespace-nowrap">
              {currentText}
            </span>
            {/* Speech bubble pointer arrow */}
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-b border-r border-[#E8E8ED] rotate-45" />
          </motion.div>
        </AnimatePresence>
      )}

      {/* Floating Animated Character Body */}
      <motion.div
        animate={{
          y: isHovered ? [0, -12, 0] : [0, -7, 0],
          rotate: isHovered ? [-1, 2, -1] : [-0.5, 0.5, -0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`relative ${sizeClasses} cursor-pointer`}
      >
        {/* Soft Ambient Glow under Character */}
        <div
          className="absolute inset-0 rounded-full blur-xl opacity-40 pointer-events-none -z-10"
          style={{
            background: "radial-gradient(circle, rgba(226, 10, 150, 0.45) 0%, rgba(252, 234, 244, 0.2) 60%, transparent 80%)",
          }}
        />

        <svg
          viewBox="0 0 200 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_10px_25px_rgba(41,45,61,0.14)]"
        >
          {/* DEFINITIONS & GRADIENTS */}
          <defs>
            {/* Metallic Head & Body Gradient */}
            <linearGradient id="pitHeadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="60%" stopColor="#F7F7FA" />
              <stop offset="100%" stopColor="#E8E8ED" />
            </linearGradient>

            {/* Dark Visor Gradient */}
            <linearGradient id="pitVisorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1E222F" />
              <stop offset="100%" stopColor="#292D3D" />
            </linearGradient>

            {/* Magenta Swirl Antenna Gradient */}
            <linearGradient id="pitMagentaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF2BAF" />
              <stop offset="100%" stopColor="#E20A96" />
            </linearGradient>

            {/* Cyan/Sky Eye Glow Gradient */}
            <linearGradient id="pitEyeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00F0FF" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>

            {/* Shadow Filter */}
            <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* ANTENNA SWIRL (Inspired by the PIT Logo) */}
          <g>
            {/* Curved Swirl Path */}
            <path
              d="M100 48 C96 30, 80 16, 68 18 C58 20, 56 32, 66 38 C76 44, 96 46, 100 48 Z"
              fill="url(#pitMagentaGrad)"
              className="transition-all duration-300"
            />
            {/* Glowing Orbit Pixel at Tip */}
            <circle
              cx="64"
              cy="20"
              r="6.5"
              fill="#E20A96"
              filter="url(#softGlow)"
            />
            <circle cx="64" cy="20" r="3.5" fill="#FFFFFF" />
            {/* Mini Satellite Pixel */}
            <rect
              x="50"
              y="12"
              width="5"
              height="5"
              rx="1"
              fill="#E20A96"
              opacity="0.8"
            />
          </g>

          {/* HEADSET / EAR NODES */}
          {/* Left Ear Node */}
          <rect
            x="36"
            y="76"
            width="12"
            height="32"
            rx="6"
            fill="#E20A96"
            stroke="#292D3D"
            strokeWidth="2"
          />
          <circle cx="42" cy="92" r="3" fill="#FCEAF4" />

          {/* Right Ear Node */}
          <rect
            x="152"
            y="76"
            width="12"
            height="32"
            rx="6"
            fill="#E20A96"
            stroke="#292D3D"
            strokeWidth="2"
          />
          <circle cx="158" cy="92" r="3" fill="#FCEAF4" />

          {/* HEAD SHELL */}
          <rect
            x="44"
            y="48"
            width="112"
            height="94"
            rx="32"
            fill="url(#pitHeadGrad)"
            stroke="#E8E8ED"
            strokeWidth="3"
          />

          {/* Top Head Highlight */}
          <path
            d="M68 54 C80 50, 120 50, 132 54"
            stroke="#FFFFFF"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* VISOR (Face Screen) */}
          <rect
            x="56"
            y="64"
            width="88"
            height="62"
            rx="20"
            fill="url(#pitVisorGrad)"
            stroke="#292D3D"
            strokeWidth="2.5"
          />

          {/* VISOR GLOSS REFLECTION */}
          <path
            d="M62 70 Q100 66 138 72 Q130 84 64 84 Z"
            fill="#FFFFFF"
            opacity="0.08"
          />

          {/* EYES (Animated Cyan Glowing Ovals) */}
          <g>
            {/* Left Eye */}
            <ellipse
              cx="80"
              cy="95"
              rx="8.5"
              ry={isBlinking ? 1 : 12}
              fill="url(#pitEyeGrad)"
              filter="url(#softGlow)"
              className="transition-all duration-150"
            />
            {!isBlinking && (
              <>
                <circle cx="82" cy="91" r="3" fill="#FFFFFF" />
                <circle cx="78" cy="99" r="1.5" fill="#FFFFFF" opacity="0.7" />
              </>
            )}

            {/* Right Eye */}
            <ellipse
              cx="120"
              cy="95"
              rx="8.5"
              ry={isBlinking ? 1 : 12}
              fill="url(#pitEyeGrad)"
              filter="url(#softGlow)"
              className="transition-all duration-150"
            />
            {!isBlinking && (
              <>
                <circle cx="122" cy="91" r="3" fill="#FFFFFF" />
                <circle cx="118" cy="99" r="1.5" fill="#FFFFFF" opacity="0.7" />
              </>
            )}

            {/* Cheerful Blush Cheeks */}
            <circle cx="68" cy="108" r="4.5" fill="#E20A96" opacity="0.45" />
            <circle cx="132" cy="108" r="4.5" fill="#E20A96" opacity="0.45" />

            {/* Cute Smile */}
            <path
              d="M93 108 Q100 115 107 108"
              stroke="#00F0FF"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              filter="url(#softGlow)"
            />
          </g>

          {/* NECK CONNECTOR */}
          <rect
            x="88"
            y="142"
            width="24"
            height="10"
            rx="4"
            fill="#292D3D"
          />
          <circle cx="100" cy="147" r="2.5" fill="#E20A96" />

          {/* FLOATING BODY CHASSIS */}
          <path
            d="M66 152 C66 148, 134 148, 134 152 L128 196 C128 204, 72 204, 72 196 Z"
            fill="url(#pitHeadGrad)"
            stroke="#E8E8ED"
            strokeWidth="3"
          />

          {/* CHEST CORE BADGE (PIT Emblem) */}
          <rect
            x="84"
            y="160"
            width="32"
            height="22"
            rx="8"
            fill="#292D3D"
          />
          {/* Magenta Core Light */}
          <circle cx="100" cy="171" r="5" fill="#E20A96" filter="url(#softGlow)" />
          <circle cx="100" cy="171" r="2.5" fill="#FFFFFF" />

          {/* Micro Code Indicators on Body */}
          <rect x="76" y="188" width="16" height="3" rx="1.5" fill="#E20A96" opacity="0.7" />
          <rect x="96" y="188" width="12" height="3" rx="1.5" fill="#38BDF8" opacity="0.7" />
          <rect x="112" y="188" width="12" height="3" rx="1.5" fill="#292D3D" opacity="0.5" />

          {/* DETACHED FLOATING HANDS */}
          {/* Left Hand */}
          <g>
            <motion.circle
              cx="44"
              cy={isWaving ? 140 : 166}
              r="10"
              fill="#FFFFFF"
              stroke="#E8E8ED"
              strokeWidth="2.5"
              animate={isWaving ? { y: [-6, 6, -6], rotate: [0, 20, 0] } : { y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <circle cx="44" cy={isWaving ? 140 : 166} r="4" fill="#E20A96" opacity="0.6" />
          </g>

          {/* Right Hand (Waving Hand!) */}
          <g>
            <motion.g
              animate={
                isWaving
                  ? {
                      y: [-12, -4, -12],
                      rotate: [-20, 25, -20],
                      transformOrigin: "156px 145px",
                    }
                  : { y: [0, -3, 0] }
              }
              transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <circle
                cx="156"
                cy={isWaving ? 138 : 166}
                r="10"
                fill="#FFFFFF"
                stroke="#E8E8ED"
                strokeWidth="2.5"
              />
              <circle cx="156" cy={isWaving ? 138 : 166} r="4" fill="#E20A96" />
              {isWaving && (
                /* Wave Action Lines */
                <path
                  d="M170 128 Q176 138 170 148"
                  stroke="#E20A96"
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.8"
                />
              )}
            </motion.g>
          </g>
        </svg>

        {/* Floating Sparkle Particles around Character */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.6, 1, 0.6],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1 -right-2 text-[#E20A96]"
        >
          <Sparkles size={16} />
        </motion.div>

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.9, 0.5],
            y: [0, -4, 0],
          }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-1 -left-2 text-[#00F0FF]"
        >
          <Zap size={14} />
        </motion.div>
      </motion.div>
    </div>
  );
}
