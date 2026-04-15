import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

/* ─── Featured (full-width) card ───────────────────────────── */
export function FeaturedCard({ project }) {
  const { title, description, technologies, image, url, git } = project;

  return (
    <div
      data-cursor="hover"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "2.5rem",
        border: "1px solid var(--color-border)",
        borderRadius: "6px",
        overflow: "hidden",
        background: "var(--color-bg-1)",
        transition: "border-color 0.25s ease",
      }}
      className="featured-card lg-grid-2"
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = "color-mix(in srgb, var(--color-accent) 40%, var(--color-border))")}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
    >
      {/* Image */}
      <div style={{ overflow: "hidden", minHeight: "320px" }}>
        <img
          src={image}
          alt={title}
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.5s ease-out",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </div>

      {/* Text */}
      <div style={{ padding: "2.5rem 2rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <span
          className="type-label"
          style={{ color: "var(--color-accent)", marginBottom: "1rem" }}
        >
          Featured Project
        </span>

        <h3
          className="type-section"
          style={{ marginBottom: "1rem", fontSize: "1.75rem" }}
        >
          {title}
        </h3>

        <p
          className="type-body"
          style={{
            marginBottom: "1.5rem",
            display: "-webkit-box",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {description}
        </p>

        {/* Stack */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
          {technologies.map((t) => (
            <span key={t} className="type-mono" style={{ color: "var(--color-text-muted)" }}>
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: "1.25rem", alignItems: "center" }}>
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
                fontFamily: "var(--font-sans)",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "var(--color-accent)",
                textDecoration: "none",
                transition: "opacity 0.18s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Live <ArrowUpRight size={14} />
            </a>
          )}
          {git && (
            <a
              href={git}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} GitHub repository`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
                fontFamily: "var(--font-sans)",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "var(--color-text-muted)",
                textDecoration: "none",
                transition: "color 0.18s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-muted)")}
            >
              <FaGithub size={15} /> Code
            </a>
          )}
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .lg-grid-2 { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </div>
  );
}

/* ─── Compact (grid) card ────────────────────────────────── */
export function CompactCard({ project }) {
  const { title, description, technologies, image, url, git } = project;

  return (
    <div
      data-cursor="hover"
      style={{
        border: "1px solid var(--color-border)",
        borderRadius: "6px",
        overflow: "hidden",
        background: "var(--color-bg-1)",
        display: "flex",
        flexDirection: "column",
        transition: "border-color 0.25s ease, transform 0.25s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "color-mix(in srgb, var(--color-accent) 40%, var(--color-border))";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--color-border)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* Image */}
      <div style={{ overflow: "hidden", height: "220px", flexShrink: 0 }}>
        <img
          src={image}
          alt={title}
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.5s ease-out",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </div>

      {/* Content */}
      <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flex: 1 }}>
        <h3 className="type-card" style={{ marginBottom: "0.625rem" }}>
          {title}
        </h3>

        <p
          className="type-body"
          style={{
            fontSize: "0.9rem",
            marginBottom: "1.25rem",
            flex: 1,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {description}
        </p>

        {/* Stack */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem", marginBottom: "1.25rem" }}>
          {technologies.slice(0, 4).map((t) => (
            <span
              key={t}
              className="type-mono"
              style={{
                fontSize: "0.75rem",
                padding: "0.2rem 0.5rem",
                background: "var(--color-bg-2)",
                borderRadius: "3px",
                color: "var(--color-text-muted)",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: "1rem" }}>
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.25rem",
                fontSize: "0.8125rem",
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                color: "var(--color-accent)",
                textDecoration: "none",
              }}
            >
              Live <ArrowUpRight size={12} />
            </a>
          )}
          {git && (
            <a
              href={git}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} GitHub repository`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.25rem",
                fontSize: "0.8125rem",
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                color: "var(--color-text-muted)",
                textDecoration: "none",
              }}
            >
              <FaGithub size={13} /> Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
