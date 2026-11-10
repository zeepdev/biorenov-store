import nodemailer from "nodemailer";
import { Order } from "./db";

const DEFAULT_ADMIN_EMAIL = "isaqueduarte07@gmail.com";

interface EmailResult {
  success: boolean;
  messageId?: string;
  previewUrl?: string | false;
  error?: string;
}

/**
 * Dispara e-mail de notificação para o administrador (isaqueduarte07@gmail.com)
 * quando uma nova compra for finalizada.
 */
export async function sendOrderNotificationToAdmin(order: Order): Promise<EmailResult> {
  const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL || DEFAULT_ADMIN_EMAIL;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const itemsHtml = order.items
    .map(
      (item) => `
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #eee;">
          <strong>${item.name}</strong>
        </td>
        <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: center;">
          ${item.quantity}x
        </td>
        <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">
          R$ ${item.price.toFixed(2).replace(".", ",")}
        </td>
        <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right; font-weight: bold;">
          R$ ${(item.price * item.quantity).toFixed(2).replace(".", ",")}
        </td>
      </tr>
    `
    )
    .join("");

  const emailHtml = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="utf-8">
      <title>Novo Pedido Biorenov #${order.id}</title>
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f7f5f2; margin: 0; padding: 24px; color: #231c20;">
      <div style="max-width: 620px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid #ece4df;">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #2b141d 0%, #4a2232 100%); padding: 30px; text-align: center; color: #ffffff;">
          <h1 style="margin: 0; font-size: 26px; font-weight: 800; letter-spacing: -0.5px;">BIORENOV</h1>
          <p style="margin: 6px 0 0 0; font-size: 13px; text-transform: uppercase; letter-spacing: 2px; color: #e9b7c6; font-weight: 600;">Nova Venda Confirmada!</p>
        </div>

        <div style="padding: 30px;">
          <!-- Badge Pedido -->
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #f2e9e4; padding-bottom: 16px; margin-bottom: 20px;">
            <div>
              <span style="font-size: 12px; color: #766e72; text-transform: uppercase; font-weight: 700;">Pedido:</span>
              <h2 style="margin: 2px 0 0 0; font-size: 22px; color: #b4536a; font-weight: 900;">${order.id}</h2>
            </div>
            <div style="text-align: right;">
              <span style="font-size: 12px; color: #766e72; text-transform: uppercase; font-weight: 700;">Valor Total:</span>
              <h2 style="margin: 2px 0 0 0; font-size: 22px; color: #1e2420; font-weight: 900;">R$ ${order.total.toFixed(2).replace(".", ",")}</h2>
            </div>
          </div>

          <!-- Dados do Cliente -->
          <div style="background-color: #faf5f3; border-radius: 12px; padding: 18px; margin-bottom: 24px; border: 1px solid #f0e3de;">
            <h3 style="margin: 0 0 10px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: #b4536a; font-weight: 800;">👤 Dados do Comprador</h3>
            <p style="margin: 4px 0; font-size: 14px;"><strong>Nome:</strong> ${order.customer.name}</p>
            <p style="margin: 4px 0; font-size: 14px;"><strong>E-mail:</strong> <a href="mailto:${order.customer.email}" style="color: #b4536a;">${order.customer.email}</a></p>
            <p style="margin: 4px 0; font-size: 14px;"><strong>WhatsApp / Telefone:</strong> <a href="https://wa.me/55${order.customer.phone.replace(/\D/g, "")}" style="color: #25D366; font-weight: bold;">${order.customer.phone}</a></p>
          </div>

          <!-- Endereço de Entrega -->
          <div style="background-color: #faf5f3; border-radius: 12px; padding: 18px; margin-bottom: 24px; border: 1px solid #f0e3de;">
            <h3 style="margin: 0 0 10px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: #b4536a; font-weight: 800;">📦 Endereço de Entrega</h3>
            <p style="margin: 4px 0; font-size: 14px;">${order.address.street}, ${order.address.number} ${order.address.complement ? `- ${order.address.complement}` : ""}</p>
            <p style="margin: 4px 0; font-size: 14px;">${order.address.neighborhood || ""} — ${order.address.city} / ${order.address.state}</p>
            <p style="margin: 4px 0; font-size: 14px;"><strong>CEP:</strong> ${order.address.zipCode}</p>
          </div>

          <!-- Itens do Pedido -->
          <h3 style="margin: 0 0 12px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: #33272d; font-weight: 800;">🛍️ Itens do Pedido</h3>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 13px;">
            <thead>
              <tr style="background-color: #f7ece8; color: #4a2232; font-weight: 700;">
                <th style="padding: 10px; text-align: left;">Produto</th>
                <th style="padding: 10px; text-align: center;">Qtd</th>
                <th style="padding: 10px; text-align: right;">Unitário</th>
                <th style="padding: 10px; text-align: right;">Total</th>
              </tr>
            </thead>
            <tbody>
              ${itemsHtml}
            </tbody>
          </table>

          <!-- Totais -->
          <div style="text-align: right; border-top: 1px solid #eee; padding-top: 12px; margin-bottom: 28px;">
            <p style="margin: 4px 0; font-size: 13px; color: #666;">Subtotal: R$ ${order.subtotal.toFixed(2).replace(".", ",")}</p>
            <p style="margin: 4px 0; font-size: 13px; color: #666;">Frete: ${order.shipping > 0 ? `R$ ${order.shipping.toFixed(2).replace(".", ",")}` : "Grátis"}</p>
            <p style="margin: 6px 0 0 0; font-size: 18px; font-weight: 900; color: #b4536a;">Total Final: R$ ${order.total.toFixed(2).replace(".", ",")}</p>
            <p style="margin: 4px 0 0 0; font-size: 12px; color: #888;">Forma: ${order.paymentMethod.toUpperCase()}</p>
          </div>

          <!-- Ações Rápidas -->
          <div style="text-align: center; margin-top: 30px;">
            <a href="${siteUrl}/admin" style="display: inline-block; background-color: #2b141d; color: #ffffff; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-size: 14px; font-weight: 700; margin-right: 8px;">Acessar Painel ADM & DRE</a>
            <a href="${siteUrl}/pedido/${order.id}" style="display: inline-block; background-color: #b4536a; color: #ffffff; text-decoration: none; padding: 14px 24px; border-radius: 8px; font-size: 14px; font-weight: 700;">Ver Rastreio do Pedido</a>
          </div>
        </div>

        <!-- Footer -->
        <div style="background-color: #faf5f3; padding: 18px; text-align: center; font-size: 11px; color: #8c8287; border-top: 1px solid #ece4df;">
          Biorenov Store • Sistema Automático de Notificações • Enviado para ${adminEmail}
        </div>
      </div>
    </body>
    </html>
  `;

  // 1. Tenta envio via SMTP configurado no ambiente
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT) || 587;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (smtpHost && smtpUser && smtpPass) {
    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const info = await transporter.sendMail({
        from: `"Biorenov Store" <${smtpUser}>`,
        to: adminEmail,
        replyTo: order.customer.email,
        subject: `🔔 [NOVA VENDA] Pedido #${order.id} - R$ ${order.total.toFixed(2).replace(".", ",")} (${order.customer.name})`,
        html: emailHtml,
      });

      console.log(`[E-mail Enviado com Sucesso] ID: ${info.messageId} para ${adminEmail}`);
      return { success: true, messageId: info.messageId };
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error("[Erro SMTP]:", msg);
      return { success: false, error: msg };
    }
  }

  // 2. Se tiver Resend configurado
  const resendApiKey = process.env.RESEND_API_KEY;
  if (resendApiKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Biorenov <onboarding@resend.dev>",
          to: adminEmail,
          subject: `🔔 [NOVA VENDA] Pedido #${order.id} - R$ ${order.total.toFixed(2).replace(".", ",")}`,
          html: emailHtml,
        }),
      });
      const data = await res.json();
      console.log("[Resend API Response]:", data);
      return { success: true, messageId: data.id };
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error("[Erro Resend]:", msg);
      return { success: false, error: msg };
    }
  }

  // 3. Fallback de Log Assistido (Garante que nunca trava a compra e fica registrado no console)
  console.log(`\n==========================================================`);
  console.log(`📧 [ALERTA DE PEDIDO BIORRENOV]`);
  console.log(`Destinatário: ${adminEmail}`);
  console.log(`Pedido: #${order.id}`);
  console.log(`Cliente: ${order.customer.name} (${order.customer.email} | ${order.customer.phone})`);
  console.log(`Total: R$ ${order.total.toFixed(2)}`);
  console.log(`Entrega: ${order.address.street}, ${order.address.number} - ${order.address.city}/${order.address.state}`);
  console.log(`==========================================================\n`);

  return {
    success: true,
    messageId: `simulated-${Date.now()}`,
  };
}
