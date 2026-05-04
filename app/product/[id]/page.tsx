import Image from "next/image";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { getProductById } from "@/lib/products";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) notFound();

  return (
    <div className="container-page">
      <article className="grid gap-8 rounded-2xl bg-white p-6 shadow-sm md:grid-cols-2 md:p-8">
        <div className="relative h-80 overflow-hidden rounded-2xl">
          <Image src={product.image} alt={product.name} fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">{product.category}</p>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-2xl font-bold text-accent">${product.price.toFixed(2)}</p>
          <p className="leading-relaxed text-slate-600">{product.description}</p>
          <p className={product.stock ? "font-semibold text-emerald-600" : "font-semibold text-rose-600"}>
            {product.stock ? "In stock" : "Currently unavailable"}
          </p>
          <AddToCartButton product={product} />
        </div>
      </article>
    </div>
  );
}
