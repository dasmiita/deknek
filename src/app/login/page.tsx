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

  const inputStyle = {
    width: "100%",
    background: "rgba(255,255,255,0.86)",
    border: "1px solid rgba(0,0,0,0.1)",
    borderRadius: "18px",
    padding: "0.9rem 1rem",
    color: "#333",
    fontSize: "0.95rem",
    outline: "none",
    boxSizing: "border-box" as const,
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        background: "linear-gradient(180deg, rgba(255,253,248,0.95) 0%, rgba(255,243,223,0.72) 100%)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "linear-gradient(180deg, rgba(255,255,255,0.94) 0%, rgba(255,247,235,0.96) 100%)",
          border: "1px solid rgba(0,0,0,0.1)",
          borderRadius: "28px",
          padding: "2.5rem",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <Link
            href="/"
            style={{
              fontSize: "1.6rem",
              fontWeight: 800,
              color: "#7c3aed",
              textDecoration: "none",
            }}
          >
            deknek<span style={{ color: "#333" }}>3d</span>
          </Link>
          <p style={{ color: "#666", fontSize: "0.9rem", marginTop: "0.5rem" }}>
            Welcome back
          </p>
        </div>

        {error && (
          <div
            style={{
              background: "rgba(248,113,113,0.12)",
              border: "1px solid rgba(200,86,79,0.24)",
              color: "#c8564f",
              borderRadius: "16px",
              padding: "0.75rem 1rem",
              marginBottom: "1.5rem",
              fontSize: "0.9rem",
            }}
          >
            {error}
          </div>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div>
            <label
              style={{
                color: "var(--text-muted)",
                fontSize: "0.85rem",
                display: "block",
                marginBottom: "0.4rem",
              }}
            >
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              style={inputStyle}
            />
          </div>

          <div>
            <label
              style={{
                color: "var(--text-muted)",
                fontSize: "0.85rem",
                display: "block",
                marginBottom: "0.4rem",
              }}
            >
              Password
            </label>
            <input
              type="password"
              placeholder="********"
              value={form.password}
              onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              style={inputStyle}
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{
              marginTop: "0.5rem",
              background: loading ? "rgba(230, 118, 79, 0.58)" : "#7c3aed",
              color: "#fff",
              border: "none",
              padding: "0.95rem",
              fontSize: "1rem",
              fontWeight: 600,
              cursor: loading ? "not-allowed" : "pointer",
              transition: "background 0.2s",
              borderRadius: "999px",
              boxShadow: "0 16px 30px rgba(230, 118, 79, 0.22)",
            }}
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem", margin: "1.5rem 0" }}>
          <div style={{ flex: 1, height: "1px", background: "rgba(0,0,0,0.1)" }} />
          <span style={{ color: "#999", fontSize: "0.8rem" }}>or</span>
          <div style={{ flex: 1, height: "1px", background: "rgba(0,0,0,0.1)" }} />
        </div>

        <p style={{ textAlign: "center", color: "#666", fontSize: "0.9rem" }}>
          Don&apos;t have an account?{" "}
          <Link href="/signup" style={{ color: "#7c3aed", textDecoration: "none", fontWeight: 600 }}>
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
}
