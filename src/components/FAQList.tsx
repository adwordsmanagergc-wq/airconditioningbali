import { Plus } from "lucide-react";
import type { FAQ } from "@/data/faqs";

export default function FAQList({ items, title = "Frequently asked questions" }: { items: FAQ[]; title?: string }) {
  return (
    <section className="section">
      <div className="container-prose grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="h2 reveal">{title}</h2>
          <p className="mt-4 max-w-sm text-black/60">Still unsure? Send a photo of the unit on WhatsApp and a technician will reply.</p>
        </div>
        <div className="divide-y divide-black/[0.08] border-y border-black/[0.08]">
          {items.map((f) => (
            <details key={f.q} className="group">
              <summary className="flex min-h-[44px] cursor-pointer list-none items-start justify-between gap-6 py-5 text-[1.0625rem] font-medium tracking-[-0.01em] text-brand-ink transition-colors duration-150 hover:text-brand">
                {f.q}
                <Plus size={20} className="faq-icon mt-0.5 shrink-0 text-brand" aria-hidden />
              </summary>
              <p className="faq-body max-w-[65ch] pb-6 leading-relaxed text-black/70" data-speakable="true">{f.a}</p>
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
