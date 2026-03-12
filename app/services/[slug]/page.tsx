import Link from "next/link";
import { notFound } from "next/navigation";

const servicesData: Record<
  string,
  {
    title: string;
    icon: string;
    tagline: string;
    description: string;
    longDesc: string;
    policies: { title: string; desc: string }[];
    related: { slug: string; title: string; icon: string }[];
  }
> = {
  "logo-design": {
    title: "Visibilité",
    icon: "👁",
    tagline: "Soyez vu par des milliers de visiteurs qualifiés",
    description:
      "Exposer lors de nos salons vous offre une visibilité incomparable sur votre marché. Des milliers de visiteurs viennent spécifiquement pour découvrir des offres comme la vôtre.",
    longDesc:
      "Participer à nos salons en Martinique et en Guadeloupe vous permet de toucher directement votre cible. Nos événements attirent un public ciblé qui correspond à votre secteur d'activité. Grâce à un emplacement stratégique, une signalétique attractive et notre communication événementielle, votre marque gagne en notoriété locale et régionale.",
    policies: [
      { title: "Stand personnalisé", desc: "Votre stand est habillé à votre image pour maximiser l'impact visuel." },
      { title: "Communication inclusive", desc: "Votre marque apparaît dans tous nos supports print et digitaux." },
      { title: "Réseaux sociaux", desc: "Mentions et publications sur nos réseaux avant, pendant et après l'événement." },
      { title: "Rapport de visibilité", desc: "Bilan complet du nombre d'impressions et contacts générés." },
    ],
    related: [
      { slug: "identity-design", title: "Rencontre de prospects", icon: "🤝" },
      { slug: "packaging-design", title: "Réseautage", icon: "🔗" },
      { slug: "product-design", title: "Génération de leads", icon: "📈" },
    ],
  },
  "identity-design": {
    title: "Rencontre de prospects",
    icon: "🤝",
    tagline: "Engagez directement avec vos futurs clients",
    description:
      "Le contact humain est le levier de conversion le plus puissant. Nos salons vous permettent de rencontrer directement vos prospects dans un cadre propice aux échanges.",
    longDesc:
      "En exposant lors de nos salons, vous êtes en présence directe de vos clients potentiels. Ces derniers visitent nos événements avec l'intention de découvrir de nouveaux prestataires, produits et services. C'est l'occasion idéale pour faire des démonstrations, répondre aux questions et conclure des ventes.",
    policies: [
      { title: "Profil visiteurs ciblé", desc: "Nos salons attirent un public en adéquation avec votre offre." },
      { title: "Espace de démonstration", desc: "Votre stand est configuré pour faciliter les échanges." },
      { title: "Jeux concours", desc: "Animez votre stand pour captiver l'attention des visiteurs." },
      { title: "Suivi commercial", desc: "Outils pour collecter et suivre les contacts post-salon." },
    ],
    related: [
      { slug: "logo-design", title: "Visibilité", icon: "👁" },
      { slug: "packaging-design", title: "Réseautage", icon: "🔗" },
      { slug: "product-design", title: "Génération de leads", icon: "📈" },
    ],
  },
  "packaging-design": {
    title: "Réseautage",
    icon: "🔗",
    tagline: "Développez votre réseau professionnel aux Antilles",
    description:
      "Les salons Antilles Salons sont des lieux de rencontres entre professionnels. Élargissez votre réseau et identifiez des partenaires stratégiques pour votre activité.",
    longDesc:
      "Au-delà des visiteurs grand public, nos salons réunissent des professionnels de tous secteurs. C'est l'occasion unique de nouer des contacts B2B, d'identifier des partenaires commerciaux, des fournisseurs et des collaborateurs potentiels. L'écosystème entrepreneurial des Antilles se retrouve lors de nos événements.",
    policies: [
      { title: "Espace networking", desc: "Des zones dédiées aux échanges entre exposants et professionnels." },
      { title: "Annuaire des exposants", desc: "Votre fiche dans l'annuaire officiel de l'événement." },
      { title: "Sessions B2B", desc: "Des créneaux de rencontres organisées avec d'autres exposants." },
      { title: "Communauté Antilles Salons", desc: "Accès à notre réseau de professionnels antillais." },
    ],
    related: [
      { slug: "logo-design", title: "Visibilité", icon: "👁" },
      { slug: "identity-design", title: "Rencontre de prospects", icon: "🤝" },
      { slug: "product-design", title: "Génération de leads", icon: "📈" },
    ],
  },
  "product-design": {
    title: "Génération de leads",
    icon: "📈",
    tagline: "Repartez avec un carnet de prospects qualifiés",
    description:
      "Nos salons sont conçus pour maximiser la génération de leads commerciaux. Chaque interaction est une opportunité de business concrète.",
    longDesc:
      "La génération de leads est l'un des objectifs prioritaires de nos exposants. Grâce à nos outils de collecte de contacts, nos animations stand et notre public qualifié, vous repartez de chaque salon avec un maximum d'opportunités commerciales à exploiter. Notre équipe vous accompagne pour optimiser votre stratégie de captation.",
    policies: [
      { title: "Fiches contacts digitales", desc: "Collecte simplifiée et RGPD-conforme des coordonnées visiteurs." },
      { title: "QR codes personnalisés", desc: "Lien direct vers vos offres spéciales événement." },
      { title: "Animation stand", desc: "Idées et support pour animer votre espace et attirer les visiteurs." },
      { title: "Rapport de performance", desc: "Bilan détaillé des leads générés à la fin de l'événement." },
    ],
    related: [
      { slug: "logo-design", title: "Visibilité", icon: "👁" },
      { slug: "identity-design", title: "Rencontre de prospects", icon: "🤝" },
      { slug: "packaging-design", title: "Réseautage", icon: "🔗" },
    ],
  },
};

export function generateStaticParams() {
  return [
    { slug: "logo-design" },
    { slug: "identity-design" },
    { slug: "packaging-design" },
    { slug: "product-design" },
  ];
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

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
        <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>NOS SERVICES</p>
        <div
          style={{
            fontSize: "3rem",
            marginBottom: "1rem",
          }}
        >
          {service.icon}
        </div>
        <h1
          style={{
            fontFamily: "var(--font-wix-display), sans-serif",
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            fontWeight: 800,
            color: "#151515",
            marginBottom: "1rem",
          }}
        >
          {service.title}
        </h1>
        <p
          style={{
            color: "#514EA7",
            fontSize: "1.1rem",
            fontWeight: 600,
            maxWidth: "500px",
            margin: "0 auto",
          }}
        >
          {service.tagline}
        </p>
      </section>

      {/* ─── CONTENT ─── */}
      <section style={{ padding: "5rem 1.5rem" }}>
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              background: "white",
              borderRadius: "1.5rem",
              padding: "3rem",
              boxShadow: "0 2px 24px rgba(0,0,0,0.06)",
              marginBottom: "2.5rem",
            }}
          >
            <p
              style={{
                fontSize: "1.1rem",
                color: "#333",
                lineHeight: 1.75,
                marginBottom: "1.5rem",
                fontWeight: 500,
              }}
            >
              {service.description}
            </p>
            <p style={{ fontSize: "0.95rem", color: "#555", lineHeight: 1.8 }}>
              {service.longDesc}
            </p>
          </div>

          {/* Policies */}
          <div style={{ marginBottom: "2.5rem" }}>
            <h2
              style={{
                fontFamily: "var(--font-wix-display), sans-serif",
                fontSize: "1.6rem",
                fontWeight: 800,
                color: "#151515",
                marginBottom: "1.5rem",
              }}
            >
              Ce qui est inclus
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {service.policies.map((policy, i) => (
                <div
                  key={i}
                  style={{
                    background: "white",
                    borderRadius: "1rem",
                    padding: "1.5rem",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                    borderLeft: "3px solid #514EA7",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-wix-display), sans-serif",
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: "#514EA7",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {policy.title}
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "#666", lineHeight: 1.6 }}>
                    {policy.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div
            style={{
              background: "linear-gradient(135deg, #514EA7, #2d2b5e)",
              borderRadius: "1.5rem",
              padding: "3rem",
              textAlign: "center",
              color: "white",
              marginBottom: "3rem",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-wix-display), sans-serif",
                fontSize: "1.8rem",
                fontWeight: 800,
                marginBottom: "1rem",
              }}
            >
              Intéressé par ce service?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.75)", marginBottom: "1.75rem", lineHeight: 1.6 }}>
              Contactez-nous pour obtenir un devis personnalisé et connaître les disponibilités
              pour nos prochains salons.
            </p>
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "white",
                color: "#514EA7",
                padding: "0.875rem 2rem",
                borderRadius: "9999px",
                fontWeight: 700,
                textDecoration: "none",
                fontSize: "0.95rem",
              }}
            >
              Nous contacter →
            </Link>
          </div>

          {/* Related */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-wix-display), sans-serif",
                fontSize: "1.4rem",
                fontWeight: 800,
                color: "#151515",
                marginBottom: "1.25rem",
              }}
            >
              Nos autres services
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: "1rem",
              }}
            >
              {service.related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/services/${rel.slug}`}
                  className="card-hover"
                  style={{
                    background: "white",
                    borderRadius: "1rem",
                    padding: "1.25rem",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.875rem",
                    border: "1px solid rgba(0,0,0,0.05)",
                  }}
                >
                  <span style={{ fontSize: "1.5rem" }}>{rel.icon}</span>
                  <span
                    style={{
                      fontFamily: "var(--font-wix-display), sans-serif",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      color: "#151515",
                    }}
                  >
                    {rel.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Back */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 1.5rem 3rem" }}>
        <Link
          href="/services"
          style={{ color: "#514EA7", fontWeight: 600, textDecoration: "none", fontSize: "0.9rem" }}
        >
          ← Retour aux services
        </Link>
      </div>
    </>
  );
}
