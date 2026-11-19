"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface PitBotSpeechBubbleProps {
  message?: string | null;
  position?: "top" | "bottom" | "left" | "right";
  showDot?: boolean;
  className?: string;
  onClick?: () => void;
  interactive?: boolean;
  typing?: boolean;
}

export function PitBotSpeechBubble({
  message,
  position = "top",
  showDot = true,
  className = "",
  onClick,
  interactive = true,
  typing = false,
}: PitBotSpeechBubbleProps) {
  if (!message && !typing) return null;

  // Arrow alignment styles based on position
  const arrowClasses = {
    top: "-bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-b border-r border-[#E8E8ED] rotate-45",
    bottom: "-top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-t border-l border-[#E8E8ED] rotate-45",
    left: "-right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-t border-r border-[#E8E8ED] rotate-45",
    right: "-left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-b border-l border-[#E8E8ED] rotate-45",
  }[position];

  const positionMargins = {
    top: "mb-3",
    bottom: "mt-3",
    left: "mr-3",
    right: "ml-3",
  }[position];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={message || "typing"}
        initial={{ opacity: 0, y: position === "top" ? 8 : -8, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: position === "top" ? -6 : 6, scale: 0.94 }}
        transition={{ duration: 0.24, ease: "easeOut" }}
        onClick={onClick}
        className={`relative z-20 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-2xl bg-white border border-[#E8E8ED] shadow-[0_8px_24px_rgba(41,45,61,0.08)] flex items-center gap-2 max-w-xs sm:max-w-md ${positionMargins} ${
          interactive ? "cursor-pointer hover:border-[#E20A96]/40 hover:shadow-[0_10px_28px_rgba(226,10,150,0.12)] transition-all group" : ""
        } ${className}`}
      >
        {/* Magenta Pulsing Status Dot */}
        {showDot && (
          <span className="w-2 h-2 rounded-full bg-[#E20A96] animate-pulse shrink-0" />
        )}

        {/* Message Content */}
        {typing ? (
          <div className="flex items-center gap-1 py-0.5 px-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E20A96] animate-bounce" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#E20A96] animate-bounce [animation-delay:0.2s]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#E20A96] animate-bounce [animation-delay:0.4s]" />
          </div>
        ) : (
          <span className="text-[11px] sm:text-xs font-bold text-[#292D3D] group-hover:text-[#E20A96] transition-colors leading-snug break-words">
            {message}
          </span>
        )}

        {/* Directional Bubble Arrow */}
        <div className={`absolute ${arrowClasses}`} />
      </motion.div>
    </AnimatePresence>
  );
}
