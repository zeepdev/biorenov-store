"use client";

import React, { useState } from "react";
import { useCart } from "@/lib/cart-context";
import {
  ShoppingBag,
  Search,
  User,
  Heart,
  Menu,
  X,
  ChevronDown,
  Gift,
} from "lucide-react";

export function Navbar() {
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* 01 Top Velvetique Announcement Bar */}
      <div className="bg-[#b4536a] text-white text-[11px] sm:text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <Gift className="w-3.5 h-3.5 text-pink-200" />
            <span>
              Frete Grátis para todo o Brasil acima de R$ 199 | Use o cupom:{" "}
              <strong className="underline decoration-pink-300">GLOW15</strong> para 15% OFF
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-pink-100">
            <a
              href="https://www.instagram.com/clickaky.beauty/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              title="Instagram"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20um%20atendimento%20exclusivo%20sobre%20a%20Biorenov."
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors text-[11px] font-medium"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* 02 Main Velvetique Navbar */}
      <header className="sticky top-0 z-40 bg-white border-b border-stone-200 transition-colors shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center">
              <img
                src="/logo.png"
                alt="Biorenov Organic Beauty"
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </a>

            {/* Desktop Navigation with Velvetique-style pink active underline */}
            <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-stone-700">
              <a
                href="#"
                className="text-[#b4536a] relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#b4536a]"
              >
                Início
              </a>
              <a
                href="#produtos"
                className="hover:text-[#b4536a] transition-colors flex items-center gap-1"
              >
                <span>Loja</span>
                <ChevronDown className="w-3 h-3" />
              </a>
              <a
                href="#categorias"
                className="hover:text-[#b4536a] transition-colors flex items-center gap-1"
              >
                <span>Coleções</span>
                <ChevronDown className="w-3 h-3" />
              </a>
              <a href="#douglas-alan" className="hover:text-[#b4536a] transition-colors">
                Sobre Nós
              </a>
              <a href="#profissionais" className="hover:text-[#b4536a] transition-colors">
                B2B
              </a>
            </nav>

            {/* Actions (Search, Account, Wishlist, Cart) */}
            <div className="flex items-center gap-4 text-stone-700">
              <a
                href="#produtos"
                className="p-1.5 hover:text-[#b4536a] transition-colors hidden sm:block"
                title="Buscar produtos"
              >
                <Search className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20um%20atendimento%20exclusivo%20sobre%20a%20Biorenov."
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 hover:text-[#b4536a] transition-colors hidden sm:block"
                title="Atendimento Consultivo"
              >
                <User className="w-4 h-4" />
              </a>
              <a
                href="#produtos"
                className="p-1.5 hover:text-[#b4536a] transition-colors hidden sm:block"
                title="Favoritos"
              >
                <Heart className="w-4 h-4" />
              </a>

              {/* Cart Trigger */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-1.5 hover:text-[#b4536a] transition-colors flex items-center justify-center cursor-pointer"
                aria-label="Abrir carrinho"
              >
                <ShoppingBag className="w-5 h-5 text-stone-800" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#b4536a] text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-xs">
                  {totalItems}
                </span>
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 lg:hidden text-stone-800 hover:text-[#b4536a]"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-stone-200 px-6 py-5 space-y-3">
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold uppercase tracking-wider text-[#b4536a]"
            >
              Início
            </a>
            <a
              href="#produtos"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold uppercase tracking-wider text-stone-700"
            >
              Loja Completa
            </a>
            <a
              href="#categorias"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold uppercase tracking-wider text-stone-700"
            >
              Compre por Categoria
            </a>
            <a
              href="#douglas-alan"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold uppercase tracking-wider text-stone-700"
            >
              O Cosmetólogo Douglas Alan
            </a>
            <a
              href="#profissionais"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold uppercase tracking-wider text-stone-700"
            >
              B2B
            </a>
          </div>
        )}
      </header>
    </>
  );
}
