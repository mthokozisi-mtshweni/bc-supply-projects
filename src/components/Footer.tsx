
import { ArrowUp, ArrowRight } from "lucide-react";
import { company, navigation } from "../data/company";
import "../styles/footer.css";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home">
              <img
                src={company.logo}
                alt="BC Supply & Projects"
              />
            </a>

            <p>
              Building Your Tomorrow.
              Supply solutions and project services
              for your business needs.
            </p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>

          <div className="footer-links">
            <h3>Our Services</h3>
            <a href="#services">General Supplies</a>
            <a href="#services">Industrial Supplies</a>
            <a href="#services">Cleaning Products</a>
            <a href="#services">Safety Equipment</a>
            <a href="#services">Project Services</a>
          </div>

          <div className="footer-action">
            <h3>Have a Project in Mind?</h3>
            <p>
              Tell us about your requirements and
              request a quotation.
            </p>

            <a href="#quote">
              Request a Quote
              <ArrowRight size={17} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {company.name}.
            All rights reserved.
          </span>

          <span className="footer-developer-credit">
            Designed & Developed by{" "}
            <a
              href="https://bendalotech.co.za"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bendalo Technology & Innovation
            </a>
          </span>

          <a href="#home">
            Back to Top <ArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
