"use client";

import React, { useState } from "react";
import { Product } from "@/data/products";
import { useCart } from "@/lib/cart-context";
import { Star, Check, ShoppingBag, MessageCircle, Zap } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

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
    <div className="group relative flex flex-col bg-white rounded-3xl border border-[#e6e2d8] overflow-hidden hover:shadow-xl transition-all duration-300">
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5 items-start">
        {product.badge && (
          <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#183324] text-[#f9f8f5] shadow-sm">
            {product.badge}
          </span>
        )}
        {product.originalPrice && (
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#8d5b3a] text-white">
            ECONOMIZE R$ {(product.originalPrice - product.price).toFixed(0)}
          </span>
        )}
      </div>

      {/* Image container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f0eee9]">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-semibold text-[#183324] border border-[#e6e2d8]">
          {product.volume}
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-2">
          <div className="flex text-amber-600">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current" />
            ))}
          </div>
          <span className="text-xs font-semibold text-stone-900">{product.rating}</span>
          <span className="text-xs text-stone-400">({product.reviewsCount})</span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-xl font-bold text-[#183324] group-hover:text-[#8d5b3a] transition-colors leading-snug">
          {product.name}
        </h3>

        {/* Subtitle / Indication */}
        <p className="text-xs text-[#8d5b3a] font-medium mt-1 mb-2 line-clamp-1">
          {product.subtitle}
        </p>

        {/* Description snippet */}
        <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-3">
          {product.description}
        </p>

        {/* Active Ingredients Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {product.activeIngredients.slice(0, 3).map((act, i) => (
            <span
              key={i}
              className="text-[10px] px-2 py-0.5 rounded-md bg-[#f9f8f5] text-stone-600 border border-[#e6e2d8]"
            >
              {act}
            </span>
          ))}
        </div>

        {/* Price & Dual CTA Section */}
        <div className="mt-auto pt-4 border-t border-stone-100 flex flex-col gap-3">
          <div>
            <div className="flex items-baseline gap-2">
              {product.originalPrice && (
                <span className="text-xs text-stone-400 line-through">
                  R$ {product.originalPrice.toFixed(2).replace(".", ",")}
                </span>
              )}
              <span className="text-2xl font-bold text-[#183324]">
                R$ {product.price.toFixed(2).replace(".", ",")}
              </span>
            </div>
            <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-800 mt-0.5">
              <Zap className="w-3 h-3 text-emerald-700 fill-current" />
              <span>R$ {pixPrice.toFixed(2).replace(".", ",")} no Pix (5% OFF)</span>
            </div>
          </div>

          {/* D2C Action: Direct Cart Add */}
          <button
            onClick={handleAdd}
            className={`w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
              added
                ? "bg-emerald-700 text-white"
                : "bg-[#183324] text-[#f9f8f5] hover:bg-[#12261b] shadow-sm hover:shadow"
            }`}
          >
            {added ? (
              <>
                <Check className="w-4 h-4" />
                Adicionado à Sacola!
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                Comprar no Site
              </>
            )}
          </button>

          {/* WhatsApp Concierge Action */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-stone-700 bg-[#f9f8f5] hover:bg-[#f0eee9] border border-[#e6e2d8] flex items-center justify-center gap-1.5 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#587d65]" />
            <span>Pedir via WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
