import { SectionLink as Link } from "@/components/common/SectionLink";
import { ArrowRight, CheckCircle2, Target, Compass, Sparkles } from "lucide-react";
import { PitBot } from "@/components/pitbot";
import {
  ABOUT_HERO,
  ABOUT_STATS,
  ABOUT_VISION,
  ABOUT_MISSION,
  ABOUT_VALUES,
  ABOUT_EXPERTISE,
  DEVELOPMENT_PRINCIPLES,
  ROUTES,
  SITE,
} from "@/lib/constants";

export const metadata = {
  title: `About Us | ${SITE.name}`,
  description: "Learn about PIT – Possible In Tech. Our vision, mission, engineering standards, and passion for building powerful digital experiences.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white border-b border-[#E8E8ED] py-14 sm:py-20 lg:py-24 relative">
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            backgroundImage:
              "linear-gradient(rgba(232, 232, 237, 0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(232, 232, 237, 0.6) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-center relative">
          <div className="lg:col-span-7 min-w-0">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCEAF4] border border-[#E20A96]/20 text-[#E20A96] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
              <Sparkles size={13} />
              <span>{ABOUT_HERO.eyebrow}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#292D3D] leading-tight tracking-tight mb-4">
              Modern Digital Solutions <span className="text-[#E20A96]">& Agency</span>
            </h1>
            <p className="text-sm sm:text-base text-[#53596A] leading-relaxed max-w-xl">
              {ABOUT_HERO.subheadline}
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-3.5 sm:gap-4">
            {ABOUT_STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-[#F7F7FA] border border-[#E8E8ED] rounded-2xl p-5 sm:p-6 shadow-xs hover:border-[#E20A96]/30 transition-colors"
              >
                <p className="text-2xl sm:text-3xl font-extrabold text-[#292D3D]">{stat.value}</p>
                <p className="text-xs sm:text-sm font-semibold text-[#53596A] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-white py-14 sm:py-20 border-b border-[#E8E8ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
          <div className="border border-[#E8E8ED] bg-[#F7F7FA]/60 rounded-3xl p-6 sm:p-8 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-[#FCEAF4] text-[#E20A96] flex items-center justify-center mb-4">
              <Target size={22} />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#292D3D] mb-2">Our Vision</h2>
            <p className="text-sm sm:text-base text-[#53596A] leading-relaxed">{ABOUT_VISION}</p>
          </div>

          <div className="border border-[#E8E8ED] bg-[#F7F7FA]/60 rounded-3xl p-6 sm:p-8 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-[#FCEAF4] text-[#E20A96] flex items-center justify-center mb-4">
              <Compass size={22} />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#292D3D] mb-2">Our Mission</h2>
            <p className="text-sm sm:text-base text-[#53596A] leading-relaxed">{ABOUT_MISSION}</p>
          </div>
        </div>
      </section>

      {/* Development Principles */}
      <section className="bg-[#F7F7FA] py-14 sm:py-20 border-b border-[#E8E8ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCEAF4] border border-[#E20A96]/20 text-[#E20A96] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles size={13} />
              <span>How We Code</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#292D3D]">
              Our Engineering Standards
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {DEVELOPMENT_PRINCIPLES.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-[#E8E8ED] rounded-2xl p-5 sm:p-6 shadow-xs hover:border-[#E20A96]/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-[#E20A96]">{item.acronym}</span>
                  <span className="text-[10px] font-semibold text-[#53596A] px-2 py-0.5 rounded-full bg-[#F7F7FA] border border-[#E8E8ED]">
                    {item.mapsTo}
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#292D3D] mb-1.5">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#53596A] leading-relaxed">{item.trustPoint}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise & Values */}
      <section className="bg-white py-14 sm:py-20 border-b border-[#E8E8ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-start min-w-0">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCEAF4] text-[#E20A96] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles size={13} />
              <span>What We Do</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#292D3D] mb-6">Areas of Expertise</h2>
            <div className="space-y-3">
              {ABOUT_EXPERTISE.map((item) => (
                <div key={item} className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-[#292D3D] p-3 rounded-xl bg-[#F7F7FA] border border-[#E8E8ED]/70">
                  <CheckCircle2 size={16} className="text-[#E20A96] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {ABOUT_VALUES.map((val) => (
              <div key={val.title} className="bg-white border border-[#E8E8ED] rounded-2xl p-6 shadow-xs hover:border-[#E20A96]/30 transition-colors">
                <h3 className="text-sm sm:text-base font-bold text-[#292D3D] mb-2">{val.title}</h3>
                <p className="text-xs sm:text-sm text-[#53596A] leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet PIT BOT Section */}
      <section className="bg-white py-14 sm:py-20 border-b border-[#E8E8ED] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(232, 232, 237, 0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(232, 232, 237, 0.6) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-center relative">
          <div className="lg:col-span-5 flex justify-center">
            <PitBot
              image="/assets/pit-bot/pit-bot-wave.webp"
              alt="PIT BOT Mascot"
              size="lg"
              animation="float"
              glow={true}
              speechBubble="I'm here to help your brand grow! 🚀"
            />
          </div>
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCEAF4] text-[#E20A96] text-xs font-bold uppercase tracking-wider mb-4 border border-[#E20A96]/20">
              <Sparkles size={13} />
              <span>Official Brand Mascot</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#292D3D] mb-4">
              Meet <span className="text-[#E20A96]">PIT BOT</span> — The Face of Possible In Tech
            </h2>
            <p className="text-sm sm:text-base text-[#53596A] leading-relaxed mb-6">
              Engineered with friendly futuristic aesthetics, glossy white armor, and glowing magenta LED eyes, PIT BOT embodies our core mission: translating complex technology into smooth, engaging, and profitable digital solutions for businesses worldwide.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-2xl bg-[#F7F7FA] border border-[#E8E8ED]">
                <p className="text-xs font-bold text-[#E20A96] uppercase">Identity</p>
                <p className="text-sm font-extrabold text-[#292D3D]">PIT BOT 1.0</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#F7F7FA] border border-[#E8E8ED]">
                <p className="text-xs font-bold text-[#E20A96] uppercase">Specialty</p>
                <p className="text-sm font-extrabold text-[#292D3D]">Digital Growth</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#F7F7FA] border border-[#E8E8ED] col-span-2 sm:col-span-1">
                <p className="text-xs font-bold text-[#E20A96] uppercase">Motto</p>
                <p className="text-sm font-extrabold text-[#292D3D]">Possible Online</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#F7F7FA] py-14 sm:py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#292D3D] mb-3">
            Ready to Build Your Digital Presence?
          </h2>
          <p className="text-[#53596A] text-sm sm:text-base mb-8 max-w-lg mx-auto">
            Tell us about your project goals and we&apos;ll formulate a customized technical roadmap.
          </p>
          <Link
            href={ROUTES.consultation}
            className="inline-flex items-center gap-2 bg-[#E20A96] hover:bg-[#C40882] text-white text-sm sm:text-base font-bold px-7 py-3.5 rounded-full shadow-[0_4px_16px_rgba(226,10,150,0.26)] transition-all"
          >
            <span>Let&apos;s Talk</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
