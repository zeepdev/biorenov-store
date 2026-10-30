"use client";

import React, { useState } from "react";
import { Product } from "@/data/products";
import { useCart } from "@/lib/cart-context";
import { Heart, Star, Check } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <div className="group bg-white border border-stone-200 rounded-lg p-5 flex flex-col items-center text-center relative hover:shadow-lg transition-all duration-300">
      
      {/* Favorite Heart Icon (Velvetique style - top right) */}
      <button
        onClick={() => setIsFavorite(!isFavorite)}
        className="absolute top-4 right-4 z-10 p-1.5 text-stone-400 hover:text-[#b4536a] transition-colors cursor-pointer"
        aria-label="Favoritar produto"
      >
        <Heart
          className={`w-4 h-4 transition-colors ${
            isFavorite ? "fill-[#b4536a] text-[#b4536a]" : "text-stone-400"
          }`}
        />
      </button>

      {/* Product Image (Centered with light background) */}
      <div className="relative aspect-square w-full max-w-[210px] overflow-hidden flex items-center justify-center p-3 mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-48 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      {/* Product Title */}
      <h3 className="font-sans text-xs sm:text-sm font-semibold text-stone-900 group-hover:text-[#b4536a] transition-colors line-clamp-2 min-h-[38px] leading-snug">
        {product.name}
      </h3>

      {/* Price */}
      <div className="mt-1 mb-2 flex items-center gap-2">
        {product.originalPrice && (
          <span className="text-xs text-stone-400 line-through">
            R$ {product.originalPrice.toFixed(0)}
          </span>
        )}
        <span className="text-sm sm:text-base font-bold text-[#b4536a]">
          R$ {product.price.toFixed(2).replace(".", ",")}
        </span>
      </div>

      {/* Star Ratings (Velvetique style: 5 stars + review count) */}
      <div className="flex items-center gap-1.5 mb-4">
        <div className="flex text-amber-500">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-current" />
          ))}
        </div>
        <span className="text-[11px] text-stone-500 font-medium">
          ({product.reviewsCount})
        </span>
      </div>

      {/* Velvetique Style "ADD TO CART" Button */}
      <button
        onClick={handleAdd}
        className={`w-full py-2.5 rounded-md text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5 ${
          added
            ? "bg-emerald-700 text-white"
            : "bg-[#b4536a] hover:bg-[#9c4357] text-white shadow-2xs"
        }`}
      >
        {added ? (
          <>
            <Check className="w-4 h-4" />
            <span>Adicionado!</span>
          </>
        ) : (
          <span>Adicionar à Sacola</span>
        )}
      </button>

    </div>
  );
}
