import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import gsap from "gsap";
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

  const overlayRef = useRef(null);

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

  /* Animate the full-screen overlay open / closed */
  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;
    const links = overlay.querySelectorAll("[data-menu-link]");
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (menuOpen) {
      overlay.style.pointerEvents = "auto";
      if (prefersReduced) {
        gsap.set(overlay, { autoAlpha: 1 });
        gsap.set(links, { y: 0, autoAlpha: 1 });
        return;
      }
      const tl = gsap.timeline();
      tl.to(overlay, { autoAlpha: 1, duration: 0.35, ease: "power2.out" }).fromTo(
        links,
        { y: 48, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.55,
          stagger: 0.08,
          ease: "power3.out",
        },
        "-=0.1",
      );
      return () => tl.kill();
    }

    if (prefersReduced) {
      gsap.set(overlay, { autoAlpha: 0 });
      overlay.style.pointerEvents = "none";
      return;
    }
    const tl = gsap.timeline({
      onComplete: () => {
        overlay.style.pointerEvents = "none";
      },
    });
    tl.to(links, {
      y: 24,
      autoAlpha: 0,
      duration: 0.25,
      stagger: 0.04,
      ease: "power2.in",
    }).to(overlay, { autoAlpha: 0, duration: 0.3, ease: "power2.in" }, "-=0.12");
    return () => tl.kill();
  }, [menuOpen]);

  /* Lock body scroll + close on Escape while menu is open */
  useEffect(() => {
    if (!menuOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

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
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 60,
          transition:
            "height 0.3s ease, background 0.3s ease, backdrop-filter 0.3s ease, border-bottom 0.3s ease",
          height: condensed && !menuOpen ? "56px" : "80px",
          background:
            condensed && !menuOpen
              ? "color-mix(in srgb, var(--color-bg-0) 80%, transparent)"
              : "transparent",
          backdropFilter: condensed && !menuOpen ? "blur(12px)" : "none",
          WebkitBackdropFilter: condensed && !menuOpen ? "blur(12px)" : "none",
          borderBottom:
            condensed && !menuOpen
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
            onClick={() => setMenuOpen(false)}
            data-cursor="hover"
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

          {/* Controls: theme toggle + hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
              role="switch"
              aria-checked={isDark}
              data-cursor="hover"
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "transparent",
                border: "none",
                padding: 0,
              }}
            >
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

            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              data-cursor="hover"
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
                  width: "24px",
                  height: "1.5px",
                  background: "currentColor",
                  transition: "transform 0.25s ease, opacity 0.25s ease",
                  transform: menuOpen
                    ? "rotate(45deg) translateY(6.5px)"
                    : "none",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "24px",
                  height: "1.5px",
                  background: "currentColor",
                  transition: "opacity 0.2s ease",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "24px",
                  height: "1.5px",
                  background: "currentColor",
                  transition: "transform 0.25s ease, opacity 0.25s ease",
                  transform: menuOpen
                    ? "rotate(-45deg) translateY(-6.5px)"
                    : "none",
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen overlay menu */}
      <div
        ref={overlayRef}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 55,
          background: "var(--color-bg-0)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "clamp(1rem, 3.5vh, 2.25rem)",
          opacity: 0,
          visibility: "hidden",
          pointerEvents: "none",
        }}
      >
        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "clamp(1rem, 3.5vh, 2.25rem)",
          }}
        >
          {NAV_LINKS.map(({ label, href, external }) => {
            const linkStyle = {
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.25rem, 7vw, 5rem)",
              fontWeight: 600,
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              color: "var(--color-text-primary)",
              textDecoration: "none",
              transition: "color 0.2s ease",
            };
            const onEnter = (e) =>
              (e.currentTarget.style.color = "var(--color-accent)");
            const onLeave = (e) =>
              (e.currentTarget.style.color = "var(--color-text-primary)");

            return external ? (
              <Link
                key={label}
                to={href}
                data-menu-link
                data-cursor="hover"
                onClick={() => setMenuOpen(false)}
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
                style={linkStyle}
              >
                {label}
              </Link>
            ) : (
              <a
                key={label}
                href={href}
                data-menu-link
                data-cursor="hover"
                onClick={(e) => handleAnchorClick(e, href)}
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
                style={linkStyle}
              >
                {label}
              </a>
            );
          })}
        </nav>
      </div>
    </>
  );
}
