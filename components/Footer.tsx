import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="footer-main"
      style={{
        background: "transparent",
        color: "#151515",
        padding: "4rem 1.5rem 2rem",
        marginTop: "4rem",
        borderTop: "1px solid rgba(0,0,0,0.07)",
      }}
    >
      <style>{`
        .footer-link {
          color: rgba(0,0,0,0.55);
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.2s;
        }
        .footer-link:hover { color: #514EA7; }
        .social-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(81,78,167,0.07);
          border: 1px solid rgba(81,78,167,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(0,0,0,0.5);
          transition: all 0.2s;
          text-decoration: none;
        }
        .social-btn:hover {
          background: #514EA7;
          color: white;
          border-color: #514EA7;
        }
        .email-link {
          font-size: 0.85rem;
          color: #151515;
          text-decoration: none;
          font-weight: 500;
        }
        .email-link:hover { text-decoration: underline; }
        @media (max-width: 640px) {
          .footer-main { padding: 2rem 1.5rem 1.5rem !important; }
          .footer-grid { gap: 2rem !important; }
          .footer-nav-list { flex-direction: row !important; flex-wrap: wrap !important; gap: 0.4rem 1.2rem !important; }
          .footer-contact-gap { gap: 0.7rem !important; }
          .footer-social-section { margin-top: 1.25rem !important; }
          .footer-bottom { padding-top: 1rem !important; }
        }
      `}</style>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Main footer grid */}
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          {/* Left column - Brand */}
          <div>
            <Link href="/">
              <Image
                src="https://static.wixstatic.com/media/e968e8_fe235eb8c0274b7da7629349555cf638~mv2.png/v1/crop/x_173,y_167,w_683,h_621/fill/w_218,h_198,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%20ANTILLES%20SALONS.png"
                alt="Antilles Salons"
                width={140}
                height={128}
                style={{
                  height: "70px",
                  width: "auto",
                  marginBottom: "1rem",
                }}
              />
            </Link>
            <p
              style={{
                color: "rgba(0,0,0,0.55)",
                fontSize: "0.9rem",
                lineHeight: 1.6,
                maxWidth: "300px",
                marginTop: "1rem",
              }}
            >
              Organisateur de salons professionnels et séminaires en Martinique &amp; Guadeloupe
            </p>
            <nav style={{ marginTop: "1.5rem" }}>
              <ul className="footer-nav-list" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {[
                  { label: "Accueil", href: "/" },
                  { label: "À propos", href: "/about" },
                  { label: "Nos services", href: "/services" },
                  { label: "Contact", href: "/contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="footer-link">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Right column - Contact */}
          <div>
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                marginBottom: "1.25rem",
                fontFamily: "var(--font-wix-display), sans-serif",
                color: "#151515",
              }}
            >
              En savoir plus?
            </h3>

            <div className="footer-contact-gap" style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {/* Phone */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                <span style={{ color: "#514EA7", marginTop: "2px" }}>
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </span>
                <div>
                  <p style={{ color: "rgba(0,0,0,0.4)", fontSize: "0.75rem", marginBottom: "0.25rem" }}>Téléphone</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                    <a href="tel:0596612121" style={{ color: "#151515", textDecoration: "none", fontSize: "0.88rem" }}>05 96 61 21 21</a>
                    <a href="tel:0696263096" style={{ color: "#151515", textDecoration: "none", fontSize: "0.88rem" }}>06 96 26 30 96</a>
                    <a href="tel:0696334700" style={{ color: "#151515", textDecoration: "none", fontSize: "0.88rem" }}>06 96 33 47 00</a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                <span style={{ color: "#514EA7", marginTop: "2px" }}>
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </span>
                <div>
                  <p style={{ color: "rgba(0,0,0,0.4)", fontSize: "0.75rem", marginBottom: "0.15rem" }}>Email</p>
                  <a href="mailto:organisation@antillessalons.com" className="email-link">
                    organisation@antillessalons.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                <span style={{ color: "#514EA7", marginTop: "2px" }}>
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </span>
                <div>
                  <p style={{ color: "rgba(0,0,0,0.4)", fontSize: "0.75rem", marginBottom: "0.15rem" }}>Adresse</p>
                  <p style={{ color: "#151515", fontSize: "0.88rem", lineHeight: 1.5 }}>
                    Centre Commercial de Bellevue<br />97200 Fort-de-France
                  </p>
                </div>
              </div>
            </div>

            {/* Social — Facebook, Instagram, YouTube uniquement */}
            <div className="footer-social-section" style={{ marginTop: "2rem" }}>
              <h4 style={{ fontSize: "0.85rem", fontWeight: 600, color: "rgba(0,0,0,0.45)", marginBottom: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Suivez-nous
              </h4>
              <div style={{ display: "flex", gap: "0.75rem" }}>
                {/* Facebook */}
                <a href="https://www.facebook.com/profile.php?id=61582440343280" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-btn">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                {/* Instagram */}
                <a href="https://www.instagram.com/antillessalons/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-btn">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                {/* YouTube */}
                <a href="https://www.youtube.com/@AntillesSalons" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-btn">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="footer-bottom"
          style={{
            borderTop: "1px solid rgba(0,0,0,0.07)",
            paddingTop: "1.5rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <p style={{ color: "rgba(0,0,0,0.35)", fontSize: "0.8rem" }}>
            © {new Date().getFullYear()} Antilles Salons. Tous droits réservés.
          </p>
          <p style={{ color: "rgba(0,0,0,0.25)", fontSize: "0.75rem" }}>
            Martinique &amp; Guadeloupe
          </p>
        </div>
      </div>
    </footer>
  );
}
