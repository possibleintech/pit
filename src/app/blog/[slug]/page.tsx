import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  BLOG_POSTS,
  getBlogPost,
  getRelatedPosts,
  ROUTES,
  SITE,
} from "@/lib/constants";
import { JsonLd } from "@/components/common/JsonLd";
import { articleJsonLd } from "@/lib/seo/json-ld";
import { TYPO } from "@/lib/constants/typography";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: `Post Not Found | ${SITE.name}` };

  const url = `${SITE.url}${ROUTES.blog}/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

function renderBlocks(content: string) {
  return content.split("\n\n").filter(Boolean).map((block) => {
    if (block.startsWith("## ")) {
      return (
        <h2 key={block} className="mt-10 mb-3 text-xl font-extrabold text-navy sm:text-2xl">
          {block.replace("## ", "")}
        </h2>
      );
    }
    if (block.startsWith("- ") || block.match(/^\d+\. /)) {
      const items = block.split("\n").filter(Boolean);
      const ordered = /^\d+\. /.test(items[0] ?? "");
      const ListTag = ordered ? "ol" : "ul";
      return (
        <ListTag
          key={block}
          className={`mb-4 space-y-2 text-sm leading-relaxed text-secondary-pit sm:text-base ${
            ordered ? "list-decimal pl-5" : "list-disc pl-5"
          }`}
        >
          {items.map((item) => (
            <li key={item}>{item.replace(/^(- |\d+\. )/, "")}</li>
          ))}
        </ListTag>
      );
    }

    const withLinks = block.split(/(\[[^\]]+\]\([^)]+\))/g).map((part) => {
      const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (!match) return part;
      return (
        <Link key={part} href={match[2]} className="font-semibold text-magenta hover:underline">
          {match[1]}
        </Link>
      );
    });

    return (
      <p key={block} className="mb-4 text-sm leading-relaxed text-secondary-pit sm:text-base">
        {withLinks}
      </p>
    );
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug);
  const schema = articleJsonLd(slug);

  return (
    <>
      {schema ? <JsonLd data={schema} /> : null}
      <section className="page-hero-shell">
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href={ROUTES.blog}
            className="mb-6 inline-flex items-center gap-1.5 text-xs font-bold text-magenta"
          >
            <ArrowLeft size={14} /> Back to articles
          </Link>
          <p className={TYPO.sectionEyebrow}>{post.category}</p>
          <h1 className={`${TYPO.pageTitle} mt-3 mb-4`}>{post.title}</h1>
          <p className="text-xs text-secondary-pit">
            Published {post.date} · {post.readTime}
          </p>
        </div>
      </section>

      <article className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">{renderBlocks(post.content)}</div>
      </article>

      <section className="border-t border-pit bg-pit-grey py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className={`${TYPO.sectionTitle} mb-3`}>Discuss your project with PIT</h2>
          <p className={`${TYPO.sectionSubtitle} mx-auto mb-6 max-w-xl`}>
            Want help applying these ideas to your product or storefront?
          </p>
          <Link
            href={ROUTES.consultation}
            className="btn-primary inline-flex items-center gap-2 text-sm"
          >
            Book a consultation <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="border-t border-pit bg-white py-14">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="mb-6 text-lg font-extrabold text-navy">Related articles</h2>
            <div className="space-y-4">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`${ROUTES.blog}/${item.slug}`}
                  className="block border border-pit p-4 transition-colors hover:border-magenta/40"
                >
                  <p className="text-sm font-bold text-navy">{item.title}</p>
                  <p className="mt-1 text-xs text-secondary-pit">{item.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
