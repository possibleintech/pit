"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { HOME_HERO_SHOWCASE, PROJECTS } from "@/lib/constants";
import { PitBot, usePitBot } from "@/components/pitbot";
import { cn } from "@/lib/utils";

export function HeroProjectShowcase() {
  const { heroPose, heroAnimation, triggerHeroClick } = usePitBot();
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (paused || reduced || PROJECTS.length < 2) return;
    const id = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % PROJECTS.length);
    }, HOME_HERO_SHOWCASE.intervalMs);
    return () => window.clearInterval(id);
  }, [paused, reduced]);

  const active = PROJECTS[activeIndex] ?? PROJECTS[0];

  return (
    <div
      className="relative"
      aria-roledescription="carousel"
      aria-label={HOME_HERO_SHOWCASE.label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
          setPaused(false);
        }
      }}
    >
      <div className="relative overflow-hidden rounded-2xl border border-pit bg-pit-grey shadow-[0_24px_60px_rgba(41,45,61,0.12)]">
        <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between bg-navy/90 px-4 py-2.5 text-xs text-white/80 backdrop-blur-sm">
          <span className="font-semibold text-white">{active.name}</span>
          <span className="truncate pl-3">{active.category}</span>
        </div>

        <div className="relative aspect-[16/10] w-full pt-9">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduced ? 0 : 0.45 }}
              className="absolute inset-0 top-9"
            >
              <Image
                src={active.image}
                alt={active.imageAlt}
                fill
                priority={activeIndex === 0}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="absolute inset-x-0 bottom-3 z-20 flex justify-center gap-1.5">
          {PROJECTS.map((project, index) => (
            <button
              key={project.id}
              type="button"
              aria-label={`Show ${project.name}`}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                index === activeIndex
                  ? "w-5 bg-magenta"
                  : "w-1.5 bg-white/70 hover:bg-white"
              )}
            />
          ))}
        </div>
      </div>

      <div className="absolute -bottom-4 -right-2 z-30 sm:-bottom-6 sm:-right-4">
        <PitBot
          pose={heroPose}
          alt="PIT BOT welcoming visitors"
          size="md"
          animation={heroAnimation}
          interactive
          onClick={triggerHeroClick}
          glow
          className="drop-shadow-[0_12px_28px_rgba(41,45,61,0.2)]"
        />
      </div>
    </div>
  );
}
