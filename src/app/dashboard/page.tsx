"use client";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div style={{ 
        minHeight: "100vh", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        background: "#0a0a0f",
        color: "#e2e8f0"
      }}>
        <div>Loading...</div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div style={{ 
      minHeight: "100vh", 
      background: "#0a0a0f", 
      color: "#e2e8f0",
      padding: "2rem"
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center",
          marginBottom: "2rem"
        }}>
          <h1 style={{ fontSize: "2rem", fontWeight: 700 }}>
            Dashboard
          </h1>
          <button
            onClick={() => signOut()}
            style={{
              background: "rgba(124,58,237,0.15)",
              border: "1px solid rgba(124,58,237,0.4)",
              color: "#7c3aed",
              padding: "0.5rem 1rem",
              borderRadius: "6px",
              cursor: "pointer"
            }}
          >
            Sign out
          </button>
        </div>

        <div style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "12px",
          padding: "2rem"
        }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            Welcome back, {session.user?.name}!
          </h2>
          <p style={{ color: "#94a3b8", marginBottom: "2rem" }}>
            This is your dashboard where you can manage your projects and profile.
          </p>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1rem"
          }}>
            <div style={{
              background: "rgba(124,58,237,0.1)",
              border: "1px solid rgba(124,58,237,0.3)",
              borderRadius: "8px",
              padding: "1.5rem"
            }}>
              <h3 style={{ color: "#7c3aed", marginBottom: "0.5rem" }}>Projects</h3>
              <p style={{ color: "#94a3b8", fontSize: "0.9rem" }}>
                Manage your portfolio projects
              </p>
            </div>
            
            <div style={{
              background: "rgba(6,182,212,0.1)",
              border: "1px solid rgba(6,182,212,0.3)",
              borderRadius: "8px",
              padding: "1.5rem"
            }}>
              <h3 style={{ color: "#06b6d4", marginBottom: "0.5rem" }}>Profile</h3>
              <p style={{ color: "#94a3b8", fontSize: "0.9rem" }}>
                Update your personal information
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
