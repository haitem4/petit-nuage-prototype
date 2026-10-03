import React from "react";
import Link from "next/link";
import { Star, ShoppingBag, Heart } from "lucide-react";
import { Product } from "@/data/mockProducts";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group baby-card bg-white rounded-2xl border border-baby-skySoft overflow-hidden flex flex-col justify-between">
      <div className="relative aspect-square overflow-hidden bg-baby-cream">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.isBestSeller && (
            <span className="bg-baby-pink text-baby-slate text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
              Coup de Cœur
            </span>
          )}
          {product.isNew && (
            <span className="bg-baby-mint text-baby-slate text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
              Nouveau
            </span>
          )}
        </div>

        {/* Quick color dots */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full shadow-xs">
          {product.colors.map((c, i) => (
            <span
              key={i}
              className="w-2.5 h-2.5 rounded-full border border-black/10"
              style={{ backgroundColor: c.hex }}
              title={c.name}
            />
          ))}
        </div>
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <span className="text-[11px] font-semibold text-baby-sky uppercase tracking-wider">
            {product.category}
          </span>
          <h3 className="font-heading font-bold text-sm text-baby-slate line-clamp-2 mt-0.5 group-hover:text-baby-sky transition">
            <Link href={`/produit/${product.slug}`}>{product.name}</Link>
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-1.5 text-xs text-amber-500">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span className="font-bold text-baby-slate">{product.rating}</span>
            <span className="text-baby-muted text-[11px]">({product.reviewsCount})</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-baby-skySoft/40">
          <div>
            <span className="text-base font-extrabold text-baby-slate">
              {product.price.toFixed(2)} €
            </span>
            {product.compareAtPrice && (
              <span className="text-xs text-baby-muted line-through ml-2">
                {product.compareAtPrice.toFixed(2)} €
              </span>
            )}
          </div>

          <Link
            href={`/produit/${product.slug}`}
            className="p-2 rounded-xl bg-baby-skySoft hover:bg-baby-sky hover:text-white text-baby-slate transition shadow-xs"
            title="Voir le produit"
          >
            <ShoppingBag className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

