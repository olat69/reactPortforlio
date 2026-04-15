import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Work from "../components/sections/Work";
import Stack from "../components/sections/Stack";
import Timeline from "../components/sections/Timeline";
import Certifications from "../components/sections/Certifications";
import Contact from "../components/sections/Contact";

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    // Wait one frame for sections to render, then scroll
    const id = setTimeout(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    }, 80);
    return () => clearTimeout(id);
  }, [hash]);

  return (
    <>
      <Hero />
    <About />
    <Work />
    <Stack />
    <Timeline />
    <Certifications />
    <Contact />
  </>
  );
};

export default Home;
