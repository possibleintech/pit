"use client";

import { SectionLink as Link } from "@/components/common/SectionLink";
import { useEffect, useState } from "react";
import { ROUTES, SERVICES_LIST } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export function ServicesSidebar() {
  const [activeId, setActiveId] = useState<string>(SERVICES_LIST[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    SERVICES_LIST.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-28 hidden lg:block w-64 shrink-0">
      <p className="text-xs font-bold uppercase tracking-wider text-[#53596A] mb-4">
        All Capabilities
      </p>
      <ul className="space-y-1">
        {SERVICES_LIST.map((s) => (
          <li key={s.id}>
            <Link
              href={`#${s.id}`}
              className={cn(
                "block text-xs font-semibold py-2.5 px-3.5 rounded-xl transition-all leading-snug",
                activeId === s.id
                  ? "bg-[#FCEAF4] text-[#E20A96] font-bold shadow-xs"
                  : "text-[#53596A] hover:text-[#292D3D] hover:bg-[#F7F7FA]"
              )}
            >
              {s.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-8 p-5 bg-[#F7F7FA] border border-[#E8E8ED] rounded-2xl">
        <p className="text-xs font-bold text-[#292D3D] mb-1">Have a project scope?</p>
        <p className="text-xs text-[#53596A] mb-4 leading-relaxed">
          We&apos;ll formulate a customized plan and technology roadmap for you.
        </p>
        <Link
          href={ROUTES.consultation}
          className="inline-flex items-center justify-center gap-1.5 w-full text-center text-xs font-bold bg-[#E20A96] hover:bg-[#C40882] text-white rounded-full py-2.5 transition-colors shadow-xs"
        >
          <span>Let&apos;s Talk</span>
          <ArrowRight size={13} />
        </Link>
      </div>
    </nav>
  );
}
