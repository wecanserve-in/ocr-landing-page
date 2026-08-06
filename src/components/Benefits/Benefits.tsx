import { motion } from "framer-motion";
import {
  Zap,
  CheckCircle,
  FolderOpen,
  Download,
  ShieldCheck,
  WifiOff,
} from "lucide-react";
import styles from "./Benefits.module.css";

const benefits = [
  {
    title: "Lightning Fast",
    description: "Extracts details in just seconds",
    icon: Zap,
    tone: "green",
  },
  {
    title: "High Accuracy",
    description: "AI ensures maximum data accuracy",
    icon: CheckCircle,
    tone: "yellow",
  },
  {
    title: "Smart Organization",
    description: "Keep contacts neat and searchable",
    icon: FolderOpen,
    tone: "blue",
  },
  {
    title: "Export Easily",
    description: "Export to Excel, CSV or your CRM",
    icon: Download,
    tone: "indigo",
  },
  {
    title: "Secure & Private",
    description: "Your data is safe and encrypted",
    icon: ShieldCheck,
    tone: "emerald",
  },
  {
    title: "Works Offline",
    description: "Scan and access without internet",
    icon: WifiOff,
    tone: "red",
  },
];

export default function Benefits() {
  return (
    <section className={styles.section} id="benefits">
      <div className={styles.container}>
        <motion.div
          className={styles.headingArea}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>
            Why You'll <span>Love</span> Using Our App
          </h2>
        </motion.div>

        <div className={styles.grid}>
          {benefits.map((b, index) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                className={styles.card}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <span
                  className={`${styles.iconCircle} ${styles[`${b.tone}Tone`]}`}
                >
                  <Icon size={24} strokeWidth={2} />
                </span>
                <h3>{b.title}</h3>
                <p>{b.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
