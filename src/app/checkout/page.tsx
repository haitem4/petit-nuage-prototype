"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShieldCheck, Lock, CreditCard, CheckCircle2, ArrowLeft, MessageCircle } from "lucide-react";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState<"card" | "paypal" | "whatsapp">("card");
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    email: "sarah.maman@example.com",
    firstName: "Sarah",
    lastName: "Dupont",
    address: "14 Rue des Lilas",
    postalCode: "75015",
    city: "Paris",
    country: "France",
    phone: "06 12 34 56 78",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center space-y-6">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
            Prototype - Commande Confirmée
          </span>
          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-baby-slate">
            Merci pour votre commande !
          </h1>
          <p className="text-xs sm:text-sm text-baby-muted max-w-md mx-auto">
            Votre commande fictive <strong>#SOL-2026-DEMO</strong> a été validée avec succès. Un e-mail de confirmation a été simulé à destination de <strong>{formData.email}</strong>.
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-baby-skySoft text-left space-y-3 shadow-xs">
          <h3 className="font-bold text-sm text-baby-slate border-b border-baby-skySoft pb-2">
            Détails de la commande de démonstration
          </h3>
          <div className="grid grid-cols-2 gap-4 text-xs text-baby-slate">
            <div>
              <p className="text-baby-muted">Adresse de livraison :</p>
              <p className="font-semibold">{formData.firstName} {formData.lastName}</p>
              <p>{formData.address}</p>
              <p>{formData.postalCode} {formData.city}, {formData.country}</p>
            </div>
            <div>
              <p className="text-baby-muted">Mode de paiement :</p>
              <p className="font-semibold capitalize">{paymentMethod === "card" ? "Carte Bancaire Sécurisée" : paymentMethod}</p>
              <p className="text-baby-muted mt-2">Montant total :</p>
              <p className="font-extrabold text-sm text-baby-slate">49,88 €</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4 pt-4">
          <Link
            href="/"
            className="px-6 py-3 bg-baby-sky text-white font-bold rounded-2xl text-xs hover:bg-baby-sky/90 transition shadow-xs"
          >
            Retourner à l'accueil du prototype
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="flex items-center justify-between">
        <Link href="/panier" className="inline-flex items-center gap-2 text-xs font-bold text-baby-sky hover:underline">
          <ArrowLeft className="w-4 h-4" /> Retour au panier
        </Link>
        <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
          <Lock className="w-3.5 h-3.5" /> Paiement Sécurisé SSL
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Form */}
        <div className="lg:col-span-7 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Step 1: Contact */}
            <div className="bg-white p-6 rounded-3xl border border-baby-skySoft space-y-4 shadow-xs">
              <h2 className="font-heading font-bold text-base text-baby-slate flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-baby-skySoft text-baby-slate text-xs flex items-center justify-center font-extrabold">1</span>
                Informations de contact
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-baby-slate mb-1">Email pour le suivi *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-baby-cream border border-baby-skySoft rounded-xl focus:outline-none focus:ring-2 focus:ring-baby-sky"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-baby-slate mb-1">Téléphone (SMS de livraison) *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-baby-cream border border-baby-skySoft rounded-xl focus:outline-none focus:ring-2 focus:ring-baby-sky"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Shipping */}
            <div className="bg-white p-6 rounded-3xl border border-baby-skySoft space-y-4 shadow-xs">
              <h2 className="font-heading font-bold text-base text-baby-slate flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-baby-skySoft text-baby-slate text-xs flex items-center justify-center font-extrabold">2</span>
                Adresse de livraison
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-baby-slate mb-1">Prénom *</label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-baby-cream border border-baby-skySoft rounded-xl focus:outline-none focus:ring-2 focus:ring-baby-sky"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-baby-slate mb-1">Nom *</label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-baby-cream border border-baby-skySoft rounded-xl focus:outline-none focus:ring-2 focus:ring-baby-sky"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-baby-slate mb-1">Adresse *</label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-baby-cream border border-baby-skySoft rounded-xl focus:outline-none focus:ring-2 focus:ring-baby-sky"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-baby-slate mb-1">Code Postal *</label>
                  <input
                    type="text"
                    required
                    value={formData.postalCode}
                    onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-baby-cream border border-baby-skySoft rounded-xl focus:outline-none focus:ring-2 focus:ring-baby-sky"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-baby-slate mb-1">Ville *</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-baby-cream border border-baby-skySoft rounded-xl focus:outline-none focus:ring-2 focus:ring-baby-sky"
                  />
                </div>
              </div>
            </div>

            {/* Step 3: Payment */}
            <div className="bg-white p-6 rounded-3xl border border-baby-skySoft space-y-4 shadow-xs">
              <h2 className="font-heading font-bold text-base text-baby-slate flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-baby-skySoft text-baby-slate text-xs flex items-center justify-center font-extrabold">3</span>
                Mode de règlement
              </h2>

              <div className="space-y-3">
                {/* Credit card */}
                <label
                  onClick={() => setPaymentMethod("card")}
                  className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition ${
                    paymentMethod === "card"
                      ? "border-baby-sky bg-baby-skySoft/30 ring-2 ring-baby-sky/20"
                      : "border-baby-skySoft hover:bg-baby-cream"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "card"}
                      onChange={() => setPaymentMethod("card")}
                      className="text-baby-sky"
                    />
                    <span className="font-bold text-xs text-baby-slate">Carte Bancaire (Visa, Mastercard, CB)</span>
                  </div>
                  <CreditCard className="w-5 h-5 text-baby-sky" />
                </label>

                {/* PayPal */}
                <label
                  onClick={() => setPaymentMethod("paypal")}
                  className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition ${
                    paymentMethod === "paypal"
                      ? "border-baby-sky bg-baby-skySoft/30 ring-2 ring-baby-sky/20"
                      : "border-baby-skySoft hover:bg-baby-cream"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "paypal"}
                      onChange={() => setPaymentMethod("paypal")}
                      className="text-baby-sky"
                    />
                    <span className="font-bold text-xs text-baby-slate">PayPal Smart Checkout</span>
                  </div>
                  <span className="font-extrabold text-blue-700 italic text-sm">PayPal</span>
                </label>

                {/* WhatsApp */}
                <label
                  onClick={() => setPaymentMethod("whatsapp")}
                  className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition ${
                    paymentMethod === "whatsapp"
                      ? "border-emerald-400 bg-emerald-50/40 ring-2 ring-emerald-300"
                      : "border-baby-skySoft hover:bg-baby-cream"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "whatsapp"}
                      onChange={() => setPaymentMethod("whatsapp")}
                      className="text-emerald-500"
                    />
                    <span className="font-bold text-xs text-baby-slate">Finalisation Assistée sur WhatsApp</span>
                  </div>
                  <MessageCircle className="w-5 h-5 text-emerald-600" />
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-baby-sky text-white font-bold rounded-2xl shadow-lg shadow-baby-sky/30 hover:bg-baby-sky/90 transition text-sm flex items-center justify-center gap-2 mt-4"
              >
                <ShieldCheck className="w-4 h-4" />
                Confirmer et Payer (Démo) • 49,88 €
              </button>
            </div>
          </form>
        </div>

        {/* Right: Sticky order recap */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white p-6 rounded-3xl border border-baby-skySoft space-y-4 shadow-xs sticky top-28">
            <h3 className="font-heading font-bold text-base text-baby-slate">Articles commandés (2)</h3>

            <div className="space-y-3 text-xs text-baby-slate border-b border-baby-skySoft pb-4">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-baby-skySoft text-[11px] font-bold flex items-center justify-center">1</span>
                  <span>Gigoteuse Cocon Coton Bio (0-3m)</span>
                </div>
                <span className="font-bold">24,99 €</span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-baby-skySoft text-[11px] font-bold flex items-center justify-center">1</span>
                  <span>Ensemble Barboteuse Douceur (3m)</span>
                </div>
                <span className="font-bold">19,99 €</span>
              </div>
            </div>

            <div className="space-y-2 text-xs text-baby-slate">
              <div className="flex justify-between">
                <span className="text-baby-muted">Sous-total</span>
                <span>44,98 €</span>
              </div>
              <div className="flex justify-between">
                <span className="text-baby-muted">Frais de livraison (Standard 48-72h)</span>
                <span>4,90 €</span>
              </div>
              <div className="flex justify-between text-base font-extrabold text-baby-slate pt-2 border-t border-baby-skySoft">
                <span>Total à régler</span>
                <span>49,88 €</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

