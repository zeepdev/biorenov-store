import React from "react";
import { Award, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";

export function FounderSection() {
  return (
    <section id="douglas-alan" className="py-16 md:py-24 bg-white border-b border-[#e6e2d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Founder Bio / Vision */}
          <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f0eee9] border border-[#dcd7cb] text-[#8d5b3a] text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              Cosmetologia com Propósito
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#183324] font-normal leading-tight">
              "A beleza consciente nasce quando a biologia humana é respeitada, não mascarada."
            </h2>

            <div className="space-y-4 text-stone-700 text-sm leading-relaxed">
              <p>
                À frente da <strong>Biorenov | Botanic Beauty</strong>, o cosmetólogo e empresário{" "}
                <strong>Douglas Alan</strong> consolidou anos de pesquisa dedicados à bioquímica celular,
                à flora botânica brasileira e aos probióticos terapêuticos.
              </p>
              <p>
                Incomodado com um mercado cosmético saturado de formulações sintéticas, derivados de
                petróleo e promessas imediatistas que enfraquecem a imunidade cutânea e capilar, Douglas
                desenvolveu protocolos éticos: cada miligrama dos produtos Biorenov possui uma função
                biológica clara de nutrição, regeneração e bioestímulo.
              </p>
              <p>
                O resultado é uma linha de alto padrão reconhecida por dermatologistas, terapeutas
                capilares e profissionais de estética exigentes em todo o Brasil.
              </p>
            </div>

            {/* Scientific Credentials */}
            <div className="pt-4 border-t border-[#e6e2d8] grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <span className="block text-xl font-bold font-serif text-[#183324]">Douglas Alan</span>
                <span className="text-xs text-stone-500">Fundador & Cosmetólogo Chefe</span>
              </div>
              <div>
                <span className="block text-xl font-bold font-serif text-[#8d5b3a]">+10 Anos</span>
                <span className="text-xs text-stone-500">Pesquisa em Biotecnologia</span>
              </div>
              <div>
                <span className="block text-xl font-bold font-serif text-[#183324]">100% Puro</span>
                <span className="text-xs text-stone-500">Fórmulas Livres de Toxinas</span>
              </div>
            </div>
          </div>

          {/* Founder Imagery / Portrait & Credibility */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative mx-auto max-w-md">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#f0eee9]">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80"
                  alt="Laboratório de Cosmetologia e formulação botânica - Douglas Alan"
                  className="w-full h-[480px] object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#183324]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white space-y-1">
                    <p className="text-xs uppercase tracking-widest text-[#e5c18e] font-semibold">
                      Desenvolvimento no Brasil
                    </p>
                    <p className="font-serif text-lg font-bold">
                      Bio Biorenov Cosméticos e Alimentos Saudáveis
                    </p>
                    <p className="text-[11px] text-stone-300">
                      Alto da Lapa, São Paulo - SP
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
