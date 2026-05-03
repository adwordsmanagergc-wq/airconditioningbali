import Link from "next/link";
import { Phone, MessageCircle, FileText } from "lucide-react";
import { telLink, waLink } from "@/lib/site";

export default function MobileBottomBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-3 border-t border-slate-200 bg-white sm:hidden" role="navigation" aria-label="Quick actions">
      <a href={telLink} className="flex flex-col items-center gap-0.5 py-3 text-xs font-semibold text-brand" aria-label="Call us">
        <Phone size={18} aria-hidden /> Call
      </a>
      <a href={waLink()} className="flex flex-col items-center gap-0.5 py-3 text-xs font-semibold text-[#25D366]" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
        <MessageCircle size={18} aria-hidden /> WhatsApp
      </a>
      <Link href="/contact" className="flex flex-col items-center gap-0.5 py-3 text-xs font-semibold text-brand-ink" aria-label="Get a quote">
        <FileText size={18} aria-hidden /> Get Quote
      </Link>
    </div>
  );
}
