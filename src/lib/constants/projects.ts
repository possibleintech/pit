export interface ProjectItem {
  id: string;
  name: string;
  category: string;
  description: string;
  highlights: string[];
  image: string;
  imageAlt: string;
  projectUrl: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "mariah-coirs",
    name: "Mariah Coirs",
    category: "Coir Export & Manufacturing",
    description:
      "India's premier manufacturer and exporter of premium coco peat blocks, coir fiber, grow bags, and coir products — supplying 50+ countries since 2009 with a conversion-focused brand website.",
    highlights: [
      "Export-ready product catalog for global buyers",
      "Clear manufacturing & quality storytelling",
      "Enquiry-focused CTAs for international trade",
      "Mobile-first brand experience for B2B buyers",
    ],
    image: "/freelance/mariah.png",
    imageAlt: "Mariah Coirs export and manufacturing website homepage screenshot",
    projectUrl: "https://mariahcoirsexport.com/",
  },
  {
    id: "softzcart",
    name: "SoftzCart",
    category: "Digital Software E-Commerce",
    description:
      "A full-featured digital software marketplace featuring brand categories, instant license key distribution, shopping cart, checkout, and admin management workflows.",
    highlights: [
      "Brand-focused software catalog with search & filter",
      "Instant digital checkout & automated fulfillment",
      "Mobile-responsive e-commerce experience",
      "Integrated payment processing & order tracking",
    ],
    image: "/freelance/softzcart.png",
    imageAlt: "SoftzCart digital software e-commerce platform homepage screenshot",
    projectUrl: "https://softzcart.com/",
  },
  {
    id: "civil-digital",
    name: "Civil Digital Store",
    category: "Engineering Software Store",
    description:
      "Specialized engineering software store for Revit, AutoCAD, Lumion, Tekla, calculation sheets, and ebooks — with WhatsApp order support.",
    highlights: [
      "Curated civil & structural software catalog",
      "Digital distribution for tools and ebooks",
      "One-click WhatsApp order placement",
      "Searchable product catalog with category filters",
    ],
    image: "/freelance/civil.png",
    imageAlt: "Civil Digital Store engineering software store homepage screenshot",
    projectUrl: "https://www.civildigitalstore.com/",
  },
  {
    id: "cloudora",
    name: "Cloudora Luxury Homestay",
    category: "Hospitality & Booking",
    description:
      "Luxury 5 BHK Kodaikanal villa website with immersive storytelling, package enquiries, gallery experiences, and conversion-focused booking CTAs.",
    highlights: [
      "Immersive villa storytelling and gallery",
      "Package enquiry and booking CTAs",
      "Mobile-optimized hospitality experience",
      "High-conversion lead capture flows",
    ],
    image: "/freelance/cloudora.png",
    imageAlt: "Cloudora luxury homestay website homepage screenshot",
    projectUrl: "https://cloudora-web.vercel.app/",
  },
  {
    id: "gifwoods",
    name: "Gifwoods",
    category: "Personalized Gifting",
    description:
      "Premium personalized gifts crafted to celebrate every special moment — engraved, hand-packed, and delivered with intention.",
    highlights: [
      "High-resolution product showcase",
      "Personalized gifting request flows",
      "Seamless cart and checkout experience",
      "Responsive brand-led storefront",
    ],
    image: "/freelance/gifwoods.png",
    imageAlt: "Gifwoods personalized gifts homepage screenshot",
    projectUrl: "https://gifwoods.com/",
  },
  {
    id: "giftiebags",
    name: "GiftieBags",
    category: "Gift Bags E-Commerce",
    description:
      "Dynamic ecommerce website for gift bags with a clean product browsing experience and responsive purchase flow.",
    highlights: [
      "Clean product browsing experience",
      "Responsive purchase flow",
      "Lightweight ecommerce architecture",
      "Mobile-first shopping UI",
    ],
    image: "/freelance/giftiebags.png",
    imageAlt: "GiftieBags gift bags ecommerce homepage screenshot",
    projectUrl: "https://giftiebags.vercel.app/",
  },
  {
    id: "healargo",
    name: "Healargo",
    category: "Natural Wellness Store",
    description:
      "Natural wellness ecommerce store for cold-pressed oils and agro essentials — pure products, WhatsApp ordering, and a warm brand-led shopping experience.",
    highlights: [
      "Warm brand-led product storytelling",
      "WhatsApp ordering for quick purchases",
      "Catalog for oils and agro essentials",
      "Trust-focused wellness ecommerce UX",
    ],
    image: "/freelance/healargo.png",
    imageAlt: "Healargo natural wellness store homepage screenshot",
    projectUrl: "https://healargo.vercel.app/",
  },
  {
    id: "ks-build-kart",
    name: "KS Build Kart",
    category: "Building Materials Catalog",
    description:
      "Building materials catalog and lead-generation site for K.S. Steel Corporation covering steel, cement, pipes, paints, tools, and roofing.",
    highlights: [
      "Product catalog for construction materials",
      "Lead-generation enquiry flows",
      "Clear category browsing for trade buyers",
      "Mobile-ready B2B storefront",
    ],
    image: "/freelance/ksbuildkart.png",
    imageAlt: "KS Build Kart building materials website homepage screenshot",
    projectUrl: "https://www.ksbuildkart.com/",
  },
  {
    id: "nk-constructions",
    name: "NK Constructions",
    category: "Civil Engineering Services",
    description:
      "Professional civil engineering, building design, approvals, and land surveying website for Thanjavur — built to convert visitors into consultation leads.",
    highlights: [
      "Service-led civil engineering presentation",
      "Consultation lead conversion CTAs",
      "Local trust and project credibility",
      "Mobile-optimized service pages",
    ],
    image: "/freelance/nkconstruct.png",
    imageAlt: "NK Constructions civil engineering website homepage screenshot",
    projectUrl: "https://www.nkconstruct.in/",
  },
  {
    id: "tomscope",
    name: "TomScope",
    category: "IT Consulting Agency",
    description:
      "IT consulting and software development agency website with services, live project portfolio, consultation booking, and client-facing chat support.",
    highlights: [
      "Services and portfolio storytelling",
      "Consultation booking workflow",
      "Client-facing chat support entry points",
      "Modern agency marketing architecture",
    ],
    image: "/freelance/tomscope.png",
    imageAlt: "TomScope IT consulting agency website homepage screenshot",
    projectUrl: "https://tomscope.com/",
  },
  {
    id: "vsoil-mill",
    name: "VS Oil Mill",
    category: "Direct-to-Consumer Organic Brand",
    description:
      "Direct-to-consumer store for traditional Mara Chekku wood-pressed oils and A2 ghee, with Pan-India shipping and WhatsApp reorder support.",
    highlights: [
      "Heritage product catalog and ordering",
      "Pan-India shipping calculation",
      "Direct WhatsApp reorder integration",
      "Trust badges and brand storytelling",
    ],
    image: "/freelance/vsoil.png",
    imageAlt: "VS Oil Mill wood-pressed oil store homepage screenshot",
    projectUrl: "https://www.vsoilmill.com/",
  },
  {
    id: "aasina-curry-house",
    name: "Aasina Curry House",
    category: "Culinary & Dining Experience",
    description:
      "Heritage Malaysian restaurant website with authentic menu showcases, multi-location finder, signature dish spotlights, and customer enquiry workflows.",
    highlights: [
      "Interactive menu and dish showcases",
      "Multi-location finder and contact flows",
      "Mobile-optimized culinary interface",
      "Heritage dining brand presentation",
    ],
    image: "/freelance/aasinacurryhouse.png",
    imageAlt: "Aasina Curry House restaurant website homepage screenshot",
    projectUrl: "https://www.aasinacurryhouse.com/",
  },
];
