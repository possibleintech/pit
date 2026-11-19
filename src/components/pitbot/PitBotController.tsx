"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { PitBotPose, PitBotAnimationState } from "./pitBotAnimations";
import { PITBOT_HERO_MESSAGES, PITBOT_CLICK_EASTER_EGGS } from "./pitBotMessages";

interface PitBotState {
  heroPose: PitBotPose;
  heroAnimation: PitBotAnimationState;
  heroMessage: string | null;
  isCtaHovered: boolean;
  clickEasterEggCount: number;
}

interface PitBotContextType extends PitBotState {
  setHeroPose: (pose: PitBotPose) => void;
  setHeroAnimation: (anim: PitBotAnimationState) => void;
  setHeroMessage: (msg: string | null) => void;
  handleCtaHover: (hovering: boolean) => void;
  triggerHeroClick: () => void;
  resetHero: () => void;
}

const PitBotContext = createContext<PitBotContextType | null>(null);

export function PitBotProvider({ children }: { children: ReactNode }) {
  const [heroPose, setHeroPose] = useState<PitBotPose>("wave");
  const [heroAnimation, setHeroAnimation] = useState<PitBotAnimationState>("waving");
  const [heroMessage, setHeroMessage] = useState<string | null>(PITBOT_HERO_MESSAGES.initial);
  const [isCtaHovered, setIsCtaHovered] = useState(false);
  const [clickEasterEggCount, setClickEasterEggCount] = useState(0);

  // Initial entrance sequence on mount
  useEffect(() => {
    // 1. Initial waving & greeting
    setHeroPose("wave");
    setHeroAnimation("waving");
    setHeroMessage(PITBOT_HERO_MESSAGES.initial);

    // 2. Transition after 3.2s to secondary intro message & floating
    const introTimer = setTimeout(() => {
      setHeroAnimation("floating");
      setHeroMessage(PITBOT_HERO_MESSAGES.secondary);
    }, 3200);

    // 3. Optional subtle idle prompt after 25s
    const idleTimer = setTimeout(() => {
      setHeroMessage((prev) =>
        prev === PITBOT_HERO_MESSAGES.secondary ? PITBOT_HERO_MESSAGES.idle : prev
      );
    }, 25000);

    return () => {
      clearTimeout(introTimer);
      clearTimeout(idleTimer);
    };
  }, []);

  // When CTA button is hovered
  const handleCtaHover = (hovering: boolean) => {
    setIsCtaHovered(hovering);
    if (hovering) {
      setHeroPose("pointing");
      setHeroAnimation("pointing");
      setHeroMessage(PITBOT_HERO_MESSAGES.ctaHover);
    } else {
      setHeroPose("wave");
      setHeroAnimation("floating");
      setHeroMessage(PITBOT_HERO_MESSAGES.secondary);
    }
  };

  // When visitor clicks PIT BOT in hero
  const triggerHeroClick = () => {
    const nextIdx = clickEasterEggCount % PITBOT_CLICK_EASTER_EGGS.length;
    setClickEasterEggCount((prev) => prev + 1);
    setHeroAnimation("happy");
    setHeroMessage(PITBOT_CLICK_EASTER_EGGS[nextIdx]);

    setTimeout(() => {
      setHeroAnimation("floating");
    }, 2400);
  };

  const resetHero = () => {
    setHeroPose("wave");
    setHeroAnimation("floating");
    setHeroMessage(PITBOT_HERO_MESSAGES.secondary);
  };

  return (
    <PitBotContext.Provider
      value={{
        heroPose,
        heroAnimation,
        heroMessage,
        isCtaHovered,
        clickEasterEggCount,
        setHeroPose,
        setHeroAnimation,
        setHeroMessage,
        handleCtaHover,
        triggerHeroClick,
        resetHero,
      }}
    >
      {children}
    </PitBotContext.Provider>
  );
}

export function usePitBot() {
  const context = useContext(PitBotContext);
  if (!context) {
    // Return safe fallback if used outside provider
    return {
      heroPose: "wave" as PitBotPose,
      heroAnimation: "floating" as PitBotAnimationState,
      heroMessage: PITBOT_HERO_MESSAGES.initial,
      isCtaHovered: false,
      clickEasterEggCount: 0,
      setHeroPose: () => {},
      setHeroAnimation: () => {},
      setHeroMessage: () => {},
      handleCtaHover: () => {},
      triggerHeroClick: () => {},
      resetHero: () => {},
    };
  }
  return context;
}
