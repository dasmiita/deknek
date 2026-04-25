"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setError("");
    console.log("Form data:", form);

    if (!form.name || !form.email || !form.password) {
      setError("All fields are required");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (form.password !== form.confirm) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      console.log("Sending request to /api/register");
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
        }),
      });

      console.log("Response status:", res.status);
      const data = await res.json();
      console.log("Response data:", data);

      if (!res.ok) {
        setError(data.error || "Something went wrong");
        setLoading(false);
        return;
      }

      router.push("/login?registered=true");
    } catch (error) {
      console.error("Signup error:", error);
      setError("Server error. Please try again.");
      setLoading(false);
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
            Create your account
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
                color: "#666",
                fontSize: "0.85rem",
                display: "block",
                marginBottom: "0.4rem",
              }}
            >
              Full name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              style={inputStyle}
            />
          </div>

          <div>
            <label
              style={{
                color: "#666",
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
              style={inputStyle}
            />
          </div>

          <div>
            <label
              style={{
                color: "#666",
                fontSize: "0.85rem",
                display: "block",
                marginBottom: "0.4rem",
              }}
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Min. 6 characters"
              value={form.password}
              onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
              style={inputStyle}
            />
          </div>

          <div>
            <label
              style={{
                color: "#666",
                fontSize: "0.85rem",
                display: "block",
                marginBottom: "0.4rem",
              }}
            >
              Confirm password
            </label>
            <input
              type="password"
              placeholder="********"
              value={form.confirm}
              onChange={(e) => setForm((f) => ({ ...f, confirm: e.target.value }))}
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
            {loading ? "Creating account..." : "Create account"}
          </button>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem", margin: "1.5rem 0" }}>
          <div style={{ flex: 1, height: "1px", background: "rgba(0,0,0,0.1)" }} />
          <span style={{ color: "#999", fontSize: "0.8rem" }}>or</span>
          <div style={{ flex: 1, height: "1px", background: "rgba(0,0,0,0.1)" }} />
        </div>

        <p style={{ textAlign: "center", color: "#666", fontSize: "0.9rem" }}>
          Already have an account?{" "}
          <Link href="/login" style={{ color: "#7c3aed", textDecoration: "none", fontWeight: 600 }}>
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}
