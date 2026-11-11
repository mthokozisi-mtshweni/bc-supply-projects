
import { useRef } from "react";
import {
  ShoppingCart,
  SprayCan,
  Pencil,
  Gift,
  HardHat,
  Settings,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import "../styles/services.css";

const services = [
  {
    title: "General Supplies",
    image: "/images/services/General Supplies.jpg",
    icon: ShoppingCart,
  },
  {
    title: "Cleaning & Hygiene Products",
    image: "/images/services/Cleaning.jpg",
    icon: SprayCan,
  },
  {
    title: "Office Stationery & Consumables",
    image: "/images/services/Stationary.jpg",
    icon: Pencil,
  },
  {
    title: "Branded Promotional Products",
    image: "/images/services/BC Supply & Projects Desk Collection.png",
    icon: Gift,
  },
  {
    title: "Industrial & Mining Supplies",
    image: "/images/services/Industrials.jpg",
    icon: HardHat,
  },
  {
    title: "Project Management & Services",
    image: "/images/services/Project Management & Equipment.jpg",
    icon: Settings,
  },
  {
    title: "Safety Equipment & Workwear",
    image: "/images/services/WorkWear.png",
    icon: ShieldCheck,
  },
];

export function Services() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const scroll = (direction: number) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const card = carousel.querySelector<HTMLElement>(".service-card");
    const distance = card ? card.offsetWidth + 14 : 240;

    carousel.scrollBy({
      left: direction * distance,
      behavior: reducedMotion ? "instant" : "smooth",
    });
  };

  return (
    <section id="services" className="services-section">
      <div className="site-container">
        <motion.div
          className="services-heading"
          initial={reducedMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-eyebrow">
            OUR PRODUCTS & SERVICES
          </p>

          <h2>
            Solutions for Your <span>Business Needs</span>
          </h2>

          <p>
            A wide range of supply solutions and project services
            to support your business operations.
          </p>
        </motion.div>

        <div className="services-carousel" ref={carouselRef}>
          {services.map(({ title, image, icon: Icon }, index) => (
            <motion.a
              href={`#quote`}
              className="service-card"
              key={title}
              initial={reducedMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: reducedMotion ? 0 : Math.min(index * 0.06, 0.3),
              }}
            >
              <img
                src={image}
                alt={title}
                loading="lazy"
              />

              <div className="service-card-overlay">
                <Icon size={28} strokeWidth={1.8} />
                <h3>{title}</h3>
                <ArrowUpRight
                  size={16}
                  className="service-arrow"
                />
              </div>
            </motion.a>
          ))}
        </div>

        <div className="services-carousel-controls">
          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label="Previous services"
          >
            <ChevronLeft size={22} />
          </button>

          <span>Explore Our Services</span>

          <button
            type="button"
            onClick={() => scroll(1)}
            aria-label="Next services"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}
