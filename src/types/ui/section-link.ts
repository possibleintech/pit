import React from "react";

export type SectionLinkProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> & {
  href: string;
  onNavigate?: () => void;
};
