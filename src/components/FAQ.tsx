
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Minus, Plus } from "lucide-react";
import "../styles/faq.css";

const faqs = [
  {
    question: "What products and services do you offer?",
    answer:
      "BC Supply & Projects provides general supplies, cleaning and hygiene products, office stationery, branded promotional products, industrial and mining supplies, safety equipment and workwear, as well as project management services.",
  },
  {
    question: "How can I request a quotation?",
    answer:
      "You can request a quotation through our website or contact us directly. Please include the products or services you need, quantities and any relevant specifications.",
  },
  {
    question: "Where is BC Supply & Projects located?",
    answer:
      "We are based in eMalahleni, Mpumalanga, South Africa.",
  },
  {
    question: "Do you supply products to businesses and individuals?",
    answer:
      "You are welcome to enquire about your requirements. Our team can confirm whether we can assist with your specific request.",
  },
  {
    question: "Do you provide industrial and mining supplies?",
    answer:
      "Yes. Industrial and mining supplies are part of our service offering. Contact us with your requirements so we can confirm availability.",
  },
  {
    question: "Can I request products not listed on your website?",
    answer:
      "Yes. Send us the details of the products you need, and we can review your request and confirm whether we can assist.",
  },
  {
    question: "How long does it take to receive a quotation?",
    answer:
      "Quotation turnaround depends on the products, quantities and specifications requested. Contact us for an estimated response time.",
  },
];

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bc-faq-section">
      <div className="site-container bc-faq-layout">
        <div className="bc-faq-intro">
          <span className="bc-faq-eyebrow">
            NEED TO KNOW MORE?
          </span>

          <h2>
            Frequently Asked
            <span> Questions.</span>
          </h2>

          <p>
            Find answers to common questions about our
            products, services and quotation process.
          </p>

          <div className="bc-faq-contact">
            <p>Still have questions?</p>

            <a href="#contact" className="bc-faq-contact-link">
              Contact Our Team
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <div className="bc-faq-list">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            const answerId = `bc-faq-answer-${index}`;

            return (
              <div
                key={faq.question}
                className={`bc-faq-item ${isOpen ? "is-open" : ""}`}
              >
                <button
                  type="button"
                  className="bc-faq-question"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() =>
                    setActiveIndex(isOpen ? null : index)
                  }
                >
                  <span>{faq.question}</span>

                  <span className="bc-faq-toggle" aria-hidden="true">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={answerId}
                      key="answer"
                      className="bc-faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.28,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="bc-faq-answer-inner">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
