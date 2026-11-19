"use client";

import React, { ReactNode } from "react";
import { motion, useReducedMotion, type TargetAndTransition } from "framer-motion";

export type PitBotAnimationType =
  | "float"
  | "subtle"
  | "wave"
  | "pulse"
  | "bounce"
  | "none";

interface PitBotAnimationProps {
  children: ReactNode;
  animation?: PitBotAnimationType;
  className?: string;
  interactive?: boolean;
  onClick?: () => void;
}

export function PitBotAnimation({
  children,
  animation = "float",
  className = "",
  interactive = true,
  onClick,
}: PitBotAnimationProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion || animation === "none") {
    return (
      <div
        className={`relative inline-block ${className}`}
        onClick={onClick}
      >
        {children}
      </div>
    );
  }

  // Animation variants
  const getAnimationKeyframes = (): TargetAndTransition => {
    switch (animation) {
      case "float":
        return {
          y: [0, -8, 0],
          rotate: [-0.5, 0.8, -0.5],
          transition: {
            duration: 3.6,
            repeat: Infinity,
            ease: "easeInOut",
          },
        };
      case "subtle":
        return {
          y: [0, -4, 0],
          scale: [1, 1.015, 1],
          transition: {
            duration: 4.2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        };
      case "wave":
        return {
          rotate: [0, 4, -3, 3, 0],
          y: [0, -3, 0],
          transition: {
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
          },
        };
      case "pulse":
        return {
          scale: [1, 1.03, 1],
          transition: {
            duration: 2.4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        };
      case "bounce":
        return {
          y: [0, -10, 0],
          transition: {
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          },
        };
      default:
        return {};
    }
  };

  return (
    <motion.div
      animate={getAnimationKeyframes()}
      whileHover={
        interactive
          ? {
              y: -8,
              scale: 1.03,
              rotate: 1.2,
              transition: { duration: 0.25, ease: "easeOut" },
            }
          : undefined
      }
      whileTap={interactive ? { scale: 0.97 } : undefined}
      className={`relative inline-block select-none ${interactive ? "cursor-pointer" : ""} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
