import { Hero } from "@/components/sections/Hero";
import { Product } from "@/components/sections/Product";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { Cta } from "@/components/sections/Cta";
import ClientTicker from "@/components/sections/ClientTicker";

export default function Home() {
  return (
    <div
      style={{
        minWidth: 1280,
        fontFamily: "var(--font-body)",
        color: "var(--text-body)",
      }}
    >
      <Hero />

      <ClientTicker />
      <CaseStudy />
      <Product />
      <Cta />
    </div>
  );
}
