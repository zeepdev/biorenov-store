"use client";

import React from "react";

interface CategoryCirclesProps {
  onSelectCategory: (categoryId: string) => void;
  selectedCategory: string;
}

export function CategoryCircles({ onSelectCategory, selectedCategory }: CategoryCirclesProps) {
  const categories = [
    {
      id: "facial",
      label: "SKINCARE",
      image: "/produtos/goforever/biolumini-creme-clareador-e-rejuvenescedor-50g-biorenov.png",
    },
    {
      id: "terapeutico",
      label: "ALÍVIO MUSCULAR",
      image: "/produtos/goforever/dorless-creme-corporal-relaxante-muscular-240g_2.png",
    },
    {
      id: "capilar",
      label: "CUIDADOS CAPILARES",
      image: "/produtos/goforever/bio-detox-dual-sense-argila-verde-2-em-1-cabelo-e-rosto-150ml-biorenov.png",
    },
    {
      id: "perfumaria",
      label: "PERFUMARIA BOTÂNICA",
      image: "/produtos/goforever/body-splash-bio-raspberry-100ml-biorenov.png",
    },
    {
      id: "solar",
      label: "PROTEÇÃO SOLAR",
      image: "/produtos/goforever/dorless-suncare-hidratante-corporal-pre-sol-120ml.png",
    },
    {
      id: "kits",
      label: "KITS DE TRATAMENTO",
      image: "/produtos/goforever/dorless-pedra-pomes-creme-esfoliante-para-os-pes-240g_1.png",
    },
  ];

  return (
    <section id="categorias" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title with pink underline (Creamy Skincare Style) */}
      <div className="text-center mb-10 sm:mb-12">
        <span className="text-[11px] font-black uppercase tracking-widest text-[#b4536a] block mb-1">
          Explore por Necessidade
        </span>
        <h2 className="font-heading font-black text-2xl sm:text-3xl text-stone-900 tracking-tight uppercase">
          Categorias em Destaque
        </h2>
        <div className="w-14 h-1 bg-[#b4536a] mx-auto mt-3 rounded-full" />
      </div>

      {/* 6 Circular Category Pods (Clean floating bottles inside pastel circle) */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-5 sm:gap-6 justify-items-center">
        {categories.map((cat, idx) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={idx}
              onClick={() => {
                onSelectCategory(cat.id);
                const el = document.getElementById("produtos");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex flex-col items-center group cursor-pointer text-center w-full max-w-[140px]"
            >
              {/* Perfect Creamy Circle: pastel background with floating packshot */}
              <div
                className={`relative aspect-square w-24 sm:w-28 md:w-32 rounded-full overflow-hidden transition-all duration-300 flex items-center justify-center p-3 sm:p-4 ${
                  isSelected
                    ? "bg-pink-100/80 border-2 border-[#b4536a] ring-3 ring-[#b4536a]/30 scale-105 shadow-md"
                    : "bg-[#fcf8f6] border border-stone-200/90 hover:border-[#b4536a]/50 hover:bg-pink-50/40 group-hover:scale-105 group-hover:shadow-md"
                }`}
              >
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-sm"
                  loading="lazy"
                />
              </div>

              {/* Category Label */}
              <span
                className={`text-[10px] sm:text-xs mt-3 font-heading font-bold uppercase tracking-wider transition-colors line-clamp-1 ${
                  isSelected ? "text-[#b4536a]" : "text-stone-700 group-hover:text-[#b4536a]"
                }`}
              >
                {cat.label}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
