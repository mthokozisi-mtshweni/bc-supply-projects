
import { Hero } from "../components/Hero";
import { MobileHero } from "../components/MobileHero";
import { Benefits } from "../components/Benefits";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { Projects } from "../components/Projects";
import { Quote } from "../components/Quote";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { FAQ } from "../components/FAQ";

export function Home() {
  return (
    <main>
      <div className="bc-desktop-hero">
        <Hero />
      </div>

      <MobileHero />

      <Benefits />
      <About />
      <Services />
      <Projects />
      <FAQ />
      <Quote />
      <Contact />
      <Footer />
    </main>
  );
}
