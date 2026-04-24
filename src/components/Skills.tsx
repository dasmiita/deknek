export default function Skills() {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "REST APIs", "NextAuth", "Prisma ORM"] },
    { category: "Database", items: ["PostgreSQL", "Supabase", "MongoDB", "Redis"] },
    { category: "DevOps", items: ["Git", "GitHub", "Vercel", "Docker"] },
  ];

  return (
    <section id="skills" style={{ padding: "6rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "2.5rem", fontWeight: 800, letterSpacing: "-1px" }}>
          Tech <span style={{ color: "var(--accent)" }}>Stack</span>
        </h2>
        <p style={{ color: "var(--text-muted)", marginTop: "0.5rem" }}>
          Tools and technologies I work with
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
        {skills.map(({ category, items }) => (
          <div
            key={category}
            style={{
              background: "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,247,235,0.95) 100%)",
              border: "1px solid var(--border)",
              borderRadius: "24px",
              padding: "1.5rem",
              transition: "border-color 0.2s",
              boxShadow: "var(--shadow)",
            }}
          >
            <h3 style={{ color: "var(--accent-strong)", fontSize: "0.8rem", letterSpacing: "0.1em", marginBottom: "1rem" }}>
              {category.toUpperCase()}
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {items.map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "var(--text)",
                    fontSize: "0.95rem",
                  }}
                >
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "var(--mint)",
                      display: "inline-block",
                    }}
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
