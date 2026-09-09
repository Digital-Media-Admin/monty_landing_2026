"use client";

import { motion, type Variants } from "motion/react";
import { AdCard, PlaceholderMedia, SectionHeader, wrap } from "./shared";

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

export function Product() {
  return (
    <section id="advertise" style={{ background: "var(--surface-tint)" }}>
      <motion.div
        style={{ ...wrap, padding: "var(--space-8) var(--space-5)" }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={itemVariants}>
          <SectionHeader
            title="Ways to advertise"
            action="learn more"
            actionHref="#rates"
          />
        </motion.div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "var(--space-5)",
            marginTop: "var(--space-6)",
          }}
        >
          <motion.div variants={itemVariants}>
            <AdCard
              index="01"
              title="Print display ads"
              href="#rates"
              media={
                <PlaceholderMedia
                  gradient="linear-gradient(135deg,var(--blue-800),var(--blue-500))"
                  label="Print ad placeholder"
                />
              }
            >
              From an eighth-page to the back cover — designed for you at no
              extra cost.
            </AdCard>
          </motion.div>
          <motion.div variants={itemVariants}>
            <AdCard
              index="02"
              title="Inserts & wraps"
              href="#rates"
              media={
                <PlaceholderMedia
                  gradient="linear-gradient(135deg,var(--ink),var(--blue-700))"
                  label="Insert photo placeholder"
                />
              }
            >
              Your flyer or voucher, delivered inside every copy of the paper.
            </AdCard>
          </motion.div>
          <motion.div variants={itemVariants}>
            <AdCard
              index="03"
              title="Web & newsletter"
              href="#rates"
              media={
                <PlaceholderMedia
                  gradient="linear-gradient(135deg,var(--blue-400),var(--blue-100))"
                  label="Screenshot placeholder"
                />
              }
            >
              Banner spots on TheMontyNews.com and the monthly email digest.
            </AdCard>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
