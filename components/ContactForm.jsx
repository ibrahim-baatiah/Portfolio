"use client";

// ─────────────────────────────────────────────────────────────
// CONTACT FORM — opens the visitor's email app with the message pre-filled (mailto).
// It needs a mail app on the visitor's device. To send straight from the site,
// swap `submit` for a service like Formspree.
// ─────────────────────────────────────────────────────────────
import { useState } from "react";

export default function ContactForm({ email }) {
  const [form, setForm] = useState({ name: "", subject: "", message: "" });
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const body = `${form.message}\n\n— ${form.name}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
  };

  const field = "w-full rounded-md border border-border bg-bg px-4 py-2.5 text-sm outline-none transition focus:border-accent";
  return (
    <form onSubmit={submit} className="card space-y-4 p-6">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium">Name</label>
        <input id="name" name="name" required value={form.name} onChange={update} className={field} />
      </div>
      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium">Subject</label>
        <input id="subject" name="subject" required value={form.subject} onChange={update} className={field} />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">Message</label>
        <textarea id="message" name="message" rows={5} required value={form.message} onChange={update} className={field} />
      </div>
      <button type="submit" className="w-full rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent transition hover:opacity-90">
        Send message
      </button>
      <p className="text-center text-xs text-muted">Opens your email app with the message ready to send.</p>
    </form>
  );
}
