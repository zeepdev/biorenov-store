"use client";

import React, { useState } from "react";
import { Sparkles, Scissors, Building2, CheckCircle2, Send, MessageCircle } from "lucide-react";

export function B2BSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    businessName: "",
    cityState: "",
    interest: "lavatorio",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá Douglas Alan / Equipe Biorenov! Tenho interesse no credenciamento B2B para profissionais.\n\nNome: ${form.name}\nWhatsApp: ${form.phone}\nSalão/Clínica: ${form.businessName}\nCidade/UF: ${form.cityState}\nInteresse: ${form.interest === "lavatorio" ? "Uso em Bancada / Lavatório" : "Revenda para Clientes"}`;

    const url = `https://wa.me/5511999999999?text=${encodeURIComponent(msg)}`;
    setSubmitted(true);
    window.open(url, "_blank");
  };

  return (
    <section id="profissionais" className="py-16 md:py-24 bg-white border-b border-[#e6e2d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: B2B Pitch */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#f5ede6] border border-[#e2d0c2] text-[#8d5b3a] text-xs font-bold uppercase tracking-wider">
              <Scissors className="w-3.5 h-3.5" />
              Canal Exclusivo para Profissionais
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#183324] font-normal leading-tight">
              Introduza a Terapia Probiótica no seu Salão ou Clínica.
            </h2>

            <p className="text-stone-700 text-sm leading-relaxed">
              Os clientes mais exigentes não buscam mais procedimentos químicos agressivos.
              Eles buscam <strong>saúde capilar real, recuperação de densidade folicular e regeneração celular</strong>.
            </p>

            <div className="space-y-3 pt-2 text-xs text-stone-700">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#587d65] flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Protocolos Exclusivos de Lavatório:</strong> Fator de Crescimento Vegano e Água Micelar Probiótica com alto rendimento para terapeutas capilares.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#587d65] flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Margem Expressiva para Revenda (D2C Salão):</strong> Biolumini e Dorless com alta taxa de recompra pelas próprias clientes.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#587d65] flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Treinamento Direto com Douglas Alan:</strong> Material técnico, certificados e suporte em protocolos de aplicação.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive B2B Form */}
          <div className="lg:col-span-6">
            <div className="bg-[#f9f8f5] p-8 rounded-3xl border border-[#e6e2d8] shadow-lg">
              <div className="flex items-center gap-2 mb-6">
                <Building2 className="w-5 h-5 text-[#8d5b3a]" />
                <h3 className="font-serif text-xl font-bold text-[#183324]">
                  Solicitar Condições Especiais B2B
                </h3>
              </div>

              {submitted ? (
                <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="font-serif text-lg font-bold text-emerald-900">
                    Solicitação Encaminhada!
                  </h4>
                  <p className="text-xs text-stone-600">
                    Uma janela do WhatsApp foi aberta para você falar diretamente com a equipe do cosmetólogo Douglas Alan.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Seu Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Amanda Fonseca"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#183324]/30 focus:border-[#183324] bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        WhatsApp com DDD *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(11) 99999-9999"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#183324]/30 focus:border-[#183324] bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Cidade / UF *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="São Paulo - SP"
                        value={form.cityState}
                        onChange={(e) => setForm({ ...form, cityState: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#183324]/30 focus:border-[#183324] bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Nome do Salão, Clínica ou Espaço *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Studio Amanda Hair & Estética"
                      value={form.businessName}
                      onChange={(e) => setForm({ ...form, businessName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#183324]/30 focus:border-[#183324] bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Principal Interesse
                    </label>
                    <select
                      value={form.interest}
                      onChange={(e) => setForm({ ...form, interest: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#183324]/30 focus:border-[#183324] bg-white"
                    >
                      <option value="lavatorio">Uso Profissional em Bancada / Lavatório</option>
                      <option value="revenda">Revenda para Clientes Finais (Home Care)</option>
                      <option value="ambos">Ambos (Uso em Salão + Revenda)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#183324] hover:bg-[#12261b] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-colors"
                  >
                    <span>Falar com o Canal B2B no WhatsApp</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-stone-500 text-center">
                    Atendimento ágil direto com os consultores técnicos da marca.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
