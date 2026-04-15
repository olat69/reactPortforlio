import MarqueeTrack from "../ui/MarqueeTrack";

const STACK_ROW_1 = [
  "JavaScript", "TypeScript", "Python", "React", "Next.js",
  "React Native", "Node.js", "Express.js", "FastAPI",
];

const STACK_ROW_2 = [
  "MongoDB", "PostgreSQL", "Redis", "Docker", "AWS",
  "Tailwind CSS", "Git", "Vercel", "Render", "Coolify",
];

export default function Stack() {
  return (
    <section
      id="stack"
      style={{ paddingBlock: "var(--spacing-section)" }}
    >
      <div className="content-wrap" style={{ marginBottom: "3rem" }}>
        <p
          className="type-label"
          style={{ marginBottom: "1rem", color: "var(--color-accent)" }}
        >
          Stack
        </p>
        <h2 className="type-section">Tools of the trade.</h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <MarqueeTrack items={STACK_ROW_1} speed={40} />
        <MarqueeTrack items={STACK_ROW_2} speed={50} reverse />
      </div>
    </section>
  );
}
