export const SITE = {
  name: "PIT – Possible In Tech",
  shortName: "PIT",
  tagline: "Modern Digital Solutions & Technology Agency",
  title: "PIT – Possible In Tech | Modern Digital Solutions & Technology Agency",
  description:
    "PIT – Possible In Tech builds powerful digital experiences: modern websites, high-converting e-commerce stores, SEO, and analytics that help businesses grow online.",
  url: "https://possibleintech.com",
  metadataBase: "https://possibleintech.com",
  locale: "en_US",
} as const;

export const GA_MEASUREMENT_ID = "G-86EHM7X6FC";

function toDigits(value: string) {
  return value.replace(/[^0-9]/g, "");
}

function toTelHref(value: string) {
  return `tel:${value.replace(/[^0-9+]/g, "")}`;
}

function toWhatsAppHref(value: string, message?: string) {
  const phone = toDigits(value);
  const base = `https://api.whatsapp.com/send?phone=${phone}`;
  if (!message) return base;
  return `${base}&text=${encodeURIComponent(message)}`;
}

export const CONTACT = {
  email: "possibleintech@gmail.com",
  phone: "+91 7871694931",
  secondaryPhone: "+91 7010389100",
  whatsapp: "+91 7871694931",
  whatsappLink:
    "https://api.whatsapp.com/send?phone=917871694931&text=Hi%20PIT%20team%2C%20I'd%20like%20to%20discuss%20a%20project.",
  address: "Tamil Nadu, India",
  location: "Tamil Nadu, India",
  visitLabel: "Our Location",
  phones: [
    {
      id: "phone-1",
      display: "+91 7871694931",
      telHref: toTelHref("+91 7871694931"),
      whatsappHref: toWhatsAppHref(
        "+91 7871694931",
        "Hi PIT team, I'd like to discuss a project."
      ),
    },
    {
      id: "phone-2",
      display: "+91 7010389100",
      telHref: toTelHref("+91 7010389100"),
      whatsappHref: toWhatsAppHref(
        "+91 7010389100",
        "Hi PIT team, I'd like to discuss a project."
      ),
    },
  ],
} as const;

export const MAP_SEARCH_URL =
  "https://www.google.com/maps/search/?api=1&query=Tamil+Nadu%2C+India";

export const COMPANY = {
  vision:
    "To make modern digital growth possible for every ambitious business through world-class web engineering and measurable digital solutions.",
  mission:
    "We design and engineer high-impact digital experiences — websites, e-commerce stores, SEO strategies, and analytics systems — built for speed, conversions, and long-term business success.",
} as const;
