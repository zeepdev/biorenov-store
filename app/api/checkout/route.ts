import { NextResponse } from "next/server";
import { MercadoPagoConfig, Preference } from "mercadopago";

interface CheckoutItem {
  product: {
    id: string;
    name: string;
    price: number;
  };
  quantity: number;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { items, customer, address } = body as {
      items: CheckoutItem[];
      customer: { name: string; email: string; phone: string; document?: string };
      address: { zipCode: string; street: string; number: string; city: string; state: string };
    };

    if (!items || items.length === 0) {
      return NextResponse.json({ error: "Carrinho vazio" }, { status: 400 });
    }

    const accessToken = process.env.MP_ACCESS_TOKEN;

    // Se ainda não configurou o token do Mercado Pago, roda em modo de demonstração assistida
    if (!accessToken || accessToken === "SEU_MERCADO_PAGO_ACCESS_TOKEN") {
      const orderNumber = `BIO-${Math.floor(100000 + Math.random() * 900000)}`;
      const totalAmount = items.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
      );

      return NextResponse.json({
        mode: "demo",
        orderId: orderNumber,
        total: totalAmount,
        customer,
        message: "Modo de simulação ativo. Adicione MP_ACCESS_TOKEN no .env.local para gerar cobrança real no Mercado Pago.",
        simulatedPixCode: `00020126580014br.gov.bcb.pix0136biorenov-chave-pix-${orderNumber}5204000053039865802BR5920Biorenov Ecommerce6009Sao Paulo62070503***6304B76D`,
      });
    }

    const client = new MercadoPagoConfig({ accessToken });
    const preference = new Preference(client);

    const preferenceItems = items.map((item) => ({
      id: item.product.id,
      title: item.product.name,
      quantity: Number(item.quantity),
      unit_price: Number(item.product.price),
      currency_id: "BRL",
    }));

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const response = await preference.create({
      body: {
        items: preferenceItems,
        payer: {
          name: customer.name,
          email: customer.email,
          phone: {
            number: customer.phone.replace(/\D/g, ""),
          },
          address: {
            street_name: address.street,
            street_number: address.number,
            zip_code: address.zipCode.replace(/\D/g, ""),
          },
        },
        back_urls: {
          success: `${siteUrl}?status=success`,
          failure: `${siteUrl}?status=failure`,
          pending: `${siteUrl}?status=pending`,
        },
        auto_return: "approved",
        statement_descriptor: "BIORENOV",
        payment_methods: {
          excluded_payment_types: [],
          installments: 12,
        },
      },
    });

    return NextResponse.json({
      mode: "live",
      preferenceId: response.id,
      initPoint: response.init_point,
      sandboxInitPoint: response.sandbox_init_point,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Erro desconhecido ao gerar checkout";
    console.error("Erro na rota do Mercado Pago:", error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
