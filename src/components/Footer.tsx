import React from "react";
import Link from "next/link";
import { Sun, Heart, ShieldCheck, Truck, Clock, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-baby-skySoft mt-20">
      {/* Reassurance Bar */}
      <div className="border-b border-baby-skySoft/60 bg-baby-skySoft/30 py-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-baby-sky/20 flex items-center justify-center text-baby-slate shrink-0">
              <Truck className="w-5 h-5 text-baby-sky" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-baby-slate">Livraison Rapide</h4>
              <p className="text-xs text-baby-muted">Suivie en 48-72h</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-baby-pink/20 flex items-center justify-center text-baby-slate shrink-0">
              <ShieldCheck className="w-5 h-5 text-baby-pink" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-baby-slate">Paiement 100% Sécurisé</h4>
              <p className="text-xs text-baby-muted">PayPal, CB & Chiffrement SSL</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-baby-mint/20 flex items-center justify-center text-baby-slate shrink-0">
              <Heart className="w-5 h-5 text-baby-mint" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-baby-slate">Coton Bio OEKO-TEX</h4>
              <p className="text-xs text-baby-muted">Respectueux de la peau de bébé</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-baby-sky/20 flex items-center justify-center text-baby-slate shrink-0">
              <MessageCircle className="w-5 h-5 text-baby-sky" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-baby-slate">Assistance WhatsApp</h4>
              <p className="text-xs text-baby-muted">Réponse 7j/7 sous 2h</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-baby-sky to-baby-pink flex items-center justify-center">
              <Sun className="w-4 h-4 text-white" />
            </div>
            <span className="font-heading font-bold text-lg text-baby-slate">
              Petit Nuage & Co
            </span>
          </div>
          <p className="text-xs text-baby-muted leading-relaxed">
            La boutique en ligne dédiée à la tendresse et au bien-être de bébé de 0 à 12 mois. Matières saines, finitions soignées et univers pastel réconfortant.
          </p>

          {/* Social Links */}
          <div className="pt-2">
            <p className="text-xs font-semibold text-baby-slate mb-2">Suivez-nous :</p>
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-baby-pinkSoft hover:bg-baby-pink flex items-center justify-center transition text-baby-slate"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-baby-skySoft hover:bg-baby-sky flex items-center justify-center transition text-baby-slate"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* TikTok */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-baby-mintSoft hover:bg-baby-mint flex items-center justify-center transition text-baby-slate"
                aria-label="TikTok"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01-.03 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-sm text-baby-slate mb-3">Collections Bébé</h4>
          <ul className="space-y-2 text-xs text-baby-muted">
            <li><Link href="/collections/vetements-0-12m" className="hover:text-baby-sky">Vêtements 0-12 mois</Link></li>
            <li><Link href="/collections/sommeil-et-nids" className="hover:text-baby-sky">Gigoteuses & Nids d'ange</Link></li>
            <li><Link href="/collections/eveil-et-doudous" className="hover:text-baby-sky">Doudous & Hochets</Link></li>
            <li><Link href="/collections/repas-et-bavoirs" className="hover:text-baby-sky">Repas & Vaisselle silicone</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm text-baby-slate mb-3">Service & Garanties</h4>
          <ul className="space-y-2 text-xs text-baby-muted">
            <li>Livraison offerte dès 70€</li>
            <li>Retours simples sous 14 jours</li>
            <li>Conseils personnalisés sur WhatsApp</li>
            <li>Paiement sécurisé en Euros (€)</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm text-baby-slate mb-3">Besoin d'aide ?</h4>
          <p className="text-xs text-baby-muted mb-3">
            Notre équipe est à votre écoute pour préparer l'arrivée de bébé avec tendresse.
          </p>
          <a
            href="https://wa.me/212600000000?text=Bonjour%20Petit Nuage,%20j'ai%20une%20question"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-xl border border-emerald-200 hover:bg-emerald-100 transition"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            Contacter sur WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-baby-skySoft/60 py-4 text-center text-xs text-baby-muted">
        © 2026 Petit Nuage & Co. Tous droits réservés. Prototype de présentation client.
      </div>
    </footer>
  );
}

