import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

const GlassyCard = ({ children, className = "", tilt = true, ...props }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!tilt || !ref.current) return;
    const node = ref.current;
    VanillaTilt.init(node, {
      max: 12,
      speed: 400,
      glare: true,
      "max-glare": 0.15,
      scale: 1.02,
    });
    return () => {
      if (node.vanillaTilt) node.vanillaTilt.destroy();
    };
  }, [tilt]);

  return (
    <div
      ref={ref}
      className={`glass-card neon-glow relative overflow-hidden rounded-2xl transition-transform duration-400 hover:scale-[1.02] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassyCard;
