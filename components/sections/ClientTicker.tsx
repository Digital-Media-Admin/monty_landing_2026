"use client";

import { motion } from "motion/react";
import { Marquee } from "@/components/ui/marquee";
import { SectionHeader } from "./shared";
const logos = [
  {
    src: "https://fcmitvaaoqpj9xtr.public.blob.vercel-storage.com/logo%20%280%29.png",
    alt: "Logo 0",
  },
  {
    src: "https://fcmitvaaoqpj9xtr.public.blob.vercel-storage.com/logo%20%281%29.png",
    alt: "Logo 1",
  },
  {
    src: "https://fcmitvaaoqpj9xtr.public.blob.vercel-storage.com/Hackensack_Meridian_Carrier_Clinic_transparent.png",
    alt: "Hackensack Meridian Carrier Clinic",
  },
  {
    src: "https://fcmitvaaoqpj9xtr.public.blob.vercel-storage.com/Callaway_Henderson_Sothebys_transparent.png",
    alt: "Callaway Henderson Sotheby's International Realty",
  },
  {
    src: "https://fcmitvaaoqpj9xtr.public.blob.vercel-storage.com/YingHua_transparent.png",
    alt: "YingHua International School",
  },

  {
    src: "https://fcmitvaaoqpj9xtr.public.blob.vercel-storage.com/logo%20%286%29.png",
    alt: "Logo 6",
  },
  {
    src: "https://fcmitvaaoqpj9xtr.public.blob.vercel-storage.com/logo%20%287%29.png",
    alt: "Logo 7",
  },
  {
    src: "https://fcmitvaaoqpj9xtr.public.blob.vercel-storage.com/logo%20%288%29.png",
    alt: "Logo 8",
  },
];
export default function ClientTicker() {
  return (
    <motion.div
      style={{ paddingTop: "var(--space-6)" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <div className="px-4">
        <SectionHeader
          title=" Align your brand with names your clients trust"
          accent
          small
          center
        />
      </div>
      <Marquee className="[--duration:100s]">
        {logos.map((logo) => (
          <img
            key={logo.src}
            src={logo.src}
            alt={logo.alt}
            className="mx-6 h-16 w-auto object-contain py-4 sm:mx-8 md:h-24 lg:h-28"
          />
        ))}
      </Marquee>
    </motion.div>
  );
}
