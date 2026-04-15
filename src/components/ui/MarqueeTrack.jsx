export default function MarqueeTrack({ items, reverse = false, speed = 40 }) {
  /* Duplicate items so the loop is seamless */
  const doubled = [...items, ...items];

  return (
    <div
      style={{
        overflow: "hidden",
        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: `marquee${reverse ? "Rev" : ""} ${speed}s linear infinite`,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
        onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="type-mono"
            style={{
              padding: "0 2.5rem",
              whiteSpace: "nowrap",
              color: "var(--color-text-muted)",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              fontSize: "0.8125rem",
              transition: "color 0.18s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-text-primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-muted)")}
          >
            {item}
            <span
              aria-hidden="true"
              style={{
                display: "inline-block",
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                background: "var(--color-border)",
                marginLeft: "2.5rem",
                verticalAlign: "middle",
              }}
            />
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee    { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes marqueeRev { from { transform: translateX(-50%); } to { transform: translateX(0); } }
      `}</style>
    </div>
  );
}
