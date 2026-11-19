import Link from "next/link";
import { ChevronDown } from "lucide-react";

type LinkItem = { label: string; href: string };

export function FooterMobileSection({
  title,
  links,
  defaultOpen = false,
}: {
  title: string;
  links: readonly LinkItem[];
  defaultOpen?: boolean;
}) {
  return (
    <details className="group border-b border-[#E8E8ED] py-1" open={defaultOpen}>
      <summary className="flex items-center justify-between py-2.5 cursor-pointer list-none text-xs font-bold uppercase tracking-wider text-[#292D3D]">
        <span>{title}</span>
        <ChevronDown size={14} className="text-[#53596A] transition-transform group-open:rotate-180" />
      </summary>
      <ul className="pb-3 grid grid-cols-2 gap-x-4 gap-y-2">
        {links.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className="text-xs text-[#53596A] hover:text-[#E20A96] transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}
