# CLAUDE.md — Antilles Salons

Instructions pour Claude Code lors des interventions sur ce projet.

## Contexte

Site Next.js pour **Antilles Salons** — agence événementielle spécialisée dans l'organisation de salons en Martinique et Guadeloupe. Fondée et dirigée par **Arnaud Valère**.

Site de référence original : https://www.antillessalons.com (Wix Studio)

---

## Architecture

```
app/
├── page.tsx                  # Accueil
├── about/page.tsx            # À propos
├── services/page.tsx         # Liste services
├── services/[slug]/page.tsx  # Détail service (4 slugs)
├── contact/page.tsx          # Formulaire de contact
├── api/contact/route.ts      # API d'envoi d'emails (Resend)
└── globals.css               # Design system global

components/
├── Header.tsx                # Navigation fixe + hamburger mobile
└── Footer.tsx                # Footer avec coordonnées et réseaux sociaux
```

## Design system

- **Police principale** : Wix Madefor Display (titres) + Wix Madefor Text (corps) — Google Fonts
- **Couleur primaire** : `#514EA7` (violet/bleu)
- **Texte foncé** : `#151515`
- **Background clair** : `#F6F6F6`
- **Gradient background** : radial blobs orange (`rgba(247,156,13,0.18)`), vert (`rgba(76,175,80,0.18)`), violet en haut — appliqué globalement via `body` dans `globals.css`
- **Boutons** : `.btn-primary` (violet plein, `border-radius: 9999px`) et `.btn-outline`
- **Eyebrows** : `.eyebrow` (uppercase, letter-spacing, couleur primaire)

## Informations de contact

- **Adresse** : Centre Commercial de Bellevue, 97200 Fort-de-France
- **Téléphones** : 05 96 61 21 21 — 06 96 26 30 96 — 06 96 33 47 00
- **Email** : organisation@antillessalons.com
- **Facebook** : https://www.facebook.com/profile.php?id=61582440343280
- **Instagram** : https://www.instagram.com/antillessalons/
- **YouTube** : https://www.youtube.com/@AntillesSalons

## Nos salons (liens externes)

| Salon | URL |
|-------|-----|
| Salon du Mariage de Martinique | https://www.salondumariagemartinique.com/ |
| Salon des CHR de Martinique | https://www.salondeschrmartinique.com/ |
| Salon des CSE & COS de Martinique | https://www.salondescemartinique.com/ |
| Salon des CSE & COS de Guadeloupe | https://www.salondesceguadeloupe.com/ |
| Séminaire Antillais des CSE & COS | https://www.seminaireantillaisdescse.com/ |

## Images

Toutes les images sont hébergées sur le CDN Wix (`static.wixstatic.com`), déclaré dans `next.config.ts`. Ne pas déplacer vers `/public` sauf si demandé explicitement.

## Emails (Resend)

- API route : `app/api/contact/route.ts`
- Variables dans `.env.local` (ne pas committer) : `RESEND_API_KEY`, `RESEND_FROM`, `OWNER_EMAIL`
- À chaque soumission : email de confirmation au visiteur + récap à l'organisateur

## Règles importantes

- Ne pas modifier `.env.local` (clés secrètes)
- Ne pas committer `.env.local` (déjà dans `.gitignore`)
- Conserver le style inline (pas de migration vers Tailwind classes pures) — le projet utilise intentionnellement des styles inline pour la précision pixel-perfect
- Les réseaux sociaux n'apparaissent **que dans le footer**, pas dans le header
- Le header sur **mobile** = hamburger uniquement ; sur **desktop** = liens nav + bouton CTA
