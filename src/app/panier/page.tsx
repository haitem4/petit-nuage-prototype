"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Trash2, ArrowRight, ShieldCheck, Truck, Tag, MessageCircle } from "lucide-react";

export default function CartPage() {
  const [items, setItems] = useState([
    {
      id: "1",
      name: "Gigoteuse Cocon Coton Bio (0-6m)",
      price: 24.99,
      size: "0-3 mois",
      color: "Bleu Ciel Pastel",
      quantity: 1,
      image: "https://images.unsplash.com/photo-1584839617966-2e840e6ebf5d?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: "2",
      name: "Ensemble Barboteuse & Bonnet Douceur",
      price: 19.99,
      size: "3 mois",
      color: "Rose Guimauve",
      quantity: 1,
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=400",
    },
  ]);

  const [promoCode, setPromoCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = discountApplied ? subtotal * 0.1 : 0;
  const shippingThreshold = 70;
  const missingForFreeShipping = Math.max(0, shippingThreshold - (subtotal - discountAmount));
  const shippingFee = missingForFreeShipping === 0 ? 0 : 4.90;
  const total = Math.max(0, subtotal - discountAmount + shippingFee);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === "NUAGE10" || promoCode.trim().toUpperCase() === "SOLEIL5") {
      setDiscountApplied(true);
    }
  };

  const updateQty = (id: string, delta: number) => {
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, quantity: Math.max(1, it.quantity + delta) } : it))
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((it) => it.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div>
        <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-baby-slate">
          Mon Panier d'Achats ({items.length})
        </h1>
        <p className="text-xs sm:text-sm text-baby-muted mt-1">
          Vérifiez vos articles avant de finaliser votre commande en toute sécurité.
        </p>
      </div>

      {/* Free shipping progress bar */}
      <div className="p-4 bg-baby-skySoft/60 border border-baby-sky/30 rounded-2xl space-y-2">
        <div className="flex items-center justify-between text-xs font-bold text-baby-slate">
          <span className="flex items-center gap-1.5">
            <Truck className="w-4 h-4 text-baby-sky" />
            {missingForFreeShipping === 0
              ? "🎉 Félicitations ! Vous bénéficiez de la Livraison Offerte !"
              : `Plus que ${missingForFreeShipping.toFixed(2)} € pour débloquer la Livraison Gratuite !`}
          </span>
          <span>{Math.min(100, Math.round((subtotal / shippingThreshold) * 100))}%</span>
        </div>
        <div className="w-full h-2 bg-white rounded-full overflow-hidden">
          <div
            className="h-full bg-baby-sky transition-all duration-500 rounded-full"
            style={{ width: `${Math.min(100, (subtotal / shippingThreshold) * 100)}%` }}
          />
        </div>
      </div>

      {items.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Cart items list */}
          <div className="lg:col-span-8 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 sm:p-5 rounded-2xl border border-baby-skySoft flex gap-4 items-center justify-between shadow-2xs"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover bg-baby-cream border border-baby-skySoft"
                />

                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-sm text-baby-slate truncate">{item.name}</h3>
                  <p className="text-xs text-baby-muted mt-0.5">
                    Taille: <span className="font-medium text-baby-slate">{item.size}</span> • Couleur:{" "}
                    <span className="font-medium text-baby-slate">{item.color}</span>
                  </p>
                  <p className="font-bold text-sm text-baby-slate mt-2">
                    {item.price.toFixed(2)} €
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-end sm:items-center gap-3">
                  <div className="flex items-center border border-baby-skySoft rounded-xl bg-baby-cream p-1">
                    <button
                      onClick={() => updateQty(item.id, -1)}
                      className="w-6 h-6 rounded bg-white font-bold text-xs text-baby-slate hover:bg-baby-skySoft"
                    >
                      -
                    </button>
                    <span className="w-8 text-center text-xs font-bold text-baby-slate">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQty(item.id, 1)}
                      className="w-6 h-6 rounded bg-white font-bold text-xs text-baby-slate hover:bg-baby-skySoft"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-2 text-baby-muted hover:text-red-500 rounded-lg hover:bg-red-50 transition"
                    title="Supprimer l'article"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white p-6 rounded-3xl border border-baby-skySoft space-y-4 shadow-xs">
              <h2 className="font-heading font-bold text-lg text-baby-slate">Récapitulatif</h2>

              {/* Promo code form */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Code promo (ex: NUAGE10)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 px-3 py-2 text-xs border border-baby-skySoft rounded-xl focus:outline-none focus:ring-2 focus:ring-baby-sky"
                />
                <button
                  type="submit"
                  className="px-3.5 py-2 bg-baby-slate text-white text-xs font-bold rounded-xl hover:bg-baby-slate/90"
                >
                  Appliquer
                </button>
              </form>

              {discountApplied && (
                <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-700 font-semibold flex items-center justify-between">
                  <span>Code NUAGE10 activé (-10%)</span>
                  <span>-{discountAmount.toFixed(2)} €</span>
                </div>
              )}

              {/* Math lines */}
              <div className="space-y-2 text-xs pt-2 border-t border-baby-skySoft/60 text-baby-slate">
                <div className="flex justify-between">
                  <span className="text-baby-muted">Sous-total</span>
                  <span className="font-bold">{subtotal.toFixed(2)} €</span>
                </div>
                {discountApplied && (
                  <div className="flex justify-between text-emerald-600">
                    <span>Remise</span>
                    <span className="font-bold">-{discountAmount.toFixed(2)} €</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-baby-muted">Frais de livraison</span>
                  <span className="font-bold">
                    {shippingFee === 0 ? <span className="text-emerald-600">Gratuit</span> : `${shippingFee.toFixed(2)} €`}
                  </span>
                </div>
                <div className="flex justify-between text-base font-extrabold pt-2 border-t border-baby-skySoft text-baby-slate">
                  <span>Total TTC</span>
                  <span>{total.toFixed(2)} €</span>
                </div>
              </div>

              {/* Checkout buttons */}
              <div className="space-y-2 pt-2">
                <Link
                  href="/checkout"
                  className="w-full py-3.5 bg-baby-sky text-white font-bold rounded-2xl shadow-md shadow-baby-sky/30 hover:bg-baby-sky/90 transition flex items-center justify-center gap-2 text-sm"
                >
                  Passer la commande
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`https://wa.me/212600000000?text=Bonjour%20Petit Nuage,%20je%20souhaite%20finaliser%20mon%20panier%20de%20${total.toFixed(2)}€`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 bg-emerald-50 text-emerald-700 font-bold rounded-xl border border-emerald-200 hover:bg-emerald-100 transition flex items-center justify-center gap-2 text-xs"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  Commander sur WhatsApp
                </a>
              </div>

              {/* Security reassurance */}
              <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-baby-muted">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Paiement crypté SSL 256 bits garanti</span>
              </div>
            </div>
          </div>

        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-3xl border border-baby-skySoft space-y-4">
          <p className="text-base font-bold text-baby-slate">Votre panier est vide</p>
          <Link
            href="/"
            className="inline-block px-6 py-2.5 bg-baby-sky text-white font-bold text-xs rounded-xl hover:bg-baby-sky/90"
          >
            Découvrir nos créations
          </Link>
        </div>
      )}
    </div>
  );
}

