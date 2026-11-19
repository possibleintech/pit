"use client";

import { SectionLink as Link } from "@/components/common/SectionLink";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { NavChild } from "@/lib/constants/nav";

type NavDropdownProps = {
  label: string;
  href: string;
  children: readonly NavChild[];
  isActive: boolean;
  onNavigate?: () => void;
  mobile?: boolean;
  showViewAll?: boolean;
};

export function NavDropdown({
  label,
  href,
  children,
  isActive,
  onNavigate,
  mobile = false,
  showViewAll = true,
}: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mobile) return;
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [mobile]);

  if (mobile) {
    return (
      <div className="border-b border-[#E8E8ED]/60 last:border-0 py-1">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "flex w-full items-center justify-between text-sm font-semibold py-2.5 text-[#292D3D] transition-colors",
            isActive && "text-[#E20A96]"
          )}
        >
          <span>{label}</span>
          <ChevronDown
            size={16}
            className={cn("text-[#53596A] transition-transform duration-200", open && "rotate-180 text-[#E20A96]")}
          />
        </button>
        {open && (
          <div className="pl-3 pb-2 pt-1 space-y-1 border-l-2 border-[#E20A96]/30 ml-1.5 my-1 bg-[#F7F7FA]/70 rounded-r-lg">
            {showViewAll && (
              <Link
                href={href}
                onNavigate={onNavigate}
                className="block text-xs font-semibold text-[#E20A96] hover:underline py-1.5 px-2"
              >
                All {label} →
              </Link>
            )}
            {children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                onNavigate={onNavigate}
                className="block text-xs font-medium text-[#53596A] hover:text-[#E20A96] hover:bg-[#FCEAF4] py-1.5 px-2 rounded-md transition-colors"
              >
                {child.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div ref={ref} className="relative" onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setOpen(true)}
        className={cn(
          "flex items-center gap-1.5 text-sm font-semibold text-[#53596A] hover:text-[#E20A96] transition-colors py-2",
          isActive && "text-[#E20A96]"
        )}
      >
        <span>{label}</span>
        <ChevronDown
          size={14}
          className={cn("transition-transform duration-200 opacity-70", open && "rotate-180 opacity-100 text-[#E20A96]")}
        />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 w-60 bg-white border border-[#E8E8ED] rounded-2xl shadow-[0_12px_36px_rgba(41,45,61,0.12)] p-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
          {showViewAll && (
            <>
              <Link
                href={href}
                onNavigate={() => {
                  setOpen(false);
                  onNavigate?.();
                }}
                className="block text-xs font-bold text-[#E20A96] hover:bg-[#FCEAF4] px-3 py-2 rounded-xl transition-colors mb-1"
              >
                All {label} →
              </Link>
              <div className="h-px bg-[#E8E8ED] my-1" />
            </>
          )}
          <div className="space-y-0.5">
            {children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                onNavigate={() => {
                  setOpen(false);
                  onNavigate?.();
                }}
                className="block text-xs font-medium text-[#53596A] hover:text-[#292D3D] hover:bg-[#FCEAF4] px-3 py-2 rounded-xl transition-colors"
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
