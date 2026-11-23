import { Mail, MapPin } from "lucide-react";
import { CONTACT, MAP_SEARCH_URL } from "@/lib/constants";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ContactPhoneList } from "@/components/common/ContactPhoneList";

export function ContactMap() {
  return (
    <section className="section-shell bg-white" aria-label="Contact and location">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader
              align="left"
              eyebrow={CONTACT.visitLabel}
              title="Based in"
              titleHighlight={CONTACT.location}
              subtitle="We deliver digital products for ambitious businesses across India and worldwide."
            />
            <ul className="mt-8 space-y-4 text-sm text-secondary-pit">
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-magenta" />
                <span>{CONTACT.address}</span>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 hover:text-magenta">
                  <Mail size={16} className="text-magenta" />
                  <span>{CONTACT.email}</span>
                </a>
              </li>
            </ul>
            <a
              href={MAP_SEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline mt-6 inline-flex items-center gap-2 text-sm"
            >
              <MapPin size={14} />
              <span>Open in Maps</span>
            </a>
          </div>

          <div className="lg:col-span-7">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-magenta">
              Call or WhatsApp
            </p>
            <ContactPhoneList source="contact_section" />
            <div className="mt-6 border border-pit bg-pit-grey p-6">
              <h3 className="text-lg font-extrabold text-navy">Start a conversation</h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary-pit">
                Reach either number by WhatsApp or phone — we reply with scope options, timeline
                guidance, and a clear recommended path.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
