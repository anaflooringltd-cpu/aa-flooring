import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts, formatBlogDate } from "@/lib/blog-content";
import { JsonLd, breadcrumbSchema } from "@/lib/seo/jsonld";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Flooring Tips & Advice",
  description:
    "Guides on hardwood flooring costs, care, installation, and choosing the right floor for your BC home — from A&A Flooring in Coquitlam.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: absoluteUrl("/") },
          { name: "Blog", url: absoluteUrl("/blog") },
        ])}
      />

      <section className="container-prose pt-20 pb-12">
        <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">
          Flooring Advice
        </p>
        <h1 className="mt-4 font-display text-5xl md:text-6xl">Tips & Guides</h1>
        <p className="mt-6 max-w-2xl text-lg text-[var(--color-muted)]">
          Honest advice on choosing, installing, and caring for hardwood, vinyl, and laminate
          floors in BC homes.
        </p>
      </section>

      <section className="container-prose pb-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-[var(--radius-card)] border border-[var(--color-line)] bg-white p-6 transition hover:border-[var(--color-fg)]"
            >
              <div className="flex flex-wrap gap-2">
                {post.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[var(--color-accent-soft)] px-3 py-0.5 text-xs text-[var(--color-accent)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="mt-4 font-display text-xl leading-snug group-hover:text-[var(--color-accent)]">
                {post.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">
                {post.excerpt}
              </p>
              <div className="mt-6 flex items-center justify-between text-xs text-[var(--color-muted)]">
                <span>{formatBlogDate(post.publishedAt)}</span>
                <span>{post.readMinutes} min read</span>
              </div>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium">
                Read more
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
