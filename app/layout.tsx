import type { Metadata } from "next";
import { Wix_Madefor_Display, Wix_Madefor_Text } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const wixDisplay = Wix_Madefor_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-wix-display",
  display: "swap",
});

const wixText = Wix_Madefor_Text({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-wix-text",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Antilles Salons - Organisateur de salons en Martinique & Guadeloupe",
  description:
    "Antilles Salons est spécialisé dans l'organisation de salons privés et grand public en Martinique et en Guadeloupe.",
  keywords: "salons, Martinique, Guadeloupe, événements, exposants, mariage, CHR, CSE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${wixDisplay.variable} ${wixText.variable}`}>
      <body style={{ fontFamily: "var(--font-wix-text), sans-serif" }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
