import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profilePic from "../../assets/me-2.jpg";
import { ABOUT_TEXT } from "../../content";

gsap.registerPlugin(ScrollTrigger);

const ABOUT_PARAGRAPHS = [
  ABOUT_TEXT,
  "I’ve used AI to help people find answers in documents and code, tailor learning material to their needs, and turn raw information into reports they can act on. I’ve also built real-time voice features and used image generation in creative workflows.",
  "I design for the fact that models can be slow or wrong, connecting them to relevant sources, use fixed rules when results need to be consistent, and make outputs easy to verify. After launch, I monitor errors, response times, and costs so I can see where a feature needs improvements.",
  "A brief can start with a sentence as simple as ‘this takes too long.’, 'This needs to be effective and dependable'. I work with teams and as a solo engineer to turn that into measurable goals, decide what to ship first, and make the trade-offs around time and cost optimization clear. After deployment, I look at outputs and feedbacks to help decide what’s worth building next.",
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
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
          {/* Left — photo */}
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
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.03)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
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
                transform: "translate(-10px, 10px)",
                zIndex: -1,
                opacity: 0.35,
              }}
            />
          </div>

          {/* Right — text */}
          <div>
            <h2
              className="type-section"
              data-about-anim
              style={{ marginBottom: "2rem" }}
            >
              How I build with AI
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
