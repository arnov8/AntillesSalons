import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { type, name, phone, email, interests } = body;

  if (!name || !email) {
    return NextResponse.json({ error: "Champs requis manquants." }, { status: 400 });
  }

  const interestsList =
    Array.isArray(interests) && interests.length > 0
      ? interests.map((i: string) => `• ${i}`).join("<br/>")
      : "Non précisé";

  try {
    // 1. Email de confirmation au visiteur
    await resend.emails.send({
      from: process.env.RESEND_FROM ?? "Antilles Salons <onboarding@resend.dev>",
      to: email,
      subject: "Votre demande a bien été reçue — Antilles Salons",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;">
          <div style="text-align:center;margin-bottom:28px;">
            <img src="https://static.wixstatic.com/media/e968e8_fe235eb8c0274b7da7629349555cf638~mv2.png/v1/crop/x_173,y_167,w_683,h_621/fill/w_218,h_198,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%20ANTILLES%20SALONS.png" alt="Antilles Salons" style="height:64px;" />
          </div>
          <h2 style="color:#514EA7;margin-bottom:8px;">Merci pour votre demande, ${name}&nbsp;!</h2>
          <p style="color:#444;line-height:1.7;">
            Nous avons bien reçu votre message et vous recontacterons très prochainement.
          </p>
          <div style="background:#f8f8ff;border-left:4px solid #514EA7;padding:16px 20px;border-radius:8px;margin:24px 0;">
            <p style="margin:0 0 10px;font-weight:bold;color:#151515;">Récapitulatif de votre demande :</p>
            <p style="margin:4px 0;color:#555;"><strong>Profil :</strong> ${type || "Non précisé"}</p>
            <p style="margin:4px 0;color:#555;"><strong>Téléphone :</strong> ${phone || "Non renseigné"}</p>
            <p style="margin:4px 0;color:#555;"><strong>Intérêts :</strong><br/>${interestsList}</p>
          </div>
          <hr style="border:none;border-top:1px solid #eee;margin:24px 0;" />
          <p style="color:#888;font-size:0.85rem;line-height:1.7;">
            📍 Centre Commercial de Bellevue, 97200 Fort-de-France<br/>
            📞 05 96 61 21 21 — 06 96 26 30 96 — 06 96 33 47 00<br/>
            ✉️ organisation@antillessalons.com
          </p>
          <p style="color:#514EA7;font-size:0.8rem;margin-top:16px;">© Antilles Salons — Martinique &amp; Guadeloupe</p>
        </div>
      `,
    });

    // 2. Récapitulatif à l'organisateur
    await resend.emails.send({
      from: process.env.RESEND_FROM ?? "Antilles Salons <onboarding@resend.dev>",
      to: process.env.OWNER_EMAIL ?? "organisation@antillessalons.com",
      replyTo: email,
      subject: `📩 Nouvelle demande — ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;">
          <h2 style="color:#514EA7;">Nouvelle demande de contact</h2>
          <table style="width:100%;border-collapse:collapse;margin-top:16px;">
            <tr style="border-bottom:1px solid #eee;">
              <td style="padding:10px;font-weight:bold;color:#333;width:140px;">Nom</td>
              <td style="padding:10px;color:#555;">${name}</td>
            </tr>
            <tr style="border-bottom:1px solid #eee;">
              <td style="padding:10px;font-weight:bold;color:#333;">Email</td>
              <td style="padding:10px;color:#555;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr style="border-bottom:1px solid #eee;">
              <td style="padding:10px;font-weight:bold;color:#333;">Téléphone</td>
              <td style="padding:10px;color:#555;">${phone || "—"}</td>
            </tr>
            <tr style="border-bottom:1px solid #eee;">
              <td style="padding:10px;font-weight:bold;color:#333;">Profil</td>
              <td style="padding:10px;color:#555;">${type || "—"}</td>
            </tr>
            <tr>
              <td style="padding:10px;font-weight:bold;color:#333;vertical-align:top;">Intérêts</td>
              <td style="padding:10px;color:#555;">${interestsList}</td>
            </tr>
          </table>
          <p style="margin-top:20px;color:#aaa;font-size:0.8rem;">
            Envoyé depuis le formulaire de contact d'antillessalons.com
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur Resend:", error);
    return NextResponse.json({ error: "Erreur lors de l'envoi." }, { status: 500 });
  }
}
