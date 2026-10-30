import React from "react";
import { Award, Leaf, ShieldCheck } from "lucide-react";

export function FounderSection() {
  return (
    <section id="douglas-alan" className="py-16 sm:py-24 bg-[#f7f5f0] border-t border-[#e8e4db]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Portrait / Atelier Image */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md">
              <div className="relative rounded-3xl overflow-hidden shadow-lg border border-[#e8e4db] aspect-[4/5] bg-stone-100">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80"
                  alt="Pesquisa cosmetológica Douglas Alan"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e2420]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="font-serif text-lg font-normal">Douglas Alan</p>
                    <p className="text-xs text-stone-300">Cosmetólogo & Fundador • Biorenov</p>
                    <p className="text-[10px] text-stone-400 mt-0.5">Alto da Lapa, São Paulo - SP</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Founder Editorial Story */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <span className="text-xs uppercase tracking-widest text-[#8d5b3a] font-semibold">
              Cosmetologia com Propósito
            </span>

            <h2 className="font-serif text-4xl sm:text-5xl text-[#1e2420] font-normal leading-[1.12] tracking-tight">
              A ciência limpa por trás de cada fórmula.
            </h2>

            <div className="space-y-4 text-[#4a524c] text-sm sm:text-base leading-relaxed font-normal">
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
                Hoje, nossos protocolos são adotados tanto na rotina diária de milhares de mulheres 
                quanto nas bancadas e lavatórios dos principais terapeutas capilares e salões do país.
              </p>
            </div>

            {/* Credentials Row */}
            <div className="pt-4 border-t border-[#e8e4db] grid grid-cols-3 gap-4">
              <div>
                <span className="block font-serif text-2xl text-[#1e2420] font-normal">+10 Anos</span>
                <span className="text-xs text-[#5f6761]">Pesquisa Cosmética</span>
              </div>
              <div>
                <span className="block font-serif text-2xl text-[#1e2420] font-normal">100% Vegano</span>
                <span className="text-xs text-[#5f6761]">Sem Testes Animais</span>
              </div>
              <div>
                <span className="block font-serif text-2xl text-[#1e2420] font-normal">ANVISA</span>
                <span className="text-xs text-[#5f6761]">Fórmulas Notificadas</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
