import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import CustomCursor from "../components/cursor/CustomCursor";
import IntroSplash, { shouldShowIntro } from "../components/ui/IntroSplash";

const RootLayout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [showIntro, setShowIntro] = useState(() => {
    try {
      return shouldShowIntro();
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    if (showIntro && isHome) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [showIntro, isHome]);

  if (showIntro && isHome) {
    return <IntroSplash onComplete={() => setShowIntro(false)} />;
  }

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
