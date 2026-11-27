import { SectionLink as Link } from "@/components/common/SectionLink";
import Image from "next/image";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import {
  SITE,
  CONTACT,
  ROUTES,
  PUBLIC_ASSETS,
  FOOTER_SERVICES,
  FOOTER_EXPLORE,
  FOOTER_MOBILE_QUICK,
} from "@/lib/constants";
import { SocialIcons } from "@/components/common/SocialIcons";
import { FooterMobileSection } from "@/components/common/FooterMobileSection";
import { ContactPhoneList } from "@/components/common/ContactPhoneList";

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-wider text-[#292D3D] mb-4">
        {title}
      </h3>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="text-xs font-medium text-[#53596A] hover:text-[#E20A96] transition-colors"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterBrand() {
  return (
    <div className="space-y-4">
      {/* Official PIT Logo - Enlarged */}
      <Link href={ROUTES.home} className="inline-block group">
        <div className="relative w-[200px] sm:w-[250px] md:w-[270px] h-[58px] sm:h-[72px] md:h-[78px]">
          <Image
            src={PUBLIC_ASSETS.logo}
            alt="PIT – Possible In Tech Logo"
            fill
            sizes="(max-width: 640px) 200px, 270px"
            className="object-contain object-left"
          />
        </div>
      </Link>

      <p className="text-xs font-bold uppercase tracking-wider text-[#E20A96]">
        {SITE.tagline}
      </p>

      <p className="text-xs sm:text-sm text-[#53596A] leading-relaxed max-w-sm">
        We build powerful digital experiences that help businesses grow, connect with customers, and succeed online.
      </p>

      <div className="pt-2">
        <SocialIcons />
      </div>
    </div>
  );
}

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F7F7FA] border-t border-[#E8E8ED] text-[#292D3D] w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Mobile View */}
        <div className="lg:hidden w-full">
          <FooterBrand />

          <div className="mt-6 space-y-3 border-t border-[#E8E8ED] pt-6 text-xs text-[#53596A]">
            <ContactPhoneList source="footer_mobile" compact />
            <div className="flex items-center gap-2">
              <MapPin size={15} className="shrink-0 text-magenta" />
              <span>{CONTACT.location}</span>
            </div>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-2 transition-colors hover:text-magenta"
            >
              <Mail size={15} className="shrink-0 text-magenta" />
              <span>{CONTACT.email}</span>
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 pt-4 border-t border-[#E8E8ED]">
            {FOOTER_MOBILE_QUICK.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-xs font-semibold text-[#53596A] hover:text-[#E20A96] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="mt-4">
            <FooterMobileSection
              title="All Services"
              links={[
                ...FOOTER_SERVICES.slice(0, 5),
                { label: "View all services →", href: ROUTES.services },
              ]}
            />
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <FooterBrand />
          </div>

          <div className="lg:col-span-3">
            <FooterColumn title="Our Services" links={FOOTER_SERVICES} />
          </div>

          <div className="lg:col-span-2">
            <FooterColumn title="Explore" links={FOOTER_EXPLORE.slice(0, 6)} />
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-navy">
              Contact & WhatsApp
            </h3>
            <div className="space-y-3 text-xs text-secondary-pit">
              <ContactPhoneList source="footer_desktop" compact />
              <div className="flex items-center gap-2">
                <MapPin size={15} className="shrink-0 text-magenta" />
                <span>{CONTACT.location}</span>
              </div>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2 transition-colors hover:text-magenta"
              >
                <Mail size={15} className="shrink-0 text-magenta" />
                <span>{CONTACT.email}</span>
              </a>
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-white border border-[#E8E8ED]">
              <p className="text-xs font-bold text-[#292D3D] mb-1">Ready to build online?</p>
              <p className="text-[11px] text-[#53596A] mb-3">Schedule a free strategy call today.</p>
              <Link
                href={ROUTES.consultation}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E20A96] hover:underline"
              >
                <span>Book a Consultation</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-12 pt-6 border-t border-[#E8E8ED] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#53596A]">
          <p>© {currentYear} PIT – Possible In Tech. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href={ROUTES.home} className="hover:text-[#E20A96] transition-colors">
              Home
            </Link>
            <Link href={ROUTES.services} className="hover:text-[#E20A96] transition-colors">
              Services
            </Link>
            <Link href={ROUTES.projects} className="hover:text-[#E20A96] transition-colors">
              Portfolio
            </Link>
            <Link href={ROUTES.consultation} className="hover:text-[#E20A96] transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
