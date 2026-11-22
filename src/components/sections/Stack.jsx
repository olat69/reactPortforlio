import MarqueeTrack from "../ui/MarqueeTrack";

const STACK_ROW_1 = [
  "OpenAI", "Anthropic", "LangChain", "RAG", "Embeddings",
  "Realtime Voice", "Prompt Engineering", "Pinecone", "Hugging Face", "FFmpeg",
];

const STACK_ROW_2 = [
  "Python", "FastAPI", "Node.js", "NestJS", "Express",
  "TypeScript", "JavaScript", "React", "React Native", "Expo",
];

const STACK_ROW_3 = [
  "PostgreSQL", "MongoDB", "Redis", "AWS", "S3", "SES", "SQS",
  "MediaConvert", "Docker", "GitHub Actions", "Vercel", "Sentry", "Prometheus",
];

const STACK_ROW_4 = [
  "Stripe", "Paystack", "RevenueCat", "Socket.IO", "WebSockets", "Twilio",
  "SendGrid", "Brevo", "Pytest", "Jest", "Vitest", "Supertest",
  "Ruff", "ESLint", "Swagger", "OpenAPI",
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
          Technical Toolkit
        </p>
        <h2 className="type-section">Model integration, application development, and deployment.</h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <MarqueeTrack items={STACK_ROW_1} speed={40} />
        <MarqueeTrack items={STACK_ROW_2} speed={50} reverse />
        <MarqueeTrack items={STACK_ROW_3} speed={46} />
        <MarqueeTrack items={STACK_ROW_4} speed={54} reverse />
      </div>
    </section>
  );
}
