

import { ArrowRight, FileText } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import "../styles/hero.css";

export function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="home" className="hero-section">
      <div className="hero-image">
        <img
            src="/images/hero-image.png"
            alt="BC Supply & Projects construction and supply solutions"
        />
      </div>

      <div className="hero-blue-accent" />

      <div className="hero-content site-container">
        <motion.div
          className="hero-copy"
          initial={reducedMotion ? false : { opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="hero-eyebrow">
            BC SUPPLY PROJECTS
          </p>

          <h1>
            Your Trusted Partner in
            <span> Supplies and Projects</span>
          </h1>

          <p className="hero-description">
            Reliable supply solutions and project services
            for businesses, construction, mining and everyday
            operational needs.
          </p>

          
<div className="hero-buttons">
  <a href="#services" className="primary-button">
    Explore Our Services
    <ArrowRight size={18} />
  </a>

  <a href="#quote" className="outline-button">
    <FileText size={18} />
    Request a Quote
  </a>
</div>

        </motion.div>
      </div>
    </section>
  );
}
