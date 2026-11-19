import { HERO_BANNERS } from "@/lib/constants/hero-banners";
import type { HeroBanner } from "@/types";

export function getHeroBanners(): HeroBanner[] {
  return HERO_BANNERS.map((banner) => ({
    ...banner,
    ready: true,
  }));
}
