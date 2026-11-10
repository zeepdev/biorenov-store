"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Product } from "@/data/products";
import { useCart } from "@/lib/cart-context";
import { Heart, Star, Check, ShoppingBag, Eye } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem, setIsCheckoutOpen } = useCart();
  const [added, setAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  const handleBuyNow = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="group bg-white border border-stone-200/90 rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center relative hover:shadow-xl hover:border-pink-200 transition-all duration-300">
      
      {/* Badge (if any) */}
      {product.badge && (
        <span className="absolute top-3 left-3 z-10 bg-[#b4536a] text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-2xs">
          {product.badge}
        </span>
      )}

      {/* Favorite Heart Icon */}
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsFavorite(!isFavorite);
        }}
        className="absolute top-3 right-3 z-10 p-1.5 text-stone-400 hover:text-[#b4536a] transition-colors cursor-pointer"
        aria-label="Favoritar produto"
      >
        <Heart
          className={`w-4 h-4 transition-colors ${
            isFavorite ? "fill-[#b4536a] text-[#b4536a]" : "text-stone-400"
          }`}
        />
      </button>

      {/* Product Image Link to PDP */}
      <Link
        href={`/produto/${product.id}`}
        className="relative aspect-square w-full max-w-[210px] overflow-hidden flex items-center justify-center p-3 mb-3 cursor-pointer"
      >
        <img
          src={product.image}
          alt={product.name}
          className="max-h-48 w-auto object-contain group-hover:scale-108 transition-transform duration-300"
          loading="lazy"
        />
      </Link>

      {/* Product Title Link to PDP */}
      <Link
        href={`/produto/${product.id}`}
        className="font-heading font-bold text-xs sm:text-sm text-stone-900 group-hover:text-[#b4536a] transition-colors line-clamp-2 min-h-[38px] leading-snug cursor-pointer tracking-tight"
      >
        {product.name}
      </Link>

      {/* Price */}
      <div className="mt-1 mb-2 flex items-center gap-2">
        {product.originalPrice && (
          <span className="text-xs text-stone-400 line-through font-semibold">
            R$ {product.originalPrice.toFixed(0)}
          </span>
        )}
        <span className="text-base sm:text-lg font-black text-[#b4536a] tracking-tight">
          R$ {product.price.toFixed(2).replace(".", ",")}
        </span>
      </div>

      {/* Star Ratings */}
      <div className="flex items-center gap-1.5 mb-3">
        <div className="flex text-amber-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-current" />
          ))}
        </div>
        <span className="text-[11px] text-stone-500 font-bold">
          ({product.reviewsCount})
        </span>
      </div>

      {/* Dual CTAs: Buy Now + Add to Bag */}
      <div className="w-full space-y-2 mt-auto">
        <button
          onClick={handleAdd}
          className={`w-full py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5 shadow-xs ${
            added
              ? "bg-emerald-600 text-white"
              : "bg-[#b4536a] hover:bg-[#9c4357] text-white hover:shadow-md"
          }`}
        >
          {added ? (
            <>
              <Check className="w-4 h-4" />
              <span>Adicionado!</span>
            </>
          ) : (
            <>
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Adicionar à Sacola</span>
            </>
          )}
        </button>

        <Link
          href={`/produto/${product.id}`}
          className="w-full py-2 rounded-full text-[11px] font-bold text-stone-700 hover:text-[#b4536a] hover:bg-pink-50/50 transition-colors flex items-center justify-center gap-1 border border-stone-200 cursor-pointer"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Ver Detalhes & Fotos</span>
        </Link>
      </div>

    </div>
  );
}
