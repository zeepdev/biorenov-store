"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { MicrobiomeSection } from "@/components/MicrobiomeSection";
import { ProductCard } from "@/components/ProductCard";
import { BioluminiDeepDive } from "@/components/BioluminiDeepDive";
import { FounderSection } from "@/components/FounderSection";
import { RitualSection } from "@/components/RitualSection";
import { B2BSection } from "@/components/B2BSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { FaqSection } from "@/components/FaqSection";
import { CartDrawer } from "@/components/CartDrawer";
import { CheckoutModal } from "@/components/CheckoutModal";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { PRODUCTS } from "@/data/products";
import { Sparkles } from "lucide-react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("todos");

  const categories = [
    { id: "todos", label: "Todos os Tratamentos" },
    { id: "facial", label: "Facial & Alta Cosmetologia" },
    { id: "capilar", label: "Capilar & Folicular (Fator Vegano)" },
    { id: "terapeutico", label: "Terapêutico & Alívio (Dorless 240g)" },
    { id: "perfumaria", label: "Perfumaria Botânica (Framboesa Inglesa)" },
    { id: "solar", label: "Linha Solar (Dorless SunCare)" },
    { id: "kits", label: "Kits & Rituais Especiais" },
  ];

  const filteredProducts =
    selectedCategory === "todos"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* 03 Hero Section */}
        <Hero />

        {/* 04 Trust & Ethics Badges */}
        <TrustBar />

        {/* 05 O Pilar Científico: Por que Probióticos? */}
        <MicrobiomeSection />

        {/* 06 Catálogo em Destaque */}
        <section id="produtos" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#8d5b3a] font-bold mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#8d5b3a]" />
                Catálogo Oficial Biorenov | Botanic Beauty
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#183324] font-normal tracking-tight">
                Fórmulas Probióticas de Alta Performance.
              </h2>
            </div>

            <p className="text-stone-600 text-xs sm:text-sm max-w-md">
              Ativos biotecnológicos puros formulados por Douglas Alan. Pague no Pix e ganhe 5% de desconto imediato com envio seguro para todo o Brasil.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? "bg-[#183324] text-[#f9f8f5] shadow-sm"
                    : "bg-white text-stone-700 border border-[#e6e2d8] hover:bg-[#f0eee9]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* 07 Hero Product Deep-Dive: Biolumini */}
        <BioluminiDeepDive />

        {/* 08 O Fundador: Douglas Alan */}
        <FounderSection />

        {/* 09 O Ritual Diário */}
        <RitualSection />

        {/* 10 B2B: Salões & Terapeutas Capilares */}
        <B2BSection />

        {/* 11 Social Proof & Avaliações Verificadas */}
        <ReviewsSection />

        {/* 12 FAQ de Segurança e Dúvidas */}
        <FaqSection />
      </main>

      {/* 13 Footer Institucional Completo */}
      <Footer />

      {/* Conversion Overlays: Cart, Checkout Modal & WhatsApp Concierge */}
      <CartDrawer />
      <CheckoutModal />
      <FloatingWhatsApp />
    </>
  );
}
