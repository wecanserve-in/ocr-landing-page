import { Mail, MapPin } from "lucide-react";
import styles from "./Footer.module.css";
import logoImg from "../../assets/Logowithoutbg.png";

const quickLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Benefits", href: "#benefits" },
  { label: "Pricing", href: "#plans" },
  { label: "Why ScanMyCard", href: "#why-scanmycard" },
  { label: "FAQ", href: "#faq" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Security", href: "#" },
  { label: "Contact Support", href: "mailto:support@scanmycard.app" },
];

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topGrid}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <img
                src={logoImg}
                alt="ScanMyCard Logo"
                className={styles.footerLogoImage}
              />
            </div>
            <p className={styles.brandDesc}>
              The intelligent AI business card scanner that turns physical interactions into digital relationships.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
              <a href="#" className={styles.socialLink} aria-label="Twitter">
                <TwitterIcon />
              </a>
            </div>
          </div>

          <div className={styles.linkGroup}>
            <h4>Product</h4>
            <ul>
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linkGroup}>
            <h4>Support &amp; Legal</h4>
            <ul>
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.contact}>
            <h4>Get in Touch</h4>
            <ul>
              <li>
                <span className={styles.contactIcon}>
                  <Mail size={16} />
                </span>
                <span>contact@scanmycard.app</span>
              </li>
              <li>
                <span className={styles.contactIcon}>
                  <MapPin size={16} />
                </span>
                <span>Global / Remote</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>&copy; 2026 ScanMyCard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}