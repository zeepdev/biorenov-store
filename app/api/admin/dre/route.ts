import { NextResponse } from "next/server";
import { getOrders, getExpenses, getSettings } from "@/lib/db";
import { calcularDREEcommerce } from "@/lib/dreEngine";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const mesAno = searchParams.get("mes") || new Date().toISOString().substring(0, 7);

    const [orders, expenses, settings] = await Promise.all([
      getOrders(),
      getExpenses(),
      getSettings(),
    ]);

    const dre = calcularDREEcommerce(
      orders,
      expenses,
      mesAno,
      settings.taxRate,
      settings.gatewayFeePercent,
      settings.averageCmvPercent
    );

    return NextResponse.json({ dre, settings });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Erro ao calcular DRE";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
