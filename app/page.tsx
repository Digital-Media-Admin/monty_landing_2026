import { Hero } from "@/components/sections/Hero";
import { ProductMetric } from "@/components/sections/ProductMetric";
import { Product } from "@/components/sections/Product";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { Cta } from "@/components/sections/Cta";

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
      <ProductMetric />
      <Product />
      <CaseStudy />
      <Cta />
    </div>
  );
}
