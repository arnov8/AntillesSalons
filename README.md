# Antilles Salons — Site Web

Site officiel d'**Antilles Salons**, organisateur de salons professionnels et grand public en **Martinique & Guadeloupe**.

Construit avec **Next.js 16** (App Router, Turbopack), design fidèle au site original Wix Studio.

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Accueil — hero, événements, services, avantages, CTA |
| `/about` | À propos — histoire, stats, partenaires exposants |
| `/services` | Liste des services |
| `/services/[slug]` | Détail service (visibilité, prospects, réseautage, leads) |
| `/contact` | Formulaire de contact avec envoi d'emails via Resend |

---

## Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Wix Madefor Display / Text** (Google Fonts)
- **Resend** — envoi d'emails transactionnels
- **Lucide React** — icônes

---

## Démarrage local

```bash
npm install
npm run dev
# → http://localhost:3000
```

---

## Configuration emails (Resend)

Crée un fichier `.env.local` à la racine :

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
RESEND_FROM=Antilles Salons <organisation@antillessalons.com>
OWNER_EMAIL=organisation@antillessalons.com
```

> Le domaine `antillessalons.com` doit être vérifié dans [Resend → Domains](https://resend.com/domains).

---

## Déploiement

Le site est prêt pour un déploiement sur **Vercel** :

```bash
npx vercel --prod
```

Ajoute les variables d'environnement `RESEND_API_KEY`, `RESEND_FROM` et `OWNER_EMAIL` dans les settings du projet Vercel.

---

## Nos salons

- [Salon du Mariage de Martinique](https://www.salondumariagemartinique.com/)
- [Salon des CHR de Martinique](https://www.salondeschrmartinique.com/)
- [Salon des CSE & COS de Martinique](https://www.salondescemartinique.com/)
- [Salon des CSE & COS de Guadeloupe](https://www.salondesceguadeloupe.com/)
- [Séminaire Antillais des CSE & COS](https://www.seminaireantillaisdescse.com/)

---

© Antilles Salons — Martinique & Guadeloupe
