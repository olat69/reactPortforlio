import aboutImg from "../assets/me-2.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "motion/react";

const About = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>

      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <img
            src={aboutImg}
            alt="me"
            className="w-full rounded-lg object-cover shadow-soft"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[var(--text-muted)] leading-relaxed">
            {ABOUT_TEXT}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
