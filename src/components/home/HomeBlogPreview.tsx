import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BLOG_POSTS, ROUTES } from "@/lib/constants";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ScrollRow, ScrollRowItem } from "@/components/common/ScrollRow";

function BlogCard({ post }: { post: (typeof BLOG_POSTS)[number] }) {
  return (
    <Link
      href={`${ROUTES.blog}/${post.slug}`}
      className="group flex h-full min-w-0 flex-col justify-between border border-pit bg-white p-6 transition-colors hover:border-magenta/40"
    >
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-magenta">
          {post.category}
        </p>
        <h3 className="mb-2 line-clamp-2 text-lg font-bold leading-snug text-navy transition-colors group-hover:text-magenta">
          {post.title}
        </h3>
        <p className="mb-5 line-clamp-2 text-sm leading-relaxed text-secondary-pit">{post.excerpt}</p>
      </div>
      <div className="flex items-center justify-between border-t border-pit pt-4 text-xs">
        <span className="inline-flex items-center gap-1 font-semibold text-magenta">
          Read article <ArrowRight size={13} />
        </span>
        <span className="text-secondary-pit">{post.readTime}</span>
      </div>
    </Link>
  );
}

export function HomeBlogPreview() {
  const posts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="section-shell bg-pit-grey">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            align="left"
            className="max-w-xl"
            eyebrow="Insights"
            title="From our"
            titleHighlight="knowledge base"
          />
          <Link
            href={ROUTES.blog}
            className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-magenta"
          >
            View all articles <ArrowRight size={14} />
          </Link>
        </div>

        <div className="sm:hidden">
          <ScrollRow>
            {posts.map((post) => (
              <ScrollRowItem key={post.slug}>
                <BlogCard post={post} />
              </ScrollRowItem>
            ))}
          </ScrollRow>
        </div>

        <div className="hidden gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
