"use client";

import React, { ReactNode, useState, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  PitBotAnimationState,
  getPitBotKeyframes,
} from "./pitBotAnimations";

export interface PitBotAnimationProps {
  children: ReactNode;
  animation?: PitBotAnimationState;
  className?: string;
  interactive?: boolean;
  enableBlink?: boolean;
  enableCursorTilt?: boolean;
  onClick?: () => void;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}

export function PitBotAnimation({
  children,
  animation = "floating",
  className = "",
  interactive = true,
  enableBlink = true,
  enableCursorTilt = true,
  onClick,
  onHoverStart,
  onHoverEnd,
}: PitBotAnimationProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isBlinking, setIsBlinking] = useState(false);
  const [cursorOffset, setCursorOffset] = useState({ x: 0, y: 0, rotate: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Natural occasional eye blink / visor pulse (every 4.5s)
  useEffect(() => {
    if (!enableBlink || prefersReducedMotion) return;

    const interval = setInterval(() => {
      setIsBlinking(true);
      const timeout = setTimeout(() => setIsBlinking(false), 160);
      return () => clearTimeout(timeout);
    }, 4500);

    return () => clearInterval(interval);
  }, [enableBlink, prefersReducedMotion]);

  // Subtle bounded cursor tilt (subtle and constrained)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enableCursorTilt || prefersReducedMotion || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) / (rect.width / 2);
    const deltaY = (e.clientY - centerY) / (rect.height / 2);

    // Clamp micro-movements to max 3px and 1.8 degrees
    setCursorOffset({
      x: Math.max(-3, Math.min(3, deltaX * 3)),
      y: Math.max(-2, Math.min(2, deltaY * 2)),
      rotate: Math.max(-1.8, Math.min(1.8, deltaX * 1.8)),
    });
  };

  const handleMouseLeave = () => {
    setCursorOffset({ x: 0, y: 0, rotate: 0 });
    onHoverEnd?.();
  };

  if (prefersReducedMotion || animation === "none") {
    return (
      <div
        ref={containerRef}
        className={`relative inline-block ${className}`}
        onClick={onClick}
      >
        {children}
      </div>
    );
  }

  const baseKeyframes = getPitBotKeyframes(animation);

  return (
    <motion.div
      ref={containerRef}
      animate={baseKeyframes}
      style={{
        transform: `translate3d(${cursorOffset.x}px, ${cursorOffset.y}px, 0px) rotate(${cursorOffset.rotate}deg)`,
        transition: "transform 0.15s ease-out",
      }}
      whileHover={
        interactive
          ? {
              scale: 1.03,
              rotate: 2.2,
              transition: { duration: 0.22, ease: "easeOut" },
            }
          : undefined
      }
      whileTap={interactive ? { scale: 0.96 } : undefined}
      onMouseMove={handleMouseMove}
      onMouseEnter={onHoverStart}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`relative inline-block select-none ${
        interactive ? "cursor-pointer" : ""
      } ${className}`}
    >
      {children}

      {/* Natural LED Eye Blink Overlay */}
      {enableBlink && isBlinking && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.65 }}
          exit={{ opacity: 0 }}
          className="absolute inset-x-[28%] top-[24%] h-[12%] rounded-full bg-[#151821] pointer-events-none z-10 transition-opacity duration-75"
        />
      )}
    </motion.div>
  );
}
