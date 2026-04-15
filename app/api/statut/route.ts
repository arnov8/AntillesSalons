import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const PIN = "8291";

interface FormConfig {
  nom: string;
  route: string;
  api: string;
  sheetInfo: string;
}

interface FormResult {
  config: FormConfig;
  email: { ok: boolean; detail: string };
  googleSheet: { ok: boolean; detail: string };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { pin } = body;

    if (pin !== PIN) {
      return NextResponse.json({ error: "Code PIN invalide." }, { status: 401 });
    }

    // --- Environment variables ---
    const envVars = {
      RESEND_API_KEY: process.env.RESEND_API_KEY
        ? `✅ Définie (${process.env.RESEND_API_KEY.slice(0, 8)}...)`
        : "❌ Non définie",
      RESEND_FROM: process.env.RESEND_FROM || "⚠️ Non définie (défaut: Antilles Salons <organisation@antillessalons.com>)",
      OWNER_EMAIL: process.env.OWNER_EMAIL || "⚠️ Non définie (défaut: organisation@antillessalons.com)",
    };

    // --- Email test via Resend ---
    let emailResult: { ok: boolean; detail: string };

    if (!process.env.RESEND_API_KEY) {
      emailResult = { ok: false, detail: "RESEND_API_KEY non définie" };
    } else {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const ownerEmail = process.env.OWNER_EMAIL ?? "organisation@antillessalons.com";
        const fromEmail = process.env.RESEND_FROM ?? "Antilles Salons <organisation@antillessalons.com>";

        const { data, error } = await resend.emails.send({
          from: fromEmail,
          to: ownerEmail,
          subject: "✅ Test Statut — Antilles Salons",
          html: `
            <div style="font-family:Arial,sans-serif;max-width:500px;margin:0 auto;padding:24px;">
              <h2 style="color:#514EA7;">Test de la page Statut</h2>
              <p style="color:#555;">Cet email confirme que l'envoi via <strong>Resend</strong> fonctionne correctement pour le site Antilles Salons.</p>
              <p style="color:#aaa;font-size:0.8rem;">Envoyé le ${new Date().toLocaleString("fr-FR", { timeZone: "America/Martinique" })}</p>
            </div>
          `,
        });

        if (error) {
          emailResult = { ok: false, detail: error.message };
        } else {
          emailResult = { ok: true, detail: `Email envoyé (id: ${data?.id})` };
        }
      } catch (err) {
        emailResult = {
          ok: false,
          detail: err instanceof Error ? err.message : "Erreur inconnue",
        };
      }
    }

    // --- Form result ---
    const contact: FormResult = {
      config: {
        nom: "Formulaire Contact",
        route: "/contact",
        api: "/api/contact",
        sheetInfo: "Pas de Google Sheets — emails uniquement",
      },
      email: emailResult,
      googleSheet: { ok: true, detail: "Non utilisé" },
    };

    return NextResponse.json({
      ok: emailResult.ok,
      timestamp: new Date().toISOString(),
      envVars,
      forms: { contact },
    });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Erreur serveur" },
      { status: 500 }
    );
  }
}
