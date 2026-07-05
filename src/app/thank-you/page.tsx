import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Quote Request Received — A&A Flooring",
  description: "Thanks for reaching out. We'll be in touch within one business day.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="container-prose flex min-h-[60vh] flex-col items-start justify-center py-24">
      <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">
        Quote request received
      </p>
      <h1 className="mt-4 max-w-2xl font-display text-5xl md:text-6xl">
        Thanks — we'll be in touch.
      </h1>
      <p className="mt-6 max-w-xl text-lg text-[var(--color-muted)]">
        We typically respond within one business day. For anything urgent, call or
        text{" "}
        <a
          href={`tel:${siteConfig.nap.telephone}`}
          className="underline underline-offset-4 hover:text-[var(--color-accent)]"
        >
          {siteConfig.nap.telephoneDisplay}
        </a>{" "}
        — Atilla picks up.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 rounded-full bg-[var(--color-fg)] px-6 py-3 text-sm font-medium text-white hover:bg-[var(--color-accent)]"
        >
          See recent projects <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] px-6 py-3 text-sm font-medium hover:border-[var(--color-fg)]"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}
