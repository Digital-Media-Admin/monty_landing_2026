import { ContactForm } from "@/components/ContactForm";
import { wrap } from "./shared";

export function Cta() {
  return (
    <section
      id="contact"
      style={{
        ...wrap,
        padding: "var(--space-8) var(--space-5)",
        display: "grid",
        gridTemplateColumns: "1.1fr 1fr",
        gap: "var(--space-8)",
        alignItems: "center",
      }}
    >
      <div>
        <div
          style={{
            fontSize: "var(--text-label)",
            fontWeight: 700,
            letterSpacing: "var(--tracking-label)",
            textTransform: "uppercase",
            color: "var(--brand)",
          }}
        >
          Book a call
        </div>
        <h2
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
          Fifteen minutes,
          <br />a rate card, no pressure
        </h2>
        <p style={{ fontSize: "var(--text-body-md)", color: "var(--text-muted)", maxWidth: 400, margin: "18px 0 0" }}>
          Tell us what you sell and who you want to reach. We&rsquo;ll walk you through sizes, rates and the next
          issue&rsquo;s deadline.
        </p>
      </div>
      <ContactForm />
    </section>
  );
}
