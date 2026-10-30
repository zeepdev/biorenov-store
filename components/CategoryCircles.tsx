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
      image: "/produtos/pdf_p5_img3.jpeg",
    },
    {
      id: "terapeutico",
      label: "ALÍVIO MUSCULAR",
      image: "/produtos/dorless_render_1.png",
    },
    {
      id: "capilar",
      label: "CUIDADOS CAPILARES",
      image: "/produtos/pdf_p5_img2.jpeg",
    },
    {
      id: "facial",
      label: "ALTA COSMETOLOGIA",
      image: "/produtos/pdf_p5_img1.jpeg",
    },
    {
      id: "solar",
      label: "PROTEÇÃO SOLAR",
      image: "/produtos/pdf_p6_img1.jpeg",
    },
    {
      id: "kits",
      label: "KITS DE TRATAMENTO",
      image: "/produtos/pdf_p8_img2.png",
    },
  ];

  return (
    <section id="categorias" className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title with pink underline (Exact Velvetique Style) */}
      <div className="text-center mb-10">
        <h2 className="font-serif text-2xl sm:text-3xl text-stone-900 tracking-wider uppercase font-normal">
          Shop by Category
        </h2>
        <div className="w-14 h-0.5 bg-[#b4536a] mx-auto mt-2 rounded-full" />
      </div>

      {/* 6 Circular Category Pods */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 sm:gap-6 justify-items-center">
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
              className="flex flex-col items-center group cursor-pointer text-center"
            >
              {/* Soft Pink Circle Wrapper */}
              <div
                className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full p-2.5 flex items-center justify-center transition-all duration-300 ${
                  isSelected
                    ? "bg-[#b4536a] ring-2 ring-[#b4536a] ring-offset-2 scale-105 shadow-md"
                    : "bg-[#f9ece8] hover:bg-[#f4ded9] group-hover:scale-105"
                }`}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center p-2 shadow-2xs">
                  <img
                    src={cat.image}
                    alt={cat.label}
                    className="w-full h-full object-contain transition-transform group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Label */}
              <span
                className={`text-[11px] sm:text-xs mt-3 font-semibold uppercase tracking-wider transition-colors ${
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
