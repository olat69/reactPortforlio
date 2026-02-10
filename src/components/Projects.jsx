import { projects } from "../content";
import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const Projects = () => {
  const handleClick = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Featured Projects</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            project={project}
            index={i}
            onOpenUrl={handleClick}
          />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index, onOpenUrl }) => {
  const [open, setOpen] = useState(false);
  const [overflowing, setOverflowing] = useState(false);
  const descRef = useRef(null);

  useEffect(() => {
    const el = descRef.current;
    if (!el) return;
    // check if element overflows (content taller than container)
    const isOverflow = el.scrollHeight > el.clientHeight + 1;
    setOverflowing(isOverflow);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: index * 0.04 }}
        className="card overflow-hidden"
      >
        <div className="h-44 bg-gray-100 overflow-hidden">
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
          <div className="mb-3 text-sm text-[var(--text-muted)]">
            <p ref={descRef} className="line-clamp-12">
              {project.description}
            </p>

            {/* show read more when content overflows */}
            {overflowing && (
              <button
                onClick={() => setOpen(true)}
                className="mt-2 text-sm text-[var(--accent)] font-medium"
                aria-expanded={open}
              >
                ...read more
              </button>
            )}
          </div>

          <div className="flex items-center gap-3">
            {project.url && (
              <button
                onClick={() => onOpenUrl(project.url)}
                className="btn-accent inline-flex items-center gap-2 text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                Live
              </button>
            )}
            {project.git && (
              <button
                onClick={() => onOpenUrl(project.git)}
                className="px-3 py-1 border rounded text-sm"
              >
                Code
              </button>
            )}
          </div>
        </div>
      </motion.article>

      {/* modal overlay for full description */}
      {open && (
        <div className="modal-backdrop" onClick={() => setOpen(false)}>
          <div
            className="modal-content relative"
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="modal-close px-2 py-1 text-sm"
              aria-label="Close"
            >
              ✕
            </button>

            <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
            <div className="prose max-w-none text-[var(--text-muted)]">
              {project.description}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
