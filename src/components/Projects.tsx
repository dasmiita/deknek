"use client";
import { useEffect, useState } from "react";

type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/projects")
      .then((r) => r.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const cardStyle = {
    background: "linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,246,232,0.94) 100%)",
    border: "1px solid var(--border)",
    borderRadius: "24px",
    padding: "1.5rem",
    display: "flex",
    flexDirection: "column" as const,
    gap: "1rem",
    boxShadow: "var(--shadow)",
  };

  return (
    <section id="projects" style={{ padding: "6rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "2.5rem", fontWeight: 800, letterSpacing: "-1px" }}>
          Featured <span style={{ color: "var(--accent)" }}>Projects</span>
        </h2>
        <p style={{ color: "var(--text-muted)", marginTop: "0.5rem" }}>
          Things I&apos;ve built end to end
        </p>
      </div>

      {loading ? (
        <p style={{ textAlign: "center", color: "var(--text-muted)" }}>Loading projects...</p>
      ) : projects.length === 0 ? (
        <div style={{ textAlign: "center", padding: "4rem", color: "var(--text-muted)" }}>
          <p style={{ fontSize: "1.1rem" }}>No projects yet.</p>
          <p style={{ fontSize: "0.9rem", marginTop: "0.5rem" }}>
            Login to add your first project from the dashboard.
          </p>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {projects.map((project) => (
            <div key={project.id} style={cardStyle}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700 }}>{project.title}</h3>
                {project.featured && (
                  <span
                    style={{
                      background: "var(--accent-soft)",
                      color: "var(--accent-strong)",
                      fontSize: "0.7rem",
                      padding: "0.28rem 0.75rem",
                      borderRadius: "999px",
                      border: "1px solid rgba(230, 118, 79, 0.2)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Featured
                  </span>
                )}
              </div>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                {project.description}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      background: "rgba(140, 201, 181, 0.18)",
                      color: "#467f6b",
                      fontSize: "0.75rem",
                      padding: "0.28rem 0.7rem",
                      borderRadius: "999px",
                      border: "1px solid rgba(140, 201, 181, 0.28)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div style={{ display: "flex", gap: "1rem", marginTop: "auto", alignItems: "center" }}>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: "var(--accent-strong)",
                      fontSize: "0.85rem",
                      textDecoration: "none",
                      border: "1px solid rgba(230, 118, 79, 0.25)",
                      padding: "0.45rem 0.9rem",
                      borderRadius: "999px",
                      background: "#fff",
                    }}
                  >
                    Live -&gt;
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: "var(--text-muted)",
                      fontSize: "0.85rem",
                      textDecoration: "none",
                    }}
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
