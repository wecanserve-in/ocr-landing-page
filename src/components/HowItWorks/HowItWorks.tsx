import { motion } from "framer-motion";
import {
  ArrowRight,
  Camera,
  ContactRound,
  ScanText,
  Share2,
} from "lucide-react";
import styles from "./HowItWorks.module.css";

const steps = [
  {
    number: "01",
    title: "Scan Card",
    description:
      "Open the app and scan any business card with your camera.",
    icon: Camera,
    tone: "green",
  },
  {
    number: "02",
    title: "AI Extracts Details",
    description:
      "Our AI instantly reads and extracts accurate contact information.",
    icon: ScanText,
    tone: "orange",
  },
  {
    number: "03",
    title: "Save Contacts",
    description:
      "Contacts are saved securely in your account and easy to organize.",
    icon: ContactRound,
    tone: "purple",
  },
  {
    number: "04",
    title: "Connect & Grow",
    description:
      "Call, email, or connect anytime and grow your professional network.",
    icon: Share2,
    tone: "blue",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.headingArea}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>
            How It <span>Works?</span>
          </h2>

          <p className={styles.description}>
            From scanning to staying connected in 4 simple steps
          </p>
        </motion.div>

        <div className={styles.stepsGrid}>
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                key={step.number}
                className={styles.stepWrapper}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <div className={styles.stepCard}>
                  <span
                    className={`${styles.iconBox} ${
                      styles[`${step.tone}Tone`]
                    }`}
                  >
                    <Icon size={26} strokeWidth={2} />
                  </span>

                  <span className={styles.stepNumber}>{step.number}</span>

                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className={styles.connector} aria-hidden="true">
                    <span className={styles.connectorLine}></span>
                    <ArrowRight size={18} />
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;