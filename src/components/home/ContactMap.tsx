import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { CONTACT, MAP_EMBED_SRC, SITE } from "@/lib/constants";

export function ContactMap() {
  return (
    <section className="bg-white py-14 sm:py-20 border-b border-[#E8E8ED]" aria-label="Office location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-w-0">
        <div className="grid lg:grid-cols-12 gap-8 items-center mb-8">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCEAF4] text-[#E20A96] text-xs font-bold uppercase tracking-wider mb-2">
              <MapPin size={13} />
              <span>{CONTACT.visitLabel}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#292D3D]">
              Headquartered in {CONTACT.location}
            </h3>
            <p className="text-xs sm:text-sm text-[#53596A] mt-1">
              Delivering world-class digital agency solutions for ambitious businesses across India and worldwide.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
            <a
              href={`https://wa.me/${CONTACT.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#E20A96] text-white text-xs font-bold shadow-xs hover:bg-[#C40882] transition-colors"
            >
              <MessageCircle size={14} />
              <span>WhatsApp Us</span>
            </a>
            <a
              href={`tel:${CONTACT.phone.replace(/[^0-9+]/g, "")}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#E8E8ED] bg-[#F7F7FA] text-[#292D3D] text-xs font-bold hover:border-[#E20A96] hover:text-[#E20A96] transition-colors"
            >
              <Phone size={14} />
              <span>{CONTACT.phone}</span>
            </a>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden border border-[#E8E8ED] bg-white shadow-sm h-[260px] sm:h-[340px] lg:h-[400px]">
          <iframe
            title={`${SITE.name} office on Google Maps`}
            src={MAP_EMBED_SRC}
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
