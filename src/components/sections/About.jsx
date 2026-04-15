import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profilePic from "../../assets/me-2.jpg";
import TerminalBox from "../ui/TerminalBox";

gsap.registerPlugin(ScrollTrigger);

const ABOUT_PARAGRAPHS = [
  "Self-taught over 5+ years of shipping real products — from barter marketplaces to AI documentation platforms. I'm a problem-solver who breaks complexity down into clean, maintainable code.",
  "Equally at home leading a sprint or heads-down in solo development. I care about the craft: clear APIs, documented decisions, and UIs that don't fight the user.",
  "My toolkit spans React, Next.js, Node.js, Python/FastAPI, React Native, and the infrastructure layers that hold it all together — Docker, PostgreSQL, Redis, AWS.",
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-about-anim]", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{ paddingBlock: "var(--spacing-section)" }}
    >
      <div className="content-wrap">
        {/* Section label */}
        <p
          className="type-label"
          data-about-anim
          style={{ marginBottom: "1rem", color: "var(--color-accent)" }}
        >
          About
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "4rem",
          }}
          className="md-grid-2"
        >
          {/* Left — text */}
          <div>
            <h2
              className="type-section"
              data-about-anim
              style={{ marginBottom: "2rem" }}
            >
              Engineer by trade,<br />builder by instinct.
            </h2>

            {ABOUT_PARAGRAPHS.map((p, i) => (
              <p
                key={i}
                className="type-body"
                data-about-anim
                style={{ marginBottom: "1.25rem" }}
              >
                {p}
              </p>
            ))}

            <div data-about-anim style={{ marginTop: "2rem" }}>
              <TerminalBox
                label="currently building"
                value="TradeByBartr v2 — barter marketplace"
              />
            </div>
          </div>

          {/* Right — photo */}
          <div
            data-about-anim
            style={{
              position: "relative",
              alignSelf: "start",
            }}
            data-cursor="hover"
          >
            <div
              style={{
                overflow: "hidden",
                borderRadius: "4px",
                border: "1px solid var(--color-border)",
              }}
            >
              <img
                src={profilePic}
                alt="Temitope Olaniyan"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  transition: "transform 0.5s ease-out",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            </div>
            {/* Offset accent border */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                border: "1px solid var(--color-accent)",
                borderRadius: "4px",
                transform: "translate(10px, 10px)",
                zIndex: -1,
                opacity: 0.35,
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .md-grid-2 {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
