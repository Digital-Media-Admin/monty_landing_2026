import { ContactForm } from "@/components/ContactForm";

const wrap: React.CSSProperties = {
  maxWidth: "var(--container-max)",
  margin: "0 auto",
  padding: "0 var(--space-5)",
};

function PlaceholderMedia({
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

function SectionHeader({
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

function Stat({
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

function StatRow({
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

function AdCard({
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

const heroStats = [
  { value: "22K+", label: "Mailboxes every issue" },
  { value: "6", label: "Towns covered" },
  { value: "25+", label: "Years in print" },
];

const resultStats = [
  { value: "22K+", label: "Mailboxes every issue" },
  { value: "6", label: "Towns covered" },
  { value: "25+", label: "Years in print" },
  { value: "92%", label: "Advertisers renew" },
];

const advertisers = [
  "Towne Centre Dental",
  "Belle Mead Realty",
  "Rocky Hill Bistro",
  "Skillman Auto",
  "Harlingen Hardware",
];

export default function Home() {
  return (
    <div style={{ minWidth: 1280, fontFamily: "var(--font-body)", color: "var(--text-body)" }}>
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
              fontFamily: "var(--font-display)",
              fontSize: 22,
              lineHeight: 1,
              textTransform: "uppercase",
              color: "var(--text-heading)",
            }}
          >
            Ad Space<span style={{ color: "var(--brand)" }}>.</span>
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
            Advertising in The Montgomery News
          </span>
          <nav style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "var(--space-5)" }}>
            <a href="#advertise" className="ad-nav-link">
              Ways to advertise
            </a>
            <a href="#results" className="ad-nav-link">
              Results
            </a>
            <a href="#rates" className="ad-nav-link">
              Rates
            </a>
          </nav>
          <a href="#contact" className="ad-btn ad-btn-md ad-btn-primary">
            Book a call
          </a>
        </div>
      </header>

      <section style={{ background: "var(--surface-tint)", position: "relative", overflow: "hidden" }}>
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
            <span key={i} style={{ width: 5, height: 5, background: "var(--blue-700)" }} />
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
        <div style={{ ...wrap, padding: "88px var(--space-5) 96px", position: "relative" }}>
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
            The Montgomery News · Local advertising <span aria-hidden="true">↗</span>
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
          <p style={{ fontSize: "var(--text-body-lg)", color: "var(--text-body)", maxWidth: 440, margin: "22px 0 0" }}>
            Put your business in the paper neighbors actually read — mailed free to every home in Belle Mead,
            Blawenburg, Griggstown, Harlingen, Rocky Hill and Skillman.
          </p>
          <div style={{ display: "flex", gap: 16, margin: "28px 0 0" }}>
            <a href="#contact" className="ad-btn ad-btn-lg ad-btn-primary">
              Book a call <span aria-hidden="true">→</span>
            </a>
            <a href="#rates" className="ad-btn ad-btn-lg ad-btn-secondary">
              View rate card
            </a>
          </div>
          <StatRow items={heroStats} style={{ marginTop: 56 }} />
        </div>
      </section>

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

      <section id="advertise" style={{ ...wrap, padding: "var(--space-8) var(--space-5)" }}>
        <SectionHeader title="Ways to advertise" action="View rate card" actionHref="#rates" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-5)", marginTop: "var(--space-6)" }}>
          <AdCard
            index="01"
            title="Print display ads"
            href="#rates"
            media={
              <PlaceholderMedia
                gradient="linear-gradient(135deg,var(--blue-800),var(--blue-500))"
                label="Print ad placeholder"
              />
            }
          >
            From an eighth-page to the back cover — designed for you at no extra cost.
          </AdCard>
          <AdCard
            index="02"
            title="Inserts & wraps"
            href="#rates"
            media={
              <PlaceholderMedia
                gradient="linear-gradient(135deg,var(--ink),var(--blue-700))"
                label="Insert photo placeholder"
              />
            }
          >
            Your flyer or voucher, delivered inside every copy of the paper.
          </AdCard>
          <AdCard
            index="03"
            title="Web & newsletter"
            href="#rates"
            media={
              <PlaceholderMedia
                gradient="linear-gradient(135deg,var(--blue-400),var(--blue-100))"
                label="Screenshot placeholder"
              />
            }
          >
            Banner spots on TheMontyNews.com and the monthly email digest.
          </AdCard>
        </div>
      </section>

      <section id="results" style={{ background: "var(--surface-inverse)", position: "relative", overflow: "hidden" }}>
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: -70,
            top: -70,
            width: 240,
            height: 240,
            borderRadius: "50%",
            background: "var(--blue-500)",
            opacity: 0.4,
          }}
        />
        <div style={{ ...wrap, padding: "var(--space-8) var(--space-5)", position: "relative" }}>
          <SectionHeader title="What advertisers say" inverse />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-7)", marginTop: "var(--space-6)" }}>
            <figure style={{ margin: 0 }}>
              <blockquote style={{ margin: 0, fontSize: 22, fontWeight: 600, lineHeight: 1.4, color: "var(--white)" }}>
                “The sedation voucher on our back-page ad brought in 40 new patients in one season. Nothing else we
                run comes close.”
              </blockquote>
              <figcaption
                style={{
                  marginTop: "var(--space-4)",
                  fontSize: "var(--text-label)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "var(--tracking-label)",
                  color: "var(--blue-200)",
                }}
              >
                Dr. Al Internoscia — Towne Centre Family Dental
              </figcaption>
            </figure>
            <figure style={{ margin: 0 }}>
              <blockquote style={{ margin: 0, fontSize: 22, fontWeight: 600, lineHeight: 1.4, color: "var(--white)" }}>
                “We booked out our summer camp two months early. Everyone in town mentions they saw us in the
                Monty.”
              </blockquote>
              <figcaption
                style={{
                  marginTop: "var(--space-4)",
                  fontSize: "var(--text-label)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "var(--tracking-label)",
                  color: "var(--blue-200)",
                }}
              >
                Program director — Montgomery Summer Camps
              </figcaption>
            </figure>
          </div>
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.2)",
              marginTop: "var(--space-7)",
              paddingTop: "var(--space-6)",
              display: "flex",
              gap: "var(--space-8)",
            }}
          >
            <StatRow items={resultStats} inverse />
          </div>
        </div>
      </section>

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
            <p style={{ marginTop: "var(--space-3)", fontSize: "var(--text-body-sm)", color: "var(--blue-200)", maxWidth: 320 }}>
              Ad Space is the advertising desk of The Montgomery News — the voice of your community since 2001.
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
            <div style={{ display: "grid", gap: "var(--space-3)", fontSize: "var(--text-body-sm)", color: "var(--blue-100)" }}>
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
              <a className="ad-icon-btn" href="#" aria-label="LinkedIn" title="LinkedIn">
                in
              </a>
              <a className="ad-icon-btn" href="#" aria-label="Facebook" title="Facebook">
                f
              </a>
              <a className="ad-icon-btn" href="#" aria-label="Instagram" title="Instagram">
                ◎
              </a>
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.15)", position: "relative" }}>
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
            © 2026 The Montgomery News — all rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
}
