import { siFacebook, siInstagram } from "simple-icons";

export function Footer() {
  return (
    <footer
      style={{
        fontFamily: "var(--font-body)",
        background: "var(--surface-inverse-deep)",
        color: "var(--white)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: -90,
          bottom: -120,
          width: 280,
          height: 280,
          borderRadius: "50%",
          background: "var(--blue-500)",
          opacity: 0.35,
        }}
      />
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "var(--space-8) var(--space-5)",
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr auto",
          gap: "var(--space-7)",
          position: "relative",
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 900,
              fontSize: "var(--text-h2)",
              textTransform: "uppercase",
              color: "var(--white)",
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            Be seen
            <br />
            <span style={{ color: "var(--blue-300)" }}>in every mailbox</span>
          </h2>
          <p
            style={{
              marginTop: "var(--space-3)",
              fontSize: "var(--text-body-sm)",
              color: "var(--blue-200)",
              maxWidth: 320,
            }}
          >
            Ad Space is the advertising desk of The Montgomery News — the voice
            of your community since 2001.
          </p>
        </div>
        <div>
          <div
            style={{
              fontSize: "var(--text-label)",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "var(--tracking-label)",
              marginBottom: "var(--space-4)",
            }}
          >
            Contact
          </div>
          <div
            style={{
              display: "grid",
              gap: "var(--space-3)",
              fontSize: "var(--text-body-sm)",
              color: "var(--blue-100)",
            }}
          >
            <span>ads@themontynews.com</span>
            <span>(908) 555-0100</span>
            <span>TheMontyNews.com</span>
          </div>
        </div>
        <div>
          <div
            style={{
              fontSize: "var(--text-label)",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "var(--tracking-label)",
              marginBottom: "var(--space-4)",
            }}
          >
            Connect
          </div>
          <div style={{ display: "flex", gap: "var(--space-2)" }}>
            <a
              className="ad-icon-btn"
              href="https://www.linkedin.com/company/the-montgomery-news"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              {/* hand-drawn: LinkedIn's mark was pulled from simple-icons over a trademark dispute */}
              <svg
                role="img"
                viewBox="0 0 448 512"
                width={16}
                height={18}
                fill="currentColor"
              >
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
              </svg>
            </a>
            <a
              className="ad-icon-btn"
              href="https://www.facebook.com/themontynews.org/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Facebook"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                width={18}
                height={18}
                fill="currentColor"
              >
                <path d={siFacebook.path} />
              </svg>
            </a>
            <a
              className="ad-icon-btn"
              href="https://www.instagram.com/themontynews/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                width={18}
                height={18}
                fill="currentColor"
              >
                <path d={siInstagram.path} />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.15)",
          position: "relative",
        }}
      >
        <div
          style={{
            maxWidth: "var(--container-max)",
            margin: "0 auto",
            padding: "var(--space-4) var(--space-5)",
            fontSize: "var(--text-label-sm)",
            letterSpacing: "var(--tracking-label)",
            textTransform: "uppercase",
            color: "var(--blue-300)",
          }}
        >
          © {new Date().getFullYear()} The Montgomery News - all rights reserved
        </div>
      </div>
    </footer>
  );
}
