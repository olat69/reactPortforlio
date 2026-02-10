import { useEffect, useState } from "react";
import Lottie from "lottie-react";

const LottieAnimation = ({ src, loop = true, className = "", style = {} }) => {
  const [animationData, setAnimationData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let mounted = true;
    if (!src) return;
    fetch(src)
      .then((res) => res.json())
      .then((data) => {
        if (mounted) setAnimationData(data);
      })
      .catch(() => setError(true));
    return () => {
      mounted = false;
    };
  }, [src]);

  if (error) return null;
  if (!animationData)
    return (
      <div
        className={`w-24 h-24 ${className} bg-[var(--bg-surface)] rounded-xl`}
      />
    );

  return (
    <Lottie
      animationData={animationData}
      loop={loop}
      className={className}
      style={style}
    />
  );
};

export default LottieAnimation;
