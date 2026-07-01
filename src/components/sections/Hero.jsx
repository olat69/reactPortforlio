import { useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";
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
  const imageRef = useRef(null);

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
        .from(ctaRef.current, { y: 16, opacity: 0, duration: 0.5 }, "-=0.3")
        .from(
          imageRef.current,
          { scale: 0.92, opacity: 0, duration: 0.9, ease: "power2.out" },
          "-=0.9",
        );
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

      <div
        className="content-wrap hero-grid"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div className="hero-text">
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
          <div ref={ctaRef} className="hero-cta-row">
            <a
              href="https://docs.google.com/document/d/1nge-hSIwo7Nmg2zDUYq8EmpFbZ02QH7WZsHmvINkmXQ/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View CV"
              data-cursor="hover"
              className="hero-download-cta"
            >
              <span className="hero-download-icon" aria-hidden="true">
                <ExternalLink size={16} strokeWidth={2} />
              </span>
              <span>View CV</span>
            </a>
          </div>
        </div>

        {/* Hero portrait */}
        <div ref={imageRef} className="hero-image" aria-hidden="false">
          <img src="/hero.jpeg" alt="Temitope Olaniyan" loading="eager" />
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
        .hero-grid {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: clamp(2rem, 6vw, 5rem);
        }
        .hero-text {
          flex: 1 1 480px;
          min-width: 0;
        }
        .hero-cta-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .hero-download-cta {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.625rem;
          min-height: 2.75rem;
          padding: 0.65rem 0.95rem;
          border: 1px solid color-mix(in srgb, var(--color-accent) 34%, var(--color-border));
          border-radius: 8px;
          background: color-mix(in srgb, var(--color-bg-1) 48%, transparent);
          color: var(--color-text-primary);
          font-family: var(--font-sans);
          font-size: 0.9375rem;
          line-height: 1;
          font-weight: 600;
          letter-spacing: 0;
          text-decoration: none;
          transition:
            transform 0.22s ease,
            border-color 0.22s ease,
            background 0.22s ease,
            color 0.22s ease;
        }
        .hero-download-cta::after {
          content: "";
          position: absolute;
          left: 0.95rem;
          right: 0.95rem;
          bottom: -1px;
          height: 1px;
          background: var(--color-accent);
          opacity: 0.65;
          transform: scaleX(0.32);
          transform-origin: left;
          transition: transform 0.22s ease, opacity 0.22s ease;
        }
        .hero-download-cta:hover {
          transform: translateY(-1px);
          border-color: var(--color-accent);
          background: color-mix(in srgb, var(--color-accent) 10%, var(--color-bg-1));
        }
        .hero-download-cta:hover::after {
          opacity: 1;
          transform: scaleX(1);
        }
        .hero-download-cta:active {
          transform: translateY(0);
        }
        .hero-download-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 1rem;
          height: 1rem;
          color: var(--color-accent);
        }
        .hero-image {
          flex: 0 0 auto;
          width: clamp(220px, 30vw, 380px);
          position: relative;
        }
        .hero-image::before {
          content: "";
          position: absolute;
          inset: -6%;
          border-radius: 50%;
          background: radial-gradient(
            circle at 50% 50%,
            color-mix(in srgb, var(--color-accent) 18%, transparent) 0%,
            transparent 70%
          );
          z-index: -1;
        }
        .hero-image img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 50%;
          box-shadow:
            0 0 0 1px color-mix(in srgb, var(--color-accent) 28%, transparent),
            0 24px 70px color-mix(in srgb, var(--color-accent) 16%, transparent);
        }
        @media (max-width: 820px) {
          .hero-grid {
            flex-direction: column-reverse;
            align-items: flex-start;
          }
          .hero-image {
            width: clamp(180px, 48vw, 260px);
            align-self: center;
          }
        }

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
