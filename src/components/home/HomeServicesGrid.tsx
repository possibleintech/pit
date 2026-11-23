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
} from "lucide-react";
import { HOME_FEATURED_SERVICES, ROUTES } from "@/lib/constants";
import { SectionHeader } from "@/components/common/SectionHeader";
import { MotionSection } from "@/components/common/MotionSection";
import { MotionStagger, MotionStaggerItem } from "@/components/common/MotionStagger";
import { PitBotServicesInteractiveGuide } from "@/components/pitbot";

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

function ServiceCard({ service }: { service: (typeof HOME_FEATURED_SERVICES)[number] }) {
  const Icon = ICON_MAP[service.icon] ?? Globe;

  return (
    <article className="group flex h-full min-w-0 flex-col border-b border-pit bg-white p-6 transition-colors hover:bg-pit-grey/60 sm:border sm:rounded-xl sm:p-7">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-soft-pink text-magenta">
        <Icon size={20} />
      </div>
      <h3 className="mb-2 text-lg font-bold leading-snug text-navy transition-colors group-hover:text-magenta sm:text-xl">
        {service.title}
      </h3>
      <p className="mb-6 flex-1 text-sm leading-relaxed text-secondary-pit">{service.headline}</p>
      <Link
        href={service.href}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-magenta transition-all group-hover:gap-2.5"
      >
        <span>Explore</span>
        <ArrowRight size={14} />
      </Link>
    </article>
  );
}

export function HomeServicesGrid() {
  return (
    <section className="section-shell scroll-mt-24 bg-pit-grey" id="services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          className="mb-10 sm:mb-14"
          eyebrow="Services"
          title="Built for"
          titleHighlight="digital growth"
          subtitle="Websites, stores, SEO, and analytics — focused outcomes that help your business get found and convert."
        />

        <MotionSection delay={0.08} className="mb-10 sm:mb-14">
          <PitBotServicesInteractiveGuide />
        </MotionSection>

        <MotionStagger className="grid grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {HOME_FEATURED_SERVICES.map((service) => (
            <MotionStaggerItem key={service.id}>
              <ServiceCard service={service} />
            </MotionStaggerItem>
          ))}
        </MotionStagger>

        <MotionSection delay={0.15} className="mt-10 flex justify-center sm:mt-12">
          <Link
            href={ROUTES.services}
            className="btn-outline inline-flex items-center gap-2 text-sm"
          >
            <span>View all services</span>
            <ArrowRight size={14} />
          </Link>
        </MotionSection>
      </div>
    </section>
  );
}
