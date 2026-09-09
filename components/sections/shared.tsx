export const wrap: React.CSSProperties = {
  maxWidth: "var(--container-max)",
  margin: "0 auto",
  padding: "0 var(--space-5)",
};

export function PlaceholderMedia({
  gradient,
  label,
}: {
  gradient: string;
  label: string;
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: gradient,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "rgba(255,255,255,0.55)",
        fontSize: 11,
        letterSpacing: "0.09em",
        textTransform: "uppercase",
        fontWeight: 700,
        textAlign: "center",
        padding: 16,
      }}
    >
      {label}
    </div>
  );
}

export function SectionHeader({
  title,
  action,
  actionHref,
  inverse = false,
}: {
  title: string;
  action?: string;
  actionHref?: string;
  inverse?: boolean;
}) {
  const color = inverse ? "var(--white)" : "var(--text-heading)";
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--space-4)",
        fontFamily: "var(--font-body)",
      }}
    >
      <h2
        style={{
          fontFamily: "var(--font-body)",
          fontWeight: 900,
          fontSize: "var(--text-h2)",
          textTransform: "uppercase",
          letterSpacing: "0.02em",
          color,
          whiteSpace: "nowrap",
          margin: 0,
        }}
      >
        {title}
      </h2>
      <span
        aria-hidden="true"
        style={{
          flex: 1,
          height: 1,
          background: inverse ? "rgba(255,255,255,0.35)" : "var(--border-strong)",
        }}
      />
      {action && (
        <a
          href={actionHref}
          className="ad-nav-link"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            color: inverse ? "var(--white)" : "var(--brand)",
            whiteSpace: "nowrap",
            borderBottom: "none",
          }}
        >
          {action} <span aria-hidden="true">→</span>
        </a>
      )}
    </div>
  );
}

export function Stat({
  value,
  label,
  inverse = false,
}: {
  value: string;
  label: string;
  inverse?: boolean;
}) {
  return (
    <div style={{ fontFamily: "var(--font-body)" }}>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "var(--text-display-sm)",
          lineHeight: 1,
          color: inverse ? "var(--white)" : "var(--brand)",
        }}
      >
        {value}
      </div>
      <div
        style={{
          marginTop: "var(--space-2)",
          fontSize: "var(--text-label-sm)",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "var(--tracking-label)",
          color: inverse ? "var(--blue-200)" : "var(--text-muted)",
          lineHeight: 1.4,
        }}
      >
        {label}
      </div>
    </div>
  );
}

export function StatRow({
  items,
  inverse = false,
  style,
}: {
  items: { value: string; label: string }[];
  inverse?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <div style={{ display: "flex", alignItems: "stretch", gap: "var(--space-6)", ...style }}>
      {items.map((it, i) => (
        <div key={it.label} style={{ display: "flex", alignItems: "stretch", gap: "var(--space-6)" }}>
          {i > 0 && (
            <span
              aria-hidden="true"
              style={{
                width: 1,
                background: inverse ? "rgba(255,255,255,0.3)" : "var(--border-default)",
              }}
            />
          )}
          <Stat value={it.value} label={it.label} inverse={inverse} />
        </div>
      ))}
    </div>
  );
}

export function AdCard({
  index,
  title,
  href,
  children,
  media,
}: {
  index: string;
  title: string;
  href: string;
  children: React.ReactNode;
  media: React.ReactNode;
}) {
  return (
    <a href={href} className="ad-card">
      <div style={{ position: "relative", aspectRatio: "16/9", background: "var(--blue-100)", overflow: "hidden" }}>
        {media}
        <span
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            background: "var(--brand)",
            color: "var(--white)",
            fontFamily: "var(--font-display)",
            fontSize: 22,
            lineHeight: 1,
            padding: "10px 14px",
          }}
        >
          {index}
        </span>
      </div>
      <div style={{ padding: "var(--space-5)" }}>
        <h3
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 900,
            fontSize: "var(--text-h3)",
            textTransform: "uppercase",
            letterSpacing: "0.02em",
            margin: 0,
          }}
        >
          {title}
        </h3>
        <div
          style={{
            marginTop: "var(--space-2)",
            fontSize: "var(--text-body-sm)",
            color: "var(--text-muted)",
            lineHeight: "var(--leading-body)",
          }}
        >
          {children}
        </div>
        <span
          aria-hidden="true"
          className="ad-card-arrow"
          style={{ display: "inline-block", marginTop: "var(--space-3)", color: "var(--brand)", fontWeight: 700 }}
        >
          ↗
        </span>
      </div>
    </a>
  );
}
