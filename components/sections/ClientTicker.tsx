import { Marquee } from "@/components/ui/marquee";
const logos = [
  {
    src: "https://t4.ftcdn.net/jpg/06/96/89/13/360_F_696891328_utj80ZwXsdy8SloC9IBaFGDIcGNBrEze.jpg",
    alt: "Logo 1",
  },
  {
    src: "https://t4.ftcdn.net/jpg/06/96/89/13/360_F_696891328_utj80ZwXsdy8SloC9IBaFGDIcGNBrEze.jpg",
    alt: "Logo 2",
  },
  {
    src: "https://t4.ftcdn.net/jpg/06/96/89/13/360_F_696891328_utj80ZwXsdy8SloC9IBaFGDIcGNBrEze.jpg",
    alt: "Logo 3",
  },
  {
    src: "https://t4.ftcdn.net/jpg/06/96/89/13/360_F_696891328_utj80ZwXsdy8SloC9IBaFGDIcGNBrEze.jpg",
    alt: "Logo 4",
  },
  {
    src: "https://t4.ftcdn.net/jpg/06/96/89/13/360_F_696891328_utj80ZwXsdy8SloC9IBaFGDIcGNBrEze.jpg",
    alt: "Logo 5",
  },
];
export default function ClientTicker() {
  return (
    <Marquee className="[--duration:40s]">
      {logos.map((logo) => (
        <img
          key={logo.src}
          src={logo.src}
          alt={logo.alt}
          className="mx-8 h-16 w-auto object-contain"
        />
      ))}
    </Marquee>
  );
}
