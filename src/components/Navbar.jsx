import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/experience", label: "Experience" },
    { to: "/projects", label: "Projects" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[var(--accent)]"
                      : "text-[var(--text-muted)] hover:text-[var(--accent)]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${
              theme === "light" ? "dark" : "light"
            } theme`}
            className="p-2 rounded-md bg-[transparent] border border-[var(--border)]"
          >
            {theme === "light" ? (
              <Moon className="w-4 h-4 text-[var(--text-primary)]" />
            ) : (
              <Sun className="w-4 h-4 text-[var(--text-primary)]" />
            )}
          </button>

          <a
            href="https://www.linkedin.com/in/olaniyan-temitope-8565a8268"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex text-[var(--text-muted)] hover:text-[var(--accent)]"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/olat69"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex text-[var(--text-muted)] hover:text-[var(--accent)]"
          >
            <FaGithub />
          </a>

          {/* mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen((s) => !s)}
              className="p-2 rounded-md border border-[var(--border)]"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="mt-4 md:hidden bg-[var(--surface)] border border-[var(--border)] card p-4">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-2 ${
                    isActive
                      ? "text-[var(--accent)]"
                      : "text-[var(--text-primary)]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="flex items-center gap-3 pt-3 border-t border-[var(--border)]">
              <a
                href="https://www.linkedin.com/in/olaniyan-temitope-8565a8268"
                target="_blank"
                rel="noreferrer"
                className="text-[var(--text-muted)] hover:text-[var(--accent)]"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/olat69"
                target="_blank"
                rel="noreferrer"
                className="text-[var(--text-muted)] hover:text-[var(--accent)]"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
export default Navbar;
