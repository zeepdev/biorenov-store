"use client";

import React, { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { ShoppingBag, MessageCircle, Menu, X, ArrowRight } from "lucide-react";

export function Navbar() {
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Announcement Bar - Clean & Minimal */}
      <div className="bg-[#1e3324] text-[#f7f5f0] text-[11px] sm:text-xs py-2 px-4 text-center font-normal tracking-wide flex items-center justify-center gap-2">
        <span>
          Frete Grátis para todo o Brasil acima de R$ 199 • <strong>5% OFF no Pix</strong>
        </span>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-40 bg-[#f7f5f0]/95 backdrop-blur-md border-b border-[#e8e4db] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center group">
              <img
                src="/logo.png"
                alt="Biorenov Organic Beauty"
                className="h-9 sm:h-11 w-auto object-contain"
              />
            </a>

            {/* Desktop Navigation - Understated & Elegant */}
            <nav className="hidden md:flex items-center gap-8 text-[13px] tracking-wide text-[#1e2420]/80">
              <a href="#produtos" className="hover:text-[#1e3324] transition-colors">
                Coleção
              </a>
              <a href="#categorias" className="hover:text-[#1e3324] transition-colors">
                Categorias
              </a>
              <a href="#biolumini" className="hover:text-[#1e3324] transition-colors">
                Biolumini
              </a>
              <a href="#douglas-alan" className="hover:text-[#1e3324] transition-colors">
                Douglas Alan
              </a>
              <a href="#profissionais" className="hover:text-[#1e3324] transition-colors text-[#8d5b3a] font-medium">
                Para Salões (B2B)
              </a>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              {/* WhatsApp Concierge */}
              <a
                href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20um%20atendimento%20exclusivo%20sobre%20as%20f%C3%B3rmulas%20Biorenov."
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs text-[#1e3324] hover:bg-black/5 rounded-full border border-[#dcd7cb] transition-colors font-medium"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Concierge</span>
              </a>

              {/* Cart Trigger */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 rounded-full hover:bg-black/5 transition-colors flex items-center justify-center text-[#1e3324]"
                aria-label="Abrir carrinho"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#1e3324] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 md:hidden text-[#1e2420] hover:bg-black/5 rounded-lg"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#f7f5f0] border-b border-[#e8e4db] px-6 py-5 space-y-3">
            <a
              href="#produtos"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm text-[#1e2420]"
            >
              Coleção
            </a>
            <a
              href="#categorias"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm text-[#1e2420]"
            >
              Categorias
            </a>
            <a
              href="#biolumini"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm text-[#1e2420]"
            >
              Biolumini (Melasma Seguro)
            </a>
            <a
              href="#douglas-alan"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm text-[#1e2420]"
            >
              O Cosmetólogo
            </a>
            <a
              href="#profissionais"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm text-[#8d5b3a] font-medium"
            >
              Canal Profissionais & Salões
            </a>
            <div className="pt-2">
              <a
                href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20os%20produtos%20Biorenov."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#1e3324] rounded-full"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
