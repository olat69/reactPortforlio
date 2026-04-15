import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouseRef = useRef({ x: -100, y: -100 });
  const ringPosRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef(null);

  useEffect(() => {
    /* Hide on touch devices */
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const onMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      /* Dot follows exactly */
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    /* Attach hover listeners via delegation */
    const onMouseOver = (e) => {
      if (e.target.closest("[data-cursor='hover']")) {
        ring.classList.add("ring--hover");
      }
    };
    const onMouseOut = (e) => {
      if (e.target.closest("[data-cursor='hover']")) {
        ring.classList.remove("ring--hover");
      }
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);

    const animate = () => {
      if (prefersReduced) {
        /* Snap — no lerp */
        ringPosRef.current = { ...mouseRef.current };
      } else {
        const lerp = 0.12;
        ringPosRef.current.x +=
          (mouseRef.current.x - ringPosRef.current.x) * lerp;
        ringPosRef.current.y +=
          (mouseRef.current.y - ringPosRef.current.y) * lerp;
      }
      ring.style.transform = `translate(${ringPosRef.current.x}px, ${ringPosRef.current.y}px)`;
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "var(--color-accent)",
          pointerEvents: "none",
          zIndex: 9999,
          marginLeft: "-4px",
          marginTop: "-4px",
          willChange: "transform",
        }}
      />
      {/* Lagging ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="cursor-ring"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          border: "1.5px solid var(--color-accent)",
          background: "transparent",
          pointerEvents: "none",
          zIndex: 9998,
          marginLeft: "-16px",
          marginTop: "-16px",
          willChange: "transform",
          transition:
            "width 0.3s ease, height 0.3s ease, border-radius 0.3s ease, opacity 0.2s ease",
        }}
      />
      <style>{`
        @media (pointer: coarse) {
          .cursor-ring { display: none; }
        }
        .cursor-ring.ring--hover {
          width: 48px;
          height: 28px;
          border-radius: 24px;
          margin-left: -24px;
          margin-top: -14px;
          opacity: 0.7;
        }
      `}</style>
    </>
  );
}
