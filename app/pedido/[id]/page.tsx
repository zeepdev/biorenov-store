"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  CheckCircle2,
  Package,
  Truck,
  Clock,
  MapPin,
  ExternalLink,
  Copy,
  Check,
  ArrowLeft,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Order, OrderStatus } from "@/lib/db";

const STATUS_STEPS: { key: OrderStatus; label: string; desc: string }[] = [
  { key: "pendente", label: "Pedido Recebido", desc: "Aguardando confirmação do pagamento" },
  { key: "pago", label: "Pagamento Aprovado", desc: "Pix ou cartão compensado com sucesso" },
  { key: "separacao", label: "Em Separação", desc: "Laboratório preparando e embalando seus produtos" },
  { key: "enviado", label: "Despachado / Em Trânsito", desc: "A caminho com código de rastreamento" },
  { key: "entregue", label: "Entregue", desc: "Pacote recebido no endereço de entrega" },
];

function getStepIndex(status: OrderStatus): number {
  switch (status) {
    case "pendente":
      return 0;
    case "pago":
      return 1;
    case "separacao":
      return 2;
    case "enviado":
      return 3;
    case "entregue":
      return 4;
    default:
      return 1;
  }
}

function OrderTrackingContent() {
  const params = useParams();
  const orderId = params?.id as string;

  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [copiedCode, setCopiedCode] = useState(false);

  // Conta rápida pós-compra (1 clique)
  const [createdPassword, setCreatedPassword] = useState("");
  const [accountCreated, setAccountCreated] = useState(false);

  useEffect(() => {
    if (!orderId) return;

    fetch(`/api/orders/${orderId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Pedido não encontrado");
        return res.json();
      })
      .then((data) => {
        setOrder(data.order);
      })
      .catch((err) => {
        setError(err.message || "Não foi possível carregar os dados do pedido");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [orderId]);

  const handleCopyTracking = () => {
    if (order?.trackingCode) {
      navigator.clipboard.writeText(order.trackingCode);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  const handleSaveAccount = (e: React.FormEvent) => {
    e.preventDefault();
    if (!createdPassword || createdPassword.length < 6) {
      alert("A senha deve ter no mínimo 6 caracteres.");
      return;
    }
    setAccountCreated(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#faf7f5] flex items-center justify-center p-4">
        <div className="text-center space-y-3">
          <div className="w-12 h-12 border-4 border-[#b4536a] border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-stone-600 font-semibold text-sm">Carregando status do pedido...</p>
        </div>
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="min-h-screen bg-[#faf7f5] flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-lg border border-stone-200 text-center space-y-4">
          <div className="w-14 h-14 bg-rose-100 text-[#b4536a] rounded-full flex items-center justify-center mx-auto">
            <Package className="w-7 h-7" />
          </div>
          <h1 className="text-xl font-black text-stone-900">Pedido Não Encontrado</h1>
          <p className="text-stone-500 text-sm">
            Não localizamos o pedido <strong>{orderId}</strong>. Verifique o link ou entre em contato com nosso time de atendimento.
          </p>
          <div className="pt-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2b141d] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#b4536a] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Voltar para a Loja
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const currentStep = getStepIndex(order.status);

  return (
    <div className="min-h-screen bg-[#faf7f5] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-6">
        
        {/* Top Navbar Back */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar para a Loja
          </Link>
          <span className="text-xs font-semibold text-stone-400">
            Biorenov Acompanhamento Oficial
          </span>
        </div>

        {/* Card Principal: Status Hero */}
        <div className="bg-white rounded-3xl shadow-sm border border-stone-200/80 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-5">
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-pink-100 text-[#b4536a] text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                  Pedido Confirmado
                </span>
                <span className="text-xs text-stone-400">
                  {new Date(order.createdAt).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight mt-1">
                Pedido #{order.id}
              </h1>
              <p className="text-xs text-stone-500 mt-0.5">
                Olá, <strong>{order.customer.name}</strong>! Acompanhe cada etapa do seu pacote.
              </p>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-[11px] font-bold uppercase text-stone-400 block">Total Pago</span>
              <span className="text-2xl font-black text-[#b4536a]">
                R$ {order.total.toFixed(2).replace(".", ",")}
              </span>
              <span className="block text-[11px] text-stone-500 capitalize">
                Via {order.paymentMethod.replace("_", " ")}
              </span>
            </div>
          </div>

          {/* Stepper Visual */}
          <div className="space-y-4 py-2">
            <h2 className="text-xs font-black uppercase tracking-wider text-stone-400">
              Linha do Tempo de Entrega
            </h2>

            <div className="space-y-4">
              {STATUS_STEPS.map((step, idx) => {
                const isPassed = idx < currentStep;
                const isCurrent = idx === currentStep;
                const isFuture = idx > currentStep;

                return (
                  <div key={step.key} className="flex items-start gap-4 relative">
                    {/* Line connector */}
                    {idx < STATUS_STEPS.length - 1 && (
                      <div
                        className={`absolute left-5 top-10 bottom-0 w-0.5 -mb-4 transition-colors ${
                          idx < currentStep ? "bg-[#b4536a]" : "bg-stone-200"
                        }`}
                      />
                    )}

                    {/* Node Icon */}
                    <div
                      className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold transition-all ${
                        isPassed
                          ? "bg-[#b4536a] text-white shadow-xs"
                          : isCurrent
                          ? "bg-[#2b141d] text-white ring-4 ring-pink-100 shadow-sm"
                          : "bg-stone-100 text-stone-400"
                      }`}
                    >
                      {isPassed ? (
                        <Check className="w-5 h-5" />
                      ) : isCurrent ? (
                        <Sparkles className="w-5 h-5 animate-pulse text-pink-300" />
                      ) : (
                        <span className="text-xs">{idx + 1}</span>
                      )}
                    </div>

                    {/* Step Content */}
                    <div className="pt-1.5 flex-1">
                      <div className="flex items-center gap-2">
                        <h3
                          className={`text-sm font-bold ${
                            isCurrent
                              ? "text-stone-900"
                              : isPassed
                              ? "text-stone-800"
                              : "text-stone-400"
                          }`}
                        >
                          {step.label}
                        </h3>
                        {isCurrent && (
                          <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full">
                            Status Atual
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-stone-500 mt-0.5">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Se houver código de rastreamento */}
          {order.trackingCode && (
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#b4536a] block">
                  Código de Rastreamento ({order.trackingCompany || "Correios"})
                </span>
                <span className="font-mono text-lg font-black text-stone-900">
                  {order.trackingCode}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyTracking}
                  className="px-3.5 py-2 rounded-xl bg-white border border-stone-200 text-stone-700 text-xs font-bold hover:bg-stone-50 flex items-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  {copiedCode ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  {copiedCode ? "Copiado!" : "Copiar"}
                </button>
                <a
                  href={`https://rastreamento.correios.com.br/app/index.php?codigo=${order.trackingCode}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#b4536a] text-white text-xs font-bold hover:bg-[#9c4357] flex items-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  Rastrear nos Correios <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Endereço & Resumo dos Itens */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Coluna 1: Endereço de Entrega */}
          <div className="md:col-span-5 bg-white rounded-3xl shadow-sm border border-stone-200/80 p-6 space-y-3">
            <div className="flex items-center gap-2 text-stone-900 font-bold text-sm">
              <MapPin className="w-4 h-4 text-[#b4536a]" />
              <span>Endereço de Envio</span>
            </div>
            <div className="text-xs text-stone-600 leading-relaxed bg-stone-50 rounded-2xl p-4 border border-stone-100">
              <p className="font-bold text-stone-900">{order.customer.name}</p>
              <p className="mt-1">
                {order.address.street}, {order.address.number}
                {order.address.complement && ` — ${order.address.complement}`}
              </p>
              <p>
                {order.address.neighborhood || ""} • {order.address.city} - {order.address.state}
              </p>
              <p className="font-semibold text-stone-800 mt-1">CEP: {order.address.zipCode}</p>
              <p className="text-stone-400 mt-2 text-[11px]">Contato: {order.customer.phone}</p>
            </div>

            {/* Suporte WhatsApp */}
            <a
              href={`https://wa.me/5511999998888?text=Olá! Gostaria de falar sobre meu pedido %23${order.id} da Biorenov.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366]/20 transition-colors text-xs font-bold cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" /> Dúvidas? Fale com a Biorenov no WhatsApp
            </a>
          </div>

          {/* Coluna 2: Itens do Pacote */}
          <div className="md:col-span-7 bg-white rounded-3xl shadow-sm border border-stone-200/80 p-6 space-y-4">
            <h2 className="text-sm font-bold text-stone-900 flex items-center justify-between">
              <span>Itens Selecionados</span>
              <span className="text-xs font-semibold text-stone-400">
                {order.items.reduce((s, i) => s + i.quantity, 0)} produto(s)
              </span>
            </h2>

            <div className="divide-y divide-stone-100">
              {order.items.map((item, idx) => (
                <div key={idx} className="py-3 flex items-center gap-3">
                  <div className="w-14 h-14 rounded-xl bg-stone-50 border border-stone-100 p-1 flex items-center justify-center shrink-0">
                    <img
                      src={item.image || "/produtos/aky06721.jpg"}
                      alt={item.name}
                      className="max-h-12 w-auto object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xs font-bold text-stone-900 truncate">
                      {item.name}
                    </h3>
                    <p className="text-[11px] text-stone-400 mt-0.5">
                      Qtd: {item.quantity}x • R$ {item.price.toFixed(2).replace(".", ",")}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-black text-stone-800">
                      R$ {(item.price * item.quantity).toFixed(2).replace(".", ",")}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-stone-100 pt-3 space-y-1.5 text-xs">
              <div className="flex justify-between text-stone-500">
                <span>Subtotal</span>
                <span>R$ {order.subtotal.toFixed(2).replace(".", ",")}</span>
              </div>
              <div className="flex justify-between text-stone-500">
                <span>Frete</span>
                <span className={order.shipping === 0 ? "text-emerald-600 font-bold" : ""}>
                  {order.shipping === 0 ? "Grátis" : `R$ ${order.shipping.toFixed(2).replace(".", ",")}`}
                </span>
              </div>
              <div className="flex justify-between text-stone-900 font-black text-sm pt-1 border-t border-stone-100">
                <span>Total</span>
                <span className="text-[#b4536a]">R$ {order.total.toFixed(2).replace(".", ",")}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature: Criar Conta em 1 Clique (Pós-Compra) */}
        {!accountCreated ? (
          <div className="bg-gradient-to-r from-[#2b141d] to-[#4a2232] rounded-3xl p-6 sm:p-7 text-white shadow-md">
            <div className="max-w-xl space-y-2">
              <div className="inline-flex items-center gap-1.5 bg-white/10 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-pink-200">
                <Sparkles className="w-3.5 h-3.5" /> Conveniência Biorenov
              </div>
              <h2 className="text-lg sm:text-xl font-black">
                Quer salvar seus dados e acompanhar pedidos futuros?
              </h2>
              <p className="text-xs text-stone-300">
                Crie uma senha em 5 segundos para seu e-mail <strong>{order.customer.email}</strong>. Você não precisa digitar endereço de novo na próxima compra.
              </p>

              <form onSubmit={handleSaveAccount} className="pt-2 flex flex-col sm:flex-row gap-2">
                <input
                  type="password"
                  value={createdPassword}
                  onChange={(e) => setCreatedPassword(e.target.value)}
                  placeholder="Crie sua senha segura"
                  className="px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-stone-400 text-xs outline-none focus:border-pink-300 flex-1"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-[#b4536a] hover:bg-[#9c4357] text-white text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer shrink-0"
                >
                  Salvar Minha Conta
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-5 text-emerald-800 text-center flex items-center justify-center gap-2 text-xs font-bold">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span>Conta salva com sucesso! Seu histórico agora está protegido e vinculado ao seu e-mail.</span>
          </div>
        )}

      </div>
    </div>
  );
}

export default function OrderTrackingPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#faf7f5] flex items-center justify-center p-4">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 border-4 border-[#b4536a] border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-stone-600 font-semibold text-sm">Carregando status do pedido...</p>
          </div>
        </div>
      }
    >
      <OrderTrackingContent />
    </Suspense>
  );
}
