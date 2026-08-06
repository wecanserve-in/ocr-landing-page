import { motion } from "framer-motion";
import {
  CheckCircle2,
  Download,
  Play,
  ScanLine,
  ShieldCheck,
  WifiOff,
} from "lucide-react";
import styles from "./Hero.module.css";
import appHomeImage from "../../assets/app-home.png";

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.backgroundGlowOne}></div>
      <div className={styles.backgroundGlowTwo}></div>

      <span className={`${styles.decorativePlus} ${styles.plusOne}`}>+</span>
      <span className={`${styles.decorativePlus} ${styles.plusTwo}`}>+</span>
      <span className={`${styles.decorativePlus} ${styles.plusThree}`}>+</span>

      <div className={styles.heroContainer}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className={styles.badge}>
            <ScanLine size={16} />
            <span>AI-Powered Business Card Scanner</span>
          </div>

          <h1 className={styles.heroTitle}>
            Scan. Save. Connect.
            <br />
            All in{" "}
            <span className={styles.highlightedText}>
              One Scan
              <span className={styles.underline}></span>
            </span>
            .
          </h1>

          <p className={styles.heroDescription}>
            Turn business cards into organized digital contacts in seconds.
            Extract accurate details, save contacts securely, and manage your
            professional network from one place.
          </p>

          <div className={styles.heroButtons}>
            <a href="#download" className={styles.primaryButton}>
              <Download size={19} />
              Download App
            </a>

            <a href="#how-it-works" className={styles.secondaryButton}>
              <span className={styles.playIcon}>
                <Play size={15} fill="currentColor" />
              </span>
              See How It Works
            </a>
          </div>

          <div className={styles.featureRow}>
            <div className={styles.featureItem}>
              <span className={styles.featureIcon}>
                <ScanLine size={16} />
              </span>
              AI-Powered OCR
            </div>

            <div className={styles.featureItem}>
              <span className={styles.featureIcon}>
                <ShieldCheck size={16} />
              </span>
              100% Secure
            </div>

            <div className={styles.featureItem}>
              <span className={styles.featureIcon}>
                <WifiOff size={16} />
              </span>
              Works Offline
            </div>
          </div>

          <div className={styles.trustedSection}>
            <p>Trusted by professionals and businesses worldwide</p>

            <div className={styles.companyRow}>
              <span>Bank of Baroda</span>
              <span>SOMONI-PHARM</span>
              <span>THERMOLAB</span>
              <span>Metro Mumbai</span>
              <span>TATA MOTORS</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className={styles.visualArea}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          <div className={styles.visualBackground}></div>

          <motion.div
            className={styles.phoneWrapper}
            animate={{ y: [0, -9, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className={styles.phone}>
              <div className={styles.phoneTop}>
                <span></span>
              </div>

              <img
                src={appHomeImage}
                alt="Wecanserve business card scanner application dashboard"
                className={styles.phoneScreenshot}
              />
            </div>
          </motion.div>

          <motion.div
            className={`${styles.floatingCard} ${styles.aiCard}`}
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className={`${styles.floatingIcon} ${styles.greenIcon}`}>
              <ScanLine size={25} />
            </span>

            <strong>AI Extracted</strong>
            <small>In seconds</small>
          </motion.div>

          <motion.div
            className={`${styles.floatingCard} ${styles.contactCard}`}
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className={styles.contactHeader}>
              <span className={styles.avatar}>AD</span>

              <div>
                <strong>Anand Dangi</strong>
                <small>Business Professional</small>
              </div>
            </div>

            <div className={styles.contactDetails}>
              <span>+91 98765 43210</span>
              <span>anand@wecanserve.com</span>
              <span>Mumbai, India</span>
            </div>
          </motion.div>

          <motion.div
            className={`${styles.floatingCard} ${styles.savedCard}`}
            animate={{ y: [0, -7, 0] }}
            transition={{
              duration: 4.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className={`${styles.floatingIcon} ${styles.blueIcon}`}>
              <CheckCircle2 size={25} />
            </span>

            <strong>Contacts Saved</strong>
            <small>&amp; organized</small>
          </motion.div>

          <div className={styles.dottedArrow}>
            <span>All your contacts in one place</span>
            <div className={styles.arrowLine}>↙</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;