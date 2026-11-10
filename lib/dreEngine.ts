import { Order, Expense } from "./db";

export interface DREResult {
  mesAno: string;
  receitaBrutaTotal: number;
  totalPedidos: number;
  ticketMedio: number;
  impostosDeducao: number;
  taxasGatewayDeducao: number;
  receitaLiquida: number;
  custoMercadoriasVendidas: number; // CMV
  custoFrete: number;
  totalCustosVariaveis: number;
  margemContribuicaoValor: number;
  margemContribuicaoPercent: number;
  despesasPorCategoria: Record<string, number>;
  totalDespesasFixas: number;
  lucroLiquidoOperacional: number; // EBITDA
  margemLiquidaPercent: number;
  pontoEquilibrioFinanceiro: number; // Break-Even Point
  faturamentoMinimoDiario: number;
  atingimentoBreakEven: number;
  pedidosMes: Order[];
}

export function formatCurrency(val: number): string {
  const num = Number(val) || 0;
  return num.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function formatPercent(val: number, decimals = 1): string {
  const num = Number(val) || 0;
  return `${num.toFixed(decimals)}%`;
}

/**
 * Calcula a DRE Gerencial de E-commerce para o mês
 */
export function calcularDREEcommerce(
  orders: Order[],
  expenses: Expense[],
  mesAno: string, // 'YYYY-MM'
  aliquotaImposto = 0.06, // 6% Simples Nacional
  taxaGateway = 0.0399, // 3.99% Mercado Pago
  aliquotaCmv = 0.28 // 28% CMV médio de cosméticos/fórmula
): DREResult {
  // Filtra pedidos pagos do mês
  const pedidosMes = orders.filter((o) => {
    const dataRef = o.createdAt.substring(0, 7);
    return dataRef === mesAno && o.status !== "cancelado";
  });

  // Filtra despesas do mês
  const despesasMes = expenses.filter((e) => {
    return e.mes_competencia === mesAno;
  });

  // 1. Receita Operacional Bruta
  const receitaBrutaTotal = pedidosMes.reduce((acc, o) => acc + (o.total || 0), 0);
  const totalPedidos = pedidosMes.length;
  const ticketMedio = totalPedidos > 0 ? receitaBrutaTotal / totalPedidos : 0;

  // 2. Deduções Diretas
  const impostosDeducao = receitaBrutaTotal * aliquotaImposto;
  const taxasGatewayDeducao = receitaBrutaTotal * taxaGateway;
  const receitaLiquida = Math.max(0, receitaBrutaTotal - impostosDeducao - taxasGatewayDeducao);

  // 3. Custos Variáveis (CMV e Frete absorvido)
  const subtotalProdutos = pedidosMes.reduce((acc, o) => acc + (o.subtotal || 0), 0);
  const custoMercadoriasVendidas = subtotalProdutos * aliquotaCmv;
  const custoFrete = pedidosMes.reduce((acc, o) => acc + (o.shipping || 0), 0);
  const totalCustosVariaveis = custoMercadoriasVendidas + custoFrete;

  // 4. Margem de Contribuição
  const margemContribuicaoValor = receitaLiquida - totalCustosVariaveis;
  const margemContribuicaoPercent =
    receitaLiquida > 0 ? (margemContribuicaoValor / receitaLiquida) * 100 : 0;

  // 5. Despesas Fixas Estruturais
  const despesasPorCategoria: Record<string, number> = {
    Marketing: 0,
    Ocupação: 0,
    "Pessoal / Salários": 0,
    "Tecnologia / Softwares": 0,
    "Impostos / Tributos": 0,
    "Financeiro / Tarifas": 0,
    "Insumos & Embalagens": 0,
    Outros: 0,
  };

  let totalDespesasFixas = 0;
  despesasMes.forEach((exp) => {
    const val = Number(exp.valor) || 0;
    const cat = exp.categoria || "Outros";
    if (despesasPorCategoria[cat] !== undefined) {
      despesasPorCategoria[cat] += val;
    } else {
      despesasPorCategoria["Outros"] += val;
    }
    totalDespesasFixas += val;
  });

  // 6. Resultado Operacional Líquido (EBITDA)
  const lucroLiquidoOperacional = margemContribuicaoValor - totalDespesasFixas;
  const margemLiquidaPercent =
    receitaLiquida > 0 ? (lucroLiquidoOperacional / receitaLiquida) * 100 : 0;

  // 7. Ponto de Equilíbrio Financeiro (Break-Even)
  const indiceMargem = margemContribuicaoPercent / 100;
  const pontoEquilibrioFinanceiro =
    indiceMargem > 0 ? totalDespesasFixas / indiceMargem : 0;

  const diasNoMes = 30;
  const faturamentoMinimoDiario =
    pontoEquilibrioFinanceiro > 0 ? pontoEquilibrioFinanceiro / diasNoMes : 0;

  const atingimentoBreakEven =
    pontoEquilibrioFinanceiro > 0
      ? (receitaBrutaTotal / pontoEquilibrioFinanceiro) * 100
      : 0;

  return {
    mesAno,
    receitaBrutaTotal,
    totalPedidos,
    ticketMedio,
    impostosDeducao,
    taxasGatewayDeducao,
    receitaLiquida,
    custoMercadoriasVendidas,
    custoFrete,
    totalCustosVariaveis,
    margemContribuicaoValor,
    margemContribuicaoPercent,
    despesasPorCategoria,
    totalDespesasFixas,
    lucroLiquidoOperacional,
    margemLiquidaPercent,
    pontoEquilibrioFinanceiro,
    faturamentoMinimoDiario,
    atingimentoBreakEven,
    pedidosMes,
  };
}
