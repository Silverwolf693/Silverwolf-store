import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { getProducts } from "@/lib/products";

export default function HomePage() {
  const products = getProducts();
  const featured = products.slice(0, 4);

  return (
    <div className="container-page space-y-16">
      <section className="rounded-2xl bg-white p-8 shadow-sm sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">Silverwolf Store</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Tech essentials, built for everyday performance.</h1>
        <p className="mt-4 max-w-2xl text-slate-600">Explore curated audio, accessories, and wearables designed to elevate your daily workflow.</p>
        <Link href="/shop" className="mt-7 inline-flex rounded-xl bg-accent px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
          Shop now
        </Link>
      </section>

      <section className="space-y-6">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold">Featured products</h2>
        </div>
        {featured.length ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="rounded-2xl bg-white p-8 text-center text-slate-600 shadow-sm">No products available yet</p>
        )}
      </section>
    </div>
  );
}
