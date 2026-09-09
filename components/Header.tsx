const wrap: React.CSSProperties = {
  maxWidth: "var(--container-max)",
  margin: "0 auto",
  padding: "0 var(--space-5)",
};

export function Header() {
  return (
    <header
      style={{
        background: "var(--surface-page)",
        borderBottom: "var(--rule-hairline)",
      }}
    >
      <div
        style={{
          ...wrap,
          padding: "18px var(--space-5)",
          display: "flex",
          alignItems: "center",
          gap: "var(--space-6)",
        }}
      >
        <span
          style={{
            fontFamily: "Georgia, serif",
            fontWeight: 700,
            fontSize: 22,
            lineHeight: 1,
            color: "var(--text-heading)",
          }}
        >
          The Montgomery News<span style={{ color: "var(--brand)" }}></span>
        </span>
        <span
          style={{
            fontSize: "var(--text-label-sm)",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "var(--tracking-label)",
            color: "var(--text-muted)",
            borderLeft: "var(--rule-hairline)",
            paddingLeft: "var(--space-4)",
          }}
        >
          Print & Digital Advertising
        </span>
        <nav
          style={{
            marginLeft: "auto",
            display: "flex",
            alignItems: "center",
            gap: "var(--space-5)",
          }}
        >
          <a href="#results" className="ad-nav-link">
            Results
          </a>
          <a href="#advertise" className="ad-nav-link">
            Ways to advertise
          </a>
        </nav>
        <a href="#contact" className="ad-btn ad-btn-md ad-btn-primary">
          Book a call
        </a>
      </div>
    </header>
  );
}
