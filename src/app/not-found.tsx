import Link from "next/link";
import { ArrowLeft, Home, Sparkles, MessageCircle } from "lucide-react";
import { PitBot } from "@/components/pitbot";
import { CONTACT, ROUTES } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="relative min-h-[75vh] flex items-center justify-center bg-white px-4 py-16 sm:py-24 overflow-hidden border-b border-[#E8E8ED]">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(232, 232, 237, 0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(232, 232, 237, 0.7) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Ambient Magenta Background Halo */}
      <div
        className="absolute w-[450px] h-[450px] rounded-full pointer-events-none blur-3xl opacity-35 -z-10"
        style={{
          background:
            "radial-gradient(circle, rgba(226, 10, 150, 0.35) 0%, rgba(252, 234, 244, 0.5) 50%, transparent 70%)",
        }}
      />

      <div className="relative max-w-xl mx-auto text-center z-10">
        {/* Thinking / Confused PIT BOT */}
        <div className="flex justify-center mb-6">
          <PitBot
            image="/assets/pit-bot/pit-bot-thinking.webp"
            alt="Confused PIT BOT scratching head"
            size="lg"
            animation="subtle"
            glow={true}
            glowIntensity="vibrant"
            speechBubble="Hmm... Where did that URL go? 🤔"
          />
        </div>

        {/* 404 Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCEAF4] text-[#E20A96] text-xs font-bold uppercase tracking-wider mb-4 border border-[#E20A96]/20">
          <Sparkles size={12} />
          <span>Error 404 • Page Missing</span>
        </div>

        {/* Bold Dark Navy Heading */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#292D3D] tracking-tight mb-3">
          Oops! Even <span className="text-[#E20A96]">PIT BOT</span> couldn&apos;t find this page.
        </h1>

        {/* Supporting Copy */}
        <p className="text-sm sm:text-base text-[#53596A] leading-relaxed max-w-md mx-auto mb-8">
          Looks like this page went on a little adventure. Let&apos;s get you back to the right place or connect with our team.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#E20A96] hover:bg-[#C40882] text-white text-sm font-semibold shadow-[0_6px_22px_rgba(226,10,150,0.28)] hover:-translate-y-0.5 transition-all"
          >
            <Home size={16} />
            <span>Back to Home</span>
          </Link>

          <Link
            href={ROUTES.services}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-[#FCEAF4]/50 text-[#292D3D] hover:text-[#E20A96] border border-[#E8E8ED] hover:border-[#E20A96]/40 text-sm font-semibold transition-all"
          >
            <span>Explore Services</span>
          </Link>

          <a
            href={`https://wa.me/${CONTACT.whatsapp.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#F7F7FA] text-[#53596A] hover:text-[#292D3D] border border-[#E8E8ED] text-sm font-medium transition-all"
          >
            <MessageCircle size={15} className="text-[#E20A96]" />
            <span>Ask Support</span>
          </a>
        </div>
      </div>
    </div>
  );
}
