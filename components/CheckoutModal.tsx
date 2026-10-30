"use client";

import React, { useState } from "react";
import { useCart } from "@/lib/cart-context";
import {
  X,
  ShieldCheck,
  Zap,
  CreditCard,
  CheckCircle2,
  Copy,
  Check,
  Loader2,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

export function CheckoutModal() {
  const { isCheckoutOpen, setIsCheckoutOpen, items, total, shippingCost, clearCart } =
    useCart();

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [address, setAddress] = useState({
    zipCode: "",
    street: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: "",
  });

  const [loadingCep, setLoadingCep] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [checkoutResult, setCheckoutResult] = useState<{
    mode: "live" | "demo";
    orderId?: string;
    initPoint?: string;
    simulatedPixCode?: string;
    message?: string;
  } | null>(null);

  const [copied, setCopied] = useState(false);

  if (!isCheckoutOpen) return null;

  // Auto-fill address using ViaCEP
  const handleZipCodeChange = async (value: string) => {
    const cleanCep = value.replace(/\D/g, "");
    setAddress((prev) => ({ ...prev, zipCode: value }));

    if (cleanCep.length === 8) {
      setLoadingCep(true);
      try {
        const res = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
        const data = await res.json();
        if (!data.erro) {
          setAddress((prev) => ({
            ...prev,
            street: data.logradouro || "",
            neighborhood: data.bairro || "",
            city: data.localidade || "",
            state: data.uf || "",
          }));
        }
      } catch (err) {
        console.error("Erro ao buscar CEP:", err);
      } finally {
        setLoadingCep(false);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!customer.name || !customer.email || !customer.phone) {
      setErrorMsg("Por favor, preencha todos os dados de contato.");
      return;
    }

    if (!address.zipCode || !address.street || !address.number || !address.city) {
      setErrorMsg("Por favor, preencha os dados completos de entrega.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items,
          customer,
          address,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Falha ao gerar checkout");
      }

      setCheckoutResult(data);

      if (data.mode === "live" && data.initPoint) {
        // Redireciona para o checkout oficial do Mercado Pago
        window.location.href = data.initPoint;
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Erro ao processar checkout";
      setErrorMsg(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyPix = () => {
    if (checkoutResult?.simulatedPixCode) {
      navigator.clipboard.writeText(checkoutResult.simulatedPixCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleFinish = () => {
    clearCart();
    setIsCheckoutOpen(false);
    setCheckoutResult(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-stone-200 overflow-hidden relative animate-fade-in my-8">
        {/* Header */}
        <div className="bg-[#1b382b] text-white p-6 flex items-center justify-between">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#e5c18e] font-semibold">
              Ambiente Seguro
            </span>
            <h2 className="font-serif text-xl sm:text-2xl font-bold mt-0.5">
              Finalizar Seu Pedido
            </h2>
          </div>
          <button
            onClick={() => setIsCheckoutOpen(false)}
            className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {checkoutResult ? (
            /* Result Screen */
            <div className="space-y-6 text-center py-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-[#1b382b]">
                  Pedido Registrado com Sucesso!
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Número do Pedido:{" "}
                  <strong className="text-stone-800">
                    {checkoutResult.orderId || "BIO-582910"}
                  </strong>
                </p>
              </div>

              {checkoutResult.mode === "live" ? (
                <div className="p-5 bg-stone-50 rounded-2xl border border-stone-200 text-left space-y-4">
                  <p className="text-xs text-stone-600">
                    Você foi redirecionado para a tela oficial de pagamento seguro do Mercado Pago.
                    Caso a aba não tenha aberto automaticamente, clique no botão abaixo:
                  </p>
                  <a
                    href={checkoutResult.initPoint}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-xl bg-[#009ee3] text-white font-bold flex items-center justify-center gap-2 hover:bg-[#0089c7] transition-colors"
                  >
                    <span>Pagar no Mercado Pago</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              ) : (
                /* Demo mode Pix simulation */
                <div className="p-5 bg-[#faf8f5] rounded-2xl border border-[#e7e3dc] text-left space-y-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-100/70 px-3 py-2 rounded-lg">
                    <Zap className="w-4 h-4 text-emerald-700" />
                    <span>
                      Modo Demonstração: Simulação de Pagamento Pix com 5% de Desconto
                    </span>
                  </div>

                  <div className="text-center py-2">
                    <div className="inline-block p-4 bg-white rounded-2xl border-2 border-dashed border-stone-300 shadow-sm">
                      <div className="w-40 h-40 bg-stone-100 rounded-xl flex items-center justify-center text-xs text-stone-500 mx-auto">
                        [QR Code Pix Instantâneo]
                      </div>
                    </div>
                    <p className="text-xs text-stone-500 mt-2">
                      Valor total:{" "}
                      <strong className="text-stone-900 text-sm">
                        R$ {(total * 0.95).toFixed(2).replace(".", ",")}
                      </strong>
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-semibold text-stone-600 uppercase tracking-wide">
                      Código Pix Copia e Cola
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        readOnly
                        value={checkoutResult.simulatedPixCode || ""}
                        className="flex-1 text-xs bg-white border border-stone-300 rounded-xl px-3 py-2 text-stone-700 font-mono select-all"
                      />
                      <button
                        onClick={handleCopyPix}
                        className="px-3.5 py-2 rounded-xl bg-[#1b382b] text-white text-xs font-semibold flex items-center gap-1.5 hover:bg-[#142920] transition-colors"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            Copiado!
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            Copiar
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  <p className="text-[11px] text-stone-500 italic text-center">
                    {checkoutResult.message}
                  </p>
                </div>
              )}

              <button
                onClick={handleFinish}
                className="w-full py-3.5 rounded-xl bg-stone-900 text-white font-semibold text-xs uppercase tracking-wider hover:bg-stone-800 transition-colors"
              >
                Concluir e Voltar à Loja
              </button>
            </div>
          ) : (
            /* Checkout Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMsg && (
                <div className="p-3 bg-red-50 text-red-700 border border-red-200 rounded-xl text-xs">
                  {errorMsg}
                </div>
              )}

              {/* Step 1: Customer Data */}
              <div className="space-y-3">
                <h3 className="text-xs uppercase tracking-wider text-stone-500 font-bold flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#1b382b] text-white text-[10px] flex items-center justify-center">
                    1
                  </span>
                  Dados Pessoais & Contato
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Dra. Mariana Silva"
                      value={customer.name}
                      onChange={(e) =>
                        setCustomer({ ...customer, name: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1b382b]/30 focus:border-[#1b382b]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="seuemail@exemplo.com"
                      value={customer.email}
                      onChange={(e) =>
                        setCustomer({ ...customer, email: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1b382b]/30 focus:border-[#1b382b]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      WhatsApp com DDD *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(11) 99999-9999"
                      value={customer.phone}
                      onChange={(e) =>
                        setCustomer({ ...customer, phone: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1b382b]/30 focus:border-[#1b382b]"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2: Shipping Address */}
              <div className="space-y-3 pt-3 border-t border-stone-100">
                <h3 className="text-xs uppercase tracking-wider text-stone-500 font-bold flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#1b382b] text-white text-[10px] flex items-center justify-center">
                    2
                  </span>
                  Endereço para Entrega
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      CEP * {loadingCep && <span className="text-emerald-600 font-normal">(Buscando...)</span>}
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={9}
                      placeholder="00000-000"
                      value={address.zipCode}
                      onChange={(e) => handleZipCodeChange(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1b382b]/30 focus:border-[#1b382b]"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Rua / Avenida *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Av. Paulista"
                      value={address.street}
                      onChange={(e) =>
                        setAddress({ ...address, street: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1b382b]/30 focus:border-[#1b382b]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Número *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="123"
                      value={address.number}
                      onChange={(e) =>
                        setAddress({ ...address, number: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1b382b]/30 focus:border-[#1b382b]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Complemento / Apto
                    </label>
                    <input
                      type="text"
                      placeholder="Apto 42"
                      value={address.complement}
                      onChange={(e) =>
                        setAddress({ ...address, complement: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1b382b]/30 focus:border-[#1b382b]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Cidade / UF
                    </label>
                    <input
                      type="text"
                      required
                      readOnly
                      placeholder="São Paulo - SP"
                      value={address.city ? `${address.city} - ${address.state}` : ""}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 text-sm text-stone-700 cursor-not-allowed"
                    />
                  </div>
                </div>
              </div>

              {/* Order Total & Payment Summary */}
              <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2">
                <div className="flex justify-between text-xs text-stone-600">
                  <span>Itens ({items.length})</span>
                  <span>R$ {(total - shippingCost).toFixed(2).replace(".", ",")}</span>
                </div>
                <div className="flex justify-between text-xs text-stone-600">
                  <span>Frete</span>
                  <span className="font-semibold text-emerald-700">
                    {shippingCost === 0 ? "GRÁTIS" : `R$ ${shippingCost.toFixed(2).replace(".", ",")}`}
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold text-[#1b382b] pt-2 border-t border-stone-200">
                  <span>Total a Pagar</span>
                  <span>R$ {total.toFixed(2).replace(".", ",")}</span>
                </div>
                <p className="text-[11px] text-emerald-800 font-medium text-right">
                  Ou R$ {(total * 0.95).toFixed(2).replace(".", ",")} à vista no Pix (5% OFF)
                </p>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-[#1b382b] hover:bg-[#142920] text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Gerando Pagamento Seguro...
                  </>
                ) : (
                  <>
                    <span>Ir para Pagamento (Pix ou Cartão)</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-4 text-xs text-stone-500 pt-2">
                <div className="flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Pix Imediato</span>
                </div>
                <div className="flex items-center gap-1">
                  <CreditCard className="w-3.5 h-3.5 text-stone-700" />
                  <span>Até 12x no Cartão</span>
                </div>
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#1b382b]" />
                  <span>Mercado Pago</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
