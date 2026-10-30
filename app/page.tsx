"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { CategoryCircles } from "@/components/CategoryCircles";
import { SplitPromoBanner } from "@/components/SplitPromoBanner";
import { ProductCard } from "@/components/ProductCard";
import { LowerTrustBar } from "@/components/LowerTrustBar";
import { FounderSection } from "@/components/FounderSection";
import { B2BSection } from "@/components/B2BSection";
import { FaqSection } from "@/components/FaqSection";
import { CartDrawer } from "@/components/CartDrawer";
import { CheckoutModal } from "@/components/CheckoutModal";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { PRODUCTS } from "@/data/products";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("todos");

  const filteredProducts =
    selectedCategory === "todos"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <>
      {/* 01 Navbar (Velvetique top promo + white nav) */}
      <Navbar />

      <main className="flex-1 bg-white">
        {/* 02 Hero Section (Velvetique Blush Gradient + Pedestal Showcase) */}
        <Hero />

        {/* 03 Floating 4-Column Clean Trust Bar */}
        <TrustBar />

        {/* 04 Shop by Category (6 Circular Pods) */}
        <CategoryCircles
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* 05 Split Promo Banner (Up to 30% Off on Best Sellers) */}
        <SplitPromoBanner />

        {/* 06 Best Sellers Grid (Velvetique Style) */}
        <section id="produtos" className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-stone-200">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-stone-900 uppercase tracking-wider font-normal">
                Best Sellers
              </h2>
            </div>

            <button
              onClick={() => setSelectedCategory("todos")}
              className="text-xs uppercase tracking-wider font-semibold text-[#b4536a] hover:text-[#9c4357] transition-colors cursor-pointer"
            >
              View All
            </button>
          </div>

          {/* 4-Column Product Cards Grid (Velvetique Style) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* 07 Founder & Formulations (Douglas Alan) */}
        <FounderSection />

        {/* 08 B2B Canal para Salões & Terapeutas */}
        <B2BSection />

        {/* 09 FAQ */}
        <FaqSection />

        {/* 10 Velvetique Lower Trust Row (Right above footer) */}
        <LowerTrustBar />
      </main>

      {/* 11 Deep Plum Velvetique Footer */}
      <Footer />

      {/* Conversion Overlays */}
      <CartDrawer />
      <CheckoutModal />
      <FloatingWhatsApp />
    </>
  );
}
