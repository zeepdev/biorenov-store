"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { CategoryCircles } from "@/components/CategoryCircles";
import { ProductCard } from "@/components/ProductCard";
import { BioluminiDeepDive } from "@/components/BioluminiDeepDive";
import { FounderSection } from "@/components/FounderSection";
import { BannerQuote } from "@/components/BannerQuote";
import { B2BSection } from "@/components/B2BSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { FaqSection } from "@/components/FaqSection";
import { CartDrawer } from "@/components/CartDrawer";
import { CheckoutModal } from "@/components/CheckoutModal";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { PRODUCTS } from "@/data/products";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("todos");

  const filteredProducts =
    selectedCategory === "todos"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* 01 Hero Section (Verdora / Lunara Style) */}
        <Hero />

        {/* 02 Trust & Benefits Card (Floating Card Style) */}
        <TrustBar />

        {/* 03 Shop by Category (Velvetique Style) */}
        <CategoryCircles
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* 04 Main Product Grid ("Shop Our Favorites" Verdora Style) */}
        <section id="produtos" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-[#8d5b3a] font-semibold block mb-1">
                Cosmetologia Botânica
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1e2420] font-normal tracking-tight">
                Os Favoritos da Coleção
              </h2>
            </div>

            {selectedCategory !== "todos" && (
              <button
                onClick={() => setSelectedCategory("todos")}
                className="text-xs text-[#8d5b3a] hover:text-[#1e3324] font-medium flex items-center gap-1 transition-colors"
              >
                <span>Mostrar todos os tratamentos</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* 05 Biolumini Deep Dive (Lunara Editorial Split Style) */}
        <BioluminiDeepDive />

        {/* 06 Founder Story (Douglas Alan) */}
        <FounderSection />

        {/* 07 Verdora Green Card Banner (Quote + VIP Community) */}
        <BannerQuote />

        {/* 08 B2B Canal Profissionais & Salões */}
        <B2BSection />

        {/* 09 Verified Reviews */}
        <ReviewsSection />

        {/* 10 FAQ */}
        <FaqSection />
      </main>

      <Footer />

      {/* Cart & Checkout Overlays */}
      <CartDrawer />
      <CheckoutModal />
      <FloatingWhatsApp />
    </>
  );
}
