import { motion } from "framer-motion";
import { Download, CreditCard, Contact, TrendingUp } from "lucide-react";
import styles from "./WhyDownload.module.css";

const highlights = [
  { icon: CreditCard, label: "No More Lost Cards" },
  { icon: Contact, label: "Always Have Your Contacts" },
  { icon: TrendingUp, label: "Boost Your Productivity" },
];

export default function WhyDownload() {
  return (
    <section className={styles.section} id="why-wecanserve">
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
            <h2 className={styles.title}>Why Download Our App?</h2>
            <p className={styles.description}>
              Because your network deserves better than being lost in a drawer.
              Go paperless, stay organized, and grow your connections.
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

          <button className={styles.ctaBtn}>
            <Download size={18} />
            Download Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
