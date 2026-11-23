import { HomeHero } from "@/components/home/HomeHero";
import { HomeServicesGrid } from "@/components/home/HomeServicesGrid";
import { HomePrinciplesClient } from "@/components/home/HomePrinciplesClient";
import { HomeProjectSection } from "@/components/home/HomeProjectSection";
import { HomeMidCta } from "@/components/home/HomeMidCta";
import { HomeReviews } from "@/components/home/HomeReviews";
import { HomeTechStrip } from "@/components/home/HomeTechStrip";
import { HomeBlogPreview } from "@/components/home/HomeBlogPreview";
import { HomeConsultationClient } from "@/components/home/HomeConsultationClient";
import { ContactMap } from "@/components/home/ContactMap";
import { HomeFaq } from "@/components/home/HomeFaq";
import { JsonLd } from "@/components/common/JsonLd";
import { faqJsonLd, localBusinessJsonLd } from "@/lib/seo/json-ld";

export default function HomePage() {
  return (
    <>
      <JsonLd data={[localBusinessJsonLd(), faqJsonLd()]} />
      <HomeHero />
      <HomeServicesGrid />
      <HomeProjectSection />
      <HomeMidCta />
      <HomePrinciplesClient />
      <HomeReviews />
      <HomeTechStrip />
      <HomeBlogPreview />
      <HomeFaq />
      <HomeConsultationClient />
      <ContactMap />
    </>
  );
}
