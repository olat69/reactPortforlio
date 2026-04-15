import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../../content/projects";
import { FeaturedCard, CompactCard } from "../ui/ProjectCard";

gsap.registerPlugin(ScrollTrigger);

export default function Work() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      /* Featured card */
      gsap.from("[data-featured-card]", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-featured-card]",
          start: "top 85%",
          once: true,
        },
      });

      /* Compact cards with stagger */
      gsap.from("[data-compact-card]", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-compact-cards]",
          start: "top 85%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const [featured, ...rest] = projects;

  return (
    <section
      id="work"
      ref={sectionRef}
      style={{ paddingBlock: "var(--spacing-section)" }}
    >
      <div className="content-wrap">
        <p
          className="type-label"
          style={{ marginBottom: "1rem", color: "var(--color-accent)" }}
        >
          Selected Work
        </p>
        <h2 className="type-section" style={{ marginBottom: "4rem" }}>
          Things I&apos;ve built.
        </h2>

        {/* Featured project */}
        <div data-featured-card style={{ marginBottom: "3rem" }}>
          <FeaturedCard project={featured} />
        </div>

        {/* 2-column grid */}
        <div
          data-compact-cards
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {rest.map((project) => (
            <div key={project.title} data-compact-card>
              <CompactCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
