"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { MessageCircle, Phone } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type FabMode = "whatsapp" | "call" | null;

export function WhatsAppFab() {
  const [mode, setMode] = useState<FabMode>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!mode) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setMode(null);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMode(null);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [mode]);

  return (
    <div
      ref={rootRef}
      className="fixed bottom-5 left-4 z-50 flex flex-row items-end gap-2 sm:bottom-6 sm:left-6"
    >
      <FabColumn
        active={mode === "whatsapp"}
        panelId={`${panelId}-wa`}
        label="Choose WhatsApp chat"
        onOpen={() => setMode("whatsapp")}
        onClose={() => setMode((m) => (m === "whatsapp" ? null : m))}
        trigger={
          <span className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(37,211,102,0.35)] transition hover:-translate-y-0.5">
            <MessageCircle size={18} />
            WhatsApp
          </span>
        }
      >
        {CONTACT.phones.map((phone) => (
          <a
            key={phone.id}
            href={phone.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              trackEvent("whatsapp_click", {
                source: "fab_picker",
                phone: phone.id,
              });
              setMode(null);
            }}
            className="flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-soft-pink hover:text-magenta"
          >
            <span>{phone.display}</span>
            <MessageCircle size={15} />
          </a>
        ))}
      </FabColumn>

      <FabColumn
        active={mode === "call"}
        panelId={`${panelId}-call`}
        label="Choose number to call"
        onOpen={() => setMode("call")}
        onClose={() => setMode((m) => (m === "call" ? null : m))}
        trigger={
          <span className="inline-flex items-center gap-2 rounded-full bg-navy px-4 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(41,45,61,0.28)] transition hover:-translate-y-0.5">
            <Phone size={18} />
            Call
          </span>
        }
      >
        {CONTACT.phones.map((phone) => (
          <a
            key={phone.id}
            href={phone.telHref}
            onClick={() => {
              trackEvent("call_click", {
                source: "fab_picker",
                phone: phone.id,
              });
              setMode(null);
            }}
            className="flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-soft-pink hover:text-magenta"
          >
            <span>{phone.display}</span>
            <Phone size={15} />
          </a>
        ))}
      </FabColumn>
    </div>
  );
}

function FabColumn({
  active,
  panelId,
  label,
  onOpen,
  onClose,
  trigger,
  children,
}: {
  active: boolean;
  panelId: string;
  label: string;
  onOpen: () => void;
  onClose: () => void;
  trigger: ReactNode;
  children: ReactNode;
}) {
  return (
    <div
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <div
        id={panelId}
        className={cn(
          "absolute bottom-full left-0 mb-2 w-[min(100vw-2rem,16rem)] overflow-hidden rounded-2xl border border-pit bg-white shadow-[0_12px_32px_rgba(41,45,61,0.16)] transition-all duration-200",
          active
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-1 opacity-0"
        )}
        aria-hidden={!active}
      >
        <div className="space-y-1 p-2">
          <p className="px-2 pt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-secondary-pit">
            {label}
          </p>
          {children}
        </div>
      </div>

      <button
        type="button"
        aria-expanded={active}
        aria-controls={panelId}
        onClick={() => (active ? onClose() : onOpen())}
      >
        {trigger}
      </button>
    </div>
  );
}
