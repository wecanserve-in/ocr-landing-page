import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";
import logoImg from "../../assets/Logowithoutbg.png";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Benefits", href: "#benefits" },
  { label: "Demo", href: "#demo" },
  { label: "Pricing", href: "#plans" },
  // { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();

    const section = document.querySelector(href);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsMenuOpen(false);
  };

  return (
    <header
      className={`${styles.navbar} ${
        isScrolled ? styles.navbarScrolled : ""
      }`}
    >
      <div className={styles.navbarContainer}>

        {/* LOGO */}
        <a
          href="#home"
          className={styles.brand}
          onClick={(event) => handleNavigation(event, "#home")}
          aria-label="ScanMyCard Home"
        >
          <img
            src={logoImg}
            alt="ScanMyCard"
            className={styles.brandLogoImage}
          />
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav
          className={styles.desktopNavigation}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.navLink}
              onClick={(event) =>
                handleNavigation(event, link.href)
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <a
          href="#download"
          className={styles.downloadButton}
          onClick={(event) =>
            handleNavigation(event, "#download")
          }
        >
          <Download size={17} strokeWidth={2.2} />
          <span>Get the App</span>
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className={styles.menuButton}
          onClick={() =>
            setIsMenuOpen((current) => !current)
          }
          aria-label={
            isMenuOpen ? "Close menu" : "Open menu"
          }
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X size={25} strokeWidth={2} />
          ) : (
            <Menu size={25} strokeWidth={2} />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`${styles.mobileMenu} ${
          isMenuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <nav
          className={styles.mobileNavigation}
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.mobileNavLink}
              onClick={(event) =>
                handleNavigation(event, link.href)
              }
            >
              <span>{link.label}</span>
              <span className={styles.mobileArrow}>→</span>
            </a>
          ))}

          <a
            href="#download"
            className={styles.mobileDownloadButton}
            onClick={(event) =>
              handleNavigation(event, "#download")
            }
          >
            <Download size={18} strokeWidth={2.2} />
            Get the App
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;