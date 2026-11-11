
import {
  ShieldCheck,
  BadgeCheck,
  Truck,
  Tags,
} from "lucide-react";
import "../styles/benefits.css";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Reliable Service",
    description: "Professional support",
  },
  {
    icon: BadgeCheck,
    title: "Quality Products",
    description: "Quality-focused supply",
  },
  {
    icon: Truck,
    title: "On-Time Delivery",
    description: "Delivery coordination",
  },
  {
    icon: Tags,
    title: "Competitive Prices",
    description: "Value for your business",
  },
];

export function Benefits() {
  return (
    <section className="benefits-section" aria-label="Why choose us">
      <div className="benefits-inner site-container">
        {benefits.map(({ icon: Icon, title, description }) => (
          <div className="benefit-item" key={title}>
            <div className="benefit-icon">
              <Icon size={29} strokeWidth={2.2} />
            </div>

            <div className="benefit-content">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
