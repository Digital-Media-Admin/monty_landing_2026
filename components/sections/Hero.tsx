import { PlaceholderMedia, StatRow, wrap } from "./shared";

const heroStats = [
  {
    value: "$224,185",
    label: "Median Reader household income",
  },
  { value: "60K+", label: "Monthly Online Hits" },
  { value: "30K+", label: "Monthly Readership" },
];

export function Hero() {
  return (
    <section
      style={{
        background: "var(--surface-tint)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: 96,
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
          right: 400,
          bottom: -70,
          width: 220,
          height: 220,
          borderRadius: "50%",
          background: "var(--blue-200)",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "47%",
          top: 44,
          display: "grid",
          gridTemplateColumns: "repeat(5, 5px)",
          gap: 8,
        }}
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            style={{ width: 5, height: 5, background: "var(--blue-700)" }}
          />
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          right: 150,
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
      <div
        style={{
          ...wrap,
          padding: "88px var(--space-5) 96px",
          position: "relative",
        }}
      >
        <div
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
          Guaranteed placement in Every Montgomery Mailbox{" "}
          <span aria-hidden="true">↗</span>
        </div>
        <h1
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
        </h1>
        <p
          style={{
            fontSize: "var(--text-body-lg)",
            color: "var(--text-body)",
            maxWidth: 440,
            margin: "22px 0 0",
          }}
        >
          Get your business seen with our first-class print paper, delivered
          directly to every home in one of New Jersey's wealthiest towns.
        </p>
        <div style={{ display: "flex", gap: 16, margin: "28px 0 0" }}>
          <a href="#contact" className="ad-btn ad-btn-lg ad-btn-primary">
            Book a call <span aria-hidden="true">→</span>
          </a>
        </div>
        <StatRow items={heroStats} style={{ marginTop: 56 }} />
      </div>
    </section>
  );
}
