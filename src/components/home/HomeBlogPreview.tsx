import Link from "next/link";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import { BLOG_POSTS, ROUTES } from "@/lib/constants";
import { MotionSection } from "@/components/common/MotionSection";
import { ScrollRow, ScrollRowItem } from "@/components/common/ScrollRow";

function BlogCard({ post }: { post: (typeof BLOG_POSTS)[number] }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group h-full bg-white border border-[#E8E8ED] rounded-2xl p-6 hover:-translate-y-1.5 hover:border-[#E20A96]/40 hover:shadow-[0_12px_36px_rgba(226,10,150,0.12)] transition-all duration-300 min-w-0 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FCEAF4] text-[#E20A96] border border-[#E20A96]/20">
            {post.category}
          </span>
          <div className="flex items-center gap-1.5 text-[11px] text-[#53596A]">
            <Calendar size={12} className="text-[#E20A96]" />
            <span>{post.readTime}</span>
          </div>
        </div>
        <h3 className="text-base sm:text-lg font-bold text-[#292D3D] mb-2 group-hover:text-[#E20A96] transition-colors leading-snug line-clamp-2">
          {post.title}
        </h3>
        <p className="text-xs sm:text-sm text-[#53596A] leading-relaxed mb-4 line-clamp-2">
          {post.excerpt}
        </p>
      </div>

      <div className="pt-4 border-t border-[#E8E8ED]/60 flex items-center justify-between">
        <span className="text-xs font-bold text-[#E20A96] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
          Read Article <ArrowRight size={13} />
        </span>
        <span className="text-[11px] text-[#53596A]">{post.date}</span>
      </div>
    </Link>
  );
}

export function HomeBlogPreview() {
  const posts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="bg-[#F7F7FA] py-14 sm:py-20 border-b border-[#E8E8ED] w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionSection className="w-full flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-12">
          <div className="w-full min-w-0">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCEAF4] border border-[#E20A96]/20 text-[#E20A96] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
              <Sparkles size={13} />
              <span>Agency Insights</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#292D3D] leading-tight">
              From Our <span className="text-[#E20A96]">Knowledge Base</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#53596A] sm:hidden">Swipe for articles →</p>
          </div>
          <Link
            href={ROUTES.blog}
            className="text-xs font-bold text-[#E20A96] inline-flex items-center gap-1 hover:gap-2 transition-all shrink-0"
          >
            <span>View all articles</span>
            <ArrowRight size={13} />
          </Link>
        </MotionSection>

        <div className="sm:hidden">
          <ScrollRow>
            {posts.map((post) => (
              <ScrollRowItem key={post.slug}>
                <BlogCard post={post} />
              </ScrollRowItem>
            ))}
          </ScrollRow>
        </div>

        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 w-full">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
