"use client";

import { SectionLink as Link } from "@/components/common/SectionLink";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { ROUTES, NAV_LINKS, PUBLIC_ASSETS, CONTACT } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";
import { NavDropdown } from "@/components/common/NavDropdown";
import { ContactPhoneList } from "@/components/common/ContactPhoneList";
import type { NavChild } from "@/lib/constants/nav";

function isNavActive(pathname: string, href: string, children?: readonly NavChild[]) {
  if (children?.length) {
    return children.some((child) => {
      if (child.href.startsWith("/#")) return false;
      return pathname === child.href || pathname.startsWith(`${child.href}/`);
    });
  }
  if (href.startsWith("/#")) return false;
  return pathname === href || (href !== "/" && pathname.startsWith(href));
}

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);
  const closeMobile = () => setMobileOpen(false);

  const renderNavItem = (link: (typeof NAV_LINKS)[number], mobile = false) => {
    if (link.children) {
      return (
        <NavDropdown
          key={link.label}
          label={link.label}
          href={link.href}
          children={link.children}
          isActive={isNavActive(pathname, link.href, link.children)}
          onNavigate={mobile ? closeMobile : undefined}
          mobile={mobile}
          showViewAll={link.showViewAll ?? true}
        />
      );
    }
    return (
      <Link
        key={link.href}
        href={link.href}
        className={cn(
          mobile
            ? "block text-sm font-semibold py-2.5 text-[#292D3D] hover:text-[#E20A96] transition-colors border-b border-[#E8E8ED]/60 last:border-0"
            : "text-sm font-semibold text-[#53596A] hover:text-[#E20A96] transition-colors whitespace-nowrap py-2 relative",
          isNavActive(pathname, link.href) && "text-[#E20A96]"
        )}
        onNavigate={mobile ? closeMobile : undefined}
      >
        <span>{link.label}</span>
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E8E8ED] transition-colors shadow-[0_2px_14px_rgba(41,45,61,0.04)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24 md:h-26">
          {/* Enlarged Official Logo */}
          <Link
            href={ROUTES.home}
            onMouseEnter={() => setLogoHovered(true)}
            onMouseLeave={() => setLogoHovered(false)}
            className="relative flex items-center gap-2.5 shrink-0 group focus:outline-none py-2"
            aria-label="PIT – Possible In Tech Home"
          >
            <div className="relative w-[180px] sm:w-[230px] md:w-[260px] lg:w-[280px] h-[52px] sm:h-[66px] md:h-[74px]">
              <Image
                src={PUBLIC_ASSETS.logo}
                alt="PIT – Possible In Tech Logo"
                fill
                sizes="(max-width: 640px) 180px, (max-width: 768px) 230px, 280px"
                className="object-contain object-left transition-transform duration-200 group-hover:scale-[1.02]"
                priority
              />
            </div>

            {/* Playful mini PIT BOT easter egg greeting on logo hover */}
            <AnimatePresence>
              {logoHovered && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.7, x: -6 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.7, x: -6 }}
                  transition={{ duration: 0.18 }}
                  className="hidden xl:flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#FCEAF4] border border-[#E20A96]/30 text-[10px] font-bold text-[#E20A96] shadow-xs select-none pointer-events-none"
                >
                  <div className="w-3.5 h-3.5 rounded-full overflow-hidden bg-white shrink-0">
                    <Image
                      src="/assets/pit-bot/pit-bot-chat.webp"
                      alt="Mini PIT BOT"
                      width={14}
                      height={14}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span>Hi! 👋</span>
                </motion.div>
              )}
            </AnimatePresence>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => renderNavItem(link))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href={CONTACT.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("whatsapp_click", { source: "header" })}
              className="btn-outline inline-flex items-center gap-1.5 text-xs"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle size={15} className="text-magenta" />
              <span>WhatsApp</span>
            </a>
            <Link
              href={ROUTES.consultation}
              onClick={() => trackEvent("cta_click", { source: "header" })}
              className="btn-primary inline-flex items-center gap-1.5 text-xs sm:text-sm whitespace-nowrap"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href={ROUTES.consultation}
              className="bg-[#E20A96] text-white text-xs font-semibold px-3.5 py-1.5 rounded-full"
            >
              Let&apos;s Talk
            </Link>
            <button
              className="p-2 rounded-lg text-[#292D3D] hover:text-[#E20A96] hover:bg-[#FCEAF4] transition-colors focus:outline-none"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#E8E8ED] bg-white px-5 py-5 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          {/* Logo at the top of the mobile drawer */}
          <div className="pb-4 mb-3 border-b border-[#E8E8ED]">
            <div className="relative w-[190px] h-[54px]">
              <Image
                src={PUBLIC_ASSETS.logo}
                alt="PIT Logo"
                fill
                sizes="190px"
                className="object-contain object-left"
              />
            </div>
          </div>

          <div className="space-y-1 mb-5">
            {NAV_LINKS.map((link) => renderNavItem(link, true))}
          </div>

          <div className="flex flex-col gap-3 border-t border-pit pt-3">
            <Link
              href={ROUTES.consultation}
              onNavigate={closeMobile}
              className="btn-primary inline-flex w-full items-center justify-center gap-2 text-sm"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight size={14} />
            </Link>
            <ContactPhoneList source="header_mobile" compact />
          </div>
        </div>
      )}
    </header>
  );
}
