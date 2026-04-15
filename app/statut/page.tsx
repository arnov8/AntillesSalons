"use client";

import { useState, useRef } from "react";

interface EmailResult {
  ok: boolean;
  detail: string;
}

interface FormResult {
  config: {
    nom: string;
    route: string;
    api: string;
    sheetInfo: string;
  };
  email: EmailResult;
  googleSheet: { ok: boolean; detail: string };
}

interface StatusResponse {
  ok: boolean;
  timestamp: string;
  envVars: Record<string, string>;
  forms: {
    contact: FormResult;
  };
}

function diagnoseCause(detail: string): { cause: string; solution: string } {
  const d = detail.toLowerCase();
  if (d.includes("api_key") || d.includes("non définie")) {
    return {
      cause: "La clé API Resend n'est pas configurée dans les variables d'environnement.",
      solution: "Ajoutez RESEND_API_KEY dans .env.local ou dans les variables Vercel.",
    };
  }
  if (d.includes("invalid api key") || d.includes("unauthorized") || d.includes("401")) {
    return {
      cause: "La clé API Resend est invalide ou expirée.",
      solution: "Vérifiez la clé sur https://resend.com/api-keys et mettez-la à jour.",
    };
  }
  if (d.includes("domain") || d.includes("not verified")) {
    return {
      cause: "Le domaine d'envoi n'est pas vérifié dans Resend.",
      solution:
        "Vérifiez le domaine antillessalons.com dans le dashboard Resend (DNS records).",
    };
  }
  if (d.includes("rate") || d.includes("429")) {
    return {
      cause: "Limite de requêtes Resend atteinte.",
      solution: "Attendez quelques minutes et relancez le test.",
    };
  }
  if (d.includes("fetch") || d.includes("network") || d.includes("econnrefused")) {
    return {
      cause: "Impossible de contacter l'API Resend (problème réseau).",
      solution: "Vérifiez la connexion internet du serveur.",
    };
  }
  return {
    cause: "Erreur inattendue lors de l'envoi.",
    solution: "Consultez les logs serveur pour plus de détails.",
  };
}

export default function StatutPage() {
  const [pin, setPin] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<StatusResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  async function runTest(code: string) {
    setLoading(true);
    setError(null);
    setData(null);
    try {
      const res = await fetch("/api/statut", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pin: code }),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json.error || `Erreur ${res.status}`);
      } else {
        setData(json);
      }
    } catch {
      setError("Impossible de contacter le serveur.");
    } finally {
      setLoading(false);
    }
  }

  function handlePinChange(val: string) {
    const digits = val.replace(/\D/g, "").slice(0, 4);
    setPin(digits);
    if (digits.length === 4) {
      runTest(digits);
    }
  }

  function handleRetry() {
    if (pin.length === 4) {
      runTest(pin);
    }
  }

  const form = data?.forms.contact;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f3ff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div style={{ maxWidth: 560, width: "100%" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <h1
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: "#514EA7",
              margin: "0 0 4px",
            }}
          >
            Antilles Salons
          </h1>
          <p style={{ color: "#777", fontSize: "0.95rem", margin: 0 }}>
            Page de diagnostic
          </p>
        </div>

        {/* PIN input (shown if no data and no loading) */}
        {!data && !loading && (
          <div
            style={{
              background: "#fff",
              borderRadius: 12,
              padding: "32px 24px",
              boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
              textAlign: "center",
            }}
          >
            <p
              style={{
                color: "#333",
                fontSize: "0.95rem",
                marginBottom: 20,
              }}
            >
              Entrez le code PIN à 4 chiffres
            </p>
            <input
              ref={inputRef}
              type="text"
              inputMode="numeric"
              maxLength={4}
              value={pin}
              onChange={(e) => handlePinChange(e.target.value)}
              placeholder="• • • •"
              autoFocus
              style={{
                fontSize: "2rem",
                textAlign: "center",
                letterSpacing: 16,
                width: 180,
                padding: "12px 16px",
                border: "2px solid #ddd",
                borderRadius: 10,
                outline: "none",
                color: "#514EA7",
                fontWeight: 600,
              }}
            />
            {error && (
              <p
                style={{
                  color: "#dc2626",
                  marginTop: 16,
                  fontSize: "0.9rem",
                }}
              >
                {error}
              </p>
            )}
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div
            style={{
              background: "#fff",
              borderRadius: 12,
              padding: "48px 24px",
              boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                border: "3px solid #e2e0f0",
                borderTopColor: "#514EA7",
                borderRadius: "50%",
                animation: "spin 0.8s linear infinite",
                margin: "0 auto 16px",
              }}
            />
            <p style={{ color: "#666", fontSize: "0.95rem" }}>
              Test en cours...
            </p>
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          </div>
        )}

        {/* Results */}
        {data && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Global status */}
            <div
              style={{
                background: data.ok ? "#f0fdf4" : "#fef2f2",
                border: `1px solid ${data.ok ? "#bbf7d0" : "#fecaca"}`,
                borderRadius: 12,
                padding: "20px 24px",
                textAlign: "center",
              }}
            >
              <span style={{ fontSize: "1.8rem" }}>
                {data.ok ? "✅" : "❌"}
              </span>
              <p
                style={{
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  color: data.ok ? "#166534" : "#991b1b",
                  margin: "8px 0 4px",
                }}
              >
                {data.ok
                  ? "Tout fonctionne correctement"
                  : "Un problème a été détecté"}
              </p>
              <p style={{ color: "#888", fontSize: "0.8rem", margin: 0 }}>
                {new Date(data.timestamp).toLocaleString("fr-FR")}
              </p>
            </div>

            {/* Form: Contact */}
            {form && (
              <div
                style={{
                  background: "#fff",
                  borderRadius: 12,
                  padding: "20px 24px",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                }}
              >
                <h2
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#514EA7",
                    margin: "0 0 4px",
                  }}
                >
                  {form.config.nom}
                </h2>
                <p
                  style={{
                    color: "#888",
                    fontSize: "0.8rem",
                    margin: "0 0 16px",
                  }}
                >
                  {form.config.route} &rarr; {form.config.api}
                </p>

                {/* Email */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    marginBottom: 12,
                  }}
                >
                  <span style={{ fontSize: "1.1rem", flexShrink: 0 }}>
                    {form.email.ok ? "✅" : "❌"}
                  </span>
                  <div>
                    <p
                      style={{
                        margin: 0,
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        color: "#333",
                      }}
                    >
                      Email (Resend)
                    </p>
                    <p
                      style={{
                        margin: "2px 0 0",
                        fontSize: "0.82rem",
                        color: form.email.ok ? "#666" : "#dc2626",
                      }}
                    >
                      {form.email.detail}
                    </p>
                    {!form.email.ok && (
                      <div
                        style={{
                          marginTop: 8,
                          background: "#fef2f2",
                          border: "1px solid #fecaca",
                          borderRadius: 8,
                          padding: "10px 14px",
                          fontSize: "0.82rem",
                        }}
                      >
                        <p style={{ margin: "0 0 4px", color: "#991b1b", fontWeight: 600 }}>
                          Cause : {diagnoseCause(form.email.detail).cause}
                        </p>
                        <p style={{ margin: 0, color: "#b91c1c" }}>
                          Solution : {diagnoseCause(form.email.detail).solution}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Google Sheets */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                  }}
                >
                  <span style={{ fontSize: "1.1rem", flexShrink: 0 }}>
                    ➖
                  </span>
                  <div>
                    <p
                      style={{
                        margin: 0,
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        color: "#333",
                      }}
                    >
                      Google Sheets
                    </p>
                    <p
                      style={{
                        margin: "2px 0 0",
                        fontSize: "0.82rem",
                        color: "#999",
                      }}
                    >
                      {form.config.sheetInfo}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Environment variables */}
            <div
              style={{
                background: "#fff",
                borderRadius: 12,
                padding: "20px 24px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
              }}
            >
              <h2
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#514EA7",
                  margin: "0 0 12px",
                }}
              >
                Variables d&apos;environnement
              </h2>
              {Object.entries(data.envVars).map(([key, val]) => (
                <div
                  key={key}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "8px 0",
                    borderBottom: "1px solid #f0f0f0",
                    fontSize: "0.85rem",
                  }}
                >
                  <code
                    style={{
                      background: "#f5f3ff",
                      padding: "2px 8px",
                      borderRadius: 4,
                      color: "#514EA7",
                      fontWeight: 600,
                    }}
                  >
                    {key}
                  </code>
                  <span style={{ color: "#666", textAlign: "right", maxWidth: "60%" }}>
                    {val}
                  </span>
                </div>
              ))}
            </div>

            {/* Retry button */}
            <div style={{ textAlign: "center", marginTop: 4 }}>
              <button
                onClick={handleRetry}
                disabled={loading}
                style={{
                  background: "#514EA7",
                  color: "#fff",
                  border: "none",
                  borderRadius: 9999,
                  padding: "12px 32px",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Relancer le test
              </button>
              <p
                style={{
                  color: "#aaa",
                  fontSize: "0.75rem",
                  marginTop: 12,
                }}
              >
                Page de diagnostic interne
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
