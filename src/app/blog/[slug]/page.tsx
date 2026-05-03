import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQList from "@/components/FAQList";
import CTASection from "@/components/CTASection";
import QuoteForm from "@/components/QuoteForm";
import { posts, getPost } from "@/data/posts";
import { renderMarkdown } from "@/lib/markdown";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getPost(params.slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: { title: p.title, description: p.description, type: "article", publishedTime: p.date, authors: [p.author] },
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const p = getPost(params.slug);
  if (!p) return notFound();
  const html = renderMarkdown(p.body);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.title,
    description: p.description,
    datePublished: p.date,
    author: { "@type": "Person", name: p.author },
    publisher: { "@type": "Organization", name: site.name, logo: { "@type": "ImageObject", url: `${site.url}/images/logo.png` } },
    mainEntityOfPage: `${site.url}/blog/${p.slug}`,
  };

  const others = posts.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <>
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: p.title, href: `/blog/${p.slug}` }]} />
      <article className="section">
        <div className="container-prose grid gap-10 md:grid-cols-[2fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand">{p.readingTime} · {new Date(p.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p>
            <h1 className="mt-2 h1">{p.title}</h1>
            <p className="mt-4 text-lg text-slate-700">{p.excerpt}</p>
            <div className="mt-6 rounded-2xl border border-slate-100 bg-white p-4 text-sm text-slate-600 shadow-soft">
              <p><strong>By</strong> {p.author}</p>
              {p.reviewer ? <p className="mt-1">{p.reviewer}</p> : null}
            </div>
            <div className="mt-8 prose-body" dangerouslySetInnerHTML={{ __html: html }} />
          </div>
          <aside className="space-y-6 lg:sticky lg:top-24">
            <QuoteForm />
            <div className="card">
              <h3 className="h3">Related articles</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {others.map((o) => (
                  <li key={o.slug}><Link href={`/blog/${o.slug}`} className="hover:text-brand">{o.title}</Link></li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </article>
      <FAQList items={p.faq} />
      <CTASection />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    </>
  );
}
