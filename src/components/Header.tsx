
import { useState } from "react";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { company, navigation } from "../data/company";
import "../styles/header.css";

export function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner site-container">
        <a href="#home" className="brand" onClick={closeMenu}>
          <img src={company.logo} alt="BC Supply & Projects" />
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="header-phone" href="tel:+27660361320">
            <Phone size={17} />
            <span>{company.phone}</span>
          </a>

          <a className="primary-button header-quote" href="#quote">
            Get a Quote <ArrowRight size={17} />
          </a>
        </div>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-navigation"
            className="mobile-navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="mobile-nav-link"
              >
                {item.label}
              </a>
            ))}

            <a
              className="primary-button"
              href="#quote"
              onClick={closeMenu}
            >
              Request a Quote <ArrowRight size={17} />
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
