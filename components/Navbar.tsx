"use client";

import React, { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { ShoppingBag, Sparkles, MessageCircle, Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-[#183324] text-[#f9f8f5] text-xs py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2 border-b border-[#244733]">
        <Sparkles className="w-3.5 h-3.5 text-[#e5c18e]" />
        <span>
          Envio consciente para todo o Brasil • <strong>Fórmulas Probióticas Veganas</strong> • <strong>5% OFF</strong> no Pix
        </span>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-40 bg-[#f9f8f5]/95 backdrop-blur-md border-b border-[#e6e2d8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <img
                src="/logo.png"
                alt="Biorenov Organic Beauty"
                className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-[#1e2421]/80">
              <a href="#produtos" className="hover:text-[#183324] transition-colors">
                Produtos
              </a>
              <a href="#probioticos" className="hover:text-[#183324] transition-colors">
                Ciência Probiótica
              </a>
              <a href="#biolumini" className="hover:text-[#183324] transition-colors">
                Biolumini
              </a>
              <a href="#douglas-alan" className="hover:text-[#183324] transition-colors">
                Douglas Alan
              </a>
              <a href="#ritual" className="hover:text-[#183324] transition-colors">
                Ritual Botânico
              </a>
              <a href="#profissionais" className="hover:text-[#183324] text-[#8d5b3a] transition-colors flex items-center gap-1">
                <span>Para Salões</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#f5ede6] border border-[#e2d0c2] text-[#8d5b3a] font-bold">B2B</span>
              </a>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              {/* WhatsApp Concierge */}
              <a
                href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20um%20atendimento%20exclusivo%20sobre%20as%20f%C3%B3rmulas%20probi%C3%B3ticas%20da%20Biorenov."
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#183324] bg-[#f0eee9] hover:bg-[#e7e3dc] rounded-full border border-[#d8d3c7] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#183324]" />
                <span>Concierge WhatsApp</span>
              </a>

              {/* Cart Trigger */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2.5 rounded-full hover:bg-stone-200/60 transition-colors flex items-center justify-center text-[#183324]"
                aria-label="Abrir sacola de compras"
              >
                <ShoppingBag className="w-6 h-6 text-[#183324]" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#8d5b3a] text-white text-[11px] font-bold rounded-full flex items-center justify-center shadow-sm animate-fade-in">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 lg:hidden text-stone-700 hover:text-stone-900"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#f9f8f5] border-b border-[#e6e2d8] px-5 py-5 space-y-3">
            <a
              href="#produtos"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold uppercase tracking-wider text-stone-800 hover:text-[#183324]"
            >
              Produtos
            </a>
            <a
              href="#probioticos"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold uppercase tracking-wider text-stone-800 hover:text-[#183324]"
            >
              Ciência Probiótica
            </a>
            <a
              href="#biolumini"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold uppercase tracking-wider text-stone-800 hover:text-[#183324]"
            >
              Biolumini (Melasma)
            </a>
            <a
              href="#douglas-alan"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold uppercase tracking-wider text-stone-800 hover:text-[#183324]"
            >
              Douglas Alan
            </a>
            <a
              href="#ritual"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold uppercase tracking-wider text-stone-800 hover:text-[#183324]"
            >
              Ritual Botânico
            </a>
            <a
              href="#profissionais"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold uppercase tracking-wider text-[#8d5b3a]"
            >
              Para Salões & Terapeutas (B2B)
            </a>
            <div className="pt-3 border-t border-[#e6e2d8]">
              <a
                href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20um%20atendimento%20exclusivo%20sobre%20a%20Biorenov."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#183324] rounded-xl shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Falar com Especialista no WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
