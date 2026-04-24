"use client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 50,
        background: "rgba(255, 250, 242, 0.88)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid var(--border)",
        padding: "0 2rem",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Link
        href="/"
        style={{
          fontSize: "1.4rem",
          fontWeight: 700,
          color: "var(--accent)",
          textDecoration: "none",
          letterSpacing: "-0.5px",
        }}
      >
        deknek<span style={{ color: "var(--text)" }}>3d</span>
      </Link>

      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        {["Skills", "Projects", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              color: "var(--text-muted)",
              textDecoration: "none",
              fontSize: "0.9rem",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            {item}
          </a>
        ))}

        {session ? (
          <>
            <Link
              href="/dashboard"
              style={{
                color: "var(--text-muted)",
                textDecoration: "none",
                fontSize: "0.9rem",
              }}
            >
              Dashboard
            </Link>
            <button
              onClick={() => signOut()}
              style={{
                background: "var(--accent-soft)",
                border: "1px solid rgba(230, 118, 79, 0.3)",
                color: "var(--accent-strong)",
                padding: "0.5rem 1rem",
                borderRadius: "999px",
                cursor: "pointer",
                fontSize: "0.9rem",
              }}
            >
              Sign out
            </button>
          </>
        ) : (
          <Link
            href="/login"
            style={{
              background: "var(--accent)",
              color: "#fff",
              padding: "0.55rem 1.2rem",
              borderRadius: "999px",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: 600,
              boxShadow: "0 10px 24px rgba(230, 118, 79, 0.22)",
            }}
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
