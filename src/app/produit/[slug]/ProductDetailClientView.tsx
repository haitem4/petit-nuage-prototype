"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MOCK_PRODUCTS } from "@/data/mockProducts";
import { Star, ShieldCheck, Truck, RefreshCw, MessageCircle, ShoppingBag, Check, ChevronRight } from "lucide-react";

export default function ProductDetailClientView({ slug }: { slug: string }) {
  // Fallback to first product if not found
  const product = MOCK_PRODUCTS.find((p) => p.slug === slug) || MOCK_PRODUCTS[0];

  const [selectedImage, setSelectedImage] = useState(product.gallery[0] || product.image);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || "");
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || "");
  const [quantity, setQuantity] = useState(1);
  const [addedToast, setAddedToast] = useState(false);

  const handleAddToCart = () => {
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 3500);
  };

  const whatsappMessage = encodeURIComponent(
    `Bonjour Petit Nuage, je souhaite commander l'article : "${product.name}" (Couleur: ${selectedColor}, Taille: ${selectedSize}, Qté: ${quantity}) au prix de ${product.price.toFixed(2)} €.`
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-baby-muted">
        <Link href="/" className="hover:text-baby-sky">Accueil</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href={`/collections/${product.categorySlug}`} className="hover:text-baby-sky">{product.category}</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-baby-slate font-semibold truncate max-w-xs">{product.name}</span>
      </nav>

      {/* Main Product Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left: Gallery */}
        <div className="lg:col-span-6 space-y-4">
          <div className="aspect-square rounded-3xl overflow-hidden border border-baby-skySoft bg-baby-cream shadow-sm relative">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-full object-cover transition-all duration-300"
            />
            {product.isBestSeller && (
              <span className="absolute top-4 left-4 bg-baby-pink text-baby-slate text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                Coup de Cœur Mamans
              </span>
            )}
          </div>

          {/* Thumbnails */}
          {product.gallery.length > 1 && (
            <div className="flex gap-3">
              {product.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(img)}
                  className={`w-20 h-20 rounded-2xl overflow-hidden border-2 transition ${
                    selectedImage === img ? "border-baby-sky ring-2 ring-baby-sky/30" : "border-baby-skySoft opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt={`Vue ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Info & Actions */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <span className="text-xs font-bold text-baby-sky uppercase tracking-wider">
              {product.category}
            </span>
            <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-baby-slate mt-1">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-2 text-xs">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="font-bold text-baby-slate">{product.rating}/5</span>
              <span className="text-baby-muted">({product.reviewsCount} avis vérifiés)</span>
            </div>
          </div>

          {/* Pricing */}
          <div className="flex items-baseline gap-3 p-4 bg-baby-skySoft/40 rounded-2xl border border-baby-skySoft">
            <span className="font-heading font-extrabold text-3xl text-baby-slate">
              {product.price.toFixed(2)} €
            </span>
            {product.compareAtPrice && (
              <>
                <span className="text-base text-baby-muted line-through">
                  {product.compareAtPrice.toFixed(2)} €
                </span>
                <span className="text-xs font-bold bg-baby-pink text-baby-slate px-2 py-0.5 rounded-full">
                  Économisez {(product.compareAtPrice - product.price).toFixed(2)} €
                </span>
              </>
            )}
          </div>

          {/* Color Selector */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-baby-slate uppercase tracking-wider">
              Couleur : <span className="text-baby-sky font-semibold capitalize">{selectedColor}</span>
            </label>
            <div className="flex items-center gap-3">
              {product.colors.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setSelectedColor(c.name)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-medium transition ${
                    selectedColor === c.name
                      ? "border-baby-sky bg-baby-skySoft text-baby-slate ring-2 ring-baby-sky/20"
                      : "border-baby-skySoft bg-white text-baby-slate hover:bg-baby-cream"
                  }`}
                >
                  <span className="w-3.5 h-3.5 rounded-full border border-black/10" style={{ backgroundColor: c.hex }} />
                  {c.name}
                </button>
              ))}
            </div>
          </div>

          {/* Size Selector */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-baby-slate uppercase tracking-wider">
              Taille / Âge : <span className="text-baby-sky font-semibold">{selectedSize}</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition border ${
                    selectedSize === s
                      ? "bg-baby-slate text-white border-baby-slate"
                      : "bg-white text-baby-slate border-baby-skySoft hover:border-baby-sky"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-baby-skySoft rounded-2xl bg-white p-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-xl bg-baby-cream text-baby-slate font-bold hover:bg-baby-skySoft transition"
                >
                  -
                </button>
                <span className="w-10 text-center font-bold text-sm text-baby-slate">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-xl bg-baby-cream text-baby-slate font-bold hover:bg-baby-skySoft transition"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex-1 py-3.5 bg-baby-sky text-white font-bold rounded-2xl shadow-md shadow-baby-sky/30 hover:bg-baby-sky/90 transition flex items-center justify-center gap-2 text-sm"
              >
                <ShoppingBag className="w-4 h-4" />
                Ajouter au Panier
              </button>
            </div>

            {/* Direct WhatsApp Order */}
            <a
              href={`https://wa.me/212600000000?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold rounded-2xl hover:bg-emerald-100 transition flex items-center justify-center gap-2 text-xs"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              Commander immédiatement sur WhatsApp (0€ frais)
            </a>
          </div>

          {/* Reassurance Grid */}
          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-baby-skySoft text-xs text-baby-slate">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-baby-sky" />
              <span>Livraison en 48-72h</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-baby-pink" />
              <span>Garantie Satisfait ou Remboursé</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-baby-mint inline-block" />
              <span>100% Coton Biologique</span>
            </div>
            <div className="flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-baby-sky" />
              <span>Retours faciles 14 jours</span>
            </div>
          </div>

          {/* Description & Features */}
          <div className="space-y-3 pt-4 border-t border-baby-skySoft">
            <h3 className="font-bold text-sm text-baby-slate">Description & Conseils :</h3>
            <p className="text-xs text-baby-muted leading-relaxed">{product.description}</p>
            <ul className="space-y-1 text-xs text-baby-slate pt-2">
              {product.features.map((feat, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-baby-mint" />
                  {feat}
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>

      {/* TOAST ADDED NOTIFICATION */}
      {addedToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-white border-2 border-baby-mint rounded-2xl p-4 shadow-2xl flex items-center gap-3 animate-bounce">
          <div className="w-9 h-9 rounded-full bg-baby-mintSoft flex items-center justify-center text-emerald-600 shrink-0">
            <Check className="w-5 h-5" />
          </div>
          <div>
            <p className="font-bold text-xs text-baby-slate">Article ajouté au panier !</p>
            <p className="text-[11px] text-baby-muted">{product.name} ({selectedSize})</p>
          </div>
          <Link
            href="/panier"
            className="ml-2 px-3 py-1.5 bg-baby-sky text-white rounded-xl text-xs font-bold hover:bg-baby-sky/90"
          >
            Voir panier
          </Link>
        </div>
      )}
    </div>
  );
}
