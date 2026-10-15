"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = new FormData(event.currentTarget);
    const payload = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      subject: String(form.get("subject") || ""),
      message: String(form.get("message") || "")
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Please try again.");
      }

      setStatus({ type: "success", message: "Your message has been sent successfully." });
      event.currentTarget.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Something went wrong."
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="field-group">
          <label htmlFor="contact-name">Name</label>
          <input id="contact-name" name="name" required minLength={2} />
        </div>

        <div className="field-group">
          <label htmlFor="contact-email">Email</label>
          <input id="contact-email" name="email" type="email" required />
        </div>

        <div className="field-group">
          <label htmlFor="contact-subject">Subject</label>
          <input id="contact-subject" name="subject" required minLength={3} />
        </div>

        <div className="field-group">
          <label htmlFor="contact-message">Message</label>
          <textarea id="contact-message" name="message" required minLength={10} />
        </div>

        {status && <div className={status.type === "success" ? "form-success" : "form-error"}>{status.message}</div>}

        <button type="submit" className="primary-btn" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}
