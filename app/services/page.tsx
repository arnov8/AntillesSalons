import Link from "next/link";

const services = [
  {
    slug: "logo-design",
    icon: "👁",
    title: "Visibilité",
    description:
      "Exposez votre marque devant des milliers de visiteurs qualifiés lors de nos événements. Nos salons attirent un public ciblé qui correspond à votre secteur d'activité.",
    details: [
      "Stand personnalisé à votre image",
      "Présence dans nos supports de communication",
      "Mentions sur nos réseaux sociaux",
      "Visibilité avant, pendant et après le salon",
    ],
  },
  {
    slug: "identity-design",
    icon: "🤝",
    title: "Rencontre de prospects",
    description:
      "Engagez directement avec vos clients potentiels en face à face lors de nos salons. Le contact humain est le meilleur moyen de convertir.",
    details: [
      "Interactions directes avec les visiteurs",
      "Démonstrations produits en live",
      "Recueil de contacts qualifiés",
      "Opportunités de closing immédiates",
    ],
  },
  {
    slug: "packaging-design",
    icon: "🔗",
    title: "Réseautage",
    description:
      "Développez votre réseau professionnel avec d'autres exposants et partenaires de la région. Les salons sont des lieux de rencontres entre professionnels.",
    details: [
      "Accès à la communauté des exposants",
      "Opportunités de partenariats",
      "Échanges inter-professionnels",
      "Visibilité dans l'écosystème antillais",
    ],
  },
  {
    slug: "product-design",
    icon: "📈",
    title: "Génération de leads",
    description:
      "Captez des contacts qualifiés et générez des opportunités commerciales concrètes. Repartez avec un carnet de prospects chaud.",
    details: [
      "Fiches de contact visiteurs",
      "Jeux concours et animations stand",
      "Suivi post-salon inclus",
      "Reporting des performances",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section
        style={{
          background:
            "linear-gradient(135deg, rgba(81,78,167,0.08) 0%, rgba(235,234,255,0.5) 50%, rgba(255,255,255,0) 100%)",
          padding: "5rem 1.5rem 4rem",
          textAlign: "center",
        }}
      >
        <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>ANTILLES SALONS</p>
        <h1
          style={{
            fontFamily: "var(--font-wix-display), sans-serif",
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            fontWeight: 800,
            color: "#151515",
            marginBottom: "1rem",
          }}
        >
          Nos Services
        </h1>
        <p style={{ color: "#555", fontSize: "1rem", lineHeight: 1.7, maxWidth: "500px", margin: "0 auto" }}>
          Découvrez tout ce que nous pouvons apporter à votre entreprise lors de nos salons en Martinique et Guadeloupe.
        </p>
      </section>

      {/* ─── SERVICES LIST ─── */}
      <section style={{ padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {services.map((service, index) => (
              <div
                key={service.slug}
                className="card-hover"
                style={{
                  background: "white",
                  borderRadius: "1.5rem",
                  padding: "2.5rem",
                  boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
                  border: "1px solid rgba(0,0,0,0.05)",
                  display: "grid",
                  gridTemplateColumns: "auto 1fr auto",
                  gap: "2rem",
                  alignItems: "start",
                }}
              >
                {/* Number */}
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    background: "rgba(81,78,167,0.08)",
                    borderRadius: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.75rem",
                    flexShrink: 0,
                  }}
                >
                  {service.icon}
                </div>

                {/* Content */}
                <div>
                  <h2
                    style={{
                      fontFamily: "var(--font-wix-display), sans-serif",
                      fontSize: "1.4rem",
                      fontWeight: 800,
                      color: "#151515",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {service.title}
                  </h2>
                  <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                    {service.description}
                  </p>
                  <ul style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", listStyle: "none", padding: 0, margin: 0 }}>
                    {service.details.map((detail, i) => (
                      <li
                        key={i}
                        style={{
                          fontSize: "0.8rem",
                          color: "#514EA7",
                          background: "rgba(81,78,167,0.07)",
                          padding: "0.3rem 0.75rem",
                          borderRadius: "9999px",
                          fontWeight: 500,
                        }}
                      >
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Link */}
                <div style={{ flexShrink: 0 }}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="btn-primary"
                    style={{ fontSize: "0.85rem", padding: "0.6rem 1.25rem", whiteSpace: "nowrap" }}
                  >
                    En savoir plus →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        style={{
          padding: "5rem 1.5rem",
          textAlign: "center",
          background: "rgba(81,78,167,0.04)",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>PRÊT À EXPOSER?</p>
          <h2
            style={{
              fontFamily: "var(--font-wix-display), sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 800,
              color: "#151515",
              marginBottom: "1.5rem",
            }}
          >
            Réservez votre stand dès maintenant
          </h2>
          <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "2rem" }}>
            Contactez notre équipe pour connaître les disponibilités et tarifs pour nos prochains salons.
          </p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: "1rem", padding: "0.9rem 2rem" }}>
            Nous contacter →
          </Link>
        </div>
      </section>
    </>
  );
}
