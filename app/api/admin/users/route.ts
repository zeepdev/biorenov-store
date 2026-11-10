import { NextResponse } from "next/server";
import { getAdminUsers, createAdminUser, deleteAdminUser } from "@/lib/db";

export async function GET() {
  try {
    const users = await getAdminUsers();
    // Omite passwordHash por segurança
    const sanitized = users.map(({ passwordHash, ...rest }) => rest);
    return NextResponse.json({ users: sanitized });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Erro ao carregar usuários";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, role, password } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Nome e e-mail são obrigatórios" },
        { status: 400 }
      );
    }

    const newUser = await createAdminUser({
      name,
      email,
      role: role || "operador",
      passwordHash: password || "123456",
    });

    const { passwordHash, ...sanitized } = newUser;
    return NextResponse.json({ user: sanitized });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Erro ao criar usuário";
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

    const ok = await deleteAdminUser(id);
    return NextResponse.json({ success: ok });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Erro ao remover usuário";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
