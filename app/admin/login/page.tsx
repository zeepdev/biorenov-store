"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Mail, ArrowRight, ShieldCheck } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("isaqueduarte07@gmail.com");
  const [password, setPassword] = useState("admin123");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Autenticação local ágil para acesso à administração
    if (
      (email.toLowerCase().includes("isaqueduarte07@gmail.com") ||
        email.toLowerCase().includes("douglas") ||
        email.toLowerCase().includes("admin")) &&
      password.length >= 4
    ) {
      if (typeof window !== "undefined") {
        localStorage.setItem("biorenov_admin_auth", JSON.stringify({
          email,
          name: email.split("@")[0],
          role: "admin",
          loggedAt: new Date().toISOString(),
        }));
      }
      setTimeout(() => {
        router.push("/admin");
      }, 500);
    } else {
      setError("Credenciais inválidas. Verifique seu e-mail e senha de administrador.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1115] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-[#24171e] border border-stone-800 rounded-3xl p-8 shadow-2xl relative">
        
        {/* Glow de fundo */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-40 h-40 bg-[#b4536a]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="text-center space-y-2 mb-8 relative z-10">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#b4536a] to-[#78283a] text-white flex items-center justify-center mx-auto shadow-md">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-black text-white tracking-tight">
            Biorenov Admin
          </h1>
          <p className="text-xs text-stone-400">
            Painel Executivo, Gestão de Pedidos & DRE
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs text-center font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
          <div>
            <label className="text-[11px] font-bold uppercase tracking-wider text-stone-300 block mb-1.5">
              E-mail de Acesso
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seuemail@biorenov.com.br"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#170e13] border border-stone-700 text-white placeholder-stone-500 text-xs outline-none focus:border-[#b4536a] transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="text-[11px] font-bold uppercase tracking-wider text-stone-300 block mb-1.5">
              Senha
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#170e13] border border-stone-700 text-white placeholder-stone-500 text-xs outline-none focus:border-[#b4536a] transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 py-3.5 rounded-xl bg-[#b4536a] hover:bg-[#9c4357] text-white text-xs font-black uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {loading ? "Entrando..." : "Acessar Painel"}
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-8 pt-4 border-t border-stone-800/80 text-center">
          <p className="text-[11px] text-stone-500">
            Acesso restrito à administração da Biorenov & Click Aky
          </p>
        </div>
      </div>
    </div>
  );
}
