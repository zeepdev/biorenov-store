"use client";

import React from "react";

interface CategoryCirclesProps {
  onSelectCategory: (categoryId: string) => void;
  selectedCategory: string;
}

export function CategoryCircles({ onSelectCategory, selectedCategory }: CategoryCirclesProps) {
  const categories = [
    {
      id: "todos",
      label: "Todos",
      image: "/produtos/dorless_render_1.png",
    },
    {
      id: "facial",
      label: "Rosto & Melasma",
      image: "/produtos/pdf_p5_img3.jpeg",
    },
    {
      id: "capilar",
      label: "Capilar & Fios",
      image: "/produtos/pdf_p5_img2.jpeg",
    },
    {
      id: "terapeutico",
      label: "Alívio Muscular",
      image: "/produtos/dorless_render_2.png",
    },
    {
      id: "perfumaria",
      label: "Perfumaria",
      image: "/produtos/perfume_photo_2.png",
    },
    {
      id: "kits",
      label: "Rituais & Kits",
      image: "/produtos/pdf_p8_img2.png",
    },
  ];

  return (
    <section id="categorias" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title with subtle underline (Velvetique style) */}
      <div className="text-center mb-10">
        <h2 className="font-serif text-2xl sm:text-3xl text-[#1e2420] tracking-tight">
          Compre por Categoria
        </h2>
        <div className="w-12 h-0.5 bg-[#8d5b3a]/40 mx-auto mt-2.5 rounded-full" />
      </div>

      {/* Circular Category Bubbles */}
      <div className="flex items-center justify-start sm:justify-center gap-6 sm:gap-10 overflow-x-auto pb-4 scrollbar-none">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => {
                onSelectCategory(cat.id);
                const el = document.getElementById("produtos");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex flex-col items-center group cursor-pointer flex-shrink-0"
            >
              {/* Circle Image Wrapper */}
              <div
                className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full p-2 flex items-center justify-center transition-all duration-300 ${
                  isSelected
                    ? "bg-[#1e3324] ring-2 ring-[#1e3324] ring-offset-2 scale-105"
                    : "bg-[#ece8df] hover:bg-[#e2ded5] group-hover:scale-105"
                }`}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-white/70 flex items-center justify-center">
                  <img
                    src={cat.image}
                    alt={cat.label}
                    className="w-full h-full object-contain p-1.5 transition-transform group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Category Label */}
              <span
                className={`text-xs mt-3 font-medium uppercase tracking-wider transition-colors ${
                  isSelected
                    ? "text-[#1e3324] font-semibold"
                    : "text-[#4a524c] group-hover:text-[#1e3324]"
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
