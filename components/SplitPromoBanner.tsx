"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export function SplitPromoBanner() {
  return (
    <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-12 rounded-xl overflow-hidden shadow-sm border border-stone-200">
        
        {/* Left Column: Dusty Rose Promo Box (Exact Velvetique Style) */}
        <div className="md:col-span-5 bg-[#9d5565] text-white p-8 sm:p-12 flex flex-col justify-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-pink-200 font-medium">
            Oferta por Tempo Limitado
          </span>

          <h3 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl leading-[1.12] tracking-tight">
            Até 30% OFF <br />
            nos Mais Vendidos
          </h3>

          <p className="text-pink-100 text-xs sm:text-sm font-normal max-w-sm leading-relaxed">
            Mais viço, firmeza e hidratação. Cuide da sua pele hoje com os protocolos biotecnológicos de Douglas Alan!
          </p>

          <div className="pt-2">
            <a
              href="#produtos"
              className="inline-block px-6 py-3 rounded-md bg-white hover:bg-pink-50 text-[#9d5565] text-xs font-bold uppercase tracking-wider transition-colors shadow-2xs"
            >
              Aproveitar Ofertas
            </a>
          </div>
        </div>

        {/* Right Column: Real Studio Photography (Click Aky) */}
        <div className="md:col-span-7 relative min-h-[320px] bg-[#f9f5f2] overflow-hidden flex items-center justify-center p-4">
          <img
            src="/produtos/aky06791.jpg"
            alt="Linha Biorenov Oficial"
            className="w-full h-full object-cover rounded-lg"
          />
          {/* Subtle overlay badge */}
          <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-xs px-4 py-2 rounded-lg text-xs font-semibold text-stone-800 shadow-md border border-stone-200">
            Fórmulas Biotecnológicas Douglas Alan
          </div>
        </div>

      </div>
    </section>
  );
}
