import fs from "fs";
import path from "path";

export interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  sku?: string;
}

export interface CustomerData {
  name: string;
  email: string;
  phone: string;
  document?: string;
}

export interface ShippingAddress {
  zipCode: string;
  street: string;
  number: string;
  complement?: string;
  neighborhood?: string;
  city: string;
  state: string;
}

export type OrderStatus =
  | "pendente"
  | "pago"
  | "separacao"
  | "enviado"
  | "entregue"
  | "cancelado";

export interface StatusHistoryEntry {
  status: OrderStatus;
  date: string;
  note?: string;
}

export interface Order {
  id: string; // e.g. BIO-839201
  createdAt: string;
  updatedAt: string;
  customer: CustomerData;
  address: ShippingAddress;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  discount: number;
  total: number;
  status: OrderStatus;
  paymentMethod: "pix" | "cartao_credito" | "boleto" | "mercadopago";
  paymentId?: string;
  trackingCode?: string;
  trackingCompany?: string;
  history: StatusHistoryEntry[];
}

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: "admin" | "operador" | "financeiro";
  passwordHash: string;
  createdAt: string;
}

export interface Expense {
  id: string;
  descricao: string;
  categoria:
    | "Marketing"
    | "Ocupação"
    | "Pessoal / Salários"
    | "Tecnologia / Softwares"
    | "Impostos / Tributos"
    | "Financeiro / Tarifas"
    | "Insumos & Embalagens"
    | "Outros";
  valor: number;
  mes_competencia: string; // "2026-11"
  data_vencimento: string;
  status: "pago" | "pendente";
}

interface DatabaseSchema {
  orders: Order[];
  users: AdminUser[];
  expenses: Expense[];
  settings: {
    taxRate: number; // e.g. 0.06
    gatewayFeePercent: number; // e.g. 0.0399
    averageCmvPercent: number; // e.g. 0.28 (28% custo do produto)
    notificationEmail: string;
  };
}

const DB_FILE_PATH = path.join(process.cwd(), "data", "store_database.json");

// Seed inicial para o painel já carregar rico e operacional
const INITIAL_DATABASE: DatabaseSchema = {
  orders: [
    {
      id: "BIO-918234",
      createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
      updatedAt: new Date(Date.now() - 3600000 * 2).toISOString(),
      customer: {
        name: "Dra. Camila Vasconcelos",
        email: "camila.vasconcelos@clinica.com.br",
        phone: "(11) 98765-4321",
        document: "329.841.920-44",
      },
      address: {
        zipCode: "01419-001",
        street: "Alameda Santos",
        number: "1470",
        complement: "Sala 82",
        neighborhood: "Cerqueira César",
        city: "São Paulo",
        state: "SP",
      },
      items: [
        {
          id: "kit-3-passos-completo",
          name: "Kit Protocolo Completo Biorenov (3 Passos)",
          price: 349.0,
          quantity: 1,
          image: "/produtos/aky06791.jpg",
        },
      ],
      subtotal: 349.0,
      shipping: 0.0,
      discount: 0.0,
      total: 349.0,
      status: "separacao",
      paymentMethod: "pix",
      trackingCode: "BR918234SP",
      trackingCompany: "Correios Sedex",
      history: [
        { status: "pendente", date: new Date(Date.now() - 3600000 * 2).toISOString(), note: "Pedido recebido via loja online" },
        { status: "pago", date: new Date(Date.now() - 3600000 * 1.8).toISOString(), note: "Pagamento Pix instantâneo confirmado" },
        { status: "separacao", date: new Date(Date.now() - 3600000 * 1.2).toISOString(), note: "Embalagem e conferência no laboratório" },
      ],
    },
    {
      id: "BIO-918112",
      createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
      updatedAt: new Date(Date.now() - 3600000 * 6).toISOString(),
      customer: {
        name: "Mariana Albuquerque",
        email: "mari.albuquerque@gmail.com",
        phone: "(21) 99881-2244",
        document: "192.482.019-33",
      },
      address: {
        zipCode: "22041-001",
        street: "Avenida Atlântica",
        number: "2600",
        complement: "Apto 1102",
        neighborhood: "Copacabana",
        city: "Rio de Janeiro",
        state: "RJ",
      },
      items: [
        {
          id: "dorless-terapeutico",
          name: "Dorless Creme Relaxante Muscular 240g",
          price: 139.0,
          quantity: 2,
          image: "/produtos/aky06721.jpg",
        },
      ],
      subtotal: 278.0,
      shipping: 18.9,
      discount: 0.0,
      total: 296.9,
      status: "enviado",
      paymentMethod: "cartao_credito",
      trackingCode: "NL481920419BR",
      trackingCompany: "Correios Sedex",
      history: [
        { status: "pendente", date: new Date(Date.now() - 3600000 * 24).toISOString() },
        { status: "pago", date: new Date(Date.now() - 3600000 * 23.9).toISOString() },
        { status: "separacao", date: new Date(Date.now() - 3600000 * 18).toISOString() },
        { status: "enviado", date: new Date(Date.now() - 3600000 * 6).toISOString(), note: "Despachado via Sedex" },
      ],
    },
    {
      id: "BIO-917990",
      createdAt: new Date(Date.now() - 3600000 * 48).toISOString(),
      updatedAt: new Date(Date.now() - 3600000 * 12).toISOString(),
      customer: {
        name: "Juliana Peixoto Ribeiro",
        email: "juliana.peixoto@yahoo.com.br",
        phone: "(31) 99234-8899",
      },
      address: {
        zipCode: "30130-110",
        street: "Rua Sergipe",
        number: "880",
        neighborhood: "Funcionários",
        city: "Belo Horizonte",
        state: "MG",
      },
      items: [
        {
          id: "biolumini-uniformizador",
          name: "Sérum Clareador Biolumini Melasma Probiótico",
          price: 179.8,
          quantity: 1,
          image: "/produtos/aky06708.jpg",
        },
      ],
      subtotal: 179.8,
      shipping: 14.5,
      discount: 0.0,
      total: 194.3,
      status: "entregue",
      paymentMethod: "pix",
      trackingCode: "NL481002341BR",
      trackingCompany: "Correios",
      history: [
        { status: "pendente", date: new Date(Date.now() - 3600000 * 48).toISOString() },
        { status: "pago", date: new Date(Date.now() - 3600000 * 47.9).toISOString() },
        { status: "separacao", date: new Date(Date.now() - 3600000 * 40).toISOString() },
        { status: "enviado", date: new Date(Date.now() - 3600000 * 28).toISOString() },
        { status: "entregue", date: new Date(Date.now() - 3600000 * 12).toISOString(), note: "Entregue ao destinatário" },
      ],
    },
  ],
  users: [
    {
      id: "usr-admin-1",
      name: "Isaque Duarte",
      email: "isaqueduarte07@gmail.com",
      role: "admin",
      passwordHash: "admin123",
      createdAt: new Date().toISOString(),
    },
    {
      id: "usr-admin-2",
      name: "Douglas Alan",
      email: "douglas@biorenov.com.br",
      role: "admin",
      passwordHash: "biorenov2026",
      createdAt: new Date().toISOString(),
    },
  ],
  expenses: [
    {
      id: "exp-001",
      descricao: "Tráfego Pago Meta Ads (Instagram/Facebook)",
      categoria: "Marketing",
      valor: 3500.0,
      mes_competencia: new Date().toISOString().substring(0, 7),
      data_vencimento: `${new Date().toISOString().substring(0, 7)}-10`,
      status: "pago",
    },
    {
      id: "exp-002",
      descricao: "Google Ads (Palavras-chave Melasma e Creme)",
      categoria: "Marketing",
      valor: 1800.0,
      mes_competencia: new Date().toISOString().substring(0, 7),
      data_vencimento: `${new Date().toISOString().substring(0, 7)}-15`,
      status: "pago",
    },
    {
      id: "exp-003",
      descricao: "Hospedagem Vercel Pro & Domínios",
      categoria: "Tecnologia / Softwares",
      valor: 240.0,
      mes_competencia: new Date().toISOString().substring(0, 7),
      data_vencimento: `${new Date().toISOString().substring(0, 7)}-05`,
      status: "pago",
    },
    {
      id: "exp-004",
      descricao: "Caixas e Embalagens Biodegradáveis Biorenov",
      categoria: "Insumos & Embalagens",
      valor: 950.0,
      mes_competencia: new Date().toISOString().substring(0, 7),
      data_vencimento: `${new Date().toISOString().substring(0, 7)}-20`,
      status: "pendente",
    },
  ],
  settings: {
    taxRate: 0.06, // 6% Simples Nacional
    gatewayFeePercent: 0.0399, // 3.99% Mercado Pago
    averageCmvPercent: 0.28, // 28% CMV
    notificationEmail: "isaqueduarte07@gmail.com",
  },
};

// Cache em memória para ambientes serverless
let inMemoryDB: DatabaseSchema | null = null;

function loadDatabase(): DatabaseSchema {
  if (inMemoryDB) return inMemoryDB;

  try {
    if (fs.existsSync(DB_FILE_PATH)) {
      const content = fs.readFileSync(DB_FILE_PATH, "utf-8");
      inMemoryDB = JSON.parse(content) as DatabaseSchema;
      return inMemoryDB;
    }
  } catch (err) {
    console.error("Erro ao ler store_database.json do disco:", err);
  }

  // Se não existir, inicializa e tenta salvar
  inMemoryDB = { ...INITIAL_DATABASE };
  saveDatabase(inMemoryDB);
  return inMemoryDB;
}

function saveDatabase(db: DatabaseSchema) {
  inMemoryDB = db;
  try {
    const dir = path.dirname(DB_FILE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DB_FILE_PATH, JSON.stringify(db, null, 2), "utf-8");
  } catch (err) {
    console.warn("Aviso: Não foi possível persistir no disco local (ambiente read-only?):", err);
  }
}

// ==========================================
// MÉTODOS PÚBLICOS DE PEDIDOS
// ==========================================

export async function getOrders(): Promise<Order[]> {
  const db = loadDatabase();
  return [...db.orders].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export async function getOrderById(id: string): Promise<Order | null> {
  const db = loadDatabase();
  const order = db.orders.find((o) => o.id.toUpperCase() === id.toUpperCase());
  return order || null;
}

export async function createOrder(data: {
  id?: string;
  customer: CustomerData;
  address: ShippingAddress;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  discount?: number;
  total: number;
  paymentMethod: "pix" | "cartao_credito" | "boleto" | "mercadopago";
  paymentId?: string;
}): Promise<Order> {
  const db = loadDatabase();
  const orderId = data.id || `BIO-${Math.floor(100000 + Math.random() * 900000)}`;
  const now = new Date().toISOString();

  const newOrder: Order = {
    id: orderId,
    createdAt: now,
    updatedAt: now,
    customer: data.customer,
    address: data.address,
    items: data.items,
    subtotal: data.subtotal,
    shipping: data.shipping,
    discount: data.discount || 0,
    total: data.total,
    status: "pago", // Por padrão em checkout já registrado/simulado
    paymentMethod: data.paymentMethod,
    paymentId: data.paymentId,
    trackingCode: undefined,
    trackingCompany: "Correios",
    history: [
      { status: "pendente", date: now, note: "Pedido realizado pelo cliente" },
      { status: "pago", date: now, note: "Pagamento aprovado com sucesso" },
    ],
  };

  // Evita duplicatas se o ID já existir
  const existingIdx = db.orders.findIndex((o) => o.id === orderId);
  if (existingIdx >= 0) {
    db.orders[existingIdx] = newOrder;
  } else {
    db.orders.unshift(newOrder);
  }

  saveDatabase(db);
  return newOrder;
}

export async function updateOrderStatus(
  orderId: string,
  newStatus: OrderStatus,
  trackingCode?: string,
  trackingCompany?: string,
  note?: string
): Promise<Order | null> {
  const db = loadDatabase();
  const order = db.orders.find((o) => o.id.toUpperCase() === orderId.toUpperCase());
  if (!order) return null;

  const now = new Date().toISOString();
  order.status = newStatus;
  order.updatedAt = now;

  if (trackingCode) {
    order.trackingCode = trackingCode;
  }
  if (trackingCompany) {
    order.trackingCompany = trackingCompany;
  }

  order.history.push({
    status: newStatus,
    date: now,
    note: note || (trackingCode ? `Código de rastreio anexado: ${trackingCode}` : undefined),
  });

  saveDatabase(db);
  return order;
}

// ==========================================
// MÉTODOS DE USUÁRIOS / ADMIN
// ==========================================

export async function getAdminUsers(): Promise<AdminUser[]> {
  const db = loadDatabase();
  return db.users;
}

export async function createAdminUser(user: {
  name: string;
  email: string;
  role: "admin" | "operador" | "financeiro";
  passwordHash?: string;
}): Promise<AdminUser> {
  const db = loadDatabase();
  const newUser: AdminUser = {
    id: `usr-${Date.now()}`,
    name: user.name,
    email: user.email.toLowerCase().trim(),
    role: user.role,
    passwordHash: user.passwordHash || "123456",
    createdAt: new Date().toISOString(),
  };

  db.users.push(newUser);
  saveDatabase(db);
  return newUser;
}

export async function deleteAdminUser(id: string): Promise<boolean> {
  const db = loadDatabase();
  const initialLen = db.users.length;
  db.users = db.users.filter((u) => u.id !== id);
  if (db.users.length !== initialLen) {
    saveDatabase(db);
    return true;
  }
  return false;
}

// ==========================================
// MÉTODOS DE DESPESAS (DRE)
// ==========================================

export async function getExpenses(mesCompetencia?: string): Promise<Expense[]> {
  const db = loadDatabase();
  if (!mesCompetencia) return db.expenses;
  return db.expenses.filter((e) => e.mes_competencia === mesCompetencia);
}

export async function addExpense(expense: Omit<Expense, "id">): Promise<Expense> {
  const db = loadDatabase();
  const newExp: Expense = {
    ...expense,
    id: `exp-${Date.now()}`,
  };
  db.expenses.push(newExp);
  saveDatabase(db);
  return newExp;
}

export async function deleteExpense(id: string): Promise<boolean> {
  const db = loadDatabase();
  const len = db.expenses.length;
  db.expenses = db.expenses.filter((e) => e.id !== id);
  if (db.expenses.length !== len) {
    saveDatabase(db);
    return true;
  }
  return false;
}

// ==========================================
// CONFIGURAÇÕES
// ==========================================

export async function getSettings() {
  const db = loadDatabase();
  return db.settings;
}

export async function updateSettings(settings: Partial<DatabaseSchema["settings"]>) {
  const db = loadDatabase();
  db.settings = { ...db.settings, ...settings };
  saveDatabase(db);
  return db.settings;
}
