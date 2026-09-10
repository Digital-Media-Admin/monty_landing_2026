"use client";
import { motion, type Variants } from "motion/react";
import { PlaceholderMedia, StatRow, wrap } from "./shared";

const heroStats = [
  {
    value: "$224,185",
    label: "Median Reader household income",
  },
  { value: "60K+", label: "Monthly Online Hits" },
  { value: "30K+", label: "Monthly Readership" },
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

export function Hero() {
  return (
    <section
      style={{
        background: "var(--surface-tint)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="hidden md:block">
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: "calc((100% - var(--container-max)) / 2 + 65px)",
            top: 48,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background: "var(--blue-700)",
            opacity: 0.92,
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: "calc((100% - var(--container-max)) / 2 + 400px)",
            bottom: -70,
            width: 220,
            height: 220,
            borderRadius: "50%",
            background: "var(--blue-200)",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: "calc((100% - var(--container-max)) / 2 + 110px)",
            top: 84,
            width: 300,
            aspectRatio: "3/4",
            boxShadow: "var(--shadow-pop)",
            transform: "rotate(3deg)",
          }}
        >
          <PlaceholderMedia
            gradient="linear-gradient(135deg,var(--ink),var(--blue-700))"
            label="The Montgomery News front page"
          />
        </div>
      </div>
      <motion.div
        style={{
          ...wrap,
          padding: "88px var(--space-5) 96px",
          position: "relative",
        }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          variants={itemVariants}
          style={{
            fontSize: "var(--text-label)",
            fontWeight: 700,
            letterSpacing: "var(--tracking-label)",
            textTransform: "uppercase",
            color: "var(--brand)",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          Placement in Every Montgomery Mailbox{" "}
          <span aria-hidden="true">↗</span>
        </motion.div>
        <motion.h1
          variants={itemVariants}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-display-xl)",
            lineHeight: "var(--leading-display)",
            textTransform: "uppercase",
            color: "var(--brand)",
            margin: "18px 0 0",
            maxWidth: 640,
          }}
        >
          Every mailbox.
          <br />
          <span style={{ color: "var(--ink)" }}>Every month.</span>
        </motion.h1>
        <motion.p
          variants={itemVariants}
          style={{
            fontSize: "var(--text-body-lg)",
            color: "var(--text-body)",
            maxWidth: 440,
            margin: "22px 0 0",
          }}
        >
          Get your business seen with our first-class print paper, delivered
          directly to every home in one of New Jersey's wealthiest towns.
        </motion.p>
        <motion.div
          variants={itemVariants}
          style={{ display: "flex", gap: 16, margin: "28px 0 0" }}
        >
          <a href="#contact" className="ad-btn ad-btn-lg ad-btn-primary">
            Book a call <span aria-hidden="true">→</span>
          </a>
        </motion.div>
        <motion.div variants={itemVariants} style={{ marginTop: 56 }}>
          <StatRow items={heroStats} />
        </motion.div>
      </motion.div>
    </section>
  );
}
