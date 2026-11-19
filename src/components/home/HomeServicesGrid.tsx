"use client";

import Link from "next/link";
import {
  Globe,
  ShoppingBag,
  Search,
  BarChart3,
  Smartphone,
  Briefcase,
  Server,
  MessageCircle,
  GitBranch,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { HOME_SERVICES, ROUTES } from "@/lib/constants";
import { MotionSection } from "@/components/common/MotionSection";
import { MotionStagger, MotionStaggerItem } from "@/components/common/MotionStagger";
import { PitBot, PitBotServicesInteractiveGuide } from "@/components/pitbot";

const SERVICE_BOT_POSES: Record<string, { image: string; alt: string; label: string }> = {
  "website-development": {
    image: "/assets/pit-bot/pit-bot-laptop.webp",
    alt: "PIT BOT coding on laptop",
    label: "Web Dev",
  },
  "ecommerce-stores": {
    image: "/assets/pit-bot/pit-bot-package.webp",
    alt: "PIT BOT with shopping packages",
    label: "E-Commerce",
  },
  "search-engine-optimization": {
    image: "/assets/pit-bot/pit-bot-search.webp",
    alt: "PIT BOT analyzing SEO analytics",
    label: "Google SEO",
  },
  "analytics-tracking": {
    image: "/assets/pit-bot/pit-bot-analytics.webp",
    alt: "PIT BOT presenting analytics charts",
    label: "Analytics",
  },
};

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Globe,
  ShoppingBag,
  Search,
  BarChart3,
  Smartphone,
  Briefcase,
  Server,
  MessageCircle,
  GitBranch,
};

function ServiceCard({ service }: { service: (typeof HOME_SERVICES)[number] }) {
  const Icon = ICON_MAP[service.icon] ?? Globe;
  const botPose = SERVICE_BOT_POSES[service.id];

  return (
    <div className="group h-full bg-white border border-[#E8E8ED] rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-[0_4px_20px_rgba(41,45,61,0.04)] hover:shadow-[0_16px_40px_rgba(226,10,150,0.12)] hover:border-[#E20A96]/40 hover:-translate-y-1.5 transition-all duration-300 min-w-0">
      <div>
        {/* Top Bar: Icon + Step Tag & Contextual PIT BOT pose */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-2xl bg-[#FCEAF4] text-[#E20A96] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#E20A96] group-hover:text-white transition-all duration-300 shadow-xs">
            <Icon size={22} />
          </div>
          <div className="flex items-center gap-2">
            {botPose && (
              <div
                className="w-12 h-12 -my-2 flex items-center justify-center group-hover:scale-115 transition-transform duration-300"
                title={`PIT BOT - ${botPose.label}`}
              >
                <PitBot
                  image={botPose.image}
                  alt={botPose.alt}
                  size="custom"
                  width={48}
                  height={48}
                  animation="subtle"
                  className="w-12 h-12"
                />
              </div>
            )}
            <span className="text-xs font-mono font-bold text-[#53596A]/60 px-2.5 py-1 rounded-full bg-[#F7F7FA] border border-[#E8E8ED]">
              {service.tag}
            </span>
          </div>
        </div>

        {/* Large Dark Navy Service Title */}
        <h3 className="text-lg sm:text-xl font-bold text-[#292D3D] group-hover:text-[#E20A96] transition-colors mb-2 leading-snug">
          {service.title}
        </h3>

        {/* Clean Supporting Description */}
        <p className="text-xs sm:text-sm text-[#53596A] leading-relaxed mb-4">
          {service.headline}
        </p>

        {/* Technology Tags for Analytics & Services */}
        {service.techTags && service.techTags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-5 pt-2">
            {service.techTags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#FCEAF4] text-[#E20A96] border border-[#E20A96]/20"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Card Action Link */}
      <div className="pt-4 border-t border-[#E8E8ED]/60 flex items-center justify-between">
        <Link
          href={service.href}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E20A96] group-hover:gap-2.5 transition-all"
        >
          <span>Explore Service</span>
          <ArrowRight size={13} />
        </Link>
        <span className="text-[11px] text-[#53596A] opacity-0 group-hover:opacity-100 transition-opacity">
          PIT Agency
        </span>
      </div>
    </div>
  );
}

export function HomeServicesGrid() {
  return (
    <section className="scroll-mt-24 bg-[#F7F7FA] py-14 sm:py-20 lg:py-24 w-full relative" id="services">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(232, 232, 237, 0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(232, 232, 237, 0.6) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <MotionSection className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCEAF4] border border-[#E20A96]/20 text-[#E20A96] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles size={13} />
            <span>Our Core Services</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#292D3D] leading-tight tracking-tight mb-4">
            Everything You Need to <span className="text-[#E20A96]">Succeed Online</span>
          </h2>
          <p className="text-sm sm:text-base text-[#53596A] leading-relaxed max-w-2xl mx-auto">
            From modern responsive websites and ready-to-sell e-commerce stores to Google SEO and data tracking, PIT delivers complete digital agency solutions.
          </p>
        </MotionSection>

        {/* PIT BOT Interactive Smart Guide */}
        <MotionSection delay={0.1}>
          <PitBotServicesInteractiveGuide />
        </MotionSection>

        {/* Services Grid */}
        <MotionStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 w-full">
          {HOME_SERVICES.map((service) => (
            <MotionStaggerItem key={service.id}>
              <ServiceCard service={service} />
            </MotionStaggerItem>
          ))}
        </MotionStagger>

        {/* Bottom Banner */}
        <MotionSection delay={0.2} className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-6 bg-white border border-[#E8E8ED] rounded-2xl p-4 sm:p-6 shadow-sm">
            <p className="text-xs sm:text-sm font-semibold text-[#292D3D]">
              Have a custom project requirement in mind?
            </p>
            <Link
              href={ROUTES.consultation}
              className="inline-flex items-center gap-2 bg-[#E20A96] hover:bg-[#C40882] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full shadow-[0_4px_14px_rgba(226,10,150,0.24)] transition-all"
            >
              <span>Talk to our Team</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
