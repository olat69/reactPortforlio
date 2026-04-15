import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experiences } from "../../content/experiences";

gsap.registerPlugin(ScrollTrigger);

export default function Timeline() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-timeline-entry]", {
        x: -24,
        opacity: 0,
        duration: 0.6,
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
      id="timeline"
      ref={sectionRef}
      style={{ paddingBlock: "var(--spacing-section)" }}
    >
      <div className="content-wrap">
        <p
          className="type-label"
          style={{ marginBottom: "1rem", color: "var(--color-accent)" }}
        >
          Experience
        </p>
        <h2 className="type-section" style={{ marginBottom: "4rem" }}>
          Where I&apos;ve worked.
        </h2>

        {/* Timeline spine */}
        <div
          style={{
            borderLeft: "1px solid var(--color-border)",
            paddingLeft: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "3.5rem",
            marginLeft: "0.5rem",
          }}
        >
          {experiences.map((exp, i) => (
            <div key={i} data-timeline-entry style={{ position: "relative" }}>
              {/* Node dot */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "calc(-2rem - 4.5px)",
                  top: "6px",
                  width: "9px",
                  height: "9px",
                  borderRadius: "50%",
                  background:
                    i === 0 ? "var(--color-accent)" : "var(--color-border)",
                  border: i === 0 ? "none" : "1.5px solid var(--color-border)",
                  transition: "background 0.2s ease",
                }}
              />

              {/* Date range */}
              <p
                className="type-label"
                style={{
                  marginBottom: "0.5rem",
                  color: "var(--color-text-muted)",
                }}
              >
                {exp.year}
              </p>

              {/* Role + Company */}
              <h3
                className="type-card"
                style={{ marginBottom: "0.25rem", fontSize: "1.0625rem" }}
              >
                {exp.role}
              </h3>
              <p
                className="type-label"
                style={{
                  color: "var(--color-accent)",
                  marginBottom: "1rem",
                  textTransform: "none",
                  letterSpacing: "0",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                }}
              >
                {exp.company}
              </p>

              {/* Description — first 2 lines only */}
              <p
                className="type-body"
                style={{
                  fontSize: "0.9375rem",
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {exp.description}
              </p>

              {/* Tech tags */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.375rem",
                  marginTop: "1rem",
                }}
              >
                {exp.technologies.map((t) => (
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
