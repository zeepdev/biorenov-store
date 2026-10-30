"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#361d26] text-[#ded3d7] pt-14 pb-10 border-t border-[#482833]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4 Columns (Exact Velvetique Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#4d2b38]">
          
          {/* Column 1: Brand Info & Socials */}
          <div className="space-y-4">
            <img
              src="/logo-white.png"
              alt="Biorenov Botanic Beauty"
              className="h-8 sm:h-9 w-auto object-contain"
            />
            <p className="text-xs text-stone-300 leading-relaxed max-w-xs">
              Beleza consciente e biotecnologia probiótica para cada pele, todos os dias.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-1 text-pink-200">
              <a
                href="https://www.instagram.com/clickaky.beauty/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#b4536a] text-white flex items-center justify-center transition-colors"
                title="Instagram @clickaky.beauty"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-emerald-600 text-white flex items-center justify-center transition-colors text-xs font-bold"
                title="WhatsApp"
              >
                W
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-white font-bold">
              Links Rápidos
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-white transition-colors">
                  Loja & Catálogo
                </a>
              </li>
              <li>
                <a href="#categorias" className="hover:text-white transition-colors">
                  Coleções
                </a>
              </li>
              <li>
                <a href="#douglas-alan" className="hover:text-white transition-colors">
                  Sobre Douglas Alan
                </a>
              </li>
              <li>
                <a href="#profissionais" className="hover:text-white transition-colors">
                  B2B
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Care */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-white font-bold">
              Atendimento
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Rastrear Pedido
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Política de Envio
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Trocas e Devoluções
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Termos & Condições
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Perguntas Frequentes (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter (Exact Velvetique Style) */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-white font-bold">
              Newsletter
            </h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              Inscreva-se para receber ofertas especiais, novidades e dicas de beleza.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-1.5 p-2.5 bg-white/10 rounded-md text-xs text-emerald-300">
                <Check className="w-3.5 h-3.5" />
                <span>Obrigado por se inscrever!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-1 pt-1">
                <input
                  type="email"
                  required
                  placeholder="Seu e-mail..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-3 py-2 rounded-md bg-white text-stone-900 text-xs placeholder:text-stone-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md bg-[#b4536a] hover:bg-[#9c4357] text-white text-[11px] font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Assinar
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar: Copyright, Payment Badges & Click Aky Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            <p>© 2026 Biorenov Cosméticos Ltda. Todos os direitos reservados.</p>
            <p className="text-[10px] text-stone-400 mt-0.5">
              BIO BIORENOV COSMÉTICOS E ALIMENTOS SAUDÁVEIS LTDA • CNPJ: 58.090.795/0001-56
            </p>
          </div>

          {/* Payment Badges (Velvetique style: VISA, MC, PIX) & Click Aky */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-stone-300 uppercase">
              <span className="px-2 py-0.5 rounded bg-white/10 border border-white/20">VISA</span>
              <span className="px-2 py-0.5 rounded bg-white/10 border border-white/20">MASTERCARD</span>
              <span className="px-2 py-0.5 rounded bg-white/10 border border-white/20">PIX</span>
            </div>

            {/* Click Aky Credit */}
            <div className="text-stone-300 text-xs">
              Developed by:{" "}
              <a
                href="https://clickakystudio.com/"
                target="_blank"
                rel="noopener"
                className="text-pink-300 hover:underline font-semibold"
              >
                Click Aky
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
