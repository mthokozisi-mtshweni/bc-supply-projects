
import { useEffect, useState } from "react";
import "../styles/hero-slideshow.css";


const images = [
  "/images/services/hero-1.png",
  "/images/services/hero-2.png",
  "/images/services/hero-3.png",
  "/images/services/hero-4.png",
  "/images/services/hero-5.png",
  "/images/services/hero-6.png",
];


export function HeroSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (reducedMotion.matches) return;

    const interval = window.setInterval(() => {
      setActiveIndex((previous) =>
        (previous + 1) % images.length
      );
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="hero-slideshow" aria-hidden="true">
      {images.map((image, index) => (
        <img
          key={image}
          src={image}
          alt=""
          className={`hero-slide ${
            index === activeIndex ? "is-active" : ""
          }`}
          loading={index === 0 ? "eager" : "lazy"}
          fetchPriority={index === 0 ? "high" : "auto"}
        />
      ))}
    </div>
  );
}
