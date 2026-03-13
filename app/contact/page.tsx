"use client";

import { useState } from "react";

const salons = [
  "le Salon du Mariage",
  "le Salon des CHR",
  "le Salon des CSE & COS Martinique",
  "le Salon des CSE & COS Guadeloupe",
  "le Séminaire Antillais des CSE & COS",
  "Autre",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    type: "",
    name: "",
    phone: "",
    email: "",
    interests: [] as string[],
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleCheckbox = (salon: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(salon)
        ? prev.interests.filter((s) => s !== salon)
        : [...prev.interests, salon],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.75rem 1rem",
    borderRadius: "0.75rem",
    border: "1.5px solid rgba(0,0,0,0.12)",
    fontSize: "0.9rem",
    color: "#151515",
    background: "#fafafa",
    outline: "none",
    fontFamily: "inherit",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.85rem",
    fontWeight: 600,
    color: "#333",
    marginBottom: "0.4rem",
  };

  return (
    <>
      {/* ─── HERO ─── */}
      <section
        style={{
          background: "linear-gradient(135deg, rgba(81,78,167,0.08) 0%, rgba(235,234,255,0.5) 50%, rgba(255,255,255,0) 100%)",
          padding: "5rem 1.5rem 4rem",
          textAlign: "center",
        }}
      >
        <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>NOUS CONTACTER</p>
        <h1
          style={{
            fontFamily: "var(--font-wix-display), sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 800,
            color: "#151515",
            lineHeight: 1.2,
          }}
        >
          Un de nos évènements<br />vous intéresse?
        </h1>
      </section>

      {/* ─── FORM + INFO ─── */}
      <section style={{ padding: "4rem 1.5rem 5rem" }}>
        <style>{`
          @media (min-width: 768px) {
            .contact-grid { grid-template-columns: 1.4fr 1fr !important; }
          }
          @media (max-width: 500px) {
            .form-box { padding: 1.5rem !important; }
            .phone-email-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
        <div
          className="contact-grid"
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gap: "3rem",
            gridTemplateColumns: "1fr",
          }}
        >
          {/* ─ FORM ─ */}
          <div
            className="form-box"
            style={{
              background: "white",
              borderRadius: "1.5rem",
              padding: "2.5rem",
              boxShadow: "0 2px 24px rgba(0,0,0,0.06)",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-wix-display), sans-serif",
                fontSize: "1.6rem",
                fontWeight: 800,
                color: "#151515",
                marginBottom: "2rem",
              }}
            >
              Laissez-nous vos infos
            </h2>

            {status === "success" ? (
              <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
                <h3 style={{ fontFamily: "var(--font-wix-display), sans-serif", fontSize: "1.4rem", fontWeight: 700, color: "#514EA7", marginBottom: "0.5rem" }}>
                  Message envoyé !
                </h3>
                <p style={{ color: "#555" }}>
                  Nous vous avons envoyé un email de confirmation.<br />
                  Nous vous recontacterons très prochainement.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {/* Type */}
                <div>
                  <label style={labelStyle}>Vous êtes :</label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    style={{ ...inputStyle, appearance: "none" }}
                    required
                  >
                    <option value="">Sélectionnez votre profil...</option>
                    <option value="Exposant">Exposant</option>
                    <option value="Visiteur">Visiteur</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>

                {/* Name */}
                <div>
                  <label style={labelStyle}>Nom &amp; prénom *</label>
                  <input
                    type="text"
                    placeholder="Votre nom complet"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={inputStyle}
                    required
                  />
                </div>

                {/* Phone + Email */}
                <div className="phone-email-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={labelStyle}>Téléphone portable</label>
                    <input
                      type="tel"
                      placeholder="06 96 XX XX XX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input
                      type="email"
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={inputStyle}
                      required
                    />
                  </div>
                </div>

                {/* Checkboxes */}
                <div>
                  <label style={labelStyle}>Je suis intéressé(e) par :</label>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                    {salons.map((salon) => (
                      <label
                        key={salon}
                        style={{ display: "flex", alignItems: "center", gap: "0.65rem", cursor: "pointer", fontSize: "0.9rem", color: "#333" }}
                      >
                        <input
                          type="checkbox"
                          checked={formData.interests.includes(salon)}
                          onChange={() => handleCheckbox(salon)}
                          style={{ width: "18px", height: "18px", accentColor: "#514EA7", cursor: "pointer" }}
                        />
                        {salon}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Error message */}
                {status === "error" && (
                  <p style={{ color: "#e53e3e", fontSize: "0.85rem", background: "#fff5f5", padding: "0.75rem 1rem", borderRadius: "0.5rem" }}>
                    Une erreur s&apos;est produite. Vérifiez la configuration SMTP dans <code>.env.local</code> ou contactez-nous directement.
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary"
                  style={{
                    border: "none",
                    cursor: status === "loading" ? "wait" : "pointer",
                    width: "100%",
                    justifyContent: "center",
                    fontSize: "1rem",
                    padding: "0.875rem 2rem",
                    marginTop: "0.5rem",
                    opacity: status === "loading" ? 0.7 : 1,
                  }}
                >
                  {status === "loading" ? "Envoi en cours..." : "Envoyer →"}
                </button>
              </form>
            )}
          </div>

          {/* ─ CONTACT INFO ─ */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div
              style={{
                background: "white",
                borderRadius: "1.25rem",
                padding: "2rem",
                boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-wix-display), sans-serif",
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "#151515",
                  marginBottom: "1.25rem",
                }}
              >
                Nos coordonnées
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  <span style={{ color: "#514EA7", fontSize: "1.1rem", marginTop: "2px" }}>📍</span>
                  <div>
                    <p style={{ fontSize: "0.8rem", color: "#888", marginBottom: "0.2rem" }}>Adresse</p>
                    <p style={{ fontSize: "0.9rem", color: "#333", lineHeight: 1.5 }}>
                      Centre Commercial de Bellevue<br />97200 Fort-de-France
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "0.75rem" }}>
                  <span style={{ color: "#514EA7", fontSize: "1.1rem" }}>📞</span>
                  <div>
                    <p style={{ fontSize: "0.8rem", color: "#888", marginBottom: "0.2rem" }}>Téléphone</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.15rem" }}>
                      <a href="tel:0596612121" style={{ fontSize: "0.9rem", color: "#333", textDecoration: "none" }}>05 96 61 21 21</a>
                      <a href="tel:0696263096" style={{ fontSize: "0.9rem", color: "#333", textDecoration: "none" }}>06 96 26 30 96</a>
                      <a href="tel:0696334700" style={{ fontSize: "0.9rem", color: "#333", textDecoration: "none" }}>06 96 33 47 00</a>
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "0.75rem" }}>
                  <span style={{ color: "#514EA7", fontSize: "1.1rem" }}>✉️</span>
                  <div>
                    <p style={{ fontSize: "0.8rem", color: "#888", marginBottom: "0.2rem" }}>Email</p>
                    <a
                      href="mailto:organisation@antillessalons.com"
                      style={{ fontSize: "0.85rem", color: "#514EA7", textDecoration: "none", fontWeight: 500 }}
                    >
                      organisation@antillessalons.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                background: "rgba(81,78,167,0.06)",
                borderRadius: "1.25rem",
                padding: "1.75rem",
                border: "1px solid rgba(81,78,167,0.12)",
              }}
            >
              <h4
                style={{
                  fontFamily: "var(--font-wix-display), sans-serif",
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#514EA7",
                  marginBottom: "0.75rem",
                }}
              >
                Nos salons
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {[
                  "Salon du Mariage – Martinique",
                  "Salon des CHR – Martinique",
                  "Salon des CSE & COS – Martinique",
                  "Salon des CSE & COS – Guadeloupe",
                  "Séminaire Antillais CSE & COS",
                ].map((s) => (
                  <li key={s} style={{ fontSize: "0.82rem", color: "#444", display: "flex", gap: "0.5rem" }}>
                    <span style={{ color: "#514EA7" }}>→</span> {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
