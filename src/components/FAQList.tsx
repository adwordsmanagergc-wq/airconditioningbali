import type { FAQ } from "@/data/faqs";

export default function FAQList({ items, title = "Frequently Asked Questions" }: { items: FAQ[]; title?: string }) {
  return (
    <section className="section">
      <div className="container-prose">
        <h2 className="h2">{title}</h2>
        <div className="mt-6 grid gap-3">
          {items.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-soft">
              <summary className="cursor-pointer list-none text-base font-semibold text-brand-ink">
                <span className="mr-2 text-brand">Q.</span>{f.q}
              </summary>
              <p className="mt-3 leading-relaxed text-slate-700" data-speakable="true">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: items.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["[data-speakable='true']"],
            },
          }),
        }}
      />
    </section>
  );
}
