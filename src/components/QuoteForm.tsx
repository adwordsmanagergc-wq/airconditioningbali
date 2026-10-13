"use client";
import { useState } from "react";
import { areas } from "@/data/areas";
import { services } from "@/data/services";

export default function QuoteForm({ defaultArea, defaultService }: { defaultArea?: string; defaultService?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError(null);
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send");
      const json = await res.json();
      if (json.whatsappLink && typeof window !== "undefined") {
        window.open(json.whatsappLink, "_blank", "noopener,noreferrer");
      }
      setStatus("ok");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setError("Could not send. Please WhatsApp us directly at +62 818-0802-9595.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-surface bg-white p-6 shadow-card sm:p-7">
      <h3 className="text-xl font-semibold tracking-[-0.02em]">Get a quote</h3>
      <p className="-mt-2 text-sm text-black/60">We reply on WhatsApp within 15 minutes during daylight hours.</p>
      <label className="grid gap-1 text-sm">
        <span className="font-medium text-black/80">Name</span>
        <input required name="name" className="rounded-xl border border-black/15 bg-cream/50 px-4 py-3 text-base text-brand-ink placeholder:text-black/50 transition-colors duration-150 hover:border-black/30 focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/20" placeholder="Your name" />
      </label>
      <label className="grid gap-1 text-sm">
        <span className="font-medium text-black/80">WhatsApp / Phone</span>
        <input required name="phone" className="rounded-xl border border-black/15 bg-cream/50 px-4 py-3 text-base text-brand-ink placeholder:text-black/50 transition-colors duration-150 hover:border-black/30 focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/20" placeholder="+62 ..." />
      </label>
      <label className="grid gap-1 text-sm">
        <span className="font-medium text-black/80">Area in Bali</span>
        <select name="area" defaultValue={defaultArea ?? ""} className="rounded-xl border border-black/15 bg-cream/50 px-4 py-3 text-base text-brand-ink placeholder:text-black/50 transition-colors duration-150 hover:border-black/30 focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/20">
          <option value="">Select area</option>
          {areas.map((a) => (
            <option key={a.slug} value={a.name}>{a.name}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-1 text-sm">
        <span className="font-medium text-black/80">Service</span>
        <select name="service" defaultValue={defaultService ?? ""} className="rounded-xl border border-black/15 bg-cream/50 px-4 py-3 text-base text-brand-ink placeholder:text-black/50 transition-colors duration-150 hover:border-black/30 focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/20">
          <option value="">Select service</option>
          {services.map((s) => (
            <option key={s.slug} value={s.shortName}>{s.shortName}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-1 text-sm">
        <span className="font-medium text-black/80">Message</span>
        <textarea name="message" rows={3} className="rounded-xl border border-black/15 bg-cream/50 px-4 py-3 text-base text-brand-ink placeholder:text-black/50 transition-colors duration-150 hover:border-black/30 focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/20" placeholder="Number of units, brand, what's happening..." />
      </label>
      <button type="submit" disabled={status === "sending"} className="btn-primary">
        {status === "sending" ? "Sending..." : "Get a quote"}
      </button>
      {status === "ok" ? <p className="text-sm text-emerald-700" role="status">Thanks. We will reply on WhatsApp shortly.</p> : null}
      {error ? <p className="text-sm text-red-700" role="alert">{error}</p> : null}
    </form>
  );
}
