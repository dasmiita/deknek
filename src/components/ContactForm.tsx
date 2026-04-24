"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async () => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = {
    width: "100%",
    background: "rgba(255,255,255,0.82)",
    border: "1px solid var(--border)",
    borderRadius: "18px",
    padding: "0.9rem 1rem",
    color: "var(--text)",
    fontSize: "0.95rem",
    outline: "none",
    boxSizing: "border-box" as const,
  };

  return (
    <section id="contact" style={{ padding: "6rem 2rem", maxWidth: "600px", margin: "0 auto" }}>
      <div
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(255,245,230,0.96) 100%)",
          border: "1px solid var(--border)",
          borderRadius: "32px",
          padding: "2rem",
          boxShadow: "var(--shadow)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: 800, letterSpacing: "-1px" }}>
            Get in <span style={{ color: "var(--accent)" }}>Touch</span>
          </h2>
          <p style={{ color: "var(--text-muted)", marginTop: "0.5rem" }}>
            Have a project in mind? Let&apos;s talk.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <input
            style={inputStyle}
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          />
          <input
            style={inputStyle}
            placeholder="Your email"
            type="email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          />
          <textarea
            style={{ ...inputStyle, minHeight: "140px", resize: "vertical" }}
            placeholder="Your message"
            value={form.message}
            onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          />

          <button
            onClick={handleSubmit}
            disabled={status === "loading"}
            style={{
              background: "var(--accent)",
              color: "#fff",
              border: "none",
              padding: "0.95rem",
              borderRadius: "999px",
              fontSize: "1rem",
              fontWeight: 600,
              cursor: "pointer",
              opacity: status === "loading" ? 0.7 : 1,
              boxShadow: "0 16px 30px rgba(230, 118, 79, 0.22)",
            }}
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p style={{ color: "#3d8c69", textAlign: "center" }}>Message sent successfully!</p>
          )}
          {status === "error" && (
            <p style={{ color: "#c8564f", textAlign: "center" }}>Something went wrong. Try again.</p>
          )}
        </div>
      </div>
    </section>
  );
}
