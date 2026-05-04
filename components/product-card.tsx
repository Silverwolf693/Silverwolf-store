import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="relative h-52 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="space-y-3 p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{product.category}</p>
        <h3 className="line-clamp-2 text-lg font-semibold text-slate-900">{product.name}</h3>
        <p className="text-xl font-bold text-accent">${product.price.toFixed(2)}</p>
        <Link
          href={`/product/${product.id}`}
          className="inline-flex rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-700"
        >
          View
        </Link>
      </div>
    </article>
  );
}
