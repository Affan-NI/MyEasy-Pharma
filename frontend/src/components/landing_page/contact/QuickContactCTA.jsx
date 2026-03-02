import { Phone, MessageCircle, Mail } from "lucide-react";

export default function QuickContactCTA() {
  return (
    <div className="fixed top-44 right-4 z-50 flex flex-col gap-3">

      <a
        href="https://wa.me/919350318639"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-3 bg-green-500 text-white rounded-full shadow-lg hover:scale-110 hover:bg-green-600 transition"
      >
        <MessageCircle size={18} />
        <span className="hidden md:inline">WhatsApp</span>
      </a>

      <a
        href="tel:+919350318639"
        className="flex items-center gap-2 px-7 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:scale-110 transition"
      >
        <Phone size={18} />
        <span className="hidden md:inline">Call</span>
      </a>

      <a
        href="mailto:dfusalilchawla@gmail.com"
        className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-full shadow-lg hover:scale-110 hover:bg-red-600 transition"
      >
        <Mail size={18} />
        <span className="hidden md:inline">Email</span>
      </a>

    </div>
  );
}

