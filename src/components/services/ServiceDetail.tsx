import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/lib/constants";
import type { ServiceItem } from "@/lib/constants/services";
import { SectionLink } from "@/components/common/SectionLink";

export function ServiceDetail({
  service,
  compact = false,
}: {
  service: ServiceItem;
  compact?: boolean;
}) {
  return (
    <section
      id={service.id}
      className={cn(
        "scroll-mt-24 sm:scroll-mt-28 min-w-0",
        compact ? "py-2" : "border-b border-pit py-10 last:border-0 sm:py-16"
      )}
    >
      <div className="min-w-0">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-magenta">
          {service.tag} · {service.title}
        </p>
        <h2 className="mb-3 text-2xl font-extrabold leading-tight tracking-tight text-navy sm:text-3xl">
          {service.headline}
        </h2>
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-secondary-pit sm:text-base">
          {service.description}
        </p>

        {service.techTags && service.techTags.length > 0 ? (
          <div className="mb-6 flex flex-wrap gap-2">
            {service.techTags.map((tag) => (
              <span
                key={tag}
                className="border border-pit bg-pit-grey px-3 py-1 text-xs font-semibold text-navy"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        <div className="relative mb-8 aspect-[16/10] overflow-hidden border border-pit bg-pit-grey sm:aspect-[16/7]">
          <Image
            src={service.image}
            alt={`${service.title} preview`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 850px"
          />
        </div>

        <div className="mb-8">
          <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-navy">
            Our delivery methodology
          </h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {service.methodology.map((step, index) => (
              <div key={step.step} className="border border-pit bg-pit-grey p-4 sm:p-5">
                <p className="mb-2 text-xs font-bold text-magenta">{index + 1}</p>
                <p className="mb-1 text-sm font-bold text-navy">{step.step}</p>
                <p className="text-xs leading-relaxed text-secondary-pit">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-navy">
            Core capabilities
          </h3>
          <div className="grid gap-2.5 sm:grid-cols-2">
            {service.capabilities.map((capability) => (
              <div
                key={capability}
                className="flex items-center gap-2.5 border border-pit bg-white p-3 text-sm font-medium text-navy"
              >
                <CheckCircle2 size={16} className="shrink-0 text-magenta" />
                <span>{capability}</span>
              </div>
            ))}
          </div>
        </div>

        <SectionLink
          href={`${ROUTES.consultation}?type=${encodeURIComponent(service.title)}`}
          className="btn-primary inline-flex items-center gap-2 text-sm"
        >
          <span>Discuss {service.title}</span>
          <ArrowRight size={14} />
        </SectionLink>
      </div>
    </section>
  );
}
