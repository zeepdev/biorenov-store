import { NextResponse } from "next/server";
import { getOrders, updateOrderStatus, OrderStatus } from "@/lib/db";

export async function GET() {
  try {
    const orders = await getOrders();
    return NextResponse.json({ orders });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Erro ao carregar pedidos";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const { orderId, status, trackingCode, trackingCompany, note } = body as {
      orderId: string;
      status: OrderStatus;
      trackingCode?: string;
      trackingCompany?: string;
      note?: string;
    };

    if (!orderId || !status) {
      return NextResponse.json(
        { error: "orderId e status são obrigatórios" },
        { status: 400 }
      );
    }

    const updated = await updateOrderStatus(
      orderId,
      status,
      trackingCode,
      trackingCompany,
      note
    );

    if (!updated) {
      return NextResponse.json({ error: "Pedido não encontrado" }, { status: 404 });
    }

    return NextResponse.json({ order: updated });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Erro ao atualizar pedido";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
