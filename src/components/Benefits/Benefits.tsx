import { motion } from "framer-motion";
import {
  Download,
  FolderKanban,
  Lock,
  ScanText,
  Search,
  Zap,
} from "lucide-react";
import styles from "./Benefits.module.css";

const benefits = [
  {
    icon: Zap,
    title: "Instant AI OCR",
    description:
      "Scan cards in under a second with high accuracy data extraction.",
    tone: "blue",
  },
  {
    icon: FolderKanban,
    title: "Custom Folders",
    description:
      "Group contacts into custom folders by event, project, or lead status.",
    tone: "green",
  },
  {
    icon: Search,
    title: "Smart Search",
    description:
      "Quickly search through hundreds of cards by name, company, or job title.",
    tone: "blue",
  },
  {
    icon: ScanText,
    title: "Multi-Language Support",
    description:
      "Reads and transcribes business cards across multiple languages accurately.",
    tone: "green",
  },
  {
    icon: Download,
    title: "1-Tap Export",
    description:
      "Export single contacts or entire folders to CSV, Excel, and vCard formats.",
    tone: "blue",
  },
  {
    icon: Lock,
    title: "Encrypted & Private",
    description:
      "Your lead data is secured with end-to-end cloud protection and privacy.",
    tone: "green",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.headingArea}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.title}>
            Built for <span>Faster Networking</span>
          </h2>
          <p className={styles.subtitle}>
            Everything you need to turn paper business cards into organized leads.
          </p>
        </motion.div>

        <div className={styles.cardsGrid}>
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className={styles.card}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
              >
                <div className={`${styles.iconBox} ${styles[item.tone]}`}>
                  <Icon size={24} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}