export default function TerminalBox({ label = "currently building", value }) {
  return (
    <div
      style={{
        background: "var(--color-bg-2)",
        border: "1px solid var(--color-border)",
        borderRadius: "6px",
        padding: "1rem 1.25rem",
        fontFamily: "var(--font-mono)",
        fontSize: "0.8125rem",
        maxWidth: "340px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          marginBottom: "0.625rem",
        }}
      >
        {/* Terminal dots */}
        {[
          "color-mix(in srgb, var(--color-text-muted) 35%, var(--color-bg-2))",
          "color-mix(in srgb, var(--color-text-muted) 55%, var(--color-bg-2))",
          "var(--color-accent)",
        ].map((c) => (
          <span
            key={c}
            style={{
              width: "9px",
              height: "9px",
              borderRadius: "50%",
              background: c,
              display: "block",
            }}
          />
        ))}
      </div>
      <p style={{ color: "var(--color-text-muted)", margin: 0 }}>
        <span style={{ color: "var(--color-accent)" }}>→</span>{" "}
        <span style={{ color: "var(--color-text-muted)", opacity: 0.6 }}>
          {label}
        </span>
      </p>
      <p style={{ color: "var(--color-text-primary)", margin: "0.25rem 0 0" }}>
        {value}
        <span
          style={{
            display: "inline-block",
            width: "1px",
            height: "0.875em",
            background: "var(--color-accent)",
            marginLeft: "2px",
            verticalAlign: "middle",
            animation: "blink 1s step-end infinite",
          }}
        />
      </p>
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
