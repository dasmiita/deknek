"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setError("");

    const res = await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirect: false,
    });

    if (res?.error) {
      setError("Invalid email or password");
      setLoading(false);
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <main style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      justifyContent: "center", padding: "2rem",
      background: "radial-gradient(ellipse at top, rgba(124,58,237,0.12) 0%, transparent 60%)"
    }}>
      <div style={{
        width: "100%", maxWidth: "420px",
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "16px", padding: "2.5rem"
      }}>
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <Link href="/" style={{
            fontSize: "1.6rem", fontWeight: 800,
            color: "#7c3aed", textDecoration: "none"
          }}>
            deknek<span style={{ color: "#e2e8f0" }}>3d</span>
          </Link>
          <p style={{ color: "#64748b", fontSize: "0.9rem", marginTop: "0.5rem" }}>
            Welcome back
          </p>
        </div>

        {/* Error */}
        {error && (
          <div style={{
            background: "rgba(248,113,113,0.1)",
            border: "1px solid rgba(248,113,113,0.3)",
            color: "#f87171", borderRadius: "8px",
            padding: "0.75rem 1rem", marginBottom: "1.5rem",
            fontSize: "0.9rem"
          }}>
            {error}
          </div>
        )}

        {/* Fields */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div>
            <label style={{ color: "#94a3b8", fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              onKeyDown={e => e.key === "Enter" && handleSubmit()}
              style={{
                width: "100%", background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "8px", padding: "0.8rem 1rem",
                color: "#e2e8f0", fontSize: "0.95rem",
                outline: "none", boxSizing: "border-box"
              }}
            />
          </div>

          <div>
            <label style={{ color: "#94a3b8", fontSize: "0.85rem", display: "block", marginBottom: "0.4rem" }}>
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={form.password}
              onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
              onKeyDown={e => e.key === "Enter" && handleSubmit()}
              style={{
                width: "100%", background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "8px", padding: "0.8rem 1rem",
                color: "#e2e8f0", fontSize: "0.95rem",
                outline: "none", boxSizing: "border-box"
              }}
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{
              marginTop: "0.5rem",
              background: loading ? "rgba(124,58,237,0.5)" : "#7c3aed",
              color: "#fff", border: "none", borderRadius: "8px",
              padding: "0.9rem", fontSize: "1rem", fontWeight: 600,
              cursor: loading ? "not-allowed" : "pointer",
              transition: "background 0.2s"
            }}
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </div>

        {/* Divider */}
        <div style={{
          display: "flex", alignItems: "center", gap: "1rem",
          margin: "1.5rem 0"
        }}>
          <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.08)" }} />
          <span style={{ color: "#475569", fontSize: "0.8rem" }}>or</span>
          <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.08)" }} />
        </div>

        <p style={{ textAlign: "center", color: "#64748b", fontSize: "0.9rem" }}>
          Don't have an account?{" "}
          <Link href="/signup" style={{ color: "#7c3aed", textDecoration: "none", fontWeight: 500 }}>
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
}