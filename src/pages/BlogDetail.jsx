import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { blogPosts } from "../content";

const BlogDetail = () => {
  const { slug } = useParams();
  const blogPost = blogPosts.find((post) => post.slug === slug);

  if (!blogPost) {
    return (
      <section className="py-20 text-center">
        <h1 className="text-3xl font-bold">Post not found</h1>
        <Link to="/blog" className="mt-4 inline-block text-[var(--accent)]">
          Back to blog
        </Link>
      </section>
    );
  }

  return (
    <section className="py-12 max-w-3xl mx-auto">
      <Link
        to="/blog"
        className="text-sm text-[var(--text-muted)] mb-4 inline-block"
      >
        ← Back to blog
      </Link>

      {blogPost.hero && (
        <div className="h-56 mb-6 overflow-hidden rounded-lg">
          <img
            src={blogPost.hero}
            alt={blogPost.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <h1 className="text-2xl md:text-3xl font-bold mb-2">{blogPost.title}</h1>
      <div className="flex items-center gap-4 text-sm text-[var(--text-muted)] mb-6">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          {new Date(blogPost.date).toLocaleDateString()}
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          {blogPost.readTime}
        </div>
      </div>

      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: blogPost.content }}
      />

      <div className="mt-12">
        <h3 className="text-lg font-semibold mb-3">Tags</h3>
        <div className="flex gap-2 flex-wrap">
          {blogPost.tags.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 border rounded text-[var(--text-muted)]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
