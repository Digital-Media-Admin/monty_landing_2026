"use client";

import { motion, type Variants } from "motion/react";
import { SectionHeader, StatRow, wrap } from "./shared";

const resultStats = [
  { value: "22K+", label: "Mailboxes every issue" },
  { value: "6", label: "Towns covered" },
  { value: "25+", label: "Years in print" },
  { value: "92%", label: "Advertisers renew" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function CaseStudy() {
  return (
    <section id="results" style={{ background: "var(--surface-inverse)", position: "relative", overflow: "hidden" }}>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: -70,
          top: -70,
          width: 240,
          height: 240,
          borderRadius: "50%",
          background: "var(--blue-500)",
          opacity: 0.4,
        }}
      />
      <motion.div
        style={{ ...wrap, padding: "var(--space-8) var(--space-5)", position: "relative" }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={itemVariants}>
          <SectionHeader title="What advertisers say" inverse />
        </motion.div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-7)", marginTop: "var(--space-6)" }}>
          <motion.figure variants={itemVariants} style={{ margin: 0 }}>
            <blockquote style={{ margin: 0, fontSize: 22, fontWeight: 600, lineHeight: 1.4, color: "var(--white)" }}>
              “The sedation voucher on our back-page ad brought in 40 new patients in one season. Nothing else we
              run comes close.”
            </blockquote>
            <figcaption
              style={{
                marginTop: "var(--space-4)",
                fontSize: "var(--text-label)",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "var(--tracking-label)",
                color: "var(--blue-200)",
              }}
            >
              Dr. Al Internoscia — Towne Centre Family Dental
            </figcaption>
          </motion.figure>
          <motion.figure variants={itemVariants} style={{ margin: 0 }}>
            <blockquote style={{ margin: 0, fontSize: 22, fontWeight: 600, lineHeight: 1.4, color: "var(--white)" }}>
              “We booked out our summer camp two months early. Everyone in town mentions they saw us in the
              Monty.”
            </blockquote>
            <figcaption
              style={{
                marginTop: "var(--space-4)",
                fontSize: "var(--text-label)",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "var(--tracking-label)",
                color: "var(--blue-200)",
              }}
            >
              Program director — Montgomery Summer Camps
            </figcaption>
          </motion.figure>
        </div>
        <motion.div
          variants={itemVariants}
          style={{
            borderTop: "1px solid rgba(255,255,255,0.2)",
            marginTop: "var(--space-7)",
            paddingTop: "var(--space-6)",
            display: "flex",
            gap: "var(--space-8)",
          }}
        >
          <StatRow items={resultStats} inverse />
        </motion.div>
      </motion.div>
    </section>
  );
}
