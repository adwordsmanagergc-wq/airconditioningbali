import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";

// Desktop-only floating WhatsApp button; on mobile the bottom bar covers it.
// WhatsApp green is kept here only, as the recognisable channel mark.
export default function FloatingButtons() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-float hidden h-14 w-14 place-items-center rounded-full bg-[#1FA855] text-white shadow-lift transition-transform duration-200 ease-out hover:-translate-y-0.5 active:scale-[0.97] sm:grid"
    >
      <MessageCircle size={26} aria-hidden />
    </a>
  );
}
