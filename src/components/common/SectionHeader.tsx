import { cn } from "@/lib/utils";
import { TYPO } from "@/lib/constants/typography";
import type { SectionHeaderProps } from "@/types";

export function SectionHeader({
  eyebrow,
  title,
  titleHighlight,
  subtitle,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        align === "left" && "text-left",
        className
      )}
    >
      {eyebrow ? (
        <p className={cn(TYPO.sectionEyebrow, "mb-3")}>{eyebrow}</p>
      ) : null}
      <h2 className={cn(TYPO.sectionTitle, "mb-3")}>
        {title}
        {titleHighlight ? (
          <>
            {" "}
            <span className="text-magenta">{titleHighlight}</span>
          </>
        ) : null}
      </h2>
      {subtitle ? <p className={TYPO.sectionSubtitle}>{subtitle}</p> : null}
    </header>
  );
}
