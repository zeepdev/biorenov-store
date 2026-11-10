import { NextResponse } from "next/server";
import { getExpenses, addExpense, deleteExpense } from "@/lib/db";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const mes = searchParams.get("mes") || undefined;
    const expenses = await getExpenses(mes);
    return NextResponse.json({ expenses });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Erro ao carregar despesas";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { descricao, categoria, valor, mes_competencia, data_vencimento, status } = body;

    if (!descricao || !valor || !mes_competencia) {
      return NextResponse.json(
        { error: "Descrição, valor e mês de competência são obrigatórios" },
        { status: 400 }
      );
    }

    const newExp = await addExpense({
      descricao,
      categoria: categoria || "Outros",
      valor: Number(valor),
      mes_competencia,
      data_vencimento: data_vencimento || `${mes_competencia}-10`,
      status: status || "pago",
    });

    return NextResponse.json({ expense: newExp });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Erro ao cadastrar despesa";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ error: "ID obrigatório" }, { status: 400 });
    }

    const ok = await deleteExpense(id);
    return NextResponse.json({ success: ok });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Erro ao remover despesa";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
