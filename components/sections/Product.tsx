"use client";

import { motion, type Variants } from "motion/react";
import { AdCard, SectionHeader, wrap } from "./shared";

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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{
            gap: "var(--space-5)",
            marginTop: "var(--space-6)",
          }}
        >
          <motion.div variants={itemVariants}>
            <AdCard
              index="01"
              title="Print display ads"
              media={
                <img
                  src="https://fcmitvaaoqpj9xtr.public.blob.vercel-storage.com/full%20page.png"
                  alt="Full-page print ad in The Montgomery News"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              }
            >
              From an eighth-page to the back cover, designed by our team at no
              extra cost.
            </AdCard>
          </motion.div>
          <motion.div variants={itemVariants}>
            <AdCard
              index="02"
              title="Inserts & Classifieds"
              media={
                <img
                  src="https://fcmitvaaoqpj9xtr.public.blob.vercel-storage.com/insert.png"
                  alt="Printed insert tucked inside The Montgomery News"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
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
              media={
                <img
                  src="https://fcmitvaaoqpj9xtr.public.blob.vercel-storage.com/web.png"
                  alt="TheMontyNews.com homepage with banner ad placements"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top",
                  }}
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
