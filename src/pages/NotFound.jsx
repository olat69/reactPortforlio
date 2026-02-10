import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-[var(--text-accent)] mb-4">
            404
          </h1>
          <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">
            Page Not Found
          </h2>
          <p className="text-[var(--text-secondary)] mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--text-accent)] text-white rounded-lg hover:bg-[var(--text-accent)]/80 transition-colors duration-200 font-medium"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>

          <div>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--bg-card)] border border-[var(--border-primary)] text-[var(--text-primary)] rounded-lg hover:bg-[var(--bg-surface)] transition-colors duration-200 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--border-primary)]">
          <p className="text-sm text-[var(--text-secondary)]">
            Looking for something specific? Check out these pages:
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Link to="/" className="text-[var(--text-accent)] hover:underline">
              Home
            </Link>
            <Link
              to="/about"
              className="text-[var(--text-accent)] hover:underline"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="text-[var(--text-accent)] hover:underline"
            >
              Projects
            </Link>
            <Link
              to="/experience"
              className="text-[var(--text-accent)] hover:underline"
            >
              Experience
            </Link>
            <Link
              to="/blog"
              className="text-[var(--text-accent)] hover:underline"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-[var(--text-accent)] hover:underline"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
