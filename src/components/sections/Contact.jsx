import { FaGithub, FaLinkedin } from "react-icons/fa";

const EMAIL = "olaniyantemitope69@gmail.com";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        paddingBlock: "calc(var(--spacing-section) * 1.5)",
        textAlign: "center",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div className="content-wrap">
        <p
          className="type-label"
          style={{ marginBottom: "1.5rem", color: "var(--color-accent)" }}
        >
          Get in touch
        </p>

        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            fontWeight: 400,
            color: "var(--color-text-primary)",
            marginBottom: "2.5rem",
          }}
        >
          Let&apos;s build something.
        </h2>

        <a
          href={`mailto:${EMAIL}`}
          className="type-mono"
          data-cursor="hover"
          style={{
            display: "inline-block",
            fontSize: "clamp(0.9375rem, 2.5vw, 1.125rem)",
            color: "var(--color-accent)",
            textDecoration: "none",
            letterSpacing: "0.02em",
            borderBottom: "1px solid var(--color-accent-dim)",
            paddingBottom: "2px",
            transition: "opacity 0.18s ease",
            marginBottom: "3rem",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          {EMAIL}
        </a>

        {/* Social links */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <a
            href="https://github.com/olat69"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            data-cursor="hover"
            style={{
              color: "var(--color-text-muted)",
              transition: "color 0.18s ease",
              display: "flex",
              alignItems: "center",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--color-text-primary)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--color-text-muted)")
            }
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/temitope-olaniyan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            data-cursor="hover"
            style={{
              color: "var(--color-text-muted)",
              transition: "color 0.18s ease",
              display: "flex",
              alignItems: "center",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--color-text-primary)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--color-text-muted)")
            }
          >
            <FaLinkedin size={22} />
          </a>
        </div>

        {/* Footer note */}
        <p
          className="type-label"
          style={{
            marginTop: "5rem",
            color: "var(--color-border)",
          }}
        >
          © 2026 Temitope Olaniyan
        </p>
      </div>
    </section>
  );
}
