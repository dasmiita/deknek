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
      .then(r => r.json())
      .then(data => { setProjects(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const cardStyle = {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "12px", padding: "1.5rem",
    display: "flex", flexDirection: "column" as const, gap: "1rem"
  };

  return (
    <section id="projects" style={{ padding: "6rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "2.5rem", fontWeight: 800, letterSpacing: "-1px" }}>
          Featured <span style={{ color: "#7c3aed" }}>Projects</span>
        </h2>
        <p style={{ color: "#64748b", marginTop: "0.5rem" }}>Things I've built end to end</p>
      </div>

      {loading ? (
        <p style={{ textAlign: "center", color: "#64748b" }}>Loading projects...</p>
      ) : projects.length === 0 ? (
        <div style={{ textAlign: "center", padding: "4rem", color: "#64748b" }}>
          <p style={{ fontSize: "1.1rem" }}>No projects yet.</p>
          <p style={{ fontSize: "0.9rem", marginTop: "0.5rem" }}>Login to add your first project from the dashboard.</p>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {projects.map(project => (
            <div key={project.id} style={cardStyle}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700 }}>{project.title}</h3>
                {project.featured && (
                  <span style={{
                    background: "rgba(124,58,237,0.15)", color: "#a78bfa",
                    fontSize: "0.7rem", padding: "0.2rem 0.6rem", borderRadius: "999px",
                    border: "1px solid rgba(124,58,237,0.3)"
                  }}>Featured</span>
                )}
              </div>
              <p style={{ color: "#94a3b8", fontSize: "0.9rem", lineHeight: 1.6 }}>{project.description}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {project.techStack.map(tech => (
                  <span key={tech} style={{
                    background: "rgba(6,182,212,0.1)", color: "#67e8f9",
                    fontSize: "0.75rem", padding: "0.2rem 0.6rem",
                    borderRadius: "4px", border: "1px solid rgba(6,182,212,0.2)"
                  }}>{tech}</span>
                ))}
              </div>
              <div style={{ display: "flex", gap: "1rem", marginTop: "auto" }}>
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" style={{
                    color: "#7c3aed", fontSize: "0.85rem", textDecoration: "none",
                    border: "1px solid rgba(124,58,237,0.3)", padding: "0.3rem 0.8rem",
                    borderRadius: "6px"
                  }}>Live →</a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" style={{
                    color: "#94a3b8", fontSize: "0.85rem", textDecoration: "none"
                  }}>GitHub</a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}