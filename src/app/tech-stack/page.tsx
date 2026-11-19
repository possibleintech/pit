import { SectionLink as Link } from "@/components/common/SectionLink";
import { ArrowRight, Sparkles } from "lucide-react";
import { ROUTES, SITE } from "@/lib/constants";
import { TechStackFilter } from "@/components/tech-stack/TechStackFilter";

export const metadata = {
  title: `Tech Stack | ${SITE.name}`,
  description: "Technologies, frameworks, databases, and cloud tools PIT uses for engineering world-class digital platforms.",
};

export default function TechStackPage() {
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
            <span>Our Toolset</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#292D3D] leading-tight max-w-3xl mb-4">
            Battle-Tested <span className="text-[#E20A96]">Technologies</span>
          </h1>
          <p className="text-sm sm:text-base text-[#53596A] leading-relaxed max-w-xl">
            Frontend, backend, e-commerce, cloud infrastructure, and analytics tools — selected for maximum reliability, velocity, and maintainability.
          </p>
        </div>
      </section>

      <section className="bg-[#F7F7FA] py-14 sm:py-20 border-b border-[#E8E8ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TechStackFilter />
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#292D3D] mb-3">
            Need a Specific Technology or Integration?
          </h2>
          <p className="text-[#53596A] text-sm sm:text-base mb-8 max-w-lg mx-auto">
            Our engineers can advise on the ideal stack architecture tailored for your business scale and requirements.
          </p>
          <Link
            href={ROUTES.consultation}
            className="inline-flex items-center gap-2 bg-[#E20A96] hover:bg-[#C40882] text-white text-sm sm:text-base font-bold px-7 py-3.5 rounded-full shadow-[0_4px_16px_rgba(226,10,150,0.26)] transition-all"
          >
            <span>Book a Consultation</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
