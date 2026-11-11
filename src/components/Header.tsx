
import { useEffect, useRef, useState } from "react";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { company, navigation } from "../data/company";
import "../styles/header.css";

export function Header() {
  const [open, setOpen] = useState(false);



const [isScrolled, setIsScrolled] = useState(
  () => window.scrollY > 0
);

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  window.addEventListener("scroll", handleScroll, {
    passive: true,
  });

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);



  const [activeSection, setActiveSection] = useState("home");
  const pendingSection = useRef<string | null>(null);

  const closeMenu = () => {
    pendingSection.current = null;
    setOpen(false);
  };

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);

    if (!target) {
      console.warn(`Navigation section #${id} not found`);
      return;
    }

    const header =
      document.querySelector<HTMLElement>(".site-header");

    const headerHeight =
      header?.getBoundingClientRect().height ?? 72;

    const targetY =
      window.scrollY +
      target.getBoundingClientRect().top -
      headerHeight -
      12;

    window.scrollTo({
      top: Math.max(0, targetY),
      behavior: window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
        ? "instant"
        : "smooth",
    });

    window.history.replaceState(
      null,
      "",
      `#${id}`
    );

    setActiveSection(id);
  };

  const handleMobileClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();

    pendingSection.current = href.slice(1);
    setOpen(false);
  };

  const handleMenuExit = () => {
    const section = pendingSection.current;
    pendingSection.current = null;

    if (section) {
      scrollToSection(section);
    }
  };

  useEffect(() => {
    const ids = navigation.map((item) =>
      item.href.slice(1)
    );

    const updateActiveSection = () => {
      if (pendingSection.current) return;

      const headerHeight =
        document
          .querySelector<HTMLElement>(".site-header")
          ?.getBoundingClientRect().height ?? 72;

      let active = "home";

      for (const id of ids) {
        const section = document.getElementById(id);

        if (
          section &&
          section.getBoundingClientRect().top <=
            headerHeight + 40
        ) {
          active = id;
        }
      }

      setActiveSection(active);
    };

    window.addEventListener(
      "scroll",
      updateActiveSection,
      { passive: true }
    );

    updateActiveSection();

    return () => {
      window.removeEventListener(
        "scroll",
        updateActiveSection
      );
    };
  }, []);

  return (
    <header
 className={`site-header ${
  isScrolled || open ? "header-scrolled" : ""
}`}
>
      <div className="header-inner site-container">
        <a
          href="#home"
          className="brand"
          onClick={(event) => {
            if (window.innerWidth <= 900) {
              handleMobileClick(event, "#home");

              if (!open) {
                pendingSection.current = null;
                scrollToSection("home");
              }
            } else {
              closeMenu();
            }
          }}
        >
          <img
            src={company.logo}
            alt="BC Supply & Projects"
          />
        </a>

        <nav
          className="desktop-nav"
          aria-label="Main navigation"
        >
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
          <a
            className="header-phone"
            href="tel:+27660361320"
          >
            <Phone size={17} />
            <span>{company.phone}</span>
          </a>

          <a
            className="primary-button header-quote"
            href="#quote"
          >
            Get a Quote
            <ArrowRight size={17} />
          </a>
        </div>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => {
            pendingSection.current = null;
            setOpen((previous) => !previous);
          }}
        >
          {open ? (
            <X size={25} />
          ) : (
            <Menu size={25} />
          )}
        </button>
      </div>

      <AnimatePresence onExitComplete={handleMenuExit}>
        {open && (
          <motion.nav
            id="mobile-navigation"
            className="mobile-navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{ duration: 0.25 }}
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) =>
                  handleMobileClick(event, item.href)
                }
                className={`mobile-nav-link ${
                  activeSection === item.href.slice(1)
                    ? "active"
                    : ""
                }`}
              >
                {item.label}
              </a>
            ))}

            <a
              className="primary-button"
              href="#quote"
              onClick={(event) =>
                handleMobileClick(event, "#quote")
              }
            >
              Request a Quote
              <ArrowRight size={17} />
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
