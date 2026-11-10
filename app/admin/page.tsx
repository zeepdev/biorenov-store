"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import {
  Package,
  TrendingUp,
  DollarSign,
  Users,
  ShoppingCart,
  CheckCircle2,
  Clock,
  Truck,
  ExternalLink,
  Plus,
  Trash2,
  Edit,
  Search,
  Filter,
  ArrowUpRight,
  ShieldCheck,
  ChevronRight,
  Calculator,
  RefreshCw,
  LogOut,
  Send,
  MessageCircle,
} from "lucide-react";
import { Order, OrderStatus, Expense, AdminUser } from "@/lib/db";
import { DREResult, formatCurrency, formatPercent } from "@/lib/dreEngine";

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<"cockpit" | "pedidos" | "dre" | "equipe">("cockpit");
  const [mesAno, setMesAno] = useState("2026-11");

  // Dados do backend
  const [orders, setOrders] = useState<Order[]>([]);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [users, setUsers] = useState<Omit<AdminUser, "passwordHash">[]>([]);
  const [dre, setDre] = useState<DREResult | null>(null);
  const [loading, setLoading] = useState(true);

  // Filtros e busca de pedidos
  const [orderSearch, setOrderSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("todos");

  // Modal / Edição de pedido
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [newStatus, setNewStatus] = useState<OrderStatus>("separacao");
  const [trackingCode, setTrackingCode] = useState("");
  const [trackingCompany, setTrackingCompany] = useState("Correios");
  const [isUpdatingOrder, setIsUpdatingOrder] = useState(false);

  // Nova despesa modal/form
  const [showAddExpense, setShowAddExpense] = useState(false);
  const [newExpense, setNewExpense] = useState({
    descricao: "",
    categoria: "Marketing",
    valor: "",
    mes_competencia: "2026-11",
  });

  // Novo usuário
  const [showAddUser, setShowAddUser] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "operador" as const,
    password: "",
  });

  // Simulador de Lucro Alvo na DRE
  const [lucroAlvo, setLucroAlvo] = useState(25000);

  // Sincroniza mês real no cliente
  useEffect(() => {
    const currentMonth = new Date().toISOString().substring(0, 7);
    setMesAno(currentMonth);
    setNewExpense((prev) => ({ ...prev, mes_competencia: currentMonth }));
  }, []);

  // Carregar dados
  const fetchData = async () => {
    setLoading(true);
    try {
      const [ordersRes, dreRes, usersRes, expensesRes] = await Promise.all([
        fetch("/api/admin/orders"),
        fetch(`/api/admin/dre?mes=${mesAno}`),
        fetch("/api/admin/users"),
        fetch(`/api/admin/expenses?mes=${mesAno}`),
      ]);

      if (ordersRes.ok) {
        const data = await ordersRes.json();
        setOrders(data.orders || []);
      }
      if (dreRes.ok) {
        const data = await dreRes.json();
        setDre(data.dre || null);
      }
      if (usersRes.ok) {
        const data = await usersRes.json();
        setUsers(data.users || []);
      }
      if (expensesRes.ok) {
        const data = await expensesRes.json();
        setExpenses(data.expenses || []);
      }
    } catch (err) {
      console.error("Erro ao buscar dados admin:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [mesAno]);

  // Atualizar status de pedido
  const handleUpdateOrderStatus = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedOrder) return;
    setIsUpdatingOrder(true);

    try {
      const res = await fetch("/api/admin/orders", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderId: selectedOrder.id,
          status: newStatus,
          trackingCode: trackingCode || undefined,
          trackingCompany: trackingCompany || undefined,
        }),
      });

      if (res.ok) {
        await fetchData();
        setSelectedOrder(null);
      }
    } catch (err) {
      console.error("Erro ao atualizar status:", err);
    } finally {
      setIsUpdatingOrder(false);
    }
  };

  // Adicionar despesa
  const handleAddExpense = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newExpense.descricao || !newExpense.valor) return;

    try {
      const res = await fetch("/api/admin/expenses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...newExpense,
          valor: parseFloat(newExpense.valor),
        }),
      });

      if (res.ok) {
        setNewExpense({
          descricao: "",
          categoria: "Marketing",
          valor: "",
          mes_competencia: mesAno,
        });
        setShowAddExpense(false);
        await fetchData();
      }
    } catch (err) {
      console.error("Erro ao adicionar despesa:", err);
    }
  };

  // Deletar despesa
  const handleDeleteExpense = async (id: string) => {
    if (!confirm("Deseja realmente remover esta despesa?")) return;
    try {
      const res = await fetch(`/api/admin/expenses?id=${id}`, { method: "DELETE" });
      if (res.ok) await fetchData();
    } catch (err) {
      console.error("Erro ao remover despesa:", err);
    }
  };

  // Criar Usuário
  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUser.name || !newUser.email) return;

    try {
      const res = await fetch("/api/admin/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      if (res.ok) {
        setNewUser({ name: "", email: "", role: "operador", password: "" });
        setShowAddUser(false);
        await fetchData();
      }
    } catch (err) {
      console.error("Erro ao adicionar usuário:", err);
    }
  };

  // Filtragem de pedidos
  const filteredOrders = useMemo(() => {
    return orders.filter((o) => {
      const matchSearch =
        o.id.toLowerCase().includes(orderSearch.toLowerCase()) ||
        o.customer.name.toLowerCase().includes(orderSearch.toLowerCase()) ||
        o.customer.email.toLowerCase().includes(orderSearch.toLowerCase());

      const matchStatus = statusFilter === "todos" || o.status === statusFilter;
      return matchSearch && matchStatus;
    });
  }, [orders, orderSearch, statusFilter]);

  // Cálculo de simulação de faturamento para a DRE
  const simulacaoMeta = useMemo(() => {
    if (!dre) return { faturamentoNecessario: 0, pedidosNecessarios: 0 };
    const indice = (dre.margemContribuicaoPercent || 0) / 100;
    if (indice <= 0) return { faturamentoNecessario: 0, pedidosNecessarios: 0 };

    const faturamentoNecessario = (dre.totalDespesasFixas + Number(lucroAlvo)) / indice;
    const ticket = dre.ticketMedio > 0 ? dre.ticketMedio : 250;
    const pedidosNecessarios = Math.ceil(faturamentoNecessario / ticket);
    return { faturamentoNecessario, pedidosNecessarios };
  }, [dre, lucroAlvo]);

  const getStatusBadge = (status: OrderStatus) => {
    switch (status) {
      case "pago":
        return <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-emerald-100 text-emerald-700">Pago</span>;
      case "separacao":
        return <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-blue-100 text-blue-700">Em Separação</span>;
      case "enviado":
        return <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-purple-100 text-purple-700">Enviado</span>;
      case "entregue":
        return <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-teal-100 text-teal-700">Entregue</span>;
      case "cancelado":
        return <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-rose-100 text-rose-700">Cancelado</span>;
      default:
        return <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-amber-100 text-amber-700">Pendente</span>;
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f4f2] text-[#1c1619] font-sans">
      
      {/* Top Header Admin */}
      <header className="bg-[#24151c] text-white border-b border-[#3b242e] sticky top-0 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#b4536a] text-white flex items-center justify-center font-black text-base shadow-xs">
              B
            </div>
            <div>
              <span className="text-base font-black tracking-tight block leading-none">
                Biorenov <span className="text-pink-300 font-semibold text-xs">Admin & DRE</span>
              </span>
              <span className="text-[10px] text-stone-400">Ambiente de Gestão Integrada</span>
            </div>
          </div>

          {/* User badge and actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-stone-200 text-xs font-bold transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" /> Ver Loja Ao Vivo
            </Link>

            <div className="flex items-center gap-2 pl-3 border-l border-white/10 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold text-stone-300">isaqueduarte07@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex space-x-1 sm:space-x-4 border-t border-white/5 overflow-x-auto">
          <button
            onClick={() => setActiveTab("cockpit")}
            className={`py-3 px-3 sm:px-4 text-xs font-black uppercase tracking-wider border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "cockpit"
                ? "border-[#b4536a] text-white"
                : "border-transparent text-stone-400 hover:text-stone-200"
            }`}
          >
            Cockpit Executivo
          </button>
          <button
            onClick={() => setActiveTab("pedidos")}
            className={`py-3 px-3 sm:px-4 text-xs font-black uppercase tracking-wider border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "pedidos"
                ? "border-[#b4536a] text-white"
                : "border-transparent text-stone-400 hover:text-stone-200"
            }`}
          >
            Pedidos ({orders.length})
          </button>
          <button
            onClick={() => setActiveTab("dre")}
            className={`py-3 px-3 sm:px-4 text-xs font-black uppercase tracking-wider border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "dre"
                ? "border-[#b4536a] text-white"
                : "border-transparent text-stone-400 hover:text-stone-200"
            }`}
          >
            DRE Gerencial
          </button>
          <button
            onClick={() => setActiveTab("equipe")}
            className={`py-3 px-3 sm:px-4 text-xs font-black uppercase tracking-wider border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "equipe"
                ? "border-[#b4536a] text-white"
                : "border-transparent text-stone-400 hover:text-stone-200"
            }`}
          >
            Equipe ({users.length})
          </button>
        </div>
      </header>

      {/* Main Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* ======================================================== */}
        {/* TAB 1: COCKPIT EXECUTIVO                                 */}
        {/* ======================================================== */}
        {activeTab === "cockpit" && dre && (
          <div className="space-y-6">
            
            {/* Top Bar with Month Selector */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-3xl border border-stone-200 shadow-2xs">
              <div>
                <h1 className="text-xl font-black text-stone-900 tracking-tight">
                  Cockpit de Performance da Loja
                </h1>
                <p className="text-xs text-stone-500">
                  Visão consolidada de vendas, margens e status operacional da Biorenov.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase text-stone-500">Mês:</span>
                <input
                  type="month"
                  value={mesAno}
                  onChange={(e) => setMesAno(e.target.value)}
                  className="px-3 py-1.5 rounded-xl border border-stone-300 text-xs font-bold text-stone-800 bg-stone-50 outline-none focus:border-[#b4536a]"
                />
                <button
                  onClick={fetchData}
                  className="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors cursor-pointer"
                  title="Atualizar Dados"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* Faturamento Bruto */}
              <div className="bg-white rounded-3xl p-5 border border-stone-200 shadow-2xs relative overflow-hidden">
                <span className="text-[11px] font-black uppercase tracking-wider text-stone-400 block mb-1">
                  Faturamento Bruto
                </span>
                <span className="text-2xl font-black text-stone-900 block tracking-tight">
                  {formatCurrency(dre.receitaBrutaTotal)}
                </span>
                <span className="text-xs text-stone-500 mt-2 block">
                  {dre.totalPedidos} pedido(s) confirmados
                </span>
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-pink-100 text-[#b4536a] flex items-center justify-center font-bold">
                  <DollarSign className="w-5 h-5" />
                </div>
              </div>

              {/* Ticket Médio */}
              <div className="bg-white rounded-3xl p-5 border border-stone-200 shadow-2xs relative overflow-hidden">
                <span className="text-[11px] font-black uppercase tracking-wider text-stone-400 block mb-1">
                  Ticket Médio
                </span>
                <span className="text-2xl font-black text-stone-900 block tracking-tight">
                  {formatCurrency(dre.ticketMedio)}
                </span>
                <span className="text-xs text-stone-500 mt-2 block">
                  Média por carrinho fechado
                </span>
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                  <ShoppingCart className="w-5 h-5" />
                </div>
              </div>

              {/* Margem de Contribuição */}
              <div className="bg-white rounded-3xl p-5 border border-stone-200 shadow-2xs relative overflow-hidden">
                <span className="text-[11px] font-black uppercase tracking-wider text-stone-400 block mb-1">
                  Margem de Contribuição
                </span>
                <span className="text-2xl font-black text-blue-600 block tracking-tight">
                  {formatCurrency(dre.margemContribuicaoValor)}
                </span>
                <span className="text-xs text-stone-500 mt-2 block">
                  <strong>{formatPercent(dre.margemContribuicaoPercent)}</strong> da receita líquida
                </span>
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  <TrendingUp className="w-5 h-5" />
                </div>
              </div>

              {/* Lucro Operacional Líquido */}
              <div className="bg-white rounded-3xl p-5 border border-stone-200 shadow-2xs relative overflow-hidden">
                <span className="text-[11px] font-black uppercase tracking-wider text-stone-400 block mb-1">
                  Lucro Operacional (EBITDA)
                </span>
                <span
                  className={`text-2xl font-black block tracking-tight ${
                    dre.lucroLiquidoOperacional >= 0 ? "text-emerald-600" : "text-rose-600"
                  }`}
                >
                  {formatCurrency(dre.lucroLiquidoOperacional)}
                </span>
                <span className="text-xs text-stone-500 mt-2 block">
                  Após custos, taxas e despesas fixas
                </span>
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              </div>

            </div>

            {/* Quick Orders Overview */}
            <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base font-black text-stone-900 tracking-tight">
                    Últimos Pedidos Registrados
                  </h2>
                  <p className="text-xs text-stone-400">
                    Acompanhamento imediato das compras mais recentes.
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab("pedidos")}
                  className="text-xs font-bold text-[#b4536a] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  Ver todos os {orders.length} pedidos <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-stone-50 text-stone-500 font-bold uppercase tracking-wider text-[10px] border-y border-stone-200">
                    <tr>
                      <th className="py-3 px-4">Pedido</th>
                      <th className="py-3 px-4">Data</th>
                      <th className="py-3 px-4">Cliente</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4 text-right">Total</th>
                      <th className="py-3 px-4 text-center">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {orders.slice(0, 5).map((order) => (
                      <tr key={order.id} className="hover:bg-stone-50/80 transition-colors">
                        <td className="py-3.5 px-4 font-mono font-bold text-stone-900">
                          {order.id}
                        </td>
                        <td className="py-3.5 px-4 text-stone-500">
                          {new Date(order.createdAt).toLocaleDateString("pt-BR")}
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="font-bold text-stone-900 block">{order.customer.name}</span>
                          <span className="text-[11px] text-stone-400">{order.customer.phone}</span>
                        </td>
                        <td className="py-3.5 px-4">
                          {getStatusBadge(order.status)}
                        </td>
                        <td className="py-3.5 px-4 text-right font-black text-stone-900">
                          R$ {order.total.toFixed(2).replace(".", ",")}
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          <button
                            onClick={() => {
                              setSelectedOrder(order);
                              setNewStatus(order.status);
                              setTrackingCode(order.trackingCode || "");
                              setTrackingCompany(order.trackingCompany || "Correios");
                            }}
                            className="px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-[#b4536a] hover:text-white text-stone-700 text-[11px] font-bold transition-colors cursor-pointer"
                          >
                            Gerenciar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 2: GESTÃO COMPLETA DE PEDIDOS                       */}
        {/* ======================================================== */}
        {activeTab === "pedidos" && (
          <div className="space-y-6">
            
            {/* Filter and Search Bar */}
            <div className="bg-white p-5 rounded-3xl border border-stone-200 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-4">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={orderSearch}
                  onChange={(e) => setOrderSearch(e.target.value)}
                  placeholder="Buscar por cliente, pedido #BIO ou e-mail..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 text-xs bg-stone-50 outline-none focus:border-[#b4536a]"
                />
              </div>

              {/* Status Filter Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
                {["todos", "pago", "separacao", "enviado", "entregue", "pendente"].map((st) => (
                  <button
                    key={st}
                    onClick={() => setStatusFilter(st)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                      statusFilter === st
                        ? "bg-[#2b141d] text-white shadow-xs"
                        : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            {/* Orders Table */}
            <div className="bg-white rounded-3xl border border-stone-200 shadow-2xs overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-stone-50 text-stone-500 font-bold uppercase tracking-wider text-[10px] border-b border-stone-200">
                    <tr>
                      <th className="py-3 px-4">Pedido</th>
                      <th className="py-3 px-4">Data</th>
                      <th className="py-3 px-4">Cliente & Destino</th>
                      <th className="py-3 px-4">Itens</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4">Rastreio</th>
                      <th className="py-3 px-4 text-right">Total</th>
                      <th className="py-3 px-4 text-center">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {filteredOrders.map((order) => (
                      <tr key={order.id} className="hover:bg-stone-50/80 transition-colors">
                        <td className="py-3.5 px-4">
                          <span className="font-mono font-black text-stone-900 block">{order.id}</span>
                          <span className="text-[10px] text-stone-400 capitalize">{order.paymentMethod}</span>
                        </td>
                        <td className="py-3.5 px-4 text-stone-500">
                          {new Date(order.createdAt).toLocaleDateString("pt-BR", {
                            day: "2-digit",
                            month: "2-digit",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="font-bold text-stone-900 block">{order.customer.name}</span>
                          <span className="text-[11px] text-stone-500">{order.address.city}/{order.address.state}</span>
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="text-stone-700 font-medium">
                            {order.items.reduce((s, i) => s + i.quantity, 0)} item(ns)
                          </span>
                        </td>
                        <td className="py-3.5 px-4">
                          {getStatusBadge(order.status)}
                        </td>
                        <td className="py-3.5 px-4 font-mono text-[11px]">
                          {order.trackingCode ? (
                            <span className="text-[#b4536a] font-bold">{order.trackingCode}</span>
                          ) : (
                            <span className="text-stone-400 italic">Pendente</span>
                          )}
                        </td>
                        <td className="py-3.5 px-4 text-right font-black text-stone-900">
                          R$ {order.total.toFixed(2).replace(".", ",")}
                        </td>
                        <td className="py-3.5 px-4 text-center space-x-1">
                          <button
                            onClick={() => {
                              setSelectedOrder(order);
                              setNewStatus(order.status);
                              setTrackingCode(order.trackingCode || "");
                              setTrackingCompany(order.trackingCompany || "Correios");
                            }}
                            className="px-2.5 py-1.5 rounded-lg bg-stone-100 hover:bg-[#b4536a] hover:text-white text-stone-700 text-[11px] font-bold transition-colors cursor-pointer"
                          >
                            Gerenciar
                          </button>
                          <Link
                            href={`/pedido/${order.id}`}
                            target="_blank"
                            className="p-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-600 inline-block transition-colors"
                            title="Ver Página de Rastreamento do Cliente"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 3: DRE GERENCIAL (MOTOR ZP SISTEMA)                  */}
        {/* ======================================================== */}
        {activeTab === "dre" && dre && (
          <div className="space-y-6">
            
            {/* Header com Seletor de Competência */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-3xl border border-stone-200 shadow-2xs">
              <div>
                <h1 className="text-xl font-black text-stone-900 tracking-tight">
                  DRE Gerencial — Regime de Competência
                </h1>
                <p className="text-xs text-stone-500">
                  Demonstração do Resultado do Exercício: Margem de Contribuição, Deduções e Break-Even.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="month"
                  value={mesAno}
                  onChange={(e) => setMesAno(e.target.value)}
                  className="px-3 py-1.5 rounded-xl border border-stone-300 text-xs font-bold text-stone-800 bg-stone-50 outline-none focus:border-[#b4536a]"
                />
                <button
                  onClick={() => setShowAddExpense(true)}
                  className="px-3.5 py-2 rounded-xl bg-[#b4536a] hover:bg-[#9c4357] text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Plus className="w-4 h-4" /> Lançar Despesa Fixa
                </button>
              </div>
            </div>

            {/* DRE Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-3xl p-5 border border-stone-200 shadow-2xs">
                <span className="text-[10px] font-black uppercase text-stone-400 block">Margem de Contribuição</span>
                <span className="text-2xl font-black text-blue-600 block mt-1">{formatCurrency(dre.margemContribuicaoValor)}</span>
                <span className="text-xs text-stone-500 mt-1 block">Índice: <strong>{formatPercent(dre.margemContribuicaoPercent)}</strong></span>
              </div>

              <div className="bg-white rounded-3xl p-5 border border-stone-200 shadow-2xs">
                <span className="text-[10px] font-black uppercase text-stone-400 block">Ponto de Equilíbrio (Break-Even)</span>
                <span className="text-2xl font-black text-stone-900 block mt-1">{formatCurrency(dre.pontoEquilibrioFinanceiro)}</span>
                <span className={`text-xs mt-1 block font-bold ${dre.atingimentoBreakEven >= 100 ? "text-emerald-600" : "text-amber-600"}`}>
                  {Math.round(dre.atingimentoBreakEven)}% atingido no mês
                </span>
              </div>

              <div className="bg-white rounded-3xl p-5 border border-stone-200 shadow-2xs">
                <span className="text-[10px] font-black uppercase text-stone-400 block">Faturamento Mínimo / Dia</span>
                <span className="text-2xl font-black text-stone-900 block mt-1">{formatCurrency(dre.faturamentoMinimoDiario)}</span>
                <span className="text-xs text-stone-500 mt-1 block">Para cobrir estrutura fixa</span>
              </div>

              <div className="bg-white rounded-3xl p-5 border border-stone-200 shadow-2xs">
                <span className="text-[10px] font-black uppercase text-stone-400 block">Lucro Líquido (EBITDA)</span>
                <span className={`text-2xl font-black block mt-1 ${dre.lucroLiquidoOperacional >= 0 ? "text-emerald-600" : "text-rose-600"}`}>
                  {formatCurrency(dre.lucroLiquidoOperacional)}
                </span>
                <span className="text-xs text-stone-500 mt-1 block">Margem Líquida: <strong>{formatPercent(dre.margemLiquidaPercent)}</strong></span>
              </div>
            </div>

            {/* DRE Structured Table */}
            <div className="bg-white rounded-3xl border border-stone-200 shadow-2xs p-6 space-y-4">
              <h2 className="text-base font-black text-stone-900 tracking-tight">
                Demonstrativo Detalhado do Mês ({mesAno})
              </h2>

              <div className="divide-y divide-stone-100 text-xs">
                {/* 1. Receita Bruta */}
                <div className="py-3 flex justify-between items-center font-black text-stone-900 text-sm bg-stone-50/70 px-3 rounded-lg">
                  <span>(+) 1. RECEITA OPERACIONAL BRUTA</span>
                  <span>{formatCurrency(dre.receitaBrutaTotal)}</span>
                </div>

                {/* 2. Deduções */}
                <div className="py-2.5 flex justify-between items-center px-3 text-stone-600">
                  <span className="pl-4">(-) Impostos Gerenciais (Simples Nacional ~6%)</span>
                  <span className="text-rose-600 font-semibold">- {formatCurrency(dre.impostosDeducao)}</span>
                </div>
                <div className="py-2.5 flex justify-between items-center px-3 text-stone-600">
                  <span className="pl-4">(-) Taxas de Gateway (Mercado Pago ~3.99%)</span>
                  <span className="text-rose-600 font-semibold">- {formatCurrency(dre.taxasGatewayDeducao)}</span>
                </div>

                {/* 3. Receita Líquida */}
                <div className="py-3 flex justify-between items-center font-black text-stone-900 px-3 bg-stone-50/50 rounded-lg">
                  <span>(=) 2. RECEITA OPERACIONAL LÍQUIDA</span>
                  <span>{formatCurrency(dre.receitaLiquida)}</span>
                </div>

                {/* 4. Custos Variáveis */}
                <div className="py-2.5 flex justify-between items-center px-3 text-stone-600">
                  <span className="pl-4">(-) Custo dos Cosméticos / Fórmulas (CMV ~28%)</span>
                  <span className="text-rose-600 font-semibold">- {formatCurrency(dre.custoMercadoriasVendidas)}</span>
                </div>
                <div className="py-2.5 flex justify-between items-center px-3 text-stone-600">
                  <span className="pl-4">(-) Fretes Operacionais</span>
                  <span className="text-rose-600 font-semibold">- {formatCurrency(dre.custoFrete)}</span>
                </div>

                {/* 5. Margem Contribuição */}
                <div className="py-3 flex justify-between items-center font-black text-blue-700 px-3 bg-blue-50/50 rounded-lg">
                  <span>(=) 3. MARGEM DE CONTRIBUIÇÃO ({formatPercent(dre.margemContribuicaoPercent)})</span>
                  <span>{formatCurrency(dre.margemContribuicaoValor)}</span>
                </div>

                {/* 6. Despesas Fixas */}
                <div className="py-2.5 flex justify-between items-center px-3 font-bold text-stone-800 bg-stone-50/30">
                  <span>(-) 4. DESPESAS FIXAS ESTRUTURAIS</span>
                  <span className="text-rose-600">- {formatCurrency(dre.totalDespesasFixas)}</span>
                </div>
                {Object.entries(dre.despesasPorCategoria).map(([cat, val]) => (
                  <div key={cat} className="py-2 flex justify-between items-center px-3 text-stone-500 pl-8">
                    <span>{cat}</span>
                    <span>{formatCurrency(val)}</span>
                  </div>
                ))}

                {/* 7. Lucro Líquido EBITDA */}
                <div className="py-4 flex justify-between items-center font-black text-base px-3 bg-emerald-50 rounded-xl mt-2">
                  <span className="text-emerald-900">(=) RESULTADO OPERACIONAL LÍQUIDO (EBITDA)</span>
                  <span className={dre.lucroLiquidoOperacional >= 0 ? "text-emerald-700" : "text-rose-600"}>
                    {formatCurrency(dre.lucroLiquidoOperacional)}
                  </span>
                </div>
              </div>
            </div>

            {/* Simulador de Faturamento para Lucro Alvo */}
            <div className="bg-gradient-to-r from-[#2b141d] to-[#421a2b] rounded-3xl p-6 sm:p-8 text-white space-y-4">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-pink-300" />
                <h3 className="font-black text-lg">Simulador de Meta de Lucro Líquido</h3>
              </div>
              <p className="text-xs text-stone-300 max-w-xl">
                Baseado na sua Margem de Contribuição atual ({formatPercent(dre.margemContribuicaoPercent)}) e Despesas Fixas ({formatCurrency(dre.totalDespesasFixas)}):
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <div className="w-full sm:w-auto">
                  <label className="text-[10px] uppercase font-bold text-pink-200 block mb-1">
                    Quanto deseja de Lucro Líquido?
                  </label>
                  <input
                    type="number"
                    value={lucroAlvo}
                    onChange={(e) => setLucroAlvo(Number(e.target.value))}
                    className="px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white font-black text-sm outline-none w-full sm:w-48"
                  />
                </div>

                <div className="bg-white/10 rounded-2xl p-4 flex-1 flex flex-col sm:flex-row sm:items-center justify-around gap-4 border border-white/10">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-stone-300 block">Faturamento Necessário</span>
                    <span className="text-xl font-black text-pink-300">{formatCurrency(simulacaoMeta.faturamentoNecessario)}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-stone-300 block">Pedidos Necessários</span>
                    <span className="text-xl font-black text-white">{simulacaoMeta.pedidosNecessarios} vendas</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabela de Despesas Fixas Cadastradas */}
            <div className="bg-white rounded-3xl border border-stone-200 shadow-2xs p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-black text-stone-900 uppercase tracking-wider">
                  Despesas Fixas Cadastradas ({expenses.length})
                </h3>
                <button
                  onClick={() => setShowAddExpense(true)}
                  className="text-xs font-bold text-[#b4536a] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Plus className="w-4 h-4" /> Adicionar
                </button>
              </div>

              <div className="divide-y divide-stone-100 text-xs">
                {expenses.map((exp) => (
                  <div key={exp.id} className="py-3 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-stone-900 block">{exp.descricao}</span>
                      <span className="text-[11px] text-stone-400">{exp.categoria} • Venc: {exp.data_vencimento}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-black text-stone-900">R$ {exp.valor.toFixed(2).replace(".", ",")}</span>
                      <button
                        onClick={() => handleDeleteExpense(exp.id)}
                        className="text-stone-400 hover:text-rose-600 transition-colors p-1 cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 4: EQUIPE & USUÁRIOS                                */}
        {/* ======================================================== */}
        {activeTab === "equipe" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-3xl border border-stone-200 shadow-2xs">
              <div>
                <h1 className="text-xl font-black text-stone-900 tracking-tight">
                  Contas de Acesso & Equipe
                </h1>
                <p className="text-xs text-stone-500">
                  Gerencie quem tem permissão para acompanhar pedidos, alterar status e visualizar a DRE.
                </p>
              </div>

              <button
                onClick={() => setShowAddUser(true)}
                className="px-4 py-2.5 rounded-xl bg-[#b4536a] hover:bg-[#9c4357] text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Plus className="w-4 h-4" /> Adicionar Novo Usuário
              </button>
            </div>

            {/* Lista de Usuários */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {users.map((u) => (
                <div key={u.id} className="bg-white rounded-3xl p-6 border border-stone-200 shadow-2xs space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-stone-100 text-[#b4536a] flex items-center justify-center font-black text-sm">
                      {u.name.substring(0, 2).toUpperCase()}
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-pink-100 text-[#b4536a]">
                      {u.role}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 text-sm">{u.name}</h3>
                    <p className="text-xs text-stone-400">{u.email}</p>
                  </div>
                  <div className="pt-2 border-t border-stone-100 text-[11px] text-stone-400">
                    Cadastrado em {new Date(u.createdAt).toLocaleDateString("pt-BR")}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>

      {/* ======================================================== */}
      {/* MODAL: GERENCIAR PEDIDO                                  */}
      {/* ======================================================== */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-stone-200 space-y-5 animate-fade-in">
            <div className="flex items-center justify-between border-b border-stone-100 pb-4">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-stone-400">Gerenciar Pedido</span>
                <h3 className="text-lg font-black text-stone-900">#{selectedOrder.id}</h3>
              </div>
              <button
                onClick={() => setSelectedOrder(null)}
                className="text-stone-400 hover:text-stone-600 text-xs font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleUpdateOrderStatus} className="space-y-4">
              <div>
                <label className="text-[11px] font-black uppercase tracking-wider text-stone-500 block mb-1.5">
                  Status do Pedido
                </label>
                <select
                  value={newStatus}
                  onChange={(e) => setNewStatus(e.target.value as OrderStatus)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-bold text-stone-800 bg-stone-50 outline-none focus:border-[#b4536a]"
                >
                  <option value="pendente">Pendente</option>
                  <option value="pago">Pago</option>
                  <option value="separacao">Em Separação</option>
                  <option value="enviado">Enviado (Despachado)</option>
                  <option value="entregue">Entregue</option>
                  <option value="cancelado">Cancelado</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-black uppercase tracking-wider text-stone-500 block mb-1.5">
                  Transportadora
                </label>
                <input
                  type="text"
                  value={trackingCompany}
                  onChange={(e) => setTrackingCompany(e.target.value)}
                  placeholder="Correios / Jadlog / Loggi"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-bold text-stone-800 bg-stone-50 outline-none focus:border-[#b4536a]"
                />
              </div>

              <div>
                <label className="text-[11px] font-black uppercase tracking-wider text-stone-500 block mb-1.5">
                  Código de Rastreamento
                </label>
                <input
                  type="text"
                  value={trackingCode}
                  onChange={(e) => setTrackingCode(e.target.value)}
                  placeholder="Ex: BR918234SP ou NL481920419BR"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs font-mono font-bold text-stone-800 bg-stone-50 outline-none focus:border-[#b4536a]"
                />
              </div>

              {/* Endereço de Entrega */}
              <div className="bg-stone-50 p-3.5 rounded-2xl border border-stone-100 text-xs space-y-1">
                <span className="font-bold text-stone-700 block">Endereço do Destinatário:</span>
                <p className="text-stone-600">
                  {selectedOrder.address.street}, {selectedOrder.address.number}
                  {selectedOrder.address.complement && ` (${selectedOrder.address.complement})`}
                </p>
                <p className="text-stone-600">
                  {selectedOrder.address.city}/{selectedOrder.address.state} • CEP {selectedOrder.address.zipCode}
                </p>
                <div className="pt-2 flex items-center gap-2">
                  <a
                    href={`https://wa.me/55${selectedOrder.customer.phone.replace(/\D/g, "")}?text=Olá ${selectedOrder.customer.name}! Seu pedido %23${selectedOrder.id} na Biorenov foi atualizado.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg hover:bg-emerald-100 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" /> Falar com Cliente no WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedOrder(null)}
                  className="px-4 py-2 rounded-xl text-stone-500 text-xs font-bold hover:bg-stone-100 cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={isUpdatingOrder}
                  className="px-5 py-2 rounded-xl bg-[#b4536a] hover:bg-[#9c4357] text-white text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer disabled:opacity-50"
                >
                  {isUpdatingOrder ? "Salvando..." : "Salvar Atualização"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL: NOVA DESPESA FIXA (DRE)                          */}
      {/* ======================================================== */}
      {showAddExpense && (
        <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-stone-200 space-y-4 animate-fade-in">
            <h3 className="text-base font-black text-stone-900">Lançar Despesa Fixa para DRE</h3>
            <form onSubmit={handleAddExpense} className="space-y-3">
              <div>
                <label className="text-[11px] font-black uppercase text-stone-500 block mb-1">Descrição</label>
                <input
                  type="text"
                  required
                  value={newExpense.descricao}
                  onChange={(e) => setNewExpense({ ...newExpense, descricao: e.target.value })}
                  placeholder="Ex: Tráfego Meta Ads / Designer"
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs font-medium bg-stone-50 outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] font-black uppercase text-stone-500 block mb-1">Categoria</label>
                <select
                  value={newExpense.categoria}
                  onChange={(e) => setNewExpense({ ...newExpense, categoria: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs font-bold bg-stone-50 outline-none"
                >
                  <option value="Marketing">Marketing</option>
                  <option value="Tecnologia / Softwares">Tecnologia / Softwares</option>
                  <option value="Insumos & Embalagens">Insumos & Embalagens</option>
                  <option value="Pessoal / Salários">Pessoal / Salários</option>
                  <option value="Ocupação">Ocupação</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-black uppercase text-stone-500 block mb-1">Valor (R$)</label>
                <input
                  type="number"
                  step="0.01"
                  required
                  value={newExpense.valor}
                  onChange={(e) => setNewExpense({ ...newExpense, valor: e.target.value })}
                  placeholder="0,00"
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs font-black bg-stone-50 outline-none"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddExpense(false)}
                  className="px-4 py-2 rounded-xl text-stone-500 text-xs font-bold cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#b4536a] text-white text-xs font-bold uppercase cursor-pointer"
                >
                  Salvar Despesa
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL: NOVO USUÁRIO                                      */}
      {/* ======================================================== */}
      {showAddUser && (
        <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-stone-200 space-y-4 animate-fade-in">
            <h3 className="text-base font-black text-stone-900">Adicionar Usuário / Membro da Equipe</h3>
            <form onSubmit={handleCreateUser} className="space-y-3">
              <div>
                <label className="text-[11px] font-black uppercase text-stone-500 block mb-1">Nome Completo</label>
                <input
                  type="text"
                  required
                  value={newUser.name}
                  onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                  placeholder="Ex: Douglas Alan"
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs bg-stone-50 outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] font-black uppercase text-stone-500 block mb-1">E-mail</label>
                <input
                  type="email"
                  required
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                  placeholder="usuario@biorenov.com.br"
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs bg-stone-50 outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] font-black uppercase text-stone-500 block mb-1">Cargo / Função</label>
                <select
                  value={newUser.role}
                  onChange={(e) => setNewUser({ ...newUser, role: e.target.value as any })}
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs font-bold bg-stone-50 outline-none"
                >
                  <option value="admin">Administrador Geral</option>
                  <option value="operador">Operador de Pedidos / Separação</option>
                  <option value="financeiro">Financeiro / DRE</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-black uppercase text-stone-500 block mb-1">Senha Provisória</label>
                <input
                  type="password"
                  value={newUser.password}
                  onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                  placeholder="Mínimo 6 caracteres"
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs bg-stone-50 outline-none"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddUser(false)}
                  className="px-4 py-2 rounded-xl text-stone-500 text-xs font-bold cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#b4536a] text-white text-xs font-bold uppercase cursor-pointer"
                >
                  Criar Acesso
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
