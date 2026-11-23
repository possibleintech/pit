import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BLOG_POSTS, ROUTES, SITE } from "@/lib/constants";
import { TYPO } from "@/lib/constants/typography";

export const metadata: Metadata = {
  title: "Blog & Insights",
  description:
    "Practical articles on Next.js, e-commerce, WhatsApp automations, SEO, and analytics from PIT – Possible In Tech.",
  alternates: { canonical: `${SITE.url}${ROUTES.blog}` },
  openGraph: {
    title: `Blog & Insights | ${SITE.name}`,
    description:
      "Engineering insights, web development guides, and growth playbooks from the PIT team.",
    url: `${SITE.url}${ROUTES.blog}`,
  },
};

export default function BlogPage() {
  return (
    <>
      <section className="page-hero-shell">
        <div className="absolute inset-0 pit-grid-bg opacity-40 pointer-events-none" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className={TYPO.sectionEyebrow}>Articles & insights</p>
          <h1 className={`${TYPO.pageTitle} mt-3 mb-4`}>
            Digital growth <span className="text-magenta">knowledge base</span>
          </h1>
          <p className={`${TYPO.body} max-w-xl`}>
            Practical writing on Next.js, commerce, WhatsApp automations, and measurement from our
            engineering team.
          </p>
        </div>
      </section>

      <section className="section-shell bg-pit-grey">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="flex min-w-0 flex-col justify-between border border-pit bg-white p-6 sm:p-7"
            >
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-magenta">
                  {post.category}
                </p>
                <h2 className="mb-3 text-xl font-bold leading-snug text-navy">
                  <Link
                    href={`${ROUTES.blog}/${post.slug}`}
                    className="transition-colors hover:text-magenta"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mb-6 text-sm leading-relaxed text-secondary-pit">{post.excerpt}</p>
              </div>
              <div className="flex items-center justify-between border-t border-pit pt-4 text-xs">
                <span className="text-secondary-pit">{post.readTime}</span>
                <Link
                  href={`${ROUTES.blog}/${post.slug}`}
                  className="inline-flex items-center gap-1 font-bold text-magenta"
                >
                  Read article <ArrowRight size={13} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
