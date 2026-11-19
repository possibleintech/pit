"use client";

import { useEffect, useState } from "react";
import { SERVICES_LIST } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { ServicesSidebar } from "@/components/services/ServicesSidebar";

type ServiceId = (typeof SERVICES_LIST)[number]["id"];

function resolveServiceId(hash: string): ServiceId {
  const id = hash.replace("#", "");
  return (SERVICES_LIST.some((s) => s.id === id) ? id : SERVICES_LIST[0].id) as ServiceId;
}

export function ServicesPageContent() {
  const [activeId, setActiveId] = useState<ServiceId>(SERVICES_LIST[0].id);

  useEffect(() => {
    setActiveId(resolveServiceId(window.location.hash));

    const onHashChange = () => setActiveId(resolveServiceId(window.location.hash));
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const selectService = (id: ServiceId) => {
    setActiveId(id);
    window.history.replaceState(null, "", `#${id}`);
  };

  const activeService = SERVICES_LIST.find((s) => s.id === activeId) ?? SERVICES_LIST[0];

  return (
    <>
      <nav
        className="lg:hidden sticky top-18 sm:top-20 z-40 bg-white/95 backdrop-blur-md border-b border-[#E8E8ED] overflow-x-auto overscroll-x-contain shadow-xs"
        aria-label="Service categories"
      >
        <div className="flex w-max px-4 sm:px-6 scroll-px-4">
          {SERVICES_LIST.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => selectService(s.id as ServiceId)}
              aria-selected={activeId === s.id}
              className={cn(
                "text-xs font-semibold whitespace-nowrap px-3.5 py-3.5 border-b-2 transition-colors shrink-0 cursor-pointer",
                activeId === s.id
                  ? "text-[#E20A96] border-[#E20A96] font-bold"
                  : "text-[#53596A] border-transparent hover:text-[#292D3D]"
              )}
            >
              {s.title}
            </button>
          ))}
        </div>
      </nav>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14">
          <div className="lg:hidden min-w-0">
            <ServiceDetail key={activeService.id} service={activeService} compact />
          </div>

          <div className="hidden lg:flex gap-10 lg:gap-14 min-w-0">
            <ServicesSidebar />
            <div className="flex-1 min-w-0">
              {SERVICES_LIST.map((service) => (
                <ServiceDetail key={service.id} service={service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
