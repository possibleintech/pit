export const BRAND_COLORS = {
  magenta: "#E20A96",
  darkNavy: "#292D3D",
  softPink: "#FCEAF4",
  pureWhite: "#FFFFFF",
  bgGrey: "#F7F7FA",
  secondaryText: "#53596A",
  border: "#E8E8ED",
  // Aliases for compatibility
  primary: "#E20A96",
  navy: "#292D3D",
  accent: "#E20A96",
} as const;

export const BRAND_COLOR_CLASSES = {
  bgPrimary: "bg-[#FFFFFF]",
  bgSecondary: "bg-[#F7F7FA]",
  bgSoftPink: "bg-[#FCEAF4]",
  bgDarkNavy: "bg-[#292D3D]",
  bgMagenta: "bg-[#E20A96]",
  textPrimary: "text-[#292D3D]",
  textSecondary: "text-[#53596A]",
  textMagenta: "text-[#E20A96]",
  borderLight: "border-[#E8E8ED]",
  borderMagenta: "border-[#E20A96]",
} as const;
