
import { useState, type FormEvent } from "react";
import { Send, ArrowRight } from "lucide-react";
import { company } from "../data/company";
import "../styles/quote.css";

const serviceOptions = [
  "General Supplies",
  "Cleaning & Hygiene Products",
  "Office Stationery & Consumables",
  "Branded Promotional Products",
  "Industrial & Mining Supplies",
  "Project Management & Services",
  "Safety Equipment & Workwear",
  "Other Enquiry",
];

export function Quote() {
  const [sending, setSending] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const service = String(data.get("service") || "");
    const message = String(data.get("message") || "");

    const subject = `Quotation Request - ${service}`;

    const body = [
      "Good day BC Supply & Projects,",
      "",
      "I would like to request a quotation.",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Service: ${service}`,
      "",
      "Requirements:",
      message,
      "",
      "Kind regards,",
      name,
    ].join("\n");

    const mailto = `mailto:${company.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setSending(true);
    window.location.href = mailto;
    window.setTimeout(() => setSending(false), 1000);
  };

  return (
    <section id="quote" className="quote-section">
      <div className="site-container quote-layout">
        <div className="quote-intro">
          <span className="quote-eyebrow">
            LET'S WORK TOGETHER
          </span>

          <h2>
            Have a Requirement?
            <span> Request a Quote.</span>
          </h2>

          <p>
            Tell us what products or services you need.
            Share your requirements and we'll be happy
            to discuss your enquiry.
          </p>

          <div className="quote-highlight">
            <ArrowRight size={22} />
            <span>
              Supply enquiries, business procurement
              and project requirements.
            </span>
          </div>
        </div>

        <form className="quote-form" onSubmit={handleSubmit}>
          <div className="quote-form-heading">
            <h3>Request a Quotation</h3>
            <p>Complete the details below to prepare your enquiry.</p>
          </div>

          <div className="quote-form-row">
            <label>
              Full Name *
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                required
              />
            </label>

            <label>
              Email Address *
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
              />
            </label>
          </div>

          <div className="quote-form-row">
            <label>
              Phone Number *
              <input
                type="tel"
                name="phone"
                placeholder="Your contact number"
                required
              />
            </label>

            <label>
              Service Required *
              <select name="service" required defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                {serviceOptions.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label>
            Your Requirements *
            <textarea
              name="message"
              rows={5}
              placeholder="Describe the products or services you need..."
              required
            />
          </label>

          <button
            type="submit"
            className="quote-submit"
            disabled={sending}
          >
            <Send size={18} />
            Prepare Email Enquiry
            <ArrowRight size={18} />
          </button>

          <p className="quote-note">
            This opens your email application. Please send
            the prepared message to complete your enquiry.
          </p>
        </form>
      </div>
    </section>
  );
}
