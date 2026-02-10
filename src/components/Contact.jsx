import { CONTACT } from "../constants";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Contact from ${form.name || "Website"}`
    );
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in touch</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="card p-4 flex items-center gap-4">
            <div className="p-3 rounded bg-[var(--surface)] border border-[var(--border)]">
              <Mail className="w-5 h-5 text-[var(--accent)]" />
            </div>
            <div>
              <div className="font-semibold">Email</div>
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-sm text-[var(--text-muted)]"
              >
                {CONTACT.email}
              </a>
            </div>
          </div>

          <div className="card p-4 flex items-center gap-4">
            <div className="p-3 rounded bg-[var(--surface)] border border-[var(--border)]">
              <Phone className="w-5 h-5 text-[var(--accent)]" />
            </div>
            <div>
              <div className="font-semibold">Phone</div>
              <a
                href={`tel:${CONTACT.phoneNo}`}
                className="text-sm text-[var(--text-muted)]"
              >
                {CONTACT.phoneNo}
              </a>
            </div>
          </div>

          <div className="card p-4 flex items-center gap-4">
            <div className="p-3 rounded bg-[var(--surface)] border border-[var(--border)]">
              <MapPin className="w-5 h-5 text-[var(--accent)]" />
            </div>
            <div>
              <div className="font-semibold">Location</div>
              <div className="text-sm text-[var(--text-muted)]">
                {CONTACT.address}
              </div>
            </div>
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="space-y-4 card p-6">
            <div>
              <label className="block text-sm font-medium mb-1">
                Your name
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-[var(--border)] rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-[var(--border)] rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="w-full border border-[var(--border)] rounded px-3 py-2"
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="btn-accent inline-flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send message
              </button>

              {sent && (
                <div className="text-sm text-[var(--text-muted)]">
                  Opening your email client…
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
