"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Heart, ShieldCheck, Truck, Star, MessageCircle, Gift } from "lucide-react";
import { CATEGORIES, MOCK_PRODUCTS } from "@/data/mockProducts";
import { ProductCard } from "@/components/ProductCard";

export default function HomePage() {
  const bestSellers = MOCK_PRODUCTS.filter((p) => p.isBestSeller);
  const newArrivals = MOCK_PRODUCTS.filter((p) => p.isNew || !p.isBestSeller).slice(0, 4);

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-baby-skySoft/60 via-baby-pinkSoft/30 to-baby-cream py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Pitch */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-baby-sky/30 shadow-xs backdrop-blur-xs text-xs font-semibold text-baby-slate">
                <Sparkles className="w-3.5 h-3.5 text-baby-sky" />
                Collection Douceur Bébé 0-12 Mois
              </div>

              <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-baby-slate leading-tight tracking-tight">
                Le cocon de tendresse que votre bébé mérite.
              </h1>

              <p className="text-base sm:text-lg text-baby-muted max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Des matières 100% Coton Biologique certifiées OEKO-TEX, des coupes pensées pour le confort de bébé et la sérénité des jeunes parents.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/collections/sommeil-et-nids"
                  className="w-full sm:w-auto px-8 py-3.5 bg-baby-sky text-white font-bold rounded-2xl shadow-md shadow-baby-sky/30 hover:bg-baby-sky/90 hover:scale-[1.02] transition duration-200 flex items-center justify-center gap-2"
                >
                  Découvrir la collection
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="https://wa.me/212600000000?text=Bonjour%20Petit Nuage,%20je%20souhaite%20commander%20pour%20mon%20bébé"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 bg-white text-baby-slate font-bold rounded-2xl border border-baby-skySoft hover:bg-baby-skySoft/50 transition duration-200 flex items-center justify-center gap-2 shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-500" />
                  Commander sur WhatsApp
                </a>
              </div>

              {/* Trust micro-stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-baby-sky/20 max-w-lg mx-auto lg:mx-0 text-center">
                <div>
                  <p className="font-heading font-extrabold text-xl text-baby-slate">100%</p>
                  <p className="text-xs text-baby-muted">Coton Bio OEKO-TEX</p>
                </div>
                <div>
                  <p className="font-heading font-extrabold text-xl text-baby-slate">4.9/5</p>
                  <p className="text-xs text-baby-muted">Avis Mamans</p>
                </div>
                <div>
                  <p className="font-heading font-extrabold text-xl text-baby-slate">48-72h</p>
                  <p className="text-xs text-baby-muted">Livraison Rapide</p>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Mockup */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm sm:max-w-md">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-baby-cream relative">
                  <img
                    src="https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&q=80&w=800"
                    alt="Bébé Petit Nuage"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-baby-slate/40 via-transparent to-transparent" />
                  
                  {/* Floating badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-baby-skySoft flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-baby-sky uppercase">Best-Seller</span>
                      <p className="font-bold text-xs text-baby-slate">Gigoteuse Cocon Coton Bio</p>
                      <p className="font-extrabold text-sm text-baby-slate">24,99 €</p>
                    </div>
                    <Link
                      href="/produit/gigoteuse-coton-bio-soleil"
                      className="px-3 py-1.5 bg-baby-sky text-white rounded-xl text-xs font-bold hover:bg-baby-sky/90"
                    >
                      Voir
                    </Link>
                  </div>
                </div>

                {/* Decorative blob behind */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-baby-pink/30 rounded-full blur-2xl -z-10" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-baby-sky/30 rounded-full blur-2xl -z-10" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs font-bold text-baby-sky uppercase tracking-wider">Univers Bébé</span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-baby-slate">
            Parcourez nos collections douces
          </h2>
          <p className="text-sm text-baby-muted">Tout le nécessaire pour les premiers mois de votre trésor</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/collections/${cat.slug}`}
              className="group baby-card bg-white rounded-3xl p-5 border border-baby-skySoft overflow-hidden flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-baby-cream">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-full text-[10px] font-bold text-baby-slate">
                  {cat.itemCount} articles
                </div>
              </div>
              <div>
                <h3 className="font-heading font-bold text-base text-baby-slate group-hover:text-baby-sky transition">
                  {cat.name}
                </h3>
                <p className="text-xs text-baby-muted mt-1 line-clamp-2">
                  {cat.description}
                </p>
              </div>
              <div className="pt-3 mt-3 border-t border-baby-skySoft/60 flex items-center justify-between text-xs font-bold text-baby-sky">
                <span>Découvrir</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold text-baby-pink uppercase tracking-wider">Nos favoris</span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-baby-slate">
              Les Coups de Cœur des Parents
            </h2>
          </div>
          <Link
            href="/collections/sommeil-et-nids"
            className="text-xs font-bold text-baby-sky hover:underline flex items-center gap-1"
          >
            Voir tout le catalogue <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bestSellers.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </section>

      {/* REASSURANCE BANNER PROMO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-baby-skySoft via-baby-pinkSoft to-baby-mintSoft p-8 sm:p-12 border border-white shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 bg-white px-3 py-1 rounded-full text-xs font-bold text-baby-slate shadow-2xs">
              <Gift className="w-3.5 h-3.5 text-baby-pink" />
              Offre de Lancement Spéciale
            </div>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-baby-slate">
              10% de réduction immédiate sur votre 1ère commande
            </h3>
            <p className="text-xs sm:text-sm text-baby-muted">
              Utilisez le code promo exclusif <span className="font-bold text-baby-slate bg-white px-2 py-0.5 rounded border border-baby-pink">NUAGE10</span> lors du paiement.
            </p>
          </div>
          <Link
            href="/collections/vetements-0-12m"
            className="px-8 py-3.5 bg-baby-slate text-white font-bold rounded-2xl hover:bg-baby-slate/90 transition shadow-md whitespace-nowrap text-sm"
          >
            En profiter maintenant
          </Link>
        </div>
      </section>

      {/* CUSTOMER REVIEWS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs font-bold text-amber-500 uppercase tracking-wider">Témoignages</span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-baby-slate">
            Ce que disent les jeunes mamans
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-baby-skySoft space-y-3">
            <div className="flex items-center text-amber-400 gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-xs text-baby-slate leading-relaxed italic">
              « La gigoteuse est incroyablement douce ! Mon petit Léo y passe toutes ses nuits au chaud sans transpirer. Qualité irréprochable et livraison très rapide. »
            </p>
            <div className="pt-2 border-t border-baby-skySoft/50 flex items-center justify-between text-xs">
              <span className="font-bold text-baby-slate">Camille D.</span>
              <span className="text-baby-muted text-[11px]">Maman de Léo (3 mois)</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-baby-skySoft space-y-3">
            <div className="flex items-center text-amber-400 gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-xs text-baby-slate leading-relaxed italic">
              « J'ai commandé directement via WhatsApp en quelques secondes. Le service client a été adorable et les couleurs pastels sont magnifiques en vrai. »
            </p>
            <div className="pt-2 border-t border-baby-skySoft/50 flex items-center justify-between text-xs">
              <span className="font-bold text-baby-slate">Sarah M.</span>
              <span className="text-baby-muted text-[11px]">Maman de Jade (6 mois)</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-baby-skySoft space-y-3">
            <div className="flex items-center text-amber-400 gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-xs text-baby-slate leading-relaxed italic">
              « Le coffret vaisselle en silicone adhère parfaitement à la chaise haute. Fini les assiettes renversées ! Je recommande à 100% Petit Nuage. »
            </p>
            <div className="pt-2 border-t border-baby-skySoft/50 flex items-center justify-between text-xs">
              <span className="font-bold text-baby-slate">Inès B.</span>
              <span className="text-baby-muted text-[11px]">Maman de Noam (8 mois)</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

