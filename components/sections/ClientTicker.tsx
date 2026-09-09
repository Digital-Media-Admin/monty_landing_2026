import { Marquee } from "@/components/ui/marquee";
const logos = [
  { src: "/logos/1.png", alt: "Logo 1" },
  { src: "/logos/2.png", alt: "Logo 2" },
  { src: "/logos/3.png", alt: "Logo 3" },
  { src: "/logos/4.png", alt: "Logo 4" },
  { src: "/logos/5.png", alt: "Logo 5" },
];
export default function ClientTicker() {
  return (
    <Marquee pauseOnHover className="[--duration:25s]">
      {logos.map((logo) => (
        <img
          key={logo.src}
          src={logo.src}
          alt={logo.alt}
          className="mx-8 h-10 w-auto object-contain"
        />
      ))}
    </Marquee>
  );
}
