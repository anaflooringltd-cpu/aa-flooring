import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts, getBlogPost, formatBlogDate } from "@/lib/blog-content";
import { QuoteForm } from "@/components/quote-form";
import { JsonLd, breadcrumbSchema, articleSchema } from "@/lib/seo/jsonld";
import { absoluteUrl } from "@/lib/utils";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: absoluteUrl(`/blog/${slug}`),
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const url = absoluteUrl(`/blog/${slug}`);
  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: absoluteUrl("/") },
            { name: "Blog", url: absoluteUrl("/blog") },
            { name: post.title, url },
          ]),
          articleSchema({
            title: post.title,
            description: post.metaDescription,
            url,
            publishedAt: post.publishedAt,
          }),
        ]}
      />

      <section className="container-prose pt-20 pb-10">
        <Link
          href="/blog"
          className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)] hover:text-[var(--color-fg)]"
        >
          &larr; All articles
        </Link>

        <div className="mt-6 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[var(--color-accent-soft)] px-3 py-0.5 text-xs text-[var(--color-accent)]"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight md:text-5xl">
          {post.title}
        </h1>

        <p className="mt-4 text-sm text-[var(--color-muted)]">
          {formatBlogDate(post.publishedAt)} &middot; {post.readMinutes} min read
        </p>
      </section>

      <section className="container-prose pb-24">
        <div className="grid gap-12 lg:grid-cols-3">
          <article className="lg:col-span-2">
            <p className="text-lg leading-relaxed text-[var(--color-muted)]">{post.excerpt}</p>

            {post.sections.map((section, i) => (
              <div key={i} className="mt-10">
                {section.heading && (
                  <h2 className="font-display text-2xl">{section.heading}</h2>
                )}
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="mt-4 leading-relaxed text-[var(--color-muted)]">
                    {p}
                  </p>
                ))}
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {section.bullets.map((b, k) => (
                      <li
                        key={k}
                        className="flex gap-2 leading-relaxed text-[var(--color-muted)]"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div className="mt-14 rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-accent-soft)] p-6">
              <p className="font-display text-xl">Need flooring advice for your home?</p>
              <p className="mt-2 text-sm text-[var(--color-muted)]">
                We do free site visits throughout Coquitlam, Burnaby, Vancouver, and the
                Lower Mainland. Come see us or book a visit.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[var(--color-fg)] px-5 py-2.5 text-sm font-medium text-white hover:bg-[var(--color-accent)]"
              >
                Request a free quote <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </article>

          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <QuoteForm />
            </div>
          </aside>
        </div>

        {otherPosts.length > 0 && (
          <div className="mt-20 border-t border-[var(--color-line)] pt-12">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">
              More articles
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex flex-col gap-2 rounded-[var(--radius-card)] border border-[var(--color-line)] bg-white p-5 transition hover:border-[var(--color-fg)]"
                >
                  <h3 className="font-display text-lg leading-snug group-hover:text-[var(--color-accent)]">
                    {p.title}
                  </h3>
                  <p className="text-xs text-[var(--color-muted)]">{p.readMinutes} min read</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
