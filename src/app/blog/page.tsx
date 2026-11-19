import Link from "next/link";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import { BLOG_POSTS, SITE } from "@/lib/constants";

export const metadata = {
  title: `Blog & Insights | ${SITE.name}`,
  description: "Expert engineering insights, web development guides, e-commerce playbooks, and SEO strategies from PIT.",
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-white border-b border-[#E8E8ED] py-14 sm:py-20 relative">
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            backgroundImage:
              "linear-gradient(rgba(232, 232, 237, 0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(232, 232, 237, 0.6) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCEAF4] border border-[#E20A96]/20 text-[#E20A96] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles size={13} />
            <span>Articles & Insights</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#292D3D] leading-tight mb-4">
            Digital Agency <span className="text-[#E20A96]">Knowledge Base</span>
          </h1>
          <p className="text-sm sm:text-base text-[#53596A] max-w-xl leading-relaxed">
            Practical articles on Next.js, e-commerce architectures, WhatsApp automations, and tracking setups from our engineering team.
          </p>
        </div>
      </section>

      <section className="bg-[#F7F7FA] py-14 sm:py-20 border-b border-[#E8E8ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="bg-white border border-[#E8E8ED] rounded-3xl p-6 sm:p-7 hover:-translate-y-1.5 hover:border-[#E20A96]/40 hover:shadow-[0_12px_36px_rgba(226,10,150,0.12)] transition-all duration-300 min-w-0 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FCEAF4] text-[#E20A96] border border-[#E20A96]/20">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[#53596A]">
                    <Calendar size={13} className="text-[#E20A96]" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h2 className="text-lg sm:text-xl font-bold text-[#292D3D] mb-3 leading-snug">
                  <Link href={`/blog/${post.slug}`} className="hover:text-[#E20A96] transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-xs sm:text-sm text-[#53596A] leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8E8ED]/60 flex items-center justify-between">
                <span className="text-xs text-[#53596A]">{post.date}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs font-bold text-[#E20A96] inline-flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Read Article <ArrowRight size={13} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
