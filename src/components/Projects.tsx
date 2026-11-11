
import { motion, useReducedMotion } from "motion/react";
import {
  Factory,
  Building2,
  HardHat,
  ArrowUpRight,
} from "lucide-react";
import "../styles/projects.css";

const capabilities = [
  {
    icon: Factory,
    number: "01",
    title: "Industrial Supply",
    description:
      "Sourcing and supplying products for industrial and operational requirements.",
  },
  {
    icon: Building2,
    number: "02",
    title: "Business Procurement",
    description:
      "Supporting organisations with general supplies, office essentials and procurement needs.",
  },
  {
    icon: HardHat,
    number: "03",
    title: "Project Support",
    description:
      "Supply coordination and project-related services tailored to customer requirements.",
  },
];

export function Projects() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="projects" className="projects-section">
      <div className="site-container">
        <div className="projects-heading">
          <div>
            <span className="projects-eyebrow">
              WHAT WE CAN SUPPORT
            </span>
            <h2>
              Built for Business.
              <span> Ready for Your Next Project.</span>
            </h2>
          </div>
          <p>
            From everyday business supplies to industrial
            procurement and project support, we offer
            solutions tailored to your requirements.
          </p>
        </div>

        <div className="projects-grid">
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className="project-card"
                key={item.number}
                initial={
                  reducedMotion
                    ? false
                    : { opacity: 0, y: 28 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >
                <div className="project-card-top">
                  <div className="project-icon">
                    <Icon size={28} />
                  </div>
                  <span>{item.number}</span>
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <a href="#quote">
                  Discuss Your Requirements
                  <ArrowUpRight size={17} />
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
