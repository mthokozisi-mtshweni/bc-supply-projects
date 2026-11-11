
import { motion, useReducedMotion } from "motion/react";
import {
  Target,
  Eye,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import "../styles/about.css";

const values = [
  "Professionalism",
  "Integrity",
  "Quality",
  "Customer Focus",
];

export function About() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="about" className="about-section">
      <div className="site-container">
        <div className="about-layout">
          <motion.div
            className="about-intro"
            initial={reducedMotion ? false : { opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="about-eyebrow">
              ABOUT BC SUPPLY & PROJECTS
            </span>

            <h2>
              Building Stronger
              <span> Business Partnerships.</span>
            </h2>

                    <p>
            BC Supply & Projects is a South African
            supply and project services business based
            in eMalahleni, Mpumalanga, proudly serving
            clients across Gauteng, Mpumalanga and Limpopo.
            </p>
            <p>
              We focus on providing businesses with access
              to general supplies, industrial products,
              cleaning and hygiene essentials, office
              consumables, safety equipment, branded
              products, and project-related services.
            </p>

            <div className="about-service-area">
  <MapPin size={22} strokeWidth={2} />

  <div>
    <strong>Our Service Areas</strong>
    <p>Gauteng • Mpumalanga • Limpopo</p>
  </div>
</div>

            <a href="#contact" className="about-link">
              Get in Touch
              <ArrowRight size={18} />
            </a>
          </motion.div>

          <motion.div
            className="about-cards"
            initial={reducedMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <article className="about-info-card">
              <div className="about-card-icon">
                <Target size={26} />
              </div>

              <h3>Our Mission</h3>

              <p>
                To support businesses through practical
                supply solutions, responsive service,
                and a commitment to quality.
              </p>
            </article>

            <article className="about-info-card">
              <div className="about-card-icon">
                <Eye size={26} />
              </div>

              <h3>Our Vision</h3>

              <p>
                To become a trusted supply and project
                services partner for businesses across
                different industries.
              </p>
            </article>

            <article className="about-info-card values-card">
              <div className="about-card-icon">
                <ShieldCheck size={26} />
              </div>

              <h3>Our Values</h3>

              <div className="about-values">
                {values.map((value) => (
                  <div key={value}>
                    <CheckCircle2 size={16} />
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </article>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
