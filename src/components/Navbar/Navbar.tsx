import { useEffect, useState } from "react";
import { Download, Menu, ScanLine, X } from "lucide-react";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Benefits", href: "#benefits" },
  { label: "Plans", href: "#plans" },
  { label: "Why Wecanserve", href: "#why-wecanserve" },
  { label: "FAQs", href: "#faq" },
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

    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setIsMenuOpen(false);
  };

  return (
    <header
      className={`${styles.navbar} ${
        isScrolled ? styles.navbarScrolled : ""
      }`}
    >
      <div className={styles.navbarContainer}>
        <a
          href="#home"
          className={styles.brand}
          onClick={(event) => handleNavigation(event, "#home")}
        >
          <span className={styles.logo}>
            <ScanLine size={23} strokeWidth={2.3} />
          </span>

          <span className={styles.brandName}>Wecanserve</span>
        </a>

        <nav className={styles.desktopNavigation}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.navLink}
              onClick={(event) => handleNavigation(event, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#download" className={styles.downloadButton}>
          <Download size={17} />
          Download App
        </a>

        <button
          type="button"
          className={styles.menuButton}
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <div
        className={`${styles.mobileMenu} ${
          isMenuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <nav className={styles.mobileNavigation}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(event) => handleNavigation(event, link.href)}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#download"
            className={styles.mobileDownloadButton}
            onClick={() => setIsMenuOpen(false)}
          >
            <Download size={18} />
            Download App
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;