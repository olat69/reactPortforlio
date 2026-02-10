import { experiences } from "../content";
import { motion } from "motion/react";
import { Calendar, Building } from "lucide-react";

const Experience = () => {
  return (
    <section className="py-12">
      <motion.h2 className="text-3xl md:text-4xl font-bold mb-8">
        Professional Experience
      </motion.h2>

      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <motion.article
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: idx * 0.06 }}
            className="card p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold">{exp.role}</h3>
                <p className="text-sm text-[var(--text-muted)]">
                  {exp.company}
                </p>
              </div>

              <div className="text-sm text-[var(--text-muted)]">{exp.year}</div>
            </div>

            <p className="mt-4 text-[var(--text-muted)]">{exp.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {exp.technologies.map((t, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 rounded bg-[transparent] border border-[var(--border)] text-[var(--text-muted)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
