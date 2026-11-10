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
      image: "/categorias/cat_facial.jpg",
    },
    {
      id: "terapeutico",
      label: "ALÍVIO MUSCULAR",
      image: "/categorias/cat_terapeutico.jpg",
    },
    {
      id: "capilar",
      label: "CUIDADOS CAPILARES",
      image: "/categorias/cat_capilar.jpg",
    },
    {
      id: "perfumaria",
      label: "PERFUMARIA BOTÂNICA",
      image: "/categorias/cat_perfumaria.jpg",
    },
    {
      id: "solar",
      label: "PROTEÇÃO SOLAR",
      image: "/categorias/cat_solar.jpg",
    },
    {
      id: "kits",
      label: "KITS DE TRATAMENTO",
      image: "/categorias/cat_kits.jpg",
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

      {/* 6 Circular Category Pods (Fills edge-to-edge with no inner squares) */}
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
              {/* Perfect Velvetique Circle: edge-to-edge photo fill */}
              <div
                className={`relative aspect-square w-24 sm:w-32 md:w-36 rounded-full overflow-hidden shadow-xs border transition-all duration-300 ${
                  isSelected
                    ? "border-[#b4536a] ring-3 ring-[#b4536a] ring-offset-2 scale-105 shadow-md"
                    : "border-stone-200/90 hover:border-[#b4536a]/50 group-hover:scale-105 group-hover:shadow-md"
                }`}
              >
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Category Label */}
              <span
                className={`text-[10px] sm:text-xs mt-3 font-semibold uppercase tracking-wider transition-colors line-clamp-1 ${
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
