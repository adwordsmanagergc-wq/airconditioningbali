import { site } from "@/lib/site";

const items = [
  { value: "6", label: "Brands we are authorised to install" },
  { value: site.installs, label: "Jobs completed since " + site.founded },
  { value: "15 min", label: "Typical WhatsApp quote reply" },
  { value: "24/7", label: "Emergency breakdown response" },
];

export default function TrustStrip() {
  return (
    <section aria-label="Why customers trust us" className="border-y border-black/[0.07]">
      <div className="container-prose">
        <div className="grid grid-cols-2 gap-px bg-black/[0.07] md:grid-cols-4">
          {items.map((it) => (
            <div key={it.label} className="reveal bg-cream px-4 py-7 md:px-8 md:py-9">
              <p className="readout text-3xl font-medium text-brand-ink sm:text-4xl">{it.value}</p>
              <p className="mt-1.5 text-sm text-black/60">{it.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
