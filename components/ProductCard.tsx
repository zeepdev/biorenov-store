"use client";

import React, { useState } from "react";
import { Product } from "@/data/products";
import { useCart } from "@/lib/cart-context";
import { Heart, ShoppingBag, Check, MessageCircle, Star } from "lucide-react";

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

  const pixPrice = product.price * 0.95;
  const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(
    product.whatsappMessage
  )}`;

  return (
    <div className="group flex flex-col bg-transparent">
      {/* Image Container (Verdora & Lunara Style) */}
      <div className="relative aspect-[4/5] w-full rounded-2xl bg-[#efece4] overflow-hidden flex items-center justify-center p-6 border border-[#e8e4db] group-hover:border-[#dcd6c9] transition-colors">
        
        {/* Minimalist Badge (Lunara Style: "NEW" / "BEST SELLER") */}
        {product.badge && (
          <span className="absolute top-3.5 left-3.5 z-10 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-white/95 text-[#1e2420] shadow-xs backdrop-blur-xs">
            {product.badge}
          </span>
        )}

        {/* Favorite Heart Icon (Verdora & Velvetique Style) */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3.5 right-3.5 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-stone-600 transition-colors shadow-xs"
          aria-label="Favoritar produto"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isFavorite ? "fill-[#8d5b3a] text-[#8d5b3a]" : "text-stone-500"
            }`}
          />
        </button>

        {/* Real Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Quick Add Overlay on Hover */}
        <button
          onClick={handleAdd}
          className="absolute bottom-3 left-3 right-3 py-3 rounded-xl bg-[#1e3324] hover:bg-[#132218] text-white text-xs font-medium tracking-wide flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md translate-y-2 group-hover:translate-y-0"
        >
          {added ? (
            <>
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Adicionado à Sacola</span>
            </>
          ) : (
            <>
              <ShoppingBag className="w-4 h-4" />
              <span>Adicionar à Sacola</span>
            </>
          )}
        </button>
      </div>

      {/* Product Details (Lunara Style - Clean & Editorial) */}
      <div className="pt-4 flex flex-col flex-1">
        {/* Category / Subtitle */}
        <div className="flex items-center justify-between text-[11px] text-[#717a73] tracking-wide mb-1">
          <span className="uppercase font-medium">{product.volume}</span>
          <div className="flex items-center gap-1 text-[#8d5b3a]">
            <Star className="w-3 h-3 fill-current" />
            <span className="font-semibold text-stone-700">{product.rating}</span>
          </div>
        </div>

        {/* Title in Editorial Serif */}
        <h3 className="font-serif text-xl text-[#1e2420] group-hover:text-[#2d4734] transition-colors leading-snug font-normal">
          {product.name}
        </h3>

        {/* Short Subtitle */}
        <p className="text-xs text-[#5f6761] line-clamp-1 mt-0.5 mb-2">
          {product.subtitle}
        </p>

        {/* Price Section */}
        <div className="mt-auto pt-2 flex items-baseline justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-base font-semibold text-[#1e2420]">
              R$ {product.price.toFixed(2).replace(".", ",")}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-stone-400 line-through">
                R$ {product.originalPrice.toFixed(2).replace(".", ",")}
              </span>
            )}
          </div>
          
          <span className="text-[11px] text-[#2d4734] font-medium">
            R$ {pixPrice.toFixed(2).replace(".", ",")} no Pix
          </span>
        </div>

        {/* Mobile Action Button (visible on mobile where hover doesn't exist) */}
        <div className="pt-3 grid grid-cols-2 gap-2 sm:hidden">
          <button
            onClick={handleAdd}
            className="py-2.5 rounded-lg bg-[#1e3324] text-white text-xs font-medium flex items-center justify-center gap-1.5"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Comprar</span>
          </button>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 rounded-lg bg-[#f0ece3] text-[#1e2420] text-xs font-medium flex items-center justify-center gap-1.5"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#2d4734]" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
