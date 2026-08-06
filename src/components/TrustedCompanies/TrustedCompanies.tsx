import { motion } from 'framer-motion';
import styles from './TrustedCompanies.module.css';

const companies = [
  { name: 'Bank of Baroda', initials: 'BoB' },
  { name: 'TATA Motors', initials: 'TM' },
  { name: 'Metro Mumbai', initials: 'MM' },
  { name: 'SOMONI PHARM', initials: 'SP' },
  { name: 'Thermolab', initials: 'TL' },
];

const duplicated = [...companies, ...companies, ...companies, ...companies];

export default function TrustedCompanies() {
  return (
    <section className={styles.section}>
      <div className="container">
        <motion.p
          className={styles.sectionLabel}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          Trusted by professionals across India
        </motion.p>
      </div>
      <div className={styles.logosWrap}>
        <div className={styles.logosTrack}>
          {duplicated.map((company, idx) => (
            <div key={`${company.name}-${idx}`} className={styles.logoItem}>
              <div className={styles.logoPlaceholder}>{company.initials}</div>
              <span className={styles.logoName}>{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
