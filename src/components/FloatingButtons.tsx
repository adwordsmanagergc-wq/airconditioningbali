import { Phone, MessageCircle } from "lucide-react";
import { telLink, waLink } from "@/lib/site";

export default function FloatingButtons() {
  return (
    <>
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-20 right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-card animate-pulse-ring sm:bottom-6 sm:right-6"
      >
        <MessageCircle size={26} aria-hidden />
      </a>
      <a
        href={telLink}
        aria-label="Call us"
        className="fixed bottom-20 left-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-brand text-white shadow-card sm:hidden"
      >
        <Phone size={24} aria-hidden />
      </a>
    </>
  );
}
