import React from "react";
import { MessageCircle, Globe, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#17201a] text-[#e0ddd5] pt-16 pb-12 border-t border-[#233027]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#233027]">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <img
              src="/logo.png"
              alt="Biorenov Botanic Beauty"
              className="h-10 w-auto object-contain brightness-0 invert"
            />
            <p className="text-xs text-stone-400 max-w-sm leading-relaxed">
              Cosmetologia limpa e biotecnologia probiótica formulada por <strong>Douglas Alan</strong>.
              Cuidados seguros para a regeneração da sua pele, fios e bem-estar corporal.
            </p>
            <div className="flex items-center gap-3 pt-2 text-[11px] text-stone-400">
              <span>100% Vegano</span>
              <span>•</span>
              <span>Cruelty-Free</span>
              <span>•</span>
              <span>Livre de Toxinas</span>
            </div>
          </div>

          {/* Treatments Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-white font-semibold">
              Tratamentos
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#biolumini" className="hover:text-white transition-colors">
                  Biolumini (Melasma)
                </a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-white transition-colors">
                  Dorless Relaxante (240g)
                </a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-white transition-colors">
                  Fator de Crescimento Vegano
                </a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-white transition-colors">
                  Sérum 24K Gold Foil
                </a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-white transition-colors">
                  Perfume Bío Raspberry
                </a>
              </li>
            </ul>
          </div>

          {/* Institutional */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-white font-semibold">
              Institucional
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#douglas-alan" className="hover:text-white transition-colors">
                  O Cosmetólogo Douglas Alan
                </a>
              </li>
              <li>
                <a href="#biolumini" className="hover:text-white transition-colors">
                  A Ciência dos Probióticos
                </a>
              </li>
              <li>
                <a href="#profissionais" className="hover:text-white transition-colors">
                  Área do Profissional (B2B)
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-white font-semibold">
              Atendimento
            </h4>
            <div className="space-y-2.5 text-xs text-stone-400">
              <a
                href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20um%20atendimento%20exclusivo%20sobre%20a%20Biorenov."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors text-emerald-400"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Oficial</span>
              </a>

              <a
                href="https://www.instagram.com/biorenovbeauty/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 text-[#d8c39e]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>@biorenovbeauty</span>
              </a>

              <a
                href="mailto:biorenovecommerce@gmail.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-stone-500" />
                <span>biorenovecommerce@gmail.com</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Click Aky Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            <p className="text-stone-300 font-medium">
              BIO BIORENOV COSMÉTICOS E ALIMENTOS SAUDÁVEIS LTDA
            </p>
            <p className="text-[11px] text-stone-500 mt-0.5">
              CNPJ: 58.090.795/0001-56 • Alto da Lapa, São Paulo - SP
            </p>
          </div>

          {/* Click Aky Credit */}
          <div className="text-stone-400 text-xs">
            Developed by:{" "}
            <a
              href="https://clickakystudio.com/"
              target="_blank"
              rel="noopener"
              className="text-[#d8c39e] hover:underline font-semibold"
            >
              Click Aky
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
