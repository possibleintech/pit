export type HeroBanner = {
  id: string;
  tag?: string;
  badge?: string;
  title: string;
  caption: string;
  themeColor?: string;
  src?: string;
  alt?: string;
  ready?: boolean;
};

export type HeroBannerCarouselProps = {
  banners: readonly HeroBanner[];
};

export type HeroBannerSlideProps = {
  banner: HeroBanner;
  active: boolean;
  priority: boolean;
};
