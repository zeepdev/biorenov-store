"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, ShoppingBag, Check, Heart, ArrowRight } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { PRODUCTS } from "@/data/products";

export function RaspberryBannerSection() {
  const { addItem, setIsCheckoutOpen } = useCart();
  const [added, setAdded] = useState(false);

  const kitProduct = PRODUCTS.find((p) => p.id === "kit-trio-raspberry-hazelnut");

  const handleBuyKit = () => {
    if (kitProduct) {
      addItem(kitProduct);
      setAdded(true);
      setTimeout(() => {
        setAdded(false);
        setIsCheckoutOpen(true);
      }, 500);
    }
  };

  const handleAddBag = () => {
    if (kitProduct) {
      addItem(kitProduct);
      setAdded(true);
      setTimeout(() => setAdded(false), 1600);
    }
  };

  return (
    <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Container Principal Estilo Creamy Editorial */}
      <div className="bg-gradient-to-b from-[#fdf6f7] via-[#faf2f4] to-[#f7ecf0] rounded-3xl p-6 sm:p-10 border border-pink-100/80 shadow-xs space-y-8">
        
        {/* Banner Fotográfico Oficial da Campanha */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-pink-200/60 bg-white group">
          <img
            src="/banners/raspberry_hazelnut_banner.jpg"
            alt="Linha Raspberry Hazelnut Biorenov - Framboesa e Avelã"
            className="w-full h-auto object-cover max-h-[440px] transition-transform duration-700 group-hover:scale-[1.01]"
            loading="lazy"
          />

          {/* Badge Flutuante Discreto */}
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-pink-100 shadow-xs flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#c84b68] animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-wider text-[#c84b68]">
              Nova Coleção 2026
            </span>
          </div>
        </div>

        {/* Barra de Benefícios & Ação Rápida */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* 4 Pílulas de Diferenciais Estilo Creamy Skincare */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
            
            <div className="bg-white/80 backdrop-blur-xs p-3.5 rounded-2xl border border-pink-100/90 flex flex-col items-center text-center space-y-1">
              <span className="text-lg">🌸</span>
              <span className="text-[11px] font-bold text-stone-800 leading-tight">
                Perfuma na medida certa
              </span>
              <span className="text-[10px] text-stone-500">Sem sobrecarregar</span>
            </div>

            <div className="bg-white/80 backdrop-blur-xs p-3.5 rounded-2xl border border-pink-100/90 flex flex-col items-center text-center space-y-1">
              <span className="text-lg">✨</span>
              <span className="text-[11px] font-bold text-stone-800 leading-tight">
                Frescor prolongado
              </span>
              <span className="text-[10px] text-stone-500">Ao longo do dia</span>
            </div>

            <div className="bg-white/80 backdrop-blur-xs p-3.5 rounded-2xl border border-pink-100/90 flex flex-col items-center text-center space-y-1">
              <span className="text-lg">🍃</span>
              <span className="text-[11px] font-bold text-stone-800 leading-tight">
                Fórmula leve
              </span>
              <span className="text-[10px] text-stone-500">Uso diário confortável</span>
            </div>

            <div className="bg-white/80 backdrop-blur-xs p-3.5 rounded-2xl border border-pink-100/90 flex flex-col items-center text-center space-y-1">
              <span className="text-lg">💖</span>
              <span className="text-[11px] font-bold text-stone-800 leading-tight">
                Fragrância doce
              </span>
              <span className="text-[10px] text-stone-500">Moderna e marcante</span>
            </div>

          </div>

          {/* Bloco de Compra com 1 Clique */}
          <div className="lg:col-span-4 bg-white p-5 rounded-2xl border border-pink-200/80 shadow-xs flex flex-col justify-between space-y-3">
            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-stone-400 block">
                  Kit Trio Completo
                </span>
                <span className="text-xs font-semibold text-stone-700">
                  Mãos (30g) + Splash (100ml) + Colônia
                </span>
              </div>
              <div className="text-right">
                <span className="text-[11px] text-stone-400 line-through block">R$ 229,00</span>
                <span className="font-heading font-black text-xl text-[#c84b68]">R$ 189,00</span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={handleBuyKit}
                className="flex-1 py-3 px-4 rounded-full bg-[#c84b68] hover:bg-[#b03b55] text-white text-xs font-black uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Comprar Agora</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={handleAddBag}
                className="p-3 rounded-full bg-pink-50 hover:bg-pink-100 text-[#c84b68] transition-colors cursor-pointer border border-pink-200 shrink-0"
                title="Adicionar à Sacola"
              >
                {added ? <Check className="w-4 h-4 text-emerald-600" /> : <ShoppingBag className="w-4 h-4" />}
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
