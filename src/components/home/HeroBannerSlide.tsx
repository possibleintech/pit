"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  ShoppingBag,
  TrendingUp,
  Search,
  MessageCircle,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Code,
  Smartphone,
  Globe,
} from "lucide-react";
import { PitBot } from "@/components/pitbot";
import type { HeroBannerSlideProps } from "@/types";

export function HeroBannerSlide({ banner, active, priority }: HeroBannerSlideProps) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-[#1E222F] via-[#292D3D] to-[#151821] text-white">
      {/* Subtle Grid Pattern Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Ambient Gradient Glows */}
      <div
        className="absolute -top-12 -right-12 w-80 h-80 rounded-full blur-3xl opacity-35 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(226, 10, 150, 0.6) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.5) 0%, transparent 70%)",
        }}
      />

      {/* Main Slide Layout */}
      <div className="relative h-full w-full p-6 sm:p-9 lg:p-12 flex flex-col justify-between">
        {/* Top Tag & Badge */}
        <div className="flex items-center justify-between gap-2 z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white">
            <span className="w-2 h-2 rounded-full bg-[#E20A96] animate-pulse" />
            <span>{banner.badge || "Possible In Tech"}</span>
          </div>
          <span className="text-[10px] sm:text-xs font-mono font-bold text-slate-300 px-2.5 py-0.5 rounded-full bg-black/25">
            {banner.tag || "PIT"}
          </span>
        </div>

        {/* Center / Body Section based on banner.id */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center my-auto z-10 min-w-0">
          {/* Left Text Column */}
          <div className="md:col-span-7 min-w-0">
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight tracking-tight mb-2 sm:mb-3">
              {banner.id === "agency-character" && (
                <>
                  Your Business, <span className="text-[#E20A96]">Possible Online.</span>
                </>
              )}
              {banner.id === "ecommerce" && (
                <>
                  High-Converting <span className="text-[#E20A96]">Online Stores.</span>
                </>
              )}
              {banner.id === "seo-analytics" && (
                <>
                  Rank #1 on Google, <span className="text-[#38BDF8]">Grow with Data.</span>
                </>
              )}
              {banner.id === "mobile-whatsapp" && (
                <>
                  Mobile Apps & <span className="text-[#25D366]">WhatsApp APIs.</span>
                </>
              )}
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg mb-4">
              {banner.caption}
            </p>

            <div className="flex flex-wrap items-center gap-2">
              {banner.id === "agency-character" && (
                <>
                  <span className="px-2.5 py-1 rounded-full bg-[#E20A96]/20 border border-[#E20A96]/40 text-[10px] font-bold text-pink-300">
                    Next.js 16
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-sky-500/20 border border-sky-400/40 text-[10px] font-bold text-sky-300">
                    React 19
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] font-bold text-slate-200">
                    Mobile First
                  </span>
                </>
              )}
              {banner.id === "ecommerce" && (
                <>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-[10px] font-bold text-emerald-300">
                    Instant Checkout
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-[#E20A96]/20 border border-[#E20A96]/40 text-[10px] font-bold text-pink-300">
                    Automated Invoicing
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] font-bold text-slate-200">
                    UPI & Cards
                  </span>
                </>
              )}
              {banner.id === "seo-analytics" && (
                <>
                  <span className="px-2.5 py-1 rounded-full bg-sky-500/20 border border-sky-400/40 text-[10px] font-bold text-sky-300">
                    Google Analytics 4
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-[10px] font-bold text-amber-300">
                    Search Console
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-orange-500/20 border border-orange-400/40 text-[10px] font-bold text-orange-300">
                    PostHog Funnels
                  </span>
                </>
              )}
              {banner.id === "mobile-whatsapp" && (
                <>
                  <span className="px-2.5 py-1 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-[10px] font-bold text-emerald-300">
                    Official Meta API
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-blue-500/20 border border-blue-400/40 text-[10px] font-bold text-blue-300">
                    Flutter & React Native
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] font-bold text-slate-200">
                    Push Alerts
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Right Visual / Graphic Column */}
          <div className="md:col-span-5 flex items-center justify-center min-w-0">
            {/* SLIDE 1: PIT ANIMATED CHARACTER */}
            {banner.id === "agency-character" && (
              <div className="relative flex flex-col items-center">
                <PitBot
                  image="/assets/pit-bot/pit-bot-wave.webp"
                  alt="PIT BOT 3D Mascot"
                  size="custom"
                  width={200}
                  height={200}
                  animation="float"
                  className="w-40 h-40 sm:w-48 sm:h-48"
                  speechBubble="Meet PIT BOT! 👋"
                />
                <div className="mt-2 flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold text-pink-300">
                  <Zap size={12} className="text-[#E20A96]" />
                  <span>99.8% Lighthouse Speed</span>
                </div>
              </div>
            )}

            {/* SLIDE 2: E-COMMERCE MOCKUP */}
            {banner.id === "ecommerce" && (
              <div className="relative w-full max-w-[280px] sm:max-w-xs bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-[#E20A96] text-white flex items-center justify-center">
                      <ShoppingBag size={16} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">SoftzCart Store</p>
                      <p className="text-[9px] text-slate-300">Ready to Sell</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">
                    +240% Sales
                  </span>
                </div>

                <div className="space-y-2 bg-black/25 rounded-xl p-3 border border-white/10">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300">Order #PIT-841</span>
                    <span className="text-emerald-400 font-bold">₹3,499.00</span>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div className="w-4/5 bg-gradient-to-r from-[#E20A96] to-emerald-400 h-full rounded-full" />
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-slate-400">
                    <span>1-Click Razorpay/Stripe</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 size={10} /> Fulfilled
                    </span>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-[10px] text-slate-300">
                  <span className="flex items-center gap-1">
                    <ShieldCheck size={12} className="text-[#E20A96]" /> SSL Protected
                  </span>
                  <span>Instant Delivery</span>
                </div>
              </div>
            )}

            {/* SLIDE 3: SEO & ANALYTICS DASHBOARD */}
            {banner.id === "seo-analytics" && (
              <div className="relative w-full max-w-[280px] sm:max-w-xs bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-sky-500 text-white flex items-center justify-center">
                      <TrendingUp size={16} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Google Rank #1</p>
                      <p className="text-[9px] text-sky-300">Organic Growth</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 text-[10px] font-bold border border-sky-500/30">
                    +380% Reach
                  </span>
                </div>

                {/* Animated Rising Chart Graphic */}
                <div className="bg-black/25 rounded-xl p-3 border border-white/10 mb-3">
                  <div className="flex items-end justify-between h-14 gap-1.5 pt-2">
                    {[35, 48, 42, 65, 58, 80, 95].map((height, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                        <div
                          style={{ height: `${height}%` }}
                          className={`w-full rounded-t-sm ${
                            idx === 6
                              ? "bg-gradient-to-t from-sky-500 to-[#E20A96]"
                              : "bg-white/20"
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between text-[9px] text-slate-400 mt-1">
                    <span>Mon</span>
                    <span>Wed</span>
                    <span>Fri</span>
                    <span className="text-sky-300 font-bold">Today</span>
                  </div>
                </div>

                <p className="text-[10px] text-slate-300 text-center font-medium">
                  Verified with GA4 & PostHog Telemetry
                </p>
              </div>
            )}

            {/* SLIDE 4: MOBILE & WHATSAPP CHAT */}
            {banner.id === "mobile-whatsapp" && (
              <div className="relative w-full max-w-[280px] sm:max-w-xs bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-[#25D366] text-white flex items-center justify-center">
                      <MessageCircle size={16} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">WhatsApp API</p>
                      <p className="text-[9px] text-emerald-300">Verified Business</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">
                    98% Open Rate
                  </span>
                </div>

                <div className="space-y-2 bg-black/25 rounded-xl p-3 border border-white/10">
                  <div className="bg-[#25D366]/20 border border-[#25D366]/30 rounded-xl p-2.5 text-xs text-white">
                    <p className="font-bold text-emerald-300 text-[11px] mb-0.5">PIT Automated Alert</p>
                    <p className="text-[11px] leading-snug">
                      Your website launch is complete! 🚀 All 14 routes are active & indexed.
                    </p>
                    <span className="text-[9px] text-emerald-400 block mt-1 text-right">Just now · Sent</span>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-[10px] text-slate-300">
                  <span className="flex items-center gap-1">
                    <Smartphone size={12} className="text-[#25D366]" /> iOS & Android Ready
                  </span>
                  <span>Instant Delivery</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Banner Bar */}
        <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs text-slate-300 z-10">
          <span className="text-[10px] sm:text-xs">
            PIT – Possible In Tech Digital Solutions
          </span>
          <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-bold text-[#E20A96]">
            Explore Capability <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </div>
  );
}
