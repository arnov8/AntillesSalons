"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/about" },
  { label: "Nos services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(81,78,167,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "64px",
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center" }}>
            <Image
              src="https://static.wixstatic.com/media/e968e8_fe235eb8c0274b7da7629349555cf638~mv2.png/v1/crop/x_173,y_167,w_683,h_621/fill/w_218,h_198,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%20ANTILLES%20SALONS.png"
              alt="Antilles Salons"
              width={110}
              height={100}
              style={{ height: "52px", width: "auto", objectFit: "contain" }}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: "0.45rem 1rem",
                  borderRadius: "9999px",
                  fontWeight: 500,
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  transition: "all 0.18s",
                  color: pathname === link.href ? "#514EA7" : "#333",
                  background: pathname === link.href ? "rgba(81,78,167,0.08)" : "transparent",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-primary"
              style={{ fontSize: "0.85rem", padding: "0.45rem 1.2rem", marginLeft: "0.5rem" }}
            >
              Nous contacter
            </Link>
          </nav>

          {/* Hamburger button (mobile) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="hamburger-btn"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              color: "#151515",
              display: "none",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="Menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile overlay menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999,
            background: "rgba(255,255,255,0.97)",
            backdropFilter: "blur(20px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "1.5rem",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#151515",
            }}
            aria-label="Fermer"
          >
            <X size={32} />
          </button>

          <Link href="/" onClick={() => setMenuOpen(false)}>
            <Image
              src="https://static.wixstatic.com/media/e968e8_fe235eb8c0274b7da7629349555cf638~mv2.png/v1/crop/x_173,y_167,w_683,h_621/fill/w_218,h_198,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%20ANTILLES%20SALONS.png"
              alt="Antilles Salons"
              width={140}
              height={128}
              style={{ height: "70px", width: "auto" }}
            />
          </Link>

          <nav style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 700,
                  color: pathname === link.href ? "#514EA7" : "#151515",
                  textDecoration: "none",
                  fontFamily: "var(--font-wix-display), sans-serif",
                  transition: "color 0.2s",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="btn-primary"
            style={{ marginTop: "1rem", fontSize: "1rem", padding: "0.875rem 2rem" }}
          >
            Nous contacter
          </Link>
        </div>
      )}

      {/* Spacer for fixed header */}
      <div style={{ height: "64px" }} />

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
