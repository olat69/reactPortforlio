import { technologies } from "../content";
import { motion } from "motion/react";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl font-bold text-[var(--text-primary)]"
      >
        Technologies & Tools
      </motion.h2>
      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 items-center justify-center max-w-6xl mx-auto px-4"
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            variants={iconVariants(2 + (index % 3) * 0.5)}
            initial="initial"
            animate="animate"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 25px var(--glow-primary)",
              transition: { duration: 0.2 },
            }}
            className="group bg-[var(--bg-card)] backdrop-blur-sm border border-[var(--border-primary)] rounded-2xl p-4 col-span-1 flex flex-col items-center justify-center hover:border-[var(--text-accent)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--glow-primary)]"
          >
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-8 h-8 sm:w-10 sm:h-10 mb-2 group-hover:scale-110 transition-transform duration-200"
            />
            <span className="text-xs sm:text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-accent)] font-medium text-center transition-colors duration-200">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
