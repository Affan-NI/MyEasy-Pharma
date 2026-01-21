import { Phone, MessageCircle } from "lucide-react";

export default function QuickContactCTA() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      
      {/* WhatsApp */}
      <a
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
      >
        <MessageCircle size={20} />
        WhatsApp Us
      </a>

      {/* Call */}
      <a
        href="tel:+91XXXXXXXXXX"
        className="flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition"
      >
        <Phone size={20} />
        Call Us
      </a>

    </div>
  );
}
