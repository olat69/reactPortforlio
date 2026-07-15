import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import cert1 from "../../assets/cert-1.jpeg";
import cert2 from "../../assets/cert-2.jpeg";
import wesBadge from "../../assets/wes-badge.png";

const WES_BADGE_ID = "aca32f17-a165-4e27-a9d6-d16f0de6bb74";
const WES_BADGE_URL = `https://www.credly.com/badges/${WES_BADGE_ID}/public_url`;

const CERTS = [
  {
    image: cert1,
    title: "Introduction to DevOps",
    issuer: "IBM — Coursera",
    detail: "August 2025",
    url: "https://www.coursera.org/account/accomplishments/verify/5JH9AP1WVSJA",
  },
  {
    image: cert2,
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon — Coursera",
    detail: "October 2025",
    url: "https://www.coursera.org/account/accomplishments/verify/BIC0ZYGQA6YD",
  },
  {
    image: wesBadge,
    title: "Verified International Academic Qualifications",
    issuer: "WES — Credly",
    detail: "July 2026",
    url: WES_BADGE_URL,
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      style={{ paddingBlock: "var(--spacing-section)" }}
    >
      <div className="content-wrap">
        <p
          className="type-label"
          style={{ marginBottom: "1rem", color: "var(--color-accent)" }}
        >
          Certifications
        </p>
        <h2 className="type-section" style={{ marginBottom: "3rem" }}>
          Credentials.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {CERTS.map((cert) => (
            <motion.a
              key={cert.url}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              style={{
                display: "flex",
                gap: "1.25rem",
                padding: "1.5rem",
                background: "var(--color-bg-1)",
                border: "1px solid var(--color-border)",
                borderRadius: "6px",
                textDecoration: "none",
                transition: "border-color 0.25s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor =
                  "color-mix(in srgb, var(--color-accent) 40%, var(--color-border))")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "var(--color-border)")
              }
              data-cursor="hover"
            >
              <img
                src={cert.image}
                alt={cert.title}
                loading="lazy"
                style={{
                  width: "72px",
                  height: "72px",
                  objectFit: "cover",
                  borderRadius: "4px",
                  flexShrink: 0,
                  border: "1px solid var(--color-border)",
                }}
              />
              <div style={{ flex: 1 }}>
                <h3
                  className="type-card"
                  style={{ marginBottom: "0.375rem", fontSize: "0.9375rem" }}
                >
                  {cert.title}
                </h3>
                <p
                  className="type-label"
                  style={{
                    textTransform: "none",
                    letterSpacing: 0,
                    fontSize: "0.8125rem",
                    marginBottom: "0.25rem",
                  }}
                >
                  {cert.issuer}
                </p>
                <p
                  className="type-mono"
                  style={{ fontSize: "0.75rem", marginBottom: "0.75rem" }}
                >
                  {cert.detail}
                </p>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.25rem",
                    fontSize: "0.8125rem",
                    fontFamily: "var(--font-sans)",
                    fontWeight: 500,
                    color: "var(--color-accent)",
                  }}
                >
                  Verify <ArrowUpRight size={12} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
