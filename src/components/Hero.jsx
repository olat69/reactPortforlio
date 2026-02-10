import { HERO_CONTENT } from "../constants/index";
import profilepic from "../assets/profilePicture.jpeg";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <header className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center lg:flex-row lg:items-center gap-12">
          {/* Image: appears above text on mobile, moves to right on large screens */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end order-first lg:order-last">
            <div className="w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border border-[var(--border)]">
              <motion.img
                src={profilepic}
                alt="profile"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text column */}
          <div className="w-full lg:w-3/5 min-w-0 text-center lg:text-left">
            <motion.h1
              initial={{ y: 6, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
            >
              Hi, I’m Temitope
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="mt-6 max-w-2xl mx-auto lg:mx-0 text-lg text-[var(--text-muted)]"
            >
              {HERO_CONTENT}
            </motion.p>

            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
              <a href="/projects" className="btn-accent">
                View Projects
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-4 py-2 border rounded-md border-[var(--border)]"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
