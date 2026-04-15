import { useEffect, useState } from "react";
import fallbackLogo from "../../assets/port-icon.jpg";

const INTRO_KEY = "portfolio_intro_seen_v1";
const INTRO_DURATION_MS = 3200;

export default function IntroSplash({ onComplete }) {
  const [logoSrc, setLogoSrc] = useState("/temitope_swe_logo_v3.svg");

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const timeout = window.setTimeout(
      () => {
        sessionStorage.setItem(INTRO_KEY, "true");
        onComplete?.();
      },
      prefersReduced ? 450 : INTRO_DURATION_MS,
    );

    return () => window.clearTimeout(timeout);
  }, [onComplete]);

  return (
    <div
      aria-label="Portfolio intro animation"
      role="status"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        background: "#f5f0e8",
        display: "grid",
        placeItems: "center",
        padding: "clamp(1rem, 3vw, 2rem)",
        animation: "introFadeOut 0.55s ease forwards",
        animationDelay: "2.6s",
      }}
    >
      <div
        style={{
          width: "min(1120px, 94vw)",
          border: "1px solid #cabca3",
          background: "#f5f0e8",
          padding: "clamp(0.45rem, 1vw, 0.8rem)",
          boxShadow: "0 16px 50px rgba(18, 11, 7, 0.1)",
          animation: "introScaleIn 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <img
          src={logoSrc}
          alt="Temitope.SWE intro logo"
          onError={() => setLogoSrc(fallbackLogo)}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            border: "1px solid rgba(200, 184, 154, 0.55)",
          }}
        />
      </div>

      <button
        type="button"
        onClick={() => {
          sessionStorage.setItem(INTRO_KEY, "true");
          onComplete?.();
        }}
        style={{
          position: "absolute",
          right: "clamp(0.75rem, 2vw, 1.25rem)",
          top: "clamp(0.75rem, 2vw, 1.25rem)",
          fontFamily: "var(--font-mono)",
          fontSize: "0.72rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          border: "1px solid rgba(26, 20, 16, 0.22)",
          borderRadius: "999px",
          background: "rgba(245, 240, 232, 0.85)",
          color: "#4a3b2f",
          padding: "0.35rem 0.7rem",
          cursor: "pointer",
        }}
      >
        Skip
      </button>

      <style>{`
        @keyframes introScaleIn {
          from { opacity: 0; transform: translateY(16px) scale(0.985); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes introFadeOut {
          to {
            opacity: 0;
            visibility: hidden;
          }
        }
      `}</style>
    </div>
  );
}

export function shouldShowIntro() {
  return !sessionStorage.getItem(INTRO_KEY);
}
