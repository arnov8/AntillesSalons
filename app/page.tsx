import Image from "next/image";
import Link from "next/link";

const events = [
  {
    title: "Le Salon du Mariage de Martinique",
    type: "Salon grand public",
    description:
      "Le rendez-vous incontournable des futurs mariés en Martinique. Rencontrez les meilleurs prestataires du mariage antillais.",
    image:
      "https://static.wixstatic.com/media/e968e8_0e6631b6033f4600bbbb695079dada78~mv2.jpg/v1/fill/w_996,h_986,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Visuel%20du%20Salon%20du%20Mariage%20de%20Martinique.jpg",
    href: "https://www.salondumariagemartinique.com/",
  },
  {
    title: "Le Salon des CHR de Martinique",
    type: "Salon professionnel",
    description:
      "Le salon dédié aux professionnels de la restauration, hôtellerie et cafés en Martinique. Échangez, découvrez, innovez.",
    image:
      "https://static.wixstatic.com/media/e968e8_f26ffa84ca164126b13a537906ea8187~mv2.jpg/v1/fill/w_996,h_986,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Visuel%20du%20Salon%20des%20CHR%20de%20Martinique.jpg",
    href: "https://www.salondeschrmartinique.com/",
  },
  {
    title: "Le Salon des CSE & COS de Martinique",
    type: "Salon professionnel",
    description:
      "Le salon des Comités Sociaux et Économiques de Martinique. Profitez des meilleures offres pour vos salariés.",
    image:
      "https://static.wixstatic.com/media/e968e8_5565f2229a3b404fa5f4c1aa41ce536b~mv2.jpg/v1/fill/w_996,h_986,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Visuel%20du%20Salon%20des%20CSE%20%26%20COS%20de%20Martinique_edited.jpg",
    href: "https://www.salondescemartinique.com/",
  },
  {
    title: "Le Salon des CSE & COS de Guadeloupe",
    type: "Salon professionnel",
    description:
      "Le salon des Comités Sociaux et Économiques de Guadeloupe. Un événement unique pour les entreprises guadeloupéennes.",
    image:
      "https://static.wixstatic.com/media/e968e8_417649edb33b43a5ba1a81a7c81512ab~mv2.jpg/v1/fill/w_996,h_986,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Visuel%20du%20Salon%20des%20CSE%20%26%20COS%20de%20Guadeloupe.jpg",
    href: "https://www.salondesceguadeloupe.com/",
  },
  {
    title: "Le Séminaire Antillais des CSE & COS",
    type: "Séminaire",
    description:
      "Le séminaire de référence pour les acteurs des CSE et COS des Antilles. Formations, conférences et networking.",
    image:
      "https://static.wixstatic.com/media/e968e8_50669cd696804e768e221e89c885f78a~mv2.jpg/v1/fill/w_996,h_986,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Visuel%20du%20S%C3%A9minaire%20Antillais%20des%20CSE%20%26%20COS.jpg",
    href: "https://www.seminaireantillaisdescse.com/",
  },
];

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

const benefits = [
  {
    title: "Visibilité",
    description:
      "Accédez à un public large et ciblé, avec des milliers de visiteurs qui viennent spécifiquement pour découvrir des offres comme la vôtre.",
    color: "#514EA7",
  },
  {
    title: "Réseautage",
    description:
      "Rencontrez des partenaires potentiels, clients et fournisseurs. Les salons sont des lieux d'échanges privilégiés pour développer votre réseau.",
    color: "#4CAF50",
  },
  {
    title: "Ventes & Leads",
    description:
      "Générez des opportunités immédiates avec des stands optimisés pour la conversion. Repartez avec des contacts qualifiés et des ventes réalisées.",
    color: "#F79C0D",
  },
  {
    title: "Expertise",
    description:
      "Bénéficiez de notre savoir-faire éprouvé pour un événement sans faille. Nous gérons tout pour que vous puissiez vous concentrer sur votre business.",
    color: "#514EA7",
  },
];

export default function HomePage() {
  return (
    <>
      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
        }
        @media (min-width: 768px) {
          .hero-grid { grid-template-columns: 1.1fr 0.9fr !important; }
          .hero-image-desktop { display: flex !important; }
          .hero-image-mobile { display: none !important; }
        }
      `}</style>

      {/* ─── HERO ─── */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "4rem 1.5rem 5rem" }}>
        <div className="hero-grid">
          {/* Left */}
          <div>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>BIENVENUE</p>
            <h1
              style={{
                fontFamily: "var(--font-wix-display), sans-serif",
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                fontWeight: 800,
                color: "#151515",
                lineHeight: 1.15,
                marginBottom: "1.5rem",
              }}
            >
              ANTILLES SALONS
              <br />
              <span style={{ color: "#514EA7" }}>Organisateur de salons aux Antilles</span>
            </h1>
            <p
              style={{
                fontSize: "1.05rem",
                color: "#444",
                lineHeight: 1.7,
                marginBottom: "2rem",
                maxWidth: "480px",
              }}
            >
              Nous sommes spécialisés dans l&apos;organisation de salons privés et grand public
              en Martinique et en Guadeloupe. Des événements qui réunissent exposants et visiteurs
              autour d&apos;un objectif commun.
            </p>
            <Link href="/services" className="btn-primary">
              Découvrez nos salons →
            </Link>
          </div>

          {/* Right – desktop only */}
          <div
            className="hero-image-desktop"
            style={{ display: "none", justifyContent: "center", alignItems: "center" }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: "460px",
                aspectRatio: "1 / 1",
                overflow: "hidden",
                borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                position: "relative",
              }}
            >
              <Image
                src="https://static.wixstatic.com/media/e968e8_e522b22b408346409fe39255db2c538c~mv2.jpg/v1/crop/x_196,y_601,w_2548,h_2423/fill/w_986,h_1002,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Visiteurs%20de%20salon%20d%27Antilles%20Salons_JPG.jpg"
                alt="Visiteurs de salon Antilles Salons"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </div>

        {/* Mobile image */}
        <div
          className="hero-image-mobile"
          style={{
            width: "100%",
            maxWidth: "360px",
            aspectRatio: "1 / 1",
            overflow: "hidden",
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
            position: "relative",
            margin: "2rem auto 0",
          }}
        >
          <Image
            src="https://static.wixstatic.com/media/e968e8_e522b22b408346409fe39255db2c538c~mv2.jpg/v1/crop/x_196,y_601,w_2548,h_2423/fill/w_986,h_1002,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Visiteurs%20de%20salon%20d%27Antilles%20Salons_JPG.jpg"
            alt="Visiteurs Antilles Salons"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>

      {/* ─── EVENTS ─── */}
      <section style={{ padding: "5rem 1.5rem", background: "rgba(255,255,255,0.5)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>NOS ÉVÈNEMENTS</p>
            <h2
              style={{
                fontFamily: "var(--font-wix-display), sans-serif",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 800,
                color: "#151515",
              }}
            >
              Les salons que nous organisons
            </h2>
          </div>

          {/* Flexbox pour centrer les 2 dernières cartes */}
          <style>{`
            @media (max-width: 640px) {
              .event-card { width: 100% !important; }
            }
          `}</style>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "2rem",
              justifyContent: "center",
            }}
          >
            {events.map((event, index) => (
              <div
                key={index}
                className="card-hover event-card"
                style={{
                  background: "white",
                  borderRadius: "1.5rem",
                  overflow: "hidden",
                  boxShadow: "0 2px 20px rgba(0,0,0,0.07)",
                  border: "1px solid rgba(0,0,0,0.05)",
                  width: "clamp(280px, 30%, 360px)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Image pleine largeur en haut */}
                <div style={{ position: "relative", width: "100%", aspectRatio: "16/10", overflow: "hidden" }}>
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 360px"
                  />
                </div>
                <div style={{ padding: "1.25rem 1.5rem 1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#514EA7",
                      background: "rgba(81,78,167,0.08)",
                      padding: "0.2rem 0.65rem",
                      borderRadius: "9999px",
                      alignSelf: "flex-start",
                    }}
                  >
                    {event.type}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-wix-display), sans-serif",
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      marginTop: "0.75rem",
                      marginBottom: "0.5rem",
                      color: "#151515",
                    }}
                  >
                    {event.title}
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "#666", lineHeight: 1.5, marginBottom: "1rem", flex: 1 }}>
                    {event.description}
                  </p>
                  <a
                    href={event.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      color: "#514EA7",
                      fontWeight: 600,
                      fontSize: "0.85rem",
                      textDecoration: "none",
                    }}
                  >
                    {event.type === "Séminaire" ? "Visiter le séminaire →" : "Visiter le salon →"}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SPECIALIST BANNER ─── */}
      <section
        style={{
          position: "relative",
          padding: "5rem 1.5rem",
          overflow: "hidden",
          background: "#514EA7",
          textAlign: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-50px",
            right: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
            background: "rgba(255,255,255,0.06)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            left: "-60px",
            width: "300px",
            height: "300px",
            borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
            background: "rgba(255,255,255,0.04)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", maxWidth: "800px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.6)",
              marginBottom: "1rem",
            }}
          >
            DEPUIS PLUS DE 10 ANS
          </p>
          <h2
            style={{
              fontFamily: "var(--font-wix-display), sans-serif",
              fontSize: "clamp(1.6rem, 4vw, 2.8rem)",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.2,
            }}
          >
            SPÉCIALISTE DES SALONS<br />EN MARTINIQUE &amp; GUADELOUPE
          </h2>
          <p
            style={{
              marginTop: "1.25rem",
              color: "rgba(255,255,255,0.75)",
              fontSize: "1rem",
              lineHeight: 1.7,
              maxWidth: "500px",
              margin: "1.25rem auto 0",
            }}
          >
            Des événements de qualité pensés pour les professionnels et le grand public des Antilles.
          </p>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section style={{ padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ maxWidth: "600px", marginBottom: "3.5rem" }}>
            <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>NOTRE SERVICE</p>
            <h2
              style={{
                fontFamily: "var(--font-wix-display), sans-serif",
                fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                fontWeight: 800,
                color: "#151515",
                lineHeight: 1.2,
                marginBottom: "1rem",
              }}
            >
              Mettre votre entreprise en avant lors d&apos;évènements concrets et pertinents
            </h2>
            <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: 1.7 }}>
              Exposer lors de nos salons vous permet d&apos;accroître votre visibilité, de rencontrer directement
              vos clients potentiels et de développer votre réseau professionnel en Martinique et en Guadeloupe.
              Nos événements attirent chaque année des milliers de visiteurs qualifiés.
            </p>
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
                  style={{
                    color: "#514EA7",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    textDecoration: "none",
                  }}
                >
                  Explorer →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BENEFITS ─── */}
      <section style={{ padding: "5rem 1.5rem", background: "rgba(81,78,167,0.03)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>LES AVANTAGES</p>
            <h2
              style={{
                fontFamily: "var(--font-wix-display), sans-serif",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 800,
                color: "#151515",
              }}
            >
              Participer à l&apos;un de nos salons
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="card-hover"
                style={{
                  background: "white",
                  borderRadius: "1.25rem",
                  padding: "2rem",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
                  borderTop: `3px solid ${benefit.color}`,
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-wix-display), sans-serif",
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    marginBottom: "0.75rem",
                    color: benefit.color,
                  }}
                >
                  {benefit.title}
                </h3>
                <p style={{ fontSize: "0.88rem", color: "#555", lineHeight: 1.65 }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        style={{
          padding: "6rem 1.5rem",
          textAlign: "center",
          background: "linear-gradient(135deg, #151515 0%, #2d2b5e 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(81,78,167,0.3) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", maxWidth: "600px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
              marginBottom: "1rem",
            }}
          >
            BESOIN D&apos;EN SAVOIR PLUS?
          </p>
          <h2
            style={{
              fontFamily: "var(--font-wix-display), sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "white",
              marginBottom: "1.25rem",
            }}
          >
            Vous souhaitez échanger?
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: "1rem",
              lineHeight: 1.7,
              marginBottom: "2.5rem",
              maxWidth: "450px",
              margin: "0 auto 2.5rem",
            }}
          >
            Que vous soyez exposant, visiteur ou simple curieux, notre équipe est disponible pour répondre
            à toutes vos questions sur nos évènements.
          </p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: "1rem", padding: "1rem 2.5rem" }}>
            Je prends contact →
          </Link>
        </div>
      </section>
    </>
  );
}
