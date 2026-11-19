import { SectionLink as Link } from "@/components/common/SectionLink";
import { ArrowRight, Sparkles } from "lucide-react";
import { SERVICES_HERO, ROUTES, SITE } from "@/lib/constants";
import { ServicesPageContent } from "@/components/services/ServicesPageContent";

export const metadata = {
  title: `Our Services | ${SITE.name}`,
  description: "Comprehensive digital solutions: Website Development, E-commerce Stores, SEO, Analytics & Tracking, and Cloud Architecture.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-white border-b border-[#E8E8ED] py-14 sm:py-20 relative">
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            backgroundImage:
              "linear-gradient(rgba(232, 232, 237, 0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(232, 232, 237, 0.6) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCEAF4] border border-[#E20A96]/20 text-[#E20A96] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles size={13} />
            <span>{SERVICES_HERO.eyebrow}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#292D3D] leading-tight max-w-3xl mb-4">
            Services Built for <span className="text-[#E20A96]">Digital Growth</span>
          </h1>
          <p className="text-sm sm:text-base text-[#53596A] leading-relaxed max-w-2xl">
            {SERVICES_HERO.subheadline}
          </p>
        </div>
      </section>

      <ServicesPageContent />

      <section className="bg-[#F7F7FA] border-t border-[#E8E8ED] py-14 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCEAF4] text-[#E20A96] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles size={13} />
            <span>Start Building Today</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#292D3D] mb-3">
            Ready to Accelerate Your <span className="text-[#E20A96]">Online Presence</span>?
          </h2>
          <p className="text-sm sm:text-base text-[#53596A] mb-8 max-w-xl mx-auto">
            Book a free strategy session with our engineering team to discuss your goals, scope, and timeline.
          </p>
          <Link
            href={ROUTES.consultation}
            className="inline-flex items-center gap-2 bg-[#E20A96] hover:bg-[#C40882] text-white text-sm sm:text-base font-bold px-7 py-3.5 rounded-full shadow-[0_4px_16px_rgba(226,10,150,0.26)] transition-all"
          >
            <span>Book a Free Consultation</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
