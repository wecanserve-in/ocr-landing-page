import React, { useState } from "react";
import styles from "./HowItWorks.module.css";

const steps = [
  {
    number: "01",
    title: "Scan Business Card",
    description: "Capture any paper business card with your phone.",
    type: "scan",
  },
  {
    number: "02",
    title: "AI Precision OCR",
    description:
      "AI instantly extracts names, phone numbers, emails and company details.",
    type: "ocr",
  },
  {
    number: "03",
    title: "Create Custom Folders",
    description:
      "Organize contacts into folders by event, client, project or company.",
    type: "folder",
  },
  {
    number: "04",
    title: "Add & Organize",
    description:
      "Save contacts directly into your designated folders for easy lookup.",
    type: "organize",
  },
  {
    number: "05",
    title: "Sync & Connect",
    description:
      "Export contacts to CSV, Excel, vCard or your CRM and stay connected.",
    type: "connect",
  },
];

function StepIcon({ type }: { type: string }) {
  if (type === "scan") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="6" width="18" height="13" rx="2" />
        <path d="M8 6l1.5-2h5L16 6" />
        <circle cx="12" cy="12.5" r="3" />
      </svg>
    );
  }

  if (type === "ocr") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 3H5a2 2 0 0 0-2 2v2" />
        <path d="M17 3h2a2 2 0 0 1 2 2v2" />
        <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
        <path d="M17 21h2a2 2 0 0 0 2-2v-2" />
        <path d="M7 9h10M7 12h7M7 15h5" />
      </svg>
    );
  }

  if (type === "folder") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2h7.5A2.5 2.5 0 0 1 21 9.5v8A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5v-10Z" />
        <path d="M12 11v5M9.5 13.5h5" />
      </svg>
    );
  }

  if (type === "organize") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 19c.5-3.2 2.3-5 5.5-5s5 1.8 5.5 5" />
        <path d="M17 8v6M14 11h6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="m8.2 10.8 7.6-3.6M8.2 13.2l7.6 3.6" />
    </svg>
  );
}

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const currentStep = steps[activeStep];

  return (
    <section
      className={styles.howSection}
      id="how-it-works"
    >
      {/* HEADER */}
      <div className={styles.howHeader}>
  <h2>
    How it <span>works</span>
  </h2>
</div>
      {/* CONTENT */}
      <div className={styles.howContainer}>

        {/* LEFT — STEPS */}
        <div className={styles.timeline}>

          <div className={styles.timelineTrack}>
            <div
              className={styles.timelineProgress}
              style={{
                height:
                  `${(activeStep / (steps.length - 1)) * 100}%`,
              }}
            />
          </div>

          {steps.map((step, index) => (
            <button
              key={step.number}
              type="button"
              className={`${styles.step} ${
                activeStep === index ? styles.active : ""
              }`}
              onMouseEnter={() => setActiveStep(index)}
              onFocus={() => setActiveStep(index)}
              onClick={() => setActiveStep(index)}
            >
              <div className={styles.stepNumber}>
                {step.number}
              </div>

              <div className={styles.stepIcon}>
                <StepIcon type={step.type} />
              </div>

              <div className={styles.stepText}>
                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>

              <div className={styles.stepArrow}>
                →
              </div>
            </button>
          ))}
        </div>

        {/* RIGHT — APP VISUAL */}
        <div className={styles.visual}>

          <div className={`${styles.glow} ${styles.glowBlue}`} />
          <div className={`${styles.glow} ${styles.glowGreen}`} />

          {/* Decorative dots */}
          <div className={styles.dotsTop} />
          <div className={styles.dotsBottom} />

          {/* Floating status */}
          <div className={styles.statusCard}>
            <span className={styles.statusDot} />
            <span>
              Step {currentStep.number} of 05
            </span>
          </div>

          {/* PHONE */}
          <div className={styles.phoneWrapper}>

            <div className={styles.phone}>

              <div className={styles.notch} />

              <div className={styles.phoneScreen}>

                {/* APP HEADER */}
                <div className={styles.appHeader}>

                  <div className={styles.appLogo}>
                    SC
                  </div>

                  <div className={styles.appGreeting}>
                    <small>Hello, Shreya 👋</small>
                    <strong>ScanMyCard</strong>
                  </div>

                  <div className={styles.notification}>
                    ♧
                  </div>

                </div>

                {/* ACTIVE STEP */}
                <div className={styles.mainCard}>

                  <div className={styles.mainCardIcon}>
                    <StepIcon type={currentStep.type} />
                  </div>

                  <span className={styles.mainCardLabel}>
                    STEP {currentStep.number}
                  </span>

                  <h4>
                    {currentStep.title}
                  </h4>

                  <p>
                    {currentStep.description}
                  </p>

                  <div className={styles.progressBar}>
                    <div
                      style={{
                        width: `${((activeStep + 1) / 5) * 100}%`,
                      }}
                    />
                  </div>

                </div>

                {/* APP GRID */}
                <div className={styles.appGrid}>

                  <div className={styles.appTile}>
                    <span className={`${styles.tileIcon} ${styles.blue}`}>
                      ⌕
                    </span>
                    <strong>Scan Card</strong>
                  </div>

                  <div className={styles.appTile}>
                    <span className={`${styles.tileIcon} ${styles.green}`}>
                      ✓
                    </span>
                    <strong>My Cards</strong>
                  </div>

                  <div className={styles.appTile}>
                    <span className={`${styles.tileIcon} ${styles.orange}`}>
                      ↓
                    </span>
                    <strong>Export</strong>
                  </div>

                  <div className={styles.appTile}>
                    <span className={`${styles.tileIcon} ${styles.purple}`}>
                      ◷
                    </span>
                    <strong>History</strong>
                  </div>

                </div>

                {/* RECENT ACTIVITY */}
                <div className={styles.recent}>

                  <div className={styles.recentHeading}>
                    <strong>Recent Activity</strong>
                    <span>See all →</span>
                  </div>

                  <div className={styles.recentItem}>

                    <div className={styles.recentIcon}>
                      ✓
                    </div>

                    <div className={styles.recentText}>
                      <strong>Cards Extracted</strong>
                      <small>Business cards scanned</small>
                    </div>

                    <b>03</b>

                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* FLOATING INFO */}
          <div className={styles.floatingCard}>

            <div className={styles.floatingIcon}>
              <StepIcon type={currentStep.type} />
            </div>

            <div>
              <strong>
                {currentStep.title}
              </strong>

              <span>
                ScanMyCard
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}