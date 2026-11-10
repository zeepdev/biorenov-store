import React from "react";
import { Award, Leaf, ShieldCheck, Sparkles } from "lucide-react";

export function FounderSection() {
  return (
    <section id="douglas-alan" className="py-16 sm:py-24 bg-[#faf7f5] border-t border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Portrait / Atelier Image */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md">
              <div className="relative rounded-3xl overflow-hidden shadow-lg border border-pink-100 aspect-[4/5] bg-stone-100">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80"
                  alt="Pesquisa cosmetológica Douglas Alan"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#201218]/90 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="font-heading font-black text-xl">Douglas Alan</p>
                    <p className="text-xs text-pink-200 font-medium">Cosmetólogo & Fundador • Biorenov</p>
                    <p className="text-[10px] text-stone-300 mt-0.5">Alto da Lapa, São Paulo - SP</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Founder Editorial Story */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100/80 text-[#c84b68] text-[11px] font-black uppercase tracking-wider">
              <Leaf className="w-3.5 h-3.5" />
              Cosmetologia com Propósito
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-5xl text-[#24171d] leading-[1.08] tracking-tight">
              A ciência limpa por trás de cada fórmula.
            </h2>

            <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                Incomodado com um mercado cosmético que insistia em agredir a pele com soluções 
                sintéticas pesadas, o cosmetólogo <strong>Douglas Alan</strong> dedicou anos ao estudo da 
                biologia celular, dos probióticos e da riqueza botânica brasileira.
              </p>
              <p>
                A <strong>Biorenov | Botanic Beauty</strong> nasceu com uma premissa inegociável: 
                cada ativo deve cumprir um papel biológico real de regeneração e nutrição. Zero formol, 
                zero parabenos agressivos e zero promessas ilusórias.
              </p>
              <p>
                Hoje, nossos protocolos são adotados tanto na rotina diária de milhares de clientes 
                quanto nas bancadas dos principais terapeutas e salões do país.
              </p>
            </div>

            {/* Credentials Row */}
            <div className="pt-4 border-t border-stone-200 grid grid-cols-3 gap-4">
              <div>
                <span className="block font-heading font-black text-2xl sm:text-3xl text-[#24171d]">+10 Anos</span>
                <span className="text-xs text-stone-500 font-medium">Pesquisa Cosmética</span>
              </div>
              <div>
                <span className="block font-heading font-black text-2xl sm:text-3xl text-[#c84b68]">100%</span>
                <span className="text-xs text-stone-500 font-medium">Vegano & Cruelty-Free</span>
              </div>
              <div>
                <span className="block font-heading font-black text-2xl sm:text-3xl text-[#24171d]">ANVISA</span>
                <span className="text-xs text-stone-500 font-medium">Grau II Notificado</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
