import React from "react";
import { ShieldCheck, Lock, Leaf, MessageCircle, Globe, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#183324] text-[#f0eee9] pt-16 pb-12 border-t border-[#244733]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#2d553e]">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Biorenov Botanic Beauty"
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-xs text-stone-300 max-w-sm leading-relaxed">
              Biotecnologia probiótica e cosmetologia consciente formulada por <strong>Douglas Alan</strong>.
              Restauração celular da pele, folículos capilares e bem-estar corporal com respeito à microbiota humana.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#12261b] text-[10px] text-[#e5c18e] border border-[#2d553e]">
                <Leaf className="w-3.5 h-3.5" />
                100% Vegano & Cruelty-Free
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#12261b] text-[10px] text-emerald-400 border border-[#2d553e]">
                <Lock className="w-3.5 h-3.5" />
                Checkout Seguro Mercado Pago
              </span>
            </div>
          </div>

          {/* Treatments */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-white font-bold">
              Catálogo Oficial
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <a href="#biolumini" className="hover:text-white transition-colors">
                  Biolumini (Melasma Seguro)
                </a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-white transition-colors">
                  Fator de Crescimento Vegano
                </a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-white transition-colors">
                  Dorless (Arnica & Copaíba)
                </a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-white transition-colors">
                  Purifique Água Micelar
                </a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-white transition-colors">
                  Bio Sun Care FPS 50+
                </a>
              </li>
            </ul>
          </div>

          {/* Institutional */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-white font-bold">
              Institucional
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <a href="#probioticos" className="hover:text-white transition-colors">
                  A Ciência dos Probióticos
                </a>
              </li>
              <li>
                <a href="#douglas-alan" className="hover:text-white transition-colors">
                  O Cosmetólogo Douglas Alan
                </a>
              </li>
              <li>
                <a href="#ritual" className="hover:text-white transition-colors">
                  O Ritual Botânico
                </a>
              </li>
              <li>
                <a href="#profissionais" className="hover:text-white transition-colors">
                  Canal Salões & Terapeutas (B2B)
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Segurança & Dúvidas
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Support & Verification */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-white font-bold">
              Atendimento & Contato
            </h4>
            <p className="text-xs text-stone-300">
              Atendimento Consultivo Personalizado
            </p>
            <div className="space-y-2 pt-1">
              <a
                href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20um%20atendimento%20exclusivo%20sobre%20a%20Biorenov."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-emerald-400 hover:text-emerald-300"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Oficial</span>
              </a>

              <a
                href="https://www.instagram.com/biorenovbeauty/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-stone-300 hover:text-white"
              >
                <svg className="w-4 h-4 text-[#e5c18e]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>@biorenovbeauty</span>
              </a>

              <a
                href="mailto:biorenovecommerce@gmail.com"
                className="flex items-center gap-2 text-xs text-stone-300 hover:text-white"
              >
                <Mail className="w-4 h-4 text-stone-400" />
                <span>biorenovecommerce@gmail.com</span>
              </a>

              <a
                href="https://biorenovbotanic.com/biorenov/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-stone-300 hover:text-white"
              >
                <Globe className="w-4 h-4 text-stone-400" />
                <span>biorenovbotanic.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Corporate Legal & Click Aky Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            <p className="font-semibold text-white">
              BIO BIORENOV COSMÉTICOS E ALIMENTOS SAUDÁVEIS LTDA
            </p>
            <p className="text-[11px] text-stone-400 mt-0.5">
              CNPJ: 58.090.795/0001-56 • Alto da Lapa, São Paulo - SP, Brasil
            </p>
          </div>

          {/* Click Aky Credit */}
          <div className="text-stone-300 text-xs">
            Developed by: <a href="https://clickakystudio.com/" target="_blank" rel="noopener" className="text-[#e5c18e] hover:underline font-semibold">Click Aky</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
