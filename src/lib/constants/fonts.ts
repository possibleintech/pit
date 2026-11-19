export const GOOGLE_FONTS = {
  preconnect: "https://fonts.googleapis.com",
  preconnectStatic: "https://fonts.gstatic.com",
  stylesheet:
    "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap",
} as const;

export const FONT_STACKS = {
  sans: '"Plus Jakarta Sans", "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  heading: '"Plus Jakarta Sans", "Inter", system-ui, -apple-system, sans-serif',
  inter: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
} as const;
