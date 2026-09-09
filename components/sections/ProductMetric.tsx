import { wrap } from "./shared";

const advertisers = [
  "Towne Centre Dental",
  "Belle Mead Realty",
  "Rocky Hill Bistro",
  "Skillman Auto",
  "Harlingen Hardware",
];

export function ProductMetric() {
  return (
    <section style={{ borderBottom: "var(--rule-hairline)" }}>
      <div
        style={{
          ...wrap,
          padding: "var(--space-6) var(--space-5)",
          display: "flex",
          alignItems: "center",
          gap: "var(--space-6)",
          flexWrap: "wrap",
        }}
      >
        <span
          style={{
            fontSize: "var(--text-label-sm)",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "var(--tracking-label)",
            color: "var(--text-muted)",
            flex: "none",
          }}
        >
          Trusted by neighbors you know
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-6)", flexWrap: "wrap", marginLeft: "auto" }}>
          {advertisers.map((name) => (
            <span
              key={name}
              style={{
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "0.04em",
                fontSize: 15,
                color: "var(--gray-400)",
              }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
