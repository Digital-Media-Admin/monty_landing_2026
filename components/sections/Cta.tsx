"use client";

import { motion, type Variants } from "motion/react";
import { ContactForm } from "@/components/ContactForm";
import { wrap } from "./shared";

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

export function Cta() {
  return (
    <motion.section
      id="contact"
      style={{
        ...wrap,
        padding: "var(--space-8) var(--space-5)",
        display: "grid",
        gridTemplateColumns: "1.1fr 1fr",
        gap: "var(--space-8)",
        alignItems: "center",
      }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div>
        <motion.div
          variants={itemVariants}
          style={{
            fontSize: "var(--text-label)",
            fontWeight: 700,
            letterSpacing: "var(--tracking-label)",
            textTransform: "uppercase",
            color: "var(--brand)",
          }}
        >
          Connect with us
        </motion.div>
        <motion.h2
          variants={itemVariants}
          id="rates"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-display-sm)",
            textTransform: "uppercase",
            color: "var(--ink)",
            margin: "14px 0 0",
            lineHeight: "var(--leading-display)",
          }}
        >
          Get Your Brand
          <br />
          Seen Where it Counts
        </motion.h2>
        <motion.p
          variants={itemVariants}
          style={{
            fontSize: "var(--text-body-md)",
            color: "var(--text-muted)",
            maxWidth: 400,
            margin: "18px 0 0",
          }}
        >
          We&apos;ll walk you through options, sizes, and rates and discuss
          how we can work together to reach your audience.
        </motion.p>
      </div>
      <motion.div variants={itemVariants}>
        <ContactForm />
      </motion.div>
    </motion.section>
  );
}
