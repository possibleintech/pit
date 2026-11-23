import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { PUBLIC_ASSETS, SITE } from "@/lib/constants";
import { Analytics } from "@/components/common/Analytics";
import { SiteHeaderClient } from "@/components/common/SiteHeaderClient";
import { SiteFooter } from "@/components/common/SiteFooter";
import { PitBotChat } from "@/components/pitbot/PitBotChat";
import { PitBotProvider } from "@/components/pitbot/PitBotController";
import { HashScroll } from "@/components/common/HashScroll";
import { WhatsAppFab } from "@/components/common/WhatsAppFab";
import { JsonLd } from "@/components/common/JsonLd";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo/json-ld";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-pit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.metadataBase),
  title: {
    default: SITE.title,
    template: `%s | ${SITE.shortName}`,
  },
  description: SITE.description,
  alternates: {
    canonical: SITE.url,
  },
  icons: {
    icon: [
      { url: PUBLIC_ASSETS.favicon, sizes: "any" },
      { url: PUBLIC_ASSETS.faviconPng, type: "image/png", sizes: "32x32" },
      { url: PUBLIC_ASSETS.favicon192, type: "image/png", sizes: "192x192" },
    ],
    shortcut: PUBLIC_ASSETS.favicon,
    apple: PUBLIC_ASSETS.appleTouchIcon,
  },
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: SITE.locale,
    type: "website",
    images: [{ url: PUBLIC_ASSETS.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: [PUBLIC_ASSETS.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${plusJakarta.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body
        className={`${plusJakarta.className} min-h-full flex flex-col bg-background text-foreground antialiased`}
        suppressHydrationWarning
      >
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <PitBotProvider>
          <HashScroll />
          <Analytics />
          <SiteHeaderClient />
          <main className="flex-1 flex flex-col min-w-0 overflow-x-clip">{children}</main>
          <SiteFooter />
          <WhatsAppFab />
          <PitBotChat />
        </PitBotProvider>
      </body>
    </html>
  );
}
