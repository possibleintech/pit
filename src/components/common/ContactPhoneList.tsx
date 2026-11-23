"use client";

import { MessageCircle, Phone } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type ContactPhoneListProps = {
  source: string;
  className?: string;
  compact?: boolean;
};

export function ContactPhoneList({
  source,
  className,
  compact = false,
}: ContactPhoneListProps) {
  return (
    <div className={cn("space-y-3", className)}>
      {CONTACT.phones.map((phone) => (
        <div
          key={phone.id}
          className={cn(
            "border border-pit bg-white",
            compact ? "p-3" : "p-4"
          )}
        >
          <p className={cn("font-bold text-navy", compact ? "text-sm mb-2" : "text-sm mb-3")}>
            {phone.display}
          </p>
          <div className="flex flex-wrap gap-2">
            <a
              href={phone.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent("whatsapp_click", { source, phone: phone.id })
              }
              className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-3 py-1.5 text-xs font-bold text-white"
            >
              <MessageCircle size={13} />
              WhatsApp
            </a>
            <a
              href={phone.telHref}
              onClick={() => trackEvent("call_click", { source, phone: phone.id })}
              className="btn-outline inline-flex items-center gap-1.5 !px-3 !py-1.5 text-xs"
            >
              <Phone size={13} />
              Call
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
