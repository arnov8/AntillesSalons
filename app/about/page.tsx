import Image from "next/image";
import Link from "next/link";

const services = [
  {
    icon: "👁",
    title: "Visibilité",
    description: "Exposez votre marque devant des milliers de visiteurs qualifiés lors de nos événements.",
    href: "/services/logo-design",
  },
  {
    icon: "🤝",
    title: "Rencontre de prospects",
    description: "Engagez directement avec vos clients potentiels en face à face lors de nos salons.",
    href: "/services/identity-design",
  },
  {
    icon: "🔗",
    title: "Réseautage",
    description: "Développez votre réseau professionnel avec d'autres exposants et partenaires de la région.",
    href: "/services/packaging-design",
  },
  {
    icon: "📈",
    title: "Génération de leads",
    description: "Captez des contacts qualifiés et générez des opportunités commerciales concrètes.",
    href: "/services/product-design",
  },
];

const stats = [
  { value: "Spécialiste", label: "Organisation d'événements" },
  { value: "5", label: "Salons organisés" },
  { value: "4 600+", label: "Visiteurs par an" },
  { value: "+98%", label: "Satisfaction exposants" },
];

const partners = [
  { name: "Air France", logo: "/logos/air-france.svg", scale: 1 },
  { name: "Air Caraïbes", logo: "/logos/air-caraibes.svg", scale: 1 },
  { name: "Nespresso", logo: "/logos/nespresso.png", scale: 1 },
  { name: "UpCoop", logo: "/logos/upcoop.png", scale: 1 },
  { name: "Grain d'Or", logo: "/logos/grain-dor.jpg", scale: 1.9 },
  { name: "Le Château", logo: "/logos/le-chateau-martinique.jpg", scale: 1.1 },
  { name: "La Conserverie Créole", logo: "/logos/la-conserverie-creole.webp", scale: 1 },
  { name: "Karucoco", logo: "/logos/karucoco.png", scale: 1 },
  { name: "Dream Print", logo: "/logos/dream-print.jpg", scale: 1.7 },
  { name: "AVS Voyages", logo: "/logos/avs-voyages.png", scale: 1.1 },
];

export default function AboutPage() {
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
          }}
        >
          À propos de nous
        </h1>
      </section>

      {/* ─── ABOUT CONTENT ─── */}
      <section style={{ padding: "5rem 1.5rem" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          <style>{`
            @media (min-width: 768px) {
              .about-grid { grid-template-columns: 1fr 1fr !important; }
              .about-img-col { display: flex !important; }
            }
          `}</style>

          <div
            className="about-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3rem",
              alignItems: "center",
            }}
          >
            {/* Left – text */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-wix-display), sans-serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                  fontWeight: 800,
                  color: "#151515",
                  lineHeight: 1.2,
                  marginBottom: "1.25rem",
                }}
              >
                Nous sommes Antilles Salons
              </h2>
              <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: 1.75, marginBottom: "1rem" }}>
                Antilles Salons est l&apos;organisateur de référence des salons professionnels et grand public
                en Martinique et en Guadeloupe. Depuis plus de 10 ans, nous créons des événements qui
                rassemblent exposants et visiteurs autour de thématiques fortes et pertinentes pour les Antilles.
              </p>
              <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: 1.75, marginBottom: "1rem" }}>
                Notre mission est de favoriser les rencontres professionnelles et commerciales au sein
                des territoires antillais. Nous organisons 5 salons annuels qui attirent ensemble plus de
                4 600 visiteurs, offrant aux exposants une visibilité inégalée sur leur marché local.
              </p>
              <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: 1.75, marginBottom: "2rem" }}>
                Nous sommes aussi spécialisés dans l&apos;organisation de séminaires professionnels.
                Notre Séminaire Antillais des CSE &amp; COS est
                l&apos;événement de référence pour les élus et acteurs des comités sociaux et économiques
                des Antilles. Conférences, formations, ateliers pratiques et networking : nous offrons un
                cadre professionnel exigeant, conçu pour répondre aux enjeux réels des représentants du
                personnel en Martinique et en Guadeloupe.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                <Link href="/services" className="btn-primary">Nos services</Link>
                <Link href="/contact" className="btn-outline">Contactez-nous maintenant</Link>
              </div>
            </div>

            {/* Right – image */}
            <div
              className="about-img-col"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div
                style={{
                  width: "100%",
                  maxWidth: "440px",
                  aspectRatio: "1 / 1",
                  overflow: "hidden",
                  borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
                  position: "relative",
                }}
              >
                <Image
                  src="https://static.wixstatic.com/media/e968e8_e190d5d3581046bc9868d4f9672db4f0~mv2.jpg/v1/fill/w_1002,h_936,fp_0.30_0.65,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Visiteurs%20de%20salons_JPG.jpg"
                  alt="Visiteurs de salons"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "1.5rem",
              background: "rgba(81,78,167,0.04)",
              borderRadius: "1.25rem",
              padding: "2rem",
            }}
          >
            {stats.map((stat, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <p
                  style={{
                    fontFamily: "var(--font-wix-display), sans-serif",
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    color: "#514EA7",
                    marginBottom: "0.25rem",
                  }}
                >
                  {stat.value}
                </p>
                <p style={{ fontSize: "0.8rem", color: "#666" }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section style={{ padding: "5rem 1.5rem", background: "rgba(255,255,255,0.5)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>NOS SERVICES</p>
            <h2
              style={{
                fontFamily: "var(--font-wix-display), sans-serif",
                fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                fontWeight: 800,
                color: "#151515",
              }}
            >
              Nos services d&apos;organisation d&apos;évènements
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="card-hover"
                style={{
                  background: "white",
                  borderRadius: "1.25rem",
                  padding: "1.75rem",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
                  border: "1px solid rgba(0,0,0,0.05)",
                }}
              >
                <div
                  style={{
                    fontSize: "1.75rem",
                    marginBottom: "1rem",
                    width: "48px",
                    height: "48px",
                    background: "rgba(81,78,167,0.08)",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {service.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-wix-display), sans-serif",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    marginBottom: "0.5rem",
                    color: "#151515",
                  }}
                >
                  {service.title}
                </h3>
                <p style={{ fontSize: "0.85rem", color: "#666", lineHeight: 1.6, marginBottom: "1rem" }}>
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  style={{ color: "#514EA7", fontWeight: 600, fontSize: "0.85rem", textDecoration: "none" }}
                >
                  Explorer →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PARTNERS ─── */}
      <section style={{ padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>ILS NOUS FONT CONFIANCE</p>
            <h2
              style={{
                fontFamily: "var(--font-wix-display), sans-serif",
                fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                fontWeight: 800,
                color: "#151515",
              }}
            >
              Exposants
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {partners.map((partner, index) => (
              <div
                key={index}
                className="card-hover"
                title={partner.name}
                style={{
                  background: "white",
                  borderRadius: "1.25rem",
                  padding: "1.25rem",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
                  border: "1px solid rgba(0,0,0,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "110px",
                }}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={160}
                  height={80}
                  style={{
                    objectFit: "contain",
                    height: "100%",
                    maxHeight: "70px",
                    width: "auto",
                    maxWidth: "150px",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
