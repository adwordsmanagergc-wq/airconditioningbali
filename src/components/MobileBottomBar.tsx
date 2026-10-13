import Link from "next/link";
import { Phone, MessageCircle, FileText } from "lucide-react";
import { telLink, waLink } from "@/lib/site";

export default function MobileBottomBar() {
  return (
    <nav className="fixed inset-x-3 bottom-3 z-bar grid grid-cols-3 overflow-hidden rounded-full border border-black/10 bg-white/85 shadow-lift backdrop-blur-xl sm:hidden" aria-label="Quick actions">
      <a href={telLink} className="flex min-h-[52px] items-center justify-center gap-1.5 text-sm font-medium text-brand-ink active:scale-[0.97]">
        <Phone size={17} aria-hidden /> Call
      </a>
      <a href={waLink()} className="flex min-h-[52px] items-center justify-center gap-1.5 bg-brand text-sm font-medium text-white active:scale-[0.97]" target="_blank" rel="noopener noreferrer">
        <MessageCircle size={17} aria-hidden /> WhatsApp
      </a>
      <Link href="/contact" className="flex min-h-[52px] items-center justify-center gap-1.5 text-sm font-medium text-brand-ink active:scale-[0.97]">
        <FileText size={17} aria-hidden /> Get a quote
      </Link>
    </nav>
  );
}
