"use client";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "0 2rem",
        paddingTop: "64px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: "12% auto auto 8%",
          width: "190px",
          height: "190px",
          background: "rgba(243, 201, 107, 0.28)",
          borderRadius: "42% 58% 60% 40% / 44% 40% 60% 56%",
          filter: "blur(4px)",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: "18% 10% auto auto",
          width: "240px",
          height: "240px",
          background: "rgba(140, 201, 181, 0.24)",
          borderRadius: "58% 42% 47% 53% / 36% 61% 39% 64%",
        }}
      />

      <div
        style={{
          position: "relative",
          display: "inline-block",
          background: "rgba(255, 241, 222, 0.92)",
          border: "1px solid var(--border-strong)",
          borderRadius: "999px",
          padding: "0.3rem 1rem",
          marginBottom: "1.5rem",
          fontSize: "0.8rem",
          color: "var(--accent-strong)",
          letterSpacing: "0.1em",
          boxShadow: "0 8px 20px rgba(145, 97, 48, 0.08)",
        }}
      >
        FULLSTACK DEVELOPER
      </div>

      <h1
        style={{
          position: "relative",
          fontSize: "clamp(2.5rem, 7vw, 5rem)",
          fontWeight: 800,
          lineHeight: 1.1,
          marginBottom: "1.5rem",
          letterSpacing: "-2px",
        }}
      >
        Building digital
        <br />
        <span
          style={{
            background: "linear-gradient(135deg, var(--accent), #f4a261, #63b7a1)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          experiences
        </span>{" "}
        that matter
      </h1>

      <p
        style={{
          position: "relative",
          fontSize: "1.15rem",
          color: "var(--text-muted)",
          maxWidth: "520px",
          lineHeight: 1.7,
          marginBottom: "2.5rem",
        }}
      >
        I design and build full-stack web applications, from thoughtful
        interfaces to reliable backend systems.
      </p>

      <div
        style={{
          position: "relative",
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <a
          href="#projects"
          style={{
            background: "var(--accent)",
            color: "#fff",
            padding: "0.9rem 2rem",
            borderRadius: "999px",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "0.95rem",
            transition: "opacity 0.2s",
            boxShadow: "0 16px 32px rgba(230, 118, 79, 0.24)",
          }}
        >
          View Projects
        </a>
        <a
          href="#contact"
          style={{
            background: "rgba(255, 255, 255, 0.7)",
            color: "var(--text)",
            border: "1px solid var(--border)",
            padding: "0.9rem 2rem",
            borderRadius: "999px",
            textDecoration: "none",
            fontWeight: 500,
            fontSize: "0.95rem",
            boxShadow: "var(--shadow)",
          }}
        >
          Get in Touch
        </a>
      </div>

      <div
        style={{
          position: "relative",
          marginTop: "5rem",
          display: "flex",
          gap: "1.5rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {[["3+", "Years Experience"], ["20+", "Projects Built"], ["100%", "Passion"]].map(
          ([num, label]) => (
            <div
              key={label}
              style={{
                textAlign: "center",
                minWidth: "150px",
                padding: "1.2rem 1.4rem",
                borderRadius: "24px",
                background: "rgba(255, 255, 255, 0.72)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow)",
              }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: 800,
                  color: "var(--accent)",
                }}
              >
                {num}
              </div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-soft)" }}>
                {label}
              </div>
            </div>
          ),
        )}
      </div>
    </section>
  );
}
