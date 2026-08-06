import { motion } from "framer-motion";
import { Check } from "lucide-react";
import styles from "./Plans.module.css";

const plans = [
  {
    name: "Starter",
    subtitle: "Perfect for Individuals",
    price: "₹199",
    period: "/month",
    features: ["100 Cards / Month", "Export to Excel", "Basic Support"],
    popular: false,
  },
  {
    name: "Business Monthly",
    subtitle: "Best for Professionals",
    price: "₹499",
    period: "/month",
    features: [
      "500 Cards / Month",
      "Export to Excel, CSV",
      "Priority Support",
    ],
    popular: true,
  },
  {
    name: "Business Yearly",
    subtitle: "Save more with yearly plan",
    price: "₹4,999",
    period: "/year",
    features: [
      "5000 Cards / Year",
      "Export to Excel, CSV",
      "Priority Support + More",
    ],
    popular: false,
  },
];

export default function Plans() {
  return (
    <section className={styles.section} id="plans">
      <div className={styles.container}>
        <motion.div
          className={styles.headingArea}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>
            Simple Plans for <span>Everyone</span>
          </h2>
        </motion.div>

        <div className={styles.grid}>
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`${styles.card} ${plan.popular ? styles.popular : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.12 }}
            >
              {plan.popular && (
                <span className={styles.badge}>Most Popular</span>
              )}

              <h3>{plan.name}</h3>
              <p className={styles.subtitle}>{plan.subtitle}</p>

              <div className={styles.priceRow}>
                <span className={styles.price}>{plan.price}</span>
                <span className={styles.period}>{plan.period}</span>
              </div>

              <ul className={styles.featureList}>
                {plan.features.map((f) => (
                  <li key={f}>
                    <Check size={18} className={styles.checkIcon} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`${styles.ctaBtn} ${
                  plan.popular ? styles.ctaPrimary : styles.ctaOutline
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
