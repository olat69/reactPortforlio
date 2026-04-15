import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Timeline", href: "#timeline" },
  { label: "Blog", href: "/blog", external: true },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const [condensed, setCondensed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  /* Condense navbar when hero exits viewport */
  useEffect(() => {
    if (!isHome) {
      setCondensed(true);
      return;
    }
    const hero = document.getElementById("hero");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setCondensed(!entry.isIntersecting),
      { threshold: 0.05 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [isHome]);

  const handleAnchorClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setMenuOpen(false);
      if (isHome) {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      } else {
        // Navigate home with hash; Home.jsx will scroll on mount
        navigate("/" + href);
      }
    } else {
      setMenuOpen(false);
    }
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition:
          "height 0.3s ease, background 0.3s ease, backdrop-filter 0.3s ease, border-bottom 0.3s ease",
        height: condensed ? "56px" : "80px",
        background: condensed
          ? "color-mix(in srgb, var(--color-bg-0) 80%, transparent)"
          : "transparent",
        backdropFilter: condensed ? "blur(12px)" : "none",
        WebkitBackdropFilter: condensed ? "blur(12px)" : "none",
        borderBottom: condensed
          ? "1px solid var(--color-border)"
          : "1px solid transparent",
      }}
    >
      <div
        className="content-wrap"
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.875rem",
            color: "var(--color-accent)",
            textDecoration: "none",
            letterSpacing: "0.02em",
          }}
        >
          olat69
        </Link>

        {/* Desktop nav */}
        <nav
          style={{ alignItems: "center", gap: "2rem" }}
          className="hidden md:flex"
        >
          {NAV_LINKS.map(({ label, href, external }) =>
            external ? (
              <Link
                key={label}
                to={href}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "var(--color-text-muted)",
                  textDecoration: "none",
                  transition: "color 0.18s ease",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.color = "var(--color-text-primary)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.color = "var(--color-text-muted)")
                }
              >
                {label}
              </Link>
            ) : (
              <a
                key={label}
                href={href}
                onClick={(e) => handleAnchorClick(e, href)}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "var(--color-text-muted)",
                  textDecoration: "none",
                  transition: "color 0.18s ease",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.color = "var(--color-text-primary)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.color = "var(--color-text-muted)")
                }
              >
                {label}
              </a>
            ),
          )}

          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            role="switch"
            aria-checked={isDark}
            data-cursor="hover"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              background: "transparent",
              border: "none",
              padding: 0,
              color: "var(--color-text-muted)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            <span style={{ minWidth: "3.2ch", textAlign: "right" }}>
              {isDark ? "dark" : "light"}
            </span>
            <span
              aria-hidden="true"
              style={{
                width: "42px",
                height: "24px",
                borderRadius: "999px",
                border: "1px solid var(--color-border)",
                background: isDark
                  ? "color-mix(in srgb, var(--color-accent) 35%, var(--color-bg-2))"
                  : "var(--color-bg-2)",
                display: "inline-flex",
                alignItems: "center",
                padding: "2px",
                transition: "background 0.22s ease, border-color 0.22s ease",
              }}
            >
              <span
                style={{
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  background: "var(--color-text-primary)",
                  transform: isDark ? "translateX(18px)" : "translateX(0)",
                  transition: "transform 0.22s ease",
                }}
              />
            </span>
          </button>
        </nav>

        {/* Mobile: theme toggle + hamburger */}
        <div
          style={{ alignItems: "center", gap: "1rem" }}
          className="flex md:hidden"
        >
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            role="switch"
            aria-checked={isDark}
            data-cursor="hover"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.45rem",
              background: "transparent",
              border: "none",
              padding: 0,
              color: "var(--color-text-muted)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.68rem",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: "38px",
                height: "22px",
                borderRadius: "999px",
                border: "1px solid var(--color-border)",
                background: isDark
                  ? "color-mix(in srgb, var(--color-accent) 35%, var(--color-bg-2))"
                  : "var(--color-bg-2)",
                display: "inline-flex",
                alignItems: "center",
                padding: "2px",
                transition: "background 0.22s ease, border-color 0.22s ease",
              }}
            >
              <span
                style={{
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  background: "var(--color-text-primary)",
                  transform: isDark ? "translateX(15px)" : "translateX(0)",
                  transition: "transform 0.22s ease",
                }}
              />
            </span>
            <span style={{ minWidth: "3.2ch" }}>
              {isDark ? "dark" : "light"}
            </span>
          </button>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              cursor: "auto",
              color: "var(--color-text-primary)",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              padding: "4px",
            }}
          >
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                background: "currentColor",
                transition: "transform 0.2s ease, opacity 0.2s ease",
                transform: menuOpen
                  ? "rotate(45deg) translateY(6.5px)"
                  : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                background: "currentColor",
                transition: "opacity 0.2s ease",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                background: "currentColor",
                transition: "transform 0.2s ease, opacity 0.2s ease",
                transform: menuOpen
                  ? "rotate(-45deg) translateY(-6.5px)"
                  : "none",
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        style={{
          background: "var(--color-bg-1)",
          borderTop: "1px solid var(--color-border)",
          overflow: "hidden",
          maxHeight: menuOpen ? "400px" : "0",
          transition: "max-height 0.3s ease",
        }}
        className="md:hidden"
      >
        <nav
          style={{
            padding: "1.5rem var(--spacing-gutter)",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          {NAV_LINKS.map(({ label, href, external }) =>
            external ? (
              <Link
                key={label}
                to={href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: "var(--color-text-muted)",
                  textDecoration: "none",
                }}
              >
                {label}
              </Link>
            ) : (
              <a
                key={label}
                href={href}
                onClick={(e) => handleAnchorClick(e, href)}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: "var(--color-text-muted)",
                  textDecoration: "none",
                }}
              >
                {label}
              </a>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}
