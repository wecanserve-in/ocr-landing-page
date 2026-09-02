import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Download, Zap } from "lucide-react";
import styles from "./Plans.module.css";

interface PlanItem {
  id: string;
  name: string;
  price: string;
  gstNote: string;
  cards: string;
  ratePerCard: string;
  badge?: string;
  featured?: boolean;
  accent: "green" | "orange" | "purple" | "blue" | "teal";
}

const plansData: Record<"personal" | "business", PlanItem[]> = {
  personal: [
    {
      id: "p-starter",
      name: "Starter",
      price: "₹99",
      gstNote: "+ 18% GST",
      cards: "50 Cards",
      ratePerCard: "₹2 per card",
      accent: "green",
    },
    {
      id: "p-popular",
      name: "Popular",
      price: "₹499",
      gstNote: "+ 18% GST",
      cards: "750 Cards",
      ratePerCard: "₹1.5 per card",
      badge: "Best Value",
      featured: true,
      accent: "orange",
    },
    {
      id: "p-pro",
      name: "Pro",
      price: "₹999",
      gstNote: "+ 18% GST",
      cards: "1,000 Cards",
      ratePerCard: "₹1 per card",
      accent: "purple",
    },
  ],
  business: [
    {
      id: "b-starter",
      name: "Business Starter",
      price: "₹2,499",
      gstNote: "+ 18% GST",
      cards: "2,775 Cards",
      ratePerCard: "₹0.90 per card",
      accent: "blue",
    },
    {
      id: "b-pro",
      name: "Business Pro",
      price: "₹3,999",
      gstNote: "+ 18% GST",
      cards: "5,710 Cards",
      ratePerCard: "₹0.70 per card",
      badge: "Best Value",
      featured: true,
      accent: "teal",
    },
    {
      id: "b-enterprise",
      name: "Business Enterprise",
      price: "₹5,999",
      gstNote: "+ 18% GST",
      cards: "10,000 Cards",
      ratePerCard: "₹0.60 per card",
      accent: "orange",
    },
  ],
};

export default function Plans() {
  const [tab, setTab] = useState<"personal" | "business">("personal");

  return (
    <section id="plans" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.title}>
            Choose Your <span>Plan</span>
          </h2>
          <p className={styles.subtitle}>
            Buy credits once. Scan cards anytime.
          </p>

          <div className={styles.tabWrapper}>
            <button
              type="button"
              className={`${styles.tabBtn} ${
                tab === "personal" ? styles.activeTab : ""
              }`}
              onClick={() => setTab("personal")}
            >
              Personal
            </button>
            <button
              type="button"
              className={`${styles.tabBtn} ${
                tab === "business" ? styles.activeTab : ""
              }`}
              onClick={() => setTab("business")}
            >
              Business
            </button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            className={styles.cardsGrid}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            {plansData[tab].map((plan) => (
              <div
                key={plan.id}
                className={`${styles.planCard} ${styles[plan.accent]} ${
                  plan.featured ? styles.featuredCard : ""
                }`}
              >
                {plan.badge && (
                  <span className={styles.bestValueBadge}>{plan.badge}</span>
                )}

                <div className={styles.cardHeader}>
                  <div>
                    <h3 className={styles.planName}>{plan.name}</h3>
                    <div className={styles.priceRow}>
                      <span className={styles.price}>{plan.price}</span>
                      <span className={styles.gst}>{plan.gstNote}</span>
                    </div>
                  </div>

                  <div className={styles.cardsInfo}>
                    <strong className={styles.cardsCount}>{plan.cards}</strong>
                    <span className={styles.rate}>{plan.ratePerCard}</span>
                  </div>
                </div>

                <div className={styles.featuresList}>
                  <div className={styles.featureItem}>
                    <Check size={18} className={styles.checkIcon} />
                    <span>{plan.cards} included</span>
                  </div>
                  <div className={styles.featureItem}>
                    <Check size={18} className={styles.checkIcon} />
                    <span>Smart Folder Organization</span>
                  </div>
                  <div className={styles.featureItem}>
                    <Check size={18} className={styles.checkIcon} />
                    <span>Instant CSV &amp; vCard Export</span>
                  </div>
                </div>

                <a href="#download" className={styles.ctaButton}>
                  <Zap size={16} />
                  Get {plan.name}
                </a>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}