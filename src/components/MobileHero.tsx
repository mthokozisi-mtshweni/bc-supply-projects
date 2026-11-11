
import {
  ArrowRight,
  FileText,
  ChevronDown,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import "../styles/mobile-hero.css";
import { HeroSlideshow } from "./HeroSlideshow";

export function MobileHero() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="bc-mobile-hero"
      aria-label="BC Supply & Projects"
    >
      {/* Background image */}
     <div className="bc-mobile-hero-visual">
  <HeroSlideshow />
</div>

      {/* Navy gradient */}
      <div
        className="bc-mobile-hero-shade"
        aria-hidden="true"
      />

      {/* Centered hero content */}
      <motion.div
        className="bc-mobile-hero-content"
        initial={
          reducedMotion
            ? false
            : { opacity: 0, y: 20 }
        }
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.65,
          ease: "easeOut",
        }}
      >
        <div className="bc-mobile-hero-eyebrow">
          <span aria-hidden="true" />
          BC SUPPLY & PROJECTS
        </div>

        <h1>
          Your Trusted
          <br />
          Partner in
          <span>Supplies and Projects.</span>
        </h1>

        <p className="bc-mobile-hero-description">
          Reliable supply solutions and project services
          for businesses, construction, mining and everyday
          operational needs.
        </p>

        <div className="bc-mobile-hero-actions">
          <a
            href="#services"
            className="bc-mobile-primary"
          >
            Explore Our Services
            <ArrowRight
              size={18}
              strokeWidth={2.3}
              aria-hidden="true"
            />
          </a>

          <a
            href="#quote"
            className="bc-mobile-secondary"
          >
            <FileText
              size={18}
              strokeWidth={2}
              aria-hidden="true"
            />
            Request a Quote
          </a>
        </div>

        <p className="bc-mobile-hero-region">
          Serving Gauteng, Mpumalanga & Limpopo
        </p>
      </motion.div>

      {/* Scroll to About Us */}
      <a
        href="#about"
        className="bc-mobile-hero-scroll"
        aria-label="Scroll to About Us"
      >
        <span>Discover More</span>
        <ChevronDown size={17} aria-hidden="true" />
      </a>
    </section>
  );
}
