import { NextResponse } from "next/server";
import { MercadoPagoConfig, Preference } from "mercadopago";
import { createOrder } from "@/lib/db";
import { sendOrderNotificationToAdmin } from "@/lib/email";

interface CheckoutItem {
  product: {
    id: string;
    name: string;
    price: number;
    image?: string;
  };
  quantity: number;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { items, customer, address, paymentMethod = "pix" } = body as {
      items: CheckoutItem[];
      customer: { name: string; email: string; phone: string; document?: string };
      address: {
        zipCode: string;
        street: string;
        number: string;
        complement?: string;
        neighborhood?: string;
        city: string;
        state: string;
      };
      paymentMethod?: "pix" | "cartao_credito" | "boleto" | "mercadopago";
    };

    if (!items || items.length === 0) {
      return NextResponse.json({ error: "Carrinho vazio" }, { status: 400 });
    }

    const orderNumber = `BIO-${Math.floor(100000 + Math.random() * 900000)}`;
    const subtotal = items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
    const shipping = subtotal >= 299 ? 0 : 18.9;
    const total = subtotal + shipping;

    // Formata itens para salvar no banco
    const dbItems = items.map((item) => ({
      id: item.product.id,
      name: item.product.name,
      price: item.product.price,
      quantity: item.quantity,
      image: item.product.image,
    }));

    // 1. Salva o pedido no banco de dados
    const savedOrder = await createOrder({
      id: orderNumber,
      customer,
      address,
      items: dbItems,
      subtotal,
      shipping,
      total,
      paymentMethod,
    });

    // 2. Dispara e-mail imediato de notificação para isaqueduarte07@gmail.com
    try {
      await sendOrderNotificationToAdmin(savedOrder);
    } catch (emailErr) {
      console.error("Erro ao enviar email ao admin:", emailErr);
      // Não trava a resposta da compra do cliente
    }

    const accessToken = process.env.MP_ACCESS_TOKEN;

    // Se ainda não configurou o token oficial do Mercado Pago, finaliza em modo de demonstração assistida
    if (!accessToken || accessToken === "SEU_MERCADO_PAGO_ACCESS_TOKEN") {
      return NextResponse.json({
        mode: "demo",
        orderId: savedOrder.id,
        subtotal,
        shipping,
        total,
        customer,
        address,
        message:
          "Pedido gravado com sucesso no banco de dados e notificação enviada para isaqueduarte07@gmail.com!",
        trackingUrl: `/pedido/${savedOrder.id}`,
        simulatedPixCode: `00020126580014br.gov.bcb.pix0136biorenov-chave-pix-${orderNumber}5204000053039865802BR5920Biorenov Ecommerce6009Sao Paulo62070503***6304B76D`,
      });
    }

    // Integração Real Mercado Pago
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
          success: `${siteUrl}/pedido/${savedOrder.id}?status=success`,
          failure: `${siteUrl}?status=failure`,
          pending: `${siteUrl}/pedido/${savedOrder.id}?status=pending`,
        },
        auto_return: "approved",
        statement_descriptor: "BIORENOV",
        external_reference: savedOrder.id,
        payment_methods: {
          excluded_payment_types: [],
          installments: 12,
        },
      },
    });

    return NextResponse.json({
      mode: "live",
      orderId: savedOrder.id,
      preferenceId: response.id,
      initPoint: response.init_point,
      sandboxInitPoint: response.sandbox_init_point,
      trackingUrl: `/pedido/${savedOrder.id}`,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Erro desconhecido ao gerar checkout";
    console.error("Erro na rota do Mercado Pago:", error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
