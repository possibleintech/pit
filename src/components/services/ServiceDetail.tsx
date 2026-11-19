import Image from "next/image";
import { CheckCircle2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ServiceItem } from "@/lib/constants/services";
import { PitBot } from "@/components/pitbot";

const BOT_SERVICE_POSES: Record<string, { image: string; alt: string; tip: string }> = {
  "website-development": {
    image: "/assets/pit-bot/pit-bot-laptop.webp",
    alt: "PIT BOT coding on laptop",
    tip: "Engineered with modern Next.js, TypeScript, and responsive Tailwind CSS for maximum speed and conversion.",
  },
  "ecommerce-stores": {
    image: "/assets/pit-bot/pit-bot-package.webp",
    alt: "PIT BOT presenting e-commerce packages",
    tip: "Built for frictionless checkout, fast shopping carts, secure payment gateways, and automated order flows.",
  },
  "search-engine-optimization": {
    image: "/assets/pit-bot/pit-bot-search.webp",
    alt: "PIT BOT inspecting SEO analytics",
    tip: "Strategic on-page optimization, structured data schema, high Core Web Vitals, and keyword dominance.",
  },
  "analytics-tracking": {
    image: "/assets/pit-bot/pit-bot-analytics.webp",
    alt: "PIT BOT presenting analytics dashboard",
    tip: "Configured with PostHog event funnels, Google Analytics 4, and conversion attribution pipelines.",
  },
};

export function ServiceDetail({ service, compact = false }: { service: ServiceItem; compact?: boolean }) {
  const botPose = BOT_SERVICE_POSES[service.id];

  return (
    <section
      id={service.id}
      className={cn(
        "scroll-mt-24 sm:scroll-mt-28 min-w-0",
        compact ? "py-2" : "py-10 sm:py-16 border-b border-[#E8E8ED] last:border-0"
      )}
    >
      <div className="min-w-0">
        {/* Top Tag & Title */}
        <div className="flex items-center gap-3 mb-3 min-w-0">
          <span className="w-8 h-8 rounded-xl bg-[#FCEAF4] text-[#E20A96] text-xs font-mono font-bold flex items-center justify-center shrink-0 shadow-xs">
            {service.tag}
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-[#E20A96] min-w-0 break-words">
            {service.title}
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#292D3D] mb-3 leading-tight tracking-tight">
          {service.headline}
        </h2>
        <p className="text-sm sm:text-base text-[#53596A] leading-relaxed mb-6 max-w-2xl">
          {service.description}
        </p>

        {/* Tech Tags */}
        {service.techTags && service.techTags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {service.techTags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-[#FCEAF4] text-[#E20A96] border border-[#E20A96]/20"
              >
                <Sparkles size={11} />
                <span>{tag}</span>
              </span>
            ))}
          </div>
        )}

        {/* Contextual PIT BOT Mascot Feature */}
        {botPose && (
          <div className="flex items-center gap-3.5 p-3 sm:p-4 rounded-2xl bg-[#FCEAF4]/60 border border-[#E20A96]/20 mb-6 shadow-2xs">
            <div className="w-14 h-14 shrink-0 flex items-center justify-center">
              <PitBot
                image={botPose.image}
                alt={botPose.alt}
                size="custom"
                width={56}
                height={56}
                animation="subtle"
                className="w-14 h-14"
              />
            </div>
            <div className="text-xs">
              <span className="font-bold text-[#E20A96] block mb-0.5 tracking-wide">
                PIT BOT Insights
              </span>
              <span className="text-[#53596A] leading-relaxed">{botPose.tip}</span>
            </div>
          </div>
        )}

        {/* Service Image */}
        <div className="rounded-2xl overflow-hidden border border-[#E8E8ED] bg-[#F7F7FA] mb-8 aspect-[16/10] sm:aspect-[16/7] relative shadow-xs">
          <Image
            src={service.image}
            alt={`${service.title} preview`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 850px"
          />
        </div>

        {/* Our Approach */}
        <div className="mb-8">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#292D3D] mb-4">
            Our Delivery Methodology
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {service.methodology.map((m, i) => (
              <div key={m.step} className="bg-[#F7F7FA] border border-[#E8E8ED] rounded-2xl p-4 sm:p-5 shadow-xs">
                <div className="w-7 h-7 rounded-lg bg-[#E20A96] text-white text-xs font-bold flex items-center justify-center mb-3">
                  {i + 1}
                </div>
                <p className="text-xs sm:text-sm font-bold text-[#292D3D] mb-1">{m.step}</p>
                <p className="text-xs text-[#53596A] leading-relaxed">{m.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Capabilities */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#292D3D] mb-3">
            Core Capabilities
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {service.capabilities.map((cap) => (
              <div key={cap} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#292D3D] p-2 bg-[#F7F7FA]/70 rounded-xl border border-[#E8E8ED]/60">
                <CheckCircle2 size={16} className="text-[#E20A96] shrink-0" />
                <span>{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
