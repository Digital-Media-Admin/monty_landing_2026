import { AdCard, PlaceholderMedia, SectionHeader, wrap } from "./shared";

export function Product() {
  return (
    <section id="advertise" style={{ background: "var(--surface-tint)" }}>
      <div style={{ ...wrap, padding: "var(--space-8) var(--space-5)" }}>
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
      </div>
    </section>
  );
}
