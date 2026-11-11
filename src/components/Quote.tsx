
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

  
const handleSubmit = async (
  event: FormEvent<HTMLFormElement>
) => {
  event.preventDefault();

  if (sending) return;

  const form = event.currentTarget;
  const data = new FormData(form);

  const service = String(data.get("service") || "");
  const email = String(data.get("email") || "");

  data.append(
    "_subject",
    `New Quotation Request - ${service}`
  );

  data.append("_replyto", email);
  data.append("_captcha", "true");
  data.append("_template", "table");

  setSending(true);

  try {
    const response = await fetch(
      `https://formsubmit.co/ajax/${company.email}`,
      {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to send enquiry");
    }

    const result = await response.json();

    if (
      result.success !== true &&
      result.success !== "true"
    ) {
      throw new Error("Submission was not accepted");
    }

    form.reset();

    alert(
      "Your quotation request has been submitted successfully!"
    );
  } catch (error) {
    console.error("Quotation submission error:", error);

    alert(
      "Unable to send your enquiry. Please try again."
    );
  } finally {
    setSending(false);
  }
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
            {sending ? "Sending Message..." : "Send Message"}
            <ArrowRight size={18} />
          </button>

          <p className="quote-note">
            Your enquiry will be sent directly to our team.
            We'll get back to you as soon as possible.
          </p>
        </form>

      </div>
    </section>
  );
}
