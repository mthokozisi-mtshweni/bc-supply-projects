
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { company } from "../data/company";
import "../styles/contact.css";

export function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="site-container">
        <div className="contact-heading">
          <span>GET IN TOUCH</span>
          <h2>
            Let's Build Something <em>Great Together.</em>
          </h2>
          <p>
            Contact BC Supply & Projects for general
            enquiries, product requests or project discussions.
          </p>
        </div>

        <div className="contact-grid">
          <a
            className="contact-card"
            href="tel:+27660361320"
          >
            <div className="contact-icon">
              <Phone size={25} />
            </div>
            <div>
              <span>CALL US</span>
              <h3>{company.phone}</h3>
              <p>Speak to our team</p>
            </div>
            <ArrowUpRight size={18} />
          </a>

          <a
            className="contact-card"
            href={`mailto:${company.email}`}
          >
            <div className="contact-icon">
              <Mail size={25} />
            </div>
            <div>
              <span>EMAIL US</span>
              <h3>{company.email}</h3>
              <p>Send us your enquiry</p>
            </div>
            <ArrowUpRight size={18} />
          </a>

          <div className="contact-card">
            <div className="contact-icon">
              <MapPin size={25} />
            </div>
            <div>
              <span>OUR LOCATION</span>
              <h3>{company.address}</h3>
              <p>eMalahleni, South Africa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
