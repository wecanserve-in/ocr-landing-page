import { motion } from "framer-motion";
import { Download, Layers, ShieldCheck, Zap } from "lucide-react";
import styles from "./WhyDownload.module.css";

const highlights = [
  { icon: Zap, label: "Zero Manual Data Entry" },
  { icon: Layers, label: "Instant CRM & Phone Sync" },
  { icon: ShieldCheck, label: "100% Encrypted & Safe" },
];

export default function WhyDownload() {
  return (
    <section className={styles.section} id="why-scanmycard">
      <div className={styles.container}>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.leftArea}>
            <div className={styles.phoneWrap}>
              <div className={styles.phone}>
                <div className={styles.phoneScreen}>
                  <div className={styles.avatarCircle}></div>
                </div>
              </div>
              <div className={styles.leafTop}></div>
              <div className={styles.leafBottom}></div>
            </div>
          </div>

          <div className={styles.content}>
            <h2 className={styles.title}>Why Choose ScanMyCard?</h2>
            <p className={styles.description}>
              Business cards left in pockets or drawers lead to lost deals. ScanMyCard converts every paper exchange into an actionable, searchable digital pipeline.
            </p>
          </div>

          <div className={styles.highlights}>
            {highlights.map((h) => {
              const Icon = h.icon;
              return (
                <div key={h.label} className={styles.pill}>
                  <Icon size={16} className={styles.pillIcon} />
                  <span>{h.label}</span>
                </div>
              );
            })}
          </div>

          <a href="#download" className={styles.ctaBtn}>
            <Download size={18} />
            Try ScanMyCard Free
          </a>
        </motion.div>
      </div>
    </section>
  );
}