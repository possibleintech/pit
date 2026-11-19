import { SectionLink as Link } from "@/components/common/SectionLink";
import Image from "next/image";
import { ROUTES, NAV_LINKS, PUBLIC_ASSETS } from "@/lib/constants";

/** Static header placeholder — same layout, enlarged logo, SSR / pre-hydration */
export function SiteHeaderShell() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E8E8ED] shadow-[0_2px_14px_rgba(41,45,61,0.04)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24 md:h-26">
          <Link href={ROUTES.home} className="flex items-center gap-2 shrink-0 py-2">
            <div className="relative w-[180px] sm:w-[230px] md:w-[260px] lg:w-[280px] h-[52px] sm:h-[66px] md:h-[74px]">
              <Image
                src={PUBLIC_ASSETS.logo}
                alt="PIT – Possible In Tech Logo"
                fill
                sizes="(max-width: 640px) 180px, (max-width: 768px) 230px, 280px"
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9" aria-hidden>
            {NAV_LINKS.map((link) => (
              <span key={link.label} className="text-sm font-semibold text-[#53596A]">
                {link.label}
              </span>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href={ROUTES.consultation}
              className="inline-flex items-center gap-1.5 bg-[#E20A96] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full shadow-[0_4px_14px_rgba(226,10,150,0.26)]"
            >
              Let&apos;s Talk
            </Link>
          </div>
          <div className="lg:hidden w-8 h-8" aria-hidden />
        </div>
      </div>
    </header>
  );
}
