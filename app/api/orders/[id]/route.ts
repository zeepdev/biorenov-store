import { NextResponse } from "next/server";
import { getOrderById } from "@/lib/db";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const order = await getOrderById(id);

    if (!order) {
      return NextResponse.json({ error: "Pedido não encontrado" }, { status: 404 });
    }

    return NextResponse.json({ order });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Erro ao consultar pedido";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
