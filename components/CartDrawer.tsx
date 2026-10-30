"use client";

import React from "react";
import { useCart } from "@/lib/cart-context";
import { X, Trash2, Plus, Minus, ShoppingBag, ShieldCheck, ArrowRight, Zap, Truck } from "lucide-react";

export function CartDrawer() {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    removeItem,
    updateQuantity,
    subtotal,
    shippingCost,
    total,
    freeShippingThreshold,
    remainingForFreeShipping,
    setIsCheckoutOpen,
  } = useCart();

  if (!isCartOpen) return null;

  const freeShippingProgress = Math.min(
    100,
    Math.round((subtotal / freeShippingThreshold) * 100)
  );

  const pixDiscountTotal = total * 0.95;

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#faf8f5] shadow-2xl flex flex-col border-l border-stone-200">
          {/* Header */}
          <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#1b382b]" />
              <h2 className="font-serif text-lg font-bold text-stone-900">
                Seu Carrinho
              </h2>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-stone-100 text-stone-700">
                {items.length} {items.length === 1 ? "item" : "itens"}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="bg-[#f4ece1] px-5 py-3 border-b border-[#e5d5c0]">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#1b382b] mb-1.5">
              <Truck className="w-4 h-4 text-[#c49a6c]" />
              {remainingForFreeShipping > 0 ? (
                <span>
                  Faltam apenas{" "}
                  <strong>R$ {remainingForFreeShipping.toFixed(2).replace(".", ",")}</strong> para{" "}
                  <strong>Frete Grátis</strong>!
                </span>
              ) : (
                <span className="text-emerald-800">
                  🎉 Parabéns! Você ganhou <strong>Frete Grátis</strong> para todo o Brasil!
                </span>
              )}
            </div>
            <div className="w-full h-2 bg-stone-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#1b382b] rounded-full transition-all duration-500"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8">
                <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 mb-4">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-lg font-bold text-stone-800 mb-1">
                  Seu carrinho está vazio
                </h3>
                <p className="text-xs text-stone-500 mb-6 max-w-xs">
                  Adicione nossos tratamentos dermocosméticos para começar seu protocolo de renovação.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 rounded-full bg-[#1b382b] text-white text-xs font-semibold hover:bg-[#142920] transition-colors"
                >
                  Ver Produtos
                </button>
              </div>
            ) : (
              items.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="flex gap-4 p-3.5 bg-white rounded-2xl border border-stone-200/80 shadow-sm"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded-xl bg-stone-100 flex-shrink-0"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-xs font-bold text-stone-900 leading-snug line-clamp-2">
                          {product.name}
                        </h4>
                        <button
                          onClick={() => removeItem(product.id)}
                          className="text-stone-400 hover:text-red-600 transition-colors p-0.5"
                          title="Remover"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-[11px] text-[#8e6840] font-medium mt-0.5">
                        {product.volume}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-stone-100">
                      {/* Quantity Selector */}
                      <div className="flex items-center border border-stone-200 rounded-lg bg-stone-50">
                        <button
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          className="p-1 hover:bg-stone-200 text-stone-600 rounded-l-lg transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-bold text-stone-800">
                          {quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          className="p-1 hover:bg-stone-200 text-stone-600 rounded-r-lg transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Total for item */}
                      <span className="text-sm font-bold text-[#1b382b]">
                        R$ {(product.price * quantity).toFixed(2).replace(".", ",")}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Summary & Checkout CTA */}
          {items.length > 0 && (
            <div className="p-5 bg-white border-t border-stone-200 space-y-4">
              <div className="space-y-1.5 text-xs text-stone-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-stone-800">
                    R$ {subtotal.toFixed(2).replace(".", ",")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Frete</span>
                  <span className="font-semibold">
                    {shippingCost === 0 ? (
                      <strong className="text-emerald-700">GRÁTIS</strong>
                    ) : (
                      `R$ ${shippingCost.toFixed(2).replace(".", ",")}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold text-[#1b382b] pt-2 border-t border-stone-200">
                  <span>Total</span>
                  <span>R$ {total.toFixed(2).replace(".", ",")}</span>
                </div>
                <div className="flex items-center justify-between text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1.5 rounded-lg border border-emerald-200">
                  <span className="flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 text-emerald-600 fill-current" />
                    No Pix com 5% de desconto:
                  </span>
                  <span>R$ {pixDiscountTotal.toFixed(2).replace(".", ",")}</span>
                </div>
              </div>

              <button
                onClick={handleProceedToCheckout}
                className="w-full py-4 rounded-xl bg-[#1b382b] text-white text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#142920] shadow-md hover:shadow-lg transition-all"
              >
                <span>Finalizar Pedido</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Pagamento Seguro via Mercado Pago • Pix ou Cartão</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
