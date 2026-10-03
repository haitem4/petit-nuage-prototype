"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShoppingBag, Heart, Search, User, Menu, X, Sun } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-baby-skySoft">
      {/* Top reassurance ticker */}
      <div className="bg-baby-skySoft/60 text-baby-slate py-1.5 px-4 text-center text-xs font-medium border-b border-baby-sky/20">
        ✨ <strong>Livraison Offerte</strong> dès 70€ d&apos;achats • Cadeau de bienvenue : Code <span className="bg-white px-1.5 py-0.5 rounded font-bold text-baby-slate border border-baby-pink">NUAGE10</span> (-10%)
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-baby-slate hover:text-baby-sky transition"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-baby-sky via-baby-pink to-baby-mint flex items-center justify-center shadow-md shadow-baby-sky/30 group-hover:scale-105 transition duration-300">
              <Sun className="w-6 h-6 text-white animate-spin-slow" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-xl sm:text-2xl tracking-tight text-baby-slate">
                Petit Nuage
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-widest text-baby-muted uppercase -mt-1">
                Baby & Co
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-baby-slate">
            <Link href="/" className="hover:text-baby-sky transition duration-200">
              Accueil
            </Link>
            <Link href="/collections/vetements-0-12m" className="hover:text-baby-sky transition duration-200">
              Vêtements (0-12m)
            </Link>
            <Link href="/collections/sommeil-et-nids" className="hover:text-baby-sky transition duration-200">
              Sommeil & Nids
            </Link>
            <Link href="/collections/eveil-et-doudous" className="hover:text-baby-sky transition duration-200">
              Éveil & Doudous
            </Link>
            <Link href="/collections/repas-et-bavoirs" className="hover:text-baby-sky transition duration-200">
              Repas & Bavoirs
            </Link>
          </nav>

          {/* Action Icons */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <Link
              href="/panier"
              className="relative p-2.5 rounded-full bg-baby-skySoft/60 text-baby-slate hover:bg-baby-sky hover:text-white transition duration-200 shadow-sm"
              title="Panier d'achats"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-baby-pink text-baby-slate font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow">
                2
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-baby-skySoft bg-white px-4 pt-3 pb-6 space-y-3">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-baby-slate hover:bg-baby-skySoft"
          >
            Accueil
          </Link>
          <Link
            href="/collections/vetements-0-12m"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-baby-slate hover:bg-baby-skySoft"
          >
            Vêtements (0-12m)
          </Link>
          <Link
            href="/collections/sommeil-et-nids"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-baby-slate hover:bg-baby-skySoft"
          >
            Sommeil & Nids
          </Link>
          <Link
            href="/collections/eveil-et-doudous"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-baby-slate hover:bg-baby-skySoft"
          >
            Éveil & Doudous
          </Link>
          <Link
            href="/collections/repas-et-bavoirs"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-baby-slate hover:bg-baby-skySoft"
          >
            Repas & Bavoirs
          </Link>
        </div>
      )}
    </header>
  );
}

