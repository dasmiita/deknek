"use client";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  return (
    <nav style={{
      position: "fixed", top: 0, width: "100%", zIndex: 50,
      background: "rgba(10,10,15,0.85)", backdropFilter: "blur(12px)",
      borderBottom: "1px solid rgba(124,58,237,0.2)",
      padding: "0 2rem", height: "64px",
      display: "flex", alignItems: "center", justifyContent: "space-between"
    }}>
      <Link href="/" style={{ fontSize: "1.4rem", fontWeight: 700, color: "#7c3aed", textDecoration: "none", letterSpacing: "-0.5px" }}>
        deknek<span style={{ color: "#e2e8f0" }}>3d</span>
      </Link>

      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        {["Skills", "Projects", "Contact"].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} style={{
            color: "#94a3b8", textDecoration: "none", fontSize: "0.9rem",
            transition: "color 0.2s"
          }}
            onMouseEnter={e => (e.currentTarget.style.color = "#7c3aed")}
            onMouseLeave={e => (e.currentTarget.style.color = "#94a3b8")}
          >{item}</a>
        ))}

        {session ? (
          <>
            <Link href="/dashboard" style={{
              color: "#94a3b8", textDecoration: "none", fontSize: "0.9rem"
            }}>Dashboard</Link>
            <button onClick={() => signOut()} style={{
              background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.4)",
              color: "#7c3aed", padding: "0.4rem 1rem", borderRadius: "6px",
              cursor: "pointer", fontSize: "0.9rem"
            }}>Sign out</button>
          </>
        ) : (
          <Link href="/login" style={{
            background: "#7c3aed", color: "#fff", padding: "0.4rem 1.2rem",
            borderRadius: "6px", textDecoration: "none", fontSize: "0.9rem",
            fontWeight: 500
          }}>Login</Link>
        )}
      </div>
    </nav>
  );
}