import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { profile } from "../data/profile";

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
);

export const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // No backend needed: opens the visitor's email app with the message filled in.
  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  const field =
    "w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-hidden focus:ring-2 focus:ring-primary";

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Send me a message.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8 text-left">
            <h3 className="text-2xl font-semibold">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10"><Mail className="h-6 w-6 text-primary" /></div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href={`mailto:${profile.email}`} className="text-foreground/70 hover:text-primary transition-colors">{profile.email}</a>
                </div>
              </div>
              {profile.phone && (
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10"><Phone className="h-6 w-6 text-primary" /></div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a href={`tel:${profile.phone}`} className="text-foreground/70 hover:text-primary transition-colors">{profile.phone}</a>
                  </div>
                </div>
              )}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10"><MapPin className="h-6 w-6 text-primary" /></div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-foreground/70">{profile.location}</p>
                </div>
              </div>
            </div>
            {profile.socials.linkedin && (
              <div className="pt-4">
                <h4 className="font-medium mb-3">Connect With Me</h4>
                <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="inline-block text-foreground/70 hover:text-primary transition-colors">
                  <LinkedinIcon className="h-6 w-6" />
                </a>
              </div>
            )}
          </div>

          <form onSubmit={onSubmit} className="bg-card p-8 rounded-lg shadow-xs space-y-6 text-left">
            <h3 className="text-2xl font-semibold">Send a Message</h3>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
              <input id="name" name="name" required value={form.name} onChange={onChange} placeholder="John Doe" className={field} />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
              <input id="email" name="email" type="email" required value={form.email} onChange={onChange} placeholder="john@example.com" className={field} />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
              <textarea id="message" name="message" rows={4} required value={form.message} onChange={onChange} placeholder="Hello, I'd like to talk about..." className={`${field} resize-none`} />
            </div>
            <button type="submit" className="cosmic-button w-full flex items-center justify-center gap-2">
              Send Message <Send size={16} />
            </button>
            {sent && <p role="status" className="text-sm text-primary text-center">Opening your email app…</p>}
          </form>
        </div>
      </div>
    </section>
  );
};
