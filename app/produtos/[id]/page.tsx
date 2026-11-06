import { notFound } from "next/navigation";
import { PRODUCTS } from "@/data/products";
import { ProductPurchaseView } from "@/components/ProductPurchaseView";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) {
    return { title: "Produto não encontrado | Biorenov" };
  }
  return {
    title: `${product.name} | Biorenov Loja Oficial`,
    description: product.description,
  };
}

export default async function ProductPagePlural({ params }: Props) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return <ProductPurchaseView product={product} />;
}
