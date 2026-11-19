import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Sparkles } from "lucide-react";
import { BLOG_POSTS, getBlogPost, ROUTES, SITE } from "@/lib/constants";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: `Post Not Found | ${SITE.name}` };
  return { title: `${post.title} | ${SITE.name} Blog`, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const paragraphs = post.content.split("\n\n").filter(Boolean);

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

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative min-w-0">
          <Link
            href={ROUTES.blog}
            className="text-xs font-bold text-[#E20A96] inline-flex items-center gap-1.5 mb-6 hover:gap-2.5 transition-all"
          >
            <ArrowLeft size={14} /> <span>Back to all articles</span>
          </Link>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FCEAF4] text-[#E20A96] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles size={12} />
            <span>{post.category}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#292D3D] leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-2 text-xs text-[#53596A]">
            <Calendar size={14} className="text-[#E20A96]" />
            <span>Published {post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      <article className="bg-[#F7F7FA] py-14 sm:py-20 border-b border-[#E8E8ED]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#E8E8ED] rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
            {paragraphs.map((para) => (
              <p
                key={para.slice(0, 24)}
                className="text-sm sm:text-base text-[#292D3D]/90 leading-relaxed"
              >
                {para}
              </p>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href={ROUTES.consultation}
              className="inline-flex items-center gap-2 bg-[#E20A96] hover:bg-[#C40882] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full shadow-[0_4px_14px_rgba(226,10,150,0.26)] transition-all"
            >
              <span>Discuss Your Project with PIT</span>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
