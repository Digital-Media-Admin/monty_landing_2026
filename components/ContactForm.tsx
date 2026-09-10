"use client";

import { useState } from "react";

const interestOptions = [
  "Print display ads",
  "Inserts & wraps",
  "Web & newsletter",
  "Not sure yet",
];

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <div
      style={{
        background: "var(--white)",
        padding: "var(--space-6)",
        boxShadow: "var(--shadow-pop)",
        display: "grid",
        gap: "var(--space-4)",
      }}
    >
      {sent ? (
        <div
          style={{
            textAlign: "center",
            padding: "var(--space-6) 0",
            display: "grid",
            gap: "var(--space-4)",
            justifyItems: "center",
          }}
        >
          <span
            style={{
              display: "inline-block",
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-label-sm)",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "var(--tracking-label)",
              lineHeight: 1,
              padding: "5px 10px",
              background: "var(--success)",
              color: "var(--white)",
            }}
          >
            Request sent
          </span>
          <p style={{ color: "var(--text-body)", margin: 0 }}>
            Thanks — we&rsquo;ll call you within one business day.
          </p>
          <button
            type="button"
            className="ad-btn ad-btn-ghost"
            onClick={() => setSent(false)}
          >
            Send another
          </button>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          style={{ display: "grid", gap: "var(--space-4)" }}
        >
          <label style={{ display: "block", fontFamily: "var(--font-body)" }}>
            <span
              style={{
                display: "block",
                fontSize: "var(--text-label)",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "var(--tracking-label)",
                color: "var(--text-heading)",
                marginBottom: "var(--space-2)",
              }}
            >
              Business name
            </span>
            <input
              className="ad-field"
              type="text"
              placeholder="Your Business Name"
              required
            />
          </label>
          <label style={{ display: "block", fontFamily: "var(--font-body)" }}>
            <span
              style={{
                display: "block",
                fontSize: "var(--text-label)",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "var(--tracking-label)",
                color: "var(--text-heading)",
                marginBottom: "var(--space-2)",
              }}
            >
              Phone Number
            </span>
            <input
              className="ad-field"
              type="text"
              placeholder="(908) 555-0122"
              required
            />
          </label>
          <label style={{ display: "block", fontFamily: "var(--font-body)" }}>
            <span
              style={{
                display: "block",
                fontSize: "var(--text-label)",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "var(--tracking-label)",
                color: "var(--text-heading)",
                marginBottom: "var(--space-2)",
              }}
            >
              Interested in
            </span>
            <span style={{ position: "relative", display: "block" }}>
              <select
                className="ad-field"
                defaultValue=""
                required
                style={{
                  appearance: "none",
                  WebkitAppearance: "none",
                  padding: "11px 40px 11px 14px",
                  cursor: "pointer",
                }}
              >
                <option value="" disabled>
                  Choose…
                </option>
                {interestOptions.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  right: 14,
                  top: "50%",
                  transform: "translateY(-50%)",
                  pointerEvents: "none",
                  color: "var(--brand)",
                  fontSize: 11,
                }}
              >
                ▼
              </span>
            </span>
          </label>
          <button
            type="submit"
            className="ad-btn ad-btn-lg ad-btn-primary"
            style={{ width: "100%", justifyContent: "center" }}
          >
            Book a call <span aria-hidden="true">→</span>
          </button>
        </form>
      )}
    </div>
  );
}
