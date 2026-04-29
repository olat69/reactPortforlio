import { useEffect, useRef } from "react";
import { Github, Download } from "lucide-react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const HERO_NAME = "Temitope Olaniyan";
const HERO_SUBTITLE =
  "I build full-stack products end-to-end — from first commit to production.";

export default function Hero() {
  const nameRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      /* Split name into words */
      const split = new SplitText(nameRef.current, { type: "words" });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(split.words, {
        y: 48,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
      })
        .from(
          subtitleRef.current,
          { y: 20, opacity: 0, duration: 0.6 },
          "-=0.4",
        )
        .from(ctaRef.current, { y: 16, opacity: 0, duration: 0.5 }, "-=0.3");
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "80px",
      }}
    >
      {/* Animated gradient background */}
      <div
        ref={bgRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          background: "var(--color-bg-0)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 60% at 20% 40%, color-mix(in srgb, var(--color-accent) 6%, transparent) 0%, transparent 70%)",
            animation: "heroGlow 10s ease-in-out infinite alternate",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 60% 50% at 80% 70%, color-mix(in srgb, var(--color-bg-2) 60%, transparent) 0%, transparent 70%)",
            animation: "heroGlow2 10s ease-in-out infinite alternate",
          }}
        />
      </div>

      <div className="content-wrap" style={{ position: "relative", zIndex: 1 }}>
        {/* Eyebrow label */}
        <p
          className="type-label"
          style={{ marginBottom: "1.5rem", color: "var(--color-accent)" }}
        >
          Full-Stack Software Engineer
        </p>

        {/* Hero name */}
        <h1
          ref={nameRef}
          className="type-hero"
          style={{ marginBottom: "2rem", maxWidth: "14ch" }}
        >
          {HERO_NAME}
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="type-subtitle"
          style={{ maxWidth: "42ch", marginBottom: "3rem" }}
        >
          {HERO_SUBTITLE}
        </p>

        {/* CTAs */}
        <div
          ref={ctaRef}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#work")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            data-cursor="hover"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "var(--font-sans)",
              fontSize: "0.9375rem",
              fontWeight: 500,
              color: "var(--color-bg-0)",
              background: "var(--color-accent)",
              padding: "0.75rem 1.5rem",
              borderRadius: "4px",
              textDecoration: "none",
              transition: "opacity 0.18s ease, transform 0.18s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.88";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            View Work
          </a>

          <a
            href="https://github.com/olat69"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            data-cursor="hover"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "var(--font-sans)",
              fontSize: "0.875rem",
              fontWeight: 500,
              color: "var(--color-text-muted)",
              textDecoration: "none",
              transition: "color 0.18s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--color-text-primary)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--color-text-muted)")
            }
          >
            <Github size={16} />
            GitHub
          </a>

          <a
            href="/cv.pdf"
            download="Temitope_Olaniyan_CV.pdf"
            aria-label="Download CV"
            data-cursor="hover"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "var(--font-sans)",
              fontSize: "0.875rem",
              fontWeight: 500,
              color: "var(--color-text-muted)",
              textDecoration: "none",
              transition: "color 0.18s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--color-text-primary)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--color-text-muted)")
            }
          >
            <Download size={16} />
            Download CV
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          zIndex: 1,
        }}
      >
        <span
          className="type-label"
          style={{
            color:
              "color-mix(in srgb, var(--color-text-primary) 70%, var(--color-accent))",
            fontSize: "0.75rem",
            letterSpacing: "0.12em",
            opacity: 0.95,
            textShadow:
              "0 0 14px color-mix(in srgb, var(--color-accent) 20%, transparent)",
          }}
        >
          scroll
        </span>
        <div
          style={{
            width: "2px",
            height: "56px",
            borderRadius: "999px",
            background:
              "linear-gradient(to bottom, var(--color-accent), color-mix(in srgb, var(--color-text-primary) 40%, transparent), transparent)",
            boxShadow:
              "0 0 14px color-mix(in srgb, var(--color-accent) 35%, transparent)",
            animation: "scrollLine 2s ease-in-out infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes heroGlow {
          from { opacity: 0.6; transform: scale(1); }
          to   { opacity: 1;   transform: scale(1.15); }
        }
        @keyframes heroGlow2 {
          from { opacity: 0.8; transform: scale(1.1); }
          to   { opacity: 0.4; transform: scale(0.95); }
        }
        @keyframes scrollLine {
          0%   { transform: scaleY(0); transform-origin: top; }
          50%  { transform: scaleY(1); transform-origin: top; }
          51%  { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
      `}</style>
    </section>
  );
}
