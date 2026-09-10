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
        height: "var(--header-h)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        className="gap-2 md:gap-6"
        style={{
          ...wrap,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: "Georgia, serif",
            fontWeight: 700,
            fontSize: "clamp(16px, 4.6vw, 22px)",
            lineHeight: 1,
            color: "var(--text-heading)",
            whiteSpace: "nowrap",
          }}
        >
          The Montgomery News
        </span>
        <span
          className="hidden lg:inline-block"
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
          className="hidden md:flex"
          style={{
            marginLeft: "auto",
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
        <a
          href="#contact"
          className="ad-btn ad-btn-md ad-btn-primary ml-auto md:ml-0"
        >
          Book a call
        </a>
      </div>
    </header>
  );
}
