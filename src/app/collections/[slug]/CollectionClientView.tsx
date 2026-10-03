"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CATEGORIES, MOCK_PRODUCTS } from "@/data/mockProducts";
import { ProductCard } from "@/components/ProductCard";
import { ArrowUpDown } from "lucide-react";

export default function CollectionClientView({ slug }: { slug: string }) {
  const currentCategory = CATEGORIES.find((c) => c.slug === slug);
  const title = currentCategory ? currentCategory.name : "Tous les Produits";
  const desc = currentCategory
    ? currentCategory.description
    : "Découvrez notre gamme complète d'articles doux et certifiés pour bébé.";

  const filteredProducts = currentCategory
    ? MOCK_PRODUCTS.filter((p) => p.categorySlug === slug)
    : MOCK_PRODUCTS;

  const [sortBy, setSortBy] = useState("featured");

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Category Header */}
      <div className="bg-gradient-to-r from-baby-skySoft via-baby-pinkSoft to-baby-cream rounded-3xl p-8 sm:p-10 border border-white text-center space-y-3">
        <span className="text-xs font-bold text-baby-sky uppercase tracking-wider">
          Collection Petit Nuage
        </span>
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-baby-slate">
          {title}
        </h1>
        <p className="text-sm text-baby-muted max-w-xl mx-auto">{desc}</p>
      </div>

      {/* Filter / Sort bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-baby-skySoft shadow-xs">
        <div className="flex items-center gap-2 text-xs text-baby-muted">
          <span className="font-bold text-baby-slate">{sortedProducts.length}</span> article(s) trouvé(s)
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <label htmlFor="sort" className="text-xs font-semibold text-baby-slate whitespace-nowrap flex items-center gap-1">
            <ArrowUpDown className="w-3.5 h-3.5 text-baby-sky" /> Trier par :
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-xs bg-baby-cream border border-baby-skySoft rounded-xl px-3 py-2 text-baby-slate focus:outline-none focus:ring-2 focus:ring-baby-sky font-medium w-full sm:w-auto"
          >
            <option value="featured">Mis en avant</option>
            <option value="price-asc">Prix : croissant</option>
            <option value="price-desc">Prix : décroissant</option>
            <option value="rating">Meilleures notes</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      {sortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-3xl border border-baby-skySoft space-y-3">
          <p className="text-base font-bold text-baby-slate">Aucun produit dans cette catégorie pour le moment</p>
          <Link href="/" className="inline-block text-xs font-bold text-baby-sky hover:underline">
            ← Retour à l'accueil
          </Link>
        </div>
      )}
    </div>
  );
}
