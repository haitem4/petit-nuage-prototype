import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PrototypeBanner } from "@/components/PrototypeBanner";

export const metadata: Metadata = {
  title: "Petit Nuage & Co | Prototype Démonstration",
  description: "Boutique en ligne d'articles de puériculture et vêtements doux pour bébé 0-12 mois.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="min-h-screen flex flex-col antialiased bg-baby-cream text-baby-slate selection:bg-baby-pinkSoft selection:text-baby-slate">
        <PrototypeBanner />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

