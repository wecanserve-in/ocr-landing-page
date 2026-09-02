import { motion } from "framer-motion";
import {
  CheckCircle2,
  Download,
  Play,
  ScanLine,
} from "lucide-react";
import styles from "./Hero.module.css";
import appHomeImage from "../../assets/app-home.jpeg";

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.backgroundGlowOne}></div>
      <div className={styles.backgroundGlowTwo}></div>

      <span className={`${styles.decorativePlus} ${styles.plusOne}`}>+</span>
      <span className={`${styles.decorativePlus} ${styles.plusTwo}`}>+</span>
      <span className={`${styles.decorativePlus} ${styles.plusThree}`}>+</span>

      <div className={styles.heroContainer}>
        {/* LEFT CONTENT */}
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className={styles.heroTitle}>
            SCAN.
            <br />
            MANAGE.
            <br />
            <span className={styles.highlightedText}>
              CONNECT.
              <span className={styles.underline}></span>
            </span>
          </h1>

          <div className={styles.heroButtons}>
            <a href="#download" className={styles.primaryButton}>
              <Download size={19} />
              Download ScanMyCard
            </a>

            <a href="#demo" className={styles.secondaryButton}>
              <span className={styles.playIcon}>
                <Play size={15} fill="currentColor" />
              </span>
              Watch Demo
            </a>
          </div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          className={styles.visualArea}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: "easeOut",
          }}
        >
          <div className={styles.visualBackground}></div>

          {/* PHONE */}
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
              <div className={styles.phoneTop}></div>

              <img
                src={appHomeImage}
                alt="ScanMyCard App Dashboard"
                className={styles.phoneScreenshot}
              />
            </div>
          </motion.div>

          {/* AI CARD */}
          <motion.div
            className={`${styles.floatingCard} ${styles.aiCard}`}
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span
              className={`${styles.floatingIcon} ${styles.greenIcon}`}
            >
              <ScanLine size={25} />
            </span>

            <strong>AI OCR Precision</strong>
            <small>Instant extraction</small>
          </motion.div>

          {/* CONTACT CARD */}
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
              <span className={styles.avatar}>SC</span>

              <div>
                <strong>Alex Reed</strong>
                <small>VP of Business Development</small>
              </div>
            </div>

            <div className={styles.contactDetails}>
              <span>alex.reed@enterprise.io</span>
              <span>+1 (555) 349-2041</span>
              <span>San Francisco, CA</span>
            </div>
          </motion.div>

          {/* SAVED CARD */}
          <motion.div
            className={`${styles.floatingCard} ${styles.savedCard}`}
            animate={{ y: [0, -7, 0] }}
            transition={{
              duration: 4.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span
              className={`${styles.floatingIcon} ${styles.blueIcon}`}
            >
              <CheckCircle2 size={25} />
            </span>

            <strong>Contact Saved</strong>
            <small>Synced &amp; Organized</small>
          </motion.div>

          {/* DECORATIVE ARROW */}
          <div className={styles.dottedArrow}>
            <span>All contacts organized</span>

            <div className={styles.arrowLine}>↙</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;