"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      justifyContent: "center", flexDirection: "column", textAlign: "center",
      padding: "0 2rem", paddingTop: "64px",
      background: "radial-gradient(ellipse at top, rgba(124,58,237,0.15) 0%, transparent 60%)"
    }}>
      <div style={{
        display: "inline-block", background: "rgba(124,58,237,0.1)",
        border: "1px solid rgba(124,58,237,0.3)", borderRadius: "999px",
        padding: "0.3rem 1rem", marginBottom: "1.5rem",
        fontSize: "0.8rem", color: "#a78bfa", letterSpacing: "0.1em"
      }}>
        FULLSTACK DEVELOPER
      </div>

      <h1 style={{
        fontSize: "clamp(2.5rem, 7vw, 5rem)", fontWeight: 800,
        lineHeight: 1.1, marginBottom: "1.5rem", letterSpacing: "-2px"
      }}>
        Building digital<br />
        <span style={{
          background: "linear-gradient(135deg, #7c3aed, #a78bfa, #06b6d4)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
        }}>experiences</span> that matter
      </h1>

      <p style={{
        fontSize: "1.15rem", color: "#94a3b8", maxWidth: "520px",
        lineHeight: 1.7, marginBottom: "2.5rem"
      }}>
        I design and build full-stack web applications — from pixel-perfect interfaces to scalable backend systems.
      </p>

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
        <a href="#projects" style={{
          background: "#7c3aed", color: "#fff", padding: "0.8rem 2rem",
          borderRadius: "8px", textDecoration: "none", fontWeight: 600,
          fontSize: "0.95rem", transition: "opacity 0.2s"
        }}>View Projects</a>
        <a href="#contact" style={{
          background: "transparent", color: "#e2e8f0",
          border: "1px solid rgba(255,255,255,0.15)",
          padding: "0.8rem 2rem", borderRadius: "8px",
          textDecoration: "none", fontWeight: 500, fontSize: "0.95rem"
        }}>Get in Touch</a>
      </div>

      <div style={{
        marginTop: "5rem", display: "flex", gap: "3rem",
        flexWrap: "wrap", justifyContent: "center"
      }}>
        {[["3+", "Years Experience"], ["20+", "Projects Built"], ["100%", "Passion"]].map(([num, label]) => (
          <div key={label} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2rem", fontWeight: 800, color: "#7c3aed" }}>{num}</div>
            <div style={{ fontSize: "0.85rem", color: "#64748b" }}>{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}