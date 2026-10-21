import { useState } from "react";

const empty = { name: "", email: "", message: "" };

export default function Contact({ email }) {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState({ type: "", text: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus({ type: "", text: "" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setStatus({ type: "success", text: data.message });
      setForm(empty);
    } catch (err) {
      setStatus({ type: "error", text: err.message || "Something went wrong." });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact</h2>
      <p>
        Have a question or want to work together? Send me a message or email me at{" "}
        <a href={`mailto:${email}`}>{email}</a>.
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Your email" value={form.email} onChange={handleChange} required />
        <textarea name="message" rows="5" placeholder="Your message" value={form.message} onChange={handleChange} required />
        <button className="btn" type="submit" disabled={sending}>
          {sending ? "Sending..." : "Send message"}
        </button>
        {status.text && <p className={`form-status ${status.type}`}>{status.text}</p>}
      </form>
    </section>
  );
}
