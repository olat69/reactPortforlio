import { Link } from "react-router-dom";
import { Calendar, Clock, Tag } from "lucide-react";
import { blogPosts } from "../content";

const Blog = () => {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">Blog & Articles</h1>
          <p className="text-[var(--text-muted)] mt-2">
            Insights, tutorials, and thoughts on software development and
            design.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article key={post.id} className="card overflow-hidden">
              {post.hero && (
                <div className="h-40 bg-gray-100 overflow-hidden">
                  <img
                    src={post.hero}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="p-4">
                <div className="flex items-center justify-between text-sm text-[var(--text-muted)] mb-2">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {new Date(post.date).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-2">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="hover:text-[var(--accent)]"
                  >
                    {post.title}
                  </Link>
                </h3>

                <p className="text-sm text-[var(--text-muted)] mb-3 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {post.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 border rounded text-[var(--text-muted)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-[var(--accent)] font-medium"
                  >
                    Read →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
