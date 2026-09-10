"use client";
import { useEffect, useState } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { StatRow, wrap } from "./shared";

const heroStats = [
  {
    value: "$224,185",
    label: "Median Reader household income",
  },
  { value: "60K+", label: "Monthly Online Hits" },
  { value: "30K+", label: "Monthly Readership" },
];

// Front-page covers cycled through the hero graphic (files live in /public).
const covers = [
  {
    src: "/MN January 2026 Final lo-res - page 1 (920x1360).png",
    month: "January 2026",
  },
  {
    src: "/MN February final low res - page 1 (920x1360).png",
    month: "February 2026",
  },
  {
    src: "/MN March 2026 FINAL low-res - page 1 (920x1360).png",
    month: "March 2026",
  },
  {
    src: "/MN April 2026 Final low-res - page 1 (920x1360).png",
    month: "April 2026",
  },
  {
    src: "/MN May 2025 Final low-res - page 1 (920x1360).png",
    month: "May 2025",
  },
  {
    src: "/MN JUNE 2026 FINAL low-res - page 1 (920x1360).png",
    month: "June 2026",
  },
  {
    src: "/MN JULY 2026 Final low-res - page 1 (920x1360).png",
    month: "July 2026",
  },
  {
    src: "/MN August 2026 Final low-res - page 1 (920x1360).png",
    month: "August 2026",
  },
];

const COVER_INTERVAL_MS = 4500;

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

// Decorative layer animates in as the text sequence is wrapping up.
const decorContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { delayChildren: 0.65, staggerChildren: 0.08 } },
};

const circleFrontVariants: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 0.92,
    scale: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const circleBackVariants: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

// Shared box for the cover graphic and the two static papers stacked behind it.
const paperBase: React.CSSProperties = {
  position: "absolute",
  right: "calc((100% - var(--container-max)) / 2 + 50px)",
  top: 84,
  width: 380,
  aspectRatio: "920 / 1360",
  boxShadow: "var(--shadow-pop)",
  borderRadius: 2,
};

export function Hero() {
  const reduceMotion = useReducedMotion();
  const [coverIndex, setCoverIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion || covers.length < 2) return;
    const id = setInterval(
      () => setCoverIndex((i) => (i + 1) % covers.length),
      COVER_INTERVAL_MS,
    );
    return () => clearInterval(id);
  }, [reduceMotion]);

  return (
    <section
      style={{
        background: "var(--surface-tint)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <motion.div
        className="hidden md:block"
        variants={decorContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          aria-hidden="true"
          variants={circleFrontVariants}
          style={{
            position: "absolute",
            right: "calc((100% - var(--container-max)) / 2)",
            top: 48,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background: "var(--blue-700)",
          }}
        />

        <motion.div
          aria-hidden="true"
          variants={circleBackVariants}
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.7, ease: "easeOut" }}
        >
          <div
            aria-hidden="true"
            style={{
              ...paperBase,
              background: "var(--white)",
              transformOrigin: "left bottom",
              transform: "rotate(8deg)",
            }}
          />
          <div
            aria-hidden="true"
            style={{
              ...paperBase,
              background: "var(--white)",
              transformOrigin: "left bottom",
              transform: "rotate(4deg)",
            }}
          />
          <div style={{ ...paperBase, overflow: "hidden" }}>
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(135deg,var(--ink),var(--blue-700))",
              }}
            />
            {covers.map((cover, idx) => (
              <motion.img
                key={cover.src}
                src={cover.src}
                alt={
                  idx === coverIndex
                    ? `The Montgomery News front page — ${cover.month}`
                    : ""
                }
                aria-hidden={idx !== coverIndex}
                draggable={false}
                onError={(e) => {
                  e.currentTarget.style.visibility = "hidden";
                }}
                initial={false}
                animate={{ opacity: idx === coverIndex ? 1 : 0 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.5,
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
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
