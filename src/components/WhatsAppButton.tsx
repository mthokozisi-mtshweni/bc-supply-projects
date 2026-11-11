
import { FaWhatsapp } from "react-icons/fa";
import "../styles/whatsapp-button.css";

export function WhatsAppButton() {
  const phone = "27660361320";

  const message =
    "Hello BC Supply & Projects, I would like to enquire about your products and services.";

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      className="bc-whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <FaWhatsapp aria-hidden="true" />
    </a>
  );
}
