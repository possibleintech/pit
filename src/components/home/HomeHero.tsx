"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, CheckCircle2, TrendingUp, ShieldCheck, Zap } from "lucide-react";
import { HOME_HERO, HOME_STATS, PUBLIC_ASSETS } from "@/lib/constants";
import { SectionLink } from "@/components/common/SectionLink";
import { MotionSection } from "@/components/common/MotionSection";
import { MotionStagger, MotionStaggerItem } from "@/components/common/MotionStagger";
import { usePitBot, PitBotHeroShowcase } from "@/components/pitbot";

export function HomeHero() {
  const { handleCtaHover } = usePitBot();
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-20 lg:py-28 border-b border-[#E8E8ED]">
      {/* Subtle Grid Pattern Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(232, 232, 237, 0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(232, 232, 237, 0.7) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Soft Pink Ambient Glow Accents */}
      <div
        className="absolute -top-32 right-0 w-[550px] h-[550px] rounded-full pointer-events-none blur-3xl opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(226, 10, 150, 0.16) 0%, rgba(252, 234, 244, 0.4) 50%, transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-[420px] h-[420px] rounded-full pointer-events-none blur-3xl opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(226, 10, 150, 0.12) 0%, rgba(252, 234, 244, 0.3) 60%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-6 min-w-0">
            <MotionSection>
              {/* Rounded Pink Label Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCEAF4] border border-[#E20A96]/20 text-[#E20A96] text-xs font-bold uppercase tracking-wider mb-5 sm:mb-6 shadow-xs">
                <Sparkles size={13} className="text-[#E20A96]" />
                <span>{HOME_HERO.eyebrow}</span>
              </div>

              {/* Bold Oversized Dark Navy Heading with Magenta-Highlighted Keywords */}
              <h1 className="text-3xl sm:text-5xl lg:text-[3.75rem] font-extrabold text-[#292D3D] leading-[1.12] tracking-tight mb-5">
                <span>Your business,</span>{" "}
                <span className="text-[#E20A96] inline-block relative">
                  possible online.
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-1.5 bg-[#FCEAF4] rounded-full -z-10 transform translate-y-1"
                    aria-hidden
                  />
                </span>
              </h1>

              {/* Compelling Introduction */}
              <p className="text-base sm:text-lg text-[#53596A] leading-relaxed max-w-xl mb-8">
                {HOME_HERO.subheadline}
              </p>

              {/* Clear CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-9">
                <SectionLink
                  href={HOME_HERO.primaryCta.href}
                  onMouseEnter={() => handleCtaHover(true)}
                  onMouseLeave={() => handleCtaHover(false)}
                  onFocus={() => handleCtaHover(true)}
                  onBlur={() => handleCtaHover(false)}
                  className="inline-flex items-center justify-center gap-2 bg-[#E20A96] hover:bg-[#C40882] text-white text-sm sm:text-base font-semibold px-7 py-3.5 rounded-full shadow-[0_6px_22px_rgba(226,10,150,0.28)] hover:shadow-[0_8px_28px_rgba(226,10,150,0.38)] hover:-translate-y-0.5 transition-all text-center"
                >
                  <span>{HOME_HERO.primaryCta.label}</span>
                  <ArrowRight size={16} />
                </SectionLink>

                <Link
                  href={HOME_HERO.secondaryCta.href}
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#FCEAF4]/50 text-[#292D3D] hover:text-[#E20A96] border border-[#E8E8ED] hover:border-[#E20A96]/40 text-sm sm:text-base font-semibold px-7 py-3.5 rounded-full shadow-xs hover:-translate-y-0.5 transition-all text-center"
                >
                  <span>{HOME_HERO.secondaryCta.label}</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Agency Trust Pills */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5 pt-6 border-t border-[#E8E8ED] text-xs text-[#53596A]">
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 size={15} className="text-[#E20A96] shrink-0" />
                  <span>Mobile-First & Ultra-Fast</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 size={15} className="text-[#E20A96] shrink-0" />
                  <span>High-Converting UI/UX</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 size={15} className="text-[#E20A96] shrink-0" />
                  <span>Transparent Agile Delivery</span>
                </div>
              </div>
            </MotionSection>
          </div>

          {/* Right Column: Hero Mascot Showcase & Live Interactive PIT BOT */}
          <div className="lg:col-span-6 min-w-0 flex flex-col items-center justify-center">
            <div className="w-full flex justify-center">
              <PitBotHeroShowcase />
            </div>

            {/* Quick Metrics Strip Under Mascot */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mt-6 pt-6 border-t border-[#E8E8ED]/80">
              {HOME_STATS.map((stat, idx) => (
                <div
                  key={stat.label}
                  className="bg-white border border-[#E8E8ED] rounded-xl p-2.5 sm:p-3 text-center shadow-2xs hover:border-[#E20A96]/30 transition-all"
                >
                  <p className="text-base sm:text-lg font-extrabold text-[#292D3D] tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-[10px] sm:text-[11px] font-semibold text-[#53596A] truncate">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
